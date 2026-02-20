"use client";

import { FormEvent, useState } from "react";

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

export default function ReportsClient({ initialJobs }: { initialJobs: ReportJob[] }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [status, setStatus] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

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

  const refreshJobs = async () => {
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
    }
  };

  return (
    <section className="rounded-lg border border-black/10 bg-white p-5 dark:border-white/15 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold">Report Job Queue</h2>
      {status ? <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{status}</p> : null}

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

      <button type="button" onClick={runQueued} className="mt-3 rounded-md border border-black/15 px-4 py-2 text-sm">
        Run Due Jobs Now
      </button>
      <button
        type="button"
        onClick={retryFailed}
        className="ml-2 mt-3 rounded-md border border-black/15 px-4 py-2 text-sm"
      >
        Retry Failed Jobs
      </button>
      <button
        type="button"
        onClick={() => void refreshJobs()}
        disabled={isRefreshing}
        className="ml-2 mt-3 rounded-md border border-black/15 px-4 py-2 text-sm disabled:opacity-70"
      >
        {isRefreshing ? "Refreshing..." : "Refresh Jobs"}
      </button>

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
