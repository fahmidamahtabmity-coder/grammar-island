/* Grammar Island — saved state: localStorage + export/import ("Save my treasure").
   SAVE_VERSION is bumped whenever the save format changes, so old saves are
   migrated instead of breaking (risk #5 in docs/RISKS.md). */

window.GI = window.GI || {};

(function () {
  var KEY = 'grammar-island-save';
  var SAVE_VERSION = 2;

  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  }
  function daysBetween(dayA, dayB) {
    if (!dayA) return Infinity;
    return Math.round((new Date(dayB) - new Date(dayA)) / 86400000);
  }
  GI.todayStr = today;

  function freshSave() {
    return {
      version: SAVE_VERSION,
      player: { name: '', avatar: '🦜' },
      pinHash: null,
      xp: 0,
      settings: { muted: false, banglaHints: true, goalXP: 150 },
      streak: { count: 0, lastDay: null, shieldUsedDay: null },
      today: { day: null, xp: 0, goalCelebrated: false },
      compass: null,        // Captain's Compass result: {recommendedId, weakIds, at, applied}
      islands: {},          // per-island progress, keyed by island id
      createdAt: new Date().toISOString()
    };
  }

  function freshIsland() {
    return {
      ruleRead: false,
      answered: 0,          // total graded answers on this island
      correct: 0,
      recent: [],           // last 40 results (1/0) → rolling accuracy
      gamesPlayed: {},      // e.g. { catch: 2, sort: 1 } — times completed
      bossBest: 0,
      bossPassed: false,
      mastered: false,
      review: null          // spaced repetition: {stage, nextAt} once mastered
    };
  }

  function migrate(data) {
    if (data.version === 1) {
      data.version = 2;
      data.settings.goalXP = data.settings.goalXP || 150;
      data.streak = { count: 0, lastDay: null, shieldUsedDay: null };
      data.today = { day: null, xp: 0, goalCelebrated: false };
      data.compass = null;
      Object.keys(data.islands).forEach(function (id) {
        var p = data.islands[id];
        p.review = p.review || null;
        /* island order changed in curriculum v2 — keep any started island reachable */
        if (p.ruleRead || p.answered > 0) p.parentUnlocked = true;
        /* already-mastered islands get a review schedule starting now + 2 days */
        if (p.mastered && !p.review) p.review = { stage: 0, nextAt: Date.now() + 2 * 86400000 };
      });
    }
    return data;
  }

  GI.state = null;

  GI.load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) { GI.state = freshSave(); return; }
      GI.state = migrate(JSON.parse(raw));
    } catch (e) {
      console.error('Could not load save, starting fresh', e);
      GI.state = freshSave();
    }
  };

  GI.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(GI.state)); }
    catch (e) { console.error('Could not save', e); }
  };

  GI.island = function (id) {
    if (!GI.state.islands[id]) GI.state.islands[id] = freshIsland();
    return GI.state.islands[id];
  };

  /* ---- streak: playing on consecutive days grows the flame; one missed day
     is forgiven by the shield (at most once per 7 days) ---- */

  function shieldReady() {
    var s = GI.state.streak;
    return !s.shieldUsedDay || daysBetween(s.shieldUsedDay, today()) >= 7;
  }

  GI.touchStreak = function () {
    var s = GI.state.streak;
    var t = today();
    if (s.lastDay === t) return null;
    var gap = daysBetween(s.lastDay, t);
    var event;
    if (gap === 1) { s.count += 1; event = 'up'; }
    else if (gap === 2 && shieldReady()) { s.count += 1; s.shieldUsedDay = t; event = 'shield'; }
    else { event = (s.count > 1) ? 'restart' : 'start'; s.count = 1; }
    s.lastDay = t;
    return event;
  };

  /* ---- XP + daily goal. Returns events for the UI to celebrate. ---- */

  GI.addXP = function (n) {
    var events = [];
    var streakEvent = GI.touchStreak();
    if (streakEvent) events.push({ type: 'streak', event: streakEvent, count: GI.state.streak.count });
    GI.state.xp += n;
    var t = today();
    if (GI.state.today.day !== t) GI.state.today = { day: t, xp: 0, goalCelebrated: false };
    GI.state.today.xp += n;
    if (GI.state.today.xp >= GI.state.settings.goalXP && !GI.state.today.goalCelebrated) {
      GI.state.today.goalCelebrated = true;
      events.push({ type: 'goal' });
    }
    if (events.length && GI.notify) events.forEach(GI.notify);
  };

  /* Record one graded answer for an island. */
  GI.recordAnswer = function (islandId, isCorrect) {
    var p = GI.island(islandId);
    p.answered += 1;
    if (isCorrect) { p.correct += 1; GI.addXP(10); }
    p.recent.push(isCorrect ? 1 : 0);
    if (p.recent.length > 40) p.recent.shift();
    GI.save();
  };

  GI.recordGameComplete = function (islandId, gameType) {
    var p = GI.island(islandId);
    p.gamesPlayed[gameType] = (p.gamesPlayed[gameType] || 0) + 1;
    GI.addXP(20);
    GI.save();
  };

  /* ---- "Save my treasure": export / import progress as a file ---- */

  GI.exportSave = function () {
    var blob = new Blob([JSON.stringify(GI.state, null, 2)], { type: 'application/json' });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'grammar-island-treasure.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  GI.importSave = function (file, onDone) {
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (typeof data.version !== 'number' || !data.player) throw new Error('not a treasure file');
        GI.state = migrate(data);
        GI.save();
        onDone(true);
      } catch (e) { onDone(false); }
    };
    reader.readAsText(file);
  };

  /* ---- Parent PIN. A child gate, NOT real security (see SECURITY.md). ---- */

  function tinyHash(str) {
    var h = 5381;
    for (var i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) >>> 0;
    return 'h' + h.toString(36);
  }
  GI.setPin = function (pin) { GI.state.pinHash = tinyHash('gi:' + pin); GI.save(); };
  GI.checkPin = function (pin) { return GI.state.pinHash === tinyHash('gi:' + pin); };

  GI.resetAll = function () {
    localStorage.removeItem(KEY);
    GI.state = freshSave();
  };
})();
