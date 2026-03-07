"use client";

import { useState } from "react";
import Link from "next/link";
import LanguageButton from "./LanguageButton";

const LANGUAGES = [
  { code: "es", name: "Spanish", flag: "\uD83C\uDDEA\uD83C\uDDF8", speakers: "500M+", level: "B1", progress: 62 },
  { code: "fr", name: "French", flag: "\uD83C\uDDEB\uD83C\uDDF7", speakers: "300M+", level: "A2", progress: 35 },
  { code: "de", name: "German", flag: "\uD83C\uDDE9\uD83C\uDDEA", speakers: "130M+", level: "A1", progress: 12 },
  { code: "ja", name: "Japanese", flag: "\uD83C\uDDEF\uD83C\uDDF5", speakers: "125M+", level: "A1", progress: 8 },
  { code: "zh", name: "Chinese", flag: "\uD83C\uDDE8\uD83C\uDDF3", speakers: "1.1B+", level: "A1", progress: 5 },
  { code: "ko", name: "Korean", flag: "\uD83C\uDDF0\uD83C\uDDF7", speakers: "80M+", level: "--", progress: 0 },
  { code: "pt", name: "Portuguese", flag: "\uD83C\uDDE7\uD83C\uDDF7", speakers: "260M+", level: "--", progress: 0 },
  { code: "ar", name: "Arabic", flag: "\uD83C\uDDF8\uD83C\uDDE6", speakers: "400M+", level: "--", progress: 0 },
];

const SKILL_AREAS = [
  { id: "speaking", label: "Speaking", icon: "\uD83C\uDFA4", score: 58, color: "from-pink-500 to-rose-500" },
  { id: "listening", label: "Listening", icon: "\uD83C\uDFA7", score: 72, color: "from-teal-500 to-cyan-500" },
  { id: "reading", label: "Reading", icon: "\uD83D\uDCD6", score: 85, color: "from-blue-500 to-indigo-500" },
  { id: "writing", label: "Writing", icon: "\u270D\uFE0F", score: 45, color: "from-violet-500 to-purple-500" },
];

const DAILY_ACTIVITIES = [
  { label: "Flashcard Review", desc: "25 cards due", icon: "\uD83C\uDCCF", href: "/explore?tool=flashcards" },
  { label: "Listening Exercise", desc: "5-min podcast", icon: "\uD83C\uDFA7", href: "/explore?tool=listening" },
  { label: "Speaking Practice", desc: "AI conversation", icon: "\uD83D\uDDE3\uFE0F", href: "/explore?tool=speaking" },
  { label: "Grammar Drill", desc: "Verb conjugation", icon: "\uD83D\uDCDD", href: "/explore?tool=grammar" },
];

