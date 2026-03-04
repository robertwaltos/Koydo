"use client";

import { Dna } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function ProteinPainter() {
  return (
    <QuizAdventureFactoryGame
      id="protein-painter"
      title="Protein Painter"
      subtitle="Molecule Design Studio"
      intro="Shape molecular design choices for stronger function, safety, and reproducibility."
      completion="Your molecule design run passed both stability and safety checkpoints."
      icon={Dna}
      focus={{
        domain: "protein design",
        goal: "functional stability",
        tool: "sequence optimization",
        risk: "off-target behavior",
        metric: "expression quality",
      }}
      theme={{
        shellClass: "border-rose-200/30 bg-rose-950 text-white",
        panelClass: "bg-rose-950/35",
        accentTextClass: "text-rose-200",
        accentBorderClass: "border-rose-300/30",
        buttonClass: "bg-rose-500/70 hover:bg-rose-500",
      }}
    />
  );
}
