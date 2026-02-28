import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import ReportsClient from "./reports-client";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import ExplorerMetricsPanel from "./explorer-metrics-panel";

export const dynamic = "force-dynamic";
const REPORT_TYPES = ["dsar", "support", "audit", "telemetry"] as const;

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

type ReportQueueSummary = {
  generatedAt: string;
  queuedReadyCount: number;
  runningCount: number;
  backlogCount: number;
  staleCount: number;
  staleQueuedCount: number;
  staleRunningCount: number;
  failed24hCount: number;
  oldestQueuedReadyAt: string | null;
  oldestRunningAt: string | null;
  staleCutoffAt: string;
  staleHoursThreshold: number;
  backlogThreshold: number;
  failure24hThreshold: number;
  slaBreaches: number;
  reportTypeBreakdown: Record<
    (typeof REPORT_TYPES)[number],
    {
      queuedReady: number;
      running: number;
      backlog: number;
      staleQueued: number;
      staleRunning: number;
      stale: number;
      failed24h: number;
    }
  >;
};

type TelemetryWindowSummary = {
  daysWindow: number;
  totalEvents: number;
  activeLearners: number;
  activeLearnersCapped: boolean;
  lessonViews: number;
  lessonCompletions: number;
  quizAnswers: number;
  chunkViews: number;
  flashcardFlips: number;
  activityInteractions: number;
  completionRate: number;
  interactionDepth: number;
};

type LanguagePricingTelemetrySummary = {
  daysWindow: number;
  pricingViews: number;
  checkoutViews: number;
  checkoutStarts: number;
  successViews: number;
  planSelectClicks: number;
  manageSubscriptionClicks: number;
  pricingToCheckoutViewRate: number;
  checkoutStartRateFromCheckoutViews: number;
  checkoutToSuccessViewRate: number;
  errorMessage: string | null;
};

