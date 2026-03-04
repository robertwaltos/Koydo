"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-012",
  shortLabel: "Arcade 012",
  title: "Spark Prime Flux",
  mascot: "spark",
  startMessage: "Spark: route prime-safe operations before flux spikes cascade.",
  winMessage: "Spark: prime flux contained. Grid stayed efficient.",
  failMessage: "Spark: flux overflowed. Re-enter with cleaner math calls.",
  objectiveNouns: [
    "prime node",
    "factor channel",
    "sum ladder",
    "mod gate",
    "relay coil",
    "current rail",
  ],
  promptLeads: [
    "Computation pressure climbing on",
    "Only one operation protects",
    "Reactor branch unstable near",
    "Solve quickly while preserving balance in",
  ],
  correctActions: ["Factor", "Reduce", "Balance", "Equalize", "Refit"],
  decoyActions: ["Multiply", "Overload", "Skip", "Spike", "Jam"],
  learningSprinkles: [
    "Prime checks reduce branching mistakes.",
    "Factor awareness improves speed and accuracy.",
    "Constraint filtering narrows the right move.",
    "Reliable arithmetic beats risky shortcuts.",
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
  baseRoundMs: 5250,
  minRoundMs: 2750,
  roundDecayMs: 335,
};

export default function Arcade012SparkPrimeFlux() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
