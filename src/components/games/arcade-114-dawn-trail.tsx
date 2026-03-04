"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-114",
  shortLabel: "Arcade 114",
  title: "Dawn Trail",
  mascot: "luna",
  startMessage: "Luna: preserve rhythmic structure and visual pacing under rising tempo pressure in Dawn Trail.",
  winMessage: "Luna: stage flow secured. Strong rhythm and composition control.",
  failMessage: "Luna: cadence collapsed. Re-enter with cleaner tempo decisions.",
  objectiveNouns: [
    "cadence lane",
    "phrase node",
    "rhythm ring",
    "choreo rail",
    "pattern grid",
    "beat core"
  ],
  promptLeads: [
    "Cadence disruption detected on",
    "Choose the move that preserves stage flow in",
    "Only one phrasing keeps tempo integrity in",
    "Timing pressure rising: stabilize"
  ],
  correctActions: [
    "Phrase",
    "Sync",
    "Accentuate",
    "Balance",
    "Resolve"
  ],
  decoyActions: [
    "Rush",
    "Flatten",
    "Drag",
    "Scatter",
    "Overplay"
  ],
  learningSprinkles: [
    "Structured tempo supports creative precision.",
    "Pacing decisions shape performance quality.",
    "Recover rhythm quickly after a miss.",
    "Balanced emphasis improves retention."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.18),transparent_52%)]",
    "panelBorder": "border-fuchsia-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-fuchsia-200/35 text-fuchsia-100",
    "progressBar": "bg-fuchsia-300",
    "optionIdle": "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20",
    "optionActive": "border-fuchsia-300/80 bg-fuchsia-400/20",
    "primaryButton": "bg-fuchsia-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-fuchsia-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade114DawnTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
