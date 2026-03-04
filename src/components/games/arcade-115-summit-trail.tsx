"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-115",
  shortLabel: "Arcade 115",
  title: "Summit Trail",
  mascot: "terra",
  startMessage: "Terra: hold system stability and pick resilient interventions as pressure escalates in Summit Trail.",
  winMessage: "Terra: summit systems stabilized. Excellent engineering judgment.",
  failMessage: "Terra: resilience threshold breached. Retry with safer tradeoffs.",
  objectiveNouns: [
    "stability lane",
    "load node",
    "safety ring",
    "control rail",
    "resilience grid",
    "systems core"
  ],
  promptLeads: [
    "Structural stress detected on",
    "Choose the intervention that preserves safety in",
    "Only one action limits cascade risk in",
    "Critical systems alert: stabilize"
  ],
  correctActions: [
    "Reinforce",
    "Buffer",
    "Regulate",
    "Calibrate",
    "Stabilize"
  ],
  decoyActions: [
    "Overload",
    "Bypass",
    "Strip",
    "Spike",
    "Rush"
  ],
  learningSprinkles: [
    "Safety margins reduce failure cascades.",
    "High pressure needs disciplined sequencing.",
    "Evidence-backed tradeoffs outperform shortcuts.",
    "Early stabilization prevents compounding damage."
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
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 9,
};

export default function Arcade115SummitTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
