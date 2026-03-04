"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import type { GameDifficulty, GameResult, GameType } from "@/lib/games/types";
import { getRegisteredGame, isCoreGameType } from "@/lib/games/catalog";
import type { RewardRealmMasterySnapshot } from "@/lib/games/reward-realm";
import * as Games from "@/components/games";
import ImmersiveArcadeTemplate from "@/components/games/immersive-arcade-template";
import MascotHost from "@/components/experience/MascotHost";
import { useExperience } from "@/lib/gamification/experience-context";
import { useGameResult } from "@/lib/gamification/use-game-result";
import {
  LEGACY_GAME_COMPLETE_EVENT,
  createLegacySessionId,
  emitLegacyGameComplete,
  type LegacyGameCompleteDetail,
} from "@/lib/games/legacy-runtime-events";

type CoreGameComponentProps = {
  difficulty: GameDifficulty;
  onComplete: (result: GameResult) => void;
};

const CORE_COMPONENTS: Record<GameType, (props: CoreGameComponentProps) => React.JSX.Element> = {
  "letter-catcher": Games.LetterCatcher,
  "word-builder": Games.WordBuilder,
  "number-crunch": Games.NumberCrunch,
  "pattern-train": Games.PatternTrain,
  "story-sequencer": Games.StorySequencer,
  "memory-match": Games.MemoryMatch,
  "color-mixer": Games.ColorMixer,
  "shape-safari": Games.ShapeSafari,
};

const LEGACY_COMPONENTS: Record<string, () => React.JSX.Element> = {
  neural: Games.NeuralNavigator,
  fraction: Games.FractionForge,
  vocabulary: Games.VocabularyVoyager,
  artistic: Games.ArtisticAlgorithms,
  ethical: Games.EthicalEngine,
  synthesis: Games.SynthesisSphere,
  velocity: Games.VelocityVector,
  logic: Games.LogicalLink,
  canvas: Games.CosmicCanvas,
  chronicle: Games.ChronicleCase,
  syntax: Games.SyntaxSerpent,
  genetic: Games.GeneticGarden,
  quantum: Games.QuantumQuest,
  market: Games.MarketMaker,
  orbit: Games.OrbitOperator,
  cipher: Games.CipherCity,
  biome: Games.BiomeBuilder,
  rhythm: Games.RhythmRules,
  tectonic: Games.TectonicTrek,
  flora: Games.FloraFusion,
  bot: Games.BotBuilder,
  eco: Games.EcoEngineer,
  aero: Games.AeroArchitect,
  histo: Games.HistoHunt,
  nano: Games.NanoNavigator,
  "quantum-quirk": Games.QuantumQuirk,
  "star-steer": Games.StarSteer,
  "logic-labyrinth": Games.LogicLabyrinth,
  "bio-blast": Games.BioBlast,
  "ethos-engine": Games.EthosEngine,
  "echo-expedition": Games.EchosExpedition,
  "terra-trek": Games.TerrasTrek,
  "spark-quest": Games.SparksSparkQuest,
  "pixel-path": Games.PixelsPath,
  "luna-legend": Games.LunasLegend,
  "circuit-crusader": Games.CircuitCrusader,
  "gravity-goliath": Games.GravityGoliath,
  "protein-painter": Games.ProteinPainter,
  "linguist-lookout": Games.LinguistLookout,
  "fusion-founder": Games.FusionFounder,
  "stellar-state": Games.StellarState,
  "neural-net": Games.NeuralNet,
  "climate-commander": Games.ClimateCommander,
  "history-hacker": Games.HistoryHacker,
  "nano-nexus": Games.NanoNexus,
  "mars-colony": Games.MarsColony,
  "quantum-cascade": Games.QuantumCascade,
  "synthetic-architect": Games.SyntheticArchitect,
  "global-harmony": Games.GlobalHarmony,
  "evolution-prime": Games.EvolutionPrime,
  "word-woods": Games.WordWoods,
  "story-smith": Games.StorySmith,
  "alphabet-airship": Games.AlphabetAirship,
  "sentence-safari": Games.SentenceSafari,
  "rhyme-river": Games.RhymeRiver,
  "count-constellations": Games.CountConstellations,
  "fraction-factory": Games.FractionFactory,
  "zone-041": Games.Zone041SignalRescue,
  "zone-042": Games.Zone042MathRailCommander,
  "zone-043": Games.Zone043EchoStorySignal,
  "zone-044": Games.Zone044TerraLabSort,
  "zone-045": Games.Zone045LunaRhythmForge,
  "zone-046": Games.Zone046PixelCipherSprint,
  "zone-047": Games.Zone047SparkGridFuse,
  "zone-048": Games.Zone048EchoEvidenceJudge,
  "zone-049": Games.Zone049TerraHabitatTriage,
  "zone-050": Games.Zone050PixelLaneDefender,
  "zone-051": Games.Zone051LunaChorusCascade,
  "zone-052": Games.Zone052SparkReactorGrid,
  "zone-053": Games.Zone053EchoDebateDuel,
  "zone-054": Games.Zone054TerraWeatherCommand,
  "zone-055": Games.Zone055PixelDroneIntercept,
  "zone-056": Games.Zone056SparkOrbitalSurge,
  "zone-057": Games.Zone057EchoSignalCrossfire,
  "zone-058": Games.Zone058TerraRiftShelter,
  "zone-059": Games.Zone059LunaStageStrategy,
  "zone-060": Games.Zone060PixelCircuitSiege,
  "zone-061": Games.Zone061SparkFluxGauntlet,
  "zone-062": Games.Zone062EchoProofRelay,
  "zone-063": Games.Zone063TerraGreenhouseCommand,
  "zone-064": Games.Zone064LunaBeatlineRun,
  "zone-065": Games.Zone065PixelBreachHunter,
  "zone-066": Games.Zone066SparkThrusterTrial,
  "zone-067": Games.Zone067EchoTruthlineProtocol,
  "zone-068": Games.Zone068TerraWildsRecovery,
  "zone-069": Games.Zone069LunaPulseRally,
  "zone-070": Games.Zone070PixelFirewallFrontier,
  "zone-071": Games.Zone071SparkReactorConvoy,
  "zone-072": Games.Zone072EchoSignalTribunal,
  "zone-073": Games.Zone073TerraFrontlineWardens,
  "zone-074": Games.Zone074LunaSkylineSet,
  "zone-075": Games.Zone075PixelSentinelLattice,
  "zone-076": Games.Zone076SparkVaultThrust,
  "zone-077": Games.Zone077SparkReactorConvoy,
  "zone-078": Games.Zone078EchoSignalTribunal,
  "zone-079": Games.Zone079TerraFrontlineWardens,
  "zone-080": Games.Zone080LunaSkylineSet,
  "zone-081": Games.Zone081PixelSentinelLattice,
  "zone-082": Games.Zone082SparkVaultThrust,
  "zone-083": Games.Zone083SparkReactorConvoy,
  "zone-084": Games.Zone084EchoSignalTribunal,
  "zone-085": Games.Zone085TerraFrontlineWardens,
  "zone-086": Games.Zone086LunaSkylineSet,
  "zone-087": Games.Zone087PixelSentinelLattice,
  "zone-088": Games.Zone088SparkVaultThrust,
  "zone-089": Games.Zone089SparkReactorConvoy,
  "zone-090": Games.Zone090EchoSignalTribunal,
  "zone-091": Games.Zone091TerraFrontlineWardens,
  "zone-092": Games.Zone092LunaSkylineSet,
  "zone-093": Games.Zone093PixelSentinelLattice,
  "zone-094": Games.Zone094SparkVaultThrust,
  "zone-095": Games.Zone095SparkReactorConvoy,
  "zone-096": Games.Zone096EchoSignalTribunal,
  "zone-097": Games.Zone097TerraFrontlineWardens,
  "zone-098": Games.Zone098LunaSkylineSet,
  "zone-099": Games.Zone099PixelSentinelLattice,
  "zone-100": Games.Zone100SparkVaultThrust,
  "zone-101": Games.Zone101SparkReactorConvoy,
  "zone-102": Games.Zone102EchoSignalTribunal,
  "zone-104": Games.Zone104SparkReactorConvoy,
  "zone-105": Games.Zone105EchoSignalTribunal,
  "zone-106": Games.Zone106TerraFrontlineWardens,
  "zone-107": Games.Zone107LunaSkylineSet,
  "zone-108": Games.Zone108PixelSentinelLattice,
  "zone-109": Games.Zone109SparkVaultThrust,
  "zone-110": Games.Zone110SparkReactorConvoy,
  "zone-111": Games.Zone111EchoSignalTribunal,
  "zone-112": Games.Zone112TerraFrontlineWardens,
  "zone-113": Games.Zone113LunaSkylineSet,
  "zone-114": Games.Zone114PixelSentinelLattice,
  "zone-115": Games.Zone115SparkVaultThrust,
  "zone-116": Games.Zone116SparkReactorConvoy,
  "zone-117": Games.Zone117EchoSignalTribunal,
  "zone-118": Games.Zone118TerraFrontlineWardens,
  "zone-119": Games.Zone119LunaSkylineSet,
  "zone-121": Games.Zone121SparkVaultThrust,
  "zone-122": Games.Zone122SparkReactorConvoy,
  "zone-123": Games.Zone123EchoSignalTribunal,
  "zone-124": Games.Zone124TerraFrontlineWardens,
  "zone-125": Games.Zone125LunaSkylineSet,
  "zone-126": Games.Zone126PixelSentinelLattice,
  "zone-127": Games.Zone127SparkVaultThrust,
  "zone-128": Games.Zone128SparkReactorConvoy,
  "zone-129": Games.Zone129EchoSignalTribunal,
  "zone-130": Games.Zone130TerraFrontlineWardens,
  "zone-131": Games.Zone131LunaSkylineSet,
  "zone-132": Games.Zone132PixelSentinelLattice,
  "zone-133": Games.Zone133SparkVaultThrust,
  "zone-134": Games.Zone134SparkReactorConvoy,
  "zone-135": Games.Zone135EchoSignalTribunal,
  "zone-136": Games.Zone136TerraFrontlineWardens,
  "zone-137": Games.Zone137LunaSkylineSet,
  "zone-138": Games.Zone138PixelSentinelLattice,
  "zone-139": Games.Zone139SparkVaultThrust,
  "zone-140": Games.Zone140SparkReactorConvoy,
};

