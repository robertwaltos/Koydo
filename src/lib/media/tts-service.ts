/**
 * TTS Service — Hybrid text-to-speech with provider fallback chain.
 *
 * Flow:  Check cache → OpenAI tts-1 → ElevenLabs (technical fallback) → browser TTS
 *
 * Generated audio is cached in Supabase Storage (`tts-audio` bucket) so each
 * unique text+voice combination is only ever generated once.
 */

import { serverEnv } from "@/lib/config/env";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import crypto from "crypto";

// ── Types ──────────────────────────────────────────────────────────────────

export type TTSProvider = "openai" | "elevenlabs" | "browser";

export const OPENAI_VOICES = [
  { id: "alloy", label: "Alloy", description: "Neutral, warm" },
  { id: "echo", label: "Echo", description: "Smooth, reflective" },
  { id: "fable", label: "Fable", description: "Expressive, British" },
  { id: "onyx", label: "Onyx", description: "Deep, authoritative" },
  { id: "nova", label: "Nova", description: "Friendly, energetic" },
  { id: "shimmer", label: "Shimmer", description: "Clear, gentle" },
] as const;

export type OpenAIVoice = (typeof OPENAI_VOICES)[number]["id"];

export interface TTSRequest {
  text: string;
  voice?: OpenAIVoice;
  /** Optional lesson ID for cache key namespacing */
  lessonId?: string;
  /** Skip cache and regenerate */
  skipCache?: boolean;
}

export interface TTSResult {
  audioUrl: string;
  provider: TTSProvider;
  cached: boolean;
  durationEstimateMs?: number;
}

// ── Cache helpers ──────────────────────────────────────────────────────────

/** Deterministic hash for cache key from text + voice */
function cacheKey(text: string, voice: string): string {
  const hash = crypto
    .createHash("sha256")
    .update(`${voice}:${text}`)
    .digest("hex")
    .slice(0, 16);
  return `${voice}/${hash}.mp3`;
}

/** Rough estimate: English speech ~150 wpm, ~5 chars/word */
function estimateDurationMs(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.round((words / 150) * 60 * 1000);
}

// ── Supabase Storage cache ─────────────────────────────────────────────────

async function getCachedAudio(key: string): Promise<string | null> {
  try {
    const supabase = createSupabaseAdminClient();
    const bucket = serverEnv.TTS_CACHE_BUCKET;

    // Check if file exists by getting public URL (works even if not yet created)
    const { data } = supabase.storage.from(bucket).getPublicUrl(key);

    if (!data?.publicUrl) return null;

    // Verify file actually exists by listing
    const parts = key.split("/");
    const folder = parts.slice(0, -1).join("/");
    const fileName = parts.at(-1) ?? "";

    const { data: files } = await supabase.storage
      .from(bucket)
      .list(folder, { limit: 1, search: fileName });

    if (!files || files.length === 0) return null;

    return data.publicUrl;
  } catch (err) {
    console.warn("[tts-service] cache lookup failed:", err);
    return null;
  }
}

async function setCachedAudio(key: string, audioBuffer: Buffer): Promise<string | null> {
  try {
    const supabase = createSupabaseAdminClient();
    const bucket = serverEnv.TTS_CACHE_BUCKET;

    const { error } = await supabase.storage.from(bucket).upload(key, audioBuffer, {
      contentType: "audio/mpeg",
      cacheControl: "public, max-age=31536000, immutable",
      upsert: true,
    });

    if (error) {
      console.warn("[tts-service] cache write failed:", error.message);
      return null;
    }

    const { data } = supabase.storage.from(bucket).getPublicUrl(key);
    return data?.publicUrl ?? null;
  } catch (err) {
    console.warn("[tts-service] cache write error:", err);
    return null;
  }
}

// ── OpenAI TTS Provider ────────────────────────────────────────────────────

