"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-131",
  shortLabel: "Arcade 131",
  title: "Terra Circuit",
  mascot: "pixel",
  startMessage: "Pixel: keep telemetry lanes coherent and choose the cleanest routing move in Terra Circuit.",
  winMessage: "Pixel: telemetry network stabilized. Strong signal discipline.",
  failMessage: "Pixel: noise cascade slipped through. Re-enter with tighter validation.",
  objectiveNouns: [
    "signal lane",
    "checksum relay",
    "sync ring",
    "packet rail",
    "routing matrix",
    "diagnostic core"
  ],
  promptLeads: [
    "Integrity drift detected on",
    "Choose the most reliable correction for",
    "Only one option preserves clean throughput in",
    "Noise surge incoming: stabilize"
  ],
  correctActions: [
    "Verify",
    "Validate",
    "Anchor",
    "Normalize",
    "Secure"
  ],
  decoyActions: [
    "Guess",
    "Bypass",
    "Flood",
    "Skip",
    "Overtrust"
  ],
  learningSprinkles: [
    "Reliable checks prevent cascading faults.",
    "Validation beats speed under noisy input.",
    "Coherent routing improves system recovery.",
    "Reset quickly after false-signal branches."
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
  baseRoundMs: 5500,
  minRoundMs: 3000,
  roundDecayMs: 340,
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 7,
};

export default function Arcade131TerraCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
