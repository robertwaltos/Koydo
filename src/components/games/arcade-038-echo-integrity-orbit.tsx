"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-038",
  shortLabel: "Arcade 038",
  title: "Echo Integrity Orbit",
  mascot: "echo",
  startMessage: "Echo: keep integrity orbit locked with dual evidence picks.",
  winMessage: "Echo: integrity orbit complete. Verdict core stays trusted.",
  failMessage: "Echo: orbit degraded. Re-run with stronger evidence discipline.",
  objectiveNouns: ["integrity lane", "proof orbit", "source shell", "context bridge", "claim gate", "verdict arc"],
  promptLeads: ["Two credible cues exist for", "Distractor claims flooding", "Protect trust through", "Reasoning load rising in"],
  correctActions: ["Verify", "Corroborate", "Cite", "Ground", "Contextualize"],
  decoyActions: ["Assume", "Stretch", "Omit", "Speculate", "Distort"],
  learningSprinkles: [
    "Dual evidence checks improve robustness.",
    "Context handling prevents logic drift.",
    "Reliable sourcing beats speed-only play.",
    "Structured reasoning survives noise.",
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
  baseRoundMs: 5600,
  minRoundMs: 3000,
  roundDecayMs: 345,
  roundMode: "double",
  targetBestCombo: 7,
};

export default function Arcade038EchoIntegrityOrbit() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
