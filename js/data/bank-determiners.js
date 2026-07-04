/* Question bank: Counting & Pointing Words (determiners & quantifiers) — island 'determiners'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['determiners'] = {

  sort: {
    prompt: 'One thing — or many things?',
    baskets: ['One thing ☝️', 'Many things 🖐️'],
    items: [
      { id: 'dt-s01', w: 'this mango', b: 0 }, { id: 'dt-s02', w: 'that boy', b: 0 },
      { id: 'dt-s03', w: 'a pen', b: 0 }, { id: 'dt-s04', w: 'one star', b: 0 },
      { id: 'dt-s05', w: 'an egg', b: 0 }, { id: 'dt-s06', w: 'this book', b: 0 },
      { id: 'dt-s07', w: 'that kite', b: 0 }, { id: 'dt-s08', w: 'a cat', b: 0 },
      { id: 'dt-s09', w: 'these mangoes', b: 1 }, { id: 'dt-s10', w: 'those boys', b: 1 },
      { id: 'dt-s11', w: 'many pens', b: 1 }, { id: 'dt-s12', w: 'some stars', b: 1 },
      { id: 'dt-s13', w: 'those kites', b: 1 }, { id: 'dt-s14', w: 'these books', b: 1 },
      { id: 'dt-s15', w: 'many cats', b: 1 }, { id: 'dt-s16', w: 'a few eggs', b: 1 }
    ]
  },

  gap: [
    { id: 'dt-g01', q: '___ book in my hand is new. (near, one)', opts: ['This', 'These', 'Those'], a: 0,
      why: 'One thing, near me → this.' },
    { id: 'dt-g02', q: '___ birds far away are crows. (far, many)', opts: ['Those', 'This', 'That'], a: 0,
      why: 'Many things, far away → those.' },
    { id: 'dt-g03', q: 'Give me ___ water, please.', opts: ['some', 'many', 'these'], a: 0,
      why: 'A bit of something we can’t count → some.' },
    { id: 'dt-g04', q: 'I have ___ friends at school. (a lot)', opts: ['many', 'much', 'this'], a: 0,
      why: 'Friends can be counted → many.' },
    { id: 'dt-g05', q: 'There is not ___ milk in the glass.', opts: ['much', 'many', 'these'], a: 0,
      why: 'Milk cannot be counted one-by-one → much.' },
    { id: 'dt-g06', q: '___ shoes here are mine. (near, two)', opts: ['These', 'This', 'That'], a: 0,
      why: 'More than one, near me → these.' },
    { id: 'dt-g07', q: 'Do you have ___ questions?', opts: ['any', 'much', 'this'], a: 0,
      why: 'In questions we often use “any”.' },
    { id: 'dt-g08', q: '___ star far away is bright. (one, far)', opts: ['That', 'These', 'Those'], a: 0,
      why: 'One thing, far away → that.' },
    { id: 'dt-g09', q: 'Only ___ children came — two or three.', opts: ['a few', 'much', 'this'], a: 0,
      why: 'A small number of countable things → a few.' },
    { id: 'dt-g10', q: 'Add ___ salt to the curry — just a bit.', opts: ['a little', 'many', 'these'], a: 0,
      why: 'A small amount of something uncountable → a little.' },
    { id: 'dt-g11', q: 'I do not have ___ money today.', opts: ['much', 'many', 'those'], a: 0,
      why: 'Money (as an amount) is uncountable → much.' },
    { id: 'dt-g12', q: '___ mangoes on that far tree are green.', opts: ['Those', 'This', 'These'], a: 0,
      why: 'Many, far away → those.' },
    { id: 'dt-g13', q: 'We need ___ eggs for the cake.', opts: ['some', 'much', 'that'], a: 0,
      why: 'A few of a countable thing → some.' },
    { id: 'dt-g14', q: 'How ___ pencils do you have?', opts: ['many', 'much', 'some'], a: 0,
      why: 'Pencils can be counted → how many.' },
    { id: 'dt-g15', q: 'How ___ rice do you want?', opts: ['much', 'many', 'a few'], a: 0,
      why: 'Rice is measured, not counted → how much.' },
    { id: 'dt-g16', q: '___ boy standing there is my cousin. (one, far)', opts: ['That', 'These', 'Those'], a: 0,
      why: 'One person, far away → that.' }
  ],

  mcq: [
    { id: 'dt-q01', q: '“This” points to something…', opts: ['near — one thing', 'far — one thing', 'far — many things'], a: 0,
      why: 'this = one near · that = one far · these = many near · those = many far.' },
    { id: 'dt-q02', q: '“Those” points to things that are…', opts: ['far — many', 'near — one', 'near — many'], a: 0,
      why: 'Those birds over there — many and far.' },
    { id: 'dt-q03', q: 'For things we can COUNT (pens, stars) we use…', opts: ['many', 'much'], a: 0,
      why: 'many pens, many stars — countable takes many.' },
    { id: 'dt-q04', q: 'For things we canNOT count (water, rice) we use…', opts: ['much', 'many'], a: 0,
      why: 'much water, much rice — uncountable takes much.' },
    { id: 'dt-q05', q: 'Which is correct?', opts: ['these books', 'this books'], a: 0,
      why: 'Books = many → these.' },
    { id: 'dt-q06', q: 'Which is correct?', opts: ['that boy', 'those boy'], a: 0,
      why: 'One boy → that.' },
    { id: 'dt-q07', q: 'Words like “some, any, many” come before…', opts: ['nouns', 'verbs', 'full stops'], a: 0,
      why: 'They tell how much of the NOUN: some rice, many friends.' },
    { id: 'dt-q08', q: 'Which is correct?', opts: ['much water', 'many water'], a: 0,
      why: 'Water can’t be counted one-by-one → much.' },
    { id: 'dt-q09', q: 'Which is correct?', opts: ['many stars', 'much stars'], a: 0,
      why: 'Stars can be counted (1, 2, 3…) → many.' },
    { id: 'dt-q10', q: 'One near thing → this.  Many near things → ?', opts: ['these', 'those', 'that'], a: 0,
      why: 'Near + many = these.' },
    { id: 'dt-q11', q: '“I have ___ homework today.”', opts: ['a little', 'a few', 'these'], a: 0,
      why: 'Homework is uncountable → a little.' },
    { id: 'dt-q12', q: 'Pick the correct sentence:', opts: ['A few friends came.', 'A little friends came.'], a: 0,
      why: 'Friends are countable → a few.' }
  ],

  build: [
    { id: 'dt-b01', words: ['This', 'mango', 'is', 'very', 'sweet.'] },
    { id: 'dt-b02', words: ['Those', 'birds', 'are', 'flying', 'home.'] },
    { id: 'dt-b03', words: ['I', 'have', 'many', 'friends', 'here.'] },
    { id: 'dt-b04', words: ['Give', 'me', 'some', 'water', 'please.'] },
    { id: 'dt-b05', words: ['These', 'books', 'are', 'new.'] },
    { id: 'dt-b06', words: ['That', 'boy', 'is', 'my', 'cousin.'] },
    { id: 'dt-b07', words: ['We', 'need', 'a', 'few', 'eggs.'] },
    { id: 'dt-b08', words: ['There', 'is', 'not', 'much', 'milk.'] }
  ]
};
