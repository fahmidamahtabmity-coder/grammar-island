/* Question bank: Where-Words (prepositions) — island 'prepositions'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['prepositions'] = {

  sort: {
    prompt: 'Does this phrase tell a PLACE or a TIME?',
    baskets: ['Place 📍', 'Time ⏰'],
    items: [
      { id: 'pr-s01', w: 'under the tree', b: 0 }, { id: 'pr-s02', w: 'on the table', b: 0 },
      { id: 'pr-s03', w: 'behind the door', b: 0 }, { id: 'pr-s04', w: 'in the room', b: 0 },
      { id: 'pr-s05', w: 'near the school', b: 0 }, { id: 'pr-s06', w: 'between the chairs', b: 0 },
      { id: 'pr-s07', w: 'inside the bag', b: 0 }, { id: 'pr-s08', w: 'above the clouds', b: 0 },
      { id: 'pr-s09', w: 'at 5 o’clock', b: 1 }, { id: 'pr-s10', w: 'on Friday', b: 1 },
      { id: 'pr-s11', w: 'in January', b: 1 }, { id: 'pr-s12', w: 'at night', b: 1 },
      { id: 'pr-s13', w: 'in the morning', b: 1 }, { id: 'pr-s14', w: 'on my birthday', b: 1 },
      { id: 'pr-s15', w: 'in summer', b: 1 }, { id: 'pr-s16', w: 'at noon', b: 1 }
    ]
  },

  gap: [
    { id: 'pr-g01', q: 'The cat is ___ the table. (below it)', opts: ['under', 'on', 'at'], a: 0,
      why: 'Below something → under.' },
    { id: 'pr-g02', q: 'The book is ___ the shelf.', opts: ['on', 'in', 'under'], a: 0,
      why: 'On top of a surface → on.' },
    { id: 'pr-g03', q: 'The fish swims ___ the pond.', opts: ['in', 'on', 'at'], a: 0,
      why: 'Inside the water → in.' },
    { id: 'pr-g04', q: 'We go to school ___ the morning.', opts: ['in', 'on', 'at'], a: 0,
      why: 'Parts of the day take “in”: in the morning, in the evening.' },
    { id: 'pr-g05', q: 'School starts ___ 9 o’clock.', opts: ['at', 'in', 'on'], a: 0,
      why: 'Clock times take “at”: at 9 o’clock, at noon.' },
    { id: 'pr-g06', q: 'My birthday is ___ June.', opts: ['in', 'at', 'under'], a: 0,
      why: 'Months take “in”: in June, in January.' },
    { id: 'pr-g07', q: 'The picture hangs ___ the wall.', opts: ['on', 'in', 'under'], a: 0,
      why: 'Touching the wall’s surface → on.' },
    { id: 'pr-g08', q: 'The dog sleeps ___ the bed. (below)', opts: ['under', 'on', 'in'], a: 0,
      why: 'Below the bed → under.' },
    { id: 'pr-g09', q: 'We play cricket ___ Friday.', opts: ['on', 'in', 'at'], a: 0,
      why: 'Days take “on”: on Friday, on Monday.' },
    { id: 'pr-g10', q: 'The bird sits ___ the branch.', opts: ['on', 'in', 'at'], a: 0,
      why: 'On top of the branch → on.' },
    { id: 'pr-g11', q: 'Rina hides ___ the door.', opts: ['behind', 'on', 'in'], a: 0,
      why: 'At the back of the door → behind.' },
    { id: 'pr-g12', q: 'The mango fell ___ the tree.', opts: ['from', 'at', 'on'], a: 0,
      why: 'It started at the tree and came down → from.' },
    { id: 'pr-g13', q: 'Put the rice ___ the bowl.', opts: ['in', 'on', 'under'], a: 0,
      why: 'Inside the bowl → in.' },
    { id: 'pr-g14', q: 'We sleep ___ night.', opts: ['at', 'on', 'in'], a: 0,
      why: '“At night” is a special pair — learn it as friends!' },
    { id: 'pr-g15', q: 'The school is ___ my house. (close by)', opts: ['near', 'in', 'on'], a: 0,
      why: 'Close to something → near.' },
    { id: 'pr-g16', q: 'The ball rolled ___ the two chairs.', opts: ['between', 'on', 'at'], a: 0,
      why: 'In the middle of TWO things → between.' }
  ],

  mcq: [
    { id: 'pr-q01', q: 'A preposition tells us…', opts: ['where or when something is', 'colours', 'actions'], a: 0,
      why: 'in, on, under, at — little words of place and time.' },
    { id: 'pr-q02', q: 'Which one is a preposition?', opts: ['under', 'run', 'happy'], a: 0,
      why: '“Under” tells where something is.' },
    { id: 'pr-q03', q: '“The cat is ON the mat.”  Where is the cat?', opts: ['on top of the mat', 'below the mat', 'far from the mat'], a: 0,
      why: '“On” means on top of.' },
    { id: 'pr-q04', q: 'Pick the preposition: “The pen is in the box.”', opts: ['in', 'pen', 'box'], a: 0,
      why: '“In” tells where the pen is.' },
    { id: 'pr-q05', q: 'Pick the preposition: “We play at the park.”', opts: ['at', 'play', 'park'], a: 0,
      why: '“At” points to the place.' },
    { id: 'pr-q06', q: 'Which is correct?', opts: ['in the morning', 'on the morning', 'at the morning'], a: 0,
      why: 'Parts of the day take “in”.' },
    { id: 'pr-q07', q: 'Which is correct?', opts: ['on Friday', 'in Friday', 'at Friday'], a: 0,
      why: 'Days take “on”.' },
    { id: 'pr-q08', q: 'Which is correct?', opts: ['at 8 o’clock', 'on 8 o’clock', 'in 8 o’clock'], a: 0,
      why: 'Clock times take “at”.' },
    { id: 'pr-q09', q: '“The bird flew ___ the clouds.” (higher than them)', opts: ['above', 'under', 'at'], a: 0,
      why: 'Higher than something → above.' },
    { id: 'pr-q10', q: 'Which pair are BOTH prepositions?', opts: ['in & on', 'run & jump', 'red & blue'], a: 0,
      why: '“In” and “on” are place words; the others are actions and colours.' },
    { id: 'pr-q11', q: '“Under” means…', opts: ['below something', 'on top of something', 'next year'], a: 0,
      why: 'Under the table = below the table.' },
    { id: 'pr-q12', q: 'Pick the preposition: “The cow stands near the river.”', opts: ['near', 'cow', 'river'], a: 0,
      why: '“Near” tells where — close to the river.' }
  ],

  build: [
    { id: 'pr-b01', words: ['The', 'cat', 'sleeps', 'under', 'the', 'table.'] },
    { id: 'pr-b02', words: ['The', 'book', 'is', 'on', 'the', 'shelf.'] },
    { id: 'pr-b03', words: ['Fish', 'swim', 'in', 'the', 'pond.'] },
    { id: 'pr-b04', words: ['We', 'go', 'to', 'school', 'in', 'the', 'morning.'] },
    { id: 'pr-b05', words: ['The', 'bird', 'sits', 'on', 'the', 'branch.'] },
    { id: 'pr-b06', words: ['Rina', 'hides', 'behind', 'the', 'door.'] },
    { id: 'pr-b07', words: ['My', 'school', 'is', 'near', 'my', 'house.'] },
    { id: 'pr-b08', words: ['The', 'ball', 'is', 'between', 'the', 'chairs.'] }
  ]
};
