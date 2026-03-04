"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-057",
  shortLabel: "Arcade 057",
  title: "Spark Relay Spiral",
  mascot: "spark",
  startMessage: "Spark: tame relay spirals and avoid overload decoys.",
  winMessage: "Spark: relay spiral solved. Grid remains efficient.",
  failMessage: "Spark: relay spiral collapsed. Retry with safer ops.",
  objectiveNouns: ["relay lane", "amp shell", "flux gate", "prime arc", "pulse rail", "voltage prism"],
  promptLeads: ["Constraint-safe move needed in", "Overload trap hidden near", "Throughput pressure rising across", "Stabilize output through"],
  correctActions: ["Equalize", "Ground", "Calibrate", "Reduce", "Refit"],
  decoyActions: ["Overdrive", "Spike", "Short", "Jam", "Scatter"],
  learningSprinkles: [
    "Constraint-first moves reduce overload risk.",
    "Trap awareness protects combo tempo.",
    "Balanced output beats volatile bursts.",
    "Consistent arithmetic improves speed.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    panelBorder: "border-amber-200/30",
    panelBackground: "bg-black/35",
    chip: "border-amber-200/35 text-amber-100",
    progressBar: "bg-amber-300",
    optionIdle: "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20",
    optionActive: "border-amber-300/80 bg-amber-400/20",
    primaryButton: "bg-amber-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-amber-100",
  },
  baseRoundMs: 5300,
  minRoundMs: 2750,
  roundDecayMs: 335,
  allowTrapDecoys: true,
  targetBestCombo: 9,
};

export default function Arcade057SparkRelaySpiral() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
