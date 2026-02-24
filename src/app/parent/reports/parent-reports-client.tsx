"use client";

import { useEffect, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type ParentReport = {
  childUserId: string;
  childDisplayName: string;
  lessonsCompleted: number;
  masteryPercent: number;
  accuracyPercent: number;
  grade: string;
  totalAttempts: number;
  totalCorrect: number;
};

function toneFromPercent(value: number): "success" | "info" | "warning" {
  if (value >= 80) return "success";
  if (value >= 60) return "info";
  return "warning";
}

export default function ParentReportsClient() {
  const [reports, setReports] = useState<ParentReport[]>([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch("/api/parent/reports");
        const payload = (await response.json().catch(() => ({}))) as {
          reports?: ParentReport[];
          error?: string;
        };
        if (!response.ok) {
          setStatus(payload.error ?? "Failed to load reports.");
          return;
        }
        const orderedReports = (payload.reports ?? []).sort(
          (a, b) => b.masteryPercent - a.masteryPercent,
        );
        setReports(orderedReports);
      } catch {
        setStatus("Failed to load reports.");
      } finally {
        setIsLoading(false);
      }
    };
    void load();
  }, []);

  return (
    <section className="space-y-4">
      {status ? (
        <SoftCard className="border-rose-200 bg-rose-50 p-4" role="status" aria-live="polite">
          <p className="text-sm text-rose-700">{status}</p>
        </SoftCard>
      ) : null}
      {isLoading ? (
        <SoftCard className="p-5">
          <p className="text-sm text-zinc-600" role="status" aria-live="polite">
            Loading reports...
          </p>
        </SoftCard>
      ) : null}
      {reports.map((report) => (
        <SoftCard key={report.childUserId} as="article" className="p-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-zinc-900">
              {report.childDisplayName}
            </h2>
            <ProgressChip
              label="Grade"
              value={report.grade}
              tone={toneFromPercent(report.masteryPercent)}
            />
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border bg-surface-muted p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Grade</p>
              <p className="mt-1 text-2xl font-bold text-zinc-900">{report.grade}</p>
            </div>
            <div className="rounded-2xl border border-sky-200 bg-sky-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Mastery</p>
              <p className="mt-1 text-2xl font-bold text-sky-900">{report.masteryPercent}%</p>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Accuracy</p>
              <p className="mt-1 text-2xl font-bold text-emerald-900">{report.accuracyPercent}%</p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Lessons Completed</p>
              <p className="mt-1 text-2xl font-bold text-amber-900">{report.lessonsCompleted}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-500" aria-label="attempt-summary">
            Attempts: {report.totalAttempts} | Correct: {report.totalCorrect}
          </p>
        </SoftCard>
      ))}
      {reports.length === 0 && !status && !isLoading ? (
        <SoftCard className="border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-800" role="status" aria-live="polite">
            No verified child reports available yet.
          </p>
        </SoftCard>
      ) : null}
    </section>
  );
}
