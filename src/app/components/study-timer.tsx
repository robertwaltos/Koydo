"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PRESETS = [
  { label: "15 min", seconds: 900 },
  { label: "25 min", seconds: 1500 },
  { label: "45 min", seconds: 2700 },
  { label: "60 min", seconds: 3600 },
];

export default function StudyTimer() {
  const [open, setOpen] = useState(false);
  const [running, setRunning] = useState(false);
  const [totalSeconds, setTotalSeconds] = useState(1500); // 25 min default
  const [remaining, setRemaining] = useState(1500);
  const [todayMinutes, setTodayMinutes] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);

  // Fetch today's study time
  useEffect(() => {
    fetch("/api/study-sessions")
      .then((r) => r.json())
      .then((d) => setTodayMinutes(d.todayMinutes ?? 0))
      .catch(() => {});
  }, []);

  // Timer tick
  useEffect(() => {
    if (running && remaining > 0) {
      intervalRef.current = setInterval(() => {
        setRemaining((r) => {
          if (r <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            // Record session
            const elapsed = totalSeconds;
            fetch("/api/study-sessions", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ durationSeconds: elapsed }),
            })
              .then((res) => res.json())
              .then(() => setTodayMinutes((m) => m + Math.round(elapsed / 60)))
              .catch(() => {});
            return 0;
          }
          return r - 1;
        });
      }, 1000);
      return () => clearInterval(intervalRef.current);
    }
  }, [running, remaining, totalSeconds]);

  const startTimer = useCallback((secs: number) => {
    setTotalSeconds(secs);
    setRemaining(secs);
    setRunning(true);
  }, []);

  const stop = useCallback(() => {
    clearInterval(intervalRef.current);
    const elapsed = totalSeconds - remaining;
    if (elapsed >= 60) {
      // Record partial session
      fetch("/api/study-sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ durationSeconds: elapsed }),
      })
        .then((res) => res.json())
        .then(() => setTodayMinutes((m) => m + Math.round(elapsed / 60)))
        .catch(() => {});
    }
    setRunning(false);
    setRemaining(totalSeconds);
  }, [totalSeconds, remaining]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  const progress = totalSeconds > 0 ? ((totalSeconds - remaining) / totalSeconds) * 100 : 0;

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="ui-focus-ring inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-[12px] font-medium text-foreground/60 transition hover:bg-accent/8"
        title="Study Timer"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="7" cy="7.5" r="5" stroke="currentColor" strokeWidth="1.3" />
          <path d="M7 4.5v3l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M5.5 1.5h3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
        {running ? formatTime(remaining) : `${todayMinutes}m today`}
      </button>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-surface p-4 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-foreground">Study Timer</h3>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-foreground/40 hover:text-foreground/70 text-xs"
        >
          Close
        </button>
      </div>

      {/* Progress ring */}
      <div className="flex flex-col items-center gap-3 mb-4">
        <div className="relative h-24 w-24">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" className="text-border/30" strokeWidth="6" />
            <circle
              cx="50" cy="50" r="42" fill="none" stroke="currentColor"
              className="text-accent transition-all duration-1000"
              strokeWidth="6" strokeLinecap="round"
              strokeDasharray={264}
              strokeDashoffset={264 - (264 * progress) / 100}
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-foreground tabular-nums">
            {formatTime(remaining)}
          </span>
        </div>

        {!running ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {PRESETS.map((p) => (
              <button
                key={p.seconds}
                type="button"
                onClick={() => startTimer(p.seconds)}
                className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-foreground/70 hover:bg-accent/10 transition"
              >
                {p.label}
              </button>
            ))}
          </div>
        ) : (
          <button
            type="button"
            onClick={stop}
            className="rounded-full bg-red-500/10 border border-red-300 px-4 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-500/20 transition"
          >
            Stop
          </button>
        )}
      </div>

      <p className="text-center text-[11px] text-foreground/40">
        Today: {todayMinutes} minutes studied
      </p>
    </div>
  );
}
