import Link from "next/link";
import { loadMusicGenreCatalog } from "@/lib/music-universe/catalog";

export const dynamic = "force-dynamic";

export default async function MusicUniversePage() {
  const catalog = await loadMusicGenreCatalog();
  const genres = [...catalog.genres].sort((a, b) => a.rank - b.rank);

  return (
    <main className="min-h-screen bg-[#09111f] text-zinc-100">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 md:px-10 md:py-12">
        <header className="mb-10">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Koydo Music Universe</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">Genre Microapp Grid</h1>
          <p className="mt-4 max-w-3xl text-sm text-zinc-300 md:text-base">
            {genres.length} genre-specific music microapps. Each genre can generate 200 original songs with lyrics, language targeting, and Suno-ready prompts.
            Open a genre to access beat-screen controls and prompt building.
          </p>
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-zinc-200">
            <p className="font-semibold text-zinc-100">Run full generation:</p>
            <code className="mt-2 block rounded-md bg-black/30 p-3 text-cyan-200">npm run music:universe:generate</code>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {genres.map((genre) => (
            <Link
              key={genre.id}
              href={`/microapps/music-universe/${genre.id}`}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5 transition hover:-translate-y-1 hover:border-cyan-300/60 hover:shadow-[0_20px_45px_-20px_rgba(34,211,238,0.45)]"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full border border-cyan-300/40 px-2 py-1 text-cyan-200">#{genre.rank}</span>
                <span className="text-zinc-400">{genre.family}</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight text-zinc-50">{genre.name}</h2>
              <p className="mt-2 text-sm text-zinc-300">
                BPM {genre.bpmRange[0]}-{genre.bpmRange[1]} | Energy {genre.energyRange[0]}-{genre.energyRange[1]}
              </p>
              <p className="mt-3 line-clamp-2 text-xs text-zinc-400">{genre.signals[0]}</p>
              <p className="mt-5 text-xs font-medium text-cyan-200 group-hover:text-cyan-100">Open genre lab</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
