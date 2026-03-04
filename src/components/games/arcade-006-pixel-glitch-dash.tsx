"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-006",
  shortLabel: "Arcade 006",
  title: "Pixel Glitch Dash",
  mascot: "pixel",
  startMessage: "Pixel: route around glitch bursts and hold clean control.",
  winMessage: "Pixel: glitch field cleared. Precision run complete.",
  failMessage: "Pixel: control desynced. Reboot and dash again.",
  objectiveNouns: [
    "latency gate",
    "render lane",
    "signal shard",
    "phase tunnel",
    "drift node",
    "cache vault",
  ],
  promptLeads: [
    "Visual noise spiking, stabilize",
    "A fast branch appears for",
    "Only one action avoids overflow in",
    "Route pressure climbs, lock the clean path on",
  ],
  correctActions: ["Stitch", "Align", "Balance", "Correct", "Refine"],
  decoyActions: ["Scramble", "Flood", "Drift", "Skip", "Invert"],
  learningSprinkles: [
    "Signal filtering beats random speed.",
    "Stable control reduces compounding errors.",
    "Prioritize clean inputs under visual noise.",
    "Micro-corrections prevent full collapse.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.26),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(34,211,238,0.2),transparent_52%)]",
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
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade006PixelGlitchDash() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
