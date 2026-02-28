"use client";

import Link from "next/link";
import type { LearningModule } from "@/lib/modules/types";
import { toExploreModulePath } from "@/lib/routing/paths";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { usePreReaderMode } from "./pre-reader-mode";

type AdventureCardLinkProps = {
  topicId: string;
  moduleEntry: LearningModule;
  index: number;
  glowColor: string;
  borderColor: string;
};

function subjectIcon(subject: string) {
  const normalized = subject.toLowerCase();
  if (normalized.includes("math")) return "🔢";
  if (normalized.includes("science")) return "🧪";
  if (normalized.includes("language") || normalized.includes("reading")) {
    return "📚";
  }
  if (normalized.includes("social")) return "🌍";
  if (normalized.includes("art")) return "🎨";
  return "✨";
}

export default function AdventureCardLink({
  topicId,
  moduleEntry,
  index,
  glowColor,
  borderColor,
}: AdventureCardLinkProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const destination = toExploreModulePath(moduleEntry.id, topicId);

  return (
    <Link
      href={destination}
      className="explore-scene-enter ui-focus-ring block rounded-2xl"
      style={{ animationDelay: `${index * 60 + 100}ms` }}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "module_selected",
          topicId,
          moduleId: moduleEntry.id,
          destination,
        });
      }}
    >
      <article
        className="explore-card-elevated flex h-full flex-col rounded-2xl border-2 bg-white/90 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-[0.99]"
        style={{ borderColor }}
      >
        <p
          className={`text-xs font-bold uppercase tracking-wide text-zinc-500 ${isPreReaderMode ? "sr-only" : ""}`}
        >
          {moduleEntry.subject}
        </p>
        <h3
          className={`font-bold text-zinc-900 ${isPreReaderMode ? "mt-2 text-base" : "mt-1 text-lg"}`}
        >
          {moduleEntry.title}
        </h3>
        {isPreReaderMode ? (
          <div className="mt-3 flex flex-1 items-center justify-center">
            <span className="text-4xl" aria-hidden="true">
              {subjectIcon(moduleEntry.subject)}
            </span>
          </div>
        ) : (
          <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-700">
            {moduleEntry.description}
          </p>
        )}
        <span
          className={`mt-3 inline-flex items-center rounded-full px-4 py-2 font-bold text-white shadow-sm transition-all duration-200 group-hover:shadow-md group-hover:brightness-110 ${isPreReaderMode ? "text-base" : "text-sm"}`}
          style={{ backgroundColor: glowColor }}
        >
          {isPreReaderMode ? (
            <>
              <span aria-hidden="true">➡️</span>
              <span className="sr-only">Open adventure</span>
            </>
          ) : (
            "Open Adventure"
          )}
        </span>
      </article>
    </Link>
  );
}
