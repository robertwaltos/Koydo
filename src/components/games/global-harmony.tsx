"use client";

import { Globe2 } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function GlobalHarmony() {
  return (
    <QuizAdventureFactoryGame
      id="global-harmony"
      title="Global Harmony"
      subtitle="Civic Choices Studio"
      intro="Balance fairness, safety, and shared progress in community decision scenarios."
      completion="Your civic strategy raised trust and cooperation across the network."
      icon={Globe2}
      focus={{
        domain: "community governance",
        goal: "equitable participation",
        tool: "facilitated dialogue workflows",
        risk: "policy drift and exclusion",
        metric: "participation quality",
      }}
      theme={{
        shellClass: "border-cyan-200/30 bg-cyan-950 text-white",
        panelClass: "bg-cyan-950/35",
        accentTextClass: "text-cyan-200",
        accentBorderClass: "border-cyan-300/30",
        buttonClass: "bg-cyan-500/70 hover:bg-cyan-500",
      }}
    />
  );
}
