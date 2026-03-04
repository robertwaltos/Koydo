"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Sword, ShieldCheck, RotateCcw, Flame } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "explore" | "combat" | "loot" | "shout" | "complete";

interface Player {
  hp: number; maxHp: number;
  stamina: number; maxStamina: number;
  magicka: number; maxMagicka: number;
  level: number; xp: number;
  weapon: string; armor: string;
  gold: number; shouts: string[];
  inventory: string[];
}

interface Dungeon {
  name: string; icon: string; floors: number;
  enemies: { name: string; icon: string; hp: number; atk: number; loot: string }[];
  boss: { name: string; icon: string; hp: number; atk: number; loot: string };
}

const SHOUTS = [
  { name: "Fus Ro Dah", icon: "💨", desc: "Push enemies back, 15 damage", dmg: 15, cost: 0 },
  { name: "Yol Toor Shul", icon: "🔥", desc: "Fire breath, 25 damage", dmg: 25, cost: 20 },
  { name: "Tiid Klo Ul", icon: "⏳", desc: "Slow time, double next attack", dmg: 0, cost: 30 },
];

const DUNGEONS: Dungeon[] = [
  {
    name: "Bleak Falls Barrow", icon: "🏔️", floors: 3,
    enemies: [
      { name: "Draugr", icon: "💀", hp: 30, atk: 8, loot: "Iron Sword" },
      { name: "Skeever", icon: "🐀", hp: 15, atk: 5, loot: "Skeever Tail" },
      { name: "Frostbite Spider", icon: "🕷️", hp: 35, atk: 10, loot: "Venom Sac" },
    ],
    boss: { name: "Draugr Overlord", icon: "👑💀", hp: 60, atk: 14, loot: "Dragonstone" },
  },
  {
    name: "Dustman's Cairn", icon: "⚰️", floors: 3,
    enemies: [
      { name: "Silver Hand", icon: "🗡️", hp: 40, atk: 12, loot: "Silver Greatsword" },
      { name: "Draugr Wight", icon: "☠️", hp: 45, atk: 11, loot: "Ancient Nord Bow" },
    ],
    boss: { name: "Draugr Deathlord", icon: "👹", hp: 80, atk: 16, loot: "Ebony Blade" },
  },
  {
    name: "Labyrinthian", icon: "🏛️", floors: 4,
    enemies: [
      { name: "Frost Troll", icon: "🧌", hp: 55, atk: 14, loot: "Troll Fat" },
      { name: "Skeletal Dragon", icon: "🦴🐉", hp: 70, atk: 18, loot: "Dragon Bones" },
    ],
    boss: { name: "Morokei", icon: "🎭", hp: 100, atk: 22, loot: "Dragon Priest Mask" },
  },
  {
    name: "Sovngarde", icon: "⚡", floors: 2,
    enemies: [
      { name: "Draugr Hero", icon: "⚔️💀", hp: 60, atk: 16, loot: "Nordic Armor" },
    ],
    boss: { name: "Alduin", icon: "🐉", hp: 150, atk: 28, loot: "World Eater's Crown" },
  },
];

function rollDmg(base: number) {
  return base + Math.floor(Math.random() * 8);
}

