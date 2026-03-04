"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-010",
  shortLabel: "Arcade 010",
  title: "Terra Storm Bastion",
  mascot: "terra",
  startMessage: "Terra: protect bastion systems before storm chains spread.",
  winMessage: "Terra: bastion held. Storm network neutralized.",
  failMessage: "Terra: shield ecology collapsed. Re-enter with better triage.",
  objectiveNouns: [
    "canopy wall",
    "water channel",
    "root vault",
    "storm ring",
    "soil relay",
    "habitat spine",
  ],
  promptLeads: [
    "Hazard front incoming, secure",
    "Resource instability detected on",
    "Only one intervention protects",
    "Environmental pressure stacking around",
  ],
  correctActions: ["Stabilize", "Reinforce", "Conserve", "Restore", "Buffer"],
  decoyActions: ["Drain", "Strip", "Overheat", "Ignore", "Spike"],
  learningSprinkles: [
    "Balanced systems resist shocks better.",
    "Early mitigation lowers total damage.",
    "Resource triage requires tradeoff awareness.",
    "Sustained stability beats aggressive bursts.",
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
  roundDecayMs: 335,
};

export default function Arcade010TerraStormBastion() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
