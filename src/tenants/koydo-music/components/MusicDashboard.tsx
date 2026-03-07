"use client";

import { useState } from "react";
import Link from "next/link";
import MusicButton from "./MusicButton";

const INSTRUMENTS = [
  { id: "piano", label: "Piano", icon: "\uD83C\uDFB9", progress: 68 },
  { id: "guitar", label: "Guitar", icon: "\uD83C\uDFB8", progress: 32 },
  { id: "drums", label: "Drums", icon: "\uD83E\uDD41", progress: 15 },
  { id: "voice", label: "Vocal", icon: "\uD83C\uDFA4", progress: 45 },
];

const THEORY_COURSES = [
  { id: "theory-101", title: "Music Theory Basics", desc: "Notes, scales, intervals", progress: 85, color: "from-violet-500 to-purple-500" },
  { id: "theory-201", title: "Chord Progressions", desc: "Major, minor, 7ths, extended", progress: 50, color: "from-pink-500 to-rose-500" },
  { id: "theory-301", title: "Rhythm & Meter", desc: "Time signatures, syncopation", progress: 25, color: "from-blue-500 to-cyan-500" },
  { id: "theory-401", title: "Song Structure & Form", desc: "Verse, chorus, bridge, AABA", progress: 10, color: "from-emerald-500 to-teal-500" },
  { id: "theory-501", title: "Harmony & Counterpoint", desc: "Voice leading, countermelody", progress: 0, color: "from-amber-500 to-orange-500" },
  { id: "theory-601", title: "Composition & Arrangement", desc: "Orchestration, DAW workflow", progress: 0, color: "from-red-500 to-pink-500" },
];

const PRACTICE_TOOLS = [
  { label: "Ear Training", desc: "Interval & chord recognition", icon: "\uD83D\uDC42", href: "/games/note-hunter" },
  { label: "Chord Builder", desc: "Build & hear any chord", icon: "\uD83C\uDFBC", href: "/games/chord-builder" },
  { label: "Beat Lab", desc: "Drum machine + rhythm drills", icon: "\uD83E\uDD41", href: "/games/beat-lab" },
  { label: "Sight Reading", desc: "Read sheet music in real time", icon: "\uD83C\uDFB5", href: "/explore?tool=sight-reading" },
];

