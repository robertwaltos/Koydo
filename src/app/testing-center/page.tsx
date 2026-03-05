import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Testing Center — Koydo",
  description:
    "Practice exams, timed assignments, and diagnostic assessments across every subject and grade level.",
};

const TEST_TYPES = [
  {
    emoji: "📝",
    title: "Practice Exams",
    desc: "Full-length practice tests that mirror real school and standardized exam formats.",
    color: "14, 165, 233",
  },
  {
    emoji: "⏱️",
    title: "Timed Assignments",
    desc: "Build speed and confidence with timed quizzes that adapt to your skill level.",
    color: "168, 85, 247",
  },
  {
    emoji: "🔍",
    title: "Diagnostic Assessments",
    desc: "Identify knowledge gaps with AI-powered diagnostics that map your strengths and weaknesses.",
    color: "34, 197, 94",
  },
  {
    emoji: "📊",
    title: "Detailed Reports",
    desc: "See exactly where you stand with score breakdowns, trend charts, and improvement tips.",
    color: "251, 146, 60",
  },
] as const;

const FEATURES = [
  { icon: "🎯", title: "Targeted Practice", desc: "Focus on weak areas identified by the diagnostic engine." },
  { icon: "📈", title: "Score History", desc: "Track improvement over time with visual progress charts." },
  { icon: "🧠", title: "AI Feedback", desc: "Get explanations for wrong answers, not just correct ones." },
  { icon: "🏫", title: "All Subjects", desc: "Math, Science, English, History, and more — every grade level." },
] as const;

export default async function TestingCenterLandingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/testing");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, #bfdbfe 0%, transparent 45%),
            radial-gradient(ellipse at 85% 5%,  #e9d5ff 0%, transparent 42%),
            radial-gradient(ellipse at 50% 90%, #d1fae5 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-sky-700 dark:border-sky-800/40 dark:bg-sky-900/20 dark:text-sky-300">
            Testing Center
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Test smarter, not{" "}
            <span className="text-sky-600 dark:text-sky-400">harder</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            Practice exams, timed quizzes, and AI-powered diagnostics that tell you exactly
            what to study next — across every subject and grade level.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-sky-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-sky-500"
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

        <section aria-label="Test types" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Assessment types
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {TEST_TYPES.map((t) => (
              <div
                key={t.title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-surface/80"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${t.color}, 0.08) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-4xl">{t.emoji}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-foreground">{t.title}</h3>
                </div>
                <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-foreground/70">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Why students love it
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white/60 p-4 backdrop-blur-sm dark:border-border dark:bg-surface/60"
              >
                <span className="text-2xl">{f.icon}</span>
                <h3 className="text-sm font-bold text-zinc-900 dark:text-foreground">{f.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500 dark:text-foreground/60">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 to-blue-50 p-8 text-center dark:border-sky-800/40 dark:from-sky-900/20 dark:to-blue-900/20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-foreground">
            Know exactly where you stand
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm text-zinc-600 dark:text-foreground/70">
            Take your first diagnostic assessment and get a personalized study plan — free.
          </p>
          <Link
            href="/auth/sign-up"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-sky-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-sky-500"
          >
            Get Started →
          </Link>
        </section>
      </div>
    </main>
  );
}
