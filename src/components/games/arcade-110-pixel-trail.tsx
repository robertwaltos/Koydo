"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-110",
  shortLabel: "Arcade 110",
  title: "Pixel Trail",
  mascot: "terra",
  startMessage: "Terra: stabilize ecological systems by choosing resilient interventions in Pixel Trail.",
  winMessage: "Terra: biosphere lane secured. Great ecological tradeoff control.",
  failMessage: "Terra: resilience failed. Rebuild with stronger long-term choices.",
  objectiveNouns: [
    "habitat grid",
    "resource lane",
    "waterway node",
    "soil channel",
    "biosphere gate",
    "recovery ring"
  ],
  promptLeads: [
    "Ecosystem pressure detected on",
    "Choose the intervention that preserves balance in",
    "Only one move supports long-term recovery in",
    "Rapid decision required: protect"
  ],
  correctActions: [
    "Restore",
    "Conserve",
    "Buffer",
    "Regulate",
    "Reinforce"
  ],
  decoyActions: [
    "Strip",
    "Drain",
    "Overdraw",
    "Bypass",
    "Flood"
  ],
  learningSprinkles: [
    "Resilience is built through balanced systems.",
    "Short-term gains can weaken long-term stability.",
    "Resource recovery needs measured pacing.",
    "Early intervention limits collapse risk."
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
  targetBestCombo: 6,
};

export default function Arcade110PixelTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
