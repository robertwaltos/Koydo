"use client";

import { PenLine } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function StorySmith() {
  return (
    <QuizAdventureFactoryGame
      id="story-smith"
      title="Story Smith"
      subtitle="Narrative Forge Hub"
      intro="Forge stronger story arcs by selecting choices that improve stakes, voice, and pacing."
      completion="Your narrative build closed with clear stakes and meaningful character growth."
      icon={PenLine}
      focus={{
        domain: "story design",
        goal: "arc coherence",
        tool: "scene objective mapping",
        risk: "plot drift",
        metric: "narrative clarity",
      }}
      theme={{
        shellClass: "border-orange-200/30 bg-orange-950 text-white",
        panelClass: "bg-orange-950/35",
        accentTextClass: "text-orange-200",
        accentBorderClass: "border-orange-300/30",
        buttonClass: "bg-orange-500/70 hover:bg-orange-500",
      }}
    />
  );
}
