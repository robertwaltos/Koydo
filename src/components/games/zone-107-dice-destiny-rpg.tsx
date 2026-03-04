"use client";

import { useCallback, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dices, Swords, Heart, RotateCcw, Shield } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "explore" | "combat" | "dialogue" | "rest" | "complete";

interface Companion {
  name: string;
  icon: string;
  hp: number;
  maxHp: number;
  atk: number;
  def: number;
  ability: string;
  abilityDesc: string;
}

interface Enemy {
  name: string;
  icon: string;
  hp: number;
  maxHp: number;
  atk: number;
  ac: number;
}

interface DialogueNode {
  speaker: string;
  icon: string;
  text: string;
  choices: { label: string; dc: number; skill: string; success: string; fail: string }[];
}

const COMPANIONS: Companion[] = [
  { name: "Astarion", icon: "🧛", hp: 40, maxHp: 40, atk: 8, def: 3, ability: "Sneak Attack", abilityDesc: "+12 bonus damage" },
  { name: "Shadowheart", icon: "🌙", hp: 50, maxHp: 50, atk: 6, def: 5, ability: "Heal", abilityDesc: "Restore 20 HP" },
  { name: "Gale", icon: "🧙", hp: 35, maxHp: 35, atk: 10, def: 2, ability: "Fireball", abilityDesc: "20 AoE damage" },
];

const ENCOUNTERS: Enemy[][] = [
  [{ name: "Goblin", icon: "👺", hp: 25, maxHp: 25, atk: 6, ac: 10 }, { name: "Goblin", icon: "👺", hp: 25, maxHp: 25, atk: 6, ac: 10 }],
  [{ name: "Bugbear", icon: "🐻", hp: 50, maxHp: 50, atk: 10, ac: 13 }],
  [{ name: "Mind Flayer", icon: "🐙", hp: 45, maxHp: 45, atk: 12, ac: 14 }, { name: "Intellect Devourer", icon: "🧠", hp: 30, maxHp: 30, atk: 8, ac: 12 }],
  [{ name: "Drider", icon: "🕷️", hp: 60, maxHp: 60, atk: 14, ac: 15 }],
  [{ name: "Absolute Guardian", icon: "👁️", hp: 100, maxHp: 100, atk: 18, ac: 16 }],
];

const DIALOGUES: DialogueNode[] = [
  {
    speaker: "Strange Merchant",
    icon: "🎭",
    text: "I have rare goods, but only for those with... persuasive tongues.",
    choices: [
      { label: "[Persuasion] Lower your prices, friend.", dc: 12, skill: "CHA", success: "The merchant smiles and halves prices. Party healed!", fail: "The merchant sneers. 'Full price or leave!'" },
      { label: "[Intimidation] Hand them over. Now.", dc: 14, skill: "STR", success: "Trembling, the merchant gives you a weapon. +3 ATK!", fail: "Guards are alerted! Take 10 damage." },
    ],
  },
  {
    speaker: "Ancient Statue",
    icon: "🗿",
    text: "Speak the word of power, and receive my blessing.",
    choices: [
      { label: "[Arcana] Recite the sigil of Mystra.", dc: 13, skill: "INT", success: "Magic surges through you! +15 HP to all.", fail: "The statue crumbles. A trap triggers! 8 damage." },
      { label: "[Religion] Pray to the Morning Lord.", dc: 11, skill: "WIS", success: "A warm light heals the party for 20 HP.", fail: "Silence. Nothing happens." },
    ],
  },
  {
    speaker: "Tiefling Refugee",
    icon: "😈",
    text: "Please, we need safe passage through the grove.",
    choices: [
      { label: "[Persuasion] I'll help you escape.", dc: 10, skill: "CHA", success: "The refugees follow you safely. +20 honor.", fail: "They don't trust you and flee alone." },
      { label: "[Deception] There's a secret path... (lie)", dc: 15, skill: "CHA", success: "They believe you and take the detour. +5 gold.", fail: "They see through your lie. -10 honor." },
    ],
  },
];

function rollD20(): number {
  return Math.floor(Math.random() * 20) + 1;
}

