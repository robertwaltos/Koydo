"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import FinanceButton from "./FinanceButton";

// ── Types ─────────────────────────────────────────────────────────────────────

type FinanceTab = "overview" | "courses" | "tools" | "certifications";

type Course = {
  id: string;
  title: string;
  level: string;
  lessons: number;
  progress: number;
  icon: string;
  color: string;
};

// ── Data ──────────────────────────────────────────────────────────────────────

const COURSE_TRACKS: { track: string; courses: Course[] }[] = [
  {
    track: "Accounting & Finance",
    courses: [
      { id: "accounting-finance-101", title: "Financial Accounting Basics", level: "101", lessons: 10, progress: 85, icon: "ledger", color: "#065f46" },
      { id: "accounting-finance-201", title: "Managerial Accounting", level: "201", lessons: 10, progress: 60, icon: "chart", color: "#0d9488" },
      { id: "accounting-finance-301", title: "Corporate Finance", level: "301", lessons: 10, progress: 30, icon: "building", color: "#1d4ed8" },
      { id: "accounting-finance-401", title: "Financial Analysis", level: "401", lessons: 10, progress: 0, icon: "magnify", color: "#7c3aed" },
      { id: "accounting-finance-501", title: "Advanced Valuation", level: "501", lessons: 10, progress: 0, icon: "diamond", color: "#be123c" },
      { id: "accounting-finance-601", title: "Financial Modeling", level: "601", lessons: 10, progress: 0, icon: "model", color: "#c2410c" },
    ],
  },
  {
    track: "Economics",
    courses: [
      { id: "economics-101", title: "Microeconomics", level: "101", lessons: 10, progress: 70, icon: "supply", color: "#065f46" },
      { id: "economics-201", title: "Macroeconomics", level: "201", lessons: 10, progress: 40, icon: "globe", color: "#0d9488" },
      { id: "economics-301", title: "Econometrics", level: "301", lessons: 10, progress: 0, icon: "graph", color: "#1d4ed8" },
      { id: "economics-401", title: "Behavioral Economics", level: "401", lessons: 10, progress: 0, icon: "brain", color: "#7c3aed" },
    ],
  },
  {
    track: "Entrepreneurship",
    courses: [
      { id: "entrepreneurship-101", title: "Startup Foundations", level: "101", lessons: 10, progress: 55, icon: "rocket", color: "#065f46" },
      { id: "entrepreneurship-201", title: "Business Planning", level: "201", lessons: 10, progress: 20, icon: "plan", color: "#0d9488" },
      { id: "entrepreneurship-301", title: "Fundraising & VC", level: "301", lessons: 10, progress: 0, icon: "money", color: "#1d4ed8" },
    ],
  },
  {
    track: "Financial Literacy",
    courses: [
      { id: "financial-literacy-101", title: "Personal Finance", level: "101", lessons: 10, progress: 90, icon: "wallet", color: "#065f46" },
      { id: "financial-literacy-201", title: "Investing Basics", level: "201", lessons: 10, progress: 45, icon: "trend", color: "#0d9488" },
      { id: "financial-literacy-301", title: "Tax Planning", level: "301", lessons: 10, progress: 0, icon: "receipt", color: "#1d4ed8" },
    ],
  },
];

const MARKET_TICKER = [
  { symbol: "S&P 500", value: "5,842.31", change: "+1.2%", up: true },
  { symbol: "NASDAQ", value: "18,947.62", change: "+0.8%", up: true },
  { symbol: "DOW", value: "43,218.90", change: "-0.3%", up: false },
  { symbol: "BTC", value: "$68,421", change: "+2.4%", up: true },
  { symbol: "10Y", value: "4.28%", change: "+0.02", up: true },
];

