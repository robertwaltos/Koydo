const DISPLAY_NAME_MAX_LENGTH = 80;

export function sanitizeDisplayName(input: string) {
  const normalized = input.normalize("NFKC").trim();
  const withoutControlChars = normalized.replace(/[\u0000-\u001f\u007f]/g, "");
  const withoutTagChars = withoutControlChars.replace(/[<>`]/g, "");
  const collapsedWhitespace = withoutTagChars.replace(/\s+/g, " ").trim();
  return collapsedWhitespace.slice(0, DISPLAY_NAME_MAX_LENGTH);
}

