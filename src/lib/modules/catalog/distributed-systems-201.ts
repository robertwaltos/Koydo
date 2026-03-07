import type { LearningModule } from "@/lib/modules/types";

export const distributed_systems_201_Module: LearningModule = {
  "id": "distributed-systems-201",
  "title": "Distributed Systems Applied Practice",
  "description": "A level 201 curriculum in Distributed Systems, focused on consistency, availability, fault tolerance, distributed coordination, and observability through case-driven analysis, simulations, and assessment-backed mastery.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
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
    "Apply consistency and availability principles with explicit assumptions and tradeoff framing.",
    "Build repeatable workflows for fault tolerance under realistic constraints.",
    "Evaluate distributed coordination decisions with baseline and side-effect analysis.",
    "Strengthen observability and operations with transparent policies and escalation pathways.",
    "Communicate evidence and uncertainty effectively to mixed stakeholder groups.",
    "Produce defensible recommendations that survive critical review."
  ],
  "lessons": [
    {
      "id": "distributed-systems-201-l01",
      "title": "Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "distributed-systems-201-l01-a1",
          "type": "image",
          "title": "Key Concepts Diagram",
          "content": "A visual map connecting Consistency, Availability, and Fault Tolerance."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Boundaries",
          "content": "We will explore the essential concepts of operational language and scope boundaries. Understanding these helps define how principles like consistency, availability, and fault tolerance apply to real-world systems, ensuring reliability and effective function.",
          "visualPrompt": "Diagram showing a central system with concentric circles labeled 'Core Service,' 'Dependencies,' and 'User Impact' to illustrate scope."
        },
        {
          "id": "distributed-systems-201-l01-c2",
          "kind": "concept",
          "title": "Causal Reasoning Under Constraints",
          "content": "Learners will model cause-and-effect pathways, identifying assumptions that could lead to system failures. Recognizing these potential pitfalls allows for informed decisions on which interventions to implement for the most thoughtful and effective results.",
          "visualPrompt": "A flowchart demonstrating a potential failure cascade, starting from a single assumption."
        },
        {
          "id": "distributed-systems-201-l01-c3",
          "kind": "recap",
          "title": "Standards of Evidence",
          "content": "Throughout this module, all claims must be supported by observable data. We will establish clear boundaries for uncertainty and use review checkpoints to ensure our findings are accurate and reliable, maintaining a high standard for our work.",
          "visualPrompt": "An icon of a magnifying glass over a data chart, symbolizing evidence-based claims."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l01-f1",
          "front": "Consistency vs. Availability",
          "back": "A central tradeoff in Distributed Systems that requires balancing data accuracy with system uptime."
        },
        {
          "id": "distributed-systems-201-l01-f2",
          "front": "Fault Tolerance",
          "back": "A system's ability to continue operating correctly even when some of its components fail."
        },
        {
          "id": "distributed-systems-201-l01-f3",
          "front": "Distributed Coordination",
          "back": "The process of managing dependencies and actions across multiple independent components to achieve a common goal."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l02",
      "title": "Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-201-l02-a1",
          "type": "practice",
          "title": "Lab Checklist",
          "content": "1. Define your objective. 2. Document assumptions. 3. Build the workflow. 4. Test against failure scenarios. 5. Validate conclusions."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this interactive lab, you will design a workflow focused on executing specific methods. This involves structured practice, interpreting evidence from your findings, and testing your design's resilience against uncertainty—a crucial skill in distributed systems.",
          "visualPrompt": "An animated diagram of a workflow being built block-by-block, with decision points and error handling paths."
        },
        {
          "id": "distributed-systems-201-l02-c2",
          "kind": "recap",
          "title": "Readiness and Control Gates",
          "content": "To ensure operational readiness, it's vital to map out the roles of different system owners. This includes establishing control gates and verification steps that occur after decisions are made, helping maintain oversight and smooth system operation.",
          "visualPrompt": "A flowchart with 'gates' at key decision points, each labeled with a role (e.g., 'QA Lead,' 'Security Review')."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each control mechanism to its strongest expected system benefit.",
          "pairs": [
            {
              "left": "Pre-commit review gate",
              "right": "Reduces preventable defects"
            },
            {
              "left": "Automated rollback trigger",
              "right": "Limits the impact of failures"
            },
            {
              "left": "Performance baseline dashboard",
              "right": "Supports defensible impact claims"
            },
            {
              "left": "Post-incident retrospective",
              "right": "Improves future decision quality"
            }
          ]
        },
        {
          "id": "distributed-systems-201-l02-act2",
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
              "text": "Data retention rule for compliance",
              "bucket": "Policy"
            },
            {
              "text": "Risk to community trust",
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
      "id": "distributed-systems-201-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-201-l03-a1",
          "type": "practice",
          "title": "Review Tip",
          "content": "Revisit the flashcards from Lesson 1 and the interactive activities from Lesson 2 before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-201-l03-q1",
          "text": "Which action most improves the quality of consistency and availability decisions in practice?",
          "skillId": "distributed-systems-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Skip explicit constraints and rely on intuition"
            },
            {
              "id": "b",
              "text": "Define assumptions, monitor key metrics, and test failure cases"
            },
            {
              "id": "c",
              "text": "Treat all outcomes as equally important"
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and variance in system performance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions require explicit assumptions, measurable indicators, and stress tests against potential failures."
        },
        {
          "id": "distributed-systems-201-l03-q2",
          "text": "At the 201 level, the strongest emphasis is on:",
          "skillId": "distributed-systems-201-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Method execution, structured workflow practice, and evidence-based interpretation"
            },
            {
              "id": "b",
              "text": "Fast execution with no review loops"
            },
            {
              "id": "c",
              "text": "Considering only a single stakeholder's perspective"
            },
            {
              "id": "d",
              "text": "Making claims about outcomes without baseline data"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 201 level is explicitly designed around applying methods, practicing with structured workflows, and interpreting evidence."
        },
        {
          "id": "distributed-systems-201-l03-q3",
          "text": "What best strengthens the reliability of a fault-tolerant system?",
          "skillId": "distributed-systems-201-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Having no clear ownership for incident response"
            },
            {
              "id": "b",
              "text": "Clear control points, owner mapping, and escalation thresholds"
            },
            {
              "id": "c",
              "text": "Making ad-hoc changes without documentation"
            },
            {
              "id": "d",
              "text": "Skipping the post-incident review process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability improves when control, ownership, and escalation paths are explicit and repeatable."
        },
        {
          "id": "distributed-systems-201-l03-q4",
          "text": "When evaluating distributed coordination, which approach is most defensible?",
          "skillId": "distributed-systems-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only anecdotal examples"
            },
            {
              "id": "b",
              "text": "Comparing interventions against a baseline and monitoring side effects"
            },
            {
              "id": "c",
              "text": "Removing difficult scenarios from the evaluation"
            },
            {
              "id": "d",
              "text": "Changing success metrics after the results are known"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baseline comparison and side-effect monitoring reduce biased claims and hidden risks."
        },
        {
          "id": "distributed-systems-201-l03-q5",
          "text": "A mature observability and operations model should include:",
          "skillId": "distributed-systems-201-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "A one-time review with no path for corrections"
            },
            {
              "id": "b",
              "text": "Links to policies, measurable thresholds, and automated remediation triggers"
            },
            {
              "id": "c",
              "text": "No transparency for stakeholders or the public"
            },
            {
              "id": "d",
              "text": "Unbounded discretion for operators without guardrails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature governance connects policy goals to measurable thresholds and clear, corrective pathways."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l04",
      "title": "Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "distributed-systems-201-l04-a1",
          "type": "document",
          "title": "Case Dossier",
          "content": "Background on the global service, including system architecture, recent incident reports, and stakeholder statements."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l04-c1",
          "kind": "example",
          "title": "Case Context and Stakes",
          "content": "We will analyze a global service experiencing partial outages, stale data reads, and slow recovery during peak traffic. You will identify the stakes for the business and its users, and uncover non-obvious risks to develop your critical problem-solving skills.",
          "visualPrompt": "A world map with flashing red dots indicating service outages in different regions."
        },
        {
          "id": "distributed-systems-201-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix Construction",
          "content": "We will construct a tradeoff matrix to systematically compare different interventions. This matrix will evaluate each option based on its effectiveness, reliability, fairness, and implementation feasibility, helping you make informed choices.",
          "visualPrompt": "A table with potential solutions as rows and evaluation criteria (Cost, Speed, Reliability) as columns."
        },
        {
          "id": "distributed-systems-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "In this recap, we discuss how to transform failure signals into proactive safeguards. This includes creating response playbooks for incidents and updating monitoring systems to track performance, which are essential for improving system resilience.",
          "visualPrompt": "An icon showing a broken link being repaired and reinforced."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool for structured comparison of different options against a common set of important criteria."
        },
        {
          "id": "distributed-systems-201-l04-f2",
          "front": "Failure Signature",
          "back": "A recurring, observable pattern of metrics or logs that indicates a specific type of system risk."
        },
        {
          "id": "distributed-systems-201-l04-f3",
          "front": "Recovery Playbook",
          "back": "A documented, step-by-step guide for responding to and recovering from a specific type of system failure."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l05",
      "title": "Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "distributed-systems-201-l05-a1",
          "type": "practice",
          "title": "Simulation Guide",
          "content": "Use the simulator to test your proposed interventions from the case study. Observe the impact on latency, error rates, and user satisfaction."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation Setup",
          "content": "In this practice session, you will configure simulation scenarios by choosing interventions, defining uncertainty parameters (like unexpected traffic spikes), and setting measurable success thresholds. This provides hands-on experience in preparing for different outcomes.",
          "visualPrompt": "A user interface for a simulation tool with sliders for 'Traffic Load,' 'Network Latency,' and 'Server Capacity.'"
        },
        {
          "id": "distributed-systems-201-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After each simulation, you will review the results to assess expected improvements, identify any negative side effects, and check for compliance with governance standards. This reflection is crucial for understanding the impact of your decisions.",
          "visualPrompt": "A dashboard displaying side-by-side charts comparing the 'Before' and 'After' results of a simulation."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Compare three intervention paths and justify which best balances consistency, availability, and operational health.",
          "instructions": [
            "Define your primary objective and guardrail metrics before starting.",
            "For each option, record one near-term and one long-term tradeoff.",
            "Select metrics from the simulation output that confirm or disprove your choice."
          ]
        },
        {
          "id": "distributed-systems-201-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Alignment",
          "description": "Match each risk condition with the strongest mitigation response.",
          "pairs": [
            {
              "left": "Ambiguous ownership of a service",
              "right": "Create an explicit role and escalation map"
            },
            {
              "left": "Monitoring alerts are too noisy",
              "right": "Strengthen alert validation and quality checks"
            },
            {
              "left": "Operational practices deviate from policy",
              "right": "Re-align controls with documented standards"
            },
            {
              "left": "Negative feedback from stakeholders",
              "right": "Increase transparency and two-way communication"
            }
          ]
        }
      ]
    },
    {
      "id": "distributed-systems-201-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "distributed-systems-201-l06-a1",
          "type": "practice",
          "title": "Review Tip",
          "content": "Think back to the Case Analysis. How did the tradeoff matrix help in decision-making? How did the simulation validate those decisions?"
        }
      ],
      "questions": [
        {
          "id": "distributed-systems-201-l06-q1",
          "text": "In a case analysis, what is the primary purpose of a tradeoff matrix?",
          "skillId": "distributed-systems-201-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one solution is perfect in all situations"
            },
            {
              "id": "b",
              "text": "To systematically compare multiple options against key criteria like cost and reliability"
            },
            {
              "id": "c",
              "text": "To document only the technical aspects of a problem"
            },
            {
              "id": "d",
              "text": "To choose the fastest solution without considering other factors"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate different solutions across multiple, often conflicting, priorities."
        },
        {
          "id": "distributed-systems-201-l06-q2",
          "text": "A 'failure signature' is a recurring pattern of indicators. Why is identifying one useful?",
          "skillId": "distributed-systems-201-skill-diagnosis",
          "options": [
            {
              "id": "a",
              "text": "It guarantees the failure will never happen again"
            },
            {
              "id": "b",
              "text": "It allows for faster diagnosis and the creation of proactive safeguards for a specific class of problem"
            },
            {
              "id": "c",
              "text": "It assigns blame to a specific team member"
            },
            {
              "id": "d",
              "text": "It is only useful for historical record-keeping"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Identifying a failure signature helps teams recognize and respond to known issues more quickly and build automated defenses."
        },
        {
          "id": "distributed-systems-201-l06-q3",
          "text": "When running a system simulation, what is the value of defining 'uncertainty parameters' like traffic spikes?",
          "skillId": "distributed-systems-201-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To make the simulation easier to pass"
            },
            {
              "id": "b",
              "text": "To test how a proposed change holds up under stress and non-ideal conditions"
            },
            {
              "id": "c",
              "text": "To generate more data, regardless of its quality"
            },
            {
              "id": "d",
              "text": "To simulate conditions that are impossible in the real world"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulating uncertainty helps assess the resilience and reliability of a solution beyond its performance in a perfect 'best-case' scenario."
        },
        {
          "id": "distributed-systems-201-l06-q4",
          "text": "A simulation shows your proposed change improves latency but also slightly increases error rates. What is the best next step?",
          "skillId": "distributed-systems-201-skill-interpretation",
          "options": [
            {
              "id": "a",
              "text": "Ignore the error rate increase because latency improved"
            },
            {
              "id": "b",
              "text": "Discard the change immediately as a failure"
            },
            {
              "id": "c",
              "text": "Document the tradeoff and evaluate if the increased error rate is acceptable based on the project's goals"
            },
            {
              "id": "d",
              "text": "Rerun the simulation until the error rate goes down"
            }
          ],
          "correctOptionId": "c",
          "explanation": "System improvements often involve tradeoffs. The correct approach is to explicitly acknowledge and evaluate them against the system's requirements."
        },
        {
          "id": "distributed-systems-201-l06-q5",
          "text": "What is the primary function of a 'recovery playbook'?",
          "skillId": "distributed-systems-201-skill-operations",
          "options": [
            {
              "id": "a",
              "text": "To prevent any and all system failures from occurring"
            },
            {
              "id": "b",
              "text": "To provide a pre-approved, step-by-step guide for responding to a known issue, ensuring a faster and safer recovery"
            },
            {
              "id": "c",
              "text": "To be used only by senior engineers"
            },
            {
              "id": "d",
              "text": "To automatically fix any problem without human intervention"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A playbook standardizes the response to common failures, reducing human error and speeding up recovery time during stressful incidents."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l07",
      "title": "Ethics and Policy Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "distributed-systems-201-l07-a1",
          "type": "image",
          "title": "Ethical Framework",
          "content": "A diagram showing the intersection of Technical Reliability, Policy Compliance, and Stakeholder Trust."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "We will identify how the impacts of system decisions are distributed among different groups of people. It is important to understand where benefits and burdens may differ, as this knowledge guides us in making fair and equitable choices.",
          "visualPrompt": "A diagram with a central decision point, with lines radiating out to different stakeholder icons (e.g., 'End User,' 'Operator,' 'Regulator') showing positive and negative impacts."
        },
        {
          "id": "distributed-systems-201-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "To ensure accountability, it is essential to have clear pathways for tracing decisions back to their origins. This includes establishing rights for review and setting standards for fixing problems, creating a more transparent and responsible environment.",
          "visualPrompt": "A flowchart illustrating a decision's lifecycle: from proposal, through approval, to post-implementation review and remediation."
        },
        {
          "id": "distributed-systems-201-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "We will use a final checklist to ensure we are acting responsibly. This checklist helps combine key elements: policies we must follow, ethical considerations, technical reliability, and the trust of all stakeholders. This ensures our decisions are both effective and fair.",
          "visualPrompt": "A simple checklist graphic with items like 'Fairness Assessed,' 'Policy Compliant,' and 'Traceability Ensured' being checked off."
        }
      ],
      "flashcards": [
        {
          "id": "distributed-systems-201-l07-f1",
          "front": "Impact Distribution",
          "back": "The way in which the benefits and harms of a system's operation are allocated across different stakeholder groups."
        },
        {
          "id": "distributed-systems-201-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to explain why a decision was made, by whom, and based on what evidence."
        },
        {
          "id": "distributed-systems-201-l07-f3",
          "front": "Responsible Execution",
          "back": "A mode of delivery that combines technical effectiveness, fairness to stakeholders, and the capacity to correct harms."
        }
      ]
    },
    {
      "id": "distributed-systems-201-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "distributed-systems-201-l08-a1",
          "type": "document",
          "title": "Capstone Charter Template",
          "content": "A fillable document with sections for Project Scope, Success Metrics, Constraints, Risks, and Governance Plan."
        }
      ],
      "chunks": [
        {
          "id": "distributed-systems-201-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter Drafting",
          "content": "You will work with a team to draft a detailed charter for your capstone project. This document will define the project's scope, constraints, success metrics, and governance checkpoints, ensuring everyone is aligned on the goals and process.",
          "visualPrompt": "An animation of a document being collaboratively edited by multiple users in real-time."
        },
        {
          "id": "distributed-systems-201-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "As we prepare for the final project, it is crucial to be ready to defend your work. This means gathering strong evidence to support your decisions and preparing thoughtful responses to critical feedback, building confidence in your project and its outcomes.",
          "visualPrompt": "An icon of a shield, representing the evidence and reasoning that defend a project's conclusions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "distributed-systems-201-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a capstone charter with measurable objectives, risks, and remediation plans.",
          "instructions": [
            "State your primary objective and key boundary conditions.",
            "Define at least three measurable success indicators (e.g., reduce p99 latency by 10%).",
            "Document a governance escalation pathway for critical failures or unexpected results."
          ]
        },
        {
          "id": "distributed-systems-201-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone approach against critiques from different perspectives.",
          "instructions": [
            "Prepare a 2-minute summary of your proposed solution and its expected impact.",
            "Respond to a technical critique about your system's scalability.",
            "Respond to a policy critique about data privacy.",
            "Respond to a stakeholder critique about user experience."
          ]
        }
      ]
    }
  ]
};
