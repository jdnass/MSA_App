# User vocabulary recordings, version 112

Imports 170 recordings from the original Drive batch and 85 from the follow-up batch. All 255 supplied clips are retained as MP3 conversions of the original recordings, bundled in `user-vocab-clips.js` as data URLs for reliable publication and offline delivery, without generated speech. The import maps 253 Al-Kitaab Part 1 chapter 1–6 cards to the user's voice. Duplicate labels use the newest upload. Matching uses filenames and existing vocabulary, not verified speech transcription.

Matched vocabulary, list rows, lesson vocabulary, and matching practice readings use the uploaded voice by default. The sound key preserves shadda so studying and teaching remain distinct. An ID mapping is accepted only while its Arabic reading still matches. Superseded Cedar and native audio mappings and their unreferenced media files are removed. Cedar generation excludes imported readings. Other vocabulary and sentence audio are preserved.

Vocabulary cards and list rows play Arabic once, even if the English-after-Arabic preference was previously enabled. Repetition and optional English remain exclusive to the audio playbook. The new service-worker and prepared-track cache versions remove old cached voices on upgrade; an existing installation should be reopened/refreshed.

No supplied filename clearly matches these cards: friend, eating, atmospheres/conditions, summer, summers, hobby. Their existing recordings remain. Regular plurals intentionally omitted from the uploads are not replaced. The follow-up file labeled “Friends” remains a plural match; it is not assumed to be singular “friend.”

Validation: all 255 MP3 files parse and match their stored checksums; all 253 mapped cards route to the imported clips for both card and playbook playback; old matched Cedar mappings/files are absent; teaching and studying remain separate; changed card IDs do not reuse stale clips; service-worker asset references exist. Existing listening, English-playbook, vocabulary routing, and module-audio checks pass.

The legacy full Cedar export/coverage command has an existing unrelated stale pronunciation override for `cv-7d177db05ce082a6e65ffa50` (“my mother”), whose vocabulary was removed earlier. The same error was reproduced on the pre-import checkout. Runtime routing, imported audio, and playback checks pass independently.
