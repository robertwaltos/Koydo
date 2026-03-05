import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";

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
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, rgba(251,191,36,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 5%, rgba(251,146,60,0.35) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 85%, rgba(245,158,11,0.2) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="ui-glass-panel inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--foreground)" }}>
            Experience Hub
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Your learning{" "}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              adventure
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}>
            Achievements, XP, daily challenges, and a visual journey dashboard that makes
            every learner feel like the hero of their own story.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:brightness-110"
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

        <section aria-label="Experience Hub features" className="mb-16">
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
              How it works
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
          <section className="ui-glass-panel rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.12) 0%, rgba(251,146,60,0.12) 100%)" }}>
            <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
              Start earning today
            </h2>
            <p className="mx-auto mt-2 max-w-[44ch] text-sm" style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
              Your first badge is waiting. Sign up and begin your learning adventure — free.
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-amber-500/25 transition-all duration-200 hover:shadow-xl hover:brightness-110"
            >
              Get Started →
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
