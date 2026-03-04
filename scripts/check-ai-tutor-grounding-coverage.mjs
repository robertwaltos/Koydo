import fs from "node:fs";
import path from "node:path";

const TARGET_FILE = path.resolve("src/app/api/ai/tutor/route.ts");

function fail(message) {
  console.error(`FAIL: ${message}`);
  process.exit(1);
}

function main() {
  if (!fs.existsSync(TARGET_FILE)) {
    fail(`Missing target file: ${TARGET_FILE}`);
  }

  const source = fs.readFileSync(TARGET_FILE, "utf8");

  const checks = [
    {
      label: "Grounding citation + snippet or explicit uncertainty block",
      mustInclude: [
        "function withGroundingBlock",
        "Source:",
        "Snippet:",
        "Uncertainty: I do not have a confirmed lesson source",
      ],
    },
    {
      label: "Clarifying question behavior for low-confidence or ambiguous prompts",
      mustInclude: [
        "function shouldAskClarifyingQuestion",
        "const clarifyingQuestion = shouldAskClarifyingQuestion",
        "buildClarifyingQuestion",
      ],
    },
    {
      label: "Contradiction/grounding guard fallback",
      mustInclude: [
        "const MIN_GROUNDED_SCORE",
        "if (lessonLookup && source === \"openai\" && groundingScore < MIN_GROUNDED_SCORE)",
        "contradictionBlocked = true",
        "answer = baselineAnswer",
      ],
    },
    {
      label: "Grounding diagnostics in response payload",
      mustInclude: [
        "grounding: {",
        "citation,",
        "snippet,",
        "confidence,",
        "groundingScore:",
        "contradictionBlocked,",
        "clarifyingQuestionAsked:",
      ],
    },
  ];

  let passed = 0;
  for (const check of checks) {
    const missing = check.mustInclude.filter((marker) => !source.includes(marker));
    if (missing.length > 0) {
      fail(`${check.label} -> missing markers: ${missing.join(", ")}`);
    }
    passed += 1;
    console.log(`PASS: ${check.label}`);
  }

  console.log(`PASS: AI tutor grounding coverage check (${passed}/${checks.length}).`);
}

main();
