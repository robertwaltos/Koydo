
import { verifyProfileOwnership } from "@/lib/profiles/server-profile";
import { getAllEducationStages, getEducationStage } from "@/lib/explorer/scenes";
import { ACTIVE_PROFILE_COOKIE_KEY } from "@/lib/profiles/active-profile";
import StageLinkCard from "./_components/stage-link-card";
import { Suspense } from "react";
import { cookies } from "next/headers";
import type { Metadata } from "next";
import { isSupportedLocale, type Locale, translate } from "@/lib/i18n/translations";
import SpeakButton from "./_components/speak-button";
import VoicePicker from "./_components/voice-picker";
import ExplorerViewTracker from "./_components/explorer-view-tracker";
import StageModuleGrid from "./_components/stage-module-grid";
import UpgradeBanner from "./_components/upgrade-banner";
import ContextualBreadcrumbs from "@/app/components/contextual-breadcrumbs";

export const metadata: Metadata = {
  title: "Explore Learning Levels",
  description: "Browse six education stages from Pre-K to College. Pick your level and start learning with free interactive modules.",
};

// Mapping from profile grade_level to education stage ID
const gradeToStageId: Record<string, string> = {
    "Pre-K": "pre-k",
    "K-2": "early-elem",
    "3-5": "upper-elem",
    "6-8": "middle",
    "9-11": "high",
    "9-12": "high",
    "12 + College": "college",
    "College+": "college",
};

function getRecommendedStageId(profile: { grade_level: string } | null): string | null {
    if (!profile?.grade_level) return null;
    return gradeToStageId[profile.grade_level] || null;
}

type ExplorePageProps = {
  searchParams: Promise<{ stage?: string }>;
};

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const { stage: stageId } = await searchParams;
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("koydo.locale")?.value ?? "en";
  const locale: Locale = isSupportedLocale(localeCookie) ? localeCookie : "en";
  const t = (key: string, vars?: Record<string, string | number>) =>
    translate(locale, key, vars);
  
  const stages = getAllEducationStages();

  // Non-blocking profile fetch — guests see the lobby without recommendation badges
  const profileCookieVal = cookieStore.get(ACTIVE_PROFILE_COOKIE_KEY)?.value;
  const profile = profileCookieVal
    ? await verifyProfileOwnership(decodeURIComponent(profileCookieVal))
    : null;
  const recommendedStageId = getRecommendedStageId(profile);

  const selectedStage = stageId ? getEducationStage(stageId) : null;

  if (selectedStage) {
    return (
      <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><div className="family-orbit-spinner" /></div>}>
        <StageModuleGrid stage={selectedStage} />
      </Suspense>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-52px)] flex-col">
      <ExplorerViewTracker surface="lobby" />

      <header className="relative overflow-hidden px-4 pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
        <div
          className="absolute inset-0 opacity-35"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, #a7f3d0 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, #c4b5fd 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, #fde68a 0%, transparent 50%)
            `,
          }}
          aria-hidden="true"
        />

        <ContextualBreadcrumbs
          className="relative mb-3 inline-flex rounded-full border border-zinc-200 bg-white/80 px-3 py-1 backdrop-blur-sm"
          items={[
            { label: "Dashboard", href: "/dashboard" },
            { label: t("explore_hero_title") },
          ]}
        />

        <h1 className="relative text-3xl font-black tracking-tight text-zinc-900 dark:text-foreground sm:text-4xl">
          {t("explore_hero_title")}
        </h1>
        <p className="relative mt-2 text-sm text-zinc-600 dark:text-foreground/70">
          {t("explore_hero_subtitle")}
        </p>

        <div className="relative mt-3 flex items-center justify-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-bold text-zinc-600 backdrop-blur-sm">
            {t("explore_chip_span")}
          </span>
          <SpeakButton text={t("explore_auto_narration_text")} label={t("common_hear_it")} />
          <VoicePicker />
        </div>
      </header>

      <UpgradeBanner />

      <section
        aria-label={t("explore_levels_aria")}
        className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-5 px-4 pb-10 sm:grid-cols-2 sm:gap-6 sm:px-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {stages.map((stage, index) => (
          <StageLinkCard
            key={stage.id}
            stage={stage}
            index={index}
            isRecommended={stage.id === recommendedStageId}
          />
        ))}
      </section>
    </div>
  );
}
