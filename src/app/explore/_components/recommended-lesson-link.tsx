"use client";

import Link from "next/link";
import { toExploreLessonPath } from "@/lib/routing/paths";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import {
  getRecommendationMeta,
  type RecommendationType,
} from "@/lib/explorer/recommendations";
import { usePreReaderMode } from "./pre-reader-mode";

type RecommendedLessonLinkProps = {
  topicId?: string;
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
  suggestionType: RecommendationType;
  glowColor: string;
};

export default function RecommendedLessonLink({
  topicId,
  moduleId,
  lessonId,
  lessonTitle,
  suggestionType,
  glowColor,
}: RecommendedLessonLinkProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const destination = toExploreLessonPath(lessonId, topicId);
  const { label, hint } = getRecommendationMeta(suggestionType);

  return (
    <Link
      href={destination}
      onClick={() => {
        trackExplorerInteraction({
          surface: "module",
          action: "module_recommended_selected",
          topicId,
          moduleId,
          selectedLessonId: lessonId,
          suggestionType,
          destination,
        });
      }}
      className="ui-focus-ring explore-scene-enter explore-card-elevated inline-flex min-h-14 max-w-full items-center rounded-2xl border-2 bg-white/90 px-5 py-3 text-sm font-bold text-zinc-900 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg active:scale-[0.99]"
      style={{ borderColor: glowColor }}
    >
      {isPreReaderMode ? (
        <>
          <span aria-hidden="true">⭐</span>
          <span className="sr-only">Suggested lesson</span>
        </>
      ) : (
        <span className="flex items-center gap-3 text-left">
          <span
            className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-extrabold text-white"
            style={{ backgroundColor: glowColor }}
          >
            {label}
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="max-w-64 truncate">{lessonTitle}</span>
            <span className="text-xs font-medium text-zinc-600">{hint}</span>
          </span>
        </span>
      )}
    </Link>
  );
}
