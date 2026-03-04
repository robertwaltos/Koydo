"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-054",
  shortLabel: "Arcade 054",
  title: "Luna Tempo Aperture",
  mascot: "luna",
  startMessage: "Luna: hold tempo aperture alignment for elite streaks.",
  winMessage: "Luna: aperture synchronized. Cadence remained flawless.",
  failMessage: "Luna: aperture collapsed. Re-enter with steadier timing.",
  objectiveNouns: ["tempo lane", "chorus shell", "sync gate", "meter arc", "phrase prism", "rhythm ribbon"],
  promptLeads: ["Cadence pressure rising in", "Streak-critical cue on", "Hold clean phrasing through", "Only one phrase preserves flow in"],
  correctActions: ["Sync", "Phrase", "Resolve", "Blend", "Accent"],
  decoyActions: ["Rush", "Drag", "Flatten", "Break", "Scatter"],
  learningSprinkles: [
    "Stable cadence protects streak quality.",
    "Meter awareness sharpens timing picks.",
    "Rhythm chunking improves recall speed.",
    "Consistency beats over-aggression.",
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
  targetBestCombo: 10,
};

export default function Arcade054LunaTempoAperture() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
