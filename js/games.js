/* Grammar Island — the four game engines.
   Every game: picks random items from the island's bank, grades each answer via
   GI.recordAnswer, celebrates or encourages (never punishes), then reports back. */

window.GI = window.GI || {};

(function () {
  /* ---------- shared helpers ---------- */

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function sample(arr, n) { return shuffle(arr).slice(0, n); }

  /* No-repeat picker: remembers which item ids this island has already served
     and prefers unseen ones, so the whole bank rotates before anything repeats
     (play-test feedback: repeated questions get boring fast). */
  function pickFresh(islandId, pool, n) {
    var p = GI.island(islandId);
    p.seen = p.seen || [];
    var unseen = pool.filter(function (x) { return p.seen.indexOf(x.id) === -1; });
    var chosen = shuffle(unseen).slice(0, n);
    if (chosen.length < n) {
      var extras = shuffle(pool.filter(function (x) { return chosen.indexOf(x) === -1; })).slice(0, n - chosen.length);
      chosen = chosen.concat(extras);
    }
    chosen.forEach(function (x) {
      var i = p.seen.indexOf(x.id);
      if (i !== -1) p.seen.splice(i, 1);
      p.seen.push(x.id);
    });
    var cap = Math.max(pool.length - n, 0);   // always keep ≥n ids "unseen"
    if (p.seen.length > cap) p.seen = p.seen.slice(p.seen.length - cap);
    GI.save();
    return shuffle(chosen);
  }

  var CHEERS = ['Brilliant! 🎉', 'Well done! ⭐', 'You got it! 🌟', 'Super! 💛', 'Amazing! 🏆'];
  var NUDGES = ['Ooh, so close — look again!', 'Almost! You will get the next one!', 'Good try! Keep going!', 'Not this one — but you are learning!'];
  function cheer() { return CHEERS[Math.floor(Math.random() * CHEERS.length)]; }
  function nudge() { return NUDGES[Math.floor(Math.random() * NUDGES.length)]; }

  /* Feedback strip under the game: mascot reaction + the "why" line. */
  function feedback(box, ok, why, next) {
    var el = document.createElement('div');
    el.className = 'feedback ' + (ok ? 'good' : 'oops');
    el.innerHTML =
      '<div class="fb-mascot">' + (ok ? '🦜 ' + cheer() : '🦜 ' + nudge()) + '</div>' +
      (why ? '<div class="fb-why">' + why + '</div>' : '') +
      '<button class="btn btn-next">Next ➜</button>';
    box.appendChild(el);
    el.querySelector('.btn-next').addEventListener('click', function () { el.remove(); next(); });
  }

  /* End-of-game summary. */
  function summary(box, gameName, correct, total, onDone) {
    var pct = total ? Math.round(correct / total * 100) : 0;
    box.innerHTML =
      '<div class="game-summary">' +
      '<div class="gs-emoji">' + (pct >= 80 ? '🏆' : pct >= 50 ? '🌟' : '💪') + '</div>' +
      '<h3>' + gameName + ' finished!</h3>' +
      '<p class="gs-score">' + correct + ' / ' + total + ' correct</p>' +
      '<p>' + (pct >= 80 ? 'Fantastic work!' : pct >= 50 ? 'Good job — practice makes perfect!' : 'Every explorer needs a few tries. Read the rule again and have another go!') + '</p>' +
      '<button class="btn btn-big" id="gs-done">Back to the island 🏝️</button>' +
      '</div>';
    GI.sfx.win();
    document.getElementById('gs-done').addEventListener('click', onDone);
  }

  GI.games = {};

  /* ---------- 1. Word Catcher: tap the falling target words ---------- */

  GI.games.catch = function (island, box, onDone) {
    var bank = GI.BANKS[island.id].catch;
    var targets = pickFresh(island.id, bank.words.filter(function (w) { return w.t; }), 6);
    var others = pickFresh(island.id, bank.words.filter(function (w) { return !w.t; }), 6);
    var queue = shuffle(targets.concat(others));
    var correct = 0, total = queue.length, done = 0, stopped = false;

    box.innerHTML =
      '<p class="game-prompt">' + bank.prompt + '</p>' +
      '<div class="catch-sky" id="catch-sky"></div>' +
      '<div class="catch-score" id="catch-score">0 / ' + total + '</div>';
    var sky = document.getElementById('catch-sky');
    var scoreEl = document.getElementById('catch-score');

    function wordDone(ok) {
      done++;
      if (ok) correct++;
      GI.recordAnswer(island.id, ok);
      scoreEl.textContent = done + ' / ' + total;
      if (done >= total && !stopped) {
        stopped = true;
        setTimeout(function () {
          GI.recordGameComplete(island.id, 'catch');
          summary(box, 'Word Catcher', correct, total, onDone);
        }, 600);
      }
    }

    function drop(item, idx) {
      setTimeout(function () {
        if (stopped) return;
        var b = document.createElement('button');
        b.className = 'catch-word';
        b.textContent = item.w;
        b.style.left = (8 + Math.random() * 70) + '%';
        b.style.animationDuration = '6s';
        var judged = false;
        b.addEventListener('click', function () {
          if (judged) return;
          judged = true;
          if (item.t) { b.classList.add('caught'); GI.sfx.correct(); wordDone(true); }
          else { b.classList.add('bad'); GI.sfx.wrong(); wordDone(false); }
          setTimeout(function () { b.remove(); }, 450);
        });
        b.addEventListener('animationend', function () {
          if (judged) return;
          judged = true;
          /* reached the sea: missing a target is a miss; letting a non-target pass is right */
          if (item.t) { GI.sfx.wrong(); wordDone(false); }
          else { wordDone(true); }
          b.remove();
        });
        sky.appendChild(b);
      }, idx * 1700);
    }

    queue.forEach(drop);
  };

  /* ---------- 2. Sorting Baskets: tap the right basket for each word ---------- */

  GI.games.sort = function (island, box, onDone) {
    var bank = GI.BANKS[island.id].sort;
    var items = pickFresh(island.id, bank.items, 10);
    var i = 0, correct = 0;

    function next() {
      if (i >= items.length) {
        GI.recordGameComplete(island.id, 'sort');
        summary(box, 'Sorting Baskets', correct, items.length, onDone);
        return;
      }
      var item = items[i];
      box.innerHTML =
        '<p class="game-prompt">' + bank.prompt + '</p>' +
        '<div class="sort-word">' + item.w + '</div>' +
        '<div class="sort-baskets">' +
        bank.baskets.map(function (b, bi) {
          return '<button class="btn basket" data-b="' + bi + '">' + b + '</button>';
        }).join('') +
        '</div>' +
        '<div class="sort-progress">' + (i + 1) + ' of ' + items.length + '</div>';
      Array.prototype.forEach.call(box.querySelectorAll('.basket'), function (btn) {
        btn.addEventListener('click', function () {
          var ok = Number(btn.dataset.b) === item.b;
          GI.recordAnswer(island.id, ok);
          if (ok) GI.sfx.correct(); else GI.sfx.wrong();
          if (ok) correct++;
          var why = ok ? '' : '“' + item.w + '” belongs in: ' + bank.baskets[item.b];
          i++;
          feedback(box, ok, why, next);
        }, { once: false });
      });
    }
    next();
  };

  /* ---------- 3. Sentence Builder: tap words into the right order ---------- */

  GI.games.build = function (island, box, onDone) {
    var bank = GI.BANKS[island.id].build;
    var items = pickFresh(island.id, bank, 4);
    var i = 0, correct = 0;

    function next() {
      if (i >= items.length) {
        GI.recordGameComplete(island.id, 'build');
        summary(box, 'Sentence Builder', correct, items.length, onDone);
        return;
      }
      var item = items[i];
      var pool;
      do { pool = shuffle(item.words); }
      while (pool.join(' ') === item.words.join(' ') && item.words.length > 2);
      var answer = [];

      function render() {
        box.innerHTML =
          '<p class="game-prompt">Tap the words to build the sentence!</p>' +
          '<div class="build-answer" id="build-answer">' +
          (answer.length ? answer.map(function (w, wi) {
            return '<button class="chip placed" data-i="' + wi + '">' + w + '</button>';
          }).join('') : '<span class="build-hint">your sentence appears here…</span>') +
          '</div>' +
          '<div class="build-pool">' +
          pool.map(function (w, wi) {
            return '<button class="chip" data-i="' + wi + '">' + w + '</button>';
          }).join('') +
          '</div>' +
          '<button class="btn btn-big" id="build-check"' + (pool.length ? ' disabled' : '') + '>Check ✔</button>' +
          '<div class="sort-progress">' + (i + 1) + ' of ' + items.length + '</div>';

        Array.prototype.forEach.call(box.querySelectorAll('.build-pool .chip'), function (c) {
          c.addEventListener('click', function () {
            GI.sfx.tap();
            answer.push(pool[Number(c.dataset.i)]);
            pool.splice(Number(c.dataset.i), 1);
            render();
          });
        });
        Array.prototype.forEach.call(box.querySelectorAll('.build-answer .placed'), function (c) {
          c.addEventListener('click', function () {
            GI.sfx.tap();
            pool.push(answer[Number(c.dataset.i)]);
            answer.splice(Number(c.dataset.i), 1);
            render();
          });
        });
        var check = document.getElementById('build-check');
        if (check) check.addEventListener('click', function () {
          var ok = answer.join(' ') === item.words.join(' ');
          GI.recordAnswer(island.id, ok);
          if (ok) GI.sfx.correct(); else GI.sfx.wrong();
          if (ok) correct++;
          var why = ok ? '' : 'The sentence is: “' + item.words.join(' ') + '”';
          i++;
          feedback(box, ok, why, next);
        });
      }
      render();
    }
    next();
  };

  /* ---------- 4. Quick Quiz / Fill the Gap (also powers the Boss) ---------- */

  /* opts: { island, pool, count, gameType, timerSeconds, onDone(correct,total) } */
  GI.runQuiz = function (opts) {
    var box = opts.box;
    var questions = pickFresh(opts.island.id, opts.pool, opts.count);
    var i = 0, correct = 0, timer = null;

    function next() {
      if (timer) { clearTimeout(timer); timer = null; }
      if (i >= questions.length) {
        if (opts.gameType) GI.recordGameComplete(opts.island.id, opts.gameType);
        opts.onDone(correct, questions.length);
        return;
      }
      var q = questions[i];
      /* shuffle options but remember where the right one went */
      var order = shuffle(q.opts.map(function (_, oi) { return oi; }));
      box.innerHTML =
        (opts.title ? '<p class="game-prompt">' + opts.title + '</p>' : '') +
        '<div class="quiz-q">' + q.q + '</div>' +
        '<div class="quiz-opts">' +
        order.map(function (oi) {
          return '<button class="btn quiz-opt" data-oi="' + oi + '">' + q.opts[oi] + '</button>';
        }).join('') +
        '</div>' +
        (opts.timerSeconds ? '<div class="timer"><div class="timer-fill" style="animation-duration:' + opts.timerSeconds + 's"></div></div>' : '') +
        '<div class="sort-progress">' + (i + 1) + ' of ' + questions.length + '</div>';

      var answered = false;
      function grade(oi) {
        if (answered) return;
        answered = true;
        if (timer) { clearTimeout(timer); timer = null; }
        var ok = oi === q.a;
        GI.recordAnswer(opts.island.id, ok);
        if (ok) GI.sfx.correct(); else GI.sfx.wrong();
        if (ok) correct++;
        var why = q.why || '';
        if (!ok && oi >= 0) why = 'The answer is “' + q.opts[q.a] + '”. ' + why;
        if (oi < 0) why = '⏰ Time flew by! The answer is “' + q.opts[q.a] + '”. ' + (q.why || '');
        i++;
        feedback(box, ok, why, next);
      }

      Array.prototype.forEach.call(box.querySelectorAll('.quiz-opt'), function (btn) {
        btn.addEventListener('click', function () { grade(Number(btn.dataset.oi)); });
      });
      if (opts.timerSeconds) timer = setTimeout(function () { grade(-1); }, opts.timerSeconds * 1000);
    }
    next();
  };

  GI.games.quiz = function (island, box, onDone) {
    GI.runQuiz({
      island: island, box: box, pool: GI.BANKS[island.id].mcq, count: 8,
      gameType: 'quiz', timerSeconds: 25, title: 'Quick Quiz Race! 🏁',
      onDone: function (c, t) { summary(box, 'Quick Quiz', c, t, onDone); }
    });
  };

  GI.games.gap = function (island, box, onDone) {
    GI.runQuiz({
      island: island, box: box, pool: GI.BANKS[island.id].gap, count: 8,
      gameType: 'gap', timerSeconds: 25, title: 'Fill the Gap! 🧩',
      onDone: function (c, t) { summary(box, 'Fill the Gap', c, t, onDone); }
    });
  };

  GI.GAME_META = {
    catch: { name: 'Word Catcher', emoji: '🪂' },
    sort: { name: 'Sorting Baskets', emoji: '🧺' },
    build: { name: 'Sentence Builder', emoji: '🧱' },
    quiz: { name: 'Quick Quiz Race', emoji: '🏁' },
    gap: { name: 'Fill the Gap', emoji: '🧩' }
  };
})();
