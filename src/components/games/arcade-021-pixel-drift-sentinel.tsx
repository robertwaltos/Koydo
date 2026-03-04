"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-021",
  shortLabel: "Arcade 021",
  title: "Pixel Drift Sentinel",
  mascot: "pixel",
  startMessage: "Pixel: hold the sentinel line and catch drift before breach.",
  winMessage: "Pixel: sentinel net secured. Drift never broke through.",
  failMessage: "Pixel: sentinel line fell. Recalibrate and run again.",
  objectiveNouns: [
    "drift lane",
    "sentinel gate",
    "signal tunnel",
    "vector shell",
    "latency arc",
    "proxy node",
  ],
  promptLeads: [
    "Rapid drift signatures detected in",
    "Only one stable response protects",
    "Trap branch hiding near",
    "Maintain clean control in",
  ],
  correctActions: ["Stabilize", "Align", "Balance", "Anchor", "Refine"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Early drift correction prevents cascades.",
    "Trap-aware choices protect stability.",
    "Consistent control beats random speed.",
    "Reference checks improve precision.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(6,182,212,0.2),transparent_52%)]",
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
  baseRoundMs: 5350,
  minRoundMs: 2800,
  roundDecayMs: 335,
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade021PixelDriftSentinel() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
