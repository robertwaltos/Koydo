"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-007",
  shortLabel: "Arcade 007",
  title: "Spark Circuit Rally",
  mascot: "spark",
  startMessage: "Spark: keep circuit pressure in range and chain perfect calls.",
  winMessage: "Spark: relay stable. Circuit rally dominated.",
  failMessage: "Spark: overload hit the rail. Reset and reroute.",
  objectiveNouns: [
    "amp ring",
    "voltage lane",
    "relay bar",
    "prime circuit",
    "flux conduit",
    "pulse array",
  ],
  promptLeads: [
    "Load spike approaching, regulate",
    "Only one choice keeps throughput in",
    "Under time stress, preserve balance on",
    "Grid oscillation detected around",
  ],
  correctActions: ["Equalize", "Dampen", "Ground", "Tune", "Calibrate"],
  decoyActions: ["Overdrive", "Short", "Spike", "Bypass", "Scatter"],
  learningSprinkles: [
    "Even distribution prevents hot spots.",
    "Small tuning beats late emergency fixes.",
    "Pattern rhythm helps fast numeric reasoning.",
    "Constraint-first choices improve reliability.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(251,146,60,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    panelBorder: "border-orange-200/30",
    panelBackground: "bg-black/35",
    chip: "border-orange-200/35 text-orange-100",
    progressBar: "bg-orange-300",
    optionIdle: "border-orange-100/25 bg-orange-100/10 hover:bg-orange-100/20",
    optionActive: "border-orange-300/80 bg-orange-400/20",
    primaryButton: "bg-orange-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-orange-100",
  },
  baseRoundMs: 5250,
  minRoundMs: 2750,
  roundDecayMs: 335,
};

export default function Arcade007SparkCircuitRally() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
