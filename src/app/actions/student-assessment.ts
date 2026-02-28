"use server";

import { z } from "zod";
import { serverEnv } from "@/lib/config/env";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { toSafeErrorRecord } from "@/lib/logging/safe-error";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

const AssessmentQuestionSchema = z.object({
  q: z.string(),
  options: z.array(z.string()),
  answer: z.string(),
});

type AssessmentQuestion = z.infer<typeof AssessmentQuestionSchema>;

/* -------------------------------------------------------------------------- */
/*                                    Mock Data                                */
/* -------------------------------------------------------------------------- */

const MOCK_QUESTIONS_K_1: AssessmentQuestion[] = [
  { q: "Tap the shape with 3 sides.", options: ["⬜ Square", "🔺 Triangle", "⚪ Circle"], answer: "🔺 Triangle" },
  { q: "What comes next: 1, 2, 3, _?", options: ["4️⃣", "5️⃣", "0️⃣"], answer: "4️⃣" },
  { q: "Pick the red fruit.", options: ["🍌 Banana", "🍎 Apple", "🫐 Blueberry"], answer: "🍎 Apple" },
  { q: "Is fire hot or cold?", options: ["🔥 Hot", "🧊 Cold"], answer: "🔥 Hot" },
  { q: "Count the fingers on one hand.", options: ["3", "5", "10"], answer: "5" },
  { q: "Which one can fly?", options: ["🐟 Fish", "🐦 Bird", "🐢 Turtle"], answer: "🐦 Bird" },
  { q: "Which is a circle?", options: ["⚪", "🔺", "⬛"], answer: "⚪" },
  { q: "Which one is bigger?", options: ["🐘 Elephant", "🐭 Mouse"], answer: "🐘 Elephant" },
  { q: "Which letter starts 'Sun'?", options: ["S", "M", "L"], answer: "S" },
  { q: "How many legs does a dog have?", options: ["2", "4", "8"], answer: "4" },
];

const MOCK_QUESTIONS_2_3: AssessmentQuestion[] = [
  { q: "Solve: 15 + 7", options: ["21", "22", "23"], answer: "22" },
  { q: "Which word starts with 'S'?", options: ["Cat", "Sun", "Dog"], answer: "Sun" },
  { q: "How many legs does a spider have?", options: ["6", "8", "10"], answer: "8" },
  { q: "What is the opposite of 'High'?", options: ["Tall", "Low", "Big"], answer: "Low" },
  { q: "Complete the pattern: Red, Blue, Red, _?", options: ["Green", "Blue", "Yellow"], answer: "Blue" },
  { q: "Solve: 9 + 8", options: ["16", "17", "18"], answer: "17" },
  { q: "Which is a noun?", options: ["Run", "Happy", "Teacher"], answer: "Teacher" },
  { q: "How many days are in one week?", options: ["5", "7", "10"], answer: "7" },
  { q: "Which planet do we live on?", options: ["Mars", "Earth", "Jupiter"], answer: "Earth" },
  { q: "Which number is even?", options: ["7", "9", "12"], answer: "12" },
];

const MOCK_QUESTIONS_4_5: AssessmentQuestion[] = [
  { q: "Solve: 8 x 7", options: ["54", "56", "58"], answer: "56" },
  { q: "Identify the noun: The fast car.", options: ["Fast", "Car", "The"], answer: "Car" },
  { q: "How many minutes in an hour?", options: ["100", "60", "30"], answer: "60" },
  { q: "Select the prime number.", options: ["4", "7", "9"], answer: "7" },
  { q: "Capital of the USA?", options: ["New York", "Washington D.C.", "Los Angeles"], answer: "Washington D.C." },
  { q: "Solve: 45 ÷ 5", options: ["7", "8", "9"], answer: "9" },
  { q: "Which sentence uses proper punctuation?", options: ["where are you", "Where are you?", "where are you?"], answer: "Where are you?" },
  { q: "Water changes to gas at which process?", options: ["Freezing", "Evaporation", "Condensation"], answer: "Evaporation" },
  { q: "Which fraction is larger?", options: ["1/4", "1/2", "1/8"], answer: "1/2" },
  { q: "Which branch of government makes laws?", options: ["Legislative", "Executive", "Judicial"], answer: "Legislative" },
];

const MOCK_QUESTIONS_DEFAULT: AssessmentQuestion[] = [
  { q: "Solve: 12 x 12", options: ["120", "144", "124"], answer: "144" },
  { q: "Capital of France?", options: ["London", "Berlin", "Paris"], answer: "Paris" },
  { q: "Water boils at...", options: ["90°C", "100°C", "120°C"], answer: "100°C" },
  { q: "Opposite of 'Ancient'?", options: ["Old", "Modern", "Antique"], answer: "Modern" },
  { q: "How many hours in a day?", options: ["12", "24", "48"], answer: "24" },
  { q: "Solve: (18 + 6) ÷ 3", options: ["6", "7", "8"], answer: "8" },
  { q: "Which sentence is in passive voice?", options: ["The team won the game.", "The game was won by the team.", "The team wins games."], answer: "The game was won by the team." },
  { q: "What is Newton's second law about?", options: ["Gravity only", "Force, mass, and acceleration", "Light refraction"], answer: "Force, mass, and acceleration" },
  { q: "Which document begins with 'We the People'?", options: ["Magna Carta", "U.S. Constitution", "Bill of Rights"], answer: "U.S. Constitution" },
  { q: "Which is a renewable energy source?", options: ["Coal", "Solar", "Diesel"], answer: "Solar" },
];

