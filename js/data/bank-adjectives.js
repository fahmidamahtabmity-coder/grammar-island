/* Question bank: Describing Words (adjectives) — island 'adjectives'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['adjectives'] = {

  catch: {
    prompt: 'Tap only the DESCRIBING words (adjectives)!',
    words: [
      { id: 'aj-c01', w: 'red', t: 1 }, { id: 'aj-c02', w: 'big', t: 1 },
      { id: 'aj-c03', w: 'small', t: 1 }, { id: 'aj-c04', w: 'happy', t: 1 },
      { id: 'aj-c05', w: 'soft', t: 1 }, { id: 'aj-c06', w: 'sweet', t: 1 },
      { id: 'aj-c07', w: 'tall', t: 1 }, { id: 'aj-c08', w: 'cold', t: 1 },
      { id: 'aj-c09', w: 'dirty', t: 1 }, { id: 'aj-c10', w: 'brave', t: 1 },
      { id: 'aj-c11', w: 'round', t: 1 }, { id: 'aj-c12', w: 'shiny', t: 1 },
      { id: 'aj-c13', w: 'run', t: 0 }, { id: 'aj-c14', w: 'book', t: 0 },
      { id: 'aj-c15', w: 'school', t: 0 }, { id: 'aj-c16', w: 'eats', t: 0 },
      { id: 'aj-c17', w: 'mango', t: 0 }, { id: 'aj-c18', w: 'jump', t: 0 },
      { id: 'aj-c19', w: 'teacher', t: 0 }, { id: 'aj-c20', w: 'sing', t: 0 },
      { id: 'aj-c21', w: 'ball', t: 0 }, { id: 'aj-c22', w: 'swims', t: 0 },
      { id: 'aj-c23', w: 'river', t: 0 }, { id: 'aj-c24', w: 'dance', t: 0 }
    ]
  },

  sort: {
    prompt: 'What does this describing word tell us about?',
    baskets: ['Colour 🌈', 'Size 📏', 'Feeling 😊', 'Taste 👅'],
    items: [
      { id: 'aj-s01', w: 'red', b: 0 }, { id: 'aj-s02', w: 'blue', b: 0 },
      { id: 'aj-s03', w: 'green', b: 0 }, { id: 'aj-s04', w: 'yellow', b: 0 },
      { id: 'aj-s05', w: 'big', b: 1 }, { id: 'aj-s06', w: 'small', b: 1 },
      { id: 'aj-s07', w: 'tall', b: 1 }, { id: 'aj-s08', w: 'tiny', b: 1 },
      { id: 'aj-s09', w: 'happy', b: 2 }, { id: 'aj-s10', w: 'sad', b: 2 },
      { id: 'aj-s11', w: 'angry', b: 2 }, { id: 'aj-s12', w: 'scared', b: 2 },
      { id: 'aj-s13', w: 'sweet', b: 3 }, { id: 'aj-s14', w: 'sour', b: 3 },
      { id: 'aj-s15', w: 'salty', b: 3 }, { id: 'aj-s16', w: 'bitter', b: 3 }
    ]
  },

  mcq: [
    { id: 'aj-q01', q: 'Which one is a describing word?', opts: ['soft', 'chair', 'run'], a: 0,
      why: '“Soft” tells what something FEELS like.' },
    { id: 'aj-q02', q: 'In “a hot day”, which word describes?', opts: ['hot', 'day', 'a'], a: 0,
      why: '“Hot” tells what kind of day it is.' },
    { id: 'aj-q03', q: '“The clever fox jumped.”  Which word describes the fox?', opts: ['clever', 'jumped', 'fox'], a: 0,
      why: '“Clever” tells what the fox is LIKE.' },
    { id: 'aj-q04', q: 'Which word tells the COLOUR in “a green parrot”?', opts: ['green', 'parrot', 'a'], a: 0,
      why: 'Green is the parrot’s colour.' },
    { id: 'aj-q05', q: 'Adjectives describe…', opts: ['nouns — people and things', 'verbs — actions', 'stop marks'], a: 0,
      why: 'Describing words tell us more about naming words.' },
    { id: 'aj-q06', q: 'Which pair are BOTH describing words?', opts: ['cold & wet', 'run & jump', 'cup & spoon'], a: 0,
      why: '“Cold” and “wet” both tell what something is like.' },
    { id: 'aj-q07', q: '“The tea is ___.”  Pick the describing word:', opts: ['hot', 'drink', 'cup'], a: 0,
      why: '“The tea is hot.” — hot describes the tea.' },
    { id: 'aj-q08', q: 'In “two little kittens”, which word tells the SIZE?', opts: ['little', 'two', 'kittens'], a: 0,
      why: '“Little” tells how small the kittens are.' },
    { id: 'aj-q09', q: 'Which one is NOT a describing word?', opts: ['sing', 'brave', 'dirty'], a: 0,
      why: '“Sing” is an action — brave and dirty describe things.' },
    { id: 'aj-q10', q: 'Which word describes TASTE?', opts: ['sweet', 'loud', 'blue'], a: 0,
      why: 'Sweet is a taste — like a ripe mango!' },
    { id: 'aj-q11', q: 'In “The tired farmer slept”, the adjective is…', opts: ['tired', 'farmer', 'slept'], a: 0,
      why: '“Tired” describes how the farmer felt.' },
    { id: 'aj-q12', q: 'Describing words are also called…', opts: ['adjectives', 'verbs', 'pronouns'], a: 0,
      why: 'Adjective is the grammar name for a describing word.' },
    { id: 'aj-q13', q: '“a ___ elephant” — pick the describing word:', opts: ['huge', 'runs', 'eats'], a: 0,
      why: '“A huge elephant” — huge tells its size.' },
    { id: 'aj-q14', q: 'Which sentence has an adjective?', opts: ['The small cat sleeps.', 'The cat sleeps.', 'Cats sleep.'], a: 0,
      why: 'Only the first one describes the cat — “small”.' }
  ],

  build: [
    { id: 'aj-b01', words: ['The', 'little', 'girl', 'smiles.'] },
    { id: 'aj-b02', words: ['I', 'have', 'a', 'red', 'umbrella.'] },
    { id: 'aj-b03', words: ['The', 'soft', 'kitten', 'sleeps.'] },
    { id: 'aj-b04', words: ['We', 'ate', 'sweet', 'mangoes.'] },
    { id: 'aj-b05', words: ['A', 'big', 'elephant', 'drinks', 'water.'] },
    { id: 'aj-b06', words: ['The', 'brave', 'boy', 'helps', 'everyone.'] },
    { id: 'aj-b07', words: ['My', 'new', 'shoes', 'are', 'white.'] },
    { id: 'aj-b08', words: ['The', 'cold', 'wind', 'blows.'] }
  ]
};
