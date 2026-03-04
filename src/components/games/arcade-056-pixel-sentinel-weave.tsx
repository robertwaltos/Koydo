"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-056",
  shortLabel: "Arcade 056",
  title: "Pixel Sentinel Weave",
  mascot: "pixel",
  startMessage: "Pixel: weave sentinel locks through dual-safe channels.",
  winMessage: "Pixel: sentinel weave complete. Threat mesh collapsed.",
  failMessage: "Pixel: weave broke. Retry with cleaner filtering.",
  objectiveNouns: ["weave lane", "signal shell", "phase gate", "proxy arc", "drift rail", "vector prism"],
  promptLeads: ["Two stable channels appear in", "Decoy traps are masking", "Control pressure rising across", "Protect route integrity through"],
  correctActions: ["Anchor", "Normalize", "Align", "Balance", "Stitch"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual checks reduce false commits.",
    "Trap filtering preserves survivability.",
    "Steady loops beat panic speed.",
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

export default function Arcade056PixelSentinelWeave() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
