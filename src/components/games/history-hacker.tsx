"use client";

import { BookOpenCheck } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function HistoryHacker() {
  return (
    <QuizAdventureFactoryGame
      id="history-hacker"
      title="History Hacker"
      subtitle="Timeline Signal Lab"
      intro="Stabilize key historical moments by selecting evidence-driven timeline interventions."
      completion="Your timeline repairs preserved continuity and improved historical outcomes."
      icon={BookOpenCheck}
      focus={{
        domain: "historical analysis",
        goal: "causal accuracy",
        tool: "source triangulation",
        risk: "timeline distortion",
        metric: "evidence confidence",
      }}
      theme={{
        shellClass: "border-amber-200/30 bg-amber-950 text-white",
        panelClass: "bg-amber-950/35",
        accentTextClass: "text-amber-200",
        accentBorderClass: "border-amber-300/30",
        buttonClass: "bg-amber-500/70 hover:bg-amber-500",
      }}
    />
  );
}
