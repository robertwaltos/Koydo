"use client";

import { useState } from "react";
import Link from "next/link";
import NeuroButton from "./NeuroButton";

const BRAIN_ZONES = [
  {
    id: "memory",
    label: "Memory",
    icon: "\uD83E\uDDE0",
    color: "from-amber-400 to-orange-500",
    description: "Working memory, recall, and retention exercises",
    games: [
      { id: "sequence-recall", title: "Sequence Recall", type: "game" },
      { id: "word-pairs", title: "Word Pair Match", type: "game" },
      { id: "spatial-memory", title: "Spatial Memory Grid", type: "game" },
    ],
  },
  {
    id: "logic",
    label: "Logic",
    icon: "\uD83E\uDDE9",
    color: "from-violet-500 to-purple-600",
    description: "Deductive reasoning, patterns, and problem solving",
    games: [
      { id: "pattern-matrix", title: "Pattern Matrix", type: "game" },
      { id: "logic-gates", title: "Logic Gate Puzzles", type: "game" },
      { id: "syllogism-solver", title: "Syllogism Solver", type: "game" },
    ],
  },
  {
    id: "speed",
    label: "Processing Speed",
    icon: "\u26A1",
    color: "from-cyan-400 to-teal-500",
    description: "Reaction time, visual processing, and quick thinking",
    games: [
      { id: "color-stroop", title: "Color Stroop Test", type: "game" },
      { id: "rapid-calc", title: "Rapid Calculation", type: "game" },
      { id: "visual-search", title: "Visual Search", type: "game" },
    ],
  },
  {
    id: "focus",
    label: "Attention",
    icon: "\uD83C\uDFAF",
    color: "from-emerald-400 to-green-500",
    description: "Sustained attention, selective focus, and concentration",
    games: [
      { id: "continuous-perf", title: "Continuous Performance", type: "game" },
      { id: "dual-n-back", title: "Dual N-Back", type: "game" },
      { id: "flanker-task", title: "Flanker Task", type: "game" },
    ],
  },
  {
    id: "language",
    label: "Verbal",
    icon: "\uD83D\uDCAC",
    color: "from-blue-400 to-indigo-500",
    description: "Vocabulary, verbal fluency, and comprehension",
    games: [
      { id: "word-gen", title: "Word Generation", type: "game" },
      { id: "reading-comp", title: "Speed Reading", type: "game" },
      { id: "anagram-solve", title: "Anagram Solver", type: "game" },
    ],
  },
];

const COURSES = [
  { id: "neuro-101", title: "Introduction to Neuroscience", modules: 8, progress: 75 },
  { id: "cog-psych-101", title: "Cognitive Psychology", modules: 10, progress: 30 },
  { id: "brain-health-101", title: "Brain Health & Longevity", modules: 6, progress: 0 },
  { id: "sleep-science-101", title: "Sleep & Memory Science", modules: 5, progress: 0 },
];

