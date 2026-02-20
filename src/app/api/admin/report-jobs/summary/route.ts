import { NextResponse } from "next/server";
import { requireAdminForApi } from "@/lib/admin/auth";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

function coerceNumber(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    if (Number.isFinite(parsed)) return parsed;
  }
  return null;
}

function readNumericSetting(value: unknown, fallback: number) {
  const direct = coerceNumber(value);
  if (direct !== null) return direct;
  if (value && typeof value === "object" && "value" in value) {
    const nested = coerceNumber((value as { value?: unknown }).value);
    if (nested !== null) return nested;
  }
  return fallback;
}

export async function GET() {
  const auth = await requireAdminForApi();
  if (!auth.isAuthorized) {
    return auth.response;
  }

  const admin = createSupabaseAdminClient();
  const now = new Date();
  const nowIso = now.toISOString();
  const failure24hCutoff = new Date(now.getTime() - 24 * 60 * 60 * 1000).toISOString();

  const { data: settingsRows, error: settingsError } = await admin
    .from("app_settings")
    .select("key, value")
    .in("key", [
      "report_queue_sla_stale_hours",
      "report_queue_sla_backlog_limit",
      "report_queue_sla_failure_24h_limit",
    ]);

  if (settingsError) {
    return NextResponse.json({ error: settingsError.message }, { status: 500 });
  }

  const settingsMap = new Map((settingsRows ?? []).map((entry) => [entry.key, entry.value]));
  const staleHoursThreshold = Math.max(
    1,
    readNumericSetting(settingsMap.get("report_queue_sla_stale_hours"), 6),
  );
  const backlogThreshold = Math.max(
    1,
    readNumericSetting(settingsMap.get("report_queue_sla_backlog_limit"), 15),
  );
  const failure24hThreshold = Math.max(
    1,
    readNumericSetting(settingsMap.get("report_queue_sla_failure_24h_limit"), 10),
  );
  const staleCutoffIso = new Date(now.getTime() - staleHoursThreshold * 60 * 60 * 1000).toISOString();

  const [
    queuedReadyResult,
    runningResult,
    staleQueuedResult,
    staleRunningStartedResult,
    staleRunningUnstartedResult,
    failed24hResult,
    oldestQueuedReadyResult,
    oldestRunningStartedResult,
    oldestRunningUnstartedResult,
  ] = await Promise.all([
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "queued")
      .lte("run_after", nowIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "running"),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "queued")
      .lt("run_after", staleCutoffIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "running")
      .not("started_at", "is", null)
      .lt("started_at", staleCutoffIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "running")
      .is("started_at", null)
      .lt("created_at", staleCutoffIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "failed")
      .gte("completed_at", failure24hCutoff),
    admin
      .from("admin_report_jobs")
      .select("run_after")
      .eq("status", "queued")
      .lte("run_after", nowIso)
      .order("run_after", { ascending: true })
      .limit(1)
      .maybeSingle(),
    admin
      .from("admin_report_jobs")
      .select("started_at")
      .eq("status", "running")
      .not("started_at", "is", null)
      .order("started_at", { ascending: true })
      .limit(1)
      .maybeSingle(),
    admin
      .from("admin_report_jobs")
      .select("created_at")
      .eq("status", "running")
      .is("started_at", null)
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle(),
  ]);

  const queryError =
    queuedReadyResult.error ??
    runningResult.error ??
    staleQueuedResult.error ??
    staleRunningStartedResult.error ??
    staleRunningUnstartedResult.error ??
    failed24hResult.error ??
    oldestQueuedReadyResult.error ??
    oldestRunningStartedResult.error ??
    oldestRunningUnstartedResult.error;

  if (queryError) {
    return NextResponse.json({ error: queryError.message }, { status: 500 });
  }

  const queuedReadyCount = queuedReadyResult.count ?? 0;
  const runningCount = runningResult.count ?? 0;
  const backlogCount = queuedReadyCount + runningCount;
  const staleQueuedCount = staleQueuedResult.count ?? 0;
  const staleRunningCount =
    (staleRunningStartedResult.count ?? 0) + (staleRunningUnstartedResult.count ?? 0);
  const staleCount = staleQueuedCount + staleRunningCount;
  const failed24hCount = failed24hResult.count ?? 0;
  const oldestRunningAt =
    oldestRunningStartedResult.data?.started_at ?? oldestRunningUnstartedResult.data?.created_at ?? null;
  const slaBreaches = [
    staleCount > 0,
    backlogCount >= backlogThreshold,
    failed24hCount >= failure24hThreshold,
  ].filter(Boolean).length;

  return NextResponse.json({
    generatedAt: nowIso,
    queuedReadyCount,
    runningCount,
    backlogCount,
    staleCount,
    staleQueuedCount,
    staleRunningCount,
    failed24hCount,
    oldestQueuedReadyAt: oldestQueuedReadyResult.data?.run_after ?? null,
    oldestRunningAt,
    staleCutoffAt: staleCutoffIso,
    staleHoursThreshold,
    backlogThreshold,
    failure24hThreshold,
    slaBreaches,
  });
}
