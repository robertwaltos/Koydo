import type { LearningModule } from "@/lib/modules/types";

export const international_relations_401_Module: LearningModule = {
  "id": "international-relations-401",
  "title": "International Relations Leadership and Capstone",
  "description": "An advanced curriculum in International Relations focusing on state and non-state actors, strategic bargaining, institutional governance, and conflict analysis through case studies, simulations, and a capstone project.",
  "subject": "Social Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "policy",
    "global-studies"
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
    "Analyze the roles of state and non-state actors using explicit assumptions and constraints.",
    "Design and execute analytical workflows for strategic bargaining with defined control points.",
    "Evaluate institutional governance decisions using baseline and side-effect analysis.",
    "Strengthen conflict and cooperation analysis with accountable governance mechanisms.",
    "Communicate uncertainty and tradeoffs effectively across diverse stakeholder groups.",
    "Construct defensible policy recommendations resilient to critical review."
  ],
  "lessons": [
    {
      "id": "international-relations-401-l01",
      "title": "Core Foundations of International Relations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "international-relations-401-l01-a1",
          "type": "diagram",
          "title": "Actors in International Relations",
          "content": "A visual map illustrating the relationships between State Actors (countries), Intergovernmental Organizations (IGOs like the UN), Non-Governmental Organizations (NGOs like the Red Cross), and Multinational Corporations (MNCs)."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "International Relations (IR) is the study of interactions among various actors that participate in global politics. This lesson establishes a shared vocabulary for analyzing these interactions, defining key concepts like state and non-state actors, and introducing the framework of strategic bargaining—the process by which these actors negotiate to achieve their objectives."
        },
        {
          "id": "international-relations-401-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "To understand global events, we must map causal pathways and identify the relationships between actions and outcomes. This involves testing hidden assumptions and recognizing the political, economic, and social constraints that shape decision-making. A clear understanding of these factors is essential before proposing any policy intervention."
        },
        {
          "id": "international-relations-401-l01-c3",
          "kind": "recap",
          "title": "Evidence and Discipline",
          "content": "This recap emphasizes the importance of evidence-based analysis. Every claim must be supported by observable indicators and data. We will also practice acknowledging uncertainty and establishing review checkpoints to ensure analytical rigor and accountability in our work."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-401-l01-f1",
          "front": "State and Non-State Actors",
          "back": "The primary entities in IR, including countries (states), IGOs, NGOs, and MNCs, whose interactions are analyzed based on their interests and capabilities."
        },
        {
          "id": "international-relations-401-l01-f2",
          "front": "Strategic Bargaining",
          "back": "The process where actors negotiate outcomes, make concessions, and employ leverage to achieve their goals within a set of formal or informal rules."
        },
        {
          "id": "international-relations-401-l01-f3",
          "front": "Institutional Governance",
          "back": "The formal and informal rules, norms, and structures that constrain behavior and shape outcomes in the international system."
        }
      ]
    },
    {
      "id": "international-relations-401-l02",
      "title": "Analytical Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "international-relations-401-l02-a1",
          "type": "flowchart",
          "title": "Policy Analysis Workflow",
          "content": "A template flowchart showing the key stages of policy analysis: Problem Definition, Evidence Gathering, Option Analysis, Recommendation, and Monitoring."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Testing",
          "content": "In this lab, you will design a structured workflow for analyzing a policy problem. This involves integrating strategic goals with operational realities and preparing for a capstone-level defense of your conclusions. You will then stress-test your workflow against potential uncertainties to evaluate its reliability."
        },
        {
          "id": "international-relations-401-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "A robust analytical workflow requires clear control gates. This recap covers how to map accountability, define criteria for advancing to the next stage, establish conditions for reassessment (rollback), and identify clear signals for verifying progress and success."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to their primary governance effect.",
          "pairs": [
            {
              "left": "Pre-analysis peer review",
              "right": "Reduces preventable analytical errors"
            },
            {
              "left": "Risk escalation threshold",
              "right": "Limits the scope of negative impacts"
            },
            {
              "left": "Baseline performance data",
              "right": "Supports accurate impact attribution"
            },
            {
              "left": "Post-mortem analysis cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "international-relations-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into analytical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Analytical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Data availability budget",
              "bucket": "Analytical"
            },
            {
              "text": "Compliance with international law",
              "bucket": "Policy"
            },
            {
              "text": "Risk of eroding public trust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Requirement for auditable evidence",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "international-relations-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-401-l03-a1",
          "type": "checklist",
          "title": "Review Checklist",
          "content": "Before starting, review: 1. Definitions of state/non-state actors. 2. Key components of strategic bargaining. 3. Purpose of analytical workflows and control gates."
        }
      ],
      "questions": [
        {
          "id": "international-relations-401-l03-q1",
          "text": "Which approach most improves the analysis of state and non-state actors?",
          "skillId": "international-relations-401-skill-actor-analysis",
          "options": [
            {
              "id": "a",
              "text": "Relying on untested assumptions"
            },
            {
              "id": "b",
              "text": "Defining constraints, testing for failure modes, and monitoring key indicators"
            },
            {
              "id": "c",
              "text": "Treating all geopolitical contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoiding the analysis of uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable analysis requires defining explicit constraints, testing for potential failures, and using measured signals to track outcomes."
        },
        {
          "id": "international-relations-401-l03-q2",
          "text": "This advanced 401-level course emphasizes:",
          "skillId": "international-relations-401-skill-course-focus",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, policy and operations integration, and capstone defense"
            },
            {
              "id": "b",
              "text": "Speed of execution without critical review"
            },
            {
              "id": "c",
              "text": "Analysis without baselines or controls"
            },
            {
              "id": "d",
              "text": "Decision-making from a single perspective"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This course is structured around developing strategic leadership, integrating policy with operations, and defending a final capstone project."
        },
        {
          "id": "international-relations-401-l03-q3",
          "text": "What best strengthens the reliability of a strategic bargaining analysis?",
          "skillId": "international-relations-401-skill-bargaining-reliability",
          "options": [
            {
              "id": "a",
              "text": "Undefined workflows and unclear escalation paths"
            },
            {
              "id": "b",
              "text": "Control checkpoints, clear ownership, and defined response thresholds"
            },
            {
              "id": "c",
              "text": "Making untracked changes to the analysis"
            },
            {
              "id": "d",
              "text": "Skipping post-incident reviews"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, defined owners for each step, and threshold-driven responses to new information or events."
        },
        {
          "id": "international-relations-401-l03-q4",
          "text": "For institutional governance, which practice is most defensible?",
          "skillId": "international-relations-401-skill-governance-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal evidence of success"
            },
            {
              "id": "b",
              "text": "Comparing outcomes against baselines and checking for unintended side-effects"
            },
            {
              "id": "c",
              "text": "Ignoring difficult or inconvenient scenarios"
            },
            {
              "id": "d",
              "text": "Adjusting success criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible evaluation requires comparing results to a pre-defined baseline and analyzing for negative externalities to prevent biased conclusions."
        },
        {
          "id": "international-relations-401-l03-q5",
          "text": "A mature conflict and cooperation analysis model should include:",
          "skillId": "international-relations-401-skill-analysis-maturity",
          "options": [
            {
              "id": "a",
              "text": "Policy goals disconnected from any measurement"
            },
            {
              "id": "b",
              "text": "Clear links between policy and metrics, measurable thresholds, and corrective pathways"
            },
            {
              "id": "c",
              "text": "No obligations for transparency"
            },
            {
              "id": "d",
              "text": "No expectations for remediation of failures"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy intent with measurable outcomes and pre-defined pathways for corrective action."
        }
      ]
    },
    {
      "id": "international-relations-401-l04",
      "title": "Case Analysis: The Caspian Sea Dispute",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-relations-401-l04-a1",
          "type": "decision_tree",
          "title": "Crisis Decision Analysis",
          "content": "A visual decision tree for analyzing a regional crisis, with branches for diplomatic, economic, and military options, and nodes for potential risks and outcomes."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "This case analysis examines the regional crisis over the legal and economic status of the Caspian Sea. It requires careful diplomacy, alliance management, and engagement with multilateral institutions. Learners will map high-impact risks and competing constraints facing the littoral states."
        },
        {
          "id": "international-relations-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We introduce the tradeoff matrix as a tool for evaluating policy options. Each potential intervention is scored against key criteria: effectiveness (achieves goals), reliability (works as expected), equity (fair distribution of outcomes), and feasibility (practical to implement). This structured approach enables more rigorous decision-making."
        },
        {
          "id": "international-relations-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure and Recovery",
          "content": "Failures in foreign policy provide valuable lessons. This recap focuses on transforming setbacks into institutional knowledge by creating safeguards to prevent repeat mistakes, developing response playbooks for when things go wrong, and implementing continuous monitoring to adapt to changing conditions."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing policy alternatives across multiple, often competing, priorities and criteria."
        },
        {
          "id": "international-relations-401-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of risk or error that can be identified and used to design targeted mitigations and preventative measures."
        },
        {
          "id": "international-relations-401-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined sequence of actions designed to ensure a safe, timely, and effective recovery from a crisis or operational failure."
        }
      ]
    },
    {
      "id": "international-relations-401-l05",
      "title": "Simulation Studio: Trade Sanctions",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "international-relations-401-l05-a1",
          "type": "dashboard_mockup",
          "title": "Simulation Control Panel",
          "content": "A visual mockup of a simulation dashboard, showing adjustable parameters for sanctions severity, international cooperation, and target country resilience, alongside output graphs for economic impact and policy effectiveness."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this simulation, you will configure and run a scenario involving the use of economic sanctions. You will define the intervention's goals, set uncertainty parameters (e.g., likelihood of third-party spoilers), and establish measurable thresholds for success. This provides hands-on experience with the complexities of policy implementation."
        },
        {
          "id": "international-relations-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "Following the simulation, we will conduct a debriefing session. This involves evaluating the outcomes, including unintended side effects, and assessing how well the chosen actions aligned with predefined governance constraints. This reflective process is essential for understanding the full impact of policy decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three sanctions strategies and justify which one best achieves the stated objectives while managing risks.",
          "instructions": [
            "Define your primary objective and ethical guardrails before selecting an intervention.",
            "Record the expected near-term and long-term tradeoffs for each option.",
            "Select key metrics to confirm success and triggers for escalating or withdrawing the sanctions."
          ]
        },
        {
          "id": "international-relations-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the most effective mitigation responses.",
          "pairs": [
            {
              "left": "Ambiguous accountability",
              "right": "Define a role map and clear escalation authority"
            },
            {
              "left": "Poor intelligence quality",
              "right": "Strengthen data validation and source monitoring"
            },
            {
              "left": "Policy goals drifting over time",
              "right": "Re-anchor actions to explicit, documented standards"
            },
            {
              "left": "Growing stakeholder opposition",
              "right": "Increase transparency and create feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "international-relations-401-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-401-l06-a1",
          "type": "checklist",
          "title": "Review Checklist",
          "content": "Before starting, review: 1. The purpose of a tradeoff matrix. 2. Key elements of a simulation debrief. 3. Strategies for mitigating common policy risks."
        }
      ],
      "questions": [
        {
          "id": "international-relations-401-l06-q1",
          "text": "When using a tradeoff matrix to evaluate policy options, what is the primary goal?",
          "skillId": "international-relations-401-skill-tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "To find a perfect solution with no downsides"
            },
            {
              "id": "b",
              "text": "To systematically compare options across consistent, predefined criteria"
            },
            {
              "id": "c",
              "text": "To select the option that is easiest to implement, regardless of effectiveness"
            },
            {
              "id": "d",
              "text": "To confirm a pre-selected personal preference"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured, objective comparison of different options against the same set of important criteria, such as effectiveness, feasibility, and equity."
        },
        {
          "id": "international-relations-401-l06-q2",
          "text": "In a policy simulation debrief, what is the most critical area of reflection?",
          "skillId": "international-relations-401-skill-simulation-debrief",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on whether the primary goal was achieved"
            },
            {
              "id": "b",
              "text": "Ignoring the initial assumptions to focus on the outcome"
            },
            {
              "id": "c",
              "text": "Analyzing both the intended outcomes and the unintended side effects"
            },
            {
              "id": "d",
              "text": "Determining who to blame if the simulation failed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A thorough debrief requires evaluating the full spectrum of results, including unexpected consequences (side effects), to gain a complete understanding of the policy's impact."
        },
        {
          "id": "international-relations-401-l06-q3",
          "text": "A 'response playbook' is designed to:",
          "skillId": "international-relations-401-skill-risk-mitigation",
          "options": [
            {
              "id": "a",
              "text": "Prevent any and all failures from ever occurring"
            },
            {
              "id": "b",
              "text": "Document a policy's success after the fact"
            },
            {
              "id": "c",
              "text": "Provide a pre-planned set of actions to manage a crisis effectively"
            },
            {
              "id": "d",
              "text": "Assign blame when an incident occurs"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A response playbook is a proactive tool that outlines steps to take during a crisis to ensure a timely, safe, and coordinated recovery."
        },
        {
          "id": "international-relations-401-l06-q4",
          "text": "What is the best way to mitigate the risk of 'policy drift,' where actions no longer align with original goals?",
          "skillId": "international-relations-401-skill-policy-governance",
          "options": [
            {
              "id": "a",
              "text": "Hope that decision-makers have a good memory of the original goals"
            },
            {
              "id": "b",
              "text": "Periodically review actions against explicit, documented standards and metrics"
            },
            {
              "id": "c",
              "text": "Change the goals to match the current actions"
            },
            {
              "id": "d",
              "text": "Stop monitoring the policy's effects"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Policy drift is best managed through disciplined governance, which includes regular reviews to ensure that implementation remains anchored to the original, explicit standards."
        },
        {
          "id": "international-relations-401-l06-q5",
          "text": "Setting 'uncertainty parameters' in a simulation helps an analyst to:",
          "skillId": "international-relations-401-skill-uncertainty-analysis",
          "options": [
            {
              "id": "a",
              "text": "Guarantee a successful outcome"
            },
            {
              "id": "b",
              "text": "Eliminate all variables from the scenario"
            },
            {
              "id": "c",
              "text": "Stress-test a policy against different potential real-world conditions"
            },
            {
              "id": "d",
              "text": "Prove that the policy is flawless"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Uncertainty parameters allow analysts to test how robust a policy is by simulating various conditions and external factors that are not fully predictable."
        }
      ]
    },
    {
      "id": "international-relations-401-l07",
      "title": "Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "international-relations-401-l07-a1",
          "type": "matrix",
          "title": "Stakeholder Impact Matrix",
          "content": "A matrix with stakeholder groups on one axis and types of impact (economic, social, political) on the other, used to map the distribution of a policy's benefits and burdens."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Ethical policy-making requires examining how benefits and burdens are distributed across different stakeholder groups. We will analyze how these impacts vary over short-term and long-term timescales, which is crucial for ensuring equity and justice in international relations."
        },
        {
          "id": "international-relations-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Accountability ensures that actions can be traced and decision-makers can be held responsible. We will explore how to build an accountability architecture through decision traceability, stakeholder review rights, and clear remediation obligations for correcting negative outcomes. This is vital for maintaining trust and legitimacy."
        },
        {
          "id": "international-relations-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "This recap introduces a checklist for responsible execution. It connects technical performance with policy objectives, ethical principles, and stakeholder trust. This tool helps ensure that actions are not only effective but also align with core values and maintain public confidence."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-401-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a policy are spread across different stakeholder groups and timeframes."
        },
        {
          "id": "international-relations-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The documented evidence chain showing how and why a decision was made, including the data, assumptions, and individuals involved."
        },
        {
          "id": "international-relations-401-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of implementing policy in a way that balances effectiveness with ethical safeguards and respect for stakeholder interests."
        }
      ]
    },
    {
      "id": "international-relations-401-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "international-relations-401-l08-a1",
          "type": "template",
          "title": "Capstone Project Charter Template",
          "content": "A downloadable document template for the capstone charter, with sections for Objective, Scope, Key Metrics, Risks, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this lab, you will draft a detailed charter for your capstone project. This document will define your primary research question or objective, identify key constraints, establish measurable success metrics, and outline governance gates to ensure your project remains on track."
        },
        {
          "id": "international-relations-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "Preparing for your capstone defense begins now. This recap focuses on gathering evidence to support your arguments against potential critiques related to your methodology, policy assumptions, and stakeholder analysis. This practice helps build a resilient, evidence-based defense."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define a clear, concise objective and the boundary conditions of your analysis.",
            "List at least three measurable success indicators for your proposed policy.",
            "Define criteria for escalating a risk and for taking corrective action."
          ]
        },
        {
          "id": "international-relations-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your proposed capstone decisions against simulated technical, policy, and stakeholder objections.",
          "instructions": []
        }
      ]
    },
    {
      "id": "international-relations-401-l09",
      "title": "Capstone Defense and Module Review",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "international-relations-401-l09-a1",
          "type": "rubric",
          "title": "Capstone Defense Evaluation Rubric",
          "content": "A detailed rubric outlining the evaluation criteria for the capstone defense, including clarity of argument, strength of evidence, handling of critiques, and professionalism."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-401-l09-c1",
          "kind": "practice",
          "title": "Final Presentation and Defense",
          "content": "You will present your capstone project, defending your analysis, methodology, and recommendations against critical review from peers and instructors. This simulates a professional policy briefing and is the culmination of the skills developed throughout the module."
        },
        {
          "id": "international-relations-401-l09-c2",
          "kind": "recap",
          "title": "Course Synthesis and Future Applications",
          "content": "A final review of the core concepts of the course, connecting foundational theories to the practical skills developed in case studies, simulations, and the capstone project. We will discuss how to apply these analytical skills in future academic and professional contexts."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-401-l09-act1",
          "type": "peer_review",
          "title": "Peer Feedback Forum",
          "description": "Provide constructive feedback on two peers' capstone presentations using the provided evaluation rubric. Focus on the clarity of their argument and the quality of their evidence.",
          "instructions": []
        },
        {
          "id": "international-relations-401-l09-act2",
          "type": "self_reflection",
          "title": "Personal Learning Reflection",
          "description": "Reflect on your learning journey through this module. Identify the most valuable skill you developed and one area you plan to focus on for future growth in the field of International Relations.",
          "instructions": []
        }
      ]
    }
  ]
};
