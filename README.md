# Grammar Island (working name) — Phase 1 Prototype

A gamified English-grammar learning web app for children. Pure HTML/CSS/JavaScript —
no server, no installation. All progress stays on this device (localStorage).

## How to start

**Easiest:** double-click **`Start Grammar Island.bat`** — it opens the app in your browser.

Or open `index.html` in any modern browser (Chrome, Edge, Firefox, Safari).

## What's inside (Phase 1)

- Onboarding: explorer name + avatar, parent PIN setup
- Island map — Level 1 "Sentence Beach", 4 islands:
  Naming Words → Proper & Common Nouns → Replacing Words → The Little Words (a/an/the)
- Rule cards in simple English with a বাংলা hint button
- Games: Word Catcher, Sorting Baskets, Sentence Builder, Quick Quiz, Fill the Gap
- Mastery gate: read rule + 3 game types + 30 answers at 80% + Boss Challenge 8/10
- Badges, XP, Parent Corner (PIN): progress table, manual unlock,
  export/import progress ("Save my treasure"), reset

## Important notes

- **Progress lives in this browser only.** Use Parent Corner → *Export progress*
  regularly; the file can be imported on another device or after a browser cleanup.
- The Parent PIN is a child gate, not real security (see `../SECURITY.md`).

## Folder map

| Path | What it is |
|---|---|
| `index.html` | The single page that loads everything |
| `css/styles.css` | All styling |
| `js/data/curriculum.js` | Islands + rule cards (incl. Bangla hints) |
| `js/data/bank-*.js` | Question banks (stable IDs — never renumber) |
| `js/state.js` | Saving/loading, export/import, PIN |
| `js/mastery.js` | The mastery-gate rules (tunable thresholds) |
| `js/audio.js` | Small synth sound effects + mute |
| `js/games.js` | The game engines |
| `js/app.js` | Screens and navigation |

Project docs (plan, syllabus, risks, security): the parent folder (`../`).
