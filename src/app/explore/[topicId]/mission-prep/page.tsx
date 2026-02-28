import Link from "next/link";
import { notFound } from "next/navigation";
import { getExplorerTopicById } from "@/lib/explorer/topics";
import { getWorldScene } from "@/lib/explorer/scenes";
import MissionPrepPrintButton from "../../_components/mission-prep-print-button";
import MissionPrepTracker from "../../_components/mission-prep-tracker";

type MissionPrepParams = {
  topicId: string;
};

export default async function MissionPrepPage({
  params,
}: {
  params: Promise<MissionPrepParams>;
}) {
  const resolvedParams = await params;
  const topic = getExplorerTopicById(resolvedParams.topicId);
  if (!topic) notFound();

  const scene = getWorldScene(topic.id);
  const missions = topic.miniMissions.slice(0, 3);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 print:max-w-none print:px-0 print:py-0">
      <MissionPrepTracker topicId={topic.id} />
      <header
        className="rounded-3xl border-2 p-6 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none"
        style={{
          borderColor: scene?.borderColor ?? "#d8d8e6",
          background: scene?.gradient ?? "linear-gradient(135deg, #f4f6ff 0%, #ffffff 100%)",
        }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
          <Link
            href={`/explore/${topic.id}`}
            className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-bold text-zinc-900 transition-colors hover:bg-white"
          >
            Back to World
          </Link>
          <MissionPrepPrintButton topicId={topic.id} />
        </div>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-zinc-900 print:mt-0">
          {topic.title} Mission Prep Sheet
        </h1>
        <p className="mt-2 text-sm font-semibold text-zinc-700">
          Quick setup guide for hands-on activities with materials, helper cues, safety reminders, and note space.
        </p>
      </header>

      <section className="mt-6 space-y-4">
        {missions.map((mission, index) => (
          <article
            key={mission.title}
            className="break-inside-avoid rounded-2xl border-2 bg-white p-5 shadow-sm print:shadow-none"
            style={{ borderColor: scene?.borderColor ?? "#d8d8e6" }}
          >
            <h2 className="text-xl font-extrabold text-zinc-900">
              {index + 1}. {mission.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-800">{mission.instruction}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
              Materials
            </p>
            <ul className="mt-2 space-y-1">
              {mission.materials.map((material) => (
                <li key={`${mission.title}-${material}`} className="text-sm text-zinc-700">
                  ☐ {material}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
              Helper Cue
            </p>
            <p className="mt-1 text-sm font-semibold text-zinc-700">{mission.helperLine}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
              Safety Tip
            </p>
            <p className="mt-1 text-sm text-amber-700">{mission.safetyTip}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
              Reflection Prompt
            </p>
            <p className="mt-1 text-sm text-zinc-700">{mission.reflectionPrompt}</p>
            <p className="mt-3 text-xs font-bold uppercase tracking-wide text-zinc-500">
              Notes
            </p>
            <div className="mt-2 h-16 rounded-lg border border-dashed border-zinc-300" />
          </article>
        ))}
      </section>
    </main>
  );
}
