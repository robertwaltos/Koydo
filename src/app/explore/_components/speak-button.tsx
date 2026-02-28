"use client";

import { useCallback, useRef, useState } from "react";

type SpeakButtonProps = {
  text: string;
  label?: string;
  className?: string;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export default function SpeakButton({
  text,
  label = "Hear It",
  className,
}: SpeakButtonProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    // If already speaking, stop
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.06;
    utterance.lang = "en-US";
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [text, isSpeaking]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={joinClasses(
        "ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95",
        isSpeaking
          ? "border-sky-400 bg-sky-100 text-sky-900 shadow-sm dark:border-sky-300/55 dark:bg-sky-500/18 dark:text-sky-100 dark:shadow-sky-950/40"
          : "border-sky-300 bg-sky-50 text-sky-900 hover:bg-sky-100 dark:border-sky-300/40 dark:bg-slate-900/58 dark:text-sky-100 dark:hover:bg-slate-800/72",
        className,
      )}
      aria-label={isSpeaking ? "Stop reading aloud" : `Read aloud: ${text}`}
      title={isSpeaking ? "Tap to stop" : "Read aloud (supported browsers only)"}
    >
      {isSpeaking ? (
        <span className="inline-flex items-end gap-px" aria-hidden="true">
          <span className="explore-sound-bar h-3 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" style={{ animationDelay: "0ms" }} />
          <span className="explore-sound-bar h-4 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" style={{ animationDelay: "150ms" }} />
          <span className="explore-sound-bar h-2.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" style={{ animationDelay: "300ms" }} />
          <span className="explore-sound-bar h-3.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" style={{ animationDelay: "100ms" }} />
        </span>
      ) : null}
      {label}
    </button>
  );
}
