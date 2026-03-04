"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SoftCard from "@/app/components/ui/soft-card";
import {
  isTestingGoogleClassroomV1Pending,
  isTestingIngestionV1Pending,
} from "@/lib/platform/features";

type SessionAssignment = {
  id: string;
  label: string;
  examId: string | null;
  moduleId: string | null;
  dueAt: string | null;
};

type GoogleCreateResult = {
  message: string;
  syncRequestId: string;
  syncState: "preview_only" | "queued_stub";
  nextActions: string[];
};

type QuickReviewRunResult = {
  message: string;
  prompts: Array<{
    id: string;
    promptType: "mcq_single" | "short_answer";
    prompt: string;
    answerStrategy: string;
  }>;
  run: {
    status: "idle" | "live" | "paused" | "ended";
    currentPromptIndex: number;
    promptOutcomes: Array<{
      promptId: string;
      correctCount: number;
      incorrectCount: number;
      skippedCount: number;
    }>;
  };
  stub: {
    topic: string;
    durationMinutes: number;
    questionCount: number;
  };
};

type IngestionPreviewResult = {
  message: string;
  parse: {
    qualityBand: "low" | "medium" | "high";
    segmentCount: number;
    keywordCount: number;
    estimatedReadMinutes: number;
  };
  objectives: Array<{ id: string; text: string }>;
  keywords: string[];
  quizDraft: Array<{ id: string; prompt: string; promptType: "mcq_single" | "short_answer" }>;
};

type ClassroomModeS2PanelsProps = {
  classId: string;
  assignments: SessionAssignment[];
  quickReviewPending: boolean;
  onSessionRefresh: () => Promise<void>;
};

function toIsoOrNull(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString();
}

function parseTags(value: string) {
  return [...new Set(value.split(",").map((token) => token.trim().toLowerCase()).filter(Boolean))].slice(0, 8);
}

