import type { LearningModule } from "@/lib/modules/types";

export const us_civics_301_Module: LearningModule = {
  "id": "us-civics-301",
  "title": "U.S. Civics Systems and Analysis",
  "description": "Level 301 curriculum in U.S. Civics, emphasizing constitutional principles, institutional design, public policy, civic participation, and real-world decision quality through structured practice and assessment.",
  "subject": "Social Studies",
  "tags": [
    "civics",
    "government",
    "history",
    "curriculum",
    "interactive"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for constitutional principles and institutional design.",
    "Apply structured methods to plan, execute, and review public policy tasks.",
    "Interpret evidence using metrics, constraints, and context.",
    "Diagnose common challenges in civic initiatives and design effective responses.",
    "Communicate tradeoffs clearly to diverse audiences.",
    "Build repeatable systems for sustained improvement in civic analysis."
  ],
  "lessons": [
    {
      "id": "us-civics-301-l01",
      "title": "Foundational Concepts for Civic Analysis",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "us-civics-301-l01-a1",
          "type": "infographic",
          "title": "The Three Pillars of Civic Analysis",
          "content": "[Visual Prompt: An infographic showing a classical building. The roof is labeled 'Civic Analysis', supported by three pillars: 1. Defining Scope (illustrated with a magnifying glass), 2. Causal Thinking (illustrated with interlocking gears), and 3. Evidence-Based Accountability (illustrated with a balanced scale).] This infographic shows the relationship between defining scope, causal thinking, and accountability."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l01-c1",
          "kind": "concept",
          "title": "Defining the Scope of Inquiry",
          "content": "In advanced civic analysis, precision is key. We begin by establishing a clear vocabulary and defining the 'unit of analysis'—the specific law, policy, or issue we are examining. This ensures everyone is discussing the same topic within the same boundaries. By creating a shared understanding from the start, we can compare different analyses fairly and collaborate effectively, which is crucial for making sound judgments on complex civic matters."
        },
        {
          "id": "us-civics-301-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause, Effect, and Constraints",
          "content": "To effectively analyze U.S. Civics, we must understand the 'why' behind events, not just the 'what.' This involves examining our assumptions, mapping the connections between different factors, and identifying the real-world constraints (like budgets, constitutional limits, or public opinion) that limit our options. Focusing on root causes rather than symptoms allows us to develop more durable and effective solutions to civic challenges."
        },
        {
          "id": "us-civics-301-l01-c3",
          "kind": "recap",
          "title": "Evidence-Based Accountability",
          "content": "This lesson introduces three non-negotiable practices for reliable analysis: setting high standards for evidence, diligently documenting our process, and creating clear feedback loops for accountability. These disciplines ensure our work is trustworthy and that we can measure the real-world impact of our recommendations. They form the foundation for holding ourselves and our institutions accountable for results."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity, policy, or process you are evaluating to make a defensible decision."
        },
        {
          "id": "us-civics-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying the real-world limits (e.g., budget, laws, public opinion) that shape feasible options."
        },
        {
          "id": "us-civics-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality and relevance threshold that information must meet before it is used to support a decision."
        }
      ]
    },
    {
      "id": "us-civics-301-l02",
      "title": "Building a Policy Analysis Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "us-civics-301-l02-a1",
          "type": "diagram",
          "title": "Policy Workflow Template",
          "content": "[Visual Prompt: A blank flowchart template with four distinct, color-coded zones: Inputs (document icons), Analysis Steps (process boxes), Checkpoints (stop sign icons), and Outcomes (target icons).] A blank flowchart for learners to fill in, mapping out the lifecycle of policy analysis."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this activity, you will design a step-by-step workflow for analyzing a civic issue. This involves defining the necessary information (inputs), establishing quality checkpoints to review your work, clarifying the desired results (outputs), and creating contingency plans for potential problems. This hands-on exercise demonstrates how a structured process leads to more reliable analysis of constitutional principles and institutional designs."
        },
        {
          "id": "us-civics-301-l02-c2",
          "kind": "recap",
          "title": "Documenting Your Analysis",
          "content": "We recap the importance of documenting every key decision in your workflow. For each decision, record your rationale, the expected outcome, and how you will verify the result. This disciplined practice is essential for transparency, allowing you and others to review the chain of reasoning, learn from the process, and improve future analytical work."
        },
        {
          "id": "us-civics-301-l02-c3",
          "kind": "concept",
          "title": "Iterative Refinement",
          "content": "A workflow is never perfect on the first try. Iterative refinement involves running a policy through your workflow, identifying bottlenecks or blind spots, and adjusting the steps. This continuous loop ensures your analytical process adapts to new civic challenges and changing institutional constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-301-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Component Functions",
          "description": "Match each workflow component to its primary governance function.",
          "pairs": [
            {
              "left": "Reviewing Initial Information",
              "right": "Prevents low-quality data from distorting the analysis"
            },
            {
              "left": "Mid-point Review",
              "right": "Stops the propagation of early errors"
            },
            {
              "left": "Outcome Measurement",
              "right": "Verifies whether the objective was actually met"
            },
            {
              "left": "Post-Project Review",
              "right": "Captures lessons to improve the next cycle"
            }
          ]
        },
        {
          "id": "us-civics-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each potential problem into its correct risk category.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Conflicting policy objectives",
              "bucket": "Strategic"
            },
            {
              "text": "Poor coordination between government agencies",
              "bucket": "Operational"
            },
            {
              "text": "Vague standards for what success looks like",
              "bucket": "Quality"
            },
            {
              "text": "No data on the problem before the policy was enacted",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-301-l03-a1",
          "type": "tip",
          "title": "Review Your Notes",
          "content": "[Visual Prompt: An icon of a glowing lightbulb next to an open notebook.] Before starting, quickly review your notes and the flashcards from Lessons 1 and 2."
        }
      ],
      "questions": [
        {
          "id": "us-civics-301-l03-q1",
          "text": "Which action best improves decisions when analyzing constitutional principles?",
          "skillId": "us-civics-301-skill-core",
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
              "text": "Avoid documenting your rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve the reliability and transferability of your analysis."
        },
        {
          "id": "us-civics-301-l03-q2",
          "text": "In institutional design, what is the strongest indicator of a high-quality process?",
          "skillId": "us-civics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Speed of completion only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured work without documentation"
            },
            {
              "id": "d",
              "text": "Anecdotes about one-time performance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality processes are observable, repeatable, and measurable, ensuring consistency and reliability."
        },
        {
          "id": "us-civics-301-l03-q3",
          "text": "When evaluating public policy, which practice supports trustworthy conclusions?",
          "skillId": "us-civics-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore inconvenient data or edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and analyze failures"
            },
            {
              "id": "c",
              "text": "Change success targets after the results are known"
            },
            {
              "id": "d",
              "text": "Remove important context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and analyzing failures prevent overclaiming and lead to better policy design."
        },
        {
          "id": "us-civics-301-l03-q4",
          "text": "A mature civic participation strategy should prioritize:",
          "skillId": "us-civics-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Achieving one goal at any cost"
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
              "text": "No review after the strategy is implemented"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced approach ensures that long-term performance and accountability are not sacrificed for short-term gains."
        }
      ]
    },
    {
      "id": "us-civics-301-l04",
      "title": "Measuring Success and Learning from Setbacks",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "us-civics-301-l04-a1",
          "type": "mnemonic",
          "title": "The A.I.M. Framework",
          "content": "[Visual Prompt: A visual mnemonic poster featuring a target board with an arrow in the bullseye. 'A' (Analyze challenges) is paired with a magnifying glass, 'I' (Identify metrics) with an upward-trending line chart, and 'M' (Match methods) with puzzle pieces fitting together.] A.I.M. for better policy: Analyze potential challenges, Identify key metrics, and Match methods to the problem."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "Choosing the right analytical method is a critical decision. You must consider factors like the project's constraints, the quality of available information, and the potential cost of being wrong. In this lesson, you will learn to compare alternative methods and justify your choice for a given U.S. Civics scenario, ensuring your approach is fit for the purpose."
        },
        {
          "id": "us-civics-301-l04-c2",
          "kind": "example",
          "title": "Designing Effective Metrics",
          "content": "A strong measurement framework connects leading indicators (early signs of progress) with lagging outcomes (final results). For example, to reduce pollution (lagging outcome), a leading indicator might be the number of factories adopting new emission standards. This framework should also include diagnostic metrics to help you detect and correct course when you deviate from your plan."
        },
        {
          "id": "us-civics-301-l04-c3",
          "kind": "recap",
          "title": "Classifying and Addressing Challenges",
          "content": "We recap a system for classifying challenges into common categories: informational gaps, procedural flaws, implementation issues, and oversight problems. By categorizing challenges, we can move beyond generic solutions and develop targeted plans that address the specific root cause, leading to more effective and lasting improvements."
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-301-l04-f1",
          "front": "Leading indicator",
          "back": "An early, predictive metric that suggests future outcomes before the final results are in."
        },
        {
          "id": "us-civics-301-l04-f2",
          "front": "Challenge classification",
          "back": "A structured system for categorizing problems to better understand their root causes and design targeted solutions."
        },
        {
          "id": "us-civics-301-l04-f3",
          "front": "Cost of error",
          "back": "The negative operational, financial, or social impact caused by an incorrect decision or failed policy."
        }
      ]
    },
    {
      "id": "us-civics-301-l05",
      "title": "Case Study: Analyzing a Civic Initiative",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "us-civics-301-l05-a1",
          "type": "document",
          "title": "Case Brief: The 'Clean Streets' Initiative",
          "content": "[Visual Prompt: A realistic-looking, one-page government brief titled 'Clean Streets Initiative'. It features a fictional city seal at the top, a budget breakdown pie chart, and bulleted lists detailing goals and current sanitation roadblocks.] A summary of a fictional city's initiative to improve sanitation, including its goals, budget, and initial challenges."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-301-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Case",
          "content": "In this interactive case study, you will deconstruct a realistic civic scenario. Your task is to identify the main objective, the surrounding context, the key constraints, and the available intervention strategies. For each potential strategy, you will analyze the associated tradeoffs, deepening your understanding of the complex decisions civic leaders face."
        },
        {
          "id": "us-civics-301-l05-c2",
          "kind": "recap",
          "title": "Proposing a Solution",
          "content": "Based on your analysis, you will formulate a structured improvement proposal. This proposal must include clear success criteria, a plan that assigns responsibility for each task, and a timeline for implementation and follow-up. This exercise will challenge you to translate your analysis into a practical, actionable plan that ensures accountability."
        },
        {
          "id": "us-civics-301-l05-c3",
          "kind": "concept",
          "title": "Communicating Tradeoffs to Stakeholders",
          "content": "The final step in any civic analysis is communication. You must present your findings, including the inevitable tradeoffs, clearly and objectively to diverse audiences—from policymakers to the general public. Effective communication builds trust and consensus, turning a theoretical policy proposal into an actionable civic initiative."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve public policy outcomes under time and quality constraints.",
          "instructions": [
            "Define your success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit for your chosen path.",
            "Specify a metric that will confirm if your intervention was successful in the next cycle."
          ]
        },
        {
          "id": "us-civics-301-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each intervention with its most likely system-level effect.",
          "pairs": [
            {
              "left": "Stricter criteria for proposed projects",
              "right": "Higher quality inputs and less downstream rework"
            },
            {
              "left": "Automated progress alerts",
              "right": "Faster detection of preventable delays or defects"
            },
            {
              "left": "After-action review",
              "right": "Improved learning and adaptation in future cycles"
            },
            {
              "left": "Inter-agency communication",
              "right": "Reduced ambiguity and errors at handoff points"
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-301-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-301-l06-a1",
          "type": "tip",
          "title": "Apply the Case Study",
          "content": "[Visual Prompt: An icon of a magnifying glass hovering over a document.] Think about how the concepts from Lesson 4 were applied in the Lesson 5 case study."
        }
      ],
      "questions": [
        {
          "id": "us-civics-301-l06-q1",
          "text": "When analyzing a new, complex civic issue with limited historical data, which is the most appropriate first step?",
          "skillId": "us-civics-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Launch a full-scale program immediately"
            },
            {
              "id": "b",
              "text": "Run a small, low-cost pilot program to gather data"
            },
            {
              "id": "c",
              "text": "Select a method based on what is most popular"
            },
            {
              "id": "d",
              "text": "Avoid the issue until more data is available"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A pilot program is a sound method for gathering necessary data and testing assumptions when information is scarce and the cost of error is high."
        },
        {
          "id": "us-civics-301-l06-q2",
          "text": "A city wants to increase public library usage. Which of the following is the strongest *leading indicator* of success?",
          "skillId": "us-civics-301-skill-process",
          "options": [
            {
              "id": "a",
              "text": "The number of books in the library at the end of the year"
            },
            {
              "id": "b",
              "text": "The number of new library cards issued in the first month"
            },
            {
              "id": "c",
              "text": "The total city budget for the year"
            },
            {
              "id": "d",
              "text": "Final resident satisfaction scores after one year"
            }
          ],
          "correctOptionId": "b",
          "explanation": "New library cards are an early, predictive sign of engagement that signals whether the final goal (increased usage) is likely to be met."
        },
        {
          "id": "us-civics-301-l06-q3",
          "text": "A new public health program is well-funded and well-staffed, but it fails to reach its intended audience in rural areas. This is most likely an example of what kind of challenge?",
          "skillId": "us-civics-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "An informational gap"
            },
            {
              "id": "b",
              "text": "An implementation challenge"
            },
            {
              "id": "c",
              "text": "A procedural flaw"
            },
            {
              "id": "d",
              "text": "An oversight problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The problem lies not in the plan or resources, but in the practical execution and delivery of the service to the target population."
        },
        {
          "id": "us-civics-301-l06-q4",
          "text": "In a policy debate, one proposal is fast and low-cost but has potential long-term environmental risks. This situation requires a careful analysis of the tradeoff between:",
          "skillId": "us-civics-301-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Public opinion and legal precedent"
            },
            {
              "id": "b",
              "text": "Short-term efficiency and long-term sustainability"
            },
            {
              "id": "c",
              "text": "Data privacy and government transparency"
            },
            {
              "id": "d",
              "text": "Historical context and future innovation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is a classic tradeoff, forcing a decision between immediate benefits (speed, cost) and potential future consequences (sustainability, risk)."
        }
      ]
    }
  ]
};
