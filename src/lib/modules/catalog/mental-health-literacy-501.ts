import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_501_Module: LearningModule = {
  "id": "mental-health-literacy-501",
  "title": "Mental Health Literacy: Advanced Practice",
  "description": "An advanced module on Mental Health Literacy. Learn to interpret risk signals, design support systems, monitor outcomes, and govern ethical escalations through case studies and a final capstone project.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "mental-health",
    "specialization"
  ],
  "minAge": 17,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze complex situations to accurately interpret signals of mental health risk.",
    "Design effective and reliable support pathways for individuals in need.",
    "Evaluate the impact and safety of mental health interventions using evidence-based standards.",
    "Develop and implement clear, ethical protocols for escalating crisis situations.",
    "Justify intervention strategies by clearly explaining the tradeoffs between different options.",
    "Present and defend a comprehensive mental health intervention plan based on a complex case scenario."
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-501-l01",
      "title": "Foundations of Advanced MHL",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l01-a1",
          "type": "diagram",
          "title": "Causal Loop Diagram Example",
          "content": "A visual representation of how different factors in a mental health scenario influence one another, helping to identify root causes and intervention points."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l01-c1",
          "kind": "concept",
          "title": "Defining Scope and Key Decisions",
          "content": "In this lesson, we'll establish the boundaries of advanced Mental Health Literacy. We will learn to identify critical decision points for interpreting risk signals and structuring support pathways, providing a clear framework for navigating complex systems."
        },
        {
          "id": "mental-health-literacy-501-l01-c2",
          "kind": "concept",
          "title": "Mapping Causes and Uncertainties",
          "content": "Before planning an intervention, it's crucial to map the potential causal pathways and understand the areas of uncertainty. This section teaches you how to visualize these connections to better anticipate outcomes and make informed decisions."
        },
        {
          "id": "mental-health-literacy-501-l01-c3",
          "kind": "recap",
          "title": "Setting Standards for Evidence",
          "content": "We'll recap the importance of linking any claims to measurable evidence. This includes clearly stating any uncertainties and setting up review checkpoints to ensure the information guiding our interventions is both reliable and valid."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-501-l01-f1",
          "front": "Risk Signal Interpretation",
          "back": "The process of identifying and evaluating potential mental health risks by defining clear criteria and assumptions."
        },
        {
          "id": "mental-health-literacy-501-l01-f2",
          "front": "Support Pathway",
          "back": "A structured plan that guides an individual through the steps of receiving mental health support, designed to be reliable under stress."
        },
        {
          "id": "mental-health-literacy-501-l01-f3",
          "front": "Outcome Monitoring",
          "back": "The systematic evaluation of an intervention's true impact and potential side effects, based on measurable evidence."
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l02",
      "title": "Designing Support Systems",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l02-a1",
          "type": "template",
          "title": "Support Pathway Design Template",
          "content": "A fillable template for designing a support pathway, including sections for roles, checkpoints, escalation triggers, and success metrics."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l02-c1",
          "kind": "practice",
          "title": "Workflow Design Lab",
          "content": "In this interactive lab, you will design a specialized workflow to address a mental health challenge. You will then test your design against various challenging conditions to build a plan that is resilient and effective in the real world."
        },
        {
          "id": "mental-health-literacy-501-l02-c2",
          "kind": "recap",
          "title": "Building in Safety Checkpoints",
          "content": "This recap covers the essential safety components of your workflow design. We'll review how to integrate clear criteria for decision gates, conditions for rolling back a failing intervention, and thresholds for escalating a case."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Controls to Their Purpose",
          "description": "Match each system control with its primary function in a support pathway.",
          "pairs": [
            {
              "left": "Pre-Commit Gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback Trigger",
              "right": "Limits harm when outcomes are negative"
            },
            {
              "left": "Baseline Dashboard",
              "right": "Helps prove the intervention's impact"
            },
            {
              "left": "Retrospective Loop",
              "right": "Improves the quality of future decisions"
            }
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l03",
      "title": "Case Study: A Community in Crisis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l03-a1",
          "type": "document",
          "title": "Case Study Brief",
          "content": "A detailed document outlining the case of a multi-institution support network designing early intervention and crisis escalation protocols."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l03-c1",
          "kind": "example",
          "title": "Introducing the Case",
          "content": "We will analyze a case involving a support network that is designing early intervention strategies and crisis escalation protocols. Your task is to identify the constraints, risks, and governance boundaries that affect their implementation."
        },
        {
          "id": "mental-health-literacy-501-l03-c2",
          "kind": "concept",
          "title": "Using a Tradeoff Matrix to Compare Options",
          "content": "We will introduce the tradeoff matrix, a tool for evaluating options across multiple dimensions like performance, reliability, equity, and feasibility. This structured process is crucial for making balanced and informed decisions."
        },
        {
          "id": "mental-health-literacy-501-l03-c3",
          "kind": "recap",
          "title": "Planning for Failure and Recovery",
          "content": "This recap focuses on how to anticipate potential failures and plan for them. We will discuss how to map common problems to specific mitigation actions and identify measurable triggers that signal a successful recovery."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-501-l03-f1",
          "front": "Tradeoff Matrix",
          "back": "A structured tool for scoring and comparing different decision options against a common set of criteria."
        },
        {
          "id": "mental-health-literacy-501-l03-f2",
          "front": "Failure Signature",
          "back": "A specific, recurring indicator that warns of a known type of risk or system failure."
        },
        {
          "id": "mental-health-literacy-501-l03-f3",
          "front": "Recovery Trigger",
          "back": "A measurable threshold that, when met, initiates a pre-planned corrective action or confirms recovery."
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l04",
      "title": "Checkpoint: Core Concepts in Practice",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "mental-health-literacy-501-l04-q1",
          "text": "What is the most effective first step when interpreting potential mental health risk signals in a complex case?",
          "skillId": "risk-interpretation",
          "options": [
            {
              "id": "a",
              "text": "Act immediately based on intuition."
            },
            {
              "id": "b",
              "text": "Define clear assumptions and test them against different scenarios."
            },
            {
              "id": "c",
              "text": "Wait for more data, regardless of urgency."
            },
            {
              "id": "d",
              "text": "Focus only on the most obvious signals."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Advanced decisions require defining your assumptions and stress-testing them to ensure your interpretation is robust and defensible."
        },
        {
          "id": "mental-health-literacy-501-l04-q2",
          "text": "A high-quality support pathway requires which of the following elements?",
          "skillId": "system-design",
          "options": [
            {
              "id": "a",
              "text": "Clear role ownership, progress checkpoints, and threshold-based escalation."
            },
            {
              "id": "b",
              "text": "Vague roles and informal approvals."
            },
            {
              "id": "c",
              "text": "A process that never changes or gets reviewed."
            },
            {
              "id": "d",
              "text": "Allowing for untracked variations in the process."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable and effective support systems depend on clear ownership, defined checkpoints, and pre-agreed triggers for escalation."
        },
        {
          "id": "mental-health-literacy-501-l04-q3",
          "text": "A defensible approach to monitoring the outcome of an intervention includes:",
          "skillId": "outcome-monitoring",
          "options": [
            {
              "id": "a",
              "text": "Relying on anecdotes without comparison data."
            },
            {
              "id": "b",
              "text": "Comparison to a baseline, analysis of side-effects, and acknowledging uncertainties."
            },
            {
              "id": "c",
              "text": "Changing the success criteria after the results are known."
            },
            {
              "id": "d",
              "text": "Excluding difficult cases from the analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A credible analysis requires comparing results to a baseline, checking for unintended side-effects, and being transparent about uncertainty."
        },
        {
          "id": "mental-health-literacy-501-l04-q4",
          "text": "A mature ethical governance system connects:",
          "skillId": "ethical-governance",
          "options": [
            {
              "id": "a",
              "text": "The intent of a policy, measurable controls, and clear pathways for fixing problems."
            },
            {
              "id": "b",
              "text": "A policy document that has no enforcement mechanism."
            },
            {
              "id": "c",
              "text": "Goals that have no assigned owner."
            },
            {
              "id": "d",
              "text": "Actions that are not logged or reviewed for accountability."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links the high-level policy to measurable actions and a reliable process for remediation and accountability."
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l05",
      "title": "Ethical Governance and Leadership",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l05-a1",
          "type": "checklist",
          "title": "Ethical Leadership Checklist",
          "content": "A checklist to guide decision-making, connecting technical outcomes, policy adherence, ethical principles, and community resilience."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l05-c1",
          "kind": "concept",
          "title": "Analyzing Impact on Stakeholders",
          "content": "Learn to map how the benefits and burdens of a mental health initiative are distributed among different groups over time. This is key to ensuring that interventions are equitable and effective for everyone involved."
        },
        {
          "id": "mental-health-literacy-501-l05-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "This section explores the architecture of accountability. This includes how to trace decisions back to their source, establish rights for review, and define clear obligations for remediation when things go wrong."
        },
        {
          "id": "mental-health-literacy-501-l05-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Leadership",
          "content": "Effective leadership in mental health requires balancing technical, ethical, and policy considerations. We'll review a checklist that helps leaders navigate these complexities to promote positive public impact and community resilience."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-501-l05-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how outcomes (both positive and negative) are allocated across different populations and over time."
        },
        {
          "id": "mental-health-literacy-501-l05-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of a decision, including the evidence used, who made it, and the rationale behind it."
        },
        {
          "id": "mental-health-literacy-501-l05-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances achieving performance goals with ethical considerations and accountability."
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l06",
      "title": "Capstone Prep: Intervention Simulation",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l06-a1",
          "type": "tool",
          "title": "Interactive Simulation Tool",
          "content": "A web-based tool to set up and run intervention scenarios, allowing you to configure constraints, metrics, and escalation logic."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l06-c1",
          "kind": "practice",
          "title": "Setting Up Your Intervention Scenario",
          "content": "In this hands-on practice, you will configure a scenario to test an intervention. This includes defining the constraints, success metrics, and escalation logic, giving you experience in creating realistic testing environments."
        },
        {
          "id": "mental-health-literacy-501-l06-c2",
          "kind": "recap",
          "title": "Analyzing Simulation Results",
          "content": "After running your simulation, we will review the outcomes. This includes analyzing the benefits achieved, any unintended side effects, and ensuring all actions complied with governance standards. This reflection is essential for continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-501-l06-act1",
          "type": "scenario_practice",
          "title": "Simulating a High-Stakes Intervention",
          "description": "Evaluate intervention options in a simulated crisis, balancing risk interpretation, system design, and ethical governance priorities.",
          "instructions": [
            "First, define your objective and boundary conditions.",
            "Record the potential short-term and long-term tradeoffs of your chosen path.",
            "Specify the metrics and triggers that would validate your recommendation."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-501-l07",
      "title": "Capstone Project: Defense of an Intervention Plan",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "mental-health-literacy-501-l07-a1",
          "type": "document",
          "title": "Capstone Project Rubric",
          "content": "A detailed scoring guide that outlines the criteria for a successful capstone project, including analysis, design, and defense."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-501-l07-c1",
          "kind": "concept",
          "title": "Project Overview",
          "content": "Your final project is to develop a comprehensive intervention plan for a complex case study. You will apply all the concepts from this module, from risk interpretation to ethical governance, to create a defensible and robust plan."
        },
        {
          "id": "mental-health-literacy-501-l07-c2",
          "kind": "concept",
          "title": "Building Your Defense Brief",
          "content": "Your submission will be a defense brief. This document must include your analysis of the situation, your proposed support pathway, a plan for monitoring outcomes, and a discussion of the ethical considerations and tradeoffs involved."
        },
        {
          "id": "mental-health-literacy-501-l07-c3",
          "kind": "recap",
          "title": "Final Submission and Review",
          "content": "This section provides instructions for submitting your capstone brief. Your project will be evaluated based on the provided rubric, assessing the quality of your analysis, the feasibility of your plan, and the clarity of your reasoning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-501-l07-act1",
          "type": "project_submission",
          "title": "Submit Your Capstone Brief",
          "description": "Submit your complete intervention plan, including risk analysis, pathway design, monitoring plan, and ethical governance considerations, for expert review."
        }
      ]
    }
  ]
};
