"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-003",
  shortLabel: "Arcade 003",
  title: "Echo Rift Runner",
  mascot: "echo",
  startMessage: "Echo: read the narrative cue and pick the strongest evidence action.",
  winMessage: "Echo: debate corridor secured. Every call tracked clean logic.",
  failMessage: "Echo: the signal fractured. Rebuild the argument path.",
  objectiveNouns: [
    "evidence beam",
    "claim bridge",
    "context vault",
    "story thread",
    "reference pulse",
    "logic gate",
  ],
  promptLeads: [
    "A contradiction appears, anchor your response to",
    "Narrative drift detected, preserve coherence in",
    "Only one interpretation stays valid for",
    "Debate pressure spikes, pick the trustworthy move on",
  ],
  correctActions: [
    "Corroborate",
    "Clarify",
    "Contextualize",
    "Verify",
    "Support",
  ],
  decoyActions: [
    "Speculate",
    "Generalize",
    "Ignore",
    "Twist",
    "Cherry-pick",
  ],
  learningSprinkles: [
    "Claims are stronger with direct evidence.",
    "Context can change the meaning of a quote.",
    "Avoid overgeneralizing from one example.",
    "Reliable arguments balance speed and proof.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_14%_20%,rgba(167,139,250,0.24),transparent_46%),radial-gradient(circle_at_82%_82%,rgba(139,92,246,0.2),transparent_52%)]",
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
  roundDecayMs: 340,
};

export default function Arcade003EchoRiftRunner() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
