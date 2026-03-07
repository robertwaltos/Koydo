"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Atom, FlaskConical, Zap, Trophy } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import { useMascot } from "@/components/experience/MascotHost";
import {
  hapticError,
  hapticSelection,
  hapticSuccess,
  hapticCelebration,
} from "@/lib/platform/haptics";
import {
  createLegacySessionId,
  emitLegacyGameComplete,
} from "@/lib/games/legacy-runtime-events";

/* ─── element data ─── */
type Element = {
  symbol: string;
  name: string;
  number: number;
  category: string;
  color: string;
};

const ELEMENTS: Element[] = [
  { symbol: "H", name: "Hydrogen", number: 1, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "He", name: "Helium", number: 2, category: "Noble Gas", color: "bg-purple-600" },
  { symbol: "Li", name: "Lithium", number: 3, category: "Alkali Metal", color: "bg-red-600" },
  { symbol: "Be", name: "Beryllium", number: 4, category: "Alkaline Earth", color: "bg-orange-600" },
  { symbol: "B", name: "Boron", number: 5, category: "Metalloid", color: "bg-teal-600" },
  { symbol: "C", name: "Carbon", number: 6, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "N", name: "Nitrogen", number: 7, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "O", name: "Oxygen", number: 8, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "F", name: "Fluorine", number: 9, category: "Halogen", color: "bg-yellow-600" },
  { symbol: "Ne", name: "Neon", number: 10, category: "Noble Gas", color: "bg-purple-600" },
  { symbol: "Na", name: "Sodium", number: 11, category: "Alkali Metal", color: "bg-red-600" },
  { symbol: "Mg", name: "Magnesium", number: 12, category: "Alkaline Earth", color: "bg-orange-600" },
  { symbol: "Al", name: "Aluminum", number: 13, category: "Post-Transition", color: "bg-slate-600" },
  { symbol: "Si", name: "Silicon", number: 14, category: "Metalloid", color: "bg-teal-600" },
  { symbol: "P", name: "Phosphorus", number: 15, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "S", name: "Sulfur", number: 16, category: "Nonmetal", color: "bg-cyan-600" },
  { symbol: "Cl", name: "Chlorine", number: 17, category: "Halogen", color: "bg-yellow-600" },
  { symbol: "Ar", name: "Argon", number: 18, category: "Noble Gas", color: "bg-purple-600" },
  { symbol: "K", name: "Potassium", number: 19, category: "Alkali Metal", color: "bg-red-600" },
  { symbol: "Ca", name: "Calcium", number: 20, category: "Alkaline Earth", color: "bg-orange-600" },
  { symbol: "Fe", name: "Iron", number: 26, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Cu", name: "Copper", number: 29, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Zn", name: "Zinc", number: 30, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Ag", name: "Silver", number: 47, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Au", name: "Gold", number: 79, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Hg", name: "Mercury", number: 80, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Pb", name: "Lead", number: 82, category: "Post-Transition", color: "bg-slate-600" },
  { symbol: "U", name: "Uranium", number: 92, category: "Actinide", color: "bg-green-600" },
  { symbol: "Pt", name: "Platinum", number: 78, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Sn", name: "Tin", number: 50, category: "Post-Transition", color: "bg-slate-600" },
  { symbol: "Ti", name: "Titanium", number: 22, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Ni", name: "Nickel", number: 28, category: "Transition Metal", color: "bg-blue-600" },
  { symbol: "Kr", name: "Krypton", number: 36, category: "Noble Gas", color: "bg-purple-600" },
  { symbol: "Xe", name: "Xenon", number: 54, category: "Noble Gas", color: "bg-purple-600" },
  { symbol: "Br", name: "Bromine", number: 35, category: "Halogen", color: "bg-yellow-600" },
  { symbol: "I", name: "Iodine", number: 53, category: "Halogen", color: "bg-yellow-600" },
];

type CardFace = { id: string; elementIdx: number; type: "symbol" | "name" };

const GRID_SIZE = 12; // 6 pairs

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type State = {
  phase: Phase;
  cards: CardFace[];
  flipped: number[];
  matched: Set<number>;
  moves: number;
  timeElapsed: number;
  level: number;
};

type Action =
  | { type: "START"; cards: CardFace[] }
  | { type: "FLIP"; index: number }
  | { type: "MATCH"; a: number; b: number }
  | { type: "MISMATCH" }
  | { type: "TICK" }
  | { type: "FINISH" }
  | { type: "NEXT_LEVEL"; cards: CardFace[] };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", cards: a.cards, flipped: [], matched: new Set(), moves: 0, timeElapsed: 0, level: 1 };
    case "FLIP":
      return { ...s, flipped: [...s.flipped, a.index] };
    case "MATCH":
      return { ...s, matched: new Set([...s.matched, a.a, a.b]), flipped: [], moves: s.moves + 1 };
    case "MISMATCH":
      return { ...s, flipped: [], moves: s.moves + 1 };
    case "TICK":
      return { ...s, timeElapsed: s.timeElapsed + 1 };
    case "FINISH":
      return { ...s, phase: "complete" };
    case "NEXT_LEVEL":
      return { ...s, cards: a.cards, flipped: [], matched: new Set(), level: s.level + 1 };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready",
  cards: [],
  flipped: [],
  matched: new Set<number>(),
  moves: 0,
  timeElapsed: 0,
  level: 1,
};

/* ─── helpers ─── */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildCards(usedIndices: Set<number>): CardFace[] {
  const available = ELEMENTS.map((_, i) => i).filter((i) => !usedIndices.has(i));
  const pool = available.length >= GRID_SIZE / 2 ? available : ELEMENTS.map((_, i) => i);
  const chosen = shuffle(pool).slice(0, GRID_SIZE / 2);
  const pairs: CardFace[] = [];
  chosen.forEach((idx) => {
    const uid = `${idx}-${Math.random().toString(36).slice(2, 6)}`;
    pairs.push({ id: `${uid}-s`, elementIdx: idx, type: "symbol" });
    pairs.push({ id: `${uid}-n`, elementIdx: idx, type: "name" });
  });
  return shuffle(pairs);
}

/* ─── component ─── */
export default function GameElementMatch() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const usedElements = useRef(new Set<number>());

  const { phase, cards, flipped, matched, moves, timeElapsed, level } = state;

  const totalPairs = GRID_SIZE / 2;
  const matchedPairs = matched.size / 2;
  const allMatched = matchedPairs >= totalPairs;

  const stars = useMemo(() => {
    const efficiency = totalPairs / Math.max(moves, 1);
    if (efficiency >= 0.8) return 3;
    if (efficiency >= 0.5) return 2;
    if (efficiency >= 0.3) return 1;
    return 0;
  }, [moves, totalPairs]);

  const score = useMemo(() => {
    const baseScore = matchedPairs * 200;
    const timeBonus = Math.max(0, 300 - timeElapsed) * 2;
    const efficiencyBonus = Math.max(0, (totalPairs * 2 - moves) * 50);
    return baseScore + timeBonus + efficiencyBonus;
  }, [matchedPairs, timeElapsed, moves, totalPairs]);

  /* ── timer ── */
  useEffect(() => {
    if (phase !== "playing") return;
    const interval = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearInterval(interval);
  }, [phase]);

  /* ── check matches ── */
  useEffect(() => {
    if (flipped.length < 2) return;
    const [a, b] = flipped;
    const cardA = cards[a];
    const cardB = cards[b];
    const isMatch = cardA.elementIdx === cardB.elementIdx && cardA.type !== cardB.type;

    const timeout = setTimeout(() => {
      if (isMatch) {
        hapticSuccess();
        mascot.speak(`${ELEMENTS[cardA.elementIdx].name}! ⚗️`, "cheering");
        dispatch({ type: "MATCH", a, b });
      } else {
        hapticError();
        dispatch({ type: "MISMATCH" });
      }
    }, isMatch ? 300 : 800);

    return () => clearTimeout(timeout);
  }, [flipped, cards, mascot]);

  /* ── level complete ── */
  useEffect(() => {
    if (!allMatched || phase !== "playing") return;
    const timeout = setTimeout(() => {
      if (level >= 3) {
        hapticCelebration();
        emitLegacyGameComplete(sessionId.current, score, stars);
        mascot.say("Chemistry master! 🧪", "cheering");
        dispatch({ type: "FINISH" });
      } else {
        hapticSuccess();
        mascot.say(`Level ${level + 1}! Harder elements incoming!`, "excited");
        cards.forEach((c) => usedElements.current.add(c.elementIdx));
        dispatch({ type: "NEXT_LEVEL", cards: buildCards(usedElements.current) });
      }
    }, 600);
    return () => clearTimeout(timeout);
  }, [allMatched, phase, level, score, stars, mascot, cards]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    usedElements.current.clear();
    dispatch({ type: "START", cards: buildCards(usedElements.current) });
    mascot.say("Match symbols to their element names! 🔬", "excited");
  }, [mascot]);

  const handleFlip = useCallback((index: number) => {
    if (flipped.length >= 2 || flipped.includes(index) || matched.has(index)) return;
    hapticSelection();
    dispatch({ type: "FLIP", index });
  }, [flipped, matched]);

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      {/* header */}
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <FlaskConical className="h-5 w-5 text-violet-400" />
          <span className="text-sm font-bold text-white">Element Match</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Lv {level}/3</span>
            <span>{matchedPairs}/{totalPairs} pairs</span>
            <span>{formatTime(timeElapsed)}</span>
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center"
          >
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Element Match</h2>
            <p className="text-stone-400 max-w-xs">
              Match element symbols to their names. Three levels of increasing difficulty!
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Atom className="h-3 w-3" /> {ELEMENTS.length} elements</span>
              <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> 3 levels</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Matching ⚗️
            </PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && (
          <motion.section
            key={`level-${level}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center gap-4 px-4 py-6 w-full"
          >
            <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
              {cards.map((card, i) => {
                const isFlipped = flipped.includes(i) || matched.has(i);
                const isMatched = matched.has(i);
                const el = ELEMENTS[card.elementIdx];

                return (
                  <motion.button
                    key={card.id}
                    onClick={() => handleFlip(i)}
                    disabled={isFlipped}
                    whileTap={!isFlipped ? { scale: 0.92 } : undefined}
                    animate={isMatched ? { scale: [1, 1.1, 1], opacity: 0.7 } : {}}
                    className={`relative aspect-[3/4] rounded-xl text-center transition-all duration-200 min-h-[72px] ${
                      isFlipped
                        ? `${el.color}/30 ring-2 ${isMatched ? "ring-emerald-400/50" : "ring-white/20"}`
                        : "bg-stone-800/80 ring-1 ring-white/5 hover:bg-stone-700/80 active:scale-95"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      {isFlipped ? (
                        <motion.div
                          key="face"
                          initial={{ rotateY: 90 }}
                          animate={{ rotateY: 0 }}
                          exit={{ rotateY: -90 }}
                          className="flex flex-col items-center justify-center h-full px-1"
                        >
                          {card.type === "symbol" ? (
                            <>
                              <span className="text-[10px] text-white/40">{el.number}</span>
                              <span className="text-xl font-black text-white">{el.symbol}</span>
                            </>
                          ) : (
                            <span className="text-[11px] font-semibold text-white leading-tight">{el.name}</span>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key="back"
                          initial={{ rotateY: -90 }}
                          animate={{ rotateY: 0 }}
                          exit={{ rotateY: 90 }}
                          className="flex items-center justify-center h-full"
                        >
                          <Atom className="h-5 w-5 text-stone-600" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </div>

            <p className="text-xs text-stone-500">Moves: {moves}</p>
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section
            key="complete"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center"
          >
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">All Elements Found!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span
                  key={i}
                  className="text-3xl"
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: i < stars ? 1 : 0.5, rotate: 0, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                >
                  ⭐
                </motion.span>
              ))}
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-white font-bold">{score} points</p>
              <p className="text-stone-400">{moves} moves &bull; {formatTime(timeElapsed)}</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again ⚗️
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
