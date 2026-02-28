import { NextResponse } from "next/server";
import { z } from "zod";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const statusUpdateSchema = z.object({
  status: z.enum(["queued", "running", "completed", "failed", "canceled"]),
  outputUrl: z.string().trim().max(2_048).optional(),
  error: z.string().trim().max(2_000).optional(),
});

const routeParamsSchema = z.object({
  jobId: z.string().uuid(),
});

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

  const parsedParams = routeParamsSchema.safeParse(await context.params);
  if (!parsedParams.success) {
    return NextResponse.json(
      { error: "Invalid job id.", details: parsedParams.error.flatten() },
      { status: 400 },
    );
  }
  const { jobId } = parsedParams.data;

  const parsedBody = statusUpdateSchema.safeParse(await request.json().catch(() => null));
  if (!parsedBody.success) {
    return NextResponse.json(
      { error: "Invalid payload.", details: parsedBody.error.flatten() },
      { status: 400 },
    );
  }
  const nextStatus = parsedBody.data.status;

  const payload: {
    status: string;
    output_url?: string | null;
    error?: string | null;
    completed_at?: string | null;
  } = {
    status: nextStatus,
  };

  if (parsedBody.data.outputUrl !== undefined) {
    payload.output_url = parsedBody.data.outputUrl || null;
  }
  if (parsedBody.data.error !== undefined) {
    payload.error = parsedBody.data.error || null;
  }
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
