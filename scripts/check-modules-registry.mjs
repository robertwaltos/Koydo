import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { spawnSync } from "node:child_process";

const projectRoot = process.cwd();
const registryPath = path.join(projectRoot, "src", "lib", "modules", "generated", "registry.ts");

function hashFile(filePath) {
  if (!fs.existsSync(filePath)) return "";
  const content = fs.readFileSync(filePath);
  return createHash("sha256").update(content).digest("hex");
}

function runSyncModules() {
  const result = spawnSync(process.execPath, [path.join("scripts", "sync-modules.mjs")], {
    cwd: projectRoot,
    encoding: "utf8",
    stdio: "pipe",
  });
  if (result.error) {
    throw new Error(`Failed to execute sync-modules: ${result.error.message}`);
  }
  if (result.status !== 0) {
    throw new Error(
      `sync-modules failed with exit code ${result.status}\nstdout:\n${result.stdout || ""}\nstderr:\n${result.stderr || ""}`,
    );
  }
  if (result.stdout?.trim()) {
    console.log(result.stdout.trim());
  }
}

function main() {
  const beforeHash = hashFile(registryPath);
  runSyncModules();
  const afterHash = hashFile(registryPath);

  if (beforeHash !== afterHash) {
    console.error("Module registry was out of date and changed during sync.");
    console.error("Run `npm run modules:sync` and commit the updated registry.");
    process.exit(1);
  }

  console.log("Module registry is up to date.");
}

main();
