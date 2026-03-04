"use client";

import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import SoftCard from "@/app/components/ui/soft-card";

type AnalyticsResponse = {
  classId: string;
  className: string;
  examId: string | null;
  learnerCount: number;
  attemptCount: number;
  aggregateScore: number | null;
  weakDomains: string[];
  assignmentOutcomes: Array<{
    id: string;
    examId: string | null;
    moduleId: string | null;
    assignedAt: string;
    dueAt: string | null;
    estimatedMinutes: number;
    trackedBy: "exam_attempts" | "not_linked";
    assignedLearnerCount: number;
    submittedLearnerCount: number;
    submissionCount: number;
    completionRate: number;
    averageScore: number | null;
    isOverdue: boolean;
  }>;
  learnerProgress: Array<{
    learnerUserId: string;
    attempts: number;
    latestScore: number | null;
    averageScore: number | null;
    latestCompletedAt: string | null;
  }>;
  domainHeatmap: Record<string, { averageScore: number; attempts: number; weakCount: number }>;
};

type EnrollmentResponse = {
  enrollments: Array<{
    id: string;
    learnerUserId: string;
    learnerProfileId: string | null;
    parentConsent: boolean;
    enrolledAt: string;
    updatedAt: string;
  }>;
};

type AssignmentResponse = {
  assignments: Array<{
    id: string;
    classId: string;
    examId: string | null;
    moduleId: string | null;
    assignedBy: string;
    assignedAt: string;
    dueAt: string | null;
    createdAt: string;
    updatedAt: string;
    estimatedMinutes: number;
    previewReason: string | null;
  }>;
};

type AssignmentBuilderSuggestion = {
  targetType: "exam" | "module";
  examId: string | null;
  moduleId: string | null;
  label: string;
  reason: string;
  estimatedMinutes: number;
};

type TestingClassDetailClientProps = {
  classId: string;
};

