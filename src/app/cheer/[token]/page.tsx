import { notFound } from "next/navigation";
import Image from "next/image";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function BragSheetPage({ params }: { params: Promise<{ token: string }> }) {
  const resolvedParams = await params;
  const token = resolvedParams.token;
  const supabase = await createSupabaseServerClient();

  // 1. Fetch the valid link
  const { data: linkData, error: linkError } = await supabase
    .from("brag_sheet_links")
    .select("student_profile_id, views")
    .eq("token", token)
    .single();

  if (linkError || !linkData) {
    notFound();
  }

  // Increment views securely (since public can update where token matches and not expired)
  const { error: rpcError } = await supabase.rpc("increment_brag_sheet_views", { p_token: token });
  if (rpcError) {
    // If RPC doesn't exist yet, fallback to a standard update (RLS allows this)
    await supabase.from("brag_sheet_links").update({ views: linkData.views + 1 }).eq("token", token);
  }

  // 2. Fetch the student profile & stats
  const [profileRes, statsRes] = await Promise.all([
    supabase
      .from("student_profiles")
      .select("display_name, age_years")
      .eq("id", linkData.student_profile_id)
      .single(),
    supabase
      .from("gamification_states")
      .select("points, level, badges, quests_completed")
      .eq("student_profile_id", linkData.student_profile_id)
      .single()
  ]);

  if (!profileRes.data) notFound();

  const name = profileRes.data.display_name;
  const level = statsRes.data?.level ?? 1;
  const points = statsRes.data?.points ?? 0;
  const quests = statsRes.data?.quests_completed ?? 0;
  
  // Extract number of badges safely
  let badgesCount = 0;
  if (statsRes.data?.badges && typeof statsRes.data.badges === 'object') {
    badgesCount = Object.keys(statsRes.data.badges).length;
  }

  return (
    <main className="min-h-screen bg-indigo-50/50 py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-zinc-900/5">
        
        {/* Header Hero */}
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-8 py-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <span className="text-6xl drop-shadow-md mb-4 block">🌟</span>
          <h1 className="text-4xl font-black tracking-tight drop-shadow-sm mb-2">{name} is crushing it!</h1>
          <p className="text-lg font-medium text-white/90">Look at these amazing learning milestones.</p>
        </div>

        {/* Stats Grid */}
        <div className="p-8">
          <div className="grid grid-cols-2 gap-4">
            
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5 text-center">
              <span className="text-3xl block mb-2">🚀</span>
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-400">Level</p>
              <p className="text-3xl font-black text-indigo-900">{level}</p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-5 text-center">
              <span className="text-3xl block mb-2">✨</span>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-500">Points</p>
              <p className="text-3xl font-black text-amber-700">{points.toLocaleString()}</p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5 text-center">
              <span className="text-3xl block mb-2">🏅</span>
              <p className="text-xs font-bold uppercase tracking-widest text-emerald-500">Badges Won</p>
              <p className="text-3xl font-black text-emerald-800">{badgesCount}</p>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-sky-50/50 p-5 text-center">
              <span className="text-3xl block mb-2">🎯</span>
              <p className="text-xs font-bold uppercase tracking-widest text-sky-500">Quests</p>
              <p className="text-3xl font-black text-sky-800">{quests}</p>
            </div>

          </div>

          <div className="mt-8 text-center border-t border-zinc-100 pt-6">
            <p className="text-sm font-medium text-zinc-400">Powered by Koydo Education</p>
          </div>
        </div>

      </div>
    </main>
  );
}
