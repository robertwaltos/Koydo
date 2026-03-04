"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-111",
  shortLabel: "Arcade 111",
  title: "Clover Trail",
  mascot: "pixel",
  startMessage: "Pixel: track signal integrity and choose the most reliable data path in Clover Trail.",
  winMessage: "Pixel: clean data route secured. Great verification discipline.",
  failMessage: "Pixel: false signal accepted. Re-enter with stronger validation.",
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
    "Secure"
  ],
  decoyActions: [
    "Guess",
    "Bypass",
    "Skip",
    "Overtrust",
    "Flood"
  ],
  learningSprinkles: [
    "Reliable checks reduce downstream failures.",
    "Validation beats speed under noise.",
    "Trace assumptions before committing.",
    "Recover quickly after a false branch."
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

export default function Arcade111CloverTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
