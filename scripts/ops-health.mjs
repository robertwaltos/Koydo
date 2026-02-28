import { spawnSync } from "node:child_process";

function parseArgs(argv) {
  const plainFlags = new Set(["no-fail"]);

  const hasFlag = (flag) => {
    const plain = flag.replace(/^--/, "");
    return argv.includes(flag) || argv.includes(plain);
  };

  const getValue = (flag) => {
    const plain = flag.replace(/^--/, "");
    const index = argv.indexOf(flag);
    const plainIndex = argv.indexOf(plain);
    const inline = argv.find((value) => value.startsWith(`${plain}=`));
    if (index !== -1) return argv[index + 1] ?? null;
    if (plainIndex !== -1) return argv[plainIndex + 1] ?? null;
    if (inline) return inline.slice(plain.length + 1);
    return null;
  };

  const positional =
    argv.find(
      (value) => !value.startsWith("--") && !plainFlags.has(value) && !value.includes("="),
    ) ?? null;

  return {
    noFail: hasFlag("--no-fail"),
    baseUrl:
      getValue("--base-url")
      ?? positional
      ?? process.env.SMOKE_BASE_URL
      ?? process.env.NEXT_PUBLIC_APP_URL
      ?? "http://localhost:3000",
  };
}

function runCommand(check) {
  const result = spawnSync(check.command, check.args, {
    stdio: "inherit",
    shell: true,
  });

  return {
    ...check,
    status: result.status ?? 1,
  };
}

const args = parseArgs(process.argv.slice(2));

const checks = [
  {
    name: "Environment",
    command: "node",
    args: ["scripts/check-env.mjs"],
  },
  {
    name: "DB readiness",
    command: "node",
    args: ["scripts/check-db-readiness.mjs"],
  },
  {
    name: "Webhook health",
    command: "node",
    args: ["scripts/stripe-webhook-health-report.mjs"],
  },
  {
    name: "Auth/Billing smoke",
    command: "node",
    args: ["scripts/smoke-auth-billing.mjs", args.baseUrl],
  },
];

console.log("Ops health checks");
console.log(`Smoke base URL: ${args.baseUrl}`);
console.log("");

const results = checks.map(runCommand);
const passed = results.filter((result) => result.status === 0).length;
const failed = results.length - passed;

console.log("");
for (const result of results) {
  const level = result.status === 0 ? "PASS" : "FAIL";
  console.log(`[${level}] ${result.name} (exit=${result.status})`);
}
console.log(`Summary: ${passed} pass / ${failed} fail (total ${results.length})`);

if (!args.noFail && failed > 0) {
  process.exitCode = 1;
}
