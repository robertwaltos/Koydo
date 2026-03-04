"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-131",
  shortLabel: "Arcade 131",
  title: "Terra Circuit",
  mascot: "pixel",
  startMessage: "Pixel: stay adaptive and pick evidence-backed actions as pressure scales in Terra Circuit.",
  winMessage: "Pixel: mission complete. You balanced speed, accuracy, and control.",
  failMessage: "Pixel: mission dropped. Re-enter with steadier choices.",
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
    "aura": "bg-[radial-gradient(circle_at_18%_18%,rgba(56,189,248,0.26),transparent_46%),radial-gradient(circle_at_84%_80%,rgba(14,165,233,0.2),transparent_52%)]",
    "panelBorder": "border-sky-200/30",
    "panelBackground": "bg-black/35",
    "chip": "border-sky-200/35 text-sky-100",
    "progressBar": "bg-sky-300",
    "optionIdle": "border-sky-100/25 bg-sky-100/10 hover:bg-sky-100/20",
    "optionActive": "border-sky-300/80 bg-sky-400/20",
    "primaryButton": "bg-sky-300 text-slate-950",
    "secondaryButton": "bg-zinc-800 text-white",
    "textSoft": "text-sky-100"
  },
  baseRoundMs: 5400,
  minRoundMs: 2850,
  roundDecayMs: 330,
};

export default function Arcade131TerraCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
