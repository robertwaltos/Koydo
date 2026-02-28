type SafeErrorRecord = Record<string, string | number | null>;

function sanitizeMessage(message: string) {
  const trimmed = message.trim();
  if (!trimmed) return null;
  if (/(secret|token|password|authorization|api[_-]?key)/i.test(trimmed)) {
    return "[redacted-sensitive-message]";
  }
  return trimmed.slice(0, 240);
}

export function toSafeErrorRecord(error: unknown): SafeErrorRecord {
  if (error instanceof Error) {
    const safe: SafeErrorRecord = {
      name: error.name || null,
      message: sanitizeMessage(error.message),
    };
    const maybeError = error as Error & {
      code?: unknown;
      type?: unknown;
      statusCode?: unknown;
      status?: unknown;
      decline_code?: unknown;
    };
    if (typeof maybeError.code === "string" || typeof maybeError.code === "number") {
      safe.code = String(maybeError.code);
    }
    if (typeof maybeError.type === "string") {
      safe.type = maybeError.type;
    }
    if (typeof maybeError.statusCode === "number") {
      safe.statusCode = maybeError.statusCode;
    } else if (typeof maybeError.status === "number") {
      safe.statusCode = maybeError.status;
    }
    if (typeof maybeError.decline_code === "string") {
      safe.declineCode = maybeError.decline_code;
    }
    return safe;
  }

  if (error && typeof error === "object") {
    const source = error as Record<string, unknown>;
    const safe: SafeErrorRecord = {};
    const addStringField = (from: string, to: string) => {
      if (typeof source[from] === "string") {
        const safeValue = sanitizeMessage(source[from] as string);
        if (safeValue) safe[to] = safeValue;
      }
    };
    addStringField("name", "name");
    addStringField("message", "message");
    addStringField("code", "code");
    addStringField("type", "type");
    addStringField("decline_code", "declineCode");
    if (typeof source.statusCode === "number") {
      safe.statusCode = source.statusCode;
    } else if (typeof source.status === "number") {
      safe.statusCode = source.status;
    }
    if (Object.keys(safe).length > 0) {
      return safe;
    }
  }

  return {
    message: sanitizeMessage(String(error ?? "unknown-error")),
  };
}
