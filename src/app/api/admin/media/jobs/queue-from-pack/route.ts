import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

type AssetType = "video" | "animation" | "image";
type PromptKey = "seedanceVideo" | "seedanceAnimation" | "lessonImage";

type PromptMetaEntry = {
  source?: string;
  version?: string;
  qaStatus?: string;
};

type PromptLesson = {
  lessonId: string;
  lessonTitle: string;
  prompts: {
    seedanceVideo: string;
    seedanceAnimation: string;
    lessonImage: string;
  };
  promptSources?: Partial<Record<PromptKey, string>>;
  promptMeta?: Partial<Record<PromptKey, PromptMetaEntry>>;
};

type PromptModule = {
  moduleId: string;
  lessons: PromptLesson[];
};

type PromptPack = {
  schemaVersion?: string;
  generatedAt?: string;
  modules?: PromptModule[];
};

const queueFromPackRequestSchema = z.object({
  moduleId: z.string().trim().min(1).optional(),
  lessonId: z.string().trim().min(1).optional(),
  assetType: z.enum(["video", "animation", "image", "all"]).optional(),
  limit: z.coerce.number().int().min(1).max(500).optional(),
});

function normalizeAssetTypes(input: string | undefined) {
  if (!input || input === "all") return ["video", "animation", "image"] as AssetType[];
  if (input === "video" || input === "animation" || input === "image") return [input as AssetType];
  return null;
}

function resolvePrompt(lesson: PromptLesson, assetType: AssetType) {
  if (assetType === "video") return lesson.prompts.seedanceVideo;
  if (assetType === "animation") return lesson.prompts.seedanceAnimation;
  return lesson.prompts.lessonImage;
}

function assetTypeToPromptKey(assetType: AssetType): PromptKey {
  if (assetType === "video") return "seedanceVideo";
  if (assetType === "animation") return "seedanceAnimation";
  return "lessonImage";
}

function resolvePromptMeta(lesson: PromptLesson, promptKey: PromptKey) {
  const promptMeta = lesson.promptMeta?.[promptKey];
  const promptSource =
    typeof promptMeta?.source === "string" && promptMeta.source.length > 0
      ? promptMeta.source
      : lesson.promptSources?.[promptKey] ?? "unknown";
  const promptVersion =
    typeof promptMeta?.version === "string" && promptMeta.version.length > 0
      ? promptMeta.version
      : promptSource === "lesson"
        ? "lesson.v1"
        : "generated.v1";
  const promptQaStatus =
    typeof promptMeta?.qaStatus === "string" && promptMeta.qaStatus.length > 0
      ? promptMeta.qaStatus
      : promptSource === "lesson"
        ? "reviewed"
        : "needs_review";

  return {
    promptSource,
    promptVersion,
    promptQaStatus,
  };
}

function buildCandidateKey(moduleId: string, lessonId: string, assetType: AssetType) {
  return `${moduleId}::${lessonId}::${assetType}`;
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const parsedBody = queueFromPackRequestSchema.safeParse(
    await request.json().catch(() => null),
  );

  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsedBody.error.flatten() },
      { status: 400 },
    );
  }

  const moduleId = parsedBody.data.moduleId ?? "";
  const lessonId = parsedBody.data.lessonId ?? "";
  const assetTypes = normalizeAssetTypes(parsedBody.data.assetType);
  const limit = parsedBody.data.limit ?? 100;

  if (!assetTypes) {
    return NextResponse.json({ error: "Invalid assetType. Use video|animation|image|all." }, { status: 400 });
  }

  const promptPackPath = path.join(process.cwd(), "public", "LESSON-MEDIA-PROMPT-PACK.json");
  let promptPack: PromptPack;
  try {
    const raw = await fs.readFile(promptPackPath, "utf8");
    promptPack = JSON.parse(raw) as PromptPack;
  } catch {
    return NextResponse.json(
      { error: "Missing LESSON-MEDIA-PROMPT-PACK.json. Run prompt generation first." },
      { status: 500 },
    );
  }

  const candidates: Array<{
    moduleId: string;
    lessonId: string;
    assetType: AssetType;
    provider: string;
    prompt: string;
    promptKey: PromptKey;
    promptSource: string;
    promptVersion: string;
    promptQaStatus: string;
  }> = [];

  for (const moduleEntry of promptPack.modules ?? []) {
    if (moduleId && moduleEntry.moduleId !== moduleId) continue;
    for (const lesson of moduleEntry.lessons ?? []) {
      if (lessonId && lesson.lessonId !== lessonId) continue;
      for (const assetType of assetTypes) {
        const promptKey = assetTypeToPromptKey(assetType);
        const promptMeta = resolvePromptMeta(lesson, promptKey);
        candidates.push({
          moduleId: moduleEntry.moduleId,
          lessonId: lesson.lessonId,
          assetType,
          provider: "seedance",
          prompt: resolvePrompt(lesson, assetType),
          promptKey,
          promptSource: promptMeta.promptSource,
          promptVersion: promptMeta.promptVersion,
          promptQaStatus: promptMeta.promptQaStatus,
        });
      }
    }
  }

  const slicedCandidates = candidates.slice(0, limit);
  if (slicedCandidates.length === 0) {
    return NextResponse.json({ queued: 0, skipped: 0, message: "No matching lesson prompts found." });
  }

  const admin = createSupabaseAdminClient();
  const { data: existingRows, error: existingError } = await admin
    .from("media_generation_jobs")
    .select("module_id, lesson_id, asset_type, status")
    .in("status", ["queued", "running", "completed"])
    .in("asset_type", assetTypes);

  if (existingError) {
    console.error("Unexpected API error.", toSafeErrorRecord(existingError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const existingKeys = new Set<string>();
  for (const row of existingRows ?? []) {
    if (!row.module_id || !row.lesson_id || !row.asset_type) continue;
    existingKeys.add(buildCandidateKey(row.module_id, row.lesson_id, row.asset_type as AssetType));
  }

  const insertRows = slicedCandidates
    .filter((candidate) => !existingKeys.has(buildCandidateKey(candidate.moduleId, candidate.lessonId, candidate.assetType)))
    .map((candidate) => ({
      created_by: auth.userId,
      module_id: candidate.moduleId,
      lesson_id: candidate.lessonId,
      asset_type: candidate.assetType,
      provider: candidate.provider,
      prompt: candidate.prompt,
      status: "queued",
      metadata: {
        source: "admin-media-queue-from-pack",
        queued_at: new Date().toISOString(),
        prompt_pack_schema_version: promptPack.schemaVersion ?? null,
        prompt_pack_generated_at: promptPack.generatedAt ?? null,
        prompt_key: candidate.promptKey,
        prompt_source: candidate.promptSource,
        prompt_version: candidate.promptVersion,
        prompt_qa_status: candidate.promptQaStatus,
      },
    }));

  if (insertRows.length > 0) {
    const { error: insertError } = await admin.from("media_generation_jobs").insert(insertRows);
    if (insertError) {
      console.error("Unexpected API error.", toSafeErrorRecord(insertError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
  }

  return NextResponse.json({
    scanned: slicedCandidates.length,
    queued: insertRows.length,
    skipped: slicedCandidates.length - insertRows.length,
    filters: {
      moduleId: moduleId || null,
      lessonId: lessonId || null,
      assetType: parsedBody.data.assetType ?? "all",
      limit,
    },
  });
}


