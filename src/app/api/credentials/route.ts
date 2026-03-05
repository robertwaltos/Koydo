import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Credential tracks — stackable pathways from modules to larger qualifications
const CREDENTIAL_TRACKS = [
  {
    id: "algebra-foundations",
    title: "Algebra Foundations",
    description: "Master core algebraic concepts: variables, equations, inequalities, and functions.",
    subject: "Mathematics",
    requiredModules: 5,
    badgeIcon: "&#128300;",
    ladderTo: "pre-calculus",
  },
  {
    id: "pre-calculus",
    title: "Pre-Calculus",
    description: "Trigonometry, sequences, limits, and preparation for calculus.",
    subject: "Mathematics",
    requiredModules: 4,
    badgeIcon: "&#128202;",
    ladderTo: "calculus-mastery",
  },
  {
    id: "calculus-mastery",
    title: "Calculus Mastery",
    description: "Derivatives, integrals, and applications of calculus.",
    subject: "Mathematics",
    requiredModules: 6,
    badgeIcon: "&#127942;",
    ladderTo: null,
  },
  {
    id: "reading-fluency",
    title: "Reading Fluency",
    description: "Build strong reading comprehension and vocabulary skills.",
    subject: "Language Arts",
    requiredModules: 4,
    badgeIcon: "&#128214;",
    ladderTo: "critical-analysis",
  },
  {
    id: "critical-analysis",
    title: "Critical Analysis",
    description: "Advanced reading skills: inference, argument analysis, and literary criticism.",
    subject: "Language Arts",
    requiredModules: 5,
    badgeIcon: "&#128209;",
    ladderTo: null,
  },
  {
    id: "science-explorer",
    title: "Science Explorer",
    description: "Foundations of physics, chemistry, and biology.",
    subject: "Science",
    requiredModules: 6,
    badgeIcon: "&#128300;",
    ladderTo: "advanced-science",
  },
  {
    id: "advanced-science",
    title: "Advanced Science",
    description: "Deep dives into specialized science topics and lab skills.",
    subject: "Science",
    requiredModules: 5,
    badgeIcon: "&#129514;",
    ladderTo: null,
  },
  {
    id: "coding-basics",
    title: "Coding Basics",
    description: "Learn programming fundamentals: variables, loops, functions, and logic.",
    subject: "Computer Science",
    requiredModules: 4,
    badgeIcon: "&#128187;",
    ladderTo: "web-development",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build websites with HTML, CSS, JavaScript, and modern frameworks.",
    subject: "Computer Science",
    requiredModules: 5,
    badgeIcon: "&#127760;",
    ladderTo: null,
  },
  {
    id: "world-history",
    title: "World History",
    description: "Survey of major historical events, civilizations, and movements.",
    subject: "History",
    requiredModules: 5,
    badgeIcon: "&#127758;",
    ladderTo: null,
  },
];

/** GET /api/credentials — list credential tracks with user progress */
export async function GET() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  let userProgress: Record<string, number> = {};
  let earnedCredentials: string[] = [];

  if (user) {
    // Count completed modules per subject
    const { data: certs } = await supabase
      .from("user_certificates")
      .select("module_id, certificate_type")
      .eq("user_id", user.id)
      .eq("certificate_type", "module_completion");

    const completedCount = (certs ?? []).length;
    // Simple progress: distribute completed modules across tracks by subject
    for (const track of CREDENTIAL_TRACKS) {
      const subjectCerts = (certs ?? []).filter(() => true); // All certs contribute
      userProgress[track.id] = Math.min(subjectCerts.length, track.requiredModules);
    }

    // Check earned credentials
    const { data: credCerts } = await supabase
      .from("user_certificates")
      .select("title")
      .eq("user_id", user.id)
      .eq("certificate_type", "milestone")
      .like("title", "Credential:%");

    earnedCredentials = (credCerts ?? []).map((c) => c.title.replace("Credential: ", ""));

    // Use actual count for all
    for (const track of CREDENTIAL_TRACKS) {
      userProgress[track.id] = Math.min(
        Math.floor(completedCount / CREDENTIAL_TRACKS.length),
        track.requiredModules
      );
    }
  }

  const tracks = CREDENTIAL_TRACKS.map((track) => ({
    ...track,
    progress: userProgress[track.id] ?? 0,
    earned: earnedCredentials.includes(track.id),
  }));

  return NextResponse.json({ tracks });
}

/** POST /api/credentials — claim a completed credential */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { trackId } = await req.json();
  const track = CREDENTIAL_TRACKS.find((t) => t.id === trackId);
  if (!track) return NextResponse.json({ error: "Track not found" }, { status: 404 });

  // Issue credential certificate
  await supabase.from("user_certificates").upsert({
    user_id: user.id,
    certificate_type: "milestone",
    title: `Credential: ${track.id}`,
    description: `Earned the "${track.title}" microcredential in ${track.subject}.`,
  });

  return NextResponse.json({ ok: true, credential: track.title });
}
