"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bug, Trophy, Search, Code } from "lucide-react";
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

/* ─── puzzle data ─── */
type CodeLine = { text: string; isBuggy: boolean; fix?: string };

type Puzzle = {
  id: string;
  title: string;
  description: string;
  language: string;
  lines: CodeLine[];
  hint: string;
  bugCount: number;
};

const PUZZLES: Puzzle[] = [
  {
    id: "loop-off-by-one",
    title: "Counter Chaos",
    description: "This loop should print numbers 1 to 5, but something's wrong...",
    language: "JavaScript",
    lines: [
      { text: "let count = 0;", isBuggy: false },
      { text: "while (count < 5) {", isBuggy: true, fix: "Should start count at 1 or use <= 5" },
      { text: "  console.log(count);", isBuggy: false },
      { text: "  count = count + 1;", isBuggy: false },
      { text: "}", isBuggy: false },
    ],
    hint: "What number does it start printing?",
    bugCount: 1,
  },
  {
    id: "missing-return",
    title: "Silent Function",
    description: "This function should return the sum, but it returns nothing!",
    language: "Python",
    lines: [
      { text: "def add(a, b):", isBuggy: false },
      { text: "  result = a + b", isBuggy: false },
      { text: "  print(result)", isBuggy: true, fix: "Should be 'return result' not just print" },
      { text: "", isBuggy: false },
      { text: "total = add(3, 4)", isBuggy: false },
    ],
    hint: "There's a difference between printing and returning",
    bugCount: 1,
  },
  {
    id: "wrong-operator",
    title: "Age Check Fail",
    description: "This should only allow adults (18+), but kids keep getting in!",
    language: "JavaScript",
    lines: [
      { text: "function canEnter(age) {", isBuggy: false },
      { text: "  if (age = 18) {", isBuggy: true, fix: "Should be === (comparison) not = (assignment)" },
      { text: '    return "Welcome!";', isBuggy: false },
      { text: "  }", isBuggy: false },
      { text: '  return "Too young";', isBuggy: false },
      { text: "}", isBuggy: false },
    ],
    hint: "How do you compare values vs assign them?",
    bugCount: 1,
  },
  {
    id: "infinite-loop",
    title: "Infinite Spinner",
    description: "This countdown should reach 0, but it runs forever!",
    language: "Python",
    lines: [
      { text: "countdown = 10", isBuggy: false },
      { text: "while countdown > 0:", isBuggy: false },
      { text: '  print(countdown)', isBuggy: false },
      { text: "  countdown = countdown + 1", isBuggy: true, fix: "Should be - 1, not + 1" },
      { text: 'print("Blast off!")', isBuggy: false },
    ],
    hint: "Which direction should the counter go?",
    bugCount: 1,
  },
  {
    id: "index-error",
    title: "Array Oops",
    description: "Trying to get the last item but it crashes!",
    language: "JavaScript",
    lines: [
      { text: 'let fruits = ["apple", "banana", "cherry"];', isBuggy: false },
      { text: "let last = fruits[fruits.length];", isBuggy: true, fix: "Should be fruits.length - 1 (arrays are 0-indexed)" },
      { text: "console.log(last);", isBuggy: false },
    ],
    hint: "Arrays start counting from 0, not 1",
    bugCount: 1,
  },
  {
    id: "string-concat",
    title: "Math or Text?",
    description: "Expected 15, but got '510' instead!",
    language: "JavaScript",
    lines: [
      { text: 'let a = "5";', isBuggy: true, fix: "Should be let a = 5 (number, not string)" },
      { text: "let b = 10;", isBuggy: false },
      { text: "let sum = a + b;", isBuggy: false },
      { text: "console.log(sum);", isBuggy: false },
    ],
    hint: "What happens when you 'add' text to a number?",
    bugCount: 1,
  },
  {
    id: "scope-bug",
    title: "Vanishing Variable",
    description: "The variable exists inside but not outside!",
    language: "Python",
    lines: [
      { text: "def greet():", isBuggy: false },
      { text: '  message = "Hello!"', isBuggy: false },
      { text: "", isBuggy: false },
      { text: "greet()", isBuggy: false },
      { text: "print(message)", isBuggy: true, fix: "'message' only exists inside greet() — need to return it" },
    ],
    hint: "Where was the variable created?",
    bugCount: 1,
  },
  {
    id: "logic-flip",
    title: "Backwards Logic",
    description: "The thermostat turns on heat when it's already hot!",
    language: "Python",
    lines: [
      { text: "temperature = 85", isBuggy: false },
      { text: "if temperature > 75:", isBuggy: true, fix: "Should be < 65 to turn on heater when cold" },
      { text: '  print("Turning on heater")', isBuggy: false },
      { text: "else:", isBuggy: false },
      { text: '  print("Temperature OK")', isBuggy: false },
    ],
    hint: "When should a heater turn on?",
    bugCount: 1,
  },
  {
    id: "double-bug",
    title: "Double Trouble",
    description: "Two bugs hiding in this average calculator!",
    language: "JavaScript",
    lines: [
      { text: "function average(a, b, c) {", isBuggy: false },
      { text: "  let sum = a + b;", isBuggy: true, fix: "Missing + c — should be a + b + c" },
      { text: "  return sum / 2;", isBuggy: true, fix: "Should divide by 3, not 2" },
      { text: "}", isBuggy: false },
    ],
    hint: "Check both the addition and division",
    bugCount: 2,
  },
  {
    id: "equality-type",
    title: "Type Trap",
    description: "Why does 0 equal false here?",
    language: "JavaScript",
    lines: [
      { text: "let score = 0;", isBuggy: false },
      { text: "if (score == false) {", isBuggy: true, fix: "Use === for strict comparison (0 == false is true in JS)" },
      { text: '  console.log("No score yet");', isBuggy: false },
      { text: "}", isBuggy: false },
    ],
    hint: "JavaScript has two kinds of equality checks",
    bugCount: 1,
  },
];

