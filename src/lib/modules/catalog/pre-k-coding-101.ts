import type { LearningModule } from "@/lib/modules/types";

export const PreKCoding101Module: LearningModule = {
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
  "version": "4.0.0",
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
          "content": "Let me introduce you to Robo, the little blue robot who is always excited to help out! 🤖 Robo is a very special robot because it can only do what you tell it to do, and it needs to follow your instructions one step at a time. Imagine if you wanted Robo to help you set the table. If you say 'pick up the cup' before 'walk to the table,' Robo will get all mixed up and try to grab nothing at all! This is because Robo doesn’t understand what to do unless you give it clear and simple steps in the right order. Just like Robo, computers are a bit like helpful robots too! They need clear instructions to work properly. They listen to what you say and follow your commands in a specific order, from the first step to the last. So, when you give Robo a task, remember to tell it what to do in the right order, just like you would when you are building a tower with blocks or following a recipe for a yummy snack! This way, Robo can help you perfectly every time! Let's have fun giving Robo the best instructions ever!\nContext recap: Let me introduce you to Robo, the little blue robot who is always excited to help out! 🤖 Robo is a very special robot because it can only do what you tell it to do, and it needs to follow your instructions one step at a time. Imagine if you wanted Robo to help you set the table. If you say 'pick up the cup' before 'walk to the table,' Robo will get all mixed up and try to grab nothing at all!\nWhy this matters: Meet Robo the Friendly Robot helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "prek-coding-l01-c2",
          "title": "Making a Peanut Butter Sandwich",
          "content": "Let's help our friend Robo make a yummy peanut butter sandwich! To do this, we need to give Robo clear and easy steps to follow. First, we start with Step 1: We need to get two slices of bread 🍞. Can you imagine how tasty that will be? Next, in Step 2, we will spread some peanut butter on one of the slices 🥜. It's important to spread it nicely so that every bite is delicious! Finally, in Step 3, we will put the two slices together to make our sandwich. But wait! If we forget Step 1 and jump right to spreading the peanut butter, Robo might make a big mess by putting peanut butter all over the table! Oh no! This shows us that the order of steps is super important when we give instructions. Just like in coding, where every step we take matters, we must remember to follow the right order. So, let's be great helpers and guide Robo step by step! Making a sandwich is fun, and it teaches us how to follow instructions carefully!\nContext recap: Let's help our friend Robo make a yummy peanut butter sandwich! To do this, we need to give Robo clear and easy steps to follow. First, we start with Step 1: We need to get two slices of bread 🍞. Can you imagine how tasty that will be?\nWhy this matters: Making a Peanut Butter Sandwich helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l01-c3",
          "title": "You Are Already a Coder!",
          "content": "Guess what? You are already a coder! Every single morning, when you get ready for the day, you follow a special order of steps. First, you put on your underwear, then you put on your pants, and finally, you slip on your shoes. Can you imagine putting your shoes on before your pants? That would be silly, right? 👟 This is a great example of how you use coding skills without even knowing it! By putting your clothes on in the right order, you are giving instructions just like a coder does. So, the next time you get dressed, think about how you are using your coding brain! You are doing a fantastic job of thinking like a coder every day! Keep it up!\nContext recap: Guess what? You are already a coder! Every single morning, when you get ready for the day, you follow a special order of steps. First, you put on your underwear, then you put on your pants, and finally, you slip on your shoes.\nWhy this matters: You Are Already a Coder! helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l01-f1",
          "front": "What is an instruction?",
          "back": "A step that tells the computer (or robot) exactly what to do! 🤖"
        },
        {
          "id": "prek-coding-l01-f2",
          "front": "Why does order matter?",
          "back": "If steps are out of order, the result will be wrong — like shoes before pants!"
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A pattern is something that happens again and again in a fun and predictable way! For example, look at this colorful sequence: 🔴🔵🔴🔵 — that's red, blue, red, blue. Isn’t that cool? Your favorite striped shirt has a pattern too! It might have red and blue stripes that repeat. The days of the week also follow a pattern, repeating every week like Monday, Tuesday, Wednesday, and so on. Even when we make music with our bodies by clapping our hands and stomping our feet, like clap-stomp-clap-stomp, we are creating a pattern! 👏🦶 Patterns are everywhere around us, and they help us understand the world better! They can be found in nature, in our clothes, and even in the games we play. So, keep your eyes open for patterns all around you! You might be surprised by how many you can find! 🌈\nContext recap: A pattern is something that happens again and again in a fun and predictable way! For example, look at this colorful sequence: 🔴🔵🔴🔵 — that's red, blue, red, blue. Isn’t that cool? Your favorite striped shirt has a pattern too!\nWhy this matters: What Is a Pattern? helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l02-c2",
          "title": "Patterns Help Coders",
          "content": "Coders really enjoy working with patterns because once they learn the rule, they can predict what comes next! For example, if we have a pattern like circle-star-circle-star, can you guess what comes after the second star? That's right, it’s a circle! ⭐⚪⭐⚪ Patterns are everywhere, and they help us understand how things work. Computers are fantastic at recognizing and repeating patterns — they never get tired or bored like we do! This ability makes them super helpful when we want to create fun things like games or animations. So, the next time you see a pattern, remember that it’s like a little secret code that helps us and computers work together to make amazing things!\nContext recap: Coders really enjoy working with patterns because once they learn the rule, they can predict what comes next! For example, if we have a pattern like circle-star-circle-star, can you guess what comes after the second star? That's right, it’s a circle! ⭐⚪⭐⚪ Patterns are everywhere, and they help us understand how things work.\nWhy this matters: Patterns Help Coders helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "prek-coding-l02-c3",
          "title": "Pattern Detective Game",
          "content": "Are you ready to become a super pattern detective? Let's take a look at these colorful beads together: 🟡🟢🟡🟢🟡... Can you guess what bead comes next? That's right, it's green! 🟢 Great job! Now, let’s try a trickier one: 🔺🔺🔵🔺🔺🔵... What do you think comes next? Yes, you got it! It's triangle, triangle! 🔺🔺 Wow, you are doing an amazing job at spotting patterns! Remember, the more you practice, the better you will get at being a pattern detective. Keep up the great work, and soon you'll be a pattern expert! Let's keep having fun with patterns together!\nContext recap: Are you ready to become a super pattern detective? Let's take a look at these colorful beads together: 🟡🟢🟡🟢🟡... Can you guess what bead comes next? That's right, it's green!\nWhy this matters: Pattern Detective Game helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "Patterns let you predict what comes next — computers repeat patterns perfectly!"
        },
        {
          "id": "prek-coding-l02-f3",
          "front": "AB pattern",
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "A loop is a special way of doing the same thing again and again! 🔄 Imagine when you brush your teeth: you move the toothbrush up and down, up and down, up and down — that’s a loop! Instead of writing 'move the brush up, then move the brush down' a hundred times, we can just say, 'repeat up and down until your teeth are clean.' This makes it much easier and faster! In coding, loops are super helpful because they let us tell the computer to do things many times without having to write everything out over and over. Just like how brushing your teeth is a routine, loops help us create routines in our code. So remember, loops are all about repeating actions to make our work simpler and quicker!\nContext recap: A loop is a special way of doing the same thing again and again! 🔄 Imagine when you brush your teeth: you move the toothbrush up and down, up and down, up and down — that’s a loop! Instead of writing 'move the brush up, then move the brush down' a hundred times, we can just say, 'repeat up and down until your teeth are clean.' This makes it much easier and faster! In coding, loops are super helpful because they let us tell the computer to do things many times without having to write everything out over and over."
        },
        {
          "id": "prek-coding-l04-c2",
          "title": "Robo's Loop Dance",
          "content": "Robo is super excited to show off his silly dance! 🕺 The dance moves are really fun and include spinning around, clapping your hands, and jumping up high! Instead of saying 'spin, clap, jump' over and over again, we can make it easier for Robo by saying, 'repeat spin, clap, jump 3 times.' This is called a loop! A loop is like a magic trick that helps us tell Robo to do the same dance moves without getting tired. It makes dancing so much more fun because we don’t have to say the same thing again and again. Just imagine how happy Robo will be to dance without stopping! Let’s help Robo dance his best by using loops! 🎉\nContext recap: Robo is super excited to show off his silly dance! 🕺 The dance moves are really fun and include spinning around, clapping your hands, and jumping up high! Instead of saying 'spin, clap, jump' over and over again, we can make it easier for Robo by saying, 'repeat spin, clap, jump 3 times.' This is called a loop! A loop is like a magic trick that helps us tell Robo to do the same dance moves without getting tired.\nWhy this matters: Robo's Loop Dance helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "prek-coding-l04-c3",
          "title": "Loops in Your Day",
          "content": "Did you know that you use loops in your everyday life all the time? Let's think about some fun examples! When you bounce a ball, you do it over and over again: bounce-catch, bounce-catch, bounce-catch 🏀. It’s like a little dance with the ball! And when you sing the chorus of your favorite song, you might sing la-la-la, la-la-la 🎵 again and again. Isn’t that fun? Even when you walk, you are using a loop: left foot, right foot, left foot, right foot. Loops help us do things in a simple way, and they also help us understand coding better! So next time you bounce, sing, or walk, remember that you are using loops, just like in coding! Loops make our lives easier and more fun!\nContext recap: Did you know that you use loops in your everyday life all the time? Let's think about some fun examples! When you bounce a ball, you do it over and over again: bounce-catch, bounce-catch, bounce-catch 🏀. It’s like a little dance with the ball!\nWhy this matters: Loops in Your Day helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "Loops save time! Instead of writing the same thing 100 times, you say 'repeat' once."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "explanation": "If steps are out of order, things go wrong — like shoes before pants!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-coding-l05-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
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
          "content": "If-then statements are a fun and important way we make choices every day! 🤔 Let’s think about some examples together! IF it is raining outside, THEN you should take an umbrella with you to stay dry. IF you feel hungry, THEN it’s a great time to have a yummy snack to keep your energy up. IF the traffic light is red, THEN you need to stop and wait for it to turn green before crossing the street. These little choices help us stay safe and happy! You already use if-then thinking in your daily life — you just didn’t know it had a special coding name! Isn’t that cool? By understanding if-then statements, we can learn how to make smart choices in many situations, just like a computer does when it follows instructions!\nContext recap: If-then statements are a fun and important way we make choices every day! 🤔 Let’s think about some examples together! IF it is raining outside, THEN you should take an umbrella with you to stay dry. IF you feel hungry, THEN it’s a great time to have a yummy snack to keep your energy up.\nWhy this matters: What Is If-Then? helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l06-c2",
          "title": "Robo's If-Then Rules",
          "content": "We can teach Robo how to make smart choices by using if-then rules! For example, we can say: IF Robo sees a wall, THEN it should turn around to avoid bumping into it. If Robo hears clapping, THEN it should start dancing happily! 🤖💃 These special rules are very important because, without them, Robo might just keep walking straight into the wall over and over again — bonk, bonk, bonk! Ouch! By using if-then rules, we help Robo understand what to do in different situations, making it a clever little robot friend!\nContext recap: We can teach Robo how to make smart choices by using if-then rules! For example, we can say: IF Robo sees a wall, THEN it should turn around to avoid bumping into it. If Robo hears clapping, THEN it should start dancing happily! 🤖💃 These special rules are very important because, without them, Robo might just keep walking straight into the wall over and over again — bonk, bonk, bonk!"
        },
        {
          "id": "prek-coding-l06-c3",
          "title": "If-Then-Else: Two Choices!",
          "content": "Sometimes, we have to make choices, and that's where the magic of 'if-then-else' comes in! Let's think about a sunny day. IF it is sunny outside, THEN you can wear a fun t-shirt to enjoy the warm weather. But if it’s not sunny, we have to think about what to wear instead. In that case, we say, ELSE you should wear a cozy jacket to keep warm. ☀️🧥\nThis 'else' part is super important because it tells us what to do when the first choice isn't true. Here’s another fun example: IF you have homework to do, THEN you should sit down and finish your homework. But if you don’t have any homework, we say, ELSE you can go outside and play with your friends!\nIsn't it cool how computers use this 'if-then-else' idea all the time? They use it to help them decide what to do next, just like we do in our everyday lives! So remember, making choices can be fun, and understanding 'if-then-else' helps us make smart decisions!\nContext recap: Sometimes, we have to make choices, and that's where the magic of 'if-then-else' comes in! Let's think about a sunny day. IF it is sunny outside, THEN you can wear a fun t-shirt to enjoy the warm weather. But if it’s not sunny, we have to think about what to wear instead.\nWhy this matters: If-Then-Else: Two Choices! helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        }
      ],
      "flashcards": [
        {
          "id": "prek-coding-l06-f1",
          "front": "What is an if-then rule?",
          "back": "A rule that says: IF something is true, THEN do this action! Like: IF raining, THEN take umbrella. ☔"
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
                "label": "IF it is cold"
              },
              {
                "id": "l2",
                "label": "IF you are sleepy"
              },
              {
                "id": "l3",
                "label": "IF the light is green"
              },
              {
                "id": "l4",
                "label": "IF Robo sees a cat"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "THEN wear a coat"
              },
              {
                "id": "r2",
                "label": "THEN go to bed"
              },
              {
                "id": "r3",
                "label": "THEN walk across"
              },
              {
                "id": "r4",
                "label": "THEN wave hello"
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
          "content": "Imagine if someone asked you to 'clean your whole room!' That sounds really big and maybe a little scary, right? 😱 But what if we think of it as lots of little jobs instead? We can break it down into tiny steps! Step 1: First, let’s pick up all your toys and put them in the toy box. This is fun because you can see how many toys you have! Step 2: Next, let’s put your books back on the shelf where they belong. You can even organize them by color or size if you want! Step 3: Now, it’s time to make your bed. You can straighten the blankets and fluff the pillows to make it look nice and cozy. Step 4: Finally, take a look around your room. Is there anything else that needs to be tidied up? Maybe some clothes need to go in the hamper or some shoes need to be put away. Now, you’re done! Each of these little steps is easy to do, and when we finish them, your room will look great! This process of breaking a big task into smaller parts is called decomposition — it’s a fancy word that means we’re taking something big and making it smaller and simpler to handle! So remember, when a big job feels overwhelming, just break it down into tiny steps, and you can do it!\nContext recap: Imagine if someone asked you to 'clean your whole room!' That sounds really big and maybe a little scary, right? 😱 But what if we think of it as lots of little jobs instead? We can break it down into tiny steps! Step 1: First, let’s pick up all your toys and put them in the toy box.\nWhy this matters: The Big Scary Task helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l08-c2",
          "title": "How Coders Decompose",
          "content": "Did you know that real coders do something very similar to what we can do? When they want to create a game, it might seem like a really big job at first. But here’s the secret: they break it down into smaller, easier steps! Let’s think about how they do this together! For example, they might start with Step 1: Draw a fun character that you would like to play with. Step 2: Make that character move left and right on the screen so it can explore the game world. Step 3: Add a score counter to keep track of how many points you earn while playing. Step 4: Include some cool sound effects to make the game exciting and fun! 🎮 Each of these tiny steps is something you can do, and when you put them all together, guess what? You’ve created your very own game! Isn’t that amazing? You can be a coder too! Remember, every big project starts with small steps, and you can do it!\nContext recap: Did you know that real coders do something very similar to what we can do? When they want to create a game, it might seem like a really big job at first. But here’s the secret: they break it down into smaller, easier steps! Let’s think about how they do this together!\nWhy this matters: How Coders Decompose helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "prek-coding-l08-c3",
          "title": "Let's Decompose Getting Ready",
          "content": "Let’s practice breaking down a big task together! Imagine the big job is to 'get ready for school.' It sounds like a lot, but we can make it easier by breaking it down into smaller steps. Here’s how we can do it: Step 1: Wake up and stretch your arms to wake up your body 🌅. Step 2: Brush your teeth to keep them clean and shiny 🪥. Step 3: Get dressed in your favorite clothes 👕. Step 4: Enjoy a yummy breakfast to give you energy for the day 🥞. Step 5: Pack your backpack with everything you need for school 🎒. Now, instead of one big confusing task, we have five small and easy steps to follow!\nContext recap: Let’s practice breaking down a big task together! Imagine the big job is to 'get ready for school.' It sounds like a lot, but we can make it easier by breaking it down into smaller steps. Here’s how we can do it: Step 1: Wake up and stretch your arms to wake up your body 🌅. Step 2: Brush your teeth to keep them clean and shiny 🪥.\nWhy this matters: Let's Decompose Getting Ready helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical."
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
          "content": "In the exciting world of coding, we often talk about something called a 'bug.' But what is a bug? Well, a bug is a special word we use to describe a mistake in our code! 🐛 The fun part is that the word 'bug' comes from a real story about a little moth that got stuck inside an old computer and made it stop working. Can you imagine that? Now, whenever something in our code doesn’t work the way we want it to, coders say, 'Oh no! There’s a bug!' This means it’s time for a fun adventure called a bug hunt! During a bug hunt, coders become detectives, searching for clues to find the mistake and fix it. Just like solving a mystery, it can be really exciting! So remember, bugs are just little mistakes that we can find and fix together, making our coding even better!\nContext recap: In the exciting world of coding, we often talk about something called a 'bug.' But what is a bug? Well, a bug is a special word we use to describe a mistake in our code! 🐛 The fun part is that the word 'bug' comes from a real story about a little moth that got stuck inside an old computer and made it stop working. Can you imagine that?\nWhy this matters: What Is a Bug? helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l09-c2",
          "title": "Robo's Buggy Morning",
          "content": "Let’s help our friend Robo with a little problem he’s having! Robo is trying to get dressed all by himself, but something is not quite right. Here are the steps Robo is following: Step 1: Put on shoes 👟, Step 2: Put on socks 🧦, and Step 3: Put on pants 👖. Oh no! That’s a bit buggy! You see, you can’t put your shoes on before your socks! That would be like trying to put on a hat before your shirt! The fix is super easy: let’s swap steps 1 and 2 around. First, we need to put on the socks, and then we can put on the shoes! Now Robo is all dressed and ready to go on his adventures! Hooray for fixing bugs! 🐛→✅\nContext recap: Let’s help our friend Robo with a little problem he’s having! Robo is trying to get dressed all by himself, but something is not quite right. Here are the steps Robo is following: Step 1: Put on shoes 👟, Step 2: Put on socks 🧦, and Step 3: Put on pants 👖. Oh no!\nWhy this matters: Robo's Buggy Morning helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "prek-coding-l09-c3",
          "title": "Everyone Makes Bugs!",
          "content": "Here’s a little secret: even the best coders in the whole wide world make bugs sometimes! 🌍 It’s totally okay to make mistakes. What’s really important is not to worry about being perfect. Instead, we want to be great bug hunters! This means checking our steps, looking for what might be wrong, and then fixing it. This process is called debugging, and it’s one of the most important skills a coder can have. Debugging is like being a detective! You get to search for clues to find out what went wrong. So remember, making mistakes is just part of learning! When we find a bug and fix it, we become better coders. Every time we debug, we learn something new that helps us in our coding adventures. So let’s embrace our mistakes and turn them into opportunities to grow and improve! Coding is all about trying, learning, and having fun together! 🎉\nContext recap: Here’s a little secret: even the best coders in the whole wide world make bugs sometimes! 🌍 It’s totally okay to make mistakes. What’s really important is not to worry about being perfect. Instead, we want to be great bug hunters!\nWhy this matters: Everyone Makes Bugs! helps learners in Coding connect ideas from Pre-K Coding Adventures to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
