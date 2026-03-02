/**
 * TTS child-guard presets for Koydo.
 * Maps age tiers to safe TTS configuration defaults (rate, pitch, voice type).
 */

import type { AgeTier } from "@/lib/safety/age-tier";

export interface TtsConfig {
  /** Relative speech rate.  1.0 = normal, <1 = slower, >1 = faster */
  rate: number;
  /** Pitch offset in semitones.  0 = neutral */
  pitch: number;
  /** Preferred voice gender for TTS providers that support it */
  preferVoiceGender: "female" | "male" | "neutral";
  /** Max characters per utterance before we split / paginate */
  maxCharsPerUtterance: number;
  /** Whether to enable word-by-word highlighting (read-aloud) */
  wordHighlight: boolean;
}

export const DEFAULT_TTS_CONFIG_BY_TIER: Record<AgeTier, TtsConfig> = {
  little: {
    rate: 0.8,
    pitch: 2,
    preferVoiceGender: "female",
    maxCharsPerUtterance: 120,
    wordHighlight: true,
  },
  explorer: {
    rate: 0.9,
    pitch: 1,
    preferVoiceGender: "female",
    maxCharsPerUtterance: 200,
    wordHighlight: true,
  },
  teen: {
    rate: 1.0,
    pitch: 0,
    preferVoiceGender: "neutral",
    maxCharsPerUtterance: 350,
    wordHighlight: false,
  },
  senior: {
    rate: 1.05,
    pitch: 0,
    preferVoiceGender: "neutral",
    maxCharsPerUtterance: 500,
    wordHighlight: false,
  },
  adult: {
    rate: 1.1,
    pitch: 0,
    preferVoiceGender: "neutral",
    maxCharsPerUtterance: 1000,
    wordHighlight: false,
  },
};

/**
 * Return the TTS config for a given age tier, with optional overrides.
 */
export function getTtsConfig(
  tier: AgeTier,
  overrides?: Partial<TtsConfig>,
): TtsConfig {
  return { ...DEFAULT_TTS_CONFIG_BY_TIER[tier], ...overrides };
}
