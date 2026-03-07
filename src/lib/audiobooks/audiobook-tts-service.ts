/**
 * Audiobook TTS Service — generates and caches chapter-level audio.
 *
 * Extends the existing TTS infrastructure with book-aware cache keys:
 *   audiobooks/{bookSlug}/{lang}/{voiceId}/ch{NNN}.mp3
 *
 * Flow:
 *   1. Check Supabase Storage cache for existing audio
 *   2. Cache miss → call existing TTS provider chain (Gemini → OpenAI)
 *   3. Store result in Supabase Storage with immutable cache headers
 *   4. Return public URL (subsequent requests are $0)
 *
 * For long chapters (>4096 chars), text is split into segments, generated
 * individually, then concatenated before caching.
 */

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { generateTTS, type TTSProvider } from "@/lib/media/tts-service";

import {
  audiobookCacheKey,
  type AudiobookLanguage,
  type AudiobookTTSRequest,
  type AudiobookTTSResult,
} from "@/lib/audiobooks/types";
import type { OpenAIVoice } from "@/lib/media/tts-service";

/* ── Constants ─────────────────────────────────────────────────────── */

const AUDIOBOOK_BUCKET = "tts-audio"; // reuse existing bucket with audiobooks/ prefix
const MAX_TTS_CHARS = 4096; // OpenAI TTS max input length

/* ── Cache helpers ─────────────────────────────────────────────────── */

async function getCachedAudiobookAudio(key: string): Promise<string | null> {
  try {
    const supabase = createSupabaseAdminClient();
    const { data } = supabase.storage.from(AUDIOBOOK_BUCKET).getPublicUrl(key);
    if (!data?.publicUrl) return null;

    // Verify file actually exists
    const parts = key.split("/");
    const folder = parts.slice(0, -1).join("/");
    const fileName = parts.at(-1) ?? "";

    const { data: files } = await supabase.storage
      .from(AUDIOBOOK_BUCKET)
      .list(folder, { limit: 1, search: fileName });

    if (!files || files.length === 0) return null;
    return data.publicUrl;
  } catch {
    return null;
  }
}

async function setCachedAudiobookAudio(
  key: string,
  audioBuffer: Buffer,
  contentType: "audio/mpeg" | "audio/wav" = "audio/mpeg",
): Promise<string | null> {
  try {
    const supabase = createSupabaseAdminClient();

    const { error } = await supabase.storage
      .from(AUDIOBOOK_BUCKET)
      .upload(key, audioBuffer, {
        contentType,
        cacheControl: "public, max-age=31536000, immutable",
        upsert: true,
      });

    if (error) {
      console.warn("[audiobook-tts] cache write failed:", error.message);
      return null;
    }

    const { data } = supabase.storage.from(AUDIOBOOK_BUCKET).getPublicUrl(key);
    return data?.publicUrl ?? null;
  } catch (err) {
    console.warn("[audiobook-tts] cache write error:", err);
    return null;
  }
}

/* ── Text splitting ────────────────────────────────────────────────── */

/**
 * Split long text into TTS-friendly segments at paragraph/sentence boundaries.
 * Each segment stays under MAX_TTS_CHARS.
 */
function splitTextForTTS(text: string): string[] {
  if (text.length <= MAX_TTS_CHARS) return [text];

  const paragraphs = text.split(/\n\n+/);
  const segments: string[] = [];
  let current = "";

  for (const paragraph of paragraphs) {
    // If a single paragraph exceeds the limit, split by sentences
    if (paragraph.length > MAX_TTS_CHARS) {
      if (current.trim()) {
        segments.push(current.trim());
        current = "";
      }
      const sentences = paragraph.match(/[^.!?]+[.!?]+\s*/g) ?? [paragraph];
      for (const sentence of sentences) {
        if ((current + sentence).length > MAX_TTS_CHARS) {
          if (current.trim()) segments.push(current.trim());
          current = sentence;
        } else {
          current += sentence;
        }
      }
      continue;
    }

    const candidate = current ? `${current}\n\n${paragraph}` : paragraph;
    if (candidate.length > MAX_TTS_CHARS) {
      if (current.trim()) segments.push(current.trim());
      current = paragraph;
    } else {
      current = candidate;
    }
  }

  if (current.trim()) segments.push(current.trim());
  return segments;
}

/* ── Audio format helpers ──────────────────────────────────────────── */

/** Check if a buffer starts with RIFF/WAVE magic bytes (WAV format) */
function isWavBuffer(buf: Buffer): boolean {
  return buf.length >= 12 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WAVE";
}

/**
 * Concatenate multiple audio buffers, handling both MP3 and WAV formats.
 *
 * - MP3: frames are self-contained, simple concat works.
 * - WAV: strip the 44-byte header from all but the first segment,
 *   then rebuild the first header with the total data size.
 */
