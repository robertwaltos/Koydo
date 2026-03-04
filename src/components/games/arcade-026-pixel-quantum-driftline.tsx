"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-026",
  shortLabel: "Arcade 026",
  title: "Pixel Quantum Driftline",
  mascot: "pixel",
  startMessage: "Pixel: track dual-safe vectors through the driftline.",
  winMessage: "Pixel: driftline sealed. Quantum route is stable.",
  failMessage: "Pixel: driftline fractured. Re-enter with tighter control.",
  objectiveNouns: ["driftline rail", "quantum gate", "vector shell", "signal prism", "phase node", "proxy lane"],
  promptLeads: ["Two stable vectors exist in", "Trap signatures embedded around", "Lock both safe cues for", "Noise surging across"],
  correctActions: ["Anchor", "Normalize", "Align", "Stitch", "Balance"],
  decoyActions: ["Skew", "Bypass", "Flood", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual confirmation improves reliability.",
    "Trap filtering reduces failure cascades.",
    "Steady control beats chaotic speed.",
    "Reference checks improve route quality.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(2,132,199,0.2),transparent_52%)]",
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
  targetBestCombo: 7,
};

export default function Arcade026PixelQuantumDriftline() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
