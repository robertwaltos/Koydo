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
import LandingCompanion from "@/app/components/landing-companion";
import SubjectShowcase from "@/app/components/subject-showcase";
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
  { icon: "🔢", i18nKey: "home_subjects_math",        href: "/modules?subject=Mathematics",      color: "#f59e0b" },
  { icon: "⚛️", i18nKey: "home_subjects_science",     href: "/modules?subject=Science",          color: "#10b981" },
  { icon: "📖", i18nKey: "home_subjects_reading",     href: "/modules?subject=Reading",          color: "#f97316" },
  { icon: "💻", i18nKey: "home_subjects_coding",      href: "/modules?subject=Computer Science", color: "#6366f1" },
  { icon: "⏳", i18nKey: "home_subjects_history",     href: "/modules?subject=History",          color: "#a855f7" },
  { icon: "🏗️", i18nKey: "home_subjects_engineering", href: "/modules?subject=Engineering",      color: "#ef4444" },
  { icon: "🩺", i18nKey: "home_subjects_medicine",    href: "/modules?subject=Medicine",         color: "#14b8a6" },
  { icon: "💼", i18nKey: "home_subjects_business",    href: "/modules?subject=Business",         color: "#0ea5e9" },
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
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
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

            {/* Right column: companion avatar */}
            <div className="hidden lg:flex lg:items-center lg:justify-center">
              <LandingCompanion />
            </div>
          </div>
        </div>
      </section>

      {/* ── Education stage navigation strip ── */}
      <div className="relative border-y border-zinc-200/60 bg-white/70 backdrop-blur-sm">
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

      {/* ── Stats bar ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "200+",   label: "Learning Modules",   icon: "📚" },
            { value: "3–100",  label: "All Ages Welcome",   icon: "🎓" },
            { value: "2",      label: "Languages",          icon: "🌍" },
            { value: "100%",   label: "Free to Start",      icon: "✨" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-2xl border border-zinc-200/60 bg-white/60 px-4 py-6 text-center shadow-sm backdrop-blur-sm"
            >
              <span className="text-3xl" aria-hidden="true">{stat.icon}</span>
              <span
                className="mt-1 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <h2
          className="text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          Learning made simple
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
          Three steps from zero to unstoppable
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              step: "01",
              icon: "🧭",
              title: "Pick Your Path",
              desc: "Choose your age stage and subject — from Pre-K phonics to college calculus. No placement test needed.",
              accent: "emerald",
            },
            {
              step: "02",
              icon: "🎧",
              title: "Learn Interactively",
              desc: "Watch, listen, and do. Every lesson combines video narration, interactive exercises, and instant feedback.",
              accent: "sky",
            },
            {
              step: "03",
              icon: "📈",
              title: "Track Your Progress",
              desc: "See exactly what you know and what's next. Parents can monitor progress and set goals.",
              accent: "violet",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:bg-white/90 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 text-[11px] font-black tabular-nums tracking-widest text-zinc-600"
                  aria-hidden="true"
                >
                  {card.step}
                </span>
                <div>
                  <span className="text-3xl" aria-hidden="true">{card.icon}</span>
                  <h3 className="mt-2 text-base font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{card.desc}</p>
                </div>
              </div>
            </div>
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

      {/* ── Popular Subjects — interactive glass cubes ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2
          className="text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          Popular Subjects
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
          Tap a subject to start exploring — interactive modules across every
          learning area
        </p>
        <div className="mt-10">
          <SubjectShowcase />
        </div>
      </section>

      {/* ── Feature highlights ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            {
              icon: "🎙️",
              title: t("home_features_hear_title"),
              desc: t("home_features_hear_desc"),
            },
            {
              icon: "🎨",
              title: t("home_features_do_title"),
              desc: t("home_features_do_desc"),
            },
            {
              icon: "🎓",
              title: t("home_features_span_title"),
              desc: t("home_features_span_desc"),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-zinc-300 hover:bg-white/90 hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="mt-3 text-base font-bold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── For Parents — trust section ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <div className="overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/70 shadow-sm backdrop-blur-sm">
          {/* Header strip */}
          <div className="border-b border-zinc-100 px-6 py-8 text-center sm:px-10 sm:py-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
              For Parents & Educators
            </p>
            <h2
              className="mt-3 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
              style={{ fontFamily: "var(--font-display-sans)" }}
            >
              Built for families. Trusted by{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
                }}
              >
                educators.
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-zinc-500">
              Koydo is designed from the ground up to be safe, private, and genuinely
              educational — with full parent visibility and control.
            </p>
          </div>

          {/* Trust grid */}
          <div className="grid grid-cols-2 gap-px bg-zinc-100/50 sm:grid-cols-4">
            {[
              {
                icon: "🛡️",
                title: "COPPA Compliant",
                desc: "No data sold. Children's privacy protected by design.",
              },
              {
                icon: "🚫",
                title: "Zero Ads",
                desc: "No advertising, no tracking pixels, no third-party marketing.",
              },
              {
                icon: "👁️",
                title: "Parent Dashboard",
                desc: "See exactly what your child is learning and how they're progressing.",
              },
              {
                icon: "🎓",
                title: "Educator Reviewed",
                desc: "Every module is aligned to grade-level learning standards.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex flex-col gap-2 bg-white/80 px-5 py-6 transition-colors duration-300 hover:bg-emerald-50/60"
              >
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <h3 className="text-sm font-bold text-zinc-900">{item.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Feature list */}
          <div className="grid grid-cols-1 gap-4 border-t border-zinc-100 p-6 sm:grid-cols-3 sm:p-8">
            {[
              {
                icon: "📊",
                text: "Track lessons completed, streaks, and quiz scores per learner",
              },
              {
                icon: "🔒",
                text: "Set content restrictions by age stage and subject area",
              },
              {
                icon: "👨‍👩‍👧‍👦",
                text: "Manage multiple child profiles under one parent account",
              },
              {
                icon: "📱",
                text: "Works on any device — phone, tablet, or desktop",
              },
              {
                icon: "🌍",
                text: "English and Spanish interfaces for bilingual families",
              },
              {
                icon: "💰",
                text: "Core curriculum is completely free — forever",
              },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="mt-0.5 shrink-0 text-lg" aria-hidden="true">{item.icon}</span>
                <p className="text-sm leading-relaxed text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-zinc-100 px-6 py-5 sm:px-8">
            <p className="text-sm text-zinc-500">
              Questions? Email{" "}
              <a href="mailto:support@koydo.app" className="text-emerald-700 hover:underline">
                support@koydo.app
              </a>
            </p>
            <Link
              href="/parent/dashboard"
              className="inline-flex min-h-10 items-center rounded-full border border-emerald-500/30 bg-emerald-50 px-6 py-2 text-sm font-semibold text-emerald-700 transition-all duration-200 hover:border-emerald-400/50 hover:bg-emerald-100 hover:text-emerald-800"
            >
              Open Parent Dashboard →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom banner ── */}
      <section className="relative min-h-105 overflow-hidden">
        <Image
          src={ASSETS.bgBottom}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          aria-hidden="true"
          quality={85}
        />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-emerald-700">
            Your journey starts here
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
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
            Free interactive learning for ages 3 to adult — 200+ modules, every subject, every language.
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex min-h-14 items-center rounded-full px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-95"
            style={{
              background: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
            }}
          >
            Start Exploring Free →
          </Link>
        </div>
      </section>

    </div>
  );
}

