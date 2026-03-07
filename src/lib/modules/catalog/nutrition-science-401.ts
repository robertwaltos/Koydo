import type { LearningModule } from "@/lib/modules/types";

export const nutrition_science_401_Module: LearningModule = {
  "id": "nutrition-science-401",
  "title": "Nutrition Science Leadership and Capstone",
  "description": "An advanced curriculum in Nutrition Science focusing on metabolic principles, dietary analysis, evidence-based interventions, and nutrition policy. Learners will engage with complex case studies, simulations, and a final capstone project to master leadership in the field.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
    "public-health"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Apply core metabolic principles to solve practical nutrition challenges.",
    "Develop systematic workflows for analyzing dietary patterns.",
    "Design and evaluate nutrition interventions using evidence-based criteria.",
    "Analyze and design nutrition policies that promote fairness and equity.",
    "Communicate complex nutritional information, including risks and uncertainties, to diverse audiences.",
    "Defend nutrition-related decisions using scientific evidence and structured reasoning."
  ],
  "lessons": [
    {
      "id": "nutrition-science-401-l01",
      "title": "Core Models in Nutrition Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-401-l01-a1",
          "type": "image",
          "title": "Metabolic Pathways Diagram",
          "content": "A visual chart illustrating the core biochemical pathways for carbohydrates, fats, and proteins, showing how they are interconnected."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "This lesson establishes the essential vocabulary for advanced nutrition science. We will define the scope of our study, focusing on core metabolic principles and the methods used to analyze dietary patterns, ensuring we have a shared language for the topics ahead."
        },
        {
          "id": "nutrition-science-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "Here, we will practice mapping causal relationships to understand how different nutritional factors influence health outcomes. We will learn to identify our assumptions and work within real-world constraints before designing an intervention."
        },
        {
          "id": "nutrition-science-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "We will review the standards for high-quality evidence in nutrition. This includes backing up claims with measurable data, understanding confidence intervals, and using review checkpoints to ensure our conclusions are both reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-401-l01-f1",
          "front": "Metabolic Foundations",
          "back": "The core biochemical processes that govern how the body uses nutrients. Analyzing them requires making clear, stated assumptions."
        },
        {
          "id": "nutrition-science-401-l01-f2",
          "front": "Dietary Pattern Analysis",
          "back": "A systematic method for analyzing food intake to ensure consistent and reliable results."
        },
        {
          "id": "nutrition-science-401-l01-f3",
          "front": "Evidence-Based Intervention",
          "back": "A nutrition program or policy designed and assessed using rigorous scientific evidence to ensure it produces meaningful results."
        }
      ]
    },
    {
      "id": "nutrition-science-401-l02",
      "title": "Nutrition Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-401-l02-a1",
          "type": "image",
          "title": "Sample Workflow Chart",
          "content": "A flowchart visualizing a nutrition intervention workflow, from initial assessment to outcome evaluation, with clear decision points and roles."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l02-c1",
          "kind": "practice",
          "title": "Building a Workflow",
          "content": "In this interactive lab, you will build a practical workflow for a nutrition initiative. This includes assigning responsibilities, setting up quality-control gates, and defining key metrics to measure success."
        },
        {
          "id": "nutrition-science-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback Planning",
          "content": "In this recap, we will stress-test our workflow by imagining potential failure points. We will establish clear criteria for when to pause or 'roll back' a plan that isn't working, ensuring our programs are robust and adaptable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control to its strongest reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-commit review",
              "right": "Prevents avoidable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Contains impact during failures"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports defensible outcome claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-401-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-401-l03-a1",
          "type": "document",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of the core models, evidence standards, and workflow components covered in the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-401-l03-q1",
          "text": "Which practice most improves decision quality when analyzing metabolic foundations?",
          "skillId": "nutrition-science-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Using implicit assumptions and no baseline"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are explicit and transparent."
        },
        {
          "id": "nutrition-science-401-l03-q2",
          "text": "A high-quality workflow for dietary pattern analysis should include:",
          "skillId": "nutrition-science-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear role assignments, review checkpoints, and thresholds for escalation"
            },
            {
              "id": "b",
              "text": "Vague roles and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "No review after the project is implemented"
            },
            {
              "id": "d",
              "text": "Changes to the process that are not tracked"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, defined control points, and criteria for handling problems."
        }
      ]
    },
    {
      "id": "nutrition-science-401-l04",
      "title": "Case Analysis: A Community Nutrition Initiative",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-401-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A sample tradeoff matrix comparing three different intervention options across criteria like cost, effectiveness, equity, and feasibility."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "We will analyze a real-world community nutrition initiative that must balance clinical outcomes, cultural food preferences, and limited food access. Your task is to identify the competing goals and potential risks within this complex system."
        },
        {
          "id": "nutrition-science-401-l04-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix",
          "content": "We will introduce the tradeoff matrix as a tool for decision-making. You will learn to score different options based on their effectiveness, feasibility, risk, and stakeholder impact to help you systematically compare choices."
        },
        {
          "id": "nutrition-science-401-l04-c3",
          "kind": "recap",
          "title": "Designing for Recovery",
          "content": "In this recap, we will discuss how to learn from mistakes. We will explore how to analyze patterns of failure to create better safeguards and develop 'response playbooks'—clear plans for what to do when things go wrong."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool used to compare different options by weighing them against a common set of important criteria."
        },
        {
          "id": "nutrition-science-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A repeated problem that points to a specific, predictable weakness in a plan or system."
        },
        {
          "id": "nutrition-science-401-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide with predefined actions to help a team recover from a problem quickly and safely."
        }
      ]
    },
    {
      "id": "nutrition-science-401-l05",
      "title": "Simulation Studio: Intervention Design",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-401-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A mock-up of the simulation interface, showing variables the user can control (e.g., budget, intervention type) and outcome metrics (e.g., health impact, community trust)."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, you will design and run multiple intervention scenarios. You will make decisions under conditions of uncertainty and compare the outcomes to see which strategies are most effective."
        },
        {
          "id": "nutrition-science-401-l05-c2",
          "kind": "recap",
          "title": "Debrief and Evaluation",
          "content": "After each simulation run, we will debrief. You will evaluate your results based on whether you met your targets, the unintended side effects, and your adherence to ethical and governance standards."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for improving community health outcomes while managing a budget and policy constraints.",
          "instructions": [
            "Define your primary objective and constraints before selecting an intervention.",
            "Document the potential short-term and long-term tradeoffs of your chosen path.",
            "Specify the key metrics you will use to validate whether your intervention was a success."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-401-l06",
      "title": "Checkpoint 2: Application and Systems Thinking",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-401-l06-a1",
          "type": "document",
          "title": "Case Study Framework",
          "content": "A quick reference guide on how to apply the tradeoff matrix and analyze failure patterns, based on the concepts from Lesson 4."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-401-l06-q1",
          "text": "When using a tradeoff matrix to analyze a nutrition program, what is the primary goal?",
          "skillId": "nutrition-science-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in every way."
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options across a consistent set of criteria."
            },
            {
              "id": "c",
              "text": "To select the cheapest option regardless of its effectiveness."
            },
            {
              "id": "d",
              "text": "To avoid making a difficult decision by highlighting flaws in all options."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a decision-making tool that helps compare options systematically to make an informed choice based on competing priorities."
        },
        {
          "id": "nutrition-science-401-l06-q2",
          "text": "In a simulation, you run an intervention that improves health outcomes for one group but slightly worsens them for another. This is an example of a:",
          "skillId": "nutrition-science-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "System failure with no benefits."
            },
            {
              "id": "b",
              "text": "Perfect outcome with no downsides."
            },
            {
              "id": "c",
              "text": "A tradeoff involving equity and side effects."
            },
            {
              "id": "d",
              "text": "A result that should be ignored."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective analysis requires evaluating not just the primary outcome but also the distribution of benefits and harms (equity) and unintended consequences (side effects)."
        },
        {
          "id": "nutrition-science-401-l06-q3",
          "text": "Identifying a 'failure pattern' in a case study is valuable because it allows you to:",
          "skillId": "nutrition-science-401-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Assign blame to a specific person."
            },
            {
              "id": "b",
              "text": "Design future programs with safeguards against that known risk."
            },
            {
              "id": "c",
              "text": "Prove that the entire project was a mistake."
            },
            {
              "id": "d",
              "text": "Stop all future projects to avoid risk."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of identifying failure patterns is to learn from them and build more resilient systems in the future."
        }
      ]
    },
    {
      "id": "nutrition-science-401-l07",
      "title": "Governance and Ethical Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nutrition-science-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central policy and its branching effects (positive and negative) on different community groups, such as children, local farmers, and small business owners."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l07-c1",
          "kind": "concept",
          "title": "Mapping Stakeholder Impact",
          "content": "In this section, you will learn to map how the benefits and burdens of a nutrition policy are distributed among different groups. This analysis is crucial for ensuring fairness and promoting health equity."
        },
        {
          "id": "nutrition-science-401-l07-c2",
          "kind": "concept",
          "title": "Building Accountable Systems",
          "content": "We will explore how to build accountability into nutrition programs. This means creating transparent systems for tracing decisions, establishing rights for review, and defining clear responsibilities for fixing problems."
        },
        {
          "id": "nutrition-science-401-l07-c3",
          "kind": "recap",
          "title": "Principles of Responsible Execution",
          "content": "We conclude with a checklist for responsible execution. This framework helps you balance program effectiveness, risk management, and ethical considerations to ensure your work is both successful and socially responsible."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The way the positive and negative effects of a policy are spread among different groups of people over time."
        },
        {
          "id": "nutrition-science-401-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record of who made a decision, why they made it, and what evidence they used."
        },
        {
          "id": "nutrition-science-401-l07-f3",
          "front": "Responsible Execution",
          "back": "Carrying out a project in a way that is effective, fair, and transparent."
        }
      ]
    },
    {
      "id": "nutrition-science-401-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-401-l08-a1",
          "type": "document",
          "title": "Capstone Charter Template",
          "content": "A fillable document template for the Capstone Charter, with sections for objectives, constraints, metrics, and governance."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-401-l08-c1",
          "kind": "practice",
          "title": "Drafting Your Capstone Charter",
          "content": "In this collaborative lab, you will draft a Capstone Charter for a project of your own design. This document will define your project's objectives, constraints, success metrics, and the rules for governance and decision-making."
        },
        {
          "id": "nutrition-science-401-l08-c2",
          "kind": "recap",
          "title": "Preparing to Defend Your Plan",
          "content": "To conclude, you will practice defending the decisions in your charter. This involves clearly explaining your reasoning, connecting your plan to technical standards, and responding to critical feedback."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and clear pathways for corrective action.",
          "instructions": [
            "Define the primary objective and operating boundaries of your proposed project.",
            "List at least three measurable indicators that will define success.",
            "Define the criteria for escalating a problem and the steps for corrective action."
          ]
        }
      ]
    }
  ]
};
