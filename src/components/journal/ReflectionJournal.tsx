"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

const PROMPTS = [
  "What was the most interesting thing you learned today?",
  "What was challenging about this lesson?",
  "How would you explain this topic to a friend?",
  "What questions do you still have?",
  "How does this connect to something you already know?",
];

type JournalEntry = {
  id: string;
  prompt: string;
  response: string;
  lesson_id: string | null;
  created_at: string;
};

export default function ReflectionJournal({
  profileId,
  lessonId,
}: {
  profileId: string;
  lessonId?: string;
}) {
  const { allowed } = useFeature("reflection_journal");
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [prompt, setPrompt] = useState(PROMPTS[0]);
  const [response, setResponse] = useState("");
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const url = lessonId
          ? `/api/journal?profileId=${profileId}&lessonId=${lessonId}`
          : `/api/journal?profileId=${profileId}`;
        const res = await fetch(url);
        if (res.ok) {
          const data = await res.json();
          setEntries(data.entries ?? []);
        }
      } catch { /* silent */ }
    }
    void load();
  }, [profileId, lessonId, allowed]);

  if (!allowed) return null;

  const handleSave = async () => {
    if (!response.trim()) return;
    setSaving(true);
    try {
      const res = await fetch("/api/journal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, prompt, response: response.trim(), lessonId }),
      });
      if (res.ok) {
        const data = await res.json();
        setEntries((prev) => [data.entry, ...prev]);
        setResponse("");
        setShowForm(false);
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Reflection Journal</h3>
        {!showForm && (
          <SoftButton variant="accent" onClick={() => setShowForm(true)}>
            New Entry
          </SoftButton>
        )}
      </div>

      {showForm && (
        <div className="space-y-3 rounded-xl border border-border p-4">
          <select
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm"
          >
            {PROMPTS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          <textarea
            value={response}
            onChange={(e) => setResponse(e.target.value)}
            placeholder="Write your reflection…"
            rows={4}
            className="w-full rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm"
          />
          <div className="flex gap-2">
            <SoftButton variant="accent" onClick={handleSave} disabled={saving || !response.trim()}>
              {saving ? "Saving…" : "Save"}
            </SoftButton>
            <SoftButton variant="ghost" onClick={() => setShowForm(false)}>Cancel</SoftButton>
          </div>
        </div>
      )}

      {entries.length > 0 && (
        <div className="space-y-3">
          {entries.slice(0, 5).map((e) => (
            <div key={e.id} className="rounded-xl border border-border p-3">
              <p className="text-xs font-medium text-zinc-500">{e.prompt}</p>
              <p className="mt-1 text-sm">{e.response}</p>
              <p className="mt-1 text-[10px] text-zinc-400">
                {new Date(e.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </SoftCard>
  );
}