function ensureQuestionCount(questions: AssessmentQuestion[], targetCount = 10): AssessmentQuestion[] {
  if (questions.length >= targetCount) {
    return questions.slice(0, targetCount);
  }

  if (questions.length === 0) return [];

  const expanded = [...questions];
  let cursor = 0;
  while (expanded.length < targetCount) {
    expanded.push(questions[cursor % questions.length] ?? questions[0]!);
    cursor += 1;
  }
  return expanded;
}

function getMockQuestionsByGrade(grade: string): AssessmentQuestion[] {
  if (["K", "1", "PK"].includes(grade)) return MOCK_QUESTIONS_K_1;
  if (["2", "3"].includes(grade)) return MOCK_QUESTIONS_2_3;
  if (["4", "5"].includes(grade)) return MOCK_QUESTIONS_4_5;
  return MOCK_QUESTIONS_DEFAULT;
}

/* -------------------------------------------------------------------------- */
/*                                 AI Action                                  */
/* -------------------------------------------------------------------------- */

export async function generateDiagnosticAssessment(
  grade: string,
  age?: number
): Promise<{ questions: AssessmentQuestion[]; source: "ai" | "mock" }> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  // If no API key, return mock immediately
  if (!serverEnv.OPENAI_API_KEY) {
    return {
      questions: ensureQuestionCount(getMockQuestionsByGrade(grade), 10),
      source: "mock",
    };
  }

  try {
    const systemPrompt = `You are an expert pediatric educational diagnostician.
    Generate 10 distinct multiple-choice questions to assess a student's core competency level.
    Target Audience: Grade ${grade}${age ? `, Age ${age}` : ""}.
    Focus areas: Math, Logic, Reading Comprehension, Vocabulary, General Knowledge.
    ${age && age <= 6 ? "For young learners, include emoji-supported option labels (example: '🍎 Apple') to support image-first answering." : ""}
    
    Output strictly valid JSON with this structure:
    {
      "questions": [
        { "q": "question text", "options": ["opt1", "opt2", "opt3"], "answer": "correct_option_text" }
      ]
    }
    The "answer" must be exactly one of the strings in "options".
    Make questions age-appropriate but challenging enough to detect advanced learners.
    `;

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
          { role: "user", content: "Generate diagnostic assessment." },
        ],
        temperature: 0.7,
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) {
      console.error("OpenAI diagnostic request failed.", { status: response.status });
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;
    
    if (!content) throw new Error("No content from AI");

    const parsed = JSON.parse(content);
    
    // Validate schema
    const result = z.object({ questions: z.array(AssessmentQuestionSchema) }).safeParse(parsed);
    
    if (!result.success) {
      console.error("Diagnostic validation failed.", toSafeErrorRecord(result.error));
      return { questions: ensureQuestionCount(getMockQuestionsByGrade(grade), 10), source: "mock" };
    }

    return { questions: ensureQuestionCount(result.data.questions, 10), source: "ai" };

  } catch (error) {
    console.error("Diagnostic generation failed.", toSafeErrorRecord(error));
    return { questions: ensureQuestionCount(getMockQuestionsByGrade(grade), 10), source: "mock" };
  }
}

/* -------------------------------------------------------------------------- */
/*                                Persistence                                 */
/* -------------------------------------------------------------------------- */


const DiagnosticResultsSchema = z.array(
  z.object({
    question: z.string(),
    selected: z.string(),
    correct: z.string(),
  })
);

export async function saveDiagnosticResults(
  profileId: string,
  answers: z.infer<typeof DiagnosticResultsSchema>
) {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    redirect("/auth/sign-in");
  }

  try {
    // Validate input
    const result = DiagnosticResultsSchema.safeParse(answers);
    if (!result.success) {
      return { success: false, error: "Invalid assessment data. Please review your answers and try again." };
    }

    const validAnswers = result.data;

    // Calculate generic score
    const total = validAnswers.length;
    const correctCount = validAnswers.filter((a) => a.selected === a.correct).length;
    const score = total > 0 ? correctCount / total : 0;

    // Prepare the skill map update
    const skillMap = {
      overall_score: score,
      last_assessment_date: new Date().toISOString(),
      total_questions: total,
      correct_answers: correctCount,
    };

    // Update profile
    const { error } = await supabase
      .from("student_profiles")
      .update({
        initial_assessment_data: answers,
        ai_skill_level_map: skillMap,
      })
      .eq("id", profileId)
      .eq("account_id", user.id); // Security: Ensure ownership

    if (error) {
      console.error("Failed to save diagnostic results.", toSafeErrorRecord(error));
      return { success: false, error: "We couldn't save your results right now. Please try again." };
    }

    return { success: true, score };
  } catch (error) {
    console.error("saveDiagnosticResults error.", toSafeErrorRecord(error));
    return { success: false, error: "Something went wrong while saving your assessment. Please try again." };
  }
}


