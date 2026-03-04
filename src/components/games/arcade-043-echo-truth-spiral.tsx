"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-043",
  shortLabel: "Arcade 043",
  title: "Echo Truth Spiral",
  mascot: "echo",
  startMessage: "Echo: resolve truth spirals with dual-evidence discipline.",
  winMessage: "Echo: truth spiral settled. Credibility matrix held.",
  failMessage: "Echo: trust chain fractured. Rebuild with stronger proof.",
  objectiveNouns: ["truth lane", "proof shell", "source orbit", "context gate", "claim matrix", "verdict arc"],
  promptLeads: ["Two credible paths exist for", "Distractor claims swarming", "Protect veracity through", "Reasoning load climbing in"],
  correctActions: ["Verify", "Corroborate", "Cite", "Ground", "Contextualize"],
  decoyActions: ["Assume", "Stretch", "Omit", "Speculate", "Distort"],
  learningSprinkles: [
    "Dual-source checks improve trust.",
    "Context handling reduces ambiguity errors.",
    "Structured reasoning survives pressure.",
    "Evidence quality beats speed-only choices.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_18%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(99,102,241,0.2),transparent_52%)]",
    panelBorder: "border-indigo-200/30",
    panelBackground: "bg-black/35",
    chip: "border-indigo-200/35 text-indigo-100",
    progressBar: "bg-indigo-300",
    optionIdle: "border-indigo-100/25 bg-indigo-100/10 hover:bg-indigo-100/20",
    optionActive: "border-indigo-300/80 bg-indigo-400/20",
    primaryButton: "bg-indigo-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-indigo-100",
  },
  baseRoundMs: 5600,
  minRoundMs: 3000,
  roundDecayMs: 345,
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade043EchoTruthSpiral() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
