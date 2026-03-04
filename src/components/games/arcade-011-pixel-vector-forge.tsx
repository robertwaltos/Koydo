"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-011",
  shortLabel: "Arcade 011",
  title: "Pixel Vector Forge",
  mascot: "pixel",
  startMessage: "Pixel: forge the clean vector path and avoid noise traps.",
  winMessage: "Pixel: forge stabilized. Vector lanes are secure.",
  failMessage: "Pixel: vector chain snapped. Rebuild the run.",
  objectiveNouns: [
    "vector rail",
    "path matrix",
    "drift shell",
    "signal forge",
    "angle lane",
    "trace core",
  ],
  promptLeads: [
    "Trajectory conflict detected in",
    "Only one option preserves direction on",
    "Noise pressure rising around",
    "Fast correction window open for",
  ],
  correctActions: ["Normalize", "Anchor", "Align", "Balance", "Refine"],
  decoyActions: ["Skew", "Oversteer", "Scramble", "Clip", "Drift"],
  learningSprinkles: [
    "Direction control improves with stable reference points.",
    "Estimate first, then execute precisely.",
    "Small drift compounds if unchecked.",
    "Signal-to-noise awareness speeds decisions.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(34,211,238,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(14,165,233,0.2),transparent_52%)]",
    panelBorder: "border-sky-200/30",
    panelBackground: "bg-black/35",
    chip: "border-sky-200/35 text-sky-100",
    progressBar: "bg-sky-300",
    optionIdle: "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20",
    optionActive: "border-sky-300/80 bg-sky-400/20",
    primaryButton: "bg-sky-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-sky-100",
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade011PixelVectorForge() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
