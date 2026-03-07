import type { LearningModule } from "@/lib/modules/types";

export const pre_k_coding_101_Module: LearningModule = {
  "id": "pre-k-coding-101",
  "title": "Pre-K Coding Adventures",
  "description": "A playful introduction to coding concepts for children ages 3-5. Learn about step-by-step instructions, patterns, loops, and simple if-then choices — all through stories about friendly robots, silly animals, and everyday adventures.",
  "subject": "Coding",
  "tags": [
    "pre-k",
    "curriculum",
    "interactive"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Follow step-by-step instructions in the correct order",
    "Recognize and continue simple repeating patterns",
    "Understand that a loop means doing something again and again",
    "Use if-then thinking to make simple choices",
    "Break a big task into smaller steps (decomposition)",
    "Find and fix a mistake in a set of instructions (debugging)"
  ],
  "lessons": [
    {
      "id": "prek-coding-l01",
      "title": "Step-By-Step: Tell a Robot What to Do",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that computers follow instructions one step at a time",
        "Put three instructions in the correct order",
        "Describe what happens when steps are out of order"
      ],
      "chunks": [
        {
          "id": "prek-coding-l01-c1",
          "title": "Meet Robo the Friendly Robot",
          "content": "Meet Robo, our friendly blue robot! 🤖 Robo loves to help, but he needs you to tell him exactly what to do, one step at a time. Imagine you want Robo to get a drink. If you say 'drink the water' before you say 'pick up the cup,' Robo will get all mixed up! He needs the steps in the right order. First, walk to the table. Second, pick up the cup. Third, drink the water. See? Computers are like Robo. They need clear steps in the right order to do amazing things. Let's have fun giving Robo the best instructions ever!"
        },
        {
          "id": "prek-coding-l01-c2",
          "title": "Making a Peanut Butter Sandwich",
          "content": "Let's help Robo make a yummy peanut butter sandwich! We need to give him the steps in the right order. Step 1: Get two slices of bread 🍞. Step 2: Spread peanut butter on one slice 🥜. Step 3: Put the two slices together. Yum! But what if we did Step 2 first? Robo would spread peanut butter all over the table! Oh no, what a mess! The order of the steps is super important. Following instructions carefully, one step at a time, is the first part of learning to code!"
        },
        {
          "id": "prek-coding-l01-c3",
          "title": "You Are Already a Coder!",
          "content": "Guess what? You are already a coder! Every morning when you get dressed, you follow steps in a special order. First, you put on your socks. Then, you put on your shoes. Can you imagine putting your shoes on before your socks? 👟 That would be so silly! When you get dressed in the right order, you are thinking just like a coder. You are giving your body instructions, one step at a time. You are doing a fantastic job!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l01-f1",
          "front": "What is an instruction?",
          "back": "A step that tells a computer (or robot) exactly what to do! 🤖"
        },
        {
          "id": "prek-coding-l01-f2",
          "front": "Why does order matter?",
          "back": "If steps are out of order, the result will be wrong — like shoes before socks!"
        },
        {
          "id": "prek-coding-l01-f3",
          "front": "What is a sequence?",
          "back": "A set of steps in the correct order, from first to last."
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l01-q1",
          "text": "Which should come FIRST when making a sandwich?",
          "options": [
            {
              "id": "a",
              "text": "Get the bread"
            },
            {
              "id": "b",
              "text": "Eat the sandwich"
            },
            {
              "id": "c",
              "text": "Put the slices together"
            },
            {
              "id": "d",
              "text": "Spread peanut butter"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You need the bread first before you can spread or eat anything!"
        },
        {
          "id": "prek-coding-l01-q2",
          "text": "What happens if Robo does steps out of order?",
          "options": [
            {
              "id": "a",
              "text": "Everything works perfectly"
            },
            {
              "id": "b",
              "text": "Robo gets confused and makes a mess"
            },
            {
              "id": "c",
              "text": "Robo skips all the steps"
            },
            {
              "id": "d",
              "text": "The steps disappear"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Steps out of order lead to silly mistakes — like putting peanut butter on the table!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l01-a1",
          "type": "image",
          "title": "Step-by-Step Picture",
          "content": "A colorful picture showing the right and wrong way to make a sandwich for Robo."
        }
      ]
    },
    {
      "id": "prek-coding-l02",
      "title": "Patterns Everywhere!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Spot a repeating pattern in colors, shapes, or sounds",
        "Continue a simple AB pattern",
        "Explain that coders use patterns to save time"
      ],
      "chunks": [
        {
          "id": "prek-coding-l02-c1",
          "title": "What Is a Pattern?",
          "content": "A pattern is something that repeats again and again! Look: 🔴🔵🔴🔵. That's red, blue, red, blue. The pattern is 'red, blue.' Your favorite striped shirt has a pattern. Even music has patterns! Let's make one: clap-stomp-clap-stomp! 👏🦶 Patterns are everywhere. Look around you, can you find one? 🌈"
        },
        {
          "id": "prek-coding-l02-c2",
          "title": "Patterns Help Coders",
          "content": "Coders love patterns! Once you know the pattern, you can guess what comes next. If we have a pattern like circle-star-circle-star... ⚪⭐⚪⭐... what comes next? A circle! Computers are great at repeating patterns. We can tell a computer to draw a circle-star pattern a hundred times, and it will do it perfectly! This helps coders make games and fun animations."
        },
        {
          "id": "prek-coding-l02-c3",
          "title": "Pattern Detective Game",
          "content": "Let's be pattern detectives! 🕵️‍♀️ Look at these beads: 🟡🟢🟡🟢🟡... What color bead comes next? Yes, it's green! 🟢 You got it! Let's try a trickier one: 🔺🔺🔵🔺🔺🔵... What comes next? It's another triangle! 🔺 You are an amazing pattern detective! The more you look for patterns, the easier they are to spot."
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l02-f1",
          "front": "What is a pattern?",
          "back": "Something that repeats over and over in the same way! 🔴🔵🔴🔵"
        },
        {
          "id": "prek-coding-l02-f2",
          "front": "Why do coders like patterns?",
          "back": "Patterns let you predict what comes next — computers can repeat them perfectly!"
        },
        {
          "id": "prek-coding-l02-f3",
          "front": "What is an AB pattern?",
          "back": "A pattern with two things that take turns: red-blue-red-blue or clap-stomp-clap-stomp."
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l02-q1",
          "text": "🔴🔵🔴🔵🔴 — what comes next?",
          "options": [
            {
              "id": "a",
              "text": "🔴 Red"
            },
            {
              "id": "b",
              "text": "🔵 Blue"
            },
            {
              "id": "c",
              "text": "🟢 Green"
            },
            {
              "id": "d",
              "text": "🟡 Yellow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The pattern is red-blue-red-blue, so blue comes after red!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l02-a1",
          "type": "image",
          "title": "Pattern Chart",
          "content": "A colorful chart with different patterns like stripes, dots, and animal tracks."
        }
      ]
    },
    {
      "id": "prek-coding-l03",
      "title": "Pattern Play: Build Your Own Patterns",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Create an AB pattern using colored blocks",
        "Identify the missing piece in a pattern sequence"
      ],
      "interactiveActivities": [
        {
          "id": "prek-coding-l03-ia1",
          "type": "sorting_buckets",
          "title": "Finish the Pattern!",
          "description": "Drag the right shape to complete each pattern.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "pattern1",
                "label": "🔴🔵🔴🔵🔴 ?"
              },
              {
                "id": "pattern2",
                "label": "⭐🌙⭐🌙⭐ ?"
              },
              {
                "id": "pattern3",
                "label": "🐱🐶🐱🐶🐱 ?"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "🔵",
                "correctBucketId": "pattern1"
              },
              {
                "id": "i2",
                "label": "🌙",
                "correctBucketId": "pattern2"
              },
              {
                "id": "i3",
                "label": "🐶",
                "correctBucketId": "pattern3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l03-a1",
          "type": "practice",
          "title": "Pattern Practice Fun!",
          "content": "Let's build some patterns together on the screen!"
        }
      ]
    },
    {
      "id": "prek-coding-l04",
      "title": "Loops: Do It Again and Again!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that a loop means repeating the same steps",
        "Give an example of a loop in everyday life",
        "Count how many times a loop repeats"
      ],
      "chunks": [
        {
          "id": "prek-coding-l04-c1",
          "title": "What Is a Loop?",
          "content": "A loop is when you do the same thing again and again! 🔄 When you brush your teeth, you move the brush up and down, up and down. That's a loop! In coding, loops are super helpful. Instead of telling the computer 'move up, move down' a hundred times, we can just say, 'repeat up and down 100 times.' It saves a lot of work!"
        },
        {
          "id": "prek-coding-l04-c2",
          "title": "Robo's Loop Dance",
          "content": "Robo wants to do a silly dance! 🕺 The moves are: spin, clap, jump! To make him dance for a while, we can use a loop. We can tell him: 'Do the dance 3 times.' Then Robo will spin-clap-jump, spin-clap-jump, spin-clap-jump! A loop tells Robo to repeat the steps so he can dance all day long! 🎉"
        },
        {
          "id": "prek-coding-l04-c3",
          "title": "Loops in Your Day",
          "content": "You use loops all the time! When you bounce a ball, you do a loop: bounce-catch, bounce-catch, bounce-catch 🏀. When you sing your favorite song, you repeat the chorus again and again 🎵. Even walking is a loop: left foot, right foot, left foot, right foot. Loops are everywhere, and they help us do things without having to think about every single step."
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l04-f1",
          "front": "What is a loop?",
          "back": "Doing the same steps over and over again! Like bouncing a ball: bounce-catch, bounce-catch. 🔄"
        },
        {
          "id": "prek-coding-l04-f2",
          "front": "Why are loops helpful?",
          "back": "Loops save time! Instead of writing the same thing 100 times, you just say 'repeat' once."
        },
        {
          "id": "prek-coding-l04-f3",
          "front": "Name a loop in real life",
          "back": "Brushing teeth (up-down-up-down), walking (left-right-left-right), or bouncing a ball!"
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l04-q1",
          "text": "Which is a loop?",
          "options": [
            {
              "id": "a",
              "text": "Clap once and stop"
            },
            {
              "id": "b",
              "text": "Clap-stomp, clap-stomp, clap-stomp"
            },
            {
              "id": "c",
              "text": "Sit quietly"
            },
            {
              "id": "d",
              "text": "Draw one circle"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clap-stomp repeated three times is a loop — the same steps over and over!"
        },
        {
          "id": "prek-coding-l04-q2",
          "text": "How many times does Robo repeat 'spin-clap-jump' if we say 'repeat 3 times'?",
          "options": [
            {
              "id": "a",
              "text": "1 time"
            },
            {
              "id": "b",
              "text": "2 times"
            },
            {
              "id": "c",
              "text": "3 times"
            },
            {
              "id": "d",
              "text": "10 times"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Repeat 3 times means Robo does spin-clap-jump exactly 3 times!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l04-a1",
          "type": "image",
          "title": "Robo's Dance!",
          "content": "An animation of Robo doing his loop dance: spin, clap, jump, again and again!"
        }
      ]
    },
    {
      "id": "prek-coding-l05",
      "title": "Checkpoint: Sequences, Patterns & Loops",
      "type": "quiz",
      "duration": 8,
      "questions": [
        {
          "id": "prek-coding-l05-q1",
          "text": "You want to brush your teeth. What do you do FIRST?",
          "options": [
            {
              "id": "a",
              "text": "Put toothpaste on the brush"
            },
            {
              "id": "b",
              "text": "Rinse your mouth"
            },
            {
              "id": "c",
              "text": "Smile at the mirror"
            },
            {
              "id": "d",
              "text": "Put the brush away"
            }
          ],
          "correctOptionId": "a",
          "explanation": "First put toothpaste on the brush, then you can start brushing!"
        },
        {
          "id": "prek-coding-l05-q2",
          "text": "⭐🌙⭐🌙⭐ — what comes next?",
          "options": [
            {
              "id": "a",
              "text": "⭐ Star"
            },
            {
              "id": "b",
              "text": "🌙 Moon"
            },
            {
              "id": "c",
              "text": "☀️ Sun"
            },
            {
              "id": "d",
              "text": "🌈 Rainbow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The pattern alternates star-moon, so moon comes after the third star!"
        },
        {
          "id": "prek-coding-l05-q3",
          "text": "Walking is left-right-left-right. That is a...",
          "options": [
            {
              "id": "a",
              "text": "Bug"
            },
            {
              "id": "b",
              "text": "Loop"
            },
            {
              "id": "c",
              "text": "Sandwich"
            },
            {
              "id": "d",
              "text": "Nap"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Repeating the same steps (left-right) over and over is called a loop!"
        },
        {
          "id": "prek-coding-l05-q4",
          "text": "Why does the order of steps matter?",
          "options": [
            {
              "id": "a",
              "text": "It doesn't matter at all"
            },
            {
              "id": "b",
              "text": "Wrong order makes a mess or doesn't work"
            },
            {
              "id": "c",
              "text": "Robots like random order"
            },
            {
              "id": "d",
              "text": "Steps always fix themselves"
            }
          ],
          "correctOptionId": "b",
          "explanation": "If steps are out of order, things go wrong — like shoes before socks!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l05-a1",
          "type": "mnemonic",
          "title": "Brain Booster!",
          "content": "A friendly character cheering you on before the quiz! You can do it!"
        }
      ]
    },
    {
      "id": "prek-coding-l06",
      "title": "If-Then: Making Smart Choices",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Use an if-then statement to describe a choice",
        "Give two everyday examples of if-then thinking",
        "Explain that computers make choices using if-then rules"
      ],
      "chunks": [
        {
          "id": "prek-coding-l06-c1",
          "title": "What Is If-Then?",
          "content": "We make choices all day using special 'if-then' rules! 🤔 For example: IF it is raining outside 🌧️, THEN you take an umbrella. IF you feel hungry, THEN you eat a yummy snack. IF the traffic light is red, THEN you stop. You are already an expert at if-then thinking! It's how we make smart choices to stay safe and happy."
        },
        {
          "id": "prek-coding-l06-c2",
          "title": "Robo's If-Then Rules",
          "content": "We can teach Robo to make smart choices with if-then rules! We can tell him: IF you see a wall, THEN turn around. Without this rule, Robo might walk right into the wall! Bonk, bonk, bonk! Ouch! We can also tell him: IF you hear clapping 👏, THEN do a happy dance! 🤖💃 If-then rules help Robo know what to do."
        },
        {
          "id": "prek-coding-l06-c3",
          "title": "If-Then-Else: Two Choices!",
          "content": "Sometimes there are two choices! That's when we use 'if-then-else.' For example: IF it is sunny outside ☀️, THEN wear a t-shirt. ELSE, wear a jacket 🧥. The 'else' tells us what to do if the 'if' isn't true. Here's another one: IF you finished your toys, THEN you can have a snack. ELSE, you need to finish cleaning up. Computers use if-then-else to make choices all the time!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l06-f1",
          "front": "What is an if-then rule?",
          "back": "A rule that says: IF something is true, THEN do this action! Like: IF it's raining, THEN take an umbrella. ☔"
        },
        {
          "id": "prek-coding-l06-f2",
          "front": "What does ELSE mean?",
          "back": "ELSE is what happens when the IF is NOT true. IF sunny → t-shirt, ELSE → jacket!"
        },
        {
          "id": "prek-coding-l06-f3",
          "front": "Why do robots need if-then rules?",
          "back": "Without if-then, robots can't make choices — they'd walk into walls forever! 🤖💥"
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l06-q1",
          "text": "IF it is raining, THEN you should...",
          "options": [
            {
              "id": "a",
              "text": "Wear sunglasses"
            },
            {
              "id": "b",
              "text": "Take an umbrella"
            },
            {
              "id": "c",
              "text": "Eat ice cream"
            },
            {
              "id": "d",
              "text": "Go swimming"
            }
          ],
          "correctOptionId": "b",
          "explanation": "IF raining, THEN umbrella! That keeps you dry."
        }
      ]
    },
    {
      "id": "prek-coding-l07",
      "title": "If-Then Game: Help Robo Choose!",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Match an if-then condition to the correct action",
        "Predict what Robo will do given a rule"
      ],
      "interactiveActivities": [
        {
          "id": "prek-coding-l07-ia1",
          "type": "matching_pairs",
          "title": "Match the If to the Then!",
          "description": "Connect each IF to the right THEN action.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "IF it is cold 🥶"
              },
              {
                "id": "l2",
                "label": "IF you are sleepy 🥱"
              },
              {
                "id": "l3",
                "label": "IF the light is green 🟢"
              },
              {
                "id": "l4",
                "label": "IF Robo sees a cat 😺"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "THEN wear a coat 🧥"
              },
              {
                "id": "r2",
                "label": "THEN go to bed 🛌"
              },
              {
                "id": "r3",
                "label": "THEN walk across 🚶"
              },
              {
                "id": "r4",
                "label": "THEN wave hello 👋"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "prek-coding-l08",
      "title": "Break It Down: Big Tasks into Tiny Steps",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that decomposition means breaking a big task into small steps",
        "Break a simple task into 3-4 steps",
        "Describe why small steps are easier than one giant step"
      ],
      "chunks": [
        {
          "id": "prek-coding-l08-c1",
          "title": "The Big Scary Task",
          "content": "Imagine someone says, 'Clean your whole room!' That sounds like a really big, scary job, right? 😱 But we can make it easy by breaking it down into tiny steps! Step 1: Put all your toys in the toy box. Step 2: Put your books on the shelf. Step 3: Make your bed. See? Each small step is easy to do. When you finish all the small steps, the big job is done! This is called decomposition. It's a fancy word for breaking a big task into tiny steps."
        },
        {
          "id": "prek-coding-l08-c2",
          "title": "How Coders Decompose",
          "content": "Coders do this all the time! Making a whole game sounds hard, but they break it down. Step 1: Draw a fun character. Step 2: Make the character move left and right. Step 3: Add fun sounds. 🎮 Each tiny step is easy. When they put all the steps together, they have a whole game! Breaking things down makes big jobs feel small and fun."
        },
        {
          "id": "prek-coding-l08-c3",
          "title": "Let's Decompose Getting Ready",
          "content": "Let's practice! The big job is 'get ready for school.' Let's break it down. Step 1: Wake up and stretch 🌅. Step 2: Brush your teeth 🪥. Step 3: Get dressed 👕. Step 4: Eat breakfast 🥞. Step 5: Pack your backpack 🎒. Wow! Instead of one big job, we have five small, easy steps. You're great at decomposition!"
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l08-f1",
          "front": "What is decomposition?",
          "back": "Breaking a big task into smaller, easier steps! Like cleaning your room one toy at a time. 🧩"
        },
        {
          "id": "prek-coding-l08-f2",
          "front": "Why decompose?",
          "back": "Small steps are easier to do and less scary than one giant task!"
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l08-q1",
          "text": "Decomposition means...",
          "options": [
            {
              "id": "a",
              "text": "Making a task bigger"
            },
            {
              "id": "b",
              "text": "Breaking a big task into small steps"
            },
            {
              "id": "c",
              "text": "Skipping all the steps"
            },
            {
              "id": "d",
              "text": "Doing everything at once"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decomposition = breaking big things into small, easy steps!"
        }
      ]
    },
    {
      "id": "prek-coding-l09",
      "title": "Bug Hunt: Find and Fix Mistakes!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that a bug is a mistake in instructions",
        "Find a bug in a simple sequence of steps",
        "Fix the bug by correcting or reordering the step"
      ],
      "chunks": [
        {
          "id": "prek-coding-l09-c1",
          "title": "What Is a Bug?",
          "content": "In coding, a 'bug' is just a silly mistake in the instructions! 🐛 A long time ago, a real moth got stuck in a giant computer and made it stop working. So now, when something goes wrong, coders say, 'There's a bug!' Finding and fixing these mistakes is called 'debugging.' It's like being a detective on a bug hunt!"
        },
        {
          "id": "prek-coding-l09-c2",
          "title": "Robo's Buggy Morning",
          "content": "Oh no, Robo is having a buggy morning! Here are his steps for getting dressed: Step 1: Put on shoes 👟. Step 2: Put on socks 🧦. Can you spot the bug? You can't put shoes on before socks! That's a bug in the steps. To fix it, we just swap the steps. Step 1: Put on socks. Step 2: Put on shoes. Great debugging! You fixed the bug! 🐛→✅"
        },
        {
          "id": "prek-coding-l09-c3",
          "title": "Everyone Makes Bugs!",
          "content": "Here's a secret: even the best coders in the world make bugs! 🌍 It is okay to make mistakes. The important part is being a good bug hunter. When something doesn't work, we don't give up. We check our steps, find the mistake, and fix it. Finding and fixing bugs helps our brains grow stronger. So don't worry about making mistakes—be a proud bug hunter! 🎉"
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l09-f1",
          "front": "What is a bug?",
          "back": "A mistake in your instructions that makes things go wrong! Named after a real moth in a computer. 🐛"
        },
        {
          "id": "prek-coding-l09-f2",
          "front": "What is debugging?",
          "back": "Finding a bug and fixing it! Check your steps, spot the mistake, and correct it. 🔍✅"
        },
        {
          "id": "prek-coding-l09-f3",
          "front": "Do good coders make bugs?",
          "back": "Yes! Everyone makes bugs. Good coders are just good at FINDING and FIXING them!"
        }
      ],
      "questions": [
        {
          "id": "prek-coding-l09-q1",
          "text": "Robo's steps: 1) Pour cereal 2) Eat cereal 3) Get a bowl. What is the bug?",
          "options": [
            {
              "id": "a",
              "text": "Step 3 should be first — you need a bowl before you pour!"
            },
            {
              "id": "b",
              "text": "There is no bug"
            },
            {
              "id": "c",
              "text": "Step 1 should be last"
            },
            {
              "id": "d",
              "text": "Remove all the steps"
            }
          ],
          "correctOptionId": "a",
          "explanation": "You need to get the bowl FIRST, then pour, then eat. Step 3 should be Step 1!"
        }
      ]
    },
    {
      "id": "prek-coding-l10",
      "title": "Celebration Quiz: Coding Superstar!",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "prek-coding-l10-q1",
          "text": "What does a SEQUENCE mean?",
          "options": [
            {
              "id": "a",
              "text": "Steps in the correct order"
            },
            {
              "id": "b",
              "text": "A type of food"
            },
            {
              "id": "c",
              "text": "A loud noise"
            },
            {
              "id": "d",
              "text": "A color"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A sequence is steps in the right order — first things first!"
        },
        {
          "id": "prek-coding-l10-q2",
          "text": "🔵🔴🔵🔴🔵 — what comes next?",
          "options": [
            {
              "id": "a",
              "text": "🔵 Blue"
            },
            {
              "id": "b",
              "text": "🔴 Red"
            },
            {
              "id": "c",
              "text": "🟢 Green"
            },
            {
              "id": "d",
              "text": "🟡 Yellow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The pattern is blue-red-blue-red, so red comes after blue!"
        },
        {
          "id": "prek-coding-l10-q3",
          "text": "Bounce-catch-bounce-catch is a...",
          "options": [
            {
              "id": "a",
              "text": "Bug"
            },
            {
              "id": "b",
              "text": "Snack"
            },
            {
              "id": "c",
              "text": "Loop"
            },
            {
              "id": "d",
              "text": "If-then"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Repeating the same steps over and over is called a loop!"
        },
        {
          "id": "prek-coding-l10-q4",
          "text": "IF it is cold, THEN you should...",
          "options": [
            {
              "id": "a",
              "text": "Wear a coat"
            },
            {
              "id": "b",
              "text": "Eat ice cream"
            },
            {
              "id": "c",
              "text": "Go swimming"
            },
            {
              "id": "d",
              "text": "Take off your shoes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "IF cold, THEN coat! That is an if-then rule."
        },
        {
          "id": "prek-coding-l10-q5",
          "text": "Breaking a big task into small steps is called...",
          "options": [
            {
              "id": "a",
              "text": "Looping"
            },
            {
              "id": "b",
              "text": "Decomposition"
            },
            {
              "id": "c",
              "text": "Debugging"
            },
            {
              "id": "d",
              "text": "Pattering"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decomposition = breaking big things into smaller, easier steps!"
        },
        {
          "id": "prek-coding-l10-q6",
          "text": "A 'bug' in coding is a...",
          "options": [
            {
              "id": "a",
              "text": "Cute ladybug"
            },
            {
              "id": "b",
              "text": "Mistake in the instructions"
            },
            {
              "id": "c",
              "text": "New type of computer"
            },
            {
              "id": "d",
              "text": "Really fast loop"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A bug is a mistake — and debugging is finding and fixing it!"
        }
      ]
    }
  ]
};
