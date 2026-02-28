"use client";

import { useCallback, useMemo, useState } from "react";
import type { InteractiveActivity } from "@/lib/modules/types";
import SpeakButton from "./speak-button";
import { usePreReaderMode } from "./pre-reader-mode";

type VisualActivityProps = {
  activity: InteractiveActivity;
  glowColor: string;
  borderColor: string;
  onComplete: () => void;
};

type BucketData = {
  buckets: Array<{ id: string; label: string }>;
  items: Array<{ id: string; label: string; correctBucketId: string }>;
};

type MatchingData = {
  pairs: Array<{ left: string; right: string }>;
  left?: Array<{ id: string; label: string }>;
  right?: Array<{ id: string; label: string }>;
};

function isBucketData(data: unknown): data is BucketData {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return Array.isArray(d.buckets) && Array.isArray(d.items);
}

function isMatchingData(data: unknown): data is MatchingData {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;
  return Array.isArray(d.pairs) || (Array.isArray(d.left) && Array.isArray(d.right));
}

function stableHash(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) % 2147483647;
  }
  return hash;
}

export default function VisualActivity({
  activity,
  glowColor,
  borderColor,
  onComplete,
}: VisualActivityProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const isBucket = activity.type === "sorting_buckets" && isBucketData(activity.data);
  const isMatching =
    (activity.type === "matching_pairs" || activity.type === "drag_and_drop") &&
    isMatchingData(activity.data);

  if (isBucket) {
    return (
      <BucketActivity
        activity={activity}
        data={activity.data as BucketData}
        glowColor={glowColor}
        borderColor={borderColor}
        isPreReaderMode={isPreReaderMode}
        onComplete={onComplete}
      />
    );
  }

  if (isMatching) {
    return (
      <MatchingActivity
        activity={activity}
        data={activity.data as MatchingData}
        glowColor={glowColor}
        borderColor={borderColor}
        isPreReaderMode={isPreReaderMode}
        onComplete={onComplete}
      />
    );
  }

  // Fallback — show activity description + instructions
  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      <article
        className="explore-card-elevated w-full max-w-2xl rounded-3xl border-2 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
        style={{ borderColor }}
      >
        <h3 className="text-2xl font-extrabold text-zinc-900">
          {activity.title}
        </h3>
        <p
          className={`mt-2 text-base text-zinc-700 ${isPreReaderMode ? "sr-only" : ""}`}
        >
          {activity.description}
        </p>
        {activity.instructions ? (
          <p
            className={`mt-3 text-sm text-zinc-600 ${isPreReaderMode ? "sr-only" : ""}`}
          >
            {activity.instructions}
          </p>
        ) : null}
        <SpeakButton
          text={`${activity.title}. ${activity.description}`}
          label={isPreReaderMode ? "🔊" : "Read Aloud"}
        />
      </article>
      <button
        type="button"
        onClick={onComplete}
        className="ui-focus-ring inline-flex min-h-12 items-center rounded-full px-6 py-2.5 text-sm font-bold text-white shadow-md hover:brightness-110"
        style={{ backgroundColor: glowColor }}
      >
        {isPreReaderMode ? (
          <>
            <span aria-hidden="true">▶</span>
            <span className="sr-only">Continue</span>
          </>
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
}

/* ── Bucket Sorting Activity ── */

function BucketActivity({
  activity,
  data,
  glowColor,
  borderColor,
  isPreReaderMode,
  onComplete,
}: {
  activity: InteractiveActivity;
  data: BucketData;
  glowColor: string;
  borderColor: string;
  isPreReaderMode: boolean;
  onComplete: () => void;
}) {
  const [assignments, setAssignments] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [scoreText, setScoreText] = useState("");

  const handleAssign = useCallback((itemId: string, bucketId: string) => {
    setAssignments((prev) => ({ ...prev, [itemId]: bucketId }));
    setActiveItem(null);
  }, []);

  function handleCheck() {
    let correct = 0;
    for (const item of data.items) {
      if (assignments[item.id] === item.correctBucketId) correct++;
    }
    const pct = Math.round((correct / data.items.length) * 100);
    setScoreText(`${correct}/${data.items.length} correct (${pct}%)`);
    setChecked(true);
  }

  const allAssigned = Object.keys(assignments).length >= data.items.length;

  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      <article
        className="explore-card-elevated w-full max-w-3xl rounded-3xl border-2 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
        style={{ borderColor }}
      >
        <h3 className="text-xl font-extrabold text-zinc-900">{activity.title}</h3>
        <p className={`mt-1 text-sm text-zinc-600 ${isPreReaderMode ? "sr-only" : ""}`}>
          {isPreReaderMode ? activity.title : activity.description}
        </p>

        {/* Bucket legend */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {data.buckets.map((bucket, i) => (
            <span
              key={bucket.id}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold text-white"
              style={{
                backgroundColor: getBucketColor(glowColor, i, data.buckets.length),
              }}
            >
              {bucket.label}
            </span>
          ))}
        </div>

        {/* Items — tap to expand, then pick bucket */}
        <div className="mt-5 space-y-3">
          {data.items.map((item, itemIdx) => {
            const assignedBucket = assignments[item.id];
            const bucketObj = data.buckets.find((b) => b.id === assignedBucket);
            const bucketIdx = data.buckets.findIndex((b) => b.id === assignedBucket);
            const isActive = activeItem === item.id;
            const isItemCorrect = checked && assignedBucket === item.correctBucketId;
            const isItemWrong = checked && assignedBucket !== item.correctBucketId;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                  isItemCorrect ? "explore-correct-bounce" : ""
                } ${isItemWrong ? "explore-wrong-shake" : ""}`}
                style={{
                  animationDelay: `${itemIdx * 60}ms`,
                  borderColor: isItemCorrect
                    ? "#22c55e"
                    : isItemWrong
                      ? "#ef4444"
                      : isActive
                        ? glowColor
                        : borderColor,
                  backgroundColor: isItemCorrect
                    ? "#f0fdf4"
                    : isItemWrong
                      ? "#fef2f2"
                      : isActive
                        ? `${glowColor}08`
                        : "transparent",
                }}
              >
                {/* Item header row */}
                <button
                  type="button"
                  onClick={() => {
                    if (!checked) setActiveItem(isActive ? null : item.id);
                  }}
                  disabled={checked}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span className="text-lg font-bold text-zinc-900">
                    {item.label}
                  </span>
                  {bucketObj && !isActive ? (
                    <span
                      className="ml-auto rounded-full px-3 py-1 text-xs font-bold text-white"
                      style={{
                        backgroundColor: getBucketColor(glowColor, bucketIdx, data.buckets.length),
                      }}
                    >
                      {bucketObj.label}
                    </span>
                  ) : null}
                  {!assignedBucket && !isActive && !checked ? (
                    <span className="ml-auto text-xs font-semibold" style={{ color: glowColor }}>
                      {isPreReaderMode ? "👆" : "Tap to sort"}
                    </span>
                  ) : null}
                  {checked && (
                    <span className="ml-auto text-lg" aria-label={isItemCorrect ? "Correct" : "Incorrect"}>
                      {isItemCorrect ? "✓" : "✗"}
                    </span>
                  )}
                </button>

                {/* Bucket options — tappable pills */}
                {isActive && !checked ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {data.buckets.map((bucket, bIdx) => (
                      <button
                        key={bucket.id}
                        type="button"
                        onClick={() => handleAssign(item.id, bucket.id)}
                        className="explore-card-pop ui-focus-ring inline-flex min-h-12 items-center rounded-2xl border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95"
                        style={{
                          animationDelay: `${bIdx * 60}ms`,
                          borderColor: getBucketColor(glowColor, bIdx, data.buckets.length),
                          color: getBucketColor(glowColor, bIdx, data.buckets.length),
                          backgroundColor: assignedBucket === bucket.id
                            ? `${getBucketColor(glowColor, bIdx, data.buckets.length)}18`
                            : "white",
                        }}
                      >
                        {bucket.label}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {checked ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {scoreText.startsWith(`${data.items.length}/`) ? "🌟" : "💪"}
            </span>
            <p className="text-lg font-extrabold text-zinc-900">{scoreText}</p>
          </div>
        ) : null}
      </article>

      <button
        type="button"
        onClick={checked ? onComplete : handleCheck}
        disabled={!checked && !allAssigned}
        className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 disabled:opacity-40"
        style={{ backgroundColor: glowColor }}
      >
        {isPreReaderMode ? (
          <>
            <span aria-hidden="true">{checked ? "▶" : "✅"}</span>
            <span className="sr-only">
              {checked ? "Continue" : "Check answers"}
            </span>
          </>
        ) : checked ? (
          "Continue"
        ) : (
          "Check Answers"
        )}
      </button>
    </div>
  );
}

/* ── Matching Pairs Activity ── */

function MatchingActivity({
  activity,
  data,
  glowColor,
  borderColor,
  isPreReaderMode,
  onComplete,
}: {
  activity: InteractiveActivity;
  data: MatchingData;
  glowColor: string;
  borderColor: string;
  isPreReaderMode: boolean;
  onComplete: () => void;
}) {
  const pairs = useMemo(() => {
    if (data.pairs && data.pairs.length > 0) return data.pairs;
    if (data.left && data.right) {
      return data.left.map((l, i) => ({
        left: l.label,
        right: data.right?.[i]?.label ?? "",
      }));
    }
    return [];
  }, [data]);

  const rightOptions = useMemo(() => {
    const seed = `${activity.id}|${activity.title}`;
    return pairs
      .map((pair, index) => ({
        value: pair.right,
        rank: stableHash(`${seed}|${pair.right}|${index}`),
      }))
      .sort((left, right) => left.rank - right.rank || left.value.localeCompare(right.value))
      .map((entry) => entry.value);
  }, [pairs, activity.id, activity.title]);

  const [assignments, setAssignments] = useState<Record<number, string>>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [scoreText, setScoreText] = useState("");

  const handleAssign = useCallback((pairIndex: number, rightValue: string) => {
    setAssignments((prev) => ({ ...prev, [pairIndex]: rightValue }));
    setActiveIndex(null);
  }, []);

  function handleCheck() {
    let correct = 0;
    for (let i = 0; i < pairs.length; i++) {
      if (assignments[i] === pairs[i].right) correct++;
    }
    const pct = Math.round((correct / pairs.length) * 100);
    setScoreText(`${correct}/${pairs.length} matched (${pct}%)`);
    setChecked(true);
  }

  // Track which right options have been used
  const usedOptions = new Set(Object.values(assignments));
  const allAssigned = Object.keys(assignments).length >= pairs.length;

  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      <article
        className="explore-card-elevated w-full max-w-3xl rounded-3xl border-2 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
        style={{ borderColor }}
      >
        <h3 className="text-xl font-extrabold text-zinc-900">{activity.title}</h3>
        <p className={`mt-1 text-sm text-zinc-600 ${isPreReaderMode ? "sr-only" : ""}`}>
          {activity.description}
        </p>

        <div className="mt-5 space-y-3">
          {pairs.map((pair, i) => {
            const isMatch = checked && assignments[i] === pair.right;
            const isMismatch = checked && assignments[i] !== pair.right;
            const isActive = activeIndex === i;
            const assignedValue = assignments[i];

            return (
              <div
                key={i}
                className={`rounded-2xl border-2 p-4 transition-all duration-300 ${
                  isMatch ? "explore-correct-bounce" : ""
                } ${isMismatch ? "explore-wrong-shake" : ""}`}
                style={{
                  animationDelay: `${i * 60}ms`,
                  borderColor: isMatch
                    ? "#22c55e"
                    : isMismatch
                      ? "#ef4444"
                      : isActive
                        ? glowColor
                        : borderColor,
                  backgroundColor: isMatch
                    ? "#f0fdf4"
                    : isMismatch
                      ? "#fef2f2"
                      : isActive
                        ? `${glowColor}08`
                        : "transparent",
                }}
              >
                {/* Left item + matched badge */}
                <button
                  type="button"
                  onClick={() => {
                    if (!checked) setActiveIndex(isActive ? null : i);
                  }}
                  disabled={checked}
                  className="flex w-full items-center gap-3 text-left"
                >
                  <span className="text-lg font-bold text-zinc-900">
                    {pair.left}
                  </span>
                  {assignedValue && !isActive ? (
                    <span
                      className="ml-auto rounded-full border-2 px-3 py-1 text-xs font-bold"
                      style={{ borderColor: glowColor, color: glowColor }}
                    >
                      {assignedValue}
                    </span>
                  ) : null}
                  {!assignedValue && !isActive && !checked ? (
                    <span className="ml-auto text-xs font-semibold" style={{ color: glowColor }}>
                      {isPreReaderMode ? "👆" : "Tap to match"}
                    </span>
                  ) : null}
                  {checked && (
                    <span className="ml-auto text-lg" aria-label={isMatch ? "Correct" : "Incorrect"}>
                      {isMatch ? "✓" : "✗"}
                    </span>
                  )}
                </button>

                {/* Right options — tappable pills */}
                {isActive && !checked ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {rightOptions.map((opt, optIdx) => {
                      const isUsed = usedOptions.has(opt) && assignments[i] !== opt;
                      const isSelectedHere = assignments[i] === opt;
                      return (
                        <button
                          key={`${opt}-${optIdx}`}
                          type="button"
                          onClick={() => handleAssign(i, opt)}
                          disabled={isUsed}
                          className={`explore-card-pop ui-focus-ring inline-flex min-h-12 items-center rounded-2xl border-2 px-5 py-2.5 text-sm font-bold transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100`}
                          style={{
                            animationDelay: `${optIdx * 50}ms`,
                            borderColor: isSelectedHere ? glowColor : borderColor,
                            color: isSelectedHere ? "white" : "inherit",
                            backgroundColor: isSelectedHere ? glowColor : "white",
                          }}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {checked ? (
          <div className="mt-5 flex items-center justify-center gap-2">
            <span className="text-2xl" aria-hidden="true">
              {scoreText.startsWith(`${pairs.length}/`) ? "🌟" : "💪"}
            </span>
            <p className="text-lg font-extrabold text-zinc-900">{scoreText}</p>
          </div>
        ) : null}
      </article>

      <button
        type="button"
        onClick={checked ? onComplete : handleCheck}
        disabled={!checked && !allAssigned}
        className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95 disabled:opacity-40"
        style={{ backgroundColor: glowColor }}
      >
        {isPreReaderMode ? (
          <>
            <span aria-hidden="true">{checked ? "▶" : "✅"}</span>
            <span className="sr-only">
              {checked ? "Continue" : "Check matches"}
            </span>
          </>
        ) : checked ? (
          "Continue"
        ) : (
          "Check Matches"
        )}
      </button>
    </div>
  );
}

/* ── Helpers ── */

/** Generate distinct bucket colors by shifting hue from the base glowColor */
function getBucketColor(baseHex: string, index: number, total: number): string {
  const hueShift = total <= 1 ? 0 : (index / total) * 120; // spread across 120° of hue
  return shiftHue(baseHex, hueShift);
}

function shiftHue(hex: string, degrees: number): string {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
    else if (max === g) h = ((b - r) / d + 2) / 6;
    else h = ((r - g) / d + 4) / 6;
  }

  h = ((h * 360 + degrees) % 360) / 360;
  s = Math.min(s * 1.1, 1); // slightly boost saturation

  // HSL to RGB
  const hue2rgb = (p: number, q: number, t: number) => {
    const tt = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
    if (tt < 1 / 6) return p + (q - p) * 6 * tt;
    if (tt < 1 / 2) return q;
    if (tt < 2 / 3) return p + (q - p) * (2 / 3 - tt) * 6;
    return p;
  };

  const q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p2 = 2 * l - q2;
  const rr = Math.round(hue2rgb(p2, q2, h + 1 / 3) * 255);
  const gg = Math.round(hue2rgb(p2, q2, h) * 255);
  const bb = Math.round(hue2rgb(p2, q2, h - 1 / 3) * 255);

  return `#${rr.toString(16).padStart(2, "0")}${gg.toString(16).padStart(2, "0")}${bb.toString(16).padStart(2, "0")}`;
}
