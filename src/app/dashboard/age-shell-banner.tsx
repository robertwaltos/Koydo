"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type AgeGroup = "tiny-explorer" | "young-adventurer" | "teen-mode" | "adult-pro";

const SHELL_CONFIG: Record<
  AgeGroup,
  {
    emoji: string;
    greeting: string;
    tagline: string;
    cta: string;
    ctaHref: string;
    bg: string;
    textColor: string;
    taglineColor: string;
    ctaClass: string;
    fontFamily?: string;
  }
> = {
  "tiny-explorer": {
    emoji: "🌟",
    greeting: "Hello, Explorer!",
    tagline: "What will we learn today?",
    cta: "Start playing →",
    ctaHref: "/explore?stage=pre-k",
    bg: "linear-gradient(135deg, #fff4ec 0%, #ffe8d6 100%)",
    textColor: "text-orange-900",
    taglineColor: "text-orange-700",
    ctaClass:
      "rounded-full bg-orange-400 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-orange-500",
    fontFamily: "var(--font-display-round, var(--font-display-sans))",
  },
  "young-adventurer": {
    emoji: "🚀",
    greeting: "Ready for your next quest?",
    tagline: "New modules unlocked — let's explore",
    cta: "Jump in →",
    ctaHref: "/explore?stage=elementary",
    bg: "linear-gradient(135deg, #f4f0ff 0%, #ede5ff 100%)",
    textColor: "text-violet-900",
    taglineColor: "text-violet-700",
    ctaClass:
      "rounded-full bg-violet-600 px-5 py-2 text-sm font-bold text-white shadow-sm hover:bg-violet-700",
    fontFamily: "var(--font-display-sans)",
  },
  "teen-mode": {
    emoji: "⚡",
    greeting: "Back to it.",
    tagline: "Pick up where you left off — or go deeper.",
    cta: "Resume →",
    ctaHref: "/explore?stage=high-school",
    bg: "linear-gradient(135deg, #0f0f14 0%, #1a1a2e 100%)",
    textColor: "text-zinc-50",
    taglineColor: "text-zinc-400",
    ctaClass:
      "rounded-lg border border-indigo-500/60 bg-indigo-600/20 px-5 py-2 text-sm font-semibold text-indigo-300 hover:bg-indigo-600/30",
    fontFamily: "var(--font-display-sans)",
  },
  "adult-pro": {
    emoji: "💼",
    greeting: "Welcome back.",
    tagline: "Your learning plan is ready.",
    cta: "Continue learning →",
    ctaHref: "/explore?stage=college",
    bg: "linear-gradient(135deg, #f8fafc 0%, #f0f4ff 100%)",
    textColor: "text-zinc-900",
    taglineColor: "text-zinc-500",
    ctaClass:
      "rounded-lg border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-100",
    fontFamily: "var(--font-display-sans)",
  },
};

export default function DashboardAgeShellBanner() {
  const [ageGroup, setAgeGroup] = useState<AgeGroup | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem("koydo.age-group") as AgeGroup | null;
      const valid: AgeGroup[] = [
        "tiny-explorer",
        "young-adventurer",
        "teen-mode",
        "adult-pro",
      ];
      if (stored && valid.includes(stored)) {
        setAgeGroup(stored);
        document.documentElement.setAttribute("data-age-group", stored);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  // Don't render anything until mounted (avoid hydration mismatch)
  if (!mounted || !ageGroup) return null;

  const config = SHELL_CONFIG[ageGroup];

  return (
    <div
      className="mb-6 flex flex-wrap items-center justify-between gap-4 overflow-hidden rounded-2xl px-6 py-5"
      style={{ background: config.bg }}
    >
      <div className="flex items-center gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/40 text-2xl shadow-sm"
          aria-hidden="true"
        >
          {config.emoji}
        </span>
        <div>
          <p
            className={`text-xl font-black tracking-tight ${config.textColor}`}
            style={{ fontFamily: config.fontFamily }}
          >
            {config.greeting}
          </p>
          <p className={`text-sm ${config.taglineColor}`}>{config.tagline}</p>
        </div>
      </div>

      <Link href={config.ctaHref} className={config.ctaClass}>
        {config.cta}
      </Link>
    </div>
  );
}
