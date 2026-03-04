"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword, Shield, Heart, Flame, RotateCcw } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "explore" | "combat" | "bonfire" | "dead" | "victory";
type EnemyKind = "hollow" | "knight" | "demon" | "boss";

interface Enemy {
  name: string;
  kind: EnemyKind;
  hp: number;
  maxHp: number;
  atk: number;
  stagger: number;
  pattern: ("attack" | "heavy" | "guard" | "charge")[];
  patternIdx: number;
}

interface PlayerState {
  hp: number;
  maxHp: number;
  stamina: number;
  maxStamina: number;
  estus: number;
  souls: number;
  level: number;
  atk: number;
  def: number;
  floor: number;
}

const ENEMY_TEMPLATES: Record<EnemyKind, Omit<Enemy, "patternIdx">> = {
  hollow: {
    name: "Lost Hollow",
    kind: "hollow",
    hp: 40,
    maxHp: 40,
    atk: 8,
    stagger: 20,
    pattern: ["attack", "attack", "guard", "attack"],
  },
  knight: {
    name: "Abyssal Knight",
    kind: "knight",
    hp: 80,
    maxHp: 80,
    atk: 15,
    stagger: 35,
    pattern: ["guard", "attack", "heavy", "guard", "attack"],
  },
  demon: {
    name: "Fire Demon",
    kind: "demon",
    hp: 120,
    maxHp: 120,
    atk: 22,
    stagger: 50,
    pattern: ["charge", "heavy", "attack", "attack", "guard", "heavy"],
  },
  boss: {
    name: "Soul of the Abyss",
    kind: "boss",
    hp: 200,
    maxHp: 200,
    atk: 30,
    stagger: 80,
    pattern: ["charge", "heavy", "heavy", "guard", "attack", "charge", "attack", "heavy"],
  },
};

const ENEMY_ICONS: Record<EnemyKind, string> = {
  hollow: "💀",
  knight: "⚔️",
  demon: "👹",
  boss: "🐉",
};

const FLOOR_ENEMIES: EnemyKind[][] = [
  ["hollow", "hollow"],
  ["hollow", "knight"],
  ["knight", "knight"],
  ["knight", "demon"],
  ["demon", "demon"],
  ["boss"],
];

function createEnemy(kind: EnemyKind, floorScale: number): Enemy {
  const tmpl = ENEMY_TEMPLATES[kind];
  return {
    ...tmpl,
    hp: Math.round(tmpl.hp * floorScale),
    maxHp: Math.round(tmpl.maxHp * floorScale),
    atk: Math.round(tmpl.atk * floorScale),
    patternIdx: 0,
  };
}

function initialPlayer(): PlayerState {
  return {
    hp: 100,
    maxHp: 100,
    stamina: 100,
    maxStamina: 100,
    estus: 5,
    souls: 0,
    level: 1,
    atk: 12,
    def: 5,
    floor: 0,
  };
}

