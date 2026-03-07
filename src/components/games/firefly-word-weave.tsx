"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookText, Sparkles, Bug } from "lucide-react";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import { useMascot } from "@/components/experience/MascotHost";
import { hapticCelebration, hapticError, hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import { createLegacySessionId, emitLegacyGameComplete } from "@/lib/games/legacy-runtime-events";

type WeaveRound = {
  id: string;
  scene: string;
  clue: string;
  stems: string[];
  endings: string[];
  answer: { stem: string; ending: string; word: string };
};

type Phase = "ready" | "playing" | "feedback" | "complete";

const TOTAL_ROUNDS = 8;

const ROUNDS: WeaveRound[] = [
  {
    id: "hop-rabbit",
    scene: "The rabbit can ___ over the log.",
    clue: "Pick the word that matches the jumping action.",
    stems: ["ju", "ho", "sl"],
    endings: ["mp", "op", "ide"],
    answer: { stem: "ho", ending: "op", word: "hop" },
  },
  {
    id: "glow-lantern",
    scene: "At dusk, the lantern starts to ___.",
    clue: "Choose the word that means to shine softly.",
    stems: ["gl", "dr", "pl"],
    endings: ["ow", "ip", "an"],
    answer: { stem: "gl", ending: "ow", word: "glow" },
  },
  {
    id: "sail-boat",
    scene: "The little boat will ___ across the lake.",
    clue: "Choose the smooth water travel word.",
    stems: ["sa", "br", "cr"],
    endings: ["ail", "ash", "imp"],
    answer: { stem: "sa", ending: "ail", word: "sail" },
  },
  {
    id: "bloom-garden",
    scene: "By springtime, the flowers will ___.",
    clue: "Choose the word for opening petals.",
    stems: ["bl", "sn", "cl"],
    endings: ["ip", "oom", "ap"],
    answer: { stem: "bl", ending: "oom", word: "bloom" },
  },
  {
    id: "drift-cloud",
    scene: "The cloud will ___ above the hill.",
    clue: "Choose the gentle floating word.",
    stems: ["dr", "sp", "cl"],
    endings: ["ift", "in", "asp"],
    answer: { stem: "dr", ending: "ift", word: "drift" },
  },
  {
    id: "shine-star",
    scene: "At night, the brightest star will ___.",
    clue: "Choose the word for bright light.",
    stems: ["sh", "tr", "sw"],
    endings: ["ine", "eep", "irl"],
    answer: { stem: "sh", ending: "ine", word: "shine" },
  },
  {
    id: "swoop-owl",
    scene: "The owl can ___ down without a sound.",
    clue: "Choose the word for a smooth fast dive.",
    stems: ["fr", "sw", "pl"],
    endings: ["oop", "ame", "uck"],
    answer: { stem: "sw", ending: "oop", word: "swoop" },
  },
  {
    id: "snuggle-pup",
    scene: "The sleepy pup wants to ___ in the blanket.",
    clue: "Choose the cozy cuddle word.",
    stems: ["sn", "cr", "fl"],
    endings: ["uggle", "ash", "oat"],
    answer: { stem: "sn", ending: "uggle", word: "snuggle" },
  },
];

export default function FireflyWordWeave() {
  const { setMessage, setMood } = useMascot();
  const [phase, setPhase] = useState<Phase>("ready");
  const [roundIndex, setRoundIndex] = useState(0);
  const [selectedStem, setSelectedStem] = useState<string | null>(null);
  const [selectedEnding, setSelectedEnding] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; builtWord: string } | null>(null);
  const sessionIdRef = useRef(createLegacySessionId());
  const startedAtRef = useRef(0);
  const interactionCountRef = useRef(0);

  const round = ROUNDS[roundIndex] ?? ROUNDS[0];

  const startGame = useCallback(() => {
    sessionIdRef.current = createLegacySessionId();
    startedAtRef.current = Date.now();
    interactionCountRef.current = 0;
    setPhase("playing");
    setRoundIndex(0);
    setSelectedStem(null);
    setSelectedEnding(null);
    setFeedback(null);
    setScore(0);
    setStreak(0);
    setMood("happy");
    setMessage("Catch a stem and an ending to weave a word that fits the sentence.");
    void hapticSelection();
  }, [setMessage, setMood]);

  const advanceRound = useCallback((correct: boolean, nextScore: number) => {
    const isLast = roundIndex >= TOTAL_ROUNDS - 1;
    if (isLast) {
      setPhase("complete");
      setMood(correct ? "cheering" : "happy");
      setMessage(correct ? "Your lantern story is shining brightly." : "Your lantern story still has lovely new words to try.");
      emitLegacyGameComplete({
        sessionId: sessionIdRef.current,
        gameId: "firefly-word-weave",
        elapsedMs: Math.max(0, Date.now() - startedAtRef.current),
        interactions: Math.max(1, interactionCountRef.current),
        score: nextScore,
        maxScore: TOTAL_ROUNDS * 15,
        difficulty: "easy",
        source: "component",
        occurredAt: new Date().toISOString(),
      });
      return;
    }

    setRoundIndex((value) => value + 1);
    setSelectedStem(null);
    setSelectedEnding(null);
    setFeedback(null);
    setPhase("playing");
  }, [roundIndex, setMessage, setMood]);

  const evaluate = useCallback((stem: string, ending: string) => {
    const builtWord = `${stem}${ending}`;
    const correct = stem === round.answer.stem && ending === round.answer.ending;
    const nextScore = score + (correct ? 15 : 0);
    setFeedback({ correct, builtWord });
    setPhase("feedback");
    setScore(nextScore);
    setStreak((value) => (correct ? value + 1 : 0));
    setMood(correct ? "happy" : "thinking");
    setMessage(correct ? `${builtWord} fits perfectly.` : `${builtWord} does not match the clue. ${round.answer.word} was the best fit.`);
    if (correct) {
      if (streak + 1 >= 3) {
        void hapticCelebration();
      } else {
        void hapticSuccess();
      }
    } else {
      void hapticError();
    }
    window.setTimeout(() => advanceRound(correct, nextScore), 1200);
  }, [advanceRound, round, score, setMessage, setMood, streak]);

  const chooseStem = useCallback((stem: string) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;
    setSelectedStem(stem);
    void hapticSelection();
    if (selectedEnding) {
      evaluate(stem, selectedEnding);
    }
  }, [evaluate, phase, selectedEnding]);

  const chooseEnding = useCallback((ending: string) => {
    if (phase !== "playing") return;
    interactionCountRef.current += 1;
    setSelectedEnding(ending);
    void hapticSelection();
    if (selectedStem) {
      evaluate(selectedStem, ending);
    }
  }, [evaluate, phase, selectedStem]);

  useEffect(() => {
    if (phase === "playing") {
      setMessage(round.clue);
    }
  }, [phase, round.clue, setMessage]);

  return (
    <div className="relative overflow-hidden rounded-[2.6rem] border border-sky-200/60 bg-[linear-gradient(180deg,#0f1733_0%,#182552_42%,#26346f_100%)] p-6 text-white shadow-[0_24px_90px_rgba(17,24,39,0.35)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.2),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,211,252,0.18),transparent_34%)]" />
      <div className="relative z-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-amber-200">Lantern Literacy</p>
            <h2 className="text-3xl font-black tracking-tight text-white">Firefly Word Weave</h2>
          </div>
          <JuicyStreak count={streak} />
        </div>

        <AnimatePresence mode="wait">
          {phase === "ready" ? (
            <motion.section
              key="ready"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <div className="mx-auto flex w-fit items-center gap-3 rounded-full bg-amber-300/10 px-5 py-3 text-amber-100">
                <Bug className="h-5 w-5" />
                <span className="text-sm font-black uppercase tracking-[0.2em]">Weave a word from a stem and ending</span>
              </div>
              <div className="mt-6 flex justify-center">
                <MascotFriend id="luna" mood="happy" size="lg" />
              </div>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-sky-100/80">
                Each sentence has one missing word. Catch the right glowing beginning and ending, then weave them together into the best answer for the scene.
              </p>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Light the Lanterns
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}

          {phase === "playing" || phase === "feedback" ? (
            <motion.section
              key={round.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid gap-5 lg:grid-cols-[1fr_1fr]"
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Round {roundIndex + 1}/{TOTAL_ROUNDS}</p>
                <div className="mt-5 rounded-[1.5rem] bg-black/20 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-100/50">Story line</p>
                  <p className="mt-3 text-2xl font-black leading-relaxed text-white">{round.scene}</p>
                  <p className="mt-4 text-sm text-sky-100/75">{round.clue}</p>
                </div>

                <div className="mt-6 rounded-[1.5rem] bg-amber-300/10 p-5">
                  <div className="flex items-center gap-2 text-amber-100">
                    <BookText className="h-4 w-4" />
                    <span className="text-xs font-black uppercase tracking-[0.18em]">Current weave</span>
                  </div>
                  <p className="mt-3 text-4xl font-black tracking-[0.08em] text-white">
                    {(selectedStem ?? "__") + (selectedEnding ?? "__")}
                  </p>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-100/50">Beginning fireflies</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {round.stems.map((stem) => (
                      <button
                        key={stem}
                        type="button"
                        disabled={phase !== "playing"}
                        onClick={() => chooseStem(stem)}
                        className={`rounded-[1.5rem] border px-4 py-5 text-center transition ${selectedStem === stem ? "border-amber-300 bg-amber-300/15 text-amber-100" : "border-white/10 bg-black/15 text-white hover:border-sky-200/50 hover:bg-white/10"}`}
                      >
                        <Bug className="mx-auto mb-2 h-5 w-5" />
                        <span className="text-3xl font-black tracking-[0.1em]">{stem}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-sky-100/50">Ending lantern ribbons</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {round.endings.map((ending) => (
                      <button
                        key={ending}
                        type="button"
                        disabled={phase !== "playing"}
                        onClick={() => chooseEnding(ending)}
                        className={`rounded-[1.5rem] border px-4 py-5 text-center transition ${selectedEnding === ending ? "border-amber-300 bg-amber-300/15 text-amber-100" : "border-white/10 bg-black/15 text-white hover:border-sky-200/50 hover:bg-white/10"}`}
                      >
                        <Sparkles className="mx-auto mb-2 h-5 w-5" />
                        <span className="text-3xl font-black tracking-[0.08em]">{ending}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {feedback ? (
                  <div className={`mt-5 rounded-[1.5rem] px-4 py-4 text-sm font-bold ${feedback.correct ? "bg-emerald-300/15 text-emerald-100" : "bg-rose-300/15 text-rose-100"}`}>
                    {feedback.correct ? `Beautiful choice. ${feedback.builtWord} fits the scene.` : `${feedback.builtWord} is close, but ${round.answer.word} matched the clue best.`}
                  </div>
                ) : null}
              </div>
            </motion.section>
          ) : null}

          {phase === "complete" ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur"
            >
              <div className="flex justify-center">
                <MascotFriend id="luna" mood={score >= 90 ? "cheering" : "happy"} size="lg" />
              </div>
              <h3 className="mt-4 text-3xl font-black text-white">Lantern Story Complete</h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-sky-100/80">
                You wove glowing words into every scene and helped the fireflies carry a brighter bedtime story across the sky.
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <div className="rounded-2xl bg-black/20 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Score</p>
                  <p className="mt-1 text-3xl font-black text-white">{score}</p>
                </div>
                <div className="rounded-2xl bg-black/20 px-5 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">Streak</p>
                  <p className="mt-1 text-3xl font-black text-white">{streak}</p>
                </div>
              </div>
              <div className="mt-8">
                <PhysicalButton onClick={startGame} className="h-12 bg-amber-400 px-8 text-sm font-black text-slate-950">
                  Weave Again
                </PhysicalButton>
              </div>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
