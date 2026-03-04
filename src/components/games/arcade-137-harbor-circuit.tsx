"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-137",
  shortLabel: "Arcade 137",
  title: "Harbor Circuit",
  mascot: "spark",
  startMessage: "Spark: keep harbor logistics stable and pick the strongest throughput interventions in Harbor Circuit.",
  winMessage: "Spark: dock network stabilized. Excellent sequencing under pressure.",
  failMessage: "Spark: queue collapse triggered. Rebuild with smarter lane priorities.",
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

export default function Arcade137HarborCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
