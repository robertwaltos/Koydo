"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type PlanSlot = {
  day: number; // 0-6 (Sun-Sat)
  time: string; // "09:00"
  lessonId: string | null;
  subject: string;
  label: string;
};

type StudyPlan = {
  id: string;
  profileId: string;
  weekStart: string;
  slots: PlanSlot[];
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TIMES = ["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "19:00", "20:00"];

export default function StudyPlanEditor({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("study_planning");
  const [plan, setPlan] = useState<StudyPlan | null>(null);
  const [slots, setSlots] = useState<PlanSlot[]>([]);
  const [saving, setSaving] = useState(false);
  const [addingSlot, setAddingSlot] = useState<{ day: number; time: string } | null>(null);
  const [newLabel, setNewLabel] = useState("");
  const [newSubject, setNewSubject] = useState("math");

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/study-plans?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          if (data.plan) {
            setPlan(data.plan);
            setSlots(data.plan.slots ?? []);
          }
        }
      } catch {}
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed) return null;

  const addSlot = () => {
    if (!addingSlot || !newLabel.trim()) return;
    const slot: PlanSlot = {
      day: addingSlot.day,
      time: addingSlot.time,
      lessonId: null,
      subject: newSubject,
      label: newLabel.trim(),
    };
    setSlots((prev) => [...prev, slot]);
    setAddingSlot(null);
    setNewLabel("");
  };

  const removeSlot = (day: number, time: string) => {
    setSlots((prev) => prev.filter((s) => !(s.day === day && s.time === time)));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/study-plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, slots }),
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Weekly Study Plan</h3>
        <SoftButton variant="accent" onClick={handleSave} disabled={saving}>
          {saving ? "Saving…" : "Save Plan"}
        </SoftButton>
      </div>

      {/* Calendar grid */}
      <div className="overflow-x-auto">
        <div className="grid min-w-[600px]" style={{ gridTemplateColumns: `60px repeat(7, 1fr)` }}>
          {/* Header */}
          <div />
          {DAYS.map((d) => (
            <div key={d} className="px-1 py-2 text-center text-xs font-semibold text-zinc-600">{d}</div>
          ))}

          {/* Time slots */}
          {TIMES.map((time) => (
            <div key={time} className="contents">
              <div className="flex items-center justify-end pr-2 text-[10px] text-zinc-400">{time}</div>
              {DAYS.map((_, dayIdx) => {
                const slot = slots.find((s) => s.day === dayIdx && s.time === time);
                return (
                  <div
                    key={`${dayIdx}-${time}`}
                    className={`m-0.5 min-h-[32px] rounded-lg border text-[10px] ${
                      slot ? "border-accent bg-accent/5 px-1 py-0.5" : "border-border/30 cursor-pointer hover:bg-zinc-50"
                    }`}
                    onClick={() => !slot && setAddingSlot({ day: dayIdx, time })}
                  >
                    {slot ? (
                      <div className="flex items-center justify-between">
                        <span className="font-medium truncate">{slot.label}</span>
                        <button onClick={(e) => { e.stopPropagation(); removeSlot(dayIdx, time); }} className="text-rose-400 hover:text-rose-600">×</button>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Add slot form */}
      {addingSlot && (
        <div className="flex items-center gap-2 rounded-xl border border-border p-3">
          <span className="text-xs text-zinc-500">
            {DAYS[addingSlot.day]} {addingSlot.time}
          </span>
          <input
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
            placeholder="Label"
            className="flex-1 rounded-lg border border-border px-2 py-1 text-xs"
          />
          <select
            value={newSubject}
            onChange={(e) => setNewSubject(e.target.value)}
            className="rounded-lg border border-border px-2 py-1 text-xs"
          >
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="english">English</option>
            <option value="history">History</option>
            <option value="other">Other</option>
          </select>
          <SoftButton variant="accent" onClick={addSlot}>Add</SoftButton>
          <SoftButton variant="ghost" onClick={() => setAddingSlot(null)}>Cancel</SoftButton>
        </div>
      )}
    </SoftCard>
  );
}
