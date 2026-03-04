"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-028",
  shortLabel: "Arcade 028",
  title: "Echo Proofline Panic",
  mascot: "echo",
  startMessage: "Echo: split weak claims from valid proofline pairs.",
  winMessage: "Echo: proofline secured. Tribunal accepted your chain.",
  failMessage: "Echo: proofline collapsed. Rebuild with stronger citations.",
  objectiveNouns: ["proofline arc", "evidence gate", "claim matrix", "context shell", "source lane", "verdict prism"],
  promptLeads: ["Two defensible choices exist for", "Invalid claims flooding", "Lock the verified pair on", "Reasoning pressure rising in"],
  correctActions: ["Corroborate", "Verify", "Cite", "Ground", "Contextualize"],
  decoyActions: ["Assume", "Stretch", "Omit", "Distort", "Speculate"],
  learningSprinkles: [
    "Dual-source validation improves trust.",
    "Context reduces ambiguity errors.",
    "Evidence quality outranks speed alone.",
    "Structured reasoning survives pressure.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_18%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(79,70,229,0.2),transparent_52%)]",
    panelBorder: "border-violet-200/30",
    panelBackground: "bg-black/35",
    chip: "border-violet-200/35 text-violet-100",
    progressBar: "bg-violet-300",
    optionIdle: "border-violet-100/25 bg-violet-100/10 hover:bg-violet-100/20",
    optionActive: "border-violet-300/80 bg-violet-400/20",
    primaryButton: "bg-violet-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-violet-100",
  },
  baseRoundMs: 5550,
  minRoundMs: 3000,
  roundDecayMs: 345,
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade028EchoProoflinePanic() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
