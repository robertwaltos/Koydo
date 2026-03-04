/**
 * Multilingual Companion Greetings
 *
 * Provides translated greeting messages for all route contexts.
 * Covers launch locales (en, es, zh, pl) with fallback to English.
 *
 * These supplement the pre-recorded MP3 greetings (English only)
 * and are used for:
 *  1. Cloud TTS fallback in non-English locales
 *  2. Chat bubble text in user's locale
 */

export type GreetingLocale = "en" | "es" | "zh" | "pl";

export interface LocalizedGreeting {
  messages: string[];
}

type RouteSlug =
  | "dashboard"
  | "lessons"
  | "explore"
  | "experience-hub"
  | "profile"
  | "exams"
  | "audiobooks"
  | "default"
  | "landing";

const GREETINGS: Record<GreetingLocale, Record<RouteSlug, LocalizedGreeting>> = {
  en: {
    dashboard: {
      messages: [
        "Welcome back! Ready to keep the streak going? 🔥",
        "Great to see you again! What are we learning today?",
        "You're doing amazing — let's dive back in! 📚",
      ],
    },
    lessons: {
      messages: [
        "You're in a lesson — nice! Let me know if you need help. 💡",
        "Learning mode activated! I'm right here if you get stuck. 🎓",
        "Focus up! This lesson is going to be great. 🚀",
      ],
    },
    explore: {
      messages: [
        "Exploring new topics? So exciting! 🌍",
        "There's so much to discover here! Can I help you find something? 🔍",
        "Curiosity is your superpower! What looks interesting? ✨",
      ],
    },
    "experience-hub": {
      messages: [
        "Time to level up with some challenges! 🎮",
        "The experience hub is where learning gets fun! Ready? 🏆",
        "Let's play and learn at the same time! 🌟",
      ],
    },
    profile: {
      messages: [
        "Looking at your profile? You've come so far! 🌟",
        "Your learning journey is really impressive! Keep going! 💪",
      ],
    },
    exams: {
      messages: [
        "Exam prep time! You've totally got this. 💪",
        "Let's make sure you're fully ready! I believe in you! 🎯",
      ],
    },
    audiobooks: {
      messages: [
        "Ready to listen and learn? Audiobooks are so cozy! 📖",
        "Sit back, relax, and let the knowledge flow in! 🎧",
      ],
    },
    default: {
      messages: [
        "Hi! I'm here if you need anything. 😊",
        "Hey! Let me know if I can help with anything! 💬",
        "I'm your learning buddy — always here for you! 🌟",
      ],
    },
    landing: {
      messages: [
        "Hi! I'm here to help you learn anything, at any age!",
      ],
    },
  },

  es: {
    dashboard: {
      messages: [
        "¡Hola de nuevo! ¿Listos para seguir aprendiendo? 🔥",
        "¡Qué bueno verte! ¿Qué vamos a aprender hoy?",
        "¡Lo estás haciendo genial! ¡Sigamos adelante! 📚",
      ],
    },
    lessons: {
      messages: [
        "¡Estás en una lección! Avísame si necesitas ayuda. 💡",
        "¡Modo aprendizaje activado! Estoy aquí para ayudarte. 🎓",
        "¡Concéntrate! Esta lección va a ser increíble. 🚀",
      ],
    },
    explore: {
      messages: [
        "¿Explorando temas nuevos? ¡Qué emocionante! 🌍",
        "¡Hay tanto por descubrir! ¿Te ayudo a encontrar algo? 🔍",
        "¡La curiosidad es tu superpoder! ¿Qué te parece interesante? ✨",
      ],
    },
    "experience-hub": {
      messages: [
        "¡Hora de subir de nivel con desafíos! 🎮",
        "¡Aquí es donde aprender se pone divertido! ¿Listos? 🏆",
        "¡Vamos a jugar y aprender al mismo tiempo! 🌟",
      ],
    },
    profile: {
      messages: [
        "¿Viendo tu perfil? ¡Has avanzado mucho! 🌟",
        "¡Tu progreso es impresionante! ¡Sigue así! 💪",
      ],
    },
    exams: {
      messages: [
        "¡Hora de preparar el examen! ¡Tú puedes! 💪",
        "¡Asegurémonos de que estás listo! ¡Creo en ti! 🎯",
      ],
    },
    audiobooks: {
      messages: [
        "¿Listos para escuchar y aprender? ¡Los audiolibros son geniales! 📖",
        "¡Relájate y deja que el conocimiento fluya! 🎧",
      ],
    },
    default: {
      messages: [
        "¡Hola! Estoy aquí si necesitas algo. 😊",
        "¡Hey! Dime si puedo ayudarte con algo. 💬",
        "¡Soy tu compañero de aprendizaje! Siempre aquí para ti. 🌟",
      ],
    },
    landing: {
      messages: [
        "¡Hola! Estoy aquí para ayudarte a aprender lo que quieras, a cualquier edad.",
      ],
    },
  },

  zh: {
    dashboard: {
      messages: [
        "欢迎回来！准备继续学习了吗？🔥",
        "很高兴再次见到你！今天我们学什么呢？",
        "你做得太棒了——继续加油吧！📚",
      ],
    },
    lessons: {
      messages: [
        "你正在上课——太好了！需要帮助随时告诉我。💡",
        "学习模式已开启！遇到困难我就在这里。🎓",
        "专注起来！这节课一定会很棒的。🚀",
      ],
    },
    explore: {
      messages: [
        "发现新话题？太令人兴奋了！🌍",
        "这里有好多东西可以探索！需要我帮你找吗？🔍",
        "好奇心是你的超能力！什么看起来有趣？✨",
      ],
    },
    "experience-hub": {
      messages: [
        "是时候通过挑战来升级了！🎮",
        "体验中心是学习变得有趣的地方！准备好了吗？🏆",
        "让我们边玩边学吧！🌟",
      ],
    },
    profile: {
      messages: [
        "在看你的个人资料？你已经进步了很多！🌟",
        "你的学习之旅真的很棒！继续加油！💪",
      ],
    },
    exams: {
      messages: [
        "考试准备时间！你一定行的。💪",
        "让我们确保你完全准备好！我相信你！🎯",
      ],
    },
    audiobooks: {
      messages: [
        "准备好听书学习了吗？有声书好温馨！📖",
        "放松一下，让知识流入大脑吧！🎧",
      ],
    },
    default: {
      messages: [
        "嗨！需要什么随时告诉我。😊",
        "你好！有什么我能帮忙的吗？💬",
        "我是你的学习伙伴——随时在你身边！🌟",
      ],
    },
    landing: {
      messages: [
        "你好！我在这里帮助你学习任何东西，不论年龄！",
      ],
    },
  },

  pl: {
    dashboard: {
      messages: [
        "Witaj z powrotem! Gotowy, żeby kontynuować naukę? 🔥",
        "Świetnie cię widzieć! Czego się dziś nauczymy?",
        "Świetnie ci idzie — kontynuujmy! 📚",
      ],
    },
    lessons: {
      messages: [
        "Jesteś na lekcji — super! Daj znać, jeśli potrzebujesz pomocy. 💡",
        "Tryb nauki włączony! Jestem tutaj, gdybyś się zaklinował. 🎓",
        "Skup się! Ta lekcja będzie świetna. 🚀",
      ],
    },
    explore: {
      messages: [
        "Odkrywasz nowe tematy? Jak ekscytująco! 🌍",
        "Jest tyle do odkrycia! Mogę ci pomóc coś znaleźć? 🔍",
        "Ciekawość to twoja supermoc! Co wygląda interesująco? ✨",
      ],
    },
    "experience-hub": {
      messages: [
        "Czas na nowe wyzwania! 🎮",
        "Centrum doświadczeń — tu nauka staje się zabawą! 🏆",
        "Bawmy się i uczmy jednocześnie! 🌟",
      ],
    },
    profile: {
      messages: [
        "Przeglądasz swój profil? Zaszedłeś tak daleko! 🌟",
        "Twoja droga nauki jest naprawdę imponująca! 💪",
      ],
    },
    exams: {
      messages: [
        "Czas na przygotowanie do egzaminu! Dasz radę! 💪",
        "Upewnijmy się, że jesteś gotowy! Wierzę w ciebie! 🎯",
      ],
    },
    audiobooks: {
      messages: [
        "Gotowy słuchać i uczyć się? Audiobooki to świetna sprawa! 📖",
        "Usiądź wygodnie i pozwól wiedzy do ciebie dotrzeć! 🎧",
      ],
    },
    default: {
      messages: [
        "Cześć! Jestem tutaj, jeśli czegoś potrzebujesz. 😊",
        "Hej! Daj znać, jeśli mogę w czymś pomóc! 💬",
        "Jestem twoim towarzyszem nauki — zawsze przy tobie! 🌟",
      ],
    },
    landing: {
      messages: [
        "Cześć! Jestem tutaj, żeby pomóc ci uczyć się wszystkiego, w każdym wieku!",
      ],
    },
  },
};

/**
 * Get a localized greeting for a route slug and locale.
 * Falls back to English if the locale or slug isn't found.
 */
export function getLocalizedGreeting(
  slug: RouteSlug,
  locale: GreetingLocale,
  seed: number,
): string {
  const localeGreetings = GREETINGS[locale] ?? GREETINGS.en;
  const routeGreetings = localeGreetings[slug] ?? localeGreetings.default;
  return routeGreetings.messages[seed % routeGreetings.messages.length]!;
}

/**
 * Get the count of greeting variants for a given slug and locale.
 */
export function getLocalizedGreetingCount(
  slug: RouteSlug,
  locale: GreetingLocale,
): number {
  const localeGreetings = GREETINGS[locale] ?? GREETINGS.en;
  const routeGreetings = localeGreetings[slug] ?? localeGreetings.default;
  return routeGreetings.messages.length;
}

/**
 * Check if a locale has greeting translations.
 */
export function hasGreetingLocale(locale: string): locale is GreetingLocale {
  return locale in GREETINGS;
}
