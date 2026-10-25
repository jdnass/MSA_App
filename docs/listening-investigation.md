# Installed-app pause/resume investigation

## Evidence from the iPhone reports

- Version 101 resumes four times in Safari while `visibility` is `hidden`.
- The installed Home Screen app emits `play` and `playing` after pause, but its clock freezes.
- Its first replacement player advances only after the page becomes visible.
- Its second replacement waits at `readyState: 1`; the recovery timeout pauses it before data becomes available on returning to the foreground.

The subsequent version 102 control tests also failed in the installed app: a conventional direct-server MP3 stayed frozen at 29.284 seconds with `playback` session mode and 12.907 seconds with `auto`. Both were fully buffered, unmuted, and error-free. This reproduces the symptom without the local stream, assembled playlist, recovery timer, or repeated metadata/position updates. It strongly narrows the remaining investigation to installed-app media/session behavior without establishing WebKit's exact internal failure. The reports cannot establish audibility on their own; the user's result confirms the silence.

## Controlled test

Open **Vocabulary → headphones → Playback help → Open playback test** inside the installed app. The screen must say **Home Screen app**. Switching to this test stops the study player so there is only one audio source.

The three sources use identical bytes from a conventional, two-minute MP3 encoded by FFmpeg from an existing Arabic recording:

1. **Direct server file** uses a static MP3 URL and bypasses the service worker, including byte-range requests.
2. **Local file** fetches those bytes once and creates a Blob URL.
3. **MoSA stream** stores those bytes using the current local range transport.

Version 103 adds **Lock-screen resume → Reactivate audio session · experimental**. That mode registers a custom Play action which synchronously sets the audio-session type to `auto`, reapplies `playback`, and calls `play()` on the same audio element. It does not reload, seek, replace the element, or schedule retries. Custom Pause pauses the same element and invalidates pending result callbacks. Native controls remain available as the previous baseline. Neither mode uses recovery timers or repeated metadata/position updates. The regular vocabulary player remains version 101.

The report records the selected resume mode, action-handler receipt, category-setting readbacks, play-promise success/rejection, and subsequent native time updates. Play-promise success is not proof of audible playback. If the handler is not called while locked, the report will lack `remote-play`. If it is called but the clock still freezes, reapplying those session types is not sufficient on this device. Unsupported APIs cause an explicit error. Actions are unregistered on result, navigation, or test switch.

For the next comparison choose **Direct server file**, **Reactivate audio session · experimental**, and **Playback · same as MoSA**. Repeat the same lock-screen pause/resume procedure and copy the result. This is an experiment, not a confirmed workaround.

Start with the direct-server test. Play, lock the phone, listen for ten seconds, pause on the lock screen for ten seconds, then resume. Wait another ten seconds before reopening the app. Mark whether it resumed audibly and copy the report. Only proceed to another source when that comparison is needed.

## Interpretation

| Result inside the installed app | Next investigation |
| --- | --- |
| Direct file fails with both session modes | Test explicit session reactivation from the lock-screen Play callback. |
| Direct succeeds, local file fails | Focus on Blob URL behavior. |
| Direct and local succeed, MoSA stream fails | Focus on service-worker range delivery and worker lifecycle. |
| All three succeed, vocabulary listening fails | Compare the assembled playlist, session metadata/position updates, and recovery behavior individually. |

The MP3 repeats a short recording; a passing result is a useful control, not proof that long sessions are fixed. Reports contain buffer ranges, seek ranges, lifecycle events, selected source/session type, and the user's audibility result. Nothing is uploaded automatically. Test history is kept in page memory until navigation, not persisted.

## Validation

- `node tests/listening-diagnostic-unit.cjs` validates source selection, report history, event spans, native direct-file routing, exact service-worker bypass for GET/HEAD ranges, stale-worker detection, local-track cleanup, remote session reactivation without position/source changes, Pause cancellation, handler cleanup, and unsupported APIs.
- `node tests/listening-recovery.cjs` retains the existing player regression checks.
- `ffprobe` validates the control as a 120.048-second, mono, 24 kHz MP3. FFmpeg can decode it without errors.

The execution environment has no installed browser binary or physical iPhone. These checks cannot validate iOS lock-screen playback; the controlled test is designed for that remaining step.

Rebuild the reference with `python scripts/build-listening-control.py` (requires FFmpeg). It reuses an existing recording and generates no new speech.