async function generateOpenAI(text: string, voice: OpenAIVoice): Promise<Buffer> {
  const apiKey = serverEnv.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY not configured");

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: serverEnv.TTS_OPENAI_MODEL,
      input: text,
      voice,
      response_format: "mp3",
      speed: 0.95, // slightly slower for educational content
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`OpenAI TTS error ${response.status}: ${body}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ── ElevenLabs TTS Provider (technical fallback) ───────────────────────────

/** Map OpenAI voice names to ElevenLabs voice IDs.
 *  Using ElevenLabs' popular pre-made voices as equivalents. */
const ELEVENLABS_VOICE_MAP: Record<OpenAIVoice, string> = {
  alloy: "21m00Tcm4TlvDq8ikWAM",    // Rachel — neutral
  echo: "29vD33N1CtxCmqQRPOHJ",      // Drew — smooth
  fable: "EXAVITQu4vr4xnSDxMaL",     // Bella — expressive
  onyx: "ErXwobaYiN019PkySvjV",       // Antoni — deep
  nova: "MF3mGyEYCl7XYWbV9V6O",       // Elli — friendly
  shimmer: "jsCqWAovK2LkecY7zXl4",    // Freya — clear
};

async function generateElevenLabs(text: string, voice: OpenAIVoice): Promise<Buffer> {
  const apiKey = serverEnv.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY not configured");

  const voiceId = ELEVENLABS_VOICE_MAP[voice] ?? serverEnv.TTS_ELEVENLABS_DEFAULT_VOICE;

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "audio/mpeg",
      },
      body: JSON.stringify({
        text,
        model_id: serverEnv.TTS_ELEVENLABS_MODEL,
        voice_settings: {
          stability: 0.6,
          similarity_boost: 0.75,
          style: 0.3,
          use_speaker_boost: true,
        },
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`ElevenLabs TTS error ${response.status}: ${body}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

// ── Main TTS function with fallback chain ──────────────────────────────────

export async function generateTTS(request: TTSRequest): Promise<TTSResult> {
  const voice: OpenAIVoice = request.voice ?? (serverEnv.TTS_OPENAI_DEFAULT_VOICE as OpenAIVoice);
  const key = cacheKey(request.text, voice);

  // 1. Check cache first
  if (!request.skipCache) {
    const cachedUrl = await getCachedAudio(key);
    if (cachedUrl) {
      return {
        audioUrl: cachedUrl,
        provider: "openai", // we don't track which provider originally generated
        cached: true,
        durationEstimateMs: estimateDurationMs(request.text),
      };
    }
  }

  // 2. Determine provider chain
  const primary = serverEnv.TTS_PRIMARY_PROVIDER;
  const fallback = serverEnv.TTS_FALLBACK_PROVIDER;

  const providers: Array<{ name: TTSProvider; generate: () => Promise<Buffer> }> = [];

  if (primary === "openai" || (primary !== "elevenlabs" && primary !== "browser")) {
    providers.push({ name: "openai", generate: () => generateOpenAI(request.text, voice) });
  }
  if (primary === "elevenlabs") {
    providers.push({ name: "elevenlabs", generate: () => generateElevenLabs(request.text, voice) });
  }

  // Add fallback
  if (fallback === "elevenlabs" && primary !== "elevenlabs") {
    providers.push({ name: "elevenlabs", generate: () => generateElevenLabs(request.text, voice) });
  }
  if (fallback === "openai" && primary !== "openai") {
    providers.push({ name: "openai", generate: () => generateOpenAI(request.text, voice) });
  }

  // 3. Try each provider
  let lastError: Error | null = null;

  for (const provider of providers) {
    try {
      const audioBuffer = await provider.generate();

      // Cache the result
      const publicUrl = await setCachedAudio(key, audioBuffer);

      if (publicUrl) {
        return {
          audioUrl: publicUrl,
          provider: provider.name,
          cached: false,
          durationEstimateMs: estimateDurationMs(request.text),
        };
      }

      // If cache write failed, return as base64 data URL
      const base64 = audioBuffer.toString("base64");
      return {
        audioUrl: `data:audio/mpeg;base64,${base64}`,
        provider: provider.name,
        cached: false,
        durationEstimateMs: estimateDurationMs(request.text),
      };
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
      console.warn(`[tts-service] ${provider.name} failed:`, lastError.message);
    }
  }

  // 4. All providers failed — signal client to use browser TTS
  throw new Error(
    `All TTS providers failed. Last error: ${lastError?.message ?? "unknown"}`
  );
}
