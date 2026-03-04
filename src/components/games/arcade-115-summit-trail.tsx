"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-115",
  shortLabel: "Arcade 115",
  title: "Summit Trail",
  mascot: "terra",
  startMessage: "Terra: stay adaptive and pick evidence-backed actions as pressure scales in Summit Trail.",
  winMessage: "Terra: mission complete. You balanced speed, accuracy, and control.",
  failMessage: "Terra: mission dropped. Re-enter with steadier choices.",
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
    "aura": "bg-[radial-gradient(circle_at_14%_16%,rgba(74,222,128,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(34,197,94,0.18),transparent_52%)]",
    "panelBorder": "border-emerald-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-emerald-200/35 text-emerald-100",
    "progressBar": "bg-emerald-300",
    "optionIdle": "border-emerald-100/25 bg-emerald-100/10 hover:bg-emerald-100/20",
    "optionActive": "border-emerald-300/80 bg-emerald-400/20",
    "primaryButton": "bg-emerald-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-emerald-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade115SummitTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