export default function ClassroomModeS2Panels({
  classId,
  assignments,
  quickReviewPending,
  onSessionRefresh,
}: ClassroomModeS2PanelsProps) {
  const googlePending = isTestingGoogleClassroomV1Pending();
  const ingestionPending = isTestingIngestionV1Pending();

  const [targetMode, setTargetMode] = useState<"existing" | "inline">(assignments.length > 0 ? "existing" : "inline");
  const [selectedAssignmentId, setSelectedAssignmentId] = useState(assignments[0]?.id ?? "");
  const [inlineExamId, setInlineExamId] = useState("");
  const [inlineModuleId, setInlineModuleId] = useState("");
  const [inlineDueAt, setInlineDueAt] = useState("");
  const [googleTitle, setGoogleTitle] = useState("Weekly mastery checkpoint");
  const [googleCourseId, setGoogleCourseId] = useState("");
  const [googlePoints, setGooglePoints] = useState(100);
  const [googleResult, setGoogleResult] = useState<GoogleCreateResult | null>(null);
  const [googleError, setGoogleError] = useState<string | null>(null);
  const [isGoogleSubmitting, setIsGoogleSubmitting] = useState(false);

  const [runState, setRunState] = useState<QuickReviewRunResult | null>(null);
  const [runError, setRunError] = useState<string | null>(null);
  const [isRunBusy, setIsRunBusy] = useState(false);

  const [ingestionTitle, setIngestionTitle] = useState("Fraction review notes");
  const [ingestionRawText, setIngestionRawText] = useState(
    "Students identify equivalent fractions, simplify them, and explain fraction equivalence with number lines and area models.",
  );
  const [ingestionTags, setIngestionTags] = useState("fractions, review");
  const [ingestionResult, setIngestionResult] = useState<IngestionPreviewResult | null>(null);
  const [ingestionError, setIngestionError] = useState<string | null>(null);
  const [isIngestionSubmitting, setIsIngestionSubmitting] = useState(false);

  useEffect(() => {
    if (assignments.length === 0) {
      setTargetMode("inline");
      setSelectedAssignmentId("");
      return;
    }
    setSelectedAssignmentId((current) => (current && assignments.some((item) => item.id === current) ? current : assignments[0].id));
  }, [assignments]);

  const currentPrompt = useMemo(() => {
    if (!runState) return null;
    return runState.prompts[runState.run.currentPromptIndex] ?? null;
  }, [runState]);

  const currentPromptOutcome = useMemo(() => {
    if (!runState || !currentPrompt) return null;
    return runState.run.promptOutcomes.find((entry) => entry.promptId === currentPrompt.id) ?? null;
  }, [currentPrompt, runState]);

  const loadQuickReviewRun = useCallback(async () => {
    if (quickReviewPending) return;
    setIsRunBusy(true);
    setRunError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/quick-review/run`, { cache: "no-store" });
      const payload = (await response.json().catch(() => null)) as QuickReviewRunResult | { error?: string } | null;
      if (!response.ok) {
        setRunState(null);
        setRunError(payload && "error" in payload && payload.error ? payload.error : "Failed to load run state.");
        return;
      }
      setRunState(payload as QuickReviewRunResult);
    } catch (error) {
      setRunError(error instanceof Error ? error.message : "Failed to load run state.");
    } finally {
      setIsRunBusy(false);
    }
  }, [classId, quickReviewPending]);

  useEffect(() => {
    if (quickReviewPending) return;
    void loadQuickReviewRun();
  }, [loadQuickReviewRun, quickReviewPending]);

  async function runGoogleCreate(mode: "preview" | "create") {
    if (googlePending) return;
    setIsGoogleSubmitting(true);
    setGoogleError(null);
    try {
      const payload: Record<string, unknown> = {
        mode,
        title: googleTitle.trim(),
        courseId: googleCourseId.trim(),
        points: googlePoints,
      };
      if (targetMode === "existing") {
        payload.existingAssignmentId = selectedAssignmentId;
      } else {
        payload.examId = inlineExamId.trim() || null;
        payload.moduleId = inlineModuleId.trim() || null;
        payload.dueAt = toIsoOrNull(inlineDueAt);
      }

      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/lms/google-classroom/assignments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as
        | (GoogleCreateResult & { error?: never })
        | { error?: string }
        | null;
      if (!response.ok) {
        setGoogleError(result && "error" in result && result.error ? result.error : "Google Classroom request failed.");
        return;
      }
      setGoogleResult(result as GoogleCreateResult);
      if (mode === "create") {
        await onSessionRefresh();
      }
    } catch (error) {
      setGoogleError(error instanceof Error ? error.message : "Google Classroom request failed.");
    } finally {
      setIsGoogleSubmitting(false);
    }
  }

  async function mutateRun(action: "start" | "pause" | "resume" | "next" | "previous" | "record_outcome" | "reset" | "end", outcome?: "correct" | "incorrect" | "skip") {
    if (quickReviewPending) return;
    setIsRunBusy(true);
    setRunError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/quick-review/run`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, outcome }),
      });
      const payload = (await response.json().catch(() => null)) as QuickReviewRunResult | { error?: string } | null;
      if (!response.ok) {
        setRunError(payload && "error" in payload && payload.error ? payload.error : "Run update failed.");
        return;
      }
      setRunState(payload as QuickReviewRunResult);
    } catch (error) {
      setRunError(error instanceof Error ? error.message : "Run update failed.");
    } finally {
      setIsRunBusy(false);
    }
  }

  async function runIngestion(mode: "preview" | "save_stub") {
    if (ingestionPending) return;
    setIsIngestionSubmitting(true);
    setIngestionError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/ingestion/preview`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode,
          title: ingestionTitle.trim(),
          sourceType: "notes",
          rawText: ingestionRawText,
          language: "en",
          tags: parseTags(ingestionTags),
          generateQuestions: true,
          questionCount: 5,
          difficultyBand: "mixed",
        }),
      });
      const payload = (await response.json().catch(() => null)) as IngestionPreviewResult | { error?: string } | null;
      if (!response.ok) {
        setIngestionError(payload && "error" in payload && payload.error ? payload.error : "Ingestion preview failed.");
        return;
      }
      setIngestionResult(payload as IngestionPreviewResult);
      if (mode === "save_stub") {
        await onSessionRefresh();
      }
    } catch (error) {
      setIngestionError(error instanceof Error ? error.message : "Ingestion preview failed.");
    } finally {
      setIsIngestionSubmitting(false);
    }
  }

  return (
    <div className="space-y-4">
      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A04 Google Classroom Assignment-Create UX</h3>
        <p className="mt-1 text-sm font-medium text-zinc-700">Teacher launch form for Google Classroom create flow in S2 stub mode.</p>

        {googlePending ? (
          <p className="mt-3 text-sm font-semibold text-amber-900">Google create flow is behind `NEXT_PUBLIC_TESTING_GOOGLE_CLASSROOM_V1_PENDING`.</p>
        ) : null}
        {googleError ? <p className="mt-3 text-sm font-semibold text-red-700">{googleError}</p> : null}

        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Target mode</span>
            <select value={targetMode} onChange={(event) => setTargetMode(event.target.value as "existing" | "inline")} className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800">
              <option value="existing">Use existing assignment</option>
              <option value="inline">Create inline target</option>
            </select>
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Google course ID</span>
            <input value={googleCourseId} onChange={(event) => setGoogleCourseId(event.target.value)} className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Assignment title</span>
            <input value={googleTitle} onChange={(event) => setGoogleTitle(event.target.value)} className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
          </label>
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Points</span>
            <input type="number" min={1} max={200} value={googlePoints} onChange={(event) => setGooglePoints(Math.max(1, Math.min(200, Number(event.target.value) || 1)))} className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
          </label>
        </div>

        {targetMode === "existing" ? (
          <label className="mt-3 block space-y-1 text-sm font-semibold text-zinc-700">
            <span>Existing assignment</span>
            <select value={selectedAssignmentId} onChange={(event) => setSelectedAssignmentId(event.target.value)} className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800">
              <option value="">Select assignment</option>
              {assignments.map((item) => (
                <option key={item.id} value={item.id}>{item.label}</option>
              ))}
            </select>
          </label>
        ) : (
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <input value={inlineExamId} onChange={(event) => setInlineExamId(event.target.value)} placeholder="Exam UUID" className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
            <input value={inlineModuleId} onChange={(event) => setInlineModuleId(event.target.value)} placeholder="Module ID" className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
            <input type="datetime-local" value={inlineDueAt} onChange={(event) => setInlineDueAt(event.target.value)} className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button type="button" disabled={googlePending || isGoogleSubmitting} onClick={() => { void runGoogleCreate("preview"); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">
            {isGoogleSubmitting ? "Working..." : "Preview"}
          </button>
          <button type="button" disabled={googlePending || isGoogleSubmitting} onClick={() => { void runGoogleCreate("create"); }} className="ui-focus-ring min-h-11 rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-900 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70">
            {isGoogleSubmitting ? "Working..." : "Queue Create Stub"}
          </button>
        </div>

        {googleResult ? (
          <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-sm font-semibold text-zinc-900">{googleResult.message}</p>
            <p className="text-xs font-semibold text-zinc-600">Request: {googleResult.syncRequestId} | State: {googleResult.syncState}</p>
          </div>
        ) : null}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A05 Quick-Review Run Flow v1</h3>
        {quickReviewPending ? <p className="mt-2 text-sm font-semibold text-amber-900">Quick-review run follows `NEXT_PUBLIC_TESTING_QUICK_REVIEW_V1_PENDING`.</p> : null}
        {runError ? <p className="mt-2 text-sm font-semibold text-red-700">{runError}</p> : null}
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void loadQuickReviewRun(); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">{isRunBusy ? "Refreshing..." : "Refresh"}</button>
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("start"); }} className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70">Start</button>
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("pause"); }} className="ui-focus-ring min-h-11 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-900 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-70">Pause</button>
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("resume"); }} className="ui-focus-ring min-h-11 rounded-full border border-sky-300 bg-sky-50 px-4 py-2 text-sm font-bold text-sky-900 hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70">Resume</button>
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("previous"); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">Previous</button>
          <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("next"); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">Next</button>
        </div>
        {runState ? (
          <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-sm font-semibold text-zinc-900">Topic: {runState.stub.topic} | Status: {runState.run.status.toUpperCase()}</p>
            {currentPrompt ? <p className="mt-1 text-sm text-zinc-700">{currentPrompt.prompt}</p> : null}
            {currentPromptOutcome ? <p className="mt-1 text-xs font-semibold text-zinc-600">Correct {currentPromptOutcome.correctCount} | Incorrect {currentPromptOutcome.incorrectCount} | Skip {currentPromptOutcome.skippedCount}</p> : null}
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("record_outcome", "correct"); }} className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70">Mark Correct</button>
              <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("record_outcome", "incorrect"); }} className="ui-focus-ring min-h-11 rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-bold text-red-900 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70">Mark Incorrect</button>
              <button type="button" disabled={quickReviewPending || isRunBusy} onClick={() => { void mutateRun("record_outcome", "skip"); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">Mark Skip</button>
            </div>
          </div>
        ) : (
          <p className="mt-2 text-sm font-medium text-zinc-600">Launch quick review in C-A03 first, then refresh run state.</p>
        )}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">C-A06 Ingestion Upload + Parse-Preview UX</h3>
        {ingestionPending ? <p className="mt-2 text-sm font-semibold text-amber-900">Ingestion preview is behind `NEXT_PUBLIC_TESTING_INGESTION_V1_PENDING`.</p> : null}
        {ingestionError ? <p className="mt-2 text-sm font-semibold text-red-700">{ingestionError}</p> : null}
        <div className="mt-3 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <input value={ingestionTitle} onChange={(event) => setIngestionTitle(event.target.value)} placeholder="Source title" className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
          <input value={ingestionTags} onChange={(event) => setIngestionTags(event.target.value)} placeholder="tags, comma-separated" className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
        </div>
        <textarea rows={5} value={ingestionRawText} onChange={(event) => setIngestionRawText(event.target.value)} className="ui-focus-ring mt-3 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800" />
        <div className="mt-3 flex flex-wrap gap-2">
          <button type="button" disabled={ingestionPending || isIngestionSubmitting} onClick={() => { void runIngestion("preview"); }} className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70">{isIngestionSubmitting ? "Working..." : "Generate Preview"}</button>
          <button type="button" disabled={ingestionPending || isIngestionSubmitting} onClick={() => { void runIngestion("save_stub"); }} className="ui-focus-ring min-h-11 rounded-full border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-900 hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-70">{isIngestionSubmitting ? "Working..." : "Save Stub"}</button>
        </div>
        {ingestionResult ? (
          <div className="mt-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <p className="text-sm font-semibold text-zinc-900">{ingestionResult.message}</p>
            <p className="text-xs font-semibold text-zinc-600">Quality {ingestionResult.parse.qualityBand.toUpperCase()} | Segments {ingestionResult.parse.segmentCount} | Keywords {ingestionResult.parse.keywordCount} | Read {ingestionResult.parse.estimatedReadMinutes} min</p>
            <p className="mt-1 text-sm text-zinc-700">{ingestionResult.objectives.map((entry) => entry.text).join(" | ")}</p>
          </div>
        ) : null}
      </SoftCard>
    </div>
  );
}
