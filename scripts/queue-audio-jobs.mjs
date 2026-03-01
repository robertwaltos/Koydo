import { spawnSync } from "node:child_process";
import path from "node:path";

const targetScript = path.resolve(process.cwd(), "scripts", "queue-public-domain-audiobooks.mjs");
const incomingArgs = process.argv.slice(2);

const isDryRun = incomingArgs.includes("--dry-run");
const forwardedArgs = incomingArgs.filter((arg) => arg !== "--dry-run");

if (!isDryRun && !forwardedArgs.includes("--apply")) {
  forwardedArgs.unshift("--apply");
}

const result = spawnSync("node", [targetScript, ...forwardedArgs], {
  cwd: process.cwd(),
  stdio: "inherit",
  shell: process.platform === "win32",
  env: process.env,
});

process.exitCode = typeof result.status === "number" ? result.status : 1;
