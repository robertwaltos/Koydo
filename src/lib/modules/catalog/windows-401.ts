import type { LearningModule } from "@/lib/modules/types";

export const windows_401_Module: LearningModule = {
  "id": "windows-401",
  "title": "Windows Platform Strategy, Governance, and Enterprise Resilience",
  "description": "Expert-level Windows platform curriculum on operating model design, fleet governance, reliability economics, supply-chain trust, and executive-level transformation planning.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "windows",
    "governance",
    "strategy",
    "enterprise"
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
    "Design Windows platform operating models aligned with business, security, and reliability goals",
    "Govern fleet release risk with staged rollout policy and measurable quality gates",
    "Evaluate endpoint investments using outage-cost and productivity-impact economics",
    "Lead severe endpoint incident command with explicit decision rights",
    "Build software provenance and release assurance controls for endpoint trust",
    "Create multi-year Windows transformation roadmaps with clear KPI ownership"
  ],
  "lessons": [
    {
      "id": "windows-401-l01",
      "title": "Windows Platform Operating Models and Decision Rights",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-401-l01-c1",
          "kind": "concept",
          "title": "Ownership Model Trade-offs",
          "content": "When designing a strategy for managing enterprise computers (endpoints), finding the right balance between centralized authority and local team flexibility is critical. Centralized control ensures consistency, strict compliance, and standardized rules across the organization. Conversely, a federated model allows local teams to make autonomous decisions, enabling them to respond rapidly to specific departmental needs. To make a hybrid approach work effectively, strong governance frameworks and explicit guidelines must be established to dictate how and when decisions are made."
        },
        {
          "id": "windows-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights in High-Stakes Events",
          "content": "During major software updates, urgent zero-day security patches, or critical policy exceptions, clear decision-making guidelines are vital. If there is ambiguity about who holds the authority to approve or halt a rollout, it leads to operational paralysis and prolonged system vulnerabilities. Establishing predefined authority boundaries and escalation paths ensures that high-stakes issues are addressed decisively and effectively, minimizing potential downtime."
        },
        {
          "id": "windows-401-l01-c3",
          "kind": "recap",
          "title": "Operational Cadence",
          "content": "Successful endpoint management requires a regular schedule—or cadence—for assessing risks, verifying reliability, and ensuring compliance. For example, an enterprise might conduct automated risk assessments weekly, review fleet reliability and compliance scores monthly, and reassess strategic platform priorities quarterly. This consistent operational rhythm sustains high standards, prevents configuration drift, and ensures emerging issues are caught early."
        }
      ],
      "flashcards": [
        {
          "id": "windows-401-l01-f1",
          "front": "Operating model",
          "back": "Organizational design for ownership, service delivery, and governance."
        },
        {
          "id": "windows-401-l01-f2",
          "front": "Decision rights",
          "back": "Explicit authority for approvals, escalations, and emergency action."
        },
        {
          "id": "windows-401-l01-f3",
          "front": "Governance cadence",
          "back": "Recurring review cycle that sustains reliability and risk control."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l01-a1",
          "type": "image",
          "title": "Endpoint Operating Model Blueprint",
          "content": "[Visual Prompt: A flowchart contrasting Centralized (single node to many), Federated (multiple independent nodes), and Hybrid (central node with semi-autonomous sub-nodes) endpoint governance models.] Blueprint contrasting centralized, federated, and hybrid endpoint governance."
        }
      ]
    },
    {
      "id": "windows-401-l02",
      "title": "Fleet Release Governance and Safety Gates Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "windows-401-l02-c1",
          "kind": "concept",
          "title": "Blast Radius Management",
          "content": "Deploying changes across thousands of Windows devices can cause widespread outages if not carefully controlled. 'Blast radius' refers to the scope of impact if an update fails. To ensure safety, engineers implement a structured approach: sequencing changes in deployment rings (cohorts), setting automated health checkpoints (gates), defining strict rollback thresholds, and continuously monitoring system telemetry. This proactive containment strategy prevents localized defects from becoming global catastrophes."
        },
        {
          "id": "windows-401-l02-c2",
          "kind": "practice",
          "title": "Policy Lifecycle Governance",
          "content": "High-risk software releases require a structured lifecycle: propose, simulate, pilot, stage, and verify. Each phase acts as a filter. A change is first simulated in a lab, then piloted with a small 'canary' group of IT users, rolled out in stages to broader departments, and finally verified post-release. Each transition requires clear documentation, telemetry evidence, and explicit approval from designated owners to ensure accountability."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match governance controls to release risks they mitigate.",
          "pairs": [
            {
              "left": "Canary cohort",
              "right": "Limits early impact and reveals regressions"
            },
            {
              "left": "Crash-rate promotion gate",
              "right": "Prevents rollout when stability declines"
            },
            {
              "left": "Automated rollback threshold",
              "right": "Triggers rapid reversion under failure"
            },
            {
              "left": "Exception approval workflow",
              "right": "Prevents unmanaged policy bypass"
            }
          ]
        },
        {
          "id": "windows-401-l02-act2",
          "type": "scenario_practice",
          "title": "Major Rollout Incident Exercise",
          "description": "Contain a widespread endpoint issue caused by policy deployment defect.",
          "instructions": [
            "Choose first containment action and justify risk profile.",
            "Define one governance enhancement for future rollout."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which leading indicator should gate rollout promotion?",
          "How should pilot cohorts be selected to maximize detection quality?",
          "What evidence is mandatory before advancing to full fleet?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l02-a1",
          "type": "practice",
          "title": "Release Governance Worksheet",
          "content": "[Visual Prompt: A digital worksheet interface with sections for 'Rollout Rings', 'Gate Metrics', 'Rollback Conditions', and 'Sign-offs'.] Template for rollout rings, gate metrics, rollback conditions, and owner approvals."
        }
      ]
    },
    {
      "id": "windows-401-l03",
      "title": "Checkpoint 1: Governance and Release Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "windows-401-l03-q1",
          "text": "Why use canary cohorts for high-impact Windows changes?",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To accelerate global failure"
            },
            {
              "id": "b",
              "text": "To validate behavior before broad rollout"
            },
            {
              "id": "c",
              "text": "To avoid telemetry requirements"
            },
            {
              "id": "d",
              "text": "To remove rollback planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Canaries reduce exposure while testing real-world impact."
        },
        {
          "id": "windows-401-l03-q2",
          "text": "Most critical governance failure in severe incidents is:",
          "skillId": "windows-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear command ownership"
            },
            {
              "id": "b",
              "text": "Delayed decisions from unclear authority"
            },
            {
              "id": "c",
              "text": "Structured updates"
            },
            {
              "id": "d",
              "text": "Predefined rollback triggers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear authority increases outage duration and business impact."
        },
        {
          "id": "windows-401-l03-q3",
          "text": "A defensible release decision record should include:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only completion statement"
            },
            {
              "id": "b",
              "text": "Validation evidence, risk notes, owner, and rollback criteria"
            },
            {
              "id": "c",
              "text": "No versioned policy reference"
            },
            {
              "id": "d",
              "text": "Informal team chat summary"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Structured records support auditability and repeatable operations."
        },
        {
          "id": "windows-401-l03-q4",
          "text": "The primary value of exception registers is:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To hide unresolved risk"
            },
            {
              "id": "b",
              "text": "To track approved deviation with owner and expiry"
            },
            {
              "id": "c",
              "text": "To replace baseline policy"
            },
            {
              "id": "d",
              "text": "To remove review cadence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Exception governance prevents silent long-term control erosion."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l03-a1",
          "type": "mnemonic",
          "title": "GATE",
          "content": "[Visual Prompt: A stylized gate icon with the acronym G.A.T.E. spelled out on the pillars.] Goals, Approvals, Thresholds, Evidence."
        }
      ]
    },
    {
      "id": "windows-401-l04",
      "title": "Reliability Economics and Platform Portfolio Strategy",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "windows-401-l04-c1",
          "kind": "concept",
          "title": "Cost of Endpoint Failure",
          "content": "Endpoints—such as laptops, desktops, and tablets—are the primary tools employees use to drive business value. When these devices fail, it directly impacts the bottom line. A crashed device causes a ripple effect: lost employee productivity, increased IT support costs (helpdesk tickets), and potential damage to customer trust if client-facing operations are interrupted. Therefore, organizations must evaluate technology investments through an economic lens, weighing the upfront cost of reliability controls against the financial risk of widespread device failures."
        },
        {
          "id": "windows-401-l04-c2",
          "kind": "concept",
          "title": "Portfolio Prioritization",
          "content": "Organizations must prioritize IT initiatives based on business criticality, historical incident frequency, and mitigation confidence. Foundational controls—the core security and stability measures—often yield the highest long-term return on investment (ROI). By systematically evaluating which platform services support the most critical workflows, engineering teams can allocate their budget and effort toward projects that maximize enterprise resilience."
        },
        {
          "id": "windows-401-l04-c3",
          "kind": "example",
          "title": "Executive Framing",
          "content": "When presenting IT strategies to leadership, frame recommendations around measurable business outcomes rather than purely technical metrics. For instance, instead of saying 'We need to implement deployment rings,' state, 'By adopting health-gated rollouts, we project a 30% reduction in severe release incidents and a savings of 500 helpdesk hours over the next two quarters.' Quantifying the impact allows executives to grasp the ROI and make informed funding decisions."
        }
      ],
      "flashcards": [
        {
          "id": "windows-401-l04-f1",
          "front": "Reliability ROI",
          "back": "Expected outage or productivity-loss reduction per unit investment."
        },
        {
          "id": "windows-401-l04-f2",
          "front": "Dependency criticality",
          "back": "Measure of how many core workflows rely on a platform service."
        },
        {
          "id": "windows-401-l04-f3",
          "front": "Mitigation confidence",
          "back": "Estimated likelihood that planned control delivers intended impact."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l04-a1",
          "type": "image",
          "title": "Investment Prioritization Matrix",
          "content": "[Visual Prompt: A 2x2 matrix chart with 'Implementation Complexity' on the X-axis and 'Impact Potential' on the Y-axis, with dots representing different IT initiatives.] Matrix ranking endpoint initiatives by impact potential and implementation complexity."
        }
      ]
    },
    {
      "id": "windows-401-l05",
      "title": "Supply Chain Trust and Release Assurance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "windows-401-l05-c1",
          "kind": "concept",
          "title": "Endpoint Trust Boundaries",
          "content": "Securing endpoints requires strict trust boundaries to prevent supply chain attacks. This means verifying that software originates from trusted vendors, internal package pipelines are tightly controlled, all executables are cryptographically signed, and automated admission checks are passed before widespread deployment. These zero-trust principles ensure that compromised or tampered software cannot execute on the fleet."
        },
        {
          "id": "windows-401-l05-c2",
          "kind": "practice",
          "title": "Provenance Workflow",
          "content": "Software provenance is the verifiable history of a software build. A robust release assurance workflow validates the source code, confirms build attestations (proof that the build process wasn't tampered with), enforces peer approvals, and tracks any security exceptions with strict expiration dates. This structured approach guarantees that only high-integrity artifacts reach the end user."
        }
      ],
      "interactiveActivities": [
        {
          "id": "windows-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Provenance Control Sort",
          "description": "Sort trust controls by lifecycle stage.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Source signature verification",
              "bucket": "Source"
            },
            {
              "text": "Signed release package with attestations",
              "bucket": "Build"
            },
            {
              "text": "Deployment admission policy gate",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency allowlist governance",
              "bucket": "Source"
            }
          ]
        },
        {
          "id": "windows-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Artifact Drill",
          "description": "Respond to suspected package tampering in endpoint rollout pipeline.",
          "instructions": [
            "Define immediate containment action.",
            "Specify one governance improvement for future prevention."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which provenance signals should block deployment automatically?",
          "How do you balance release speed with assurance depth?",
          "What evidence should security and audit teams require each release?"
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Worksheet",
          "content": "[Visual Prompt: A checklist graphic showing a magnifying glass over code (Source), a factory (Build), a gateway (Deploy), and a clipboard (Exceptions).] Template for source checks, build evidence, deploy gating, and exception tracking."
        }
      ]
    },
    {
      "id": "windows-401-l06",
      "title": "Checkpoint 2: Strategy, Trust, and Governance",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "windows-401-l06-q1",
          "text": "Best metric pairing for endpoint reliability investment decisions is:",
          "skillId": "windows-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Desktop theme preference and app count"
            },
            {
              "id": "b",
              "text": "Incident impact cost and dependency criticality"
            },
            {
              "id": "c",
              "text": "Boot animation speed and icon density"
            },
            {
              "id": "d",
              "text": "Ticket subject keywords"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact and centrality indicate highest-value risk reduction opportunities."
        },
        {
          "id": "windows-401-l06-q2",
          "text": "Why enforce provenance controls before broad endpoint rollout?",
          "skillId": "windows-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To increase uncertainty"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted artifacts"
            },
            {
              "id": "c",
              "text": "To avoid patching"
            },
            {
              "id": "d",
              "text": "To remove change ownership"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance checks reduce supply-chain compromise risk."
        },
        {
          "id": "windows-401-l06-q3",
          "text": "A strong executive platform recommendation should include:",
          "skillId": "windows-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical depth"
            },
            {
              "id": "b",
              "text": "Outcome metrics, assumptions, risks, and owners"
            },
            {
              "id": "c",
              "text": "No uncertainty language"
            },
            {
              "id": "d",
              "text": "Unbounded roadmap promises"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality depends on quantified outcomes and transparent risk framing."
        },
        {
          "id": "windows-401-l06-q4",
          "text": "Leading indicators are valuable because they:",
          "skillId": "windows-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only explain past failures"
            },
            {
              "id": "b",
              "text": "Support proactive intervention before major incidents"
            },
            {
              "id": "c",
              "text": "Replace all lagging metrics"
            },
            {
              "id": "d",
              "text": "Eliminate need for review cadence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early signals enable corrective action while risk remains controllable."
        },
        {
          "id": "windows-401-l06-q5",
          "text": "During severe endpoint incidents, explicit decision rights primarily improve:",
          "skillId": "windows-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Delay and ambiguity"
            },
            {
              "id": "b",
              "text": "Containment speed and command clarity"
            },
            {
              "id": "c",
              "text": "Speculative debate"
            },
            {
              "id": "d",
              "text": "Need for evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority shortens response time and reduces coordination failures."
        }
      ],
      "learningAids": [
        {
          "id": "windows-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "[Visual Prompt: A magnifying glass focusing on the word CLEAR, breaking down into Context, Levers, Economics, Accountability, Risk.] Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "windows-401-l07",
      "title": "Capstone: Windows Endpoint Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "windows-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Your capstone project is to design a comprehensive, two-year Windows endpoint transformation proposal. You must balance competing priorities: security to protect sensitive data, reliability to ensure uptime, user productivity to enhance the employee experience, and operating costs to manage IT budgets effectively. Your proposal must include a governance structure defining decision rights, a portfolio of technical controls, and a detailed timeline with quarterly milestones to track progress and ensure executive alignment."
        },
        {
          "id": "windows-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "A high-quality proposal clearly defines measurable business outcomes, maps out technical dependency sequences, explicitly states any accepted risks, and assigns accountable owners for every stage of the project. This clarity ensures that all stakeholders—from engineering to the C-suite—understand their responsibilities and the strategic goals of the transformation."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives with quantified expected impact.",
          "Identify top three risks and assign owners.",
          "Define one executive and one engineering KPI for each initiative."
        ]
      },
      "learningAids": [
        {
          "id": "windows-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Framework",
          "content": "[Visual Prompt: A professional executive memo template with placeholders for Objective, Options, Recommendation, Economics, Controls, and Quarterly Milestones.] Template for objective, options, recommendation, economics, controls, and quarterly milestones."
        }
      ]
    }
  ]
};
