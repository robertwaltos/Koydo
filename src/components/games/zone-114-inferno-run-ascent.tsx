"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Swords, Heart, RotateCcw, Zap, Shield } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "room" | "combat" | "boon" | "boss" | "complete";

interface Weapon {
  name: string; icon: string; baseDmg: number; speed: string;
}

interface Boon {
  name: string; icon: string; god: string; effect: string;
  apply: (p: PlayerState) => PlayerState;
}

interface Enemy {
  name: string; icon: string; hp: number; maxHp: number;
  atk: number; pattern: string;
}

interface PlayerState {
  hp: number; maxHp: number; atk: number; def: number;
  dashCharges: number; maxDash: number;
  weapon: Weapon; boons: string[];
  gold: number; rooms: number;
}

const WEAPONS: Weapon[] = [
  { name: "Stygian Blade", icon: "⚔️", baseDmg: 12, speed: "fast" },
  { name: "Heart Bow", icon: "🏹", baseDmg: 15, speed: "medium" },
  { name: "Adamant Rail", icon: "🔫", baseDmg: 10, speed: "rapid" },
];

const BOONS: Boon[] = [
  { name: "Zeus Strike", icon: "⚡", god: "Zeus", effect: "+5 ATK", apply: (p) => ({ ...p, atk: p.atk + 5 }) },
  { name: "Ares Fury", icon: "🔴", god: "Ares", effect: "+8 ATK", apply: (p) => ({ ...p, atk: p.atk + 8 }) },
  { name: "Athena Shield", icon: "🛡️", god: "Athena", effect: "+4 DEF", apply: (p) => ({ ...p, def: p.def + 4 }) },
  { name: "Aphrodite Charm", icon: "💕", god: "Aphrodite", effect: "+20 Max HP", apply: (p) => ({ ...p, maxHp: p.maxHp + 20, hp: p.hp + 20 }) },
  { name: "Artemis Crit", icon: "🎯", god: "Artemis", effect: "+6 ATK", apply: (p) => ({ ...p, atk: p.atk + 6 }) },
  { name: "Poseidon Surge", icon: "🌊", god: "Poseidon", effect: "+3 DEF, +3 ATK", apply: (p) => ({ ...p, def: p.def + 3, atk: p.atk + 3 }) },
  { name: "Hermes Rush", icon: "👟", god: "Hermes", effect: "+1 Dash", apply: (p) => ({ ...p, maxDash: p.maxDash + 1, dashCharges: p.dashCharges + 1 }) },
  { name: "Dionysus Wine", icon: "🍷", god: "Dionysus", effect: "Heal 25 HP", apply: (p) => ({ ...p, hp: Math.min(p.maxHp, p.hp + 25) }) },
];

const ROOM_ENEMIES: Enemy[][] = [
  [{ name: "Shade", icon: "👻", hp: 25, maxHp: 25, atk: 6, pattern: "slash" }, { name: "Shade", icon: "👻", hp: 25, maxHp: 25, atk: 6, pattern: "slash" }],
  [{ name: "Lout", icon: "💀", hp: 40, maxHp: 40, atk: 10, pattern: "charge" }],
  [{ name: "Witch", icon: "🧙‍♀️", hp: 30, maxHp: 30, atk: 12, pattern: "magic" }, { name: "Shade", icon: "👻", hp: 25, maxHp: 25, atk: 6, pattern: "slash" }],
  [{ name: "Skulloton", icon: "☠️", hp: 50, maxHp: 50, atk: 8, pattern: "revive" }],
  [{ name: "Gorgon", icon: "🐍", hp: 35, maxHp: 35, atk: 14, pattern: "beam" }, { name: "Gorgon", icon: "🐍", hp: 35, maxHp: 35, atk: 14, pattern: "beam" }],
];

const BOSSES: Enemy[] = [
  { name: "Megaera", icon: "😈", hp: 120, maxHp: 120, atk: 16, pattern: "fury" },
  { name: "Lernie", icon: "🐉", hp: 150, maxHp: 150, atk: 18, pattern: "hydra" },
  { name: "Theseus & Asterius", icon: "🐂👑", hp: 180, maxHp: 180, atk: 22, pattern: "duo" },
  { name: "Hades", icon: "🔥👑", hp: 250, maxHp: 250, atk: 28, pattern: "lord" },
];

