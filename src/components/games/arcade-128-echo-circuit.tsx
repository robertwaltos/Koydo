"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-128",
  shortLabel: "Arcade 128",
  title: "Echo Circuit",
  mascot: "echo",
  startMessage: "Echo: stay adaptive and pick evidence-backed actions as pressure scales in Echo Circuit.",
  winMessage: "Echo: mission complete. You balanced speed, accuracy, and control.",
  failMessage: "Echo: mission dropped. Re-enter with steadier choices.",
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
    "aura": "bg-[radial-gradient(circle_at_14%_20%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(139,92,246,0.2),transparent_52%)]",
    "panelBorder": "border-violet-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-violet-200/35 text-violet-100",
    "progressBar": "bg-violet-300",
    "optionIdle": "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20",
    "optionActive": "border-violet-300/80 bg-violet-400/20",
    "primaryButton": "bg-violet-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-violet-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade128EchoCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
