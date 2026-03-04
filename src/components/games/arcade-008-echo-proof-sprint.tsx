"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-008",
  shortLabel: "Arcade 008",
  title: "Echo Proof Sprint",
  mascot: "echo",
  startMessage: "Echo: identify the strongest proof line before claims decay.",
  winMessage: "Echo: proof chain intact. Sprint complete.",
  failMessage: "Echo: argument drifted. Rebuild with tighter evidence.",
  objectiveNouns: [
    "source trace",
    "claim vector",
    "logic corridor",
    "context beam",
    "quote anchor",
    "inference rail",
  ],
  promptLeads: [
    "A weak claim appears, reinforce",
    "Narrative pressure rises around",
    "Only one option protects validity in",
    "Debate tempo increases, secure",
  ],
  correctActions: ["Verify", "Cite", "Ground", "Support", "Corroborate"],
  decoyActions: ["Assume", "Distort", "Omit", "Stretch", "Speculate"],
  learningSprinkles: [
    "Strong claims need explicit support.",
    "Context protects against misreading.",
    "Faster is safe only when evidence is clear.",
    "Traceability improves reasoning confidence.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_18%,rgba(129,140,248,0.24),transparent_46%),radial-gradient(circle_at_82%_84%,rgba(139,92,246,0.2),transparent_52%)]",
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
  roundDecayMs: 340,
};

export default function Arcade008EchoProofSprint() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
