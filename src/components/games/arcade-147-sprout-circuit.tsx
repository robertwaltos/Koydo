"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-147",
  shortLabel: "Arcade 147",
  title: "Sprout Circuit",
  mascot: "spark",
  startMessage: "Spark: keep logistics flow stable and route each queue correction with precision in Sprout Circuit.",
  winMessage: "Spark: dispatch grid synchronized. Excellent routing control.",
  failMessage: "Spark: queue collapse exceeded limits. Re-enter with cleaner sequencing.",
  objectiveNouns: [
    "dock lane",
    "cargo node",
    "route ring",
    "berth rail",
    "queue grid",
    "dispatch core"
  ],
  promptLeads: [
    "Harbor congestion rising on",
    "Choose the route plan that preserves throughput in",
    "Only one intervention prevents queue collapse in",
    "Rapid reroute required for"
  ],
  correctActions: [
    "Stage",
    "Prioritize",
    "Sequence",
    "Buffer",
    "Dispatch"
  ],
  decoyActions: [
    "Jam",
    "Bypass",
    "Overqueue",
    "Stall",
    "Misroute"
  ],
  learningSprinkles: [
    "Throughput depends on sequencing quality.",
    "Small delays can trigger major bottlenecks.",
    "Priority rules reduce congestion risk.",
    "Buffering critical lanes improves resilience."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    "panelBorder": "border-amber-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-amber-200/35 text-amber-100",
    "progressBar": "bg-amber-300",
    "optionIdle": "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20",
    "optionActive": "border-amber-300/80 bg-amber-400/20",
    "primaryButton": "bg-amber-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-amber-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "double",
  targetBestCombo: 6,
};

export default function Arcade147SproutCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
