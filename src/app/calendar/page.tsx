"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type StudyPlanDay = {
  date: string;
  modules: { id: string; title: string; type: string }[];
};

type Session = {
  id: string;
  duration_seconds: number;
  subject: string | null;
  started_at: string;
};

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarPage() {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [sessions, setSessions] = useState<Session[]>([]);
  const [studyPlan, setStudyPlan] = useState<StudyPlanDay[]>([]);

  useEffect(() => {
    // Fetch study sessions for the calendar
    fetch("/api/study-sessions")
      .then((r) => r.json())
      .then((d) => setSessions(d.sessions ?? []))
      .catch(() => {});

    // Fetch AI study plan
    fetch("/api/ai/study-plan/week")
      .then((r) => r.json())
      .then((d) => setStudyPlan(d.plan ?? []))
      .catch(() => {});
  }, []);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfWeek(year, month);

  // Map sessions to days
  const sessionsByDay = new Map<number, number>();
  for (const s of sessions) {
    const d = new Date(s.started_at);
    if (d.getFullYear() === year && d.getMonth() === month) {
      const day = d.getDate();
      sessionsByDay.set(day, (sessionsByDay.get(day) ?? 0) + (s.duration_seconds ?? 0));
    }
  }

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear((y) => y - 1); }
    else setMonth((m) => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear((y) => y + 1); }
    else setMonth((m) => m + 1);
  };

  const todayDay = today.getDate();
  const isCurrentMonth = year === today.getFullYear() && month === today.getMonth();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <div>
        <Link href="/dashboard" className="text-xs text-accent hover:underline">Dashboard</Link>
        <span className="mx-1 text-xs text-foreground/30">/</span>
        <span className="text-xs text-foreground/50">Study Calendar</span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight">Study Calendar</h1>

      <SoftCard className="p-5">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-4">
          <button type="button" onClick={prevMonth} className="rounded-lg px-3 py-1 text-sm text-foreground/60 hover:bg-accent/10">
            &lt; Prev
          </button>
          <h2 className="text-lg font-bold text-foreground">
            {MONTH_NAMES[month]} {year}
          </h2>
          <button type="button" onClick={nextMonth} className="rounded-lg px-3 py-1 text-sm text-foreground/60 hover:bg-accent/10">
            Next &gt;
          </button>
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-px">
          {/* Day headers */}
          {DAY_NAMES.map((d) => (
            <div key={d} className="p-2 text-center text-[11px] font-semibold uppercase text-foreground/40">
              {d}
            </div>
          ))}

          {/* Empty cells before first day */}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="p-2" />
          ))}

          {/* Day cells */}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const minutes = Math.round((sessionsByDay.get(day) ?? 0) / 60);
            const isToday = isCurrentMonth && day === todayDay;

            return (
              <div
                key={day}
                className={`relative rounded-lg p-2 text-center transition ${
                  isToday
                    ? "bg-accent/10 ring-2 ring-accent/30"
                    : minutes > 0
                      ? "bg-green-50 dark:bg-green-900/10"
                      : "hover:bg-accent/5"
                }`}
              >
                <span className={`text-sm ${isToday ? "font-bold text-accent" : "text-foreground/70"}`}>
                  {day}
                </span>
                {minutes > 0 && (
                  <p className="text-[9px] font-medium text-green-600 dark:text-green-400">
                    {minutes}m
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </SoftCard>

      {/* Study plan section */}
      {studyPlan.length > 0 && (
        <SoftCard className="p-5">
          <h2 className="text-base font-bold text-foreground mb-3">This Week&apos;s Study Plan</h2>
          <div className="space-y-2">
            {studyPlan.map((day) => (
              <div key={day.date} className="flex items-start gap-3 rounded-lg border border-border/40 p-3">
                <span className="shrink-0 text-xs font-semibold text-foreground/50 w-16">
                  {new Date(day.date).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {day.modules.map((m) => (
                    <Link
                      key={m.id}
                      href={`/modules/${m.id}`}
                      className="rounded-full bg-accent/10 px-2.5 py-0.5 text-[11px] font-medium text-accent hover:bg-accent/20"
                    >
                      {m.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </SoftCard>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-4 text-[11px] text-foreground/40">
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded bg-green-100 dark:bg-green-900/30" /> Study day
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded ring-2 ring-accent/30 bg-accent/10" /> Today
        </span>
      </div>
    </main>
  );
}
