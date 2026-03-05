import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Exam Prep — Koydo",
  description:
    "Structured certification tracks, focused review sessions, and AI-driven study plans to ace any exam.",
};

const PREP_TRACKS = [
  {
    emoji: "🎯",
    title: "Certification Tracks",
    desc: "Follow curated paths for SAT, ACT, AP exams, and professional certifications.",
    color: "99, 102, 241",
    levels: ["High School", "College", "Professional"],
  },
  {
    emoji: "📋",
    title: "Structured Review",
    desc: "Organized study sessions that break complex topics into manageable daily goals.",
    color: "34, 197, 94",
    levels: ["Middle School", "High School", "College"],
  },
  {
    emoji: "🧠",
    title: "AI Study Plans",
    desc: "Personalized study schedules generated from your diagnostic results and target exam date.",
    color: "168, 85, 247",
    levels: ["All Levels"],
  },
  {
    emoji: "📝",
    title: "Practice Questions",
    desc: "Thousands of exam-style questions with detailed explanations for every answer.",
    color: "251, 146, 60",
    levels: ["High School", "College"],
  },
  {
    emoji: "⏰",
    title: "Timed Simulations",
    desc: "Full-length timed mock exams that replicate the real testing experience.",
    color: "14, 165, 233",
    levels: ["High School", "College", "Professional"],
  },
  {
    emoji: "📊",
    title: "Score Predictions",
    desc: "AI-powered score predictions based on your practice performance and progress trends.",
    color: "236, 72, 153",
    levels: ["High School", "College"],
  },
] as const;

const FEATURES = [
  { icon: "🗓️", title: "Daily Goals", desc: "Bite-sized study tasks that keep you on track without burnout." },
  { icon: "💡", title: "Explanations", desc: "Every wrong answer comes with a clear, detailed explanation." },
  { icon: "📈", title: "Trend Analysis", desc: "See which topics are improving and which need more work." },
  { icon: "🏅", title: "Readiness Score", desc: "Know exactly when you're ready to take the real exam." },
] as const;

export default async function ExamPrepInfoPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/exam-prep");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, #c7d2fe 0%, transparent 45%),
            radial-gradient(ellipse at 85% 5%,  #d1fae5 0%, transparent 42%),
            radial-gradient(ellipse at 50% 90%, #e9d5ff 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-violet-700 dark:border-violet-800/40 dark:bg-violet-900/20 dark:text-violet-300">
            Exam Prep
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Prepare with{" "}
            <span className="text-violet-600 dark:text-violet-400">confidence</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            Certification tracks, AI-generated study plans, and thousands of practice questions —
            everything you need to walk into exam day ready.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-violet-500"
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

        <section aria-label="Exam prep tracks" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Prep tracks
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PREP_TRACKS.map((track) => (
              <div
                key={track.title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-surface/80"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${track.color}, 0.08) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-4xl">{track.emoji}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-foreground">{track.title}</h3>
                </div>
                <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-foreground/70">
                  {track.desc}
                </p>
                <div className="relative mt-auto flex flex-wrap gap-1.5">
                  {track.levels.map((level) => (
                    <span
                      key={level}
                      className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: `rgba(${track.color}, 0.12)`,
                        color: `rgb(${track.color})`,
                      }}
                    >
                      {level}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Study smarter
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

        <section className="rounded-2xl border border-violet-200 bg-gradient-to-r from-violet-50 to-indigo-50 p-8 text-center dark:border-violet-800/40 dark:from-violet-900/20 dark:to-indigo-900/20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-foreground">
            Your exam prep starts here
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm text-zinc-600 dark:text-foreground/70">
            Get a personalized study plan and start practicing — completely free.
          </p>
          <Link
            href="/auth/sign-up"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-violet-500"
          >
            Get Started →
          </Link>
        </section>
      </div>
    </main>
  );
}
