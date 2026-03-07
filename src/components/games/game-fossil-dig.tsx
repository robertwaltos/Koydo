"use client";

import { useCallback, useEffect, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pickaxe, Trophy } from "lucide-react";
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

/* ─── types ─── */
type Phase = "ready" | "digging" | "classifying" | "complete";

type CellState = "dirt" | "rock" | "fossil" | "empty";

type DinoData = {
  name: string;
  era: string;
  diet: string;
  bonePositions: [number, number][]; // [row, col] positions on 8x8 grid
  nameOptions: string[];
  eraOptions: string[];
  dietOptions: string[];
};

type DigSite = {
  name: string;
  dinos: DinoData[];
};

/* ─── dig site data ─── */
const DIG_SITES: DigSite[] = [
  {
    name: "Montana Badlands",
    dinos: [{
      name: "T-Rex",
      era: "Cretaceous",
      diet: "Carnivore",
      bonePositions: [[2, 3], [2, 4], [3, 3], [3, 4], [4, 3], [4, 4]],
      nameOptions: ["T-Rex", "Stegosaurus", "Triceratops", "Velociraptor"],
      eraOptions: ["Jurassic", "Cretaceous", "Triassic"],
      dietOptions: ["Herbivore", "Carnivore"],
    }],
  },
  {
    name: "Gobi Desert",
    dinos: [{
      name: "Velociraptor",
      era: "Cretaceous",
      diet: "Carnivore",
      bonePositions: [[1, 5], [2, 5], [3, 5], [3, 6], [4, 5]],
      nameOptions: ["Velociraptor", "Brachiosaurus", "Pterodactyl", "Spinosaurus"],
      eraOptions: ["Jurassic", "Cretaceous", "Triassic"],
      dietOptions: ["Herbivore", "Carnivore"],
    }],
  },
  {
    name: "Patagonia Cliffs",
    dinos: [{
      name: "Stegosaurus",
      era: "Jurassic",
      diet: "Herbivore",
      bonePositions: [[5, 1], [5, 2], [5, 3], [6, 2], [4, 2], [4, 3]],
      nameOptions: ["Stegosaurus", "Ankylosaurus", "T-Rex", "Diplodocus"],
      eraOptions: ["Jurassic", "Cretaceous", "Triassic"],
      dietOptions: ["Herbivore", "Carnivore"],
    }],
  },
  {
    name: "Sahara Basin",
    dinos: [{
      name: "Spinosaurus",
      era: "Cretaceous",
      diet: "Carnivore",
      bonePositions: [[1, 1], [2, 1], [2, 2], [3, 1], [3, 2], [4, 1]],
      nameOptions: ["Spinosaurus", "T-Rex", "Allosaurus", "Triceratops"],
      eraOptions: ["Jurassic", "Cretaceous", "Triassic"],
      dietOptions: ["Herbivore", "Carnivore"],
    }],
  },
];

const GRID_SIZE = 8;

/* ─── state ─── */
type Cell = {
  layer: number; // 3=dirt, 2=rock, 1=revealed fossil, 0=empty (dug out, no fossil)
  hasBone: boolean;
};

type ClassifyAnswer = {
  name: string | null;
  era: string | null;
  diet: string | null;
};

type State = {
  phase: Phase;
  siteIndex: number;
  grid: Cell[][];
  digs: number;
  classifyAnswer: ClassifyAnswer;
  correctClassifications: number;
  startTime: number;
  totalDigs: number;
  completedSites: number;
};

type Action =
  | { type: "START" }
  | { type: "DIG"; row: number; col: number }
  | { type: "START_CLASSIFY" }
  | { type: "SET_ANSWER"; field: keyof ClassifyAnswer; value: string }
  | { type: "SUBMIT_CLASSIFY" }
  | { type: "NEXT_SITE" };

function createGrid(site: DigSite): Cell[][] {
  const grid: Cell[][] = Array.from({ length: GRID_SIZE }, () =>
    Array.from({ length: GRID_SIZE }, () => ({ layer: 3, hasBone: false }))
  );
  for (const dino of site.dinos) {
    for (const [r, c] of dino.bonePositions) {
      grid[r]![c]!.hasBone = true;
    }
  }
  return grid;
}

function allBonesRevealed(grid: Cell[][]): boolean {
  return grid.every((row) =>
    row.every((cell) => !cell.hasBone || cell.layer <= 1)
  );
}

