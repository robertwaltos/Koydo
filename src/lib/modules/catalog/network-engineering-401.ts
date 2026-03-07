import type { LearningModule } from "@/lib/modules/types";

export const network_engineering_401_Module: LearningModule = {
  "id": "network-engineering-401",
  "title": "Network Strategy, Governance, and Internet-Scale Operations",
  "description": "Expert-level network engineering on platform strategy, internet-scale resilience, routing risk governance, SRE-style reliability economics, and organizational operating models for mission-critical connectivity platforms.",
  "subject": "Computer Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "networking",
    "governance",
    "leadership"
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
    "Build strategic network operating models aligned with business and risk objectives",
    "Design governance controls for routing policy safety and interconnection risk",
    "Evaluate network investments using availability, latency, and outage-cost economics",
    "Lead multi-team incident governance and post-incident learning systems",
    "Construct multi-year network transformation roadmaps with measurable capability targets",
    "Communicate network strategy to executive and technical stakeholders"
  ],
  "lessons": [
    {
      "id": "network-engineering-401-l01",
      "title": "Network Platform Operating Models",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "network-engineering-401-l01-c1",
          "kind": "concept",
          "title": "Centralized vs. Federated Networking",
          "content": "Large-scale network organizations must decide how to distribute control. A centralized model offers consistency and simplified management by consolidating decision-making. However, it can create bottlenecks and reduce agility. A federated model empowers individual teams or departments, fostering rapid innovation and responsiveness. This autonomy requires strong standards and shared governance to prevent fragmentation. A hybrid platform-product strategy balances these extremes by offering standardized, reusable network services via self-service workflows and policy guardrails, enabling both central control and distributed execution.",
          "visualPrompt": "A diagram showing a central hub with spokes (Centralized) versus a network of interconnected but independent nodes (Federated), with a third diagram showing a central platform providing services to multiple teams (Hybrid)."
        },
        {
          "id": "network-engineering-401-l01-c2",
          "kind": "concept",
          "title": "Incident Command and Communication Roles",
          "content": "During a network incident, a structured response is critical. The Incident Command System (ICS) provides a standardized framework for managing emergencies. Key roles include the Incident Commander (IC), who has ultimate authority; Operations Lead, who executes the response plan; Communications Lead, who manages stakeholder updates; and Subject Matter Experts (SMEs), who provide deep technical knowledge. Clearly defined roles prevent confusion, streamline communication, and ensure that tactical mitigation, strategic analysis, and executive reporting happen in parallel without conflict.",
          "visualPrompt": "An organization chart for an incident response team, showing the Incident Commander at the top and the different roles (Operations, Communications, Planning) branching out below."
        },
        {
          "id": "network-engineering-401-l01-c3",
          "kind": "concept",
          "title": "Decision Rights and Escalation Paths",
          "content": "For high-impact changes like global routing policy adjustments or DDoS mitigation strategies, predefined decision rights are non-negotiable. A clear framework must specify who can approve changes, under what conditions, and what evidence is required. Equally important are the escalation paths. When an incident exceeds the authority or capability of the on-call team, a clear, well-practiced process for engaging leadership is essential. Ambiguous authority is a primary cause of extended outages, as it leads to hesitation and delayed containment.",
          "visualPrompt": "A flowchart illustrating a decision-making process for a critical network change, showing approval gates and a separate, highlighted path for emergency escalations."
        },
        {
          "id": "network-engineering-401-l01-c4",
          "kind": "recap",
          "title": "Operational Cadence",
          "content": "Sustainable operations rely on a regular rhythm of review and planning. An effective operational cadence includes weekly risk reviews, monthly reliability scorecard assessments, quarterly architectural planning, and annual interconnection strategy summits. This recurring cycle ensures that strategic goals, reliability targets, and operational risks remain aligned and receive consistent attention from all levels of the organization, preventing strategic drift and promoting continuous improvement.",
          "visualPrompt": "A circular diagram or calendar view showing the recurring cycle of weekly, monthly, quarterly, and annual review meetings, each with a specific focus."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-401-l01-f1",
          "front": "Platform-product networking",
          "back": "An operating model that treats internal network services as products with defined users, SLAs, and roadmaps, balancing central control with distributed agility."
        },
        {
          "id": "network-engineering-401-l01-f2",
          "front": "Decision rights",
          "back": "Defined authority boundaries for approvals, exceptions, and escalations to ensure clarity and speed during critical operations."
        },
        {
          "id": "network-engineering-401-l01-f3",
          "front": "Operational cadence",
          "back": "A recurring cycle of reviews (e.g., weekly, monthly, quarterly) that keeps risk, reliability, and delivery aligned with strategic goals."
        },
        {
          "id": "network-engineering-401-l01-f4",
          "front": "Incident Command System (ICS)",
          "back": "A standardized management framework for incident response that defines clear roles and responsibilities to avoid confusion under pressure."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-401-l01-a1",
          "type": "image",
          "title": "Operating Model Map",
          "content": "Reference map of network organization archetypes with trade-offs in control, speed, and resilience."
        }
      ]
    },
    {
      "id": "network-engineering-401-l02",
      "title": "Routing Risk Governance and Internet Edge Policy Lab",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "network-engineering-401-l02-c1",
          "kind": "concept",
          "title": "Interconnection Risk Mitigation",
          "content": "At the internet edge, minor configuration errors can trigger major outages or traffic misdirection. To manage this risk, organizations implement robust governance controls. These include max-prefix limits to prevent route table overflows from peer errors, strict prefix filtering to block unauthorized route advertisements, and Resource Public Key Infrastructure (RPKI) for route origin validation. Standardized BGP community policies ensure deterministic traffic engineering, while staged rollouts of policy changes limit the blast radius of potential mistakes.",
          "visualPrompt": "A network diagram of an organization's edge connecting to multiple ISPs and peers. Highlight the points where controls like prefix filters and max-prefix limits are applied."
        },
        {
          "id": "network-engineering-401-l02-c2",
          "kind": "practice",
          "title": "The Policy Lifecycle",
          "content": "Effective policy governance covers the entire lifecycle: authoring, simulation, approval, deployment, monitoring, and eventual retirement. For any high-risk policy, this lifecycle must be rigorously managed. This includes defining explicit rollback conditions, assigning clear ownership for the policy's performance, and maintaining a complete audit trail of all changes, approvals, and validation evidence. This structured approach transforms policy management from an ad-hoc task into a reliable, auditable engineering process.",
          "visualPrompt": "An infinity loop diagram showing the stages of a policy's life: Author -> Simulate -> Approve -> Deploy -> Monitor -> Modify/Retire, and back to Author."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Match",
          "description": "Match routing controls with the risk they most directly mitigate.",
          "pairs": [
            {
              "left": "Max-prefix limit",
              "right": "Prevents runaway route table growth from peer anomalies"
            },
            {
              "left": "Prefix filtering",
              "right": "Blocks unauthorized route advertisement"
            },
            {
              "left": "Community policy standard",
              "right": "Improves deterministic traffic steering and exception control"
            },
            {
              "left": "Staged rollout",
              "right": "Reduces blast radius of policy mistakes"
            }
          ]
        },
        {
          "id": "network-engineering-401-l02-act2",
          "type": "scenario_practice",
          "title": "Edge Incident Exercise",
          "description": "Respond to a live route leak affecting external reachability.",
          "instructions": [
            "Choose immediate containment actions.",
            "Specify one governance change to prevent recurrence."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which governance control should block risky route exports by default?",
          "How do you stage edge policy rollout to minimize customer impact?",
          "What evidence should be mandatory after high-risk routing changes?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-401-l02-a1",
          "type": "practice",
          "title": "Edge Policy Review Worksheet",
          "content": "Checklist for policy intent, simulation output, rollback trigger, and owner sign-off."
        }
      ]
    },
    {
      "id": "network-engineering-401-l03",
      "title": "Checkpoint 1: Governance and Edge Operations",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "network-engineering-401-l03-q1",
          "text": "Why are max-prefix limits critical at internet peering edges?",
          "skillId": "network-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "They improve cable quality"
            },
            {
              "id": "b",
              "text": "They cap damage from unexpected route advertisement volume"
            },
            {
              "id": "c",
              "text": "They encrypt all BGP sessions"
            },
            {
              "id": "d",
              "text": "They replace route policy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Prefix limits act as a circuit breaker, preventing a misconfigured peer from causing control-plane overload and instability."
        },
        {
          "id": "network-engineering-401-l03-q2",
          "text": "What is the most important reason for a staged rollout of edge policy changes?",
          "skillId": "network-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To increase blast radius"
            },
            {
              "id": "b",
              "text": "To detect issues early before global impact"
            },
            {
              "id": "c",
              "text": "To avoid monitoring"
            },
            {
              "id": "d",
              "text": "To skip peer communication"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Staging reveals policy issues under a limited scope first, allowing for rollback or correction before causing a widespread incident."
        },
        {
          "id": "network-engineering-401-l03-q3",
          "text": "What is a key governance failure pattern during severe network incidents?",
          "skillId": "network-engineering-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership and escalation"
            },
            {
              "id": "b",
              "text": "Ambiguous decision rights and delayed containment"
            },
            {
              "id": "c",
              "text": "Strong communication cadence"
            },
            {
              "id": "d",
              "text": "Documented rollback plans"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Unclear authority causes response latency and greater customer impact as teams hesitate to take decisive action."
        },
        {
          "id": "network-engineering-401-l03-q4",
          "text": "Which artifact best supports post-change accountability?",
          "skillId": "network-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Memory of who changed what"
            },
            {
              "id": "b",
              "text": "A structured change record with simulation, approver, and verification evidence"
            },
            {
              "id": "c",
              "text": "An untracked chat message"
            },
            {
              "id": "d",
              "text": "Only the final config snapshot"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comprehensive change evidence supports governance, auditability, and learning by documenting the intent, expected outcome, and actual results of a change."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-401-l03-a1",
          "type": "mnemonic",
          "title": "RISK",
          "content": "Review, Isolate, Stage, Keep evidence."
        }
      ]
    },
    {
      "id": "network-engineering-401-l04",
      "title": "Reliability Economics for Network Programs",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "network-engineering-401-l04-c1",
          "kind": "concept",
          "title": "Cost of Network Failure",
          "content": "Network outages have multifaceted business costs beyond immediate lost revenue. These include productivity loss, emergency labor costs for remediation, potential penalties for SLA breaches, and long-term reputational damage that erodes customer trust. When evaluating reliability investments, the focus should be on risk reduction per dollar spent. This economic framing shifts the conversation from technology-centric proposals to business-centric solutions, justifying investments based on the tangible cost of inaction.",
          "visualPrompt": "An iceberg diagram where the visible tip is 'Lost Revenue' and the much larger submerged part includes 'Productivity Loss', 'SLA Penalties', 'Reputation Damage', and 'Engineering Toil'."
        },
        {
          "id": "network-engineering-401-l04-c2",
          "kind": "concept",
          "title": "SLOs and Error Budgets",
          "content": "Site Reliability Engineering (SRE) provides a data-driven model for managing reliability. A Service Level Objective (SLO) is a precise numerical target for a service's availability, such as 99.95% uptime. The remaining 0.05% is the 'error budget'—an acceptable level of unavailability. This budget empowers teams: as long as they are within budget, they can prioritize feature development and innovation. If the budget is depleted by outages, the focus must shift to reliability improvements. This creates a self-regulating system that balances risk with velocity.",
          "visualPrompt": "A gauge or meter showing an 'Error Budget' for a quarter. An arrow starts at 100% and moves down with each simulated incident, showing when it enters a 'yellow' warning zone or a 'red' feature-freeze zone."
        },
        {
          "id": "network-engineering-401-l04-c3",
          "kind": "concept",
          "title": "Portfolio Prioritization",
          "content": "Network investment portfolios should be prioritized based on systemic impact. Key factors include business criticality, dependency centrality (how many other services rely on this component), and incident history. A seemingly low-revenue service, like a core transit backbone, may be the highest priority for investment if its failure would cascade across numerous critical, revenue-generating applications. Prioritization should be based on which initiatives most effectively reduce the largest sources of systemic risk and business impact.",
          "visualPrompt": "A 2x2 matrix plotting 'Business Impact' on the Y-axis and 'Dependency Centrality' on the X-axis. Place different network services (e.g., 'Edge Peering', 'Core Transit', 'Datacenter Fabric') into the quadrants to visualize prioritization."
        },
        {
          "id": "network-engineering-401-l04-c4",
          "kind": "example",
          "title": "Executive Recommendation Framing",
          "content": "Effective strategy statements connect technical initiatives to measurable business outcomes. For example: 'We recommend automating edge policy validation, which we project will reduce P0/P1 routing incidents by 30% within two quarters. This is based on the assumption that we can achieve 95% adoption across our major peering domains. This investment of $X is justified by avoiding an estimated $Y in annual outage costs.' This framing clearly states the action, the expected outcome, the underlying assumptions, and the economic justification.",
          "visualPrompt": "A presentation slide template with four key sections: 'Recommendation', 'Expected Outcome (KPI)', 'Key Assumptions', and 'Return on Investment (ROI)'."
        }
      ],
      "flashcards": [
        {
          "id": "network-engineering-401-l04-f1",
          "front": "Reliability ROI",
          "back": "The expected risk reduction or outage-cost avoidance per unit of investment, used to justify and prioritize work."
        },
        {
          "id": "network-engineering-401-l04-f2",
          "front": "Dependency centrality",
          "back": "A measure of how many critical services rely on a given network component, used to assess systemic risk."
        },
        {
          "id": "network-engineering-401-l04-f3",
          "front": "Error Budget",
          "back": "An SRE concept representing the acceptable level of unavailability for a service, derived from its SLO. It's a tool for balancing reliability work with feature development."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-401-l04-a1",
          "type": "image",
          "title": "Risk-Reduction Matrix",
          "content": "A quadrant map of network initiatives plotted by their potential impact on reliability versus the effort required for implementation."
        }
      ]
    },
    {
      "id": "network-engineering-401-l05",
      "title": "Transformation Roadmap Simulation",
      "type": "interactive",
      "duration": 18,
      "chunks": [
        {
          "id": "network-engineering-401-l05-c1",
          "kind": "practice",
          "title": "Case: Global Network Modernization",
          "content": "As the lead strategist, you must develop a two-year transformation roadmap for an aging global network with strict uptime SLAs. The first-year budget funds only four major programs. Your task is to sequence these initiatives to maximize reliability and security gains while minimizing disruption to business services. This requires careful consideration of dependencies—for example, a telemetry upgrade might be a prerequisite for effective automation. Your choices will determine whether the program successfully de-risks the network or introduces new instability.",
          "visualPrompt": "A high-level diagram of a network with certain components (e.g., legacy routers, manual policy systems) highlighted in red to indicate risk or technical debt."
        },
        {
          "id": "network-engineering-401-l05-c2",
          "kind": "recap",
          "title": "Roadmap Quality Signals",
          "content": "A high-quality strategic roadmap is more than a list of projects. It must articulate clear dependencies between initiatives, define measurable Key Performance Indicators (KPIs) for success, assign unambiguous ownership for each outcome, and explicitly state the risks being accepted through trade-offs (e.g., deferring one program to accelerate another). These elements ensure the roadmap is an actionable, accountable plan, not just a wish list.",
          "visualPrompt": "A sample Gantt chart for a roadmap. Use arrows to explicitly link dependent tasks. Each task should have a small icon next to it representing 'KPI' and 'Owner'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "network-engineering-401-l05-act1",
          "type": "timeline_builder",
          "title": "Roadmap Sequencing Drill",
          "description": "Arrange strategic initiatives into quarterly phases, respecting logical dependencies.",
          "data": {
            "initiatives": [
              "Routing policy governance automation",
              "Edge telemetry and anomaly detection upgrade",
              "WAN resiliency redesign",
              "Security segmentation standardization",
              "Network self-service platform rollout"
            ]
          }
        },
        {
          "id": "network-engineering-401-l05-act2",
          "type": "scenario_practice",
          "title": "Executive Trade-off Brief",
          "description": "Defend your decision to defer one initiative and explain the mitigation approach.",
          "instructions": [
            "State the risk of deferral.",
            "Define the trigger for reprioritization next quarter."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which initiative should start first and why?",
          "How will you measure roadmap effectiveness in the first 90 days?",
          "What risk will you accept temporarily, and what compensating control applies?"
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-401-l05-a1",
          "type": "practice",
          "title": "Strategy KPI Scorecard",
          "content": "Template linking initiative, KPI, baseline, quarterly target, and accountable owner."
        }
      ]
    },
    {
      "id": "network-engineering-401-l06",
      "title": "Checkpoint 2: Strategy and Economics",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "network-engineering-401-l06-q1",
          "text": "What is the best metric pairing for prioritizing reliability investment?",
          "skillId": "network-engineering-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Incident impact cost and dependency criticality"
            },
            {
              "id": "b",
              "text": "Cable vendor count and office headcount"
            },
            {
              "id": "c",
              "text": "Number of CLI commands"
            },
            {
              "id": "d",
              "text": "Age of documentation"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Business impact (cost) and systemic risk (dependency) provide the strongest signal for where to invest for maximum reliability return."
        },
        {
          "id": "network-engineering-401-l06-q2",
          "text": "What is the key value of explicit decision rights in incident governance?",
          "skillId": "network-engineering-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Faster, clearer containment and escalation decisions"
            },
            {
              "id": "b",
              "text": "Less need for communication"
            },
            {
              "id": "c",
              "text": "Guaranteed zero outages"
            },
            {
              "id": "d",
              "text": "No need for postmortems"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Clear authority reduces coordination delays and hesitation, which are common failure modes in high-pressure incidents."
        },
        {
          "id": "network-engineering-401-l06-q3",
          "text": "Why automate routing policy validation in a transformation program?",
          "skillId": "network-engineering-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "To remove all human review permanently"
            },
            {
              "id": "b",
              "text": "To detect unsafe changes earlier and scale governance consistently"
            },
            {
              "id": "c",
              "text": "To avoid documenting policy intent"
            },
            {
              "id": "d",
              "text": "To hide failed simulations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Automation increases the consistency of governance and catches risks pre-production, reducing the likelihood of human error causing an outage."
        },
        {
          "id": "network-engineering-401-l06-q4",
          "text": "What makes an executive network strategy recommendation credible?",
          "skillId": "network-engineering-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Only technical depth without outcomes"
            },
            {
              "id": "b",
              "text": "Measured outcomes, assumptions, risks, and ownership"
            },
            {
              "id": "c",
              "text": "The longest architecture diagram"
            },
            {
              "id": "d",
              "text": "The most expensive vendor option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision-makers need to understand the business impact, risks, and accountability framework, not just the technical details."
        },
        {
          "id": "network-engineering-401-l06-q5",
          "text": "Leading indicators in a network transformation are used to:",
          "skillId": "network-engineering-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Report only after annual failures occur"
            },
            {
              "id": "b",
              "text": "Provide early signals that program outcomes are on or off track"
            },
            {
              "id": "c",
              "text": "Replace all lagging metrics"
            },
            {
              "id": "d",
              "text": "Eliminate risk management"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators (e.g., 'percentage of changes automated') predict future success or failure, enabling course correction before major goals are missed. Lagging indicators (e.g., 'number of outages') report past events."
        }
      ],
      "learningAids": [
        {
          "id": "network-engineering-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Context, Levers, Economics, Accountability, Risk."
        }
      ]
    },
    {
      "id": "network-engineering-401-l07",
      "title": "Capstone: Board-Level Network Program Proposal",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "network-engineering-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Synthesize the concepts from this module to create a formal proposal for a multi-year global network program. Your proposal, intended for a board of directors, must justify a significant investment by linking network capabilities to business outcomes. It should address three pillars: growth (scalability), security, and resilience. You must define the target operating model, key governance controls, and a phased roadmap with quarterly milestones. This is your opportunity to demonstrate strategic thinking by translating complex technical requirements into a compelling business case.",
          "visualPrompt": "An animation showing the assembly of a final proposal document, with sections for 'Executive Summary', 'Business Case', 'Roadmap', 'Operating Model', and 'Risk Analysis' flying into place."
        },
        {
          "id": "network-engineering-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "A successful proposal will be judged on its ability to align technical initiatives with stated business goals. It must feature measurable outcomes (e.g., 'reduce latency by X%', 'improve availability to Y nines'), a logical and defensible execution sequence, and clear ownership for each major deliverable. The proposal should demonstrate a sophisticated understanding of trade-offs, articulating not just the plan but also the risks and the economic rationale behind the recommended path.",
          "visualPrompt": "A scorecard or checklist graphic with items like 'Business Alignment', 'Measurable KPIs', 'Clear Ownership', 'Risk Analysis', and 'Economic Justification', with checkmarks next to each."
        }
      ],
      "metadata": {
        "prompts": [
          "Present three strategic initiatives with their expected business impact.",
          "List the top three program risks and their mitigations.",
          "Define one executive KPI and one engineering KPI for each initiative."
        ]
      },
      "learningAids": [
        {
          "id": "network-engineering-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Framework",
          "content": "A one-page template for structuring the proposal, covering: Objective, Options Considered, Recommendation, Economics, Risk Controls, and Milestone Plan."
        }
      ]
    }
  ]
};
