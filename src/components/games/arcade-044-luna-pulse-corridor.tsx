"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-044",
  shortLabel: "Arcade 044",
  title: "Luna Pulse Corridor",
  mascot: "luna",
  startMessage: "Luna: keep pulse corridor timing locked for elite streaks.",
  winMessage: "Luna: corridor harmonized. Rhythm field stayed coherent.",
  failMessage: "Luna: pulse corridor collapsed. Restart with calmer pacing.",
  objectiveNouns: ["pulse lane", "tempo shell", "chorus gate", "sync prism", "meter arc", "phrase ribbon"],
  promptLeads: ["Cadence squeeze detected on", "Streak-critical cue in", "Maintain clean phrasing through", "Only one phrase protects flow in"],
  correctActions: ["Sync", "Phrase", "Resolve", "Blend", "Accent"],
  decoyActions: ["Rush", "Drag", "Flatten", "Break", "Scatter"],
  learningSprinkles: [
    "Stable cadence protects combo runs.",
    "Meter awareness improves timing picks.",
    "Rhythm chunking improves recall under pressure.",
    "Consistency beats aggressive overplay.",
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

export default function Arcade044LunaPulseCorridor() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
