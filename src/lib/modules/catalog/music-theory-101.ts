import type { LearningModule } from "@/lib/modules/types";

export const music_theory_101_Module: LearningModule = {
  "id": "music-theory-101",
  "title": "Music Theory Foundations",
  "description": "Learn to read music, understand rhythm, identify notes on the staff, and play basic scales. Build the vocabulary every musician needs.",
  "subject": "Music",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "music"
  ],
  "minAge": 7,
  "maxAge": 12,
  "version": "1.1.0",
  "learningObjectives": [
    "Identify the lines and spaces of the treble and bass clef",
    "Read and write note values from whole notes to eighth notes",
    "Clap and count rhythms in 4/4 and 3/4 time signatures",
    "Name and play the C major scale ascending and descending",
    "Define basic dynamic markings and tempo terms",
    "Understand the structure of a musical staff, measures, and bar lines",
    "Distinguish between whole steps and half steps",
    "Apply note-reading skills to a simple melody"
  ],
  "lessons": [
    {
      "id": "music-theory-101-l01",
      "title": "The Musical Staff",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Identify the five lines and four spaces of a staff",
        "Explain the purpose of the treble clef and bass clef",
        "Name the notes on the treble and bass clef lines and spaces"
      ],
      "chunks": [
        {
          "id": "music-theory-101-l01-c1",
          "title": "What Is a Staff?",
          "content": "In the world of music, we have a special tool called a staff that helps us write down the notes we want to play. Imagine a staff as a set of five horizontal lines that sit next to each other, like a ladder made of lines! These lines are very important because they tell us where to place our musical notes. You can put notes on the lines themselves or in the spaces that are found between them. The position of a note on the staff is very important: if a note is placed higher up on the staff, it will sound higher when we play it! But here's something interesting: just by looking at the staff, we can't tell exactly which notes we are playing. To figure that out, we need to use a special symbol called a clef. The clef is placed at the beginning of the staff, and it acts like a guide, helping us understand which notes match up with the lines and spaces. So, the staff and the clef work together to help us read and write music! Learning about the staff is the first step in becoming a great musician, and it opens up a whole new world of sounds and creativity for us to explore!"
        },
        {
          "id": "music-theory-101-l01-c2",
          "title": "The Treble Clef",
          "content": "The treble clef, also known as the G clef, is a very special musical symbol that curls around the second line of the staff. This line is important because it represents the note G. The treble clef is used for instruments and voices that play higher notes, such as the flute, violin, or a soprano singer. When you see the treble clef, it tells you that the music will be played in a higher range.\nIf you look closely at the lines of the treble clef, from the bottom to the top, they spell out a fun phrase: 'Every Good Boy Does Fine.' Each word in this phrase helps you remember the notes that are located on those lines: E, G, B, D, and F. This is a great way to memorize the order of the notes!\nAdditionally, the spaces between the lines of the treble clef spell the word 'FACE.' This is another easy way to remember the notes that are found in those spaces: F, A, C, and E. So, whenever you see the treble clef, you can think of these helpful phrases to guide you in playing and reading music. Understanding the treble clef is a key step in learning how to read music and play your favorite songs!"
        },
        {
          "id": "music-theory-101-l01-c3",
          "title": "The Bass Clef",
          "content": "The bass clef, which is also known as the F clef, is a very important symbol in music that helps us understand how to read notes for lower-pitched sounds. You can recognize the bass clef by its two dots that sit above and below the fourth line of the musical staff. These dots point to the note F, which is why we call it the F clef! This clef is used by musicians who play lower-pitched instruments, such as the cello, bass guitar, and even the left hand on the piano.\nWhen you look at the lines of the bass clef, starting from the bottom and moving to the top, you can remember the notes by using the phrase 'Good Boys Do Fine Always.' This phrase helps you recall the notes G, B, D, F, and A.\nAdditionally, the spaces between the lines in the bass clef can be remembered with the fun saying 'All Cows Eat Grass.' This helps you remember the notes A, C, E, and G that are found in those spaces. Understanding the bass clef is essential for playing music that sounds deep and rich, and it opens up a whole new world of musical possibilities!"
        },
        {
          "id": "music-theory-101-l01-c4",
          "title": "The Grand Staff",
          "content": "When we combine the treble clef and bass clef using a brace, we create something really special called the grand staff. This grand staff is the standard layout that musicians use when they play the piano. In this layout, there is a very important note known as Middle C, which sits on a small line that connects the two staves. Each note on the grand staff has its own unique spot, and learning to find these spots quickly is the first step to becoming a great music reader! As you practice, you'll start to recognize the notes more easily, and soon you'll be able to play your favorite songs with confidence. Remember, every musician started just like you, and with a little bit of time and effort, you'll be reading music and playing beautifully in no time!"
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-101-l01-f1",
          "front": "Staff",
          "back": "The five horizontal lines on which music is written"
        },
        {
          "id": "music-theory-101-l01-f2",
          "front": "Treble clef line notes (bottom to top)",
          "back": "E - G - B - D - F (Every Good Boy Does Fine)"
        },
        {
          "id": "music-theory-101-l01-f3",
          "front": "Treble clef space notes (bottom to top)",
          "back": "F - A - C - E (spells FACE)"
        },
        {
          "id": "music-theory-101-l01-f4",
          "front": "Bass clef line notes (bottom to top)",
          "back": "G - B - D - F - A (Good Boys Do Fine Always)"
        },
        {
          "id": "music-theory-101-l01-f5",
          "front": "Bass clef space notes (bottom to top)",
          "back": "A - C - E - G (All Cows Eat Grass)"
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l01-a1",
          "type": "image",
          "title": "Grand Staff Diagram",
          "content": "Labeled diagram showing treble clef, bass clef, line notes, space notes, and middle C on the grand staff."
        }
      ]
    },
    {
      "id": "music-theory-101-l02",
      "title": "Reading Notes on the Staff",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify treble and bass clef notes by name",
        "Distinguish line notes from space notes",
        "Match note positions to letter names quickly"
      ],
      "metadata": {
        "prompts": [
          "Which mnemonic helps you remember the bass clef spaces?",
          "If a note sits on the top line of the treble clef, what letter is it?",
          "How does a ledger line extend the staff?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "music-theory-101-l02-ia1",
          "type": "matching_pairs",
          "title": "Note Name Match",
          "description": "Match each staff position to its correct note name.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "First line (treble)",
                "right": "E"
              },
              {
                "id": "p2",
                "left": "Third space (treble)",
                "right": "C"
              },
              {
                "id": "p3",
                "left": "Fourth line (bass)",
                "right": "F"
              },
              {
                "id": "p4",
                "left": "Second space (bass)",
                "right": "C"
              }
            ]
          }
        },
        {
          "id": "music-theory-101-l02-ia2",
          "type": "sorting_buckets",
          "title": "Lines vs. Spaces",
          "description": "Sort each note into whether it sits on a line or in a space (treble clef).",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "line",
                "label": "Line Notes"
              },
              {
                "id": "space",
                "label": "Space Notes"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "E (bottom)",
                "correctBucketId": "line"
              },
              {
                "id": "i2",
                "label": "F",
                "correctBucketId": "space"
              },
              {
                "id": "i3",
                "label": "G",
                "correctBucketId": "line"
              },
              {
                "id": "i4",
                "label": "A",
                "correctBucketId": "space"
              },
              {
                "id": "i5",
                "label": "B",
                "correctBucketId": "line"
              },
              {
                "id": "i6",
                "label": "C",
                "correctBucketId": "space"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l02-a1",
          "type": "mnemonic",
          "title": "FACE in the Space",
          "content": "The spaces of the treble clef spell F-A-C-E from bottom to top — the word FACE."
        }
      ]
    },
    {
      "id": "music-theory-101-l03",
      "title": "Checkpoint: Staff Reading",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate ability to name treble clef notes",
        "Identify bass clef landmarks",
        "Recall staff terminology"
      ],
      "questions": [
        {
          "id": "music-theory-101-l03-q1",
          "text": "What mnemonic helps you remember the treble clef LINES from bottom to top?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "FACE"
            },
            {
              "id": "b",
              "text": "Every Good Boy Does Fine"
            },
            {
              "id": "c",
              "text": "All Cows Eat Grass"
            },
            {
              "id": "d",
              "text": "Good Boys Do Fine Always"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The treble clef lines from bottom to top are E-G-B-D-F. 'Every Good Boy Does Fine' matches those letters. FACE is for the spaces.",
          "hint": "Think about the LINES, not the spaces."
        },
        {
          "id": "music-theory-101-l03-q2",
          "text": "Which note sits in the second space of the treble clef?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "F"
            },
            {
              "id": "b",
              "text": "C"
            },
            {
              "id": "c",
              "text": "A"
            },
            {
              "id": "d",
              "text": "E"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The treble clef spaces from bottom to top are F-A-C-E. The second space is A.",
          "hint": "Spell out FACE and count to the second letter."
        },
        {
          "id": "music-theory-101-l03-q3",
          "text": "The bass clef is also called the ______ clef.",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "G clef"
            },
            {
              "id": "b",
              "text": "C clef"
            },
            {
              "id": "c",
              "text": "D clef"
            },
            {
              "id": "d",
              "text": "F clef"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The bass clef is called the F clef because its two dots surround the line for the note F.",
          "hint": "Look at where the two dots of the bass clef sit."
        },
        {
          "id": "music-theory-101-l03-q4",
          "text": "Where does Middle C appear on the grand staff?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "On the top line of the bass clef"
            },
            {
              "id": "b",
              "text": "On a ledger line between the treble and bass clefs"
            },
            {
              "id": "c",
              "text": "In the first space of the treble clef"
            },
            {
              "id": "d",
              "text": "On the bottom line of the treble clef"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Middle C sits on a short ledger line one step below the treble clef staff and one step above the bass clef staff.",
          "hint": "Middle C is between the two staves — it needs its own little line."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 1,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "music-theory-101-l04",
      "title": "Note Values and Duration",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Identify whole, half, quarter, and eighth notes by sight",
        "Explain how note values relate to each other (halving)",
        "Count beats for each note value in 4/4 time"
      ],
      "chunks": [
        {
          "id": "music-theory-101-l04-c1",
          "title": "The Whole Note",
          "content": "A whole note is a very special note in music! It looks like an open oval shape, and it doesn't have a stem like some other notes do. When we talk about music that is written in 4/4 time, which is a common way to organize music, a whole note lasts for four beats. You can think of it as the 'long breath' of music. This means that when you see a whole note, you get to hold the sound for a full four counts: 1-2-3-4. It's like taking a deep breath and letting it out slowly while you enjoy the music. A whole note is powerful because it fills up an entire measure all by itself! So, when you play or sing a whole note, you are giving the music a nice, long sound that everyone can appreciate."
        },
        {
          "id": "music-theory-101-l04-c2",
          "title": "Half Notes and Quarter Notes",
          "content": "Let's dive into the world of music notes! A half note is a special type of note that looks like an open oval shape with a stem sticking up from it. This note is important because it lasts for 2 beats, which means it takes up half the time of a whole note. Imagine you are clapping your hands: if you clap for 4 beats, a half note would take up 2 of those claps! Now, let's talk about the quarter note. This note looks like a filled-in oval with a stem, and it only lasts for 1 beat. So, if you were to clap again, you would clap once for each quarter note. In a measure of music that is counted as 4/4 time, you can fit two half notes or four quarter notes. Each time you go from a whole note to a half note or a quarter note, you are making the music move faster because you are cutting the time in half!"
        },
        {
          "id": "music-theory-101-l04-c3",
          "title": "Eighth Notes and Flags",
          "content": "An eighth note is a special kind of note that looks like a quarter note but has a little flag on its stem, making it stand out! This note is important because it lasts for half a beat. That means if you play two eighth notes in a row, they will take the same amount of time as one quarter note. When you see a group of eighth notes, you might notice that their flags can connect together to form a beam, which makes them look even more interesting! To help you count eighth notes, you can use a fun rhythm by saying '1-and-2-and-3-and-4-and.' Each number and each 'and' represents one eighth note. This counting method helps you keep a steady beat while you play your music, making it easier to stay in time with your friends or your favorite songs!"
        },
        {
          "id": "music-theory-101-l04-c4",
          "title": "The Note Value Tree",
          "content": "Let's think of note values like a family tree! At the very top, we have the whole note. This note is special because it can be divided into two half notes. If we go down another level, each half note can be split into two quarter notes, which means that one whole note equals four quarter notes. Now, if we keep going down, each quarter note can be divided into two eighth notes, so one whole note equals eight eighth notes! This means that as we move down the tree, the number of notes doubles, but each note takes less time to play. This pattern continues with sixteenth notes, where you can fit 16 notes in a measure! For now, let’s focus on learning whole notes, half notes, quarter notes, and eighth notes. Mastering these will give you a strong start in understanding music theory and how to read and play music!"
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-101-l04-f1",
          "front": "Whole note",
          "back": "An open oval with no stem; lasts 4 beats in 4/4 time"
        },
        {
          "id": "music-theory-101-l04-f2",
          "front": "Half note",
          "back": "An open oval with a stem; lasts 2 beats in 4/4 time"
        },
        {
          "id": "music-theory-101-l04-f3",
          "front": "Quarter note",
          "back": "A filled oval with a stem; lasts 1 beat in 4/4 time"
        },
        {
          "id": "music-theory-101-l04-f4",
          "front": "Eighth note",
          "back": "A filled oval with a stem and flag; lasts half a beat in 4/4 time"
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l04-a1",
          "type": "image",
          "title": "Note Value Tree",
          "content": "Diagram showing 1 whole = 2 halves = 4 quarters = 8 eighths, arranged as a branching tree."
        }
      ]
    },
    {
      "id": "music-theory-101-l05",
      "title": "Rhythm and Time Signatures",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Explain what a time signature tells the performer",
        "Count rhythms in 4/4 and 3/4 time",
        "Identify whether a measure has the correct number of beats"
      ],
      "metadata": {
        "prompts": [
          "In 4/4 time, how many quarter notes fit in one measure?",
          "What does the top number of a time signature mean?",
          "Clap this rhythm: quarter, quarter, half. How many beats total?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "music-theory-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Beat Count Sort",
          "description": "Sort each note combination into the time signature where it fills exactly one measure.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "four-four",
                "label": "4/4 Time (4 beats)"
              },
              {
                "id": "three-four",
                "label": "3/4 Time (3 beats)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "♩ ♩ ♩ ♩ (4 quarter notes)",
                "correctBucketId": "four-four"
              },
              {
                "id": "i2",
                "label": "𝅗𝅥 𝅗𝅥 (2 half notes)",
                "correctBucketId": "four-four"
              },
              {
                "id": "i3",
                "label": "♩ ♩ ♩ (3 quarter notes)",
                "correctBucketId": "three-four"
              },
              {
                "id": "i4",
                "label": "𝅗𝅥 ♩ (half + quarter)",
                "correctBucketId": "three-four"
              },
              {
                "id": "i5",
                "label": "𝅝 (1 whole note)",
                "correctBucketId": "four-four"
              },
              {
                "id": "i6",
                "label": "𝅗𝅥. (dotted half note)",
                "correctBucketId": "three-four"
              }
            ]
          }
        },
        {
          "id": "music-theory-101-l05-ia2",
          "type": "matching_pairs",
          "title": "Time Signature Meaning",
          "description": "Match each time signature element to what it tells the musician.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "Top number of time signature",
                "right": "How many beats per measure"
              },
              {
                "id": "p2",
                "left": "Bottom number of time signature",
                "right": "Which note value gets one beat"
              },
              {
                "id": "p3",
                "left": "4/4",
                "right": "Four quarter-note beats per measure"
              },
              {
                "id": "p4",
                "left": "3/4",
                "right": "Three quarter-note beats per measure"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l05-a1",
          "type": "mnemonic",
          "title": "Time Signature Decoder",
          "content": "Top number = HOW MANY beats. Bottom number = WHAT KIND of beat. 4/4 = four quarter-note beats."
        }
      ]
    },
    {
      "id": "music-theory-101-l06",
      "title": "Checkpoint: Rhythm and Note Values",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Recall note value durations",
        "Interpret time signatures",
        "Determine if a measure is complete"
      ],
      "questions": [
        {
          "id": "music-theory-101-l06-q1",
          "text": "How many beats does a half note get in 4/4 time?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 beat"
            },
            {
              "id": "b",
              "text": "2 beats"
            },
            {
              "id": "c",
              "text": "3 beats"
            },
            {
              "id": "d",
              "text": "4 beats"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A half note lasts 2 beats. Two half notes fill one measure of 4/4 time.",
          "hint": "It's called a 'half' note because it's half of a whole note."
        },
        {
          "id": "music-theory-101-l06-q2",
          "text": "In 3/4 time, which combination fills exactly one measure?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A whole note"
            },
            {
              "id": "b",
              "text": "Two half notes"
            },
            {
              "id": "c",
              "text": "A half note and a quarter note"
            },
            {
              "id": "d",
              "text": "Four quarter notes"
            }
          ],
          "correctOptionId": "c",
          "explanation": "3/4 time has 3 beats per measure. A half note (2 beats) + a quarter note (1 beat) = 3 beats exactly.",
          "hint": "Add up the beats: you need exactly 3."
        },
        {
          "id": "music-theory-101-l06-q3",
          "text": "How many eighth notes equal one quarter note?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "2"
            },
            {
              "id": "d",
              "text": "8"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Each note value divides in half: a quarter note splits into 2 eighth notes.",
          "hint": "Each step in the note value tree doubles the count."
        },
        {
          "id": "music-theory-101-l06-q4",
          "text": "What does the bottom number '4' mean in a 4/4 time signature?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "There are 4 measures"
            },
            {
              "id": "b",
              "text": "Play at 4 beats per minute"
            },
            {
              "id": "c",
              "text": "The quarter note gets one beat"
            },
            {
              "id": "d",
              "text": "The piece has 4 sections"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The bottom number indicates which note value equals one beat. '4' means the quarter note (1/4 of a whole note) gets one beat.",
          "hint": "Think of the bottom number as a fraction: 4 means 1/4 note."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "music-theory-101-l07",
      "title": "The C Major Scale",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Play the C major scale ascending and descending",
        "Identify the whole-step and half-step pattern of a major scale",
        "Recognize sharps and flats as half-step adjustments"
      ],
      "chunks": [
        {
          "id": "music-theory-101-l07-c1",
          "title": "What Is a Scale?",
          "content": "A scale is a special collection of musical notes that are arranged in a specific order. When we arrange the notes from low to high, we call this ascending, and when we arrange them from high to low, we call it descending. Scales are really important in music because they help give songs their unique 'flavor' or character, almost like how different ingredients can change the taste of a dish! One of the most popular scales is the C major scale. This scale is special because it only uses the white keys on a piano, which are the notes C, D, E, F, G, A, B, and then back to C. When you play the C major scale, it sounds bright and cheerful, making it a favorite among many musicians. That's why most beginners start by learning this scale first; it's easy to play since it doesn't have any sharps or flats."
        },
        {
          "id": "music-theory-101-l07-c2",
          "title": "Whole Steps and Half Steps",
          "content": "In music, we talk about how far apart notes are from each other, and we call these distances 'steps.' There are two main types: half steps and whole steps. A half step is the smallest distance between two notes. For example, if you play the note E and then move to the note F, or if you go from B to C, you are moving a half step. On a piano, these notes are two white keys that are right next to each other, with no black key in between them.\nA whole step is bigger than a half step because it skips one key. For instance, when you move from C to D, you are making a whole step because there is a black key in between those two notes.\nWhen we create a major scale, we follow a special pattern of steps: W-W-H-W-W-W-H, where 'W' stands for whole step and 'H' stands for half step. This pattern is what makes the major scale sound bright and happy!"
        },
        {
          "id": "music-theory-101-l07-c3",
          "title": "Sharps and Flats",
          "content": "In music, we have special symbols that help us change the sounds of notes. These symbols are called sharps and flats. A sharp, which you can recognize by the symbol (#), makes a note sound a little higher by raising it by one half step. On the other hand, a flat, which looks like this (♭), makes a note sound a bit lower by lowering it by one half step. On a piano, sharps and flats are usually the black keys. For instance, the black key between F and G is F#. The C major scale is special because it does not have any sharps or flats. However, learning about sharps and flats is really important because they will help you understand other scales and keys in music as you continue your musical journey!"
        },
        {
          "id": "music-theory-101-l07-c4",
          "title": "Playing the Scale",
          "content": "To begin playing the C major scale, first locate middle C on your piano or keyboard. Once you find it, you will start your journey through the scale by playing each white key in order, moving up to the next C. As you play each note, say the names out loud: C, D, E, F, G, A, B, and finally back to C. This helps you remember the notes better!\nWhile you play, pay special attention to the half steps in the scale. You will notice that there are no black keys between E and F, and also between B and C. These are important spots to remember.\nNow, when you want to come back down the scale, you will play the notes in reverse order: C, B, A, G, F, E, D, and back to C. Start by practicing this scale slowly. Make sure each note sounds clear and even. Once you feel more comfortable, try to play it a little faster. Mastering the C major scale is a very important step in learning music theory!"
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-101-l07-f1",
          "front": "Scale",
          "back": "A sequence of notes arranged in ascending or descending order by pitch"
        },
        {
          "id": "music-theory-101-l07-f2",
          "front": "Half step",
          "back": "The smallest interval in Western music; on a piano, the very next key (e.g., E to F)"
        },
        {
          "id": "music-theory-101-l07-f3",
          "front": "Whole step",
          "back": "An interval of two half steps; skips one key on the piano (e.g., C to D)"
        },
        {
          "id": "music-theory-101-l07-f4",
          "front": "Major scale pattern",
          "back": "Whole-Whole-Half-Whole-Whole-Whole-Half (W-W-H-W-W-W-H)"
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l07-a1",
          "type": "image",
          "title": "Piano Keyboard Map",
          "content": "Piano keyboard showing C major scale notes highlighted, with W and H markers between each pair."
        }
      ]
    },
    {
      "id": "music-theory-101-l08",
      "title": "Building Scales",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Apply the W-W-H-W-W-W-H pattern to verify a scale",
        "Distinguish half steps from whole steps",
        "Identify where sharps or flats would be needed in other keys"
      ],
      "metadata": {
        "prompts": [
          "Starting on G, apply the major scale pattern. Which note needs a sharp?",
          "Why do E-F and B-C only have a half step between them?",
          "If you start a major scale on F, which note needs a flat?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "music-theory-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Build the C Major Scale",
          "description": "Drag the notes into the correct ascending order to build a C major scale.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "t1",
                "label": "1st"
              },
              {
                "id": "t2",
                "label": "2nd"
              },
              {
                "id": "t3",
                "label": "3rd"
              },
              {
                "id": "t4",
                "label": "4th"
              },
              {
                "id": "t5",
                "label": "5th"
              },
              {
                "id": "t6",
                "label": "6th"
              },
              {
                "id": "t7",
                "label": "7th"
              },
              {
                "id": "t8",
                "label": "8th"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "C",
                "correctTargetId": "t1"
              },
              {
                "id": "d2",
                "label": "D",
                "correctTargetId": "t2"
              },
              {
                "id": "d3",
                "label": "E",
                "correctTargetId": "t3"
              },
              {
                "id": "d4",
                "label": "F",
                "correctTargetId": "t4"
              },
              {
                "id": "d5",
                "label": "G",
                "correctTargetId": "t5"
              },
              {
                "id": "d6",
                "label": "A",
                "correctTargetId": "t6"
              },
              {
                "id": "d7",
                "label": "B",
                "correctTargetId": "t7"
              },
              {
                "id": "d8",
                "label": "C (high)",
                "correctTargetId": "t8"
              }
            ]
          }
        },
        {
          "id": "music-theory-101-l08-ia2",
          "type": "sorting_buckets",
          "title": "Whole Step or Half Step?",
          "description": "Sort each pair of notes into whole step or half step.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "whole",
                "label": "Whole Step"
              },
              {
                "id": "half",
                "label": "Half Step"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "C → D",
                "correctBucketId": "whole"
              },
              {
                "id": "i2",
                "label": "E → F",
                "correctBucketId": "half"
              },
              {
                "id": "i3",
                "label": "F → G",
                "correctBucketId": "whole"
              },
              {
                "id": "i4",
                "label": "B → C",
                "correctBucketId": "half"
              },
              {
                "id": "i5",
                "label": "A → B",
                "correctBucketId": "whole"
              },
              {
                "id": "i6",
                "label": "D → E",
                "correctBucketId": "whole"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l08-a1",
          "type": "mnemonic",
          "title": "The Half-Step Trick",
          "content": "On a piano, E-F and B-C are the only white-key pairs with NO black key between them. These are natural half steps."
        }
      ]
    },
    {
      "id": "music-theory-101-l09",
      "title": "Checkpoint: Scales and Steps",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Recall the C major scale in order",
        "Apply the major scale step pattern",
        "Identify sharps and flats"
      ],
      "questions": [
        {
          "id": "music-theory-101-l09-q1",
          "text": "What is the correct order of the C major scale?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "C-D-E-F-G-A-B-C"
            },
            {
              "id": "b",
              "text": "C-D-F-E-G-A-B-C"
            },
            {
              "id": "c",
              "text": "C-E-G-B-D-F-A-C"
            },
            {
              "id": "d",
              "text": "C-D-E-F#-G-A-B-C"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The C major scale uses all white keys in order: C-D-E-F-G-A-B-C. No sharps or flats.",
          "hint": "C major has no sharps or flats — just the natural letters in order."
        },
        {
          "id": "music-theory-101-l09-q2",
          "text": "What is the whole/half step pattern of a major scale?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "H-W-H-W-H-W-H"
            },
            {
              "id": "b",
              "text": "W-W-W-H-W-W-H"
            },
            {
              "id": "c",
              "text": "W-W-H-W-W-W-H"
            },
            {
              "id": "d",
              "text": "W-H-W-W-H-W-W"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Every major scale follows Whole-Whole-Half-Whole-Whole-Whole-Half. In C major, the half steps fall between E-F and B-C.",
          "hint": "The half steps come after the 3rd and 7th notes."
        },
        {
          "id": "music-theory-101-l09-q3",
          "text": "A sharp (#) does what to a note?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lowers it by one half step"
            },
            {
              "id": "b",
              "text": "Makes it louder"
            },
            {
              "id": "c",
              "text": "Raises it by one half step"
            },
            {
              "id": "d",
              "text": "Makes it last longer"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A sharp raises a note by one half step. On a piano, this usually means moving to the next black key to the right.",
          "hint": "Sharp means higher, flat means lower."
        },
        {
          "id": "music-theory-101-l09-q4",
          "text": "Which two pairs of white keys on a piano are only a half step apart?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "C-D and F-G"
            },
            {
              "id": "b",
              "text": "E-F and B-C"
            },
            {
              "id": "c",
              "text": "A-B and D-E"
            },
            {
              "id": "d",
              "text": "G-A and C-D"
            }
          ],
          "correctOptionId": "b",
          "explanation": "E-F and B-C have no black key between them, making them natural half steps. All other adjacent white keys have a black key in between (whole step).",
          "hint": "Look for the spots on a piano with no black key between two white keys."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "music-theory-101-l10",
      "title": "Dynamics, Tempo, and Expression",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define piano, forte, crescendo, and decrescendo",
        "Identify common tempo markings (Allegro, Andante, Adagio)",
        "Understand how dynamics and tempo shape a musical performance"
      ],
      "chunks": [
        {
          "id": "music-theory-101-l10-c1",
          "title": "What Are Dynamics?",
          "content": "Dynamics in music are like the volume control on your favorite music player. They help musicians understand how loud or soft to play a piece of music, making it more expressive and interesting. In Italian, the word 'piano' means soft, while 'forte' means loud. There are also other levels of sound: 'pianissimo' (pp) means very soft, like a whisper; 'mezzo-piano' (mp) means moderately soft; 'mezzo-forte' (mf) means moderately loud; and 'fortissimo' (ff) means very loud, like a cheering crowd. You will often see these special markings written below the staff in sheet music. They guide musicians on how to express the feelings and emotions of the music, helping to tell a story through sound."
        },
        {
          "id": "music-theory-101-l10-c2",
          "title": "Crescendo and Decrescendo",
          "content": "When you see a crescendo in music, it means you should gradually play louder, just like when you get really excited and your voice starts to rise! This is often shown with a special symbol that looks like a hairpin opening to the right. On the flip side, a decrescendo or diminuendo means to gradually get softer. This is represented by a hairpin that opens to the left. Think about when a story is coming to a gentle end, and the music fades away softly. These changes in volume are super important because they help create feelings in music. They can build excitement during a thrilling moment or bring a sense of calmness at the end of a song."
        },
        {
          "id": "music-theory-101-l10-c3",
          "title": "Tempo Markings",
          "content": "Tempo is all about how fast or slow the music is played. There are some fun Italian words that musicians use to describe different speeds. For example, 'Adagio' means slow and graceful. 'Andante' means at a walking pace, which is nice and steady. 'Moderato' means a moderate speed, not too fast and not too slow. 'Allegro' means fast and lively, like when you're excited and running around! Finally, 'Presto' means very fast, like a cheetah sprinting! Tempo is measured in beats per minute (BPM), which tells us how many beats happen in one minute. Understanding tempo is important because it helps you feel the rhythm and energy of the music."
        },
        {
          "id": "music-theory-101-l10-c4",
          "title": "Putting Expression Together",
          "content": "When you come across a piece of music that says 'Allegro, f', it means you should play it quickly and loudly. This creates a lively and powerful sound that can make you feel excited! On the other hand, if you see 'Adagio, p', you should play it slowly and softly. This gives the music a gentle and thoughtful feeling. Composers, the people who write music, use these terms—dynamics and tempo—to help you understand how the music should sound and feel. It's like they are sharing their emotions with you through the notes! Learning to read these special markings is like discovering a secret code that helps you unlock the feelings hidden in the music."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-101-l10-f1",
          "front": "Piano (p)",
          "back": "Play softly"
        },
        {
          "id": "music-theory-101-l10-f2",
          "front": "Forte (f)",
          "back": "Play loudly"
        },
        {
          "id": "music-theory-101-l10-f3",
          "front": "Crescendo",
          "back": "Gradually get louder"
        },
        {
          "id": "music-theory-101-l10-f4",
          "front": "Decrescendo",
          "back": "Gradually get softer"
        },
        {
          "id": "music-theory-101-l10-f5",
          "front": "Allegro",
          "back": "Fast and lively tempo"
        },
        {
          "id": "music-theory-101-l10-f6",
          "front": "Andante",
          "back": "A walking pace tempo"
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l10-a1",
          "type": "image",
          "title": "Dynamic Markings Chart",
          "content": "Chart showing pp → p → mp → mf → f → ff from softest to loudest, with crescendo/decrescendo hairpins."
        }
      ]
    },
    {
      "id": "music-theory-101-l11",
      "title": "Express Yourself!",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify dynamic markings from softest to loudest",
        "Match tempo terms to their correct speed",
        "Connect expression markings to the mood of the music"
      ],
      "metadata": {
        "prompts": [
          "Which is louder, 'p' or 'mf'?",
          "If a song is sad, would it more likely be 'Adagio' or 'Presto'?",
          "What does a crescendo symbol look like?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "music-theory-101-l11-ia1",
          "type": "drag_and_drop",
          "title": "Order the Dynamic Markings",
          "description": "Drag the dynamic markings from softest to loudest.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "t1",
                "label": "Softest"
              },
              {
                "id": "t2",
                "label": "Soft"
              },
              {
                "id": "t3",
                "label": "Medium-Soft"
              },
              {
                "id": "t4",
                "label": "Medium-Loud"
              },
              {
                "id": "t5",
                "label": "Loud"
              },
              {
                "id": "t6",
                "label": "Loudest"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "pp (pianissimo)",
                "correctTargetId": "t1"
              },
              {
                "id": "d2",
                "label": "p (piano)",
                "correctTargetId": "t2"
              },
              {
                "id": "d3",
                "label": "mp (mezzo-piano)",
                "correctTargetId": "t3"
              },
              {
                "id": "d4",
                "label": "mf (mezzo-forte)",
                "correctTargetId": "t4"
              },
              {
                "id": "d5",
                "label": "f (forte)",
                "correctTargetId": "t5"
              },
              {
                "id": "d6",
                "label": "ff (fortissimo)",
                "correctTargetId": "t6"
              }
            ]
          }
        },
        {
          "id": "music-theory-101-l11-ia2",
          "type": "matching_pairs",
          "title": "Tempo and Mood Match",
          "description": "Match each tempo marking to the mood it creates.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "Adagio",
                "right": "Slow, graceful, calm"
              },
              {
                "id": "p2",
                "left": "Andante",
                "right": "Walking pace, relaxed"
              },
              {
                "id": "p3",
                "left": "Allegro",
                "right": "Fast, lively, energetic"
              },
              {
                "id": "p4",
                "left": "Presto",
                "right": "Very fast, exciting"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l11-a1",
          "type": "image",
          "title": "Tempo Spectrum",
          "content": "A visual spectrum from slow to fast, placing Adagio, Andante, Moderato, Allegro, and Presto along the line."
        }
      ]
    },
    {
      "id": "music-theory-101-l12",
      "title": "Checkpoint: Dynamics and Expression",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Recall the meaning of dynamic markings",
        "Interpret tempo terms",
        "Understand symbols for changing volume"
      ],
      "questions": [
        {
          "id": "music-theory-101-l12-q1",
          "text": "Which tempo marking means 'walking pace'?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Presto"
            },
            {
              "id": "b",
              "text": "Allegro"
            },
            {
              "id": "c",
              "text": "Adagio"
            },
            {
              "id": "d",
              "text": "Andante"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Andante comes from the Italian word for 'walking.' It's a moderate, comfortable speed.",
          "hint": "Think of the Italian word for 'to walk' — andare."
        },
        {
          "id": "music-theory-101-l12-q2",
          "text": "What does the dynamic marking 'p' stand for?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Presto (fast)"
            },
            {
              "id": "b",
              "text": "Piano (soft)"
            },
            {
              "id": "c",
              "text": "Pause"
            },
            {
              "id": "d",
              "text": "Poco (a little)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The letter 'p' is the abbreviation for 'piano', the Italian word for soft.",
          "hint": "The opposite of 'f' for forte (loud)."
        },
        {
          "id": "music-theory-101-l12-q3",
          "text": "A crescendo means to:",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gradually get softer"
            },
            {
              "id": "b",
              "text": "Gradually get faster"
            },
            {
              "id": "c",
              "text": "Gradually get louder"
            },
            {
              "id": "d",
              "text": "Play the note sharply"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A crescendo tells the musician to increase the volume over time. Its symbol looks like a hairpin opening to the right.",
          "hint": "Think of a sound growing bigger and bigger."
        },
        {
          "id": "music-theory-101-l12-q4",
          "text": "Which of these dynamic markings is the LOUDEST?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "mp (mezzo-piano)"
            },
            {
              "id": "b",
              "text": "p (piano)"
            },
            {
              "id": "c",
              "text": "f (forte)"
            },
            {
              "id": "d",
              "text": "mf (mezzo-forte)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Forte (f) means loud. Mezzo-forte (mf) is moderately loud, while piano (p) and mezzo-piano (mp) are soft and moderately soft.",
          "hint": "The letter 'f' stands for forte, which means loud in Italian."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 8,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    },
    {
      "id": "music-theory-101-l13",
      "title": "Applied Challenge: Read a Melody",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Apply staff reading, rhythm, and expression to a short melody",
        "Identify note names, durations, and dynamic markings in context",
        "Demonstrate integrated understanding"
      ],
      "metadata": {
        "prompts": [
          "Look at this melody. What is the first note and how long does it last?",
          "Where does the crescendo begin?",
          "Can you clap the rhythm before naming the notes?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "music-theory-101-l13-ia1",
          "type": "fill_in_the_blanks",
          "title": "Analyze 'Twinkle, Twinkle'",
          "description": "Look at the first line of 'Twinkle, Twinkle, Little Star' and fill in the blanks about the music.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "text": "The melody starts on the note [blank1]. The first two notes are both [blank2] notes. The time signature is [blank3]. The last note in the phrase is a [blank4] note, which gets two beats.",
            "blanks": [
              {
                "id": "blank1",
                "correctAnswers": [
                  "C"
                ]
              },
              {
                "id": "blank2",
                "correctAnswers": [
                  "quarter"
                ]
              },
              {
                "id": "blank3",
                "correctAnswers": [
                  "4/4"
                ]
              },
              {
                "id": "blank4",
                "correctAnswers": [
                  "half"
                ]
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l13-a1",
          "type": "image",
          "title": "Melody for Analysis",
          "content": "A simple musical score showing the first phrase of 'Twinkle, Twinkle, Little Star' in C major: C-C-G-G-A-A-G. The first six notes are quarter notes and the last G is a half note. The time signature is 4/4."
        }
      ]
    },
    {
      "id": "music-theory-101-l14",
      "title": "Scenario Lab: Music in Everyday Life",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Connect music theory concepts to real-world listening",
        "Identify musical elements in familiar songs",
        "Appreciate how theory knowledge enhances enjoyment of music"
      ],
      "chunks": [
        {
          "id": "music-theory-101-l14-c1",
          "title": "Hearing the Beat",
          "content": "The next time you listen to your favorite song, try tapping your foot or clapping your hands along with the beat! Most pop and rock songs are in 4/4 time. This means that you can count along with the music by saying '1-2-3-4' as you tap or clap. If you hear a waltz, it will be in 3/4 time, so you can count '1-2-3' instead! The first beat, beat 1, is usually the strongest. You might notice that this strong beat often lines up with the sound of the kick drum. By tapping along and counting, you're practicing your understanding of time signatures in a really fun way!"
        },
        {
          "id": "music-theory-101-l14-c2",
          "title": "Spotting Dynamics",
          "content": "When you listen to a song, pay attention to how it changes. At the beginning, the verse might be soft and gentle ('piano'). Then, when the chorus comes in, it might be much louder ('forte'). This shift in volume adds excitement and energy to the music! Think about how movie soundtracks use these changes. During a suspenseful moment, you might hear quiet strings, and then suddenly, the music gets really loud for a jump scare! Composers use different volumes to help you feel what the characters are experiencing in the story."
        },
        {
          "id": "music-theory-101-l14-c3",
          "title": "Recognizing Scales",
          "content": "Have you ever listened to a song and felt really happy, while another song made you feel a little sad? This happens because of scales! Happy-sounding songs usually use major scales, which are bright and cheerful, like the 'Do-Re-Mi' scale. Spooky or sad melodies often use minor scales, which can sound mysterious. Think of scales like the colors in a painter's palette; musicians use scales to create different moods in their music. So next time you hear a song, pay attention to how it makes you feel and see if you can guess the scale!"
        },
        {
          "id": "music-theory-101-l14-c4",
          "title": "Your Music Theory Toolkit",
          "content": "Congratulations, young musician! You now have a fantastic music theory toolkit. This includes reading the staff, understanding note values, recognizing time signatures, identifying scales, and knowing about dynamics and tempo. These are the building blocks of every piece of music you hear. As you continue your musical journey, you can learn about different scales, chords, and even try writing your own short melodies! Music theory is like a special language that helps you understand and express yourself through music. The more you practice, the more fluent you will become."
        }
      ],
      "flashcards": [
        {
          "id": "music-theory-101-l14-f1",
          "front": "Time signature of most pop songs",
          "back": "4/4 (also called 'common time')"
        },
        {
          "id": "music-theory-101-l14-f2",
          "front": "Time signature of a waltz",
          "back": "3/4 (three quarter-note beats per measure)"
        },
        {
          "id": "music-theory-101-l14-f3",
          "front": "Major scale sound quality",
          "back": "Bright, happy, uplifting"
        },
        {
          "id": "music-theory-101-l14-f4",
          "front": "Minor scale sound quality",
          "back": "Dark, sad, mysterious"
        }
      ],
      "learningAids": [
        {
          "id": "music-theory-101-l14-a1",
          "type": "practice",
          "title": "Listening Challenge",
          "content": "Pick 3 songs you like. For each, identify: (1) Is it in 4/4 or 3/4? (2) Does it have dynamic changes? (3) Does it sound major or minor?"
        }
      ]
    },
    {
      "id": "music-theory-101-l15",
      "title": "Mastery Quiz: Music Theory Foundations",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Achieve mastery across all module topics",
        "Demonstrate readiness for intermediate music theory"
      ],
      "questions": [
        {
          "id": "music-theory-101-l15-q1",
          "text": "What does 'mezzo-forte' (mf) mean?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Very soft"
            },
            {
              "id": "b",
              "text": "Moderately loud"
            },
            {
              "id": "c",
              "text": "Very loud"
            },
            {
              "id": "d",
              "text": "Moderately soft"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mezzo means 'medium' or 'half.' Mezzo-forte = moderately loud, sitting between piano and forte.",
          "hint": "'Mezzo' means medium. 'Forte' means loud."
        },
        {
          "id": "music-theory-101-l15-q2",
          "text": "In the treble clef, the note on the third line from the bottom is:",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "B"
            },
            {
              "id": "b",
              "text": "D"
            },
            {
              "id": "c",
              "text": "F"
            },
            {
              "id": "d",
              "text": "A"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Treble clef lines bottom to top: E-G-B-D-F. The third line is B.",
          "hint": "Every Good Boy Does Fine — what's the third word?"
        },
        {
          "id": "music-theory-101-l15-q3",
          "text": "A measure in 3/4 time could contain:",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "One whole note"
            },
            {
              "id": "b",
              "text": "Three half notes"
            },
            {
              "id": "c",
              "text": "Six eighth notes"
            },
            {
              "id": "d",
              "text": "Two whole notes"
            }
          ],
          "correctOptionId": "c",
          "explanation": "3/4 has 3 beats. Six eighth notes = 3 beats (each eighth note = 0.5 beats, 6 × 0.5 = 3). A whole note is 4 beats (too many).",
          "hint": "Add up the beats and check if they equal exactly 3."
        },
        {
          "id": "music-theory-101-l15-q4",
          "text": "What makes the C major scale unique compared to other major scales?",
          "skillId": "music-theory-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It uses only black keys"
            },
            {
              "id": "b",
              "text": "It has no sharps or flats"
            },
            {
              "id": "c",
              "text": "It starts on the lowest piano key"
            },
            {
              "id": "d",
              "text": "It has a different step pattern"
            }
          ],
          "correctOptionId": "b",
          "explanation": "C major is the only major scale that uses all natural notes (white keys only). Every other major scale requires at least one sharp or flat.",
          "hint": "Think about what keys you press on a piano for C major."
        }
      ],
      "quizBlueprint": {
        "frequency": "end_of_module",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 1,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "masteryThreshold": 0.75
      }
    }
  ]
};
