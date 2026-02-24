function escapePdfString(value: string) {
  const ascii = value.replace(/[^\x20-\x7E]/g, "?");
  return ascii
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function normalizeLine(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function wrapLine(value: string, maxChars: number) {
  const normalized = normalizeLine(value);
  if (!normalized) return [""];
  if (normalized.length <= maxChars) return [normalized];

  const words = normalized.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxChars) {
      current = candidate;
      continue;
    }
    if (current) {
      lines.push(current);
      current = "";
      if (word.length <= maxChars) {
        current = word;
        continue;
      }
      for (let index = 0; index < word.length; index += maxChars) {
        const chunk = word.slice(index, index + maxChars);
        if (chunk.length === maxChars || index + maxChars < word.length) {
          lines.push(chunk);
        } else {
          current = chunk;
        }
      }
      continue;
    }
    for (let index = 0; index < word.length; index += maxChars) {
      const chunk = word.slice(index, index + maxChars);
      if (chunk.length === maxChars || index + maxChars < word.length) {
        lines.push(chunk);
      } else {
        current = chunk;
      }
    }
  }
  if (current) {
    lines.push(current);
  }
  return lines;
}

function buildContentStream(lines: string[]) {
  const fontSize = 11;
  const lineHeight = 14;
  const pageHeight = 792;
  const marginLeft = 48;
  const startY = pageHeight - 56;
  const commands = [
    "BT",
    `/F1 ${fontSize} Tf`,
    `${marginLeft} ${startY} Td`,
  ];

  for (let index = 0; index < lines.length; index += 1) {
    const line = escapePdfString(lines[index] ?? "");
    if (index === 0) {
      commands.push(`(${line}) Tj`);
    } else {
      commands.push(`0 -${lineHeight} Td`);
      commands.push(`(${line}) Tj`);
    }
  }
  commands.push("ET");
  return commands.join("\n");
}

function toPdfBinary(objects: string[], infoObjectNumber?: number) {
  let pdf = "%PDF-1.4\n";
  const offsets = [0];

  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${objects[index]}\nendobj\n`;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let index = 1; index < offsets.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
  }
  const infoTrailer = typeof infoObjectNumber === "number" ? ` /Info ${infoObjectNumber} 0 R` : "";
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R${infoTrailer} >>\nstartxref\n${xrefStart}\n%%EOF`;
  return Buffer.from(pdf, "binary");
}

export function createSimpleTextPdf(params: {
  title: string;
  text: string;
}) {
  const pageWidthChars = 90;
  const linesPerPage = 48;

  const rawLines = params.text.split(/\r?\n/);
  const wrappedLines = rawLines.flatMap((line) => wrapLine(line, pageWidthChars));

  const pages: string[][] = [];
  for (let index = 0; index < wrappedLines.length; index += linesPerPage) {
    pages.push(wrappedLines.slice(index, index + linesPerPage));
  }
  if (pages.length === 0) {
    pages.push([""]);
  }

  const objects: string[] = [];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");

  const firstPageObject = 3;
  const kids: string[] = [];
  const pageEntries: Array<{ pageObject: number; contentObject: number }> = [];
  for (let index = 0; index < pages.length; index += 1) {
    const pageObject = firstPageObject + index * 2;
    const contentObject = pageObject + 1;
    kids.push(`${pageObject} 0 R`);
    pageEntries.push({ pageObject, contentObject });
  }

  const fontObject = firstPageObject + pages.length * 2;
  objects.push(`<< /Type /Pages /Kids [${kids.join(" ")}] /Count ${pages.length} >>`);

  for (let index = 0; index < pageEntries.length; index += 1) {
    const entry = pageEntries[index];
    const contentStream = buildContentStream(pages[index] ?? [""]);
    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontObject} 0 R >> >> /Contents ${entry.contentObject} 0 R >>`,
    );
    const contentLength = Buffer.byteLength(contentStream, "binary");
    objects.push(`<< /Length ${contentLength} >>\nstream\n${contentStream}\nendstream`);
  }

  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");

  // Metadata object
  const title = escapePdfString(params.title.slice(0, 120));
  objects.push(`<< /Title (${title}) /Producer (EduForge) >>`);

  const infoObjectNumber = objects.length;

  return toPdfBinary(objects, infoObjectNumber);
}