export default function Zone104SoulDungeonAscent() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [player, setPlayer] = useState<PlayerState>(initialPlayer);
  const [enemy, setEnemy] = useState<Enemy | null>(null);
  const [enemyQueue, setEnemyQueue] = useState<Enemy[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [totalKills, setTotalKills] = useState(0);
  const [dodgeWindow, setDodgeWindow] = useState(false);

  const addLog = useCallback((msg: string) => {
    setLog((prev) => [...prev.slice(-6), msg]);
  }, []);

  const enterFloor = useCallback(
    (floorIdx: number, p: PlayerState) => {
      const scale = 1 + floorIdx * 0.2;
      const kinds = FLOOR_ENEMIES[Math.min(floorIdx, FLOOR_ENEMIES.length - 1)]!;
      const queue = kinds.map((k) => createEnemy(k, scale));
      const first = queue.shift()!;
      setEnemy(first);
      setEnemyQueue(queue);
      setPhase("combat");
      setIsPlayerTurn(true);
      addLog(`Floor ${floorIdx + 1} — ${first.name} appears!`);
    },
    [addLog]
  );

  const startGame = useCallback(() => {
    const p = initialPlayer();
    setPlayer(p);
    setLog([]);
    setTotalKills(0);
    mascot.setMood("happy");
    enterFloor(0, p);
  }, [mascot, enterFloor]);

  // Stamina regen
  useEffect(() => {
    if (phase !== "combat") return;
    const timer = setInterval(() => {
      setPlayer((prev) => ({
        ...prev,
        stamina: Math.min(prev.maxStamina, prev.stamina + 3),
      }));
    }, 200);
    return () => clearInterval(timer);
  }, [phase]);

  const playerAction = useCallback(
    (action: "attack" | "heavy" | "dodge" | "heal") => {
      if (!isPlayerTurn || !enemy || phase !== "combat") return;

      setPlayer((prev) => {
        const p = { ...prev };
        const e = { ...enemy };
        let logMsg = "";

        switch (action) {
          case "attack": {
            if (p.stamina < 15) { addLog("Not enough stamina!"); hapticError(); return prev; }
            p.stamina -= 15;
            const dmg = p.atk + Math.floor(Math.random() * 5);
            e.hp -= dmg;
            logMsg = `⚔️ You slash for ${dmg} damage!`;
            hapticSuccess();
            break;
          }
          case "heavy": {
            if (p.stamina < 35) { addLog("Not enough stamina!"); hapticError(); return prev; }
            p.stamina -= 35;
            const dmg = Math.round(p.atk * 1.8 + Math.floor(Math.random() * 8));
            e.hp -= dmg;
            logMsg = `🗡️ Heavy strike for ${dmg} damage!`;
            hapticSuccess();
            break;
          }
          case "dodge": {
            if (p.stamina < 20) { addLog("Not enough stamina!"); hapticError(); return prev; }
            p.stamina -= 20;
            setDodgeWindow(true);
            setTimeout(() => setDodgeWindow(false), 500);
            logMsg = "🏃 You dodge roll!";
            hapticSelection();
            break;
          }
          case "heal": {
            if (p.estus <= 0) { addLog("No Estus left!"); hapticError(); return prev; }
            p.estus--;
            const heal = 30 + Math.floor(Math.random() * 15);
            p.hp = Math.min(p.maxHp, p.hp + heal);
            logMsg = `🧪 Estus Flask! Heal ${heal} HP`;
            hapticSuccess();
            break;
          }
        }

        addLog(logMsg);
        setEnemy(e);

        // Check enemy death
        if (e.hp <= 0) {
          const soulsGain = (e.kind === "boss" ? 500 : e.kind === "demon" ? 200 : e.kind === "knight" ? 100 : 50);
          p.souls += soulsGain;
          addLog(`${ENEMY_ICONS[e.kind]} ${e.name} vanquished! +${soulsGain} souls`);
          setTotalKills((prev) => prev + 1);

          if (enemyQueue.length > 0) {
            const next = enemyQueue[0]!;
            setEnemyQueue((prev) => prev.slice(1));
            setEnemy(next);
            addLog(`${next.name} appears!`);
          } else {
            // Floor clear
            if (e.kind === "boss") {
              // Victory!
              setPhase("victory");
              mascot.setMood("cheering");
              emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-104",
          difficulty: "medium",
                score: p.souls,
                maxScore: 2000,
                interactions: 1,
                elapsedMs: 0,
          source: "component",
          occurredAt: new Date().toISOString(),
              });
              setPlayer(p);
              return p;
            }
            // Bonfire
            setPhase("bonfire");
            addLog("🔥 Bonfire reached. Rest and level up.");
            mascot.setMood("happy");
          }
          setPlayer(p);
          return p;
        }

        // Enemy turn
        setIsPlayerTurn(false);
        setTimeout(() => {
          setPlayer((pp) => {
            const pp2 = { ...pp };
            const eAction = e.pattern[e.patternIdx % e.pattern.length]!;
            e.patternIdx++;
            setEnemy({ ...e });

            if (dodgeWindow && (eAction === "attack" || eAction === "heavy")) {
              addLog("🌟 Dodged the attack!");
              setIsPlayerTurn(true);
              return pp2;
            }

            let eDmg = 0;
            switch (eAction) {
              case "attack":
                eDmg = Math.max(1, e.atk - pp2.def + Math.floor(Math.random() * 4));
                addLog(`${ENEMY_ICONS[e.kind]} ${e.name} attacks for ${eDmg}!`);
                break;
              case "heavy":
                eDmg = Math.max(1, Math.round(e.atk * 1.5) - pp2.def + Math.floor(Math.random() * 6));
                addLog(`${ENEMY_ICONS[e.kind]} Heavy attack for ${eDmg}!`);
                break;
              case "guard":
                addLog(`${ENEMY_ICONS[e.kind]} ${e.name} raises guard.`);
                break;
              case "charge":
                addLog(`${ENEMY_ICONS[e.kind]} ${e.name} charges up...`);
                break;
            }

            pp2.hp -= eDmg;
            if (pp2.hp <= 0) {
              pp2.hp = 0;
              setPhase("dead");
              hapticError();
              mascot.setMood("sad");
              addLog("YOU DIED");
            }

            setIsPlayerTurn(true);
            return pp2;
          });
        }, 600);

        return p;
      });
    },
    [isPlayerTurn, enemy, phase, addLog, enemyQueue, dodgeWindow, mascot]
  );

  const restAtBonfire = useCallback(() => {
    setPlayer((prev) => {
      const p = { ...prev };
      p.hp = p.maxHp;
      p.stamina = p.maxStamina;
      p.estus = 5;
      p.floor++;
      // Level up
      if (p.souls >= 100 * p.level) {
        p.souls -= 100 * p.level;
        p.level++;
        p.atk += 3;
        p.def += 2;
        p.maxHp += 10;
        p.hp = p.maxHp;
        addLog(`🌟 Level Up! Now level ${p.level}`);
      }
      enterFloor(p.floor, p);
      return p;
    });
  }, [enterFloor, addLog]);

  const resetGame = () => {
    setPlayer(initialPlayer());
    setEnemy(null);
    setEnemyQueue([]);
    setLog([]);
    setTotalKills(0);
    setPhase("ready");
    mascot.setMood("idle");
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 p-4">
      <MascotFriend id="pixel" mood={phase === "victory" ? "cheering" : phase === "dead" ? "sad" : "idle"} />

      <motion.h1
        className="mb-3 text-3xl font-black tracking-tight text-amber-500 drop-shadow-lg"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Soul Dungeon Ascent
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Descend through procedural dungeon floors. Manage stamina, dodge attacks, and defeat the final boss. Prepare to die.
            </p>
            <PhysicalButton onClick={startGame}>
              <Sword className="mr-2 h-5 w-5" />
              Enter the Dungeon
            </PhysicalButton>
          </motion.div>
        )}

        {(phase === "combat" || phase === "bonfire") && (
          <motion.div key="combat" className="flex w-full max-w-lg flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Player HUD */}
            <div className="flex w-full items-center justify-between rounded-xl bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <span>❤️ {player.hp}/{player.maxHp}</span>
                <span className="text-green-400">⚡ {Math.round(player.stamina)}</span>
                <span className="text-amber-400">🧪 {player.estus}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-purple-400">✨ {player.souls}</span>
                <span className="text-cyan-400">Lv.{player.level}</span>
                <span>Floor {player.floor + 1}</span>
              </div>
            </div>

            {/* HP bar */}
            <div className="flex w-full gap-2">
              <div className="flex-1">
                <div className="mb-1 text-xs text-red-400">HP</div>
                <div className="h-3 w-full rounded-full bg-stone-700">
                  <motion.div
                    className="h-3 rounded-full bg-red-500"
                    animate={{ width: `${(player.hp / player.maxHp) * 100}%` }}
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="mb-1 text-xs text-green-400">Stamina</div>
                <div className="h-3 w-full rounded-full bg-stone-700">
                  <motion.div
                    className="h-3 rounded-full bg-green-500"
                    animate={{ width: `${(player.stamina / player.maxStamina) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Enemy display */}
            {enemy && phase === "combat" && (
              <motion.div
                className="w-full rounded-xl border border-red-900/50 bg-stone-900/80 p-4 text-center"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <p className="text-4xl">{ENEMY_ICONS[enemy.kind]}</p>
                <h3 className="mt-1 text-lg font-black text-red-400">{enemy.name}</h3>
                <div className="mx-auto mt-2 h-3 w-48 rounded-full bg-stone-700">
                  <motion.div
                    className="h-3 rounded-full bg-red-600"
                    animate={{ width: `${Math.max(0, (enemy.hp / enemy.maxHp) * 100)}%` }}
                  />
                </div>
                <p className="mt-1 text-xs text-white/50">
                  {enemy.hp}/{enemy.maxHp} HP | ATK: {enemy.atk}
                </p>
              </motion.div>
            )}

            {/* Bonfire */}
            {phase === "bonfire" && (
              <motion.div className="w-full rounded-xl border border-amber-900/50 bg-stone-900/80 p-6 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <p className="text-5xl">🔥</p>
                <h3 className="mt-2 text-xl font-black text-amber-400">Bonfire</h3>
                <p className="text-white/60">Rest, heal, and prepare for the next floor.</p>
                <div className="mt-3">
                  <PhysicalButton onClick={restAtBonfire}>
                    <Flame className="mr-1 h-4 w-4" />
                    Continue Descent
                  </PhysicalButton>
                </div>
              </motion.div>
            )}

            {/* Action buttons */}
            {phase === "combat" && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => playerAction("attack")}
                  disabled={!isPlayerTurn}
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-500 disabled:opacity-40"
                >
                  ⚔️ Attack (15⚡)
                </button>
                <button
                  onClick={() => playerAction("heavy")}
                  disabled={!isPlayerTurn}
                  className="rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-500 disabled:opacity-40"
                >
                  🗡️ Heavy (35⚡)
                </button>
                <button
                  onClick={() => playerAction("dodge")}
                  disabled={!isPlayerTurn}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-blue-500 disabled:opacity-40"
                >
                  🏃 Dodge (20⚡)
                </button>
                <button
                  onClick={() => playerAction("heal")}
                  disabled={!isPlayerTurn}
                  className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-500 disabled:opacity-40"
                >
                  🧪 Estus ({player.estus})
                </button>
              </div>
            )}

            {/* Combat log */}
            <div className="w-full rounded-lg bg-black/40 p-3 backdrop-blur-sm">
              <div className="max-h-32 space-y-1 overflow-y-auto font-mono text-xs text-white/70">
                {log.map((msg, i) => (
                  <p key={i} className={i === log.length - 1 ? "text-white font-bold" : ""}>{msg}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {phase === "dead" && (
          <motion.div key="dead" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-red-950/60 p-8 text-center backdrop-blur-sm">
              <motion.p
                className="text-6xl font-black text-red-500"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
              >
                YOU DIED
              </motion.p>
              <p className="mt-3 text-white/50">Souls lost: {player.souls} | Kills: {totalKills}</p>
            </div>
            <div className="flex gap-2">
              <PhysicalButton onClick={startGame}>Try Again</PhysicalButton>
              <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> Menu</PhysicalButton>
            </div>
          </motion.div>
        )}

        {phase === "victory" && (
          <motion.div key="victory" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-amber-950/60 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">🏆</p>
              <h2 className="mt-3 text-2xl font-black text-amber-400">HEIR OF FIRE</h2>
              <p className="mt-2 text-white/60">
                All floors conquered. Souls: {player.souls} | Level: {player.level}
              </p>
            </div>
            <PhysicalButton onClick={resetGame}><RotateCcw className="mr-1 h-4 w-4" /> New Journey</PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
