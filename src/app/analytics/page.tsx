"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type Insights = {
  overview: {
    totalXP: number;
    level: number;
    currentStreak: number;
    bestStreak: number;
    modulesCompleted: number;
    totalCertificates: number;
  };
  studyPatterns: {
    totalStudyMinutes: number;
    avgSessionMinutes: number;
    totalSessions: number;
    mostActiveDay: string;
    studyDayDistribution: Record<string, number>;
  };
  performance: {
    quizAverage: number;
    totalQuizzesTaken: number;
    recentQuizzes: Array<{ score: number; total: number; pct: number; date: string }>;
  };
  recommendations: string[];
  weeklyActivity: Array<{ date: string; minutes: number }>;
};

function Stat({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div className="rounded-xl border border-border/40 bg-surface p-4">
      <p className="text-2xl font-bold tabular-nums text-foreground">{value}</p>
      <p className="text-xs text-foreground/50">{label}</p>
      {sub && <p className="text-[10px] text-foreground/30 mt-0.5">{sub}</p>}
    </div>
  );
}

export default function AnalyticsPage() {
  const [data, setData] = useState<Insights | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/analytics/insights")
      .then((r) => r.json())
      .then((d) => { if (d.overview) setData(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <main className="p-12 text-center text-foreground/40">Loading analytics...</main>;
  if (!data) return (
    <main className="mx-auto max-w-2xl p-12 text-center">
      <p className="text-foreground/50">Sign in to view your learning analytics.</p>
    </main>
  );

  const { overview, studyPatterns, performance, recommendations } = data;

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Learning Analytics</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Learning Analytics</h1>
      <p className="text-sm text-foreground/60">
        Deep insights into your learning patterns, performance, and personalized recommendations.
      </p>

      {/* Overview stats */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <Stat label="Total XP" value={overview.totalXP.toLocaleString()} />
        <Stat label="Level" value={overview.level} />
        <Stat label="Streak" value={`${overview.currentStreak}d`} sub={`Best: ${overview.bestStreak}d`} />
        <Stat label="Modules" value={overview.modulesCompleted} />
        <Stat label="Certificates" value={overview.totalCertificates} />
        <Stat label="Quiz Avg" value={`${performance.quizAverage}%`} sub={`${performance.totalQuizzesTaken} taken`} />
      </div>

      {/* Study Patterns */}
      <SoftCard className="p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Study Patterns</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <p className="text-xl font-bold text-foreground">{studyPatterns.totalStudyMinutes} min</p>
            <p className="text-xs text-foreground/50">Total study time</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">{studyPatterns.avgSessionMinutes} min</p>
            <p className="text-xs text-foreground/50">Avg session length</p>
          </div>
          <div>
            <p className="text-xl font-bold text-foreground">{studyPatterns.mostActiveDay}</p>
            <p className="text-xs text-foreground/50">Most active day</p>
          </div>
        </div>

        {/* Day distribution */}
        <div className="mt-4 flex gap-1.5">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => {
            const count = studyPatterns.studyDayDistribution[day] ?? 0;
            const max = Math.max(1, ...Object.values(studyPatterns.studyDayDistribution));
            const height = Math.max(4, (count / max) * 60);
            return (
              <div key={day} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className="w-full rounded bg-accent/60 transition-all"
                  style={{ height: `${height}px` }}
                />
                <span className="text-[9px] text-foreground/40">{day.slice(0, 3)}</span>
              </div>
            );
          })}
        </div>
      </SoftCard>

      {/* Recent quizzes */}
      {performance.recentQuizzes.length > 0 && (
        <SoftCard className="p-5">
          <h2 className="text-base font-bold text-foreground mb-3">Recent Quiz Results</h2>
          <div className="space-y-2">
            {performance.recentQuizzes.map((q, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-border/30 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-sm font-bold text-accent">
                    {q.pct}%
                  </div>
                  <div>
                    <p className="text-sm text-foreground">{q.score}/{q.total} correct</p>
                    <p className="text-[10px] text-foreground/40">{new Date(q.date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="h-2 w-20 rounded-full bg-border/30 overflow-hidden">
                  <div className={`h-full rounded-full ${q.pct >= 80 ? "bg-green-500" : q.pct >= 50 ? "bg-amber-400" : "bg-red-400"}`} style={{ width: `${q.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </SoftCard>
      )}

      {/* AI Recommendations */}
      {recommendations.length > 0 && (
        <SoftCard className="p-5 border-accent/20">
          <h2 className="text-base font-bold text-foreground mb-3">AI Recommendations</h2>
          <div className="space-y-2">
            {recommendations.map((rec, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-lg bg-accent/5 p-3">
                <span className="text-accent text-sm mt-0.5">{"\u2728"}</span>
                <p className="text-sm text-foreground/70">{rec}</p>
              </div>
            ))}
          </div>
        </SoftCard>
      )}
    </main>
  );
}