export default function NeuroDashboard() {
  const [activeTab, setActiveTab] = useState<"train" | "courses" | "stats">("train");
  const [activeZone, setActiveZone] = useState("memory");
  const selectedZone = BRAIN_ZONES.find((z) => z.id === activeZone) ?? BRAIN_ZONES[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdfa] to-white dark:from-[#042f2e] dark:to-[#134e4a]">
      {/* Header */}
      <header className="border-b border-[#ccfbf1] dark:border-[#115e59] bg-white/80 dark:bg-[#134e4a]/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0891b2] to-[#8b5cf6] flex items-center justify-center text-white text-lg">
              {"\uD83E\uDDE0"}
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#134e4a] dark:text-[#f0fdfa]">Koydo Neuro</h1>
              <p className="text-xs text-[#0d9488] dark:text-[#5eead4]">Train your brain, sharpen your mind</p>
            </div>
          </div>
          <div className="flex gap-2">
            {(["train", "courses", "stats"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all",
                  activeTab === tab
                    ? "bg-[#0891b2] text-white"
                    : "text-[#0d9488] dark:text-[#5eead4] hover:bg-[#ccfbf1] dark:hover:bg-[#115e59]",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Brain Performance Overview */}
        <section className="rounded-2xl bg-gradient-to-r from-[#0891b2] to-[#8b5cf6] p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm opacity-80">Brain Performance Index</p>
              <h2 className="text-4xl font-bold">742</h2>
              <p className="text-sm mt-1 opacity-90">+18 points this week</p>
            </div>
            <div className="flex gap-6">
              {[
                { label: "Memory", score: 78, icon: "\uD83E\uDDE0" },
                { label: "Logic", score: 85, icon: "\uD83E\uDDE9" },
                { label: "Speed", score: 62, icon: "\u26A1" },
                { label: "Focus", score: 71, icon: "\uD83C\uDFAF" },
                { label: "Verbal", score: 80, icon: "\uD83D\uDCAC" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-xl mb-1">{stat.icon}</div>
                  <div className="text-lg font-bold">{stat.score}</div>
                  <div className="text-xs opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {activeTab === "train" && (
          <>
            {/* Brain Zone Selector */}
            <section>
              <h3 className="text-lg font-bold text-[#134e4a] dark:text-[#f0fdfa] mb-4">Brain Training Zones</h3>
              <div className="flex gap-3 flex-wrap">
                {BRAIN_ZONES.map((zone) => (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZone(zone.id)}
                    className={[
                      "px-4 py-2.5 rounded-xl font-semibold text-sm transition-all",
                      activeZone === zone.id
                        ? "bg-[#0891b2] text-white shadow-lg shadow-[#0891b2]/25"
                        : "bg-white dark:bg-[#115e59] text-[#0d9488] dark:text-[#5eead4] hover:bg-[#ccfbf1] dark:hover:bg-[#134e4a]",
                    ].join(" ")}
                  >
                    <span className="mr-2">{zone.icon}</span>
                    {zone.label}
                  </button>
                ))}
              </div>
            </section>

            {/* Active Zone Games */}
            <section>
              <div className="mb-4">
                <h4 className="font-bold text-[#134e4a] dark:text-[#f0fdfa]">{selectedZone.label} Training</h4>
                <p className="text-sm text-[#0d9488] dark:text-[#5eead4]">{selectedZone.description}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {selectedZone.games.map((game) => (
                  <Link
                    key={game.id}
                    href={`/games/${game.id}`}
                    className="group rounded-2xl bg-white dark:bg-[#134e4a] border border-[#ccfbf1] dark:border-[#115e59] p-5 hover:shadow-lg hover:shadow-[#0891b2]/10 transition-all hover:-translate-y-0.5"
                  >
                    <div className={`h-2 rounded-full bg-gradient-to-r ${selectedZone.color} mb-4`} />
                    <h5 className="font-bold text-[#134e4a] dark:text-[#f0fdfa]">{game.title}</h5>
                    <p className="text-xs text-[#0d9488] dark:text-[#5eead4] mt-1">
                      Best: 850 &middot; Avg: 720
                    </p>
                    <NeuroButton tone="outline" size="sm" className="mt-3 w-full">
                      Play
                    </NeuroButton>
                  </Link>
                ))}
              </div>
            </section>

            {/* Daily Brain Workout */}
            <section className="rounded-2xl bg-gradient-to-br from-[#f97316] to-[#f59e0b] p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-bold text-lg">Daily Brain Workout</h3>
                  <p className="text-sm opacity-90 mt-1">
                    5-minute personalized workout targeting your weakest zones
                  </p>
                </div>
                <Link href="/games/daily-challenge">
                  <NeuroButton tone="primary" size="lg">Start Workout</NeuroButton>
                </Link>
              </div>
            </section>
          </>
        )}

        {activeTab === "courses" && (
          <section className="space-y-4">
            <h3 className="text-lg font-bold text-[#134e4a] dark:text-[#f0fdfa]">Neuroscience Courses</h3>
            {COURSES.map((course) => (
              <Link
                key={course.id}
                href={`/explore?module=${course.id}`}
                className="block rounded-2xl bg-white dark:bg-[#134e4a] border border-[#ccfbf1] dark:border-[#115e59] p-5 hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-[#134e4a] dark:text-[#f0fdfa]">{course.title}</h4>
                    <p className="text-sm text-[#0d9488] dark:text-[#5eead4]">{course.modules} modules</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold text-[#0891b2]">{course.progress}%</div>
                    <div className="w-24 h-2 rounded-full bg-[#ccfbf1] dark:bg-[#115e59] mt-1 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#0891b2] to-[#8b5cf6]"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </section>
        )}

        {activeTab === "stats" && (
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-[#134e4a] dark:text-[#f0fdfa]">Performance History</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Sessions This Week", value: "14", trend: "+3" },
                { label: "Avg Session Duration", value: "8m", trend: "+1m" },
                { label: "Problems Solved", value: "342", trend: "+48" },
                { label: "Current Streak", value: "9 days", trend: "" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-white dark:bg-[#134e4a] border border-[#ccfbf1] dark:border-[#115e59] p-5"
                >
                  <p className="text-sm text-[#0d9488] dark:text-[#5eead4]">{stat.label}</p>
                  <div className="flex items-end gap-2 mt-1">
                    <span className="text-2xl font-bold text-[#134e4a] dark:text-[#f0fdfa]">{stat.value}</span>
                    {stat.trend && (
                      <span className="text-xs font-semibold text-[#10b981] mb-1">{stat.trend}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Zone breakdown */}
            <div className="rounded-2xl bg-white dark:bg-[#134e4a] border border-[#ccfbf1] dark:border-[#115e59] p-6">
              <h4 className="font-bold text-[#134e4a] dark:text-[#f0fdfa] mb-4">Zone Performance</h4>
              <div className="space-y-4">
                {BRAIN_ZONES.map((zone) => {
                  const score = { memory: 78, logic: 85, speed: 62, focus: 71, language: 80 }[zone.id] ?? 70;
                  return (
                    <div key={zone.id} className="flex items-center gap-4">
                      <span className="text-xl w-8">{zone.icon}</span>
                      <span className="text-sm font-medium w-32 text-[#134e4a] dark:text-[#f0fdfa]">{zone.label}</span>
                      <div className="flex-1 h-3 rounded-full bg-[#ccfbf1] dark:bg-[#115e59] overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${zone.color}`}
                          style={{ width: `${score}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold text-[#0891b2] w-10 text-right">{score}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
