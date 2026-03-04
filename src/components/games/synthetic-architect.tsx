"use client";

import { Cpu } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function SyntheticArchitect() {
  return (
    <QuizAdventureFactoryGame
      id="synthetic-architect"
      title="Synthetic Architect"
      subtitle="Systems Design Lab"
      intro="Build safer synthetic systems with monitored rollouts, guardrails, and recovery paths."
      completion="Your system architecture passed resilience and safety gate checks."
      icon={Cpu}
      focus={{
        domain: "synthetic systems",
        goal: "safe scalability",
        tool: "guardrail orchestration",
        risk: "unbounded failure modes",
        metric: "stability index",
      }}
      theme={{
        shellClass: "border-teal-200/30 bg-teal-950 text-white",
        panelClass: "bg-teal-950/35",
        accentTextClass: "text-teal-200",
        accentBorderClass: "border-teal-300/30",
        buttonClass: "bg-teal-500/70 hover:bg-teal-500",
      }}
    />
  );
}
