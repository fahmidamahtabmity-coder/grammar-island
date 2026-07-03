/* Grammar Island — living background, in three slow acts:
   Act 1: letters float slowly across the sky.
   Act 2: they gather into WORDS — each word forming in its own spot.
   Act 3: the words sail together into one SENTENCE, shine, then dissolve.
   Mounted on the welcome screen and the map. */

window.GI = window.GI || {};

(function () {
  var SENTENCES = [
    'THE CAT SAT',
    'I LIKE MANGOES',
    'WE GO TO SCHOOL',
    'SHE READS A BOOK',
    'THE SUN IS HOT',
    'BIRDS CAN FLY'
  ];
  var seq = 0;

  GI.bg = {
    mount: function (parent) {
      var sky = document.createElement('div');
      sky.className = 'letter-sky';
      sky.setAttribute('aria-hidden', 'true');
      parent.appendChild(sky);
      var mySeq = ++seq;                 // a newer mount cancels this one
      cycle(sky, mySeq, Math.floor(Math.random() * SENTENCES.length));
    }
  };

  function alive(sky, mySeq) { return mySeq === seq && document.contains(sky); }
  function rand(a, b) { return a + Math.random() * (b - a); }

  function cycle(sky, mySeq, idx) {
    if (!alive(sky, mySeq)) return;
    sky.innerHTML = '';
    var sentence = SENTENCES[idx % SENTENCES.length];
    var words = sentence.split(' ');
    var W = sky.clientWidth || 600;
    var H = sky.clientHeight || 400;
    var CH = Math.min(26, Math.max(18, W / 26));      // letter cell width, px

    /* letters, scattered over the whole sky */
    var letters = [];
    sentence.replace(/ /g, '').split('').forEach(function (ch) {
      var el = document.createElement('span');
      el.className = 'sky-letter';
      el.textContent = ch;
      el.style.left = rand(0, W - 30) + 'px';
      el.style.top = rand(0, H - 40) + 'px';
      sky.appendChild(el);
      letters.push(el);
    });

    /* Act 1 — drift slowly across the sky (long, gentle, sideways) */
    setTimeout(function () {
      if (!alive(sky, mySeq)) return;
      letters.forEach(function (el) {
        el.style.transitionDuration = '7s';
        el.style.transitionTimingFunction = 'linear';
        var drift = rand(0.12, 0.22) * W * (Math.random() < 0.5 ? -1 : 1);
        var x = Math.min(W - 30, Math.max(0, parseFloat(el.style.left) + drift));
        var y = Math.min(H - 40, Math.max(0, parseFloat(el.style.top) + rand(-40, 40)));
        el.style.left = x + 'px';
        el.style.top = y + 'px';
      });
    }, 60);

    /* Act 2 — gather into words, each word in its own spot */
    setTimeout(function () {
      if (!alive(sky, mySeq)) return;
      var spots = [                       // lower half of the sky = open sea, nothing hides the words
        [0.10, 0.52], [0.55, 0.58], [0.15, 0.78], [0.58, 0.84]
      ].sort(function () { return Math.random() - 0.5; });
      var li = 0;
      words.forEach(function (word, wi) {
        var spot = spots[wi % spots.length];
        var wWidth = word.length * CH;
        var x = Math.min(W - wWidth - 10, Math.max(10, spot[0] * W + rand(-20, 20)));
        var y = Math.min(H - 50, Math.max(10, spot[1] * H + rand(-12, 12)));
        for (var i = 0; i < word.length; i++) {
          var el = letters[li++];
          el.classList.add('gathered');
          el.style.transitionDuration = '2.8s';
          el.style.transitionTimingFunction = 'ease-in-out';
          el.style.transitionDelay = (i * 0.12) + 's';   // letters arrive one by one
          el.style.left = (x + i * CH) + 'px';
          el.style.top = y + 'px';
        }
      });
    }, 6500);

    /* Act 3 — the words sail together into one sentence */
    setTimeout(function () {
      if (!alive(sky, mySeq)) return;
      var gap = CH * 0.7;
      var totalLetters = sentence.replace(/ /g, '').length;
      var width = totalLetters * CH + (words.length - 1) * gap;
      var x = Math.max(10, (W - width) / 2);
      var y = H * 0.68;
      var li = 0;
      words.forEach(function (word) {
        for (var i = 0; i < word.length; i++) {
          var el = letters[li++];
          el.classList.add('sentence');
          el.style.transitionDelay = '0s';
          el.style.transitionDuration = '2.6s';
          el.style.left = x + 'px';
          el.style.top = y + 'px';
          x += CH;
        }
        x += gap;
      });
    }, 12500);

    /* dissolve, then a new sentence begins */
    setTimeout(function () {
      if (!alive(sky, mySeq)) return;
      letters.forEach(function (el) { el.classList.add('fading'); });
      setTimeout(function () { cycle(sky, mySeq, idx + 1); }, 1800);
    }, 17500);
  }
})();
