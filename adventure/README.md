# MoSA’s Adventure

A separate, installable Arabic storybook pilot containing the full first two chapters of *The Book of Missing Stories*.

## Reading

- Story and Vocab are the two main tabs.
- English is hidden on every new card; tap to reveal it.
- Tap an Arabic word to reveal its contextual gloss and hear it once.
- Stars, preferences, and progress are saved locally on the current device.
- Swipe horizontally, use the arrow buttons, or use keyboard arrows to turn cards.
- Optional grammar notes appear where relevant. Settings control vowels, text size, and word audio on tap.

## Audio

Existing user recordings take priority over existing Cedar vocabulary recordings for matching words. This pilot reuses 120 matching word recordings. Other words and complete sentences use the device’s Arabic speech voice. If that voice is not installed or exposed by the browser, the app reports that audio is unavailable for that item.

English is never spoken. Each word and sentence plays once. Generating additional Cedar recordings is not enabled in this published pilot and requires separate approval for API charges and writing the generated recordings to GitHub.

## Scope

Arabic, English, and word-level contextual meanings are stored in `story.json`. This pilot does not certify exhaustive six-collection coverage or the final whole-book extra-word count. It implements only chapters 1 and 2; later chapters are not shown as empty lessons.

The app uses its own manifest, service-worker scope, cache names, and local-storage key. It is hosted at a separate `/adventure/` URL within the existing repository.

Images were generated from the approved Moza character reference. They are AI-generated story art. Reused Cedar recordings are AI-generated audio; the user recordings are the user’s own voice. The published app contains no API credentials or paid generation workflow.
