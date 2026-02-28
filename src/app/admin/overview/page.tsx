import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { redirect } from "next/navigation";
import { buildCurriculumBacklog, summarizeCurriculumBacklog } from "@/lib/admin/curriculum-backlog";
import { loadCurriculumSummary } from "@/lib/admin/curriculum-summary";
import { loadAiTutorUsageSummary } from "@/lib/admin/ai-tutor-usage";
import { loadAiRemediationUsageSummary } from "@/lib/admin/ai-remediation-usage";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export const dynamic = "force-dynamic";

function monthKeyFromDate(date: Date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
}

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

function formatAgeFromIso(isoTimestamp: string | null) {
  if (!isoTimestamp) return "n/a";
  const createdAt = new Date(isoTimestamp);
  if (Number.isNaN(createdAt.getTime())) return "n/a";

  const diffMs = Date.now() - createdAt.getTime();
  if (diffMs < 0) return "<1m";

  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  if (diffMinutes < 60) {
    return `${diffMinutes}m`;
  }

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) {
    return `${diffHours}h`;
  }

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d`;
}

export default async function AdminOverviewPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("is_admin")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile?.is_admin) {
    return (
      <main className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center px-6 py-24">
        <SoftCard className="w-full max-w-2xl border-rose-200 bg-rose-50 p-8 text-center">
          <h1 className="text-2xl font-semibold">Access Denied</h1>
          <p className="mt-3 text-sm text-rose-700">
            You must be an administrator to access the overview.
          </p>
        </SoftCard>
      </main>
    );
  }

  const admin = createSupabaseAdminClient();
  const currentMonth = monthKeyFromDate(new Date());
  const dsarCutoffDate = new Date();
  dsarCutoffDate.setUTCDate(dsarCutoffDate.getUTCDate() - 7);
  const dsarCutoff = dsarCutoffDate.toISOString();
  const mediaDayCutoffDate = new Date();
  mediaDayCutoffDate.setUTCHours(mediaDayCutoffDate.getUTCHours() - 24);
  const mediaDayCutoff = mediaDayCutoffDate.toISOString();
  const projectRoot = process.cwd();
  const promptPackPath = path.join(projectRoot, "public", "LESSON-MEDIA-PROMPT-PACK.json");

  const [
    supportCountsResult,
    dsarBacklogResult,
    mediaQueueResult,
    mediaCompleted24hResult,
    mediaFailed24hResult,
    mediaOldestQueuedResult,
    alertsResult,
    approvalsResult,
    currentMonthTokensResult,
    mediaSlaSettingsResult,
    curriculumSummary,
    aiTutorUsageSummary,
    aiRemediationUsageSummary,
    promptPackRaw,
  ] = await Promise.all([
    admin
      .from("support_tickets")
      .select("status, priority", { count: "exact" }),
    admin
      .from("dsar_requests")
      .select("id", { count: "exact", head: true })
      .in("status", ["pending", "in_progress"])
      .lt("requested_at", dsarCutoff),
    admin
      .from("media_generation_jobs")
      .select("status", { count: "exact" })
      .in("status", ["queued", "running"]),
    admin
      .from("media_generation_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "completed")
      .gte("completed_at", mediaDayCutoff),
    admin
      .from("media_generation_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "failed")
      .gte("completed_at", mediaDayCutoff),
    admin
      .from("media_generation_jobs")
      .select("created_at")
      .eq("status", "queued")
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle(),
    admin
      .from("admin_alerts")
      .select("id", { count: "exact", head: true })
      .eq("acknowledged", false),
    admin
      .from("admin_approval_requests")
      .select("id", { count: "exact", head: true })
      .eq("status", "pending"),
    admin
      .from("user_tokens")
      .select("user_id, spent_usd")
      .eq("month_key", currentMonth),
    admin
      .from("app_settings")
      .select("key, value")
      .in("key", [
        "media_queue_sla_stale_hours",
        "media_queue_sla_backlog_limit",
        "media_queue_sla_failure_24h_limit",
        "report_queue_sla_stale_hours",
        "report_queue_sla_backlog_limit",
        "report_queue_sla_failure_24h_limit",
      ]),
    loadCurriculumSummary(projectRoot),
    loadAiTutorUsageSummary(admin),
    loadAiRemediationUsageSummary(admin),
    fs.readFile(promptPackPath, "utf8").catch(() => '{"totals":{"lessons":0}}'),
  ]);

  const promptPack = JSON.parse(promptPackRaw) as {
    totals?: { lessons?: number };
  };

  const supportRows = supportCountsResult.data ?? [];
  const openTickets = supportRows.filter((row) => row.status === "open" || row.status === "in_progress").length;
  const urgentTickets = supportRows.filter((row) => row.priority === "urgent" && (row.status === "open" || row.status === "in_progress")).length;

  const tokens = currentMonthTokensResult.data ?? [];
  const totalCost = tokens.reduce((acc, row) => acc + Number(row.spent_usd ?? 0), 0);
  const activeUsers = new Set(tokens.map((row) => row.user_id)).size;
  const avgCostPerUser = activeUsers > 0 ? totalCost / activeUsers : 0;
  const oldestQueuedAge = formatAgeFromIso(mediaOldestQueuedResult.data?.created_at ?? null);
  const mediaCompleted24h = mediaCompleted24hResult.count ?? 0;
  const mediaFailed24h = mediaFailed24hResult.count ?? 0;
  const mediaSettingsMap = new Map((mediaSlaSettingsResult.data ?? []).map((row) => [row.key, row.value]));
  const staleHoursThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("media_queue_sla_stale_hours"), 6),
  );
  const backlogThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("media_queue_sla_backlog_limit"), 30),
  );
  const failure24hThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("media_queue_sla_failure_24h_limit"), 20),
  );
  const reportStaleHoursThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("report_queue_sla_stale_hours"), 6),
  );
  const reportBacklogThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("report_queue_sla_backlog_limit"), 15),
  );
  const reportFailure24hThreshold = Math.max(
    1,
    readNumericSetting(mediaSettingsMap.get("report_queue_sla_failure_24h_limit"), 10),
  );
  const staleCutoffDate = new Date();
  staleCutoffDate.setUTCHours(staleCutoffDate.getUTCHours() - staleHoursThreshold);
  const staleCutoffIso = staleCutoffDate.toISOString();
  const { count: mediaStaleCountRaw } = await admin
    .from("media_generation_jobs")
    .select("id", { count: "exact", head: true })
    .in("status", ["queued", "running"])
    .lt("created_at", staleCutoffIso);
  const mediaStaleCount = mediaStaleCountRaw ?? 0;
  const mediaBacklogCount = mediaQueueResult.count ?? 0;
  const slaBreaches = [
    mediaStaleCount > 0,
    mediaBacklogCount >= backlogThreshold,
    mediaFailed24h >= failure24hThreshold,
  ].filter(Boolean).length;
  const mediaSlaSummary = `Stale ${mediaStaleCount}/${staleHoursThreshold}h | backlog ${mediaBacklogCount}/${backlogThreshold} | failed24h ${mediaFailed24h}/${failure24hThreshold}`;

  const reportStaleCutoffDate = new Date();
  reportStaleCutoffDate.setUTCHours(reportStaleCutoffDate.getUTCHours() - reportStaleHoursThreshold);
  const reportStaleCutoffIso = reportStaleCutoffDate.toISOString();
  const [reportQueuedReadyResult, reportRunningResult, reportQueuedStaleResult, reportRunningStaleResult, reportFailed24hResult, reportOldestQueuedReadyResult, reportOldestRunningResult] = await Promise.all([
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "queued")
      .lte("run_after", new Date().toISOString()),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "running"),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "queued")
      .lt("run_after", reportStaleCutoffIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "running")
      .lt("created_at", reportStaleCutoffIso),
    admin
      .from("admin_report_jobs")
      .select("id", { count: "exact", head: true })
      .eq("status", "failed")
      .gte("completed_at", mediaDayCutoff),
    admin
      .from("admin_report_jobs")
      .select("run_after")
      .eq("status", "queued")
      .lte("run_after", new Date().toISOString())
      .order("run_after", { ascending: true })
      .limit(1)
      .maybeSingle(),
    admin
      .from("admin_report_jobs")
      .select("started_at, created_at")
      .eq("status", "running")
      .order("created_at", { ascending: true })
      .limit(1)
      .maybeSingle(),
  ]);
  const reportQueuedReadyCount = reportQueuedReadyResult.count ?? 0;
  const reportRunningCount = reportRunningResult.count ?? 0;
  const reportBacklogCount = reportQueuedReadyCount + reportRunningCount;
  const reportQueuedStaleCount = reportQueuedStaleResult.count ?? 0;
  const reportRunningStaleCount = reportRunningStaleResult.count ?? 0;
  const reportStaleCount = reportQueuedStaleCount + reportRunningStaleCount;
  const reportFailed24h = reportFailed24hResult.count ?? 0;
  const oldestReportQueuedAge = formatAgeFromIso(reportOldestQueuedReadyResult.data?.run_after ?? null);
  const oldestReportRunningSource =
    reportOldestRunningResult.data?.started_at ?? reportOldestRunningResult.data?.created_at ?? null;
  const oldestReportRunningAge = formatAgeFromIso(oldestReportRunningSource);
  const reportSlaBreaches = [
    reportStaleCount > 0,
    reportBacklogCount >= reportBacklogThreshold,
    reportFailed24h >= reportFailure24hThreshold,
  ].filter(Boolean).length;
  const reportSlaSummary = `Stale ${reportStaleCount}/${reportStaleHoursThreshold}h | backlog ${reportBacklogCount}/${reportBacklogThreshold} | failed24h ${reportFailed24h}/${reportFailure24hThreshold}`;
  const curriculumBacklogSummary = summarizeCurriculumBacklog(
    buildCurriculumBacklog(curriculumSummary),
  );
  const tutorUsageSubtext = aiTutorUsageSummary.setupRequired
    ? (aiTutorUsageSummary.message ?? "Tutor usage tracking unavailable")
    : `Answers ${aiTutorUsageSummary.answersToday} · active users ${aiTutorUsageSummary.activeUsersToday}${
        aiTutorUsageSummary.dailyLimit > 0
          ? ` · at/over limit ${aiTutorUsageSummary.usersAtOrAboveLimit}`
          : ""
      }${aiTutorUsageSummary.rowsTruncated ? " · sampled rows capped" : ""}`;
  const remediationUsageSubtext = aiRemediationUsageSummary.setupRequired
    ? (aiRemediationUsageSummary.message ?? "Worksheet usage tracking unavailable")
    : `7d generated ${aiRemediationUsageSummary.generated7d} · 7d downloaded ${aiRemediationUsageSummary.downloaded7d} · 7d completed ${aiRemediationUsageSummary.completed7d} · today funnel ${aiRemediationUsageSummary.viewToDownloadRateToday}%->${aiRemediationUsageSummary.downloadToCompletionRateToday}% · active users ${aiRemediationUsageSummary.activeUsersToday}${
        aiRemediationUsageSummary.rowsTruncated ? " · sampled rows capped" : ""
      }`;

  const cards = [
    {
      title: "Open Support Tickets",
      value: String(openTickets),
      subtext: `Urgent: ${urgentTickets}`,
      href: "/admin/operations",
    },
    {
      title: "DSAR Backlog (>7 days)",
      value: String(dsarBacklogResult.count ?? 0),
      subtext: "Pending + in progress",
      href: "/admin/compliance",
    },
    {
      title: "Media Queue Load",
      value: String(mediaQueueResult.count ?? 0),
      subtext: `Queued/running jobs · oldest queued ${oldestQueuedAge}`,
      href: "/admin/media",
    },
    {
      title: "Media Throughput (24h)",
      value: String(mediaCompleted24h),
      subtext: `Completed jobs · failed ${mediaFailed24h}`,
      href: "/admin/media",
    },
    {
      title: "Media SLA Status",
      value: slaBreaches === 0 ? "OK" : `${slaBreaches} breach${slaBreaches === 1 ? "" : "es"}`,
      subtext: mediaSlaSummary,
      href: "/admin/alerts",
    },
    {
      title: "Report Queue Load",
      value: String(reportBacklogCount),
      subtext: `Queued-ready ${reportQueuedReadyCount} · running ${reportRunningCount} · oldest queued ${oldestReportQueuedAge} · oldest running ${oldestReportRunningAge}`,
      href: "/admin/reports",
    },
    {
      title: "Report SLA Status",
      value: reportSlaBreaches === 0 ? "OK" : `${reportSlaBreaches} breach${reportSlaBreaches === 1 ? "" : "es"}`,
      subtext: reportSlaSummary,
      href: "/admin/alerts",
    },
    {
      title: "Unacknowledged Alerts",
      value: String(alertsResult.count ?? 0),
      subtext: "Operational alerts",
      href: "/admin/alerts",
    },
    {
      title: "Pending Approvals",
      value: String(approvalsResult.count ?? 0),
      subtext: "High-impact actions awaiting review",
      href: "/admin/operations",
    },
    {
      title: "Current Month Spend",
      value: `$${totalCost.toFixed(2)}`,
      subtext: `Avg/user: $${avgCostPerUser.toFixed(4)}`,
      href: "/admin/costs",
    },
    {
      title: "Curriculum Quality Score",
      value: String(curriculumSummary.quality.averageScore),
      subtext: `${curriculumSummary.quality.highPriorityModules} high-priority modules across ${curriculumSummary.quality.modules} modules`,
      href: "/admin/curriculum",
    },
    {
      title: "Curriculum Coverage",
      value: `${curriculumSummary.expansion.completionPercent}%`,
      subtext: `${curriculumSummary.expansion.totalNeeded} lessons still needed to hit target matrix`,
      href: "/admin/curriculum",
    },
    {
      title: "Curriculum Report Freshness",
      value: curriculumSummary.reports.stale ? "STALE" : "FRESH",
      subtext: `Newest artifact age ${formatAgeFromIso(curriculumSummary.reports.newestGeneratedAt)}`,
      href: "/admin/curriculum",
    },
    {
      title: "Curriculum Backlog",
      value: String(curriculumBacklogSummary.total),
      subtext: `High priority ${curriculumBacklogSummary.byPriority.high} · quality ${curriculumBacklogSummary.byWorkstream.quality}`,
      href: "/admin/curriculum",
    },
    {
      title: "Exam Prep Track Coverage",
      value: `${curriculumSummary.examPrep.availableTrackCount}/${curriculumSummary.examPrep.targetTrackCount}`,
      subtext:
        curriculumSummary.examPrep.missingTracks.length > 0
          ? `Missing: ${curriculumSummary.examPrep.missingTracks.join(", ")}`
          : "All target exam tracks available",
      href: "/admin/curriculum",
    },
    {
      title: "Exam Prep Content",
      value: String(curriculumSummary.examPrep.totalLessons),
      subtext: `${curriculumSummary.examPrep.totalModules} modules · avg score ${curriculumSummary.examPrep.averageScore}`,
      href: "/admin/curriculum",
    },
    {
      title: "Lesson Prompt Coverage",
      value: String(promptPack.totals?.lessons ?? 0),
      subtext: "Lessons with generated media prompts",
      href: "/admin/media",
    },
    {
      title: "AI Tutor Questions (Today)",
      value: aiTutorUsageSummary.setupRequired ? "N/A" : String(aiTutorUsageSummary.questionsToday),
      subtext: tutorUsageSubtext,
      href: "/api/admin/ai/tutor-usage",
    },
    {
      title: "AI Worksheets (Today)",
      value: aiRemediationUsageSummary.setupRequired ? "N/A" : String(aiRemediationUsageSummary.generatedToday),
      subtext: remediationUsageSubtext,
      href: "/api/admin/ai/remediation-usage",
    },
    {
      title: "AI Worksheet Completion",
      value: aiRemediationUsageSummary.setupRequired ? "N/A" : `${aiRemediationUsageSummary.completionRateToday}%`,
      subtext: aiRemediationUsageSummary.setupRequired
        ? (aiRemediationUsageSummary.message ?? "Worksheet funnel unavailable")
        : `View->download ${aiRemediationUsageSummary.viewToDownloadRateToday}% · download->complete ${aiRemediationUsageSummary.downloadToCompletionRateToday}%`,
      href: "/api/admin/ai/remediation-usage/timeseries?days=14",
    },
    {
      title: "AI Worksheet Analytics Export",
      value: aiRemediationUsageSummary.setupRequired ? "N/A" : `${aiRemediationUsageSummary.generated7d}`,
      subtext: aiRemediationUsageSummary.setupRequired
        ? (aiRemediationUsageSummary.message ?? "Worksheet export unavailable")
        : "Download CSV with daily trend + top downloaded/completed lessons",
      href: "/api/admin/ai/remediation-usage/export?days=14",
    },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* ── Page header ──────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[22px] font-semibold text-[#1a1f36]">Overview</h1>
          <p className="mt-1 text-[13px] text-[#697386]">
            Operational command center for the current platform state.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <ProgressChip label="Tickets" value={openTickets} tone={openTickets > 0 ? "warning" : "success"} />
          <ProgressChip label="Media" value={mediaBacklogCount} tone={mediaBacklogCount >= backlogThreshold ? "warning" : "info"} />
          <ProgressChip label="Reports" value={reportBacklogCount} tone={reportBacklogCount >= reportBacklogThreshold ? "warning" : "info"} />
          <ProgressChip label="Tutor Q" value={aiTutorUsageSummary.setupRequired ? "n/a" : aiTutorUsageSummary.questionsToday} tone={aiTutorUsageSummary.setupRequired ? "warning" : "info"} />
          <ProgressChip label="Worksheets" value={aiRemediationUsageSummary.setupRequired ? "n/a" : aiRemediationUsageSummary.completedToday} tone={aiRemediationUsageSummary.setupRequired ? "warning" : "success"} />
        </div>
      </div>

      {/* ── Metric grid ──────────────────────────────────────────────────── */}
      <section
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        aria-label="Platform metrics"
      >
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm transition-all hover:border-[#c4cdd8] hover:shadow-md ui-focus-ring"
          >
            <p className="text-[11px] font-medium uppercase tracking-wider text-[#697386]">
              {card.title}
            </p>
            <p className="mt-2 text-[26px] font-semibold leading-none text-[#1a1f36]">
              {card.value}
            </p>
            <p className="mt-2 text-[12px] text-[#697386] line-clamp-2">{card.subtext}</p>
          </Link>
        ))}
      </section>

      {/* ── Quick actions ─────────────────────────────────────────────────── */}
      <section className="mt-6 rounded-xl border border-[#e3e8ee] bg-white p-5">
        <h2 className="text-[13px] font-semibold text-[#1a1f36]">Quick Actions</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            { href: "/admin/alerts",                                           label: "Review Alerts" },
            { href: "/admin/media",                                            label: "Media Queue" },
            { href: "/admin/curriculum",                                       label: "Curriculum Backlog" },
            { href: "/api/admin/curriculum/backlog",                           label: "Export Backlog CSV" },
            { href: "/api/admin/curriculum/backlog?format=json&limit=1000",    label: "Backlog JSON" },
            { href: "/admin/compliance",                                       label: "DSAR / Compliance" },
            { href: "/admin/reports",                                          label: "Export Reports" },
            { href: "/api/admin/ai/tutor-usage",                               label: "AI Tutor Usage" },
            { href: "/api/admin/ai/remediation-usage",                         label: "Worksheet Usage" },
            { href: "/api/admin/ai/remediation-usage/timeseries?days=14",      label: "Worksheet Timeseries" },
            { href: "/api/admin/ai/remediation-usage/export?days=14",          label: "Worksheet Analytics CSV" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="ui-focus-ring rounded-md border border-[#e3e8ee] bg-white px-3 py-2 text-[13px] font-medium text-[#3c4257] shadow-sm transition hover:border-[#c4cdd8] hover:bg-[#f6f9fc]"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
