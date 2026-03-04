"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-118",
  shortLabel: "Arcade 118",
  title: "Willow Trail",
  mascot: "echo",
  startMessage: "Echo: protect argument coherence under ambiguity spikes in Willow Trail.",
  winMessage: "Echo: reasoning channel stabilized. Great evidence control.",
  failMessage: "Echo: coherence fracture detected. Rebuild with stronger support.",
  objectiveNouns: [
    "claim lane",
    "context node",
    "evidence ring",
    "reason rail",
    "citation grid",
    "logic core"
  ],
  promptLeads: [
    "Reasoning conflict detected on",
    "Choose the best-supported move for",
    "Only one decision keeps argument integrity in",
    "Ambiguity pressure rising around"
  ],
  correctActions: [
    "Corroborate",
    "Qualify",
    "Anchor",
    "Clarify",
    "Substantiate"
  ],
  decoyActions: [
    "Assume",
    "Generalize",
    "Overstate",
    "Speculate",
    "Distort"
  ],
  learningSprinkles: [
    "Strong claims require direct support.",
    "Coherence depends on context.",
    "Distinguish evidence from inference.",
    "Stabilize logic before accelerating."
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
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade118WillowTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
