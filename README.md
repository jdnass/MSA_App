# MSA Arabic App

An installable iPhone web app for studying Modern Standard Arabic. It includes Chapter 4 vocabulary and sentences, automatic Arabic text-to-speech, swipeable study cards, a position slider, replay and skip controls, global study-display options, persistent vocabulary position and 1–5 difficulty ratings, chronological study, and difficulty-weighted shuffle.

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
- `icons/` — home-screen icons
- `.nojekyll` — tells GitHub Pages to serve the files directly
