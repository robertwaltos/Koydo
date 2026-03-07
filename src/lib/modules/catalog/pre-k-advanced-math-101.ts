import type { LearningModule } from "@/lib/modules/types";

export const pre_k_advanced_math_101_Module: LearningModule = {
  "id": "pre-k-advanced-math-101",
  "title": "Pre-K Math Thinking Adventures",
  "description": "Build on counting basics with shapes, patterns, simple addition and subtraction, measurement, and sorting for ages 3-5.",
  "subject": "Advanced Math",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive",
    "math",
    "patterns",
    "shapes",
    "counting"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "hi",
    "zh"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Count up to 20 objects and recognize numerals 1-20.",
    "Identify and name basic 2D shapes: circle, square, triangle, rectangle, and oval.",
    "Recognize, copy, and extend simple repeating patterns (AB, ABB, ABC).",
    "Solve simple addition and subtraction problems within 5 using objects or fingers.",
    "Compare objects using measurement words like bigger, smaller, taller, and shorter."
  ],
  "skills": [
    {
      "id": "counting-to-20",
      "description": "Counting objects and recognizing numerals up to 20."
    },
    {
      "id": "shape-identification",
      "description": "Identifying and naming basic 2D shapes."
    },
    {
      "id": "pattern-recognition",
      "description": "Recognizing and extending simple repeating patterns."
    },
    {
      "id": "simple-addition",
      "description": "Solving addition problems within 5."
    },
    {
      "id": "simple-subtraction",
      "description": "Solving subtraction problems within 5."
    },
    {
      "id": "comparative-measurement",
      "description": "Comparing objects by size, height, and length."
    }
  ],
  "lessons": [
    {
      "id": "pre-k-advanced-math-101-l01",
      "title": "Counting to 20",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l01-c1",
          "title": "Numbers 1-10 Review",
          "content": "Hi friend! You are already a counting star! Let's warm up our math brains by counting to 10. Hold up all ten of your fingers with me. (Visual: Animated hands pop up, wiggling ten fingers). One, two, three... all the way to ten! Great job! Now, what comes after 10? Let's find out!"
        },
        {
          "id": "pre-k-advanced-math-101-l01-c2",
          "title": "The Teens: 11-19",
          "content": "After 10, we get to the 'teen' numbers! They are special because they all have a '1' at the beginning. Let's meet them: 11, 12, 13... all the way to 19! (Visual: Numbers 11-19 appear one by one, each with a group of 10 blocks and some extra blocks next to it). Thirteen is like one group of ten, and three extra ones. Let's count the blocks for thirteen together!"
        },
        {
          "id": "pre-k-advanced-math-101-l01-c3",
          "title": "Hooray for 20!",
          "content": "You've counted all the way to 19! What's next? It's the big twenty! (Visual: The number 20 appears with a burst of confetti). Twenty is two whole groups of ten. Imagine two full crayon boxes! (Visual: Two crayon boxes with 10 crayons each are shown). Let's practice counting things around you. How many steps to the door? Let's count them!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l01-fc1",
          "front": "How many fingers do you have in all?",
          "back": "10 fingers!"
        },
        {
          "id": "pre-k-advanced-math-101-l01-fc2",
          "front": "What number comes after 19?",
          "back": "20! (Two groups of 10)"
        },
        {
          "id": "pre-k-advanced-math-101-l01-fc3",
          "front": "What does the number 14 mean?",
          "back": "One group of 10, and 4 extra ones."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l01-a1",
          "type": "image",
          "title": "Number Line 1-20",
          "content": "A colorful, friendly number line from 1 to 20, with the numbers 10 and 20 highlighted."
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l02",
      "title": "Shapes All Around",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l02-c1",
          "title": "Circles and Ovals",
          "content": "Let's go on a shape adventure! First up are round shapes. A circle is perfectly round, with no corners at all, like a ball or a clock. (Visual: A ball rolls across the screen, then transforms into a clock). An oval is like a circle that got stretched a little, like an egg! (Visual: A circle is stretched into an oval, which then becomes an egg)."
        },
        {
          "id": "pre-k-advanced-math-101-l02-c2",
          "title": "Squares and Rectangles",
          "content": "Now for shapes with corners! A square has four sides that are all the exact same size, and four corners. (Visual: A square is drawn, with each side lighting up to show they are equal). A rectangle also has four sides and four corners, but two sides are long and two are short, like a door! (Visual: A rectangle is drawn, with the long sides and short sides highlighted in different colors)."
        },
        {
          "id": "pre-k-advanced-math-101-l02-c3",
          "title": "Terrific Triangles",
          "content": "Ready for one more? Let's talk about triangles! 'Tri' means three. A triangle has three sides and three corners. (Visual: A triangle is drawn, and its 3 sides and 3 corners are numbered 1, 2, 3). A slice of pizza or the roof of a house can be a triangle! Can you find a triangle near you?"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l02-fc1",
          "front": "How many sides does a triangle have?",
          "back": "3 sides and 3 corners."
        },
        {
          "id": "pre-k-advanced-math-101-l02-fc2",
          "front": "What's the difference between a square and a rectangle?",
          "back": "A square has 4 equal sides. A rectangle has 2 long sides and 2 short sides."
        },
        {
          "id": "pre-k-advanced-math-101-l02-fc3",
          "front": "How many corners does a circle have?",
          "back": "Zero! It's perfectly round."
        },
        {
          "id": "pre-k-advanced-math-101-l02-fc4",
          "front": "What shape is an egg?",
          "back": "An oval."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l02-a1",
          "type": "image",
          "title": "Shape Chart",
          "content": "A friendly chart showing a circle, oval, square, rectangle, and triangle, each labeled with its name and number of sides."
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l03",
      "title": "Shape Hunt",
      "type": "interactive",
      "duration": 10,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l03-c1",
          "title": "Let's Sort Shapes!",
          "content": "You are a shape expert! Now it's time for a game. We are going to sort some fun pictures into buckets based on their shape. Look at each picture, count the sides, and drag it to the right bucket. Are you ready? Let's go!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-advanced-math-101-l03-ia1",
          "type": "sorting_buckets",
          "title": "Sort by Number of Sides",
          "description": "Drag each shape into the right bucket by counting its sides.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "zero",
                "label": "0 Sides (Round)"
              },
              {
                "id": "three",
                "label": "3 Sides"
              },
              {
                "id": "four",
                "label": "4 Sides"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Circle ⭕",
                "correctBucketId": "zero"
              },
              {
                "id": "i2",
                "label": "Triangle 🔺",
                "correctBucketId": "three"
              },
              {
                "id": "i3",
                "label": "Square ⬜",
                "correctBucketId": "four"
              },
              {
                "id": "i4",
                "label": "Oval 🥚",
                "correctBucketId": "zero"
              },
              {
                "id": "i5",
                "label": "Rectangle 📋",
                "correctBucketId": "four"
              },
              {
                "id": "i6",
                "label": "Pizza slice 🍕",
                "correctBucketId": "three"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l03-a1",
          "type": "practice",
          "title": "Shape Scavenger Hunt",
          "content": "Let's be shape detectives! Walk around your home and find one circle, one rectangle, and one triangle. Can you draw them?"
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l04",
      "title": "Pattern Power",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l04-c1",
          "title": "What Is a Pattern?",
          "content": "Have you ever noticed something that repeats over and over again? That's a pattern! Like when we sing a song: verse, chorus, verse, chorus. Or when we see stripes on a shirt: red, blue, red, blue. (Visual: An animated shirt with red and blue stripes appears). Patterns have a rule, and once you figure it out, you can guess what comes next!"
        },
        {
          "id": "pre-k-advanced-math-101-l04-c2",
          "title": "AB, ABB, and ABC Patterns",
          "content": "Let's learn some pattern rules! An AB pattern is simple: one thing, then another. Like clap, stomp, clap, stomp. (Visual: Animated hands clap, then a foot stomps, repeating). An ABB pattern has one of the first thing and two of the second: star, heart, heart, star, heart, heart. (Visual: A star appears, then two hearts, repeating). And an ABC pattern has three different things: circle, square, triangle, circle, square, triangle. (Visual: The shapes appear in sequence). What comes next?"
        },
        {
          "id": "pre-k-advanced-math-101-l04-c3",
          "title": "Patterns in Our World",
          "content": "Patterns are everywhere! Look at a zebra's stripes—that's a pattern! (Visual: A friendly zebra walks by). The petals on a flower can make a pattern. Even our days have a pattern: morning, afternoon, night, and then it starts again! When you spot a pattern, your math brain is getting a super workout!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l04-fc1",
          "front": "What is a pattern?",
          "back": "Something that repeats over and over again."
        },
        {
          "id": "pre-k-advanced-math-101-l04-fc2",
          "front": "In an AB pattern: circle, square, circle, square... what comes next?",
          "back": "A circle!"
        },
        {
          "id": "pre-k-advanced-math-101-l04-fc3",
          "front": "In an ABB pattern: star, heart, heart, star, heart, heart... what comes next?",
          "back": "A star!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l04-a1",
          "type": "image",
          "title": "Pattern Strips",
          "content": "Three colorful strips showing examples of patterns: AB (red-blue), ABB (star-heart-heart), and ABC (circle-square-triangle)."
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l05",
      "title": "Checkpoint: Shapes and Patterns",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-advanced-math-101-l05-q1",
          "text": "How many sides does a rectangle have?",
          "skillId": "shape-identification",
          "options": [
            {
              "id": "a",
              "text": "4"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "0"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A rectangle has 4 sides—two long ones and two short ones—and 4 corners."
        },
        {
          "id": "pre-k-advanced-math-101-l05-q2",
          "text": "Red, blue, red, blue, red, ___? What comes next?",
          "skillId": "pattern-recognition",
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
            }
          ],
          "correctOptionId": "a",
          "explanation": "This is an AB pattern. The pattern is red, then blue. After red comes blue!"
        },
        {
          "id": "pre-k-advanced-math-101-l05-q3",
          "text": "What number comes after 19?",
          "skillId": "counting-to-20",
          "options": [
            {
              "id": "a",
              "text": "20"
            },
            {
              "id": "b",
              "text": "18"
            },
            {
              "id": "c",
              "text": "21"
            }
          ],
          "correctOptionId": "a",
          "explanation": "After 19 comes 20! That's two groups of ten!"
        },
        {
          "id": "pre-k-advanced-math-101-l05-q4",
          "text": "Which shape is perfectly round with zero corners?",
          "skillId": "shape-identification",
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
            }
          ],
          "correctOptionId": "a",
          "explanation": "A circle is perfectly round with no straight sides and no corners."
        }
      ],
      "quizBlueprint": {
        "frequency": "checkpoint",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
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
          "easy": 3,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      }
    },
    {
      "id": "pre-k-advanced-math-101-l06",
      "title": "Adding with Objects",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l06-c1",
          "title": "What Is Adding?",
          "content": "Let's learn about adding! Adding is when we put groups together to find out how many there are in all. (Visual: A basket with 2 apples is shown). If you have 2 apples, and I give you 1 more... (Visual: Another apple flies into the basket). Now how many do you have? Let's count: one, two, three! You have 3 apples! 2 plus 1 equals 3."
        },
        {
          "id": "pre-k-advanced-math-101-l06-c2",
          "title": "Adding with Fingers",
          "content": "You have amazing adding tools right on your hands—your fingers! Let's try it. Hold up 3 fingers on one hand. (Visual: An animated hand shows 3 fingers). Now, hold up 2 fingers on your other hand. (Visual: Another hand shows 2 fingers). How many fingers are up altogether? Let's count them all: 1, 2, 3, 4, 5! So, 3 plus 2 equals 5! You can also use blocks or crayons to help you add."
        },
        {
          "id": "pre-k-advanced-math-101-l06-c3",
          "title": "Adding Stories",
          "content": "Math stories are so much fun! Listen to this one: One little frog sat on a log. (Visual: 1 frog on a log). Two more frogs hopped over to join him. (Visual: 2 more frogs hop onto the log). How many frogs are on the log in all? Let's count! 1... 2... 3! One plus two equals three frogs! When you hear words like 'more' or 'in all,' it's a clue to add!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l06-fc1",
          "front": "What does the plus sign (+) mean?",
          "back": "To put things together, or add."
        },
        {
          "id": "pre-k-advanced-math-101-l06-fc2",
          "front": "2 + 3 = ?",
          "back": "5! Hold up 2 fingers and 3 fingers, then count them all."
        },
        {
          "id": "pre-k-advanced-math-101-l06-fc3",
          "front": "What words are clues that you need to add?",
          "back": "'More,' 'in all,' 'altogether,' and 'plus'."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l06-a1",
          "type": "image",
          "title": "Five Frame",
          "content": "A simple grid with 5 spaces. An animation shows 2 red dots and 3 blue dots filling the frame to make 5."
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l07",
      "title": "Taking Away",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l07-c1",
          "title": "What Is Subtracting?",
          "content": "Now let's learn about subtracting. Subtracting means taking away. Imagine you have 5 yummy grapes. (Visual: 5 grapes appear on a plate). Now, you eat 2 of them. Gobble, gobble! (Visual: 2 grapes disappear). How many grapes are left? Let's count: 1, 2, 3! There are 3 grapes left. 5 minus 2 equals 3."
        },
        {
          "id": "pre-k-advanced-math-101-l07-c2",
          "title": "Counting What Is Left",
          "content": "Let's try another one! Four happy birds are sitting on a branch. (Visual: 4 birds are sitting on a branch). Oh look, one bird is flying away! (Visual: One bird flies off the screen). How many birds are left on the branch? Let's count them: 1, 2, 3! Three birds are left. So, 4 minus 1 equals 3."
        },
        {
          "id": "pre-k-advanced-math-101-l07-c3",
          "title": "Subtraction Clues",
          "content": "Just like with adding, there are clue words for subtracting! If you hear words like 'left,' 'take away,' 'flew away,' or 'gave away,' it's a hint that you need to subtract. For example: You have 3 balloons, and 1 pops! How many are left? 3 minus 1 equals 2 balloons!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l07-fc1",
          "front": "What does the minus sign (−) mean?",
          "back": "To take away, or subtract."
        },
        {
          "id": "pre-k-advanced-math-101-l07-fc2",
          "front": "5 − 3 = ?",
          "back": "2. Start with 5 fingers, then put 3 down. You have 2 left!"
        },
        {
          "id": "pre-k-advanced-math-101-l07-fc3",
          "front": "What words are clues that you need to subtract?",
          "back": "'Left,' 'take away,' 'gone,' and 'how many remain'."
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l07-a1",
          "type": "animation",
          "title": "Balloons Popping",
          "content": "An animation shows 5 colorful balloons. Two of them pop and disappear. A voice counts the remaining 3 balloons."
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l08",
      "title": "Add or Take Away?",
      "type": "interactive",
      "duration": 10,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l08-c1",
          "title": "Math Story Game!",
          "content": "You know how to add and how to subtract. Now it's time to be a math detective! I'm going to tell you a short story, and you have to decide if we need to add (+) or subtract (-). Listen carefully to the clue words! Let's play!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "pre-k-advanced-math-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Add or Subtract?",
          "description": "Read each story and decide: does it use addition or subtraction?",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "add",
                "label": "Addition (+)"
              },
              {
                "id": "sub",
                "label": "Subtraction (−)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "You have 2 apples and get 3 more.",
                "correctBucketId": "add"
              },
              {
                "id": "i2",
                "label": "5 fish are swimming and 2 swim away.",
                "correctBucketId": "sub"
              },
              {
                "id": "i3",
                "label": "1 cookie plus 4 more cookies.",
                "correctBucketId": "add"
              },
              {
                "id": "i4",
                "label": "4 balloons are floating and 1 pops.",
                "correctBucketId": "sub"
              },
              {
                "id": "i5",
                "label": "You have 3 blocks and add 2 more.",
                "correctBucketId": "add"
              },
              {
                "id": "i6",
                "label": "There are 5 crayons and you give 3 away.",
                "correctBucketId": "sub"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l08-a1",
          "type": "practice",
          "title": "Snack Time Math",
          "content": "At snack time, count your crackers. Eat one—how many are left? Get one more—how many now? You're doing math!"
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l09",
      "title": "Big, Small, and In Between",
      "type": "video",
      "duration": 8,
      "chunks": [
        {
          "id": "pre-k-advanced-math-101-l09-c1",
          "title": "Comparing Sizes",
          "content": "Let's look at the world around us and compare things! Comparing means we look at two things and see how they are different. (Visual: A giant elephant stands next to a tiny mouse). Which one is bigger? The elephant! Which one is smaller? The mouse! We use special words to compare."
        },
        {
          "id": "pre-k-advanced-math-101-l09-c2",
          "title": "Measurement Words",
          "content": "We have great words for comparing! To compare how tall things are, we use 'taller' and 'shorter'. (Visual: A tall giraffe stands next to a short turtle). To compare how long things are, we use 'longer' and 'shorter'. (Visual: A long snake is shown above a short worm). These words help us describe our world!"
        },
        {
          "id": "pre-k-advanced-math-101-l09-c3",
          "title": "Measuring Without a Ruler",
          "content": "Did you know you can measure things without a ruler? You can use your own body! Let's see how many of your hands it takes to cover your book. (Visual: An animated hand measures a book). Or, let's count how many footsteps it takes to walk across the room. (Visual: Animated feet walk across the screen with numbers appearing for each step). That's a super fun way to measure!"
        }
      ],
      "flashcards": [
        {
          "id": "pre-k-advanced-math-101-l09-fc1",
          "front": "What words do we use to compare how tall things are?",
          "back": "Taller and shorter."
        },
        {
          "id": "pre-k-advanced-math-101-l09-fc2",
          "front": "Which is bigger, a car or a bicycle?",
          "back": "A car is bigger."
        },
        {
          "id": "pre-k-advanced-math-101-l09-fc3",
          "front": "How can you measure without a ruler?",
          "back": "You can use your hands, your feet, or even blocks!"
        }
      ],
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l09-a1",
          "type": "practice",
          "title": "Footstep Measuring",
          "content": "Let's measure! How many of YOUR footsteps does it take to walk from your bed to the door? Count them out loud!"
        }
      ]
    },
    {
      "id": "pre-k-advanced-math-101-l10",
      "title": "Celebration Quiz: Math Adventures!",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "pre-k-advanced-math-101-l10-q1",
          "text": "3 + 2 = ?",
          "skillId": "simple-addition",
          "options": [
            {
              "id": "a",
              "text": "5"
            },
            {
              "id": "b",
              "text": "4"
            },
            {
              "id": "c",
              "text": "1"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Hold up 3 fingers and then 2 more. Count them all: 1, 2, 3, 4, 5! Great job!"
        },
        {
          "id": "pre-k-advanced-math-101-l10-q2",
          "text": "4 − 1 = ?",
          "skillId": "simple-subtraction",
          "options": [
            {
              "id": "a",
              "text": "3"
            },
            {
              "id": "b",
              "text": "5"
            },
            {
              "id": "c",
              "text": "2"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Start with 4, take away 1, and you have 3 left! You got it!"
        },
        {
          "id": "pre-k-advanced-math-101-l10-q3",
          "text": "Star, heart, heart, star, heart, heart, ___? What comes next?",
          "skillId": "pattern-recognition",
          "options": [
            {
              "id": "a",
              "text": "Star"
            },
            {
              "id": "b",
              "text": "Heart"
            },
            {
              "id": "c",
              "text": "Circle"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This is an ABB pattern. After the two hearts, the pattern starts over with a star!"
        },
        {
          "id": "pre-k-advanced-math-101-l10-q4",
          "text": "How many sides does a triangle have?",
          "skillId": "shape-identification",
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
            }
          ],
          "correctOptionId": "a",
          "explanation": "'Tri' means three! A triangle has 3 sides and 3 corners."
        },
        {
          "id": "pre-k-advanced-math-101-l10-q5",
          "text": "Which word would you use to describe a giraffe and a turtle?",
          "skillId": "comparative-measurement",
          "options": [
            {
              "id": "a",
              "text": "Taller or shorter"
            },
            {
              "id": "b",
              "text": "Bigger or smaller"
            },
            {
              "id": "c",
              "text": "Heavier or lighter"
            }
          ],
          "correctOptionId": "a",
          "explanation": "We use taller and shorter to compare height. A giraffe is much taller than a turtle!"
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 5,
        "totalQuestions": 5,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 5,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 3,
          "medium": 2,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "pre-k-advanced-math-101-l10-a1",
          "type": "mnemonic",
          "title": "Math Power Rhyme",
          "content": "Shapes have sides, patterns repeat, adding is fun, subtracting is neat! You're a math star, what a treat!"
        }
      ]
    }
  ]
};
