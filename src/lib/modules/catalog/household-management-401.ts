import type { LearningModule } from "@/lib/modules/types";

export const household_management_401_Module: LearningModule = {
  "id": "household-management-401",
  "title": "Household Systems Leadership and Long-Term Resilience",
  "description": "Expert-level household management focused on governance, financial resilience, care logistics, legal readiness, and multi-year operating strategy for complex households.",
  "subject": "Household Management",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "resilience",
    "finance",
    "governance"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Design household operating systems with explicit roles, policies, and review cadence",
    "Build contingency plans for financial, health, housing, and dependency risks",
    "Evaluate household decisions using trade-off analysis and scenario planning",
    "Coordinate intergenerational care, legal documents, and emergency readiness",
    "Use measurable indicators to improve household reliability and well-being",
    "Present a strategic household plan with assumptions, risks, and accountability"
  ],
  "lessons": [
    {
      "id": "household-management-401-l01",
      "title": "Household Governance and Operating Models",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "household-management-401-l01-c1",
          "kind": "concept",
          "title": "From Chores to Systems",
          "content": "Advanced household management shifts from a reactive list of chores to a proactive, designed system. Think of your household like a well-run team or small business. Governance is the framework that defines who is responsible for what, how decisions are made, and how the team adapts to challenges. This structure reduces daily friction, clarifies expectations, and builds a foundation for long-term stability, especially under stress."
        },
        {
          "id": "household-management-401-l01-c2",
          "kind": "concept",
          "title": "Decision Rights and Escalation",
          "content": "For major decisions—like a significant purchase, a change in caregiving, or a move—ambiguity is risky. Establishing clear decision rights defines who has the authority to approve, consult, or veto a choice. An escalation path is a pre-agreed process for handling disagreements or high-stakes issues, ensuring that conflicts are resolved constructively instead of causing gridlock during a crisis."
        },
        {
          "id": "household-management-401-l01-c3",
          "kind": "recap",
          "title": "Establishing a Review Cadence",
          "content": "A well-run system requires regular check-ins to stay on track. A strong operating cadence might include: weekly sync-ups for coordinating schedules and immediate tasks, monthly reviews for budgeting and risk monitoring, and quarterly resets for assessing progress against long-term goals. This rhythm turns planning into a routine habit, preventing crisis-mode decision-making and keeping the household aligned."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-401-l01-f1",
          "front": "Household Governance",
          "back": "The decision-making and accountability structure for a household's priorities, resources, and exceptions."
        },
        {
          "id": "household-management-401-l01-f2",
          "front": "Decision Rights",
          "back": "Defined authority for who can approve, defer, or escalate major household decisions."
        },
        {
          "id": "household-management-401-l01-f3",
          "front": "Operating Cadence",
          "back": "The recurring rhythm of meetings and reviews that keeps household plans current and coordinated."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-401-l01-a1",
          "type": "image",
          "title": "Household Operating Model Map",
          "content": "A visual template for mapping household roles, key decisions, escalation paths for disagreements, and the schedule for review meetings."
        }
      ]
    },
    {
      "id": "household-management-401-l02",
      "title": "Risk Portfolio and Contingency Planning Lab",
      "type": "interactive",
      "duration": 16,
      "chunks": [
        {
          "id": "household-management-401-l02-c1",
          "kind": "concept",
          "title": "Identifying Risk Buckets",
          "content": "Resilient households anticipate challenges across several key areas, or 'risk buckets': financial shocks (job loss), health crises, housing instability, caregiving gaps, and infrastructure failures (utility outages). Relying on a single solution for all problems is fragile. Instead, building layered defenses for each risk bucket creates a robust system that can absorb unexpected shocks."
        },
        {
          "id": "household-management-401-l02-c2",
          "kind": "practice",
          "title": "Designing Controls for Each Risk",
          "content": "For each identified risk, a strong contingency plan has three parts: a preventative measure (what you do to avoid it), a detection signal (how you know it's happening), and a recovery playbook (your immediate steps to mitigate damage). This plan must specify an owner, a clear trigger for activation, and at least one backup option to ensure a swift and effective response."
        }
      ],
      "interactiveActivities": [
        {
          "id": "household-management-401-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Risk Matching",
          "description": "Match household controls to the risk they reduce most directly.",
          "pairs": [
            {
              "left": "Three-month emergency reserve",
              "right": "Buffers income interruption and urgent expenses"
            },
            {
              "left": "Medication and records go-bag",
              "right": "Improves response speed during medical events"
            },
            {
              "left": "Backup caregiver roster",
              "right": "Reduces single-person dependency risk"
            },
            {
              "left": "Utility outage checklist",
              "right": "Maintains continuity during power or water disruption"
            }
          ]
        },
        {
          "id": "household-management-401-l02-act2",
          "type": "scenario_practice",
          "title": "72-Hour Disruption Drill",
          "description": "Respond to a sudden disruption and defend your first three actions.",
          "instructions": [
            "Choose one containment action in the first hour.",
            "Name one communication protocol that prevents confusion."
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which risk in your household has the highest impact if unmanaged?",
          "What trigger would force immediate escalation to all adults in the home?",
          "Which control gives the best resilience per dollar or hour of effort?"
        ]
      },
      "learningAids": [
        {
          "id": "household-management-401-l02-a1",
          "type": "practice",
          "title": "Contingency Worksheet",
          "content": "A template to define a risk, its owner, the early warning indicator, fallback steps, and the target for full recovery."
        }
      ]
    },
    {
      "id": "household-management-401-l03",
      "title": "Checkpoint 1: Governance and Risk",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "household-management-401-l03-q1",
          "text": "What is the strongest indicator of a robust household operating system?",
          "skillId": "household-management-401-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Tasks are handled informally with no ownership"
            },
            {
              "id": "b",
              "text": "Roles, escalation paths, and review cadence are explicit"
            },
            {
              "id": "c",
              "text": "Only one person tracks all critical decisions"
            },
            {
              "id": "d",
              "text": "Planning happens only during emergencies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clarity of ownership, decision rights, and a regular review cadence are foundational to reliability under stress."
        },
        {
          "id": "household-management-401-l03-q2",
          "text": "Why should contingency plans include trigger thresholds?",
          "skillId": "household-management-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "To delay action until all uncertainty is removed"
            },
            {
              "id": "b",
              "text": "To standardize when escalation and fallback actions begin"
            },
            {
              "id": "c",
              "text": "To reduce documentation effort"
            },
            {
              "id": "d",
              "text": "To avoid discussing trade-offs"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Triggers are pre-agreed signals that convert a plan into timely action, avoiding debate and delay during a crisis."
        },
        {
          "id": "household-management-401-l03-q3",
          "text": "What is the most common failure pattern in household disruptions?",
          "skillId": "household-management-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Over-communication with clear roles"
            },
            {
              "id": "b",
              "text": "Undefined roles and delayed decisions"
            },
            {
              "id": "c",
              "text": "Too many documented playbooks"
            },
            {
              "id": "d",
              "text": "Routine review meetings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ambiguity about who does what, and delays in making critical choices, are the primary drivers that escalate the impact of a disruption."
        },
        {
          "id": "household-management-401-l03-q4",
          "text": "A resilient plan should always include:",
          "skillId": "household-management-401-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Only prevention controls"
            },
            {
              "id": "b",
              "text": "Prevention, detection, and recovery components"
            },
            {
              "id": "c",
              "text": "A single best-case scenario"
            },
            {
              "id": "d",
              "text": "No ownership assignments"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A comprehensive plan addresses the full lifecycle of a risk: preventing it, detecting it early, and recovering from it effectively."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-401-l03-a1",
          "type": "mnemonic",
          "title": "RACE",
          "content": "Roles, Alerts, Controls, Escalation. The key elements of a strong response plan."
        }
      ]
    },
    {
      "id": "household-management-401-l04",
      "title": "Financial, Legal, and Care Infrastructure",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "household-management-401-l04-c1",
          "kind": "concept",
          "title": "The Financial Resilience Stack",
          "content": "A household's financial infrastructure is a layered defense against uncertainty. The base layer is a liquidity buffer (emergency savings) for immediate shocks. The next layer is insurance, which transfers catastrophic risk. Above that is a clear debt management strategy to control liabilities. Finally, long-term investment and savings plans provide for future goals. The strength of each layer depends on your household's specific risks and dependencies."
        },
        {
          "id": "household-management-401-l04-c2",
          "kind": "concept",
          "title": "Legal and Documentation Readiness",
          "content": "In a crisis, access to the right information is critical. Legal and documentation readiness means having essential documents organized, accessible, and up-to-date. This includes wills, powers of attorney, advance healthcare directives, and a master document with emergency contacts, account access instructions, and key medical information. This preparation minimizes conflict and enables swift, authorized action when needed most."
        },
        {
          "id": "household-management-401-l04-c3",
          "kind": "recap",
          "title": "Care Logistics and Continuity",
          "content": "For households with dependents, care is a critical system. Robust care logistics include a master schedule with backup providers, clear protocols for medical information and medication, and strategies to prevent primary caregiver burnout. The goal is care continuity—the ability to maintain a high standard of care even if the primary caregiver is unavailable or during a household disruption."
        }
      ],
      "flashcards": [
        {
          "id": "household-management-401-l04-f1",
          "front": "Liquidity Buffer",
          "back": "Easily accessible cash reserves to cover essential expenses during a short-term disruption without forced borrowing or selling assets."
        },
        {
          "id": "household-management-401-l04-f2",
          "front": "Care Continuity",
          "back": "The ability to sustain dependent care standards across disruptions or the primary caregiver's unavailability."
        },
        {
          "id": "household-management-401-l04-f3",
          "front": "Documentation Readiness",
          "back": "Maintaining organized, current records and instructions required for a fast, low-conflict response to an emergency."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-401-l04-a1",
          "type": "image",
          "title": "Resilience Stack Diagram",
          "content": "A visual diagram showing how financial, legal, and care systems form a layered defense, with emergency cash at the base, followed by insurance, legal documents, and care plans."
        }
      ]
    },
    {
      "id": "household-management-401-l05",
      "title": "Operations Dashboard and Trade-off Simulation",
      "type": "interactive",
      "duration": 17,
      "chunks": [
        {
          "id": "household-management-401-l05-c1",
          "kind": "practice",
          "title": "Case: The Multi-Constraint Household",
          "content": "Your challenge is to lead a household with a variable income, complex school and activity schedules, and limited backup care options. Your task is to design a one-month operating plan that meets all non-negotiable needs (like bills and meals), protects your resilience buffers (like savings and caregiver rest), and identifies acceptable trade-offs if resources become constrained."
        },
        {
          "id": "household-management-401-l05-c2",
          "kind": "recap",
          "title": "Elements of a Strong Operating Plan",
          "content": "A high-quality household operating plan is more than a to-do list. It must include: measurable indicators to track stability (e.g., weekly budget variance), clear ownership for key risks, defined buffers to absorb shocks (e.g., a 'flex day' in the schedule), and specific triggers that prompt a plan review or activation of contingencies. These elements make the plan actionable and adaptable."
        }
      ],
      "interactiveActivities": [
        {
          "id": "household-management-401-l05-act1",
          "type": "timeline_builder",
          "title": "Quarterly Resilience Planner",
          "description": "Sequence priority actions across a 90-day household stabilization plan.",
          "data": {
            "initiatives": [
              "Automate essential bill and savings flows",
              "Document emergency contacts and care instructions",
              "Create backup transport and school pickup plan",
              "Run monthly risk review and adjustment meeting",
              "Set burnout prevention schedule for primary caregiver"
            ]
          }
        },
        {
          "id": "household-management-401-l05-act2",
          "type": "sorting_buckets",
          "title": "Indicator Classification",
          "description": "Sort household signals by their planning horizon.",
          "buckets": [
            "Early Warning",
            "Operational",
            "Strategic"
          ],
          "items": [
            {
              "text": "Credit utilization trend",
              "bucket": "Early Warning"
            },
            {
              "text": "Weekly schedule conflict count",
              "bucket": "Operational"
            },
            {
              "text": "Emergency reserve months of coverage",
              "bucket": "Strategic"
            },
            {
              "text": "Caregiver fatigue self-rating",
              "bucket": "Early Warning"
            }
          ]
        }
      ],
      "metadata": {
        "prompts": [
          "Which one metric would you monitor weekly to detect stability drift early?",
          "What trade-off will you accept this quarter and why?",
          "What trigger would force a plan reset within 24 hours?"
        ]
      },
      "learningAids": [
        {
          "id": "household-management-401-l05-a1",
          "type": "practice",
          "title": "Household KPI Scorecard",
          "content": "A template linking a key performance indicator (KPI), its target threshold, the owner, review cadence, and the intervention playbook to use if the metric goes off track."
        },
        {
          "id": "household-management-401-l05-a2",
          "type": "image",
          "title": "Trade-Off Decision Matrix",
          "content": "A simple 2x2 grid to help evaluate choices by mapping them against two critical criteria, such as 'Impact vs. Effort' or 'Cost vs. Urgency'."
        }
      ]
    },
    {
      "id": "household-management-401-l06",
      "title": "Checkpoint 2: Strategy and Execution",
      "type": "quiz",
      "duration": 11,
      "questions": [
        {
          "id": "household-management-401-l06-q1",
          "text": "What is the best reason to track both leading and lagging indicators in household planning?",
          "skillId": "household-management-401-skill-analytics",
          "options": [
            {
              "id": "a",
              "text": "Leading indicators replace all outcome measures"
            },
            {
              "id": "b",
              "text": "Leading indicators provide early warnings while lagging indicators confirm outcomes"
            },
            {
              "id": "c",
              "text": "Lagging indicators are never useful"
            },
            {
              "id": "d",
              "text": "Only annual indicators matter"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators (like caregiver fatigue) predict future problems, allowing for proactive adjustments. Lagging indicators (like total debt) confirm long-term results."
        },
        {
          "id": "household-management-401-l06-q2",
          "text": "When should a household escalate from routine operations to incident mode?",
          "skillId": "household-management-401-skill-incident",
          "options": [
            {
              "id": "a",
              "text": "Only after all reserves are exhausted"
            },
            {
              "id": "b",
              "text": "When predefined trigger thresholds are crossed"
            },
            {
              "id": "c",
              "text": "Whenever one task is late"
            },
            {
              "id": "d",
              "text": "Only at year-end review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using predefined triggers for escalation (e.g., 'emergency fund drops below one month's expenses') ensures a timely, decisive response instead of waiting too long."
        },
        {
          "id": "household-management-401-l06-q3",
          "text": "What is the most defensible recommendation for a high-stress household?",
          "skillId": "household-management-401-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Maximize complexity to capture every edge case"
            },
            {
              "id": "b",
              "text": "Use simple, repeatable protocols with clear ownership"
            },
            {
              "id": "c",
              "text": "Defer all planning to annual meetings"
            },
            {
              "id": "d",
              "text": "Rely on memory instead of written procedures"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Under pressure, cognitive load increases. Simple, clear, and repeatable systems are far more reliable than complex ones that depend on memory or improvisation."
        },
        {
          "id": "household-management-401-l06-q4",
          "text": "Why must household operations include backup caregiver pathways?",
          "skillId": "household-management-401-skill-care",
          "options": [
            {
              "id": "a",
              "text": "To avoid documenting primary care routines"
            },
            {
              "id": "b",
              "text": "To reduce single-point-of-failure risk for dependent care"
            },
            {
              "id": "c",
              "text": "To remove communication responsibilities"
            },
            {
              "id": "d",
              "text": "To increase scheduling uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Relying on a single caregiver creates a critical vulnerability. Backup pathways provide redundancy, protecting the continuity and safety of care."
        },
        {
          "id": "household-management-401-l06-q5",
          "text": "What makes a household strategy proposal credible to all adults involved?",
          "skillId": "household-management-401-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Only motivational language"
            },
            {
              "id": "b",
              "text": "Clear assumptions, measurable outcomes, and role accountability"
            },
            {
              "id": "c",
              "text": "No mention of constraints"
            },
            {
              "id": "d",
              "text": "A long task list without priorities"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Credibility is built on transparency and clarity. A strong proposal acknowledges reality (assumptions), defines success (outcomes), and assigns responsibility (accountability)."
        }
      ],
      "learningAids": [
        {
          "id": "household-management-401-l06-a1",
          "type": "mnemonic",
          "title": "CLEAR",
          "content": "Constraints, Levers, Evidence, Accountability, Review. A checklist for a credible strategic plan."
        }
      ]
    },
    {
      "id": "household-management-401-l07",
      "title": "Capstone: Household Resilience Board Proposal",
      "type": "interactive",
      "duration": 19,
      "chunks": [
        {
          "id": "household-management-401-l07-c1",
          "kind": "practice",
          "title": "Capstone Brief",
          "content": "Your final project is to create a one-year resilience plan for a complex household (multiple dependents, variable income). You will present this plan as a formal proposal to the household's key decision-makers (the 'board'). Your proposal must integrate all concepts from this module: a clear governance model, a prioritized risk control plan, a robust financial and care infrastructure, and a dashboard of key performance indicators to track progress."
        },
        {
          "id": "household-management-401-l07-c2",
          "kind": "recap",
          "title": "Assessment Criteria",
          "content": "A successful proposal will be evaluated on its clarity, realism, and completeness. It must explicitly define decision rights, include measurable KPIs with targets, present a logical and achievable sequence of actions, and transparently acknowledge the key trade-offs being made. Your goal is to present a plan that is not just comprehensive, but also credible and actionable for the household."
        }
      ],
      "metadata": {
        "prompts": [
          "Present your top three risks and the control strategy for each.",
          "Define one weekly and one monthly KPI you will use to monitor household stability.",
          "State one important initiative you are deferring and the trigger for its reprioritization."
        ]
      },
      "learningAids": [
        {
          "id": "household-management-401-l07-a1",
          "type": "practice",
          "title": "Board Memo Template",
          "content": "A structured template for your final proposal, including sections for Objective, Options Considered, Recommendation, KPI Dashboard, and Contingency Controls."
        }
      ]
    }
  ]
};
