import type { Metadata } from "next";
import Link from "next/link";
import AppleVisionLab from "./apple-vision-lab";

export const metadata: Metadata = {
  title: "Science Lab — Koydo",
  description:
    "Explore interactive science modules across biology, chemistry, physics, astronomy, and more. From Pre-K curiosity to college-level theory.",
};

const SCIENCE_TRACKS = [
  {
    emoji: "🔬",
    title: "Biology",
    desc: "From cells to ecosystems — discover how life works at every scale.",
    href: "/modules?subject=Science&q=biology",
    color: "52, 211, 153",
    levels: ["Middle School", "High School", "College"],
  },
  {
    emoji: "⚗️",
    title: "Chemistry",
    desc: "Atoms, molecules, reactions — the building blocks of everything.",
    href: "/modules?subject=Science&q=chemistry",
    color: "251, 191, 36",
    levels: ["Elementary", "Middle School", "High School", "College"],
  },
  {
    emoji: "⚡",
    title: "Physics",
    desc: "Motion, energy, waves, and the laws that govern the universe.",
    href: "/modules?subject=Science&q=physics",
    color: "56, 189, 248",
    levels: ["Middle School", "High School", "College"],
  },
  {
    emoji: "🌌",
    title: "Astronomy",
    desc: "Planets, stars, black holes, and the scale of the cosmos.",
    href: "/modules?subject=Science&q=astronomy",
    color: "192, 132, 252",
    levels: ["Elementary", "Middle School", "High School"],
  },
  {
    emoji: "🌍",
    title: "Earth Science",
    desc: "Geology, weather, climate, and the planet we call home.",
    href: "/modules?subject=Science&q=general+science",
    color: "74, 222, 128",
    levels: ["Pre-K", "Elementary", "Middle School"],
  },
  {
    emoji: "🧠",
    title: "General Science",
    desc: "A broad introduction to scientific thinking and discovery.",
    href: "/modules?subject=Science",
    color: "251, 146, 60",
    levels: ["Pre-K", "Elementary", "Middle School"],
  },
] as const;

const FEATURES = [
  {
    icon: "🎬",
    title: "Video Narration",
    desc: "Every concept explained with animated walkthroughs and clear narration.",
  },
  {
    icon: "🧪",
    title: "Virtual Experiments",
    desc: "Interactive simulations let learners test hypotheses without a physical lab.",
  },
  {
    icon: "📝",
    title: "Quizzes & Flashcards",
    desc: "Spaced repetition and instant feedback lock in what was learned.",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    desc: "Parents and teachers can see exactly where each learner stands.",
  },
] as const;

export default function ScienceLabPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(ellipse at 10% 15%, #a7f3d0 0%, transparent 45%),
            radial-gradient(ellipse at 85% 5%,  #bfdbfe 0%, transparent 42%),
            radial-gradient(ellipse at 50% 90%, #d8b4fe 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-700 dark:border-emerald-800/40 dark:bg-emerald-900/20 dark:text-emerald-300">
            Interactive Science Lab
          </span>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-5xl">
            Science made{" "}
            <span className="text-emerald-600 dark:text-emerald-400">unforgettable</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-600 dark:text-foreground/70">
            From a toddler&apos;s first look at a caterpillar to college-level quantum mechanics —
            every Koydo science module is hands-on, visual, and built to spark curiosity.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/modules?subject=Science"
              className="inline-flex min-h-11 items-center rounded-full bg-emerald-600 px-7 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-emerald-500"
            >
              Browse Science Modules →
            </Link>
            <Link
              href="/explore"
              className="inline-flex min-h-11 items-center rounded-full border border-zinc-200 bg-white/80 px-6 py-2.5 text-sm font-semibold text-zinc-600 backdrop-blur-sm transition-colors hover:border-zinc-300 hover:text-zinc-800 dark:border-border dark:bg-surface dark:text-foreground/80"
            >
              Find my level
            </Link>
          </div>
        </header>

        {/* Science tracks grid */}
        <section aria-label="Science subject tracks" className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            Explore by subject
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SCIENCE_TRACKS.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-zinc-200 bg-white/80 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-border dark:bg-surface/80"
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${track.color}, 0.08) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-3">
                  <span className="text-4xl">{track.emoji}</span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-foreground">
                    {track.title}
                  </h3>
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
              </Link>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="mb-6 text-xl font-bold text-zinc-900 dark:text-foreground">
            How Science Lab works
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

        {/* Coming soon: XR */}
        <section className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-foreground">
              Immersive Science — Coming Soon
            </h2>
            <span className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-[11px] font-bold text-violet-700 dark:border-violet-800/50 dark:bg-violet-900/20 dark:text-violet-300">
              XR Preview
            </span>
          </div>
          <p className="mb-5 max-w-prose text-sm text-zinc-600 dark:text-foreground/70">
            We&apos;re building immersive AR science experiences for Apple Vision Pro and compatible
            devices. Check if your device is ready below.
          </p>
          <AppleVisionLab />
        </section>
      </div>
    </main>
  );
}
