/* Question bank: Joining Words (conjunctions, + a taste of interjections) — island 'conjunctions'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['conjunctions'] = {

  sort: {
    prompt: 'Which joining word fits the gap?',
    baskets: ['and ➕', 'but ↔️', 'because 🤔'],
    items: [
      { id: 'cj-s01', w: 'bread ___ butter', b: 0 }, { id: 'cj-s02', w: 'I sing ___ dance', b: 0 },
      { id: 'cj-s03', w: 'Karim ___ Rahim play', b: 0 }, { id: 'cj-s04', w: 'red ___ blue', b: 0 },
      { id: 'cj-s05', w: 'We eat rice ___ curry', b: 0 },
      { id: 'cj-s06', w: 'He is rich ___ sad', b: 1 }, { id: 'cj-s07', w: 'I ran ___ missed the bus', b: 1 },
      { id: 'cj-s08', w: 'It is small ___ heavy', b: 1 }, { id: 'cj-s09', w: 'She is young ___ wise', b: 1 },
      { id: 'cj-s10', w: 'I tried ___ could not', b: 1 },
      { id: 'cj-s11', w: 'I sleep ___ I am tired', b: 2 }, { id: 'cj-s12', w: 'She smiles ___ she is happy', b: 2 },
      { id: 'cj-s13', w: 'We stopped ___ it rained', b: 2 }, { id: 'cj-s14', w: 'He won ___ he practised', b: 2 },
      { id: 'cj-s15', w: 'I eat ___ I am hungry', b: 2 }
    ]
  },

  gap: [
    { id: 'cj-g01', q: 'I like mangoes ___ bananas.', opts: ['and', 'but', 'or'], a: 0,
      why: 'Adding one more thing → and.' },
    { id: 'cj-g02', q: 'Do you want tea ___ coffee?', opts: ['or', 'and', 'because'], a: 0,
      why: 'A choice between two → or.' },
    { id: 'cj-g03', q: 'He is small ___ very strong.', opts: ['but', 'and', 'or'], a: 0,
      why: 'A surprise difference → but.' },
    { id: 'cj-g04', q: 'I am sleepy ___ I woke up early.', opts: ['because', 'or', 'and'], a: 0,
      why: 'Giving the reason → because.' },
    { id: 'cj-g05', q: 'Rina ___ Amina are best friends.', opts: ['and', 'but', 'because'], a: 0,
      why: 'Joining two names → and.' },
    { id: 'cj-g06', q: 'Hurry up, ___ we will be late.', opts: ['or', 'and', 'because'], a: 0,
      why: '“Do this, or (else)…” → or.' },
    { id: 'cj-g07', q: 'I wanted to play, ___ it rained.', opts: ['but', 'and', 'or'], a: 0,
      why: 'The rain spoiled the plan — a difference → but.' },
    { id: 'cj-g08', q: 'She is crying ___ she lost her pen.', opts: ['because', 'but', 'or'], a: 0,
      why: 'The lost pen is the reason → because.' },
    { id: 'cj-g09', q: 'Wash your hands ___ eat your food.', opts: ['and', 'or', 'but'], a: 0,
      why: 'One action, then another → and.' },
    { id: 'cj-g10', q: 'Is the answer yes ___ no?', opts: ['or', 'and', 'because'], a: 0,
      why: 'Choosing between yes and no → or.' },
    { id: 'cj-g11', q: 'The tea is hot ___ tasty.', opts: ['and', 'but', 'or'], a: 0,
      why: 'Two nice things together → and.' },
    { id: 'cj-g12', q: 'He did not come ___ he was ill.', opts: ['because', 'and', 'or'], a: 0,
      why: 'His illness is the reason → because.' },
    { id: 'cj-g13', q: 'I called him, ___ he did not hear.', opts: ['but', 'or', 'and'], a: 0,
      why: 'Things went differently than hoped → but.' },
    { id: 'cj-g14', q: 'You can take the red kite ___ the blue one.', opts: ['or', 'and', 'because'], a: 0,
      why: 'Pick one of the two → or.' },
    { id: 'cj-g15', q: 'We wear sweaters ___ winter is cold.', opts: ['because', 'or', 'but'], a: 0,
      why: 'The cold is the reason → because.' },
    { id: 'cj-g16', q: 'The mango is sweet ___ the lemon is sour.', opts: ['but', 'or', 'because'], a: 0,
      why: 'Two opposite tastes → but.' }
  ],

  mcq: [
    { id: 'cj-q01', q: 'A conjunction…', opts: ['joins words or sentences', 'names a place', 'describes a colour'], a: 0,
      why: 'and, but, or, because — the glue of sentences!' },
    { id: 'cj-q02', q: 'Which word JOINS in “rice and fish”?', opts: ['and', 'rice', 'fish'], a: 0,
      why: '“And” glues rice and fish together.' },
    { id: 'cj-q03', q: 'Which joining word shows a CHOICE?', opts: ['or', 'and', 'because'], a: 0,
      why: 'Tea or coffee? Red or blue? → or.' },
    { id: 'cj-q04', q: 'Which joining word gives a REASON?', opts: ['because', 'but', 'and'], a: 0,
      why: '“…because I was tired” explains why.' },
    { id: 'cj-q05', q: 'Which joining word shows a DIFFERENCE?', opts: ['but', 'and', 'or'], a: 0,
      why: '“Small but strong” — a surprise twist → but.' },
    { id: 'cj-q06', q: '“I fell, ___ I got up again.”', opts: ['but', 'or', 'because'], a: 0,
      why: 'Falling then rising — a brave difference → but.' },
    { id: 'cj-q07', q: 'Which one is a joining word?', opts: ['because', 'quickly', 'mango'], a: 0,
      why: '“Because” joins a reason to a sentence.' },
    { id: 'cj-q08', q: 'Pick the conjunction: “We stayed home because it rained.”', opts: ['because', 'stayed', 'rained'], a: 0,
      why: '“Because” is doing the joining.' },
    { id: 'cj-q09', q: 'Which pair are BOTH joining words?', opts: ['and & but', 'run & jump', 'in & on'], a: 0,
      why: '“And” and “but” both glue sentences together.' },
    { id: 'cj-q10', q: '“Wow!” and “Ouch!” are…', opts: ['surprise words (interjections)', 'joining words', 'naming words'], a: 0,
      why: 'Interjections burst out feelings — Wow! Ouch! Hurray!' },
    { id: 'cj-q11', q: 'Which word shows sudden pain?', opts: ['Ouch!', 'and', 'under'], a: 0,
      why: '“Ouch!” — you say it when something hurts!' },
    { id: 'cj-q12', q: '“___! We won the match!”', opts: ['Hurray', 'Because', 'But'], a: 0,
      why: '“Hurray!” bursts out joy — an interjection.' }
  ],

  build: [
    { id: 'cj-b01', words: ['I', 'like', 'mangoes', 'and', 'bananas.'] },
    { id: 'cj-b02', words: ['He', 'is', 'small', 'but', 'strong.'] },
    { id: 'cj-b03', words: ['Do', 'you', 'want', 'tea', 'or', 'milk?'] },
    { id: 'cj-b04', words: ['I', 'sleep', 'early', 'because', 'I', 'am', 'tired.'] },
    { id: 'cj-b05', words: ['Rina', 'and', 'Amina', 'play', 'together.'] },
    { id: 'cj-b06', words: ['We', 'ran', 'but', 'missed', 'the', 'bus.'] },
    { id: 'cj-b07', words: ['Work', 'hard', 'and', 'you', 'will', 'win.'] },
    { id: 'cj-b08', words: ['She', 'smiled', 'because', 'she', 'won.'] }
  ]
};
