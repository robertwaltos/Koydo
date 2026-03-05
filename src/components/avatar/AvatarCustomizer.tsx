"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type AvatarItem = {
  id: string;
  name: string;
  slot: "hat" | "face" | "body" | "background";
  image_url: string;
};

type AvatarConfig = {
  hat: string | null;
  face: string | null;
  body: string | null;
  background: string | null;
};

const SLOTS: Array<{ slot: AvatarItem["slot"]; label: string }> = [
  { slot: "hat", label: "Hat" },
  { slot: "face", label: "Face" },
  { slot: "body", label: "Body" },
  { slot: "background", label: "Background" },
];

export default function AvatarCustomizer({ profileId }: { profileId: string }) {
  const { allowed } = useFeature("avatar_customization");
  const [unlockedItems, setUnlockedItems] = useState<AvatarItem[]>([]);
  const [config, setConfig] = useState<AvatarConfig>({ hat: null, face: null, body: null, background: null });
  const [activeSlot, setActiveSlot] = useState<AvatarItem["slot"]>("hat");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch(`/api/avatar?profileId=${profileId}`);
        if (res.ok) {
          const data = await res.json();
          setUnlockedItems(data.items ?? []);
          setConfig(data.config ?? { hat: null, face: null, body: null, background: null });
        }
      } catch {}
    }
    void load();
  }, [profileId, allowed]);

  if (!allowed) return null;

  const slotItems = unlockedItems.filter((i) => i.slot === activeSlot);

  const handleEquip = (itemId: string) => {
    setConfig((c) => ({ ...c, [activeSlot]: c[activeSlot] === itemId ? null : itemId }));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await fetch("/api/avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileId, config }),
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <SoftCard className="space-y-4 p-5">
      <h3 className="text-lg font-semibold">Avatar Customizer</h3>

      {/* Slot tabs */}
      <div className="flex gap-2">
        {SLOTS.map((s) => (
          <SoftButton
            key={s.slot}
            variant={activeSlot === s.slot ? "accent" : "neutral"}
            onClick={() => setActiveSlot(s.slot)}
          >
            {s.label}
          </SoftButton>
        ))}
      </div>

      {/* Items grid */}
      {slotItems.length === 0 ? (
        <p className="text-xs text-zinc-500">No {activeSlot} items unlocked yet. Visit the Reward Store!</p>
      ) : (
        <div className="grid grid-cols-4 gap-3">
          {slotItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleEquip(item.id)}
              className={`rounded-xl border-2 p-2 transition-all ${
                config[activeSlot] === item.id ? "border-accent bg-accent/5" : "border-border hover:border-accent/30"
              }`}
            >
              <img src={item.image_url} alt={item.name} className="h-12 w-12 mx-auto rounded-lg object-cover" />
              <p className="mt-1 text-[10px] text-center font-medium">{item.name}</p>
            </button>
          ))}
        </div>
      )}

      <SoftButton variant="accent" onClick={handleSave} disabled={saving}>
        {saving ? "Saving…" : "Save Avatar"}
      </SoftButton>
    </SoftCard>
  );
}
