/* Question bank: Doing Words (action verbs) — island 'verbs-doing'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['verbs-doing'] = {

  catch: {
    prompt: 'Tap only the DOING words (verbs)!',
    words: [
      { id: 'vd-c01', w: 'run', t: 1 }, { id: 'vd-c02', w: 'eat', t: 1 },
      { id: 'vd-c03', w: 'sing', t: 1 }, { id: 'vd-c04', w: 'jump', t: 1 },
      { id: 'vd-c05', w: 'write', t: 1 }, { id: 'vd-c06', w: 'swim', t: 1 },
      { id: 'vd-c07', w: 'dance', t: 1 }, { id: 'vd-c08', w: 'cook', t: 1 },
      { id: 'vd-c09', w: 'fly', t: 1 }, { id: 'vd-c10', w: 'laugh', t: 1 },
      { id: 'vd-c11', w: 'climb', t: 1 }, { id: 'vd-c12', w: 'draw', t: 1 },
      { id: 'vd-c13', w: 'cat', t: 0 }, { id: 'vd-c14', w: 'book', t: 0 },
      { id: 'vd-c15', w: 'happy', t: 0 }, { id: 'vd-c16', w: 'school', t: 0 },
      { id: 'vd-c17', w: 'red', t: 0 }, { id: 'vd-c18', w: 'mango', t: 0 },
      { id: 'vd-c19', w: 'tall', t: 0 }, { id: 'vd-c20', w: 'teacher', t: 0 },
      { id: 'vd-c21', w: 'soft', t: 0 }, { id: 'vd-c22', w: 'ball', t: 0 },
      { id: 'vd-c23', w: 'garden', t: 0 }, { id: 'vd-c24', w: 'sweet', t: 0 }
    ]
  },

  sort: {
    prompt: 'Doing word — or not?',
    baskets: ['Doing word 🏃', 'Not a doing word 📦'],
    items: [
      { id: 'vd-s01', w: 'swims', b: 0 }, { id: 'vd-s02', w: 'claps', b: 0 },
      { id: 'vd-s03', w: 'drinks', b: 0 }, { id: 'vd-s04', w: 'writes', b: 0 },
      { id: 'vd-s05', w: 'hops', b: 0 }, { id: 'vd-s06', w: 'cooks', b: 0 },
      { id: 'vd-s07', w: 'reads', b: 0 }, { id: 'vd-s08', w: 'barks', b: 0 },
      { id: 'vd-s09', w: 'chair', b: 1 }, { id: 'vd-s10', w: 'yellow', b: 1 },
      { id: 'vd-s11', w: 'doctor', b: 1 }, { id: 'vd-s12', w: 'kite', b: 1 },
      { id: 'vd-s13', w: 'slow', b: 1 }, { id: 'vd-s14', w: 'river', b: 1 },
      { id: 'vd-s15', w: 'funny', b: 1 }, { id: 'vd-s16', w: 'pencil', b: 1 }
    ]
  },

  mcq: [
    { id: 'vd-q01', q: 'Which one is a doing word?', opts: ['dances', 'mango', 'blue'], a: 0,
      why: 'Dancing is something you DO — a verb.' },
    { id: 'vd-q02', q: 'Which one is a doing word?', opts: ['pencil', 'jumps', 'tall'], a: 1,
      why: 'Jumping is an action — a doing word.' },
    { id: 'vd-q03', q: 'In “The dog barks”, the doing word is…', opts: ['barks', 'dog', 'The'], a: 0,
      why: 'Barking is what the dog DOES.' },
    { id: 'vd-q04', q: 'In “Amina writes a letter”, the verb is…', opts: ['writes', 'letter', 'Amina'], a: 0,
      why: 'Writing is the action here.' },
    { id: 'vd-q05', q: 'A verb tells us…', opts: ['what someone does', 'the name of a place', 'a colour'], a: 0,
      why: 'Verbs are the DOING words of a sentence.' },
    { id: 'vd-q06', q: 'Which word tells what a fish does?', opts: ['swims', 'book', 'green'], a: 0,
      why: 'A fish swims — that is its action.' },
    { id: 'vd-q07', q: '“The baby ___.”  Pick the doing word:', opts: ['cries', 'chair', 'red'], a: 0,
      why: '“The baby cries.” — crying is an action.' },
    { id: 'vd-q08', q: 'Which pair are BOTH doing words?', opts: ['eat & drink', 'cup & plate', 'big & small'], a: 0,
      why: 'Eating and drinking are both things you DO.' },
    { id: 'vd-q09', q: 'In “Birds fly high”, the doing word is…', opts: ['fly', 'Birds', 'high'], a: 0,
      why: 'Flying is what the birds DO.' },
    { id: 'vd-q10', q: 'Which one is NOT a doing word?', opts: ['school', 'run', 'jump'], a: 0,
      why: '“School” names a place — running and jumping are actions.' },
    { id: 'vd-q11', q: 'The doing word in “We play cricket every day” is…', opts: ['play', 'cricket', 'every'], a: 0,
      why: 'Playing is the action.' },
    { id: 'vd-q12', q: 'Doing words are also called…', opts: ['verbs', 'nouns', 'adjectives'], a: 0,
      why: 'Verb is the grammar name for a doing word.' },
    { id: 'vd-q13', q: '“The cook cooks rice.”  Which “cook(s)” is the doing word?', opts: ['the second — cooks', 'the first — cook', 'both of them'], a: 0,
      why: 'The first “cook” NAMES a person; the second “cooks” is the ACTION.' },
    { id: 'vd-q14', q: 'Which sentence has the doing word “reads”?', opts: ['Father reads the paper.', 'Father is a reader.', 'The book is red.'], a: 0,
      why: 'Only the first sentence shows the action of reading.' }
  ],

  build: [
    { id: 'vd-b01', words: ['The', 'dog', 'barks', 'loudly.'] },
    { id: 'vd-b02', words: ['Amina', 'writes', 'a', 'letter.'] },
    { id: 'vd-b03', words: ['We', 'play', 'cricket', 'every', 'day.'] },
    { id: 'vd-b04', words: ['The', 'fish', 'swims', 'fast.'] },
    { id: 'vd-b05', words: ['My', 'brother', 'climbs', 'trees.'] },
    { id: 'vd-b06', words: ['Rina', 'sings', 'a', 'sweet', 'song.'] },
    { id: 'vd-b07', words: ['The', 'baby', 'laughs', 'and', 'claps.'] },
    { id: 'vd-b08', words: ['Birds', 'fly', 'high', 'in', 'the', 'sky.'] }
  ]
};
