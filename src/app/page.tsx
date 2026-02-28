import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

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
import { getAllEducationStages } from "@/lib/explorer/scenes";
import {
  isSupportedLocale,
  type Locale,
  translate,
} from "@/lib/i18n/translations";
import SpeakButton from "@/app/explore/_components/speak-button";

type QuickLink = {
  href: string;
  label: string;
  icon: string;
};

export default async function Home() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);
  const quickLinks: QuickLink[] = [
    { href: "/auth/sign-in", icon: "🔐", label: t("home_quick_sign_in") },
    { href: "/who-is-learning", icon: "🚀", label: t("home_quick_choose_learner") },
    {
      href: "/parent/dashboard",
      icon: "👨‍👩‍👧",
      label: t("home_quick_parent_command_center"),
    },
    { href: "/modules", icon: "📚", label: t("home_quick_module_catalog") },
  ];
  const stages = getAllEducationStages();
  const badges = stages.map((s) => s.badge);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background font-sans text-foreground">
      {/* ── Hero section with gradient mesh ── */}
      <header className="relative overflow-hidden px-4 pb-10 pt-12 sm:pb-14 sm:pt-20">
        {/* Ambient gradient mesh — light mode */}
        <div
          className="absolute inset-0 opacity-40 dark:hidden"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, #a7f3d0 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, #c4b5fd 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, #fde68a 0%, transparent 50%),
              radial-gradient(ellipse at 10% 90%, #bfdbfe 0%, transparent 40%)
            `,
          }}
          aria-hidden="true"
        />

        {/* Ambient gradient mesh — dark mode */}
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              radial-gradient(ellipse at 18% 45%, rgba(45, 212, 191, 0.24) 0%, transparent 56%),
              radial-gradient(ellipse at 78% 20%, rgba(129, 140, 248, 0.22) 0%, transparent 56%),
              radial-gradient(ellipse at 52% 82%, rgba(250, 204, 21, 0.17) 0%, transparent 46%),
              radial-gradient(ellipse at 8% 88%, rgba(56, 189, 248, 0.14) 0%, transparent 40%)
            `,
          }}
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70 dark:to-background/90"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-background"
          aria-hidden="true"
        />

        {/* Floating world badge orbit */}
        <div className="relative mx-auto mb-6 flex items-center justify-center gap-5" aria-hidden="true">
          {badges.map((b, i) => (
            <span
              key={i}
              className="explore-float text-3xl sm:text-4xl"
              style={{ animationDelay: `${i * 350}ms` }}
            >
              {b}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="ui-type-eyebrow text-emerald-600 dark:text-emerald-300">
            {t("home_hero_eyebrow")}
          </p>
          <h1 className="ui-type-hero mt-3 text-zinc-900 dark:text-zinc-100">
            {t("home_hero_title_prefix")}{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              {t("home_hero_title_highlight")}
            </span>
          </h1>
          <p className="ui-type-body-lg ui-reading-measure mx-auto mt-4 text-zinc-600 dark:text-zinc-300">
            {t("home_hero_body")}
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/explore"
              className="ui-focus-ring inline-flex min-h-14 items-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-lg font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 dark:shadow-emerald-900/45"
            >
              {t("home_hero_cta")}
            </Link>
            <SpeakButton text={t("home_hero_speak_text")} label={t("common_hear_it")} />
          </div>
        </div>
      </header>

      {/* ── Education stages grid ── */}
      <section
        aria-label={t("home_levels_aria")}
        className="relative mx-auto w-full max-w-7xl px-4 pb-10 sm:pb-14"
      >
        <div
          className="pointer-events-none absolute inset-x-8 top-14 h-44 rounded-[3rem] bg-gradient-to-r from-emerald-500/14 via-sky-500/12 to-violet-500/14 blur-3xl dark:from-emerald-300/10 dark:via-sky-300/8 dark:to-violet-300/12"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="ui-type-display-lg mb-6 text-center text-zinc-900 dark:text-zinc-100">
            {t("home_levels_title")}
          </h2>

          <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <Link
                key={stage.id}
                href={`/explore?stage=${stage.id}`}
                aria-label={t("home_stage_aria", {
                  label: locale === "es" ? stage.labelEs : stage.label,
                  gradeRange: stage.gradeRange,
                  ageRange: stage.ageRange,
                })}
                className="explore-scene-enter ui-focus-ring group block h-full"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <article
                  className="explore-card-elevated relative flex h-full min-h-[260px] flex-col items-center justify-center overflow-hidden rounded-3xl border-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] sm:p-6"
                  style={{
                    background: stage.gradient,
                    borderColor: stage.borderColor,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-3xl bg-transparent dark:bg-slate-950/28"
                    aria-hidden="true"
                  />
                  {/* Glow ring on hover */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      boxShadow: `inset 0 0 60px ${stage.glowColor}25, 0 0 40px ${stage.glowColor}18`,
                    }}
                    aria-hidden="true"
                  />

                  {/* Badge */}
                  <span
                    className="explore-float relative text-5xl sm:text-6xl"
                    aria-hidden="true"
                    style={{ animationDelay: `${index * 120 + 200}ms` }}
                  >
                    {stage.badge}
                  </span>

                  {/* Title + description */}
                  <div className="relative z-10 mt-4 flex w-full flex-col items-center text-center">
                    <h3 className="text-xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-2xl">
                      {locale === "es" ? stage.labelEs : stage.label}
                    </h3>
                    <p className="mt-1.5 max-w-[22ch] text-sm text-zinc-700 dark:text-zinc-300">
                      {locale === "es" ? stage.descriptionEs : stage.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-bold text-zinc-900 dark:text-zinc-100"
                        style={{
                          border: `1.5px solid ${stage.glowColor}`,
                          background: `${stage.glowColor}22`,
                        }}
                      >
                        {stage.gradeRange}
                      </span>
                      <span className="rounded-full border border-zinc-200 bg-white/80 px-2.5 py-0.5 text-xs font-semibold text-zinc-700 backdrop-blur-sm dark:border-white/20 dark:bg-slate-800/60 dark:text-zinc-300">
                        {stage.ageRange}
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature highlights strip ── */}
      <section className="relative overflow-hidden px-4 py-10 sm:py-14">
        <div
          className="absolute inset-0 opacity-20 dark:hidden"
          style={{
            background: `
              radial-gradient(ellipse at 70% 30%, #c4b5fd 0%, transparent 50%),
              radial-gradient(ellipse at 30% 70%, #a7f3d0 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              radial-gradient(ellipse at 72% 30%, rgba(129, 140, 248, 0.22) 0%, transparent 52%),
              radial-gradient(ellipse at 32% 72%, rgba(45, 212, 191, 0.18) 0%, transparent 54%)
            `,
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: "🎙️",
              title: t("home_features_hear_title"),
              description: t("home_features_hear_desc"),
            },
            {
              icon: "🎨",
              title: t("home_features_do_title"),
              description: t("home_features_do_desc"),
            },
            {
              icon: "🎓",
              title: t("home_features_span_title"),
              description: t("home_features_span_desc"),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="explore-card-elevated rounded-2xl border border-white/60 bg-white/80 p-6 text-center backdrop-blur-sm dark:border-white/10 dark:bg-slate-900/60"
            >
              <span className="text-4xl" aria-hidden="true">{feature.icon}</span>
              <h3 className="ui-type-heading-lg mt-3 text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="ui-type-body-sm mt-2 text-zinc-600 dark:text-zinc-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Parent & team links — secondary, collapsed ── */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <details className="explore-card-elevated rounded-2xl border border-zinc-200 bg-white/90 p-5 dark:border-white/10 dark:bg-slate-900/60">
          <summary className="ui-type-heading-lg cursor-pointer text-zinc-800 dark:text-zinc-100">
            {t("home_parent_links_summary")}
          </summary>
          <p className="ui-type-body-sm mt-2 text-zinc-600 dark:text-zinc-300">
            {t("home_parent_links_desc")}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="ui-focus-ring inline-flex min-h-12 items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-white/12 dark:bg-slate-900/70 dark:text-zinc-100 dark:hover:bg-slate-800/70"
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </section>
    </div>
  );
}
