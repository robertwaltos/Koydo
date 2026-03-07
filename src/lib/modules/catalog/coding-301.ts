import type { LearningModule } from "@/lib/modules/types";

export const coding_301_Module: LearningModule = {
  "id": "coding-301",
  "title": "Coding Architecture and Quality",
  "description": "Write maintainable code with modular architecture, testing, and performance-aware design.",
  "subject": "Coding",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts in Coding Architecture",
    "Apply Reliability and Correctness strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "coding-301-l01",
      "title": "Modular Architecture Basics",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A vibrant, 3D isometric illustration of glowing, colorful building blocks snapping together to form a futuristic computer brain, representing modular code. Bright, engaging, and highly detailed, Unreal Engine 5 style.",
      "conceptVideoPrompt": "A dynamic 3D animation showing a messy pile of glowing code blocks magically organizing themselves into neat, labeled containers. The camera pans around as the containers connect via glowing data streams, cinematic lighting, educational and engaging.",
      "chunks": [
        {
          "id": "coding-301-l01-c1",
          "title": "Modular Architecture Basics Overview",
          "content": "Welcome to the fascinating world of modularity! Imagine trying to build a massive Lego castle all at once—it would be overwhelming. But if you build the towers, the walls, and the drawbridge separately, it becomes much easier. Modularity in coding is exactly the same. It's all about breaking down big, complex programs into smaller, easier-to-handle pieces called 'modules'. This way, we can tackle complex problems step by step, making our code easier to read, fix, and upgrade!"
        },
        {
          "id": "coding-301-l01-c2",
          "title": "Core Concept: Modularity and Testing",
          "content": "Modularity and test design work hand in hand like a superhero team. When you build your code in small modules, you can test each piece individually to make sure it works perfectly before connecting it to the rest of the program. First, we identify the main goal of our module. Next, we write a test—a mini-program that checks if our module does its job. This process ensures our foundation is solid and bug-free!"
        },
        {
          "id": "coding-301-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example! Suppose we are building a calculator app. Instead of writing one giant block of code, we create a 'Addition Module' and a 'Subtraction Module'. Our goal for the Addition Module is simple: take two numbers and return their sum. We then design a test: 'If I give the module 2 and 3, does it return 5?' We run the test, verify the result, and boom—we know our module is reliable!"
        },
        {
          "id": "coding-301-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Think of a video game you love. How would you break the game down into smaller modules? (For example: a Player Movement module, a Score module, an Enemy AI module). Write down three modules you would create and explain in one clear sentence why breaking the game into these pieces makes it easier to build. Practice makes perfect!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l01-f1",
          "front": "Modularity",
          "back": "Breaking a large program into smaller, independent, and manageable pieces."
        },
        {
          "id": "coding-301-l01-f2",
          "front": "Test Design",
          "back": "Creating specific checks to ensure a piece of code works exactly as expected."
        },
        {
          "id": "coding-301-l01-f3",
          "front": "Verification",
          "back": "Running your tests to check that the result matches your original goal."
        },
        {
          "id": "coding-301-l01-f4",
          "front": "Module",
          "back": "A separate, interchangeable part of a program that handles a specific task."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing a giant robot made of smaller, labeled modular parts."
        },
        {
          "id": "coding-301-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation showing a messy room being organized into neat, labeled boxes."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l01.png"
    },
    {
      "id": "coding-301-l02",
      "title": "Designing Reliable Tests",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "A futuristic laboratory desk with a glowing holographic blueprint of a software program being scanned by a robotic magnifying glass, symbolizing testing and reliability.",
      "conceptVideoPrompt": "A first-person view of a digital puzzle being assembled. When a wrong piece is placed, it glows red and is rejected (testing). When the correct piece is placed, it glows green and locks in, accompanied by a satisfying sound effect.",
      "metadata": {
        "prompts": [
          "Identify one core idea about modularity from this lesson.",
          "Explain where test design appears in real life.",
          "Describe one question you still have about software architecture and quality."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l02-ia1",
          "type": "drag_and_drop",
          "title": "Practice Flow Builder",
          "description": "Sort each action into Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "execute",
                "label": "Execute"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for what the module should do",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Write and run the test code",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review the test results and fix any bugs",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on test design and write one reflection."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l02.png"
    },
    {
      "id": "coding-301-l03",
      "title": "Checkpoint: Code Quality Foundations",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital checkpoint gate in a cyber-city, with green checkmarks floating around it, symbolizing passing a coding quality test.",
      "conceptVideoPrompt": "A fast-paced, energetic animation of a race car passing through a glowing green checkpoint on a neon track, with a 'Code Quality Verified' holographic sign flashing above.",
      "questions": [
        {
          "id": "coding-301-l03-q1",
          "text": "What is modularity in coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Breaking a large program into smaller, independent pieces."
            },
            {
              "id": "b",
              "text": "Writing all of your code in one giant file."
            },
            {
              "id": "c",
              "text": "Making the computer run faster by deleting files."
            },
            {
              "id": "d",
              "text": "Changing the colors and fonts of an application."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q2",
          "text": "Why do we design tests for our code?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To check if our code works as expected and catch bugs early."
            },
            {
              "id": "b",
              "text": "To make the code look longer and more impressive."
            },
            {
              "id": "c",
              "text": "To slow down the computer so it doesn't overheat."
            },
            {
              "id": "d",
              "text": "To automatically write new features for the app."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q3",
          "text": "Which of these is an example of a good software test?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Checking if a calculator app correctly adds 2 + 2 to get 4."
            },
            {
              "id": "b",
              "text": "Guessing that the app works without actually running it."
            },
            {
              "id": "c",
              "text": "Asking a friend if they like the app's logo."
            },
            {
              "id": "d",
              "text": "Writing more code without checking if the old code works."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l03-q4",
          "text": "What is a major benefit of using modular architecture?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It becomes much easier to find mistakes and update specific parts of the app."
            },
            {
              "id": "b",
              "text": "The code becomes impossible for anyone else to read."
            },
            {
              "id": "c",
              "text": "You can never change the code again once it is written."
            },
            {
              "id": "d",
              "text": "It guarantees that your computer will never crash."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Code Quality Foundations",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Confusion about what a module is"
              },
              {
                "id": "l2",
                "label": "Forgetting to test code before moving on"
              },
              {
                "id": "l3",
                "label": "Writing tests that don't actually check the goal"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review the Lego block analogy and break a task into 3 parts"
              },
              {
                "id": "r2",
                "label": "Use a 'Plan, Code, Test' checklist for every new feature"
              },
              {
                "id": "r3",
                "label": "Clearly define the expected output before writing the test"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase 'Plan, Code, Test' for every new feature you build."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l03.png"
    },
    {
      "id": "coding-301-l04",
      "title": "State, Side Effects, and Control Flow",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A vibrant digital scoreboard in a futuristic stadium, with numbers rapidly changing, representing 'State', while glowing wires connect to external screens, representing 'Side Effects'.",
      "conceptVideoPrompt": "An animated character is baking a cake. The recipe steps represent 'Control Flow'. The current ingredients in the bowl represent 'State'. When the character accidentally spills flour on the floor, a glowing label pops up saying 'Side Effect!'.",
      "chunks": [
        {
          "id": "coding-301-l04-c1",
          "title": "Understanding State",
          "content": "In this lesson, we will take a deeper look at two massive concepts in coding: 'State' and 'Side Effects'. Think of 'State' like the scoreboard in a basketball game. It remembers the current score, what quarter it is, and how many timeouts are left. In coding, State is the data your program remembers at any given moment, like a player's health or the items in a shopping cart. Managing state carefully is the key to making reliable apps!"
        },
        {
          "id": "coding-301-l04-c2",
          "title": "What are Side Effects?",
          "content": "Now, what is a 'Side Effect'? Imagine you are reading a book in your room, but every time you turn a page, the lights in the kitchen flicker. That's a side effect! In coding, a side effect happens when a function changes something outside of itself—like updating a global variable, saving data to a hard drive, or changing what's on the screen. While side effects are necessary, too many hidden ones can make your code unpredictable and hard to fix."
        },
        {
          "id": "coding-301-l04-c3",
          "title": "Control Flow and Common Mistakes",
          "content": "Control flow is the order in which your code runs, like following a recipe step-by-step. A common mistake is letting side effects mess up your control flow. For example, if a function that is only supposed to calculate math accidentally resets the player's score to zero, you've got a bug! To avoid this, keep your functions 'pure' whenever possible—meaning they only use the data given to them and return a result without messing with the outside world."
        },
        {
          "id": "coding-301-l04-c4",
          "title": "Independent Try",
          "content": "Let's test your knowledge! Imagine a function called 'calculateDamage(attackPower)'. If this function takes the attack power, multiplies it by 2, and returns the result, is that a side effect? No! But if it also plays a loud explosion sound on the speakers, is THAT a side effect? Yes! Try to look at a piece of code you've written recently and identify one piece of 'State' and one 'Side Effect'."
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l04-f1",
          "front": "State",
          "back": "The current data or condition a program remembers at any given time."
        },
        {
          "id": "coding-301-l04-f2",
          "front": "Side Effect",
          "back": "When a function modifies something outside of its own scope."
        },
        {
          "id": "coding-301-l04-f3",
          "front": "Pure Function",
          "back": "A function that always produces the same output for the same input and has no side effects."
        },
        {
          "id": "coding-301-l04-f4",
          "front": "Control Flow",
          "back": "The order in which individual statements and instructions are executed in a program."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals showing a pure function vs a function with side effects."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l04.png"
    },
    {
      "id": "coding-301-l05",
      "title": "Debugging with Hypothesis Testing",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A young detective with a glowing magnifying glass examining a line of code that has a small, cute cartoon bug sitting on it. Cyberpunk aesthetic.",
      "conceptVideoPrompt": "A split-screen animation. On the left, a programmer randomly smashes the keyboard in frustration. On the right, a programmer calmly writes down a hypothesis on a glowing notepad, tests it, and a green checkmark appears. The right side is highlighted as the correct method.",
      "metadata": {
        "prompts": [
          "Pick one coding challenge and outline your debugging approach.",
          "Test your hypothesis and record the result.",
          "Revise your approach based on the error message."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "State & Side Effects Concept"
              },
              {
                "id": "process",
                "label": "Debugging Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Identify what data is currently stored in memory",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Form a hypothesis about why the code crashed",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Document the bug and how you fixed it for next time",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence showing the scientific method applied to fixing a broken video game jump mechanic."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l05.png"
    },
    {
      "id": "coding-301-l06",
      "title": "Checkpoint: Reliability and Correctness",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing shield icon with a checkmark inside, surrounded by floating lines of code, representing software reliability and protection against bugs.",
      "conceptVideoPrompt": "A 3D animation of a bridge made of code blocks. A heavy digital truck drives over it. The bridge holds strong, glowing blue, symbolizing reliable and correct code architecture.",
      "questions": [
        {
          "id": "coding-301-l06-q1",
          "text": "What does 'state' mean in coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The current data or condition a program remembers, like a player's score."
            },
            {
              "id": "b",
              "text": "The physical location where the computer is running."
            },
            {
              "id": "c",
              "text": "A type of error that causes the program to crash."
            },
            {
              "id": "d",
              "text": "The speed at which the code executes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q2",
          "text": "What is a 'side effect' in a function?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "When a function changes something outside of itself, like updating a global variable."
            },
            {
              "id": "b",
              "text": "When a function runs perfectly without any errors."
            },
            {
              "id": "c",
              "text": "When the code is too long and takes up too much memory."
            },
            {
              "id": "d",
              "text": "When the computer screen turns off automatically."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q3",
          "text": "Why is it helpful to limit side effects in your code?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It makes the code easier to predict, test, and debug."
            },
            {
              "id": "b",
              "text": "It makes the code run much slower."
            },
            {
              "id": "c",
              "text": "It stops the computer from working entirely."
            },
            {
              "id": "d",
              "text": "It makes the code harder for other people to read."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l06-q4",
          "text": "How should you start debugging a complex problem?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Form a hypothesis about what went wrong and test it step-by-step."
            },
            {
              "id": "b",
              "text": "Delete all the code and start over from scratch."
            },
            {
              "id": "c",
              "text": "Change random lines of code until it magically works."
            },
            {
              "id": "d",
              "text": "Ignore the error and hope it goes away on its own."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Reliability and Correctness",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Code behaves unpredictably every time it runs"
              },
              {
                "id": "l2",
                "label": "A function is changing data it shouldn't touch"
              },
              {
                "id": "l3",
                "label": "Stuck on a bug for over an hour"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Check for hidden side effects modifying global state"
              },
              {
                "id": "r2",
                "label": "Rewrite it as a pure function that only returns a value"
              },
              {
                "id": "r3",
                "label": "Stop guessing, write down a hypothesis, and test one thing at a time"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Remember: Pure functions are predictable. Side effects are sneaky!"
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l06.png"
    },
    {
      "id": "coding-301-l07",
      "title": "Performance and Readability Tradeoffs",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A sleek, futuristic sports car (representing performance) parked next to a comfortable, easy-to-drive family SUV with clear dashboard labels (representing readability), glowing in a neon garage.",
      "conceptVideoPrompt": "An animation of a scale balancing a glowing lightning bolt (speed/performance) on one side, and an open, glowing book (readability) on the other. The scale tips back and forth before finding a perfect balance.",
      "chunks": [
        {
          "id": "coding-301-l07-c1",
          "title": "The Great Balancing Act",
          "content": "Welcome to the world of tradeoffs! In coding, we often have to choose between making our code run incredibly fast (Performance) and making it easy for humans to understand (Readability). Think of it like cars: a Formula 1 race car is super fast, but it's really hard to drive and maintain. A family car might be slower, but anyone can drive it easily. Planning ahead helps us decide which 'car' our project needs!"
        },
        {
          "id": "coding-301-l07-c2",
          "title": "Decision Rules for Tradeoffs",
          "content": "When you have to choose between a complex, fast solution and a simple, slightly slower one, follow this rule: Always prioritize readability first, unless the code is too slow for the user. Why? Because code is read by humans much more often than it is written! If you write super-fast code that looks like alien gibberish, future-you (or your teammates) won't be able to fix it when a bug appears."
        },
        {
          "id": "coding-301-l07-c3",
          "title": "Quality Control and Refactoring",
          "content": "As you review your work, check for three things: Does it work? Is it easy to read? Is it fast enough? If your code works but is messy, you can 'Refactor' it. Refactoring means cleaning up the code's structure without changing what it actually does. It's like organizing a messy closet—you still have all the same clothes, but now you can actually find your favorite shirt!"
        },
        {
          "id": "coding-301-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your next coding practice, take a moment to reflect. Ask yourself: 'Could another programmer understand what I just wrote?' Write down one thing you did well (like using clear variable names) and one thing you want to improve (like adding helpful comments). This reflection is what turns good coders into great software architects!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l07-f1",
          "front": "Performance Tradeoff",
          "back": "Choosing between making code execute faster vs. making it easier to read and maintain."
        },
        {
          "id": "coding-301-l07-f2",
          "front": "Readability",
          "back": "How easily a human can understand the logic and purpose of your code."
        },
        {
          "id": "coding-301-l07-f3",
          "front": "Refactoring",
          "back": "Improving the internal structure of code without changing its external behavior."
        },
        {
          "id": "coding-301-l07-f4",
          "front": "Optimization Rule",
          "back": "Make it work, make it readable, and only then make it fast (if necessary)."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on balancing performance and readability."
        }
      ]
    },
    {
      "id": "coding-301-l08",
      "title": "Refactor Sprint Workshop",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "A digital workshop with glowing tools floating in the air. A messy block of code is being hammered and polished into a sleek, shiny, organized block of code.",
      "conceptVideoPrompt": "A fast-paced timelapse animation of a messy, tangled web of glowing wires (representing bad code) being quickly untangled, color-coded, and neatly routed into a server rack (representing refactoring).",
      "metadata": {
        "prompts": [
          "What did you learn most clearly about refactoring?",
          "Where did you struggle when trying to make code readable?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My code works, but the variable names are confusing (e.g., x, y, z)"
              },
              {
                "id": "l2",
                "label": "I wrote a giant function that does 10 different things"
              },
              {
                "id": "l3",
                "label": "My code is readable, but it runs very slowly"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rename variables to describe what they hold (e.g., playerScore, timeRemaining)"
              },
              {
                "id": "r2",
                "label": "Break the giant function into smaller, modular functions"
              },
              {
                "id": "r3",
                "label": "Look for performance bottlenecks and optimize the slow parts"
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
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Make it Work, Make it Right, Make it Fast."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l08.png"
    },
    {
      "id": "coding-301-l09",
      "title": "Review: Engineering Habits",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing holographic brain with gears turning inside, surrounded by floating icons of checklists, clocks, and code brackets, representing good engineering habits.",
      "conceptVideoPrompt": "An animation of a robot programmer going through a morning routine: checking a blueprint (planning), organizing tools (modularity), and putting on safety goggles (testing), showing good engineering habits.",
      "questions": [
        {
          "id": "coding-301-l09-q1",
          "text": "What is a performance tradeoff in coding?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Choosing between making code run faster or making it easier to read."
            },
            {
              "id": "b",
              "text": "Trading your old computer for a faster new one."
            },
            {
              "id": "c",
              "text": "Deleting important code to save hard drive space."
            },
            {
              "id": "d",
              "text": "Writing code in a completely different language."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q2",
          "text": "Why is readable code so important?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It helps other programmers (and future you) understand and update the code easily."
            },
            {
              "id": "b",
              "text": "It makes the computer's processor run faster."
            },
            {
              "id": "c",
              "text": "It uses less battery power on mobile devices."
            },
            {
              "id": "d",
              "text": "It automatically prevents all bugs from happening."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q3",
          "text": "If a piece of code is extremely fast but impossible to understand, what is the biggest risk?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It will be very hard to fix if a bug is found later."
            },
            {
              "id": "b",
              "text": "It will automatically rewrite itself to be slower."
            },
            {
              "id": "c",
              "text": "It will be considered the best code ever written."
            },
            {
              "id": "d",
              "text": "It will crash the entire internet."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l09-q4",
          "text": "What does 'refactoring' mean?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Improving the structure and readability of code without changing what it does."
            },
            {
              "id": "b",
              "text": "Adding brand new features to an application."
            },
            {
              "id": "c",
              "text": "Deleting the entire project and starting over."
            },
            {
              "id": "d",
              "text": "Writing a completely new program from scratch."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Engineering Habits",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Code is a mess and hard to read"
              },
              {
                "id": "l2",
                "label": "Code is readable but lags during gameplay"
              },
              {
                "id": "l3",
                "label": "Afraid to change code because it might break"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Refactor by renaming variables and adding comments"
              },
              {
                "id": "r2",
                "label": "Profile the code to find the slow parts and optimize them"
              },
              {
                "id": "r3",
                "label": "Write tests first, so you know immediately if you break something"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Good habits: Plan, Code, Test, Refactor."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l09.png"
    },
    {
      "id": "coding-301-l10",
      "title": "Mastery: Coding III",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A golden trophy shaped like a curly bracket {}, glowing on a high-tech pedestal, symbolizing mastery in coding architecture.",
      "conceptVideoPrompt": "A cinematic fly-through of a massive, perfectly organized digital city made of code blocks. Everything runs smoothly, data flows like glowing rivers, representing a mastered coding architecture.",
      "questions": [
        {
          "id": "coding-301-l10-q1",
          "text": "Which of the following is the best description of modularity?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Designing software as a collection of separate, interchangeable components."
            },
            {
              "id": "b",
              "text": "Writing code that executes as fast as possible."
            },
            {
              "id": "c",
              "text": "Ensuring that a program has no side effects."
            },
            {
              "id": "d",
              "text": "Using the newest programming language available."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q2",
          "text": "What is the best first step when analyzing a bug related to 'state'?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Check what data is currently stored in memory and see if it matches your expectations."
            },
            {
              "id": "b",
              "text": "Delete the function and write it again from memory."
            },
            {
              "id": "c",
              "text": "Assume the computer's hardware is broken."
            },
            {
              "id": "d",
              "text": "Skip the bug and work on a different feature."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q3",
          "text": "How should you balance performance and readability?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Prioritize readability first, and only optimize for performance if the code is too slow."
            },
            {
              "id": "b",
              "text": "Always write the fastest code possible, even if it's impossible to read."
            },
            {
              "id": "c",
              "text": "Always write the most readable code, even if it takes 10 minutes to load."
            },
            {
              "id": "d",
              "text": "Ignore both and just copy code from the internet."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l10-q4",
          "text": "Why is writing tests useful for coding mastery?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It proves your code works and protects against future bugs when you make changes."
            },
            {
              "id": "b",
              "text": "It makes the code run faster for the user."
            },
            {
              "id": "c",
              "text": "It removes the need to ever read your code again."
            },
            {
              "id": "d",
              "text": "It is only useful for getting a good grade in school."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery",
          "description": "Match each concept to its best real-world analogy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Modularity"
              },
              {
                "id": "l2",
                "label": "State"
              },
              {
                "id": "l3",
                "label": "Refactoring"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Building a castle out of separate Lego blocks"
              },
              {
                "id": "r2",
                "label": "A scoreboard keeping track of the current points in a game"
              },
              {
                "id": "r3",
                "label": "Organizing a messy closet so you can find things easily"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Mastery means understanding the 'Why', not just the 'How'."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l10.png"
    },
    {
      "id": "coding-301-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A high-tech coding studio with multiple glowing monitors displaying complex code, a comfortable chair, and a neon sign that says 'Challenge Accepted'.",
      "conceptVideoPrompt": "A time-lapse of a student sitting at a futuristic desk, intensely focused on a coding challenge. Holographic code floats around them. They hit 'Enter', and the room lights up with celebratory digital fireworks.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using state and side effects.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder",
          "description": "Sort actions into Diagnose, Fix, and Transfer phases.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose"
              },
              {
                "id": "fix",
                "label": "Fix"
              },
              {
                "id": "transfer",
                "label": "Transfer"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Identify that you keep confusing state with side effects",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rewrite a broken function to remove hidden side effects",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Apply the pure function rule to a brand new coding project",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l11.png"
    },
    {
      "id": "coding-301-l12",
      "title": "Coding III Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital target with an arrow hitting the dead center, surrounded by binary code, representing hitting the mark on a retest.",
      "conceptVideoPrompt": "An animation of a character failing to jump over a digital hurdle, then analyzing the jump, adjusting their stance, and successfully leaping over it on the second try, glowing with success.",
      "questions": [
        {
          "id": "coding-301-l12-q1",
          "text": "Which of the following is an example of a side effect?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A function modifying a global variable outside of its scope."
            },
            {
              "id": "b",
              "text": "A function returning the sum of two numbers."
            },
            {
              "id": "c",
              "text": "A function declaring a local variable."
            },
            {
              "id": "d",
              "text": "A function running very quickly."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q2",
          "text": "What is the best first step when debugging a complex program?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Isolate the problem by testing small, modular parts of the code."
            },
            {
              "id": "b",
              "text": "Guess quickly and change random lines of code."
            },
            {
              "id": "c",
              "text": "Rewrite the entire program from scratch."
            },
            {
              "id": "d",
              "text": "Ignore the error if it only happens sometimes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q3",
          "text": "What is the primary goal of refactoring?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To make the code cleaner, more readable, and easier to maintain."
            },
            {
              "id": "b",
              "text": "To add new features to the software."
            },
            {
              "id": "c",
              "text": "To intentionally make the code harder for others to steal."
            },
            {
              "id": "d",
              "text": "To change the programming language used."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l12-q4",
          "text": "What is a key characteristic of modular code?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It is divided into separate, interchangeable modules that handle specific tasks."
            },
            {
              "id": "b",
              "text": "It is written entirely in one long file."
            },
            {
              "id": "c",
              "text": "It cannot be tested until the entire project is finished."
            },
            {
              "id": "d",
              "text": "It relies heavily on global variables and side effects."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Applied Retest",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Still confused about modularity"
              },
              {
                "id": "l2",
                "label": "Rushing and making silly syntax errors"
              },
              {
                "id": "l3",
                "label": "Failing to apply concepts to new problems"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Draw a diagram of how the parts of your app connect"
              },
              {
                "id": "r2",
                "label": "Slow down and use a checklist before running the code"
              },
              {
                "id": "r3",
                "label": "Practice with a completely different scenario or mini-project"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l12.png"
    },
    {
      "id": "coding-301-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A futuristic laboratory with glowing test tubes containing floating lines of code, and a large holographic screen displaying a complex software architecture map.",
      "conceptVideoPrompt": "A 3D animation of a virtual city being built. First, the foundation is laid (modularity), then traffic lights are added (control flow/state), and finally, the roads are smoothed out for faster driving (performance optimization).",
      "chunks": [
        {
          "id": "coding-301-l13-c1",
          "title": "Scenario Brief",
          "content": "Welcome to the Scenario Lab! Today, you are the Lead Architect for a new social media app. We need to apply everything we've learned: modularity (breaking the app into a feed, profile, and messaging system), managing state (keeping track of who is logged in), and performance tradeoffs (making sure images load fast without making the code a mess). This challenge will help you apply these ideas in a fun, real-world way!"
        },
        {
          "id": "coding-301-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this massive app, start by breaking it down. Think of each feature as a puzzle piece. The 'Messaging Module' needs to handle sending texts. The 'Profile Module' handles user pictures. By assigning a clear approach to each piece, you create a well-organized plan. This method keeps you from getting overwhelmed and ensures every part of the app gets the attention it needs."
        },
        {
          "id": "coding-301-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you build the Messaging Module, you decide to use pure functions to format the text. Why? Because it prevents side effects from accidentally deleting messages! As you execute each step, explain your reasoning clearly. Using evidence from your plan to support your choices shows that you are thinking like a true software engineer."
        },
        {
          "id": "coding-301-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your coding task, it's important to evaluate the outcome. Does the app run smoothly? Is the code easy for your teammates to read? Take a moment to compare your results with the original goal. Identify what worked perfectly and what might need a little refactoring. This reflection is the secret to continuous improvement!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-301-l13-f1",
          "front": "Scenario Planning",
          "back": "Splitting a complex, real-world task into clear, modular decision points."
        },
        {
          "id": "coding-301-l13-f2",
          "front": "Evidence Link",
          "back": "Connecting every coding decision you make to a specific goal or requirement."
        },
        {
          "id": "coding-301-l13-f3",
          "front": "Adjustment Loop",
          "back": "Using outcome checks (testing) to refine and refactor your next attempt."
        },
        {
          "id": "coding-301-l13-f4",
          "front": "Applied Mastery",
          "back": "Successfully transferring your coding knowledge to a brand new, unfamiliar context."
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting modularity, state and side effects, and performance tradeoffs."
        },
        {
          "id": "coding-301-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l13.png"
    },
    {
      "id": "coding-301-l14",
      "title": "Coding Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A digital clinic with a friendly robot doctor holding a clipboard with code on it, diagnosing a 'sick' piece of software.",
      "conceptVideoPrompt": "An animation of a sports coach drawing a play on a glowing digital whiteboard. The 'players' are blocks of code. The coach rearranges them to form a winning, modular strategy.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-301-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeatedly writing giant, messy functions"
              },
              {
                "id": "l2",
                "label": "Code runs fast but is impossible to read later"
              },
              {
                "id": "l3",
                "label": "Understand the concepts, but freeze up during quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Practice breaking one big function into three smaller modules"
              },
              {
                "id": "r2",
                "label": "Focus on the 'Readability First' rule and rename variables"
              },
              {
                "id": "r3",
                "label": "Do timed practice drills to build confidence under pressure"
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
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-301-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the bug, Correct the code, Transfer the knowledge."
        }
      ]
    },
    {
      "id": "coding-301-l15",
      "title": "Coding III Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing finish line ribbon being broken by a fast-moving stream of binary code, symbolizing completing the final mastery sprint.",
      "conceptVideoPrompt": "A high-energy montage of all the concepts learned: Lego blocks snapping together (modularity), a scoreboard updating (state), a scale balancing (tradeoffs), ending with a golden 'Mastery Achieved' badge.",
      "questions": [
        {
          "id": "coding-301-l15-q1",
          "text": "What is the best practice when starting a large software project?",
          "skillId": "coding-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Use modular architecture to break the project into smaller pieces and write clear tests."
            },
            {
              "id": "b",
              "text": "Start writing code immediately in one large file to save time."
            },
            {
              "id": "c",
              "text": "Focus entirely on making the code fast, ignoring readability."
            },
            {
              "id": "d",
              "text": "Avoid writing tests until the very end of the project."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q2",
          "text": "How should you manage 'state' in a reliable application?",
          "skillId": "coding-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Keep state changes predictable and localized, avoiding unnecessary side effects."
            },
            {
              "id": "b",
              "text": "Use global variables for everything so any function can change the state."
            },
            {
              "id": "c",
              "text": "Never use state; applications shouldn't remember any data."
            },
            {
              "id": "d",
              "text": "Let side effects happen randomly to keep the code interesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q3",
          "text": "When should you optimize your code for performance?",
          "skillId": "coding-301-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Only when necessary, ensuring the code is readable and working correctly first."
            },
            {
              "id": "b",
              "text": "Before you even know if the code works."
            },
            {
              "id": "c",
              "text": "Always, even if it makes the code impossible for humans to read."
            },
            {
              "id": "d",
              "text": "Never; computers are fast enough that performance doesn't matter."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-301-l15-q4",
          "text": "What is the key to continuous improvement in software engineering?",
          "skillId": "coding-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Regularly reviewing, testing, and refactoring your code to maintain high quality."
            },
            {
              "id": "b",
              "text": "Writing code once and never looking at it again."
            },
            {
              "id": "c",
              "text": "Memorizing every programming language."
            },
            {
              "id": "d",
              "text": "Deleting old projects to make room for new ones."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-301-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Final Sprint",
          "description": "Match each error signal to the strongest correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each left-side signal.",
            "Pick the best response on the right.",
            "Use your matches to plan the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Forgetting to test edge cases"
              },
              {
                "id": "l2",
                "label": "Code is tightly coupled and hard to separate"
              },
              {
                "id": "l3",
                "label": "Struggling to remember the difference between state and side effects"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write tests for weird inputs (like negative numbers or empty text)"
              },
              {
                "id": "r2",
                "label": "Refactor using modular architecture principles"
              },
              {
                "id": "r3",
                "label": "Review the 'Scoreboard vs. Flickering Lights' analogy"
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
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
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
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "coding-301-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "You've mastered the basics! Keep building, keep testing, keep refactoring."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-301-l15.png"
    }
  ]
};
