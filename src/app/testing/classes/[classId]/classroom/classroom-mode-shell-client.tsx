"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import {
  CLASSROOM_DELIVERY_MODE_LABELS,
  CLASSROOM_SESSION_STATUS_LABELS,
  type ClassroomDeliveryMode,
  type ClassroomSessionAction,
  type ClassroomSessionStatus,
} from "@/lib/testing/classroom-session";
import {
  isTestingClassroomModeV1Pending,
  isTestingQuickReviewV1Pending,
} from "@/lib/platform/features";
import ClassroomModeS2Panels from "./classroom-mode-s2-panels";

type SessionResponse = {
  classId: string;
  className: string | null;
  session: {
    deliveryMode: ClassroomDeliveryMode;
    sessionStatus: ClassroomSessionStatus;
    activeAssignmentId: string | null;
    lessonFocus: string | null;
    announcement: string | null;
    sessionSettings: Record<string, unknown>;
    startedAt: string | null;
    endedAt: string | null;
    createdAt: string | null;
    updatedAt: string | null;
    updatedBy: string | null;
  };
  assignments: Array<{
    id: string;
    label: string;
    examId: string | null;
    moduleId: string | null;
    assignedAt: string;
    dueAt: string | null;
    estimatedMinutes: number;
  }>;
};

type QuickReviewResponse = {
  stub: boolean;
  mode: "preview" | "launch";
  classId: string;
  className: string | null;
  topic: string;
  questionCount: number;
  durationMinutes: number;
  difficultyBand: "baseline" | "mixed" | "challenge";
  learningGoal: string | null;
  prompts: Array<{
    id: string;
    promptType: "mcq_single" | "short_answer";
    prompt: string;
    answerStrategy: string;
  }>;
  launchState: "preview_only" | "queued_stub";
  nextActions: string[];
  message: string;
};

type ClassroomModeShellClientProps = {
  classId: string;
};

type SessionFormState = {
  deliveryMode: ClassroomDeliveryMode;
  activeAssignmentId: string | null;
  lessonFocus: string;
  announcement: string;
};

const STATUS_BADGE_CLASS: Record<ClassroomSessionStatus, string> = {
  draft: "border-zinc-300 bg-zinc-100 text-zinc-800",
  scheduled: "border-sky-300 bg-sky-100 text-sky-900",
  live: "border-emerald-300 bg-emerald-100 text-emerald-900",
  paused: "border-amber-300 bg-amber-100 text-amber-900",
  ended: "border-zinc-300 bg-zinc-100 text-zinc-700",
};

