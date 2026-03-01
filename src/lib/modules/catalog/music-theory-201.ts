import type { LearningModule } from "@/lib/modules/types";

export const MusicTheory201Module: LearningModule = {
  id: "music-theory-201",
  title: "Intermediate Music Theory",
  description:
    "Explore intervals, build major and minor chords, master key signatures, and train your ear. Bridge the gap between reading notes and understanding harmony.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music"],
  minAge: 10,
  maxAge: 15,
  version: "2.0.0",
  learningObjectives: [
    "Identify and name all simple intervals from unison to octave",
    "Build major, minor, augmented, and diminished triads",
    "Read and write key signatures for all major and minor keys",
    "Construct major, natural minor, harmonic minor, and melodic minor scales",
    "Recognize intervals and chord qualities by ear",
    "Understand the circle of fifths and use it for key relationships",
    "Transpose a simple melody to a new key"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Intervals: The Building Blocks  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l01",
      title: "Intervals: The Building Blocks",
      type: "video",
      duration: 12,
      objectives: [
        "Define a musical interval as the distance between two pitches",
        "Name intervals by number (2nd, 3rd, 4th, etc.)",
        "Distinguish between melodic and harmonic intervals"
      ],
      chunks: [
        {
          id: "music-theory-201-l01-c1",
          title: "What Is an Interval?",
          content:
            "An interval is the distance in pitch between two notes. When you sing the first two notes of 'Twinkle, Twinkle Little Star,' you're singing an interval of a perfect 5th. Intervals are the DNA of melody and harmony — every chord and scale is built from them. We measure intervals by counting letter names: from C to E is a 3rd (C-D-E, three letter names)."
        },
        {
          id: "music-theory-201-l01-c2",
          title: "Melodic vs. Harmonic Intervals",
          content:
            "A melodic interval occurs when two notes are played one after the other — like a melody. A harmonic interval occurs when two notes sound at the same time — like in a chord. The same interval (say, a 3rd from C to E) sounds different depending on whether the notes are played sequentially or simultaneously. Both types are measured the same way."
        },
        {
          id: "music-theory-201-l01-c3",
          title: "Interval Numbers",
          content:
            "We name intervals by counting the letter names from the lower note to the upper note, including both endpoints. C to D is a 2nd. C to E is a 3rd. C to F is a 4th. C to G is a 5th. C to A is a 6th. C to B is a 7th. C to the next C is an octave (8th). A unison means two notes of the same pitch."
        }
      ],
      flashcards: [
        { id: "music-theory-201-l01-f1", front: "Interval", back: "The distance in pitch between two notes, measured by counting letter names" },
        { id: "music-theory-201-l01-f2", front: "Melodic interval", back: "Two notes played one after the other (sequentially)" },
        { id: "music-theory-201-l01-f3", front: "Harmonic interval", back: "Two notes played at the same time (simultaneously)" },
        { id: "music-theory-201-l01-f4", front: "Unison", back: "An interval of zero distance — two notes of the same pitch" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Interval Quality  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l02",
      title: "Interval Quality",
      type: "interactive",
      duration: 14,
      objectives: [
        "Distinguish between major, minor, perfect, augmented, and diminished interval qualities",
        "Calculate interval quality using half-step counts",
        "Match common intervals to familiar song openings"
      ],
      chunks: [
        {
          id: "music-theory-201-l02-c1",
          title: "Quality Matters",
          content:
            "Interval number alone doesn't tell the whole story. C to E and C to E♭ are both 3rds, but they sound very different. The first is a major 3rd (4 half steps) and the second is a minor 3rd (3 half steps). Quality describes the exact size of an interval. The five qualities are: perfect, major, minor, augmented, and diminished."
        },
        {
          id: "music-theory-201-l02-c2",
          title: "Perfect Intervals",
          content:
            "Unisons, 4ths, 5ths, and octaves are called 'perfect' intervals. A perfect 4th has 5 half steps (C to F). A perfect 5th has 7 half steps (C to G). These intervals sound very stable and consonant. If you make a perfect interval one half step larger, it becomes augmented. One half step smaller becomes diminished."
        },
        {
          id: "music-theory-201-l02-c3",
          title: "Major and Minor Intervals",
          content:
            "2nds, 3rds, 6ths, and 7ths come in major and minor qualities. A major interval is one half step larger than its minor counterpart. Major 2nd = 2 half steps; minor 2nd = 1 half step. Major 3rd = 4 half steps; minor 3rd = 3 half steps. Major 6th = 9 half steps; minor 6th = 8 half steps. Major 7th = 11 half steps; minor 7th = 10 half steps."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-201-l02-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "Perfect 5th", right: "7 half steps" },
            { left: "Major 3rd", right: "4 half steps" },
            { left: "Minor 3rd", right: "3 half steps" },
            { left: "Perfect 4th", right: "5 half steps" },
            { left: "Major 2nd", right: "2 half steps" },
            { left: "Minor 7th", right: "10 half steps" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-201-l02-f1", front: "Perfect intervals", back: "Unisons, 4ths, 5ths, and octaves — the most consonant and stable intervals" },
        { id: "music-theory-201-l02-f2", front: "Major 3rd", back: "An interval of 4 half steps (e.g., C to E) — sounds bright and happy" },
        { id: "music-theory-201-l02-f3", front: "Minor 3rd", back: "An interval of 3 half steps (e.g., C to E♭) — sounds darker or sadder" },
        { id: "music-theory-201-l02-f4", front: "Augmented interval", back: "A perfect or major interval raised by one half step" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Interval Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l03",
      title: "Interval Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of interval naming and quality"
      ],
      questions: [
        {
          id: "music-theory-201-l03-q1",
          text: "How many half steps are in a perfect 5th?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "5" },
            { id: "b", text: "6" },
            { id: "c", text: "7" },
            { id: "d", text: "8" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-201-l03-q2",
          text: "What is the interval from C to A♭?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Major 6th" },
            { id: "b", text: "Minor 6th" },
            { id: "c", text: "Perfect 5th" },
            { id: "d", text: "Diminished 7th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l03-q3",
          text: "Which intervals are classified as 'perfect'?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "2nds, 3rds, 6ths, and 7ths" },
            { id: "b", text: "Unisons, 4ths, 5ths, and octaves" },
            { id: "c", text: "Only 5ths and octaves" },
            { id: "d", text: "All intervals in a major scale" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l03-q4",
          text: "A major interval made one half step smaller becomes what?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Diminished" },
            { id: "b", text: "Augmented" },
            { id: "c", text: "Minor" },
            { id: "d", text: "Perfect" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Building Triads  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l04",
      title: "Building Triads",
      type: "video",
      duration: 12,
      objectives: [
        "Define a triad as a three-note chord built in stacked 3rds",
        "Construct major and minor triads from any root note",
        "Identify the root, 3rd, and 5th of a triad"
      ],
      chunks: [
        {
          id: "music-theory-201-l04-c1",
          title: "What Is a Triad?",
          content:
            "A triad is the simplest chord: three notes stacked in intervals of a 3rd. Start with any note (the root), add a note a 3rd above (the 3rd), then add another 3rd above that (the 5th). For example, a C major triad is C-E-G. The root gives the chord its letter name. Triads are the foundation of all Western harmony."
        },
        {
          id: "music-theory-201-l04-c2",
          title: "Major Triads",
          content:
            "A major triad is built with a major 3rd on the bottom and a minor 3rd on top. From C: C to E is a major 3rd (4 half steps), and E to G is a minor 3rd (3 half steps). The total from root to 5th is a perfect 5th (7 half steps). Major triads sound bright, stable, and 'happy.' Every major scale has three major triads built on scale degrees 1, 4, and 5."
        },
        {
          id: "music-theory-201-l04-c3",
          title: "Minor Triads",
          content:
            "A minor triad flips the order: a minor 3rd on the bottom and a major 3rd on top. From C: C to E♭ is a minor 3rd (3 half steps), and E♭ to G is a major 3rd (4 half steps). The root to 5th is still a perfect 5th. Minor triads sound darker, more somber. In a major scale, minor triads are built on scale degrees 2, 3, and 6."
        },
        {
          id: "music-theory-201-l04-c4",
          title: "Augmented and Diminished Triads",
          content:
            "An augmented triad has two major 3rds stacked (C-E-G♯). The root to 5th is an augmented 5th (8 half steps). It sounds tense and unstable. A diminished triad has two minor 3rds stacked (C-E♭-G♭). The root to 5th is a diminished 5th (6 half steps), also called a tritone. It sounds very tense and wants to resolve. In a major scale, the diminished triad is built on scale degree 7."
        }
      ],
      flashcards: [
        { id: "music-theory-201-l04-f1", front: "Triad", back: "A three-note chord built by stacking two intervals of a 3rd (root, 3rd, 5th)" },
        { id: "music-theory-201-l04-f2", front: "Major triad formula", back: "Major 3rd (4 half steps) + Minor 3rd (3 half steps) = Perfect 5th" },
        { id: "music-theory-201-l04-f3", front: "Minor triad formula", back: "Minor 3rd (3 half steps) + Major 3rd (4 half steps) = Perfect 5th" },
        { id: "music-theory-201-l04-f4", front: "Diminished triad", back: "Two stacked minor 3rds; root to 5th is a diminished 5th (tritone)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Chord Building Workshop  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l05",
      title: "Chord Building Workshop",
      type: "interactive",
      duration: 14,
      objectives: [
        "Build major, minor, augmented, and diminished triads from given root notes",
        "Sort triads by quality based on their sound and structure",
        "Identify chord tones in written triads"
      ],
      chunks: [
        {
          id: "music-theory-201-l05-c1",
          title: "Building From Any Root",
          content:
            "To build a major triad from any root: count up 4 half steps for the 3rd, then 3 more for the 5th. For G major: G → B (4 half steps) → D (3 half steps). For E♭ major: E♭ → G (4 half steps) → B♭ (3 half steps). For minor, reverse the order: 3 half steps then 4. For G minor: G → B♭ (3) → D (4)."
        },
        {
          id: "music-theory-201-l05-c2",
          title: "Quick Quality Check",
          content:
            "A shortcut to check triad quality: look at the outer interval (root to 5th). If it's a perfect 5th, the triad is either major or minor — check the bottom 3rd to decide. If the outer interval is an augmented 5th, it's augmented. If it's a diminished 5th, it's diminished. This 'outside-in' method is faster than counting every half step."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-201-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Major Triad", "Minor Triad", "Diminished Triad", "Augmented Triad"],
          items: [
            { text: "C – E – G", bucket: "Major Triad" },
            { text: "D – F – A", bucket: "Minor Triad" },
            { text: "B – D – F", bucket: "Diminished Triad" },
            { text: "C – E – G♯", bucket: "Augmented Triad" },
            { text: "F – A – C", bucket: "Major Triad" },
            { text: "A – C – E", bucket: "Minor Triad" },
            { text: "F♯ – A – C", bucket: "Diminished Triad" },
            { text: "E – G♯ – B♯", bucket: "Augmented Triad" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-201-l05-f1", front: "Root", back: "The bottom note of a triad in root position; gives the chord its letter name" },
        { id: "music-theory-201-l05-f2", front: "Augmented triad", back: "Two stacked major 3rds; sounds bright and tense (e.g., C-E-G♯)" },
        { id: "music-theory-201-l05-f3", front: "Tritone", back: "An interval of 6 half steps (diminished 5th or augmented 4th); the most dissonant interval" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Triads Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l06",
      title: "Triads Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate ability to identify and build triad types"
      ],
      questions: [
        {
          id: "music-theory-201-l06-q1",
          text: "What notes make up a D minor triad?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "D – F♯ – A" },
            { id: "b", text: "D – F – A" },
            { id: "c", text: "D – F – A♭" },
            { id: "d", text: "D – F♯ – A♯" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l06-q2",
          text: "An augmented triad is built from:",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Major 3rd + Major 3rd" },
            { id: "b", text: "Minor 3rd + Minor 3rd" },
            { id: "c", text: "Major 3rd + Minor 3rd" },
            { id: "d", text: "Minor 3rd + Major 3rd" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-theory-201-l06-q3",
          text: "In a major scale, which scale degree builds a diminished triad?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "1st" },
            { id: "b", text: "4th" },
            { id: "c", text: "5th" },
            { id: "d", text: "7th" }
          ],
          correctOptionId: "d",
          explanation: ""
        },
        {
          id: "music-theory-201-l06-q4",
          text: "What is the 5th of a B♭ major triad?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "D" },
            { id: "b", text: "E♭" },
            { id: "c", text: "F" },
            { id: "d", text: "F♯" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L07  Key Signatures  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l07",
      title: "Key Signatures",
      type: "video",
      duration: 12,
      objectives: [
        "Explain what a key signature is and why it exists",
        "Read key signatures with sharps and flats",
        "Determine the major key from a given key signature"
      ],
      chunks: [
        {
          id: "music-theory-201-l07-c1",
          title: "Why Key Signatures?",
          content:
            "Instead of writing a sharp or flat every time a note appears, composers place them all at the beginning of each line in a key signature. A key signature tells performers which notes are consistently raised or lowered throughout the piece. It also tells us which major or minor scale the music is based on. C major has no sharps or flats; every other key has at least one."
        },
        {
          id: "music-theory-201-l07-c2",
          title: "The Order of Sharps",
          content:
            "Sharps are always added in the same order: F♯, C♯, G♯, D♯, A♯, E♯, B♯. A handy mnemonic: 'Father Charles Goes Down And Ends Battle.' One sharp = G major. Two sharps = D major. Three sharps = A major. The pattern: the last sharp is always the 7th degree of the major scale — go up one half step from the last sharp to find the key."
        },
        {
          id: "music-theory-201-l07-c3",
          title: "The Order of Flats",
          content:
            "Flats are added in reverse order from sharps: B♭, E♭, A♭, D♭, G♭, C♭, F♭. Mnemonic: 'Battle Ends And Down Goes Charles' Father.' One flat = F major. Two flats = B♭ major. The shortcut: the second-to-last flat is the key name. Exception: one flat is always F major (no second-to-last flat to read)."
        },
        {
          id: "music-theory-201-l07-c4",
          title: "Finding Minor Keys",
          content:
            "Every major key has a relative minor that shares the same key signature. The relative minor starts on the 6th degree of the major scale (or 3 half steps below the major key). G major's relative minor is E minor. B♭ major's relative minor is G minor. To determine whether a piece is in the major or minor key, listen to the first and last chords — they usually confirm the tonal center."
        }
      ],
      flashcards: [
        { id: "music-theory-201-l07-f1", front: "Key signature", back: "Sharps or flats placed at the beginning of each staff line, indicating which notes are consistently altered" },
        { id: "music-theory-201-l07-f2", front: "Order of sharps", back: "F♯ – C♯ – G♯ – D♯ – A♯ – E♯ – B♯ (Father Charles Goes Down And Ends Battle)" },
        { id: "music-theory-201-l07-f3", front: "Order of flats", back: "B♭ – E♭ – A♭ – D♭ – G♭ – C♭ – F♭ (Battle Ends And Down Goes Charles' Father)" },
        { id: "music-theory-201-l07-f4", front: "Relative minor", back: "The minor key sharing the same key signature as a major key, starting on its 6th scale degree" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Circle of Fifths  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l08",
      title: "The Circle of Fifths",
      type: "interactive",
      duration: 14,
      objectives: [
        "Navigate the circle of fifths clockwise (sharps) and counterclockwise (flats)",
        "Use the circle to identify key signatures quickly",
        "Find relative major and minor keys using the circle"
      ],
      chunks: [
        {
          id: "music-theory-201-l08-c1",
          title: "The Circle Explained",
          content:
            "The circle of fifths arranges all 12 major keys in a circle. Starting from C at the top (no sharps/flats), moving clockwise adds one sharp each step: C → G → D → A → E → B → F♯. Moving counterclockwise adds one flat: C → F → B♭ → E♭ → A♭ → D♭ → G♭. The bottom of the circle is where sharp and flat keys overlap (enharmonic equivalents: F♯/G♭, B/C♭, etc.)."
        },
        {
          id: "music-theory-201-l08-c2",
          title: "Using the Circle",
          content:
            "The circle is a musician's Swiss Army knife. Adjacent keys differ by only one sharp or flat — they're closely related and sound natural together. Keys across the circle are distant and create dramatic contrasts. The inner ring shows relative minors. Songwriters use the circle to plan key changes (modulations) and find chords that work together."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-201-l08-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "G major", right: "1 sharp (F♯)" },
            { left: "F major", right: "1 flat (B♭)" },
            { left: "D major", right: "2 sharps (F♯, C♯)" },
            { left: "B♭ major", right: "2 flats (B♭, E♭)" },
            { left: "A major", right: "3 sharps (F♯, C♯, G♯)" },
            { left: "E♭ major", right: "3 flats (B♭, E♭, A♭)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-201-l08-f1", front: "Circle of fifths", back: "A diagram arranging all 12 keys by ascending 5ths (clockwise) or ascending 4ths (counterclockwise)" },
        { id: "music-theory-201-l08-f2", front: "Closely related keys", back: "Keys adjacent on the circle of fifths, differing by only one sharp or flat" },
        { id: "music-theory-201-l08-f3", front: "Enharmonic equivalent", back: "Two keys that sound identical but are spelled differently (e.g., F♯ major and G♭ major)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Keys & Circle Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l09",
      title: "Keys & Circle Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate mastery of key signatures and the circle of fifths"
      ],
      questions: [
        {
          id: "music-theory-201-l09-q1",
          text: "How many flats are in the key of E♭ major?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l09-q2",
          text: "What is the relative minor of G major?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "B minor" },
            { id: "b", text: "D minor" },
            { id: "c", text: "E minor" },
            { id: "d", text: "A minor" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-201-l09-q3",
          text: "Moving clockwise on the circle of fifths from D, which key comes next?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "G" },
            { id: "b", text: "A" },
            { id: "c", text: "E" },
            { id: "d", text: "C" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l09-q4",
          text: "The 'last sharp' trick: if the last sharp in a key signature is C♯, the key is:",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "C major" },
            { id: "b", text: "D major" },
            { id: "c", text: "A major" },
            { id: "d", text: "G major" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 1, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Intervals, Chords & Keys  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l10",
      title: "Mastery Quiz: Intervals, Chords & Keys",
      type: "quiz",
      duration: 12,
      objectives: [
        "Synthesize knowledge of intervals, triads, and key signatures"
      ],
      questions: [
        {
          id: "music-theory-201-l10-q1",
          text: "What interval is C to A?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Perfect 5th" },
            { id: "b", text: "Major 6th" },
            { id: "c", text: "Minor 6th" },
            { id: "d", text: "Major 7th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l10-q2",
          text: "Which triad type has a perfect 5th from root to top?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Major and minor only" },
            { id: "b", text: "All four triad types" },
            { id: "c", text: "Major, minor, and augmented" },
            { id: "d", text: "Augmented only" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-theory-201-l10-q3",
          text: "The key of A major has how many sharps?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "2" },
            { id: "b", text: "3" },
            { id: "c", text: "4" },
            { id: "d", text: "5" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l10-q4",
          text: "E minor is the relative minor of which major key?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "C major" },
            { id: "b", text: "D major" },
            { id: "c", text: "G major" },
            { id: "d", text: "A major" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L11  Scale Construction Lab  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l11",
      title: "Scale Construction Lab",
      type: "interactive",
      duration: 14,
      objectives: [
        "Build major, natural minor, harmonic minor, and melodic minor scales",
        "Compare the step patterns of each scale type",
        "Identify the characteristic tones that distinguish each minor scale variant"
      ],
      chunks: [
        {
          id: "music-theory-201-l11-c1",
          title: "Major Scale Review",
          content:
            "The major scale follows the pattern: Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H). From C: C-D-E-F-G-A-B-C. This pattern works from any starting note. The major scale sounds bright and resolved. All other scales can be understood as modifications of the major scale."
        },
        {
          id: "music-theory-201-l11-c2",
          title: "Natural Minor Scale",
          content:
            "The natural minor scale lowers the 3rd, 6th, and 7th degrees of the major scale. Pattern: W-H-W-W-H-W-W. From A: A-B-C-D-E-F-G-A. It sounds darker than major. The natural minor scale uses exactly the same notes as its relative major — A natural minor and C major share all the same notes, just starting on different pitches."
        },
        {
          id: "music-theory-201-l11-c3",
          title: "Harmonic and Melodic Minor",
          content:
            "The harmonic minor raises the 7th degree of the natural minor back up, creating a leading tone that 'pulls' toward the tonic. From A: A-B-C-D-E-F-G♯-A. This creates an exotic-sounding gap between the 6th and 7th (an augmented 2nd). The melodic minor smooths that gap: ascending, it raises both the 6th and 7th; descending, it reverts to natural minor. From A ascending: A-B-C-D-E-F♯-G♯-A."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-201-l11-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Arrange these notes to form an A harmonic minor scale ascending:",
          items: ["A", "B", "C", "D", "E", "F", "G♯", "A"],
          zones: ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "Octave"]
        }
      ],
      flashcards: [
        { id: "music-theory-201-l11-f1", front: "Natural minor pattern", back: "W-H-W-W-H-W-W — the 3rd, 6th, and 7th degrees are lowered compared to major" },
        { id: "music-theory-201-l11-f2", front: "Harmonic minor", back: "Natural minor with a raised 7th degree, creating a leading tone and an augmented 2nd between 6 and 7" },
        { id: "music-theory-201-l11-f3", front: "Melodic minor (ascending)", back: "Natural minor with raised 6th and 7th ascending; reverts to natural minor descending" },
        { id: "music-theory-201-l11-f4", front: "Leading tone", back: "The 7th degree of a scale when it's a half step below the tonic — it 'leads' the ear toward resolution" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive understanding of intervals, chords, keys, and scales"
      ],
      questions: [
        {
          id: "music-theory-201-l12-q1",
          text: "What makes the harmonic minor scale different from the natural minor?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "The 3rd degree is raised" },
            { id: "b", text: "The 7th degree is raised" },
            { id: "c", text: "The 6th and 7th degrees are both raised" },
            { id: "d", text: "The 2nd degree is lowered" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l12-q2",
          text: "How many half steps are in a minor 6th?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "7" },
            { id: "b", text: "8" },
            { id: "c", text: "9" },
            { id: "d", text: "10" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l12-q3",
          text: "What chord quality is built on the 2nd degree of a major scale?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Major" },
            { id: "b", text: "Minor" },
            { id: "c", text: "Diminished" },
            { id: "d", text: "Augmented" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l12-q4",
          text: "B♭ major and G minor share the same key signature because they are:",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "Enharmonic equivalents" },
            { id: "b", text: "Parallel keys" },
            { id: "c", text: "Relative keys" },
            { id: "d", text: "Neighboring keys" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L13  Ear Training Fundamentals  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l13",
      title: "Ear Training Fundamentals",
      type: "video",
      duration: 12,
      objectives: [
        "Associate intervals with familiar song references",
        "Distinguish major from minor triads by ear",
        "Describe strategies for developing relative pitch"
      ],
      chunks: [
        {
          id: "music-theory-201-l13-c1",
          title: "Song Reference Method",
          content:
            "One of the fastest ways to learn intervals by ear is to associate each one with the opening of a well-known song. Minor 2nd: 'Jaws' theme. Major 2nd: 'Happy Birthday.' Minor 3rd: 'Greensleeves.' Major 3rd: 'When the Saints Go Marching In.' Perfect 4th: 'Here Comes the Bride.' Perfect 5th: 'Twinkle, Twinkle Little Star.' These reference songs give your brain an anchor for each sound."
        },
        {
          id: "music-theory-201-l13-c2",
          title: "Major vs. Minor by Ear",
          content:
            "Major triads sound bright, open, and stable — think of a triumphant fanfare. Minor triads sound darker, more introspective — think of a somber film score. The difference is just one note: the 3rd is a half step lower in minor. Train your ear by playing both qualities back to back and noticing the emotional shift. With practice, you can identify chord quality instantly."
        },
        {
          id: "music-theory-201-l13-c3",
          title: "Building Relative Pitch",
          content:
            "Relative pitch is the ability to identify or produce a note by comparing it to a reference note. Unlike perfect pitch (which is mostly innate), relative pitch can be trained. Practice: sing a known interval from any starting note. If you can find a perfect 5th from any note, you can navigate to any other note from there. Daily interval singing drills — even five minutes — build this skill steadily."
        }
      ],
      flashcards: [
        { id: "music-theory-201-l13-f1", front: "Relative pitch", back: "The ability to identify intervals and notes by comparison to a reference note — trainable through practice" },
        { id: "music-theory-201-l13-f2", front: "Perfect 4th song reference", back: "'Here Comes the Bride' (first two notes)" },
        { id: "music-theory-201-l13-f3", front: "Minor 3rd song reference", back: "'Greensleeves' (first two notes of the melody)" },
        { id: "music-theory-201-l13-f4", front: "Perfect 5th song reference", back: "'Twinkle, Twinkle Little Star' (first two notes)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Transposition Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l14",
      title: "Transposition Coaching Clinic",
      type: "interactive",
      duration: 14,
      objectives: [
        "Transpose a melody from one key to another by interval",
        "Identify common transposition mistakes",
        "Apply knowledge of key signatures to verify transpositions"
      ],
      chunks: [
        {
          id: "music-theory-201-l14-c1",
          title: "What Is Transposition?",
          content:
            "Transposition means moving every note of a piece up or down by the same interval. A melody in C major transposed up a perfect 5th becomes a melody in G major. The shape and rhythm stay the same — only the pitch level changes. Transposition is essential for accommodating different vocal ranges and transposing instruments (like trumpet in B♭ or horn in F)."
        },
        {
          id: "music-theory-201-l14-c2",
          title: "Step-by-Step Transposition",
          content:
            "1) Determine the interval of transposition (e.g., up a major 2nd). 2) Write the new key signature. 3) Move every note up by the same interval, preserving accidentals relative to the new key. Common mistake: forgetting to adjust the key signature, which leads to wrong accidentals. Always write the new key signature first, then transpose note by note."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-201-l14-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Transpose these C major notes up a perfect 5th to G major. Drag each transposed note to its position:",
          items: ["G", "A", "B", "C", "D"],
          zones: ["C → ?", "D → ?", "E → ?", "F → ?", "G → ?"]
        }
      ],
      flashcards: [
        { id: "music-theory-201-l14-f1", front: "Transposition", back: "Moving every note of a melody or passage up or down by the same interval, preserving the musical shape" },
        { id: "music-theory-201-l14-f2", front: "Transposing instrument", back: "An instrument whose written pitch differs from its sounding pitch (e.g., B♭ trumpet, F horn)" },
        { id: "music-theory-201-l14-f3", front: "Concert pitch", back: "The actual sounding pitch — what the audience hears, regardless of how the music is notated for a transposing instrument" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-201-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive mastery of intermediate music theory"
      ],
      questions: [
        {
          id: "music-theory-201-l15-q1",
          text: "Which song opening is commonly used to remember a perfect 4th?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "'Happy Birthday'" },
            { id: "b", text: "'Here Comes the Bride'" },
            { id: "c", text: "'Jaws' theme" },
            { id: "d", text: "'Twinkle, Twinkle Little Star'" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l15-q2",
          text: "When transposing a melody up a major 2nd from C major, what key do you end up in?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "B♭ major" },
            { id: "b", text: "D major" },
            { id: "c", text: "E♭ major" },
            { id: "d", text: "G major" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l15-q3",
          text: "The melodic minor scale ascending differs from the natural minor by raising which degrees?",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "3rd and 5th" },
            { id: "b", text: "6th and 7th" },
            { id: "c", text: "2nd and 3rd" },
            { id: "d", text: "4th and 5th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-201-l15-q4",
          text: "On the circle of fifths, moving one step counterclockwise from C gives you:",
          skillId: "music-theory-201-skill-core",
          options: [
            { id: "a", text: "G major" },
            { id: "b", text: "F major" },
            { id: "c", text: "D major" },
            { id: "d", text: "B♭ major" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    }
  ]
};
