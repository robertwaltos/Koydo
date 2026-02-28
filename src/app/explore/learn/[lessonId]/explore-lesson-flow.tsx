"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import type {
  Flashcard,
  InteractiveActivity as ActivityType,
  Lesson,
  LessonChunk,
  Question,
} from "@/lib/modules/types";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";
import { saveOfflineProgress, deleteSyncedProgress } from "@/lib/offline/progress-db";
import SpeakButton from "../../_components/speak-button";
import AutoNarrator from "../../_components/auto-narrator";
// Phase 1 (first screen) is static; phases 2–5 are lazy-loaded on demand
import VisualChunkStepper from "../../_components/visual-chunk-stepper";
import { usePreReaderMode } from "../../_components/pre-reader-mode";
import AuthGuard from "@/app/components/auth-guard";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/app/components/error-fallback";

const VisualFlashcards = dynamic(() => import("../../_components/visual-flashcards"), {
  loading: () => <div className="flex min-h-[40vh] items-center justify-center"><div className="family-orbit-spinner" /></div>,
});
const VisualActivity = dynamic(() => import("../../_components/visual-activity"), {
  loading: () => <div className="flex min-h-[40vh] items-center justify-center"><div className="family-orbit-spinner" /></div>,
});
const VisualQuiz = dynamic(() => import("../../_components/visual-quiz"), {
  loading: () => <div className="flex min-h-[40vh] items-center justify-center"><div className="family-orbit-spinner" /></div>,
});
const LessonCelebration = dynamic(() => import("../../_components/lesson-celebration"), {
  loading: () => <div className="flex min-h-[40vh] items-center justify-center"><div className="family-orbit-spinner" /></div>,
});

type FlowPhase = "learn" | "flashcards" | "activity" | "quiz" | "celebration";

type ExploreLessonFlowProps = {
  lesson: Lesson;
  moduleId: string;
  moduleTitle: string;
  subject: string;
  glowColor: string;
  borderColor: string;
  gradient: string;
  badge: string;
  worldHref: string;
  nextLessonHref: string | null;
};

function normalizeChunks(lesson: Lesson): LessonChunk[] {
  if (Array.isArray(lesson.chunks) && lesson.chunks.length > 0) {
    return lesson.chunks;
  }
  if (Array.isArray(lesson.objectives) && lesson.objectives.length > 0) {
    return lesson.objectives.map((obj, i) => ({
      id: `${lesson.id}-obj-${i}`,
      title: `Step ${i + 1}`,
      content: obj,
      kind: "concept" as const,
    }));
  }
  return [
    {
      id: `${lesson.id}-overview`,
      title: lesson.title,
      content: "Let's explore this topic together! Tap through to learn.",
      kind: "intro" as const,
    },
  ];
}

