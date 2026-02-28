export default function LessonLoading() {
  return (
    <div className="flex min-h-[calc(100vh-52px)] flex-col items-center justify-center px-4">
      {/* Spinner with world-themed styling */}
      <div className="flex flex-col items-center gap-5">
        {/* Animated loading ring */}
        <div className="relative h-16 w-16">
          <div
            className="absolute inset-0 animate-spin rounded-full border-4 border-zinc-200 border-t-zinc-400"
            style={{ animationDuration: "800ms" }}
          />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-44 animate-pulse rounded-lg bg-zinc-100" />
          <div className="h-4 w-32 animate-pulse rounded-lg bg-zinc-50" />
        </div>
      </div>
    </div>
  );
}
