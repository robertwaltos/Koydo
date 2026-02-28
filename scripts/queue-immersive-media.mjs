import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// 1. Env
const envPath = path.resolve('.env');
let env = {};
if (fs.existsSync(envPath)) {
  const content = fs.readFileSync(envPath, 'utf8');
  content.split(/\r?\n/).forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx > -1) {
      env[trimmed.substring(0, idx).trim()] = trimmed.substring(idx + 1).trim();
    }
  });
}
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.EXPO_PUBLIC_SUPABASE_URL || env.NEXT_PUBLIC_SUPABASE_URL || env.EXPO_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || env.SUPABASE_SERVICE_ROLE_KEY;
const supabase = createClient(supabaseUrl, serviceKey);

function parseArgs(argv) {
  const getValue = (flag, fallback) => {
    const plain = flag.replace(/^--/, '');
    const eqEntry = argv.find((entry) => entry.startsWith(`${flag}=`) || entry.startsWith(`${plain}=`));
    if (eqEntry) return eqEntry.split('=').slice(1).join('=') || fallback;
    const directIndex = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    if (directIndex >= 0) return argv[directIndex + 1] ?? fallback;
    if (plainIndex >= 0) return argv[plainIndex + 1] ?? fallback;
    return fallback;
  };

  const hasFlag = (flag) => argv.includes(flag) || argv.includes(flag.replace(/^--/, ''));
  const requestedLimit = Number(getValue('--limit', '200'));

  return {
    dryRun: hasFlag('--dry-run'),
    reviewedOnly: hasFlag('--reviewed-only'),
    limit: Number.isFinite(requestedLimit)
      ? (requestedLimit <= 0 ? Number.POSITIVE_INFINITY : Math.max(1, Math.floor(requestedLimit)))
      : 200,
  };
}

// 2. Settings
const MASTER_SETTINGS = 'Koydo Immersive Master Settings (always apply): ' +
'25-second ultra-realistic 4K cinematic educational video at 24 fps. ' +
'Slow, majestic, continuous fly-through journey. ' +
'Photorealistic 3D CGI scientific documentary style (BBC/National Geographic level). ' +
'Hyper-detailed molecular rendering with accurate physics, density changes, intermolecular forces. ' +
'Smooth organic camera movement, volumetric god rays, realistic depth of field. ' +
'Suitable for K-1 learners - calm yet awe-inspiring. ' +
'Dark space-like gradient background.';

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const jsonPath = path.resolve('public/LESSON-MEDIA-PROMPT-PACK.json');
  if (!fs.existsSync(jsonPath)) process.exit(0);

  const pack = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  let allLessons = [];
  if (pack.modules) {
    pack.modules.forEach(m => {
       if (m.lessons) {
         m.lessons.forEach(l => {
            allLessons.push({ module: m, lesson: l });
         });
       }
    });
  }

  // Get User
  const { data: userData } = await supabase.auth.admin.listUsers();
  const userId = userData?.users?.[0]?.id;
  if (!userId) return;

  // Fetch ALL existing video jobs using cursor pagination (no offset timeout,
  // filters to asset_type='video' only, skips failed so they can be retried).
  const existingMap = new Set();
  let lastId = null;
  while (true) {
    let q = supabase
      .from('media_generation_jobs')
      .select('id, lesson_id')
      .eq('asset_type', 'video')
      .neq('status', 'failed')
      .order('id', { ascending: true })
      .limit(1000);
    if (lastId) q = q.gt('id', lastId);
    const { data: page } = await q;
    if (!page || page.length === 0) break;
    page.forEach(j => existingMap.add(j.lesson_id));
    lastId = page[page.length - 1].id;
    if (page.length < 1000) break;
  }
  console.log(`Found ${existingMap.size} existing video lesson_ids.`);

  let queued = 0;
  let candidateCount = 0;
  for (const item of allLessons) {
       if (queued >= args.limit) break;
       const { module, lesson } = item;
       if (existingMap.has(lesson.lessonId)) continue;
       if (args.reviewedOnly) {
         const seedanceVideoMeta = lesson.promptMeta?.seedanceVideo ?? {};
         const promptSources = lesson.promptSources ?? {};
         const promptSource =
           typeof seedanceVideoMeta.source === 'string' && seedanceVideoMeta.source.trim()
             ? seedanceVideoMeta.source.trim()
             : typeof promptSources.seedanceVideo === 'string'
               ? promptSources.seedanceVideo
               : 'unknown';
         const qaStatus =
           typeof seedanceVideoMeta.qaStatus === 'string' && seedanceVideoMeta.qaStatus.trim()
             ? seedanceVideoMeta.qaStatus.trim()
             : promptSource === 'lesson' ? 'reviewed' : 'needs_review';
         if (qaStatus !== 'reviewed') continue;
       }
       candidateCount++;

       const coreSubject = lesson.lessonTitle;
       const context = lesson.prompts?.seedanceVideo || lesson.prompts?.lessonImage || lesson.lessonTitle;
       const finalPrompt = MASTER_SETTINGS + ' Subject: ' + coreSubject + '. Context: ' + context;

       // UPGRADE: Queue as 'video' instead of 'image' to trigger multi-stage pipeline
       const payload = {
         created_by: userId,
         asset_type: 'video', // Trigger SVD pipeline
         module_id: module.moduleId,
         lesson_id: lesson.lessonId,
         provider: 'comfyui',
         prompt: finalPrompt,
         status: 'queued',
         metadata: { 
            source: 'auto-agent', 
            master_settings: true,
            stage: 'generating_base_image' // Start at step 1
         }
       };

       if (args.dryRun) {
         queued++;
         existingMap.add(lesson.lessonId);
       } else {
         const { error } = await supabase.from('media_generation_jobs').insert(payload);
         if (!error) {
           queued++;
           existingMap.add(lesson.lessonId);
         } else {
           console.error('Insert error:', error.message);
         }
       }
  }

  console.log(`Queue limit: ${Number.isFinite(args.limit) ? args.limit : 'all'}`);
  console.log(`Candidates considered: ${candidateCount}`);
  console.log(`Mode: ${args.dryRun ? 'dry-run' : 'apply'}`);
  if (queued > 0) console.log('Auto-queued ' + queued + ' new VIDEO pipeline jobs.');
  if (!args.dryRun && queued === 0) console.log('No new video jobs were queued.');
}

main();
