import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getAllEducationStages } from "@/lib/explorer/scenes";
import {
  isSupportedLocale,
  type Locale,
  translate,
} from "@/lib/i18n/translations";
import { ASSETS } from "@/lib/config/assets";
import VoicePicker from "@/app/explore/_components/voice-picker";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Koydo — Learn Anything, Any Age, Any Language",
  description:
    "Free interactive learning for ages 3 to adult. 850+ modules, 600K+ practice questions across math, science, coding, medicine, and career skills.",
  openGraph: {
    title: "Koydo — Learn Anything, Any Age, Any Language",
    description:
      "Free interactive learning from Pre-K through College — 850+ modules powered by NASA, OpenStax, and leading open datasets.",
  },
};

/* ── Subject grid data ── */
const SUBJECTS = [
  { icon: "🔢", label: "Math",        href: "/modules?subject=Mathematics",      color: "#f59e0b" },
  { icon: "⚛️", label: "Science",     href: "/modules?subject=Science",          color: "#10b981" },
  { icon: "📖", label: "Reading",     href: "/modules?subject=Reading",          color: "#f97316" },
  { icon: "💻", label: "Coding",      href: "/modules?subject=Computer Science", color: "#6366f1" },
  { icon: "⏳", label: "History",     href: "/modules?subject=History",          color: "#a855f7" },
  { icon: "🏗️", label: "Engineering", href: "/modules?subject=Engineering",      color: "#ef4444" },
  { icon: "🩺", label: "Medicine",    href: "/modules?subject=Medicine",         color: "#14b8a6" },
  { icon: "💼", label: "Business",    href: "/modules?subject=Business",         color: "#0ea5e9" },
] as const;