const ROUNDS = 6;

/* ─── state ─── */
type Phase = "ready" | "playing" | "feedback" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  puzzle: Puzzle | null;
  selected: Set<number>;
  checked: boolean;
  hintUsed: boolean;
  correctBugs: number;
  totalBugs: number;
};

type Action =
  | { type: "START" }
  | { type: "SET_PUZZLE"; puzzle: Puzzle }
  | { type: "TOGGLE_LINE"; index: number }
  | { type: "USE_HINT" }
  | { type: "CHECK" }
  | { type: "NEXT"; puzzle: Puzzle }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, selected: new Set(), checked: false, hintUsed: false, correctBugs: 0, totalBugs: 0 };
    case "SET_PUZZLE":
      return { ...s, puzzle: a.puzzle, selected: new Set(), checked: false, hintUsed: false };
    case "TOGGLE_LINE": {
      const next = new Set(s.selected);
      if (next.has(a.index)) next.delete(a.index);
      else next.add(a.index);
      return { ...s, selected: next };
    }
    case "USE_HINT":
      return { ...s, hintUsed: true };
    case "CHECK": {
      if (!s.puzzle) return s;
      const bugLines = s.puzzle.lines.map((l, i) => l.isBuggy ? i : -1).filter((i) => i >= 0);
      const found = bugLines.filter((i) => s.selected.has(i)).length;
      const falsePositives = [...s.selected].filter((i) => !s.puzzle!.lines[i].isBuggy).length;
      const points = found * 200 - falsePositives * 50 - (s.hintUsed ? 50 : 0);
      return {
        ...s,
        phase: "feedback",
        checked: true,
        score: s.score + Math.max(0, points),
        correctBugs: s.correctBugs + found,
        totalBugs: s.totalBugs + bugLines.length,
      };
    }
    case "NEXT":
      return { ...s, phase: "playing", round: s.round + 1, puzzle: a.puzzle, selected: new Set(), checked: false, hintUsed: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, puzzle: null,
  selected: new Set<number>(), checked: false, hintUsed: false,
  correctBugs: 0, totalBugs: 0,
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ─── component ─── */
export default function GameDebugDetective() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const puzzleOrder = useRef<Puzzle[]>([]);

  const { phase, round, score, puzzle, selected, checked, hintUsed, correctBugs, totalBugs } = state;

  const stars = useMemo(() => {
    const pct = correctBugs / Math.max(totalBugs, 1);
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [correctBugs, totalBugs]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    puzzleOrder.current = shuffle(PUZZLES).slice(0, ROUNDS);
    dispatch({ type: "START" });
    dispatch({ type: "SET_PUZZLE", puzzle: puzzleOrder.current[0] });
    mascot.say("Find the bugs in each snippet! 🔍", "excited");
  }, [mascot]);

  const handleCheck = useCallback(() => {
    if (!puzzle) return;
    dispatch({ type: "CHECK" });
    const bugLines = puzzle.lines.filter((l) => l.isBuggy);
    const found = bugLines.filter((_, i) => {
      const lineIdx = puzzle.lines.indexOf(bugLines[i]);
      return selected.has(lineIdx);
    }).length;
    if (found === bugLines.length && [...selected].every((i) => puzzle.lines[i].isBuggy)) {
      hapticCelebration();
      mascot.say("All bugs found! Perfect! 🎯", "cheering");
    } else if (found > 0) {
      hapticSuccess();
      mascot.say(`Found ${found}/${bugLines.length} bugs!`, "encouraging");
    } else {
      hapticError();
      mascot.say("Check the highlighted lines!", "thinking");
    }
  }, [puzzle, selected, mascot]);

  const handleNext = useCallback(() => {
    if (round >= ROUNDS) {
      emitLegacyGameComplete(sessionId.current, score, stars);
      dispatch({ type: "FINISH" });
    } else {
      dispatch({ type: "NEXT", puzzle: puzzleOrder.current[round] });
    }
  }, [round, score, stars]);

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      {/* header */}
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Bug className="h-5 w-5 text-green-400" />
          <span className="text-sm font-bold text-white">Debug Detective</span>
        </div>
        {(phase === "playing" || phase === "feedback") && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>Case {round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
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
            <h2 className="text-3xl font-black text-white">Debug Detective</h2>
            <p className="text-stone-400 max-w-xs">
              Read code snippets and find the bugs! Tap suspicious lines, then submit your report.
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Code className="h-3 w-3" /> {PUZZLES.length} cases</span>
              <span className="flex items-center gap-1"><Search className="h-3 w-3" /> {ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Investigation 🔍
            </PhysicalButton>
          </motion.section>
        )}

        {(phase === "playing" || phase === "feedback") && puzzle && (
          <motion.section
            key={`puzzle-${puzzle.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-1 flex-col gap-3 px-4 py-5 w-full"
          >
            {/* puzzle info */}
            <div className="px-2">
              <h3 className="text-sm font-bold text-white">{puzzle.title}</h3>
              <p className="text-xs text-stone-400 mt-0.5">{puzzle.description}</p>
              <span className="text-[10px] text-stone-600 font-mono">{puzzle.language} &bull; {puzzle.bugCount} bug{puzzle.bugCount > 1 ? "s" : ""}</span>
            </div>

            {/* code block */}
            <div className="rounded-xl bg-stone-950 ring-1 ring-white/5 overflow-hidden font-mono text-[12px]">
              {puzzle.lines.map((line, i) => {
                const isSelected = selected.has(i);
                const showBug = checked && line.isBuggy;
                const showFalsePositive = checked && isSelected && !line.isBuggy;
                const isEmpty = line.text.trim() === "";

                let lineBg = "";
                if (showBug && isSelected) lineBg = "bg-emerald-600/20";
                else if (showBug && !isSelected) lineBg = "bg-red-600/20";
                else if (showFalsePositive) lineBg = "bg-amber-600/15";
                else if (isSelected && !checked) lineBg = "bg-red-600/15";

                return (
                  <motion.button
                    key={i}
                    onClick={() => !checked && !isEmpty && dispatch({ type: "TOGGLE_LINE", index: i })}
                    disabled={checked || isEmpty}
                    className={`flex w-full items-start gap-2 px-3 py-1.5 text-left transition-colors ${lineBg} ${!checked && !isEmpty ? "hover:bg-stone-800/60" : ""}`}
                  >
                    <span className="text-stone-600 w-5 shrink-0 text-right select-none">{i + 1}</span>
                    <span className={`flex-1 whitespace-pre ${
                      showBug ? "text-red-300" : showFalsePositive ? "text-amber-300" : isSelected ? "text-red-400" : "text-stone-300"
                    }`}>
                      {isEmpty ? "\u00A0" : line.text}
                    </span>
                    {isSelected && !checked && <span className="text-red-400 text-xs">🐛</span>}
                    {showBug && isSelected && <span className="text-emerald-400 text-xs">✅</span>}
                    {showBug && !isSelected && <span className="text-red-400 text-xs">❌</span>}
                  </motion.button>
                );
              })}
            </div>

            {/* fix explanations (feedback) */}
            {checked && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-1 px-2"
              >
                {puzzle.lines.filter((l) => l.isBuggy).map((line, i) => (
                  <p key={i} className="text-xs text-emerald-400/80">
                    <span className="font-bold">Fix:</span> {line.fix}
                  </p>
                ))}
              </motion.div>
            )}

            {/* hint */}
            {!checked && !hintUsed && (
              <button
                onClick={() => { dispatch({ type: "USE_HINT" }); mascot.say(puzzle.hint, "thinking"); }}
                className="text-xs text-stone-600 hover:text-stone-400 transition-colors self-center"
              >
                💡 Need a hint? (-50 pts)
              </button>
            )}
            {hintUsed && !checked && (
              <p className="text-xs text-amber-400/60 text-center italic">{puzzle.hint}</p>
            )}

            {/* action buttons */}
            <div className="flex justify-center mt-2">
              {!checked ? (
                <PhysicalButton onClick={handleCheck} variant="primary" disabled={selected.size === 0}>
                  Submit Report 📋
                </PhysicalButton>
              ) : (
                <PhysicalButton onClick={handleNext} variant="primary">
                  {round >= ROUNDS ? "See Results" : "Next Case →"}
                </PhysicalButton>
              )}
            </div>
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
            <h3 className="text-2xl font-black text-white">Case Closed!</h3>
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
              <p className="text-stone-400">{correctBugs}/{totalBugs} bugs found</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again 🔍
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
