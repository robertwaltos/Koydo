import type { LearningModule } from "@/lib/modules/types";

export const music_theory_201_Module: LearningModule = {
  "id": "music-theory-201",
  "title": "Intermediate Music Theory",
  "description": "Explore intervals, build chords, master key signatures, and train your ear. Bridge the gap between reading notes and understanding harmony.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music"
  ],
  "minAge": 10,
  "maxAge": 15,
  "version": "1.1.0",
  "learningObjectives": [
    "Identify and name all simple intervals from unison to octave",
    "Build major, minor, augmented, and diminished triads",
    "Read and write key signatures for all major and minor keys",
    "Construct major, natural minor, harmonic minor, and melodic minor scales",
    "Recognize intervals and chord qualities by ear",
    "Understand the circle of fifths and use it for key relationships",
    "Understand the function of diatonic triads within a major key (I, ii, iii, IV, V, vi, vii°)",
    "Transpose a simple melody to a new key"
  ],
  "lessons": [
    {
      "id": "music-theory-201-l01",
      "title": "Intervals: The Building Blocks",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define a musical interval as the distance between two pitches",
        "Name intervals by number (2nd, 3rd, 4th, etc.)",
        "Distinguish between melodic and harmonic intervals"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l01-c1",
          "title": "What Is an Interval?",
          "content": "In music, an interval is simply the distance between two notes. Think of it like the space between two steps on a ladder! This distance is what makes melodies and chords sound the way they do. For example, the first two notes of 'Twinkle, Twinkle Little Star' form an interval called a 'perfect 5th.' To find an interval's number, you just count the letter names from the starting note to the ending note, including both. So, from C to E, you count C, D, E... that's three letters, making it a 3rd. Understanding intervals is the first step to understanding how music works!"
        },
        {
          "id": "music-theory-201-l01-c2",
          "title": "Melodic vs. Harmonic Intervals",
          "content": "Intervals can be played in two ways: melodic or harmonic. A melodic interval is when you play two notes one after the other, creating a piece of a melody. Think of singing a tune! A harmonic interval is when you play two notes at the exact same time, creating a harmony or part of a chord. For example, playing a C and then an E is a melodic 3rd. Playing C and E together is a harmonic 3rd. Even though they use the same notes, they create very different musical effects."
        },
        {
          "id": "music-theory-201-l01-c3",
          "title": "Counting Interval Numbers",
          "content": "Let's practice counting intervals. Remember, always start counting from the bottom note. From C to D is a 2nd (C, D). From C to E is a 3rd (C, D, E). From C to F is a 4th (C, D, E, F). This pattern continues all the way up! C to G is a 5th, C to A is a 6th, and C to B is a 7th. An interval from one C to the next C is called an 8th, or an octave. And what if the notes are the same? That's a 'unison.' Getting fast at counting these numbers is a key skill for any musician."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l01-f1",
          "front": "Interval",
          "back": "The distance in pitch between two notes."
        },
        {
          "id": "music-theory-201-l01-f2",
          "front": "Melodic Interval",
          "back": "Two notes played one after the other (like a melody)."
        },
        {
          "id": "music-theory-201-l01-f3",
          "front": "Harmonic Interval",
          "back": "Two notes played at the same time (like a chord)."
        },
        {
          "id": "music-theory-201-l01-f4",
          "front": "Octave",
          "back": "An interval of an 8th, from one note to the same note higher or lower."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l01-a1",
          "type": "image",
          "title": "Intervals on a Keyboard",
          "content": "A diagram of a piano keyboard showing how to count the distance for a 3rd (C to E) and a 5th (C to G)."
        }
      ]
    },
    {
      "id": "music-theory-201-l02",
      "title": "Interval Quality",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Distinguish between major, minor, perfect, augmented, and diminished interval qualities",
        "Calculate interval quality using half-step counts",
        "Match common intervals to familiar song openings"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l02-c1",
          "title": "More Than Just a Number",
          "content": "Just knowing an interval's number isn't the whole story. We also need to know its 'quality.' The quality describes the exact sound and size of the interval. For example, C to E is a 3rd, but C to E-flat is also a 3rd. They sound very different because one is a 'major 3rd' (bright and happy) and the other is a 'minor 3rd' (darker and sadder). The five qualities we use are perfect, major, minor, augmented, and diminished. We figure them out by counting the exact number of half steps between the notes."
        },
        {
          "id": "music-theory-201-l02-c2",
          "title": "Perfect Intervals",
          "content": "Some intervals sound so stable and pure that we call them 'perfect.' These are unisons, 4ths, 5ths, and octaves. A perfect 4th (like in 'Here Comes the Bride') has 5 half steps. A perfect 5th (like in 'Twinkle, Twinkle') has 7 half steps. If you make a perfect interval one half step bigger, it becomes 'augmented.' If you make it one half step smaller, it becomes 'diminished.'"
        },
        {
          "id": "music-theory-201-l02-c3",
          "title": "Major and Minor Intervals",
          "content": "The other intervals—2nds, 3rds, 6ths, and 7ths—can be 'major' or 'minor.' Think of major as the 'bigger' version and minor as the 'smaller' version. A major interval is always one half step larger than the minor interval with the same number. For example, a major 3rd has 4 half steps (C to E), while a minor 3rd has 3 half steps (C to E-flat). This small difference creates a huge change in the mood of the music."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-201-l02-a1",
          "title": "Match the Half Steps",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Perfect 5th",
              "right": "7 half steps"
            },
            {
              "left": "Major 3rd",
              "right": "4 half steps"
            },
            {
              "left": "Minor 3rd",
              "right": "3 half steps"
            },
            {
              "left": "Perfect 4th",
              "right": "5 half steps"
            },
            {
              "left": "Major 2nd",
              "right": "2 half steps"
            },
            {
              "left": "Minor 7th",
              "right": "10 half steps"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l02-f1",
          "front": "Perfect Intervals",
          "back": "Unisons, 4ths, 5ths, and octaves. They sound very stable."
        },
        {
          "id": "music-theory-201-l02-f2",
          "front": "Major 3rd",
          "back": "An interval of 4 half steps (e.g., C to E). Sounds bright and happy."
        },
        {
          "id": "music-theory-201-l02-f3",
          "front": "Minor 3rd",
          "back": "An interval of 3 half steps (e.g., C to E♭). Sounds darker or sadder."
        },
        {
          "id": "music-theory-201-l02-f4",
          "front": "Augmented Interval",
          "back": "A perfect or major interval made one half step larger."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l02-a1",
          "type": "practice",
          "title": "Interval Identifier",
          "content": "Listen to an interval and identify its number and quality."
        }
      ]
    },
    {
      "id": "music-theory-201-l03",
      "title": "Interval Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of interval naming and quality"
      ],
      "questions": [
        {
          "id": "music-theory-201-l03-q1",
          "text": "How many half steps are in a perfect 5th?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "6"
            },
            {
              "id": "c",
              "text": "7"
            },
            {
              "id": "d",
              "text": "8"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A perfect 5th, like from C to G, contains 7 half steps."
        },
        {
          "id": "music-theory-201-l03-q2",
          "text": "What is the interval from C to A♭?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Major 6th"
            },
            {
              "id": "b",
              "text": "Minor 6th"
            },
            {
              "id": "c",
              "text": "Perfect 5th"
            },
            {
              "id": "d",
              "text": "Diminished 7th"
            }
          ],
          "correctOptionId": "b",
          "explanation": "C to A is a 6th. C to A has 9 half steps (Major 6th). C to A♭ has 8 half steps, making it a Minor 6th."
        },
        {
          "id": "music-theory-201-l03-q3",
          "text": "Which intervals are classified as 'perfect'?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2nds, 3rds, 6ths, and 7ths"
            },
            {
              "id": "b",
              "text": "Unisons, 4ths, 5ths, and octaves"
            },
            {
              "id": "c",
              "text": "Only 5ths and octaves"
            },
            {
              "id": "d",
              "text": "All intervals in a major scale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unisons, 4ths, 5ths, and octaves are called perfect intervals because of their consonant sound."
        },
        {
          "id": "music-theory-201-l03-q4",
          "text": "A major interval made one half step smaller becomes what?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Diminished"
            },
            {
              "id": "b",
              "text": "Augmented"
            },
            {
              "id": "c",
              "text": "Minor"
            },
            {
              "id": "d",
              "text": "Perfect"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Shrinking a major interval by one half step turns it into a minor interval."
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
      "id": "music-theory-201-l04",
      "title": "Building Triads",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define a triad as a three-note chord built in stacked 3rds",
        "Construct major and minor triads from any root note",
        "Identify the root, 3rd, and 5th of a triad"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l04-c1",
          "title": "What Is a Triad?",
          "content": "A triad is a simple, three-note chord. It's built by stacking two intervals of a 3rd on top of each other. We start with a bottom note called the 'root.' Then we add a note a 3rd above the root, which we call the '3rd.' Finally, we add another note a 3rd above that, which we call the '5th' (because it's a 5th above the root). For example, a C triad is built with the notes C (root), E (3rd), and G (5th). Triads are the foundation of harmony in most music you hear."
        },
        {
          "id": "music-theory-201-l04-c2",
          "title": "Major Triads",
          "content": "A major triad sounds bright and happy. Its recipe is simple: a Major 3rd on the bottom and a Minor 3rd stacked on top. Let's build a C major triad. From the root C, we go up a Major 3rd (4 half steps) to E. From E, we go up a Minor 3rd (3 half steps) to G. The notes are C-E-G. The interval from the root (C) to the 5th (G) is a Perfect 5th. This Major 3rd + Minor 3rd formula works for any root note."
        },
        {
          "id": "music-theory-201-l04-c3",
          "title": "Minor Triads",
          "content": "A minor triad sounds darker or more serious. To build one, we just flip the recipe for a major triad. A minor triad has a Minor 3rd on the bottom and a Major 3rd on top. Let's build a C minor triad. From the root C, we go up a Minor 3rd (3 half steps) to E♭. From E♭, we go up a Major 3rd (4 half steps) to G. The notes are C-E♭-G. Notice that the 5th is still a Perfect 5th above the root, just like in a major triad. Only the middle note, the 3rd, is different."
        },
        {
          "id": "music-theory-201-l04-c4",
          "title": "Augmented and Diminished Triads",
          "content": "There are two other types of triads that sound more tense. An 'augmented' triad is built from two Major 3rds stacked together (e.g., C-E-G♯). This makes the 5th an Augmented 5th above the root. A 'diminished' triad is built from two Minor 3rds stacked together (e.g., C-E♭-G♭). This makes the 5th a Diminished 5th above the root. These chords add tension and excitement to music."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l04-f1",
          "front": "Triad",
          "back": "A three-note chord built by stacking two 3rds (root, 3rd, 5th)."
        },
        {
          "id": "music-theory-201-l04-f2",
          "front": "Major Triad Formula",
          "back": "Root + Major 3rd + Minor 3rd."
        },
        {
          "id": "music-theory-201-l04-f3",
          "front": "Minor Triad Formula",
          "back": "Root + Minor 3rd + Major 3rd."
        },
        {
          "id": "music-theory-201-l04-f4",
          "front": "Diminished Triad",
          "back": "Two stacked minor 3rds. The 5th is a diminished 5th above the root."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l04-a1",
          "type": "image",
          "title": "Triad Formulas",
          "content": "A visual chart showing the four triad types (Major, Minor, Diminished, Augmented) on a staff with their interval formulas."
        }
      ]
    },
    {
      "id": "music-theory-201-l05",
      "title": "Chord Building Workshop",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Build major, minor, augmented, and diminished triads from given root notes",
        "Sort triads by quality based on their sound and structure",
        "Identify chord tones in written triads"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l05-c1",
          "title": "Building From Any Root",
          "content": "You can build any triad from any root note using the half-step formulas. For a major triad, count up 4 half steps from the root to find the 3rd, then 3 more half steps to find the 5th. For a minor triad, just reverse it: count up 3 half steps, then 4 half steps. For example, to build a G major triad, start on G. Go up 4 half steps to B, then 3 more to D. The notes are G-B-D. To build a G minor triad, start on G, go up 3 half steps to B♭, then 4 more to D. The notes are G-B♭-D. Practice makes perfect!"
        },
        {
          "id": "music-theory-201-l05-c2",
          "title": "Quick Quality Check",
          "content": "Here's a shortcut to identify a triad's quality. First, look at the interval from the root to the 5th. If it's a Perfect 5th, the triad must be either major or minor. Then you just have to check the 3rd to see which one it is. If the outer interval is an Augmented 5th, the triad is augmented. If it's a Diminished 5th, the triad is diminished. Checking the outer interval first can save you a lot of time!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-201-l05-a1",
          "title": "Sort the Triads",
          "type": "sorting_buckets",
          "buckets": [
            "Major Triad",
            "Minor Triad",
            "Diminished Triad",
            "Augmented Triad"
          ],
          "items": [
            {
              "text": "C – E – G",
              "bucket": "Major Triad"
            },
            {
              "text": "D – F – A",
              "bucket": "Minor Triad"
            },
            {
              "text": "B – D – F",
              "bucket": "Diminished Triad"
            },
            {
              "text": "C – E – G♯",
              "bucket": "Augmented Triad"
            },
            {
              "text": "F – A – C",
              "bucket": "Major Triad"
            },
            {
              "text": "A – C – E",
              "bucket": "Minor Triad"
            },
            {
              "text": "F♯ – A – C",
              "bucket": "Diminished Triad"
            },
            {
              "text": "E – G♯ – B♯",
              "bucket": "Augmented Triad"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l05-f1",
          "front": "Root",
          "back": "The bottom note of a triad that gives the chord its name."
        },
        {
          "id": "music-theory-201-l05-f2",
          "front": "Augmented Triad",
          "back": "Two stacked major 3rds. Sounds bright and tense (e.g., C-E-G♯)."
        },
        {
          "id": "music-theory-201-l05-f3",
          "front": "Tritone",
          "back": "An interval of 6 half steps (a diminished 5th). Sounds very tense."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l05-a1",
          "type": "practice",
          "title": "Triad Builder",
          "content": "Given a root note and a quality, build the correct triad on a virtual staff."
        }
      ]
    },
    {
      "id": "music-theory-201-l06",
      "title": "Triads Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate ability to identify and build triad types"
      ],
      "questions": [
        {
          "id": "music-theory-201-l06-q1",
          "text": "What notes make up a D minor triad?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "D – F♯ – A"
            },
            {
              "id": "b",
              "text": "D – F – A"
            },
            {
              "id": "c",
              "text": "D – F – A♭"
            },
            {
              "id": "d",
              "text": "D – F♯ – A♯"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A minor triad is a minor 3rd (D to F) plus a major 3rd (F to A)."
        },
        {
          "id": "music-theory-201-l06-q2",
          "text": "An augmented triad is built from:",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Major 3rd + Major 3rd"
            },
            {
              "id": "b",
              "text": "Minor 3rd + Minor 3rd"
            },
            {
              "id": "c",
              "text": "Major 3rd + Minor 3rd"
            },
            {
              "id": "d",
              "text": "Minor 3rd + Major 3rd"
            }
          ],
          "correctOptionId": "a",
          "explanation": "An augmented triad is created by stacking two major 3rds."
        },
        {
          "id": "music-theory-201-l06-q3",
          "text": "In a major scale, which scale degree builds a diminished triad?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1st"
            },
            {
              "id": "b",
              "text": "4th"
            },
            {
              "id": "c",
              "text": "5th"
            },
            {
              "id": "d",
              "text": "7th"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The triad built on the 7th note of a major scale is always diminished."
        },
        {
          "id": "music-theory-201-l06-q4",
          "text": "What is the 5th of a B♭ major triad?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "D"
            },
            {
              "id": "b",
              "text": "E♭"
            },
            {
              "id": "c",
              "text": "F"
            },
            {
              "id": "d",
              "text": "F♯"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A B♭ major triad consists of the root (B♭), the 3rd (D), and the 5th (F)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      }
    },
    {
      "id": "music-theory-201-l07",
      "title": "Key Signatures",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain what a key signature is and why it exists",
        "Read key signatures with sharps and flats",
        "Determine the major key from a given key signature"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l07-c1",
          "title": "Why Use Key Signatures?",
          "content": "Imagine having to write a sharp (♯) or flat (♭) symbol next to every single F and C in a song. It would get messy fast! A key signature is a shortcut. It's a set of sharps or flats placed at the beginning of the music that tells you which notes to play sharp or flat for the entire piece. This keeps the music clean and easy to read, and it establishes the 'home base' or key of the song. The key of C major is the only one with no sharps or flats."
        },
        {
          "id": "music-theory-201-l07-c2",
          "title": "The Order of Sharps",
          "content": "Sharps are always added in the exact same order: F♯, C♯, G♯, D♯, A♯, E♯, B♯. A great way to remember this is with the sentence: 'Father Charles Goes Down And Ends Battle.' Here's a trick to find the major key: look at the *last* sharp in the key signature. The key is the note a half step *up* from that last sharp. For example, if the last sharp is G♯, go up a half step to A. The key is A major!"
        },
        {
          "id": "music-theory-201-l07-c3",
          "title": "The Order of Flats",
          "content": "Flats are also added in a specific order, which is just the reverse of the sharps: B♭, E♭, A♭, D♭, G♭, C♭, F♭. You can remember this with: 'Battle Ends And Down Goes Charles' Father.' The trick for flats is even easier: the name of the major key is the name of the *second-to-last* flat in the signature. For example, if you have four flats (B♭, E♭, A♭, D♭), the second-to-last one is A♭, so the key is A♭ major. (The only one you have to memorize is that one flat is F major)."
        },
        {
          "id": "music-theory-201-l07-c4",
          "title": "Finding Minor Keys",
          "content": "Every major key has a cousin called its 'relative minor.' They share the exact same key signature. To find the relative minor, just go down three half steps from the major key's starting note. For example, C major has no sharps or flats. Go down three half steps from C (to B, B♭, A) and you land on A. So, A minor is the relative minor of C major. To tell if a song is in the major or minor key, listen to the 'home base' note—the note the music feels like it wants to end on."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l07-f1",
          "front": "Key Signature",
          "back": "Sharps or flats at the beginning of a staff that apply to the whole piece."
        },
        {
          "id": "music-theory-201-l07-f2",
          "front": "Order of Sharps",
          "back": "F♯, C♯, G♯, D♯, A♯, E♯, B♯ (Father Charles Goes Down And Ends Battle)"
        },
        {
          "id": "music-theory-201-l07-f3",
          "front": "Order of Flats",
          "back": "B♭, E♭, A♭, D♭, G♭, C♭, F♭ (Battle Ends And Down Goes Charles' Father)"
        },
        {
          "id": "music-theory-201-l07-f4",
          "front": "Relative Minor",
          "back": "The minor key that shares the same key signature as a major key."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l07-a1",
          "type": "image",
          "title": "Key Signature Chart",
          "content": "A visual chart showing the order of sharps and flats on both the treble and bass clefs."
        }
      ]
    },
    {
      "id": "music-theory-201-l08",
      "title": "The Circle of Fifths",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Navigate the circle of fifths clockwise (sharps) and counterclockwise (flats)",
        "Use the circle to identify key signatures quickly",
        "Find relative major and minor keys using the circle"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l08-c1",
          "title": "The Musician's Super-Tool",
          "content": "The circle of fifths is a diagram that shows the relationship between all 12 musical keys. Think of it like a clock. At the top is C major (no sharps/flats). As you move clockwise, you go up by a perfect 5th and add one sharp each time (C -> G -> D -> A...). As you move counterclockwise, you go up by a perfect 4th and add one flat each time (C -> F -> B♭ -> E♭...). It's a visual map of all the key signatures."
        },
        {
          "id": "music-theory-201-l08-c2",
          "title": "Using the Circle",
          "content": "The circle of fifths is incredibly useful. You can instantly see how many sharps or flats are in any key. The relative minor keys are shown on an inner circle, lined up with their relative major keys. Keys that are next to each other on the circle are 'closely related' and sound good together because they only differ by one note. This helps a lot with songwriting and understanding how songs change keys. At the bottom of the circle, keys like F♯ and G♭ overlap—they sound the same but are spelled differently. We call these 'enharmonic equivalents.'"
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-201-l08-a1",
          "title": "Key Signature Match",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "G major",
              "right": "1 sharp (F♯)"
            },
            {
              "left": "F major",
              "right": "1 flat (B♭)"
            },
            {
              "left": "D major",
              "right": "2 sharps (F♯, C♯)"
            },
            {
              "left": "B♭ major",
              "right": "2 flats (B♭, E♭)"
            },
            {
              "left": "A major",
              "right": "3 sharps (F♯, C♯, G♯)"
            },
            {
              "left": "E♭ major",
              "right": "3 flats (B♭, E♭, A♭)"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l08-f1",
          "front": "Circle of Fifths",
          "back": "A diagram arranging the 12 musical keys to show their relationships."
        },
        {
          "id": "music-theory-201-l08-f2",
          "front": "Closely Related Keys",
          "back": "Keys that are next to each other on the circle of fifths."
        },
        {
          "id": "music-theory-201-l08-f3",
          "front": "Enharmonic Equivalent",
          "back": "Two keys that sound the same but are spelled differently (e.g., F♯ major and G♭ major)."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l08-a1",
          "type": "image",
          "title": "The Circle of Fifths Diagram",
          "content": "A clear, colorful diagram of the Circle of Fifths, showing major keys, minor keys, and the number of sharps/flats for each."
        }
      ]
    },
    {
      "id": "music-theory-201-l09",
      "title": "Keys & Circle Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate mastery of key signatures and the circle of fifths"
      ],
      "questions": [
        {
          "id": "music-theory-201-l09-q1",
          "text": "How many flats are in the key of E♭ major?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The key of E♭ major has three flats: B♭, E♭, and A♭."
        },
        {
          "id": "music-theory-201-l09-q2",
          "text": "What is the relative minor of G major?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "B minor"
            },
            {
              "id": "b",
              "text": "D minor"
            },
            {
              "id": "c",
              "text": "E minor"
            },
            {
              "id": "d",
              "text": "A minor"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The relative minor is three half steps down from the major key. Three half steps down from G is E."
        },
        {
          "id": "music-theory-201-l09-q3",
          "text": "Moving clockwise on the circle of fifths from D, which key comes next?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G"
            },
            {
              "id": "b",
              "text": "A"
            },
            {
              "id": "c",
              "text": "E"
            },
            {
              "id": "d",
              "text": "C"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Moving clockwise means going up a perfect 5th. A perfect 5th above D is A."
        },
        {
          "id": "music-theory-201-l09-q4",
          "text": "Using the 'last sharp' trick, if the last sharp in a key signature is C♯, the key is:",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "C major"
            },
            {
              "id": "b",
              "text": "D major"
            },
            {
              "id": "c",
              "text": "A major"
            },
            {
              "id": "d",
              "text": "G major"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The major key is a half step up from the last sharp. A half step up from C♯ is D."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      }
    },
    {
      "id": "music-theory-201-l10",
      "title": "Diatonic Chords: Harmony in a Key",
      "type": "video",
      "duration": 15,
      "objectives": [
        "Build a triad on each degree of the major scale",
        "Identify the quality of each diatonic triad (major, minor, diminished)",
        "Introduce Roman numeral analysis for chords (I, ii, V, etc.)"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l10-c1",
          "title": "The Chord Family of a Key",
          "content": "So far, we've built triads on random notes. But what happens when we only use the notes available in a specific key? These are called 'diatonic chords.' If we are in the key of C major, we can only use the notes C, D, E, F, G, A, and B. We can build a triad starting on each of these notes. These seven chords form the 'chord family' for the key of C major, and they are the foundation of harmony in that key."
        },
        {
          "id": "music-theory-201-l10-c2",
          "title": "The Diatonic Chord Pattern",
          "content": "When you build a triad on each note of a major scale, a predictable pattern of chord qualities emerges. It's the same for every major key! The chord on the 1st scale degree is Major. The 2nd is minor. The 3rd is minor. The 4th is Major. The 5th is Major. The 6th is minor. And the 7th is diminished. So the pattern is: Major, minor, minor, Major, Major, minor, diminished. Knowing this pattern is like having a cheat code for songwriting!"
        },
        {
          "id": "music-theory-201-l10-c3",
          "title": "Introducing Roman Numerals",
          "content": "To talk about these diatonic chords, musicians use Roman numerals. This lets us discuss a chord's function no matter what key we're in. We use uppercase Roman numerals for Major chords (I, IV, V) and lowercase for minor chords (ii, iii, vi). For the diminished chord, we use a lowercase numeral with a small circle (vii°). So in C major, the C chord is I, the Dm chord is ii, the Em is iii, and so on. These numerals are the language of harmony."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l10-f1",
          "front": "Diatonic Chords",
          "back": "Chords made up only of notes from the current key signature."
        },
        {
          "id": "music-theory-201-l10-f2",
          "front": "Major Scale Chord Pattern",
          "back": "I-ii-iii-IV-V-vi-vii° (Major, minor, minor, Major, Major, minor, diminished)"
        },
        {
          "id": "music-theory-201-l10-f3",
          "front": "Primary Chords",
          "back": "The I, IV, and V chords. They are the most important chords in a key."
        },
        {
          "id": "music-theory-201-l10-f4",
          "front": "Roman Numeral Analysis",
          "back": "Using Roman numerals to label chords based on their scale degree and quality."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l10-a1",
          "type": "image",
          "title": "Diatonic Triads in C Major",
          "content": "A diagram showing the seven triads of the C major scale on a staff, with their Roman numeral labels (I, ii, iii, IV, V, vi, vii°) underneath."
        }
      ]
    },
    {
      "id": "music-theory-201-l11",
      "title": "Scale Construction Lab",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Build major, natural minor, harmonic minor, and melodic minor scales",
        "Compare the step patterns of each scale type",
        "Identify the characteristic tones that distinguish each minor scale variant"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l11-c1",
          "title": "Major Scale Pattern Review",
          "content": "The major scale is the foundation for all other scales. Its bright, happy sound comes from a specific pattern of whole and half steps: Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H). You can start on any note, follow this pattern, and you will always create a major scale. For example, starting on C gives you C-D-E-F-G-A-B-C. This pattern is our reference point for building other types of scales."
        },
        {
          "id": "music-theory-201-l11-c2",
          "title": "The Natural Minor Scale",
          "content": "The natural minor scale has a darker, more thoughtful sound. Its pattern is Whole-Half-Whole-Whole-Half-Whole-Whole (W-H-W-W-H-W-W). An easier way to think of it is to take a major scale and lower the 3rd, 6th, and 7th notes by a half step. The natural minor scale uses the exact same notes as its relative major scale, just starting from a different note (the 6th degree). For example, A natural minor (A-B-C-D-E-F-G) uses the same notes as C major."
        },
        {
          "id": "music-theory-201-l11-c3",
          "title": "Harmonic and Melodic Minor",
          "content": "Musicians created two other minor scales to add more flavor. The 'harmonic minor' is a natural minor scale with a raised 7th note. This creates a strong pull back to the starting note. For A harmonic minor, the notes are A-B-C-D-E-F-G♯. The 'melodic minor' is a bit trickier. When you go up the scale, you raise the 6th and 7th notes (A-B-C-D-E-F♯-G♯). But when you come back down, you lower them back to the natural minor (G-F-E-D-C-B-A). This makes the melody smoother when ascending."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-201-l11-a1",
          "title": "Build the Scale",
          "type": "drag_and_drop",
          "prompt": "Arrange these notes to form an A harmonic minor scale ascending:",
          "items": [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G♯"
          ],
          "zones": [
            "1st",
            "2nd",
            "3rd",
            "4th",
            "5th",
            "6th",
            "7th"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l11-f1",
          "front": "Natural Minor Pattern",
          "back": "W-H-W-W-H-W-W. (Major scale with lowered 3, 6, 7)."
        },
        {
          "id": "music-theory-201-l11-f2",
          "front": "Harmonic Minor",
          "back": "Natural minor with a raised 7th degree. Creates a 'leading tone.'"
        },
        {
          "id": "music-theory-201-l11-f3",
          "front": "Melodic Minor (Ascending)",
          "back": "Natural minor with raised 6th and 7th degrees. Reverts to natural minor when descending."
        },
        {
          "id": "music-theory-201-l11-f4",
          "front": "Leading Tone",
          "back": "The 7th note of a scale when it's a half step below the tonic. It 'leads' your ear back home."
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-201-l11-a1",
          "type": "image",
          "title": "Scale Comparison",
          "content": "A visual chart comparing the patterns of the Major, Natural Minor, Harmonic Minor, and Melodic Minor scales starting on the same note."
        }
      ]
    },
    {
      "id": "music-theory-201-l12",
      "title": "Mastery Quiz: Intervals, Chords & Keys",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize knowledge of intervals, triads, and key signatures"
      ],
      "questions": [
        {
          "id": "music-theory-201-l12-q1",
          "text": "What interval is C to A?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Perfect 5th"
            },
            {
              "id": "b",
              "text": "Major 6th"
            },
            {
              "id": "c",
              "text": "Minor 6th"
            },
            {
              "id": "d",
              "text": "Major 7th"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Counting letter names C-D-E-F-G-A gives a 6th. Counting half steps (9) confirms it is a Major 6th."
        },
        {
          "id": "music-theory-201-l12-q2",
          "text": "Which triad types have a perfect 5th between the root and the top note?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Major and minor only"
            },
            {
              "id": "b",
              "text": "All four triad types"
            },
            {
              "id": "c",
              "text": "Major, minor, and augmented"
            },
            {
              "id": "d",
              "text": "Augmented only"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Both major and minor triads have a perfect 5th. Augmented triads have an augmented 5th, and diminished triads have a diminished 5th."
        },
        {
          "id": "music-theory-201-l12-q3",
          "text": "The key of A major has how many sharps?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Following the circle of fifths from C (0 sharps): G (1), D (2), A (3). A major has 3 sharps (F♯, C♯, G♯)."
        },
        {
          "id": "music-theory-201-l12-q4",
          "text": "E minor is the relative minor of which major key?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "C major"
            },
            {
              "id": "b",
              "text": "D major"
            },
            {
              "id": "c",
              "text": "G major"
            },
            {
              "id": "d",
              "text": "A major"
            }
          ],
          "correctOptionId": "c",
          "explanation": "To find the relative major, go UP three half steps from the minor key's root. Three half steps up from E is G."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "music-theory-201-l13",
      "title": "Ear Training Fundamentals",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Associate intervals with familiar song references",
        "Distinguish major from minor triads by ear",
        "Describe strategies for developing relative pitch"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l13-c1",
          "title": "The Song Reference Method",
          "content": "A fun way to learn intervals by ear is to connect them to songs you already know. The Minor 2nd sounds like the 'Jaws' theme. The Major 2nd is the start of 'Happy Birthday.' The Minor 3rd is 'Greensleeves.' The Major 3rd is 'When the Saints Go Marching In.' The Perfect 4th is 'Here Comes the Bride.' The Perfect 5th is 'Twinkle, Twinkle Little Star.' Using these songs as mental anchors makes it much easier to recognize intervals in any piece of music."
        },
        {
          "id": "music-theory-201-l13-c2",
          "title": "Hearing Major vs. Minor",
          "content": "Training your ear to hear the difference between major and minor chords is all about emotion. Major triads sound bright, open, and happy. Minor triads sound darker, sadder, or more serious. The only difference is one note (the 3rd), but it completely changes the mood. Practice playing a major triad and then its minor version back-to-back. Listen for that shift in feeling. With practice, you'll be able to identify them instantly."
        },
        {
          "id": "music-theory-201-l13-c3",
          "title": "Building Relative Pitch",
          "content": "Relative pitch is the skill of identifying a note by comparing it to another note you just heard. Unlike perfect pitch, anyone can develop relative pitch with practice. A great way to start is by singing intervals. Pick a random note and try to sing a perfect 5th above it. Then check yourself on an instrument. Doing these kinds of drills for just a few minutes each day will dramatically improve your ability to play by ear, sing harmonies, and understand music on a deeper level."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l13-f1",
          "front": "Relative Pitch",
          "back": "The ability to identify notes by comparing them to a reference note. This skill can be trained."
        },
        {
          "id": "music-theory-201-l13-f2",
          "front": "Perfect 4th Song Reference",
          "back": "'Here Comes the Bride' (first two notes)"
        },
        {
          "id": "music-theory-201-l13-f3",
          "front": "Major 3rd Song Reference",
          "back": "'When the Saints Go Marching In' (first two notes)"
        },
        {
          "id": "music-theory-201-l13-f4",
          "front": "Perfect 5th Song Reference",
          "back": "'Twinkle, Twinkle Little Star' (first two notes)"
        }
      ]
    },
    {
      "id": "music-theory-201-l14",
      "title": "Transposition Coaching Clinic",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Transpose a melody from one key to another by interval",
        "Identify common transposition mistakes",
        "Apply knowledge of key signatures to verify transpositions"
      ],
      "chunks": [
        {
          "id": "music-theory-201-l14-c1",
          "title": "What Is Transposition?",
          "content": "Transposition means moving a piece of music to a new key, making it higher or lower in pitch. The melody's shape, rhythm, and all the intervals between the notes stay exactly the same. For example, if we transpose 'Twinkle, Twinkle' from C major up to G major, every single note moves up by a perfect 5th. This is a vital skill for playing with different instruments or adapting a song for a singer's vocal range."
        },
        {
          "id": "music-theory-201-l14-c2",
          "title": "How to Transpose",
          "content": "Transposing is a two-step process. First, figure out the interval you need to move by (e.g., 'up a major 2nd'). Second, move every single note by that exact interval. The most common mistake is forgetting about the new key signature. The best way to do it is to first write the new key signature, then move the notes. This way, the sharps or flats are already taken care of, and you only have to worry about accidentals that were outside the original key."
        }
      ],
      "interactiveActivities": [
        {
          "id": "music-theory-201-l14-a1",
          "title": "Transpose the Melody",
          "type": "drag_and_drop",
          "prompt": "Transpose these C major notes up a perfect 5th to G major. Drag each transposed note to its position:",
          "items": [
            "G",
            "A",
            "B",
            "C",
            "D"
          ],
          "zones": [
            "C → ?",
            "D → ?",
            "E → ?",
            "F → ?",
            "G → ?"
          ]
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-201-l14-f1",
          "front": "Transposition",
          "back": "Moving every note of a piece up or down by the same interval."
        },
        {
          "id": "music-theory-201-l14-f2",
          "front": "Transposing Instrument",
          "back": "An instrument whose written notes sound as different pitches (e.g., B♭ Trumpet, F Horn)."
        },
        {
          "id": "music-theory-201-l14-f3",
          "front": "Concert Pitch",
          "back": "The actual sounding pitch of a note, as opposed to the written pitch for a transposing instrument."
        }
      ]
    },
    {
      "id": "music-theory-201-l15",
      "title": "Mastery Retest",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive understanding of intervals, chords, keys, and scales"
      ],
      "questions": [
        {
          "id": "music-theory-201-l15-q1",
          "text": "What makes the harmonic minor scale different from the natural minor?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The 3rd degree is raised"
            },
            {
              "id": "b",
              "text": "The 7th degree is raised"
            },
            {
              "id": "c",
              "text": "The 6th and 7th degrees are both raised"
            },
            {
              "id": "d",
              "text": "The 2nd degree is lowered"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The harmonic minor scale is a natural minor scale with a raised 7th scale degree to create a leading tone."
        },
        {
          "id": "music-theory-201-l15-q2",
          "text": "How many half steps are in a minor 6th?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "7"
            },
            {
              "id": "b",
              "text": "8"
            },
            {
              "id": "c",
              "text": "9"
            },
            {
              "id": "d",
              "text": "10"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A major 6th has 9 half steps, so a minor 6th is one half step smaller, with 8 half steps."
        },
        {
          "id": "music-theory-201-l15-q3",
          "text": "What chord quality is built on the 2nd degree of a major scale (the ii chord)?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Major"
            },
            {
              "id": "b",
              "text": "Minor"
            },
            {
              "id": "c",
              "text": "Diminished"
            },
            {
              "id": "d",
              "text": "Augmented"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The diatonic chord pattern for a major scale is I-ii-iii-IV-V-vi-vii°. The chord on the second degree is minor."
        },
        {
          "id": "music-theory-201-l15-q4",
          "text": "B♭ major and G minor share the same key signature because they are:",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Enharmonic equivalents"
            },
            {
              "id": "b",
              "text": "Parallel keys"
            },
            {
              "id": "c",
              "text": "Relative keys"
            },
            {
              "id": "d",
              "text": "Neighboring keys"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A major key and the minor key that shares its key signature are called relative keys."
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
      "id": "music-theory-201-l16",
      "title": "Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Demonstrate comprehensive mastery of intermediate music theory"
      ],
      "questions": [
        {
          "id": "music-theory-201-l16-q1",
          "text": "Which song opening is commonly used to remember a perfect 4th?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "'Happy Birthday'"
            },
            {
              "id": "b",
              "text": "'Here Comes the Bride'"
            },
            {
              "id": "c",
              "text": "'Jaws' theme"
            },
            {
              "id": "d",
              "text": "'Twinkle, Twinkle Little Star'"
            }
          ],
          "correctOptionId": "b",
          "explanation": "'Here Comes the Bride' begins with an ascending perfect 4th."
        },
        {
          "id": "music-theory-201-l16-q2",
          "text": "When transposing a melody up a major 2nd from C major, what is the new key?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "B♭ major"
            },
            {
              "id": "b",
              "text": "D major"
            },
            {
              "id": "c",
              "text": "E♭ major"
            },
            {
              "id": "d",
              "text": "G major"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A major 2nd (or whole step) up from C is D. The new key is D major."
        },
        {
          "id": "music-theory-201-l16-q3",
          "text": "The ascending melodic minor scale differs from the natural minor by raising which degrees?",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "3rd and 5th"
            },
            {
              "id": "b",
              "text": "6th and 7th"
            },
            {
              "id": "c",
              "text": "2nd and 3rd"
            },
            {
              "id": "d",
              "text": "4th and 5th"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The ascending melodic minor scale raises both the 6th and 7th degrees to create a smoother melodic line."
        },
        {
          "id": "music-theory-201-l16-q4",
          "text": "On the circle of fifths, moving one step counterclockwise from C gives you:",
          "skillId": "music-theory-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G major"
            },
            {
              "id": "b",
              "text": "F major"
            },
            {
              "id": "c",
              "text": "D major"
            },
            {
              "id": "d",
              "text": "B♭ major"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Moving counterclockwise on the circle means going up a 4th (or down a 5th). A 4th up from C is F."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      }
    }
  ]
};
