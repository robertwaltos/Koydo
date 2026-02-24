import type { LearningModule } from "@/lib/modules/types";

export const AtarPrep101Module: LearningModule = {
  id: "atar-prep-101",
  title: "ATAR Prep Foundations",
  description: "Prepare for ATAR pathways with subject scaling awareness and disciplined revision systems.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 20,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured ATAR readiness workflows",
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
      id: "atar-prep-101-l01",
      title: "ATAR: ATAR Pathways and Subject Selection",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "atar-prep-101-l01-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: ATAR Pathways and Subject Selection with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l01-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: ATAR Pathways and Subject Selection showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l02",
      title: "ATAR: Study Design Interpretation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one subject scaling decision rule in ATAR: Study Design Interpretation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for exam technique before your next ATAR readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "atar-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: Study Design Interpretation Decision-Phase Mapping",
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
                "label": "Scaling Plan"
              },
              {
                "id": "execute",
                "label": "Assessment Execution"
              },
              {
                "id": "reflect",
                "label": "Performance Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "atar-prep-101-l02-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Study Design Interpretation with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l02-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Study Design Interpretation showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l03",
      title: "ATAR: Exam Technique by Subject Type",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "atar-prep-101-l03-q1",
          "text": "In ATAR: Exam Technique by Subject Type, a learner keeps missing exam technique items during ATAR practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "atar-prep-101-skill-exam-technique-workflow",
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
              "text": "Run a short exam technique checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if exam technique is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for exam technique.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve exam technique."
        },
        {
          "id": "atar-prep-101-l03-q2",
          "text": "A ATAR ATAR: Exam Technique by Subject Type session ends with unstable timing. What should be diagnosed first?",
          "skillId": "atar-prep-101-skill-subject-scaling-diagnosis",
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
              "text": "Locate the exact subject scaling decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "atar-prep-101-l03-q3",
          "text": "ATAR practice shows correction is happening but not sticking in ATAR: Exam Technique by Subject Type. What plan fixes this fastest?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected revision cycles error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "atar-prep-101-l03-q4",
          "text": "During post-drill review for ATAR: Exam Technique by Subject Type, which fix should be prioritized first for score impact in ATAR?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated performance stability and pacing errors first because they affect many questions in one run."
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
          "id": "atar-prep-101-l03-q5",
          "text": "In ATAR criteria-heavy response section, criteria-term underuse appears during ATAR: Exam Technique by Subject Type. What is the strongest immediate correction?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criteria-heavy response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Integrate criteria terms directly into topic sentences."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes criteria-term underuse.",
          "explanation": "Immediate correction inside criteria-heavy response section improves transfer to the next timed practice set."
        },
        {
          "id": "atar-prep-101-l03-q6",
          "text": "During ATAR timed mixed section, late-section instability repeats in ATAR: Exam Technique by Subject Type. Which plan should be applied before the next retest?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
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
              "text": "Use fixed section checkpoints and a final review window. Track outcomes in a criteria variance log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criteria variance log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "atar-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "ATAR: Exam Technique by Subject Type Correction Alignment",
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
                "label": "Strong content but criteria marks missed in extended response"
              },
              {
                "id": "l2",
                "label": "Revision effort high but impact uneven across subjects"
              },
              {
                "id": "l3",
                "label": "Mock scores fluctuate despite similar preparation time"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Annotate criteria language and map each paragraph to requirement"
              },
              {
                "id": "r2",
                "label": "Rebalance study plan to highest scaling and weakest outcomes"
              },
              {
                "id": "r3",
                "label": "Add pre-mock readiness checklist and post-mock variance log"
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
          "id": "atar-prep-101-l03-a1",
          "type": "image",
          "title": "Exam Technique Snapshot",
          "content": "Visual anchor for ATAR: Exam Technique by Subject Type with emphasis on exam technique within practice set planning."
        },
        {
          "id": "atar-prep-101-l03-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Exam Technique by Subject Type showing subject scaling decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l04",
      title: "ATAR: ATAR High-Value Topic Prioritization",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one subject scaling decision rule in ATAR: ATAR High-Value Topic Prioritization.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for exam technique before your next ATAR readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "atar-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: ATAR High-Value Topic Prioritization Decision-Phase Mapping",
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
                "label": "Scaling Plan"
              },
              {
                "id": "execute",
                "label": "Assessment Execution"
              },
              {
                "id": "reflect",
                "label": "Performance Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "atar-prep-101-l04-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: ATAR High-Value Topic Prioritization with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l04-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: ATAR High-Value Topic Prioritization showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l05",
      title: "ATAR: Timed Response Quality Control",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "atar-prep-101-l05-a1",
          "type": "image",
          "title": "Performance Stability Snapshot",
          "content": "Visual anchor for ATAR: Timed Response Quality Control with emphasis on performance stability within timed block planning."
        },
        {
          "id": "atar-prep-101-l05-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Timed Response Quality Control showing subject scaling decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l06",
      title: "ATAR: Marking Criteria and Self-Assessment",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "atar-prep-101-l06-q1",
          "text": "ATAR coaching notes show repeated subject scaling misses in ATAR: Marking Criteria and Self-Assessment. What should the learner do before the next practice set?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though subject scaling is still the top weakness."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When subject scaling is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "atar-prep-101-l06-q2",
          "text": "In ATAR: Marking Criteria and Self-Assessment, pace drops late even when early accuracy is strong. Which move best addresses this ATAR pattern?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "c",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction exam technique items."
            },
            {
              "id": "d",
              "text": "Use random breaks with no fixed transition points."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "atar-prep-101-l06-q3",
          "text": "Which one-week plan best improves revision cycles transfer for ATAR readiness in ATAR?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
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
              "text": "Delay all review tasks until the final week."
            },
            {
              "id": "d",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same revision cycles objective under timing constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same revision cycles target."
        },
        {
          "id": "atar-prep-101-l06-q4",
          "text": "After a ATAR: Marking Criteria and Self-Assessment drill, which remediation should be prioritized first for score impact in ATAR?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "Fix repeated performance stability breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "b",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "c",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "d",
              "text": "Ignore pacing because content accuracy matters more."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "atar-prep-101-l06-q5",
          "text": "In ATAR criteria-heavy response section, criteria-term underuse appears during ATAR: Marking Criteria and Self-Assessment. What is the strongest immediate correction?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criteria-heavy response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Integrate criteria terms directly into topic sentences."
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
          "hint": "Choose the option that directly fixes criteria-term underuse.",
          "explanation": "Immediate correction inside criteria-heavy response section improves transfer to the next timed practice set."
        },
        {
          "id": "atar-prep-101-l06-q6",
          "text": "During ATAR timed mixed section, late-section instability repeats in ATAR: Marking Criteria and Self-Assessment. Which plan should be applied before the next retest?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
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
              "text": "Use fixed section checkpoints and a final review window. Track outcomes in a criteria variance log and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criteria variance log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "atar-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "ATAR: Marking Criteria and Self-Assessment Correction Alignment",
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
                "label": "Strong content but criteria marks missed in extended response"
              },
              {
                "id": "l2",
                "label": "Revision effort high but impact uneven across subjects"
              },
              {
                "id": "l3",
                "label": "Mock scores fluctuate despite similar preparation time"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Annotate criteria language and map each paragraph to requirement"
              },
              {
                "id": "r2",
                "label": "Rebalance study plan to highest scaling and weakest outcomes"
              },
              {
                "id": "r3",
                "label": "Add pre-mock readiness checklist and post-mock variance log"
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
          "id": "atar-prep-101-l06-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Marking Criteria and Self-Assessment with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l06-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Marking Criteria and Self-Assessment showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l07",
      title: "ATAR: Revision Cycle Planning",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "atar-prep-101-l07-a1",
          "type": "image",
          "title": "Revision Cycles Snapshot",
          "content": "Visual anchor for ATAR: Revision Cycle Planning with emphasis on revision cycles within practice set planning."
        },
        {
          "id": "atar-prep-101-l07-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Revision Cycle Planning showing subject scaling decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l08",
      title: "ATAR: Mock Exam Analytics",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one exam technique decision rule in ATAR: Mock Exam Analytics.",
          "Apply it in one section simulation and show how it improves section execution consistency.",
          "Set one next-step target for subject scaling before your next ATAR readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "atar-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: Mock Exam Analytics Attempt-Order Builder",
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
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "launch"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "stabilize"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
                "correctTargetId": "close"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "atar-prep-101-l08-a1",
          "type": "image",
          "title": "Exam Technique Snapshot",
          "content": "Visual anchor for ATAR: Mock Exam Analytics with emphasis on exam technique within section simulation planning."
        },
        {
          "id": "atar-prep-101-l08-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Mock Exam Analytics showing subject scaling decisions and attempt-order sheet checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l09",
      title: "ATAR: Stress and Consistency Routines",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "atar-prep-101-l09-q1",
          "text": "During ATAR: Stress and Consistency Routines, early guesses are causing performance stability losses. Which intervention should happen first?",
          "skillId": "atar-prep-101-skill-performance-stability-workflow",
          "options": [
            {
              "id": "a",
              "text": "Use a short verification pass and log decision triggers in a checkpoint log before restarting the drill."
            },
            {
              "id": "b",
              "text": "Keep the same pace and hope accuracy normalizes later."
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
          "correctOptionId": "a",
          "hint": "Pick the option that creates immediate corrective feedback.",
          "explanation": "Quick structured verification catches repeatable process errors before they spread across the next set."
        },
        {
          "id": "atar-prep-101-l09-q2",
          "text": "A ATAR drill on ATAR: Stress and Consistency Routines ends with unstable pacing. What should be diagnosed first?",
          "skillId": "atar-prep-101-skill-subject-scaling-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the same drill immediately without analysis."
            },
            {
              "id": "b",
              "text": "Pinpoint where subject scaling decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "c",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "b",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific subject scaling decision points, not from total question count alone."
        },
        {
          "id": "atar-prep-101-l09-q3",
          "text": "Which one-week sprint most improves exam technique transfer for ATAR: Stress and Consistency Routines in ATAR?",
          "skillId": "atar-prep-101-skill-exam-technique-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed timed block, and one retest focused on the same exam technique objective."
            },
            {
              "id": "d",
              "text": "Delay all error correction until the final day."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "atar-prep-101-l09-q4",
          "text": "In ATAR ATAR: Stress and Consistency Routines, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "atar-prep-101-skill-revision-cycles-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Review only confidence items and skip timing analysis."
            },
            {
              "id": "c",
              "text": "Change resources without identifying what failed."
            },
            {
              "id": "d",
              "text": "Prioritize the repeated revision cycles process issue, then apply the same correction across the next timed block."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "atar-prep-101-l09-q5",
          "text": "In ATAR criteria-heavy response section, criteria-term underuse appears during ATAR: Stress and Consistency Routines. What is the strongest immediate correction?",
          "skillId": "atar-prep-101-skill-performance-stability-section-application",
          "options": [
            {
              "id": "a",
              "text": "Integrate criteria terms directly into topic sentences."
            },
            {
              "id": "b",
              "text": "Ignore criteria-heavy response section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes criteria-term underuse.",
          "explanation": "Immediate correction inside criteria-heavy response section improves transfer to the next timed timed block."
        },
        {
          "id": "atar-prep-101-l09-q6",
          "text": "During ATAR timed mixed section, late-section instability repeats in ATAR: Stress and Consistency Routines. Which plan should be applied before the next retest?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Use fixed section checkpoints and a final review window. Track outcomes in a criteria variance log and retest the same pattern."
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
          "explanation": "A logged correction cycle in criteria variance log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "atar-prep-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: Stress and Consistency Routines Pace Control Board",
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
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
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
          "id": "atar-prep-101-l09-a1",
          "type": "image",
          "title": "Performance Stability Snapshot",
          "content": "Visual anchor for ATAR: Stress and Consistency Routines with emphasis on performance stability within timed block planning."
        },
        {
          "id": "atar-prep-101-l09-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Stress and Consistency Routines showing subject scaling decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l10",
      title: "ATAR: Targeted Subject Scaling Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one subject scaling decision rule in ATAR: Targeted Subject Scaling Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for exam technique before your next ATAR readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "atar-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: Targeted Subject Scaling Remediation Decision-Phase Mapping",
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
                "label": "Scaling Plan"
              },
              {
                "id": "execute",
                "label": "Assessment Execution"
              },
              {
                "id": "reflect",
                "label": "Performance Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "atar-prep-101-l10-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Targeted Subject Scaling Remediation with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l10-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Targeted Subject Scaling Remediation showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l11",
      title: "ATAR: Timed Exam Technique Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "atar-prep-101-l11-a1",
          "type": "image",
          "title": "Exam Technique Snapshot",
          "content": "Visual anchor for ATAR: Timed Exam Technique Sprint with emphasis on exam technique within timed block planning."
        },
        {
          "id": "atar-prep-101-l11-a2",
          "type": "animation",
          "title": "Performance Stability Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Timed Exam Technique Sprint showing performance stability decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l12",
      title: "ATAR: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "atar-prep-101-l12-q1",
          "text": "ATAR coaching notes show repeated subject scaling misses in ATAR: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
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
              "text": "Switch strands even though subject scaling is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When subject scaling is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "atar-prep-101-l12-q2",
          "text": "In ATAR: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this ATAR pattern?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction exam technique items."
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
          "id": "atar-prep-101-l12-q3",
          "text": "Which one-week plan best improves revision cycles transfer for ATAR readiness in ATAR?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same revision cycles objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same revision cycles target."
        },
        {
          "id": "atar-prep-101-l12-q4",
          "text": "After a ATAR: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in ATAR?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
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
              "text": "Fix repeated performance stability breakdowns first because they scale across many items in the same run."
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
          "id": "atar-prep-101-l12-q5",
          "text": "In ATAR criteria-heavy response section, criteria-term underuse appears during ATAR: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criteria-heavy response section diagnostics and continue for volume."
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
              "text": "Integrate criteria terms directly into topic sentences."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes criteria-term underuse.",
          "explanation": "Immediate correction inside criteria-heavy response section improves transfer to the next timed practice set."
        },
        {
          "id": "atar-prep-101-l12-q6",
          "text": "During ATAR timed mixed section, late-section instability repeats in ATAR: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
          "options": [
            {
              "id": "a",
              "text": "Use fixed section checkpoints and a final review window. Track outcomes in a criteria variance log and retest the same pattern."
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
          "explanation": "A logged correction cycle in criteria variance log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "atar-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "ATAR: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Strong content but criteria marks missed in extended response"
              },
              {
                "id": "l2",
                "label": "Revision effort high but impact uneven across subjects"
              },
              {
                "id": "l3",
                "label": "Mock scores fluctuate despite similar preparation time"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Annotate criteria language and map each paragraph to requirement"
              },
              {
                "id": "r2",
                "label": "Rebalance study plan to highest scaling and weakest outcomes"
              },
              {
                "id": "r3",
                "label": "Add pre-mock readiness checklist and post-mock variance log"
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
          "id": "atar-prep-101-l12-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Mixed-Section Decision Drill with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l12-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Mixed-Section Decision Drill showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l13",
      title: "ATAR: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "atar-prep-101-l13-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Adaptive Retry and Transfer Check with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l13-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Adaptive Retry and Transfer Check showing exam technique decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l14",
      title: "ATAR: Atar Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one performance stability decision rule in ATAR: Atar Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for subject scaling before your next ATAR readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "atar-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "ATAR: Atar Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Scaling Plan"
              },
              {
                "id": "execute",
                "label": "Assessment Execution"
              },
              {
                "id": "reflect",
                "label": "Performance Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Align weekly revision to ATAR scaling and subject priorities",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use exam-condition response protocol with quality checkpoints",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Review mark criteria and track consistent score drifts",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "atar-prep-101-l14-a1",
          "type": "image",
          "title": "Performance Stability Snapshot",
          "content": "Visual anchor for ATAR: Atar Readiness Stability Checkpoint with emphasis on performance stability within practice set planning."
        },
        {
          "id": "atar-prep-101-l14-a2",
          "type": "animation",
          "title": "Subject Scaling Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Atar Readiness Stability Checkpoint showing subject scaling decisions and strategy log checks."
        }
      ]
    },
    {
      id: "atar-prep-101-l15",
      title: "ATAR: Final ATAR Readiness Blueprint",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "atar-prep-101-l15-q1",
          "text": "ATAR coaching notes show repeated subject scaling misses in ATAR: Final ATAR Readiness Blueprint. What should the learner do before the next practice set?",
          "skillId": "atar-prep-101-skill-subject-scaling-workflow",
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
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            },
            {
              "id": "d",
              "text": "Switch strands even though subject scaling is still the top weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When subject scaling is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "atar-prep-101-l15-q2",
          "text": "In ATAR: Final ATAR Readiness Blueprint, pace drops late even when early accuracy is strong. Which move best addresses this ATAR pattern?",
          "skillId": "atar-prep-101-skill-exam-technique-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Memorize answer keys without tracking timing behavior."
            },
            {
              "id": "c",
              "text": "Use random breaks with no fixed transition points."
            },
            {
              "id": "d",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction exam technique items."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "atar-prep-101-l15-q3",
          "text": "Which one-week plan best improves revision cycles transfer for ATAR readiness in ATAR?",
          "skillId": "atar-prep-101-skill-revision-cycles-transfer",
          "options": [
            {
              "id": "a",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same revision cycles objective under timing constraints."
            },
            {
              "id": "b",
              "text": "Use only untimed warmups and avoid mixed sets."
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
          "correctOptionId": "a",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same revision cycles target."
        },
        {
          "id": "atar-prep-101-l15-q4",
          "text": "After a ATAR: Final ATAR Readiness Blueprint drill, which remediation should be prioritized first for score impact in ATAR?",
          "skillId": "atar-prep-101-skill-performance-stability-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Fix repeated performance stability breakdowns first because they scale across many items in the same run."
            },
            {
              "id": "c",
              "text": "Rewrite notes without testing changes in a timed set."
            },
            {
              "id": "d",
              "text": "Ignore pacing because content accuracy matters more."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "atar-prep-101-l15-q5",
          "text": "In ATAR criteria-heavy response section, criteria-term underuse appears during ATAR: Final ATAR Readiness Blueprint. What is the strongest immediate correction?",
          "skillId": "atar-prep-101-skill-subject-scaling-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore criteria-heavy response section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Integrate criteria terms directly into topic sentences."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes criteria-term underuse.",
          "explanation": "Immediate correction inside criteria-heavy response section improves transfer to the next timed practice set."
        },
        {
          "id": "atar-prep-101-l15-q6",
          "text": "During ATAR timed mixed section, late-section instability repeats in ATAR: Final ATAR Readiness Blueprint. Which plan should be applied before the next retest?",
          "skillId": "atar-prep-101-skill-exam-technique-section-application",
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
              "text": "Use fixed section checkpoints and a final review window. Track outcomes in a criteria variance log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in criteria variance log makes the pacing fix visible and repeatable."
        },
        {
          "id": "atar-prep-101-l15-q7",
          "text": "In a full ATAR mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "atar-prep-101-skill-mock-triage",
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
          "id": "atar-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in ATAR. What is the best pacing fix?",
          "skillId": "atar-prep-101-skill-section-pacing",
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
          "id": "atar-prep-101-l15-q9",
          "text": "Before submitting a high-stakes ATAR section, which quality-control habit is most reliable?",
          "skillId": "atar-prep-101-skill-quality-control",
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
          "id": "atar-prep-101-l15-q10",
          "text": "After full-mock review in ATAR, which next-step plan yields the best one-week improvement?",
          "skillId": "atar-prep-101-skill-remediation-loop",
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
          "id": "atar-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "ATAR: Final ATAR Readiness Blueprint Error Taxonomy Sort",
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
                "label": "Subject Content Gap"
              },
              {
                "id": "strategy",
                "label": "Criteria Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Performance Stability Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Topic recall failed in high-weight subject paper",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Criteria term ignored in response structure",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Last section decisions rushed under pressure",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Review complete but next mock showed same instability",
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
          "id": "atar-prep-101-l15-a1",
          "type": "image",
          "title": "Subject Scaling Snapshot",
          "content": "Visual anchor for ATAR: Final ATAR Readiness Blueprint with emphasis on subject scaling within practice set planning."
        },
        {
          "id": "atar-prep-101-l15-a2",
          "type": "animation",
          "title": "Exam Technique Walkthrough",
          "content": "Stepwise walkthrough for ATAR: Final ATAR Readiness Blueprint showing exam technique decisions and strategy log checks."
        }
      ]
    }
  ],
};
