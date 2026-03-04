"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-027",
  shortLabel: "Arcade 027",
  title: "Spark Gridquake",
  mascot: "spark",
  startMessage: "Spark: absorb gridquakes with clean math stabilizers.",
  winMessage: "Spark: gridquake dissipated. Reactor grid is balanced.",
  failMessage: "Spark: grid cracked. Retry with safer operations.",
  objectiveNouns: ["grid rail", "flux chamber", "relay shell", "factor lane", "prime coil", "pulse gate"],
  promptLeads: ["Gridquake wave entering", "Stable operation needed in", "Trap overload hiding near", "Protect throughput across"],
  correctActions: ["Equalize", "Ground", "Reduce", "Calibrate", "Refit"],
  decoyActions: ["Overdrive", "Short", "Spike", "Jam", "Scatter"],
  learningSprinkles: [
    "Balanced operations prevent chain failures.",
    "Prime/factor checks reduce mistakes.",
    "Trap awareness protects combo momentum.",
    "Consistency increases solve speed.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(217,119,6,0.2),transparent_52%)]",
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

export default function Arcade027SparkGridquake() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
