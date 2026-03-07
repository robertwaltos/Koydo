"use client";

import { useState } from "react";
import Link from "next/link";
import MathButton from "./MathButton";

const MATH_TRACKS = [
  {
    id: "basic",
    label: "Basic Math",
    icon: "1+1",
    color: "from-green-400 to-emerald-500",
    levels: [
      { id: "basic-math-101", title: "Number Sense & Counting", level: 101 },
      { id: "basic-math-201", title: "Addition & Subtraction", level: 201 },
      { id: "basic-math-301", title: "Multiplication & Division", level: 301 },
      { id: "basic-math-401", title: "Fractions & Decimals", level: 401 },
    ],
  },
  {
    id: "algebra",
    label: "Algebra",
    icon: "x=",
    color: "from-blue-500 to-indigo-600",
    levels: [
      { id: "advanced-math-101", title: "Pre-Algebra", level: 101 },
      { id: "advanced-math-201", title: "Algebra I", level: 201 },
      { id: "advanced-math-301", title: "Algebra II", level: 301 },
    ],
  },
  {
    id: "geometry",
    label: "Geometry",
    icon: "\u25B3",
    color: "from-purple-500 to-violet-600",
    levels: [
      { id: "advanced-math-401", title: "Geometry Foundations", level: 401 },
      { id: "advanced-math-501", title: "Trigonometry", level: 501 },
    ],
  },
  {
    id: "calculus",
    label: "Calculus",
    icon: "\u222B",
    color: "from-red-500 to-rose-600",
    levels: [
      { id: "advanced-math-601", title: "Calculus I & II", level: 601 },
    ],
  },
];

const QUICK_TOOLS = [
  { label: "Formula Sheet", href: "/explore?subject=Math&tool=formulas", icon: "\uD83D\uDCCB" },
  { label: "Graphing Calculator", href: "/explore?subject=Math&tool=graphing", icon: "\uD83D\uDCC8" },
  { label: "Unit Converter", href: "/explore?subject=Math&tool=converter", icon: "\u2696\uFE0F" },
  { label: "Practice Problems", href: "/explore?subject=Math&tool=practice", icon: "\u270F\uFE0F" },
];

