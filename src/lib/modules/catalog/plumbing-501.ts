import type { LearningModule } from "@/lib/modules/types";

export const plumbing_501_Module: LearningModule = {
  "id": "plumbing-501",
  "title": "Plumbing Specialization Studio",
  "description": "Post-401 specialization in Plumbing, focused on complex systems diagnostics, operational planning, impact analysis, and professional leadership through advanced case studies, simulations, and project defense checkpoints.",
  "subject": "Plumbing",
  "tags": [
    "advanced",
    "curriculum",
    "interactive",
    "plumbing",
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
    "Diagnose complex plumbing system failures in residential and commercial buildings under operational constraints.",
    "Design detailed, multi-stage plumbing project plans with clear quality control gates and safety protocols.",
    "Analyze the tradeoffs between different plumbing materials and techniques based on cost, durability, and client needs.",
    "Develop and implement governance frameworks for plumbing projects, ensuring code compliance and clear accountability.",
    "Lead project review meetings with clients and stakeholders, clearly communicating tradeoffs and recommendations.",
    "Defend project proposals and diagnostic findings to a panel of experts, using evidence and sound reasoning."
  ],
  "lessons": [
    {
      "id": "plumbing-501-l01",
      "title": "Advanced Diagnostic Foundations",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "plumbing-501-l01-a1",
          "type": "image",
          "title": "System Diagnostics Flowchart",
          "content": "A visual flowchart showing a step-by-step process for diagnosing a complex plumbing issue, from initial symptom to root cause analysis."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l01-c1",
          "kind": "concept",
          "title": "Defining Project Scope and Boundaries",
          "content": "Learn to accurately define the scope of a plumbing problem. This involves identifying which parts of a system are affected, establishing clear starting and ending points for your work, and documenting all assumptions. A well-defined scope prevents project creep and ensures accurate estimates. The first step is to state the primary goal, then gather evidence like blueprints and pressure readings to support your assessment, and finally, verify your plan against the initial goal and constraints."
        },
        {
          "id": "plumbing-501-l01-c2",
          "kind": "concept",
          "title": "Mapping Failure Cascades and System Tolerances",
          "content": "Explore how a single component failure can cascade through a plumbing system. We will analyze system dependencies and acceptable operating ranges for pressure and flow. This knowledge is critical for predicting potential problems and planning preventative maintenance or robust repairs."
        },
        {
          "id": "plumbing-501-l01-c3",
          "kind": "recap",
          "title": "Using Data and Evidence Thresholds",
          "content": "In plumbing diagnostics, every claim must be backed by measurable data. This recap covers the importance of using tools like pressure gauges, flow meters, and thermal cameras to gather evidence. We'll also discuss establishing clear thresholds for action, such as a specific pressure drop that triggers a more invasive inspection."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-501-l01-f1",
          "front": "Plumbing Systems Diagnostics",
          "back": "The systematic process of identifying the root cause of plumbing failures using evidence like pressure tests, flow rate analysis, and visual inspection."
        },
        {
          "id": "plumbing-501-l01-f2",
          "front": "Plumbing Operations and Execution Design",
          "back": "Creating a detailed, step-by-step plan for a plumbing installation or repair, including safety protocols, material staging, and quality checkpoints."
        },
        {
          "id": "plumbing-501-l01-f3",
          "front": "Plumbing Impact and Tradeoff Analysis",
          "back": "Evaluating different repair or installation options by comparing their costs, long-term reliability, material durability, and impact on the building's occupants."
        }
      ]
    },
    {
      "id": "plumbing-501-l02",
      "title": "Plumbing Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "plumbing-501-l02-a1",
          "type": "simulation",
          "title": "Virtual Pipefitting Simulator",
          "content": "An interactive simulation where you assemble a complex pipe configuration, testing your ability to follow a plan and adapt to unexpected fitting issues."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l02-c1",
          "kind": "practice",
          "title": "Workflow Design and Stress Testing",
          "content": "In this lab, you will design a complete workflow for a complex task, such as a multi-unit water heater installation. Then, you'll stress-test your plan by introducing challenging scenarios like a supply chain delay or an unexpected structural obstacle, forcing you to adapt your methods."
        },
        {
          "id": "plumbing-501-l02-c2",
          "kind": "recap",
          "title": "Quality Control Checkpoints",
          "content": "This recap reviews how to build a robust project plan with mandatory checkpoints. We'll cover setting criteria for key decision points, such as when to conduct a pressure test before sealing a wall, and establishing clear protocols for escalating issues that fall outside of expected parameters."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-501-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match the project control measure with its most direct impact on project reliability and governance.",
          "pairs": [
            {
              "left": "Pre-installation material check",
              "right": "Prevents using incorrect fittings or pipe gauges."
            },
            {
              "left": "Leak detection during pressure test",
              "right": "Initiates immediate shutdown and re-evaluation of a joint."
            },
            {
              "left": "Initial water pressure reading",
              "right": "Provides a benchmark to confirm a repair's effectiveness."
            },
            {
              "left": "Post-job review of challenges",
              "right": "Improves planning for the next similar installation."
            }
          ]
        }
      ]
    },
    {
      "id": "plumbing-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "plumbing-501-l03-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the core concepts of diagnostics and workflow design before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "plumbing-501-l03-q1",
          "text": "What is the most critical first step when diagnosing a complex, intermittent leak in a large building?",
          "skillId": "plumbing-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately start opening walls to find the source."
            },
            {
              "id": "b",
              "text": "Define the problem's scope by gathering data on when and where the leak occurs."
            },
            {
              "id": "c",
              "text": "Recommend a full re-piping of the entire building."
            },
            {
              "id": "d",
              "text": "Wait for the leak to become constant."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective diagnostics begin with clearly defining the problem's boundaries and gathering evidence before taking invasive action."
        },
        {
          "id": "plumbing-501-l03-q2",
          "text": "A robust project plan for a commercial boiler replacement must include:",
          "skillId": "plumbing-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Designated roles, a schedule with quality checkpoints, and a contingency plan for system shutdown."
            },
            {
              "id": "b",
              "text": "A flexible timeline with no specific roles assigned."
            },
            {
              "id": "c",
              "text": "A plan to figure out the steps as you go."
            },
            {
              "id": "d",
              "text": "No plan for how to handle unexpected discoveries during demolition."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear roles, a structured schedule with checkpoints, and plans for potential problems."
        },
        {
          "id": "plumbing-501-l03-q3",
          "text": "When presenting a client with options for pipe materials (e.g., PEX vs. Copper), a defensible analysis includes:",
          "skillId": "plumbing-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Only recommending the material you prefer to work with."
            },
            {
              "id": "b",
              "text": "A comparison of upfront cost, expected lifespan, installation time, and potential maintenance issues."
            },
            {
              "id": "c",
              "text": "Only discussing the cost of the materials."
            },
            {
              "id": "d",
              "text": "Telling the client that both options are exactly the same."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A professional analysis requires a balanced comparison of key factors to help the client make an informed decision."
        },
        {
          "id": "plumbing-501-l03-q4",
          "text": "Mature project governance in plumbing connects:",
          "skillId": "plumbing-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The project plan, adherence to local building codes, and a clear process for handling inspections."
            },
            {
              "id": "b",
              "text": "A verbal agreement with no written scope of work."
            },
            {
              "id": "c",
              "text": "Project goals without a plan for passing mandatory inspections."
            },
            {
              "id": "d",
              "text": "Ignoring safety protocols to finish the job faster."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Strong governance links the planned work to external requirements like building codes and inspections, ensuring compliance and accountability."
        }
      ]
    },
    {
      "id": "plumbing-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "plumbing-501-l04-a1",
          "type": "image",
          "title": "Blueprint of a Historic Building",
          "content": "A detailed plumbing blueprint for a historic building, highlighting challenges like outdated materials and protected structures."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l04-c1",
          "kind": "concept",
          "title": "Deconstructing Complex Scenarios",
          "content": "This lesson breaks down how to analyze a complex plumbing scenario, such as a renovation in a historic building. We will identify competing constraints, like the need for modern efficiency versus the requirement to preserve historical structures, and map out the key decision points."
        },
        {
          "id": "plumbing-501-l04-c2",
          "kind": "practice",
          "title": "Framing Tradeoffs and Options",
          "content": "Using our case study, we will compare different solutions, such as re-lining old cast-iron pipes versus a full replacement with modern materials. This practice involves evaluating each option against critical factors like cost, disruption, historical impact, and long-term system reliability."
        },
        {
          "id": "plumbing-501-l04-c3",
          "kind": "recap",
          "title": "The Scope of Work Document",
          "content": "We recap the lesson by focusing on how to structure a professional Scope of Work document. This document should clearly state the recommended solution, outline the core assumptions, present the supporting evidence, and detail the risk mitigation and contingency plans."
        }
      ]
    },
    {
      "id": "plumbing-501-l05",
      "title": "Plumbing Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "plumbing-501-l05-a1",
          "type": "simulation",
          "title": "Emergency Shutdown Simulation",
          "content": "An interactive scenario where a major leak occurs in a multi-story building. You must make critical decisions under pressure to minimize damage."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l05-c1",
          "kind": "practice",
          "title": "Live Scenario Decision-Making",
          "content": "In this interactive clinic, you will manage a simulated plumbing emergency. You'll need to make rapid decisions, such as which valves to shut down, how to coordinate with other building services, and how to balance the speed of the repair with safety and code compliance."
        },
        {
          "id": "plumbing-501-l05-c2",
          "kind": "recap",
          "title": "Incident Response Protocol",
          "content": "This recap focuses on formalizing an adaptive response to unexpected events. We'll discuss how to create an Incident Response Protocol that ensures all actions are documented, decisions are traceable, and a post-incident review is conducted to improve future performance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-501-l05-act1",
          "type": "scenario",
          "title": "Commercial Kitchen Grease Trap Failure",
          "description": "Manage a high-pressure scenario involving a critical failure in a restaurant's plumbing system during peak business hours. Make decisions to mitigate health code violations, operational downtime, and property damage."
        }
      ]
    },
    {
      "id": "plumbing-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "plumbing-501-l06-a1",
          "type": "practice",
          "title": "Knowledge Check",
          "content": "Review the key concepts from the case analysis and simulation lessons before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "plumbing-501-l06-q1",
          "text": "In a historic building renovation, what is the first requirement for a defensible plumbing upgrade proposal?",
          "skillId": "plumbing-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A single, preferred option with no alternatives."
            },
            {
              "id": "b",
              "text": "A clear statement of existing conditions, project constraints, and success criteria."
            },
            {
              "id": "c",
              "text": "A high-cost estimate to cover all possible issues."
            },
            {
              "id": "d",
              "text": "A focus only on the cheapest materials available."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible proposals start with a thorough understanding and documentation of the project's baseline, constraints, and goals."
        },
        {
          "id": "plumbing-501-l06-q2",
          "text": "A resilient strategy for a complex hospital plumbing installation should include:",
          "skillId": "plumbing-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A phased installation plan with checkpoints for testing and clear contingency plans for medical gas lines."
            },
            {
              "id": "b",
              "text": "A plan to complete the entire installation in one phase with no testing until the end."
            },
            {
              "id": "c",
              "text": "No specific team members assigned to critical tasks."
            },
            {
              "id": "d",
              "text": "Undocumented changes to the plan made on-site."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in critical environments depends on phased execution, regular testing, and specific contingency plans."
        },
        {
          "id": "plumbing-501-l06-q3",
          "text": "When evaluating the long-term impact of installing a greywater recycling system, which method is most rigorous?",
          "skillId": "plumbing-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Focusing only on the positive story of water savings."
            },
            {
              "id": "b",
              "text": "Comparing projected water savings against installation and long-term maintenance costs, and noting potential risks."
            },
            {
              "id": "c",
              "text": "Presenting only the final outcome without showing the cost analysis."
            },
            {
              "id": "d",
              "text": "Changing the success criteria after the system is installed to match the results."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires a balanced analysis of benefits, costs, and potential side effects or risks."
        },
        {
          "id": "plumbing-501-l06-q4",
          "text": "During a simulated emergency leak, the highest priority is to:",
          "skillId": "plumbing-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Protect your tools from water damage."
            },
            {
              "id": "b",
              "text": "Isolate the leak to stop water flow, ensure the area is safe, and then begin diagnostics."
            },
            {
              "id": "c",
              "text": "Immediately start writing the incident report."
            },
            {
              "id": "d",
              "text": "Wait for instructions from the building owner."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In an emergency, the priorities are to stop the immediate damage (isolate the leak) and ensure safety before proceeding with a repair."
        }
      ]
    },
    {
      "id": "plumbing-501-l07",
      "title": "Plumbing Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "plumbing-501-l07-a1",
          "type": "image",
          "title": "Public Water Main and Service Line Diagram",
          "content": "A diagram illustrating the connection between a city water main and individual property service lines, showing areas of public and private responsibility."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l07-c1",
          "kind": "concept",
          "title": "Analyzing Stakeholder Impact",
          "content": "Major plumbing projects affect many people. In this lesson, we'll map out how a project like a water main replacement impacts different stakeholders, including residents facing service interruptions, businesses dealing with street closures, and municipal authorities managing public safety."
        },
        {
          "id": "plumbing-501-l07-c2",
          "kind": "concept",
          "title": "Permitting, Inspections, and Liability",
          "content": "Explore the formal governance structures that ensure public safety and accountability. We will cover the process of obtaining permits, preparing for and passing inspections, and understanding the legal and professional liabilities associated with plumbing work."
        },
        {
          "id": "plumbing-501-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "This recap provides an actionable checklist for plumbing project leaders. It links key project outcomes with ethical considerations, code compliance, and client communication, serving as a guide for making responsible decisions that build trust and ensure project success."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-501-l07-f1",
          "front": "Impact Distribution",
          "back": "Analysis of who is affected by a plumbing project, from water shutoffs for residents to traffic disruption for local businesses."
        },
        {
          "id": "plumbing-501-l07-f2",
          "front": "Decision Traceability",
          "back": "Maintaining a clear, auditable record of all project decisions, permits, inspection reports, and client approvals."
        },
        {
          "id": "plumbing-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "Leading a plumbing project with a commitment to safety, code compliance, client satisfaction, and ethical practices."
        }
      ]
    },
    {
      "id": "plumbing-501-l08",
      "title": "Plumbing Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "plumbing-501-l08-a1",
          "type": "template",
          "title": "Capstone Project Proposal Template",
          "content": "A downloadable template for structuring your final capstone project proposal, with sections for problem statement, proposed solution, evidence, and risk analysis."
        }
      ],
      "chunks": [
        {
          "id": "plumbing-501-l08-c1",
          "kind": "practice",
          "title": "Assembling the Project Proposal",
          "content": "In this interactive lab, you will work in small groups to assemble a complete project proposal for a complex scenario, such as designing the plumbing system for a new, sustainable commercial building. Your proposal must include evidence-backed claims, a clear risk analysis, and a detailed implementation plan."
        },
        {
          "id": "plumbing-501-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for the Expert Panel",
          "content": "Prepare to defend your proposal by role-playing a presentation to a mock review board. This session allows you to practice responding to critical questions from architects, general contractors, and city inspectors, helping you build confidence and refine your arguments."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone project proposal to a simulated panel of industry experts, addressing challenging questions about your project's cost, safety, and sustainability."
        }
      ]
    }
  ]
};
