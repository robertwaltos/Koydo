export type ParsedStatementLine = {
  lineDate: string;
  description: string;
  amountCents: number;
  direction: "credit" | "debit";
  externalLineId: string | null;
  runningBalanceCents: number | null;
  metadata: Record<string, unknown>;
};

type ParseHints = {
  defaultYear?: number;
  statementDate?: string | null;
};

const SKIP_LINE_PATTERNS = [
  /^date\b/i,
  /^description\b/i,
  /^amount\b/i,
  /^balance\b/i,
  /^page\s+\d+/i,
  /^beginning balance/i,
  /^ending balance/i,
];

const CREDIT_HINT = /\b(deposit|credit|interest|refund|payment received|transfer in|direct dep)\b/i;
const DEBIT_HINT = /\b(withdraw|debit|purchase|payment|fee|atm|check|transfer out|wire out)\b/i;

function pad2(value: number) {
  return String(value).padStart(2, "0");
}

function clampDay(year: number, month: number, day: number) {
  const maxDay = new Date(Date.UTC(year, month, 0)).getUTCDate();
  if (day < 1) return 1;
  return Math.min(day, maxDay);
}

function parseDateToken(token: string, defaultYear: number): string | null {
  const slash = token.match(/^(\d{1,2})[/-](\d{1,2})(?:[/-](\d{2,4}))?$/);
  if (slash) {
    const month = Number(slash[1]);
    const day = Number(slash[2]);
    const rawYear = slash[3] ? Number(slash[3]) : defaultYear;
    const year = rawYear < 100 ? 2000 + rawYear : rawYear;
    if (month < 1 || month > 12) return null;
    const safeDay = clampDay(year, month, day);
    return `${year}-${pad2(month)}-${pad2(safeDay)}`;
  }

  const named = token.match(/^([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})$/);
  if (named) {
    const monthIndex = new Date(`${named[1]} 01, 2000`).getMonth();
    if (!Number.isFinite(monthIndex) || monthIndex < 0 || monthIndex > 11) return null;
    const year = Number(named[3]);
    const day = clampDay(year, monthIndex + 1, Number(named[2]));
    return `${year}-${pad2(monthIndex + 1)}-${pad2(day)}`;
  }

  return null;
}

function parseAmountCents(token: string): { amountCents: number; isNegative: boolean } | null {
  const trimmed = token.trim();
  if (!trimmed) return null;
  const isNegative = trimmed.startsWith("-") || (trimmed.startsWith("(") && trimmed.endsWith(")"));
  const normalized = trimmed.replace(/[$,()\s]/g, "").replace(/^\+/, "").replace(/^-/, "");
  const parsed = Number(normalized);
  if (!Number.isFinite(parsed)) return null;
  return {
    amountCents: Math.round(Math.abs(parsed) * 100),
    isNegative,
  };
}

function detectDirection(description: string, isNegativeAmount: boolean): "credit" | "debit" {
  if (isNegativeAmount) return "debit";
  if (DEBIT_HINT.test(description)) return "debit";
  if (CREDIT_HINT.test(description)) return "credit";
  return "credit";
}

function cleanupDescription(input: string) {
  return input.replace(/\s+/g, " ").trim();
}

function extractPdfTextLikeContent(inputBase64: string): string {
  const buffer = Buffer.from(inputBase64, "base64");
  const binary = buffer.toString("latin1");
  const textObjectMatches = Array.from(binary.matchAll(/\(([^()]*)\)\s*Tj/g));
  if (textObjectMatches.length > 0) {
    return textObjectMatches
      .map((match) => match[1].replace(/\\\(/g, "(").replace(/\\\)/g, ")").replace(/\\n/g, " "))
      .join("\n");
  }
  return buffer.toString("utf8");
}

function shouldSkipLine(line: string) {
  if (!line) return true;
  return SKIP_LINE_PATTERNS.some((pattern) => pattern.test(line));
}

