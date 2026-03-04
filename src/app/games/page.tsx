"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { DailyChallengeCard } from "@/components/gamification";
import { GAME_CATALOG, type GameCategory } from "@/lib/games/catalog";
import type { RewardRealmMasterySnapshot } from "@/lib/games/reward-realm";
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
  logic: { label: "Logic", icon: "🧩" },
  creative: { label: "Creative", icon: "🎨" },
  science: { label: "Science", icon: "🔬" },
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

type RewardRealmStatus = {
  unlocked: boolean;
  mastery: RewardRealmMasterySnapshot;
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
  const [rewardRealm, setRewardRealm] = useState<RewardRealmStatus | null>(null);
  const [isRewardRealmLoading, setIsRewardRealmLoading] = useState<boolean>(true);
  const [rewardRealmStatus, setRewardRealmStatus] = useState<string>("");
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(GAME_CATALOG.map((game) => game.category)))],
    [],
  );

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

  useEffect(() => {
    let active = true;
    const loadRewardRealmStatus = async () => {
      if (!selectedProfileId) {
        setIsRewardRealmLoading(false);
        setRewardRealm(null);
        setRewardRealmStatus("Select a learner profile to evaluate Reward Realm unlock progress.");
        return;
      }

      setIsRewardRealmLoading(true);
      setRewardRealmStatus("");
      const params = new URLSearchParams({
        studentProfileId: selectedProfileId,
      });
      const response = await fetch(`/api/games/reward-realm/status?${params.toString()}`, {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => ({}))) as {
        unlocked?: boolean;
        mastery?: RewardRealmMasterySnapshot;
        error?: string;
      };

      if (!active) return;
      if (!response.ok || !payload.mastery) {
        setRewardRealm(null);
        setRewardRealmStatus(payload.error ?? "Could not load Reward Realm unlock progress.");
        setIsRewardRealmLoading(false);
        return;
      }

      setRewardRealm({
        unlocked: Boolean(payload.unlocked),
        mastery: payload.mastery,
      });
      setRewardRealmStatus("");
      setIsRewardRealmLoading(false);
    };

    void loadRewardRealmStatus();
    return () => {
      active = false;
    };
  }, [selectedProfileId]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const playDailyChallenge = () => {
    if (!dailyChallenge || !selectedProfileId) return;
    const params = new URLSearchParams({
      difficulty: dailyChallenge.difficulty,
      daily: "1",
      studentProfileId: selectedProfileId,
    });
    router.push(`/games/${dailyChallenge.gameType}?${params.toString()}`);
  };

  const buildGameHref = (gameId: string) => {
    if (!selectedProfileId) return `/games/${gameId}`;
    const params = new URLSearchParams({ studentProfileId: selectedProfileId });
    return `/games/${gameId}?${params.toString()}`;
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

      <section className="mb-4 rounded-2xl border border-stone-200 bg-white p-3">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-stone-500">
            Reward Realm Gate
          </h2>
          <span
            className={`rounded-full px-2 py-1 text-[10px] font-bold ${
              rewardRealm?.unlocked
                ? "bg-emerald-100 text-emerald-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {rewardRealm?.unlocked ? "Unlocked" : "Locked"}
          </span>
        </div>
        {isRewardRealmLoading ? (
          <p className="mt-2 text-xs text-stone-500">Checking educational mastery progress...</p>
        ) : rewardRealm ? (
          <div className="mt-2 grid gap-2 text-[11px] text-stone-600 sm:grid-cols-2">
            <p>
              Educational runs: {rewardRealm.mastery.progress.educationalRuns}/
              {rewardRealm.mastery.policy.minEducationalRuns}
            </p>
            <p>
              Distinct educational games: {rewardRealm.mastery.progress.distinctEducationalGames}/
              {rewardRealm.mastery.policy.minDistinctEducationalGames}
            </p>
            <p>
              Perfect educational runs: {rewardRealm.mastery.progress.perfectEducationalRuns}/
              {rewardRealm.mastery.policy.minPerfectEducationalRuns}
            </p>
            <p>
              Avg stars: {rewardRealm.mastery.progress.averageEducationalStars.toFixed(2)}/
              {rewardRealm.mastery.policy.minAverageEducationalStars.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="mt-2 text-xs text-stone-500">{rewardRealmStatus}</p>
        )}
      </section>

      <div
        className="mb-6 flex items-center gap-2 overflow-x-auto pb-1"
        style={{ scrollbarWidth: "none" }}
      >
        {categories.map((key) => {
          const meta = CATEGORY_META[key] ?? { label: key, icon: "📦" };
          const count =
            key === "all"
              ? GAME_CATALOG.length
              : GAME_CATALOG.filter((g) => g.category === key).length;
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
        {filtered.map((game) => {
          const ageLocked = learnerAge < game.ageMin || learnerAge > game.ageMax;
          const rewardLocked = game.track === "Reward Realm" && !rewardRealm?.unlocked;
          const cardClassName = [
            "group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-200",
            rewardLocked ? "opacity-90" : "hover:-translate-y-0.5 hover:shadow-lg",
          ].join(" ");

          const cardBody = (
            <>
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
                  <span className={`rounded-full px-2 py-0.5 font-semibold ${
                    game.track === "Reward Realm"
                      ? "bg-indigo-100 text-indigo-700"
                      : "bg-emerald-100 text-emerald-700"
                  }`}
                  >
                    {game.track === "Reward Realm" ? "Reward Realm" : "Educational Core"}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-[10px]">
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 font-semibold text-stone-600">
                    {game.mechanic}
                  </span>
                  {ageLocked ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">
                      Age-Locked
                    </span>
                  ) : null}
                  {rewardLocked ? (
                    <span className="rounded-full bg-amber-100 px-2 py-0.5 font-semibold text-amber-700">
                      Reward Locked
                    </span>
                  ) : null}
                </div>
              </div>
            </>
          );

          if (rewardLocked) {
            return (
              <article key={game.id} className={cardClassName}>
                {cardBody}
              </article>
            );
          }

          return (
            <Link
              key={game.id}
              href={buildGameHref(game.id)}
              className={cardClassName}
            >
              {cardBody}
            </Link>
          );
        })}
      </div>
    </main>
  );
}
