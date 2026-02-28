import type { Metadata } from "next";
import Link from "next/link";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Module Catalog",
  description:
    "Browse 200+ learning modules across math, science, language arts, coding, and career skills. Free and premium content for all ages.",
};
import ModuleCoverImage from "@/app/components/module-cover-image";
import { getBestExplorerTopicForModule } from "@/lib/explorer/topics";
import {
  isSupportedLocale,
  translate,
  type Locale,
} from "@/lib/i18n/translations";
import { getAllLearningModules } from "@/lib/modules";
import { toExploreModulePath, toModulePath } from "@/lib/routing/paths";
import ModulesPreferencesPanel from "./modules-preferences-panel";

type SubjectVisual = {
  icon: string;
  halo: string;
  chipClassName: string;
  buttonClassName: string;
  borderClassName: string;
};

function getSubjectVisual(subject: string): SubjectVisual {
  const key = subject.toLowerCase();
  if (key.includes("math")) {
    return {
      icon: "➗",
      halo: "linear-gradient(135deg, rgba(56, 189, 248, 0.35), rgba(59, 130, 246, 0.05))",
      chipClassName: "border-sky-200 bg-sky-50 text-sky-800",
      buttonClassName:
        "border-sky-300 bg-sky-50 text-sky-900 hover:bg-sky-100",
      borderClassName: "border-sky-200",
    };
  }
  if (key.includes("science")) {
    return {
      icon: "🔬",
      halo: "linear-gradient(135deg, rgba(16, 185, 129, 0.32), rgba(34, 197, 94, 0.06))",
      chipClassName: "border-emerald-200 bg-emerald-50 text-emerald-800",
      buttonClassName:
        "border-emerald-300 bg-emerald-50 text-emerald-900 hover:bg-emerald-100",
      borderClassName: "border-emerald-200",
    };
  }
  if (key.includes("read") || key.includes("language")) {
    return {
      icon: "📖",
      halo: "linear-gradient(135deg, rgba(251, 191, 36, 0.35), rgba(245, 158, 11, 0.06))",
      chipClassName: "border-amber-200 bg-amber-50 text-amber-800",
      buttonClassName:
        "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100",
      borderClassName: "border-amber-200",
    };
  }
  if (key.includes("coding")) {
    return {
      icon: "💻",
      halo: "linear-gradient(135deg, rgba(129, 140, 248, 0.35), rgba(99, 102, 241, 0.06))",
      chipClassName: "border-indigo-200 bg-indigo-50 text-indigo-800",
      buttonClassName:
        "border-indigo-300 bg-indigo-50 text-indigo-900 hover:bg-indigo-100",
      borderClassName: "border-indigo-200",
    };
  }
  return {
    icon: "🧭",
    halo: "linear-gradient(135deg, rgba(161, 161, 170, 0.28), rgba(113, 113, 122, 0.06))",
    chipClassName: "border-zinc-200 bg-zinc-50 text-zinc-800",
    buttonClassName: "border-zinc-300 bg-zinc-50 text-zinc-900 hover:bg-zinc-100",
    borderClassName: "border-zinc-200",
  };
}

function toSubjectSlug(input: string) {
  const slug = input.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return slug.replace(/^-+|-+$/g, "") || "subject";
}

function truncateText(input: string, maxLength = 150) {
  if (input.length <= maxLength) return input;
  return `${input.slice(0, maxLength - 1).trimEnd()}…`;
}

function formatAgeRange(
  minAge: number | undefined,
  maxAge: number | undefined,
  t: (key: string, vars?: Record<string, string | number>) => string,
) {
  if (typeof minAge === "number" && typeof maxAge === "number") {
    return t("modules_page_age_range_both", { min: minAge, max: maxAge });
  }
  if (typeof minAge === "number") {
    return t("modules_page_age_range_min", { min: minAge });
  }
  if (typeof maxAge === "number") {
    return t("modules_page_age_range_max", { max: maxAge });
  }
  return null;
}

