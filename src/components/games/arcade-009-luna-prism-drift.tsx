"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-009",
  shortLabel: "Arcade 009",
  title: "Luna Prism Drift",
  mascot: "luna",
  startMessage: "Luna: hold rhythm shape while prism cues shift tempo.",
  winMessage: "Luna: prism run complete. Every phrase landed clean.",
  failMessage: "Luna: rhythm drift broke the set. Restart the flow.",
  objectiveNouns: [
    "chorus prism",
    "tempo arc",
    "phrase bloom",
    "meter shell",
    "sync ribbon",
    "stage pulse",
  ],
  promptLeads: [
    "Cadence shifts quickly, center",
    "Only one phrase keeps musical logic in",
    "Timing pressure rises around",
    "Performance lane compressing, resolve",
  ],
  correctActions: ["Phrase", "Sync", "Resolve", "Accentuate", "Blend"],
  decoyActions: ["Rush", "Flatten", "Scatter", "Drag", "Break"],
  learningSprinkles: [
    "Chunking rhythm improves memory retention.",
    "Consistent meter supports prediction.",
    "Controlled accents reduce timing noise.",
    "Tempo awareness improves focused recall.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(236,72,153,0.2),transparent_52%)]",
    panelBorder: "border-pink-200/30",
    panelBackground: "bg-black/35",
    chip: "border-pink-200/35 text-pink-100",
    progressBar: "bg-pink-300",
    optionIdle: "border-pink-100/25 bg-pink-100/10 hover:bg-pink-100/20",
    optionActive: "border-pink-300/80 bg-pink-400/20",
    primaryButton: "bg-pink-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-pink-100",
  },
  baseRoundMs: 5300,
  minRoundMs: 2800,
  roundDecayMs: 325,
};

export default function Arcade009LunaPrismDrift() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
