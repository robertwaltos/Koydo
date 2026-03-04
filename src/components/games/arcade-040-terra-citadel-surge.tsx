"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-040",
  shortLabel: "Arcade 040",
  title: "Terra Citadel Surge",
  mascot: "terra",
  startMessage: "Terra: reinforce the citadel against surge-wave traps.",
  winMessage: "Terra: citadel secured. Ecological shields are restored.",
  failMessage: "Terra: surge broke the walls. Retry with stronger triage.",
  objectiveNouns: ["citadel gate", "canopy barrier", "water reserve", "root lattice", "climate shell", "habitat spine"],
  promptLeads: ["Dual-safe moves required in", "Surge traps embedded around", "Resilience load climbing across", "Protect long-term stability in"],
  correctActions: ["Reinforce", "Rebalance", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant protection lowers cascade risk.",
    "Trap avoidance preserves recovery capacity.",
    "Balanced responses beat panic reactions.",
    "Early intervention prevents deep failures.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(21,128,61,0.2),transparent_52%)]",
    panelBorder: "border-green-200/30",
    panelBackground: "bg-black/35",
    chip: "border-green-200/35 text-green-100",
    progressBar: "bg-green-300",
    optionIdle: "border-green-100/25 bg-green-100/10 hover:bg-green-100/20",
    optionActive: "border-green-300/80 bg-green-400/20",
    primaryButton: "bg-green-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-green-100",
  },
  baseRoundMs: 5500,
  minRoundMs: 3000,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade040TerraCitadelSurge() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