function initState(): State {
  return {
    phase: "ready",
    siteIndex: 0,
    grid: createGrid(DIG_SITES[0]!),
    digs: 0,
    classifyAnswer: { name: null, era: null, diet: null },
    correctClassifications: 0,
    startTime: 0,
    totalDigs: 0,
    completedSites: 0,
  };
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "START":
      return {
        ...initState(),
        phase: "digging",
        startTime: Date.now(),
      };
    case "DIG": {
      if (state.phase !== "digging") return state;
      const cell = state.grid[action.row]?.[action.col];
      if (!cell || cell.layer === 0 || (cell.layer === 1 && cell.hasBone)) return state;
      const newGrid = state.grid.map((r) => r.map((c) => ({ ...c })));
      const target = newGrid[action.row]![action.col]!;
      if (target.hasBone && target.layer <= 2) {
        target.layer = 1; // reveal fossil
      } else {
        target.layer = Math.max(0, target.layer - 1);
      }
      const newDigs = state.digs + 1;
      const revealed = allBonesRevealed(newGrid);
      return {
        ...state,
        grid: newGrid,
        digs: newDigs,
        totalDigs: state.totalDigs + 1,
        phase: revealed ? "classifying" : "digging",
      };
    }
    case "SET_ANSWER":
      return {
        ...state,
        classifyAnswer: { ...state.classifyAnswer, [action.field]: action.value },
      };
    case "SUBMIT_CLASSIFY": {
      const dino = DIG_SITES[state.siteIndex]!.dinos[0]!;
      const correct =
        state.classifyAnswer.name === dino.name &&
        state.classifyAnswer.era === dino.era &&
        state.classifyAnswer.diet === dino.diet;
      const newCorrect = state.correctClassifications + (correct ? 1 : 0);
      const newCompleted = state.completedSites + 1;
      const isLast = state.siteIndex >= DIG_SITES.length - 1;
      return {
        ...state,
        correctClassifications: newCorrect,
        completedSites: newCompleted,
        phase: isLast ? "complete" : "digging",
        siteIndex: isLast ? state.siteIndex : state.siteIndex + 1,
        grid: isLast ? state.grid : createGrid(DIG_SITES[state.siteIndex + 1]!),
        digs: 0,
        classifyAnswer: { name: null, era: null, diet: null },
      };
    }
    default:
      return state;
  }
}

/* ─── cell colors ─── */
function cellColor(cell: Cell): string {
  if (cell.hasBone && cell.layer <= 1) return "bg-amber-200 dark:bg-amber-700";
  if (cell.layer === 3) return "bg-amber-900/80";
  if (cell.layer === 2) return "bg-stone-500/80";
  if (cell.layer === 1) return "bg-stone-300/60";
  return "bg-stone-200/30 dark:bg-stone-800/30";
}

function cellEmoji(cell: Cell): string {
  if (cell.hasBone && cell.layer <= 1) return "🦴";
  if (cell.layer === 3) return "";
  if (cell.layer === 2) return "🪨";
  return "";
}

