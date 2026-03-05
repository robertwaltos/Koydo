"use client";

import { useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

const ACCOMMODATIONS = [
  { id: "extra_time", label: "Extended Time (1.5x)", description: "Additional time on quizzes and timed activities" },
  { id: "text_to_speech", label: "Text-to-Speech", description: "Read content aloud automatically" },
  { id: "larger_text", label: "Larger Text", description: "Increase default text size in lessons" },
  { id: "simplified_language", label: "Simplified Language", description: "Use simpler vocabulary and shorter sentences" },
  { id: "visual_aids", label: "Visual Aids", description: "Show additional diagrams and images" },
  { id: "reduced_distractions", label: "Reduced Distractions", description: "Minimize animations and decorative elements" },
  { id: "audio_instructions", label: "Audio Instructions", description: "Provide spoken instructions for activities" },
  { id: "color_coding", label: "Color Coding", description: "Use color highlights for key concepts" },
];

export default function AccommodationSelector({
  profileId,
  initialAccommodations = [],
  onSaved,
}: {
  profileId: string;
  initialAccommodations?: string[];
  onSaved?: (accommodations: string[]) => void;
}) {
  const { allowed } = useFeature("learning_profile_accommodations");
  const [selected, setSelected] = useState<Set<string>>(new Set(initialAccommodations));
  const [saving, setSaving] = useState(false);

  if (!allowed) return null;

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const accommodations = Array.from(selected);
      await fetch("/api/profiles/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, accommodations }),
      });
      onSaved?.(accommodations);
    } finally {
      setSaving(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Learning Accommodations</h3>
      <p className="text-xs text-zinc-500">Select accommodations to personalize the learning experience.</p>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {ACCOMMODATIONS.map((a) => (
          <label
            key={a.id}
            className={`flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors ${
              selected.has(a.id) ? "border-accent bg-accent/5" : "border-border"
            }`}
          >
            <input
              type="checkbox"
              checked={selected.has(a.id)}
              onChange={() => toggle(a.id)}
              className="mt-0.5 h-4 w-4 rounded"
            />
            <div>
              <p className="text-sm font-medium">{a.label}</p>
              <p className="text-xs text-zinc-500">{a.description}</p>
            </div>
          </label>
        ))}
      </div>

      <SoftButton variant="accent" onClick={handleSave} disabled={saving}>
        {saving ? "Saving…" : "Save Accommodations"}
      </SoftButton>
    </SoftCard>
  );
}
