#!/usr/bin/env node

/**
 * generate-music-universe-content.mjs
 *
 * Generates a full "music universe" pack:
 * - N songs per genre (default 200)
 * - Language-aware original lyrics (genre market weighted)
 * - Suno-ready and Udio-ready prompts
 * - Karaoke timeline data per line
 * - Per-genre JSON + CSV exports
 *
 * Usage:
 *   node scripts/generate-music-universe-content.mjs
 *   node scripts/generate-music-universe-content.mjs --songs-per-genre 200
 *   node scripts/generate-music-universe-content.mjs --genres pop,latin,k-pop --songs-per-genre 40
 *   node scripts/generate-music-universe-content.mjs --force-language es
 */

import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const GENRE_MANIFEST_PATH = path.join(ROOT, "data", "music-universe", "genres.global.top20.json");
const LANGUAGE_PROFILE_PATH = path.join(ROOT, "data", "music-universe", "language-profiles.json");
const DEFAULT_OUT_DIR = path.join(ROOT, "data", "music-universe", "generated");

function parseArgs(argv) {
  const opts = {
    songsPerGenre: 200,
    genres: [],
    seed: "20260307",
    outDir: DEFAULT_OUT_DIR,
    forceLanguage: "",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--songs-per-genre" && argv[i + 1]) {
      opts.songsPerGenre = Math.max(1, Number.parseInt(argv[i + 1], 10) || 200);
      i += 1;
      continue;
    }
    if (arg.startsWith("--songs-per-genre=")) {
      opts.songsPerGenre = Math.max(1, Number.parseInt(arg.split("=")[1] || "200", 10) || 200);
      continue;
    }
    if (arg === "--genres" && argv[i + 1]) {
      opts.genres = String(argv[i + 1])
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      i += 1;
      continue;
    }
    if (arg.startsWith("--genres=")) {
      opts.genres = String(arg.split("=")[1] || "")
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean);
      continue;
    }
    if (arg === "--seed" && argv[i + 1]) {
      opts.seed = String(argv[i + 1]).trim() || opts.seed;
      i += 1;
      continue;
    }
    if (arg.startsWith("--seed=")) {
      opts.seed = String(arg.split("=")[1] || "").trim() || opts.seed;
      continue;
    }
    if (arg === "--out-dir" && argv[i + 1]) {
      opts.outDir = path.resolve(ROOT, String(argv[i + 1]).trim());
      i += 1;
      continue;
    }
    if (arg.startsWith("--out-dir=")) {
      opts.outDir = path.resolve(ROOT, String(arg.split("=")[1] || "").trim());
      continue;
    }
    if (arg === "--force-language" && argv[i + 1]) {
      opts.forceLanguage = String(argv[i + 1]).trim().toLowerCase();
      i += 1;
      continue;
    }
    if (arg.startsWith("--force-language=")) {
      opts.forceLanguage = String(arg.split("=")[1] || "").trim().toLowerCase();
      continue;
    }
  }

  return opts;
}

