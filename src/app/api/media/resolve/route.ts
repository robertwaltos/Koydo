import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import {
  resolveGeneratedLessonMedia,
  resolveGeneratedModuleMedia,
} from "@/lib/media/media-fallbacks";

const mediaResolveSchema = z.object({
  moduleId: z.string().trim().min(1).optional(),
  lessonId: z.string().trim().min(1).optional(),
  assetType: z.enum(["video", "animation", "image"]),
});

export async function GET(request: Request) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const parsed = mediaResolveSchema.safeParse({
    moduleId: searchParams.get("moduleId") ?? undefined,
    lessonId: searchParams.get("lessonId") ?? undefined,
    assetType: searchParams.get("assetType") ?? "",
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid query", details: parsed.error.flatten() }, { status: 400 });
  }

  const { moduleId, lessonId, assetType } = parsed.data;
  const admin = createSupabaseAdminClient();

  const baseQuery = admin
    .from("media_generation_jobs")
    .select("id, output_url, completed_at")
    .eq("asset_type", assetType)
    .eq("status", "completed")
    .not("output_url", "is", null)
    .order("completed_at", { ascending: false })
    .limit(1);

  const scopedQuery = lessonId
    ? baseQuery.eq("lesson_id", lessonId)
    : moduleId
      ? baseQuery.eq("module_id", moduleId)
      : null;

  if (!scopedQuery) {
    return NextResponse.json({ error: "moduleId or lessonId is required." }, { status: 400 });
  }

  const { data, error } = await scopedQuery;
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const row = data?.[0];

  // During regen: if no completed job, look for a queued/running job that has
  // an archived old_output_url in its metadata (set by regen-media.mjs).
  let regenFallbackUrl: string | null = null;
  if (!row?.output_url) {
    const regenQuery = lessonId
      ? admin
          .from("media_generation_jobs")
          .select("id, metadata")
          .eq("asset_type", assetType)
          .in("status", ["queued", "running"])
          .eq("lesson_id", lessonId)
          .not("metadata->>old_output_url", "is", null)
          .limit(1)
      : moduleId
        ? admin
            .from("media_generation_jobs")
            .select("id, metadata")
            .eq("asset_type", assetType)
            .in("status", ["queued", "running"])
            .eq("module_id", moduleId)
            .not("metadata->>old_output_url", "is", null)
            .limit(1)
        : null;

    if (regenQuery) {
      const { data: regenRows } = await regenQuery;
      const oldUrl = regenRows?.[0]?.metadata?.old_output_url;
      if (typeof oldUrl === "string" && oldUrl.length > 0) {
        regenFallbackUrl = oldUrl;
      }
    }
  }

  const fallbackUrl = row?.output_url
    ? null
    : regenFallbackUrl
      ? null // use regenFallbackUrl below, not the static placeholder
      : lessonId
        ? resolveGeneratedLessonMedia(lessonId, assetType)
        : moduleId
          ? resolveGeneratedModuleMedia(moduleId, assetType)
          : null;

  const resolvedUrl = row?.output_url ?? regenFallbackUrl ?? fallbackUrl ?? null;
  const source = row?.output_url
    ? "generated_job"
    : regenFallbackUrl
      ? "regen_in_progress_fallback"
      : fallbackUrl
        ? "generated_fallback"
        : "none";

  return NextResponse.json({
    found: Boolean(resolvedUrl),
    url: resolvedUrl,
    assetType,
    completedAt: row?.completed_at ?? null,
    source,
  });
}
