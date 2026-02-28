"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type ChantAdventureLinkProps = {
  topicId: string;
  title: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function ChantAdventureLink({
  topicId,
  title,
  href,
  className,
  children,
}: ChantAdventureLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "chant_adventure_selected",
          topicId,
          destination: href,
          prompt: title,
          suggestionType: "chant_moment",
        });
      }}
    >
      {children}
    </Link>
  );
}

