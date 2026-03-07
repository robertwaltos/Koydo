import type { LearningModule } from "@/lib/modules/types";

export const coding_401_Module: LearningModule = {
  "id": "coding-401",
  "title": "Coding Capstone Systems",
  "description": "Build robust software workflows using architecture, testing, observability, and iteration.",
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
    "Understand core concepts in software system architecture.",
    "Apply Engineering Decision Quality strategies through guided practice.",
    "Demonstrate mastery in debugging, refactoring, and testing with subject-specific quizzes."
  ],
  "lessons": [
    {
      "id": "coding-401-l01",
      "title": "Architecture for Maintainability",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A colorful, 3D animated illustration of a glowing digital blueprint transforming into a futuristic, well-organized city made of glowing code blocks, symbolizing system architecture.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A high-quality educational 3D animation showing a messy pile of digital blocks magically organizing themselves into a strong, structured glowing tower, representing maintainable software architecture.",
      "chunks": [
        {
          "id": "coding-401-l01-c1",
          "title": "Architecture for Maintainability Overview",
          "content": "In this lesson, we will dive into the fascinating world of system architecture, which is a key concept when we create software systems for our capstone projects. System architecture is like the blueprint of a building; it shows how different parts fit together and work as a whole. By understanding how each component of a system interacts, we can design software that is not only functional but also easy to maintain and enhance over time. This knowledge will empower us to create robust and efficient systems that can adapt to future needs."
        },
        {
          "id": "coding-401-l01-c2",
          "title": "Core Concept: The Blueprint",
          "content": "System architecture and test strategies are closely connected. First, we need to clearly define our main target or goal for the project. Once we have that, we can identify the steps that will support our goal. This means thinking about how each part of our system will work together—like gears in a clock—and how we can test it to ensure everything functions as intended without breaking."
        },
        {
          "id": "coding-401-l01-c3",
          "title": "Worked Example: Building a Login System",
          "content": "Let's go through a guided example together. Imagine we are building a login screen. First, we define our goal: users must be able to log in securely. Next, we apply a test strategy: we will test what happens when a user enters the right password, and what happens when they enter the wrong one. Finally, we verify our results with a quick check to make sure the system blocks incorrect passwords. This hands-on approach solidifies our understanding."
        },
        {
          "id": "coding-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Try applying the same process to a new scenario: a shopping cart in an app. What is the goal? How would you test it? As you work through it, make sure to explain why your approach is valid in one clear sentence. This will help you practice articulating your reasoning and strengthen your understanding of system architecture."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l01-f1",
          "front": "System Architecture",
          "back": "The blueprint of how different parts of a software system fit together."
        },
        {
          "id": "coding-401-l01-f2",
          "front": "Test Strategy",
          "back": "A planned method to check if your software works as intended."
        },
        {
          "id": "coding-401-l01-f3",
          "front": "Verification",
          "back": "Checking that your result matches the original goal and constraints."
        },
        {
          "id": "coding-401-l01-f4",
          "front": "Maintainability",
          "back": "Writing code in a way that makes it easy to fix and update in the future."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic showing a house blueprint next to a software architecture diagram."
        },
        {
          "id": "coding-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Coding vocabulary like 'Architecture' and 'Testing'."
        }
      ]
    },
    {
      "id": "coding-401-l02",
      "title": "Testing Strategy at Scale",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A vibrant 3D illustration of a robot holding a magnifying glass, inspecting a long conveyor belt of glowing digital boxes, representing software testing at scale.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation showing a single line of code being tested, which then zooms out to show thousands of lines of code being scanned by a futuristic laser grid, symbolizing scalable testing.",
      "metadata": {
        "prompts": [
          "Identify one core idea about system architecture from this lesson.",
          "Explain where test strategy appears in real life.",
          "Describe one question you still have about capstone software systems thinking."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l02-ia1",
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
                "label": "Set a goal for system architecture",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Run the automated test suite",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Record what worked and what to improve",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on test strategy and write one reflection."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l02.png"
    },
    {
      "id": "coding-401-l03",
      "title": "Checkpoint: Capstone Engineering Setup",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D isometric view of a digital checkpoint station with a glowing green checkmark, surrounded by floating holographic code snippets.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced, engaging motion graphics video showing a checklist being ticked off one by one as a digital rocket prepares for launch.",
      "questions": [
        {
          "id": "coding-401-l03-q1",
          "text": "What is the best definition of system architecture in coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The blueprint of how different software parts fit and work together."
            },
            {
              "id": "b",
              "text": "The physical color and shape of the computer monitor."
            },
            {
              "id": "c",
              "text": "A type of internet browser used for downloading games."
            },
            {
              "id": "d",
              "text": "Typing code as fast as possible without planning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q2",
          "text": "What is the best first step when creating a test strategy?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and identify exactly what needs to be tested."
            },
            {
              "id": "b",
              "text": "Guess quickly and hope the code works."
            },
            {
              "id": "c",
              "text": "Delete old files to make room for the test."
            },
            {
              "id": "d",
              "text": "Skip the planning phase and jump straight to writing code."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q3",
          "text": "Which option shows strong reasoning when building a capstone software system?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Breaking the system into smaller components and verifying each step."
            },
            {
              "id": "b",
              "text": "Ignoring important details and edge cases to finish faster."
            },
            {
              "id": "c",
              "text": "Using random code snippets from the internet without understanding them."
            },
            {
              "id": "d",
              "text": "Changing the project goal every time a bug appears."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l03-q4",
          "text": "Why is spaced review useful for mastering coding concepts?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and helps you transfer skills to new projects."
            },
            {
              "id": "b",
              "text": "It creates confusion by mixing up old and new topics."
            },
            {
              "id": "c",
              "text": "It removes key facts from your short-term memory."
            },
            {
              "id": "d",
              "text": "It has no value in computer science."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Engineering Setup",
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
                "label": "Confusion about system architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to test strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with a diagram"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final test plan"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l03.png"
    },
    {
      "id": "coding-401-l04",
      "title": "Debug Instrumentation Workflows",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital magnifying glass hovering over lines of code, highlighting a small, cute bug character hiding between the letters.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A sleek animation showing a detective's dashboard with glowing logs, graphs, and code snippets, zooming in to isolate and fix a red error line.",
      "chunks": [
        {
          "id": "coding-401-l04-c1",
          "title": "Debug Instrumentation Workflows Focus",
          "content": "In this lesson, we will dive deeper into the topic of debug instrumentation. Think of debugging like being a digital detective. Instrumentation means setting up tools—like logs, alerts, and breakpoints—that help us see exactly what our code is doing behind the scenes. We will move beyond just guessing to making applied decisions that will help us debug our systems effectively and logically."
        },
        {
          "id": "coding-401-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps for effective debugging. Step 1: Identify the exact error (What is broken?). Step 2: Choose an instrumentation strategy, like adding print statements or checking error logs. Step 3: Justify your choice with evidence. For example, 'I am checking the database log because the error says data is missing.' Following these steps keeps you organized."
        },
        {
          "id": "coding-401-l04-c3",
          "title": "Common Mistakes",
          "content": "As we learn about debugging, it's important to avoid common traps. Some of these include skipping the setup process, making wild guesses without reading the error message, or failing to verify if your fix actually worked. By recognizing these errors, we can avoid them and become much faster at solving complex coding puzzles."
        },
        {
          "id": "coding-401-l04-c4",
          "title": "Independent Try",
          "content": "Now, I encourage you to solve a similar problem on your own. Imagine a button on your app isn't working. Where would you put a 'log' to see what's happening? After you finish, compare your process with the sequence we discussed. This reflection will help you understand what you did well and where you can improve."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l04-f1",
          "front": "Debug Instrumentation",
          "back": "Using tools like logs and breakpoints to monitor and fix code."
        },
        {
          "id": "coding-401-l04-f2",
          "front": "Step Sequence",
          "back": "Identify Error -> Choose Tool -> Gather Evidence -> Verify Fix."
        },
        {
          "id": "coding-401-l04-f3",
          "front": "Assumption Check",
          "back": "Don't guess! Read the error message and use logs for evidence."
        },
        {
          "id": "coding-401-l04-f4",
          "front": "Log",
          "back": "A record of events that happen while a program is running."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for debug instrumentation scenarios."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l04.png"
    },
    {
      "id": "coding-401-l05",
      "title": "Performance and Reliability Tradeoffs",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital scale balancing a lightning bolt (speed) on one side and a sturdy shield (reliability) on the other.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation showing a race car (performance) driving too fast and losing parts, then slowing down slightly to become a heavily armored, unstoppable vehicle (reliability).",
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Debug Concept"
              },
              {
                "id": "process",
                "label": "Tradeoff Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Write the definition of 'Tradeoff' in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Balance speed vs memory on a new example",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Retest the same skill tomorrow",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a debug instrumentation challenge."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l05.png"
    },
    {
      "id": "coding-401-l06",
      "title": "Checkpoint: Engineering Decision Quality",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing brain made of circuit boards, symbolizing smart engineering decisions, set against a dark blue background.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A motion graphics video showing a crossroads with digital signs, where a glowing data packet chooses the safest and most efficient path.",
      "questions": [
        {
          "id": "coding-401-l06-q1",
          "text": "What is 'debug instrumentation' in coding?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Adding tools like logs and alerts to monitor what the code is doing."
            },
            {
              "id": "b",
              "text": "Playing musical instruments while writing software."
            },
            {
              "id": "c",
              "text": "Deleting all the code and starting over from scratch."
            },
            {
              "id": "d",
              "text": "Guessing where the bug is without looking at the error message."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q2",
          "text": "What is a common performance vs. quality tradeoff?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Making an app run faster, but using more of the computer's memory."
            },
            {
              "id": "b",
              "text": "Changing the app's background color to make it load slower."
            },
            {
              "id": "c",
              "text": "Turning off the computer to save electricity."
            },
            {
              "id": "d",
              "text": "Ignoring bugs so you can release the app today."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q3",
          "text": "Why shouldn't we just guess when debugging a system?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "It wastes time and might create new bugs. We should use evidence."
            },
            {
              "id": "b",
              "text": "Guessing is always faster than reading logs."
            },
            {
              "id": "c",
              "text": "Computers prefer when programmers guess."
            },
            {
              "id": "d",
              "text": "Bugs usually fix themselves if you wait long enough."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l06-q4",
          "text": "What is a 'log' in the context of software systems?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "A digital record of events that happen while the program runs."
            },
            {
              "id": "b",
              "text": "A piece of wood used to build the computer."
            },
            {
              "id": "c",
              "text": "A type of error that crashes the system."
            },
            {
              "id": "d",
              "text": "A fast way to write code without a keyboard."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Decision Quality",
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
                "label": "Confusion about debug instrumentation"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance tradeoffs"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review how logs and breakpoints work"
              },
              {
                "id": "r2",
                "label": "Use a pros/cons checklist before choosing an answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l06.png"
    },
    {
      "id": "coding-401-l07",
      "title": "Refactor and Simplify",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a messy, tangled ball of glowing wires being magically straightened out into neat, organized, parallel lines of light.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A satisfying animation showing a cluttered, chaotic digital workspace automatically organizing itself into clean, labeled folders and streamlined code blocks.",
      "chunks": [
        {
          "id": "coding-401-l07-c1",
          "title": "Refactor and Simplify Setup",
          "content": "Before you finish your project, it's important to 'refactor' your code. Refactoring is like cleaning your room: you aren't throwing away your toys (features), you are just organizing them so they are easier to find later. Taking the time to simplify your work improves the quality of your results and helps you or your teammates work more efficiently in the future."
        },
        {
          "id": "coding-401-l07-c2",
          "title": "Decision Rules",
          "content": "When deciding how to simplify code, follow a simple rule: always choose the option that makes the code easiest to read. If a piece of code is too long or confusing, break it down into smaller, clearly named functions. By doing this, you will be making smart choices that lead to better, bug-free results in your coding projects."
        },
        {
          "id": "coding-401-l07-c3",
          "title": "Quality Control",
          "content": "As you refactor, it's essential to check for three important things: accuracy (does it still work?), completeness (did I accidentally delete a feature?), and alignment (is it easier to read?). By ensuring that your work meets these criteria, you maintain high standards and produce professional-quality code."
        },
        {
          "id": "coding-401-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your refactoring practice, take a moment to write down one messy habit you want to avoid next time (like using bad variable names) and one good habit you want to repeat (like writing comments). This reflection will help you set clear goals for your future practice."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l07-f1",
          "front": "Refactoring",
          "back": "Cleaning and organizing code without changing what it actually does."
        },
        {
          "id": "coding-401-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option that makes the code easiest to read and maintain."
        },
        {
          "id": "coding-401-l07-f3",
          "front": "Quality Control",
          "back": "Checking for accuracy, completeness, and readability."
        },
        {
          "id": "coding-401-l07-f4",
          "front": "Iteration",
          "back": "Repeating a process to improve it step by step."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on performance-quality balance."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l07.png"
    },
    {
      "id": "coding-401-l08",
      "title": "Capstone Build Sprint",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital stopwatch next to a laptop displaying a complex, colorful software architecture diagram.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced timelapse animation of a digital city being built block by block, representing a software capstone project coming together during a sprint.",
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep missing one architecture pattern"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable syntax mistakes"
              },
              {
                "id": "l3",
                "label": "I understand the notes but fail the debugging quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Do a focused drill on that exact pattern"
              },
              {
                "id": "r2",
                "label": "Use a short checklist before submitting code"
              },
              {
                "id": "r3",
                "label": "Practice with hands-on, timed debugging scenarios"
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
          "id": "coding-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l08.png"
    },
    {
      "id": "coding-401-l09",
      "title": "Review: Software Systems Habits",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital checklist with a futuristic pen ticking off good coding habits, surrounded by floating gears.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An animation showing a programmer's daily routine, highlighting good habits like writing tests, refactoring code, and checking logs.",
      "questions": [
        {
          "id": "coding-401-l09-q1",
          "text": "What does it mean to 'refactor' code?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cleaning and organizing code without changing what it actually does."
            },
            {
              "id": "b",
              "text": "Adding a bunch of new features to an app."
            },
            {
              "id": "c",
              "text": "Deleting the whole project and starting over."
            },
            {
              "id": "d",
              "text": "Making the code run slower on purpose."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q2",
          "text": "Why is simple code usually better than complicated code?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It is easier to read, fix, and share with other programmers."
            },
            {
              "id": "b",
              "text": "It looks cooler on the screen."
            },
            {
              "id": "c",
              "text": "It takes up more space on the hard drive."
            },
            {
              "id": "d",
              "text": "It is harder for hackers to see."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q3",
          "text": "What is 'quality control' in coding?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Checking that the app is accurate, complete, and meets its goals."
            },
            {
              "id": "b",
              "text": "Making sure the code is typed really fast."
            },
            {
              "id": "c",
              "text": "Using the most expensive computer to write code."
            },
            {
              "id": "d",
              "text": "Never testing the app so you don't find bugs."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l09-q4",
          "text": "What should you do if you find a messy piece of code that works?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Carefully refactor it so it's easier to understand later."
            },
            {
              "id": "b",
              "text": "Leave it alone forever."
            },
            {
              "id": "c",
              "text": "Delete it immediately."
            },
            {
              "id": "d",
              "text": "Copy and paste it everywhere."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Habits",
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
                "label": "Confusion about refactoring"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to quality control"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review examples of clean vs messy code"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l09.png"
    },
    {
      "id": "coding-401-l10",
      "title": "Mastery: Coding IV",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing golden trophy sitting on top of a server rack, symbolizing mastery in coding systems.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A celebratory animation showing a digital fireworks display over a futuristic city made of code, representing the completion of a major coding milestone.",
      "questions": [
        {
          "id": "coding-401-l10-q1",
          "text": "Which of these is the best example of system architecture?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Planning how the database, server, and app communicate with each other."
            },
            {
              "id": "b",
              "text": "Picking a background color for the login screen."
            },
            {
              "id": "c",
              "text": "Typing code really fast without looking at the keyboard."
            },
            {
              "id": "d",
              "text": "Buying a new, expensive keyboard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q2",
          "text": "If your app is crashing, what is the best first step?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Look at the error logs to find out exactly why it crashed."
            },
            {
              "id": "b",
              "text": "Delete the app and start over."
            },
            {
              "id": "c",
              "text": "Restart the computer and hope the bug goes away."
            },
            {
              "id": "d",
              "text": "Write a completely new app."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q3",
          "text": "What is a 'bottleneck' in software performance?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "A specific part of the system that slows everything else down."
            },
            {
              "id": "b",
              "text": "A really fast piece of code."
            },
            {
              "id": "c",
              "text": "A type of variable used to store text."
            },
            {
              "id": "d",
              "text": "A secure password."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l10-q4",
          "text": "Why do we break big projects into smaller chunks?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It makes the project easier to manage, build, and test."
            },
            {
              "id": "b",
              "text": "It makes the code run faster."
            },
            {
              "id": "c",
              "text": "It hides bugs from the users."
            },
            {
              "id": "d",
              "text": "It requires less typing."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery",
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
                "label": "Confusion about system architecture"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug instrumentation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l10.png"
    },
    {
      "id": "coding-401-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a futuristic coding studio with floating holographic screens displaying code, and a glowing 'Challenge Accepted' sign.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation showing a student stepping into a virtual reality coding environment, grabbing floating blocks of code to solve a complex puzzle.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using debug instrumentation.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l11-ia1",
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
                "label": "Tag repeated mistakes in test strategy",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on performance tradeoffs",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l11.png"
    },
    {
      "id": "coding-401-l12",
      "title": "Coding IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing digital shield deflecting bugs, representing mastery and robust software systems.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced animation showing a software system successfully handling a massive wave of data without crashing, proving its scalability and reliability.",
      "questions": [
        {
          "id": "coding-401-l12-q1",
          "text": "What does 'scalability' mean in software architecture?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The ability of a system to handle more users or data without breaking."
            },
            {
              "id": "b",
              "text": "How heavy the physical computer is."
            },
            {
              "id": "c",
              "text": "The ability of the app to draw shapes on the screen."
            },
            {
              "id": "d",
              "text": "How loud the app's sound effects are."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q2",
          "text": "Why is it important to balance performance and quality?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "So the app is fast enough to use, but doesn't crash or lose data."
            },
            {
              "id": "b",
              "text": "So the app is slow and crashes often."
            },
            {
              "id": "c",
              "text": "So the app is only fast for one person at a time."
            },
            {
              "id": "d",
              "text": "Quality doesn't matter as long as the app is fast."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q3",
          "text": "What is a 'breakpoint' in debugging?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "A tool that pauses the code while it runs so you can inspect it."
            },
            {
              "id": "b",
              "text": "The exact moment the computer breaks."
            },
            {
              "id": "c",
              "text": "A time to take a snack break while coding."
            },
            {
              "id": "d",
              "text": "A broken line of code that needs to be deleted."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l12-q4",
          "text": "What is the main goal of a Capstone project?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To combine everything you've learned into one big, working system."
            },
            {
              "id": "b",
              "text": "To write the shortest code possible."
            },
            {
              "id": "c",
              "text": "To forget old lessons and only use new ones."
            },
            {
              "id": "d",
              "text": "To copy someone else's work."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l12-ia1",
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
                "label": "Confusion about scalability"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to performance balance"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review the definition and examples of scalability"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-401-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a digital laboratory with glowing test tubes filled with code, and a large holographic screen displaying a complex software scenario.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An engaging animation showing a team of digital avatars working together in a virtual lab to solve a massive server crash, using logs and architecture blueprints.",
      "chunks": [
        {
          "id": "coding-401-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, you will explore how different parts of a computer system work together. Imagine you are building a chat app for your school. You will use system architecture to plan how messages travel, debugging tools to fix messages that get lost, and performance balancing to ensure the app doesn't crash when everyone logs on at once. This challenge brings all your skills together!"
        },
        {
          "id": "coding-401-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario effectively, start by breaking it down into smaller, manageable decisions. Think of each decision point as a step in a treasure hunt. First, plan the database. Next, plan the user interface. For each step, choose a specific strategy that will guide you. This way, you can focus on one part at a time without getting overwhelmed."
        },
        {
          "id": "coding-401-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making each choice. For example, 'I am using a fast database because chat messages need to appear instantly.' Use evidence to support your decisions, rather than just guessing. This builds strong critical thinking skills."
        },
        {
          "id": "coding-401-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After you have completed your project, take a moment to evaluate the outcome. Did the chat app work? Did it crash when 100 users joined? Identify the elements that worked well and should be kept, as well as those that need adjustments. This reflection is what turns a good coder into a great software engineer."
        }
      ],
      "flashcards": [
        {
          "id": "coding-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear, manageable decision points."
        },
        {
          "id": "coding-401-l13-f2",
          "front": "Evidence Link",
          "back": "Each coding step should connect to a specific goal or requirement."
        },
        {
          "id": "coding-401-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks (like testing) to refine your next attempt."
        },
        {
          "id": "coding-401-l13-f4",
          "front": "Applied Mastery",
          "back": "Transferring your coding process to a brand new, real-world context."
        }
      ],
      "learningAids": [
        {
          "id": "coding-401-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting system architecture, debug instrumentation, and performance-quality balance."
        },
        {
          "id": "coding-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l13.png"
    },
    {
      "id": "coding-401-l14",
      "title": "Coding Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a friendly robot coach wearing a whistle, pointing at a glowing digital whiteboard filled with coding strategies.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation showing a coder struggling with a bug, then a digital coach appears, highlights the error, and guides them to the correct solution step-by-step.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on system architecture setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed performance tradeoffs"
              },
              {
                "id": "l3",
                "label": "Correct in notes but weak transfer in new tasks"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Rebuild setup steps and retest one parallel item"
              },
              {
                "id": "r2",
                "label": "Use checkpoint pacing + verify before submit"
              },
              {
                "id": "r3",
                "label": "Pair correction with one timed transfer item"
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
          "id": "coding-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l14.png"
    },
    {
      "id": "coding-401-l15",
      "title": "Coding IV Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A 3D illustration of a glowing finish line ribbon being broken by a fast-moving digital data packet, symbolizing the completion of the final mastery sprint.",
      "conceptVideoPrompt": "Veo 3.1 prompt: An epic, fast-paced montage of all the coding concepts learned—blueprints, debugging logs, and refactoring—culminating in a perfectly running, glowing software system.",
      "questions": [
        {
          "id": "coding-401-l15-q1",
          "text": "You want to add a chat feature to your game. What should you do first?",
          "skillId": "coding-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Plan the architecture and how the chat connects to the game."
            },
            {
              "id": "b",
              "text": "Start typing random code and hope it works."
            },
            {
              "id": "c",
              "text": "Change the game's graphics instead."
            },
            {
              "id": "d",
              "text": "Release the game immediately without testing."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q2",
          "text": "Your app is super fast but sometimes loses user data. What is the issue?",
          "skillId": "coding-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Poor performance-quality balance (sacrificed reliability for speed)."
            },
            {
              "id": "b",
              "text": "The app is too secure."
            },
            {
              "id": "c",
              "text": "The code is too clean and refactored."
            },
            {
              "id": "d",
              "text": "The users are typing too fast."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q3",
          "text": "You find a bug that only happens when a user clicks a button 10 times. How do you fix it?",
          "skillId": "coding-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use debug tools to track the button clicks and find the error."
            },
            {
              "id": "b",
              "text": "Tell users not to click the button 10 times."
            },
            {
              "id": "c",
              "text": "Delete the button entirely."
            },
            {
              "id": "d",
              "text": "Ignore it because it rarely happens."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-401-l15-q4",
          "text": "After finishing your Capstone project, what is the best final step?",
          "skillId": "coding-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Review the outcome, refactor messy code, and celebrate!"
            },
            {
              "id": "b",
              "text": "Delete the project to save space."
            },
            {
              "id": "c",
              "text": "Never look at code again."
            },
            {
              "id": "d",
              "text": "Break the app on purpose to see what happens."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-401-l15-ia1",
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
                "label": "Confusion about test strategy"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug instrumentation"
              },
              {
                "id": "l3",
                "label": "Weak transfer of systems thinking under timing"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Create a one-step concept summary with one worked example"
              },
              {
                "id": "r2",
                "label": "Use a checklist before choosing the final answer"
              },
              {
                "id": "r3",
                "label": "Retest the same target with a short timed sprint"
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
          "id": "coding-401-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-401-l15.png"
    }
  ]
};
