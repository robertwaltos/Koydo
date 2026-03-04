"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Heart, RotateCcw, Shield, Drumstick } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "playing" | "taming" | "battle" | "complete";

interface Dino {
  name: string; icon: string; hp: number; maxHp: number;
  atk: number; def: number; tameable: boolean; tameFood: string;
  rarity: string;
}

interface TamedDino extends Dino {
  xp: number; level: number; loyalty: number;
}

interface Resource {
  name: string; icon: string; amount: number;
}

const WILD_DINOS: Dino[] = [
  { name: "Raptor", icon: "🦎", hp: 30, maxHp: 30, atk: 8, def: 2, tameable: true, tameFood: "Meat", rarity: "common" },
  { name: "Trike", icon: "🦕", hp: 60, maxHp: 60, atk: 6, def: 8, tameable: true, tameFood: "Berries", rarity: "common" },
  { name: "Pteranodon", icon: "🦅", hp: 25, maxHp: 25, atk: 7, def: 1, tameable: true, tameFood: "Meat", rarity: "uncommon" },
  { name: "Stego", icon: "🐊", hp: 80, maxHp: 80, atk: 10, def: 12, tameable: true, tameFood: "Berries", rarity: "uncommon" },
  { name: "Carno", icon: "🐉", hp: 50, maxHp: 50, atk: 15, def: 5, tameable: true, tameFood: "Meat", rarity: "rare" },
  { name: "Rex", icon: "🦖", hp: 120, maxHp: 120, atk: 25, def: 10, tameable: true, tameFood: "Prime Meat", rarity: "epic" },
  { name: "Giga", icon: "🔥🦖", hp: 200, maxHp: 200, atk: 40, def: 15, tameable: false, tameFood: "", rarity: "legendary" },
];

const LOCATIONS = [
  { name: "Beach", icon: "🏖️", dinos: [0, 1], resources: ["Wood", "Fiber", "Berries"] },
  { name: "Forest", icon: "🌲", dinos: [0, 1, 2], resources: ["Wood", "Thatch", "Berries"] },
  { name: "Mountains", icon: "⛰️", dinos: [3, 4], resources: ["Stone", "Metal", "Meat"] },
  { name: "Volcanic Plains", icon: "🌋", dinos: [4, 5], resources: ["Metal", "Obsidian", "Prime Meat"] },
  { name: "Boss Arena", icon: "💀", dinos: [6], resources: [] },
];

