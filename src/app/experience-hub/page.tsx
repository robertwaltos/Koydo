"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import MascotHost from "@/components/experience/MascotHost";
import MascotFriend from "@/components/experience/KoydoMascotFriends";
import PhysicalButton from "@/components/experience/PhysicalButton";
import JuicyStreak from "@/components/experience/JuicyStreak";
import AchievementToast from "@/components/experience/AchievementToast";
import type { FriendId } from "@/components/experience/KoydoMascotFriends";
import {
    Trophy,
    Sparkles,
    Compass,
    Lock,
} from "lucide-react";
import { hapticSelection, hapticSuccess } from "@/lib/platform/haptics";
import ProgressOrb from "@/components/experience/ProgressOrb";
import GalaxyMap from "@/components/experience/GalaxyMap";
import { useMascot } from "@/components/experience/MascotHost";
import { DeviceGatewayProvider, useDeviceGateway } from "@/components/experience/DeviceGatewayProvider";
import { isVoyagerZeroPremiumPending } from "@/lib/platform/features";
import { isLaunchFeaturePending } from "@/lib/platform/launch-readiness";
import ComingSoonBanner from "@/app/components/coming-soon-banner";

const SpatialExperienceHub = dynamic(
    () => import("@/components/experience/SpatialExperienceHub").then((mod) => mod.SpatialExperienceHub),
    { ssr: false, loading: () => null },
);

/* --- Types --- */
export default function ExperienceHubPage() {
    const [selectedMascot, setSelectedMascot] = useState<FriendId>("pixel");
    const [showToast, setShowToast] = useState(false);
    const voyagerZeroPremiumPending = isVoyagerZeroPremiumPending();
    const experienceHubLaunchPending = isLaunchFeaturePending("experience-hub");

    if (experienceHubLaunchPending) {
        return (
            <main className="min-h-screen px-6 py-10">
                <ComingSoonBanner
                    title="New Experience"
                    description="More exciting features coming soon. Stay tuned!"
                    primaryHref="/dashboard"
                    primaryLabel="Back to dashboard"
                    secondaryHref="/explore"
                    secondaryLabel="Continue learning"
                />
            </main>
        );
    }

    return (
        <DeviceGatewayProvider enabled={!voyagerZeroPremiumPending}>
            <MascotHost friendId={selectedMascot} initialMood="happy">
                <ExperienceHubContent
                    selectedMascot={selectedMascot}
                    setSelectedMascot={setSelectedMascot}
                    showToast={showToast}
                    setShowToast={setShowToast}
                    voyagerZeroPremiumPending={voyagerZeroPremiumPending}
                />
            </MascotHost>
        </DeviceGatewayProvider>
    );
}

type ExperienceHubContentProps = {
    selectedMascot: FriendId;
    setSelectedMascot: (id: FriendId) => void;
    showToast: boolean;
    setShowToast: (show: boolean) => void;
    voyagerZeroPremiumPending: boolean;
};

