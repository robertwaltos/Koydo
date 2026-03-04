"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DailyChallengeCard } from "@/components/gamification";
import { GAME_CATALOG, type GameCategory } from "@/lib/games/catalog";
import type { GameDifficulty, GameType } from "@/lib/games/types";

const CATEGORY_META: Record<
  string,
  { label: string; icon: string }
> = {
  all: { label: "All Games", icon: "🎮" },
  arcade: { label: "Arcade", icon: "🚀" },
  adventure: { label: "Adventure", icon: "🧭" },
  literacy: { label: "Literacy", icon: "📚" },
  math: { label: "Math", icon: "🔢" },
  literacy: { label: "Literacy", icon: "📚" },
  science: { label: "Science", icon: "🔬" },
  geography: { label: "Geography", icon: "🌍" },
  chemistry: { label: "Chemistry", icon: "⚗️" },
  physics: { label: "Physics", icon: "⚡" },
  history: { label: "History", icon: "📜" },
  coding: { label: "Coding", icon: "💻" },
  music: { label: "Music", icon: "🎵" },
  logic: { label: "Logic", icon: "🧩" },
  language: { label: "Language", icon: "🌐" },
  creative: { label: "Creative", icon: "🎨" },
  science: { label: "Science", icon: "🧪" },
};

type LearnerProfile = {
  id: string;
  displayName: string;
  ageYears: number | null;
};

type DailyChallenge = {
  id: string;
  title: string;
  description: string;
  gameType: GameType;
  difficulty: GameDifficulty;
  rewardPoints: number;
};