export default function LanguageDashboard() {
  const [activeLang, setActiveLang] = useState("es");
  const selectedLang = LANGUAGES.find((l) => l.code === activeLang) ?? LANGUAGES[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf5ff] to-white dark:from-[#0f0720] dark:to-[#1e1040]">
      {/* Header */}
      <header className="border-b border-[#ede9fe] dark:border-[#2d1f5e] bg-white/80 dark:bg-[#1e1040]/80 backdrop-blur-sm sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#ec4899] flex items-center justify-center text-white text-lg">
              {"\uD83C\uDF10"}
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#1e1b4b] dark:text-[#f5f3ff]">Koydo Lingua</h1>
              <p className="text-xs text-[#6d28d9] dark:text-[#c4b5fd]">Learn any language, speak with confidence</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#ef4444] text-white text-sm font-bold">
              {"\uD83D\uDD25"} 14 day streak
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 space-y-8">
        {/* Language Selector */}
        <section>
          <h3 className="text-lg font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">My Languages</h3>
          <div className="flex gap-3 flex-wrap">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => setActiveLang(lang.code)}
                className={[
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all",
                  activeLang === lang.code
                    ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/25"
                    : "bg-white dark:bg-[#2d1f5e] text-[#6d28d9] dark:text-[#c4b5fd] hover:bg-[#f3e8ff] dark:hover:bg-[#3d2f6e]",
                ].join(" ")}
              >
                <span className="text-lg">{lang.flag}</span>
                {lang.name}
                {lang.progress > 0 && (
                  <span className="text-xs opacity-70">{lang.level}</span>
                )}
              </button>
            ))}
          </div>
        </section>

        {/* Active Language Progress */}
        <section className="rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#ec4899] p-6 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{selectedLang.flag}</span>
                <div>
                  <h2 className="text-2xl font-bold">{selectedLang.name}</h2>
                  <p className="text-sm opacity-80">{selectedLang.speakers} native speakers worldwide</p>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-3">
                <div className="px-3 py-1 rounded-full bg-white/20 text-sm font-bold">
                  Level: {selectedLang.level || "Not Started"}
                </div>
                <div className="text-sm opacity-80">
                  {selectedLang.progress}% to next level
                </div>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold">842</div>
                <div className="text-xs opacity-70">Words Learned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">126</div>
                <div className="text-xs opacity-70">Lessons Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">47h</div>
                <div className="text-xs opacity-70">Study Time</div>
              </div>
            </div>
          </div>
          <div className="mt-4 h-3 rounded-full bg-white/20 overflow-hidden">
            <div className="h-full rounded-full bg-white/90 transition-all" style={{ width: `${selectedLang.progress}%` }} />
          </div>
        </section>

        {/* Skill Breakdown */}
        <section className="grid gap-4 sm:grid-cols-4">
          {SKILL_AREAS.map((skill) => (
            <div
              key={skill.id}
              className="rounded-2xl bg-white dark:bg-[#1e1040] border border-[#ede9fe] dark:border-[#2d1f5e] p-5"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{skill.icon}</span>
                <span className="font-semibold text-[#1e1b4b] dark:text-[#f5f3ff]">{skill.label}</span>
              </div>
              <div className="text-2xl font-bold text-[#2563eb] dark:text-[#60a5fa]">{skill.score}%</div>
              <div className="mt-2 h-2 rounded-full bg-[#ede9fe] dark:bg-[#2d1f5e] overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.score}%` }}
                />
              </div>
            </div>
          ))}
        </section>

        {/* Daily Activities */}
        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl bg-white dark:bg-[#1e1040] border border-[#ede9fe] dark:border-[#2d1f5e] p-6">
            <h3 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Today&apos;s Plan</h3>
            <div className="space-y-3">
              {DAILY_ACTIVITIES.map((act) => (
                <Link
                  key={act.label}
                  href={act.href}
                  className="flex items-center gap-4 rounded-xl bg-[#f3e8ff] dark:bg-[#2d1f5e] p-4 hover:bg-[#ede9fe] dark:hover:bg-[#3d2f6e] transition-colors"
                >
                  <span className="text-2xl">{act.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium text-[#1e1b4b] dark:text-[#f5f3ff]">{act.label}</div>
                    <div className="text-xs text-[#6d28d9] dark:text-[#c4b5fd]">{act.desc}</div>
                  </div>
                  <LanguageButton tone="outline" size="sm">Start</LanguageButton>
                </Link>
              ))}
            </div>
          </section>

          <section className="rounded-2xl bg-gradient-to-br from-[#14b8a6] to-[#06b6d4] p-6 text-white">
            <h3 className="font-bold text-lg mb-2">AI Conversation Partner</h3>
            <p className="text-sm opacity-90 mb-4">
              Practice real-world conversations with an AI tutor who adapts to your level.
              Choose a scenario: ordering food, asking for directions, job interview, and more.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["\uD83C\uDF7D\uFE0F Restaurant", "\uD83D\uDEEB Airport", "\uD83C\uDFE5 Doctor", "\uD83D\uDCBC Job Interview"].map((scenario) => (
                <div key={scenario} className="rounded-lg bg-white/20 px-3 py-2 text-sm text-center">{scenario}</div>
              ))}
            </div>
            <Link href="/explore?tool=ai-conversation">
              <LanguageButton tone="primary" size="lg" className="w-full">Start Conversation</LanguageButton>
            </Link>
          </section>
        </div>

        {/* Pronunciation */}
        <section className="rounded-2xl bg-white dark:bg-[#1e1040] border border-[#ede9fe] dark:border-[#2d1f5e] p-6">
          <h3 className="font-bold text-[#1e1b4b] dark:text-[#f5f3ff] mb-4">Pronunciation Tracker</h3>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { sound: "Rolling R", accuracy: 42, lang: "Spanish" },
              { sound: "Nasal Vowels", accuracy: 55, lang: "French" },
              { sound: "\u00DC Umlaut", accuracy: 38, lang: "German" },
            ].map((item) => (
              <div key={item.sound} className="rounded-xl bg-[#f3e8ff] dark:bg-[#2d1f5e] p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1e1b4b] dark:text-[#f5f3ff]">{item.sound}</span>
                  <span className="text-xs text-[#6d28d9] dark:text-[#c4b5fd]">{item.lang}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 rounded-full bg-[#ede9fe] dark:bg-[#1e1040] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#ec4899] to-[#f43f5e]"
                      style={{ width: `${item.accuracy}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#ec4899]">{item.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
