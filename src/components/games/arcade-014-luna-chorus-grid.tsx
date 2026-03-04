"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-014",
  shortLabel: "Arcade 014",
  title: "Luna Chorus Grid",
  mascot: "luna",
  startMessage: "Luna: keep phrase timing aligned as chorus grids accelerate.",
  winMessage: "Luna: chorus grid mastered. Timing stayed locked.",
  failMessage: "Luna: phrase lattice slipped. Restart with steadier cadence.",
  objectiveNouns: [
    "chorus grid",
    "tempo ribbon",
    "meter shell",
    "phrase prism",
    "sync lane",
    "beat arc",
  ],
  promptLeads: [
    "Rhythm compression detected in",
    "Only one pattern keeps harmony in",
    "Stage pressure spikes near",
    "Cadence drift rising around",
  ],
  correctActions: ["Sync", "Phrase", "Resolve", "Accent", "Blend"],
  decoyActions: ["Rush", "Drag", "Scatter", "Flatten", "Break"],
  learningSprinkles: [
    "Timing chunks improve memory retrieval.",
    "Consistent meter supports prediction accuracy.",
    "Controlled accents stabilize sequencing.",
    "Rhythm discipline improves response timing.",
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
  baseRoundMs: 5300,
  minRoundMs: 2800,
  roundDecayMs: 325,
};

export default function Arcade014LunaChorusGrid() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
