import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import SoftCard from "@/app/components/ui/soft-card";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import ClassroomModeShellClient from "./classroom-mode-shell-client";

type PageParams = {
  classId: string;
};

function isUuid(value: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    value,
  );
}

export const dynamic = "force-dynamic";

export default function TestingClassroomModePage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  return <TestingClassroomModePageContent params={params} />;
}

async function TestingClassroomModePageContent({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const resolvedParams = await params;
  if (!isUuid(resolvedParams.classId)) {
    notFound();
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    const next = encodeURIComponent(`/testing/classes/${resolvedParams.classId}/classroom`);
    redirect(`/auth/sign-in?next=${next}`);
  }

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10">
      <SoftCard as="header" className="bg-[var(--gradient-hero)] p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
              Classroom Delivery
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-zinc-900">
              Session Control Room
            </h1>
            <p className="mt-2 text-sm font-medium text-zinc-700">
              Operate Live, Student-Paced, and Front-of-Class workflows from one teacher console.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href={`/testing/classes/${encodeURIComponent(resolvedParams.classId)}`}
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
            >
              Class Workspace
            </Link>
            <Link
              href="/testing/classes"
              className="ui-focus-ring inline-flex min-h-11 items-center rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-100"
            >
              All Classes
            </Link>
          </div>
        </div>
      </SoftCard>

      <ClassroomModeShellClient classId={resolvedParams.classId} />
    </main>
  );
}

