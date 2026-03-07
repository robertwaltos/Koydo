"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flag, Globe, Timer, Trophy } from "lucide-react";
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

/* ─── flag data ─── */
type Country = { name: string; flag: string; continent: string };

const COUNTRIES: Country[] = [
  { name: "Japan", flag: "🇯🇵", continent: "Asia" },
  { name: "Brazil", flag: "🇧🇷", continent: "South America" },
  { name: "Canada", flag: "🇨🇦", continent: "North America" },
  { name: "France", flag: "🇫🇷", continent: "Europe" },
  { name: "Australia", flag: "🇦🇺", continent: "Oceania" },
  { name: "South Korea", flag: "🇰🇷", continent: "Asia" },
  { name: "Mexico", flag: "🇲🇽", continent: "North America" },
  { name: "Germany", flag: "🇩🇪", continent: "Europe" },
  { name: "India", flag: "🇮🇳", continent: "Asia" },
  { name: "United Kingdom", flag: "🇬🇧", continent: "Europe" },
  { name: "Italy", flag: "🇮🇹", continent: "Europe" },
  { name: "China", flag: "🇨🇳", continent: "Asia" },
  { name: "Argentina", flag: "🇦🇷", continent: "South America" },
  { name: "Spain", flag: "🇪🇸", continent: "Europe" },
  { name: "Nigeria", flag: "🇳🇬", continent: "Africa" },
  { name: "Egypt", flag: "🇪🇬", continent: "Africa" },
  { name: "Turkey", flag: "🇹🇷", continent: "Europe" },
  { name: "Thailand", flag: "🇹🇭", continent: "Asia" },
  { name: "Sweden", flag: "🇸🇪", continent: "Europe" },
  { name: "South Africa", flag: "🇿🇦", continent: "Africa" },
  { name: "Norway", flag: "🇳🇴", continent: "Europe" },
  { name: "Colombia", flag: "🇨🇴", continent: "South America" },
  { name: "Indonesia", flag: "🇮🇩", continent: "Asia" },
  { name: "Russia", flag: "🇷🇺", continent: "Europe" },
  { name: "Poland", flag: "🇵🇱", continent: "Europe" },
  { name: "Saudi Arabia", flag: "🇸🇦", continent: "Asia" },
  { name: "Kenya", flag: "🇰🇪", continent: "Africa" },
  { name: "Vietnam", flag: "🇻🇳", continent: "Asia" },
  { name: "Chile", flag: "🇨🇱", continent: "South America" },
  { name: "Greece", flag: "🇬🇷", continent: "Europe" },
  { name: "Portugal", flag: "🇵🇹", continent: "Europe" },
  { name: "Ireland", flag: "🇮🇪", continent: "Europe" },
  { name: "Philippines", flag: "🇵🇭", continent: "Asia" },
  { name: "Switzerland", flag: "🇨🇭", continent: "Europe" },
  { name: "Netherlands", flag: "🇳🇱", continent: "Europe" },
  { name: "Belgium", flag: "🇧🇪", continent: "Europe" },
  { name: "Peru", flag: "🇵🇪", continent: "South America" },
  { name: "New Zealand", flag: "🇳🇿", continent: "Oceania" },
  { name: "Morocco", flag: "🇲🇦", continent: "Africa" },
  { name: "Ukraine", flag: "🇺🇦", continent: "Europe" },
  { name: "Cuba", flag: "🇨🇺", continent: "North America" },
  { name: "Jamaica", flag: "🇯🇲", continent: "North America" },
  { name: "Iceland", flag: "🇮🇸", continent: "Europe" },
  { name: "Finland", flag: "🇫🇮", continent: "Europe" },
  { name: "Denmark", flag: "🇩🇰", continent: "Europe" },
  { name: "Austria", flag: "🇦🇹", continent: "Europe" },
  { name: "Malaysia", flag: "🇲🇾", continent: "Asia" },
  { name: "Singapore", flag: "🇸🇬", continent: "Asia" },
  { name: "Pakistan", flag: "🇵🇰", continent: "Asia" },
  { name: "Ethiopia", flag: "🇪🇹", continent: "Africa" },
  { name: "Ghana", flag: "🇬🇭", continent: "Africa" },
  { name: "Tanzania", flag: "🇹🇿", continent: "Africa" },
  { name: "Bangladesh", flag: "🇧🇩", continent: "Asia" },
  { name: "Nepal", flag: "🇳🇵", continent: "Asia" },
  { name: "Sri Lanka", flag: "🇱🇰", continent: "Asia" },
  { name: "Israel", flag: "🇮🇱", continent: "Asia" },
  { name: "United Arab Emirates", flag: "🇦🇪", continent: "Asia" },
  { name: "Czech Republic", flag: "🇨🇿", continent: "Europe" },
  { name: "Romania", flag: "🇷🇴", continent: "Europe" },
  { name: "Hungary", flag: "🇭🇺", continent: "Europe" },
];

