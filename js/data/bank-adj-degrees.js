/* Question bank: Big, Bigger, Biggest! (degrees of comparison) — island 'adj-degrees'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['adj-degrees'] = {

  sort: {
    prompt: 'Just one, comparing two, or the top of all?',
    baskets: ['Just one (tall)', 'Comparing two (-er)', 'Top of all (-est)'],
    items: [
      { id: 'ad-s01', w: 'small', b: 0 }, { id: 'ad-s02', w: 'tall', b: 0 },
      { id: 'ad-s03', w: 'cold', b: 0 }, { id: 'ad-s04', w: 'fast', b: 0 },
      { id: 'ad-s05', w: 'old', b: 0 },
      { id: 'ad-s06', w: 'bigger', b: 1 }, { id: 'ad-s07', w: 'faster', b: 1 },
      { id: 'ad-s08', w: 'taller', b: 1 }, { id: 'ad-s09', w: 'sweeter', b: 1 },
      { id: 'ad-s10', w: 'longer', b: 1 },
      { id: 'ad-s11', w: 'biggest', b: 2 }, { id: 'ad-s12', w: 'smallest', b: 2 },
      { id: 'ad-s13', w: 'tallest', b: 2 }, { id: 'ad-s14', w: 'coldest', b: 2 },
      { id: 'ad-s15', w: 'highest', b: 2 }, { id: 'ad-s16', w: 'sweetest', b: 2 }
    ]
  },

  gap: [
    { id: 'ad-g01', q: 'My bag is ___ than yours.', opts: ['big', 'bigger', 'biggest'], a: 1,
      why: 'Comparing TWO bags → -er: bigger.' },
    { id: 'ad-g02', q: 'Mount Everest is the ___ mountain of all.', opts: ['high', 'higher', 'highest'], a: 2,
      why: 'Top of ALL mountains → -est: highest.' },
    { id: 'ad-g03', q: 'This mango is ___ than that one.', opts: ['sweet', 'sweeter', 'sweetest'], a: 1,
      why: 'Two mangoes compared → sweeter.' },
    { id: 'ad-g04', q: 'The cheetah is the ___ runner of all animals.', opts: ['fast', 'faster', 'fastest'], a: 2,
      why: 'Top of ALL animals → fastest.' },
    { id: 'ad-g05', q: 'My father is ___ than my uncle.', opts: ['tall', 'taller', 'tallest'], a: 1,
      why: 'Two people compared → taller.' },
    { id: 'ad-g06', q: 'Winter days are ___ than summer days.', opts: ['cold', 'colder', 'coldest'], a: 1,
      why: 'Two seasons compared → colder.' },
    { id: 'ad-g07', q: 'This is the ___ story in the whole book.', opts: ['long', 'longer', 'longest'], a: 2,
      why: 'Top of ALL the stories → longest.' },
    { id: 'ad-g08', q: 'An elephant is ___ than a cow.', opts: ['strong', 'stronger', 'strongest'], a: 1,
      why: 'Two animals compared → stronger.' },
    { id: 'ad-g09', q: 'Rina’s kite flies ___ than mine.', opts: ['high', 'higher', 'highest'], a: 1,
      why: 'Two kites compared → higher.' },
    { id: 'ad-g10', q: 'Today is the ___ day of the year.', opts: ['hot', 'hotter', 'hottest'], a: 2,
      why: 'Top of ALL 365 days → hottest.' },
    { id: 'ad-g11', q: 'My shoes are ___ than my sandals.', opts: ['new', 'newer', 'newest'], a: 1,
      why: 'Two things compared → newer.' },
    { id: 'ad-g12', q: 'The Padma is one of the ___ rivers in Bangladesh.', opts: ['big', 'bigger', 'biggest'], a: 2,
      why: 'Top of all the rivers → biggest.' },
    { id: 'ad-g13', q: 'A feather is ___ than a stone.', opts: ['light', 'lighter', 'lightest'], a: 1,
      why: 'Two things compared → lighter.' },
    { id: 'ad-g14', q: 'Grandfather is the ___ person in our family.', opts: ['old', 'older', 'oldest'], a: 2,
      why: 'Top of the WHOLE family → oldest.' },
    { id: 'ad-g15', q: 'Your drawing is ___ than mine.', opts: ['nice', 'nicer', 'nicest'], a: 1,
      why: 'Two drawings compared → nicer.' },
    { id: 'ad-g16', q: 'The ant is the ___ of the three animals.', opts: ['small', 'smaller', 'smallest'], a: 2,
      why: 'Top (of three) → smallest.' }
  ],

  mcq: [
    { id: 'ad-q01', q: 'To compare TWO things, we add…', opts: ['-er', '-est', '-ing'], a: 0,
      why: 'bigger, taller, sweeter — comparing two takes -er.' },
    { id: 'ad-q02', q: 'To say something is the TOP of ALL, we add…', opts: ['-est', '-er', '-ly'], a: 0,
      why: 'biggest, tallest, sweetest — the champion form takes -est.' },
    { id: 'ad-q03', q: 'tall → taller → ?', opts: ['tallest', 'tallness', 'more tall'], a: 0,
      why: 'The three steps: tall, taller, tallest.' },
    { id: 'ad-q04', q: 'Which word compares TWO things?', opts: ['sweeter', 'sweet', 'sweetest'], a: 0,
      why: 'The -er form compares two.' },
    { id: 'ad-q05', q: 'Which is the -est form of “big”?', opts: ['biggest', 'bigest', 'most big'], a: 0,
      why: 'big → bigger → biggest (the g doubles!).' },
    { id: 'ad-q06', q: '“Rina is older ___ Karim.”', opts: ['than', 'then', 'that'], a: 0,
      why: 'Comparisons use “than”: older THAN, bigger THAN.' },
    { id: 'ad-q07', q: 'Which is correct?', opts: ['the tallest boy in the class', 'the taller boy of all the class'], a: 0,
      why: 'Top of the whole class → tallest.' },
    { id: 'ad-q08', q: 'small → ___ → smallest', opts: ['smaller', 'smallish', 'smally'], a: 0,
      why: 'The middle step is smaller.' },
    { id: 'ad-q09', q: 'Which sentence compares TWO things?', opts: ['My bag is heavier than yours.', 'My bag is heavy.', 'This is the heaviest bag.'], a: 0,
      why: '“heavier than yours” — two bags compared.' },
    { id: 'ad-q10', q: 'Which sentence tells the TOP of all?', opts: ['Karim is the fastest runner.', 'Karim is fast.', 'Karim is faster than Rahim.'], a: 0,
      why: '“the fastest” means nobody beats him.' },
    { id: 'ad-q11', q: 'cold, colder, …?', opts: ['coldest', 'colder', 'coldly'], a: 0,
      why: 'The third step is coldest.' },
    { id: 'ad-q12', q: 'Pick the correct sentence:', opts: ['This mango is sweeter than that one.', 'This mango is sweetest than that one.'], a: 0,
      why: 'Comparing two → sweeter (never “sweetest than”).' }
  ],

  build: [
    { id: 'ad-b01', words: ['My', 'bag', 'is', 'bigger', 'than', 'yours.'] },
    { id: 'ad-b02', words: ['Karim', 'is', 'the', 'tallest', 'boy.'] },
    { id: 'ad-b03', words: ['This', 'mango', 'is', 'sweeter', 'than', 'that', 'one.'] },
    { id: 'ad-b04', words: ['Everest', 'is', 'the', 'highest', 'mountain.'] },
    { id: 'ad-b05', words: ['A', 'train', 'is', 'faster', 'than', 'a', 'bus.'] },
    { id: 'ad-b06', words: ['Winter', 'is', 'the', 'coldest', 'season.'] },
    { id: 'ad-b07', words: ['Your', 'kite', 'flies', 'higher', 'than', 'mine.'] },
    { id: 'ad-b08', words: ['Grandfather', 'is', 'the', 'oldest', 'in', 'our', 'family.'] }
  ]
};