function concatAudioBuffers(buffers: Buffer[]): { audio: Buffer; isWav: boolean } {
  if (buffers.length === 0) return { audio: Buffer.alloc(0), isWav: false };
  if (buffers.length === 1) return { audio: buffers[0], isWav: isWavBuffer(buffers[0]) };

  const wav = isWavBuffer(buffers[0]);
  if (!wav) {
    // MP3 — simple concatenation
    return { audio: Buffer.concat(buffers), isWav: false };
  }

  // WAV — extract PCM data from each segment, then re-wrap with a single header
  const WAV_HEADER_SIZE = 44;
  const pcmChunks = buffers.map((buf, i) =>
    i === 0 ? buf.subarray(WAV_HEADER_SIZE) : buf.subarray(isWavBuffer(buf) ? WAV_HEADER_SIZE : 0),
  );
  const totalPcmSize = pcmChunks.reduce((sum, c) => sum + c.length, 0);

  // Rebuild WAV header from the first segment's header, updating sizes
  const header = Buffer.from(buffers[0].subarray(0, WAV_HEADER_SIZE));
  header.writeUInt32LE(36 + totalPcmSize, 4);   // ChunkSize
  header.writeUInt32LE(totalPcmSize, 40);         // Subchunk2Size (data)

  return { audio: Buffer.concat([header, ...pcmChunks]), isWav: true };
}

/* ── Duration estimation ───────────────────────────────────────────── */

function estimateDurationMs(text: string): number {
  const words = text.split(/\s+/).length;
  return Math.round((words / 150) * 60 * 1000);
}

/* ── Main function ─────────────────────────────────────────────────── */

/**
 * Generate (or retrieve cached) audiobook chapter audio.
 *
 * Uses the existing TTS provider chain for segment generation,
 * then concatenates segments and caches the full chapter.
 */
export async function generateAudiobookChapterTTS(
  request: AudiobookTTSRequest,
): Promise<AudiobookTTSResult> {
  const { bookSlug, chapterNumber, language: _lang, voiceId, chapterText } = request;
  const key = audiobookCacheKey(bookSlug, request.language, voiceId, chapterNumber);

  // 1. Check cache
  const cachedUrl = await getCachedAudiobookAudio(key);
  if (cachedUrl) {
    return {
      audioUrl: cachedUrl,
      cached: true,
      provider: "gemini", // primary provider; we don't track original provider in cache
      durationEstimateMs: estimateDurationMs(chapterText),
    };
  }

  // 2. Split text into TTS-friendly segments
  const segments = splitTextForTTS(chapterText);

  // 3. Generate audio for each segment using existing TTS service
  const audioBuffers: Buffer[] = [];
  let actualProvider: TTSProvider = "gemini";

  for (const segment of segments) {
    const result = await generateTTS({
      text: segment,
      voice: voiceId,
      skipCache: false,
    });

    // Track which provider was used (last segment's provider wins)
    actualProvider = result.provider;

    // Fetch the audio data from the URL to concatenate
    const response = await fetch(result.audioUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch segment audio: ${response.status}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    audioBuffers.push(Buffer.from(arrayBuffer));
  }

  // 4. Concatenate segments (handles both MP3 and WAV formats)
  const { audio: fullAudio, isWav } = concatAudioBuffers(audioBuffers);
  const contentType = isWav ? "audio/wav" : "audio/mpeg";
  const mimeType = isWav ? "audio/wav" : "audio/mpeg";

  // 5. Cache the complete chapter audio
  const publicUrl = await setCachedAudiobookAudio(key, fullAudio, contentType);

  if (publicUrl) {
    return {
      audioUrl: publicUrl,
      cached: false,
      provider: actualProvider,
      durationEstimateMs: estimateDurationMs(chapterText),
    };
  }

  // 6. Fallback: return base64 data URL
  const base64 = fullAudio.toString("base64");
  return {
    audioUrl: `data:${mimeType};base64,${base64}`,
    cached: false,
    provider: actualProvider,
    durationEstimateMs: estimateDurationMs(chapterText),
  };
}

/* ── Batch seeding helper ──────────────────────────────────────────── */

export interface SeedConfig {
  bookSlug: string;
  chapterText: string;
  chapterNumber: number;
  language: AudiobookLanguage;
  voiceId: OpenAIVoice;
}

/**
 * Check if a chapter audio file already exists in cache.
 * Used by the seed script to skip already-generated files.
 */
export async function isChapterAudioCached(
  bookSlug: string,
  language: AudiobookLanguage,
  voiceId: OpenAIVoice,
  chapterNumber: number,
): Promise<boolean> {
  const key = audiobookCacheKey(bookSlug, language, voiceId, chapterNumber);
  const url = await getCachedAudiobookAudio(key);
  return url !== null;
}