const CERTIFICATIONS = [
  { name: "Financial Literacy Certificate", modules: 6, completed: 3, icon: "cert" },
  { name: "Accounting Fundamentals", modules: 4, completed: 2, icon: "cert" },
  { name: "Investment Analysis", modules: 5, completed: 0, icon: "cert" },
  { name: "Entrepreneurship Essentials", modules: 3, completed: 1, icon: "cert" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function FinanceDashboard() {
  const [activeTab, setActiveTab] = useState<FinanceTab>("overview");

  const tabs: { id: FinanceTab; label: string }[] = [
    { id: "overview", label: "Dashboard" },
    { id: "courses", label: "Courses" },
    { id: "tools", label: "Tools" },
    { id: "certifications", label: "Certifications" },
  ];

  const totalCourses = COURSE_TRACKS.reduce((sum, t) => sum + t.courses.length, 0);
  const completedCourses = COURSE_TRACKS.reduce(
    (sum, t) => sum + t.courses.filter((c) => c.progress >= 100).length,
    0,
  );
  const inProgressCourses = COURSE_TRACKS.reduce(
    (sum, t) => sum + t.courses.filter((c) => c.progress > 0 && c.progress < 100).length,
    0,
  );

  return (
    <div className="min-h-screen bg-[#fafaf9] text-[#1c1917] dark:bg-[#0c0a09] dark:text-[#fafaf9]">
      {/* Market ticker */}
      <div className="overflow-hidden border-b border-[#e7e5e4] bg-white dark:border-[#292524] dark:bg-[#1c1917]">
        <div className="mx-auto flex max-w-5xl items-center gap-6 overflow-x-auto px-4 py-2 scrollbar-hide">
          {MARKET_TICKER.map((item) => (
            <div key={item.symbol} className="flex shrink-0 items-center gap-2 text-xs">
              <span className="font-semibold text-[#57534e] dark:text-[#a8a29e]">{item.symbol}</span>
              <span className="font-bold">{item.value}</span>
              <span className={item.up ? "text-[#22c55e]" : "text-[#ef4444]"}>
                {item.change}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight">Finance Pro</h1>
          <p className="mt-1 text-sm text-[#57534e] dark:text-[#a8a29e]">
            Master finance, accounting, economics, and entrepreneurship.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 flex gap-1 rounded-xl bg-[#f5f5f4] p-1 dark:bg-[#1c1917]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={[
                "flex-1 rounded-lg py-2.5 text-sm font-semibold transition-all",
                activeTab === tab.id
                  ? "bg-white text-[#065f46] shadow-sm dark:bg-[#292524] dark:text-[#059669]"
                  : "text-[#78716c] hover:text-[#1c1917] dark:hover:text-[#fafaf9]",
              ].join(" ")}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Overview ────────────────────────────────────────────────────── */}
          {activeTab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {/* Stats row */}
              <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Courses", value: totalCourses, color: "#065f46" },
                  { label: "In Progress", value: inProgressCourses, color: "#0d9488" },
                  { label: "Completed", value: completedCourses, color: "#22c55e" },
                  { label: "Certificates", value: CERTIFICATIONS.filter((c) => c.completed >= c.modules).length, color: "#eab308" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-[#e7e5e4] bg-white p-4 dark:border-[#292524] dark:bg-[#1c1917]">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#a8a29e]">{stat.label}</p>
                    <p className="mt-1 text-2xl font-extrabold" style={{ color: stat.color }}>{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* Continue learning */}
              <h2 className="mb-4 text-lg font-bold">Continue Learning</h2>
              <div className="mb-8 grid gap-3">
                {COURSE_TRACKS.flatMap((t) => t.courses)
                  .filter((c) => c.progress > 0 && c.progress < 100)
                  .sort((a, b) => b.progress - a.progress)
                  .slice(0, 4)
                  .map((course) => (
                    <Link key={course.id} href={`/explore?module=${course.id}`}>
                      <div className="flex items-center gap-4 rounded-xl border border-[#e7e5e4] bg-white p-4 transition-all hover:shadow-md dark:border-[#292524] dark:bg-[#1c1917]">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold text-white"
                          style={{ backgroundColor: course.color }}
                        >
                          {course.level}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-semibold">{course.title}</h3>
                          <div className="mt-1.5 flex items-center gap-2">
                            <div className="h-1.5 flex-1 rounded-full bg-[#e7e5e4] dark:bg-[#292524]">
                              <div
                                className="h-full rounded-full transition-all"
                                style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-[#57534e] dark:text-[#a8a29e]">
                              {course.progress}%
                            </span>
                          </div>
                        </div>
                        <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-[#a8a29e]">
                          <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </Link>
                  ))}
              </div>

              {/* Financial tools quick access */}
              <h2 className="mb-4 text-lg font-bold">Quick Tools</h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { name: "Calculator", href: "/microapps/calculator", icon: "calc", color: "#065f46" },
                  { name: "Currency", href: "/microapps/currency", icon: "fx", color: "#0d9488" },
                  { name: "Flashcards", href: "/microapps/flashcards", icon: "cards", color: "#1d4ed8" },
                  { name: "Focus Timer", href: "/microapps/focus", icon: "timer", color: "#7c3aed" },
                ].map((tool) => (
                  <Link key={tool.name} href={tool.href}>
                    <div className="flex flex-col items-center gap-2 rounded-xl border border-[#e7e5e4] bg-white p-4 transition-all hover:shadow-md dark:border-[#292524] dark:bg-[#1c1917]">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: tool.color }}
                      >
                        {tool.icon.slice(0, 2).toUpperCase()}
                      </div>
                      <span className="text-xs font-semibold">{tool.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Courses Tab ─────────────────────────────────────────────────── */}
          {activeTab === "courses" && (
            <motion.div key="courses" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              {COURSE_TRACKS.map((track) => (
                <div key={track.track} className="mb-8">
                  <h2 className="mb-3 text-lg font-bold">{track.track}</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {track.courses.map((course) => (
                      <Link key={course.id} href={`/explore?module=${course.id}`}>
                        <div className="rounded-xl border border-[#e7e5e4] bg-white p-4 transition-all hover:shadow-md dark:border-[#292524] dark:bg-[#1c1917]">
                          <div className="flex items-center gap-3">
                            <div
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                              style={{ backgroundColor: course.color }}
                            >
                              {course.level}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold">{course.title}</h3>
                              <p className="text-xs text-[#78716c]">{course.lessons} lessons</p>
                            </div>
                          </div>
                          {course.progress > 0 && (
                            <div className="mt-3 flex items-center gap-2">
                              <div className="h-1.5 flex-1 rounded-full bg-[#e7e5e4] dark:bg-[#292524]">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${course.progress}%`, backgroundColor: course.color }}
                                />
                              </div>
                              <span className="text-xs font-semibold" style={{ color: course.color }}>
                                {course.progress}%
                              </span>
                            </div>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* ── Tools Tab ───────────────────────────────────────────────────── */}
          {activeTab === "tools" && (
            <motion.div key="tools" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { name: "Financial Calculator", description: "Compound interest, loan amortization, NPV, IRR", href: "/microapps/calculator", color: "#065f46" },
                  { name: "Currency Converter", description: "Real-time exchange rates for 150+ currencies", href: "/microapps/currency", color: "#0d9488" },
                  { name: "Study Flashcards", description: "Spaced repetition for finance terminology", href: "/microapps/flashcards", color: "#1d4ed8" },
                  { name: "Focus Timer", description: "Pomodoro timer for study sessions", href: "/microapps/focus", color: "#7c3aed" },
                  { name: "Lofi Study Music", description: "Background music for deep focus", href: "/microapps/lofi", color: "#be123c" },
                  { name: "Certificate Viewer", description: "View and share your earned certificates", href: "/microapps/certify", color: "#eab308" },
                ].map((tool) => (
                  <Link key={tool.name} href={tool.href}>
                    <div className="flex items-start gap-4 rounded-xl border border-[#e7e5e4] bg-white p-5 transition-all hover:shadow-md dark:border-[#292524] dark:bg-[#1c1917]">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white"
                        style={{ backgroundColor: tool.color }}
                      >
                        {tool.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold">{tool.name}</h3>
                        <p className="mt-0.5 text-xs text-[#78716c] dark:text-[#a8a29e]">{tool.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Certifications Tab ──────────────────────────────────────────── */}
          {activeTab === "certifications" && (
            <motion.div key="certs" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
              <p className="mb-4 text-sm text-[#57534e] dark:text-[#a8a29e]">
                Complete course tracks to earn verifiable certificates. Share them on LinkedIn or download as PDF.
              </p>
              <div className="grid gap-4">
                {CERTIFICATIONS.map((cert) => {
                  const pct = Math.round((cert.completed / cert.modules) * 100);
                  const done = pct >= 100;
                  return (
                    <div key={cert.name} className="rounded-xl border border-[#e7e5e4] bg-white p-5 dark:border-[#292524] dark:bg-[#1c1917]">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 items-center justify-center rounded-full ${done ? "bg-[#eab308] text-white" : "bg-[#f5f5f4] text-[#a8a29e] dark:bg-[#292524]"}`}>
                            {done ? (
                              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15z" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{cert.name}</h3>
                            <p className="text-xs text-[#78716c]">
                              {cert.completed} / {cert.modules} modules completed
                            </p>
                          </div>
                        </div>
                        {done ? (
                          <FinanceButton tone="gold" size="sm">Download</FinanceButton>
                        ) : (
                          <span className="text-sm font-bold" style={{ color: pct > 0 ? "#0d9488" : "#a8a29e" }}>
                            {pct}%
                          </span>
                        )}
                      </div>
                      {!done && (
                        <div className="mt-3 h-1.5 rounded-full bg-[#e7e5e4] dark:bg-[#292524]">
                          <div
                            className="h-full rounded-full bg-[#0d9488] transition-all"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
