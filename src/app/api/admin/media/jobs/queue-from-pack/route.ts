import fs from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

type AssetType = "video" | "animation" | "image";

type PromptLesson = {
  lessonId: string;
  lessonTitle: string;
  prompts: {
    seedanceVideo: string;
    seedanceAnimation: string;
    lessonImage: string;
  };
};

type PromptModule = {
  moduleId: string;
  lessons: PromptLesson[];
};

type PromptPack = {
  modules?: PromptModule[];
};

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

function buildCandidateKey(moduleId: string, lessonId: string, assetType: AssetType) {
  return `${moduleId}::${lessonId}::${assetType}`;
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = (await request.json().catch(() => ({}))) as {
    moduleId?: string;
    lessonId?: string;
    assetType?: string;
    limit?: number;
  };

  const moduleId = typeof body.moduleId === "string" && body.moduleId.trim().length > 0 ? body.moduleId.trim() : "";
  const lessonId = typeof body.lessonId === "string" && body.lessonId.trim().length > 0 ? body.lessonId.trim() : "";
  const assetTypes = normalizeAssetTypes(typeof body.assetType === "string" ? body.assetType : undefined);
  const limit = Math.min(500, Math.max(1, Number(body.limit ?? 100)));

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
  }> = [];

  for (const moduleEntry of promptPack.modules ?? []) {
    if (moduleId && moduleEntry.moduleId !== moduleId) continue;
    for (const lesson of moduleEntry.lessons ?? []) {
      if (lessonId && lesson.lessonId !== lessonId) continue;
      for (const assetType of assetTypes) {
        candidates.push({
          moduleId: moduleEntry.moduleId,
          lessonId: lesson.lessonId,
          assetType,
          provider: "seedance",
          prompt: resolvePrompt(lesson, assetType),
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
    return NextResponse.json({ error: existingError.message }, { status: 500 });
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
      },
    }));

  if (insertRows.length > 0) {
    const { error: insertError } = await admin.from("media_generation_jobs").insert(insertRows);
    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }
  }

  return NextResponse.json({
    scanned: slicedCandidates.length,
    queued: insertRows.length,
    skipped: slicedCandidates.length - insertRows.length,
    filters: {
      moduleId: moduleId || null,
      lessonId: lessonId || null,
      assetType: body.assetType ?? "all",
      limit,
    },
  });
}
