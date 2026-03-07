import type { LearningModule } from "@/lib/modules/types";

export const quantum_computing_201_Module: LearningModule = {
  "id": "quantum-computing-201",
  "title": "Quantum Computing Applied Practice",
  "description": "A Level 201 curriculum in Quantum Computing focused on modeling qubit states, designing quantum circuits, mitigating noise and errors, and evaluating algorithmic advantages through case studies, simulations, and mastery checkpoints.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "quantum",
    "computing"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Model qubit states by clearly defining assumptions and limitations.",
    "Design and test quantum circuit workflows with clear checkpoints for quality control.",
    "Evaluate noise and error mitigation techniques by analyzing their effectiveness and potential side effects.",
    "Assess the advantage of quantum algorithms using clear and fair governance rules.",
    "Communicate complex technical tradeoffs and uncertainties to different audiences.",
    "Develop and defend project recommendations against critical review."
  ],
  "lessons": [
    {
      "id": "quantum-computing-201-l01",
      "title": "Core Foundations of Quantum Computing",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "quantum-computing-201-l01-a1",
          "type": "image",
          "title": "The Bloch Sphere",
          "content": "A visual representation of a single qubit's state, showing concepts like superposition and phase."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "Let's explore the exciting world of quantum computing. We'll start with the essential vocabulary needed to understand this field. We will also see how modeling the state of a qubit is fundamental to designing quantum circuits for real-world applications.\n\nWhy this matters: A shared vocabulary allows us to communicate complex ideas clearly. Understanding the scope helps us focus on the most important concepts for this course, such as tradeoffs, assumptions, and verification."
        },
        {
          "id": "quantum-computing-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "In this section, we will learn to map how one action causes another. It's crucial to identify and test our hidden assumptions before making decisions. This practice ensures our choices are well-informed and based on solid reasoning, especially when working within specific constraints like time or budget.\n\nWhy this matters: Understanding cause-and-effect relationships and constraints is key to building reliable quantum systems and avoiding unexpected failures."
        },
        {
          "id": "quantum-computing-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Discipline",
          "content": "In this recap, we'll review the importance of backing up our claims with observable evidence. We will also discuss why it's critical to acknowledge uncertainties and use regular review checkpoints to ensure our conclusions are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-201-l01-f1",
          "front": "Qubit State Modeling",
          "back": "The process of mathematically describing a qubit, which requires careful control of assumptions and awareness of constraints."
        },
        {
          "id": "quantum-computing-201-l01-f2",
          "front": "Quantum Circuit Design",
          "back": "The practice of arranging quantum gates into a sequence to perform a computation, which determines the system's reliability."
        },
        {
          "id": "quantum-computing-201-l01-f3",
          "front": "Noise and Error Mitigation",
          "back": "Techniques used to reduce the impact of environmental noise and hardware imperfections on quantum computations."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l02",
      "title": "Quantum Computing Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-201-l02-a1",
          "type": "image",
          "title": "Quantum Workflow Diagram",
          "content": "An example diagram showing a quantum workflow with decision points, control gates, and rollback paths."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, you will design a quantum computing workflow. The focus is on executing methods with discipline and using evidence to support your decisions. After creating your workflow, you will stress-test its design to see how it holds up against uncertainty and potential failures.\n\nWhy this matters: Hands-on practice building and testing workflows is the best way to learn how to create robust and reliable quantum applications."
        },
        {
          "id": "quantum-computing-201-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "This recap introduces the concept of 'readiness' in a workflow. A ready workflow has clearly defined roles for team members, criteria for 'go/no-go' decisions (control gates), conditions for stopping or rolling back a process, and clear signals to verify success."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match each control mechanism to its primary benefit for reliability or governance.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Reduces preventable failures"
            },
            {
              "left": "Rollback threshold",
              "right": "Contains the impact of a failure"
            },
            {
              "left": "Baseline monitor",
              "right": "Helps attribute success or failure"
            },
            {
              "left": "Retrospective cycle",
              "right": "Improves the quality of future decisions"
            }
          ]
        },
        {
          "id": "quantum-computing-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these different types of constraints into the correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Stakeholder Impact"
          ],
          "items": [
            {
              "text": "Qubit coherence time limit",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy regulation",
              "bucket": "Policy"
            },
            {
              "text": "Risk of public mistrust",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Requirement for auditable results",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-201-l03-q1",
          "text": "Which approach most improves decisions in qubit state modeling?",
          "skillId": "quantum-computing-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on assumptions that are never tested"
            },
            {
              "id": "b",
              "text": "Define constraints, test for potential failures, and monitor key indicators"
            },
            {
              "id": "c",
              "text": "Treat all quantum systems as if they are identical"
            },
            {
              "id": "d",
              "text": "Avoid analyzing uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require defining your limits (constraints), testing what could go wrong, and measuring performance with clear signals."
        },
        {
          "id": "quantum-computing-201-l03-q2",
          "text": "This intermediate (201) course emphasizes:",
          "skillId": "quantum-computing-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Methodical execution, workflow discipline, and evidence-based reasoning"
            },
            {
              "id": "b",
              "text": "Speed of execution without any review"
            },
            {
              "id": "c",
              "text": "Ignoring baselines or control groups"
            },
            {
              "id": "d",
              "text": "Making decisions from a single perspective"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This course is structured around the core principles of careful execution, disciplined workflows, and using evidence to make decisions."
        },
        {
          "id": "quantum-computing-201-l03-q3",
          "text": "What best strengthens the reliability of a quantum circuit design?",
          "skillId": "quantum-computing-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Unassigned workflows and unclear escalation paths"
            },
            {
              "id": "b",
              "text": "Control checkpoints, clear ownership, and defined response thresholds"
            },
            {
              "id": "c",
              "text": "Making changes without tracking them"
            },
            {
              "id": "d",
              "text": "Never reviewing incidents or failures"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability depends on having clear controls, owners who are responsible, and pre-defined thresholds that trigger a response."
        },
        {
          "id": "quantum-computing-201-l03-q4",
          "text": "For noise and error mitigation, which practice is most defensible?",
          "skillId": "quantum-computing-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal success stories as proof"
            },
            {
              "id": "b",
              "text": "Comparing results against a baseline and checking for side effects"
            },
            {
              "id": "c",
              "text": "Ignoring scenarios where the mitigation might fail"
            },
            {
              "id": "d",
              "text": "Adjusting the success criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible evaluation requires comparing your results to a known baseline and looking for unintended consequences to avoid biased conclusions."
        },
        {
          "id": "quantum-computing-201-l03-q5",
          "text": "A mature model for evaluating a quantum algorithm's advantage should include:",
          "skillId": "quantum-computing-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A policy that is disconnected from how success is measured"
            },
            {
              "id": "b",
              "text": "Links to policy, measurable thresholds, and pathways for corrective action"
            },
            {
              "id": "c",
              "text": "No obligation to be transparent about the process"
            },
            {
              "id": "d",
              "text": "No expectation to fix problems that are discovered"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects your goals (policy), to how you measure them (thresholds), and what you do when you miss them (corrective action)."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l04",
      "title": "Quantum Computing Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "quantum-computing-201-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A sample matrix comparing different quantum error correction codes based on cost, effectiveness, and implementation difficulty."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case study, we'll analyze a hybrid workflow that uses both classical and quantum computers. You will explore the decision of when to use a noisy quantum processor versus a stable classical one. This involves mapping high-impact risks and understanding the competing constraints that influence the choice.\n\nWhy this matters: Real-world problems are complex. Analyzing cases like this builds critical thinking skills needed to make tough decisions under pressure."
        },
        {
          "id": "quantum-computing-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We will introduce the tradeoff matrix, a powerful tool for decision-making. It helps us evaluate different options by scoring them against important criteria like effectiveness, reliability, fairness, and feasibility. Using a tradeoff matrix allows you to make a more informed and justifiable choice."
        },
        {
          "id": "quantum-computing-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Failures",
          "content": "In this recap, we discuss how to turn failures into learning opportunities. This involves creating safeguards to prevent future issues, developing 'response playbooks' for when things go wrong, and updating monitoring systems to catch problems earlier. Embracing failure as a learning tool is essential for improvement."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for comparing different options based on multiple, often competing, criteria."
        },
        {
          "id": "quantum-computing-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of error or risk that can be studied to design targeted solutions and preventative measures."
        },
        {
          "id": "quantum-computing-201-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined set of steps to take in response to a specific incident, ensuring a fast and safe recovery."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l05",
      "title": "Quantum Computing Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "quantum-computing-201-l05-a1",
          "type": "image",
          "title": "Simulation Control Panel",
          "content": "An interactive-style image of a simulation dashboard where you can adjust noise parameters and success thresholds."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will set up simulation scenarios. This includes configuring different strategies to test, defining the range of uncertainty (like noise levels), and establishing clear, measurable thresholds for success. This gives you hands-on experience in designing meaningful experiments."
        },
        {
          "id": "quantum-computing-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After a simulation run, a debrief is essential. In this recap, we'll cover how to conduct a post-run review to evaluate the results, identify any unexpected side effects, and check how well the outcomes align with the project's goals and governance constraints."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three error mitigation strategies and justify which one best balances performance with reliability.",
          "instructions": [
            "Define your primary objective and any 'guardrails' (things to avoid) before starting.",
            "For each option, record the potential short-term and long-term tradeoffs.",
            "Choose the metrics you will use to confirm success and the triggers for escalating a problem."
          ]
        },
        {
          "id": "quantum-computing-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each common project risk to the most effective mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership of a process",
              "right": "Create a role map and define who has authority"
            },
            {
              "left": "Weak or noisy data signals",
              "right": "Improve data validation and monitoring"
            },
            {
              "left": "Project goals drifting from policy",
              "right": "Re-anchor project controls to explicit standards"
            },
            {
              "left": "Opposition from stakeholders",
              "right": "Increase transparency and create feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "quantum-computing-201-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the case study and simulation lessons before you begin. Think about how the concepts connect."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-201-l06-q1",
          "text": "When using a tradeoff matrix to compare a new quantum algorithm with a classical one, what is the most important first step?",
          "skillId": "quantum-computing-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Choosing the quantum algorithm before defining criteria"
            },
            {
              "id": "b",
              "text": "Defining clear and relevant evaluation criteria (e.g., speed, cost, accuracy)"
            },
            {
              "id": "c",
              "text": "Assuming the quantum algorithm will be better in all aspects"
            },
            {
              "id": "d",
              "text": "Focusing only on one criterion, such as speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Before you can compare options, you must first decide on the criteria you will use to judge them. This ensures a fair and comprehensive analysis."
        },
        {
          "id": "quantum-computing-201-l06-q2",
          "text": "What is the primary purpose of a 'response playbook' in the context of quantum workflow failures?",
          "skillId": "quantum-computing-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To assign blame after a failure occurs"
            },
            {
              "id": "b",
              "text": "To provide a pre-planned sequence of actions for quick and safe recovery"
            },
            {
              "id": "c",
              "text": "To be written only after a failure has been fully resolved"
            },
            {
              "id": "d",
              "text": "To prevent any and all failures from ever happening"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A playbook is a proactive tool that contains predefined steps to manage a failure effectively, reducing downtime and impact."
        },
        {
          "id": "quantum-computing-201-l06-q3",
          "text": "In setting up a simulation to test a new error mitigation strategy, what does defining 'uncertainty parameters' achieve?",
          "skillId": "quantum-computing-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It guarantees the strategy will work perfectly in the real world"
            },
            {
              "id": "b",
              "text": "It makes the simulation run faster"
            },
            {
              "id": "c",
              "text": "It allows you to test how the strategy performs under a range of different noise conditions"
            },
            {
              "id": "d",
              "text": "It removes all sources of error from the simulation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Uncertainty parameters, like varying levels of simulated noise, let you stress-test your strategy to see how robust it is under different conditions."
        },
        {
          "id": "quantum-computing-201-l06-q4",
          "text": "A case analysis reveals that a new quantum algorithm might negatively impact a specific group. What is the best mitigation strategy?",
          "skillId": "quantum-computing-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Ignore the potential impact as it is only a possibility"
            },
            {
              "id": "b",
              "text": "Proceed with the project but keep the risk confidential"
            },
            {
              "id": "c",
              "text": "Increase transparency with the group and create channels for their feedback"
            },
            {
              "id": "d",
              "text": "Cancel the project immediately without further investigation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Engaging with affected stakeholders, being transparent, and listening to feedback is a key part of responsible technology development."
        },
        {
          "id": "quantum-computing-201-l06-q5",
          "text": "The 'debrief' phase after running a simulation is crucial for:",
          "skillId": "quantum-computing-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Immediately starting the next simulation run"
            },
            {
              "id": "b",
              "text": "Evaluating results against success metrics and identifying unintended side effects"
            },
            {
              "id": "c",
              "text": "Deleting the simulation results to save space"
            },
            {
              "id": "d",
              "text": "Focusing only on the results that confirm your initial hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The debrief is a critical learning step to understand what happened, why it happened, and what the unintended consequences were."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l07",
      "title": "Integrating Policy and Ethics",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "quantum-computing-201-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A map showing how a quantum computing project's benefits and risks are distributed across different groups like researchers, investors, and the public."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this section, we will examine how quantum computing affects various stakeholders. This involves mapping how the benefits and burdens are distributed among different groups and over time. Understanding these dynamics is crucial for making ethical decisions in technology development."
        },
        {
          "id": "quantum-computing-201-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Here, we explore accountability in quantum computing. A key part of this is 'traceability'—the ability to track who made what decision and why, based on evidence. We will also discuss review rights and the responsibility to fix problems, which ensure that everyone can be held accountable."
        },
        {
          "id": "quantum-computing-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To conclude the lesson, we will create a final checklist. This tool connects our technology's performance with important principles of policy, ethics, and stakeholder trust. This checklist will help ensure we are making responsible choices in our quantum computing projects."
        }
      ],
      "flashcards": [
        {
          "id": "quantum-computing-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how the positive and negative outcomes of a project are spread across different stakeholder groups and time periods."
        },
        {
          "id": "quantum-computing-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The chain of evidence showing how and why a decision was made, which is essential for accountability."
        },
        {
          "id": "quantum-computing-201-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of delivering a project effectively while upholding ethical principles and policy safeguards."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "quantum-computing-201-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A visual template for a project charter, with sections for objectives, success metrics, risks, and governance checkpoints."
        }
      ],
      "chunks": [
        {
          "id": "quantum-computing-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this activity, you will draft a 'capstone charter.' This document outlines your main objective, identifies potential constraints, defines the metrics for success, and sets the governance gates that will guide your project decisions. This is a key step in effective project planning."
        },
        {
          "id": "quantum-computing-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare your capstone, you must also prepare to defend it. This means gathering evidence and creating strong arguments to address potential critiques related to your technical choices, policy considerations, and stakeholder impacts. Being ready to justify your decisions is a key professional skill."
        }
      ],
      "interactiveActivities": [
        {
          "id": "quantum-computing-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and plans for corrective action.",
          "instructions": [
            "Define a clear objective and the project's boundary conditions.",
            "List at least three measurable success indicators.",
            "Define the criteria for escalating a problem and for taking corrective action."
          ]
        },
        {
          "id": "quantum-computing-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone project decisions against simulated objections from technical, policy, and stakeholder experts."
        }
      ]
    },
    {
      "id": "quantum-computing-201-l09",
      "title": "Final Checkpoint: Synthesis and Governance",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "quantum-computing-201-l09-a1",
          "type": "practice",
          "title": "Final Review",
          "content": "Review your notes on stakeholder impact, accountability, and capstone planning before starting."
        }
      ],
      "questions": [
        {
          "id": "quantum-computing-201-l09-q1",
          "text": "What is the main goal of creating a stakeholder impact map?",
          "skillId": "quantum-computing-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To identify only the stakeholders who will benefit from the project"
            },
            {
              "id": "b",
              "text": "To understand how a project's benefits and burdens are distributed among different groups"
            },
            {
              "id": "c",
              "text": "To create a marketing plan for the project"
            },
            {
              "id": "d",
              "text": "To prove that the project has no negative impacts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stakeholder impact mapping is a tool for ethical analysis, helping to ensure fairness by visualizing how outcomes affect everyone involved."
        },
        {
          "id": "quantum-computing-201-l09-q2",
          "text": "In the context of 'accountability architecture,' what does decision traceability provide?",
          "skillId": "quantum-computing-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A way to hide who made a particular decision"
            },
            {
              "id": "b",
              "text": "An evidence chain showing how and why a decision was made"
            },
            {
              "id": "c",
              "text": "A guarantee that all decisions made were correct"
            },
            {
              "id": "d",
              "text": "A list of people to blame when something goes wrong"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Traceability is the documented evidence trail that connects a decision to the people, data, and reasoning behind it, which is the foundation of accountability."
        },
        {
          "id": "quantum-computing-201-l09-q3",
          "text": "What is the primary purpose of a capstone charter in project planning?",
          "skillId": "quantum-computing-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "To serve as the final report after the project is complete"
            },
            {
              "id": "b",
              "text": "To be a flexible document with no firm commitments"
            },
            {
              "id": "c",
              "text": "To formally define the project's objectives, scope, and success metrics before it begins"
            },
            {
              "id": "d",
              "text": "To list all the technical code that will be written"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The charter is a foundational planning document that aligns the team on the project's goals, constraints, and measures of success from the very beginning."
        },
        {
          "id": "quantum-computing-201-l09-q4",
          "text": "Being prepared to defend your project against a 'Decision Defense Panel' primarily strengthens which skill?",
          "skillId": "quantum-computing-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Writing code faster"
            },
            {
              "id": "b",
              "text": "Communicating and justifying your decisions under critical review"
            },
            {
              "id": "c",
              "text": "Avoiding all forms of criticism"
            },
            {
              "id": "d",
              "text": "Working in isolation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This exercise simulates a real-world scenario where you must defend your technical and ethical choices, improving your communication and critical thinking skills."
        },
        {
          "id": "quantum-computing-201-l09-q5",
          "text": "Which of the following best represents a synthesis of technical and ethical decision-making in quantum computing?",
          "skillId": "quantum-computing-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Choosing the fastest possible algorithm regardless of its energy consumption or cost"
            },
            {
              "id": "b",
              "text": "Implementing a new error mitigation technique after analyzing its performance and its potential to introduce bias against certain types of data"
            },
            {
              "id": "c",
              "text": "Keeping the details of a new quantum discovery secret from the public to maximize profit"
            },
            {
              "id": "d",
              "text": "Applying a new quantum technology to a problem without consulting any domain experts or affected communities"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This option shows a mature approach, where a technical choice (error mitigation) is evaluated not just for its performance but also for its ethical implications (potential for bias)."
        }
      ]
    }
  ]
};