export default async function AdminReportsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile, error: profileError } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (profileError || !profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be an administrator to access reports.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const currentTime = new Date();
  const nowIso = currentTime.toISOString();
  const failure24hCutoff = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000).toISOString();

  const [exportHistoryResult, jobsResult, settingsResult] = await Promise.all([
    admin
      .from("admin_report_exports")
      .select("id, report_type, row_count, checksum_sha256, created_at, completed_at")
      .order("created_at", { ascending: false })
      .limit(50),
    admin
      .from("admin_report_jobs")
      .select("id, report_type, status, run_after, created_at, started_at, completed_at, error")
      .order("created_at", { ascending: false })
      .limit(50),
    admin
      .from("app_settings")
      .select("key, value")
      .in("key", [
        "report_queue_sla_stale_hours",
        "report_queue_sla_backlog_limit",
        "report_queue_sla_failure_24h_limit",
      ]),
  ]);

  const settingsMap = new Map((settingsResult.data ?? []).map((entry) => [entry.key, entry.value]));
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

  const staleCutoffIso = new Date(currentTime.getTime() - staleHoursThreshold * 60 * 60 * 1000).toISOString();
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

  const queuedReadyCount = queuedReadyResult.count ?? 0;
  const runningCount = runningResult.count ?? 0;
  const staleQueuedCount = staleQueuedResult.count ?? 0;
  const staleRunningCount =
    (staleRunningStartedResult.count ?? 0) + (staleRunningUnstartedResult.count ?? 0);
  const staleCount = staleQueuedCount + staleRunningCount;
  const failed24hCount = failed24hResult.count ?? 0;
  const backlogCount = queuedReadyCount + runningCount;
  const oldestQueuedReadyAt = oldestQueuedReadyResult.data?.run_after ?? null;
  const oldestRunningAt =
    oldestRunningStartedResult.data?.started_at ?? oldestRunningUnstartedResult.data?.created_at ?? null;
  const slaBreaches = [
    staleCount > 0,
    backlogCount >= backlogThreshold,
    failed24hCount >= failure24hThreshold,
  ].filter(Boolean).length;

  const [
    queuedReadyByType,
    runningByType,
    staleQueuedByType,
    staleRunningStartedByType,
    staleRunningUnstartedByType,
    failed24hByType,
  ] = await Promise.all([
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "queued")
          .eq("report_type", reportType)
          .lte("run_after", nowIso);
        return { reportType, count: count ?? 0, error };
      }),
    ),
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "running")
          .eq("report_type", reportType);
        return { reportType, count: count ?? 0, error };
      }),
    ),
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "queued")
          .eq("report_type", reportType)
          .lt("run_after", staleCutoffIso);
        return { reportType, count: count ?? 0, error };
      }),
    ),
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "running")
          .eq("report_type", reportType)
          .not("started_at", "is", null)
          .lt("started_at", staleCutoffIso);
        return { reportType, count: count ?? 0, error };
      }),
    ),
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "running")
          .eq("report_type", reportType)
          .is("started_at", null)
          .lt("created_at", staleCutoffIso);
        return { reportType, count: count ?? 0, error };
      }),
    ),
    Promise.all(
      REPORT_TYPES.map(async (reportType) => {
        const { count, error } = await admin
          .from("admin_report_jobs")
          .select("id", { count: "exact", head: true })
          .eq("status", "failed")
          .eq("report_type", reportType)
          .gte("completed_at", failure24hCutoff);
        return { reportType, count: count ?? 0, error };
      }),
    ),
  ]);

  const reportTypeBreakdown = Object.fromEntries(
    REPORT_TYPES.map((reportType) => {
      const queuedReady =
        queuedReadyByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const running = runningByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const staleQueued =
        staleQueuedByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const staleRunningStarted =
        staleRunningStartedByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const staleRunningUnstarted =
        staleRunningUnstartedByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const failed24h =
        failed24hByType.find((entry) => entry.reportType === reportType)?.count ?? 0;
      const staleRunning = staleRunningStarted + staleRunningUnstarted;

      return [
        reportType,
        {
          queuedReady,
          running,
          backlog: queuedReady + running,
          staleQueued,
          staleRunning,
          stale: staleQueued + staleRunning,
          failed24h,
        },
      ];
    }),
  ) as ReportQueueSummary["reportTypeBreakdown"];

  const queueSummary: ReportQueueSummary = {
    generatedAt: nowIso,
    queuedReadyCount,
    runningCount,
    backlogCount,
    staleCount,
    staleQueuedCount,
    staleRunningCount,
    failed24hCount,
    oldestQueuedReadyAt,
    oldestRunningAt,
    staleCutoffAt: staleCutoffIso,
    staleHoursThreshold,
    backlogThreshold,
    failure24hThreshold,
    slaBreaches,
    reportTypeBreakdown,
  };

  const telemetryDaysWindow = 7;
  const telemetryCutoffIso = new Date(
    currentTime.getTime() - telemetryDaysWindow * 24 * 60 * 60 * 1000,
  ).toISOString();
  const pricingTelemetryDaysWindow = 30;
  const pricingTelemetryCutoffIso = new Date(
    currentTime.getTime() - pricingTelemetryDaysWindow * 24 * 60 * 60 * 1000,
  ).toISOString();
  const uniqueLearnerSampleLimit = 20000;
  const [
    telemetryEvents7dResult,
    lessonViews7dResult,
    lessonCompletions7dResult,
    quizAnswers7dResult,
    chunkViews7dResult,
    flashcardFlips7dResult,
    activityInteractions7dResult,
    telemetryUniqueUsers7dResult,
    pricingViews30dResult,
    checkoutViews30dResult,
    successViews30dResult,
    checkoutStarts30dResult,
    planCheckoutSelect30dResult,
    checkoutPlanSelect30dResult,
    manageSubscriptionClick30dResult,
  ] = await Promise.all([
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "lesson_viewed")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "lesson_completed")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "quiz_answered")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "chunk_viewed")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "flashcard_flipped")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("event_type", "activity_interacted")
      .gte("event_at", telemetryCutoffIso),
    admin
      .from("learning_events")
      .select("user_id")
      .gte("event_at", telemetryCutoffIso)
      .limit(uniqueLearnerSampleLimit),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:language")
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:checkout")
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "lesson_viewed")
      .eq("lesson_id", "billing:success")
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "activity_interacted")
      .contains("payload", { action: "checkout_started" })
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "activity_interacted")
      .contains("payload", { action: "plan_checkout_selected" })
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "activity_interacted")
      .contains("payload", { action: "checkout_plan_selected" })
      .gte("event_at", pricingTelemetryCutoffIso),
    admin
      .from("learning_events")
      .select("id", { count: "exact", head: true })
      .eq("module_id", "billing")
      .eq("event_type", "activity_interacted")
      .contains("payload", { action: "checkout_manage_subscription_clicked" })
      .gte("event_at", pricingTelemetryCutoffIso),
  ]);

  const uniqueLearnerSet = new Set(
    (telemetryUniqueUsers7dResult.data ?? [])
      .map((row) => row.user_id)
      .filter((value): value is string => typeof value === "string" && value.length > 0),
  );
  const telemetryErrorMessage =
    telemetryEvents7dResult.error?.message ??
    lessonViews7dResult.error?.message ??
    lessonCompletions7dResult.error?.message ??
    quizAnswers7dResult.error?.message ??
    chunkViews7dResult.error?.message ??
    flashcardFlips7dResult.error?.message ??
    activityInteractions7dResult.error?.message ??
    telemetryUniqueUsers7dResult.error?.message ??
    null;
  const lessonViews = lessonViews7dResult.count ?? 0;
  const lessonCompletions = lessonCompletions7dResult.count ?? 0;
  const quizAnswers = quizAnswers7dResult.count ?? 0;
  const chunkViews = chunkViews7dResult.count ?? 0;
  const flashcardFlips = flashcardFlips7dResult.count ?? 0;
  const activityInteractions = activityInteractions7dResult.count ?? 0;
  const interactionDepthBase = chunkViews + flashcardFlips + activityInteractions + quizAnswers;
  const telemetrySummary: TelemetryWindowSummary = {
    daysWindow: telemetryDaysWindow,
    totalEvents: telemetryEvents7dResult.count ?? 0,
    activeLearners: uniqueLearnerSet.size,
    activeLearnersCapped: uniqueLearnerSet.size >= uniqueLearnerSampleLimit,
    lessonViews,
    lessonCompletions,
    quizAnswers,
    chunkViews,
    flashcardFlips,
    activityInteractions,
    completionRate: lessonViews > 0 ? Number((lessonCompletions / lessonViews).toFixed(3)) : 0,
    interactionDepth: lessonViews > 0 ? Number((interactionDepthBase / lessonViews).toFixed(3)) : 0,
  };

  const pricingTelemetryErrorMessage =
    pricingViews30dResult.error?.message ??
    checkoutViews30dResult.error?.message ??
    successViews30dResult.error?.message ??
    checkoutStarts30dResult.error?.message ??
    planCheckoutSelect30dResult.error?.message ??
    checkoutPlanSelect30dResult.error?.message ??
    manageSubscriptionClick30dResult.error?.message ??
    null;
  const pricingViews = pricingViews30dResult.count ?? 0;
  const checkoutViews = checkoutViews30dResult.count ?? 0;
  const successViews = successViews30dResult.count ?? 0;
  const checkoutStarts = checkoutStarts30dResult.count ?? 0;
  const planSelectClicks =
    (planCheckoutSelect30dResult.count ?? 0) + (checkoutPlanSelect30dResult.count ?? 0);
  const manageSubscriptionClicks = manageSubscriptionClick30dResult.count ?? 0;
  const languagePricingTelemetrySummary: LanguagePricingTelemetrySummary = {
    daysWindow: pricingTelemetryDaysWindow,
    pricingViews,
    checkoutViews,
    checkoutStarts,
    successViews,
    planSelectClicks,
    manageSubscriptionClicks,
    pricingToCheckoutViewRate:
      pricingViews > 0 ? Number((checkoutViews / pricingViews).toFixed(3)) : 0,
    checkoutStartRateFromCheckoutViews:
      checkoutViews > 0 ? Number((checkoutStarts / checkoutViews).toFixed(3)) : 0,
    checkoutToSuccessViewRate:
      checkoutViews > 0 ? Number((successViews / checkoutViews).toFixed(3)) : 0,
    errorMessage: pricingTelemetryErrorMessage,
  };

  const exportHistory = exportHistoryResult.data ?? [];
  const jobs = jobsResult.data ?? [];

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-12">
      <SoftCard as="header" className="border-accent/20 bg-[var(--gradient-hero)] p-6">
        <h1 className="text-3xl font-semibold tracking-tight">Admin Reports</h1>
        <p className="mt-2 text-sm text-zinc-700">
          Export operational records as CSV for audits, legal workflows, and finance reconciliation.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ProgressChip label="Backlog" value={queueSummary.backlogCount} tone={queueSummary.backlogCount > queueSummary.backlogThreshold ? "warning" : "info"} />
          <ProgressChip label="Stale" value={queueSummary.staleCount} tone={queueSummary.staleCount > 0 ? "warning" : "success"} />
          <ProgressChip label="Failed 24h" value={queueSummary.failed24hCount} tone={queueSummary.failed24hCount >= queueSummary.failure24hThreshold ? "warning" : "neutral"} />
          <ProgressChip label="Events 7d" value={telemetrySummary.totalEvents} tone="neutral" />
          <ProgressChip label="Pricing Views 30d" value={languagePricingTelemetrySummary.pricingViews} tone="neutral" />
          <ProgressChip label="Checkout Starts 30d" value={languagePricingTelemetrySummary.checkoutStarts} tone="info" />
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <ul className="space-y-3">
          <li>
            <a
              href="/api/admin/reports/dsar"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download DSAR Report (CSV)
            </a>
          </li>
          <li>
            <a
              href="/api/admin/reports/support"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download Support Tickets Report (CSV)
            </a>
          </li>
          <li>
            <a
              href="/api/admin/reports/audit"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download Admin Audit Report (CSV)
            </a>
          </li>
          <li>
            <a
              href="/api/admin/reports/telemetry?days=30"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download Learning Telemetry Report (CSV, 30d)
            </a>
          </li>
          <li>
            <a
              href="/api/admin/reports/explorer?days=30"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download Explorer Funnel Snapshot (JSON, 30d)
            </a>
          </li>
          <li>
            <a
              href="/api/admin/reports/language-pricing?days=30"
              className="ui-focus-ring inline-flex rounded px-1 text-sm font-medium underline"
            >
              Download Language Pricing Funnel (JSON, 30d)
            </a>
          </li>
        </ul>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Learning Telemetry Snapshot (Last 7 Days)</h2>
        <p className="mt-1 text-xs text-zinc-600">
          Derived from xAPI-lite `learning_events`. Use this for engagement and completion trend checks.
        </p>
        {telemetryErrorMessage ? (
          <p className="mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
            Telemetry snapshot currently unavailable: {telemetryErrorMessage}
          </p>
        ) : null}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Total Events</p>
            <p className="mt-1 text-2xl font-semibold">{telemetrySummary.totalEvents}</p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Active Learners</p>
            <p className="mt-1 text-2xl font-semibold">
              {telemetrySummary.activeLearners}
              {telemetrySummary.activeLearnersCapped ? "+" : ""}
            </p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Completion / View</p>
            <p className="mt-1 text-2xl font-semibold">{telemetrySummary.completionRate}</p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Interaction Depth</p>
            <p className="mt-1 text-2xl font-semibold">{telemetrySummary.interactionDepth}</p>
          </article>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            lesson_viewed: {telemetrySummary.lessonViews}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            lesson_completed: {telemetrySummary.lessonCompletions}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            quiz_answered: {telemetrySummary.quizAnswers}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            chunk_viewed: {telemetrySummary.chunkViews}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            flashcard_flipped: {telemetrySummary.flashcardFlips}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            activity_interacted: {telemetrySummary.activityInteractions}
          </article>
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Language Pricing Funnel (Last 30 Days)</h2>
        <p className="mt-1 text-xs text-zinc-600">
          Billing module conversion trend based on `learning_events` from pricing, checkout, and success screens.
        </p>
        {languagePricingTelemetrySummary.errorMessage ? (
          <p className="mt-2 rounded-md border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
            Language pricing funnel currently unavailable: {languagePricingTelemetrySummary.errorMessage}
          </p>
        ) : null}
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Pricing Views</p>
            <p className="mt-1 text-2xl font-semibold">{languagePricingTelemetrySummary.pricingViews}</p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Checkout Views</p>
            <p className="mt-1 text-2xl font-semibold">{languagePricingTelemetrySummary.checkoutViews}</p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Checkout Starts</p>
            <p className="mt-1 text-2xl font-semibold">{languagePricingTelemetrySummary.checkoutStarts}</p>
          </article>
          <article className="rounded-md border border-border bg-surface p-3">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Success Views</p>
            <p className="mt-1 text-2xl font-semibold">{languagePricingTelemetrySummary.successViews}</p>
          </article>
        </div>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            pricing -&gt; checkout view rate: {languagePricingTelemetrySummary.pricingToCheckoutViewRate}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            checkout view -&gt; start rate: {languagePricingTelemetrySummary.checkoutStartRateFromCheckoutViews}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            checkout view -&gt; success rate: {languagePricingTelemetrySummary.checkoutToSuccessViewRate}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            plan selection clicks: {languagePricingTelemetrySummary.planSelectClicks}
          </article>
          <article className="rounded-md border border-border bg-surface p-3 text-xs">
            manage-subscription clicks: {languagePricingTelemetrySummary.manageSubscriptionClicks}
          </article>
        </div>
      </SoftCard>

      <ExplorerMetricsPanel />

      <SoftCard as="section" className="p-5">
        <h2 className="text-lg font-semibold">Recent Export History</h2>
        <div className="mt-3 space-y-2">
          {(exportHistory ?? []).map((entry) => (
            <SoftCard
              key={entry.id}
              as="article"
              className="border-border/70 p-3 text-sm"
            >
              <p className="font-medium">
                {entry.report_type} ({entry.row_count} rows)
              </p>
              <p className="text-xs text-zinc-500">
                Created {new Date(entry.created_at).toLocaleString()}
              </p>
              {entry.completed_at ? (
                <p className="text-xs text-zinc-500">
                  Completed {new Date(entry.completed_at).toLocaleString()}
                </p>
              ) : null}
              <p className="mt-1 break-all text-xs text-zinc-500">
                SHA256: {entry.checksum_sha256 ?? "n/a"}
              </p>
            </SoftCard>
          ))}
          {exportHistory.length === 0 ? (
            <p className="text-sm text-zinc-500">No export history yet.</p>
          ) : null}
        </div>
      </SoftCard>

      <ReportsClient initialJobs={jobs} initialSummary={queueSummary} />
    </main>
  );
}
