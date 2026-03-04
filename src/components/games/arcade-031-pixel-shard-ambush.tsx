"use client";

import RewardRealmCharacterGauntlet, {
  type RewardRealmCharacterGauntletConfig,
} from "./reward-realm-character-gauntlet";

const CONFIG: RewardRealmCharacterGauntletConfig = {
  gameId: "arcade-031",
  shortLabel: "Arcade 031",
  title: "Pixel Shard Ambush",
  mascot: "pixel",
  startMessage: "Pixel: clear the shard ambush with dual-verified lane locks.",
  winMessage: "Pixel: ambush neutralized. Control lattice remains intact.",
  failMessage: "Pixel: shard swarm broke through. Re-run with tighter reads.",
  objectiveNouns: ["shard lane", "proxy matrix", "drift tunnel", "signal bastion", "vector gate", "phase shell"],
  promptLeads: ["Two stable paths are hidden in", "Trap shards are mixed into", "Maintain clean control through", "Pressure spike detected on"],
  correctActions: ["Anchor", "Normalize", "Stitch", "Balance", "Align"],
  decoyActions: ["Skew", "Flood", "Bypass", "Scramble", "Clip"],
  learningSprinkles: [
    "Dual confirmation lowers false lock rates.",
    "Trap-aware timing preserves lives.",
    "Consistent control outperforms panic speed.",
    "Short correction loops prevent cascades.",
  ],
  theme: {
    aura: "bg-[radial-gradient(circle_at_16%_16%,rgba(56,189,248,0.24),transparent_46%),radial-gradient(circle_at_84%_84%,rgba(14,165,233,0.2),transparent_52%)]",
    panelBorder: "border-cyan-200/30",
    panelBackground: "bg-black/35",
    chip: "border-cyan-200/35 text-cyan-100",
    progressBar: "bg-cyan-300",
    optionIdle: "border-cyan-100/25 bg-cyan-100/10 hover:bg-cyan-100/20",
    optionActive: "border-cyan-300/80 bg-cyan-400/20",
    primaryButton: "bg-cyan-300 text-slate-950",
    secondaryButton: "bg-zinc-800 text-white",
    textSoft: "text-cyan-100",
  },
  baseRoundMs: 5400,
  minRoundMs: 2800,
  roundDecayMs: 340,
  roundMode: "double",
  allowTrapDecoys: true,
  targetBestCombo: 8,
};

export default function Arcade031PixelShardAmbush() {
  return <RewardRealmCharacterGauntlet config={CONFIG} />;
}
