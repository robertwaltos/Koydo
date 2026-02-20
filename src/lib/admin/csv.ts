function escapeCell(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }
  const raw = typeof value === "string" ? value : JSON.stringify(value);
  const normalized = raw.replace(/"/g, '""');
  if (/[",\n]/.test(normalized)) {
    return `"${normalized}"`;
  }
  return normalized;
}

export function toCsv(rows: Array<Record<string, unknown>>, columns: string[]) {
  const header = columns.join(",");
  const body = rows
    .map((row) => columns.map((column) => escapeCell(row[column])).join(","))
    .join("\n");
  return `${header}\n${body}`;
}
