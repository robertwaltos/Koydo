"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-050",
  shortLabel: "Arcade 050",
  title: "Terra Bastion Wake",
  mascot: "terra",
  startMessage: "Terra: absorb bastion wakes with dual-safe interventions.",
  winMessage: "Terra: bastion wake contained. Habitat defense restored.",
  failMessage: "Terra: wake breached the wall. Retry with stronger triage.",
  objectiveNouns: ["bastion gate", "canopy wall", "water reserve", "root lattice", "climate spine", "habitat arc"],
  promptLeads: ["Dual-safe actions required in", "Trap surge hidden around", "Resilience pressure climbing across", "Protect long-term stability in"],
  correctActions: ["Reinforce", "Rebalance", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant defense lowers collapse odds.",
    "Trap filtering preserves recovery economy.",
    "Balanced responses outperform panic fixes.",
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

export default function Arcade050TerraBastionWake() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
