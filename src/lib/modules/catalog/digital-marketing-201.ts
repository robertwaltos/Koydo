import type { LearningModule } from "@/lib/modules/types";

export const DigitalMarketing201Module: LearningModule = {
  "id": "digital-marketing-201",
  "title": "Digital Marketing Applied Practice",
  "description": "Level 201 curriculum in Digital Marketing, emphasizing audience strategy, campaign analytics, channel optimization, growth experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "marketing",
    "analytics"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "intermediate",
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
      "id": "digital-marketing-201-l01",
      "title": "Core Models for Digital Marketing",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "digital-marketing-201-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In Digital Marketing at level 201, using clear and specific language is essential for our success. We will explore how to define the boundaries of our work, which means understanding what is included in our projects and what is not. Additionally, we will identify the main focus of our analysis, which helps us understand what we are studying or measuring. By ensuring that everyone uses the same terms, we create a common language that allows us to communicate effectively. This clarity helps us make better decisions and enables different teams to compare their results accurately, leading to improved collaboration and outcomes."
        },
        {
          "id": "digital-marketing-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To achieve success in Digital Marketing, it is crucial to dig deeper and understand the reasons behind our results, rather than just looking at the results themselves. In this lesson, we will learn how to identify our assumptions—these are the beliefs we hold that may influence our decisions. We will also explore the connections between different factors that can affect our marketing efforts, which we call dependencies. Additionally, we will discuss the limitations or constraints we might encounter in our strategies. By focusing on these key areas, we can work towards addressing the root causes of any challenges we face, rather than simply treating the symptoms. This approach will help us create more effective marketing strategies that truly resonate with our audience and lead to better outcomes."
        },
        {
          "id": "digital-marketing-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we will introduce important practices that help ensure our work is reliable and trustworthy. We will discuss the importance of having clear evidence standards, maintaining a disciplined approach to logging our activities, and creating accountability loops. These practices are essential for making sure that our digital marketing efforts are executed effectively.\nContext recap: In this section, we will introduce important practices that help ensure our work is reliable and trustworthy. We will discuss the importance of having clear evidence standards, maintaining a disciplined approach to logging our activities, and creating accountability loops. These practices are essential for making sure that our digital marketing efforts are executed effectively."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "digital-marketing-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "digital-marketing-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "digital-marketing-201-l02",
      "title": "Digital Marketing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "digital-marketing-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will have the opportunity to create a complete workflow for developing an audience strategy and analyzing campaign performance. This will include identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to address any issues that may arise.\nContext recap: In this interactive lab, you will have the opportunity to create a complete workflow for developing an audience strategy and analyzing campaign performance. This will include identifying the necessary inputs, establishing checkpoints to monitor progress, determining the expected outputs, and setting up rollback triggers to address any issues that may arise."
        },
        {
          "id": "digital-marketing-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of logging every decision made during the marketing process. Each decision should be accompanied by a clear explanation of the reasoning behind it, the expected outcomes, and a point for verification. This practice will enable us to analyze our results after the campaign is completed and learn from our experiences.\nContext recap: In this recap, we will emphasize the importance of logging every decision made during the marketing process. Each decision should be accompanied by a clear explanation of the reasoning behind it, the expected outcomes, and a point for verification. This practice will enable us to analyze our results after the campaign is completed and learn from our experiences."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-201-l02-act1",
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
          "id": "digital-marketing-201-l02-act2",
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
      "id": "digital-marketing-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-201-l03-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "digital-marketing-201-skill-core",
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
          "id": "digital-marketing-201-l03-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "digital-marketing-201-skill-process",
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
          "id": "digital-marketing-201-l03-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "digital-marketing-201-skill-eval",
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
          "id": "digital-marketing-201-l03-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "digital-marketing-201-skill-strategy",
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
      "id": "digital-marketing-201-l04",
      "title": "Methods, Metrics, and Failure Modes in Digital Marketing",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "digital-marketing-201-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our digital marketing projects, it's important to think about several key factors. First, we need to look at any constraints we might have, like time or budget limits. Next, we should consider the quality of the information we have—good information helps us make better decisions. Finally, we must think about the cost of making mistakes; some errors can be very expensive. In this lesson, we will explore different methods and compare them. We will also discuss why some methods work better than others in specific digital marketing situations, helping us make informed choices in our marketing strategies."
        },
        {
          "id": "digital-marketing-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-organized metric architecture is like a map for a digital marketing team. It connects three important parts: leading indicators, which are signs that help us predict how well we might do in the future; lagging outcomes, which show us the results of our past efforts; and diagnostic measures, which help us understand what is currently happening in our campaigns. By using this structure, teams can spot any changes or problems early on, allowing them to make thoughtful decisions to keep their marketing efforts on the right path and achieve their goals."
        },
        {
          "id": "digital-marketing-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize failures into four main areas: data, process, execution, and governance. By grouping failures this way, we can create specific plans to address each type of issue rather than using a one-size-fits-all approach. This targeted strategy will help us improve our digital marketing efforts.\nContext recap: In this recap, we will categorize failures into four main areas: data, process, execution, and governance. By grouping failures this way, we can create specific plans to address each type of issue rather than using a one-size-fits-all approach. This targeted strategy will help us improve our digital marketing efforts."
        }
      ],
      "flashcards": [
        {
          "id": "digital-marketing-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "digital-marketing-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "digital-marketing-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "digital-marketing-201-l05",
      "title": "Case Studio: Improve a Digital Marketing System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "digital-marketing-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "digital-marketing-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, we will break down a realistic marketing scenario into its key components, including the main objective, the context in which it operates, any constraints we need to consider, and the various options for intervention. We will also take notes on the trade-offs involved in each option to make informed decisions.\nContext recap: In this interactive case study, we will break down a realistic marketing scenario into its key components, including the main objective, the context in which it operates, any constraints we need to consider, and the various options for intervention. We will also take notes on the trade-offs involved in each option to make informed decisions."
        },
        {
          "id": "digital-marketing-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, learners will present a structured proposal for improving the digital marketing system. This proposal will include clear criteria for success, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This approach ensures that everyone knows their role and what to expect moving forward.\nContext recap: In this recap, learners will present a structured proposal for improving the digital marketing system. This proposal will include clear criteria for success, a mapping of who is responsible for each part of the plan, and a timeline for follow-up actions. This approach ensures that everyone knows their role and what to expect moving forward."
        }
      ],
      "interactiveActivities": [
        {
          "id": "digital-marketing-201-l05-act1",
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
          "id": "digital-marketing-201-l05-act2",
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
      "id": "digital-marketing-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "digital-marketing-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "digital-marketing-201-l06-q1",
          "text": "Which action best improves decisions in audience strategy work?",
          "skillId": "digital-marketing-201-skill-core",
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
          "id": "digital-marketing-201-l06-q2",
          "text": "In campaign analytics, what is the strongest indicator of process quality?",
          "skillId": "digital-marketing-201-skill-process",
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
          "id": "digital-marketing-201-l06-q3",
          "text": "When evaluating channel optimization, which practice supports trustworthy conclusions?",
          "skillId": "digital-marketing-201-skill-eval",
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
          "id": "digital-marketing-201-l06-q4",
          "text": "A mature growth experimentation strategy should prioritize:",
          "skillId": "digital-marketing-201-skill-strategy",
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
