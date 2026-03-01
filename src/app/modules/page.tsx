import type { Metadata } from "next";
import { cookies } from "next/headers";
import {
  isSupportedLocale,
  translate,
  type Locale,
} from "@/lib/i18n/translations";
import { getAllLearningModules } from "@/lib/modules";
import { getBestExplorerTopicForModule } from "@/lib/explorer/topics";
import { toExploreModulePath, toModulePath } from "@/lib/routing/paths";
import PageHeader from "@/app/components/page-header";
import ModuleCatalogBrowser, {
  type CatalogModule,
} from "./module-catalog-browser";

type ModuleCatalogSearchParams = {
  q?: string | string[];
  subject?: string | string[];
  difficulty?: string | string[];
  sort?: string | string[];
  dir?: string | string[];
};

type ModulesPageProps = {
  searchParams?: Promise<ModuleCatalogSearchParams>;
};

export const metadata: Metadata = {
  title: "Module Catalog",
  description:
    "Browse 200+ learning modules across math, science, language arts, coding, and career skills. Free and premium content for all ages.",
};

function firstString(value: string | string[] | undefined) {
  if (typeof value === "string") return value;
  if (Array.isArray(value) && value.length > 0) return value[0];
  return "";
}

export default async function ModulesPage({ searchParams }: ModulesPageProps) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const initialSearch = firstString(resolvedSearchParams.q).slice(0, 120);
  const initialSubject = firstString(resolvedSearchParams.subject).slice(0, 64);
  const initialDifficulty = firstString(resolvedSearchParams.difficulty).slice(0, 24);
  const initialSortBy = firstString(resolvedSearchParams.sort).slice(0, 20);
  const initialSortDirection = firstString(resolvedSearchParams.dir).slice(0, 8);

  const learningModules = getAllLearningModules()
    .slice()
    .sort(
      (left, right) =>
        left.subject.localeCompare(right.subject) ||
        left.title.localeCompare(right.title),
    );

  const totalLessons = learningModules.reduce(
    (count, m) => count + m.lessons.length,
    0,
  );

  const subjectCount = new Set(learningModules.map((m) => m.subject)).size;

  const catalogModules: CatalogModule[] = learningModules.map((m) => {
    const topic = getBestExplorerTopicForModule(m);
    return {
      id: m.id,
      title: m.title,
      description: m.description,
      subject: m.subject,
      lessonCount: m.lessons.length,
      minAge: m.minAge,
      maxAge: m.maxAge,
      difficultyBand: m.difficultyBand,
      version: m.version,
      thumbnail: m.thumbnail,
      visualHref: toExploreModulePath(m.id, topic?.id),
      moduleHref: toModulePath(m.id),
    };
  });

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-10">
      {/* Background glow */}
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

      <div className="relative mx-auto max-w-7xl">
        <PageHeader
          className="mb-8"
          breadcrumbs={[
            { label: "Dashboard", href: "/dashboard" },
            { label: t("modules_page_title") },
          ]}
          eyebrow={t("modules_page_badge_visual_catalog")}
          title={t("modules_page_title")}
          description={t("modules_page_description")}
          stats={[
            {
              label: "modules",
              value: learningModules.length,
            },
            {
              label: "lessons",
              value: totalLessons,
            },
          ]}
        >
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-surface-muted px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-zinc-500">
              {subjectCount === 1
                ? t("modules_page_subjects_count_one", { count: subjectCount })
                : t("modules_page_subjects_count_other", { count: subjectCount })}
            </span>
          </div>
        </PageHeader>

        {/* Interactive catalog */}
        <ModuleCatalogBrowser
          modules={catalogModules}
          initialSearch={initialSearch}
          initialSubject={initialSubject}
          initialDifficulty={initialDifficulty}
          initialSortBy={initialSortBy}
          initialSortDirection={initialSortDirection}
        />
      </div>
    </main>
  );
}
