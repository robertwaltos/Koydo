"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type CalmMomentLinkProps = {
  topicId: string;
  title: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function CalmMomentLink({
  topicId,
  title,
  href,
  className,
  children,
}: CalmMomentLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "calm_moment_selected",
          topicId,
          destination: href,
          prompt: title,
          suggestionType: "calm_moment",
        });
      }}
    >
      {children}
    </Link>
  );
}

