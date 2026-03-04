"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-051",
  shortLabel: "Arcade 051",
  title: "Pixel Parallax Lock",
  mascot: "pixel",
  startMessage: "Pixel: cut through parallax noise and lock dual-safe lanes.",
  winMessage: "Pixel: parallax field cleared. Route integrity secured.",
  failMessage: "Pixel: parallax drift won. Retry with cleaner filters.",
  objectiveNouns: ["parallax lane", "signal shell", "phase gate", "proxy arc", "drift rail", "vector prism"],
  promptLeads: ["Two valid channels appear in", "Parallax traps are hiding around", "Control pressure rising across", "Stabilize pathways through"],
  correctActions: ["Anchor", "Normalize", "Align", "Balance", "Stitch"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual verification lowers misreads.",
    "Trap filtering preserves lives.",
    "Steady timing beats panic clicks.",
    "Reference checks improve precision.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(14,165,233,0.2),transparent_52%)]",
    panelBorder: "border-cyan-200/30",
    panelBackground: "bg-black/35",
    chip: "border-cyan-200/35 text-cyan-100",
    progressBar: "bg-cyan-300",
    optionIdle: "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20",
    optionActive: "border-cyan-300/80 bg-cyan-400/20",
    primaryButton: "bg-cyan-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-cyan-100",
  },
  baseRoundMs: 5400,
  minRoundMs: 2800,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade051PixelParallaxLock() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
