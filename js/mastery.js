/* Grammar Island — the mastery gate (docs/GAME-DESIGN.md §4).
   An island is mastered only when ALL conditions hold. Thresholds are the
   tunable ⚙ values — adjust here after real play-testing. */

window.GI = window.GI || {};

GI.MASTERY = {
  MIN_QUESTIONS: 30,     // graded answers on the island
  MIN_ACCURACY: 0.80,    // rolling accuracy over the recent window
  MIN_GAME_TYPES: 3,     // different game types completed at least once
  BOSS_QUESTIONS: 10,
  BOSS_PASS: 8
};

GI.rollingAccuracy = function (islandId) {
  var p = GI.island(islandId);
  if (!p.recent.length) return 0;
  var sum = p.recent.reduce(function (a, b) { return a + b; }, 0);
  return sum / p.recent.length;
};

/* Which gate conditions are met (for the island progress checklist). */
GI.gateStatus = function (islandId) {
  var p = GI.island(islandId);
  var M = GI.MASTERY;
  var types = Object.keys(p.gamesPlayed).length;
  return {
    ruleRead: p.ruleRead,
    enoughQuestions: p.answered >= M.MIN_QUESTIONS,
    enoughTypes: types >= M.MIN_GAME_TYPES,
    accurate: p.answered >= 10 && GI.rollingAccuracy(islandId) >= M.MIN_ACCURACY,
    bossPassed: p.bossPassed,
    answered: p.answered,
    types: types,
    accuracy: GI.rollingAccuracy(islandId)
  };
};

/* Boss unlocks when everything except the boss itself is done. */
GI.bossReady = function (islandId) {
  var s = GI.gateStatus(islandId);
  return s.ruleRead && s.enoughQuestions && s.enoughTypes && s.accurate;
};

GI.checkMastery = function (islandId) {
  var s = GI.gateStatus(islandId);
  var p = GI.island(islandId);
  var was = p.mastered;
  p.mastered = s.ruleRead && s.enoughQuestions && s.enoughTypes && s.accurate && s.bossPassed;
  if (p.mastered && !was) { GI.state.xp += 100; GI.save(); }
  return p.mastered;
};

/* An island is unlocked if it is first in its level or the previous one is mastered. */
GI.isUnlocked = function (islandId) {
  if (GI.island(islandId).parentUnlocked) return true;   // manual parent override
  var all = GI.allIslands();
  var idx = all.findIndex(function (i) { return i.id === islandId; });
  if (idx <= 0) return true;
  return GI.island(all[idx - 1].id).mastered;
};
