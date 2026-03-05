import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

export const metadata: Metadata = {
  title: "Exam Prep — Koydo",
  description:
    "Structured certification tracks, focused review sessions, and AI-driven study plans to ace any exam.",
};

const HERO_FEATURES = [
  {
    emoji: "🎯",
    title: "Certification Tracks",
    desc: "Follow curated paths for SAT, ACT, AP exams, and professional certifications.",
  },
  {
    emoji: "🧠",
    title: "AI Study Plans",
    desc: "Personalized study schedules generated from your diagnostic results and target exam date.",
  },
  {
    emoji: "⏰",
    title: "Timed Simulations",
    desc: "Full-length timed mock exams that replicate the real testing experience.",
  },
] as const;

const SECONDARY_FEATURES = [
  { icon: "📋", title: "Structured Review", desc: "Organized study sessions that break complex topics into manageable daily goals." },
  { icon: "📝", title: "Practice Questions", desc: "Thousands of exam-style questions with detailed explanations for every answer." },
  { icon: "📊", title: "Score Predictions", desc: "AI-powered score predictions based on your practice performance and trends." },
  { icon: "🏅", title: "Readiness Score", desc: "Know exactly when you're ready to take the real exam." },
] as const;

export default async function ExamPrepInfoPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/exam-prep");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <AdaptiveBackground ageGroup="teen-mode" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-indigo-700 backdrop-blur-xl shadow-sm">
            Exam Prep
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl drop-shadow-md">
            Prepare with{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              confidence
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg font-medium text-zinc-700 leading-relaxed drop-shadow-sm">
            Certification tracks, AI-generated study plans, and thousands of practice questions —
            everything you need to walk into exam day ready.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-[3.5rem] items-center rounded-full bg-indigo-600 px-8 py-3 text-base font-black text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-xl hover:bg-indigo-500 active:scale-[0.98] uppercase tracking-widest"
            >
              Start Learning Free →
            </Link>
            <Link
              href="/auth/sign-in"
              className="inline-flex min-h-[3.5rem] items-center rounded-full border-2 border-white/80 bg-white/50 px-8 py-3 text-base font-bold text-zinc-700 backdrop-blur-xl transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-sm"
            >
              Sign In
            </Link>
          </div>
        </header>

        <section aria-label="Exam prep tracks" className="mb-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {HERO_FEATURES.map((f) => (
              <div key={f.title} className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]">
                <span className="text-5xl drop-shadow-sm" aria-hidden="true">{f.emoji}</span>
                <h3 className="mt-4 text-xl font-black text-zinc-900">{f.title}</h3>
                <p className="mt-3 text-sm font-medium leading-relaxed text-zinc-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <ScrollReveal>
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-black text-zinc-900 tracking-tight text-center sm:text-left">
              Study smarter
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {SECONDARY_FEATURES.map((f) => (
                <div key={f.title} className="rounded-[1.5rem] border border-white/60 bg-white/30 p-6 backdrop-blur-lg shadow-sm transition-all hover:bg-white/50">
                  <span className="text-3xl drop-shadow-sm" aria-hidden="true">{f.icon}</span>
                  <h3 className="mt-3 text-sm font-black text-zinc-900 leading-tight">{f.title}</h3>
                  <p className="mt-2 text-xs font-medium leading-relaxed text-zinc-500">{f.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <section className="rounded-[2.5rem] border border-white/60 bg-white/40 backdrop-blur-2xl p-10 sm:p-12 text-center shadow-[0_16px_48px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-indigo-500/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight sm:text-4xl">
                Your exam prep starts here
              </h2>
              <p className="mx-auto mt-4 max-w-[44ch] text-base font-medium text-zinc-600 leading-relaxed">
                Get a personalized study plan and start practicing — completely free.
              </p>
              <Link
                href="/auth/sign-up"
                className="mt-8 inline-flex min-h-[3.5rem] items-center rounded-full bg-indigo-600 px-10 py-3 text-base font-black text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-105 hover:bg-indigo-500 active:scale-95 uppercase tracking-widest"
              >
                Get Started →
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
