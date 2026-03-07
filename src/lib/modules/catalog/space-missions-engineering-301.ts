import type { LearningModule } from "@/lib/modules/types";

export const space_missions_engineering_301_Module: LearningModule = {
  "id": "space-missions-engineering-301",
  "title": "Space Missions Engineering: Systems and Governance",
  "description": "An advanced curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply mission architecture principles using explicit assumptions and constraints.",
    "Design and execute robust workflows for systems integration with reliable control points.",
    "Evaluate risk and reliability modeling decisions using baseline and side-effect analysis.",
    "Strengthen flight operations with accountable governance mechanisms.",
    "Communicate uncertainty and tradeoffs effectively across stakeholder groups.",
    "Build defensible recommendations resilient to critical review."
  ],
  "lessons": [
    {
      "id": "space-missions-engineering-301-l01",
      "title": "Core Foundations of Mission Engineering",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l01-a1",
          "type": "image",
          "title": "Mission Architecture Blueprint",
          "content": "Visualize the key components of a space mission, from launch vehicle to payload and ground systems. Note the interfaces and dependencies."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "This lesson introduces the core principles of Space Missions Engineering, the discipline of designing and operating missions to explore outer space. We will establish a shared vocabulary for key concepts, including mission architecture—the high-level design of a mission—and systems integration, the process of ensuring all components work together seamlessly. Understanding these fundamentals is the first step toward mastering the complexities of space exploration."
        },
        {
          "id": "space-missions-engineering-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "Every mission is defined by its constraints, such as budget, schedule, and the laws of physics. Here, we will learn to map causal pathways to understand how different decisions and factors influence mission outcomes. This includes identifying and testing hidden assumptions before committing to a design, ensuring our plans are grounded in reality."
        },
        {
          "id": "space-missions-engineering-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Discipline",
          "content": "This recap emphasizes the importance of grounding all claims and decisions in observable, measurable evidence. We will discuss the necessity of quantifying uncertainty and establishing formal review checkpoints. This discipline ensures that the mission design remains robust, verifiable, and reliable throughout its lifecycle."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l01-f1",
          "front": "Mission Architecture",
          "back": "The conceptual design of a space mission, defining its objectives, components, and operational concepts under a clear set of assumptions."
        },
        {
          "id": "space-missions-engineering-301-l01-f2",
          "front": "Systems Integration",
          "back": "The process of combining subsystem components into a single, functioning system and ensuring they operate together to achieve mission goals."
        },
        {
          "id": "space-missions-engineering-301-l01-f3",
          "front": "Risk and Reliability Modeling",
          "back": "The analytical framework used to quantify the probability of failure, assess the impact of risks, and validate mission success criteria."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l02",
      "title": "Mission Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l02-a1",
          "type": "image",
          "title": "Workflow with Control Gates",
          "content": "Map out a systems integration workflow, identifying key decision points (gates) where readiness is assessed before proceeding."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, you will design a systems integration workflow for a hypothetical mission. Your task is to define the process for analyzing system trade-offs, integrating metrics governance, and coordinating between engineering teams. Once designed, you will stress-test your workflow against scenarios involving uncertainty and component failures to evaluate its reliability."
        },
        {
          "id": "space-missions-engineering-301-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "This recap explores the concept of mission readiness. We will review how to implement effective control gates—formal decision points in a project—by defining clear ownership, entry and exit criteria, rollback conditions, and verification signals. These elements are essential for ensuring a project is truly ready to move to its next phase."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l02-act1",
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
          "id": "space-missions-engineering-301-l02-act2",
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
              "text": "Maximum payload mass",
              "bucket": "Technical"
            },
            {
              "text": "Orbital debris mitigation regulations",
              "bucket": "Policy"
            },
            {
              "text": "Public trust erosion risk",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Data downlink bandwidth",
              "bucket": "Technical"
            }
          ]
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l03-a1",
          "type": "image",
          "title": "Knowledge Check",
          "content": "Apply your understanding of core concepts like mission architecture, constraints, and workflow controls."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-301-l03-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-301-skill-core",
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
          "id": "space-missions-engineering-301-l03-q2",
          "text": "A robust systems integration workflow should emphasize:",
          "skillId": "space-missions-engineering-301-skill-level",
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
          "id": "space-missions-engineering-301-l03-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-301-skill-reliability",
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
      "id": "space-missions-engineering-301-l04",
      "title": "Case Analysis: The 'Odyssey' Mars Orbiter",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l04-a1",
          "type": "image",
          "title": "Case Study Decision Tree",
          "content": "Analyze a real-world mission scenario. Map out the critical decision points and potential outcomes based on competing constraints."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case analysis, we explore the 'Odyssey' Mars Orbiter, a multi-phase mission facing significant challenges. We will examine its payload limitations, narrow launch window, and critical in-flight risks. Your task is to identify the high-impact risks and competing constraints that influenced the mission's design and operational decisions."
        },
        {
          "id": "space-missions-engineering-301-l04-c2",
          "kind": "concept",
          "title": "The Tradeoff Matrix",
          "content": "We introduce the tradeoff matrix as a tool for structured decision-making. You will learn to evaluate different intervention options—such as altering a trajectory versus reducing scientific payload—against weighted criteria like cost, risk, schedule impact, and scientific return. This scoring system enables objective, defensible choices when faced with difficult compromises."
        },
        {
          "id": "space-missions-engineering-301-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "This recap focuses on learning from mission failures and near-misses. We will analyze how patterns of failure can be transformed into proactive safeguards for future missions. This includes creating pre-defined response playbooks for common anomalies and updating monitoring systems to detect precursor signals, improving overall mission resilience."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured decision-making tool for comparing alternatives across multiple, often competing, criteria."
        },
        {
          "id": "space-missions-engineering-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of anomaly or risk signature, used to design targeted mitigations and preventative measures."
        },
        {
          "id": "space-missions-engineering-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined sequence of actions and checklists designed to ensure a safe, timely, and effective recovery from a known anomaly."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l05",
      "title": "Mission Operations Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l05-a1",
          "type": "image",
          "title": "Mission Simulation Dashboard",
          "content": "Interact with a dynamic simulation. Adjust parameters, run scenarios, and analyze the impact of your decisions on mission outcomes."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive session, you will configure a simulated mission to Mars. Your task is to define intervention scenarios, such as contingency trajectory burns, set parameters for uncertainty like solar flare probability, and establish measurable thresholds for mission success, like orbital insertion accuracy."
        },
        {
          "id": "space-missions-engineering-301-l05-c2",
          "kind": "practice",
          "title": "Scenario Execution",
          "content": "Run the configured simulation. Observe how the system responds to your chosen interventions and unexpected events. Monitor key telemetry data and watch for threshold breaches or cascading failures in real-time."
        },
        {
          "id": "space-missions-engineering-301-l05-c3",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this post-run review, we will evaluate the outcomes of your simulation. You will analyze any unintended side effects, compare expected versus actual results, and assess how well your decisions aligned with the mission's governance constraints. This reflective process is vital for improving decision-making under pressure."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances mission architecture and flight operations governance.",
          "instructions": [
            "Define mission objectives and safety guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "space-missions-engineering-301-l05-act2",
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
      "id": "space-missions-engineering-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l06-a1",
          "type": "image",
          "title": "Application Check",
          "content": "Demonstrate your ability to analyze complex scenarios, make trade-offs, and learn from simulated outcomes."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-301-l06-q1",
          "text": "When using a tradeoff matrix to select a trajectory correction maneuver, what is the primary purpose of weighting criteria like 'fuel efficiency' and 'time-to-target'?",
          "skillId": "space-missions-engineering-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To ensure all options are scored equally"
            },
            {
              "id": "b",
              "text": "To reflect the relative importance of each criterion to mission success"
            },
            {
              "id": "c",
              "text": "To complicate the decision-making process"
            },
            {
              "id": "d",
              "text": "To eliminate the need for engineering judgment"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Weighting allows the analysis to prioritize criteria that are more critical to achieving the overall mission objectives."
        },
        {
          "id": "space-missions-engineering-301-l06-q2",
          "text": "A case study reveals a recurring software glitch during thermal vacuum testing. What is the most effective long-term response?",
          "skillId": "space-missions-engineering-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Restarting the test each time the glitch occurs"
            },
            {
              "id": "b",
              "text": "Performing a root cause analysis to create a permanent fix and updating test protocols"
            },
            {
              "id": "c",
              "text": "Noting the glitch in a report but proceeding with the mission timeline"
            },
            {
              "id": "d",
              "text": "Replacing the entire software system without investigation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A root cause analysis addresses the underlying problem, preventing recurrence and improving the reliability of future missions."
        },
        {
          "id": "space-missions-engineering-301-l06-q3",
          "text": "In a mission simulation, what is the value of introducing random uncertainty variables like 'micrometeoroid impact risk'?",
          "skillId": "space-missions-engineering-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To guarantee the mission will fail in the simulation"
            },
            {
              "id": "b",
              "text": "To test the resilience of the mission plan and the effectiveness of contingency procedures"
            },
            {
              "id": "c",
              "text": "To make the simulation less realistic"
            },
            {
              "id": "d",
              "text": "To prove that contingency planning is unnecessary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Introducing uncertainty allows engineers to stress-test their plans against unpredictable, 'off-nominal' events and validate their response strategies."
        },
        {
          "id": "space-missions-engineering-301-l06-q4",
          "text": "What is a key characteristic of an effective 'response playbook' developed from a failure analysis?",
          "skillId": "space-missions-engineering-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "It is highly theoretical and complex"
            },
            {
              "id": "b",
              "text": "It is only accessible to senior management"
            },
            {
              "id": "c",
              "text": "It contains clear, actionable steps, decision authority, and communication protocols"
            },
            {
              "id": "d",
              "text": "It is written once and never updated"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An effective playbook must be practical and clear, enabling flight controllers to respond quickly and correctly during a real anomaly."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l07",
      "title": "Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "Chart the potential positive and negative impacts of a mission on various groups, from the scientific community to the general public."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Space missions affect many groups differently. In this section, we will map the distribution of benefits (e.g., scientific data, technological advancement) and burdens (e.g., cost, space debris, ethical concerns) across various stakeholders. Analyzing these impacts over different time horizons is crucial for responsible mission design."
        },
        {
          "id": "space-missions-engineering-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "True accountability requires a formal structure. We will define an 'accountability architecture' with concrete components: clear documentation for decision traceability, defined review processes for independent oversight, and pre-agreed obligations for remediation when things go wrong. This framework ensures responsibility is clear and actionable."
        },
        {
          "id": "space-missions-engineering-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "This recap introduces a practical tool: the Responsible Execution Checklist. This checklist integrates technical requirements with policy compliance, ethical considerations, and stakeholder trust. It serves as a final verification to ensure that mission execution is not only effective but also responsible."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-301-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how mission outcomes—both positive and negative—are spread across different stakeholder groups and timescales."
        },
        {
          "id": "space-missions-engineering-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The documented evidence chain showing how and why a decision was made, including the data, assumptions, and criteria used."
        },
        {
          "id": "space-missions-engineering-301-l07-f3",
          "front": "Responsible Execution",
          "back": "Mission delivery that balances technical effectiveness with ethical principles, policy compliance, and stakeholder safeguards."
        }
      ]
    },
    {
      "id": "space-missions-engineering-301-l08",
      "title": "Capstone Mission Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-301-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "Structure your final project plan. Define your mission, set clear objectives, and establish the rules for governance and success."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this lab, you will create a detailed charter for a capstone mission of your own design. This document will serve as your project's foundation, outlining its core objectives, constraints, key performance indicators, and the governance gates that will guide your decision-making process from concept to completion."
        },
        {
          "id": "space-missions-engineering-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "This recap prepares you for a critical design review. You will learn to anticipate and prepare evidence-based defenses for your project choices. This involves building resilient arguments against potential critiques related to technical feasibility, policy compliance, and stakeholder impact, demonstrating mastery of the course material."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with objectives, metrics, risks, and remediation pathways.",
          "instructions": [
            "Define the mission objective and boundary conditions.",
            "List at least three measurable success indicators.",
            "Define escalation criteria and corrective action pathways."
          ]
        },
        {
          "id": "space-missions-engineering-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
