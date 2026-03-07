"use client";

import { useCallback, useEffect, useMemo, useReducer, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Trophy, Globe2 } from "lucide-react";
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

/* ─── capital data ─── */
type Capital = { country: string; capital: string; continent: string; funFact: string };

const CAPITALS: Capital[] = [
  { country: "France", capital: "Paris", continent: "Europe", funFact: "The Eiffel Tower was originally meant to be temporary" },
  { country: "Japan", capital: "Tokyo", continent: "Asia", funFact: "Tokyo is the world's most populous metropolitan area" },
  { country: "Brazil", capital: "Brasília", continent: "South America", funFact: "Brasília was built from scratch in just 41 months" },
  { country: "Australia", capital: "Canberra", continent: "Oceania", funFact: "Canberra was chosen as a compromise between Sydney and Melbourne" },
  { country: "Egypt", capital: "Cairo", continent: "Africa", funFact: "Cairo is called 'The City of a Thousand Minarets'" },
  { country: "Canada", capital: "Ottawa", continent: "North America", funFact: "Ottawa has the world's largest naturally frozen skating rink" },
  { country: "Germany", capital: "Berlin", continent: "Europe", funFact: "Berlin has more bridges than Venice" },
  { country: "India", capital: "New Delhi", continent: "Asia", funFact: "New Delhi was designed by British architects in the 1920s" },
  { country: "Mexico", capital: "Mexico City", continent: "North America", funFact: "Built on top of the ancient Aztec city of Tenochtitlan" },
  { country: "South Korea", capital: "Seoul", continent: "Asia", funFact: "Seoul has the fastest average internet speed in the world" },
  { country: "Argentina", capital: "Buenos Aires", continent: "South America", funFact: "Known as the 'Paris of South America'" },
  { country: "Turkey", capital: "Ankara", continent: "Europe", funFact: "Ankara replaced Istanbul as capital in 1923" },
  { country: "Nigeria", capital: "Abuja", continent: "Africa", funFact: "Abuja replaced Lagos as capital in 1991" },
  { country: "Thailand", capital: "Bangkok", continent: "Asia", funFact: "Bangkok's full ceremonial name has 168 characters" },
  { country: "Italy", capital: "Rome", continent: "Europe", funFact: "Rome has a country inside it — Vatican City" },
  { country: "China", capital: "Beijing", continent: "Asia", funFact: "The Forbidden City has 9,999 rooms" },
  { country: "Spain", capital: "Madrid", continent: "Europe", funFact: "Madrid is the highest capital in the EU at 650m elevation" },
  { country: "South Africa", capital: "Pretoria", continent: "Africa", funFact: "South Africa has three capitals for its three branches of government" },
  { country: "Russia", capital: "Moscow", continent: "Europe", funFact: "Moscow's metro has stations decorated like palaces" },
  { country: "Peru", capital: "Lima", continent: "South America", funFact: "Lima was founded by Francisco Pizarro in 1535" },
  { country: "Kenya", capital: "Nairobi", continent: "Africa", funFact: "Nairobi has a national park within city limits" },
  { country: "Poland", capital: "Warsaw", continent: "Europe", funFact: "Warsaw was almost completely rebuilt after WWII" },
  { country: "Colombia", capital: "Bogotá", continent: "South America", funFact: "Bogotá is one of the highest capital cities at 2,640m" },
  { country: "Indonesia", capital: "Jakarta", continent: "Asia", funFact: "Indonesia is moving its capital to Nusantara on Borneo" },
  { country: "Sweden", capital: "Stockholm", continent: "Europe", funFact: "Stockholm is spread across 14 islands" },
  { country: "Vietnam", capital: "Hanoi", continent: "Asia", funFact: "Hanoi celebrated its 1000th anniversary in 2010" },
  { country: "Greece", capital: "Athens", continent: "Europe", funFact: "Athens is one of the oldest cities in the world — 3,400+ years" },
  { country: "Norway", capital: "Oslo", continent: "Europe", funFact: "Oslo is one of the greenest capitals — 2/3 is forests and parks" },
  { country: "New Zealand", capital: "Wellington", continent: "Oceania", funFact: "Wellington is the world's southernmost capital of a sovereign state" },
  { country: "Philippines", capital: "Manila", continent: "Asia", funFact: "Manila is the most densely populated city in the world" },
  { country: "Chile", capital: "Santiago", continent: "South America", funFact: "Santiago sits in a valley surrounded by the Andes" },
  { country: "Morocco", capital: "Rabat", continent: "Africa", funFact: "Rabat was named a UNESCO World Heritage Site in 2012" },
  { country: "Czech Republic", capital: "Prague", continent: "Europe", funFact: "Prague Castle is the largest ancient castle in the world" },
  { country: "Cuba", capital: "Havana", continent: "North America", funFact: "Havana is famous for its 1950s American cars still in daily use" },
  { country: "Switzerland", capital: "Bern", continent: "Europe", funFact: "Einstein developed his Theory of Relativity while living in Bern" },
  { country: "Ireland", capital: "Dublin", continent: "Europe", funFact: "The word 'Dublin' comes from Irish 'Dubh Linn' meaning Black Pool" },
  { country: "Pakistan", capital: "Islamabad", continent: "Asia", funFact: "Islamabad was purpose-built in the 1960s to replace Karachi" },
  { country: "United Kingdom", capital: "London", continent: "Europe", funFact: "London has 170 museums, more than any other city" },
  { country: "United States", capital: "Washington, D.C.", continent: "North America", funFact: "D.C. is not a state — it stands for District of Columbia" },
  { country: "Finland", capital: "Helsinki", continent: "Europe", funFact: "Helsinki is nicknamed the 'Daughter of the Baltic'" },
];

