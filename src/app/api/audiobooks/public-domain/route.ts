import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { enforceIpRateLimit } from "@/lib/security/ip-rate-limit";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";
import { getVerifiedPublicDomainModuleIds } from "@/lib/audiobooks/public-domain-catalog";

const querySchema = z.object({
  moduleId: z.string().trim().optional(),
  voiceId: z.string().trim().optional(),
  limit: z.coerce.number().int().min(1).max(5000).optional().default(600),
});

type AudiobookChapterRow = {
  id: string;
  module_id: string | null;
  lesson_id: string | null;
  output_url: string | null;
  created_at: string;
  completed_at: string | null;
  metadata: Record<string, unknown> | null;
};

type ChapterResult = {
  id: string;
  lessonId: string | null;
  chapterIndex: number;
  title: string | null;
  audioUrl: string;
  voiceId: string;
  durationMs: number | null;
  createdAt: string;
  completedAt: string | null;
};

type BookResult = {
  moduleId: string;
  title: string;
  chapterCount: number;
  voices: string[];
  chapters: ChapterResult[];
};

function toChapterIndex(lessonId: string | null, metadata: Record<string, unknown> | null) {
  const fromMeta = Number(metadata?.chapter_index ?? Number.NaN);
  if (Number.isFinite(fromMeta) && fromMeta > 0) {
    return Math.floor(fromMeta);
  }

  if (!lessonId) return 0;
  const match = lessonId.match(/:c(\d+)$/i);
  if (match) {
    return Number(match[1] ?? 0) || 0;
  }
  return 0;
}

export async function GET(request: NextRequest) {
  const rateLimit = await enforceIpRateLimit(request, "api:audiobooks:public-domain:get", {
    max: 90,
    windowMs: 60_000,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many audiobook requests. Please retry shortly." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const parsed = querySchema.safeParse({
    moduleId: request.nextUrl.searchParams.get("moduleId") ?? undefined,
    voiceId: request.nextUrl.searchParams.get("voiceId") ?? undefined,
    limit: request.nextUrl.searchParams.get("limit") ?? undefined,
  });

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid query", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { moduleId, voiceId, limit } = parsed.data;
  const verifiedModuleIds = getVerifiedPublicDomainModuleIds();

  if (moduleId && !verifiedModuleIds.has(moduleId)) {
    return NextResponse.json({ books: [], totalBooks: 0, totalChapters: 0 });
  }

  const admin = createSupabaseAdminClient();
  try {
    const { data, error } = await admin
      .from("media_generation_jobs")
      .select("id, module_id, lesson_id, output_url, created_at, completed_at, metadata")
      .eq("asset_type", "animation")
      .eq("status", "completed")
      .contains("metadata", {
        is_audio: true,
        audiobook: true,
        rights_status: "public_domain_verified",
      })
      .order("completed_at", { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    const rows = (data ?? []) as AudiobookChapterRow[];
    const filtered = rows.filter((row) => {
      if (!row.module_id || !row.output_url) return false;
      if (!verifiedModuleIds.has(row.module_id)) return false;
      if (moduleId && row.module_id !== moduleId) return false;

      const rowVoice = String((row.metadata?.voice_id ?? "")).trim();
      if (voiceId && rowVoice !== voiceId) return false;
      return true;
    });

    const booksMap = new Map<string, BookResult>();
    for (const row of filtered) {
      const moduleKey = row.module_id as string;
      const rowVoice = String(row.metadata?.voice_id ?? "default").trim() || "default";
      const bookTitle = String(row.metadata?.book_title ?? moduleKey).trim() || moduleKey;
      const chapter: ChapterResult = {
        id: row.id,
        lessonId: row.lesson_id,
        chapterIndex: toChapterIndex(row.lesson_id, row.metadata),
        title:
          typeof row.metadata?.chapter_title === "string" && row.metadata.chapter_title.trim().length > 0
            ? row.metadata.chapter_title.trim()
            : null,
        audioUrl: row.output_url as string,
        voiceId: rowVoice,
        durationMs: Number.isFinite(Number(row.metadata?.duration_ms))
          ? Number(row.metadata?.duration_ms)
          : null,
        createdAt: row.created_at,
        completedAt: row.completed_at,
      };

      const existing = booksMap.get(moduleKey);
      if (existing) {
        existing.chapters.push(chapter);
        if (!existing.voices.includes(rowVoice)) {
          existing.voices.push(rowVoice);
        }
      } else {
        booksMap.set(moduleKey, {
          moduleId: moduleKey,
          title: bookTitle,
          chapterCount: 0,
          voices: [rowVoice],
          chapters: [chapter],
        });
      }
    }

    const books = Array.from(booksMap.values())
      .map((book) => {
        book.chapters.sort((a, b) => {
          if (a.chapterIndex !== b.chapterIndex) return a.chapterIndex - b.chapterIndex;
          return a.createdAt.localeCompare(b.createdAt);
        });
        book.chapterCount = book.chapters.length;
        book.voices.sort((a, b) => a.localeCompare(b));
        return book;
      })
      .sort((a, b) => a.title.localeCompare(b.title));

    const totalChapters = books.reduce((sum, book) => sum + book.chapterCount, 0);
    return NextResponse.json({
      books,
      totalBooks: books.length,
      totalChapters,
    });
  } catch (error) {
    console.error("[api/audiobooks/public-domain]", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
