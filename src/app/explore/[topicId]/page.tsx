import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getExplorerTopicById,
  getExplorerTopics,
  getRecommendedModulesForTopic,
} from "@/lib/explorer/topics";
import { getWorldScene } from "@/lib/explorer/scenes";
import { getAllLearningModules } from "@/lib/modules";
import { toExploreLessonPath, toExploreModulePath } from "@/lib/routing/paths";
import SpeakButton from "../_components/speak-button";
import AutoNarrator from "../_components/auto-narrator";
import QuestionBubble from "../_components/question-bubble";
import WorldPortal from "../_components/world-portal";
import ExplorerViewTracker from "../_components/explorer-view-tracker";
import AdventureCardLink from "../_components/adventure-card-link";
import PictureChoiceLink from "../_components/picture-choice-link";
import PicturePathStartLink from "../_components/picture-path-start-link";
import MovementAdventureLink from "../_components/movement-adventure-link";
import ChantAdventureLink from "../_components/chant-adventure-link";
import CalmMomentLink from "../_components/calm-moment-link";
import MissionPrepLink from "../_components/mission-prep-link";
import ScrollReveal from "../_components/scroll-reveal";

type TopicParams = {
  topicId: string;
};

type TopicSearchParams = {
  focus?: string | string[];
};

const topicSectionLinks = [
  { id: "picture-choices", icon: "🖼️", label: "Pictures" },
  { id: "picture-path", icon: "🧭", label: "Path" },
  { id: "move-learn", icon: "🏃", label: "Move" },
  { id: "hands-on-missions", icon: "🧪", label: "Missions" },
  { id: "related-adventures", icon: "🚀", label: "Adventures" },
  { id: "other-worlds", icon: "🌍", label: "Worlds" },
] as const;

function normalizeSearchParamValue(value: string | string[] | undefined) {
  if (Array.isArray(value)) return String(value[0] ?? "").trim().toLowerCase();
  return typeof value === "string" ? value.trim().toLowerCase() : "";
}

export default function TopicExplorePage({
  params,
  searchParams,
}: {
  params: Promise<TopicParams>;
  searchParams?: Promise<TopicSearchParams>;
}) {
  return <TopicExplorePageContent params={params} searchParams={searchParams} />;
}

