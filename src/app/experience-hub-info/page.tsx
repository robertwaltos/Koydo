import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

export const metadata: Metadata = {
  title: "Experience Hub — Koydo",
  description:
    "Track achievements, earn XP, complete challenges, and watch your learning journey come to life.",
};

const HERO_FEATURES = [
  {
    emoji: "🏆",
    title: "Achievements & Badges",
    desc: "Earn badges for milestones — finishing modules, maintaining streaks, mastering subjects.",
  },
  {
    emoji: "⚡",
    title: "XP & Leveling",
    desc: "Every lesson, quiz, and game earns experience points. Level up and unlock new rewards.",
  },
  {
    emoji: "🔥",
    title: "Daily Challenges",
    desc: "Fresh challenges every day keep learners engaged and build powerful learning habits.",
  },
] as const;

const SECONDARY_FEATURES = [
  { icon: "📊", title: "Journey Dashboard", desc: "A visual map of everything you've learned, earned, and accomplished." },
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
      <AdaptiveBackground ageGroup="young-adventurer" />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-white/60 bg-white/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700 backdrop-blur-xl shadow-sm">
            Experience Hub
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl drop-shadow-md">
            Your learning{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              adventure
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg font-medium text-zinc-700 leading-relaxed drop-shadow-sm">
            Achievements, XP, daily challenges, and a visual journey dashboard that makes
            every learner feel like the hero of their own story.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-[3.5rem] items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 text-base font-black text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:shadow-xl hover:brightness-110 active:scale-[0.98] uppercase tracking-widest"
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

        <section aria-label="Experience Hub features" className="mb-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
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
              How it works
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
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black text-zinc-900 tracking-tight sm:text-4xl">
                Start earning today
              </h2>
              <p className="mx-auto mt-4 max-w-[44ch] text-base font-medium text-zinc-600 leading-relaxed">
                Your first badge is waiting. Sign up and begin your learning adventure — free.
              </p>
              <Link
                href="/auth/sign-up"
                className="mt-8 inline-flex min-h-[3.5rem] items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-3 text-base font-black text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 uppercase tracking-widest"
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
