import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const imageGenerateSchema = z.object({
  prompt: z.string().min(10, "Prompt must be at least 10 characters long."),
  moduleId: z.string().min(1).optional(),
  lessonId: z.string().min(1).optional(),
});

// Cache only completed image URLs to avoid repeated DB hits.
const imageCache = new Map<string, string>();

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const validation = imageGenerateSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: "Invalid request body", details: validation.error.issues },
        { status: 400 }
      );
    }

    const { prompt } = validation.data;
    const moduleId = validation.data.moduleId?.trim() || null;
    const lessonId = validation.data.lessonId?.trim() || null;
    const cacheKey = [prompt, moduleId ?? "", lessonId ?? ""].join("::");

    // Check cache first
    if (imageCache.has(cacheKey)) {
      return NextResponse.json({ url: imageCache.get(cacheKey) });
    }

    const admin = createSupabaseAdminClient();

    const completedQuery = admin
      .from("media_generation_jobs")
      .select("output_url, prompt")
      .eq("asset_type", "image")
      .eq("status", "completed")
      .order("completed_at", { ascending: false })
      .limit(1);

    const completedScopedQuery = lessonId
      ? completedQuery.eq("lesson_id", lessonId)
      : moduleId
        ? completedQuery.eq("module_id", moduleId)
        : completedQuery.eq("prompt", prompt);

    const { data: completedRows } = await completedScopedQuery;
    const completedUrl = completedRows?.[0]?.output_url ?? null;
    if (completedUrl) {
      imageCache.set(cacheKey, completedUrl);
      return NextResponse.json({ url: completedUrl, queued: false });
    }

    const existingPendingQuery = admin
      .from("media_generation_jobs")
      .select("id")
      .eq("asset_type", "image")
      .in("status", ["queued", "running"])
      .limit(1);

    const pendingScopedQuery = lessonId
      ? existingPendingQuery.eq("lesson_id", lessonId)
      : moduleId
        ? existingPendingQuery.eq("module_id", moduleId)
        : existingPendingQuery.eq("prompt", prompt);

    const { data: pendingRows } = await pendingScopedQuery;

    if (!pendingRows || pendingRows.length === 0) {
      await admin.from("media_generation_jobs").insert({
        created_by: user.id,
        module_id: moduleId,
        lesson_id: lessonId,
        asset_type: "image",
        provider: "seedance",
        prompt,
        status: "queued",
        metadata: {
          requested_via: "api/images/generate",
        },
      });
    }

    return NextResponse.json({ url: "/placeholders/lesson-robot.svg", queued: true });
  } catch (err) {
    console.error("Unexpected error in image generation route:", toSafeErrorRecord(err));
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
