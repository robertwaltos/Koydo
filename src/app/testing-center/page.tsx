import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";

export const metadata: Metadata = {
  title: "Testing Center — Koydo",
  description:
    "Practice exams, timed assignments, and diagnostic assessments across every subject and grade level.",
};

const HERO_FEATURES = [
  {
    emoji: "📝",
    title: "Practice Exams",
    desc: "Full-length practice tests that mirror real school and standardized exam formats.",
  },
  {
    emoji: "⏱️",
    title: "Timed Assignments",
    desc: "Build speed and confidence with timed quizzes that adapt to your skill level.",
  },
  {
    emoji: "🔍",
    title: "Diagnostic Assessments",
    desc: "Identify knowledge gaps with AI-powered diagnostics that map your strengths and weaknesses.",
  },
] as const;

const SECONDARY_FEATURES = [
  { icon: "📊", title: "Detailed Reports", desc: "Score breakdowns, trend charts, and improvement tips for every assessment." },
  { icon: "🎯", title: "Targeted Practice", desc: "Focus on weak areas identified by the diagnostic engine." },
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
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, rgba(14,165,233,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 5%, rgba(59,130,246,0.35) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 85%, rgba(14,165,233,0.2) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="ui-glass-panel inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--foreground)" }}>
            Testing Center
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Test smarter, not{" "}
            <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              harder
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}>
            Practice exams, timed quizzes, and AI-powered diagnostics that tell you exactly
            what to study next — across every subject and grade level.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/30 hover:brightness-110"
            >
              Start Learning Free →
            </Link>
            <Link
              href="/auth/sign-in"
              className="inline-flex min-h-11 items-center rounded-full border border-white/50 bg-white/30 px-6 py-2.5 text-sm font-semibold backdrop-blur-xl transition-colors hover:bg-white/50 dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/20"
              style={{ color: "var(--foreground)" }}
            >
              Sign In
            </Link>
          </div>
        </header>

        <section aria-label="Test types" className="mb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="ui-bento-card flex flex-col gap-3 p-6">
                <span className="text-4xl">{f.emoji}</span>
                <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ScrollReveal>
          <section className="mb-16">
            <h2 className="mb-6 text-xl font-bold" style={{ color: "var(--foreground)" }}>
              Why students love it
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SECONDARY_FEATURES.map((f) => (
                <div key={f.title} className="ui-bento-card flex flex-col gap-2 p-4">
                  <span className="text-2xl">{f.icon}</span>
                  <h3 className="text-sm font-bold" style={{ color: "var(--foreground)" }}>{f.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 55%, transparent)" }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <section className="ui-glass-panel rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(14,165,233,0.12) 0%, rgba(59,130,246,0.12) 100%)" }}>
            <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
              Know exactly where you stand
            </h2>
            <p className="mx-auto mt-2 max-w-[44ch] text-sm" style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
              Take your first diagnostic assessment and get a personalized study plan — free.
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-200 hover:shadow-xl hover:brightness-110"
            >
              Get Started →
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
