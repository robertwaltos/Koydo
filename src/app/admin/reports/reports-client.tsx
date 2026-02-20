"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

type ReportJob = {
  id: string;
  report_type: string;
  status: string;
  run_after: string;
  created_at: string;
  started_at?: string | null;
  completed_at?: string | null;
  error?: string | null;
};

type ReportType = "dsar" | "support" | "audit";

type ReportTypeBreakdownEntry = {
  queuedReady: number;
  running: number;
  backlog: number;
  staleQueued: number;
  staleRunning: number;
  stale: number;
  failed24h: number;
};

type ReportTypeBreakdown = Record<ReportType, ReportTypeBreakdownEntry>;

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
  reportTypeBreakdown: ReportTypeBreakdown;
};

type ReportQueueSummaryResponse = Partial<ReportQueueSummary> & {
  error?: string;
};

const REPORT_TYPES: ReportType[] = ["dsar", "support", "audit"];

function isFiniteNumber(value: unknown): value is number {
  return typeof value === "number" && Number.isFinite(value);
}

function formatAgeFromIso(isoTimestamp: string | null) {
  if (!isoTimestamp) return "n/a";
  const timestamp = new Date(isoTimestamp);
  if (Number.isNaN(timestamp.getTime())) return "n/a";

  const diffMs = Date.now() - timestamp.getTime();
  if (diffMs < 0) return "<1m";

  const diffMinutes = Math.floor(diffMs / 60000);
  if (diffMinutes < 60) return `${diffMinutes}m`;
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours}h`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d`;
}

function buildDefaultReportTypeBreakdown(): ReportTypeBreakdown {
  return {
    dsar: {
      queuedReady: 0,
      running: 0,
      backlog: 0,
      staleQueued: 0,
      staleRunning: 0,
      stale: 0,
      failed24h: 0,
    },
    support: {
      queuedReady: 0,
      running: 0,
      backlog: 0,
      staleQueued: 0,
      staleRunning: 0,
      stale: 0,
      failed24h: 0,
    },
    audit: {
      queuedReady: 0,
      running: 0,
      backlog: 0,
      staleQueued: 0,
      staleRunning: 0,
      stale: 0,
      failed24h: 0,
    },
  };
}

function parseReportTypeBreakdown(value: unknown): ReportTypeBreakdown {
  const fallback = buildDefaultReportTypeBreakdown();
  if (!value || typeof value !== "object") {
    return fallback;
  }
  const record = value as Record<string, unknown>;
  for (const reportType of REPORT_TYPES) {
    const entry = record[reportType];
    if (!entry || typeof entry !== "object") {
      continue;
    }
    const entryRecord = entry as Record<string, unknown>;
    const queuedReady = isFiniteNumber(entryRecord.queuedReady) ? entryRecord.queuedReady : 0;
    const running = isFiniteNumber(entryRecord.running) ? entryRecord.running : 0;
    const staleQueued = isFiniteNumber(entryRecord.staleQueued) ? entryRecord.staleQueued : 0;
    const staleRunning = isFiniteNumber(entryRecord.staleRunning) ? entryRecord.staleRunning : 0;
    const failed24h = isFiniteNumber(entryRecord.failed24h) ? entryRecord.failed24h : 0;
    const backlog = isFiniteNumber(entryRecord.backlog) ? entryRecord.backlog : queuedReady + running;
    const stale = isFiniteNumber(entryRecord.stale) ? entryRecord.stale : staleQueued + staleRunning;
    fallback[reportType] = {
      queuedReady,
      running,
      backlog,
      staleQueued,
      staleRunning,
      stale,
      failed24h,
    };
  }
  return fallback;
}

