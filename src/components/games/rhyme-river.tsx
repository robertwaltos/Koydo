"use client";

import { Music4 } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function RhymeRiver() {
  return (
    <QuizAdventureFactoryGame
      id="rhyme-river"
      title="Rhyme River"
      subtitle="Poetry Current Lab"
      intro="Steer flowing rhyme patterns by choosing meter, tone, and language that fit each line."
      completion="Your poetry current reached the finale with strong rhythm and clarity."
      icon={Music4}
      focus={{
        domain: "rhythmic writing",
        goal: "cohesive cadence",
        tool: "meter checkpoints",
        risk: "rhythm collapse",
        metric: "line flow score",
      }}
      theme={{
        shellClass: "border-pink-200/30 bg-pink-950 text-white",
        panelClass: "bg-pink-950/35",
        accentTextClass: "text-pink-200",
        accentBorderClass: "border-pink-300/30",
        buttonClass: "bg-pink-500/70 hover:bg-pink-500",
      }}
    />
  );
}