const ROUNDS = 15;
const TIME_PER_ROUND_MS = 10000;

/* ─── state ─── */
type Phase = "ready" | "playing" | "complete";

type State = {
  phase: Phase;
  round: number;
  score: number;
  streak: number;
  bestStreak: number;
  correct: number;
  current: Capital | null;
  options: string[];
  timeLeft: number;
  answered: string | null;
  showFeedback: boolean;
  mode: "country-to-capital" | "capital-to-country";
};

type Action =
  | { type: "START" }
  | { type: "SET_ROUND"; current: Capital; options: string[]; mode: "country-to-capital" | "capital-to-country" }
  | { type: "ANSWER"; answer: string }
  | { type: "TICK"; delta: number }
  | { type: "TIME_UP" }
  | { type: "NEXT"; current: Capital; options: string[]; mode: "country-to-capital" | "capital-to-country" }
  | { type: "FINISH" };

function reducer(s: State, a: Action): State {
  switch (a.type) {
    case "START":
      return { ...s, phase: "playing", round: 1, score: 0, streak: 0, bestStreak: 0, correct: 0, answered: null, showFeedback: false };
    case "SET_ROUND":
      return { ...s, current: a.current, options: a.options, mode: a.mode, timeLeft: TIME_PER_ROUND_MS, answered: null, showFeedback: false };
    case "ANSWER": {
      const correctAnswer = s.mode === "country-to-capital" ? s.current!.capital : s.current!.country;
      const isCorrect = a.answer === correctAnswer;
      const timeBonus = Math.floor(s.timeLeft * 0.008);
      const streakBonus = isCorrect ? s.streak * 15 : 0;
      const newStreak = isCorrect ? s.streak + 1 : 0;
      return {
        ...s, answered: a.answer, showFeedback: true,
        score: s.score + (isCorrect ? 100 + timeBonus + streakBonus : 0),
        streak: newStreak, bestStreak: Math.max(s.bestStreak, newStreak),
        correct: s.correct + (isCorrect ? 1 : 0),
      };
    }
    case "TICK":
      return { ...s, timeLeft: Math.max(0, s.timeLeft - a.delta) };
    case "TIME_UP":
      return { ...s, answered: "__timeout__", showFeedback: true, streak: 0 };
    case "NEXT":
      return { ...s, round: s.round + 1, current: a.current, options: a.options, mode: a.mode, timeLeft: TIME_PER_ROUND_MS, answered: null, showFeedback: false };
    case "FINISH":
      return { ...s, phase: "complete" };
    default:
      return s;
  }
}

