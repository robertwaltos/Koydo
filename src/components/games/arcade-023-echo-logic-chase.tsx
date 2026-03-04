"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-023",
  shortLabel: "Arcade 023",
  title: "Echo Logic Chase",
  mascot: "echo",
  startMessage: "Echo: chase two valid proof threads every round.",
  winMessage: "Echo: logic chase complete. Verdict network stayed coherent.",
  failMessage: "Echo: reasoning chain broke. Rebuild with stricter evidence.",
  objectiveNouns: [
    "logic corridor",
    "proof arc",
    "claim anchor",
    "source gate",
    "context thread",
    "verdict matrix",
  ],
  promptLeads: [
    "Two credible lines exist for",
    "Noise claims clouding",
    "Select both valid responses for",
    "Evidence pressure climbing in",
  ],
  correctActions: ["Verify", "Corroborate", "Cite", "Ground", "Contextualize"],
  decoyActions: ["Assume", "Stretch", "Omit", "Speculate", "Distort"],
  learningSprinkles: [
    "Dual-source checks improve trust.",
    "Context prevents false conclusions.",
    "Proof quality beats speed alone.",
    "Consistency strengthens argument chains.",
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
  baseRoundMs: 5550,
  minRoundMs: 3000,
  roundDecayMs: 345,
  roundMode: "double",
  targetBestCombo: 6,
};

export default function Arcade023EchoLogicChase() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