const ROUNDS_PER_GAME = 15;
const TIME_PER_ROUND_MS = 8000;
const BONUS_PER_MS_LEFT = 0.01;
const BASE_CORRECT = 100;
const STREAK_MULTIPLIER = 25;

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type RoundData = {
  correct: Country;
  options: Country[];
};

type State = {
  phase: Phase;
  round: number;
  score: number;
  streak: number;
  bestStreak: number;
  correct: number;
  roundData: RoundData | null;
  timeLeft: number;
  answered: string | null;
  showFeedback: boolean;
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; data: RoundData }
  | { type: "ANSWER"; name: string }
  | { type: "TICK"; delta: number }
  | { type: "TIME_UP" }
  | { type: "NEXT_ROUND"; data: RoundData }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, streak: 0, bestStreak: 0, correct: 0, answered: null, showFeedback: false };
    case "SET_ROUND":
      return { ...s, roundData: a.data, timeLeft: TIME_PER_ROUND_MS, answered: null, showFeedback: false };
    case "ANSWER": {
      const isCorrect = a.name === s.roundData?.correct.name;
      const timeBonus = Math.floor(s.timeLeft * BONUS_PER_MS_LEFT);
      const streakBonus = isCorrect ? s.streak * STREAK_MULTIPLIER : 0;
      const points = isCorrect ? BASE_CORRECT + timeBonus + streakBonus : 0;
      const newStreak = isCorrect ? s.streak + 1 : 0;
      return {
        ...s,
        answered: a.name,
        showFeedback: true,
        score: s.score + points,
        streak: newStreak,
        bestStreak: Math.max(s.bestStreak, newStreak),
        correct: s.correct + (isCorrect ? 1 : 0),
      };
    }
    case "TICK":
      return { ...s, timeLeft: Math.max(0, s.timeLeft - a.delta) };
    case "TIME_UP":
      return { ...s, answered: "__timeout__", showFeedback: true, streak: 0 };
    case "NEXT_ROUND":
      return { ...s, round: s.round + 1, roundData: a.data, timeLeft: TIME_PER_ROUND_MS, answered: null, showFeedback: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready",
  round: 0,
  score: 0,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  roundData: null,
  timeLeft: TIME_PER_ROUND_MS,
  answered: null,
  showFeedback: false,
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

function pickRound(exclude: Set<string>): RoundData {
  const available = COUNTRIES.filter((c) => !exclude.has(c.name));
  const pool = available.length >= 4 ? available : COUNTRIES;
  const shuffled = shuffle(pool);
  const correct = shuffled[0];
  const distractors = shuffle(COUNTRIES.filter((c) => c.name !== correct.name)).slice(0, 3);
  return { correct, options: shuffle([correct, ...distractors]) };
}

/* ─── component ─── */
export default function GameFlagDash() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const usedFlags = useRef(new Set<string>());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTickRef = useRef(Date.now());

  const { phase, round, score, streak, correct, roundData, timeLeft, answered, showFeedback } = state;

  const stars = useMemo(() => {
    const pct = correct / ROUNDS_PER_GAME;
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [correct]);

  /* ── timer ── */
  useEffect(() => {
    if (phase !== "playing" || showFeedback) return;
    lastTickRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const now = Date.now();
      const delta = now - lastTickRef.current;
      lastTickRef.current = now;
      dispatch({ type: "TICK", delta });
    }, 50);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, showFeedback, round]);

  /* ── time up ── */
  useEffect(() => {
    if (phase === "playing" && timeLeft <= 0 && !showFeedback) {
      hapticError();
      mascot.say("Time's up! Let's try the next one.", "thinking");
      dispatch({ type: "TIME_UP" });
    }
  }, [phase, timeLeft, showFeedback, mascot]);

  /* ── advance round after feedback ── */
  useEffect(() => {
    if (!showFeedback) return;
    const timeout = setTimeout(() => {
      if (round >= ROUNDS_PER_GAME) {
        hapticCelebration();
        emitLegacyGameComplete(sessionId.current, score, stars);
        mascot.say(stars >= 2 ? "Amazing geography skills!" : "Keep exploring the world!", stars >= 2 ? "cheering" : "encouraging");
        dispatch({ type: "FINISH" });
      } else {
        const data = pickRound(usedFlags.current);
        usedFlags.current.add(data.correct.name);
        dispatch({ type: "NEXT_ROUND", data });
      }
    }, 1200);
    return () => clearTimeout(timeout);
  }, [showFeedback, round, score, stars, mascot]);

  /* ── start game ── */
  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    usedFlags.current.clear();
    dispatch({ type: "START" });
    const data = pickRound(usedFlags.current);
    usedFlags.current.add(data.correct.name);
    dispatch({ type: "SET_ROUND", data });
    mascot.say("Name that flag! 🌍", "excited");
  }, [mascot]);

  /* ── answer ── */
  const handleAnswer = useCallback((name: string) => {
    if (answered) return;
    const isCorrect = name === roundData?.correct.name;
    if (isCorrect) {
      hapticSuccess();
      mascot.say(streak >= 3 ? `${streak + 1}× streak! 🔥` : "Correct! 🎯", "cheering");
    } else {
      hapticError();
      mascot.say(`That's ${roundData?.correct.name}!`, "thinking");
    }
    dispatch({ type: "ANSWER", name });
  }, [answered, roundData, streak, mascot]);

  const timerPct = timeLeft / TIME_PER_ROUND_MS;
  const timerColor = timerPct > 0.5 ? "bg-emerald-500" : timerPct > 0.25 ? "bg-amber-500" : "bg-red-500";

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      {/* header */}
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-emerald-400" />
          <span className="text-sm font-bold text-white">Flag Dash</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>{round}/{ROUNDS_PER_GAME}</span>
            <span className="text-amber-400 font-bold">{score}</span>
            {streak >= 2 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="text-orange-400 font-black"
              >
                {streak}× 🔥
              </motion.span>
            )}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {/* ── ready ── */}
        {phase === "ready" && (
          <motion.section
            key="ready"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center"
          >
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Flag Dash</h2>
            <p className="text-stone-400 max-w-xs">
              Identify {ROUNDS_PER_GAME} country flags as fast as you can. Speed earns bonus points!
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Flag className="h-3 w-3" /> {COUNTRIES.length} countries</span>
              <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> {TIME_PER_ROUND_MS / 1000}s per flag</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Start Dash 🌍
            </PhysicalButton>
          </motion.section>
        )}

        {/* ── playing ── */}
        {phase === "playing" && roundData && (
          <motion.section
            key={`round-${round}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
            className="flex flex-1 flex-col items-center gap-4 px-6 py-6 w-full"
          >
            {/* timer bar */}
            <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${timerColor}`}
                initial={{ width: "100%" }}
                animate={{ width: `${timerPct * 100}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            </div>

            {/* flag display */}
            <motion.div
              className="flex items-center justify-center w-32 h-32 rounded-2xl bg-stone-800/60 ring-1 ring-white/10 shadow-lg"
              animate={showFeedback && answered !== roundData.correct.name ? { x: [0, -8, 8, -4, 4, 0] } : {}}
              transition={{ duration: 0.4 }}
            >
              <span className="text-8xl leading-none select-none">{roundData.correct.flag}</span>
            </motion.div>

            {/* continent hint */}
            <span className="text-xs text-stone-500 font-medium">{roundData.correct.continent}</span>

            {/* options grid */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mt-2">
              {roundData.options.map((opt) => {
                const isCorrect = opt.name === roundData.correct.name;
                const isChosen = answered === opt.name;
                const revealCorrect = showFeedback && isCorrect;
                const revealWrong = showFeedback && isChosen && !isCorrect;
                const timedOut = answered === "__timeout__";

                let bg = "bg-stone-800/80 hover:bg-stone-700/80 active:scale-[0.97]";
                let ring = "ring-1 ring-white/5";
                let text = "text-white";
                if (revealCorrect) {
                  bg = "bg-emerald-600/30";
                  ring = "ring-2 ring-emerald-400";
                  text = "text-emerald-200";
                } else if (revealWrong) {
                  bg = "bg-red-600/30";
                  ring = "ring-2 ring-red-400";
                  text = "text-red-200";
                } else if (timedOut && isCorrect) {
                  bg = "bg-amber-600/20";
                  ring = "ring-2 ring-amber-400";
                  text = "text-amber-200";
                } else if (showFeedback) {
                  bg = "bg-stone-800/40";
                  text = "text-stone-500";
                }

                return (
                  <motion.button
                    key={opt.name}
                    onClick={() => handleAnswer(opt.name)}
                    disabled={!!answered}
                    whileTap={!answered ? { scale: 0.95 } : undefined}
                    className={`relative rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-150 ${bg} ${ring} ${text} min-h-[48px]`}
                  >
                    {opt.name}
                    {revealCorrect && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 text-lg"
                      >
                        ✅
                      </motion.span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* ── complete ── */}
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
            <h3 className="text-2xl font-black text-white">Dash Complete!</h3>
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
              <p className="text-stone-400">{correct}/{ROUNDS_PER_GAME} correct &bull; Best streak: {state.bestStreak}</p>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">
              Play Again 🌍
            </PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
