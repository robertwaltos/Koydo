export function sanitizeNextPath(nextParam: string | null | undefined) {
  if (!nextParam) {
    return null;
  }

  const trimmed = nextParam.trim();
  if (!trimmed.startsWith("/") || trimmed.startsWith("//")) {
    return null;
  }

  return trimmed;
}

export function normalizeNextPath(nextParam: string | null | undefined, fallback = "/who-is-learning") {
  return sanitizeNextPath(nextParam) ?? fallback;
}
