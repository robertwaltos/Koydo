"use client";

import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footprints, Heart, RotateCcw, AlertTriangle } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticSelection, hapticSuccess, hapticError } from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

const SESSION_ID = createLegacySessionId();

type Phase = "ready" | "explore" | "encounter" | "craft" | "complete";

interface PlayerState {
  hp: number; maxHp: number;
  bullets: number; shivs: number; medkits: number;
  parts: number; rags: number; alcohol: number;
  morale: number;
}

interface Encounter {
  type: "infected" | "bandits" | "loot" | "story" | "choice";
  title: string; icon: string; text: string;
  options: { label: string; cost?: Partial<PlayerState>; reward?: Partial<PlayerState>; outcome: string; risk?: number }[];
}

const ZONES: { name: string; icon: string; encounters: Encounter[] }[] = [
  {
    name: "Downtown Ruins", icon: "🏚️",
    encounters: [
      {
        type: "infected", title: "Runner Ambush", icon: "🧟", text: "Three runners burst through a doorway!",
        options: [
          { label: "🔫 Shoot (2 bullets)", cost: { bullets: 2 }, outcome: "Clean shots. Runners down.", reward: { parts: 2 } },
          { label: "🔪 Stealth shiv (1 shiv)", cost: { shivs: 1 }, outcome: "Silent takedown on two. Third runs.", reward: { rags: 1 } },
          { label: "🏃 Run!", outcome: "You barely escape. Lost some supplies.", cost: { hp: 15 } },
        ],
      },
      {
        type: "loot", title: "Abandoned Store", icon: "🏪", text: "A ransacked convenience store. Something might remain...",
        options: [
          { label: "🔍 Search thoroughly", outcome: "Found supplies!", reward: { rags: 2, alcohol: 1, parts: 1 }, risk: 20 },
          { label: "⚡ Quick grab", outcome: "Grabbed what you could.", reward: { rags: 1 } },
        ],
      },
    ],
  },
  {
    name: "The Suburbs", icon: "🏘️",
    encounters: [
      {
        type: "bandits", title: "Ambush!", icon: "🔫", text: "A group of scavengers block the road. 'Hand over your gear.'",
        options: [
          { label: "🔫 Fight back (3 bullets)", cost: { bullets: 3 }, outcome: "Firefight. You prevail.", reward: { bullets: 4, parts: 3 } },
          { label: "🤝 Negotiate", outcome: "You trade some supplies for safe passage.", cost: { parts: 2 }, reward: { morale: 10 } },
          { label: "🔪 Sneak around", outcome: "Found a back route. Saved resources.", reward: { morale: 5 }, risk: 30 },
        ],
      },
      {
        type: "story", title: "Child's Room", icon: "🧸", text: "A child's drawing on the wall: 'We'll be back.' A teddy bear sits on the bed.",
        options: [
          { label: "Take the teddy bear", outcome: "A reminder of what we fight for.", reward: { morale: 15 } },
          { label: "Leave it", outcome: "Some things should stay untouched.", reward: { morale: 5 } },
        ],
      },
    ],
  },
  {
    name: "The University", icon: "🏛️",
    encounters: [
      {
        type: "infected", title: "Bloater!", icon: "💀", text: "A massive bloater lurches around the corner. The ground shakes.",
        options: [
          { label: "🔫 Unload everything (5 bullets)", cost: { bullets: 5 }, outcome: "It took everything, but the bloater falls.", reward: { parts: 5 } },
          { label: "🔥 Molotov (alcohol+rag)", cost: { alcohol: 1, rags: 1 }, outcome: "Fire engulfs the bloater! Critical hit!", reward: { parts: 4 } },
          { label: "🏃 Flee", outcome: "It clips you as you run.", cost: { hp: 30 } },
        ],
      },
      {
        type: "choice", title: "Locked Lab", icon: "🔬", text: "A research lab with locked specimen containers. You hear clicking inside one...",
        options: [
          { label: "Open container (risky)", outcome: "Research samples! Could save lives.", reward: { morale: 20, parts: 3 }, risk: 40 },
          { label: "Leave it sealed", outcome: "Not worth the risk.", reward: { morale: 5 } },
        ],
      },
    ],
  },
  {
    name: "Salt Lake City", icon: "🏥",
    encounters: [
      {
        type: "bandits", title: "Firefly Patrol", icon: "🔦", text: "Armed Fireflies demand you identify yourself.",
        options: [
          { label: "🤝 Identify peacefully", outcome: "They let you pass after checking you.", reward: { medkits: 1, morale: 10 } },
          { label: "🔫 Open fire (4 bullets)", cost: { bullets: 4, morale: -15 }, outcome: "A brutal fight. Was it worth it?", reward: { bullets: 6 } },
        ],
      },
      {
        type: "story", title: "The Hospital", icon: "🏥", text: "The final destination. Everything led to this moment.",
        options: [
          { label: "Save her", outcome: "You chose love over the world.", reward: { morale: 30 } },
          { label: "Let them try", outcome: "The hardest choice requires the strongest will.", reward: { morale: -10, parts: 10 } },
        ],
      },
    ],
  },
];

