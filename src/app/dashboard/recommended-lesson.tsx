"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Lesson } from "@/lib/data/curriculum";
import { toLessonPath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type RecommendationResponse = {
  recommendation: Lesson | null;
  recommendationContext?: {
    reason?: string;
    reasons?: string[];
  };
  dueLessons?: number;
  weakSkills?: string[];
  examRemediation?: {
    unresolvedCount: number;
    topSkills?: Array<{ skillId: string; count: number }>;
    topLessons?: Array<{
      lessonId: string;
      lessonTitle: string;
      count: number;
      urgencyScore?: number;
      priority?: "critical" | "high" | "medium" | "low";
      reason?: string;
      suggestedFocus?: string;
    }>;
    queue?: Array<{
      lessonId: string;
      lessonTitle: string;
      openErrorCount: number;
      urgencyScore: number;
      priority: "critical" | "high" | "medium" | "low";
      reason: string;
      suggestedFocus: string;
    }>;
    priorityCounts?: {
      critical: number;
      high: number;
      medium: number;
      low: number;
    };
  };
};

export default function RecommendedLesson() {
  const [payload, setPayload] = useState<RecommendationResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch("/api/ai/recommendations");
        const data = (await response.json()) as RecommendationResponse;
        setPayload(data);
      } catch (error) {
        console.error("Failed to fetch recommendation", error);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchRecommendation();
  }, []);

  if (isLoading) {
    return (
      <SoftCard className="h-28 w-full animate-pulse border-sky-200 bg-sky-50">
        <span className="sr-only">Loading recommendation</span>
      </SoftCard>
    );
  }

  const recommendation = payload?.recommendation ?? null;
  const unresolvedExamErrors = Math.max(0, Number(payload?.examRemediation?.unresolvedCount ?? 0));
  const topErrorLessons = Array.isArray(payload?.examRemediation?.topLessons)
    ? payload?.examRemediation?.topLessons.slice(0, 3)
    : [];
  const remediationQueue = Array.isArray(payload?.examRemediation?.queue)
    ? payload.examRemediation.queue.slice(0, 3)
    : [];
  const displayQueue = remediationQueue.length > 0 ? remediationQueue : topErrorLessons;
  const dueLessons = Math.max(0, Number(payload?.dueLessons ?? 0));
  const weakSkillCount = Array.isArray(payload?.weakSkills) ? payload?.weakSkills.length : 0;
  const reason =
    payload?.recommendationContext?.reason ??
    (Array.isArray(payload?.recommendationContext?.reasons)
      ? payload?.recommendationContext?.reasons.join("; ")
      : "");

  if (!recommendation) {
    return (
      <SoftCard as="section" className="border-emerald-300 bg-emerald-50 p-4">
        <p className="font-semibold text-emerald-800">
          Great work! We have no new lesson recommendation right now.
        </p>
        {unresolvedExamErrors > 0 ? (
          <p className="mt-2 text-sm text-emerald-800">
            You still have {unresolvedExamErrors} open exam error log item(s).{" "}
            <Link href="/exam-prep/error-log" className="ui-focus-ring rounded px-1 font-semibold underline">
              Review logbook
            </Link>
            .
          </p>
        ) : null}
      </SoftCard>
    );
  }

  return (
    <SoftCard
      as="section"
      organicCorners
      className="border-accent/20 bg-[var(--gradient-hero)] p-6"
    >
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold text-zinc-900">Recommended For You</h3>
        <ProgressChip label="Status" value="Next Up" tone="info" />
      </div>
      <Link href={toLessonPath(recommendation.id)} className="ui-focus-ring mt-2 block rounded px-1">
        <p className="text-xl font-semibold text-zinc-900">{recommendation.title}</p>
        <p className="mt-1 text-sm text-zinc-700">
          Let&apos;s work on this skill next to keep improving.
        </p>
      </Link>
      <div className="mt-3 flex flex-wrap gap-2">
        {dueLessons > 0 ? (
          <ProgressChip label="Due reviews" value={dueLessons} tone="warning" />
        ) : null}
        {weakSkillCount > 0 ? (
          <ProgressChip label="Weak skills" value={weakSkillCount} tone="warning" />
        ) : null}
        {unresolvedExamErrors > 0 ? (
          <Link
            href="/exam-prep/error-log"
            className="ui-focus-ring ui-soft-button inline-flex min-h-11 items-center justify-center border border-border bg-surface px-3 py-1 text-xs font-semibold text-foreground"
          >
            Open exam errors: {unresolvedExamErrors}
          </Link>
        ) : null}
      </div>
      {reason ? <p className="mt-3 text-xs text-zinc-700">Reason: {reason}</p> : null}
      {displayQueue.length > 0 ? (
        <SoftCard className="mt-3 border-sky-200 bg-surface p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Remediation Queue
          </p>
          <ul className="mt-2 space-y-1">
            {displayQueue.map((entry) => (
              <li key={entry.lessonId} className="text-xs text-zinc-700">
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    href={toLessonPath(entry.lessonId)}
                    className="ui-focus-ring rounded px-1 font-medium text-zinc-900 hover:underline"
                  >
                    {entry.lessonTitle}
                  </Link>
                  {"priority" in entry && entry.priority ? (
                    <ProgressChip
                      label="Priority"
                      value={entry.priority}
                      tone={entry.priority === "low" ? "success" : entry.priority === "medium" ? "info" : "warning"}
                    />
                  ) : null}
                </div>
                <div className="mt-1 text-[11px] text-zinc-600">
                  {("openErrorCount" in entry ? entry.openErrorCount : entry.count) ?? 0} open error
                  {(("openErrorCount" in entry ? entry.openErrorCount : entry.count) ?? 0) > 1 ? "s" : ""}
                  {"urgencyScore" in entry && typeof entry.urgencyScore === "number" ? ` • score ${entry.urgencyScore}` : ""}
                </div>
                {"suggestedFocus" in entry && entry.suggestedFocus ? (
                  <div className="mt-1 text-[11px] text-zinc-600">{entry.suggestedFocus}</div>
                ) : null}
              </li>
            ))}
          </ul>
        </SoftCard>
      ) : null}
    </SoftCard>
  );
}
