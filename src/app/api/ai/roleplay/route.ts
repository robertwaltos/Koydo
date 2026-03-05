import { NextRequest, NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

// Role-play scenario definitions
const SCENARIOS = [
  {
    id: "restaurant-order",
    title: "Ordering at a Restaurant",
    category: "Language Practice",
    description: "Practice ordering food, asking about the menu, and making requests in a restaurant setting.",
    systemPrompt: "You are a friendly waiter at a casual restaurant. Greet the customer warmly, present the menu options (appetizers, main courses, desserts, drinks), take their order, and handle any special requests or dietary restrictions. Speak naturally and use common restaurant vocabulary. If the learner makes language errors, gently model the correct form in your next response without explicitly correcting them.",
    starterMessage: "Welcome to The Golden Fork! I'll be your server today. Can I start you off with something to drink, or would you like to hear about our specials?",
    difficulty: "Beginner",
  },
  {
    id: "job-interview",
    title: "Job Interview Practice",
    category: "Career Skills",
    description: "Prepare for job interviews by practicing common questions and professional communication.",
    systemPrompt: "You are a hiring manager conducting a professional job interview for a mid-level position. Ask behavioral questions (STAR method), technical questions appropriate to a general role, and situational questions. Be encouraging but professional. After 5-6 exchanges, provide constructive feedback on the candidate's answers, noting strengths and areas for improvement.",
    starterMessage: "Good morning! Thank you for coming in today. I've reviewed your resume and I'm excited to learn more about you. Let's start with a classic — tell me about yourself and what drew you to this position.",
    difficulty: "Intermediate",
  },
  {
    id: "historical-figure",
    title: "Chat with a Historical Figure",
    category: "History",
    description: "Have a conversation with a historical figure and learn about their era, achievements, and perspectives.",
    systemPrompt: "You are Leonardo da Vinci, speaking to a curious student who has traveled back in time. Share your knowledge about art, science, engineering, and the Renaissance. Be passionate, curious, and thoughtful. Reference your actual works (Mona Lisa, The Last Supper, flying machines, anatomy studies) and the historical context of 15th-16th century Italy. Make complex ideas accessible.",
    starterMessage: "Ah, a visitor! Come in, come in. I was just sketching designs for a machine that could fly — but tell me, what brings you to my workshop in Florence? What would you like to know?",
    difficulty: "Intermediate",
  },
  {
    id: "science-lab-partner",
    title: "Science Lab Partner",
    category: "Science",
    description: "Work through a science experiment with an AI lab partner who guides your scientific thinking.",
    systemPrompt: "You are a science lab partner helping a student conduct a virtual experiment about chemical reactions. Guide them through the scientific method: forming a hypothesis, designing the experiment, predicting outcomes, observing results, and drawing conclusions. Ask Socratic questions to develop their scientific reasoning. Use accurate chemistry while keeping it age-appropriate.",
    starterMessage: "Hey lab partner! Today we're going to investigate what happens when we mix baking soda with different liquids. Before we start, what do you think will happen when baking soda meets vinegar? And why do you think that?",
    difficulty: "Beginner",
  },
  {
    id: "debate-practice",
    title: "Debate Club",
    category: "Critical Thinking",
    description: "Practice argumentation and critical thinking by debating a topic with an AI opponent.",
    systemPrompt: "You are a debate coach who takes the opposing position on whatever topic the student chooses. Present well-reasoned counter-arguments while being respectful. After 4-5 exchanges, step out of character to evaluate the student's argument quality: logic, evidence, rebuttals, and persuasiveness. Suggest improvements for their debate skills.",
    starterMessage: "Welcome to Debate Club! I'll take the opposing side of whatever topic you'd like to debate. Pick any topic — school uniforms, space exploration funding, social media age limits — anything you're passionate about. What would you like to debate?",
    difficulty: "Advanced",
  },
  {
    id: "travel-directions",
    title: "Asking for Directions",
    category: "Language Practice",
    description: "Practice asking for and understanding directions in a new city.",
    systemPrompt: "You are a friendly local in a bustling city center. The learner is a tourist who needs directions. Use common directional vocabulary (turn left, go straight, it's on the corner, across from). Include landmarks as reference points. If they struggle, simplify your directions. Occasionally suggest nearby attractions they might enjoy.",
    starterMessage: "Hello there! You look a bit lost — can I help you find your way? Where are you trying to get to?",
    difficulty: "Beginner",
  },
  {
    id: "math-tutor-session",
    title: "Math Problem Solving",
    category: "Mathematics",
    description: "Work through math problems with a patient AI tutor who guides you step-by-step.",
    systemPrompt: "You are a patient math tutor. When the student presents a math problem or concept they're struggling with, break it down into small steps. Use Socratic questioning — ask 'what do you think the next step is?' before showing the answer. Celebrate small wins. If they make errors, guide them to discover the mistake themselves rather than just correcting it.",
    starterMessage: "Hi there! I'm your math tutor today. What math topic or problem would you like to work on? Algebra, geometry, fractions, or something else? Whatever it is, we'll figure it out together step by step!",
    difficulty: "Beginner",
  },
];

/** GET /api/ai/roleplay — list available scenarios */
export async function GET() {
  return NextResponse.json({
    scenarios: SCENARIOS.map(({ systemPrompt, ...rest }) => rest),
  });
}

/** POST /api/ai/roleplay — send a message in a role-play session */
export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { scenarioId, messages } = await req.json();

  const scenario = SCENARIOS.find((s) => s.id === scenarioId);
  if (!scenario) return NextResponse.json({ error: "Scenario not found" }, { status: 404 });

  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "messages required" }, { status: 400 });
  }

  // Rate limit: max 20 messages per session
  if (messages.length > 20) {
    return NextResponse.json({
      reply: "Great conversation! We've reached the end of this session. Start a new one to keep practicing!",
      sessionComplete: true,
    });
  }

  // Build the OpenAI-compatible message array
  const aiMessages = [
    { role: "system" as const, content: scenario.systemPrompt },
    ...messages.map((m: { role: string; content: string }) => ({
      role: m.role as "user" | "assistant",
      content: m.content,
    })),
  ];

  try {
    const { serverEnv } = await import("@/lib/config/env");
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${serverEnv.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: aiMessages,
        max_tokens: 300,
        temperature: 0.8,
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "I'm not sure how to respond to that. Could you rephrase?";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json({
      reply: "I'm having trouble thinking right now. Let's try again in a moment!",
    });
  }
}
