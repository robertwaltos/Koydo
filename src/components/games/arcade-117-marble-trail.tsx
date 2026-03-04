"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-117",
  shortLabel: "Arcade 117",
  title: "Marble Trail",
  mascot: "spark",
  startMessage: "Spark: solve quantitative pressure lines and avoid false shortcuts in Marble Trail.",
  winMessage: "Spark: quantitative lane secured. Excellent numeric discipline.",
  failMessage: "Spark: branch contradiction detected. Re-enter with stronger checks.",
  objectiveNouns: [
    "equation lane",
    "ratio node",
    "proof ring",
    "factor rail",
    "solution grid",
    "calculus core"
  ],
  promptLeads: [
    "Quantitative instability detected on",
    "Choose the most rigorous step for",
    "Only one operation preserves consistency in",
    "Computation pressure rising on"
  ],
  correctActions: [
    "Simplify",
    "Derive",
    "Normalize",
    "Prove",
    "Resolve"
  ],
  decoyActions: [
    "Guess",
    "Skip",
    "Approximate",
    "Bypass",
    "Overfit"
  ],
  learningSprinkles: [
    "Rigorous steps reduce compounding error.",
    "Symbol discipline improves speed safely.",
    "Check constraints before final answers.",
    "Recover fast after a false assumption."
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
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade117MarbleTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
