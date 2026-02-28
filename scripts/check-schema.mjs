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
const supabase = createClient(supabaseUrl, serviceKey);

async function check() {
  console.log('Checking tables...');
  // Try to list tables via API (often disabled, but worth a shot)
  //const { data: tables, error } = await supabase.from('information_schema.tables').select('*'); // Can't select * usually 
  // Let's manually check for likely tables
  const candidates = ['lessons', 'modules', 'curriculum', 'media_generation_jobs', 'profiles', 'users'];
  
  for (const t of candidates) {
     const { error } = await supabase.from(t).select('count').limit(1);
     if (!error) console.log('Found table: ' + t);
     else console.log('Access error or missing table ' + t + ': ' + error.message);
  }
}
check();
