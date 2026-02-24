import { NextResponse } from "next/server";
import { z } from "zod";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

const requeueStaleSchema = z.object({
  limit: z.number().int().min(1).max(500).optional(),
  maxAgeMinutes: z.number().int().min(5).max(10080).optional(),
  reportType: z.enum(["dsar", "support", "audit", "telemetry"]).optional(),
});

export async function POST(request: Request) {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
  const parsed = requeueStaleSchema.safeParse({
    limit: body.limit ? Number(body.limit) : undefined,
    maxAgeMinutes: body.maxAgeMinutes ? Number(body.maxAgeMinutes) : undefined,
    reportType: typeof body.reportType === "string" ? body.reportType : undefined,
  });

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload", details: parsed.error.flatten() }, { status: 400 });
  }

  const limit = parsed.data.limit ?? 100;
  const maxAgeMinutes = parsed.data.maxAgeMinutes ?? 90;
  const staleCutoffIso = new Date(Date.now() - maxAgeMinutes * 60 * 1000).toISOString();

  const admin = createSupabaseAdminClient();
  let staleQuery = admin
    .from("admin_report_jobs")
    .select("id, report_type, started_at, metadata")
    .eq("status", "running")
    .not("started_at", "is", null)
    .lt("started_at", staleCutoffIso)
    .order("started_at", { ascending: true })
    .limit(limit);

  if (parsed.data.reportType) {
    staleQuery = staleQuery.eq("report_type", parsed.data.reportType);
  }

  const { data: staleJobs, error: staleError } = await staleQuery;
  if (staleError) {
    return NextResponse.json({ error: staleError.message }, { status: 500 });
  }

  if (!staleJobs || staleJobs.length === 0) {
    return NextResponse.json({
      scanned: 0,
      requeued: 0,
      failedUpdates: 0,
      staleCutoff: staleCutoffIso,
      maxAgeMinutes,
      message: "No stale running report jobs matched the provided filters.",
    });
  }

  let requeued = 0;
  let failedUpdates = 0;

  for (const job of staleJobs) {
    const nowIso = new Date().toISOString();
    const startedAt = job.started_at ? new Date(job.started_at).getTime() : Date.now();
    const ageMinutes = Math.max(1, Math.round((Date.now() - startedAt) / 60000));
    const previousStaleRequeueCount = Number((job.metadata ?? {}).stale_requeue_count ?? 0);
    const nextMetadata = {
      ...(job.metadata ?? {}),
      stale_requeue_count: Number.isFinite(previousStaleRequeueCount)
        ? previousStaleRequeueCount + 1
        : 1,
      stale_requeued_at: nowIso,
      stale_requeued_by: "admin-report-jobs-api",
      stale_requeue_reason: `running report job exceeded ${maxAgeMinutes} minutes`,
      stale_age_minutes: ageMinutes,
    };

    const { error: updateError } = await admin
      .from("admin_report_jobs")
      .update({
        status: "queued",
        run_after: nowIso,
        started_at: null,
        completed_at: null,
        error: `Automatically re-queued after ${ageMinutes} minutes in running state.`,
        metadata: nextMetadata,
      })
      .eq("id", job.id)
      .eq("status", "running");

    if (updateError) {
      failedUpdates += 1;
      continue;
    }
    requeued += 1;
  }

  return NextResponse.json({
    scanned: staleJobs.length,
    requeued,
    failedUpdates,
    staleCutoff: staleCutoffIso,
    maxAgeMinutes,
  });
}
