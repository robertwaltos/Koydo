"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-019",
  shortLabel: "Arcade 019",
  title: "Luna Tempo Shards",
  mascot: "luna",
  startMessage: "Luna: keep tempo shards aligned and sustain a high combo streak.",
  winMessage: "Luna: shard lattice harmonized. Performance line held perfectly.",
  failMessage: "Luna: rhythm fractured. Rebuild your cadence and retry.",
  objectiveNouns: [
    "tempo shard",
    "chorus lane",
    "meter prism",
    "phrase spiral",
    "sync ribbon",
    "stage arc",
  ],
  promptLeads: [
    "Cadence pressure building around",
    "Only one phrase keeps flow in",
    "Timing window tightening for",
    "Hold clean rhythm through",
  ],
  correctActions: ["Sync", "Phrase", "Resolve", "Accent", "Blend"],
  decoyActions: ["Rush", "Drag", "Scatter", "Flatten", "Break"],
  learningSprinkles: [
    "Steady cadence improves memory chunking.",
    "Rhythm discipline boosts fast recall.",
    "Pattern tracking reduces timing drift.",
    "High streak control requires calm pacing.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.2),transparent_52%)]",
    panelBorder: "border-fuchsia-200/30",
    panelBackground: "bg-black/35",
    chip: "border-fuchsia-200/35 text-fuchsia-100",
    progressBar: "bg-fuchsia-300",
    optionIdle: "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20",
    optionActive: "border-fuchsia-300/80 bg-fuchsia-400/20",
    primaryButton: "bg-fuchsia-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-fuchsia-100",
  },
  baseRoundMs: 5250,
  minRoundMs: 2800,
  roundDecayMs: 330,
  targetBestCombo: 9,
};

export default function Arcade019LunaTempoShards() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
