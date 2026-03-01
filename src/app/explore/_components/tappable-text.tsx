"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useVoicePreference } from "./voice-preference";
import { useTouchDevice } from "./use-touch-device";

type TappableTextProps = {
  /** The text content rendered AND read aloud */
  text: string;
  /** Extra CSS class on the wrapper */
  className?: string;
  /** Render children instead of plain text (children displayed, `text` is spoken) */
  children?: React.ReactNode;
  /** Show the desktop SpeakButton instead of inline icon on non-touch */
  desktopButton?: boolean;
  /** Label for the desktop SpeakButton */
  buttonLabel?: string;
};

/**
 * Touch-optimized text wrapper.
 *
 * • Touch devices: tapping anywhere on the text triggers TTS.
 *   A small 🔊 icon appears as a subtle affordance.
 * • Desktop: shows a compact "Hear It" button alongside the text (optional).
 */
export default function TappableText({
  text,
  className,
  children,
  desktopButton = true,
  buttonLabel = "Hear It",
}: TappableTextProps) {
  const isTouch = useTouchDevice();
  const { voice } = useVoicePreference();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const stopAll = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsLoading(false);
  }, []);

  // Stop audio on unmount to prevent leaks
  useEffect(() => {
    return () => {
      stopAll();
    };
  }, [stopAll]);

  const speakBrowser = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9;
    u.pitch = 1.06;
    u.lang = "en-US";
    // Attempt to match the user's selected voice
    const browserVoices = window.speechSynthesis.getVoices();
    const match = browserVoices.find((v) => v.name.toLowerCase().includes(voice));
    if (match) u.voice = match;
    u.onstart = () => setIsSpeaking(true);
    u.onend = () => {
      setIsSpeaking(false);
      setIsLoading(false);
    };
    u.onerror = () => {
      setIsSpeaking(false);
      setIsLoading(false);
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  }, [text, voice]);

  const handleSpeak = useCallback(async () => {
    if (isSpeaking || isLoading) {
      stopAll();
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/tts/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: text.slice(0, 4096), voice }),
      });
      if (!res.ok) {
        speakBrowser();
        return;
      }
      const data = await res.json();
      if (data.fallback === "browser" || !data.audioUrl) {
        speakBrowser();
        return;
      }
      const audio = new Audio(data.audioUrl);
      audioRef.current = audio;
      audio.onplay = () => {
        setIsSpeaking(true);
        setIsLoading(false);
      };
      audio.onended = () => {
        setIsSpeaking(false);
        audioRef.current = null;
      };
      audio.onerror = () => {
        audioRef.current = null;
        speakBrowser();
      };
      await audio.play();
    } catch {
      speakBrowser();
    }
  }, [text, voice, isSpeaking, isLoading, stopAll, speakBrowser]);

  /* ── Touch layout: entire area is tappable ── */
  if (isTouch) {
    return (
      <button
        type="button"
        onClick={handleSpeak}
        className={`group relative w-full cursor-pointer text-left ${className ?? ""}`}
        aria-label={isSpeaking ? "Stop reading" : `Tap to hear: ${text.slice(0, 60)}`}
      >
        {/* Tiny speaker affordance */}
        <span
          className={`absolute -right-1 -top-1 z-10 flex h-6 w-6 items-center justify-center rounded-full text-xs transition-all ${
            isSpeaking
              ? "bg-sky-500 text-white shadow-sm"
              : isLoading
                ? "bg-sky-200 text-sky-600"
                : "bg-zinc-100 text-zinc-400 opacity-60 group-active:opacity-100 dark:bg-slate-700 dark:text-slate-400"
          }`}
          aria-hidden="true"
        >
          {isLoading ? (
            <span className="inline-block h-3 w-3 animate-spin rounded-full border-[1.5px] border-sky-500 border-t-transparent" />
          ) : isSpeaking ? (
            <span className="inline-flex items-end gap-px">
              <span className="explore-sound-bar h-2 w-px rounded-full bg-white" />
              <span className="explore-sound-bar h-2.5 w-px rounded-full bg-white" />
              <span className="explore-sound-bar h-1.5 w-px rounded-full bg-white" />
            </span>
          ) : (
            /* Speaker icon */
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
              <path d="M10.5 3.75a.75.75 0 00-1.264-.546L5.203 7H2.667a.75.75 0 00-.7.48A6.985 6.985 0 001.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 001.264-.546V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" />
            </svg>
          )}
        </span>
        {children ?? text}
      </button>
    );
  }

  /* ── Desktop layout: optional inline "Hear It" button ── */
  if (!desktopButton) {
    return <>{children ?? text}</>;
  }

  return (
    <span className={`inline-flex items-start gap-2 ${className ?? ""}`}>
      <span className="flex-1">{children ?? text}</span>
      <button
        type="button"
        onClick={handleSpeak}
        disabled={isLoading && !isSpeaking}
        className="ui-focus-ring ui-soft-button mt-0.5 inline-flex shrink-0 items-center gap-1 rounded-full border border-accent/55 bg-sky-50 px-2.5 py-1 text-xs font-semibold text-sky-900 transition hover:bg-sky-100 active:scale-95 dark:bg-slate-900/58 dark:text-sky-100"
        aria-label={isSpeaking ? "Stop reading" : `Read aloud: ${text.slice(0, 60)}`}
        title={isSpeaking ? "Stop" : "Read aloud"}
      >
        {isLoading && !isSpeaking ? (
          <span className="inline-block h-3 w-3 animate-spin rounded-full border-[1.5px] border-sky-400 border-t-transparent" aria-hidden="true" />
        ) : isSpeaking ? (
          <span className="inline-flex items-end gap-px" aria-hidden="true">
            <span className="explore-sound-bar h-2 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
            <span className="explore-sound-bar h-2.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
            <span className="explore-sound-bar h-1.5 w-0.5 rounded-full bg-sky-600 dark:bg-sky-200" />
          </span>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3" aria-hidden="true">
            <path d="M10.5 3.75a.75.75 0 00-1.264-.546L5.203 7H2.667a.75.75 0 00-.7.48A6.985 6.985 0 001.5 10c0 .887.165 1.737.468 2.52.111.29.39.48.7.48h2.535l4.033 3.796a.75.75 0 001.264-.546V3.75zM15.95 5.05a.75.75 0 00-1.06 1.061 5.5 5.5 0 010 7.778.75.75 0 001.06 1.06 7 7 0 000-9.899z" />
          </svg>
        )}
        {buttonLabel}
      </button>
    </span>
  );
}
