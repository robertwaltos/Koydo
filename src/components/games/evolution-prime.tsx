"use client";

import { Leaf } from "lucide-react";
import QuizAdventureGame, { type QuizGameConfig } from "./quiz-adventure-game";

const CONFIG: QuizGameConfig = {
  id: "evolution-prime",
  title: "Evolution Prime",
  subtitle: "Adaptive Biology Lab",
  intro: "Guide species through changing habitats and choose the adaptation that helps them thrive.",
  completion: "Your adaptation plan stabilized the ecosystem simulation.",
  lives: 3,
  icon: Leaf,
  theme: {
    shellClass: "border-emerald-200/30 bg-emerald-950 text-white",
    panelClass: "bg-emerald-950/35",
    accentTextClass: "text-emerald-200",
    accentBorderClass: "border-emerald-300/30",
    buttonClass: "bg-emerald-500/70 hover:bg-emerald-500",
  },
  rounds: [
    {
      id: "ev-1",
      prompt: "A lizard moves from forest to hot desert. Which trait helps most?",
      context: "The new habitat has little shade and scorching daylight.",
      choices: [
        { id: "ev-1a", label: "Lighter skin that reflects sunlight", isCorrect: true, feedback: "Correct. Reflective coloring lowers heat stress." },
        { id: "ev-1b", label: "Long thick fur", isCorrect: false, feedback: "Too much insulation traps heat in the desert." },
        { id: "ev-1c", label: "Bright loud warning song", isCorrect: false, feedback: "Sound does not solve desert temperature pressure." },
      ],
    },
    {
      id: "ev-2",
      prompt: "A fish now lives in murky water. What improves survival?",
      context: "Visibility is low, so sensing movement matters.",
      choices: [
        { id: "ev-2a", label: "More sensitive side-line sensing", isCorrect: true, feedback: "Yes. Better motion sensing helps detect nearby movement." },
        { id: "ev-2b", label: "Shorter fins for less control", isCorrect: false, feedback: "Reduced control makes navigation harder." },
        { id: "ev-2c", label: "Less gill surface area", isCorrect: false, feedback: "Oxygen uptake should not be reduced." },
      ],
    },
    {
      id: "ev-3",
      prompt: "Predators hunt by sight in snowy hills. Best adaptation?",
      context: "The prey species can blend into surroundings.",
      choices: [
        { id: "ev-3a", label: "White seasonal camouflage coat", isCorrect: true, feedback: "Correct. Camouflage lowers detection by visual predators." },
        { id: "ev-3b", label: "Darker feathers year-round", isCorrect: false, feedback: "Dark color stands out on snow." },
        { id: "ev-3c", label: "Smaller lungs", isCorrect: false, feedback: "Lung size does not directly improve camouflage." },
      ],
    },
    {
      id: "ev-4",
      prompt: "Flowering plants face fewer pollinators. What helps reproduction?",
      context: "Pollinator visits are now rare each week.",
      choices: [
        { id: "ev-4a", label: "Nectar with stronger scent cues", isCorrect: true, feedback: "Right. Strong scent attracts pollinators from farther away." },
        { id: "ev-4b", label: "Shorter blooming season", isCorrect: false, feedback: "Shorter blooming gives fewer pollination chances." },
        { id: "ev-4c", label: "Lower pollen production", isCorrect: false, feedback: "Lower pollen reduces success probability." },
      ],
    },
    {
      id: "ev-5",
      prompt: "Temperatures swing wildly day to night. Best body strategy?",
      context: "Animals must handle both cold nights and warm days.",
      choices: [
        { id: "ev-5a", label: "Flexible metabolism that shifts with temperature", isCorrect: true, feedback: "Excellent. Metabolic flexibility buffers daily extremes." },
        { id: "ev-5b", label: "Single fixed body response", isCorrect: false, feedback: "Rigid responses struggle with variable climates." },
        { id: "ev-5c", label: "Nocturnal blindness", isCorrect: false, feedback: "Loss of vision is harmful, not adaptive here." },
      ],
    },
  ],
};

export default function EvolutionPrime() {
  return <QuizAdventureGame config={CONFIG} />;
}
