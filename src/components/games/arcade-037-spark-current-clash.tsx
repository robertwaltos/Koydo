"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-037",
  shortLabel: "Arcade 037",
  title: "Spark Current Clash",
  mascot: "spark",
  startMessage: "Spark: survive current clashes with precision balancing.",
  winMessage: "Spark: clash resolved. Reactor current remains stable.",
  failMessage: "Spark: current conflict exploded. Retry with safer math.",
  objectiveNouns: ["current rail", "flux shell", "amp lane", "relay prism", "prime arc", "pulse gate"],
  promptLeads: ["Current clash detected in", "Only one operation protects", "Overload trap hidden around", "Keep throughput steady in"],
  correctActions: ["Equalize", "Ground", "Calibrate", "Reduce", "Refit"],
  decoyActions: ["Overdrive", "Spike", "Short", "Jam", "Scatter"],
  learningSprinkles: [
    "Constraint filtering lowers overload risk.",
    "Trap awareness protects combo chains.",
    "Steady arithmetic improves response speed.",
    "Balanced outputs reduce failure cascades.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_16%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_84%_82%,rgba(234,88,12,0.2),transparent_52%)]",
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
  baseRoundMs: 5300,
  minRoundMs: 2750,
  roundDecayMs: 335,
  allowTrapDecoys: true,
  targetBestCombo: 9,
};

export default function Arcade037SparkCurrentClash() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
