"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";

type FeedbackEntry = {
  id: string;
  instructor_name: string;
  comment: string;
  assignment_title: string;
  created_at: string;
  rating: number | null;
};

export default function InstructorFeedback({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("instructor_feedback");
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([]);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/instructor-feedback?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setFeedback(data.feedback ?? []);
        }
      } catch {}
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed || feedback.length === 0) return null;

  return (
    <SoftCard className="space-y-3 p-5">
      <h3 className="text-sm font-semibold text-zinc-600">Teacher Feedback</h3>
      {feedback.map((f) => (
        <div key={f.id} className="rounded-xl border border-border p-3">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">{f.assignment_title}</p>
            {f.rating && (
              <span className="text-xs text-amber-600">{f.rating}/5</span>
            )}
          </div>
          <p className="mt-1 text-sm text-zinc-700">{f.comment}</p>
          <p className="mt-1 text-[10px] text-zinc-400">
            {f.instructor_name} &middot; {new Date(f.created_at).toLocaleDateString()}
          </p>
        </div>
      ))}
    </SoftCard>
  );
}
