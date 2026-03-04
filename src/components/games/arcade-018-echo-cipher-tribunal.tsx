"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-018",
  shortLabel: "Arcade 018",
  title: "Echo Cipher Tribunal",
  mascot: "echo",
  startMessage: "Echo: decode both valid proofs each round under tribunal pressure.",
  winMessage: "Echo: tribunal resolved in your favor. Evidence chain held.",
  failMessage: "Echo: tribunal confidence broke. Re-run with stronger logic.",
  objectiveNouns: [
    "proof cipher",
    "evidence chamber",
    "claim bridge",
    "context rail",
    "source matrix",
    "verdict lane",
  ],
  promptLeads: [
    "Two valid evidence paths exist for",
    "Contradiction pressure rising around",
    "Only careful dual picks defend",
    "Noise claims are masking truth in",
  ],
  correctActions: ["Verify", "Corroborate", "Contextualize", "Ground", "Cite"],
  decoyActions: ["Speculate", "Generalize", "Omit", "Twist", "Assume"],
  learningSprinkles: [
    "Evidence triangulation improves confidence.",
    "Dual verification lowers reasoning errors.",
    "Context is required for valid claims.",
    "Reliable arguments resist pressure better.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_18%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(129,140,248,0.2),transparent_52%)]",
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
  baseRoundMs: 5600,
  minRoundMs: 3000,
  roundDecayMs: 345,
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade018EchoCipherTribunal() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
