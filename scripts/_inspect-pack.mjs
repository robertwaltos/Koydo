import fs from "node:fs";
const p = JSON.parse(fs.readFileSync("public/LESSON-MEDIA-PROMPT-PACK.json", "utf8"));
console.log("Top-level keys:", Object.keys(p).join(", "));
console.log("schemaVersion:", p.schemaVersion);
console.log("generatedAt:", p.generatedAt);
console.log("totals:", JSON.stringify(p.totals));

const modules = p.modules;
if (Array.isArray(modules)) {
  console.log("\nmodules is ARRAY, length:", modules.length);
  const m0 = modules[0];
  console.log("module[0] keys:", Object.keys(m0 || {}).join(", "));
  const lessons = m0?.lessons ?? [];
  console.log("module[0].lessons count:", lessons.length);
  const l0 = lessons[0];
  console.log("lesson[0] keys:", Object.keys(l0 || {}).join(", "));
  const pm = l0?.promptMeta;
  if (pm) {
    console.log("promptMeta keys:", Object.keys(pm).join(", "));
    const first = Object.values(pm)[0];
    console.log("promptMeta[0] keys:", Object.keys(first || {}).join(", "));
    console.log("promptMeta[0].qaStatus:", first?.qaStatus);
  }
} else {
  console.log("\nmodules is OBJECT, moduleIds (first 5):", Object.keys(modules).slice(0, 5).join(", "));
  const firstMod = Object.values(modules)[0];
  console.log("firstMod keys:", Object.keys(firstMod || {}).slice(0, 8).join(", "));
}

