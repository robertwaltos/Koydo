import type { LearningModule } from "@/lib/modules/types";

export const GaokaoPrep101Module: LearningModule = {
  "id": "gaokao-prep-101",
  "title": "Gaokao Prep Foundations",
  "description": "Master the Gaokao with a structured study plan, advanced exam strategies, and data-driven revision techniques.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced"
  ],
  "minAge": 15,
  "maxAge": 20,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Develop a disciplined study schedule for Gaokao subjects.",
    "Improve problem-solving speed and accuracy under timed conditions.",
    "Use an error analysis system to identify and fix knowledge gaps."
  ],
  "quizBlueprint": {
    "frequency": "weekly_assessment",
    "questionsPerCheck": 20,
    "totalQuestions": 20,
    "timeLimitMinutes": 25,
    "questionTypes": [
      {
        "type": "mcq_single",
        "percentage": 100,
        "pointsEach": 1,
        "bloomsLevels": [
          1,
          2,
          3,
          4
        ]
      }
    ],
    "difficultyDistribution": {
      "easy": 6,
      "medium": 10,
      "hard": 4
    },
    "feedbackMode": "after_submit",
    "adaptive": false,
    "masteryThreshold": 0.8
  },
  "lessons": [
    {
      "id": "gaokao-prep-101-l01",
      "title": "Understanding the Gaokao: Structure and Study Planning",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "gaokao-prep-101-l01-a1",
          "type": "image",
          "title": "Gaokao Exam Blueprint",
          "content": "Infographic showing the subjects, sections, question types, and scoring for the National College Entrance Examination."
        },
        {
          "id": "gaokao-prep-101-l01-a2",
          "type": "animation",
          "title": "Sample Study Cycle",
          "content": "Animation demonstrating a weekly study cycle, including subject blocks, practice tests, and review sessions."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l02",
      "title": "Mastering Gaokao Chinese: Reading and Analysis",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Identify a key theme in a classical Chinese passage.",
          "Explain how literary devices support this theme.",
          "Set a goal for improving your passage analysis speed."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Literary Element Sort",
          "description": "Categorize phrases from a classical Chinese text as either 'Main Idea', 'Supporting Detail', or 'Literary Device'.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each phrase from the text.",
            "Drag it to the bucket that best describes its function.",
            "Review your choices to understand passage structure."
          ],
          "data": {
            "buckets": [
              {
                "id": "main_idea",
                "label": "Main Idea"
              },
              {
                "id": "supporting_detail",
                "label": "Supporting Detail"
              },
              {
                "id": "literary_device",
                "label": "Literary Device"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A statement summarizing the author's core argument.",
                "correctBucketId": "main_idea"
              },
              {
                "id": "i2",
                "label": "A specific historical fact used as evidence.",
                "correctBucketId": "supporting_detail"
              },
              {
                "id": "i3",
                "label": "A metaphor comparing nature to human struggle.",
                "correctBucketId": "literary_device"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gaokao-prep-101-l02-a1",
          "type": "image",
          "title": "Chinese Passage Annotation Guide",
          "content": "A visual guide showing how to mark up reading passages for themes, evidence, and author's tone."
        },
        {
          "id": "gaokao-prep-101-l02-a2",
          "type": "animation",
          "title": "Model Essay Structure",
          "content": "Animation breaking down the components of a high-scoring Gaokao essay."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l03",
      "title": "Gaokao Mathematics: Problem-Solving Strategies",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "gaokao-prep-101-l03-q1",
          "text": "You're consistently making careless errors in early math problems. What's the best first step to fix this?",
          "skillId": "skill-error-analysis",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope it gets better with practice."
            },
            {
              "id": "b",
              "text": "Memorize answer patterns for the first few questions."
            },
            {
              "id": "c",
              "text": "Slow down for the first 10 minutes, double-check initial steps, and log the types of errors you catch."
            },
            {
              "id": "d",
              "text": "Skip the first few questions and come back to them later."
            }
          ],
          "correctOptionId": "c",
          "hint": "The best strategies involve immediate, focused changes to your process.",
          "explanation": "Slowing down and actively checking your work at the beginning of a test builds momentum and prevents early mistakes from causing bigger problems later."
        },
        {
          "id": "gaokao-prep-101-l03-q2",
          "text": "Your pacing is inconsistent during math drills. What's the most effective way to diagnose the problem?",
          "skillId": "skill-time-management",
          "options": [
            {
              "id": "a",
              "text": "Redo the same drill immediately at a faster speed."
            },
            {
              "id": "b",
              "text": "Ask a friend how long they take on each question."
            },
            {
              "id": "c",
              "text": "Do more questions to increase your overall speed."
            },
            {
              "id": "d",
              "text": "Analyze your time per question to find which problem types are slowing you down, then practice them specifically."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that uses data to find the root cause of the issue.",
          "explanation": "Effective time management comes from identifying specific bottlenecks, not just trying to go faster overall."
        },
        {
          "id": "gaokao-prep-101-l03-q3",
          "text": "Which weekly plan is most likely to improve your math accuracy?",
          "skillId": "skill-study-planning",
          "options": [
            {
              "id": "a",
              "text": "Two sessions on your weakest topic, one mixed practice test, and one re-test of corrected errors."
            },
            {
              "id": "b",
              "text": "Only untimed practice until you feel more confident."
            },
            {
              "id": "c",
              "text": "Studying a different random topic each day."
            },
            {
              "id": "d",
              "text": "Saving all your error correction for the weekend."
            }
          ],
          "correctOptionId": "a",
          "hint": "A good plan combines focused practice on weak areas with testing under realistic conditions.",
          "explanation": "Improvement requires a cycle of targeted learning, mixed practice to simulate the exam, and re-testing to ensure the lessons stick."
        },
        {
          "id": "gaokao-prep-101-l03-q4",
          "text": "You're struggling with both difficult concepts and managing your time. What should you fix first?",
          "skillId": "skill-exam-resilience",
          "options": [
            {
              "id": "a",
              "text": "The rarest and most difficult concept."
            },
            {
              "id": "b",
              "text": "Your time management strategy, as it affects all questions."
            },
            {
              "id": "c",
              "text": "Only the topics you feel confident about."
            },
            {
              "id": "d",
              "text": "Switch to a new textbook."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize the fix that has the broadest impact on your score.",
          "explanation": "Fixing a fundamental process issue like time management will improve your performance across the entire test, creating better conditions to tackle content gaps."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Math Strategy Matching",
          "description": "Match each common math challenge with the most effective strategy to overcome it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each challenge on the left.",
            "Find the best strategic response on the right.",
            "Match the pairs to build your problem-solving toolkit."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Making calculation errors on simple problems."
              },
              {
                "id": "l2",
                "label": "Getting stuck on complex geometry questions."
              },
              {
                "id": "l3",
                "label": "Forgetting key formulas under pressure."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Implement a 2-minute final check to verify arithmetic."
              },
              {
                "id": "r2",
                "label": "Use a 'skip-and-return' strategy to solve easier problems first."
              },
              {
                "id": "r3",
                "label": "Create and review formula flashcards daily."
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
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "gaokao-prep-101-l03-a1",
          "type": "image",
          "title": "Math Problem-Type Decision Tree",
          "content": "Flowchart helping students quickly identify the type of math problem and the best strategy to solve it."
        },
        {
          "id": "gaokao-prep-101-l03-a2",
          "type": "animation",
          "title": "Solving a Multi-Step Problem",
          "content": "Step-by-step animation of solving a complex Gaokao math problem, highlighting key decision points."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l04",
      "title": "Gaokao English: Comprehension and Composition",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Identify the main idea in an English reading passage.",
          "Find two pieces of evidence that support the main idea.",
          "Set a personal goal for improving your English writing clarity."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l04-ia1",
          "type": "matching_pairs",
          "title": "Grammar Error Matching",
          "description": "Match the incorrect sentence with the type of grammatical error it contains.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each incorrect sentence on the left.",
            "Identify the specific grammar rule that is broken.",
            "Match the sentence to the correct error type on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "The team of players are celebrating."
              },
              {
                "id": "l2",
                "label": "Yesterday, I will go to the store."
              },
              {
                "id": "l3",
                "label": "She gave the book to John and I."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Subject-Verb Agreement Error"
              },
              {
                "id": "r2",
                "label": "Incorrect Verb Tense"
              },
              {
                "id": "r3",
                "label": "Pronoun Case Error"
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
          "id": "gaokao-prep-101-l04-a1",
          "type": "image",
          "title": "Common English Idioms and Phrases",
          "content": "Infographic listing frequently tested idioms with examples."
        },
        {
          "id": "gaokao-prep-101-l04-a2",
          "type": "animation",
          "title": "English Essay Outline",
          "content": "Animation showing how to structure a compelling English essay, from introduction to conclusion."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l05",
      "title": "Strategies for Elective Subjects (Science/Humanities)",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "gaokao-prep-101-l05-a1",
          "type": "image",
          "title": "Science vs. Humanities Study Models",
          "content": "A comparative chart showing effective study techniques for memorization-heavy vs. problem-solving-heavy subjects."
        },
        {
          "id": "gaokao-prep-101-l05-a2",
          "type": "animation",
          "title": "Concept Mapping for History",
          "content": "Animation demonstrating how to create a concept map to link historical events, figures, and causes."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l06",
      "title": "Building Speed and Maintaining Accuracy",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "gaokao-prep-101-l06-q1",
          "text": "Your practice test results show you are accurate but too slow. What is the best way to improve your speed?",
          "skillId": "skill-time-management",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content to challenge yourself."
            },
            {
              "id": "b",
              "text": "Practice with timed mini-drills on specific question types to build fluency."
            },
            {
              "id": "c",
              "text": "Focus only on your final score and ignore how long it takes."
            },
            {
              "id": "d",
              "text": "Stop practicing and just review your notes."
            }
          ],
          "correctOptionId": "b",
          "hint": "Improving speed requires practicing under timed conditions.",
          "explanation": "Targeted, timed drills on familiar problems build speed and confidence, which then translates to better performance on full-length tests."
        },
        {
          "id": "gaokao-prep-101-l06-q2",
          "text": "You start practice tests strong, but your accuracy drops near the end. What does this pattern suggest?",
          "skillId": "skill-exam-resilience",
          "options": [
            {
              "id": "a",
              "text": "You should spend more time on every question to be safe."
            },
            {
              "id": "b",
              "text": "You need to work on your mental stamina and pacing."
            },
            {
              "id": "c",
              "text": "The questions at the end are always harder."
            },
            {
              "id": "d",
              "text": "You should take a long break in the middle of the test."
            }
          ],
          "correctOptionId": "b",
          "hint": "Consider factors beyond just knowledge, like focus and energy.",
          "explanation": "A drop in accuracy over time often points to mental fatigue. Practicing with full-length simulations and having a clear pacing plan can help maintain focus."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "Pace Control Board",
          "description": "Place each tactic in the right phase of a timed drill to build a strong pacing strategy.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each tactic to the Plan, Execute, or Review phase.",
            "Check your placements.",
            "Apply one tactic in your next timed drill."
          ],
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
                "id": "review",
                "label": "Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Identify 'quick win' question types to answer first.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use a timer for each section to stay on track.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Analyze drills to see where you lost the most time.",
                "correctTargetId": "review"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 2,
        "totalQuestions": 2,
        "timeLimitMinutes": 5,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 2,
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
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "gaokao-prep-101-l06-a1",
          "type": "image",
          "title": "Pacing Chart",
          "content": "A sample chart for students to track their time per question and identify areas for improvement."
        },
        {
          "id": "gaokao-prep-101-l06-a2",
          "type": "image",
          "title": "Accuracy Checklist",
          "content": "A checklist of common errors (e.g., calculation, reading comprehension) to use when reviewing practice tests."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l07",
      "title": "The Error Notebook: Learning from Mistakes",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l07-ia1",
          "type": "sorting_buckets",
          "title": "Categorize Your Errors",
          "description": "Effective error analysis starts with proper categorization. Sort these common mistakes into the correct buckets.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each type of mistake.",
            "Drag it to the bucket that best describes its root cause.",
            "Understanding the 'why' behind a mistake is the first step to fixing it."
          ],
          "data": {
            "buckets": [
              {
                "id": "careless",
                "label": "Careless Mistake"
              },
              {
                "id": "concept",
                "label": "Concept Gap"
              },
              {
                "id": "strategy",
                "label": "Strategy Error"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Forgot a math formula",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Misread the question",
                "correctBucketId": "careless"
              },
              {
                "id": "i3",
                "label": "Spent too much time on a hard question",
                "correctBucketId": "strategy"
              },
              {
                "id": "i4",
                "label": "Didn't understand a key vocabulary word",
                "correctBucketId": "concept"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gaokao-prep-101-l07-a1",
          "type": "image",
          "title": "Sample Error Notebook Entry",
          "content": "Image of a well-structured error log entry, showing the problem, the mistake, the correct method, and key takeaway."
        },
        {
          "id": "gaokao-prep-101-l07-a2",
          "type": "animation",
          "title": "From Error to Insight",
          "content": "Animation showing the process of analyzing a mistake and creating a plan to avoid it in the future."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l08",
      "title": "Using Past Papers Strategically",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Identify one recurring weakness from your last three practice tests.",
          "Describe a strategy to address this weakness.",
          "Set a performance goal for the next past paper you attempt."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Exam Section Strategy Builder",
          "description": "A well-planned exam is a successful exam. Drag each action into the correct phase of the test.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each action to the Warm-up, Core, or Review phase.",
            "Check that your sequence is logical.",
            "Use this structure in your next practice test."
          ],
          "data": {
            "targets": [
              {
                "id": "warmup",
                "label": "Warm-up (First 15 mins)"
              },
              {
                "id": "core",
                "label": "Core Section (Middle 60 mins)"
              },
              {
                "id": "review",
                "label": "Review & Final Check (Last 15 mins)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Tackle high-confidence, easy questions",
                "correctTargetId": "warmup"
              },
              {
                "id": "d2",
                "label": "Work through challenging, multi-step problems",
                "correctTargetId": "core"
              },
              {
                "id": "d3",
                "label": "Verify answers for flagged questions",
                "correctTargetId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gaokao-prep-101-l08-a1",
          "type": "image",
          "title": "Past Paper Analysis Matrix",
          "content": "A template for students to track their performance on past papers by topic and question type."
        },
        {
          "id": "gaokao-prep-101-l08-a2",
          "type": "animation",
          "title": "Simulating Exam Conditions",
          "content": "Animation showing how to set up a realistic practice session at home, including timing, materials, and environment."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l09",
      "title": "Full-Length Mock Exam Simulation",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "gaokao-prep-101-l09-q1",
          "text": "During a mock exam, you feel overwhelmed by a difficult section. What is the best course of action?",
          "skillId": "skill-exam-resilience",
          "options": [
            {
              "id": "a",
              "text": "Take a 10-second break: close your eyes, take a deep breath, and reset."
            },
            {
              "id": "b",
              "text": "Give up on that section and move to the next one."
            },
            {
              "id": "c",
              "text": "Keep pushing through even if you are making no progress."
            },
            {
              "id": "d",
              "text": "Spend the rest of the time checking answers you've already completed."
            }
          ],
          "correctOptionId": "a",
          "hint": "Small, strategic breaks can be more effective than forcing your way through a problem.",
          "explanation": "A brief mental reset can break a cycle of panic, allowing you to re-approach the problem with a clearer mind and avoid costly mistakes."
        },
        {
          "id": "gaokao-prep-101-l09-q2",
          "text": "After a full mock exam, what is the most valuable first step in your review process?",
          "skillId": "skill-strategic-review",
          "options": [
            {
              "id": "a",
              "text": "Immediately take another mock exam to see if you improve."
            },
            {
              "id": "b",
              "text": "Categorize your errors to identify patterns in your mistakes."
            },
            {
              "id": "c",
              "text": "Focus only on the questions you got right to build confidence."
            },
            {
              "id": "d",
              "text": "Check your overall score and then file the test away."
            }
          ],
          "correctOptionId": "b",
          "hint": "The goal of a mock exam is to gather data for improvement.",
          "explanation": "Analyzing and categorizing your errors (e.g., by subject, question type, or error type) provides the specific feedback needed to guide your future study."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "Post-Mock Exam Triage",
          "description": "After a mock exam, you need to prioritize. Sort these findings into the correct action bucket.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each finding from your mock exam analysis.",
            "Decide if it's something to fix now, review deeply, or monitor.",
            "Drag each item to the appropriate bucket."
          ],
          "data": {
            "buckets": [
              {
                "id": "fix_now",
                "label": "Fix Immediately"
              },
              {
                "id": "review_deeply",
                "label": "Review Concept"
              },
              {
                "id": "monitor",
                "label": "Monitor Pattern"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A calculation error on one problem.",
                "correctBucketId": "fix_now"
              },
              {
                "id": "i2",
                "label": "Consistently missing questions on trigonometry.",
                "correctBucketId": "review_deeply"
              },
              {
                "id": "i3",
                "label": "Feeling rushed at the end of the section.",
                "correctBucketId": "monitor"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 2,
        "totalQuestions": 2,
        "timeLimitMinutes": 5,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 2,
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
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "gaokao-prep-101-l09-a1",
          "type": "image",
          "title": "Mental Stamina Checklist",
          "content": "A checklist of techniques for maintaining focus and managing stress during a long exam."
        },
        {
          "id": "gaokao-prep-101-l09-a2",
          "type": "animation",
          "title": "Mock Exam Review Process",
          "content": "Step-by-step animation on how to effectively review a completed mock exam to maximize learning."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l10",
      "title": "Targeted Remediation: Closing Knowledge Gaps",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Look at your error notebook and identify your most common type of mistake.",
          "Create a one-sentence action plan to address it.",
          "Schedule a 30-minute session in your calendar to work on it."
        ]
      },
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l10-ia1",
          "type": "matching_pairs",
          "title": "Error Pattern to Action Plan",
          "description": "Match the identified error pattern to the most effective remediation action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the error pattern on the left.",
            "Choose the most direct and effective action from the right.",
            "Match the pairs to practice building smart study plans."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Frequent mistakes in chemical equations"
              },
              {
                "id": "l2",
                "label": "Low scores on reading comprehension"
              },
              {
                "id": "l3",
                "label": "Timing out on the math section"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Drill 10 practice problems daily for a week"
              },
              {
                "id": "r2",
                "label": "Read and summarize one article daily"
              },
              {
                "id": "r3",
                "label": "Complete three timed mini-sections"
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
          "id": "gaokao-prep-101-l10-a1",
          "type": "image",
          "title": "Remediation Priority Matrix",
          "content": "A 2x2 grid helping students prioritize what to fix based on error frequency and point value."
        },
        {
          "id": "gaokao-prep-101-l10-a2",
          "type": "animation",
          "title": "A 3-Day Fix-It Cycle",
          "content": "Animation showing a 3-day cycle: Day 1 (Identify & Re-learn), Day 2 (Targeted Practice), Day 3 (Re-test)."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l11",
      "title": "Advanced Strategy: Timed Sprints",
      "type": "video",
      "duration": 11,
      "learningAids": [
        {
          "id": "gaokao-prep-101-l11-a1",
          "type": "image",
          "title": "Sprint Planning Template",
          "content": "A template for designing a 25-minute 'sprint' session focused on a specific skill or problem type."
        },
        {
          "id": "gaokao-prep-101-l11-a2",
          "type": "animation",
          "title": "Analyzing Sprint Results",
          "content": "Animation showing how to interpret the results of a timed sprint to adjust pacing strategies."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l12",
      "title": "Drill: Mixed-Subject Problem Sets",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "gaokao-prep-101-l12-q1",
          "text": "What is the main benefit of practicing with mixed-subject problem sets?",
          "skillId": "skill-strategic-review",
          "options": [
            {
              "id": "a",
              "text": "It allows you to focus deeply on a single topic."
            },
            {
              "id": "b",
              "text": "It's easier than studying one subject at a time."
            },
            {
              "id": "c",
              "text": "It simulates the exam's demand to switch between different types of thinking."
            },
            {
              "id": "d",
              "text": "It guarantees you will not forget any information."
            }
          ],
          "correctOptionId": "c",
          "hint": "Think about how the real Gaokao is structured.",
          "explanation": "The Gaokao requires you to shift between subjects and skills quickly. Mixed-subject drills train this mental flexibility, which is crucial for test day."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Mixed Drill Challenge Matching",
          "description": "Align each common challenge faced during mixed drills with the strongest corrective action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Align each pair.",
            "Check your result.",
            "Apply one correction in the next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Struggling to switch between Physics and Chemistry concepts."
              },
              {
                "id": "l2",
                "label": "Forgetting key historical dates during a mixed drill."
              },
              {
                "id": "l3",
                "label": "Pacing is thrown off by a difficult math problem."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Practice with short, mixed-subject sets to improve mental flexibility."
              },
              {
                "id": "r2",
                "label": "Use mnemonic devices and review timelines before the drill."
              },
              {
                "id": "r3",
                "label": "Set a strict 3-minute time limit per problem and move on."
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
        "questionsPerCheck": 1,
        "totalQuestions": 1,
        "timeLimitMinutes": 4,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 1,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 1
      },
      "metadata": {
        "examDrill": "lesson_drill"
      },
      "learningAids": [
        {
          "id": "gaokao-prep-101-l12-a1",
          "type": "image",
          "title": "Mental Agility Drills",
          "content": "Examples of short drills designed to improve the speed of switching between different subjects or problem types."
        },
        {
          "id": "gaokao-prep-101-l12-a2",
          "type": "animation",
          "title": "Building a Mixed Set",
          "content": "Animation showing how to select problems from different subjects to create a balanced and effective mixed practice set."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l13",
      "title": "Adaptive Practice: Ensuring Concepts Stick",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l13-ia1",
          "type": "matching_pairs",
          "title": "Error and Next Step Matching",
          "description": "Match the error to the most effective follow-up action to ensure the lesson is learned.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the error on the left.",
            "Choose the smartest next step from the right.",
            "Match the pairs to build better study habits."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Error: Forgot a formula"
              },
              {
                "id": "l2",
                "label": "Error: Misread the question"
              },
              {
                "id": "l3",
                "label": "Error: Ran out of time"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Next Step: Review flashcards and retry a similar problem"
              },
              {
                "id": "r2",
                "label": "Next Step: Slow down and highlight keywords on the next 3 problems"
              },
              {
                "id": "r3",
                "label": "Next Step: Do a timed drill with fewer questions"
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
          "id": "gaokao-prep-101-l13-a1",
          "type": "image",
          "title": "The Forgetting Curve",
          "content": "An infographic explaining the 'forgetting curve' and how spaced repetition helps with long-term memory."
        },
        {
          "id": "gaokao-prep-101-l13-a2",
          "type": "animation",
          "title": "Smart Practice Loop",
          "content": "Animation showing an adaptive practice loop: Attempt -> Analyze Error -> Re-learn -> Retry Similar Problem -> Test on a harder problem."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l14",
      "title": "Readiness Check: Are You Exam-Ready?",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Rate your confidence level for each Gaokao subject on a scale of 1-5.",
          "Identify one subject that needs a final push.",
          "What is one action you will take this week to improve in that subject?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l14-ia1",
          "type": "sorting_buckets",
          "title": "Final Readiness Self-Assessment",
          "description": "Be honest about your current status. Sort these readiness statements into the appropriate bucket.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each statement about exam readiness.",
            "Drag it to 'Ready to Go' if it describes you well.",
            "Drag it to 'Needs More Work' if it's an area for improvement."
          ],
          "data": {
            "buckets": [
              {
                "id": "ready",
                "label": "Ready to Go"
              },
              {
                "id": "needs_work",
                "label": "Needs More Work"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "I can finish most sections with time to spare.",
                "correctBucketId": "ready"
              },
              {
                "id": "i2",
                "label": "I have a clear strategy for difficult questions.",
                "correctBucketId": "ready"
              },
              {
                "id": "i3",
                "label": "I still make frequent careless errors.",
                "correctBucketId": "needs_work"
              },
              {
                "id": "i4",
                "label": "My error notebook is up to date.",
                "correctBucketId": "ready"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gaokao-prep-101-l14-a1",
          "type": "image",
          "title": "Pre-Exam Checklist",
          "content": "A practical checklist for the day before and the morning of the exam, covering materials, nutrition, and mindset."
        },
        {
          "id": "gaokao-prep-101-l14-a2",
          "type": "animation",
          "title": "Visualizing Success",
          "content": "A short, guided animation to help students mentally rehearse the exam day, from waking up to finishing the last question."
        }
      ]
    },
    {
      "id": "gaokao-prep-101-l15",
      "title": "The Final Week: Sprint and Recovery",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "gaokao-prep-101-l15-q1",
          "text": "In the final week before the Gaokao, what is the most effective use of your study time?",
          "skillId": "skill-study-planning",
          "options": [
            {
              "id": "a",
              "text": "Learning a completely new and difficult topic."
            },
            {
              "id": "b",
              "text": "Taking multiple full-length mock exams every day."
            },
            {
              "id": "c",
              "text": "Light review of key concepts, formulas, and your error notebook."
            },
            {
              "id": "d",
              "text": "Stopping all studying to relax completely."
            }
          ],
          "correctOptionId": "c",
          "hint": "The goal is to be confident and rested, not exhausted.",
          "explanation": "Intense new learning or excessive testing can lead to burnout. The final week is best for reinforcing what you already know and ensuring you are mentally and physically prepared."
        },
        {
          "id": "gaokao-prep-101-l15-q2",
          "text": "You finish one section early but run out of time on another. What does this indicate?",
          "skillId": "skill-time-management",
          "options": [
            {
              "id": "a",
              "text": "You are an expert in the first subject."
            },
            {
              "id": "b",
              "text": "You need a better overall time allocation plan for the entire exam."
            },
            {
              "id": "c",
              "text": "You should always rush through your best subject."
            },
            {
              "id": "d",
              "text": "The second section was unfairly difficult."
            }
          ],
          "correctOptionId": "b",
          "hint": "Pacing should be managed across the entire exam, not just within one section.",
          "explanation": "A good pacing plan allocates a specific amount of time to each section based on its length and difficulty, ensuring you don't 'borrow' time from a harder section."
        },
        {
          "id": "gaokao-prep-101-l15-q3",
          "text": "With five minutes left in a section, what is the best use of your time?",
          "skillId": "skill-strategic-review",
          "options": [
            {
              "id": "a",
              "text": "Start the next section early."
            },
            {
              "id": "b",
              "text": "Change several answers randomly."
            },
            {
              "id": "c",
              "text": "Review questions you flagged as uncertain and check for careless errors."
            },
            {
              "id": "d",
              "text": "Reread the instructions for the section."
            }
          ],
          "correctOptionId": "c",
          "hint": "Focus on actions that have the highest chance of catching mistakes.",
          "explanation": "A targeted review of flagged items and a quick scan for obvious errors is the most efficient way to use the final minutes to secure points."
        },
        {
          "id": "gaokao-prep-101-l15-q4",
          "text": "After reviewing your final mock exam, which problem should you prioritize fixing?",
          "skillId": "skill-error-analysis",
          "options": [
            {
              "id": "a",
              "text": "A mistake on a very rare and obscure question type."
            },
            {
              "id": "b",
              "text": "A mistake on a common, high-frequency question type."
            },
            {
              "id": "c",
              "text": "A question you got right but weren't sure about."
            },
            {
              "id": "d",
              "text": "A question that was marked incorrectly by the grading key."
            }
          ],
          "correctOptionId": "b",
          "hint": "Focus your energy where it will have the biggest impact on your score.",
          "explanation": "Fixing a mistake on a common question type is more valuable because that knowledge is likely to apply to multiple questions on the actual exam."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gaokao-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Final Week Priority Sort",
          "description": "Sort these final-week activities from highest to lowest priority to create a smart and balanced plan.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Review each activity.",
            "Sort it into the appropriate priority lane for the last week of prep.",
            "Use this to build your own final week schedule."
          ],
          "data": {
            "buckets": [
              {
                "id": "high",
                "label": "High Priority (Do Daily)"
              },
              {
                "id": "med",
                "label": "Medium Priority (Do 2-3 Times)"
              },
              {
                "id": "low",
                "label": "Low Priority (Avoid or Do Once)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Reviewing your top 10 errors from your notebook.",
                "correctBucketId": "high"
              },
              {
                "id": "i2",
                "label": "Taking a full-length timed mock exam.",
                "correctBucketId": "low"
              },
              {
                "id": "i3",
                "label": "Learning a brand new, difficult topic.",
                "correctBucketId": "low"
              },
              {
                "id": "i4",
                "label": "Light review of key formulas and concepts.",
                "correctBucketId": "high"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "mock_assessment",
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
        "masteryThreshold": 0.8
      },
      "metadata": {
        "examDrill": "full_mock"
      },
      "learningAids": [
        {
          "id": "gaokao-prep-101-l15-a1",
          "type": "image",
          "title": "Exam Day Game Plan",
          "content": "A one-page summary of your personal strategies for pacing, stress management, and question-handling for test day."
        },
        {
          "id": "gaokao-prep-101-l15-a2",
          "type": "animation",
          "title": "The Recovery Cycle",
          "content": "Animation showing the importance of sleep, nutrition, and light exercise during the multi-day Gaokao exam period."
        }
      ]
    }
  ]
};
