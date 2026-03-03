"use client";

import { useCallback, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

type AssignmentSummary = {
  id: string;
  classId: string;
  className?: string;
  title: string;
  questionCount: number;
  estimatedMinutes: number;
  skillsCovered: string[];
  modulesUsed: string[];
  dueAt: string | null;
  assignedAt: string;
  status: string;
};

type CreateResponse = {
  assignment?: AssignmentSummary;
  error?: string;
};

const SUBJECT_OPTIONS = [
  "Math",
  "Science",
  "Reading",
  "Languages",
  "Coding",
  "History",
  "Geography",
  "Arts",
  "Music",
  "Business",
  "Engineering",
  "Medicine",
  "Law",
];

export default function AssignmentBuilder({ classId }: { classId?: string }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("");
  const [questionCount, setQuestionCount] = useState(10);
  const [dueAt, setDueAt] = useState("");
  const [timeLimitMinutes, setTimeLimitMinutes] = useState(15);
  const [diffEasy, setDiffEasy] = useState(30);
  const [diffMedium, setDiffMedium] = useState(50);
  const [diffHard, setDiffHard] = useState(20);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<AssignmentSummary | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const canSubmit = title.trim().length >= 3 && classId && !isSubmitting;

  const handleCreate = useCallback(async () => {
    if (!canSubmit || !classId) return;

    setIsSubmitting(true);
    setErrorMessage(null);
    setResult(null);

    try {
      const response = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          classId,
          title: title.trim(),
          description: description.trim() || undefined,
          subject: subject || undefined,
          questionCount,
          difficulty: { easy: diffEasy, medium: diffMedium, hard: diffHard },
          dueAt: dueAt ? new Date(dueAt).toISOString() : undefined,
          timeLimitMinutes,
        }),
      });

      const payload = (await response.json()) as CreateResponse;
      if (!response.ok) {
        throw new Error(payload.error ?? "Failed to create assignment.");
      }
      if (payload.assignment) {
        setResult(payload.assignment);
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to create assignment.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }, [canSubmit, classId, title, description, subject, questionCount, dueAt, timeLimitMinutes, diffEasy, diffMedium, diffHard]);

  return (
    <SoftCard as="section" className="border-indigo-200 bg-indigo-50 p-4 sm:p-5">
      <h3 className="text-lg font-bold text-indigo-900">Assignment Builder</h3>
      <p className="mt-1 text-sm text-zinc-700">
        Generate a quiz assignment from the curriculum question pool.
      </p>

      <div className="mt-4 space-y-3">
        {/* Title */}
        <div>
          <label htmlFor="assignment-title" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Title
          </label>
          <input
            id="assignment-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Week 3 Math Review"
            className="ui-focus-ring mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="assignment-desc" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Description (optional)
          </label>
          <textarea
            id="assignment-desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Instructions for students..."
            className="ui-focus-ring mt-1 min-h-16 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="assignment-subject" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Subject filter
          </label>
          <select
            id="assignment-subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="ui-focus-ring mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
          >
            <option value="">All subjects</option>
            {SUBJECT_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Question count + Time limit row */}
        <div className="flex flex-wrap gap-3">
          <div className="flex-1 min-w-[120px]">
            <label htmlFor="q-count" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Questions
            </label>
            <input
              id="q-count"
              type="number"
              min={3}
              max={50}
              value={questionCount}
              onChange={(e) => setQuestionCount(Number(e.target.value))}
              className="ui-focus-ring mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
            />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label htmlFor="time-limit" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
              Time limit (min)
            </label>
            <input
              id="time-limit"
              type="number"
              min={0}
              max={180}
              value={timeLimitMinutes}
              onChange={(e) => setTimeLimitMinutes(Number(e.target.value))}
              className="ui-focus-ring mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
            />
          </div>
        </div>

        {/* Difficulty distribution */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Difficulty mix
          </p>
          <div className="mt-1 flex flex-wrap gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-emerald-700">Easy</span>
              <input
                type="number"
                min={0}
                max={100}
                value={diffEasy}
                onChange={(e) => setDiffEasy(Number(e.target.value))}
                className="ui-focus-ring w-16 rounded-lg border border-emerald-200 bg-white px-2 py-1 text-center text-xs"
              />
              <span className="text-xs text-zinc-500">%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-amber-700">Med</span>
              <input
                type="number"
                min={0}
                max={100}
                value={diffMedium}
                onChange={(e) => setDiffMedium(Number(e.target.value))}
                className="ui-focus-ring w-16 rounded-lg border border-amber-200 bg-white px-2 py-1 text-center text-xs"
              />
              <span className="text-xs text-zinc-500">%</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-rose-700">Hard</span>
              <input
                type="number"
                min={0}
                max={100}
                value={diffHard}
                onChange={(e) => setDiffHard(Number(e.target.value))}
                className="ui-focus-ring w-16 rounded-lg border border-rose-200 bg-white px-2 py-1 text-center text-xs"
              />
              <span className="text-xs text-zinc-500">%</span>
            </div>
          </div>
        </div>

        {/* Due date */}
        <div>
          <label htmlFor="due-date" className="text-xs font-semibold uppercase tracking-wide text-zinc-700">
            Due date (optional)
          </label>
          <input
            id="due-date"
            type="datetime-local"
            value={dueAt}
            onChange={(e) => setDueAt(e.target.value)}
            className="ui-focus-ring mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm text-zinc-900"
          />
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={() => void handleCreate()}
          disabled={!canSubmit}
          className="ui-focus-ring ui-soft-button min-h-11 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Generating..." : "Generate Assignment"}
        </button>
      </div>

      {/* Error */}
      {errorMessage ? (
        <p className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-900">
          {errorMessage}
        </p>
      ) : null}

      {/* Success result */}
      {result ? (
        <SoftCard className="mt-4 border-emerald-200 bg-emerald-50 p-4">
          <h4 className="font-bold text-emerald-900">Assignment Created</h4>
          <p className="mt-1 text-sm font-semibold text-zinc-900">{result.title}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <ProgressChip label="Questions" value={result.questionCount} tone="info" />
            <ProgressChip label="Time" value={`${result.estimatedMinutes} min`} tone="neutral" />
            <ProgressChip label="Skills" value={result.skillsCovered.length} tone="success" />
            <ProgressChip label="Modules" value={result.modulesUsed.length} tone="info" />
          </div>
          {result.dueAt ? (
            <p className="mt-2 text-xs text-zinc-600">
              Due: {new Date(result.dueAt).toLocaleString()}
            </p>
          ) : null}
          {result.skillsCovered.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-1">
              {result.skillsCovered.slice(0, 8).map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-medium text-emerald-700"
                >
                  {skill.replace(/[_-]+/g, " ")}
                </span>
              ))}
              {result.skillsCovered.length > 8 ? (
                <span className="text-[10px] text-zinc-500">
                  +{result.skillsCovered.length - 8} more
                </span>
              ) : null}
            </div>
          ) : null}
        </SoftCard>
      ) : null}
    </SoftCard>
  );
}
