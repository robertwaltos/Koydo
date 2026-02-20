"use client";

import { useEffect, useState } from "react";

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

export default function ParentReportsClient() {
  const [reports, setReports] = useState<ParentReport[]>([]);
  const [status, setStatus] = useState("");

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
        setReports(payload.reports ?? []);
      } catch {
        setStatus("Failed to load reports.");
      }
    };
    void load();
  }, []);

  return (
    <section className="space-y-4">
      {status ? <p className="text-sm text-red-600">{status}</p> : null}
      {reports.map((report) => (
        <article key={report.childUserId} className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold">{report.childDisplayName}</h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Grade</p>
              <p className="mt-1 text-2xl font-bold">{report.grade}</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Mastery</p>
              <p className="mt-1 text-2xl font-bold">{report.masteryPercent}%</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Accuracy</p>
              <p className="mt-1 text-2xl font-bold">{report.accuracyPercent}%</p>
            </div>
            <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-xs uppercase tracking-wide text-zinc-500">Lessons Completed</p>
              <p className="mt-1 text-2xl font-bold">{report.lessonsCompleted}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-zinc-500">
            Attempts: {report.totalAttempts} | Correct: {report.totalCorrect}
          </p>
        </article>
      ))}
      {reports.length === 0 && !status ? (
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          No verified child reports available yet.
        </p>
      ) : null}
    </section>
  );
}