export default function ClassroomModeShellClient({ classId }: ClassroomModeShellClientProps) {
  const [className, setClassName] = useState<string>("Classroom");
  const [sessionStatus, setSessionStatus] = useState<ClassroomSessionStatus>("draft");
  const [sessionStartedAt, setSessionStartedAt] = useState<string | null>(null);
  const [sessionEndedAt, setSessionEndedAt] = useState<string | null>(null);
  const [assignments, setAssignments] = useState<SessionResponse["assignments"]>([]);
  const [form, setForm] = useState<SessionFormState>({
    deliveryMode: "student_paced",
    activeAssignmentId: null,
    lessonFocus: "",
    announcement: "",
  });

  const [quickReviewTopic, setQuickReviewTopic] = useState("");
  const [quickReviewGoal, setQuickReviewGoal] = useState("");
  const [quickReviewCount, setQuickReviewCount] = useState(5);
  const [quickReviewDuration, setQuickReviewDuration] = useState(8);
  const [quickReviewDifficulty, setQuickReviewDifficulty] = useState<"baseline" | "mixed" | "challenge">("mixed");
  const [quickReviewResult, setQuickReviewResult] = useState<QuickReviewResponse | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isQuickReviewLoading, setIsQuickReviewLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const classroomModePending = isTestingClassroomModeV1Pending();
  const quickReviewPending = isTestingQuickReviewV1Pending();

  const canStart = sessionStatus === "draft" || sessionStatus === "scheduled" || sessionStatus === "ended";
  const canPause = sessionStatus === "live";
  const canResume = sessionStatus === "paused";
  const canEnd = sessionStatus === "live" || sessionStatus === "paused";

  const modeDescription = useMemo(() => {
    switch (form.deliveryMode) {
      case "live":
        return "Teacher-pacing mode for synchronous instruction and checkpoints.";
      case "front_of_class":
        return "Projection-first mode optimized for whole-class quick review runs.";
      default:
        return "Independent progression mode with assignment-driven pacing.";
    }
  }, [form.deliveryMode]);

  const applySessionPayload = useCallback((payload: SessionResponse) => {
    setClassName(payload.className ?? "Classroom");
    setAssignments(payload.assignments ?? []);
    setSessionStatus(payload.session.sessionStatus);
    setSessionStartedAt(payload.session.startedAt);
    setSessionEndedAt(payload.session.endedAt);
    setForm({
      deliveryMode: payload.session.deliveryMode,
      activeAssignmentId: payload.session.activeAssignmentId,
      lessonFocus: payload.session.lessonFocus ?? "",
      announcement: payload.session.announcement ?? "",
    });
  }, []);

  const loadSession = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/session`, {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => null)) as SessionResponse | { error?: string } | null;
      if (!response.ok) {
        setError(payload && "error" in payload && payload.error ? payload.error : "Failed to load classroom session.");
        setIsLoading(false);
        return;
      }
      applySessionPayload(payload as SessionResponse);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load classroom session.");
    } finally {
      setIsLoading(false);
    }
  }, [applySessionPayload, classId]);

  useEffect(() => {
    void loadSession();
  }, [loadSession]);

  async function updateSession(action: ClassroomSessionAction) {
    setIsSaving(true);
    setError(null);
    setStatusMessage(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/session`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          deliveryMode: form.deliveryMode,
          activeAssignmentId: form.activeAssignmentId,
          lessonFocus: form.lessonFocus.trim() || null,
          announcement: form.announcement.trim() || null,
          sessionSettings: {
            uiVersion: "s1",
            lastAction: action,
          },
        }),
      });
      const payload = (await response.json().catch(() => null)) as
        | { session?: SessionResponse["session"]; className?: string; error?: string }
        | null;
      if (!response.ok) {
        setError(payload?.error ?? "Failed to update classroom session.");
        return;
      }

      if (payload?.session) {
        setClassName(payload.className ?? className);
        setSessionStatus(payload.session.sessionStatus);
        setSessionStartedAt(payload.session.startedAt);
        setSessionEndedAt(payload.session.endedAt);
      }

      const actionLabel =
        action === "save"
          ? "Session draft saved."
          : action === "start"
            ? "Session started."
            : action === "pause"
              ? "Session paused."
              : action === "resume"
                ? "Session resumed."
                : action === "end"
                  ? "Session ended."
                  : "Session reset to draft.";
      setStatusMessage(actionLabel);
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Failed to update classroom session.");
    } finally {
      setIsSaving(false);
    }
  }

  async function runQuickReview(mode: "preview" | "launch") {
    if (!quickReviewTopic.trim()) {
      setError("Quick-review topic is required.");
      return;
    }

    setIsQuickReviewLoading(true);
    setError(null);
    setStatusMessage(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/quick-review`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          topic: quickReviewTopic.trim(),
          learningGoal: quickReviewGoal.trim() || null,
          questionCount: quickReviewCount,
          durationMinutes: quickReviewDuration,
          difficultyBand: quickReviewDifficulty,
        }),
      });
      const payload = (await response.json().catch(() => null)) as QuickReviewResponse | { error?: string } | null;
      if (!response.ok) {
        setError(payload && "error" in payload && payload.error ? payload.error : "Quick-review request failed.");
        return;
      }
      setQuickReviewResult(payload as QuickReviewResponse);
      setStatusMessage(
        mode === "launch"
          ? "Quick-review launch stub queued in classroom session settings."
          : "Quick-review preview generated.",
      );
      if (mode === "launch") {
        await loadSession();
      }
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Quick-review request failed.");
    } finally {
      setIsQuickReviewLoading(false);
    }
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (classroomModePending) return;
    void updateSession("save");
  }

  if (isLoading) {
    return (
      <SoftCard className="p-5">
        <p className="text-sm font-semibold text-zinc-700">Loading classroom control room...</p>
      </SoftCard>
    );
  }

  return (
    <div className="space-y-4">
      {error ? (
        <SoftCard className="border-red-200 bg-red-50 p-4">
          <p className="text-sm font-semibold text-red-800">{error}</p>
        </SoftCard>
      ) : null}
      {statusMessage ? (
        <SoftCard className="border-emerald-200 bg-emerald-50 p-4">
          <p className="text-sm font-semibold text-emerald-900">{statusMessage}</p>
        </SoftCard>
      ) : null}

      {classroomModePending ? (
        <SoftCard className="border-amber-200 bg-amber-50 p-4">
          <p className="text-sm font-semibold text-amber-900">
            Classroom mode is behind rollout gate `NEXT_PUBLIC_TESTING_CLASSROOM_MODE_V1_PENDING`.
            Set it to `false` to enable live controls.
          </p>
        </SoftCard>
      ) : null}

      <SoftCard as="section" className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">{className}</h2>
            <p className="mt-1 text-sm font-medium text-zinc-700">
              Current mode: {CLASSROOM_DELIVERY_MODE_LABELS[form.deliveryMode]}
            </p>
          </div>
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${STATUS_BADGE_CLASS[sessionStatus]}`}
          >
            {CLASSROOM_SESSION_STATUS_LABELS[sessionStatus]}
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-zinc-700">{modeDescription}</p>
        <p className="mt-1 text-xs font-medium text-zinc-600">
          Started: {sessionStartedAt ? new Date(sessionStartedAt).toLocaleString() : "N/A"} | Ended:{" "}
          {sessionEndedAt ? new Date(sessionEndedAt).toLocaleString() : "N/A"}
        </p>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A01 Classroom Mode Shell + Routing</h3>
        <p className="mt-1 text-sm font-medium text-zinc-700">
          Switch between the three S1 run modes. API-backed state is persisted per classroom.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(CLASSROOM_DELIVERY_MODE_LABELS) as ClassroomDeliveryMode[]).map((mode) => (
            <button
              key={mode}
              type="button"
              disabled={classroomModePending || isSaving}
              onClick={() => {
                setForm((current) => ({ ...current, deliveryMode: mode }));
              }}
              className={`ui-focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-bold ${
                form.deliveryMode === mode
                  ? "border-zinc-900 bg-zinc-900 text-white"
                  : "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
              } disabled:cursor-not-allowed disabled:opacity-70`}
            >
              {CLASSROOM_DELIVERY_MODE_LABELS[mode]}
            </button>
          ))}
        </div>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A02 Teacher Session Controls</h3>
        <form className="mt-3 space-y-3" onSubmit={handleFormSubmit}>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Active assignment</span>
            <select
              value={form.activeAssignmentId ?? ""}
              disabled={classroomModePending || isSaving}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  activeAssignmentId: event.target.value ? event.target.value : null,
                }))}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            >
              <option value="">No active assignment</option>
              {assignments.map((assignment) => (
                <option key={assignment.id} value={assignment.id}>
                  {assignment.label} (~{assignment.estimatedMinutes} min)
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Lesson focus</span>
            <input
              type="text"
              maxLength={160}
              value={form.lessonFocus}
              disabled={classroomModePending || isSaving}
              onChange={(event) => setForm((current) => ({ ...current, lessonFocus: event.target.value }))}
              placeholder="Example: Fractions equivalence checkpoint"
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>

          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Announcement</span>
            <textarea
              rows={3}
              maxLength={500}
              value={form.announcement}
              disabled={classroomModePending || isSaving}
              onChange={(event) => setForm((current) => ({ ...current, announcement: event.target.value }))}
              placeholder="Example: We start with a two-minute warm-up, then rapid review."
              className="ui-focus-ring w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>

          <div className="flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={classroomModePending || isSaving}
              className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSaving ? "Saving..." : "Save Draft"}
            </button>
            <button
              type="button"
              disabled={classroomModePending || isSaving || !canStart}
              onClick={() => {
                void updateSession("start");
              }}
              className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Start
            </button>
            <button
              type="button"
              disabled={classroomModePending || isSaving || !canPause}
              onClick={() => {
                void updateSession("pause");
              }}
              className="ui-focus-ring min-h-11 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Pause
            </button>
            <button
              type="button"
              disabled={classroomModePending || isSaving || !canResume}
              onClick={() => {
                void updateSession("resume");
              }}
              className="ui-focus-ring min-h-11 rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-900 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Resume
            </button>
            <button
              type="button"
              disabled={classroomModePending || isSaving || !canEnd}
              onClick={() => {
                void updateSession("end");
              }}
              className="ui-focus-ring min-h-11 rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-bold text-red-900 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              End
            </button>
            <button
              type="button"
              disabled={classroomModePending || isSaving}
              onClick={() => {
                void updateSession("reset");
              }}
              className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              Reset
            </button>
          </div>
        </form>
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A03 Quick-Review UI Stub</h3>
        <p className="mt-1 text-sm font-medium text-zinc-700">
          Front-of-class quick review scaffold. Prompt payload is generated by stub API contract.
        </p>

        {quickReviewPending ? (
          <p className="mt-3 text-sm font-semibold text-amber-900">
            Quick review is behind rollout gate `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING`.
            Set it to `false` to enable stub launch controls.
          </p>
        ) : null}

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Topic</span>
            <input
              type="text"
              value={quickReviewTopic}
              onChange={(event) => setQuickReviewTopic(event.target.value)}
              placeholder="Example: Fractions and equivalent forms"
              disabled={quickReviewPending || isQuickReviewLoading}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Learning goal (optional)</span>
            <input
              type="text"
              value={quickReviewGoal}
              onChange={(event) => setQuickReviewGoal(event.target.value)}
              placeholder="Example: Identify and simplify equivalent fractions."
              disabled={quickReviewPending || isQuickReviewLoading}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Question count</span>
            <input
              type="number"
              min={3}
              max={12}
              value={quickReviewCount}
              onChange={(event) => setQuickReviewCount(Math.max(3, Math.min(12, Number(event.target.value) || 3)))}
              disabled={quickReviewPending || isQuickReviewLoading}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Duration minutes</span>
            <input
              type="number"
              min={3}
              max={20}
              value={quickReviewDuration}
              onChange={(event) => setQuickReviewDuration(Math.max(3, Math.min(20, Number(event.target.value) || 3)))}
              disabled={quickReviewPending || isQuickReviewLoading}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>
        </div>

        <label className="mt-3 block space-y-1 text-sm font-semibold text-zinc-700">
          <span>Difficulty band</span>
          <select
            value={quickReviewDifficulty}
            onChange={(event) => setQuickReviewDifficulty(event.target.value as "baseline" | "mixed" | "challenge")}
            disabled={quickReviewPending || isQuickReviewLoading}
            className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
          >
            <option value="baseline">Baseline</option>
            <option value="mixed">Mixed</option>
            <option value="challenge">Challenge</option>
          </select>
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={quickReviewPending || isQuickReviewLoading}
            onClick={() => {
              void runQuickReview("preview");
            }}
            className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isQuickReviewLoading ? "Working..." : "Preview Stub"}
          </button>
          <button
            type="button"
            disabled={quickReviewPending || isQuickReviewLoading}
            onClick={() => {
              void runQuickReview("launch");
            }}
            className="ui-focus-ring min-h-11 rounded-full border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-900 hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isQuickReviewLoading ? "Working..." : "Launch Stub"}
          </button>
        </div>

        {quickReviewResult ? (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-semibold text-zinc-800">{quickReviewResult.message}</p>
            <p className="text-xs font-semibold text-zinc-600">
              State: {quickReviewResult.launchState} | Mode: {quickReviewResult.mode} | Duration:{" "}
              {quickReviewResult.durationMinutes} min
            </p>
            {quickReviewResult.prompts.map((prompt) => (
              <article key={prompt.id} className="rounded-xl border border-zinc-200 bg-white p-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">{prompt.promptType}</p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{prompt.prompt}</p>
                <p className="mt-1 text-xs text-zinc-600">{prompt.answerStrategy}</p>
              </article>
            ))}
            <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">Next Actions</p>
              {quickReviewResult.nextActions.map((actionItem) => (
                <p key={actionItem} className="mt-1 text-sm text-zinc-700">
                  - {actionItem}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p className="mt-3 text-sm font-medium text-zinc-600">No quick-review preview generated yet.</p>
        )}
      </SoftCard>

      <ClassroomModeS2Panels
        classId={classId}
        assignments={assignments.map((assignment) => ({
          id: assignment.id,
          label: assignment.label,
          examId: assignment.examId,
          moduleId: assignment.moduleId,
          dueAt: assignment.dueAt,
        }))}
        quickReviewPending={quickReviewPending}
        onSessionRefresh={loadSession}
      />
    </div>
  );
}
