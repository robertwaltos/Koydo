"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-015",
  shortLabel: "Arcade 015",
  title: "Terra Canopy Siege",
  mascot: "terra",
  startMessage: "Terra: hold canopy defenses and protect habitat balance.",
  winMessage: "Terra: canopy siege survived. Ecosystem restored.",
  failMessage: "Terra: canopy systems failed. Retry with smarter triage.",
  objectiveNouns: [
    "canopy shield",
    "soil channel",
    "root lattice",
    "water reserve",
    "climate node",
    "habitat gate",
  ],
  promptLeads: [
    "Ecology stress wave approaching",
    "Only one move preserves resilience in",
    "Resource conflict escalating around",
    "Storm load rising on",
  ],
  correctActions: ["Rebalance", "Buffer", "Conserve", "Restore", "Regulate"],
  decoyActions: ["Drain", "Strip", "Overheat", "Dump", "Ignore"],
  learningSprinkles: [
    "Resilience depends on balanced resource loops.",
    "Early mitigation prevents collapse cascades.",
    "Tradeoffs should protect long-term stability.",
    "Adaptive pacing beats panic reactions.",
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
  roundDecayMs: 335,
};

export default function Arcade015TerraCanopySiege() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
