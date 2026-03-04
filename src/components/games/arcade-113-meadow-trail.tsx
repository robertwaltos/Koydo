"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-113",
  shortLabel: "Arcade 113",
  title: "Meadow Trail",
  mascot: "echo",
  startMessage: "Echo: maintain textual coherence and choose evidence-grounded interpretations in Meadow Trail.",
  winMessage: "Echo: interpretation mesh stabilized. Strong language reasoning.",
  failMessage: "Echo: meaning drift detected. Retry with tighter evidence links.",
  objectiveNouns: [
    "context lane",
    "evidence node",
    "claim ring",
    "narrative rail",
    "reference grid",
    "meaning core"
  ],
  promptLeads: [
    "Semantic ambiguity detected on",
    "Choose the strongest evidence move for",
    "Only one reading preserves coherence in",
    "Context shift incoming: stabilize"
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
    "Speculate",
    "Overstate",
    "Flatten",
    "Distort"
  ],
  learningSprinkles: [
    "Context controls interpretation quality.",
    "Evidence must support each claim jump.",
    "Coherence improves when assumptions are explicit.",
    "Resolve ambiguity before accelerating."
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

export default function Arcade113MeadowTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
