import fs from 'fs/promises';

const keys = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_MEDIA_API_KEY: process.env.OPENAI_MEDIA_API_KEY,
  HEYGEN_API_KEY: process.env.HEYGEN_API_KEY,
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY
};

async function checkOpenAI(key, name) {
  if (!key) return `${name}: NOT CONFIGURED`;
  try {
    const res = await fetch("https://api.openai.com/v1/models", {
      headers: { "Authorization": `Bearer ${key}` }
    });
    if (res.status === 401) return `${name}: INVALID_KEY / EXPIRED`;
    if (res.status === 429) return `${name}: INSUFFICIENT_QUOTA / OUT_OF_CREDITS (Error 429)`;
    if (res.ok) return `${name}: ACTIVE & VALID`;
    return `${name}: ERROR ${res.status}`;
  } catch (e) {
    return `${name}: NETWORK ERROR ${e.message}`;
  }
}

async function checkHeyGen(key, name) {
    if (!key) return `${name}: NOT CONFIGURED`;
    try {
      const res = await fetch("https://api.heygen.com/v2/avatars", {
        headers: { "X-Api-Key": key }
      });
      if (res.status === 401) return `${name}: INVALID_KEY / EXPIRED`;
      if (res.status === 402 || res.status === 403 || res.status === 429) return `${name}: OUT_OF_CREDITS (Error ${res.status})`;
      if (res.ok) {
          const data = await res.json();
          // We don't get quota from /v2/avatars, but if it returns 200, the key works.
          return `${name}: ACTIVE & VALID`;
      }
      return `${name}: ERROR ${res.status}`;
    } catch (e) {
      return `${name}: NETWORK ERROR ${e.message}`;
    }
}

async function main() {
  console.log("Checking API Keys...");
  const results = [];
  
  results.push(await checkOpenAI(keys.OPENAI_API_KEY, "OPENAI_API_KEY"));
  results.push(await checkOpenAI(keys.OPENAI_MEDIA_API_KEY, "OPENAI_MEDIA_API_KEY"));
  results.push(await checkHeyGen(keys.HEYGEN_API_KEY, "HEYGEN_API_KEY"));
  
  const output = results.join('\n');
  console.log("\nResults:\n" + output);
  
  await fs.writeFile('API_BALANCES.md', `# API Status Report\n\n${results.map(r => '- ' + r).join('\n')}\n\n*Note: OpenAI does not allow direct querying of dollar balances via standard API keys anymore. An 'INSUFFICIENT_QUOTA' (429) error indicates the account has run out of funds or hit a hard limit.*`);
}

main();
