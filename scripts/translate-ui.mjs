import fs from 'fs/promises';
import path from 'path';

const API_KEY = process.env.OPENAI_MEDIA_API_KEY || process.env.OPENAI_API_KEY;
const TARGET_LANG = process.argv[2];

if (!TARGET_LANG) {
  console.error("Please provide a target language code (e.g. fr, de, ar)");
  process.exit(1);
}

const langNames = {
  fr: "French",
  de: "German",
  ar: "Arabic",
  hi: "Hindi",
  ja: "Japanese",
  ko: "Korean",
  ru: "Russian",
  pt: "Portuguese",
  it: "Italian"
};
const targetLangName = langNames[TARGET_LANG];

async function main() {
  const tsPath = path.join(process.cwd(), 'src/lib/i18n/translations.ts');
  let tsContent = await fs.readFile(tsPath, 'utf8');

  // Extract English keys
  const enMatch = /en:\s*\{([\s\S]*?)\n  \},/m.exec(tsContent);
  if (!enMatch) throw new Error("Could not find english strings");

  const enContent = enMatch[1];
  const enKeys = [...enContent.matchAll(/^\s*([a-zA-Z0-9_]+):\s*"(.*?)"/gm)];
  const enDict = {};
  for (const match of enKeys) {
    enDict[match[1]] = match[2];
  }

  console.log(`Extracted ${Object.keys(enDict).length} English keys. Translating to ${targetLangName}...`);

  // Call OpenAI to translate
  const sysPrompt = `You are a professional software localizer translating a UI dictionary.
Translate the following JSON values into ${targetLangName}. 
Rules:
- Preserve all interpolation variables exactly as they are (e.g. {count}, {name})
- Keep the tone friendly, encouraging, and clear (it's an educational app for kids and parents)
- Return ONLY valid JSON with the exact same keys.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        { role: "system", content: sysPrompt },
        { role: "user", content: JSON.stringify(enDict) }
      ],
      response_format: { type: "json_object" },
      temperature: 0.1
    })
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("API Error:", err);
    process.exit(1);
  }

  const data = await res.json();
  const translatedDict = JSON.parse(data.choices[0].message.content);

  console.log(`Received ${Object.keys(translatedDict).length} translated keys.`);

  // Inject into translations.ts
  const langMatchRegex = new RegExp(`^\\s*${TARGET_LANG}:\\s*\\{([\\s\\S]*?)\\n  \\},`, 'm');
  const langMatch = langMatchRegex.exec(tsContent);

  let injectedStr = `  ${TARGET_LANG}: {\n`;
  for (const [key, val] of Object.entries(translatedDict)) {
    injectedStr += `    ${key}: ${JSON.stringify(val)},\n`;
  }
  injectedStr += `  },`;

  if (langMatch) {
    console.log(`Replacing existing ${TARGET_LANG} block...`);
    tsContent = tsContent.replace(langMatchRegex, injectedStr);
  } else {
    console.log(`Could not find existing ${TARGET_LANG} block. You might need to add it manually or check regex.`);
  }

  await fs.writeFile(tsPath, tsContent);
  console.log(`Successfully injected ${TARGET_LANG} translations!`);
}

main().catch(console.error);
