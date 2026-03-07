import type { LearningModule } from "@/lib/modules/types";

export const coding_201_Module: LearningModule = {
  "id": "coding-201",
  "title": "Coding Projects and Problem Solving",
  "description": "Build larger coding workflows with decomposition, testing, and iterative refinement.",
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
    "Understand core concepts in Coding",
    "Apply Debug and Validation strategies through guided practice",
    "Demonstrate mastery with subject-specific quizzes"
  ],
  "lessons": [
    {
      "id": "coding-201-l01",
      "title": "Breaking Problems into Components",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A colorful, engaging illustration of a young student breaking a large glowing puzzle block into smaller, manageable puzzle pieces, digital art style, vibrant colors.",
      "conceptVideoPrompt": "A 3D animated sequence showing a giant robot being built piece by piece from smaller components, demonstrating the concept of decomposition in a fun, kid-friendly way.",
      "chunks": [
        {
          "id": "coding-201-l01-c1",
          "title": "Breaking Problems into Components Overview",
          "content": "In this lesson, we will explore the important concept of breaking down problems into smaller parts, which is known as decomposition. This approach is a key part of project-based computational thinking. Our main goal is to learn how to identify what effective reasoning looks like before we dive into solving any problems. By understanding this process, we can tackle challenges more effectively and creatively. Decomposition helps us take big, complex problems and turn them into manageable pieces. This way, we can focus on each part one at a time, making it easier to find solutions and think critically about the best ways to approach our projects."
        },
        {
          "id": "coding-201-l01-c2",
          "title": "Core Concept",
          "content": "In this section, we will discuss how decomposition and testing work hand in hand to help us solve problems. First, we need to clearly define our main goal or target. Once we have that, we can identify the steps or evidence that will support our approach to reaching that goal. This structured method helps us stay focused and organized as we work through challenges.\nContext recap: In this section, we will discuss how decomposition and testing work hand in hand to help us solve problems. First, we need to clearly define our main goal or target. Once we have that, we can identify the steps or evidence that will support our approach to reaching that goal. This structured method helps us stay focused and organized as we work through challenges."
        },
        {
          "id": "coding-201-l01-c3",
          "title": "Worked Example",
          "content": "Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy for testing our ideas. Finally, we will verify our results by doing a quick check to ensure everything is correct. This step-by-step approach will help us understand how to apply what we've learned in real situations.\nContext recap: Let's walk through a guided example together! First, we will define our goal clearly. Next, we will apply a strategy for testing our ideas. Finally, we will verify our results by doing a quick check to ensure everything is correct.\nWhy this matters: Worked Example helps learners in Coding connect ideas from Coding Projects and Problem Solving to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "coding-201-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn to shine! Take the process we just learned and apply it to a new situation. As you work through this, be sure to explain in one clear sentence why your approach makes sense. This exercise will not only strengthen your understanding but also demonstrate how you can use your skills to tackle different challenges. Remember, adapting what you know to new problems is a key part of becoming a great coder!\nContext recap: Now it's your turn to shine! Take the process we just learned and apply it to a new situation. As you work through this, be sure to explain in one clear sentence why your approach makes sense. This exercise will not only strengthen your understanding but also demonstrate how you can use your skills to tackle different challenges."
        }
      ],
      "flashcards": [
        {
          "id": "coding-201-l01-f1",
          "front": "decomposition",
          "back": "A central target skill in this module. Name it before solving."
        },
        {
          "id": "coding-201-l01-f2",
          "front": "testing",
          "back": "Use this as the method step after defining the goal."
        },
        {
          "id": "coding-201-l01-f3",
          "front": "Verification",
          "back": "Check that your result matches the original goal and constraints."
        },
        {
          "id": "coding-201-l01-f4",
          "front": "Transfer",
          "back": "Use the same strategy on a new item to confirm true mastery."
        }
      ],
      "learningAids": [
        {
          "id": "coding-201-l01-a1",
          "type": "image",
          "title": "Concept Poster",
          "content": "A colorful infographic about decomposition and testing."
        },
        {
          "id": "coding-201-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "Short animation introducing Coding vocabulary."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l01.png"
    },
    {
      "id": "coding-201-l02",
      "title": "Designing with Pseudocode",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "An illustration of a teenager writing a mix of English words and code symbols on a glowing digital whiteboard, representing pseudocode, modern tech aesthetic.",
      "conceptVideoPrompt": "A top-down view of a notebook where handwritten steps magically transform into colorful computer code blocks, showing the transition from planning to coding.",
      "metadata": {
        "prompts": [
          "Identify one core idea about decomposition from this lesson.",
          "Explain where testing appears in real life.",
          "Describe one question you still have about project-based computational thinking."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-201-l02-ia1",
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
                "label": "Set a goal for decomposition",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Try one strategy for testing",
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
          "id": "coding-201-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "Complete a guided activity on testing and write one reflection."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l02.png"
    },
    {
      "id": "coding-201-l03",
      "title": "Checkpoint: Program Design",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A stylized checkpoint flag on a digital race track made of code, bright and encouraging, 3D illustration.",
      "conceptVideoPrompt": "A fast-paced, energetic animation of a glowing progress bar filling up as a student successfully answers coding questions, celebrating a checkpoint.",
      "questions": [
        {
          "id": "coding-201-l03-q1",
          "text": "Which statement best explains decomposition in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Breaking a big problem into smaller, easier parts."
            },
            {
              "id": "b",
              "text": "Writing code as fast as possible."
            },
            {
              "id": "c",
              "text": "Deleting old code to make room for new code."
            },
            {
              "id": "d",
              "text": "Combining small programs into one giant file."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q2",
          "text": "What is the best first step when testing a program?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define what the program is supposed to do."
            },
            {
              "id": "b",
              "text": "Change random lines of code."
            },
            {
              "id": "c",
              "text": "Ask a friend to write the code."
            },
            {
              "id": "d",
              "text": "Skip testing and publish the app."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q3",
          "text": "Which option shows strong reasoning when planning a coding project?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Writing down the steps and checking if they make sense before coding."
            },
            {
              "id": "b",
              "text": "Guessing the code until it works."
            },
            {
              "id": "c",
              "text": "Copying code without understanding it."
            },
            {
              "id": "d",
              "text": "Ignoring errors and hoping they go away."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q4",
          "text": "Why is it helpful to review coding concepts over time?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps you remember them and use them in new projects."
            },
            {
              "id": "b",
              "text": "It makes coding more confusing."
            },
            {
              "id": "c",
              "text": "It deletes old memories."
            },
            {
              "id": "d",
              "text": "It is a waste of time."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Program Design",
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
                "label": "Confusion about decomposition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to testing"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l03.png"
    },
    {
      "id": "coding-201-l04",
      "title": "Testing and Edge Cases",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "A cartoon magnifying glass inspecting a line of code, finding a tiny, cute bug hiding at the edge of the screen, vibrant colors.",
      "conceptVideoPrompt": "An animation of a robot trying to walk through different types of doors. It easily walks through a normal door, but bumps its head on a tiny door, illustrating an 'edge case' in testing.",
      "chunks": [
        {
          "id": "coding-201-l04-c1",
          "title": "Testing and Edge Cases Focus",
          "content": "In this lesson, we will deepen our understanding of state management by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This will help us become better problem solvers as we learn to manage different states in our coding projects.\nContext recap: In this lesson, we will deepen our understanding of state management by using structured reasoning. We will move from simply understanding concepts to making informed decisions based on those concepts. This will help us become better problem solvers as we learn to manage different states in our coding projects."
        },
        {
          "id": "coding-201-l04-c2",
          "title": "Method Steps",
          "content": "Let's break down the steps we need to follow for effective problem-solving. Step 1 is to identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with state management principles. Finally, Step 3 is to justify your choice with evidence that supports your reasoning. Following these steps will help you stay organized and focused.\nContext recap: Let's break down the steps we need to follow for effective problem-solving. Step 1 is to identify what is being asked in the problem. Step 2 involves choosing a strategy that aligns with state management principles. Finally, Step 3 is to justify your choice with evidence that supports your reasoning."
        },
        {
          "id": "coding-201-l04-c3",
          "title": "Common Mistakes",
          "content": "As we work through problems, it's important to be aware of common mistakes that can occur. Some typical errors include skipping the setup phase, making unrelated assumptions, or forgetting to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and avoid making the same mistakes.\nContext recap: As we work through problems, it's important to be aware of common mistakes that can occur. Some typical errors include skipping the setup phase, making unrelated assumptions, or forgetting to verify the final result. By recognizing these pitfalls, we can improve our problem-solving skills and avoid making the same mistakes."
        },
        {
          "id": "coding-201-l04-c4",
          "title": "Independent Try",
          "content": "Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you understand your approach better and identify areas for improvement.\nContext recap: Now, it's time for you to try solving a similar problem on your own! After you complete it, take a moment to compare your process with the steps we discussed in the lesson. This reflection will help you understand your approach better and identify areas for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "coding-201-l04-f1",
          "front": "state management",
          "back": "State the target and pick a strategy before solving."
        },
        {
          "id": "coding-201-l04-f2",
          "front": "Step Sequence",
          "back": "Goal -> Strategy -> Evidence -> Check."
        },
        {
          "id": "coding-201-l04-f3",
          "front": "Assumption Check",
          "back": "Remove assumptions that are not supported by the prompt."
        },
        {
          "id": "coding-201-l04-f4",
          "front": "Process Match",
          "back": "Your explanation should match the steps you actually used."
        }
      ],
      "learningAids": [
        {
          "id": "coding-201-l04-a1",
          "type": "image",
          "title": "Worked Example Sheet",
          "content": "Step-by-step visuals for state management scenarios."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l04.png"
    },
    {
      "id": "coding-201-l05",
      "title": "State and Data Flow",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A visual representation of data flowing like glowing water through transparent pipes into different containers labeled 'State', futuristic and educational.",
      "conceptVideoPrompt": "A dynamic animation showing a digital character changing outfits (states) based on different weather icons (data inputs) dropping into the scene.",
      "metadata": {
        "prompts": [
          "Pick one challenge and outline your approach.",
          "Test your approach and record the result.",
          "Revise your approach and explain the change."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-201-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort",
          "description": "Sort study actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "state management Concept"
              },
              {
                "id": "process",
                "label": "debug strategy Process"
              },
              {
                "id": "review",
                "label": "Review Loop"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Write one definition in your own words",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Follow the step-by-step method on a new example",
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
          "id": "coding-201-l05-a1",
          "type": "animation",
          "title": "Challenge Walkthrough",
          "content": "Animated sequence for solving a state management challenge."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l05.png"
    },
    {
      "id": "coding-201-l06",
      "title": "Checkpoint: Debug and Validation",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A friendly robot mechanic holding a wrench, standing next to a glowing computer screen with a green checkmark, 3D cartoon style.",
      "conceptVideoPrompt": "A short animation of a detective character using a magnifying glass to follow glowing footprints through a maze of code, finding and fixing a bug.",
      "questions": [
        {
          "id": "coding-201-l06-q1",
          "text": "What does 'state management' mean in coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Keeping track of information that changes, like a player's score."
            },
            {
              "id": "b",
              "text": "Managing the computer's power supply."
            },
            {
              "id": "c",
              "text": "Organizing files on a desktop."
            },
            {
              "id": "d",
              "text": "Writing code in different countries."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q2",
          "text": "What is the best first step when debugging a broken program?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Find out exactly what the error message says or what is going wrong."
            },
            {
              "id": "b",
              "text": "Delete all the code and start over."
            },
            {
              "id": "c",
              "text": "Add more code to see if it fixes it."
            },
            {
              "id": "d",
              "text": "Turn off the computer."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q3",
          "text": "Why is it important to test 'edge cases'?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To see what happens in unusual or extreme situations."
            },
            {
              "id": "b",
              "text": "To make the code run faster."
            },
            {
              "id": "c",
              "text": "To make the code look prettier."
            },
            {
              "id": "d",
              "text": "To prove the code is perfect."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q4",
          "text": "How does a step-by-step debug strategy help you?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It keeps you organized so you don't guess randomly."
            },
            {
              "id": "b",
              "text": "It writes the code for you."
            },
            {
              "id": "c",
              "text": "It makes the computer run faster."
            },
            {
              "id": "d",
              "text": "It hides the errors."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Checkpoint: Debug and Validation",
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
                "label": "Confusion about state management"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l06.png"
    },
    {
      "id": "coding-201-l07",
      "title": "Refactoring for Clarity",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "An illustration of a messy, tangled ball of glowing yarn being neatly wound into an organized spool, representing code refactoring.",
      "conceptVideoPrompt": "A time-lapse animation of a messy, complicated block of code magically rearranging itself into a clean, easy-to-read structure with clear labels.",
      "chunks": [
        {
          "id": "coding-201-l07-c1",
          "title": "Refactoring for Clarity Setup",
          "content": "Before you start coding, it's important to use a debugging strategy to organize your approach. Taking the time to plan your steps in advance can greatly improve both the quality of your work and the speed at which you complete your tasks. A well-thought-out plan sets you up for success!\nContext recap: Before you start coding, it's important to use a debugging strategy to organize your approach. Taking the time to plan your steps in advance can greatly improve both the quality of your work and the speed at which you complete your tasks. A well-thought-out plan sets you up for success!"
        },
        {
          "id": "coding-201-l07-c2",
          "title": "Decision Rules",
          "content": "When you have to make a decision and there are several options to choose from, it can be tricky to know which one to pick. A great way to make this easier is to follow a simple rule: always select the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smart choices that will help you succeed in your coding projects and solve problems more effectively.\nContext recap: When you have to make a decision and there are several options to choose from, it can be tricky to know which one to pick. A great way to make this easier is to follow a simple rule: always select the option that has the strongest evidence supporting it and the clearest connection to what you want to achieve. By using this strategy, you can make smart choices that will help you succeed in your coding projects and solve problems more effectively."
        },
        {
          "id": "coding-201-l07-c3",
          "title": "Quality Control",
          "content": "As you review your work, make sure to check for three important things: accuracy, completeness, and alignment with your original objective. This quality control process ensures that your final product meets the standards you set for yourself and helps you deliver your best work.\nContext recap: As you review your work, make sure to check for three important things: accuracy, completeness, and alignment with your original objective. This quality control process ensures that your final product meets the standards you set for yourself and helps you deliver your best work."
        },
        {
          "id": "coding-201-l07-c4",
          "title": "Next-Step Plan",
          "content": "After completing your practice round, take a moment to write down one action you plan to repeat in your next practice session and one action you want to improve. This reflection will help you continue to grow and develop your skills as a coder.\nContext recap: After completing your practice round, take a moment to write down one action you plan to repeat in your next practice session and one action you want to improve. This reflection will help you continue to grow and develop your skills as a coder."
        }
      ],
      "flashcards": [
        {
          "id": "coding-201-l07-f1",
          "front": "debug strategy",
          "back": "Use this as your organizing framework before execution."
        },
        {
          "id": "coding-201-l07-f2",
          "front": "Decision Rule",
          "back": "Choose the option with strongest evidence-to-goal alignment."
        },
        {
          "id": "coding-201-l07-f3",
          "front": "Quality Control",
          "back": "Accuracy + completeness + objective match."
        },
        {
          "id": "coding-201-l07-f4",
          "front": "Iteration",
          "back": "Repeat what works; refine one weak step each cycle."
        }
      ],
      "learningAids": [
        {
          "id": "coding-201-l07-a1",
          "type": "practice",
          "title": "Project Planner",
          "content": "Template for planning a mini project focused on debug strategy."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l07.png"
    },
    {
      "id": "coding-201-l08",
      "title": "Mini Project Sprint",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "A teenager sitting at a desk with multiple monitors, excitedly typing on a keyboard with a glowing 'Sprint' timer in the background, energetic atmosphere.",
      "conceptVideoPrompt": "A fast-paced montage of a coding project coming together, from a blank screen to a working mini-game, with a ticking clock emphasizing the sprint.",
      "metadata": {
        "prompts": [
          "What did you learn most clearly?",
          "Where did you struggle and why?",
          "What is your next improvement target?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-201-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match",
          "description": "Match each reflection prompt with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I keep missing one skill pattern"
              },
              {
                "id": "l2",
                "label": "I rush and make avoidable mistakes"
              },
              {
                "id": "l3",
                "label": "I understand in notes but miss in quizzes"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Do a focused drill on that exact pattern"
              },
              {
                "id": "r2",
                "label": "Use a short checklist before submitting answers"
              },
              {
                "id": "r3",
                "label": "Repeat the skill in a timed re-check"
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
          "id": "coding-201-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember Observe, Adjust, Repeat while practicing."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l08.png"
    },
    {
      "id": "coding-201-l09",
      "title": "Review: Coding Workflow",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A circular flowchart made of glowing neon arrows showing the steps: Plan, Code, Test, Refactor, set against a dark tech background.",
      "conceptVideoPrompt": "An animated loop showing a character drawing a blueprint, building a robot, testing it, and then polishing it, representing the coding workflow.",
      "questions": [
        {
          "id": "coding-201-l09-q1",
          "text": "What is the main purpose of testing your code?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To make sure it works correctly and find any hidden bugs."
            },
            {
              "id": "b",
              "text": "To make the code longer."
            },
            {
              "id": "c",
              "text": "To change the colors of the app."
            },
            {
              "id": "d",
              "text": "To show off to your friends."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q2",
          "text": "When refactoring code, what is your main goal?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To make the code cleaner and easier to read without changing what it does."
            },
            {
              "id": "b",
              "text": "To add new features to the program."
            },
            {
              "id": "c",
              "text": "To make the code run slower."
            },
            {
              "id": "d",
              "text": "To delete the entire project."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q3",
          "text": "Which of these is a good debugging strategy?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Reading the error message and checking the code line by line."
            },
            {
              "id": "b",
              "text": "Guessing which line is broken."
            },
            {
              "id": "c",
              "text": "Ignoring the error and hoping it goes away."
            },
            {
              "id": "d",
              "text": "Asking someone else to do it for you."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q4",
          "text": "Why is planning before coding so important?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It saves time and helps prevent big mistakes later."
            },
            {
              "id": "b",
              "text": "It is a rule you have to follow."
            },
            {
              "id": "c",
              "text": "It makes the computer run faster."
            },
            {
              "id": "d",
              "text": "It is actually a waste of time."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Review: Coding Workflow",
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
                "label": "Confusion about testing"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ]
    },
    {
      "id": "coding-201-l10",
      "title": "Mastery: Coding II",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A golden trophy with a glowing code symbol inside, sitting on a high-tech pedestal, celebrating coding mastery.",
      "conceptVideoPrompt": "A triumphant animation of a student reaching the top of a digital mountain, planting a flag with a code symbol on it, fireworks in the background.",
      "questions": [
        {
          "id": "coding-201-l10-q1",
          "text": "If you are building a complex game, how should you use decomposition?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Break the game down into smaller tasks like 'player movement', 'scoring', and 'enemies'."
            },
            {
              "id": "b",
              "text": "Try to write the whole game in one day."
            },
            {
              "id": "c",
              "text": "Only focus on the graphics."
            },
            {
              "id": "d",
              "text": "Copy a game that already exists."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q2",
          "text": "How do you manage 'state' in a shopping app?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "By keeping track of what items are currently in the user's shopping cart."
            },
            {
              "id": "b",
              "text": "By changing the background color."
            },
            {
              "id": "c",
              "text": "By making the app load faster."
            },
            {
              "id": "d",
              "text": "By turning off the internet."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q3",
          "text": "What should you do if your code works, but it's very messy and hard to read?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Refactor it to make it clean and organized."
            },
            {
              "id": "b",
              "text": "Leave it alone since it works."
            },
            {
              "id": "c",
              "text": "Delete it and start over."
            },
            {
              "id": "d",
              "text": "Add more comments without changing the code."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q4",
          "text": "Why do we test edge cases?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To ensure the program doesn't crash when users do unexpected things."
            },
            {
              "id": "b",
              "text": "To make the code look professional."
            },
            {
              "id": "c",
              "text": "To practice typing."
            },
            {
              "id": "d",
              "text": "To make the program run slower."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Mastery: Coding II",
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
                "label": "Confusion about decomposition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to state management"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l10.png"
    },
    {
      "id": "coding-201-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "A futuristic coding studio with holographic screens displaying code blocks and puzzle pieces, inviting and creative.",
      "conceptVideoPrompt": "An interactive point-of-view animation where the viewer's hands drag and drop glowing code blocks to solve a complex puzzle in a virtual studio.",
      "metadata": {
        "prompts": [
          "Select one weak pattern from recent quizzes.",
          "Apply a step-by-step correction using state management.",
          "Document your transfer plan for the next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-201-l11-ia1",
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
                "label": "Tag repeated mistakes in testing",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Rework one missed item with full reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Retest with a timed mini-check on debug strategy",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "coding-201-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "Use Diagnose, Fix, Transfer for each difficult problem."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l11.png"
    },
    {
      "id": "coding-201-l12",
      "title": "Coding II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing digital badge with a 'Retest Passed' ribbon, surrounded by floating code snippets, 3D rendered.",
      "conceptVideoPrompt": "An animation of a character taking a deep breath, confidently typing on a keyboard, and smiling as a green 'Success' message pops up on screen.",
      "questions": [
        {
          "id": "coding-201-l12-q1",
          "text": "Which scenario best describes decomposition?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Splitting a 'build a website' project into 'design', 'coding', and 'testing' phases."
            },
            {
              "id": "b",
              "text": "Writing all the code in one single file."
            },
            {
              "id": "c",
              "text": "Using a new programming language."
            },
            {
              "id": "d",
              "text": "Typing really fast."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q2",
          "text": "You find a bug in your code. What is the best strategy?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Isolate the problem by testing small parts of the code one at a time."
            },
            {
              "id": "b",
              "text": "Change random numbers until it works."
            },
            {
              "id": "c",
              "text": "Rewrite the whole program."
            },
            {
              "id": "d",
              "text": "Ignore it if it only happens sometimes."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q3",
          "text": "What is a 'state' in a video game?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Whether the player is currently jumping, running, or standing still."
            },
            {
              "id": "b",
              "text": "The name of the game."
            },
            {
              "id": "c",
              "text": "The company that made the game."
            },
            {
              "id": "d",
              "text": "The computer monitor."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q4",
          "text": "What is the benefit of refactoring?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It makes the code easier for you and others to understand and update later."
            },
            {
              "id": "b",
              "text": "It automatically fixes all bugs."
            },
            {
              "id": "c",
              "text": "It makes the code run 100 times faster."
            },
            {
              "id": "d",
              "text": "It changes what the program does."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding II Mastery Applied Retest",
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
                "label": "Confusion about decomposition"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to debug strategy"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l12.png"
    },
    {
      "id": "coding-201-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A group of diverse students in a high-tech lab, looking at a large holographic projection of a city simulation, discussing coding strategies.",
      "conceptVideoPrompt": "A cinematic animation zooming into a computer screen, entering a virtual world where code blocks build a bustling digital city, showing applied coding.",
      "chunks": [
        {
          "id": "coding-201-l13-c1",
          "title": "Scenario Brief",
          "content": "In this exciting scenario, we will explore important coding concepts such as breaking down problems into smaller parts, managing the state of our program, and using effective strategies to fix any issues that arise. This challenge will help you apply these skills in a fun and practical way!\nContext recap: In this exciting scenario, we will explore important coding concepts such as breaking down problems into smaller parts, managing the state of our program, and using effective strategies to fix any issues that arise. This challenge will help you apply these skills in a fun and practical way!"
        },
        {
          "id": "coding-201-l13-c2",
          "title": "Plan the Approach",
          "content": "To tackle this scenario successfully, start by dividing it into smaller, manageable decisions. For each of these decision points, think about which strategy will work best and assign that strategy to guide your choices. This will make the problem easier to solve step by step!\nContext recap: To tackle this scenario successfully, start by dividing it into smaller, manageable decisions. For each of these decision points, think about which strategy will work best and assign that strategy to guide your choices. This will make the problem easier to solve step by step!"
        },
        {
          "id": "coding-201-l13-c3",
          "title": "Execute and Justify",
          "content": "Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use clear evidence from your plan to support your decisions, rather than guessing. This will help you understand your coding process better!\nContext recap: Now it's time to put your plan into action! As you execute each step, make sure to explain why you are making those choices. Use clear evidence from your plan to support your decisions, rather than guessing. This will help you understand your coding process better!"
        },
        {
          "id": "coding-201-l13-c4",
          "title": "Evaluate Outcome",
          "content": "After completing your project, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve in future coding challenges!\nContext recap: After completing your project, take a moment to evaluate the outcome. Compare what you achieved with the goals you set at the beginning. Identify which parts of your work were successful and should be kept, and which areas might need some adjustments. This reflection will help you improve in future coding challenges!"
        }
      ],
      "flashcards": [
        {
          "id": "coding-201-l13-f1",
          "front": "Scenario Planning",
          "back": "Split a complex task into clear decision points."
        },
        {
          "id": "coding-201-l13-f2",
          "front": "Evidence Link",
          "back": "Each step should connect to evidence in the scenario."
        },
        {
          "id": "coding-201-l13-f3",
          "front": "Adjustment Loop",
          "back": "Use outcome checks to refine your next attempt."
        },
        {
          "id": "coding-201-l13-f4",
          "front": "Applied Mastery",
          "back": "Mastery means transferring the process to a new context."
        }
      ],
      "learningAids": [
        {
          "id": "coding-201-l13-a1",
          "type": "image",
          "title": "Scenario Map",
          "content": "A real-world scenario map connecting decomposition, state management, and debug strategy."
        },
        {
          "id": "coding-201-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Apply one strategy to a new case and explain your reasoning."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l13.png"
    },
    {
      "id": "coding-201-l14",
      "title": "Coding Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "lessonImagePrompt": "A friendly AI robot wearing a coach's whistle, pointing at a digital playbook filled with coding strategies, bright and encouraging.",
      "conceptVideoPrompt": "An animation of a coach drawing a play on a digital whiteboard, where the 'players' are code functions working together to score a goal.",
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent work.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your next timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "coding-201-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match",
          "description": "Match each error signal to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Repeated miss on decomposition setup"
              },
              {
                "id": "l2",
                "label": "Losses due to rushed debug strategy decisions"
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
          "id": "coding-201-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose, Correct, Transfer."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l14.png"
    },
    {
      "id": "coding-201-l15",
      "title": "Coding II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A glowing finish line ribbon being broken by a fast-moving digital data stream, symbolizing the completion of a coding mastery sprint.",
      "conceptVideoPrompt": "A high-energy animation of a rocket ship launching into space, powered by glowing blocks of code, representing ultimate coding mastery.",
      "questions": [
        {
          "id": "coding-201-l15-q1",
          "text": "When building a weather app, what is an example of decomposition?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Creating separate functions for 'getting data', 'displaying temperature', and 'showing icons'."
            },
            {
              "id": "b",
              "text": "Making the app background blue."
            },
            {
              "id": "c",
              "text": "Downloading a different weather app."
            },
            {
              "id": "d",
              "text": "Writing the code in one long paragraph."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q2",
          "text": "If a user enters a letter instead of a number for their age, what is this called?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "An edge case or unexpected input that needs to be handled."
            },
            {
              "id": "b",
              "text": "A perfect input."
            },
            {
              "id": "c",
              "text": "A state management feature."
            },
            {
              "id": "d",
              "text": "A refactoring goal."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q3",
          "text": "Why is state management crucial in a messaging app?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "To know if a message is 'sent', 'delivered', or 'read'."
            },
            {
              "id": "b",
              "text": "To make the text bigger."
            },
            {
              "id": "c",
              "text": "To change the font style."
            },
            {
              "id": "d",
              "text": "To turn off the phone."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q4",
          "text": "What is the ultimate goal of a good debugging strategy?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To find the root cause of a problem efficiently and fix it permanently."
            },
            {
              "id": "b",
              "text": "To guess the answer quickly."
            },
            {
              "id": "c",
              "text": "To hide the error from the user."
            },
            {
              "id": "d",
              "text": "To make the code look complicated."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "coding-201-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Coding II Mastery Mastery Sprint",
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
                "label": "Confusion about testing"
              },
              {
                "id": "l2",
                "label": "Inconsistent approach to state management"
              },
              {
                "id": "l3",
                "label": "Weak transfer of project-based computational thinking under timing"
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
          "id": "coding-201-l15-a1",
          "type": "mnemonic",
          "title": "Memory Tip",
          "content": "Use the phrase Plan, Check, Explain for each question."
        }
      ],
      "imageUrl": "/generated-images/refinery/coding-201-l15.png"
    }
  ]
};
