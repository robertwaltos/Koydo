"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-145",
  shortLabel: "Arcade 145",
  title: "Coral Circuit",
  mascot: "terra",
  startMessage: "Terra: protect systems resilience and choose interventions that reduce cascade risk in Coral Circuit.",
  winMessage: "Terra: resilience corridor secured. Strong engineering judgment.",
  failMessage: "Terra: failure cascade initiated. Retry with safer tradeoffs.",
  objectiveNouns: [
    "stability lane",
    "sensor node",
    "safety ring",
    "control rail",
    "resilience grid",
    "systems core"
  ],
  promptLeads: [
    "Load variance detected on",
    "Choose the intervention that limits cascade risk in",
    "Only one response preserves safety margin in",
    "Critical systems alert for"
  ],
  correctActions: [
    "Stabilize",
    "Regulate",
    "Buffer",
    "Reinforce",
    "Calibrate",
    "Secure"
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
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 9,
};

export default function Arcade145CoralCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
