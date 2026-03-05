import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ASSETS } from "@/lib/config/assets";
import {
  isSupportedLocale,
  type Locale,
  translate,
} from "@/lib/i18n/translations";
import VoicePicker from "@/app/explore/_components/voice-picker";
import SubjectShowcase from "@/app/components/subject-showcase";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import LandingHeroInteractive from "@/app/components/ui/landing-hero-interactive";

export const metadata: Metadata = {
  title: "Koydo — Learn Anything, Any Age, Any Language",
  description:
    "Free interactive learning for ages 3 to adult. 800+ modules, 600K+ practice questions across math, science, coding, medicine, and career skills.",
  openGraph: {
    title: "Koydo — Learn Anything, Any Age, Any Language",
    description:
      "Free interactive learning from Pre-K through College — 800+ modules powered by NASA, OpenStax, and leading open datasets.",
  },
};

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

  return (
    <div className="relative font-sans overflow-x-hidden">
      {/* ════════════════════════════════════════════════════════
           SECTION 1 — HERO (Interactive Adaptive Hero)
      ════════════════════════════════════════════════════════ */}
      <LandingHeroInteractive t={t} />

      {/* ── Stats bar ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 py-10 sm:py-14">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { value: "800+",   label: t("home_stat_modules"),    icon: "📚" },
            { value: "3–100",  label: t("home_stat_ages"),       icon: "🎓" },
            { value: "2",      label: t("home_stat_languages"),  icon: "🌍" },
            { value: "100%",   label: t("home_stat_free"),       icon: "✨" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 rounded-[2rem] border border-white/50 bg-white/30 px-4 py-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              <span className="text-3xl mb-1" aria-hidden="true">{stat.icon}</span>
              <span
                className="mt-1 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <div className="relative border-y border-white/40 bg-white/20 py-5 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4">
          {[
            { icon: "🛡️", label: t("home_trust_coppa") },
            { icon: "📋", label: t("home_badge_ferpa") },
            { icon: "🚫", label: t("home_trust_ads") },
            { icon: "🔒", label: t("home_badge_no_tracking") },
            { icon: "🤖", label: t("home_badge_ai_safety") },
            { icon: "✨", label: t("home_stats_free") },
          ].map((badge) => (
            <span key={badge.label} className="ui-trust-badge flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-4 py-2 text-xs font-semibold text-zinc-600 shadow-sm backdrop-blur-md transition-all hover:bg-white/60">
              <span aria-hidden="true">{badge.icon}</span>
              {badge.label}
            </span>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20 mt-12">
        <h2
          className="text-center text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          Learning made simple
        </h2>
        <p className="mx-auto mt-3 max-w-md text-center text-base text-zinc-500">
          Three steps from zero to unstoppable
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
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
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-white/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="flex w-full items-center justify-between">
                  <span className="text-4xl drop-shadow-sm" aria-hidden="true">{card.icon}</span>
                  <span
                    className="shrink-0 text-xs font-black tabular-nums tracking-[0.2em] text-zinc-400 group-hover:text-emerald-500 transition-colors"
                    aria-hidden="true"
                  >
                    STEP {card.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.desc}</p>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 w-full scale-x-0 bg-gradient-to-r from-emerald-400 to-teal-400 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/explore"
            className="inline-flex min-h-12 items-center rounded-full border border-white/80 bg-white/50 px-8 py-3.5 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 hover:shadow-md"
          >
            {t("home_how_browse_cta")}
          </Link>
        </div>
      </section>

      {/* ── Popular Subjects — interactive glass cubes ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <h2
          className="text-center text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
          style={{ fontFamily: "var(--font-display-sans)" }}
        >
          {t("home_subjects_title")}
        </h2>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500">
          {t("home_subjects_subtitle")}
        </p>
        <div className="mt-10">
          <SubjectShowcase />
        </div>
      </section>

      {/* ── Bento Feature Grid ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="ui-landing-eyebrow">{t("home_bento_eyebrow")}</p>
          <h2
            className="mt-2 text-2xl font-black tracking-tight text-zinc-900 sm:text-3xl"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            {t("home_bento_title")}
          </h2>
        </div>

        {/* Bento grid — 3-col on desktop, 1–2-col mobile */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Large feature card — spans 2 cols on lg */}
          <div className="ui-bento-card group relative flex flex-col justify-between overflow-hidden lg:col-span-2">
            {/* Floating orbs */}
            <span className="ui-hero-orb-1 pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full opacity-40" aria-hidden="true" />
            <span className="ui-hero-orb-2 pointer-events-none absolute -bottom-6 left-1/3 h-28 w-28 rounded-full opacity-30" aria-hidden="true" />
            <div className="relative z-10 p-6 sm:p-8">
              <span className="mb-4 block text-4xl" aria-hidden="true">🎙️</span>
              <h3
                className="text-xl font-black tracking-tight text-zinc-900 sm:text-2xl"
                style={{ fontFamily: "var(--font-display-sans)" }}
              >
                {t("home_features_hear_title")}
              </h3>
              <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-zinc-500">
                {t("home_features_hear_desc")}
              </p>
              <Link
                href="/explore"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:gap-2.5 transition-all duration-200"
              >
                {t("home_bento_try_cta")}
              </Link>
            </div>
          </div>

          {/* Small card */}
          <div className="ui-bento-card group flex flex-col gap-3 p-6">
            <span className="text-3xl" aria-hidden="true">🎨</span>
            <h3 className="text-base font-bold text-zinc-900">{t("home_features_do_title")}</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{t("home_features_do_desc")}</p>
          </div>

          {/* Small card */}
          <div className="ui-bento-card group flex flex-col gap-3 p-6">
            <span className="text-3xl" aria-hidden="true">🎓</span>
            <h3 className="text-base font-bold text-zinc-900">{t("home_features_span_title")}</h3>
            <p className="text-sm leading-relaxed text-zinc-500">{t("home_features_span_desc")}</p>
          </div>

          {/* Stat accent card */}
          <div
            className="ui-bento-card group flex flex-col items-center justify-center gap-2 p-6 text-center"
            style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)" }}
          >
            <span className="text-5xl font-black tracking-tight text-emerald-700" style={{ fontFamily: "var(--font-display-sans)" }}>
              800+
            </span>
            <p className="text-sm font-semibold text-emerald-800">{t("home_bento_modules_label")}</p>
            <p className="text-xs text-emerald-700/70">{t("home_bento_modules_note")}</p>
          </div>

          {/* Offline/device card */}
          <div className="ui-bento-card group flex flex-col gap-3 p-6">
            <span className="text-3xl" aria-hidden="true">📱</span>
            <h3 className="text-base font-bold text-zinc-900">{t("home_bento_device_title")}</h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              {t("home_bento_device_desc")}
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Families Choose Koydo ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20 mt-12">
        <div className="mb-10 text-center">
          <p className="ui-landing-eyebrow tracking-[0.2em] font-bold text-emerald-600 mb-2 uppercase text-xs">{t("home_trust_eyebrow")}</p>
          <h2
            className="mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            {t("home_why_koydo_title")}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-base leading-relaxed text-zinc-500">
            {t("home_why_koydo_subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🧠",
              title: t("home_why_adaptive_title"),
              desc: t("home_why_adaptive_desc"),
            },
            {
              icon: "🌍",
              title: t("home_why_multilingual_title"),
              desc: t("home_why_multilingual_desc"),
            },
            {
              icon: "📊",
              title: t("home_why_progress_title"),
              desc: t("home_why_progress_desc"),
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/30 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white hover:bg-white/60 hover:shadow-[0_20px_48px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/50 shadow-inner backdrop-blur-md">
                <span className="text-3xl drop-shadow-sm" aria-hidden="true">{card.icon}</span>
              </div>
              <h3
                className="text-xl font-bold text-zinc-900"
              >
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="landing-section relative mx-auto max-w-7xl px-4 pb-20 sm:pb-24 mt-12">
        <div className="mb-10 text-center">
          <p className="ui-landing-eyebrow tracking-[0.2em] font-bold text-emerald-600 mb-2 uppercase text-xs">{t("home_testimonials_eyebrow")}</p>
          <h2
            className="mt-2 text-3xl font-black tracking-tight text-zinc-900 sm:text-4xl"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            {t("home_testimonials_title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              quote: t("home_testimonial_1_quote"),
              name: "Maria G.",
              role: t("home_testimonial_1_role"),
              emoji: "👩‍👧",
              accent: "emerald",
            },
            {
              quote: t("home_testimonial_2_quote"),
              name: "James K.",
              role: t("home_testimonial_2_role"),
              emoji: "👨‍🏫",
              accent: "sky",
            },
            {
              quote: t("home_testimonial_3_quote"),
              name: "Priya S.",
              role: t("home_testimonial_3_role"),
              emoji: "🎓",
              accent: "violet",
            },
          ].map((testimonial) => (
            <div key={testimonial.name} className="ui-testimonial-card relative flex flex-col gap-5 rounded-[2rem] border border-white/60 bg-white/40 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.03)] backdrop-blur-xl transition-all duration-300 hover:bg-white/60 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              {/* Stars */}
              <div className="flex gap-1 text-amber-400 text-sm" aria-label="5 stars">
                {"★★★★★".split("").map((s, i) => <span key={i} className="drop-shadow-sm">{s}</span>)}
              </div>
              {/* Quote */}
              <p className="flex-1 text-base leading-relaxed text-zinc-700 font-medium">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              {/* Reviewer */}
              <div className="flex items-center gap-4 border-t border-zinc-200/50 pt-5 mt-2">
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/80 text-2xl shadow-sm border border-white"
                  aria-hidden="true"
                >
                  {testimonial.emoji}
                </span>
                <div>
                  <p className="text-sm font-black text-zinc-900">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mt-0.5">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
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
            {t("home_banner_eyebrow")}
          </p>
          <h2
            className="mt-4 text-3xl font-black leading-tight tracking-tight text-zinc-900 sm:text-4xl md:text-5xl"
            style={{ fontFamily: "var(--font-display-sans)" }}
          >
            {t("home_banner_title_prefix")}{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
              }}
            >
              {t("home_banner_title_highlight")}
            </span>
          </h2>
          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-zinc-600">
            {t("home_banner_body")}
          </p>
          <Link
            href="/explore"
            className="mt-8 inline-flex min-h-14 items-center rounded-full px-10 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-xl hover:shadow-emerald-500/35 active:scale-95"
            style={{
              background: "linear-gradient(105deg, #059669 0%, #10b981 55%, #34d399 100%)",
            }}
          >
            {t("home_banner_cta")}
          </Link>
        </div>
      </section>

    </div>
  );
}

