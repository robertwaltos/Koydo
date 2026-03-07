"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import SatButton from "./SatButton";

// ── Types ─────────────────────────────────────────────────────────────────────

type ExamTab = "overview" | "math" | "reading" | "practice";

type SectionScore = {
  section: string;
  current: number;
  target: number;
  max: number;
  trend: "up" | "down" | "flat";
  color: string;
};

// ── Data ──────────────────────────────────────────────────────────────────────

const SECTIONS: SectionScore[] = [
  { section: "Math", current: 620, target: 720, max: 800, trend: "up", color: "#1d4ed8" },
  { section: "Reading & Writing", current: 580, target: 700, max: 800, trend: "up", color: "#7c3aed" },
  { section: "Total", current: 1200, target: 1420, max: 1600, trend: "up", color: "#059669" },
];

const MATH_TOPICS = [
  { id: "algebra", name: "Algebra", mastery: 72, questions: 45, icon: "x" },
  { id: "advanced-math", name: "Advanced Math", mastery: 58, questions: 38, icon: "f(x)" },
  { id: "problem-solving", name: "Problem Solving & Data", mastery: 65, questions: 42, icon: "#" },
  { id: "geometry-trig", name: "Geometry & Trigonometry", mastery: 48, questions: 35, icon: "tri" },
];

const RW_TOPICS = [
  { id: "craft-structure", name: "Craft & Structure", mastery: 70, questions: 40, icon: "CS" },
  { id: "information-ideas", name: "Information & Ideas", mastery: 62, questions: 38, icon: "II" },
  { id: "standard-english", name: "Standard English", mastery: 55, questions: 36, icon: "SE" },
  { id: "expression-of-ideas", name: "Expression of Ideas", mastery: 68, questions: 34, icon: "EI" },
];

