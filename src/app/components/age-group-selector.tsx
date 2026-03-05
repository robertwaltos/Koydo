"use client";

import { useState, useEffect } from "react";

type AgeGroup = "tiny-explorer" | "young-adventurer" | "teen-mode" | "adult-pro";

interface AgeGroupCard {
  id: AgeGroup;
  emoji: string;
  title: string;
  ages: string;
  tagline: string;
  accentColor: string;
  bgColor: string;
  pillColor: string;
}

const AGE_GROUPS: AgeGroupCard[] = [
  {
    id: "tiny-explorer",
    emoji: "🌟",
    title: "Tiny Explorer",
    ages: "Ages 1–5",
    tagline: "Big letters, bright colours, playful sounds",
    accentColor: "#ff6b35",
    bgColor: "#fff9f0",
    pillColor: "bg-orange-50 text-orange-700 border-orange-200",
  },
  {
    id: "young-adventurer",
    emoji: "🚀",
    title: "Young Adventurer",
    ages: "Ages 6–11",
    tagline: "Curiosity-led modules with mini quests",
    accentColor: "#7c3aed",
    bgColor: "#f4f0ff",
    pillColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
  {
    id: "teen-mode",
    emoji: "⚡",
    title: "Teen Mode",
    ages: "Ages 12–17",
    tagline: "Fast-paced, exam-ready, seriously deep",
    accentColor: "#818cf8",
    bgColor: "#0f0f14",
    pillColor: "bg-indigo-950/60 text-indigo-300 border-indigo-800",
  },
  {
    id: "adult-pro",
    emoji: "💼",
    title: "Adult Pro",
    ages: "Ages 18+",
    tagline: "Career, college, and lifelong learning",
    accentColor: "#2563eb",
    bgColor: "#fafafa",
    pillColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

const STORAGE_KEY = "koydo.age-group";

export default function AgeGroupSelector() {
  const [active, setActive] = useState<AgeGroup | null>(null);

  // Restore from previous session
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as AgeGroup | null;
      if (stored && AGE_GROUPS.some((g) => g.id === stored)) {
        setActive(stored);
        document.documentElement.setAttribute("data-age-group", stored);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  function handleSelect(group: AgeGroup) {
    const next = active === group ? null : group;
    setActive(next);
    if (next) {
      document.documentElement.setAttribute("data-age-group", next);
      try { localStorage.setItem(STORAGE_KEY, next); } catch { /* noop */ }
    } else {
      document.documentElement.removeAttribute("data-age-group");
      try { localStorage.removeItem(STORAGE_KEY); } catch { /* noop */ }
    }
  }

  return (
    <section className="relative mx-auto max-w-7xl px-4 py-10 sm:py-14">
      {/* Header */}
      <div className="mb-6 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
          Designed for every learner
        </p>
        <h2
          className="mt-2 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          Pick your learning style
        </h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-zinc-500">
          Koydo adapts to your age and pace — tap a card to preview the experience
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {AGE_GROUPS.map((group) => {
          const isActive = active === group.id;
          const isDark = group.id === "teen-mode";
          return (
            <button
              key={group.id}
              type="button"
              onClick={() => handleSelect(group.id)}
              aria-pressed={isActive}
              className={[
                "group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border px-4 py-6 text-center transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isActive
                  ? "scale-[1.02] shadow-xl ring-2 ring-offset-2"
                  : "hover:scale-[1.01] hover:shadow-md",
                isDark
                  ? "border-zinc-700/60 bg-zinc-900 text-zinc-100"
                  : "border-zinc-200/70 bg-white text-zinc-800",
              ].join(" ")}
              style={{
                ...(isActive
                  ? { ringColor: group.accentColor, borderColor: group.accentColor }
                  : {}),
              }}
            >
              {/* Active glow overlay */}
              {isActive && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-10"
                  style={{ background: group.accentColor }}
                  aria-hidden="true"
                />
              )}

              {/* Emoji */}
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full text-2xl shadow-sm"
                style={{
                  background: isActive ? group.accentColor : group.bgColor,
                }}
                aria-hidden="true"
              >
                {group.emoji}
              </span>

              {/* Text */}
              <div>
                <p
                  className={[
                    "text-sm font-bold",
                    isDark && !isActive ? "text-zinc-100" : "text-zinc-900",
                  ].join(" ")}
                >
                  {group.title}
                </p>
                <p
                  className={[
                    "mt-0.5 text-xs",
                    isDark && !isActive ? "text-zinc-400" : "text-zinc-500",
                  ].join(" ")}
                >
                  {group.tagline}
                </p>
              </div>

              {/* Age pill */}
              <span
                className={`rounded-full border px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider ${group.pillColor}`}
              >
                {group.ages}
              </span>

              {/* Active check */}
              {isActive && (
                <span
                  className="absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                  style={{ background: group.accentColor }}
                  aria-hidden="true"
                >
                  ✓
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active mode label */}
      {active && (
        <p className="mt-4 text-center text-xs text-zinc-400">
          Page styled for{" "}
          <strong className="text-zinc-600">
            {AGE_GROUPS.find((g) => g.id === active)?.title}
          </strong>
          {" "}— tap again to reset
        </p>
      )}
    </section>
  );
}
