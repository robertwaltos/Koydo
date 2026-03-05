import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Speaking Lab — Koydo",
  description:
    "Practice pronunciation, build conversation skills, and master languages with AI-powered voice exercises for every age.",
};

const FEATURES = [
  {
    emoji: "🎙️",
    title: "Pronunciation Practice",
    desc: "Record your voice and get instant AI feedback on clarity, tone, and accuracy.",
    color: "99, 102, 241",
  },
  {
    emoji: "💬",
    title: "Conversation Drills",
    desc: "Practice real-world dialogues with an AI partner — ordering food, asking directions, and more.",
    color: "168, 85, 247",
  },
  {
    emoji: "🌍",
    title: "Multi-Language Support",
    desc: "Learn and practice in English, Spanish, Chinese, Polish, and more languages coming soon.",
    color: "14, 165, 233",
  },
  {
    emoji: "📊",
    title: "Progress Tracking",
    desc: "See your fluency improve over time with detailed speaking scores and streak tracking.",
    color: "34, 197, 94",
  },
] as const;

const HOW_IT_WORKS = [
  { icon: "🎧", title: "Listen", desc: "Hear a native-quality prompt read aloud by one of 6 AI narrators." },
  { icon: "🎤", title: "Speak", desc: "Record your response and compare it side-by-side with the target." },
  { icon: "✅", title: "Improve", desc: "Get instant feedback on pronunciation, rhythm, and vocabulary." },
] as const;

export default async function SpeakingLabLandingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/language/speaking-lab");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 15% 10%, #c7d2fe 0%, transparent 45%),
            radial-gradient(ellipse at 80% 10%, #e9d5ff 0%, transparent 42%),
            radial-gradient(ellipse at 50% 85%, #bfdbfe 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero */}
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-indigo-700 dark:border-indigo-800/40 dark:bg-indigo-900/20 dark:text-indigo-300">
            AI-Powered Speaking Lab
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Find your{" "}
            <span className="text-indigo-600 dark:text-indigo-400">voice</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            Pronunciation drills, conversation practice, and real-time AI feedback — all wrapped in a
            fun, pressure-free environment for every age and skill level.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-indigo-500"
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

        {/* Feature grid */}
        <section aria-label="Speaking Lab features" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            What&apos;s inside
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

        {/* How it works */}
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

        {/* Bottom CTA */}
        <section className="rounded-2xl border border-indigo-200 bg-gradient-to-r from-indigo-50 to-violet-50 p-8 text-center dark:border-indigo-800/40 dark:from-indigo-900/20 dark:to-violet-900/20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-foreground">
            Ready to speak with confidence?
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm text-zinc-600 dark:text-foreground/70">
            Join thousands of learners already improving their speaking skills — completely free.
          </p>
          <Link
            href="/auth/sign-up"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-indigo-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-indigo-500"
          >
            Get Started →
          </Link>
        </section>
      </div>
    </main>
  );
}
