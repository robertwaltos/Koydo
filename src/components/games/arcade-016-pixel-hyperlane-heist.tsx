"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-016",
  shortLabel: "Arcade 016",
  title: "Pixel Hyperlane Heist",
  mascot: "pixel",
  startMessage: "Pixel: dual-lock each hyperlane and dodge trap decoys.",
  winMessage: "Pixel: vault heist complete. Hyperlanes are fully secured.",
  failMessage: "Pixel: heist route collapsed. Re-run with cleaner picks.",
  objectiveNouns: [
    "hyperlane gate",
    "vault corridor",
    "drift shell",
    "proxy lane",
    "latency chamber",
    "signal lock",
  ],
  promptLeads: [
    "Multi-signal pressure rising in",
    "Two true cues are hidden around",
    "Only precise dual picks stabilize",
    "Trap signatures detected near",
  ],
  correctActions: ["Anchor", "Stitch", "Balance", "Normalize", "Align"],
  decoyActions: ["Spoof", "Jam", "Skew", "Flood", "Drift"],
  learningSprinkles: [
    "Dual-signal validation reduces false positives.",
    "Trap-aware selection improves resilience.",
    "Sequence discipline is stronger than panic speed.",
    "Control loops need both precision and timing.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(14,165,233,0.2),transparent_52%)]",
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
  minRoundMs: 2800,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 6,
};

export default function Arcade016PixelHyperlaneHeist() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
