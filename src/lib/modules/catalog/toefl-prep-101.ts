import type { LearningModule } from "@/lib/modules/types";

export const ToeflPrep101Module: LearningModule = {
  id: "toefl-prep-101",
  title: "TOEFL iBT Prep Foundations",
  description: "Prepare for TOEFL reading, listening, speaking, and writing with timed skill routines.",
  subject: "Exam Prep",
  tags: ["exam-prep", "assessment", "advanced"],
  minAge: 14,
  maxAge: 24,
  version: "1.0.0",
  difficultyBand: "advanced",
  localeSupport: ["en", "es", "fr", "de", "ar", "hi", "zh", "ja", "ko", "ru"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Build structured TOEFL readiness workflows",
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
      id: "toefl-prep-101-l01",
      title: "TOEFL: TOEFL Format and Score Goals",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "toefl-prep-101-l01-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: TOEFL Format and Score Goals with emphasis on reading within practice set planning."
        },
        {
          "id": "toefl-prep-101-l01-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: TOEFL Format and Score Goals showing listening decisions and strategy log checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l02",
      title: "TOEFL: Academic Reading Strategy",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in TOEFL: Academic Reading Strategy.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for listening before your next TOEFL readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l02-ia1",
          "type": "drag_and_drop",
          "title": "TOEFL: Academic Reading Strategy Decision-Phase Mapping",
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
                "label": "Task Plan"
              },
              {
                "id": "execute",
                "label": "Language Execution"
              },
              {
                "id": "reflect",
                "label": "Score Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set target score goals per TOEFL section before each session",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use note-taking template for lecture/listening integration tasks",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit speaking/writing responses against scoring rubric descriptors",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "toefl-prep-101-l02-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Academic Reading Strategy with emphasis on reading within passage set planning."
        },
        {
          "id": "toefl-prep-101-l02-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Academic Reading Strategy showing listening decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l03",
      title: "TOEFL: Listening for Main Ideas and Detail",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "toefl-prep-101-l03-q1",
          "text": "In TOEFL: Listening for Main Ideas and Detail, a learner keeps missing listening items during TOEFL practice. Which adjustment should happen before the next timed passage set?",
          "skillId": "toefl-prep-101-skill-listening-workflow",
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
              "text": "Run a short listening checkpoint routine and annotate why each miss occurred in an annotation map before retesting."
            },
            {
              "id": "d",
              "text": "Switch topics even if listening is still the dominant weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the action that creates a repeatable feedback loop for listening.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve listening."
        },
        {
          "id": "toefl-prep-101-l03-q2",
          "text": "A TOEFL TOEFL: Listening for Main Ideas and Detail session ends with unstable timing. What should be diagnosed first?",
          "skillId": "toefl-prep-101-skill-reading-diagnosis",
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
              "text": "Locate the exact reading decision point where time spikes, then set micro-checkpoints for that phase."
            }
          ],
          "correctOptionId": "d",
          "hint": "Find the answer that isolates a measurable bottleneck.",
          "explanation": "Pacing stabilizes when the highest-cost decision point is measured and corrected directly."
        },
        {
          "id": "toefl-prep-101-l03-q3",
          "text": "TOEFL practice shows correction is happening but not sticking in TOEFL: Listening for Main Ideas and Detail. What plan fixes this fastest?",
          "skillId": "toefl-prep-101-skill-speaking-transfer",
          "options": [
            {
              "id": "a",
              "text": "Pair each corrected speaking error with a near-transfer item in the next timed block and track it in an annotation map."
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
          "id": "toefl-prep-101-l03-q4",
          "text": "During post-drill review for TOEFL: Listening for Main Ideas and Detail, which fix should be prioritized first for score impact in TOEFL?",
          "skillId": "toefl-prep-101-skill-writing-priority",
          "options": [
            {
              "id": "a",
              "text": "Polish already-mastered question types first."
            },
            {
              "id": "b",
              "text": "Address repeated writing and pacing errors first because they affect many questions in one run."
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
          "id": "toefl-prep-101-l03-q5",
          "text": "In TOEFL integrated task section, source-listening disconnect appears during TOEFL: Listening for Main Ideas and Detail. What is the strongest immediate correction?",
          "skillId": "toefl-prep-101-skill-listening-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore integrated task section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Link each claim to one reading cue and one listening cue."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes source-listening disconnect.",
          "explanation": "Immediate correction inside integrated task section improves transfer to the next timed passage set."
        },
        {
          "id": "toefl-prep-101-l03-q6",
          "text": "During TOEFL independent task section, support-depth gap repeats in TOEFL: Listening for Main Ideas and Detail. Which plan should be applied before the next retest?",
          "skillId": "toefl-prep-101-skill-reading-section-application",
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
              "text": "Use reason-example-extension structure for each main point. Track outcomes in a note-to-response mapping sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in note-to-response mapping sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l03-ia1",
          "type": "matching_pairs",
          "title": "TOEFL: Listening for Main Ideas and Detail Correction Alignment",
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
                "label": "Integrated writing misses source-listening linkage"
              },
              {
                "id": "l2",
                "label": "Speaking response is fluent but underdeveloped"
              },
              {
                "id": "l3",
                "label": "Listening detail questions missed after long passage"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Map reading claim to listening contrast before drafting response"
              },
              {
                "id": "r2",
                "label": "Use 2-point support structure with example before closing"
              },
              {
                "id": "r3",
                "label": "Capture main idea + transition cues in compact notes"
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
          "id": "toefl-prep-101-l03-a1",
          "type": "image",
          "title": "Listening Snapshot",
          "content": "Visual anchor for TOEFL: Listening for Main Ideas and Detail with emphasis on listening within passage set planning."
        },
        {
          "id": "toefl-prep-101-l03-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Listening for Main Ideas and Detail showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l04",
      title: "TOEFL: Integrated Speaking Frameworks",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one speaking decision rule in TOEFL: Integrated Speaking Frameworks.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for reading before your next TOEFL readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l04-ia1",
          "type": "drag_and_drop",
          "title": "TOEFL: Integrated Speaking Frameworks Decision-Phase Mapping",
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
                "label": "Task Plan"
              },
              {
                "id": "execute",
                "label": "Language Execution"
              },
              {
                "id": "reflect",
                "label": "Score Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set target score goals per TOEFL section before each session",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use note-taking template for lecture/listening integration tasks",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit speaking/writing responses against scoring rubric descriptors",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "toefl-prep-101-l04-a1",
          "type": "image",
          "title": "Speaking Snapshot",
          "content": "Visual anchor for TOEFL: Integrated Speaking Frameworks with emphasis on speaking within passage set planning."
        },
        {
          "id": "toefl-prep-101-l04-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Integrated Speaking Frameworks showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l05",
      title: "TOEFL: Independent Speaking Clarity",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "toefl-prep-101-l05-a1",
          "type": "image",
          "title": "Speaking Snapshot",
          "content": "Visual anchor for TOEFL: Independent Speaking Clarity with emphasis on speaking within passage set planning."
        },
        {
          "id": "toefl-prep-101-l05-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Independent Speaking Clarity showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l06",
      title: "TOEFL: Integrated Writing Structure",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "toefl-prep-101-l06-q1",
          "text": "During TOEFL: Integrated Writing Structure, early guesses are causing writing losses. Which intervention should happen first?",
          "skillId": "toefl-prep-101-skill-writing-workflow",
          "options": [
            {
              "id": "a",
              "text": "Keep the same pace and hope accuracy normalizes later."
            },
            {
              "id": "b",
              "text": "Use a short verification pass and log decision triggers in an annotation map before restarting the drill."
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
          "id": "toefl-prep-101-l06-q2",
          "text": "A TOEFL drill on TOEFL: Integrated Writing Structure ends with unstable pacing. What should be diagnosed first?",
          "skillId": "toefl-prep-101-skill-reading-diagnosis",
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
              "text": "Pinpoint where reading decisions consume extra time, then redesign attempt order with checkpoints."
            },
            {
              "id": "d",
              "text": "Increase question volume while keeping the same pacing errors."
            }
          ],
          "correctOptionId": "c",
          "hint": "Look for the answer that isolates a measurable timing bottleneck.",
          "explanation": "Pacing issues usually come from specific reading decision points, not from total question count alone."
        },
        {
          "id": "toefl-prep-101-l06-q3",
          "text": "Which one-week sprint most improves listening transfer for TOEFL: Integrated Writing Structure in TOEFL?",
          "skillId": "toefl-prep-101-skill-listening-transfer",
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
              "text": "Run two targeted correction blocks, one mixed timed passage set, and one retest focused on the same listening objective."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine remediation and timed validation.",
          "explanation": "Transfer improves when learners re-encounter corrected skills under realistic constraints."
        },
        {
          "id": "toefl-prep-101-l06-q4",
          "text": "In TOEFL TOEFL: Integrated Writing Structure, there are both content misses and pacing slips. What should the learner fix first?",
          "skillId": "toefl-prep-101-skill-speaking-priority",
          "options": [
            {
              "id": "a",
              "text": "Prioritize the repeated speaking process issue, then apply the same correction across the next timed block."
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
          "id": "toefl-prep-101-l06-q5",
          "text": "In TOEFL integrated task section, source-listening disconnect appears during TOEFL: Integrated Writing Structure. What is the strongest immediate correction?",
          "skillId": "toefl-prep-101-skill-writing-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore integrated task section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Link each claim to one reading cue and one listening cue."
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
          "hint": "Choose the option that directly fixes source-listening disconnect.",
          "explanation": "Immediate correction inside integrated task section improves transfer to the next timed passage set."
        },
        {
          "id": "toefl-prep-101-l06-q6",
          "text": "During TOEFL independent task section, support-depth gap repeats in TOEFL: Integrated Writing Structure. Which plan should be applied before the next retest?",
          "skillId": "toefl-prep-101-skill-reading-section-application",
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
              "text": "Use reason-example-extension structure for each main point. Track outcomes in a note-to-response mapping sheet and retest the same pattern."
            },
            {
              "id": "d",
              "text": "Retake the section with no checkpoint changes."
            }
          ],
          "correctOptionId": "c",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in note-to-response mapping sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l06-ia1",
          "type": "matching_pairs",
          "title": "TOEFL: Integrated Writing Structure Correction Alignment",
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
                "label": "Integrated writing misses source-listening linkage"
              },
              {
                "id": "l2",
                "label": "Speaking response is fluent but underdeveloped"
              },
              {
                "id": "l3",
                "label": "Listening detail questions missed after long passage"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Map reading claim to listening contrast before drafting response"
              },
              {
                "id": "r2",
                "label": "Use 2-point support structure with example before closing"
              },
              {
                "id": "r3",
                "label": "Capture main idea + transition cues in compact notes"
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
          "id": "toefl-prep-101-l06-a1",
          "type": "image",
          "title": "Writing Snapshot",
          "content": "Visual anchor for TOEFL: Integrated Writing Structure with emphasis on writing within passage set planning."
        },
        {
          "id": "toefl-prep-101-l06-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Integrated Writing Structure showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l07",
      title: "TOEFL: Independent Writing Organization",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "toefl-prep-101-l07-a1",
          "type": "image",
          "title": "Writing Snapshot",
          "content": "Visual anchor for TOEFL: Independent Writing Organization with emphasis on writing within passage set planning."
        },
        {
          "id": "toefl-prep-101-l07-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Independent Writing Organization showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l08",
      title: "TOEFL: Timing and Note-Taking Systems",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in TOEFL: Timing and Note-Taking Systems.",
          "Apply it in one timed block and show how it improves pace and decision stability.",
          "Set one next-step target for listening before your next TOEFL readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "TOEFL: Timing and Note-Taking Systems Time-Checkpoint Sort",
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
                "label": "Set target score goals per TOEFL section before each session",
                "correctBucketId": "before_timer"
              },
              {
                "id": "i2",
                "label": "Use note-taking template for lecture/listening integration tasks",
                "correctBucketId": "in_section"
              },
              {
                "id": "i3",
                "label": "Audit speaking/writing responses against scoring rubric descriptors",
                "correctBucketId": "recovery"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "toefl-prep-101-l08-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Timing and Note-Taking Systems with emphasis on reading within timed block planning."
        },
        {
          "id": "toefl-prep-101-l08-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Timing and Note-Taking Systems showing listening decisions and checkpoint log checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l09",
      title: "TOEFL: Full Section Drill and Review",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "toefl-prep-101-l09-q1",
          "text": "TOEFL coaching notes show repeated reading misses in TOEFL: Full Section Drill and Review. What should the learner do before the next review cycle?",
          "skillId": "toefl-prep-101-skill-reading-workflow",
          "options": [
            {
              "id": "a",
              "text": "Rebuild the solve workflow on two representative review cycle items, then retest with the same constraints."
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
              "text": "Switch strands even though reading is still the top weakness."
            }
          ],
          "correctOptionId": "a",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When reading is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "toefl-prep-101-l09-q2",
          "text": "In TOEFL: Full Section Drill and Review, pace drops late even when early accuracy is strong. Which move best addresses this TOEFL pattern?",
          "skillId": "toefl-prep-101-skill-listening-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Spend more time on every item to avoid mistakes."
            },
            {
              "id": "b",
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction listening items."
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
          "id": "toefl-prep-101-l09-q3",
          "text": "Which one-week plan best improves speaking transfer for TOEFL readiness in TOEFL?",
          "skillId": "toefl-prep-101-skill-speaking-transfer",
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
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same speaking objective under timing constraints."
            },
            {
              "id": "d",
              "text": "Delay all review tasks until the final week."
            }
          ],
          "correctOptionId": "c",
          "hint": "The strongest plan combines correction and timed transfer.",
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same speaking target."
        },
        {
          "id": "toefl-prep-101-l09-q4",
          "text": "After a TOEFL: Full Section Drill and Review drill, which remediation should be prioritized first for score impact in TOEFL?",
          "skillId": "toefl-prep-101-skill-writing-priority",
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
              "text": "Fix repeated writing breakdowns first because they scale across many items in the same run."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the fix with the widest downstream effect.",
          "explanation": "High-frequency process breakdowns usually produce the largest immediate score delta when corrected first."
        },
        {
          "id": "toefl-prep-101-l09-q5",
          "text": "In TOEFL integrated task section, source-listening disconnect appears during TOEFL: Full Section Drill and Review. What is the strongest immediate correction?",
          "skillId": "toefl-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Link each claim to one reading cue and one listening cue."
            },
            {
              "id": "b",
              "text": "Ignore integrated task section diagnostics and continue for volume."
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
          "hint": "Choose the option that directly fixes source-listening disconnect.",
          "explanation": "Immediate correction inside integrated task section improves transfer to the next timed review cycle."
        },
        {
          "id": "toefl-prep-101-l09-q6",
          "text": "During TOEFL independent task section, support-depth gap repeats in TOEFL: Full Section Drill and Review. Which plan should be applied before the next retest?",
          "skillId": "toefl-prep-101-skill-listening-section-application",
          "options": [
            {
              "id": "a",
              "text": "Switch to new content before validating the fix."
            },
            {
              "id": "b",
              "text": "Use reason-example-extension structure for each main point. Track outcomes in a note-to-response mapping sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in note-to-response mapping sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l09-ia1",
          "type": "matching_pairs",
          "title": "TOEFL: Full Section Drill and Review Root-Cause Match",
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
                "label": "Integrated writing misses source-listening linkage"
              },
              {
                "id": "l2",
                "label": "Speaking response is fluent but underdeveloped"
              },
              {
                "id": "l3",
                "label": "Listening detail questions missed after long passage"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Map reading claim to listening contrast before drafting response"
              },
              {
                "id": "r2",
                "label": "Use 2-point support structure with example before closing"
              },
              {
                "id": "r3",
                "label": "Capture main idea + transition cues in compact notes"
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
          "id": "toefl-prep-101-l09-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Full Section Drill and Review with emphasis on reading within review cycle planning."
        },
        {
          "id": "toefl-prep-101-l09-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Full Section Drill and Review showing listening decisions and error taxonomy checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l10",
      title: "TOEFL: Targeted Reading Remediation",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in TOEFL: Targeted Reading Remediation.",
          "Apply it in one passage set and show how it improves evidence and language precision.",
          "Set one next-step target for listening before your next TOEFL readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l10-ia1",
          "type": "drag_and_drop",
          "title": "TOEFL: Targeted Reading Remediation Decision-Phase Mapping",
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
                "label": "Task Plan"
              },
              {
                "id": "execute",
                "label": "Language Execution"
              },
              {
                "id": "reflect",
                "label": "Score Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set target score goals per TOEFL section before each session",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use note-taking template for lecture/listening integration tasks",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit speaking/writing responses against scoring rubric descriptors",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "toefl-prep-101-l10-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Targeted Reading Remediation with emphasis on reading within passage set planning."
        },
        {
          "id": "toefl-prep-101-l10-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Targeted Reading Remediation showing listening decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l11",
      title: "TOEFL: Timed Listening Sprint",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "toefl-prep-101-l11-a1",
          "type": "image",
          "title": "Listening Snapshot",
          "content": "Visual anchor for TOEFL: Timed Listening Sprint with emphasis on listening within passage set planning."
        },
        {
          "id": "toefl-prep-101-l11-a2",
          "type": "animation",
          "title": "Reading Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Timed Listening Sprint showing reading decisions and annotation map checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l12",
      title: "TOEFL: Mixed-Section Decision Drill",
      type: "quiz",
      duration: 12,
      questions: [
        {
          "id": "toefl-prep-101-l12-q1",
          "text": "In TOEFL: Mixed-Section Decision Drill, a learner keeps missing reading items during TOEFL practice. Which adjustment should happen before the next timed practice set?",
          "skillId": "toefl-prep-101-skill-reading-workflow",
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
              "text": "Switch topics even if reading is still the dominant weakness."
            },
            {
              "id": "d",
              "text": "Run a short reading checkpoint routine and annotate why each miss occurred in a strategy log before retesting."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the action that creates a repeatable feedback loop for reading.",
          "explanation": "Fast targeted feedback plus immediate correction is the most reliable way to improve reading."
        },
        {
          "id": "toefl-prep-101-l12-q2",
          "text": "A TOEFL TOEFL: Mixed-Section Decision Drill session ends with unstable timing. What should be diagnosed first?",
          "skillId": "toefl-prep-101-skill-listening-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "Locate the exact listening decision point where time spikes, then set micro-checkpoints for that phase."
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
          "id": "toefl-prep-101-l12-q3",
          "text": "TOEFL practice shows correction is happening but not sticking in TOEFL: Mixed-Section Decision Drill. What plan fixes this fastest?",
          "skillId": "toefl-prep-101-skill-speaking-transfer",
          "options": [
            {
              "id": "a",
              "text": "Keep reviewing notes and avoid new timed attempts."
            },
            {
              "id": "b",
              "text": "Pair each corrected speaking error with a near-transfer item in the next timed block and track it in a strategy log."
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
          "id": "toefl-prep-101-l12-q4",
          "text": "During post-drill review for TOEFL: Mixed-Section Decision Drill, which fix should be prioritized first for score impact in TOEFL?",
          "skillId": "toefl-prep-101-skill-writing-priority",
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
              "text": "Address repeated writing and pacing errors first because they affect many questions in one run."
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
          "id": "toefl-prep-101-l12-q5",
          "text": "In TOEFL integrated task section, source-listening disconnect appears during TOEFL: Mixed-Section Decision Drill. What is the strongest immediate correction?",
          "skillId": "toefl-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore integrated task section diagnostics and continue for volume."
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
              "text": "Link each claim to one reading cue and one listening cue."
            }
          ],
          "correctOptionId": "d",
          "hint": "Choose the option that directly fixes source-listening disconnect.",
          "explanation": "Immediate correction inside integrated task section improves transfer to the next timed practice set."
        },
        {
          "id": "toefl-prep-101-l12-q6",
          "text": "During TOEFL independent task section, support-depth gap repeats in TOEFL: Mixed-Section Decision Drill. Which plan should be applied before the next retest?",
          "skillId": "toefl-prep-101-skill-listening-section-application",
          "options": [
            {
              "id": "a",
              "text": "Use reason-example-extension structure for each main point. Track outcomes in a note-to-response mapping sheet and retest the same pattern."
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
          "explanation": "A logged correction cycle in note-to-response mapping sheet makes the pacing fix visible and repeatable."
        }
      ],
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l12-ia1",
          "type": "matching_pairs",
          "title": "TOEFL: Mixed-Section Decision Drill Correction Alignment",
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
                "label": "Integrated writing misses source-listening linkage"
              },
              {
                "id": "l2",
                "label": "Speaking response is fluent but underdeveloped"
              },
              {
                "id": "l3",
                "label": "Listening detail questions missed after long passage"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Map reading claim to listening contrast before drafting response"
              },
              {
                "id": "r2",
                "label": "Use 2-point support structure with example before closing"
              },
              {
                "id": "r3",
                "label": "Capture main idea + transition cues in compact notes"
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
          "id": "toefl-prep-101-l12-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Mixed-Section Decision Drill with emphasis on reading within practice set planning."
        },
        {
          "id": "toefl-prep-101-l12-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Mixed-Section Decision Drill showing listening decisions and strategy log checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l13",
      title: "TOEFL: Adaptive Retry and Transfer Check",
      type: "video",
      duration: 11,
      learningAids: [
        {
          "id": "toefl-prep-101-l13-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Adaptive Retry and Transfer Check with emphasis on reading within practice set planning."
        },
        {
          "id": "toefl-prep-101-l13-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Adaptive Retry and Transfer Check showing listening decisions and strategy log checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l14",
      title: "TOEFL: Toefl Readiness Stability Checkpoint",
      type: "interactive",
      duration: 14,
      metadata: {
        prompts: [
          "Identify one reading decision rule in TOEFL: Toefl Readiness Stability Checkpoint.",
          "Apply it in one practice set and show how it improves decision quality under constraints.",
          "Set one next-step target for listening before your next TOEFL readiness session."
        ]
      },
      interactiveActivities: [
        {
          "id": "toefl-prep-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "TOEFL: Toefl Readiness Stability Checkpoint Decision-Phase Mapping",
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
                "label": "Task Plan"
              },
              {
                "id": "execute",
                "label": "Language Execution"
              },
              {
                "id": "reflect",
                "label": "Score Review"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set target score goals per TOEFL section before each session",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Use note-taking template for lecture/listening integration tasks",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Audit speaking/writing responses against scoring rubric descriptors",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      learningAids: [
        {
          "id": "toefl-prep-101-l14-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Toefl Readiness Stability Checkpoint with emphasis on reading within practice set planning."
        },
        {
          "id": "toefl-prep-101-l14-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Toefl Readiness Stability Checkpoint showing listening decisions and strategy log checks."
        }
      ]
    },
    {
      id: "toefl-prep-101-l15",
      title: "TOEFL: Mock TOEFL and Gap Closure Plan",
      type: "quiz",
      duration: 20,
      questions: [
        {
          "id": "toefl-prep-101-l15-q1",
          "text": "TOEFL coaching notes show repeated reading misses in TOEFL: Mock TOEFL and Gap Closure Plan. What should the learner do before the next section simulation?",
          "skillId": "toefl-prep-101-skill-reading-workflow",
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
              "text": "Switch strands even though reading is still the top weakness."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that improves process quality, not just volume.",
          "explanation": "When reading is unstable, workflow repair plus immediate retest creates the fastest reliable gains."
        },
        {
          "id": "toefl-prep-101-l15-q2",
          "text": "In TOEFL: Mock TOEFL and Gap Closure Plan, pace drops late even when early accuracy is strong. Which move best addresses this TOEFL pattern?",
          "skillId": "toefl-prep-101-skill-listening-diagnosis",
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
              "text": "Introduce phase checkpoints and a cut-loss rule around high-friction listening items."
            }
          ],
          "correctOptionId": "d",
          "hint": "Look for a solution tied to timing behavior, not memory.",
          "explanation": "Late-section drift usually comes from unmanaged friction points, not lack of content knowledge."
        },
        {
          "id": "toefl-prep-101-l15-q3",
          "text": "Which one-week plan best improves speaking transfer for TOEFL readiness in TOEFL?",
          "skillId": "toefl-prep-101-skill-speaking-transfer",
          "options": [
            {
              "id": "a",
              "text": "Alternate mixed-difficulty sets with targeted remediation, then re-test the same speaking objective under timing constraints."
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
          "explanation": "Transfer improves when correction cycles are followed by fresh timed retrieval of the same speaking target."
        },
        {
          "id": "toefl-prep-101-l15-q4",
          "text": "After a TOEFL: Mock TOEFL and Gap Closure Plan drill, which remediation should be prioritized first for score impact in TOEFL?",
          "skillId": "toefl-prep-101-skill-writing-priority",
          "options": [
            {
              "id": "a",
              "text": "Start with already-mastered tasks to build comfort."
            },
            {
              "id": "b",
              "text": "Fix repeated writing breakdowns first because they scale across many items in the same run."
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
          "id": "toefl-prep-101-l15-q5",
          "text": "In TOEFL integrated task section, source-listening disconnect appears during TOEFL: Mock TOEFL and Gap Closure Plan. What is the strongest immediate correction?",
          "skillId": "toefl-prep-101-skill-reading-section-application",
          "options": [
            {
              "id": "a",
              "text": "Ignore integrated task section diagnostics and continue for volume."
            },
            {
              "id": "b",
              "text": "Re-read notes without running a corrected attempt."
            },
            {
              "id": "c",
              "text": "Link each claim to one reading cue and one listening cue."
            },
            {
              "id": "d",
              "text": "Delay correction until after several unrelated drills."
            }
          ],
          "correctOptionId": "c",
          "hint": "Choose the option that directly fixes source-listening disconnect.",
          "explanation": "Immediate correction inside integrated task section improves transfer to the next timed section simulation."
        },
        {
          "id": "toefl-prep-101-l15-q6",
          "text": "During TOEFL independent task section, support-depth gap repeats in TOEFL: Mock TOEFL and Gap Closure Plan. Which plan should be applied before the next retest?",
          "skillId": "toefl-prep-101-skill-listening-section-application",
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
              "text": "Use reason-example-extension structure for each main point. Track outcomes in a note-to-response mapping sheet and retest the same pattern."
            }
          ],
          "correctOptionId": "d",
          "hint": "Best plans combine targeted correction with measurable tracking.",
          "explanation": "A logged correction cycle in note-to-response mapping sheet makes the pacing fix visible and repeatable."
        },
        {
          "id": "toefl-prep-101-l15-q7",
          "text": "In a full TOEFL mock, misses appear across multiple strands. What triage order is strongest?",
          "skillId": "toefl-prep-101-skill-mock-triage",
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
          "id": "toefl-prep-101-l15-q8",
          "text": "A learner finishes one section early but times out on another in TOEFL. What is the best pacing fix?",
          "skillId": "toefl-prep-101-skill-section-pacing",
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
          "id": "toefl-prep-101-l15-q9",
          "text": "Before submitting a high-stakes TOEFL section, which quality-control habit is most reliable?",
          "skillId": "toefl-prep-101-skill-quality-control",
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
          "id": "toefl-prep-101-l15-q10",
          "text": "After full-mock review in TOEFL, which next-step plan yields the best one-week improvement?",
          "skillId": "toefl-prep-101-skill-remediation-loop",
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
          "id": "toefl-prep-101-l15-ia1",
          "type": "sorting_buckets",
          "title": "TOEFL: Mock TOEFL and Gap Closure Plan Error Taxonomy Sort",
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
                "label": "Language Form Gap"
              },
              {
                "id": "strategy",
                "label": "Task Strategy Gap"
              },
              {
                "id": "timing",
                "label": "Section Timing Gap"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Academic vocabulary usage too limited in writing",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Integrated task response omitted listening evidence",
                "correctBucketId": "strategy"
              },
              {
                "id": "i3",
                "label": "Speaking prep time overrun reduced answer quality",
                "correctBucketId": "timing"
              },
              {
                "id": "i4",
                "label": "Correction understood but missing in next timed response",
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
          "id": "toefl-prep-101-l15-a1",
          "type": "image",
          "title": "Reading Snapshot",
          "content": "Visual anchor for TOEFL: Mock TOEFL and Gap Closure Plan with emphasis on reading within section simulation planning."
        },
        {
          "id": "toefl-prep-101-l15-a2",
          "type": "animation",
          "title": "Listening Walkthrough",
          "content": "Stepwise walkthrough for TOEFL: Mock TOEFL and Gap Closure Plan showing listening decisions and attempt-order sheet checks."
        }
      ]
    }
  ],
};
