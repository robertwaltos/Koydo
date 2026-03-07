import type { LearningModule } from "@/lib/modules/types";

export const macos_401_Module: LearningModule = {
  "id": "macos-401",
  "title": "Apple Platform Strategy, Governance, and Enterprise Reliability",
  "description": "Expert-level macOS and Apple endpoint strategy curriculum focused on platform governance, fleet economics, supply-chain trust, severe incident leadership, and multi-year transformation planning.",
  "subject": "Operating Systems",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "macos",
    "governance",
    "enterprise",
    "strategy"
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
    "Design enterprise Apple platform operating models with clear ownership boundaries",
    "Govern fleet change risk with staged release policy and measurable quality gates",
    "Evaluate endpoint reliability investments using impact and cost-of-failure economics",
    "Lead cross-functional incident command during severe endpoint disruptions",
    "Implement trusted software provenance and release assurance controls",
    "Build executive-ready platform roadmaps with quarterly capability targets"
  ],
  "lessons": [
    {
      "id": "macos-401-l01",
      "title": "Enterprise Apple Platform Operating Models",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-401-l01-c1",
          "kind": "concept",
          "title": "Centralized vs. Federated Endpoint Ownership",
          "content": "Enterprise endpoint management requires a deliberate operating model. The primary models are centralized, where a single IT team governs the entire fleet for maximum standardization; federated, where business units manage their own endpoints for greater autonomy; and hybrid, which blends central governance with delegated execution. The choice involves trade-offs between consistency, speed, and responsiveness to specific business needs. \n\n[Visual: A diagram comparing Centralized, Federated, and Hybrid models across axes of 'Standardization' and 'Business Unit Autonomy']."
        },
        {
          "id": "macos-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights and Escalation",
          "content": "Effective governance hinges on clearly defined decision rights. Ambiguity in authority, especially for high-stakes actions like emergency patching or policy rollbacks, creates unacceptable delays during incidents. A formal framework, such as a RACI (Responsible, Accountable, Consulted, Informed) matrix, should map specific decisions to designated roles, ensuring clear ownership and predictable escalation paths. \n\n[Visual: A sample RACI chart for common endpoint management decisions like 'Approve OS Update' or 'Declare Severe Incident']."
        },
        {
          "id": "macos-401-l01-c3",
          "kind": "recap",
          "title": "Operating Rhythm",
          "content": "A consistent operating rhythm, or cadence, translates strategy into execution. This schedule of recurring meetings and reviews ensures continuous alignment and accountability. Key elements include weekly risk and change reviews, monthly reliability and compliance assessments, and quarterly strategic planning sessions to prioritize architectural improvements and address technical debt. \n\n[Visual: A timeline graphic illustrating a quarterly operating rhythm with weekly, monthly, and quarterly review milestones.]"
        }
      ],
      "flashcards": [
        {
          "id": "macos-401-l01-f1",
          "front": "Platform operating model",
          "back": "Structure of ownership, decision paths, and service boundaries for endpoint delivery."
        },
        {
          "id": "macos-401-l01-f2",
          "front": "Decision rights",
          "back": "Defined authority for approvals, exceptions, and emergency actions."
        },
        {
          "id": "macos-401-l01-f3",
          "front": "Operational cadence",
          "back": "Recurring review rhythm that keeps governance and execution aligned."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l01-a1",
          "type": "image",
          "title": "Endpoint Operating Model Comparison Matrix",
          "content": "Comparison matrix of centralized, federated, and hybrid endpoint models showing trade-offs."
        }
      ]
    },
    {
      "id": "macos-401-l02",
      "title": "Fleet Release Risk Governance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "macos-401-l02-c1",
          "kind": "concept",
          "title": "Release Blast Radius and Health Gates",
          "content": "Staged rollouts are a fundamental control to limit the 'blast radius' of a potential failure. By deploying changes to progressively larger cohorts (e.g., IT team, pilot users, 10% of fleet), we can validate stability against measurable health gates. These gates are telemetry-driven thresholds for metrics like crash rates or support ticket volume. If a gate is breached, automated triggers should halt the rollout or initiate a rollback. \n\n[Visual: A funnel diagram showing rollout rings from 'Ring 0: IT' to 'Ring 3: Full Fleet', with quality gates between each ring.]"
        },
        {
          "id": "macos-401-l02-c2",
          "kind": "practice",
          "title": "Policy Lifecycle Management",
          "content": "A robust policy lifecycle ensures that endpoint configurations are managed with the same rigor as production code. This lifecycle includes distinct stages: authoring against defined standards, validation via simulation, verification in a pilot deployment, staged production rollout with monitoring, an operational phase with performance tracking, and finally, a defined process for deprecation and retirement. \n\n[Visual: An infinity loop diagram illustrating the policy lifecycle: Author -> Test -> Pilot -> Deploy -> Monitor -> Retire/Revise.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match release controls to the risk they reduce.",
          "pairs": [
            {
              "left": "Pilot cohort gate",
              "right": "Detects compatibility regressions early"
            },
            {
              "left": "Crash-rate threshold",
              "right": "Blocks rollout when stability degrades"
            },
            {
              "left": "Automated rollback",
              "right": "Restores baseline when failure trigger is met"
            },
            {
              "left": "Exception approval workflow",
              "right": "Prevents unmanaged policy bypass"
            }
          ]
        },
        {
          "id": "macos-401-l02-act2",
          "type": "scenario_practice",
          "title": "Major Release Incident Simulation",
          "description": "Contain an enterprise endpoint outage caused by a policy release defect.",
          "instructions": [
            "Choose one immediate containment command decision.",
            "Define one governance change for future releases."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which metric is the best rollout promotion gate in your environment?",
          "How do you choose pilot populations to maximize detection value?",
          "What evidence should be mandatory before promoting to full fleet?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l02-a1",
          "type": "practice",
          "title": "Release Governance Worksheet",
          "content": "Template for rollout rings, health gates, stop conditions, and owner sign-off."
        }
      ]
    },
    {
      "id": "macos-401-l03",
      "title": "Checkpoint 1: Governance and Release Safety",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "macos-401-l03-q1",
          "text": "Why are staged fleet rollouts mandatory for high-impact endpoint changes?",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "They maximize immediate blast radius"
            },
            {
              "id": "b",
              "text": "They reveal defects before full organization impact"
            },
            {
              "id": "c",
              "text": "They remove need for telemetry"
            },
            {
              "id": "d",
              "text": "They eliminate rollback planning"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging reduces exposure and supports evidence-based promotion."
        },
        {
          "id": "macos-401-l03-q2",
          "text": "The most damaging governance gap during severe incidents is:",
          "skillId": "macos-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear decision authority"
            },
            {
              "id": "b",
              "text": "Ambiguous ownership and delayed command decisions"
            },
            {
              "id": "c",
              "text": "Structured incident updates"
            },
            {
              "id": "d",
              "text": "Defined rollback trigger"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear authority extends incident duration and user impact."
        },
        {
          "id": "macos-401-l03-q3",
          "text": "A high-trust release decision should include:",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only confidence statements"
            },
            {
              "id": "b",
              "text": "Validation evidence, risk notes, and rollback criteria"
            },
            {
              "id": "c",
              "text": "No documentation if rollout succeeds"
            },
            {
              "id": "d",
              "text": "Single-person verbal approval"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Evidence-backed decisions are auditable and repeatable."
        },
        {
          "id": "macos-401-l03-q4",
          "text": "What is the primary value of an endpoint exception register?",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Hide control gaps"
            },
            {
              "id": "b",
              "text": "Track risk acceptance with ownership and expiration"
            },
            {
              "id": "c",
              "text": "Remove compliance scope"
            },
            {
              "id": "d",
              "text": "Replace baseline policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Exception governance prevents unmanaged long-term risk accumulation."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l03-a1",
          "type": "mnemonic",
          "title": "RING",
          "content": "Risk, Indicators, Next gate, Governance evidence."
        }
      ]
    },
    {
      "id": "macos-401-l04",
      "title": "Reliability Economics and Portfolio Prioritization",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "macos-401-l04-c1",
          "kind": "concept",
          "title": "Cost of Endpoint Failure",
          "content": "Quantifying the cost of endpoint failure is essential for justifying reliability investments. These costs extend beyond direct IT support hours to include lost employee productivity, increased support ticket volume, engineering effort for incident response, and intangible costs like reputational damage. Framing investments in terms of 'cost of failure' reduction provides a powerful economic rationale. \n\n[Visual: An iceberg diagram where the 'tip' is 'IT Support Costs' and the submerged part includes 'Lost Productivity', 'Business Disruption', and 'Reputational Damage']."
        },
        {
          "id": "macos-401-l04-c2",
          "kind": "concept",
          "title": "A Portfolio Lens for Prioritization",
          "content": "Platform strategy requires a portfolio approach, balancing foundational stability with feature delivery. Initiatives should be evaluated through multiple lenses: dependency criticality, incident frequency and impact, user adoption friction, and mitigation confidence. Often, the highest value work involves strengthening core controls (e.g., deployment automation, monitoring) that enable all other features to be delivered more safely. \n\n[Visual: A 2x2 prioritization matrix with 'Business Impact' on the Y-axis and 'Implementation Effort' on the X-axis.]"
        },
        {
          "id": "macos-401-l04-c3",
          "kind": "example",
          "title": "Executive Framing",
          "content": "Strategic recommendations must be framed for an executive audience by translating technical initiatives into measurable business outcomes. For example: 'We recommend investing in automated release health gates. We project this will reduce P1/P2 release incidents by 30% within two quarters, saving an estimated 500 hours of lost productivity per incident.' This connects the 'what' to the 'so what' for decision-makers. \n\n[Visual: A template of a single slide for an executive recommendation, with sections for 'Problem', 'Proposed Solution', 'Expected Outcome (Metric)', and 'Required Investment']."
        }
      ],
      "flashcards": [
        {
          "id": "macos-401-l04-f1",
          "front": "Reliability ROI",
          "back": "Expected reduction in outage impact per unit of platform investment."
        },
        {
          "id": "macos-401-l04-f2",
          "front": "Dependency criticality",
          "back": "How central a platform service is to key business workflows."
        },
        {
          "id": "macos-401-l04-f3",
          "front": "Mitigation confidence",
          "back": "Confidence that a chosen control will achieve predicted outcomes."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l04-a1",
          "type": "image",
          "title": "Endpoint Investment Prioritization Matrix",
          "content": "Matrix ranking initiatives by risk reduction potential and delivery effort."
        }
      ]
    },
    {
      "id": "macos-401-l05",
      "title": "Supply Chain and Provenance Assurance Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "macos-401-l05-c1",
          "kind": "concept",
          "title": "Trust Boundaries in Endpoint Delivery",
          "content": "A trusted endpoint platform requires a secure software supply chain with explicit trust boundaries. Every stage—from upstream source code, to the internal build pipeline, to distribution and deployment—is a potential vector for compromise. Provenance assurance involves implementing controls at each boundary, such as code signing, dependency scanning, and deployment admission controllers, to verify artifact integrity and origin. \n\n[Visual: A linear diagram of the software supply chain (Source -> Build -> Package -> Distribute -> Deploy) with security control icons at each stage.]"
        },
        {
          "id": "macos-401-l05-c2",
          "kind": "practice",
          "title": "High-Assurance Release Workflow",
          "content": "A high-assurance release workflow makes trust auditable. Key components include: mandatory cryptographic signing of all artifacts, verifiable metadata linking a package to its source and build job, a formal approval log, and a strictly governed exception workflow with mandatory expiration dates. This creates an auditable chain of custody for every artifact. \n\n[Visual: A flowchart of a release workflow showing a package moving through 'Code Commit', 'Automated Build & Sign', 'Security Scan', 'Manager Approval', and 'Deploy' stages.]"
        }
      ],
      "interactiveActivities": [
        {
          "id": "macos-401-l05-act1",
          "type": "sorting_buckets",
          "title": "Provenance Control Sort",
          "description": "Sort controls by lifecycle stage.",
          "buckets": [
            "Source",
            "Build",
            "Deploy"
          ],
          "items": [
            {
              "text": "Upstream source verification",
              "bucket": "Source"
            },
            {
              "text": "Signed package and attestations",
              "bucket": "Build"
            },
            {
              "text": "Deployment admission gate",
              "bucket": "Deploy"
            },
            {
              "text": "Dependency trust policy",
              "bucket": "Source"
            }
          ]
        },
        {
          "id": "macos-401-l05-act2",
          "type": "scenario_practice",
          "title": "Compromised Package Response",
          "description": "Respond to suspected package tampering in release pipeline.",
          "instructions": [
            "Define first containment control.",
            "Specify one long-term governance improvement."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which release evidence should be mandatory for production promotion?",
          "How do you balance release speed with provenance assurance?",
          "What signal should trigger an immediate release freeze?"
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l05-a1",
          "type": "practice",
          "title": "Provenance Audit Template",
          "content": "Template for source checks, build evidence, deploy approval, and exception tracking."
        }
      ]
    },
    {
      "id": "macos-401-l06",
      "title": "Checkpoint 2: Strategy and Trust",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "macos-401-l06-q1",
          "text": "The best metric pair for prioritizing endpoint reliability programs is:",
          "skillId": "macos-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Wallpaper refresh rate and dock layout count"
            },
            {
              "id": "b",
              "text": "Incident impact cost and dependency criticality"
            },
            {
              "id": "c",
              "text": "App icon count and install speed"
            },
            {
              "id": "d",
              "text": "Number of support chats"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Impact and centrality provide the strongest investment signal."
        },
        {
          "id": "macos-401-l06-q2",
          "text": "Why enforce provenance checks before endpoint deployment?",
          "skillId": "macos-401-skill-supply-chain",
          "options": [
            {
              "id": "a",
              "text": "To increase release uncertainty"
            },
            {
              "id": "b",
              "text": "To reduce risk from tampered or untrusted artifacts"
            },
            {
              "id": "c",
              "text": "To disable patching"
            },
            {
              "id": "d",
              "text": "To remove compliance evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Provenance controls protect against software supply-chain compromise."
        },
        {
          "id": "macos-401-l06-q3",
          "text": "A credible executive platform recommendation includes:",
          "skillId": "macos-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical detail"
            },
            {
              "id": "b",
              "text": "Outcome metrics, assumptions, risks, and ownership"
            },
            {
              "id": "c",
              "text": "No uncertainty discussion"
            },
            {
              "id": "d",
              "text": "Unscoped roadmap promises"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality depends on measurable outcomes and transparent assumptions."
        },
        {
          "id": "macos-401-l06-q4",
          "text": "Leading indicators help endpoint strategy because they:",
          "skillId": "macos-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Only describe past incidents"
            },
            {
              "id": "b",
              "text": "Provide early warning for proactive corrections"
            },
            {
              "id": "c",
              "text": "Replace all outcome metrics"
            },
            {
              "id": "d",
              "text": "Eliminate need for policy review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Early signals enable risk mitigation before major failures."
        },
        {
          "id": "macos-401-l06-q5",
          "text": "In severe endpoint incidents, explicit decision rights improve:",
          "skillId": "macos-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Ambiguity and delay"
            },
            {
              "id": "b",
              "text": "Containment speed and command clarity"
            },
            {
              "id": "c",
              "text": "Speculation volume"
            },
            {
              "id": "d",
              "text": "Need for evidence"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clear authority reduces coordination latency."
        }
      ],
      "learningAids": [
        {
          "id": "macos-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "macos-401-l07",
      "title": "Capstone: Enterprise Apple Platform Transformation Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "macos-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "For your capstone project, you will develop a two-year strategic proposal for transforming an enterprise Apple platform. Your proposal must synthesize the concepts from this curriculum, presenting a balanced roadmap that enhances reliability, security, and user productivity while remaining cost-effective. The proposal must include a defined governance model, a portfolio of prioritized initiatives with clear controls, and a quarterly roadmap with measurable milestones."
        },
        {
          "id": "macos-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "Proposals will be assessed on their strategic clarity and operational feasibility. Key evaluation criteria include: the definition of measurable outcomes (KPIs), a logical sequencing of initiatives that respects dependencies, a transparent accounting of key risks and proposed mitigations, and clear assignment of ownership and accountability for each major milestone. The proposal should be presented as a formal document suitable for executive review. \n\n[Visual: A sample scoring rubric with criteria like 'Clarity of Objectives', 'Economic Rationale', 'Risk Management', and 'Roadmap Feasibility' rated on a 1-5 scale.]"
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives with projected impact.",
          "List top three risks and mitigation ownership.",
          "Define executive and engineering KPIs per initiative."
        ]
      },
      "learningAids": [
        {
          "id": "macos-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Template",
          "content": "Template for objective, options, recommendation, economics, controls, and milestones."
        }
      ]
    }
  ]
};