export default async function ModulesPage() {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);

  const learningModules = getAllLearningModules()
    .slice()
    .sort(
      (left, right) =>
        left.subject.localeCompare(right.subject) ||
        left.title.localeCompare(right.title),
    );
  const modulePreferenceEntries = learningModules.map((moduleEntry) => ({
    id: moduleEntry.id,
    title: moduleEntry.title,
    subject: moduleEntry.subject,
    minAge: moduleEntry.minAge,
    maxAge: moduleEntry.maxAge,
    topicId: getBestExplorerTopicForModule(moduleEntry)?.id ?? null,
  }));
  const totalLessons = learningModules.reduce(
    (count, moduleEntry) => count + moduleEntry.lessons.length,
    0,
  );
  const modulesBySubject = new Map<string, typeof learningModules>();
  for (const moduleEntry of learningModules) {
    const group = modulesBySubject.get(moduleEntry.subject) ?? [];
    group.push(moduleEntry);
    modulesBySubject.set(moduleEntry.subject, group);
  }
  const subjectRows = Array.from(modulesBySubject.entries()).sort((left, right) =>
    left[0].localeCompare(right[0]),
  );

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          background: `
            radial-gradient(ellipse at 15% 20%, #a7f3d0 0%, transparent 45%),
            radial-gradient(ellipse at 85% 10%, #bfdbfe 0%, transparent 42%),
            radial-gradient(ellipse at 20% 85%, #fde68a 0%, transparent 42%)
          `,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="overflow-hidden rounded-[32px] border border-zinc-200/80 bg-white/90 p-6 shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)] backdrop-blur-sm sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
              {t("modules_page_badge_visual_catalog")}
            </span>
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-zinc-600">
              {subjectRows.length === 1
                ? t("modules_page_subjects_count_one", { count: subjectRows.length })
                : t("modules_page_subjects_count_other", { count: subjectRows.length })}
            </span>
          </div>

          <h1 className="ui-type-display-xl mt-4 text-zinc-900">
            {t("modules_page_title")}
          </h1>
          <p className="ui-type-body-lg ui-reading-measure mt-2 text-zinc-600">
            {t("modules_page_description")}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Link
              href="/explore"
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 transition-colors hover:bg-emerald-100"
            >
              {t("modules_page_open_visual_explorer")}
            </Link>
            <Link
              href="/dashboard"
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              {t("modules_page_open_dashboard")}
            </Link>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <p className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3 text-sm font-semibold text-zinc-700">
              <span className="font-extrabold text-zinc-900">
                {t("modules_page_stats_modules", { count: learningModules.length })}
              </span>
            </p>
            <p className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3 text-sm font-semibold text-zinc-700">
              <span className="font-extrabold text-zinc-900">
                {t("modules_page_stats_lessons", { count: totalLessons })}
              </span>
            </p>
            <p className="rounded-2xl border border-zinc-200/80 bg-zinc-50/80 px-4 py-3 text-sm font-semibold text-zinc-700">
              {t("modules_page_stats_discover")}
            </p>
          </div>
        </header>

        <ModulesPreferencesPanel modules={modulePreferenceEntries} />

        {subjectRows.length > 1 ? (
          <nav
            aria-label={t("modules_page_jump_to_subject_aria")}
            className="mt-4 flex flex-wrap items-center gap-2 rounded-2xl border border-zinc-200/80 bg-white/80 p-3 backdrop-blur-sm"
          >
            {subjectRows.map(([subject, modules]) => {
              const visual = getSubjectVisual(subject);
              return (
                <a
                  key={`subject-link-${subject}`}
                  href={`#subject-${toSubjectSlug(subject)}`}
                  className={`ui-focus-ring inline-flex min-h-10 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${visual.chipClassName}`}
                >
                  <span aria-hidden="true">{visual.icon}</span>
                  <span>{subject}</span>
                  <span className="rounded-full bg-white/70 px-1.5 py-0.5 text-[10px] text-zinc-700">
                    {modules.length}
                  </span>
                </a>
              );
            })}
          </nav>
        ) : null}

        <div className="mt-8 space-y-10">
          {subjectRows.map(([subject, modules]) => {
            const visual = getSubjectVisual(subject);
            return (
              <section key={subject} id={`subject-${toSubjectSlug(subject)}`}>
                <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                  <h2 className="ui-type-display-lg text-zinc-900">
                    <span aria-hidden="true" className="mr-2">
                      {visual.icon}
                    </span>
                    {subject}
                  </h2>
                  <p className="rounded-full border border-zinc-200 bg-white/85 px-3 py-1 text-xs font-semibold text-zinc-600">
                    {modules.length === 1
                      ? t("modules_page_section_module_count_one", { count: modules.length })
                      : t("modules_page_section_module_count_other", { count: modules.length })}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {modules.map((moduleEntry) => {
                    const moduleTopic = getBestExplorerTopicForModule(moduleEntry);
                    const visualHref = toExploreModulePath(
                      moduleEntry.id,
                      moduleTopic?.id,
                    );
                    const ageRange = formatAgeRange(
                      moduleEntry.minAge,
                      moduleEntry.maxAge,
                      t,
                    );

                    return (
                      <article
                        key={moduleEntry.id}
                        className={`group relative overflow-hidden rounded-3xl border bg-white/90 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 ${visual.borderClassName}`}
                      >
                        <div
                          className="pointer-events-none absolute inset-x-0 top-0 h-24 opacity-70"
                          style={{ background: visual.halo }}
                          aria-hidden="true"
                        />

                        <div className="relative z-10">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span
                              className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${visual.chipClassName}`}
                            >
                              <span aria-hidden="true">{visual.icon}</span>
                              {moduleEntry.subject}
                            </span>
                            <span className="rounded-full border border-zinc-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-zinc-600">
                              {moduleEntry.lessons.length === 1
                                ? t("modules_page_module_lessons_one", {
                                    count: moduleEntry.lessons.length,
                                  })
                                : t("modules_page_module_lessons_other", {
                                    count: moduleEntry.lessons.length,
                                  })}
                            </span>
                          </div>

                          <ModuleCoverImage
                            moduleId={moduleEntry.id}
                            moduleTitle={moduleEntry.title}
                            fallbackSrc={moduleEntry.thumbnail}
                            className="mt-3 h-40 w-full rounded-2xl border border-white/80 object-cover shadow-sm transition-transform duration-300 group-hover:scale-[1.02]"
                          />

                          <h3 className="ui-type-heading-xl mt-4 text-zinc-900">
                            {moduleEntry.title}
                          </h3>
                          <p className="ui-type-body-sm mt-2 text-zinc-700">
                            {truncateText(moduleEntry.description)}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            {moduleEntry.version ? (
                              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-600">
                                {t("modules_page_version", { version: moduleEntry.version })}
                              </span>
                            ) : null}
                            {ageRange ? (
                              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold text-zinc-600">
                                {ageRange}
                              </span>
                            ) : null}
                            {moduleEntry.difficultyBand ? (
                              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-semibold capitalize text-zinc-600">
                                {moduleEntry.difficultyBand}
                              </span>
                            ) : null}
                          </div>

                          <div className="mt-4 flex flex-wrap items-center gap-2">
                            <Link
                              href={visualHref}
                              className={`ui-focus-ring inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-bold transition-colors ${visual.buttonClassName}`}
                            >
                              {t("modules_page_visual_path")}
                            </Link>
                            <Link
                              href={toModulePath(moduleEntry.id)}
                              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                            >
                              {t("modules_page_open_module")}
                            </Link>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
