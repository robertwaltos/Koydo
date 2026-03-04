"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-152",
  shortLabel: "Arcade 152",
  title: "River Garden",
  mascot: "spark",
  startMessage: "Spark: hold arithmetic flow stable and route each operation with low error in River Garden.",
  winMessage: "Spark: computation lane synchronized. Great precision under pace.",
  failMessage: "Spark: calculation drift detected. Re-enter with tighter checks.",
  objectiveNouns: [
    "ratio lane",
    "sum node",
    "factor ring",
    "sequence rail",
    "equation grid",
    "logic core"
  ],
  promptLeads: [
    "Numeric pressure detected on",
    "Choose the operation that keeps parity in",
    "Only one move preserves low-error flow in",
    "Computation surge incoming on"
  ],
  correctActions: [
    "Simplify",
    "Balance",
    "Normalize",
    "Reduce",
    "Align"
  ],
  decoyActions: [
    "Skip",
    "Overclock",
    "Inflate",
    "Fragment",
    "Distort"
  ],
  learningSprinkles: [
    "Estimate before committing.",
    "Balanced equations reduce propagation errors.",
    "Pattern checks catch hidden drift.",
    "Small corrections prevent large misses."
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

export default function Arcade152RiverGarden() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