function friendForCategory(category: string): "pixel" | "spark" | "echo" | "luna" | "terra" {
  if (category === "creative") return "luna";
  if (category === "literacy") return "echo";
  if (category === "math") return "spark";
  if (category === "science") return "terra";
  return "pixel";
}

function reportAsCoreType(gameId: string): GameType {
  const hash = gameId
    .split("")
    .reduce((acc, char) => ((acc * 33) ^ char.charCodeAt(0)) >>> 0, 5381);
  const keys = Object.keys(CORE_COMPONENTS) as GameType[];
  return keys[hash % keys.length] ?? "memory-match";
}

const LEGACY_MIN_SUBMIT_MS = 12_000;
const LEGACY_MIN_INTERACTIONS = 6;
const LEGACY_TARGET_DURATION_MS: Record<GameDifficulty, number> = {
  easy: 25_000,
  medium: 35_000,
  hard: 45_000,
};
const LEGACY_TARGET_INTERACTIONS: Record<GameDifficulty, number> = {
  easy: 10,
  medium: 14,
  hard: 18,
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function buildLegacySubmissionMetrics(input: {
  elapsedMs: number;
  interactions: number;
  difficulty: GameDifficulty;
}) {
  const durationNormalized = clamp(
    input.elapsedMs / LEGACY_TARGET_DURATION_MS[input.difficulty],
    0,
    1,
  );
  const interactionNormalized = clamp(
    input.interactions / LEGACY_TARGET_INTERACTIONS[input.difficulty],
    0,
    1,
  );
  const composite = durationNormalized * 0.45 + interactionNormalized * 0.55;
  const ratio = clamp(0.35 + composite * 0.65, 0.35, 0.98);
  const maxScore = 100;

  return {
    score: Math.round(maxScore * ratio),
    maxScore,
    timeMs: clamp(input.elapsedMs, 0, 30 * 60 * 1000),
  };
}

type NetworkChallenge = {
  id: string;
  cohortId: string;
  title: string;
  description: string | null;
  participantCount: number;
  joined: boolean;
  leaderboardTop: Array<{
    userId: string;
    rank: number;
    totalPoints: number;
  }>;
  myEntry: {
    rank: number;
    totalPoints: number;
  } | null;
};

type PremiumStatus = {
  premium: boolean;
  upgradeUrl: string;
};

type PremiumSeasonPayload = {
  season: null | {
    id: string;
    title: string;
  };
  myEntry: null | {
    total_points: number;
    best_combo: number;
  };
};

type PremiumClanPayload = {
  clans: Array<{
    id: string;
    name: string;
    invite_code: string;
  }>;
};

type PremiumRoomPayload = {
  rooms: Array<{
    id: string;
    room_code: string;
    mode: string;
    status: string;
  }>;
};

type PremiumTournamentPayload = {
  tournaments: Array<{
    id: string;
    cohortId: string;
    title: string;
    description: string | null;
    participantCount: number;
    joined: boolean;
  }>;
};

type PremiumSeasonPassPayload = {
  season: null | {
    id: string;
    slug: string;
    title: string;
    description: string | null;
    startsAt: string;
    endsAt: string;
  };
  points: number;
  bestCombo: number;
  currentTier: number;
  claimableCount: number;
  tiers: Array<{
    tierIndex: number;
    pointsRequired: number;
    rewardCode: string;
    rewardLabel: string;
    unlocked: boolean;
    claimed: boolean;
  }>;
  nextTier: null | {
    tierIndex: number;
    pointsRequired: number;
    pointsRemaining: number;
    rewardLabel: string;
  };
};

type RewardRealmStatus = {
  unlocked: boolean;
  mastery: RewardRealmMasterySnapshot;
};

export default function GamePlayerPage() {
  const params = useParams<{ gameId: string }>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { awardXP } = useExperience();
  const { submitResult, isSubmitting } = useGameResult();

  const gameId = params.gameId;
  const game = getRegisteredGame(gameId);
  const gameCatalogId = game?.id ?? null;
  const gameTrack = game?.track ?? null;
  const requestedProfileId = searchParams.get("studentProfileId") ?? "";
  const isDailyChallengeRun = searchParams.get("daily") === "1";

  const [difficulty, setDifficulty] = useState<GameDifficulty>(() => {
    const requestedDifficulty = searchParams.get("difficulty");
    if (requestedDifficulty === "easy" || requestedDifficulty === "medium" || requestedDifficulty === "hard") {
      return requestedDifficulty;
    }
    return "medium";
  });
  const [playerAge, setPlayerAge] = useState<number>(10);
  const [profiles, setProfiles] = useState<Array<{ id: string; displayName: string; ageYears: number | null }>>([]);
  const [selectedProfileId, setSelectedProfileId] = useState<string>("");
  const [guardianPhrase, setGuardianPhrase] = useState("");
  const [guardianUnlocked, setGuardianUnlocked] = useState(false);
  const [resultMessage, setResultMessage] = useState<string>("");
  const [shareStatus, setShareStatus] = useState<string>("");
  const [rewardRealmStatus, setRewardRealmStatus] = useState<RewardRealmStatus | null>(null);
  const [rewardRealmStatusMessage, setRewardRealmStatusMessage] = useState<string>("");
  const [rewardRealmStatusLoading, setRewardRealmStatusLoading] = useState<boolean>(false);
  const [playStyle, setPlayStyle] = useState<"solo" | "party">(() => {
    const requestedStyle = searchParams.get("style");
    if (requestedStyle === "solo" || requestedStyle === "party") {
      return requestedStyle;
    }
    return "solo";
  });
  const [networkChallenges, setNetworkChallenges] = useState<NetworkChallenge[]>([]);
  const [networkStatus, setNetworkStatus] = useState<string>("");
  const [joiningChallengeId, setJoiningChallengeId] = useState<string>("");
  const [premiumStatus, setPremiumStatus] = useState<PremiumStatus | null>(null);
  const [premiumSeason, setPremiumSeason] = useState<PremiumSeasonPayload["season"]>(null);
  const [premiumSeasonEntry, setPremiumSeasonEntry] = useState<PremiumSeasonPayload["myEntry"]>(null);
  const [premiumClans, setPremiumClans] = useState<PremiumClanPayload["clans"]>([]);
  const [premiumRooms, setPremiumRooms] = useState<PremiumRoomPayload["rooms"]>([]);
  const [premiumTournaments, setPremiumTournaments] = useState<PremiumTournamentPayload["tournaments"]>([]);
  const [premiumSeasonPass, setPremiumSeasonPass] = useState<PremiumSeasonPassPayload | null>(null);
  const [premiumActionStatus, setPremiumActionStatus] = useState<string>("");
  const [roomCodeInput, setRoomCodeInput] = useState<string>("");
  const [clanInviteInput, setClanInviteInput] = useState<string>("");
  const [joiningRoomCode, setJoiningRoomCode] = useState<string>("");
  const [joiningClanCode, setJoiningClanCode] = useState<string>("");
  const [joiningTournamentId, setJoiningTournamentId] = useState<string>("");
  const [claimingTierIndex, setClaimingTierIndex] = useState<number | null>(null);
  const [creatingClan, setCreatingClan] = useState<boolean>(false);
  const [creatingRoom, setCreatingRoom] = useState<boolean>(false);
  const [legacyRunStartedAt, setLegacyRunStartedAt] = useState<number>(() => Date.now());
  const [legacyInteractionCount, setLegacyInteractionCount] = useState<number>(0);
  const [isLegacySubmitting, setIsLegacySubmitting] = useState<boolean>(false);
  const legacySessionIdRef = useRef<string>(createLegacySessionId());
  const legacyAutoEventSentRef = useRef<boolean>(false);
  const legacyLastHandledSessionRef = useRef<string>("");
  const legacySubmissionInFlightRef = useRef<boolean>(false);
  const [renderPreset, setRenderPreset] = useState<"standard" | "cinematic-rtx">(() => {
    const requested = searchParams.get("render");
    return requested === "cinematic-rtx" ? "cinematic-rtx" : "standard";
  });

  useEffect(() => {
    let active = true;
    const loadProfiles = async () => {
      const response = await fetch("/api/games/profiles", { cache: "no-store" });
      const payload = (await response.json().catch(() => ({}))) as {
        profiles?: Array<{ id: string; displayName: string; ageYears: number | null }>;
      };
      if (!active || !response.ok || !Array.isArray(payload.profiles)) return;
      setProfiles(payload.profiles);
      if (payload.profiles.length > 0) {
        const requestedProfile =
          requestedProfileId
            ? payload.profiles.find((entry) => entry.id === requestedProfileId)
            : null;
        const nextProfile = requestedProfile ?? payload.profiles[0] ?? null;
        if (nextProfile) {
          setSelectedProfileId(nextProfile.id);
          if (typeof nextProfile.ageYears === "number") {
            setPlayerAge(nextProfile.ageYears);
          }
        }
      }
    };
    void loadProfiles();
    return () => {
      active = false;
    };
  }, [requestedProfileId]);

  useEffect(() => {
    let active = true;
    const loadRewardRealmStatus = async () => {
      if (!gameCatalogId || gameTrack !== "Reward Realm") {
        setRewardRealmStatus(null);
        setRewardRealmStatusMessage("");
        setRewardRealmStatusLoading(false);
        return;
      }

      if (!selectedProfileId) {
        setRewardRealmStatus(null);
        setRewardRealmStatusMessage("Select a learner profile to evaluate Reward Realm unlock.");
        setRewardRealmStatusLoading(false);
        return;
      }

      setRewardRealmStatusLoading(true);
      setRewardRealmStatusMessage("");
      const params = new URLSearchParams({ studentProfileId: selectedProfileId });
      const response = await fetch(`/api/games/reward-realm/status?${params.toString()}`, {
        cache: "no-store",
      });
      const payload = (await response.json().catch(() => ({}))) as {
        unlocked?: boolean;
        mastery?: RewardRealmMasterySnapshot;
        error?: string;
      };

      if (!active) return;
      if (!response.ok || !payload.mastery) {
        setRewardRealmStatus(null);
        setRewardRealmStatusMessage(payload.error ?? "Could not load Reward Realm status.");
        setRewardRealmStatusLoading(false);
        return;
      }

      setRewardRealmStatus({
        unlocked: Boolean(payload.unlocked),
        mastery: payload.mastery,
      });
      setRewardRealmStatusMessage("");
      setRewardRealmStatusLoading(false);
    };

    void loadRewardRealmStatus();
    return () => {
      active = false;
    };
  }, [gameCatalogId, gameTrack, selectedProfileId]);

  const resetLegacyRunTracking = (nextInteractionCount = 0) => {
    legacySessionIdRef.current = createLegacySessionId();
    legacyAutoEventSentRef.current = false;
    setLegacyRunStartedAt(Date.now());
    setLegacyInteractionCount(nextInteractionCount);
  };

  const refreshPremiumArena = async () => {
    const premiumResponse = await fetch("/api/games/premium/status", { cache: "no-store" });
    const premiumPayload = (await premiumResponse.json().catch(() => ({}))) as {
      premium?: boolean;
      upgradeUrl?: string;
    };
    if (!premiumResponse.ok) return;
    const premium = Boolean(premiumPayload.premium);
    setPremiumStatus({
      premium,
      upgradeUrl: premiumPayload.upgradeUrl ?? "/billing/paywall",
    });
    if (!premium) {
      setNetworkChallenges([]);
      setPremiumSeason(null);
      setPremiumSeasonEntry(null);
      setPremiumClans([]);
      setPremiumRooms([]);
      setPremiumTournaments([]);
      setPremiumSeasonPass(null);
      return;
    }

    const [
      networkResponse,
      seasonResponse,
      clansResponse,
      roomsResponse,
      tournamentsResponse,
      seasonPassResponse,
    ] = await Promise.all([
      fetch("/api/games/network-state", { cache: "no-store" }),
      fetch("/api/games/premium/seasons", { cache: "no-store" }),
      fetch("/api/games/premium/clans", { cache: "no-store" }),
      fetch("/api/games/premium/rooms", { cache: "no-store" }),
      fetch("/api/games/premium/tournaments", { cache: "no-store" }),
      fetch("/api/games/premium/season-pass", { cache: "no-store" }),
    ]);

    const networkPayload = (await networkResponse.json().catch(() => ({}))) as {
      activeChallenges?: NetworkChallenge[];
    };
    const seasonPayload = (await seasonResponse.json().catch(() => ({}))) as PremiumSeasonPayload;
    const clansPayload = (await clansResponse.json().catch(() => ({}))) as PremiumClanPayload;
    const roomsPayload = (await roomsResponse.json().catch(() => ({}))) as PremiumRoomPayload;
    const tournamentsPayload = (await tournamentsResponse.json().catch(() => ({}))) as PremiumTournamentPayload;
    const seasonPassPayload = (await seasonPassResponse.json().catch(() => ({}))) as PremiumSeasonPassPayload;
    if (networkResponse.ok) {
      setNetworkChallenges(Array.isArray(networkPayload.activeChallenges) ? networkPayload.activeChallenges : []);
    }
    if (seasonResponse.ok) {
      setPremiumSeason(seasonPayload.season ?? null);
      setPremiumSeasonEntry(seasonPayload.myEntry ?? null);
    }
    if (clansResponse.ok) {
      setPremiumClans(Array.isArray(clansPayload.clans) ? clansPayload.clans : []);
    }
    if (roomsResponse.ok) {
      setPremiumRooms(Array.isArray(roomsPayload.rooms) ? roomsPayload.rooms : []);
    }
    if (tournamentsResponse.ok) {
      setPremiumTournaments(Array.isArray(tournamentsPayload.tournaments) ? tournamentsPayload.tournaments : []);
    }
    if (seasonPassResponse.ok) {
      setPremiumSeasonPass(seasonPassPayload);
    }
  };

  useEffect(() => {
    let active = true;
    const loadPremiumAndNetworkOnMount = async () => {
      const premiumResponse = await fetch("/api/games/premium/status", { cache: "no-store" });
      const premiumPayload = (await premiumResponse.json().catch(() => ({}))) as {
        premium?: boolean;
        upgradeUrl?: string;
      };
      if (!active || !premiumResponse.ok) return;
      const premium = Boolean(premiumPayload.premium);
      setPremiumStatus({
        premium,
        upgradeUrl: premiumPayload.upgradeUrl ?? "/billing/paywall",
      });
      if (!premium) {
        setNetworkChallenges([]);
        setPremiumSeason(null);
        setPremiumSeasonEntry(null);
        setPremiumClans([]);
        setPremiumRooms([]);
        setPremiumTournaments([]);
        setPremiumSeasonPass(null);
        return;
      }

      const [
        networkResponse,
        seasonResponse,
        clansResponse,
        roomsResponse,
        tournamentsResponse,
        seasonPassResponse,
      ] = await Promise.all([
        fetch("/api/games/network-state", { cache: "no-store" }),
        fetch("/api/games/premium/seasons", { cache: "no-store" }),
        fetch("/api/games/premium/clans", { cache: "no-store" }),
        fetch("/api/games/premium/rooms", { cache: "no-store" }),
        fetch("/api/games/premium/tournaments", { cache: "no-store" }),
        fetch("/api/games/premium/season-pass", { cache: "no-store" }),
      ]);

      const networkPayload = (await networkResponse.json().catch(() => ({}))) as {
        activeChallenges?: NetworkChallenge[];
      };
      const seasonPayload = (await seasonResponse.json().catch(() => ({}))) as PremiumSeasonPayload;
      const clansPayload = (await clansResponse.json().catch(() => ({}))) as PremiumClanPayload;
      const roomsPayload = (await roomsResponse.json().catch(() => ({}))) as PremiumRoomPayload;
      const tournamentsPayload = (await tournamentsResponse.json().catch(() => ({}))) as PremiumTournamentPayload;
      const seasonPassPayload = (await seasonPassResponse.json().catch(() => ({}))) as PremiumSeasonPassPayload;

      if (!active) return;
      if (networkResponse.ok) {
        setNetworkChallenges(Array.isArray(networkPayload.activeChallenges) ? networkPayload.activeChallenges : []);
      }
      if (seasonResponse.ok) {
        setPremiumSeason(seasonPayload.season ?? null);
        setPremiumSeasonEntry(seasonPayload.myEntry ?? null);
      }
      if (clansResponse.ok) {
        setPremiumClans(Array.isArray(clansPayload.clans) ? clansPayload.clans : []);
      }
      if (roomsResponse.ok) {
        setPremiumRooms(Array.isArray(roomsPayload.rooms) ? roomsPayload.rooms : []);
      }
      if (tournamentsResponse.ok) {
        setPremiumTournaments(Array.isArray(tournamentsPayload.tournaments) ? tournamentsPayload.tournaments : []);
      }
      if (seasonPassResponse.ok) {
        setPremiumSeasonPass(seasonPassPayload);
      }
    };
    void loadPremiumAndNetworkOnMount();
    return () => {
      active = false;
    };
  }, []);

  const ageLocked = useMemo(() => {
    if (!game) return false;
    return playerAge < game.ageMin || playerAge > game.ageMax;
  }, [game, playerAge]);

  const rewardRealmLocked = useMemo(() => {
    if (!game || game.track !== "Reward Realm") return false;
    if (!selectedProfileId) return false;
    if (rewardRealmStatusLoading) return true;
    return !rewardRealmStatus?.unlocked;
  }, [game, rewardRealmStatus, rewardRealmStatusLoading, selectedProfileId]);

  const resolvedGameId = game?.id ?? gameId;
  const CoreComponent = game && isCoreGameType(game.id) ? CORE_COMPONENTS[game.id] : null;
  const LegacyComponent = game ? (LEGACY_COMPONENTS[game.id] ?? null) : null;

  useEffect(() => {
    if (!LegacyComponent || !selectedProfileId) return;
    if (rewardRealmLocked) return;
    if (legacyAutoEventSentRef.current || legacySubmissionInFlightRef.current) return;
    if (legacyInteractionCount < LEGACY_MIN_INTERACTIONS) return;

    const elapsedMs = Math.max(0, Date.now() - legacyRunStartedAt);
    const emitFallbackCompletion = () => {
      if (legacyAutoEventSentRef.current || legacySubmissionInFlightRef.current) return;
      legacyAutoEventSentRef.current = true;
      emitLegacyGameComplete({
        sessionId: legacySessionIdRef.current,
        gameId: resolvedGameId,
        difficulty,
        elapsedMs: Math.max(0, Date.now() - legacyRunStartedAt),
        interactions: legacyInteractionCount,
        source: "runtime-bridge",
        occurredAt: new Date().toISOString(),
      });
    };

    if (elapsedMs >= LEGACY_MIN_SUBMIT_MS) {
      emitFallbackCompletion();
      return;
    }

    const timer = window.setTimeout(
      emitFallbackCompletion,
      LEGACY_MIN_SUBMIT_MS - elapsedMs,
    );
    return () => window.clearTimeout(timer);
  }, [
    LegacyComponent,
    selectedProfileId,
    legacyInteractionCount,
    legacyRunStartedAt,
    resolvedGameId,
    difficulty,
    rewardRealmLocked,
  ]);

  useEffect(() => {
    if (!LegacyComponent) return;

    const handleLegacyCompleteEvent = (rawEvent: Event) => {
      const event = rawEvent as CustomEvent<LegacyGameCompleteDetail>;
      const detail = event.detail;
      if (!detail || detail.gameId !== resolvedGameId) return;
      if (rewardRealmLocked) {
        setResultMessage("Reward Realm is locked. Complete educational mastery milestones first.");
        return;
      }
      if (legacySubmissionInFlightRef.current) return;
      if (detail.sessionId === legacyLastHandledSessionRef.current) return;
      if (!selectedProfileId) {
        setResultMessage("Select a learner profile before legacy mission progress can sync.");
        return;
      }

      legacyLastHandledSessionRef.current = detail.sessionId;
      legacyAutoEventSentRef.current = true;
      legacySubmissionInFlightRef.current = true;
      setIsLegacySubmitting(true);
      setResultMessage("Submitting legacy mission run...");

      const mappedCore = reportAsCoreType(resolvedGameId);
      const fallbackMetrics = buildLegacySubmissionMetrics({
        elapsedMs: detail.elapsedMs,
        interactions: detail.interactions,
        difficulty: detail.difficulty ?? difficulty,
      });
      const score = Number.isFinite(detail.score)
        ? Math.max(0, Math.round(detail.score!))
        : fallbackMetrics.score;
      const maxScore = Number.isFinite(detail.maxScore) && detail.maxScore! > 0
        ? Math.round(detail.maxScore!)
        : fallbackMetrics.maxScore;
      const timeMs = clamp(detail.elapsedMs, 0, 30 * 60 * 1000);

      void submitResult({
        gameType: mappedCore,
        customGameId: resolvedGameId,
        difficulty,
        score,
        maxScore,
        timeMs,
        studentProfileId: selectedProfileId || undefined,
        guardianUnlockPhrase: guardianUnlocked ? "GUARDIAN UNLOCK" : undefined,
      }).then((outcome) => {
        if (outcome.error) {
          setResultMessage(`Legacy mission saved locally: ${outcome.error}`);
          return;
        }
        setResultMessage(
          `Legacy mission auto-submitted: ${outcome.pointsAwarded} XP, ${outcome.stars} stars (${Math.max(detail.interactions, 1)} interactions, ${Math.round(timeMs / 1000)}s).`,
        );
      }).finally(() => {
        legacySubmissionInFlightRef.current = false;
        setIsLegacySubmitting(false);
      });
    };

    window.addEventListener(
      LEGACY_GAME_COMPLETE_EVENT,
      handleLegacyCompleteEvent as EventListener,
    );
    return () => {
      window.removeEventListener(
        LEGACY_GAME_COMPLETE_EVENT,
        handleLegacyCompleteEvent as EventListener,
      );
    };
  }, [LegacyComponent, difficulty, guardianUnlocked, resolvedGameId, rewardRealmLocked, selectedProfileId, submitResult]);

  if (!game) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <p className="text-4xl">🤔</p>
        <h1 className="mt-4 text-xl font-bold text-stone-800">Game Not Found</h1>
        <p className="mt-2 text-sm text-stone-500">
          We couldn&apos;t find a game called &quot;{gameId}&quot;.
        </p>
        <button
          type="button"
          onClick={() => router.push("/games")}
          className="mt-6 rounded-xl bg-sky-500 px-5 py-2 text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
        >
          Back to Games
        </button>
      </main>
    );
  }

  const submitDailyChallengeBonus = async (result: GameResult) => {
    if (!selectedProfileId) {
      return { bonusPoints: 0, error: "Select a learner profile for daily challenge credit." };
    }

    const response = await fetch("/api/games/daily-challenge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameType: result.gameType,
        difficulty: result.difficulty,
        score: result.score,
        maxScore: result.maxScore,
        timeMs: result.timeMs,
        studentProfileId: selectedProfileId,
        skipPointsAward: true,
      }),
    });

    const payload = (await response.json().catch(() => ({}))) as {
      bonusPoints?: number;
      error?: string;
    };
    if (!response.ok) {
      return {
        bonusPoints: 0,
        error: payload.error ?? "Daily challenge bonus sync failed.",
      };
    }

    return {
      bonusPoints: typeof payload.bonusPoints === "number" ? payload.bonusPoints : 0,
      error: null as string | null,
    };
  };

  const handleCoreComplete = async (result: GameResult) => {
    if (rewardRealmLocked) {
      setResultMessage("Reward Realm is locked. Complete educational mastery milestones first.");
      return;
    }

    setResultMessage("Submitting score...");
    const outcome = await submitResult({
      ...result,
      studentProfileId: selectedProfileId || undefined,
      guardianUnlockPhrase: guardianUnlocked ? "GUARDIAN UNLOCK" : undefined,
    });
    if (outcome.error) {
      setResultMessage(`Saved locally: ${outcome.error}`);
      return;
    }

    let dailyAppend = "";
    if (isDailyChallengeRun) {
      const dailyOutcome = await submitDailyChallengeBonus(result);
      if (dailyOutcome.error) {
        dailyAppend = ` Daily bonus not applied: ${dailyOutcome.error}`;
      } else if (dailyOutcome.bonusPoints > 0) {
        await awardXP(dailyOutcome.bonusPoints, `daily_challenge:${game.id}`, { persist: false });
        dailyAppend = ` +${dailyOutcome.bonusPoints} daily bonus`;
      }
    }

    setResultMessage(
      `Score submitted: ${outcome.pointsAwarded} XP, ${outcome.stars} star${outcome.stars === 1 ? "" : "s"}.${dailyAppend}`,
    );
  };

  const handleArcadeComplete = (outcome: {
    score: number;
    maxScore: number;
    stars: 0 | 1 | 2 | 3;
    timeMs: number;
  }) => {
    if (rewardRealmLocked) {
      setResultMessage("Reward Realm is locked. Complete educational mastery milestones first.");
      return;
    }

    const mappedCore = reportAsCoreType(game.id);
    void submitResult({
      gameType: mappedCore,
      customGameId: game.id,
      difficulty,
      score: outcome.score,
      maxScore: outcome.maxScore,
      timeMs: outcome.timeMs,
      studentProfileId: selectedProfileId || undefined,
      guardianUnlockPhrase: guardianUnlocked ? "GUARDIAN UNLOCK" : undefined,
    }).then((submitOutcome) => {
      if (submitOutcome.error) {
        setResultMessage(
          `Mission complete (${outcome.score}/${outcome.maxScore}, ${outcome.stars} stars). ` +
          `Telemetry sync warning: ${submitOutcome.error}`,
        );
        return;
      }
      setResultMessage(
        `Mission complete (${outcome.score}/${outcome.maxScore}, ${outcome.stars} stars). ` +
        `Awarded ${submitOutcome.pointsAwarded} XP via ${mappedCore} + custom tag ${game.id}.`,
      );
    });
  };

  const handleLegacyInteraction = () => {
    if (legacyAutoEventSentRef.current && !legacySubmissionInFlightRef.current) {
      resetLegacyRunTracking(1);
      return;
    }
    setLegacyInteractionCount((prev) => prev + 1);
  };

  const shareChallenge = async () => {
    const url = `${window.location.origin}/games/${game.id}?difficulty=${difficulty}&style=${playStyle}`;
    const text = `Try this ${playStyle} challenge: ${game.title} (${difficulty.toUpperCase()}).`;
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title: `${game.title} Challenge`, text, url });
        setShareStatus("Challenge shared.");
        return;
      } catch {
        // ignore
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(url);
      setShareStatus("Challenge link copied.");
      return;
    }
    setShareStatus("Sharing unavailable on this device.");
  };

  const joinNetworkChallenge = async (challenge: NetworkChallenge) => {
    setJoiningChallengeId(challenge.id);
    setNetworkStatus("");
    const response = await fetch("/api/games/network-state", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "join",
        cohortId: challenge.cohortId,
        challengeId: challenge.id,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      clan?: {
        id: string;
        name: string;
        invite_code: string;
      };
    };
    if (!response.ok) {
      setNetworkStatus(payload.error ?? "Could not join challenge.");
      setJoiningChallengeId("");
      return;
    }

    setNetworkChallenges((prev) => prev.map((entry) => (
      entry.id === challenge.id
        ? { ...entry, joined: true, participantCount: entry.participantCount + 1 }
        : entry
    )));
    setNetworkStatus(`Joined ${challenge.title}. Your next run will count on the live board.`);
    setJoiningChallengeId("");
  };

  const joinPremiumRoom = async (roomCode: string) => {
    setPremiumActionStatus("");
    setJoiningRoomCode(roomCode);
    const response = await fetch("/api/games/premium/rooms/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ roomCode }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      clan?: {
        id: string;
        name: string;
        invite_code: string;
      };
    };
    if (!response.ok) {
      setPremiumActionStatus(payload.error ?? "Could not join room.");
      setJoiningRoomCode("");
      return;
    }
    setPremiumRooms((prev) => prev.map((entry) => (
      entry.room_code === roomCode ? { ...entry, status: "active" } : entry
    )));
    setPremiumActionStatus(`Joined room ${roomCode}.`);
    setJoiningRoomCode("");
    setRoomCodeInput("");
  };

  const joinPremiumClan = async (inviteCode: string) => {
    setPremiumActionStatus("");
    setJoiningClanCode(inviteCode);
    const response = await fetch("/api/games/premium/clans/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inviteCode }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      clan?: {
        id: string;
        name: string;
        invite_code: string;
      };
    };
    if (!response.ok) {
      setPremiumActionStatus(payload.error ?? "Could not join clan.");
      setJoiningClanCode("");
      return;
    }
    const joinedClan = payload.clan;
    if (joinedClan?.id && joinedClan?.name && joinedClan?.invite_code) {
      setPremiumClans((prev) => {
        if (prev.some((entry) => entry.id === joinedClan.id)) return prev;
        return [...prev, joinedClan];
      });
      setPremiumActionStatus(`Joined clan ${joinedClan.name}.`);
    } else {
      setPremiumActionStatus("Joined clan successfully.");
    }
    setJoiningClanCode("");
    setClanInviteInput("");
    void refreshPremiumArena();
  };

  const createPremiumRoom = async () => {
    setPremiumActionStatus("");
    setCreatingRoom(true);
    const response = await fetch("/api/games/premium/rooms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mode: playStyle === "party" ? "party" : "duel",
        maxPlayers: playStyle === "party" ? 6 : 4,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      room?: {
        id: string;
        room_code: string;
        mode: string;
        status: string;
      };
    };
    if (!response.ok || !payload.room) {
      setPremiumActionStatus(payload.error ?? "Could not create room.");
      setCreatingRoom(false);
      return;
    }
    setPremiumRooms((prev) => [payload.room!, ...prev.filter((entry) => entry.id !== payload.room!.id)].slice(0, 25));
    setPremiumActionStatus(`Created room ${payload.room.room_code}. Share the code to invite teammates.`);
    setCreatingRoom(false);
    void refreshPremiumArena();
  };

  const createPremiumClan = async () => {
    setPremiumActionStatus("");
    setCreatingClan(true);
    const baseName = `${game.title.split(" ").slice(0, 2).join(" ")} Clan`.slice(0, 40);
    const response = await fetch("/api/games/premium/clans", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: baseName,
        description: `Competitive squad for ${game.title}`,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      clan?: {
        id: string;
        name: string;
        invite_code: string;
      };
    };
    if (!response.ok || !payload.clan) {
      setPremiumActionStatus(payload.error ?? "Could not create clan.");
      setCreatingClan(false);
      return;
    }
    setPremiumClans((prev) => [payload.clan!, ...prev.filter((entry) => entry.id !== payload.clan!.id)]);
    setPremiumActionStatus(`Created clan ${payload.clan.name}. Invite code: ${payload.clan.invite_code}.`);
    setCreatingClan(false);
    void refreshPremiumArena();
  };

  const joinPremiumTournament = async (challengeId: string) => {
    setPremiumActionStatus("");
    setJoiningTournamentId(challengeId);
    const response = await fetch("/api/games/premium/tournaments/join", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ challengeId }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      tournament?: { title?: string };
    };
    if (!response.ok) {
      setPremiumActionStatus(payload.error ?? "Could not join tournament.");
      setJoiningTournamentId("");
      return;
    }

    setPremiumTournaments((prev) => prev.map((entry) => (
      entry.id === challengeId
        ? { ...entry, joined: true, participantCount: entry.participantCount + 1 }
        : entry
    )));
    setPremiumActionStatus(`Joined tournament ${payload.tournament?.title ?? challengeId}.`);
    setJoiningTournamentId("");
    void refreshPremiumArena();
  };

  const claimSeasonPassTier = async (tierIndex: number) => {
    setPremiumActionStatus("");
    setClaimingTierIndex(tierIndex);
    const response = await fetch("/api/games/premium/season-pass/claim", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tierIndex }),
    });
    const payload = (await response.json().catch(() => ({}))) as {
      error?: string;
      alreadyClaimed?: boolean;
      rewardLabel?: string;
      tier?: {
        rewardLabel?: string;
      };
    };
    if (!response.ok) {
      setPremiumActionStatus(payload.error ?? "Could not claim season pass reward.");
      setClaimingTierIndex(null);
      return;
    }

    const rewardLabel = payload.tier?.rewardLabel ?? payload.rewardLabel ?? `Tier ${tierIndex} reward`;
    setPremiumSeasonPass((prev) => {
      if (!prev) return prev;
      const nextTiers = prev.tiers.map((tier) => (
        tier.tierIndex === tierIndex
          ? { ...tier, claimed: true }
          : tier
      ));
      return {
        ...prev,
        tiers: nextTiers,
        claimableCount: nextTiers.filter((tier) => tier.unlocked && !tier.claimed).length,
      };
    });
    setPremiumActionStatus(payload.alreadyClaimed ? `Already claimed: ${rewardLabel}.` : `Claimed: ${rewardLabel}.`);
    setClaimingTierIndex(null);
    void refreshPremiumArena();
  };

  const nextClaimableSeasonTier = premiumSeasonPass?.tiers.find((tier) => tier.unlocked && !tier.claimed) ?? null;

  /* ── Lobby (default) ───────────────────────────────────────────────── */
  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <button
        type="button"
        onClick={() => router.push("/games")}
        className="mb-4 text-xs font-medium text-stone-400 transition-colors hover:text-stone-600"
      >
        &larr; Back to Games
      </button>

      {isDailyChallengeRun ? (
        <section className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
          Daily Challenge Mode: finish with at least 1 star to claim today&apos;s bonus.
        </section>
      ) : null}

      <div className="mb-4 grid gap-3 rounded-2xl border border-stone-200 bg-white p-4 sm:grid-cols-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Mode</p>
          <p className="text-sm font-bold text-stone-800">
            {game.mode === "core" ? "Core Game" : game.mode === "legacy" ? "Gemini Legacy Game" : "Immersive Arcade"}
          </p>
          <p className="mt-1 text-[11px] text-stone-500">
            Track: {game.track}
          </p>
          {game.track === "Reward Realm" ? (
            <p className={`mt-1 text-[11px] font-semibold ${
              rewardRealmLocked ? "text-amber-700" : "text-emerald-700"
            }`}
            >
              {rewardRealmLocked ? "Locked pending educational mastery" : "Reward Realm unlocked"}
            </p>
          ) : null}
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Difficulty</label>
          <select
            value={difficulty}
            onChange={(event) => {
              setDifficulty(event.target.value as GameDifficulty);
              resetLegacyRunTracking();
            }}
            className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Learner Profile</label>
          <select
            value={selectedProfileId}
            onChange={(event) => {
              const nextProfileId = event.target.value;
              setSelectedProfileId(nextProfileId);
              resetLegacyRunTracking();
              setGuardianUnlocked(false);
              setGuardianPhrase("");
              const profile = profiles.find((entry) => entry.id === nextProfileId);
              if (profile && typeof profile.ageYears === "number") {
                setPlayerAge(profile.ageYears);
              }
            }}
            className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
          >
            {profiles.length === 0 ? <option value="">No learner profiles found</option> : null}
            {profiles.map((profile) => (
              <option key={profile.id} value={profile.id}>
                {profile.displayName} {typeof profile.ageYears === "number" ? `(Age ${profile.ageYears})` : "(Age n/a)"}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Play Style</label>
          <select
            value={playStyle}
            onChange={(event) => setPlayStyle(event.target.value as "solo" | "party")}
            className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
          >
            <option value="solo">Solo</option>
            <option value="party">Party (Hot-seat)</option>
          </select>
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">Graphics Engine</label>
          <select
            value={renderPreset}
            onChange={(event) => setRenderPreset(event.target.value as "standard" | "cinematic-rtx")}
            className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
            disabled={premiumStatus !== null && !premiumStatus.premium}
          >
            <option value="standard">Standard</option>
            <option value="cinematic-rtx">Cinematic RTX 4090 Mode</option>
          </select>
          {premiumStatus && !premiumStatus.premium ? (
            <p className="mt-1 text-[11px] text-amber-700">
              Cinematic RTX mode is premium. Upgrade in paywall.
            </p>
          ) : null}
        </div>
        <div>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-stone-500">
            Effective Learner Age
          </label>
          <input
            type="number"
            min={3}
            max={17}
            value={playerAge}
            onChange={(event) => setPlayerAge(Number(event.target.value))}
            className="mt-1 w-full rounded-xl border border-stone-200 px-3 py-2 text-sm"
          />
        </div>
        <div className="sm:col-span-3">
          <button
            type="button"
            onClick={() => void shareChallenge()}
            className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700 transition-colors hover:bg-stone-100"
          >
            Share Challenge Link
          </button>
          {shareStatus ? <p className="mt-1 text-xs text-stone-500">{shareStatus}</p> : null}
        </div>
      </div>

      {game.track === "Reward Realm" && rewardRealmStatusLoading ? (
        <p className="mb-4 text-xs text-stone-500">Checking Reward Realm mastery status...</p>
      ) : null}
      {game.track === "Reward Realm" && rewardRealmStatusMessage ? (
        <p className="mb-4 text-xs text-stone-500">{rewardRealmStatusMessage}</p>
      ) : null}

      <section className="mb-4 rounded-2xl border border-stone-200 bg-white p-4">
        <h2 className="text-sm font-black uppercase tracking-wider text-stone-700">Live Network Events</h2>
        {premiumStatus && !premiumStatus.premium ? (
          <div className="mt-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-xs text-amber-800">
            Multiplayer events, seasons, and clan leaderboards are premium features.
            <a href={premiumStatus.upgradeUrl} className="ml-1 font-bold underline">Open Paywall</a>
          </div>
        ) : networkChallenges.length === 0 ? (
          <p className="mt-2 text-xs text-stone-500">
            No active cohort challenges right now. Join or create one in Social to unlock live competition.
          </p>
        ) : (
          <div className="mt-3 grid gap-3">
            {networkChallenges.slice(0, 3).map((challenge) => (
              <div key={challenge.id} className="rounded-xl border border-stone-200 bg-stone-50 p-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-bold text-stone-800">{challenge.title}</p>
                    <p className="text-[11px] text-stone-500">
                      {challenge.participantCount} participants
                      {challenge.myEntry ? ` | You are #${challenge.myEntry.rank}` : ""}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => void joinNetworkChallenge(challenge)}
                    disabled={challenge.joined || joiningChallengeId === challenge.id}
                    className="rounded-lg border border-stone-300 bg-white px-3 py-1.5 text-xs font-bold text-stone-700 disabled:opacity-60"
                  >
                    {challenge.joined ? "Joined" : joiningChallengeId === challenge.id ? "Joining..." : "Join"}
                  </button>
                </div>
                {challenge.leaderboardTop.length > 0 ? (
                  <p className="mt-2 text-[11px] text-stone-600">
                    Top: {challenge.leaderboardTop.slice(0, 3).map((entry) => (
                      `#${entry.rank} ${entry.totalPoints}pts`
                    )).join(" | ")}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        )}
        {networkStatus ? <p className="mt-2 text-xs text-stone-600">{networkStatus}</p> : null}
      </section>

      <section className="mb-4 rounded-2xl border border-stone-200 bg-white p-4">
        <h2 className="text-sm font-black uppercase tracking-wider text-stone-700">Premium Arena</h2>
        {premiumStatus && !premiumStatus.premium ? (
          <p className="mt-2 text-xs text-stone-600">
            Unlock seasonal ladders, clan wars, and realtime rooms.
            <a href={premiumStatus.upgradeUrl} className="ml-1 font-bold underline">Go to Paywall</a>
          </p>
        ) : (
          <div className="mt-2 grid gap-2 text-xs text-stone-600 sm:grid-cols-3">
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-2">
              <p className="font-bold text-stone-700">Season</p>
              <p>{premiumSeason ? premiumSeason.title : "No active season"}</p>
              <p>
                {premiumSeasonEntry
                  ? `Your points: ${premiumSeasonEntry.total_points} | Combo: ${premiumSeasonEntry.best_combo}`
                  : "No entry yet"}
              </p>
              {premiumSeasonPass ? (
                <>
                  <p>
                    Season pass tier: {premiumSeasonPass.currentTier} | Claimable rewards: {premiumSeasonPass.claimableCount}
                  </p>
                  <p>
                    {premiumSeasonPass.nextTier
                      ? `Next: Tier ${premiumSeasonPass.nextTier.tierIndex} in ${premiumSeasonPass.nextTier.pointsRemaining} pts`
                      : "All season pass tiers unlocked."}
                  </p>
                  {nextClaimableSeasonTier ? (
                    <button
                      type="button"
                      onClick={() => void claimSeasonPassTier(nextClaimableSeasonTier.tierIndex)}
                      disabled={claimingTierIndex === nextClaimableSeasonTier.tierIndex}
                      className="mt-2 rounded-md border border-stone-300 bg-white px-2 py-1 text-[11px] font-bold text-stone-700 disabled:opacity-60"
                    >
                      {claimingTierIndex === nextClaimableSeasonTier.tierIndex
                        ? "Claiming..."
                        : `Claim: ${nextClaimableSeasonTier.rewardLabel}`}
                    </button>
                  ) : (
                    <p className="mt-2 text-[11px] text-stone-500">No unlocked unclaimed rewards right now.</p>
                  )}
                </>
              ) : null}
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-2">
              <p className="font-bold text-stone-700">Clans</p>
              <p>{premiumClans.length} active membership(s)</p>
              <p>{premiumClans[0] ? `Primary: ${premiumClans[0].name}` : "Join or create a clan"}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <input
                  value={clanInviteInput}
                  onChange={(event) => setClanInviteInput(event.target.value.toUpperCase())}
                  placeholder="Invite code"
                  className="h-8 min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-2 text-[11px]"
                />
                <button
                  type="button"
                  onClick={() => void joinPremiumClan(clanInviteInput.trim())}
                  disabled={!clanInviteInput.trim() || joiningClanCode === clanInviteInput.trim()}
                  className="h-8 rounded-md border border-stone-300 bg-white px-2 text-[11px] font-bold text-stone-700 disabled:opacity-60"
                >
                  {joiningClanCode === clanInviteInput.trim() ? "Joining..." : "Join"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => void createPremiumClan()}
                disabled={creatingClan}
                className="mt-2 rounded-md border border-stone-300 bg-white px-2 py-1 text-[11px] font-bold text-stone-700 disabled:opacity-60"
              >
                {creatingClan ? "Creating..." : "Create Clan"}
              </button>
              {premiumClans[0] ? (
                <p className="mt-1 text-[11px] text-stone-500">Primary invite code: {premiumClans[0].invite_code}</p>
              ) : null}
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-2">
              <p className="font-bold text-stone-700">Realtime Rooms</p>
              <p>{premiumRooms.length} open room(s)</p>
              <p>{premiumRooms[0] ? `Hot room: ${premiumRooms[0].room_code}` : "Create a room to start"}</p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <input
                  value={roomCodeInput}
                  onChange={(event) => setRoomCodeInput(event.target.value.toUpperCase())}
                  placeholder="Room code"
                  className="h-8 min-w-0 flex-1 rounded-md border border-stone-300 bg-white px-2 text-[11px]"
                />
                <button
                  type="button"
                  onClick={() => void joinPremiumRoom(roomCodeInput.trim())}
                  disabled={!roomCodeInput.trim() || joiningRoomCode === roomCodeInput.trim()}
                  className="h-8 rounded-md border border-stone-300 bg-white px-2 text-[11px] font-bold text-stone-700 disabled:opacity-60"
                >
                  {joiningRoomCode === roomCodeInput.trim() ? "Joining..." : "Join"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => void createPremiumRoom()}
                disabled={creatingRoom}
                className="mt-2 rounded-md border border-stone-300 bg-white px-2 py-1 text-[11px] font-bold text-stone-700 disabled:opacity-60"
              >
                {creatingRoom ? "Creating..." : "Create Room"}
              </button>
            </div>
            <div className="rounded-lg border border-stone-200 bg-stone-50 p-2 sm:col-span-3">
              <p className="font-bold text-stone-700">Tournaments & Clan Wars</p>
              {premiumTournaments.length > 0 ? (
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {premiumTournaments.slice(0, 4).map((tournament) => (
                    <div key={tournament.id} className="rounded-md border border-stone-200 bg-white p-2">
                      <p className="font-semibold text-stone-700">{tournament.title}</p>
                      <p className="text-[11px] text-stone-500">
                        {tournament.participantCount} participant(s)
                        {tournament.joined ? " | Joined" : ""}
                      </p>
                      <button
                        type="button"
                        onClick={() => void joinPremiumTournament(tournament.id)}
                        disabled={tournament.joined || joiningTournamentId === tournament.id}
                        className="mt-2 rounded-md border border-stone-300 bg-white px-2 py-1 text-[11px] font-bold text-stone-700 disabled:opacity-60"
                      >
                        {tournament.joined ? "Joined" : joiningTournamentId === tournament.id ? "Joining..." : "Join Tournament"}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No live tournaments right now.</p>
              )}
            </div>
            {premiumActionStatus ? (
              <p className="text-[11px] text-stone-700 sm:col-span-3">{premiumActionStatus}</p>
            ) : null}
          </div>
        )}
      </section>

      {!selectedProfileId ? (
        <section className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          Select a learner profile to play and save progress. Server-side age checks require
          `studentProfileId`.
        </section>
      ) : null}

      {selectedProfileId && ageLocked && !guardianUnlocked ? (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h1 className="text-xl font-black text-amber-900">Age Lock Active</h1>
          <p className="mt-2 text-sm text-amber-800">
            This game is recommended for ages {game.ageMin}-{game.ageMax}. Enter guardian phrase to unlock.
          </p>
          <input
            value={guardianPhrase}
            onChange={(event) => setGuardianPhrase(event.target.value)}
            placeholder="Type GUARDIAN UNLOCK"
            className="mt-4 w-full rounded-xl border border-amber-300 bg-white px-3 py-2 text-sm"
          />
          <button
            type="button"
            onClick={() => {
              if (guardianPhrase.trim().toUpperCase() === "GUARDIAN UNLOCK") {
                setGuardianUnlocked(true);
              }
            }}
            className="mt-3 rounded-xl bg-amber-600 px-4 py-2 text-sm font-bold text-white"
          >
            Unlock Game
          </button>
        </section>
      ) : selectedProfileId && rewardRealmLocked ? (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h1 className="text-xl font-black text-amber-900">Reward Realm Locked</h1>
          <p className="mt-2 text-sm text-amber-800">
            Reward Realm games unlock after educational mastery milestones are complete.
          </p>
          {rewardRealmStatus ? (
            <div className="mt-3 grid gap-2 text-xs text-amber-900 sm:grid-cols-2">
              <p>
                Educational runs: {rewardRealmStatus.mastery.progress.educationalRuns}/
                {rewardRealmStatus.mastery.policy.minEducationalRuns}
              </p>
              <p>
                Distinct educational games: {rewardRealmStatus.mastery.progress.distinctEducationalGames}/
                {rewardRealmStatus.mastery.policy.minDistinctEducationalGames}
              </p>
              <p>
                Perfect educational runs: {rewardRealmStatus.mastery.progress.perfectEducationalRuns}/
                {rewardRealmStatus.mastery.policy.minPerfectEducationalRuns}
              </p>
              <p>
                Avg stars: {rewardRealmStatus.mastery.progress.averageEducationalStars.toFixed(2)}/
                {rewardRealmStatus.mastery.policy.minAverageEducationalStars.toFixed(2)}
              </p>
            </div>
          ) : (
            <p className="mt-3 text-xs text-amber-800">
              {rewardRealmStatusMessage || "Loading mastery progress..."}
            </p>
          )}
        </section>
      ) : selectedProfileId ? (
        <section className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
          <header className="mb-4 flex items-center gap-3">
            <span className="text-4xl">{game.icon}</span>
            <div>
              <h1 className="text-xl font-black text-stone-900">{game.title}</h1>
              <p className="text-sm text-stone-600">{game.description}</p>
            </div>
          </header>

          {CoreComponent ? (
            <CoreComponent difficulty={difficulty} onComplete={handleCoreComplete} />
          ) : LegacyComponent ? (
            <>
              <div onPointerDownCapture={handleLegacyInteraction} onKeyDownCapture={handleLegacyInteraction}>
                <MascotHost friendId={friendForCategory(game.category)}>
                  <LegacyComponent />
                </MascotHost>
              </div>
              <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                  Legacy Mission Bridge
                </p>
                <p className="mt-1 text-xs text-stone-600">
                  Interactions captured: {legacyInteractionCount}. XP sync submits automatically when runtime completion telemetry is verified.
                </p>
                <p className="mt-1 text-[11px] text-stone-500">
                  Minimum {Math.floor(LEGACY_MIN_SUBMIT_MS / 1000)}s session and {LEGACY_MIN_INTERACTIONS} interactions.
                </p>
                <p className="mt-2 text-[11px] font-semibold text-stone-600">
                  {isLegacySubmitting ? "Submitting legacy mission..." : "Auto-sync armed."}
                </p>
              </div>
            </>
          ) : (
            <ImmersiveArcadeTemplate
              key={`${game.id}:${difficulty}`}
              game={game}
              difficulty={difficulty}
              renderPreset={premiumStatus?.premium ? renderPreset : "standard"}
              onComplete={handleArcadeComplete}
            />
          )}
        </section>
      ) : null}

      {resultMessage ? (
        <div className="mt-4 rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-700">
          {isSubmitting || isLegacySubmitting ? "Syncing..." : resultMessage}
        </div>
      ) : null}
    </main>
  );
}