export default function Zone114InfernoRunAscent() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [player, setPlayer] = useState<PlayerState>({
    hp: 80, maxHp: 80, atk: 12, def: 0,
    dashCharges: 2, maxDash: 2,
    weapon: WEAPONS[0]!, boons: [],
    gold: 0, rooms: 0,
  });
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [boonChoices, setBoonChoices] = useState<Boon[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [floor, setFloor] = useState(0); // 0=Tartarus, 1=Asphodel, 2=Elysium, 3=Styx
  const [roomInFloor, setRoomInFloor] = useState(0);
  const [score, setScore] = useState(0);

  const FLOOR_NAMES = ["Tartarus", "Asphodel", "Elysium", "Temple of Styx"];
  const FLOOR_ICONS = ["🏛️", "🌋", "🏟️", "⚡"];

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-6), msg]), []);

  const startGame = useCallback(() => {
    const w = WEAPONS[Math.floor(Math.random() * WEAPONS.length)]!;
    setPlayer({
      hp: 80, maxHp: 80, atk: w.baseDmg, def: 0,
      dashCharges: 2, maxDash: 2,
      weapon: w, boons: [], gold: 0, rooms: 0,
    });
    setFloor(0);
    setRoomInFloor(0);
    setScore(0);
    setLog([`⚔️ Armed with ${w.icon} ${w.name}. Escape the Underworld!`]);
    enterRoom(0, 0);
    mascot.setMood("happy");
  }, [mascot]);

  const enterRoom = useCallback((fl: number, rm: number) => {
    // Every 3 rooms in a floor = boss
    if (rm >= 3) {
      const boss = BOSSES[fl];
      if (boss) {
        setEnemies([{ ...boss }]);
        addLog(`⚠️ BOSS: ${boss.icon} ${boss.name}!`);
        setPhase("boss");
      } else {
        // Final escape
        setPhase("complete");
        mascot.setMood("cheering");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-114",
          difficulty: "medium", score: score + 100, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
      }
      return;
    }

    const template = ROOM_ENEMIES[Math.floor(Math.random() * ROOM_ENEMIES.length)]!;
    const scaled = template.map((e) => ({
      ...e,
      hp: e.hp + fl * 15,
      maxHp: e.maxHp + fl * 15,
      atk: e.atk + fl * 3,
    }));
    setEnemies(scaled);
    addLog(`🚪 Room ${rm + 1} — ${scaled.length} enemies appear!`);
    setPhase("combat");
  }, [score, addLog, mascot]);

  const attack = useCallback(() => {
    if (enemies.length === 0) return;
    const targetIdx = enemies.findIndex((e) => e.hp > 0);
    if (targetIdx < 0) return;

    const dmg = player.atk + Math.floor(Math.random() * 6) - Math.floor(Math.random() * 3);
    const newEnemies = enemies.map((e, i) => i === targetIdx ? { ...e, hp: Math.max(0, e.hp - dmg) } : e);
    setEnemies(newEnemies);
    addLog(`${player.weapon.icon} ${dmg} damage to ${enemies[targetIdx]!.icon}!`);
    hapticSuccess();

    // Check kills
    if (newEnemies.every((e) => e.hp <= 0)) {
      setScore((s) => s + 30);
      hapticSuccess();
      addLog("🏆 Room cleared!");

      // Boon choice
      const available = BOONS.filter((b) => !player.boons.includes(b.name));
      const choices = available.sort(() => Math.random() - 0.5).slice(0, 3);
      if (choices.length > 0) {
        setBoonChoices(choices);
        setPhase("boon");
      } else {
        advanceRoom();
      }
      return;
    }

    // Enemies strike back
    setTimeout(() => {
      let totalDmg = 0;
      for (const e of newEnemies) {
        if (e.hp > 0) totalDmg += Math.max(1, e.atk - player.def);
      }
      setPlayer((p) => {
        const newHp = p.hp - totalDmg;
        if (newHp <= 0) {
          addLog("💀 Death is not the end...");
          setPhase("complete");
          mascot.setMood("thinking");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-114",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
          return { ...p, hp: 0 };
        }
        addLog(`💥 Enemies deal ${totalDmg} damage!`);
        return { ...p, hp: newHp };
      });
    }, 300);
  }, [enemies, player, score, addLog, mascot]);

  const dash = useCallback(() => {
    if (player.dashCharges <= 0) { addLog("💨 No dashes left!"); hapticError(); return; }
    setPlayer((p) => ({ ...p, dashCharges: p.dashCharges - 1 }));
    addLog("💨 Dashed! Dodged enemy attacks this turn.");
    hapticSelection();
    // No enemy damage this turn — just advance
  }, [player, addLog]);

  const chooseBoon = useCallback((boon: Boon) => {
    setPlayer((p) => {
      const np = boon.apply(p);
      np.boons = [...np.boons, boon.name];
      return np;
    });
    addLog(`✨ ${boon.icon} ${boon.god}: ${boon.name} — ${boon.effect}`);
    hapticSuccess();
    advanceRoom();
  }, []);

  const advanceRoom = useCallback(() => {
    const nextRoom = roomInFloor + 1;
    setRoomInFloor(nextRoom);
    setPlayer((p) => ({ ...p, rooms: p.rooms + 1, dashCharges: p.maxDash, gold: p.gold + 10 }));
    enterRoom(floor, nextRoom);
  }, [roomInFloor, floor, enterRoom]);

  const advanceFloor = useCallback(() => {
    const nextFloor = floor + 1;
    setFloor(nextFloor);
    setRoomInFloor(0);
    setScore((s) => s + 50);
    addLog(`${FLOOR_ICONS[nextFloor] ?? "❓"} Entering ${FLOOR_NAMES[nextFloor] ?? "Unknown"}...`);
    setPlayer((p) => ({ ...p, hp: Math.min(p.maxHp, p.hp + 20), dashCharges: p.maxDash }));
    if (nextFloor >= 4) {
      setPhase("complete");
      mascot.setMood("cheering");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-114",
          difficulty: "medium", score: score + 50, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
    } else {
      enterRoom(nextFloor, 0);
    }
  }, [floor, score, enterRoom, addLog, mascot]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-red-950 via-orange-950 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-red-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Flame className="mr-2 inline h-8 w-8" /> Inferno Run Ascent
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Roguelike dungeon escape. Fight through rooms, earn god boons, defeat bosses across 4 underworld floors. Death sends you back — but you keep your knowledge.
            </p>
            <PhysicalButton onClick={startGame}><Flame className="mr-2 h-5 w-5" /> Escape the Underworld</PhysicalButton>
          </motion.div>
        )}

        {(phase === "combat" || phase === "boss") && (
          <motion.div key="combat" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Floor info */}
            <div className="flex w-full items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-xs text-white">
              <span>{FLOOR_ICONS[floor]} {FLOOR_NAMES[floor]} R{roomInFloor + 1}</span>
              <span className="text-red-400">❤️ {player.hp}/{player.maxHp}</span>
              <span className="text-yellow-400">⚔️ {player.atk}</span>
              <span className="text-blue-400">🛡️ {player.def}</span>
              <span>💨 {player.dashCharges}</span>
            </div>

            {phase === "boss" && <div className="animate-pulse text-sm font-bold text-red-500">⚠️ BOSS FIGHT ⚠️</div>}

            {/* Enemies */}
            <div className="flex gap-3">
              {enemies.map((e, i) => (
                <div key={i} className={`rounded-xl bg-red-950/50 px-4 py-2 text-center ${e.hp <= 0 ? "opacity-30" : ""}`}>
                  <span className="text-3xl">{e.icon}</span>
                  <p className="text-xs font-bold text-red-300">{e.name}</p>
                  <div className="mt-1 h-2 w-20 overflow-hidden rounded bg-red-900">
                    <div className="h-full bg-red-500 transition-all" style={{ width: `${(e.hp / e.maxHp) * 100}%` }} />
                  </div>
                  <p className="text-[10px] text-red-400">{e.hp}/{e.maxHp}</p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <PhysicalButton onClick={attack} variant="danger"><Swords className="mr-1 h-4 w-4" /> Attack</PhysicalButton>
              <PhysicalButton onClick={dash} variant="secondary">💨 Dash ({player.dashCharges})</PhysicalButton>
            </div>

            {/* Boons */}
            {player.boons.length > 0 && (
              <div className="flex flex-wrap gap-1 text-xs text-white/40">
                {player.boons.map((b, i) => {
                  const boon = BOONS.find((bb) => bb.name === b);
                  return <span key={i}>{boon?.icon} {b}</span>;
                })}
              </div>
            )}

            <div className="h-20 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "boon" && (
          <motion.div key="boon" className="flex w-full max-w-md flex-col items-center gap-4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            <h2 className="text-xl font-bold text-yellow-300">✨ Choose a Boon</h2>
            <div className="flex flex-col gap-2 w-full">
              {boonChoices.map((b, i) => (
                <PhysicalButton key={i} onClick={() => chooseBoon(b)} variant="secondary">
                  {b.icon} {b.god}: {b.name} — {b.effect}
                </PhysicalButton>
              ))}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{player.hp > 0 ? "🌅" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-red-400">
                {player.hp > 0 ? "Escaped the Underworld!" : "Returned to the House of Hades"}
              </h2>
              <p className="mt-2 text-white/60">Rooms: {player.rooms} | Boons: {player.boons.length} | Score: {score}</p>
              <p className="text-sm text-white/40">{player.weapon.icon} {player.weapon.name}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Run Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
