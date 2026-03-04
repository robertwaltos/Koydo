"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-123",
  shortLabel: "Arcade 123",
  title: "Pebble Trail",
  mascot: "luna",
  startMessage: "Luna: Luna: keep rhythm and composition aligned while the tempo pressure climbs in Pebble Trail.",
  winMessage: "Luna: Luna: composition locked in. Beautiful pacing and control.",
  failMessage: "Luna: Luna: structure fell apart. Reset and re-enter with smoother timing.",
  objectiveNouns: [
    "phrase arc",
    "tempo lane",
    "palette chord",
    "design thread",
    "rhythm ribbon",
    "composition grid"
  ],
  promptLeads: [
    "Creative pressure rising on",
    "Only one stylistic move keeps flow through",
    "Find the balanced cadence for",
    "Lock the strongest composition choice in"
  ],
  correctActions: [
    "Blend",
    "Resolve",
    "Phrase",
    "Accentuate",
    "Sync"
  ],
  decoyActions: [
    "Rush",
    "Flatten",
    "Scatter",
    "Overplay",
    "Drag"
  ],
  learningSprinkles: [
    "Consistent rhythm improves recall.",
    "Structure supports creative freedom.",
    "Small timing fixes prevent drift.",
    "Contrast works best with control."
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
  minRoundMs: 2900,
  roundDecayMs: 320,
};

export default function Arcade123PebbleTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
