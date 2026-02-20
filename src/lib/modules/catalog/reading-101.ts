import type { LearningModule } from "@/lib/modules/types";

export const reading101Module: LearningModule = {
  id: "reading-101",
  title: "The Alphabet",
  description: "Master alphabet recognition, letter sounds, and early word-building routines.",
  subject: "Reading",
  tags: ["phonics", "literacy", "interactive"],
  minAge: 4,
  maxAge: 9,
  version: "1.1.0",
  learningObjectives: [
    "Recognize uppercase and lowercase letters A-Z.",
    "Match common beginning sounds to letters.",
    "Blend simple consonant-vowel-consonant words.",
  ],
  lessons: [
    {
      id: "r101-l1",
      title: "Video: Letters A-M",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "r101-l1-a1", type: "image", title: "Alphabet Strip A-M", content: "Large-print letter strip with matching picture clues." },
        { id: "r101-l1-a2", type: "mnemonic", title: "Sky-Grass-Dirt Lines", content: "Use writing lines to place letters correctly." },
      ],
    },
    {
      id: "r101-l2",
      title: "Interactive: Letter Tracing Lab",
      type: "interactive",
      duration: 7,
      metadata: {
        prompts: [
          "Trace each letter in A-M and say its name out loud.",
          "Pick three letters and match each to a word that starts with it.",
          "Explain which letter shape was easiest and why.",
        ],
      },
      learningAids: [
        { id: "r101-l2-a1", type: "practice", title: "Trace and Match", content: "Trace letters and drag matching picture cards." },
      ],
    },
    {
      id: "r101-l3",
      title: "Checkpoint Quiz: Letters A-M",
      type: "quiz",
      duration: 9,
      questions: [
        {
          id: "r101-l3-q1",
          text: "Which letter comes after C?",
          skillId: "alphabet-sequence",
          options: [
            { id: "a", text: "B" },
            { id: "b", text: "D" },
            { id: "c", text: "E" },
            { id: "d", text: "F" },
          ],
          correctOptionId: "b",
        },
        {
          id: "r101-l3-q2",
          text: "Which lowercase letter matches uppercase G?",
          skillId: "letter-matching",
          options: [
            { id: "a", text: "g" },
            { id: "b", text: "q" },
            { id: "c", text: "p" },
            { id: "d", text: "b" },
          ],
          correctOptionId: "a",
        },
        {
          id: "r101-l3-q3",
          text: "Which letter starts the word 'cat'?",
          skillId: "phonics",
          options: [
            { id: "a", text: "B" },
            { id: "b", text: "C" },
            { id: "c", text: "D" },
            { id: "d", text: "K" },
          ],
          correctOptionId: "b",
        },
        {
          id: "r101-l3-q4",
          text: "Which letter is in the first half of the alphabet?",
          skillId: "alphabet-sequence",
          options: [
            { id: "a", text: "R" },
            { id: "b", text: "T" },
            { id: "c", text: "L" },
            { id: "d", text: "W" },
          ],
          correctOptionId: "c",
        },
      ],
      learningAids: [
        { id: "r101-l3-a1", type: "practice", title: "Letter Flash Round", content: "Timed flashcard drill for A-M recognition." },
      ],
    },
    {
      id: "r101-l4",
      title: "Video: Letters N-Z",
      type: "video",
      duration: 9,
      learningAids: [
        { id: "r101-l4-a1", type: "image", title: "Alphabet Strip N-Z", content: "Letter strip with object pictures for N through Z." },
      ],
    },
    {
      id: "r101-l5",
      title: "Interactive: Sound Hunt",
      type: "interactive",
      duration: 8,
      metadata: {
        prompts: [
          "Listen to a beginning sound and choose the matching letter.",
          "Find two objects in your room that start with the same sound.",
          "Explain the difference between letter name and letter sound.",
        ],
      },
      learningAids: [
        { id: "r101-l5-a1", type: "animation", title: "Sound Pop", content: "Animated mouth cues for common beginning sounds." },
      ],
    },
    {
      id: "r101-l6",
      title: "Checkpoint Quiz: Letter Sounds",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "r101-l6-q1",
          text: 'What sound does the letter "C" make?',
          skillId: "phonics",
          options: [
            { id: "a", text: "/s/" },
            { id: "b", text: "/k/" },
            { id: "c", text: "Both A and B" },
            { id: "d", text: "/m/" },
          ],
          correctOptionId: "c",
        },
        {
          id: "r101-l6-q2",
          text: "Which letter most often starts the word 'fish'?",
          skillId: "phonics",
          options: [
            { id: "a", text: "F" },
            { id: "b", text: "V" },
            { id: "c", text: "P" },
            { id: "d", text: "B" },
          ],
          correctOptionId: "a",
        },
        {
          id: "r101-l6-q3",
          text: "Which word starts with the same sound as 'sun'?",
          skillId: "phonics",
          options: [
            { id: "a", text: "moon" },
            { id: "b", text: "sock" },
            { id: "c", text: "rain" },
            { id: "d", text: "tree" },
          ],
          correctOptionId: "b",
        },
        {
          id: "r101-l6-q4",
          text: "What letter comes right before Z?",
          skillId: "alphabet-sequence",
          options: [
            { id: "a", text: "X" },
            { id: "b", text: "Y" },
            { id: "c", text: "W" },
            { id: "d", text: "V" },
          ],
          correctOptionId: "b",
        },
      ],
    },
    {
      id: "r101-l7",
      title: "Video: Build Simple CVC Words",
      type: "video",
      duration: 8,
      learningAids: [
        { id: "r101-l7-a1", type: "image", title: "Word Family Board", content: "Use -at, -an, and -op word families for quick blending." },
      ],
    },
    {
      id: "r101-l8",
      title: "Mastery Quiz: Alphabet and Sounds",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "r101-l8-q1",
          text: "Which uppercase letter matches lowercase 'm'?",
          skillId: "letter-matching",
          options: [
            { id: "a", text: "N" },
            { id: "b", text: "M" },
            { id: "c", text: "W" },
            { id: "d", text: "H" },
          ],
          correctOptionId: "b",
        },
        {
          id: "r101-l8-q2",
          text: "Which word starts with the /b/ sound?",
          skillId: "phonics",
          options: [
            { id: "a", text: "ball" },
            { id: "b", text: "sun" },
            { id: "c", text: "cat" },
            { id: "d", text: "moon" },
          ],
          correctOptionId: "a",
        },
        {
          id: "r101-l8-q3",
          text: "Which letters blend to make the word 'cat'?",
          skillId: "cvc-blending",
          options: [
            { id: "a", text: "c-a-t" },
            { id: "b", text: "c-o-t" },
            { id: "c", text: "k-a-n" },
            { id: "d", text: "c-u-p" },
          ],
          correctOptionId: "a",
        },
        {
          id: "r101-l8-q4",
          text: "Which letter comes between H and J?",
          skillId: "alphabet-sequence",
          options: [
            { id: "a", text: "G" },
            { id: "b", text: "I" },
            { id: "c", text: "K" },
            { id: "d", text: "L" },
          ],
          correctOptionId: "b",
        },
        {
          id: "r101-l8-q5",
          text: "What is the first sound in the word 'zebra'?",
          skillId: "phonics",
          options: [
            { id: "a", text: "/s/" },
            { id: "b", text: "/z/" },
            { id: "c", text: "/b/" },
            { id: "d", text: "/r/" },
          ],
          correctOptionId: "b",
        },
      ],
    },
  ],
};
