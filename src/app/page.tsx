import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";
import { getAllEducationStages } from "@/lib/explorer/scenes";
import {
  isSupportedLocale,
  type Locale,
  translate,
} from "@/lib/i18n/translations";
import SpeakButton from "@/app/explore/_components/speak-button";
import StarField from "@/app/components/star-field";
import SubjectShowcase from "@/app/components/subject-showcase";

export const metadata: Metadata = {
  title: "Koydo — Learn Anything, Any Age, Any Language",
  description:
    "Free interactive learning for ages 3 to adult. Explore 200+ modules across math, science, coding, and career skills in English and Spanish.",
  openGraph: {
    title: "Koydo — Learn Anything, Any Age, Any Language",
    description:
      "Free interactive learning from Pre-K through College. Start exploring today.",
  },
};

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);

  const stages = getAllEducationStages();

  return (
    <div
      className="relative font-sans text-white"
      style={{
        backgroundImage: "url('/bg-space.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#040810",
      }}
    >
      {/* ── Animated star particles (fixed behind everything) ── */}
      <StarField />

      {/* ── Full-width cinematic hero ── */}
      <section className="relative min-h-[calc(100svh-72px)] overflow-hidden">
        {/* Hero image spans full width */}
        <Image
          src="/hero-family.jpg"
          alt="A family walking together on a glowing golden path of learning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Cinematic overlay: dark left for text legibility, deep bottom edge */}
        <div
          className="absolute inset-0"
          style={{
            background: [
              "linear-gradient(to right, rgba(4,8,16,0.92) 0%, rgba(4,8,16,0.72) 38%, rgba(4,8,16,0.22) 65%, rgba(4,8,16,0.05) 100%)",
              "linear-gradient(to bottom, rgba(4,8,16,0.45) 0%, transparent 28%, rgba(4,8,16,0.55) 82%, rgba(4,8,16,0.90) 100%)",
            ].join(", "),
          }}
        />

        {/* Text + compass + pills inside the hero */}
        <div className="relative mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl flex-col px-4 py-16 sm:py-24">
          {/* Headline + CTA + compass logo */}
          <div className="flex flex-1 flex-col justify-center lg:flex-row lg:items-center lg:gap-16">
            {/* Left column: copy */}
            <div className="max-w-[580px]">
              <p className="text-[11px] font-extrabold uppercase tracking-[0.26em] text-amber-400">
                {t("home_hero_eyebrow")}
              </p>
              <h1
                className="mt-4 text-5xl font-black leading-[1.07] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                {t("home_hero_title_prefix")}{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(105deg, #fcd34d 0%, #f59e0b 45%, #d97706 100%)",
                    backgroundSize: "200% auto",
                  }}
                >
                  {t("home_hero_title_highlight")}
                </span>
              </h1>
              <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-slate-200 sm:text-lg">
                {t("home_hero_body")}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/explore"
                  className="inline-flex min-h-[3.5rem] items-center rounded-full px-8 py-3.5 text-base font-bold text-stone-950 shadow-lg shadow-amber-500/30 transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-amber-500/40 active:scale-95"
                  style={{
                    background:
                      "linear-gradient(105deg, #fcd34d 0%, #f59e0b 55%, #d97706 100%)",
                  }}
                >
                  {t("home_hero_cta")}
                </Link>
                <SpeakButton
                  text={t("home_hero_speak_text")}
                  label={t("common_hear_it")}
                />
              </div>
            </div>

            {/* Right column: compass logo with glow */}
            <div className="relative mt-12 hidden lg:flex lg:mt-0 items-center justify-center">
              <div
                className="absolute inset-0 -m-8 rounded-full opacity-40 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(56,189,248,0.4) 0%, rgba(14,165,233,0.15) 50%, transparent 70%)",
                }}
                aria-hidden="true"
              />
              <Image
                src="/logo-koydo.jpg"
                alt="Koydo compass star logo"
                width={280}
                height={280}
                className="relative rounded-3xl shadow-2xl shadow-cyan-500/20"
                priority
              />
            </div>
          </div>

          {/* Education stage pills: pinned to the bottom of the hero */}
          <div className="pb-6">
            <div className="flex flex-wrap gap-2">
              {stages.map((stage) => (
                <Link
                  key={stage.id}
                  href={`/explore?stage=${stage.id}`}
                  className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm transition-colors hover:border-amber-400/50 hover:bg-black/65"
                >
                  <span aria-hidden="true">{stage.badge}</span>
                  {locale === "es" ? stage.labelEs : stage.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Education stage navigation strip ── */}
      <div className="relative border-y border-white/8 bg-black/30 backdrop-blur-sm">
        <div
          className="mx-auto flex max-w-7xl items-center overflow-x-auto px-4 py-3"
          style={{ scrollbarWidth: "none" }}
        >
          {stages.map((stage) => (
            <Link
              key={stage.id}
              href={`/explore?stage=${stage.id}`}
              className="flex-shrink-0 px-4 py-1.5 text-sm font-semibold text-slate-400 transition-colors duration-150 hover:text-amber-400"
            >
              {locale === "es" ? stage.labelEs : stage.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ── Popular Subjects — interactive glass cubes ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2
          className="text-center text-2xl font-black tracking-tight text-white sm:text-3xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          Popular Subjects
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-slate-400">
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
              glow: "56, 189, 248",
            },
            {
              icon: "🎨",
              title: t("home_features_do_title"),
              desc: t("home_features_do_desc"),
              glow: "251, 146, 60",
            },
            {
              icon: "🎓",
              title: t("home_features_span_title"),
              desc: t("home_features_span_desc"),
              glow: "192, 132, 252",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-black/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-black/40"
            >
              {/* Subtle colored glow on hover */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25"
                style={{
                  backgroundColor: `rgba(${feature.glow}, 0.4)`,
                }}
                aria-hidden="true"
              />
              <span className="relative text-4xl" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="relative mt-3 text-base font-bold text-white">
                {feature.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Parent & quick access links ── */}
      <section className="landing-section mx-auto max-w-7xl px-4 pb-20">
        <div className="rounded-2xl border border-white/[0.08] bg-black/30 p-5 backdrop-blur-sm sm:p-6">
          <p className="text-sm font-bold text-white">
            {t("home_parent_links_summary")}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            {t("home_parent_links_desc")}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              {
                href: "/auth/sign-in",
                icon: "🔐",
                label: t("home_quick_sign_in"),
              },
              {
                href: "/who-is-learning",
                icon: "🚀",
                label: t("home_quick_choose_learner"),
              },
              {
                href: "/parent/dashboard",
                icon: "👨‍👩‍👧",
                label: t("home_quick_parent_command_center"),
              },
              {
                href: "/modules",
                icon: "📚",
                label: t("home_quick_module_catalog"),
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center gap-2.5 rounded-xl border border-white/10 bg-black/25 px-4 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition-colors hover:border-amber-400/30 hover:text-amber-300"
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
