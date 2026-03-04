"use client";

import { Atom } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function NanoNexus() {
  return (
    <QuizAdventureFactoryGame
      id="nano-nexus"
      title="Nano Nexus"
      subtitle="Micro Lab Grid"
      intro="Guide micro-lab operations with careful diagnostics, controls, and safety checks."
      completion="Your nano-lab sequence reached a stable and verified mission result."
      icon={Atom}
      focus={{
        domain: "microscopic systems",
        goal: "stable observation",
        tool: "calibrated instrumentation",
        risk: "thermal drift and contamination",
        metric: "measurement reliability",
      }}
      theme={{
        shellClass: "border-indigo-200/30 bg-indigo-950 text-white",
        panelClass: "bg-indigo-950/35",
        accentTextClass: "text-indigo-200",
        accentBorderClass: "border-indigo-300/30",
        buttonClass: "bg-indigo-500/70 hover:bg-indigo-500",
      }}
    />
  );
}
