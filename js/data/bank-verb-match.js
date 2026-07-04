/* Question bank: Match the Verb (subject–verb agreement) — island 'verb-match'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['verb-match'] = {

  sort: {
    prompt: 'Which subject does this verb form go with?',
    baskets: ['ONE — he / she / it', 'MANY — we / they (or I / you)'],
    items: [
      { id: 'sv-s01', w: 'plays', b: 0 }, { id: 'sv-s02', w: 'runs', b: 0 },
      { id: 'sv-s03', w: 'eats', b: 0 }, { id: 'sv-s04', w: 'sings', b: 0 },
      { id: 'sv-s05', w: 'goes', b: 0 }, { id: 'sv-s06', w: 'is', b: 0 },
      { id: 'sv-s07', w: 'has', b: 0 }, { id: 'sv-s08', w: 'was', b: 0 },
      { id: 'sv-s09', w: 'play', b: 1 }, { id: 'sv-s10', w: 'run', b: 1 },
      { id: 'sv-s11', w: 'eat', b: 1 }, { id: 'sv-s12', w: 'sing', b: 1 },
      { id: 'sv-s13', w: 'go', b: 1 }, { id: 'sv-s14', w: 'are', b: 1 },
      { id: 'sv-s15', w: 'have', b: 1 }, { id: 'sv-s16', w: 'were', b: 1 }
    ]
  },

  gap: [
    { id: 'sv-g01', q: 'She ___ to school every day.', opts: ['goes', 'go', 'going'], a: 0,
      why: 'One person (she) → verb wears its s: goes.' },
    { id: 'sv-g02', q: 'They ___ cricket in the field.', opts: ['play', 'plays', 'playing'], a: 0,
      why: 'Many people (they) → no s: play.' },
    { id: 'sv-g03', q: 'I ___ eleven years old.', opts: ['am', 'is', 'are'], a: 0,
      why: '“I” always goes with “am”.' },
    { id: 'sv-g04', q: 'We ___ best friends.', opts: ['are', 'is', 'am'], a: 0,
      why: 'Many (we) → are.' },
    { id: 'sv-g05', q: 'The cat ___ milk.', opts: ['drinks', 'drink', 'drinking'], a: 0,
      why: 'One cat → drinks.' },
    { id: 'sv-g06', q: 'My brothers ___ TV at night.', opts: ['watch', 'watches', 'watching'], a: 0,
      why: 'Brothers = many → watch (no -es).' },
    { id: 'sv-g07', q: 'Rina ___ a red kite.', opts: ['has', 'have', 'having'], a: 0,
      why: 'One person → has.' },
    { id: 'sv-g08', q: 'You ___ my best friend.', opts: ['are', 'is', 'am'], a: 0,
      why: '“You” always goes with “are”.' },
    { id: 'sv-g09', q: 'The birds ___ in the morning.', opts: ['sing', 'sings', 'singing'], a: 0,
      why: 'Birds = many → sing.' },
    { id: 'sv-g10', q: 'My father ___ a doctor.', opts: ['is', 'are', 'am'], a: 0,
      why: 'One person → is.' },
    { id: 'sv-g11', q: 'The boys ___ football.', opts: ['like', 'likes', 'liking'], a: 0,
      why: 'Boys = many → like.' },
    { id: 'sv-g12', q: 'Everyone ___ happy today.', opts: ['is', 'are', 'am'], a: 0,
      why: 'Surprise! “Everyone” acts like ONE → is.' },
    { id: 'sv-g13', q: 'The baby ___ at night.', opts: ['sleeps', 'sleep', 'sleeping'], a: 0,
      why: 'One baby → sleeps.' },
    { id: 'sv-g14', q: 'I ___ two pencils.', opts: ['have', 'has', 'having'], a: 0,
      why: '“I” goes with have (not has).' },
    { id: 'sv-g15', q: 'My friends ___ very kind.', opts: ['are', 'is', 'am'], a: 0,
      why: 'Friends = many → are.' },
    { id: 'sv-g16', q: 'The dog ___ loudly.', opts: ['barks', 'bark', 'barking'], a: 0,
      why: 'One dog → barks.' }
  ],

  mcq: [
    { id: 'sv-q01', q: 'Which is correct?', opts: ['She goes to school.', 'She go to school.'], a: 0,
      why: 'One person → the verb wears its s: goes.' },
    { id: 'sv-q02', q: 'Which is correct?', opts: ['They play cricket.', 'They plays cricket.'], a: 0,
      why: 'Many → no s: play.' },
    { id: 'sv-q03', q: '“I ___” — pick the right partner:', opts: ['am', 'is', 'are'], a: 0,
      why: 'I am — always!' },
    { id: 'sv-q04', q: '“We ___” — pick the right partner:', opts: ['are', 'is', 'am'], a: 0,
      why: 'we are, they are, you are.' },
    { id: 'sv-q05', q: 'When the subject is ONE person or thing, the verb gets…', opts: ['an s — she plays', 'no s — she play', 'a question mark'], a: 0,
      why: 'The golden match: one → +s, many → no s.' },
    { id: 'sv-q06', q: 'Which is correct?', opts: ['The cat drinks milk.', 'The cat drink milk.'], a: 0,
      why: 'One cat → drinks.' },
    { id: 'sv-q07', q: 'Which is correct?', opts: ['My friends are kind.', 'My friends is kind.'], a: 0,
      why: 'Friends = many → are.' },
    { id: 'sv-q08', q: '“He ___ a bicycle.”', opts: ['has', 'have'], a: 0,
      why: 'One person → has.' },
    { id: 'sv-q09', q: '“They ___ a big house.”', opts: ['have', 'has'], a: 0,
      why: 'Many → have.' },
    { id: 'sv-q10', q: 'Which sentence is WRONG?', opts: ['She play the guitar.', 'She plays the guitar.', 'They play the guitar.'], a: 0,
      why: '“She play” breaks the match — one person needs plays.' },
    { id: 'sv-q11', q: '“Everyone” takes…', opts: ['is — it acts like ONE', 'are — it acts like many'], a: 0,
      why: 'Everyone, someone, nobody — they all act like ONE.' },
    { id: 'sv-q12', q: 'Which is correct?', opts: ['You are late.', 'You is late.'], a: 0,
      why: '“You” always takes are.' }
  ],

  build: [
    { id: 'sv-b01', words: ['She', 'goes', 'to', 'school', 'daily.'] },
    { id: 'sv-b02', words: ['They', 'play', 'in', 'the', 'field.'] },
    { id: 'sv-b03', words: ['I', 'am', 'a', 'good', 'student.'] },
    { id: 'sv-b04', words: ['We', 'are', 'best', 'friends.'] },
    { id: 'sv-b05', words: ['The', 'cat', 'drinks', 'milk.'] },
    { id: 'sv-b06', words: ['My', 'father', 'is', 'a', 'farmer.'] },
    { id: 'sv-b07', words: ['The', 'birds', 'sing', 'sweetly.'] },
    { id: 'sv-b08', words: ['Rina', 'has', 'a', 'red', 'kite.'] }
  ]
};
