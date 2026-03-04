"use client";

import type { LucideIcon } from "lucide-react";
import type { QuizGameConfig, QuizGameTheme } from "./quiz-adventure-game";
import QuizAdventureGame from "./quiz-adventure-game";

type QuizAdventureFactoryProps = {
  id: string;
  title: string;
  subtitle: string;
  intro: string;
  completion: string;
  icon: LucideIcon;
  theme: QuizGameTheme;
  focus: {
    domain: string;
    goal: string;
    tool: string;
    risk: string;
    metric: string;
  };
};

function buildConfig({
  id,
  title,
  subtitle,
  intro,
  completion,
  icon,
  theme,
  focus,
}: QuizAdventureFactoryProps): QuizGameConfig {
  const rounds = [
    {
      id: `${id}-1`,
      prompt: `Your first move for ${focus.domain} should optimize which outcome?`,
      context: `Mission goal: ${focus.goal}.`,
      choices: [
        {
          id: `${id}-1a`,
          label: `Prioritize ${focus.metric} from the start`,
          isCorrect: true,
          feedback: `Correct. Starting with ${focus.metric} improves consistent progress.`,
        },
        {
          id: `${id}-1b`,
          label: "Skip baseline checks and move fast",
          isCorrect: false,
          feedback: "Speed without baseline data causes fragile decisions.",
        },
        {
          id: `${id}-1c`,
          label: "Ignore all constraints initially",
          isCorrect: false,
          feedback: "Constraint awareness is required for safe performance.",
        },
      ],
    },
    {
      id: `${id}-2`,
      prompt: `A teammate asks what tool to use first. Best recommendation?`,
      context: `Available systems include ${focus.tool}.`,
      choices: [
        {
          id: `${id}-2a`,
          label: `Use ${focus.tool} with a clear protocol`,
          isCorrect: true,
          feedback: `Right. Structured use of ${focus.tool} improves repeatability.`,
        },
        {
          id: `${id}-2b`,
          label: "Pick tools randomly each round",
          isCorrect: false,
          feedback: "Random tool switching weakens signal quality.",
        },
        {
          id: `${id}-2c`,
          label: "Avoid tools and rely on guesses",
          isCorrect: false,
          feedback: "Evidence beats intuition in this challenge.",
        },
      ],
    },
    {
      id: `${id}-3`,
      prompt: `A warning appears for ${focus.risk}. What is the safest response?`,
      context: "You can pause, adjust, or proceed unchanged.",
      choices: [
        {
          id: `${id}-3a`,
          label: "Pause, diagnose, and mitigate before continuing",
          isCorrect: true,
          feedback: "Excellent. Controlled mitigation prevents cascading failures.",
        },
        {
          id: `${id}-3b`,
          label: "Continue and hope it self-corrects",
          isCorrect: false,
          feedback: "Unmanaged risk usually compounds over time.",
        },
        {
          id: `${id}-3c`,
          label: "Delete warning logs and continue",
          isCorrect: false,
          feedback: "Suppressing warnings removes critical safety signals.",
        },
      ],
    },
    {
      id: `${id}-4`,
      prompt: `Your results are mixed. How do you improve confidence?`,
      context: `You need trustworthy ${focus.metric} before next phase.`,
      choices: [
        {
          id: `${id}-4a`,
          label: "Repeat trials and compare outcomes",
          isCorrect: true,
          feedback: "Correct. Replication is key for reliable conclusions.",
        },
        {
          id: `${id}-4b`,
          label: "Use one favorable result only",
          isCorrect: false,
          feedback: "Cherry-picked outcomes are not dependable.",
        },
        {
          id: `${id}-4c`,
          label: "Stop collecting measurements",
          isCorrect: false,
          feedback: "You cannot optimize what you do not measure.",
        },
      ],
    },
    {
      id: `${id}-5`,
      prompt: `Final decision: which strategy completes the mission best?`,
      context: `Balance speed, safety, and long-term ${focus.goal}.`,
      choices: [
        {
          id: `${id}-5a`,
          label: "Ship a monitored, reversible improvement",
          isCorrect: true,
          feedback: "Perfect. Reversible rollouts protect quality and users.",
        },
        {
          id: `${id}-5b`,
          label: "Launch all changes without checkpoints",
          isCorrect: false,
          feedback: "Large unmonitored launches increase incident probability.",
        },
        {
          id: `${id}-5c`,
          label: "Postpone all decisions indefinitely",
          isCorrect: false,
          feedback: "Avoidance blocks progress and learning.",
        },
      ],
    },
  ];

  return {
    id,
    title,
    subtitle,
    intro,
    completion,
    lives: 3,
    icon,
    theme,
    rounds,
  };
}

export default function QuizAdventureFactoryGame(props: QuizAdventureFactoryProps) {
  return <QuizAdventureGame config={buildConfig(props)} />;
}

