"use client";

import { useState } from "react";
import Link from "next/link";
import HealthButton from "./HealthButton";

const HEALTH_TRACKS = [
  {
    id: "nutrition",
    label: "Nutrition",
    icon: "\uD83E\uDD57",
    color: "from-green-400 to-emerald-500",
    courses: [
      { id: "nutrition-101", title: "Nutrition Fundamentals", progress: 72 },
      { id: "nutrition-201", title: "Macros & Micros", progress: 40 },
      { id: "nutrition-301", title: "Meal Planning", progress: 10 },
    ],
  },
  {
    id: "fitness",
    label: "Fitness",
    icon: "\uD83C\uDFCB\uFE0F",
    color: "from-red-400 to-rose-500",
    courses: [
      { id: "fitness-101", title: "Exercise Science Basics", progress: 55 },
      { id: "fitness-201", title: "Strength Training", progress: 25 },
      { id: "fitness-301", title: "Cardio & Endurance", progress: 0 },
    ],
  },
  {
    id: "mental",
    label: "Mental Health",
    icon: "\uD83E\uDDD8",
    color: "from-indigo-400 to-violet-500",
    courses: [
      { id: "mental-101", title: "Stress Management", progress: 60 },
      { id: "mental-201", title: "Mindfulness & Meditation", progress: 30 },
      { id: "mental-301", title: "Sleep Hygiene", progress: 15 },
    ],
  },
  {
    id: "anatomy",
    label: "Anatomy",
    icon: "\uD83E\uDEC0",
    color: "from-cyan-400 to-teal-500",
    courses: [
      { id: "anatomy-101", title: "Human Body Systems", progress: 45 },
      { id: "anatomy-201", title: "Musculoskeletal System", progress: 20 },
      { id: "anatomy-301", title: "Cardiovascular System", progress: 0 },
    ],
  },
];

const WELLNESS_TOOLS = [
  { label: "BMI Calculator", icon: "\u2696\uFE0F", href: "/explore?tool=bmi" },
  { label: "Calorie Tracker", icon: "\uD83C\uDF4E", href: "/explore?tool=calories" },
  { label: "Water Intake", icon: "\uD83D\uDCA7", href: "/explore?tool=hydration" },
  { label: "Sleep Logger", icon: "\uD83D\uDE34", href: "/explore?tool=sleep" },
  { label: "Meditation Timer", icon: "\uD83D\uDD49\uFE0F", href: "/explore?tool=meditation" },
  { label: "First Aid Guide", icon: "\uD83E\uDE79", href: "/explore?tool=first-aid" },
];

