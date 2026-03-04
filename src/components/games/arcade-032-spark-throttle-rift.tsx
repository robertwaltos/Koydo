"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-032",
  shortLabel: "Arcade 032",
  title: "Spark Throttle Rift",
  mascot: "spark",
  startMessage: "Spark: stabilize throttle rifts and avoid overload decoys.",
  winMessage: "Spark: throttle grid stabilized. Output remains optimal.",
  failMessage: "Spark: throttle rift detonated. Retry with safer sequencing.",
  objectiveNouns: ["throttle rail", "flux conduit", "relay shell", "amp chamber", "prime gate", "pulse lane"],
  promptLeads: ["Rift pressure climbing inside", "Only one operation protects", "Decoy overload hiding near", "Keep throughput stable on"],
  correctActions: ["Equalize", "Ground", "Calibrate", "Reduce", "Refit"],
  decoyActions: ["Overdrive", "Spike", "Short", "Jam", "Scatter"],
  learningSprinkles: [
    "Constraint-first moves reduce overload risk.",
    "Trap filtering protects combo momentum.",
    "Steady arithmetic beats volatile bursts.",
    "Consistency improves reaction speed.",
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

export default function Arcade032SparkThrottleRift() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
