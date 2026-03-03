"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ChartCard,
  ActivityLineChart,
  SubjectPieChart,
  MasteryRadarChart,
  ScoreAreaChart,
  UsageBarChart,
  ActivityHeatmap,
  StreakRing,
} from "@/app/components/charts";
import type {
  ActivityDataPoint,
  SubjectSlice,
  SkillDataPoint,
  ScoreDataPoint,
  UsageBarDataPoint,
  HeatmapDay,
} from "@/app/components/charts";

type AnalyticsPayload = {
  children: unknown[];
  activityTrend: ActivityDataPoint[];
  subjectBreakdown: SubjectSlice[];
  scoreTrend: ScoreDataPoint[];
  aiTutorUsage: UsageBarDataPoint[];
  heatmap: HeatmapDay[];
  skills: SkillDataPoint[];
  streak: { current: number; longest: number };
  totals: {
    totalSessions: number;
    totalMinutes: number;
    avgScore: number;
    activeDays: number;
  };
};

type TimeRange = "7" | "30" | "90";

export default function ChildAnalyticsClient({
  childId,
  childName,
}: {
  childId: string;
  childName: string;
}) {
  const [data, setData] = useState<AnalyticsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<TimeRange>("30");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ days: range, childId });
      const res = await fetch(`/api/parent/analytics?${params}`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load");
      setData((await res.json()) as AnalyticsPayload);
    } catch {
      /* graceful degrade */
    } finally {
      setLoading(false);
    }
  }, [range, childId]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const rangeButtons: { value: TimeRange; label: string }[] = [
    { value: "7", label: "7d" },
    { value: "30", label: "30d" },
    { value: "90", label: "90d" },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/parent/dashboard"
            className="text-[13px] text-[#697386] hover:text-[#1a1f36]"
          >
            ← Dashboard
          </Link>
          <span className="text-[#c4cdd8]">/</span>
          <div>
            <h1 className="text-[20px] font-semibold text-[#1a1f36]">
              {childName}&#39;s Analytics
            </h1>
            <p className="text-[12px] text-[#697386]">
              Deep-dive into learning patterns and progress
            </p>
          </div>
        </div>
        <div className="flex rounded-lg border border-[#e3e8ee] bg-white p-0.5">
          {rangeButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setRange(btn.value)}
              className={`rounded-md px-3 py-1.5 text-[12px] font-semibold transition ${
                range === btn.value
                  ? "bg-[#635bff] text-white"
                  : "text-[#697386] hover:text-[#1a1f36]"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Key Metrics */}
      <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm"
        >
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#697386]">
            Sessions
          </p>
          <p className="mt-2 text-[26px] font-bold text-[#1a1f36]">
            {data?.totals.totalSessions ?? "—"}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm"
        >
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#697386]">
            Minutes
          </p>
          <p className="mt-2 text-[26px] font-bold text-[#1a1f36]">
            {data?.totals.totalMinutes ?? "—"}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm"
        >
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#697386]">
            Avg Score
          </p>
          <p className="mt-2 text-[26px] font-bold text-emerald-600">
            {data?.totals.avgScore ? `${data.totals.avgScore}%` : "—"}
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-xl border border-[#e3e8ee] bg-white p-5 shadow-sm"
        >
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#697386]">
            Active Days
          </p>
          <p className="mt-2 text-[26px] font-bold text-[#1a1f36]">
            {data?.totals.activeDays ?? "—"}
          </p>
        </motion.div>
        <div className="flex items-center justify-center rounded-xl border border-[#e3e8ee] bg-white p-4 shadow-sm">
          {data ? (
            <StreakRing
              current={data.streak.current}
              target={Math.max(data.streak.longest, 7)}
              size={90}
              strokeWidth={7}
              label="Streak"
            />
          ) : (
            <div className="h-[90px] w-[90px] animate-pulse rounded-full bg-[#f0f0f5]" />
          )}
        </div>
      </section>

      {/* Heatmap */}
      <section className="mb-6">
        <ChartCard title="Activity Heatmap" loading={loading} minHeight={130}>
          <ActivityHeatmap data={data?.heatmap ?? []} weeks={13} />
        </ChartCard>
      </section>

      {/* Charts */}
      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard title="Activity Trend" loading={loading}>
          <ActivityLineChart data={data?.activityTrend ?? []} />
        </ChartCard>

        <ChartCard title="Subject Distribution" loading={loading}>
          <SubjectPieChart data={data?.subjectBreakdown ?? []} />
        </ChartCard>

        <ChartCard title="Skill Mastery" loading={loading} minHeight={280}>
          <MasteryRadarChart data={data?.skills ?? []} />
        </ChartCard>

        <ChartCard title="Score Progression" loading={loading}>
          <ScoreAreaChart data={data?.scoreTrend ?? []} />
        </ChartCard>
      </section>

      {/* AI Tutor Usage */}
      <section className="mb-6">
        <ChartCard title="AI Tutor by Day of Week" loading={loading}>
          <UsageBarChart data={data?.aiTutorUsage ?? []} showMessages />
        </ChartCard>
      </section>

      {/* Quick links */}
      <div className="flex flex-wrap gap-3">
        <Link
          href={`/parent/reports?student=${childId}`}
          className="ui-focus-ring rounded-lg border border-[#e3e8ee] bg-white px-4 py-2 text-[12px] font-semibold text-[#3c4257] shadow-sm hover:bg-[#f6f9fc]"
        >
          📋 Full Progress Report
        </Link>
        <Link
          href="/parent/dashboard"
          className="ui-focus-ring rounded-lg border border-[#e3e8ee] bg-white px-4 py-2 text-[12px] font-semibold text-[#3c4257] shadow-sm hover:bg-[#f6f9fc]"
        >
          ← Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
