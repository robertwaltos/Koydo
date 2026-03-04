"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-126",
  shortLabel: "Arcade 126",
  title: "Sky Circuit",
  mascot: "echo",
  startMessage: "Echo: read the language cue and pick the strongest meaning path in Sky Circuit.",
  winMessage: "Echo: language channel stable. Your evidence choices stayed coherent.",
  failMessage: "Echo: interpretation drifted. Rebuild with cleaner textual evidence.",
  objectiveNouns: [
    "context lane",
    "evidence thread",
    "claim marker",
    "language bridge",
    "reference frame",
    "story signal"
  ],
  promptLeads: [
    "Ambiguous wording detected around",
    "Choose the most coherent interpretation for",
    "Only one phrasing preserves meaning in",
    "Find the strongest text-grounded move for"
  ],
  correctActions: [
    "Clarify",
    "Corroborate",
    "Contextualize",
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
    "Context changes meaning.",
    "Strong claims need direct evidence.",
    "Precision beats speed when ambiguity rises.",
    "Track source intent before concluding."
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
  baseRoundMs: 5600,
  minRoundMs: 3000,
  roundDecayMs: 340,
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade126SkyCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
