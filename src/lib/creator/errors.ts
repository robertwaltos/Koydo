export function isMissingCreatorTableError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const code = "code" in error ? String((error as { code?: unknown }).code ?? "") : "";
  const message = "message" in error ? String((error as { message?: unknown }).message ?? "") : "";
  const lowered = message.toLowerCase();

  if (code === "42P01" || code === "PGRST205") return true;

  return (
    lowered.includes("creator_submissions")
    || lowered.includes("creator_submission_reviews")
  );
}