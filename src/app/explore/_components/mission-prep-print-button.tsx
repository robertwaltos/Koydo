"use client";

import { trackExplorerInteraction } from "@/lib/analytics/explorer-events";
import PrintButton from "./print-button";

type MissionPrepPrintButtonProps = {
  topicId: string;
  className?: string;
};

export default function MissionPrepPrintButton({
  topicId,
  className,
}: MissionPrepPrintButtonProps) {
  return (
    <PrintButton
      label="Print Mission Prep"
      className={className}
      onPrint={() => {
        trackExplorerInteraction({
          surface: "topic",
          action: "mission_prep_printed",
          topicId,
          suggestionType: "mission_prep",
        });
      }}
    />
  );
}

