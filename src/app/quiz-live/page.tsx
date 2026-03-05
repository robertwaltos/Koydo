"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type Question = { question: string; options: string[]; answer: number };
type Game = {
  id: string;
  host_id: string;
  subject: string;
  questions: Question[];
  status: string;
  player_count: number;
  created_at: string;
};

const SUBJECTS = ["math", "science", "history", "english"];

export default function QuizLivePage() {
  const { allowed: featureAllowed, isLoading: featureLoading } = useFeature("quiz_live_multiplayer");
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startTime] = useState(Date.now());
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    fetch("/api/quiz-live")
      .then((r) => r.json())
      .then((d) => setGames(d.games ?? []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const createGame = async (subject: string) => {
    setCreating(true);
    try {
      const res = await fetch("/api/quiz-live", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "create", subject, questionCount: 5 }),
      });
      const data = await res.json();
      if (data.game) {
        setActiveGame(data.game);
        setCurrentQ(0);
        setScore(0);
        setGameOver(false);
      }
    } catch {}
    setCreating(false);
  };

  const joinGame = async (game: Game) => {
    await fetch("/api/quiz-live", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "join", gameId: game.id, currentCount: game.player_count }),
    });
    setActiveGame(game);
    setCurrentQ(0);
    setScore(0);
    setGameOver(false);
  };

  const selectAnswer = useCallback((optionIdx: number) => {
    if (selected !== null || !activeGame) return;
    setSelected(optionIdx);
    const correct = activeGame.questions[currentQ].answer === optionIdx;
    if (correct) setScore((s) => s + 1);
    setShowResult(true);

    setTimeout(() => {
      if (currentQ + 1 >= activeGame.questions.length) {
        setGameOver(true);
        // Submit score
        fetch("/api/quiz-live", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "submit-score",
            gameId: activeGame.id,
            score: score + (correct ? 1 : 0),
            totalQuestions: activeGame.questions.length,
            timeMs: Date.now() - startTime,
          }),
        }).catch(() => {});
      } else {
        setCurrentQ((q) => q + 1);
        setSelected(null);
        setShowResult(false);
      }
    }, 1500);
  }, [selected, activeGame, currentQ, score, startTime]);

  // Playing a game
  if (activeGame && !gameOver) {
    const q = activeGame.questions[currentQ];
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-12">
        <div className="w-full flex items-center justify-between">
          <span className="text-xs text-foreground/40">
            Q{currentQ + 1}/{activeGame.questions.length}
          </span>
          <span className="text-xs font-bold text-accent">Score: {score}</span>
        </div>
        <div className="h-2 w-full rounded-full bg-border/30 overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all"
            style={{ width: `${((currentQ + 1) / activeGame.questions.length) * 100}%` }}
          />
        </div>

        <SoftCard className="w-full p-6 text-center">
          <h2 className="text-lg font-bold text-foreground">{q.question}</h2>
        </SoftCard>

        <div className="grid w-full gap-3 sm:grid-cols-2">
          {q.options.map((opt, i) => {
            let cls = "border border-border hover:border-accent/30 text-foreground";
            if (showResult) {
              if (i === q.answer) cls = "border-2 border-green-500 bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-400";
              else if (i === selected && i !== q.answer) cls = "border-2 border-red-400 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400";
            }
            return (
              <button
                key={i}
                type="button"
                onClick={() => selectAnswer(i)}
                disabled={selected !== null}
                className={`rounded-xl p-4 text-sm font-medium transition ${cls}`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </main>
    );
  }

  // Game over
  if (activeGame && gameOver) {
    const pct = Math.round((score / activeGame.questions.length) * 100);
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 px-6 py-12">
        <SoftCard className="w-full p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {pct >= 80 ? "\u{1F389} Great Job!" : pct >= 50 ? "\u{1F44D} Good Effort!" : "\u{1F4AA} Keep Practicing!"}
          </h2>
          <p className="text-4xl font-bold text-accent mb-2">{score}/{activeGame.questions.length}</p>
          <p className="text-sm text-foreground/50">{pct}% correct</p>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => { setActiveGame(null); setGameOver(false); }}
              className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white"
            >
              Play Again
            </button>
            <Link
              href="/dashboard"
              className="rounded-full border border-border px-6 py-2.5 text-sm font-medium text-foreground/60"
            >
              Dashboard
            </Link>
          </div>
        </SoftCard>
      </main>
    );
  }

  // Feature gate
  if (featureLoading) return null;
  if (!featureAllowed) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-foreground/50">Live Quiz is not available for your account.</p>
      </main>
    );
  }

  // Lobby
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Live Quiz</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Live Quiz Games</h1>
      <p className="text-sm text-foreground/60">
        Test your knowledge in fast-paced quiz games. Compete with others for the top score!
      </p>

      {/* Start a new game */}
      <SoftCard className="p-5">
        <h3 className="text-sm font-bold text-foreground mb-3">Start a New Game</h3>
        <div className="flex flex-wrap gap-2">
          {SUBJECTS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => createGame(s)}
              disabled={creating}
              className="rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/20 capitalize disabled:opacity-40"
            >
              {s}
            </button>
          ))}
        </div>
      </SoftCard>

      {/* Active games to join */}
      <h2 className="text-base font-bold text-foreground">Active Games</h2>
      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading...</p>
      ) : games.length === 0 ? (
        <p className="text-sm text-foreground/40">No active games. Start one above!</p>
      ) : (
        <div className="space-y-2">
          {games.map((g) => (
            <SoftCard
              key={g.id}
              className="cursor-pointer p-4 transition hover:border-accent/30"
              onClick={() => joinGame(g)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-foreground capitalize">{g.subject} Quiz</p>
                  <p className="text-[11px] text-foreground/40">
                    {g.questions.length} questions &middot; {g.player_count} player{g.player_count !== 1 ? "s" : ""}
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400">
                  {g.status}
                </span>
              </div>
            </SoftCard>
          ))}
        </div>
      )}
    </main>
  );
}
