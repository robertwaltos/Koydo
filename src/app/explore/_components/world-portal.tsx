"use client";

import Image from "next/image";
import Link from "next/link";
import type { WorldScene } from "@/lib/explorer/scenes";
import type { ExplorerTopic } from "@/lib/explorer/topics";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import { usePreReaderMode } from "./pre-reader-mode";

type WorldPortalProps = {
  fromTopicId: string;
  topic: ExplorerTopic;
  scene: WorldScene;
  index: number;
};

/**
 * A compact, visually rich portal that links to another Explorer world.
 * Used in the "Try Another Picture" section of a topic detail page.
 */
export default function WorldPortal({
  fromTopicId,
  topic,
  scene,
  index,
}: WorldPortalProps) {
  const { isPreReaderMode } = usePreReaderMode();
  const destination = `/explore/${topic.id}`;

  return (
    <Link
      href={destination}
      className="explore-scene-enter ui-focus-ring group block rounded-2xl"
      style={{ animationDelay: `${index * 80 + 200}ms` }}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "world_portal_selected",
          topicId: fromTopicId,
          targetTopicId: topic.id,
          destination,
        });
      }}
    >
      <article
        className="explore-card-elevated relative flex flex-col items-center overflow-hidden rounded-2xl border-2 p-3 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl active:scale-[0.99]"
        style={{
          background: scene.gradient,
          borderColor: scene.borderColor,
        }}
      >
        {/* Glow ring on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            boxShadow: `inset 0 0 40px ${scene.glowColor}33, 0 0 30px ${scene.glowColor}22`,
          }}
          aria-hidden="true"
        />

        {/* Badge */}
        <span
          className="explore-float absolute right-2 top-2 text-lg"
          aria-hidden="true"
          style={{ animationDelay: `${index * 100 + 400}ms` }}
        >
          {scene.badge}
        </span>

        <Image
          src={topic.imageSrc}
          alt={topic.imageAlt}
          width={320}
          height={240}
          className={`relative z-10 w-full rounded-xl object-cover drop-shadow-md transition-transform duration-300 group-hover:scale-105 ${isPreReaderMode ? "h-32 sm:h-36" : "h-28 sm:h-32"}`}
        />
        {!isPreReaderMode ? (
          <h3 className="relative z-10 mt-2 text-center text-base font-bold text-zinc-900">
            {topic.title}
          </h3>
        ) : (
          <h3 className="sr-only">{topic.title}</h3>
        )}
      </article>
    </Link>
  );
}