export default function ReportsClient({
  initialJobs,
  initialSummary,
}: {
  initialJobs: ReportJob[];
  initialSummary: ReportQueueSummary;
}) {
  const [jobs, setJobs] = useState(initialJobs);
  const [status, setStatus] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isRequeueingStale, setIsRequeueingStale] = useState(false);
  const [staleRequeueMinutes, setStaleRequeueMinutes] = useState(90);
  const [queueSummary, setQueueSummary] = useState<ReportQueueSummary>(initialSummary);
  const [summaryLoading, setSummaryLoading] = useState(false);
  const [summaryError, setSummaryError] = useState("");
  const [summaryLastUpdatedAt, setSummaryLastUpdatedAt] = useState(initialSummary.generatedAt);

  const backlogBreached = queueSummary.backlogCount >= queueSummary.backlogThreshold;
  const staleBreached = queueSummary.staleCount > 0;
  const failed24hBreached = queueSummary.failed24hCount >= queueSummary.failure24hThreshold;
  const summaryStatusClass =
    queueSummary.slaBreaches === 0
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-red-200 bg-red-50 text-red-800";

  const refreshSummary = useCallback(async () => {
    setSummaryLoading(true);
    try {
      const response = await fetch("/api/admin/report-jobs/summary", {
        method: "GET",
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => ({}))) as ReportQueueSummaryResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to refresh report queue health.");
      }

      const nextSummary: ReportQueueSummary = {
        generatedAt:
          typeof payload.generatedAt === "string" ? payload.generatedAt : new Date().toISOString(),
        queuedReadyCount: isFiniteNumber(payload.queuedReadyCount) ? payload.queuedReadyCount : 0,
        runningCount: isFiniteNumber(payload.runningCount) ? payload.runningCount : 0,
        backlogCount: isFiniteNumber(payload.backlogCount) ? payload.backlogCount : 0,
        staleCount: isFiniteNumber(payload.staleCount) ? payload.staleCount : 0,
        staleQueuedCount: isFiniteNumber(payload.staleQueuedCount) ? payload.staleQueuedCount : 0,
        staleRunningCount: isFiniteNumber(payload.staleRunningCount) ? payload.staleRunningCount : 0,
        failed24hCount: isFiniteNumber(payload.failed24hCount) ? payload.failed24hCount : 0,
        oldestQueuedReadyAt:
          typeof payload.oldestQueuedReadyAt === "string" ? payload.oldestQueuedReadyAt : null,
        oldestRunningAt: typeof payload.oldestRunningAt === "string" ? payload.oldestRunningAt : null,
        staleCutoffAt:
          typeof payload.staleCutoffAt === "string" ? payload.staleCutoffAt : new Date().toISOString(),
        staleHoursThreshold: isFiniteNumber(payload.staleHoursThreshold) ? payload.staleHoursThreshold : 6,
        backlogThreshold: isFiniteNumber(payload.backlogThreshold) ? payload.backlogThreshold : 15,
        failure24hThreshold: isFiniteNumber(payload.failure24hThreshold)
          ? payload.failure24hThreshold
          : 10,
        slaBreaches: isFiniteNumber(payload.slaBreaches) ? payload.slaBreaches : 0,
        reportTypeBreakdown: parseReportTypeBreakdown(payload.reportTypeBreakdown),
      };

      setQueueSummary(nextSummary);
      setSummaryLastUpdatedAt(nextSummary.generatedAt);
      setSummaryError("");
    } catch (error) {
      setSummaryError(
        error instanceof Error ? error.message : "Unable to refresh report queue health.",
      );
    } finally {
      setSummaryLoading(false);
    }
  }, []);

  const createJob = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    const form = new FormData(event.currentTarget);
    const runAfterRaw = String(form.get("runAfterIso") ?? "").trim();
    const runAfterDate = runAfterRaw ? new Date(runAfterRaw) : null;
    if (runAfterRaw && (!runAfterDate || Number.isNaN(runAfterDate.getTime()))) {
      setStatus("Invalid run-after datetime.");
      return;
    }
    const runAfterIso = runAfterDate ? runAfterDate.toISOString() : undefined;

    try {
      const response = await fetch("/api/admin/report-jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reportType: form.get("reportType"),
          runAfterIso,
        }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        job?: ReportJob;
      };
      if (!response.ok || !data.job) {
        setStatus(data.error ?? "Unable to queue report job.");
        return;
      }
      setJobs((previous) => [data.job!, ...previous]);
      setStatus(`Queued job ${data.job.id}.`);
      event.currentTarget.reset();
    } catch {
      setStatus("Unable to queue report job.");
    }
  };

  const runQueued = async () => {
    setStatus("");
    try {
      const response = await fetch("/api/admin/report-jobs/run", { method: "POST" });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        processed?: number;
        claimed?: number;
        skipped?: number;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to run report jobs.");
        return;
      }
      setStatus(
        `Run complete. claimed=${data.claimed ?? 0}, processed=${data.processed ?? 0}, skipped=${data.skipped ?? 0}.`,
      );
      await refreshJobs();
    } catch {
      setStatus("Unable to run report jobs.");
    }
  };

  const retryFailed = async () => {
    setStatus("");
    try {
      const response = await fetch("/api/admin/report-jobs/retry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ limit: 50 }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        retried?: number;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to retry failed report jobs.");
        return;
      }
      setStatus(`Retried ${data.retried ?? 0} failed report job(s).`);
      await refreshJobs();
    } catch {
      setStatus("Unable to retry failed report jobs.");
    }
  };

  const requeueStale = async () => {
    setStatus("");
    setIsRequeueingStale(true);
    try {
      const response = await fetch("/api/admin/report-jobs/requeue-stale", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ maxAgeMinutes: staleRequeueMinutes, limit: 100 }),
      });
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        scanned?: number;
        requeued?: number;
        failedUpdates?: number;
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to requeue stale report jobs.");
        return;
      }
      if (data.message) {
        setStatus(data.message);
      } else {
        setStatus(
          `Stale requeue complete. scanned=${data.scanned ?? 0}, requeued=${data.requeued ?? 0}, failedUpdates=${data.failedUpdates ?? 0}.`,
        );
      }
      await refreshJobs();
    } catch {
      setStatus("Unable to requeue stale report jobs.");
    } finally {
      setIsRequeueingStale(false);
    }
  };

  const refreshJobs = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const response = await fetch("/api/admin/report-jobs");
      const data = (await response.json().catch(() => ({}))) as {
        error?: string;
        jobs?: ReportJob[];
      };
      if (!response.ok) {
        setStatus(data.error ?? "Unable to refresh report jobs.");
        return;
      }
      setJobs(data.jobs ?? []);
    } catch {
      setStatus("Unable to refresh report jobs.");
    } finally {
      setIsRefreshing(false);
      void refreshSummary();
    }
  }, [refreshSummary]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      void refreshJobs();
    }, 15000);

    return () => {
      window.clearInterval(interval);
    };
  }, [refreshJobs]);

  return (
    <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">Report Job Queue</h2>
      {status ? <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}

      <div className="mt-3 rounded-md border border-black/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold">Queue Health</h3>
          <button
            type="button"
            onClick={() => void refreshSummary()}
            disabled={summaryLoading}
            className="rounded-md border border-black/15 px-3 py-1 text-xs hover:bg-black/5 disabled:opacity-70 dark:border-white/20 dark:hover:bg-white/5"
          >
            {summaryLoading ? "Refreshing..." : "Refresh Health"}
          </button>
        </div>
        <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
          {summaryLoading
            ? "Refreshing queue health..."
            : summaryError
              ? summaryError
              : `Last updated ${new Date(summaryLastUpdatedAt).toLocaleTimeString()}`}
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <article
            className={`rounded-md border p-3 ${
              backlogBreached ? "border-red-200 bg-red-50 text-red-800" : "border-black/10 bg-white"
            } dark:border-white/10 dark:bg-zinc-900`}
          >
            <p className="text-xs uppercase tracking-wide text-zinc-500">Backlog</p>
            <p className="mt-1 text-2xl font-semibold">{queueSummary.backlogCount}</p>
            <p className="text-xs">Threshold {queueSummary.backlogThreshold}</p>
          </article>
          <article
            className={`rounded-md border p-3 ${
              staleBreached ? "border-red-200 bg-red-50 text-red-800" : "border-black/10 bg-white"
            } dark:border-white/10 dark:bg-zinc-900`}
          >
            <p className="text-xs uppercase tracking-wide text-zinc-500">Stale</p>
            <p className="mt-1 text-2xl font-semibold">{queueSummary.staleCount}</p>
            <p className="text-xs">
              queued {queueSummary.staleQueuedCount} | running {queueSummary.staleRunningCount}
            </p>
          </article>
          <article
            className={`rounded-md border p-3 ${
              failed24hBreached ? "border-red-200 bg-red-50 text-red-800" : "border-black/10 bg-white"
            } dark:border-white/10 dark:bg-zinc-900`}
          >
            <p className="text-xs uppercase tracking-wide text-zinc-500">Failed (24h)</p>
            <p className="mt-1 text-2xl font-semibold">{queueSummary.failed24hCount}</p>
            <p className="text-xs">Threshold {queueSummary.failure24hThreshold}</p>
          </article>
          <article className="rounded-md border border-black/10 bg-white p-3 dark:border-white/10 dark:bg-zinc-900">
            <p className="text-xs uppercase tracking-wide text-zinc-500">Queued Ready</p>
            <p className="mt-1 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
              {queueSummary.queuedReadyCount}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-300">Running {queueSummary.runningCount}</p>
          </article>
          <article className={`rounded-md border p-3 ${summaryStatusClass}`}>
            <p className="text-xs uppercase tracking-wide">SLA Status</p>
            <p className="mt-1 text-2xl font-semibold">
              {queueSummary.slaBreaches === 0
                ? "OK"
                : `${queueSummary.slaBreaches} breach${queueSummary.slaBreaches === 1 ? "" : "es"}`}
            </p>
            <p className="text-xs">
              Oldest queued {formatAgeFromIso(queueSummary.oldestQueuedReadyAt)} | oldest running{" "}
              {formatAgeFromIso(queueSummary.oldestRunningAt)}
            </p>
          </article>
        </div>
        <p className="mt-2 text-xs text-zinc-600 dark:text-zinc-300">
          Stale threshold: {queueSummary.staleHoursThreshold}h | stale cutoff{" "}
          {new Date(queueSummary.staleCutoffAt).toLocaleString()}
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {REPORT_TYPES.map((reportType) => {
            const breakdown = queueSummary.reportTypeBreakdown[reportType];
            return (
              <article
                key={reportType}
                className="rounded-md border border-black/10 bg-white p-3 text-xs dark:border-white/10 dark:bg-zinc-900"
              >
                <p className="font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-200">
                  {reportType}
                </p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-300">
                  backlog {breakdown.backlog} (q {breakdown.queuedReady} / r {breakdown.running})
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">
                  stale {breakdown.stale} (q {breakdown.staleQueued} / r {breakdown.staleRunning})
                </p>
                <p className="text-zinc-600 dark:text-zinc-300">failed24h {breakdown.failed24h}</p>
              </article>
            );
          })}
        </div>
      </div>

      <form onSubmit={createJob} className="mt-3 grid gap-3 md:grid-cols-3">
        <select name="reportType" className="rounded-md border border-black/15 px-3 py-2 text-sm">
          <option value="dsar">DSAR</option>
          <option value="support">Support</option>
          <option value="audit">Audit</option>
        </select>
        <input name="runAfterIso" type="datetime-local" className="rounded-md border border-black/15 px-3 py-2 text-sm" />
        <button type="submit" className="rounded-md border border-black/15 px-4 py-2 text-sm">
          Queue Job
        </button>
      </form>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={runQueued}
          className="rounded-md border border-black/15 px-4 py-2 text-sm dark:border-white/20"
        >
          Run Due Jobs Now
        </button>
        <button
          type="button"
          onClick={retryFailed}
          className="rounded-md border border-black/15 px-4 py-2 text-sm dark:border-white/20"
        >
          Retry Failed Jobs
        </button>
        <button
          type="button"
          onClick={requeueStale}
          disabled={isRequeueingStale}
          className="rounded-md border border-black/15 px-4 py-2 text-sm disabled:opacity-70 dark:border-white/20"
        >
          {isRequeueingStale ? "Requeueing..." : "Requeue Stale Running"}
        </button>
        <button
          type="button"
          onClick={() => void refreshJobs()}
          disabled={isRefreshing}
          className="rounded-md border border-black/15 px-4 py-2 text-sm disabled:opacity-70 dark:border-white/20"
        >
          {isRefreshing ? "Refreshing..." : "Refresh Jobs"}
        </button>
        <label className="inline-flex items-center gap-2 rounded-md border border-black/15 px-3 py-2 text-xs text-zinc-600 dark:border-white/20 dark:text-zinc-300">
          Stale min
          <input
            type="number"
            min={5}
            max={10080}
            value={staleRequeueMinutes}
            onChange={(event) =>
              setStaleRequeueMinutes(Math.max(5, Math.min(10080, Number(event.target.value) || 5)))
            }
            className="w-20 rounded border border-black/15 px-2 py-1 text-xs dark:border-white/20"
          />
        </label>
      </div>

      <div className="mt-4 space-y-2">
        {jobs.map((job) => (
          <article key={job.id} className="rounded-md border border-black/10 p-3 text-sm dark:border-white/10">
            <p className="font-medium">
              {job.report_type} ({job.status})
            </p>
            <p className="text-xs text-zinc-500">
              run_after: {new Date(job.run_after).toLocaleString()} | created: {new Date(job.created_at).toLocaleString()}
            </p>
            {job.error ? <p className="text-xs text-red-600">{job.error}</p> : null}
          </article>
        ))}
        {jobs.length === 0 ? <p className="text-sm text-zinc-500">No queued jobs.</p> : null}
      </div>
    </section>
  );
}
