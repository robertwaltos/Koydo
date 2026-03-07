import type { LearningModule } from "@/lib/modules/types";

export const geoscience_301_Module: LearningModule = {
  "id": "geoscience-301",
  "title": "Geoscience Systems and Governance",
  "description": "Level 301 curriculum in Geoscience, centered on tectonic and surface processes, earth materials analysis, hazard and risk interpretation, and resource and stewardship governance through case analysis, simulation, and checkpoint-driven mastery.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "geology",
    "earth-systems"
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
    "Explain and apply tectonic and surface processes under practical constraints",
    "Build repeatable workflows for earth materials analysis with measurable controls",
    "Evaluate interventions in hazard and risk interpretation using comparative evidence",
    "Operationalize resource and stewardship governance with transparent governance loops",
    "Communicate uncertainty, risk, and tradeoffs clearly to mixed stakeholders",
    "Defend decisions through evidence-backed reasoning and post-run review"
  ],
  "lessons": [
    {
      "id": "geoscience-301-l01",
      "title": "Geoscience Core Models",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "geoscience-301-l01-a1",
          "type": "image",
          "title": "Core Concepts Diagram",
          "content": "A visual map connecting tectonic processes, surface processes, and earth materials analysis."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Vocabulary",
          "content": "We'll start by building a shared vocabulary for key concepts like tectonic plates, erosion, and rock analysis. This ensures we all understand the fundamental forces shaping our planet. Imagine a blueprint of Earth's systems—we're learning to read it."
        },
        {
          "id": "geoscience-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning",
          "content": "We'll learn to trace cause-and-effect relationships in Earth systems. For example, how does volcanic activity in one area affect the climate in another? Understanding these connections is key to predicting outcomes and designing effective solutions."
        },
        {
          "id": "geoscience-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "In science, claims require proof. We'll focus on using measurable data to support our conclusions. This includes defining confidence levels and setting up review checkpoints to ensure our work is reliable and accurate."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l01-f1",
          "front": "Tectonic and Surface Processes",
          "back": "The large-scale movements of Earth's crust and the resulting changes to its surface, like mountain building and erosion."
        },
        {
          "id": "geoscience-301-l01-f2",
          "front": "Earth Materials Analysis",
          "back": "The systematic process of identifying and classifying rocks, minerals, and soils to understand their properties and history."
        },
        {
          "id": "geoscience-301-l01-f3",
          "front": "Hazard and Risk Interpretation",
          "back": "The process of evaluating potential dangers (hazards) and their likelihood of causing harm (risk) to communities and ecosystems."
        }
      ]
    },
    {
      "id": "geoscience-301-l02",
      "title": "Geoscience Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-301-l02-a1",
          "type": "image",
          "title": "Workflow Template",
          "content": "A visual guide for building a repeatable scientific workflow, including roles, checkpoints, and success metrics."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Build",
          "content": "In this lab, you'll design a step-by-step workflow for a geoscience project. You will assign team roles, create quality-control checkpoints, and define clear, measurable goals to track your success."
        },
        {
          "id": "geoscience-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Rollback",
          "content": "A good plan also prepares for problems. We'll discuss how to stress-test your workflow to find weak points and establish clear rules for when to pause or 'roll back' a project to prevent major failures."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l02-act1",
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
      "id": "geoscience-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-301-l03-a1",
          "type": "image",
          "title": "Review Checklist",
          "content": "Key concepts to review before the quiz: core models, causal reasoning, evidence standards, and workflow components."
        }
      ],
      "questions": [
        {
          "id": "geoscience-301-l03-q1",
          "text": "Which practice most improves decision quality in tectonic and surface processes?",
          "skillId": "geoscience-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Use implicit assumptions and no baseline"
            },
            {
              "id": "b",
              "text": "Define assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Prioritize speed over evidence in all cases"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when assumptions, constraints, and measurement are explicit."
        },
        {
          "id": "geoscience-301-l03-q2",
          "text": "At level 301, high-quality execution in earth materials analysis should include:",
          "skillId": "geoscience-301-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Owner mapping, checkpoints, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc decisions"
            },
            {
              "id": "c",
              "text": "No post-implementation review"
            },
            {
              "id": "d",
              "text": "Untracked process changes"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution needs clear ownership and threshold-driven control points."
        }
      ]
    },
    {
      "id": "geoscience-301-l04",
      "title": "Geoscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "geoscience-301-l04-a1",
          "type": "image",
          "title": "Case Study Framework",
          "content": "Follow the C-T-R framework: Analyze the Context, map the Tradeoffs, and design a Recovery plan."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l04-c1",
          "kind": "example",
          "title": "Case Context",
          "content": "We'll analyze a real-world case study of a region facing seismic risks, coastal erosion, and groundwater shortages. Your task is to identify the conflicting goals of different groups (e.g., industry, residents, environmental agencies) and assess the risks of the current situation."
        },
        {
          "id": "geoscience-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "A tradeoff matrix is a powerful tool for making tough decisions. We'll use one to compare potential solutions. You'll score each option against criteria like cost, effectiveness, and public acceptance to find the most balanced approach."
        },
        {
          "id": "geoscience-301-l04-c3",
          "kind": "recap",
          "title": "Recovery Design",
          "content": "We learn the most from what goes wrong. We'll analyze common failure patterns in geoscience projects to develop better safeguards. You'll help create a 'response playbook'—a clear, pre-planned set of actions for managing emergencies effectively."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A table used to compare different options by scoring them against a set of important criteria, helping to visualize pros and cons."
        },
        {
          "id": "geoscience-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of problem or weakness in a system that can be identified and predicted."
        },
        {
          "id": "geoscience-301-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide with pre-approved actions designed to respond quickly and effectively to a specific incident or failure."
        }
      ]
    },
    {
      "id": "geoscience-301-l05",
      "title": "Geoscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "geoscience-301-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An example of a simulation interface showing input variables (interventions) and output metrics (outcomes)."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "Welcome to the simulation lab. Here, you'll test your proposed solutions from the case study. You can change variables, introduce uncertainties like unexpected weather events, and run multiple scenarios to see the long-term consequences of your decisions on a virtual landscape."
        },
        {
          "id": "geoscience-301-l05-c2",
          "kind": "recap",
          "title": "Debrief",
          "content": "After each simulation, we'll hold a debrief. We will analyze the results: Did you meet your goals? Were there any unintended side effects? Did your plan follow the established rules and ethical guidelines? This review is crucial for learning and improving."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare intervention paths for tectonic and surface processes and resource and stewardship governance.",
          "instructions": [
            "Define objective and constraints before intervention selection.",
            "Document near-term and long-term tradeoffs.",
            "Specify metrics that validate your chosen path."
          ]
        }
      ]
    },
    {
      "id": "geoscience-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-301-l06-a1",
          "type": "image",
          "title": "Review Checklist",
          "content": "Key concepts to review: tradeoff matrices, simulation debriefs, failure patterns, and response playbooks."
        }
      ],
      "questions": [
        {
          "id": "geoscience-301-l06-q1",
          "text": "What is the primary purpose of using a tradeoff matrix in a case analysis?",
          "skillId": "geoscience-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options against consistent criteria"
            },
            {
              "id": "c",
              "text": "To speed up the decision by ignoring complex factors"
            },
            {
              "id": "d",
              "text": "To assign blame after a failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate options based on multiple, often competing, criteria."
        },
        {
          "id": "geoscience-301-l06-q2",
          "text": "In the debrief phase of a simulation, what is a key question to ask about side effects?",
          "skillId": "geoscience-301-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Did the simulation run fast enough?"
            },
            {
              "id": "b",
              "text": "Did our intervention cause any unexpected negative impacts on other systems?"
            },
            {
              "id": "c",
              "text": "Was the user interface visually appealing?"
            },
            {
              "id": "d",
              "text": "Can we ignore the side effects if the main goal was met?"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A critical part of a debrief is analyzing unintended consequences to ensure a solution is holistically beneficial."
        },
        {
          "id": "geoscience-301-l06-q3",
          "text": "Identifying a 'failure pattern' is valuable because it allows teams to:",
          "skillId": "geoscience-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Ignore the problem since it has happened before"
            },
            {
              "id": "b",
              "text": "Blame the person who made the last mistake"
            },
            {
              "id": "c",
              "text": "Develop proactive safeguards and response playbooks"
            },
            {
              "id": "d",
              "text": "Stop all future projects to avoid risk"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Recognizing recurring failure modes enables the creation of preventative measures and prepared responses."
        },
        {
          "id": "geoscience-301-l06-q4",
          "text": "A 'response playbook' is designed to:",
          "skillId": "geoscience-301-skill-planning",
          "options": [
            {
              "id": "a",
              "text": "Be a long, academic report written after an incident"
            },
            {
              "id": "b",
              "text": "Document every possible thing that could ever go wrong"
            },
            {
              "id": "c",
              "text": "Provide a clear, pre-planned set of actions to manage a specific, known risk"
            },
            {
              "id": "d",
              "text": "Replace the need for expert judgment during a crisis"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A playbook is a practical, actionable guide for responding to a foreseen type of incident efficiently and safely."
        }
      ]
    },
    {
      "id": "geoscience-301-l07",
      "title": "Geoscience Governance and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "geoscience-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing how to map the positive and negative impacts of a project across different community groups."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact",
          "content": "Decisions in geoscience rarely affect everyone equally. We'll learn to map the 'impact distribution'—analyzing who benefits from a project and who bears the costs or risks. This is essential for making fair and equitable choices."
        },
        {
          "id": "geoscience-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Good governance requires accountability. We'll design an 'accountability architecture' that ensures every major decision is traceable. This includes recording the evidence used, giving stakeholders a right to review, and defining who is responsible for fixing any negative outcomes."
        },
        {
          "id": "geoscience-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution",
          "content": "Responsible execution means combining effective results with ethical conduct. We'll use a final checklist to review our project's performance, risk management, and overall fairness, ensuring our work is both successful and principled."
        }
      ],
      "flashcards": [
        {
          "id": "geoscience-301-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative consequences of a decision are spread across different groups and over time."
        },
        {
          "id": "geoscience-301-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record of how a decision was made, including the data, reasoning, and people involved."
        },
        {
          "id": "geoscience-301-l07-f3",
          "front": "Responsible Execution",
          "back": "Achieving project goals while upholding ethical standards, ensuring fairness, and being accountable for outcomes."
        }
      ]
    },
    {
      "id": "geoscience-301-l08",
      "title": "Geoscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "geoscience-301-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A fillable template for your Capstone Charter, with sections for objectives, constraints, metrics, and governance."
        }
      ],
      "chunks": [
        {
          "id": "geoscience-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this lab, you will draft a 'Capstone Charter' for your final project. This is your project's constitution. It will clearly define your goals, limitations (like budget or time), how you'll measure success, and the rules that will guide your decisions."
        },
        {
          "id": "geoscience-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A key part of your capstone is defending your plan. You will prepare to justify your choices with evidence and show how your project aligns with technical standards and ethical guidelines. This prepares you for presenting your work to stakeholders."
        }
      ],
      "interactiveActivities": [
        {
          "id": "geoscience-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable outcomes and remediation pathways.",
          "instructions": [
            "Define objective and operating boundaries.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective-action criteria."
          ]
        }
      ]
    },
    {
      "id": "geoscience-301-l09",
      "title": "Checkpoint 3: Capstone Defense",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "geoscience-301-l09-a1",
          "type": "image",
          "title": "Defense Rubric",
          "content": "Evaluation criteria for the capstone: clarity of objectives, strength of evidence, stakeholder consideration, and accountability plan."
        }
      ],
      "questions": [
        {
          "id": "geoscience-301-l09-q1",
          "text": "When defining 'impact distribution' for a capstone project, what are you primarily analyzing?",
          "skillId": "geoscience-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The project's budget distribution"
            },
            {
              "id": "b",
              "text": "How the project's benefits and burdens are spread across different stakeholder groups"
            },
            {
              "id": "c",
              "text": "The geographic distribution of rock samples"
            },
            {
              "id": "d",
              "text": "The distribution of tasks among team members"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact distribution is about the equitable allocation of outcomes among people and communities."
        },
        {
          "id": "geoscience-301-l09-q2",
          "text": "A strong Capstone Charter must include 'governance triggers'. What is an example of such a trigger?",
          "skillId": "geoscience-301-skill-accountability",
          "options": [
            {
              "id": "a",
              "text": "The project's start date"
            },
            {
              "id": "b",
              "text": "A rule that requires a formal review if the project exceeds its budget by 15%"
            },
            {
              "id": "c",
              "text": "The name of the project manager"
            },
            {
              "id": "d",
              "text": "The color scheme for the final presentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A governance trigger is a predefined condition that requires a specific action or review, ensuring accountability."
        },
        {
          "id": "geoscience-301-l09-q3",
          "text": "'Decision traceability' is a key principle of accountability. What does it require you to do?",
          "skillId": "geoscience-301-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Make all decisions by yourself to be efficient"
            },
            {
              "id": "b",
              "text": "Keep a clear record of the evidence, reasoning, and ownership behind each major decision"
            },
            {
              "id": "c",
              "text": "Only make decisions that are popular with all stakeholders"
            },
            {
              "id": "d",
              "text": "Erase records of decisions that lead to poor outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability ensures that the decision-making process is transparent and can be audited or reviewed later."
        },
        {
          "id": "geoscience-301-l09-q4",
          "text": "What is the main purpose of the 'Defense Readiness' practice in the Capstone Planning Lab?",
          "skillId": "geoscience-301-skill-planning",
          "options": [
            {
              "id": "a",
              "text": "To memorize scientific facts for the final exam"
            },
            {
              "id": "b",
              "text": "To create a complex visual presentation"
            },
            {
              "id": "c",
              "text": "To prepare to justify project decisions with evidence and align them with established standards"
            },
            {
              "id": "d",
              "text": "To ensure the project is completed ahead of schedule"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Defense readiness is about being prepared to articulate and defend the rationale and integrity of your work."
        }
      ]
    }
  ]
};
