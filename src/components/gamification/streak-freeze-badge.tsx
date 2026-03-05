"use client";

import { useCallback, useEffect, useState } from "react";

type StreakFreezeState = {
  freezesAvailable: number;
  lastFreezeUsedAt: string | null;
};

export default function StreakFreezeBadge() {
  const [state, setState] = useState<StreakFreezeState>({
    freezesAvailable: 0,
    lastFreezeUsedAt: null,
  });
  const [using, setUsing] = useState(false);

  const fetchState = useCallback(async () => {
    try {
      const res = await fetch("/api/gamification/streak-freeze");
      if (!res.ok) return;
      const data = await res.json();
      setState({
        freezesAvailable: data.freezesAvailable ?? 0,
        lastFreezeUsedAt: data.lastFreezeUsedAt ?? null,
      });
    } catch {
      // non-critical
    }
  }, []);

  useEffect(() => { fetchState(); }, [fetchState]);

  const useFreeze = async () => {
    if (state.freezesAvailable <= 0 || using) return;
    setUsing(true);
    try {
      const res = await fetch("/api/gamification/streak-freeze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "use" }),
      });
      if (res.ok) {
        const data = await res.json();
        setState((prev) => ({
          ...prev,
          freezesAvailable: data.freezesAvailable ?? prev.freezesAvailable - 1,
          lastFreezeUsedAt: new Date().toISOString(),
        }));
      }
    } catch {
      // ignore
    } finally {
      setUsing(false);
    }
  };

  if (state.freezesAvailable <= 0) return null;

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={useFreeze}
        disabled={using}
        className="ui-focus-ring inline-flex items-center gap-1 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-700 transition hover:bg-cyan-100 dark:border-cyan-800 dark:bg-cyan-950/40 dark:text-cyan-300 dark:hover:bg-cyan-900/50"
        title="Use a streak freeze to protect your streak if you miss a day"
      >
        <span aria-hidden="true">🛡️</span>
        <span>{state.freezesAvailable} freeze{state.freezesAvailable !== 1 ? "s" : ""}</span>
      </button>
    </div>
  );
}
