"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type PicturePathStartLinkProps = {
  topicId: string;
  choiceId: string;
  choiceLabel: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function PicturePathStartLink({
  topicId,
  choiceId,
  choiceLabel,
  href,
  className,
  children,
}: PicturePathStartLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "picture_path_started",
          topicId,
          choiceId,
          destination: href,
          prompt: choiceLabel,
          suggestionType: "picture_path",
        });
      }}
    >
      {children}
    </Link>
  );
}

