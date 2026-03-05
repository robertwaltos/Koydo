"use client";

import { motion } from "framer-motion";
import { JUICY_VARIANTS } from "@/lib/experience/interaction-primitives";

/* ── Stripe palette ────────────────────── */
const S = {
  indigo: "#635bff",
  text: "#1a1f36",
  muted: "#697386",
  border: "#e3e8ee",
  green: "#0cbc87",
  red: "#df1b41",
  bg: "#f7f8fa",
} as const;

/* ── Mock data ─────────────────────────── */
const KPI = [
  { label: "Active Learners", value: "3", trend: "+1", up: true, bars: [40, 60, 55, 70, 80, 75, 90] },
  { label: "Lessons This Week", value: "24", trend: "+8", up: true, bars: [30, 45, 50, 40, 65, 70, 80] },
  { label: "Avg Streak", value: "7 days", trend: "+2", up: true, bars: [20, 30, 45, 50, 55, 60, 70] },
  { label: "Time Spent", value: "4.2 hrs", trend: "-0.5", up: false, bars: [80, 75, 70, 65, 55, 50, 45] },
];

const LEARNERS = [
  {
    name: "Emma",
    avatar: "E",
    avatarBg: "#e0d4fc",
    subjects: [
      { name: "Math", progress: 78, color: S.indigo },
      { name: "Science", progress: 55, color: "#0cbc87" },
      { name: "Reading", progress: 92, color: "#f5a623" },
    ],
  },
  {
    name: "Lucas",
    avatar: "L",
    avatarBg: "#d4e8fc",
    subjects: [
      { name: "Math", progress: 45, color: S.indigo },
      { name: "Science", progress: 88, color: "#0cbc87" },
      { name: "History", progress: 62, color: "#f5a623" },
    ],
  },
];

const INSIGHTS = [
  "Emma is 3 lessons from completing Grade 4 Math.",
  "Lucas shows strong improvement in Science this week.",
  "Reading time has increased 23% vs. last month.",
];

const ACTIVITY = [
  { text: "Emma completed Fractions Lesson 4", time: "2h ago" },
  { text: "Lucas earned \u201cScience Explorer\u201d badge", time: "5h ago" },
  { text: "Emma started Solar System module", time: "Yesterday" },
  { text: "Lucas completed Reading Quiz 7", time: "Yesterday" },
];

export default function ParentDashboardGeminiPage() {
  return (
    <div className="min-h-screen" style={{ background: S.bg }}>
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1
              className="text-2xl font-bold"
              style={{ color: S.text }}
            >
              Dashboard
            </h1>
            <p className="text-sm" style={{ color: S.muted }}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          <button
            className="relative rounded-lg p-2 transition-colors hover:bg-white"
            aria-label="Notifications"
          >
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={S.muted} strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>

        {/* KPI Cards */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {KPI.map((kpi, i) => (
            <motion.div
              key={kpi.label}
              className="rounded-xl border bg-white p-5"
              style={{ borderColor: S.border }}
              variants={JUICY_VARIANTS.reveal}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-xs font-medium uppercase tracking-wider" style={{ color: S.muted }}>
                {kpi.label}
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="text-2xl font-bold" style={{ color: S.text }}>
                  {kpi.value}
                </span>
                <span
                  className="text-xs font-semibold"
                  style={{ color: kpi.up ? S.green : S.red }}
                >
                  {kpi.up ? "\u2191" : "\u2193"} {kpi.trend}
                </span>
              </div>
              {/* Mini sparkline */}
              <div className="mt-3 flex items-end gap-[3px]">
                {kpi.bars.map((h, j) => (
                  <div
                    key={j}
                    className="w-full rounded-sm"
                    style={{
                      height: `${h * 0.3}px`,
                      background: `linear-gradient(to top, ${S.indigo}40, ${S.indigo}20)`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Learner Progress — 2 cols */}
          <div className="lg:col-span-2">
            <h2 className="mb-4 text-lg font-bold" style={{ color: S.text }}>
              Learner Progress
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {LEARNERS.map((learner) => (
                <div
                  key={learner.name}
                  className="rounded-xl border bg-white p-5"
                  style={{ borderColor: S.border }}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: learner.avatarBg,
                        color: S.text,
                      }}
                    >
                      {learner.avatar}
                    </div>
                    <span className="font-semibold" style={{ color: S.text }}>
                      {learner.name}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {learner.subjects.map((sub) => (
                      <div key={sub.name}>
                        <div className="mb-1 flex justify-between text-xs" style={{ color: S.muted }}>
                          <span>{sub.name}</span>
                          <span className="font-semibold" style={{ color: S.text }}>
                            {sub.progress}%
                          </span>
                        </div>
                        <div className="h-2 w-full rounded-full" style={{ backgroundColor: `${sub.color}20` }}>
                          <div
                            className="h-2 rounded-full transition-all"
                            style={{
                              width: `${sub.progress}%`,
                              backgroundColor: sub.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Predictive Insights — 1 col */}
          <div>
            <h2 className="mb-4 text-lg font-bold" style={{ color: S.text }}>
              Predictive Insights
            </h2>
            <div className="space-y-3">
              {INSIGHTS.map((insight, i) => (
                <div
                  key={i}
                  className="rounded-xl border-l-4 bg-white p-4 shadow-sm"
                  style={{ borderLeftColor: S.indigo, borderColor: S.border }}
                >
                  <p className="text-sm" style={{ color: S.text }}>
                    {insight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="mt-8">
          <h2 className="mb-4 text-lg font-bold" style={{ color: S.text }}>
            Activity Feed
          </h2>
          <div className="rounded-xl border bg-white" style={{ borderColor: S.border }}>
            {ACTIVITY.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between px-5 py-3"
                style={{
                  borderBottom: i < ACTIVITY.length - 1 ? `1px solid ${S.border}` : "none",
                }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: S.indigo }}
                  />
                  <span className="text-sm" style={{ color: S.text }}>
                    {item.text}
                  </span>
                </div>
                <span className="text-xs" style={{ color: S.muted }}>
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