const PRACTICE_TESTS = [
  { id: "full-1", title: "Full Practice Test #1", questions: 154, time: "134 min", difficulty: "Medium", taken: true, score: 1180 },
  { id: "full-2", title: "Full Practice Test #2", questions: 154, time: "134 min", difficulty: "Medium", taken: true, score: 1200 },
  { id: "full-3", title: "Full Practice Test #3", questions: 154, time: "134 min", difficulty: "Medium-Hard", taken: false, score: null },
  { id: "full-4", title: "Full Practice Test #4", questions: 154, time: "134 min", difficulty: "Hard", taken: false, score: null },
  { id: "math-drill", title: "Math Section Only", questions: 44, time: "35 min", difficulty: "Mixed", taken: false, score: null },
  { id: "rw-drill", title: "Reading & Writing Only", questions: 54, time: "32 min", difficulty: "Mixed", taken: false, score: null },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function ScoreRing({ current, max, color, size = 100 }: { current: number; max: number; color: string; size?: number }) {
  const pct = Math.min(current / max, 1);
  const r = (size - 8) / 2;
  const c = Math.PI * 2 * r;
  const offset = c * (1 - pct);

  return (
    <svg width={size} height={size} className="shrink-0">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={6} className="dark:stroke-[#334155]" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={6}
        strokeDasharray={c}
        strokeDashoffset={offset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        className="transition-all duration-700"
      />
      <text x={size / 2} y={size / 2 - 6} textAnchor="middle" className="fill-[#0f172a] dark:fill-[#f1f5f9] text-xl font-extrabold" style={{ fontSize: size > 80 ? 22 : 16 }}>
        {current}
      </text>
      <text x={size / 2} y={size / 2 + 14} textAnchor="middle" className="fill-[#94a3b8] text-xs" style={{ fontSize: 11 }}>
        / {max}
      </text>
    </svg>
  );
}

function MasteryBar({ pct, color }: { pct: number; color: string }) {
  return (
    <div className="h-2 w-full rounded-full bg-[#e2e8f0] dark:bg-[#334155]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(pct, 100)}%` }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
      />
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function SatDashboard() {
  const [activeTab, setActiveTab] = useState<ExamTab>("overview");

  const tabs: { id: ExamTab; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "math", label: "Math" },
    { id: "reading", label: "Reading & Writing" },
    { id: "practice", label: "Practice Tests" },
  ];

  // Countdown to SAT
  const satDate = new Date("2026-06-07");
  const daysUntil = Math.max(0, Math.ceil((satDate.getTime() - Date.now()) / 86400000));

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] dark:bg-[#0f172a] dark:text-[#f1f5f9]">
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
              SAT Prep
            </h1>
            <p className="mt-1 text-sm text-[#475569] dark:text-[#94a3b8]">
              Digital SAT format. Adaptive practice. Score prediction.
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2 rounded-xl bg-[#1d4ed8]/5 px-4 py-2 dark:bg-[#1d4ed8]/20">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-[#1d4ed8] dark:text-[#3b82f6]">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-bold text-[#1d4ed8] dark:text-[#3b82f6]">{daysUntil} days until SAT</span>
            </div>
            <span className="text-xs text-[#94a3b8]">June 7, 2026</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl bg-[#f1f5f9] p-1 dark:bg-[#1e293b]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={[
                "flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all",
                activeTab === tab.id
                  ? "bg-white text-[#1d4ed8] shadow-sm dark:bg-[#334155] dark:text-[#3b82f6]"
                  : "text-[#64748b] hover:text-[#0f172a] dark:hover:text-[#f1f5f9]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Overview Tab ────────────────────────────────────────────────── */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Score cards */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {SECTIONS.map((s) => (
                  <div key={s.section} className="rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">{s.section}</p>
                        <p className="mt-1 text-3xl font-extrabold" style={{ color: s.color }}>{s.current}</p>
                        <p className="mt-0.5 text-xs text-[#64748b]">
                          Target: <span className="font-semibold text-[#0f172a] dark:text-[#f1f5f9]">{s.target}</span>
                        </p>
                      </div>
                      <ScoreRing current={s.current} max={s.max} color={s.color} size={80} />
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs">
                      <svg viewBox="0 0 12 12" className={`h-3 w-3 ${s.trend === "up" ? "text-[#059669]" : s.trend === "down" ? "text-[#dc2626]" : "text-[#94a3b8]"}`} fill="currentColor">
                        {s.trend === "up" && <path d="M6 2l4 5H2z" />}
                        {s.trend === "down" && <path d="M6 10l4-5H2z" />}
                        {s.trend === "flat" && <rect x="2" y="5" width="8" height="2" rx="1" />}
                      </svg>
                      <span className={s.trend === "up" ? "text-[#059669]" : s.trend === "down" ? "text-[#dc2626]" : "text-[#94a3b8]"}>
                        {s.trend === "up" ? "+20 from last test" : s.trend === "down" ? "-10 from last test" : "No change"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Study streak + Daily goal */}
              <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                  <h3 className="text-sm font-bold text-[#0f172a] dark:text-[#f1f5f9]">Study Streak</h3>
                  <div className="mt-3 flex items-end gap-1">
                    {[40, 55, 30, 65, 45, 70, 50].map((h, i) => (
                      <div key={i} className="flex flex-1 flex-col items-center gap-1">
                        <div
                          className="w-full rounded-t-md bg-[#1d4ed8]/80 dark:bg-[#3b82f6]/80"
                          style={{ height: `${h}px` }}
                        />
                        <span className="text-[10px] text-[#94a3b8]">
                          {["M", "T", "W", "T", "F", "S", "S"][i]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-2 text-xs text-[#64748b]">7-day streak! Average: 51 min/day</p>
                </div>
                <div className="rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                  <h3 className="text-sm font-bold text-[#0f172a] dark:text-[#f1f5f9]">Today&apos;s Plan</h3>
                  <div className="mt-3 space-y-2.5">
                    {[
                      { task: "Algebra drill (15 questions)", done: true },
                      { task: "Reading passage practice", done: true },
                      { task: "Weak area: Geometry review", done: false },
                      { task: "Timed mini-test (10 min)", done: false },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${item.done ? "border-[#059669] bg-[#059669]" : "border-[#e2e8f0] dark:border-[#334155]"}`}>
                          {item.done && (
                            <svg viewBox="0 0 12 12" fill="white" className="h-3 w-3">
                              <path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                        <span className={`text-sm ${item.done ? "text-[#94a3b8] line-through" : "text-[#0f172a] dark:text-[#f1f5f9]"}`}>
                          {item.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Weak areas alert */}
              <div className="rounded-xl border border-[#f59e0b]/30 bg-[#fffbeb] p-5 dark:border-[#f59e0b]/20 dark:bg-[#f59e0b]/5">
                <div className="flex items-start gap-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-[#d97706]">
                    <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-bold text-[#92400e] dark:text-[#fbbf24]">Focus Areas Detected</h3>
                    <p className="mt-1 text-sm text-[#a16207] dark:text-[#f59e0b]/80">
                      <strong>Geometry & Trigonometry</strong> (48% mastery) and <strong>Standard English Conventions</strong> (55%) are below your target. We recommend 20 min/day on these topics.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Math Tab ────────────────────────────────────────────────────── */}
          {activeTab === "math" && (
            <motion.div key="math" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Math Section Topics</h2>
                <span className="rounded-lg bg-[#1d4ed8]/10 px-3 py-1 text-xs font-bold text-[#1d4ed8] dark:bg-[#1d4ed8]/20 dark:text-[#3b82f6]">
                  44 questions, 2 modules, 35 min each
                </span>
              </div>
              <div className="grid gap-4">
                {MATH_TOPICS.map((topic) => (
                  <div key={topic.id} className="rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1d4ed8]/10 text-sm font-bold text-[#1d4ed8] dark:bg-[#1d4ed8]/20 dark:text-[#3b82f6]">
                          {topic.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{topic.name}</h3>
                          <p className="text-xs text-[#64748b]">{topic.questions} practice questions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold" style={{ color: topic.mastery >= 70 ? "#059669" : topic.mastery >= 50 ? "#d97706" : "#dc2626" }}>
                          {topic.mastery}%
                        </p>
                        <p className="text-xs text-[#94a3b8]">mastery</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <MasteryBar pct={topic.mastery} color={topic.mastery >= 70 ? "#059669" : topic.mastery >= 50 ? "#d97706" : "#dc2626"} />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <SatButton tone="primary" size="sm">Practice</SatButton>
                      <SatButton tone="outline" size="sm">Review Mistakes</SatButton>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Reading & Writing Tab ───────────────────────────────────────── */}
          {activeTab === "reading" && (
            <motion.div key="reading" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Reading & Writing Topics</h2>
                <span className="rounded-lg bg-[#7c3aed]/10 px-3 py-1 text-xs font-bold text-[#7c3aed] dark:bg-[#7c3aed]/20 dark:text-[#a78bfa]">
                  54 questions, 2 modules, 32 min each
                </span>
              </div>
              <div className="grid gap-4">
                {RW_TOPICS.map((topic) => (
                  <div key={topic.id} className="rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7c3aed]/10 text-xs font-bold text-[#7c3aed] dark:bg-[#7c3aed]/20 dark:text-[#a78bfa]">
                          {topic.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold">{topic.name}</h3>
                          <p className="text-xs text-[#64748b]">{topic.questions} practice questions</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold" style={{ color: topic.mastery >= 70 ? "#059669" : topic.mastery >= 50 ? "#d97706" : "#dc2626" }}>
                          {topic.mastery}%
                        </p>
                        <p className="text-xs text-[#94a3b8]">mastery</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <MasteryBar pct={topic.mastery} color={topic.mastery >= 70 ? "#059669" : topic.mastery >= 50 ? "#d97706" : "#dc2626"} />
                    </div>
                    <div className="mt-3 flex gap-2">
                      <SatButton tone="primary" size="sm">Practice</SatButton>
                      <SatButton tone="outline" size="sm">Review Mistakes</SatButton>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Practice Tests Tab ──────────────────────────────────────────── */}
          {activeTab === "practice" && (
            <motion.div key="practice" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="mb-4">
                <h2 className="text-lg font-bold">Practice Tests</h2>
                <p className="text-sm text-[#64748b]">Digital SAT format: adaptive difficulty, 2 modules per section.</p>
              </div>
              <div className="grid gap-4">
                {PRACTICE_TESTS.map((test) => (
                  <div key={test.id} className="flex items-center justify-between rounded-xl border border-[#e2e8f0] bg-white p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                    <div>
                      <h3 className="font-semibold">{test.title}</h3>
                      <p className="mt-0.5 text-xs text-[#64748b]">
                        {test.questions} questions &middot; {test.time} &middot; {test.difficulty}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      {test.taken && test.score !== null ? (
                        <>
                          <div className="text-right">
                            <p className="text-lg font-bold text-[#059669]">{test.score}</p>
                            <p className="text-xs text-[#94a3b8]">/ 1600</p>
                          </div>
                          <SatButton tone="outline" size="sm">Retake</SatButton>
                        </>
                      ) : (
                        <SatButton tone="primary" size="sm">Start Test</SatButton>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* SAT Info */}
              <div className="mt-6 rounded-xl border border-[#e2e8f0] bg-[#f1f5f9] p-5 dark:border-[#334155] dark:bg-[#1e293b]">
                <h3 className="text-sm font-bold">About the Digital SAT</h3>
                <ul className="mt-2 space-y-1 text-xs text-[#475569] dark:text-[#94a3b8]">
                  <li>&#8226; <strong>2 sections</strong>: Reading & Writing (54 questions, 64 min) + Math (44 questions, 70 min)</li>
                  <li>&#8226; <strong>Adaptive</strong>: Each section has 2 modules. Module 2 difficulty adjusts based on Module 1 performance</li>
                  <li>&#8226; <strong>Score range</strong>: 400-1600 (200-800 per section)</li>
                  <li>&#8226; <strong>Calculator</strong>: Built-in Desmos calculator available for all math questions</li>
                  <li>&#8226; <strong>Time per question</strong>: ~71 sec for R&W, ~95 sec for Math</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