export default function Zone108ElderRealmQuest() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [player, setPlayer] = useState<Player>({
    hp: 100, maxHp: 100, stamina: 80, maxStamina: 80, magicka: 60, maxMagicka: 60,
    level: 1, xp: 0, weapon: "Iron Dagger", armor: "Hide Armor",
    gold: 50, shouts: ["Fus Ro Dah"], inventory: [],
  });
  const [dungeonIdx, setDungeonIdx] = useState(0);
  const [floorIdx, setFloorIdx] = useState(0);
  const [enemy, setEnemy] = useState<{ name: string; icon: string; hp: number; maxHp: number; atk: number; loot: string } | null>(null);
  const [log, setLog] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [timeBuff, setTimeBuff] = useState(false);
  const [lootItem, setLootItem] = useState<string | null>(null);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-5), msg]), []);

  const startGame = useCallback(() => {
    setPlayer({
      hp: 100, maxHp: 100, stamina: 80, maxStamina: 80, magicka: 60, maxMagicka: 60,
      level: 1, xp: 0, weapon: "Iron Dagger", armor: "Hide Armor",
      gold: 50, shouts: ["Fus Ro Dah"], inventory: [],
    });
    setDungeonIdx(0);
    setFloorIdx(0);
    setScore(0);
    setTimeBuff(false);
    setLog(["🏔️ You awaken on a cart heading to Helgen..."]);
    setPhase("explore");
    mascot.setMood("happy");
  }, [mascot]);

  const enterFloor = useCallback(() => {
    const dungeon = DUNGEONS[dungeonIdx]!;
    const isBoss = floorIdx >= dungeon.floors;
    const e = isBoss
      ? { ...dungeon.boss, maxHp: dungeon.boss.hp }
      : (() => {
          const tmpl = dungeon.enemies[Math.floor(Math.random() * dungeon.enemies.length)]!;
          return { ...tmpl, maxHp: tmpl.hp };
        })();
    setEnemy(e);
    addLog(`${isBoss ? "⚠️ BOSS: " : ""}${e.icon} ${e.name} appears! (${e.hp} HP)`);
    hapticSelection();
    setPhase("combat");
  }, [dungeonIdx, floorIdx, addLog]);

  const attack = useCallback((heavy: boolean) => {
    if (!enemy || enemy.hp <= 0) return;
    const stCost = heavy ? 25 : 10;
    if (player.stamina < stCost) { addLog("⚡ Not enough stamina!"); hapticError(); return; }

    let dmg = rollDmg(heavy ? 18 : 10);
    if (timeBuff) { dmg *= 2; setTimeBuff(false); addLog("⏳ Time-slowed strike! Double damage!"); }

    const newEnemy = { ...enemy, hp: Math.max(0, enemy.hp - dmg) };
    setEnemy(newEnemy);
    setPlayer((p) => ({ ...p, stamina: p.stamina - stCost }));
    addLog(`${heavy ? "⚔️ Heavy" : "🗡️"} attack → ${dmg} damage to ${enemy.icon}`);
    hapticSuccess();

    if (newEnemy.hp <= 0) {
      setScore((s) => s + 50);
      setLootItem(enemy.loot);
      setPhase("loot");
      addLog(`🏆 ${enemy.icon} ${enemy.name} defeated! Found: ${enemy.loot}`);
      return;
    }

    // Enemy strikes back
    setTimeout(() => {
      const eDmg = Math.max(1, rollDmg(enemy.atk) - Math.floor(player.level * 2));
      setPlayer((p) => {
        const newHp = p.hp - eDmg;
        if (newHp <= 0) {
          addLog("💀 You have fallen...");
          setPhase("complete");
          mascot.setMood("thinking");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-108",
          difficulty: "medium", score, maxScore: 800, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
          return { ...p, hp: 0 };
        }
        addLog(`💥 ${enemy.icon} hits you for ${eDmg} damage!`);
        return { ...p, hp: newHp, stamina: Math.min(p.maxStamina, p.stamina + 5) };
      });
    }, 300);
  }, [enemy, player, timeBuff, score, addLog, mascot]);

  const useShout = useCallback((shoutIdx: number) => {
    const shout = SHOUTS[shoutIdx]!;
    if (shout.cost > 0 && player.magicka < shout.cost) { addLog("🔵 Not enough magicka!"); hapticError(); return; }
    if (!enemy) return;

    if (shout.dmg > 0) {
      const newEnemy = { ...enemy, hp: Math.max(0, enemy.hp - shout.dmg) };
      setEnemy(newEnemy);
      addLog(`${shout.icon} ${shout.name}! ${shout.dmg} damage!`);
      hapticSuccess();
      if (newEnemy.hp <= 0) {
        setScore((s) => s + 50);
        setLootItem(enemy.loot);
        setPhase("loot");
        return;
      }
    } else {
      setTimeBuff(true);
      addLog(`${shout.icon} ${shout.name}! Next attack deals double!`);
      hapticSelection();
    }
    setPlayer((p) => ({ ...p, magicka: p.magicka - shout.cost }));
  }, [enemy, player, addLog]);

  const collectLoot = useCallback(() => {
    setPlayer((p) => ({
      ...p,
      inventory: [...p.inventory, lootItem!],
      xp: p.xp + 30,
      gold: p.gold + 20,
      level: p.xp + 30 >= p.level * 50 ? p.level + 1 : p.level,
      maxHp: p.xp + 30 >= p.level * 50 ? p.maxHp + 15 : p.maxHp,
      hp: Math.min(p.hp + 10, p.xp + 30 >= p.level * 50 ? p.maxHp + 15 : p.maxHp),
      magicka: Math.min(p.maxMagicka, p.magicka + 15),
      stamina: Math.min(p.maxStamina, p.stamina + 15),
    }));
    setLootItem(null);

    const dungeon = DUNGEONS[dungeonIdx]!;
    const nextFloor = floorIdx + 1;
    if (nextFloor > dungeon.floors) {
      // Beat dungeon
      const nextDungeon = dungeonIdx + 1;
      if (nextDungeon >= DUNGEONS.length) {
        setPhase("complete");
        mascot.setMood("cheering");
        setScore((s) => s + 200);
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-108",
          difficulty: "medium", score: score + 200, maxScore: 800, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        addLog("🐉 Alduin is slain! The world is saved!");
        return;
      }
      setDungeonIdx(nextDungeon);
      setFloorIdx(0);
      addLog(`🏔️ Entering ${DUNGEONS[nextDungeon]!.name}...`);
      // Unlock new shout
      if (nextDungeon < SHOUTS.length) {
        setPlayer((p) => ({ ...p, shouts: [...p.shouts, SHOUTS[nextDungeon]!.name] }));
        addLog(`📜 New shout learned: ${SHOUTS[nextDungeon]!.name}!`);
      }
    } else {
      setFloorIdx(nextFloor);
    }
    setPhase("explore");
  }, [lootItem, dungeonIdx, floorIdx, score, addLog, mascot]);

  const currentDungeon = DUNGEONS[dungeonIdx];

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-800 via-stone-900 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-sky-300 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Elder Realm Quest
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Explore dungeons, fight draugr, learn dragon shouts, and face Alduin. Light/heavy attacks, shout powers, loot & level up through 4 legendary dungeons.
            </p>
            <PhysicalButton onClick={startGame}><Map className="mr-2 h-5 w-5" /> Begin Adventure</PhysicalButton>
          </motion.div>
        )}

        {phase === "explore" && currentDungeon && (
          <motion.div key="explore" className="flex w-full max-w-md flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Player Stats */}
            <div className="flex w-full items-center justify-between rounded-xl bg-black/40 px-4 py-2 text-xs text-white">
              <span>Lv.{player.level} | {player.gold}g</span>
              <div className="flex gap-3">
                <span className="text-red-400">❤️ {player.hp}/{player.maxHp}</span>
                <span className="text-green-400">⚡ {player.stamina}</span>
                <span className="text-blue-400">🔵 {player.magicka}</span>
              </div>
            </div>

            <div className="rounded-2xl bg-slate-800/60 p-6 text-center">
              <p className="text-4xl">{currentDungeon.icon}</p>
              <h2 className="mt-2 text-xl font-bold text-sky-300">{currentDungeon.name}</h2>
              <p className="text-sm text-white/50">Floor {floorIdx + 1} / {currentDungeon.floors + 1}</p>
              <p className="mt-2 text-xs text-white/40">Score: {score}</p>
            </div>

            <PhysicalButton onClick={enterFloor}>
              <Sword className="mr-2 h-5 w-5" />
              {floorIdx >= currentDungeon.floors ? "Face the Boss" : "Explore Deeper"}
            </PhysicalButton>

            <div className="h-24 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "combat" && enemy && (
          <motion.div key="combat" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats bar */}
            <div className="flex w-full gap-2 text-xs">
              <div className="flex-1">
                <div className="flex justify-between text-red-300"><span>HP</span><span>{player.hp}/{player.maxHp}</span></div>
                <div className="h-2 overflow-hidden rounded bg-red-900"><div className="h-full bg-red-500 transition-all" style={{ width: `${(player.hp / player.maxHp) * 100}%` }} /></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-green-300"><span>STA</span><span>{player.stamina}/{player.maxStamina}</span></div>
                <div className="h-2 overflow-hidden rounded bg-green-900"><div className="h-full bg-green-500 transition-all" style={{ width: `${(player.stamina / player.maxStamina) * 100}%` }} /></div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-blue-300"><span>MAG</span><span>{player.magicka}/{player.maxMagicka}</span></div>
                <div className="h-2 overflow-hidden rounded bg-blue-900"><div className="h-full bg-blue-500 transition-all" style={{ width: `${(player.magicka / player.maxMagicka) * 100}%` }} /></div>
              </div>
            </div>

            {/* Enemy */}
            <div className="rounded-2xl bg-red-950/50 px-8 py-4 text-center">
              <div className="text-4xl">{enemy.icon}</div>
              <p className="mt-1 font-bold text-red-300">{enemy.name}</p>
              <div className="mt-1 h-3 w-32 overflow-hidden rounded bg-red-900">
                <div className="h-full bg-red-500 transition-all" style={{ width: `${(enemy.hp / enemy.maxHp) * 100}%` }} />
              </div>
              <p className="text-xs text-red-400">{enemy.hp}/{enemy.maxHp} HP</p>
            </div>

            {/* Combat actions */}
            <div className="flex flex-wrap justify-center gap-2">
              <PhysicalButton onClick={() => attack(false)} variant="primary"><Sword className="mr-1 h-4 w-4" /> Light (10⚡)</PhysicalButton>
              <PhysicalButton onClick={() => attack(true)} variant="danger"><Sword className="mr-1 h-4 w-4" /> Heavy (25⚡)</PhysicalButton>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {SHOUTS.map((s, i) => (
                player.shouts.includes(s.name) && (
                  <PhysicalButton key={i} onClick={() => useShout(i)} variant="secondary">
                    {s.icon} {s.name}
                  </PhysicalButton>
                )
              ))}
            </div>
            {timeBuff && <p className="text-xs text-yellow-300 animate-pulse">⏳ Time slowed — next attack x2!</p>}

            <div className="h-24 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "loot" && (
          <motion.div key="loot" className="flex flex-col items-center gap-4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="rounded-2xl bg-yellow-900/40 p-8 text-center">
              <p className="text-5xl">🎁</p>
              <h2 className="mt-3 text-xl font-bold text-yellow-300">Loot Found!</h2>
              <p className="mt-2 text-lg text-white">{lootItem}</p>
              <p className="text-sm text-white/50">+30 XP | +20 Gold</p>
            </div>
            <PhysicalButton onClick={collectLoot}><ShieldCheck className="mr-1 h-4 w-4" /> Collect & Continue</PhysicalButton>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{player.hp > 0 ? "🐉" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-sky-300">
                {player.hp > 0 ? "Alduin is Slain!" : "Fallen in Battle"}
              </h2>
              <p className="mt-2 text-white/60">Score: {score} | Level: {player.level}</p>
              <p className="text-sm text-white/40">Items: {player.inventory.length} | Gold: {player.gold}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> New Adventure
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
