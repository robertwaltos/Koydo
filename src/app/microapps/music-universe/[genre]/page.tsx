import { notFound } from "next/navigation";
import GenreMusicLab from "./genre-music-lab";
import { findMusicGenre } from "@/lib/music-universe/catalog";

export const dynamic = "force-dynamic";

export default async function GenrePage({
  params,
}: {
  params: Promise<{ genre: string }>;
}) {
  const { genre } = await params;
  const selectedGenre = await findMusicGenre(genre);
  if (!selectedGenre) {
    notFound();
  }

  return <GenreMusicLab genre={selectedGenre} />;
}
