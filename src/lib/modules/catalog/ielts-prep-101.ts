import type { LearningModule } from "@/lib/modules/types";

export const IeltsPrep101Module: LearningModule = {
  id: "ielts-prep-101",
  title: "IELTS Prep Foundations",
  description: "Develop IELTS Academic performance across listening, reading, writing, and speaking.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 24,
  version: "2.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured IELTS readiness workflows",
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
      id: "ielts-prep-101-l01",
      title: "IELTS: IELTS Band Descriptors and Targets",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ielts-prep-101-l01-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: IELTS Band Descriptors and Targets with emphasis on task response within practice set planning."
        },
        {
          "id": "ielts-prep-101-l01-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: IELTS Band Descriptors and Targets showing coherence decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l02",
      title: "IELTS: Listening Section Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one task response decision rule in IELTS: Listening Section Strategy.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for coherence before your next IELTS readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "IELTS: Listening Section Strategy Decision-Phase Mapping",
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
                "label": "Band Plan"
              },
              {
                "id": "execute",
                "label": "Task Execution"
              },
              {
                "id": "reflect",
                "label": "Descriptor Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set IELTS band target by criterion before each practice block",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure writing around task response, coherence, and lexical control",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score output using band descriptors and log weakest criterion",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ielts-prep-101-l02-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Listening Section Strategy with emphasis on task response within passage set planning."
        },
        {
          "id": "ielts-prep-101-l02-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Listening Section Strategy showing coherence decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l03",
      title: "IELTS: Academic Reading Passage Tactics",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ielts-prep-101-l03-q1",
          "text": "In IELTS: Academic Reading Passage Tactics, a learner keeps missing task response items during IELTS practice. Which adjustment should happen before the next timed passage set?",
          "skillId": "ielts-prep-101-skill-task-response-workflow",
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
              "text": "Run a short task response checkpoint routine and annotate why each miss occurred in an annotation map before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if task response is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for task response.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve task response."
        },
        {
          "id": "ielts-prep-101-l03-q2",
          "text": "A IELTS IELTS: Academic Reading Passage Tactics session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ielts-prep-101-skill-coherence-diagnosis",
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
              "text": "Locate the exact coherence decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "ielts-prep-101-l03-q3",
          "text": "IELTS practice shows correction is happening but not sticking in IELTS: Academic Reading Passage Tactics. What plan fixes this fastest?",
          "skillId": "ielts-prep-101-skill-lexical-resource-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected lexical resource error with a near-transfer item in the next timed block and track it in an annotation map."
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
          "id": "ielts-prep-101-l03-q4",
          "text": "During post-drill review for IELTS: Academic Reading Passage Tactics, which fix should be prioritized first for score impact in IELTS?",
          "skillId": "ielts-prep-101-skill-fluency-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated fluency and pacing errors first because they affect many questions in one run."
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
          "id": "ielts-prep-101-l03-q5",
          "text": "In IELTS Writing Task 1/2 block, task-response drift appears during IELTS: Academic Reading Passage Tactics. What is the strongest immediate correction?",
          "skillId": "ielts-prep-101-skill-task-response-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Writing Task 1/2 block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Write thesis and paragraph map before drafting."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes task-response drift.",
          "explanation": "Immediate correction inside Writing Task 1/2 block improves transfer to the next timed passage set."
        },
        {
          "id": "ielts-prep-101-l03-q6",
          "text": "During IELTS Speaking Part 2/3 block, criterion imbalance repeats in IELTS: Academic Reading Passage Tactics. Which plan should be applied before the next retest?",
          "skillId": "ielts-prep-101-skill-coherence-section-application",
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
              "text": "Balance fluency, lexical range, and coherence checks per response. Track outcomes in a band-descriptor action grid and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in band-descriptor action grid makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "IELTS: Academic Reading Passage Tactics Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for evidence and language precision.",
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
                "label": "Task 2 response drifts from prompt position"
              },
              {
                "id": "l2",
                "label": "Speaking answer fluent but lacks depth in Part 3"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops on True/False/Not Given"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write one-sentence thesis and topic map before drafting"
              },
              {
                "id": "r2",
                "label": "Add reason-example-extension pattern for every Part 3 answer"
              },
              {
                "id": "r3",
                "label": "Track evidence sentence before assigning T/F/NG judgement"
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
          "id": "ielts-prep-101-l03-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Academic Reading Passage Tactics with emphasis on task response within passage set planning."
        },
        {
          "id": "ielts-prep-101-l03-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Academic Reading Passage Tactics showing coherence decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l04",
      title: "IELTS: Writing Task 1 Visual Analysis",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one task response decision rule in IELTS: Writing Task 1 Visual Analysis.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for coherence before your next IELTS readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "IELTS: Writing Task 1 Visual Analysis Decision-Phase Mapping",
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
                "label": "Band Plan"
              },
              {
                "id": "execute",
                "label": "Task Execution"
              },
              {
                "id": "reflect",
                "label": "Descriptor Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set IELTS band target by criterion before each practice block",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure writing around task response, coherence, and lexical control",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score output using band descriptors and log weakest criterion",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ielts-prep-101-l04-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Writing Task 1 Visual Analysis with emphasis on task response within passage set planning."
        },
        {
          "id": "ielts-prep-101-l04-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Writing Task 1 Visual Analysis showing coherence decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l05",
      title: "IELTS: Writing Task 2 Argument Strategy",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ielts-prep-101-l05-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Writing Task 2 Argument Strategy with emphasis on task response within passage set planning."
        },
        {
          "id": "ielts-prep-101-l05-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Writing Task 2 Argument Strategy showing coherence decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l06",
      title: "IELTS: Speaking Part 1 and 2 Fluency",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ielts-prep-101-l06-q1",
          "text": "IELTS coaching notes show repeated fluency misses in IELTS: Speaking Part 1 and 2 Fluency. What should the learner do before the next passage set?",
          "skillId": "ielts-prep-101-skill-fluency-workflow",
          "options": [
            {
              "id": "a",
              "text": "Jump to harder content before confirming the root cause."
            },
            {
              "id": "b",
              "text": "Rebuild the solve workflow on two representative passage set items, then retest with the same constraints."
            },
            {
              "id": "c",
              "text": "Track only final score and ignore process notes."
            },
            {
              "id": "d",
              "text": "Switch strands even though fluency is still the top weakness."
            }
          ],
          "correctOptionId": "b",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When fluency is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "ielts-prep-101-l06-q2",
          "text": "In IELTS: Speaking Part 1 and 2 Fluency, pace drops late even when early accuracy is strong. Which move best addresses this IELTS pattern?",
          "skillId": "ielts-prep-101-skill-task-response-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction task response items."
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
          "id": "ielts-prep-101-l06-q3",
          "text": "Which one-week plan best improves coherence transfer for IELTS readiness in IELTS?",
          "skillId": "ielts-prep-101-skill-coherence-transfer",
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
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same coherence objective under timing constraints."
            }
          ],
          "correctOptionId": "d",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same coherence target."
        },
        {
          "id": "ielts-prep-101-l06-q4",
          "text": "After a IELTS: Speaking Part 1 and 2 Fluency drill, which remediation should be prioritized first for score impact in IELTS?",
          "skillId": "ielts-prep-101-skill-lexical-resource-priority",
          "options": [
            {
              "id": "a",
              "text": "Fix repeated lexical resource breakdowns first because they scale across many items in the same run."
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
          "id": "ielts-prep-101-l06-q5",
          "text": "In IELTS Writing Task 1/2 block, task-response drift appears during IELTS: Speaking Part 1 and 2 Fluency. What is the strongest immediate correction?",
          "skillId": "ielts-prep-101-skill-fluency-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Writing Task 1/2 block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Write thesis and paragraph map before drafting."
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
          "hint": "Choose the option that directly fixes task-response drift.",
          "explanation": "Immediate correction inside Writing Task 1/2 block improves transfer to the next timed passage set."
        },
        {
          "id": "ielts-prep-101-l06-q6",
          "text": "During IELTS Speaking Part 2/3 block, criterion imbalance repeats in IELTS: Speaking Part 1 and 2 Fluency. Which plan should be applied before the next retest?",
          "skillId": "ielts-prep-101-skill-task-response-section-application",
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
              "text": "Balance fluency, lexical range, and coherence checks per response. Track outcomes in a band-descriptor action grid and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in band-descriptor action grid makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "IELTS: Speaking Part 1 and 2 Fluency Correction Alignment",
          "description": "Align each recurring signal with the strongest correction action for evidence and language precision.",
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
                "label": "Task 2 response drifts from prompt position"
              },
              {
                "id": "l2",
                "label": "Speaking answer fluent but lacks depth in Part 3"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops on True/False/Not Given"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write one-sentence thesis and topic map before drafting"
              },
              {
                "id": "r2",
                "label": "Add reason-example-extension pattern for every Part 3 answer"
              },
              {
                "id": "r3",
                "label": "Track evidence sentence before assigning T/F/NG judgement"
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
          "id": "ielts-prep-101-l06-a1",
          "type": "image",
          "title": "Fluency Snapshot",
          "content": "Visual anchor for IELTS: Speaking Part 1 and 2 Fluency with emphasis on fluency within passage set planning."
        },
        {
          "id": "ielts-prep-101-l06-a2",
          "type": "animation",
          "title": "Task Response Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Speaking Part 1 and 2 Fluency showing task response decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l07",
      title: "IELTS: Speaking Part 3 Depth and Logic",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ielts-prep-101-l07-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Speaking Part 3 Depth and Logic with emphasis on task response within passage set planning."
        },
        {
          "id": "ielts-prep-101-l07-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Speaking Part 3 Depth and Logic showing coherence decisions and annotation map checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l08",
      title: "IELTS: Error Patterns and Band Improvement",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one task response decision rule in IELTS: Error Patterns and Band Improvement.",
          "Apply it in one review cycle and show how it improves root-cause and correction quality.",
          "Set one next-step target for coherence before your next IELTS readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l08-ia1",
          "type": "matching_pairs",
          "title": "IELTS: Error Patterns and Band Improvement Diagnostic Match",
          "description": "Match recurring error signals to the highest-impact correction routine.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Match each error signal.",
            "Verify all pairings.",
            "Use one correction in your next attempt."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Task 2 response drifts from prompt position"
              },
              {
                "id": "l2",
                "label": "Speaking answer fluent but lacks depth in Part 3"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops on True/False/Not Given"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write one-sentence thesis and topic map before drafting"
              },
              {
                "id": "r2",
                "label": "Add reason-example-extension pattern for every Part 3 answer"
              },
              {
                "id": "r3",
                "label": "Track evidence sentence before assigning T/F/NG judgement"
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
      learningAids: [
        {
          "id": "ielts-prep-101-l08-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Error Patterns and Band Improvement with emphasis on task response within review cycle planning."
        },
        {
          "id": "ielts-prep-101-l08-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Error Patterns and Band Improvement showing coherence decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l09",
      title: "IELTS: Timed Multi-Skill Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ielts-prep-101-l09-q1",
          "text": "In IELTS: Timed Multi-Skill Drill, a learner keeps missing task response items during IELTS practice. Which adjustment should happen before the next timed timed block?",
          "skillId": "ielts-prep-101-skill-task-response-workflow",
          "options": [
            {
              "id": "a",
              "text": "Run a short task response checkpoint routine and annotate why each miss occurred in a checkpoint log before retesting."
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
              "text": "Switch topics even if task response is still the dominant weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the action that creates a repeatable feedback loop for task response.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve task response."
        },
        {
          "id": "ielts-prep-101-l09-q2",
          "text": "A IELTS IELTS: Timed Multi-Skill Drill session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ielts-prep-101-skill-coherence-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Retake the session immediately without diagnostics."
            },
            {
              "id": "b",
              "text": "Locate the exact coherence decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "ielts-prep-101-l09-q3",
          "text": "IELTS practice shows correction is happening but not sticking in IELTS: Timed Multi-Skill Drill. What plan fixes this fastest?",
          "skillId": "ielts-prep-101-skill-lexical-resource-transfer",
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
              "text": "Pair each corrected lexical resource error with a near-transfer item in the next timed block and track it in a checkpoint log."
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
          "id": "ielts-prep-101-l09-q4",
          "text": "During post-drill review for IELTS: Timed Multi-Skill Drill, which fix should be prioritized first for score impact in IELTS?",
          "skillId": "ielts-prep-101-skill-fluency-priority",
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
              "text": "Address repeated fluency and pacing errors first because they affect many questions in one run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Prioritize changes that influence the largest question set.",
          "explanation": "Highest-impact remediation usually targets repeated timing and process breakdowns before edge-case content gaps."
        },
        {
          "id": "ielts-prep-101-l09-q5",
          "text": "In IELTS Writing Task 1/2 block, task-response drift appears during IELTS: Timed Multi-Skill Drill. What is the strongest immediate correction?",
          "skillId": "ielts-prep-101-skill-task-response-section-application",
          "options": [
            {
              "id": "a",
              "text": "Write thesis and paragraph map before drafting."
            },
            {
              "id": "b",
              "text": "Ignore Writing Task 1/2 block diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes task-response drift.",
          "explanation": "Immediate correction inside Writing Task 1/2 block improves transfer to the next timed timed block."
        },
        {
          "id": "ielts-prep-101-l09-q6",
          "text": "During IELTS Speaking Part 2/3 block, criterion imbalance repeats in IELTS: Timed Multi-Skill Drill. Which plan should be applied before the next retest?",
          "skillId": "ielts-prep-101-skill-coherence-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Balance fluency, lexical range, and coherence checks per response. Track outcomes in a band-descriptor action grid and retest the same pattern."
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
          "explanation": "A logged correction cycle in band-descriptor action grid makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "IELTS: Timed Multi-Skill Drill Pace Control Board",
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
                "label": "Set IELTS band target by criterion before each practice block",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure writing around task response, coherence, and lexical control",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score output using band descriptors and log weakest criterion",
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
          "id": "ielts-prep-101-l09-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Timed Multi-Skill Drill with emphasis on task response within timed block planning."
        },
        {
          "id": "ielts-prep-101-l09-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Timed Multi-Skill Drill showing coherence decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l10",
      title: "IELTS: Targeted Task Response Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one task response decision rule in IELTS: Targeted Task Response Remediation.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for coherence before your next IELTS readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "IELTS: Targeted Task Response Remediation Decision-Phase Mapping",
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
                "label": "Band Plan"
              },
              {
                "id": "execute",
                "label": "Task Execution"
              },
              {
                "id": "reflect",
                "label": "Descriptor Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set IELTS band target by criterion before each practice block",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure writing around task response, coherence, and lexical control",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score output using band descriptors and log weakest criterion",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ielts-prep-101-l10-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Targeted Task Response Remediation with emphasis on task response within practice set planning."
        },
        {
          "id": "ielts-prep-101-l10-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Targeted Task Response Remediation showing coherence decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l11",
      title: "IELTS: Timed Coherence Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ielts-prep-101-l11-a1",
          "type": "image",
          "title": "Coherence Snapshot",
          "content": "Visual anchor for IELTS: Timed Coherence Sprint with emphasis on coherence within timed block planning."
        },
        {
          "id": "ielts-prep-101-l11-a2",
          "type": "animation",
          "title": "Task Response Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Timed Coherence Sprint showing task response decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l12",
      title: "IELTS: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "ielts-prep-101-l12-q1",
          "text": "In IELTS: Mixed-Section Decision Drill, a learner keeps missing task response items during IELTS practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "ielts-prep-101-skill-task-response-workflow",
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
              "text": "Switch topics even if task response is still the dominant weakness."
            },
            {
              "id": "d",
              "text": "Run a short task response checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the action that creates a repeatable feedback loop for task response.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve task response."
        },
        {
          "id": "ielts-prep-101-l12-q2",
          "text": "A IELTS IELTS: Mixed-Section Decision Drill session ends with unstable timing. What should be diagnosed first?",
          "skillId": "ielts-prep-101-skill-coherence-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Locate the exact coherence decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "ielts-prep-101-l12-q3",
          "text": "IELTS practice shows correction is happening but not sticking in IELTS: Mixed-Section Decision Drill. What plan fixes this fastest?",
          "skillId": "ielts-prep-101-skill-lexical-resource-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Pair each corrected lexical resource error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "ielts-prep-101-l12-q4",
          "text": "During post-drill review for IELTS: Mixed-Section Decision Drill, which fix should be prioritized first for score impact in IELTS?",
          "skillId": "ielts-prep-101-skill-fluency-priority",
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
              "text": "Address repeated fluency and pacing errors first because they affect many questions in one run."
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
          "id": "ielts-prep-101-l12-q5",
          "text": "In IELTS Writing Task 1/2 block, task-response drift appears during IELTS: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "ielts-prep-101-skill-task-response-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Writing Task 1/2 block diagnostics and continue for volume."
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
              "text": "Write thesis and paragraph map before drafting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes task-response drift.",
          "explanation": "Immediate correction inside Writing Task 1/2 block improves transfer to the next timed practice set."
        },
        {
          "id": "ielts-prep-101-l12-q6",
          "text": "During IELTS Speaking Part 2/3 block, criterion imbalance repeats in IELTS: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "ielts-prep-101-skill-coherence-section-application",
          "options": [
            {
              "id": "a",
              "text": "Balance fluency, lexical range, and coherence checks per response. Track outcomes in a band-descriptor action grid and retest the same pattern."
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
          "explanation": "A logged correction cycle in band-descriptor action grid makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "IELTS: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Task 2 response drifts from prompt position"
              },
              {
                "id": "l2",
                "label": "Speaking answer fluent but lacks depth in Part 3"
              },
              {
                "id": "l3",
                "label": "Reading accuracy drops on True/False/Not Given"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Write one-sentence thesis and topic map before drafting"
              },
              {
                "id": "r2",
                "label": "Add reason-example-extension pattern for every Part 3 answer"
              },
              {
                "id": "r3",
                "label": "Track evidence sentence before assigning T/F/NG judgement"
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
          "id": "ielts-prep-101-l12-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Mixed-Section Decision Drill with emphasis on task response within practice set planning."
        },
        {
          "id": "ielts-prep-101-l12-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Mixed-Section Decision Drill showing coherence decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l13",
      title: "IELTS: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "ielts-prep-101-l13-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Adaptive Retry and Transfer Check with emphasis on task response within practice set planning."
        },
        {
          "id": "ielts-prep-101-l13-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Adaptive Retry and Transfer Check showing coherence decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l14",
      title: "IELTS: Ielts Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one task response decision rule in IELTS: Ielts Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for coherence before your next IELTS readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "ielts-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "IELTS: Ielts Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Band Plan"
              },
              {
                "id": "execute",
                "label": "Task Execution"
              },
              {
                "id": "reflect",
                "label": "Descriptor Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set IELTS band target by criterion before each practice block",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Structure writing around task response, coherence, and lexical control",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Score output using band descriptors and log weakest criterion",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "ielts-prep-101-l14-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Ielts Readiness Stability Checkpoint with emphasis on task response within practice set planning."
        },
        {
          "id": "ielts-prep-101-l14-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Ielts Readiness Stability Checkpoint showing coherence decisions and strategy log checks."
        }
      ]
    },
    {
      id: "ielts-prep-101-l15",
      title: "IELTS: Full IELTS Mock and Improvement Plan",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "ielts-prep-101-l15-q1",
          "text": "IELTS coaching notes show repeated task response misses in IELTS: Full IELTS Mock and Improvement Plan. What should the learner do before the next section simulation?",
          "skillId": "ielts-prep-101-skill-task-response-workflow",
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
              "text": "Rebuild the solve workflow on two representative section simulation items, then retest with the same constraints."
            },
            {
              "id": "d",
              "text": "Switch strands even though task response is still the top weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When task response is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "ielts-prep-101-l15-q2",
          "text": "In IELTS: Full IELTS Mock and Improvement Plan, pace drops late even when early accuracy is strong. Which move best addresses this IELTS pattern?",
          "skillId": "ielts-prep-101-skill-coherence-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction coherence items."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "ielts-prep-101-l15-q3",
          "text": "Which one-week plan best improves lexical resource transfer for IELTS readiness in IELTS?",
          "skillId": "ielts-prep-101-skill-lexical-resource-transfer",
          "options": [
            {
              "id": "a",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same lexical resource objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same lexical resource target."
        },
        {
          "id": "ielts-prep-101-l15-q4",
          "text": "After a IELTS: Full IELTS Mock and Improvement Plan drill, which remediation should be prioritized first for score impact in IELTS?",
          "skillId": "ielts-prep-101-skill-fluency-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Fix repeated fluency breakdowns first because they scale across many items in the same run."
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
          "id": "ielts-prep-101-l15-q5",
          "text": "In IELTS Writing Task 1/2 block, task-response drift appears during IELTS: Full IELTS Mock and Improvement Plan. What is the strongest immediate correction?",
          "skillId": "ielts-prep-101-skill-task-response-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore Writing Task 1/2 block diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Write thesis and paragraph map before drafting."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes task-response drift.",
          "explanation": "Immediate correction inside Writing Task 1/2 block improves transfer to the next timed section simulation."
        },
        {
          "id": "ielts-prep-101-l15-q6",
          "text": "During IELTS Speaking Part 2/3 block, criterion imbalance repeats in IELTS: Full IELTS Mock and Improvement Plan. Which plan should be applied before the next retest?",
          "skillId": "ielts-prep-101-skill-coherence-section-application",
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
              "text": "Balance fluency, lexical range, and coherence checks per response. Track outcomes in a band-descriptor action grid and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in band-descriptor action grid makes the pacing fix visible and repeatable."
        },
        {
          "id": "ielts-prep-101-l15-q7",
          "text": "In a full IELTS mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "ielts-prep-101-skill-mock-triage",
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
          "id": "ielts-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in IELTS. What is the best pacing fix?",
          "skillId": "ielts-prep-101-skill-section-pacing",
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
          "id": "ielts-prep-101-l15-q9",
          "text": "Before submitting a high-stakes IELTS section, which quality-control habit is most reliable?",
          "skillId": "ielts-prep-101-skill-quality-control",
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
          "id": "ielts-prep-101-l15-q10",
          "text": "After full-mock review in IELTS, which next-step plan yields the best one-week improvement?",
          "skillId": "ielts-prep-101-skill-remediation-loop",
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
          "id": "ielts-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "IELTS: Full IELTS Mock and Improvement Plan Error Taxonomy Sort",
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
                "label": "Criterion Language Gap"
              },
              {
                "id": "strategy",
                "label": "Task Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Band Stability Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Lexical repetition lowers band potential",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Task achievement weakened by missing data comparison",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Writing Task 2 consumed too much section time",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Band feedback logged but not reflected in next draft",
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
          "id": "ielts-prep-101-l15-a1",
          "type": "image",
          "title": "Task Response Snapshot",
          "content": "Visual anchor for IELTS: Full IELTS Mock and Improvement Plan with emphasis on task response within section simulation planning."
        },
        {
          "id": "ielts-prep-101-l15-a2",
          "type": "animation",
          "title": "Coherence Walkthrough",
          "content": "Stepwise walkthrough for IELTS: Full IELTS Mock and Improvement Plan showing coherence decisions and attempt-order sheet checks."
        }
      ]
    }
  ],
};
