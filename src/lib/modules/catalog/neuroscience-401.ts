import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_401_Module: LearningModule = {
  "id": "neuroscience-401",
  "title": "Neuroscience Leadership and Capstone",
  "description": "An advanced curriculum in Neuroscience focusing on neural signaling, cognitive systems, experimental methods, and clinical translation, culminating in a capstone project.",
  "subject": "Neuroscience",
  "tags": [
    "neuroscience",
    "biology",
    "cognition",
    "ethics",
    "capstone"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Model neural signaling pathways, clearly stating assumptions and constraints.",
    "Design and evaluate experiments for studying cognitive systems using baseline and target metrics.",
    "Analyze complex clinical scenarios to recommend interventions using a decision tradeoff matrix.",
    "Apply ethical frameworks and governance patterns to neuroscience research and clinical applications.",
    "Communicate the tradeoffs between technical, policy, and patient-impact dimensions of a neuroscience project.",
    "Synthesize research and analysis into a defensible capstone project proposal."
  ],
  "lessons": [
    {
      "id": "neuroscience-401-l01",
      "title": "Foundations of Neural Systems",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-401-l01-a1",
          "type": "image",
          "title": "Neuron and Synapse Diagram",
          "content": "A visual guide to the basic components of neural communication, including the axon, dendrite, and synaptic cleft."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l01-c1",
          "kind": "concept",
          "title": "Core Vocabulary and System Boundaries",
          "content": "This lesson establishes a common language for our study of neuroscience. We will define key terms, from the single neuron to complex cognitive systems, and outline the scope of our exploration into how the brain functions and gives rise to thought and action."
        },
        {
          "id": "neuroscience-401-l01-c2",
          "kind": "concept",
          "title": "Mapping Cause and Effect",
          "content": "Learn to model causal pathways in neural systems, identifying how different factors influence one another. We will practice uncovering hidden assumptions and checking constraints, developing a critical thinking approach to understanding brain function and potential interventions."
        },
        {
          "id": "neuroscience-401-l01-c3",
          "kind": "recap",
          "title": "The Importance of Evidence",
          "content": "This module introduces a systematic, evidence-first workflow. We will practice linking every claim to observable, measurable indicators and accounting for uncertainty. This discipline ensures our conclusions are based on solid data, which is critical for both research and clinical practice."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-401-l01-f1",
          "front": "Neural Signaling",
          "back": "The process of communication between neurons through electrical and chemical signals, forming the basis of all brain activity."
        },
        {
          "id": "neuroscience-401-l01-f2",
          "front": "Cognitive Systems",
          "back": "Models representing mental processes like memory, attention, and decision-making, used to study how the brain performs complex tasks."
        },
        {
          "id": "neuroscience-401-l01-f3",
          "front": "Experimental Methods",
          "back": "The systematic procedures used to test hypotheses, measure outcomes, and determine if interventions have a real effect."
        }
      ]
    },
    {
      "id": "neuroscience-401-l02",
      "title": "Neuroscience Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-401-l02-a1",
          "type": "practice",
          "title": "Lab Protocol Template",
          "content": "A structured template to help you design your experiment, including sections for hypothesis, methods, controls, and data analysis."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l02-c1",
          "kind": "practice",
          "title": "Designing a Neuroscience Experiment",
          "content": "In this interactive session, you will design a sequence of experimental methods to investigate a neuroscience question. You will stress-test each step of your design against potential uncertainties to ensure your experiment is robust and your results will be reliable."
        },
        {
          "id": "neuroscience-401-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "Before running an experiment, we must ensure it's ready. This involves defining clear roles and responsibilities, setting progress checkpoints, and establishing triggers for re-evaluation. These steps ensure a well-organized and adaptable research process."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-401-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each experimental design choice to its most likely effect on the results.",
          "pairs": [
            {
              "left": "Pre-release stress tests",
              "right": "Lower severe failure probability"
            },
            {
              "left": "Checkpoint gating",
              "right": "Prevents defect propagation"
            },
            {
              "left": "Baseline comparison",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Retrospective review",
              "right": "Improves next-iteration decisions"
            }
          ]
        },
        {
          "id": "neuroscience-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these experimental constraints into technical, policy, and user-impact categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Latency budget",
              "bucket": "Technical"
            },
            {
              "text": "Audit retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Accessibility burden",
              "bucket": "User Impact"
            },
            {
              "text": "Human review threshold",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-401-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-401-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of the core concepts from the first two lessons to help you prepare for the quiz."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-401-l03-q1",
          "text": "Which practice most strengthens the study of neural signaling in practical applications?",
          "skillId": "neuroscience-401-skill-risk",
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
          "explanation": "Defining failure criteria and monitoring leading indicators allow for early detection of problems and a more robust experimental design."
        },
        {
          "id": "neuroscience-401-l03-q2",
          "text": "An advanced neuroscience curriculum should prioritize:",
          "skillId": "neuroscience-401-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Strategic thinking, interdisciplinary collaboration, and project defense"
            },
            {
              "id": "b",
              "text": "Speed over traceability in all cases"
            },
            {
              "id": "c",
              "text": "Avoiding validation after a project is complete"
            },
            {
              "id": "d",
              "text": "Optimizing for a single metric without considering the broader context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This course is designed to build strategic leadership, collaboration, and the ability to defend one's work, which are key advanced skills."
        },
        {
          "id": "neuroscience-401-l03-q3",
          "text": "What is the strongest indicator of a well-managed cognitive systems experiment?",
          "skillId": "neuroscience-401-skill-ops",
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
          "explanation": "Well-managed systems require clear ownership, a consistent review schedule, and measurable controls to ensure stability and reliability."
        },
        {
          "id": "neuroscience-401-l03-q4",
          "text": "When evaluating experimental methods, which approach is most scientifically defensible?",
          "skillId": "neuroscience-401-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotal wins as the sole source of evidence"
            },
            {
              "id": "b",
              "text": "Comparing results against a baseline and including failure analysis"
            },
            {
              "id": "c",
              "text": "Removing difficult test scenarios to ensure success"
            },
            {
              "id": "d",
              "text": "Ignoring long-term outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing against a baseline and analyzing failures reduces bias and provides a true understanding of an intervention's performance."
        }
      ]
    },
    {
      "id": "neuroscience-401-l04",
      "title": "Neuroscience Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-401-l04-a1",
          "type": "image",
          "title": "Decision Tradeoff Matrix",
          "content": "A template for a matrix to help you evaluate different options by scoring them against criteria like performance, cost, and fairness."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l04-c1",
          "kind": "example",
          "title": "Analyzing a Clinical Case Study",
          "content": "We will analyze a clinical case linking a patient's cognitive symptoms to specific neural circuits and potential interventions. This exercise challenges you to distinguish between evidence, assumptions, and risks, enhancing your analytical skills for real-world scenarios."
        },
        {
          "id": "neuroscience-401-l04-c2",
          "kind": "concept",
          "title": "Weighing Treatment Options",
          "content": "Using a decision tradeoff matrix, we will evaluate different intervention alternatives. By scoring options against criteria like performance, reliability, cost, and fairness, you will learn to select the most appropriate path based on a well-rounded and considerate analysis."
        },
        {
          "id": "neuroscience-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure Modes",
          "content": "In this recap, we will categorize different patterns of failure observed in the case study. By analyzing these patterns, we can learn from past mistakes and develop reusable design safeguards, turning incidents into opportunities for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing options across competing priorities (e.g., effectiveness vs. side effects) before choosing an intervention."
        },
        {
          "id": "neuroscience-401-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a system, process, or intervention can fail to perform its intended function."
        },
        {
          "id": "neuroscience-401-l04-f3",
          "front": "Clinical Translation",
          "back": "The process of applying discoveries from basic science research (the 'bench') to real-world clinical practice (the 'bedside')."
        }
      ]
    },
    {
      "id": "neuroscience-401-l05",
      "title": "Neuroscience Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-401-l05-a1",
          "type": "image",
          "title": "Simulation Flowchart",
          "content": "A visual diagram illustrating the steps of setting up, running, and analyzing a simulation, from defining variables to interpreting results."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l05-c1",
          "kind": "practice",
          "title": "Building a Neural Simulation",
          "content": "In this hands-on session, you will set up a simulation of a clinical scenario. This involves defining your assumptions about uncertainties and establishing clear success metrics related to patient outcomes, giving you practice in applying neuroscience concepts in a dynamic model."
        },
        {
          "id": "neuroscience-401-l05-c2",
          "kind": "recap",
          "title": "Analyzing Simulation Results",
          "content": "At the end of each simulation round, we will review the evidence gathered. This review loop is crucial for checking if our approach aligns with best practices and identifying actions for improvement, ensuring our decisions are informed by data."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-401-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three intervention strategies in a simulated environment and justify which option best balances effectiveness with patient safety.",
          "instructions": [
            "Define the primary objective and safety guardrails before choosing an intervention.",
            "Record one tradeoff created by each intervention.",
            "Select a follow-up metric that confirms whether the choice was successful."
          ]
        },
        {
          "id": "neuroscience-401-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each potential problem with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Unreliable input data",
              "right": "Introduce quality contracts and quarantine checks"
            },
            {
              "left": "Ambiguous clinical policy",
              "right": "Define decision authority and escalation rules"
            },
            {
              "left": "Metric drift over time",
              "right": "Re-baseline and monitor leading indicators"
            },
            {
              "left": "Decline in patient trust",
              "right": "Increase transparency and corrective feedback loops"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-401-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-401-l06-a1",
          "type": "practice",
          "title": "Case Study and Simulation Review",
          "content": "Review the key decision-making frameworks from the case analysis and simulation lessons before the quiz."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-401-l06-q1",
          "text": "When using a decision tradeoff matrix to select a patient intervention, what is the primary goal?",
          "skillId": "neuroscience-401-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "To choose the cheapest option available"
            },
            {
              "id": "b",
              "text": "To systematically compare options across multiple important criteria"
            },
            {
              "id": "c",
              "text": "To select the intervention that works the fastest, regardless of side effects"
            },
            {
              "id": "d",
              "text": "To confirm a decision that has already been made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is designed to provide a structured comparison of options across competing priorities like efficacy, cost, and safety."
        },
        {
          "id": "neuroscience-401-l06-q2",
          "text": "In a clinical simulation, what is the main benefit of analyzing 'failure modes'?",
          "skillId": "neuroscience-401-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "To assign blame when something goes wrong"
            },
            {
              "id": "b",
              "text": "To prove that the simulation is perfect"
            },
            {
              "id": "c",
              "text": "To proactively identify potential risks and improve patient safety protocols"
            },
            {
              "id": "d",
              "text": "To eliminate all variables from the simulation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Analyzing how a system can fail helps in designing more robust and safer protocols by anticipating problems before they happen in the real world."
        },
        {
          "id": "neuroscience-401-l06-q3",
          "text": "What does 'clinical translation' refer to in neuroscience?",
          "skillId": "neuroscience-401-skill-translation",
          "options": [
            {
              "id": "a",
              "text": "Translating research papers from one language to another"
            },
            {
              "id": "b",
              "text": "Applying findings from laboratory research to the development of patient treatments"
            },
            {
              "id": "c",
              "text": "The process of neurons transmitting signals"
            },
            {
              "id": "d",
              "text": "Creating financial models for a new drug"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clinical translation is the process of turning basic scientific discoveries into practical applications that improve human health."
        },
        {
          "id": "neuroscience-401-l06-q4",
          "text": "A robust simulation for testing a new therapy should include:",
          "skillId": "neuroscience-401-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Only scenarios where the therapy is guaranteed to succeed"
            },
            {
              "id": "b",
              "text": "Clear assumptions, success metrics, and a range of potential patient responses"
            },
            {
              "id": "c",
              "text": "No way to measure the outcome"
            },
            {
              "id": "d",
              "text": "Data from a single, ideal patient"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A useful simulation must be built on clear assumptions and metrics, and it should account for the variability seen in real patient populations."
        }
      ]
    },
    {
      "id": "neuroscience-401-l07",
      "title": "Neuroscience Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Map Example",
          "content": "A diagram showing how to map out different groups affected by a neuroscience project, such as patients, families, researchers, and regulators."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l07-c1",
          "kind": "concept",
          "title": "Who is Affected? A Stakeholder Analysis",
          "content": "In this lesson, we will identify the stakeholders in a neuroscience project—the people and groups who benefit, face risks, or are otherwise affected. Understanding these different perspectives is essential for making ethical decisions and ensuring fair outcomes."
        },
        {
          "id": "neuroscience-401-l07-c2",
          "kind": "concept",
          "title": "Ensuring Ethical and Accountable Research",
          "content": "We will explore how governance mechanisms, such as ethics review boards and transparency requirements, create accountability in neuroscience. This includes establishing measurable controls and clear pathways for addressing issues when they arise."
        },
        {
          "id": "neuroscience-401-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Neuroscience",
          "content": "Before launching a project, a responsible researcher considers its full impact. We will review a checklist covering legal requirements, ethical standards, technical reliability, and user impact to ensure our work is conducted responsibly and beneficially."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-401-l07-f1",
          "front": "Stakeholder Map",
          "back": "A visual framework for identifying and analyzing the impact of a project on various affected groups."
        },
        {
          "id": "neuroscience-401-l07-f2",
          "front": "Accountability Loop",
          "back": "A process that connects project outcomes to the responsible parties and ensures corrective action is taken when needed."
        },
        {
          "id": "neuroscience-401-l07-f3",
          "front": "Responsible Execution",
          "back": "A practice that balances achieving project goals with ensuring safety, fairness, and transparency for all stakeholders."
        }
      ]
    },
    {
      "id": "neuroscience-401-l08",
      "title": "Neuroscience Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-401-l08-a1",
          "type": "practice",
          "title": "Capstone Project Charter Template",
          "content": "A fillable document to help you define your capstone project's scope, objectives, metrics, risks, and timeline."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-401-l08-c1",
          "kind": "practice",
          "title": "Defining Your Capstone Project",
          "content": "In this interactive lab, you will create a capstone charter. This document will serve as the roadmap for your final project, outlining your primary goals, success metrics, potential risks, and the governance checkpoints to keep your research on track."
        },
        {
          "id": "neuroscience-401-l08-c2",
          "kind": "recap",
          "title": "Preparing to Defend Your Research",
          "content": "At the end of this lesson, you will receive a defense preparation template. This guide will help you structure your final presentation, ensuring you support your claims with strong evidence and clearly articulate the tradeoffs you considered in your project."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and boundary conditions.",
            "Define at least three measurable success indicators.",
            "Identify one ethical or policy risk and a plan to mitigate it."
          ]
        },
        {
          "id": "neuroscience-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your proposed capstone approach against critiques based on cost, risk, and equity.",
          "instructions": []
        }
      ]
    }
  ]
};
