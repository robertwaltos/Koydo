"use client";

import { useEffect, useRef, useState } from "react";
import {
  Bell,
  BookOpen,
  CalendarClock,
  ChartColumnIncreasing,
  CheckCircle2,
  Clock3,
  FileWarning,
  GraduationCap,
  ListChecks,
  Target,
} from "lucide-react";

import AnalyticsCard, { type AnalyticsDataPoint } from "./AnalyticsCard";
import UniversityButton from "./UniversityButton";

type DashboardToast = {
  id: number;
  title: string;
  body: string;
};

const SCORE_TREND: AnalyticsDataPoint[] = [
  { label: "Wk 1", value: 163 },
  { label: "Wk 2", value: 165 },
  { label: "Wk 3", value: 168 },
  { label: "Wk 4", value: 170 },
  { label: "Wk 5", value: 171 },
  { label: "Wk 6", value: 172 },
];

const ACCURACY_TREND: AnalyticsDataPoint[] = [
  { label: "Mon", value: 72 },
  { label: "Tue", value: 74 },
  { label: "Wed", value: 77 },
  { label: "Thu", value: 80 },
  { label: "Fri", value: 79 },
  { label: "Sat", value: 82 },
];

const DEADLINES = [
  { title: "LSAT Logic Games Timed Set", due: "Today, 7:00 PM", priority: "High" },
  { title: "Analytical Writing Drill", due: "Mar 8, 8:30 PM", priority: "Medium" },
  { title: "Corporate Finance Case Pack", due: "Mar 10, 6:00 PM", priority: "Medium" },
  { title: "Error Log Remediation Sprint", due: "Mar 11, 7:30 PM", priority: "Low" },
];

const ERROR_LOG = [
  {
    topic: "LSAT Logical Reasoning",
    issue: "Necessary assumption misses under time pressure",
    count: 9,
    trend: "+2 this week",
  },
  {
    topic: "GRE Quant",
    issue: "Inefficient arithmetic shortcuts on data interpretation",
    count: 6,
    trend: "-1 this week",
  },
  {
    topic: "Corporate Accounting",
    issue: "Revenue recognition timing edge cases",
    count: 4,
    trend: "+1 this week",
  },
  {
    topic: "Python Data Structures",
    issue: "Complexity estimation mistakes in set/dict workflows",
    count: 3,
    trend: "No change",
  },
];

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: ChartColumnIncreasing },
  { id: "modules", label: "Modules", icon: BookOpen },
  { id: "practice", label: "Practice", icon: Target },
  { id: "deadlines", label: "Deadlines", icon: CalendarClock },
  { id: "error-log", label: "Error Log", icon: FileWarning },
  { id: "progress", label: "Progress", icon: GraduationCap },
];

