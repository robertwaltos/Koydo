import type { LearningModule } from "@/lib/modules/types";

export const ApPrep101Module: LearningModule = {
  id: "ap-prep-101",
  title: "AP Exam Prep Toolkit",
  description: "Master AP-style multiple-choice and free-response performance strategies.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 19,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured AP exam success workflows",
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
      id: "ap-prep-101-l01",
      title: "AP: AP Exam Formats by Subject",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ap-prep-101-l01-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: AP Exam Formats by Subject with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l01-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: AP Exam Formats by Subject showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l02",
      title: "AP: AP Multiple-Choice Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one mcq strategy decision rule in AP: AP Multiple-Choice Strategy.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for frq planning before your next AP exam success session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ap-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "AP: AP Multiple-Choice Strategy Decision-Phase Mapping",
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
                "label": "Prompt Plan"
              },
              {
                "id": "execute",
                "label": "Evidence Build"
              },
              {
                "id": "reflect",
                "label": "Rubric Calibration"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ap-prep-101-l02-a1",
          "type": "image",
          "title": "Mcq Strategy Snapshot",
          "content": "Visual anchor for AP: AP Multiple-Choice Strategy with emphasis on mcq strategy within practice set planning."
        },
        {
          "id": "ap-prep-101-l02-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: AP Multiple-Choice Strategy showing frq planning decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l03",
      title: "AP: Free-Response Planning",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ap-prep-101-l03-q1",
          "text": "During AP: Free-Response Planning, early guesses are causing frq planning losses. Which intervention should happen first?",
          "skillId": "ap-prep-101-skill-frq-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "c",
              "text": "Use a short verification pass and log decision triggers in a strategy log before restarting the drill."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "c",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "ap-prep-101-l03-q2",
          "text": "A AP drill on AP: Free-Response Planning ends with unstable pacing. What should be diagnosed first?",
          "skillId": "ap-prep-101-skill-mcq-strategy-diagnosis",
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
              "text": "Increase question volume while keeping the same pacing errors."
            },
            {
              "id": "d",
              "text": "Pinpoint where mcq strategy decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific mcq strategy decision points, not from total question count alone."
        },
        {
          "id": "ap-prep-101-l03-q3",
          "text": "Which one-week sprint most improves evidence transfer for AP: Free-Response Planning in AP?",
          "skillId": "ap-prep-101-skill-evidence-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same evidence objective."
            },
            {
              "id": "b",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "c",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "d",
              "text": "Delay all error correction until the final day."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "ap-prep-101-l03-q4",
          "text": "In AP AP: Free-Response Planning, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "ap-prep-101-skill-rubrics-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated rubrics process issue, then apply the same correction across the next timed block."
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
          "correctOptionId": "b",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "ap-prep-101-l03-q5",
          "text": "In AP MCQ set, prompt misread appears during AP: Free-Response Planning. What is the strongest immediate correction?",
          "skillId": "ap-prep-101-skill-frq-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore MCQ set diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Highlight command terms and restate prompt requirements in one line."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes prompt misread.",
          "explanation": "Immediate correction inside MCQ set improves transfer to the next timed practice set."
        },
        {
          "id": "ap-prep-101-l03-q6",
          "text": "During AP FRQ set, evidence-without-analysis repeats in AP: Free-Response Planning. Which plan should be applied before the next retest?",
          "skillId": "ap-prep-101-skill-mcq-strategy-section-application",
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
              "text": "Attach one explicit because-therefore analysis to every evidence point. Track outcomes in a rubric evidence checklist and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in rubric evidence checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ap-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "AP: Free-Response Planning Correction Alignment",
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
                "label": "FRQ response lacks direct evidence integration"
              },
              {
                "id": "l2",
                "label": "MCQ misses cluster around nuanced wording traps"
              },
              {
                "id": "l3",
                "label": "Strong ideas but response not aligned to rubric language"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add explicit source reference + commentary for each body point"
              },
              {
                "id": "r2",
                "label": "Annotate qualifier words and eliminate absolute distractors"
              },
              {
                "id": "r3",
                "label": "Rewrite one paragraph using exact rubric success criteria"
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
          "id": "ap-prep-101-l03-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Free-Response Planning with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l03-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Free-Response Planning showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l04",
      title: "AP: Evidence and Explanation Quality",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one evidence decision rule in AP: Evidence and Explanation Quality.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for frq planning before your next AP exam success session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ap-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "AP: Evidence and Explanation Quality Decision-Phase Mapping",
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
                "label": "Prompt Plan"
              },
              {
                "id": "execute",
                "label": "Evidence Build"
              },
              {
                "id": "reflect",
                "label": "Rubric Calibration"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ap-prep-101-l04-a1",
          "type": "image",
          "title": "Evidence Snapshot",
          "content": "Visual anchor for AP: Evidence and Explanation Quality with emphasis on evidence within practice set planning."
        },
        {
          "id": "ap-prep-101-l04-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Evidence and Explanation Quality showing frq planning decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l05",
      title: "AP: Scoring Rubric Deep Dive",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ap-prep-101-l05-a1",
          "type": "image",
          "title": "Rubrics Snapshot",
          "content": "Visual anchor for AP: Scoring Rubric Deep Dive with emphasis on rubrics within review cycle planning."
        },
        {
          "id": "ap-prep-101-l05-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Scoring Rubric Deep Dive showing frq planning decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l06",
      title: "AP: Time Management in FRQ",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ap-prep-101-l06-q1",
          "text": "During AP: Time Management in FRQ, early guesses are causing frq planning losses. Which intervention should happen first?",
          "skillId": "ap-prep-101-skill-frq-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in a checkpoint log before restarting the drill."
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
          "id": "ap-prep-101-l06-q2",
          "text": "A AP drill on AP: Time Management in FRQ ends with unstable pacing. What should be diagnosed first?",
          "skillId": "ap-prep-101-skill-mcq-strategy-diagnosis",
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
              "text": "Pinpoint where mcq strategy decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific mcq strategy decision points, not from total question count alone."
        },
        {
          "id": "ap-prep-101-l06-q3",
          "text": "Which one-week sprint most improves evidence transfer for AP: Time Management in FRQ in AP?",
          "skillId": "ap-prep-101-skill-evidence-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed timed block, and one retest focused on the same evidence objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "ap-prep-101-l06-q4",
          "text": "In AP AP: Time Management in FRQ, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "ap-prep-101-skill-rubrics-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated rubrics process issue, then apply the same correction across the next timed block."
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
          "id": "ap-prep-101-l06-q5",
          "text": "In AP MCQ set, prompt misread appears during AP: Time Management in FRQ. What is the strongest immediate correction?",
          "skillId": "ap-prep-101-skill-frq-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore MCQ set diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Highlight command terms and restate prompt requirements in one line."
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
          "hint": "Choose the option that directly fixes prompt misread.",
          "explanation": "Immediate correction inside MCQ set improves transfer to the next timed timed block."
        },
        {
          "id": "ap-prep-101-l06-q6",
          "text": "During AP FRQ set, evidence-without-analysis repeats in AP: Time Management in FRQ. Which plan should be applied before the next retest?",
          "skillId": "ap-prep-101-skill-mcq-strategy-section-application",
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
              "text": "Attach one explicit because-therefore analysis to every evidence point. Track outcomes in a rubric evidence checklist and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in rubric evidence checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ap-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "AP: Time Management in FRQ Pace Control Board",
          "description": "Place each tactic in the right phase to stabilize pacing.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Assign each tactic to Plan, Execute, or Recover.",
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
                "id": "recover",
                "label": "Recover"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "recover"
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
          "id": "ap-prep-101-l06-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Time Management in FRQ with emphasis on frq planning within timed block planning."
        },
        {
          "id": "ap-prep-101-l06-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Time Management in FRQ showing mcq strategy decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l07",
      title: "AP: Common Pitfalls and Fixes",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ap-prep-101-l07-a1",
          "type": "image",
          "title": "Rubrics Snapshot",
          "content": "Visual anchor for AP: Common Pitfalls and Fixes with emphasis on rubrics within review cycle planning."
        },
        {
          "id": "ap-prep-101-l07-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Common Pitfalls and Fixes showing frq planning decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l08",
      title: "AP: Practice Set: MCQ",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one mcq strategy decision rule in AP: Practice Set: MCQ.",
          "Apply it in one section simulation and show how it improves section execution consistency.",
          "Set one next-step target for frq planning before your next AP exam success session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ap-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "AP: Practice Set: MCQ Attempt-Order Builder",
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
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "launch"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "stabilize"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "close"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ap-prep-101-l08-a1",
          "type": "image",
          "title": "Mcq Strategy Snapshot",
          "content": "Visual anchor for AP: Practice Set: MCQ with emphasis on mcq strategy within section simulation planning."
        },
        {
          "id": "ap-prep-101-l08-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Practice Set: MCQ showing frq planning decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l09",
      title: "AP: Practice Set: FRQ",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ap-prep-101-l09-q1",
          "text": "In AP: Practice Set: FRQ, a learner keeps missing frq planning items during AP practice. Which adjustment should happen before the next timed section simulation?",
          "skillId": "ap-prep-101-skill-frq-planning-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short frq planning checkpoint routine and annotate why each miss occurred in an attempt-order sheet before retesting."
            },
            {
              "id": "b",
              "text": "Skip review and jump directly to harder questions."
            },
            {
              "id": "c",
              "text": "Track only total score with no error categories."
            },
            {
              "id": "d",
              "text": "Switch topics even if frq planning is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for frq planning.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve frq planning."
        },
        {
          "id": "ap-prep-101-l09-q2",
          "text": "A AP AP: Practice Set: FRQ session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ap-prep-101-skill-mcq-strategy-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact mcq strategy decision point where time spikes, then set micro-checkpoints for that phase."
            },
            {
              "id": "c",
              "text": "Increase total question count and keep the same attempt order."
            },
            {
              "id": "d",
              "text": "Use one pacing rule for all sections regardless of load."
            }
          ],
          "correctOptionId": "b",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "ap-prep-101-l09-q3",
          "text": "AP practice shows correction is happening but not sticking in AP: Practice Set: FRQ. What plan fixes this fastest?",
          "skillId": "ap-prep-101-skill-evidence-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Increase difficulty only, without targeted rematches."
            },
            {
              "id": "c",
              "text": "Pair each corrected evidence error with a near-transfer item in the next timed block and track it in an attempt-order sheet."
            },
            {
              "id": "d",
              "text": "Rewatch lesson content without logging applied changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "ap-prep-101-l09-q4",
          "text": "During post-drill review for AP: Practice Set: FRQ, which fix should be prioritized first for score impact in AP?",
          "skillId": "ap-prep-101-skill-rubrics-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Ignore pacing and focus only on confidence items."
            },
            {
              "id": "c",
              "text": "Rewrite notes without validating changes in timed practice."
            },
            {
              "id": "d",
              "text": "Address repeated rubrics and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "ap-prep-101-l09-q5",
          "text": "In AP MCQ set, prompt misread appears during AP: Practice Set: FRQ. What is the strongest immediate correction?",
          "skillId": "ap-prep-101-skill-frq-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Highlight command terms and restate prompt requirements in one line."
            },
            {
              "id": "b",
              "text": "Ignore MCQ set diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes prompt misread.",
          "explanation": "Immediate correction inside MCQ set improves transfer to the next timed section simulation."
        },
        {
          "id": "ap-prep-101-l09-q6",
          "text": "During AP FRQ set, evidence-without-analysis repeats in AP: Practice Set: FRQ. Which plan should be applied before the next retest?",
          "skillId": "ap-prep-101-skill-mcq-strategy-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Attach one explicit because-therefore analysis to every evidence point. Track outcomes in a rubric evidence checklist and retest the same pattern."
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
          "explanation": "A logged correction cycle in rubric evidence checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ap-prep-101-l09-ia1",
          "type": "sorting_buckets",
          "title": "AP: Practice Set: FRQ Attempt-Order Sort",
          "description": "Sort each scenario into first-pass, flag, or deep-review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "adaptive",
          "instructions": [
            "Read each scenario.",
            "Sort into the best execution lane.",
            "Use the result to set your next section workflow."
          ],
          "data": {
            "buckets": [
              {
                "id": "first_pass",
                "label": "First Pass"
              },
              {
                "id": "flag",
                "label": "Flag and Return"
              },
              {
                "id": "deep_review",
                "label": "Deep Review"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Last FRQ response left incomplete under time pressure",
                "correctBucketId": "flag"
              },
              {
                "id": "i2",
                "label": "Evidence listed without explanation linkage",
                "correctBucketId": "flag"
              },
              {
                "id": "i3",
                "label": "Missed key concept terms expected in rubric row",
                "correctBucketId": "deep_review"
              },
              {
                "id": "i4",
                "label": "High-confidence medium-difficulty cluster",
                "correctBucketId": "first_pass"
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
          "id": "ap-prep-101-l09-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Practice Set: FRQ with emphasis on frq planning within section simulation planning."
        },
        {
          "id": "ap-prep-101-l09-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Practice Set: FRQ showing mcq strategy decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l10",
      title: "AP: Targeted Frq Planning Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one frq planning decision rule in AP: Targeted Frq Planning Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for mcq strategy before your next AP exam success session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ap-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "AP: Targeted Frq Planning Remediation Decision-Phase Mapping",
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
                "label": "Prompt Plan"
              },
              {
                "id": "execute",
                "label": "Evidence Build"
              },
              {
                "id": "reflect",
                "label": "Rubric Calibration"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ap-prep-101-l10-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Targeted Frq Planning Remediation with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l10-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Targeted Frq Planning Remediation showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l11",
      title: "AP: Timed Mcq Strategy Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ap-prep-101-l11-a1",
          "type": "image",
          "title": "Mcq Strategy Snapshot",
          "content": "Visual anchor for AP: Timed Mcq Strategy Sprint with emphasis on mcq strategy within timed block planning."
        },
        {
          "id": "ap-prep-101-l11-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Timed Mcq Strategy Sprint showing frq planning decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l12",
      title: "AP: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ap-prep-101-l12-q1",
          "text": "AP coaching notes show repeated frq planning misses in AP: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "ap-prep-101-skill-frq-planning-workflow",
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
              "text": "Switch strands even though frq planning is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When frq planning is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "ap-prep-101-l12-q2",
          "text": "In AP: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this AP pattern?",
          "skillId": "ap-prep-101-skill-mcq-strategy-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction mcq strategy items."
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
          "id": "ap-prep-101-l12-q3",
          "text": "Which one-week plan best improves evidence transfer for AP exam success in AP?",
          "skillId": "ap-prep-101-skill-evidence-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same evidence objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same evidence target."
        },
        {
          "id": "ap-prep-101-l12-q4",
          "text": "After a AP: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in AP?",
          "skillId": "ap-prep-101-skill-rubrics-priority",
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
              "text": "Fix repeated rubrics breakdowns first because they scale across many items in the same run."
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
          "id": "ap-prep-101-l12-q5",
          "text": "In AP MCQ set, prompt misread appears during AP: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "ap-prep-101-skill-frq-planning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore MCQ set diagnostics and continue for volume."
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
              "text": "Highlight command terms and restate prompt requirements in one line."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes prompt misread.",
          "explanation": "Immediate correction inside MCQ set improves transfer to the next timed practice set."
        },
        {
          "id": "ap-prep-101-l12-q6",
          "text": "During AP FRQ set, evidence-without-analysis repeats in AP: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "ap-prep-101-skill-mcq-strategy-section-application",
          "options": [
            {
              "id": "a",
              "text": "Attach one explicit because-therefore analysis to every evidence point. Track outcomes in a rubric evidence checklist and retest the same pattern."
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
          "explanation": "A logged correction cycle in rubric evidence checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ap-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "AP: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "FRQ response lacks direct evidence integration"
              },
              {
                "id": "l2",
                "label": "MCQ misses cluster around nuanced wording traps"
              },
              {
                "id": "l3",
                "label": "Strong ideas but response not aligned to rubric language"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add explicit source reference + commentary for each body point"
              },
              {
                "id": "r2",
                "label": "Annotate qualifier words and eliminate absolute distractors"
              },
              {
                "id": "r3",
                "label": "Rewrite one paragraph using exact rubric success criteria"
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
          "id": "ap-prep-101-l12-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Mixed-Section Decision Drill with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l12-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Mixed-Section Decision Drill showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l13",
      title: "AP: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ap-prep-101-l13-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Adaptive Retry and Transfer Check with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l13-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Adaptive Retry and Transfer Check showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l14",
      title: "AP: Ap Exam Success Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one frq planning decision rule in AP: Ap Exam Success Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for mcq strategy before your next AP exam success session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ap-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "AP: Ap Exam Success Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Prompt Plan"
              },
              {
                "id": "execute",
                "label": "Evidence Build"
              },
              {
                "id": "reflect",
                "label": "Rubric Calibration"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Break AP prompt into claim, evidence, and reasoning requirements",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Draft thesis and evidence map before writing final response",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score response using rubric rows and identify one-point gains",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ap-prep-101-l14-a1",
          "type": "image",
          "title": "Frq Planning Snapshot",
          "content": "Visual anchor for AP: Ap Exam Success Stability Checkpoint with emphasis on frq planning within practice set planning."
        },
        {
          "id": "ap-prep-101-l14-a2",
          "type": "animation",
          "title": "Mcq Strategy Walkthrough",
          "content": "Stepwise walkthrough for AP: Ap Exam Success Stability Checkpoint showing mcq strategy decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ap-prep-101-l15",
      title: "AP: Mock AP Session and Reflection",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "ap-prep-101-l15-q1",
          "text": "During AP: Mock AP Session and Reflection, early guesses are causing mcq strategy losses. Which intervention should happen first?",
          "skillId": "ap-prep-101-skill-mcq-strategy-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Memorize answer patterns instead of checking reasoning."
            },
            {
              "id": "c",
              "text": "Use a short verification pass and log decision triggers in an attempt-order sheet before restarting the drill."
            },
            {
              "id": "d",
              "text": "Delay all correction until the weekend review session."
            }
          ],
          "correctOptionId": "c",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "ap-prep-101-l15-q2",
          "text": "A AP drill on AP: Mock AP Session and Reflection ends with unstable pacing. What should be diagnosed first?",
          "skillId": "ap-prep-101-skill-frq-planning-diagnosis",
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
              "text": "Increase question volume while keeping the same pacing errors."
            },
            {
              "id": "d",
              "text": "Pinpoint where frq planning decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific frq planning decision points, not from total question count alone."
        },
        {
          "id": "ap-prep-101-l15-q3",
          "text": "Which one-week sprint most improves evidence transfer for AP: Mock AP Session and Reflection in AP?",
          "skillId": "ap-prep-101-skill-evidence-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed section simulation, and one retest focused on the same evidence objective."
            },
            {
              "id": "b",
              "text": "Use only untimed review until confidence feels high."
            },
            {
              "id": "c",
              "text": "Rotate random topics daily with no retest queue."
            },
            {
              "id": "d",
              "text": "Delay all error correction until the final day."
            }
          ],
          "correctOptionId": "a",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "ap-prep-101-l15-q4",
          "text": "In AP AP: Mock AP Session and Reflection, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "ap-prep-101-skill-rubrics-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated rubrics process issue, then apply the same correction across the next timed block."
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
          "correctOptionId": "b",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "ap-prep-101-l15-q5",
          "text": "In AP MCQ set, prompt misread appears during AP: Mock AP Session and Reflection. What is the strongest immediate correction?",
          "skillId": "ap-prep-101-skill-mcq-strategy-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore MCQ set diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Highlight command terms and restate prompt requirements in one line."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes prompt misread.",
          "explanation": "Immediate correction inside MCQ set improves transfer to the next timed section simulation."
        },
        {
          "id": "ap-prep-101-l15-q6",
          "text": "During AP FRQ set, evidence-without-analysis repeats in AP: Mock AP Session and Reflection. Which plan should be applied before the next retest?",
          "skillId": "ap-prep-101-skill-frq-planning-section-application",
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
              "text": "Attach one explicit because-therefore analysis to every evidence point. Track outcomes in a rubric evidence checklist and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in rubric evidence checklist makes the pacing fix visible and repeatable."
        },
        {
          "id": "ap-prep-101-l15-q7",
          "text": "In a full AP mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "ap-prep-101-skill-mock-triage",
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
          "id": "ap-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in AP. What is the best pacing fix?",
          "skillId": "ap-prep-101-skill-section-pacing",
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
          "id": "ap-prep-101-l15-q9",
          "text": "Before submitting a high-stakes AP section, which quality-control habit is most reliable?",
          "skillId": "ap-prep-101-skill-quality-control",
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
          "id": "ap-prep-101-l15-q10",
          "text": "After full-mock review in AP, which next-step plan yields the best one-week improvement?",
          "skillId": "ap-prep-101-skill-remediation-loop",
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
          "id": "ap-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "AP: Mock AP Session and Reflection Error Taxonomy Sort",
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
                "label": "Content Knowledge Gap"
              },
              {
                "id": "strategy",
                "label": "Rubric/Response Strategy Gap"
              },
              {
                "id": "timing",
                "label": "FRQ Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Missed key concept terms expected in rubric row",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Evidence listed without explanation linkage",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Last FRQ response left incomplete under time pressure",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Rubric feedback understood but not reflected in next draft",
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
          "id": "ap-prep-101-l15-a1",
          "type": "image",
          "title": "Mcq Strategy Snapshot",
          "content": "Visual anchor for AP: Mock AP Session and Reflection with emphasis on mcq strategy within section simulation planning."
        },
        {
          "id": "ap-prep-101-l15-a2",
          "type": "animation",
          "title": "Frq Planning Walkthrough",
          "content": "Stepwise walkthrough for AP: Mock AP Session and Reflection showing frq planning decisions and attempt-order sheet checks."
        }
      ]
    }
  ],
};