/* ─── component ─── */
export default function GameFossilDig() {
  const { setMessage, setMood } = useMascot();
  const [state, dispatch] = useReducer(reducer, undefined, initState);
  const sessionIdRef = useRef(createLegacySessionId());
  const completionSentRef = useRef(false);

  const site = DIG_SITES[state.siteIndex]!;
  const dino = site.dinos[0]!;
  const elapsedMs = state.phase === "complete" ? Date.now() - state.startTime : 0;
  const score = state.correctClassifications * 250 + Math.max(0, 500 - state.totalDigs * 3);
  const MAX_SCORE = 1500;
  const stars = score >= 1200 ? 3 : score >= 700 ? 2 : score >= 300 ? 1 : 0;

  useEffect(() => {
    if (state.phase === "classifying") {
      setMood("happy");
      setMessage("Fossil found! Now classify it!");
      void hapticSuccess();
    }
  }, [state.phase, setMessage, setMood]);

  useEffect(() => {
    if (state.phase !== "complete") return;
    setMood("cheering");
    setMessage("All dig sites explored! Great paleontologist!");
    void hapticCelebration();
    if (completionSentRef.current) return;
    completionSentRef.current = true;
    emitLegacyGameComplete({
      sessionId: sessionIdRef.current,
      gameId: "fossil-dig",
      difficulty: "medium",
      elapsedMs,
      interactions: state.totalDigs,
      score,
      maxScore: MAX_SCORE,
      source: "component",
      occurredAt: new Date().toISOString(),
    });
  }, [state.phase, elapsedMs, state.totalDigs, score, setMessage, setMood]);

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    completionSentRef.current = false;
    setMood("happy");
    setMessage("Tap to dig! Find the hidden fossils!");
    dispatch({ type: "START" });
  }, [setMood, setMessage]);

  const canSubmit = state.classifyAnswer.name && state.classifyAnswer.era && state.classifyAnswer.diet;

  return (
    <div className="relative w-full overflow-hidden rounded-[2.25rem] border border-amber-300/25 bg-gradient-to-br from-amber-950/90 via-stone-900/95 to-orange-950/90 shadow-2xl backdrop-blur-xl">
      <AnimatePresence mode="wait">
        {state.phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="terra" mood="thinking" size="lg" />
            <h3 className="text-2xl font-black text-white">Fossil Dig</h3>
            <p className="text-amber-200/80">Excavate layers to discover fossils, then classify them!</p>
            <PhysicalButton onClick={startGame} variant="primary" className="px-10 py-4">
              Start Digging 🦴
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "digging" && (
          <motion.section key="digging" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-3 px-4 py-5">
            <div className="flex w-full items-center justify-between px-2">
              <span className="text-sm font-bold text-amber-200">
                Site {state.siteIndex + 1}/{DIG_SITES.length}: {site.name}
              </span>
              <span className="text-sm text-amber-300/70">Digs: {state.digs}</span>
            </div>

            <div className="grid grid-cols-8 gap-1 rounded-2xl bg-stone-800/60 p-2">
              {state.grid.flat().map((cell, i) => {
                const row = Math.floor(i / GRID_SIZE);
                const col = i % GRID_SIZE;
                return (
                  <motion.button
                    key={i}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      void hapticSelection();
                      dispatch({ type: "DIG", row, col });
                    }}
                    className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs transition-colors sm:h-9 sm:w-9 ${cellColor(cell)}`}
                  >
                    {cellEmoji(cell)}
                  </motion.button>
                );
              })}
            </div>

            <p className="text-xs text-amber-300/60">Tap cells to dig through layers &bull; Find all bones!</p>
          </motion.section>
        )}

        {state.phase === "classifying" && (
          <motion.section key="classify" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-4 px-5 py-6">
            <h3 className="text-xl font-bold text-white">Classify Your Discovery!</h3>
            <MascotFriend id="terra" mood="happy" size="md" />

            {/* name */}
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-amber-200">What dinosaur is it?</p>
              <div className="flex flex-wrap gap-2">
                {dino.nameOptions.map((opt) => (
                  <button key={opt}
                    onClick={() => { dispatch({ type: "SET_ANSWER", field: "name", value: opt }); void hapticSelection(); }}
                    className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-all
                      ${state.classifyAnswer.name === opt ? "bg-amber-500 text-white" : "bg-stone-700/60 text-stone-200 hover:bg-stone-600"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* era */}
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-amber-200">Which era?</p>
              <div className="flex flex-wrap gap-2">
                {dino.eraOptions.map((opt) => (
                  <button key={opt}
                    onClick={() => { dispatch({ type: "SET_ANSWER", field: "era", value: opt }); void hapticSelection(); }}
                    className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-all
                      ${state.classifyAnswer.era === opt ? "bg-amber-500 text-white" : "bg-stone-700/60 text-stone-200 hover:bg-stone-600"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* diet */}
            <div className="w-full">
              <p className="mb-1 text-sm font-semibold text-amber-200">Diet?</p>
              <div className="flex flex-wrap gap-2">
                {dino.dietOptions.map((opt) => (
                  <button key={opt}
                    onClick={() => { dispatch({ type: "SET_ANSWER", field: "diet", value: opt }); void hapticSelection(); }}
                    className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-all
                      ${state.classifyAnswer.diet === opt ? "bg-amber-500 text-white" : "bg-stone-700/60 text-stone-200 hover:bg-stone-600"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            <PhysicalButton
              onClick={() => { dispatch({ type: "SUBMIT_CLASSIFY" }); }}
              variant="success"
              disabled={!canSubmit}
              className="mt-2 px-8 py-3"
            >
              Submit Classification
            </PhysicalButton>
          </motion.section>
        )}

        {state.phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="terra" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Expedition Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}>
                  ⭐
                </motion.span>
              ))}
            </div>
            <p className="text-amber-200/80">
              Score: {score} &bull; {state.correctClassifications}/{DIG_SITES.length} correctly classified
            </p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🦴</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
