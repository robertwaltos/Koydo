/**
 * StoryForge — Project Gutenberg text extraction service.
 *
 * Fetches plain-text books, strips boilerplate, splits into chapters,
 * and estimates reading durations.
 */

import type { StoryMetadata } from "./types";

// ── Types ───────────────────────────────────────────────────────────

export interface RawChapter {
  index: number;
  title: string;
  text: string;
  wordCount: number;
  estimatedReadingMinutes: number;
}

export interface ExtractedBook {
  metadata: StoryMetadata;
  chapters: RawChapter[];
  totalWordCount: number;
  rawTextLength: number;
  extractedAt: string;
}

// ── Gutenberg URL resolution ────────────────────────────────────────

const GUTENBERG_MIRRORS = [
  "https://www.gutenberg.org/cache/epub",
  "https://gutenberg.pglaf.org/cache/epub",
];

function gutenbergTextUrl(ebookId: string): string[] {
  const id = ebookId.replace(/\D/g, "");
  return GUTENBERG_MIRRORS.map((m) => `${m}/${id}/pg${id}.txt`);
}

function extractEbookId(sourceUrl: string): string {
  const match = sourceUrl.match(/ebooks\/(\d+)/);
  return match ? match[1] : sourceUrl;
}

// ── Boilerplate stripping ───────────────────────────────────────────

const START_MARKERS = [
  "*** START OF THE PROJECT GUTENBERG",
  "*** START OF THIS PROJECT GUTENBERG",
  "***START OF THE PROJECT GUTENBERG",
];

const END_MARKERS = [
  "*** END OF THE PROJECT GUTENBERG",
  "*** END OF THIS PROJECT GUTENBERG",
  "***END OF THE PROJECT GUTENBERG",
  "End of the Project Gutenberg",
  "End of Project Gutenberg",
];

function stripBoilerplate(raw: string): string {
  let text = raw;

  // Find start marker
  for (const marker of START_MARKERS) {
    const idx = text.indexOf(marker);
    if (idx !== -1) {
      const afterMarker = text.indexOf("\n", idx);
      text = afterMarker !== -1 ? text.slice(afterMarker + 1) : text.slice(idx + marker.length);
      break;
    }
  }

  // Find end marker
  for (const marker of END_MARKERS) {
    const idx = text.indexOf(marker);
    if (idx !== -1) {
      text = text.slice(0, idx);
      break;
    }
  }

  return text.trim();
}

// ── Chapter splitting ───────────────────────────────────────────────

const CHAPTER_PATTERNS = [
  /^(CHAPTER\s+[IVXLCDM\d]+[.\s—:_-]*.*)/im,
  /^(Chapter\s+[IVXLCDM\d]+[.\s—:_-]*.*)/m,
  /^(CHAPTER\s+\w+[.\s—:_-]*.*)/im,
  /^(Part\s+(?:the\s+)?\w+[.\s—:_-]*.*)/im,
  /^(BOOK\s+[IVXLCDM\d]+[.\s—:_-]*.*)/im,
  /^(FABLE\s+[IVXLCDM\d]+[.\s—:_-]*)/im,
];

// Average reading speed (WPM) for educational content
const READING_WPM = 200;

function splitIntoChapters(text: string): RawChapter[] {
  // Try each pattern to find chapters
  for (const pattern of CHAPTER_PATTERNS) {
    const globalPattern = new RegExp(pattern.source, "gim");
    const matches = [...text.matchAll(globalPattern)];

    if (matches.length >= 2) {
      const chapters: RawChapter[] = [];
      for (let i = 0; i < matches.length; i++) {
        const start = matches[i].index!;
        const end = i + 1 < matches.length ? matches[i + 1].index! : text.length;
        const chapterText = text.slice(start, end).trim();
        const titleLine = matches[i][1].trim();
        const wordCount = chapterText.split(/\s+/).filter(Boolean).length;

        chapters.push({
          index: i,
          title: titleLine.replace(/[_\-—:]+\s*$/, "").trim() || `Chapter ${i + 1}`,
          text: chapterText,
          wordCount,
          estimatedReadingMinutes: Math.ceil(wordCount / READING_WPM),
        });
      }
      return chapters;
    }
  }

  // Fallback: split into roughly equal segments of ~2000 words
  return splitByParagraphBlocks(text);
}