const INIT: State = {
  phase: "ready", round: 0, score: 0, streak: 0, bestStreak: 0,
  correct: 0, current: null, options: [], timeLeft: TIME_PER_ROUND_MS,
  answered: null, showFeedback: false, mode: "country-to-capital",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRound(exclude: Set<string>): { current: Capital; options: string[]; mode: "country-to-capital" | "capital-to-country" } {
  const available = CAPITALS.filter((c) => !exclude.has(c.country));
  const pool = available.length >= 4 ? available : CAPITALS;
  const current = shuffle(pool)[0];
  const mode = Math.random() > 0.5 ? "country-to-capital" as const : "capital-to-country" as const;

  let distractors: string[];
  if (mode === "country-to-capital") {
    distractors = shuffle(CAPITALS.filter((c) => c.capital !== current.capital)).slice(0, 3).map((c) => c.capital);
    return { current, options: shuffle([current.capital, ...distractors]), mode };
  } else {
    distractors = shuffle(CAPITALS.filter((c) => c.country !== current.country)).slice(0, 3).map((c) => c.country);
    return { current, options: shuffle([current.country, ...distractors]), mode };
  }
}

/* ─── component ─── */
export default function GameCapitalQuest() {
  const [state, dispatch] = useReducer(reducer, INIT);
  const sessionId = useRef(createLegacySessionId());
  const mascot = useMascot();
  const usedCountries = useRef(new Set<string>());
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastTickRef = useRef(Date.now());

  const { phase, round, score, streak, correct, current, options, timeLeft, answered, showFeedback, mode } = state;

  const stars = useMemo(() => {
    const pct = correct / ROUNDS;
    if (pct >= 0.9) return 3;
    if (pct >= 0.7) return 2;
    if (pct >= 0.4) return 1;
    return 0;
  }, [correct]);

  useEffect(() => {
    if (phase !== "playing" || showFeedback) return;
    lastTickRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const now = Date.now();
      dispatch({ type: "TICK", delta: now - lastTickRef.current });
      lastTickRef.current = now;
    }, 50);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase, showFeedback, round]);

  useEffect(() => {
    if (phase === "playing" && timeLeft <= 0 && !showFeedback) {
      hapticError();
      dispatch({ type: "TIME_UP" });
    }
  }, [phase, timeLeft, showFeedback]);

  useEffect(() => {
    if (!showFeedback) return;
    const timeout = setTimeout(() => {
      if (round >= ROUNDS) {
        hapticCelebration();
        emitLegacyGameComplete(sessionId.current, score, stars);
        dispatch({ type: "FINISH" });
      } else {
        const data = pickRound(usedCountries.current);
        usedCountries.current.add(data.current.country);
        dispatch({ type: "NEXT", ...data });
      }
    }, 1800);
    return () => clearTimeout(timeout);
  }, [showFeedback, round, score, stars]);

  const startGame = useCallback(() => {
    hapticSelection();
    sessionId.current = createLegacySessionId();
    usedCountries.current.clear();
    dispatch({ type: "START" });
    const data = pickRound(usedCountries.current);
    usedCountries.current.add(data.current.country);
    dispatch({ type: "SET_ROUND", ...data });
    mascot.say("Name the world's capitals! 🏛️", "excited");
  }, [mascot]);

  const handleAnswer = useCallback((answer: string) => {
    if (answered) return;
    const correctAnswer = mode === "country-to-capital" ? current!.capital : current!.country;
    if (answer === correctAnswer) {
      hapticSuccess();
      mascot.say(current!.funFact, "cheering");
    } else {
      hapticError();
      mascot.say(`The answer is ${correctAnswer}!`, "thinking");
    }
    dispatch({ type: "ANSWER", answer });
  }, [answered, current, mode, mascot]);

  const timerPct = timeLeft / TIME_PER_ROUND_MS;

  return (
    <div className="relative flex min-h-[520px] w-full max-w-lg flex-col items-center rounded-3xl bg-gradient-to-b from-stone-900/95 to-stone-950/95 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl overflow-hidden mx-auto">
      <div className="flex w-full items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-rose-400" />
          <span className="text-sm font-bold text-white">Capital Quest</span>
        </div>
        {phase === "playing" && (
          <div className="flex items-center gap-4 text-xs text-stone-400">
            <span>{round}/{ROUNDS}</span>
            <span className="text-amber-400 font-bold">{score}</span>
            {streak >= 2 && <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-orange-400 font-black">{streak}× 🔥</motion.span>}
          </div>
        )}
      </div>

      <AnimatePresence mode="wait">
        {phase === "ready" && (
          <motion.section key="ready" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="excited" size="lg" />
            <h2 className="text-3xl font-black text-white">Capital Quest</h2>
            <p className="text-stone-400 max-w-xs">
              Match countries to their capitals and learn fun facts! Both directions — country→capital and capital→country.
            </p>
            <div className="flex gap-3 text-xs text-stone-500">
              <span className="flex items-center gap-1"><Globe2 className="h-3 w-3" /> {CAPITALS.length} countries</span>
              <span>{ROUNDS} rounds</span>
            </div>
            <PhysicalButton onClick={startGame} variant="primary">Start Quest 🏛️</PhysicalButton>
          </motion.section>
        )}

        {phase === "playing" && current && (
          <motion.section key={`round-${round}`} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }}
            className="flex flex-1 flex-col items-center gap-4 px-6 py-5 w-full">
            {/* timer */}
            <div className="w-full h-1.5 rounded-full bg-stone-800 overflow-hidden">
              <motion.div className={`h-full rounded-full ${timerPct > 0.5 ? "bg-emerald-500" : timerPct > 0.25 ? "bg-amber-500" : "bg-red-500"}`}
                animate={{ width: `${timerPct * 100}%` }} transition={{ duration: 0.05, ease: "linear" }} />
            </div>

            {/* question */}
            <div className="text-center py-4">
              <p className="text-xs text-stone-500 mb-2">
                {mode === "country-to-capital" ? "What is the capital of..." : "Which country has the capital..."}
              </p>
              <h3 className="text-2xl font-black text-white">
                {mode === "country-to-capital" ? current.country : current.capital}
              </h3>
              <span className="text-xs text-stone-600">{current.continent}</span>
            </div>

            {/* options */}
            <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
              {options.map((opt) => {
                const correctAnswer = mode === "country-to-capital" ? current.capital : current.country;
                const isCorrect = opt === correctAnswer;
                const isChosen = answered === opt;
                const timedOut = answered === "__timeout__";

                let style = "bg-stone-800/80 ring-1 ring-white/5 text-white hover:bg-stone-700/80";
                if (showFeedback && isCorrect) style = "bg-emerald-600/30 ring-2 ring-emerald-400 text-emerald-200";
                else if (showFeedback && isChosen) style = "bg-red-600/30 ring-2 ring-red-400 text-red-200";
                else if (showFeedback && timedOut && isCorrect) style = "bg-amber-600/20 ring-2 ring-amber-400 text-amber-200";
                else if (showFeedback) style = "bg-stone-800/40 text-stone-500";

                return (
                  <motion.button key={opt} onClick={() => handleAnswer(opt)} disabled={!!answered}
                    whileTap={!answered ? { scale: 0.95 } : undefined}
                    className={`rounded-xl px-3 py-3 text-sm font-semibold transition-all min-h-[48px] ${style}`}>
                    {opt}
                  </motion.button>
                );
              })}
            </div>

            {/* fun fact on correct */}
            {showFeedback && answered === (mode === "country-to-capital" ? current.capital : current.country) && (
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="text-xs text-amber-400/70 text-center italic max-w-xs">
                💡 {current.funFact}
              </motion.p>
            )}
          </motion.section>
        )}

        {phase === "complete" && (
          <motion.section key="complete" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-12 text-center">
            <MascotFriend id="spark" mood="cheering" size="lg" />
            <Trophy className="h-10 w-10 text-amber-400" />
            <h3 className="text-2xl font-black text-white">Quest Complete!</h3>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.span key={i} className="text-3xl"
                  initial={{ scale: 0 }} animate={{ scale: i < stars ? 1 : 0.5, opacity: i < stars ? 1 : 0.3 }}
                  transition={{ delay: i * 0.15, type: "spring" }}>⭐</motion.span>
              ))}
            </div>
            <p className="text-white font-bold">{score} points</p>
            <p className="text-stone-400 text-sm">{correct}/{ROUNDS} correct &bull; Best streak: {state.bestStreak}</p>
            <PhysicalButton onClick={startGame} variant="primary">Play Again 🏛️</PhysicalButton>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}
