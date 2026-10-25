# Installed-app pause/resume investigation

## Evidence from the iPhone reports

- Version 101 resumes four times in Safari while `visibility` is `hidden`.
- The installed Home Screen app emits `play` and `playing` after pause, but its clock freezes.
- Its first replacement player advances only after the page becomes visible.
- Its second replacement waits at `readyState: 1`; the recovery timeout pauses it before data becomes available on returning to the foreground.

This establishes an environment-dependent failure on the tested phone. It does not establish whether the cause is WebKit, the local media transport, the assembled MP3, or the app's media-session integration. The reports cannot establish audibility on their own.

## Controlled test

Open **Vocabulary → headphones → Playback help → Open playback test** inside the installed app. The screen must say **Home Screen app**. Switching to this test stops the study player so there is only one audio source.

The three sources use identical bytes from a conventional, two-minute MP3 encoded by FFmpeg from an existing Arabic recording:

1. **Direct server file** uses a static MP3 URL and bypasses the service worker, including byte-range requests.
2. **Local file** fetches those bytes once and creates a Blob URL.
3. **MoSA stream** stores those bytes using the current local range transport.

All use native controls. There are no recovery timers, custom lock-screen action handlers, metadata updates, or position-update loops. The default audio-session type is `playback`, matching the app. An optional `auto` setting tests the browser's default session behavior separately.

Start with the direct-server test. Play, lock the phone, listen for ten seconds, pause on the lock screen for ten seconds, then resume. Wait another ten seconds before reopening the app. Mark whether it resumed audibly and copy the report. Only proceed to another source when that comparison is needed.

## Interpretation

| Result inside the installed app | Next investigation |
| --- | --- |
| Direct file also fails | Test `auto` session mode; focus on installed-app audio-session behavior before changing the local transport. |
| Direct succeeds, local file fails | Focus on Blob URL behavior. |
| Direct and local succeed, MoSA stream fails | Focus on service-worker range delivery and worker lifecycle. |
| All three succeed, vocabulary listening fails | Compare the assembled playlist, session metadata/position updates, and recovery behavior individually. |

The MP3 repeats a short recording; a passing result is a useful control, not proof that long sessions are fixed. Reports contain buffer ranges, seek ranges, lifecycle events, selected source/session type, and the user's audibility result. Nothing is uploaded automatically. Test history is kept in page memory until navigation, not persisted.

## Validation

- `node tests/listening-diagnostic-unit.cjs` validates source selection, report history, event spans, native direct-file routing, exact service-worker bypass for GET/HEAD ranges, stale-worker detection, and local-track cleanup.
- `node tests/listening-recovery.cjs` retains the existing player regression checks.
- `ffprobe` validates the control as a 120.048-second, mono, 24 kHz MP3. FFmpeg can decode it without errors.

The execution environment has no installed browser binary or physical iPhone. These checks cannot validate iOS lock-screen playback; the controlled test is designed for that remaining step.

Rebuild the reference with `python scripts/build-listening-control.py` (requires FFmpeg). It reuses an existing recording and generates no new speech.
