"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-128",
  shortLabel: "Arcade 128",
  title: "Echo Circuit",
  mascot: "echo",
  startMessage: "Echo: preserve argument integrity while ambiguity pressure rises in Echo Circuit.",
  winMessage: "Echo: discourse channel secured. Strong textual reasoning.",
  failMessage: "Echo: claim stability failed. Retry with better evidence anchors.",
  objectiveNouns: [
    "context lane",
    "evidence node",
    "claim ring",
    "inference rail",
    "citation grid",
    "reason core"
  ],
  promptLeads: [
    "Interpretation conflict detected on",
    "Choose the strongest supporting move for",
    "Only one response keeps coherence in",
    "Ambiguity escalating around"
  ],
  correctActions: [
    "Corroborate",
    "Contextualize",
    "Clarify",
    "Anchor",
    "Verify"
  ],
  decoyActions: [
    "Assume",
    "Distort",
    "Overstate",
    "Ignore",
    "Speculate"
  ],
  learningSprinkles: [
    "Context changes interpretation strength.",
    "Claims require evidence continuity.",
    "Precision beats speed when ambiguity is high.",
    "Repair reasoning chains quickly after misses."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_14%_20%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(139,92,246,0.2),transparent_52%)]",
    "panelBorder": "border-violet-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-violet-200/35 text-violet-100",
    "progressBar": "bg-violet-300",
    "optionIdle": "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20",
    "optionActive": "border-violet-300/80 bg-violet-400/20",
    "primaryButton": "bg-violet-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-violet-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade128EchoCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
