"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-030",
  shortLabel: "Arcade 030",
  title: "Terra Corefront",
  mascot: "terra",
  startMessage: "Terra: defend the corefront with dual-safe interventions.",
  winMessage: "Terra: corefront held. Ecosystem shield restored.",
  failMessage: "Terra: corefront breached. Re-run with stronger triage.",
  objectiveNouns: ["corefront gate", "canopy wall", "water channel", "root lattice", "climate shell", "habitat spine"],
  promptLeads: ["Dual-safe choices required in", "Trap hazards surrounding", "Resilience load spiking across", "Protect stability in"],
  correctActions: ["Reinforce", "Buffer", "Rebalance", "Conserve", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant safeguards prevent cascades.",
    "Trap filtering protects critical resources.",
    "Balanced responses improve survival odds.",
    "Early mitigation lowers long-term cost.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(21,128,61,0.2),transparent_52%)]",
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

export default function Arcade030TerraCorefront() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