export default function GamesHubPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [learnerAge, setLearnerAge] = useState<number>(10);
  const [profiles, setProfiles] = useState<LearnerProfile[]>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<string>("");
  const [dailyChallenge, setDailyChallenge] = useState<DailyChallenge | null>(null);
  const [dailyCompleted, setDailyCompleted] = useState(false);
  const [dailyStatus, setDailyStatus] = useState<string>("");
  const [isDailyLoading, setIsDailyLoading] = useState<boolean>(true);

  const filtered = useMemo(
    () => (
      activeCategory === "all"
        ? GAME_CATALOG
        : GAME_CATALOG.filter((g) => g.category === (activeCategory as GameCategory))
    ),
    [activeCategory],
  );

  useEffect(() => {
    let active = true;
    const loadProfiles = async () => {
      const response = await fetch("/api/games/profiles", { cache: "no-store" });
      const payload = (await response.json().catch(() => ({}))) as {
        profiles?: LearnerProfile[];
      };
      if (!active || !response.ok || !Array.isArray(payload.profiles)) return;

      setProfiles(payload.profiles);
      const preferred = payload.profiles[0] ?? null;
      if (!preferred) return;
      setSelectedProfileId(preferred.id);
      if (typeof preferred.ageYears === "number") {
        setLearnerAge(preferred.ageYears);
      }
    };

    void loadProfiles();
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;
    const loadDailyChallenge = async () => {
      if (!selectedProfileId) {
        setIsDailyLoading(false);
        setDailyChallenge(null);
        setDailyCompleted(false);
        setDailyStatus("Select a learner profile to load daily challenge.");
        return;
      }

      setIsDailyLoading(true);
      setDailyStatus("");
      const params = new URLSearchParams({
        studentProfileId: selectedProfileId,
      });
      const response = await fetch(`/api/games/daily-challenge?${params.toString()}`, {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => ({}))) as {
        challenge?: DailyChallenge;
        completed?: boolean;
        error?: string;
      };
      if (!active) return;

      if (!response.ok) {
        setDailyChallenge(null);
        setDailyCompleted(false);
        setDailyStatus(payload.error ?? "Could not load daily challenge.");
        setIsDailyLoading(false);
        return;
      }

      setDailyChallenge(payload.challenge ?? null);
      setDailyCompleted(Boolean(payload.completed));
      setDailyStatus("");
      setIsDailyLoading(false);
    };

    void loadDailyChallenge();
    return () => {
      active = false;
    };
  }, [selectedProfileId]);

  const playDailyChallenge = () => {
    if (!dailyChallenge || !selectedProfileId) return;
    const params = new URLSearchParams({
      difficulty: dailyChallenge.difficulty,
      daily: "1",
      studentProfileId: selectedProfileId,
    });
    router.push(`/games/${dailyChallenge.gameType}?${params.toString()}`);
  };

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-black tracking-tight text-stone-800">
          Game Zone
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          {GAME_CATALOG.length} games live: core learning titles + Gemini legacy missions + immersive 4K-ready arcade experiences.
        </p>
      </header>

      <section className="mb-6 rounded-2xl border border-stone-200 bg-white p-4">
        {isDailyLoading ? (
          <p className="text-sm text-stone-500">Loading today&apos;s challenge...</p>
        ) : (
          <DailyChallengeCard
            challenge={dailyChallenge}
            completed={dailyCompleted}
            onPlay={dailyCompleted ? undefined : playDailyChallenge}
          />
        )}
        {dailyStatus ? (
          <p className="mt-2 text-xs text-stone-500">{dailyStatus}</p>
        ) : null}
      </section>

      <div className="mb-4 rounded-2xl border border-stone-200 bg-white p-3">
        <div className="mb-3 grid gap-2 sm:grid-cols-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            Learner profile
            <select
              value={selectedProfileId}
              onChange={(event) => {
                const nextProfileId = event.target.value;
                setSelectedProfileId(nextProfileId);
                const profile = profiles.find((entry) => entry.id === nextProfileId);
                if (profile && typeof profile.ageYears === "number") {
                  setLearnerAge(profile.ageYears);
                }
              }}
              className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm font-medium text-stone-700"
            >
              {profiles.length === 0 ? <option value="">No learner profiles found</option> : null}
              {profiles.map((profile) => (
                <option key={profile.id} value={profile.id}>
                  {profile.displayName} {typeof profile.ageYears === "number" ? `(Age ${profile.ageYears})` : "(Age n/a)"}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide text-stone-500">
          Learner age filter
          <span className="rounded-full bg-stone-100 px-2 py-1 text-stone-700">Age {learnerAge}</span>
        </label>
        <input
          type="range"
          min={3}
          max={17}
          value={learnerAge}
          onChange={(event) => setLearnerAge(Number(event.target.value))}
          className="mt-2 w-full"
        />
        <p className="mt-1 text-[11px] text-stone-500">
          Games outside this age range are age-locked and require guardian unlock on entry.
        </p>
      </div>

      <div
        className="mb-6 flex items-center gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((key) => {
          const meta = CATEGORY_LABELS[key] ?? { label: key, icon: "📦" };
          const count =
            key === "all"
              ? catalog.length
              : catalog.filter((g) => g.category === key).length;
          return (
            <button
              key={key}
              type="button"
              onClick={() => handleCategoryChange(key)}
              className={`ui-focus-ring flex-shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeCategory === key
                  ? "border-stone-800 bg-stone-800 text-white shadow-sm"
                  : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50"
              }`}
            >
              <span className="mr-1">{meta.icon}</span>
              {meta.label}
              <span className="ml-1.5 text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((game) => (
          <Link
            key={game.id}
            href={`/games/${game.id}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div
              className={`flex h-28 items-center justify-center bg-gradient-to-br ${game.color}`}
            >
              <span className="text-5xl transition-transform duration-200 group-hover:scale-110">
                {game.icon}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-3.5">
              <h2 className="text-sm font-bold text-stone-800">
                {game.title}
              </h2>
              <p className="mt-1 flex-1 text-xs leading-relaxed text-stone-500">
                {game.description}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[10px] font-semibold text-stone-400">
                  Ages {game.ageMin}-{game.ageMax}
                </span>
                <span className="rounded-full border border-stone-200 bg-stone-50 px-2 py-0.5 text-[10px] font-semibold capitalize text-stone-500">
                  {game.category}
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px]">
                <span className="rounded-full bg-stone-100 px-2 py-0.5 font-semibold text-stone-600">
                  {game.mode === "core" ? "Scored Core Game" : game.mode === "legacy" ? "Gemini Legacy Game" : "Immersive Arcade"}
                </span>
                <span className="rounded-full bg-stone-100 px-2 py-0.5 font-semibold text-stone-600">
                  {game.mechanic}
                </span>
                {learnerAge < game.ageMin || learnerAge > game.ageMax ? (
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">
                    Age-Locked
                  </span>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
