"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-033",
  shortLabel: "Arcade 033",
  title: "Echo Veracity Gauntlet",
  mascot: "echo",
  startMessage: "Echo: identify the two most verifiable paths each round.",
  winMessage: "Echo: gauntlet cleared. Veracity network is intact.",
  failMessage: "Echo: credibility collapsed. Rebuild with stronger proof chains.",
  objectiveNouns: ["veracity lane", "proof bridge", "source matrix", "context gate", "claim shell", "verdict arc"],
  promptLeads: ["Two verifiable options exist for", "Distractor claims crowding", "Protect credibility through", "Evidence pressure rising in"],
  correctActions: ["Verify", "Corroborate", "Contextualize", "Cite", "Ground"],
  decoyActions: ["Assume", "Stretch", "Omit", "Speculate", "Distort"],
  learningSprinkles: [
    "Dual-source checks improve confidence.",
    "Context prevents reasoning drift.",
    "Reliable evidence outlasts pressure.",
    "Structured logic reduces error spikes.",
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

export default function Arcade033EchoVeracityGauntlet() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
