import type { LearningModule } from "@/lib/modules/types";

export const MusicTheory101Module: LearningModule = {
  id: "music-theory-101",
  title: "Music Theory Foundations",
  description:
    "Learn to read music, understand rhythm, identify notes on the staff, and play basic scales. Build the vocabulary every musician needs.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music"],
  minAge: 7,
  maxAge: 12,
  moduleVersion: "2.0.0",
  version: "2.0.0",
  learningObjectives: [
    "Identify the lines and spaces of the treble and bass clef",
    "Read and write note values from whole notes to eighth notes",
    "Clap and count rhythms in 4/4 and 3/4 time signatures",
    "Name and play the C major scale ascending and descending",
    "Recognize basic dynamic markings and tempo terms",
    "Understand the structure of a musical staff, measures, and bar lines",
    "Apply note-reading skills to a simple melody"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  The Musical Staff  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l01",
      title: "The Musical Staff",
      type: "video",
      duration: 10,
      objectives: [
        "Identify the five lines and four spaces of a staff",
        "Explain the purpose of the treble clef and bass clef",
        "Name the notes on the treble clef lines and spaces"
      ],
      chunks: [
        {
          id: "music-theory-101-l01-c1",
          title: "What Is a Staff?",
          content:
            "Music is written on a set of five horizontal lines called a staff (plural: staves). Notes sit on lines or in the spaces between them. The higher a note is placed on the staff, the higher it sounds. A staff by itself doesn't tell us which notes are which — we need a clef symbol at the beginning."
        },
        {
          id: "music-theory-101-l01-c2",
          title: "The Treble Clef",
          content:
            "The treble clef (also called the G clef) curls around the second line of the staff, marking it as the note G. The treble clef is used for higher-pitched instruments and voices. The lines from bottom to top spell E-G-B-D-F (remember: Every Good Boy Does Fine). The spaces from bottom to top spell F-A-C-E."
        },
        {
          id: "music-theory-101-l01-c3",
          title: "The Bass Clef",
          content:
            "The bass clef (also called the F clef) has two dots that surround the fourth line, marking it as F. It is used for lower-pitched instruments like cello, bass guitar, and the left hand of piano. The lines spell G-B-D-F-A (Good Boys Do Fine Always). The spaces spell A-C-E-G (All Cows Eat Grass)."
        },
        {
          id: "music-theory-101-l01-c4",
          title: "Putting It Together",
          content:
            "When treble and bass clefs are joined by a brace, they form the grand staff. Middle C sits on a small ledger line between the two staves. This is the standard layout for piano music. Every note has a unique position — learning to spot them quickly is the first step to reading music fluently."
        }
      ],
      flashcards: [
        { id: "music-theory-101-l01-f1", front: "Staff", back: "The five horizontal lines on which music is written" },
        { id: "music-theory-101-l01-f2", front: "Treble clef line notes (bottom to top)", back: "E - G - B - D - F (Every Good Boy Does Fine)" },
        { id: "music-theory-101-l01-f3", front: "Treble clef space notes (bottom to top)", back: "F - A - C - E (spells FACE)" },
        { id: "music-theory-101-l01-f4", front: "Middle C", back: "The note on a ledger line between the treble and bass clefs; the center of the grand staff" }
      ],
      learningAids: [
        { id: "music-theory-101-l01-a1", type: "image", title: "Grand Staff Diagram", content: "Labeled diagram showing treble clef, bass clef, line notes, space notes, and middle C on the grand staff." }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Reading Notes on the Staff  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l02",
      title: "Reading Notes on the Staff",
      type: "interactive",
      duration: 12,
      objectives: [
        "Identify treble clef notes by name",
        "Distinguish line notes from space notes",
        "Match note positions to letter names quickly"
      ],
      metadata: {
        prompts: [
          "Which mnemonic helps you remember the treble clef lines?",
          "If a note sits in the third space of the treble clef, what letter is it?",
          "How does a ledger line extend the staff?"
        ]
      },
      interactiveActivities: [
        {
          id: "music-theory-101-l02-ia1",
          type: "matching_pairs",
          title: "Note Name Match",
          description: "Match each staff position to its correct note name.",
          estimatedMinutes: 6,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "First line (treble)", right: "E" },
              { id: "p2", left: "Second line (treble)", right: "G" },
              { id: "p3", left: "First space (treble)", right: "F" },
              { id: "p4", left: "Third space (treble)", right: "C" }
            ]
          }
        },
        {
          id: "music-theory-101-l02-ia2",
          type: "sorting_buckets",
          title: "Lines vs. Spaces",
          description: "Sort each note into whether it sits on a line or in a space (treble clef).",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "line", label: "Line Notes" },
              { id: "space", label: "Space Notes" }
            ],
            items: [
              { id: "i1", label: "E (bottom)", correctBucketId: "line" },
              { id: "i2", label: "F", correctBucketId: "space" },
              { id: "i3", label: "G", correctBucketId: "line" },
              { id: "i4", label: "A", correctBucketId: "space" },
              { id: "i5", label: "B", correctBucketId: "line" },
              { id: "i6", label: "C", correctBucketId: "space" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "music-theory-101-l02-a1", type: "mnemonic", title: "FACE in the Space", content: "The spaces of the treble clef spell F-A-C-E from bottom to top — the word FACE." }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Checkpoint: Staff Reading  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l03",
      title: "Checkpoint: Staff Reading",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate ability to name treble clef notes",
        "Identify bass clef landmarks",
        "Recall staff terminology"
      ],
      questions: [
        {
          id: "music-theory-101-l03-q1",
          text: "What mnemonic helps you remember the treble clef LINES from bottom to top?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "FACE" },
            { id: "b", text: "Every Good Boy Does Fine" },
            { id: "c", text: "All Cows Eat Grass" },
            { id: "d", text: "Good Boys Do Fine Always" }
          ],
          correctOptionId: "b",
          explanation: "The treble clef lines from bottom to top are E-G-B-D-F. 'Every Good Boy Does Fine' matches those letters. FACE is for the spaces.",
          hint: "Think about the LINES, not the spaces."
        },
        {
          id: "music-theory-101-l03-q2",
          text: "Which note sits in the second space of the treble clef?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "F" },
            { id: "b", text: "C" },
            { id: "c", text: "A" },
            { id: "d", text: "E" }
          ],
          correctOptionId: "c",
          explanation: "The treble clef spaces from bottom to top are F-A-C-E. The second space is A.",
          hint: "Spell out FACE and count to the second letter."
        },
        {
          id: "music-theory-101-l03-q3",
          text: "The bass clef is also called the ______ clef.",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "G clef" },
            { id: "b", text: "C clef" },
            { id: "c", text: "D clef" },
            { id: "d", text: "F clef" }
          ],
          correctOptionId: "d",
          explanation: "The bass clef is called the F clef because its two dots surround the line for the note F.",
          hint: "Look at where the two dots of the bass clef sit."
        },
        {
          id: "music-theory-101-l03-q4",
          text: "Where does Middle C appear on the grand staff?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "On the top line of the bass clef" },
            { id: "b", text: "On a ledger line between the treble and bass clefs" },
            { id: "c", text: "In the first space of the treble clef" },
            { id: "d", text: "On the bottom line of the treble clef" }
          ],
          correctOptionId: "b",
          explanation: "Middle C sits on a short ledger line one step below the treble clef staff and one step above the bass clef staff.",
          hint: "Middle C is between the two staves — it needs its own little line."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2] }],
        difficultyDistribution: { easy: 2, medium: 1, hard: 1 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    },

    /* ──────────────────────────────────────────────
       L04  Note Values and Duration  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l04",
      title: "Note Values and Duration",
      type: "video",
      duration: 11,
      objectives: [
        "Identify whole, half, quarter, and eighth notes by sight",
        "Explain how note values relate to each other (halving)",
        "Count beats for each note value in 4/4 time"
      ],
      chunks: [
        {
          id: "music-theory-101-l04-c1",
          title: "The Whole Note",
          content:
            "A whole note looks like an open oval (no stem). In 4/4 time it lasts 4 beats — it fills an entire measure by itself. Think of it as the 'long breath' of music. When you see a whole note, you hold the sound for a full four-count: 1-2-3-4."
        },
        {
          id: "music-theory-101-l04-c2",
          title: "Half Notes and Quarter Notes",
          content:
            "A half note is an open oval with a stem — it gets 2 beats (half of a whole note). A quarter note is a filled-in oval with a stem — it gets 1 beat. Two half notes fill a measure of 4/4. Four quarter notes also fill a measure. Each step down cuts the duration in half."
        },
        {
          id: "music-theory-101-l04-c3",
          title: "Eighth Notes and Flags",
          content:
            "An eighth note looks like a quarter note with a flag on its stem. It gets half a beat — two eighth notes equal one quarter note. When eighth notes are grouped, the flags connect into a beam. Counting: say '1-and-2-and-3-and-4-and' — each number and each 'and' is one eighth note."
        },
        {
          id: "music-theory-101-l04-c4",
          title: "The Note Value Tree",
          content:
            "Picture a family tree: 1 whole note = 2 half notes = 4 quarter notes = 8 eighth notes. Every level doubles the number of notes but halves their duration. This pattern continues to sixteenth notes (16 per measure) and beyond, but for now, mastering whole through eighth notes is the foundation."
        }
      ],
      flashcards: [
        { id: "music-theory-101-l04-f1", front: "Whole note", back: "An open oval with no stem; lasts 4 beats in 4/4 time" },
        { id: "music-theory-101-l04-f2", front: "Half note", back: "An open oval with a stem; lasts 2 beats in 4/4 time" },
        { id: "music-theory-101-l04-f3", front: "Quarter note", back: "A filled oval with a stem; lasts 1 beat in 4/4 time" },
        { id: "music-theory-101-l04-f4", front: "Eighth note", back: "A filled oval with a stem and flag; lasts half a beat in 4/4 time" }
      ],
      learningAids: [
        { id: "music-theory-101-l04-a1", type: "image", title: "Note Value Tree", content: "Diagram showing 1 whole = 2 halves = 4 quarters = 8 eighths, arranged as a branching tree." }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Rhythm and Time Signatures  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l05",
      title: "Rhythm and Time Signatures",
      type: "interactive",
      duration: 13,
      objectives: [
        "Explain what a time signature tells the performer",
        "Count rhythms in 4/4 and 3/4 time",
        "Identify whether a measure has the correct number of beats"
      ],
      metadata: {
        prompts: [
          "In 4/4 time, how many quarter notes fit in one measure?",
          "What does the top number of a time signature mean?",
          "Clap this rhythm: quarter, quarter, half. How many beats total?"
        ]
      },
      interactiveActivities: [
        {
          id: "music-theory-101-l05-ia1",
          type: "sorting_buckets",
          title: "Beat Count Sort",
          description: "Sort each note combination into the time signature where it fills exactly one measure.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "four-four", label: "4/4 Time (4 beats)" },
              { id: "three-four", label: "3/4 Time (3 beats)" }
            ],
            items: [
              { id: "i1", label: "♩ ♩ ♩ ♩ (4 quarter notes)", correctBucketId: "four-four" },
              { id: "i2", label: "𝅗𝅥 𝅗𝅥 (2 half notes)", correctBucketId: "four-four" },
              { id: "i3", label: "♩ ♩ ♩ (3 quarter notes)", correctBucketId: "three-four" },
              { id: "i4", label: "𝅗𝅥 ♩ (half + quarter)", correctBucketId: "three-four" },
              { id: "i5", label: "𝅝 (1 whole note)", correctBucketId: "four-four" },
              { id: "i6", label: "𝅗𝅥. (dotted half note)", correctBucketId: "three-four" }
            ]
          }
        },
        {
          id: "music-theory-101-l05-ia2",
          type: "matching_pairs",
          title: "Time Signature Meaning",
          description: "Match each time signature element to what it tells the musician.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            pairs: [
              { id: "p1", left: "Top number of time signature", right: "How many beats per measure" },
              { id: "p2", left: "Bottom number of time signature", right: "Which note value gets one beat" },
              { id: "p3", left: "4/4", right: "Four quarter-note beats per measure" },
              { id: "p4", left: "3/4", right: "Three quarter-note beats per measure" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "music-theory-101-l05-a1", type: "mnemonic", title: "Time Signature Decoder", content: "Top number = HOW MANY beats. Bottom number = WHAT KIND of beat. 4/4 = four quarter-note beats." }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Checkpoint: Rhythm  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l06",
      title: "Checkpoint: Rhythm and Note Values",
      type: "quiz",
      duration: 8,
      objectives: [
        "Recall note value durations",
        "Interpret time signatures",
        "Determine if a measure is complete"
      ],
      questions: [
        {
          id: "music-theory-101-l06-q1",
          text: "How many beats does a half note get in 4/4 time?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "1 beat" },
            { id: "b", text: "2 beats" },
            { id: "c", text: "3 beats" },
            { id: "d", text: "4 beats" }
          ],
          correctOptionId: "b",
          explanation: "A half note lasts 2 beats. Two half notes fill one measure of 4/4 time.",
          hint: "It's called a 'half' note because it's half of a whole note."
        },
        {
          id: "music-theory-101-l06-q2",
          text: "In 3/4 time, which combination fills exactly one measure?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "A whole note" },
            { id: "b", text: "Two half notes" },
            { id: "c", text: "A half note and a quarter note" },
            { id: "d", text: "Four quarter notes" }
          ],
          correctOptionId: "c",
          explanation: "3/4 time has 3 beats per measure. A half note (2 beats) + a quarter note (1 beat) = 3 beats exactly.",
          hint: "Add up the beats: you need exactly 3."
        },
        {
          id: "music-theory-101-l06-q3",
          text: "How many eighth notes equal one quarter note?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "1" },
            { id: "b", text: "4" },
            { id: "c", text: "2" },
            { id: "d", text: "8" }
          ],
          correctOptionId: "c",
          explanation: "Each note value divides in half: a quarter note splits into 2 eighth notes.",
          hint: "Each step in the note value tree doubles the count."
        },
        {
          id: "music-theory-101-l06-q4",
          text: "What does the bottom number '4' mean in a 4/4 time signature?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "There are 4 measures" },
            { id: "b", text: "Play at 4 beats per minute" },
            { id: "c", text: "The quarter note gets one beat" },
            { id: "d", text: "The piece has 4 sections" }
          ],
          correctOptionId: "c",
          explanation: "The bottom number indicates which note value equals one beat. '4' means the quarter note (1/4 of a whole note) gets one beat.",
          hint: "Think of the bottom number as a fraction: 4 means 1/4 note."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    },

    /* ──────────────────────────────────────────────
       L07  The C Major Scale  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l07",
      title: "The C Major Scale",
      type: "video",
      duration: 11,
      objectives: [
        "Play the C major scale ascending and descending",
        "Identify the whole-step and half-step pattern of a major scale",
        "Recognize sharps and flats as half-step adjustments"
      ],
      chunks: [
        {
          id: "music-theory-101-l07-c1",
          title: "What Is a Scale?",
          content:
            "A scale is a set of notes arranged in order from low to high (ascending) or high to low (descending). Scales give songs their 'flavor.' The C major scale uses only the white keys on a piano: C-D-E-F-G-A-B-C. It sounds bright and happy — most beginners learn it first because there are no sharps or flats."
        },
        {
          id: "music-theory-101-l07-c2",
          title: "Whole Steps and Half Steps",
          content:
            "A half step is the smallest distance between two notes (like E to F, or B to C on a piano — two white keys with no black key between). A whole step skips one key (like C to D, with a black key in between). The major scale follows the pattern: W-W-H-W-W-W-H (whole, whole, half, whole, whole, whole, half)."
        },
        {
          id: "music-theory-101-l07-c3",
          title: "Sharps and Flats",
          content:
            "A sharp (#) raises a note by one half step. A flat (♭) lowers a note by one half step. On a piano, sharps and flats often land on black keys. For example, F# is the black key between F and G. C major has no sharps or flats, but other scales do. Understanding sharps and flats prepares you for every other key."
        },
        {
          id: "music-theory-101-l07-c4",
          title: "Playing the Scale",
          content:
            "Starting on middle C, play each white key in order up to the next C. Say the note names as you go: C-D-E-F-G-A-B-C. Notice the half steps between E-F and B-C (no black key between them). Coming back down, reverse: C-B-A-G-F-E-D-C. Practice slowly, then speed up. This scale is the building block for understanding all of music theory."
        }
      ],
      flashcards: [
        { id: "music-theory-101-l07-f1", front: "Scale", back: "A sequence of notes arranged in ascending or descending order by pitch" },
        { id: "music-theory-101-l07-f2", front: "Half step", back: "The smallest interval in Western music; on a piano, the very next key (e.g., E to F)" },
        { id: "music-theory-101-l07-f3", front: "Whole step", back: "An interval of two half steps; skips one key on the piano (e.g., C to D)" },
        { id: "music-theory-101-l07-f4", front: "Major scale pattern", back: "Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H)" }
      ],
      learningAids: [
        { id: "music-theory-101-l07-a1", type: "image", title: "Piano Keyboard Map", content: "Piano keyboard showing C major scale notes highlighted, with W and H markers between each pair." }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Building Scales  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l08",
      title: "Building Scales",
      type: "interactive",
      duration: 12,
      objectives: [
        "Apply the W-W-H-W-W-W-H pattern to verify a scale",
        "Distinguish half steps from whole steps",
        "Identify where sharps or flats would be needed in other keys"
      ],
      metadata: {
        prompts: [
          "Starting on G, apply the major scale pattern. Which note needs a sharp?",
          "Why do E-F and B-C only have a half step between them?",
          "If you start a major scale on F, which note needs a flat?"
        ]
      },
      interactiveActivities: [
        {
          id: "music-theory-101-l08-ia1",
          type: "drag_and_drop",
          title: "Build the C Major Scale",
          description: "Drag the notes into the correct ascending order to build a C major scale.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            targets: [
              { id: "t1", label: "1st" },
              { id: "t2", label: "2nd" },
              { id: "t3", label: "3rd" },
              { id: "t4", label: "4th" },
              { id: "t5", label: "5th" },
              { id: "t6", label: "6th" },
              { id: "t7", label: "7th" },
              { id: "t8", label: "8th" }
            ],
            draggables: [
              { id: "d1", label: "C", correctTargetId: "t1" },
              { id: "d2", label: "D", correctTargetId: "t2" },
              { id: "d3", label: "E", correctTargetId: "t3" },
              { id: "d4", label: "F", correctTargetId: "t4" },
              { id: "d5", label: "G", correctTargetId: "t5" },
              { id: "d6", label: "A", correctTargetId: "t6" },
              { id: "d7", label: "B", correctTargetId: "t7" },
              { id: "d8", label: "C (high)", correctTargetId: "t8" }
            ]
          }
        },
        {
          id: "music-theory-101-l08-ia2",
          type: "sorting_buckets",
          title: "Whole Step or Half Step?",
          description: "Sort each pair of notes into whole step or half step.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "whole", label: "Whole Step" },
              { id: "half", label: "Half Step" }
            ],
            items: [
              { id: "i1", label: "C → D", correctBucketId: "whole" },
              { id: "i2", label: "E → F", correctBucketId: "half" },
              { id: "i3", label: "F → G", correctBucketId: "whole" },
              { id: "i4", label: "B → C", correctBucketId: "half" },
              { id: "i5", label: "A → B", correctBucketId: "whole" },
              { id: "i6", label: "D → E", correctBucketId: "whole" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "music-theory-101-l08-a1", type: "mnemonic", title: "The Half-Step Trick", content: "On a piano, E-F and B-C are the only white-key pairs with NO black key between them. These are natural half steps." }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Checkpoint: Scales  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l09",
      title: "Checkpoint: Scales and Steps",
      type: "quiz",
      duration: 8,
      objectives: [
        "Recall the C major scale in order",
        "Apply the major scale step pattern",
        "Identify sharps and flats"
      ],
      questions: [
        {
          id: "music-theory-101-l09-q1",
          text: "What is the correct order of the C major scale?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "C-D-E-F-G-A-B-C" },
            { id: "b", text: "C-D-F-E-G-A-B-C" },
            { id: "c", text: "C-E-G-B-D-F-A-C" },
            { id: "d", text: "C-D-E-F#-G-A-B-C" }
          ],
          correctOptionId: "a",
          explanation: "The C major scale uses all white keys in order: C-D-E-F-G-A-B-C. No sharps or flats.",
          hint: "C major has no sharps or flats — just the natural letters in order."
        },
        {
          id: "music-theory-101-l09-q2",
          text: "What is the whole/half step pattern of a major scale?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "H-W-H-W-H-W-H" },
            { id: "b", text: "W-W-W-H-W-W-H" },
            { id: "c", text: "W-W-H-W-W-W-H" },
            { id: "d", text: "W-H-W-W-H-W-W" }
          ],
          correctOptionId: "c",
          explanation: "Every major scale follows Whole-Whole-Half-Whole-Whole-Whole-Half. In C major, the half steps fall between E-F and B-C.",
          hint: "The half steps come after the 3rd and 7th notes."
        },
        {
          id: "music-theory-101-l09-q3",
          text: "A sharp (#) does what to a note?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "Lowers it by one half step" },
            { id: "b", text: "Makes it louder" },
            { id: "c", text: "Raises it by one half step" },
            { id: "d", text: "Makes it last longer" }
          ],
          correctOptionId: "c",
          explanation: "A sharp raises a note by one half step. On a piano, this usually means moving to the next black key to the right.",
          hint: "Sharp means higher, flat means lower."
        },
        {
          id: "music-theory-101-l09-q4",
          text: "Which two pairs of white keys on a piano are only a half step apart?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "C-D and F-G" },
            { id: "b", text: "E-F and B-C" },
            { id: "c", text: "A-B and D-E" },
            { id: "d", text: "G-A and C-D" }
          ],
          correctOptionId: "b",
          explanation: "E-F and B-C have no black key between them, making them natural half steps. All other adjacent white keys have a black key in between (whole step).",
          hint: "Look for the spots on a piano with no black key between two white keys."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 8,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    },

    /* ──────────────────────────────────────────────
       L10  Dynamics, Tempo, and Expression  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l10",
      title: "Dynamics, Tempo, and Expression",
      type: "video",
      duration: 10,
      objectives: [
        "Define piano, forte, crescendo, and decrescendo",
        "Identify common tempo markings (Allegro, Andante, Adagio)",
        "Understand how dynamics and tempo shape a musical performance"
      ],
      chunks: [
        {
          id: "music-theory-101-l10-c1",
          title: "What Are Dynamics?",
          content:
            "Dynamics tell you how loud or soft to play. The Italian word 'piano' (p) means soft, and 'forte' (f) means loud. Other levels include pianissimo (pp, very soft), mezzo-piano (mp, moderately soft), mezzo-forte (mf, moderately loud), and fortissimo (ff, very loud). These markings appear below the staff."
        },
        {
          id: "music-theory-101-l10-c2",
          title: "Crescendo and Decrescendo",
          content:
            "A crescendo (cresc. or a hairpin opening to the right) means gradually get louder. A decrescendo or diminuendo (decresc. or a hairpin opening to the left) means gradually get softer. These symbols create emotional shape in music — building excitement or fading to calm."
        },
        {
          id: "music-theory-101-l10-c3",
          title: "Tempo Markings",
          content:
            "Tempo is the speed of the beat. Common Italian terms: Largo (very slow), Adagio (slow and stately), Andante (walking pace), Moderato (moderate), Allegro (fast and lively), Presto (very fast). Tempo is measured in BPM (beats per minute). Allegro is roughly 120-156 BPM."
        },
        {
          id: "music-theory-101-l10-c4",
          title: "Putting Expression Together",
          content:
            "A piece marked 'Allegro, f' should be played fast and loud — energetic and powerful. One marked 'Adagio, p' should be slow and soft — gentle and thoughtful. Composers use dynamics and tempo together to tell the performer how the music should feel. Learning to read these markings is like learning the 'emotions' written into the score."
        }
      ],
      flashcards: [
        { id: "music-theory-101-l10-f1", front: "Piano (p)", back: "Play softly" },
        { id: "music-theory-101-l10-f2", front: "Forte (f)", back: "Play loudly" },
        { id: "music-theory-101-l10-f3", front: "Crescendo", back: "Gradually get louder" },
        { id: "music-theory-101-l10-f4", front: "Allegro", back: "Fast and lively tempo (roughly 120-156 BPM)" }
      ],
      learningAids: [
        { id: "music-theory-101-l10-a1", type: "image", title: "Dynamic Markings Chart", content: "Chart showing pp → p → mp → mf → f → ff from softest to loudest, with crescendo/decrescendo hairpins." }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Mastery Quiz: Music Theory Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l11",
      title: "Mastery Quiz: Music Theory Foundations",
      type: "quiz",
      duration: 12,
      objectives: [
        "Demonstrate comprehensive understanding of staff, notes, rhythm, scales, and expression",
        "Apply knowledge across multiple topic areas",
        "Identify areas needing further practice"
      ],
      questions: [
        {
          id: "music-theory-101-l11-q1",
          text: "How many lines does a standard musical staff have?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "5" },
            { id: "d", text: "3" }
          ],
          correctOptionId: "c",
          explanation: "A standard musical staff has 5 lines and 4 spaces.",
          hint: "Count the lines of any staff you've seen."
        },
        {
          id: "music-theory-101-l11-q2",
          text: "A dotted half note in 4/4 time gets how many beats?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "2 beats" },
            { id: "b", text: "3 beats" },
            { id: "c", text: "4 beats" },
            { id: "d", text: "1.5 beats" }
          ],
          correctOptionId: "b",
          explanation: "A dot adds half the value of the note. A half note = 2 beats, so the dot adds 1 beat, totaling 3 beats.",
          hint: "A dot adds half the original value."
        },
        {
          id: "music-theory-101-l11-q3",
          text: "Which tempo marking means 'walking pace'?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "Presto" },
            { id: "b", text: "Allegro" },
            { id: "c", text: "Adagio" },
            { id: "d", text: "Andante" }
          ],
          correctOptionId: "d",
          explanation: "Andante comes from the Italian word for 'walking.' It's a moderate, comfortable speed.",
          hint: "Think of the Italian word for 'to walk' — andare."
        },
        {
          id: "music-theory-101-l11-q4",
          text: "In the C major scale, where do the two half steps occur?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "Between C-D and F-G" },
            { id: "b", text: "Between D-E and A-B" },
            { id: "c", text: "Between E-F and B-C" },
            { id: "d", text: "Between F-G and C-D" }
          ],
          correctOptionId: "c",
          explanation: "In C major, the half steps fall between E-F (3rd-4th degrees) and B-C (7th-8th degrees). These are the natural half steps with no black key between them on the piano.",
          hint: "Remember the W-W-H-W-W-W-H pattern."
        }
      ],
      quizBlueprint: {
        frequency: "end_of_module",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 12,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    },

    /* ──────────────────────────────────────────────
       L12  Applied Challenge: Read a Melody  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l12",
      title: "Applied Challenge: Read a Melody",
      type: "interactive",
      duration: 14,
      objectives: [
        "Apply staff reading, rhythm, and expression to a short melody",
        "Identify note names, durations, and dynamic markings in context",
        "Demonstrate integrated understanding"
      ],
      metadata: {
        prompts: [
          "Look at this melody. What is the first note and how long does it last?",
          "Where does the crescendo begin?",
          "Can you clap the rhythm before naming the notes?"
        ]
      },
      interactiveActivities: [
        {
          id: "music-theory-101-l12-ia1",
          type: "drag_and_drop",
          title: "Order the Dynamic Markings",
          description: "Drag the dynamic markings from softest to loudest.",
          estimatedMinutes: 4,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "t1", label: "Softest" },
              { id: "t2", label: "Soft" },
              { id: "t3", label: "Medium" },
              { id: "t4", label: "Loud" },
              { id: "t5", label: "Loudest" }
            ],
            draggables: [
              { id: "d1", label: "pp (pianissimo)", correctTargetId: "t1" },
              { id: "d2", label: "p (piano)", correctTargetId: "t2" },
              { id: "d3", label: "mf (mezzo-forte)", correctTargetId: "t3" },
              { id: "d4", label: "f (forte)", correctTargetId: "t4" },
              { id: "d5", label: "ff (fortissimo)", correctTargetId: "t5" }
            ]
          }
        },
        {
          id: "music-theory-101-l12-ia2",
          type: "matching_pairs",
          title: "Tempo and Mood Match",
          description: "Match each tempo marking to the mood it creates.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          data: {
            pairs: [
              { id: "p1", left: "Largo", right: "Very slow, broad, solemn" },
              { id: "p2", left: "Andante", right: "Walking pace, relaxed" },
              { id: "p3", left: "Allegro", right: "Fast, lively, energetic" },
              { id: "p4", left: "Presto", right: "Very fast, exciting, breathless" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "music-theory-101-l12-a1", type: "practice", title: "Melody Reading Practice", content: "Try reading 'Twinkle Twinkle Little Star' in C major: C-C-G-G-A-A-G (half note), F-F-E-E-D-D-C (half note). Clap the rhythm first, then name the notes." }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l13",
      title: "Mastery Retest: Music Theory Foundations",
      type: "quiz",
      duration: 10,
      objectives: [
        "Confirm mastery across all foundational topics",
        "Apply knowledge to slightly different question formats"
      ],
      questions: [
        {
          id: "music-theory-101-l13-q1",
          text: "The treble clef is also known as the ______ clef.",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "F clef" },
            { id: "b", text: "C clef" },
            { id: "c", text: "G clef" },
            { id: "d", text: "D clef" }
          ],
          correctOptionId: "c",
          explanation: "The treble clef curls around the second line, marking it as G. That's why it's called the G clef.",
          hint: "Look at which line the clef symbol wraps around."
        },
        {
          id: "music-theory-101-l13-q2",
          text: "How many eighth notes fit in one measure of 4/4 time?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "4" },
            { id: "b", text: "6" },
            { id: "c", text: "8" },
            { id: "d", text: "16" }
          ],
          correctOptionId: "c",
          explanation: "4/4 time has 4 beats. Each beat divides into 2 eighth notes. 4 × 2 = 8 eighth notes per measure.",
          hint: "Two eighths per beat, four beats per measure."
        },
        {
          id: "music-theory-101-l13-q3",
          text: "What does 'decrescendo' mean?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "Get faster" },
            { id: "b", text: "Gradually get softer" },
            { id: "c", text: "Gradually get louder" },
            { id: "d", text: "Play very loud" }
          ],
          correctOptionId: "b",
          explanation: "Decrescendo (or diminuendo) means to gradually decrease the volume. The opposite of crescendo.",
          hint: "The prefix 'de-' means to decrease or reduce."
        },
        {
          id: "music-theory-101-l13-q4",
          text: "Starting on G, what note do you reach after going up a whole step?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "G#" },
            { id: "b", text: "A" },
            { id: "c", text: "F" },
            { id: "d", text: "B" }
          ],
          correctOptionId: "b",
          explanation: "A whole step from G goes past the black key (G#/Ab) to A. On a piano, G → A skips one key.",
          hint: "A whole step means skip one key."
        }
      ],
      quizBlueprint: {
        frequency: "end_of_module",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    },

    /* ──────────────────────────────────────────────
       L14  Scenario Lab: Music in Everyday Life  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l14",
      title: "Scenario Lab: Music in Everyday Life",
      type: "video",
      duration: 10,
      objectives: [
        "Connect music theory concepts to real-world listening",
        "Identify musical elements in familiar songs",
        "Appreciate how theory knowledge enhances enjoyment of music"
      ],
      chunks: [
        {
          id: "music-theory-101-l14-c1",
          title: "Hearing the Beat",
          content:
            "Next time you hear a song, try tapping along. Most pop and rock music is in 4/4 time. Count '1-2-3-4' with the beat. A waltz is in 3/4 — count '1-2-3.' The strong beat (beat 1) often coincides with the kick drum or a chord change. You're already applying time signature knowledge!"
        },
        {
          id: "music-theory-101-l14-c2",
          title: "Spotting Dynamics",
          content:
            "Listen to how a song builds. The verse might start softly (piano), then the chorus hits louder (forte). That's a crescendo in action. Movie soundtracks use dynamics masterfully — quiet strings during suspense, then a sudden fortissimo for the jump scare. Composers control your emotions through volume."
        },
        {
          id: "music-theory-101-l14-c3",
          title: "Recognizing Scales",
          content:
            "Happy-sounding songs often use major scales. Sad or mysterious songs tend to use minor scales. Try humming 'Do-Re-Mi' (C major scale) and notice how bright it sounds. Now hum a spooky melody — it probably uses different intervals. Scales are the color palette of music."
        },
        {
          id: "music-theory-101-l14-c4",
          title: "Your Music Theory Toolkit",
          content:
            "You now have a toolkit: staff reading, note values, time signatures, scales, dynamics, and tempo markings. Every piece of music you hear uses these elements. Next steps: learn more scales, explore chords (notes played together), and try writing your own short melodies. Music theory is a language — the more you practice, the more fluently you'll speak it."
        }
      ],
      flashcards: [
        { id: "music-theory-101-l14-f1", front: "Time signature of most pop songs", back: "4/4 (also called 'common time')" },
        { id: "music-theory-101-l14-f2", front: "Time signature of a waltz", back: "3/4 (three quarter-note beats per measure)" },
        { id: "music-theory-101-l14-f3", front: "Major scale sound quality", back: "Bright, happy, uplifting" },
        { id: "music-theory-101-l14-f4", front: "Minor scale sound quality", back: "Dark, sad, mysterious" }
      ],
      learningAids: [
        { id: "music-theory-101-l14-a1", type: "practice", title: "Listening Challenge", content: "Pick 3 songs you like. For each, identify: (1) Is it in 4/4 or 3/4? (2) Does it have dynamic changes? (3) Does it sound major or minor?" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-101-l15",
      title: "Mastery Sprint: Music Theory Foundations",
      type: "quiz",
      duration: 10,
      objectives: [
        "Achieve mastery across all module topics",
        "Demonstrate readiness for intermediate music theory"
      ],
      questions: [
        {
          id: "music-theory-101-l15-q1",
          text: "What does 'mezzo-forte' (mf) mean?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "Very soft" },
            { id: "b", text: "Moderately loud" },
            { id: "c", text: "Very loud" },
            { id: "d", text: "Moderately soft" }
          ],
          correctOptionId: "b",
          explanation: "Mezzo means 'medium' or 'half.' Mezzo-forte = moderately loud, sitting between piano and forte.",
          hint: "'Mezzo' means medium. 'Forte' means loud."
        },
        {
          id: "music-theory-101-l15-q2",
          text: "In the treble clef, the note on the third line from the bottom is:",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "B" },
            { id: "b", text: "D" },
            { id: "c", text: "F" },
            { id: "d", text: "A" }
          ],
          correctOptionId: "a",
          explanation: "Treble clef lines bottom to top: E-G-B-D-F. The third line is B.",
          hint: "Every Good Boy Does Fine — what's the third word?"
        },
        {
          id: "music-theory-101-l15-q3",
          text: "A measure in 3/4 time could contain:",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "One whole note" },
            { id: "b", text: "Three half notes" },
            { id: "c", text: "Six eighth notes" },
            { id: "d", text: "Two whole notes" }
          ],
          correctOptionId: "c",
          explanation: "3/4 has 3 beats. Six eighth notes = 3 beats (each eighth note = 0.5 beats, 6 × 0.5 = 3). A whole note is 4 beats (too many).",
          hint: "Add up the beats and check if they equal exactly 3."
        },
        {
          id: "music-theory-101-l15-q4",
          text: "What makes the C major scale unique compared to other major scales?",
          skillId: "music-theory-101-skill-core",
          options: [
            { id: "a", text: "It uses only black keys" },
            { id: "b", text: "It has no sharps or flats" },
            { id: "c", text: "It starts on the lowest piano key" },
            { id: "d", text: "It has a different step pattern" }
          ],
          correctOptionId: "b",
          explanation: "C major is the only major scale that uses all natural notes (white keys only). Every other major scale requires at least one sharp or flat.",
          hint: "Think about what keys you press on a piano for C major."
        }
      ],
      quizBlueprint: {
        frequency: "end_of_module",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [2, 3] }],
        difficultyDistribution: { easy: 1, medium: 1, hard: 2 },
        feedbackMode: "after_submit",
        masteryThreshold: 0.75
      }
    }
  ]
};
