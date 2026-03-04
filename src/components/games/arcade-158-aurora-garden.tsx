"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-158",
  shortLabel: "Arcade 158",
  title: "Aurora Garden",
  mascot: "terra",
  startMessage: "Terra: stabilize the system and choose interventions that hold long-term integrity in Aurora Garden.",
  winMessage: "Terra: system restored. Strong scientific judgment under pressure.",
  failMessage: "Terra: cascade took hold. Rebuild with safer engineering tradeoffs.",
  objectiveNouns: [
    "reactor sleeve",
    "pressure conduit",
    "habitat chamber",
    "cooling spine",
    "sensor lattice",
    "stability node"
  ],
  promptLeads: [
    "System variance climbing in",
    "Select the intervention that preserves safety for",
    "Only one response limits cascade risk in",
    "Fast decision needed: protect"
  ],
  correctActions: [
    "Stabilize",
    "Regulate",
    "Buffer",
    "Reinforce",
    "Calibrate"
  ],
  decoyActions: [
    "Overheat",
    "Bypass",
    "Drain",
    "Spike",
    "Strip"
  ],
  learningSprinkles: [
    "Safety margins protect complex systems.",
    "Early mitigation reduces cascade risk.",
    "Reliable models beat risky shortcuts.",
    "Engineering tradeoffs require evidence."
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
  baseRoundMs: 5500,
  minRoundMs: 3000,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade158AuroraGarden() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
