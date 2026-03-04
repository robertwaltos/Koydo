"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-002",
  shortLabel: "Arcade 002",
  title: "Spark Loop Rush",
  mascot: "spark",
  startMessage: "Spark: chain the right loop commands and keep reactor tempo steady.",
  winMessage: "Spark: loop network synced. You held perfect energy flow.",
  failMessage: "Spark: reactor rhythm broke. Reset the sequence and rerun.",
  objectiveNouns: [
    "factor grid",
    "ratio coil",
    "sum relay",
    "mod lane",
    "sequence rail",
    "core matrix",
  ],
  promptLeads: [
    "Reactor drift rises, choose the stable operation for",
    "Fast arithmetic cue detected on",
    "Only one command keeps safe throughput in",
    "Time pressure climbs, lock the best move on",
  ],
  correctActions: [
    "Simplify",
    "Equalize",
    "Reduce",
    "Refactor",
    "Align",
  ],
  decoyActions: [
    "Amplify",
    "Fragment",
    "Skip",
    "Distort",
    "Spike",
  ],
  learningSprinkles: [
    "Reduce complexity first, then optimize.",
    "Ratios stay stable when denominators match.",
    "Pattern checks beat random guessing.",
    "Short loops lower error accumulation.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    panelBorder: "border-amber-200/30",
    panelBackground: "bg-black/35",
    chip: "border-amber-200/35 text-amber-100",
    progressBar: "bg-amber-300",
    optionIdle: "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20",
    optionActive: "border-amber-300/80 bg-amber-400/20",
    primaryButton: "bg-amber-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-amber-100",
  },
  baseRoundMs: 5200,
  minRoundMs: 2700,
  roundDecayMs: 330,
};

export default function Arcade002SparkLoopRush() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