function hashToUInt32(input) {
  let hash = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function mulberry32(seedInt) {
  let t = seedInt >>> 0;
  return function next() {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), t | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function pick(rng, values) {
  return values[Math.floor(rng() * values.length)];
}

function intInRange(rng, min, max) {
  return Math.floor(rng() * (max - min + 1)) + min;
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (!/[",\n]/.test(text)) {
    return text;
  }
  return `"${text.replaceAll('"', '""')}"`;
}

const LANG_LABELS = {
  en: "English",
  es: "Spanish",
  pt: "Portuguese",
  fr: "French",
  ja: "Japanese",
  ko: "Korean",
  ar: "Arabic",
  fil: "Filipino",
};

const MOODS = [
  "uplifting", "anthemic", "nostalgic", "romantic", "confident", "melancholic", "dreamy", "cinematic",
  "playful", "dark", "triumphant", "introspective", "rebellious", "euphoric", "moody", "vulnerable",
];

const SETTINGS = [
  "neon avenue", "summer rooftop", "late-night train", "storm-lit window", "sunrise freeway",
  "downtown skyline", "desert highway", "moonlit beach", "empty theater", "crowded festival",
  "city bridge", "quiet apartment", "underground station", "ocean pier", "open field",
];

const VOICE_PROFILES = [
  "clear contemporary lead vocal with emotional belt",
  "breathy intimate vocal with stacked harmonies",
  "rhythmic spoken-sung topline with melodic hooks",
  "warm soulful voice with controlled rasp",
  "bright youthful lead with dynamic ad-libs",
  "smooth low register vocal with airy falsetto lift",
];

const INSTRUMENT_PACKS = [
  "tight drums, sub bass, atmospheric pads, hook synth, clap layers",
  "punchy kick, snare stack, rhythmic bass guitar, airy keys, shimmer fx",
  "electronic drums, sidechained bass, filtered arps, stereo plucks, impact fx",
  "live percussion, warm bass, chorus guitar, analog synth layer, wide vocal delays",
  "acoustic guitar accents, trap hats, deep 808, textured pads, cinematic risers",
  "palmas hand claps, nylon guitar, cajon groove, deep bass pulse, dramatic strings",
];

const MIX_NOTES = [
  "club-ready low end, crisp vocal front, wide stereo synths",
  "radio polish, controlled transients, emotional vocal space",
  "punchy drums, clean top-line articulation, modern loudness",
  "warm analog tone, detailed vocal harmonies, punch without harshness",
  "dynamic build automation and memorable final chorus lift",
];

const WORDS_BY_LANG = {
  en: {
    titleA: ["Neon", "Velvet", "Midnight", "Golden", "Silver", "Echo", "Electric", "Crystal", "Wild", "Future"],
    titleB: ["Hearts", "Skyline", "Motion", "Rhythm", "Pulse", "City", "Dreams", "Waves", "Horizon", "Glow"],
    action: [
      "running from the old version of me",
      "dancing through all the static",
      "turning pain into motion",
      "choosing joy over noise",
      "building a future out of sparks",
      "finding hope between red lights",
    ],
    imagery: [
      "streetlights flicker like satellites",
      "vinyl dust spins around the room",
      "the skyline hums in four-four time",
      "rain on glass sounds like applause",
      "every heartbeat lands on the downbeat",
      "the bassline bends the dark to blue",
    ],
    pre: [
      "I can feel the pressure lifting off my chest",
      "When the drums hit hard, I remember who I am",
    ],
    hooks: [
      "we rise when the beat comes back",
      "this is the night we turn it around",
      "we keep moving through the blackout",
      "all my scars learn to sing tonight",
      "I found my voice in the feedback",
      "let the low end carry us home",
    ],
    chorusL2: "Hands up high while the skyline glows",
    chorusL4: "We don't stop till the sun says go",
    verse2: [
      "No rewind button, only forward fire",
      "Every broken signal turned into a choir",
      "I trade old fear for a louder dream",
      "Now the whole room moves on the same theme",
    ],
    bridge: [
      "When the world goes quiet, I still hear the spark",
      "Even in the dark, we make our mark",
    ],
  },
  es: {
    titleA: ["Noche", "Luz", "Fuego", "Brillo", "Ritmo", "Alma", "Pulso", "Sombra", "Viento", "Destino"],
    titleB: ["Urbano", "de Cristal", "de Oro", "en Llamas", "de Medianoche", "Infinito", "de Luna", "de Neon", "Sin Miedo", "Central"],
    action: [
      "corriendo de la version vieja de mi",
      "bailando entre todo el ruido",
      "convirtiendo dolor en movimiento",
      "eligiendo alegria sobre el caos",
      "encendiendo futuro con chispas",
      "buscando esperanza entre luces rojas",
    ],
    imagery: [
      "las farolas parpadean como satelites",
      "el polvo del vinilo gira en la habitacion",
      "la ciudad late en cuatro por cuatro",
      "la lluvia en el vidrio suena como aplausos",
      "cada latido cae en el golpe fuerte",
      "el bajo pinta la noche de azul",
    ],
    pre: [
      "Siento la presion soltarse del pecho",
      "Cuando entra el bombo recuerdo quien soy",
    ],
    hooks: [
      "subimos cuando vuelve el beat",
      "esta es la noche para cambiarlo todo",
      "seguimos moviendonos en el apagon",
      "mis cicatrices aprenden a cantar hoy",
      "encontre mi voz en el feedback",
      "que el bajo nos lleve hasta casa",
    ],
    chorusL2: "Manos arriba mientras brilla la ciudad",
    chorusL4: "No paramos hasta que salga el sol",
    verse2: [
      "Sin boton de volver, solo fuego adelante",
      "Cada senal rota se vuelve coro gigante",
      "Cambio miedo viejo por un sueno mas fuerte",
      "Y toda la sala se mueve con suerte",
    ],
    bridge: [
      "Cuando el mundo calla yo escucho la chispa",
      "Incluso en sombra dejamos la pista",
    ],
  },
  pt: {
    titleA: ["Noite", "Luz", "Brasa", "Pulso", "Horizonte", "Eco", "Ritmo", "Aurora", "Futuro", "Vento"],
    titleB: ["Urbano", "de Ouro", "de Neon", "Sem Medo", "Infinito", "Central", "de Lua", "de Vidro", "Vibrante", "Solar"],
    action: [
      "correndo da versao antiga de mim",
      "dancando no meio do ruido",
      "transformando dor em movimento",
      "escolhendo alegria acima do caos",
      "acesa no futuro com fasca",
      "achando esperanca entre farois",
    ],
    imagery: [
      "luzes da rua piscam como satelites",
      "po de vinil gira no quarto",
      "a cidade vibra em quatro por quatro",
      "chuva no vidro soa como aplauso",
      "cada batida cai no tempo certo",
      "o baixo pinta a noite de azul",
    ],
    pre: [
      "Sinto a pressao saindo do peito",
      "Quando a bateria bate lembro quem sou",
    ],
    hooks: [
      "subimos quando o beat voltar",
      "essa e a noite de virar o jogo",
      "seguimos no movimento no apagao",
      "minhas marcas aprendem a cantar",
      "achei minha voz no feedback",
      "deixa o grave levar a gente pra casa",
    ],
    chorusL2: "Maos pro alto com a cidade a brilhar",
    chorusL4: "Nao paramos ate o sol chegar",
    verse2: [
      "Sem botao de voltar, so fogo pra frente",
      "Cada sinal quebrado vira voz da gente",
      "Troco medo antigo por sonho valente",
      "E todo mundo se move no mesmo corrente",
    ],
    bridge: [
      "Quando o mundo silencia eu escuto a faica",
      "Mesmo no escuro nossa marca fica",
    ],
  },
  fr: {
    titleA: ["Nuit", "Lumiere", "Pulse", "Echo", "Neon", "Aube", "Rythme", "Or", "Velours", "Futur"],
    titleB: ["Urbain", "Brillant", "Central", "Infini", "de Minuit", "de Verre", "Vivant", "Libre", "Celeste", "Moderne"],
    action: [
      "je fuis mon ancienne version",
      "je danse au milieu du bruit",
      "je transforme la douleur en mouvement",
      "je choisis la joie contre le chaos",
      "je construis demain avec des etincelles",
      "je trouve l espoir entre les feux rouges",
    ],
    imagery: [
      "les lampadaires clignotent comme des satellites",
      "la poussiere du vinyle tourne dans la piece",
      "la ville respire en quatre temps",
      "la pluie sur la vitre sonne comme des applaudissements",
      "chaque battement tombe sur le temps fort",
      "la basse colore la nuit en bleu",
    ],
    pre: [
      "Je sens la pression quitter ma poitrine",
      "Quand les drums frappent je me retrouve",
    ],
    hooks: [
      "on monte quand le beat revient",
      "c est la nuit ou tout bascule",
      "on continue dans le blackout",
      "mes cicatrices apprennent a chanter",
      "j ai trouve ma voix dans le feedback",
      "laisse la basse nous ramener",
    ],
    chorusL2: "Les mains en haut pendant que la ville brille",
    chorusL4: "On ne s arrete pas avant le soleil",
    verse2: [
      "Pas de retour en arriere, juste du feu devant",
      "Chaque signal casse devient un choeur geant",
      "Je change la peur pour un reve plus grand",
      "Et toute la salle bouge en meme temps",
    ],
    bridge: [
      "Quand le monde se tait j entends encore l etincelle",
      "Meme dans le noir on laisse une trace belle",
    ],
  },
  ja: {
    titleA: ["Midnight", "Neon", "Hikari", "Yoru", "Pulse", "Kokoro", "Mirai", "Rhythm", "Aoi", "Starlight"],
    titleB: ["Drive", "Beat", "Skyline", "Wave", "Signal", "Motion", "Glow", "Echo", "Dream", "City"],
    action: [
      "yami no naka de atarashii jibun e hashiru",
      "noizu no naka demo odori tsuzukeru",
      "itami o ugoki ni kaete iku",
      "kono yoru ni kibou o erabu",
      "hibi no kakera de mirai o tsukuru",
      "aka shingo no aida ni hikari o mitsukeru",
    ],
    imagery: [
      "machi no akari ga eisei mitai ni hikaru",
      "vinyl no chiri ga heya de mau",
      "skyline ga yonbyoshi de naru",
      "mado no ame ga hakushu no oto ni naru",
      "kodou ga downbeat ni kasanaru",
      "bass ga yoru o aoi iro ni suru",
    ],
    pre: [
      "mune no atsuryoku ga hodoite iku",
      "drum ga naru to jibun o omoidasu",
    ],
    hooks: [
      "beat ga modoru to watashitachi wa agaru",
      "kono yoru de subete o kaeru",
      "blackout demo ugoki tsuzukeru",
      "kizuato sae uta ni naru",
      "feedback de koe o mitsuketa",
      "low end ni nori ie made iku",
    ],
    chorusL2: "te o agete machi no hikari to odoru",
    chorusL4: "taiyo ga noboru made tomaranai",
    verse2: [
      "modoru botan wa nai mae ni susumu dake",
      "kowareta signal mo chorus ni naru",
      "furui osore o yume no ondo ni kaeru",
      "heya no zenbu ga onaji groove de yureru",
    ],
    bridge: [
      "sekai ga shizuka demo hi wa mada kienai",
      "kurayami no naka demo ato o nokosu",
    ],
  },
  ko: {
    titleA: ["Neon", "Bam", "Pulse", "Haneul", "Mirai", "Rhythm", "City", "Glow", "Echo", "Drive"],
    titleB: ["Beat", "Skyline", "Signal", "Wave", "Dream", "Motion", "Night", "Heart", "Light", "Flow"],
    action: [
      "orae modeun geoseul beoseona dallyeo",
      "so-eum sokeseodo chumchwo",
      "apeumeul unmjigimeuro bakkwo",
      "honran boda gippeumeul taekhae",
      "jageun bulkkot-euro miraereul mandeureo",
      "ppalgan bul sai-eseo huimangeul chaja",
    ],
    imagery: [
      "gildeung-i wiseongcheoreom banjjakyeo",
      "vinyl meonji-ga bang aneseo dolla",
      "dosiga four on the floorlo sum swinda",
      "changmun-ui bidulgi sori-ga baksurcheoreom deullyeo",
      "simjangbakdong-i downbeat-e mat-ada",
      "bassga bameul pureun bit-euro muldeyeo",
    ],
    pre: [
      "gaseumui apbak-i pureojyeo",
      "drum-i deullyeomyeon naneun nareul chaja",
    ],
    hooks: [
      "beatga doramyeon urin olraga",
      "i bam-e modeungeol bakkwo",
      "blackout sog-eseodo umjikyeo",
      "sangcheodo oneul bam noraega dwae",
      "feedback sogeseo nae moksorireul chajass-eo",
      "low endga uri-reul jip-euro deryeoga",
    ],
    chorusL2: "son-eul deulgo dosiui bitgwa chumchwo",
    chorusL4: "haega tteul ttaekkaji meomchuji ma",
    verse2: [
      "dwiro ganeun beoteun-eun eops-eo ap-euroman",
      "kkajjin sinho-do hana-ui chorusga dwae",
      "oraen duryeoumeul deo keun kkumeuro bakkwo",
      "bang an modeun geosi gateun groove-lo heundeullyeo",
    ],
    bridge: [
      "segye-ga joyonghaejyeodo bulssineun nam-a",
      "eodum sokeseodo urin jageugeul namgyeo",
    ],
  },
  ar: {
    titleA: ["Layl", "Noor", "Nabdh", "Sama", "Mawj", "Afaq", "Sout", "Shams", "Qamar", "Wajd"],
    titleB: ["Al Madina", "Fi Al Noor", "Al Jaded", "Al Aali", "Al Qalb", "Al Sari", "Al Huriya", "Al Layali", "Al Beat", "Al Amal"],
    action: [
      "arkud baidan an nuskhah al qadimah minni",
      "arqus wasat al dawda",
      "uhawwil al alam ila harakah",
      "akhtar al farah fawq al fawda",
      "abni mustaqbalan min sharar",
      "ajid al amal bayn anwar al shari",
    ],
    imagery: [
      "anwar al shari talma ka annaha aqmar sinaaiya",
      "ghubar al vinyl yadour fi al ghurfah",
      "al madina tanbidh ala iqa 4/4",
      "matar ala azzujaj mithl tasfiq",
      "kull darb qalb yaqaa ala al downbeat",
      "al bass yalwin al layl ila azraq",
    ],
    pre: [
      "ashur bi ann al daght yakhruj min sadri",
      "indama yadrib al iqa atadhakkar man ana",
    ],
    hooks: [
      "nartaqi hina yaud al beat",
      "hadhihi al laylah nughayyir kul shay",
      "nastamir fi al harakah fi al blackout",
      "juruhina tatallam al ghina alyawm",
      "wajadtu sawti fi al feedback",
      "da al bass yahmilna ila al bayt",
    ],
    chorusL2: "rafa al aydi wal madina talma",
    chorusL4: "lan natawaqaf hatta yatla ashshams",
    verse2: [
      "la zirr lil awdah, faqat nar ila al amam",
      "kull ishara maksura tusbih korus kabeer",
      "ubaddil khawfi al qadim bihilm aala",
      "wal kul fi al makan yataharrak ala nafs al iqa",
    ],
    bridge: [
      "hina yusbit al alam asma ashsharar",
      "hatta fi azzulma natruk atharana",
    ],
  },
  fil: {
    titleA: ["Gabi", "Liwanag", "Pintig", "Laya", "Alon", "Bughaw", "Tala", "Bituin", "Sigla", "Duyan"],
    titleB: ["ng Lungsod", "sa Dilim", "ng Puso", "sa Ulap", "na Walang Takot", "ng Ginto", "na Walang Hanggan", "ng Hamog", "ng Neon", "na Buhay"],
    action: [
      "tumatakbo palayo sa lumang ako",
      "sumasayaw sa gitna ng ingay",
      "ginagawang galaw ang sakit",
      "pinipili ang saya kaysa gulo",
      "gumagawa ng bukas mula sa kislap",
      "naghahanap ng pag asa sa ilaw trapiko",
    ],
    imagery: [
      "kumikislap ang ilaw parang satelayt",
      "umiikot ang alikabok ng plaka sa kwarto",
      "humihinga ang skyline sa apat na kumpas",
      "ang ulan sa salamin parang palakpak",
      "ang tibok tumatama sa downbeat",
      "ang bass kulay asul ang gabi",
    ],
    pre: [
      "Ramdam kong gumagaan ang dibdib",
      "Kapag tumama ang drums naalala ko kung sino ako",
    ],
    hooks: [
      "umaangat tayo pagbalik ng beat",
      "ngayong gabi babaliktarin natin",
      "tuloy pa rin kahit blackout",
      "natutong kumanta ang mga peklat ko",
      "nahanap ko ang boses ko sa feedback",
      "dalhin tayo ng low end pauwi",
    ],
    chorusL2: "taas kamay habang kumikislap ang lungsod",
    chorusL4: "hindi titigil hanggang sumikat ang araw",
    verse2: [
      "walang rewind, apoy lang pasulong",
      "bawat sirang signal nagiging koro",
      "palit takot para sa mas malakas na pangarap",
      "at sabay sabay gumagalaw ang buong kwarto",
    ],
    bridge: [
      "kapag tahimik ang mundo naririnig ko pa rin ang kislap",
      "kahit madilim nag iiwan pa rin tayo ng marka",
    ],
  },
};

function languageLabel(code) {
  return LANG_LABELS[code] || code.toUpperCase();
}

function weightedPick(rng, weightedItems) {
  const total = weightedItems.reduce((acc, row) => acc + Number(row.weight || 0), 0);
  if (total <= 0) {
    return weightedItems[0]?.code || "en";
  }
  const target = rng() * total;
  let running = 0;
  for (const row of weightedItems) {
    running += Number(row.weight || 0);
    if (target <= running) {
      return row.code;
    }
  }
  return weightedItems[weightedItems.length - 1]?.code || "en";
}

function countTokenUnits(line) {
  const trimmed = line.trim();
  if (!trimmed) {
    return 0;
  }
  const words = trimmed.split(/\s+/).filter(Boolean);
  if (words.length > 1) {
    return words.length;
  }
  return Math.max(1, Math.ceil(trimmed.length / 3));
}

function buildKaraokeTimeline(lyrics, durationSec) {
  const lines = lyrics
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("["));

  const units = lines.map((line) => countTokenUnits(line));
  const unitTotal = units.reduce((acc, value) => acc + value, 0) || lines.length;
  const activeDuration = Math.max(20, durationSec - 3);

  let cursor = 0;
  const timeline = [];
  for (let i = 0; i < lines.length; i += 1) {
    const fraction = units[i] / unitTotal;
    const lineDuration = Math.max(1.15, fraction * activeDuration);
    const startSec = Number(cursor.toFixed(2));
    const endSec = Number(Math.min(durationSec, cursor + lineDuration).toFixed(2));
    timeline.push({
      line: lines[i],
      startSec,
      endSec,
    });
    cursor = endSec;
  }

  if (timeline.length > 0) {
    timeline[timeline.length - 1].endSec = durationSec;
  }

  return timeline;
}

function buildTitle(rng, languageCode, usedTitles) {
  const words = WORDS_BY_LANG[languageCode] || WORDS_BY_LANG.en;
  let title = "";
  let attempts = 0;

  while (!title || usedTitles.has(title)) {
    const pattern = intInRange(rng, 0, 2);
    if (pattern === 0) {
      title = `${pick(rng, words.titleA)} ${pick(rng, words.titleB)}`;
    } else if (pattern === 1) {
      title = `${pick(rng, words.titleA)} ${pick(rng, words.titleB)} ${intInRange(rng, 2, 99)}`;
    } else {
      title = `${pick(rng, words.titleB)} ${pick(rng, words.titleA)}`;
    }
    attempts += 1;
    if (attempts > 8) {
      title = `${title} ${intInRange(rng, 100, 999)}`;
      break;
    }
  }

  usedTitles.add(title);
  return title;
}

function buildLyrics(rng, languageCode, mood, setting) {
  const bank = WORDS_BY_LANG[languageCode] || WORDS_BY_LANG.en;
  const hookA = pick(rng, bank.hooks);
  const hookB = pick(rng, bank.hooks);

  return [
    "[Verse 1]",
    `In ${setting}, ${pick(rng, bank.action)}`,
    pick(rng, bank.imagery),
    `${pick(rng, bank.action)} con mood ${mood}`,
    "Every step forward sounds like a choice",
    "",
    "[Pre-Chorus]",
    ...bank.pre,
    "",
    "[Chorus]",
    `${hookA}, ${hookA}`,
    bank.chorusL2,
    `${hookB}, ${hookB}`,
    bank.chorusL4,
    "",
    "[Verse 2]",
    ...bank.verse2,
    "",
    "[Bridge]",
    ...bank.bridge,
    "",
    "[Final Chorus]",
    `${hookA}, ${hookA}`,
    bank.chorusL2,
    `${hookB}, ${hookB}`,
    bank.chorusL4,
  ].join("\n");
}

function toCsvRows(songs) {
  const headers = [
    "id",
    "genreId",
    "genreName",
    "trackNumber",
    "title",
    "languageCode",
    "language",
    "bpm",
    "key",
    "timeSignature",
    "energy",
    "mood",
    "promptSuno",
    "promptUdio",
    "promptElevenLabs",
    "lyrics",
  ];

  const rows = [headers.join(",")];
  for (const song of songs) {
    const values = headers.map((header) => csvEscape(song[header] ?? ""));
    rows.push(values.join(","));
  }
  return rows.join("\n");
}

async function loadLanguageProfiles() {
  const raw = await fs.readFile(LANGUAGE_PROFILE_PATH, "utf8");
  return JSON.parse(raw);
}

function getLanguageWeights(languageProfiles, genreId) {
  if (languageProfiles?.profiles?.[genreId]) {
    return languageProfiles.profiles[genreId];
  }
  return languageProfiles?.default || [{ code: "en", weight: 1 }];
}

function buildSong({
  genre,
  genreIndex,
  songNumber,
  seed,
  songsPerGenre,
  usedTitles,
  languageCode,
}) {
  const seedKey = `${seed}:${genre.id}:${songNumber}:${languageCode}`;
  const rng = mulberry32(hashToUInt32(seedKey));
  const bpm = intInRange(rng, genre.bpmRange[0], genre.bpmRange[1]);
  const energy = intInRange(rng, genre.energyRange[0], genre.energyRange[1]);
  const mood = pick(rng, MOODS);
  const setting = pick(rng, SETTINGS);
  const key = pick(rng, ["A minor", "C major", "D minor", "E minor", "F major", "G major", "B minor"]);
  const timeSignature = pick(rng, ["4/4", "4/4", "4/4", "3/4", "6/8"]);
  const voiceProfile = pick(rng, VOICE_PROFILES);
  const instruments = pick(rng, INSTRUMENT_PACKS);
  const mixNote = pick(rng, MIX_NOTES);
  const title = buildTitle(rng, languageCode, usedTitles);
  const lyrics = buildLyrics(rng, languageCode, mood, setting);
  const durationSec = intInRange(rng, 155, 236);
  const karaokeTimeline = buildKaraokeTimeline(lyrics, durationSec);
  const releaseWave = `Wave-${String(Math.floor(songNumber / 25) + 1).padStart(2, "0")}`;
  const trackNumber = songNumber + 1;
  const trackId = `${genre.id}-${String(trackNumber).padStart(3, "0")}`;
  const language = languageLabel(languageCode);

  const sunoPrompt = [
    `Create an original ${genre.name} song with ${language} lyrics only.`,
    `Tempo ${bpm} BPM, key ${key}, time signature ${timeSignature}.`,
    `Energy ${energy}/100 and ${mood} mood.`,
    `Lead vocal: ${voiceProfile}.`,
    `Instrumentation: ${instruments}.`,
    "Arrangement: intro, verse, pre-chorus, chorus, verse 2, bridge, final chorus, outro.",
    "No references to existing artists, songs, melodies, or copyrighted lyrics.",
    `Mix direction: ${mixNote}.`,
  ].join(" ");

  const udioPrompt = [
    `${genre.name} with modern production and unique topline in ${language}.`,
    `${bpm} BPM, ${mood}, expressive vocals, memorable chorus.`,
    `Use ${instruments}.`,
    "Deliver radio-ready dynamics with a strong final chorus lift.",
    "Original composition only.",
  ].join(" ");

  const elevenLabsPrompt = [
    `Generate an original ${genre.name} track.`,
    `Language: ${language}.`,
    `Tempo: ${bpm} BPM.`,
    `Mood: ${mood}.`,
    `Lead vocal style: ${voiceProfile}.`,
    `Instrumentation: ${instruments}.`,
    "Use a clear chorus hook and polished modern mix.",
    "Do not imitate named artists or copyrighted songs.",
  ].join(" ");

  const beatVisualPrompt = [
    `${genre.name} animated beat screen`,
    `${bpm} BPM pulse`,
    `${mood} color movement`,
    "reactive bars and circular waveform",
    "high-contrast performance UI",
  ].join(", ");

  return {
    id: trackId,
    genreId: genre.id,
    genreName: genre.name,
    rank: genre.rank,
    trackNumber,
    title,
    durationSec,
    bpm,
    key,
    timeSignature,
    energy,
    mood,
    languageCode,
    language,
    voiceProfile,
    releaseWave,
    tags: [genre.id, mood, languageCode, `energy-${Math.floor(energy / 10) * 10}`],
    promptSuno: sunoPrompt,
    promptUdio: udioPrompt,
    promptElevenLabs: elevenLabsPrompt,
    beatVisualPrompt,
    lyrics,
    karaokeTimeline,
    licenseNote: "Original AI-generated draft. Review for legal/commercial policy before release.",
    generation: {
      seed,
      genreIndex,
      songNumber,
      songsPerGenre,
    },
  };
}

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  const manifestRaw = await fs.readFile(GENRE_MANIFEST_PATH, "utf8");
  const manifest = JSON.parse(manifestRaw);
  const languageProfiles = await loadLanguageProfiles();

  const allGenres = Array.isArray(manifest.genres) ? manifest.genres : [];
  if (allGenres.length === 0) {
    throw new Error("Genre manifest is empty.");
  }

  const selectedGenres = opts.genres.length > 0
    ? allGenres.filter((genre) => opts.genres.includes(genre.id))
    : allGenres;

  if (selectedGenres.length === 0) {
    throw new Error(`No genres matched. Requested: ${opts.genres.join(", ")}`);
  }

  await fs.mkdir(opts.outDir, { recursive: true });
  const startedAt = new Date().toISOString();
  const catalogSummary = {
    startedAt,
    seed: opts.seed,
    songsPerGenre: opts.songsPerGenre,
    genreCount: selectedGenres.length,
    totalSongs: selectedGenres.length * opts.songsPerGenre,
    outputs: [],
  };

  console.log(
    `[music-universe] generating ${catalogSummary.totalSongs} songs (${opts.songsPerGenre}/genre x ${selectedGenres.length} genres)`,
  );

  for (let gi = 0; gi < selectedGenres.length; gi += 1) {
    const genre = selectedGenres[gi];
    const songs = [];
    const usedTitles = new Set();
    const languageCounts = {};

    for (let si = 0; si < opts.songsPerGenre; si += 1) {
      const localRng = mulberry32(hashToUInt32(`${opts.seed}:${genre.id}:lang:${si}`));
      const languageWeights = getLanguageWeights(languageProfiles, genre.id);
      const languageCode = opts.forceLanguage || weightedPick(localRng, languageWeights);

      languageCounts[languageCode] = (languageCounts[languageCode] || 0) + 1;

      songs.push(
        buildSong({
          genre,
          genreIndex: gi,
          songNumber: si,
          seed: opts.seed,
          songsPerGenre: opts.songsPerGenre,
          usedTitles,
          languageCode,
        }),
      );
    }

    const genreDir = path.join(opts.outDir, genre.id);
    await fs.mkdir(genreDir, { recursive: true });

    const jsonPath = path.join(genreDir, "songs.json");
    const csvPath = path.join(genreDir, "songs.csv");
    const promptPath = path.join(genreDir, "suno-prompts.txt");
    const elevenJobsPath = path.join(genreDir, "elevenlabs-jobs.json");

    await fs.writeFile(
      jsonPath,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          seed: opts.seed,
          songsPerGenre: opts.songsPerGenre,
          genre,
          languageMix: languageCounts,
          songs,
        },
        null,
        2,
      ),
    );

    await fs.writeFile(csvPath, toCsvRows(songs));
    await fs.writeFile(
      promptPath,
      songs.map((song) => `## ${song.id} ${song.title} (${song.language})\n${song.promptSuno}\n`).join("\n"),
    );
    await fs.writeFile(
      elevenJobsPath,
      JSON.stringify(
        {
          generatedAt: new Date().toISOString(),
          provider: "elevenlabs",
          endpoint: "https://api.elevenlabs.io/v1/music",
          jobs: songs.map((song) => ({
            id: song.id,
            title: song.title,
            language: song.language,
            request: {
              prompt: song.promptElevenLabs,
              music_length_ms: Number(song.durationSec) * 1000,
            },
          })),
        },
        null,
        2,
      ),
    );

    catalogSummary.outputs.push({
      genreId: genre.id,
      genreName: genre.name,
      songs: songs.length,
      languageMix: languageCounts,
      jsonPath: path.relative(ROOT, jsonPath).replaceAll("\\", "/"),
      csvPath: path.relative(ROOT, csvPath).replaceAll("\\", "/"),
      promptsPath: path.relative(ROOT, promptPath).replaceAll("\\", "/"),
      elevenLabsJobsPath: path.relative(ROOT, elevenJobsPath).replaceAll("\\", "/"),
    });

    console.log(`[music-universe] ${genre.id} ${songs.length} songs | languages ${JSON.stringify(languageCounts)}`);
  }

  catalogSummary.completedAt = new Date().toISOString();

  const summaryPath = path.join(opts.outDir, "_catalog-summary.json");
  await fs.writeFile(summaryPath, JSON.stringify(catalogSummary, null, 2));

  const manifestOutPath = path.join(opts.outDir, "_genres-manifest.snapshot.json");
  await fs.writeFile(manifestOutPath, JSON.stringify(manifest, null, 2));

  const languageProfilesOutPath = path.join(opts.outDir, "_language-profiles.snapshot.json");
  await fs.writeFile(languageProfilesOutPath, JSON.stringify(languageProfiles, null, 2));

  console.log(`[music-universe] done: ${path.relative(ROOT, summaryPath).replaceAll("\\", "/")}`);
}

main().catch((error) => {
  console.error("[music-universe] FATAL:", error.message);
  process.exit(1);
});
