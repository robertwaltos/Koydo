"use client";

import { useEffect, useState } from "react";
import { useFeature } from "@/lib/platform/use-feature";
import SoftCard from "@/app/components/ui/soft-card";
import SoftButton from "@/app/components/ui/soft-button";

type RewardItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  xp_cost: number;
  image_url: string | null;
  is_unlocked: boolean;
};

export default function RewardStorePage() {
  const { allowed, isLoading } = useFeature("reward_store");
  const [items, setItems] = useState<RewardItem[]>([]);
  const [myXP, setMyXP] = useState(0);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);

  useEffect(() => {
    if (!allowed) return;
    async function load() {
      try {
        const res = await fetch("/api/rewards");
        if (res.ok) {
          const data = await res.json();
          setItems(data.items ?? []);
          setMyXP(data.availableXP ?? 0);
        }
      } catch {}
      setLoading(false);
    }
    void load();
  }, [allowed]);

  if (isLoading || loading) return null;
  if (!allowed) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-zinc-500">Reward Store requires parent approval.</p>
      </main>
    );
  }

  const handlePurchase = async (itemId: string) => {
    setPurchasing(itemId);
    try {
      const res = await fetch("/api/rewards/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ itemId }),
      });
      if (res.ok) {
        const data = await res.json();
        setMyXP(data.remainingXP ?? myXP);
        setItems((prev) => prev.map((i) => i.id === itemId ? { ...i, is_unlocked: true } : i));
      }
    } finally {
      setPurchasing(null);
    }
  };

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Reward Store</h1>
        <span className="rounded-xl bg-accent/10 px-4 py-2 text-sm font-bold text-accent">
          {myXP} XP available
        </span>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-500">{cat}</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {items.filter((i) => i.category === cat).map((item) => (
              <SoftCard key={item.id} className="flex flex-col items-center p-4 text-center">
                {item.image_url ? (
                  <img src={item.image_url} alt={item.name} className="mb-3 h-16 w-16 rounded-xl object-cover" />
                ) : (
                  <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-xl bg-zinc-100 text-2xl">
                    ?
                  </div>
                )}
                <p className="text-sm font-medium">{item.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{item.description}</p>

                {item.is_unlocked ? (
                  <span className="mt-3 text-xs font-medium text-emerald-600">Unlocked</span>
                ) : (
                  <SoftButton
                    variant="accent"
                    className="mt-3"
                    onClick={() => handlePurchase(item.id)}
                    disabled={myXP < item.xp_cost || purchasing === item.id}
                  >
                    {purchasing === item.id ? "..." : `${item.xp_cost} XP`}
                  </SoftButton>
                )}
              </SoftCard>
            ))}
          </div>
        </div>
      ))}
    </main>
  );
}
