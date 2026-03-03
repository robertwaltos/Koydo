/**
 * StoryForge Cinema — Gutenberg Text Ingestion Service
 */

const GUTENBERG_BASE = "https://www.gutenberg.org";

export interface GutenbergTextResult {
  title: string;
  rawText: string;
  chapters: string[];
  wordCount: number;
  characterCount: number;
}

export async function fetchGutenbergText(gutenbergId: number): Promise<GutenbergTextResult> {
  const url = `${GUTENBERG_BASE}/cache/epub/${gutenbergId}/pg${gutenbergId}.txt`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`[StoryForge] Failed to fetch Gutenberg ID ${gutenbergId}: ${response.status}`);
  }
  const rawText = await response.text();
  const cleanedText = stripGutenbergBoilerplate(rawText);
  const chapters = splitIntoChapters(cleanedText);
  return {
    title: extractTitle(rawText),
    rawText: cleanedText,
    chapters,
    wordCount: cleanedText.split(/\s+/).length,
    characterCount: cleanedText.length,
  };
}

function stripGutenbergBoilerplate(text: string): string {
  const startMarkers = [
    "*** START OF THE PROJECT GUTENBERG EBOOK",
    "*** START OF THIS PROJECT GUTENBERG EBOOK",
    "***START OF THE PROJECT GUTENBERG EBOOK",
  ];
  const endMarkers = [
    "*** END OF THE PROJECT GUTENBERG EBOOK",
    "*** END OF THIS PROJECT GUTENBERG EBOOK",
    "***END OF THE PROJECT GUTENBERG EBOOK",
    "End of the Project Gutenberg EBook",
    "End of Project Gutenberg",
  ];
  let startIndex = 0;
  for (const marker of startMarkers) {
    const idx = text.indexOf(marker);
    if (idx !== -1) { startIndex = text.indexOf("\n", idx) + 1; break; }
  }
  let endIndex = text.length;
  for (const marker of endMarkers) {
    const idx = text.indexOf(marker);
    if (idx !== -1) { endIndex = idx; break; }
  }
  return text.slice(startIndex, endIndex).trim();
}

function extractTitle(text: string): string {
  const titleMatch = text.match(/Title:\s*(.+)/i);
  return titleMatch ? titleMatch[1].trim() : "Untitled";
}

function splitIntoChapters(text: string): string[] {
  const chapterRegex = /\n\s*(CHAPTER\s+[IVXLCDM\d]+\.?|Chapter\s+\d+|CHAPTER\s+\d+|I{1,3}V?X?\.?\s*\n)/gi;
  const parts = text.split(chapterRegex).filter((part) => part.trim().length > 50);
  if (parts.length <= 1) {
    const paragraphs = text.split(/\n\s*\n/).filter((p) => p.trim().length > 0);
    const chunkSize = Math.ceil(paragraphs.length / Math.max(5, Math.floor(paragraphs.length / 10)));
    const chunks: string[] = [];
    for (let i = 0; i < paragraphs.length; i += chunkSize) {
      chunks.push(paragraphs.slice(i, i + chunkSize).join("\n\n"));
    }
    return chunks;
  }
  return parts;
}

export function estimateContentTier(wordCount: number): "A" | "B" | "C" | "D" {
  if (wordCount < 5000) return "A";
  if (wordCount < 30000) return "B";
  if (wordCount < 80000) return "C";
  return "D";
}

export function estimateFilmDuration(wordCount: number, tier: "A" | "B" | "C" | "D"): number {
  switch (tier) {
    case "A": return Math.max(2, Math.min(8, Math.round(wordCount / 800)));
    case "B": return Math.max(15, Math.min(30, Math.round(wordCount / 1200)));
    case "C": return Math.max(30, Math.min(60, Math.round(wordCount / 1500)));
    case "D": return Math.max(60, Math.min(120, Math.round(wordCount / 1800)));
  }
}
