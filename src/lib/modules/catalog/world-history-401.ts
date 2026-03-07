import type { LearningModule } from "@/lib/modules/types";

export const world_history_401_Module: LearningModule = {
  "id": "world-history-401",
  "title": "World History Capstone Interpretation",
  "description": "Construct high-level historical arguments using comparative synthesis and source evidence.",
  "subject": "History Worldwide",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "capstone",
    "dbq"
  ],
  "minAge": 12,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Understand core concepts of comparative historical synthesis",
    "Apply Source-Based Reasoning to evaluate primary and secondary documents",
    "Structure long-form historical claims with counterarguments",
    "Demonstrate mastery through scenario-based historical analysis"
  ],
  "lessons": [
    {
      "id": "world-history-401-l01",
      "title": "Comparative Synthesis Across Eras",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "world-history-401-l01-c1",
          "title": "Comparative Synthesis Overview",
          "content": "Welcome to your World History Capstone! In this lesson, we will explore comparative synthesis. This means acting like a historical detective to find connections, similarities, and differences between events that happened in completely different times or places. For example, how was the fall of the Roman Empire similar to the fall of the Han Dynasty? By comparing these events, we uncover larger patterns in human history."
        },
        {
          "id": "world-history-401-l01-c2",
          "title": "Core Concept: Source Integration",
          "content": "To build a strong comparison, we rely on source integration. This is the skill of weaving together different pieces of evidence—like a letter from a soldier (primary source) and a textbook chapter (secondary source)—to support your main idea. You can't just stack quotes; you have to explain how they connect to your overall argument and to each other."
        },
        {
          "id": "world-history-401-l01-c3",
          "title": "Worked Example: Trade Routes",
          "content": "Let's look at a guided example. Imagine we are comparing the Silk Road to the Trans-Saharan trade routes. First, we define our goal: to show how both routes spread not just goods, but religions. Next, we integrate our sources: we pair a merchant's journal from Mali with an artifact from ancient China. Finally, we verify our conclusion by asking: Does this evidence actually prove that beliefs traveled alongside physical items?"
        },
        {
          "id": "world-history-401-l01-c4",
          "title": "Transfer Prompt",
          "content": "Now it's your turn! Think about the Industrial Revolution and the modern Digital Revolution. How would you use comparative synthesis to connect them? Identify one piece of evidence you might use for each era, and write a single sentence explaining how they show a similar pattern of human progress or disruption."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-401-l01-f1",
          "front": "Comparative Synthesis",
          "back": "Analyzing similarities and differences between distinct historical events or eras to find larger patterns."
        },
        {
          "id": "world-history-401-l01-f2",
          "front": "Source Integration",
          "back": "Weaving together multiple primary and secondary sources to support a single historical argument."
        },
        {
          "id": "world-history-401-l01-f3",
          "front": "Primary Source",
          "back": "First-hand accounts or artifacts from the time period being studied (e.g., letters, coins, treaties)."
        },
        {
          "id": "world-history-401-l01-f4",
          "front": "Secondary Source",
          "back": "Analysis or interpretation of historical events created after the fact (e.g., textbooks, documentaries)."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l01-a1",
          "type": "image",
          "title": "Concept Poster: The Synthesis Bridge",
          "content": "A colorful infographic showing a bridge connecting two different historical eras, with 'Sources' acting as the bricks building the bridge."
        },
        {
          "id": "world-history-401-l01-a2",
          "type": "animation",
          "title": "Warm-up Animation",
          "content": "A short animation showing a split screen of a Roman Emperor and a Chinese Emperor, highlighting their shared challenges."
        }
      ]
    },
    {
      "id": "world-history-401-l02",
      "title": "Source Integration Strategies",
      "type": "interactive",
      "duration": 12,
      "metadata": {
        "prompts": [
          "Identify one core idea about comparative synthesis from this lesson.",
          "Explain how you would combine a diary entry and a map to make a point.",
          "Describe one challenge you might face when sources disagree."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-401-l02-ia1",
          "type": "drag_and_drop",
          "title": "Historical Analysis Flow Builder",
          "description": "Sort each historical research action into Plan, Execute, or Reflect.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
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
                "id": "reflect",
                "label": "Reflect"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Read the prompt and identify the eras to compare",
                "correctTargetId": "plan"
              },
              {
                "id": "d2",
                "label": "Group primary sources by their main themes",
                "correctTargetId": "execute"
              },
              {
                "id": "d3",
                "label": "Check if your thesis actually answers the prompt",
                "correctTargetId": "reflect"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l02-a1",
          "type": "practice",
          "title": "Try It Board",
          "content": "A digital whiteboard where students drag source snippets into 'Agree' or 'Disagree' columns."
        }
      ]
    },
    {
      "id": "world-history-401-l03",
      "title": "Checkpoint: Capstone Historical Argument",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l03-q1",
          "text": "What is the primary goal of comparative synthesis in historical writing?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To identify broader historical patterns by analyzing similarities and differences across different eras or regions."
            },
            {
              "id": "b",
              "text": "To memorize exact dates and names from two different centuries."
            },
            {
              "id": "c",
              "text": "To prove that modern history is more important than ancient history."
            },
            {
              "id": "d",
              "text": "To summarize a single textbook chapter without using outside sources."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l03-q2",
          "text": "When integrating sources into an argument, what is the best first step?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Analyze the author's point of view and the historical context of the document."
            },
            {
              "id": "b",
              "text": "Copy the longest quote you can find to make your essay look longer."
            },
            {
              "id": "c",
              "text": "Ignore the date the source was written, as it does not matter."
            },
            {
              "id": "d",
              "text": "Only use secondary sources because they are easier to read."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l03-q3",
          "text": "Which of the following is an example of strong historical reasoning?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Connecting a drop in crop yields to political instability using tax records as evidence."
            },
            {
              "id": "b",
              "text": "Assuming a king was popular just because he won a single battle."
            },
            {
              "id": "c",
              "text": "Stating that the printing press caused the internet."
            },
            {
              "id": "d",
              "text": "Ignoring a diary entry because it contradicts your main argument."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l03-q4",
          "text": "Why is it important to corroborate sources (check them against each other)?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "It helps verify accuracy and reveals potential biases in individual accounts."
            },
            {
              "id": "b",
              "text": "It guarantees that you will find one source that is 100% true."
            },
            {
              "id": "c",
              "text": "It allows you to skip writing a thesis statement."
            },
            {
              "id": "d",
              "text": "It makes the research process faster by eliminating reading."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l03-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Fixing Historical Errors",
          "description": "Match each common historical writing error to the best correction strategy.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the writing error on the left.",
            "Pick the best correction strategy on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Stacking quotes without explaining them"
              },
              {
                "id": "l2",
                "label": "Comparing two events that have no logical connection"
              },
              {
                "id": "l3",
                "label": "Relying entirely on one biased author"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add a sentence of analysis after every piece of evidence"
              },
              {
                "id": "r2",
                "label": "Establish a clear thematic link (like economics or religion) first"
              },
              {
                "id": "r3",
                "label": "Find a corroborating source from a different perspective"
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
      "learningAids": [
        {
          "id": "world-history-401-l03-a1",
          "type": "mnemonic",
          "title": "Memory Tip: C.A.P.",
          "content": "When looking at a source, remember C.A.P.: Context, Audience, Purpose."
        }
      ]
    },
    {
      "id": "world-history-401-l04",
      "title": "Structuring Long-Form Historical Claims",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "world-history-401-l04-c1",
          "title": "The Power of the Thesis",
          "content": "In this lesson, we move from analyzing sources to building your own argument. A long-form historical claim starts with a powerful thesis statement. Your thesis isn't just a summary of what happened; it is a specific, arguable claim that tells the reader exactly how and why an event occurred, based on the evidence you've gathered."
        },
        {
          "id": "world-history-401-l04-c2",
          "title": "Method Steps: Claim, Evidence, Reasoning",
          "content": "To structure your argument, use the CER method. Step 1: State your Claim (your thesis or topic sentence). Step 2: Provide Evidence (quotes, data, or facts from your sources). Step 3: Provide Reasoning (explain exactly how the evidence proves your claim). Without reasoning, your evidence is just a random fact floating in space."
        },
        {
          "id": "world-history-401-l04-c3",
          "title": "Common Mistakes: The 'Laundry List'",
          "content": "A common mistake in historical writing is the 'laundry list' essay. This happens when a writer just lists facts one after another without connecting them back to the main argument. Another pitfall is ignoring the chronological order of events, which can confuse your reader and weaken your cause-and-effect reasoning."
        },
        {
          "id": "world-history-401-l04-c4",
          "title": "Independent Try: Draft a Claim",
          "content": "Let's practice! Imagine you are writing an essay on the impact of the printing press. Draft a one-sentence claim that goes beyond 'it printed books.' Try to argue *how* it changed society, such as its effect on education or religious authority. Compare your draft to the CER method to ensure it's arguable."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-401-l04-f1",
          "front": "Thesis Statement",
          "back": "A clear, arguable claim that outlines the main argument of your historical essay."
        },
        {
          "id": "world-history-401-l04-f2",
          "front": "CER Method",
          "back": "Claim, Evidence, Reasoning - the structural backbone of a strong historical paragraph."
        },
        {
          "id": "world-history-401-l04-f3",
          "front": "Historical Causation",
          "back": "Explaining the direct and indirect reasons why a historical event happened."
        },
        {
          "id": "world-history-401-l04-f4",
          "front": "The 'Laundry List' Error",
          "back": "Listing historical facts without providing analysis or connecting them to a thesis."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l04-a1",
          "type": "image",
          "title": "Essay Skeleton Visual",
          "content": "A visual diagram showing a thesis as the 'spine' of a skeleton, with evidence and reasoning acting as the 'ribs' supporting it."
        }
      ]
    },
    {
      "id": "world-history-401-l05",
      "title": "Evaluating Historical Interpretations",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Pick one historical myth and outline how you would debunk it.",
          "Test your thesis against a piece of contradictory evidence.",
          "Revise your claim to make it more specific."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-401-l05-ia1",
          "type": "sorting_buckets",
          "title": "Strategy Sort: Building the Essay",
          "description": "Sort essay-writing actions into Concept, Process, or Review lanes.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "concept",
                "label": "Concept (The Idea)"
              },
              {
                "id": "process",
                "label": "Process (The Drafting)"
              },
              {
                "id": "review",
                "label": "Review (The Polish)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Brainstorming a unique thesis statement",
                "correctBucketId": "concept"
              },
              {
                "id": "i2",
                "label": "Weaving primary source quotes into your paragraphs",
                "correctBucketId": "process"
              },
              {
                "id": "i3",
                "label": "Checking if your conclusion matches your introduction",
                "correctBucketId": "review"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l05-a1",
          "type": "animation",
          "title": "Drafting Walkthrough",
          "content": "An animated sequence showing a messy first draft transforming into a polished, structured paragraph using the CER method."
        }
      ]
    },
    {
      "id": "world-history-401-l06",
      "title": "Checkpoint: Source-Based Reasoning Quality",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l06-q1",
          "text": "What is the most important characteristic of a strong historical thesis statement?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It makes a specific, arguable claim that can be supported by evidence."
            },
            {
              "id": "b",
              "text": "It states a universally accepted fact that no one can disagree with."
            },
            {
              "id": "c",
              "text": "It asks a question rather than providing an answer."
            },
            {
              "id": "d",
              "text": "It lists every single date and name that will be mentioned in the essay."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l06-q2",
          "text": "In the CER (Claim, Evidence, Reasoning) method, what is the purpose of 'Reasoning'?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To explain exactly how the provided evidence proves the claim."
            },
            {
              "id": "b",
              "text": "To introduce a completely new topic to keep the reader interested."
            },
            {
              "id": "c",
              "text": "To summarize the essay's conclusion early."
            },
            {
              "id": "d",
              "text": "To provide a citation for the quote used in the evidence section."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l06-q3",
          "text": "Which of the following is an example of the 'laundry list' mistake in historical writing?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Listing five different causes of a war without explaining how they interacted or which was most important."
            },
            {
              "id": "b",
              "text": "Focusing deeply on one primary source and analyzing its bias."
            },
            {
              "id": "c",
              "text": "Comparing the economic policies of two different empires."
            },
            {
              "id": "d",
              "text": "Writing a conclusion that synthesizes the main points of the essay."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l06-q4",
          "text": "When evaluating a historical interpretation, why must you look at the author's background?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To determine if their personal experiences or beliefs might have biased their view of the events."
            },
            {
              "id": "b",
              "text": "To see if they are famous enough to be quoted."
            },
            {
              "id": "c",
              "text": "To ensure they lived in the exact same year the event happened."
            },
            {
              "id": "d",
              "text": "To find out if they wrote other books on different subjects."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l06-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Evaluating Claims",
          "description": "Match the weak claim to the strategy that makes it stronger.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the weak historical claim on the left.",
            "Match it to the revision strategy on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Weak: 'The French Revolution was bad.'"
              },
              {
                "id": "l2",
                "label": "Weak: 'Trade routes existed in the past.'"
              },
              {
                "id": "l3",
                "label": "Weak: 'George Washington was a leader.'"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Specify the impact: 'It caused political upheaval that reshaped European governance.'"
              },
              {
                "id": "r2",
                "label": "Add historical context: 'The Silk Road facilitated cultural exchange between East and West.'"
              },
              {
                "id": "r3",
                "label": "Define the role: 'His military strategies were crucial to the success of the Continental Army.'"
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
              2,
              3,
              4
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
      "learningAids": [
        {
          "id": "world-history-401-l06-a1",
          "type": "mnemonic",
          "title": "Memory Tip: The 'So What?' Test",
          "content": "After writing a claim, ask yourself 'So what?' If you can't answer why it matters, your claim needs to be stronger."
        }
      ]
    },
    {
      "id": "world-history-401-l07",
      "title": "Counterargument and Revision in History",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-401-l07-c1",
          "title": "Embracing the Counterargument",
          "content": "History is rarely simple, and historians often disagree. A truly advanced historical argument doesn't just present one side; it acknowledges the counterargument. By addressing evidence that contradicts your claim and explaining why your interpretation is still stronger, you show deep critical thinking and make your essay much more convincing."
        },
        {
          "id": "world-history-401-l07-c2",
          "title": "Decision Rules: Weighing Evidence",
          "content": "When faced with competing sources—like a rebel's diary versus a king's official decree—how do you choose? Use decision rules. Ask: Which source was closer to the event? Which has a stronger motive to lie? You should prioritize the evidence that is most reliable and has the clearest connection to your specific thesis."
        },
        {
          "id": "world-history-401-l07-c3",
          "title": "Quality Control: The Bias Check",
          "content": "Before finalizing your argument, perform a quality control check. Look for bias in your own writing. Are you ignoring facts that don't fit your narrative? Ensure your argument is accurate, complete, and directly answers the prompt. A good historian follows the evidence, even if it means changing their original thesis."
        },
        {
          "id": "world-history-401-l07-c4",
          "title": "Next-Step Plan: The Revision Cycle",
          "content": "Writing is rewriting. After drafting your essay, take a step back. Read it aloud to catch logical leaps. Identify one paragraph where the reasoning is weak, and revise it by adding more context or a better quote. This cycle of drafting, checking, and revising is what turns a good essay into a capstone-level masterpiece."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-401-l07-f1",
          "front": "Counterargument",
          "back": "An opposing viewpoint or piece of evidence that challenges your main thesis."
        },
        {
          "id": "world-history-401-l07-f2",
          "front": "Rebuttal",
          "back": "Your response to the counterargument, explaining why your original claim is still valid."
        },
        {
          "id": "world-history-401-l07-f3",
          "front": "Historical Bias",
          "back": "A prejudice or preconceived notion that prevents a person from viewing an event objectively."
        },
        {
          "id": "world-history-401-l07-f4",
          "front": "Corroboration",
          "back": "Confirming a piece of evidence by finding the same information in a different, independent source."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l07-a1",
          "type": "practice",
          "title": "Counterargument Planner",
          "content": "A visual template with a scale: 'My Argument' on one side, 'Opposing View' on the other, and a box for 'Why My Argument Wins'."
        }
      ]
    },
    {
      "id": "world-history-401-l08",
      "title": "Historical Interpretation Capstone Lab",
      "type": "interactive",
      "duration": 10,
      "metadata": {
        "prompts": [
          "What was the hardest part of addressing the counterargument?",
          "Where did your evidence feel weakest, and why?",
          "What is your next improvement target for essay writing?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-401-l08-ia1",
          "type": "matching_pairs",
          "title": "Reflection Match: Essay Troubleshooting",
          "description": "Match your writing struggle with the best follow-up action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "I found a source that completely destroys my thesis."
              },
              {
                "id": "l2",
                "label": "My paragraphs feel disconnected and jump around."
              },
              {
                "id": "l3",
                "label": "I have lots of quotes but my word count is low."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Revise your thesis to reflect the new, more complex reality."
              },
              {
                "id": "r2",
                "label": "Add transition sentences that link the end of one idea to the start of the next."
              },
              {
                "id": "r3",
                "label": "Expand your 'Reasoning' sections to explain the quotes in your own words."
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
          "id": "world-history-401-l08-a1",
          "type": "mnemonic",
          "title": "Reflection Cycle",
          "content": "Remember: Draft, Doubt, Defend, Polish."
        }
      ]
    },
    {
      "id": "world-history-401-l09",
      "title": "Review: Advanced Historical Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l09-q1",
          "text": "Why is including a counterargument considered a sign of advanced historical writing?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It demonstrates that you have considered multiple perspectives and can defend your thesis against conflicting evidence."
            },
            {
              "id": "b",
              "text": "It proves that history is entirely subjective and no one can ever be right."
            },
            {
              "id": "c",
              "text": "It is a trick to make the essay longer without doing more research."
            },
            {
              "id": "d",
              "text": "It allows you to change your thesis halfway through the essay."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l09-q2",
          "text": "If two primary sources from the same event contradict each other, what is the best approach?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Analyze the authors' motives, audiences, and proximity to the event to weigh their reliability."
            },
            {
              "id": "b",
              "text": "Throw both sources away and find a secondary source instead."
            },
            {
              "id": "c",
              "text": "Assume the source written by the person with the highest social status is correct."
            },
            {
              "id": "d",
              "text": "Pick the source that agrees with your thesis and ignore the other one."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l09-q3",
          "text": "Which of the following best describes 'historical bias'?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "A perspective shaped by an author's background or beliefs that influences how they record an event."
            },
            {
              "id": "b",
              "text": "A deliberate lie told by a historian to sell more books."
            },
            {
              "id": "c",
              "text": "The process of organizing historical events in chronological order."
            },
            {
              "id": "d",
              "text": "A type of primary source that is written in a foreign language."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l09-q4",
          "text": "What is the purpose of the 'rebuttal' in a historical essay?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "To explain why the counterargument is flawed or less significant than your main claim."
            },
            {
              "id": "b",
              "text": "To agree completely with the opposing side and end the essay."
            },
            {
              "id": "c",
              "text": "To introduce a brand new topic in the conclusion."
            },
            {
              "id": "d",
              "text": "To list the citations for all the sources used."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l09-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Handling Contradictions",
          "description": "Match the source conflict to the best analytical approach.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the source conflict on the left.",
            "Pick the best analytical approach on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "A general claims victory, but a soldier's diary describes a retreat."
              },
              {
                "id": "l2",
                "label": "A merchant praises a trade route, but a tax collector calls it a failure."
              },
              {
                "id": "l3",
                "label": "Two modern historians disagree on the cause of a revolution."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Contrast official propaganda with ground-level reality."
              },
              {
                "id": "r2",
                "label": "Analyze how different economic roles shape perspectives on success."
              },
              {
                "id": "r3",
                "label": "Evaluate which historian uses more comprehensive primary evidence."
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
              3,
              4,
              5
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
      "learningAids": [
        {
          "id": "world-history-401-l09-a1",
          "type": "mnemonic",
          "title": "Memory Tip: The Scale of Evidence",
          "content": "Imagine a scale. Your evidence goes on one side, the counterargument on the other. Your reasoning is the weight that tips the scale in your favor."
        }
      ]
    },
    {
      "id": "world-history-401-l10",
      "title": "Mastery: World History IV",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l10-q1",
          "text": "When writing a Document-Based Question (DBQ) essay, how should you use the provided documents?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Group them by theme and use them as evidence to support a cohesive thesis."
            },
            {
              "id": "b",
              "text": "Summarize each document one by one in chronological order."
            },
            {
              "id": "c",
              "text": "Only use the documents that agree with your personal opinion."
            },
            {
              "id": "d",
              "text": "Quote them entirely without adding any of your own words."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l10-q2",
          "text": "What does it mean to 'contextualize' a historical event in an essay introduction?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To describe the broader historical background and trends that led up to the event."
            },
            {
              "id": "b",
              "text": "To define all the difficult vocabulary words you will use."
            },
            {
              "id": "c",
              "text": "To state your thesis as quickly as possible."
            },
            {
              "id": "d",
              "text": "To explain why the event is important to modern-day politics."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l10-q3",
          "text": "If a prompt asks you to 'evaluate the extent of change' during a time period, what must your thesis do?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Acknowledge both what changed and what stayed the same (continuity), while arguing which was more significant."
            },
            {
              "id": "b",
              "text": "Only list the things that changed."
            },
            {
              "id": "c",
              "text": "Argue that nothing ever really changes in history."
            },
            {
              "id": "d",
              "text": "Provide a timeline of dates without analyzing them."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l10-q4",
          "text": "Which of the following is the best example of synthesizing outside information?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Connecting the prompt's topic to a similar historical event in a different era or region to show a broader pattern."
            },
            {
              "id": "b",
              "text": "Mentioning a random fact you memorized that has nothing to do with the prompt."
            },
            {
              "id": "c",
              "text": "Using a dictionary definition to start your essay."
            },
            {
              "id": "d",
              "text": "Repeating the information from the provided documents in different words."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l10-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: DBQ Rubric Skills",
          "description": "Match the essay action to the historical skill it demonstrates.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the essay action on the left.",
            "Pick the corresponding historical skill on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Explaining what was happening in the world right before the event."
              },
              {
                "id": "l2",
                "label": "Noting that a document was written by a wealthy noble to please the king."
              },
              {
                "id": "l3",
                "label": "Bringing in a relevant historical fact not mentioned in the provided sources."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Contextualization"
              },
              {
                "id": "r2",
                "label": "Sourcing / Point of View Analysis"
              },
              {
                "id": "r3",
                "label": "Outside Evidence"
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
              3,
              4,
              5
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
      "learningAids": [
        {
          "id": "world-history-401-l10-a1",
          "type": "mnemonic",
          "title": "Memory Tip: DBQ Checklist",
          "content": "Context, Thesis, Documents, Outside Evidence, Sourcing, Complexity."
        }
      ]
    },
    {
      "id": "world-history-401-l11",
      "title": "Applied History Worldwide Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "metadata": {
        "prompts": [
          "Select one weak pattern from your recent essays.",
          "Apply a step-by-step correction using the CER method.",
          "Document your plan for the next timed writing check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-401-l11-ia1",
          "type": "sorting_buckets",
          "title": "Transfer Ladder: The DBQ Workflow",
          "description": "Sort actions into the Diagnose, Fix, and Transfer phases of essay writing.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "diagnose",
                "label": "Diagnose (Read & Plan)"
              },
              {
                "id": "fix",
                "label": "Fix (Drafting)"
              },
              {
                "id": "transfer",
                "label": "Transfer (Review & Apply)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Read the prompt and group the documents by theme",
                "correctBucketId": "diagnose"
              },
              {
                "id": "i2",
                "label": "Write body paragraphs using Claim, Evidence, Reasoning",
                "correctBucketId": "fix"
              },
              {
                "id": "i3",
                "label": "Check if your thesis can be applied to a different historical era",
                "correctBucketId": "transfer"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l11-a1",
          "type": "practice",
          "title": "Correction Loop Card",
          "content": "A visual flowchart: Read Prompt -> Group Docs -> Draft Thesis -> Write Body -> Review."
        }
      ]
    },
    {
      "id": "world-history-401-l12",
      "title": "World History IV Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l12-q1",
          "text": "A historian is comparing the Mongol Empire to the Roman Empire. Which approach shows the highest level of comparative synthesis?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Analyzing how both empires used infrastructure (roads/relay stations) to maintain control over vast, diverse territories."
            },
            {
              "id": "b",
              "text": "Listing the names of all the Roman Emperors and then all the Mongol Khans."
            },
            {
              "id": "c",
              "text": "Stating that the Romans were better because they built stone buildings."
            },
            {
              "id": "d",
              "text": "Focusing entirely on the Mongol Empire and ignoring Rome."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l12-q2",
          "text": "You are reading a letter from a factory owner during the Industrial Revolution claiming his workers are happy. How should you evaluate this source?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Question the author's motive, as he has a financial interest in making his factory look good."
            },
            {
              "id": "b",
              "text": "Accept it as absolute truth because it is a primary source."
            },
            {
              "id": "c",
              "text": "Ignore it because factory owners don't know anything about history."
            },
            {
              "id": "d",
              "text": "Assume all workers were happy during the Industrial Revolution."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l12-q3",
          "text": "Which of the following thesis statements is the strongest for a capstone essay?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Although the Columbian Exchange brought new crops that increased global populations, its introduction of devastating diseases fundamentally destabilized indigenous societies."
            },
            {
              "id": "b",
              "text": "The Columbian Exchange happened in 1492 and involved plants, animals, and diseases."
            },
            {
              "id": "c",
              "text": "The Columbian Exchange was both good and bad for the people involved."
            },
            {
              "id": "d",
              "text": "Christopher Columbus sailed the ocean blue in 1492."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l12-q4",
          "text": "Why is it crucial to understand the 'audience' of a historical document?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Because authors often change their tone or the facts depending on who they are writing for (e.g., a private diary vs. a public speech)."
            },
            {
              "id": "b",
              "text": "Because you need to know if the audience was large or small to cite it properly."
            },
            {
              "id": "c",
              "text": "Because documents without an audience are not considered primary sources."
            },
            {
              "id": "d",
              "text": "Because it tells you exactly what year the document was published."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l12-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Applied Scenarios",
          "description": "Match the historical scenario to the best analytical tool.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "instructions": [
            "Review the historical scenario on the left.",
            "Pick the best analytical tool on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Comparing the spread of Buddhism and Christianity."
              },
              {
                "id": "l2",
                "label": "Reading a propaganda poster from WWII."
              },
              {
                "id": "l3",
                "label": "Writing an essay on the causes of the French Revolution."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Comparative Synthesis"
              },
              {
                "id": "r2",
                "label": "Sourcing (Purpose & Audience)"
              },
              {
                "id": "r3",
                "label": "Causation & Argument Structuring"
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
              4,
              5,
              6
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "world-history-401-l12-a1",
          "type": "mnemonic",
          "title": "Memory Tip: The Historian's Lens",
          "content": "Always look through the lens of Context, Audience, and Purpose."
        }
      ]
    },
    {
      "id": "world-history-401-l13",
      "title": "History Worldwide Scenario Lab",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "world-history-401-l13-c1",
          "title": "Scenario Brief: The Information Revolutions",
          "content": "Welcome to the Scenario Lab! Today's challenge combines everything you've learned. Your task is to compare the impact of the Gutenberg Printing Press (1440s) with the rise of the Internet (1990s). Both revolutionized how information spread, but did they democratize society or just create new elites? You will need to synthesize sources, structure a claim, and evaluate the outcomes."
        },
        {
          "id": "world-history-401-l13-c2",
          "title": "Plan the Approach: Selecting Sources",
          "content": "To tackle this massive topic, break it down. First, select your sources. You might look at a 16th-century church decree banning certain books, and compare it to a modern article about internet censorship. By planning which themes to compare (like censorship or education), you keep your essay focused and organized."
        },
        {
          "id": "world-history-401-l13-c3",
          "title": "Execute and Justify: Writing the Synthesis",
          "content": "Now, execute your plan. Draft a paragraph that integrates both eras. For example: 'Just as the Catholic Church attempted to control the spread of printed Bibles to maintain authority, modern governments use firewalls to restrict internet access, showing a continuous historical pattern of authorities fearing decentralized information.' Justify your claim with specific evidence."
        },
        {
          "id": "world-history-401-l13-c4",
          "title": "Evaluate Outcome: Peer Review",
          "content": "Finally, evaluate your outcome. Did you actually answer the prompt? Did you rely too heavily on one era and ignore the other? In the real world, historians use peer review. Read your argument from the perspective of a skeptic. If they can easily poke holes in your reasoning, it's time to adjust your thesis and try again."
        }
      ],
      "flashcards": [
        {
          "id": "world-history-401-l13-f1",
          "front": "Scenario Planning",
          "back": "Breaking a complex historical prompt into manageable themes (e.g., economics, politics, culture)."
        },
        {
          "id": "world-history-401-l13-f2",
          "front": "Thematic Synthesis",
          "back": "Connecting different historical events based on a shared theme rather than just chronological order."
        },
        {
          "id": "world-history-401-l13-f3",
          "front": "Historical Continuity",
          "back": "Patterns or structures that remain the same over long periods of time, despite other changes."
        },
        {
          "id": "world-history-401-l13-f4",
          "front": "Peer Review",
          "back": "Evaluating and critiquing another historian's work to ensure accuracy and logical strength."
        }
      ],
      "learningAids": [
        {
          "id": "world-history-401-l13-a1",
          "type": "image",
          "title": "Scenario Map: Information Ages",
          "content": "A visual timeline showing the Printing Press on top and the Internet on the bottom, with connecting arrows highlighting shared themes like 'Censorship' and 'Mass Education'."
        },
        {
          "id": "world-history-401-l13-a2",
          "type": "practice",
          "title": "Mini Case Prompt",
          "content": "Write a one-paragraph synthesis comparing a historical revolution to a modern technological shift."
        }
      ]
    },
    {
      "id": "world-history-401-l14",
      "title": "History Worldwide Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "metadata": {
        "prompts": [
          "Identify one repeated error pattern from your recent DBQ practice.",
          "Choose the best correction routine for that pattern.",
          "Write a transfer goal for your final timed check."
        ]
      },
      "interactiveActivities": [
        {
          "id": "world-history-401-l14-ia1",
          "type": "matching_pairs",
          "title": "Error to Fix Match: The DBQ Clinic",
          "description": "Match each common essay error to the highest-impact correction action.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "My thesis is just a summary of the prompt."
              },
              {
                "id": "l2",
                "label": "I run out of time before writing my conclusion."
              },
              {
                "id": "l3",
                "label": "I drop quotes into my essay without explaining them."
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Add a 'because' clause to your thesis to introduce your specific argument."
              },
              {
                "id": "r2",
                "label": "Spend 10 minutes outlining before you write so you stay on track."
              },
              {
                "id": "r3",
                "label": "Use the 'Quote Sandwich' method: Introduce, Quote, Analyze."
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
          "id": "world-history-401-l14-a1",
          "type": "mnemonic",
          "title": "Clinic Loop",
          "content": "Diagnose the weak paragraph, Correct the reasoning, Transfer the skill to the next essay."
        }
      ]
    },
    {
      "id": "world-history-401-l15",
      "title": "World History IV Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "world-history-401-l15-q1",
          "text": "Which of the following represents the highest level of historical synthesis?",
          "skillId": "world-history-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Connecting the arguments of multiple primary sources to a broader global trend not explicitly mentioned in the documents."
            },
            {
              "id": "b",
              "text": "Translating a primary source from its original language into modern English."
            },
            {
              "id": "c",
              "text": "Writing a five-page essay using only one textbook as a source."
            },
            {
              "id": "d",
              "text": "Memorizing the exact dates of every major battle in a war."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l15-q2",
          "text": "When structuring a complex historical argument, where should you place your strongest piece of evidence?",
          "skillId": "world-history-401-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It depends on the essay's flow, but often it is used to anchor a body paragraph and directly support the most critical part of the thesis."
            },
            {
              "id": "b",
              "text": "Always in the very first sentence of the introduction."
            },
            {
              "id": "c",
              "text": "Hidden in the conclusion so it surprises the reader."
            },
            {
              "id": "d",
              "text": "In the footnotes, so it doesn't interrupt the story."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l15-q3",
          "text": "A student writes: 'The revolution was caused by taxes, bad weather, and angry peasants.' How can this claim be improved for a capstone essay?",
          "skillId": "world-history-401-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "By establishing a hierarchy of causes, explaining how bad weather exacerbated existing tax grievances to push peasants to revolt."
            },
            {
              "id": "b",
              "text": "By adding more items to the list, like 'bad kings' and 'swords'."
            },
            {
              "id": "c",
              "text": "By removing the peasants from the sentence to make it shorter."
            },
            {
              "id": "d",
              "text": "It cannot be improved; it is already a perfect thesis."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "world-history-401-l15-q4",
          "text": "Why is the ability to evaluate historical interpretations a 'capstone' skill?",
          "skillId": "world-history-401-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Because it requires you to move beyond memorizing facts to actively judging the validity of how others have constructed history."
            },
            {
              "id": "b",
              "text": "Because it is the only skill tested on multiple-choice exams."
            },
            {
              "id": "c",
              "text": "Because it allows you to write essays without reading any primary sources."
            },
            {
              "id": "d",
              "text": "Because it proves that all history books are completely accurate."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "world-history-401-l15-ia1",
          "type": "matching_pairs",
          "title": "Reasoning Match: Final Capstone Check",
          "description": "Match the advanced historical concept to its definition.",
          "estimatedMinutes": 7,
          "difficultyLevel": "hard",
          "instructions": [
            "Review the advanced concept on the left.",
            "Pick the correct definition on the right."
          ],
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Historiography"
              },
              {
                "id": "l2",
                "label": "Historical Contingency"
              },
              {
                "id": "l3",
                "label": "Synthesis"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "The study of how history has been written and interpreted over time."
              },
              {
                "id": "r2",
                "label": "The idea that historical events are dependent on multiple prior conditions and were not inevitable."
              },
              {
                "id": "r3",
                "label": "Combining disparate historical elements into a cohesive, original argument."
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
              5,
              6
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 1,
          "hard": 3
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "world-history-401-l15-a1",
          "type": "mnemonic",
          "title": "Final Thought",
          "content": "You are no longer just reading history; you are writing it. Trust your evidence and build your case."
        }
      ]
    }
  ]
};
