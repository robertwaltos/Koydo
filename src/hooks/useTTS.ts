"use client";

import { useCallback, useRef, useState } from "react";

interface UseTTSOptions {
  /** OpenAI voice ID (e.g. "nova", "echo", "alloy") */
  voice?: string;
  /** Optional lesson scoping for analytics */
  lessonId?: string;
}

interface TTSControls {
  speak: (text: string) => void;
  stop: () => void;
  isPlaying: boolean;
}

/**
 * useTTS
 *
 * Client-side hook that converts text to speech using the /api/tts/generate
 * endpoint (OpenAI → ElevenLabs → browser SpeechSynthesis fallback chain).
 *
 * Usage:
 *   const tts = useTTS({ voice: "nova", lessonId: "companion" });
 *   tts.speak("Hello!");
 *   tts.stop();
 */
export function useTTS({ voice = "nova", lessonId }: UseTTSOptions = {}): TTSControls {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    synthRef.current = null;
    setIsPlaying(false);
  }, []);

  const speak = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      // Stop any current playback
      stop();

      setIsPlaying(true);

      try {
        const res = await fetch("/api/tts/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: text.slice(0, 4096), voice, lessonId }),
        });

        if (!res.ok) {
          throw new Error(`TTS API ${res.status}`);
        }

        const data = await res.json() as { audioUrl?: string; fallback?: string; error?: string };

        if (data.fallback === "browser") {
          // Browser SpeechSynthesis fallback
          if (typeof window !== "undefined" && window.speechSynthesis) {
            const utter = new SpeechSynthesisUtterance(text);
            utter.rate = 0.95;
            utter.pitch = 1.0;
            utter.onend = () => setIsPlaying(false);
            utter.onerror = () => setIsPlaying(false);
            synthRef.current = utter;
            window.speechSynthesis.speak(utter);
          } else {
            setIsPlaying(false);
          }
          return;
        }

        if (!data.audioUrl) {
          throw new Error("No audio URL in TTS response");
        }

        const audio = new Audio(data.audioUrl);
        audioRef.current = audio;
        audio.onended = () => { audioRef.current = null; setIsPlaying(false); };
        audio.onerror = () => { audioRef.current = null; setIsPlaying(false); };
        await audio.play();
      } catch (_err) {
        // Silent fallback to browser TTS on any error
        setIsPlaying(false);
        try {
          if (typeof window !== "undefined" && window.speechSynthesis) {
            const utter = new SpeechSynthesisUtterance(text);
            utter.rate = 0.95;
            utter.onend = () => setIsPlaying(false);
            synthRef.current = utter;
            window.speechSynthesis.speak(utter);
            setIsPlaying(true);
          }
        } catch { /* ignore */ }
      }
    },
    [voice, lessonId, stop],
  );

  return { speak, stop, isPlaying };
}
