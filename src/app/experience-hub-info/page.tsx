import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Experience Hub — Koydo",
  description:
    "Track achievements, earn XP, complete challenges, and watch your learning journey come to life.",
};

const FEATURES = [
  {
    emoji: "🏆",
    title: "Achievements & Badges",
    desc: "Earn badges for milestones — finishing modules, maintaining streaks, mastering subjects.",
    color: "251, 191, 36",
  },
  {
    emoji: "⚡",
    title: "XP & Leveling",
    desc: "Every lesson, quiz, and game earns experience points. Level up and unlock new rewards.",
    color: "168, 85, 247",
  },
  {
    emoji: "🔥",
    title: "Daily Challenges",
    desc: "Fresh challenges every day keep learners engaged and build powerful learning habits.",
    color: "251, 146, 60",
  },
  {
    emoji: "📊",
    title: "Journey Dashboard",
    desc: "A visual map of everything you've learned, earned, and accomplished across all subjects.",
    color: "34, 197, 94",
  },
] as const;

const HOW_IT_WORKS = [
  { icon: "📚", title: "Learn", desc: "Complete lessons, quizzes, and games to earn XP and progress." },
  { icon: "🎖️", title: "Achieve", desc: "Hit milestones to unlock badges and climb the leaderboard." },
  { icon: "🚀", title: "Grow", desc: "Watch your journey dashboard fill up as your knowledge expands." },
] as const;

export default async function ExperienceHubInfoPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/experience-hub");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, #fef3c7 0%, transparent 45%),
            radial-gradient(ellipse at 85% 5%,  #ede9fe 0%, transparent 42%),
            radial-gradient(ellipse at 50% 90%, #fed7aa 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-700 dark:border-amber-800/40 dark:bg-amber-900/20 dark:text-amber-300">
            Experience Hub
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Your learning{" "}
            <span className="text-amber-600 dark:text-amber-400">adventure</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            Achievements, XP, daily challenges, and a visual journey dashboard that makes
            every learner feel like the hero of their own story.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-amber-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-amber-500"
            >
              Start Learning Free →
            </Link>
            <Link
              href="/auth/sign-in"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-200 bg-white/80 px-6 py-2.5 text-sm font-semibold text-zinc-600 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:text-zinc-800 dark:border-border dark:bg-surface dark:text-foreground/80"
            >
              Sign In
            </Link>
          </div>
        </header>

        <section aria-label="Experience Hub features" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            What you&apos;ll unlock
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-surface/80"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${f.color}, 0.08) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-4xl">{f.emoji}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-foreground">{f.title}</h3>
                </div>
                <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-foreground/70">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            How it works
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HOW_IT_WORKS.map((step) => (
              <div
                key={step.title}
                className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white/60 p-4 backdrop-blur-sm dark:border-border dark:bg-surface/60"
              >
                <span className="text-2xl">{step.icon}</span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-foreground">{step.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-8 text-center dark:border-amber-800/40 dark:from-amber-900/20 dark:to-orange-900/20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-foreground">
            Start earning today
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm text-zinc-600 dark:text-foreground/70">
            Your first badge is waiting. Sign up and begin your learning adventure — free.
          </p>
          <Link
            href="/auth/sign-up"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-amber-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-amber-500"
          >
            Get Started →
          </Link>
        </section>
      </div>
    </main>
  );
}
