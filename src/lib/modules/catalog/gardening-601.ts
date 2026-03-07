import type { LearningModule } from "@/lib/modules/types";

export const Gardening601Module: LearningModule = {
  "id": "gardening-601",
  "title": "Gardening Research and Leadership",
  "description": "An advanced module on agricultural leadership, focusing on diagnosing complex systems, designing robust operations, analyzing impacts and trade-offs, and implementing effective governance through case studies, simulations, and expert review.",
  "subject": "Agriculture",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "gardening",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Diagnose complex problems in agricultural systems under challenging conditions.",
    "Design and manage robust agricultural operations with clear checkpoints and controls.",
    "Evaluate the impact of agricultural interventions with research-grade rigor, considering all trade-offs.",
    "Develop and implement fair governance systems with clear accountability and escalation paths.",
    "Lead decision-making processes, clearly communicating trade-offs to diverse stakeholders.",
    "Defend strategic recommendations to expert panels using evidence-based arguments and acknowledging uncertainty."
  ],
  "lessons": [
    {
      "id": "gardening-601-l01",
      "title": "Foundations of Agricultural Systems Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-601-l01-a1",
          "type": "image",
          "title": "Systems Thinking in Agriculture",
          "content": "Learn to see a garden or farm as an interconnected system. Define its boundaries, identify key components, and map the relationships between them.",
          "visualPrompt": "An animated diagram showing a farm with interconnected nodes for soil, water, plants, pests, and human inputs, illustrating the flow of energy and resources."
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l01-c1",
          "kind": "concept",
          "title": "Defining the System: Scope and Boundaries",
          "content": "Effective analysis begins with a clear scope. We will learn to define the boundaries of an agricultural system—whether a single raised bed, a community garden, or a regional watershed—to focus our diagnostic efforts and set clear, achievable goals."
        },
        {
          "id": "gardening-601-l01-c2",
          "kind": "concept",
          "title": "Modeling Causes and Effects",
          "content": "In this section, we will map the causal links within a garden system. For example, how does soil pH affect nutrient availability, and how does that, in turn, influence plant growth and pest resistance? Understanding these pathways and their uncertainties is key to planning effective interventions."
        },
        {
          "id": "gardening-601-l01-c3",
          "kind": "recap",
          "title": "Using Evidence to Make Claims",
          "content": "We will recap the importance of grounding all claims in measurable evidence. This means using data from soil tests, yield logs, and pest counts to support our conclusions, and establishing confidence levels for our recommendations."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-601-l01-f1",
          "front": "Agricultural Systems Diagnostics",
          "back": "The structured process of identifying root causes of problems in a farm or garden by analyzing its interconnected parts."
        },
        {
          "id": "gardening-601-l01-f2",
          "front": "Operational Design",
          "back": "The planning of workflows, tasks, and schedules that determines how reliably a garden or farm can produce desired outcomes, especially under stress."
        },
        {
          "id": "gardening-601-l01-f3",
          "front": "Impact and Trade-off Analysis",
          "back": "The discipline of evaluating an intervention's full effects, including intended benefits, unintended side effects, and hidden costs."
        }
      ]
    },
    {
      "id": "gardening-601-l02",
      "title": "Lab: Designing Agricultural Interventions",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "gardening-601-l02-a1",
          "type": "practice",
          "title": "Guided Practice: Workflow Design",
          "content": "Design a detailed workflow for a common agricultural task, such as introducing beneficial insects for pest control. Include steps, checkpoints, and criteria for success.",
          "visualPrompt": "A user-friendly flowchart builder interface where a learner can drag and drop steps like 'Assess Pest Levels,' 'Order Insects,' 'Release Insects,' and 'Monitor Effectiveness.'"
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Workflows",
          "content": "In this interactive lab, you will design a specialized workflow for a complex agricultural task. You will then test its resilience by running simulations of adverse scenarios, such as a sudden drought or an equipment failure, to identify and fix potential weaknesses."
        },
        {
          "id": "gardening-601-l02-c2",
          "kind": "recap",
          "title": "Building in Checkpoints and Safeguards",
          "content": "We will recap how to build a robust workflow. This includes integrating regular checkpoints to assess progress, defining criteria for when to pause or reverse a course of action, and setting clear thresholds for when a problem needs to be escalated to leadership."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-601-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Actions to Outcomes",
          "description": "Match the management practice with its primary benefit for system reliability and governance.",
          "pairs": [
            {
              "left": "Pre-planting soil analysis",
              "right": "Prevents nutrient deficiencies and costly soil amendments later."
            },
            {
              "left": "Emergency irrigation plan",
              "right": "Minimizes crop loss during an unexpected drought."
            },
            {
              "left": "Weekly pest monitoring dashboard",
              "right": "Allows for early intervention before an infestation becomes severe."
            },
            {
              "left": "End-of-season review meeting",
              "right": "Improves the quality of planning for the next growing cycle."
            }
          ]
        }
      ]
    },
    {
      "id": "gardening-601-l03",
      "title": "Checkpoint 1: Methods and Design",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "gardening-601-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Assess your understanding of systems analysis and operational design principles.",
          "visualPrompt": "A clean, simple quiz interface with a progress bar at the top."
        }
      ],
      "questions": [
        {
          "id": "gardening-601-l03-q1",
          "text": "When diagnosing problems in an agricultural system, which practice leads to the best decisions?",
          "skillId": "gardening-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Act quickly based on initial observations."
            },
            {
              "id": "b",
              "text": "Define assumptions, identify constraints, and use measurable indicators."
            },
            {
              "id": "c",
              "text": "Focus only on the most visible symptom."
            },
            {
              "id": "d",
              "text": "Assume the problem will resolve itself over time."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions are based on a structured approach where assumptions, constraints, and metrics are made explicit."
        },
        {
          "id": "gardening-601-l03-q2",
          "text": "A robust plan for agricultural operations should always include:",
          "skillId": "gardening-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear roles, a schedule for checkpoints, and rules for when to escalate issues."
            },
            {
              "id": "b",
              "text": "Vague responsibilities and a flexible, undocumented process."
            },
            {
              "id": "c",
              "text": "A 'set it and forget it' approach with no follow-up reviews."
            },
            {
              "id": "d",
              "text": "A single plan with no backup or contingency options."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, scheduled reviews, and pre-defined rules for handling problems."
        },
        {
          "id": "gardening-601-l03-q3",
          "text": "A defensible analysis of a new farming technique must include:",
          "skillId": "gardening-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Only personal stories and anecdotes."
            },
            {
              "id": "b",
              "text": "Comparison to a baseline, analysis of side effects, and an estimate of uncertainty."
            },
            {
              "id": "c",
              "text": "Changing the definition of success after seeing the results."
            },
            {
              "id": "d",
              "text": "Ignoring any data that contradicts the desired outcome."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A credible analysis requires comparing results to a control group, considering all impacts, and acknowledging what you don't know."
        },
        {
          "id": "gardening-601-l03-q4",
          "text": "A mature governance system for a community garden connects:",
          "skillId": "gardening-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The garden's mission, measurable rules, and a process for resolving issues."
            },
            {
              "id": "b",
              "text": "A mission statement with no enforceable rules."
            },
            {
              "id": "c",
              "text": "Goals without assigning responsibility to anyone."
            },
            {
              "id": "d",
              "text": "Day-to-day work with no transparent accountability."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Good governance links the overall goal (intent) to specific actions (measurement) and a plan for when things go wrong (corrective action)."
        }
      ]
    },
    {
      "id": "gardening-601-l04",
      "title": "Case Study: Analyzing Agricultural Trade-offs",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "gardening-601-l04-a1",
          "type": "image",
          "title": "The Urban Farm Dilemma",
          "content": "Analyze a case study of a community farm facing competing demands: maximizing food production, minimizing water usage, and ensuring equitable access for all members.",
          "visualPrompt": "A split-screen image. On one side, a lush, productive garden. On the other, a water meter showing high usage and a sign-up sheet with a long waiting list."
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l04-c1",
          "kind": "concept",
          "title": "Analyzing a Complex Case Study",
          "content": "In this lesson, we will dissect a real-world case study that highlights the competing constraints in agriculture. We will analyze the impacts of different farming practices and the difficult trade-offs leaders must make."
        },
        {
          "id": "gardening-601-l04-c2",
          "kind": "practice",
          "title": "Evaluating Competing Priorities",
          "content": "Using the case study, you will compare different strategic options. We will evaluate each option against key dimensions like cost, environmental impact, community equity, and operational reliability to practice making balanced, informed decisions."
        },
        {
          "id": "gardening-601-l04-c3",
          "kind": "recap",
          "title": "Structuring a Recommendation",
          "content": "We will recap how to structure a formal recommendation. A strong proposal must clearly state its assumptions, provide supporting evidence, outline how risks will be managed, and include a fallback plan in case the primary strategy fails."
        }
      ]
    },
    {
      "id": "gardening-601-l05",
      "title": "Simulation: Managing a Farm System",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "gardening-601-l05-a1",
          "type": "practice",
          "title": "Guided Practice: Farm Simulator",
          "content": "Step into the role of a farm manager in a dynamic simulation. Make critical decisions about resource allocation and strategy in response to changing conditions.",
          "visualPrompt": "A dashboard interface for a farm simulation game, showing metrics for crop health, budget, water levels, and market prices, with sliders and buttons for user input."
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l05-c1",
          "kind": "practice",
          "title": "Managing a Dynamic Simulation",
          "content": "In this interactive simulation, you will manage a farm through a full growing season. You will be responsible for balancing performance goals, like yield and profit, with governance constraints, such as water quotas and organic certification rules."
        },
        {
          "id": "gardening-601-l05-c2",
          "kind": "recap",
          "title": "Adapting to Unexpected Events",
          "content": "We will recap the importance of adaptive management. The simulation will throw unexpected challenges at you, like a pest outbreak or a market crash. Success depends on your ability to adjust your strategy while maintaining accountability and clear records of your decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Run a high-pressure farming scenario. Can you save the harvest and stay profitable when faced with unexpected drought, pests, and market volatility?"
        }
      ]
    },
    {
      "id": "gardening-601-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "gardening-601-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Assess your ability to apply analytical concepts to complex case studies and simulations.",
          "visualPrompt": "A clean, simple quiz interface with a progress bar at the top."
        }
      ],
      "questions": [
        {
          "id": "gardening-601-l06-q1",
          "text": "In a complex case study, the first step toward a defensible recommendation is to:",
          "skillId": "gardening-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "Choose a preferred option before analyzing the data."
            },
            {
              "id": "b",
              "text": "Establish a clear baseline, define constraints, and set success criteria."
            },
            {
              "id": "c",
              "text": "Express high confidence without providing evidence."
            },
            {
              "id": "d",
              "text": "Optimize for a single metric, such as cost, and ignore all others."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations are built on a solid foundation of explicit assumptions, constraints, and measurable targets."
        },
        {
          "id": "gardening-601-l06-q2",
          "text": "A resilient operational strategy for a farm must include:",
          "skillId": "gardening-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A plan with checkpoints, fallback options, and clear escalation criteria."
            },
            {
              "id": "b",
              "text": "A rigid, unchangeable plan that cannot adapt to new conditions."
            },
            {
              "id": "c",
              "text": "No clear assignment of who is responsible for critical tasks."
            },
            {
              "id": "d",
              "text": "Decisions made without documentation or clear rationale."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in operations depends on having checkpoints, backup plans, and an explicit process for handling major issues."
        },
        {
          "id": "gardening-601-l06-q3",
          "text": "When comparing two different pest control strategies, the most rigorous method is to:",
          "skillId": "gardening-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Choose the one with the best marketing story."
            },
            {
              "id": "b",
              "text": "Compare them against a control group and analyze side effects and uncertainties."
            },
            {
              "id": "c",
              "text": "Focus only on the final pest count and ignore the cost or labor involved."
            },
            {
              "id": "d",
              "text": "Change your evaluation criteria to fit whichever strategy performed better."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires a scientific approach: using a baseline for comparison, analyzing all impacts, and acknowledging uncertainty."
        },
        {
          "id": "gardening-601-l06-q4",
          "text": "In the farm simulation, your budget is unexpectedly cut by 20%. The best adaptive response is to:",
          "skillId": "gardening-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Continue with the original plan and hope for the best."
            },
            {
              "id": "b",
              "text": "Immediately abandon all non-essential activities without analysis."
            },
            {
              "id": "c",
              "text": "Re-evaluate priorities based on their impact and cost, then adjust the plan."
            },
            {
              "id": "d",
              "text": "Spend the remaining budget as quickly as possible on your favorite project."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective adaptive management involves a rational re-assessment of priorities in response to changing constraints."
        }
      ]
    },
    {
      "id": "gardening-601-l07",
      "title": "Leadership, Governance, and Community Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "gardening-601-l07-a1",
          "type": "image",
          "title": "The Stakeholder Map",
          "content": "Learn to map the impact of agricultural decisions on all stakeholders, including workers, neighbors, consumers, and the local ecosystem.",
          "visualPrompt": "A mind map centered on a 'New Irrigation Policy.' Branches lead to different stakeholders (e.g., 'Local Residents,' 'River Ecosystem,' 'Farm Workers') with notes on positive and negative impacts for each."
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l07-c1",
          "kind": "concept",
          "title": "Understanding Stakeholder Impacts",
          "content": "Agricultural decisions rarely affect just one person. We will learn to map how benefits, costs, and risks are distributed across different groups, ensuring that decisions are made equitably and with a full understanding of their consequences."
        },
        {
          "id": "gardening-601-l07-c2",
          "kind": "concept",
          "title": "Creating Accountable Systems",
          "content": "This section focuses on building systems for accountability. This means creating a clear, traceable record of decisions, establishing rights for community members to review those decisions, and defining the obligation to remediate any harm caused."
        },
        {
          "id": "gardening-601-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Leadership",
          "content": "This final checklist synthesizes our learning. It provides a tool to ensure our agricultural projects align with ethical principles, comply with policies, and are resilient enough to adapt and thrive in a changing world."
        }
      ],
      "flashcards": [
        {
          "id": "gardening-601-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative outcomes of a decision are spread across different groups of people and over time."
        },
        {
          "id": "gardening-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record showing who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "gardening-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability to the community and ethical standards."
        }
      ]
    },
    {
      "id": "gardening-601-l08",
      "title": "Capstone: Defending Your Agricultural Plan",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "gardening-601-l08-a1",
          "type": "practice",
          "title": "Guided Practice: Build Your Brief",
          "content": "Assemble your final recommendation into a professional brief. Structure your argument, cite your evidence, and prepare to defend your plan.",
          "visualPrompt": "A template for a decision memo on a screen, with sections for 'Recommendation,' 'Supporting Evidence,' 'Risk Analysis,' and 'Contingency Plan' that the learner can fill in."
        }
      ],
      "chunks": [
        {
          "id": "gardening-601-l08-c1",
          "kind": "practice",
          "title": "Preparing Your Final Proposal",
          "content": "In this activity, you will synthesize everything you've learned to create a comprehensive proposal for a complex agricultural challenge. Your brief must include evidence-based claims, a clear analysis of uncertainties, and a robust plan for remediation if things go wrong."
        },
        {
          "id": "gardening-601-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for Expert Review",
          "content": "During this rehearsal, you will practice responding to tough questions and critiques from experts, governance bodies, and community stakeholders. This preparation is crucial for building confidence and communicating your ideas effectively under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "gardening-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present your final proposal to a simulated panel of experts. Defend your recommendations against tough, critical cross-examination and prove your mastery of the material."
        }
      ]
    }
  ]
};
