"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-116",
  shortLabel: "Arcade 116",
  title: "Prism Trail",
  mascot: "pixel",
  startMessage: "Pixel: maintain optics stability by locking correct wave-path decisions in Prism Trail.",
  winMessage: "Pixel: prism channel stabilized. Strong precision control.",
  failMessage: "Pixel: refractive drift took over. Retry with cleaner locks.",
  objectiveNouns: [
    "beam lane",
    "refraction node",
    "spectrum ring",
    "lens rail",
    "phase grid",
    "optics core"
  ],
  promptLeads: [
    "Optics variance detected on",
    "Choose the adjustment that keeps wavelength alignment in",
    "Only one route preserves beam integrity in",
    "Rapid correction needed for"
  ],
  correctActions: [
    "Focus",
    "Collimate",
    "Align",
    "Phase-lock",
    "Calibrate"
  ],
  decoyActions: [
    "Scatter",
    "Blur",
    "Bypass",
    "Skew",
    "Overdrive"
  ],
  learningSprinkles: [
    "Precision optics depends on stable alignment.",
    "Small angular errors compound quickly.",
    "Controlled calibration outperforms fast guesses.",
    "Correct drift early to preserve signal."
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
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade116PrismTrail() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
