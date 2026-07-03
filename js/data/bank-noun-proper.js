/* Question bank: Special Names (proper vs common nouns) — island 'noun-proper'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['noun-proper'] = {

  catch: {
    prompt: 'Tap only the SPECIAL names (proper nouns)!',
    words: [
      { id: 'np-c01', w: 'Amina', t: 1 }, { id: 'np-c02', w: 'Dhaka', t: 1 },
      { id: 'np-c03', w: 'Bangladesh', t: 1 }, { id: 'np-c04', w: 'Rina', t: 1 },
      { id: 'np-c05', w: 'Sylhet', t: 1 }, { id: 'np-c06', w: 'Padma', t: 1 },
      { id: 'np-c07', w: 'Friday', t: 1 }, { id: 'np-c08', w: 'January', t: 1 },
      { id: 'np-c09', w: 'Karim', t: 1 }, { id: 'np-c10', w: 'Chattogram', t: 1 },
      { id: 'np-c11', w: 'girl', t: 0 }, { id: 'np-c12', w: 'city', t: 0 },
      { id: 'np-c13', w: 'country', t: 0 }, { id: 'np-c14', w: 'river', t: 0 },
      { id: 'np-c15', w: 'day', t: 0 }, { id: 'np-c16', w: 'month', t: 0 },
      { id: 'np-c17', w: 'boy', t: 0 }, { id: 'np-c18', w: 'school', t: 0 },
      { id: 'np-c19', w: 'teacher', t: 0 }, { id: 'np-c20', w: 'market', t: 0 }
    ]
  },

  sort: {
    prompt: 'Special name (capital letter!) or general name?',
    baskets: ['Special name 🌟 (capital!)', 'General name 📦'],
    items: [
      { id: 'np-s01', w: 'Amina', b: 0 }, { id: 'np-s02', w: 'Dhaka', b: 0 },
      { id: 'np-s03', w: 'Bangladesh', b: 0 }, { id: 'np-s04', w: 'Monday', b: 0 },
      { id: 'np-s05', w: 'Padma', b: 0 }, { id: 'np-s06', w: 'Rahim', b: 0 },
      { id: 'np-s07', w: 'Sylhet', b: 0 }, { id: 'np-s08', w: 'December', b: 0 },
      { id: 'np-s09', w: 'girl', b: 1 }, { id: 'np-s10', w: 'city', b: 1 },
      { id: 'np-s11', w: 'country', b: 1 }, { id: 'np-s12', w: 'day', b: 1 },
      { id: 'np-s13', w: 'river', b: 1 }, { id: 'np-s14', w: 'boy', b: 1 },
      { id: 'np-s15', w: 'month', b: 1 }, { id: 'np-s16', w: 'school', b: 1 }
    ]
  },

  mcq: [
    { id: 'np-q01', q: 'Which word needs a CAPITAL letter?', opts: ['dhaka', 'city', 'river'], a: 0,
      why: 'Dhaka is the special name of one city — proper nouns always start with a capital.' },
    { id: 'np-q02', q: 'Which is written correctly?', opts: ['amina', 'Amina'], a: 1,
      why: 'Amina is a person’s name — a proper noun — so it starts with a capital A.' },
    { id: 'np-q03', q: '“i live in dhaka.”  How many capital letters are needed?', opts: ['1', '2', '3'], a: 1,
      why: 'Two: “I” (starts the sentence) and “Dhaka” (a special name).' },
    { id: 'np-q04', q: 'Which is a proper noun?', opts: ['teacher', 'Karim', 'market'], a: 1,
      why: 'Karim is the special name of ONE person.' },
    { id: 'np-q05', q: 'Which is a common noun?', opts: ['Rina', 'Sylhet', 'garden'], a: 2,
      why: '“Garden” is a general name — any garden, not one special garden.' },
    { id: 'np-q06', q: 'Pick the correct sentence.', opts: ['My friend lives in sylhet.', 'My friend lives in Sylhet.'], a: 1,
      why: 'Sylhet is the special name of a place, so it needs a capital S.' },
    { id: 'np-q07', q: 'Which pair is proper noun + common noun?', opts: ['Dhaka & city', 'boy & girl', 'Amina & Rina'], a: 0,
      why: 'Dhaka is one special city (proper); “city” is the general word (common).' },
    { id: 'np-q08', q: 'Days of the week (like Friday)…', opts: ['always start with a capital', 'never start with a capital'], a: 0,
      why: 'Day names are proper nouns — Friday, Monday, Sunday all take capitals.' },
    { id: 'np-q09', q: 'Which is written correctly?', opts: ['friday', 'Friday'], a: 1,
      why: 'Friday is the name of a day — capital F.' },
    { id: 'np-q10', q: '“rina and karim went to chattogram.”  How many words need capitals?', opts: ['1', '2', '3'], a: 2,
      why: 'Three: Rina, Karim and Chattogram are all special names.' },
    { id: 'np-q11', q: 'Which word does NOT need a capital letter?', opts: ['Padma', 'January', 'mango'], a: 2,
      why: '“Mango” is a general name for any mango — a common noun, no capital.' },
    { id: 'np-q12', q: 'The special name of ONE particular person or place is a…', opts: ['proper noun', 'common noun'], a: 0,
      why: 'That is the rule! Special name = proper noun = capital letter.' },
    { id: 'np-q13', q: 'Which sentence is correct?', opts: ['We crossed the padma river.', 'We crossed the Padma river.'], a: 1,
      why: 'Padma is the special name of one river, so it takes a capital P.' },
    { id: 'np-q14', q: 'Month names like January and June are…', opts: ['proper nouns', 'common nouns'], a: 0,
      why: 'Each month name names ONE special month — proper nouns, always capital.' },
    { id: 'np-q15', q: 'Which is correct?', opts: ['My teacher is mr. karim.', 'My teacher is Mr. Karim.'], a: 1,
      why: 'Names and their titles take capitals: Mr. Karim.' },
    { id: 'np-q16', q: 'How should the name of our country be written?', opts: ['Bangladesh', 'bangladesh'], a: 0,
      why: 'Bangladesh is a special name — capital B, always.' }
  ],

  build: [
    { id: 'np-b01', words: ['Amina', 'lives', 'in', 'Dhaka.'] },
    { id: 'np-b02', words: ['We', 'visit', 'Sylhet', 'in', 'January.'] },
    { id: 'np-b03', words: ['Karim', 'plays', 'cricket', 'on', 'Friday.'] },
    { id: 'np-b04', words: ['The', 'Padma', 'is', 'a', 'big', 'river.'] },
    { id: 'np-b05', words: ['Rina', 'goes', 'to', 'school', 'in', 'Dhaka.'] },
    { id: 'np-b06', words: ['Bangladesh', 'is', 'my', 'country.'] },
    { id: 'np-b07', words: ['Mr.', 'Karim', 'teaches', 'English.'] },
    { id: 'np-b08', words: ['My', 'friend', 'Amina', 'loves', 'mangoes.'] }
  ]
};
