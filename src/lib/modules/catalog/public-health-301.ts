import type { LearningModule } from "@/lib/modules/types";

export const public_health_301_Module: LearningModule = {
  "id": "public-health-301",
  "title": "Public Health Systems and Governance",
  "description": "Level 301 curriculum in Public Health, focused on population health metrics, epidemiologic reasoning, prevention strategy, and health equity governance through case-driven analysis, simulations, and assessment-backed mastery.",
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
      "id": "public-health-301-l01",
      "title": "Public Health Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "public-health-301-l01-a1",
          "type": "image",
          "title": "Causal Loop Diagram",
          "content": "A visual prompt showing the interconnectedness of population health metrics, interventions, and outcomes, helping to frame epidemiologic reasoning."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "This lesson establishes the core concepts for the module. We will define key operational language and scope boundaries. We will also explore how population health metrics (measures of a community's health) and epidemiologic reasoning (the study of disease patterns) are interconnected in real-world public health systems."
        },
        {
          "id": "public-health-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Learners will model cause-and-effect pathways to understand how specific actions lead to public health outcomes. A key focus is identifying hidden assumptions that can lead to errors. Understanding these pathways is crucial for making informed decisions before selecting an intervention. This skill is essential for connecting theory to practice and highlighting the importance of tradeoffs, assumptions, and verification."
        },
        {
          "id": "public-health-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, all claims must be supported by observable, measurable indicators. We will also define uncertainty bounds to acknowledge the limits of our knowledge and establish review checkpoints to ensure our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-301-l01-f1",
          "front": "Population Health Metrics",
          "back": "Key measures of a community's health. Evaluating them requires clearly stating the pros and cons of any decision."
        },
        {
          "id": "public-health-301-l01-f2",
          "front": "Epidemiologic Reasoning",
          "back": "The systematic process of analyzing health data to ensure plans are robust enough to handle real-world variability."
        },
        {
          "id": "public-health-301-l01-f3",
          "front": "Prevention Strategy",
          "back": "The analytical process for assessing an intervention's quality, including its intended benefits and unintended consequences."
        }
      ]
    },
    {
      "id": "public-health-301-l02",
      "title": "Public Health Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-301-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "Use this canvas to map out your public health workflow, including decision points, metrics, and governance checks."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a decision-making workflow that emphasizes the analysis of system trade-offs. You will integrate metrics to assess progress and governance rules to guide decisions. Finally, you will test your workflow's resilience against uncertainty to see how well it adapts to unexpected challenges."
        },
        {
          "id": "public-health-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, we will map out responsibilities, establish control gates as checkpoints for quality, and create verification hooks to confirm decisions after they are made. These steps are crucial for responding effectively to public health challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-301-l02-act1",
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
          "id": "public-health-301-l02-act2",
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
              "text": "Data processing latency target",
              "bucket": "Technical"
            },
            {
              "text": "HIPAA compliance rule",
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
      "id": "public-health-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-301-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of core concepts from Lessons 1 and 2 to help you prepare."
        }
      ],
      "questions": [
        {
          "id": "public-health-301-l03-q1",
          "text": "Which action most improves the quality of population health metrics in practice?",
          "skillId": "public-health-301-skill-core",
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
          "id": "public-health-301-l03-q2",
          "text": "At the 301 level, what is the strongest emphasis?",
          "skillId": "public-health-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "System tradeoff analysis, metrics and governance integration, and cross-team decision design"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "Single stakeholder perspective only"
            },
            {
              "id": "d",
              "text": "Outcome claims without baselines"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 301 level is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "public-health-301-l03-q3",
          "text": "What best strengthens the reliability of epidemiologic reasoning?",
          "skillId": "public-health-301-skill-reliability",
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
        }
      ]
    },
    {
      "id": "public-health-301-l04",
      "title": "Public Health Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "public-health-301-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Template",
          "content": "A visual tool to structure your analysis of different intervention strategies, comparing them across effectiveness, equity, and feasibility."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l04-c1",
          "kind": "example",
          "title": "Case Context: Regional Outbreak Response",
          "content": "This case study focuses on a regional outbreak response, requiring a balance between surveillance, communication, and resource allocation. You will map the decision stakes and identify non-obvious risks to understand the complexities of managing a public health crisis."
        },
        {
          "id": "public-health-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to systematically compare different interventions. This matrix will help evaluate each option against key criteria, including effectiveness, reliability, equity (fairness in outcomes), and implementation feasibility, leading to more informed decisions."
        },
        {
          "id": "public-health-301-l04-c3",
          "kind": "recap",
          "title": "Learning from Failures",
          "content": "In this recap, we discuss how to learn from failures. We will analyze 'failure signatures'—patterns indicating what went wrong—to develop safeguards against future issues. We will also introduce response playbooks and monitoring protocols to improve future performance."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of options across multiple, often conflicting, priorities."
        },
        {
          "id": "public-health-301-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern that indicates a specific type of system risk."
        },
        {
          "id": "public-health-301-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step procedure for a safe and timely response to adverse events."
        }
      ]
    },
    {
      "id": "public-health-301-l05",
      "title": "Public Health Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "public-health-301-l05-a1",
          "type": "practice",
          "title": "Simulation Parameter Checklist",
          "content": "Use this checklist to define your intervention variables, uncertainty ranges, and success metrics before running the simulation."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation, you will configure public health interventions, define uncertainty parameters to represent real-world ambiguity, and set measurable thresholds to define success. This setup allows you to test your strategies in a controlled environment."
        },
        {
          "id": "public-health-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, we will conduct a debrief to review the results. We will analyze the expected gains, unintended side effects, and compliance with governance standards. This process is essential for refining decision-making skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances population health metrics and health equity governance.",
          "instructions": [
            "Define your primary objective and ethical guardrails before selecting an intervention.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that would confirm or falsify the success of your chosen path."
          ]
        },
        {
          "id": "public-health-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create an explicit role and escalation map"
            },
            {
              "left": "Weak data signal",
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
      "id": "public-health-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "public-health-301-l06-a1",
          "type": "practice",
          "title": "Case Study Debrief Guide",
          "content": "Review key decision points from the case study and simulation to prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "public-health-301-l06-q1",
          "text": "In a case analysis, what is the primary purpose of a tradeoff matrix?",
          "skillId": "public-health-301-skill-eval",
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
              "text": "To list only the positive aspects of a preferred intervention"
            },
            {
              "id": "d",
              "text": "To replace the need for stakeholder communication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a tool for structured comparison, helping to make decision logic transparent and defensible, especially when no option is perfect."
        },
        {
          "id": "public-health-301-l06-q2",
          "text": "A 'failure signature' is identified during a post-incident review. What is the most productive next step?",
          "skillId": "public-health-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to a single individual"
            },
            {
              "id": "b",
              "text": "Ignoring the pattern as a one-time event"
            },
            {
              "id": "c",
              "text": "Developing a specific safeguard or control to prevent recurrence"
            },
            {
              "id": "d",
              "text": "Deleting the data related to the failure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The goal of identifying a failure signature is to learn from it and improve the system's resilience by creating targeted safeguards."
        },
        {
          "id": "public-health-301-l06-q3",
          "text": "When running a public health simulation, why is it critical to define 'uncertainty parameters'?",
          "skillId": "public-health-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To guarantee a successful outcome"
            },
            {
              "id": "b",
              "text": "To test how robust a strategy is against real-world variability and incomplete information"
            },
            {
              "id": "c",
              "text": "To make the simulation easier to complete"
            },
            {
              "id": "d",
              "text": "To eliminate the need for post-simulation analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Uncertainty parameters are essential for stress-testing a strategy and understanding its potential performance under various realistic conditions, not just the best-case scenario."
        }
      ]
    },
    {
      "id": "public-health-301-l07",
      "title": "Public Health Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "public-health-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A visual diagram to map the potential positive and negative impacts of a policy on different community groups, highlighting equity considerations."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "This lesson focuses on identifying how the benefits and burdens of public health decisions are distributed among different stakeholder groups. We will pay special attention to ensuring that policies are designed to be fair and equitable, especially for vulnerable populations."
        },
        {
          "id": "public-health-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "We will design an accountability structure for public health governance. This includes creating clear decision-making traceability, establishing review rights for stakeholders, and setting remediation standards to address issues. These elements are vital for maintaining public trust and integrity."
        },
        {
          "id": "public-health-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will synthesize our learnings into a checklist for responsible execution. This tool will integrate policy compliance, ethical considerations, technical reliability, and stakeholder trust to ensure that public health decisions are made and implemented responsibly."
        }
      ],
      "flashcards": [
        {
          "id": "public-health-301-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how benefits and harms of a policy are allocated across different stakeholder groups."
        },
        {
          "id": "public-health-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct and explain why a decision was made, by whom, and based on what evidence."
        },
        {
          "id": "public-health-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery model that balances effectiveness with fairness, transparency, and the capacity for correction."
        }
      ]
    },
    {
      "id": "public-health-301-l08",
      "title": "Public Health Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "public-health-301-l08-a1",
          "type": "practice",
          "title": "Capstone Project Charter Template",
          "content": "A structured document to help you define your project's scope, objectives, metrics, and governance plan."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will draft a detailed charter for your capstone project. This charter will outline the project's scope, constraints, success metrics, and governance checkpoints. This structured planning process is essential for a successful project."
        },
        {
          "id": "public-health-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the capstone, we will focus on ensuring all arguments are backed by solid evidence and practice responding to critical feedback. This preparation is essential for defending your work against technical, policy, and ethical challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "public-health-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your project objective and boundary conditions in one clear sentence.",
            "Define at least three measurable success indicators.",
            "Document a governance escalation pathway for critical failures or ethical concerns."
          ]
        },
        {
          "id": "public-health-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your proposed capstone approach against a simulated panel of technical, policy, and stakeholder experts."
        }
      ]
    },
    {
      "id": "public-health-301-l09",
      "title": "Capstone Project: Defensible Recommendation",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "public-health-301-l09-a1",
          "type": "rubric",
          "title": "Capstone Assessment Rubric",
          "content": "Details the evaluation criteria for your final project, including evidence quality, tradeoff analysis, ethical considerations, and communication clarity."
        }
      ],
      "chunks": [
        {
          "id": "public-health-301-l09-c1",
          "kind": "project",
          "title": "Project Submission",
          "content": "Synthesize your learnings from the entire module to produce a defensible public health recommendation for a complex, real-world scenario. Your submission must include a detailed analysis, a tradeoff matrix, an ethical impact assessment, and a clear communication plan for diverse stakeholders."
        },
        {
          "id": "public-health-301-l09-c2",
          "kind": "recap",
          "title": "Module Synthesis",
          "content": "This capstone project integrates all core concepts: applying population health metrics, using epidemiologic reasoning, evaluating prevention strategies, and embedding health equity governance into your final recommendation. It is the ultimate test of your ability to make sound, defensible public health decisions."
        }
      ]
    }
  ]
};
