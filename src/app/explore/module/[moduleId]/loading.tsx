export default function ModuleLoading() {
  return (
    <div className="flex flex-col">
      {/* Hero skeleton */}
      <div className="relative flex min-h-[42vh] flex-col items-center justify-center overflow-hidden bg-zinc-100/50 px-4 py-10 sm:min-h-[48vh] sm:py-14">
        {/* Back button skeleton */}
        <div className="absolute left-4 top-4 z-20">
          <div className="h-10 w-28 animate-pulse rounded-full bg-white/60" />
        </div>

        {/* Image skeleton */}
        <div className="h-44 w-56 animate-pulse rounded-2xl bg-white/40 sm:h-52 sm:w-64" />

        {/* Title skeleton */}
        <div className="mt-4 flex flex-col items-center gap-2">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-white/50" />
          <div className="h-5 w-48 animate-pulse rounded-lg bg-white/40" />
        </div>
      </div>

      {/* Lesson list skeleton */}
      <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-10">
        <div className="mb-6 flex justify-center">
          <div className="h-8 w-60 animate-pulse rounded-lg bg-zinc-100" />
        </div>

        <div className="mb-6 flex justify-center gap-3">
          <div className="h-8 w-28 animate-pulse rounded-full bg-zinc-100" />
          <div className="h-8 w-24 animate-pulse rounded-full bg-zinc-100" />
        </div>

        <div className="grid grid-cols-1 gap-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border-2 border-zinc-100 bg-white/90 px-5 py-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="h-11 w-11 animate-pulse rounded-full bg-zinc-100" />
              <div className="flex flex-1 flex-col gap-1.5">
                <div className="h-4 w-3/4 animate-pulse rounded bg-zinc-100" />
                <div className="h-3 w-1/3 animate-pulse rounded bg-surface-muted" />
              </div>
              <div className="h-10 w-16 animate-pulse rounded-full bg-zinc-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
