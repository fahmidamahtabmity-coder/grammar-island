/* Question bank: The Little Words (a / an / the) — island 'articles'.
   This island uses 'gap' (fill the gap by tapping) instead of Word Catcher. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['articles'] = {

  sort: {
    prompt: 'Does this word take “a” or “an”? Listen to its first SOUND.',
    baskets: ['a 🅰️', 'an 🥚'],
    items: [
      { id: 'ar-s01', w: 'mango', b: 0 }, { id: 'ar-s02', w: 'book', b: 0 },
      { id: 'ar-s03', w: 'cat', b: 0 }, { id: 'ar-s04', w: 'ball', b: 0 },
      { id: 'ar-s05', w: 'doctor', b: 0 }, { id: 'ar-s06', w: 'school', b: 0 },
      { id: 'ar-s07', w: 'banana', b: 0 }, { id: 'ar-s08', w: 'kite', b: 0 },
      { id: 'ar-s09', w: 'egg', b: 1 }, { id: 'ar-s10', w: 'apple', b: 1 },
      { id: 'ar-s11', w: 'orange', b: 1 }, { id: 'ar-s12', w: 'umbrella', b: 1 },
      { id: 'ar-s13', w: 'elephant', b: 1 }, { id: 'ar-s14', w: 'ant', b: 1 },
      { id: 'ar-s15', w: 'ice-cream', b: 1 }, { id: 'ar-s16', w: 'owl', b: 1 }
    ]
  },

  gap: [
    { id: 'ar-g01', q: 'I ate ___ egg.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Egg” starts with the vowel sound “e” → an egg.' },
    { id: 'ar-g02', q: 'She has ___ new pen.', opts: ['a', 'an', 'the'], a: 0,
      why: '“New” starts with the consonant sound “n” → a new pen.' },
    { id: 'ar-g03', q: '___ sun rises in the east.', opts: ['A', 'An', 'The'], a: 2,
      why: 'There is only ONE sun — one special thing we all know → the sun.' },
    { id: 'ar-g04', q: 'He saw ___ elephant.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Elephant” starts with the vowel sound “e” → an elephant.' },
    { id: 'ar-g05', q: 'We planted ___ tree.', opts: ['a', 'an', 'the'], a: 0,
      why: '“Tree” starts with the consonant sound “t” → a tree.' },
    { id: 'ar-g06', q: 'Amina ate ___ orange.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Orange” starts with the vowel sound “o” → an orange.' },
    { id: 'ar-g07', q: 'Look at ___ moon tonight!', opts: ['a', 'an', 'the'], a: 2,
      why: 'There is only one moon — special thing we both know → the moon.' },
    { id: 'ar-g08', q: 'I need ___ umbrella.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Umbrella” starts with the vowel sound “u” → an umbrella.' },
    { id: 'ar-g09', q: 'This is ___ easy game.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Easy” starts with the vowel sound “e” → an easy game.' },
    { id: 'ar-g10', q: 'Dhaka is ___ big city.', opts: ['a', 'an', 'the'], a: 0,
      why: '“Big” starts with the consonant sound “b” → a big city.' },
    { id: 'ar-g11', q: 'Please close ___ door.', opts: ['a', 'an', 'the'], a: 2,
      why: 'We mean one particular door — the one in this room → the door.' },
    { id: 'ar-g12', q: 'He bought ___ ice-cream.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Ice-cream” starts with the vowel sound “i” → an ice-cream.' },
    { id: 'ar-g13', q: 'She saw ___ owl in the tree.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Owl” starts with the vowel sound “o” → an owl.' },
    { id: 'ar-g14', q: 'I read ___ book every night.', opts: ['a', 'an', 'the'], a: 0,
      why: 'Any book, and “book” starts with a consonant sound → a book.' },
    { id: 'ar-g15', q: '___ Padma is a big river.', opts: ['A', 'An', 'The'], a: 2,
      why: 'The Padma is one special, particular river → The Padma.' },
    { id: 'ar-g16', q: 'Karim wants ___ apple.', opts: ['a', 'an', 'the'], a: 1,
      why: '“Apple” starts with the vowel sound “a” → an apple.' },
    { id: 'ar-g17', q: 'My mother made ___ cake.', opts: ['a', 'an', 'the'], a: 0,
      why: '“Cake” starts with the consonant sound “c” → a cake.' },
    { id: 'ar-g18', q: 'I drink ___ glass of milk every morning.', opts: ['a', 'an', 'the'], a: 0,
      why: '“Glass” starts with the consonant sound “g” → a glass.' }
  ],

  mcq: [
    { id: 'ar-q01', q: 'Which is correct?', opts: ['a egg', 'an egg'], a: 1,
      why: '“Egg” begins with a vowel sound, so it takes “an”.' },
    { id: 'ar-q02', q: 'Which is correct?', opts: ['an mango', 'a mango'], a: 1,
      why: '“Mango” begins with the consonant sound “m”, so it takes “a”.' },
    { id: 'ar-q03', q: 'We use “an” before…', opts: ['vowel sounds (a, e, i, o, u)', 'consonant sounds'], a: 0,
      why: 'an apple, an egg, an ice-cream, an orange, an umbrella!' },
    { id: 'ar-q04', q: 'Which word takes “an”?', opts: ['banana', 'umbrella', 'kite'], a: 1,
      why: '“Umbrella” starts with the vowel sound “u” → an umbrella.' },
    { id: 'ar-q05', q: 'Which word takes “a”?', opts: ['apple', 'egg', 'chair'], a: 2,
      why: '“Chair” starts with the consonant sound “ch” → a chair.' },
    { id: 'ar-q06', q: 'There is only one sun, so we say…', opts: ['the sun', 'a sun'], a: 0,
      why: '“The” is for one special thing we both know — and everyone knows the sun!' },
    { id: 'ar-q07', q: 'Which is correct?', opts: ['an ant', 'a ant'], a: 0,
      why: '“Ant” starts with the vowel sound “a” → an ant.' },
    { id: 'ar-q08', q: 'Pick the correct sentence.', opts: ['She is a doctor.', 'She is an doctor.'], a: 0,
      why: '“Doctor” starts with the consonant sound “d” → a doctor.' },
    { id: 'ar-q09', q: 'Which word takes “an”?', opts: ['cow', 'elephant', 'goat'], a: 1,
      why: '“Elephant” starts with the vowel sound “e” → an elephant.' },
    { id: 'ar-q10', q: 'We use “the” for…', opts: ['one special thing we both know', 'any one thing'], a: 0,
      why: '“Close the door” means that particular door — not just any door.' },
    { id: 'ar-q11', q: 'Which is correct?', opts: ['I saw a owl.', 'I saw an owl.'], a: 1,
      why: '“Owl” starts with the vowel sound “o” → an owl.' },
    { id: 'ar-q12', q: 'Which sentence is correct?', opts: ['The moon is bright tonight.', 'A moon is bright tonight.'], a: 0,
      why: 'There is only one moon we all know → the moon.' }
  ],

  build: [
    { id: 'ar-b01', words: ['I', 'ate', 'an', 'egg', 'for', 'breakfast.'] },
    { id: 'ar-b02', words: ['She', 'has', 'a', 'red', 'umbrella.'] },
    { id: 'ar-b03', words: ['The', 'sun', 'is', 'very', 'hot.'] },
    { id: 'ar-b04', words: ['Karim', 'saw', 'an', 'elephant.'] },
    { id: 'ar-b05', words: ['We', 'sat', 'under', 'a', 'tree.'] },
    { id: 'ar-b06', words: ['The', 'moon', 'shines', 'at', 'night.'] },
    { id: 'ar-b07', words: ['Rina', 'wants', 'an', 'orange.'] },
    { id: 'ar-b08', words: ['He', 'reads', 'a', 'book', 'at', 'night.'] }
  ]
};
