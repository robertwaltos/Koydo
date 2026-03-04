"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LessonPlayer } from "@/components/explorer/LessonPlayer";
import type { CurriculumModule } from "@/lib/types/curriculum";

type CurriculumViewProps = {
  sessionId: string;
  worldId: string;
  modules: CurriculumModule[];
};

export default function CurriculumView({ sessionId: _sessionId, worldId, modules }: CurriculumViewProps) {
  const [activeModuleIndex, setActiveModuleIndex] = useState<number | null>(null);
  const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());

  const activeModule = activeModuleIndex !== null ? modules[activeModuleIndex] : null;

  const handleComplete = () => {
    if (activeModuleIndex !== null) {
      setCompletedModules((prev) => new Set([...prev, activeModuleIndex]));
    }
    setActiveModuleIndex(null);
  };

  const completionPercent =
    modules.length > 0 ? Math.round((completedModules.size / modules.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Module player overlay */}
      {activeModule && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-900/90 backdrop-blur p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl">
            <button
              onClick={() => setActiveModuleIndex(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm font-semibold transition-colors"
              aria-label="Close module player"
            >
              ✕ Close
            </button>
            <LessonPlayer module={activeModule} onComplete={handleComplete} />
          </div>
        </div>
      )}

      {/* Navigation bar */}
      <nav className="sticky top-0 z-40 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <Link
            href="/student/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
          >
            <span aria-hidden="true">←</span>
            Choose a different path
          </Link>
          {completedModules.size > 0 && (
            <span className="text-sm font-bold text-emerald-600">
              {completedModules.size} / {modules.length} completed
            </span>
          )}
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-700 mb-4">
            {worldId.replace(/-/g, " ")} path
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Your Learning Modules
          </h1>
          <p className="mt-3 text-stone-500 text-sm sm:text-base max-w-lg mx-auto">
            Tap any module to start. Each one is tailored to your level.
          </p>
        </div>

        {/* Progress bar (once at least one module is done) */}
        {completedModules.size > 0 && (
          <div className="mb-8 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-stone-700">Path Progress</span>
              <span className="text-sm font-bold text-teal-600">{completionPercent}%</span>
            </div>
            <div className="h-2.5 w-full rounded-full bg-stone-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-teal-500 transition-all duration-700"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Module cards */}
        {modules.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-12 text-center shadow-sm">
            <p className="text-stone-500">No modules found for this session.</p>
            <Link
              href="/student/dashboard"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal-600 hover:underline"
            >
              ← Go back and pick a path
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, i) => {
              const isDone = completedModules.has(i);
              return (
                <button
                  key={i}
                  onClick={() => setActiveModuleIndex(i)}
                  className={`
                    group relative flex flex-col text-left rounded-2xl border bg-white p-6 shadow-sm
                    transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-teal-500
                    ${isDone
                      ? "border-emerald-300 ring-1 ring-emerald-200"
                      : "border-stone-200 hover:border-teal-300"}
                  `}
                >
                  {/* Completion badge */}
                  {isDone && (
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white text-xs shadow">
                      ✓
                    </span>
                  )}

                  {/* Icon */}
                  <div className="mb-4 flex justify-between items-start">
                    <span className="text-5xl filter drop-shadow-sm leading-none">
                      {mod.icon}
                    </span>
                    {mod.media?.animationStyle && (
                      <span className="text-[10px] font-mono bg-stone-100 text-stone-400 px-2 py-0.5 rounded border border-stone-200">
                        {mod.media.animationStyle}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-teal-700 transition-colors">
                    {mod.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-stone-500 leading-relaxed flex-1 mb-6">
                    {mod.desc}
                  </p>

                  {/* CTA strip */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                    <span className="text-xs font-bold text-stone-400 uppercase tracking-wider">
                      {isDone ? "Done — replay?" : "Tap to start"}
                    </span>
                    <span
                      className={`
                        flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors
                        ${isDone
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-stone-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"}
                      `}
                    >
                      {isDone ? "↺" : "▶"}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* All done state */}
        {modules.length > 0 && completedModules.size === modules.length && (
          <div className="mt-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center animate-in fade-in duration-500">
            <div className="text-4xl mb-3">🎉</div>
            <h3 className="text-xl font-extrabold text-emerald-800">Path Complete!</h3>
            <p className="mt-2 text-sm text-emerald-700">
              Amazing work. Ready to explore another path?
            </p>
            <Link
              href="/student/dashboard"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-bold text-white shadow hover:bg-emerald-500 transition-colors"
            >
              Explore More Paths →
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
