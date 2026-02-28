/**
 * cleanup-duplicate-media-jobs.mjs
 * 
 * Fixes the runaway queue-immersive-media.mjs duplication bug.
 * For each asset_type in ['video', 'image'], keeps only the OLDEST
 * job per lesson_id and deletes all newer duplicates.
 * 
 * Usage: node scripts/cleanup-duplicate-media-jobs.mjs [--dry-run]
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve('.env');
const env = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8').split(/\r?\n/)
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => [l.split('=')[0].trim(), l.split('=').slice(1).join('=').trim()])
);

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);
const DRY_RUN = process.argv.includes('--dry-run');
const LESSON_PAGE = 1000; // distinct lesson_ids per fetch page
const CONCURRENCY = 5;    // parallel lesson cleanups

async function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// Fetch all distinct lesson_ids using cursor-based pagination (no offset timeouts)
async function fetchDistinctLessonIds(assetType) {
  const ids = new Set();
  let lastId = null;
  let page = 0;

  while (true) {
    let query = supabase
      .from('media_generation_jobs')
      .select('id, lesson_id')
      .eq('asset_type', assetType)
      .order('id', { ascending: true })
      .limit(LESSON_PAGE);

    if (lastId) query = query.gt('id', lastId);

    const { data, error } = await query;
    if (error) { console.error('\n  Fetch error:', error.message); break; }
    if (!data || data.length === 0) break;

    data.forEach(r => ids.add(r.lesson_id));
    lastId = data[data.length - 1].id;
    page++;

    process.stdout.write(`\r  Scanned ${(page * LESSON_PAGE).toLocaleString()}+ rows, ${ids.size.toLocaleString()} unique lesson_ids...`);
    await sleep(30);
    if (data.length < LESSON_PAGE) break;
  }
  return [...ids];
}

// For one lesson_id: get oldest job id, delete all others
async function cleanLesson(assetType, lessonId, dryRun) {
  // Get oldest job for this lesson
  const { data: oldest, error: e1 } = await supabase
    .from('media_generation_jobs')
    .select('id')
    .eq('asset_type', assetType)
    .eq('lesson_id', lessonId)
    .order('created_at', { ascending: true })
    .limit(1);
  if (e1 || !oldest?.length) return 0;
  const keepId = oldest[0].id;

  if (dryRun) {
    // just count
    const { count } = await supabase
      .from('media_generation_jobs')
      .select('id', { count: 'exact', head: true })
      .eq('asset_type', assetType)
      .eq('lesson_id', lessonId)
      .neq('id', keepId);
    return count || 0;
  }

  const { count, error: e2 } = await supabase
    .from('media_generation_jobs')
    .delete({ count: 'exact' })
    .eq('asset_type', assetType)
    .eq('lesson_id', lessonId)
    .neq('id', keepId);
  if (e2) { console.error(`\n  Error on ${lessonId}: ${e2.message}`); return 0; }
  return count || 0;
}

async function deduplicateAssetType(assetType) {
  console.log(`\n=== ${assetType.toUpperCase()} ===`);

  const lessonIds = await fetchDistinctLessonIds(assetType);
  console.log(`\n  Found ${lessonIds.length.toLocaleString()} unique lesson_ids`);

  let totalDeleted = 0;
  let dryRunTotal = 0;
  let processed = 0;

  for (let i = 0; i < lessonIds.length; i += CONCURRENCY) {
    const batch = lessonIds.slice(i, i + CONCURRENCY);
    const counts = await Promise.all(batch.map(lid => cleanLesson(assetType, lid, DRY_RUN)));
    counts.forEach(c => { totalDeleted += c; dryRunTotal += c; });
    processed += batch.length;
    process.stdout.write(`\r  Processed ${processed.toLocaleString()} / ${lessonIds.length.toLocaleString()} lessons, ${(DRY_RUN ? dryRunTotal : totalDeleted).toLocaleString()} ${DRY_RUN ? 'would be deleted' : 'deleted'}...`);
    await sleep(50);
  }

  const label = DRY_RUN ? `[DRY RUN] would delete ${dryRunTotal.toLocaleString()}` : `deleted ${totalDeleted.toLocaleString()}`;
  console.log(`\n  Done. ${label} rows, kept ${lessonIds.length.toLocaleString()} (one per lesson).`);
  return { deleted: DRY_RUN ? 0 : totalDeleted, dryCount: dryRunTotal, kept: lessonIds.length };
}

async function main() {
  if (DRY_RUN) console.log('*** DRY RUN MODE — no data will be deleted ***\n');

  const results = {};
  for (const assetType of ['video', 'image']) {
    results[assetType] = await deduplicateAssetType(assetType);
  }

  console.log('\n=== SUMMARY ===');
  for (const [type, r] of Object.entries(results)) {
    const label = DRY_RUN ? `would delete ${r.dryCount.toLocaleString()}` : `deleted ${r.deleted.toLocaleString()}`;
    console.log(`  ${type}: kept ${r.kept.toLocaleString()} unique, ${label} duplicates`);
  }
  console.log('\nCleanup complete.');
}

main().catch(e => { console.error(e); process.exit(1); });
