"use server";

import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { MEDIA_PROMPTS } from "@/lib/media/generated-prompts";
import { redirect } from "next/navigation";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

const CurriculumModuleSchema = z.object({
  id: z.string().optional(),
  title: z.string(),
  desc: z.string(),
  icon: z.string(),
  media: z.object({
    introVideoId: z.string().optional(),
    ambientAudioId: z.string().optional(),
    animationStyle: z.string().optional(),
  }).optional(),
});

type CurriculumModule = z.infer<typeof CurriculumModuleSchema>;

function toTitleCase(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((token) => token.charAt(0).toUpperCase() + token.slice(1))
    .join(" ");
}

function normalizePathAllowlist(value: unknown): string[] | null {
  if (!Array.isArray(value)) return null;
  const normalized = value.filter((entry): entry is string => typeof entry === "string" && entry.length > 0);
  return normalized.length > 0 ? normalized : null;
}

function createDomainMockModules(pathId: string): CurriculumModule[] {
  const labelByPath: Record<string, string> = {
    "ai-workflows": "AI Workflows",
    "language-core": "Language Arts",
    "math-core": "Mathematics",
    "science-core": "Science",
    "social-core": "Social Studies",
    "cpu-gpu-memory-design": "Computer Architecture",
    "electrician-electricity": "Electrical Trades",
    "food-science": "Food Science",
    "gardening": "Gardening",
    "law-studies": "Law and Civics",
  };
  const label = labelByPath[pathId] ?? toTitleCase(pathId);
  const iconByPath: Record<string, string> = {
    "electrician-electricity": "⚡",
    "microelectronics": "🔬",
    "micro-circuits": "🧩",
    "cpu-gpu-memory-design": "🧠",
    "electrical-engineering": "🔌",
    "civil-engineering": "🏗️",
    "plumbing": "🚰",
    "hvac": "❄️",
    "meteorology": "🌦️",
    "nursing": "🩺",
    "medicine": "🧬",
    "law-studies": "⚖️",
    "language-core": "✍️",
    "math-core": "➗",
    "science-core": "🔬",
    "social-core": "🧭",
    "project-management": "📋",
    "coding": "💻",
    "ai-workflows": "🤖",
    "gardening": "🌱",
    "food-science": "🍳",
  };
  const icon = iconByPath[pathId] || "📘";

  return [
    {
      title: `${label} Foundations`,
      desc: `Build core concepts in ${label.toLowerCase()}.`,
      icon,
      media: { animationStyle: "tech_clean" },
    },
    {
      title: `${label} in Practice`,
      desc: "Apply concepts with guided scenarios.",
      icon,
      media: { animationStyle: "tech_clean" },
    },
    {
      title: `${label} Challenge`,
      desc: "Test mastery with real-world decisions.",
      icon,
      media: { animationStyle: "tech_clean" },
    },
  ];
}

/* -------------------------------------------------------------------------- */
/*                                 AI Action                                  */
/* -------------------------------------------------------------------------- */

