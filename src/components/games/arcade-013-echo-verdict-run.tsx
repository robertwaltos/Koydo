"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-013",
  shortLabel: "Arcade 013",
  title: "Echo Verdict Run",
  mascot: "echo",
  startMessage: "Echo: choose evidence-first paths and avoid weak inference traps.",
  winMessage: "Echo: verdict path confirmed. Logic chain held.",
  failMessage: "Echo: verdict collapsed. Re-run with stronger evidence.",
  objectiveNouns: [
    "evidence lane",
    "verdict arc",
    "source thread",
    "context shell",
    "logic bridge",
    "claim vector",
  ],
  promptLeads: [
    "Argument pressure rising on",
    "Only one decision preserves credibility in",
    "Counter-signal detected around",
    "Pick the defensible route for",
  ],
  correctActions: ["Verify", "Contextualize", "Cite", "Ground", "Corroborate"],
  decoyActions: ["Assume", "Skip", "Distort", "Generalize", "Speculate"],
  learningSprinkles: [
    "Evidence quality matters more than speed alone.",
    "Context lowers false conclusions.",
    "Traceable claims improve confidence.",
    "Strong reasoning filters noisy cues.",
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
  roundDecayMs: 340,
};

export default function Arcade013EchoVerdictRun() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
