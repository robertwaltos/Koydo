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
  { id: "shimmer", label: "Shimmer", desc: "Friendly & bright — great for stories", emoji: "✨" },
  { id: "nova",    label: "Nova",    desc: "Warm & clear — the all-rounder",       emoji: "🌟" },
  { id: "alloy",   label: "Alloy",   desc: "Balanced & neutral",                   emoji: "⚙️" },
  { id: "fable",   label: "Fable",   desc: "Expressive & British — classic tales",  emoji: "📖" },
  { id: "echo",    label: "Echo",    desc: "Smooth & calm — study companion",       emoji: "🔊" },
  { id: "onyx",    label: "Onyx",    desc: "Deep & strong — non-fiction narrator",  emoji: "🎙️" },
];

const DEFAULT_VOICE: VoiceId = "nova";

/* ── Age-aware default voice ───────────────────────────────────────── */

/**
 * Returns an age-appropriate default voice based on the learner's AgeTier.
 * Tier values: "little" (3-5), "explorer" (6-10), "teen" (11-16),
 *              "senior" (17), "adult" (18+).
 * Users can always override via the voice picker.
 */
export function getDefaultVoiceForAge(ageTier?: string): VoiceId {
  switch (ageTier) {
    case "little":     // 3-5
    case "explorer":   // 6-10
      return "shimmer";  // Friendly, bright — best for young learners
    case "teen":       // 11-16
      return "nova";     // Warm, clear
    case "senior":     // 17
      return "alloy";    // Balanced
    case "adult":      // 18+
      return "echo";     // Smooth, calm
    default:
      return "nova";
  }
}
const STORAGE_KEY = "koydo.explore.voice_preference";

/* ── Context ────────────────────────────────────────────────────────── */

type VoicePreferenceContextValue = {
  voice: VoiceId;
  setVoice: (v: VoiceId) => void;
};

const VoicePreferenceContext =
  createContext<VoicePreferenceContextValue | null>(null);

export function VoicePreferenceProvider({
  children,
  ageTier,
}: {
  children: ReactNode;
  /** Optional age tier — used to pick an age-appropriate default when no preference is stored */
  ageTier?: string;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hasStoredPref, setHasStoredPref] = useState(false);
  const ageDefault = ageTier ? getDefaultVoiceForAge(ageTier) : DEFAULT_VOICE;
  const [voice, setVoiceState] = useState<VoiceId>(ageDefault);

  // Hydrate from localStorage (stored preference overrides age default)
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && VOICES.some((v) => v.id === stored)) {
        setVoiceState(stored as VoiceId);
        setHasStoredPref(true);
      }
    } catch {
      // Storage unavailable
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // When ageTier arrives async (profile loads after mount), apply
  // the age-appropriate default — but only if user has no stored preference
  useEffect(() => {
    if (!isHydrated || hasStoredPref) return;
    setVoiceState(ageDefault);
  }, [isHydrated, hasStoredPref, ageDefault]);

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
