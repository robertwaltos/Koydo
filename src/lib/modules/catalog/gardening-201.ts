import type { LearningModule } from "@/lib/modules/types";

export const Gardening201Module: LearningModule = {
  "id": "gardening-201",
  "title": "Gardening Applied Practice",
  "description": "Level 201 curriculum in Gardening, emphasizing soil systems, plant care, season planning, integrated pest management, and real-world decision quality through structured practice and assessment.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "applied-science"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for soil systems and plant care",
    "Apply structured methods to plan, execute, and review season planning tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Gardening"
  ],
  "lessons": [
    {
      "id": "gardening-201-l01",
      "title": "Core Models for Gardening",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Gardening 201, using clear and specific language is essential for effective communication. We will explore how to establish clear boundaries for our gardening projects, which helps us understand what is included and what is not. Additionally, we will identify the main focus of our analysis, which is the key aspect we will be examining closely. By using consistent terms throughout our discussions, everyone on the team will be able to make decisions that are easily compared and understood by all members. This clarity will help us work together more effectively and achieve our gardening goals."
        },
        {
          "id": "gardening-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To achieve success in gardening, it's really important to grasp the reasons why things happen, not just the outcomes we see. In this lesson, we will dive into our assumptions about gardening, examine how different factors are connected, and identify any challenges or limitations we might encounter. By doing this, we can learn to focus on solving the root causes of problems instead of just addressing the surface issues. This deeper understanding will empower us to make better decisions and improve our gardening practices overall.\nContext recap: To achieve success in gardening, it's really important to grasp the reasons why things happen, not just the outcomes we see. In this lesson, we will dive into our assumptions about gardening, examine how different factors are connected, and identify any challenges or limitations we might encounter. By doing this, we can learn to focus on solving the root causes of problems instead of just addressing the surface issues. This deeper understanding will empower us to make better decisions and improve our gardening practices overall."
        },
        {
          "id": "gardening-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this lesson, we will introduce important practices that help ensure our gardening projects are successful. These include setting standards for evidence, keeping detailed records of our work, and creating clear accountability systems. These practices are essential for making sure that our gardening efforts are reliable and effective.\nContext recap: In this lesson, we will introduce important practices that help ensure our gardening projects are successful. These include setting standards for evidence, keeping detailed records of our work, and creating clear accountability systems. These practices are essential for making sure that our gardening efforts are reliable and effective."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "gardening-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "gardening-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "gardening-201-l02",
      "title": "Gardening Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "gardening-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this engaging activity, you will have the opportunity to design a comprehensive workflow that focuses on managing soil systems and taking care of plants. Your task will involve several important steps: first, you will identify the necessary inputs, such as soil nutrients and water. Next, you will set specific checkpoints to monitor the progress of your plants and soil health. After that, you will determine the expected outputs, which could include healthy plants or increased soil fertility. Finally, you will establish rollback triggers, which are important strategies to address any problems that may arise during the gardening process. This hands-on experience will help you understand the interconnectedness of soil management and plant care, making you a more effective gardener!"
        },
        {
          "id": "gardening-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcomes, and a point for verification. This will help us analyze our work after it is completed and learn from our experiences.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during our gardening projects. Each decision should include the reasoning behind it, the expected outcomes, and a point for verification. This will help us analyze our work after it is completed and learn from our experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-201-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its strongest governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality data from entering the system"
            },
            {
              "left": "Checkpoint gate",
              "right": "Stops propagation of known defects"
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the objective was met"
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons for next iteration"
            }
          ]
        },
        {
          "id": "gardening-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort items into strategic, operational, and quality-risk groups.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria",
              "bucket": "Quality"
            },
            {
              "text": "No benchmark baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-201-l03-q1",
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-201-l03-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-201-l03-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-201-l03-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    },
    {
      "id": "gardening-201-l04",
      "title": "Methods, Metrics, and Failure Modes in Gardening",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we decide on the best methods for gardening, it's important to think about several key factors. First, we need to recognize any limitations we might face, such as the space we have available or the types of plants we want to grow. Next, we should evaluate the quality of the information we possess, which can help us make informed choices. Lastly, we must consider the potential costs of making mistakes, as errors can lead to wasted time and resources. In this lesson, you will explore various gardening methods, compare their advantages and disadvantages, and explain why some methods work better in certain gardening situations than others. This will help you become a more effective gardener by making thoughtful decisions based on your unique circumstances."
        },
        {
          "id": "gardening-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-organized metric system is like a roadmap for our gardening efforts. It connects three important parts: leading indicators, which are signs that show how things are going; lagging outcomes, which tell us what happened after we took action; and diagnostic measures, which help us understand why things happened. By linking these elements together, our gardening teams can spot any changes from our original plan early on. This way, we can think carefully about how to adjust our strategies and improve our gardening practices. In this lesson, we will learn how to build this metric architecture step by step, so we can become better gardeners and achieve our goals more effectively."
        },
        {
          "id": "gardening-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will explore how to categorize failures in gardening into four important groups: data issues, process problems, execution errors, and governance challenges. By understanding these categories, we can develop tailored plans to effectively address each type of failure. This way, we avoid using a generic approach and instead focus on specific solutions that will help us succeed in our gardening efforts.\nContext recap: In this recap, we will explore how to categorize failures in gardening into four important groups: data issues, process problems, execution errors, and governance challenges. By understanding these categories, we can develop tailored plans to effectively address each type of failure. This way, we avoid using a generic approach and instead focus on specific solutions that will help us succeed in our gardening efforts."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "gardening-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "gardening-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "gardening-201-l05",
      "title": "Case Studio: Improve a Gardening System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "gardening-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic gardening scenario into its key components: the objectives, the context in which it occurs, any constraints we might face, and the options for interventions. You will also note any trade-offs that need to be considered.\nContext recap: In this interactive case study, you will break down a realistic gardening scenario into its key components: the objectives, the context in which it occurs, any constraints we might face, and the options for interventions. You will also note any trade-offs that need to be considered."
        },
        {
          "id": "gardening-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured proposal for improving the gardening system. This proposal should include clear criteria for success, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions to ensure progress is made.\nContext recap: In this recap, you will present a structured proposal for improving the gardening system. This proposal should include clear criteria for success, identify who will be responsible for each part of the plan, and outline a timeline for follow-up actions to ensure progress is made."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve season planning outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "gardening-201-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect interventions with the most likely system-level effects.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Higher signal quality and lower downstream rework"
            },
            {
              "left": "Checkpoint automation",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Post-run retrospective",
              "right": "Improved adaptation in later cycles"
            },
            {
              "left": "Cross-team briefing",
              "right": "Reduced ambiguity at handoff boundaries"
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "gardening-201-l06-q1",
          "text": "Which action best improves decisions in soil systems work?",
          "skillId": "gardening-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "gardening-201-l06-q2",
          "text": "In plant care, what is the strongest indicator of process quality?",
          "skillId": "gardening-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "gardening-201-l06-q3",
          "text": "When evaluating season planning, which practice supports trustworthy conclusions?",
          "skillId": "gardening-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "gardening-201-l06-q4",
          "text": "A mature integrated pest management strategy should prioritize:",
          "skillId": "gardening-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    }
  ]
};
