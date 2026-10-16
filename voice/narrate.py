"""Narrate text with the saved voice profile.

    python narrate.py "Hello there." out.wav
    python narrate.py --file script.txt out.wav

Needs: pip install piper-tts, and the voice model (see voice_profile.json -> install).
"""
import json, os, re, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PROFILE = json.load(open(os.path.join(HERE, "voice_profile.json")))


def apply_fixes(text: str) -> str:
    for word, say in PROFILE.get("pronunciation_fixes", {}).items():
        text = re.sub(rf"\b{re.escape(word)}\b", say, text, flags=re.I)
    return text


def narrate(text: str, out_path: str) -> str:
    model = os.path.expanduser(PROFILE["model_file"])
    if not os.path.exists(model):
        sys.exit(f"Voice model missing. Run: {PROFILE['install']}")
    s = PROFILE["settings"]
    subprocess.run(
        ["piper", "--model", model, "--speaker", str(s["speaker_id"]), "--length-scale", str(s["length_scale"]),
         "--sentence-silence", str(s["sentence_silence"]), "--output_file", out_path],
        input=apply_fixes(text), text=True, check=True, capture_output=True)
    return out_path


if __name__ == "__main__":
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    text = open(args[1]).read() if args[0] == "--file" else args[0]
    out = args[-1]
    print(narrate(text, out))
