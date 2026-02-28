"use client";

import Link from "next/link";
import SpeakButton from "./speak-button";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { usePreReaderMode } from "./pre-reader-mode";

type QuestionBubbleProps = {
  topicId: string;
  prompt: string;
  promptIndex: number;
  href: string;
  glowColor: string;
  borderColor: string;
  /** Suggested module title shown as a small hint below the question */
  moduleName?: string;
  /** Stagger index for entrance animation */
  index: number;
};

function promptToIcon(prompt: string) {
  const normalized = prompt.toLowerCase();
  if (normalized.includes("tree") || normalized.includes("plant")) return "🌳";
  if (normalized.includes("ocean") || normalized.includes("fish")) return "🐠";
  if (normalized.includes("space") || normalized.includes("rocket")) return "🚀";
  if (normalized.includes("number") || normalized.includes("count")) return "🔢";
  if (normalized.includes("story") || normalized.includes("read")) return "📖";
  if (normalized.includes("world") || normalized.includes("map")) return "🌍";
  return "✨";
}

export default function QuestionBubble({
  topicId,
  prompt,
  promptIndex,
  href,
  glowColor,
  borderColor,
  moduleName,
  index,
}: QuestionBubbleProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const promptIcon = promptToIcon(prompt);

  return (
    <article
      className="explore-bubble explore-scene-enter explore-card-elevated group relative flex flex-col items-center gap-3 rounded-[28px] border-2 bg-white/90 px-5 py-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99] sm:px-6 sm:py-6"
      style={
        {
          borderColor,
          "--glow": glowColor,
          animationDelay: `${index * 100 + 100}ms`,
        } as React.CSSProperties
      }
    >
      {isPreReaderMode ? (
        <>
          <span className="text-5xl" aria-hidden="true">
            {promptIcon}
          </span>
          <p className="sr-only">{prompt}</p>
        </>
      ) : (
        <p className="text-center text-lg font-bold leading-snug text-zinc-900 sm:text-xl">
          {prompt}
        </p>
      )}

      {/* Action row */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <SpeakButton
          text={prompt}
          label={isPreReaderMode ? "🔊" : "Hear It"}
          className={
            isPreReaderMode
              ? "h-12 w-12 rounded-full border-white/80 bg-white px-0 py-0 text-lg"
              : "text-xs"
          }
        />
        <Link
          href={href}
          onClick={() => {
            trackExplorerInteraction({
              surface: "topic",
              action: "question_selected",
              topicId,
              destination: href,
              prompt,
              promptIndex,
            });
          }}
          className={`ui-focus-ring inline-flex min-h-11 items-center rounded-full px-5 py-2.5 font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:brightness-110 active:scale-95 ${isPreReaderMode ? "text-base" : "text-sm"}`}
          style={{ backgroundColor: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">➡️</span>
              <span className="sr-only">Explore this question</span>
            </>
          ) : (
            "Explore This"
          )}
        </Link>
      </div>

      {/* Optional module hint — subtle, for older kids */}
      {!isPreReaderMode && moduleName ? (
        <p className="mt-1 text-center text-xs text-zinc-500">
          Adventure: {moduleName}
        </p>
      ) : null}

      {/* Decorative tail (speech bubble pointer) */}
      <div
        className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 bg-white/90"
        style={{ borderColor }}
        aria-hidden="true"
      />
    </article>
  );
}
