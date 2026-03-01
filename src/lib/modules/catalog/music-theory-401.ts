import type { LearningModule } from "@/lib/modules/types";

export const MusicTheory401Module: LearningModule = {
  id: "music-theory-401",
  title: "Expert Music Theory",
  description:
    "Dive into jazz harmony with extended chords, study counterpoint from species to free writing, explore orchestration and arranging, and analyze advanced compositional techniques.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Build and voice 7th, 9th, 11th, and 13th chords",
    "Analyze jazz chord symbols and lead-sheet notation",
    "Write species counterpoint following voice-leading rules",
    "Identify instrument ranges, timbres, and idiomatic writing for orchestral families",
    "Apply tritone substitution and other jazz reharmonization techniques",
    "Compose a short piece demonstrating counterpoint and extended harmony",
    "Score a short passage for a small ensemble"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Extended Chords  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l01",
      title: "Extended Chords: Beyond Triads",
      type: "video",
      duration: 13,
      objectives: [
        "Build 7th chords in all four qualities (major 7, dominant 7, minor 7, half-diminished 7)",
        "Stack 3rds to create 9th, 11th, and 13th chords",
        "Read jazz chord symbols (Cmaj7, Dm7, G7, etc.)"
      ],
      chunks: [
        {
          id: "music-theory-401-l01-c1",
          title: "Seventh Chords",
          content:
            "A 7th chord adds a fourth note — a 7th above the root — to a triad. Four common types: Major 7th (Cmaj7 = C-E-G-B) — warm, dreamy. Dominant 7th (C7 = C-E-G-B♭) — tense, wants to resolve. Minor 7th (Cm7 = C-E♭-G-B♭) — mellow, smooth. Half-diminished 7th (Cø7 = C-E♭-G♭-B♭) — dark, restless. In jazz, almost every chord is at least a 7th chord."
        },
        {
          id: "music-theory-401-l01-c2",
          title: "9ths, 11ths, and 13ths",
          content:
            "Keep stacking 3rds beyond the 7th and you get extensions. The 9th is the same note as the 2nd, one octave up. The 11th = the 4th up an octave. The 13th = the 6th up an octave. A C13 chord theoretically contains C-E-G-B♭-D-F-A — all seven notes of the scale! In practice, pianists and guitarists omit redundant tones (often the 5th and sometimes the root) and keep only the most colorful notes."
        },
        {
          id: "music-theory-401-l01-c3",
          title: "Jazz Chord Symbols",
          content:
            "Jazz uses a shorthand for chords on lead sheets. 'C' = C major triad. 'Cm' or 'C-' = C minor. 'C7' = C dominant 7. 'Cmaj7' or 'CΔ7' = C major 7. 'Cm7' or 'C-7' = C minor 7. 'Cø7' = C half-diminished 7. 'C°7' = C fully diminished 7. Alterations go in parentheses or superscript: C7(♯9), Cmaj9(♯11). Reading these fluently is essential for jazz performance."
        }
      ],
      flashcards: [
        { id: "music-theory-401-l01-f1", front: "Dominant 7th chord", back: "Major triad + minor 7th (e.g., C-E-G-B♭) — the most tension-filled 7th chord, wants to resolve to I" },
        { id: "music-theory-401-l01-f2", front: "Major 7th chord", back: "Major triad + major 7th (e.g., C-E-G-B) — lush and dreamy; used heavily in jazz ballads" },
        { id: "music-theory-401-l01-f3", front: "Half-diminished 7th (ø7)", back: "Diminished triad + minor 7th (e.g., C-E♭-G♭-B♭) — used as ii in minor-key ii-V-i progressions" },
        { id: "music-theory-401-l01-f4", front: "Chord extension", back: "Notes beyond the 7th: 9th, 11th, 13th — add color and complexity to jazz voicings" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Jazz Voicings  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l02",
      title: "Jazz Voicings Workshop",
      type: "interactive",
      duration: 14,
      objectives: [
        "Voice chords in open and close position",
        "Apply the 'shell voicing' technique (root, 3rd, 7th)",
        "Understand voice-leading between ii-V-I chords"
      ],
      chunks: [
        {
          id: "music-theory-401-l02-c1",
          title: "Close vs. Open Voicing",
          content:
            "Close voicing packs all chord tones within an octave — it sounds dense and full (useful for ensemble writing). Open voicing spreads notes across multiple octaves — it sounds more spacious and transparent. Jazz pianists often use open voicings in the left hand to leave room for the melody or improvisation in the right hand. Guitarists naturally play open voicings due to the instrument's tuning."
        },
        {
          id: "music-theory-401-l02-c2",
          title: "Shell Voicings",
          content:
            "A shell voicing strips a chord to its essentials: the root (or bass note) and the 'guide tones' — the 3rd and 7th. These two notes define the chord quality (major vs. dominant vs. minor) without the 5th, which is often considered redundant. Shell voicings are the starting point for jazz piano comping. From there, you add extensions (9th, 13th) as color."
        },
        {
          id: "music-theory-401-l02-c3",
          title: "Voice Leading in ii-V-I",
          content:
            "Good voice leading minimizes movement between chords. In a Dm7 → G7 → Cmaj7 progression: the 3rd of Dm7 (F) steps down to the 7th of G7 (F → F is common tone!). The 7th of Dm7 (C) stays as the root transition. The 3rd of G7 (B) resolves up to C (root of Cmaj7). The 7th of G7 (F) resolves down to E (3rd of Cmaj7). This smooth contrary motion is the hallmark of jazz voice leading."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-401-l02-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "Dm7 shell voicing", right: "D – F – C (root, 3rd, 7th)" },
            { left: "G7 shell voicing", right: "G – B – F (root, 3rd, 7th)" },
            { left: "Cmaj7 shell voicing", right: "C – E – B (root, 3rd, 7th)" },
            { left: "Am7 shell voicing", right: "A – C – G (root, 3rd, 7th)" },
            { left: "Fmaj7 shell voicing", right: "F – A – E (root, 3rd, 7th)" },
            { left: "Bø7 shell voicing", right: "B – D – A (root, 3rd, 7th)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-401-l02-f1", front: "Shell voicing", back: "A minimal chord voicing containing only the root, 3rd, and 7th — defines quality, leaves room for extensions" },
        { id: "music-theory-401-l02-f2", front: "Guide tones", back: "The 3rd and 7th of a chord — the two notes that most strongly define its quality" },
        { id: "music-theory-401-l02-f3", front: "Voice leading in jazz", back: "Moving each voice by the smallest possible interval between chords; 3rds and 7ths typically exchange or resolve by step" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Jazz Harmony Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l03",
      title: "Jazz Harmony Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of extended chords and jazz voicings"
      ],
      questions: [
        {
          id: "music-theory-401-l03-q1",
          text: "What notes make up a Dm7 chord?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "D – F♯ – A – C" },
            { id: "b", text: "D – F – A – C" },
            { id: "c", text: "D – F – A♭ – C" },
            { id: "d", text: "D – F♯ – A – C♯" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l03-q2",
          text: "In a shell voicing, which chord tones are typically included?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Root, 3rd, and 5th" },
            { id: "b", text: "Root, 3rd, and 7th" },
            { id: "c", text: "Root, 5th, and 9th" },
            { id: "d", text: "3rd, 5th, and 7th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l03-q3",
          text: "What chord symbol represents a half-diminished 7th on C?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Cdim7" },
            { id: "b", text: "Cø7" },
            { id: "c", text: "Cm7" },
            { id: "d", text: "C7(♭5)" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l03-q4",
          text: "The 13th of a chord is enharmonically the same as which scale degree?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "2nd" },
            { id: "b", text: "4th" },
            { id: "c", text: "6th" },
            { id: "d", text: "7th" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 1, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L04  Tritone Substitution  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l04",
      title: "Tritone Substitution & Reharmonization",
      type: "video",
      duration: 13,
      objectives: [
        "Explain tritone substitution as replacing V7 with ♭II7",
        "Apply tritone subs to create chromatic bass lines",
        "Identify other reharmonization techniques: modal interchange, chromatic mediants"
      ],
      chunks: [
        {
          id: "music-theory-401-l04-c1",
          title: "The Tritone Sub",
          content:
            "A tritone substitution replaces a dominant 7th chord with another dominant 7th a tritone (6 half steps) away. G7 can be replaced by D♭7. Why? Both chords share the same guide tones: B and F appear in G7 (as 3rd and 7th), and in D♭7 (as 7th and 3rd) — they just swap roles. This creates a chromatic bass line: Dm7 → D♭7 → Cmaj7 instead of Dm7 → G7 → Cmaj7."
        },
        {
          id: "music-theory-401-l04-c2",
          title: "Chromatic Bass Motion",
          content:
            "Tritone subs are prized because they create smooth chromatic bass movement. In a standard ii-V-I in C: D → G → C (root motion by 5th). With a tritone sub: D → D♭ → C (chromatic descent). This half-step bass motion sounds sophisticated and is a hallmark of jazz arranging. You can apply tritone subs to any secondary dominant too: V/ii becomes ♭VI7, etc."
        },
        {
          id: "music-theory-401-l04-c3",
          title: "Other Reharmonization Tools",
          content:
            "Modal interchange (borrowing chords from the parallel minor/major) adds unexpected color — like using ♭VI or ♭VII from C minor in a C major context. Chromatic mediants are chords a major or minor 3rd away that share one note with the original — C major to E major, for instance. These tools let arrangers transform a simple song into something harmonically rich and surprising."
        }
      ],
      flashcards: [
        { id: "music-theory-401-l04-f1", front: "Tritone substitution", back: "Replacing a dominant 7th chord with another dominant 7th a tritone (6 half steps) away — they share the same guide tones" },
        { id: "music-theory-401-l04-f2", front: "Modal interchange", back: "Borrowing chords from the parallel major or minor key to add unexpected color (e.g., ♭VI in a major key)" },
        { id: "music-theory-401-l04-f3", front: "Chromatic mediant", back: "A chord a major or minor 3rd away from the original that shares at least one common tone" },
        { id: "music-theory-401-l04-f4", front: "Reharmonization", back: "Replacing the original chords of a melody with alternative harmonies that support the same melody differently" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Species Counterpoint  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l05",
      title: "Species Counterpoint",
      type: "interactive",
      duration: 14,
      objectives: [
        "Write first-species (note-against-note) counterpoint",
        "Apply the rules: begin and end on consonances, prefer contrary motion, avoid parallel 5ths/octaves",
        "Understand the progression from first through fifth species"
      ],
      chunks: [
        {
          id: "music-theory-401-l05-c1",
          title: "What Is Counterpoint?",
          content:
            "Counterpoint is the art of combining two or more independent melodic lines that work together harmonically. Unlike harmony (which thinks in vertical chords), counterpoint thinks horizontally — each voice has its own melodic logic. Species counterpoint, codified by Johann Fux in 1725, teaches this art in five graded steps (species). It's the training method used by Bach, Mozart, Beethoven, and modern film composers."
        },
        {
          id: "music-theory-401-l05-c2",
          title: "First Species: Note Against Note",
          content:
            "In first species, one note in the counterpoint aligns with one note in the cantus firmus (the given melody). Rules: begin and end on a perfect consonance (unison, 5th, or octave). Between start and end, use mostly imperfect consonances (3rds, 6ths) with occasional perfect consonances. Prefer contrary motion (voices move in opposite directions). Never use parallel 5ths or octaves. No voice crossing."
        },
        {
          id: "music-theory-401-l05-c3",
          title: "Beyond First Species",
          content:
            "Second species adds two notes against each cantus note — introducing passing tones on weak beats. Third species has four notes per cantus note — more rhythmic variety and decorative motion. Fourth species uses suspensions (syncopated notes held across the beat). Fifth species (florid) combines all previous species freely. Each species adds a layer of complexity while maintaining the fundamental voice-leading principles."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-401-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Allowed in First Species", "Forbidden in First Species"],
          items: [
            { text: "Begin on a perfect unison or octave", bucket: "Allowed in First Species" },
            { text: "Parallel 5ths between voices", bucket: "Forbidden in First Species" },
            { text: "Contrary motion between voices", bucket: "Allowed in First Species" },
            { text: "Voice crossing", bucket: "Forbidden in First Species" },
            { text: "Mostly 3rds and 6ths", bucket: "Allowed in First Species" },
            { text: "Consecutive parallel octaves", bucket: "Forbidden in First Species" },
            { text: "End on a perfect consonance", bucket: "Allowed in First Species" },
            { text: "More than three perfect consonances in a row", bucket: "Forbidden in First Species" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-401-l05-f1", front: "Counterpoint", back: "The art of combining independent melodic lines that are harmonically compatible but rhythmically and melodically distinct" },
        { id: "music-theory-401-l05-f2", front: "Cantus firmus", back: "A fixed melody (usually in whole notes) against which a counterpoint line is composed" },
        { id: "music-theory-401-l05-f3", front: "First species", back: "Note-against-note counterpoint — one note in the upper voice for each note in the cantus firmus" },
        { id: "music-theory-401-l05-f4", front: "Parallel 5ths/octaves", back: "Two voices moving in the same direction by a 5th or octave — forbidden because they weaken voice independence" }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Counterpoint & Reharm Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l06",
      title: "Counterpoint & Reharmonization Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of counterpoint rules and reharmonization"
      ],
      questions: [
        {
          id: "music-theory-401-l06-q1",
          text: "A tritone sub for G7 is:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "C7" },
            { id: "b", text: "D7" },
            { id: "c", text: "D♭7" },
            { id: "d", text: "A♭7" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-401-l06-q2",
          text: "In first species counterpoint, voices should primarily move in:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Parallel motion" },
            { id: "b", text: "Contrary motion" },
            { id: "c", text: "Oblique motion only" },
            { id: "d", text: "Similar motion" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l06-q3",
          text: "Which intervals are 'imperfect consonances' preferred in counterpoint?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Unisons and octaves" },
            { id: "b", text: "3rds and 6ths" },
            { id: "c", text: "4ths and 5ths" },
            { id: "d", text: "2nds and 7ths" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l06-q4",
          text: "Modal interchange borrows chords from the:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Dominant key" },
            { id: "b", text: "Relative major/minor" },
            { id: "c", text: "Parallel major/minor" },
            { id: "d", text: "Subdominant key" }
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
       L07  Orchestration: Instrument Families  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l07",
      title: "Orchestration: Instrument Families",
      type: "video",
      duration: 13,
      objectives: [
        "Describe the four orchestral families: strings, woodwinds, brass, percussion",
        "Identify the range, timbre, and role of principal instruments in each family",
        "Understand how instrument choice affects color and texture"
      ],
      chunks: [
        {
          id: "music-theory-401-l07-c1",
          title: "Strings",
          content:
            "The string section is the backbone of the orchestra. Violin (highest, most agile), viola (warm middle voice), cello (rich, vocal quality), double bass (deep foundation). Strings can sustain notes, play rapid passages, create lush harmonies with divisi, and produce special effects like pizzicato (plucking), tremolo (rapid bowing), and harmonics. They blend with everything and can shift from whisper-soft to powerfully loud."
        },
        {
          id: "music-theory-401-l07-c2",
          title: "Woodwinds",
          content:
            "Woodwinds add color and definition. Flute (bright, agile, piercing high register), oboe (nasal, penetrating, often carries melody), clarinet (warm, huge range, chameleon-like), bassoon (dark, dry, humorous or somber). Each has a unique timbre that cuts through textures differently. Woodwinds often carry solo melodies and add detail to the orchestral palette. Extended woodwinds include piccolo, English horn, bass clarinet, and contrabassoon."
        },
        {
          id: "music-theory-401-l07-c3",
          title: "Brass and Percussion",
          content:
            "Brass instruments (trumpet, horn, trombone, tuba) provide power, nobility, and brilliance. Soft brass adds warmth; loud brass is thrilling and heroic. The French horn blends beautifully with both strings and woodwinds. Percussion divides into pitched (timpani, xylophone, vibraphone, marimba) and unpitched (snare drum, bass drum, cymbals, triangle). Percussion adds rhythm, color, and dramatic impact. Timpani can create tension; a cymbal crash punctuates a climax."
        }
      ],
      flashcards: [
        { id: "music-theory-401-l07-f1", front: "Divisi", back: "Splitting a string section into multiple parts, each playing different notes — creates rich harmonies" },
        { id: "music-theory-401-l07-f2", front: "Pizzicato", back: "Plucking strings with the fingers instead of bowing — creates a percussive, staccato effect" },
        { id: "music-theory-401-l07-f3", front: "Transposing instruments", back: "Instruments whose written pitch differs from sounding pitch (clarinet in B♭, horn in F, trumpet in B♭)" },
        { id: "music-theory-401-l07-f4", front: "Timbre", back: "The unique tone color of an instrument — what makes a flute sound different from a violin on the same note" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Scoring for Small Ensemble  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l08",
      title: "Scoring for Small Ensemble",
      type: "interactive",
      duration: 14,
      objectives: [
        "Assign melody, harmony, and bass roles to appropriate instruments",
        "Balance dynamics across instruments with different volumes",
        "Apply doubling and spacing principles for clean textures"
      ],
      chunks: [
        {
          id: "music-theory-401-l08-c1",
          title: "Role Assignment",
          content:
            "Every arrangement needs three functions covered: melody (the tune — give to an instrument that projects well), harmony (inner voices filling out chords — instruments with a blending quality), and bass (the foundation — a low instrument providing harmonic grounding). In a string quartet: violin I takes melody, violin II and viola handle harmony, cello covers bass. In a jazz combo: trumpet or sax melodies, piano/guitar harmony, bass provides the foundation."
        },
        {
          id: "music-theory-401-l08-c2",
          title: "Balance and Dynamics",
          content:
            "Not all instruments are equally loud. A trumpet at forte will overpower a flute at forte. Effective scoring means adjusting dynamics per instrument to achieve balance. General rule: louder instruments play softer, or softer instruments are doubled. Also consider register: instruments are louder and more penetrating in their upper registers. Writing a flute melody in its low register against loud brass guarantees it will be buried."
        },
        {
          id: "music-theory-401-l08-c3",
          title: "Spacing and Doubling",
          content:
            "Place wider intervals in the bass and closer intervals in the upper voices — this mirrors the natural overtone series and sounds clear. Doubling the root or 5th strengthens stability; doubling the 3rd colors the chord. Avoid doubling the leading tone (it creates parallel octaves when it resolves). In orchestration, octave doubling of the melody adds power without changing the harmony."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-401-l08-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Assign the best role for each instrument in a string quartet arrangement:",
          items: ["Melody", "Harmony (upper)", "Harmony (lower)", "Bass line"],
          zones: ["Violin I", "Violin II", "Viola", "Cello"]
        }
      ],
      flashcards: [
        { id: "music-theory-401-l08-f1", front: "Doubling", back: "Having two or more instruments play the same note (often in octaves) — strengthens the line without changing harmony" },
        { id: "music-theory-401-l08-f2", front: "Spacing rule", back: "Wider intervals in the bass, closer intervals above — mimics the overtone series for clarity" },
        { id: "music-theory-401-l08-f3", front: "Overtone series", back: "The natural pattern of harmonics above a fundamental pitch — wider intervals at the bottom, closer at the top" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Orchestration Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l09",
      title: "Orchestration Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of orchestration principles"
      ],
      questions: [
        {
          id: "music-theory-401-l09-q1",
          text: "Which string technique involves plucking the strings with fingers?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Tremolo" },
            { id: "b", text: "Pizzicato" },
            { id: "c", text: "Sul ponticello" },
            { id: "d", text: "Col legno" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l09-q2",
          text: "In orchestral spacing, wider intervals should be placed:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "In the highest voices" },
            { id: "b", text: "In the middle voices" },
            { id: "c", text: "In the lowest voices" },
            { id: "d", text: "Evenly throughout all voices" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-401-l09-q3",
          text: "The French horn blends well with both strings and woodwinds because of its:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Extremely loud volume" },
            { id: "b", text: "Warm, round timbre" },
            { id: "c", text: "Very high range" },
            { id: "d", text: "Percussive attack" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l09-q4",
          text: "When a trumpet plays at forte and a flute plays at forte, to achieve balance you should:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Keep both at forte" },
            { id: "b", text: "Have the trumpet play softer or the flute play louder/double it" },
            { id: "c", text: "Remove the flute from the passage" },
            { id: "d", text: "Add more brass instruments" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Jazz, Counterpoint & Orchestration  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l10",
      title: "Mastery Quiz: Jazz, Counterpoint & Orchestration",
      type: "quiz",
      duration: 12,
      objectives: [
        "Synthesize expert-level knowledge across all topics"
      ],
      questions: [
        {
          id: "music-theory-401-l10-q1",
          text: "A Cmaj9 chord contains which notes?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "C – E – G – B – D" },
            { id: "b", text: "C – E – G – B♭ – D" },
            { id: "c", text: "C – E♭ – G – B♭ – D" },
            { id: "d", text: "C – E – G – B – D♯" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-theory-401-l10-q2",
          text: "In species counterpoint, fourth species introduces:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Passing tones" },
            { id: "b", text: "Suspensions (syncopation)" },
            { id: "c", text: "Four notes against one" },
            { id: "d", text: "Free combination of all species" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l10-q3",
          text: "Which orchestral family provides the harmonic and melodic backbone of the orchestra?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Brass" },
            { id: "b", text: "Percussion" },
            { id: "c", text: "Strings" },
            { id: "d", text: "Woodwinds" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-401-l10-q4",
          text: "Tritone substitution works because the two dominant 7th chords share the same:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Root and 5th" },
            { id: "b", text: "3rd and 7th (guide tones)" },
            { id: "c", text: "9th and 13th" },
            { id: "d", text: "Bass note" }
          ],
          correctOptionId: "b",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L11  Advanced Analysis Lab  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l11",
      title: "Advanced Harmonic Analysis Lab",
      type: "interactive",
      duration: 15,
      objectives: [
        "Analyze a jazz standard chord chart using Roman numerals, secondary dominants, and tritone subs",
        "Identify modulations and tonicizations within a lead sheet",
        "Recognize common jazz form structures (AABA, blues, rhythm changes)"
      ],
      chunks: [
        {
          id: "music-theory-401-l11-c1",
          title: "AABA Form",
          content:
            "The most common jazz standard form is AABA (32 bars). The A section (8 bars) presents the main theme. It repeats (second A). The B section ('bridge' or 'middle 8') provides contrast — often in a different key or with a new chord progression. The final A returns the theme, sometimes with a modified ending. Standards like 'I Got Rhythm,' 'Take the A Train,' and 'Satin Doll' use AABA form."
        },
        {
          id: "music-theory-401-l11-c2",
          title: "Analyzing 'Autumn Leaves'",
          content:
            "The chord progression of 'Autumn Leaves' is a chain of ii-V-I movements. In G minor: Cm7 – F7 – B♭maj7 – E♭maj7 – Am7♭5 – D7 – Gm. Analysis: ii-V-I in B♭ major (Cm7 – F7 – B♭maj7), then IV of B♭ (E♭maj7), then iiø – V – i in G minor (Am7♭5 – D7 – Gm). The piece moves between relative major and minor, demonstrating how jazz uses key relationships."
        },
        {
          id: "music-theory-401-l11-c3",
          title: "Rhythm Changes",
          content:
            "'Rhythm changes' refers to the chord progression of Gershwin's 'I Got Rhythm' — one of the most commonly used jazz progressions. A section: I – vi – ii – V – I – vi – ii – V (in B♭). B section (bridge): III7 – VI7 – II7 – V7 (a cycle of dominant 7ths moving by 4ths). Hundreds of jazz tunes ('Oleo,' 'Anthropology,' 'Cotton Tail') are contrafacts — new melodies written over rhythm changes."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-401-l11-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "AABA form", right: "'I Got Rhythm,' 'Take the A Train'" },
            { left: "12-bar blues", right: "'Now's the Time,' 'Billie's Bounce'" },
            { left: "Rhythm changes", right: "'Oleo,' 'Anthropology'" },
            { left: "Through-composed", right: "Each section is new material; no repeats" },
            { left: "Contrafact", right: "New melody over an existing chord progression" },
            { left: "ii – V – I chain", right: "'Autumn Leaves,' 'All the Things You Are'" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-401-l11-f1", front: "AABA form", back: "32-bar jazz standard form: 8-bar theme (A), repeat (A), contrasting bridge (B), return (A)" },
        { id: "music-theory-401-l11-f2", front: "Rhythm changes", back: "The chord progression from 'I Got Rhythm' — one of the most reused progressions in jazz" },
        { id: "music-theory-401-l11-f3", front: "Contrafact", back: "A new melody composed over the chord changes of an existing standard" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive expert-level theory knowledge"
      ],
      questions: [
        {
          id: "music-theory-401-l12-q1",
          text: "The bridge of a 32-bar AABA form is typically how many bars?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "4 bars" },
            { id: "b", text: "8 bars" },
            { id: "c", text: "12 bars" },
            { id: "d", text: "16 bars" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l12-q2",
          text: "In the 'Autumn Leaves' progression, Cm7 – F7 – B♭maj7 represents:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "I – IV – V in C minor" },
            { id: "b", text: "ii – V – I in B♭ major" },
            { id: "c", text: "iii – VI – II in A♭ major" },
            { id: "d", text: "iv – VII – III in G minor" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l12-q3",
          text: "Second species counterpoint introduces what rhythmic element?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Suspensions" },
            { id: "b", text: "Two notes per cantus firmus note" },
            { id: "c", text: "Free rhythm" },
            { id: "d", text: "Syncopation" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l12-q4",
          text: "When doubling chord tones in orchestration, which note should you avoid doubling?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Root" },
            { id: "b", text: "3rd" },
            { id: "c", text: "5th" },
            { id: "d", text: "Leading tone" }
          ],
          correctOptionId: "d",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L13  Arranging for Real Ensembles  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l13",
      title: "Arranging for Real Ensembles",
      type: "video",
      duration: 13,
      objectives: [
        "Distinguish between arranging and orchestration",
        "Apply common arranging techniques: unison, soli, background figures",
        "Plan an arrangement from lead sheet to full score"
      ],
      chunks: [
        {
          id: "music-theory-401-l13-c1",
          title: "Arranging vs. Orchestration",
          content:
            "Orchestration assigns existing music to specific instruments. Arranging goes further: it reimagines the music itself — changing the harmony, rhythm, form, texture, and style. An arrangement of 'Happy Birthday' could turn it into a jazz waltz, a rock anthem, or a baroque fugue. The arranger makes creative decisions about every element; the orchestrator implements those decisions with instrument-specific knowledge."
        },
        {
          id: "music-theory-401-l13-c2",
          title: "Texture Techniques",
          content:
            "Unison/octaves: all instruments play the same melody — powerful and clear. Soli: a section plays the melody in harmony (like a saxophone soli in big band). Background figures (pads, riffs, countermelodies): supporting parts that add depth without competing with the melody. Call and response: one group states an idea, another answers. Layering these textures creates a dynamic, evolving arrangement."
        },
        {
          id: "music-theory-401-l13-c3",
          title: "From Lead Sheet to Full Score",
          content:
            "Step 1: Analyze the melody and chords. Step 2: Decide on form (how many times through, where to add intros/interludes/endings). Step 3: Assign melody and plan the harmonic rhythm. Step 4: Write inner voices and bass. Step 5: Add special effects (rhythmic hits, textural changes, solos). Step 6: Balance dynamics and articulations. The best arrangements serve the song — every choice should enhance the melody and emotion."
        }
      ],
      flashcards: [
        { id: "music-theory-401-l13-f1", front: "Soli", back: "A section of instruments playing a harmonized melody together — a signature jazz big band technique" },
        { id: "music-theory-401-l13-f2", front: "Background figure", back: "A supporting musical idea (pad, riff, countermelody) that adds depth without competing with the melody" },
        { id: "music-theory-401-l13-f3", front: "Call and response", back: "A musical conversation where one group states an idea and another group answers" },
        { id: "music-theory-401-l13-f4", front: "Harmonic rhythm", back: "The rate at which chords change — fast harmonic rhythm creates urgency; slow creates stability" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Composition Capstone Workshop  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l14",
      title: "Composition Capstone Workshop",
      type: "interactive",
      duration: 15,
      objectives: [
        "Combine counterpoint, jazz harmony, and orchestration into a short composition",
        "Plan form, texture, and instrumentation for a 16-bar piece",
        "Self-evaluate using the principles learned throughout the course"
      ],
      chunks: [
        {
          id: "music-theory-401-l14-c1",
          title: "Planning Your Piece",
          content:
            "Before writing a note, plan: (1) Key and mode — what emotional color? (2) Form — ABA? Through-composed? (3) Instrumentation — what instruments, what roles? (4) Harmonic plan — sketch the Roman numeral progression with cadences. (5) Melodic plan — arc, climax, range. (6) Texture plan — where unison? Where harmonized? Where counterpoint? A good plan saves time and produces a more coherent piece."
        },
        {
          id: "music-theory-401-l14-c2",
          title: "Writing Process",
          content:
            "Start with the melody — it's what listeners remember. Then add the bass line (creating a two-voice counterpoint skeleton). Fill in inner voices using good voice leading. Add non-chord tones for interest. Check for parallel 5ths/octaves. Verify that each instrument stays within its comfortable range. Play through each part individually — each should make melodic sense on its own, not just as part of the harmony."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-401-l14-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Do First (Planning)", "Do Second (Writing)", "Do Last (Reviewing)"],
          items: [
            { text: "Choose key, mode, and form", bucket: "Do First (Planning)" },
            { text: "Sketch the chord progression", bucket: "Do First (Planning)" },
            { text: "Write the melody", bucket: "Do Second (Writing)" },
            { text: "Add bass line and inner voices", bucket: "Do Second (Writing)" },
            { text: "Check for parallel 5ths and octaves", bucket: "Do Last (Reviewing)" },
            { text: "Verify instrument ranges", bucket: "Do Last (Reviewing)" },
            { text: "Decide instrumentation and texture plan", bucket: "Do First (Planning)" },
            { text: "Add non-chord tones and articulations", bucket: "Do Second (Writing)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-401-l14-f1", front: "Two-voice skeleton", back: "Writing melody and bass first, then filling inner voices — ensures a strong harmonic and contrapuntal foundation" },
        { id: "music-theory-401-l14-f2", front: "Range check", back: "Verifying every instrument stays within its comfortable playing range — avoids unplayable or strained passages" },
        { id: "music-theory-401-l14-f3", front: "Score order", back: "The standard arrangement of instruments in a full score: woodwinds on top, then brass, percussion, and strings at the bottom" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-401-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive mastery of expert music theory"
      ],
      questions: [
        {
          id: "music-theory-401-l15-q1",
          text: "A contrafact is:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "A piece in contrary motion" },
            { id: "b", text: "A new melody over an existing chord progression" },
            { id: "c", text: "A counterpoint exercise" },
            { id: "d", text: "An arrangement for contrasting instruments" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l15-q2",
          text: "In standard score order, which family appears at the top?",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Strings" },
            { id: "b", text: "Brass" },
            { id: "c", text: "Woodwinds" },
            { id: "d", text: "Percussion" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-401-l15-q3",
          text: "The guide tones of a 7th chord are the:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Root and 5th" },
            { id: "b", text: "3rd and 7th" },
            { id: "c", text: "Root and 3rd" },
            { id: "d", text: "5th and 7th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-401-l15-q4",
          text: "When writing a composition, the recommended first step is to:",
          skillId: "music-theory-401-skill-core",
          options: [
            { id: "a", text: "Write the bass line" },
            { id: "b", text: "Add non-chord tones" },
            { id: "c", text: "Plan key, form, instrumentation, and harmonic progression" },
            { id: "d", text: "Check for parallel 5ths" }
          ],
          correctOptionId: "c",
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
