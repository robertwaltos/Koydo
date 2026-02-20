import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

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

export async function GET() {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("media_generation_jobs")
    .select(
      "id, module_id, lesson_id, asset_type, provider, prompt, status, output_url, error, created_at, updated_at, completed_at",
    )
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ jobs: data ?? [] });
}

export async function POST(request: Request) {
  const adminUserId = await getAdminUserId();
  if (!adminUserId) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const body = (await request.json().catch(() => ({}))) as {
    moduleId?: string;
    lessonId?: string;
    assetType?: string;
    provider?: string;
    prompt?: string;
    metadata?: Record<string, unknown>;
  };

  const assetType = String(body.assetType ?? "").trim();
  const prompt = String(body.prompt ?? "").trim();
  if (!["video", "animation", "image"].includes(assetType)) {
    return NextResponse.json({ error: "assetType must be video, animation, or image." }, { status: 400 });
  }
  if (prompt.length < 20) {
    return NextResponse.json({ error: "Prompt must be at least 20 characters." }, { status: 400 });
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("media_generation_jobs")
    .insert({
      created_by: adminUserId,
      module_id: body.moduleId ? String(body.moduleId).trim() : null,
      lesson_id: body.lessonId ? String(body.lessonId).trim() : null,
      asset_type: assetType,
      provider: body.provider ? String(body.provider).trim() : "seedance",
      prompt,
      status: "queued",
      metadata: body.metadata ?? {},
    })
    .select("id, status")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ job: data });
}