export async function generateCurriculumModules(
  profileId: string,
  worldId?: string
): Promise<{ modules: CurriculumModule[]; source: "ai" | "mock" }> {
  /* Only authenticated users can call this */
  const supabase = await createSupabaseServerClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  let profile: {
    grade_level: string | null;
    initial_assessment_data: unknown;
    age_years: number | null;
    display_name: string;
    path_allowlist: unknown;
  };

  try {
    /* Fetch Profile Data for Context */
    const { data: fetchedProfile, error } = await supabase
      .from("student_profiles")
      .select("grade_level, initial_assessment_data, age_years, display_name, path_allowlist")
      .eq("id", profileId)
      .eq("account_id", user.id)
      .single();

    if (error || !fetchedProfile) {
      return { modules: createDomainMockModules(worldId ?? "math-core"), source: "mock" };
    }
    profile = fetchedProfile;
  } catch (err) {
    console.error("Profile lookup error in generateCurriculumModules.", toSafeErrorRecord(err));
    return { modules: createDomainMockModules(worldId ?? "math-core"), source: "mock" };
  }

  const pathAllowlist = normalizePathAllowlist(profile.path_allowlist);
  if (worldId && pathAllowlist && !pathAllowlist.includes(worldId)) {
    const safeFallbackPath = pathAllowlist[0] ?? "math-core";
    return { modules: createDomainMockModules(safeFallbackPath), source: "mock" };
  }

  // Fallback / Mock logic for distinct world
  const mockModulesByPath: Record<string, CurriculumModule[]> = {
    tree: [
      { 
        title: "Photosynthesis", 
        desc: "Learn how plants eat sunlight.", 
        icon: "🌿",
        media: { introVideoId: "VIDEO_TREE_INTRO_01", animationStyle: "nature_soft" }
      },
      { 
        title: "Root Systems", 
        desc: "Explore under the ground.", 
        icon: "🌱",
        media: { introVideoId: "VIDEO_TREE_GROWTH_01", animationStyle: "nature_soft" }
      }
    ],
    ocean: [
      { 
        title: "Coral Reefs", 
        desc: "Discover underwater cities.", 
        icon: "🐠",
        media: { introVideoId: "VIDEO_OCEAN_INTRO_01", animationStyle: "ocean_flow" }
      }
    ],
    space: [
      { 
        title: "Gravity", 
        desc: "Why do things fall?", 
        icon: "🪐",
         media: { introVideoId: "VIDEO_SPACE_INTRO_01", animationStyle: "space_float" }
      }
    ]
  };

  // If no API key, return specific mock based on grade or world
  if (!serverEnv.OPENAI_API_KEY) {
     if (worldId) {
        return { modules: mockModulesByPath[worldId] ?? createDomainMockModules(worldId), source: "mock" };
     }
     
     const isYoung = ["K", "1", "2"].includes(profile.grade_level || "");
     return {
       modules: isYoung ? [
         { title: "Number Safari", desc: "Count animals in the jungle.", icon: "🦁" },
         { title: "Shape Detectives", desc: "Find triangles and squares.", icon: "🔍" },
         { title: "Color Magic", desc: "Mixing colors to make new ones.", icon: "🎨" }
       ] : [
         { title: "Quantum Logic", desc: "Understanding 0 and 1 simultaneously.", icon: "⚛️" },
         { title: "Cyber-Civics", desc: "Ethics in the digital frontier.", icon: "🌐" },
         { title: "Bio-Engineering", desc: "Designing plant DNA.", icon: "🧬" }
       ],
       source: "mock"
     };
  }

  try {
    const assessmentSummary = JSON.stringify(profile.initial_assessment_data || {});
    
    // Filter available prompts for the selected world to guide the AI
    const relevantPrompts = Object.values(MEDIA_PROMPTS)
      .filter(p => !worldId || p.id.toLowerCase().includes(worldId.toLowerCase()))
      .map(p => `- ${p.id} (${p.category})`)
      .join("\n");

    const systemPrompt = `You are an advanced AI Curriculum Architect.
    Design 3 distinct, high-impact learning modules for a student.
    Student Profile:
    - Name: ${profile.display_name}
    - Grade: ${profile.grade_level}
    - Age: ${profile.age_years || "Unknown"}
    - Diagnostic Data: ${assessmentSummary}
    - Selected Path: ${worldId || "General"}

    Available Media Assets (use these IDs if relevant):
    ${relevantPrompts}

    Requirements:
    - Make each module engaging, age-appropriate, and tailored to learning gaps.
    - Keep language learner-friendly and concrete.
    - Do not mention internal terms like "1000X", "Neural Cinema", or system architecture.
    - If a specific media asset fits, include its ID in media.introVideoId.
    - Suggested media.animationStyle values: "nature_soft", "tech_clean", "ocean_flow", "space_float".

    Output strictly valid JSON:
    {
      "modules": [
        {
          "title": "Module Name",
          "desc": "Short exciting description (max 10 words)",
          "icon": "emoji",
          "media": {
            "introVideoId": "OPTIONAL_MEDIA_ID",
            "animationStyle": "OPTIONAL_STYLE"
          }
        }
      ]
    }`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: serverEnv.OPENAI_FOLLOWUP_MODEL || "gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: "Generate curriculum modules." },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    const parsed = JSON.parse(content);
    
    // Validate schema
    const result = z.object({ modules: z.array(CurriculumModuleSchema) }).safeParse(parsed);

    if (result.success && result.data.modules.length > 0) {
      return { modules: result.data.modules, source: "ai" };
    } else {
      throw new Error("Invalid AI format");
    }

  } catch (error) {
    console.error("Failed to generate curriculum.", toSafeErrorRecord(error));
    // Return fallback
    return {
       modules: [
         { title: "Logic Gates", desc: "Introduction to boolean reasoning.", icon: "🚪" },
         { title: "Pattern recognition", desc: "finding hidden sequences.", icon: "👀" },
         { title: "Creative Writing", desc: "Storytelling with AI.", icon: "✍️" }
       ],
       source: "mock"
    };
  }
}

