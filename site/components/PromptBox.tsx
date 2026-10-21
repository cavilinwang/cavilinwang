"use client";
// A prompt input in the style of an AI chat box. Wire `onSubmit` to your API route.
import { useRef, useState } from "react";
import styles from "./PromptBox.module.css";

const SUGGESTIONS = ["Plan a launch page", "Write a product tagline", "Design a pricing section"];

export default function PromptBox({ onSubmit }: { onSubmit?: (text: string) => Promise<void> | void }) {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLTextAreaElement>(null);

  async function send() {
    const text = value.trim();
    if (!text || busy) return;
    setBusy(true);
    try {
      await onSubmit?.(text);
      if (!onSubmit) await new Promise((r) => setTimeout(r, 1600)); // demo delay
      setValue("");
    } finally {
      setBusy(false);
    }
  }

  function grow(el: HTMLTextAreaElement) {
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 220) + "px";
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.box} data-busy={busy}>
        <textarea
          ref={ref}
          className={styles.input}
          rows={1}
          value={value}
          placeholder="What do you want to build today?"
          aria-label="Prompt"
          onChange={(e) => { setValue(e.target.value); grow(e.target); }}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }}
        />
        <div className={styles.bar}>
          <span className={styles.hint}>{busy ? "Generating…" : "Enter to send · Shift+Enter for new line"}</span>
          <button className={styles.send} onClick={send} disabled={!value.trim() || busy} aria-label="Send prompt">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.chips}>
        {SUGGESTIONS.map((s) => (
          <button key={s} className={styles.chip} onClick={() => { setValue(s); ref.current?.focus(); }}>{s}</button>
        ))}
      </div>
    </div>
  );
}
