import type { LearningModule } from "@/lib/modules/types";

export const public_health_401_Module: LearningModule = {
  "id": "public-health-401",
  "title": "Public Health Leadership and Capstone",
  "description": "Level 401 curriculum in Public Health, focused on population health metrics, epidemiologic reasoning, prevention strategy, and health equity governance through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "health",
    "policy"
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
    "Apply population health metrics with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for epidemiologic reasoning under realistic constraints",
    "Evaluate prevention strategy decisions with baseline and side-effect analysis",
    "Strengthen health equity governance with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "public-health-401-l01",
      "title": "Public Health Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-401-l01-a1",
          "type": "image",
          "title": "Core Concepts Infographic",
          "content": "A visual summary of population health metrics, epidemiologic reasoning, and evidence standards."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "This lesson introduces the fundamental concepts of public health leadership. We will define key operational language, establish the scope of our analysis, and examine how population health metrics and epidemiologic reasoning connect in real-world systems to improve community health."
        },
        {
          "id": "public-health-401-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Learners will model cause-and-effect pathways to understand how specific actions lead to public health outcomes. We will practice identifying critical assumptions that could undermine our reasoning before choosing an intervention, a vital skill for making informed decisions."
        },
        {
          "id": "public-health-401-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable, measurable indicators. We will establish the importance of defining uncertainty bounds to understand the limits of our knowledge and using review checkpoints to ensure our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-401-l01-f1",
          "front": "Population Health Metrics",
          "back": "Quantitative measures used to assess the health of a population, requiring clear analysis of tradeoffs."
        },
        {
          "id": "public-health-401-l01-f2",
          "front": "Epidemiologic Reasoning",
          "back": "The systematic process of analyzing health data to understand patterns, causes, and effects of diseases in populations."
        },
        {
          "id": "public-health-401-l01-f3",
          "front": "Prevention Strategy",
          "back": "A plan of action designed to stop health problems before they occur, evaluated for its effectiveness and potential side effects."
        }
      ]
    },
    {
      "id": "public-health-401-l02",
      "title": "Public Health Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-401-l02-a1",
          "type": "document",
          "title": "Workflow Diagram Template",
          "content": "A downloadable template to help you structure your public health workflow, including decision points and review gates."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a public health workflow that aligns strategic policies with operational actions. The goal is to create a resilient process that can withstand real-world uncertainties and prepare you for a capstone-level defense and review."
        },
        {
          "id": "public-health-401-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, we will map out roles and responsibilities for everyone involved. This includes establishing control gates as checkpoints to monitor progress and creating verification steps after decisions are made to maintain quality and accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Peer Review Before Action",
              "right": "Reduces preventable errors"
            },
            {
              "left": "Emergency Stop Mechanism",
              "right": "Limits the impact of failures"
            },
            {
              "left": "Baseline Performance Dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Post-Project Review",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "public-health-401-l02-act2",
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
              "text": "Data processing speed target",
              "bucket": "Technical"
            },
            {
              "text": "Patient data privacy rule",
              "bucket": "Policy"
            },
            {
              "text": "Risk to community trust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Public incident disclosure protocol",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-401-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-401-l03-a1",
          "type": "document",
          "title": "Key Terms Review Sheet",
          "content": "A one-page summary of key terms and concepts from the first two lessons to help you prepare."
        }
      ],
      "questions": [
        {
          "id": "public-health-401-l03-q1",
          "text": "Which action most improves the quality of population health metrics in practice?",
          "skillId": "public-health-401-skill-core",
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
          "explanation": "High-quality decisions require explicit assumptions, measurable indicators, and stress tests."
        },
        {
          "id": "public-health-401-l03-q2",
          "text": "At the 401 level, the strongest emphasis is on:",
          "skillId": "public-health-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic leadership, policy and operations alignment, and capstone defense"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "Considering a single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "Making outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 level is explicitly designed around strategic leadership, aligning policy with operations, and capstone-level review."
        },
        {
          "id": "public-health-401-l03-q3",
          "text": "What best strengthens the reliability of epidemiologic reasoning?",
          "skillId": "public-health-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "No clear ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Ad-hoc changes without documentation"
            },
            {
              "id": "d",
              "text": "No post-incident review process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation paths are explicit and repeatable."
        }
      ]
    },
    {
      "id": "public-health-401-l04",
      "title": "Public Health Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-401-l04-a1",
          "type": "image",
          "title": "Case Study Decision Tree",
          "content": "A visual representation of the key decision points and potential outcomes in the regional outbreak case study."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "We will analyze a regional outbreak response, balancing surveillance, communication, and resource allocation. Learners will map the stakes for different communities and identify hidden risks, revealing the complexities of managing public health crises."
        },
        {
          "id": "public-health-401-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to systematically compare different interventions. This tool helps evaluate options based on their effectiveness, reliability, equity, and feasibility, leading to more informed and defensible decisions."
        },
        {
          "id": "public-health-401-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This section focuses on turning lessons from failures into proactive safeguards. We will discuss how to create response playbooks for future incidents and establish clear monitoring protocols to track recovery, improving resilience over time."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool for comparing decision options across multiple, often conflicting, criteria."
        },
        {
          "id": "public-health-401-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring pattern of observable indicators that signals a specific type of system risk."
        },
        {
          "id": "public-health-401-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step guide for responding safely and effectively to a crisis or adverse event."
        }
      ]
    },
    {
      "id": "public-health-401-l05",
      "title": "Public Health Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-401-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard Preview",
          "content": "A screenshot of the simulation interface, showing intervention levers, uncertainty parameters, and outcome metrics."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive practice, you will configure a public health scenario simulation. This involves selecting interventions, defining uncertainty parameters, and setting measurable success thresholds to gain hands-on experience in intervention planning and evaluation."
        },
        {
          "id": "public-health-401-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation, we will conduct a debrief to analyze the results. We will assess expected gains, identify unintended side effects, and ensure all actions complied with governance standards. This reflection is crucial for refining strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances population health metrics and health equity governance.",
          "instructions": [
            "Define your primary objective and ethical guardrails before starting.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that would confirm or disprove your chosen strategy's success."
          ]
        },
        {
          "id": "public-health-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create an explicit role and escalation map"
            },
            {
              "left": "Unreliable data input",
              "right": "Strengthen intake validation and quality checks"
            },
            {
              "left": "Deviation from standards",
              "right": "Re-anchor controls to documented policies"
            },
            {
              "left": "Negative community reaction",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "public-health-401-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-401-l06-a1",
          "type": "document",
          "title": "Case Analysis Framework",
          "content": "A structured guide for analyzing public health cases, focusing on identifying stakes, tradeoffs, and failure points."
        }
      ],
      "questions": [
        {
          "id": "public-health-401-l06-q1",
          "text": "When constructing a tradeoff matrix for a case analysis, what is the primary goal?",
          "skillId": "public-health-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect"
            },
            {
              "id": "b",
              "text": "To systematically compare options across multiple, competing criteria like equity and feasibility"
            },
            {
              "id": "c",
              "text": "To choose the cheapest option regardless of outcome"
            },
            {
              "id": "d",
              "text": "To ignore difficult tradeoffs and focus only on benefits"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is designed to make complex decisions more transparent by explicitly comparing options against key criteria."
        },
        {
          "id": "public-health-401-l06-q2",
          "text": "During a simulation debrief, what is the most critical activity?",
          "skillId": "public-health-401-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ignoring any results that don't match your initial hypothesis"
            },
            {
              "id": "b",
              "text": "Declaring success immediately if the primary metric improved"
            },
            {
              "id": "c",
              "text": "Analyzing both intended outcomes and unintended side effects against governance standards"
            },
            {
              "id": "d",
              "text": "Focusing only on the technical aspects of the simulation software"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A thorough debrief requires a holistic review of results, including side effects and compliance, to learn effectively."
        },
        {
          "id": "public-health-401-l06-q3",
          "text": "What is the main purpose of creating a 'recovery playbook' after a public health failure?",
          "skillId": "public-health-401-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to a single individual"
            },
            {
              "id": "b",
              "text": "To create a documented, repeatable process for responding to similar future events"
            },
            {
              "id": "c",
              "text": "To ensure the same failure never happens again, which is often unrealistic"
            },
            {
              "id": "d",
              "text": "To create more bureaucracy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Playbooks codify lessons learned into actionable procedures to improve future response and resilience."
        }
      ]
    },
    {
      "id": "public-health-401-l07",
      "title": "Public Health Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-401-l07-a1",
          "type": "image",
          "title": "Ethical Framework Chart",
          "content": "A chart outlining the key principles of ethical public health practice, including stakeholder impact and accountability."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "This lesson focuses on mapping the impact of public health decisions on various stakeholders. We will analyze how benefits and burdens are distributed among different groups to ensure policies are designed and implemented equitably."
        },
        {
          "id": "public-health-401-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "To ensure accountability, we will design a clear framework for decision traceability. This involves documenting why decisions were made, who made them, and establishing standards for remediation if issues arise, thereby maintaining public trust."
        },
        {
          "id": "public-health-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will conclude with a comprehensive checklist for responsible execution. This tool integrates public policy, ethical standards, technical reliability, and stakeholder trust to ensure that public health actions are both effective and just."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-401-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how the benefits and harms of a policy are allocated across different population groups."
        },
        {
          "id": "public-health-401-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct and understand why a decision was made, by whom, and based on what evidence."
        },
        {
          "id": "public-health-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of operation that balances effectiveness with fairness and includes pathways for correction and accountability."
        }
      ]
    },
    {
      "id": "public-health-401-l08",
      "title": "Public Health Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-401-l08-a1",
          "type": "document",
          "title": "Capstone Charter Template",
          "content": "A fillable document to guide the creation of your capstone charter, including sections for scope, metrics, and governance."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will draft a detailed charter for your capstone project. This document will define your project's scope, constraints, success metrics, and governance checkpoints, providing a clear roadmap for execution."
        },
        {
          "id": "public-health-401-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final capstone presentation, we will focus on building a defensible case for your recommendations. This involves anticipating critical questions, preparing evidence-based responses, and communicating your work with confidence and clarity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your project's primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "public-health-401-l08-act2",
          "type": "debate_simulator",
          "title": "Simulated Capstone Defense",
          "description": "Defend your capstone approach against simulated critiques from technical, policy, and stakeholder perspectives."
        }
      ]
    },
    {
      "id": "public-health-401-l09",
      "title": "Capstone Defense and Final Review",
      "type": "project",
      "duration": 20,
      "learningAids": [
        {
          "id": "public-health-401-l09-a1",
          "type": "document",
          "title": "Presentation Scoring Rubric",
          "content": "The official rubric that will be used to evaluate your final capstone presentation and report, detailing criteria for evidence, reasoning, and communication."
        }
      ],
      "chunks": [
        {
          "id": "public-health-401-l09-c1",
          "kind": "practice",
          "title": "Final Presentation and Submission",
          "content": "Present your capstone project to a review panel. This involves communicating your findings, justifying your recommendations with evidence, and responding to critical questions. Submit your final report and supporting documentation."
        },
        {
          "id": "public-health-401-l09-c2",
          "kind": "recap",
          "title": "Module Synthesis and Next Steps",
          "content": "This capstone concludes the module by integrating all core concepts: population health metrics, epidemiologic reasoning, prevention strategy, and health equity governance. Reflect on your learning journey and consider how to apply these leadership skills in future public health challenges."
        }
      ]
    }
  ]
};
