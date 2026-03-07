import type { LearningModule } from "@/lib/modules/types";

export const sports_science_301_Module: LearningModule = {
  "id": "sports-science-301",
  "title": "Sports Science Systems and Governance",
  "description": "Level 301 curriculum in Sports Science, focused on performance physiology, training periodization, biomechanics and movement analysis, and injury prevention governance through case analysis, simulation practice, and mastery checkpoints.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sports",
    "human-performance"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply performance physiology using explicit assumptions and constraints",
    "Design and execute workflows for training periodization with reliable control points",
    "Evaluate biomechanics and movement analysis decisions using baseline and side-effect analysis",
    "Strengthen injury prevention governance with accountable governance mechanisms",
    "Communicate uncertainty and tradeoffs across stakeholder groups",
    "Build defensible recommendations resilient to critical review"
  ],
  "lessons": [
    {
      "id": "sports-science-301-l01",
      "title": "Sports Science Core Foundations",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sports-science-301-l01-a1",
          "type": "image",
          "title": "The Sports Science Ecosystem",
          "content": "A diagram showing three interconnected circles: 'Performance Physiology,' 'Training Periodization,' and 'Biomechanics.' Arrows indicate the flow of information and feedback between them, with a surrounding layer labeled 'Governance & Ethics.'"
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l01-c1",
          "kind": "concept",
          "title": "Scope and Shared Vocabulary",
          "content": "Explore the core domains of Sports Science: performance physiology (how the body responds to exercise) and training periodization (the strategic planning of training cycles). We will establish a shared vocabulary to understand how these concepts integrate to optimize athletic performance."
        },
        {
          "id": "sports-science-301-l01-c2",
          "kind": "concept",
          "title": "Causal Structure and Constraints",
          "content": "Learn to map causal pathways to understand how different training factors influence outcomes. This involves identifying and testing hidden assumptions to ensure interventions are based on sound reasoning and a clear understanding of constraints."
        },
        {
          "id": "sports-science-301-l01-c3",
          "kind": "recap",
          "title": "Evidence Discipline",
          "content": "This lesson emphasizes evidence discipline. Ground all claims in observable data, clearly state any uncertainties, and use review checkpoints to verify conclusions. This rigor ensures that recommendations are both accurate and defensible."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-301-l01-f1",
          "front": "Performance Physiology",
          "back": "The study of the body's response and adaptation to physical stress, requiring careful control of assumptions."
        },
        {
          "id": "sports-science-301-l01-f2",
          "front": "Training Periodization",
          "back": "The strategic planning and structuring of training into cycles to optimize performance and prevent overtraining."
        },
        {
          "id": "sports-science-301-l01-f3",
          "front": "Biomechanics and Movement Analysis",
          "back": "The evaluation framework used to analyze human movement, validate outcomes, and detect inefficiencies or injury risks."
        }
      ]
    },
    {
      "id": "sports-science-301-l02",
      "title": "Sports Science Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-301-l02-a1",
          "type": "practice",
          "title": "Workflow Design Template",
          "content": "A visual template of a workflow diagram with empty boxes for 'Objective,' 'Key Steps,' 'Decision Gates,' 'Verification Metrics,' and 'Rollback Plan.'"
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction and Test",
          "content": "Design and stress-test a training workflow. This hands-on lab focuses on analyzing system trade-offs, integrating metrics for governance, and ensuring coordination across different team functions. You will test your workflow's reliability under conditions of uncertainty."
        },
        {
          "id": "sports-science-301-l02-c2",
          "kind": "recap",
          "title": "Control Gates and Readiness",
          "content": "Recap the importance of control gates and readiness. We will map role responsibilities, define criteria for decision points (gates), establish conditions for rolling back a plan, and identify key verification signals to ensure workflow integrity."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-301-l02-act1",
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
          "id": "sports-science-301-l02-act2",
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
              "text": "Athlete data privacy regulations",
              "bucket": "Policy"
            },
            {
              "text": "Wearable sensor battery life",
              "bucket": "Technical"
            },
            {
              "text": "Risk of athlete burnout",
              "bucket": "Stakeholder Impact"
            },
            {
              "text": "Budget for new equipment",
              "bucket": "Technical"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-301-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-301-l03-a1",
          "type": "practice",
          "title": "Concept Review Sheet",
          "content": "A one-page document summarizing key terms from Lessons 1 & 2: Performance Physiology, Periodization, Causal Pathways, Evidence Discipline, and Control Gates."
        }
      ],
      "questions": [
        {
          "id": "sports-science-301-l03-q1",
          "text": "Which approach most improves decisions in performance physiology?",
          "skillId": "sports-science-301-skill-core",
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
          "id": "sports-science-301-l03-q2",
          "text": "The 301 level should emphasize:",
          "skillId": "sports-science-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "system tradeoff analysis, metrics-governance integration, and cross-functional coordination"
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
          "id": "sports-science-301-l03-q3",
          "text": "What best strengthens training periodization reliability?",
          "skillId": "sports-science-301-skill-reliability",
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
          "id": "sports-science-301-l03-q4",
          "text": "For biomechanics and movement analysis, which practice is most defensible?",
          "skillId": "sports-science-301-skill-eval",
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
          "id": "sports-science-301-l03-q5",
          "text": "A mature injury prevention governance model should include:",
          "skillId": "sports-science-301-skill-governance",
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
      "id": "sports-science-301-l04",
      "title": "Sports Science Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sports-science-301-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A table comparing three different training interventions. Rows include criteria like 'Performance Gain,' 'Injury Risk,' 'Cost,' and 'Athlete Adherence,' with cells containing scores or ratings."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "Analyze a case study of a high-performance training program. The central challenge is balancing performance gains against recovery needs and injury risk. Your task is to map high-impact risks and identify the competing constraints influencing decisions."
        },
        {
          "id": "sports-science-301-l04-c2",
          "kind": "concept",
          "title": "Tradeoff Matrix",
          "content": "Use a trade-off matrix to systematically evaluate different intervention options. Score each option against criteria such as effectiveness, reliability, fairness, and implementation feasibility to practice making well-rounded, evidence-based decisions."
        },
        {
          "id": "sports-science-301-l04-c3",
          "kind": "recap",
          "title": "Failure Learning and Recovery",
          "content": "Learn from system failures by identifying recurring patterns. We will discuss how to transform these insights into preventative safeguards, develop standardized response playbooks for incidents, and update monitoring to catch future issues earlier."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured comparison of alternatives under competing priorities."
        },
        {
          "id": "sports-science-301-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring risk signature used to design targeted mitigations."
        },
        {
          "id": "sports-science-301-l04-f3",
          "front": "Response Playbook",
          "back": "A predefined action sequence for safe and timely recovery from a known issue."
        }
      ]
    },
    {
      "id": "sports-science-301-l05",
      "title": "Sports Science Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sports-science-301-l05-a1",
          "type": "practice",
          "title": "Simulation Dashboard",
          "content": "An interface showing input sliders for 'Training Load' and 'Recovery Time,' and output graphs for 'Performance Trend' and 'Injury Probability.'"
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "Set up and run a simulation of a training intervention. You will define the scenario, introduce parameters of uncertainty (e.g., athlete fatigue, unexpected schedule changes), and establish measurable thresholds for success and failure."
        },
        {
          "id": "sports-science-301-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "Conduct a post-simulation debrief. Evaluate the outcomes against the initial goals, identify any unintended side effects, and assess how well the results align with established governance constraints. This practice hones your analytical and reflective skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-301-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Evaluate three strategies and justify which best advances performance physiology and injury prevention governance.",
          "instructions": [
            "Define objective and guardrails before selecting interventions.",
            "Record near-term and long-term tradeoffs for each option.",
            "Select confirmation metrics and escalation triggers."
          ]
        },
        {
          "id": "sports-science-301-l05-act2",
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
      "id": "sports-science-301-l06",
      "title": "Checkpoint 2: Systems Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-301-l06-a1",
          "type": "practice",
          "title": "Case Study Snippet",
          "content": "A short paragraph describing a scenario where a soccer team's new, high-intensity training program has led to more goals but also a 20% increase in hamstring strains."
        }
      ],
      "questions": [
        {
          "id": "sports-science-301-l06-q1",
          "text": "When using a tradeoff matrix to select a new recovery protocol, what is the primary goal?",
          "skillId": "sports-science-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To pick the cheapest option available"
            },
            {
              "id": "b",
              "text": "To systematically compare options against multiple, competing criteria"
            },
            {
              "id": "c",
              "text": "To confirm a pre-selected favorite option"
            },
            {
              "id": "d",
              "text": "To choose the option with the single highest benefit, ignoring all risks"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix is designed to provide a structured, multi-factor comparison to make a balanced and defensible decision."
        },
        {
          "id": "sports-science-301-l06-q2",
          "text": "In a simulation debrief, you notice an intervention improved peak performance but also increased minor injury rates. This is an example of a:",
          "skillId": "sports-science-301-skill-core",
          "options": [
            {
              "id": "a",
              "text": "System failure with no benefits"
            },
            {
              "id": "b",
              "text": "Perfectly balanced outcome"
            },
            {
              "id": "c",
              "text": "Negative side-effect or hidden cost"
            },
            {
              "id": "d",
              "text": "Data collection error"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective analysis requires identifying not just the intended benefits but also the unintended negative consequences (side-effects)."
        },
        {
          "id": "sports-science-301-l06-q3",
          "text": "A 'response playbook' is most useful for which situation?",
          "skillId": "sports-science-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Developing a completely new training theory from scratch"
            },
            {
              "id": "b",
              "text": "Managing a recurring, known issue like athlete dehydration on hot days"
            },
            {
              "id": "c",
              "text": "Hiring a new coaching staff"
            },
            {
              "id": "d",
              "text": "Designing a team logo"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Playbooks are pre-defined action sequences designed to handle predictable incidents safely and efficiently."
        },
        {
          "id": "sports-science-301-l06-q4",
          "text": "Identifying that multiple athletes are missing recovery sessions due to scheduling conflicts is an example of what?",
          "skillId": "sports-science-301-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "A successful intervention"
            },
            {
              "id": "b",
              "text": "A random, unexplainable event"
            },
            {
              "id": "c",
              "text": "A failure pattern"
            },
            {
              "id": "d",
              "text": "An equipment malfunction"
            }
          ],
          "correctOptionId": "c",
          "explanation": "This is a recurring risk signature (a failure pattern) that points to a systemic issue rather than isolated incidents."
        },
        {
          "id": "sports-science-301-l06-q5",
          "text": "A simulation shows a new training regimen is highly effective but requires equipment only available to a few athletes. This highlights a conflict between:",
          "skillId": "sports-science-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Effectiveness and fairness"
            },
            {
              "id": "b",
              "text": "Reliability and safety"
            },
            {
              "id": "c",
              "text": "Data privacy and performance"
            },
            {
              "id": "d",
              "text": "Short-term and long-term goals"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This scenario presents a classic tradeoff where the most effective solution is not equitable or fair in its implementation."
        }
      ]
    },
    {
      "id": "sports-science-301-l07",
      "title": "Sports Science Policy and Ethics Integration",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sports-science-301-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram with 'Athletes,' 'Coaches,' and 'Management' as columns. Rows detail the 'Benefits' and 'Burdens' of a specific policy, showing how outcomes are distributed unevenly."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Impact Mapping",
          "content": "Map how the benefits and burdens of a sports science program are distributed across different stakeholders (e.g., athletes, coaches, management) over short and long-term horizons. This analysis is key to understanding the ethical dimensions of your work."
        },
        {
          "id": "sports-science-301-l07-c2",
          "kind": "concept",
          "title": "Accountability Architecture",
          "content": "Examine the architecture of accountability. This includes ensuring decision traceability (the 'why' and 'how'), defining rights of review for stakeholders, and establishing clear obligations for remediation when negative outcomes occur."
        },
        {
          "id": "sports-science-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Use a responsible execution checklist to connect technical performance with policy compliance, ethical principles, and stakeholder trust. This tool helps ensure that program goals are achieved in a responsible and sustainable manner."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-301-l07-f1",
          "front": "Impact Distribution",
          "back": "How outcomes, both positive and negative, differ across stakeholder groups and timescales."
        },
        {
          "id": "sports-science-301-l07-f2",
          "front": "Decision Traceability",
          "back": "The evidence chain showing how and why a decision was made, crucial for accountability."
        },
        {
          "id": "sports-science-301-l07-f3",
          "front": "Responsible Execution",
          "back": "Delivery that balances effectiveness with ethical, policy, and safety safeguards."
        }
      ]
    },
    {
      "id": "sports-science-301-l08",
      "title": "Sports Science Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-301-l08-a1",
          "type": "practice",
          "title": "Capstone Project Canvas",
          "content": "A one-page business model canvas adapted for a project, with sections for 'Problem Statement,' 'Objective,' 'Success Metrics,' 'Key Stakeholders,' 'Risks,' and 'Governance Plan.'"
        }
      ],
      "chunks": [
        {
          "id": "sports-science-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Charter",
          "content": "Develop a capstone charter for a sports science project. Define a clear primary objective, identify key constraints, select meaningful success metrics, and outline the governance gates that will guide your decision-making process from start to finish."
        },
        {
          "id": "sports-science-301-l08-c2",
          "kind": "recap",
          "title": "Defense Readiness",
          "content": "Prepare for your project defense. Gather and organize the evidence needed to support your recommendations. Practice defending your plan against critical review concerning its technical feasibility, policy alignment, and stakeholder impacts."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-301-l08-act1",
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
          "id": "sports-science-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Defend your capstone decisions against technical, policy, and stakeholder objections.",
          "instructions": [
            "Assume the role of a project lead presenting to a panel.",
            "Respond to challenges from a 'Technical Lead,' 'Ethics Officer,' and 'Athlete Representative.'",
            "Your goal is to build consensus without compromising core objectives."
          ]
        }
      ]
    }
  ]
};
