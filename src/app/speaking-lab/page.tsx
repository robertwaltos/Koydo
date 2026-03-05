import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";

export const metadata: Metadata = {
  title: "Speaking Lab — Koydo",
  description:
    "Practice pronunciation, build conversation skills, and master languages with AI-powered voice exercises for every age.",
};

const HERO_FEATURES = [
  {
    emoji: "🎙️",
    title: "Pronunciation Practice",
    desc: "Record your voice and get instant AI feedback on clarity, tone, and accuracy.",
  },
  {
    emoji: "💬",
    title: "Conversation Drills",
    desc: "Practice real-world dialogues with an AI partner — ordering food, asking directions, and more.",
  },
  {
    emoji: "🌍",
    title: "Multi-Language Support",
    desc: "Learn and practice in English, Spanish, Chinese, Polish, and more languages coming soon.",
  },
] as const;

const SECONDARY_FEATURES = [
  { icon: "📊", title: "Progress Tracking", desc: "See your fluency improve over time with detailed speaking scores and streak tracking." },
  { icon: "🎧", title: "Native Audio", desc: "Hear native-quality prompts read aloud by one of 6 AI narrators." },
  { icon: "🎤", title: "Side-by-Side Compare", desc: "Record your response and compare it with the target pronunciation." },
  { icon: "✅", title: "Instant Feedback", desc: "Get real-time feedback on pronunciation, rhythm, and vocabulary." },
] as const;

export default async function SpeakingLabLandingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/language/speaking-lab");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      {/* Background gradient orbs */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 15% 10%, rgba(129,140,248,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 10%, rgba(167,139,250,0.35) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 85%, rgba(99,102,241,0.25) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Hero */}
        <header className="mb-10 text-center">
          <span className="ui-glass-panel inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--foreground)" }}>
            AI-Powered Speaking Lab
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Find your{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              voice
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}>
            Pronunciation drills, conversation practice, and real-time AI feedback — all wrapped in a
            fun, pressure-free environment for every age and skill level.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110"
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

        {/* Hero features — above fold, 3 cols */}
        <section aria-label="Speaking Lab features" className="mb-16">
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

        {/* Secondary features — scroll reveal */}
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

        {/* Bottom CTA */}
        <ScrollReveal delay={100}>
          <section className="ui-glass-panel rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(139,92,246,0.12) 100%)" }}>
            <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
              Ready to speak with confidence?
            </h2>
            <p className="mx-auto mt-2 max-w-[44ch] text-sm" style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
              Join thousands of learners already improving their speaking skills — completely free.
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:shadow-xl hover:brightness-110"
            >
              Get Started →
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
