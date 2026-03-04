"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-136",
  shortLabel: "Arcade 136",
  title: "Clover Circuit",
  mascot: "pixel",
  startMessage: "Pixel: track integrity signals and choose the safest route corrections in Clover Circuit.",
  winMessage: "Pixel: integrity corridor secured. Strong diagnostic control.",
  failMessage: "Pixel: spoof cascade broke containment. Re-enter with cleaner validation.",
  objectiveNouns: [
    "signal lane",
    "checksum node",
    "integrity ring",
    "packet rail",
    "logic mesh",
    "validation core"
  ],
  promptLeads: [
    "Integrity drift detected on",
    "Choose the most reliable correction for",
    "Only one option preserves clean data flow in",
    "Noise surge incoming: stabilize"
  ],
  correctActions: [
    "Verify",
    "Validate",
    "Anchor",
    "Normalize",
    "Secure",
    "Calibrate"
  ],
  decoyActions: [
    "Guess",
    "Bypass",
    "Flood",
    "Skip",
    "Overtrust"
  ],
  learningSprinkles: [
    "Reliable checks reduce hidden failures.",
    "Validation beats speed under noisy input.",
    "Consistent tracing improves recovery.",
    "Correct false branches early."
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
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade136CloverCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
