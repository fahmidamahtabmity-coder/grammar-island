/* Question bank: How-Words (adverbs) — island 'adverbs'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['adverbs'] = {

  catch: {
    prompt: 'Tap only the HOW / WHEN / WHERE words (adverbs)!',
    words: [
      { id: 'av-c01', w: 'slowly', t: 1 }, { id: 'av-c02', w: 'quickly', t: 1 },
      { id: 'av-c03', w: 'loudly', t: 1 }, { id: 'av-c04', w: 'softly', t: 1 },
      { id: 'av-c05', w: 'here', t: 1 }, { id: 'av-c06', w: 'there', t: 1 },
      { id: 'av-c07', w: 'today', t: 1 }, { id: 'av-c08', w: 'now', t: 1 },
      { id: 'av-c09', w: 'always', t: 1 }, { id: 'av-c10', w: 'never', t: 1 },
      { id: 'av-c11', w: 'outside', t: 1 }, { id: 'av-c12', w: 'carefully', t: 1 },
      { id: 'av-c13', w: 'cat', t: 0 }, { id: 'av-c14', w: 'run', t: 0 },
      { id: 'av-c15', w: 'happy', t: 0 }, { id: 'av-c16', w: 'book', t: 0 },
      { id: 'av-c17', w: 'green', t: 0 }, { id: 'av-c18', w: 'jump', t: 0 },
      { id: 'av-c19', w: 'school', t: 0 }, { id: 'av-c20', w: 'tall', t: 0 },
      { id: 'av-c21', w: 'mango', t: 0 }, { id: 'av-c22', w: 'sing', t: 0 },
      { id: 'av-c23', w: 'chair', t: 0 }, { id: 'av-c24', w: 'sweet', t: 0 }
    ]
  },

  sort: {
    prompt: 'Does this word tell HOW, WHEN or WHERE?',
    baskets: ['HOW 🏃', 'WHEN ⏰', 'WHERE 📍'],
    items: [
      { id: 'av-s01', w: 'slowly', b: 0 }, { id: 'av-s02', w: 'loudly', b: 0 },
      { id: 'av-s03', w: 'quickly', b: 0 }, { id: 'av-s04', w: 'neatly', b: 0 },
      { id: 'av-s05', w: 'bravely', b: 0 },
      { id: 'av-s06', w: 'today', b: 1 }, { id: 'av-s07', w: 'now', b: 1 },
      { id: 'av-s08', w: 'always', b: 1 }, { id: 'av-s09', w: 'yesterday', b: 1 },
      { id: 'av-s10', w: 'never', b: 1 }, { id: 'av-s11', w: 'daily', b: 1 },
      { id: 'av-s12', w: 'here', b: 2 }, { id: 'av-s13', w: 'there', b: 2 },
      { id: 'av-s14', w: 'outside', b: 2 }, { id: 'av-s15', w: 'inside', b: 2 },
      { id: 'av-s16', w: 'everywhere', b: 2 }
    ]
  },

  mcq: [
    { id: 'av-q01', q: 'An adverb tells us…', opts: ['how, when or where', 'colours only', 'names of people'], a: 0,
      why: 'Adverbs answer how? when? where? about an action.' },
    { id: 'av-q02', q: '“Rina writes neatly.”  Which word tells HOW?', opts: ['neatly', 'writes', 'Rina'], a: 0,
      why: '“Neatly” tells HOW she writes.' },
    { id: 'av-q03', q: 'Many HOW-words end in…', opts: ['-ly', '-er', '-ing'], a: 0,
      why: 'slowly, quickly, loudly, softly — spot the -ly!' },
    { id: 'av-q04', q: 'Which word tells WHEN?', opts: ['today', 'slowly', 'here'], a: 0,
      why: '“Today” answers when? — the others answer how? and where?.' },
    { id: 'av-q05', q: 'Which word tells WHERE?', opts: ['outside', 'quickly', 'always'], a: 0,
      why: '“Outside” answers where?.' },
    { id: 'av-q06', q: '“The lion roars ___.”', opts: ['loudly', 'louder', 'loud'], a: 0,
      why: 'HOW does it roar? Loudly — the -ly adverb.' },
    { id: 'av-q07', q: '“We go to school ___.”  Pick the WHEN word:', opts: ['daily', 'softly', 'there'], a: 0,
      why: '“Daily” means every day — a when-word.' },
    { id: 'av-q08', q: 'In “The old man walks slowly”, the adverb is…', opts: ['slowly', 'walks', 'old'], a: 0,
      why: '“Slowly” tells HOW he walks. (“Old” describes the man — adjective!)' },
    { id: 'av-q09', q: 'Which one is an adverb?', opts: ['carefully', 'careful', 'care'], a: 0,
      why: 'careful (adjective) + ly = carefully (adverb).' },
    { id: 'av-q10', q: '“Come ___!”  Pick the WHERE word:', opts: ['here', 'sweet', 'blue'], a: 0,
      why: '“Come here!” — here tells where.' },
    { id: 'av-q11', q: 'Which sentence tells HOW the girl sings?', opts: ['She sings sweetly.', 'She sings songs.', 'She is a singer.'], a: 0,
      why: '“Sweetly” answers HOW she sings.' },
    { id: 'av-q12', q: 'Turn “quick” into a HOW-word:', opts: ['quickly', 'quicker', 'quickness'], a: 0,
      why: 'Add -ly: quick → quickly.' }
  ],

  build: [
    { id: 'av-b01', words: ['The', 'turtle', 'walks', 'slowly.'] },
    { id: 'av-b02', words: ['Rina', 'writes', 'very', 'neatly.'] },
    { id: 'av-b03', words: ['We', 'always', 'brush', 'our', 'teeth.'] },
    { id: 'av-b04', words: ['The', 'lion', 'roars', 'loudly.'] },
    { id: 'av-b05', words: ['Please', 'come', 'here', 'quickly.'] },
    { id: 'av-b06', words: ['I', 'read', 'books', 'daily.'] },
    { id: 'av-b07', words: ['The', 'children', 'play', 'outside.'] },
    { id: 'av-b08', words: ['He', 'speaks', 'softly', 'to', 'the', 'baby.'] }
  ]
};
