"use client";

import Link from "next/link";
import { toExploreLessonPath } from "@/lib/routing/paths";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { usePreReaderMode } from "./pre-reader-mode";

type ResumeLessonLinkProps = {
  topicId?: string;
  moduleId: string;
  lessonId: string;
  lessonTitle: string;
  glowColor: string;
};

export default function ResumeLessonLink({
  topicId,
  moduleId,
  lessonId,
  lessonTitle,
  glowColor,
}: ResumeLessonLinkProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const destination = toExploreLessonPath(lessonId, topicId);

  return (
    <Link
      href={destination}
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
      className="ui-focus-ring explore-scene-enter inline-flex min-h-14 items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:brightness-110 active:scale-95"
      style={{ backgroundColor: glowColor }}
    >
      {isPreReaderMode ? (
        <>
          <span aria-hidden="true">⏯</span>
          <span className="sr-only">Resume lesson</span>
        </>
      ) : (
        `Resume: ${lessonTitle}`
      )}
    </Link>
  );
}
