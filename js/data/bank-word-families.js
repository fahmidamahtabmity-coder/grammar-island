/* Question bank: Word Families (naming / action / describing overview) — island 'word-families'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['word-families'] = {

  catch: {
    prompt: 'Tap only the ACTION words (verbs)!',
    words: [
      { id: 'wf-c01', w: 'run', t: 1 }, { id: 'wf-c02', w: 'jump', t: 1 },
      { id: 'wf-c03', w: 'eat', t: 1 }, { id: 'wf-c04', w: 'sing', t: 1 },
      { id: 'wf-c05', w: 'swim', t: 1 }, { id: 'wf-c06', w: 'read', t: 1 },
      { id: 'wf-c07', w: 'write', t: 1 }, { id: 'wf-c08', w: 'play', t: 1 },
      { id: 'wf-c09', w: 'sleep', t: 1 }, { id: 'wf-c10', w: 'dance', t: 1 },
      { id: 'wf-c11', w: 'cook', t: 1 }, { id: 'wf-c12', w: 'fly', t: 1 },
      { id: 'wf-c13', w: 'cat', t: 0 }, { id: 'wf-c14', w: 'happy', t: 0 },
      { id: 'wf-c15', w: 'book', t: 0 }, { id: 'wf-c16', w: 'red', t: 0 },
      { id: 'wf-c17', w: 'school', t: 0 }, { id: 'wf-c18', w: 'big', t: 0 },
      { id: 'wf-c19', w: 'mango', t: 0 }, { id: 'wf-c20', w: 'soft', t: 0 },
      { id: 'wf-c21', w: 'teacher', t: 0 }, { id: 'wf-c22', w: 'ball', t: 0 },
      { id: 'wf-c23', w: 'tall', t: 0 }, { id: 'wf-c24', w: 'garden', t: 0 }
    ]
  },

  sort: {
    prompt: 'Which family does this word belong to?',
    baskets: ['Naming 🧑', 'Action 🏃', 'Describing 🎨'],
    items: [
      { id: 'wf-s01', w: 'cat', b: 0 }, { id: 'wf-s02', w: 'school', b: 0 },
      { id: 'wf-s03', w: 'Amina', b: 0 }, { id: 'wf-s04', w: 'book', b: 0 },
      { id: 'wf-s05', w: 'mango', b: 0 }, { id: 'wf-s06', w: 'teacher', b: 0 },
      { id: 'wf-s07', w: 'run', b: 1 }, { id: 'wf-s08', w: 'eat', b: 1 },
      { id: 'wf-s09', w: 'sing', b: 1 }, { id: 'wf-s10', w: 'jump', b: 1 },
      { id: 'wf-s11', w: 'swim', b: 1 }, { id: 'wf-s12', w: 'read', b: 1 },
      { id: 'wf-s13', w: 'happy', b: 2 }, { id: 'wf-s14', w: 'red', b: 2 },
      { id: 'wf-s15', w: 'big', b: 2 }, { id: 'wf-s16', w: 'soft', b: 2 },
      { id: 'wf-s17', w: 'tall', b: 2 }, { id: 'wf-s18', w: 'sweet', b: 2 }
    ]
  },

  mcq: [
    { id: 'wf-q01', q: 'Which one is an ACTION word?', opts: ['jump', 'chair', 'green'], a: 0,
      why: 'Jumping is something you DO — an action word (verb).' },
    { id: 'wf-q02', q: 'Which one is a NAMING word?', opts: ['swim', 'market', 'angry'], a: 1,
      why: 'A market is a place — naming words (nouns) name people, places and things.' },
    { id: 'wf-q03', q: 'Which one is a DESCRIBING word?', opts: ['sweet', 'mango', 'eat'], a: 0,
      why: '“Sweet” tells what the mango is LIKE — a describing word (adjective).' },
    { id: 'wf-q04', q: 'In “The girl sings”, the ACTION word is…', opts: ['sings', 'girl', 'The'], a: 0,
      why: 'Singing is what she DOES.' },
    { id: 'wf-q05', q: 'In “The red ball bounces”, which word DESCRIBES the ball?', opts: ['red', 'ball', 'bounces'], a: 0,
      why: '“Red” tells what the ball looks like.' },
    { id: 'wf-q06', q: 'Naming words are also called…', opts: ['nouns', 'verbs', 'adjectives'], a: 0,
      why: 'Noun is the grammar name for a naming word.' },
    { id: 'wf-q07', q: 'Action words are also called…', opts: ['verbs', 'nouns', 'adjectives'], a: 0,
      why: 'Verb is the grammar name for an action word.' },
    { id: 'wf-q08', q: 'Describing words are also called…', opts: ['adjectives', 'verbs', 'nouns'], a: 0,
      why: 'Adjective is the grammar name for a describing word.' },
    { id: 'wf-q09', q: '“Amina eats a sweet mango.” The NAMING words are…', opts: ['Amina and mango', 'eats and sweet', 'sweet and a'], a: 0,
      why: 'Amina (person) and mango (thing) are the nouns here.' },
    { id: 'wf-q10', q: 'Which pair are BOTH action words?', opts: ['run & sing', 'cat & dog', 'big & small'], a: 0,
      why: 'Running and singing are things you DO.' },
    { id: 'wf-q11', q: 'Which pair are BOTH describing words?', opts: ['tall & happy', 'jump & play', 'book & pen'], a: 0,
      why: '“Tall” and “happy” both tell what someone is like.' },
    { id: 'wf-q12', q: 'In “The small cat sleeps”, the ACTION word is…', opts: ['sleeps', 'small', 'cat'], a: 0,
      why: 'Sleeping is what the cat DOES.' },
    { id: 'wf-q13', q: 'In “a sunny day”, which word tells WHAT KIND of day?', opts: ['sunny', 'day', 'a'], a: 0,
      why: '“Sunny” describes the day — an adjective.' },
    { id: 'wf-q14', q: 'Which family does “teacher” belong to?', opts: ['naming words', 'action words', 'describing words'], a: 0,
      why: 'A teacher is a person — so “teacher” is a naming word (noun).' }
  ],

  build: [
    { id: 'wf-b01', words: ['The', 'happy', 'girl', 'sings.'] },
    { id: 'wf-b02', words: ['The', 'small', 'cat', 'sleeps.'] },
    { id: 'wf-b03', words: ['Rina', 'eats', 'a', 'sweet', 'mango.'] },
    { id: 'wf-b04', words: ['The', 'tall', 'boy', 'runs', 'fast.'] },
    { id: 'wf-b05', words: ['My', 'kind', 'teacher', 'smiles.'] },
    { id: 'wf-b06', words: ['The', 'red', 'ball', 'bounces', 'high.'] },
    { id: 'wf-b07', words: ['A', 'little', 'bird', 'sings', 'songs.'] },
    { id: 'wf-b08', words: ['The', 'hot', 'sun', 'shines.'] }
  ]
};
