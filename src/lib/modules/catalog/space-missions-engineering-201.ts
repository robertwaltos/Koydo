import type { LearningModule } from "@/lib/modules/types";

export const space_missions_engineering_201_Module: LearningModule = {
  "id": "space-missions-engineering-201",
  "title": "Space Missions Engineering Applied Practice",
  "description": "Level 201 curriculum in Space Missions Engineering, focused on mission architecture, systems integration, risk and reliability modeling, and flight operations governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Aerospace Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "space",
    "engineering"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply mission architecture using explicit assumptions and constraints",
    "Design and execute workflows for systems integration with reliable control points",
    "Evaluate risk and reliability modeling decisions using baseline and side-effect analysis",
    "Strengthen flight operations governance with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "space-missions-engineering-201-l01",
      "title": "Space Missions Engineering Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l01-a1",
          "type": "image",
          "title": "Mission Architecture Example",
          "content": "Diagram showing key components of a Mars rover mission: launch vehicle, cruise stage, descent module, rover, and Earth-based communication network."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "In this lesson, we will dive into the fascinating field of Space Missions Engineering. We will define the scope of this discipline and introduce key vocabulary. We will also discuss how mission architecture (the overall design) and systems integration (making all parts work together) interact in real-world scenarios. Grasping these concepts is crucial for designing and executing successful missions beyond our planet."
        },
        {
          "id": "space-missions-engineering-201-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "In this section, you will learn to map causal pathways—identifying how different factors influence each other and testing hidden assumptions. Before choosing a solution, it’s critical to understand these relationships to make informed decisions about mission design and constraints."
        },
        {
          "id": "space-missions-engineering-201-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This recap emphasizes the importance of evidence. Every claim should be supported by observable indicators—measurable signs that back up our statements. We will also practice noting uncertainties and establishing review checkpoints to ensure our findings are accurate and reliable."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l01-f1",
          "front": "Mission Architecture",
          "back": "The high-level plan and structure of a space mission, defining its goals, key components, and operational phases."
        },
        {
          "id": "space-missions-engineering-201-l01-f2",
          "front": "Systems Integration",
          "back": "The process of ensuring all individual subsystems of a spacecraft and mission work together correctly as a whole."
        },
        {
          "id": "space-missions-engineering-201-l01-f3",
          "front": "Risk and Reliability Modeling",
          "back": "The use of analytical methods to predict the probability of mission success and identify potential failures."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l02",
      "title": "Space Missions Engineering Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l02-a1",
          "type": "diagram",
          "title": "Workflow with Control Gates",
          "content": "A flowchart illustrating a development workflow with specific checkpoints (gates) for design review, testing, and pre-launch readiness."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "In this interactive lab, you will design a workflow emphasizing methodical execution, discipline, and evidence-based reasoning. You will then stress-test your workflow's reliability under uncertain conditions, a crucial skill for any engineer."
        },
        {
          "id": "space-missions-engineering-201-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "This recap covers the concept of project readiness. To ensure a project can move forward, it is essential to map owner roles, establish clear gate criteria, define rollback conditions, and identify verification signals that confirm progress."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control Mapping",
          "description": "Match controls to the strongest expected reliability or governance effect.",
          "pairs": [
            {
              "left": "Pre-release gate",
              "right": "Prevents known issues from reaching operations."
            },
            {
              "left": "Rollback threshold",
              "right": "Limits the impact of a failure after it occurs."
            },
            {
              "left": "Baseline monitor",
              "right": "Helps identify the cause of unexpected changes."
            },
            {
              "left": "Retrospective cycle",
              "right": "Uses lessons from past events to improve processes."
            }
          ]
        },
        {
          "id": "space-missions-engineering-201-l02-act2",
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
      "id": "space-missions-engineering-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-201-l03-q1",
          "text": "Which approach most improves decisions in mission architecture?",
          "skillId": "space-missions-engineering-201-skill-core",
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
          "id": "space-missions-engineering-201-l03-q2",
          "text": "The 201 level should emphasize:",
          "skillId": "space-missions-engineering-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "method execution, workflow discipline, and evidence-based reasoning"
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
          "explanation": "This level is explicitly structured around method execution, workflow discipline, and evidence-based reasoning."
        },
        {
          "id": "space-missions-engineering-201-l03-q3",
          "text": "What best strengthens systems integration reliability?",
          "skillId": "space-missions-engineering-201-skill-reliability",
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
          "id": "space-missions-engineering-201-l03-q4",
          "text": "For risk and reliability modeling, which practice is most defensible?",
          "skillId": "space-missions-engineering-201-skill-eval",
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
          "id": "space-missions-engineering-201-l03-q5",
          "text": "A mature flight operations governance model should include:",
          "skillId": "space-missions-engineering-201-skill-governance",
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
      "id": "space-missions-engineering-201-l04",
      "title": "Space Missions Engineering Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l04-a1",
          "type": "diagram",
          "title": "Sample Tradeoff Matrix",
          "content": "A table comparing three different propulsion systems across criteria like cost, reliability, thrust, and development time, with scores for each."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case analysis, we will explore a multi-phase space mission facing several challenges, including payload limitations, specific launch windows, and potential in-flight anomalies. You will be responsible for mapping the high-impact risks and understanding the competing constraints that influence mission success."
        },
        {
          "id": "space-missions-engineering-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "We will introduce the tradeoff matrix, a tool that helps evaluate different options by scoring them based on criteria like effectiveness, reliability, and feasibility. Understanding how to analyze tradeoffs is crucial for making informed engineering decisions."
        },
        {
          "id": "space-missions-engineering-201-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "This recap explains how to turn failure patterns into valuable lessons. By analyzing what went wrong, we can create safeguards, develop response playbooks, and implement monitoring updates to improve future missions. This process is essential for continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A decision-making tool that systematically compares different options against a set of important criteria."
        },
        {
          "id": "space-missions-engineering-201-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring type of problem or error, which can be studied to prevent future incidents."
        },
        {
          "id": "space-missions-engineering-201-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide with pre-planned actions to handle specific emergencies or failures."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l05",
      "title": "Space Missions Engineering Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An example of a simulation interface showing input parameters (e.g., budget uncertainty, component failure rate) and output metrics (e.g., mission success probability, final cost)."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive practice, you will configure various intervention scenarios for a mission. You will set uncertainty parameters and define measurable success thresholds to assess the effectiveness of your decisions. This hands-on experience helps prepare for different outcomes in engineering projects."
        },
        {
          "id": "space-missions-engineering-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "In this recap, we will conduct a post-run review to evaluate simulation outcomes. We will analyze any side effects that occurred and check how well the results align with governance constraints. This evaluation is critical for understanding the full implications of our decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances mission architecture and flight operations governance.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "space-missions-engineering-201-l05-act2",
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
      "id": "space-missions-engineering-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Document assumptions, show your reasoning chain, and verify your conclusions before submission."
        }
      ],
      "questions": [
        {
          "id": "space-missions-engineering-201-l06-q1",
          "text": "When using a tradeoff matrix to select a component, what is the most critical first step?",
          "skillId": "space-missions-engineering-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Choosing the cheapest option"
            },
            {
              "id": "b",
              "text": "Defining the evaluation criteria and their relative importance"
            },
            {
              "id": "c",
              "text": "Building a physical prototype of each option"
            },
            {
              "id": "d",
              "text": "Polling the team for their favorite design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is only effective if the criteria for judgment (like reliability, cost, mass) are clearly defined and weighted first."
        },
        {
          "id": "space-missions-engineering-201-l06-q2",
          "text": "What is the primary goal of analyzing failure patterns from past missions?",
          "skillId": "space-missions-engineering-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To assign blame for the failure"
            },
            {
              "id": "b",
              "text": "To prove that space missions are too risky"
            },
            {
              "id": "c",
              "text": "To identify recurring root causes and design targeted safeguards"
            },
            {
              "id": "d",
              "text": "To create a list of all missions that have ever failed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The goal of failure analysis is to learn from mistakes and implement specific preventative measures (safeguards) to avoid repeating them."
        },
        {
          "id": "space-missions-engineering-201-l06-q3",
          "text": "In a mission simulation, why is it important to set 'uncertainty parameters'?",
          "skillId": "space-missions-engineering-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To guarantee the simulation shows a successful outcome"
            },
            {
              "id": "b",
              "text": "To make the simulation more complicated and difficult to run"
            },
            {
              "id": "c",
              "text": "To test how the mission plan holds up under a range of possible, non-ideal conditions"
            },
            {
              "id": "d",
              "text": "To prove that the initial plan has no flaws"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Uncertainty parameters (e.g., variations in solar panel efficiency, launch delays) allow you to stress-test a plan against real-world variability."
        },
        {
          "id": "space-missions-engineering-201-l06-q4",
          "text": "A 'response playbook' is most useful for which of the following situations?",
          "skillId": "space-missions-engineering-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Deciding the primary scientific goal of a new mission"
            },
            {
              "id": "b",
              "text": "Handling a known, high-risk event like a communication loss during flight"
            },
            {
              "id": "c",
              "text": "Writing the initial mission budget proposal"
            },
            {
              "id": "d",
              "text": "Designing the mission patch"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Response playbooks provide pre-planned, tested procedures for flight operations teams to handle specific, anticipated emergencies quickly and effectively."
        },
        {
          "id": "space-missions-engineering-201-l06-q5",
          "text": "During a simulation debrief, you notice a successful outcome was achieved but a key governance constraint (e.g., orbital debris policy) was violated. What is the correct action?",
          "skillId": "space-missions-engineering-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Ignore the violation since the primary objective was met"
            },
            {
              "id": "b",
              "text": "Declare the simulation a complete success"
            },
            {
              "id": "c",
              "text": "Modify the governance constraint to allow the violation"
            },
            {
              "id": "d",
              "text": "Flag the result as a hidden failure and revise the strategy to meet all constraints"
            }
          ],
          "correctOptionId": "d",
          "explanation": "True mission success requires meeting all objectives AND adhering to governance and policy constraints. A violation represents a failure that must be addressed."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l07",
      "title": "Space Missions Engineering Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l07-a1",
          "type": "diagram",
          "title": "Stakeholder Impact Map",
          "content": "A diagram showing a central engineering decision with radiating lines to different stakeholder groups (e.g., scientific community, general public, funding agencies, future generations), listing potential positive and negative impacts for each."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, you will examine how the benefits and burdens of engineering decisions are distributed among different stakeholders over time. Understanding this impact is crucial for making ethical decisions and ensuring all perspectives are considered."
        },
        {
          "id": "space-missions-engineering-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "This section discusses accountability in engineering projects. This includes traceability (the ability to track decisions), review rights for stakeholders, and remediation obligations to ensure any issues are addressed. This framework is essential for responsible engineering."
        },
        {
          "id": "space-missions-engineering-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "At the end of the lesson, we will use a checklist that connects technical mission aspects with policy, ethics, and stakeholder trust. This ensures we are not only meeting engineering goals but also acting responsibly and ethically in our mission planning."
        }
      ],
      "flashcards": [
        {
          "id": "space-missions-engineering-201-l07-f1",
          "front": "Impact Distribution",
          "back": "An analysis of how a mission's positive and negative consequences affect different groups of people over time."
        },
        {
          "id": "space-missions-engineering-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The documented evidence that shows who made a key decision, when, and based on what information."
        },
        {
          "id": "space-missions-engineering-201-l07-f3",
          "front": "Responsible Execution",
          "back": "Conducting a mission in a way that is effective, ethical, and respects all policy and safety requirements."
        }
      ]
    },
    {
      "id": "space-missions-engineering-201-l08",
      "title": "Space Missions Engineering Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "space-missions-engineering-201-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A document template with sections for Mission Statement, Key Objectives, Success Metrics, Known Constraints, Risk Assessment, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "space-missions-engineering-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "In this interactive session, you will create a detailed capstone charter. This document will outline your project's objectives, constraints, success metrics, and the governance gates that will guide your decision-making process. This exercise helps you plan a successful space mission from start to finish."
        },
        {
          "id": "space-missions-engineering-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As a final recap, you will prepare well-researched defenses for potential critiques of your project's technical, policy, and stakeholder decisions. This preparation strengthens your arguments and enhances your understanding of the complexities of space mission planning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "space-missions-engineering-201-l08-act1",
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
          "id": "space-missions-engineering-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections."
        }
      ]
    }
  ]
};
