import type { LearningModule } from "@/lib/modules/types";

export const international_relations_501_Module: LearningModule = {
  "id": "international-relations-501",
  "title": "International Relations Specialization Studio",
  "description": "Post-401 specialization in International Relations, focused on strategic actor modeling, diplomatic pathway design, conflict-cooperation scenario analysis, and institutional accountability governance through advanced casework, simulation, and defense-based checkpoints.",
  "subject": "Social Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "international-relations",
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
    "Apply advanced methods for strategic actor modeling in high-constraint environments",
    "Design robust systems for diplomatic pathway design with measurable control gates",
    "Evaluate interventions in conflict-cooperation scenario analysis with research-grade rigor",
    "Operationalize institutional accountability governance with accountable governance and escalation pathways",
    "Lead cross-functional decision reviews with explicit tradeoff communication",
    "Defend recommendations under expert critique using evidence and uncertainty bounds"
  ],
  "lessons": [
    {
      "id": "international-relations-501-l01",
      "title": "Advanced Foundations in International Relations",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-relations-501-l01-a1",
          "type": "image",
          "title": "Strategic Actor System Diagram",
          "content": "A diagram illustrating the relationships between state and non-state actors, their constraints, and the diplomatic channels connecting them."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l01-c1",
          "kind": "concept",
          "title": "Scope and Boundary Design",
          "content": "This lesson introduces advanced concepts of scope and boundaries in International Relations. We will examine how to effectively model strategic actors—key players in international affairs—and design diplomatic pathways that facilitate negotiation between nations. Grasping these concepts is essential for addressing complex global challenges."
        },
        {
          "id": "international-relations-501-l01-c2",
          "kind": "concept",
          "title": "Causal and Uncertainty Modeling",
          "content": "Learners will map causal pathways, identify ranges of uncertainty, and understand system dependencies. This foundational knowledge is essential for planning effective interventions, as it helps anticipate challenges and devise robust strategies to address them."
        },
        {
          "id": "international-relations-501-l01-c3",
          "kind": "recap",
          "title": "Evidence Thresholds",
          "content": "We will recap the importance of supporting all claims with measurable indicators. We will discuss establishing confidence bounds and setting up review checkpoints to ensure assessments are reliable and grounded in evidence."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-501-l01-f1",
          "front": "Strategic Actor Modeling",
          "back": "The practice of analyzing the motivations, constraints, and likely actions of key players (e.g., states, NGOs) in a given scenario."
        },
        {
          "id": "international-relations-501-l01-f2",
          "front": "Diplomatic Pathway Design",
          "back": "The process of creating structured, reliable channels for negotiation and conflict resolution that can withstand political stress."
        },
        {
          "id": "international-relations-501-l01-f3",
          "front": "Conflict-Cooperation Scenario Analysis",
          "back": "A method for evaluating potential outcomes of international interactions by analyzing factors that promote either conflict or cooperation."
        }
      ]
    },
    {
      "id": "international-relations-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "international-relations-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "A visual template for mapping out a diplomatic process, including decision points, control gates, and escalation paths."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l02-c1",
          "kind": "practice",
          "title": "Method Design and Stress Test",
          "content": "In this interactive lab, learners will design specialized workflows to address specific challenges in international relations. They will then stress-test these workflows by simulating adverse scenarios to identify potential weaknesses and improve their strategies."
        },
        {
          "id": "international-relations-501-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "This recap covers how to enhance workflows by integrating control gates. These include checkpoints, criteria for rolling back decisions, and escalation procedures based on predefined thresholds, ensuring processes remain effective and responsive."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match specialist controls with their strongest reliability and governance effects.",
          "pairs": [
            {
              "left": "Pre-commit gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits negative impact when outcomes are adverse"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible attribution of an intervention's impact"
            },
            {
              "left": "Retrospective loop",
              "right": "Improves the quality of future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "international-relations-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-501-l03-a1",
          "type": "practice",
          "title": "Key Frameworks Review",
          "content": "A one-page summary of the core frameworks for actor modeling and pathway design covered in the previous lessons."
        }
      ],
      "questions": [
        {
          "id": "international-relations-501-l03-q1",
          "text": "Which practice most improves the quality of strategic actor modeling?",
          "skillId": "international-relations-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or assumptions"
            },
            {
              "id": "b",
              "text": "Defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and edge conditions"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions improve when assumptions, constraints, and metrics are made explicit and measurable."
        },
        {
          "id": "international-relations-501-l03-q2",
          "text": "At an advanced level, strong execution for diplomatic pathway design requires:",
          "skillId": "international-relations-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular checkpoint cadence, and escalation thresholds"
            },
            {
              "id": "b",
              "text": "No role clarity and ad-hoc process changes"
            },
            {
              "id": "c",
              "text": "No retrospective or post-implementation review"
            },
            {
              "id": "d",
              "text": "No conditions for rolling back a decision"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable advanced execution needs ownership clarity and threshold-driven governance to manage complexity."
        },
        {
          "id": "international-relations-501-l03-q3",
          "text": "A defensible approach to conflict-cooperation scenario analysis includes:",
          "skillId": "international-relations-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotes without comparison"
            },
            {
              "id": "b",
              "text": "Baseline comparisons, side-effect analysis, and uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing success criteria after seeing the outcomes"
            },
            {
              "id": "d",
              "text": "Excluding difficult scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible analysis combines comparative baselines, checks for unintended consequences, and transparent disclosure of uncertainty."
        },
        {
          "id": "international-relations-501-l03-q4",
          "text": "Mature institutional accountability governance systems connect:",
          "skillId": "international-relations-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy intent, measurable controls, and remediation pathways"
            },
            {
              "id": "b",
              "text": "Policy language with no measurable enforcement"
            },
            {
              "id": "c",
              "text": "Targets without clear ownership or escalation design"
            },
            {
              "id": "d",
              "text": "Operations without transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Governance maturity is the operational link between stated intent, measurable controls, and clear pathways for corrective action."
        }
      ]
    },
    {
      "id": "international-relations-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-relations-501-l04-a1",
          "type": "image",
          "title": "Example Tradeoff Matrix",
          "content": "A visual table comparing three different policy options across criteria like cost, political feasibility, humanitarian impact, and risk."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "This case study explores a multilateral crisis response balancing national interests, alliance commitments, and humanitarian needs. Learners will map constraints, categorize risks, and define governance boundaries to understand the complexities of crisis diplomacy."
        },
        {
          "id": "international-relations-501-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We introduce the tradeoff matrix, a tool for evaluating alternatives against criteria such as effectiveness, feasibility, risk, and equity. This structured approach helps learners make informed decisions when faced with multiple competing options."
        },
        {
          "id": "international-relations-501-l04-c3",
          "kind": "recap",
          "title": "Recovery and Adaptation Design",
          "content": "In our recap, we explore how to map common failure patterns to appropriate remediation actions. We will also identify measurable recovery triggers that signal when a corrective action should be initiated to ensure progress toward strategic goals."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-501-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured decision-making tool for comparing multiple options across a range of competing priorities or criteria."
        },
        {
          "id": "international-relations-501-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of indicators that signals a specific, predictable type of risk or system failure is likely to occur."
        },
        {
          "id": "international-relations-501-l04-f3",
          "front": "Recovery Trigger",
          "back": "A pre-defined, measurable threshold that, when crossed, automatically initiates a corrective action or contingency plan."
        }
      ]
    },
    {
      "id": "international-relations-501-l05",
      "title": "Simulation and Defense Studio",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "international-relations-501-l05-a1",
          "type": "practice",
          "title": "Simulation Control Panel",
          "content": "An interactive mock-up of the simulation interface, showing the variables learners can adjust, such as resource allocation, public statements, and sanctions."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "In this interactive simulation, learners will configure interventions, set constraints, and establish escalation logic for a high-stakes scenario. This hands-on experience allows them to apply their knowledge in a practical, dynamic setting."
        },
        {
          "id": "international-relations-501-l05-c2",
          "kind": "recap",
          "title": "Debrief and Adaptation",
          "content": "This recap focuses on reviewing simulation outcomes, including intended gains, observed side effects, and any gaps in governance. This reflective process is essential for learning from experience and improving future strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-501-l05-act1",
          "type": "scenario_practice",
          "title": "High-Stakes Intervention Simulation",
          "description": "Evaluate intervention options across strategic actor modeling and institutional accountability governance priorities.",
          "instructions": [
            "Define your objective and boundary conditions first.",
            "Document the short- and long-term tradeoffs of your chosen path.",
            "Specify the metrics and triggers that would validate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "international-relations-501-l06",
      "title": "Checkpoint 2: Case Analysis and Governance",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-501-l06-a1",
          "type": "practice",
          "title": "Case Analysis & Simulation Debrief Checklist",
          "content": "A checklist guiding learners on how to effectively analyze a case study and debrief a simulation, focusing on evidence, tradeoffs, and lessons learned."
        }
      ],
      "questions": [
        {
          "id": "international-relations-501-l06-q1",
          "text": "What is the primary function of a tradeoff matrix in a case analysis?",
          "skillId": "international-relations-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is universally superior"
            },
            {
              "id": "b",
              "text": "To systematically compare policy options against shared, explicit criteria"
            },
            {
              "id": "c",
              "text": "To select the option with the fewest stakeholders"
            },
            {
              "id": "d",
              "text": "To hide the risks associated with the preferred option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate multiple options by scoring them against consistent criteria like cost, risk, and impact."
        },
        {
          "id": "international-relations-501-l06-q2",
          "text": "In a simulation debrief, what is the most constructive focus?",
          "skillId": "international-relations-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame for poor outcomes"
            },
            {
              "id": "b",
              "text": "Identifying gaps between the intended strategy and the actual outcome"
            },
            {
              "id": "c",
              "text": "Focusing only on what went well"
            },
            {
              "id": "d",
              "text": "Arguing that the simulation was unrealistic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A constructive debrief analyzes the difference between the plan and the result to extract valuable lessons for future strategy."
        },
        {
          "id": "international-relations-501-l06-q3",
          "text": "A 'recovery trigger' in a diplomatic plan is best defined as:",
          "skillId": "international-relations-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "A vague feeling that things are going wrong"
            },
            {
              "id": "b",
              "text": "A pre-defined metric that, when crossed, initiates a contingency plan"
            },
            {
              "id": "c",
              "text": "A request from an allied nation for help"
            },
            {
              "id": "d",
              "text": "The point at which the mission is declared a failure"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery trigger is a specific, measurable threshold designed to activate a pre-planned corrective action before total failure occurs."
        },
        {
          "id": "international-relations-501-l06-q4",
          "text": "Why is it important to analyze 'failure signatures' in international relations?",
          "skillId": "international-relations-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To predict specific, recurring problems and design countermeasures"
            },
            {
              "id": "b",
              "text": "To ensure that no failures ever happen"
            },
            {
              "id": "c",
              "text": "To create overly complex and rigid plans"
            },
            {
              "id": "d",
              "text": "To assign responsibility after a crisis is over"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Identifying failure signatures allows strategists to anticipate predictable risks and build more resilient plans to mitigate them."
        }
      ]
    },
    {
      "id": "international-relations-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "international-relations-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing how a specific international policy decision affects various groups differently over time (e.g., local populations, allied nations, domestic industries)."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Distribution",
          "content": "Learners will map the distribution of impacts across various stakeholders, analyzing the benefits, burdens, and delayed effects of policy decisions. Understanding these dynamics is crucial for promoting equity and accountability."
        },
        {
          "id": "international-relations-501-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section explores the architecture of accountability in decision-making. This includes ensuring decision traceability, rights to review, and obligations for remediation. These elements are vital for maintaining trust and integrity in governance."
        },
        {
          "id": "international-relations-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We conclude with a final checklist for responsible leadership, connecting outcomes to ethics, policy compliance, and resilience. This framework helps leaders make informed and defensible choices in high-stakes environments."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the positive and negative outcomes of a policy are allocated across different populations and over time."
        },
        {
          "id": "international-relations-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record connecting a decision to the evidence, rationale, and individuals responsible for making it."
        },
        {
          "id": "international-relations-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance objectives with ethical considerations and public accountability."
        }
      ]
    },
    {
      "id": "international-relations-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "international-relations-501-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Brief Template",
          "content": "A structured document template for learners to fill out, including sections for the core thesis, supporting evidence, risk analysis, and remediation plans."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-501-l08-c1",
          "kind": "practice",
          "title": "Defense Brief Assembly",
          "content": "In this activity, learners will construct a comprehensive defense brief for their capstone recommendation. The brief must include a core claim, supporting evidence, explicit boundaries of uncertainty, and potential pathways for remediation."
        },
        {
          "id": "international-relations-501-l08-c2",
          "kind": "recap",
          "title": "Expert Panel Rehearsal",
          "content": "Learners will rehearse their defense by responding to critiques from multiple perspectives, including technical, governance, and stakeholder viewpoints. This rehearsal refines their arguments and prepares them for robust, expert-level review."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Defend your capstone recommendation under adversarial cross-examination from a panel of simulated experts."
        }
      ]
    }
  ]
};
