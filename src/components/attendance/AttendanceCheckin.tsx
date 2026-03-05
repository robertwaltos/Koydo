"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

export default function AttendanceCheckin({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("attendance_checkin");
  const [checkedIn, setCheckedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!allowed) return;
    async function checkStatus() {
      try {
        const res = await fetch(`/api/attendance?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setCheckedIn(data.checkedInToday ?? false);
        }
      } catch {}
      setLoading(false);
    }
    void checkStatus();
  }, [profileId, allowed]);

  if (!allowed) return null;

  const handleCheckin = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/attendance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId }),
      });
      if (res.ok) setCheckedIn(true);
    } catch {}
    setSubmitting(false);
  };

  if (loading) return null;

  return (
    <SoftCard className="flex items-center justify-between p-4">
      <div>
        <p className="text-sm font-semibold">Daily Check-in</p>
        <p className="text-xs text-zinc-500">
          {checkedIn ? "You're checked in for today!" : "Tap to check in for today's session."}
        </p>
      </div>
      {checkedIn ? (
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
          Present
        </span>
      ) : (
        <SoftButton variant="accent" onClick={handleCheckin} disabled={submitting}>
          {submitting ? "…" : "Check In"}
        </SoftButton>
      )}
    </SoftCard>
  );
}
