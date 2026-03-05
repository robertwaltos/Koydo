import type { Metadata } from "next";
import Link from "next/link";
import AppleVisionLab from "./apple-vision-lab";
import ComingSoonBanner from "@/app/components/coming-soon-banner";
import { isLaunchFeaturePending } from "@/lib/platform/launch-readiness";
import { resolveVoyagerAccessForServerRequest } from "@/lib/experience/voyager-access";
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

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

export default async function ScienceLabPage() {
  const voyagerAccess = await resolveVoyagerAccessForServerRequest();
  const immersiveSciencePending = isLaunchFeaturePending("science-lab-immersive");
  const immersiveScienceBlocked = immersiveSciencePending || !voyagerAccess.fullAccess;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      <AdaptiveBackground ageGroup="young-adventurer" />

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-10 text-center">
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-emerald-700 backdrop-blur-xl shadow-sm">
            Interactive Science Lab
          </span>
          <h1 className="mt-6 text-4xl font-black tracking-tight text-zinc-900 sm:text-5xl lg:text-7xl drop-shadow-md">
            Science made{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              unforgettable
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-[52ch] text-lg font-medium text-zinc-700 leading-relaxed drop-shadow-sm">
            From a toddler&apos;s first look at a caterpillar to college-level quantum mechanics —
            every Koydo science module is hands-on, visual, and built to spark curiosity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/modules?subject=Science"
              className="inline-flex min-h-[3.5rem] items-center rounded-full bg-emerald-600 px-8 py-3 text-base font-black text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-xl hover:bg-emerald-500 active:scale-[0.98] uppercase tracking-widest"
            >
              Browse Science Modules →
            </Link>
            <Link
              href="/explore"
              className="inline-flex min-h-[3.5rem] items-center rounded-full border-2 border-white/80 bg-white/50 px-8 py-3 text-base font-bold text-zinc-700 backdrop-blur-xl transition-all hover:bg-white hover:scale-105 active:scale-95 shadow-sm"
            >
              Find my level
            </Link>
          </div>
        </header>

        {/* Science tracks grid */}
        <section aria-label="Science subject tracks" className="mb-16">
          <h2 className="mb-8 text-2xl font-black text-zinc-900 tracking-tight text-center sm:text-left">
            Explore by subject
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SCIENCE_TRACKS.map((track) => (
              <Link
                key={track.title}
                href={track.href}
                className="group relative flex flex-col gap-4 overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(ellipse at 0% 0%, rgba(${track.color}, 0.12) 0%, transparent 60%)`,
                  }}
                  aria-hidden="true"
                />
                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/50 shadow-inner backdrop-blur-md">
                    <span className="text-4xl drop-shadow-sm">{track.emoji}</span>
                  </div>
                  <h3 className="text-xl font-black text-zinc-900 leading-tight">
                    {track.title}
                  </h3>
                </div>
                <p className="relative text-sm font-medium leading-relaxed text-zinc-600">
                  {track.desc}
                </p>
                <div className="relative mt-auto flex flex-wrap gap-2 pt-2">
                  {track.levels.map((level) => (
                    <span
                      key={level}
                      className="rounded-full border border-white/60 bg-white/50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm"
                      style={{
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
        <section className="mb-16">
          <h2 className="mb-8 text-2xl font-black text-zinc-900 tracking-tight text-center sm:text-left">
            How Science Lab works
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="flex flex-col gap-3 rounded-[1.5rem] border border-white/60 bg-white/30 p-6 backdrop-blur-lg shadow-sm transition-all hover:bg-white/50"
              >
                <span className="text-3xl drop-shadow-sm" aria-hidden="true">{f.icon}</span>
                <h3 className="text-sm font-black text-zinc-900 leading-tight">{f.title}</h3>
                <p className="text-xs font-medium leading-relaxed text-zinc-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Immersive XR is launch-gated */}
        <section className="mb-12">
          {immersiveScienceBlocked ? (
            <ComingSoonBanner
              title="New Experience"
              description={immersiveSciencePending
                ? "Immersive Science is temporarily unavailable while launch checks finish."
                : "Immersive Science is currently open to Beta Tester, Admin, Support, Teacher, School, and Partner classes."}
              primaryHref="/modules?subject=Science"
              primaryLabel="Use science modules now"
              secondaryHref="/support"
              secondaryLabel="Request beta access"
            />
          ) : (
            <>
              <div className="mb-6 flex items-center gap-3">
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight">
                  Immersive Science
                </h2>
                <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-violet-700 shadow-sm">
                  XR Mode
                </span>
              </div>
              <p className="mb-8 max-w-prose text-base font-medium text-zinc-600 leading-relaxed">
                Explore immersive AR science experiences for Apple Vision Pro and compatible devices.
              </p>
              <div className="rounded-[3rem] border border-white/60 overflow-hidden shadow-2xl">
                <AppleVisionLab />
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
