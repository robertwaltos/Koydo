import { spawn } from 'child_process';
import path from 'path';

async function runScript(name, args = []) {
  // Assuming scripts are in 'scripts/' relative to CWD
  const scriptPath = path.resolve('scripts', name);
  console.log('[Orchestrator] Running: ' + name);
  
  return new Promise((resolve) => {
    const p = spawn('node', [scriptPath, ...args], {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: process.env
    });
    
    p.on('close', (code) => {
      if (code !== 0) console.log('[Orchestrator] ' + name + ' exited with code ' + code);
      resolve(code);
    });
    
    p.on('error', (err) => {
      console.error('[Orchestrator] Error spawning ' + name + ': ' + err.message);
      resolve(-1);
    });
  });
}

async function loop() {
  console.log('Starting Autonomous Media Agent...');
  while (true) {
    const start = Date.now();
    
    // 1. Queue (Idempotent)
    await runScript('queue-immersive-media.mjs');
    await runScript('queue-audio-jobs.mjs');

    // 2. Process Media (Video/Image)
    await runScript('process-media-jobs.mjs', ['--strict-provider', '--limit', '5']);

    // 2a. Process Audio (Voice Over)
    await runScript('process-audio-jobs.mjs');

    // 2b. Sync Assets (Download from ComfyUI to repo)
    await runScript('sync-media-assets.mjs');

    // 3. Compile Manifest
    await runScript('compile-media-assets.mjs');
    
    const duration = (Date.now() - start) / 1000;
    console.log('[Orchestrator] Cycle took ' + duration.toFixed(1) + 's.');
    
    // If cycle was fast (no jobs), sleep longer. If slow (processed jobs), sleep shorter.
    const sleepTime = duration > 10 ? 5000 : 30000; 
    console.log('[Orchestrator] Sleeping ' + (sleepTime/1000) + 's...');
    await new Promise(r => setTimeout(r, sleepTime));
  }
}

loop();
