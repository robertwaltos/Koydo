"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-005",
  shortLabel: "Arcade 005",
  title: "Terra Shield Garden",
  mascot: "terra",
  startMessage: "Terra: keep the habitat shields stable and prevent cascade loss.",
  winMessage: "Terra: habitat secured. Your decisions restored full balance.",
  failMessage: "Terra: shield chain failed. Rebuild with cleaner priorities.",
  objectiveNouns: [
    "canopy shield",
    "water grid",
    "root chamber",
    "pollinator lane",
    "soil node",
    "climate ring",
  ],
  promptLeads: [
    "Ecosystem stress rises, choose the sustainable action for",
    "Resource imbalance detected in",
    "Only one intervention protects long-term health of",
    "Hazard front arrives, secure stability in",
  ],
  correctActions: [
    "Restore",
    "Rebalance",
    "Buffer",
    "Conserve",
    "Regulate",
  ],
  decoyActions: [
    "Drain",
    "Strip",
    "Overheat",
    "Overgraze",
    "Spike",
  ],
  learningSprinkles: [
    "Short-term gain can break long-term systems.",
    "Balanced inputs keep ecosystems resilient.",
    "Buffer zones reduce chain reactions.",
    "Early corrections cost less than late repairs.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(34,197,94,0.18),transparent_52%)]",
    panelBorder: "border-emerald-200/30",
    panelBackground: "bg-black/35",
    chip: "border-emerald-200/35 text-emerald-100",
    progressBar: "bg-emerald-300",
    optionIdle: "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20",
    optionActive: "border-emerald-300/80 bg-emerald-400/20",
    primaryButton: "bg-emerald-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-emerald-100",
  },
  baseRoundMs: 5500,
  minRoundMs: 3000,
  roundDecayMs: 330,
};

export default function Arcade005TerraShieldGarden() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