export default function UniversityDashboard() {
  const [toasts, setToasts] = useState<DashboardToast[]>([]);
  const nextToastId = useRef(1);

  function enqueueToast(title: string, body: string) {
    setToasts((prev) => [...prev, { id: nextToastId.current++, title, body }].slice(-3));
  }

  useEffect(() => {
    enqueueToast("Checkpoint Reminder", "Logic Games checkpoint closes in 2 hours.");
    const timer = window.setTimeout(() => {
      enqueueToast("Study Plan Synced", "Tonight's session was rescheduled to 7:00 PM.");
    }, 1300);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (toasts.length === 0) {
      return;
    }
    const timer = window.setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3600);

    return () => {
      window.clearTimeout(timer);
    };
  }, [toasts]);

  function handleResumeLearning() {
    enqueueToast("Session Loaded", "Resumed from LSAT Module 8, Question 23.");
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#0f172a] dark:bg-[#0f172a] dark:text-[#e5edf8]">
      <div className="flex min-h-screen">
        <aside className="sticky top-0 h-screen w-20 border-r border-[#d7e0eb] bg-[#111827] px-2 py-4 text-[#d6e1f0] sm:w-64 sm:px-4 dark:border-[#2d3a50]">
          <div className="flex items-center gap-3 px-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#324764] bg-[#1d3557] text-[#eff5ff]">
              KU
            </span>
            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.08em] text-[#9fb1c9]">Koydo</p>
              <p className="text-[14px] font-semibold">University</p>
            </div>
          </div>

          <nav className="mt-6 space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={[
                    "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-[12px] transition-colors duration-150",
                    item.id === "dashboard"
                      ? "bg-[#1d3557] text-[#f8fbff]"
                      : "text-[#b8c9de] hover:bg-[#18263a] hover:text-[#f8fbff]",
                  ].join(" ")}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <main className="flex-1 px-4 py-4 sm:px-6 sm:py-5">
          <section className="rounded-xl border border-[#d7e0eb] bg-white p-4 shadow-[0_1px_2px_rgba(2,6,23,0.08),0_4px_14px_rgba(2,6,23,0.06)] dark:border-[#2d3a50] dark:bg-[#111827]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.08em] text-[#586a7f] dark:text-[#9fb1c9]">
                  Resume Learning
                </p>
                <h1 className="mt-1 text-[22px] font-semibold leading-tight sm:text-[26px]">
                  LSAT Module 8: Logical Reasoning Under Time Constraint
                </h1>
                <p className="mt-1 text-[13px] text-[#586a7f] dark:text-[#9fb1c9]">
                  Last activity: March 6, 2026 at 1:32 PM | 23 questions remaining
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <UniversityButton tone="secondary" size="md">
                  Open Error Log
                </UniversityButton>
                <UniversityButton tone="primary" size="md" onClick={handleResumeLearning}>
                  Continue Session
                </UniversityButton>
              </div>
            </div>
          </section>

          <section className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            <AnalyticsCard
              title="Predicted LSAT Score"
              metric="172"
              subtitle="Target band: 170-174"
              trend="up"
              trendLabel="+4 over 6 weeks"
              tone="navy"
              chartData={SCORE_TREND}
              chartLabel="Predicted score"
            />
            <AnalyticsCard
              title="Timed Accuracy"
              metric="82%"
              subtitle="Section average in timed sets"
              trend="up"
              trendLabel="+5.3%"
              tone="forest"
              chartData={ACCURACY_TREND}
              chartLabel="Accuracy"
            />
            <AnalyticsCard
              title="Overdue Remediation Items"
              metric="3"
              subtitle="Prioritized from latest error analysis"
              trend="down"
              trendLabel="-2 this week"
              tone="bronze"
              footer="Resolve highest-frequency logical fallacy misses first."
            />
            <AnalyticsCard
              title="Study Hours (7d)"
              metric="18h 40m"
              subtitle="Against planned 20h target"
              trend="flat"
              trendLabel="-1h 20m gap"
              tone="slate"
              footer="Schedule a 45-minute slot on Saturday to close the week."
            />
          </section>

          <section className="mt-4 grid gap-3 xl:grid-cols-[1.45fr_1fr]">
            <article className="rounded-xl border border-[#d7e0eb] bg-white p-4 shadow-[0_1px_2px_rgba(2,6,23,0.08),0_4px_14px_rgba(2,6,23,0.06)] dark:border-[#2d3a50] dark:bg-[#111827]">
              <header className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4 text-[#1d3557] dark:text-[#9fb1c9]" aria-hidden="true" />
                  <h2 className="text-[14px] font-semibold">Error Log Priority Queue</h2>
                </div>
                <UniversityButton tone="ghost" size="sm">
                  View Full Queue
                </UniversityButton>
              </header>

              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-[12px]">
                  <thead>
                    <tr className="border-b border-[#e3e9f2] text-left text-[#64778c] dark:border-[#2d3a50] dark:text-[#9fb1c9]">
                      <th className="py-2 pr-3 font-medium">Topic</th>
                      <th className="px-3 py-2 font-medium">Issue Pattern</th>
                      <th className="px-3 py-2 font-medium">Count</th>
                      <th className="px-3 py-2 font-medium">Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ERROR_LOG.map((row) => (
                      <tr
                        key={row.topic}
                        className="border-b border-[#edf2f7] align-top last:border-b-0 dark:border-[#243146]"
                      >
                        <td className="py-2 pr-3 font-medium">{row.topic}</td>
                        <td className="px-3 py-2 text-[#4f6075] dark:text-[#b7c8dc]">{row.issue}</td>
                        <td className="px-3 py-2 font-semibold">{row.count}</td>
                        <td className="px-3 py-2 text-[#4f6075] dark:text-[#b7c8dc]">{row.trend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>

            <article className="rounded-xl border border-[#d7e0eb] bg-white p-4 shadow-[0_1px_2px_rgba(2,6,23,0.08),0_4px_14px_rgba(2,6,23,0.06)] dark:border-[#2d3a50] dark:bg-[#111827]">
              <header className="mb-3 flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-[#1d3557] dark:text-[#9fb1c9]" aria-hidden="true" />
                <h2 className="text-[14px] font-semibold">Upcoming Deadlines</h2>
              </header>

              <ul className="space-y-2">
                {DEADLINES.map((item) => (
                  <li
                    key={`${item.title}-${item.due}`}
                    className="rounded-md border border-[#e2e9f3] bg-[#fafcff] p-3 text-[12px] dark:border-[#2d3a50] dark:bg-[#182336]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{item.title}</p>
                        <p className="mt-1 text-[#5d6f83] dark:text-[#a9bfd8]">{item.due}</p>
                      </div>
                      <span
                        className={[
                          "rounded-full px-2 py-[2px] text-[10px] font-semibold",
                          item.priority === "High"
                            ? "bg-[#fee4e2] text-[#b42318]"
                            : item.priority === "Medium"
                              ? "bg-[#fff1dd] text-[#8a6035]"
                              : "bg-[#e7f4ec] text-[#1f6f48]",
                        ].join(" ")}
                      >
                        {item.priority}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </section>
        </main>
      </div>

      <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex w-[min(92vw,360px)] flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto rounded-lg border border-[#d7e0eb] bg-white/95 px-3 py-2 shadow-[0_10px_20px_rgba(2,6,23,0.14)] backdrop-blur dark:border-[#2d3a50] dark:bg-[#111827]/95"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-2">
              <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e8eef7] text-[#1d3557] dark:bg-[#1a2a3f] dark:text-[#9fb1c9]">
                <Bell className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-[12px] font-semibold">{toast.title}</p>
                <p className="text-[11px] text-[#5d6f83] dark:text-[#a9bfd8]">{toast.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section className="sr-only" aria-label="dashboard status summary">
        <h2>Current dashboard status</h2>
        <p>Predicted score has improved to 172 with three remediation items pending.</p>
      </section>

      <footer className="sr-only">
        <CheckCircle2 aria-hidden="true" />
      </footer>
    </div>
  );
}
