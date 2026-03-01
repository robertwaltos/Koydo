import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getLearningModuleByLookupKey } from "@/lib/modules";
import {
  getBestExplorerTopicForModule,
  getExplorerTopicById,
} from "@/lib/explorer/topics";
import { getWorldScene } from "@/lib/explorer/scenes";
import {
  getRecommendationMeta,
  type RecommendationType,
} from "@/lib/explorer/recommendations";
import { toExploreModulePath } from "@/lib/routing/paths";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import SpeakButton from "../../_components/speak-button";
import ExplorerViewTracker from "../../_components/explorer-view-tracker";
import ModuleLessonLink from "../../_components/module-lesson-link";
import ResumeLessonLink from "../../_components/resume-lesson-link";
import RecommendedLessonLink from "../../_components/recommended-lesson-link";

export const dynamic = "force-dynamic";

type PageParams = {
  moduleId: string;
};

type PageSearchParams = {
  topicId?: string;
};

type ProgressRow = {
  lesson_id: string;
  next_review_at: string | null;
  last_reviewed_at: string | null;
  updated_at: string;
  created_at: string;
};

function toTimestamp(value: string | null | undefined) {
  if (!value) return 0;
  const parsed = Date.parse(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function selectResumeLessonId(progressRows: ProgressRow[]) {
  return [...progressRows]
    .sort((left, right) => {
      const leftTime = toTimestamp(left.last_reviewed_at ?? left.updated_at ?? left.created_at);
      const rightTime = toTimestamp(
        right.last_reviewed_at ?? right.updated_at ?? right.created_at,
      );
      return rightTime - leftTime;
    })
    .map((entry) => entry.lesson_id)[0] ?? null;
}

function selectRecommendedLesson(input: {
  lessonIds: string[];
  progressRows: ProgressRow[];
  resumeLessonId: string | null;
}) {
  const { lessonIds, progressRows, resumeLessonId } = input;

  const byLessonId = new Map(progressRows.map((row) => [row.lesson_id, row] as const));

  const dueRows = progressRows.filter(
    (row) => toTimestamp(row.next_review_at) > 0,
  );
  dueRows.sort((left, right) => {
    return toTimestamp(left.next_review_at) - toTimestamp(right.next_review_at);
  });
  const dueLessonId = dueRows.find((row) => lessonIds.includes(row.lesson_id))?.lesson_id;
  if (dueLessonId) {
    return {
      lessonId: dueLessonId,
      suggestionType: "due_review" as RecommendationType,
    };
  }

  const unstartedLessonId = lessonIds.find((lessonId) => !byLessonId.has(lessonId));
  if (unstartedLessonId) {
    return {
      lessonId: unstartedLessonId,
      suggestionType: "new_path" as RecommendationType,
    };
  }

  if (resumeLessonId) {
    const resumeIndex = lessonIds.findIndex((lessonId) => lessonId === resumeLessonId);
    const sequentialLessonId =
      resumeIndex >= 0 && resumeIndex < lessonIds.length - 1
        ? lessonIds[resumeIndex + 1]
        : null;
    if (sequentialLessonId) {
      return {
        lessonId: sequentialLessonId,
        suggestionType: "sequential" as RecommendationType,
      };
    }
  }

  return {
    lessonId: lessonIds[0] ?? null,
    suggestionType: "fallback" as RecommendationType,
  };
}

export default function ExploreModulePage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}) {
  return <ExploreModulePageContent params={params} searchParams={searchParams} />;
}

