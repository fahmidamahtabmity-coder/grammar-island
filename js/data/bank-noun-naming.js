/* Question bank: Naming Words (what is a noun?) — island 'noun-naming'.
   Every item has a stable id (never renumber — saved progress points at these). */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['noun-naming'] = {

  catch: {
    prompt: 'Tap only the NAMING WORDS (nouns)!',
    words: [
      { id: 'nn-c01', w: 'cat', t: 1 }, { id: 'nn-c02', w: 'school', t: 1 },
      { id: 'nn-c03', w: 'mango', t: 1 }, { id: 'nn-c04', w: 'river', t: 1 },
      { id: 'nn-c05', w: 'doctor', t: 1 }, { id: 'nn-c06', w: 'book', t: 1 },
      { id: 'nn-c07', w: 'chair', t: 1 }, { id: 'nn-c08', w: 'ball', t: 1 },
      { id: 'nn-c09', w: 'teacher', t: 1 }, { id: 'nn-c10', w: 'parrot', t: 1 },
      { id: 'nn-c11', w: 'garden', t: 1 }, { id: 'nn-c12', w: 'rice', t: 1 },
      { id: 'nn-c13', w: 'eats', t: 0 }, { id: 'nn-c14', w: 'ran', t: 0 },
      { id: 'nn-c15', w: 'jumped', t: 0 }, { id: 'nn-c16', w: 'swims', t: 0 },
      { id: 'nn-c17', w: 'laughed', t: 0 }, { id: 'nn-c18', w: 'happy', t: 0 },
      { id: 'nn-c19', w: 'big', t: 0 }, { id: 'nn-c20', w: 'red', t: 0 },
      { id: 'nn-c21', w: 'tall', t: 0 }, { id: 'nn-c22', w: 'soft', t: 0 },
      { id: 'nn-c23', w: 'quickly', t: 0 }, { id: 'nn-c24', w: 'slowly', t: 0 }
    ]
  },

  sort: {
    prompt: 'Which kind of naming word is it? Put it in the right basket.',
    baskets: ['Person 🧑', 'Place 🏫', 'Animal 🐄', 'Thing 📦'],
    items: [
      { id: 'nn-s01', w: 'doctor', b: 0 }, { id: 'nn-s02', w: 'farmer', b: 0 },
      { id: 'nn-s03', w: 'Amina', b: 0 }, { id: 'nn-s04', w: 'teacher', b: 0 },
      { id: 'nn-s05', w: 'Dhaka', b: 1 }, { id: 'nn-s06', w: 'school', b: 1 },
      { id: 'nn-s07', w: 'market', b: 1 }, { id: 'nn-s08', w: 'park', b: 1 },
      { id: 'nn-s09', w: 'cat', b: 2 }, { id: 'nn-s10', w: 'cow', b: 2 },
      { id: 'nn-s11', w: 'parrot', b: 2 }, { id: 'nn-s12', w: 'fish', b: 2 },
      { id: 'nn-s13', w: 'book', b: 3 }, { id: 'nn-s14', w: 'chair', b: 3 },
      { id: 'nn-s15', w: 'mango', b: 3 }, { id: 'nn-s16', w: 'ball', b: 3 }
    ]
  },

  mcq: [
    { id: 'nn-q01', q: 'Which word is a noun?', opts: ['sing', 'mango', 'fast'], a: 1,
      why: '“Mango” names a thing you can touch and eat — that makes it a noun.' },
    { id: 'nn-q02', q: 'Which word is a noun?', opts: ['chair', 'eat', 'green'], a: 0,
      why: '“Chair” names a thing. “Eat” is an action and “green” is a colour word.' },
    { id: 'nn-q03', q: 'Which word is a noun?', opts: ['slowly', 'jump', 'doctor'], a: 2,
      why: '“Doctor” names a person — nouns name people, places, animals and things.' },
    { id: 'nn-q04', q: 'Which word in this sentence is a noun?  “The girl smiled.”', opts: ['The', 'girl', 'smiled'], a: 1,
      why: '“Girl” names a person. “Smiled” is what she did.' },
    { id: 'nn-q05', q: 'Which word in this sentence is a noun?  “Birds fly.”', opts: ['Birds', 'fly'], a: 0,
      why: '“Birds” names animals. “Fly” is their action.' },
    { id: 'nn-q06', q: 'Which word in this sentence is a noun?  “Amina reads slowly.”', opts: ['reads', 'slowly', 'Amina'], a: 2,
      why: '“Amina” is the name of a person — a noun.' },
    { id: 'nn-q07', q: 'Which one is a PERSON noun?', opts: ['teacher', 'run', 'tall'], a: 0,
      why: 'A teacher is a person, so “teacher” is a noun.' },
    { id: 'nn-q08', q: 'Which one is a PLACE noun?', opts: ['sleep', 'market', 'angry'], a: 1,
      why: 'A market is a place you can go to.' },
    { id: 'nn-q09', q: 'Which one is an ANIMAL noun?', opts: ['soft', 'cow', 'sing'], a: 1,
      why: 'A cow is an animal, so “cow” is a naming word.' },
    { id: 'nn-q10', q: 'Which one is a THING noun?', opts: ['pen', 'laugh', 'small'], a: 0,
      why: 'A pen is a thing you can hold — a noun.' },
    { id: 'nn-q11', q: 'How many nouns are in this sentence?  “The boy has a kite.”', opts: ['1', '2', '3'], a: 1,
      why: 'Two nouns: “boy” (person) and “kite” (thing).' },
    { id: 'nn-q12', q: 'Which word is NOT a noun?', opts: ['river', 'mango', 'happy'], a: 2,
      why: '“Happy” describes a feeling — it does not NAME a person, place, animal or thing.' },
    { id: 'nn-q13', q: 'Which word is NOT a noun?', opts: ['swim', 'ball', 'school'], a: 0,
      why: '“Swim” is an action word, not a naming word.' },
    { id: 'nn-q14', q: 'How many nouns are in this sentence?  “The cat sat on the mat.”', opts: ['1', '2', '3'], a: 1,
      why: 'Two nouns: “cat” (animal) and “mat” (thing).' },
    { id: 'nn-q15', q: 'A noun is the name of a…', opts: ['person, place, animal or thing', 'colour', 'number'], a: 0,
      why: 'That is the whole rule — nouns are naming words!' },
    { id: 'nn-q16', q: 'Which pair are BOTH nouns?', opts: ['book & chair', 'run & jump', 'big & small'], a: 0,
      why: '“Book” and “chair” both name things. The others are actions and describing words.' },
    { id: 'nn-q17', q: '“Rina bought a fish at the market.”  Which noun is the PLACE?', opts: ['Rina', 'fish', 'market'], a: 2,
      why: 'The market is where she went — the place.' },
    { id: 'nn-q18', q: 'Which word names something you can read?', opts: ['book', 'sing', 'red'], a: 0,
      why: '“Book” names a thing — and you can read it!' }
  ],

  build: [
    { id: 'nn-b01', words: ['Amina', 'reads', 'a', 'book.'] },
    { id: 'nn-b02', words: ['The', 'cat', 'drinks', 'milk.'] },
    { id: 'nn-b03', words: ['My', 'father', 'is', 'a', 'doctor.'] },
    { id: 'nn-b04', words: ['The', 'boys', 'play', 'cricket.'] },
    { id: 'nn-b05', words: ['Rina', 'eats', 'a', 'mango.'] },
    { id: 'nn-b06', words: ['The', 'parrot', 'can', 'talk.'] },
    { id: 'nn-b07', words: ['We', 'go', 'to', 'school.'] },
    { id: 'nn-b08', words: ['The', 'ball', 'is', 'red.'] }
  ]
};
