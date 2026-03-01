"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useVoicePreference } from "./voice-preference";

type SpeakButtonProps = {
  text: string;
  label?: string;
  className?: string;
  /** Optional voice ID — if omitted, uses the user's preference from context */
  voice?: string;
  /** Optional lesson ID for cache keying */
  lessonId?: string;
};

function joinClasses(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/**
 * Hybrid TTS speak button.
 *
 * Priority chain:
 *  1. Cached/cloud audio via /api/tts/generate (OpenAI → ElevenLabs)
 *  2. Browser SpeechSynthesis API (free fallback)
 */
export default function SpeakButton({
  text,
  label = "Hear It",
  className,
  voice: voiceProp,
  lessonId,
}: SpeakButtonProps) {
  const { voice: preferredVoice } = useVoicePreference();
  const voice = voiceProp ?? preferredVoice;
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  /** Stop any currently playing audio */
  const stopAll = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    utteranceRef.current = null;
    setIsSpeaking(false);
    setIsLoading(false);
  }, []);

  // Stop audio on unmount to prevent leaks
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  /** Fallback: use browser SpeechSynthesis API */
  const speakWithBrowser = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;
    utterance.pitch = 1.06;
    utterance.lang = "en-US";
    // Attempt to match the user's selected voice
    const browserVoices = window.speechSynthesis.getVoices();
    const match = browserVoices.find((v) => v.name.toLowerCase().includes(voice));
    if (match) utterance.voice = match;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => { setIsSpeaking(false); setIsLoading(false); };
    utterance.onerror = () => { setIsSpeaking(false); setIsLoading(false); };
    utteranceRef.current = utterance;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }, [text, voice]);

  /** Primary: try cloud TTS via API → fallback to browser */
  const handleClick = useCallback(async () => {
    // If already speaking/loading, stop
    if (isSpeaking || isLoading) {
      stopAll();
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/tts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: text.slice(0, 4096),
          voice,
          lessonId,
        }),
      });

      if (!res.ok) {
        // API returned error — fall back to browser TTS
        speakWithBrowser();
        return;
      }

      const data = await res.json();

      if (data.fallback === "browser" || !data.audioUrl) {
        speakWithBrowser();
        return;
      }

      // Play the cloud-generated audio
      const audio = new Audio(data.audioUrl);
      audioRef.current = audio;

      audio.onplay = () => { setIsSpeaking(true); setIsLoading(false); };
      audio.onended = () => { setIsSpeaking(false); audioRef.current = null; };
      audio.onerror = () => {
        // Audio failed to load — fall back to browser
        audioRef.current = null;
        speakWithBrowser();
      };

      await audio.play();
    } catch {
      // Network error — fall back to browser TTS
      speakWithBrowser();
    }
  }, [text, voice, lessonId, isSpeaking, isLoading, stopAll, speakWithBrowser]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isLoading && !isSpeaking}
      className={joinClasses(
        "ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 active:scale-95",
        isSpeaking
          ? "border-sky-400 bg-sky-100 text-sky-900 shadow-sm border-accent/65 dark:bg-sky-500/18 dark:text-sky-100 dark:shadow-sky-950/40"
          : isLoading
            ? "border-sky-200 bg-sky-50/60 text-sky-700 border-accent/45 dark:bg-slate-900/40 dark:text-sky-200"
            : "border-sky-300 bg-sky-50 text-sky-900 hover:bg-sky-100 border-accent/55 dark:bg-slate-900/58 dark:text-sky-100 dark:hover:bg-slate-800/72",
        className,
      )}
      aria-label={
        isSpeaking
          ? "Stop reading aloud"
          : isLoading
            ? "Loading voice…"
            : `Read aloud: ${text}`
      }
      title={
        isSpeaking
          ? "Tap to stop"
          : isLoading
            ? "Loading voice…"
            : "Read aloud"
      }
    >
      {isLoading && !isSpeaking ? (
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-sky-400 border-t-transparent" aria-hidden="true" />
      ) : isSpeaking ? (
        <span className="inline-flex items-end gap-px" aria-hidden="true">
          <span className="explore-sound-bar h-3 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
          <span className="explore-sound-bar h-4 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
          <span className="explore-sound-bar h-2.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
          <span className="explore-sound-bar h-3.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
        </span>
      ) : null}
      {label}
    </button>
  );
}
