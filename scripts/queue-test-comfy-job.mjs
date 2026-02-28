import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

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

if (!supabaseUrl || !serviceKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function main() {
  // Get an admin/existing user for created_by
  const { data: users, error: userError } = await supabase.auth.admin.listUsers();
  
  if (userError) {
      console.error('List Users Error:', userError);
      process.exit(1);
  }
  
  if (!users || !users.users || users.users.length === 0) {
      console.error('No users found.');
      process.exit(1);
  }

  const userId = users.users[0].id;
  console.log('Using User ID:', userId);

  const payload = {
    created_by: userId,
    asset_type: 'image',
    module_id: 'test-module-comfy',
    lesson_id: 'test-lesson-comfy',
    provider: 'comfyui', 
    prompt: 'A futuristic bioluminescent forest at night, 8k resolution, cinematic lighting',
    status: 'queued',
    metadata: { source: 'test-script' }
  };

  const { data, error } = await supabase
    .from('media_generation_jobs')
    .insert(payload)
    .select()
    .single();

  if (error) {
    console.error('Alloc failed:', error);
  } else {
    console.log('Job queued:', data.id);
  }
}

main();
