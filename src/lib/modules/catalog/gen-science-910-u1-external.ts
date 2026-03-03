import type { LearningModule } from "@/lib/modules/types";

export const GenScience910U1ExternalModule: LearningModule = {
  "id": "gen-science-910-u1-external",
  "title": "Chemistry: Atomic Structure & Chemical Bonding",
  "description": "General Science unit for 9–10 imported from external JSX curriculum.",
  "subject": "General Science",
  "tags": [
    "external-ai",
    "curriculum-import",
    "grade-910"
  ],
  "minAge": 14,
  "maxAge": 16,
  "version": "external-1.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain The Atom: Building Block of Matter.",
    "Explain Atomic Number, Mass Number & Isotopes.",
    "Explain The Periodic Table: Organization.",
    "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding.",
    "Apply one core General Science strategy for 910.",
    "Explain evidence interpretation using age-appropriate vocabulary.",
    "Apply evidence interpretation in one guided General Science task.",
    "Identify one correction step for the next attempt."
  ],
  "gradeBand": "910",
  "metadata": {
    "source": "../External_AI_Agents/lesson_platform (1).jsx",
    "sourceUnitId": "gen-science-910-u1",
    "sourceUnitIdCanonical": "gen-science-910-u1",
    "sourceUnitIdRaw": "gen_science-910-u1",
    "importedAt": "2026-02-25T02:03:30.472Z"
  },
  "external": {
    "unitOrder": 15,
    "estimatedHours": null,
    "prerequisites": []
  },
  "lessons": [
    {
      "id": "gen-science-910-u1-1",
      "title": "Atomic Structure & the Periodic Table (910)",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "gen-science-910-u1-1-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Atomic Structure & the Periodic Table (910)."
        }
      ],
      "objectives": [
        "Explain The Atom: Building Block of Matter.",
        "Explain Atomic Number, Mass Number & Isotopes.",
        "Explain The Periodic Table: Organization."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-1-chunk-1",
          "title": "The Atom: Building Block of Matter",
          "content": "All matter is made of ATOMS. Atoms are incredibly small — a single human hair is about 1 million atoms wide!\n\nAn atom has two regions:\n• NUCLEUS (center): Contains protons (+) and neutrons (no charge)\n• ELECTRON CLOUD (outside): Electrons (−) orbit in energy levels called shells\n\nIn a neutral atom: # protons = # electrons"
        },
        {
          "id": "gen-science-910-u1-1-chunk-2",
          "title": "Atomic Number, Mass Number & Isotopes",
          "content": "ATOMIC NUMBER: Number of PROTONS in the nucleus (defines the element)\nATOMIC MASS: Average mass of all isotopes (protons + neutrons)\n\nCarbon (C): Atomic number = 6 (6 protons)\nCarbon-12: 6 protons + 6 neutrons = 12\nCarbon-14: 6 protons + 8 neutrons = 14\n\nISOTOPES: Atoms of the same element with DIFFERENT numbers of neutrons. Same atomic number, different mass numbers."
        },
        {
          "id": "gen-science-910-u1-1-chunk-3",
          "title": "The Periodic Table: Organization",
          "content": "The periodic table organizes ALL known elements by atomic number.\n\nPERIODS (rows): Elements in the same row have the same number of electron shells\nGROUPS (columns): Elements in the same column have similar chemical properties\n\nKey groups:\n• Group 1 (Alkali Metals): Highly reactive (Li, Na, K)\n• Group 17 (Halogens): Very reactive nonmetals (F, Cl, Br)\n• Group 18 (Noble Gases): Extremely stable, rarely react (He, Ne, Ar)"
        },
        {
          "id": "gen-science-910-u1-1-chunk-4",
          "title": "Electron Configuration & Valence Electrons",
          "content": "Electrons fill energy levels (shells) in order:\nShell 1: max 2 electrons\nShell 2: max 8 electrons\nShell 3: max 8 electrons (simplified)\n\nVALENCE ELECTRONS: Electrons in the OUTERMOST shell — determine reactivity!\n\nSodium (Na): 2,8,1 → 1 valence electron (very reactive)\nNeon (Ne): 2,8 → 8 valence electrons (stable, noble gas)\nOxygen (O): 2,6 → 6 valence electrons (wants 2 more to fill shell)"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-1-card-1",
          "front": "Atomic Number",
          "back": "Number of PROTONS in an atom's nucleus — defines the element"
        },
        {
          "id": "gen-science-910-u1-1-card-2",
          "front": "Isotopes",
          "back": "Same element (same protons), different neutrons → different mass numbers"
        },
        {
          "id": "gen-science-910-u1-1-card-3",
          "front": "Valence electrons",
          "back": "Electrons in the OUTERMOST shell — determine chemical reactivity"
        },
        {
          "id": "gen-science-910-u1-1-card-4",
          "front": "Noble gases are stable because...",
          "back": "They have a full outer electron shell (8 valence electrons, except He with 2)"
        },
        {
          "id": "gen-science-910-u1-1-card-5",
          "front": "Groups vs. Periods on periodic table",
          "back": "Groups = columns (similar properties). Periods = rows (same # of shells)"
        },
        {
          "id": "gen-science-910-u1-1-card-6",
          "front": "If an atom has 8 protons, what element is it?",
          "back": "Oxygen (O) — atomic number 8"
        }
      ],
      "prompts": {
        "seedanceVideo": "Sora/Seedance 2.0 Prompt: Cinematic dive into the atom. Starting from macroscopic view, zooming into a carbon atom — nucleus with 6 protons (red) and 6 neutrons (blue) visible, electron shells orbit around. Electrons shown as probability clouds. Periodic table zooms in — periods and groups highlighted. Alkali metals show violent water reaction (archival-style). Noble gases glow with neon-like light. Chemistry-documentary aesthetic. Ages 14-16. Duration: 85 seconds.",
        "seedanceAnimation": "Lottie animation: Bohr model atom — nucleus pulses with protons/neutrons, electrons orbit in shells (2, then 8, then 1 for sodium). Each shell fills with glowing dots. Valence electrons highlighted in gold. 12-second loop.",
        "lessonImage": "Create a clean educational illustration for \"Atomic Structure & the Periodic Table (910)\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Atomic Structure & the Periodic Table (910)\" (General Science, grade band 910)."
      },
      "localized": {
        "title": {
          "en": "Atomic Structure & the Periodic Table"
        },
        "concept": {
          "en": "Atomic Structure & the Periodic Table"
        }
      },
      "external": {
        "sourceLessonId": "gen_science-910-u1-1",
        "order": 1
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-interactive",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-interactive-ia1",
          "type": "drag_and_drop",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-interactive-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice."
        }
      ],
      "metadata": {
        "prompts": [
          "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding.",
          "Apply one core General Science strategy for 910."
        ]
      },
      "objectives": [
        "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding.",
        "Apply one core General Science strategy for 910."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-interactive-chunk-intro",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice Overview",
          "content": "Reinforce core General Science concepts in Chemistry: Atomic Structure & Chemical Bonding.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-interactive-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-interactive-card-1",
          "front": "What is one key idea in Chemistry: Atomic Structure & Chemical Bonding?",
          "back": "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-interactive-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Practice\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-supp-interactive",
        "order": 2,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-quiz",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Check",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-910-u1-external-supp-quiz-q1",
          "text": "Which option best summarizes Chemistry: Atomic Structure & Chemical Bonding Supplemental Check?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-supplemental-check-summary",
          "options": [
            {
              "id": "a",
              "text": "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-quiz-q2",
          "text": "Which response shows correct application of Chemistry: Atomic Structure & Chemical Bonding Supplemental Check?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-supplemental-check-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply one core General Science strategy for 910."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-quiz-q3",
          "text": "Why is review important after learning Chemistry: Atomic Structure & Chemical Bonding Supplemental Check?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-supplemental-check-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-quiz-ia1",
          "type": "matching_pairs",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Check Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Chemistry: Atomic Structure & Chemical Bonding Supplemental Check in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-quiz-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Chemistry: Atomic Structure & Chemical Bonding Supplemental Check."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding.",
        "Apply one core General Science strategy for 910."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-quiz-chunk-intro",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Supplemental Check Overview",
          "content": "Reinforce core General Science concepts in Chemistry: Atomic Structure & Chemical Bonding.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-quiz-chunk-recap",
          "title": "Quick Recap",
          "content": "Summarize one key idea and plan one next step.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-quiz-card-1",
          "front": "What is one key idea in Chemistry: Atomic Structure & Chemical Bonding?",
          "back": "Build baseline confidence in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-quiz-card-2",
          "front": "How can you practice this idea?",
          "back": "Apply one core General Science strategy for 910."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Check\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Check\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Check\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Supplemental Check\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-supp-quiz",
        "order": 3,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-04",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-04-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-04-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-04-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-04-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 4: Evidence Interpretation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-4",
        "order": 4,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-05",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-05-ia1",
          "type": "drag_and_drop",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain scientific explanation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-05-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain scientific explanation using age-appropriate vocabulary.",
          "Apply scientific explanation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-05-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-05-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-05-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 5: Scientific Explanation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-5",
        "order": 5,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-06",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-910-u1-external-supp-seq-06-q1",
          "text": "Which option best summarizes Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-6-observation-skills-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain observation skills using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-q2",
          "text": "Which response shows correct application of Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-6-observation-skills-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply observation skills in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-q3",
          "text": "Why is review important after learning Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-6-observation-skills-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-06-ia1",
          "type": "matching_pairs",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain observation skills using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-06-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-06-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying observation skills, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-chunk-recap",
          "title": "Quick Recap",
          "content": "Review observation skills, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-06-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-card-2",
          "front": "How can I practice observation skills?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-06-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 6: Observation Skills\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-6",
        "order": 6,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-07",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-07-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-07-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying hypothesis testing, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-chunk-recap",
          "title": "Quick Recap",
          "content": "Review hypothesis testing, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-07-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-07-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 7: Hypothesis Testing\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-7",
        "order": 7,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-08",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-08-ia1",
          "type": "drag_and_drop",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain variable control using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-08-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain variable control using age-appropriate vocabulary.",
          "Apply variable control in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-08-chunk-intro",
          "title": "Variable Control Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying variable control, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-chunk-recap",
          "title": "Quick Recap",
          "content": "Review variable control, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-08-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-card-2",
          "front": "How can I practice variable control?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-08-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 8: Variable Control\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-8",
        "order": 8,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-09",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-910-u1-external-supp-seq-09-q1",
          "text": "Which option best summarizes Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-9-evidence-interpretation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain evidence interpretation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-q2",
          "text": "Which response shows correct application of Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-9-evidence-interpretation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply evidence interpretation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-q3",
          "text": "Why is review important after learning Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-9-evidence-interpretation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-09-ia1",
          "type": "matching_pairs",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain evidence interpretation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-09-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-09-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-09-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-09-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 9: Evidence Interpretation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-9",
        "order": 9,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-10",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-10-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-10-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-10-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-10-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 10: Scientific Explanation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-10",
        "order": 10,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-11",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-11-ia1",
          "type": "drag_and_drop",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain observation skills using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-11-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain observation skills using age-appropriate vocabulary.",
          "Apply observation skills in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain observation skills using age-appropriate vocabulary.",
        "Apply observation skills in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-11-chunk-intro",
          "title": "Observation Skills Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying observation skills, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-chunk-recap",
          "title": "Quick Recap",
          "content": "Review observation skills, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-11-card-1",
          "front": "What is observation skills?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-card-2",
          "front": "How can I practice observation skills?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-card-3",
          "front": "What should I review next?",
          "back": "Review observation skills, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-11-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 11: Observation Skills\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-11",
        "order": 11,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-12",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-910-u1-external-supp-seq-12-q1",
          "text": "Which option best summarizes Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-12-hypothesis-testing-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain hypothesis testing using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-q2",
          "text": "Which response shows correct application of Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-12-hypothesis-testing-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply hypothesis testing in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-q3",
          "text": "Why is review important after learning Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-12-hypothesis-testing-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-12-ia1",
          "type": "matching_pairs",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain hypothesis testing using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-12-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain hypothesis testing using age-appropriate vocabulary.",
        "Apply hypothesis testing in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-12-chunk-intro",
          "title": "Hypothesis Testing Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying hypothesis testing, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-chunk-recap",
          "title": "Quick Recap",
          "content": "Review hypothesis testing, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-12-card-1",
          "front": "What is hypothesis testing?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-card-2",
          "front": "How can I practice hypothesis testing?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-card-3",
          "front": "What should I review next?",
          "back": "Review hypothesis testing, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-12-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 12: Hypothesis Testing\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-12",
        "order": 12,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-13",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control",
      "type": "video",
      "duration": 8,
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-13-aid-animation",
          "type": "animation",
          "title": "Guided Animation",
          "content": "Animated concept support for Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain variable control using age-appropriate vocabulary.",
        "Apply variable control in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-13-chunk-intro",
          "title": "Variable Control Intro",
          "content": "Start with an observation and a testable question.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-chunk-practice",
          "title": "Guided Practice",
          "content": "Run a mini investigation and record outcomes in a table.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying variable control, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-chunk-recap",
          "title": "Quick Recap",
          "content": "Review variable control, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-13-card-1",
          "front": "What is variable control?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-card-2",
          "front": "How can I practice variable control?",
          "back": "Run a mini investigation and record outcomes in a table."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-card-3",
          "front": "What should I review next?",
          "back": "Review variable control, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-13-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Concept Walkthrough 13: Variable Control\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-13",
        "order": 13,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-14",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation",
      "type": "interactive",
      "duration": 8,
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-14-ia1",
          "type": "drag_and_drop",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation Learning Flow",
          "description": "Sort each action into Plan, Practice, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each action.",
            "Choose where it belongs.",
            "Use the result as your practice plan."
          ],
          "data": {
            "targets": [
              {
                "id": "plan",
                "label": "Plan"
              },
              {
                "id": "practice",
                "label": "Practice"
              },
              {
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Set a goal for Explain evidence interpretation using age-appropriate vocabulary..",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Identify independent, dependent, and control variables.",
                "correctTargetId": "practice"
              },
              {
                "id": "d3",
                "label": "Write one thing to improve before the next attempt.",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-14-aid-practice",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Practice reflection and application for Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation."
        }
      ],
      "metadata": {
        "prompts": [
          "Explain evidence interpretation using age-appropriate vocabulary.",
          "Apply evidence interpretation in one guided General Science task.",
          "Identify one correction step for the next attempt."
        ],
        "generatedSupplement": true
      },
      "objectives": [
        "Explain evidence interpretation using age-appropriate vocabulary.",
        "Apply evidence interpretation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-14-chunk-intro",
          "title": "Evidence Interpretation Intro",
          "content": "Change one variable at a time to keep results clear.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-chunk-practice",
          "title": "Guided Practice",
          "content": "Identify independent, dependent, and control variables.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying evidence interpretation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-chunk-recap",
          "title": "Quick Recap",
          "content": "Review evidence interpretation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-14-card-1",
          "front": "What is evidence interpretation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-card-2",
          "front": "How can I practice evidence interpretation?",
          "back": "Identify independent, dependent, and control variables."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-card-3",
          "front": "What should I review next?",
          "back": "Review evidence interpretation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-14-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Guided Practice Lab 14: Evidence Interpretation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-14",
        "order": 14,
        "generatedSupplement": true
      }
    },
    {
      "id": "gen-science-910-u1-external-supp-seq-15",
      "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "gen-science-910-u1-external-supp-seq-15-q1",
          "text": "Which option best summarizes Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-15-scientific-explanation-summary",
          "options": [
            {
              "id": "a",
              "text": "Explain scientific explanation using age-appropriate vocabulary."
            },
            {
              "id": "b",
              "text": "A conclusion without evidence."
            },
            {
              "id": "c",
              "text": "A result that changes multiple variables at once."
            },
            {
              "id": "d",
              "text": "A claim that ignores the observed data."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-q2",
          "text": "Which response shows correct application of Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-15-scientific-explanation-apply",
          "options": [
            {
              "id": "a",
              "text": "Apply scientific explanation in one guided General Science task."
            },
            {
              "id": "b",
              "text": "Select a conclusion before reviewing results."
            },
            {
              "id": "c",
              "text": "Use unrelated facts that do not match the experiment."
            },
            {
              "id": "d",
              "text": "Treat one observation as proof without retesting."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-q3",
          "text": "Why is review important after learning Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation?",
          "skillId": "gen-science-910-u1-external-skill-chemistry-atomic-structure-chemical-bonding-checkpoint-quiz-15-scientific-explanation-review",
          "options": [
            {
              "id": "a",
              "text": "Explain one result using evidence and science vocabulary."
            },
            {
              "id": "b",
              "text": "It replaces understanding with guessing."
            },
            {
              "id": "c",
              "text": "It removes the need for future practice."
            },
            {
              "id": "d",
              "text": "It makes progress tracking impossible."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "gen-science-910-u1-external-supp-seq-15-ia1",
          "type": "matching_pairs",
          "title": "Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation Error Match",
          "description": "Match each learning signal to the strongest correction action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read each signal.",
            "Pick the best response.",
            "Use matches for your next quiz retry."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I still mix up Explain scientific explanation using age-appropriate vocabulary.."
              },
              {
                "id": "l2",
                "label": "I rush and miss key details in the prompt."
              },
              {
                "id": "l3",
                "label": "I understand Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation in notes but not in timed checks."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Review one clear example and explain it aloud."
              },
              {
                "id": "r2",
                "label": "Use a short checklist before final answer selection."
              },
              {
                "id": "r3",
                "label": "Run a short re-check under the same time constraints."
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
        "questionsPerCheck": 3,
        "totalQuestions": 3,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 3,
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
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.7
      },
      "learningAids": [
        {
          "id": "gen-science-910-u1-external-supp-seq-15-aid-mnemonic",
          "type": "mnemonic",
          "title": "Memory Prompt",
          "content": "Review key concepts for Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation."
        }
      ],
      "metadata": {
        "generatedSupplement": true
      },
      "objectives": [
        "Explain scientific explanation using age-appropriate vocabulary.",
        "Apply scientific explanation in one guided General Science task.",
        "Identify one correction step for the next attempt."
      ],
      "chunks": [
        {
          "id": "gen-science-910-u1-external-supp-seq-15-chunk-intro",
          "title": "Scientific Explanation Intro",
          "content": "Use evidence from results to support the conclusion.",
          "kind": "concept"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-chunk-practice",
          "title": "Guided Practice",
          "content": "Explain one result using evidence and science vocabulary.",
          "kind": "practice"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-chunk-check",
          "title": "Common Pitfall Check",
          "content": "Watch for one common error while applying scientific explanation, then correct it with evidence.",
          "kind": "analysis"
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-chunk-recap",
          "title": "Quick Recap",
          "content": "Review scientific explanation, then set one clear improvement target.",
          "kind": "recap"
        }
      ],
      "flashcards": [
        {
          "id": "gen-science-910-u1-external-supp-seq-15-card-1",
          "front": "What is scientific explanation?",
          "back": "It is a key General Science idea in Chemistry: Atomic Structure & Chemical Bonding."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-card-2",
          "front": "How can I practice scientific explanation?",
          "back": "Explain one result using evidence and science vocabulary."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-card-3",
          "front": "What should I review next?",
          "back": "Review scientific explanation, then set one clear improvement target."
        },
        {
          "id": "gen-science-910-u1-external-supp-seq-15-card-4",
          "front": "How do I avoid common mistakes?",
          "back": "Use a short checklist before final answers and verify one step."
        }
      ],
      "prompts": {
        "seedanceVideo": "Create a child-safe educational lesson video about \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation\" in \"General Science\" for grade band \"910\".",
        "seedanceAnimation": "Create an 8-12 second looping concept animation for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 910).",
        "lessonImage": "Create a clean educational illustration for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation\" in General Science.",
        "researchAgent": "Produce standards-aligned lesson expansion notes for \"Chemistry: Atomic Structure & Chemical Bonding Checkpoint Quiz 15: Scientific Explanation\" (General Science, grade band 910)."
      },
      "external": {
        "sourceLessonId": "gen-science-910-u1-external-generated-cycle-15",
        "order": 15,
        "generatedSupplement": true
      }
    }
  ]
};
