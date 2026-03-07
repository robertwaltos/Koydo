import { NextResponse } from "next/server";

export const runtime = "edge";

/**
 * Lo-Fi Tracks API
 * Curated CC BY and CC0 Lo-Fi tracks for study sessions.
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const tracks = [
      { id: "indigo", title: "indigo", artist: "mell-ø", category: "Nature Lo-Fi", license: "CC BY (Lofi Records)", lyrics: ["Soft nocturnal piano...", "Subtle vinyl crackle builds...", "Distant thunder rolling...", "A sense of calm arrives."] },
      { id: "telegraph-hill", title: "Telegraph Hill", artist: "Mama Aiuto", category: "Jazzy Lo-Fi", license: "CC BY", lyrics: ["Jaunty piano melody...", "Brassy jazz highlights...", "San Francisco morning...", "Urban focus."] },
      { id: "sunja", title: "Sunja", artist: "Casiio & Tah.", category: "Nature Lo-Fi", license: "CC BY", lyrics: ["Gentle acoustic guitar...", "Birds chirping softly...", "Warm afternoon sun...", "Nature's pulse."] },
      { id: "uprising", title: "Uprising", artist: "Scott Buckley", category: "Cinematic Study", license: "CC BY", lyrics: ["Epic orchestral swell...", "Heroic motivation builds...", "Passing the final test...", "Victory is near."] },
      { id: "new-light", title: "New Light", artist: "LiQWYD", category: "Nature Lo-Fi", license: "CC BY", lyrics: ["Bright modern synth...", "Optimistic morning vibe...", "Fresh start today...", "Energy flow."] },
      { id: "midnight-library", title: "Midnight Library", artist: "Koydo Originals", category: "Deep Focus", license: "CC0", lyrics: ["Deep 528Hz drone...", "Universal focus frequency...", "Mind expanding slowly...", "Infinite knowledge."] },
      { id: "flamenco-focus", title: "Spanish Night", artist: "ElevenLabs AI", category: "Flamenco Lo-Fi", license: "Koydo Exclusive", lyrics: ["Fiery Spanish guitar...", "Rhythmic finger taps...", "Passion meets focus...", "Andalusian study."] },
    ];

    if (category) {
      return NextResponse.json(tracks.filter(t => t.category === category));
    }

    return NextResponse.json(tracks);

  } catch (err) {
    console.error("[Lo-Fi API] Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
