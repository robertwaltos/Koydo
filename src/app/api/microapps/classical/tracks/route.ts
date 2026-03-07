import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Classical Tracks API
 * Curated high-fidelity classical music metadata from Musopen Public Domain.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const era = searchParams.get("era");

    const tracks = [
      { id: 1, title: "Nocturne Op. 9 No. 2", composer: "Frédéric Chopin", era: "The Romantic Era", duration: "4:32", icon: "🎹", streamUrl: "https://musopen.org/music/32-nocturnes-op-9/", lyrics: ["Piano solo gently begins...", "The melody flows like a stream...", "A sense of romantic longing...", "Soft trills decorate the theme."] },
      { id: 2, title: "Clair de Lune", composer: "Claude Debussy", era: "Midnight Nocturnes", duration: "5:05", icon: "🌙", streamUrl: "https://musopen.org/music/4407-suite-bergamasque/", lyrics: ["Ethereal piano chords...", "Like moonlight reflecting on water...", "A delicate dance of shadows...", "Gentle ripples in the silence."] },
      { id: 3, title: "Symphony No. 5", composer: "Ludwig van Beethoven", era: "Grand Orchestral", duration: "7:24", icon: "🎻", streamUrl: "https://musopen.org/music/2497-symphony-no-5-in-c-minor-op-67/", lyrics: ["Fate knocks at the door...", "Powerful orchestral unison...", "The struggle begins...", "A triumphant resolution."] },
      { id: 4, title: "Air on the G String", composer: "J.S. Bach", era: "Baroque Masterpieces", duration: "3:45", icon: "🎼", streamUrl: "https://musopen.org/music/1414-orchestral-suite-no-3-in-d-major-bwv-1068/", lyrics: ["Stately strings ascending...", "A weaving tapestry of sound...", "Baroque elegance and grace...", "Continuo provides the pulse."] },
      { id: 5, title: "The Blue Danube", composer: "Johann Strauss II", era: "The Romantic Era", duration: "9:12", icon: "🌊", streamUrl: "https://musopen.org/music/2612-the-blue-danube-op-314/", lyrics: ["Introductory horn call...", "The waltz begins softly...", "A swirling ballroom dance...", "Majestic river flow."] },
      { id: 6, title: "Gymnopédie No. 1", composer: "Erik Satie", era: "Midnight Nocturnes", duration: "3:25", icon: "💎", streamUrl: "https://musopen.org/music/154-3-gymnopedies/", lyrics: ["Minimalist piano drift...", "A lonely, walking pace...", "Melancholy and beauty...", "Space between the notes."] },
      { id: 7, title: "Four Seasons: Spring", composer: "Antonio Vivaldi", era: "Baroque Masterpieces", duration: "3:30", icon: "🌸", streamUrl: "https://musopen.org/music/1491-the-four-seasons-op-8/", lyrics: ["Birds singing in the trees...", "Spring has arrived...", "Thunder and lightning...", "Flowering meadows."] },
      { id: 8, title: "Libertango", composer: "Astor Piazzolla", era: "The Romantic Era", duration: "4:15", icon: "💃", streamUrl: "#", lyrics: ["Sharp, rhythmic accordion...", "The passion of the tango...", "A modern classical pulse...", "Intensity and fire."] },
    ];

    if (era) {
      return NextResponse.json(tracks.filter(t => t.era === era));
    }

    return NextResponse.json(tracks);

  } catch (err) {
    console.error("[Classical API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
