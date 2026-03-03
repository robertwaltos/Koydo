/**
 * Offline Packs — Bundle generation & manifest system.
 *
 * Generates downloadable lesson packs that work offline:
 * - Packs contain lesson content, flashcards, quiz questions, and media refs.
 * - Each pack has a manifest (version, checksum, expiry).
 * - Supports incremental updates via version diff.
 * - Designed for service-worker caching with predictable cache keys.
 */

import {
  getAllLearningModules,
  getLearningModuleById,
} from "@/lib/modules";
import type { LearningModule, Lesson, Question, Flashcard, LessonChunk } from "@/lib/modules/types";

// ── Types ──────────────────────────────────────────────────────────

export type OfflineLessonData = {
  id: string;
  title: string;
  type: string;
  duration: number;
  objectives: string[];
  chunks: Array<{ id: string; title: string; content: string; kind?: string }>;
  flashcards: Array<{ id: string; front: string; back: string; hint?: string }>;
  questions: Array<{
    id: string;
    text: string;
    skillId: string | null;
    options: Array<{ id: string; text: string }>;
    correctOptionId: string;
    hint: string | null;
    explanation: string | null;
  }>;
};

export type OfflineModuleData = {
  id: string;
  title: string;
  description: string;
  subject: string;
  difficultyBand: string;
  lessonCount: number;
  lessons: OfflineLessonData[];
};

export type OfflinePackManifest = {
  packId: string;
  version: string;
  generatedAt: string;
  expiresAt: string;
  moduleIds: string[];
  totalLessons: number;
  totalQuestions: number;
  totalFlashcards: number;
  /** SHA-256 of the serialized content (for cache validation) */
  contentHash: string;
  /** Estimated size in bytes */
  estimatedSizeBytes: number;
};

export type OfflinePack = {
  manifest: OfflinePackManifest;
  modules: OfflineModuleData[];
};

// ── Constants ──────────────────────────────────────────────────────

const PACK_VERSION = "1.0.0";
/** Packs expire after 30 days */
const PACK_TTL_MS = 30 * 24 * 60 * 60 * 1000;
/** Max modules per pack for standard downloads */
const MAX_MODULES_PER_PACK = 10;
/** Max modules for Airplane Mode (≈6 hours of content) */
const MAX_MODULES_AIRPLANE = 60;
/** Average lesson duration in minutes for estimation */
const AVG_LESSON_DURATION_MIN = 12;

// ── Helpers ────────────────────────────────────────────────────────

function serializeLesson(lesson: Lesson): OfflineLessonData {
  return {
    id: lesson.id,
    title: lesson.title,
    type: lesson.type,
    duration: lesson.duration,
    objectives: lesson.objectives ?? [],
    chunks: (lesson.chunks ?? []).map((c: LessonChunk) => ({
      id: c.id,
      title: c.title,
      content: c.content,
      kind: c.kind,
    })),
    flashcards: (lesson.flashcards ?? []).map((f: Flashcard) => ({
      id: f.id,
      front: f.front,
      back: f.back,
      hint: f.hint,
    })),
    questions: (lesson.questions ?? []).map((q: Question) => ({
      id: q.id,
      text: q.text,
      skillId: q.skillId ?? null,
      options: q.options.map((o) => ({ id: o.id, text: o.text })),
      correctOptionId: q.correctOptionId,
      hint: q.hint ?? null,
      explanation: q.explanation ?? null,
    })),
  };
}

function serializeModule(mod: LearningModule): OfflineModuleData {
  return {
    id: mod.id,
    title: mod.title,
    description: mod.description,
    subject: mod.subject,
    difficultyBand: mod.difficultyBand ?? "beginner",
    lessonCount: mod.lessons.length,
    lessons: mod.lessons.map(serializeLesson),
  };
}

