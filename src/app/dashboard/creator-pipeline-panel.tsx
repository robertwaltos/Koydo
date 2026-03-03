"use client";

import { useState, useEffect, useCallback } from "react";

type SubmissionStatus =
  | "draft"
  | "submitted"
  | "in_review"
  | "revision_requested"
  | "approved"
  | "published"
  | "rejected"
  | "archived";

interface Submission {
  id: string;
  title: string;
  description: string;
  subject: string;
  gradeBand: string | null;
  status: SubmissionStatus;
  sourceType: string;
  licenseType: string;
  rubricScore: number | null;
  rubricDetails: { feedback?: string[]; scores?: Record<string, number> };
  submittedAt: string | null;
  publishedAt: string | null;
  createdAt: string;
}

const STATUS_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  draft: { bg: "bg-gray-100", text: "text-gray-700", label: "Draft" },
  submitted: { bg: "bg-blue-100", text: "text-blue-700", label: "Submitted" },
  in_review: { bg: "bg-yellow-100", text: "text-yellow-700", label: "In Review" },
  revision_requested: { bg: "bg-orange-100", text: "text-orange-700", label: "Needs Revision" },
  approved: { bg: "bg-green-100", text: "text-green-700", label: "Approved" },
  published: { bg: "bg-emerald-100", text: "text-emerald-700", label: "Published" },
  rejected: { bg: "bg-red-100", text: "text-red-700", label: "Rejected" },
  archived: { bg: "bg-gray-100", text: "text-gray-500", label: "Archived" },
};

const LICENSE_LABELS: Record<string, string> = {
  "cc-by-4.0": "CC BY 4.0",
  "cc-by-sa-4.0": "CC BY-SA 4.0",
  "cc-by-nc-4.0": "CC BY-NC 4.0",
  cc0: "CC0 (Public Domain)",
  "all-rights-reserved": "All Rights Reserved",
  "educational-use": "Educational Use",
  custom: "Custom License",
};

const SUBJECTS = [
  "Math", "Science", "English", "History", "Geography",
  "Computer Science", "Art", "Music", "Languages", "Health",
  "Business", "Engineering", "Social Studies",
];

