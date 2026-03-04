import type { LearningModule } from "@/lib/modules/types";

export const DigitalMarketing301Module: LearningModule = {
  "id": "digital-marketing-301",
  "title": "Digital Marketing Systems and Analysis",
  "description": "Level 301 curriculum in Digital Marketing, emphasizing audience strategy, campaign analytics, channel optimization, growth experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "marketing",
    "analytics"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for audience strategy and campaign analytics",
    "Apply structured methods to plan, execute, and review channel optimization tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Digital Marketing"
  ],
  "lessons": [
    {
      "id": "digital-marketing-301-l01",
      "title": "Core Models for Digital Marketing",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "digital-marketing-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Digital Marketing at level 301, using clear and precise language is essential for effective communication. This involves establishing clear boundaries for the topics we discuss, identifying the specific components we are analyzing, and ensuring that everyone is using the same terminology. By doing this, we create a common understanding among team members. When teams make decisions, having a shared vocabulary allows us to easily compare their choices and understand each other's perspectives better. This clarity not only enhances collaboration but also improves the overall effectiveness of our marketing strategies."
        },
        {
          "id": "digital-marketing-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "In the world of Digital Marketing, achieving great results requires us to dig deeper than just looking at the final outcomes. It's important to understand the reasons behind why we get certain results. In this lesson, we will take a closer look at the assumptions we often make about our marketing strategies, the dependencies that connect different elements of our campaigns, and the constraints or limitations we might encounter. By identifying these factors, we can focus on solving the real problems at their source, rather than just addressing the visible symptoms. This approach will help us create more effective marketing strategies and achieve better results overall."
        },
        {
          "id": "digital-marketing-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this lesson, we will introduce some important practices that are essential for executing our plans reliably. These include setting high standards for evidence, maintaining a disciplined approach to logging our activities, and creating clear accountability loops. These practices help ensure that we can trust the results of our work and learn from our experiences.\nContext recap: In this lesson, we will introduce some important practices that are essential for executing our plans reliably. These include setting high standards for evidence, maintaining a disciplined approach to logging our activities, and creating clear accountability loops. These practices help ensure that we can trust the results of our work and learn from our experiences."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "digital-marketing-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "digital-marketing-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "digital-marketing-301-l02",
      "title": "Digital Marketing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "digital-marketing-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive activity, you will have the opportunity to create a complete workflow for your audience strategy and campaign analytics. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to address any issues that may arise. This hands-on experience will help you understand how to effectively manage a digital marketing campaign.\nContext recap: In this interactive activity, you will have the opportunity to create a complete workflow for your audience strategy and campaign analytics. This includes identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to address any issues that may arise. This hands-on experience will help you understand how to effectively manage a digital marketing campaign."
        },
        {
          "id": "digital-marketing-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision you make during your marketing campaigns. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will enable you to analyze the outcomes after the campaign is completed, helping you learn and improve for future efforts.\nContext recap: In this recap, we will emphasize the importance of logging every decision you make during your marketing campaigns. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will enable you to analyze the outcomes after the campaign is completed, helping you learn and improve for future efforts."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-301-l02-act1",
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
          "id": "digital-marketing-301-l02-act2",
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
      "id": "digital-marketing-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-301-l03-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "digital-marketing-301-skill-core",
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
          "id": "digital-marketing-301-l03-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "digital-marketing-301-skill-process",
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
          "id": "digital-marketing-301-l03-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "digital-marketing-301-skill-eval",
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
          "id": "digital-marketing-301-l03-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "digital-marketing-301-skill-strategy",
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
      "id": "digital-marketing-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Digital Marketing",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "digital-marketing-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When choosing methods for your digital marketing projects, you need to think about several important factors. These include any limitations you might face, the quality of the information you have, and how much it could cost you if you make a mistake. In this lesson, you will explore various options and explain why a certain method works best for different situations in Digital Marketing. This process of comparing and justifying your choices will enhance your critical thinking skills and help you make smarter decisions in your marketing strategies.\nContext recap: When choosing methods for your digital marketing projects, you need to think about several important factors. These include any limitations you might face, the quality of the information you have, and how much it could cost you if you make a mistake. In this lesson, you will explore various options and explain why a certain method works best for different situations in Digital Marketing. This process of comparing and justifying your choices will enhance your critical thinking skills and help you make smarter decisions in your marketing strategies."
        },
        {
          "id": "digital-marketing-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-structured metric architecture is essential for successful digital marketing. It creates a connection between leading indicators, which are signs that help predict future performance, and lagging outcomes, which reflect past results. Additionally, it includes diagnostic measures that assist in identifying any problems. This framework enables teams to notice any deviations from their goals early on and respond thoughtfully, ensuring that their marketing campaigns stay on track and achieve the desired results.\nContext recap: A well-structured metric architecture is essential for successful digital marketing. It creates a connection between leading indicators, which are signs that help predict future performance, and lagging outcomes, which reflect past results. Additionally, it includes diagnostic measures that assist in identifying any problems. This framework enables teams to notice any deviations from their goals early on and respond thoughtfully, ensuring that their marketing campaigns stay on track and achieve the desired results."
        },
        {
          "id": "digital-marketing-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main groups: data issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using generic solutions. This targeted approach will help improve our digital marketing strategies.\nContext recap: In this recap, we will categorize failures into four main groups: data issues, process problems, execution errors, and governance challenges. By organizing failures this way, we can create specific plans to address each type of issue rather than using generic solutions. This targeted approach will help improve our digital marketing strategies."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "digital-marketing-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "digital-marketing-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "digital-marketing-301-l05",
      "title": "Case Studio: Improve a Digital Marketing System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "digital-marketing-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic scenario into its key components: the objective, the context in which it occurs, the constraints you face, and the options for intervention. You will also note any trade-offs involved in your decisions. This exercise will help you think critically about how to improve a digital marketing system.\nContext recap: In this interactive case study, you will break down a realistic scenario into its key components: the objective, the context in which it occurs, the constraints you face, and the options for intervention. You will also note any trade-offs involved in your decisions. This exercise will help you think critically about how to improve a digital marketing system."
        },
        {
          "id": "digital-marketing-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a staged improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This structured approach will help ensure that your improvements are actionable and measurable.\nContext recap: In this recap, you will present a staged improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This structured approach will help ensure that your improvements are actionable and measurable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve channel optimization outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "digital-marketing-301-l05-act2",
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
      "id": "digital-marketing-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-301-l06-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "digital-marketing-301-skill-core",
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
          "id": "digital-marketing-301-l06-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "digital-marketing-301-skill-process",
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
          "id": "digital-marketing-301-l06-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "digital-marketing-301-skill-eval",
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
          "id": "digital-marketing-301-l06-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "digital-marketing-301-skill-strategy",
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
