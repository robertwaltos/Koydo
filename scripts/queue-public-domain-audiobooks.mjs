import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const projectRoot = process.cwd();
const envPath = path.resolve(projectRoot, ".env");
const defaultCatalogPath = path.resolve(
  projectRoot,
  "src/lib/audiobooks/public-domain-catalog.json",
);
const modulesCatalogRoot = path.resolve(projectRoot, "src/lib/modules/catalog");

const VOICE_REFERENCE_WAV = {
  male_adult: "male_adult.mp3",
  male_young: "male_young.mp3",
  female_adult: "female_adult.mp3",
  female_young: "female_young.mp3",
};

function parseArgs(argv) {
  const options = {
    apply: false,
    catalogPath: defaultCatalogPath,
    voiceId: "female_adult",
    createdBy: "",
    maxBooks: 0,
    maxChaptersPerBook: 18,
    maxCharsPerChapter: 1800,
    onlyModuleId: "",
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--apply") options.apply = true;
    else if (arg === "--catalog" && argv[index + 1]) options.catalogPath = path.resolve(projectRoot, String(argv[index + 1]));
    else if (arg === "--voice" && argv[index + 1]) options.voiceId = String(argv[index + 1]);
    else if (arg === "--created-by" && argv[index + 1]) options.createdBy = String(argv[index + 1]);
    else if (arg === "--max-books" && argv[index + 1]) options.maxBooks = Number(argv[index + 1]) || 0;
    else if (arg === "--max-chapters" && argv[index + 1]) options.maxChaptersPerBook = Number(argv[index + 1]) || 18;
    else if (arg === "--max-chars" && argv[index + 1]) options.maxCharsPerChapter = Number(argv[index + 1]) || 1800;
    else if (arg === "--module" && argv[index + 1]) options.onlyModuleId = String(argv[index + 1]);
  }

  return options;
}

function parseEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return {};

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  const values = {};
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const separator = trimmed.indexOf("=");
    if (separator <= 0) continue;
    const key = trimmed.slice(0, separator).trim();
    let value = trimmed.slice(separator + 1).trim();
    if (
      value.length >= 2
      && ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    values[key] = value;
  }
  return values;
}

function readEnvValue(fileValues, key, fallbackKey = "") {
  if (process.env[key]) return process.env[key];
  if (fallbackKey && process.env[fallbackKey]) return process.env[fallbackKey];
  if (fileValues[key]) return fileValues[key];
  if (fallbackKey && fileValues[fallbackKey]) return fileValues[fallbackKey];
  return "";
}

