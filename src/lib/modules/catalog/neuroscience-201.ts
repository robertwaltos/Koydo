import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_201_Module: LearningModule = {
  "id": "neuroscience-201",
  "title": "Neuroscience Applied Practice",
  "description": "A level 201 curriculum in Neuroscience focused on neural signaling, cognitive systems, experimental methods, and clinical applications. This module uses rigorous scenario analysis and assessment-backed learning to build mastery.",
  "subject": "Neuroscience",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "biology",
    "cognition"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain and apply principles of neural signaling with clear assumptions and constraints.",
    "Build repeatable workflows for studying cognitive systems with measurable checkpoints.",
    "Evaluate experimental outcomes against baseline and target metrics.",
    "Apply governance patterns to improve the quality of clinical translation decisions.",
    "Communicate tradeoffs across technical, ethical, and patient-impact dimensions.",
    "Synthesize neuroscience methods into defensible, evidence-based recommendations."
  ],
  "lessons": [
    {
      "id": "neuroscience-201-l01",
      "title": "Neuroscience Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "neuroscience-201-l01-a1",
          "type": "image",
          "title": "Neural Pathway Diagram",
          "content": "A diagram of a neural pathway with key vocabulary (neuron, synapse, neurotransmitter, action potential) clearly labeled."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l01-c1",
          "kind": "concept",
          "title": "Vocabulary and System Boundaries",
          "content": "In this lesson, we will explore key vocabulary essential for understanding Neuroscience. We will also define the scope of our study, helping us understand how different parts of the nervous system work together. Establishing this shared language is the foundation for investigating neural signaling and cognitive systems."
        },
        {
          "id": "neuroscience-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structures and Constraints",
          "content": "Here, students will practice mapping out cause-and-effect relationships in neural systems. This involves identifying unspoken assumptions and checking if our ideas are practical before suggesting an intervention. This process helps us think critically about how different factors influence biological outcomes."
        },
        {
          "id": "neuroscience-201-l01-c3",
          "kind": "recap",
          "title": "Evidence-Based Discipline",
          "content": "This module introduces an evidence-based approach. Here, every claim must be supported by observable data. We'll also learn to account for uncertainty, acknowledging that not all outcomes are guaranteed. This method encourages us to base our conclusions on solid evidence rather than intuition."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-201-l01-f1",
          "front": "Neural Signaling",
          "back": "The process of communication between neurons, which we study by making clear assumptions and using measurable controls."
        },
        {
          "id": "neuroscience-201-l01-f2",
          "front": "Cognitive Systems",
          "back": "The mental processes, like memory, attention, and decision-making, that allow the brain to perform complex tasks."
        },
        {
          "id": "neuroscience-201-l01-f3",
          "front": "Experimental Methods",
          "back": "Scientific procedures used to test hypotheses and determine if a treatment or change has a measurable effect."
        }
      ]
    },
    {
      "id": "neuroscience-201-l02",
      "title": "Neuroscience Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-201-l02-a1",
          "type": "image",
          "title": "Experimental Workflow",
          "content": "A flowchart illustrating a repeatable experimental workflow, from hypothesis to data analysis and conclusion."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l02-c1",
          "kind": "practice",
          "title": "Method Sequence Construction",
          "content": "In this interactive lab, learners will design a step-by-step experimental workflow. They will focus on making the process reliable and repeatable, then test how well it performs when faced with unpredictable variables."
        },
        {
          "id": "neuroscience-201-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will review our experimental plan. This includes assigning responsibilities, setting up progress checks, defining triggers for when we need to revise our approach, and keeping detailed evidence logs to ensure our work is transparent and defensible."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-201-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each experimental design choice to its most likely effect on the system.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower probability of severe failure"
            },
            {
              "left": "Gated checkpoints",
              "right": "Prevents propagation of errors"
            },
            {
              "left": "Comparison to baseline",
              "right": "Supports defensible claims of impact"
            },
            {
              "left": "Retrospective review",
              "right": "Improves decisions in future iterations"
            }
          ]
        },
        {
          "id": "neuroscience-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these experimental constraints into their correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Data processing latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy (HIPAA) requirement",
              "bucket": "Policy"
            },
            {
              "text": "Participant time commitment",
              "bucket": "User Impact"
            },
            {
              "text": "IRB review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-201-l03-a1",
          "type": "image",
          "title": "Core Methods Checklist",
          "content": "A graphic checklist summarizing key practices for reliable experimental design, such as defining criteria and monitoring indicators."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-201-l03-q1",
          "text": "Which practice most strengthens the study of neural signaling in applied settings?",
          "skillId": "neuroscience-201-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Use assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Define failure criteria and monitor leading indicators"
            },
            {
              "id": "c",
              "text": "Evaluate outcomes only once at the end of the study"
            },
            {
              "id": "d",
              "text": "Avoid testing challenging or edge-case scenarios"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit failure criteria and leading indicators improve early detection of issues and allow for timely response."
        },
        {
          "id": "neuroscience-201-l03-q2",
          "text": "At the 201 level, neuroscience work should prioritize:",
          "skillId": "neuroscience-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Methodical execution, workflow reliability, and careful scenario interpretation"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "Avoiding validation loops after an experiment begins"
            },
            {
              "id": "d",
              "text": "Optimizing for a single metric without considering context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 curriculum is designed around mastering methodical execution, ensuring workflows are reliable, and interpreting scenarios accurately."
        },
        {
          "id": "neuroscience-201-l03-q3",
          "text": "What is the strongest indicator of a healthy cognitive systems experiment?",
          "skillId": "neuroscience-201-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked interventions and informal approvals"
            },
            {
              "id": "b",
              "text": "Clear owner mapping, a regular review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-incident analysis to save time"
            },
            {
              "id": "d",
              "text": "Changing success targets after observing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Well-managed systems require clear ownership, a consistent schedule for review, and measurable controls to ensure quality."
        },
        {
          "id": "neuroscience-201-l03-q4",
          "text": "When improving experimental methods, which approach is most scientifically defensible?",
          "skillId": "neuroscience-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotal wins as the sole evidence of success"
            },
            {
              "id": "b",
              "text": "Comparing results against a baseline and including failure analysis"
            },
            {
              "id": "c",
              "text": "Removing difficult test scenarios to improve success rates"
            },
            {
              "id": "d",
              "text": "Ignoring long-term outcomes to focus on immediate results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing against baselines and analyzing failures reduces bias and reveals the true performance of the system."
        },
        {
          "id": "neuroscience-201-l03-q5",
          "text": "A mature clinical translation strategy should include:",
          "skillId": "neuroscience-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No defined escalation path for critical issues"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to different levels of impact"
            },
            {
              "id": "c",
              "text": "A one-time governance review at the very beginning"
            },
            {
              "id": "d",
              "text": "Separation between the metrics being measured and the decisions being made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects the intent of a policy to actual measurement and a clear plan of action in response to outcomes."
        }
      ]
    },
    {
      "id": "neuroscience-201-l04",
      "title": "Neuroscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-201-l04-a1",
          "type": "image",
          "title": "Decision Tradeoff Matrix",
          "content": "An example of a decision matrix comparing three potential treatments across criteria like efficacy, side effects, and cost."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l04-c1",
          "kind": "example",
          "title": "Case Setup and Stakes",
          "content": "In this case study, we will analyze the journey of a patient with cognitive symptoms. We will link these symptoms to specific neural circuits and evaluate potential treatments. A key task is to separate factual evidence from assumptions and to weigh the risks of different actions."
        },
        {
          "id": "neuroscience-201-l04-c2",
          "kind": "concept",
          "title": "Decision Tradeoff Matrix",
          "content": "We will use a decision matrix to compare different treatment options. This tool helps us systematically evaluate alternatives based on criteria like effectiveness, safety, cost, and patient impact, making our decision-making process transparent and rigorous."
        },
        {
          "id": "neuroscience-201-l04-c3",
          "kind": "recap",
          "title": "Lessons from Failure Modes",
          "content": "In this recap, we will categorize different patterns of failure observed in clinical cases. By doing this, we can learn from past mistakes and turn these incidents into reusable design safeguards, improving processes and avoiding similar issues in the future."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing multiple options across competing priorities before choosing a course of action."
        },
        {
          "id": "neuroscience-201-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a system or process can fail to perform its intended function."
        },
        {
          "id": "neuroscience-201-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined trigger point that requires a problem to be reported to a higher level of authority for review or action."
        }
      ]
    },
    {
      "id": "neuroscience-201-l05",
      "title": "Neuroscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-201-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of the simulation tool, with key controls for setting variables and viewing outcome metrics highlighted."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, learners will create their own simulation of a clinical scenario. They will define assumptions about uncertainty and establish clear success metrics related to real-world clinical goals. This setup is essential for understanding how theory applies in practice."
        },
        {
          "id": "neuroscience-201-l05-c2",
          "kind": "recap",
          "title": "Decision Review Loop",
          "content": "At the end of each simulation round, we will conduct a structured review of the evidence gathered. This includes checking that our actions align with our goals and identifying steps for improvement. This loop ensures we continuously learn and adapt our strategies based on outcomes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-201-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies in a simulated environment and justify which option best balances clinical effectiveness and patient safety.",
          "instructions": [
            "Define the primary objective and safety guardrails before choosing an intervention.",
            "Record one significant tradeoff created by each intervention.",
            "Select a follow-up metric to confirm whether your chosen strategy was successful."
          ]
        },
        {
          "id": "neuroscience-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each potential problem with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input data",
              "right": "Introduce data quality checks and quarantine protocols"
            },
            {
              "left": "Ambiguous decision-making policy",
              "right": "Define clear decision authority and escalation rules"
            },
            {
              "left": "Key metric is no longer accurate",
              "right": "Re-baseline the metric and monitor leading indicators"
            },
            {
              "left": "Decline in patient trust",
              "right": "Increase transparency and create feedback loops"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-201-l06-a1",
          "type": "image",
          "title": "Risk Mitigation Strategies",
          "content": "An infographic comparing different risk mitigation strategies, such as avoidance, acceptance, reduction, and transfer."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-201-l06-q1",
          "text": "What is the primary purpose of using a decision tradeoff matrix in a clinical case analysis?",
          "skillId": "neuroscience-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To choose the fastest and cheapest option available"
            },
            {
              "id": "b",
              "text": "To systematically compare intervention options across multiple criteria like risk and effectiveness"
            },
            {
              "id": "c",
              "text": "To confirm a decision that has already been made"
            },
            {
              "id": "d",
              "text": "To eliminate the need for expert clinical judgment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A decision matrix provides a structured way to evaluate options against a consistent set of important criteria, ensuring a balanced and transparent choice."
        },
        {
          "id": "neuroscience-201-l06-q2",
          "text": "Analyzing 'failure modes' is most useful for what purpose?",
          "skillId": "neuroscience-201-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame after an incident occurs"
            },
            {
              "id": "b",
              "text": "Focusing only on positive outcomes"
            },
            {
              "id": "c",
              "text": "Identifying recurring problems to develop preventative safeguards"
            },
            {
              "id": "d",
              "text": "Proving that a system is perfect and has no weaknesses"
            }
          ],
          "correctOptionId": "c",
          "explanation": "By understanding common ways a system can fail, we can proactively design safeguards to prevent those failures in the future."
        },
        {
          "id": "neuroscience-201-l06-q3",
          "text": "When setting up a simulation, what are the two most critical inputs to define first?",
          "skillId": "neuroscience-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "The color of the user interface and the name of the simulation"
            },
            {
              "id": "b",
              "text": "The desired outcome and the budget for the project"
            },
            {
              "id": "c",
              "text": "Clear success metrics and the assumptions about uncertainty"
            },
            {
              "id": "d",
              "text": "The number of people participating and the final report format"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A useful simulation requires knowing how you will measure success and acknowledging the unpredictable variables you are testing against."
        },
        {
          "id": "neuroscience-201-l06-q4",
          "text": "A responsible clinical translation plan for a new therapy should always include:",
          "skillId": "neuroscience-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A marketing strategy to ensure rapid adoption"
            },
            {
              "id": "b",
              "text": "A process for gathering stakeholder feedback and performing ethical reviews"
            },
            {
              "id": "c",
              "text": "Keeping the methods secret to protect intellectual property"
            },
            {
              "id": "d",
              "text": "A plan to scale up production immediately"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ethical and effective translation to clinical practice requires engaging with affected parties and ensuring the approach meets established standards."
        },
        {
          "id": "neuroscience-201-l06-q5",
          "text": "What is the best definition of a 'mitigation plan' in the context of experimental risk?",
          "skillId": "neuroscience-201-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "A document that proves no risks exist"
            },
            {
              "id": "b",
              "text": "A reactive measure taken only after a failure has occurred"
            },
            {
              "id": "c",
              "text": "A proactive plan to reduce the likelihood or impact of a known risk"
            },
            {
              "id": "d",
              "text": "The decision to accept a risk without taking any action"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mitigation is about proactively identifying potential problems and implementing steps to make them less likely or less severe if they do happen."
        }
      ]
    },
    {
      "id": "neuroscience-201-l07",
      "title": "Neuroscience Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Venn Diagram",
          "content": "A Venn diagram showing the overlapping interests of patients, clinicians, researchers, and policymakers in a new neurotechnology."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, learners will identify the different groups of people (stakeholders) affected by a neuroscience innovation, such as patients, doctors, and the public. We will analyze who benefits, who is at risk, and how policy choices affect each group."
        },
        {
          "id": "neuroscience-201-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "Here, we will explore how governance mechanisms connect to measurable outcomes, transparency obligations, and pathways for fixing problems. Understanding these concepts is critical for ensuring that our practices are ethical and responsible."
        },
        {
          "id": "neuroscience-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will conclude with a final checklist for responsible decision-making. This framework ensures we consider legal, ethical, technical, and user-impact dimensions before proceeding with a project. This practice helps ensure our work is a positive contribution to society."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-201-l07-f1",
          "front": "Stakeholder Map",
          "back": "A visual framework for identifying all parties affected by a project and analyzing the impact on each group."
        },
        {
          "id": "neuroscience-201-l07-f2",
          "front": "Accountability Loop",
          "back": "A process that connects an outcome to the person or group responsible, and includes a mechanism for corrective action."
        },
        {
          "id": "neuroscience-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A practice that balances project goals with the principles of safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "neuroscience-201-l08",
      "title": "Neuroscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-201-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A one-page template for a capstone project charter, with sections for objective, metrics, risks, and success criteria."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will draft a project plan, or 'charter,' for your final project. This involves defining a clear primary goal, identifying potential risks, setting measurable success criteria, and scheduling regular progress reviews to ensure your project stays on track."
        },
        {
          "id": "neuroscience-201-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To wrap up, you will use a defense preparation template to structure your project proposal. This guide will help you formulate claims backed by strong evidence, explain the tradeoffs of your approach, and anticipate critical questions. This exercise builds the vital skill of communicating complex ideas clearly and persuasively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions for your project.",
            "Define at least three measurable success indicators.",
            "Identify one significant ethical or policy risk and propose a mitigation plan."
          ]
        },
        {
          "id": "neuroscience-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your proposed capstone approach against critiques based on cost, risk, and equity.",
          "instructions": []
        }
      ]
    }
  ]
};
