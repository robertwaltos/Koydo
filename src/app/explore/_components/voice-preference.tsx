"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

/* ── Voice definitions ──────────────────────────────────────────────── */

export type VoiceId = "alloy" | "echo" | "fable" | "onyx" | "nova" | "shimmer";

export const VOICES: {
  id: VoiceId;
  label: string;
  desc: string;
  emoji: string;
}[] = [
  { id: "nova", label: "Nova", desc: "Warm & clear", emoji: "🌟" },
  { id: "shimmer", label: "Shimmer", desc: "Bright & friendly", emoji: "✨" },
  { id: "alloy", label: "Alloy", desc: "Balanced & neutral", emoji: "⚙️" },
  { id: "fable", label: "Fable", desc: "Expressive & British", emoji: "📖" },
  { id: "echo", label: "Echo", desc: "Smooth & calm", emoji: "🔊" },
  { id: "onyx", label: "Onyx", desc: "Deep & authoritative", emoji: "🎙️" },
];

const DEFAULT_VOICE: VoiceId = "nova";
const STORAGE_KEY = "koydo.explore.voice_preference";

/* ── Context ────────────────────────────────────────────────────────── */

type VoicePreferenceContextValue = {
  voice: VoiceId;
  setVoice: (v: VoiceId) => void;
};

const VoicePreferenceContext =
  createContext<VoicePreferenceContextValue | null>(null);

export function VoicePreferenceProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [voice, setVoiceState] = useState<VoiceId>(DEFAULT_VOICE);

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && VOICES.some((v) => v.id === stored)) {
        setVoiceState(stored as VoiceId);
      }
    } catch {
      // Storage unavailable
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist changes
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, voice);
    } catch {
      // Non-blocking
    }
  }, [isHydrated, voice]);

  const value = useMemo<VoicePreferenceContextValue>(
    () => ({ voice, setVoice: setVoiceState }),
    [voice],
  );

  return (
    <VoicePreferenceContext.Provider value={value}>
      {children}
    </VoicePreferenceContext.Provider>
  );
}

export function useVoicePreference() {
  const ctx = useContext(VoicePreferenceContext);
  if (!ctx) {
    // Fallback: when used outside provider, return default
    return { voice: DEFAULT_VOICE as VoiceId, setVoice: () => {} };
  }
  return ctx;
}
