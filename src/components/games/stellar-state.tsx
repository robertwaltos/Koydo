"use client";

import { Rocket } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function StellarState() {
  return (
    <QuizAdventureFactoryGame
      id="stellar-state"
      title="Stellar State"
      subtitle="Orbital Governance Deck"
      intro="Manage orbital operations with limited resources, delayed signals, and safety priorities."
      completion="Your orbital governance run kept all stations stable and supplied."
      icon={Rocket}
      focus={{
        domain: "orbital coordination",
        goal: "mission continuity",
        tool: "criticality routing",
        risk: "resource starvation",
        metric: "station uptime",
      }}
      theme={{
        shellClass: "border-sky-200/30 bg-sky-950 text-white",
        panelClass: "bg-sky-950/35",
        accentTextClass: "text-sky-200",
        accentBorderClass: "border-sky-300/30",
        buttonClass: "bg-sky-500/70 hover:bg-sky-500",
      }}
    />
  );
}
