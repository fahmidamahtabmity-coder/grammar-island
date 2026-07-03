/* Grammar Island — living background: letters drift in the sky, gather into
   words, the words slide together into a sentence, then it dissolves and a new
   one begins. Mounted on the welcome screen and the map. */

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
      var mySeq = ++seq;          // any newer mount cancels this one
      cycle(sky, mySeq, 0);
    }
  };

  function alive(sky, mySeq) { return mySeq === seq && document.contains(sky); }

  function cycle(sky, mySeq, idx) {
    if (!alive(sky, mySeq)) return;
    sky.innerHTML = '';
    var sentence = SENTENCES[idx % SENTENCES.length];
    var words = sentence.split(' ');
    var W = sky.clientWidth || 600;
    var H = sky.clientHeight || 400;
    var CH = Math.min(26, Math.max(18, W / 26));   // letter cell width, px

    /* target layout: words on one line, first far apart, later close together */
    function layout(gapPx) {
      var totalLetters = sentence.replace(/ /g, '').length;
      var width = totalLetters * CH + (words.length - 1) * gapPx;
      var x = Math.max(10, (W - width) / 2);
      var y = H * 0.16;
      var pos = [];
      words.forEach(function (word) {
        for (var i = 0; i < word.length; i++) { pos.push([x, y]); x += CH; }
        x += gapPx;
      });
      return pos;
    }

    /* create letters scattered randomly */
    var letters = [];
    sentence.replace(/ /g, '').split('').forEach(function (ch) {
      var el = document.createElement('span');
      el.className = 'sky-letter';
      el.textContent = ch;
      el.style.left = (Math.random() * (W - 30)) + 'px';
      el.style.top = (Math.random() * (H - 40)) + 'px';
      el.style.transitionDelay = (Math.random() * 0.6) + 's';
      sky.appendChild(el);
      letters.push(el);
    });

    /* phase 1: drift freely (CSS float animation), then… */
    setTimeout(function () {
      if (!alive(sky, mySeq)) return;
      /* phase 2: gather into separate words */
      var pos = layout(CH * 2.2);
      letters.forEach(function (el, i) {
        el.classList.add('gathered');
        el.style.left = pos[i][0] + 'px';
        el.style.top = pos[i][1] + 'px';
      });
      setTimeout(function () {
        if (!alive(sky, mySeq)) return;
        /* phase 3: words slide together into a sentence */
        var pos2 = layout(CH * 0.7);
        letters.forEach(function (el, i) {
          el.style.transitionDelay = '0s';
          el.style.left = pos2[i][0] + 'px';
          el.style.top = pos2[i][1] + 'px';
        });
        setTimeout(function () {
          if (!alive(sky, mySeq)) return;
          /* phase 4: fade away, then next sentence */
          letters.forEach(function (el) { el.classList.add('fading'); });
          setTimeout(function () { cycle(sky, mySeq, idx + 1); }, 1600);
        }, 2600);
      }, 2600);
    }, 2800);
  }
})();
