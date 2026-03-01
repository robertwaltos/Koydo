import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const mediaAssetTypeSchema = z.enum(["video", "animation", "image"]);
const mediaStatusSchema = z.enum(["queued", "running", "completed", "failed", "canceled"]);

const listQuerySchema = z.object({
  moduleId: z.string().trim().max(120).optional(),
  lessonId: z.string().trim().max(120).optional(),
  assetType: mediaAssetTypeSchema.optional(),
  status: mediaStatusSchema.optional(),
  promptSource: z.string().trim().max(120).optional(),
  promptQaStatus: z.string().trim().max(120).optional(),
  limit: z.coerce.number().int().min(1).max(200).default(100),
  offset: z.coerce.number().int().min(0).default(0),
});

const createJobSchema = z.object({
  moduleId: z.string().trim().max(120).optional(),
  lessonId: z.string().trim().max(120).optional(),
  assetType: mediaAssetTypeSchema,
  provider: z.string().trim().min(1).max(64).default("seedance"),
  prompt: z.string().trim().min(20).max(4_000),
  metadata: z.record(z.string(), z.unknown()).optional(),
});

async function getAdminUserId() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) return null;

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) return null;
  return user.id;
}

export async function GET(request: Request) {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const { searchParams } = new URL(request.url);
  const parsedQuery = listQuerySchema.safeParse({
    moduleId: searchParams.get("moduleId") ?? undefined,
    lessonId: searchParams.get("lessonId") ?? undefined,
    assetType: searchParams.get("assetType") ?? undefined,
    status: searchParams.get("status") ?? undefined,
    promptSource: searchParams.get("promptSource") ?? undefined,
    promptQaStatus: searchParams.get("promptQaStatus") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
    offset: searchParams.get("offset") ?? undefined,
  });
  if (!parsedQuery.success) {
    return NextResponse.json(
      { error: "Invalid query parameters.", details: parsedQuery.error.flatten() },
      { status: 400 },
    );
  }
  const { moduleId, lessonId, assetType, status, promptSource, promptQaStatus, limit, offset } = parsedQuery.data;

  const admin = createSupabaseAdminClient();
  let query = admin
    .from("media_generation_jobs")
    .select(
      "id, module_id, lesson_id, asset_type, provider, prompt, status, output_url, error, metadata, created_at, updated_at, completed_at",
      { count: "exact" },
    );

  if (moduleId && moduleId.length > 0) {
    query = query.eq("module_id", moduleId);
  }
  if (lessonId && lessonId.length > 0) {
    query = query.eq("lesson_id", lessonId);
  }
  if (assetType) {
    query = query.eq("asset_type", assetType);
  }
  if (status) {
    query = query.eq("status", status);
  }
  if (promptSource) {
    query = query.eq("metadata->>prompt_source", promptSource);
  }
  if (promptQaStatus) {
    query = query.eq("metadata->>prompt_qa_status", promptQaStatus);
  }

  const { data, error, count } = await query
    .order("created_at", { ascending: false })
    .order("id", { ascending: false })
    .range(offset, offset + limit - 1);

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  const total = count ?? 0;
  const jobs = data ?? [];
  const nextOffset = offset + jobs.length;

  return NextResponse.json({
    jobs,
    pagination: {
      total,
      limit,
      offset,
      hasMore: nextOffset < total,
      nextOffset: nextOffset < total ? nextOffset : null,
      previousOffset: offset > 0 ? Math.max(0, offset - limit) : null,
    },
  });
}

export async function POST(request: Request) {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const parsedBody = createJobSchema.safeParse(await request.json().catch(() => null));
  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Invalid payload.", details: parsedBody.error.flatten() },
      { status: 400 },
    );
  }
  const { moduleId, lessonId, assetType, prompt, provider, metadata } = parsedBody.data;

  const admin = createSupabaseAdminClient();
  if (moduleId && lessonId) {
    const { data: existingJob, error: existingJobError } = await admin
      .from("media_generation_jobs")
      .select("id, status")
      .eq("module_id", moduleId)
      .eq("lesson_id", lessonId)
      .eq("asset_type", assetType)
      .in("status", ["queued", "running", "completed"])
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingJobError) {
      console.error("Unexpected API error.", toSafeErrorRecord(existingJobError));
      return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }

    if (existingJob) {
      return NextResponse.json({ duplicate: true, job: existingJob });
    }
  }

  const { data, error } = await admin
    .from("media_generation_jobs")
    .insert({
      created_by: adminUserId,
      module_id: moduleId || null,
      lesson_id: lessonId || null,
      asset_type: assetType,
      provider,
      prompt,
      status: "queued",
      metadata: metadata ?? {},
    })
    .select("id, status")
    .single();

  if (error) {
    console.error("Unexpected API error.", toSafeErrorRecord(error));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ job: data });
}

