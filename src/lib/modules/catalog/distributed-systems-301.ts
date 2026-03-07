import type { LearningModule } from "@/lib/modules/types";

export const distributed_systems_301_Module: LearningModule = {
  "id": "distributed-systems-301",
  "title": "Distributed Systems and Governance",
  "description": "Level 301 curriculum in Distributed Systems, focused on consistency and availability, fault tolerance, distributed coordination, and observability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
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
    "Apply consistency and availability with explicit assumptions and tradeoff framing",
    "Build repeatable workflows for fault tolerance under realistic constraints",
    "Evaluate distributed coordination decisions with baseline and side-effect analysis",
    "Strengthen observability and operations with transparent policies and escalation pathways",
    "Communicate evidence and uncertainty to mixed stakeholder groups",
    "Produce defensible recommendations that survive critical review"
  ],
  "lessons": [
    {
      "id": "distributed-systems-301-l01",
      "title": "Distributed Systems Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-301-l01-a1",
          "type": "image",
          "title": "Visual Prompt: The CAP Theorem Triangle",
          "content": "Imagine a triangle with Consistency, Availability, and Partition Tolerance at the corners. You can only pick two. Document your assumptions and validate your trade-off conclusions before final submission."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l01-c1",
          "kind": "concept",
          "title": "Language, Scope, and Boundaries",
          "content": "In this lesson, we will explore the critical concepts of operational language and scope boundaries. We will learn how these ideas help us understand the connections between consistency, availability, and fault tolerance in real-world systems. By establishing clear boundaries, you will have a stronger framework for ensuring that distributed systems function effectively under pressure."
        },
        {
          "id": "distributed-systems-301-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Here, learners will engage in modeling cause-and-effect pathways. You will identify potential assumptions that could lead to cascading failures in a system. By recognizing these hidden assumptions, you will be better prepared to select appropriate interventions that improve system performance and reliability. This skill is crucial for making informed decisions in complex, high-stakes environments."
        },
        {
          "id": "distributed-systems-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Standards",
          "content": "Throughout this module, it is essential that all claims are supported by observable indicators. This means establishing clear boundaries of uncertainty and setting up strict review checkpoints. By adhering to these evidence standards, we ensure our conclusions are based on solid data rather than intuition, which is vital for effective decision-making in distributed architecture."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l01-f1",
          "front": "Consistency and Availability",
          "back": "A central decision axis in Distributed Systems requiring explicit tradeoff treatment."
        },
        {
          "id": "distributed-systems-301-l01-f2",
          "front": "Fault Tolerance",
          "back": "The reliability layer that determines whether plans survive real-world variability and hardware failures."
        },
        {
          "id": "distributed-systems-301-l01-f3",
          "front": "Distributed Coordination",
          "back": "The analytical process for assessing intervention quality, state synchronization, and consequence spread."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l02",
      "title": "Distributed Systems Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-301-l02-a1",
          "type": "image",
          "title": "Visual Prompt: Decision Pipeline Flowchart",
          "content": "Visualize a flowchart illustrating a decision-making pipeline. It features distinct 'Control Gates' and 'Verification Hooks' that act as checkpoints before a system change is deployed."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a workflow that emphasizes the analysis of system trade-offs. You will focus on integrating metrics and governance into your pipeline while considering how different engineering teams collaborate. After designing your workflow, you will stress-test its resilience against uncertainties, ensuring it can withstand unexpected network partitions or traffic spikes."
        },
        {
          "id": "distributed-systems-301-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To achieve operational readiness, it is crucial to map out the roles of different service owners, establish control gates, and create verification hooks for post-decision processes. These elements ensure that decisions are executed safely and that automated checks confirm the outcomes align with our service level objectives (SLOs)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l02-act1",
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
          "id": "distributed-systems-301-l02-act2",
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
      "id": "distributed-systems-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-301-l03-a1",
          "type": "image",
          "title": "Visual Prompt: The Inspector",
          "content": "Picture a magnifying glass hovering over a server rack, symbolizing the need to inspect assumptions and validate metrics before answering."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-301-l03-q1",
          "text": "Which action most improves consistency and availability quality in practice?",
          "skillId": "distributed-systems-301-skill-core",
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
          "id": "distributed-systems-301-l03-q2",
          "text": "At level 301, the strongest emphasis in distributed systems is:",
          "skillId": "distributed-systems-301-skill-level",
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
          "explanation": "The 301 layer is explicitly designed around system tradeoff analysis, metrics and governance integration, and cross-team decision design."
        },
        {
          "id": "distributed-systems-301-l03-q3",
          "text": "What best strengthens fault tolerance reliability?",
          "skillId": "distributed-systems-301-skill-reliability",
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
          "id": "distributed-systems-301-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-301-skill-eval",
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
          "id": "distributed-systems-301-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "One-time review with no corrective pathway"
            },
            {
              "id": "b",
              "text": "Policy links, measurable thresholds, and remediation triggers"
            },
            {
              "id": "c",
              "text": "No public or stakeholder transparency"
            },
            {
              "id": "d",
              "text": "Unbounded discretion without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and corrective pathways."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l04",
      "title": "Distributed Systems Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-301-l04-a1",
          "type": "image",
          "title": "Visual Prompt: The Split-Screen Network",
          "content": "Visualize a split-screen graphic: on the left, a healthy, glowing green server network; on the right, a degraded network flashing red alert icons, representing partial outages and stale reads."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "In this engaging case analysis, we will explore a global service encountering significant challenges. These include partial outages, where some nodes fail while others remain active, and stale reads, where users receive outdated information due to replication lag. The service faces intense pressure to recover quickly during high traffic. You will learn how to map out the stakes involved in making critical decisions and identify risks that may not be immediately obvious."
        },
        {
          "id": "distributed-systems-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a trade-off matrix to systematically compare different engineering interventions. You will evaluate these options based on their effectiveness, reliability, fairness, and implementation feasibility. This matrix will help you make informed decisions by clearly illustrating the pros and cons of each option, which is essential for effective governance and architecture design."
        },
        {
          "id": "distributed-systems-301-l04-c3",
          "kind": "recap",
          "title": "Failure Lessons and Recovery",
          "content": "This section teaches you how to transform 'failure signatures'—recurring patterns of system degradation—into valuable safeguards. You will learn to create response playbooks and develop monitoring updates that prevent future issues. By understanding these concepts, you will be better equipped to handle inevitable failures and improve the overall resilience of your systems."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of options under conflicting priorities, used to visualize pros and cons."
        },
        {
          "id": "distributed-systems-301-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring observable pattern indicating a specific class of system risk or degradation."
        },
        {
          "id": "distributed-systems-301-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented sequence of actions for safe and timely response during adverse events."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l05",
      "title": "Distributed Systems Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-301-l05-a1",
          "type": "image",
          "title": "Visual Prompt: The Control Dashboard",
          "content": "Imagine a dashboard interface with sliders for 'Traffic Load' and 'Latency'. As you adjust the sliders, real-time line graphs react, showing the immediate impact on system health."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this interactive simulation studio, you will configure various interventions, define parameters of uncertainty, and establish measurable success thresholds. This hands-on experience allows you to experiment with different traffic and failure scenarios, helping you understand how to set realistic, data-driven goals for success in distributed environments."
        },
        {
          "id": "distributed-systems-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation run, we will conduct a debriefing session to review the results. This includes analyzing expected gains, identifying unintended side effects, and ensuring compliance with governance standards. This reflective practice is crucial for learning from simulated outages and improving future architectural decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best advances consistency, availability, and observability.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record one near-term and one long-term tradeoff for each option.",
            "Select metrics that confirm or falsify your choice."
          ]
        },
        {
          "id": "distributed-systems-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership",
              "right": "Create explicit role and escalation map"
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
      "id": "distributed-systems-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-301-l06-a1",
          "type": "image",
          "title": "Visual Prompt: The Bullseye",
          "content": "Picture a target icon with three arrows hitting the dead center, representing accurate, well-calibrated decision-making under pressure."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-301-l06-q1",
          "text": "What is the primary purpose of constructing a tradeoff matrix in distributed systems?",
          "skillId": "distributed-systems-301-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To systematically compare interventions under conflicting priorities"
            },
            {
              "id": "b",
              "text": "To guarantee that a system will never experience downtime"
            },
            {
              "id": "c",
              "text": "To hide the negative side effects of a chosen architecture"
            },
            {
              "id": "d",
              "text": "To bypass governance and compliance checks"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A tradeoff matrix visualizes the pros and cons of different options, allowing teams to make informed decisions when priorities conflict."
        },
        {
          "id": "distributed-systems-301-l06-q2",
          "text": "How should an engineering team utilize a 'failure signature'?",
          "skillId": "distributed-systems-301-skill-failures",
          "options": [
            {
              "id": "a",
              "text": "Ignore it unless it causes a total system outage"
            },
            {
              "id": "b",
              "text": "As a recurring observable pattern to build targeted safeguards"
            },
            {
              "id": "c",
              "text": "To assign blame to individual developers"
            },
            {
              "id": "d",
              "text": "To delete the logs and free up storage space"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Failure signatures are recognizable patterns of degradation that teams use to proactively build safeguards and alerts."
        },
        {
          "id": "distributed-systems-301-l06-q3",
          "text": "Which of the following is a key component of a recovery playbook?",
          "skillId": "distributed-systems-301-skill-recovery",
          "options": [
            {
              "id": "a",
              "text": "A list of theoretical features for the next quarter"
            },
            {
              "id": "b",
              "text": "A documented sequence for safe and timely response during adverse events"
            },
            {
              "id": "c",
              "text": "Marketing materials for stakeholders"
            },
            {
              "id": "d",
              "text": "A script that automatically deletes corrupted databases without backups"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A recovery playbook provides step-by-step, documented actions to safely mitigate and recover from system incidents."
        },
        {
          "id": "distributed-systems-301-l06-q4",
          "text": "During a simulation debrief, what is the most critical action?",
          "skillId": "distributed-systems-301-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Analyzing expected gains against actual side effects and governance compliance"
            },
            {
              "id": "b",
              "text": "Declaring the simulation a success regardless of the data"
            },
            {
              "id": "c",
              "text": "Increasing the traffic load until the simulation crashes"
            },
            {
              "id": "d",
              "text": "Skipping the review to save time"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Debriefs are meant for reflective practice, comparing what was expected to happen against the actual side effects and compliance results."
        },
        {
          "id": "distributed-systems-301-l06-q5",
          "text": "If a system failure is exacerbated by ambiguous ownership, what is the strongest mitigation?",
          "skillId": "distributed-systems-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Wait for someone to volunteer to fix it"
            },
            {
              "id": "b",
              "text": "Create an explicit role and escalation map"
            },
            {
              "id": "c",
              "text": "Increase the server capacity"
            },
            {
              "id": "d",
              "text": "Rewrite the entire codebase"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ambiguous ownership is a governance failure; creating an explicit role and escalation map ensures clear responsibility during an incident."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l07",
      "title": "Distributed Systems Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-301-l07-a1",
          "type": "image",
          "title": "Visual Prompt: The Scales of Justice",
          "content": "Visualize a balanced scale weighing technical efficiency on one side against user fairness and data privacy on the other."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "In this lesson, we will identify how the impacts of technical decisions are distributed among different stakeholders. We will pay special attention to situations where the benefits and burdens of decisions do not align across various user groups. Understanding these dynamics is essential for promoting fairness, equity, and trust in distributed systems."
        },
        {
          "id": "distributed-systems-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Accountability in decision-making requires a clear structure that allows for the traceability of decisions. This means establishing rights for review and setting standards for remediation when systems fail or cause harm. You will learn how to create an accountability architecture that ensures responsible governance and transparent operations."
        },
        {
          "id": "distributed-systems-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "To ensure we act responsibly, we use a final execution checklist. This includes policies we must follow, ethical considerations, the reliability of our technical systems, and the trust of all stakeholders involved. By combining these criteria, we make decisions that are not only technically sound but also fair and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-301-l07-f1",
          "front": "Impact Distribution",
          "back": "How benefits and harms of a system change are allocated across different stakeholders."
        },
        {
          "id": "distributed-systems-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, by whom, and with what evidence."
        },
        {
          "id": "distributed-systems-301-l07-f3",
          "front": "Responsible Execution",
          "back": "A delivery mode that combines technical effectiveness, fairness, and corrective capacity."
        }
      ]
    },
    {
      "id": "distributed-systems-301-l08",
      "title": "Distributed Systems Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-301-l08-a1",
          "type": "image",
          "title": "Visual Prompt: The Blueprint",
          "content": "Imagine a glowing blue architectural blueprint titled 'Capstone Charter', featuring distinct sections for Objectives, Risks, and Governance Pathways."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "In this activity, you will draft a capstone project charter. This document outlines the scope of your proposed system architecture, identifies constraints, establishes metrics for measuring success, and sets governance checkpoints. This process forces critical thinking and ensures your project is planned effectively for real-world execution."
        },
        {
          "id": "distributed-systems-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As you prepare for your final project presentation, focus on gathering strong, metric-driven evidence to support your architectural choices. It is vital to anticipate and respond thoughtfully to critical feedback regarding trade-offs. This preparation demonstrates your mastery of the material and your readiness to defend your decisions in a professional engineering environment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your primary objective and system boundary conditions.",
            "Define at least three measurable success indicators (e.g., latency, uptime).",
            "Document a governance escalation pathway for critical failures."
          ]
        },
        {
          "id": "distributed-systems-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against technical, policy, and stakeholder critiques."
        }
      ]
    }
  ]
};
