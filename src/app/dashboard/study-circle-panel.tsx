"use client";

import { useState, useEffect, useCallback } from "react";

interface StudyCircle {
  id: string;
  name: string;
  description: string;
  subject: string | null;
  maxMembers: number;
  isPublic: boolean;
  inviteCode: string | null;
  memberCount: number;
  createdAt: string;
}

interface Challenge {
  id: string;
  title: string;
  description: string;
  challengeType: string;
  targetValue: number;
  subject: string | null;
  startsAt: string;
  endsAt: string;
  status: string;
  participantCount: number;
}

const CHALLENGE_TYPE_LABELS: Record<string, string> = {
  xp_race: "XP Race",
  lesson_count: "Lesson Sprint",
  streak: "Streak Challenge",
  quiz_score: "Quiz Master",
};

export default function StudyCirclePanel() {
  const [circles, setCircles] = useState<StudyCircle[]>([]);
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [tab, setTab] = useState<"circles" | "challenges">("circles");
  const [loading, setLoading] = useState(true);

  // Create circle form
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newMaxMembers, setNewMaxMembers] = useState(8);
  const [newPublic, setNewPublic] = useState(false);
  const [creating, setCreating] = useState(false);

  // Join form
  const [joinCode, setJoinCode] = useState("");
  const [joining, setJoining] = useState(false);

  // Create challenge form
  const [showCreateChallenge, setShowCreateChallenge] = useState(false);
  const [challengeTitle, setChallengeTitle] = useState("");
  const [challengeType, setChallengeType] = useState("xp_race");
  const [challengeTarget, setChallengeTarget] = useState(100);
  const [challengeDays, setChallengeDays] = useState(3);
  const [creatingChallenge, setCreatingChallenge] = useState(false);

  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const [circlesRes, challengesRes] = await Promise.all([
        fetch("/api/social/circles"),
        fetch("/api/social/challenges"),
      ]);
      if (circlesRes.ok) {
        const cj = await circlesRes.json();
        setCircles(cj.circles ?? []);
      }
      if (challengesRes.ok) {
        const chj = await challengesRes.json();
        setChallenges(chj.challenges ?? []);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  async function handleCreateCircle() {
    setCreating(true);
    setMessage(null);
    try {
      const res = await fetch("/api/social/circles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          description: newDesc,
          maxMembers: newMaxMembers,
          isPublic: newPublic,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage({ type: "success", text: `Circle "${json.circle.name}" created!` });
      setShowCreate(false);
      setNewName("");
      setNewDesc("");
      fetchData();
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Failed" });
    } finally {
      setCreating(false);
    }
  }

  async function handleJoin() {
    setJoining(true);
    setMessage(null);
    try {
      const res = await fetch("/api/social/circles", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inviteCode: joinCode }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage({ type: "success", text: "Joined the study circle!" });
      setJoinCode("");
      fetchData();
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Failed" });
    } finally {
      setJoining(false);
    }
  }

  async function handleCreateChallenge() {
    setCreatingChallenge(true);
    setMessage(null);
    try {
      const endsAt = new Date();
      endsAt.setDate(endsAt.getDate() + challengeDays);
      const res = await fetch("/api/social/challenges", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: challengeTitle,
          challengeType,
          targetValue: challengeTarget,
          endsAt: endsAt.toISOString(),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error);
      setMessage({ type: "success", text: `Challenge "${json.challenge.title}" created!` });
      setShowCreateChallenge(false);
      setChallengeTitle("");
      fetchData();
    } catch (err) {
      setMessage({ type: "error", text: err instanceof Error ? err.message : "Failed" });
    } finally {
      setCreatingChallenge(false);
    }
  }

  const activeChallenges = challenges.filter((c) => c.status === "active");
  const pastChallenges = challenges.filter((c) => c.status !== "active");

  return (
    <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-purple-50 p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-violet-900">Study Circles &amp; Challenges</h3>

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
      <div className="mb-4 flex gap-1 rounded-lg bg-violet-100 p-1">
        <button
          onClick={() => setTab("circles")}
          className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            tab === "circles"
              ? "bg-white text-violet-900 shadow-sm"
              : "text-violet-700 hover:bg-violet-50"
          }`}
        >
          Circles ({circles.length})
        </button>
        <button
          onClick={() => setTab("challenges")}
          className={`flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            tab === "challenges"
              ? "bg-white text-violet-900 shadow-sm"
              : "text-violet-700 hover:bg-violet-50"
          }`}
        >
          Challenges ({challenges.length})
        </button>
      </div>

      {loading && (
        <div className="py-6 text-center text-violet-500">Loading...</div>
      )}

      {/* ── Circles Tab ─────────────────────────────── */}
      {!loading && tab === "circles" && (
        <>
          {/* Join by code */}
          <div className="mb-4 flex gap-2">
            <input
              type="text"
              placeholder="Enter invite code..."
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="flex-1 rounded-lg border border-violet-200 px-3 py-2 text-sm uppercase tracking-wider"
            />
            <button
              onClick={handleJoin}
              disabled={joining || joinCode.length < 4}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700 disabled:opacity-50"
            >
              {joining ? "..." : "Join"}
            </button>
          </div>

          {/* Circle list */}
          {circles.length === 0 && (
            <div className="py-4 text-center text-sm text-violet-500">
              No study circles yet. Create one or join with an invite code!
            </div>
          )}

          <div className="space-y-2">
            {circles.map((circle) => (
              <div
                key={circle.id}
                className="rounded-lg border border-violet-200 bg-white p-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-violet-900">{circle.name}</span>
                  <span className="text-xs text-violet-500">
                    {circle.memberCount}/{circle.maxMembers} members
                  </span>
                </div>
                {circle.description && (
                  <p className="mt-1 text-xs text-gray-600">{circle.description}</p>
                )}
                <div className="mt-2 flex items-center gap-2">
                  {circle.subject && (
                    <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs text-violet-700">
                      {circle.subject}
                    </span>
                  )}
                  {circle.inviteCode && (
                    <span className="rounded-full bg-gray-100 px-2 py-0.5 font-mono text-xs text-gray-600">
                      Code: {circle.inviteCode}
                    </span>
                  )}
                  {circle.isPublic && (
                    <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                      Public
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Create circle */}
          {!showCreate ? (
            <button
              onClick={() => setShowCreate(true)}
              className="mt-3 w-full rounded-lg border-2 border-dashed border-violet-300 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50"
            >
              + Create Study Circle
            </button>
          ) : (
            <div className="mt-3 space-y-2 rounded-lg border border-violet-200 bg-white p-3">
              <input
                type="text"
                placeholder="Circle name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                maxLength={60}
                className="w-full rounded border border-gray-200 px-3 py-1.5 text-sm"
              />
              <textarea
                placeholder="Description (optional)"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                maxLength={300}
                rows={2}
                className="w-full rounded border border-gray-200 px-3 py-1.5 text-sm"
              />
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-1 text-xs text-gray-600">
                  Max:
                  <input
                    type="number"
                    min={2}
                    max={20}
                    value={newMaxMembers}
                    onChange={(e) => setNewMaxMembers(Number(e.target.value))}
                    className="w-14 rounded border border-gray-200 px-2 py-1 text-sm"
                  />
                </label>
                <label className="flex items-center gap-1 text-xs text-gray-600">
                  <input
                    type="checkbox"
                    checked={newPublic}
                    onChange={(e) => setNewPublic(e.target.checked)}
                    className="rounded"
                  />
                  Public
                </label>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleCreateCircle}
                  disabled={creating || newName.length < 2}
                  className="rounded-lg bg-violet-600 px-4 py-1.5 text-sm text-white hover:bg-violet-700 disabled:opacity-50"
                >
                  {creating ? "Creating..." : "Create"}
                </button>
                <button
                  onClick={() => setShowCreate(false)}
                  className="rounded-lg px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}

      {/* ── Challenges Tab ──────────────────────────── */}
      {!loading && tab === "challenges" && (
        <>
          {/* Active challenges */}
          {activeChallenges.length === 0 && pastChallenges.length === 0 && (
            <div className="py-4 text-center text-sm text-violet-500">
              No challenges yet. Create one to compete with friends!
            </div>
          )}

          {activeChallenges.length > 0 && (
            <div className="mb-3">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-violet-600">
                Active
              </h4>
              <div className="space-y-2">
                {activeChallenges.map((c) => (
                  <ChallengeCard key={c.id} challenge={c} />
                ))}
              </div>
            </div>
          )}

          {pastChallenges.length > 0 && (
            <div className="mb-3">
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Past
              </h4>
              <div className="space-y-2 opacity-70">
                {pastChallenges.map((c) => (
                  <ChallengeCard key={c.id} challenge={c} />
                ))}
              </div>
            </div>
          )}

          {/* Create challenge */}
          {!showCreateChallenge ? (
            <button
              onClick={() => setShowCreateChallenge(true)}
              className="mt-2 w-full rounded-lg border-2 border-dashed border-violet-300 py-2 text-sm font-medium text-violet-600 hover:bg-violet-50"
            >
              + New Challenge
            </button>
          ) : (
            <div className="mt-3 space-y-2 rounded-lg border border-violet-200 bg-white p-3">
              <input
                type="text"
                placeholder="Challenge title"
                value={challengeTitle}
                onChange={(e) => setChallengeTitle(e.target.value)}
                maxLength={120}
                className="w-full rounded border border-gray-200 px-3 py-1.5 text-sm"
              />
              <div className="flex gap-2">
                <select
                  value={challengeType}
                  onChange={(e) => setChallengeType(e.target.value)}
                  className="flex-1 rounded border border-gray-200 px-2 py-1.5 text-sm"
                >
                  {Object.entries(CHALLENGE_TYPE_LABELS).map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  min={1}
                  max={10000}
                  value={challengeTarget}
                  onChange={(e) => setChallengeTarget(Number(e.target.value))}
                  className="w-24 rounded border border-gray-200 px-2 py-1.5 text-sm"
                  placeholder="Target"
                />
              </div>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                Duration:
                <input
                  type="number"
                  min={1}
                  max={7}
                  value={challengeDays}
                  onChange={(e) => setChallengeDays(Number(e.target.value))}
                  className="w-14 rounded border border-gray-200 px-2 py-1 text-sm"
                />
                days
              </label>
              <div className="flex gap-2">
                <button
                  onClick={handleCreateChallenge}
                  disabled={creatingChallenge || challengeTitle.length < 2}
                  className="rounded-lg bg-violet-600 px-4 py-1.5 text-sm text-white hover:bg-violet-700 disabled:opacity-50"
                >
                  {creatingChallenge ? "Creating..." : "Start Challenge"}
                </button>
                <button
                  onClick={() => setShowCreateChallenge(false)}
                  className="rounded-lg px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function ChallengeCard({ challenge }: { challenge: Challenge }) {
  const isActive = challenge.status === "active";
  const endsAt = new Date(challenge.endsAt);
  const now = new Date();
  const hoursLeft = Math.max(0, Math.round((endsAt.getTime() - now.getTime()) / 3600000));

  return (
    <div className="rounded-lg border border-violet-200 bg-white p-3">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-violet-900">{challenge.title}</span>
        {isActive && (
          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
            {hoursLeft}h left
          </span>
        )}
      </div>
      <div className="mt-1 flex items-center gap-2 text-xs text-gray-500">
        <span className="rounded bg-violet-100 px-1.5 py-0.5 text-violet-700">
          {CHALLENGE_TYPE_LABELS[challenge.challengeType] ?? challenge.challengeType}
        </span>
        <span>Target: {challenge.targetValue}</span>
        <span>{challenge.participantCount} participants</span>
      </div>
    </div>
  );
}