export default function MusicDashboard() {
  const [activeTab, setActiveTab] = useState<"learn" | "practice" | "create">("learn");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff] to-white dark:from-[#0c0015] dark:to-[#1a0a30]">
      {/* Header */}
      <header className="border-b border-[#ede9fe] dark:border-[#2d1450] bg-white/80 dark:bg-[#1a0a30]/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7c3aed] to-[#ec4899] flex items-center justify-center text-white text-lg">
              {"\uD83C\uDFB5"}
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Music Lab</h1>
              <p className="text-xs text-[#5b21b6] dark:text-[#c4b5fd]">Theory, instruments, and creation</p>
            </div>
          </div>
          <div className="flex gap-2">
            {(["learn", "practice", "create"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={[
                  "px-4 py-2 rounded-lg text-sm font-semibold capitalize transition-all",
                  activeTab === tab
                    ? "bg-[#7c3aed] text-white"
                    : "text-[#5b21b6] dark:text-[#c4b5fd] hover:bg-[#f3e8ff] dark:hover:bg-[#2d1450]",
                ].join(" ")}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Stats Banner */}
        <section className="rounded-2xl bg-gradient-to-r from-[#7c3aed] to-[#ec4899] p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm opacity-80">Your Musical Journey</p>
              <h2 className="text-3xl font-bold">Level 12 - Apprentice</h2>
              <p className="text-sm mt-1 opacity-90">3,420 XP &middot; 680 to next level</p>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">28</div>
                <div className="text-xs opacity-70">Lessons Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">15h</div>
                <div className="text-xs opacity-70">Practice Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">92%</div>
                <div className="text-xs opacity-70">Ear Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {activeTab === "learn" && (
          <>
            {/* Instrument Progress */}
            <section>
              <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Instruments</h3>
              <div className="grid gap-4 sm:grid-cols-4">
                {INSTRUMENTS.map((inst) => (
                  <Link
                    key={inst.id}
                    href={`/explore?instrument=${inst.id}`}
                    className="group rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-5 hover:shadow-lg hover:shadow-[#7c3aed]/10 transition-all hover:-translate-y-0.5"
                  >
                    <div className="text-3xl mb-3">{inst.icon}</div>
                    <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">{inst.label}</h4>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-2 rounded-full bg-[#ede9fe] dark:bg-[#2d1450] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899]"
                          style={{ width: `${inst.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-[#7c3aed]">{inst.progress}%</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Theory Courses */}
            <section>
              <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Music Theory</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {THEORY_COURSES.map((course) => (
                  <Link
                    key={course.id}
                    href={`/explore?module=${course.id}`}
                    className="rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-5 hover:shadow-lg transition-all"
                  >
                    <div className={`h-2 rounded-full bg-gradient-to-r ${course.color} mb-4`} />
                    <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">{course.title}</h4>
                    <p className="text-xs text-[#5b21b6] dark:text-[#c4b5fd] mt-1">{course.desc}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-[#ede9fe] dark:bg-[#2d1450] overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                      <span className="text-xs font-bold text-[#7c3aed]">{course.progress}%</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}

        {activeTab === "practice" && (
          <>
            <section>
              <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Practice Tools</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {PRACTICE_TOOLS.map((tool) => (
                  <Link
                    key={tool.label}
                    href={tool.href}
                    className="flex items-center gap-4 rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-5 hover:shadow-lg transition-all"
                  >
                    <span className="text-3xl">{tool.icon}</span>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">{tool.label}</h4>
                      <p className="text-xs text-[#5b21b6] dark:text-[#c4b5fd]">{tool.desc}</p>
                    </div>
                    <MusicButton tone="outline" size="sm">Open</MusicButton>
                  </Link>
                ))}
              </div>
            </section>

            {/* Metronome */}
            <section className="rounded-2xl bg-gradient-to-br from-[#ef4444] to-[#ec4899] p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="font-bold text-lg">Practice Metronome</h3>
                  <p className="text-sm opacity-90 mt-1">Set your tempo and practice with a steady beat</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold font-mono">120</div>
                    <div className="text-xs opacity-70">BPM</div>
                  </div>
                  <MusicButton tone="primary" size="lg">Start</MusicButton>
                </div>
              </div>
            </section>
          </>
        )}

        {activeTab === "create" && (
          <section className="space-y-6">
            <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Creation Studio</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-6">
                <div className="text-3xl mb-3">{"\uD83C\uDFB6"}</div>
                <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Melody Maker</h4>
                <p className="text-sm text-[#5b21b6] dark:text-[#c4b5fd] mt-1 mb-4">
                  Compose melodies on a virtual piano roll. Experiment with scales and modes.
                </p>
                <MusicButton tone="melody" size="md">Open Studio</MusicButton>
              </div>
              <div className="rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-6">
                <div className="text-3xl mb-3">{"\uD83E\uDD41"}</div>
                <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Beat Maker</h4>
                <p className="text-sm text-[#5b21b6] dark:text-[#c4b5fd] mt-1 mb-4">
                  Create drum patterns with a step sequencer. Layer kicks, snares, and hi-hats.
                </p>
                <MusicButton tone="rhythm" size="md">Open Studio</MusicButton>
              </div>
              <div className="rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-6">
                <div className="text-3xl mb-3">{"\uD83C\uDFB8"}</div>
                <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Chord Sandbox</h4>
                <p className="text-sm text-[#5b21b6] dark:text-[#c4b5fd] mt-1 mb-4">
                  Explore chord voicings and progressions. Hear how chords resolve and modulate.
                </p>
                <MusicButton tone="harmony" size="md">Open Studio</MusicButton>
              </div>
              <div className="rounded-2xl bg-white dark:bg-[#1a0a30] border border-[#ede9fe] dark:border-[#2d1450] p-6">
                <div className="text-3xl mb-3">{"\uD83C\uDFA7"}</div>
                <h4 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Mix & Master</h4>
                <p className="text-sm text-[#5b21b6] dark:text-[#c4b5fd] mt-1 mb-4">
                  Learn EQ, compression, and mixing basics with interactive audio exercises.
                </p>
                <MusicButton tone="outline" size="md">Coming Soon</MusicButton>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
