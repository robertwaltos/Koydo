"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-041",
  shortLabel: "Arcade 041",
  title: "Pixel Flux Mirage",
  mascot: "pixel",
  startMessage: "Pixel: pierce flux mirages with dual-lock precision.",
  winMessage: "Pixel: mirage grid collapsed. Core route secured.",
  failMessage: "Pixel: mirage swarm broke through. Retry with cleaner reads.",
  objectiveNouns: ["flux lane", "mirage gate", "drift prism", "signal shell", "phase rail", "proxy arc"],
  promptLeads: ["Two valid locks exist in", "Mirage traps are hiding around", "Control pressure surging in", "Stabilize the route through"],
  correctActions: ["Anchor", "Normalize", "Align", "Balance", "Stitch"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual verification lowers false positives.",
    "Trap filtering protects life economy.",
    "Steady loops beat panic clicking.",
    "Reference checks improve hit quality.",
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

export default function Arcade041PixelFluxMirage() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
