"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-017",
  shortLabel: "Arcade 017",
  title: "Spark Relay Frenzy",
  mascot: "spark",
  startMessage: "Spark: keep relay math clean and avoid overload traps.",
  winMessage: "Spark: relay frenzy mastered. Grid output stayed stable.",
  failMessage: "Spark: relay line blew out. Reset and rebalance.",
  objectiveNouns: [
    "relay matrix",
    "factor rail",
    "current coil",
    "prime chamber",
    "sum ladder",
    "flux gate",
  ],
  promptLeads: [
    "Throughput spike incoming on",
    "Constraint-safe operation needed for",
    "A trap branch is hidden near",
    "Keep signal integrity in",
  ],
  correctActions: ["Reduce", "Equalize", "Ground", "Tune", "Calibrate"],
  decoyActions: ["Overdrive", "Spike", "Bypass", "Short", "Scatter"],
  learningSprinkles: [
    "Stable math loops outperform risky bursts.",
    "Prime/factor checks reduce late-game errors.",
    "Trap-aware routing protects throughput.",
    "Consistency increases both speed and accuracy.",
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
  targetBestCombo: 8,
};

export default function Arcade017SparkRelayFrenzy() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
