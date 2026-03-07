import type { LearningModule } from "@/lib/modules/types";

export const linux_401_Module: LearningModule = {
  "id": "linux-401",
  "title": "Linux Platform Strategy, SRE Governance, and Fleet Operations",
  "description": "Expert-level Linux curriculum on fleet architecture, platform governance, reliability economics, supply-chain trust, and board-level operating strategy for mission-critical environments.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "linux",
    "governance",
    "sre",
    "platform"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design Linux platform operating models for scale, reliability, and organizational clarity",
    "Govern fleet change risk through policy, rollout strategy, and measurable control gates",
    "Evaluate reliability investments using service impact and failure-cost economics",
    "Lead severe incident governance with clear decision rights and learning systems",
    "Build defensible Linux supply-chain and provenance controls",
    "Communicate multi-year platform roadmaps to technical and executive stakeholders"
  ],
  "lessons": [
    {
      "id": "linux-401-l01",
      "title": "Linux Platform Operating Models at Scale",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-401-l01-c1",
          "kind": "concept",
          "title": "Central Platform vs. Embedded Operations",
          "content": "Structuring Linux operations at scale involves a fundamental trade-off. Central platform teams achieve economies of scale, driving consistency, security, and compliance across the fleet. However, they can become bottlenecks. Embedded teams offer domain-specific expertise and faster response to business unit needs but risk creating operational silos and inconsistent standards. Hybrid models aim to balance these forces, but require explicit service contracts and decision boundaries to function effectively without creating governance gaps."
        },
        {
          "id": "linux-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights and Escalation Paths",
          "content": "Ambiguity in decision-making authority is a primary source of operational risk. For high-impact decisions like kernel upgrades, emergency patching, or architectural changes, a clear framework (e.g., a RACI matrix) is essential. This defines who is Responsible, Accountable, Consulted, and Informed. Without this clarity, incident response is delayed, and strategic changes stall, leading to preventable outages and technical debt accumulation."
        },
        {
          "id": "linux-401-l01-c3",
          "kind": "concept",
          "title": "Strategic Operating Cadence",
          "content": "Effective platform management relies on a structured, multi-layered review cadence. This includes weekly tactical risk reviews, monthly reliability and SLO performance analysis, and quarterly architectural and technical debt assessments. This rhythm ensures that operations shift from a reactive, incident-driven mode to a proactive, data-informed strategy, aligning engineering effort with long-term platform health and business objectives."
        }
      ],
      "flashcards": [
        {
          "id": "linux-401-l01-f1",
          "front": "Platform Operating Model",
          "back": "The structure of responsibilities, services, and governance for fleet operations, defining how teams interact to manage the platform."
        },
        {
          "id": "linux-401-l01-f2",
          "front": "Decision Rights",
          "back": "Explicitly defined authority to approve, reject, or escalate high-impact changes, often codified in a RACI matrix."
        },
        {
          "id": "linux-401-l01-f3",
          "front": "Service Contract",
          "back": "A formal agreement defining capabilities, SLAs, and ownership boundaries between platform providers and consumer teams."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l01-a1",
          "type": "image",
          "title": "Operating Model Comparison",
          "content": "A diagram contrasting centralized, federated, and hybrid Linux platform models, showing flows of authority and service delivery."
        }
      ]
    },
    {
      "id": "linux-401-l02",
      "title": "Fleet Risk Governance and Change Safety Lab",
      "type": "interactive",
      "duration": 18,
      "chunks": [
        {
          "id": "linux-401-l02-c1",
          "kind": "concept",
          "title": "Managing Change Blast Radius",
          "content": "In large fleets, minor configuration errors can trigger cascading failures with massive impact. Robust governance mitigates this risk through progressive delivery. Key practices include rigorous pre-flight validation, staged rollouts (e.g., canaries), continuous health monitoring against SLOs, and automated rollback triggers to contain failures before they affect the entire system."
        },
        {
          "id": "linux-401-l02-c2",
          "kind": "concept",
          "title": "Leading vs. Lagging Indicators",
          "content": "Effective governance relies on proactive signals. Lagging indicators, like the number of major incidents last quarter, report past failures. Leading indicators, such as configuration drift rates or canary deployment failure rates, predict future risk. A mature SRE practice focuses on monitoring leading indicators to enable corrective action before a service-impacting event occurs."
        },
        {
          "id": "linux-401-l02-c3",
          "kind": "practice",
          "title": "The Policy Lifecycle",
          "content": "A change policy must be a living document. Its lifecycle includes proposal, simulation, approval, phased rollout, monitoring, and eventual retirement. High-risk changes demand a clear owner, supporting evidence (e.g., test results), and a pre-defined rollback plan. This structured process ensures accountability and creates an auditable record of risk management decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match governance controls to the risks they mitigate.",
          "pairs": [
            {
              "left": "Canary rollout",
              "right": "Limits initial impact to small host subset"
            },
            {
              "left": "Automated health gate",
              "right": "Blocks promotion when service SLO degrades"
            },
            {
              "left": "Immutable baseline policy",
              "right": "Reduces drift and unauthorized host variance"
            },
            {
              "left": "Rollback trigger threshold",
              "right": "Defines immediate reversion condition"
            }
          ]
        },
        {
          "id": "linux-401-l02-act2",
          "type": "scenario_practice",
          "title": "Kernel Patch Incident Exercise",
          "description": "Contain fleet instability caused by a bad patch rollout.",
          "instructions": [
            "Select the first containment action with the lowest systemic risk.",
            "Define one governance update to prevent recurrence."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric should gate fleet rollout progression?",
          "How do you choose canary population composition?",
          "What evidence must be captured after high-risk changes?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l02-a1",
          "type": "practice",
          "title": "Fleet Change Worksheet",
          "content": "Template for defining change scope, canary plan, health gates, rollback triggers, and required approver evidence."
        }
      ]
    },
    {
      "id": "linux-401-l03",
      "title": "Checkpoint 1: Governance and Fleet Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "linux-401-l03-q1",
          "text": "Why are staged rollouts critical in Linux fleet operations?",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "They increase blast radius quickly"
            },
            {
              "id": "b",
              "text": "They expose failures early before global impact"
            },
            {
              "id": "c",
              "text": "They remove the need for monitoring"
            },
            {
              "id": "d",
              "text": "They replace rollback design"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging limits exposure to a small subset of the fleet, allowing for controlled validation and early detection of issues."
        },
        {
          "id": "linux-401-l03-q2",
          "text": "The most common governance failure during severe incidents is:",
          "skillId": "linux-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear escalation ownership"
            },
            {
              "id": "b",
              "text": "Ambiguous authority and delayed containment"
            },
            {
              "id": "c",
              "text": "Frequent situation reports"
            },
            {
              "id": "d",
              "text": "Predefined rollback criteria"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear decision rights are a primary contributor to prolonged outage duration and increased business impact."
        },
        {
          "id": "linux-401-l03-q3",
          "text": "What is the strongest value of an immutable baseline policy?",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "It prevents all incidents permanently"
            },
            {
              "id": "b",
              "text": "It reduces configuration drift and improves predictability"
            },
            {
              "id": "c",
              "text": "It eliminates the need for documentation"
            },
            {
              "id": "d",
              "text": "It makes patching unnecessary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Drift reduction is central to fleet reliability and security posture, ensuring hosts behave as expected."
        },
        {
          "id": "linux-401-l03-q4",
          "text": "A credible high-risk change record must include:",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only the final success claim"
            },
            {
              "id": "b",
              "text": "Intent, validation evidence, approver, and rollback conditions"
            },
            {
              "id": "c",
              "text": "No owner assignment"
            },
            {
              "id": "d",
              "text": "Untracked chat notes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured evidence enables accountability, auditability, and repeatable learning from both successes and failures."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l03-a1",
          "type": "mnemonic",
          "title": "GATE",
          "content": "A mnemonic for safe change: Goal (what is the intent?), Approval (who signed off?), Thresholds (what are the rollback conditions?), Evidence (what data supports this?)."
        }
      ]
    },
    {
      "id": "linux-401-l04",
      "title": "Reliability Economics and Platform Portfolio Strategy",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "linux-401-l04-c1",
          "kind": "concept",
          "title": "Framing Reliability in Terms of Failure Cost",
          "content": "Platform instability incurs direct business costs: lost revenue, SLA penalties, reputational damage, and decreased engineering productivity. Instead of chasing arbitrary reliability targets or adopting new tools, investment decisions should be framed by the 'Cost of Downtime.' This economic lens focuses engineering effort on mitigating the most expensive and probable failure modes."
        },
        {
          "id": "linux-401-l04-c2",
          "kind": "concept",
          "title": "Error Budgets as a Financial Instrument",
          "content": "Service Level Objectives (SLOs) define a target level of reliability. The allowable margin of error is the 'error budget.' This budget is not just a technical metric; it's a financial one. It represents an acceptable level of risk and customer impact. Spending the budget allows for innovation and rapid releases, while exhausting it signals a required shift in focus to reliability work, directly linking engineering priorities to business risk."
        },
        {
          "id": "linux-401-l04-c3",
          "kind": "concept",
          "title": "Portfolio Prioritization",
          "content": "A platform team's work is a portfolio of risk-reduction investments. Initiatives should be prioritized based on dependency centrality (how many critical services rely on this component?), incident history, mitigation confidence, and business impact. Foundational platform improvements often yield a higher return on investment (ROI) than isolated, feature-level optimizations by reducing systemic risk across many services."
        },
        {
          "id": "linux-401-l04-c4",
          "kind": "example",
          "title": "Executive Recommendation Pattern",
          "content": "A strong recommendation connects engineering action to a measurable business outcome. For example: 'By investing in an automated configuration baseline enforcement system, we project a 35% reduction in P1 incidents over two quarters, contingent on 100% fleet enrollment. This will reclaim an estimated 500 engineering hours per month currently spent on manual remediation.'"
        }
      ],
      "flashcards": [
        {
          "id": "linux-401-l04-f1",
          "front": "Reliability ROI",
          "back": "The expected reduction in outage-related costs per unit of engineering investment."
        },
        {
          "id": "linux-401-l04-f2",
          "front": "Dependency Centrality",
          "back": "The degree to which critical business services rely on a specific platform component, indicating its systemic importance."
        },
        {
          "id": "linux-401-l04-f3",
          "front": "Error Budget",
          "back": "The quantifiable amount of unreliability (100% - SLO) tolerated over a period, used to balance innovation speed with stability."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l04-a1",
          "type": "image",
          "title": "Risk-Reduction Portfolio Matrix",
          "content": "A 2x2 matrix plotting platform initiatives by their systemic impact (y-axis) versus implementation effort (x-axis) to identify high-value projects."
        }
      ]
    },
    {
      "id": "linux-401-l05",
      "title": "Supply Chain Trust and Provenance Assurance Lab",
      "type": "interactive",
      "duration": 18,
      "chunks": [
        {
          "id": "linux-401-l05-c1",
          "kind": "concept",
          "title": "Defining Trust Boundaries",
          "content": "Securing a Linux fleet requires a defense-in-depth approach to the software supply chain. Trust cannot be assumed at any stage. This involves verifying upstream package origins, securing the build pipeline, cryptographically signing all artifacts, and generating a Software Bill of Materials (SBOM) for dependency transparency. Each stage represents a critical control boundary."
        },
        {
          "id": "linux-401-l05-c2",
          "kind": "concept",
          "title": "Attestations and Policy Enforcement",
          "content": "Provenance is established through attestations—verifiable, signed metadata that asserts facts about how an artifact was produced (e.g., 'built by CI system X from source commit Y'). These attestations are then consumed by policy engines at deployment time. An admission controller can block any artifact that lacks the required attestations, creating an automated, evidence-based trust gate."
        },
        {
          "id": "linux-401-l05-c3",
          "kind": "practice",
          "title": "The Verification Workflow",
          "content": "A robust workflow codifies trust verification. This includes documented checks for upstream source integrity, signals of build reproducibility (hermetic builds), and release approval controls. The goal is to make the secure path the easiest path, integrating these checks directly into the CI/CD pipeline to provide fast, automated feedback to developers."
        }
      ],
      "interactiveActivities": [
        {
          "id": "linux-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Control Classification",
          "description": "Sort controls by where they apply in the supply-chain defense model.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Signed upstream source verification",
              "bucket": "Source"
            },
            {
              "text": "Artifact signature and attestations",
              "bucket": "Build"
            },
            {
              "text": "Admission policy gate in deployment pipeline",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency allowlist maintenance",
              "bucket": "Source"
            },
            {
              "text": "SBOM generation",
              "bucket": "Build"
            }
          ]
        },
        {
          "id": "linux-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Package Simulation",
          "description": "Respond to a suspected package compromise in the production pipeline.",
          "instructions": [
            "Define the immediate containment action.",
            "Specify one permanent control improvement to prevent recurrence."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which supply-chain signal should automatically block a release?",
          "How do you balance release velocity against provenance strictness?",
          "What minimum evidence should auditors receive for platform releases?"
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Worksheet",
          "content": "A template for documenting source evidence, build attestations, deployment approvals, and exception tracking for a software release."
        }
      ]
    },
    {
      "id": "linux-401-l06",
      "title": "Checkpoint 2: Economics, Trust, and Strategy",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "linux-401-l06-q1",
          "text": "The best metric pairing for prioritizing Linux platform reliability investments is:",
          "skillId": "linux-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Host count and shell prompt style"
            },
            {
              "id": "b",
              "text": "Incident cost impact and dependency criticality"
            },
            {
              "id": "c",
              "text": "Number of package managers installed"
            },
            {
              "id": "d",
              "text": "Age of log files"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Business impact (cost) and systemic importance (centrality) are the strongest signals for prioritizing a portfolio of reliability work."
        },
        {
          "id": "linux-401-l06-q2",
          "text": "Why require artifact provenance checks before deployment?",
          "skillId": "linux-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To slow delivery with no security benefit"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted build outputs"
            },
            {
              "id": "c",
              "text": "To eliminate patch management"
            },
            {
              "id": "d",
              "text": "To avoid release documentation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance controls provide verifiable evidence of an artifact's origin and integrity, reducing software supply-chain compromise risk."
        },
        {
          "id": "linux-401-l06-q3",
          "text": "What makes an executive recommendation for a Linux platform credible?",
          "skillId": "linux-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Exclusive use of technical jargon"
            },
            {
              "id": "b",
              "text": "Measurable outcomes, assumptions, risks, and owner accountability"
            },
            {
              "id": "c",
              "text": "The longest possible incident timeline"
            },
            {
              "id": "d",
              "text": "No mention of trade-offs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Executives require decision-ready proposals that clearly state the expected business impact, associated risks, and accountability."
        },
        {
          "id": "linux-401-l06-q4",
          "text": "Leading indicators in fleet operations are useful because they:",
          "skillId": "linux-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only explain past outages"
            },
            {
              "id": "b",
              "text": "Enable corrective action before major incidents occur"
            },
            {
              "id": "c",
              "text": "Replace all lagging indicators"
            },
            {
              "id": "d",
              "text": "Remove the need for SLOs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early warning signals like configuration drift allow for proactive risk reduction, preventing incidents rather than just reacting to them."
        },
        {
          "id": "linux-401-l06-q5",
          "text": "During severe fleet incidents, explicit decision rights primarily improve:",
          "skillId": "linux-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Delay and ambiguity"
            },
            {
              "id": "b",
              "text": "Containment speed and coordination clarity"
            },
            {
              "id": "c",
              "text": "The volume of speculation"
            },
            {
              "id": "d",
              "text": "The need for communication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority reduces response latency and confusion in high-pressure events, leading to faster and more effective containment."
        }
      ],
      "learningAids": [
        {
          "id": "linux-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "A framework for strategic proposals: Context (the problem), Levers (the proposed solution), Economics (the business case), Accountability (ownership), Risk (what could go wrong?)."
        }
      ]
    },
    {
      "id": "linux-401-l07",
      "title": "Capstone: Linux Platform Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "linux-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Synthesize the concepts from this course to develop a two-year strategic proposal for transforming a large-scale Linux platform. Your proposal must address fleet governance, reliability engineering, and supply chain trust. You will define a multi-quarter roadmap with key milestones, resource estimates, and success metrics. This is a practical exercise in executive communication and strategic platform leadership."
        },
        {
          "id": "linux-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "A successful proposal will be evaluated on its ability to: clearly connect engineering initiatives to business outcomes; provide quantifiable, data-driven improvement targets; assign clear ownership for risks and deliverables; and establish a realistic, quarterly review cadence. The proposal must be both technically sound and strategically compelling to a non-technical executive audience."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives and their expected impact metrics.",
          "Identify the top three execution risks and their mitigation owners.",
          "Define one executive KPI and one engineering KPI for each initiative."
        ]
      },
      "learningAids": [
        {
          "id": "linux-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Framework",
          "content": "A one-page template for structuring your proposal, covering: Problem Statement, Proposed Options, Recommendation, Economic Impact, Risk Mitigation Plan, and Milestone Roadmap."
        }
      ]
    }
  ]
};
