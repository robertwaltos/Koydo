"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-119",
  shortLabel: "Arcade 119",
  title: "Maple Trail",
  mascot: "luna",
  startMessage: "Luna: stay adaptive and pick evidence-backed actions as pressure scales in Maple Trail.",
  winMessage: "Luna: mission complete. You balanced speed, accuracy, and control.",
  failMessage: "Luna: mission dropped. Re-enter with steadier choices.",
  objectiveNouns: [
    "mission lane",
    "signal node",
    "control ring",
    "challenge rail",
    "objective grid",
    "momentum core"
  ],
  promptLeads: [
    "Multi-skill challenge detected on",
    "Choose the strongest all-around move for",
    "Only one option maintains clean momentum in",
    "Pressure rising fast: stabilize"
  ],
  correctActions: [
    "Stabilize",
    "Align",
    "Calibrate",
    "Secure",
    "Balance"
  ],
  decoyActions: [
    "Rush",
    "Spike",
    "Skip",
    "Bypass",
    "Overload"
  ],
  learningSprinkles: [
    "Blend speed with evidence.",
    "Adaptive pacing improves outcomes.",
    "Consistent choices build momentum.",
    "Recover early after mistakes."
  ],
  theme: {
    "aura": "bg-[radial-gradient(circle_at_16%_20%,rgba(244,114,182,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(217,70,239,0.18),transparent_52%)]",
    "panelBorder": "border-fuchsia-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-fuchsia-200/35 text-fuchsia-100",
    "progressBar": "bg-fuchsia-300",
    "optionIdle": "border-fuchsia-100/25 bg-fuchsia-100/10 hover:bg-fuchsia-100/20",
    "optionActive": "border-fuchsia-300/80 bg-fuchsia-400/20",
    "primaryButton": "bg-fuchsia-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-fuchsia-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade119MapleTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
