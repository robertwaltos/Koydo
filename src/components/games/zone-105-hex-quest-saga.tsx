"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Swords, MessageCircle, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "quest" | "combat" | "complete";

interface Choice {
  text: string;
  consequence: string;
  morality: "good" | "neutral" | "dark";
  reward: { gold: number; xp: number };
  nextQuest?: number;
  combatMonster?: Monster;
}

interface QuestNode {
  id: number;
  title: string;
  narrative: string;
  speaker: string;
  speakerIcon: string;
  choices: Choice[];
}

interface Monster {
  name: string;
  icon: string;
  hp: number;
  maxHp: number;
  atk: number;
  weakness: "silver" | "fire" | "force";
}

interface Player {
  hp: number;
  maxHp: number;
  gold: number;
  xp: number;
  level: number;
  reputation: number; // -100 to 100
  atk: number;
  choices: string[];
}

const QUESTS: QuestNode[] = [
  {
    id: 0,
    title: "The Village Contract",
    narrative: "A desperate village elder begs for help. Livestock vanish nightly, and strange howls echo from the forest. The pay is modest, but the people suffer.",
    speaker: "Elder Miroslav",
    speakerIcon: "👴",
    choices: [
      { text: "I'll hunt the beast. No one else has to die.", consequence: "The elder weeps with gratitude.", morality: "good", reward: { gold: 30, xp: 20 }, nextQuest: 1 },
      { text: "Double your coin, or find another hunter.", consequence: "He reluctantly agrees, emptying the village coffers.", morality: "neutral", reward: { gold: 60, xp: 15 }, nextQuest: 1 },
      { text: "Sounds like your problem, old man.", consequence: "You walk away. The wailing follows you.", morality: "dark", reward: { gold: 0, xp: 5 }, nextQuest: 2 },
    ],
  },
  {
    id: 1,
    title: "The Forest Trail",
    narrative: "Deep in the twisted woods, you find massive claw marks on ancient oaks. The trail leads to a cave mouth breathing mist. A merchant camps nearby, terrified.",
    speaker: "Merchant Yenni",
    speakerIcon: "🧑‍🌾",
    choices: [
      { text: "Go into the cave immediately.", consequence: "You descend into darkness.", morality: "neutral", reward: { gold: 0, xp: 10 }, combatMonster: { name: "Warg Alpha", icon: "🐺", hp: 60, maxHp: 60, atk: 12, weakness: "silver" } },
      { text: "Ask the merchant what she saw.", consequence: "She describes a wolf-like beast with glowing eyes. Silver might work.", morality: "good", reward: { gold: 0, xp: 15 }, nextQuest: 3 },
      { text: "Take her supplies — you need them more.", consequence: "She curses your name as you rifle through her cart.", morality: "dark", reward: { gold: 40, xp: 5 }, nextQuest: 3 },
    ],
  },
  {
    id: 2,
    title: "The Crossroads Stranger",
    narrative: "A cloaked figure at the crossroads offers a different contract — a nobleman wants a rival eliminated. The pay is triple the village's offer.",
    speaker: "The Stranger",
    speakerIcon: "🕵️",
    choices: [
      { text: "I don't kill innocents.", consequence: "The stranger shrugs and vanishes into the mist.", morality: "good", reward: { gold: 0, xp: 20 }, nextQuest: 1 },
      { text: "Tell me more. Who and how much?", consequence: "You learn the target is a corrupt tax collector. Perhaps not so innocent.", morality: "neutral", reward: { gold: 100, xp: 10 }, nextQuest: 4 },
      { text: "Done. Where's the target?", consequence: "Cold efficiency. The stranger grins.", morality: "dark", reward: { gold: 150, xp: 5 }, nextQuest: 4 },
    ],
  },
  {
    id: 3,
    title: "The Beast's Lair",
    narrative: "The cave opens into a vast underground chamber. Bones litter the floor. In the center, a massive lupine creature raises its head, red eyes gleaming. This is no ordinary wolf.",
    speaker: "Narrator",
    speakerIcon: "📖",
    choices: [
      { text: "Use silver blade — aim for the throat.", consequence: "Your silver burns the creature's hide!", morality: "neutral", reward: { gold: 20, xp: 25 }, combatMonster: { name: "The Howler", icon: "🐺", hp: 80, maxHp: 80, atk: 15, weakness: "silver" } },
      { text: "Set fire to the chamber entrance, trap it.", consequence: "Flames roar. The beast thrashes in panic.", morality: "neutral", reward: { gold: 10, xp: 30 }, combatMonster: { name: "The Howler", icon: "🐺", hp: 50, maxHp: 50, atk: 18, weakness: "fire" } },
      { text: "Try to communicate — it might be cursed.", consequence: "The beast pauses. Intelligence flickers behind those eyes.", morality: "good", reward: { gold: 0, xp: 40 }, nextQuest: 5 },
    ],
  },
  {
    id: 4,
    title: "The Nobleman's Estate",
    narrative: "The tax collector's estate is well-guarded. Through a window you see a man counting coins — but also a child playing at his feet. His daughter.",
    speaker: "Narrator",
    speakerIcon: "📖",
    choices: [
      { text: "I won't do this. Not with a child present.", consequence: "You abandon the contract. Honor intact.", morality: "good", reward: { gold: 0, xp: 30 }, nextQuest: 1 },
      { text: "Wait until night when the child sleeps.", consequence: "In darkness, you fulfill the contract efficiently.", morality: "dark", reward: { gold: 200, xp: 10 }, nextQuest: 5 },
      { text: "Confront him openly — offer him a chance to flee.", consequence: "He fights. At least it's fair.", morality: "neutral", reward: { gold: 80, xp: 25 }, combatMonster: { name: "Guard Captain", icon: "⚔️", hp: 70, maxHp: 70, atk: 14, weakness: "force" } },
    ],
  },
  {
    id: 5,
    title: "The Final Reckoning",
    narrative: "Your journey converges at the old shrine atop the hill. The true menace reveals itself — a spectral sorcerer who has been manipulating events from the shadows. Your choices have shaped this moment.",
    speaker: "The Sorcerer",
    speakerIcon: "🧙",
    choices: [
      { text: "End this. Steel against sorcery.", consequence: "The final battle begins.", morality: "neutral", reward: { gold: 50, xp: 50 }, combatMonster: { name: "Shadow Sorcerer", icon: "🧙", hp: 120, maxHp: 120, atk: 20, weakness: "silver" } },
      { text: "Break his phylactery with fire.", consequence: "The sorcerer screams as his anchor to this world shatters.", morality: "good", reward: { gold: 30, xp: 60 }, combatMonster: { name: "Shadow Sorcerer (Weakened)", icon: "🧙", hp: 60, maxHp: 60, atk: 25, weakness: "fire" } },
      { text: "Offer to serve him in exchange for power.", consequence: "Darkness embraces darkness. But at what cost?", morality: "dark", reward: { gold: 300, xp: 20 }, combatMonster: { name: "Your Own Reflection", icon: "🪞", hp: 90, maxHp: 90, atk: 18, weakness: "force" } },
    ],
  },
];

