import { createSupabaseServerClient } from "@/lib/supabase/server";

export type AuthenticatedUserContext = {
  userId: string;
  email: string | null;
};

export function isMissingTestingTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();
  return (
    code === "42P01"
    || code === "PGRST205"
    || lowered.includes("testing_exams")
    || lowered.includes("testing_question_bank")
    || lowered.includes("testing_exam_attempts")
    || lowered.includes("user_exam_entitlements")
    || lowered.includes("classroom_entities")
    || lowered.includes("class_enrollments")
    || lowered.includes("class_assignments")
  );
}

export async function requireAuthenticatedUser(): Promise<AuthenticatedUserContext> {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    throw new Error("UNAUTHORIZED");
  }

  return {
    userId: user.id,
    email: user.email ?? null,
  };
}
