# MSA Arabic — iPhone Web App

This is the no-Mac/no-iPad version of the MSA Arabic app.

## What it includes
- Lesson-based MSA Arabic learning
- Vocabulary with English, Arabic, transliteration and part of speech
- Optional feminine/plural fields
- Automatic Arabic speech after starting a lesson
- Replay, slower audio and skip controls
- Sentence practice
- Progress bar
- Hide/show transliteration
- Local progress saved in the browser
- PWA manifest for Add to Home Screen
- Service worker for offline app files after first load

## Important iPhone note
Safari normally requires the user to interact with a page before audio can play. The app starts automatic speech after you tap "Start Lesson"; later items can then auto-play as you advance.

## How to put it on an iPhone
The files need to be hosted over HTTPS. A simple option is a static hosting service such as GitHub Pages, Netlify, or Cloudflare Pages. Once the site is open in Safari:
1. Tap Share.
2. Choose "Add to Home Screen".
3. Open the new MSA Arabic icon like a normal app.

## Adding your full curriculum
Edit `app.js`. Each vocabulary item follows:
[English, Arabic, transliteration, partOfSpeech, unused, feminineEnglish, feminineArabic, feminineTransliteration, pluralArabic]

Each sentence follows:
[English, Arabic, transliteration]

The current sample is intentionally small so the structure is easy to expand.
