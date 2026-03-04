"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-025",
  shortLabel: "Arcade 025",
  title: "Terra Stormline Command",
  mascot: "terra",
  startMessage: "Terra: make dual-safe interventions while stormline traps escalate.",
  winMessage: "Terra: stormline command successful. Habitat walls held.",
  failMessage: "Terra: stormline breached. Rebuild the defense loop.",
  objectiveNouns: [
    "stormline gate",
    "canopy wall",
    "water reserve",
    "root channel",
    "climate shield",
    "habitat spine",
  ],
  promptLeads: [
    "Dual interventions required across",
    "Trap hazards are masking",
    "Protect resilience in",
    "Pressure fronts converging on",
  ],
  correctActions: ["Reinforce", "Rebalance", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant safeguards lower collapse risk.",
    "Trap recognition protects critical reserves.",
    "Balanced responses outperform panic actions.",
    "Long-term stability starts with early triage.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(22,163,74,0.2),transparent_52%)]",
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

export default function Arcade025TerraStormlineCommand() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
