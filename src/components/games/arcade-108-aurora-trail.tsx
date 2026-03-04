"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-108",
  shortLabel: "Arcade 108",
  title: "Aurora Trail",
  mascot: "spark",
  startMessage: "Spark: hold stable logic under pressure and keep each calculation lane consistent in Aurora Trail.",
  winMessage: "Spark: matrix synchronized. Great precision and pacing.",
  failMessage: "Spark: signal drifted. Re-enter with cleaner math decisions.",
  objectiveNouns: [
    "ratio node",
    "sum relay",
    "factor rail",
    "sequence gate",
    "mod loop",
    "equation mesh"
  ],
  promptLeads: [
    "High-pressure arithmetic cue on",
    "Choose the operation that preserves balance in",
    "Only one move keeps numeric stability for",
    "Find the lowest-error path through"
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
    "Balance both sides before optimizing.",
    "Pattern checks reduce careless errors.",
    "Small corrections prevent large drift."
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
  baseRoundMs: 5300,
  minRoundMs: 2800,
  roundDecayMs: 330,
  roundMode: "double",
  targetBestCombo: 6,
};

export default function Arcade108AuroraTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
