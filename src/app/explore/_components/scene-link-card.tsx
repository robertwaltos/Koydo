"use client";

import Link from "next/link";
import type { WorldScene } from "@/lib/explorer/scenes";
import type { ExplorerTopic } from "@/lib/explorer/topics";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import SceneCard from "./scene-card";

type SceneLinkCardProps = {
  topic: ExplorerTopic;
  scene: WorldScene;
  index: number;
  priority?: boolean;
};

export default function SceneLinkCard({
  topic,
  scene,
  index,
  priority = false,
}: SceneLinkCardProps) {
  const destination = `/explore/${topic.id}`;

  return (
    <Link
      href={destination}
      className="ui-focus-ring explore-scene-enter block rounded-3xl"
      style={{ animationDelay: `${index * 80}ms` }}
      onClick={() => {
        trackExplorerInteraction({
          surface: "lobby",
          action: "world_selected",
          targetTopicId: topic.id,
          destination,
        });
      }}
    >
      <SceneCard
        topic={topic}
        scene={scene}
        index={index}
        priority={priority}
      />
    </Link>
  );
}
