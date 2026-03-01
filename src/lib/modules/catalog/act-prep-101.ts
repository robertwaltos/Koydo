import type { LearningModule } from "@/lib/modules/types";

export const ActPrep101Module: LearningModule = {
  id: "act-prep-101",
  title: "ACT Prep Foundations",
  description: "Prepare for ACT English, Math, Reading, and Science with targeted drills.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 19,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured ACT readiness workflows",
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
      id: "act-prep-101-l01",
      title: "ACT: ACT Overview and Scoring",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "act-prep-101-l01-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: ACT Overview and Scoring with emphasis on english within practice set planning."
        },
        {
          "id": "act-prep-101-l01-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: ACT Overview and Scoring showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "act-prep-101-l02",
      title: "ACT: English Usage and Rhetoric",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one english decision rule in ACT: English Usage and Rhetoric.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for reading before your next ACT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "act-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "ACT: English Usage and Rhetoric Decision-Phase Mapping",
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
                "label": "Section Plan"
              },
              {
                "id": "execute",
                "label": "Rapid Solve"
              },
              {
                "id": "reflect",
                "label": "Precision Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "act-prep-101-l02-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: English Usage and Rhetoric with emphasis on english within passage set planning."
        },
        {
          "id": "act-prep-101-l02-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for ACT: English Usage and Rhetoric showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "act-prep-101-l03",
      title: "ACT: Math Core Skill Review",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "act-prep-101-l03-q1",
          "text": "In ACT: Math Core Skill Review, a learner keeps missing math items during ACT practice. Which adjustment should happen before the next timed problem set?",
          "skillId": "act-prep-101-skill-math-workflow",
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
          "id": "act-prep-101-l03-q2",
          "text": "A ACT ACT: Math Core Skill Review session ends with unstable timing. What should be diagnosed first?",
          "skillId": "act-prep-101-skill-science-reasoning-diagnosis",
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
              "text": "Locate the exact science reasoning decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "act-prep-101-l03-q3",
          "text": "ACT practice shows correction is happening but not sticking in ACT: Math Core Skill Review. What plan fixes this fastest?",
          "skillId": "act-prep-101-skill-english-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected english error with a near-transfer item in the next timed block and track it in a setup sheet."
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
          "id": "act-prep-101-l03-q4",
          "text": "During post-drill review for ACT: Math Core Skill Review, which fix should be prioritized first for score impact in ACT?",
          "skillId": "act-prep-101-skill-reading-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated reading and pacing errors first because they affect many questions in one run."
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
          "id": "act-prep-101-l03-q5",
          "text": "In ACT English section, rhetorical-purpose confusion appears during ACT: Math Core Skill Review. What is the strongest immediate correction?",
          "skillId": "act-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore English section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Tag sentence purpose before evaluating revision options."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes rhetorical-purpose confusion.",
          "explanation": "Immediate correction inside English section improves transfer to the next timed problem set."
        },
        {
          "id": "act-prep-101-l03-q6",
          "text": "During ACT Science section, data-trend misread repeats in ACT: Math Core Skill Review. Which plan should be applied before the next retest?",
          "skillId": "act-prep-101-skill-science-reasoning-section-application",
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
              "text": "Note variable shift + trend direction before drawing conclusions. Track outcomes in a passage-data decision log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in passage-data decision log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "act-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "ACT: Math Core Skill Review Correction Alignment",
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
                "label": "English rhetoric items missed despite knowing grammar rules"
              },
              {
                "id": "l2",
                "label": "Science reasoning misses when comparing two experiments"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops in final passage due rush"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Mark author-purpose signal words before selecting revision choices"
              },
              {
                "id": "r2",
                "label": "Map variable changes and outcomes before selecting claims"
              },
              {
                "id": "r3",
                "label": "Adopt fixed passage split and verification checkpoint at minute marks"
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
          "id": "act-prep-101-l03-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for ACT: Math Core Skill Review with emphasis on math within problem set planning."
        },
        {
          "id": "act-prep-101-l03-a2",
          "type": "animation",
          "title": "Science Reasoning Walkthrough",
          "content": "Stepwise walkthrough for ACT: Math Core Skill Review showing science reasoning decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "act-prep-101-l04",
      title: "ACT: Reading Passage Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in ACT: Reading Passage Strategy.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for english before your next ACT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "act-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "ACT: Reading Passage Strategy Decision-Phase Mapping",
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
                "label": "Section Plan"
              },
              {
                "id": "execute",
                "label": "Rapid Solve"
              },
              {
                "id": "reflect",
                "label": "Precision Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "act-prep-101-l04-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for ACT: Reading Passage Strategy with emphasis on reading within passage set planning."
        },
        {
          "id": "act-prep-101-l04-a2",
          "type": "animation",
          "title": "English Walkthrough",
          "content": "Stepwise walkthrough for ACT: Reading Passage Strategy showing english decisions and annotation map checks."
        }
      ]
    },
    {
      id: "act-prep-101-l05",
      title: "ACT: Science Reasoning Techniques",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "act-prep-101-l05-a1",
          "type": "image",
          "title": "Science Reasoning Snapshot",
          "content": "Visual anchor for ACT: Science Reasoning Techniques with emphasis on science reasoning within problem set planning."
        },
        {
          "id": "act-prep-101-l05-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Science Reasoning Techniques showing math decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "act-prep-101-l06",
      title: "ACT: Pacing Under Time Limits",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "act-prep-101-l06-q1",
          "text": "ACT coaching notes show repeated english misses in ACT: Pacing Under Time Limits. What should the learner do before the next timed block?",
          "skillId": "act-prep-101-skill-english-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Rebuild the solve workflow on two representative timed block items, then retest with the same constraints."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though english is still the top weakness."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When english is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "act-prep-101-l06-q2",
          "text": "In ACT: Pacing Under Time Limits, pace drops late even when early accuracy is strong. Which move best addresses this ACT pattern?",
          "skillId": "act-prep-101-skill-math-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction math items."
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
          "id": "act-prep-101-l06-q3",
          "text": "Which one-week plan best improves reading transfer for ACT readiness in ACT?",
          "skillId": "act-prep-101-skill-reading-transfer",
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
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same reading objective under timing constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same reading target."
        },
        {
          "id": "act-prep-101-l06-q4",
          "text": "After a ACT: Pacing Under Time Limits drill, which remediation should be prioritized first for score impact in ACT?",
          "skillId": "act-prep-101-skill-science-reasoning-priority",
          "options": [
            {
              "id": "a",
              "text": "Fix repeated science reasoning breakdowns first because they scale across many items in the same run."
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
          "id": "act-prep-101-l06-q5",
          "text": "In ACT English section, rhetorical-purpose confusion appears during ACT: Pacing Under Time Limits. What is the strongest immediate correction?",
          "skillId": "act-prep-101-skill-english-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore English section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Tag sentence purpose before evaluating revision options."
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
          "hint": "Choose the option that directly fixes rhetorical-purpose confusion.",
          "explanation": "Immediate correction inside English section improves transfer to the next timed timed block."
        },
        {
          "id": "act-prep-101-l06-q6",
          "text": "During ACT Science section, data-trend misread repeats in ACT: Pacing Under Time Limits. Which plan should be applied before the next retest?",
          "skillId": "act-prep-101-skill-math-section-application",
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
              "text": "Note variable shift + trend direction before drawing conclusions. Track outcomes in a passage-data decision log and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in passage-data decision log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "act-prep-101-l06-ia1",
          "type": "drag_and_drop",
          "title": "ACT: Pacing Under Time Limits Pace Control Board",
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
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
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
          "id": "act-prep-101-l06-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Pacing Under Time Limits with emphasis on english within timed block planning."
        },
        {
          "id": "act-prep-101-l06-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Pacing Under Time Limits showing math decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "act-prep-101-l07",
      title: "ACT: Error Log and Recovery",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "act-prep-101-l07-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Error Log and Recovery with emphasis on english within review cycle planning."
        },
        {
          "id": "act-prep-101-l07-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Error Log and Recovery showing math decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "act-prep-101-l08",
      title: "ACT: Section Drill: English + Reading",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one english decision rule in ACT: Section Drill: English + Reading.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for reading before your next ACT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "act-prep-101-l08-ia1",
          "type": "drag_and_drop",
          "title": "ACT: Section Drill: English + Reading Decision-Phase Mapping",
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
                "label": "Section Plan"
              },
              {
                "id": "execute",
                "label": "Rapid Solve"
              },
              {
                "id": "reflect",
                "label": "Precision Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "act-prep-101-l08-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Section Drill: English + Reading with emphasis on english within passage set planning."
        },
        {
          "id": "act-prep-101-l08-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for ACT: Section Drill: English + Reading showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "act-prep-101-l09",
      title: "ACT: Section Drill: Math + Science",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "act-prep-101-l09-q1",
          "text": "ACT coaching notes show repeated math misses in ACT: Section Drill: Math + Science. What should the learner do before the next problem set?",
          "skillId": "act-prep-101-skill-math-workflow",
          "options": [
            {
              "id": "a",
              "text": "Rebuild the solve workflow on two representative problem set items, then retest with the same constraints."
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
              "text": "Switch strands even though math is still the top weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When math is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "act-prep-101-l09-q2",
          "text": "In ACT: Section Drill: Math + Science, pace drops late even when early accuracy is strong. Which move best addresses this ACT pattern?",
          "skillId": "act-prep-101-skill-science-reasoning-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction science reasoning items."
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
          "id": "act-prep-101-l09-q3",
          "text": "Which one-week plan best improves english transfer for ACT readiness in ACT?",
          "skillId": "act-prep-101-skill-english-transfer",
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
          "id": "act-prep-101-l09-q4",
          "text": "After a ACT: Section Drill: Math + Science drill, which remediation should be prioritized first for score impact in ACT?",
          "skillId": "act-prep-101-skill-reading-priority",
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
              "text": "Fix repeated reading breakdowns first because they scale across many items in the same run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "act-prep-101-l09-q5",
          "text": "In ACT English section, rhetorical-purpose confusion appears during ACT: Section Drill: Math + Science. What is the strongest immediate correction?",
          "skillId": "act-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Tag sentence purpose before evaluating revision options."
            },
            {
              "id": "b",
              "text": "Ignore English section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes rhetorical-purpose confusion.",
          "explanation": "Immediate correction inside English section improves transfer to the next timed problem set."
        },
        {
          "id": "act-prep-101-l09-q6",
          "text": "During ACT Science section, data-trend misread repeats in ACT: Section Drill: Math + Science. Which plan should be applied before the next retest?",
          "skillId": "act-prep-101-skill-science-reasoning-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Note variable shift + trend direction before drawing conclusions. Track outcomes in a passage-data decision log and retest the same pattern."
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
          "explanation": "A logged correction cycle in passage-data decision log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "act-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "ACT: Section Drill: Math + Science Correction Alignment",
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
                "label": "English rhetoric items missed despite knowing grammar rules"
              },
              {
                "id": "l2",
                "label": "Science reasoning misses when comparing two experiments"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops in final passage due rush"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Mark author-purpose signal words before selecting revision choices"
              },
              {
                "id": "r2",
                "label": "Map variable changes and outcomes before selecting claims"
              },
              {
                "id": "r3",
                "label": "Adopt fixed passage split and verification checkpoint at minute marks"
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
        examDrill: "section_drill"
      },
      learningAids: [
        {
          "id": "act-prep-101-l09-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for ACT: Section Drill: Math + Science with emphasis on math within problem set planning."
        },
        {
          "id": "act-prep-101-l09-a2",
          "type": "animation",
          "title": "Science Reasoning Walkthrough",
          "content": "Stepwise walkthrough for ACT: Section Drill: Math + Science showing science reasoning decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "act-prep-101-l10",
      title: "ACT: Targeted English Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one english decision rule in ACT: Targeted English Remediation.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for reading before your next ACT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "act-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "ACT: Targeted English Remediation Decision-Phase Mapping",
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
                "label": "Section Plan"
              },
              {
                "id": "execute",
                "label": "Rapid Solve"
              },
              {
                "id": "reflect",
                "label": "Precision Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "act-prep-101-l10-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Targeted English Remediation with emphasis on english within passage set planning."
        },
        {
          "id": "act-prep-101-l10-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for ACT: Targeted English Remediation showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "act-prep-101-l11",
      title: "ACT: Timed Math Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "act-prep-101-l11-a1",
          "type": "image",
          "title": "Math Snapshot",
          "content": "Visual anchor for ACT: Timed Math Sprint with emphasis on math within problem set planning."
        },
        {
          "id": "act-prep-101-l11-a2",
          "type": "animation",
          "title": "Science Reasoning Walkthrough",
          "content": "Stepwise walkthrough for ACT: Timed Math Sprint showing science reasoning decisions and setup sheet checks."
        }
      ]
    },
    {
      id: "act-prep-101-l12",
      title: "ACT: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "act-prep-101-l12-q1",
          "text": "ACT coaching notes show repeated english misses in ACT: Mixed-Section Decision Drill. What should the learner do before the next practice set?",
          "skillId": "act-prep-101-skill-english-workflow",
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
              "text": "Switch strands even though english is still the top weakness."
            },
            {
              "id": "d",
              "text": "Rebuild the solve workflow on two representative practice set items, then retest with the same constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When english is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "act-prep-101-l12-q2",
          "text": "In ACT: Mixed-Section Decision Drill, pace drops late even when early accuracy is strong. Which move best addresses this ACT pattern?",
          "skillId": "act-prep-101-skill-math-diagnosis",
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
          "id": "act-prep-101-l12-q3",
          "text": "Which one-week plan best improves reading transfer for ACT readiness in ACT?",
          "skillId": "act-prep-101-skill-reading-transfer",
          "options": [
            {
              "id": "a",
              "text": "Use only untimed warmups and avoid mixed sets."
            },
            {
              "id": "b",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same reading objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same reading target."
        },
        {
          "id": "act-prep-101-l12-q4",
          "text": "After a ACT: Mixed-Section Decision Drill drill, which remediation should be prioritized first for score impact in ACT?",
          "skillId": "act-prep-101-skill-science-reasoning-priority",
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
              "text": "Fix repeated science reasoning breakdowns first because they scale across many items in the same run."
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
          "id": "act-prep-101-l12-q5",
          "text": "In ACT English section, rhetorical-purpose confusion appears during ACT: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "act-prep-101-skill-english-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore English section diagnostics and continue for volume."
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
              "text": "Tag sentence purpose before evaluating revision options."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes rhetorical-purpose confusion.",
          "explanation": "Immediate correction inside English section improves transfer to the next timed practice set."
        },
        {
          "id": "act-prep-101-l12-q6",
          "text": "During ACT Science section, data-trend misread repeats in ACT: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "act-prep-101-skill-math-section-application",
          "options": [
            {
              "id": "a",
              "text": "Note variable shift + trend direction before drawing conclusions. Track outcomes in a passage-data decision log and retest the same pattern."
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
          "explanation": "A logged correction cycle in passage-data decision log makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "act-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "ACT: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "English rhetoric items missed despite knowing grammar rules"
              },
              {
                "id": "l2",
                "label": "Science reasoning misses when comparing two experiments"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops in final passage due rush"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Mark author-purpose signal words before selecting revision choices"
              },
              {
                "id": "r2",
                "label": "Map variable changes and outcomes before selecting claims"
              },
              {
                "id": "r3",
                "label": "Adopt fixed passage split and verification checkpoint at minute marks"
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
          "id": "act-prep-101-l12-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Mixed-Section Decision Drill with emphasis on english within practice set planning."
        },
        {
          "id": "act-prep-101-l12-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Mixed-Section Decision Drill showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "act-prep-101-l13",
      title: "ACT: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "act-prep-101-l13-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Adaptive Retry and Transfer Check with emphasis on english within practice set planning."
        },
        {
          "id": "act-prep-101-l13-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Adaptive Retry and Transfer Check showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "act-prep-101-l14",
      title: "ACT: Act Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one english decision rule in ACT: Act Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for math before your next ACT readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "act-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "ACT: Act Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Section Plan"
              },
              {
                "id": "execute",
                "label": "Rapid Solve"
              },
              {
                "id": "reflect",
                "label": "Precision Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set ACT per-section checkpoints for English, Math, Reading, and Science",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use elimination-first workflow on dense passages and data tables",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Classify misses by concept, interpretation, or timing pressure",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "act-prep-101-l14-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Act Readiness Stability Checkpoint with emphasis on english within practice set planning."
        },
        {
          "id": "act-prep-101-l14-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Act Readiness Stability Checkpoint showing math decisions and strategy log checks."
        }
      ]
    },
    {
      id: "act-prep-101-l15",
      title: "ACT: Full ACT Mock and Review",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "act-prep-101-l15-q1",
          "text": "During ACT: Full ACT Mock and Review, early guesses are causing english losses. Which intervention should happen first?",
          "skillId": "act-prep-101-skill-english-workflow",
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
              "text": "Use a short verification pass and log decision triggers in an error taxonomy before restarting the drill."
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
          "id": "act-prep-101-l15-q2",
          "text": "A ACT drill on ACT: Full ACT Mock and Review ends with unstable pacing. What should be diagnosed first?",
          "skillId": "act-prep-101-skill-math-diagnosis",
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
              "text": "Pinpoint where math decisions consume extra time, then redesign attempt order with checkpoints."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific math decision points, not from total question count alone."
        },
        {
          "id": "act-prep-101-l15-q3",
          "text": "Which one-week sprint most improves reading transfer for ACT: Full ACT Mock and Review in ACT?",
          "skillId": "act-prep-101-skill-reading-transfer",
          "options": [
            {
              "id": "a",
              "text": "Run two targeted correction blocks, one mixed timed review cycle, and one retest focused on the same reading objective."
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
          "id": "act-prep-101-l15-q4",
          "text": "In ACT ACT: Full ACT Mock and Review, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "act-prep-101-skill-science-reasoning-priority",
          "options": [
            {
              "id": "a",
              "text": "Tackle the rarest concept gap first for variety."
            },
            {
              "id": "b",
              "text": "Prioritize the repeated science reasoning process issue, then apply the same correction across the next timed block."
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
          "id": "act-prep-101-l15-q5",
          "text": "In ACT English section, rhetorical-purpose confusion appears during ACT: Full ACT Mock and Review. What is the strongest immediate correction?",
          "skillId": "act-prep-101-skill-english-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore English section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Tag sentence purpose before evaluating revision options."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes rhetorical-purpose confusion.",
          "explanation": "Immediate correction inside English section improves transfer to the next timed review cycle."
        },
        {
          "id": "act-prep-101-l15-q6",
          "text": "During ACT Science section, data-trend misread repeats in ACT: Full ACT Mock and Review. Which plan should be applied before the next retest?",
          "skillId": "act-prep-101-skill-math-section-application",
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
              "text": "Note variable shift + trend direction before drawing conclusions. Track outcomes in a passage-data decision log and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in passage-data decision log makes the pacing fix visible and repeatable."
        },
        {
          "id": "act-prep-101-l15-q7",
          "text": "In a full ACT mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "act-prep-101-skill-mock-triage",
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
          "id": "act-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in ACT. What is the best pacing fix?",
          "skillId": "act-prep-101-skill-section-pacing",
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
          "id": "act-prep-101-l15-q9",
          "text": "Before submitting a high-stakes ACT section, which quality-control habit is most reliable?",
          "skillId": "act-prep-101-skill-quality-control",
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
          "id": "act-prep-101-l15-q10",
          "text": "After full-mock review in ACT, which next-step plan yields the best one-week improvement?",
          "skillId": "act-prep-101-skill-remediation-loop",
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
          "id": "act-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "ACT: Full ACT Mock and Review Error Taxonomy Sort",
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
                "label": "Content Gap"
              },
              {
                "id": "strategy",
                "label": "Passage/Data Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Section Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Repeated mistakes on science data interpretation",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Skipped comparison cues in dual-passage reading set",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Ran out of time in final English cluster",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Error fixed in review but not in next timed set",
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
          "id": "act-prep-101-l15-a1",
          "type": "image",
          "title": "English Snapshot",
          "content": "Visual anchor for ACT: Full ACT Mock and Review with emphasis on english within review cycle planning."
        },
        {
          "id": "act-prep-101-l15-a2",
          "type": "animation",
          "title": "Math Walkthrough",
          "content": "Stepwise walkthrough for ACT: Full ACT Mock and Review showing math decisions and error taxonomy checks."
        }
      ]
    }
  ],
};
