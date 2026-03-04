"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-039",
  shortLabel: "Arcade 039",
  title: "Luna Rhythm Singularity",
  mascot: "luna",
  startMessage: "Luna: hold rhythm singularity with elite combo pacing.",
  winMessage: "Luna: singularity resolved. Cadence remained flawless.",
  failMessage: "Luna: timing core ruptured. Rebuild the flow.",
  objectiveNouns: ["rhythm lane", "tempo prism", "chorus shell", "sync arc", "meter gate", "phrase ribbon"],
  promptLeads: ["Cadence compression rising on", "Streak-critical cue in", "Only one phrase preserves flow in", "Maintain timing discipline through"],
  correctActions: ["Sync", "Phrase", "Resolve", "Blend", "Accent"],
  decoyActions: ["Rush", "Drag", "Flatten", "Break", "Scatter"],
  learningSprinkles: [
    "Stable pacing improves combo retention.",
    "Meter awareness sharpens timing decisions.",
    "Rhythm chunking boosts recall under pressure.",
    "Consistency outperforms raw aggression.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(219,39,119,0.2),transparent_52%)]",
    panelBorder: "border-pink-200/30",
    panelBackground: "bg-black/35",
    chip: "border-pink-200/35 text-pink-100",
    progressBar: "bg-pink-300",
    optionIdle: "border-pink-100/25 bg-pink-100/10 hover:bg-pink-100/20",
    optionActive: "border-pink-300/80 bg-pink-400/20",
    primaryButton: "bg-pink-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-pink-100",
  },
  baseRoundMs: 5250,
  minRoundMs: 2800,
  roundDecayMs: 330,
  targetBestCombo: 10,
};

export default function Arcade039LunaRhythmSingularity() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