export default async function Home() {
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (user) redirect("/dashboard");
  } catch {
    // Supabase not configured — show landing page
  }

  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);

  const stages = getAllEducationStages();

  return (
    <div className="relative font-sans">
      {/* ════════════════════════════════════════════════════════
           SECTION 1 — HERO
           Full-viewport cinematic hero with single CTA
      ════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
        <Image
          src={ASSETS.heroHome}
          alt="A vibrant daytime landscape — families and learners on a golden path toward knowledge"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Readable overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to right, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 35%, transparent 60%)",
              "linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(255,255,255,0.55) 88%, rgba(255,255,255,0.85) 100%)",
            ].join(", "),
          }}
        />

        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col px-4 py-16 sm:py-24">
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-[580px]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-600">
                {t("home_hero_eyebrow")}
              </p>
              <h1
                className="mt-4 text-4xl font-black leading-[1.07] tracking-[-0.02em] text-zinc-900 sm:text-5xl md:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                {t("home_hero_title_prefix")}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(105deg, #059669 0%, #10b981 45%, #34d399 100%)",
                  }}
                >
                  {t("home_hero_title_highlight")}
                </span>
              </h1>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-zinc-600 sm:text-lg">
                {t("home_hero_body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/explore"
                  className="inline-flex min-h-[3.5rem] items-center rounded-full px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-[0.97]"
                  style={{
                    background:
                      "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
                  }}
                >
                  {t("home_hero_cta")}
                </Link>
                <VoicePicker />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════
           LOWER PAGE — single continuous background
      ════════════════════════════════════════════════════════ */}
      <div className="relative overflow-hidden">
        <Image
          src={ASSETS.bgBottom}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          quality={85}
        />
        <div className="absolute inset-0 bg-white/40 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10">

          {/* ── SECTION 2 — SOCIAL PROOF STATS ── */}
          <section className="landing-section border-y border-white/40 bg-white/60 backdrop-blur-sm">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-6 px-4 py-10 sm:grid-cols-4 sm:py-12">
              {[
                { value: "850+",  label: "Learning Modules",  icon: "📚" },
                { value: "600K+", label: "Practice Questions", icon: "✍️" },
                { value: "4+",    label: "Languages",          icon: "🌍" },
                { value: "100%",  label: "Free to Start",      icon: "✨" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
                  <span className="text-2xl" aria-hidden="true">{stat.icon}</span>
                  <span
                    className="text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
                    style={{ fontFamily: "var(--font-display-sans)" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 3 — AGE STAGE NAVIGATION ── */}
          <div className="bg-white/40 backdrop-blur-sm">
            <div
              className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-4"
              style={{ scrollbarWidth: "none" }}
            >
              {stages.map((stage) => (
                <Link
                  key={stage.id}
                  href={`/explore?stage=${stage.id}`}
                  className="flex flex-shrink-0 items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-50 hover:text-emerald-700"
                >
                  <span className="text-base" aria-hidden="true">{stage.badge}</span>
                  {locale === "es" ? stage.labelEs : stage.label}
                </Link>
              ))}
            </div>
          </div>

          {/* ── SECTION 4 — HOW IT WORKS ── */}
          <section className="landing-section mx-auto max-w-5xl px-4 py-16 sm:py-20">
            <h2
              className="text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-display-sans)" }}
            >
              Learning made simple
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
              Three steps from zero to unstoppable
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  step: "01",
                  icon: "🧭",
                  title: "Pick Your Path",
                  desc: "Choose your age stage and subject — from Pre-K phonics to college calculus.",
                },
                {
                  step: "02",
                  icon: "🎧",
                  title: "Learn Interactively",
                  desc: "Every lesson combines narration, interactive exercises, and instant feedback.",
                },
                {
                  step: "03",
                  icon: "📈",
                  title: "Track & Grow",
                  desc: "See what you know and what's next. Parents can monitor progress and set goals.",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="landing-card group rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-md"
                >
                  <span
                    className="block text-[11px] font-black tabular-nums tracking-widest text-emerald-400"
                    aria-hidden="true"
                  >
                    {card.step}
                  </span>
                  <span className="mt-3 block text-3xl" aria-hidden="true">{card.icon}</span>
                  <h3 className="mt-3 text-base font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{card.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 5 — EXPLORE SUBJECTS ── */}
          <section className="landing-section mx-auto max-w-5xl px-4 pb-16 sm:pb-20">
            <h2
              className="text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-display-sans)" }}
            >
              Explore Every Subject
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
              Tap a subject to start learning — interactive modules at every level
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
              {SUBJECTS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="landing-card group flex flex-col items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-md"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${s.color}14` }}
                  >
                    {s.icon}
                  </span>
                  <span className="text-sm font-bold text-zinc-800">{s.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/explore"
                className="inline-flex min-h-12 items-center rounded-full border border-zinc-200/80 bg-white/80 px-7 py-3 text-sm font-semibold text-zinc-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Browse all subjects →
              </Link>
            </div>
          </section>

          {/* ── SECTION 6 — CONTENT SOURCES ── */}
          <section className="landing-section mx-auto max-w-5xl px-4 pb-16 sm:pb-20">
            <div className="rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-md sm:p-8">
              <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-600">
                Trusted Sources
              </p>
              <h2
                className="mt-3 text-center text-xl font-black tracking-tight text-zinc-900 sm:text-2xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                Powered by world-class content
              </h2>
              <p className="mx-auto mt-2 max-w-lg text-center text-sm text-zinc-500">
                Every lesson draws from peer-reviewed, government-authoritative, and community-proven open educational resources.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-zinc-500">
                {[
                  "🚀 NASA",
                  "🏛️ Smithsonian",
                  "📚 OpenStax",
                  "🔬 NIH / PubMedQA",
                  "🎓 Exercism",
                  "🖼️ Met Museum",
                  "📐 MIT Datasets",
                  "🛡️ OSHA",
                ].map((source) => (
                  <span key={source} className="whitespace-nowrap">{source}</span>
                ))}
              </div>

              <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { value: "121K", label: "Math problems with solutions" },
                  { value: "320K", label: "Medical MCQs" },
                  { value: "30+",  label: "Programming languages" },
                  { value: "50K+", label: "Visual learning assets" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <span
                      className="block text-2xl font-black text-emerald-600"
                      style={{ fontFamily: "var(--font-display-sans)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs text-zinc-500">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 7 — TRUST & SAFETY ── */}
          <section className="landing-section mx-auto max-w-5xl px-4 pb-16 sm:pb-20">
            <p className="text-center text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-600">
              For Parents & Educators
            </p>
            <h2
              className="mt-3 text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-display-sans)" }}
            >
              Built for families. Trusted by educators.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-center text-sm text-zinc-500">
              Safe, private, and genuinely educational — with full parent visibility and control.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: "🛡️", title: "COPPA Compliant",   desc: "Children's privacy protected by design" },
                { icon: "🚫", title: "Zero Ads",          desc: "No advertising or third-party tracking" },
                { icon: "👁️", title: "Parent Dashboard",   desc: "See progress, set goals, manage profiles" },
                { icon: "🎓", title: "Educator Reviewed", desc: "Aligned to grade-level learning standards" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="landing-card flex flex-col gap-2 rounded-2xl border border-white/60 bg-white/70 px-5 py-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/90 hover:shadow-md"
                >
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION 8 — FINAL CTA ── */}
          <section className="landing-section">
            <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-20 text-center sm:py-24">
              <h2
                className="text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                Every great learner{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
                  }}
                >
                  starts with one lesson.
                </span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-zinc-600">
                Free interactive learning for ages 3 to adult — 850+ modules, every subject, every language.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/explore"
                  className="inline-flex min-h-14 items-center rounded-full px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-[0.97]"
                  style={{
                    background: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
                  }}
                >
                  Start Exploring Free →
                </Link>
                <Link
                  href="/parent/dashboard"
                  className="inline-flex min-h-14 items-center rounded-full border border-emerald-500/30 bg-emerald-50/80 px-8 py-3.5 text-sm font-semibold text-emerald-700 backdrop-blur-sm transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-100"
                >
                  Parent Dashboard →
                </Link>
              </div>
              <p className="mt-6 text-sm text-zinc-400">
                Questions?{" "}
                <a href="mailto:support@koydo.app" className="text-emerald-600 hover:underline">
                  support@koydo.app
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
