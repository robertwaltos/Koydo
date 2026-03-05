"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
import ParentAiInterventionsCard from "./parent-ai-interventions-card";

// ── Types ───────────────────────────────────────────────────────────────────

type ChildSummary = {
  id: string;
  displayName: string;
  gradeLevel: string | null;
  ageYears: number | null;
  assessmentStatus: string | null;
  totalSessions: number;
  totalMinutes: number;
  avgScore: number;
  conversationCount: number;
  lastActive: string | null;
};

type AnalyticsPayload = {
  children: ChildSummary[];
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

// ── Stat Card ───────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  sub,
  color = "text-[#1a1f36]",
  icon,
}: {
  label: string;
  value: string | number;
  sub?: string;
  color?: string;
  icon: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-[1.5rem] border border-white/60 bg-white/60 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-2">
        <span className="text-[18px] drop-shadow-sm">{icon}</span>
        <p className="text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          {label}
        </p>
      </div>
      <p className={`mt-3 text-3xl font-black tracking-tight leading-none ${color}`}>
        {value}
      </p>
      {sub && <p className="mt-2 text-xs font-semibold text-zinc-400">{sub}</p>}
    </motion.div>
  );
}

// ── Child Quick Card ────────────────────────────────────────────────────────

function ChildQuickCard({ child }: { child: ChildSummary }) {
  const initial = child.displayName.trim().charAt(0).toUpperCase() || "L";
  const statusComplete = child.assessmentStatus === "completed";

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-[1.5rem] border border-white/60 bg-white/60 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
    >
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-400 to-cyan-400 text-xl font-black text-white shadow-lg">
          {initial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h3 className="truncate text-base font-black tracking-tight text-zinc-900">
              {child.displayName}
            </h3>
            <span
              className={`ml-2 shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm ${
                statusComplete
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-amber-100 text-amber-800"
              }`}
            >
              {statusComplete ? "Ready" : "Setup needed"}
            </span>
          </div>
          <p className="text-xs font-semibold text-zinc-500 mt-0.5">
            {child.gradeLevel ? `Grade ${child.gradeLevel}` : "No grade"}
            {child.ageYears ? ` · Age ${child.ageYears}` : ""}
          </p>
        </div>
      </div>

      {/* Mini stats */}
      <div className="mt-5 grid grid-cols-4 gap-3">
        {[
          { label: "Sessions", value: child.totalSessions },
          { label: "Minutes", value: child.totalMinutes },
          { label: "Avg Score", value: child.avgScore ? `${child.avgScore}%` : "—" },
          { label: "AI Chats", value: child.conversationCount },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="rounded-xl border border-white bg-white/40 p-2 text-center shadow-sm"
          >
            <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-500">
              {label}
            </p>
            <p className="mt-1 text-sm font-black text-zinc-900">
              {value}
            </p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-3">
        <Link
          href={`/parent/analytics/${child.id}`}
          className="ui-focus-ring flex-1 rounded-xl border border-indigo-200 bg-indigo-50 py-2.5 text-center text-xs font-bold text-indigo-700 shadow-sm transition-colors hover:bg-indigo-100"
        >
          Detailed Analytics →
        </Link>
        <Link
          href={`/parent/reports?student=${child.id}`}
          className="ui-focus-ring rounded-xl border border-zinc-200 bg-white/80 px-4 py-2.5 text-xs font-bold text-zinc-700 shadow-sm transition-colors hover:bg-white"
        >
          Reports
        </Link>
      </div>
    </motion.article>
  );
}

// ── Main Dashboard ──────────────────────────────────────────────────────────

export default function ParentDashboardClient() {
  const [data, setData] = useState<AnalyticsPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [range, setRange] = useState<TimeRange>("30");
  const [selectedChild, setSelectedChild] = useState<string>("all");

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ days: range });
      if (selectedChild !== "all") params.set("childId", selectedChild);
      const res = await fetch(`/api/parent/analytics?${params}`, { cache: "no-store" });
      if (!res.ok) throw new Error("Failed to load analytics");
      const payload = (await res.json()) as AnalyticsPayload;
      setData(payload);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, [range, selectedChild]);

  useEffect(() => {
    void fetchData();
  }, [fetchData]);

  const rangeButtons: { value: TimeRange; label: string }[] = [
    { value: "7", label: "7 days" },
    { value: "30", label: "30 days" },
    { value: "90", label: "90 days" },
  ];

  return (
    <div className="p-6 md:p-8">
      {/* ── Page header ────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-[#697386]">
            Family Portal
          </p>
          <h1 className="mt-1 text-[22px] font-semibold text-[#1a1f36]">
            Parent Dashboard
          </h1>
          <p className="mt-1 text-[13px] text-[#697386]">
            Track your children&#39;s learning progress with rich analytics
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/student/onboarding"
            className="ui-focus-ring inline-flex items-center justify-center rounded-md bg-[#635bff] px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition hover:bg-[#5a52f0]"
          >
            + Add Learner
          </Link>
          <Link
            href="/parent/devices"
            className="ui-focus-ring inline-flex items-center justify-center rounded-md border border-[#e3e8ee] bg-white px-4 py-2 text-[13px] font-semibold text-[#3c4257] shadow-sm transition hover:bg-[#f6f9fc]"
          >
            📱 Connect Device
          </Link>
        </div>
      </div>

      {/* ── Filters ────────────────────────────────────────────────────── */}
      <div className="mb-6 flex flex-wrap items-center gap-3">
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

        {data && data.children.length > 1 && (
          <select
            value={selectedChild}
            onChange={(e) => setSelectedChild(e.target.value)}
            className="rounded-lg border border-[#e3e8ee] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#3c4257]"
          >
            <option value="all">All Children</option>
            {data.children.map((c) => (
              <option key={c.id} value={c.id}>
                {c.displayName}
              </option>
            ))}
          </select>
        )}
      </div>

      {error && (
        <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-[13px] text-red-700">
          {error}
        </div>
      )}

      {/* ── Hero Stats ─────────────────────────────────────────────────── */}
      <section className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-5">
        <StatCard
          icon="📊"
          label="Total Sessions"
          value={data?.totals.totalSessions ?? "—"}
          sub={`Last ${range} days`}
        />
        <StatCard
          icon="⏱"
          label="Learning Time"
          value={data ? `${data.totals.totalMinutes}m` : "—"}
          sub="Estimated total"
        />
        <StatCard
          icon="🎯"
          label="Avg Score"
          value={data?.totals.avgScore ? `${data.totals.avgScore}%` : "—"}
          sub="Across all attempts"
          color={
            (data?.totals.avgScore ?? 0) >= 70
              ? "text-emerald-600"
              : (data?.totals.avgScore ?? 0) >= 50
                ? "text-amber-600"
                : "text-[#1a1f36]"
          }
        />
        <StatCard
          icon="📅"
          label="Active Days"
          value={data?.totals.activeDays ?? "—"}
          sub={`of ${range} days`}
        />
        <div className="flex items-center justify-center rounded-xl border border-[#e3e8ee] bg-white p-4 shadow-sm">
          {data ? (
            <StreakRing
              current={data.streak.current}
              target={Math.max(data.streak.longest, 7)}
              size={100}
              strokeWidth={8}
            />
          ) : (
            <div className="h-[100px] w-[100px] animate-pulse rounded-full bg-[#f0f0f5]" />
          )}
        </div>
      </section>

      {/* ── Activity Heatmap ───────────────────────────────────────────── */}
      <section className="mb-6">
        <ChartCard
          title="Learning Activity"
          subtitle="Daily activity over the last 3 months"
          loading={loading}
          minHeight={140}
        >
          <ActivityHeatmap data={data?.heatmap ?? []} weeks={13} />
        </ChartCard>
      </section>

      {/* ── Charts Grid ────────────────────────────────────────────────── */}
      <section className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <ChartCard
          title="Activity Trend"
          subtitle={`Sessions & time over ${range} days`}
          loading={loading}
        >
          <ActivityLineChart data={data?.activityTrend ?? []} showMinutes />
        </ChartCard>

        <ChartCard
          title="Subject Distribution"
          subtitle="Time spent by activity type"
          loading={loading}
        >
          <SubjectPieChart data={data?.subjectBreakdown ?? []} />
        </ChartCard>

        <ChartCard
          title="Skill Mastery"
          subtitle="Current mastery levels across skills"
          loading={loading}
          minHeight={280}
        >
          <MasteryRadarChart data={data?.skills ?? []} />
        </ChartCard>

        <ChartCard
          title="Score Progression"
          subtitle="Assessment scores over time"
          loading={loading}
        >
          <ScoreAreaChart data={data?.scoreTrend ?? []} color="#10b981" />
        </ChartCard>
      </section>

      {/* ── AI Tutor Usage ─────────────────────────────────────────────── */}
      <section className="mb-6">
        <ChartCard
          title="AI Tutor Usage by Day"
          subtitle="Conversations with AI tutor per day of week"
          loading={loading}
        >
          <UsageBarChart data={data?.aiTutorUsage ?? []} showMessages />
        </ChartCard>
      </section>

      {/* ── AI Coaching ────────────────────────────────────────────────── */}
      <section className="mb-6">
        <ParentAiInterventionsCard />
      </section>

      {/* ── Children Cards ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {data && data.children.length > 0 && (
          <section>
            <h2 className="mb-4 text-[14px] font-semibold text-[#1a1f36]">
              Your Learners
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {data.children.map((child) => (
                <ChildQuickCard key={child.id} child={child} />
              ))}
            </div>
          </section>
        )}
      </AnimatePresence>

      {data && data.children.length === 0 && !loading && (
        <div className="rounded-xl border border-dashed border-[#c4cdd8] bg-[#f6f9fc] p-8 text-center">
          <p className="text-[14px] font-semibold text-[#3c4257]">
            No learner profiles yet
          </p>
          <p className="mt-1 text-[13px] text-[#697386]">
            Add your first learner to start seeing analytics
          </p>
          <Link
            href="/student/onboarding"
            className="ui-focus-ring mt-4 inline-flex items-center justify-center rounded-md bg-[#1a1f36] px-5 py-2 text-[13px] font-semibold text-white hover:bg-[#2d3654]"
          >
            Get Started
          </Link>
        </div>
      )}
    </div>
  );
}


