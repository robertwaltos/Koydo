"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-119",
  shortLabel: "Arcade 119",
  title: "Maple Trail",
  mascot: "luna",
  startMessage: "Luna: hold beat architecture and sequence precision under stage pressure in Maple Trail.",
  winMessage: "Luna: performance lattice secured. Strong timing identity.",
  failMessage: "Luna: sequence drift overtook the set. Re-enter with tighter cadence.",
  objectiveNouns: [
    "tempo lane",
    "phrase node",
    "accent ring",
    "rhythm rail",
    "setlist grid",
    "pulse core"
  ],
  promptLeads: [
    "Timing variance detected on",
    "Choose the strongest phrase move for",
    "Only one sequence keeps rhythmic continuity in",
    "Stage pressure spiking around"
  ],
  correctActions: [
    "Phrase",
    "Sync",
    "Resolve",
    "Accent",
    "Balance"
  ],
  decoyActions: [
    "Rush",
    "Flatten",
    "Drag",
    "Overplay",
    "Scatter"
  ],
  learningSprinkles: [
    "Rhythm structure improves recall.",
    "Pattern consistency increases control.",
    "Timing corrections prevent cascade misses.",
    "Layer complexity only after stability."
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
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 9,
};

export default function Arcade119MapleTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
