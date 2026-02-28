import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { getLearningModuleByLookupKey } from "@/lib/modules";
import ModuleCoverImage from "@/app/components/module-cover-image";
import { toLessonPath, toModulePath } from "@/lib/routing/paths";
import SoftCard from "@/app/components/ui/soft-card";
import ProgressChip from "@/app/components/ui/progress-chip";

export default function ModuleDetailsPage({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  return <ModuleDetailsPageContent params={params} />;
}

async function ModuleDetailsPageContent({
  params,
}: {
  params: Promise<{ moduleId: string }>;
}) {
  const resolvedParams = await params;
  const learningModule = getLearningModuleByLookupKey(resolvedParams.moduleId);

  if (!learningModule) {
    notFound();
  }

  if (resolvedParams.moduleId !== learningModule.id) {
    redirect(toModulePath(learningModule.id));
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 py-12">
      <header className="space-y-2">
        <Link href="/modules" className="text-sm text-zinc-700 hover:underline">
          &larr; Back to modules
        </Link>
        <h1 className="text-3xl font-semibold tracking-tight">{learningModule.title}</h1>
        <p className="text-sm text-zinc-700">{learningModule.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <ProgressChip label="Subject" value={learningModule.subject} tone="info" />
          {learningModule.version ? <ProgressChip label="Version" value={learningModule.version} /> : null}
        </div>
      </header>

      <SoftCard as="section" className="overflow-hidden border-sky-200 p-3">
        <ModuleCoverImage
          moduleId={learningModule.id}
          moduleTitle={learningModule.title}
          fallbackSrc={learningModule.thumbnail}
          className="h-56 w-full rounded-xl object-cover"
        />
      </SoftCard>

      <SoftCard as="section" className="border-emerald-200 p-5">
        <h2 className="text-lg font-semibold">Lessons</h2>
        <ul className="mt-3 space-y-2">
          {learningModule.lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                href={toLessonPath(lesson.id)}
                className="ui-soft-button ui-focus-ring flex min-h-11 items-center justify-between rounded-2xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm hover:bg-emerald-100"
              >
                <span>{lesson.title}</span>
                <span className="text-xs text-zinc-500">{lesson.duration} min</span>
              </Link>
            </li>
          ))}
        </ul>
      </SoftCard>
    </main>
  );
}
