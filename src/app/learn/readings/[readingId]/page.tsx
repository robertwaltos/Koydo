import ReadingViewer from "@/components/readings/ReadingViewer";

export default async function ReadingPage({ params }: { params: Promise<{ readingId: string }> }) {
  const { readingId } = await params;
  return (
    <main className="px-4 py-12">
      <ReadingViewer readingId={readingId} />
    </main>
  );
}
