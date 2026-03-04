"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-138",
  shortLabel: "Arcade 138",
  title: "Meadow Circuit",
  mascot: "echo",
  startMessage: "Echo: track chronology and context to keep the mission narrative accurate in Meadow Circuit.",
  winMessage: "Echo: timeline secured. Strong contextual reasoning.",
  failMessage: "Echo: timeline fractured. Reconstruct with stronger source links.",
  objectiveNouns: [
    "timeline node",
    "map corridor",
    "source archive",
    "region marker",
    "context frame",
    "event bridge"
  ],
  promptLeads: [
    "Context conflict emerged in",
    "Pick the historically grounded action for",
    "Only one route preserves chronology in",
    "Map cue updated: choose the strongest evidence for"
  ],
  correctActions: [
    "Correlate",
    "Contextualize",
    "Verify",
    "Sequence",
    "Anchor"
  ],
  decoyActions: [
    "Generalize",
    "Rewrite",
    "Speculate",
    "Ignore",
    "Flatten"
  ],
  learningSprinkles: [
    "Chronology matters for causal claims.",
    "Primary context strengthens conclusions.",
    "Location can change interpretation.",
    "Cross-check evidence before deciding."
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
  baseRoundMs: 5550,
  minRoundMs: 3000,
  roundDecayMs: 335,
  roundMode: "single",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade138MeadowCircuit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
