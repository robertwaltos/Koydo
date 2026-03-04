"use client";

import { Trees } from "lucide-react";
import QuizAdventureFactoryGame from "./quiz-adventure-factory";

export default function WordWoods() {
  return (
    <QuizAdventureFactoryGame
      id="word-woods"
      title="Word Woods"
      subtitle="Vocabulary Trail Camp"
      intro="Navigate language trails by choosing clearer words, stronger context, and better structure."
      completion="Your vocabulary trail run ended with high clarity and language confidence."
      icon={Trees}
      focus={{
        domain: "vocabulary mastery",
        goal: "context precision",
        tool: "word-choice comparison",
        risk: "meaning ambiguity",
        metric: "semantic accuracy",
      }}
      theme={{
        shellClass: "border-lime-200/30 bg-lime-950 text-white",
        panelClass: "bg-lime-950/35",
        accentTextClass: "text-lime-200",
        accentBorderClass: "border-lime-300/30",
        buttonClass: "bg-lime-500/70 hover:bg-lime-500",
      }}
    />
  );
}
