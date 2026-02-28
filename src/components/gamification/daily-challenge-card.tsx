"use client";

type DailyChallengeCardProps = {
  challenge: {
    id: string;
    title: string;
    description: string;
    gameType: string;
    difficulty: string;
    rewardPoints: number;
  } | null;
  completed?: boolean;
  onPlay?: () => void;
};

export function DailyChallengeCard({
  challenge,
  completed = false,
  onPlay,
}: DailyChallengeCardProps) {
  if (!challenge) {
    return (
      <div className="rounded-2xl border border-dashed border-stone-200 p-5 text-center">
        <p className="text-2xl">🌟</p>
        <p className="mt-2 text-sm text-stone-400">
          No challenge available right now. Check back tomorrow!
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border p-5 shadow-sm transition-all ${
        completed
          ? "border-emerald-200 bg-emerald-50"
          : "border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50"
      }`}
    >
      <div className="mb-3 flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-amber-600">
            Daily Challenge
          </p>
          <h3 className="mt-1 text-base font-bold text-stone-800">
            {challenge.title}
          </h3>
        </div>
        <span className="text-2xl">{completed ? "✅" : "🎯"}</span>
      </div>

      <p className="mb-3 text-sm text-stone-600">{challenge.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-stone-500">
          <span className="rounded-full bg-white/80 px-2 py-0.5 font-medium">
            {challenge.difficulty}
          </span>
          <span className="font-bold text-amber-600">
            +{challenge.rewardPoints} pts
          </span>
        </div>

        {!completed && onPlay && (
          <button
            type="button"
            onClick={onPlay}
            className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 text-xs font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
          >
            Play Now
          </button>
        )}

        {completed && (
          <span className="text-xs font-bold text-emerald-600">
            Completed!
          </span>
        )}
      </div>
    </div>
  );
}
