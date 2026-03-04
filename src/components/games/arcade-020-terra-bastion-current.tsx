"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-020",
  shortLabel: "Arcade 020",
  title: "Terra Bastion Current",
  mascot: "terra",
  startMessage: "Terra: lock two safe interventions per wave and outplay storm traps.",
  winMessage: "Terra: bastion current stabilized. Habitat systems recovered.",
  failMessage: "Terra: current collapsed. Retry with stronger triage.",
  objectiveNouns: [
    "canopy bastion",
    "soil current",
    "water lattice",
    "climate gate",
    "root reservoir",
    "habitat wall",
  ],
  promptLeads: [
    "Storm pressure front approaching",
    "Two safe interventions are needed in",
    "Trap signals are mixed into",
    "Balance resilience across",
  ],
  correctActions: ["Rebalance", "Reinforce", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Resilience grows with balanced interventions.",
    "Dual safeguards reduce cascade failures.",
    "Trap detection protects long-term stability.",
    "Early triage is cheaper than late recovery.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(34,197,94,0.2),transparent_52%)]",
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
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade020TerraBastionCurrent() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
