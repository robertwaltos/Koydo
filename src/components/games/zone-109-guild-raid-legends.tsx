"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Swords, Heart, RotateCcw, Zap } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "raid" | "complete";
type Role = "tank" | "healer" | "dps";

interface RaidMember {
  name: string; icon: string; role: Role;
  hp: number; maxHp: number; mana: number; maxMana: number;
  cooldown: number;
}

interface Boss {
  name: string; icon: string;
  hp: number; maxHp: number;
  enrage: number; mechanics: string[];
  currentMech: string | null; mechTimer: number;
}

const BOSSES: Omit<Boss, "currentMech" | "mechTimer">[] = [
  { name: "Onyxia", icon: "🐉", hp: 500, maxHp: 500, enrage: 60, mechanics: ["Breathe Fire (Spread!)", "Tail Swipe (Move!)", "Whelp Spawn (AoE!)"] },
  { name: "Ragnaros", icon: "🔥", hp: 700, maxHp: 700, enrage: 55, mechanics: ["Lava Wave (Jump!)", "Magma Blast (Shield!)", "Sons of Flame (Kill adds!)"] },
  { name: "Lich King", icon: "👑💀", hp: 1000, maxHp: 1000, enrage: 50, mechanics: ["Defile (Move!)", "Val'kyr (Interrupt!)", "Frostmourne (Survive!)"] },
];

function initParty(): RaidMember[] {
  return [
    { name: "You (Tank)", icon: "🛡️", role: "tank", hp: 120, maxHp: 120, mana: 50, maxMana: 50, cooldown: 0 },
    { name: "Priestess", icon: "✝️", role: "healer", hp: 70, maxHp: 70, mana: 80, maxMana: 80, cooldown: 0 },
    { name: "Mage", icon: "🧙", role: "dps", hp: 60, maxHp: 60, mana: 60, maxMana: 60, cooldown: 0 },
    { name: "Rogue", icon: "🗡️", role: "dps", hp: 65, maxHp: 65, mana: 40, maxMana: 40, cooldown: 0 },
    { name: "Hunter", icon: "🏹", role: "dps", hp: 60, maxHp: 60, mana: 50, maxMana: 50, cooldown: 0 },
  ];
}

