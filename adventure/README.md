# MoSA’s Adventure

An installable Arabic storybook containing all 26 chapters of *The Book of Missing Stories*.

- Story and Vocab are the two main tabs.
- English is hidden on each new card; tap to reveal it.
- Tap an Arabic word for its contextual English meaning and star it to save it.
- Vocab contains only starred words, with search and chapter filters.
- There is no audio playback, audio fetching, or speech synthesis.
- Reading progress, stars, vowels, and text size are saved locally on the current device.
- Existing pilot stars and reading progress use the same storage key.
- Swipe, use arrow buttons, or keyboard arrows to turn cards.
- Optional grammar notes appear where relevant.

Arabic, English, and contextual word glosses are stored in `story.json`. The continuation follows the approved English script through the ending. This release does not certify exhaustive coverage of the six vocabulary collections or a final extra-word count.

The app has its own manifest, service worker scope, and cache names at `/adventure/`. Illustrations are AI-generated story art based on the approved Moza character reference. Some scenes are reused across related chapters. No API credentials or paid generation workflows are included.