export default function CreatorPipelinePanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<"my" | "create">("my");
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Create form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subject, setSubject] = useState("Math");
  const [gradeBand, setGradeBand] = useState("");
  const [sourceType, setSourceType] = useState("original");
  const [licenseType, setLicenseType] = useState("cc-by-4.0");
  const [rightsHolder, setRightsHolder] = useState("");
  const [creating, setCreating] = useState(false);

  const fetchSubmissions = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/content/submissions?role=creator");
      if (res.ok) {
        const json = await res.json();
        setSubmissions(json.submissions ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSubmissions();
  }, [fetchSubmissions]);

  async function handleCreate() {
    setCreating(true);
    setMessage(null);
    try {
      const res = await fetch("/api/content/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          subject,
          gradeBand: gradeBand || undefined,
          content: {
            lessons: [],
            learningObjectives: [],
            tags: [],
          },
          sourceType,
          licenseType,
          rightsHolder: rightsHolder || undefined,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage({ type: "success", text: `Draft "${json.submission.title}" created!` });
      setTab("my");
      setTitle("");
      setDescription("");
      fetchSubmissions();
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Failed" });
    } finally {
      setCreating(false);
    }
  }

  async function handleAction(id: string, action: "submit" | "publish") {
    setMessage(null);
    try {
      const res = await fetch(`/api/content/submissions/${id}?action=${action}`, {
        method: "POST",
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage({
        type: "success",
        text: action === "submit" ? "Submitted for review!" : "Published!",
      });
      fetchSubmissions();
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Failed" });
    }
  }

  return (
    <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-cyan-50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-teal-900">Creator Pipeline</h3>

      {message && (
        <div
          className={`mb-3 rounded-lg p-2 text-sm ${
            message.type === "success"
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      {/* Tabs */}
      <div className="mb-4 flex gap-1 rounded-lg bg-teal-100 p-1">
        <button
          onClick={() => setTab("my")}
          className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            tab === "my"
              ? "bg-white text-teal-900 shadow-sm"
              : "text-teal-700 hover:bg-teal-50"
          }`}
        >
          My Submissions ({submissions.length})
        </button>
        <button
          onClick={() => setTab("create")}
          className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            tab === "create"
              ? "bg-white text-teal-900 shadow-sm"
              : "text-teal-700 hover:bg-teal-50"
          }`}
        >
          + New Content
        </button>
      </div>

      {/* My Submissions */}
      {tab === "my" && (
        <>
          {loading && <div className="py-6 text-center text-teal-500">Loading...</div>}

          {!loading && submissions.length === 0 && (
            <div className="py-6 text-center text-sm text-teal-500">
              No submissions yet. Create your first content!
            </div>
          )}

          <div className="space-y-2">
            {submissions.map((sub) => {
              const style = STATUS_STYLES[sub.status] ?? STATUS_STYLES.draft;
              return (
                <div
                  key={sub.id}
                  className="rounded-lg border border-teal-200 bg-white p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-teal-900">{sub.title}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}
                    >
                      {style.label}
                    </span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
                    <span className="rounded bg-teal-100 px-1.5 py-0.5 text-teal-700">
                      {sub.subject}
                    </span>
                    {sub.gradeBand && (
                      <span className="rounded bg-gray-100 px-1.5 py-0.5">
                        {sub.gradeBand}
                      </span>
                    )}
                    <span>{LICENSE_LABELS[sub.licenseType] ?? sub.licenseType}</span>
                  </div>

                  {/* Quality score bar */}
                  {sub.rubricScore !== null && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-gray-500">Quality Score</span>
                        <span
                          className={`font-semibold ${
                            sub.rubricScore >= 70
                              ? "text-green-600"
                              : sub.rubricScore >= 50
                                ? "text-yellow-600"
                                : "text-red-600"
                          }`}
                        >
                          {sub.rubricScore.toFixed(0)}/100
                        </span>
                      </div>
                      <div className="mt-0.5 h-1.5 rounded-full bg-gray-200">
                        <div
                          className={`h-full rounded-full transition-all ${
                            sub.rubricScore >= 70
                              ? "bg-green-500"
                              : sub.rubricScore >= 50
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                          style={{ width: `${Math.min(sub.rubricScore, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Feedback */}
                  {sub.rubricDetails?.feedback && sub.rubricDetails.feedback.length > 0 && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-xs text-teal-600">
                        Feedback ({sub.rubricDetails.feedback.length})
                      </summary>
                      <ul className="mt-1 space-y-0.5 text-xs text-gray-600">
                        {sub.rubricDetails.feedback.map((fb, i) => (
                          <li key={i} className="rounded bg-gray-50 px-2 py-1">
                            {fb}
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  {/* Actions */}
                  <div className="mt-2 flex gap-2">
                    {sub.status === "draft" && (
                      <button
                        onClick={() => handleAction(sub.id, "submit")}
                        className="rounded bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700"
                      >
                        Submit for Review
                      </button>
                    )}
                    {sub.status === "approved" && (
                      <button
                        onClick={() => handleAction(sub.id, "publish")}
                        className="rounded bg-green-600 px-3 py-1 text-xs text-white hover:bg-green-700"
                      >
                        Publish
                      </button>
                    )}
                    {sub.status === "revision_requested" && (
                      <button
                        onClick={() => handleAction(sub.id, "submit")}
                        className="rounded bg-orange-600 px-3 py-1 text-xs text-white hover:bg-orange-700"
                      >
                        Resubmit
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Create New Content */}
      {tab === "create" && (
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Content title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength={200}
            className="w-full rounded-lg border border-teal-200 px-3 py-2 text-sm"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={2000}
            rows={3}
            className="w-full rounded-lg border border-teal-200 px-3 py-2 text-sm"
          />

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full rounded border border-gray-200 px-2 py-1.5 text-sm"
              >
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Grade Band
              </label>
              <select
                value={gradeBand}
                onChange={(e) => setGradeBand(e.target.value)}
                className="w-full rounded border border-gray-200 px-2 py-1.5 text-sm"
              >
                <option value="">Not specified</option>
                <option value="K-2">K-2</option>
                <option value="3-5">3-5</option>
                <option value="6-8">6-8</option>
                <option value="9-12">9-12</option>
                <option value="College">College</option>
              </select>
            </div>
          </div>

          {/* Provenance & Rights */}
          <div className="rounded-lg border border-teal-100 bg-teal-50/50 p-3">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-teal-600">
              Provenance &amp; Rights
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="mb-1 block text-xs text-gray-600">Source Type</label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value)}
                  className="w-full rounded border border-gray-200 px-2 py-1.5 text-sm"
                >
                  <option value="original">Original</option>
                  <option value="adapted">Adapted</option>
                  <option value="curated">Curated</option>
                  <option value="ai_assisted">AI-Assisted</option>
                  <option value="translated">Translated</option>
                  <option value="remix">Remix</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs text-gray-600">License</label>
                <select
                  value={licenseType}
                  onChange={(e) => setLicenseType(e.target.value)}
                  className="w-full rounded border border-gray-200 px-2 py-1.5 text-sm"
                >
                  {Object.entries(LICENSE_LABELS).map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <input
              type="text"
              placeholder="Rights holder (optional)"
              value={rightsHolder}
              onChange={(e) => setRightsHolder(e.target.value)}
              maxLength={200}
              className="mt-2 w-full rounded border border-gray-200 px-2 py-1.5 text-sm"
            />
          </div>

          <button
            onClick={handleCreate}
            disabled={creating || title.length < 2}
            className="w-full rounded-lg bg-teal-600 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
          >
            {creating ? "Creating Draft..." : "Create Draft"}
          </button>
        </div>
      )}
    </div>
  );
}
