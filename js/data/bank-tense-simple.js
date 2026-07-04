/* Question bank: Now, Before, Later (simple present/past/future) — island 'tense-simple'. */

window.GI = window.GI || {};
GI.BANKS = GI.BANKS || {};

GI.BANKS['tense-simple'] = {

  sort: {
    prompt: 'Before, now — or later?',
    baskets: ['Before ⏪ (past)', 'Now ▶️ (present)', 'Later ⏩ (future)'],
    items: [
      { id: 'ts-s01', w: 'played', b: 0 }, { id: 'ts-s02', w: 'ate', b: 0 },
      { id: 'ts-s03', w: 'ran', b: 0 }, { id: 'ts-s04', w: 'went', b: 0 },
      { id: 'ts-s05', w: 'saw', b: 0 }, { id: 'ts-s06', w: 'cooked', b: 0 },
      { id: 'ts-s07', w: 'play', b: 1 }, { id: 'ts-s08', w: 'eats', b: 1 },
      { id: 'ts-s09', w: 'runs', b: 1 }, { id: 'ts-s10', w: 'goes', b: 1 },
      { id: 'ts-s11', w: 'will play', b: 2 }, { id: 'ts-s12', w: 'will eat', b: 2 },
      { id: 'ts-s13', w: 'will go', b: 2 }, { id: 'ts-s14', w: 'will see', b: 2 },
      { id: 'ts-s15', w: 'will cook', b: 2 }, { id: 'ts-s16', w: 'will run', b: 2 }
    ]
  },

  gap: [
    { id: 'ts-g01', q: 'Yesterday we ___ football.', opts: ['played', 'play', 'will play'], a: 0,
      why: '“Yesterday” = before → past form: played.' },
    { id: 'ts-g02', q: 'Tomorrow we ___ to Dhaka.', opts: ['will go', 'went', 'go'], a: 0,
      why: '“Tomorrow” = later → will go.' },
    { id: 'ts-g03', q: 'Every day Rina ___ to school.', opts: ['goes', 'went', 'will go'], a: 0,
      why: '“Every day” = a habit → present: goes.' },
    { id: 'ts-g04', q: 'Last night I ___ rice and fish.', opts: ['ate', 'eat', 'will eat'], a: 0,
      why: '“Last night” = before → ate.' },
    { id: 'ts-g05', q: 'Next week Father ___ home.', opts: ['will come', 'came', 'comes'], a: 0,
      why: '“Next week” = later → will come.' },
    { id: 'ts-g06', q: 'The baby ___ every afternoon.', opts: ['sleeps', 'slept', 'will sleep'], a: 0,
      why: 'A daily habit → present: sleeps.' },
    { id: 'ts-g07', q: 'Yesterday it ___ heavily.', opts: ['rained', 'rains', 'will rain'], a: 0,
      why: '“Yesterday” → past: rained.' },
    { id: 'ts-g08', q: 'Tomorrow I ___ my grandmother.', opts: ['will visit', 'visited', 'visit'], a: 0,
      why: '“Tomorrow” → will visit.' },
    { id: 'ts-g09', q: 'Every morning the sun ___ in the east.', opts: ['rises', 'rose', 'will rise'], a: 0,
      why: 'It happens every day → present: rises.' },
    { id: 'ts-g10', q: 'Last year we ___ to Sylhet.', opts: ['went', 'go', 'will go'], a: 0,
      why: '“Last year” → past: went.' },
    { id: 'ts-g11', q: 'She ___ a letter tomorrow.', opts: ['will write', 'wrote', 'writes'], a: 0,
      why: '“Tomorrow” → will write.' },
    { id: 'ts-g12', q: 'Karim ___ tea every morning.', opts: ['drinks', 'drank', 'will drink'], a: 0,
      why: 'A habit → present: drinks.' },
    { id: 'ts-g13', q: 'We ___ a big fish last Friday.', opts: ['caught', 'catch', 'will catch'], a: 0,
      why: '“Last Friday” → past: caught.' },
    { id: 'ts-g14', q: 'The shops ___ again tomorrow.', opts: ['will open', 'opened', 'open'], a: 0,
      why: '“Tomorrow” → will open.' },
    { id: 'ts-g15', q: 'I ___ my teeth every night.', opts: ['brush', 'brushed', 'will brush'], a: 0,
      why: 'A nightly habit → present: brush.' },
    { id: 'ts-g16', q: 'Long ago, people ___ by boat.', opts: ['travelled', 'travel', 'will travel'], a: 0,
      why: '“Long ago” → past: travelled.' }
  ],

  mcq: [
    { id: 'ts-q01', q: '“I played” tells about…', opts: ['before (the past)', 'now', 'later'], a: 0,
      why: 'The -ed form points backwards in time.' },
    { id: 'ts-q02', q: '“I will play” tells about…', opts: ['later (the future)', 'before', 'yesterday'], a: 0,
      why: '“Will” points forward in time.' },
    { id: 'ts-q03', q: '“I play every day” tells about…', opts: ['now / every day (the present)', 'only yesterday', 'only tomorrow'], a: 0,
      why: 'Habits and everyday truths use the present.' },
    { id: 'ts-q04', q: 'Which word makes the future?', opts: ['will', 'was', 'did'], a: 0,
      why: 'will + verb = future: will play, will go, will eat.' },
    { id: 'ts-q05', q: 'The past form of “play” is…', opts: ['played', 'plays', 'will play'], a: 0,
      why: 'Most verbs add -ed for the past.' },
    { id: 'ts-q06', q: 'The past form of “go” is…', opts: ['went', 'goed', 'will go'], a: 0,
      why: '“Go” is special: go → went (no -ed!).' },
    { id: 'ts-q07', q: 'The past form of “eat” is…', opts: ['ate', 'eated', 'eats'], a: 0,
      why: '“Eat” is special: eat → ate.' },
    { id: 'ts-q08', q: 'Which sentence is about YESTERDAY?', opts: ['I walked to school.', 'I walk to school.', 'I will walk to school.'], a: 0,
      why: '“Walked” is the past form.' },
    { id: 'ts-q09', q: 'Which sentence is about TOMORROW?', opts: ['We will visit the zoo.', 'We visit the zoo every year.', 'We visited the zoo.'], a: 0,
      why: '“Will visit” points to the future.' },
    { id: 'ts-q10', q: 'The past form of “run” is…', opts: ['ran', 'runned', 'runs'], a: 0,
      why: '“Run” is special: run → ran.' },
    { id: 'ts-q11', q: '“Yesterday”, “last night” and “long ago” go with…', opts: ['past verbs (played, went)', 'will + verb', 'question marks'], a: 0,
      why: 'Time words are clues — before-words go with past verbs.' },
    { id: 'ts-q12', q: '“Tomorrow” and “next week” go with…', opts: ['will + verb', 'played and went', 'yesterday'], a: 0,
      why: 'Later-words go with will + verb.' }
  ],

  build: [
    { id: 'ts-b01', words: ['Yesterday', 'I', 'played', 'cricket.'] },
    { id: 'ts-b02', words: ['We', 'will', 'visit', 'Grandfather', 'tomorrow.'] },
    { id: 'ts-b03', words: ['Rina', 'goes', 'to', 'school', 'every', 'day.'] },
    { id: 'ts-b04', words: ['Last', 'night', 'it', 'rained', 'heavily.'] },
    { id: 'ts-b05', words: ['The', 'sun', 'rises', 'in', 'the', 'east.'] },
    { id: 'ts-b06', words: ['I', 'will', 'write', 'a', 'letter', 'tomorrow.'] },
    { id: 'ts-b07', words: ['We', 'went', 'to', 'Sylhet', 'last', 'year.'] },
    { id: 'ts-b08', words: ['Karim', 'drinks', 'tea', 'every', 'morning.'] }
  ]
};
