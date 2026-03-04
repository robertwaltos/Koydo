"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-102",
  shortLabel: "Arcade 102",
  title: "River Trail",
  mascot: "spark",
  startMessage: "Spark: stay adaptive and pick evidence-backed actions as pressure scales in River Trail.",
  winMessage: "Spark: mission complete. You balanced speed, accuracy, and control.",
  failMessage: "Spark: mission dropped. Re-enter with steadier choices.",
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
    "aura": "bg-[radial-gradient(circle_at_14%_18%,rgba(251,191,36,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(245,158,11,0.2),transparent_52%)]",
    "panelBorder": "border-amber-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-amber-200/35 text-amber-100",
    "progressBar": "bg-amber-300",
    "optionIdle": "border-amber-100/25 bg-amber-100/10 hover:bg-amber-100/20",
    "optionActive": "border-amber-300/80 bg-amber-400/20",
    "primaryButton": "bg-amber-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-amber-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
  roundMode: "double",
  targetBestCombo: 5,
};

export default function Arcade102RiverTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
