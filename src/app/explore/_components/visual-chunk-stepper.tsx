"use client";

import { useState } from "react";
import type { LessonChunk } from "@/lib/modules/types";
import SpeakButton from "./speak-button";
import { usePreReaderMode } from "./pre-reader-mode";

type VisualChunkStepperProps = {
  chunks: LessonChunk[];
  glowColor: string;
  borderColor: string;
  onComplete: () => void;
};

const kindLabels: Record<string, string> = {
  intro: "Let's Begin",
  concept: "Key Idea",
  example: "Try This",
  practice: "Your Turn",
  recap: "Remember",
};

const kindIcons: Record<string, string> = {
  intro: "👋",
  concept: "💡",
  example: "🔍",
  practice: "✏️",
  recap: "🧠",
};

export default function VisualChunkStepper({
  chunks,
  glowColor,
  borderColor,
  onComplete,
}: VisualChunkStepperProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const chunk = chunks[currentIndex];
  const isLast = currentIndex === chunks.length - 1;
  const progress = chunks.length > 1 ? ((currentIndex + 1) / chunks.length) * 100 : 100;

  function handleNext() {
    if (isLast) {
      onComplete();
    } else {
      setDirection("next");
      setCurrentIndex((prev) => prev + 1);
    }
  }

  function handlePrev() {
    setDirection("prev");
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }

  if (!chunk) return null;

  const kindLabel = kindLabels[chunk.kind ?? ""] ?? "Learn";
  const kindIcon = kindIcons[chunk.kind ?? ""] ?? "📘";

  return (
    <div className="explore-scene-enter flex flex-col items-center gap-5">
      {/* Progress dots — interactive step indicators */}
      <div className="flex items-center gap-2" role="progressbar" aria-valuenow={currentIndex + 1} aria-valuemax={chunks.length}>
        {chunks.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setDirection(i > currentIndex ? "next" : "prev");
              setCurrentIndex(i);
            }}
            className="rounded-full border-2 transition-all duration-300"
            style={{
              borderColor: i <= currentIndex ? glowColor : borderColor,
              backgroundColor: i <= currentIndex ? glowColor : "transparent",
              width: i === currentIndex ? 28 : 12,
              height: 12,
            }}
            aria-label={`Step ${i + 1} of ${chunks.length}`}
          />
        ))}
      </div>

      {/* Progress bar — thicker */}
      <div className="h-3 w-full max-w-md overflow-hidden rounded-full bg-zinc-100">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, backgroundColor: glowColor }}
        />
      </div>

      {/* Chunk card — elevated with kind-aware design */}
      <article
        key={currentIndex}
        className="explore-card-pop explore-card-elevated w-full max-w-2xl rounded-3xl border-2 bg-white/90 p-6 backdrop-blur-sm sm:p-8"
        style={{
          borderColor,
          animationDelay: "0ms",
          ["--animation-direction" as string]: direction === "next" ? "1" : "-1",
        }}
      >
        {/* Kind badge with icon */}
        <div className="flex items-center gap-2">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white"
            style={{ backgroundColor: glowColor }}
          >
            {isPreReaderMode ? (
              <>
                <span aria-hidden="true">{kindIcon}</span>
                <span className="sr-only">{kindLabel}</span>
              </>
            ) : (
              <>
                <span aria-hidden="true">{kindIcon}</span>
                {kindLabel}
              </>
            )}
          </span>
          {/* Step counter pill */}
          <span
            className={`rounded-full border px-2.5 py-0.5 text-xs font-bold ${isPreReaderMode ? "sr-only" : ""}`}
            style={{ borderColor, color: glowColor }}
          >
            {currentIndex + 1} of {chunks.length}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
          {chunk.title}
        </h3>

        {/* Content — large, readable text */}
        <div className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
          {chunk.content.split("\n").map((line, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>
              {line}
            </p>
          ))}
        </div>

        {/* Speak button */}
        <div className="mt-5">
          <SpeakButton
            text={`${chunk.title}. ${chunk.content}`}
            label={isPreReaderMode ? "🔊" : "Read Aloud"}
          />
        </div>
      </article>

      {/* Navigation — larger buttons with press feedback */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="ui-focus-ring inline-flex min-h-14 items-center rounded-full border-2 px-6 py-3 text-base font-bold transition-all duration-200 active:scale-95 disabled:opacity-30"
          style={{ borderColor, color: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">◀</span>
              <span className="sr-only">Back</span>
            </>
          ) : (
            "Back"
          )}
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="ui-focus-ring inline-flex min-h-14 items-center rounded-full px-8 py-3 text-base font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 hover:shadow-xl active:scale-95"
          style={{ backgroundColor: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">{isLast ? "🎉" : "▶"}</span>
              <span className="sr-only">
                {isLast ? "Done, next step" : "Next"}
              </span>
            </>
          ) : (
            isLast ? "Done! Next Step" : "Next"
          )}
        </button>
      </div>
    </div>
  );
}
