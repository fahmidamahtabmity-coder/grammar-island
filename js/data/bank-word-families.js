/* Question bank: Word Families (naming / action / describing overview) — island 'word-families'.
   Uses its OWN fresh vocabulary and sentences (no overlap with Naming Words,
   Doing Words or Describing Words) so nothing feels repeated. Its signature is
   telling all three families apart in one place. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['word-families'] = {

  catch: {
    prompt: 'Tap only the DESCRIBING words (adjectives)!',
    words: [
      { id: 'wf-c01', w: 'warm', t: 1 }, { id: 'wf-c02', w: 'loud', t: 1 },
      { id: 'wf-c03', w: 'clean', t: 1 }, { id: 'wf-c04', w: 'sleepy', t: 1 },
      { id: 'wf-c05', w: 'wet', t: 1 }, { id: 'wf-c06', w: 'dark', t: 1 },
      { id: 'wf-c07', w: 'kind', t: 1 }, { id: 'wf-c08', w: 'bright', t: 1 },
      { id: 'wf-c09', w: 'heavy', t: 1 }, { id: 'wf-c10', w: 'thin', t: 1 },
      { id: 'wf-c11', w: 'gentle', t: 1 }, { id: 'wf-c12', w: 'fresh', t: 1 },
      { id: 'wf-c13', w: 'house', t: 0 }, { id: 'wf-c14', w: 'paint', t: 0 },
      { id: 'wf-c15', w: 'moon', t: 0 }, { id: 'wf-c16', w: 'throw', t: 0 },
      { id: 'wf-c17', w: 'tiger', t: 0 }, { id: 'wf-c18', w: 'walk', t: 0 },
      { id: 'wf-c19', w: 'boat', t: 0 }, { id: 'wf-c20', w: 'ride', t: 0 },
      { id: 'wf-c21', w: 'star', t: 0 }, { id: 'wf-c22', w: 'kick', t: 0 },
      { id: 'wf-c23', w: 'road', t: 0 }, { id: 'wf-c24', w: 'wave', t: 0 }
    ]
  },

  sort: {
    prompt: 'Which family does this word belong to?',
    baskets: ['Naming 🧑', 'Action 🏃', 'Describing 🎨'],
    items: [
      { id: 'wf-s01', w: 'house', b: 0 }, { id: 'wf-s02', w: 'moon', b: 0 },
      { id: 'wf-s03', w: 'tiger', b: 0 }, { id: 'wf-s04', w: 'boat', b: 0 },
      { id: 'wf-s05', w: 'star', b: 0 }, { id: 'wf-s06', w: 'king', b: 0 },
      { id: 'wf-s07', w: 'paint', b: 1 }, { id: 'wf-s08', w: 'throw', b: 1 },
      { id: 'wf-s09', w: 'walk', b: 1 }, { id: 'wf-s10', w: 'ride', b: 1 },
      { id: 'wf-s11', w: 'kick', b: 1 }, { id: 'wf-s12', w: 'wave', b: 1 },
      { id: 'wf-s13', w: 'warm', b: 2 }, { id: 'wf-s14', w: 'loud', b: 2 },
      { id: 'wf-s15', w: 'clean', b: 2 }, { id: 'wf-s16', w: 'sleepy', b: 2 },
      { id: 'wf-s17', w: 'dark', b: 2 }, { id: 'wf-s18', w: 'kind', b: 2 }
    ]
  },

  mcq: [
    { id: 'wf-q01', q: 'Every word has a JOB. What job does “paint” do?', opts: ['action word', 'naming word', 'describing word'], a: 0,
      why: 'Painting is something you DO — an action word (verb).' },
    { id: 'wf-q02', q: 'What job does “moon” do?', opts: ['naming word', 'action word', 'describing word'], a: 0,
      why: 'The moon is a thing — a naming word (noun).' },
    { id: 'wf-q03', q: 'What job does “bright” do?', opts: ['describing word', 'naming word', 'action word'], a: 0,
      why: '“Bright” tells what something is LIKE — a describing word (adjective).' },
    { id: 'wf-q04', q: 'In “The tiger roars”, which word does the ACTION?', opts: ['roars', 'tiger', 'The'], a: 0,
      why: 'Roaring is what the tiger DOES.' },
    { id: 'wf-q05', q: 'In “a heavy box”, which word DESCRIBES the box?', opts: ['heavy', 'box', 'a'], a: 0,
      why: '“Heavy” tells us what the box is like.' },
    { id: 'wf-q06', q: 'Naming words are also called…', opts: ['nouns', 'verbs', 'adjectives'], a: 0,
      why: 'Noun is the grammar name for a naming word.' },
    { id: 'wf-q07', q: 'Action words are also called…', opts: ['verbs', 'nouns', 'adjectives'], a: 0,
      why: 'Verb is the grammar name for an action word.' },
    { id: 'wf-q08', q: 'Describing words are also called…', opts: ['adjectives', 'verbs', 'nouns'], a: 0,
      why: 'Adjective is the grammar name for a describing word.' },
    { id: 'wf-q09', q: '“The kind king waves.” Which word is the DESCRIBING word?', opts: ['kind', 'king', 'waves'], a: 0,
      why: '“Kind” tells us what the king is like.' },
    { id: 'wf-q10', q: '“The kind king waves.” Which word is the ACTION word?', opts: ['waves', 'kind', 'king'], a: 0,
      why: 'Waving is what the king DOES.' },
    { id: 'wf-q11', q: '“The kind king waves.” Which word is the NAMING word?', opts: ['king', 'kind', 'waves'], a: 0,
      why: '“King” names a person.' },
    { id: 'wf-q12', q: 'Which THREE jobs can a word have?', opts: ['naming, action, describing', 'big, small, round', 'red, blue, green'], a: 0,
      why: 'The three families: naming (noun), action (verb), describing (adjective).' },
    { id: 'wf-q13', q: 'Which word belongs to a DIFFERENT family?  house · boat · walk', opts: ['walk', 'house', 'boat'], a: 0,
      why: '“Walk” is an action; “house” and “boat” are naming words.' },
    { id: 'wf-q14', q: 'Which word belongs to a DIFFERENT family?  warm · loud · throw', opts: ['throw', 'warm', 'loud'], a: 0,
      why: '“Throw” is an action; “warm” and “loud” are describing words.' },
    { id: 'wf-q15', q: 'In “A bright star shines”, which word DESCRIBES?', opts: ['bright', 'star', 'shines'], a: 0,
      why: '“Bright” tells us what the star is like.' },
    { id: 'wf-q16', q: 'In “A bright star shines”, which word is the ACTION?', opts: ['shines', 'bright', 'star'], a: 0,
      why: 'Shining is what the star DOES.' }
  ],

  build: [
    { id: 'wf-b01', words: ['The', 'kind', 'king', 'waves.'] },
    { id: 'wf-b02', words: ['A', 'bright', 'star', 'shines.'] },
    { id: 'wf-b03', words: ['The', 'loud', 'tiger', 'roars.'] },
    { id: 'wf-b04', words: ['A', 'clean', 'boat', 'sails', 'away.'] },
    { id: 'wf-b05', words: ['The', 'funny', 'clown', 'jumps.'] },
    { id: 'wf-b06', words: ['A', 'warm', 'fire', 'glows.'] },
    { id: 'wf-b07', words: ['The', 'gentle', 'horse', 'walks', 'slowly.'] },
    { id: 'wf-b08', words: ['A', 'heavy', 'truck', 'rolls', 'past.'] }
  ]
};