function initialPlayer(): Player {
  return { hp: 100, maxHp: 100, gold: 0, xp: 0, level: 1, reputation: 0, atk: 15, choices: [] };
}

export default function Zone105HexQuestSaga() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [player, setPlayer] = useState(initialPlayer);
  const [questIdx, setQuestIdx] = useState(0);
  const [monster, setMonster] = useState<Monster | null>(null);
  const [combatLog, setCombatLog] = useState<string[]>([]);
  const [narrative, setNarrative] = useState("");

  const quest = QUESTS.find((q) => q.id === questIdx) ?? QUESTS[0]!;

  const startGame = useCallback(() => {
    setPlayer(initialPlayer());
    setQuestIdx(0);
    setMonster(null);
    setCombatLog([]);
    setNarrative("");
    setPhase("quest");
    mascot.setMood("happy");
  }, [mascot]);

  const makeChoice = useCallback(
    (choice: Choice) => {
      hapticSelection();
      const moralDelta = choice.morality === "good" ? 15 : choice.morality === "dark" ? -15 : 0;
      setPlayer((prev) => ({
        ...prev,
        gold: prev.gold + choice.reward.gold,
        xp: prev.xp + choice.reward.xp,
        reputation: Math.max(-100, Math.min(100, prev.reputation + moralDelta)),
        level: Math.floor((prev.xp + choice.reward.xp) / 50) + 1,
        atk: 15 + Math.floor((prev.xp + choice.reward.xp) / 50) * 3,
        choices: [...prev.choices, choice.text],
      }));

      setNarrative(choice.consequence);

      if (choice.combatMonster) {
        setMonster({ ...choice.combatMonster });
        setCombatLog([`${choice.combatMonster.icon} ${choice.combatMonster.name} appears!`]);
        setTimeout(() => setPhase("combat"), 1500);
      } else if (choice.nextQuest !== undefined) {
        setTimeout(() => {
          setQuestIdx(choice.nextQuest!);
          setNarrative("");
          setPhase("quest");
        }, 2000);
      } else {
        // End
        setTimeout(() => {
          setPhase("complete");
          mascot.setMood("cheering");
        }, 2000);
      }
    },
    [mascot]
  );

  const combatAttack = useCallback(
    (type: "silver" | "fire" | "force") => {
      if (!monster) return;

      setMonster((prev) => {
        if (!prev) return null;
        const m = { ...prev };
        const isWeak = m.weakness === type;
        const dmg = player.atk + (isWeak ? 15 : 0) + Math.floor(Math.random() * 8);
        m.hp = Math.max(0, m.hp - dmg);

        const logEntry = isWeak
          ? `✨ Critical! ${type} strikes for ${dmg}! (weakness)`
          : `⚔️ ${type} attack for ${dmg}`;
        setCombatLog((prev) => [...prev, logEntry]);
        hapticSuccess();

        if (m.hp <= 0) {
          setCombatLog((prev) => [...prev, `💀 ${m.name} defeated!`]);
          setPlayer((pp) => ({ ...pp, xp: pp.xp + 40, gold: pp.gold + 50 }));

          // Check if this was the final quest
          if (questIdx === 5) {
            setTimeout(() => {
              setPhase("complete");
              mascot.setMood("cheering");
              emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-105",
          difficulty: "medium",
                score: player.gold + player.xp,
                maxScore: 500,
                interactions: 1,
                elapsedMs: 0,
          source: "component",
          occurredAt: new Date().toISOString(),
              });
            }, 1500);
          } else {
            setTimeout(() => {
              setQuestIdx((prev) => Math.min(5, prev + 1));
              setMonster(null);
              setNarrative("");
              setPhase("quest");
            }, 1500);
          }
          return m;
        }

        // Monster counterattack
        setTimeout(() => {
          setPlayer((pp) => {
            const eDmg = m.atk + Math.floor(Math.random() * 6);
            setCombatLog((prev) => [...prev, `${m.icon} ${m.name} strikes for ${eDmg}!`]);
            hapticError();
            const newHp = Math.max(0, pp.hp - eDmg);
            if (newHp <= 0) {
              setPhase("complete");
              mascot.setMood("sad");
            }
            return { ...pp, hp: newHp };
          });
        }, 500);

        return m;
      });
    },
    [monster, player, questIdx, mascot]
  );

  const repLabel = player.reputation > 30 ? "Heroic" : player.reputation < -30 ? "Ruthless" : "Pragmatic";
  const repColor = player.reputation > 30 ? "text-amber-400" : player.reputation < -30 ? "text-red-400" : "text-slate-400";

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" && player.hp > 0 ? "cheering" : "idle"} />

      <motion.h1
        className="mb-3 text-3xl font-black tracking-tight text-emerald-400 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Hex Quest Saga
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              A narrative RPG where every choice shapes your story. Hunt monsters, make alliances, and forge your reputation across a branching questline.
            </p>
            <PhysicalButton onClick={startGame}>
              <BookOpen className="mr-2 h-5 w-5" />
              Begin Your Journey
            </PhysicalButton>
          </motion.div>
        )}

        {phase === "quest" && (
          <motion.div key="quest" className="flex w-full max-w-lg flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* HUD */}
            <div className="flex w-full items-center justify-between rounded-xl bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>❤️ {player.hp}</span>
              <span className="text-amber-400">💰 {player.gold}</span>
              <span className="text-cyan-400">Lv.{player.level}</span>
              <span className={repColor}>{repLabel}</span>
            </div>

            {/* Quest card */}
            <motion.div className="w-full rounded-xl border border-emerald-800/50 bg-stone-900/90 p-5" initial={{ y: 20 }} animate={{ y: 0 }}>
              <h3 className="text-lg font-bold text-emerald-400">{quest.title}</h3>
              <div className="mt-2 flex items-start gap-3">
                <span className="text-2xl">{quest.speakerIcon}</span>
                <div>
                  <p className="text-xs font-bold text-white/50">{quest.speaker}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/80">{quest.narrative}</p>
                </div>
              </div>

              {narrative && (
                <motion.p className="mt-3 rounded-lg bg-emerald-900/40 p-3 text-sm italic text-emerald-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {narrative}
                </motion.p>
              )}

              {!narrative && (
                <div className="mt-4 space-y-2">
                  {quest.choices.map((choice, i) => (
                    <button
                      key={i}
                      onClick={() => makeChoice(choice)}
                      className={`w-full rounded-lg border p-3 text-left text-sm transition hover:brightness-125 ${
                        choice.morality === "good"
                          ? "border-amber-700/50 bg-amber-900/30 text-amber-200"
                          : choice.morality === "dark"
                            ? "border-red-700/50 bg-red-900/30 text-red-200"
                            : "border-slate-600/50 bg-slate-800/30 text-slate-200"
                      }`}
                    >
                      {choice.text}
                    </button>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

        {phase === "combat" && monster && (
          <motion.div key="combat" className="flex w-full max-w-lg flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex w-full items-center justify-between rounded-xl bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <span>❤️ {player.hp}/{player.maxHp}</span>
              <span className="text-amber-400">⚔️ ATK: {player.atk}</span>
            </div>

            <div className="w-full rounded-xl border border-red-800/50 bg-stone-900/90 p-5 text-center">
              <p className="text-5xl">{monster.icon}</p>
              <h3 className="mt-2 text-lg font-black text-red-400">{monster.name}</h3>
              <div className="mx-auto mt-2 h-3 w-48 rounded-full bg-stone-700">
                <div
                  className="h-3 rounded-full bg-red-600 transition-all"
                  style={{ width: `${Math.max(0, (monster.hp / monster.maxHp) * 100)}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-white/50">{monster.hp}/{monster.maxHp} HP</p>
            </div>

            <div className="flex gap-2">
              <button onClick={() => combatAttack("silver")} className="rounded-lg bg-slate-500 px-4 py-2 text-sm font-bold text-white hover:bg-slate-400">🗡️ Silver</button>
              <button onClick={() => combatAttack("fire")} className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-500">🔥 Fire</button>
              <button onClick={() => combatAttack("force")} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-500">💥 Force</button>
            </div>

            <div className="w-full rounded-lg bg-black/40 p-3 font-mono text-xs text-white/70">
              {combatLog.slice(-5).map((msg, i) => (
                <p key={i} className={i === combatLog.length - 1 ? "font-bold text-white" : ""}>{msg}</p>
              ))}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{player.hp > 0 ? "📜" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-emerald-400">
                {player.hp > 0 ? "Quest Complete" : "Fallen in Battle"}
              </h2>
              <div className="mt-3 space-y-1 text-sm text-white/60">
                <p>Gold: {player.gold} | XP: {player.xp} | Level: {player.level}</p>
                <p>Reputation: <span className={repColor}>{repLabel} ({player.reputation})</span></p>
                <p>Choices made: {player.choices.length}</p>
              </div>
            </div>
            <PhysicalButton onClick={startGame}><RotateCcw className="mr-1 h-4 w-4" /> New Journey</PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
