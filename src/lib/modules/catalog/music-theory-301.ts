import type { LearningModule } from "@/lib/modules/types";

export const music_theory_301_Module: LearningModule = {
  "id": "music-theory-301",
  "title": "Advanced Music Theory",
  "description": "Master chord progressions, explore the seven modes, analyze musical form, and begin composing original melodies. Think like a musician, not just read like one.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music"
  ],
  "minAge": 13,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Analyze and write chord progressions using Roman numeral notation",
    "Identify and construct all seven diatonic modes",
    "Recognize common musical forms (binary, ternary, rondo, verse-chorus)",
    "Compose an 8-bar melody following voice-leading principles",
    "Understand and apply secondary dominants",
    "Identify cadence types: authentic, half, plagal, and deceptive",
    "Apply non-chord tones to create melodic interest"
  ],
  "lessons": [
    {
      "id": "music-theory-301-l01",
      "title": "Roman Numeral Analysis",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Label chords with Roman numerals based on their scale degree",
        "Distinguish uppercase (major) from lowercase (minor) numerals",
        "Analyze a simple four-chord progression"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l01-c1",
          "title": "Why Roman Numerals?",
          "content": "Roman numeral analysis is a powerful tool for understanding how chords function in music. It acts as a universal language, assigning a numeral to each chord based on its position in a scale. For example, in C major, the C chord is I, D minor is ii, and G is V. This system is key-independent; a I-V-vi-IV progression has the same harmonic function in C major as it does in G major or any other key. Uppercase numerals (I, IV, V) represent major chords, which sound bright, while lowercase numerals (ii, iii, vi) represent minor chords, which sound more somber. A small circle (°) indicates a diminished chord. This system allows musicians to communicate complex harmonic ideas clearly and efficiently, making it essential for analysis, songwriting, and improvisation."
        },
        {
          "id": "music-theory-301-l01-c2",
          "title": "Diatonic Chords in Major",
          "content": "Every major scale generates seven basic chords, called diatonic triads. These chords form the harmonic foundation of a key. The pattern is always the same: I (major), ii (minor), iii (minor), IV (major), V (major), vi (minor), and vii° (diminished). Each chord has a specific function. The I chord, or tonic, is the 'home base,' providing a sense of rest and stability. The V chord, the dominant, creates tension that strongly pulls back to the tonic. The IV chord, the subdominant, provides a feeling of moving away from the tonic, often leading to the dominant. Understanding the relationship between these core chords is the first step to mastering harmony."
        },
        {
          "id": "music-theory-301-l01-c3",
          "title": "Reading a Chord Chart",
          "content": "When you see a progression like 'I - V - vi - IV', you're looking at the blueprint for countless pop songs. In the key of C major, this translates to C - G - Am - F. In G major, it becomes G - D - Em - C. The beauty of Roman numerals is this very flexibility. It allows musicians to transpose a song to a different key on the fly, arrange it for different instruments, or improvise over a familiar structure. Mastering this system moves you from simply playing chords to understanding why those chords work together, unlocking a deeper level of musical creativity."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l01-f1",
          "front": "Roman numeral I",
          "back": "The tonic chord — built on the 1st scale degree; the 'home base' of a key."
        },
        {
          "id": "music-theory-301-l01-f2",
          "front": "Roman numeral V",
          "back": "The dominant chord — built on the 5th scale degree; creates tension that resolves to I."
        },
        {
          "id": "music-theory-301-l01-f3",
          "front": "Roman numeral vi",
          "back": "The submediant — a minor chord on the 6th degree; often used as a tonic substitute."
        },
        {
          "id": "music-theory-301-l01-f4",
          "front": "Diatonic",
          "back": "Using only the notes and chords that belong to a given key, with no alterations."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l01-a1",
          "type": "image",
          "title": "Diatonic Triads Chart",
          "content": "A clear chart showing the C major scale and the seven diatonic triads built on each degree, with their corresponding Roman numerals (I, ii, iii, IV, V, vi, vii°)."
        }
      ]
    },
    {
      "id": "music-theory-301-l02",
      "title": "Common Progressions Workshop",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify the I-V-vi-IV, I-IV-V, and ii-V-I progressions by ear and sight",
        "Match progressions to the genres where they're most common",
        "Write a chord progression for a given mood"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l02-c1",
          "title": "The Pop Progression: I-V-vi-IV",
          "content": "The I-V-vi-IV progression is a cornerstone of modern music, found in everything from pop and rock to country. In C major, the chords are C-G-Am-F. Its power lies in its perfect emotional arc: it starts at home (I), builds tension (V), moves to a reflective, emotional minor chord (vi), and then prepares for the return (IV). This cycle of tension and release is incredibly satisfying to our ears, which is why songs from 'Let It Be' to 'Don't Stop Believin'' use it to create an instantly familiar and compelling sound."
        },
        {
          "id": "music-theory-301-l02-c2",
          "title": "The Blues and Rock Progression: I-IV-V",
          "content": "The I-IV-V progression is the backbone of blues, early rock and roll, and folk music. In the key of A, this would be A-D-E. This progression uses the three primary major chords of a key, creating a strong, grounded, and driving sound. It's most famously used in the 12-bar blues format, a repeating 12-measure structure that has served as the foundation for improvisation for generations of musicians. Its simplicity and power make it one of the most important progressions to know."
        },
        {
          "id": "music-theory-301-l02-c3",
          "title": "The Jazz Turnaround: ii-V-I",
          "content": "In jazz, the ii-V-I is the most fundamental harmonic movement. In C major, this is Dm-G-C (or with sevenths, Dm7-G7-Cmaj7). This progression creates a smooth, sophisticated path back to the tonic. The ii chord gently moves away from home, the V chord builds strong tension, and the I chord provides a satisfying resolution. Jazz standards are filled with ii-V-I progressions, often moving through multiple keys. Mastering this 'turnaround' is essential for anyone wanting to improvise or compose in the jazz style."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-301-l02-a1",
          "title": "Match the Progression to the Genre",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "I – V – vi – IV",
              "right": "Pop / Rock Ballad"
            },
            {
              "left": "I – IV – V – I",
              "right": "Blues / Folk"
            },
            {
              "left": "ii – V – I",
              "right": "Jazz Standard"
            },
            {
              "left": "i – VI – III – VII",
              "right": "Modern Minor Pop"
            },
            {
              "left": "I – vi – IV – V",
              "right": "1950s Doo-Wop"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l02-f1",
          "front": "I-V-vi-IV",
          "back": "The most common pop progression — balances brightness (I, V, IV) with emotional depth (vi)."
        },
        {
          "id": "music-theory-301-l02-f2",
          "front": "12-bar blues",
          "back": "A repeating form: 4 bars I, 2 bars IV, 2 bars I, then a V-IV-I-V turnaround."
        },
        {
          "id": "music-theory-301-l02-f3",
          "front": "ii-V-I",
          "back": "The fundamental jazz progression — creates a smooth path from subdominant (ii) to dominant (V) to tonic (I)."
        }
      ]
    },
    {
      "id": "music-theory-301-l03",
      "title": "Cadences: Musical Punctuation",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Define a cadence as a harmonic arrival point",
        "Identify authentic, half, plagal, and deceptive cadences by ear",
        "Explain how cadences create phrase structure"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l03-c1",
          "title": "What Is a Cadence?",
          "content": "Cadences are the punctuation of music. Just as a period ends a sentence and a comma signals a pause, a cadence marks the end of a musical phrase. It's a two-chord gesture that creates a sense of arrival, pause, or surprise. Strong cadences provide a feeling of finality and closure, while weaker cadences leave the listener expecting more music to follow. By controlling tension and release, cadences are essential for shaping melodies and organizing music into clear, understandable sections."
        },
        {
          "id": "music-theory-301-l03-c2",
          "title": "Authentic and Half Cadences",
          "content": "The authentic cadence (AC), moving from V to I, is the strongest and most common cadence in music. It's the musical equivalent of a full stop, providing a powerful sense of resolution and finality. A perfect authentic cadence (PAC) is even stronger, with both chords in root position and the melody ending on the tonic. In contrast, the half cadence (HC) ends on the V chord. It feels like a comma or a question mark, creating a pause that leaves the music hanging and demands continuation. It creates suspense and keeps the listener engaged."
        },
        {
          "id": "music-theory-301-l03-c3",
          "title": "Plagal and Deceptive Cadences",
          "content": "The plagal cadence, moving from IV to I, is often called the 'Amen' cadence because of its frequent use at the end of hymns. It provides a sense of closure, but it's gentler and less forceful than an authentic cadence. The deceptive cadence is a musical surprise. It moves from V to vi, just when the listener expects the tonic I chord. This unexpected shift to a minor chord avoids the expected resolution, creating an element of drama and often extending the musical phrase in a new direction."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l03-f1",
          "front": "Authentic Cadence (AC)",
          "back": "V → I — the strongest, most final-sounding cadence. A musical period."
        },
        {
          "id": "music-theory-301-l03-f2",
          "front": "Half Cadence (HC)",
          "back": "Any chord → V — sounds incomplete, like a question. Demands continuation."
        },
        {
          "id": "music-theory-301-l03-f3",
          "front": "Plagal Cadence (PC)",
          "back": "IV → I — the 'Amen' cadence; softer and more hymn-like than an authentic cadence."
        },
        {
          "id": "music-theory-301-l03-f4",
          "front": "Deceptive Cadence (DC)",
          "back": "V → vi — the ear expects I but gets vi instead. Creates surprise and pushes the music forward."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l03-a1",
          "type": "image",
          "title": "Cadence Cheat Sheet",
          "content": "A visual guide with four short musical examples on a staff, one for each cadence type (Authentic, Half, Plagal, Deceptive), showing the final two chords and their Roman numerals."
        }
      ]
    },
    {
      "id": "music-theory-301-l04",
      "title": "Secondary Dominants Lab",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Define a secondary dominant as a V chord 'borrowed' from another key",
        "Identify and label secondary dominants (e.g., V/V, V/vi)",
        "Analyze how secondary dominants add color and direction to progressions"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l04-c1",
          "title": "Beyond Diatonic Harmony",
          "content": "While diatonic chords form a key's foundation, music would be predictable if we only used them. Secondary dominants add color and excitement by temporarily borrowing a chord from a related key. A secondary dominant is the dominant (V chord) of a diatonic chord other than the tonic. This process, called tonicization, creates a strong pull towards that target chord, making the harmony more dynamic and sophisticated. It's like adding a splash of a new, vibrant color to a familiar painting."
        },
        {
          "id": "music-theory-301-l04-c2",
          "title": "V/V — The Most Common Secondary Dominant",
          "content": "The most common secondary dominant is the 'five of five' (V/V). In C major, the V chord is G major. The dominant of G major is D major. So, D major is the V/V in the key of C. Notice that the D major chord contains an F-sharp, a note that is not in the C major scale. This chromatic note is what gives the secondary dominant its power, creating a stronger-than-usual pull towards the G chord. A progression like C - D - G - C (I - V/V - V - I) sounds much more compelling than a purely diatonic version."
        },
        {
          "id": "music-theory-301-l04-c3",
          "title": "Other Secondary Dominants",
          "content": "You can create a secondary dominant for almost any major or minor diatonic chord. For example, in C major, you can have a V/ii (A major, pulling to D minor), a V/vi (E major, pulling to A minor), or a V/IV (C major, which is the same as the tonic). Each secondary dominant introduces a unique chromatic note that intensifies the arrival of its target chord. Using them skillfully allows composers to create longer, more interesting progressions and to smoothly transition between different harmonic areas."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-301-l04-a1",
          "title": "Identify the Secondary Dominant",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "V/V in C major",
              "right": "D major (contains F♯)"
            },
            {
              "left": "V/vi in C major",
              "right": "E major (contains G♯)"
            },
            {
              "left": "V/ii in C major",
              "right": "A major (contains C♯)"
            },
            {
              "left": "V/V in G major",
              "right": "A major (contains C♯)"
            },
            {
              "left": "V/vi in G major",
              "right": "B major (contains D♯)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l04-f1",
          "front": "Secondary Dominant",
          "back": "A chord that acts as the V (or V7) of a diatonic chord other than the tonic. It adds chromatic color."
        },
        {
          "id": "music-theory-301-l04-f2",
          "front": "V/V",
          "back": "'Five of five' — the dominant of the dominant chord. The most common secondary dominant."
        },
        {
          "id": "music-theory-301-l04-f3",
          "front": "Tonicization",
          "back": "The process of making a non-tonic chord sound like a temporary tonic, usually by preceding it with its secondary dominant."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l04-a1",
          "type": "image",
          "title": "Secondary Dominant Map",
          "content": "A diagram showing the diatonic chords of C major, with arrows pointing from each potential secondary dominant (V/ii, V/iii, etc.) to its target chord."
        }
      ]
    },
    {
      "id": "music-theory-301-l05",
      "title": "Harmony Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of Roman numerals, common progressions, cadences, and secondary dominants"
      ],
      "questions": [
        {
          "id": "music-theory-301-l05-q1",
          "text": "The progression I-V-vi-IV in G major is:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G – C – Em – D"
            },
            {
              "id": "b",
              "text": "G – D – Em – C"
            },
            {
              "id": "c",
              "text": "G – D – Am – F"
            },
            {
              "id": "d",
              "text": "G – A – Bm – E"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In G major: I is G, V is D, vi is Em, and IV is C."
        },
        {
          "id": "music-theory-301-l05-q2",
          "text": "A cadence that ends on the V chord, creating a feeling of pause, is called a:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Deceptive Cadence"
            },
            {
              "id": "b",
              "text": "Plagal Cadence"
            },
            {
              "id": "c",
              "text": "Authentic Cadence"
            },
            {
              "id": "d",
              "text": "Half Cadence"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A half cadence ends on the dominant (V), creating an unresolved feeling like a question."
        },
        {
          "id": "music-theory-301-l05-q3",
          "text": "In the key of C major, what chord is the V/V?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G major"
            },
            {
              "id": "b",
              "text": "C major"
            },
            {
              "id": "c",
              "text": "D major"
            },
            {
              "id": "d",
              "text": "F major"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The V chord in C is G. The dominant (V) of G is D. Therefore, D major is the V/V in C."
        },
        {
          "id": "music-theory-301-l05-q4",
          "text": "The ii-V-I progression is most strongly associated with which genre?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Blues"
            },
            {
              "id": "b",
              "text": "Jazz"
            },
            {
              "id": "c",
              "text": "Pop"
            },
            {
              "id": "d",
              "text": "Folk"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The ii-V-I is the fundamental harmonic building block of jazz music."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "music-theory-301-l06",
      "title": "The Seven Modes",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Name and construct all seven diatonic modes",
        "Identify the characteristic note that distinguishes each mode",
        "Associate modes with specific musical moods and genres"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l06-c1",
          "title": "Modes from the Major Scale",
          "content": "The seven modes are unique scales derived from the major scale. You can think of them as 'rotations' of the major scale, where you start on a different note each time. Starting on the first note gives you Ionian (the major scale). Starting on the second gives you Dorian, the third Phrygian, and so on through Lydian, Mixolydian, Aeolian (the natural minor scale), and Locrian. Each mode has a distinct pattern of whole and half steps, which gives it a unique character and emotional color, from bright and dreamy to dark and intense."
        },
        {
          "id": "music-theory-301-l06-c2",
          "title": "Character Notes",
          "content": "Each mode has a 'character note' that gives it its signature sound. Compared to a standard major or minor scale, this one altered note changes everything. For example, Dorian is a minor mode, but its raised 6th degree gives it a hopeful, jazzy sound. Lydian is a major mode, but its raised 4th creates a bright, magical, or dreamy quality. Phrygian's lowered 2nd degree gives it a dark, Spanish or heavy metal flavor, while Mixolydian's lowered 7th makes it sound bluesy and perfect for rock music. Identifying these notes is the key to unlocking the power of modes."
        },
        {
          "id": "music-theory-301-l06-c3",
          "title": "Modes in Popular Music",
          "content": "Modes are everywhere in the music you listen to. The cool, soulful vibe of Santana's 'Oye Como Va' comes from the Dorian mode. The dreamy, floating sound of 'The Simpsons' theme is pure Lydian. The Beatles' 'Norwegian Wood' uses the Mixolydian mode to give its folk melody a bluesy edge, and Metallica's 'Wherever I May Roam' gets its heavy, exotic sound from the Phrygian mode. Film composers also use modes to quickly establish a mood: Lydian for wonder, Phrygian for tension, and Dorian for heroic adventure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-301-l06-a1",
          "title": "Sort the Modes by Mood",
          "type": "sorting_buckets",
          "buckets": [
            "Major-like (Bright)",
            "Minor-like (Dark)",
            "Tense / Unstable"
          ],
          "items": [
            {
              "text": "Ionian",
              "bucket": "Major-like (Bright)"
            },
            {
              "text": "Lydian",
              "bucket": "Major-like (Bright)"
            },
            {
              "text": "Mixolydian",
              "bucket": "Major-like (Bright)"
            },
            {
              "text": "Dorian",
              "bucket": "Minor-like (Dark)"
            },
            {
              "text": "Phrygian",
              "bucket": "Minor-like (Dark)"
            },
            {
              "text": "Aeolian",
              "bucket": "Minor-like (Dark)"
            },
            {
              "text": "Locrian",
              "bucket": "Tense / Unstable"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l06-f1",
          "front": "Dorian Mode",
          "back": "Minor mode with a raised 6th. Sounds jazzy/soulful. Built on the 2nd degree of major."
        },
        {
          "id": "music-theory-301-l06-f2",
          "front": "Phrygian Mode",
          "back": "Minor mode with a lowered 2nd. Sounds Spanish/exotic/heavy. Built on the 3rd degree."
        },
        {
          "id": "music-theory-301-l06-f3",
          "front": "Lydian Mode",
          "back": "Major mode with a raised 4th. Sounds dreamy/magical. Built on the 4th degree."
        },
        {
          "id": "music-theory-301-l06-f4",
          "front": "Mixolydian Mode",
          "back": "Major mode with a lowered 7th. Sounds bluesy/rock. Built on the 5th degree."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l06-a1",
          "type": "image",
          "title": "The Mood of Modes",
          "content": "An infographic matching each mode (Ionian, Dorian, etc.) to its characteristic sound/mood (e.g., Lydian: Dreamy, Phrygian: Spanish/Exotic) and its character note (e.g., Lydian: #4)."
        }
      ]
    },
    {
      "id": "music-theory-301-l07",
      "title": "Musical Form: The Big Picture",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define musical form as the large-scale structure of a composition",
        "Identify binary (AB), ternary (ABA), rondo, and verse-chorus forms",
        "Use letter labeling to map the sections of a piece"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l07-c1",
          "title": "Why Form Matters",
          "content": "Musical form is the blueprint or map of a piece of music. It's the way a composition is structured and organized into sections. Understanding form helps listeners follow the musical journey, and it gives composers a framework for their ideas. We use letters like A, B, and C to label the different sections. A repeating section gets the same letter, while a contrasting section gets a new one. Recognizing these patterns of repetition and contrast is key to appreciating how a piece of music is built."
        },
        {
          "id": "music-theory-301-l07-c2",
          "title": "Binary and Ternary Form",
          "content": "Binary form (AB) is a two-part structure based on contrast. It features an 'A' section followed by a different 'B' section. It's common in Baroque dances. Ternary form (ABA) is a three-part structure built on statement, contrast, and return. It presents an 'A' section, moves to a contrasting 'B' section, and then, satisfyingly, returns to the original 'A' section. This return of the familiar 'A' theme makes ternary form feel very complete and balanced."
        },
        {
          "id": "music-theory-301-l07-c3",
          "title": "Rondo and Verse-Chorus Form",
          "content": "Rondo form features a recurring main theme (A) that alternates with contrasting sections called episodes (B, C, etc.). A typical pattern is ABACABA. The repetition of the 'A' theme makes it catchy and memorable, like in Beethoven's 'Für Elise'. The most common structure in popular music is verse-chorus form. The verses (A) have different lyrics but the same music, telling the story. The chorus (B) has the same lyrics and music each time, containing the song's main hook. Often, a contrasting bridge (C) is added for variety before the final chorus."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l07-f1",
          "front": "Binary Form (AB)",
          "back": "Two contrasting sections. A statement followed by a counter-statement."
        },
        {
          "id": "music-theory-301-l07-f2",
          "front": "Ternary Form (ABA)",
          "back": "Three-part form: theme, contrast, return. The return of A provides closure."
        },
        {
          "id": "music-theory-301-l07-f3",
          "front": "Rondo Form",
          "back": "A recurring main theme (A) alternates with contrasting episodes (ABACA or ABACABA)."
        },
        {
          "id": "music-theory-301-l07-f4",
          "front": "Verse-Chorus Form",
          "back": "The standard pop song structure: verses with changing lyrics and a recurring chorus hook."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l07-a1",
          "type": "image",
          "title": "Form Blueprints",
          "content": "Simple block diagrams illustrating Binary (A-B), Ternary (A-B-A), Rondo (A-B-A-C-A), and Verse-Chorus form."
        }
      ]
    },
    {
      "id": "music-theory-301-l08",
      "title": "Non-Chord Tones",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify passing tones, neighbor tones, suspensions, and appoggiaturas",
        "Explain how non-chord tones create melodic motion and tension",
        "Add non-chord tones to a given melody"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l08-c1",
          "title": "Decorating the Skeleton",
          "content": "A melody made of only chord tones can sound stiff and boring. Non-chord tones (NCTs) are the notes that add flavor, smoothness, and emotion to a melody. They are notes that don't belong to the underlying chord, creating momentary dissonance that resolves back to a chord tone. Think of chord tones as the skeleton of a melody; non-chord tones are the muscles and skin that bring it to life. Every memorable melody is filled with skillfully used NCTs."
        },
        {
          "id": "music-theory-301-l08-c2",
          "title": "Passing and Neighbor Tones",
          "content": "Passing tones and neighbor tones are the most common NCTs. A passing tone fills the space between two chord tones by moving in one direction, like the D in the melody C-D-E over a C major chord. It creates a smooth, connected line. A neighbor tone decorates a single chord tone by stepping away and then immediately returning, like the F in the melody E-F-E over a C major chord. It adds a small bit of interest without disrupting the harmony."
        },
        {
          "id": "music-theory-301-l08-c3",
          "title": "Suspensions and Appoggiaturas",
          "content": "Suspensions and appoggiaturas are more dramatic NCTs that create tension. A suspension occurs when a note from a previous chord is held over, creating a clash with the new chord, before resolving down by step. It has three parts: preparation, suspension (the clash), and resolution. An appoggiatura is even more dramatic; it's a dissonant note that is leaped to and then resolved by step. It creates an expressive, sighing effect and is often used to emphasize important words or emotional moments in a melody."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-301-l08-a1",
          "title": "Identify the Non-Chord Tone",
          "type": "sorting_buckets",
          "buckets": [
            "Passing Tone",
            "Neighbor Tone",
            "Suspension",
            "Appoggiatura"
          ],
          "items": [
            {
              "text": "Stepwise motion between two different chord tones",
              "bucket": "Passing Tone"
            },
            {
              "text": "Leaves and returns to the same chord tone by step",
              "bucket": "Neighbor Tone"
            },
            {
              "text": "Held from previous chord, creates dissonance, resolves down",
              "bucket": "Suspension"
            },
            {
              "text": "Leaps to a dissonance, then resolves by step",
              "bucket": "Appoggiatura"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l08-f1",
          "front": "Passing Tone",
          "back": "An NCT that moves by step between two chord tones in the same direction."
        },
        {
          "id": "music-theory-301-l08-f2",
          "front": "Neighbor Tone",
          "back": "An NCT that steps away from a chord tone and then returns to it."
        },
        {
          "id": "music-theory-301-l08-f3",
          "front": "Suspension",
          "back": "A held note from a previous chord that clashes with the new chord and resolves down by step."
        },
        {
          "id": "music-theory-301-l08-f4",
          "front": "Appoggiatura",
          "back": "An NCT approached by leap and resolved by step — creates a dramatic, sighing effect."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-301-l08-a1",
          "type": "image",
          "title": "NCT Spotter's Guide",
          "content": "Four short musical excerpts on a staff, each highlighting a different non-chord tone (Passing, Neighbor, Suspension, Appoggiatura) with the NCT circled and labeled."
        }
      ]
    },
    {
      "id": "music-theory-301-l09",
      "title": "Structure & Melody Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of musical modes, form, and non-chord tones"
      ],
      "questions": [
        {
          "id": "music-theory-301-l09-q1",
          "text": "Which mode is identical to the natural minor scale?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dorian"
            },
            {
              "id": "b",
              "text": "Phrygian"
            },
            {
              "id": "c",
              "text": "Aeolian"
            },
            {
              "id": "d",
              "text": "Locrian"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Aeolian mode is another name for the natural minor scale. It is built on the 6th degree of the major scale."
        },
        {
          "id": "music-theory-301-l09-q2",
          "text": "A musical form with the structure ABA is called:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Binary"
            },
            {
              "id": "b",
              "text": "Ternary"
            },
            {
              "id": "c",
              "text": "Rondo"
            },
            {
              "id": "d",
              "text": "Verse-Chorus"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ternary form is a three-part structure based on statement (A), contrast (B), and return (A)."
        },
        {
          "id": "music-theory-301-l09-q3",
          "text": "In the melody C-B-C over a C major chord, the note B is a:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Passing Tone"
            },
            {
              "id": "b",
              "text": "Suspension"
            },
            {
              "id": "c",
              "text": "Appoggiatura"
            },
            {
              "id": "d",
              "text": "Neighbor Tone"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The B steps away from the chord tone C and immediately returns, making it a neighbor tone."
        },
        {
          "id": "music-theory-301-l09-q4",
          "text": "Which mode is characterized by a raised 4th degree, giving it a 'dreamy' sound?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Mixolydian"
            },
            {
              "id": "b",
              "text": "Dorian"
            },
            {
              "id": "c",
              "text": "Lydian"
            },
            {
              "id": "d",
              "text": "Phrygian"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Lydian mode's raised 4th is its character note, creating a bright and magical quality."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      }
    },
    {
      "id": "music-theory-301-l10",
      "title": "Melody Composition Basics",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply voice-leading principles to compose smooth melodic lines",
        "Balance stepwise motion with leaps for melodic interest",
        "Create a sense of direction with contour and climax"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l10-c1",
          "title": "Melodic Contour",
          "content": "The contour of a melody is its overall shape, the way it rises and falls. A good melody has a clear direction and a focal point. This high point, called the climax, usually occurs only once per phrase and gives the melody a sense of purpose. Great melodies balance smooth, stepwise motion with occasional, well-placed leaps. A large leap often creates excitement, and is typically followed by a step in the opposite direction to maintain a smooth, singable line."
        },
        {
          "id": "music-theory-301-l10-c2",
          "title": "Voice Leading",
          "content": "Voice leading is the art of writing smooth, logical melodic lines. The core principle is to favor stepwise motion, as it's easiest for the ear to follow and for a voice to sing. When you do use leaps, try to keep them smaller than an octave. It's also important to resolve tendency tones: the 7th scale degree (the leading tone) has a strong pull upwards to the tonic, while the 4th scale degree often wants to resolve down to the 3rd. Following these guidelines will help you write melodies that sound natural and coherent."
        },
        {
          "id": "music-theory-301-l10-c3",
          "title": "Phrase Structure",
          "content": "Melodies are built from phrases, which are like musical sentences. A common structure is the period, which consists of two phrases in a question-and-answer relationship. The first phrase, the antecedent, ends with a weak cadence (like a half cadence), leaving the listener wanting more. The second phrase, the consequent, provides the answer, ending with a strong cadence (like an authentic cadence) that gives a sense of closure. This balanced structure makes a melody feel complete and satisfying."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-301-l10-f1",
          "front": "Melodic Contour",
          "back": "The overall shape of a melody — its pattern of ascending and descending motion."
        },
        {
          "id": "music-theory-301-l10-f2",
          "front": "Climax",
          "back": "The highest point of a melodic phrase, serving as the emotional focal point."
        },
        {
          "id": "music-theory-301-l10-f3",
          "front": "Period (Music)",
          "back": "A pair of phrases in a question-answer relationship: antecedent (ends HC) + consequent (ends AC)."
        },
        {
          "id": "music-theory-301-l10-f4",
          "front": "Tendency Tone",
          "back": "A note with a strong pull toward resolution, like the leading tone (7th) resolving up to the tonic."
        }
      ]
    },
    {
      "id": "music-theory-301-l11",
      "title": "Composition Coaching Clinic",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Identify common composition mistakes in given melodies",
        "Apply non-chord tones to enrich a basic melodic line",
        "Arrange chord tones and passing tones into a singable phrase"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l11-c1",
          "title": "Common Melody Mistakes",
          "content": "When starting out, composers often make a few common mistakes. One is writing a 'jagged' melody with too many large leaps and not enough stepwise motion. Another is having no clear focal point or climax, making the melody wander aimlessly. A third is a static melody that stays in a very narrow range and lacks rhythmic variety. Finally, a weak ending that doesn't land on a strong chord tone on a strong beat can make a phrase feel unfinished. Being aware of these pitfalls is the first step to avoiding them."
        },
        {
          "id": "music-theory-301-l11-c2",
          "title": "Enriching Your Melody",
          "content": "To elevate a simple melody, start by building a strong skeleton of chord tones on the strong beats (beats 1 and 3 in 4/4 time). This anchors your melody to the harmony. Then, use the weaker beats (2 and 4) to add non-chord tones. Use passing tones to create smooth connections, neighbor tones to add decoration, and perhaps a suspension or appoggiatura at a key moment to create emotional tension. This combination of a strong harmonic foundation with melodic decoration is the key to writing compelling tunes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-301-l11-a1",
          "title": "Build a Melody",
          "type": "drag_and_drop",
          "prompt": "Build a 4-beat melody in C major over a I chord (C-E-G) followed by a V chord (G-B-D). Place chord tones on beats 1 and 3, and a passing or neighbor tone on beat 2.",
          "items": [
            "C",
            "D",
            "E",
            "F",
            "G",
            "B"
          ],
          "zones": [
            "Beat 1 (I)",
            "Beat 2",
            "Beat 3 (V)",
            "Beat 4"
          ]
        }
      ]
    },
    {
      "id": "music-theory-301-l12",
      "title": "Final Composition Project",
      "type": "project",
      "duration": 30,
      "objectives": [
        "Synthesize all learned concepts by composing an original 8-bar melody over a given chord progression"
      ],
      "chunks": [
        {
          "id": "music-theory-301-l12-c1",
          "title": "Project Brief: Your 8-Bar Melody",
          "content": "Your mission is to compose an 8-bar melody in C major over the chord progression: I - V/V - V - I - IV - I - V - I. Your melody must demonstrate: \n1. A clear melodic contour with a single climax. \n2. A balance of stepwise motion and leaps. \n3. Correct use of at least two different non-chord tones (e.g., passing tone, neighbor tone). \n4. A clear period structure: an antecedent phrase (bars 1-4) ending on a half cadence (over the V chord) and a consequent phrase (bars 5-8) ending on an authentic cadence (over the final V-I)."
        }
      ]
    },
    {
      "id": "music-theory-301-l13",
      "title": "Final Mastery Exam",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Demonstrate comprehensive mastery of advanced music theory concepts"
      ],
      "questions": [
        {
          "id": "music-theory-301-l13-q1",
          "text": "The diatonic chords in a major key follow which quality pattern?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "I  ii  iii  IV  V  vi  vii°"
            },
            {
              "id": "b",
              "text": "I  II  iii  IV  V  vi  vii"
            },
            {
              "id": "c",
              "text": "i  ii°  III  iv  v  VI  VII"
            },
            {
              "id": "d",
              "text": "I  ii  III  iv  V  vi  VII"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The pattern of diatonic triads in a major key is always: Major, minor, minor, Major, Major, minor, diminished."
        },
        {
          "id": "music-theory-301-l13-q2",
          "text": "A perfect authentic cadence (PAC) is defined as:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "IV → I with melody on the tonic"
            },
            {
              "id": "b",
              "text": "V → I with both chords in root position and melody on the tonic"
            },
            {
              "id": "c",
              "text": "V → vi with melody on the 3rd"
            },
            {
              "id": "d",
              "text": "Any movement to the V chord"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A PAC requires a V-I progression, both chords in root position, and the melody ending on the tonic note for the strongest possible closure."
        },
        {
          "id": "music-theory-301-l13-q3",
          "text": "In C major, the progression I – V/V – V – I uses which chromatic note?",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "B♭"
            },
            {
              "id": "b",
              "text": "E♭"
            },
            {
              "id": "c",
              "text": "F♯"
            },
            {
              "id": "d",
              "text": "A♭"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The V/V in C major is a D major chord (D-F♯-A). The F♯ is the chromatic note that creates a strong pull to the G chord."
        },
        {
          "id": "music-theory-301-l13-q4",
          "text": "Dorian mode differs from Aeolian (natural minor) by having a:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Raised 7th"
            },
            {
              "id": "b",
              "text": "Lowered 2nd"
            },
            {
              "id": "c",
              "text": "Raised 6th"
            },
            {
              "id": "d",
              "text": "Lowered 4th"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The raised 6th degree is the character note of the Dorian mode, giving it a brighter, jazzier sound than the natural minor."
        },
        {
          "id": "music-theory-301-l13-q5",
          "text": "A musical 'period' is best described as:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A single, complete musical thought"
            },
            {
              "id": "b",
              "text": "A recurring theme that alternates with other sections"
            },
            {
              "id": "c",
              "text": "A pair of phrases in a question-answer relationship"
            },
            {
              "id": "d",
              "text": "The main hook of a pop song"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A period consists of an antecedent phrase (question, ending on a weak cadence) and a consequent phrase (answer, ending on a strong cadence)."
        },
        {
          "id": "music-theory-301-l13-q6",
          "text": "A non-chord tone that is approached by leap and resolves by step is called:",
          "skillId": "music-theory-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A suspension"
            },
            {
              "id": "b",
              "text": "A passing tone"
            },
            {
              "id": "c",
              "text": "A neighbor tone"
            },
            {
              "id": "d",
              "text": "An appoggiatura"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The appoggiatura is a dramatic NCT characterized by a leap to a dissonance, followed by a stepwise resolution."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "analyze": 2
        }
      }
    }
  ]
};
