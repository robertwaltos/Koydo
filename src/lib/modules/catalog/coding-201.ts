import type { LearningModule } from "@/lib/modules/types";

export const Coding201Module: LearningModule = {
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
      ]
    },
    {
      "id": "coding-201-l02",
      "title": "Designing with Pseudocode",
      "type": "interactive",
      "duration": 12,
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
      ]
    },
    {
      "id": "coding-201-l03",
      "title": "Checkpoint: Program Design",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-201-l03-q1",
          "text": "Which statement best explains decomposition in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains decomposition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how decomposition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q2",
          "text": "What is the best first step when analyzing testing?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for testing."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to testing."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l03-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      ]
    },
    {
      "id": "coding-201-l04",
      "title": "Testing and Edge Cases",
      "type": "video",
      "duration": 11,
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
      ]
    },
    {
      "id": "coding-201-l05",
      "title": "State and Data Flow",
      "type": "interactive",
      "duration": 13,
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
      ]
    },
    {
      "id": "coding-201-l06",
      "title": "Checkpoint: Debug and Validation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-201-l06-q1",
          "text": "Which statement best explains state management in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains state management using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how state management works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q2",
          "text": "What is the best first step when analyzing debug strategy?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for debug strategy."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to debug strategy."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l06-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      ]
    },
    {
      "id": "coding-201-l07",
      "title": "Refactoring for Clarity",
      "type": "video",
      "duration": 12,
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
      ]
    },
    {
      "id": "coding-201-l08",
      "title": "Mini Project Sprint",
      "type": "interactive",
      "duration": 10,
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
      ]
    },
    {
      "id": "coding-201-l09",
      "title": "Review: Coding Workflow",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-201-l09-q1",
          "text": "Which statement best explains testing in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains testing using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how testing works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q2",
          "text": "What is the best first step when analyzing debug strategy?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for debug strategy."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to debug strategy."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l09-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      "questions": [
        {
          "id": "coding-201-l10-q1",
          "text": "Which statement best explains decomposition in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains decomposition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how decomposition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q2",
          "text": "What is the best first step when analyzing state management?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for state management."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to state management."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l10-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      ]
    },
    {
      "id": "coding-201-l11",
      "title": "Applied Coding Challenge Studio",
      "type": "interactive",
      "duration": 14,
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
      ]
    },
    {
      "id": "coding-201-l12",
      "title": "Coding II Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-201-l12-q1",
          "text": "Which statement best explains decomposition in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains decomposition using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how decomposition works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q2",
          "text": "What is the best first step when analyzing debug strategy?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for debug strategy."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to debug strategy."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l12-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      ]
    },
    {
      "id": "coding-201-l13",
      "title": "Coding Scenario Lab",
      "type": "video",
      "duration": 12,
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
      ]
    },
    {
      "id": "coding-201-l14",
      "title": "Coding Coaching Clinic",
      "type": "interactive",
      "duration": 13,
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
      ]
    },
    {
      "id": "coding-201-l15",
      "title": "Coding II Mastery Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "coding-201-l15-q1",
          "text": "Which statement best explains testing in Coding?",
          "skillId": "coding-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It explains testing using evidence from the lesson."
            },
            {
              "id": "b",
              "text": "It ignores how testing works in practice."
            },
            {
              "id": "c",
              "text": "It focuses on an unrelated topic outside Coding."
            },
            {
              "id": "d",
              "text": "It repeats terms without showing meaning."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q2",
          "text": "What is the best first step when analyzing state management?",
          "skillId": "coding-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Define the goal and examine evidence for state management."
            },
            {
              "id": "b",
              "text": "Guess quickly without checking evidence."
            },
            {
              "id": "c",
              "text": "Use data unrelated to state management."
            },
            {
              "id": "d",
              "text": "Skip the context and jump to a conclusion."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q3",
          "text": "Which option shows strong reasoning about project-based computational thinking?",
          "skillId": "coding-201-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Use examples and verify assumptions step by step."
            },
            {
              "id": "b",
              "text": "Ignore important details and edge cases."
            },
            {
              "id": "c",
              "text": "Use assumptions unrelated to project-based computational thinking."
            },
            {
              "id": "d",
              "text": "Change the topic when evidence gets hard."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "coding-201-l15-q4",
          "text": "Why is spaced review useful for Coding mastery?",
          "skillId": "coding-201-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It strengthens memory and transfer over time"
            },
            {
              "id": "b",
              "text": "It creates confusion"
            },
            {
              "id": "c",
              "text": "It removes key facts"
            },
            {
              "id": "d",
              "text": "It has no value"
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
      ]
    }
  ]
};
