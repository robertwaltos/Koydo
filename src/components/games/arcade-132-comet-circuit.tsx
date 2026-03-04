"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-132",
  shortLabel: "Arcade 132",
  title: "Comet Circuit",
  mascot: "spark",
  startMessage: "Spark: hold trajectory math together and route each correction with precision in Comet Circuit.",
  winMessage: "Spark: vector corridor synchronized. Excellent orbital control.",
  failMessage: "Spark: trajectory drift exceeded limits. Re-enter with cleaner calculations.",
  objectiveNouns: [
    "trajectory lane",
    "vector node",
    "burn ring",
    "guidance rail",
    "orbit grid",
    "correction core"
  ],
  promptLeads: [
    "Navigation variance detected on",
    "Choose the correction that preserves orbit for",
    "Only one move keeps stable heading in",
    "Rapid burn decision required for"
  ],
  correctActions: [
    "Vectorize",
    "Calibrate",
    "Trim",
    "Normalize",
    "Secure",
    "Balance"
  ],
  decoyActions: [
    "Overshoot",
    "Drift",
    "Spike",
    "Skip",
    "Distort"
  ],
  learningSprinkles: [
    "Precision burns beat reactive corrections.",
    "Small vector errors compound quickly.",
    "Balanced sequencing preserves control.",
    "Check heading before committing thrust."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    "panelBorder": "border-amber-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-amber-200/35 text-amber-100",
    "progressBar": "bg-amber-300",
    "optionIdle": "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20",
    "optionActive": "border-amber-300/80 bg-amber-400/20",
    "primaryButton": "bg-amber-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-amber-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade132CometCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
