import type { LearningModule } from "@/lib/modules/types";

export const quantum_computing_301_Module: LearningModule = {
  "id": "quantum-computing-301",
  "title": "Quantum Computing Systems and Governance",
  "description": "An advanced curriculum on Quantum Computing, focusing on qubit state modeling, quantum circuit design, noise mitigation, and algorithmic advantage evaluation through case analysis, simulation, and governance practices.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "quantum",
    "computing",
    "governance"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Model qubit states using explicit assumptions and constraints.",
    "Design and execute quantum circuit workflows with reliable control points.",
    "Evaluate noise and error mitigation strategies using baseline and side-effect analysis.",
    "Develop algorithmic advantage evaluations with accountable governance mechanisms.",
    "Communicate uncertainty and tradeoffs effectively to diverse stakeholder groups.",
    "Construct defensible recommendations for quantum system design and deployment."
  ],
  "lessons": [
    {
      "id": "quantum-computing-301-l01",
      "title": "Core Principles of Quantum Systems",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-301-l01-a1",
          "type": "image",
          "title": "Bloch Sphere Visualization",
          "content": "A 3D model representing the state space of a single qubit, used to visualize superposition and phase."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l01-c1",
          "kind": "concept",
          "title": "Introduction to Quantum Principles",
          "content": "This lesson establishes the foundation for the course. We'll define quantum computing and introduce core concepts like superposition, entanglement, and measurement. We will differentiate quantum bits (qubits) from classical bits and explore how these principles enable new forms of computation. This shared vocabulary is essential for understanding qubit state modeling and circuit design.",
          "visualPrompts": [
            "Animation comparing a classical bit (0 or 1) to a qubit in superposition.",
            "Diagram illustrating entanglement with two linked particles whose fates are correlated."
          ]
        },
        {
          "id": "quantum-computing-301-l01-c2",
          "kind": "concept",
          "title": "Modeling Qubit States and Systems",
          "content": "Building on quantum principles, we'll explore how to mathematically model the state of a qubit. This involves understanding the Bloch sphere as a geometric representation and using vectors and matrices to describe state transformations. We will emphasize the importance of defining clear assumptions and constraints when building these models to ensure they accurately reflect a physical system.",
          "visualPrompts": [
            "Interactive Bloch sphere showing how quantum gates (like X, Y, Z) rotate the state vector.",
            "Side-by-side comparison of a simple system model with and without explicit constraints listed."
          ]
        },
        {
          "id": "quantum-computing-301-l01-c3",
          "kind": "recap",
          "title": "Verifying Circuit Outcomes",
          "content": "We conclude by focusing on the discipline of evidence. In quantum computing, the outcome of a measurement is probabilistic. We'll discuss how to connect theoretical claims about a circuit's performance to observable data from simulations or hardware runs. This includes noting uncertainties, establishing review checkpoints, and understanding the role of statistical analysis in verifying results.",
          "visualPrompts": [
            "A simple quantum circuit diagram (e.g., creating a Bell state).",
            "Histogram showing the probability distribution of measurement outcomes from a simulated circuit."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-301-l01-f1",
          "front": "Qubit State Modeling",
          "back": "The process of mathematically representing a qubit's state, often using the Bloch sphere, while managing assumptions about the system."
        },
        {
          "id": "quantum-computing-301-l01-f2",
          "front": "Quantum Circuit Design",
          "back": "The practice of arranging quantum gates in a sequence to perform a specific computation or algorithm."
        },
        {
          "id": "quantum-computing-301-l01-f3",
          "front": "Noise and Error Mitigation",
          "back": "Techniques used to reduce the impact of environmental interference and hardware imperfections on quantum computations."
        }
      ]
    },
    {
      "id": "quantum-computing-301-l02",
      "title": "Quantum Computing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-301-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "A structured template for documenting your quantum workflow, including goals, evidence, decision points, and verification steps."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l02-c1",
          "kind": "practice",
          "title": "From Algorithm to Executable Circuit",
          "content": "In this interactive lab, you will design a complete workflow for a simple quantum algorithm. This involves analyzing system trade-offs (e.g., circuit depth vs. qubit count), integrating governance metrics (e.g., fidelity thresholds), and planning for cross-functional coordination (e.g., between algorithm designers and hardware engineers). You will then stress-test your workflow's reliability under simulated uncertainty.",
          "visualPrompts": [
            "Flowchart of a quantum workflow: Problem -> Algorithm -> Circuit -> Execution -> Analysis.",
            "A mock dashboard showing key governance metrics like gate fidelity and coherence time."
          ]
        },
        {
          "id": "quantum-computing-301-l02-c2",
          "kind": "recap",
          "title": "Implementing Control Gates and Readiness",
          "content": "This recap focuses on ensuring your workflow is robust and ready for execution. We'll discuss how to implement 'control gates'—formal review points in your process. This includes mapping responsibilities, defining criteria for proceeding (or rolling back), and identifying clear verification signals that confirm the system is behaving as expected before committing to expensive runs.",
          "visualPrompts": [
            "Diagram of a project timeline with explicit Go/No-Go decision points (control gates).",
            "A responsibility assignment matrix (RACI chart) for a quantum computing project."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-301-l02-act1",
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
          "id": "quantum-computing-301-l02-act2",
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
              "text": "Qubit coherence time",
              "bucket": "Technical"
            },
            {
              "text": "Regulatory data retention requirement",
              "bucket": "Policy"
            },
            {
              "text": "Public trust erosion risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Computational budget limit",
              "bucket": "Technical"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-301-l03-q1",
          "text": "Which approach most improves decisions in qubit state modeling?",
          "skillId": "quantum-computing-301-skill-core",
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
          "id": "quantum-computing-301-l03-q2",
          "text": "An effective quantum computing workflow should primarily emphasize:",
          "skillId": "quantum-computing-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "System tradeoff analysis, metrics-governance integration, and cross-functional coordination"
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
          "explanation": "This level is explicitly structured around system tradeoff analysis, metrics-governance integration, and cross-functional coordination."
        },
        {
          "id": "quantum-computing-301-l03-q3",
          "text": "What best strengthens quantum circuit design reliability?",
          "skillId": "quantum-computing-301-skill-reliability",
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
        }
      ]
    },
    {
      "id": "quantum-computing-301-l04",
      "title": "Quantum Computing Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-301-l04-a1",
          "type": "mnemonic",
          "title": "Case Analysis Framework",
          "content": "Use the IDEA framework: Identify the problem, Define the options, Evaluate the tradeoffs, Act with a recommendation."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l04-c1",
          "kind": "example",
          "title": "Case: Hybrid Classical-Quantum Optimization",
          "content": "This case study examines a hybrid workflow for a complex optimization problem. You must decide when to use a noisy, potentially powerful quantum processor versus a stable, predictable classical alternative. We will map high-impact risks (e.g., inaccurate quantum results) and competing constraints (e.g., budget, timeline) to understand the high stakes of this decision.",
          "visualPrompts": [
            "Decision tree showing the choice between a quantum and classical computation path.",
            "A risk matrix plotting the likelihood and impact of potential failures in the hybrid system."
          ]
        },
        {
          "id": "quantum-computing-301-l04-c2",
          "kind": "concept",
          "title": "The Tradeoff Matrix",
          "content": "We introduce the tradeoff matrix as a tool for structured decision-making. This matrix helps you evaluate different options by scoring them against key criteria such as computational effectiveness, reliability, cost, and implementation feasibility. Using this tool, you can make a transparent and defensible choice between the quantum and classical approaches.",
          "visualPrompts": [
            "A filled-out tradeoff matrix comparing 'Quantum Solver' vs. 'Classical Heuristic' across multiple criteria.",
            "Infographic explaining each criterion in the matrix (e.g., what 'reliability' means in this context)."
          ]
        },
        {
          "id": "quantum-computing-301-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "This recap focuses on learning from potential failures. We discuss how to analyze patterns of failure (e.g., specific types of quantum noise) to design better safeguards. We'll also introduce the concept of creating response playbooks—pre-defined action plans for when things go wrong—to ensure effective and timely recovery.",
          "visualPrompts": [
            "A flowchart illustrating a response playbook for a 'low-fidelity result' incident.",
            "Chart showing how a safeguard (e.g., error correction code) reduces the failure rate over time."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing alternative solutions against a set of competing priorities or criteria."
        },
        {
          "id": "quantum-computing-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring risk signature or type of error that can be analyzed to design targeted mitigations."
        },
        {
          "id": "quantum-computing-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined sequence of actions to ensure a safe, timely, and consistent recovery from a known failure mode."
        }
      ]
    },
    {
      "id": "quantum-computing-301-l05",
      "title": "Quantum Computing Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "quantum-computing-301-l05-a1",
          "type": "practice",
          "title": "Simulation Log",
          "content": "A template to record your simulation setup, expected outcomes, actual results, and analysis of any deviations."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup and Execution",
          "content": "In this interactive practice, you will configure and run simulation scenarios based on the case study. This involves setting up different noise models, defining intervention strategies (e.g., applying an error mitigation technique), and establishing measurable success thresholds (e.g., result must be within 5% of the optimal solution). This provides hands-on experience in testing quantum strategies before deployment.",
          "visualPrompts": [
            "A mock UI of a simulation environment with sliders for noise parameters and toggles for mitigation techniques.",
            "A dashboard displaying the success metrics and constraints for the simulation run."
          ]
        },
        {
          "id": "quantum-computing-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief and Analysis",
          "content": "After the simulation, we will conduct a structured post-run review. This debrief involves evaluating the quantitative results against your success thresholds, identifying any unintended side effects (e.g., increased computational cost), and assessing how well the outcomes align with the project's governance constraints. This reflective process is crucial for refining your strategy.",
          "visualPrompts": [
            "Graphs comparing simulation outcomes: 'No Mitigation' vs. 'With Mitigation'.",
            "A summary table highlighting the key findings and recommendations from the debrief."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three noise mitigation strategies and justify which one best balances performance improvement with resource cost.",
          "instructions": [
            "Define your primary objective (e.g., maximize result accuracy) and guardrails (e.g., stay within compute budget).",
            "For each strategy, record the expected performance gain and any potential negative side effects.",
            "Select the best strategy and provide a data-backed justification for your choice."
          ]
        },
        {
          "id": "quantum-computing-301-l05-act2",
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
      "id": "quantum-computing-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-301-l06-q1",
          "text": "In a hybrid quantum-classical workflow, what is the primary purpose of a tradeoff matrix?",
          "skillId": "quantum-computing-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove quantum advantage definitively"
            },
            {
              "id": "b",
              "text": "To provide a structured, evidence-based way to compare different computational strategies against key criteria"
            },
            {
              "id": "c",
              "text": "To exclusively measure the speed of the quantum processor"
            },
            {
              "id": "d",
              "text": "To eliminate the need for classical computing resources"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is a decision-making tool used to systematically evaluate options based on multiple, often competing, criteria like cost, reliability, and performance."
        },
        {
          "id": "quantum-computing-301-l06-q2",
          "text": "When simulating a quantum algorithm, what is the most critical reason to model environmental noise?",
          "skillId": "quantum-computing-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To make the simulation run faster"
            },
            {
              "id": "b",
              "text": "To guarantee the algorithm will work perfectly on real hardware"
            },
            {
              "id": "c",
              "text": "To estimate the algorithm's performance and robustness on real, imperfect quantum hardware"
            },
            {
              "id": "d",
              "text": "To increase the number of qubits in the simulation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Simulating noise helps predict how an algorithm will behave in the real world, allowing for the testing of error mitigation strategies and setting realistic performance expectations."
        },
        {
          "id": "quantum-computing-301-l06-q3",
          "text": "A recurring error pattern is discovered in your quantum circuit simulations. According to the principles of failure learning, what is the best next step?",
          "skillId": "quantum-computing-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Ignore the pattern as it only occurs in simulation"
            },
            {
              "id": "b",
              "text": "Analyze the pattern to design a targeted mitigation or safeguard and create a response playbook"
            },
            {
              "id": "c",
              "text": "Immediately switch to a different quantum algorithm"
            },
            {
              "id": "d",
              "text": "Blame the simulation software for being inaccurate"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance and reliability practices involve analyzing failure patterns to proactively design safeguards and prepare standardized responses."
        }
      ]
    },
    {
      "id": "quantum-computing-301-l07",
      "title": "Quantum Computing Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "quantum-computing-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram illustrating how different groups are affected by a quantum computing application, considering both positive and negative impacts."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "This section explores the ethical dimensions of quantum computing. We will learn how to map the distribution of benefits and burdens across different stakeholder groups, such as users, non-users, and society at large. Considering how these impacts evolve over time is essential for developing technology responsibly and equitably.",
          "visualPrompts": [
            "A stakeholder map diagram for a hypothetical quantum-powered drug discovery platform.",
            "A timeline showing the short-term vs. long-term impacts of a new technology."
          ]
        },
        {
          "id": "quantum-computing-301-l07-c2",
          "kind": "concept",
          "title": "Designing an Accountability Architecture",
          "content": "Accountability ensures that quantum systems are developed and used responsibly. We will discuss the key pillars of an accountability architecture: traceability of decisions, the right for stakeholders to review outcomes, and clear obligations for remediation when issues arise. This framework helps build trust and establishes clear lines of responsibility.",
          "visualPrompts": [
            "Flowchart illustrating an accountability process: Decision -> Log -> Review -> Remediation.",
            "An example of a 'decision log' that provides transparency into a system's design choices."
          ]
        },
        {
          "id": "quantum-computing-301-l07-c3",
          "kind": "recap",
          "title": "The Responsible Execution Checklist",
          "content": "We conclude with a practical checklist for responsible execution. This tool connects technical performance metrics with essential governance elements, including adherence to policy, ethical principles, and stakeholder trust. Using this checklist helps ensure a holistic view of success, balancing technological innovation with societal well-being.",
          "visualPrompts": [
            "Infographic of the responsible execution checklist, with categories for Technical, Ethical, and Policy checks.",
            "A 'green/yellow/red' status dashboard based on the checklist items."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-301-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a system are spread across different stakeholder groups and timescales."
        },
        {
          "id": "quantum-computing-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to reconstruct the evidence and reasoning chain that led to a specific design or operational decision."
        },
        {
          "id": "quantum-computing-301-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of delivering a system in a way that balances technical effectiveness with ethical, policy, and safety safeguards."
        }
      ]
    },
    {
      "id": "quantum-computing-301-l08",
      "title": "Quantum Computing Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-301-l08-a1",
          "type": "practice",
          "title": "Capstone Charter Template",
          "content": "A fillable document to structure your capstone project, including sections for objectives, metrics, risks, and governance."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-301-l08-c1",
          "kind": "practice",
          "title": "Building the Capstone Charter",
          "content": "In this interactive session, you will create a detailed charter for a hypothetical quantum computing project. This document will serve as your project's constitution, defining its core objective, key constraints, measurable success metrics, and the governance gates that will guide your decision-making. This exercise synthesizes all the course concepts into a single planning document.",
          "visualPrompts": [
            "An animated walkthrough of filling out each section of the capstone charter template.",
            "Examples of well-defined vs. poorly-defined success metrics."
          ]
        },
        {
          "id": "quantum-computing-301-l08-c2",
          "kind": "recap",
          "title": "Preparing for Defense and Review",
          "content": "This recap prepares you to defend your capstone charter. You will practice anticipating and preparing evidence-based responses to critical questions regarding your technical choices, policy implications, and stakeholder considerations. This skill is crucial for securing buy-in and ensuring your project is resilient to professional scrutiny.",
          "visualPrompts": [
            "A diagram showing a 'Red Team' review process, where a project is challenged from different perspectives.",
            "A checklist for 'Defense Readiness' covering key areas to prepare for."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define a clear, single-sentence project objective and its boundary conditions.",
            "List at least three measurable success indicators (e.g., 'achieve X fidelity with Y circuit depth').",
            "Define criteria for escalating issues and triggering corrective action plans."
          ]
        },
        {
          "id": "quantum-computing-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against simulated objections from technical, policy, and stakeholder panels.",
          "instructions": [
            "Receive a challenge from a simulated panel member (e.g., 'Your chosen error mitigation technique is too expensive').",
            "Select the best evidence-based response from a list of options.",
            "Receive feedback on the strength of your defense."
          ]
        }
      ]
    }
  ]
};
