"use client";

type StreakCalendarProps = {
  dailyStreak: number;
  weeklyStreak: number;
  lastActivityAt?: string | null;
};

function getDayLabels() {
  return ["M", "T", "W", "T", "F", "S", "S"];
}

function getStreakDots(streak: number, max: number = 7) {
  const capped = Math.min(streak, max);
  return Array.from({ length: max }, (_, i) => i < capped);
}

function getStreakMessage(daily: number): string {
  if (daily === 0) return "Start a streak today!";
  if (daily === 1) return "1 day streak! Keep going!";
  if (daily < 7) return `${daily} day streak!`;
  if (daily < 30) return `${daily} day streak! Amazing!`;
  return `${daily} day streak! Unstoppable!`;
}

function getStreakEmoji(daily: number): string {
  if (daily === 0) return "💤";
  if (daily < 3) return "🔥";
  if (daily < 7) return "🔥🔥";
  if (daily < 30) return "💫";
  return "🏆";
}

export function StreakCalendar({
  dailyStreak,
  weeklyStreak,
  lastActivityAt,
}: StreakCalendarProps) {
  const days = getDayLabels();
  const dots = getStreakDots(dailyStreak);
  const isActiveToday = lastActivityAt
    ? new Date(lastActivityAt).toDateString() === new Date().toDateString()
    : false;

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-bold text-stone-700">Streak</h3>
        <span className="text-lg">{getStreakEmoji(dailyStreak)}</span>
      </div>

      <div className="mb-3 flex justify-between gap-1">
        {days.map((label, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-[10px] font-medium text-stone-400">
              {label}
            </span>
            <div
              className={`h-6 w-6 rounded-full transition-all ${
                dots[i]
                  ? "bg-gradient-to-br from-orange-400 to-red-500 shadow-sm"
                  : "border border-dashed border-stone-200 bg-stone-50"
              }`}
            />
          </div>
        ))}
      </div>

      <p className="text-center text-xs font-medium text-stone-600">
        {getStreakMessage(dailyStreak)}
      </p>

      <div className="mt-2 flex items-center justify-between text-[10px] text-stone-400">
        <span>
          Week streak: {weeklyStreak}
        </span>
        {isActiveToday && (
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-600">
            Active today
          </span>
        )}
      </div>
    </div>
  );
}
