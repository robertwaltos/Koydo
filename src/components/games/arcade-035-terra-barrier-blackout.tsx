"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-035",
  shortLabel: "Arcade 035",
  title: "Terra Barrier Blackout",
  mascot: "terra",
  startMessage: "Terra: restore barrier systems before blackout cascades.",
  winMessage: "Terra: blackout contained. Barrier ecology is stable.",
  failMessage: "Terra: barrier failed. Re-run with sharper triage.",
  objectiveNouns: ["barrier gate", "canopy wall", "water reserve", "root channel", "climate spine", "habitat shell"],
  promptLeads: ["Dual-safe interventions required in", "Trap hazard concealed around", "Blackout pressure rising on", "Defend resilience across"],
  correctActions: ["Reinforce", "Rebalance", "Conserve", "Buffer", "Restore"],
  decoyActions: ["Drain", "Overheat", "Strip", "Dump", "Ignore"],
  learningSprinkles: [
    "Redundant defenses reduce blackout risk.",
    "Trap avoidance preserves recovery tools.",
    "Balanced interventions beat panic moves.",
    "Early triage lowers total damage.",
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

export default function Arcade035TerraBarrierBlackout() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