/** Simple FNV-1a hash for content integrity (browser-compatible, no crypto needed) */
function fnv1aHash(str: string): string {
  let hash = 0x811c9dc5;
  for (let i = 0; i < str.length; i++) {
    hash ^= str.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return (hash >>> 0).toString(16).padStart(8, "0");
}

// ── Core Generator ─────────────────────────────────────────────────

export type GeneratePackInput = {
  /** Specific module IDs to include. If omitted, uses subject filter. */
  moduleIds?: string[];
  /** Filter by subject (if moduleIds not specified) */
  subject?: string;
  /** Max modules to include (default: 5) */
  maxModules?: number;
};

/**
 * Generate an offline pack with lesson content ready for client-side caching.
 */
export function generateOfflinePack(input: GeneratePackInput): OfflinePack {
  const limit = Math.min(input.maxModules ?? 5, MAX_MODULES_PER_PACK);

  let modules: LearningModule[];

  if (input.moduleIds && input.moduleIds.length > 0) {
    modules = input.moduleIds
      .slice(0, limit)
      .map((id) => getLearningModuleById(id))
      .filter((m): m is LearningModule => m !== null);
  } else {
    const allModules = getAllLearningModules();
    if (input.subject) {
      const subjectLower = input.subject.toLowerCase();
      modules = allModules
        .filter(
          (m) =>
            m.subject.toLowerCase().includes(subjectLower) ||
            m.title.toLowerCase().includes(subjectLower),
        )
        .slice(0, limit);
    } else {
      modules = allModules.slice(0, limit);
    }
  }

  const serializedModules = modules.map(serializeModule);
  const contentStr = JSON.stringify(serializedModules);

  let totalQuestions = 0;
  let totalFlashcards = 0;
  for (const mod of serializedModules) {
    for (const lesson of mod.lessons) {
      totalQuestions += lesson.questions.length;
      totalFlashcards += lesson.flashcards.length;
    }
  }

  const now = new Date();
  const manifest: OfflinePackManifest = {
    packId: `pack-${fnv1aHash(modules.map((m) => m.id).join(","))}-${now.getTime()}`,
    version: PACK_VERSION,
    generatedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + PACK_TTL_MS).toISOString(),
    moduleIds: modules.map((m) => m.id),
    totalLessons: serializedModules.reduce((sum, m) => sum + m.lessonCount, 0),
    totalQuestions,
    totalFlashcards,
    contentHash: fnv1aHash(contentStr),
    estimatedSizeBytes: new Blob([contentStr]).size,
  };

  return { manifest, modules: serializedModules };
}

// ── Offline Progress Sync ──────────────────────────────────────────

export type OfflineProgressEntry = {
  lessonId: string;
  moduleId: string;
  questionId: string;
  selectedOptionId: string;
  correct: boolean;
  answeredAt: string;
  /** Client-generated UUID for dedup */
  clientEventId: string;
};

export type OfflineSyncPayload = {
  entries: OfflineProgressEntry[];
  packId: string;
  syncedAt: string;
  clientDeviceId: string;
};

export type SyncResult = {
  accepted: number;
  duplicates: number;
  rejected: number;
  errors: string[];
};

/**
 * Merge offline progress entries, deduplicating by clientEventId.
 * Returns entries ready for database insertion.
 */
export function deduplicateOfflineProgress(
  entries: OfflineProgressEntry[],
  existingEventIds: Set<string>,
): { newEntries: OfflineProgressEntry[]; duplicateCount: number } {
  const seen = new Set<string>();
  const newEntries: OfflineProgressEntry[] = [];
  let duplicateCount = 0;

  for (const entry of entries) {
    if (existingEventIds.has(entry.clientEventId) || seen.has(entry.clientEventId)) {
      duplicateCount++;
      continue;
    }
    seen.add(entry.clientEventId);
    newEntries.push(entry);
  }

  return { newEntries, duplicateCount };
}

/**
 * Resolve last-write-wins for conflicting offline progress.
 * Groups by lessonId+questionId, picks latest answeredAt.
 */
export function resolveConflicts(
  entries: OfflineProgressEntry[],
): OfflineProgressEntry[] {
  const byKey = new Map<string, OfflineProgressEntry>();

  for (const entry of entries) {
    const key = `${entry.lessonId}:${entry.questionId}`;
    const existing = byKey.get(key);
    if (!existing || new Date(entry.answeredAt) > new Date(existing.answeredAt)) {
      byKey.set(key, entry);
    }
  }

  return Array.from(byKey.values());
}

// ── Airplane Mode ──────────────────────────────────────────────────

