"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";
import { toLessonPath } from "@/lib/routing/paths";

type FollowupPack = {
  summary: string;
  encouragement: string;
  focusSkills: string[];
  studyPlan: Array<{
    dayLabel: string;
    goal: string;
    tasks: string[];
  }>;
  flashcards: Array<{
    front: string;
    back: string;
    hint?: string;
  }>;
  practicePrompts: Array<{
    question: string;
    answer: string;
    hint?: string;
  }>;
  nextLessonIds: string[];
};

type FollowupMaterial = {
  lessonId: string;
  moduleId: string | null;
  lessonTitle: string;
  moduleTitle: string;
  status: "generating" | "completed" | "failed";
  generationMode: "rule_based" | "openai";
  model: string | null;
  pack: FollowupPack;
  error: string | null;
  updatedAt: string;
};

type FollowupResponse = {
  material: FollowupMaterial | null;
  setupRequired?: boolean;
  message?: string;
  error?: string;
};

type Props = {
  lessonId: string;
  moduleId: string;
};

function formatRelativeTime(value: string) {
  const timestamp = new Date(value).getTime();
  if (!Number.isFinite(timestamp)) return "recently";
  const deltaMs = Date.now() - timestamp;
  if (deltaMs < 60_000) return "just now";
  const minutes = Math.floor(deltaMs / 60_000);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default function AiFollowupPanel({ lessonId, moduleId }: Props) {
  const [material, setMaterial] = useState<FollowupMaterial | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [setupRequired, setSetupRequired] = useState(false);
  const [setupMessage, setSetupMessage] = useState<string | null>(null);
  const autoAttemptedRef = useRef(false);

  const fetchMaterial = useCallback(async () => {
    try {
      const response = await fetch(`/api/ai/follow-up?lessonId=${encodeURIComponent(lessonId)}`, {
        cache: "no-store",
      });
      const payload = (await response.json()) as FollowupResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to load follow-up material.");
      }
      setMaterial(payload.material);
      setSetupRequired(Boolean(payload.setupRequired));
      setSetupMessage(payload.message ?? null);
      setErrorMessage(null);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to load follow-up material.";
      setErrorMessage(message);
    } finally {
      setIsLoading(false);
    }
  }, [lessonId]);

  useEffect(() => {
    void fetchMaterial();
  }, [fetchMaterial]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      void fetchMaterial();
    }, 20000);
    return () => window.clearInterval(intervalId);
  }, [fetchMaterial]);

  const requestGeneration = useCallback(
    async (force: boolean) => {
      setIsGenerating(true);
      setErrorMessage(null);
      try {
        const response = await fetch("/api/ai/follow-up", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lessonId,
            moduleId,
            force,
          }),
        });
        const payload = (await response.json()) as FollowupResponse & { status?: string };
        if (!response.ok) {
          if (payload.setupRequired) {
            setSetupRequired(true);
            setSetupMessage(payload.message ?? "AI follow-up storage is not ready.");
            return;
          }
          throw new Error(payload.error ?? "Unable to generate AI follow-up pack.");
        }
        setMaterial(payload.material ?? null);
        setSetupRequired(Boolean(payload.setupRequired));
        setSetupMessage(payload.message ?? null);
      } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to generate AI follow-up pack.";
        setErrorMessage(message);
      } finally {
        setIsGenerating(false);
      }
    },
    [lessonId, moduleId],
  );

  useEffect(() => {
    if (
      isLoading ||
      setupRequired ||
      material ||
      isGenerating ||
      autoAttemptedRef.current
    ) {
      return;
    }

    autoAttemptedRef.current = true;
    void requestGeneration(false);
  }, [isGenerating, isLoading, material, requestGeneration, setupRequired]);

  const hasCompletedPack = material?.status === "completed";
  const focusSkills = useMemo(
    () => (hasCompletedPack ? material.pack.focusSkills.slice(0, 6) : []),
    [hasCompletedPack, material],
  );
  const studyPlan = useMemo(
    () => (hasCompletedPack ? material.pack.studyPlan.slice(0, 3) : []),
    [hasCompletedPack, material],
  );
  const flashcards = useMemo(
    () => (hasCompletedPack ? material.pack.flashcards.slice(0, 4) : []),
    [hasCompletedPack, material],
  );
  const practicePrompts = useMemo(
    () => (hasCompletedPack ? material.pack.practicePrompts.slice(0, 3) : []),
    [hasCompletedPack, material],
  );
  const nextLessonIds = useMemo(
    () => (hasCompletedPack ? material.pack.nextLessonIds.slice(0, 3) : []),
    [hasCompletedPack, material],
  );

  if (isLoading) {
    return (
      <SoftCard className="h-40 animate-pulse border-cyan-200 bg-cyan-50">
        <span className="sr-only">Loading AI follow-up pack</span>
      </SoftCard>
    );
  }

  return (
    <SoftCard as="section" className="border-cyan-200 bg-cyan-50 p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <h2 className="text-lg font-bold text-cyan-900">AI Coach Follow-Up</h2>
          <p className="text-sm text-cyan-900/90">
            Personalized next-step plan generated from your lesson activity.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {material ? (
            <ProgressChip
              label="Status"
              value={material.status}
              tone={
                material.status === "completed"
                  ? "success"
                  : material.status === "generating"
                    ? "info"
                    : "warning"
              }
            />
          ) : null}
          {material?.updatedAt ? (
            <ProgressChip label="Updated" value={formatRelativeTime(material.updatedAt)} tone="neutral" />
          ) : null}
        </div>
      </div>

      {setupRequired ? (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {setupMessage ?? "AI follow-up storage is not ready. Apply latest Supabase schema."}
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-900">
          {errorMessage}
        </p>
      ) : null}

      {!material && !setupRequired ? (
        <div className="mt-4 space-y-3">
          <p className="text-sm text-zinc-700">
            Complete this lesson and the AI coach will generate follow-up study material automatically.
          </p>
          <button
            type="button"
            disabled={isGenerating}
            onClick={() => void requestGeneration(false)}
            className="ui-focus-ring ui-soft-button min-h-11 rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-900 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isGenerating ? "Generating..." : "Generate my study pack now"}
          </button>
        </div>
      ) : null}

      {material?.status === "generating" ? (
        <div className="mt-4 space-y-2">
          <p className="text-sm text-zinc-700">
            AI coach is building your plan. This panel refreshes automatically.
          </p>
          <div className="h-24 animate-pulse rounded-2xl border border-cyan-200 bg-white" />
        </div>
      ) : null}

      {hasCompletedPack ? (
        <div className="mt-4 space-y-4">
          <SoftCard className="border-cyan-200 bg-white p-4">
            <p className="text-sm font-semibold text-zinc-900">{material.pack.summary}</p>
            <p className="mt-2 text-sm text-zinc-700">{material.pack.encouragement}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {material.generationMode === "openai" ? (
                <ProgressChip label="Mode" value={material.model ?? "openai"} tone="info" />
              ) : (
                <ProgressChip label="Mode" value="adaptive-rules" tone="neutral" />
              )}
            </div>
          </SoftCard>

          {focusSkills.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">Focus Skills</p>
              <div className="flex flex-wrap gap-2">
                {focusSkills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex min-h-9 items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {studyPlan.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">3-Day Plan</p>
              <div className="grid gap-3 md:grid-cols-3">
                {studyPlan.map((day) => (
                  <SoftCard key={day.dayLabel} className="border-cyan-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">{day.dayLabel}</p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900">{day.goal}</p>
                    <ul className="mt-2 space-y-1 text-xs text-zinc-700">
                      {day.tasks.map((task) => (
                        <li key={task}>• {task}</li>
                      ))}
                    </ul>
                  </SoftCard>
                ))}
              </div>
            </div>
          ) : null}

          {flashcards.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">Quick Flashcards</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {flashcards.map((card) => (
                  <SoftCard key={`${card.front}-${card.back}`} className="border-cyan-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-800">Front</p>
                    <p className="text-sm font-medium text-zinc-900">{card.front}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-cyan-800">Back</p>
                    <p className="text-sm text-zinc-700">{card.back}</p>
                    {card.hint ? <p className="mt-1 text-xs text-zinc-600">Hint: {card.hint}</p> : null}
                  </SoftCard>
                ))}
              </div>
            </div>
          ) : null}

          {practicePrompts.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">Practice Prompts</p>
              <div className="space-y-2">
                {practicePrompts.map((prompt, index) => (
                  <SoftCard key={`${prompt.question}-${index}`} className="border-cyan-200 bg-white p-3">
                    <p className="text-sm font-semibold text-zinc-900">{prompt.question}</p>
                    <p className="mt-1 text-sm text-zinc-700">Answer cue: {prompt.answer}</p>
                    {prompt.hint ? <p className="mt-1 text-xs text-zinc-600">Hint: {prompt.hint}</p> : null}
                  </SoftCard>
                ))}
              </div>
            </div>
          ) : null}

          {nextLessonIds.length > 0 ? (
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">Suggested Next Lessons</p>
              <div className="flex flex-wrap gap-2">
                {nextLessonIds.map((nextLessonId) => (
                  <Link
                    key={nextLessonId}
                    href={toLessonPath(nextLessonId)}
                    className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full border border-cyan-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-800 hover:bg-cyan-100"
                  >
                    {nextLessonId}
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              disabled={isGenerating}
              onClick={() => void requestGeneration(true)}
              className="ui-focus-ring ui-soft-button min-h-11 rounded-full border border-cyan-300 bg-white px-4 py-2 text-sm font-semibold text-cyan-900 hover:bg-cyan-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isGenerating ? "Regenerating..." : "Regenerate AI study pack"}
            </button>
            {nextLessonIds[0] ? (
              <Link
                href={toLessonPath(nextLessonIds[0])}
                className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700"
              >
                Start next lesson
              </Link>
            ) : null}
          </div>
        </div>
      ) : null}

      {material?.status === "failed" ? (
        <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
          Follow-up generation failed. Try regenerating. {material.error ? `Details: ${material.error}` : ""}
        </div>
      ) : null}
    </SoftCard>
  );
}
