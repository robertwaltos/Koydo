/**
 * FORGE — Multilingual Media Service
 *
 * Hybrid cache-on-demand pipeline for multilingual media:
 *   1. Pre-generate English media (images, TTS, video) as the baseline
 *   2. On first request for a non-English locale, generate + cache the result
 *   3. Subsequent requests served from Supabase Storage cache
 *
 * Images are language-agnostic (no text overlays) — same image for all locales.
 * TTS/audio is locale-specific — cached per language + voice.
 * Video (HeyGen) can be translated — cached per language.
 *
 * Launch languages: en, es, zh, pl (full functionality)
 * Prepared languages: fr, de, ar, hi, ja, ko, ru (locked in UI)
 */

import { LAUNCH_LOCALES, type Locale } from "@/lib/i18n/translations";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

// ── Language → TTS Voice Mapping ────────────────────────────────────────────

export interface LocaleVoiceMapping {
  locale: Locale;
  /** BCP-47 code for TTS provider */
  bcp47: string;
  /** OpenAI TTS voice ID (same 6 voices work for all languages) */
  openaiVoice: string;
  /** Gemini 2.5 Flash TTS prebuilt voice name (language auto-detected) */
  geminiVoice: string;
  /** ElevenLabs voice ID (multilingual v2 supports all launch languages) */
  elevenlabsVoice: string;
  /** Kokoro local voice prefix (null = not supported, use XTTS v2) */
  kokoroLangCode: string | null;
  /** XTTS v2 support (fallback for languages Kokoro doesn't cover) */
  xttsSupported: boolean;
  /** Default speaking speed for this language */
  defaultSpeed: number;
}