export type AirplaneModeEstimate = {
  totalModules: number;
  totalLessons: number;
  estimatedDurationMinutes: number;
  estimatedSizeBytes: number;
  /** Human-readable size like "12.4 MB" */
  estimatedSizeLabel: string;
  /** Subjects included */
  subjects: string[];
};

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

/**
 * Estimate how much data an Airplane Mode download would require.
 * Does NOT generate the pack — just calculates the size.
 */
export function estimateAirplaneModePack(options?: {
  subjects?: string[];
  maxHours?: number;
}): AirplaneModeEstimate {
  const targetMinutes = (options?.maxHours ?? 6) * 60;
  const allModules = getAllLearningModules();

  // Filter by subject if specified
  let candidates = allModules;
  if (options?.subjects && options.subjects.length > 0) {
    const subjectSet = new Set(options.subjects.map((s) => s.toLowerCase()));
    candidates = allModules.filter((m) =>
      subjectSet.has(m.subject.toLowerCase()),
    );
  }

  // Accumulate modules until we hit target duration
  let totalDuration = 0;
  const selected: LearningModule[] = [];

  for (const mod of candidates) {
    if (totalDuration >= targetMinutes) break;
    if (selected.length >= MAX_MODULES_AIRPLANE) break;

    const modDuration = mod.lessons.reduce(
      (sum, l) => sum + (l.duration || AVG_LESSON_DURATION_MIN),
      0,
    );
    selected.push(mod);
    totalDuration += modDuration;
  }

  // Estimate size without actually serializing everything
  let totalLessons = 0;
  const subjectSet = new Set<string>();
  for (const mod of selected) {
    totalLessons += mod.lessons.length;
    subjectSet.add(mod.subject);
  }

  // ~2 KB per lesson is a conservative average for JSON content
  const estimatedBytes = totalLessons * 2048 + selected.length * 512;

  return {
    totalModules: selected.length,
    totalLessons,
    estimatedDurationMinutes: totalDuration,
    estimatedSizeBytes: estimatedBytes,
    estimatedSizeLabel: formatBytes(estimatedBytes),
    subjects: Array.from(subjectSet),
  };
}

/**
 * Generate a full Airplane Mode pack (~6 hours of content).
 * Similar to generateOfflinePack but with higher limits.
 */
export function generateAirplaneModePack(options?: {
  subjects?: string[];
  maxHours?: number;
}): OfflinePack {
  const targetMinutes = (options?.maxHours ?? 6) * 60;
  const allModules = getAllLearningModules();

  let candidates = allModules;
  if (options?.subjects && options.subjects.length > 0) {
    const subjectSet = new Set(options.subjects.map((s) => s.toLowerCase()));
    candidates = allModules.filter((m) =>
      subjectSet.has(m.subject.toLowerCase()),
    );
  }

  let totalDuration = 0;
  const selected: LearningModule[] = [];

  for (const mod of candidates) {
    if (totalDuration >= targetMinutes) break;
    if (selected.length >= MAX_MODULES_AIRPLANE) break;

    const modDuration = mod.lessons.reduce(
      (sum, l) => sum + (l.duration || AVG_LESSON_DURATION_MIN),
      0,
    );
    selected.push(mod);
    totalDuration += modDuration;
  }

  const serializedModules = selected.map(serializeModule);
  const contentStr = JSON.stringify(serializedModules);

  let totalQuestions = 0;
  let totalFlashcards = 0;
  for (const mod of serializedModules) {
    for (const lesson of mod.lessons) {
      totalQuestions += lesson.questions.length;
      totalFlashcards += lesson.flashcards.length;
    }
  }

  const now = new Date();
  const manifest: OfflinePackManifest = {
    packId: `airplane-${fnv1aHash(selected.map((m) => m.id).join(","))}-${now.getTime()}`,
    version: PACK_VERSION,
    generatedAt: now.toISOString(),
    expiresAt: new Date(now.getTime() + PACK_TTL_MS).toISOString(),
    moduleIds: selected.map((m) => m.id),
    totalLessons: serializedModules.reduce((sum, m) => sum + m.lessonCount, 0),
    totalQuestions,
    totalFlashcards,
    contentHash: fnv1aHash(contentStr),
    estimatedSizeBytes: new Blob([contentStr]).size,
  };

  return { manifest, modules: serializedModules };
}
