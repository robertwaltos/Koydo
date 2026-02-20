import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

async function isAdmin() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();
  if (authError || !user) return false;

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();
  return Boolean(profile?.is_admin);
}

export async function POST(
  request: Request,
  context: { params: Promise<{ jobId: string }> },
) {
  const admin = await isAdmin();
  if (!admin) {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }

  const { jobId } = await context.params;
  const body = (await request.json().catch(() => ({}))) as {
    status?: string;
    outputUrl?: string;
    error?: string;
  };

  const nextStatus = String(body.status ?? "").trim();
  if (!["queued", "running", "completed", "failed", "canceled"].includes(nextStatus)) {
    return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  }

  const payload: {
    status: string;
    output_url?: string | null;
    error?: string | null;
    completed_at?: string | null;
  } = {
    status: nextStatus,
  };

  if (body.outputUrl !== undefined) payload.output_url = String(body.outputUrl || "").trim() || null;
  if (body.error !== undefined) payload.error = String(body.error || "").trim() || null;
  if (nextStatus === "completed" || nextStatus === "failed" || nextStatus === "canceled") {
    payload.completed_at = new Date().toISOString();
  } else {
    payload.completed_at = null;
  }

  const supabaseAdmin = createSupabaseAdminClient();
  const { data, error } = await supabaseAdmin
    .from("media_generation_jobs")
    .update(payload)
    .eq("id", jobId)
    .select("id, status, output_url, error, completed_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ job: data });
}
