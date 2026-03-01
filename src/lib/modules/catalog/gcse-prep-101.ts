import type { LearningModule } from "@/lib/modules/types";

export const GcsePrep101Module: LearningModule = {
  id: "gcse-prep-101",
  title: "GCSE Prep Foundations",
  description: "Prepare for GCSE core papers with structured revision and exam technique.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 18,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured GCSE readiness workflows",
    "Improve speed and accuracy under timed constraints",
    "Use analytics-based revision loops to close weak areas"
  ],
  quizBlueprint: {
    frequency: "weekly_assessment",
    questionsPerCheck: 20,
    totalQuestions: 20,
    timeLimitMinutes: 25,
    questionTypes: [{ type: "mcq_single", percentage: 100, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
    difficultyDistribution: { easy: 6, medium: 10, hard: 4 },
    feedbackMode: "after_submit",
    adaptive: false,
    masteryThreshold: 0.8
  },
  lessons: [
    {
      id: "gcse-prep-101-l01",
      title: "GCSE: GCSE Pathway Planning",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gcse-prep-101-l01-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: GCSE Pathway Planning with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l01-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: GCSE Pathway Planning showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l02",
      title: "GCSE: English Language Techniques",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one english decision rule in GCSE: English Language Techniques.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for revision planning before your next GCSE readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "GCSE: English Language Techniques Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Revision Plan"
              },
              {
                "id": "execute",
                "label": "Paper Execution"
              },
              {
                "id": "reflect",
                "label": "Markscheme Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Map revision blocks to GCSE paper weight and weak topics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply command-word decoding before each constructed response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Compare response against markscheme and recover missed marks",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gcse-prep-101-l02-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for GCSE: English Language Techniques with emphasis on english within passage set planning."
        },
        {
          "id": "gcse-prep-101-l02-a2",
          "type": "animation",
          "title": "Revision Planning Walkthrough",
          "content": "Stepwise walkthrough for GCSE: English Language Techniques showing revision planning decisions and annotation map checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l03",
      title: "GCSE: Math Non-Calculator Skills",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gcse-prep-101-l03-q1",
          "text": "In GCSE: Math Non-Calculator Skills, a learner keeps missing math items during GCSE practice. Which adjustment should happen before the next timed problem set?",
          "skillId": "gcse-prep-101-skill-math-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip review and jump directly to harder questions."
            },
            {
              "id": "b",
              "text": "Track only total score with no error categories."
            },
            {
              "id": "c",
              "text": "Run a short math checkpoint routine and annotate why each miss occurred in a setup sheet before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if math is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for math.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve math."
        },
        {
          "id": "gcse-prep-101-l03-q2",
          "text": "A GCSE GCSE: Math Non-Calculator Skills session ends with unstable timing. What should be diagnosed first?",
          "skillId": "gcse-prep-101-skill-science-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Increase total question count and keep the same attempt order."
            },
            {
              "id": "c",
              "text": "Use one pacing rule for all sections regardless of load."
            },
            {
              "id": "d",
              "text": "Locate the exact science decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "gcse-prep-101-l03-q3",
          "text": "GCSE practice shows correction is happening but not sticking in GCSE: Math Non-Calculator Skills. What plan fixes this fastest?",
          "skillId": "gcse-prep-101-skill-revision-planning-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected revision planning error with a near-transfer item in the next timed block and track it in a setup sheet."
            },
            {
              "id": "b",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "c",
              "text": "Increase difficulty only, without targeted rematches."
            },
            {
              "id": "d",
              "text": "Rewatch lesson content without logging applied changes."
            }
          ],
          "correctOptionId": "a",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "gcse-prep-101-l03-q4",
          "text": "During post-drill review for GCSE: Math Non-Calculator Skills, which fix should be prioritized first for score impact in GCSE?",
          "skillId": "gcse-prep-101-skill-english-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated english and pacing errors first because they affect many questions in one run."
            },
            {
              "id": "c",
              "text": "Ignore pacing and focus only on confidence items."
            },
            {
              "id": "d",
              "text": "Rewrite notes without validating changes in timed practice."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "gcse-prep-101-l03-q5",
          "text": "In GCSE Paper 1, command-word drift appears during GCSE: Math Non-Calculator Skills. What is the strongest immediate correction?",
          "skillId": "gcse-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Paper 1 diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Convert command word into a response checklist before writing."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes command-word drift.",
          "explanation": "Immediate correction inside Paper 1 improves transfer to the next timed problem set."
        },
        {
          "id": "gcse-prep-101-l03-q6",
          "text": "During GCSE Paper 2, method-step omission repeats in GCSE: Math Non-Calculator Skills. Which plan should be applied before the next retest?",
          "skillId": "gcse-prep-101-skill-science-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Retake the section with no checkpoint changes."
            },
            {
              "id": "d",
              "text": "Write method and units before entering any calculated result. Track outcomes in a markscheme response log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in markscheme response log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "GCSE: Math Non-Calculator Skills Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for method and accuracy precision.",
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
                "label": "Long-answer command words misunderstood"
              },
              {
                "id": "l2",
                "label": "Calculator section marks lost to setup errors"
              },
              {
                "id": "l3",
                "label": "Past paper review completed but same errors persist"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command words into a response checklist before writing"
              },
              {
                "id": "r2",
                "label": "Write equation + units before calculator entry"
              },
              {
                "id": "r3",
                "label": "Create targeted reattempt set from missed markscheme points"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "gcse-prep-101-l03-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for GCSE: Math Non-Calculator Skills with emphasis on math within problem set planning."
        },
        {
          "id": "gcse-prep-101-l03-a2",
          "type": "animation",
          "title": "Science Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Math Non-Calculator Skills showing science decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l04",
      title: "GCSE: Math Calculator Skills",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one math decision rule in GCSE: Math Calculator Skills.",
          "Apply it in one problem set and show how it improves method and accuracy precision.",
          "Set one next-step target for science before your next GCSE readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "GCSE: Math Calculator Skills Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Revision Plan"
              },
              {
                "id": "execute",
                "label": "Paper Execution"
              },
              {
                "id": "reflect",
                "label": "Markscheme Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Map revision blocks to GCSE paper weight and weak topics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply command-word decoding before each constructed response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Compare response against markscheme and recover missed marks",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gcse-prep-101-l04-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for GCSE: Math Calculator Skills with emphasis on math within problem set planning."
        },
        {
          "id": "gcse-prep-101-l04-a2",
          "type": "animation",
          "title": "Science Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Math Calculator Skills showing science decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l05",
      title: "GCSE: Science Command Words",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gcse-prep-101-l05-a1",
          "type": "image",
          "title": "Science Snapshot",
          "content": "Visual anchor for GCSE: Science Command Words with emphasis on science within problem set planning."
        },
        {
          "id": "gcse-prep-101-l05-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Science Command Words showing math decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l06",
      title: "GCSE: Structured Long Answers",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gcse-prep-101-l06-q1",
          "text": "During GCSE: Structured Long Answers, early guesses are causing revision planning losses. Which intervention should happen first?",
          "skillId": "gcse-prep-101-skill-revision-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in a strategy log before restarting the drill."
            },
            {
              "id": "c",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "b",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "gcse-prep-101-l06-q2",
          "text": "A GCSE drill on GCSE: Structured Long Answers ends with unstable pacing. What should be diagnosed first?",
          "skillId": "gcse-prep-101-skill-math-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the same drill immediately without analysis."
            },
            {
              "id": "b",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "c",
              "text": "Pinpoint where math decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific math decision points, not from total question count alone."
        },
        {
          "id": "gcse-prep-101-l06-q3",
          "text": "Which one-week sprint most improves english transfer for GCSE: Structured Long Answers in GCSE?",
          "skillId": "gcse-prep-101-skill-english-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "b",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "c",
              "text": "Delay all error correction until the final day."
            },
            {
              "id": "d",
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same english objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "gcse-prep-101-l06-q4",
          "text": "In GCSE GCSE: Structured Long Answers, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "gcse-prep-101-skill-science-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated science process issue, then apply the same correction across the next timed block."
            },
            {
              "id": "b",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "c",
              "text": "Review only confidence items and skip timing analysis."
            },
            {
              "id": "d",
              "text": "Change resources without identifying what failed."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "gcse-prep-101-l06-q5",
          "text": "In GCSE Paper 1, command-word drift appears during GCSE: Structured Long Answers. What is the strongest immediate correction?",
          "skillId": "gcse-prep-101-skill-revision-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Paper 1 diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Convert command word into a response checklist before writing."
            },
            {
              "id": "c",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that directly fixes command-word drift.",
          "explanation": "Immediate correction inside Paper 1 improves transfer to the next timed practice set."
        },
        {
          "id": "gcse-prep-101-l06-q6",
          "text": "During GCSE Paper 2, method-step omission repeats in GCSE: Structured Long Answers. Which plan should be applied before the next retest?",
          "skillId": "gcse-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Write method and units before entering any calculated result. Track outcomes in a markscheme response log and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in markscheme response log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "GCSE: Structured Long Answers Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for decision quality under constraints.",
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
                "label": "Long-answer command words misunderstood"
              },
              {
                "id": "l2",
                "label": "Calculator section marks lost to setup errors"
              },
              {
                "id": "l3",
                "label": "Past paper review completed but same errors persist"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command words into a response checklist before writing"
              },
              {
                "id": "r2",
                "label": "Write equation + units before calculator entry"
              },
              {
                "id": "r3",
                "label": "Create targeted reattempt set from missed markscheme points"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "gcse-prep-101-l06-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Structured Long Answers with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l06-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Structured Long Answers showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l07",
      title: "GCSE: Revision Timetable Execution",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gcse-prep-101-l07-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Revision Timetable Execution with emphasis on revision planning within timed block planning."
        },
        {
          "id": "gcse-prep-101-l07-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Revision Timetable Execution showing math decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l08",
      title: "GCSE: Past Paper Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one revision planning decision rule in GCSE: Past Paper Strategy.",
          "Apply it in one section simulation and show how it improves section execution consistency.",
          "Set one next-step target for math before your next GCSE readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "GCSE: Past Paper Strategy Attempt-Order Builder",
          "description": "Place each move in the strongest simulation sequence.",
          "estimatedMinutes": 9,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Assign each move to Launch, Stabilize, or Close.",
            "Check ordering logic.",
            "Carry one sequence rule into your next simulation."
          ],
          "data": {
            "targets": [
              {
                "id": "launch",
                "label": "Launch"
              },
              {
                "id": "stabilize",
                "label": "Stabilize"
              },
              {
                "id": "close",
                "label": "Close"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Map revision blocks to GCSE paper weight and weak topics",
                "correctTargetId": "launch"
              },
              {
                "id": "d2",
                "label": "Apply command-word decoding before each constructed response",
                "correctTargetId": "stabilize"
              },
              {
                "id": "d3",
                "label": "Compare response against markscheme and recover missed marks",
                "correctTargetId": "close"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gcse-prep-101-l08-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Past Paper Strategy with emphasis on revision planning within section simulation planning."
        },
        {
          "id": "gcse-prep-101-l08-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Past Paper Strategy showing math decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l09",
      title: "GCSE: Exam-Day Readiness",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gcse-prep-101-l09-q1",
          "text": "GCSE coaching notes show repeated revision planning misses in GCSE: Exam-Day Readiness. What should the learner do before the next practice set?",
          "skillId": "gcse-prep-101-skill-revision-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            },
            {
              "id": "b",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though revision planning is still the top weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When revision planning is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "gcse-prep-101-l09-q2",
          "text": "In GCSE: Exam-Day Readiness, pace drops late even when early accuracy is strong. Which move best addresses this GCSE pattern?",
          "skillId": "gcse-prep-101-skill-math-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction math items."
            },
            {
              "id": "c",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "d",
              "text": "Use random breaks with no fixed transition points."
            }
          ],
          "correctOptionId": "b",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "gcse-prep-101-l09-q3",
          "text": "Which one-week plan best improves english transfer for GCSE readiness in GCSE?",
          "skillId": "gcse-prep-101-skill-english-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Choose random topics daily without a remediation queue."
            },
            {
              "id": "c",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same english objective under timing constraints."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "c",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same english target."
        },
        {
          "id": "gcse-prep-101-l09-q4",
          "text": "After a GCSE: Exam-Day Readiness drill, which remediation should be prioritized first for score impact in GCSE?",
          "skillId": "gcse-prep-101-skill-science-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "c",
              "text": "Ignore pacing because content accuracy matters more."
            },
            {
              "id": "d",
              "text": "Fix repeated science breakdowns first because they scale across many items in the same run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "gcse-prep-101-l09-q5",
          "text": "In GCSE Paper 1, command-word drift appears during GCSE: Exam-Day Readiness. What is the strongest immediate correction?",
          "skillId": "gcse-prep-101-skill-revision-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Convert command word into a response checklist before writing."
            },
            {
              "id": "b",
              "text": "Ignore Paper 1 diagnostics and continue for volume."
            },
            {
              "id": "c",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that directly fixes command-word drift.",
          "explanation": "Immediate correction inside Paper 1 improves transfer to the next timed practice set."
        },
        {
          "id": "gcse-prep-101-l09-q6",
          "text": "During GCSE Paper 2, method-step omission repeats in GCSE: Exam-Day Readiness. Which plan should be applied before the next retest?",
          "skillId": "gcse-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Write method and units before entering any calculated result. Track outcomes in a markscheme response log and retest the same pattern."
            },
            {
              "id": "c",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "b",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in markscheme response log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "GCSE: Exam-Day Readiness Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for decision quality under constraints.",
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
                "label": "Long-answer command words misunderstood"
              },
              {
                "id": "l2",
                "label": "Calculator section marks lost to setup errors"
              },
              {
                "id": "l3",
                "label": "Past paper review completed but same errors persist"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command words into a response checklist before writing"
              },
              {
                "id": "r2",
                "label": "Write equation + units before calculator entry"
              },
              {
                "id": "r3",
                "label": "Create targeted reattempt set from missed markscheme points"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "gcse-prep-101-l09-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Exam-Day Readiness with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l09-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Exam-Day Readiness showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l10",
      title: "GCSE: Targeted Revision Planning Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one revision planning decision rule in GCSE: Targeted Revision Planning Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for math before your next GCSE readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "GCSE: Targeted Revision Planning Remediation Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Revision Plan"
              },
              {
                "id": "execute",
                "label": "Paper Execution"
              },
              {
                "id": "reflect",
                "label": "Markscheme Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Map revision blocks to GCSE paper weight and weak topics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply command-word decoding before each constructed response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Compare response against markscheme and recover missed marks",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gcse-prep-101-l10-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Targeted Revision Planning Remediation with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l10-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Targeted Revision Planning Remediation showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l11",
      title: "GCSE: Timed Math Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gcse-prep-101-l11-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for GCSE: Timed Math Sprint with emphasis on math within problem set planning."
        },
        {
          "id": "gcse-prep-101-l11-a2",
          "type": "animation",
          "title": "Science Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Timed Math Sprint showing science decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l12",
      title: "GCSE: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "gcse-prep-101-l12-q1",
          "text": "GCSE coaching notes show repeated revision planning misses in GCSE: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "gcse-prep-101-skill-revision-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "c",
              "text": "Switch strands even though revision planning is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When revision planning is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "gcse-prep-101-l12-q2",
          "text": "In GCSE: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this GCSE pattern?",
          "skillId": "gcse-prep-101-skill-math-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction math items."
            },
            {
              "id": "b",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "c",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "d",
              "text": "Use random breaks with no fixed transition points."
            }
          ],
          "correctOptionId": "a",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "gcse-prep-101-l12-q3",
          "text": "Which one-week plan best improves english transfer for GCSE readiness in GCSE?",
          "skillId": "gcse-prep-101-skill-english-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same english objective under timing constraints."
            },
            {
              "id": "c",
              "text": "Choose random topics daily without a remediation queue."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "b",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same english target."
        },
        {
          "id": "gcse-prep-101-l12-q4",
          "text": "After a GCSE: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in GCSE?",
          "skillId": "gcse-prep-101-skill-science-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "c",
              "text": "Fix repeated science breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "d",
              "text": "Ignore pacing because content accuracy matters more."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "gcse-prep-101-l12-q5",
          "text": "In GCSE Paper 1, command-word drift appears during GCSE: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "gcse-prep-101-skill-revision-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Paper 1 diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Delay correction until after several unrelated drills."
            },
            {
              "id": "d",
              "text": "Convert command word into a response checklist before writing."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes command-word drift.",
          "explanation": "Immediate correction inside Paper 1 improves transfer to the next timed practice set."
        },
        {
          "id": "gcse-prep-101-l12-q6",
          "text": "During GCSE Paper 2, method-step omission repeats in GCSE: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "gcse-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Write method and units before entering any calculated result. Track outcomes in a markscheme response log and retest the same pattern."
            },
            {
              "id": "b",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "c",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in markscheme response log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "GCSE: Mixed-Section Decision Drill Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for decision quality under constraints.",
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
                "label": "Long-answer command words misunderstood"
              },
              {
                "id": "l2",
                "label": "Calculator section marks lost to setup errors"
              },
              {
                "id": "l3",
                "label": "Past paper review completed but same errors persist"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Translate command words into a response checklist before writing"
              },
              {
                "id": "r2",
                "label": "Write equation + units before calculator entry"
              },
              {
                "id": "r3",
                "label": "Create targeted reattempt set from missed markscheme points"
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
      quizBlueprint: {
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
      metadata: {
        examDrill: "lesson_drill"
      },
      learningAids: [
        {
          "id": "gcse-prep-101-l12-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Mixed-Section Decision Drill with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l12-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Mixed-Section Decision Drill showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l13",
      title: "GCSE: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "gcse-prep-101-l13-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Adaptive Retry and Transfer Check with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l13-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Adaptive Retry and Transfer Check showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l14",
      title: "GCSE: Gcse Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one revision planning decision rule in GCSE: Gcse Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for math before your next GCSE readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "GCSE: Gcse Readiness Stability Checkpoint Decision-Phase Mapping",
          "description": "Map each decision cue to Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each decision cue to the best phase.",
            "Check all mappings.",
            "Capture one improvement target."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Revision Plan"
              },
              {
                "id": "execute",
                "label": "Paper Execution"
              },
              {
                "id": "reflect",
                "label": "Markscheme Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Map revision blocks to GCSE paper weight and weak topics",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Apply command-word decoding before each constructed response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Compare response against markscheme and recover missed marks",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "gcse-prep-101-l14-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Gcse Readiness Stability Checkpoint with emphasis on revision planning within practice set planning."
        },
        {
          "id": "gcse-prep-101-l14-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Gcse Readiness Stability Checkpoint showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "gcse-prep-101-l15",
      title: "GCSE: Full Mock Cycle and Review",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "gcse-prep-101-l15-q1",
          "text": "In GCSE: Full Mock Cycle and Review, a learner keeps missing revision planning items during GCSE practice. Which adjustment should happen before the next timed review cycle?",
          "skillId": "gcse-prep-101-skill-revision-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Skip review and jump directly to harder questions."
            },
            {
              "id": "b",
              "text": "Track only total score with no error categories."
            },
            {
              "id": "c",
              "text": "Run a short revision planning checkpoint routine and annotate why each miss occurred in an error taxonomy before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if revision planning is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for revision planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve revision planning."
        },
        {
          "id": "gcse-prep-101-l15-q2",
          "text": "A GCSE GCSE: Full Mock Cycle and Review session ends with unstable timing. What should be diagnosed first?",
          "skillId": "gcse-prep-101-skill-math-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Increase total question count and keep the same attempt order."
            },
            {
              "id": "c",
              "text": "Use one pacing rule for all sections regardless of load."
            },
            {
              "id": "d",
              "text": "Locate the exact math decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "gcse-prep-101-l15-q3",
          "text": "GCSE practice shows correction is happening but not sticking in GCSE: Full Mock Cycle and Review. What plan fixes this fastest?",
          "skillId": "gcse-prep-101-skill-english-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected english error with a near-transfer item in the next timed block and track it in an error taxonomy."
            },
            {
              "id": "b",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "c",
              "text": "Increase difficulty only, without targeted rematches."
            },
            {
              "id": "d",
              "text": "Rewatch lesson content without logging applied changes."
            }
          ],
          "correctOptionId": "a",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "gcse-prep-101-l15-q4",
          "text": "During post-drill review for GCSE: Full Mock Cycle and Review, which fix should be prioritized first for score impact in GCSE?",
          "skillId": "gcse-prep-101-skill-science-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated science and pacing errors first because they affect many questions in one run."
            },
            {
              "id": "c",
              "text": "Ignore pacing and focus only on confidence items."
            },
            {
              "id": "d",
              "text": "Rewrite notes without validating changes in timed practice."
            }
          ],
          "correctOptionId": "b",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "gcse-prep-101-l15-q5",
          "text": "In GCSE Paper 1, command-word drift appears during GCSE: Full Mock Cycle and Review. What is the strongest immediate correction?",
          "skillId": "gcse-prep-101-skill-revision-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Paper 1 diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Convert command word into a response checklist before writing."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes command-word drift.",
          "explanation": "Immediate correction inside Paper 1 improves transfer to the next timed review cycle."
        },
        {
          "id": "gcse-prep-101-l15-q6",
          "text": "During GCSE Paper 2, method-step omission repeats in GCSE: Full Mock Cycle and Review. Which plan should be applied before the next retest?",
          "skillId": "gcse-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Increase speed without updating process controls."
            },
            {
              "id": "c",
              "text": "Retake the section with no checkpoint changes."
            },
            {
              "id": "d",
              "text": "Write method and units before entering any calculated result. Track outcomes in a markscheme response log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in markscheme response log makes the pacing fix visible and repeatable."
        },
        {
          "id": "gcse-prep-101-l15-q7",
          "text": "In a full GCSE mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "gcse-prep-101-skill-mock-triage",
          "options": [
            {
              "id": "a",
              "text": "Group misses by concept, strategy, and timing first, then sequence fixes by expected score gain."
            },
            {
              "id": "b",
              "text": "Review only the most recent mistakes."
            },
            {
              "id": "c",
              "text": "Retake the full mock without a remediation plan."
            },
            {
              "id": "d",
              "text": "Choose revision topics only by preference."
            }
          ],
          "correctOptionId": "a",
          "hint": "The right choice creates a stable remediation queue.",
          "explanation": "Process-level triage finds leverage points that improve many future items."
        },
        {
          "id": "gcse-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in GCSE. What is the best pacing fix?",
          "skillId": "gcse-prep-101-skill-section-pacing",
          "options": [
            {
              "id": "a",
              "text": "Use the same checkpoint target for every section."
            },
            {
              "id": "b",
              "text": "Set section-specific checkpoints and rehearse transitions so pace remains stable end-to-end."
            },
            {
              "id": "c",
              "text": "Speed up all sections equally without checking accuracy."
            },
            {
              "id": "d",
              "text": "Add extra questions without tracking section pace."
            }
          ],
          "correctOptionId": "b",
          "hint": "Section load differences require section-level pacing plans.",
          "explanation": "One-size pacing causes uneven performance; section-specific pacing is more reliable."
        },
        {
          "id": "gcse-prep-101-l15-q9",
          "text": "Before submitting a high-stakes GCSE section, which quality-control habit is most reliable?",
          "skillId": "gcse-prep-101-skill-quality-control",
          "options": [
            {
              "id": "a",
              "text": "Change random answers to distribute letters evenly."
            },
            {
              "id": "b",
              "text": "Skip verification to preserve confidence."
            },
            {
              "id": "c",
              "text": "Run a brief targeted verification pass on flagged items and known error patterns."
            },
            {
              "id": "d",
              "text": "Review only the first third of the section."
            }
          ],
          "correctOptionId": "c",
          "hint": "Targeted verification beats random checking.",
          "explanation": "Focused verification catches preventable mistakes without excessive time cost."
        },
        {
          "id": "gcse-prep-101-l15-q10",
          "text": "After full-mock review in GCSE, which next-step plan yields the best one-week improvement?",
          "skillId": "gcse-prep-101-skill-remediation-loop",
          "options": [
            {
              "id": "a",
              "text": "Repeat the same mock daily with no targeted fixes."
            },
            {
              "id": "b",
              "text": "Study only easiest content to boost confidence."
            },
            {
              "id": "c",
              "text": "Pause all timed practice until every concept feels perfect."
            },
            {
              "id": "d",
              "text": "Build a remediation sprint with two top weak strands, one pacing drill, and one timed re-check."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan includes targeted fixes plus timed validation.",
          "explanation": "Improvement requires focused remediation and a timed checkpoint to verify transfer."
        }
      ],
      interactiveActivities: [
        {
          "id": "gcse-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "GCSE: Full Mock Cycle and Review Error Taxonomy Sort",
          "description": "Sort mock errors into concept, strategy, or timing remediation lanes.",
          "estimatedMinutes": 10,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Review each error pattern.",
            "Sort into best remediation lane.",
            "Use output to plan your next practice sprint."
          ],
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Topic Knowledge Gap"
              },
              {
                "id": "strategy",
                "label": "Markscheme Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Paper Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Forgot method step for high-frequency maths topic",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Answer format missed required comparison statement",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Final long-answer left underdeveloped",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Markscheme note taken but not used in reattempt",
                "correctBucketId": "timing"
              }
            ]
          }
        }
      ],
      quizBlueprint: {
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
      metadata: {
        examDrill: "full_mock"
      },
      learningAids: [
        {
          "id": "gcse-prep-101-l15-a1",
          "type": "image",
          "title": "Revision Planning Snapshot",
          "content": "Visual anchor for GCSE: Full Mock Cycle and Review with emphasis on revision planning within review cycle planning."
        },
        {
          "id": "gcse-prep-101-l15-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for GCSE: Full Mock Cycle and Review showing math decisions and error taxonomy checks."
        }
      ]
    }
  ],
};
