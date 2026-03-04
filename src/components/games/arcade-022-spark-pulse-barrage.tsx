"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-022",
  shortLabel: "Arcade 022",
  title: "Spark Pulse Barrage",
  mascot: "spark",
  startMessage: "Spark: dual-lock pulse windows and survive overload traps.",
  winMessage: "Spark: barrage contained. Power rails held max efficiency.",
  failMessage: "Spark: pulse chain ruptured. Retry with sharper timing.",
  objectiveNouns: [
    "pulse rail",
    "amp lattice",
    "flux gate",
    "relay tunnel",
    "prime coil",
    "voltage node",
  ],
  promptLeads: [
    "Two safe operations required for",
    "Overload traps are mixed into",
    "Burst pressure rising around",
    "Keep relay integrity inside",
  ],
  correctActions: ["Equalize", "Ground", "Calibrate", "Refit", "Dampen"],
  decoyActions: ["Overdrive", "Spike", "Short", "Jam", "Scatter"],
  learningSprinkles: [
    "Dual checks reduce overload mistakes.",
    "Constraint filtering improves speed.",
    "Trap avoidance preserves resources.",
    "Balanced output is safer than peak bursts.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(249,115,22,0.2),transparent_52%)]",
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
  minRoundMs: 2700,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade022SparkPulseBarrage() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