function loadCatalog(filePath) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Catalog file not found: ${filePath}`);
  }
  const raw = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const entries = Array.isArray(raw.entries) ? raw.entries : [];
  return entries
    .filter((entry) => entry && typeof entry === "object")
    .map((entry) => ({
      moduleId: String(entry.moduleId ?? "").trim(),
      title: String(entry.title ?? "").trim(),
      rightsStatus: String(entry.rightsStatus ?? "").trim(),
      enabled: entry.enabled !== false,
      rightsEvidenceUrl:
        typeof entry.rightsEvidenceUrl === "string" && entry.rightsEvidenceUrl.trim().length > 0
          ? entry.rightsEvidenceUrl.trim()
          : "",
      reviewer:
        typeof entry.reviewer === "string" && entry.reviewer.trim().length > 0
          ? entry.reviewer.trim()
          : "",
      reviewedAt:
        typeof entry.reviewedAt === "string" && entry.reviewedAt.trim().length > 0
          ? entry.reviewedAt.trim()
          : "",
      notes:
        typeof entry.notes === "string" && entry.notes.trim().length > 0
          ? entry.notes.trim()
          : "",
    }))
    .filter((entry) => entry.moduleId.length > 0 && entry.title.length > 0)
    .filter((entry) => entry.enabled && entry.rightsStatus === "public_domain_verified");
}

function resolveModuleFile(moduleId) {
  const direct = path.join(modulesCatalogRoot, "epub-generated", `${moduleId}.ts`);
  if (fs.existsSync(direct)) return direct;

  const stack = [modulesCatalogRoot];
  while (stack.length > 0) {
    const dir = stack.pop();
    if (!dir) continue;
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        stack.push(full);
        continue;
      }
      if (entry.isFile() && entry.name === `${moduleId}.ts`) {
        return full;
      }
    }
  }

  return "";
}

function parseStringLiteralAt(content, quoteStart) {
  if (content[quoteStart] !== '"') {
    return { value: "", end: quoteStart };
  }

  let index = quoteStart + 1;
  let value = "";

  while (index < content.length) {
    const char = content[index];
    if (char === "\\") {
      const next = content[index + 1];
      if (next === "n") value += "\n";
      else if (next === "r") value += "\r";
      else if (next === "t") value += "\t";
      else if (next === '"' || next === "\\" || next === "/") value += next;
      else if (next === "u" && /^[0-9a-fA-F]{4}$/.test(content.slice(index + 2, index + 6))) {
        value += String.fromCharCode(Number.parseInt(content.slice(index + 2, index + 6), 16));
        index += 4;
      } else {
        value += next ?? "";
      }
      index += 2;
      continue;
    }
    if (char === '"') {
      return { value, end: index };
    }
    value += char;
    index += 1;
  }

  return { value, end: index };
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function splitChapterText(text, maxChars) {
  const normalized = normalizeText(text);
  if (!normalized) return [];
  if (normalized.length <= maxChars) return [normalized];

  const chunks = [];
  let cursor = 0;
  while (cursor < normalized.length) {
    const remaining = normalized.length - cursor;
    if (remaining <= maxChars) {
      chunks.push(normalized.slice(cursor).trim());
      break;
    }

    const rangeEnd = cursor + maxChars;
    const probe = normalized.slice(cursor, rangeEnd);
    const sentenceBreak = Math.max(
      probe.lastIndexOf(". "),
      probe.lastIndexOf("? "),
      probe.lastIndexOf("! "),
      probe.lastIndexOf("; "),
    );
    const whitespaceBreak = probe.lastIndexOf(" ");
    const pivot = sentenceBreak >= Math.floor(maxChars * 0.55)
      ? sentenceBreak + 1
      : whitespaceBreak >= Math.floor(maxChars * 0.55)
        ? whitespaceBreak
        : maxChars;

    const part = normalizeText(normalized.slice(cursor, cursor + pivot));
    if (part) chunks.push(part);
    cursor += Math.max(1, pivot);
  }

  return chunks;
}

function extractBookTitle(moduleSource, fallbackTitle) {
  const match = moduleSource.match(/\btitle:\s*"([^"]+)"/);
  return match ? normalizeText(match[1]) : fallbackTitle;
}

function extractContentSegments(moduleSource) {
  const segments = [];
  const token = "content:";
  let cursor = 0;

  while (cursor < moduleSource.length) {
    const tokenIndex = moduleSource.indexOf(token, cursor);
    if (tokenIndex < 0) break;
    let valueStart = tokenIndex + token.length;
    while (valueStart < moduleSource.length && /\s/.test(moduleSource[valueStart])) {
      valueStart += 1;
    }
    if (moduleSource[valueStart] !== '"') {
      cursor = valueStart + 1;
      continue;
    }

    const parsed = parseStringLiteralAt(moduleSource, valueStart);
    const normalized = normalizeText(parsed.value);
    if (normalized.length >= 120) {
      segments.push(normalized);
    }
    cursor = parsed.end + 1;
  }

  return segments;
}

function buildLessonId(moduleId, chapterIndex) {
  return `audiobook:${moduleId}:c${String(chapterIndex).padStart(3, "0")}`;
}

async function resolveCreatedByUserId(supabase, explicitUserId) {
  if (explicitUserId) return explicitUserId;

  const { data, error } = await supabase
    .from("user_profiles")
    .select("user_id")
    .eq("is_admin", true)
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(`Unable to resolve admin user: ${error.message}`);
  }
  if (!data?.user_id) {
    throw new Error(
      'No admin user found. Pass "--created-by <admin-user-uuid>" or create an admin profile first.',
    );
  }
  return data.user_id;
}

async function fetchExistingAudiobookKeys(supabase, moduleIds, voiceId) {
  const keys = new Set();
  for (const moduleId of moduleIds) {
    let cursor = "00000000-0000-0000-0000-000000000000";
    while (true) {
      const { data, error } = await supabase
        .from("media_generation_jobs")
        .select("id, module_id, lesson_id, status, metadata")
        .eq("module_id", moduleId)
        .eq("asset_type", "animation")
        .in("status", ["queued", "running", "completed"])
        .gt("id", cursor)
        .order("id", { ascending: true })
        .limit(1000);

      if (error) {
        throw new Error(`Failed querying existing audio jobs: ${error.message}`);
      }

      for (const row of data ?? []) {
        if (!row.lesson_id) continue;
        const metadata = row.metadata && typeof row.metadata === "object" ? row.metadata : {};
        const rowVoice = String(metadata.voice_id ?? "").trim();
        if (metadata.audiobook === true && metadata.is_audio === true && rowVoice === voiceId) {
          keys.add(`${moduleId}::${row.lesson_id}::${voiceId}`);
        }
      }

      if (!data || data.length < 1000) break;
      cursor = data[data.length - 1].id;
    }
  }
  return keys;
}

async function insertRows(supabase, rows) {
  const batchSize = 100;
  for (let index = 0; index < rows.length; index += batchSize) {
    const batch = rows.slice(index, index + batchSize);
    const { error } = await supabase.from("media_generation_jobs").insert(batch);
    if (error) {
      throw new Error(`Insert failed: ${error.message}`);
    }
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const supportedVoices = new Set(Object.keys(VOICE_REFERENCE_WAV));
  if (!supportedVoices.has(options.voiceId)) {
    throw new Error(`Unsupported voice "${options.voiceId}". Use one of: ${Array.from(supportedVoices).join(", ")}`);
  }

  const envValues = parseEnvFile(envPath);
  const supabaseUrl = readEnvValue(envValues, "NEXT_PUBLIC_SUPABASE_URL", "EXPO_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = readEnvValue(envValues, "SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL/EXPO_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
  }

  let catalogEntries = loadCatalog(options.catalogPath);
  if (options.onlyModuleId) {
    catalogEntries = catalogEntries.filter((entry) => entry.moduleId === options.onlyModuleId);
  }
  if (options.maxBooks > 0) {
    catalogEntries = catalogEntries.slice(0, options.maxBooks);
  }

  if (catalogEntries.length === 0) {
    console.log("No verified public-domain entries found.");
    console.log(`Catalog: ${path.relative(projectRoot, options.catalogPath)}`);
    console.log("Add entries with rightsStatus=\"public_domain_verified\" and rerun.");
    return;
  }

  const books = [];
  const unresolved = [];

  for (const entry of catalogEntries) {
    const moduleFile = resolveModuleFile(entry.moduleId);
    if (!moduleFile) {
      unresolved.push({ moduleId: entry.moduleId, reason: "module file not found" });
      continue;
    }

    const source = fs.readFileSync(moduleFile, "utf8");
    const bookTitle = extractBookTitle(source, entry.title);
    const segments = extractContentSegments(source);

    const chapters = [];
    for (const segment of segments) {
      const split = splitChapterText(segment, Math.max(300, options.maxCharsPerChapter));
      for (const part of split) {
        chapters.push(part);
        if (options.maxChaptersPerBook > 0 && chapters.length >= options.maxChaptersPerBook) {
          break;
        }
      }
      if (options.maxChaptersPerBook > 0 && chapters.length >= options.maxChaptersPerBook) {
        break;
      }
    }

    if (chapters.length === 0) {
      unresolved.push({ moduleId: entry.moduleId, reason: "no chapter content extracted" });
      continue;
    }

    books.push({
      moduleId: entry.moduleId,
      title: bookTitle,
      rightsEvidenceUrl: entry.rightsEvidenceUrl,
      reviewer: entry.reviewer,
      reviewedAt: entry.reviewedAt,
      notes: entry.notes,
      moduleFile,
      chapters,
    });
  }

  if (books.length === 0) {
    console.log("No queueable books found after content extraction.");
    for (const item of unresolved) {
      console.log(`- ${item.moduleId}: ${item.reason}`);
    }
    return;
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });

  const existingKeys = await fetchExistingAudiobookKeys(
    supabase,
    books.map((book) => book.moduleId),
    options.voiceId,
  );

  const nowIso = new Date().toISOString();
  const previewRows = [];
  for (const book of books) {
    for (let idx = 0; idx < book.chapters.length; idx += 1) {
      const chapterIndex = idx + 1;
      const lessonId = buildLessonId(book.moduleId, chapterIndex);
      const key = `${book.moduleId}::${lessonId}::${options.voiceId}`;
      if (existingKeys.has(key)) continue;
      previewRows.push({
        moduleId: book.moduleId,
        lessonId,
        title: book.title,
        chapterIndex,
        prompt: book.chapters[idx],
        metadata: {
          source: "PUBLIC_DOMAIN_AUDIOBOOK_QUEUE",
          queued_at: nowIso,
          is_audio: true,
          audiobook: true,
          voice_id: options.voiceId,
          reference_wav: VOICE_REFERENCE_WAV[options.voiceId],
          book_module_id: book.moduleId,
          book_title: book.title,
          chapter_index: chapterIndex,
          chapter_title: `Chapter ${chapterIndex}`,
          rights_status: "public_domain_verified",
          rights_evidence_url: book.rightsEvidenceUrl || null,
          rights_reviewer: book.reviewer || null,
          rights_reviewed_at: book.reviewedAt || null,
          rights_notes: book.notes || null,
        },
      });
    }
  }

  console.log(`Catalog entries (verified): ${catalogEntries.length}`);
  console.log(`Books resolved: ${books.length}`);
  console.log(`Books unresolved: ${unresolved.length}`);
  console.log(`Voice: ${options.voiceId}`);
  console.log(`New audiobook chapter jobs: ${previewRows.length}`);
  console.log(`Mode: ${options.apply ? "apply" : "dry-run"}`);

  if (unresolved.length > 0) {
    console.log("");
    console.log("Unresolved books:");
    for (const item of unresolved.slice(0, 20)) {
      console.log(`- ${item.moduleId}: ${item.reason}`);
    }
  }

  if (!options.apply) {
    console.log("");
    console.log("Dry-run preview (first 10 jobs):");
    for (const row of previewRows.slice(0, 10)) {
      console.log(`- ${row.moduleId} | ${row.lessonId} | ${row.title} | chapter ${row.chapterIndex}`);
    }
    console.log("");
    console.log('Use "--apply" to insert queued audiobook jobs.');
    return;
  }

  if (previewRows.length === 0) {
    console.log("No new rows to insert.");
    return;
  }

  const createdBy = await resolveCreatedByUserId(supabase, options.createdBy);
  const rows = previewRows.map((row) => ({
    created_by: createdBy,
    module_id: row.moduleId,
    lesson_id: row.lessonId,
    asset_type: "animation",
    provider: "xtts",
    prompt: row.prompt,
    status: "queued",
    metadata: row.metadata,
  }));

  await insertRows(supabase, rows);
  console.log(`Inserted ${rows.length} media_generation_jobs row(s).`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