function splitByParagraphBlocks(text: string, targetWordsPerChapter = 2000): RawChapter[] {
  const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
  const chapters: RawChapter[] = [];
  let currentText = "";
  let currentWords = 0;
  let chapterIdx = 0;

  for (const para of paragraphs) {
    const paraWords = para.split(/\s+/).filter(Boolean).length;
    currentText += para + "\n\n";
    currentWords += paraWords;

    if (currentWords >= targetWordsPerChapter) {
      chapters.push({
        index: chapterIdx,
        title: `Section ${chapterIdx + 1}`,
        text: currentText.trim(),
        wordCount: currentWords,
        estimatedReadingMinutes: Math.ceil(currentWords / READING_WPM),
      });
      chapterIdx++;
      currentText = "";
      currentWords = 0;
    }
  }

  // Remainder
  if (currentText.trim().length > 0) {
    chapters.push({
      index: chapterIdx,
      title: `Section ${chapterIdx + 1}`,
      text: currentText.trim(),
      wordCount: currentWords,
      estimatedReadingMinutes: Math.ceil(currentWords / READING_WPM),
    });
  }

  return chapters;
}

// ── Public API ──────────────────────────────────────────────────────

/**
 * Fetch a book's raw text from Project Gutenberg and split into chapters.
 * Falls back across mirrors. Caches nothing — callers should cache.
 */
export async function fetchGutenbergBook(
  meta: StoryMetadata,
): Promise<ExtractedBook> {
  const ebookId = extractEbookId(meta.sourceUrl);
  const urls = gutenbergTextUrl(ebookId);

  let rawText: string | null = null;
  let lastError: Error | null = null;

  for (const url of urls) {
    try {
      const resp = await fetch(url, {
        headers: { "User-Agent": "EduForge-StoryForge/1.0 (educational)" },
        signal: AbortSignal.timeout(15_000),
      });
      if (!resp.ok) continue;
      rawText = await resp.text();
      break;
    } catch (err) {
      lastError = err instanceof Error ? err : new Error(String(err));
    }
  }

  if (!rawText) {
    throw new Error(
      `Failed to fetch book "${meta.title}" from Gutenberg: ${lastError?.message ?? "all mirrors exhausted"}`,
    );
  }

  const strippedText = stripBoilerplate(rawText);
  const chapters = splitIntoChapters(strippedText);
  const totalWordCount = chapters.reduce((s, c) => s + c.wordCount, 0);

  return {
    metadata: {
      ...meta,
      chapterCount: chapters.length,
      estimatedReadingMinutes: Math.ceil(totalWordCount / READING_WPM),
    },
    chapters,
    totalWordCount,
    rawTextLength: rawText.length,
    extractedAt: new Date().toISOString(),
  };
}

/**
 * Estimate the rendering tier based on available resources.
 * - Tier 1: Audio + static images (works everywhere)
 * - Tier 3: Full video + 360° spatial
 */
export function estimateRenderTier(
  hasGpu: boolean,
  bandwidthMbps: number,
): 1 | 2 | 3 {
  if (hasGpu && bandwidthMbps >= 25) return 3;
  if (bandwidthMbps >= 10) return 2;
  return 1;
}

/**
 * Verify public domain status of a text.
 * Books published before 1929 (US) or with explicit PD sources are safe.
 */
export function verifyPublicDomain(meta: StoryMetadata): {
  verified: boolean;
  reason: string;
} {
  if (meta.rightsStatus === "verified" || meta.rightsStatus === "public_domain") {
    return { verified: true, reason: `Rights status marked as ${meta.rightsStatus}` };
  }

  if (meta.publicDomainSource === "gutenberg") {
    return {
      verified: true,
      reason: "Project Gutenberg only hosts public-domain works per US copyright law",
    };
  }

  if (meta.yearPublished !== null && meta.yearPublished < 1929) {
    return {
      verified: true,
      reason: `Published in ${meta.yearPublished}, before US copyright threshold (1929)`,
    };
  }

  return { verified: false, reason: "Unable to verify public domain status — manual review required" };
}
