"use client";

import { useState } from "react";

interface SearchResult {
  conceptId: string;
  label: string;
  score: number;
  subjects: string[];
  modules: {
    moduleId: string;
    moduleTitle: string;
    subject: string;
    lessonCount: number;
    questionCount: number;
  }[];
  relatedConcepts: string[];
  prerequisiteConcepts: string[];
}

interface SearchResponse {
  query: string;
  resultCount: number;
  results: SearchResult[];
  graphStats: {
    conceptCount: number;
    crossSubjectEdges: number;
  };
}

export default function KnowledgeGraphPanel() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [includePrereqs, setIncludePrereqs] = useState(false);
  const [subject, setSubject] = useState("");

  async function handleSearch() {
    if (query.length < 2) return;
    setLoading(true);
    try {
      const params = new URLSearchParams({ q: query, limit: "15" });
      if (subject) params.set("subject", subject);
      if (includePrereqs) params.set("prerequisites", "true");

      const res = await fetch(`/api/knowledge-graph/search?${params}`);
      if (res.ok) {
        const json = await res.json();
        setResults(json);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-blue-50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-sky-900">Knowledge Graph Search</h3>

      {/* Search bar */}
      <div className="mb-3 flex gap-2">
        <input
          type="text"
          placeholder="Search concepts (e.g., photosynthesis, algebra, gravity)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1 rounded-lg border border-sky-200 px-3 py-2 text-sm"
        />
        <button
          onClick={handleSearch}
          disabled={loading || query.length < 2}
          className="rounded-lg bg-sky-600 px-4 py-2 text-sm font-medium text-white hover:bg-sky-700 disabled:opacity-50"
        >
          {loading ? "..." : "Search"}
        </button>
      </div>

      {/* Filters */}
      <div className="mb-4 flex items-center gap-4">
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="rounded border border-gray-200 px-2 py-1 text-xs"
        >
          <option value="">All subjects</option>
          {[
            "Math", "Science", "English", "History", "Geography",
            "Computer Science", "Art", "Music", "Business",
          ].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <label className="flex items-center gap-1.5 text-xs text-gray-600">
          <input
            type="checkbox"
            checked={includePrereqs}
            onChange={(e) => setIncludePrereqs(e.target.checked)}
            className="rounded"
          />
          Show prerequisites
        </label>
        {results && (
          <span className="ml-auto text-xs text-sky-600">
            {results.graphStats.conceptCount.toLocaleString()} concepts indexed
          </span>
        )}
      </div>

      {/* Results */}
      {results && (
        <>
          <div className="mb-2 text-sm text-sky-700">
            {results.resultCount} results for &ldquo;{results.query}&rdquo;
          </div>

          <div className="space-y-3">
            {results.results.map((result) => (
              <div
                key={result.conceptId}
                className="rounded-lg border border-sky-200 bg-white p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold capitalize text-sky-900">
                    {result.label}
                  </span>
                  <span className="rounded-full bg-sky-100 px-2 py-0.5 text-xs font-medium text-sky-700">
                    Score: {result.score.toFixed(1)}
                  </span>
                </div>

                {/* Subjects */}
                <div className="mt-1 flex flex-wrap gap-1">
                  {result.subjects.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700"
                    >
                      {s}
                    </span>
                  ))}
                  {result.subjects.length > 1 && (
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs text-purple-700">
                      Cross-subject
                    </span>
                  )}
                </div>

                {/* Modules */}
                {result.modules.length > 0 && (
                  <div className="mt-2">
                    <span className="text-xs font-medium text-gray-500">
                      Found in {result.modules.length} module{result.modules.length !== 1 ? "s" : ""}:
                    </span>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {result.modules.slice(0, 5).map((mod) => (
                        <span
                          key={mod.moduleId}
                          className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700"
                          title={`${mod.lessonCount} lessons, ${mod.questionCount} questions`}
                        >
                          {mod.moduleTitle}
                        </span>
                      ))}
                      {result.modules.length > 5 && (
                        <span className="text-xs text-gray-400">
                          +{result.modules.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Related concepts */}
                {result.relatedConcepts.length > 0 && (
                  <div className="mt-2 flex items-center gap-1">
                    <span className="text-xs text-gray-400">Related:</span>
                    {result.relatedConcepts.map((rc) => (
                      <button
                        key={rc}
                        onClick={() => {
                          setQuery(rc);
                          handleSearch();
                        }}
                        className="rounded bg-sky-50 px-1.5 py-0.5 text-xs text-sky-600 hover:bg-sky-100"
                      >
                        {rc}
                      </button>
                    ))}
                  </div>
                )}

                {/* Prerequisites */}
                {result.prerequisiteConcepts.length > 0 && (
                  <div className="mt-1 flex items-center gap-1">
                    <span className="text-xs text-orange-500">Prerequisites:</span>
                    {result.prerequisiteConcepts.map((pc) => (
                      <span
                        key={pc}
                        className="rounded bg-orange-50 px-1.5 py-0.5 text-xs text-orange-600"
                      >
                        {pc}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {results.resultCount === 0 && (
            <div className="py-6 text-center text-sm text-sky-500">
              No concepts found. Try broader terms or different subjects.
            </div>
          )}
        </>
      )}

      {!results && !loading && (
        <div className="py-6 text-center text-sm text-sky-400">
          Search across subjects to discover connected concepts and learning paths.
        </div>
      )}
    </div>
  );
}
