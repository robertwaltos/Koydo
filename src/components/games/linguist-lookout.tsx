"use client";

import { Languages } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function LinguistLookout() {
  return (
    <QuizAdventureFactoryGame
      id="linguist-lookout"
      title="Linguist Lookout"
      subtitle="Language Bridge Deck"
      intro="Decode context, tone, and intent to build clearer communication across languages."
      completion="You completed the bridge deck with precise and inclusive language decisions."
      icon={Languages}
      focus={{
        domain: "multilingual communication",
        goal: "meaning clarity",
        tool: "context mapping",
        risk: "ambiguity and mistranslation",
        metric: "comprehension consistency",
      }}
      theme={{
        shellClass: "border-fuchsia-200/30 bg-fuchsia-950 text-white",
        panelClass: "bg-fuchsia-950/35",
        accentTextClass: "text-fuchsia-200",
        accentBorderClass: "border-fuchsia-300/30",
        buttonClass: "bg-fuchsia-500/70 hover:bg-fuchsia-500",
      }}
    />
  );
}
