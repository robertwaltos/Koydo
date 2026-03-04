"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-120",
  shortLabel: "Arcade 120",
  title: "Coral Trail",
  mascot: "terra",
  startMessage: "Terra: keep reef systems resilient by selecting stable interventions in Coral Trail.",
  winMessage: "Terra: reef stability restored. Excellent ecological judgment.",
  failMessage: "Terra: stress cascade breached safeguards. Retry with better tradeoffs.",
  objectiveNouns: [
    "reef lane",
    "salinity node",
    "habitat ring",
    "current rail",
    "resilience grid",
    "biosphere core"
  ],
  promptLeads: [
    "Ecosystem stress detected on",
    "Choose the intervention that preserves biodiversity in",
    "Only one response limits collapse risk in",
    "Critical habitat alert on"
  ],
  correctActions: [
    "Restore",
    "Buffer",
    "Regulate",
    "Reinforce",
    "Stabilize"
  ],
  decoyActions: [
    "Drain",
    "Strip",
    "Overextract",
    "Bypass",
    "Shock"
  ],
  learningSprinkles: [
    "Resilience needs long-horizon tradeoffs.",
    "Early intervention lowers collapse risk.",
    "Biodiversity supports system stability.",
    "Evidence-based pacing outperforms panic moves."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(34,197,94,0.18),transparent_52%)]",
    "panelBorder": "border-emerald-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-emerald-200/35 text-emerald-100",
    "progressBar": "bg-emerald-300",
    "optionIdle": "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20",
    "optionActive": "border-emerald-300/80 bg-emerald-400/20",
    "primaryButton": "bg-emerald-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-emerald-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade120CoralTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
