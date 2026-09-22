# MoSA

MoSA is an installable iPhone web app for studying Modern Standard Arabic. It includes complete Chapters 1–4 vocabulary and sentences, native recorded audio where available with automatic Arabic text-to-speech fallback, swipeable study cards, lesson position sliders, replay and skip controls, global saved study-display options (including Hide Harakat), persistent vocabulary position and selectable 1–5 difficulty ratings, chronological study, and difficulty-weighted shuffle. Swipe right for the next card or left for the previous card.

Al-Kitaab Chapters 1–3 include dedicated grammar-card sequences. Chapter 2 covers present-tense pronouns and verb conjugations, sound and broken plurals, and human/nonhuman plural agreement. Chapter 3 covers iḍāfa constructions, possessive pronoun suffixes, and noun–adjective phrases.

Lesson sentence cards highlight an Arabic word in red when it does not appear in the saved Alif Baa vocabulary reference or in the vocabulary from the selected chapter and earlier chapters. The comparison ignores harakat and recognizes common attached prefixes, suffixes, and lesson verb conjugations.

## Publish with GitHub Pages

1. Create a new repository on GitHub.
2. Upload every file and folder from this project, preserving the folder structure.
3. Open the repository's **Settings** → **Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then press **Save**.
6. GitHub will provide an HTTPS address after deployment finishes.

## Install on iPhone

1. Open the GitHub Pages address in Safari.
2. Tap Safari's **Share** button.
3. Choose **Add to Home Screen**.
4. Tap **Add**.

The app opens in a standalone window and caches its core files for offline use after the first successful visit. Difficulty ratings remain saved on that device.

The Vocabulary tab supports both card and chronological list views. The list contains English, Arabic, and transliteration; respects the global hide controls with per-word tap-to-reveal fields; and plays audio only when a row is tapped while audio is enabled.

Vocabulary can be filtered with multi-select controls for collection, chapter, and difficulty. Filters apply to both card and list views and are saved on the device.

Hidden English, Arabic, and transliteration fields reveal only on the specific lesson card tapped; the global hide preference remains enabled for every other card.

The “Learning Arabic” Conversation chapter includes native recorded audio for all twelve cards.

Sentence cards can include an optional grammar note. Cards with a note show a red exclamation-mark button beside the speaker; tapping it opens the note in a dialog without changing the learner's position.

Lesson sentence highlighting recognizes covered feminine and plural forms, including forms with attached possessive endings, as already-known vocabulary.

## Run locally

Service workers require a web server rather than opening `index.html` directly. One simple option is:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Project structure

- `index.html` — complete app interface, data, and behavior
- `manifest.webmanifest` — installable-app metadata
- `sw.js` — offline cache
- `audio/vocab/` — native vocabulary recordings (with text-to-speech fallback)
- `audio/conversations/` — native recordings for Conversation sentence cards
- `icons/` — home-screen icons
- `.nojekyll` — tells GitHub Pages to serve the files directly
