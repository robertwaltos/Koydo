import fs from "node:fs";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const env = Object.fromEntries(
  fs.readFileSync(path.resolve(".env"), "utf8")
    .split(/\r?\n/).filter(l => l.includes("="))
    .map(l => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()])
);
const sb = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY);

const counts = {};
for (const t of ["image", "video"]) {
  counts[t] = {};
  for (const s of ["queued", "running", "completed", "failed"]) {
    const { count } = await sb.from("media_generation_jobs")
      .select("*", { count: "exact", head: true })
      .eq("status", s).eq("asset_type", t);
    counts[t][s] = count || 0;
  }
}

for (const t of ["image", "video"]) {
  const c = counts[t];
  const total = c.queued + c.running + c.completed + c.failed;
  const pct = total > 0 ? ((c.completed / total) * 100).toFixed(1) : "0.0";
  console.log(`${t.toUpperCase()}: ${c.completed}/${total} done (${pct}%) | queued:${c.queued} running:${c.running} failed:${c.failed}`);
}

const img = counts.image, vid = counts.video;
const totalAll = (img.queued+img.running+img.completed+img.failed) + (vid.queued+vid.running+vid.completed+vid.failed);
const doneAll = img.completed + vid.completed;
console.log(`\nOVERALL: ${doneAll}/${totalAll} (${(doneAll/totalAll*100).toFixed(1)}%)`);
