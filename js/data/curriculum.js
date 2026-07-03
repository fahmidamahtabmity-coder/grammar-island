/* Grammar Island — curriculum definition.
   One island = one grammar concept. Rule cards follow the standard in
   docs/SYLLABUS.md: one-line simple-English rule → example → Bangla hint. */

window.GI = window.GI || {};

GI.CURRICULUM = {
  dataVersion: 1,
  levels: [
    {
      id: 'L1',
      name: 'Sentence Beach',
      emoji: '🏖️',
      islands: [
        {
          id: 'noun-naming',
          name: 'Naming Words',
          emoji: '🥭',
          tagline: 'What is a noun?',
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
          rule: {
            title: 'a, an and the',
            text: 'Use “a” before a consonant sound, “an” before a vowel sound (a, e, i, o, u) — and “the” for one special thing we both know.',
            example: '<b>a</b> mango · <b>an</b> egg · <b>the</b> sun',
            exampleNote: 'mango starts with “m” → a · egg starts with “e” → an · there is only one sun → the',
            bangla: 'Consonant ধ্বনির আগে “a” (a mango), vowel ধ্বনির (a, e, i, o, u) আগে “an” (an egg)। আর যে জিনিসটা নির্দিষ্ট — যেটা আমরা দুজনেই চিনি — তার আগে “the” (the sun)।'
          },
          intro: {
            type: 'pick-article',
            prompt: 'Your turn! Pick the right little word for each one:',
            items: [
              { word: 'egg', emoji: '🥚', a: 'an' },
              { word: 'mango', emoji: '🥭', a: 'a' },
              { word: 'sun', emoji: '☀️', a: 'the' }
            ]
          },
          games: ['sort', 'build', 'quiz', 'gap']
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
