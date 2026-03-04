"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-001",
  shortLabel: "Arcade 001",
  title: "Neon Vault Breaker",
  mascot: "pixel",
  startMessage: "Pixel: read the telemetry pulse and crack each vault lane in sequence.",
  winMessage: "Pixel: vault network is clear. Massive streak energy secured.",
  failMessage: "Pixel: vault defense collapsed. Reboot and try a new route.",
  objectiveNouns: [
    "vector lock",
    "prime lane",
    "checksum gate",
    "mirror tunnel",
    "velocity arc",
    "signal core",
  ],
  promptLeads: [
    "Pressure spike incoming, choose the clean intercept for",
    "A fast parity check appears on",
    "Pathfinding cue lights up around",
    "Only one sequence keeps momentum in",
  ],
  correctActions: [
    "Calibrate",
    "Stabilize",
    "Anchor",
    "Normalize",
    "Balance",
  ],
  decoyActions: [
    "Overclock",
    "Jam",
    "Bypass",
    "Flood",
    "Invert",
  ],
  learningSprinkles: [
    "Check even/odd parity before committing.",
    "Faster path is not always lower risk.",
    "Use rough magnitude estimates under pressure.",
    "Momentum improves when choices stay consistent.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.26),transparent_46%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_52%)]",
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
};

export default function Arcade001NeonVaultBreaker() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