async function ExploreModulePageContent({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<PageSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearch = await searchParams;

  const learningModule = getLearningModuleByLookupKey(resolvedParams.moduleId);
  if (!learningModule) notFound();

  const requestedTopic = getExplorerTopicById(resolvedSearch.topicId ?? "");
  const fallbackTopic = getBestExplorerTopicForModule(learningModule);
  const displayTopic = requestedTopic ?? fallbackTopic;
  const scene = displayTopic ? getWorldScene(displayTopic.id) : null;

  const canonicalHref = toExploreModulePath(learningModule.id, requestedTopic?.id);
  if (resolvedParams.moduleId !== learningModule.id) {
    redirect(canonicalHref);
  }

  const glowColor = scene?.glowColor ?? "#7b78ff";
  const borderColor = scene?.borderColor ?? "#cccfff";
  const gradient = scene?.gradient ?? "var(--gradient-hero)";
  const badge = scene?.badge ?? "✨";
  const worldHref = displayTopic ? `/explore/${displayTopic.id}` : "/explore";
  const moduleLessonIds = learningModule.lessons.map((lesson) => lesson.id);

  let resumeLessonId: string | null = null;
  let recommendedLessonId: string | null = null;
  let recommendedSuggestionType: RecommendationType = "fallback";
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (!authError && user) {
    if (moduleLessonIds.length > 0) {
      const progressResult = await supabase
        .from("user_learning_progress")
        .select("lesson_id, next_review_at, last_reviewed_at, updated_at, created_at")
        .eq("user_id", user.id)
        .in("lesson_id", moduleLessonIds);

      const progressRows = (progressResult.data ?? []) as ProgressRow[];
      resumeLessonId = selectResumeLessonId(progressRows);
      const recommended = selectRecommendedLesson({
        lessonIds: moduleLessonIds,
        progressRows,
        resumeLessonId,
      });
      recommendedLessonId = recommended.lessonId;
      recommendedSuggestionType = recommended.suggestionType;
    }
  }

  if (!recommendedLessonId && moduleLessonIds.length > 0) {
    const recommended = selectRecommendedLesson({
      lessonIds: moduleLessonIds,
      progressRows: [],
      resumeLessonId: null,
    });
    recommendedLessonId = recommended.lessonId;
    recommendedSuggestionType = recommended.suggestionType;
  }

  const resumeLesson = resumeLessonId
    ? learningModule.lessons.find((lesson) => lesson.id === resumeLessonId) ?? null
    : null;
  const recommendedLesson = recommendedLessonId
    ? learningModule.lessons.find((lesson) => lesson.id === recommendedLessonId) ?? null
    : null;
  const showRecommendedLesson = Boolean(
    recommendedLesson && recommendedLesson.id !== resumeLesson?.id,
  );
  const recommendationMeta = showRecommendedLesson
    ? getRecommendationMeta(recommendedSuggestionType)
    : null;

  return (
    <div className="flex flex-col">
      <ExplorerViewTracker
        surface="module"
        topicId={displayTopic?.id}
        moduleId={learningModule.id}
        payload={{
          lessonCount: learningModule.lessons.length,
          hasResumeLesson: Boolean(resumeLesson),
          hasRecommendedLesson: showRecommendedLesson,
          recommendationType: showRecommendedLesson
            ? recommendedSuggestionType
            : null,
        }}
      />

      <header
        className="explore-scene-enter relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[48vh] sm:py-14"
        style={{ background: gradient }}
      >
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
          <Link
            href={worldHref}
            className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
          >
            {displayTopic ? "Back to World" : "All Worlds"}
          </Link>
          <SpeakButton
            text={`${learningModule.title}. ${learningModule.description}`}
            label="Hear It"
            className="border-white/60 bg-white/80 text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-white"
          />
        </div>

        <span
          className="explore-float absolute right-6 top-6 text-4xl sm:text-5xl"
          aria-hidden="true"
        >
          {badge}
        </span>

        {displayTopic ? (
          <Image
            src={displayTopic.imageSrc}
            alt={displayTopic.imageAlt}
            width={280}
            height={210}
            className="explore-scene-enter relative z-10 h-auto w-full max-w-60 drop-shadow-xl sm:max-w-72"
            style={{ animationDelay: "100ms" }}
            priority
          />
        ) : null}

        <div
          className="explore-scene-enter relative z-10 mt-4 text-center"
          style={{ animationDelay: "200ms" }}
        >
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl">
            {learningModule.title}
          </h1>
          <p className="explore-copy-heavy mt-2 text-base text-zinc-700 sm:text-lg">
            {learningModule.description}
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-8 sm:h-12"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--background))",
          }}
          aria-hidden="true"
        />
      </header>

      <section
        aria-label="Module lessons"
        className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-10"
      >
        <h2 className="explore-copy-heavy mb-2 text-center text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
          Choose an Adventure Step
        </h2>

        {/* Module stats strip */}
        <div className="explore-copy-heavy mb-6 flex flex-wrap items-center justify-center gap-3 text-sm">
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-bold"
            style={{ borderColor, color: glowColor }}
          >
            <span aria-hidden="true">📚</span>
            {learningModule.lessons.length} Lessons
          </span>
          <span
            className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-bold"
            style={{ borderColor, color: glowColor }}
          >
            <span aria-hidden="true">🎯</span>
            {learningModule.subject}
          </span>
        </div>

        {resumeLesson ? (
          <div className="mb-4 flex justify-center">
            <ResumeLessonLink
              topicId={displayTopic?.id}
              moduleId={learningModule.id}
              lessonId={resumeLesson.id}
              lessonTitle={resumeLesson.title}
              glowColor={glowColor}
            />
          </div>
        ) : null}

        {showRecommendedLesson && recommendedLesson ? (
          <div className="mb-4 flex justify-center">
            <RecommendedLessonLink
              topicId={displayTopic?.id}
              moduleId={learningModule.id}
              lessonId={recommendedLesson.id}
              lessonTitle={recommendedLesson.title}
              suggestionType={recommendedSuggestionType}
              glowColor={glowColor}
            />
          </div>
        ) : null}
        {recommendationMeta ? (
          <p className="explore-copy-heavy mb-4 text-center text-sm font-medium text-zinc-600">
            Recommended now:{" "}
            <strong className="text-zinc-800">{recommendationMeta.label}</strong>.{" "}
            {recommendationMeta.pageCue}
          </p>
        ) : null}

        {/* Lesson journey path */}
        <div className="relative grid grid-cols-1 gap-3">
          {/* Vertical journey line */}
          <div
            className="explore-copy-heavy absolute left-7 top-4 bottom-4 w-0.5 sm:left-8"
            style={{ backgroundColor: `${glowColor}22` }}
            aria-hidden="true"
          />
          {learningModule.lessons.map((lesson, index) => (
            <ModuleLessonLink
              key={lesson.id}
              topicId={displayTopic?.id}
              moduleId={learningModule.id}
              lessonId={lesson.id}
              lessonTitle={lesson.title}
              lessonType={lesson.type}
              durationMinutes={lesson.duration}
              index={index}
              glowColor={glowColor}
              borderColor={borderColor}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
