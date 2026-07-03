/* Grammar Island — saved state: localStorage + export/import ("Save my treasure").
   SAVE_VERSION is bumped whenever the save format changes, so old saves can be
   migrated instead of breaking (risk #5 in docs/RISKS.md). */

window.GI = window.GI || {};

(function () {
  var KEY = 'grammar-island-save';
  var SAVE_VERSION = 1;

  function freshSave() {
    return {
      version: SAVE_VERSION,
      player: { name: '', avatar: '🦜' },
      pinHash: null,
      xp: 0,
      settings: { muted: false, banglaHints: true },
      /* per-island progress, keyed by island id */
      islands: {},
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
      mastered: false
    };
  }

  GI.state = null;

  GI.load = function () {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) { GI.state = freshSave(); return; }
      var data = JSON.parse(raw);
      /* future migrations go here: if (data.version === 1) { ...upgrade... } */
      GI.state = data;
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

  /* Record one graded answer for an island. */
  GI.recordAnswer = function (islandId, isCorrect) {
    var p = GI.island(islandId);
    p.answered += 1;
    if (isCorrect) { p.correct += 1; GI.state.xp += 10; }
    p.recent.push(isCorrect ? 1 : 0);
    if (p.recent.length > 40) p.recent.shift();
    GI.save();
  };

  GI.recordGameComplete = function (islandId, gameType) {
    var p = GI.island(islandId);
    p.gamesPlayed[gameType] = (p.gamesPlayed[gameType] || 0) + 1;
    GI.state.xp += 20;
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
        GI.state = data;
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
