import type { LearningModule } from "@/lib/modules/types";

export const act_prep_101_Module: LearningModule = {
  "id": "act-prep-101",
  "title": "ACT Prep Foundations",
  "description": "Crush the ACT with targeted strategies for English, Math, Reading, and Science. Level up your stamina, hack your pacing, and use smart analytics to hit your dream score.",
  "subject": "Exam Prep",
  "tags": [
    "exam-prep",
    "assessment",
    "advanced",
    "college-readiness"
  ],
  "minAge": 14,
  "maxAge": 19,
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
    "Build structured ACT readiness workflows for all four sections",
    "Improve speed and accuracy under strict timed constraints",
    "Use analytics-based revision loops to identify and close weak areas"
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
      "id": "act-prep-101-l01",
      "title": "ACT Overview and Scoring Game Plan",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, modern flat-lay illustration of a high school student's desk. A sleek tablet displays a colorful, glowing pie chart breaking down the ACT sections: English, Math, Reading, and Science. A stylized glowing roadmap leads out of the tablet, symbolizing the prep journey. Vibrant neon blue and orange accents, 8k resolution, highly appealing to teens.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic 3D animation starting with a locked futuristic vault labeled 'Target ACT Score'. Four glowing energy keys, each representing a test section, fly into the frame and unlock the vault, revealing a glowing college acceptance letter. Fast-paced, energetic transitions, cinematic lighting, upbeat and motivating.",
      "interactiveActivities": [
        {
          "id": "act-prep-101-l01-ia1",
          "type": "matching_pairs",
          "title": "Section Breakdown Match",
          "description": "Match each ACT section to its core challenge to build your mental game plan.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "instructions": [
            "Read the core challenge on the left.",
            "Match it to the correct ACT section on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "75 questions in 45 minutes. Pure speed and grammar rules."
              },
              {
                "id": "l2",
                "label": "60 questions in 60 minutes. Escalating difficulty."
              },
              {
                "id": "l3",
                "label": "40 questions in 35 minutes. Data interpretation and logic."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "English"
              },
              {
                "id": "r2",
                "label": "Math"
              },
              {
                "id": "r3",
                "label": "Science"
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
          "id": "act-prep-101-l01-a1",
          "type": "image",
          "title": "The ACT Blueprint",
          "content": "Visual breakdown of the ACT structure: 4 sections, total questions, and time limits, highlighting the fast-paced nature of the exam."
        },
        {
          "id": "act-prep-101-l01-a2",
          "type": "animation",
          "title": "How Scoring Works",
          "content": "Animated walkthrough showing how raw scores convert to the 1-36 scale, emphasizing that there is no penalty for guessing."
        }
      ]
    },
    {
      "id": "act-prep-101-l02",
      "title": "English: Usage, Mechanics, and Rhetoric",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic digital illustration of a glowing holographic sentence floating above a notebook. A digital pen is actively correcting a grammar mistake, with sparks of light where the correction is made. Cyberpunk-inspired neon purple and teal color palette, modern and engaging.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced 2D motion graphics video showing a messy, chaotic paragraph transforming into a clean, concise, and perfectly punctuated text. Words slide into place like puzzle pieces with satisfying snap animations. Upbeat lo-fi background vibe.",
      "metadata": {
        "prompts": [
          "Identify one major grammar rule tested on the ACT English section.",
          "Apply the 'shortest is usually best' rule to a practice question.",
          "Set a target for your next English practice run."
        ]
      },
      "interactiveActivities": [
        {
          "id": "act-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "English Strategy Mapping",
          "description": "Map each ACT English strategy to the correct phase of your workflow.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each strategy cue.",
            "Drag it to the Plan, Execute, or Reflect phase.",
            "Review your mappings to build your English game plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Pre-Passage Plan"
              },
              {
                "id": "execute",
                "label": "Active Solving"
              },
              {
                "id": "reflect",
                "label": "Post-Drill Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Skim the title and first paragraph to grasp the passage's tone.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use the 'Delete' option first if the sentence makes sense without the underlined portion.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Log whether a missed question was a grammar rule gap or a reading comprehension error.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l02-a1",
          "type": "image",
          "title": "The 4 C's of ACT English",
          "content": "Infographic detailing the 4 C's: Complete, Consistent, Clear, and Concise."
        },
        {
          "id": "act-prep-101-l02-a2",
          "type": "animation",
          "title": "Punctuation Power",
          "content": "Short animation demonstrating the exact differences between commas, dashes, and semicolons on the ACT."
        }
      ]
    },
    {
      "id": "act-prep-101-l03",
      "title": "Math: Core Skills and Time Traps",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A stylized, high-tech illustration of a glowing geometric grid. A 3D graphing calculator projects a holographic parabola. Floating math symbols (pi, square roots, theta) surround the projection. Cool blue and neon green tones, futuristic and academic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a ticking stopwatch morphing into a pie chart, then into a complex geometry problem. The problem solves itself rapidly using a shortcut method, highlighting the importance of speed and strategy in ACT Math.",
      "questions": [
        {
          "id": "act-prep-101-l03-q1",
          "text": "You keep missing geometry questions during your ACT practice runs. What's the best move before your next timed problem set?",
          "skillId": "act-prep-101-skill-math-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip geometry review and just focus on algebra to make up the points."
            },
            {
              "id": "b",
              "text": "Track your total score and hope geometry clicks next time."
            },
            {
              "id": "c",
              "text": "Run a short, untimed geometry drill, log why you missed each question, and review the formulas before retesting."
            },
            {
              "id": "d",
              "text": "Switch to studying Science to give your brain a break."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for your specific weakness.",
          "explanation": "Fast, targeted feedback plus immediate correction is the ultimate cheat code for fixing a specific math weakness."
        },
        {
          "id": "act-prep-101-l03-q2",
          "text": "You notice you always run out of time on the last 15 Math questions. What should you diagnose first?",
          "skillId": "act-prep-101-skill-math-pacing",
          "options": [
            {
              "id": "a",
              "text": "Retake the section immediately and just try to read faster."
            },
            {
              "id": "b",
              "text": "Locate the exact question numbers where your time per question spikes, and set micro-checkpoints for your next run."
            },
            {
              "id": "c",
              "text": "Use a strict 1-minute-per-question rule for the entire test."
            },
            {
              "id": "d",
              "text": "Guess on the first 15 questions to save time for the end."
            }
          ],
          "correctOptionId": "b",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when you find your highest-cost decision points (usually questions 30-45) and manage your time around them."
        },
        {
          "id": "act-prep-101-l03-q3",
          "text": "You reviewed a tricky trigonometry concept, but you missed a similar question on the next practice test. How do you make the concept stick?",
          "skillId": "act-prep-101-skill-math-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair the corrected error with 3-5 similar 'near-transfer' practice items immediately, then test it under a time limit."
            },
            {
              "id": "b",
              "text": "Keep re-reading your notes until you memorize the formula."
            },
            {
              "id": "c",
              "text": "Only practice the hardest possible trig questions from now on."
            },
            {
              "id": "d",
              "text": "Rewatch the lesson video without doing any practice problems."
            }
          ],
          "correctOptionId": "a",
          "hint": "The strongest option forces immediate, active retrieval.",
          "explanation": "Correction becomes durable when you immediately test the fix on similar items under realistic constraints. Active recall beats passive reading every time."
        },
        {
          "id": "act-prep-101-l03-q4",
          "text": "During your post-drill review, you find three types of errors: a careless arithmetic mistake, a forgotten area formula, and a complete misunderstanding of matrices. Which should you fix first for the biggest score impact?",
          "skillId": "act-prep-101-skill-math-priority",
          "options": [
            {
              "id": "a",
              "text": "The matrix problem, because it's the hardest."
            },
            {
              "id": "b",
              "text": "The careless arithmetic mistake, by building a habit of writing out your steps to prevent it from happening on multiple questions."
            },
            {
              "id": "c",
              "text": "Ignore them all and just do another practice test."
            },
            {
              "id": "d",
              "text": "The area formula, but only if it shows up again."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize changes that influence the largest number of questions.",
          "explanation": "High-impact remediation targets repeated process breakdowns (like mental math errors) before edge-case content gaps (like matrices)."
        },
        {
          "id": "act-prep-101-l03-q5",
          "text": "You are stuck between two answer choices on a word problem. What is the best ACT Math strategy to use?",
          "skillId": "act-prep-101-skill-math-strategy",
          "options": [
            {
              "id": "a",
              "text": "Guess 'C' and move on immediately."
            },
            {
              "id": "b",
              "text": "Reread the entire word problem from the beginning."
            },
            {
              "id": "c",
              "text": "Plug the two remaining answer choices back into the equation to see which one works."
            },
            {
              "id": "d",
              "text": "Leave it blank to avoid a guessing penalty."
            }
          ],
          "correctOptionId": "c",
          "hint": "Use the answers to your advantage.",
          "explanation": "Backsolving (plugging in the answers) is a highly effective strategy when you are stuck between choices on the ACT. Let the test do the work for you."
        },
        {
          "id": "act-prep-101-l03-q6",
          "text": "You encounter a question that looks completely foreign and you have no idea how to start. You've already spent 30 seconds staring at it. What's the play?",
          "skillId": "act-prep-101-skill-math-triage",
          "options": [
            {
              "id": "a",
              "text": "Keep staring until inspiration strikes; every point counts."
            },
            {
              "id": "b",
              "text": "Circle the question number, take a strategic guess, and move on. Come back only if time permits."
            },
            {
              "id": "c",
              "text": "Try to derive the formula from scratch."
            },
            {
              "id": "d",
              "text": "Panic and rush through the next five questions to make up the time."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't let one question sink your pacing for the whole section.",
          "explanation": "Strategic skipping is crucial. Cut your losses on high-friction items to ensure you have time for the easier questions at the end."
        }
      ],
      "interactiveActivities": [
        {
          "id": "act-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Math Error Triage",
          "description": "Match the type of math mistake with the best strategy to fix it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the error signal on the left.",
            "Match it to the corrective action on the right.",
            "Apply these fixes in your next practice set."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Missed a question because you solved for 'x' instead of '2x'."
              },
              {
                "id": "l2",
                "label": "Spent 3 minutes on a single geometry problem."
              },
              {
                "id": "l3",
                "label": "Forgot the formula for the area of a circle."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Underline the final question being asked before solving."
              },
              {
                "id": "r2",
                "label": "Implement a strict 60-second 'cut your losses' rule."
              },
              {
                "id": "r3",
                "label": "Add to flashcards and review daily."
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
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
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
          "id": "act-prep-101-l03-a1",
          "type": "image",
          "title": "Math Pacing Guide",
          "content": "Visual breakdown of the 20-20-20 rule for ACT Math pacing."
        },
        {
          "id": "act-prep-101-l03-a2",
          "type": "animation",
          "title": "Backsolving in Action",
          "content": "Step-by-step animation showing how to plug answer choices into an algebraic equation."
        }
      ]
    },
    {
      "id": "act-prep-101-l04",
      "title": "Reading: Passage Strategy and Skimming",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic illustration of a student wearing futuristic augmented reality glasses. The glasses are highlighting key words and main ideas in a dense block of text floating in the air. Warm library lighting mixed with high-tech glowing orange overlays.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced POV animation of a highlighter rapidly scanning a dense reading passage. The highlighter intelligently skips fluff and illuminates only the thesis, topic sentences, and transition words. The text then collapses into a simple, easy-to-read summary.",
      "metadata": {
        "prompts": [
          "Identify your strongest and weakest reading passage types (Prose, Social Science, Humanities, Natural Science).",
          "Practice mapping a passage by only reading the first and last sentences of each paragraph.",
          "Set a pacing goal for your next Reading section."
        ]
      },
      "interactiveActivities": [
        {
          "id": "act-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "Reading Passage Attack Plan",
          "description": "Map the steps of attacking an ACT Reading passage in the correct order.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the reading strategies.",
            "Drag them into the correct phase: Pre-Read, Active Read, or Question Phase.",
            "Use this workflow on your next practice test."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Pre-Read"
              },
              {
                "id": "execute",
                "label": "Active Read"
              },
              {
                "id": "reflect",
                "label": "Question Phase"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Check the blurb for the author, title, and context.",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Underline transition words (however, therefore) and main ideas.",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Answer line-reference questions first before main idea questions.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l04-a1",
          "type": "image",
          "title": "The 4 Passage Types",
          "content": "Visual guide to Prose Fiction, Social Science, Humanities, and Natural Science, including typical structures for each."
        },
        {
          "id": "act-prep-101-l04-a2",
          "type": "animation",
          "title": "Mapping the Passage",
          "content": "Animation showing how to quickly annotate a passage to create a 'map' for finding answers later."
        }
      ]
    },
    {
      "id": "act-prep-101-l05",
      "title": "Science: Data Representation and Reasoning",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A visually striking illustration of a glowing digital clipboard holding complex charts, line graphs, and scatter plots. A magnifying glass hovers over the data, revealing clear, simple trends. Neon green and dark blue color palette, laboratory aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a confusing, cluttered science graph. Suddenly, unnecessary data points fade away, axes are highlighted, and a clear trend line draws itself with a glowing effect. The animation visually demonstrates 'cutting through the noise'.",
      "interactiveActivities": [
        {
          "id": "act-prep-101-l05-ia1",
          "type": "matching_pairs",
          "title": "Graph Literacy Match",
          "description": "Match the visual data cue to the correct interpretation strategy.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "instructions": [
            "Look at the data cue on the left.",
            "Match it to the correct action on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Two lines moving in opposite directions."
              },
              {
                "id": "l2",
                "label": "A question asks about a value beyond the graph's edge."
              },
              {
                "id": "l3",
                "label": "Multiple charts with the same variables."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Identify an inverse relationship."
              },
              {
                "id": "r2",
                "label": "Extrapolate the trend line carefully."
              },
              {
                "id": "r3",
                "label": "Use locator words to find the right figure."
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
          "id": "act-prep-101-l05-a1",
          "type": "image",
          "title": "Graph Literacy 101",
          "content": "Cheat sheet on how to quickly identify variables, units, and trends (direct vs. inverse) on ACT Science graphs."
        },
        {
          "id": "act-prep-101-l05-a2",
          "type": "animation",
          "title": "Locators in Action",
          "content": "Animated guide on how to use 'locator words' in the question to instantly find the right chart or table."
        }
      ]
    },
    {
      "id": "act-prep-101-l06",
      "title": "Pacing Under Time Limits",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A dramatic, high-contrast illustration of a glowing digital stopwatch shattering into pieces, symbolizing breaking free from time anxiety. Vibrant neon red and purple colors, energetic and intense.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A split-screen animation. On the left, a student rushes and makes mistakes as a timer ticks down aggressively. On the right, a student uses strategic checkpoints, moving smoothly and confidently. The right side finishes with a high score.",
      "questions": [
        {
          "id": "act-prep-101-l06-q1",
          "text": "You consistently run out of time on the Reading section, leaving the last 5 questions blank. What is the best adjustment?",
          "skillId": "act-prep-101-skill-pacing-reading",
          "options": [
            {
              "id": "a",
              "text": "Read the passages twice as fast, even if you don't understand them."
            },
            {
              "id": "b",
              "text": "Adopt a strict 8.5-minute-per-passage rule and move on when time is up, even if you have to guess on the last question of that passage."
            },
            {
              "id": "c",
              "text": "Skip the questions and just try to memorize the passage."
            },
            {
              "id": "d",
              "text": "Do the hardest passage first to get it out of the way."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't let one hard passage steal time from an easy one.",
          "explanation": "Strict per-passage time limits prevent you from sacrificing easy points at the end of the test because you got stuck early on."
        },
        {
          "id": "act-prep-101-l06-q2",
          "text": "During the Math section, you realize you are 5 minutes behind your target pace at question 30. What is your immediate move?",
          "skillId": "act-prep-101-skill-pacing-math",
          "options": [
            {
              "id": "a",
              "text": "Panic and randomly guess on the next 10 questions."
            },
            {
              "id": "b",
              "text": "Keep working at your normal pace and hope the questions get easier."
            },
            {
              "id": "c",
              "text": "Implement a 'cut-loss' rule: instantly skip and guess on any multi-step word problem, focusing only on quick algebra/geometry grabs."
            },
            {
              "id": "d",
              "text": "Ask the proctor for more time."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for a solution that maximizes points per minute.",
          "explanation": "When behind pace, you must triage. Skip high-time-cost questions to secure quick, easy points first."
        },
        {
          "id": "act-prep-101-l06-q3",
          "text": "How should you handle the 'Conflicting Viewpoints' passage in the Science section to optimize your time?",
          "skillId": "act-prep-101-skill-pacing-science",
          "options": [
            {
              "id": "a",
              "text": "Read it first because it has the most text."
            },
            {
              "id": "b",
              "text": "Save it for last, as it requires the most reading and synthesis, and knock out the quick data representation passages first."
            },
            {
              "id": "c",
              "text": "Skip it entirely."
            },
            {
              "id": "d",
              "text": "Read only Student 1 and guess on the rest."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize passages with high data-to-text ratios first.",
          "explanation": "The Conflicting Viewpoints passage is a time-sink. Doing it last ensures you've already secured the faster points from graph-based passages."
        },
        {
          "id": "act-prep-101-l06-q4",
          "text": "You find yourself re-reading the same sentence in the English section multiple times without comprehending it. What pacing rule applies here?",
          "skillId": "act-prep-101-skill-pacing-english",
          "options": [
            {
              "id": "a",
              "text": "The 'Bail Out' rule: Pick the shortest answer, circle the question number, and move on."
            },
            {
              "id": "b",
              "text": "The 'Deep Dive' rule: Keep reading until it makes perfect sense."
            },
            {
              "id": "c",
              "text": "The 'Context' rule: Read the entire paragraph from the beginning."
            },
            {
              "id": "d",
              "text": "The 'Grammar' rule: Diagram the sentence on your scratch paper."
            }
          ],
          "correctOptionId": "a",
          "hint": "Don't let brain fog destroy your momentum.",
          "explanation": "When comprehension fails, rely on the 'shortest is best' heuristic for English, guess, and keep moving to protect your pace."
        },
        {
          "id": "act-prep-101-l06-q5",
          "text": "What is the most effective way to practice pacing during your study sessions?",
          "skillId": "act-prep-101-skill-pacing-practice",
          "options": [
            {
              "id": "a",
              "text": "Only take full-length, 3-hour practice tests."
            },
            {
              "id": "b",
              "text": "Never use a timer so you can focus purely on accuracy."
            },
            {
              "id": "c",
              "text": "Use 'sprint drills': practice small chunks (e.g., one reading passage) with a strict, slightly reduced time limit (e.g., 8 minutes instead of 8.5)."
            },
            {
              "id": "d",
              "text": "Listen to fast-paced music while studying."
            }
          ],
          "correctOptionId": "c",
          "hint": "Train harder than the game.",
          "explanation": "Sprint drills build speed and stamina. Training with slightly less time makes the actual test feel more manageable."
        },
        {
          "id": "act-prep-101-l06-q6",
          "text": "With 1 minute left in a section, you still have 4 unanswered questions. What is the mathematically smartest move?",
          "skillId": "act-prep-101-skill-pacing-guessing",
          "options": [
            {
              "id": "a",
              "text": "Try to quickly read and solve at least one of them."
            },
            {
              "id": "b",
              "text": "Leave them blank to avoid a penalty."
            },
            {
              "id": "c",
              "text": "Bubble in the same 'Letter of the Day' (e.g., all C's) for the remaining questions."
            },
            {
              "id": "d",
              "text": "Make a pattern on the bubble sheet (A, B, C, D)."
            }
          ],
          "correctOptionId": "c",
          "hint": "Probability favors consistency when blind guessing.",
          "explanation": "The ACT has no guessing penalty. Picking one 'Letter of the Day' and sticking to it gives you the highest statistical probability of picking up an extra point."
        }
      ],
      "interactiveActivities": [
        {
          "id": "act-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "Pace Control Board",
          "description": "Place each pacing tactic in the right phase to stabilize your test-day timing.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the pacing tactics.",
            "Assign each tactic to Plan, Execute, or Recover.",
            "Apply one tactic in your next timed drill."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Pre-Test Plan"
              },
              {
                "id": "execute",
                "label": "Mid-Test Execution"
              },
              {
                "id": "recover",
                "label": "Falling Behind (Recover)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Memorize the target time for each section (e.g., 8.5 mins per Reading passage).",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Check the clock only at designated checkpoints (e.g., after every 15 math questions).",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Instantly skip the hardest question type to bank easy points first.",
                "correctTargetId": "recover"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
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
          "id": "act-prep-101-l06-a1",
          "type": "image",
          "title": "The ACT Clock",
          "content": "Visual breakdown of minutes-per-question for all four sections."
        },
        {
          "id": "act-prep-101-l06-a2",
          "type": "animation",
          "title": "The Art of the Skip",
          "content": "Animation showing a student confidently skipping a hard question, securing three easy ones, and returning to the hard one later."
        }
      ]
    },
    {
      "id": "act-prep-101-l07",
      "title": "Building Your Error Log",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A highly detailed, aesthetic illustration of a digital journal titled 'Error Log'. Glowing tags like 'Careless Error', 'Concept Gap', and 'Time Trap' float above the pages. A glowing upward trend graph is visible in the background. Cyberpunk study aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation showing a pile of graded ACT tests with red 'X' marks. The 'X' marks magically lift off the paper, transform into glowing data points, and organize themselves into a neat, actionable bar chart showing exactly what the student needs to study next.",
      "interactiveActivities": [
        {
          "id": "act-prep-101-l07-ia1",
          "type": "sorting_buckets",
          "title": "Error Taxonomy Sort",
          "description": "Sort common mistakes into the correct error log categories.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the mistake description.",
            "Sort it into Content Gap, Strategy Error, or Careless Mistake."
          ],
          "data": {
            "buckets": [
              {
                "id": "content",
                "label": "Content Gap"
              },
              {
                "id": "strategy",
                "label": "Strategy Error"
              },
              {
                "id": "careless",
                "label": "Careless Mistake"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Forgot the formula for the area of a trapezoid.",
                "correctBucketId": "content"
              },
              {
                "id": "i2",
                "label": "Spent 4 minutes on one math problem and ran out of time.",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Added 2+3 and got 6 in your head.",
                "correctBucketId": "careless"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l07-a1",
          "type": "image",
          "title": "Error Taxonomy",
          "content": "Chart categorizing mistakes into: Content Gap, Strategy Error, Pacing Issue, and Careless Mistake."
        },
        {
          "id": "act-prep-101-l07-a2",
          "type": "animation",
          "title": "The Review Loop",
          "content": "Animated flowchart showing the process: Take Drill -> Log Errors -> Target Weakness -> Retest."
        }
      ]
    },
    {
      "id": "act-prep-101-l08",
      "title": "Section Drill: English + Reading Stamina",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A split-screen illustration. On the left, a glowing quill pen writes elegant grammar rules. On the right, a glowing magnifying glass scans a dense book. A glowing bridge connects the two sides, symbolizing the mental transition between English and Reading sections.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of a runner on a track. The runner seamlessly passes a baton labeled 'English' to their other hand, which now holds a baton labeled 'Reading'. The background shifts from grammar symbols to floating paragraphs, representing mental agility.",
      "metadata": {
        "prompts": [
          "Identify the biggest difference in how you read for the English section vs. the Reading section.",
          "Practice switching your brain from 'grammar editor' mode to 'reading comprehension' mode.",
          "Set a stamina goal for completing back-to-back verbal sections."
        ]
      },
      "interactiveActivities": [
        {
          "id": "act-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "Context Switching: English vs. Reading",
          "description": "Sort the strategies into the correct section to train your brain to switch gears.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the strategy cue.",
            "Drag it to either the English Section or Reading Section bucket.",
            "Notice how your approach must change between sections."
          ],
          "data": {
            "targets": [
              {
                "id": "english",
                "label": "English Section"
              },
              {
                "id": "reading",
                "label": "Reading Section"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Focus heavily on punctuation and sentence structure.",
                "correctTargetId": "english"
              },
              {
                "id": "d2",
                "label": "Skim for main ideas and author's tone; ignore minor details initially.",
                "correctTargetId": "reading"
              },
              {
                "id": "d3",
                "label": "Read the sentence before and after the underlined portion for context.",
                "correctTargetId": "english"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l08-a1",
          "type": "image",
          "title": "The Verbal Marathon",
          "content": "Infographic showing how to manage mental fatigue during the heavy reading portions of the ACT."
        },
        {
          "id": "act-prep-101-l08-a2",
          "type": "animation",
          "title": "Gear Shifting",
          "content": "Animation demonstrating the mental 'gear shift' required when moving from micro-editing (English) to macro-comprehension (Reading)."
        }
      ]
    },
    {
      "id": "act-prep-101-l09",
      "title": "Section Drill: Math + Science Logic",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic laboratory scene. A glowing holographic equation floats on the left, while a glowing DNA helix and data charts float on the right. A student in the center is manipulating both holograms with their hands, showing mastery of logic and data.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced animation showing a complex math equation transforming into a science data graph. The numbers from the math problem seamlessly become the data points on the graph, highlighting the shared logic and analytical skills needed for both sections.",
      "questions": [
        {
          "id": "act-prep-101-l09-q1",
          "text": "You just finished a grueling 60-minute Math section and now have to jump into Science. Your brain is fried. What is the best transition strategy?",
          "skillId": "act-prep-101-skill-stamina-transition",
          "options": [
            {
              "id": "a",
              "text": "Close your eyes, take three deep breaths, and remind yourself that Science is mostly just reading graphs, not complex math."
            },
            {
              "id": "b",
              "text": "Immediately start reading the first Science passage as fast as possible to keep your adrenaline up."
            },
            {
              "id": "c",
              "text": "Think about the math questions you might have missed to figure out your score."
            },
            {
              "id": "d",
              "text": "Put your head down and rest for the first 5 minutes of the Science section."
            }
          ],
          "correctOptionId": "a",
          "hint": "Reset your mental state before starting a new section.",
          "explanation": "A quick mental reset prevents fatigue from bleeding into the next section. Recognizing that Science requires different skills (data interpretation vs. calculation) helps shift gears."
        },
        {
          "id": "act-prep-101-l09-q2",
          "text": "In the Science section, you see a question asking you to calculate an exact average, but the graph only shows rough data points. What should you do?",
          "skillId": "act-prep-101-skill-science-math",
          "options": [
            {
              "id": "a",
              "text": "Try to estimate the exact coordinates and do long division on your scratch paper."
            },
            {
              "id": "b",
              "text": "Skip it; Science shouldn't have math."
            },
            {
              "id": "c",
              "text": "Look at the answer choices first. They are likely spread far apart, allowing you to visually estimate the average without doing hard math."
            },
            {
              "id": "d",
              "text": "Assume the average is always the middle data point."
            }
          ],
          "correctOptionId": "c",
          "hint": "Use the multiple-choice format to your advantage.",
          "explanation": "ACT Science rarely requires precise calculations. Visual estimation based on the spread of the answer choices is usually enough and saves massive amounts of time."
        },
        {
          "id": "act-prep-101-l09-q3",
          "text": "You are reviewing a mixed Math/Science practice set. You notice you missed several questions because you misread the units (e.g., mm instead of cm). How do you fix this?",
          "skillId": "act-prep-101-skill-attention-detail",
          "options": [
            {
              "id": "a",
              "text": "Just tell yourself to 'read more carefully' next time."
            },
            {
              "id": "b",
              "text": "Create a physical habit: physically circle or underline the units in the question and on the graph axes before looking at the answers."
            },
            {
              "id": "c",
              "text": "Memorize all metric conversions."
            },
            {
              "id": "d",
              "text": "Ignore it; it's just a careless error that won't happen on test day."
            }
          ],
          "correctOptionId": "b",
          "hint": "Rely on physical actions, not just mental reminders.",
          "explanation": "Physical habits (like circling units) force your brain to slow down for a microsecond and acknowledge the detail, preventing 'careless' errors."
        },
        {
          "id": "act-prep-101-l09-q4",
          "text": "A Science passage introduces a complex, intimidating chemical equation you've never seen in school. How should you react?",
          "skillId": "act-prep-101-skill-science-confidence",
          "options": [
            {
              "id": "a",
              "text": "Panic and assume you can't answer the questions."
            },
            {
              "id": "b",
              "text": "Spend 5 minutes trying to balance the equation and understand the chemistry."
            },
            {
              "id": "c",
              "text": "Ignore the complexity. Treat the chemical names as abstract variables (like 'A' and 'B') and focus only on the trends shown in the accompanying charts."
            },
            {
              "id": "d",
              "text": "Guess on all questions for that passage."
            }
          ],
          "correctOptionId": "c",
          "hint": "The ACT tests reasoning, not advanced memorized science.",
          "explanation": "The ACT Science section is designed to look intimidating. Strip away the jargon and treat it like a logic puzzle based on the provided data."
        },
        {
          "id": "act-prep-101-l09-q5",
          "text": "You are running out of time on the Math section and have 5 word problems left. What is the best triage strategy?",
          "skillId": "act-prep-101-skill-math-triage",
          "options": [
            {
              "id": "a",
              "text": "Read the first sentence of each to see which is easiest."
            },
            {
              "id": "b",
              "text": "Skip reading the paragraphs entirely. Look only at the final sentence (the actual question) and the answer choices to see if you can reverse-engineer it."
            },
            {
              "id": "c",
              "text": "Guess 'A' on all of them."
            },
            {
              "id": "d",
              "text": "Try to solve the first one perfectly and leave the rest blank."
            }
          ],
          "correctOptionId": "b",
          "hint": "Find the fastest path to the core of the question.",
          "explanation": "When time is critical, reading the final sentence first tells you exactly what you are looking for, allowing you to skim the rest of the word problem for only the necessary numbers."
        },
        {
          "id": "act-prep-101-l09-q6",
          "text": "What is the most common trap in ACT Science questions that ask you to extrapolate data (predict a future data point)?",
          "skillId": "act-prep-101-skill-science-extrapolation",
          "options": [
            {
              "id": "a",
              "text": "Assuming the trend reverses without evidence."
            },
            {
              "id": "b",
              "text": "Failing to notice that the scale on the axis is not linear (e.g., it jumps from 10 to 100 to 1000)."
            },
            {
              "id": "c",
              "text": "Picking the answer choice with the largest number."
            },
            {
              "id": "d",
              "text": "Using the wrong formula."
            }
          ],
          "correctOptionId": "b",
          "hint": "Always check the axes.",
          "explanation": "A classic ACT trap is changing the scale of the axes. If you just extend the line visually without checking the numbers on the axis, you will pick the wrong prediction."
        }
      ],
      "interactiveActivities": [
        {
          "id": "act-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "Logic Trap Alignment",
          "description": "Match the common Math/Science trap with the strategy to defeat it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the trap on the left.",
            "Match it to the defensive strategy on the right.",
            "Stay alert for these traps in your next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Solving for 'x' when the question asked for 'x + 5'."
              },
              {
                "id": "l2",
                "label": "Looking at the wrong graph in Science."
              },
              {
                "id": "l3",
                "label": "Getting bogged down in complex Science jargon."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Underline the final question sentence."
              },
              {
                "id": "r2",
                "label": "Circle 'Figure 1' or 'Table 2' in the question text."
              },
              {
                "id": "r3",
                "label": "Treat complex terms as simple variables (A, B, C)."
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
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "metadata": {
        "examDrill": "section_drill"
      },
      "learningAids": [
        {
          "id": "act-prep-101-l09-a1",
          "type": "image",
          "title": "The Logic Bridge",
          "content": "Visual showing how analytical skills overlap between Math word problems and Science data interpretation."
        },
        {
          "id": "act-prep-101-l09-a2",
          "type": "animation",
          "title": "Defeating the Jargon",
          "content": "Animation showing a scary science paragraph being redacted to reveal only the simple relationships needed to answer the question."
        }
      ]
    },
    {
      "id": "act-prep-101-l10",
      "title": "Targeted English Remediation",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A close-up, highly aesthetic illustration of a digital tablet displaying an ACT English passage. A glowing red laser scans the text, instantly highlighting and correcting comma splices and misplaced modifiers. Cyber-education vibe.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a student's brain. Different sections light up as they identify different grammar errors: a blue light for commas, a green light for subject-verb agreement. The lights synchronize into a smooth rhythm, representing mastery of English rules.",
      "metadata": {
        "prompts": [
          "Identify your most frequent grammar mistake (e.g., commas, apostrophes, subject-verb agreement).",
          "Apply a specific rule to fix that mistake in a practice set.",
          "Review your error log to confirm the mistake is no longer happening."
        ]
      },
      "interactiveActivities": [
        {
          "id": "act-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "Grammar Rule Matchup",
          "description": "Match the common English error to the rule that fixes it.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the example error.",
            "Drag it to the correct grammar rule bucket.",
            "Memorize these rules for test day."
          ],
          "data": {
            "targets": [
              {
                "id": "commas",
                "label": "Comma Splice / Run-on"
              },
              {
                "id": "agreement",
                "label": "Subject-Verb Agreement"
              },
              {
                "id": "conciseness",
                "label": "Redundancy / Wordiness"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "The team of players are going to the finals.",
                "correctTargetId": "agreement"
              },
              {
                "id": "d2",
                "label": "I love pizza, it is my favorite food.",
                "correctTargetId": "commas"
              },
              {
                "id": "d3",
                "label": "The small, tiny kitten meowed loudly.",
                "correctTargetId": "conciseness"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l10-a1",
          "type": "image",
          "title": "The Punctuation Hierarchy",
          "content": "Visual guide showing when to use a period, semicolon, colon, and comma."
        },
        {
          "id": "act-prep-101-l10-a2",
          "type": "animation",
          "title": "Slaying the Comma Splice",
          "content": "Animation demonstrating the three ways to fix a comma splice (period, semicolon, or conjunction)."
        }
      ]
    },
    {
      "id": "act-prep-101-l11",
      "title": "Timed Math Sprint",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A dynamic, high-energy illustration of a glowing digital track field. Math equations are set up like hurdles. A stylized glowing runner is leaping over the hurdles effortlessly. Neon green and electric blue colors, conveying speed and agility.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced POV video of a pencil flying across a math test. A digital timer ticks down in the corner. The pencil uses shortcuts, crosses out wrong answers instantly, and circles the correct answer with a satisfying glowing effect. High-energy background music.",
      "interactiveActivities": [
        {
          "id": "act-prep-101-l11-ia1",
          "type": "matching_pairs",
          "title": "30-Second Solve Match",
          "description": "Match the math problem type to the fastest shortcut strategy.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the problem type on the left.",
            "Match it to the shortcut strategy on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Variables in the question and variables in the answers."
              },
              {
                "id": "l2",
                "label": "A complex geometry figure drawn 'to scale'."
              },
              {
                "id": "l3",
                "label": "Asking for a specific value of 'x' from a list of numbers."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Pick your own numbers (Plug-and-Chug)."
              },
              {
                "id": "r2",
                "label": "Visually estimate the angle or length."
              },
              {
                "id": "r3",
                "label": "Backsolve starting with answer choice C."
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
          "id": "act-prep-101-l11-a1",
          "type": "image",
          "title": "Sprint Strategies",
          "content": "Infographic detailing how to handle the first 20 (easy), middle 20 (medium), and final 20 (hard) math questions."
        },
        {
          "id": "act-prep-101-l11-a2",
          "type": "animation",
          "title": "The 30-Second Solve",
          "content": "Animation showing how to identify questions that can be solved in under 30 seconds using visual estimation or backsolving."
        }
      ]
    },
    {
      "id": "act-prep-101-l12",
      "title": "Mixed-Section Decision Drill",
      "type": "quiz",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A surreal, cool illustration of a student's mind as a high-tech control room. Multiple glowing screens show English grammar, Math graphs, Reading passages, and Science charts. The student is confidently pressing buttons, managing the flow of information.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a Rubik's cube. Each side represents a different ACT section. The cube spins rapidly, mixing the colors. A pair of glowing hands quickly and efficiently solves the cube, representing the ability to handle mixed-section cognitive load.",
      "questions": [
        {
          "id": "act-prep-101-l12-q1",
          "text": "You are doing a mixed drill (10 English, 10 Math). You find yourself trying to read the Math word problems like an English passage, slowing you down. What's the fix?",
          "skillId": "act-prep-101-skill-mixed-context",
          "options": [
            {
              "id": "a",
              "text": "Keep practicing until you naturally read faster."
            },
            {
              "id": "b",
              "text": "Take a 5-minute break between subjects."
            },
            {
              "id": "c",
              "text": "Use a physical 'reset' trigger: when switching to Math, immediately write down a formula or draw a shape on your scratch paper to force your brain into 'math mode'."
            },
            {
              "id": "d",
              "text": "Only study one subject per day."
            }
          ],
          "correctOptionId": "c",
          "hint": "Give your brain a physical cue to switch gears.",
          "explanation": "Context switching is hard. A physical action (like drawing a triangle) acts as a cognitive trigger, instantly shifting your brain from verbal processing to spatial/logical processing."
        },
        {
          "id": "act-prep-101-l12-q2",
          "text": "During a mixed Reading/Science drill, you start confusing the author's argument in Reading with the scientists' hypotheses in Science. How do you separate them?",
          "skillId": "act-prep-101-skill-mixed-reading-science",
          "options": [
            {
              "id": "a",
              "text": "Treat them exactly the same; it's all just reading comprehension."
            },
            {
              "id": "b",
              "text": "In Reading, focus on tone and intent. In Science, ignore tone completely and focus only on variables and data relationships."
            },
            {
              "id": "c",
              "text": "Skip the Conflicting Viewpoints passage in Science."
            },
            {
              "id": "d",
              "text": "Read the Science passages twice to make sure you understand the tone."
            }
          ],
          "correctOptionId": "b",
          "hint": "Science doesn't care about feelings.",
          "explanation": "Reading passages have nuance, tone, and emotion. Science passages are purely mechanical. Recognizing this difference prevents you from overthinking Science questions."
        },
        {
          "id": "act-prep-101-l12-q3",
          "text": "You are practicing jumping between sections to build stamina. You notice your accuracy drops significantly on the second subject, regardless of what it is. What is the likely cause?",
          "skillId": "act-prep-101-skill-mixed-stamina",
          "options": [
            {
              "id": "a",
              "text": "You just aren't good at the second subject."
            },
            {
              "id": "b",
              "text": "Cognitive fatigue. You are burning too much mental energy on the first subject and not pacing your brainpower."
            },
            {
              "id": "c",
              "text": "The practice questions are too hard."
            },
            {
              "id": "d",
              "text": "You need to drink more caffeine."
            }
          ],
          "correctOptionId": "b",
          "hint": "The ACT is a marathon, not a sprint.",
          "explanation": "A universal drop in accuracy on the second task indicates cognitive fatigue. You need to practice 'relaxed focus'—working efficiently without tensing up or over-focusing early on."
        },
        {
          "id": "act-prep-101-l12-q4",
          "text": "In a mixed drill, you encounter a brutal Math question that shakes your confidence right before you have to switch to English. How do you prevent the bad Math question from ruining your English score?",
          "skillId": "act-prep-101-skill-mixed-recovery",
          "options": [
            {
              "id": "a",
              "text": "Keep thinking about the Math question while doing English to see if you can solve it in your head."
            },
            {
              "id": "b",
              "text": "Compartmentalize. Tell yourself 'Math is over, English is a fresh start,' and physically turn the page to hide the math."
            },
            {
              "id": "c",
              "text": "Go back and spend 5 more minutes on the Math question until you get it."
            },
            {
              "id": "d",
              "text": "Assume you failed the test and give up."
            }
          ],
          "correctOptionId": "b",
          "hint": "Build mental firewalls between sections.",
          "explanation": "Compartmentalization is key to high scores. You cannot let a bad performance on one section bleed into the next. Each section is a blank slate."
        },
        {
          "id": "act-prep-101-l12-q5",
          "text": "What is the primary benefit of doing mixed-section drills instead of just studying one subject at a time?",
          "skillId": "act-prep-101-skill-mixed-purpose",
          "options": [
            {
              "id": "a",
              "text": "It saves time."
            },
            {
              "id": "b",
              "text": "It perfectly simulates the cognitive load and context-switching required on the actual test day."
            },
            {
              "id": "c",
              "text": "It makes the questions easier."
            },
            {
              "id": "d",
              "text": "It allows you to memorize answers faster."
            }
          ],
          "correctOptionId": "b",
          "hint": "Train how you play.",
          "explanation": "The real ACT forces you to switch from grammar to math to reading to science. Mixed drills train your brain to handle these jarring transitions smoothly."
        },
        {
          "id": "act-prep-101-l12-q6",
          "text": "You have 10 minutes left in a mixed drill and are behind pace. You have 5 Math and 5 English questions left. Which should you tackle first?",
          "skillId": "act-prep-101-skill-mixed-triage",
          "options": [
            {
              "id": "a",
              "text": "The Math questions, because they are worth more points."
            },
            {
              "id": "b",
              "text": "The English questions, because they generally take less time per question, allowing you to secure more points quickly."
            },
            {
              "id": "c",
              "text": "Alternate one Math, one English."
            },
            {
              "id": "d",
              "text": "Guess on all of them."
            }
          ],
          "correctOptionId": "b",
          "hint": "Maximize your points per minute.",
          "explanation": "All ACT questions are worth the same amount (1 raw point). English questions are typically faster to answer than Math questions, so do them first to maximize your score before time runs out."
        }
      ],
      "interactiveActivities": [
        {
          "id": "act-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Context Switcher",
          "description": "Match the mental state to the correct ACT section.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the mental state description.",
            "Match it to the corresponding ACT section.",
            "Practice adopting these mindsets during your drills."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Editor Mode: Looking for conciseness and flow."
              },
              {
                "id": "l2",
                "label": "Detective Mode: Skimming for evidence and tone."
              },
              {
                "id": "l3",
                "label": "Robot Mode: Analyzing data trends without emotion."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "English"
              },
              {
                "id": "r2",
                "label": "Reading"
              },
              {
                "id": "r3",
                "label": "Science"
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
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 3,
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
          "id": "act-prep-101-l12-a1",
          "type": "image",
          "title": "The Mental Firewall",
          "content": "Visual metaphor showing how to block out previous sections to maintain focus on the current one."
        },
        {
          "id": "act-prep-101-l12-a2",
          "type": "animation",
          "title": "Triage in Action",
          "content": "Animation showing a student quickly scanning a mixed set of questions and picking off the easiest ones first."
        }
      ]
    },
    {
      "id": "act-prep-101-l13",
      "title": "Adaptive Retry and Transfer Check",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "Imagen 4 prompt: A sleek, futuristic illustration of a digital target board. Glowing arrows are hitting the bullseye. A holographic screen next to the target shows a 'Level Up' notification with a rising bar chart. Cyber-athletic aesthetic.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A 3D animation of a student playing a video game. They fail a level (representing a missed ACT concept). The game rewinds, shows them a hint, and they replay the level, this time dodging the obstacles perfectly and winning. Represents the 'retry and transfer' learning loop.",
      "interactiveActivities": [
        {
          "id": "act-prep-101-l13-ia1",
          "type": "drag_and_drop",
          "title": "The Transfer Loop Sequence",
          "description": "Put the steps of the adaptive retry loop in the correct order.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the steps of the learning loop.",
            "Drag them into the correct chronological order from start to finish."
          ],
          "data": {
            "targets": [
              {
                "id": "step1",
                "label": "Step 1"
              },
              {
                "id": "step2",
                "label": "Step 2"
              },
              {
                "id": "step3",
                "label": "Step 3"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Take a timed practice drill and fail a question.",
                "correctTargetId": "step1"
              },
              {
                "id": "d2",
                "label": "Analyze the error and learn the core concept.",
                "correctTargetId": "step2"
              },
              {
                "id": "d3",
                "label": "Retry 3 similar questions to prove mastery.",
                "correctTargetId": "step3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l13-a1",
          "type": "image",
          "title": "The Transfer Loop",
          "content": "Flowchart showing: Learn Concept -> Practice -> Fail -> Analyze -> Retry Similar Problem -> Master."
        },
        {
          "id": "act-prep-101-l13-a2",
          "type": "animation",
          "title": "Spotting the Pattern",
          "content": "Animation showing how the ACT tests the exact same concept using different wording, teaching the student to see through the disguise."
        }
      ]
    },
    {
      "id": "act-prep-101-l14",
      "title": "ACT Readiness Stability Checkpoint",
      "type": "interactive",
      "duration": 14,
      "lessonImagePrompt": "Imagen 4 prompt: A high-tech dashboard illustration, like the cockpit of a spaceship. Gauges labeled 'Pacing', 'Accuracy', 'Stamina', and 'Confidence' are all in the green zone. A large glowing button says 'READY FOR LAUNCH'.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A dynamic animation of a race car pulling into a pit stop. The crew rapidly checks the tires (Math), fuel (Stamina), and engine (Reading). The car gets a green light and zooms back onto the track, representing final readiness checks before the real exam.",
      "metadata": {
        "prompts": [
          "Review your error log: what is your single biggest area of improvement?",
          "Confirm your target pacing for all four sections.",
          "Visualize your test-day morning routine."
        ]
      },
      "interactiveActivities": [
        {
          "id": "act-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Test Day Checklist",
          "description": "Sort the final preparations into the correct timeline.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the preparation task.",
            "Drag it to 'Night Before', 'Morning Of', or 'During Test'.",
            "Use this checklist to reduce test anxiety."
          ],
          "data": {
            "targets": [
              {
                "id": "night",
                "label": "Night Before"
              },
              {
                "id": "morning",
                "label": "Morning Of"
              },
              {
                "id": "during",
                "label": "During Test"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Pack your ID, admission ticket, #2 pencils, and approved calculator.",
                "correctTargetId": "night"
              },
              {
                "id": "d2",
                "label": "Eat a high-protein breakfast and do a 5-minute warmup drill to wake up your brain.",
                "correctTargetId": "morning"
              },
              {
                "id": "d3",
                "label": "Use the 'compartmentalization' strategy between sections.",
                "correctTargetId": "during"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "act-prep-101-l14-a1",
          "type": "image",
          "title": "The Readiness Dashboard",
          "content": "Visual checklist of target scores, pacing goals, and required materials for test day."
        },
        {
          "id": "act-prep-101-l14-a2",
          "type": "animation",
          "title": "Beating Test Anxiety",
          "content": "Short animation demonstrating a quick breathing exercise to lower heart rate before the proctor says 'begin'."
        }
      ]
    },
    {
      "id": "act-prep-101-l15",
      "title": "Full ACT Mock and Review",
      "type": "quiz",
      "duration": 20,
      "lessonImagePrompt": "Imagen 4 prompt: A dramatic, cinematic illustration of a student sitting at a desk in a large, dimly lit gymnasium, illuminated by a single spotlight. They look confident and focused. A glowing holographic '36' hovers above their test booklet. Epic, triumphant mood.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced montage of a student taking a full mock exam. The clock spins rapidly. We see them confidently skipping hard questions, using their calculator, and bubbling answers. It ends with them putting their pencil down with a satisfied smile as the timer hits zero.",
      "questions": [
        {
          "id": "act-prep-101-l15-q1",
          "text": "You just finished a full 3-hour mock ACT. You are exhausted. What is the most important thing to do next?",
          "skillId": "act-prep-101-skill-mock-review",
          "options": [
            {
              "id": "a",
              "text": "Immediately score it and spend 3 hours reviewing every single question."
            },
            {
              "id": "b",
              "text": "Throw it in a drawer and never look at it again."
            },
            {
              "id": "c",
              "text": "Score it, take a long break (or wait until the next day), and then do a targeted review of only your errors and flagged guesses."
            },
            {
              "id": "d",
              "text": "Take another full mock test immediately to build stamina."
            }
          ],
          "correctOptionId": "c",
          "hint": "Review requires a fresh brain.",
          "explanation": "Reviewing a 3-hour test while mentally exhausted is inefficient. Take a break, then do a targeted review of mistakes to maximize learning."
        },
        {
          "id": "act-prep-101-l15-q2",
          "text": "During your mock review, you notice you missed 5 questions in a row at the end of the Reading section. What does this indicate?",
          "skillId": "act-prep-101-skill-mock-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "You don't know how to read."
            },
            {
              "id": "b",
              "text": "A pacing breakdown. You likely ran out of time and rushed or blind-guessed."
            },
            {
              "id": "c",
              "text": "The last passage is always the hardest."
            },
            {
              "id": "d",
              "text": "You need to study more vocabulary."
            }
          ],
          "correctOptionId": "b",
          "hint": "Look for patterns in where the errors occur.",
          "explanation": "A cluster of errors at the very end of a section is almost always a symptom of poor pacing earlier in the section, not a lack of content knowledge."
        },
        {
          "id": "act-prep-101-l15-q3",
          "text": "You scored lower on this mock test than your previous one. How should you react?",
          "skillId": "act-prep-101-skill-mock-mindset",
          "options": [
            {
              "id": "a",
              "text": "Panic and change your entire study plan."
            },
            {
              "id": "b",
              "text": "Assume the test was just unfairly hard and ignore the score."
            },
            {
              "id": "c",
              "text": "Treat it as valuable data. Identify if the drop was due to new content, a pacing slip, or fatigue, and adjust your next practice drill accordingly."
            },
            {
              "id": "d",
              "text": "Cancel your real ACT registration."
            }
          ],
          "correctOptionId": "c",
          "hint": "Scores fluctuate. Focus on the 'why'.",
          "explanation": "Progress isn't always linear. A score drop is a diagnostic tool that highlights exactly what breaks down under pressure."
        },
        {
          "id": "act-prep-101-l15-q4",
          "text": "When reviewing a missed Math question from your mock, you realize you knew the formula but punched the wrong numbers into your calculator. How do you log this?",
          "skillId": "act-prep-101-skill-mock-logging",
          "options": [
            {
              "id": "a",
              "text": "Log it as a 'Concept Gap' and re-study the formula."
            },
            {
              "id": "b",
              "text": "Don't log it; it was just a silly mistake."
            },
            {
              "id": "c",
              "text": "Log it as an 'Execution Error' and create a rule to write down your intermediate steps before calculating."
            },
            {
              "id": "d",
              "text": "Log it as a 'Time Trap'."
            }
          ],
          "correctOptionId": "c",
          "hint": "Fix the behavior, not just the math.",
          "explanation": "Categorizing it correctly prevents you from wasting time studying concepts you already know. Fixing execution errors requires changing your physical habits (like writing steps down)."
        },
        {
          "id": "act-prep-101-l15-q5",
          "text": "You have one week left until the real ACT. Based on your mock, you are weak in Geometry, Comma Rules, and Science Pacing. What is your plan?",
          "skillId": "act-prep-101-skill-mock-triage",
          "options": [
            {
              "id": "a",
              "text": "Study all three equally for 5 hours a day."
            },
            {
              "id": "b",
              "text": "Prioritize Comma Rules and Science Pacing, as these are process/rule fixes that yield fast points, and review basic Geometry formulas."
            },
            {
              "id": "c",
              "text": "Focus only on Geometry because math is hard."
            },
            {
              "id": "d",
              "text": "Stop studying to rest your brain."
            }
          ],
          "correctOptionId": "b",
          "hint": "Go for the highest ROI (Return on Investment) in the final week.",
          "explanation": "In the final week, prioritize high-frequency, easy-to-fix issues (like grammar rules and pacing strategies) over deep, complex content gaps (like advanced geometry)."
        },
        {
          "id": "act-prep-101-l15-q6",
          "text": "During the mock, you felt extreme anxiety during the Science section and couldn't focus. What is the best strategy to implement for test day?",
          "skillId": "act-prep-101-skill-mock-anxiety",
          "options": [
            {
              "id": "a",
              "text": "Drink an energy drink right before Science."
            },
            {
              "id": "b",
              "text": "Use a 'grounding' technique: close your eyes for 5 seconds, take a deep breath, and remind yourself to just look at the axes of the graphs."
            },
            {
              "id": "c",
              "text": "Rush through it so it's over faster."
            },
            {
              "id": "d",
              "text": "Read every word of the passages to make sure you don't miss anything."
            }
          ],
          "correctOptionId": "b",
          "hint": "Break the panic cycle.",
          "explanation": "A 5-second reset costs almost no time but can save you from a 5-minute panic spiral. Grounding yourself brings your focus back to the simple mechanics of the test."
        },
        {
          "id": "act-prep-101-l15-q7",
          "text": "You guessed on 10 questions across the mock test and got 4 of them right. How should you handle these in your review?",
          "skillId": "act-prep-101-skill-mock-guessing",
          "options": [
            {
              "id": "a",
              "text": "Ignore them; a point is a point."
            },
            {
              "id": "b",
              "text": "Review them exactly as if you got them wrong, because you didn't actually know the concept."
            },
            {
              "id": "c",
              "text": "Only review the 6 you got wrong."
            },
            {
              "id": "d",
              "text": "Assume you have good intuition and rely on guessing more often."
            }
          ],
          "correctOptionId": "b",
          "hint": "Don't let lucky guesses hide your weak spots.",
          "explanation": "A lucky guess is a hidden error. If you don't review it, you will likely miss a similar question on the real test when your luck runs out."
        },
        {
          "id": "act-prep-101-l15-q8",
          "text": "Your mock score shows a 32 in English, 28 in Math, 30 in Reading, and 24 in Science. Where is your biggest opportunity for score growth?",
          "skillId": "act-prep-101-skill-mock-strategy",
          "options": [
            {
              "id": "a",
              "text": "English, try to get it to a perfect 36."
            },
            {
              "id": "b",
              "text": "Math, because it's the most important subject."
            },
            {
              "id": "c",
              "text": "Science. It's your lowest score, meaning it has the most 'low-hanging fruit' (easy points) available to grab quickly."
            },
            {
              "id": "d",
              "text": "Reading, to balance out the English."
            }
          ],
          "correctOptionId": "c",
          "hint": "It's easier to go from a 24 to a 28 than from a 32 to a 36.",
          "explanation": "Always target your lowest section first. The lower the score, the easier the missed questions are, making them faster to learn and fix."
        },
        {
          "id": "act-prep-101-l15-q9",
          "text": "You notice you always change your answers from right to wrong when you second-guess yourself. What rule should you make?",
          "skillId": "act-prep-101-skill-mock-confidence",
          "options": [
            {
              "id": "a",
              "text": "Never review your answers."
            },
            {
              "id": "b",
              "text": "Only change an answer if you find concrete, undeniable evidence in the text or math that proves your first instinct was wrong."
            },
            {
              "id": "c",
              "text": "Always change your answer if you feel unsure."
            },
            {
              "id": "d",
              "text": "Flip a coin."
            }
          ],
          "correctOptionId": "b",
          "hint": "Trust your gut unless you have proof.",
          "explanation": "First instincts are usually right. Establish a strict rule: no changing answers based on 'feelings', only on hard evidence."
        },
        {
          "id": "act-prep-101-l15-q10",
          "text": "It's the day before the real ACT. What should you do?",
          "skillId": "act-prep-101-skill-mock-final",
          "options": [
            {
              "id": "a",
              "text": "Take one more full mock test to be safe."
            },
            {
              "id": "b",
              "text": "Cram vocabulary and math formulas until midnight."
            },
            {
              "id": "c",
              "text": "Do a light 20-minute review of your error log, pack your bag, relax, and get 8 hours of sleep."
            },
            {
              "id": "d",
              "text": "Worry about your score."
            }
          ],
          "correctOptionId": "c",
          "hint": "Rest is a weapon.",
          "explanation": "The ACT tests cognitive endurance. A rested brain will score higher than a tired, crammed brain. Light review keeps you sharp without causing fatigue."
        }
      ],
      "interactiveActivities": [
        {
          "id": "act-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "Post-Mock Triage",
          "description": "Sort your mock errors into the correct remediation lanes to build your final study plan.",
          "estimatedMinutes": 10,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Review each error pattern.",
            "Sort it into the best remediation lane: Concept, Strategy, or Timing.",
            "Use this to focus your final week of prep."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Content/Knowledge Gap"
              },
              {
                "id": "strategy",
                "label": "Strategy/Execution Gap"
              },
              {
                "id": "timing",
                "label": "Pacing/Stamina Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Didn't know the formula for the volume of a cylinder.",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Read the whole Science passage instead of going straight to the graphs.",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Guessed 'C' on the last 8 Math questions because time ran out.",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Missed a 'NOT' question because you read too fast.",
                "correctBucketId": "strategy"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "mock_assessment",
        "questionsPerCheck": 10,
        "totalQuestions": 10,
        "timeLimitMinutes": 24,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 10,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 2,
          "medium": 5,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.82
      },
      "metadata": {
        "examDrill": "full_mock"
      },
      "learningAids": [
        {
          "id": "act-prep-101-l15-a1",
          "type": "image",
          "title": "The Final Countdown",
          "content": "Visual timeline of what to do 1 week, 1 day, and 1 hour before the ACT."
        },
        {
          "id": "act-prep-101-l15-a2",
          "type": "animation",
          "title": "The Triumphant Finish",
          "content": "Motivational animation showing a student conquering the test, receiving their target score, and celebrating."
        }
      ]
    }
  ]
};
