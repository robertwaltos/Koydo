"use client";

import { useEffect, useRef } from "react";

type AutoNarratorProps = {
  /** Text to speak when the component mounts */
  text: string;
  /** Only narrate once per mount (default true) */
  once?: boolean;
};

/**
 * Invisible component that speaks text aloud on mount via Web Speech API.
 * Ideal for world entry narration. Respects prefers-reduced-motion and
 * skips narration if speech synthesis is unavailable.
 */
export default function AutoNarrator({ text, once = true }: AutoNarratorProps) {
  const spokenRef = useRef(false);

  useEffect(() => {
    if (once && spokenRef.current) return;
    if (typeof window === "undefined") return;
    if (!("speechSynthesis" in window)) return;

    // Respect reduced-motion preference — don't auto-narrate
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    // Small delay so the visual scene has time to appear first
    const timer = setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.88;
      utterance.pitch = 1.08;
      utterance.lang = "en-US";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
      spokenRef.current = true;
    }, 600);

    return () => {
      clearTimeout(timer);
      window.speechSynthesis.cancel();
    };
  }, [text, once]);

  return null;
}
