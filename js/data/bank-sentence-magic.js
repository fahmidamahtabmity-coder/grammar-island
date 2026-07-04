/* Question bank: Sentence Magic (what is a sentence?) — island 'sentence-magic'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['sentence-magic'] = {

  sort: {
    prompt: 'Real sentence, or just a jumble of words?',
    baskets: ['Real sentence ✅', 'Just a jumble ❌'],
    items: [
      { id: 'sm-s01', w: 'The sun is hot.', b: 0 }, { id: 'sm-s02', w: 'I like rice.', b: 0 },
      { id: 'sm-s03', w: 'We play cricket.', b: 0 }, { id: 'sm-s04', w: 'She has a red pen.', b: 0 },
      { id: 'sm-s05', w: 'Birds can fly.', b: 0 }, { id: 'sm-s06', w: 'My father reads.', b: 0 },
      { id: 'sm-s07', w: 'The baby sleeps.', b: 0 }, { id: 'sm-s08', w: 'Rina is my friend.', b: 0 },
      { id: 'sm-s09', w: 'hot sun the', b: 1 }, { id: 'sm-s10', w: 'rice like I the', b: 1 },
      { id: 'sm-s11', w: 'play we cricket the', b: 1 }, { id: 'sm-s12', w: 'pen red a has', b: 1 },
      { id: 'sm-s13', w: 'fly birds can sky', b: 1 }, { id: 'sm-s14', w: 'reads father my the', b: 1 },
      { id: 'sm-s15', w: 'the sleeps baby a', b: 1 }, { id: 'sm-s16', w: 'friend my Rina the', b: 1 }
    ]
  },

  mcq: [
    { id: 'sm-q01', q: 'A sentence must always…', opts: ['make complete sense', 'be very long', 'have a colour word'], a: 0,
      why: 'That is the magic test: if it makes complete sense, it is a sentence.' },
    { id: 'sm-q02', q: 'Which one is a sentence?', opts: ['The cat drinks milk.', 'milk cat the', 'drinks the cat milk a'], a: 0,
      why: 'Only “The cat drinks milk.” has the right order and makes complete sense.' },
    { id: 'sm-q03', q: 'Which one is NOT a sentence?', opts: ['We go to school.', 'school we to go', 'I like mangoes.'], a: 1,
      why: '“school we to go” is a jumble — the words are not in the right order.' },
    { id: 'sm-q04', q: 'Every sentence starts with…', opts: ['a capital letter', 'a small letter', 'a number'], a: 0,
      why: 'The first word of a sentence always begins with a capital letter.' },
    { id: 'sm-q05', q: 'Every sentence ends with…', opts: ['a stop mark like . ? !', 'a comma', 'nothing at all'], a: 0,
      why: 'A sentence needs a stop mark at the end: . or ? or !' },
    { id: 'sm-q06', q: '“the boy runs” — what is missing to make it a proper sentence?', opts: ['a capital letter and a full stop', 'more animals', 'a colour word'], a: 0,
      why: 'It should be “The boy runs.” — capital T at the start, full stop at the end.' },
    { id: 'sm-q07', q: 'Which one is written correctly?', opts: ['the cat sleeps', 'The cat sleeps.', 'the cat sleeps.'], a: 1,
      why: 'Capital letter at the start AND a full stop at the end.' },
    { id: 'sm-q08', q: '“Amina eats rice.” — does it make complete sense?', opts: ['Yes — it is a sentence', 'No — it is a jumble'], a: 0,
      why: 'We know who (Amina) and what she does (eats rice) — complete sense!' },
    { id: 'sm-q09', q: '“under the tree” — is this a sentence?', opts: ['No — it does not make complete sense', 'Yes — it is a sentence'], a: 0,
      why: 'Under the tree… what happened?! It leaves us waiting — not complete sense.' },
    { id: 'sm-q10', q: 'How many words does a sentence need?', opts: ['enough to make complete sense', 'exactly five', 'at least ten'], a: 0,
      why: 'Even “Birds fly.” is a sentence — two words with complete sense.' },
    { id: 'sm-q11', q: 'Which one is a sentence?', opts: ['My mother cooks.', 'cooks mother my', 'my the cooks'], a: 0,
      why: '“My mother cooks.” makes complete sense — the others are jumbles.' },
    { id: 'sm-q12', q: 'Pick the JUMBLE (not a sentence):', opts: ['I have a kite.', 'kite a have I', 'We fly kites.'], a: 1,
      why: '“kite a have I” has the words in the wrong order.' },
    { id: 'sm-q13', q: 'What does a sentence always do?', opts: ['says a complete idea', 'names a colour', 'rhymes like a poem'], a: 0,
      why: 'A sentence tells one complete idea from start to stop mark.' },
    { id: 'sm-q14', q: 'Which one is correct?', opts: ['we play football', 'We play football.', 'we play football.'], a: 1,
      why: 'Capital W to start, full stop to end.' },
    { id: 'sm-q15', q: '“The parrot ___.” Which ending makes it a sentence?', opts: ['talks', 'green the', 'under'], a: 0,
      why: '“The parrot talks.” makes complete sense.' },
    { id: 'sm-q16', q: 'Which one makes complete sense?', opts: ['The moon shines at night.', 'moon the at shines', 'night moon the at'], a: 0,
      why: 'Right order + complete idea = a real sentence.' },
    { id: 'sm-q17', q: 'Which one is a sentence?', opts: ['The farmer grows rice.', 'grows the farmer', 'rice farmer the grows a'], a: 0,
      why: 'Only the first is in the right order and makes complete sense.' },
    { id: 'sm-q18', q: '“in the garden” — is this a sentence?', opts: ['No — we are left waiting for more', 'Yes — it is complete'], a: 0,
      why: 'In the garden… WHAT happened? It is not complete.' },
    { id: 'sm-q19', q: 'Fix it: “rina likes kites”', opts: ['Rina likes kites.', 'rina likes kites!', 'rina Likes Kites'], a: 0,
      why: 'Capital R at the start and a full stop at the end.' },
    { id: 'sm-q20', q: 'Pick the JUMBLE:', opts: ['sky the blue is', 'The sky is blue.', 'I see the sky.'], a: 0,
      why: '“sky the blue is” — the words are out of order.' },
    { id: 'sm-q21', q: 'A sentence begins with a capital letter and ends with…', opts: ['a stop mark', 'a comma', 'another capital'], a: 0,
      why: 'Capital at the start, stop mark (. ? !) at the end.' },
    { id: 'sm-q22', q: 'Which is a complete idea?', opts: ['The bell rings.', 'the big loud', 'under the big'], a: 0,
      why: '“The bell rings.” tells us something whole.' },
    { id: 'sm-q23', q: 'How would you finish this to make a sentence?  “My little sister ___”', opts: ['laughs a lot.', 'the doll red.', 'under happy.'], a: 0,
      why: '“My little sister laughs a lot.” makes complete sense.' },
    { id: 'sm-q24', q: 'Which one is correct?', opts: ['Rain falls from the clouds.', 'rain falls from the clouds', 'falls rain clouds the from'], a: 0,
      why: 'Capital letter + right order + full stop.' }
  ],

  build: [
    { id: 'sm-b01', words: ['The', 'sun', 'is', 'hot.'] },
    { id: 'sm-b02', words: ['I', 'like', 'sweet', 'mangoes.'] },
    { id: 'sm-b03', words: ['We', 'go', 'to', 'school.'] },
    { id: 'sm-b04', words: ['My', 'mother', 'cooks', 'rice.'] },
    { id: 'sm-b05', words: ['The', 'baby', 'is', 'sleeping.'] },
    { id: 'sm-b06', words: ['Birds', 'fly', 'in', 'the', 'sky.'] },
    { id: 'sm-b07', words: ['Rina', 'has', 'a', 'new', 'pen.'] },
    { id: 'sm-b08', words: ['The', 'cat', 'drinks', 'milk.'] }
  ]
};
