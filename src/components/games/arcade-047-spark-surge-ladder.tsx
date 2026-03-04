"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-047",
  shortLabel: "Arcade 047",
  title: "Spark Surge Ladder",
  mascot: "spark",
  startMessage: "Spark: climb the surge ladder with safe operations only.",
  winMessage: "Spark: surge ladder conquered. Reactor grid balanced.",
  failMessage: "Spark: surge ladder snapped. Retry with steadier math.",
  objectiveNouns: ["surge lane", "amp ladder", "relay shell", "flux gate", "prime rail", "pulse prism"],
  promptLeads: ["Surge pressure rising in", "Constraint-safe move needed for", "Overload trap hidden near", "Stabilize throughput across"],
  correctActions: ["Equalize", "Ground", "Calibrate", "Reduce", "Refit"],
  decoyActions: ["Overdrive", "Spike", "Short", "Jam", "Scatter"],
  learningSprinkles: [
    "Constraint-first choices avoid overloads.",
    "Trap awareness protects combo chains.",
    "Balanced outputs beat volatile spikes.",
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

export default function Arcade047SparkSurgeLadder() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