const CRAFT_RECIPES = [
  { name: "Medkit", icon: "💊", cost: { rags: 1, alcohol: 1 }, result: { medkits: 1 } },
  { name: "Shiv", icon: "🔪", cost: { parts: 2 }, result: { shivs: 1 } },
  { name: "Molotov", icon: "🔥", cost: { rags: 1, alcohol: 1 }, result: {} },
];

export default function Zone113RuinSurvivorTrek() {
  const mascot = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [player, setPlayer] = useState<PlayerState>({
    hp: 100, maxHp: 100, bullets: 8, shivs: 1, medkits: 1,
    parts: 3, rags: 2, alcohol: 2, morale: 50,
  });
  const [zoneIdx, setZoneIdx] = useState(0);
  const [encIdx, setEncIdx] = useState(0);
  const [log, setLog] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [currentEnc, setCurrentEnc] = useState<Encounter | null>(null);

  const addLog = useCallback((msg: string) => setLog((p) => [...p.slice(-5), msg]), []);

  const startGame = useCallback(() => {
    setPlayer({
      hp: 100, maxHp: 100, bullets: 8, shivs: 1, medkits: 1,
      parts: 3, rags: 2, alcohol: 2, morale: 50,
    });
    setZoneIdx(0);
    setEncIdx(0);
    setScore(0);
    setLog(["🌅 The journey begins..."]);
    const zone = ZONES[0]!;
    setCurrentEnc(zone.encounters[0]!);
    setPhase("encounter");
    mascot.setMood("happy");
  }, [mascot]);

  const handleChoice = useCallback((optIdx: number) => {
    if (!currentEnc) return;
    const opt = currentEnc.options[optIdx]!;

    // Risk check
    if (opt.risk && Math.random() * 100 < opt.risk) {
      addLog(`⚠️ Risk failed! You took damage.`);
      setPlayer((p) => ({ ...p, hp: Math.max(0, p.hp - 15) }));
      hapticError();
    }

    // Apply cost
    if (opt.cost) {
      setPlayer((p) => {
        const np = { ...p };
        for (const [k, v] of Object.entries(opt.cost!)) {
          (np as any)[k] = Math.max(0, (np as any)[k] - (v as number));
        }
        return np;
      });
    }

    // Apply reward
    if (opt.reward) {
      setPlayer((p) => {
        const np = { ...p };
        for (const [k, v] of Object.entries(opt.reward!)) {
          (np as any)[k] = Math.max(0, (np as any)[k] + (v as number));
        }
        np.hp = Math.min(np.maxHp, np.hp);
        return np;
      });
    }

    addLog(`${currentEnc.icon} ${opt.outcome}`);
    hapticSuccess();
    setScore((s) => s + 25);

    // Check death
    setPlayer((prev) => {
      if (prev.hp <= 0) {
        setPhase("complete");
        mascot.setMood("thinking");
        emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-113",
          difficulty: "medium", score, maxScore: 400, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        addLog("💀 You didn't make it...");
        return prev;
      }
      return prev;
    });

    // Next encounter
    const zone = ZONES[zoneIdx]!;
    const nextEnc = encIdx + 1;
    if (nextEnc >= zone.encounters.length) {
      const nextZone = zoneIdx + 1;
      if (nextZone >= ZONES.length) {
        setTimeout(() => {
          setPhase("complete");
          mascot.setMood("cheering");
          emitLegacyGameComplete({
          sessionId: SESSION_ID,
          gameId: "zone-113",
          difficulty: "medium", score: score + 25, maxScore: 400, interactions: 1, elapsedMs: 0, source: "component", occurredAt: new Date().toISOString(), });
        }, 500);
        return;
      }
      setZoneIdx(nextZone);
      setEncIdx(0);
      addLog(`📍 Entering: ${ZONES[nextZone]!.icon} ${ZONES[nextZone]!.name}`);
      // Offer crafting between zones
      setPhase("craft");
    } else {
      setEncIdx(nextEnc);
      setCurrentEnc(zone.encounters[nextEnc]!);
    }
  }, [currentEnc, zoneIdx, encIdx, score, addLog, mascot]);

  const craft = useCallback((recipeIdx: number) => {
    const recipe = CRAFT_RECIPES[recipeIdx]!;
    setPlayer((p) => {
      const np = { ...p };
      for (const [k, v] of Object.entries(recipe.cost)) {
        if ((np as any)[k] < v) { addLog(`❌ Not enough ${k}!`); hapticError(); return p; }
      }
      for (const [k, v] of Object.entries(recipe.cost)) {
        (np as any)[k] -= v;
      }
      for (const [k, v] of Object.entries(recipe.result)) {
        (np as any)[k] = ((np as any)[k] || 0) + v;
      }
      addLog(`🔧 Crafted ${recipe.icon} ${recipe.name}!`);
      hapticSuccess();
      return np;
    });
  }, [addLog]);

  const heal = useCallback(() => {
    if (player.medkits <= 0) { addLog("❌ No medkits!"); hapticError(); return; }
    setPlayer((p) => ({ ...p, hp: Math.min(p.maxHp, p.hp + 30), medkits: p.medkits - 1 }));
    addLog("💊 Used medkit. +30 HP");
    hapticSuccess();
  }, [player, addLog]);

  const continueFromCraft = useCallback(() => {
    const zone = ZONES[zoneIdx]!;
    setCurrentEnc(zone.encounters[encIdx]!);
    setPhase("encounter");
  }, [zoneIdx, encIdx]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-700 via-stone-800 to-gray-900 p-4">
      <MascotFriend id="pixel" mood={phase === "complete" ? "cheering" : "idle"} />

      <motion.h1 className="mb-3 text-3xl font-black tracking-tight text-amber-400 drop-shadow-lg" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Footprints className="mr-2 inline h-7 w-7" /> Ruin Survivor Trek
      </motion.h1>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.div key="ready" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <p className="max-w-md text-center text-lg text-white/70">
              Survive a harrowing journey through post-apocalyptic zones. Manage scarce resources, fight infected, negotiate with survivors, and craft to survive.
            </p>
            <PhysicalButton onClick={startGame}><Footprints className="mr-2 h-5 w-5" /> Begin the Trek</PhysicalButton>
          </motion.div>
        )}

        {(phase === "encounter" || phase === "craft") && (
          <motion.div key="play" className="flex w-full max-w-md flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {/* Stats */}
            <div className="flex w-full flex-wrap items-center justify-between rounded-xl bg-black/40 px-3 py-2 text-xs text-white">
              <span className="text-red-400">❤️ {player.hp}</span>
              <span>🔫 {player.bullets}</span>
              <span>🔪 {player.shivs}</span>
              <span>💊 {player.medkits}</span>
              <span className="text-amber-400">🧠 {player.morale}</span>
            </div>
            <div className="flex w-full items-center justify-between rounded-lg bg-black/20 px-3 py-1 text-[10px] text-white/50">
              <span>🔩 {player.parts} parts</span>
              <span>🩹 {player.rags} rags</span>
              <span>🧪 {player.alcohol} alcohol</span>
              <span>📍 {ZONES[zoneIdx]?.icon} {ZONES[zoneIdx]?.name}</span>
            </div>

            {phase === "encounter" && currentEnc && (
              <motion.div className="w-full" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <div className="rounded-2xl bg-stone-800/80 p-5">
                  <div className="text-3xl text-center">{currentEnc.icon}</div>
                  <h3 className="mt-1 text-center text-lg font-bold text-amber-300">{currentEnc.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{currentEnc.text}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    {currentEnc.options.map((opt, i) => (
                      <PhysicalButton key={i} onClick={() => handleChoice(i)} variant={opt.cost?.hp ? "danger" : "primary"}>
                        {opt.label}
                      </PhysicalButton>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {phase === "craft" && (
              <div className="w-full rounded-2xl bg-stone-800/80 p-5">
                <h3 className="text-center text-lg font-bold text-amber-300">🔧 Workbench</h3>
                <p className="text-center text-xs text-white/50">Craft before moving on</p>
                <div className="mt-3 flex flex-col gap-2">
                  {CRAFT_RECIPES.map((r, i) => (
                    <PhysicalButton key={i} onClick={() => craft(i)}>
                      {r.icon} {r.name} ({Object.entries(r.cost).map(([k, v]) => `${v} ${k}`).join(", ")})
                    </PhysicalButton>
                  ))}
                  <PhysicalButton onClick={heal} variant="danger">💊 Use Medkit (+30 HP)</PhysicalButton>
                  <PhysicalButton onClick={continueFromCraft} variant="secondary">➡️ Continue Trek</PhysicalButton>
                </div>
              </div>
            )}

            <div className="h-16 w-full overflow-y-auto rounded-lg bg-black/40 p-2 text-xs text-white/60">
              {log.map((l, i) => <div key={i}>{l}</div>)}
            </div>
          </motion.div>
        )}

        {phase === "complete" && (
          <motion.div key="complete" className="flex flex-col items-center gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="rounded-2xl bg-black/50 p-8 text-center backdrop-blur-sm">
              <p className="text-5xl">{player.hp > 0 ? "🏠" : "💀"}</p>
              <h2 className="mt-3 text-2xl font-black text-amber-400">
                {player.hp > 0 ? "Journey Complete" : "Lost to the Ruins"}
              </h2>
              <p className="mt-2 text-white/60">Score: {score} | Morale: {player.morale}</p>
              <p className="text-sm text-white/40">Zones: {zoneIdx + 1}/{ZONES.length}</p>
            </div>
            <PhysicalButton onClick={() => { setPhase("ready"); mascot.setMood("idle"); }}>
              <RotateCcw className="mr-1 h-4 w-4" /> Trek Again
            </PhysicalButton>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
