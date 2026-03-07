import type { LearningModule } from "@/lib/modules/types";

export const oceanography_401_Module: LearningModule = {
  "id": "oceanography-401",
  "title": "Oceanography Leadership and Capstone",
  "description": "Level 401 curriculum in Oceanography, focused on ocean circulation dynamics, marine ecosystem interactions, observation and measurement methods, and climate-ocean coupling through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Earth Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ocean",
    "science"
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
    "Apply ocean circulation dynamics using explicit assumptions and constraints",
    "Design and execute workflows for marine ecosystem interactions with reliable control points",
    "Evaluate observation and measurement methods decisions using baseline and side-effect analysis",
    "Strengthen climate-ocean coupling with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "oceanography-401-l01",
      "title": "Oceanography Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "oceanography-401-l01-a1",
          "type": "infographic",
          "title": "The Pillars of Oceanographic Analysis",
          "content": "A diagram showing the relationship between Circulation Dynamics, Ecosystem Interactions, Observation Methods, and Climate Coupling."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the captivating field of Oceanography, the scientific study of the oceans. We will define its scope, introduce key vocabulary for effective communication, and examine how ocean currents interact with marine ecosystems. Understanding these relationships is vital for appreciating the ocean's role in climate, weather, and biodiversity, and for making informed decisions to protect our planet's health."
        },
        {
          "id": "oceanography-401-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "Here, you will learn to map cause-and-effect relationships in oceanography and practice identifying the hidden assumptions and constraints that influence decisions. This skill is crucial for choosing the most effective actions when addressing complex ocean-related challenges and understanding the potential consequences of those actions."
        },
        {
          "id": "oceanography-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This recap emphasizes the importance of linking claims to observable evidence. You will learn to identify indicators that support your claims, note any uncertainties, and establish checkpoints for reviewing findings. This process is the foundation for developing strong, defensible arguments based on scientific evidence."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-401-l01-f1",
          "front": "Ocean Circulation Dynamics",
          "back": "The study of large-scale ocean currents. Analyzing these dynamics requires clearly stating and testing all assumptions."
        },
        {
          "id": "oceanography-401-l01-f2",
          "front": "Marine Ecosystem Interactions",
          "back": "Designing studies of marine life interactions. Well-defined procedures are key to getting reliable and high-quality data."
        },
        {
          "id": "oceanography-401-l01-f3",
          "front": "Observation and Measurement Methods",
          "back": "The techniques and tools used to collect ocean data. A strong evaluation framework is needed to validate results and identify unintended consequences."
        }
      ]
    },
    {
      "id": "oceanography-401-l02",
      "title": "Oceanography Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-401-l02-a1",
          "type": "image",
          "title": "Workflow Diagramming",
          "content": "Use a flowchart to map the steps of your proposed workflow. Include decision points, control gates, and feedback loops."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, you will design a workflow that integrates strategic leadership with policy and operations. This hands-on experience will prepare you for your capstone project by testing the reliability of your designs under uncertain conditions, helping you understand the complexities of managing oceanographic projects."
        },
        {
          "id": "oceanography-401-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "This recap covers the key elements of project readiness. You will learn the importance of mapping ownership, setting criteria for decision gates, defining rollback conditions, and identifying verification signals. These components are essential for ensuring projects are well-prepared and can adapt to changes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to the strongest expected reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains blast radius quickly"
            },
            {
              "left": "Baseline monitor",
              "right": "Supports impact attribution"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "oceanography-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort constraint types into technical, policy, and stakeholder-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Throughput budget",
              "bucket": "Technical"
            },
            {
              "text": "Regulatory retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Public trust erosion risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Audit evidence requirement",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-401-l03-a1",
          "type": "practice",
          "title": "Review Your Foundations",
          "content": "Before you begin, quickly review the key terms from Lesson 1: circulation dynamics, ecosystem interactions, and observation methods."
        }
      ],
      "questions": [
        {
          "id": "oceanography-401-l03-q1",
          "text": "Which approach most improves decisions in ocean circulation dynamics?",
          "skillId": "oceanography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test failure modes, and monitor indicators"
            },
            {
              "id": "c",
              "text": "Treat all contexts as identical"
            },
            {
              "id": "d",
              "text": "Avoid uncertainty analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require explicit constraints, failure tests, and measured signals."
        },
        {
          "id": "oceanography-401-l03-q2",
          "text": "The 401 level should emphasize:",
          "skillId": "oceanography-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "strategic leadership, policy and operations integration, and capstone defense"
            },
            {
              "id": "b",
              "text": "Execution speed without review"
            },
            {
              "id": "c",
              "text": "No baselines or controls"
            },
            {
              "id": "d",
              "text": "Single perspective decision-making"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This level is explicitly structured around strategic leadership, policy and operations integration, and capstone defense."
        },
        {
          "id": "oceanography-401-l03-q3",
          "text": "What best strengthens marine ecosystem interactions reliability?",
          "skillId": "oceanography-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unowned workflows and unclear escalation"
            },
            {
              "id": "b",
              "text": "Control checkpoints, ownership mapping, and response thresholds"
            },
            {
              "id": "c",
              "text": "Untracked changes"
            },
            {
              "id": "d",
              "text": "No incident review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on clear controls, owners, and threshold-driven responses."
        },
        {
          "id": "oceanography-401-l03-q4",
          "text": "For observation and measurement methods, which practice is most defensible?",
          "skillId": "oceanography-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal wins only"
            },
            {
              "id": "b",
              "text": "Compare against baselines and include side-effect checks"
            },
            {
              "id": "c",
              "text": "Ignore difficult scenarios"
            },
            {
              "id": "d",
              "text": "Adjust criteria after results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline and side-effect analysis prevents biased or incomplete conclusions."
        },
        {
          "id": "oceanography-401-l03-q5",
          "text": "A mature climate-ocean coupling model should include:",
          "skillId": "oceanography-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Policy disconnected from measurement"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and corrective pathways"
            },
            {
              "id": "c",
              "text": "No transparency obligations"
            },
            {
              "id": "d",
              "text": "No remediation expectations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Governance maturity connects intention, measurement, and corrective response."
        }
      ]
    },
    {
      "id": "oceanography-401-l04",
      "title": "Oceanography Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "oceanography-401-l04-a1",
          "type": "image",
          "title": "Example Tradeoff Matrix",
          "content": "A table comparing three policy options (e.g., Marine Protected Area, Fishing Quotas, Artificial Reef) across four criteria: Effectiveness, Cost, Fairness, and Feasibility."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case study, we will analyze a coastal ecosystem to balance the needs of fisheries, the effects of warming trends, and the impact of policy interventions. You will learn to identify high-impact risks and competing constraints that affect decision-making in ocean management, providing a real-world context for environmental stewardship."
        },
        {
          "id": "oceanography-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We will introduce a tradeoff matrix to help evaluate different intervention options. You will learn to score these options based on their effectiveness, reliability, fairness, and feasibility. This tool will assist you in making structured, informed decisions when addressing complex oceanographic challenges."
        },
        {
          "id": "oceanography-401-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "This recap discusses how to learn from failures in project management. You will explore how to transform patterns of failure into safeguards, create response playbooks, and implement monitoring updates. This approach helps develop resilience and adaptability in your future oceanographic endeavors."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-401-l04-f1",
          "front": "Tradeoff matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "oceanography-401-l04-f2",
          "front": "Failure pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "oceanography-401-l04-f3",
          "front": "Response playbook",
          "back": "A predefined action sequence for safe and timely recovery."
        }
      ]
    },
    {
      "id": "oceanography-401-l05",
      "title": "Oceanography Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "oceanography-401-l05-a1",
          "type": "practice",
          "title": "Simulation Parameter Log",
          "content": "Keep a log of the parameters you set for each simulation run. Note the uncertainty levels, success thresholds, and the rationale for your choices."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, you will set up various intervention scenarios by configuring parameters related to uncertainty and establishing measurable success thresholds. This hands-on experience will allow you to understand how to design and test effective interventions in a simulated oceanographic environment."
        },
        {
          "id": "oceanography-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will conduct a review of the simulation outcomes. You will evaluate the results, identify any side effects, and assess how well your interventions align with governance constraints. This reflective process is crucial for understanding the full implications of your decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances ocean circulation dynamics and climate-ocean coupling.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "oceanography-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match risk conditions to the strongest mitigation responses.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Define role map and escalation authority"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and monitoring"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to explicit standards"
            },
            {
              "left": "Stakeholder opposition",
              "right": "Increase transparency and feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "oceanography-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "oceanography-401-l06-a1",
          "type": "practice",
          "title": "Synthesize Your Learning",
          "content": "Think about the case study and simulation. How do these practical exercises help in making better systems-level decisions?"
        }
      ],
      "questions": [
        {
          "id": "oceanography-401-l06-q1",
          "text": "When analyzing a complex oceanography case study involving multiple stakeholders, what is the primary purpose of a tradeoff matrix?",
          "skillId": "oceanography-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare options across multiple, competing criteria"
            },
            {
              "id": "c",
              "text": "To select the cheapest option regardless of impact"
            },
            {
              "id": "d",
              "text": "To ignore stakeholder concerns and focus only on technical data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate different choices against key criteria like cost, effectiveness, and fairness, making the decision process transparent."
        },
        {
          "id": "oceanography-401-l06-q2",
          "text": "In a simulation of a coastal ecosystem intervention, what is the most critical reason to configure 'uncertainty' parameters?",
          "skillId": "oceanography-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To make the simulation harder to complete"
            },
            {
              "id": "b",
              "text": "To test how resilient a strategy is to unpredictable real-world conditions"
            },
            {
              "id": "c",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "d",
              "text": "To eliminate the need for real-world data collection"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Modeling uncertainty helps assess whether a proposed solution will hold up under various potential future conditions, which is crucial for risk management."
        },
        {
          "id": "oceanography-401-l06-q3",
          "text": "A 'failure pattern' identified from past projects is most useful for:",
          "skillId": "oceanography-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame for past mistakes"
            },
            {
              "id": "b",
              "text": "Proactively designing safeguards and mitigations for a new project"
            },
            {
              "id": "c",
              "text": "Justifying why no new projects should be attempted"
            },
            {
              "id": "d",
              "text": "Creating overly complex and unnecessary procedures"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding recurring reasons for failure allows teams to build targeted controls and plans to prevent those same issues from happening again."
        },
        {
          "id": "oceanography-401-l06-q4",
          "text": "What is the main advantage of creating a 'response playbook' before a project begins?",
          "skillId": "oceanography-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "It ensures no problems will ever occur"
            },
            {
              "id": "b",
              "text": "It provides a pre-approved plan for rapid and safe recovery when a known risk occurs"
            },
            {
              "id": "c",
              "text": "It replaces the need for skilled personnel"
            },
            {
              "id": "d",
              "text": "It is only useful for public relations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A response playbook allows a team to react quickly and effectively to an incident, minimizing damage and recovery time by following tested procedures."
        },
        {
          "id": "oceanography-401-l06-q5",
          "text": "How does a simulation debrief strengthen the connection between a proposed intervention and governance constraints?",
          "skillId": "oceanography-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "By ignoring all constraints to encourage creativity"
            },
            {
              "id": "b",
              "text": "By allowing an explicit review of whether outcomes and side effects violate established rules or policies"
            },
            {
              "id": "c",
              "text": "By focusing only on the positive outcomes of the simulation"
            },
            {
              "id": "d",
              "text": "By proving that governance constraints are unnecessary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The debrief is a critical step to check if the simulated results, including unintended consequences, comply with the established governance framework."
        }
      ]
    },
    {
      "id": "oceanography-401-l07",
      "title": "Oceanography Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "oceanography-401-l07-a1",
          "type": "infographic",
          "title": "Accountability Flowchart",
          "content": "A diagram illustrating the flow of a decision from proposal to implementation, highlighting points for stakeholder review, data traceability, and remediation."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, you will examine how the benefits and burdens of ocean policies are distributed among different stakeholders and over time. Learning to map these impacts is essential for understanding and addressing the social and environmental implications of your decisions."
        },
        {
          "id": "oceanography-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will discuss the concept of accountability in oceanographic projects. You will learn about the importance of traceability, the rights to review decisions, and the obligations for remediation. Understanding these principles is vital for ensuring ethical and transparent practices in ocean management."
        },
        {
          "id": "oceanography-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will conclude with a checklist designed to bridge the gap between technical work and its policy, ethical, and community impacts. This tool guides you to reflect on your decisions, ensuring your conduct is responsible and aligns with community values. It reinforces integrity and accountability, fostering your growth as a steward of the ocean."
        }
      ],
      "flashcards": [
        {
          "id": "oceanography-401-l07-f1",
          "front": "Impact distribution",
          "back": "How outcomes differ across stakeholder groups and timescales."
        },
        {
          "id": "oceanography-401-l07-f2",
          "front": "Decision traceability",
          "back": "The evidence chain showing how and why a decision was made."
        },
        {
          "id": "oceanography-401-l07-f3",
          "front": "Responsible execution",
          "back": "Delivery behavior that balances effectiveness with ethical and policy safeguards."
        }
      ]
    },
    {
      "id": "oceanography-401-l08",
      "title": "Oceanography Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "oceanography-401-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "Use the provided template to structure your capstone plan. Sections include: Problem Statement, Objectives, Key Metrics, Stakeholders, Risks, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will create a comprehensive charter for your capstone project. This document will outline your primary goal, identify potential challenges, and specify success criteria. It will also include governance gates to guide your decision-making. Crafting a clear charter is a vital step in ensuring your project is well-planned and organized."
        },
        {
          "id": "oceanography-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare for your capstone, it is essential to gather solid evidence to support your arguments and respond thoughtfully to critiques. This involves anticipating challenges related to your technical work, policy choices, and stakeholder viewpoints. This preparation will strengthen your defense and improve your ability to communicate your ideas clearly and confidently."
        }
      ],
      "interactiveActivities": [
        {
          "id": "oceanography-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define objective and boundary conditions.",
            "List at least three measurable success indicators.",
            "Define escalation and corrective action criteria."
          ]
        },
        {
          "id": "oceanography-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    },
    {
      "id": "oceanography-401-l09",
      "title": "Capstone Project Defense",
      "type": "project",
      "duration": 45,
      "learningAids": [
        {
          "id": "oceanography-401-l09-a1",
          "type": "checklist",
          "title": "Defense Preparation Checklist",
          "content": "Review your project charter, data analysis, stakeholder impact map, and tradeoff matrix. Prepare a 10-minute presentation and anticipate questions on your methodology and conclusions."
        }
      ],
      "chunks": [
        {
          "id": "oceanography-401-l09-c1",
          "kind": "project",
          "title": "Final Project Submission and Defense",
          "content": "Submit your complete capstone project, including your research, analysis, data, and final recommendations. You will then present your findings to a review panel, defending your analytical methods, justifying your tradeoffs, and explaining your stakeholder engagement plan. Ensure your submission is well-documented and follows the charter you developed."
        },
        {
          "id": "oceanography-401-l09-c2",
          "kind": "recap",
          "title": "Synthesizing for Impact",
          "content": "This capstone project is the culmination of your work in this course. It demonstrates your ability to integrate scientific analysis, operational planning, and ethical considerations to develop defensible recommendations. Reflect on how you have applied the core concepts to address a complex oceanographic challenge and communicate your solution effectively."
        }
      ],
      "projectActivities": [
        {
          "id": "oceanography-401-l09-act1",
          "type": "project_defense",
          "title": "Present and Defend Your Recommendation",
          "description": "Present your capstone project findings and recommendations to a review panel. Be prepared to defend your analytical methods, justify your tradeoffs, and explain your stakeholder engagement plan.",
          "instructions": [
            "Deliver a concise presentation of your project (10-15 minutes).",
            "Answer critical review questions from the panel.",
            "Demonstrate how your recommendation is resilient to challenges regarding data, policy, and ethics."
          ]
        }
      ]
    }
  ]
};
