"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";

type PictureChoiceLinkProps = {
  topicId: string;
  choiceId: string;
  choiceLabel: string;
  href: string;
  className?: string;
  children: ReactNode;
};

export default function PictureChoiceLink({
  topicId,
  choiceId,
  choiceLabel,
  href,
  className,
  children,
}: PictureChoiceLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "picture_choice_selected",
          topicId,
          choiceId,
          destination: href,
          prompt: choiceLabel,
          suggestionType: "picture_choice",
        });
      }}
    >
      {children}
    </Link>
  );
}

