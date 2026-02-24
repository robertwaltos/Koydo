"use client";

import { useMemo, useRef, useState } from "react";
import type { InteractiveActivity as LessonInteractiveActivity } from "@/lib/modules/types";
import { deleteSyncedProgress, saveOfflineProgress } from "@/lib/offline/progress-db";
import { trackLearningEvent } from "@/lib/analytics/xapi-lite";

type TypedInteractiveActivityProps = {
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
  activities: LessonInteractiveActivity[];
  fallbackPrompts: string[];
};

type ProgressSyncState = "idle" | "syncing" | "synced" | "queued";

type Bucket = { id: string; label: string };
type BucketItem = { id: string; label: string; correctBucketId: string };
type MatchItem = { id: string; label: string };
type MatchPair = { leftId: string; rightId: string };

const MIN_INTERACTIVE_SCORE = 0.6;
const MAX_INTERACTIVE_SCORE = 0.95;
const SUPPORTED_TYPES = new Set(["sorting_buckets", "drag_and_drop", "matching_pairs"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeScore(rawScore: number) {
  return Math.min(MAX_INTERACTIVE_SCORE, Math.max(MIN_INTERACTIVE_SCORE, rawScore));
}

function parseBucketData(activity: LessonInteractiveActivity): { buckets: Bucket[]; items: BucketItem[] } | null {
  const data = isRecord(activity.data) ? activity.data : null;
  if (!data) return null;

  const rawBuckets =
    (Array.isArray(data.buckets) ? data.buckets : null) ??
    (Array.isArray(data.targets) ? data.targets : null) ??
    [];
  const rawItems =
    (Array.isArray(data.items) ? data.items : null) ??
    (Array.isArray(data.draggables) ? data.draggables : null) ??
    [];

  const buckets: Bucket[] = rawBuckets
    .map((entry, index) => {
      if (!isRecord(entry)) return null;
      const id = toStringValue(entry.id) || `bucket-${index + 1}`;
      const label = toStringValue(entry.label) || toStringValue(entry.title) || `Bucket ${index + 1}`;
      return { id, label };
    })
    .filter((entry): entry is Bucket => entry !== null);

  const items: BucketItem[] = rawItems
    .map((entry, index) => {
      if (!isRecord(entry)) return null;
      const id = toStringValue(entry.id) || `item-${index + 1}`;
      const label = toStringValue(entry.label) || toStringValue(entry.text) || `Item ${index + 1}`;
      const correctBucketId =
        toStringValue(entry.correctBucketId) ||
        toStringValue(entry.bucketId) ||
        toStringValue(entry.targetId) ||
        toStringValue(entry.correctTargetId);
      if (!label || !correctBucketId) return null;
      return { id, label, correctBucketId };
    })
    .filter((entry): entry is BucketItem => entry !== null);

  if (buckets.length === 0 || items.length === 0) return null;
  return { buckets, items };
}

function parseMatchingData(activity: LessonInteractiveActivity): { left: MatchItem[]; right: MatchItem[]; pairs: MatchPair[] } | null {
  const data = isRecord(activity.data) ? activity.data : null;
  if (!data) return null;

  const leftRaw =
    (Array.isArray(data.left) ? data.left : null) ??
    (Array.isArray(data.prompts) ? data.prompts : null) ??
    [];
  const rightRaw =
    (Array.isArray(data.right) ? data.right : null) ??
    (Array.isArray(data.responses) ? data.responses : null) ??
    [];
  const pairsRaw = Array.isArray(data.pairs) ? data.pairs : [];

  const left: MatchItem[] = leftRaw
    .map((entry, index) => {
      if (!isRecord(entry)) return null;
      const id = toStringValue(entry.id) || `left-${index + 1}`;
      const label = toStringValue(entry.label) || toStringValue(entry.text);
      if (!label) return null;
      return { id, label };
    })
    .filter((entry): entry is MatchItem => entry !== null);

  const right: MatchItem[] = rightRaw
    .map((entry, index) => {
      if (!isRecord(entry)) return null;
      const id = toStringValue(entry.id) || `right-${index + 1}`;
      const label = toStringValue(entry.label) || toStringValue(entry.text);
      if (!label) return null;
      return { id, label };
    })
    .filter((entry): entry is MatchItem => entry !== null);

  const pairs: MatchPair[] = pairsRaw
    .map((entry) => {
      if (!isRecord(entry)) return null;
      const leftId = toStringValue(entry.leftId);
      const rightId = toStringValue(entry.rightId);
      if (!leftId || !rightId) return null;
      return { leftId, rightId };
    })
    .filter((entry): entry is MatchPair => entry !== null);

  if (left.length === 0 || right.length === 0 || pairs.length === 0) return null;
  return { left, right, pairs };
}

export default function TypedInteractiveActivity({
  moduleId,
  lessonId,
  lessonTitle,
  activities,
  fallbackPrompts,
}: TypedInteractiveActivityProps) {
  const activity =
    activities.find((entry) => typeof entry.type === "string" && SUPPORTED_TYPES.has(entry.type)) ?? null;

  const [syncState, setSyncState] = useState<ProgressSyncState>("idle");
  const completionPersistedRef = useRef(false);
  const [feedback, setFeedback] = useState<string>("");
  const [scorePercent, setScorePercent] = useState<number | null>(null);

  const bucketActivity = useMemo(
    () =>
      activity && (activity.type === "sorting_buckets" || activity.type === "drag_and_drop")
        ? parseBucketData(activity)
        : null,
    [activity],
  );
  const matchingActivity = useMemo(
    () => (activity && activity.type === "matching_pairs" ? parseMatchingData(activity) : null),
    [activity],
  );

  const [bucketAssignments, setBucketAssignments] = useState<Record<string, string>>({});
  const [matchingAssignments, setMatchingAssignments] = useState<Record<string, string>>({});

  const persistCompletion = async (scorePercentage: number) => {
    if (completionPersistedRef.current) return;
    completionPersistedRef.current = true;
    setSyncState("syncing");

    try {
      const response = await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lessonId, scorePercentage }),
      });

      if (!response.ok) {
        throw new Error(`Progress sync failed: ${response.status}`);
      }

      await deleteSyncedProgress(lessonId);
      setSyncState("synced");
    } catch (error) {
      console.error("Unable to sync typed activity progress online. Saving offline.", error);
      try {
        await saveOfflineProgress({
          lessonId,
          score: Math.round(scorePercentage * 10),
          totalQuestions: 10,
          completedAt: new Date().toISOString(),
          synced: false,
        });
      } catch (offlineError) {
        console.error("Unable to save typed activity progress offline.", offlineError);
      }
      setSyncState("queued");
    }
  };

  const submitScore = async (rawScore: number, metadata: Record<string, string | number | boolean>) => {
    const boundedScore = normalizeScore(rawScore);
    const percent = Math.round(boundedScore * 100);
    setScorePercent(percent);
    setFeedback(`Completed with ${percent}% mastery.`);

    void trackLearningEvent({
      eventType: "activity_interacted",
      moduleId,
      lessonId,
      payload: {
        action: "typed_activity_submitted",
        activityType: activity?.type ?? "unknown",
        rawScore: Math.round(rawScore * 100),
        boundedScore: percent,
        ...metadata,
      },
    });

    void trackLearningEvent({
      eventType: "lesson_completed",
      moduleId,
      lessonId,
      payload: {
        completionSource: "typed_interactive",
        masteryPercentage: percent,
        activityType: activity?.type ?? "unknown",
      },
    });

    await persistCompletion(boundedScore);
  };

  const handleBucketAssignment = (itemId: string, bucketId: string) => {
    setBucketAssignments((previous) => ({ ...previous, [itemId]: bucketId }));
    void trackLearningEvent({
      eventType: "activity_interacted",
      moduleId,
      lessonId,
      payload: {
        action: "bucket_assignment",
        activityType: activity?.type ?? "unknown",
        itemId,
        bucketId,
      },
    });
  };

  const handleMatchingAssignment = (leftId: string, rightId: string) => {
    setMatchingAssignments((previous) => ({ ...previous, [leftId]: rightId }));
    void trackLearningEvent({
      eventType: "activity_interacted",
      moduleId,
      lessonId,
      payload: {
        action: "pair_assignment",
        activityType: activity?.type ?? "matching_pairs",
        leftId,
        rightId,
      },
    });
  };

  if (!activity) {
    return (
      <section className="ui-soft-card rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
        Structured activities are not configured for this lesson yet.
      </section>
    );
  }

  if (!bucketActivity && !matchingActivity) {
    return (
      <section className="ui-soft-card space-y-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Activity Setup Needed</p>
        <p className="text-sm text-amber-900">
          The activity template is present, but its structured data is incomplete.
        </p>
        <div className="rounded-xl border border-amber-200 bg-surface p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Suggested prompts</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-foreground">
            {fallbackPrompts.slice(0, 4).map((prompt, index) => (
              <li key={`${lessonId}-fallback-prompt-${index}`}>{prompt}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="ui-soft-card space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 sm:p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Structured Interactive</p>
      <h3 className="text-lg font-bold text-foreground">{activity.title || lessonTitle}</h3>

      {bucketActivity ? (
        <div className="space-y-3 rounded-xl border border-amber-200 bg-surface p-4">
          <p className="text-sm text-foreground">
            Assign each item to the correct bucket, then check your answers.
          </p>
          {bucketActivity.items.map((item) => (
            <article key={item.id} className="rounded-lg border border-amber-100 bg-amber-50/40 p-3">
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <select
                className="ui-focus-ring mt-2 w-full rounded-md border border-amber-300 bg-surface px-3 py-2 text-sm"
                aria-label={`Choose bucket for ${item.label}`}
                value={bucketAssignments[item.id] ?? ""}
                onChange={(event) => handleBucketAssignment(item.id, event.target.value)}
              >
                <option value="">Select bucket</option>
                {bucketActivity.buckets.map((bucket) => (
                  <option key={bucket.id} value={bucket.id}>
                    {bucket.label}
                  </option>
                ))}
              </select>
            </article>
          ))}
          <button
            type="button"
            onClick={() => {
              const total = bucketActivity.items.length;
              const assigned = bucketActivity.items.filter((item) => bucketAssignments[item.id]).length;
              if (assigned < total) {
                setFeedback(`Assign all items before checking (${assigned}/${total} assigned).`);
                return;
              }
              const correct = bucketActivity.items.filter(
                (item) => bucketAssignments[item.id] === item.correctBucketId,
              ).length;
              const rawScore = total > 0 ? correct / total : 0;
              void submitScore(rawScore, {
                totalItems: total,
                correctItems: correct,
              });
            }}
            className="ui-soft-button ui-focus-ring rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Check Answers
          </button>
        </div>
      ) : null}

      {matchingActivity ? (
        <div className="space-y-3 rounded-xl border border-amber-200 bg-surface p-4">
          <p className="text-sm text-foreground">
            Match each prompt on the left with the correct response.
          </p>
          {matchingActivity.left.map((leftItem) => (
            <article key={leftItem.id} className="rounded-lg border border-amber-100 bg-amber-50/40 p-3">
              <p className="text-sm font-semibold text-foreground">{leftItem.label}</p>
              <select
                className="ui-focus-ring mt-2 w-full rounded-md border border-amber-300 bg-surface px-3 py-2 text-sm"
                aria-label={`Choose match for ${leftItem.label}`}
                value={matchingAssignments[leftItem.id] ?? ""}
                onChange={(event) => handleMatchingAssignment(leftItem.id, event.target.value)}
              >
                <option value="">Select match</option>
                {matchingActivity.right.map((rightItem) => (
                  <option key={rightItem.id} value={rightItem.id}>
                    {rightItem.label}
                  </option>
                ))}
              </select>
            </article>
          ))}
          <button
            type="button"
            onClick={() => {
              const total = matchingActivity.pairs.length;
              const assigned = matchingActivity.left.filter((item) => matchingAssignments[item.id]).length;
              if (assigned < matchingActivity.left.length) {
                setFeedback(
                  `Match all prompts before checking (${assigned}/${matchingActivity.left.length} matched).`,
                );
                return;
              }
              const correct = matchingActivity.pairs.filter(
                (pair) => matchingAssignments[pair.leftId] === pair.rightId,
              ).length;
              const rawScore = total > 0 ? correct / total : 0;
              void submitScore(rawScore, {
                totalPairs: total,
                correctPairs: correct,
              });
            }}
            className="ui-soft-button ui-focus-ring rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
          >
            Check Matches
          </button>
        </div>
      ) : null}

      {feedback ? (
        <p role="status" className="rounded-md border border-amber-300 bg-surface px-3 py-2 text-sm text-amber-900">{feedback}</p>
      ) : null}
      {scorePercent !== null ? <p className="text-xs text-zinc-600">Mastery score: {scorePercent}%</p> : null}
      {syncState === "syncing" ? <p role="status" className="text-xs text-zinc-500">Saving your progress...</p> : null}
      {syncState === "synced" ? <p role="status" className="text-xs text-emerald-700">Progress saved to your account.</p> : null}
      {syncState === "queued" ? (
        <p role="status" className="text-xs text-amber-700">Progress saved offline and will sync when your connection is restored.</p>
      ) : null}
    </section>
  );
}
