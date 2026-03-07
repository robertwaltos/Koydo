import type { LearningModule } from "@/lib/modules/types";

export const music_theory_401_Module: LearningModule = {
  "id": "music-theory-401",
  "title": "Expert Music Theory",
  "description": "Dive into jazz harmony with extended chords, study counterpoint from species to free writing, explore orchestration and arranging, and analyze advanced compositional techniques.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "learningObjectives": [
    "Analyze and construct extended chords (7ths, 9ths, 11ths, 13ths) and their voicings.",
    "Apply advanced harmonic techniques, including tritone substitution and modal interchange.",
    "Analyze common jazz forms and progressions in standard repertoire.",
    "Compose contrapuntal lines following the principles of species and free counterpoint.",
    "Identify the ranges, timbres, and idiomatic characteristics of orchestral instruments.",
    "Arrange music for small ensembles, demonstrating effective scoring, spacing, and balancing.",
    "Synthesize knowledge of harmony, counterpoint, and orchestration in a short original composition."
  ],
  "lessons": [
    {
      "id": "music-theory-401-l01",
      "title": "Extended Chords: Beyond Triads",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Build 7th chords in all four qualities (major 7, dominant 7, minor 7, half-diminished 7).",
        "Stack thirds to create 9th, 11th, and 13th chords.",
        "Read and interpret common jazz chord symbols."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l01-c1",
          "title": "Seventh Chords",
          "content": "Seventh chords are the bedrock of jazz harmony, formed by adding a third on top of a basic triad. This added note, the seventh, introduces a new layer of color and tension. The four essential qualities are: Major 7th (Cmaj7: C-E-G-B), with a warm, lush sound; Dominant 7th (C7: C-E-G-B♭), creating tension that strongly pulls toward resolution; Minor 7th (Cm7: C-E♭-G-B♭), offering a smooth, mellow quality; and Half-diminished 7th (Cø7: C-E♭-G♭-B♭), which has a restless, ambiguous character often used in minor keys. Mastering these four types is the first step to understanding the language of jazz.",
          "visualPrompts": [
            "An animation showing a C major triad (C-E-G) on a piano keyboard, with the B being added to form Cmaj7.",
            "A chart comparing the formulas and sounds of the four main 7th chord qualities (Major, Dominant, Minor, Half-diminished)."
          ]
        },
        {
          "id": "music-theory-401-l01-c2",
          "title": "9ths, 11ths, and 13ths",
          "content": "To create even richer harmonies, we can continue stacking thirds on top of a seventh chord. These added notes are called extensions. The 9th is the same note as the 2nd, an octave higher; the 11th is the 4th an octave higher; and the 13th is the 6th an octave higher. A C13 chord, for example, theoretically contains all seven notes of the scale (C-E-G-B♭-D-F-A). In practice, performers often omit notes like the root or 5th to avoid a muddy sound, focusing instead on the colorful extensions and the essential 'guide tones' (3rd and 7th). These extensions are the key to sophisticated, modern-sounding harmonies.",
          "visualPrompts": [
            "An animation on a grand staff showing thirds being stacked on a G7 chord to add the 9th (A), 11th (C), and 13th (E).",
            "A side-by-side comparison of a full C13 chord and a practical piano voicing that omits the root and 5th."
          ]
        },
        {
          "id": "music-theory-401-l01-c3",
          "title": "Jazz Chord Symbols",
          "content": "Jazz musicians use a standardized shorthand on lead sheets to communicate harmony efficiently. A letter by itself (C) denotes a major triad. 'm' or '-' indicates minor (Cm or C-). A '7' signifies a dominant 7th (C7). 'maj7' or a triangle (Δ) indicates a major 7th (Cmaj7 or CΔ7). A half-diminished chord is shown with 'ø7' or 'm7(♭5)' (Cø7). A fully diminished chord uses a circle '°7' (C°7). Extensions and alterations are added in parentheses or as superscripts, like C7(♯9) or Gmaj13. Fluency in reading these symbols is essential for improvisation and performance in a jazz setting.",
          "visualPrompts": [
            "A table matching common jazz chord symbols (Cmaj7, G7, Dm7, Bø7) to their corresponding notes on a staff.",
            "An excerpt from a real lead sheet with chord symbols highlighted and explained."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-401-l01-f1",
          "front": "Dominant 7th chord",
          "back": "Major triad + minor 7th (e.g., G-B-D-F). Creates strong tension that resolves to the tonic."
        },
        {
          "id": "music-theory-401-l01-f2",
          "front": "Major 7th chord",
          "back": "Major triad + major 7th (e.g., C-E-G-B). Has a lush, stable, and dreamy sound."
        },
        {
          "id": "music-theory-401-l01-f3",
          "front": "Half-diminished 7th (ø7)",
          "back": "Diminished triad + minor 7th (e.g., B-D-F-A). Functions as the ii chord in minor keys."
        },
        {
          "id": "music-theory-401-l01-f4",
          "front": "Chord extension",
          "back": "A note added to a chord beyond the 7th, such as the 9th, 11th, or 13th, to add color."
        }
      ]
    },
    {
      "id": "music-theory-401-l02",
      "title": "Jazz Voicings and Voice Leading",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish between open and close position voicings.",
        "Apply the 'shell voicing' technique (root, 3rd, 7th).",
        "Execute smooth voice-leading between chords in a ii-V-I progression."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l02-c1",
          "title": "Close vs. Open Voicing",
          "content": "A chord voicing is the specific arrangement and spacing of the notes in a chord. In close voicing, all notes are placed as close together as possible, typically within a single octave. This creates a dense, powerful sound often used in big band horn sections. In open voicing, the notes are spread out over more than an octave. This creates a more spacious, transparent texture. Jazz pianists often use open voicings in the left hand to leave room for melody and improvisation in the right hand, while guitarists naturally gravitate towards open voicings due to the instrument's tuning.",
          "visualPrompts": [
            "A Cmaj7 chord shown on a staff in close position (E-G-B-C) and then in an open position (C-G-B-E).",
            "Video clips of a pianist playing the same progression first with close voicings, then with open voicings, to compare the sound."
          ]
        },
        {
          "id": "music-theory-401-l02-c2",
          "title": "Shell Voicings",
          "content": "Shell voicings are a minimalist and highly effective way to play chords, especially for pianists comping in an ensemble. They contain only the essential notes that define a chord's identity: the root, the 3rd, and the 7th. The 3rd determines the quality (major or minor), and the 7th determines the type (major, dominant, etc.). These two notes are called 'guide tones.' The 5th is often omitted as it adds little harmonic information. This sparse structure leaves sonic space for a soloist and allows the pianist to easily add extensions like the 9th or 13th for extra color.",
          "visualPrompts": [
            "An illustration of a Dm7 chord on a piano, first with all notes (D-F-A-C), then stripped down to its shell voicing (D-F-C).",
            "A lead sheet progression shown with the corresponding left-hand shell voicings for a pianist."
          ]
        },
        {
          "id": "music-theory-401-l02-c3",
          "title": "Voice Leading in ii-V-I",
          "content": "Voice leading is the art of moving individual notes from one chord to the next as smoothly as possible, usually by step or common tone. In the essential ii-V-I progression (e.g., Dm7-G7-Cmaj7), the guide tones create a beautifully efficient voice-leading pattern. The 7th of the ii chord (C in Dm7) resolves down by step to become the 3rd of the V chord (B in G7). Simultaneously, the 3rd of the ii chord (F in Dm7) is a common tone that becomes the 7th of the V chord (F in G7). This smooth, stepwise motion of the guide tones is the key to creating seamless harmonic transitions in jazz.",
          "visualPrompts": [
            "A three-chord progression (Dm7-G7-Cmaj7) on a staff with colored lines connecting the guide tones to show their smooth, stepwise resolution."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-401-l02-a1",
          "title": "Match the Shell Voicing",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Dm7 shell voicing",
              "right": "D – F – C (root, 3rd, 7th)"
            },
            {
              "left": "G7 shell voicing",
              "right": "G – B – F (root, 3rd, 7th)"
            },
            {
              "left": "Cmaj7 shell voicing",
              "right": "C – E – B (root, 3rd, 7th)"
            },
            {
              "left": "Am7 shell voicing",
              "right": "A – C – G (root, 3rd, 7th)"
            },
            {
              "left": "Fmaj7 shell voicing",
              "right": "F – A – E (root, 3rd, 7th)"
            },
            {
              "left": "Bø7 shell voicing",
              "right": "B – D – A (root, 3rd, 7th)"
            }
          ]
        }
      ]
    },
    {
      "id": "music-theory-401-l03",
      "title": "Advanced Harmony: Reharmonization",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain tritone substitution as replacing V7 with ♭II7.",
        "Apply tritone substitutions to create chromatic bass lines.",
        "Identify other reharmonization techniques like modal interchange."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l03-c1",
          "title": "The Tritone Substitution",
          "content": "Tritone substitution is a cornerstone of jazz reharmonization. It involves replacing a dominant 7th chord with another dominant 7th chord whose root is a tritone (three whole steps) away. For example, a G7 chord can be replaced by a D♭7. This works because both chords share the same guide tones: the 3rd and 7th of G7 (B and F) are enharmonically the same as the 7th and 3rd of D♭7 (C♭ and F). This shared harmonic DNA allows them to perform the same function of resolving to the tonic, but the substitution adds a new harmonic color and facilitates smoother bass motion.",
          "visualPrompts": [
            "A circle of fifths diagram showing G and D♭ directly opposite each other, highlighting the tritone relationship.",
            "A staff showing the G7 and D♭7 chords side-by-side, with the shared guide tones (B/C♭ and F) highlighted in the same color."
          ]
        },
        {
          "id": "music-theory-401-l03-c2",
          "title": "Chromatic Bass Motion",
          "content": "A primary benefit of the tritone substitution is the creation of smooth, chromatic bass lines. In a standard ii-V-I progression in C (Dm7-G7-Cmaj7), the bass moves from D up a fourth to G, then down a fifth to C. By substituting D♭7 for G7, the progression becomes Dm7-D♭7-Cmaj7. Now, the bass moves chromatically downward: D to D♭ to C. This stepwise motion is considered very strong and melodic, adding a level of sophistication to the harmony. This technique can be applied not just to the primary V chord, but to any secondary dominant as well.",
          "visualPrompts": [
            "A musical example showing the bass line of a ii-V-I progression first without, and then with, a tritone substitution to illustrate the change from diatonic leaps to chromatic steps."
          ]
        },
        {
          "id": "music-theory-401-l03-c3",
          "title": "Other Reharmonization Tools",
          "content": "Beyond the tritone sub, arrangers use many tools to refresh standard progressions. Modal interchange (or 'borrowed chords') involves borrowing chords from the parallel minor or major key. For example, in C major, using chords from C minor like Fm7 (iv) or A♭maj7 (♭VI) adds a darker, more poignant color. Another technique is using chromatic mediants, which are chords a third away that share one common tone but belong to a different key (e.g., Cmaj7 to Emaj7). These techniques allow an arranger to take a simple melody and create a rich, surprising harmonic landscape beneath it.",
          "visualPrompts": [
            "A chart showing the diatonic chords of C Major and C minor side-by-side, with arrows indicating common 'borrowed' chords.",
            "A short musical phrase harmonized first with standard diatonic chords, then reharmonized using modal interchange."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-401-l03-f1",
          "front": "Tritone substitution",
          "back": "Replacing a dominant 7th chord with another dominant 7th a tritone away. They share the same guide tones."
        },
        {
          "id": "music-theory-401-l03-f2",
          "front": "Modal interchange",
          "back": "Borrowing chords from the parallel major or minor key to add unexpected color (e.g., using iv or ♭VI in a major key)."
        },
        {
          "id": "music-theory-401-l03-f3",
          "front": "Reharmonization",
          "back": "The technique of replacing the original chords of a melody with new, alternative harmonies."
        }
      ]
    },
    {
      "id": "music-theory-401-l04",
      "title": "Harmonic Analysis Lab",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Analyze a jazz standard using Roman numerals, identifying ii-V-I progressions and tritone substitutions.",
        "Identify common jazz form structures like AABA and 12-bar blues.",
        "Recognize the 'Rhythm Changes' progression."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l04-c1",
          "title": "Common Jazz Forms: AABA",
          "content": "Many jazz standards from the Great American Songbook are built on the 32-bar AABA form. This structure consists of four 8-bar sections. The 'A' section presents the main musical theme. This is repeated, often with slight variation, for the second 'A' section. The 'B' section, or 'bridge,' provides harmonic and melodic contrast, often modulating to a new key. Finally, the last 'A' section returns to the original theme, bringing the form to a close. Famous examples include 'I Got Rhythm' and 'Take the 'A' Train.' Recognizing this form is key to navigating and improvising over these tunes.",
          "visualPrompts": [
            "A block diagram illustrating the 32-bar AABA structure, with each 8-bar section clearly labeled."
          ]
        },
        {
          "id": "music-theory-401-l04-c2",
          "title": "Analyzing 'Autumn Leaves'",
          "content": "The jazz standard 'Autumn Leaves' is a perfect study in diatonic harmony, built almost entirely on a chain of ii-V-I progressions that cycle between a major key and its relative minor. In the key of G minor, the progression is essentially: Cm7 (ii in B♭) – F7 (V in B♭) – B♭maj7 (I in B♭) – E♭maj7 (IV in B♭) – Am7♭5 (ii in Gm) – D7 (V in Gm) – Gm (i in Gm). This constant movement between the relative major (B♭) and minor (G) tonalities is a hallmark of sophisticated songwriting and provides a rich harmonic foundation for improvisation.",
          "visualPrompts": [
            "The chord changes for the A section of 'Autumn Leaves' with Roman numeral analysis written underneath, color-coding the ii-V-I progressions in B♭ major and G minor."
          ]
        },
        {
          "id": "music-theory-401-l04-c3",
          "title": "Rhythm Changes",
          "content": "'Rhythm Changes' refers to the 32-bar AABA chord progression from George Gershwin's 'I Got Rhythm.' It has been used as the harmonic framework for countless new jazz compositions, known as contrafacts. The A section is characterized by a I-vi-ii-V progression, often with rapid harmonic rhythm. The bridge (B section) consists of a cycle of dominant 7th chords moving through the circle of fifths (III7-VI7-II7-V7). Tunes like 'Oleo' by Sonny Rollins and 'Anthropology' by Charlie Parker are famous contrafacts based on Rhythm Changes.",
          "visualPrompts": [
            "The standard B♭ Rhythm Changes progression written out, with the A and B sections clearly demarcated and analyzed."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-401-l04-a1",
          "title": "Match the Form",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "AABA form",
              "right": "'Take the A Train'"
            },
            {
              "left": "12-bar blues",
              "right": "'Now's the Time'"
            },
            {
              "left": "Rhythm changes",
              "right": "'Oleo'"
            },
            {
              "left": "Contrafact",
              "right": "A new melody written over an existing chord progression."
            },
            {
              "left": "ii – V – I chain",
              "right": "'Autumn Leaves'"
            }
          ]
        }
      ]
    },
    {
      "id": "music-theory-401-l05",
      "title": "Jazz Harmony Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of extended chords, voicings, reharmonization, and jazz forms."
      ],
      "questions": [
        {
          "id": "music-theory-401-l05-q1",
          "text": "What notes make up a G7(♭9) chord?",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G – B – D – F – A"
            },
            {
              "id": "b",
              "text": "G – B♭ – D – F – A♭"
            },
            {
              "id": "c",
              "text": "G – B – D – F – A♭"
            },
            {
              "id": "d",
              "text": "G – B – D♭ – F – A"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A G7 chord is G-B-D-F. The flat 9th (♭9) is an A♭."
        },
        {
          "id": "music-theory-401-l05-q2",
          "text": "The tritone substitution for an E7 chord is:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A7"
            },
            {
              "id": "b",
              "text": "B♭7"
            },
            {
              "id": "c",
              "text": "F7"
            },
            {
              "id": "d",
              "text": "D♭7"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tritone (6 half steps) above E is B♭. E7 and B♭7 share the same guide tones (G♯/A♭ and D)."
        },
        {
          "id": "music-theory-401-l05-q3",
          "text": "The bridge of a standard 'Rhythm Changes' progression consists of:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A cycle of dominant 7th chords"
            },
            {
              "id": "b",
              "text": "A static tonic pedal point"
            },
            {
              "id": "c",
              "text": "A minor key ii-V-i progression"
            },
            {
              "id": "d",
              "text": "A repeat of the A section material"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The bridge of Rhythm Changes is typically a cycle of dominants: III7 - VI7 - II7 - V7."
        },
        {
          "id": "music-theory-401-l05-q4",
          "text": "In a ii-V-I, the 7th of the ii chord typically resolves:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Up by a step to the 7th of the V chord"
            },
            {
              "id": "b",
              "text": "Down by a step to the 3rd of the V chord"
            },
            {
              "id": "c",
              "text": "Stays as a common tone to become the root of the V chord"
            },
            {
              "id": "d",
              "text": "Up by a leap of a third"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This smooth, stepwise voice leading is characteristic of jazz harmony. For example, in Dm7-G7, the C (7th of Dm7) moves down to B (3rd of G7)."
        }
      ]
    },
    {
      "id": "music-theory-401-l06",
      "title": "Species Counterpoint",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Define counterpoint and its relationship to harmony.",
        "Write first-species (note-against-note) counterpoint, avoiding parallel 5ths and octaves.",
        "Describe the progression from first through fifth species."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l06-c1",
          "title": "What Is Counterpoint?",
          "content": "Counterpoint is the art of combining two or more independent melodic lines that are harmonically interdependent. While harmony focuses on the vertical 'snapshot' of chords, counterpoint emphasizes the horizontal, linear flow of each individual voice. The goal is to create a texture where each line is melodically interesting on its own, yet all lines work together to create a coherent whole. The foundational study of counterpoint, developed by Johann Fux, is called species counterpoint, a pedagogical system that introduces complexity in five progressive steps.",
          "visualPrompts": [
            "An animation contrasting a block-chord progression (vertical emphasis) with a two-voice contrapuntal excerpt (horizontal emphasis)."
          ]
        },
        {
          "id": "music-theory-401-l06-c2",
          "title": "First Species: Note Against Note",
          "content": "First species is the simplest form of counterpoint: one note is written in the counterpoint line for every note in the given melody, or 'cantus firmus.' The core rules are designed to ensure voice independence and pleasing harmony. You must begin and end on a perfect consonance (unison, 5th, or octave). All other intervals must be consonant (major/minor 3rds and 6ths, perfect 5ths/octaves). Most importantly, you must avoid parallel perfect 5ths and octaves, where two voices move in the same direction to the same perfect interval, as this momentarily destroys their independence. Contrary motion is preferred.",
          "visualPrompts": [
            "A short cantus firmus on a staff with a correctly written first-species counterpoint above it. Arrows indicate the contrary motion.",
            "An example of parallel 5ths with a large red 'X' over it to show what to avoid."
          ]
        },
        {
          "id": "music-theory-401-l06-c3",
          "title": "Beyond First Species",
          "content": "The subsequent species systematically introduce rhythmic complexity and dissonance. Second species uses two notes against one, allowing for dissonant passing tones on weak beats. Third species uses four notes against one, introducing more decorative melodic figures. Fourth species introduces syncopation through the use of suspensions, creating tension and release across the bar line. Finally, fifth species, or 'florid counterpoint,' combines the rhythmic varieties of all previous species, serving as a bridge to free composition. Each species builds upon the last, internalizing the principles of smooth melodic writing and controlled dissonance.",
          "visualPrompts": [
            "A side-by-side comparison of the same cantus firmus measure treated in first, second, and third species to show the increasing rhythmic activity."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-401-l06-a1",
          "title": "Counterpoint Rules",
          "type": "sorting_buckets",
          "buckets": [
            "Allowed in First Species",
            "Forbidden in First Species"
          ],
          "items": [
            {
              "text": "Begin on a perfect octave",
              "bucket": "Allowed in First Species"
            },
            {
              "text": "Parallel 5ths between voices",
              "bucket": "Forbidden in First Species"
            },
            {
              "text": "Contrary motion between voices",
              "bucket": "Allowed in First Species"
            },
            {
              "text": "Voice crossing",
              "bucket": "Forbidden in First Species"
            },
            {
              "text": "Using mostly 3rds and 6ths",
              "bucket": "Allowed in First Species"
            },
            {
              "text": "Consecutive parallel octaves",
              "bucket": "Forbidden in First Species"
            }
          ]
        }
      ]
    },
    {
      "id": "music-theory-401-l07",
      "title": "Free Counterpoint and Contrapuntal Devices",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define free counterpoint as the application of contrapuntal principles in composition.",
        "Identify and describe common contrapuntal devices like imitation, canon, and inversion.",
        "Analyze the use of these devices in musical examples."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l07-c1",
          "title": "From Species to Free Counterpoint",
          "content": "While species counterpoint provides a strict framework for learning, free counterpoint is its application in actual music. Composers like J.S. Bach were masters of free counterpoint, using its principles not as rigid rules, but as guidelines for creating complex, beautiful textures. In free counterpoint, rhythmic variety is expected, dissonance is treated more flexibly (though still with care), and the goal is to create a compelling musical conversation between the voices. The core principles of voice independence, melodic integrity, and harmonic clarity learned in species still apply.",
          "visualPrompts": [
            "A side-by-side comparison of a rigid fifth-species exercise and an excerpt from a Bach invention to show the transition from exercise to art."
          ]
        },
        {
          "id": "music-theory-401-l07-c2",
          "title": "Imitation and Canon",
          "content": "Imitation is a fundamental device where a melody or motive introduced in one voice is repeated shortly after in another voice, often at a different pitch level. This creates a sense of unity and dialogue. A canon is the strictest form of imitation, where the second voice imitates the first exactly for the entire duration of the piece, like a round such as 'Row, Row, Row Your Boat.' These techniques form the basis of more complex forms like the fugue and are used to develop musical ideas across a composition.",
          "visualPrompts": [
            "An animated score of a simple two-voice imitative passage, where the melodic motive is highlighted in one color as it moves from the top voice to the bottom voice."
          ]
        },
        {
          "id": "music-theory-401-l07-c3",
          "title": "Melodic Inversion and Other Devices",
          "content": "Composers manipulate melodic ideas to create variety while maintaining coherence. Melodic inversion involves flipping a melody upside down: every upward interval becomes a downward interval of the same size, and vice versa. Other devices include retrograde (playing the melody backward), and augmentation/diminution (making the rhythmic values longer or shorter). These tools allow a composer to extract the maximum potential from a single musical idea, creating intricate and intellectually satisfying musical textures.",
          "visualPrompts": [
            "A simple melody shown on a staff, followed by its inversion, retrograde, and augmentation to clearly illustrate each transformation."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-401-l07-f1",
          "front": "Free Counterpoint",
          "back": "The application of contrapuntal principles in a compositional context, with greater rhythmic and dissonant freedom than species counterpoint."
        },
        {
          "id": "music-theory-401-l07-f2",
          "front": "Imitation",
          "back": "A contrapuntal device where a melodic idea in one voice is repeated in another voice."
        },
        {
          "id": "music-theory-401-l07-f3",
          "front": "Melodic Inversion",
          "back": "Transforming a melody by inverting its intervals; an ascending third becomes a descending third."
        },
        {
          "id": "music-theory-401-l07-f4",
          "front": "Canon",
          "back": "A strict form of imitation where one voice follows another, playing the exact same melody."
        }
      ]
    },
    {
      "id": "music-theory-401-l08",
      "title": "Counterpoint Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of the rules of first species counterpoint and advanced contrapuntal devices."
      ],
      "questions": [
        {
          "id": "music-theory-401-l08-q1",
          "text": "The primary rule in first species counterpoint designed to maintain voice independence is:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Avoid all dissonance"
            },
            {
              "id": "b",
              "text": "Avoid parallel 5ths and octaves"
            },
            {
              "id": "c",
              "text": "Only use contrary motion"
            },
            {
              "id": "d",
              "text": "Begin and end on a 3rd"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Parallel perfect intervals cause the two voices to merge into one sound, temporarily losing their independence."
        },
        {
          "id": "music-theory-401-l08-q2",
          "text": "A contrapuntal device where a melody is played upside down is called:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Retrograde"
            },
            {
              "id": "b",
              "text": "Augmentation"
            },
            {
              "id": "c",
              "text": "Imitation"
            },
            {
              "id": "d",
              "text": "Inversion"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Inversion flips the melodic contour, so ascending intervals become descending intervals."
        },
        {
          "id": "music-theory-401-l08-q3",
          "text": "Fourth species counterpoint is primarily designed to teach the handling of:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Passing tones"
            },
            {
              "id": "b",
              "text": "Suspensions"
            },
            {
              "id": "c",
              "text": "Four notes against one"
            },
            {
              "id": "d",
              "text": "Parallel motion"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fourth species introduces syncopation and the preparation and resolution of dissonant suspensions."
        },
        {
          "id": "music-theory-401-l08-q4",
          "text": "A canon is a strict form of:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Inversion"
            },
            {
              "id": "b",
              "text": "Harmony"
            },
            {
              "id": "c",
              "text": "Imitation"
            },
            {
              "id": "d",
              "text": "Species"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A canon is the most rigid type of imitation, where one voice imitates another exactly."
        }
      ]
    },
    {
      "id": "music-theory-401-l09",
      "title": "Orchestration: Instrument Families",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the four main orchestral families: strings, woodwinds, brass, and percussion.",
        "Identify the typical range, timbre, and role of principal instruments in each family.",
        "Understand how instrument choice affects orchestral color and texture."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l09-c1",
          "title": "The String Family",
          "content": "The string section—violin, viola, cello, and double bass—is the backbone of the orchestra. With the ability to play for long stretches without breathing, they excel at sustained melodic lines and lush harmonic pads. Their wide dynamic range allows them to go from a whisper to a roar. Special techniques like pizzicato (plucking), tremolo (rapid bowing), and harmonics create a vast palette of textures. As a group, they are remarkably homogenous, blending together seamlessly to form the core of the orchestral sound.",
          "visualPrompts": [
            "Images of the violin, viola, cello, and double bass, arranged side-by-side for size comparison.",
            "A chart showing the typical written range for each string instrument on a grand staff."
          ]
        },
        {
          "id": "music-theory-401-l09-c2",
          "title": "The Woodwind Family",
          "content": "The woodwind family—flute, oboe, clarinet, and bassoon—provides the orchestra's primary colors. Unlike the strings, each woodwind instrument has a highly distinct timbre. The flute is agile and bright, the oboe is nasal and penetrating, the clarinet is warm and versatile, and the bassoon is weighty and sonorous. They are often used for solo melodies that need to cut through the texture. Composers use them as a 'choir' of individual soloists, each bringing a unique character to the music.",
          "visualPrompts": [
            "A video montage showing a close-up of each principal woodwind instrument being played, allowing the viewer to connect the instrument to its unique sound."
          ]
        },
        {
          "id": "music-theory-401-l09-c3",
          "title": "The Brass and Percussion Families",
          "content": "The brass family—trumpet, French horn, trombone, and tuba—provides power and nobility. They can produce brilliant, heroic fanfares or warm, rounded chords. The French horn is a unique 'bridge' instrument, blending equally well with woodwinds and other brass. The percussion section provides rhythmic drive, dramatic impact, and sonic punctuation. It is divided into pitched instruments (timpani, xylophone, marimba) that can play melodies, and unpitched instruments (snare drum, bass drum, cymbals) that provide rhythm and texture.",
          "visualPrompts": [
            "A diagram showing the standard orchestral layout, highlighting the typical placement of the brass and percussion sections.",
            "A split-screen video showing a pitched percussion instrument (marimba) playing a melody and an unpitched instrument (snare drum) playing a rhythm."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-401-l09-f1",
          "front": "Timbre",
          "back": "The unique tone color or quality of a sound that distinguishes one instrument from another."
        },
        {
          "id": "music-theory-401-l09-f2",
          "front": "Pizzicato",
          "back": "A performance instruction for string players to pluck the strings instead of using the bow."
        },
        {
          "id": "music-theory-401-l09-f3",
          "front": "Transposing Instrument",
          "back": "An instrument for which the written pitch is different from the sounding pitch (e.g., Clarinet in B♭, French Horn in F)."
        },
        {
          "id": "music-theory-401-l09-f4",
          "front": "Divisi",
          "back": "An instruction for a section of players (e.g., first violins) to divide into two or more groups to play different parts."
        }
      ]
    },
    {
      "id": "music-theory-401-l10",
      "title": "Scoring and Arranging Techniques",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish between orchestration and arranging.",
        "Apply principles of spacing and doubling for clear textures.",
        "Utilize common arranging techniques like soli and call and response."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l10-c1",
          "title": "Arranging vs. Orchestration",
          "content": "While often used interchangeably, arranging and orchestration are distinct processes. Orchestration is the task of assigning an existing musical composition to specific instruments. The notes, rhythms, and harmonies are already written. Arranging is a more creative act that involves adapting a piece of music for a new context. An arranger might change the harmony, form, rhythm, or style of the original piece before orchestrating it. For example, arranging 'Yesterday' for a jazz big band involves reharmonization and rhythmic changes, while orchestrating it is the final step of assigning the parts.",
          "visualPrompts": [
            "A simple lead sheet of 'Twinkle, Twinkle, Little Star' shown on the left. On the right, two different arrangements are shown: one as a rock song, one as a string quartet, to illustrate the creative choices of an arranger."
          ]
        },
        {
          "id": "music-theory-401-l10-c2",
          "title": "Spacing and Doubling",
          "content": "Effective scoring requires careful attention to spacing and doubling. A fundamental principle, derived from the natural overtone series, is to place wider intervals in the lower registers and closer intervals in the upper registers. This prevents a muddy sound in the bass and provides a solid foundation. Doubling—having multiple instruments play the same line—can strengthen a melody or reinforce a harmony. Doubling the root or 5th of a chord adds stability, while doubling the 3rd adds color. It's generally wise to avoid doubling the leading tone, as it can create voice-leading problems.",
          "visualPrompts": [
            "Two chords shown on a staff. The first is poorly spaced (close interval in the bass). The second is well-spaced (wide interval in the bass), with a checkmark."
          ]
        },
        {
          "id": "music-theory-401-l10-c3",
          "title": "Common Arranging Textures",
          "content": "Arrangers use various textures to create interest. A unison or octave texture, where all instruments play the same melodic line, creates a powerful, focused sound. A soli is a feature for an entire section (e.g., the saxophone section in a big band) playing a harmonized melody. Background figures, like sustained pads or rhythmic riffs, support the main melody without overpowering it. Call and response creates a musical dialogue, where one instrument or section makes a statement (the 'call') and another answers (the 'response').",
          "visualPrompts": [
            "A score excerpt from a big band chart, highlighting a saxophone soli.",
            "An animation showing a 'call' phrase played by the trumpets, followed by a 'response' phrase from the trombones."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-401-l10-a1",
          "title": "Assign the Role",
          "type": "drag_and_drop",
          "prompt": "In a typical string quartet arrangement, drag the instrument to its most common role.",
          "items": [
            "Violin I",
            "Violin II",
            "Viola",
            "Cello"
          ],
          "zones": [
            "Melody",
            "Harmony (upper)",
            "Harmony (lower)",
            "Bass line"
          ]
        }
      ]
    },
    {
      "id": "music-theory-401-l11",
      "title": "Orchestration & Arranging Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of instrument families and fundamental arranging principles."
      ],
      "questions": [
        {
          "id": "music-theory-401-l11-q1",
          "text": "Which instrument is known as a 'bridge' instrument for its ability to blend well with both woodwinds and brass?",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Viola"
            },
            {
              "id": "b",
              "text": "Clarinet"
            },
            {
              "id": "c",
              "text": "French horn"
            },
            {
              "id": "d",
              "text": "Trombone"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The warm, round timbre of the French horn allows it to blend seamlessly with a wide variety of instrumental colors."
        },
        {
          "id": "music-theory-401-l11-q2",
          "text": "The principle of placing wider intervals in lower registers is based on:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The physical size of the instruments"
            },
            {
              "id": "b",
              "text": "The natural overtone series"
            },
            {
              "id": "c",
              "text": "A rule from species counterpoint"
            },
            {
              "id": "d",
              "text": "The circle of fifths"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This spacing mimics the overtone series, where intervals are wider at the bottom, resulting in a clearer, more resonant sound."
        },
        {
          "id": "music-theory-401-l11-q3",
          "text": "A harmonized melodic passage played by an entire section of a big band is called a:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Solo"
            },
            {
              "id": "b",
              "text": "Soli"
            },
            {
              "id": "c",
              "text": "Tutti"
            },
            {
              "id": "d",
              "text": "Call and response"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A soli features a whole section playing together, as opposed to a solo, which features one player."
        },
        {
          "id": "music-theory-401-l11-q4",
          "text": "Reharmonizing a song with new chords is an act of:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Orchestration"
            },
            {
              "id": "b",
              "text": "Transcription"
            },
            {
              "id": "c",
              "text": "Arranging"
            },
            {
              "id": "d",
              "text": "Transposition"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Arranging involves making creative changes to the fundamental elements of a piece, such as its harmony."
        }
      ]
    },
    {
      "id": "music-theory-401-l12",
      "title": "Composition Capstone Workshop",
      "type": "interactive",
      "duration": 15,
      "objectives": [
        "Synthesize counterpoint, jazz harmony, and orchestration into a short composition.",
        "Plan the form, texture, and instrumentation for a 16-bar piece.",
        "Self-evaluate the composition using principles learned throughout the course."
      ],
      "chunks": [
        {
          "id": "music-theory-401-l12-c1",
          "title": "Planning Your Composition",
          "content": "A successful composition begins with a clear plan. Before writing a single note, define your key parameters. What is the mood or character? What is the form (e.g., AABA, simple binary)? What is the instrumentation? Sketch a harmonic plan using Roman numerals, deciding on key cadences and any advanced harmony you wish to include. Plan the melodic contour—where will it climax? Finally, map out the texture. Where will it be homophonic? Where will you use counterpoint? A solid blueprint will guide your creative decisions and lead to a more coherent piece.",
          "visualPrompts": [
            "A sample composition planning worksheet with fields for Form, Key, Instrumentation, Harmonic Plan, and Textural Plan."
          ]
        },
        {
          "id": "music-theory-401-l12-c2",
          "title": "The Writing Process: A Step-by-Step Approach",
          "content": "Begin by composing the most important line: the melody. Ensure it has a clear shape and is memorable. Next, write a strong bass line that works in counterpoint with the melody. This two-voice framework is the skeleton of your piece. Once this is solid, fill in the inner voices, paying close attention to voice leading and avoiding parallels. Finally, add articulations, dynamics, and any non-chord tones to bring the music to life. Throughout the process, check that you are writing idiomatically for your chosen instruments and that all parts are within a comfortable playing range.",
          "visualPrompts": [
            "An animation showing the compositional process in layers: first the melody appears, then the bass line, then the inner harmony, and finally dynamics and articulations."
          ]
        },
        {
          "id": "music-theory-401-l12-c3",
          "title": "Review and Refine",
          "content": "Once your draft is complete, the final step is to review and refine. Play through each part individually—is each line musically satisfying on its own? Then, listen to the piece as a whole. Does the harmony support the melody? Is the texture balanced? Does the form unfold logically? Is there enough variety and contrast? Don't be afraid to revise. The best compositions are often the result of careful editing, where initial ideas are polished until they shine.",
          "visualPrompts": [
            "A checklist for self-evaluation, with questions like 'Is the voice leading smooth?' and 'Are instrument ranges respected?'"
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-401-l12-a1",
          "title": "Composition Workflow",
          "type": "sorting_buckets",
          "buckets": [
            "Do First (Planning)",
            "Do Second (Writing)",
            "Do Last (Reviewing)"
          ],
          "items": [
            {
              "text": "Choose key, form, and instrumentation",
              "bucket": "Do First (Planning)"
            },
            {
              "text": "Sketch the chord progression",
              "bucket": "Do First (Planning)"
            },
            {
              "text": "Write the main melody",
              "bucket": "Do Second (Writing)"
            },
            {
              "text": "Add the bass line and inner voices",
              "bucket": "Do Second (Writing)"
            },
            {
              "text": "Check for parallel 5ths and octaves",
              "bucket": "Do Last (Reviewing)"
            },
            {
              "text": "Verify instrument ranges and playability",
              "bucket": "Do Last (Reviewing)"
            },
            {
              "text": "Add dynamics and articulations",
              "bucket": "Do Second (Writing)"
            },
            {
              "text": "Listen to the full piece for balance",
              "bucket": "Do Last (Reviewing)"
            }
          ]
        }
      ]
    },
    {
      "id": "music-theory-401-l13",
      "title": "Final Mastery Exam",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize expert-level knowledge across jazz harmony, counterpoint, and orchestration."
      ],
      "questions": [
        {
          "id": "music-theory-401-l13-q1",
          "text": "A Cmaj9(♯11) chord contains which notes?",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "C – E – G – B – D – F"
            },
            {
              "id": "b",
              "text": "C – E – G – B♭ – D – F♯"
            },
            {
              "id": "c",
              "text": "C – E – G – B – D – F♯"
            },
            {
              "id": "d",
              "text": "C – E♭ – G – B♭ – D – F"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Cmaj7 is C-E-G-B. The 9th is D. The sharp 11th (♯11) is F♯."
        },
        {
          "id": "music-theory-401-l13-q2",
          "text": "In species counterpoint, fifth species ('florid') is characterized by:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Strictly note-against-note writing"
            },
            {
              "id": "b",
              "text": "The introduction of suspensions"
            },
            {
              "id": "c",
              "text": "A free combination of rhythms from all previous species"
            },
            {
              "id": "d",
              "text": "The exclusive use of contrary motion"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Fifth species is the culmination of the previous four, allowing the composer to mix rhythms to create a more fluid and musical line."
        },
        {
          "id": "music-theory-401-l13-q3",
          "text": "A 'contrafact' in jazz is:",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A piece that avoids standard harmony"
            },
            {
              "id": "b",
              "text": "A new melody composed over a pre-existing chord progression"
            },
            {
              "id": "c",
              "text": "An arrangement for a very large ensemble"
            },
            {
              "id": "d",
              "text": "A contrapuntal exercise"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Many bebop tunes are contrafacts of older standards, most famously 'I Got Rhythm'."
        },
        {
          "id": "music-theory-401-l13-q4",
          "text": "When scoring for an ensemble, which chord tone is most often avoided when doubling?",
          "skillId": "music-theory-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The root"
            },
            {
              "id": "b",
              "text": "The fifth"
            },
            {
              "id": "c",
              "text": "The third"
            },
            {
              "id": "d",
              "text": "The leading tone (7th degree of the scale)"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The leading tone has a very strong tendency to resolve up by a half step. Doubling it can easily lead to parallel octaves upon resolution."
        }
      ]
    }
  ]
};