export default function Zone119PrimalTamerIsle() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [hp, setHp] = useState(100);
  const [maxHp] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [day, setDay] = useState(1);
  const [location, setLocation] = useState(0);
  const [tamed, setTamed] = useState<TamedDino[]>([]);
  const [resources, setResources] = useState<Resource[]>([
    { name: "Wood", icon: "🪵", amount: 10 },
    { name: "Stone", icon: "🪨", amount: 5 },
    { name: "Fiber", icon: "🌾", amount: 10 },
    { name: "Berries", icon: "🫐", amount: 15 },
    { name: "Meat", icon: "🥩", amount: 5 },
    { name: "Thatch", icon: "🌿", amount: 5 },
    { name: "Metal", icon: "⚙️", amount: 0 },
    { name: "Prime Meat", icon: "🍖", amount: 0 },
    { name: "Obsidian", icon: "🖤", amount: 0 },
    { name: "Narcotics", icon: "💊", amount: 3 },
  ]);
  const [wildDino, setWildDino] = useState<Dino | null>(null);
  const [wildHp, setWildHp] = useState(0);
  const [tameProgress, setTameProgress] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [activeDino, setActiveDino] = useState<number>(-1); // index in tamed array

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-8), msg]), []);

  const getResource = useCallback((name: string) => resources.find((r) => r.name === name)?.amount ?? 0, [resources]);
  const modResource = useCallback((name: string, delta: number) => {
    setResources((r) => r.map((res) => res.name === name ? { ...res, amount: Math.max(0, res.amount + delta) } : res));
  }, []);

  const startGame = useCallback(() => {
    setPhase("playing");
    setHp(100); setStamina(100); setLevel(1); setXp(0); setDay(1); setLocation(0);
    setTamed([]); setActiveDino(-1); setScore(0);
    setResources([
      { name: "Wood", icon: "🪵", amount: 10 },
      { name: "Stone", icon: "🪨", amount: 5 },
      { name: "Fiber", icon: "🌾", amount: 10 },
      { name: "Berries", icon: "🫐", amount: 15 },
      { name: "Meat", icon: "🥩", amount: 5 },
      { name: "Thatch", icon: "🌿", amount: 5 },
      { name: "Metal", icon: "⚙️", amount: 0 },
      { name: "Prime Meat", icon: "🍖", amount: 0 },
      { name: "Obsidian", icon: "🖤", amount: 0 },
      { name: "Narcotics", icon: "💊", amount: 3 },
    ]);
    setLog(["🏝️ You wake up on a mysterious island. Survive, tame dinosaurs, defeat the Boss!"]);
    mascot.setMood("happy");
  }, [mascot]);

  const gather = useCallback(() => {
    if (stamina < 10) { addLog("💤 Too tired to gather!"); hapticError(); return; }
    const loc = LOCATIONS[location]!;
    setStamina((s) => s - 10);
    for (const resName of loc.resources) {
      const amt = Math.floor(Math.random() * 5) + 2;
      modResource(resName, amt);
      addLog(`+${amt} ${resName}`);
    }
    hapticSelection();
  }, [stamina, location, modResource, addLog]);

  const explore = useCallback(() => {
    if (stamina < 15) { addLog("💤 Not enough stamina!"); hapticError(); return; }
    const loc = LOCATIONS[location]!;
    setStamina((s) => s - 15);
    const dinoIdx = loc.dinos[Math.floor(Math.random() * loc.dinos.length)]!;
    const dino = { ...WILD_DINOS[dinoIdx]! };
    setWildDino(dino);
    setWildHp(dino.hp);
    setTameProgress(0);

    if (dino.tameable) {
      addLog(`🦕 Found a wild ${dino.icon} ${dino.name}! Fight or Tame?`);
      setPhase("taming");
    } else {
      addLog(`⚠️ A ${dino.icon} ${dino.name} attacks!`);
      setPhase("battle");
    }
  }, [stamina, location, addLog]);

  const feedDino = useCallback(() => {
    if (!wildDino) return;
    const food = wildDino.tameFood;
    if (getResource(food) <= 0) { addLog(`❌ No ${food}!`); hapticError(); return; }
    modResource(food, -1);
    const progress = Math.floor(Math.random() * 20) + 10;
    const newProgress = tameProgress + progress;
    setTameProgress(newProgress);
    addLog(`🍖 Fed ${food}. Taming: ${Math.min(100, newProgress)}%`);
    hapticSelection();

    if (newProgress >= 100) {
      const tamedDino: TamedDino = {
        ...wildDino, xp: 0, level: 1, loyalty: 100,
      };
      setTamed((t) => [...t, tamedDino]);
      if (tamed.length === 0) setActiveDino(0);
      setScore((s) => s + 50);
      setXp((x) => x + 30);
      addLog(`🎉 ${wildDino.icon} ${wildDino.name} tamed!`);
      hapticSuccess();
      setPhase("playing");
      setWildDino(null);
    }
  }, [wildDino, tameProgress, getResource, modResource, tamed, addLog]);

  const useNarcotics = useCallback(() => {
    if (getResource("Narcotics") <= 0) { addLog("❌ No narcotics!"); hapticError(); return; }
    modResource("Narcotics", -1);
    setTameProgress((p) => Math.min(100, p + 25));
    addLog("💊 Used narcotics. +25% taming!");
    hapticSelection();
  }, [getResource, modResource, addLog]);

  const attackWild = useCallback(() => {
    if (!wildDino) return;
    const playerAtk = 8 + level * 2;
    const dinoAtk = wildDino.atk;

    // Player attacks
    const dmg = Math.max(1, playerAtk - wildDino.def + Math.floor(Math.random() * 4));
    const newWildHp = wildHp - dmg;
    setWildHp(newWildHp);
    addLog(`⚔️ You deal ${dmg} to ${wildDino.name}!`);

    // Active dino attacks too
    if (activeDino >= 0 && tamed[activeDino]) {
      const dd = tamed[activeDino]!;
      const dDmg = Math.max(1, dd.atk + dd.level * 2);
      setWildHp((h) => h - dDmg);
      addLog(`${dd.icon} ${dd.name} deals ${dDmg}!`);
    }

    if (newWildHp <= 0) {
      setScore((s) => s + 30);
      setXp((x) => x + 20);
      modResource("Meat", 3);
      if (wildDino.rarity === "legendary") {
        setScore((s) => s + 200);
        addLog("🏆 BOSS DEFEATED!");
        setPhase("complete");
        mascot.setMood("cheering");
        const finalScore = Math.min(500, score + 200);
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-119",
          difficulty: "medium", score: finalScore, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        return;
      }
      addLog(`💀 ${wildDino.name} defeated! +3 Meat`);
      hapticSuccess();
      setPhase("playing");
      setWildDino(null);
      return;
    }

    // Dino strikes back
    const pDmg = Math.max(1, dinoAtk - Math.floor(level * 0.5));
    setHp((h) => {
      const nh = h - pDmg;
      if (nh <= 0) {
        addLog("💀 You died...");
        setPhase("complete");
        mascot.setMood("thinking");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-119",
          difficulty: "medium", score, maxScore: 500, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        return 0;
      }
      return nh;
    });
    addLog(`💥 ${wildDino.name} hits you for ${pDmg}!`);
    hapticError();
  }, [wildDino, wildHp, level, activeDino, tamed, score, modResource, addLog, mascot]);

  const flee = useCallback(() => {
    addLog("🏃 Ran away!");
    setPhase("playing");
    setWildDino(null);
  }, [addLog]);

  const sleep = useCallback(() => {
    setDay((d) => d + 1);
    setStamina(100);
    setHp((h) => Math.min(maxHp, h + 30));
    // Level up check
    if (xp >= level * 50) {
      setLevel((l) => l + 1);
      addLog("🆙 Level up!");
    }
    addLog(`🌙 Day ${day + 1}. Rested.`);
    hapticSelection();
  }, [day, maxHp, xp, level, addLog]);

  const craftNarcotics = useCallback(() => {
    if (getResource("Berries") < 5) { addLog("❌ Need 5 Berries!"); hapticError(); return; }
    modResource("Berries", -5);
    modResource("Narcotics", 2);
    addLog("🧪 Crafted 2 Narcotics");
    hapticSelection();
  }, [getResource, modResource, addLog]);

  const loc = LOCATIONS[location]!;

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-green-950 via-emerald-950 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-green-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Leaf className="mr-2 inline h-8 w-8" /> Primal Tamer Isle
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Survival taming sim. Gather resources, tame dinosaurs, level up, and defeat the Giga Boss. Craft narcotics to speed taming.
            </p>
            <PhysicalButton onClick={startGame}><Leaf className="mr-2 h-5 w-5" /> Survive the Isle</PhysicalButton>
          </motion.div>
        )}

        {phase === "playing" && (
          <motion.div key="playing" className="flex w-full max-w-lg flex-col gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* HUD */}
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-black/40 px-3 py-2 text-xs text-white">
              <span>❤️ {hp}/{maxHp}</span>
              <span>⚡ {stamina}</span>
              <span>📊 Lv{level} ({xp}/{level * 50}XP)</span>
              <span>☀️ Day {day}</span>
              <span>🏆 {score}</span>
            </div>

            {/* Location */}
            <div className="rounded-xl bg-black/30 p-3 text-center">
              <h2 className="text-lg font-bold text-white">{loc.icon} {loc.name}</h2>
              <div className="mt-1 flex justify-center gap-1">
                {LOCATIONS.map((l, i) => (
                  <button key={i} onClick={() => { setLocation(i); hapticSelection(); }}
                    className={`rounded px-2 py-1 text-xs ${i === location ? "bg-green-700 text-white" : "bg-white/5 text-white/40 hover:bg-white/10"}`}>
                    {l.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2">
              <PhysicalButton onClick={gather} variant="success">🪓 Gather</PhysicalButton>
              <PhysicalButton onClick={explore} variant="secondary">🔍 Explore</PhysicalButton>
              <PhysicalButton onClick={sleep} variant="primary">🛏️ Sleep</PhysicalButton>
              <PhysicalButton onClick={craftNarcotics} variant="primary">🧪 Craft Narcotics</PhysicalButton>
            </div>

            {/* Resources */}
            <div className="flex flex-wrap gap-1 text-xs text-white/50">
              {resources.filter((r) => r.amount > 0).map((r) => (
                <span key={r.name} className="rounded bg-black/20 px-1.5 py-0.5">{r.icon} {r.amount}</span>
              ))}
            </div>

            {/* Tamed dinos */}
            {tamed.length > 0 && (
              <div className="flex flex-col gap-1">
                <span className="text-xs text-green-400">🦕 Tamed ({tamed.length}):</span>
                <div className="flex flex-wrap gap-1">
                  {tamed.map((d, i) => (
                    <button key={i} onClick={() => setActiveDino(i)}
                      className={`rounded px-2 py-1 text-xs ${i === activeDino ? "bg-green-700 text-white ring-1 ring-green-400" : "bg-white/5 text-white/50"}`}>
                      {d.icon} {d.name} Lv{d.level}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="h-16 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs text-white/50">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "taming" && wildDino && (
          <motion.div key="taming" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-xl bg-black/40 p-4 text-center">
              <p className="text-4xl">{wildDino.icon}</p>
              <h2 className="mt-1 text-lg font-bold text-white">{wildDino.name}</h2>
              <p className="text-xs text-white/50">{wildDino.rarity} • Wants: {wildDino.tameFood}</p>
              <div className="mt-2 h-3 w-48 overflow-hidden rounded bg-yellow-900 mx-auto">
                <div className="h-full bg-yellow-500 transition-all" style={{ width: `${Math.min(100, tameProgress)}%` }} />
              </div>
              <p className="text-xs text-yellow-400 mt-1">Taming: {Math.min(100, tameProgress)}%</p>
            </div>
            <div className="flex gap-2">
              <PhysicalButton onClick={feedDino} variant="success">🍖 Feed ({getResource(wildDino.tameFood)})</PhysicalButton>
              <PhysicalButton onClick={useNarcotics} variant="secondary">💊 Narcotics ({getResource("Narcotics")})</PhysicalButton>
            </div>
            <div className="flex gap-2">
              <PhysicalButton onClick={() => { setPhase("battle"); }} variant="danger">⚔️ Fight Instead</PhysicalButton>
              <PhysicalButton onClick={flee}>🏃 Flee</PhysicalButton>
            </div>
          </motion.div>
        )}

        {phase === "battle" && wildDino && (
          <motion.div key="battle" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-xl bg-red-950/40 p-4 text-center">
              <p className="text-4xl">{wildDino.icon}</p>
              <h2 className="mt-1 text-lg font-bold text-red-300">{wildDino.name}</h2>
              <div className="mt-2 h-3 w-48 overflow-hidden rounded bg-red-900 mx-auto">
                <div className="h-full bg-red-500 transition-all" style={{ width: `${(wildHp / wildDino.maxHp) * 100}%` }} />
              </div>
              <p className="text-xs text-red-400 mt-1">{wildHp}/{wildDino.maxHp} HP</p>
            </div>
            <div className="text-xs text-white/50">Your HP: ❤️ {hp} {activeDino >= 0 && tamed[activeDino] && `| ${tamed[activeDino]!.icon} ${tamed[activeDino]!.name}`}</div>
            <div className="flex gap-2">
              <PhysicalButton onClick={attackWild} variant="danger">⚔️ Attack</PhysicalButton>
              <PhysicalButton onClick={flee}>🏃 Flee</PhysicalButton>
            </div>
            <div className="h-16 overflow-y-auto rounded-lg bg-black/30 p-2 text-xs text-white/50 w-full">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{hp > 0 ? "🏆" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-green-400">
                {hp > 0 ? "Island Conquered!" : "Lost to the Wild"}
              </h2>
              <p className="mt-2 text-white/60">Days survived: {day} | Dinos tamed: {tamed.length}</p>
              <p className="text-white/60">Level: {level} | Score: {score}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> New Island
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