export default function Zone109GuildRaidLegends() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [party, setParty] = useState<RaidMember[]>(initParty());
  const [boss, setBoss] = useState<Boss | null>(null);
  const [bossIdx, setBossIdx] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [tick, setTick] = useState(0);
  const [score, setScore] = useState(0);
  const [mechResponse, setMechResponse] = useState<string | null>(null);
  const tickRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-7), msg]), []);

  const startGame = useCallback(() => {
    setParty(initParty());
    setBossIdx(0);
    const b = BOSSES[0]!;
    setBoss({ ...b, currentMech: null, mechTimer: 8 });
    setTick(0);
    tickRef.current = 0;
    setScore(0);
    setLog(["⚔️ Raid begins! Tank, hold aggro!"]);
    setMechResponse(null);
    setPhase("raid");
    mascot.setMood("happy");
  }, [mascot]);

  // Auto-tick for raid combat
  useEffect(() => {
    if (phase !== "raid" || !boss) return;

    timerRef.current = setInterval(() => {
      tickRef.current++;
      setTick(tickRef.current);

      setParty((prevParty) => {
        const p = prevParty.map((m) => ({ ...m, cooldown: Math.max(0, m.cooldown - 1) }));

        // Boss auto-attacks tank
        const tank = p.find((m) => m.role === "tank" && m.hp > 0);
        if (tank) {
          const dmg = 8 + Math.floor(Math.random() * 6);
          tank.hp = Math.max(0, tank.hp - dmg);
        }

        // Healer auto-heals lowest
        const healer = p.find((m) => m.role === "healer" && m.hp > 0 && m.mana >= 10);
        if (healer) {
          const lowest = p.filter((m) => m.hp > 0).reduce((a, b) => (a.hp / a.maxHp < b.hp / b.maxHp ? a : b));
          lowest.hp = Math.min(lowest.maxHp, lowest.hp + 12);
          healer.mana -= 5;
        }

        // DPS auto-attacks
        setBoss((prevBoss) => {
          if (!prevBoss) return prevBoss;
          let totalDmg = 0;
          for (const m of p) {
            if (m.role === "dps" && m.hp > 0) totalDmg += 6 + Math.floor(Math.random() * 4);
          }
          const newHp = Math.max(0, prevBoss.hp - totalDmg);

          // Mechanic timer
          let newMechTimer = prevBoss.mechTimer - 1;
          let currentMech = prevBoss.currentMech;
          if (newMechTimer <= 0) {
            currentMech = prevBoss.mechanics[Math.floor(Math.random() * prevBoss.mechanics.length)]!;
            newMechTimer = 6 + Math.floor(Math.random() * 4);
            setMechResponse(null);
          }

          return { ...prevBoss, hp: newHp, mechTimer: newMechTimer, currentMech };
        });

        // Mana regen
        for (const m of p) {
          if (m.hp > 0) m.mana = Math.min(m.maxMana, m.mana + 2);
        }

        return p;
      });
    }, 1500);

    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, boss]);

  // Check boss death / party wipe
  useEffect(() => {
    if (phase !== "raid" || !boss) return;

    if (boss.hp <= 0) {
      addLog(`🏆 ${boss.icon} ${boss.name} defeated!`);
      hapticSuccess();
      setScore((s) => s + 200);
      const next = bossIdx + 1;
      if (next >= BOSSES.length) {
        setPhase("complete");
        mascot.setMood("cheering");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-109",
          difficulty: "medium", score: score + 200, maxScore: 600, interactions: 1, elapsedMs: tick * 1500, source: "component", occurredAt: new Date().toISOString(), });
        return;
      }
      setBossIdx(next);
      const nb = BOSSES[next]!;
      setBoss({ ...nb, currentMech: null, mechTimer: 8 });
      // Heal party between bosses
      setParty((p) => p.map((m) => ({ ...m, hp: m.maxHp, mana: m.maxMana })));
      addLog(`⚔️ Next boss: ${nb.icon} ${nb.name}!`);
    }

    if (party.filter((m) => m.hp > 0).length === 0) {
      addLog("💀 Raid wiped!");
      setPhase("complete");
      mascot.setMood("thinking");
      emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-109",
          difficulty: "medium", score, maxScore: 600, interactions: 1, elapsedMs: tick * 1500, source: "component", occurredAt: new Date().toISOString(), });
    }
  }, [boss, party, phase, bossIdx, score, tick, addLog, mascot]);

  // Handle mechanic response
  const respondToMech = useCallback((correct: boolean) => {
    if (!boss?.currentMech) return;
    if (correct) {
      addLog(`✅ Mechanic handled: ${boss.currentMech}`);
      setScore((s) => s + 30);
      hapticSuccess();
    } else {
      // Raid-wide damage
      setParty((p) => p.map((m) => ({ ...m, hp: Math.max(0, m.hp - 20) })));
      addLog(`❌ Failed mechanic! Raid takes damage!`);
      hapticError();
    }
    setBoss((b) => b ? { ...b, currentMech: null } : b);
    setMechResponse(null);
  }, [boss, addLog]);

  const useSpecial = useCallback((idx: number) => {
    setParty((p) => {
      const m = p[idx];
      if (!m || m.hp <= 0 || m.cooldown > 0 || m.mana < 20) return p;
      const updated = [...p];
      updated[idx] = { ...m, mana: m.mana - 20, cooldown: 3 };

      if (m.role === "tank") {
        // Shield Wall: reduce next damage
        updated[idx]!.hp = Math.min(m.maxHp, m.hp + 25);
        addLog(`🛡️ ${m.icon} Shield Wall! +25 HP!`);
      } else if (m.role === "healer") {
        // Group heal
        for (const member of updated) { if (member.hp > 0) member.hp = Math.min(member.maxHp, member.hp + 20); }
        addLog(`💚 ${m.icon} Group Heal! Everyone +20 HP!`);
      } else {
        // Burst DPS
        setBoss((b) => b ? { ...b, hp: Math.max(0, b.hp - 40) } : b);
        addLog(`⚡ ${m.icon} ${m.name} Burst! 40 bonus damage!`);
      }
      hapticSuccess();
      return updated;
    });
  }, [addLog]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-amber-900 via-red-950 to-slate-950 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-amber-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        Guild Raid Legends
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Lead a 5-person raid party through 3 legendary bosses. Manage your tank, healer, and DPS. React to boss mechanics and use special abilities strategically!
            </p>
            <PhysicalButton onClick={startGame}><Shield className="mr-2 h-5 w-5" /> Form Raid Group</PhysicalButton>
          </motion.div>
        )}

        {phase === "raid" && boss && (
          <motion.div key="raid" className="flex w-full max-w-lg flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Boss */}
            <div className="w-full rounded-xl bg-red-950/60 p-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <span className="text-3xl">{boss.icon}</span>
                <div className="flex-1 text-left">
                  <p className="text-sm font-bold text-red-300">{boss.name}</p>
                  <div className="h-3 w-full overflow-hidden rounded bg-red-900">
                    <motion.div className="h-full bg-red-500" style={{ width: `${(boss.hp / boss.maxHp) * 100}%` }} />
                  </div>
                  <p className="text-[10px] text-red-400">{boss.hp} / {boss.maxHp} HP | Boss {bossIdx + 1}/{BOSSES.length}</p>
                </div>
              </div>
            </div>

            {/* Mechanic alert */}
            {boss.currentMech && (
              <motion.div className="w-full rounded-xl bg-yellow-600/80 p-3 text-center" initial={{ scale: 0.8 }} animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 0.8 }}>
                <p className="text-sm font-black text-black">⚠️ MECHANIC: {boss.currentMech}</p>
                <div className="mt-1 flex justify-center gap-2">
                  <PhysicalButton onClick={() => respondToMech(true)} variant="primary">✅ Respond</PhysicalButton>
                  <PhysicalButton onClick={() => respondToMech(false)} variant="danger">❌ Ignore</PhysicalButton>
                </div>
              </motion.div>
            )}

            {/* Party */}
            <div className="flex w-full flex-wrap justify-center gap-1">
              {party.map((m, i) => (
                <div key={i} className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs ${m.hp <= 0 ? "bg-gray-900/40 opacity-30" : m.role === "tank" ? "bg-blue-900/40" : m.role === "healer" ? "bg-green-900/40" : "bg-orange-900/40"}`}>
                  <span>{m.icon}</span>
                  <div className="w-12">
                    <div className="h-1.5 overflow-hidden rounded bg-gray-700"><div className="h-full bg-green-500" style={{ width: `${(m.hp / m.maxHp) * 100}%` }} /></div>
                    <div className="h-1 overflow-hidden rounded bg-gray-700 mt-0.5"><div className="h-full bg-blue-400" style={{ width: `${(m.mana / m.maxMana) * 100}%` }} /></div>
                  </div>
                  <button onClick={() => useSpecial(i)} disabled={m.hp <= 0 || m.cooldown > 0 || m.mana < 20}
                    className={`rounded px-1 py-0.5 text-[9px] font-bold ${m.cooldown > 0 ? "bg-gray-700 text-gray-400" : "bg-amber-600 text-white hover:bg-amber-500"}`}>
                    {m.cooldown > 0 ? `${m.cooldown}` : "⚡"}
                  </button>
                </div>
              ))}
            </div>

            <div className="text-xs text-white/40">Score: {score} | Tick: {tick}</div>

            {/* Log */}
            <div className="h-28 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{party.some((m) => m.hp > 0) ? "🏆" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-amber-400">
                {party.some((m) => m.hp > 0) ? "Raid Complete!" : "Raid Wiped"}
              </h2>
              <p className="mt-2 text-white/60">Score: {score} | Bosses: {bossIdx + (boss && boss.hp <= 0 ? 1 : 0)}/{BOSSES.length}</p>
              <p className="text-sm text-white/40">Survivors: {party.filter((m) => m.hp > 0).map((m) => m.icon).join(" ") || "None"}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Requeue
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
