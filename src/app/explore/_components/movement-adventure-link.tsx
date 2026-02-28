"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type MovementAdventureLinkProps = {
  topicId: string;
  title: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function MovementAdventureLink({
  topicId,
  title,
  href,
  className,
  children,
}: MovementAdventureLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "movement_adventure_selected",
          topicId,
          destination: href,
          prompt: title,
          suggestionType: "movement_moment",
        });
      }}
    >
      {children}
    </Link>
  );
}

