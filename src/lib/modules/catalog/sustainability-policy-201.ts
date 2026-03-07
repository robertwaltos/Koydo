import type { LearningModule } from "@/lib/modules/types";

export const sustainability_policy_201_Module: LearningModule = {
  "id": "sustainability-policy-201",
  "title": "Sustainability Policy Applied Practice",
  "description": "A Level 201 curriculum in Sustainability Policy focused on designing policy instruments, navigating transition economics, managing stakeholder governance, and ensuring long-term impact accountability. This module uses case-driven analysis, interactive simulations, and assessment-backed mastery to build practical skills.",
  "subject": "Policy Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sustainability",
    "governance"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply policy instrument design with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for transition economics under realistic constraints",
    "Evaluate stakeholder governance decisions with baseline and side-effect analysis",
    "Strengthen long-term impact accountability with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "sustainability-policy-201-l01",
      "title": "Sustainability Policy Core Foundations",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l01-a1",
          "type": "diagram",
          "title": "Policy Design Framework",
          "content": "A flowchart showing the relationship between policy goals, instrument design, transition economics, and stakeholder governance."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "Effective sustainability policy starts with clear language. In this section, we'll define key terms for designing policy instruments, understand the scope of their impact, and set realistic boundaries. This foundation helps connect policy ideas to the real-world economics of transitioning to more sustainable systems."
        },
        {
          "id": "sustainability-policy-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Every policy action has a reaction. Here, we'll practice modeling these cause-and-effect pathways to predict outcomes. A key skill is identifying the hidden assumptions in our logic that could lead to mistakes, allowing us to choose more effective and reliable interventions to solve sustainability challenges."
        },
        {
          "id": "sustainability-policy-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable evidence or indicators. We will practice acknowledging the limits of our knowledge by defining the bounds of uncertainty. Regular review checkpoints will ensure our analysis is accurate, building a strong and defensible foundation for our policy work."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-201-l01-f1",
          "front": "Policy Instrument Design",
          "back": "The process of choosing a tool (e.g., tax, subsidy, regulation) to achieve a policy goal, requiring clear analysis of tradeoffs."
        },
        {
          "id": "sustainability-policy-201-l01-f2",
          "front": "Transition Economics",
          "back": "The study of the financial and social costs and benefits of shifting from one system to another, such as from fossil fuels to renewable energy."
        },
        {
          "id": "sustainability-policy-201-l01-f3",
          "front": "Stakeholder Governance",
          "back": "The process of involving affected parties in decision-making to ensure fairness, assess impacts, and build trust."
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l02",
      "title": "Sustainability Policy Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l02-a1",
          "type": "image",
          "title": "Sample Workflow Kanban Board",
          "content": "An image of a digital Kanban board with columns for 'Analysis', 'Peer Review', 'Stakeholder Feedback', and 'Approved'."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design and build a structured, evidence-based workflow for analyzing a policy problem. After designing your process, you will test its resilience against unexpected events and uncertainties. This hands-on experience highlights the importance of creating adaptable yet repeatable methods."
        },
        {
          "id": "sustainability-policy-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "A reliable workflow needs clear checkpoints. We'll recap how to map out responsibilities, establish 'control gates' to monitor progress and quality, and implement verification steps after key decisions. These elements are essential for ensuring your policy analysis is accountable and effective."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects"
            },
            {
              "left": "Rollback trigger",
              "right": "Limits blast radius during failures"
            },
            {
              "left": "Baseline dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "sustainability-policy-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Classification",
          "description": "Sort constraints into technical, policy, and stakeholder-impact buckets.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Service latency target",
              "bucket": "Technical"
            },
            {
              "text": "Compliance retention rule",
              "bucket": "Policy"
            },
            {
              "text": "Community trust risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the core concepts from the first two lessons. Focus on definitions and the purpose of structured workflows."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-201-l03-q1",
          "text": "Which action most improves policy instrument design quality in practice?",
          "skillId": "sustainability-policy-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skip explicit constraints and rely on intuition"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor indicators, and test failure cases"
            },
            {
              "id": "c",
              "text": "Treat all outcomes as equivalent"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions and measurable stress tests."
        },
        {
          "id": "sustainability-policy-201-l03-q2",
          "text": "At level 201, the strongest emphasis is on:",
          "skillId": "sustainability-policy-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, structured workflow practice, and evidence-based interpretation"
            },
            {
              "id": "b",
              "text": "fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "a single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 level is explicitly designed around method execution, structured workflow practice, and evidence-based interpretation."
        },
        {
          "id": "sustainability-policy-201-l03-q3",
          "text": "What best strengthens the reliability of transition economics?",
          "skillId": "sustainability-policy-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "No ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc changes without logs"
            },
            {
              "id": "d",
              "text": "No postmortem process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation are explicit and repeatable."
        },
        {
          "id": "sustainability-policy-201-l03-q4",
          "text": "When evaluating stakeholder governance, which approach is most defensible?",
          "skillId": "sustainability-policy-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Use anecdotal examples only"
            },
            {
              "id": "b",
              "text": "Compare interventions against a baseline and monitor side effects"
            },
            {
              "id": "c",
              "text": "Remove difficult scenarios from evaluation"
            },
            {
              "id": "d",
              "text": "Change target definitions after results are known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring reduce overclaiming and hidden risk."
        },
        {
          "id": "sustainability-policy-201-l03-q5",
          "text": "A mature long-term impact accountability model should include:",
          "skillId": "sustainability-policy-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "a one-time review with no corrective pathway"
            },
            {
              "id": "b",
              "text": "policy links, measurable thresholds, and remediation triggers"
            },
            {
              "id": "c",
              "text": "no public or stakeholder transparency"
            },
            {
              "id": "d",
              "text": "unbounded discretion without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and corrective pathways."
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l04",
      "title": "Sustainability Policy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l04-a1",
          "type": "diagram",
          "title": "Example Tradeoff Matrix",
          "content": "A visual table comparing three policy options (e.g., carbon tax, green subsidies, public transit investment) across criteria like 'Cost', 'Effectiveness', 'Equity', and 'Feasibility'."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "We'll analyze a real-world case: a city's plan to reduce carbon emissions. This 'decarbonization roadmap' involves difficult tradeoffs between affordability, reliability, and environmental targets. You will map the stakes for different groups and identify hidden risks, gaining a deep understanding of the complexities involved in responsible policy."
        },
        {
          "id": "sustainability-policy-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "A tradeoff matrix is a powerful tool for making complex decisions. We will build one for our case study to systematically compare different policy options. By scoring each option against criteria like effectiveness, fairness, and feasibility, you can make a more informed and defensible recommendation."
        },
        {
          "id": "sustainability-policy-201-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "Mistakes and failures are valuable sources of learning. In this recap, we'll discuss how to analyze what went wrong in a policy implementation and turn those lessons into safeguards. This includes creating response playbooks for crises and updating monitoring to catch issues earlier, making future policies more resilient."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing multiple options across a set of weighted criteria to clarify a complex decision."
        },
        {
          "id": "sustainability-policy-201-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of data or events that indicates a specific type of system risk or failure."
        },
        {
          "id": "sustainability-policy-201-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step plan for responding to a specific failure or adverse event safely and quickly."
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l05",
      "title": "Sustainability Policy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A screenshot of a mock simulation interface showing input variables (e.g., carbon tax rate) and output charts (e.g., emissions over time, economic impact)."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation, you will test policies in a virtual environment. You'll configure different interventions, define parameters for uncertainty (like economic shifts or new technologies), and set measurable thresholds for success. This provides a safe space to see how your policy might perform under various future conditions."
        },
        {
          "id": "sustainability-policy-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "The most important part of a simulation is interpreting the results. After each run, we will debrief by analyzing the expected benefits, unintended side effects, and compliance with governance standards. This process is crucial for refining strategies and learning from the simulated outcomes before applying them in the real world."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three policy paths in a simulation. Justify which one best balances effectiveness with long-term accountability.",
          "instructions": [
            "Define your primary objective and ethical guardrails before starting.",
            "For each option, record one near-term and one long-term tradeoff revealed by the simulation.",
            "Select output metrics that would either confirm or falsify your final choice."
          ]
        },
        {
          "id": "sustainability-policy-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create an explicit role and escalation map"
            },
            {
              "left": "Weak signal quality",
              "right": "Strengthen intake validation and quality checks"
            },
            {
              "left": "Policy drift",
              "right": "Re-anchor controls to documented standards"
            },
            {
              "left": "Stakeholder backlash",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the case study and simulation lessons. Focus on applying concepts like tradeoff analysis and risk mitigation."
        }
      ],
      "questions": [
        {
          "id": "sustainability-policy-201-l06-q1",
          "text": "When using a tradeoff matrix in a case analysis, what is its primary purpose?",
          "skillId": "sustainability-policy-201-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To make a complex decision more transparent and systematic"
            },
            {
              "id": "c",
              "text": "To eliminate the need for stakeholder feedback"
            },
            {
              "id": "d",
              "text": "To focus only on the financial cost of each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structuring analysis and making the evaluation of multiple, conflicting criteria clear and defensible."
        },
        {
          "id": "sustainability-policy-201-l06-q2",
          "text": "What is the main advantage of using simulation in policy design?",
          "skillId": "sustainability-policy-201-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "It provides a perfectly accurate prediction of the future."
            },
            {
              "id": "b",
              "text": "It allows for testing policies against various conditions and uncertainties in a low-risk environment."
            },
            {
              "id": "c",
              "text": "It replaces the need for real-world data and evidence."
            },
            {
              "id": "d",
              "text": "It guarantees the chosen policy will be popular with all stakeholders."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations are valuable for exploring potential outcomes and stress-testing policies without real-world consequences."
        },
        {
          "id": "sustainability-policy-201-l06-q3",
          "text": "In a case study debrief, identifying a 'failure signature' helps to:",
          "skillId": "sustainability-policy-201-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "assign blame to a single individual"
            },
            {
              "id": "b",
              "text": "ignore the problem since it already happened"
            },
            {
              "id": "c",
              "text": "recognize a recurring pattern of risk that can be monitored and mitigated in the future"
            },
            {
              "id": "d",
              "text": "conclude that the policy goal was impossible from the start"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A failure signature is a pattern that helps teams move from reacting to one-off incidents to proactively addressing systemic risks."
        },
        {
          "id": "sustainability-policy-201-l06-q4",
          "text": "A 'recovery playbook' is most useful for:",
          "skillId": "sustainability-policy-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "planning the initial policy launch"
            },
            {
              "id": "b",
              "text": "ensuring a fast, safe, and consistent response when something goes wrong"
            },
            {
              "id": "c",
              "text": "marketing the policy's success to the public"
            },
            {
              "id": "d",
              "text": "calculating the final budget of a project"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery playbook is a pre-planned procedure designed to manage adverse events effectively and minimize harm."
        },
        {
          "id": "sustainability-policy-201-l06-q5",
          "text": "When communicating simulation results to stakeholders, it is most important to:",
          "skillId": "sustainability-policy-201-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "present only the best-case scenario to build confidence"
            },
            {
              "id": "b",
              "text": "use highly technical jargon to demonstrate expertise"
            },
            {
              "id": "c",
              "text": "clearly state the key assumptions and the range of uncertainty in the results"
            },
            {
              "id": "d",
              "text": "hide any results that show negative side effects"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Transparent communication about assumptions and uncertainty builds trust and leads to more robust decision-making."
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l07",
      "title": "Sustainability Policy Ethics and Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "A diagram with concentric circles showing a policy's impact on primary, secondary, and tertiary stakeholders, with notes on benefits and burdens for each group."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact and Equity",
          "content": "Sustainability policies create winners and losers. In this lesson, we will map how the benefits and burdens of a policy are distributed among different groups. Recognizing where these impacts may be unequal is a critical step toward designing policies that are not only effective but also fair and equitable."
        },
        {
          "id": "sustainability-policy-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Good governance requires a clear structure for accountability. This means ensuring decisions can be traced to their source, stakeholders have a right to review and appeal, and clear standards exist for resolving issues. We will explore how to build this 'architecture' to foster trust and ensure long-term effectiveness."
        },
        {
          "id": "sustainability-policy-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To bring it all together, we'll use a final checklist for responsible execution. This tool ensures we have considered all critical elements before implementation: clear policy guidelines, ethical guardrails, technical reliability, and stakeholder trust. This helps confirm our policy is well-rounded and ready for the real world."
        }
      ],
      "flashcards": [
        {
          "id": "sustainability-policy-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative effects of a policy are allocated across different stakeholder groups."
        },
        {
          "id": "sustainability-policy-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct and explain why a decision was made, by whom, and based on what evidence."
        },
        {
          "id": "sustainability-policy-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that balances effectiveness (achieving the goal) with fairness and the capacity to correct harms."
        }
      ]
    },
    {
      "id": "sustainability-policy-201-l08",
      "title": "Sustainability Policy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sustainability-policy-201-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "An image of a document template with sections for 'Problem Statement', 'Proposed Policy', 'Success Metrics', 'Identified Risks', and 'Governance Plan'."
        }
      ],
      "chunks": [
        {
          "id": "sustainability-policy-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this collaborative lab, you will create a detailed charter for your capstone project. This document will serve as your blueprint, outlining the project's scope, constraints, success metrics, and governance checkpoints. Drafting the charter ensures your team is aligned on goals and responsibilities from the start."
        },
        {
          "id": "sustainability-policy-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "A good recommendation requires a strong defense. As we prepare for the final capstone presentation, we will focus on anticipating critiques and gathering the evidence needed to respond thoughtfully. This preparation will help you present your work with confidence and demonstrate a professional level of readiness."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sustainability-policy-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your policy objective and boundary conditions clearly.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "sustainability-policy-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against a panel of simulated technical, policy, and stakeholder critiques.",
          "instructions": [
            "Present your core recommendation in 90 seconds.",
            "Respond to three rounds of critical questions.",
            "Refine your talking points based on the panel's feedback."
          ]
        }
      ]
    }
  ]
};