export const LOCALE_VOICE_MAP: Record<string, LocaleVoiceMapping> = {
  en: {
    locale: "en" as Locale,
    bcp47: "en-US",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM", // Rachel
    kokoroLangCode: "a", // American English
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  es: {
    locale: "es" as Locale,
    bcp47: "es-ES",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: "e", // Spanish
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  zh: {
    locale: "zh" as Locale,
    bcp47: "zh-CN",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: "z", // Mandarin Chinese
    xttsSupported: true,
    defaultSpeed: 0.95,
  },
  pl: {
    locale: "pl" as Locale,
    bcp47: "pl-PL",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: null, // Kokoro doesn't support Polish
    xttsSupported: true, // XTTS v2 does
    defaultSpeed: 1.0,
  },
  fr: {
    locale: "fr" as Locale,
    bcp47: "fr-FR",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: "f",
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  de: {
    locale: "de" as Locale,
    bcp47: "de-DE",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: null, // XTTS only
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  ar: {
    locale: "ar" as Locale,
    bcp47: "ar-SA",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: null,
    xttsSupported: true,
    defaultSpeed: 0.95,
  },
  hi: {
    locale: "hi" as Locale,
    bcp47: "hi-IN",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: "h",
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  ja: {
    locale: "ja" as Locale,
    bcp47: "ja-JP",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: "j",
    xttsSupported: true,
    defaultSpeed: 0.95,
  },
  ko: {
    locale: "ko" as Locale,
    bcp47: "ko-KR",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: null,
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
  ru: {
    locale: "ru" as Locale,
    bcp47: "ru-RU",
    openaiVoice: "nova",
    geminiVoice: "Sulafat",
    elevenlabsVoice: "21m00Tcm4TlvDq8ikWAM",
    kokoroLangCode: null,
    xttsSupported: true,
    defaultSpeed: 1.0,
  },
};

// ── Language Gate ────────────────────────────────────────────────────────────

const LAUNCH_SET = new Set<string>(LAUNCH_LOCALES as readonly string[]);

/** Check if a locale is a launch language (full functionality) */
export function isLaunchLocale(locale: string): boolean {
  return LAUNCH_SET.has(locale);
}

/** Check if a locale is supported at all */
export function isSupportedMediaLocale(locale: string): boolean {
  return locale in LOCALE_VOICE_MAP;
}

/**
 * Resolve which locale to use for media.
 * - Launch locales: return as-is
 * - Supported but locked: return "en" (English fallback)
 * - Unknown: return "en"
 */
export function resolveMediaLocale(requestedLocale: string): string {
  if (isLaunchLocale(requestedLocale)) return requestedLocale;
  return "en";
}

// ── Cache Key Builders ──────────────────────────────────────────────────────

/** TTS audio cache key: tts-audio/{locale}/{voiceId}/{contentHash}.mp3 */
export function buildTtsCacheKey(locale: string, voiceId: string, contentHash: string): string {
  return `${locale}/${voiceId}/${contentHash}.mp3`;
}

/** Companion intro cache key: heygen/companion-intro/{gender}/{locale}.mp4 */
export function buildCompanionIntroCacheKey(gender: string, locale: string): string {
  return `heygen/companion-intro/${gender}/${locale}.mp4`;
}

/** Avatar lesson cache key: heygen/{moduleId}/{lessonId}/{locale}.mp4 */
export function buildAvatarLessonCacheKey(moduleId: string, lessonId: string, locale: string): string {
  return `heygen/${moduleId}/${lessonId}/${locale}.mp4`;
}

// ── Cache-on-Demand Resolver ────────────────────────────────────────────────

export interface CachedMediaResult {
  url: string;
  locale: string;
  cached: boolean;
  provider: string;
}

/**
 * Resolve media for a specific locale.
 * Images are language-agnostic, so we always return the English version.
 * TTS/video checks cache first, then the English fallback.
 */
export async function resolveLocalizedMedia(opts: {
  moduleId: string;
  lessonId: string;
  assetType: "image" | "thumbnail" | "concept-clip" | "avatar-lesson" | "companion-intro";
  locale: string;
}): Promise<CachedMediaResult | null> {
  const { moduleId, lessonId, assetType, locale } = opts;
  const effectiveLocale = resolveMediaLocale(locale);

  // Images and thumbnails are language-agnostic
  if (assetType === "image" || assetType === "thumbnail" || assetType === "concept-clip") {
    return resolveFromJobsTable(moduleId, lessonId, assetType);
  }

  // For audio/video: check locale-specific cache first
  if (effectiveLocale !== "en") {
    const localeResult = await resolveFromJobsTable(
      moduleId,
      assetType === "companion-intro" ? `${lessonId}-${effectiveLocale}` : `${lessonId}-${effectiveLocale}`,
      assetType,
    );
    if (localeResult) return { ...localeResult, locale: effectiveLocale };
  }

  // Fall back to English
  const enResult = await resolveFromJobsTable(moduleId, lessonId, assetType);
  if (enResult) return { ...enResult, locale: "en" };

  return null;
}

async function resolveFromJobsTable(
  moduleId: string,
  lessonId: string,
  assetType: string,
): Promise<CachedMediaResult | null> {
  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("media_generation_jobs")
    .select("output_url, metadata")
    .eq("module_id", moduleId)
    .eq("lesson_id", lessonId)
    .eq("asset_type", assetType)
    .eq("status", "completed")
    .order("completed_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data?.output_url) return null;

  return {
    url: data.output_url,
    locale: (data.metadata as Record<string, string>)?.locale || "en",
    cached: true,
    provider: (data.metadata as Record<string, string>)?.provider || "unknown",
  };
}

// ── Multilingual TTS Parameters ─────────────────────────────────────────────

/**
 * Get TTS parameters for a given locale.
 * Used by the TTS service to set the correct voice/speed.
 */
export function getTtsParams(locale: string): {
  voice: string;
  speed: number;
  bcp47: string;
} {
  const mapping = LOCALE_VOICE_MAP[locale] ?? LOCALE_VOICE_MAP.en;
  return {
    voice: mapping.openaiVoice,
    speed: mapping.defaultSpeed,
    bcp47: mapping.bcp47,
  };
}

/**
 * Get the preferred TTS engine for a locale.
 * Cloud engines (OpenAI/ElevenLabs) support all locales.
 * Local engines: Kokoro supports 8 languages, XTTS v2 covers the rest.
 */
export function getLocalTtsEngine(locale: string): "kokoro" | "xtts" | null {
  const mapping = LOCALE_VOICE_MAP[locale];
  if (!mapping) return null;
  if (mapping.kokoroLangCode) return "kokoro";
  if (mapping.xttsSupported) return "xtts";
  return null;
}

// ── HeyGen Language Code Mapping ────────────────────────────────────────────

/** Maps our locale codes to HeyGen's accepted language codes for translation */
export const HEYGEN_LANGUAGE_MAP: Record<string, string> = {
  en: "en",
  es: "es",
  zh: "zh",
  pl: "pl",
  fr: "fr",
  de: "de",
  ar: "ar",
  hi: "hi",
  ja: "ja",
  ko: "ko",
  ru: "ru",
};

/**
 * Get HeyGen-compatible language code.
 * Returns null if translation is not supported.
 */
export function getHeyGenLanguageCode(locale: string): string | null {
  return HEYGEN_LANGUAGE_MAP[locale] ?? null;
}
