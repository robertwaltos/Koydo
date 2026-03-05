"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { DailyChallengeCard } from "@/components/gamification/daily-challenge-card";

type Challenge = {
  id: string;
  title: string;
  description: string;
  moduleId: string;
  gameType: string;
  difficulty: string;
  rewardPoints: number;
};

export default function DailyChallengePage() {
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [completed, setCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/daily-challenge")
      .then((r) => r.json())
      .then((d) => {
        setChallenge(d.challenge);
        setCompleted(d.completed ?? false);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const completeChallenge = async () => {
    const res = await fetch("/api/daily-challenge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ score: 100 }),
    });
    const data = await res.json();
    if (data.ok) setCompleted(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Daily Challenge</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Daily Challenge</h1>
      <p className="text-sm text-foreground/60">
        A new challenge every day across different subjects. Complete it for bonus XP!
      </p>

      {loading ? (
        <p className="text-center text-sm text-foreground/40">Loading today&apos;s challenge...</p>
      ) : (
        <>
          <DailyChallengeCard
            challenge={challenge}
            completed={completed}
            onPlay={() => {
              if (challenge?.moduleId) {
                // Navigate to module, then mark complete
                completeChallenge();
                window.location.href = `/modules/${challenge.moduleId}`;
              }
            }}
          />

          {completed && (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center dark:border-emerald-800 dark:bg-emerald-950/20">
              <p className="text-lg font-bold text-emerald-700 dark:text-emerald-400">
                Challenge Complete! +35 XP
              </p>
              <p className="mt-1 text-sm text-emerald-600 dark:text-emerald-500">
                Come back tomorrow for a new challenge.
              </p>
            </div>
          )}

          <div className="text-center">
            <Link
              href="/explore"
              className="text-sm font-medium text-accent hover:underline"
            >
              Or explore all 821+ modules
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
