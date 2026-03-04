"use client";

import { Sparkles } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function QuantumCascade() {
  return (
    <QuizAdventureFactoryGame
      id="quantum-cascade"
      title="Quantum Cascade"
      subtitle="Qubit Strategy Ring"
      intro="Choose robust qubit strategies that survive noise, latency, and hardware constraints."
      completion="Your qubit strategy completed the circuit with resilient performance."
      icon={Sparkles}
      focus={{
        domain: "quantum workflows",
        goal: "robust execution",
        tool: "hybrid orchestration",
        risk: "decoherence drift",
        metric: "shot fidelity",
      }}
      theme={{
        shellClass: "border-violet-200/30 bg-violet-950 text-white",
        panelClass: "bg-violet-950/35",
        accentTextClass: "text-violet-200",
        accentBorderClass: "border-violet-300/30",
        buttonClass: "bg-violet-500/70 hover:bg-violet-500",
      }}
    />
  );
}
