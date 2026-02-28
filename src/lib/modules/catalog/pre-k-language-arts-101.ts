import type { LearningModule } from "@/lib/modules/types";

/**
 * Pre-K Language Arts 101 — v4.0.0 (full rewrite)
 *
 * Full A-Z alphabet recognition with shape cues, phonics /
 * beginning sounds, rhyming word families, sight words —
 * age 3-5.
 *
 * 10 lessons: 6 video · 2 interactive · 2 quiz
 */
export const PreKLanguageArts101Module: LearningModule = {
  id: "pre-k-language-arts-101",
  title: "Pre-K Language Arts Explorers",
  description:
    "A playful introduction to letters A-Z, phonics, beginning sounds, rhyming word families, and sight words for children ages 3-5.",
  subject: "Reading",
  tags: ["pre-k", "curriculum", "interactive"],
  minAge: 3,
  maxAge: 5,
  moduleVersion: "4.0.0",
  version: "4.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en", "es"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Recognize and name all 26 uppercase letters by visual shape",
    "Identify the beginning sound of common words",
    "Understand rhyming and match rhyme pairs in word families",
    "Read basic sight words: the, is, a, I, my, and, to",
    "Match pictures to their beginning letter",
    "Use sight words in simple sentences",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Letters A-F  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l01",
      title: "Letters A through F",
      type: "video",
      duration: 8,
      objectives: [
        "Recognize uppercase letters A, B, C, D, E, and F by shape",
        "Name an object that starts with each letter",
        "Say the beginning sound for each letter",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l01-c1",
          title: "Letters A and B",
          content:
            "Letter A looks like a pointed tent with a line across the middle. Apple and ant start with A — say /a/! Letter B looks like two round bumps stacked on a line. Ball and bee start with B — say /b/!",
        },
        {
          id: "pre-k-language-arts-101-l01-c2",
          title: "Letters C and D",
          content:
            "Letter C is a big curve like a half moon. Cat and car start with C — say /k/! Letter D is a straight line with a big half-circle on the right. Dog and duck start with D — say /d/!",
        },
        {
          id: "pre-k-language-arts-101-l01-c3",
          title: "Letters E and F",
          content:
            "Letter E looks like a comb with three teeth pointing right. Egg and elephant start with E — say /e/! Letter F looks like E but with only two teeth. Fish and frog start with F — say /f/!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l01-fc1",
          front: "What letter does apple start with?",
          back: "A — it looks like a pointed tent with a line across the middle",
        },
        {
          id: "pre-k-language-arts-101-l01-fc2",
          front: "What letter does cat start with?",
          back: "C — it is a big curve like a half moon",
        },
        {
          id: "pre-k-language-arts-101-l01-fc3",
          front: "What letter does fish start with?",
          back: "F — it looks like E but with only two teeth",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Letters G-M  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l02",
      title: "Letters G through M",
      type: "video",
      duration: 8,
      objectives: [
        "Recognize uppercase letters G through M by shape",
        "Name an object that starts with each letter",
        "Say the beginning sound for each letter",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l02-c1",
          title: "Letters G, H, and I",
          content:
            "Letter G is like a C with a little shelf inside. Goat and grapes start with G — say /g/! Letter H is two tall lines with a bridge in the middle. House and hat start with H — say /h/! Letter I is a tall line with a hat on top and shoes on the bottom. Igloo and ice cream start with I — say /i/!",
        },
        {
          id: "pre-k-language-arts-101-l02-c2",
          title: "Letters J, K, and L",
          content:
            "Letter J is a candy cane — a line that curves at the bottom. Jam and jump start with J — say /j/! Letter K is a tall line with two arms reaching out. Kite and king start with K — say /k/! Letter L is a tall line with a short foot. Lion and lemon start with L — say /l/!",
        },
        {
          id: "pre-k-language-arts-101-l02-c3",
          title: "Letter M",
          content:
            "Letter M has two tall peaks like mountains. Moon and monkey start with M — say /m/! M is a wide letter — it takes up more space than most other letters. Try drawing M in the air with your finger: down, up to a peak, down to a valley, up to another peak, and down!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l02-fc1",
          front: "What letter does goat start with?",
          back: "G — it looks like a C with a little shelf inside",
        },
        {
          id: "pre-k-language-arts-101-l02-fc2",
          front: "What letter does kite start with?",
          back: "K — it is a tall line with two arms reaching out",
        },
        {
          id: "pre-k-language-arts-101-l02-fc3",
          front: "What letter has two peaks like mountains?",
          back: "M — moon and monkey start with M",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Letter Matching Activity  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l03",
      title: "Letter Matching Activity",
      type: "interactive",
      duration: 10,
      objectives: [
        "Match pictures to their starting letter A through M",
        "Sort vowels from consonants",
      ],
      interactiveActivities: [
        {
          id: "pre-k-language-arts-101-l03-ia1",
          type: "matching_pairs",
          title: "Match Picture to Letter",
          description:
            "Match each picture to the letter it starts with.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "Apple", right: "A" },
              { id: "p2", left: "Dog", right: "D" },
              { id: "p3", left: "Fish", right: "F" },
              { id: "p4", left: "House", right: "H" },
              { id: "p5", left: "Lion", right: "L" },
            ],
          },
        },
        {
          id: "pre-k-language-arts-101-l03-ia2",
          type: "sorting_buckets",
          title: "Vowel or Consonant?",
          description:
            "Sort each letter into the Vowels bucket or the Consonants bucket.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "b1", label: "Vowels (A E I O U)" },
              { id: "b2", label: "Consonants" },
            ],
            items: [
              { id: "i1", label: "A", correctBucketId: "b1" },
              { id: "i2", label: "B", correctBucketId: "b2" },
              { id: "i3", label: "E", correctBucketId: "b1" },
              { id: "i4", label: "D", correctBucketId: "b2" },
              { id: "i5", label: "I", correctBucketId: "b1" },
              { id: "i6", label: "F", correctBucketId: "b2" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Letters N-T  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l04",
      title: "Letters N through T",
      type: "video",
      duration: 8,
      objectives: [
        "Recognize uppercase letters N through T by shape",
        "Name an object that starts with each letter",
        "Say the beginning sound for each letter",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l04-c1",
          title: "Letters N, O, and P",
          content:
            "Letter N is two tall lines with a slanted bridge between them. Nut and nest start with N — say /n/! Letter O is a perfect round circle. Orange and octopus start with O — say /o/! Letter P is a tall line with a round bump on top. Panda and pie start with P — say /p/!",
        },
        {
          id: "pre-k-language-arts-101-l04-c2",
          title: "Letters Q and R",
          content:
            "Letter Q is a circle with a little tail at the bottom. Queen and question start with Q — say /kw/! Q almost always has its best friend U right next to it. Letter R looks like P but with a leg kicking out. Rabbit and rose start with R — say /r/!",
        },
        {
          id: "pre-k-language-arts-101-l04-c3",
          title: "Letters S and T",
          content:
            "Letter S is a curvy snake — it wiggles from top to bottom. Snake and sun start with S — say /s/! Letter T is a tall line with a flat hat on top, like a cross. Turtle and tree start with T — say /t/!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l04-fc1",
          front: "What letter is a perfect round circle?",
          back: "O — orange and octopus start with O",
        },
        {
          id: "pre-k-language-arts-101-l04-fc2",
          front: "What letter is a curvy snake?",
          back: "S — snake and sun start with S",
        },
        {
          id: "pre-k-language-arts-101-l04-fc3",
          front: "What letter always has U as its best friend?",
          back: "Q — queen and question start with QU",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Letters & Sounds Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l05",
      title: "Letters & Sounds Checkpoint",
      type: "quiz",
      duration: 8,
      questions: [
        {
          id: "pre-k-language-arts-101-l05-q1",
          text: "Which letter starts the word apple?",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
            { id: "d", text: "D" },
          ],
          correctOptionId: "a",
          explanation:
            "Apple starts with A! A looks like a pointed tent with a line across the middle.",
        },
        {
          id: "pre-k-language-arts-101-l05-q2",
          text: "Which letter looks like a big curved half moon?",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
            { id: "d", text: "E" },
          ],
          correctOptionId: "c",
          explanation:
            "Letter C is a big curve like a half moon. Cat and car start with C!",
        },
        {
          id: "pre-k-language-arts-101-l05-q3",
          text: "Which letter is a curvy snake?",
          options: [
            { id: "a", text: "P" },
            { id: "b", text: "R" },
            { id: "c", text: "S" },
            { id: "d", text: "T" },
          ],
          correctOptionId: "c",
          explanation:
            "Letter S wiggles like a snake! Snake and sun start with S.",
        },
        {
          id: "pre-k-language-arts-101-l05-q4",
          text: "What sound does the letter B make?",
          options: [
            { id: "a", text: "/b/ like ball" },
            { id: "b", text: "/s/ like sun" },
            { id: "c", text: "/m/ like moon" },
            { id: "d", text: "/t/ like tree" },
          ],
          correctOptionId: "a",
          explanation:
            "B says /b/ like ball, bee, and banana!",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Letters U-Z  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l06",
      title: "Letters U through Z",
      type: "video",
      duration: 8,
      objectives: [
        "Recognize uppercase letters U through Z by shape",
        "Name an object that starts with each letter",
        "Complete the full A-Z alphabet",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l06-c1",
          title: "Letters U and V",
          content:
            "Letter U looks like a cup or a smile. Umbrella and unicorn start with U — say /u/! Letter V looks like a bird flying — two lines meeting at a point at the bottom. Volcano and violin start with V — say /v/!",
        },
        {
          id: "pre-k-language-arts-101-l06-c2",
          title: "Letters W and X",
          content:
            "Letter W looks like two V's side by side — it is the widest letter! Water and wolf start with W — say /w/! Letter X is two lines crossing in the middle, like a treasure map mark. X-ray starts with X — say /ks/!",
        },
        {
          id: "pre-k-language-arts-101-l06-c3",
          title: "Letters Y and Z",
          content:
            "Letter Y looks like a slingshot or a fork with two arms up. Yarn and yellow start with Y — say /y/! Letter Z goes zigzag: across, down slanted, across again. Zebra and zipper start with Z — say /z/! Now you know ALL 26 letters from A to Z!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l06-fc1",
          front: "What letter does umbrella start with?",
          back: "U — it looks like a cup or a smile",
        },
        {
          id: "pre-k-language-arts-101-l06-fc2",
          front: "What letter does zebra start with?",
          back: "Z — the last letter of the alphabet, it goes zigzag",
        },
        {
          id: "pre-k-language-arts-101-l06-fc3",
          front: "How many letters are in the alphabet?",
          back: "26 letters — from A to Z",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  Rhyming Words  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l07",
      title: "Rhyming Words",
      type: "video",
      duration: 8,
      objectives: [
        "Understand what rhyming means — words that sound alike at the end",
        "Identify rhyming pairs in -at, -an, and -ig word families",
        "Create new rhyming words by changing the first letter",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l07-c1",
          title: "What Is Rhyming?",
          content:
            "Rhyming words sound the same at the END. Cat and hat rhyme — they both end with -at! Dog and log rhyme — they both end with -og! When words rhyme, they are like a song. Rhyming is fun because it helps your brain remember words!",
        },
        {
          id: "pre-k-language-arts-101-l07-c2",
          title: "The -at and -an Families",
          content:
            "The -at family: cat, hat, bat, mat, sat. They all end with -at! Change the first letter and you get a new word. The -an family: can, man, van, pan, fan, ran. They all end with -an! Say them fast: can-man-van-pan!",
        },
        {
          id: "pre-k-language-arts-101-l07-c3",
          title: "The -ig and -og Families",
          content:
            "The -ig family: pig, wig, big, dig. They all end with -ig! The -og family: dog, log, frog, fog. They all end with -og! To find a rhyme, listen to the END of the word. If the endings sound the same, the words rhyme!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l07-fc1",
          front: "What does rhyming mean?",
          back: "Words that sound the same at the END — like cat and hat",
        },
        {
          id: "pre-k-language-arts-101-l07-fc2",
          front: "What rhymes with cat?",
          back: "Hat, bat, mat, sat — they all end with -at",
        },
        {
          id: "pre-k-language-arts-101-l07-fc3",
          front: "What rhymes with pig?",
          back: "Wig, big, dig — they all end with -ig",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Sight Words  (video)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l08",
      title: "Sight Words",
      type: "video",
      duration: 8,
      objectives: [
        "Read basic sight words: the, is, a, I, my, and, to",
        "Recognize sight words by sight without sounding them out",
        "Use sight words in simple sentences",
      ],
      chunks: [
        {
          id: "pre-k-language-arts-101-l08-c1",
          title: "What Are Sight Words?",
          content:
            "Sight words are little words you read FAST just by looking at them. You do not need to sound them out letter by letter. Words like THE, IS, A, and I are sight words. You will see them in almost every book you read!",
        },
        {
          id: "pre-k-language-arts-101-l08-c2",
          title: "Our First Sight Words",
          content:
            "Let's learn seven sight words: THE — the most common word in English! IS — tells us what something is. A — means one of something. I — that is YOU talking about yourself! MY — means it belongs to you. AND — connects two things. TO — means going somewhere. Say each one: the, is, a, I, my, and, to!",
        },
        {
          id: "pre-k-language-arts-101-l08-c3",
          title: "Sight Words in Sentences",
          content:
            "Now let's use our sight words! 'The cat is big.' 'I see a dog.' 'My ball is red.' 'I go to the park and play.' See how many sight words are in each sentence? The more you practice reading them, the faster you will be!",
        },
      ],
      flashcards: [
        {
          id: "pre-k-language-arts-101-l08-fc1",
          front: "What are sight words?",
          back: "Little words you read fast by looking at them — the, is, a, I, my, and, to",
        },
        {
          id: "pre-k-language-arts-101-l08-fc2",
          front: "Read this: The cat is big.",
          back: "THE is a sight word, IS is a sight word — two sight words in one sentence!",
        },
        {
          id: "pre-k-language-arts-101-l08-fc3",
          front: "What sight word means 'belonging to me'?",
          back: "MY — as in 'my dog' or 'my toy'",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Rhyming & Sight Word Games  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l09",
      title: "Rhyming & Sight Word Games",
      type: "interactive",
      duration: 10,
      objectives: [
        "Match rhyming word pairs",
        "Sort sight words from regular words",
      ],
      interactiveActivities: [
        {
          id: "pre-k-language-arts-101-l09-ia1",
          type: "matching_pairs",
          title: "Rhyming Pairs Match",
          description:
            "Match each word to its rhyming partner.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "cat", right: "hat" },
              { id: "p2", left: "can", right: "van" },
              { id: "p3", left: "pig", right: "wig" },
              { id: "p4", left: "dog", right: "log" },
            ],
          },
        },
        {
          id: "pre-k-language-arts-101-l09-ia2",
          type: "sorting_buckets",
          title: "Sight Word or Not?",
          description:
            "Sort each word into the Sight Words bucket or the Regular Words bucket.",
          estimatedMinutes: 4,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "b1", label: "Sight Words" },
              { id: "b2", label: "Regular Words" },
            ],
            items: [
              { id: "i1", label: "the", correctBucketId: "b1" },
              { id: "i2", label: "apple", correctBucketId: "b2" },
              { id: "i3", label: "is", correctBucketId: "b1" },
              { id: "i4", label: "zebra", correctBucketId: "b2" },
              { id: "i5", label: "my", correctBucketId: "b1" },
              { id: "i6", label: "turtle", correctBucketId: "b2" },
            ],
          },
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Language Arts Celebration Quiz  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "pre-k-language-arts-101-l10",
      title: "Language Arts Celebration Quiz",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "pre-k-language-arts-101-l10-q1",
          text: "Which letter starts the word umbrella?",
          options: [
            { id: "a", text: "U" },
            { id: "b", text: "V" },
            { id: "c", text: "W" },
            { id: "d", text: "X" },
          ],
          correctOptionId: "a",
          explanation:
            "Umbrella starts with U! U looks like a cup or a smile.",
        },
        {
          id: "pre-k-language-arts-101-l10-q2",
          text: "Which words rhyme?",
          options: [
            { id: "a", text: "cat and hat" },
            { id: "b", text: "dog and sun" },
            { id: "c", text: "bird and car" },
            { id: "d", text: "tree and ball" },
          ],
          correctOptionId: "a",
          explanation:
            "Cat and hat both end with -at, so they rhyme! They sound the same at the end.",
        },
        {
          id: "pre-k-language-arts-101-l10-q3",
          text: "Which is a sight word?",
          options: [
            { id: "a", text: "the" },
            { id: "b", text: "elephant" },
            { id: "c", text: "zebra" },
            { id: "d", text: "turtle" },
          ],
          correctOptionId: "a",
          explanation:
            "'The' is a sight word — a little word you read fast just by looking at it!",
        },
        {
          id: "pre-k-language-arts-101-l10-q4",
          text: "Which letter starts the word zebra?",
          options: [
            { id: "a", text: "Y" },
            { id: "b", text: "X" },
            { id: "c", text: "Z" },
            { id: "d", text: "W" },
          ],
          correctOptionId: "c",
          explanation:
            "Zebra starts with Z — the last letter of the alphabet!",
        },
        {
          id: "pre-k-language-arts-101-l10-q5",
          text: "What word rhymes with pig?",
          options: [
            { id: "a", text: "wig" },
            { id: "b", text: "cat" },
            { id: "c", text: "sun" },
            { id: "d", text: "dog" },
          ],
          correctOptionId: "a",
          explanation:
            "Pig and wig both end with -ig, so they rhyme!",
        },
        {
          id: "pre-k-language-arts-101-l10-q6",
          text: "How many letters are in the alphabet?",
          options: [
            { id: "a", text: "10" },
            { id: "b", text: "20" },
            { id: "c", text: "26" },
            { id: "d", text: "30" },
          ],
          correctOptionId: "c",
          explanation:
            "There are 26 letters in the English alphabet — from A all the way to Z!",
        },
      ],
    },
  ],
};
