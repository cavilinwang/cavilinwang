# Saved narrator voice

- **Voice:** Piper `en_US-ryan-high` (free, offline, male, US English).
- **Settings:** speed 0.9 (slightly faster than default), 0.22 s pause between sentences.
- **Use it:** `python narrate.py "Your text" out.wav`
- **Mix levels** and **pronunciation fixes** for tricky words are in `voice_profile.json`.
- The voice model itself (120 MB) is not stored here. It is downloaded from the public Piper voice library with the command in `voice_profile.json`.
- Tell Claude "use the saved narrator voice" and point it at this folder.