export default function HealthDashboard() {
  const [activeTrack, setActiveTrack] = useState("nutrition");
  const selectedTrack = HEALTH_TRACKS.find((t) => t.id === activeTrack) ?? HEALTH_TRACKS[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0fdf4] to-white dark:from-[#022c22] dark:to-[#14532d]">
      {/* Header */}
      <header className="border-b border-[#bbf7d0] dark:border-[#166534] bg-white/80 dark:bg-[#14532d]/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#059669] to-[#0891b2] flex items-center justify-center text-white text-lg">
              {"\uD83C\uDF3F"}
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#14532d] dark:text-[#f0fdf4]">Koydo Health</h1>
              <p className="text-xs text-[#166534] dark:text-[#86efac]">Wellness, nutrition, and body science</p>
            </div>
          </div>
          <Link href="/explore?subject=Health">
            <HealthButton tone="outline" size="sm">Browse All</HealthButton>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Wellness Score */}
        <section className="rounded-2xl bg-gradient-to-r from-[#059669] to-[#0891b2] p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm opacity-80">Your Wellness Score</p>
              <h2 className="text-4xl font-bold">78/100</h2>
              <p className="text-sm mt-1 opacity-90">+5 points this week</p>
            </div>
            <div className="flex gap-6">
              {[
                { label: "Nutrition", score: "B+", icon: "\uD83E\uDD57" },
                { label: "Fitness", score: "B", icon: "\uD83C\uDFCB\uFE0F" },
                { label: "Sleep", score: "A-", icon: "\uD83D\uDE34" },
                { label: "Mindfulness", score: "C+", icon: "\uD83E\uDDD8" },
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

        {/* Track Selector */}
        <section>
          <h3 className="text-lg font-bold text-[#14532d] dark:text-[#f0fdf4] mb-4">Learning Tracks</h3>
          <div className="flex gap-3 flex-wrap">
            {HEALTH_TRACKS.map((track) => (
              <button
                key={track.id}
                type="button"
                onClick={() => setActiveTrack(track.id)}
                className={[
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all",
                  activeTrack === track.id
                    ? "bg-[#059669] text-white shadow-lg shadow-[#059669]/25"
                    : "bg-white dark:bg-[#166534] text-[#166534] dark:text-[#86efac] hover:bg-[#ecfdf5] dark:hover:bg-[#14532d]",
                ].join(" ")}
              >
                <span className="text-lg">{track.icon}</span>
                {track.label}
              </button>
            ))}
          </div>
        </section>

        {/* Active Track Courses */}
        <section className="grid gap-4 sm:grid-cols-3">
          {selectedTrack.courses.map((course) => (
            <Link
              key={course.id}
              href={`/explore?module=${course.id}`}
              className="group rounded-2xl bg-white dark:bg-[#14532d] border border-[#bbf7d0] dark:border-[#166534] p-5 hover:shadow-lg hover:shadow-[#059669]/10 transition-all hover:-translate-y-0.5"
            >
              <div className={`h-2 rounded-full bg-gradient-to-r ${selectedTrack.color} mb-4`} />
              <h4 className="font-bold text-[#14532d] dark:text-[#f0fdf4]">{course.title}</h4>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex-1 h-2 rounded-full bg-[#bbf7d0] dark:bg-[#166534] overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${selectedTrack.color}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
                <span className="text-xs font-bold text-[#059669]">{course.progress}%</span>
              </div>
            </Link>
          ))}
        </section>

        {/* Wellness Tools + Daily Tip */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white dark:bg-[#14532d] border border-[#bbf7d0] dark:border-[#166534] p-6">
            <h3 className="font-bold text-[#14532d] dark:text-[#f0fdf4] mb-4">Wellness Tools</h3>
            <div className="grid grid-cols-2 gap-3">
              {WELLNESS_TOOLS.map((tool) => (
                <Link
                  key={tool.label}
                  href={tool.href}
                  className="flex items-center gap-3 rounded-xl bg-[#ecfdf5] dark:bg-[#166534] p-3 hover:bg-[#d1fae5] dark:hover:bg-[#14532d] transition-colors"
                >
                  <span className="text-xl">{tool.icon}</span>
                  <span className="text-sm font-medium text-[#166534] dark:text-[#86efac]">{tool.label}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-[#f97316] to-[#ef4444] p-6 text-white">
            <h3 className="font-bold text-lg mb-2">{"\uD83D\uDCA1"} Daily Health Tip</h3>
            <p className="text-sm opacity-90 mb-4">
              <strong>Hydration matters:</strong> Drinking water 30 minutes before meals can increase
              metabolism by 24-30% for the next hour. Aim for 8 glasses (2L) daily.
            </p>
            <div className="rounded-xl bg-white/20 backdrop-blur-sm p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Today&apos;s water intake</span>
                <span className="font-bold">5/8 glasses</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-white/30 overflow-hidden">
                <div className="h-full rounded-full bg-white/90" style={{ width: "62.5%" }} />
              </div>
            </div>
            <HealthButton tone="primary" size="md">Log Water</HealthButton>
          </section>
        </div>

        {/* Body Systems Quick View */}
        <section className="rounded-2xl bg-white dark:bg-[#14532d] border border-[#bbf7d0] dark:border-[#166534] p-6">
          <h3 className="font-bold text-[#14532d] dark:text-[#f0fdf4] mb-4">Body Systems Explorer</h3>
          <div className="grid gap-3 sm:grid-cols-4">
            {[
              { system: "Cardiovascular", icon: "\u2764\uFE0F", lessons: 12 },
              { system: "Respiratory", icon: "\uD83E\uDEC1", lessons: 8 },
              { system: "Digestive", icon: "\uD83E\uDDB7", lessons: 10 },
              { system: "Nervous", icon: "\uD83E\uDDE0", lessons: 14 },
            ].map((sys) => (
              <Link
                key={sys.system}
                href={`/explore?system=${sys.system.toLowerCase()}`}
                className="rounded-xl bg-[#ecfdf5] dark:bg-[#166534] p-4 text-center hover:bg-[#d1fae5] dark:hover:bg-[#14532d] transition-colors"
              >
                <div className="text-2xl mb-2">{sys.icon}</div>
                <div className="text-sm font-bold text-[#14532d] dark:text-[#f0fdf4]">{sys.system}</div>
                <div className="text-xs text-[#166534] dark:text-[#86efac]">{sys.lessons} lessons</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
