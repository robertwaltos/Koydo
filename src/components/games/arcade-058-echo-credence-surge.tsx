"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-058",
  shortLabel: "Arcade 058",
  title: "Echo Credence Surge",
  mascot: "echo",
  startMessage: "Echo: manage credence surges with dual evidence locks.",
  winMessage: "Echo: credence surge resolved. Trust network is stable.",
  failMessage: "Echo: trust chain broke. Retry with stronger proof flow.",
  objectiveNouns: ["credence lane", "proof shell", "source gate", "context arc", "claim prism", "verdict rail"],
  promptLeads: ["Two credible paths appear in", "Distractor claims crowding", "Protect integrity through", "Reasoning pressure rising in"],
  correctActions: ["Verify", "Corroborate", "Cite", "Ground", "Contextualize"],
  decoyActions: ["Assume", "Stretch", "Omit", "Speculate", "Distort"],
  learningSprinkles: [
    "Dual-source checks raise confidence.",
    "Context handling prevents drift.",
    "Structured logic survives pressure.",
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

export default function Arcade058EchoCredenceSurge() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
