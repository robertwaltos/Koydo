"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-004",
  shortLabel: "Arcade 004",
  title: "Luna Beat Bloom",
  mascot: "luna",
  startMessage: "Luna: ride the rhythm cues and keep your timing phrases clean.",
  winMessage: "Luna: stage bloom complete. Timing and style stayed in sync.",
  failMessage: "Luna: tempo broke apart. Re-enter with steadier pacing.",
  objectiveNouns: [
    "chorus lane",
    "sync node",
    "tempo ribbon",
    "meter arc",
    "phrase channel",
    "beat lattice",
  ],
  promptLeads: [
    "Crowd energy surges, lock the clean rhythm line on",
    "Meter shift incoming, choose the balanced phrase for",
    "Only one timing move keeps flow through",
    "Harmony pressure rises, recover cadence in",
  ],
  correctActions: [
    "Sync",
    "Resolve",
    "Blend",
    "Accentuate",
    "Phrase",
  ],
  decoyActions: [
    "Rush",
    "Drag",
    "Overplay",
    "Flatten",
    "Scatter",
  ],
  learningSprinkles: [
    "Consistent tempo improves pattern recall.",
    "Rhythm grouping helps memory chunking.",
    "Small timing corrections prevent large drift.",
    "Controlled accents create clearer structure.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.18),transparent_52%)]",
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
  roundDecayMs: 320,
};

export default function Arcade004LunaBeatBloom() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