export default function MathDashboard() {
  const [activeTrack, setActiveTrack] = useState("basic");
  const selectedTrack = MATH_TRACKS.find((t) => t.id === activeTrack) ?? MATH_TRACKS[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f3ff] to-white dark:from-[#0f0d1a] dark:to-[#1e1b2e]">
      {/* Header */}
      <header className="border-b border-[#e9e5ff] dark:border-[#2d2844] bg-white/80 dark:bg-[#1e1b2e]/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6c5ce7] to-[#a29bfe] flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Math Forge</h1>
              <p className="text-xs text-[#4c1d95] dark:text-[#a29bfe]">Build unshakeable math skills</p>
            </div>
          </div>
          <Link href="/explore?subject=Math">
            <MathButton tone="outline" size="sm">Browse All Modules</MathButton>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Skill Level Progress */}
        <section className="rounded-2xl bg-gradient-to-r from-[#6c5ce7] to-[#a29bfe] p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm opacity-80">Your Math Level</p>
              <h2 className="text-3xl font-bold">Intermediate</h2>
              <p className="text-sm mt-1 opacity-90">42 concepts mastered &middot; 18 in progress</p>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">76%</div>
                <div className="text-xs opacity-80">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-xs opacity-80">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">156</div>
                <div className="text-xs opacity-80">Problems Solved</div>
              </div>
            </div>
          </div>
          <div className="mt-4 h-3 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full rounded-full bg-white/90 transition-all" style={{ width: "62%" }} />
          </div>
          <p className="text-xs mt-1 opacity-70">62% to Advanced level</p>
        </section>

        {/* Track Selector */}
        <section>
          <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Learning Tracks</h3>
          <div className="flex gap-3 flex-wrap">
            {MATH_TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrack(track.id)}
                className={[
                  "px-4 py-2.5 rounded-xl font-semibold text-sm transition-all",
                  activeTrack === track.id
                    ? "bg-[#6c5ce7] text-white shadow-lg shadow-[#6c5ce7]/25"
                    : "bg-white dark:bg-[#2d2844] text-[#4c1d95] dark:text-[#a29bfe] hover:bg-[#f5f3ff] dark:hover:bg-[#3d3660]",
                ].join(" ")}
              >
                <span className="mr-2">{track.icon}</span>
                {track.label}
              </button>
            ))}
          </div>
        </section>

        {/* Active Track Modules */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {selectedTrack.levels.map((mod, i) => (
            <Link
              key={mod.id}
              href={`/explore?module=${mod.id}`}
              className="group rounded-2xl bg-white dark:bg-[#1e1b2e] border border-[#e9e5ff] dark:border-[#2d2844] p-5 hover:shadow-lg hover:shadow-[#6c5ce7]/10 transition-all hover:-translate-y-0.5"
            >
              <div className={`h-2 rounded-full bg-gradient-to-r ${selectedTrack.color} mb-4`} />
              <p className="text-xs text-[#a29bfe] font-semibold">Level {mod.level}</p>
              <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mt-1">{mod.title}</h4>
              <div className="mt-3 flex items-center justify-between">
                <div className="h-1.5 flex-1 rounded-full bg-[#e9e5ff] dark:bg-[#2d2844] overflow-hidden mr-3">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${selectedTrack.color}`}
                    style={{ width: `${Math.max(5, 90 - i * 25)}%` }}
                  />
                </div>
                <span className="text-xs text-[#4c1d95] dark:text-[#a29bfe] font-medium">
                  {Math.max(5, 90 - i * 25)}%
                </span>
              </div>
            </Link>
          ))}
        </section>

        {/* Quick Tools & Daily Challenge */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white dark:bg-[#1e1b2e] border border-[#e9e5ff] dark:border-[#2d2844] p-6">
            <h3 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Quick Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {QUICK_TOOLS.map((tool) => (
                <Link
                  key={tool.label}
                  href={tool.href}
                  className="flex items-center gap-3 rounded-xl bg-[#f5f3ff] dark:bg-[#2d2844] p-3 hover:bg-[#ede9fe] dark:hover:bg-[#3d3660] transition-colors"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-[#4c1d95] dark:text-[#a29bfe]">{tool.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-[#fdcb6e] to-[#f59e0b] p-6 text-[#1e1b4b]">
            <h3 className="font-bold mb-2">Daily Math Challenge</h3>
            <p className="text-sm opacity-80 mb-4">
              Solve today&apos;s challenge problem to earn bonus XP and extend your streak.
            </p>
            <div className="rounded-xl bg-white/30 backdrop-blur-sm p-4 mb-4">
              <p className="font-mono text-lg font-bold">
                If f(x) = 3x&sup2; - 2x + 5, find f&apos;(x)
              </p>
            </div>
            <Link href="/games/daily-challenge">
              <MathButton tone="primary" size="md">Solve Challenge</MathButton>
            </Link>
          </section>
        </div>

        {/* Weak Areas */}
        <section className="rounded-2xl bg-white dark:bg-[#1e1b2e] border border-[#e9e5ff] dark:border-[#2d2844] p-6">
          <h3 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Areas to Improve</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { topic: "Quadratic Equations", accuracy: 45, color: "bg-red-500" },
              { topic: "Fraction Operations", accuracy: 58, color: "bg-orange-500" },
              { topic: "Word Problems", accuracy: 62, color: "bg-yellow-500" },
            ].map((area) => (
              <div key={area.topic} className="rounded-xl bg-[#f5f3ff] dark:bg-[#2d2844] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1e1b4b] dark:text-[#f5f3ff]">{area.topic}</span>
                  <span className="text-xs font-bold text-[#ef4444]">{area.accuracy}%</span>
                </div>
                <div className="h-2 rounded-full bg-[#e9e5ff] dark:bg-[#1e1b2e] overflow-hidden">
                  <div className={`h-full rounded-full ${area.color}`} style={{ width: `${area.accuracy}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
