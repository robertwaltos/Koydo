"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, CalendarClock, ShieldAlert, CheckCircle2 } from "lucide-react";

export function PauseStreakButton({ studentId, studentName }: { studentId: string, studentName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [days, setDays] = useState<number>(3);
  const [reason, setReason] = useState<"sick_day" | "vacation" | "other">("sick_day");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const router = useRouter();

  const handlePause = async () => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/parent/streak/pause", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentProfileId: studentId, days, reason })
      });

      if (!res.ok) throw new Error("Failed to pause streak");
      
      setStatus("success");
      setTimeout(() => {
        setIsOpen(false);
        setStatus("idle");
        router.refresh();
      }, 2000);
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="ui-focus-ring rounded-md border border-amber-200 bg-amber-50 px-3 py-1.5 text-[12px] font-semibold text-amber-700 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-300"
      >
        Pause Streak
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-zinc-900 dark:border dark:border-border">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CalendarClock className="h-6 w-6 text-indigo-500" />
                Pause Streak
              </h2>
              <button onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <X className="h-5 w-5" />
              </button>
            </div>

            {status === "success" ? (
              <div className="py-8 text-center text-emerald-600 flex flex-col items-center gap-3">
                <CheckCircle2 className="h-16 w-16" />
                <p className="font-bold text-lg">Streak Paused Successfully!</p>
                <p className="text-sm text-zinc-500">Take the time you need. We'll keep the streak safe.</p>
              </div>
            ) : (
              <>
                <p className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
                  Is {studentName} sick or going on vacation? You can temporarily freeze their daily learning streak so they don't lose their progress!
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-1">Reason for pause</label>
                    <select 
                      value={reason} 
                      onChange={(e) => setReason(e.target.value as any)}
                      className="w-full rounded-xl border border-zinc-300 p-3 dark:bg-black dark:border-zinc-700"
                    >
                      <option value="sick_day">Sick Day 🤒</option>
                      <option value="vacation">Vacation 🏖️</option>
                      <option value="other">Other Life Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">How many days?</label>
                    <select 
                      value={days} 
                      onChange={(e) => setDays(Number(e.target.value))}
                      className="w-full rounded-xl border border-zinc-300 p-3 dark:bg-black dark:border-zinc-700"
                    >
                      <option value={1}>1 Day</option>
                      <option value={3}>3 Days</option>
                      <option value={7}>1 Week</option>
                      <option value={14}>2 Weeks</option>
                    </select>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-full rounded-xl border border-zinc-300 p-3 font-semibold hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePause}
                      disabled={status === "submitting"}
                      className="w-full rounded-xl bg-indigo-600 p-3 font-semibold text-white shadow-md hover:bg-indigo-700 disabled:opacity-50 flex items-center justify-center"
                    >
                      {status === "submitting" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      ) : (
                        "Freeze Streak"
                      )}
                    </button>
                  </div>
                  
                  {status === "error" && (
                    <p className="text-center text-sm text-red-500 mt-2">Failed to pause streak. Please try again.</p>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