export default function TestingClassDetailClient({ classId }: TestingClassDetailClientProps) {
  const [analytics, setAnalytics] = useState<AnalyticsResponse | null>(null);
  const [enrollments, setEnrollments] = useState<EnrollmentResponse["enrollments"]>([]);
  const [assignments, setAssignments] = useState<AssignmentResponse["assignments"]>([]);
  const [examFilter, setExamFilter] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [newLearnerUserId, setNewLearnerUserId] = useState("");
  const [newLearnerProfileId, setNewLearnerProfileId] = useState("");
  const [newParentConsent, setNewParentConsent] = useState(false);
  const [isSavingEnrollment, setIsSavingEnrollment] = useState(false);

  const [newExamId, setNewExamId] = useState("");
  const [newModuleId, setNewModuleId] = useState("");
  const [newDueAt, setNewDueAt] = useState("");
  const [isSavingAssignment, setIsSavingAssignment] = useState(false);

  const [builderMode, setBuilderMode] = useState<"domain" | "skill" | "weak_domains">("weak_domains");
  const [builderDomain, setBuilderDomain] = useState("");
  const [builderSkillQuery, setBuilderSkillQuery] = useState("");
  const [builderDueAt, setBuilderDueAt] = useState("");
  const [builderMaxAssignments, setBuilderMaxAssignments] = useState(3);
  const [builderWeakDomainCount, setBuilderWeakDomainCount] = useState(2);
  const [builderPreview, setBuilderPreview] = useState<AssignmentBuilderSuggestion[]>([]);
  const [builderPreviewMessage, setBuilderPreviewMessage] = useState<string | null>(null);
  const [isPreviewingBuilder, setIsPreviewingBuilder] = useState(false);
  const [isApplyingBuilder, setIsApplyingBuilder] = useState(false);

  const analyticsUrl = useMemo(() => {
    const examId = examFilter.trim();
    if (!examId) return `/api/testing/classes/${encodeURIComponent(classId)}/analytics`;
    return `/api/testing/classes/${encodeURIComponent(classId)}/analytics?examId=${encodeURIComponent(examId)}`;
  }, [classId, examFilter]);

  const loadAll = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [analyticsResponse, enrollmentResponse, assignmentResponse] = await Promise.all([
        fetch(analyticsUrl, { cache: "no-store" }),
        fetch(`/api/testing/classes/${encodeURIComponent(classId)}/enrollments`, { cache: "no-store" }),
        fetch(`/api/testing/classes/${encodeURIComponent(classId)}/assignments`, { cache: "no-store" }),
      ]);

      const analyticsPayload = await analyticsResponse.json().catch(() => null);
      const enrollmentPayload = await enrollmentResponse.json().catch(() => null);
      const assignmentPayload = await assignmentResponse.json().catch(() => null);

      if (!analyticsResponse.ok) {
        setError(analyticsPayload?.error ?? "Failed to load analytics.");
        setIsLoading(false);
        return;
      }
      if (!enrollmentResponse.ok) {
        setError(enrollmentPayload?.error ?? "Failed to load enrollments.");
        setIsLoading(false);
        return;
      }
      if (!assignmentResponse.ok) {
        setError(assignmentPayload?.error ?? "Failed to load assignments.");
        setIsLoading(false);
        return;
      }

      setAnalytics(analyticsPayload as AnalyticsResponse);
      setEnrollments(Array.isArray(enrollmentPayload?.enrollments) ? enrollmentPayload.enrollments : []);
      setAssignments(Array.isArray(assignmentPayload?.assignments) ? assignmentPayload.assignments : []);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "Failed to load class workspace.");
    } finally {
      setIsLoading(false);
    }
  }, [analyticsUrl, classId]);

  useEffect(() => {
    void loadAll();
  }, [loadAll]);

  function toIsoOrNull(value: string) {
    const trimmed = value.trim();
    if (!trimmed) return null;
    const parsedDate = new Date(trimmed);
    if (Number.isNaN(parsedDate.getTime())) return null;
    return parsedDate.toISOString();
  }

  async function saveEnrollment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newLearnerUserId.trim()) return;
    setIsSavingEnrollment(true);
    setError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/enrollments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          learnerUserId: newLearnerUserId.trim(),
          learnerProfileId: newLearnerProfileId.trim() || null,
          parentConsent: newParentConsent,
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.error ?? "Failed to save enrollment.");
        return;
      }
      setNewLearnerUserId("");
      setNewLearnerProfileId("");
      setNewParentConsent(false);
      await loadAll();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Failed to save enrollment.");
    } finally {
      setIsSavingEnrollment(false);
    }
  }

  async function saveAssignment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!newExamId.trim() && !newModuleId.trim()) return;
    setIsSavingAssignment(true);
    setError(null);
    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/assignments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          examId: newExamId.trim() || null,
          moduleId: newModuleId.trim() || null,
          dueAt: toIsoOrNull(newDueAt),
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.error ?? "Failed to save assignment.");
        return;
      }
      setNewExamId("");
      setNewModuleId("");
      setNewDueAt("");
      await loadAll();
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "Failed to save assignment.");
    } finally {
      setIsSavingAssignment(false);
    }
  }

  async function runAssignmentBuilder(previewOnly: boolean) {
    const payload: Record<string, unknown> = {
      mode: builderMode,
      dueAt: toIsoOrNull(builderDueAt),
      maxAssignments: builderMaxAssignments,
      weakDomainCount: builderWeakDomainCount,
      previewOnly,
    };

    if (builderMode === "domain") {
      payload.domain = builderDomain.trim();
    }
    if (builderMode === "skill") {
      payload.skillQuery = builderSkillQuery.trim();
    }

    if (previewOnly) {
      setIsPreviewingBuilder(true);
    } else {
      setIsApplyingBuilder(true);
    }
    setError(null);
    setBuilderPreviewMessage(null);

    try {
      const response = await fetch(`/api/testing/classes/${encodeURIComponent(classId)}/assignments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await response.json().catch(() => null)) as {
        error?: string;
        message?: string;
        weakDomains?: string[];
        suggestions?: AssignmentBuilderSuggestion[];
        assignments?: AssignmentResponse["assignments"];
      } | null;

      if (!response.ok) {
        setError(data?.error ?? "Assignment builder request failed.");
        return;
      }

      if (Array.isArray(data?.suggestions)) {
        setBuilderPreview(data.suggestions);
      } else {
        setBuilderPreview([]);
      }
      setBuilderPreviewMessage(data?.message ?? null);

      if (!previewOnly) {
        await loadAll();
      }
    } catch (builderError) {
      setError(builderError instanceof Error ? builderError.message : "Assignment builder request failed.");
    } finally {
      if (previewOnly) {
        setIsPreviewingBuilder(false);
      } else {
        setIsApplyingBuilder(false);
      }
    }
  }

  const domainEntries = useMemo(() => {
    if (!analytics) return [];
    return Object.entries(analytics.domainHeatmap).sort((left, right) => right[1].averageScore - left[1].averageScore);
  }, [analytics]);

  const weakDomains = analytics?.weakDomains ?? [];
  const builderCanRun =
    builderMode === "weak_domains"
      ? true
      : builderMode === "domain"
        ? builderDomain.trim().length >= 2
        : builderSkillQuery.trim().length >= 2;

  if (isLoading) {
    return (
      <SoftCard className="p-5">
        <p className="text-sm font-semibold text-zinc-700">Loading class workspace...</p>
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

      <SoftCard className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">{analytics?.className ?? "Class"}</h2>
            <p className="text-sm font-medium text-zinc-700">
              Learners {analytics?.learnerCount ?? 0} | Attempts {analytics?.attemptCount ?? 0} | Aggregate {analytics?.aggregateScore ?? "N/A"}%
            </p>
          </div>
          <form
            className="flex flex-wrap items-center gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              void loadAll();
            }}
          >
            <input
              type="text"
              value={examFilter}
              onChange={(event) => setExamFilter(event.target.value)}
              placeholder="Optional exam UUID filter"
              className="ui-focus-ring min-h-11 rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <button
              type="submit"
              className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
            >
              Refresh
            </button>
          </form>
        </div>
      </SoftCard>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <SoftCard as="section" className="p-5">
          <h3 className="text-lg font-bold text-zinc-900">Enroll Learner</h3>
          <form className="mt-3 space-y-2" onSubmit={saveEnrollment}>
            <input
              type="text"
              placeholder="Learner user UUID"
              value={newLearnerUserId}
              onChange={(event) => setNewLearnerUserId(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <input
              type="text"
              placeholder="Learner profile UUID (optional)"
              value={newLearnerProfileId}
              onChange={(event) => setNewLearnerProfileId(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <label className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700">
              <input
                type="checkbox"
                checked={newParentConsent}
                onChange={(event) => setNewParentConsent(event.target.checked)}
                className="size-4"
              />
              Parent consent confirmed
            </label>
            <button
              type="submit"
              disabled={isSavingEnrollment}
              className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSavingEnrollment ? "Saving..." : "Save Enrollment"}
            </button>
          </form>
        </SoftCard>

        <SoftCard as="section" className="p-5">
          <h3 className="text-lg font-bold text-zinc-900">Create Assignment</h3>
          <form className="mt-3 space-y-2" onSubmit={saveAssignment}>
            <input
              type="text"
              placeholder="Exam UUID (optional)"
              value={newExamId}
              onChange={(event) => setNewExamId(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <input
              type="text"
              placeholder="Module ID (optional)"
              value={newModuleId}
              onChange={(event) => setNewModuleId(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <input
              type="datetime-local"
              value={newDueAt}
              onChange={(event) => setNewDueAt(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
            <button
              type="submit"
              disabled={isSavingAssignment}
              className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSavingAssignment ? "Saving..." : "Save Assignment"}
            </button>
          </form>
        </SoftCard>
      </div>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">Assignment Builder</h3>
        <p className="mt-1 text-sm font-medium text-zinc-700">
          Generate class assignments from weak domains or skill-graph queries, then preview estimated completion time before assigning.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-3">
          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Builder mode</span>
            <select
              value={builderMode}
              onChange={(event) => setBuilderMode(event.target.value as "domain" | "skill" | "weak_domains")}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            >
              <option value="weak_domains">Weak Domains</option>
              <option value="domain">Domain Query</option>
              <option value="skill">Skill Query</option>
            </select>
          </label>

          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Due date (optional)</span>
            <input
              type="datetime-local"
              value={builderDueAt}
              onChange={(event) => setBuilderDueAt(event.target.value)}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>

          <label className="space-y-1 text-sm font-semibold text-zinc-700">
            <span>Max assignments</span>
            <input
              type="number"
              min={1}
              max={6}
              value={builderMaxAssignments}
              onChange={(event) => setBuilderMaxAssignments(Math.max(1, Math.min(6, Number(event.target.value) || 1)))}
              className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
            />
          </label>
        </div>

        {builderMode === "domain" ? (
          <input
            type="text"
            placeholder="Domain (example: network security)"
            value={builderDomain}
            onChange={(event) => setBuilderDomain(event.target.value)}
            className="ui-focus-ring mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
          />
        ) : null}

        {builderMode === "skill" ? (
          <input
            type="text"
            placeholder="Skill ID or label (example: fractions or skill-fractions-equivalent)"
            value={builderSkillQuery}
            onChange={(event) => setBuilderSkillQuery(event.target.value)}
            className="ui-focus-ring mt-3 min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
          />
        ) : null}

        {builderMode === "weak_domains" ? (
          <div className="mt-3 space-y-2">
            <label className="space-y-1 text-sm font-semibold text-zinc-700">
              <span>Weak domains to target</span>
              <input
                type="number"
                min={1}
                max={4}
                value={builderWeakDomainCount}
                onChange={(event) => setBuilderWeakDomainCount(Math.max(1, Math.min(4, Number(event.target.value) || 1)))}
                className="ui-focus-ring min-h-11 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm font-medium text-zinc-800"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {weakDomains.length === 0 ? (
                <p className="text-xs font-medium text-zinc-600">No weak domains detected yet from submitted attempts.</p>
              ) : (
                weakDomains.map((domain) => (
                  <span
                    key={domain}
                    className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold text-amber-800"
                  >
                    {domain}
                  </span>
                ))
              )}
            </div>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={!builderCanRun || isPreviewingBuilder || isApplyingBuilder}
            onClick={() => {
              void runAssignmentBuilder(true);
            }}
            className="ui-focus-ring min-h-11 rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isPreviewingBuilder ? "Previewing..." : "Preview Builder"}
          </button>
          <button
            type="button"
            disabled={!builderCanRun || isPreviewingBuilder || isApplyingBuilder}
            onClick={() => {
              void runAssignmentBuilder(false);
            }}
            className="ui-focus-ring min-h-11 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-900 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isApplyingBuilder ? "Assigning..." : "Assign Builder Set"}
          </button>
        </div>

        <div className="mt-3 space-y-2">
          {builderPreviewMessage ? (
            <p className="text-sm font-semibold text-zinc-700">{builderPreviewMessage}</p>
          ) : null}
          {builderPreview.length === 0 ? (
            <p className="text-sm font-medium text-zinc-600">No builder preview generated yet.</p>
          ) : (
            builderPreview.map((entry, index) => (
              <article key={`${entry.targetType}-${entry.examId ?? entry.moduleId ?? index}`} className="rounded-xl border border-zinc-200 bg-white p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-zinc-900">{entry.label}</p>
                  <p className="text-xs font-semibold text-zinc-700">~{entry.estimatedMinutes} min</p>
                </div>
                <p className="mt-1 text-xs text-zinc-600">{entry.reason}</p>
              </article>
            ))
          )}
        </div>
      </SoftCard>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <SoftCard as="section" className="p-5">
          <h3 className="text-lg font-bold text-zinc-900">Enrollments</h3>
          <div className="mt-3 space-y-2">
            {enrollments.length === 0 ? (
              <p className="text-sm font-medium text-zinc-600">No enrollments.</p>
            ) : (
              enrollments.map((entry) => (
                <article key={entry.id} className="rounded-xl border border-zinc-200 bg-white p-3">
                  <p className="text-sm font-semibold text-zinc-900">{entry.learnerUserId}</p>
                  <p className="text-xs text-zinc-600">
                    Consent: {entry.parentConsent ? "yes" : "no"} | Enrolled {new Date(entry.enrolledAt).toLocaleString()}
                  </p>
                  {entry.learnerProfileId ? (
                    <p className="text-xs text-zinc-600">Profile: {entry.learnerProfileId}</p>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </SoftCard>

        <SoftCard as="section" className="p-5">
          <h3 className="text-lg font-bold text-zinc-900">Assignments</h3>
          <div className="mt-3 space-y-2">
            {assignments.length === 0 ? (
              <p className="text-sm font-medium text-zinc-600">No assignments.</p>
            ) : (
              assignments.map((entry) => (
                <article key={entry.id} className="rounded-xl border border-zinc-200 bg-white p-3">
                  <p className="text-sm font-semibold text-zinc-900">
                    {entry.examId ? `Exam ${entry.examId}` : `Module ${entry.moduleId}`}
                  </p>
                  <p className="text-xs text-zinc-600">
                    Assigned {new Date(entry.assignedAt).toLocaleString()}
                    {entry.dueAt ? ` | Due ${new Date(entry.dueAt).toLocaleString()}` : ""} | ~{entry.estimatedMinutes} min
                  </p>
                  {entry.previewReason ? (
                    <p className="mt-1 text-xs text-zinc-600">{entry.previewReason}</p>
                  ) : null}
                </article>
              ))
            )}
          </div>
        </SoftCard>
      </div>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">Assignment Outcomes</h3>
        {analytics?.assignmentOutcomes.length ? (
          <div className="mt-3 space-y-2">
            {analytics.assignmentOutcomes.map((entry) => (
              <article key={entry.id} className="rounded-xl border border-zinc-200 bg-white p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-zinc-900">
                    {entry.examId ? `Exam ${entry.examId}` : `Module ${entry.moduleId}`}
                  </p>
                  <p className="text-xs font-semibold text-zinc-700">~{entry.estimatedMinutes} min</p>
                </div>
                <p className="mt-1 text-xs text-zinc-600">
                  Assigned {new Date(entry.assignedAt).toLocaleString()}
                  {entry.dueAt ? ` | Due ${new Date(entry.dueAt).toLocaleString()}` : ""}
                </p>
                <p className="mt-1 text-xs text-zinc-700">
                  Completion {entry.completionRate}% | Learners {entry.submittedLearnerCount}/{entry.assignedLearnerCount} | Submissions {entry.submissionCount}
                  {entry.averageScore != null ? ` | Avg score ${entry.averageScore}%` : ""}
                </p>
                {entry.trackedBy === "not_linked" ? (
                  <p className="mt-1 text-xs text-zinc-500">This module assignment is not yet linked to exam-attempt analytics.</p>
                ) : null}
                {entry.isOverdue ? (
                  <p className="mt-1 text-xs font-semibold text-amber-700">Overdue with incomplete submissions.</p>
                ) : null}
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm font-medium text-zinc-600">No assignment outcomes yet.</p>
        )}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">Domain Heatmap</h3>
        {domainEntries.length === 0 ? (
          <p className="mt-2 text-sm font-medium text-zinc-600">No completed attempts for current filter.</p>
        ) : (
          <div className="mt-3 space-y-2">
            {domainEntries.map(([domain, stats]) => (
              <article key={domain} className="rounded-xl border border-zinc-200 bg-white p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-zinc-900">{domain}</p>
                  <p className="text-xs font-semibold text-zinc-700">
                    Avg {stats.averageScore}% | Attempts {stats.attempts} | Weak {stats.weakCount}
                  </p>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full ${stats.averageScore >= 70 ? "bg-emerald-500" : "bg-amber-500"}`}
                    style={{ width: `${Math.max(0, Math.min(100, stats.averageScore))}%` }}
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <h3 className="text-lg font-bold text-zinc-900">Learner Progress</h3>
        {analytics?.learnerProgress.length ? (
          <div className="mt-3 space-y-2">
            {analytics.learnerProgress.map((entry) => (
              <article key={entry.learnerUserId} className="rounded-xl border border-zinc-200 bg-white p-3">
                <p className="text-sm font-semibold text-zinc-900">{entry.learnerUserId}</p>
                <p className="text-xs text-zinc-700">
                  Attempts {entry.attempts} | Latest {entry.latestScore ?? "N/A"}% | Average {entry.averageScore ?? "N/A"}%
                </p>
                <p className="text-xs text-zinc-600">
                  Last completed: {entry.latestCompletedAt ? new Date(entry.latestCompletedAt).toLocaleString() : "N/A"}
                </p>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-sm font-medium text-zinc-600">No learner progress yet.</p>
        )}
      </SoftCard>

      <SoftCard as="section" className="p-5">
        <p className="text-sm font-medium text-zinc-700">
          Use this workspace for teacher-side management while testing/classroom mode is in rollout.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href="/testing"
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            Testing Catalog
          </Link>
          <Link
            href="/testing/classes"
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
          >
            All Classes
          </Link>
          <Link
            href={`/testing/classes/${encodeURIComponent(classId)}/classroom`}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-violet-300 bg-violet-50 px-4 py-2 text-sm font-bold text-violet-900 hover:bg-violet-100"
          >
            Classroom Control Room
          </Link>
        </div>
      </SoftCard>
    </div>
  );
}

