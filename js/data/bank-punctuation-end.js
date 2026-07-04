/* Question bank: Stop, Ask, Shout! (end punctuation . ? !) — island 'punctuation-end'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['punctuation-end'] = {

  sort: {
    prompt: 'Which stop mark does this sentence need at the end?',
    baskets: ['Full stop .', 'Question ?', 'Shout !'],
    items: [
      { id: 'pu-s01', w: 'I go to school', b: 0 }, { id: 'pu-s02', w: 'We eat rice at night', b: 0 },
      { id: 'pu-s03', w: 'My cat is black', b: 0 }, { id: 'pu-s04', w: 'Amina has two pens', b: 0 },
      { id: 'pu-s05', w: 'The sun rises in the east', b: 0 },
      { id: 'pu-s06', w: 'What is your name', b: 1 }, { id: 'pu-s07', w: 'Where do you live', b: 1 },
      { id: 'pu-s08', w: 'How old are you', b: 1 }, { id: 'pu-s09', w: 'Do you like mangoes', b: 1 },
      { id: 'pu-s10', w: 'Who is your teacher', b: 1 },
      { id: 'pu-s11', w: 'What a lovely day', b: 2 }, { id: 'pu-s12', w: 'Watch out', b: 2 },
      { id: 'pu-s13', w: 'Hurray, we won', b: 2 }, { id: 'pu-s14', w: 'How beautiful the moon is', b: 2 },
      { id: 'pu-s15', w: 'Wow, you did it', b: 2 }, { id: 'pu-s16', w: 'Help, the kite is stuck', b: 2 }
    ]
  },

  gap: [
    { id: 'pu-g01', q: 'I have a red ball__', opts: ['.', '?', '!'], a: 0,
      why: 'It calmly tells something → full stop.' },
    { id: 'pu-g02', q: 'Do you like ice-cream__', opts: ['.', '?', '!'], a: 1,
      why: 'It asks something → question mark.' },
    { id: 'pu-g03', q: 'What a big elephant__', opts: ['.', '?', '!'], a: 2,
      why: 'It shows surprise → exclamation mark.' },
    { id: 'pu-g04', q: 'My father is a farmer__', opts: ['.', '?', '!'], a: 0,
      why: 'A telling sentence → full stop.' },
    { id: 'pu-g05', q: 'Where is my pencil__', opts: ['.', '?', '!'], a: 1,
      why: '“Where…” asks a question → question mark.' },
    { id: 'pu-g06', q: 'Help me__', opts: ['.', '?', '!'], a: 2,
      why: 'A shout for help → exclamation mark.' },
    { id: 'pu-g07', q: 'We play in the park__', opts: ['.', '?', '!'], a: 0,
      why: 'It tells calmly → full stop.' },
    { id: 'pu-g08', q: 'How are you__', opts: ['.', '?', '!'], a: 1,
      why: 'It asks → question mark.' },
    { id: 'pu-g09', q: 'Hurray, we won the game__', opts: ['.', '?', '!'], a: 2,
      why: 'Cheering with joy → exclamation mark.' },
    { id: 'pu-g10', q: 'The moon shines at night__', opts: ['.', '?', '!'], a: 0,
      why: 'A calm telling sentence → full stop.' },
    { id: 'pu-g11', q: 'Can you swim__', opts: ['.', '?', '!'], a: 1,
      why: '“Can you…” is a question → question mark.' },
    { id: 'pu-g12', q: 'What a sweet mango__', opts: ['.', '?', '!'], a: 2,
      why: 'Surprise and delight → exclamation mark.' },
    { id: 'pu-g13', q: 'Rina reads every day__', opts: ['.', '?', '!'], a: 0,
      why: 'It just tells → full stop.' },
    { id: 'pu-g14', q: 'Why are you late__', opts: ['.', '?', '!'], a: 1,
      why: '“Why…” asks → question mark.' },
    { id: 'pu-g15', q: 'Watch out__', opts: ['.', '?', '!'], a: 2,
      why: 'A sudden warning shout → exclamation mark.' },
    { id: 'pu-g16', q: 'I brush my teeth every morning__', opts: ['.', '?', '!'], a: 0,
      why: 'A calm telling sentence → full stop.' }
  ],

  mcq: [
    { id: 'pu-q01', q: 'A telling sentence ends with…', opts: ['a full stop (.)', 'a question mark (?)', 'an exclamation mark (!)'], a: 0,
      why: 'Telling calmly → full stop.' },
    { id: 'pu-q02', q: 'A question ends with…', opts: ['?', '.', ','], a: 0,
      why: 'Asking → question mark.' },
    { id: 'pu-q03', q: 'A shout or surprise ends with…', opts: ['!', '.', '?'], a: 0,
      why: 'Shouting or surprise → exclamation mark.' },
    { id: 'pu-q04', q: 'Which is correct?', opts: ['Do you like rice.', 'Do you like rice?'], a: 1,
      why: 'It asks a question, so it needs a question mark.' },
    { id: 'pu-q05', q: 'Which is correct?', opts: ['What a hot day!', 'What a hot day,'], a: 0,
      why: 'Surprise about the heat → exclamation mark.' },
    { id: 'pu-q06', q: 'Which sentence ASKS something?', opts: ['Where is Karim?', 'Karim is here.', 'Karim, come here!'], a: 0,
      why: '“Where is Karim?” wants an answer — that is a question.' },
    { id: 'pu-q07', q: '“How old are you__” Which mark?', opts: ['?', '!', '.'], a: 0,
      why: 'It is a question → question mark.' },
    { id: 'pu-q08', q: 'Which mark is called a full stop?', opts: ['.', '?', '!'], a: 0,
      why: 'The little dot at the end of a telling sentence.' },
    { id: 'pu-q09', q: 'Which one needs a question mark?', opts: ['Who took my book', 'I took the book', 'The book is mine'], a: 0,
      why: '“Who took my book?” asks — question mark.' },
    { id: 'pu-q10', q: 'Which is correct?', opts: ['Watch out!', 'Watch out.'], a: 0,
      why: 'A warning shout → exclamation mark.' },
    { id: 'pu-q11', q: '“We won the cup!” — is this telling, asking, or shouting with joy?', opts: ['shouting with joy', 'asking', 'calm telling'], a: 0,
      why: 'The ! shows excitement — we are cheering!' },
    { id: 'pu-q12', q: 'Which is correct?', opts: ['what is this?', 'What is this?'], a: 1,
      why: 'Questions are sentences too — they start with a capital letter.' }
  ],

  build: [
    { id: 'pu-b01', words: ['Do', 'you', 'like', 'mangoes?'] },
    { id: 'pu-b02', words: ['I', 'go', 'to', 'school', 'every', 'day.'] },
    { id: 'pu-b03', words: ['What', 'a', 'beautiful', 'bird!'] },
    { id: 'pu-b04', words: ['Where', 'is', 'my', 'red', 'pen?'] },
    { id: 'pu-b05', words: ['The', 'stars', 'shine', 'at', 'night.'] },
    { id: 'pu-b06', words: ['Watch', 'out', 'for', 'the', 'dog!'] },
    { id: 'pu-b07', words: ['Can', 'you', 'ride', 'a', 'bicycle?'] },
    { id: 'pu-b08', words: ['My', 'mother', 'makes', 'tasty', 'food.'] }
  ]
};
