import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const createSchema = z.object({
  reportType: z.enum(["dsar", "support", "audit", "telemetry"]),
  runAfterIso: z.string().optional(),
});

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_report_jobs")
    .select("id, report_type, status, requested_by, run_after, started_at, completed_at, error, created_at")
    .order("created_at", { ascending: false })
    .limit(300);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ jobs: data });
}

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = await request.json().catch(() => null);
  const parsed = createSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  let runAfter = new Date().toISOString();
  if (parsed.data.runAfterIso) {
    const parsedRunAfter = new Date(parsed.data.runAfterIso);
    if (Number.isNaN(parsedRunAfter.getTime())) {
      return NextResponse.json({ error: "Invalid runAfterIso datetime." }, { status: 400 });
    }
    runAfter = parsedRunAfter.toISOString();
  }

  const admin = createSupabaseAdminClient();
  const { data, error } = await admin
    .from("admin_report_jobs")
    .insert({
      report_type: parsed.data.reportType,
      status: "queued",
      requested_by: auth.userId,
      run_after: runAfter,
    })
    .select("id, report_type, status, run_after, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, job: data });
}