export default function ExploreLessonFlow({
  lesson,
  moduleId,
  moduleTitle,
  subject,
  glowColor,
  borderColor,
  gradient,
  badge,
  worldHref,
  nextLessonHref,
}: ExploreLessonFlowProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const chunks = useMemo(() => normalizeChunks(lesson), [lesson]);
  const flashcardData: Flashcard[] = lesson.flashcards ?? [];
  const questions: Question[] = lesson.questions ?? [];
  const activities: ActivityType[] = lesson.interactiveActivities ?? [];
  const firstActivity = activities[0] ?? null;

  // Determine which phases are available
  const hasFlashcards = flashcardData.length > 0 || chunks.length > 0;
  const hasActivity = firstActivity !== null;
  const hasQuiz = questions.length > 0;

  const [phase, setPhase] = useState<FlowPhase>("learn");
  const [quizScore, setQuizScore] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);

  // ── Analytics: track lesson_viewed on mount (once) ──
  const viewTrackedRef = useRef(false);
  useEffect(() => {
    if (viewTrackedRef.current) return;
    viewTrackedRef.current = true;
    void trackLearningEvent({
      eventType: "lesson_viewed",
      lessonId: lesson.id,
      moduleId,
      payload: { source: "explore_visual_flow" },
    });
  }, [lesson.id, moduleId]);

  // ── Analytics + Progress: track completion when celebration phase is reached ──
  const completionTrackedRef = useRef(false);
  useEffect(() => {
    if (phase !== "celebration" || completionTrackedRef.current) return;
    completionTrackedRef.current = true;

    const scorePercentage = hasQuiz && quizTotal > 0 ? quizScore / quizTotal : 1;

    void trackLearningEvent({
      eventType: "lesson_completed",
      lessonId: lesson.id,
      moduleId,
      payload: {
        source: "explore_visual_flow",
        score: quizScore,
        total: quizTotal,
        masteryPercentage: Math.round(scorePercentage * 100),
      },
    });

    // Persist progress
    const syncProgress = async () => {
      try {
        const response = await fetch("/api/progress", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            lessonId: lesson.id,
            scorePercentage,
          }),
        });
        if (response.ok) {
          await deleteSyncedProgress(lesson.id);
        } else {
          throw new Error(`Progress sync failed: ${response.status}`);
        }
      } catch {
        // Save offline if API unavailable
        try {
          await saveOfflineProgress({
            lessonId: lesson.id,
            score: hasQuiz ? quizScore : Math.round(scorePercentage * 100),
            totalQuestions: hasQuiz ? quizTotal : 100,
            completedAt: new Date().toISOString(),
            synced: false,
          });
        } catch {
          // Non-blocking — never disrupt the celebration
        }
      }
    };
    void syncProgress();
  }, [phase, lesson.id, moduleId, hasQuiz, quizScore, quizTotal]);

  const phaseIcons: Record<FlowPhase, string> = {
    learn: "📘",
    flashcards: "🃏",
    activity: "🧩",
    quiz: "✅",
    celebration: "🎉",
  };

  function handleChunksComplete() {
    if (hasFlashcards) {
      setPhase("flashcards");
    } else if (hasActivity) {
      setPhase("activity");
    } else if (hasQuiz) {
      setPhase("quiz");
    } else {
      setPhase("celebration");
    }
  }

  function handleFlashcardsComplete() {
    if (hasActivity) {
      setPhase("activity");
    } else if (hasQuiz) {
      setPhase("quiz");
    } else {
      setPhase("celebration");
    }
  }

  function handleActivityComplete() {
    if (hasQuiz) {
      setPhase("quiz");
    } else {
      setPhase("celebration");
    }
  }

  function handleQuizComplete(score: number, total: number) {
    setQuizScore(score);
    setQuizTotal(total);
    setPhase("celebration");
  }

  // Phase indicator labels
  const allPhases: Array<{ id: FlowPhase; label: string; available: boolean }> = [
    { id: "learn", label: "Learn", available: true },
    { id: "flashcards", label: "Review", available: hasFlashcards },
    { id: "activity", label: "Try It", available: hasActivity },
    { id: "quiz", label: "Quiz", available: hasQuiz },
    { id: "celebration", label: "Done!", available: true },
  ];
  const phases = allPhases.filter((p) => p.available);

  const phaseIndex = phases.findIndex((p) => p.id === phase);

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthGuard>
        <div className="flex flex-col">
          {/* Narrate lesson entry */}
          <AutoNarrator text={`Let's learn about ${lesson.title}.`} />

          {/* Lesson header — compact, themed */}
          <header
            className="explore-scene-enter flex flex-col items-center gap-3 px-4 pb-4 pt-6"
            style={{ background: gradient }}
          >
            {/* Nav row */}
            <div className="flex w-full max-w-3xl items-center justify-between">
              <Link
                href={worldHref}
                className="ui-focus-ring inline-flex items-center rounded-full border border-white/60 bg-white/80 px-3 py-1.5 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-white"
              >
                {isPreReaderMode ? (
                  <>
                    <span aria-hidden="true">🌍</span>
                    <span className="sr-only">Back to world</span>
                  </>
                ) : (
                  "Back to World"
                )}
              </Link>
              <SpeakButton
                text={lesson.title}
                label={isPreReaderMode ? "🔊" : "Hear It"}
                className="border-white/60 bg-white/80 text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-white"
              />
            </div>

            {/* Title */}
            <div className="text-center">
              <span className="text-3xl" aria-hidden="true">
                {badge}
              </span>
              <p
                className={`mt-1 text-xs font-bold uppercase tracking-wide text-zinc-600 ${isPreReaderMode ? "sr-only" : ""}`}
              >
                {subject} — {moduleTitle}
              </p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
                {lesson.title}
              </h1>
            </div>

            {/* Phase progress bar */}
            <nav className="flex items-center gap-1" aria-label="Lesson progress">
              {phases.map((p, i) => (
                <div key={p.id} className="flex items-center gap-1">
                  {i > 0 ? (
                    <div
                      className="h-0.5 w-4 sm:w-6"
                      style={{
                        backgroundColor:
                          i <= phaseIndex ? glowColor : `${glowColor}33`,
                      }}
                    />
                  ) : null}
                  <span
                    className="rounded-full px-3 py-1 text-xs font-bold transition-all duration-300"
                    style={{
                      backgroundColor:
                        i === phaseIndex ? glowColor : i < phaseIndex ? `${glowColor}22` : "transparent",
                      color: i === phaseIndex ? "white" : glowColor,
                      border: `2px solid ${i <= phaseIndex ? glowColor : `${glowColor}33`}`,
                    }}
                  >
                    {isPreReaderMode ? (
                      <>
                        <span aria-hidden="true">{phaseIcons[p.id]}</span>
                        <span className="sr-only">{p.label}</span>
                      </>
                    ) : (
                      p.label
                    )}
                  </span>
                </div>
              ))}
            </nav>

            {/* Gradient fade to content */}
            <div
              className="h-6 w-full"
              style={{
                background: `linear-gradient(to bottom, transparent, var(--background))`,
              }}
              aria-hidden="true"
            />
          </header>

          {/* Phase content */}
          <section className="mx-auto w-full max-w-4xl px-4 py-6">
            {phase === "learn" ? (
              <VisualChunkStepper
                chunks={chunks}
                glowColor={glowColor}
                borderColor={borderColor}
                onComplete={handleChunksComplete}
              />
            ) : null}

            {phase === "flashcards" ? (
              <VisualFlashcards
                lessonId={lesson.id}
                moduleId={moduleId}
                lessonTitle={lesson.title}
                flashcards={flashcardData.length > 0 ? flashcardData : undefined}
                objectives={lesson.objectives}
                chunks={lesson.chunks}
                glowColor={glowColor}
                borderColor={borderColor}
                onComplete={handleFlashcardsComplete}
              />
            ) : null}

            {phase === "activity" && firstActivity ? (
              <VisualActivity
                activity={firstActivity}
                glowColor={glowColor}
                borderColor={borderColor}
                onComplete={handleActivityComplete}
              />
            ) : null}

            {phase === "quiz" ? (
              <VisualQuiz
                questions={questions}
                glowColor={glowColor}
                borderColor={borderColor}
                onComplete={handleQuizComplete}
              />
            ) : null}
          </section>

          {phase === "celebration" ? (
            <LessonCelebration
              lessonTitle={lesson.title}
              quizScore={hasQuiz ? quizScore : undefined}
              quizTotal={hasQuiz ? quizTotal : undefined}
              glowColor={glowColor}
              gradient={gradient}
              badge={badge}
              worldHref={worldHref}
              nextLessonHref={nextLessonHref ?? undefined}
            />
          ) : null}
        </div>
      </AuthGuard>
    </ErrorBoundary>
  );
}
