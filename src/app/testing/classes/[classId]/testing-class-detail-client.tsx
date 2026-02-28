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
  }>;
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
          dueAt: newDueAt.trim() || null,
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

  const domainEntries = useMemo(() => {
    if (!analytics) return [];
    return Object.entries(analytics.domainHeatmap).sort((left, right) => right[1].averageScore - left[1].averageScore);
  }, [analytics]);

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
              type="text"
              placeholder="Due at ISO datetime (optional)"
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
                    {entry.dueAt ? ` | Due ${new Date(entry.dueAt).toLocaleString()}` : ""}
                  </p>
                </article>
              ))
            )}
          </div>
        </SoftCard>
      </div>

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
        </div>
      </SoftCard>
    </div>
  );
}

