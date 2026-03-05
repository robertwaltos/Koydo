"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import { type HintSet, type HintTier, getNextHintTier, getRevealedHints } from "@/lib/scaffolding/hint-engine";
import SoftButton from "@/app/components/ui/soft-button";

const TIER_LABELS: Record<HintTier, string> = {
  1: "Nudge",
  2: "Partial Hint",
  3: "Full Solution",
};

export default function HintSystem({
  hintSet,
  onHintUsed,
}: {
  hintSet: HintSet;
  onHintUsed?: (tier: HintTier) => void;
}) {
  const { allowed } = useFeature("contextual_scaffolding");
  const [revealedTier, setRevealedTier] = useState<HintTier | 0>(0);

  if (!allowed) return null;

  const revealed = getRevealedHints(hintSet, revealedTier);
  const nextTier = getNextHintTier(revealedTier);

  const handleReveal = () => {
    if (!nextTier) return;
    setRevealedTier(nextTier);
    onHintUsed?.(nextTier);
  };

  return (
    <div className="space-y-2">
      {revealed.map((h) => (
        <div
          key={h.tier}
          className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm dark:border-amber-800 dark:bg-amber-950"
        >
          <span className="mr-2 text-xs font-semibold text-amber-700 dark:text-amber-300">
            {TIER_LABELS[h.tier]}:
          </span>
          {h.text}
        </div>
      ))}

      {nextTier && (
        <SoftButton variant="ghost" onClick={handleReveal}>
          {revealedTier === 0 ? "Need a hint?" : `Show ${TIER_LABELS[nextTier]}`}
        </SoftButton>
      )}
    </div>
  );
}
