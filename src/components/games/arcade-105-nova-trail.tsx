"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-105",
  shortLabel: "Arcade 105",
  title: "Nova Trail",
  mascot: "pixel",
  startMessage: "Pixel: Pixel: isolate decoys fast and keep your logic chain consistent in Nova Trail.",
  winMessage: "Pixel: Pixel: logic grid secured. Excellent pattern discipline.",
  failMessage: "Pixel: Pixel: false branch chosen. Retry with cleaner reasoning.",
  objectiveNouns: [
    "logic lane",
    "state node",
    "pathfinder grid",
    "signal branch",
    "decision tree",
    "checksum gate"
  ],
  promptLeads: [
    "Branch conflict detected on",
    "Choose the deterministic path for",
    "Only one option avoids contradiction in",
    "Trace the cleanest logic route through"
  ],
  correctActions: [
    "Validate",
    "Trace",
    "Normalize",
    "Anchor",
    "Resolve"
  ],
  decoyActions: [
    "Bypass",
    "Guess",
    "Invert",
    "Flood",
    "Jam"
  ],
  learningSprinkles: [
    "Deterministic steps reduce error.",
    "Check assumptions before branching.",
    "Consistency beats speed under noise.",
    "Validate state transitions explicitly."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.26),transparent_46%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_52%)]",
    "panelBorder": "border-sky-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-sky-200/35 text-sky-100",
    "progressBar": "bg-sky-300",
    "optionIdle": "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20",
    "optionActive": "border-sky-300/80 bg-sky-400/20",
    "primaryButton": "bg-sky-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-sky-100"
  },
  baseRoundMs: 5350,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade105NovaTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
