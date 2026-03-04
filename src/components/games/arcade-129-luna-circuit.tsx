"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-129",
  shortLabel: "Arcade 129",
  title: "Luna Circuit",
  mascot: "luna",
  startMessage: "Luna: sustain rhythmic architecture and phrase sequencing under tempo pressure in Luna Circuit.",
  winMessage: "Luna: pattern lattice secured. Great cadence control.",
  failMessage: "Luna: tempo chain broke. Re-enter with steadier sequencing.",
  objectiveNouns: [
    "tempo lane",
    "phrase node",
    "accent ring",
    "groove rail",
    "pattern grid",
    "pulse core"
  ],
  promptLeads: [
    "Cadence instability detected on",
    "Choose the phrase move that preserves flow in",
    "Only one sequence keeps timing coherence in",
    "Stage pressure rising around"
  ],
  correctActions: [
    "Phrase",
    "Sync",
    "Resolve",
    "Accentuate",
    "Balance"
  ],
  decoyActions: [
    "Rush",
    "Drag",
    "Flatten",
    "Overplay",
    "Scatter"
  ],
  learningSprinkles: [
    "Structured pacing improves execution quality.",
    "Phrase consistency supports retention.",
    "Correct timing drift before it cascades.",
    "Balanced emphasis strengthens memory."
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

export default function Arcade129LunaCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