function ExperienceHubContent({
    selectedMascot,
    setSelectedMascot,
    showToast,
    setShowToast,
    voyagerZeroPremiumPending,
}: ExperienceHubContentProps) {
    const { friendshipLevel, interactionCount } = useMascot();
    const { canSpatial, isReady, tier, capabilities } = useDeviceGateway();
    const canRenderSpatial = !voyagerZeroPremiumPending && canSpatial;

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-indigo-500/30 overflow-x-hidden">
            {/* Spatial Computing / VR Background — DORMANT until Tier 2+ */}
            {canRenderSpatial ? (
                <div className="fixed inset-0 pointer-events-auto z-0 opacity-80 mix-blend-screen mix-blend-plus-lighter">
                    <SpatialExperienceHub />
                </div>
            ) : (
                /* Graceful Fallback for Tier 0/1 */
                <div className="fixed inset-0 z-0 bg-gradient-to-br from-slate-950 via-indigo-950/50 to-slate-950">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(52,211,153,0.1),transparent_50%)]" />
                    {voyagerZeroPremiumPending ? (
                        <div className="absolute bottom-6 left-6 z-50 bg-white/5 backdrop-blur-xl border border-amber-400/30 rounded-2xl p-4 max-w-xs text-xs text-zinc-300">
                            <p className="font-bold text-amber-300 mb-1 flex items-center gap-2">
                                <Lock className="h-3.5 w-3.5" />
                                Premium Pending Feature
                            </p>
                            <p>
                                Voyager Zero Spatial Mode is temporarily locked while premium rollout
                                and device certification are pending.
                            </p>
                            <p className="mt-2 text-zinc-400">
                                Core Experience Hub content remains available.
                            </p>
                            <Link
                                href="/billing/paywall"
                                className="mt-3 inline-flex items-center rounded-full bg-amber-400/20 border border-amber-300/40 px-3 py-1.5 text-[11px] font-semibold text-amber-200 hover:bg-amber-400/30 transition"
                            >
                                Join Premium Waitlist
                            </Link>
                        </div>
                    ) : isReady && tier < 2 && (
                        <div className="absolute bottom-6 left-6 z-50 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 max-w-xs text-xs text-zinc-400">
                            <p className="font-bold text-cyan-300 mb-1">✨ Upgrade Available</p>
                            <p>Your device is running in <strong className="text-white">{capabilities?.tierLabel}</strong> mode. Connect a VR headset or use a more powerful GPU to unlock the full 3D spatial experience.</p>
                            <div className="mt-2 space-y-1">
                                <p className="text-zinc-300/90">
                                    GPU profile: Tier {capabilities?.gpuTier ?? 0}
                                    {capabilities?.hasWebGPU ? " • WebGPU ready" : " • WebGPU unavailable"}
                                </p>
                                <p className="text-zinc-300/90">
                                    Detection confidence: {Math.round((capabilities?.discoveryConfidence ?? 0) * 100)}%
                                    {" • "}
                                    {(capabilities?.discoveryConfidenceBand ?? "low").toUpperCase()}
                                </p>
                                {capabilities?.lowPowerModeLikely && (
                                    <p className="text-amber-300/90">🔋 Low-power conditions detected; fidelity auto-scaled down.</p>
                                )}
                                {capabilities?.canCast ? (
                                    <p className="text-emerald-300/80">
                                        📺 Remote streaming fallback available
                                        {capabilities?.streamingTargets.chromecast ? " • Chromecast" : ""}
                                        {capabilities?.streamingTargets.airplay ? " • AirPlay" : ""}
                                        {capabilities?.streamingTargets.dlna ? " • DLNA" : ""}
                                    </p>
                                ) : (
                                    <p className="text-zinc-500">📺 No remote streaming target detected.</p>
                                )}
                            </div>
                            {capabilities?.upgradePath.length ? (
                                <ul className="mt-3 space-y-1 text-[11px] text-zinc-300/85">
                                    {capabilities.upgradePath.slice(0, 3).map((item) => (
                                        <li key={item} className="flex gap-2">
                                            <span className="text-cyan-300">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : null}
                            {capabilities?.detectionVersion && (
                                <p className="mt-2 text-[10px] text-zinc-500">Detection {capabilities.detectionVersion}</p>
                            )}
                        </div>
                    )}
                </div>
            )}

            {/* Top UI Overlay Context */}
            <div className="fixed inset-0 pointer-events-none z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
            </div>

            {/* --- Top Navigation / Overview --- */}
            <header className="relative z-20 px-6 pt-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-2"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-indigo-500/20 p-2 rounded-xl border border-indigo-500/30">
                            <Trophy className="text-indigo-400 w-6 h-6" />
                        </div>
                        <span className="text-sm font-black tracking-widest uppercase text-indigo-400">Level {friendshipLevel + 11} Pioneer</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 leading-none">
                        EXPERIENCE <br /> HUB
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-12 bg-white/5 backdrop-blur-2xl border border-border/40 p-8 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <ProgressOrb percent={68} size={160} />

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-zinc-500">Global Score</span>
                                <span className="text-4xl font-black italic tracking-tighter">14,250</span>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-zinc-500">Day Streak</span>
                                <JuicyStreak count={7} />
                            </div>
                        </div>

                        <PhysicalButton
                            onClick={() => {
                                void hapticSuccess();
                                setShowToast(true);
                                setTimeout(() => setShowToast(false), 3000);
                            }}
                            className="bg-indigo-600 h-16 px-10 rounded-[1.5rem]"
                        >
                            CLAIM DAILY BONUS 🎁
                        </PhysicalButton>
                    </div>
                </motion.div>
            </header>

            <section className="relative z-20 max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* --- left Column: Progress Galaxy --- */}
                <div className="lg:col-span-8 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black italic tracking-tight flex items-center gap-3">
                            <Compass className="text-emerald-400" /> YOUR PROGRESS GALAXY
                        </h2>
                        <div className="flex gap-4">
                            <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 uppercase tracking-widest animate-pulse">
                                Reality Sync: 100%
                            </span>
                        </div>
                    </div>

                    {/* HIGH-FIDELITY GALAXY MAP */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <GalaxyMap />
                    </motion.div>

                    {/* Global Quest System (New Feature) */}
                    <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-border/40 rounded-[2.5rem] p-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="space-y-2 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <Sparkles className="text-amber-400 w-6 h-6 animate-spin-slow" />
                                    <h3 className="text-2xl font-black italic tracking-tight">GLOBAL QUEST: THE NEBULA ARCHIVE</h3>
                                </div>
                                <p className="text-zinc-400 text-sm font-medium">
                                    Coordinate with <span className="text-indigo-400">Echo</span> to retrieve lost 4K data nodes from the History Constellation.
                                </p>
                            </div>
                            <PhysicalButton
                                className="bg-white text-slate-950 px-8 rounded-2xl h-14"
                                onClick={() => void hapticSuccess()}
                            >
                                START QUEST ⚡
                            </PhysicalButton>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`h-2 rounded-full ${i === 1 ? 'bg-indigo-500 shadow-[0_0_10px_#6366f1]' : 'bg-white/5'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Social & Mascots --- */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-gradient-to-b from-indigo-500/20 to-transparent border border-border/40 rounded-[3rem] p-8 relative flex flex-col items-center text-center">
                        <div className="absolute top-4 right-6 flex flex-col items-center">
                            <span className="text-[8px] font-black text-white/40 uppercase tracking-widest mb-1">Affinity</span>
                            <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-400" style={{ width: `${(interactionCount % 10) * 10}%` }} />
                            </div>
                        </div>

                        <div className="bg-indigo-500/20 px-3 py-1 rounded-full border border-indigo-500/30 text-[9px] font-black uppercase mb-6">
                            Level {friendshipLevel} Companion
                        </div>
                        <MascotFriend id={selectedMascot} mood="happy" size="xl" />
                        <h3 className="mt-6 text-2xl font-black uppercase italic tracking-tighter">
                            {selectedMascot} <span className="text-indigo-400">The Guide</span>
                        </h3>
                        <p className="mt-2 text-sm text-zinc-400 font-medium px-4">
                            &ldquo;You&apos;re doing amazing! Our bond is growing stronger with every mission we complete together.&rdquo;
                        </p>

                        <div className="mt-8 flex gap-3 overflow-x-auto pb-2 w-full justify-center">
                            {(["pixel", "echo", "spark", "luna", "terra"] as FriendId[]).map(mid => (
                                <button
                                    key={mid}
                                    onClick={() => {
                                        void hapticSelection();
                                        setSelectedMascot(mid);
                                    }}
                                    className={`w-12 h-12 rounded-2xl border transition-all ${selectedMascot === mid
                                        ? "bg-white border-white scale-110 shadow-xl"
                                        : "bg-white/5 border-border/40 hover:bg-white/10"
                                        }`}
                                >
                                    <MascotFriend id={mid} mood="happy" size="sm" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-amber-400 w-5 h-5" />
                            <h3 className="text-xl font-black italic">ACTIVE STREAK</h3>
                        </div>
                        <div className="bg-white/5 p-6 rounded-[2.5rem] border border-border/40 text-center">
                            <p className="text-4xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-500">7 DAYS</p>
                            <p className="text-[10px] uppercase font-black text-zinc-500 tracking-widest mt-2">Personal Record Smashed!</p>
                        </div>
                    </div>

                    <PhysicalButton
                        className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 h-20 text-xl font-black italic rounded-[2rem]"
                        onClick={() => void hapticSuccess()}
                    >
                        LAUNCH NEW MISSION 🚀
                    </PhysicalButton>
                </div>
            </section>

            {/* Global Floating Elements */}
            <AnimatePresence>
                {showToast && (
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100]">
                        <AchievementToast
                            show={showToast}
                            title="Daily Bonus Unlocked!"
                            description="You've earned 500 Experience Points for checking in."
                            onClose={() => setShowToast(false)}
                            type="achievement"
                        />
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}
