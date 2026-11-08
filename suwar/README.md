# Suwar

Suwar is a standalone static Arabic study app. Serve the parent repository with a static server and open `/suwar/`. GitHub Pages serves the same directory. The service worker and study preferences are scoped to Suwar.

- Pictures uses existing clay illustrations matched to Banana Part 1 vocabulary. The WebP atlases hold a 6 by 6 grid, and each card stores its atlas number, column, and row.
- Fragments uses the numbered Suwar deck and its sentence-structure groups.
- Verbs uses the same 164 targets with MoSA and Banana verb-form metadata, supplemented for entries outside the source practice lists.
- Reading uses the populated Banana Part 1 chapter passages. Tokenized passages retain the original tap-to-translate glosses and optional case markings.

The app uses existing MoSA recordings when it finds a text match and the file is present. Other cards use the Arabic voice available on the device. Filter controls and confidence ratings are local to the browser.
