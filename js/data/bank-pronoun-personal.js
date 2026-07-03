/* Question bank: Replacing Words (personal pronouns) — island 'pronoun-personal'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['pronoun-personal'] = {

  catch: {
    prompt: 'Tap only the PRONOUNS (replacing words)!',
    words: [
      { id: 'pp-c01', w: 'he', t: 1 }, { id: 'pp-c02', w: 'she', t: 1 },
      { id: 'pp-c03', w: 'it', t: 1 }, { id: 'pp-c04', w: 'they', t: 1 },
      { id: 'pp-c05', w: 'we', t: 1 }, { id: 'pp-c06', w: 'you', t: 1 },
      { id: 'pp-c07', w: 'I', t: 1 }, { id: 'pp-c08', w: 'him', t: 1 },
      { id: 'pp-c09', w: 'her', t: 1 }, { id: 'pp-c10', w: 'us', t: 1 },
      { id: 'pp-c11', w: 'them', t: 1 }, { id: 'pp-c12', w: 'me', t: 1 },
      { id: 'pp-c13', w: 'cat', t: 0 }, { id: 'pp-c14', w: 'runs', t: 0 },
      { id: 'pp-c15', w: 'Amina', t: 0 }, { id: 'pp-c16', w: 'book', t: 0 },
      { id: 'pp-c17', w: 'happy', t: 0 }, { id: 'pp-c18', w: 'school', t: 0 },
      { id: 'pp-c19', w: 'eats', t: 0 }, { id: 'pp-c20', w: 'big', t: 0 },
      { id: 'pp-c21', w: 'Rina', t: 0 }, { id: 'pp-c22', w: 'ball', t: 0 },
      { id: 'pp-c23', w: 'teacher', t: 0 }, { id: 'pp-c24', w: 'red', t: 0 }
    ]
  },

  sort: {
    prompt: 'Which pronoun would replace it? Put each one in the right basket.',
    baskets: ['He 👦', 'She 👧', 'It 🥭', 'They 👥'],
    items: [
      { id: 'pp-s01', w: 'Karim', b: 0 }, { id: 'pp-s02', w: 'my father', b: 0 },
      { id: 'pp-s03', w: 'the boy', b: 0 },
      { id: 'pp-s04', w: 'Amina', b: 1 }, { id: 'pp-s05', w: 'the girl', b: 1 },
      { id: 'pp-s06', w: 'my mother', b: 1 },
      { id: 'pp-s07', w: 'the mango', b: 2 }, { id: 'pp-s08', w: 'the book', b: 2 },
      { id: 'pp-s09', w: 'the sun', b: 2 },
      { id: 'pp-s10', w: 'the boys', b: 3 }, { id: 'pp-s11', w: 'Rina and Amina', b: 3 },
      { id: 'pp-s12', w: 'the cats', b: 3 }
    ]
  },

  mcq: [
    { id: 'pp-q01', q: '___ is my brother.', opts: ['He', 'She', 'It'], a: 0,
      why: 'A brother is a boy, so we replace his name with “He”.' },
    { id: 'pp-q02', q: '___ is my sister.', opts: ['He', 'She', 'They'], a: 1,
      why: 'A sister is a girl — “She”.' },
    { id: 'pp-q03', q: 'Rina and I are friends. ___ play together.', opts: ['We', 'He', 'It'], a: 0,
      why: '“Rina and I” means both of us — “We”.' },
    { id: 'pp-q04', q: 'The mango is sweet. ___ is yellow.', opts: ['He', 'It', 'They'], a: 1,
      why: 'A mango is a thing, so we call it “It”.' },
    { id: 'pp-q05', q: 'The boys are outside. ___ are playing.', opts: ['He', 'They', 'It'], a: 1,
      why: '“The boys” is more than one person — “They”.' },
    { id: 'pp-q06', q: 'Which word is a pronoun?', opts: ['she', 'book', 'jump'], a: 0,
      why: '“She” stands in place of a girl’s name — that makes it a pronoun.' },
    { id: 'pp-q07', q: 'Which word is NOT a pronoun?', opts: ['they', 'we', 'mango'], a: 2,
      why: '“Mango” is a noun (a naming word), not a replacing word.' },
    { id: 'pp-q08', q: 'Amina lost her pen. ___ is sad.', opts: ['She', 'He', 'It'], a: 0,
      why: 'Amina is a girl, so “She” replaces her name.' },
    { id: 'pp-q09', q: 'This is my cat. I love ___.', opts: ['it', 'he', 'they'], a: 0,
      why: 'We usually call an animal “it” (unless we know it as he or she).' },
    { id: 'pp-q10', q: 'Where is Karim? I cannot see ___.', opts: ['him', 'he', 'she'], a: 0,
      why: 'After words like “see”, “he” changes to “him”: I see him.' },
    { id: 'pp-q11', q: 'My parents are kind. I love ___.', opts: ['them', 'they', 'it'], a: 0,
      why: 'After “love”, “they” changes to “them”: I love them.' },
    { id: 'pp-q12', q: '“You and I” together means…', opts: ['we', 'they', 'it'], a: 0,
      why: 'You + I = we!' },
    { id: 'pp-q13', q: 'A pronoun takes the place of a…', opts: ['noun', 'colour', 'number'], a: 0,
      why: 'That is the rule — pronouns replace nouns so we don’t repeat names.' },
    { id: 'pp-q14', q: 'The book is new. ___ has many pictures.', opts: ['It', 'She', 'He'], a: 0,
      why: 'A book is a thing — “It”.' },
    { id: 'pp-q15', q: 'Give the ball to Rina. Give it to ___.', opts: ['her', 'she', 'he'], a: 0,
      why: 'After “to”, “she” changes to “her”: give it to her.' },
    { id: 'pp-q16', q: 'My brother and I are hungry. ___ want rice.', opts: ['We', 'He', 'They'], a: 0,
      why: '“My brother and I” includes me — so it becomes “We”.' }
  ],

  build: [
    { id: 'pp-b01', words: ['She', 'reads', 'a', 'book.'] },
    { id: 'pp-b02', words: ['They', 'play', 'in', 'the', 'park.'] },
    { id: 'pp-b03', words: ['We', 'love', 'our', 'school.'] },
    { id: 'pp-b04', words: ['It', 'is', 'a', 'sunny', 'day.'] },
    { id: 'pp-b05', words: ['He', 'eats', 'rice', 'every', 'day.'] },
    { id: 'pp-b06', words: ['I', 'have', 'a', 'red', 'ball.'] },
    { id: 'pp-b07', words: ['You', 'are', 'my', 'best', 'friend.'] },
    { id: 'pp-b08', words: ['We', 'go', 'home', 'together.'] }
  ]
};
