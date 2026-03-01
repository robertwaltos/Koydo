import type { LearningModule } from "@/lib/modules/types";

export const Reading101Module: LearningModule = {
  "id": "reading-101",
  "title": "The Alphabet & Early Reading",
  "description": "Master alphabet recognition, letter sounds, CVC word building, rhyming families, following directions, and story comprehension for children ages 4-9.",
  "subject": "Reading",
  "tags": [
    "phonics",
    "literacy",
    "interactive",
    "curriculum"
  ],
  "minAge": 4,
  "maxAge": 9,
  "version": "4.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Recognize uppercase and lowercase letters A-Z",
    "Match common beginning sounds to letters",
    "Blend simple consonant-vowel-consonant (CVC) words",
    "Identify rhyming words and word families",
    "Follow one-step and two-step directions",
    "Identify characters and key events in a story"
  ],
  "lessons": [
    {
      "id": "reading-101-l01",
      "title": "Letters A through M",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Recognize uppercase and lowercase letters A through M",
        "Name an object that starts with each letter",
        "Describe each letter's visual shape"
      ],
      "chunks": [
        {
          "id": "reading-101-l01-c1",
          "title": "Letters A through E",
          "content": "A (uppercase) looks like a tent with a crossbar; lowercase a is a circle with a tail. B has two bumps; b has one bump on the right. C is a curve; c is the same but smaller. D has a straight back and a big belly; d has the belly on the left. E has three horizontal arms; e is a small curl. Example words: Apple, Ball, Cat, Dog, Elephant."
        },
        {
          "id": "reading-101-l01-c2",
          "title": "Letters F through I",
          "content": "F is like E with only two arms. G is C with a shelf inside. H is two tall lines with a bridge. I is a line with a hat and shoes. Example words: Fish, Goat, House, Igloo. Tip: lowercase g hangs below the line — watch for it when reading!"
        },
        {
          "id": "reading-101-l01-c3",
          "title": "Letters J through M",
          "content": "J is a candy cane curving left. K has two arms reaching from a tall line. L is a tall line with a foot. M has two mountain peaks. Example words: Jam, Kite, Lion, Moon. Now you know half the alphabet — A through M is 13 letters!"
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l01-fc1",
          "front": "What letter looks like a tent with a crossbar?",
          "back": "A — apple and ant start with A"
        },
        {
          "id": "reading-101-l01-fc2",
          "front": "How many letters are in the first half of the alphabet (A-M)?",
          "back": "13 letters"
        },
        {
          "id": "reading-101-l01-fc3",
          "front": "Which letter has two mountain peaks?",
          "back": "M — moon and monkey start with M"
        }
      ],
      "learningAids": [
        {
          "id": "reading-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "reading-101-l02",
      "title": "Letters N through Z",
      "type": "video",
      "duration": 9,
      "objectives": [
        "Recognize uppercase and lowercase letters N through Z",
        "Complete the full A-Z alphabet sequence",
        "Distinguish easily confused letter pairs (b/d, p/q)"
      ],
      "chunks": [
        {
          "id": "reading-101-l02-c1",
          "title": "Letters N through R",
          "content": "N has a slanted bridge between two tall lines. O is a perfect circle. P has a bump on top (like a flag). Q is an O with a tail — Q and U are best friends. R is P with a leg kicking out. Example words: Nut, Orange, Panda, Queen, Rabbit."
        },
        {
          "id": "reading-101-l02-c2",
          "title": "Letters S through V",
          "content": "S is a curvy snake. T is a cross with a flat top. U is a cup shape. V is two lines meeting at a point. Example words: Snake, Tree, Umbrella, Violin. Watch out: lowercase u and v can look similar — u has a curved bottom, v has a pointed bottom."
        },
        {
          "id": "reading-101-l02-c3",
          "title": "Letters W through Z",
          "content": "W is two V's side by side — the widest letter. X is two crossed lines (like a treasure map). Y is a slingshot shape. Z zigzags across-down-across. Example words: Water, X-ray, Yarn, Zebra. Tricky pairs: b faces right, d faces left. p hangs down right, q hangs down left."
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l02-fc1",
          "front": "How many total letters are in the English alphabet?",
          "back": "26 letters — A through Z"
        },
        {
          "id": "reading-101-l02-fc2",
          "front": "How do you tell b and d apart?",
          "back": "b faces right (bumps right), d faces left (bumps left). Make fists with thumbs up — left hand makes a b, right hand makes a d!"
        },
        {
          "id": "reading-101-l02-fc3",
          "front": "Which letter always has U right next to it?",
          "back": "Q — almost every Q is followed by U (queen, quiet, quiz)"
        }
      ],
      "learningAids": [
        {
          "id": "reading-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "reading-101-l03",
      "title": "Beginning Sounds & Phonics",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand the difference between letter names and letter sounds",
        "Identify the beginning sound of common words",
        "Match beginning sounds to the correct letter"
      ],
      "chunks": [
        {
          "id": "reading-101-l03-c1",
          "title": "Letter Names vs. Letter Sounds",
          "content": "Every letter has a NAME and a SOUND. The letter B is named 'bee' but its SOUND is /b/. The letter F is named 'eff' but its SOUND is /f/. When we read, we use the SOUNDS, not the names. Knowing both helps you become a strong reader!"
        },
        {
          "id": "reading-101-l03-c2",
          "title": "Consonant Sounds",
          "content": "Consonants are all the letters that are NOT vowels. B says /b/ like ball. D says /d/ like dog. F says /f/ like fish. M says /m/ like moon. S says /s/ like sun. T says /t/ like tree. Try saying each sound while feeling your mouth — some sounds use your voice (b, d, m) and some are just air (f, s, t)."
        },
        {
          "id": "reading-101-l03-c3",
          "title": "Vowel Sounds",
          "content": "The five vowels are A, E, I, O, U. Each vowel has a SHORT sound and a LONG sound. Short A: /a/ as in 'cat'. Long A: /ay/ as in 'cake'. Short E: /e/ as in 'bed'. Short I: /i/ as in 'pig'. Short O: /o/ as in 'hot'. Short U: /u/ as in 'cup'. For now, focus on the short sounds — they are the most common in beginner words!"
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l03-fc1",
          "front": "What is the difference between a letter name and a letter sound?",
          "back": "The name is what we call the letter (like 'bee' for B). The sound is what it says when reading (/b/ for B)."
        },
        {
          "id": "reading-101-l03-fc2",
          "front": "What are the five vowels?",
          "back": "A, E, I, O, U — every word needs at least one vowel!"
        },
        {
          "id": "reading-101-l03-fc3",
          "front": "What is the short sound of A?",
          "back": "/a/ as in cat, hat, and map"
        }
      ],
      "learningAids": [
        {
          "id": "reading-101-l03-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "reading-101-l04",
      "title": "Letter & Sound Activities",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Match pictures to their starting letter",
        "Sort vowels from consonants"
      ],
      "interactiveActivities": [
        {
          "id": "reading-101-l04-ia1",
          "type": "matching_pairs",
          "title": "Match Sound to Letter",
          "description": "Match each beginning sound to the correct letter.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "/b/ - ball",
                "right": "B"
              },
              {
                "id": "p2",
                "left": "/f/ - fish",
                "right": "F"
              },
              {
                "id": "p3",
                "left": "/s/ - sun",
                "right": "S"
              },
              {
                "id": "p4",
                "left": "/m/ - moon",
                "right": "M"
              },
              {
                "id": "p5",
                "left": "/t/ - tree",
                "right": "T"
              }
            ]
          }
        },
        {
          "id": "reading-101-l04-ia2",
          "type": "sorting_buckets",
          "title": "Vowel or Consonant?",
          "description": "Sort each letter into the Vowels bucket or the Consonants bucket.",
          "estimatedMinutes": 4,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "Vowels"
              },
              {
                "id": "b2",
                "label": "Consonants"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "B",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "E",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "F",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "I",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "S",
                "correctBucketId": "b2"
              },
              {
                "id": "i7",
                "label": "O",
                "correctBucketId": "b1"
              },
              {
                "id": "i8",
                "label": "T",
                "correctBucketId": "b2"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "reading-101-l04-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "reading-101-l05",
      "title": "Letters & Sounds Checkpoint",
      "type": "quiz",
      "duration": 9,
      "questions": [
        {
          "id": "reading-101-l05-q1",
          "text": "Which letter comes after C in the alphabet?",
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
              "text": "E"
            },
            {
              "id": "d",
              "text": "F"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The alphabet goes A, B, C, D — so D comes right after C."
        },
        {
          "id": "reading-101-l05-q2",
          "text": "What sound does the letter C most commonly make?",
          "options": [
            {
              "id": "a",
              "text": "/s/ like city"
            },
            {
              "id": "b",
              "text": "/k/ like cat"
            },
            {
              "id": "c",
              "text": "Both /k/ and /s/"
            },
            {
              "id": "d",
              "text": "/m/ like moon"
            }
          ],
          "correctOptionId": "c",
          "explanation": "C can say /k/ (cat, cup) or /s/ (city, circle). It makes both sounds!"
        },
        {
          "id": "reading-101-l05-q3",
          "text": "Which word starts with the same sound as 'sun'?",
          "options": [
            {
              "id": "a",
              "text": "moon"
            },
            {
              "id": "b",
              "text": "sock"
            },
            {
              "id": "c",
              "text": "rain"
            },
            {
              "id": "d",
              "text": "tree"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sun and sock both start with /s/. They share the same beginning sound!"
        },
        {
          "id": "reading-101-l05-q4",
          "text": "Which of these is a vowel?",
          "options": [
            {
              "id": "a",
              "text": "B"
            },
            {
              "id": "b",
              "text": "T"
            },
            {
              "id": "c",
              "text": "E"
            },
            {
              "id": "d",
              "text": "S"
            }
          ],
          "correctOptionId": "c",
          "explanation": "E is a vowel. The five vowels are A, E, I, O, U."
        }
      ],
      "learningAids": [
        {
          "id": "reading-101-l05-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "reading-101-l06",
      "title": "Building CVC Words",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand CVC (consonant-vowel-consonant) word structure",
        "Blend three sounds together to read a word",
        "Change one letter in a CVC word to make a new word"
      ],
      "chunks": [
        {
          "id": "reading-101-l06-c1",
          "title": "What Is a CVC Word?",
          "content": "A CVC word has three parts: a CONSONANT, then a VOWEL, then another CONSONANT. The word 'cat' is a CVC word: C (consonant) + A (vowel) + T (consonant). Other CVC words: hat, dog, sun, pig, cup. These are some of the first words you can read all by yourself!"
        },
        {
          "id": "reading-101-l06-c2",
          "title": "How to Blend Sounds",
          "content": "To read a CVC word, say each sound slowly, then push them together. For 'cat': say /k/... /a/... /t/. Now say it faster: /k/-/a/-/t/. Faster: 'cat'! This is called BLENDING. Try 'dog': /d/-/o/-/g/... dog! Try 'sun': /s/-/u/-/n/... sun!"
        },
        {
          "id": "reading-101-l06-c3",
          "title": "Swap One Letter, New Word!",
          "content": "Here is a reading superpower: change ONE letter in a CVC word and you get a completely new word! Start with 'cat'. Change the C to H and you get 'hat'. Change the C to B and you get 'bat'. Change the A to O and you get 'cot'. This is how word families work — one small change makes a new word!"
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l06-fc1",
          "front": "What does CVC stand for?",
          "back": "Consonant - Vowel - Consonant (like c-a-t or d-o-g)"
        },
        {
          "id": "reading-101-l06-fc2",
          "front": "What is blending?",
          "back": "Pushing letter sounds together to read a word: /k/-/a/-/t/ becomes 'cat'"
        },
        {
          "id": "reading-101-l06-fc3",
          "front": "If you change the C in 'cat' to H, what word do you get?",
          "back": "hat — changing one letter makes a whole new word!"
        }
      ]
    },
    {
      "id": "reading-101-l07",
      "title": "Rhyming Word Families",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand what rhyming means",
        "Identify words in the -at, -an, -op, and -ig families",
        "Use rhyming to predict new words"
      ],
      "chunks": [
        {
          "id": "reading-101-l07-c1",
          "title": "What Is Rhyming?",
          "content": "Rhyming words sound the same at the END. Cat and hat rhyme because they both end with '-at'. Dog and log rhyme because they end with '-og'. Rhyming helps you read faster because once you know one word in a family, you can read ALL the words in that family!"
        },
        {
          "id": "reading-101-l07-c2",
          "title": "The -at and -an Families",
          "content": "The -at family: cat, hat, bat, mat, sat, rat, flat. All you do is change the first letter! The -an family: can, man, van, pan, fan, ran, plan. If you can read 'cat', you can read 'hat', 'bat', and 'mat' — because the ending is the same."
        },
        {
          "id": "reading-101-l07-c3",
          "title": "The -op and -ig Families",
          "content": "The -op family: hop, mop, top, stop, pop, drop. The -ig family: pig, wig, big, dig, fig, jig. Try this: if you know 'hop', cover the H and put an M in front — now it says 'mop'! Cover the M and put a T — 'top'! Word families make reading feel like a game."
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l07-fc1",
          "front": "What does it mean when words rhyme?",
          "back": "They sound the same at the END — like cat/hat, dog/log, hop/mop"
        },
        {
          "id": "reading-101-l07-fc2",
          "front": "Name three words in the -at family",
          "back": "cat, hat, bat (also: mat, sat, rat, flat)"
        },
        {
          "id": "reading-101-l07-fc3",
          "front": "How do word families help you read?",
          "back": "If you can read one word in the family, you can read them all by changing the first letter!"
        }
      ]
    },
    {
      "id": "reading-101-l08",
      "title": "Following Directions & Story Time",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Follow one-step and two-step directions",
        "Identify the characters in a short story",
        "Retell key events from a story in order"
      ],
      "chunks": [
        {
          "id": "reading-101-l08-c1",
          "title": "Following Directions",
          "content": "A DIRECTION tells you what to do. A one-step direction has ONE action: 'Pick up the book.' A two-step direction has TWO actions: 'Pick up the book AND open it to the first page.' The trick is to listen carefully and do each step in order. Words like FIRST, THEN, and NEXT help you know the order."
        },
        {
          "id": "reading-101-l08-c2",
          "title": "Listening to Stories",
          "content": "When you listen to a story, pay attention to WHO is in it — those are the CHARACTERS. A character can be a person, an animal, or even a talking object! Also notice WHAT HAPPENS — those are the EVENTS. The events happen in order: beginning, middle, and end."
        },
        {
          "id": "reading-101-l08-c3",
          "title": "The Story Map",
          "content": "A STORY MAP helps you remember a story. It has three parts: CHARACTERS (who is in the story?), SETTING (where does it happen?), and EVENTS (what happens in order?). After reading or hearing a story, try to tell someone: who was in it, where it happened, and what happened first, next, and last."
        }
      ],
      "flashcards": [
        {
          "id": "reading-101-l08-fc1",
          "front": "What is the difference between a one-step and two-step direction?",
          "back": "One-step has ONE action (pick up the book). Two-step has TWO actions (pick up the book AND open it)."
        },
        {
          "id": "reading-101-l08-fc2",
          "front": "What are characters in a story?",
          "back": "The people, animals, or things that the story is about"
        },
        {
          "id": "reading-101-l08-fc3",
          "front": "What are the three parts of a story map?",
          "back": "Characters (who), Setting (where), and Events (what happens)"
        }
      ]
    },
    {
      "id": "reading-101-l09",
      "title": "Reading Activities",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Match rhyming word pairs",
        "Sort CVC words by their word family"
      ],
      "interactiveActivities": [
        {
          "id": "reading-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Rhyming Match",
          "description": "Match each word to its rhyming partner.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "cat",
                "right": "hat"
              },
              {
                "id": "p2",
                "left": "hop",
                "right": "mop"
              },
              {
                "id": "p3",
                "left": "pig",
                "right": "wig"
              },
              {
                "id": "p4",
                "left": "can",
                "right": "van"
              }
            ]
          }
        },
        {
          "id": "reading-101-l09-ia2",
          "type": "sorting_buckets",
          "title": "Sort by Word Family",
          "description": "Sort each word into the correct word family bucket.",
          "estimatedMinutes": 4,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "-at family"
              },
              {
                "id": "b2",
                "label": "-op family"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "cat",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "hop",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "hat",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "mop",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "bat",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "top",
                "correctBucketId": "b2"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "reading-101-l10",
      "title": "Reading Celebration Quiz",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "reading-101-l10-q1",
          "text": "Which uppercase letter matches lowercase 'm'?",
          "options": [
            {
              "id": "a",
              "text": "N"
            },
            {
              "id": "b",
              "text": "M"
            },
            {
              "id": "c",
              "text": "W"
            },
            {
              "id": "d",
              "text": "H"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lowercase m matches uppercase M. They both have those mountain-peak bumps!"
        },
        {
          "id": "reading-101-l10-q2",
          "text": "Which letters blend to make the word 'cat'?",
          "options": [
            {
              "id": "a",
              "text": "c-a-t"
            },
            {
              "id": "b",
              "text": "c-o-t"
            },
            {
              "id": "c",
              "text": "k-a-n"
            },
            {
              "id": "d",
              "text": "c-u-p"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Cat is spelled c-a-t. Blend the sounds: /k/-/a/-/t/ = cat!"
        },
        {
          "id": "reading-101-l10-q3",
          "text": "Which word rhymes with 'hop'?",
          "options": [
            {
              "id": "a",
              "text": "hat"
            },
            {
              "id": "b",
              "text": "mop"
            },
            {
              "id": "c",
              "text": "pig"
            },
            {
              "id": "d",
              "text": "sun"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hop and mop both end with -op, so they rhyme!"
        },
        {
          "id": "reading-101-l10-q4",
          "text": "What is the first sound in the word 'zebra'?",
          "options": [
            {
              "id": "a",
              "text": "/s/"
            },
            {
              "id": "b",
              "text": "/z/"
            },
            {
              "id": "c",
              "text": "/b/"
            },
            {
              "id": "d",
              "text": "/r/"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Zebra starts with /z/. The letter Z makes the /z/ sound."
        },
        {
          "id": "reading-101-l10-q5",
          "text": "What are the characters in a story?",
          "options": [
            {
              "id": "a",
              "text": "The letters of the alphabet"
            },
            {
              "id": "b",
              "text": "The people, animals, or things the story is about"
            },
            {
              "id": "c",
              "text": "The words on the page"
            },
            {
              "id": "d",
              "text": "The pictures in the book"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Characters are who the story is about — people, animals, or even talking objects!"
        },
        {
          "id": "reading-101-l10-q6",
          "text": "What does CVC stand for?",
          "options": [
            {
              "id": "a",
              "text": "Consonant - Vowel - Consonant"
            },
            {
              "id": "b",
              "text": "Color - Voice - Clap"
            },
            {
              "id": "c",
              "text": "Cat - Van - Cup"
            },
            {
              "id": "d",
              "text": "Circle - Value - Corner"
            }
          ],
          "correctOptionId": "a",
          "explanation": "CVC stands for Consonant-Vowel-Consonant. Words like cat, dog, and sun are CVC words!"
        }
      ]
    }
  ]
};
