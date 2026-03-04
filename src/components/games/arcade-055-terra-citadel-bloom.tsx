"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-055",
  shortLabel: "Arcade 055",
  title: "Terra Citadel Bloom",
  mascot: "terra",
  startMessage: "Terra: guard citadel bloom fronts with dual-safe triage.",
  winMessage: "Terra: citadel bloom secured. Habitat shields restored.",
  failMessage: "Terra: bloom front collapsed. Retry with better prioritization.",
  objectiveNouns: ["citadel gate", "canopy wall", "water reserve", "root lattice", "climate spine", "habitat arc"],
  promptLeads: ["Dual-safe interventions needed in", "Trap surge hidden around", "Resilience pressure climbing across", "Protect long-term balance in"],
  correctActions: ["Reinforce", "Rebalance", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant defenses reduce collapse risk.",
    "Trap filtering protects recovery tools.",
    "Balanced triage beats panic responses.",
    "Early intervention prevents deep failures.",
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
  targetBestCombo: 8,
};

export default function Arcade055TerraCitadelBloom() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
