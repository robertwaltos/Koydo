import type { LearningModule } from "@/lib/modules/types";

export const CuetPrep101Module: LearningModule = {
  id: "cuet-prep-101",
  title: "CUET Prep Foundations",
  description: "Prepare for India's CUET with domain practice, language strategy, and test timing.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 15,
  maxAge: 21,
  moduleVersion: "1.0.0",
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured CUET readiness workflows",
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
      id: "cuet-prep-101-l01",
      title: "CUET: CUET Pattern and University Mapping",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "cuet-prep-101-l01-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: CUET Pattern and University Mapping with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l01-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: CUET Pattern and University Mapping showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l02",
      title: "CUET: Language Section Scoring Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one language sections decision rule in CUET: Language Section Scoring Strategy.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for domain subjects before your next CUET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "CUET: Language Section Scoring Strategy Decision-Phase Mapping",
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
                "label": "Domain Plan"
              },
              {
                "id": "execute",
                "label": "Section Execution"
              },
              {
                "id": "reflect",
                "label": "Attempt Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize CUET domain sections by university target weight",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use language-domain-general section transitions with time guards",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track misses by domain concept and reasoning pattern",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "cuet-prep-101-l02-a1",
          "type": "image",
          "title": "Language Sections Snapshot",
          "content": "Visual anchor for CUET: Language Section Scoring Strategy with emphasis on language sections within passage set planning."
        },
        {
          "id": "cuet-prep-101-l02-a2",
          "type": "animation",
          "title": "Domain Subjects Walkthrough",
          "content": "Stepwise walkthrough for CUET: Language Section Scoring Strategy showing domain subjects decisions and annotation map checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l03",
      title: "CUET: Domain Subject Prioritization",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "cuet-prep-101-l03-q1",
          "text": "During CUET: Domain Subject Prioritization, early guesses are causing domain subjects losses. Which intervention should happen first?",
          "skillId": "cuet-prep-101-skill-domain-subjects-workflow",
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
          "id": "cuet-prep-101-l03-q2",
          "text": "A CUET drill on CUET: Domain Subject Prioritization ends with unstable pacing. What should be diagnosed first?",
          "skillId": "cuet-prep-101-skill-general-test-diagnosis",
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
              "text": "Pinpoint where general test decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific general test decision points, not from total question count alone."
        },
        {
          "id": "cuet-prep-101-l03-q3",
          "text": "Which one-week sprint most improves language sections transfer for CUET: Domain Subject Prioritization in CUET?",
          "skillId": "cuet-prep-101-skill-language-sections-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same language sections objective."
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
          "id": "cuet-prep-101-l03-q4",
          "text": "In CUET CUET: Domain Subject Prioritization, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "cuet-prep-101-skill-time-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated time control process issue, then apply the same correction across the next timed block."
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
          "id": "cuet-prep-101-l03-q5",
          "text": "In CUET domain section, domain-priority drift appears during CUET: Domain Subject Prioritization. What is the strongest immediate correction?",
          "skillId": "cuet-prep-101-skill-domain-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore domain section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Prioritize domain questions by target university weighting."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes domain-priority drift.",
          "explanation": "Immediate correction inside domain section improves transfer to the next timed practice set."
        },
        {
          "id": "cuet-prep-101-l03-q6",
          "text": "During CUET general test section, logic trap selection repeats in CUET: Domain Subject Prioritization. Which plan should be applied before the next retest?",
          "skillId": "cuet-prep-101-skill-general-test-section-application",
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
              "text": "Apply elimination order: assumption, evidence, conclusion. Track outcomes in a section-transition checklist and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in section-transition checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "CUET: Domain Subject Prioritization Correction Alignment",
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
                "label": "Domain section accuracy good but language section inconsistent"
              },
              {
                "id": "l2",
                "label": "General test reasoning errors repeat under time pressure"
              },
              {
                "id": "l3",
                "label": "Current affairs recall weak in mixed sets"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add daily language micro-drill before domain practice"
              },
              {
                "id": "r2",
                "label": "Apply fixed logic question elimination sequence"
              },
              {
                "id": "r3",
                "label": "Run spaced current-affairs recall with weekly mixed quizzes"
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
          "id": "cuet-prep-101-l03-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Domain Subject Prioritization with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l03-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Domain Subject Prioritization showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l04",
      title: "CUET: General Test Logical Reasoning",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one general test decision rule in CUET: General Test Logical Reasoning.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for domain subjects before your next CUET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "CUET: General Test Logical Reasoning Decision-Phase Mapping",
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
                "label": "Domain Plan"
              },
              {
                "id": "execute",
                "label": "Section Execution"
              },
              {
                "id": "reflect",
                "label": "Attempt Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize CUET domain sections by university target weight",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use language-domain-general section transitions with time guards",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track misses by domain concept and reasoning pattern",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "cuet-prep-101-l04-a1",
          "type": "image",
          "title": "General Test Snapshot",
          "content": "Visual anchor for CUET: General Test Logical Reasoning with emphasis on general test within practice set planning."
        },
        {
          "id": "cuet-prep-101-l04-a2",
          "type": "animation",
          "title": "Domain Subjects Walkthrough",
          "content": "Stepwise walkthrough for CUET: General Test Logical Reasoning showing domain subjects decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l05",
      title: "CUET: Quantitative Aptitude Drills",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "cuet-prep-101-l05-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Quantitative Aptitude Drills with emphasis on domain subjects within problem set planning."
        },
        {
          "id": "cuet-prep-101-l05-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Quantitative Aptitude Drills showing general test decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l06",
      title: "CUET: Current Affairs and GK Workflow",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "cuet-prep-101-l06-q1",
          "text": "During CUET: Current Affairs and GK Workflow, early guesses are causing domain subjects losses. Which intervention should happen first?",
          "skillId": "cuet-prep-101-skill-domain-subjects-workflow",
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
          "id": "cuet-prep-101-l06-q2",
          "text": "A CUET drill on CUET: Current Affairs and GK Workflow ends with unstable pacing. What should be diagnosed first?",
          "skillId": "cuet-prep-101-skill-general-test-diagnosis",
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
              "text": "Pinpoint where general test decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific general test decision points, not from total question count alone."
        },
        {
          "id": "cuet-prep-101-l06-q3",
          "text": "Which one-week sprint most improves language sections transfer for CUET: Current Affairs and GK Workflow in CUET?",
          "skillId": "cuet-prep-101-skill-language-sections-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed practice set, and one retest focused on the same language sections objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "cuet-prep-101-l06-q4",
          "text": "In CUET CUET: Current Affairs and GK Workflow, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "cuet-prep-101-skill-time-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated time control process issue, then apply the same correction across the next timed block."
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
          "id": "cuet-prep-101-l06-q5",
          "text": "In CUET domain section, domain-priority drift appears during CUET: Current Affairs and GK Workflow. What is the strongest immediate correction?",
          "skillId": "cuet-prep-101-skill-domain-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore domain section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Prioritize domain questions by target university weighting."
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
          "hint": "Choose the option that directly fixes domain-priority drift.",
          "explanation": "Immediate correction inside domain section improves transfer to the next timed practice set."
        },
        {
          "id": "cuet-prep-101-l06-q6",
          "text": "During CUET general test section, logic trap selection repeats in CUET: Current Affairs and GK Workflow. Which plan should be applied before the next retest?",
          "skillId": "cuet-prep-101-skill-general-test-section-application",
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
              "text": "Apply elimination order: assumption, evidence, conclusion. Track outcomes in a section-transition checklist and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in section-transition checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "CUET: Current Affairs and GK Workflow Correction Alignment",
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
                "label": "Domain section accuracy good but language section inconsistent"
              },
              {
                "id": "l2",
                "label": "General test reasoning errors repeat under time pressure"
              },
              {
                "id": "l3",
                "label": "Current affairs recall weak in mixed sets"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add daily language micro-drill before domain practice"
              },
              {
                "id": "r2",
                "label": "Apply fixed logic question elimination sequence"
              },
              {
                "id": "r3",
                "label": "Run spaced current-affairs recall with weekly mixed quizzes"
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
          "id": "cuet-prep-101-l06-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Current Affairs and GK Workflow with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l06-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Current Affairs and GK Workflow showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l07",
      title: "CUET: Mistake Log and Recovery Plan",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "cuet-prep-101-l07-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Mistake Log and Recovery Plan with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l07-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Mistake Log and Recovery Plan showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l08",
      title: "CUET: Timed Domain Mix Practice",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one time control decision rule in CUET: Timed Domain Mix Practice.",
          "Apply it in one timed block and show how it improves pace and decision stability.",
          "Set one next-step target for domain subjects before your next CUET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "CUET: Timed Domain Mix Practice Time-Checkpoint Sort",
          "description": "Sort execution decisions into before-timer, in-section, and recovery lanes.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each decision cue.",
            "Sort into the strongest checkpoint lane.",
            "Apply one lane in your next timed drill."
          ],
          "data": {
            "buckets": [
              {
                "id": "before_timer",
                "label": "Before Timer"
              },
              {
                "id": "in_section",
                "label": "In Section"
              },
              {
                "id": "recovery",
                "label": "Recovery"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Prioritize CUET domain sections by university target weight",
                "correctBucketId": "before_timer"
              },
              {
                "id": "i2",
                "label": "Use language-domain-general section transitions with time guards",
                "correctBucketId": "in_section"
              },
              {
                "id": "i3",
                "label": "Track misses by domain concept and reasoning pattern",
                "correctBucketId": "recovery"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "cuet-prep-101-l08-a1",
          "type": "image",
          "title": "Time Control Snapshot",
          "content": "Visual anchor for CUET: Timed Domain Mix Practice with emphasis on time control within timed block planning."
        },
        {
          "id": "cuet-prep-101-l08-a2",
          "type": "animation",
          "title": "Domain Subjects Walkthrough",
          "content": "Stepwise walkthrough for CUET: Timed Domain Mix Practice showing domain subjects decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l09",
      title: "CUET: CUET Mock Review Cycle",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "cuet-prep-101-l09-q1",
          "text": "During CUET: CUET Mock Review Cycle, early guesses are causing domain subjects losses. Which intervention should happen first?",
          "skillId": "cuet-prep-101-skill-domain-subjects-workflow",
          "options": [
            {
              "id": "a",
              "text": "Use a short verification pass and log decision triggers in an error taxonomy before restarting the drill."
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
          "id": "cuet-prep-101-l09-q2",
          "text": "A CUET drill on CUET: CUET Mock Review Cycle ends with unstable pacing. What should be diagnosed first?",
          "skillId": "cuet-prep-101-skill-general-test-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the same drill immediately without analysis."
            },
            {
              "id": "b",
              "text": "Pinpoint where general test decisions consume extra time, then redesign attempt order with checkpoints."
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
          "explanation": "Pacing issues usually come from specific general test decision points, not from total question count alone."
        },
        {
          "id": "cuet-prep-101-l09-q3",
          "text": "Which one-week sprint most improves language sections transfer for CUET: CUET Mock Review Cycle in CUET?",
          "skillId": "cuet-prep-101-skill-language-sections-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed review cycle, and one retest focused on the same language sections objective."
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
          "id": "cuet-prep-101-l09-q4",
          "text": "In CUET CUET: CUET Mock Review Cycle, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "cuet-prep-101-skill-time-control-priority",
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
              "text": "Prioritize the repeated time control process issue, then apply the same correction across the next timed block."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that addresses recurrence.",
          "explanation": "Recurring process errors compound quickly, so fixing them first creates cleaner conditions for content correction."
        },
        {
          "id": "cuet-prep-101-l09-q5",
          "text": "In CUET domain section, domain-priority drift appears during CUET: CUET Mock Review Cycle. What is the strongest immediate correction?",
          "skillId": "cuet-prep-101-skill-domain-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Prioritize domain questions by target university weighting."
            },
            {
              "id": "b",
              "text": "Ignore domain section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes domain-priority drift.",
          "explanation": "Immediate correction inside domain section improves transfer to the next timed review cycle."
        },
        {
          "id": "cuet-prep-101-l09-q6",
          "text": "During CUET general test section, logic trap selection repeats in CUET: CUET Mock Review Cycle. Which plan should be applied before the next retest?",
          "skillId": "cuet-prep-101-skill-general-test-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Apply elimination order: assumption, evidence, conclusion. Track outcomes in a section-transition checklist and retest the same pattern."
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
          "explanation": "A logged correction cycle in section-transition checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "CUET: CUET Mock Review Cycle Root-Cause Match",
          "description": "Match each repeated error signal to the correction with highest score impact.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each pair.",
            "Check your result.",
            "Apply one correction in your next drill."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Domain section accuracy good but language section inconsistent"
              },
              {
                "id": "l2",
                "label": "General test reasoning errors repeat under time pressure"
              },
              {
                "id": "l3",
                "label": "Current affairs recall weak in mixed sets"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add daily language micro-drill before domain practice"
              },
              {
                "id": "r2",
                "label": "Apply fixed logic question elimination sequence"
              },
              {
                "id": "r3",
                "label": "Run spaced current-affairs recall with weekly mixed quizzes"
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
          "id": "cuet-prep-101-l09-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: CUET Mock Review Cycle with emphasis on domain subjects within review cycle planning."
        },
        {
          "id": "cuet-prep-101-l09-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: CUET Mock Review Cycle showing general test decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l10",
      title: "CUET: Targeted Domain Subjects Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one domain subjects decision rule in CUET: Targeted Domain Subjects Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for general test before your next CUET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "CUET: Targeted Domain Subjects Remediation Decision-Phase Mapping",
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
                "label": "Domain Plan"
              },
              {
                "id": "execute",
                "label": "Section Execution"
              },
              {
                "id": "reflect",
                "label": "Attempt Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize CUET domain sections by university target weight",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use language-domain-general section transitions with time guards",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track misses by domain concept and reasoning pattern",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "cuet-prep-101-l10-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Targeted Domain Subjects Remediation with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l10-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Targeted Domain Subjects Remediation showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l11",
      title: "CUET: Timed General Test Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "cuet-prep-101-l11-a1",
          "type": "image",
          "title": "General Test Snapshot",
          "content": "Visual anchor for CUET: Timed General Test Sprint with emphasis on general test within timed block planning."
        },
        {
          "id": "cuet-prep-101-l11-a2",
          "type": "animation",
          "title": "Time Control Walkthrough",
          "content": "Stepwise walkthrough for CUET: Timed General Test Sprint showing time control decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l12",
      title: "CUET: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "cuet-prep-101-l12-q1",
          "text": "In CUET: Mixed-Section Decision Drill, a learner keeps missing domain subjects items during CUET practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "cuet-prep-101-skill-domain-subjects-workflow",
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
              "text": "Switch topics even if domain subjects is still the dominant weakness."
            },
            {
              "id": "d",
              "text": "Run a short domain subjects checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the action that creates a repeatable feedback loop for domain subjects.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve domain subjects."
        },
        {
          "id": "cuet-prep-101-l12-q2",
          "text": "A CUET CUET: Mixed-Section Decision Drill session ends with unstable timing. What should be diagnosed first?",
          "skillId": "cuet-prep-101-skill-general-test-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Locate the exact general test decision point where time spikes, then set micro-checkpoints for that phase."
            },
            {
              "id": "b",
              "text": "Retake the session immediately without diagnostics."
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
          "correctOptionId": "a",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "cuet-prep-101-l12-q3",
          "text": "CUET practice shows correction is happening but not sticking in CUET: Mixed-Section Decision Drill. What plan fixes this fastest?",
          "skillId": "cuet-prep-101-skill-language-sections-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Pair each corrected language sections error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "correctOptionId": "b",
          "hint": "The strongest option forces immediate transfer testing.",
          "explanation": "Correction becomes durable when each fix is tested on a similar item during the next constrained attempt."
        },
        {
          "id": "cuet-prep-101-l12-q4",
          "text": "During post-drill review for CUET: Mixed-Section Decision Drill, which fix should be prioritized first for score impact in CUET?",
          "skillId": "cuet-prep-101-skill-time-control-priority",
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
              "text": "Address repeated time control and pacing errors first because they affect many questions in one run."
            },
            {
              "id": "d",
              "text": "Rewrite notes without validating changes in timed practice."
            }
          ],
          "correctOptionId": "c",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "cuet-prep-101-l12-q5",
          "text": "In CUET domain section, domain-priority drift appears during CUET: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "cuet-prep-101-skill-domain-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore domain section diagnostics and continue for volume."
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
              "text": "Prioritize domain questions by target university weighting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes domain-priority drift.",
          "explanation": "Immediate correction inside domain section improves transfer to the next timed practice set."
        },
        {
          "id": "cuet-prep-101-l12-q6",
          "text": "During CUET general test section, logic trap selection repeats in CUET: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "cuet-prep-101-skill-general-test-section-application",
          "options": [
            {
              "id": "a",
              "text": "Apply elimination order: assumption, evidence, conclusion. Track outcomes in a section-transition checklist and retest the same pattern."
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
          "explanation": "A logged correction cycle in section-transition checklist makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "CUET: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Domain section accuracy good but language section inconsistent"
              },
              {
                "id": "l2",
                "label": "General test reasoning errors repeat under time pressure"
              },
              {
                "id": "l3",
                "label": "Current affairs recall weak in mixed sets"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add daily language micro-drill before domain practice"
              },
              {
                "id": "r2",
                "label": "Apply fixed logic question elimination sequence"
              },
              {
                "id": "r3",
                "label": "Run spaced current-affairs recall with weekly mixed quizzes"
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
          "id": "cuet-prep-101-l12-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Mixed-Section Decision Drill with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l12-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Mixed-Section Decision Drill showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l13",
      title: "CUET: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "cuet-prep-101-l13-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Adaptive Retry and Transfer Check with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l13-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Adaptive Retry and Transfer Check showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l14",
      title: "CUET: Cuet Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one domain subjects decision rule in CUET: Cuet Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for general test before your next CUET readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "cuet-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "CUET: Cuet Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Domain Plan"
              },
              {
                "id": "execute",
                "label": "Section Execution"
              },
              {
                "id": "reflect",
                "label": "Attempt Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Prioritize CUET domain sections by university target weight",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use language-domain-general section transitions with time guards",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Track misses by domain concept and reasoning pattern",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "cuet-prep-101-l14-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Cuet Readiness Stability Checkpoint with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l14-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Cuet Readiness Stability Checkpoint showing general test decisions and strategy log checks."
        }
      ]
    },
    {
      id: "cuet-prep-101-l15",
      title: "CUET: Final Revision and Exam-Day Plan",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "cuet-prep-101-l15-q1",
          "text": "In CUET: Final Revision and Exam-Day Plan, a learner keeps missing domain subjects items during CUET practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "cuet-prep-101-skill-domain-subjects-workflow",
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
              "text": "Run a short domain subjects checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if domain subjects is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for domain subjects.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve domain subjects."
        },
        {
          "id": "cuet-prep-101-l15-q2",
          "text": "A CUET CUET: Final Revision and Exam-Day Plan session ends with unstable timing. What should be diagnosed first?",
          "skillId": "cuet-prep-101-skill-general-test-diagnosis",
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
              "text": "Locate the exact general test decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "cuet-prep-101-l15-q3",
          "text": "CUET practice shows correction is happening but not sticking in CUET: Final Revision and Exam-Day Plan. What plan fixes this fastest?",
          "skillId": "cuet-prep-101-skill-language-sections-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected language sections error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "cuet-prep-101-l15-q4",
          "text": "During post-drill review for CUET: Final Revision and Exam-Day Plan, which fix should be prioritized first for score impact in CUET?",
          "skillId": "cuet-prep-101-skill-time-control-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated time control and pacing errors first because they affect many questions in one run."
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
          "id": "cuet-prep-101-l15-q5",
          "text": "In CUET domain section, domain-priority drift appears during CUET: Final Revision and Exam-Day Plan. What is the strongest immediate correction?",
          "skillId": "cuet-prep-101-skill-domain-subjects-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore domain section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Prioritize domain questions by target university weighting."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes domain-priority drift.",
          "explanation": "Immediate correction inside domain section improves transfer to the next timed practice set."
        },
        {
          "id": "cuet-prep-101-l15-q6",
          "text": "During CUET general test section, logic trap selection repeats in CUET: Final Revision and Exam-Day Plan. Which plan should be applied before the next retest?",
          "skillId": "cuet-prep-101-skill-general-test-section-application",
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
              "text": "Apply elimination order: assumption, evidence, conclusion. Track outcomes in a section-transition checklist and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in section-transition checklist makes the pacing fix visible and repeatable."
        },
        {
          "id": "cuet-prep-101-l15-q7",
          "text": "In a full CUET mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "cuet-prep-101-skill-mock-triage",
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
          "id": "cuet-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in CUET. What is the best pacing fix?",
          "skillId": "cuet-prep-101-skill-section-pacing",
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
          "id": "cuet-prep-101-l15-q9",
          "text": "Before submitting a high-stakes CUET section, which quality-control habit is most reliable?",
          "skillId": "cuet-prep-101-skill-quality-control",
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
          "id": "cuet-prep-101-l15-q10",
          "text": "After full-mock review in CUET, which next-step plan yields the best one-week improvement?",
          "skillId": "cuet-prep-101-skill-remediation-loop",
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
          "id": "cuet-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "CUET: Final Revision and Exam-Day Plan Error Taxonomy Sort",
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
                "label": "Domain Content Gap"
              },
              {
                "id": "strategy",
                "label": "Section Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Transition Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "High-frequency domain topic not retained",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "No consistent approach for logical reasoning traps",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Late transition into final section caused rushed guesses",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Fix identified but not validated in next CUET mock",
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
          "id": "cuet-prep-101-l15-a1",
          "type": "image",
          "title": "Domain Subjects Snapshot",
          "content": "Visual anchor for CUET: Final Revision and Exam-Day Plan with emphasis on domain subjects within practice set planning."
        },
        {
          "id": "cuet-prep-101-l15-a2",
          "type": "animation",
          "title": "General Test Walkthrough",
          "content": "Stepwise walkthrough for CUET: Final Revision and Exam-Day Plan showing general test decisions and strategy log checks."
        }
      ]
    }
  ],
};
