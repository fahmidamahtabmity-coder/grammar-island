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
    },
    {
      id: 'L2',
      name: 'Builder Bay',
      emoji: '🧱',
      islands: [
        {
          id: 'verbs-doing',
          name: 'Doing Words',
          emoji: '🏃',
          tagline: 'Verbs: run, eat, sing…',
          aspect: 'Verbs',
          gate: ['vd-q05', 'vd-q12'],
          rule: {
            title: 'Verbs are doing words',
            text: 'A verb is a doing word — it tells what someone or something does.',
            example: 'The boy <b>runs</b>. Birds <b>fly</b>. Amina <b>reads</b>.',
            exampleNote: 'runs, fly, reads = the actions in each sentence',
            bangla: 'Verb হলো কাজের শব্দ — কে কী করে তা বলে। যেমন: runs (দৌড়ায়), fly (ওড়ে), reads (পড়ে)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap the 2 doing words:',
            sentence: ['Rina', 'sings', 'and', 'dances.'],
            targets: { 1: 'action 🎤', 3: 'action 💃' }
          },
          games: ['catch', 'sort', 'quiz', 'build']
        },
        {
          id: 'adjectives',
          name: 'Describing Words',
          emoji: '🎨',
          tagline: 'Adjectives: red, big, sweet…',
          aspect: 'Adjectives',
          gate: ['aj-q05', 'aj-q12'],
          rule: {
            title: 'Adjectives describe',
            text: 'An adjective is a describing word — it tells what a person or thing is like: its colour, size, taste or feeling.',
            example: 'a <b>red</b> ball · a <b>big</b> elephant · <b>sweet</b> mangoes',
            exampleNote: 'red = colour · big = size · sweet = taste',
            bangla: 'Adjective হলো বর্ণনার শব্দ — কোনো কিছু কেমন তা বলে (রং, আকার, স্বাদ, অনুভূতি)। যেমন: red (লাল), big (বড়), sweet (মিষ্টি)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap the 2 describing words:',
            sentence: ['The', 'little', 'girl', 'has', 'a', 'red', 'kite.'],
            targets: { 1: 'size 🐭', 5: 'colour 🔴' }
          },
          games: ['catch', 'sort', 'quiz', 'build']
        },
        {
          id: 'adj-degrees',
          name: 'Big, Bigger, Biggest!',
          emoji: '🐘',
          tagline: 'Comparing with -er and -est',
          aspect: 'Adjectives',
          gate: ['ad-q01', 'ad-q02'],
          rule: {
            title: 'Describing words can compare',
            text: 'To compare TWO things, add -er (bigger). To say something beats ALL the others, add -est (biggest).',
            example: 'tall → tall<b>er</b> → tall<b>est</b>',
            exampleNote: 'one: tall · comparing two: taller · champion of all: tallest',
            bangla: 'তুলনা করতে adjective বদলায়: দুটির মধ্যে তুলনায় -er (bigger), আর সবার সেরা বোঝাতে -est (biggest)। যেমন: tall → taller → tallest।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the right form:',
            choices: ['tall', 'taller', 'tallest'],
            items: [
              { word: 'Rina is ___ than Amina.', emoji: '', a: 'taller' },
              { word: 'Karim is the ___ in the class.', emoji: '', a: 'tallest' },
              { word: 'The tree is very ___.', emoji: '🌳', a: 'tall' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'adverbs',
          name: 'How-Words',
          emoji: '🐢',
          tagline: 'Adverbs: slowly, today, here…',
          aspect: 'Adverbs',
          gate: ['av-q01', 'av-q03'],
          rule: {
            title: 'Adverbs tell how, when, where',
            text: 'An adverb tells HOW, WHEN or WHERE something happens. Many how-words end in -ly.',
            example: 'The turtle walks <b>slowly</b>. We play <b>outside</b>. I read <b>daily</b>.',
            exampleNote: 'slowly = how · outside = where · daily = when',
            bangla: 'Adverb বলে কাজটা কীভাবে (how), কখন (when) বা কোথায় (where) হয়। অনেক adverb -ly দিয়ে শেষ হয়। যেমন: slowly (ধীরে), outside (বাইরে), daily (প্রতিদিন)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap the word that tells HOW the turtle walks:',
            sentence: ['The', 'turtle', 'walks', 'slowly.'],
            targets: { 3: 'HOW 🐢' }
          },
          games: ['catch', 'sort', 'quiz', 'build']
        },
        {
          id: 'prepositions',
          name: 'Where-Words',
          emoji: '📦',
          tagline: 'in, on, under, at…',
          aspect: 'Prepositions',
          gate: ['pr-q02', 'pr-q06'],
          rule: {
            title: 'Prepositions tell where (and when)',
            text: 'A preposition is a little word that tells where something is — in, on, under, behind — or when it happens: at 5 o’clock, on Friday, in June.',
            example: 'The cat is <b>under</b> the table. The book is <b>on</b> the shelf.',
            exampleNote: 'under = below it · on = on top of it',
            bangla: 'Preposition ছোট শব্দ — কোথায় বা কখন বোঝায়: in (ভিতরে), on (উপরে), under (নিচে), behind (পিছনে); সময়ে: at 5 o’clock, on Friday, in June।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Where is it? Pick the right little word:',
            choices: ['in', 'on', 'under'],
            items: [
              { word: 'The apple is ___ the plate.', emoji: '🍎', a: 'on' },
              { word: 'The cat hides ___ the bed.', emoji: '🐈', a: 'under' },
              { word: 'The fish swims ___ the water.', emoji: '🐟', a: 'in' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'conjunctions',
          name: 'Joining Words',
          emoji: '🔗',
          tagline: 'and, but, or, because',
          aspect: 'Conjunctions',
          gate: ['cj-q01', 'cj-q04'],
          rule: {
            title: 'Conjunctions join',
            text: 'A conjunction joins words or sentences: and (adds), but (shows a difference), or (gives a choice), because (gives a reason).',
            example: 'I like mangoes <b>and</b> bananas. I ran <b>because</b> I was late.',
            exampleNote: 'and = + · but = ↔ · or = choice · because = reason',
            bangla: 'Conjunction শব্দ বা বাক্য জোড়া দেয়: and (এবং), but (কিন্তু), or (অথবা), because (কারণ)। যেমন: I like mangoes and bananas.'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the joining word that fits:',
            choices: ['and', 'but', 'because'],
            items: [
              { word: 'I like tea ___ biscuits.', emoji: '🍪', a: 'and' },
              { word: 'I ran fast ___ I missed the bus.', emoji: '🚌', a: 'but' },
              { word: 'She is happy ___ she won.', emoji: '🏆', a: 'because' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'determiners',
          name: 'Counting & Pointing Words',
          emoji: '👉',
          tagline: 'this, those, some, many…',
          aspect: 'Determiners',
          gate: ['dt-q03', 'dt-q01'],
          rule: {
            title: 'Little words point and count',
            text: 'Before a noun, little words can point — this, that, these, those — or count: some, any, many (countable) and much (uncountable).',
            example: '<b>This</b> mango is sweet. I have <b>many</b> friends and not <b>much</b> time.',
            exampleNote: 'this = one, near · many = countable things · much = uncountable stuff',
            bangla: 'Noun-এর আগে ছোট শব্দ দেখিয়ে দেয় (this এই, that ঐ, these এইগুলো, those ঐগুলো) বা পরিমাণ বলে। গোনা যায় এমন জিনিসে many (many pens), গোনা যায় না এমন জিনিসে much (much water)।'
          },
          intro: {
            type: 'tap-words',
            prompt: 'Your turn! Tap the pointing word:',
            sentence: ['These', 'mangoes', 'are', 'sweet.'],
            targets: { 0: 'points to many, near 👉' }
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'nouns-treasures',
          name: 'Noun Treasures',
          emoji: '💎',
          tagline: 'children, a flock, king & queen',
          aspect: 'Nouns',
          gate: ['n2-q01', 'n2-q03'],
          rule: {
            title: 'Nouns keep secrets',
            text: 'Nouns have treasures: group names (a team of players), special plurals that break the +s rule (child → children), and boy–girl pairs (king → queen).',
            example: 'a <b>flock</b> of birds · one child, two <b>children</b> · the king and the <b>queen</b>',
            exampleNote: 'group name · special plural · boy–girl pair',
            bangla: 'Noun-এর কিছু গোপন রূপ আছে: দলের নাম (team, flock, herd), অনিয়মিত plural (child → children, man → men, foot → feet), আর ছেলে-মেয়ে জোড়া (king → queen, lion → lioness)।'
          },
          intro: {
            type: 'tap-fix',
            prompt: 'One word is wrong! Tap it to fix the special plural:',
            sentence: ['one', 'child,', 'two', 'childs'],
            targets: { 3: 'children' }
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'tense-simple',
          name: 'Now, Before, Later',
          emoji: '⏰',
          tagline: 'play · played · will play',
          aspect: 'Tenses',
          gate: ['ts-q01', 'ts-q04'],
          rule: {
            title: 'Verbs tell WHEN',
            text: 'Verbs change with time: now or every day (I play), before (I played), later (I will play).',
            example: 'Today I <b>play</b>. Yesterday I <b>played</b>. Tomorrow I <b>will play</b>.',
            exampleNote: 'present · past (-ed) · future (will + verb)',
            bangla: 'Verb সময় বোঝায়: এখন বা প্রতিদিন (I play), আগে (I played), পরে (I will play)। যেমন: আজ play, গতকাল played, আগামীকাল will play।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the right time form:',
            choices: ['play', 'played', 'will play'],
            items: [
              { word: 'Yesterday I ___ cricket.', emoji: '⏪', a: 'played' },
              { word: 'Every day I ___ cricket.', emoji: '▶️', a: 'play' },
              { word: 'Tomorrow I ___ cricket.', emoji: '⏩', a: 'will play' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
        },
        {
          id: 'verb-match',
          name: 'Match the Verb',
          emoji: '🤝',
          tagline: 'She plays · they play',
          aspect: 'Agreement',
          gate: ['sv-q05', 'sv-q03'],
          rule: {
            title: 'The verb must match its subject',
            text: 'One person or thing → the verb wears an s (She plays). Many — or I/you → no s (They play). And: I am, one is, many are.',
            example: 'She <b>plays</b>. They <b>play</b>. I <b>am</b> · he <b>is</b> · we <b>are</b>.',
            exampleNote: 'one → +s · many → no s',
            bangla: 'Subject আর verb মিলতে হবে: একজন হলে verb-এ s (She plays), অনেকে বা I/you হলে s নেই (They play)। I-এর সাথে am, একজনের সাথে is, অনেকের সাথে are।'
          },
          intro: {
            type: 'pick',
            prompt: 'Your turn! Pick the matching verb:',
            choices: ['am', 'is', 'are'],
            items: [
              { word: 'I ___ a student.', emoji: '🙋', a: 'am' },
              { word: 'Rina ___ my friend.', emoji: '👧', a: 'is' },
              { word: 'We ___ happy.', emoji: '👥', a: 'are' }
            ]
          },
          games: ['sort', 'gap', 'quiz', 'build']
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
