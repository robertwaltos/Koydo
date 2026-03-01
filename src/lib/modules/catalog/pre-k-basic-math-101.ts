import type { LearningModule } from "@/lib/modules/types";

export const PreKBasicMath101Module: LearningModule = {
  "id": "pre-k-basic-math-101",
  "title": "Pre-K Math Explorers",
  "description": "A play-based introduction to counting 1-10, shapes, patterns, sorting, comparing quantities, and simple addition for children ages 3-5.",
  "subject": "Basic Math",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "4.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Count objects from 1 to 10",
    "Recognize and name basic shapes: circle, square, triangle, rectangle",
    "Understand concepts of more, less, and equal",
    "Identify and extend simple repeating patterns",
    "Solve simple addition problems with objects up to 5",
    "Sort objects by color, shape, or size"
  ],
  "lessons": [
    {
      "id": "pre-k-basic-math-101-l01",
      "title": "Counting to 5",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Count objects from 1 to 5",
        "Match a number to a group of objects",
        "Understand that the last number counted tells how many"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l01-c1",
          "title": "Let's Count!",
          "content": "Counting means saying numbers in order while pointing to one thing at a time. Let's try: 1 apple, 2 apples, 3 apples. The last number you say tells how many there are. If you count to 3, there are 3 apples! Always point to each thing as you count — that way you do not skip any or count one twice."
        },
        {
          "id": "pre-k-basic-math-101-l01-c2",
          "title": "Numbers Have Meaning",
          "content": "Each number means a specific amount. 1 means one thing, like one nose on your face. 2 means two things, like your two hands. 3 means three things, like the wheels on a tricycle. The number 5 is special — it is the same as the fingers on one hand! Hold up your hand and count: 1, 2, 3, 4, 5."
        },
        {
          "id": "pre-k-basic-math-101-l01-c3",
          "title": "Counting Things Around You",
          "content": "You can count anything! Count the chairs at your table. Count the windows in your room. Count your toes — you have 5 on each foot! When you practice counting every day, you get better and faster. Try counting the steps when you walk up stairs."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l01-fc1",
          "front": "What is counting?",
          "back": "Saying numbers in order while pointing to one thing at a time: 1, 2, 3, 4, 5"
        },
        {
          "id": "pre-k-basic-math-101-l01-fc2",
          "front": "How do you know 'how many'?",
          "back": "The LAST number you say when counting tells you how many things there are"
        },
        {
          "id": "pre-k-basic-math-101-l01-fc3",
          "front": "What number equals the fingers on one hand?",
          "back": "5 — count them: thumb, pointer, middle, ring, pinky"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-basic-math-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l02",
      "title": "Counting to 10",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Count objects from 6 to 10",
        "Recognize that 10 fingers means two full hands",
        "Practice counting objects in everyday life"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l02-c1",
          "title": "Beyond 5",
          "content": "You already know 1 through 5 — now let's keep going! After 5 comes 6, 7, 8, 9, 10. That is 10 numbers! Hold up one hand — that is 5 fingers. Now hold up BOTH hands — count all your fingers: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Ten fingers on two hands!"
        },
        {
          "id": "pre-k-basic-math-101-l02-c2",
          "title": "What Do 6 Through 10 Look Like?",
          "content": "6 is one more than 5 — one full hand plus one extra finger. 7 is a full hand plus two fingers. 8 is a full hand plus three. 9 is a full hand plus four. And 10 is BOTH hands full! You can show any number from 1 to 10 using just your fingers."
        },
        {
          "id": "pre-k-basic-math-101-l02-c3",
          "title": "Counting Practice",
          "content": "Let's count 10 things! Count 10 steps as you walk. Count 10 claps. Count 10 crackers at snack time. The more you practice counting to 10, the easier it gets. Soon you will be counting even HIGHER — to 20 and beyond!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l02-fc1",
          "front": "What comes after 5?",
          "back": "6 — the numbers keep going: 6, 7, 8, 9, 10"
        },
        {
          "id": "pre-k-basic-math-101-l02-fc2",
          "front": "How many fingers do you have on both hands?",
          "back": "10 fingers total — 5 on each hand"
        },
        {
          "id": "pre-k-basic-math-101-l02-fc3",
          "front": "What number is one full hand plus two more fingers?",
          "back": "7 — that is 5 plus 2 more"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-basic-math-101-l02-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l03",
      "title": "Counting Activities",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Practice matching numbers to groups of objects",
        "Sort small and big numbers into groups"
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-basic-math-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Count and Match",
          "description": "Match each number to the correct group of objects.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "3",
                "right": "Three apples"
              },
              {
                "id": "p2",
                "left": "5",
                "right": "Five stars"
              },
              {
                "id": "p3",
                "left": "7",
                "right": "Seven blocks"
              },
              {
                "id": "p4",
                "left": "10",
                "right": "Ten fingers"
              }
            ]
          }
        },
        {
          "id": "pre-k-basic-math-101-l03-ia2",
          "type": "sorting_buckets",
          "title": "Small or Big Number?",
          "description": "Sort each number into the Small Numbers (1-5) bucket or the Big Numbers (6-10) bucket.",
          "estimatedMinutes": 4,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "Small Numbers (1-5)"
              },
              {
                "id": "b2",
                "label": "Big Numbers (6-10)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "2",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "8",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "4",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "10",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "1",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "6",
                "correctBucketId": "b2"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-basic-math-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l04",
      "title": "Shapes All Around Us",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Name four basic shapes: circle, square, triangle, rectangle",
        "Count the sides and corners of each shape",
        "Find shapes in everyday objects"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l04-c1",
          "title": "Meet the Shapes",
          "content": "A CIRCLE is perfectly round with no corners — like a ball, a cookie, or the sun. A SQUARE has 4 sides that are all the same length and 4 corners — like a window or a cracker. A TRIANGLE has 3 sides and 3 corners — like a slice of pizza or a roof. A RECTANGLE has 4 sides (2 long and 2 short) and 4 corners — like a door or a book."
        },
        {
          "id": "pre-k-basic-math-101-l04-c2",
          "title": "Sides and Corners",
          "content": "Sides are the straight lines that make a shape. Corners are where two sides meet — they make a point. A triangle has 3 sides and 3 corners. A square has 4 sides and 4 corners. A rectangle also has 4 sides and 4 corners. A circle has NO sides and NO corners — it just goes round and round!"
        },
        {
          "id": "pre-k-basic-math-101-l04-c3",
          "title": "Shape Hunt",
          "content": "Shapes are everywhere! The clock on the wall is a circle. Your TV screen is a rectangle. A yield sign on the road is a triangle. A floor tile might be a square. Look around right now — can you find a circle? A square? Try to find all 4 shapes before bedtime tonight!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l04-fc1",
          "front": "Circle",
          "back": "A round shape with NO sides and NO corners — like a ball or the sun"
        },
        {
          "id": "pre-k-basic-math-101-l04-fc2",
          "front": "Triangle",
          "back": "A shape with 3 sides and 3 corners — like a slice of pizza"
        },
        {
          "id": "pre-k-basic-math-101-l04-fc3",
          "front": "Square vs Rectangle",
          "back": "A square has 4 EQUAL sides. A rectangle has 2 long sides and 2 short sides. Both have 4 corners."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-basic-math-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l05",
      "title": "Counting & Shapes Checkpoint",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "pre-k-basic-math-101-l05-q1",
          "text": "How many fingers are on ONE hand?",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "10"
            },
            {
              "id": "d",
              "text": "2"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You have 5 fingers on one hand. Count them: thumb, pointer, middle, ring, pinky!"
        },
        {
          "id": "pre-k-basic-math-101-l05-q2",
          "text": "What number comes right after 7?",
          "options": [
            {
              "id": "a",
              "text": "6"
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
              "text": "5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "After 7 comes 8. The counting order is 6, 7, 8, 9, 10."
        },
        {
          "id": "pre-k-basic-math-101-l05-q3",
          "text": "Which shape has 3 sides?",
          "options": [
            {
              "id": "a",
              "text": "Triangle"
            },
            {
              "id": "b",
              "text": "Square"
            },
            {
              "id": "c",
              "text": "Circle"
            },
            {
              "id": "d",
              "text": "Rectangle"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A triangle has 3 sides and 3 corners. Tri- means three!"
        },
        {
          "id": "pre-k-basic-math-101-l05-q4",
          "text": "Which shape can ROLL because it has no corners?",
          "options": [
            {
              "id": "a",
              "text": "Circle"
            },
            {
              "id": "b",
              "text": "Square"
            },
            {
              "id": "c",
              "text": "Triangle"
            },
            {
              "id": "d",
              "text": "Rectangle"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A circle can roll because it is perfectly round with no corners to stop it!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-basic-math-101-l05-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l06",
      "title": "Patterns and Sorting",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Recognize a repeating pattern",
        "Predict what comes next in a pattern",
        "Sort objects into groups by color, size, or shape"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l06-c1",
          "title": "What Is a Pattern?",
          "content": "A pattern is something that repeats over and over in the same order. Red, blue, red, blue — that is a pattern! The next color would be RED because the pattern repeats. Clap, stomp, clap, stomp — that is a pattern too! Patterns are everywhere: stripes on a shirt, tiles on a floor, day and night."
        },
        {
          "id": "pre-k-basic-math-101-l06-c2",
          "title": "Making Patterns",
          "content": "You can make your own patterns with anything! Use crayons: red, yellow, red, yellow. Use blocks: big, small, big, small. Use sounds: loud, quiet, loud, quiet. The trick is to keep the SAME ORDER going. If your pattern is circle-square-circle-square, the next shape is always a CIRCLE."
        },
        {
          "id": "pre-k-basic-math-101-l06-c3",
          "title": "Sorting into Groups",
          "content": "Sorting means putting things together that are alike. You can sort by COLOR: all the red toys in one pile, all the blue in another. You can sort by SIZE: big things here, small things there. You can sort by SHAPE: circles in one group, squares in another. Sorting helps us organize and count!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l06-fc1",
          "front": "What is a pattern?",
          "back": "Something that repeats in the same order — like red, blue, red, blue"
        },
        {
          "id": "pre-k-basic-math-101-l06-fc2",
          "front": "What is sorting?",
          "back": "Putting things into groups that are alike — by color, size, or shape"
        },
        {
          "id": "pre-k-basic-math-101-l06-fc3",
          "front": "Red, blue, red, blue, ___ — what comes next?",
          "back": "Red! The pattern repeats: red, blue, red, blue, RED"
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l07",
      "title": "More, Less, and Equal",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Compare two groups to decide which has more or less",
        "Understand equal means the same amount",
        "Use counting to compare quantities"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l07-c1",
          "title": "What Is More?",
          "content": "MORE means a bigger amount. If you have 4 cookies and your friend has 2, you have MORE cookies because 4 is bigger than 2. To figure out which group has more, count each group and see which number is bigger!"
        },
        {
          "id": "pre-k-basic-math-101-l07-c2",
          "title": "What Is Less?",
          "content": "LESS means a smaller amount. If you have 1 crayon and your friend has 5, you have LESS. 1 is a smaller number than 5. Think of it this way — if you wish you had more, then you probably have less!"
        },
        {
          "id": "pre-k-basic-math-101-l07-c3",
          "title": "What Is Equal?",
          "content": "EQUAL means the same amount — no more and no less. If you have 3 cookies and your friend also has 3 cookies, you have an EQUAL number. That is fair! You can check by matching them up one-to-one. If nothing is left over, the groups are equal."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l07-fc1",
          "front": "More",
          "back": "A bigger amount — 5 is MORE than 2"
        },
        {
          "id": "pre-k-basic-math-101-l07-fc2",
          "front": "Less",
          "back": "A smaller amount — 1 is LESS than 4"
        },
        {
          "id": "pre-k-basic-math-101-l07-fc3",
          "front": "Equal",
          "back": "The same amount — 3 and 3 are EQUAL"
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l08",
      "title": "Simple Adding",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Understand adding means putting groups together",
        "Add small numbers by counting all objects together",
        "Use fingers to help add numbers up to 5"
      ],
      "chunks": [
        {
          "id": "pre-k-basic-math-101-l08-c1",
          "title": "Adding Means Putting Together",
          "content": "When you ADD, you put groups together to find out how many in all. If you have 2 red blocks and 1 blue block, put them together and count: 1, 2, 3. That is 3 blocks in all! Adding tells you the TOTAL when you combine groups."
        },
        {
          "id": "pre-k-basic-math-101-l08-c2",
          "title": "Use Your Fingers to Add",
          "content": "Your fingers are great for adding! To add 2 plus 3, hold up 2 fingers on one hand and 3 fingers on the other hand. Now count ALL the fingers that are up: 1, 2, 3, 4, 5. So 2 plus 3 equals 5! Try it yourself — hold up 1 finger, then 4 more. Count them all!"
        },
        {
          "id": "pre-k-basic-math-101-l08-c3",
          "title": "Adding Practice",
          "content": "Let's practice! 1 cat plus 1 cat equals 2 cats. 2 balls plus 2 balls — count them all: 1, 2, 3, 4 — that is 4 balls! 3 fish plus 1 fish — count: 1, 2, 3, 4 — that is 4 fish! The trick is to count ALL the objects together to find the total."
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-basic-math-101-l08-fc1",
          "front": "What does adding mean?",
          "back": "Putting groups together to find out how many in all"
        },
        {
          "id": "pre-k-basic-math-101-l08-fc2",
          "front": "2 plus 3 equals?",
          "back": "5 — hold up 2 fingers and 3 fingers, then count them all"
        },
        {
          "id": "pre-k-basic-math-101-l08-fc3",
          "front": "How can fingers help you add?",
          "back": "Hold up fingers for each number, then count ALL the fingers that are up"
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l09",
      "title": "Math Play Activities",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Complete a pattern by choosing the next item",
        "Sort objects by size into correct groups"
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-basic-math-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Finish the Pattern",
          "description": "Match each pattern to the item that comes next.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "left": "Red, Blue, Red, Blue, ___",
                "right": "Red"
              },
              {
                "id": "p2",
                "left": "Star, Moon, Star, Moon, ___",
                "right": "Star"
              },
              {
                "id": "p3",
                "left": "Big, Small, Big, Small, ___",
                "right": "Big"
              },
              {
                "id": "p4",
                "left": "Circle, Square, Circle, Square, ___",
                "right": "Circle"
              }
            ]
          }
        },
        {
          "id": "pre-k-basic-math-101-l09-ia2",
          "type": "sorting_buckets",
          "title": "More or Less Than 5?",
          "description": "Sort each number into the Less Than 5 bucket or the More Than 5 bucket.",
          "estimatedMinutes": 4,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "b1",
                "label": "Less Than 5"
              },
              {
                "id": "b2",
                "label": "More Than 5"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "2",
                "correctBucketId": "b1"
              },
              {
                "id": "i2",
                "label": "8",
                "correctBucketId": "b2"
              },
              {
                "id": "i3",
                "label": "3",
                "correctBucketId": "b1"
              },
              {
                "id": "i4",
                "label": "9",
                "correctBucketId": "b2"
              },
              {
                "id": "i5",
                "label": "1",
                "correctBucketId": "b1"
              },
              {
                "id": "i6",
                "label": "7",
                "correctBucketId": "b2"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "pre-k-basic-math-101-l10",
      "title": "Math Explorers Celebration Quiz",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-basic-math-101-l10-q1",
          "text": "Red, blue, red, blue, red — what comes next?",
          "options": [
            {
              "id": "a",
              "text": "Blue"
            },
            {
              "id": "b",
              "text": "Red"
            },
            {
              "id": "c",
              "text": "Green"
            },
            {
              "id": "d",
              "text": "Yellow"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The pattern is red, blue, red, blue, red — so blue comes next to continue the pattern!"
        },
        {
          "id": "pre-k-basic-math-101-l10-q2",
          "text": "You have 2 apples and get 1 more. How many apples do you have now?",
          "options": [
            {
              "id": "a",
              "text": "3"
            },
            {
              "id": "b",
              "text": "2"
            },
            {
              "id": "c",
              "text": "1"
            },
            {
              "id": "d",
              "text": "4"
            }
          ],
          "correctOptionId": "a",
          "explanation": "2 apples plus 1 more equals 3 apples. Count them: 1, 2, 3!"
        },
        {
          "id": "pre-k-basic-math-101-l10-q3",
          "text": "Which group has MORE: 2 dogs or 4 cats?",
          "options": [
            {
              "id": "a",
              "text": "The cats (4 is more than 2)"
            },
            {
              "id": "b",
              "text": "The dogs (2 is more than 4)"
            },
            {
              "id": "c",
              "text": "They are the same"
            },
            {
              "id": "d",
              "text": "You cannot tell"
            }
          ],
          "correctOptionId": "a",
          "explanation": "4 cats is more than 2 dogs. 4 is a bigger number than 2!"
        },
        {
          "id": "pre-k-basic-math-101-l10-q4",
          "text": "How many sides does a square have?",
          "options": [
            {
              "id": "a",
              "text": "3"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "0"
            },
            {
              "id": "d",
              "text": "5"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A square has 4 equal sides and 4 corners."
        },
        {
          "id": "pre-k-basic-math-101-l10-q5",
          "text": "How many fingers do you have on BOTH hands?",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "8"
            },
            {
              "id": "c",
              "text": "10"
            },
            {
              "id": "d",
              "text": "20"
            }
          ],
          "correctOptionId": "c",
          "explanation": "You have 10 fingers total — 5 on each hand. Count them all!"
        },
        {
          "id": "pre-k-basic-math-101-l10-q6",
          "text": "3 fish plus 2 fish equals how many fish?",
          "options": [
            {
              "id": "a",
              "text": "4"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "3"
            }
          ],
          "correctOptionId": "b",
          "explanation": "3 plus 2 equals 5. Hold up 3 fingers and 2 fingers, then count them all: 1, 2, 3, 4, 5!"
        }
      ]
    }
  ]
};
