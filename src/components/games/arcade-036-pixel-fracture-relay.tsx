"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-036",
  shortLabel: "Arcade 036",
  title: "Pixel Fracture Relay",
  mascot: "pixel",
  startMessage: "Pixel: recover fracture relays with dual-safe lane locks.",
  winMessage: "Pixel: fracture relay stabilized. Grid returns to green.",
  failMessage: "Pixel: fracture spread out. Reset with tighter control.",
  objectiveNouns: ["fracture lane", "relay gate", "signal shard", "phase lattice", "drift arc", "proxy shell"],
  promptLeads: ["Two safe responses exist for", "Fracture traps are masking", "Control pressure rising in", "Preserve integrity through"],
  correctActions: ["Anchor", "Align", "Normalize", "Balance", "Stitch"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual checks reduce bad commits.",
    "Trap filtering preserves lives.",
    "Steady loops beat panic corrections.",
    "Reference anchors improve precision.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(3,105,161,0.2),transparent_52%)]",
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
  targetBestCombo: 8,
};

export default function Arcade036PixelFractureRelay() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
