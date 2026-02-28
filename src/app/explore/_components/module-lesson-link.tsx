"use client";

import Link from "next/link";
import { toExploreLessonPath } from "@/lib/routing/paths";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { usePreReaderMode } from "./pre-reader-mode";

type ModuleLessonLinkProps = {
  topicId?: string;
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
  lessonType: string;
  durationMinutes: number;
  index: number;
  glowColor: string;
  borderColor: string;
};

function lessonTypeIcon(lessonType: string) {
  const normalized = lessonType.toLowerCase();
  if (normalized.includes("video")) return "🎬";
  if (normalized.includes("interactive")) return "🧩";
  if (normalized.includes("quiz")) return "✅";
  return "📘";
}

export default function ModuleLessonLink({
  topicId,
  moduleId,
  lessonId,
  lessonTitle,
  lessonType,
  durationMinutes,
  index,
  glowColor,
  borderColor,
}: ModuleLessonLinkProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const destination = toExploreLessonPath(lessonId, topicId);
  const lessonIcon = lessonTypeIcon(lessonType);
  const stepNumber = index + 1;

  return (
    <Link
      href={destination}
      className="explore-scene-enter ui-focus-ring block rounded-2xl"
      style={{ animationDelay: `${index * 70 + 90}ms` }}
      onClick={() => {
        trackExplorerInteraction({
          surface: "module",
          action: "module_lesson_selected",
          topicId,
          moduleId,
          selectedLessonId: lessonId,
          destination,
        });
      }}
    >
      <article
        className={`explore-card-elevated group rounded-2xl border-2 bg-white/90 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.99] ${isPreReaderMode ? "flex items-center justify-between px-4 py-4" : "flex items-center gap-4 px-4 py-3.5 sm:px-5"}`}
        style={{ borderColor }}
      >
        {isPreReaderMode ? (
          <div className="flex items-center gap-3">
            <span
              className="inline-flex h-14 w-14 items-center justify-center rounded-full text-2xl text-white shadow-md"
              style={{ backgroundColor: glowColor }}
              aria-hidden="true"
            >
              {lessonIcon}
            </span>
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-lg font-black"
              style={{ borderColor, color: glowColor }}
              aria-hidden="true"
            >
              {stepNumber}
            </span>
            <span className="sr-only">
              {lessonTitle}. {lessonType}. {durationMinutes} minutes.
            </span>
          </div>
        ) : (
          <>
            {/* Step number + icon column */}
            <div className="relative flex items-center">
              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-full text-lg text-white shadow-md transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: glowColor }}
                aria-hidden="true"
              >
                {lessonIcon}
              </span>
              <span
                className="absolute -bottom-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-zinc-800 text-[10px] font-black text-white"
                aria-hidden="true"
              >
                {stepNumber}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-bold text-zinc-900 sm:text-base">
                {lessonTitle}
              </p>
              <p className="mt-0.5 text-xs text-zinc-500">
                {lessonType} • {durationMinutes} min
              </p>
            </div>
          </>
        )}

        <div>
          <span
            className="inline-flex min-h-10 items-center rounded-full px-4 py-2 text-sm font-bold text-white shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:brightness-110"
            style={{ backgroundColor: glowColor }}
          >
            {isPreReaderMode ? (
              <>
                <span aria-hidden="true">▶</span>
                <span className="sr-only">Start lesson</span>
              </>
            ) : (
              "Start"
            )}
          </span>
        </div>
      </article>
    </Link>
  );
}
