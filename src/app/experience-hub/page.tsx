"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
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
import AdaptiveBackground from "@/app/components/ui/adaptive-background";

const SpatialExperienceHub = dynamic(
    () => import("@/components/experience/SpatialExperienceHub").then((mod) => mod.SpatialExperienceHub),
    { ssr: false, loading: () => null },
);

/* --- Types --- */
export default function ExperienceHubPage() {
    const [selectedMascot, setSelectedMascot] = useState<FriendId>("pixel");
    const [showToast, setShowToast] = useState(false);
    const [voyagerAccess, setVoyagerAccess] = useState<{
        fullAccess: boolean;
        matchedClasses: string[];
    } | null>(null);
    const [isAccessLoading, setIsAccessLoading] = useState(true);
    const voyagerZeroPremiumPending = isVoyagerZeroPremiumPending() && !voyagerAccess?.fullAccess;
    const experienceHubLaunchPending = isLaunchFeaturePending("experience-hub");

    useEffect(() => {
        let cancelled = false;

        const loadAccess = async () => {
            try {
                const response = await fetch("/api/vr/access");
                const payload = await response.json().catch(() => null);
                if (cancelled) return;
                setVoyagerAccess({
                    fullAccess: Boolean(payload?.access?.fullAccess),
                    matchedClasses: Array.isArray(payload?.access?.matchedClasses) ? payload.access.matchedClasses as string[] : [],
                });
            } catch {
                if (!cancelled) {
                    setVoyagerAccess({ fullAccess: false, matchedClasses: [] });
                }
            } finally {
                if (!cancelled) {
                    setIsAccessLoading(false);
                }
            }
        };

        void loadAccess();

        return () => {
            cancelled = true;
        };
    }, []);

    if (experienceHubLaunchPending) {
        return (
            <main className="min-h-screen px-6 py-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-bold text-foreground">Experience Hub</h1>
                <p className="mt-3 max-w-md text-sm text-foreground/70">
                    This feature is currently available for approved beta classes only.
                </p>
                <div className="mt-6 flex gap-3">
                    <Link href="/dashboard" className="inline-flex min-h-11 items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">
                        Back to dashboard
                    </Link>
                    <Link href="/explore" className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-transparent dark:text-foreground">
                        Continue learning
                    </Link>
                </div>
            </main>
        );
    }

    if (isAccessLoading) {
        return (
            <main className="min-h-screen px-6 py-10">
                <p className="text-sm text-foreground/60">Checking immersive beta access...</p>
            </main>
        );
    }

    if (!voyagerAccess?.fullAccess) {
        return (
            <main className="min-h-screen px-6 py-10 flex flex-col items-center justify-center text-center">
                <h1 className="text-2xl font-bold text-foreground">Experience Hub</h1>
                <p className="mt-3 max-w-md text-sm text-foreground/70">
                    Immersive mode is currently open to approved Beta Tester, Admin, Support, Teacher, School, and Partner classes.
                </p>
                <div className="mt-6 flex gap-3">
                    <Link href="/dashboard" className="inline-flex min-h-11 items-center rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900">
                        Back to dashboard
                    </Link>
                    <Link href="/support" className="inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 dark:border-zinc-600 dark:bg-transparent dark:text-foreground">
                        Request beta access
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <DeviceGatewayProvider enabled>
            <MascotHost friendId={selectedMascot} initialMood="happy">
                <ExperienceHubContent
                    selectedMascot={selectedMascot}
                    setSelectedMascot={setSelectedMascot}
                    showToast={showToast}
                    setShowToast={setShowToast}
                    voyagerZeroPremiumPending={voyagerZeroPremiumPending}
                    matchedAccessClasses={voyagerAccess.matchedClasses}
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
    matchedAccessClasses: string[];
};

function ExperienceHubContent({
    selectedMascot,
    setSelectedMascot,
    showToast,
    setShowToast,
    voyagerZeroPremiumPending,
    matchedAccessClasses,
}: ExperienceHubContentProps) {
    const { friendshipLevel, interactionCount } = useMascot();
    const { canSpatial, isReady, tier, capabilities } = useDeviceGateway();
    const canRenderSpatial = !voyagerZeroPremiumPending && canSpatial;

    return (
        <main className="min-h-screen relative text-foreground selection:bg-indigo-500/30 overflow-x-hidden">
            <AdaptiveBackground />

            {/* Spatial Computing / VR Background — DORMANT until Tier 2+ */}
            {canRenderSpatial ? (
                <div className="fixed inset-0 pointer-events-auto z-0 opacity-80 mix-blend-screen mix-blend-plus-lighter">
                    <SpatialExperienceHub />
                </div>
            ) : (
                /* Graceful Fallback for Tier 0/1 */
                <div className="fixed inset-0 z-0 bg-transparent">
                    {voyagerZeroPremiumPending ? (
                        <div className="absolute bottom-6 left-6 z-50 bg-white/10 backdrop-blur-2xl border border-amber-400/30 rounded-3xl p-6 max-w-xs text-xs text-zinc-300 shadow-xl">
                            <p className="font-bold text-amber-300 mb-2 flex items-center gap-2 text-sm uppercase tracking-widest">
                                <Lock className="h-4 w-4" />
                                Premium Feature
                            </p>
                            <p className="text-sm font-medium leading-relaxed">
                                Voyager Zero Spatial Mode is temporarily locked while premium rollout
                                and device certification are pending.
                            </p>
                            <p className="mt-3 text-zinc-400">
                                Core Experience Hub content remains available.
                            </p>
                            <Link
                                href="/billing/paywall"
                                className="mt-4 w-full inline-flex items-center justify-center rounded-full bg-amber-400 text-zinc-900 px-4 py-2 text-sm font-black transition-transform hover:scale-105"
                            >
                                Join Waitlist
                            </Link>
                        </div>
                    ) : isReady && tier < 2 && (
                        <div className="absolute bottom-6 left-6 z-50 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 max-w-xs text-xs text-zinc-300 shadow-xl">
                            <p className="font-bold text-cyan-300 mb-2 text-sm uppercase tracking-widest">✨ Upgrade Available</p>
                            <p className="text-sm font-medium leading-relaxed">Your device is in <strong className="text-white">{capabilities?.tierLabel}</strong> mode. Connect a VR headset to unlock the full 3D spatial experience.</p>
                            <div className="mt-4 space-y-2">
                                <p className="flex items-center gap-2 text-zinc-300/90">
                                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                                    GPU profile: Tier {capabilities?.gpuTier ?? 0}
                                </p>
                                <p className="flex items-center gap-2 text-zinc-300/90">
                                    <span className="h-1 w-1 rounded-full bg-cyan-400" />
                                    Confidence: {Math.round((capabilities?.discoveryConfidence ?? 0) * 100)}%
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* --- Top Navigation / Overview --- */}
            <header className="relative z-20 px-6 pt-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col gap-2"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-white/10 backdrop-blur-xl p-2.5 rounded-2xl border border-white/20 shadow-sm">
                            <Trophy className="text-amber-400 w-6 h-6 drop-shadow-sm" />
                        </div>
                        <span className="text-xs font-black tracking-[0.3em] uppercase text-zinc-500">Level {friendshipLevel + 11} Pioneer</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-zinc-900 leading-[0.9] drop-shadow-sm">
                        EXPERIENCE <br /> <span className="text-indigo-600">HUB</span>
                    </h1>
                    {matchedAccessClasses.length > 0 ? (
                        <p className="mt-2 text-xs font-black uppercase tracking-widest text-emerald-600">
                            Beta class access: {matchedAccessClasses.join(", ")}
                        </p>
                    ) : null}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-12 bg-white/40 backdrop-blur-3xl border border-white/60 p-8 rounded-[3.5rem] shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                    <ProgressOrb percent={68} size={160} />

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Global Score</span>
                                <span className="text-4xl font-black italic tracking-tighter text-zinc-900">14,250</span>
                            </div>
                            <div className="w-px h-12 bg-black/5" />
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest">Day Streak</span>
                                <JuicyStreak count={7} />
                            </div>
                        </div>

                        <PhysicalButton
                            onClick={() => {
                                void hapticSuccess();
                                setShowToast(true);
                                setTimeout(() => setShowToast(false), 3000);
                            }}
                            className="bg-indigo-600 h-16 px-10 rounded-[1.5rem] font-black italic tracking-wide"
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
                        <h2 className="text-2xl font-black italic tracking-tight flex items-center gap-3 text-zinc-900">
                            <Compass className="text-indigo-600" /> YOUR PROGRESS GALAXY
                        </h2>
                        <div className="flex gap-4">
                            <span className="text-[10px] font-black text-indigo-600 bg-indigo-500/5 px-3 py-1 rounded-full border border-indigo-500/10 uppercase tracking-widest animate-pulse">
                                Reality Sync: 100%
                            </span>
                        </div>
                    </div>

                    {/* HIGH-FIDELITY GALAXY MAP */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-[3rem] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-xl overflow-hidden"
                    >
                        <GalaxyMap />
                    </motion.div>

                    {/* Global Quest System (New Feature) */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 border border-white/20 rounded-[3rem] p-10 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[100px] pointer-events-none" />

                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-3 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <Sparkles className="text-amber-300 w-8 h-8 animate-spin-slow" />
                                    <h3 className="text-3xl font-black italic tracking-tight text-white">THE NEBULA ARCHIVE</h3>
                                </div>
                                <p className="text-indigo-100 text-base font-medium max-w-md">
                                    Coordinate with <span className="text-amber-300 font-bold">Echo</span> to retrieve lost 4K data nodes from the History Constellation.
                                </p>
                            </div>
                            <PhysicalButton
                                className="bg-white text-indigo-600 px-10 rounded-[1.5rem] h-16 font-black italic"
                                onClick={() => void hapticSuccess()}
                            >
                                START QUEST ⚡
                            </PhysicalButton>
                        </div>

                        <div className="mt-10 grid grid-cols-3 gap-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className={`h-2 rounded-full ${i === 1 ? 'bg-amber-300 shadow-[0_0_15px_#fcd34d]' : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* --- Right Column: Social & Mascots --- */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] p-10 relative flex flex-col items-center text-center shadow-xl">
                        <div className="absolute top-6 right-8 flex flex-col items-center">
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1.5">Affinity</span>
                            <div className="w-20 h-1.5 bg-black/5 rounded-full overflow-hidden shadow-inner">
                                <div className="h-full bg-indigo-500" style={{ width: `${(interactionCount % 10) * 10}%` }} />
                            </div>
                        </div>

                        <div className="bg-indigo-500/10 px-4 py-1.5 rounded-full border border-indigo-500/20 text-[10px] font-black uppercase mb-8 text-indigo-600 shadow-sm">
                            Level {friendshipLevel} Companion
                        </div>
                        <MascotFriend id={selectedMascot} mood="happy" size="xl" />
                        <h3 className="mt-8 text-3xl font-black uppercase italic tracking-tighter text-zinc-900">
                            {selectedMascot} <span className="text-indigo-600">The Guide</span>
                        </h3>
                        <p className="mt-3 text-sm text-zinc-600 font-medium px-4 leading-relaxed">
                            &ldquo;You&apos;re doing amazing! Our bond is growing stronger with every mission we complete together.&rdquo;
                        </p>

                        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 w-full justify-center">
                            {(["pixel", "echo", "spark", "luna", "terra"] as FriendId[]).map(mid => (
                                <button
                                    key={mid}
                                    onClick={() => {
                                        void hapticSelection();
                                        setSelectedMascot(mid);
                                    }}
                                    className={`w-14 h-14 rounded-2xl border-2 transition-all flex items-center justify-center ${selectedMascot === mid
                                        ? "bg-white border-indigo-500 scale-110 shadow-lg"
                                        : "bg-white/20 border-white/40 hover:bg-white/60 hover:border-white"
                                        }`}
                                >
                                    <MascotFriend id={mid} mood="happy" size="sm" />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Sparkles className="text-amber-500 w-6 h-6" />
                            <h3 className="text-2xl font-black italic text-zinc-900">ACTIVE STREAK</h3>
                        </div>
                        <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[3rem] border border-white/60 text-center shadow-xl">
                            <p className="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600 drop-shadow-sm">7 DAYS</p>
                            <p className="text-[11px] uppercase font-black text-zinc-500 tracking-[0.2em] mt-3">Personal Record Smashed!</p>
                        </div>
                    </div>

                    <PhysicalButton
                        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 h-24 text-2xl font-black italic rounded-[2.5rem] shadow-xl"
                        onClick={() => void hapticSuccess()}
                    >
                        LAUNCH MISSION 🚀
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
