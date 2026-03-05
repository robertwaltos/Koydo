"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toLessonPath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

/* ─── Types (mirrors API response) ────────────────────────────── */

type RecommendationItem = {
  rank: number;
  lessonId: string;
  lessonTitle: string;
  moduleId: string;
  moduleTitle: string;
  moduleSubject: string;
  pathId: string | null;
  score: number;
  reasons: string[];
  kind: "review" | "continue" | "new" | "remediate";
};

type RecommendationsResponse = {
  recommendations: RecommendationItem[];
  weakSkillIds: string[];
  dueLessonCount: number;
  activePathIds: string[];
};

/* ─── UI Helpers ──────────────────────────────────────────────── */

const KIND_LABELS: Record<RecommendationItem["kind"], string> = {
  review: "Review",
  continue: "Continue",
  new: "New",
  remediate: "Practice",
};

const KIND_TONES: Record<RecommendationItem["kind"], "neutral" | "info" | "success" | "warning"> = {
  review: "warning",
  continue: "info",
  new: "success",
  remediate: "warning",
};

const KIND_BORDER: Record<RecommendationItem["kind"], string> = {
  review:    "border-amber-200/60 bg-gradient-to-br from-amber-50/80 to-amber-100/40 dark:border-amber-800/40 dark:from-amber-950/40 dark:to-amber-900/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(245,158,11,0.05)]",
  continue:  "border-sky-200/60 bg-gradient-to-br from-sky-50/80 to-sky-100/40 dark:border-sky-800/40 dark:from-sky-950/40 dark:to-sky-900/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(14,165,233,0.05)]",
  new:       "border-emerald-200/60 bg-gradient-to-br from-emerald-50/80 to-emerald-100/40 dark:border-emerald-800/40 dark:from-emerald-950/40 dark:to-emerald-900/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(16,185,129,0.05)]",
  remediate: "border-rose-200/60 bg-gradient-to-br from-rose-50/80 to-rose-100/40 dark:border-rose-800/40 dark:from-rose-950/40 dark:to-rose-900/20 backdrop-blur-xl shadow-[0_8px_24px_rgba(244,63,94,0.05)]",
};

/* ─── Component ───────────────────────────────────────────────── */

export default function AdaptiveNextLessons() {
  const [data, setData] = useState<RecommendationsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/mastery/recommendations?n=3");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = (await res.json()) as RecommendationsResponse;
        if (!cancelled) setData(json);
      } catch (err) {
        console.error("Failed to fetch adaptive recommendations:", err);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    }

    void load();
    return () => { cancelled = true; };
  }, []);

  /* Loading skeleton */
  if (isLoading) {
    return (
      <section>
        <h2 className="mb-4 text-xl font-semibold">Your Next Steps</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <SoftCard key={i} className="h-36 animate-pulse border-zinc-200 bg-zinc-50" />
          ))}
        </div>
      </section>
    );
  }

  /* Empty state */
  if (!data || data.recommendations.length === 0) {
    return (
      <SoftCard as="section" className="border-emerald-300 bg-emerald-50 p-5">
        <h2 className="text-lg font-semibold text-emerald-800">All caught up!</h2>
        <p className="mt-1 text-sm text-emerald-700">
          No new recommendations right now. Keep exploring modules or come
          back later when lessons are due for review.
        </p>
      </SoftCard>
    );
  }

  const { recommendations, weakSkillIds, dueLessonCount } = data;

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your Next Steps</h2>
        <div className="flex gap-2">
          {dueLessonCount > 0 && (
            <ProgressChip label="Due" value={dueLessonCount} tone="warning" />
          )}
          {weakSkillIds.length > 0 && (
            <ProgressChip label="Weak skills" value={weakSkillIds.length} tone="warning" />
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((rec) => (
          <SoftCard
            key={rec.lessonId}
            as="article"
            interactive
            className={`relative p-5 ${KIND_BORDER[rec.kind]}`}
          >
            {/* Rank badge */}
            <div className="absolute -left-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-xs font-black text-white shadow-md">
              {rec.rank}
            </div>

            {/* Kind chip */}
            <div className="mb-2 flex items-center justify-between">
              <ProgressChip
                label={KIND_LABELS[rec.kind]}
                value=""
                tone={KIND_TONES[rec.kind]}
                className="text-[10px]"
              />
              <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                {rec.moduleSubject}
              </span>
            </div>

            {/* Module title */}
            <p className="text-xs font-medium text-zinc-500 dark:text-foreground/60 line-clamp-1">
              {rec.moduleTitle}
            </p>

            {/* Lesson title + CTA */}
            <Link
              href={toLessonPath(rec.lessonId)}
              className="ui-focus-ring mt-1 block rounded px-0.5"
            >
              <h3 className="text-sm font-bold text-zinc-900 dark:text-foreground line-clamp-2">
                {rec.lessonTitle}
              </h3>
            </Link>

            {/* Reason */}
            <p className="mt-2 text-[11px] text-zinc-500 line-clamp-2">
              {rec.reasons.join(" · ")}
            </p>

            {/* Start CTA */}
            <Link
              href={toLessonPath(rec.lessonId)}
              className="ui-focus-ring mt-3 inline-flex w-full min-h-10 items-center justify-center rounded-xl border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700 hover:bg-indigo-100 transition-colors"
            >
              {rec.kind === "review" ? "Review →" : rec.kind === "continue" ? "Continue →" : "Start →"}
            </Link>
          </SoftCard>
        ))}
      </div>
    </section>
  );
}

