/* Grammar Island — curriculum definition.
   One island = one grammar concept. Rule cards follow the standard in
   docs/SYLLABUS.md: one-line simple-English rule → example → Bangla hint.
   `aspect` groups rules into Grammar Book chapters.
   `gate` lists the question ids the Captain's Compass uses for placement. */

window.GI = window.GI || {};

GI.CURRICULUM = {
  dataVersion: 2,
  levels: [
    {
      id: 'L1',
      name: 'Sentence Beach',
      emoji: '🏖️',
      islands: [
        {
          id: 'sentence-magic',
          name: 'Sentence Magic',
          emoji: '✨',
          tagline: 'What is a sentence?',
          aspect: 'Sentences',
          gate: ['sm-q02', 'sm-q05'],
          rule: {
            title: 'A sentence makes complete sense',
            text: 'A sentence is a group of words in the right order that makes complete sense. It starts with a capital letter and ends with a stop mark (. ? !).',
            example: 'birds fly sky ❌ → <b>Birds fly in the sky.</b> ✅',
            exampleNote: 'right order + capital letter + stop mark = a real sentence',
            bangla: 'Sentence হলো সাজানো শব্দের দল যা পূর্ণ অর্থ দেয়। শুরুতে capital letter, শেষে stop mark (. ? !)। যেমন: Birds fly in the sky.'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! One of these makes complete sense — tap the REAL sentence:',
            sentence: ['cat the sleeps', 'The cat sleeps.', 'sleeps the on'],
            targets: { 1: 'complete sense ✅' }
          },
          games: ['sort', 'build', 'quiz']
        },
        {
          id: 'noun-naming',
          name: 'Naming Words',
          emoji: '🥭',
          tagline: 'What is a noun?',
          aspect: 'Nouns',
          gate: ['nn-q01', 'nn-q15'],
          rule: {
            title: 'Nouns are naming words',
            text: 'A noun is a naming word — the name of a person, place, animal, or thing.',
            example: '<b>Amina</b> took her <b>cat</b> to <b>school</b>.',
            exampleNote: 'Amina = person · cat = animal · school = place',
            bangla: 'Noun হলো নামের শব্দ — মানুষ, জায়গা, প্রাণী বা জিনিসের নাম। যেমন: Amina (মানুষ), school (জায়গা), cat (প্রাণী), book (জিনিস)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap all 3 naming words in this sentence:',
            sentence: ['Amina', 'took', 'her', 'cat', 'to', 'school.'],
            targets: { 0: 'person 🧑', 3: 'animal 🐈', 5: 'place 🏫' }
          },
          games: ['catch', 'sort', 'build', 'quiz']
        },
        {
          id: 'noun-proper',
          name: 'Special Names',
          emoji: '🗺️',
          tagline: 'Proper and common nouns',
          aspect: 'Nouns',
          gate: ['np-q01', 'np-q12'],
          rule: {
            title: 'Special names get a capital letter',
            text: 'A proper noun is the special name of ONE person or place — it always starts with a capital letter. A common noun is a general name — no capital.',
            example: '<b>Amina</b> is a girl. <b>Dhaka</b> is a city.',
            exampleNote: 'Amina, Dhaka = proper (capital) · girl, city = common',
            bangla: 'Proper noun হলো কোনো একজনের বা এক জায়গার বিশেষ নাম — সবসময় বড় হাতের অক্ষরে (capital letter) শুরু হয়। যেমন: Amina, Dhaka। Common noun হলো সাধারণ নাম — যেমন: girl, city।'
          },
          intro: {
            type: 'tap-fix',
            prompt: 'Oh no — 2 special names lost their capital letters! Tap them to fix them:',
            sentence: ['amina', 'lives', 'in', 'dhaka.'],
            targets: { 0: 'Amina', 3: 'Dhaka.' }
          },
          games: ['catch', 'sort', 'build', 'quiz']
        },
        {
          id: 'pronoun-personal',
          name: 'Replacing Words',
          emoji: '🙋',
          tagline: 'Pronouns: he, she, it, they…',
          aspect: 'Pronouns',
          gate: ['pp-q03', 'pp-q13'],
          rule: {
            title: 'Pronouns replace nouns',
            text: 'A pronoun takes the place of a noun, so we do not repeat the same name again and again.',
            example: 'Amina lost her pen. <b>She</b> is sad.',
            exampleNote: 'She = Amina (we did not say “Amina” twice)',
            bangla: 'Pronoun হলো noun-এর বদলে বসা শব্দ, যাতে একই নাম বারবার বলতে না হয়। যেমন: he, she, it, we, they। “Amina lost her pen. She is sad.” — এখানে She মানে Amina।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! One word below is standing in for “Amina” — tap it:',
            sentence: ['Amina', 'lost', 'her', 'pen.', 'She', 'is', 'sad.'],
            targets: { 4: 'She = Amina! 🙋' }
          },
          games: ['catch', 'sort', 'build', 'quiz']
        },
        {
          id: 'articles',
          name: 'The Little Words',
          emoji: '🐜',
          tagline: 'a, an and the',
          aspect: 'Articles',
          gate: ['ar-q03', 'ar-q10'],
          rule: {
            title: 'a, an and the',
            text: 'Use “a” before a consonant sound, “an” before a vowel sound (a, e, i, o, u) — and “the” for one special thing we both know.',
            example: '<b>a</b> mango · <b>an</b> egg · <b>the</b> sun',
            exampleNote: 'mango starts with “m” → a · egg starts with “e” → an · there is only one sun → the',
            bangla: 'Consonant ধ্বনির আগে “a” (a mango), vowel ধ্বনির (a, e, i, o, u) আগে “an” (an egg)। আর যে জিনিসটা নির্দিষ্ট — যেটা আমরা দুজনেই চিনি — তার আগে “the” (the sun)।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the right little word for each one:',
            choices: ['a', 'an', 'the'],
            items: [
              { word: 'egg', emoji: '🥚', a: 'an' },
              { word: 'mango', emoji: '🥭', a: 'a' },
              { word: 'sun', emoji: '☀️', a: 'the' }
            ]
          },
          games: ['sort', 'build', 'quiz', 'gap']
        },
        {
          id: 'punctuation-end',
          name: 'Stop, Ask, Shout!',
          emoji: '❗',
          tagline: 'Full stop, ? and !',
          aspect: 'Punctuation',
          gate: ['pu-q02', 'pu-q04'],
          rule: {
            title: 'Every sentence ends with a stop mark',
            text: 'End a telling sentence with a full stop (.), a question with a question mark (?), and a shout or surprise with an exclamation mark (!).',
            example: 'I like rice<b>.</b> · Do you like rice<b>?</b> · I love rice<b>!</b>',
            exampleNote: 'tell → .  ·  ask → ?  ·  shout/surprise → !',
            bangla: 'প্রতিটি sentence-এর শেষে চিহ্ন বসে: সাধারণ কথা শেষে full stop (.), প্রশ্নের শেষে question mark (?), আর অবাক হওয়া বা জোরে বলার শেষে exclamation mark (!)।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the right stop mark for each sentence:',
            choices: ['.', '?', '!'],
            items: [
              { word: 'What is your name__', emoji: '', a: '?' },
              { word: 'I am eleven years old__', emoji: '', a: '.' },
              { word: 'What a beautiful bird__', emoji: '', a: '!' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'word-families',
          name: 'Word Families',
          emoji: '🏠',
          tagline: 'Naming, action & describing words',
          aspect: 'Word Families',
          gate: ['wf-q06', 'wf-q02'],
          rule: {
            title: 'Words live in families',
            text: 'Words have jobs: naming words (nouns) name things, action words (verbs) tell what happens, and describing words (adjectives) tell what something is like.',
            example: 'The <b>happy</b> <b>girl</b> <b>sings</b>.',
            exampleNote: 'happy = describing · girl = naming · sings = action',
            bangla: 'শব্দের পরিবার আছে: naming word (noun) নাম বলে, action word (verb) কাজ বোঝায়, describing word (adjective) কেমন তা বলে। যেমন: The happy girl sings. — happy (কেমন), girl (কে), sings (কাজ)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap the describing word, the naming word and the action word:',
            sentence: ['The', 'happy', 'girl', 'sings.'],
            targets: { 1: 'describing 🎨', 2: 'naming 🧑', 3: 'action 🏃' }
          },
          games: ['catch', 'sort', 'quiz', 'build']
        }
      ]
    }
  ]
};

/* Flat lookup helpers */
GI.allIslands = function () {
  return GI.CURRICULUM.levels.flatMap(function (lv) { return lv.islands; });
};
GI.getIsland = function (id) {
  return GI.allIslands().find(function (i) { return i.id === id; }) || null;
};
/* find a question by id across an island's mcq + gap pools (used by the Compass) */
GI.findQuestion = function (islandId, qid) {
  var bank = GI.BANKS[islandId] || {};
  var pool = (bank.mcq || []).concat(bank.gap || []);
  return pool.find(function (q) { return q.id === qid; }) || null;
};
