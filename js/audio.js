/* Grammar Island — tiny synth sounds (no audio files needed) with a mute toggle. */

window.GI = window.GI || {};

(function () {
  var ctx = null;
  function ac() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (AC) ctx = new AC();
    }
    return ctx;
  }

  function beep(freq, dur, type, vol, when) {
    if (GI.state && GI.state.settings.muted) return;
    var a = ac();
    if (!a) return;
    var t = a.currentTime + (when || 0);
    var o = a.createOscillator();
    var g = a.createGain();
    o.type = type || 'sine';
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.15, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t);
    o.stop(t + dur);
  }

  GI.sfx = {
    correct: function () { beep(660, 0.12); beep(880, 0.18, 'sine', 0.15, 0.1); },
    wrong: function () { beep(220, 0.25, 'triangle', 0.12); },
    tap: function () { beep(440, 0.05, 'sine', 0.08); },
    win: function () { beep(523, 0.15); beep(659, 0.15, 'sine', 0.15, 0.12); beep(784, 0.3, 'sine', 0.15, 0.24); },
    badge: function () { beep(523, 0.12); beep(659, 0.12, 'sine', 0.15, 0.1); beep(784, 0.12, 'sine', 0.15, 0.2); beep(1047, 0.4, 'sine', 0.18, 0.3); }
  };
})();
