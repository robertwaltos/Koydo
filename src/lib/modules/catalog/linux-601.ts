import type { LearningModule } from "@/lib/modules/types";

export const linux_601_Module: LearningModule = {
  "id": "linux-601",
  "title": "Linux Research and Leadership",
  "description": "A specialization for advanced Linux professionals. This module covers systems diagnostics, operational design, impact analysis, and governance through complex case studies, interactive simulations, and a capstone defense.",
  "subject": "Linux",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "linux",
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
    "Apply advanced diagnostic methods to Linux systems in high-pressure environments.",
    "Design robust, automated operational workflows with clear control gates and monitoring.",
    "Evaluate the impact and tradeoffs of system changes with research-grade rigor.",
    "Develop and implement accountable governance structures and escalation pathways for Linux systems.",
    "Lead technical reviews, clearly communicating tradeoffs between competing solutions.",
    "Defend system architecture and operational recommendations against expert critique using evidence-based reasoning."
  ],
  "lessons": [
    {
      "id": "linux-601-l01",
      "title": "Advanced Linux Foundations",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "linux-601-l01-a1",
          "type": "diagram",
          "title": "Linux System Layers",
          "content": "A diagram illustrating the boundaries between hardware, kernel space, and user space, including key subsystems like memory management, process scheduling, and the virtual file system."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Boundaries",
          "content": "To diagnose complex systems, you must first define their boundaries. We'll explore key Linux boundaries like kernel vs. user space, process isolation using namespaces, and resource limits with cgroups. Understanding these concepts is critical for isolating problems and designing stable systems."
        },
        {
          "id": "linux-601-l01-c2",
          "kind": "concept",
          "title": "Root Cause Analysis and Modeling",
          "content": "Effective problem-solving goes beyond fixing symptoms. This section introduces structured methods for root cause analysis. You will learn to map causal pathways between events, identify system dependencies, and model uncertainty to predict how interventions will affect a complex system."
        },
        {
          "id": "linux-601-l01-c3",
          "kind": "recap",
          "title": "Metrics-Driven Analysis",
          "content": "In this recap, we'll establish the principle that all claims must be supported by measurable evidence. We will review how to gather metrics from sources like `procfs` and `sysfs`, set confidence bounds for your findings, and establish review checkpoints to ensure analysis is verifiable and rigorous."
        }
      ],
      "flashcards": [
        {
          "id": "linux-601-l01-f1",
          "front": "What is Linux systems diagnostics?",
          "back": "The discipline of identifying and resolving issues in Linux systems by forming hypotheses, gathering evidence, and testing solutions."
        },
        {
          "id": "linux-601-l01-f2",
          "front": "What is operational design?",
          "back": "The process of creating reliable and repeatable workflows for managing Linux systems, including automation, monitoring, and alerting."
        },
        {
          "id": "linux-601-l01-f3",
          "front": "What is tradeoff analysis?",
          "back": "The practice of evaluating decisions by comparing their potential benefits against their costs, risks, and side effects."
        }
      ]
    },
    {
      "id": "linux-601-l02",
      "title": "Linux Systems Analysis Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "linux-601-l02-a1",
          "type": "code_snippet",
          "title": "Stress Test Example",
          "content": "A sample script using 'stress-ng' to simulate high CPU and I/O load, allowing you to observe system behavior under pressure and test your diagnostic tools."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l02-c1",
          "kind": "practice",
          "title": "Workflow Design and Stress Testing",
          "content": "In this lab, you'll design a diagnostic workflow using standard Linux tools. Then, you'll use stress-testing utilities to simulate adverse conditions like memory leaks or I/O bottlenecks, and use your workflow to identify the root cause."
        },
        {
          "id": "linux-601-l02-c2",
          "kind": "recap",
          "title": "Automated Monitoring and Alerting",
          "content": "A recap on building robust systems. We'll discuss how to integrate checkpoints into your workflows using monitoring tools. You will learn to define alert thresholds, establish criteria for automated rollbacks, and design escalation processes for when human intervention is needed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control to Outcome Mapping",
          "description": "Match the system control with its primary reliability and governance effect.",
          "pairs": [
            {
              "left": "Automated Pre-deployment Test",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Automated Rollback on Error Threshold",
              "right": "Limits the impact of a failure"
            },
            {
              "left": "Performance Monitoring Dashboard",
              "right": "Provides evidence for impact analysis"
            },
            {
              "left": "Post-Incident Review Process",
              "right": "Improves future decision-making"
            }
          ]
        }
      ]
    },
    {
      "id": "linux-601-l03",
      "title": "Checkpoint 1: Systems Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "linux-601-l03-q1",
          "text": "You are diagnosing a slow web server. What is the most effective first step according to metrics-driven principles?",
          "skillId": "linux-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately restart the server."
            },
            {
              "id": "b",
              "text": "Establish a performance baseline by measuring key metrics (CPU, memory, I/O, network)."
            },
            {
              "id": "c",
              "text": "Guess the problem is the database and optimize it."
            },
            {
              "id": "d",
              "text": "Ask a colleague for their opinion without gathering data."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective diagnostics start with establishing a baseline of measurable indicators to understand normal behavior and identify anomalies."
        },
        {
          "id": "linux-601-l03-q2",
          "text": "A robust operational plan for deploying a critical patch should always include:",
          "skillId": "linux-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "A detailed rollback procedure and success verification metrics."
            },
            {
              "id": "b",
              "text": "Deployment during peak business hours to ensure it works under load."
            },
            {
              "id": "c",
              "text": "No pre-deployment testing to save time."
            },
            {
              "id": "d",
              "text": "Assigning the task to a junior admin with no supervision."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires a plan for both success and failure, including how to verify the change and how to revert it if necessary."
        },
        {
          "id": "linux-601-l03-q3",
          "text": "When presenting an analysis of a performance improvement, what is the most defensible approach?",
          "skillId": "linux-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Show only the final, improved performance numbers."
            },
            {
              "id": "b",
              "text": "Compare before-and-after metrics, note any side effects, and state the confidence level of the results."
            },
            {
              "id": "c",
              "text": "Claim a 100% improvement without providing any data."
            },
            {
              "id": "d",
              "text": "Attribute the improvement to your change, even if other changes were made at the same time."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis is transparent, providing a baseline for comparison, acknowledging potential side effects, and qualifying the certainty of the findings."
        },
        {
          "id": "linux-601-l03-q4",
          "text": "A mature governance system for managing system configurations (e.g., using Ansible or Puppet) must connect:",
          "skillId": "linux-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The policy (e.g., 'all servers must have security patches'), the control (the script that applies patches), and the remediation plan (what to do if a server is out of compliance)."
            },
            {
              "id": "b",
              "text": "A written policy with no automated way to enforce it."
            },
            {
              "id": "c",
              "text": "A script that runs occasionally but with no alerting for failures."
            },
            {
              "id": "d",
              "text": "Allowing any administrator to make undocumented changes directly on servers."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links the intended policy, the technical controls that enforce it, and a clear process for handling exceptions and failures."
        }
      ]
    },
    {
      "id": "linux-601-l04",
      "title": "Advanced Linux Case Studies",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "linux-601-l04-a1",
          "type": "image",
          "title": "Sample Root Cause Analysis (RCA)",
          "content": "An image of a well-structured RCA document, highlighting key sections like the timeline, root cause, impact, and corrective actions."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l04-c1",
          "kind": "concept",
          "title": "Deconstructing a System Failure",
          "content": "In this lesson, we will analyze a real-world case study of a major system outage. We will deconstruct the incident report to identify the competing constraints (e.g., performance vs. reliability), the key decision points, and the ultimate impact of the choices made by the engineering team."
        },
        {
          "id": "linux-601-l04-c2",
          "kind": "practice",
          "title": "Framing Technical Tradeoffs",
          "content": "Using the case study, you will practice framing the technical tradeoffs involved. We will compare options based on concrete dimensions like latency vs. throughput, security vs. usability, and cost vs. resilience. This helps you articulate the reasoning behind complex technical decisions."
        },
        {
          "id": "linux-601-l04-c3",
          "kind": "recap",
          "title": "Writing a Root Cause Analysis (RCA)",
          "content": "We'll recap the lesson by introducing a standard industry pattern for documenting incidents: the Root Cause Analysis (RCA). A strong RCA includes a clear timeline, states assumptions, provides supporting evidence, outlines corrective actions, and includes a plan to prevent recurrence."
        }
      ]
    },
    {
      "id": "linux-601-l05",
      "title": "Linux Incident Response Simulation",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "linux-601-l05-a1",
          "type": "diagram",
          "title": "Incident Response Flowchart",
          "content": "A flowchart showing the stages of incident response: Detection, Analysis, Containment, Eradication, Recovery, and Post-Incident Review."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l05-c1",
          "kind": "practice",
          "title": "Live Incident Simulation",
          "content": "In this interactive clinic, you'll be dropped into a simulated environment where a critical system is failing. Under time pressure, you must use diagnostic tools like `top`, `iostat`, and `strace` to identify the problem while managing performance and stability constraints."
        },
        {
          "id": "linux-601-l05-c2",
          "kind": "recap",
          "title": "Developing an Incident Response Plan",
          "content": "After the simulation, we'll discuss how to build an adaptive incident response plan. An effective plan isn't just a static checklist; it's a living document that helps you make decisions, track actions, and maintain accountability, even as new information emerges during an incident."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-601-l05-act1",
          "type": "scenario",
          "title": "Live Incident Simulation",
          "description": "A web application is experiencing intermittent timeouts. Your goal is to diagnose the root cause and apply a fix in a simulated production environment before the service-level objective (SLO) is breached."
        }
      ]
    },
    {
      "id": "linux-601-l06",
      "title": "Checkpoint 2: Incident Management",
      "type": "quiz",
      "duration": 11,
      "learningAids": [],
      "questions": [
        {
          "id": "linux-601-l06-q1",
          "text": "In a post-incident review, what is the primary goal?",
          "skillId": "linux-601-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "To assign blame to the person who made the error."
            },
            {
              "id": "b",
              "text": "To identify systemic causes and define preventative actions."
            },
            {
              "id": "c",
              "text": "To close the issue as quickly as possible."
            },
            {
              "id": "d",
              "text": "To prove that the monitoring system worked perfectly."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of a blameless post-mortem is to learn from the incident and improve the system, not to punish individuals."
        },
        {
          "id": "linux-601-l06-q2",
          "text": "During a live incident, you discover the initial hypothesis is wrong. What is the most resilient response?",
          "skillId": "linux-601-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "Continue with the original plan, hoping it will eventually work."
            },
            {
              "id": "b",
              "text": "Announce the new findings, pivot to a new hypothesis, and document the change in the incident log."
            },
            {
              "id": "c",
              "text": "Stop working on the incident and wait for someone else to solve it."
            },
            {
              "id": "d",
              "text": "Silently change direction without informing the team."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Resilience during an incident requires adapting to new information and maintaining clear communication with the team."
        },
        {
          "id": "linux-601-l06-q3",
          "text": "When evaluating a proposed fix, what tradeoff is most important to consider?",
          "skillId": "linux-601-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "Only how quickly the fix can be deployed."
            },
            {
              "id": "b",
              "text": "The risk of the fix causing a new, potentially worse problem versus the benefit of resolving the current issue."
            },
            {
              "id": "c",
              "text": "Whether the fix is elegant from a coding perspective."
            },
            {
              "id": "d",
              "text": "Who gets credit for the fix."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires analyzing the potential negative side effects (the cure being worse than the disease) of any intervention."
        },
        {
          "id": "linux-601-l06-q4",
          "text": "Strong incident management governance is demonstrated by:",
          "skillId": "linux-601-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Having clear roles (e.g., Incident Commander), a documented process, and a commitment to follow-up actions."
            },
            {
              "id": "b",
              "text": "An informal process where the most senior person always takes charge."
            },
            {
              "id": "c",
              "text": "Never documenting incidents to avoid creating a paper trail."
            },
            {
              "id": "d",
              "text": "Solving every incident with a full system reboot."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance provides structure through defined roles and processes, ensuring incidents are managed consistently and improvements are implemented."
        }
      ]
    },
    {
      "id": "linux-601-l07",
      "title": "Linux Governance and System Ethics",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "linux-601-l07-a1",
          "type": "flowchart",
          "title": "Change Management Process",
          "content": "A flowchart illustrating a formal change management process: Proposal -> Technical Review -> Approval -> Implementation -> Verification."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l07-c1",
          "kind": "concept",
          "title": "Analyzing Stakeholder Impact",
          "content": "Technical decisions have human consequences. In this lesson, we'll analyze how a system change—like a new security policy or a kernel update—distributes benefits and burdens across different groups of users, and consider the long-term ethical implications."
        },
        {
          "id": "linux-601-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Accountability isn't an accident; it's a feature you design. We will explore how to build accountable systems using tools and processes like version control for configurations (GitOps), comprehensive audit logs (`auditd`), and formal change management procedures."
        },
        {
          "id": "linux-601-l07-c3",
          "kind": "recap",
          "title": "Responsible Leadership Checklist",
          "content": "We'll conclude with a checklist for responsible technical leadership. This guide connects key outcomes with ethical duties, policy compliance, and system resilience, helping you make decisions that are not just technically sound, but also responsible."
        }
      ],
      "flashcards": [
        {
          "id": "linux-601-l07-f1",
          "front": "Stakeholder Impact",
          "back": "The effects, both positive and negative, that a system or decision has on different groups of people over time."
        },
        {
          "id": "linux-601-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record showing who made a decision, when, and based on what evidence and rationale."
        },
        {
          "id": "linux-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Making decisions that balance technical performance with accountability, fairness, and ethical considerations."
        }
      ]
    },
    {
      "id": "linux-601-l08",
      "title": "Capstone: System Design Defense",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "linux-601-l08-a1",
          "type": "document_template",
          "title": "System Design Document",
          "content": "A template for a system design document, with sections for requirements, proposed architecture, tradeoff analysis, and risk mitigation."
        }
      ],
      "chunks": [
        {
          "id": "linux-601-l08-c1",
          "kind": "practice",
          "title": "Assembling the Design Brief",
          "content": "In this final lab, you will be given a complex technical challenge, such as designing a highly available, scalable web service. Your task is to prepare a system design document that presents your solution, justifies your architectural choices, and analyzes the tradeoffs."
        },
        {
          "id": "linux-601-l08-c2",
          "kind": "recap",
          "title": "Preparing for a Technical Design Review",
          "content": "We'll conclude by rehearsing for a technical design review. You will practice presenting your design and responding to critical questions from a panel of experts representing technology, governance, and business stakeholders. This prepares you to defend your work in a real-world setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Design Review Panel",
          "description": "Present your capstone system design to a simulated panel of senior engineers. Defend your architectural decisions, cost estimates, and risk assessments under adversarial cross-examination."
        }
      ]
    }
  ]
};
