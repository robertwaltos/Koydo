"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-029",
  shortLabel: "Arcade 029",
  title: "Luna Harmonic Siege",
  mascot: "luna",
  startMessage: "Luna: survive harmonic siege with flawless combo pacing.",
  winMessage: "Luna: harmonic siege cleared. Stage flow stayed pure.",
  failMessage: "Luna: harmony ruptured. Restart and rebuild cadence.",
  objectiveNouns: ["harmony lane", "tempo prism", "chorus spiral", "sync arc", "meter shell", "phrase ribbon"],
  promptLeads: ["Cadence pressure cresting on", "Only one phrase preserves flow in", "Streak-sensitive window around", "Hold precision through"],
  correctActions: ["Sync", "Phrase", "Resolve", "Blend", "Accent"],
  decoyActions: ["Rush", "Drag", "Flatten", "Break", "Scatter"],
  learningSprinkles: [
    "High combo control requires steady tempo.",
    "Rhythm chunking boosts recall speed.",
    "Clean cadence reduces timing errors.",
    "Prediction improves with stable meter.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_18%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(219,39,119,0.2),transparent_52%)]",
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
  targetBestCombo: 10,
};

export default function Arcade029LunaHarmonicSiege() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
