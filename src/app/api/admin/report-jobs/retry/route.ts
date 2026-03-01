import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

const retrySchema = z.object({
  limit: z.number().int().min(1).max(200).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const parsed = retrySchema.safeParse({
    limit: body.limit ? Number(body.limit) : undefined,
  });
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const limit = parsed.data.limit ?? 25;
  const admin = createSupabaseAdminClient();
  const { data: failedJobs, error: failedJobsError } = await admin
    .from("admin_report_jobs")
    .select("id")
    .eq("status", "failed")
    .order("completed_at", { ascending: false })
    .limit(limit);

  if (failedJobsError) {
    console.error("Unexpected API error.", toSafeErrorRecord(failedJobsError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
  if (!failedJobs || failedJobs.length === 0) {
    return NextResponse.json({ success: true, retried: 0 });
  }

  const nowIso = new Date().toISOString();
  const jobIds = failedJobs.map((job) => job.id);
  const { error: retryError } = await admin
    .from("admin_report_jobs")
    .update({
      status: "queued",
      run_after: nowIso,
      started_at: null,
      completed_at: null,
      error: null,
    })
    .in("id", jobIds)
    .eq("status", "failed");

  if (retryError) {
    console.error("Unexpected API error.", toSafeErrorRecord(retryError));
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }

  return NextResponse.json({ success: true, retried: jobIds.length });
}
