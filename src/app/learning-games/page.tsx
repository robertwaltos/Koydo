import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Learning Games — Koydo",
  description:
    "Fun, educational mini-games for ages 3-8. Math, literacy, logic, and creativity — disguised as playtime.",
};

const GAME_CATEGORIES = [
  {
    emoji: "🧮",
    title: "Math Adventures",
    desc: "Counting, addition, subtraction, and number patterns through interactive puzzles.",
    color: "251, 146, 60",
    ages: ["Ages 3-5", "Ages 5-8"],
  },
  {
    emoji: "📖",
    title: "Literacy Land",
    desc: "Letter recognition, phonics, sight words, and early reading — all through play.",
    color: "99, 102, 241",
    ages: ["Ages 3-5", "Ages 5-8"],
  },
  {
    emoji: "🧩",
    title: "Logic & Puzzles",
    desc: "Pattern matching, sorting, sequencing, and spatial reasoning games.",
    color: "34, 197, 94",
    ages: ["Ages 3-5", "Ages 5-8"],
  },
  {
    emoji: "🎨",
    title: "Creative Play",
    desc: "Color mixing, shape building, and artistic challenges that spark imagination.",
    color: "236, 72, 153",
    ages: ["Ages 3-5"],
  },
  {
    emoji: "🌎",
    title: "World Explorer",
    desc: "Geography, animals, seasons, and cultural discovery through interactive stories.",
    color: "14, 165, 233",
    ages: ["Ages 5-8"],
  },
  {
    emoji: "🏆",
    title: "Daily Challenges",
    desc: "A fresh game every day to keep learners coming back and building streaks.",
    color: "168, 85, 247",
    ages: ["All Ages"],
  },
] as const;

const FEATURES = [
  { icon: "🎮", title: "Tap & Play", desc: "Simple, intuitive controls designed for small hands and early learners." },
  { icon: "🏅", title: "Earn Rewards", desc: "Badges, XP, and streaks make every session feel like an accomplishment." },
  { icon: "👶", title: "Age-Adaptive", desc: "Difficulty adjusts automatically based on learner age and performance." },
  { icon: "🔒", title: "COPPA Safe", desc: "No ads, no tracking for children, and full parental controls." },
] as const;

export default async function LearningGamesLandingPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (user) redirect("/games");

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, #fed7aa 0%, transparent 45%),
            radial-gradient(ellipse at 85% 5%,  #fce7f3 0%, transparent 42%),
            radial-gradient(ellipse at 50% 90%, #dbeafe 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-orange-700 dark:border-orange-800/40 dark:bg-orange-900/20 dark:text-orange-300">
            Ages 3-8
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Learning disguised as{" "}
            <span className="text-orange-600 dark:text-orange-400">play</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            Math, literacy, logic, and creativity — wrapped in colorful mini-games that make
            young learners beg for &quot;just one more round.&quot;
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="inline-flex min-h-11 items-center rounded-full bg-orange-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-500"
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

        <section aria-label="Game categories" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Game categories
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {GAME_CATEGORIES.map((cat) => (
              <div
                key={cat.title}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-surface/80"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${cat.color}, 0.08) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-4xl">{cat.emoji}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-foreground">{cat.title}</h3>
                </div>
                <p className="relative text-sm leading-relaxed text-zinc-600 dark:text-foreground/70">
                  {cat.desc}
                </p>
                <div className="relative mt-auto flex flex-wrap gap-1.5">
                  {cat.ages.map((age) => (
                    <span
                      key={age}
                      className="rounded-full px-2 py-0.5 text-[11px] font-semibold"
                      style={{
                        background: `rgba(${cat.color}, 0.12)`,
                        color: `rgb(${cat.color})`,
                      }}
                    >
                      {age}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Built for young learners
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

        <section className="rounded-2xl border border-orange-200 bg-gradient-to-r from-orange-50 to-pink-50 p-8 text-center dark:border-orange-800/40 dark:from-orange-900/20 dark:to-pink-900/20">
          <h2 className="text-2xl font-black text-zinc-900 dark:text-foreground">
            Let the learning begin
          </h2>
          <p className="mx-auto mt-2 max-w-[44ch] text-sm text-zinc-600 dark:text-foreground/70">
            100% free. No ads. No in-app purchases. Just pure educational fun.
          </p>
          <Link
            href="/auth/sign-up"
            className="mt-5 inline-flex min-h-11 items-center rounded-full bg-orange-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-orange-500"
          >
            Get Started →
          </Link>
        </section>
      </div>
    </main>
  );
}
