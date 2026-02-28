"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type MissionPrepLinkProps = {
  topicId: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function MissionPrepLink({
  topicId,
  href,
  className,
  children,
}: MissionPrepLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "mission_prep_sheet_selected",
          topicId,
          destination: href,
          suggestionType: "mission_prep",
        });
      }}
    >
      {children}
    </Link>
  );
}

