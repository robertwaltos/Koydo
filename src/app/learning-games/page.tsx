import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ScrollReveal from "@/app/explore/_components/scroll-reveal";

export const metadata: Metadata = {
  title: "Learning Games — Koydo",
  description:
    "Fun, educational mini-games for ages 3-8. Math, literacy, logic, and creativity — disguised as playtime.",
};

const HERO_FEATURES = [
  {
    emoji: "🧮",
    title: "Math Adventures",
    desc: "Counting, addition, subtraction, and number patterns through interactive puzzles.",
  },
  {
    emoji: "📖",
    title: "Literacy Land",
    desc: "Letter recognition, phonics, sight words, and early reading — all through play.",
  },
  {
    emoji: "🧩",
    title: "Logic & Puzzles",
    desc: "Pattern matching, sorting, sequencing, and spatial reasoning games.",
  },
] as const;

const SECONDARY_FEATURES = [
  { icon: "🎨", title: "Creative Play", desc: "Color mixing, shape building, and artistic challenges that spark imagination." },
  { icon: "🎮", title: "Tap & Play", desc: "Simple, intuitive controls designed for small hands and early learners." },
  { icon: "🏅", title: "Earn Rewards", desc: "Badges, XP, and streaks make every session feel like an accomplishment." },
  { icon: "🔒", title: "COPPA Safe", desc: "No ads, no tracking for children, and full parental controls." },
] as const;

export default async function LearningGamesLandingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/games");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, rgba(251,146,60,0.4) 0%, transparent 50%),
            radial-gradient(ellipse at 85% 5%, rgba(244,63,94,0.3) 0%, transparent 45%),
            radial-gradient(ellipse at 50% 90%, rgba(251,191,36,0.25) 0%, transparent 45%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="ui-glass-panel inline-flex items-center rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--foreground)" }}>
            Ages 3-8
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl" style={{ color: "var(--foreground)" }}>
            Learning disguised as{" "}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              play
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed" style={{ color: "color-mix(in srgb, var(--foreground) 70%, transparent)" }}>
            Math, literacy, logic, and creativity — wrapped in colorful mini-games that make
            young learners beg for &quot;just one more round.&quot;
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/30 hover:brightness-110"
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

        <section aria-label="Game categories" className="mb-16">
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
              Built for young learners
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
          <section className="ui-glass-panel rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(244,63,94,0.12) 100%)" }}>
            <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
              Let the learning begin
            </h2>
            <p className="mx-auto mt-2 max-w-[44ch] text-sm" style={{ color: "color-mix(in srgb, var(--foreground) 65%, transparent)" }}>
              100% free. No ads. No in-app purchases. Just pure educational fun.
            </p>
            <Link
              href="/auth/sign-up"
              className="mt-5 inline-flex min-h-11 items-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-7 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-xl hover:brightness-110"
            >
              Get Started →
            </Link>
          </section>
        </ScrollReveal>
      </div>
    </main>
  );
}
