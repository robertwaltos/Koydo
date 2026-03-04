"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-024",
  shortLabel: "Arcade 024",
  title: "Luna Prism Relay",
  mascot: "luna",
  startMessage: "Luna: keep prism relays synced and sustain elite combo tempo.",
  winMessage: "Luna: relay harmonized. Stage sequence was flawless.",
  failMessage: "Luna: relay rhythm collapsed. Re-enter with calmer pacing.",
  objectiveNouns: [
    "prism relay",
    "chorus arc",
    "sync ribbon",
    "meter shell",
    "phrase lane",
    "tempo bloom",
  ],
  promptLeads: [
    "Tempo compression detected in",
    "Hold clean phrasing through",
    "Window tightening around",
    "Only one move preserves flow in",
  ],
  correctActions: ["Sync", "Phrase", "Blend", "Resolve", "Accent"],
  decoyActions: ["Rush", "Drag", "Flatten", "Break", "Scatter"],
  learningSprinkles: [
    "Rhythm chunks aid fast recall.",
    "Stable pacing protects combo streaks.",
    "Prediction improves with meter awareness.",
    "Focused timing beats aggressive play.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(236,72,153,0.2),transparent_52%)]",
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

export default function Arcade024LunaPrismRelay() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