export default function Zone107DiceDestinyRpg() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [companions, setCompanions] = useState<Companion[]>([]);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [encounterIndex, setEncounterIndex] = useState(0);
  const [turn, setTurn] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [diceResult, setDiceResult] = useState<number | null>(null);
  const [diceRolling, setDiceRolling] = useState(false);
  const [dialogue, setDialogue] = useState<DialogueNode | null>(null);
  const [score, setScore] = useState(0);
  const [activeCompanion, setActiveCompanion] = useState(0);

  const addLog = useCallback((msg: string) => {
    setLog((p) => [...p.slice(-6), msg]);
  }, []);

  const startGame = useCallback(() => {
    setCompanions(COMPANIONS.map((c) => ({ ...c })));
    setEncounterIndex(0);
    setTurn(0);
    setScore(0);
    setLog(["⚔️ Your party ventures into the Underdark..."]);
    setActiveCompanion(0);
    setDiceResult(null);
    // Start with first encounter
    setEnemies(ENCOUNTERS[0]!.map((e) => ({ ...e })));
    setPhase("combat");
    mascot.setMood("happy");
  }, [mascot]);

  const animateDice = useCallback((finalValue: number, cb: () => void) => {
    setDiceRolling(true);
    let ticks = 0;
    const interval = setInterval(() => {
      setDiceResult(Math.floor(Math.random() * 20) + 1);
      ticks++;
      if (ticks >= 12) {
        clearInterval(interval);
        setDiceResult(finalValue);
        setDiceRolling(false);
        setTimeout(cb, 400);
      }
    }, 60);
  }, []);

  const doAttack = useCallback(() => {
    const comp = companions[activeCompanion];
    if (!comp || comp.hp <= 0) return;
    const roll = rollD20();
    const targetIdx = enemies.findIndex((e) => e.hp > 0);
    if (targetIdx < 0) return;
    const target = enemies[targetIdx]!;

    animateDice(roll, () => {
      const hit = roll + Math.floor(comp.atk / 2) >= target.ac;
      if (hit) {
        const dmg = comp.atk + Math.floor(Math.random() * 6);
        target.hp = Math.max(0, target.hp - dmg);
        addLog(`🎯 ${comp.icon} ${comp.name} rolls ${roll} → HIT! ${dmg} damage to ${target.icon} ${target.name}`);
        hapticSuccess();
      } else {
        addLog(`❌ ${comp.icon} ${comp.name} rolls ${roll} → MISS against ${target.icon} ${target.name} (AC ${target.ac})`);
        hapticError();
      }
      setEnemies([...enemies]);

      // Check kills
      if (enemies.every((e) => e.hp <= 0)) {
        setScore((s) => s + 100);
        addLog("🏆 Victory! All enemies defeated!");
        hapticSuccess();
        const nextIdx = encounterIndex + 1;
        if (nextIdx >= ENCOUNTERS.length) {
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-107",
          difficulty: "medium",
            score: score + 100,
            maxScore: 500,
            interactions: 1,
            elapsedMs: turn * 2000,
          source: "component",
          occurredAt: new Date().toISOString(),
          });
          return;
        }
        // Go to dialogue between encounters
        setEncounterIndex(nextIdx);
        if (nextIdx < DIALOGUES.length) {
          setDialogue(DIALOGUES[nextIdx - 1]!);
          setPhase("dialogue");
        } else {
          setEnemies(ENCOUNTERS[nextIdx]!.map((e) => ({ ...e })));
          setPhase("combat");
        }
        return;
      }

      // Enemy turn
      setTimeout(() => {
        for (const en of enemies) {
          if (en.hp <= 0) continue;
          const eRoll = rollD20();
          const enHit = eRoll + Math.floor(en.atk / 3) >= 10 + companions[activeCompanion]!.def;
          if (enHit) {
            const eDmg = Math.max(1, en.atk - companions[activeCompanion]!.def + Math.floor(Math.random() * 4));
            companions[activeCompanion]!.hp -= eDmg;
            addLog(`💥 ${en.icon} ${en.name} hits ${comp.icon} for ${eDmg} damage!`);
          } else {
            addLog(`🛡️ ${en.icon} ${en.name} misses!`);
          }
        }
        // Switch companion
        setActiveCompanion((a) => {
          let next = (a + 1) % companions.length;
          let tries = 0;
          while (companions[next]!.hp <= 0 && tries < 3) { next = (next + 1) % companions.length; tries++; }
          return next;
        });
        setCompanions([...companions]);
        setTurn((t) => t + 1);

        if (companions.every((c) => c.hp <= 0)) {
          addLog("💀 Total party kill...");
          setPhase("complete");
          mascot.setMood("thinking");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-107",
          difficulty: "medium",
            score, maxScore: 500,
            interactions: 1,
            elapsedMs: turn * 2000,
          source: "component",
          occurredAt: new Date().toISOString(),
          });
        }
      }, 600);
    });
  }, [companions, enemies, activeCompanion, encounterIndex, score, turn, addLog, animateDice, mascot]);

  const useAbility = useCallback(() => {
    const comp = companions[activeCompanion];
    if (!comp || comp.hp <= 0) return;
    const roll = rollD20();

    animateDice(roll, () => {
      if (comp.ability === "Heal") {
        const healed = 20;
        const target = companions.reduce((a, b) => (a.hp < b.hp && a.hp > 0 ? a : b), companions[0]!);
        target.hp = Math.min(target.maxHp, target.hp + healed);
        addLog(`💚 ${comp.icon} ${comp.name} heals ${target.icon} for ${healed} HP!`);
        hapticSuccess();
      } else if (comp.ability === "Fireball") {
        const dmg = 20;
        for (const e of enemies) { if (e.hp > 0) e.hp = Math.max(0, e.hp - dmg); }
        addLog(`🔥 ${comp.icon} ${comp.name} casts Fireball! ${dmg} damage to ALL enemies!`);
        hapticSuccess();
      } else if (comp.ability === "Sneak Attack") {
        const targetIdx = enemies.findIndex((e) => e.hp > 0);
        if (targetIdx >= 0) {
          const dmg = comp.atk + 12;
          enemies[targetIdx]!.hp = Math.max(0, enemies[targetIdx]!.hp - dmg);
          addLog(`🗡️ ${comp.icon} Sneak Attack! ${dmg} damage!`);
          hapticSuccess();
        }
      }
      setEnemies([...enemies]);
      setCompanions([...companions]);

      if (enemies.every((e) => e.hp <= 0)) {
        setScore((s) => s + 100);
        addLog("🏆 Victory!");
        const nextIdx = encounterIndex + 1;
        if (nextIdx >= ENCOUNTERS.length) {
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-107",
          difficulty: "medium", score: score + 100, maxScore: 500, interactions: 1, elapsedMs: turn * 2000, source: "component", occurredAt: new Date().toISOString(), });
          return;
        }
        setEncounterIndex(nextIdx);
        if (nextIdx <= DIALOGUES.length) {
          setDialogue(DIALOGUES[nextIdx - 1]!);
          setPhase("dialogue");
        } else {
          setEnemies(ENCOUNTERS[nextIdx]!.map((e) => ({ ...e })));
        }
      }

      setActiveCompanion((a) => {
        let next = (a + 1) % companions.length;
        let tries = 0;
        while (companions[next]!.hp <= 0 && tries < 3) { next = (next + 1) % companions.length; tries++; }
        return next;
      });
    });
  }, [companions, enemies, activeCompanion, encounterIndex, score, turn, addLog, animateDice, mascot]);

  const handleDialogueChoice = useCallback((choiceIdx: number) => {
    if (!dialogue) return;
    const choice = dialogue.choices[choiceIdx]!;
    const roll = rollD20();
    animateDice(roll, () => {
      if (roll >= choice.dc) {
        addLog(`✅ [DC ${choice.dc}] Roll: ${roll} → ${choice.success}`);
        // Apply healing on success
        if (choice.success.includes("healed") || choice.success.includes("HP")) {
          for (const c of companions) c.hp = Math.min(c.maxHp, c.hp + 15);
          setCompanions([...companions]);
        }
        if (choice.success.includes("ATK")) {
          companions[0]!.atk += 3;
          setCompanions([...companions]);
        }
        setScore((s) => s + 50);
        hapticSuccess();
      } else {
        addLog(`❌ [DC ${choice.dc}] Roll: ${roll} → ${choice.fail}`);
        if (choice.fail.includes("damage")) {
          for (const c of companions) c.hp = Math.max(1, c.hp - 8);
          setCompanions([...companions]);
        }
        hapticError();
      }
      // Next encounter
      setEnemies(ENCOUNTERS[encounterIndex]!.map((e) => ({ ...e })));
      setDialogue(null);
      setPhase("combat");
    });
  }, [dialogue, companions, encounterIndex, addLog, animateDice]);

  const aliveCompanions = companions.filter((c) => c.hp > 0);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-indigo-950 via-purple-950 to-slate-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-purple-300 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Dices className="mr-2 inline h-8 w-8" /> Dice Destiny RPG
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Lead a 3-member party through the Underdark. Every action requires a d20 roll. Skill checks in dialogue, attack rolls in combat. Will you reach the Absolute?
            </p>
            <PhysicalButton onClick={startGame}><Dices className="mr-2 h-5 w-5" /> Roll for Initiative</PhysicalButton>
          </motion.div>
        )}

        {phase === "combat" && (
          <motion.div key="combat" className="flex w-full max-w-lg flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="text-xs text-white/40">Encounter {encounterIndex + 1} / {ENCOUNTERS.length} | Turn {turn}</div>

            {/* Dice display */}
            {diceResult !== null && (
              <motion.div className={`text-4xl font-black ${diceRolling ? "text-yellow-300" : diceResult >= 15 ? "text-green-400" : diceResult === 1 ? "text-red-500" : "text-white"}`} animate={{ rotate: diceRolling ? [0, 360] : 0, scale: diceRolling ? 1.2 : 1 }} transition={{ duration: 0.1 }}>
                🎲 {diceResult} {diceResult === 20 && !diceRolling && "NAT 20!"}
              </motion.div>
            )}

            {/* Enemies */}
            <div className="flex gap-3">
              {enemies.map((e, i) => (
                <div key={i} className={`rounded-xl bg-red-950/60 px-4 py-2 text-center ${e.hp <= 0 ? "opacity-30" : ""}`}>
                  <div className="text-2xl">{e.icon}</div>
                  <div className="text-xs font-bold text-red-300">{e.name}</div>
                  <div className="mt-1 h-2 w-16 overflow-hidden rounded bg-red-900">
                    <div className="h-full bg-red-500 transition-all" style={{ width: `${(e.hp / e.maxHp) * 100}%` }} />
                  </div>
                  <div className="text-[10px] text-red-400">{e.hp}/{e.maxHp} HP | AC {e.ac}</div>
                </div>
              ))}
            </div>

            {/* Party */}
            <div className="flex gap-2">
              {companions.map((c, i) => (
                <div key={i} className={`rounded-xl px-3 py-2 text-center ${i === activeCompanion ? "bg-purple-800/60 ring-2 ring-purple-400" : "bg-slate-800/40"} ${c.hp <= 0 ? "opacity-30" : ""}`}>
                  <div className="text-xl">{c.icon}</div>
                  <div className="text-xs font-bold text-white">{c.name}</div>
                  <div className="mt-1 h-1.5 w-14 overflow-hidden rounded bg-gray-700">
                    <div className="h-full bg-green-500 transition-all" style={{ width: `${(c.hp / c.maxHp) * 100}%` }} />
                  </div>
                  <div className="text-[10px] text-white/50">{c.hp}/{c.maxHp}</div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <PhysicalButton onClick={doAttack} variant="danger"><Swords className="mr-1 h-4 w-4" /> Attack</PhysicalButton>
              <PhysicalButton onClick={useAbility} variant="secondary"><Shield className="mr-1 h-4 w-4" /> {companions[activeCompanion]?.ability}</PhysicalButton>
            </div>

            {/* Log */}
            <div className="h-28 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "dialogue" && dialogue && (
          <motion.div key="dialogue" className="flex w-full max-w-md flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {diceResult !== null && (
              <motion.div className="text-3xl font-black text-yellow-300" animate={{ rotate: diceRolling ? [0, 360] : 0 }}>
                🎲 {diceResult}
              </motion.div>
            )}
            <div className="rounded-2xl bg-slate-800/80 p-6 text-center">
              <p className="text-3xl">{dialogue.icon}</p>
              <p className="mt-1 text-sm font-bold text-purple-300">{dialogue.speaker}</p>
              <p className="mt-2 text-white/80 italic">"{dialogue.text}"</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
              {dialogue.choices.map((ch, i) => (
                <PhysicalButton key={i} onClick={() => handleDialogueChoice(i)} variant="secondary">
                  {ch.label} (DC {ch.dc})
                </PhysicalButton>
              ))}
            </div>
            <div className="h-20 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🎲</p>
              <h2 className="mt-3 text-2xl font-black text-purple-300">
                {aliveCompanions.length > 0 ? "The Absolute Falls!" : "Total Party Kill"}
              </h2>
              <p className="mt-2 text-white/60">Score: {score} | Encounters: {encounterIndex + 1}</p>
              <p className="text-sm text-white/40">Survivors: {aliveCompanions.map((c) => c.icon).join(" ") || "None"}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Roll Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
