import type { LearningModule } from "@/lib/modules/types";

export const MusicTheory301Module: LearningModule = {
  id: "music-theory-301",
  title: "Advanced Music Theory",
  description:
    "Master chord progressions, explore the seven modes, analyze musical form, and begin composing original melodies. Think like a musician, not just read like one.",
  subject: "Music",
  tags: ["core", "curriculum", "interactive", "music"],
  minAge: 13,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Analyze and write chord progressions using Roman numeral notation",
    "Identify and construct all seven diatonic modes",
    "Recognize common musical forms (binary, ternary, rondo, sonata)",
    "Compose an 8-bar melody following voice-leading principles",
    "Understand secondary dominants and their function",
    "Identify cadence types: authentic, half, plagal, and deceptive",
    "Apply non-chord tones to create melodic interest"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Roman Numeral Analysis  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l01",
      title: "Roman Numeral Analysis",
      type: "video",
      duration: 12,
      objectives: [
        "Label chords with Roman numerals based on their scale degree",
        "Distinguish uppercase (major) from lowercase (minor) numerals",
        "Analyze a simple four-chord progression"
      ],
      chunks: [
        {
          id: "music-theory-301-l01-c1",
          title: "Why Roman Numerals?",
          content:
            "Roman numeral analysis assigns a numeral to each chord based on which scale degree it's built on. In C major, a C chord is I, a D minor chord is ii, an E minor chord is iii, and so on. The beauty of this system is that it's key-independent: I-V-vi-IV means the same progression in every key. Uppercase = major, lowercase = minor, ° = diminished, + = augmented."
        },
        {
          id: "music-theory-301-l01-c2",
          title: "Diatonic Chords in Major",
          content:
            "Every major scale produces seven diatonic triads: I (major), ii (minor), iii (minor), IV (major), V (major), vi (minor), vii° (diminished). These seven chords are the harmonic palette of a key. Most popular music uses only 4-6 of them. The I chord is 'home' (tonic), V wants to resolve home (dominant), and IV leads somewhere (subdominant)."
        },
        {
          id: "music-theory-301-l01-c3",
          title: "Reading a Chord Chart",
          content:
            "When you see 'I - V - vi - IV' you're looking at the most common progression in pop music. In C major that's C - G - Am - F. In G major it's G - D - Em - C. Roman numerals let musicians communicate harmonic ideas without being locked to a specific key. This is essential for transposing, arranging, and improvisation."
        }
      ],
      flashcards: [
        { id: "music-theory-301-l01-f1", front: "Roman numeral I", back: "The tonic chord — built on the 1st scale degree; the 'home base' of a key" },
        { id: "music-theory-301-l01-f2", front: "Roman numeral V", back: "The dominant chord — built on the 5th scale degree; creates tension that resolves to I" },
        { id: "music-theory-301-l01-f3", front: "Roman numeral vi", back: "The submediant — a minor chord on the 6th degree; often used as a tonic substitute" },
        { id: "music-theory-301-l01-f4", front: "Diatonic", back: "Using only the notes and chords that belong to a given key, with no alterations" }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Common Progressions Workshop  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l02",
      title: "Common Progressions Workshop",
      type: "interactive",
      duration: 14,
      objectives: [
        "Identify the I-V-vi-IV, I-IV-V, and ii-V-I progressions",
        "Match progressions to the genres where they're most common",
        "Write a chord progression for a given mood"
      ],
      chunks: [
        {
          id: "music-theory-301-l02-c1",
          title: "The Pop Progression: I-V-vi-IV",
          content:
            "This four-chord loop dominates pop, rock, and country music. In C: C-G-Am-F. It works because it balances tension (V), release (I), and emotional depth (vi). Songs like 'Let It Be,' 'No Woman No Cry,' 'With or Without You,' and hundreds of others use this exact progression. It feels familiar because our ears have been trained on it for decades."
        },
        {
          id: "music-theory-301-l02-c2",
          title: "The Blues and Rock Progression: I-IV-V",
          content:
            "The three-chord I-IV-V progression is the backbone of blues, early rock, and folk. In A: A-D-E. The 12-bar blues structures this into a repeating form: 4 bars of I, 2 of IV, 2 of I, then V-IV-I-V (the turnaround). This progression feels grounded and driving because it uses only the three major chords in the key."
        },
        {
          id: "music-theory-301-l02-c3",
          title: "The Jazz Turnaround: ii-V-I",
          content:
            "In jazz, the ii-V-I is the fundamental building block. In C: Dm-G-C (or Dm7-G7-Cmaj7 with 7th chords). The ii chord sets up tension, V intensifies it, and I resolves it. Jazz standards chain multiple ii-V-Is together, sometimes in different keys. Mastering this progression is the gateway to jazz improvisation and arranging."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-301-l02-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "I – V – vi – IV", right: "Pop / Rock ballad" },
            { left: "I – IV – V – I", right: "Blues / Folk" },
            { left: "ii – V – I", right: "Jazz standard" },
            { left: "i – VII – VI – VII", right: "Film / Epic cinematic" },
            { left: "I – vi – IV – V", right: "1950s doo-wop" },
            { left: "vi – IV – I – V", right: "Modern pop / EDM" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-301-l02-f1", front: "I-V-vi-IV", back: "The most common pop progression — balances brightness (I, IV) with emotional depth (vi)" },
        { id: "music-theory-301-l02-f2", front: "12-bar blues", back: "A repeating form: 4 bars I, 2 bars IV, 2 bars I, then V-IV-I-V turnaround" },
        { id: "music-theory-301-l02-f3", front: "ii-V-I", back: "The fundamental jazz progression — tension (ii), intensification (V), resolution (I)" }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Progressions Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l03",
      title: "Progressions Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of chord progressions and Roman numeral analysis"
      ],
      questions: [
        {
          id: "music-theory-301-l03-q1",
          text: "In a major key, which Roman numeral represents a diminished triad?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "iii" },
            { id: "b", text: "V" },
            { id: "c", text: "vi" },
            { id: "d", text: "vii°" }
          ],
          correctOptionId: "d",
          explanation: ""
        },
        {
          id: "music-theory-301-l03-q2",
          text: "The progression I-V-vi-IV in G major is:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "G – C – Em – D" },
            { id: "b", text: "G – D – Em – C" },
            { id: "c", text: "G – D – Am – F" },
            { id: "d", text: "G – A – Bm – E" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l03-q3",
          text: "The ii-V-I progression is most associated with which genre?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Punk rock" },
            { id: "b", text: "Jazz" },
            { id: "c", text: "Country" },
            { id: "d", text: "Electronic dance music" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l03-q4",
          text: "What is the function of the V chord in tonal music?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Tonic — home and rest" },
            { id: "b", text: "Subdominant — departure" },
            { id: "c", text: "Dominant — tension seeking resolution to I" },
            { id: "d", text: "Mediant — color and contrast" }
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
       L04  Cadences  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l04",
      title: "Cadences: Musical Punctuation",
      type: "video",
      duration: 11,
      objectives: [
        "Define a cadence as a harmonic arrival point",
        "Identify authentic, half, plagal, and deceptive cadences",
        "Explain how cadences create phrase structure"
      ],
      chunks: [
        {
          id: "music-theory-301-l04-c1",
          title: "What Is a Cadence?",
          content:
            "A cadence is the end of a musical phrase — like punctuation in a sentence. A strong cadence feels like a period (final, settled). A weak cadence feels like a comma (pausing, more to come). Cadences are defined by their last two chords. They organize music into phrases, sections, and complete thoughts. Without cadences, music would be an endless stream of sound."
        },
        {
          id: "music-theory-301-l04-c2",
          title: "Authentic and Half Cadences",
          content:
            "An authentic cadence (V → I) is the strongest resolution in tonal music — it sounds complete and final. A perfect authentic cadence (PAC) has both chords in root position with the melody ending on the tonic note. An imperfect authentic cadence (IAC) is V → I but weaker (inverted chord or melody not on tonic). A half cadence (anything → V) feels incomplete — it leaves the listener hanging, like a question mark."
        },
        {
          id: "music-theory-301-l04-c3",
          title: "Plagal and Deceptive Cadences",
          content:
            "A plagal cadence (IV → I) is the 'Amen' cadence — softer and more gentle than authentic. It often follows an authentic cadence as a final confirmation. A deceptive cadence (V → vi) tricks the listener: they expect resolution to I, but the vi chord arrives instead. This creates surprise and allows the music to continue. Deceptive cadences are a composer's favorite plot twist."
        }
      ],
      flashcards: [
        { id: "music-theory-301-l04-f1", front: "Authentic cadence (AC)", back: "V → I — the strongest, most final-sounding cadence in tonal music" },
        { id: "music-theory-301-l04-f2", front: "Half cadence (HC)", back: "Any chord → V — sounds incomplete, like a question; demands continuation" },
        { id: "music-theory-301-l04-f3", front: "Plagal cadence", back: "IV → I — the 'Amen' cadence; softer and more hymn-like than authentic" },
        { id: "music-theory-301-l04-f4", front: "Deceptive cadence (DC)", back: "V → vi — the ear expects I but gets vi; creates surprise and continuation" }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  The Seven Modes  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l05",
      title: "The Seven Modes",
      type: "interactive",
      duration: 14,
      objectives: [
        "Name and construct all seven diatonic modes",
        "Identify the characteristic note that distinguishes each mode",
        "Associate modes with musical moods and genres"
      ],
      chunks: [
        {
          id: "music-theory-301-l05-c1",
          title: "Modes from the Major Scale",
          content:
            "The seven modes are seven different 'rotations' of the major scale. Start a major scale on each of its seven notes and you get a different mode: Ionian (1st degree, = major scale), Dorian (2nd), Phrygian (3rd), Lydian (4th), Mixolydian (5th), Aeolian (6th, = natural minor), Locrian (7th). Each has a unique step pattern and character."
        },
        {
          id: "music-theory-301-l05-c2",
          title: "Character Notes",
          content:
            "Each mode has a 'character note' — the one pitch that distinguishes it from major or natural minor. Dorian: raised 6th (compared to natural minor). Phrygian: lowered 2nd. Lydian: raised 4th. Mixolydian: lowered 7th. These single-note differences create dramatically different moods. Dorian sounds jazzy, Phrygian sounds Spanish/metal, Lydian sounds dreamy, Mixolydian sounds bluesy."
        },
        {
          id: "music-theory-301-l05-c3",
          title: "Modes in Popular Music",
          content:
            "Modes aren't just academic — they're everywhere. 'Oye Como Va' (Santana) is Dorian. 'Wherever I May Roam' (Metallica) uses Phrygian. 'The Simpsons' theme has Lydian flavor. 'Norwegian Wood' (Beatles) is Mixolydian. Film composers use Lydian for wonder and magic, Phrygian for exotic danger, and Dorian for cool sophistication."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-301-l05-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Major-like (bright)", "Minor-like (dark)", "Diminished (unstable)"],
          items: [
            { text: "Ionian", bucket: "Major-like (bright)" },
            { text: "Lydian", bucket: "Major-like (bright)" },
            { text: "Mixolydian", bucket: "Major-like (bright)" },
            { text: "Dorian", bucket: "Minor-like (dark)" },
            { text: "Phrygian", bucket: "Minor-like (dark)" },
            { text: "Aeolian", bucket: "Minor-like (dark)" },
            { text: "Locrian", bucket: "Diminished (unstable)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-301-l05-f1", front: "Dorian mode", back: "Minor mode with a raised 6th — sounds jazzy/soulful. Built on the 2nd degree of major." },
        { id: "music-theory-301-l05-f2", front: "Phrygian mode", back: "Minor mode with a lowered 2nd — sounds Spanish/exotic/heavy. Built on the 3rd degree." },
        { id: "music-theory-301-l05-f3", front: "Lydian mode", back: "Major mode with a raised 4th — sounds dreamy/floating. Built on the 4th degree." },
        { id: "music-theory-301-l05-f4", front: "Mixolydian mode", back: "Major mode with a lowered 7th — sounds bluesy/rock. Built on the 5th degree." }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Modes & Cadences Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l06",
      title: "Modes & Cadences Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of modes and cadence types"
      ],
      questions: [
        {
          id: "music-theory-301-l06-q1",
          text: "Which mode is identical to the natural minor scale?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Dorian" },
            { id: "b", text: "Phrygian" },
            { id: "c", text: "Aeolian" },
            { id: "d", text: "Locrian" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-301-l06-q2",
          text: "The Lydian mode's character note is a:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Lowered 2nd" },
            { id: "b", text: "Raised 4th" },
            { id: "c", text: "Lowered 7th" },
            { id: "d", text: "Raised 6th" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l06-q3",
          text: "A deceptive cadence moves from V to:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "I" },
            { id: "b", text: "IV" },
            { id: "c", text: "vi" },
            { id: "d", text: "ii" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-301-l06-q4",
          text: "Which mode is most associated with blues and rock music?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Phrygian" },
            { id: "b", text: "Lydian" },
            { id: "c", text: "Mixolydian" },
            { id: "d", text: "Locrian" }
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
       L07  Musical Form  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l07",
      title: "Musical Form: The Big Picture",
      type: "video",
      duration: 12,
      objectives: [
        "Define musical form as the large-scale structure of a composition",
        "Identify binary (AB), ternary (ABA), rondo, and verse-chorus forms",
        "Use letter labeling to map the sections of a piece"
      ],
      chunks: [
        {
          id: "music-theory-301-l07-c1",
          title: "Why Form Matters",
          content:
            "Form is the architecture of music — how sections relate, repeat, and contrast. Just as a building has rooms, hallways, and a floor plan, music has sections organized into recognizable patterns. Understanding form helps performers interpret music, composers structure ideas, and listeners follow the journey. We label sections with letters: the first section is A, a contrasting section is B, a third distinct section is C."
        },
        {
          id: "music-theory-301-l07-c2",
          title: "Binary and Ternary Form",
          content:
            "Binary form (AB) has two contrasting sections. A ends in a non-tonic key; B brings it home. Many Baroque dances use binary form. Ternary form (ABA) presents a theme, departs, then returns. The return of A provides satisfaction and closure. The 'da capo' aria in opera is ternary. The minuet and trio in classical symphonies is also ABA (the trio is B)."
        },
        {
          id: "music-theory-301-l07-c3",
          title: "Rondo and Song Form",
          content:
            "Rondo form (ABACABA or similar) features a recurring theme (A) alternating with contrasting episodes. It's common in classical finales — think of Beethoven's 'Für Elise.' Pop song form is verse-chorus (ABABCB): verse introduces new lyrics over the same music, chorus is the memorable hook, and C is the bridge that provides contrast before the final chorus. Understanding song form is essential for songwriting."
        }
      ],
      flashcards: [
        { id: "music-theory-301-l07-f1", front: "Binary form (AB)", back: "Two contrasting sections — A moves away from tonic; B resolves back" },
        { id: "music-theory-301-l07-f2", front: "Ternary form (ABA)", back: "Three-part form: theme, contrast, return — satisfying because A comes back" },
        { id: "music-theory-301-l07-f3", front: "Rondo form", back: "A recurring theme alternates with contrasting episodes (ABACA or ABACABA)" },
        { id: "music-theory-301-l07-f4", front: "Verse-chorus form", back: "Pop song structure: verses with changing lyrics, recurring chorus hook, optional bridge" }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Non-Chord Tones  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l08",
      title: "Non-Chord Tones",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify passing tones, neighbor tones, suspensions, and appoggiaturas",
        "Explain how non-chord tones create melodic motion and tension",
        "Add non-chord tones to a given melody"
      ],
      chunks: [
        {
          id: "music-theory-301-l08-c1",
          title: "Decorating the Skeleton",
          content:
            "A melody built only on chord tones would sound choppy and bare. Non-chord tones (NCTs) fill the gaps between chord tones, creating smooth motion and expressive tension. They're like seasoning in cooking — the underlying dish is the harmony, but NCTs add flavor. Every great melody uses them. There are several types, each defined by how the dissonant note is approached and left."
        },
        {
          id: "music-theory-301-l08-c2",
          title: "Passing and Neighbor Tones",
          content:
            "A passing tone fills the gap between two chord tones by step. In C major over a C chord: C-D-E, where D is a passing tone connecting C to E. A neighbor tone leaves a chord tone by step and returns: E-F-E, where F is a neighbor tone. These are the most common NCTs and create smooth, flowing melodies."
        },
        {
          id: "music-theory-301-l08-c3",
          title: "Suspensions and Appoggiaturas",
          content:
            "A suspension holds a note from the previous chord into the new chord, creating a clash that resolves downward by step. It's prepared (consonant) → suspended (dissonant) → resolved (consonant). Notated as numbers: 4-3 suspension, 7-6 suspension, 9-8 suspension. An appoggiatura leaps to a dissonant note and resolves by step — it's like a suspension without preparation, creating a dramatic 'lean.'"
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-301-l08-a1",
          title: "Sort into Categories",
          type: "sorting_buckets",
          buckets: ["Passing Tone", "Neighbor Tone", "Suspension", "Appoggiatura"],
          items: [
            { text: "Stepwise motion between two chord tones", bucket: "Passing Tone" },
            { text: "Leaves and returns to the same chord tone by step", bucket: "Neighbor Tone" },
            { text: "Held from previous chord, resolves down by step", bucket: "Suspension" },
            { text: "Leaps to a dissonance, resolves by step", bucket: "Appoggiatura" },
            { text: "C → D → E over a C major chord", bucket: "Passing Tone" },
            { text: "E → F → E over a C major chord", bucket: "Neighbor Tone" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-301-l08-f1", front: "Passing tone", back: "A non-chord tone that moves by step between two chord tones in the same direction" },
        { id: "music-theory-301-l08-f2", front: "Neighbor tone", back: "A non-chord tone that steps away from a chord tone and returns to it" },
        { id: "music-theory-301-l08-f3", front: "Suspension", back: "A held note from the previous chord that clashes with the new chord and resolves down by step (e.g., 4-3 sus)" },
        { id: "music-theory-301-l08-f4", front: "Appoggiatura", back: "A non-chord tone approached by leap and resolved by step — dramatic and expressive" }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Form & NCTs Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l09",
      title: "Form & NCTs Checkpoint",
      type: "quiz",
      duration: 8,
      objectives: [
        "Demonstrate knowledge of musical form and non-chord tones"
      ],
      questions: [
        {
          id: "music-theory-301-l09-q1",
          text: "ABA form is called:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Binary" },
            { id: "b", text: "Ternary" },
            { id: "c", text: "Rondo" },
            { id: "d", text: "Through-composed" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l09-q2",
          text: "A suspension is characterized by:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "A leap to a dissonance followed by stepwise resolution" },
            { id: "b", text: "A held note from the previous chord that resolves down by step" },
            { id: "c", text: "Stepwise motion connecting two chord tones" },
            { id: "d", text: "A note that steps away and returns" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l09-q3",
          text: "In rondo form, which section keeps returning?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "B" },
            { id: "b", text: "C" },
            { id: "c", text: "A" },
            { id: "d", text: "The bridge" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-301-l09-q4",
          text: "Which NCT is described as a 'passing tone'?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "A note held from the previous chord" },
            { id: "b", text: "A note approached by leap" },
            { id: "c", text: "A note connecting two chord tones by step in one direction" },
            { id: "d", text: "A note that decorates by stepping away and back" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      }
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Progressions, Modes & Form  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l10",
      title: "Mastery Quiz: Progressions, Modes & Form",
      type: "quiz",
      duration: 12,
      objectives: [
        "Synthesize knowledge of progressions, modes, form, and non-chord tones"
      ],
      questions: [
        {
          id: "music-theory-301-l10-q1",
          text: "The diatonic chords in a major key follow the quality pattern:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "I  ii  iii  IV  V  vi  vii°" },
            { id: "b", text: "I  II  III  IV  V  VI  VII" },
            { id: "c", text: "i  ii°  III  iv  v  VI  VII" },
            { id: "d", text: "I  ii  iii  IV  V  vi  VII" }
          ],
          correctOptionId: "a",
          explanation: ""
        },
        {
          id: "music-theory-301-l10-q2",
          text: "Dorian mode differs from Aeolian (natural minor) by having a:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Raised 7th" },
            { id: "b", text: "Lowered 2nd" },
            { id: "c", text: "Raised 6th" },
            { id: "d", text: "Lowered 4th" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-301-l10-q3",
          text: "A perfect authentic cadence (PAC) is defined as:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "IV → I with melody on the tonic" },
            { id: "b", text: "V → I with both chords in root position and melody on the tonic" },
            { id: "c", text: "V → vi with melody on the 3rd" },
            { id: "d", text: "Any movement to the V chord" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l10-q4",
          text: "In pop song form, the 'bridge' section is typically labeled:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "A" },
            { id: "b", text: "B" },
            { id: "c", text: "C" },
            { id: "d", text: "D" }
          ],
          correctOptionId: "c",
          explanation: ""
        }
      ],
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, analyze: 1 }
      }
    },

    /* ──────────────────────────────────────────────
       L11  Secondary Dominants Lab  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l11",
      title: "Secondary Dominants Lab",
      type: "interactive",
      duration: 14,
      objectives: [
        "Define a secondary dominant as a V chord 'borrowed' from another key",
        "Identify and label secondary dominants (V/V, V/vi, etc.)",
        "Hear how secondary dominants add color and direction to progressions"
      ],
      chunks: [
        {
          id: "music-theory-301-l11-c1",
          title: "Beyond Diatonic Harmony",
          content:
            "Diatonic chords create a solid foundation, but music would be monotonous if we never left the key. A secondary dominant is a major chord (or dominant 7th) that doesn't belong to the key but temporarily acts as the V of some other diatonic chord. Labeled V/x ('V of x'), it creates a momentary pull toward that chord. The most common is V/V — the dominant of the dominant."
        },
        {
          id: "music-theory-301-l11-c2",
          title: "V/V — The Most Common Secondary Dominant",
          content:
            "In C major, the V chord is G. The V of G is D major — which has an F♯ that doesn't belong in C major. That F♯ is a chromatic intruder that pulls the ear toward G. So a progression like C – D – G – C (I – V/V – V – I) sounds richer than staying purely diatonic. The D chord is called V/V ('five of five'). It intensifies the arrival on V."
        },
        {
          id: "music-theory-301-l11-c3",
          title: "Other Secondary Dominants",
          content:
            "Any diatonic chord (except the diminished vii°) can be preceded by its own secondary dominant. V/ii pulls toward ii, V/IV pulls toward IV, V/vi pulls toward vi. In C major: A7 → Dm is V7/ii → ii. D7 → G is V7/V → V. E7 → Am is V7/vi → vi. Each one introduces a chromatic note that adds color and forward motion."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-301-l11-a1",
          title: "Match the Pairs",
          type: "matching_pairs",
          pairs: [
            { left: "V/V in C major", right: "D major (has F♯)" },
            { left: "V/vi in C major", right: "E major (has G♯)" },
            { left: "V/ii in C major", right: "A major (has C♯)" },
            { left: "V/IV in C major", right: "C major (same as I)" },
            { left: "V/V in G major", right: "A major (has C♯)" },
            { left: "V/vi in G major", right: "B major (has D♯)" }
          ]
        }
      ],
      flashcards: [
        { id: "music-theory-301-l11-f1", front: "Secondary dominant", back: "A chord that acts as V (or V7) of a diatonic chord other than the tonic — adds chromatic color" },
        { id: "music-theory-301-l11-f2", front: "V/V", back: "'Five of five' — the dominant of the dominant chord; introduces a chromatic sharp" },
        { id: "music-theory-301-l11-f3", front: "Tonicization", back: "A brief, temporary emphasis on a non-tonic chord using its own secondary dominant" }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Mastery Retest  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l12",
      title: "Mastery Retest",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive advanced theory knowledge"
      ],
      questions: [
        {
          id: "music-theory-301-l12-q1",
          text: "In C major, V/vi is which chord?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "A minor" },
            { id: "b", text: "E major" },
            { id: "c", text: "D major" },
            { id: "d", text: "F major" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l12-q2",
          text: "Which form features a recurring theme alternating with contrasting episodes?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Binary" },
            { id: "b", text: "Ternary" },
            { id: "c", text: "Rondo" },
            { id: "d", text: "Through-composed" }
          ],
          correctOptionId: "c",
          explanation: ""
        },
        {
          id: "music-theory-301-l12-q3",
          text: "A 4-3 suspension means the 4th above the bass resolves down to the:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "2nd" },
            { id: "b", text: "3rd" },
            { id: "c", text: "5th" },
            { id: "d", text: "Octave" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l12-q4",
          text: "Phrygian mode's character note is a:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Raised 4th" },
            { id: "b", text: "Lowered 7th" },
            { id: "c", text: "Lowered 2nd" },
            { id: "d", text: "Raised 6th" }
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
       L13  Melody Composition Basics  (video)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l13",
      title: "Melody Composition Basics",
      type: "video",
      duration: 12,
      objectives: [
        "Apply voice-leading principles to compose smooth melodic lines",
        "Balance stepwise motion with leaps for melodic interest",
        "Create a sense of direction with contour and climax"
      ],
      chunks: [
        {
          id: "music-theory-301-l13-c1",
          title: "Melodic Contour",
          content:
            "A melody's contour is its shape — the pattern of ups and downs over time. Effective melodies usually have a clear high point (climax) that occurs once, often about two-thirds through the phrase. They balance stepwise motion (smooth, connected) with occasional leaps (dramatic, attention-grabbing). After a leap, the melody typically changes direction by step — this is called a 'compensating step.'"
        },
        {
          id: "music-theory-301-l13-c2",
          title: "Voice Leading",
          content:
            "Voice leading is the art of moving each note as smoothly as possible to the next. Principles: prefer stepwise motion; after a leap, move by step in the opposite direction; avoid parallel 5ths and octaves (they weaken independence between voices); resolve tendency tones (the 7th degree wants to resolve up, the 4th wants to resolve down). These guidelines produce natural, singable melodies."
        },
        {
          id: "music-theory-301-l13-c3",
          title: "Phrase Structure",
          content:
            "Most melodies organize into 4- or 8-bar phrases. A common pattern is the 'period': an antecedent phrase (question) ending with a half cadence, followed by a consequent phrase (answer) ending with an authentic cadence. The two phrases often share opening material but diverge at the cadence. This creates a satisfying musical sentence with a clear beginning, middle, and end."
        }
      ],
      flashcards: [
        { id: "music-theory-301-l13-f1", front: "Melodic contour", back: "The overall shape of a melody — its pattern of ascending, descending, and static motion" },
        { id: "music-theory-301-l13-f2", front: "Voice leading", back: "The practice of moving each note as smoothly as possible to the next, minimizing large leaps" },
        { id: "music-theory-301-l13-f3", front: "Period (music)", back: "A pair of phrases: antecedent (question ending on HC) + consequent (answer ending on AC)" },
        { id: "music-theory-301-l13-f4", front: "Compensating step", back: "After a leap, the melody steps in the opposite direction to smooth out the line" }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Composition Coaching Clinic  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l14",
      title: "Composition Coaching Clinic",
      type: "interactive",
      duration: 14,
      objectives: [
        "Identify common composition mistakes in given melodies",
        "Apply non-chord tones to enrich a basic melodic line",
        "Arrange chord tones and passing tones into a singable phrase"
      ],
      chunks: [
        {
          id: "music-theory-301-l14-c1",
          title: "Common Melody Mistakes",
          content:
            "Beginner composers often: (1) use too many leaps without compensating steps, making the line angular; (2) stay within a narrow range, making it boring; (3) don't have a clear climax; (4) end phrases without a cadence, so nothing feels complete. The fix for each: balance leaps with steps, explore the full range of the instrument or voice, plan one climax per phrase, and always target a chord tone on strong beats."
        },
        {
          id: "music-theory-301-l14-c2",
          title: "Enriching With Non-Chord Tones",
          content:
            "Start with a skeleton of chord tones on strong beats, then fill in weak beats with passing tones and neighbor tones. Add a suspension at a cadence for drama. Use an appoggiatura on an important word in vocal music for emotional emphasis. The non-chord tones should serve the melody — don't add them randomly. Each one should either create motion (passing tone), decoration (neighbor), or tension (suspension/appoggiatura)."
        }
      ],
      interactiveActivities: [
        {
          id: "music-theory-301-l14-a1",
          title: "Drag and Drop",
          type: "drag_and_drop",
          prompt: "Build an 8-note melody in C major over a I–V–I progression. Place chord tones on beats 1 and 3, passing tones on beats 2 and 4:",
          items: ["C", "D", "E", "F", "G", "A", "B", "C"],
          zones: ["Beat 1 (I)", "Beat 2", "Beat 3 (V)", "Beat 4", "Beat 1 (V)", "Beat 2", "Beat 3 (I)", "Beat 4"]
        }
      ],
      flashcards: [
        { id: "music-theory-301-l14-f1", front: "Strong beat", back: "Beats 1 and 3 in 4/4 time — typically carry chord tones and important melodic notes" },
        { id: "music-theory-301-l14-f2", front: "Weak beat", back: "Beats 2 and 4 in 4/4 — good locations for passing tones, neighbor tones, and rhythmic variety" },
        { id: "music-theory-301-l14-f3", front: "Tendency tone", back: "A note with a strong pull toward resolution — the leading tone (7th) resolves up, the 4th resolves down" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "music-theory-301-l15",
      title: "Mastery Sprint",
      type: "quiz",
      duration: 10,
      objectives: [
        "Demonstrate comprehensive mastery of advanced music theory"
      ],
      questions: [
        {
          id: "music-theory-301-l15-q1",
          text: "Which progression is known as the 'Amen cadence'?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "V → I" },
            { id: "b", text: "IV → I" },
            { id: "c", text: "V → vi" },
            { id: "d", text: "ii → V" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l15-q2",
          text: "A period in music consists of:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Two contrasting sections A and B" },
            { id: "b", text: "An antecedent phrase (HC) and consequent phrase (AC)" },
            { id: "c", text: "A recurring theme with episodes" },
            { id: "d", text: "Verse, chorus, and bridge" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l15-q3",
          text: "Tonicization differs from modulation in that tonicization is:",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "Permanent" },
            { id: "b", text: "Brief and temporary" },
            { id: "c", text: "Only used in minor keys" },
            { id: "d", text: "Always chromatic" }
          ],
          correctOptionId: "b",
          explanation: ""
        },
        {
          id: "music-theory-301-l15-q4",
          text: "In C major, the progression I – V/V – V – I uses which chromatic note?",
          skillId: "music-theory-301-skill-core",
          options: [
            { id: "a", text: "B♭" },
            { id: "b", text: "E♭" },
            { id: "c", text: "F♯" },
            { id: "d", text: "A♭" }
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
