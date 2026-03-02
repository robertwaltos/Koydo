/**
 * getModuleThumbnail
 *
 * Returns a subject-appropriate Unsplash cover image URL for any module,
 * replacing the `/placeholders/lesson-robot.svg` default that appears across
 * ~200+ catalog modules without AI-generated thumbnails.
 *
 * Priority:
 *   1. If existingThumbnail is a real (non-placeholder) URL → return it unchanged.
 *   2. Walk SUBJECT_PHOTOS matching moduleId keywords → return matched Unsplash URL.
 *   3. Fallback: Aria's classroom background photo.
 */

const UNSPLASH_BASE = "https://images.unsplash.com/photo-";
const UNSPLASH_PARAMS = "?w=640&q=70&auto=format&fit=crop";
const PLACEHOLDER = "/placeholders/lesson-robot.svg";
const FALLBACK_PHOTO = "1580582932707-520aed937b7b"; // Aria's classroom

function url(photoId: string) {
  return `${UNSPLASH_BASE}${photoId}${UNSPLASH_PARAMS}`;
}

/** keyword → Unsplash photo ID */
const SUBJECT_PHOTOS: Array<[string | RegExp, string]> = [
  // Mathematics
  [/math|calculus|algebra|geometry|statistics|probability|arithmetic|number/, "1509228468518-4a4b4b4b4b4b"],
  [/fraction|decimal|percent/, "1509228468518-4a4b4b4b4b4b"],
  // Language & Literacy
  [/language|literacy|reading|phonics|grammar|writing|essay|vocabulary/, "1507842217343-583bb7270b66"],
  [/english|esl|ielts|toefl/, "1507842217343-583bb7270b66"],
  // Science
  [/science|biology|ecology|evolution|genetics|cell/, "1507413093151-f4e7c7e2c6ff"],
  [/chemistry|chemical|atom|molecule|periodic/, "1532187863486-abf9dbad1b69"],
  [/physics|force|motion|energy|wave|quantum|optics/, "1635070041079-d5aad4e40ac9"],
  [/earth|geology|rock|mineral|fossil|earthquake/, "1506905925346-21bda4d32df4"],
  [/environment|climate|weather|meteorol|atmosphere/, "1504608524841-42785c15b5d4"],
  [/astronomy|space|star|planet|solar|galaxy|universe|cosmos/, "1446776811953-b23d57bd21aa"],
  [/biology|anatomy|human body|organ|cell/, "1530026405845-bce6819be66c"],
  // Engineering & Technology
  [/engineer|mechanical|structural|civil|aerospace/, "1581094794329-c811a6f6b8e6"],
  [/electrical|circuit|electron|microelectronics|semiconductor/, "1518770660439-4636190af475"],
  [/coding|programming|computer|software|javascript|python|java|linux|windows|macos|web dev/, "1461749280684-dccba630e2f6"],
  [/ai|machine.learn|deep.learn|neural|data.sci/, "1555949963-ff9fe0c870eb"],
  [/cyber|security|hacking|encrypt|infosec|network.sec/, "1550751827-4bd374173717"],
  [/robotics|drone|automation|iot|embedded/, "1485827404703-89b55fcc595e"],
  [/cloud|aws|azure|gcp|devops|kubernetes|docker/, "1451187580459-43490279c0fa"],
  [/network|tcp|ip|routing|wireless|wifi|protocol/, "1558618666-fcd25c85cd64"],
  [/data|database|sql|nosql|analytics|hadoop|spark/, "1544197150-b99a580bb6e2"],
  // Medicine & Health
  [/medicine|medical|doctor|nurse|hospital|pharmacology|anatomy/, "1559757148-5c350d0d3c5b"],
  [/nutrition|diet|food|health|fitness|exercise|yoga|wellness/, "1490645935967-10de6ba17061"],
  [/psychology|mental.health|therapy|counseling|brain|cognitive/, "1507003211169-0a1dd7228f2d"],
  // Social Sciences
  [/history|ancient|medieval|world.war|revolution|civilization/, "1461360228754-6e81c478b882"],
  [/geography|map|culture|country|nation|travel|region/, "1521295121783-8a321d551ad2"],
  [/economics|macroeconomics|microeconomics|gdp|inflation|market/, "1611974789855-9c2a0a7236a3"],
  [/business|entrepreneurship|startup|venture|management/, "1454165804606-c3d57bc86b40"],
  [/finance|accounting|tax|investment|stock|bond|money/, "1611974789855-9c2a0a7236a3"],
  [/marketing|branding|advertising|seo|social.media/, "1432888622747-4eb9a8efeb07"],
  [/law|legal|constitution|court|justice|contract/, "1505664194779-8beaceb88e47"],
  [/social.stud|civics|government|democracy|politics/, "1529107386315-e1a2410a5a20"],
  [/philosophy|ethics|logic|critical.think|epistemology/, "1456324504499-f28e2abd9b5a"],
  [/sociology|anthropology|culture|society/, "1529107386315-e1a2410a5a20"],
  // Arts & Creativity
  [/art|drawing|painting|sculpture|visual.art|design/, "1513364776144-60967b0f800f"],
  [/music|guitar|piano|violin|orchestra|singing|band/, "1511379938547-c1f69419868d"],
  [/theater|drama|acting|performance|play/, "1470229722913-7c0e2dbbafd3"],
  [/literature|novel|poetry|fiction|author|shakespeare/, "1553729459-efe14ef6055d"],
  [/film|movie|cinema|photography|video|animation/, "1485846047031-b0cbc28b5c9a"],
  // Pre-K & Early Childhood
  [/prek|pre.k|preschool|kindergarten|toddler|early.child/, "1503454537195-1dcabb73ffb9"],
  [/social|emotion|feeling|friendship|life.skill/, "1503454537195-1dcabb73ffb9"],
  [/creative|craft|play|imagination/, "1503454537195-1dcabb73ffb9"],
  // STEM / Special
  [/agricultural|farming|crop|soil|sustainable/, "1500651558407-70eab58bb6d5"],
  [/architecture|urban|city.plan|building.design/, "1486325212027-8081e485255e"],
  [/supply.chain|logistics|operations/, "1494412651409-8c9d64f3e7ef"],
  [/leadership|management|team/, "1552664730-d307ca884978"],
  // Exam prep
  [/sat|act|gcse|ib |ap |exam.prep|test.prep/, "1434030216411-0b793f4b6f6e"],
];

export function getModuleThumbnail(moduleId: string, existingThumbnail: string | null): string {
  // Preserve real thumbnails (non-placeholder)
  if (existingThumbnail && existingThumbnail !== PLACEHOLDER && existingThumbnail.startsWith("http")) {
    return existingThumbnail;
  }

  const id = moduleId.toLowerCase();

  for (const [pattern, photoId] of SUBJECT_PHOTOS) {
    const matches =
      typeof pattern === "string" ? id.includes(pattern) : pattern.test(id);
    if (matches) {
      return url(photoId);
    }
  }

  // Fallback: Aria's classroom
  return url(FALLBACK_PHOTO);
}
