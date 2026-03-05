"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type Assignment = {
  id: string;
  title: string;
  description: string;
  due_date: string | null;
  status: "pending" | "submitted" | "graded";
  score: number | null;
  max_score: number | null;
  feedback: string | null;
  questions: Array<{
    id: string;
    text: string;
    type: "multiple_choice" | "short_answer";
    options?: string[];
  }>;
};

export default function AssignmentPage() {
  const params = useParams();
  const assignmentId = params.id as string;
  const { allowed, isLoading: featureLoading } = useFeature("assignment_student_ui");
  const [assignment, setAssignment] = useState<Assignment | null>(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/assignments/${assignmentId}`);
        if (res.ok) {
          const data = await res.json();
          setAssignment(data.assignment);
          if (data.assignment.status !== "pending") setSubmitted(true);
        }
      } catch {}
      setLoading(false);
    }
    void load();
  }, [assignmentId, allowed]);

  if (featureLoading || loading) {
    return <div className="animate-pulse p-12 text-center text-sm text-zinc-500">Loading…</div>;
  }
  if (!allowed) return <p className="p-12 text-center text-sm text-zinc-500">Assignments are not available.</p>;
  if (!assignment) return <p className="p-12 text-center text-sm text-zinc-500">Assignment not found.</p>;

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const res = await fetch(`/api/assignments/${assignmentId}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const isGraded = assignment.status === "graded";
  const isPending = assignment.status === "pending";

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <SoftCard className="space-y-6 p-8">
        <div>
          <h1 className="text-2xl font-semibold">{assignment.title}</h1>
          <p className="mt-1 text-sm text-zinc-600">{assignment.description}</p>
          {assignment.due_date && (
            <p className="mt-1 text-xs text-zinc-500">
              Due: {new Date(assignment.due_date).toLocaleDateString()}
            </p>
          )}
        </div>

        {/* Status badges */}
        <div className="flex gap-2">
          <span className={`rounded-lg px-2 py-1 text-xs font-medium ${
            isGraded ? "bg-emerald-100 text-emerald-800" :
            submitted ? "bg-blue-100 text-blue-800" :
            "bg-amber-100 text-amber-800"
          }`}>
            {isGraded ? `Graded: ${assignment.score}/${assignment.max_score}` :
             submitted ? "Submitted" : "Pending"}
          </span>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {assignment.questions.map((q, qi) => (
            <div key={q.id} className="space-y-2">
              <p className="text-sm font-medium">{qi + 1}. {q.text}</p>
              {q.type === "multiple_choice" && q.options ? (
                <div className="space-y-1">
                  {q.options.map((opt, oi) => (
                    <label
                      key={oi}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm ${
                        answers[q.id] === String(oi) ? "border-accent bg-accent/5" : "border-border"
                      }`}
                    >
                      <input
                        type="radio"
                        name={q.id}
                        value={oi}
                        checked={answers[q.id] === String(oi)}
                        onChange={() => setAnswers((a) => ({ ...a, [q.id]: String(oi) }))}
                        disabled={!isPending}
                        className="h-4 w-4"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ) : (
                <textarea
                  value={answers[q.id] ?? ""}
                  onChange={(e) => setAnswers((a) => ({ ...a, [q.id]: e.target.value }))}
                  disabled={!isPending}
                  placeholder="Type your answer…"
                  rows={3}
                  className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm"
                />
              )}
            </div>
          ))}
        </div>

        {/* Feedback */}
        {isGraded && assignment.feedback && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-medium text-emerald-800">Teacher Feedback</p>
            <p className="mt-1 text-sm text-emerald-700">{assignment.feedback}</p>
          </div>
        )}

        {/* Submit */}
        {isPending && !submitted && (
          <SoftButton variant="accent" onClick={handleSubmit} disabled={submitting}>
            {submitting ? "Submitting…" : "Submit Assignment"}
          </SoftButton>
        )}
      </SoftCard>
    </main>
  );
}
