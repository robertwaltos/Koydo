import { notFound, redirect } from "next/navigation";
import { getCurriculumSession } from "@/app/actions/student-curriculum";
import CurriculumView from "./curriculum-view";

export const dynamic = "force-dynamic";

type PageProps = {
  params: Promise<{ sessionId: string }>;
};

export default async function CurriculumSessionPage({ params }: PageProps) {
  const { sessionId } = await params;

  const session = await getCurriculumSession(sessionId);

  if (!session) {
    // Session not found or user not authenticated → redirect appropriately
    redirect("/student/dashboard");
  }

  if (session.modules.length === 0) {
    notFound();
  }

  return (
    <CurriculumView
      sessionId={session.id}
      worldId={session.world_id}
      modules={session.modules}
    />
  );
}