export function parseStatementTextToLines(rawText: string, hints: ParseHints = {}): ParsedStatementLine[] {
  const statementDateYear = hints.statementDate ? Number(hints.statementDate.slice(0, 4)) : null;
  const defaultYear =
    hints.defaultYear ??
    (Number.isFinite(statementDateYear) && statementDateYear ? statementDateYear : new Date().getUTCFullYear());

  const amountPattern = /[-(]?\$?\d[\d,]*\.\d{2}\)?/g;
  const datePattern = /^([A-Za-z]{3,9}\s+\d{1,2},?\s+\d{4}|\d{1,2}[/-]\d{1,2}(?:[/-]\d{2,4})?)/;

  const lines = rawText
    .split(/\r?\n/)
    .map((line) => cleanupDescription(line))
    .filter((line) => !shouldSkipLine(line));

  const parsed: ParsedStatementLine[] = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const dateMatch = line.match(datePattern);
    const amountMatches = Array.from(line.matchAll(amountPattern));
    if (!dateMatch || amountMatches.length === 0) {
      continue;
    }

    const amountToken = amountMatches[amountMatches.length - 1][0] ?? "";
    const parsedAmount = parseAmountCents(amountToken);
    if (!parsedAmount || parsedAmount.amountCents <= 0) {
      continue;
    }

    const lineDate = parseDateToken(dateMatch[1], defaultYear);
    if (!lineDate) continue;

    const descriptionStart = dateMatch[0].length;
    const amountIndex = line.lastIndexOf(amountToken);
    if (amountIndex <= descriptionStart) continue;

    const description = cleanupDescription(line.slice(descriptionStart, amountIndex));
    if (!description) continue;

    const direction = detectDirection(description, parsedAmount.isNegative);
    parsed.push({
      lineDate,
      description,
      amountCents: parsedAmount.amountCents,
      direction,
      externalLineId: null,
      runningBalanceCents: null,
      metadata: {
        parser: "text_ocr_pdf_v1",
        sourceIndex: index,
      },
    });
  }

  return parsed;
}

export function parseCsvStatementLines(rawCsv: string): ParsedStatementLine[] {
  const rows = rawCsv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  if (rows.length === 0) return [];

  const hasHeader = rows[0].toLowerCase().includes("date") && rows[0].toLowerCase().includes("description");
  const bodyRows = hasHeader ? rows.slice(1) : rows;

  const parsed: ParsedStatementLine[] = [];
  for (let index = 0; index < bodyRows.length; index += 1) {
    const row = bodyRows[index];
    const cells = row.split(",").map((value) => value.trim().replace(/^"(.*)"$/, "$1"));
    if (cells.length < 3) continue;
    const lineDate = parseDateToken(cells[0], new Date().getUTCFullYear());
    if (!lineDate) continue;
    const description = cleanupDescription(cells[1] ?? "");
    if (!description) continue;

    const amountToken = cells[2] ?? "";
    const amount = parseAmountCents(amountToken);
    if (!amount || amount.amountCents <= 0) continue;
    const explicitDirection = (cells[3] ?? "").toLowerCase();
    const direction =
      explicitDirection === "credit" || explicitDirection === "debit"
        ? explicitDirection
        : detectDirection(description, amount.isNegative);

    parsed.push({
      lineDate,
      description,
      amountCents: amount.amountCents,
      direction,
      externalLineId: cells[4] ? cells[4] : null,
      runningBalanceCents: null,
      metadata: {
        parser: "csv_statement_v1",
        sourceIndex: index,
      },
    });
  }

  return parsed;
}

export function parseStatementInput(input: {
  rawText?: string | null;
  ocrText?: string | null;
  rawCsv?: string | null;
  pdfBase64?: string | null;
  hints?: ParseHints;
}) {
  if (input.rawCsv?.trim()) {
    return parseCsvStatementLines(input.rawCsv);
  }
  const textPayload =
    input.rawText?.trim() ||
    input.ocrText?.trim() ||
    (input.pdfBase64 ? extractPdfTextLikeContent(input.pdfBase64) : "");
  if (!textPayload.trim()) {
    return [] as ParsedStatementLine[];
  }
  return parseStatementTextToLines(textPayload, input.hints);
}
