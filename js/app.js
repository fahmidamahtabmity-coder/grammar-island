/* Grammar Island — screens & navigation.
   One container (#app) is re-rendered per screen: onboarding → map → island →
   game/boss → badges; plus the PIN-gated Parent Corner. */

window.GI = window.GI || {};

(function () {
  var app;

  document.addEventListener('DOMContentLoaded', function () {
    app = document.getElementById('app');
    GI.load();
    if (!GI.state.player.name) renderOnboarding();
    else renderMap();
  });

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------- shared header ---------- */

  function header(showBack, backFn) {
    var p = GI.state.player;
    return '<header class="topbar">' +
      (showBack ? '<button class="btn btn-icon" id="nav-back" aria-label="Back">⬅️</button>' : '<span></span>') +
      '<span class="topbar-player">' + p.avatar + ' ' + esc(p.name) + '</span>' +
      '<span class="topbar-right">' +
      '<span class="xp" title="Explorer points">⭐ ' + GI.state.xp + '</span>' +
      '<button class="btn btn-icon" id="nav-badges" aria-label="My badges">🎖️</button>' +
      '<button class="btn btn-icon" id="nav-mute" aria-label="Sound on or off">' + (GI.state.settings.muted ? '🔇' : '🔊') + '</button>' +
      '<button class="btn btn-icon" id="nav-parent" aria-label="Parent corner">👨‍👩‍👧</button>' +
      '</span></header>';
  }

  function wireHeader(backFn) {
    var back = document.getElementById('nav-back');
    if (back) back.addEventListener('click', backFn || renderMap);
    document.getElementById('nav-badges').addEventListener('click', renderBadges);
    document.getElementById('nav-parent').addEventListener('click', renderParentGate);
    document.getElementById('nav-mute').addEventListener('click', function () {
      GI.state.settings.muted = !GI.state.settings.muted;
      GI.save();
      this.textContent = GI.state.settings.muted ? '🔇' : '🔊';
    });
  }

  /* ---------- onboarding ---------- */

  function renderOnboarding() {
    app.innerHTML =
      '<div class="screen center-screen welcome" id="welcome-screen">' +
      '<div class="welcome-sun" aria-hidden="true">☀️</div>' +
      '<div class="mascot-big bob">🦜</div>' +
      '<h1 class="welcome-title">Ahoy, explorer!</h1>' +
      '<p class="lead">I\'m your parrot guide. Together we will sail across the islands and become <b>Grammar Masters</b> — by playing games!</p>' +
      '<button class="btn btn-big" id="ob-next">Let\'s go! ⛵</button>' +
      '<div class="wave-strip" aria-hidden="true"><span>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</span></div>' +
      '</div>';
    GI.bg.mount(document.getElementById('welcome-screen'));
    document.getElementById('ob-next').addEventListener('click', renderOnboardingName);
  }

  function renderOnboardingName() {
    var avatars = ['🦜', '🐯', '🐬', '🦊', '🐨', '🦋', '🐢', '🦁'];
    app.innerHTML =
      '<div class="screen center-screen">' +
      '<h2>What should I call you?</h2>' +
      '<p class="lead">Pick a fun explorer name — it does not need to be your real name!</p>' +
      '<input id="ob-name" class="input-big" maxlength="20" placeholder="Explorer name" autocomplete="off">' +
      '<h3>Choose your explorer:</h3>' +
      '<div class="avatar-row">' +
      avatars.map(function (a, i) {
        return '<button class="avatar' + (i === 0 ? ' picked' : '') + '" data-a="' + a + '">' + a + '</button>';
      }).join('') +
      '</div>' +
      '<button class="btn btn-big" id="ob-next">Next ➜</button>' +
      '</div>';
    var picked = avatars[0];
    Array.prototype.forEach.call(app.querySelectorAll('.avatar'), function (b) {
      b.addEventListener('click', function () {
        app.querySelector('.avatar.picked').classList.remove('picked');
        b.classList.add('picked');
        picked = b.dataset.a;
        GI.sfx.tap();
      });
    });
    document.getElementById('ob-next').addEventListener('click', function () {
      var name = document.getElementById('ob-name').value.trim();
      if (!name) { document.getElementById('ob-name').placeholder = 'Please type a name 🙂'; return; }
      GI.state.player.name = name;
      GI.state.player.avatar = picked;
      GI.save();
      renderOnboardingPin();
    });
  }

  function renderOnboardingPin() {
    app.innerHTML =
      '<div class="screen center-screen">' +
      '<div class="mascot-big">👨‍👩‍👧</div>' +
      '<h2>A grown-up\'s turn!</h2>' +
      '<p class="lead">Parent: please choose a 4-digit PIN for the Parent Corner, where you can see progress and set levels. (This is a child gate, not bank-level security — do not reuse an important PIN.)</p>' +
      '<input id="ob-pin" class="input-big" type="password" inputmode="numeric" maxlength="4" placeholder="4-digit PIN">' +
      '<input id="ob-pin2" class="input-big" type="password" inputmode="numeric" maxlength="4" placeholder="Type it again">' +
      '<p id="ob-pin-msg" class="warn"></p>' +
      '<button class="btn btn-big" id="ob-done">Start the adventure! 🏝️</button>' +
      '</div>';
    document.getElementById('ob-done').addEventListener('click', function () {
      var p1 = document.getElementById('ob-pin').value;
      var p2 = document.getElementById('ob-pin2').value;
      var msg = document.getElementById('ob-pin-msg');
      if (!/^\d{4}$/.test(p1)) { msg.textContent = 'The PIN must be exactly 4 digits.'; return; }
      if (p1 !== p2) { msg.textContent = 'The two PINs do not match — try again.'; return; }
      GI.setPin(p1);
      GI.sfx.win();
      renderMap();
    });
  }

  /* ---------- the island map ---------- */

  function renderMap() {
    var level = GI.CURRICULUM.levels[0];
    app.innerHTML = header(false) +
      '<div class="screen map-screen" id="map-screen">' +
      '<h1 class="map-title">' + level.emoji + ' ' + level.name + '</h1>' +
      '<div class="map">' +
      level.islands.map(function (isl, idx) {
        var p = GI.island(isl.id);
        var unlocked = GI.isUnlocked(isl.id);
        var state = p.mastered ? 'done' : unlocked ? 'open' : 'locked';
        var icon = p.mastered ? '✅' : unlocked ? '▶️' : '🔒';
        var acc = p.answered ? Math.round(GI.rollingAccuracy(isl.id) * 100) + '%' : '—';
        return '<button class="island ' + state + '" data-id="' + isl.id + '" style="animation-delay:' + (idx * 0.6) + 's">' +
          '<span class="island-palm" aria-hidden="true">🌴</span>' +
          '<span class="island-emoji">' + isl.emoji + '</span>' +
          '<span class="island-name">' + isl.name + '</span>' +
          '<span class="island-tag">' + isl.tagline + '</span>' +
          '<span class="island-state">' + icon + (p.mastered ? ' Mastered!' : unlocked ? ' ' + p.answered + ' answers · ' + acc : ' Locked') + '</span>' +
          '</button>';
      }).join('') +
      '</div>' +
      '<div class="wave-strip" aria-hidden="true"><span>🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊</span></div>' +
      '<p class="map-more">⛵ More islands are being discovered… (coming in the next update!)</p>' +
      '</div>';
    GI.bg.mount(document.getElementById('map-screen'));
    wireHeader();
    Array.prototype.forEach.call(app.querySelectorAll('.island'), function (b) {
      b.addEventListener('click', function () {
        var isl = GI.getIsland(b.dataset.id);
        if (!GI.isUnlocked(isl.id)) {
          GI.sfx.wrong();
          b.classList.add('shake');
          setTimeout(function () { b.classList.remove('shake'); }, 500);
          return;
        }
        renderIsland(isl.id);
      });
    });
  }

  /* ---------- one island: rule card + games + mastery checklist ---------- */

  function renderIsland(id) {
    var isl = GI.getIsland(id);
    var p = GI.island(id);
    var s = GI.gateStatus(id);
    var M = GI.MASTERY;

    function tick(ok) { return ok ? '✅' : '⬜'; }

    app.innerHTML = header(true) +
      '<div class="screen">' +
      '<div class="island-hero">' +
      '<div class="hero-scene"><span class="hero-palm" aria-hidden="true">🌴</span>' +
      '<span class="hero-emoji bob">' + isl.emoji + '</span>' +
      '<span class="hero-palm hero-palm-flip" aria-hidden="true">🌴</span></div>' +
      '<h1>' + isl.name + '</h1>' +
      '<div class="hero-waves" aria-hidden="true">🌊🌊🌊🌊🌊🌊🌊🌊</div>' +
      '</div>' +

      '<div class="rule-card">' +
      '<h2>📖 ' + isl.rule.title + '</h2>' +
      '<p class="rule-text">' + isl.rule.text + '</p>' +
      '<p class="rule-example">' + isl.rule.example + '</p>' +
      '<p class="rule-note">' + isl.rule.exampleNote + '</p>' +
      '<button class="btn" id="rule-bangla">বাংলা hint 💡</button>' +
      '<p class="rule-bangla" id="rule-bangla-text" hidden>' + isl.rule.bangla + '</p>' +
      '<div class="intro-box" id="intro-box"></div>' +
      '</div>' +

      '<div class="game-grid">' +
      isl.games.map(function (g) {
        var meta = GI.GAME_META[g];
        var played = p.gamesPlayed[g] || 0;
        return '<button class="btn game-tile" data-g="' + g + '"' + (p.ruleRead ? '' : ' disabled') + '>' +
          '<span class="gt-emoji">' + meta.emoji + '</span>' + meta.name +
          '<span class="gt-count">' + (played ? 'played ' + played + '×' : 'new!') + '</span></button>';
      }).join('') +
      '</div>' +

      '<div class="gate">' +
      '<h3>🗝️ Treasure checklist</h3>' +
      '<ul>' +
      '<li>' + tick(s.ruleRead) + ' Learn the rule (finish “Your turn!”)</li>' +
      '<li>' + tick(s.enoughTypes) + ' Play ' + M.MIN_GAME_TYPES + ' different games (' + s.types + '/' + M.MIN_GAME_TYPES + ')</li>' +
      '<li>' + tick(s.enoughQuestions) + ' Answer ' + M.MIN_QUESTIONS + ' questions (' + s.answered + '/' + M.MIN_QUESTIONS + ')</li>' +
      '<li>' + tick(s.accurate) + ' Get ' + Math.round(M.MIN_ACCURACY * 100) + '% right (now: ' + Math.round(s.accuracy * 100) + '%)</li>' +
      '<li>' + tick(s.bossPassed) + ' Beat the Boss Challenge (' + M.BOSS_PASS + '/' + M.BOSS_QUESTIONS + ')</li>' +
      '</ul>' +
      (p.mastered
        ? '<p class="mastered-banner">🏆 Island mastered — badge earned!</p>'
        : '<button class="btn btn-big btn-boss" id="go-boss"' + (GI.bossReady(id) ? '' : ' disabled') + '>' +
          (GI.bossReady(id) ? '⚔️ Boss Challenge!' : '⚔️ Boss Challenge (finish the checklist first)') + '</button>') +
      '</div></div>';

    wireHeader();
    document.getElementById('rule-bangla').addEventListener('click', function () {
      var t = document.getElementById('rule-bangla-text');
      t.hidden = !t.hidden;
    });
    renderIntro(isl, document.getElementById('intro-box'), p.ruleRead, function () {
      if (!p.ruleRead) {
        p.ruleRead = true;
        GI.save();
        GI.sfx.win();
        setTimeout(function () { renderIsland(id); }, 1200);
      }
    });
    Array.prototype.forEach.call(app.querySelectorAll('.game-tile'), function (b) {
      b.addEventListener('click', function () { renderGame(id, b.dataset.g); });
    });
    var boss = document.getElementById('go-boss');
    if (boss && GI.bossReady(id)) boss.addEventListener('click', function () { renderBoss(id); });
  }

  /* ---------- the interactive "Your turn!" rule intro ---------- */

  function renderIntro(isl, box, alreadyDone, onComplete) {
    var intro = isl.intro;
    if (!intro) { onComplete(); return; }
    var doneNote = alreadyDone ? '<p class="intro-done-note">✅ You already did this — play it again if you like!</p>' : '';

    function celebrate() {
      var c = document.createElement('p');
      c.className = 'intro-celebrate';
      c.textContent = '🦜 ' + (alreadyDone ? 'Still got it! ⭐' : 'YES! You understood the rule — the games are open! 🎉');
      box.appendChild(c);
      onComplete();
    }

    if (intro.type === 'tap-words' || intro.type === 'tap-fix') {
      var found = {};
      var need = Object.keys(intro.targets).length;
      box.innerHTML = doneNote + '<p class="intro-prompt">✨ ' + intro.prompt + '</p>' +
        '<div class="intro-sentence">' +
        intro.sentence.map(function (w, i) {
          return '<button class="chip intro-chip" data-i="' + i + '">' + w + '</button>';
        }).join('') + '</div><div class="intro-labels" id="intro-labels"></div>';
      Array.prototype.forEach.call(box.querySelectorAll('.intro-chip'), function (chip) {
        chip.addEventListener('click', function () {
          var i = chip.dataset.i;
          if (found[i]) return;
          if (intro.targets[i] !== undefined) {
            found[i] = true;
            chip.classList.add('intro-found');
            GI.sfx.correct();
            if (intro.type === 'tap-fix') {
              chip.textContent = intro.targets[i];           // the capital appears!
              chip.classList.add('intro-fixed');
            } else {
              var tag = document.createElement('span');
              tag.className = 'intro-tag';
              tag.textContent = chip.textContent.replace(/[.,]$/, '') + ' = ' + intro.targets[i];
              document.getElementById('intro-labels').appendChild(tag);
            }
            if (Object.keys(found).length === need) celebrate();
          } else {
            GI.sfx.wrong();
            chip.classList.add('shake');
            setTimeout(function () { chip.classList.remove('shake'); }, 450);
          }
        });
      });
    }

    if (intro.type === 'pick-article') {
      var solved = 0;
      box.innerHTML = doneNote + '<p class="intro-prompt">✨ ' + intro.prompt + '</p>' +
        intro.items.map(function (item, ri) {
          return '<div class="intro-article-row" data-r="' + ri + '">' +
            '<span class="intro-article-slot" id="ia-slot-' + ri + '">___</span>' +
            '<span class="intro-article-word">' + item.word + ' ' + item.emoji + '</span>' +
            '<span class="intro-article-btns">' +
            ['a', 'an', 'the'].map(function (art) {
              return '<button class="btn btn-small ia-btn" data-r="' + ri + '" data-a="' + art + '">' + art + '</button>';
            }).join('') + '</span></div>';
        }).join('');
      Array.prototype.forEach.call(box.querySelectorAll('.ia-btn'), function (b) {
        b.addEventListener('click', function () {
          var ri = Number(b.dataset.r);
          var slot = document.getElementById('ia-slot-' + ri);
          if (slot.classList.contains('intro-found')) return;
          if (b.dataset.a === intro.items[ri].a) {
            GI.sfx.correct();
            slot.textContent = intro.items[ri].a;
            slot.classList.add('intro-found');
            solved++;
            if (solved === intro.items.length) celebrate();
          } else {
            GI.sfx.wrong();
            b.classList.add('shake');
            setTimeout(function () { b.classList.remove('shake'); }, 450);
          }
        });
      });
    }
  }

  /* ---------- playing one game ---------- */

  function renderGame(islandId, gameType) {
    var isl = GI.getIsland(islandId);
    var meta = GI.GAME_META[gameType];
    app.innerHTML = header(true, function () { renderIsland(islandId); }) +
      '<div class="screen"><h2>' + meta.emoji + ' ' + meta.name + '</h2><div id="game-box"></div></div>';
    wireHeader(function () { renderIsland(islandId); });
    GI.games[gameType](isl, document.getElementById('game-box'), function () { renderIsland(islandId); });
  }

  /* ---------- the Boss Challenge ---------- */

  function renderBoss(islandId) {
    var isl = GI.getIsland(islandId);
    var bank = GI.BANKS[islandId];
    var pool = (bank.mcq || []).concat(bank.gap || []);
    app.innerHTML = header(true, function () { renderIsland(islandId); }) +
      '<div class="screen"><h2>⚔️ Boss Challenge: ' + isl.name + '</h2><div id="game-box"></div></div>';
    wireHeader(function () { renderIsland(islandId); });

    GI.runQuiz({
      island: isl, box: document.getElementById('game-box'),
      pool: pool, count: GI.MASTERY.BOSS_QUESTIONS, timerSeconds: 30,
      title: 'Answer ' + GI.MASTERY.BOSS_PASS + ' of ' + GI.MASTERY.BOSS_QUESTIONS + ' to win the treasure!',
      onDone: function (correct, total) {
        var p = GI.island(islandId);
        if (correct > p.bossBest) p.bossBest = correct;
        var passed = correct >= GI.MASTERY.BOSS_PASS;
        if (passed) { p.bossPassed = true; GI.checkMastery(islandId); }
        GI.save();
        var box = document.getElementById('game-box');
        if (passed) {
          GI.sfx.badge();
          box.innerHTML =
            '<div class="game-summary boss-win">' +
            '<div class="gs-emoji">🏆</div>' +
            '<h3>YOU DID IT!</h3>' +
            '<p class="gs-score">' + correct + ' / ' + total + '</p>' +
            '<p>' + isl.emoji + ' The <b>' + isl.name + '</b> treasure badge is yours — the next island is now open!</p>' +
            '<button class="btn btn-big" id="boss-map">Back to the map 🗺️</button></div>';
          document.getElementById('boss-map').addEventListener('click', renderMap);
        } else {
          box.innerHTML =
            '<div class="game-summary">' +
            '<div class="gs-emoji">💪</div>' +
            '<h3>So close!</h3>' +
            '<p class="gs-score">' + correct + ' / ' + total + ' — you need ' + GI.MASTERY.BOSS_PASS + '</p>' +
            '<p>The boss is tough — read the rule once more, play a game, and try again. You can do it!</p>' +
            '<button class="btn btn-big" id="boss-retry">Try again! ⚔️</button> ' +
            '<button class="btn" id="boss-back">Back to the island</button></div>';
          document.getElementById('boss-retry').addEventListener('click', function () { renderBoss(islandId); });
          document.getElementById('boss-back').addEventListener('click', function () { renderIsland(islandId); });
        }
      }
    });
  }

  /* ---------- badges ---------- */

  function renderBadges() {
    app.innerHTML = header(true) +
      '<div class="screen"><h1>🎖️ My Treasure Chest</h1>' +
      '<div class="badge-grid">' +
      GI.allIslands().map(function (isl) {
        var done = GI.island(isl.id).mastered;
        return '<div class="badge' + (done ? ' earned' : '') + '">' +
          '<span class="badge-emoji">' + (done ? isl.emoji : '❓') + '</span>' +
          '<span>' + (done ? isl.name : '???') + '</span></div>';
      }).join('') +
      '</div>' +
      '<p class="lead">Master an island to win its badge!</p></div>';
    wireHeader();
  }

  /* ---------- Parent Corner ---------- */

  function renderParentGate() {
    app.innerHTML = header(true) +
      '<div class="screen center-screen"><h2>👨‍👩‍👧 Parent Corner</h2>' +
      '<p class="lead">Grown-ups only — enter the PIN.</p>' +
      '<input id="pc-pin" class="input-big" type="password" inputmode="numeric" maxlength="4" placeholder="PIN">' +
      '<p id="pc-msg" class="warn"></p>' +
      '<button class="btn btn-big" id="pc-go">Enter</button></div>';
    wireHeader();
    document.getElementById('pc-go').addEventListener('click', function () {
      if (GI.checkPin(document.getElementById('pc-pin').value)) renderParent();
      else document.getElementById('pc-msg').textContent = 'That PIN is not right.';
    });
  }

  function renderParent() {
    var rows = GI.allIslands().map(function (isl) {
      var p = GI.island(isl.id);
      var acc = p.answered ? Math.round(GI.rollingAccuracy(isl.id) * 100) + '%' : '—';
      var status = p.mastered ? '✅ Mastered' : GI.isUnlocked(isl.id) ? '▶️ Open' : '🔒 Locked';
      return '<tr><td>' + isl.emoji + ' ' + isl.name + '</td><td>' + status + '</td>' +
        '<td>' + p.answered + '</td><td>' + acc + '</td>' +
        '<td>' + Object.keys(p.gamesPlayed).length + '</td>' +
        '<td>' + (GI.isUnlocked(isl.id) || p.parentUnlocked
          ? '—'
          : '<button class="btn btn-small pc-unlock" data-id="' + isl.id + '">Unlock</button>') + '</td></tr>';
    }).join('');

    app.innerHTML = header(true) +
      '<div class="screen"><h1>👨‍👩‍👧 Parent Corner</h1>' +
      '<p class="lead">Explorer: <b>' + GI.state.player.avatar + ' ' + esc(GI.state.player.name) + '</b> · ⭐ ' + GI.state.xp + ' XP</p>' +
      '<div class="table-wrap"><table class="pc-table">' +
      '<tr><th>Island</th><th>Status</th><th>Answers</th><th>Accuracy</th><th>Games</th><th>Assign</th></tr>' +
      rows + '</table></div>' +
      '<p class="pc-note">“Unlock” opens an island early (skipping the mastery gate for the one before it). The app recommends letting the checklist do its job — but you know your child best.</p>' +
      '<h3>💾 Save my treasure</h3>' +
      '<p class="pc-note">Progress lives only in this browser and could be lost if the browser clears its data. Export a treasure file regularly, and keep it safe.</p>' +
      '<button class="btn" id="pc-export">⬇️ Export progress</button> ' +
      '<label class="btn" for="pc-import">⬆️ Import progress</label>' +
      '<input type="file" id="pc-import" accept=".json" hidden>' +
      '<h3>⚙️ Settings</h3>' +
      '<button class="btn" id="pc-reset">🗑️ Reset everything</button>' +
      '<p id="pc-msg2" class="warn"></p>' +
      '</div>';
    wireHeader();

    Array.prototype.forEach.call(app.querySelectorAll('.pc-unlock'), function (b) {
      b.addEventListener('click', function () {
        GI.island(b.dataset.id).parentUnlocked = true;
        GI.save();
        renderParent();
      });
    });
    document.getElementById('pc-export').addEventListener('click', GI.exportSave);
    document.getElementById('pc-import').addEventListener('change', function () {
      if (!this.files.length) return;
      GI.importSave(this.files[0], function (ok) {
        document.getElementById('pc-msg2').textContent =
          ok ? '✅ Treasure loaded!' : '❌ That file is not a Grammar Island treasure file.';
        if (ok) setTimeout(renderParent, 800);
      });
    });
    document.getElementById('pc-reset').addEventListener('click', function () {
      if (confirm('Really delete ALL progress, badges and XP? This cannot be undone. (Export a treasure file first if unsure!)')) {
        GI.resetAll();
        renderOnboarding();
      }
    });
  }
})();