async function TopicExplorePageContent({
  params,
  searchParams,
}: {
  params: Promise<TopicParams>;
  searchParams?: Promise<TopicSearchParams>;
}) {
  const resolvedParams = await params;
  const resolvedSearchParams = searchParams
    ? await searchParams
    : {};
  const topic = getExplorerTopicById(resolvedParams.topicId);
  if (!topic) notFound();

  const scene = getWorldScene(topic.id);
  const allModules = getAllLearningModules();
  const recommendedModules = getRecommendedModulesForTopic(
    topic,
    allModules,
    6,
  );
  const promptCards = topic.prompts.slice(0, 6);
  const pictureChoices = topic.pictureChoices.slice(0, 4).map((choice, index) => ({
    ...choice,
    index,
  }));
  const vocabularyCards = topic.vocabulary.slice(0, 4);
  const talkTogether = topic.talkTogether.slice(0, 3);
  const creativeChallenges = topic.creativeChallenges.slice(0, 3);
  const caregiverTips = topic.caregiverTips.slice(0, 3);
  const wonderClues = topic.wonderClues.slice(0, 4);
  const miniMissions = topic.miniMissions.slice(0, 3);
  const movementMoments = topic.movementMoments.slice(0, 3);
  const chantMoments = topic.chantMoments.slice(0, 3);
  const calmMoments = topic.calmMoments.slice(0, 3);
  const missionSafetyChecklist = miniMissions.map((mission, index) => ({
    key: `${topic.id}-mission-safety-${index}`,
    step: index + 1,
    title: mission.title,
    safetyTip: mission.safetyTip,
  }));
  const missionSafetyNarration = missionSafetyChecklist
    .map((item) => `Mission ${item.step}, ${item.title}. ${item.safetyTip}`)
    .join(" ");
  const focusChoiceId = normalizeSearchParamValue(resolvedSearchParams.focus);
  const focusedChoice = pictureChoices.find((choice) => choice.id === focusChoiceId) ?? null;
  const focusedPrompt = focusedChoice
    ? (promptCards[focusedChoice.index] ?? promptCards[0] ?? null)
    : null;
  const focusedClue = focusedChoice
    ? (wonderClues[focusedChoice.index] ?? wonderClues[0] ?? null)
    : null;
  const focusedMission = focusedChoice
    ? miniMissions.length > 0
      ? (miniMissions[focusedChoice.index % miniMissions.length] ?? null)
      : null
    : null;
  const focusedChallenge = focusedChoice
    ? creativeChallenges.length > 0
      ? (creativeChallenges[focusedChoice.index % creativeChallenges.length] ?? null)
      : null
    : null;
  const focusedMovement = focusedChoice
    ? movementMoments.length > 0
      ? (movementMoments[focusedChoice.index % movementMoments.length] ?? null)
      : null
    : null;
  const focusedChant = focusedChoice
    ? chantMoments.length > 0
      ? (chantMoments[focusedChoice.index % chantMoments.length] ?? null)
      : null
    : null;
  const focusedCalm = focusedChoice
    ? calmMoments.length > 0
      ? (calmMoments[focusedChoice.index % calmMoments.length] ?? null)
      : null
    : null;
  const focusedModule =
    focusedChoice && recommendedModules.length > 0
      ? recommendedModules[focusedChoice.index % recommendedModules.length]
      : null;
  const focusedLesson = focusedModule?.lessons[0];
  const focusedAdventureHref = focusedLesson
    ? toExploreLessonPath(focusedLesson.id, topic.id)
    : focusedModule
      ? toExploreModulePath(focusedModule.id, topic.id)
      : "/modules";
  const siblingTopics = getExplorerTopics()
    .filter((entry) => entry.id !== topic.id)
    .slice(0, 3);

  const siblingScenes = siblingTopics.map((entry) => ({
    topic: entry,
    scene: getWorldScene(entry.id),
  }));

  return (
    <div className="flex flex-col">
      {/* Auto-narrate world entry */}
      {scene ? <AutoNarrator text={scene.ambientNarration} /> : null}
      {focusedChoice ? (
        <AutoNarrator
          text={`You chose ${focusedChoice.label}. Let's look, move, build, sing, and pause together.`}
        />
      ) : null}
      <ExplorerViewTracker surface="topic" topicId={topic.id} />

      {/* ── Hero Scene ── full-viewport scene backdrop with centered illustration */}
      <header
        className="explore-scene-enter relative flex min-h-[50vh] flex-col items-center justify-center overflow-hidden px-4 py-10 sm:min-h-[55vh] sm:py-14"
        style={{ background: scene?.gradient ?? "var(--gradient-hero)" }}
      >
        {/* Ambient glow orbs for depth */}
        {scene ? (
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div
              className="absolute -left-20 top-1/4 h-60 w-60 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: scene.glowColor }}
            />
            <div
              className="absolute -right-20 bottom-1/4 h-48 w-48 rounded-full opacity-15 blur-3xl"
              style={{ backgroundColor: scene.glowColor }}
            />
          </div>
        ) : null}

        {/* Back + Speak controls — floating top-left */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
          <Link
            href="/explore"
            className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-white/60 bg-white/80 px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
          >
            All Worlds
          </Link>
          <SpeakButton
            text={`${topic.title}. ${topic.subtitle}`}
            label="Hear It"
            className="border-white/60 bg-white/80 text-zinc-700 shadow-sm backdrop-blur-sm hover:bg-white"
          />
        </div>

        {/* Badge floating — larger with glow */}
        {scene ? (
          <span
            className="explore-float absolute right-6 top-6 text-4xl drop-shadow-lg sm:text-5xl"
            aria-hidden="true"
          >
            {scene.badge}
          </span>
        ) : null}

        {/* Scattered floating mini-badges for visual richness */}
        {scene ? (
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <span
              className="explore-float absolute left-[10%] top-[20%] text-xl opacity-40 sm:text-2xl"
              style={{ animationDelay: "500ms" }}
            >
              {scene.badge}
            </span>
            <span
              className="explore-float absolute right-[15%] top-[35%] text-lg opacity-30 sm:text-xl"
              style={{ animationDelay: "1200ms" }}
            >
              {scene.badge}
            </span>
            <span
              className="explore-float absolute left-[20%] bottom-[25%] text-lg opacity-25 sm:text-xl"
              style={{ animationDelay: "800ms" }}
            >
              {scene.badge}
            </span>
          </div>
        ) : null}

        {/* Scene illustration — large and central */}
        <Image
          src={topic.imageSrc}
          alt={topic.imageAlt}
          width={320}
          height={240}
          className="explore-scene-enter relative z-10 h-auto w-full max-w-70 drop-shadow-xl sm:max-w-85"
          style={{ animationDelay: "100ms" }}
          priority
        />

        {/* Title overlay */}
        <div
          className="explore-scene-enter relative z-10 mt-4 text-center"
          style={{ animationDelay: "200ms" }}
        >
          <h1 className="ui-type-display-xl text-zinc-900">
            {topic.title}
          </h1>
          <p className="explore-copy-heavy ui-type-body-lg mt-2 text-zinc-700">
            {topic.subtitle}
          </p>
        </div>

        {/* Decorative bottom wave — taller for smoother transition */}
        <div
          className="absolute bottom-0 left-0 right-0 h-12 sm:h-16"
          style={{
            background:
              "linear-gradient(to bottom, transparent, var(--background))",
          }}
          aria-hidden="true"
        />
      </header>

      <nav
        aria-label="Jump between sections"
        className="sticky top-[56px] z-30 border-y border-zinc-200/70 bg-white/85 px-4 py-2 backdrop-blur-md"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 overflow-x-auto">
          {topicSectionLinks.map((entry) => (
            <a
              key={entry.id}
              href={`#${entry.id}`}
              className="ui-focus-ring inline-flex min-h-10 shrink-0 items-center gap-1.5 rounded-full border border-zinc-200 bg-white/80 px-3 py-1.5 text-xs font-bold text-zinc-700 transition-colors hover:bg-white"
            >
              <span aria-hidden="true" className="text-sm">
                {entry.icon}
              </span>
              <span className="explore-copy-heavy">{entry.label}</span>
              <span className="sr-only">{entry.label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ── Pick a Picture ── pre-reader visual entry points */}
      <section
        id="picture-choices"
        aria-label="Picture choices"
        className="mx-auto w-full max-w-6xl px-4 py-8 sm:py-10"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-2 text-center text-zinc-900">
          Pick a Picture
        </h2>
        <p className="mx-auto mb-5 max-w-2xl text-center text-sm font-semibold text-zinc-600 sm:text-base">
          Tap what you like. We will start learning from your choice.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pictureChoices.map((choice) => {
            const choiceHref = `/explore/${topic.id}?focus=${encodeURIComponent(choice.id)}#picture-path`;
            const isSelected = focusedChoice?.id === choice.id;

            return (
              <article
                key={choice.label}
                className="rounded-3xl border-2 bg-white/90 p-4 text-center shadow-sm backdrop-blur-sm transition-colors"
                style={{
                  borderColor: isSelected
                    ? (scene?.glowColor ?? "#7b78ff")
                    : (scene?.borderColor ?? "#d8d8e6"),
                }}
              >
                <div className="text-5xl" aria-hidden="true">
                  {choice.emoji}
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-zinc-900">
                  {choice.label}
                </h3>
                <p className="mt-2 text-sm font-semibold text-zinc-800">
                  {choice.prompt}
                </p>
                <p className="mt-2 text-xs text-zinc-600">{choice.action}</p>
                <p className="mt-2 text-xs font-semibold text-zinc-700">
                  {choice.followUp}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <SpeakButton
                    text={`${choice.label}. ${choice.prompt}. ${choice.action}. ${choice.followUp}`}
                    label="Hear Idea"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <PictureChoiceLink
                    topicId={topic.id}
                    choiceId={choice.id}
                    choiceLabel={choice.label}
                    href={choiceHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Choose
                  </PictureChoiceLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Picture Path ── guided sequence after a visual choice */}
      <section
        id="picture-path"
        aria-label="Picture path"
        className="mx-auto w-full max-w-5xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Your Next Steps
        </h2>
        {focusedChoice &&
        focusedPrompt &&
        focusedClue &&
        focusedMission &&
        focusedMovement &&
        focusedChant &&
        focusedCalm ? (
          <article
            className="rounded-3xl border-2 bg-white/95 p-5 shadow-sm backdrop-blur-sm"
            style={{ borderColor: scene?.glowColor ?? "#7b78ff" }}
          >
            <p className="text-sm font-bold text-zinc-700">
              Chosen Picture: {focusedChoice.emoji} {focusedChoice.label}
            </p>
            <p className="mt-2 text-sm font-semibold text-zinc-800">
              Follow-up: {focusedChoice.followUp}
            </p>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
              <article className="rounded-2xl border border-zinc-200 bg-white/90 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Step 1: Look
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{focusedPrompt}</p>
                <p className="mt-1 text-xs text-zinc-700">{focusedClue}</p>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white/90 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Step 2: Move
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  {focusedMovement.title}
                </p>
                <p className="mt-1 text-xs text-zinc-700">{focusedMovement.instruction}</p>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white/90 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Step 3: Build
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  {focusedMission.title}
                </p>
                <p className="mt-1 text-xs text-zinc-700">{focusedMission.instruction}</p>
                <p className="mt-1 text-xs text-zinc-600">
                  Materials: {focusedMission.materials.join(", ")}
                </p>
                <p className="mt-1 text-xs font-semibold text-zinc-600">
                  Helper: {focusedMission.helperLine}
                </p>
                <p className="mt-1 text-xs text-amber-700">
                  Safety: {focusedMission.safetyTip}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Reflect: {focusedMission.reflectionPrompt}
                </p>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white/90 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Step 4: Sing
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">{focusedChant.title}</p>
                <p className="mt-1 text-xs text-zinc-700">{focusedChant.chant}</p>
                <p className="mt-1 text-xs font-semibold text-zinc-600">
                  Beat: {focusedChant.beatCue}
                </p>
              </article>
              <article className="rounded-2xl border border-zinc-200 bg-white/90 p-3">
                <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                  Step 5: Pause
                </p>
                <p className="mt-1 text-sm font-semibold text-zinc-900">
                  {focusedCalm.title}
                </p>
                <p className="mt-1 text-xs text-zinc-700">{focusedCalm.prompt}</p>
                <p className="mt-1 text-xs font-semibold text-zinc-600">
                  Breathe: {focusedCalm.breatheCue}
                </p>
              </article>
            </div>
            {focusedChallenge ? (
              <p className="mt-2 text-sm text-zinc-800">
                Create: {focusedChallenge.challenge}
              </p>
            ) : null}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <SpeakButton
                text={`Chosen picture ${focusedChoice.label}. Follow-up ${focusedChoice.followUp}. Step one look: ${focusedPrompt}. Clue: ${focusedClue}. Step two move: ${focusedMovement.title}. ${focusedMovement.instruction}. Step three build: ${focusedMission.title}. ${focusedMission.instruction}. Materials: ${focusedMission.materials.join(", ")}. Helper cue: ${focusedMission.helperLine}. Safety tip: ${focusedMission.safetyTip}. Reflection: ${focusedMission.reflectionPrompt}. Step four sing: ${focusedChant.title}. ${focusedChant.chant}. Beat cue: ${focusedChant.beatCue}. Step five pause: ${focusedCalm.title}. ${focusedCalm.prompt}. Breathe cue: ${focusedCalm.breatheCue}.`}
                label="Hear Path"
                className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
              />
              <PicturePathStartLink
                topicId={topic.id}
                choiceId={focusedChoice.id}
                choiceLabel={focusedChoice.label}
                href={focusedAdventureHref}
                className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
              >
                Start This Adventure
              </PicturePathStartLink>
            </div>
          </article>
        ) : (
          <article
            className="rounded-3xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
            style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
          >
            <p className="text-sm font-semibold text-zinc-700">
              Choose one picture above to unlock a simple question, clue, and mission path.
            </p>
          </article>
        )}
      </section>

      {/* ── Move + Learn ── body-based prompts for pre-readers */}
      <section
        id="move-learn"
        aria-label="Move and learn prompts"
        className="mx-auto w-full max-w-6xl px-4 py-6"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Move + Learn
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {movementMoments.map((movement, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const movementHref = moduleEntry
              ? toExploreModulePath(moduleEntry.id, topic.id)
              : "/modules";

            return (
              <article
                key={movement.title}
                className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
              >
                <h3 className="text-lg font-extrabold text-zinc-900">{movement.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{movement.instruction}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <SpeakButton
                    text={`${movement.title}. ${movement.instruction}`}
                    label="Hear Move"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <MovementAdventureLink
                    topicId={topic.id}
                    title={movement.title}
                    href={movementHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Move into Adventure
                  </MovementAdventureLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Sing + Say ── rhythm and language reinforcement */}
      <section
        aria-label="Sing and say prompts"
        className="mx-auto w-full max-w-6xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Sing + Say
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {chantMoments.map((chant, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const chantHref = moduleEntry
              ? toExploreModulePath(moduleEntry.id, topic.id)
              : "/modules";

            return (
              <article
                key={chant.title}
                className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
              >
                <h3 className="text-lg font-extrabold text-zinc-900">{chant.title}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-800">{chant.chant}</p>
                <p className="mt-1 text-xs text-zinc-600">Beat: {chant.beatCue}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <SpeakButton
                    text={`${chant.title}. ${chant.chant}. Beat cue: ${chant.beatCue}`}
                    label="Hear Chant"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <ChantAdventureLink
                    topicId={topic.id}
                    title={chant.title}
                    href={chantHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Sing into Adventure
                  </ChantAdventureLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Pause + Breathe ── calm regulation prompts */}
      <section
        aria-label="Pause and breathe prompts"
        className="mx-auto w-full max-w-6xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Pause + Breathe
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {calmMoments.map((moment, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const calmHref = moduleEntry
              ? toExploreModulePath(moduleEntry.id, topic.id)
              : "/modules";

            return (
              <article
                key={moment.title}
                className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
              >
                <h3 className="text-lg font-extrabold text-zinc-900">{moment.title}</h3>
                <p className="mt-2 text-sm font-semibold text-zinc-800">{moment.prompt}</p>
                <p className="mt-1 text-xs text-zinc-600">Breathe: {moment.breatheCue}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <SpeakButton
                    text={`${moment.title}. ${moment.prompt}. Breathe cue: ${moment.breatheCue}`}
                    label="Hear Calm"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <CalmMomentLink
                    topicId={topic.id}
                    title={moment.title}
                    href={calmHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Calm into Adventure
                  </CalmMomentLink>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Question Bubbles ── floating prompts */}
      <ScrollReveal>
      <section
        aria-label="Questions to explore"
        className="mx-auto w-full max-w-5xl px-4 py-8 sm:py-10"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg explore-scene-enter mb-5 text-center text-zinc-900">
          Tap a Question
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promptCards.map((prompt, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const firstLesson = moduleEntry?.lessons[0];
            const href = firstLesson
              ? toExploreLessonPath(firstLesson.id, topic.id)
              : moduleEntry
                ? toExploreModulePath(moduleEntry.id, topic.id)
                : "/modules";

            return (
              <QuestionBubble
                key={prompt}
                topicId={topic.id}
                prompt={prompt}
                promptIndex={index}
                href={href}
                glowColor={scene?.glowColor ?? "#7b78ff"}
                borderColor={scene?.borderColor ?? "#cccfff"}
                moduleName={moduleEntry?.title}
                index={index}
              />
            );
          })}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Key Words ── high-frequency concept language for the world */}
      <ScrollReveal delay={100}>
      <section
        aria-label="Key words for this world"
        className="mx-auto w-full max-w-6xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Key Words
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {vocabularyCards.map((entry) => (
            <article
              key={entry.term}
              className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
              style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
            >
              <h3 className="text-lg font-extrabold text-zinc-900">{entry.term}</h3>
              <p className="mt-1 text-sm text-zinc-700">{entry.meaning}</p>
              <div className="mt-3">
                <SpeakButton
                  text={`${entry.term}. ${entry.meaning}`}
                  label="Hear Word"
                  className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Wonder Clues ── short child-facing fact prompts */}
      <ScrollReveal>
      <section
        aria-label="Wonder clues"
        className="mx-auto w-full max-w-5xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Wonder Clues
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {wonderClues.map((clue) => (
            <article
              key={clue}
              className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
              style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
            >
              <p className="text-sm font-semibold text-zinc-800 sm:text-base">{clue}</p>
              <div className="mt-3">
                <SpeakButton
                  text={clue}
                  label="Hear Clue"
                  className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Talk Together ── guided reflection prompts */}
      <ScrollReveal delay={100}>
      <section
        aria-label="Talk together prompts"
        className="mx-auto w-full max-w-5xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Talk Together
        </h2>
        <div className="space-y-3">
          {talkTogether.map((prompt, index) => (
            <article
              key={prompt}
              className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
              style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
            >
              <p className="text-sm font-semibold text-zinc-800 sm:text-base">
                {index + 1}. {prompt}
              </p>
              <div className="mt-3">
                <SpeakButton
                  text={prompt}
                  label="Hear Prompt"
                  className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Create + Imagine ── open-ended creativity tasks */}
      <ScrollReveal>
      <section
        aria-label="Creative challenges"
        className="mx-auto w-full max-w-6xl px-4 py-6"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Create + Imagine
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {creativeChallenges.map((challenge, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const challengeHref = moduleEntry
              ? toExploreModulePath(moduleEntry.id, topic.id)
              : "/modules";
            return (
              <article
                key={challenge.title}
                className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
              >
                <h3 className="text-lg font-extrabold text-zinc-900">{challenge.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{challenge.challenge}</p>
                <p className="mt-2 text-xs font-semibold text-zinc-600">
                  Stretch: {challenge.stretch}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <SpeakButton
                    text={`${challenge.title}. ${challenge.challenge}. Stretch idea: ${challenge.stretch}`}
                    label="Hear Challenge"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <Link
                    href={challengeHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Build with Adventure
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Hands-On Missions ── concrete at-home activity content */}
      <ScrollReveal delay={100}>
      <section
        id="hands-on-missions"
        aria-label="Hands-on missions"
        className="mx-auto w-full max-w-6xl px-4 py-6"
      >
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 className="explore-copy-heavy ui-type-display-lg text-zinc-900">
            Hands-On Missions
          </h2>
          <MissionPrepLink
            topicId={topic.id}
            href={`/explore/${topic.id}/mission-prep`}
            className="ui-focus-ring inline-flex min-h-10 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-xs font-bold text-zinc-900 transition-colors hover:bg-zinc-100 sm:text-sm"
          >
            Mission Prep Sheet
          </MissionPrepLink>
        </div>
        <article
          className="mb-4 rounded-2xl border-2 bg-amber-50/70 p-4 shadow-sm"
          style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
        >
          <h3 className="text-lg font-extrabold text-zinc-900">
            Safety Check Before You Start
          </h3>
          <p className="mt-1 text-sm text-zinc-700">
            Ask a grown-up to do this quick check so mission time stays safe and fun.
          </p>
          <ul className="mt-3 space-y-2">
            {missionSafetyChecklist.map((item) => (
              <li key={item.key} className="flex items-start gap-2 text-sm text-zinc-800">
                <span aria-hidden="true" className="mt-0.5 text-base">
                  🛡️
                </span>
                <span>
                  <span className="font-semibold">
                    {item.step}. {item.title}:
                  </span>{" "}
                  {item.safetyTip}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-3">
            <SpeakButton
              text={`Safety check before missions. ${missionSafetyNarration}`}
              label="Hear Safety Check"
              className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
            />
          </div>
        </article>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {miniMissions.map((mission, index) => {
            const moduleEntry =
              recommendedModules.length > 0
                ? recommendedModules[index % recommendedModules.length]
                : null;
            const missionHref = moduleEntry
              ? toExploreModulePath(moduleEntry.id, topic.id)
              : "/modules";

            return (
              <article
                key={mission.title}
                className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
                style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
              >
                <h3 className="text-lg font-extrabold text-zinc-900">{mission.title}</h3>
                <p className="mt-2 text-sm text-zinc-700">{mission.instruction}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {mission.materials.map((material) => (
                    <span
                      key={`${mission.title}-${material}`}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs font-semibold text-zinc-600"
                    >
                      {material}
                    </span>
                  ))}
                </div>
                <p className="mt-2 text-xs font-semibold text-zinc-600">
                  Helper: {mission.helperLine}
                </p>
                <p className="mt-2 text-xs text-amber-700">
                  Safety: {mission.safetyTip}
                </p>
                <p className="mt-1 text-xs text-zinc-600">
                  Reflect: {mission.reflectionPrompt}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <SpeakButton
                    text={`${mission.title}. ${mission.instruction}. Materials: ${mission.materials.join(", ")}. Helper cue: ${mission.helperLine}. Safety tip: ${mission.safetyTip}. Reflection question: ${mission.reflectionPrompt}`}
                    label="Hear Mission"
                    className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                  />
                  <Link
                    href={missionHref}
                    className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-100"
                  >
                    Start from Adventure
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Grown-Up Guide ── support prompts for caregivers */}
      <ScrollReveal>
      <section
        aria-label="Guide for grown-ups"
        className="mx-auto w-full max-w-5xl px-4 py-2 sm:py-4"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Grown-Up Guide
        </h2>
        <div className="space-y-3">
          {caregiverTips.map((tip, index) => (
            <article
              key={tip}
              className="rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm"
              style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
            >
              <p className="text-sm font-semibold text-zinc-800 sm:text-base">
                Tip {index + 1}: {tip}
              </p>
              <div className="mt-3">
                <SpeakButton
                  text={tip}
                  label="Hear Tip"
                  className="border-sky-200 bg-sky-50 text-sky-900 hover:bg-sky-100"
                />
              </div>
            </article>
          ))}
        </div>
      </section>
      </ScrollReveal>

      {/* ── Related Adventures ── visual module cards */}
      <ScrollReveal delay={100}>
      <section
        id="related-adventures"
        aria-label="Related learning adventures"
        className="mx-auto w-full max-w-6xl px-4 py-6"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Related Adventures
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recommendedModules.length > 0 ? (
            recommendedModules.map((moduleEntry, index) => (
              <AdventureCardLink
                key={moduleEntry.id}
                topicId={topic.id}
                moduleEntry={moduleEntry}
                index={index}
                glowColor={scene?.glowColor ?? "#7b78ff"}
                borderColor={scene?.borderColor ?? "#cccfff"}
              />
            ))
          ) : (
            <article className="rounded-2xl border-2 border-zinc-200 bg-white/90 p-5 sm:col-span-2 lg:col-span-3">
              <p className="text-sm text-zinc-700">
                No direct module matches yet — explore the full catalog!
              </p>
              <Link
                href="/modules"
                className="ui-focus-ring mt-3 inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
              >
                Open Full Catalog
              </Link>
            </article>
          )}
        </div>
      </section>
      </ScrollReveal>

      {/* ── World Portals ── jump to sibling worlds */}
      <ScrollReveal>
      <section
        id="other-worlds"
        aria-label="Explore other worlds"
        className="mx-auto w-full max-w-5xl px-4 py-8"
      >
        <h2 className="explore-copy-heavy ui-type-display-lg mb-4 text-zinc-900">
          Try Another World
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {siblingScenes.map(({ topic: entry, scene: entryScene }, index) =>
            entryScene ? (
              <WorldPortal
                key={entry.id}
                fromTopicId={topic.id}
                topic={entry}
                scene={entryScene}
                index={index}
              />
            ) : null,
          )}
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
}
