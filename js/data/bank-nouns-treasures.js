/* Question bank: Noun Treasures (collective, irregular plurals, gender) — island 'nouns-treasures'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['nouns-treasures'] = {

  sort: {
    prompt: 'One — or more than one?',
    baskets: ['One 🧍', 'More than one 👥'],
    items: [
      { id: 'n2-s01', w: 'man', b: 0 }, { id: 'n2-s02', w: 'men', b: 1 },
      { id: 'n2-s03', w: 'child', b: 0 }, { id: 'n2-s04', w: 'children', b: 1 },
      { id: 'n2-s05', w: 'foot', b: 0 }, { id: 'n2-s06', w: 'feet', b: 1 },
      { id: 'n2-s07', w: 'tooth', b: 0 }, { id: 'n2-s08', w: 'teeth', b: 1 },
      { id: 'n2-s09', w: 'mouse', b: 0 }, { id: 'n2-s10', w: 'mice', b: 1 },
      { id: 'n2-s11', w: 'woman', b: 0 }, { id: 'n2-s12', w: 'women', b: 1 },
      { id: 'n2-s13', w: 'goose', b: 0 }, { id: 'n2-s14', w: 'geese', b: 1 },
      { id: 'n2-s15', w: 'box', b: 0 }, { id: 'n2-s16', w: 'boxes', b: 1 }
    ]
  },

  gap: [
    { id: 'n2-g01', q: 'One man, two ___.', opts: ['men', 'mans', 'manes'], a: 0,
      why: 'Man is special: man → men (no s!).' },
    { id: 'n2-g02', q: 'One child, many ___.', opts: ['children', 'childs', 'childes'], a: 0,
      why: 'Child is special: child → children.' },
    { id: 'n2-g03', q: 'One foot, two ___.', opts: ['feet', 'foots', 'feets'], a: 0,
      why: 'Foot is special: foot → feet.' },
    { id: 'n2-g04', q: 'One tooth, many ___.', opts: ['teeth', 'tooths', 'toothes'], a: 0,
      why: 'Tooth is special: tooth → teeth.' },
    { id: 'n2-g05', q: 'One mouse, three ___.', opts: ['mice', 'mouses', 'mousies'], a: 0,
      why: 'Mouse is special: mouse → mice.' },
    { id: 'n2-g06', q: 'One woman, two ___.', opts: ['women', 'womans', 'womens'], a: 0,
      why: 'Woman is special: woman → women.' },
    { id: 'n2-g07', q: 'A ___ of players won the cup.', opts: ['team', 'bunch', 'herd'], a: 0,
      why: 'Players together make a TEAM — a group name.' },
    { id: 'n2-g08', q: 'A ___ of students sat quietly.', opts: ['class', 'flock', 'herd'], a: 0,
      why: 'Students together make a CLASS.' },
    { id: 'n2-g09', q: 'A ___ of birds flew over us.', opts: ['flock', 'class', 'team'], a: 0,
      why: 'Birds together make a FLOCK.' },
    { id: 'n2-g10', q: 'A ___ of cows grazed in the field.', opts: ['herd', 'flock', 'class'], a: 0,
      why: 'Cows together make a HERD.' },
    { id: 'n2-g11', q: 'A ___ of flowers smells lovely.', opts: ['bunch', 'herd', 'team'], a: 0,
      why: 'Flowers together make a BUNCH.' },
    { id: 'n2-g12', q: 'The king and the ___ wore crowns.', opts: ['queen', 'prince', 'farmer'], a: 0,
      why: 'King and queen are a boy–girl pair.' },
    { id: 'n2-g13', q: 'The lion and the ___ live in the den.', opts: ['lioness', 'cow', 'hen'], a: 0,
      why: 'Lion → lioness.' },
    { id: 'n2-g14', q: 'The rooster and the ___ are in the yard.', opts: ['hen', 'cow', 'lioness'], a: 0,
      why: 'Rooster and hen are the chicken pair.' },
    { id: 'n2-g15', q: 'One sheep, two ___.', opts: ['sheep', 'sheeps', 'shoops'], a: 0,
      why: 'Sheep is extra special — it does not change at all!' },
    { id: 'n2-g16', q: 'The prince and the ___ danced.', opts: ['princess', 'king', 'farmer'], a: 0,
      why: 'Prince → princess.' }
  ],

  mcq: [
    { id: 'n2-q01', q: 'The correct plural of “child” is…', opts: ['children', 'childs'], a: 0,
      why: 'Some nouns break the +s rule: child → children.' },
    { id: 'n2-q02', q: 'Which is correct?', opts: ['two feet', 'two foots'], a: 0,
      why: 'foot → feet.' },
    { id: 'n2-q03', q: 'A group of players is called a…', opts: ['team', 'herd', 'bunch'], a: 0,
      why: 'Group names: team of players, herd of cows, bunch of flowers.' },
    { id: 'n2-q04', q: 'A group of birds is called a…', opts: ['flock', 'class', 'bundle'], a: 0,
      why: 'A flock of birds fills the sky.' },
    { id: 'n2-q05', q: 'The girl-pair of “king” is…', opts: ['queen', 'princess', 'aunt'], a: 0,
      why: 'king → queen.' },
    { id: 'n2-q06', q: 'The girl-pair of “lion” is…', opts: ['lioness', 'cow', 'hen'], a: 0,
      why: 'lion → lioness.' },
    { id: 'n2-q07', q: 'Which plural is SPECIAL (not just +s)?', opts: ['man → men', 'book → books', 'cat → cats'], a: 0,
      why: 'Books and cats just add s; man becomes MEN.' },
    { id: 'n2-q08', q: '“Honesty”, “love” and “joy” are names of…', opts: ['feelings and ideas we cannot touch', 'animals', 'places'], a: 0,
      why: 'These are abstract nouns — real, but untouchable!' },
    { id: 'n2-q09', q: 'Which one can you NOT touch?', opts: ['happiness', 'mango', 'chair'], a: 0,
      why: 'You can feel happiness, but never hold it in your hand.' },
    { id: 'n2-q10', q: 'Which is correct?', opts: ['three mice', 'three mouses'], a: 0,
      why: 'mouse → mice.' },
    { id: 'n2-q11', q: 'A group of cows is a…', opts: ['herd', 'flock', 'team'], a: 0,
      why: 'A herd of cows grazes together.' },
    { id: 'n2-q12', q: 'The boy-pair of “aunt” is…', opts: ['uncle', 'nephew', 'king'], a: 0,
      why: 'aunt → uncle.' }
  ],

  build: [
    { id: 'n2-b01', words: ['The', 'children', 'play', 'in', 'the', 'park.'] },
    { id: 'n2-b02', words: ['Two', 'mice', 'ran', 'under', 'the', 'bed.'] },
    { id: 'n2-b03', words: ['A', 'flock', 'of', 'birds', 'flew', 'south.'] },
    { id: 'n2-b04', words: ['The', 'queen', 'wore', 'a', 'golden', 'crown.'] },
    { id: 'n2-b05', words: ['My', 'feet', 'are', 'cold', 'in', 'winter.'] },
    { id: 'n2-b06', words: ['A', 'team', 'of', 'players', 'won', 'the', 'cup.'] },
    { id: 'n2-b07', words: ['The', 'women', 'sell', 'fresh', 'fish.'] },
    { id: 'n2-b08', words: ['Honesty', 'is', 'the', 'best', 'policy.'] }
  ]
};
