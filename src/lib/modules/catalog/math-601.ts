import type { LearningModule } from "@/lib/modules/types";

export const math_601_Module: LearningModule = {
  "id": "math-601",
  "title": "Math Research and Leadership",
  "description": "A post-401 specialization focused on diagnosing complex mathematical systems, designing robust operational plans, analyzing impacts and tradeoffs, and exercising effective governance and leadership through advanced casework, simulations, and capstone defenses.",
  "subject": "Math",
  "tags": [
    "systems-thinking",
    "decision-science",
    "leadership",
    "ethics",
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
    "Apply structured methods to diagnose issues in complex, high-constraint systems.",
    "Design robust operational systems with measurable controls and contingency plans.",
    "Evaluate the impact and tradeoffs of interventions with research-grade rigor.",
    "Develop and implement accountable governance structures with clear escalation pathways.",
    "Lead decision-making processes by communicating tradeoffs and uncertainties clearly.",
    "Defend complex recommendations against expert critique using evidence-based arguments."
  ],
  "lessons": [
    {
      "id": "math-601-l01",
      "title": "Foundations of Mathematical Systems Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-601-l01-a1",
          "type": "image",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l01-c1",
          "kind": "concept",
          "title": "Defining the Problem Space",
          "content": "To solve a complex problem, you must first define its boundaries. This involves identifying the key components of the system, the constraints it operates under (like budget, time, or regulations), and the goals you are trying to achieve. A clear scope prevents confusion and focuses your analytical efforts where they matter most.",
          "visualPrompt": "A diagram showing a central problem (e.g., 'City Traffic Congestion') surrounded by a clear boundary line. Inside the boundary are elements like 'Public Transit,' 'Road Network,' and 'Traffic Lights.' Outside are related but out-of-scope items like 'National Highway Policy.'"
        },
        {
          "id": "math-601-l01-c2",
          "kind": "concept",
          "title": "Modeling Causality and Uncertainty",
          "content": "Real-world systems are full of cause-and-effect relationships and uncertainty. We will learn to map these causal pathways to understand how different actions lead to specific outcomes. We will also learn to quantify uncertainty using ranges and probabilities, which is essential for assessing risk and planning effective interventions.",
          "visualPrompt": "An animated causal loop diagram where adjusting one variable (e.g., 'Bus Frequency') visibly impacts another ('Rider Satisfaction') and a third ('Road Congestion'). A graph next to it shows a predicted outcome with a shaded 'uncertainty range' around the trend line."
        },
        {
          "id": "math-601-l01-c3",
          "kind": "recap",
          "title": "Setting Evidence Thresholds",
          "content": "Strong claims require strong evidence. In this module, every recommendation must be supported by measurable data. We will establish clear standards for what constitutes sufficient evidence, including setting confidence bounds for our conclusions and defining checkpoints for review to ensure our analysis is rigorous and reliable.",
          "visualPrompt": "A chart showing a performance metric over time. A horizontal line indicates the 'Success Threshold,' and the data points have vertical error bars representing confidence intervals. A pop-up explains that the goal is met only when the entire confidence interval is above the threshold."
        }
      ],
      "flashcards": [
        {
          "id": "math-601-l01-f1",
          "front": "Math Systems Diagnostics",
          "back": "A structured approach to identifying the root causes of issues in a complex system by defining clear assumptions and measurable constraints."
        },
        {
          "id": "math-601-l01-f2",
          "front": "Math Operations Design",
          "back": "Designing a reliable process or workflow that performs consistently, especially under stress, by including checkpoints and clear procedures."
        },
        {
          "id": "math-601-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "A disciplined method for evaluating the full consequences of a decision, including both intended benefits and unintended costs."
        }
      ]
    },
    {
      "id": "math-601-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "math-601-l02-a1",
          "type": "practice",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l02-c1",
          "kind": "practice",
          "title": "Workflow Design and Stress Testing",
          "content": "In this lab, you will design a specialized workflow for a given mathematical task. You will then conduct a stress test by introducing unexpected challenges, such as missing data or tight deadlines, to see how well your workflow holds up under pressure and identify potential points of failure.",
          "visualPrompt": "An interactive flowchart builder where the user drags and drops steps like 'Data Collection,' 'Analysis,' and 'Review.' A 'Stress Test' button introduces red 'error' icons on certain steps, forcing the user to build in contingency paths."
        },
        {
          "id": "math-601-l02-c2",
          "kind": "recap",
          "title": "Control Gate Architecture",
          "content": "A robust workflow isn't just a series of steps; it's a governed process. We will recap how to build in 'control gates'—formal checkpoints where progress is reviewed against set criteria. These gates include rules for when to proceed, when to roll back to a previous step, and when to escalate a problem to leadership.",
          "visualPrompt": "A process diagram with diamond-shaped decision points labeled 'Control Gate.' Arrows leaving the gate are labeled 'Proceed,' 'Rollback,' and 'Escalate to Review Board,' each leading to a different part of the workflow."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-601-l02-act1",
          "type": "matching_pairs",
          "title": "Control-to-Outcome Mapping",
          "description": "Match each operational control with its primary benefit for system reliability and governance.",
          "pairs": [
            {
              "left": "Pre-Commit Gate",
              "right": "Prevents avoidable downstream failures"
            },
            {
              "left": "Rollback Trigger",
              "right": "Limits the damage of an unexpected failure"
            },
            {
              "left": "Baseline Dashboard",
              "right": "Allows for clear attribution of an intervention's impact"
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
      "id": "math-601-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "math-601-l03-a1",
          "type": "practice",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "math-601-l03-q1",
          "text": "Which practice most improves the quality of a complex systems diagnosis?",
          "skillId": "math-601-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceeding without a baseline or stated assumptions"
            },
            {
              "id": "b",
              "text": "Clearly defining assumptions, constraints, and measurable indicators"
            },
            {
              "id": "c",
              "text": "Optimizing only for speed in every context"
            },
            {
              "id": "d",
              "text": "Ignoring uncertainty and potential edge cases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions are built on a foundation of explicit assumptions, constraints, and metrics, which allows for rigorous analysis."
        },
        {
          "id": "math-601-l03-q2",
          "text": "A reliable operational plan requires which of the following elements?",
          "skillId": "math-601-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, a regular review cadence, and pre-defined escalation thresholds"
            },
            {
              "id": "b",
              "text": "Vague roles and processes that change without notice"
            },
            {
              "id": "c",
              "text": "No process for learning from past performance"
            },
            {
              "id": "d",
              "text": "No contingency plans for when things go wrong"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution depends on clear ownership and threshold-driven governance to manage complexity and risk."
        },
        {
          "id": "math-601-l03-q3",
          "text": "A rigorous analysis of a project's impact should always include:",
          "skillId": "math-601-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "A few success stories without any comparison data"
            },
            {
              "id": "b",
              "text": "Comparison to a baseline, analysis of side effects, and stated uncertainty bounds"
            },
            {
              "id": "c",
              "text": "Changing the definition of success after the results are in"
            },
            {
              "id": "d",
              "text": "Excluding inconvenient scenarios from the analysis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous analysis requires comparing outcomes to a baseline, accounting for unintended side effects, and being transparent about uncertainty."
        },
        {
          "id": "math-601-l03-q4",
          "text": "An effective governance system connects:",
          "skillId": "math-601-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The intent of a policy, the measurable controls to enforce it, and the pathways to fix violations"
            },
            {
              "id": "b",
              "text": "A policy statement with no way to measure or enforce it"
            },
            {
              "id": "c",
              "text": "Ambitious targets without assigning ownership or designing an escalation process"
            },
            {
              "id": "d",
              "text": "Operations that lack transparent accountability"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between the high-level intent, on-the-ground measurement, and corrective action."
        },
        {
          "id": "math-601-l03-q5",
          "text": "What is the most defensible way to compare competing project proposals?",
          "skillId": "math-601-skill-comparison",
          "options": [
            {
              "id": "a",
              "text": "Choose the option presented by the most persuasive speaker"
            },
            {
              "id": "b",
              "text": "Score all alternatives against the same criteria, including risks, side effects, and uncertainty"
            },
            {
              "id": "c",
              "text": "Use different evaluation criteria for each proposal to make them all look good"
            },
            {
              "id": "d",
              "text": "Prioritize whichever option has the shortest proposal document"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Fair and defensible comparisons require using a consistent set of metrics and fully accounting for risks and uncertainty for all options."
        },
        {
          "id": "math-601-l03-q6",
          "text": "In a high-stakes project, which communication protocol is strongest?",
          "skillId": "math-601-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "Announce final conclusions without sharing the underlying assumptions"
            },
            {
              "id": "b",
              "text": "Proactively publish assumptions, confidence ranges, and key decision checkpoints to all stakeholders"
            },
            {
              "id": "c",
              "text": "Share only the final outcome after the project is complete"
            },
            {
              "id": "d",
              "text": "Limit all updates to a single, informal channel"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strong communication in high-stakes environments requires transparency about assumptions, uncertainty, and the governance process."
        },
        {
          "id": "math-601-l03-q7",
          "text": "When a system fails, a mature remediation process should prioritize:",
          "skillId": "math-601-skill-remediation",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to an individual without updating the system"
            },
            {
              "id": "b",
              "text": "Root-cause analysis, redesigning controls to prevent recurrence, and verifying the fix"
            },
            {
              "id": "c",
              "text": "Implementing a one-time fix without retesting the system under stress"
            },
            {
              "id": "d",
              "text": "Closing the issue after a certain amount of time has passed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mature remediation focuses on systemic improvement by linking the root cause of a failure to a verifiable change in system controls."
        },
        {
          "id": "math-601-l03-q8",
          "text": "Which portfolio strategy best balances performance and resilience?",
          "skillId": "math-601-skill-portfolio",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term gains, regardless of the risk of a single point of failure"
            },
            {
              "id": "b",
              "text": "Optimize for expected value while enforcing risk limits and maintaining contingency options"
            },
            {
              "id": "c",
              "text": "Ignore the possibility that multiple projects could fail at the same time for the same reason"
            },
            {
              "id": "d",
              "text": "Commit all resources to a single, irreversible path"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced portfolio strategy combines the pursuit of high performance with explicit risk management and contingency planning."
        }
      ]
    },
    {
      "id": "math-601-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "math-601-l04-a1",
          "type": "image",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l04-c1",
          "kind": "concept",
          "title": "Deconstructing a Case",
          "content": "In this lesson, we will learn to analyze complex cases involving competing goals and constraints. The first step is to deconstruct the scenario into its fundamental parts: Who are the stakeholders? What are their objectives? What resources are available? What are the hard limits? This structured approach is key to understanding the core challenge.",
          "visualPrompt": "An animation showing a complex paragraph describing a business problem being automatically highlighted and sorted into columns labeled 'Stakeholders,' 'Objectives,' 'Constraints,' and 'Key Questions.'"
        },
        {
          "id": "math-601-l04-c2",
          "kind": "practice",
          "title": "Framing and Evaluating Tradeoffs",
          "content": "Nearly every important decision involves tradeoffs. We will practice framing these choices clearly, comparing different options against critical criteria like cost, safety, reliability, and fairness. This comparative analysis helps make the consequences of each choice explicit and leads to more thoughtful decisions.",
          "visualPrompt": "An interactive decision matrix. The user populates rows with 'Option A,' 'Option B,' etc., and columns with criteria like 'Cost' and 'Safety.' As they score each option, a summary chart updates to show the relative strengths and weaknesses."
        },
        {
          "id": "math-601-l04-c3",
          "kind": "recap",
          "title": "The Structured Decision Memo",
          "content": "A recommendation is only as good as its justification. We will review a standard pattern for a decision memo that ensures clarity and rigor. Every recommendation should clearly state the underlying assumptions, summarize the supporting evidence, describe the risk controls, and outline a fallback plan in case things go wrong.",
          "visualPrompt": "A document template for a decision memo with clear headings: 1. Recommendation, 2. Background, 3. Alternatives Considered, 4. Evidence & Analysis, 5. Risks & Mitigation, 6. Implementation Plan."
        }
      ]
    },
    {
      "id": "math-601-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "math-601-l05-a1",
          "type": "practice",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Scenario",
          "content": "This interactive simulation puts you in charge of a complex system. You will operate a set of controls to balance competing objectives, like maximizing performance while staying within safety and budget constraints. This hands-on experience connects theory to practice by forcing you to make decisions with real-time consequences.",
          "visualPrompt": "A simulation dashboard for a power grid. The user adjusts sliders for 'Renewable Energy Input' and 'Fossil Fuel Output' to meet a fluctuating 'Energy Demand' graph, while keeping a 'Grid Stability' meter in the green zone."
        },
        {
          "id": "math-601-l05-c2",
          "kind": "recap",
          "title": "Adaptive Response and Control",
          "content": "In a dynamic world, plans must be adaptable. As the simulation unfolds, you will need to respond to unexpected events. We will recap how effective responses involve updating your strategy and controls based on new information, while maintaining clear records of your decisions to ensure traceability and accountability.",
          "visualPrompt": "An animation showing the simulation dashboard from the previous chunk. A sudden 'heatwave' event causes the 'Energy Demand' to spike. The user is prompted to activate a 'Contingency Reserve' control, and a log entry automatically appears on screen noting the time and action taken."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-601-l05-act1",
          "type": "scenario",
          "title": "Adverse-Condition Decision Run",
          "description": "Manage a high-pressure scenario where you must tune system controls to maintain stability and performance under rapidly changing and uncertain conditions."
        }
      ]
    },
    {
      "id": "math-601-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "math-601-l06-a1",
          "type": "practice",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "questions": [
        {
          "id": "math-601-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "math-601-skill-case-foundation",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without any explicit assumptions"
            },
            {
              "id": "b",
              "text": "A clear baseline for comparison, explicit constraints, and measurable success criteria"
            },
            {
              "id": "c",
              "text": "High confidence in the outcome without any supporting evidence"
            },
            {
              "id": "d",
              "text": "Optimizing for a single metric while ignoring all others"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations are built on a clear and explicit foundation of assumptions, constraints, and measurable targets."
        },
        {
          "id": "math-601-l06-q2",
          "text": "A resilient strategy for executing a complex plan should always include:",
          "skillId": "math-601-skill-case-resilience",
          "options": [
            {
              "id": "a",
              "text": "A process with checkpoints, fallback options, and clear escalation criteria"
            },
            {
              "id": "b",
              "text": "A one-way execution path with no ability to roll back from mistakes"
            },
            {
              "id": "c",
              "text": "No clear ownership mapped across the teams involved"
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in execution depends on having planned checkpoints, fallback options, and an explicit process for escalating problems."
        },
        {
          "id": "math-601-l06-q3",
          "text": "When evaluating the impact of an intervention, which method is most rigorous?",
          "skillId": "math-601-skill-case-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Telling a single success story without providing any control data"
            },
            {
              "id": "b",
              "text": "Using comparative baselines plus an analysis of side effects and uncertainty"
            },
            {
              "id": "c",
              "text": "Presenting only the final outcome without any evidence from the process"
            },
            {
              "id": "d",
              "text": "Changing the project's scope after the fact to better fit the outcomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires objective comparison against a baseline, a full accounting of side effects, and transparent disclosure of uncertainty."
        },
        {
          "id": "math-601-l06-q4",
          "text": "Advanced governance is strongest when it:",
          "skillId": "math-601-skill-case-governance",
          "options": [
            {
              "id": "a",
              "text": "Directly aligns decision-making authority, performance measurement, and the obligation to remediate failures"
            },
            {
              "id": "b",
              "text": "Separates high-level policy from the operational controls meant to enforce it"
            },
            {
              "id": "c",
              "text": "Avoids external review and operates without transparency"
            },
            {
              "id": "d",
              "text": "Treats accountability as optional, especially under pressure"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates a tight link between authority, measurable controls, and the responsibility for corrective action."
        },
        {
          "id": "math-601-l06-q5",
          "text": "When presenting a case analysis with multiple competing options, what is the most effective way to frame the final recommendation?",
          "skillId": "math-601-skill-case-comm",
          "options": [
            {
              "id": "a",
              "text": "Insist on one 'perfect' solution and dismiss all others."
            },
            {
              "id": "b",
              "text": "Present the recommended option while clearly articulating the specific tradeoffs made against other viable alternatives."
            },
            {
              "id": "c",
              "text": "Provide a large volume of raw data and let the audience draw their own conclusions."
            },
            {
              "id": "d",
              "text": "Focus only on the positive aspects of the recommended option, ignoring potential risks."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective leadership involves making and communicating clear choices, which requires acknowledging the value of other options and justifying the specific tradeoffs made."
        },
        {
          "id": "math-601-l06-q6",
          "text": "In a dynamic simulation, you notice that your initial strategy is leading to a negative outcome. What is the most resilient response?",
          "skillId": "math-601-skill-sim-adapt",
          "options": [
            {
              "id": "a",
              "text": "Continue with the initial strategy, hoping the situation improves on its own."
            },
            {
              "id": "b",
              "text": "Stop the simulation immediately to avoid a bad score."
            },
            {
              "id": "c",
              "text": "Analyze the new data, adjust your operational controls based on pre-defined fallback plans, and document the change."
            },
            {
              "id": "d",
              "text": "Blame the simulation's design for being unrealistic."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Resilience in operations means actively monitoring outcomes and using established contingency plans to adapt to changing conditions, not ignoring negative data."
        },
        {
          "id": "math-601-l06-q7",
          "text": "What is the primary purpose of 'stress-testing' a mathematical model or system in a simulation?",
          "skillId": "math-601-skill-sim-stress",
          "options": [
            {
              "id": "a",
              "text": "To prove that the system works perfectly under all possible conditions."
            },
            {
              "id": "b",
              "text": "To identify the system's breaking points and hidden vulnerabilities before they occur in the real world."
            },
            {
              "id": "c",
              "text": "To generate the most optimistic performance data possible for a presentation."
            },
            {
              "id": "d",
              "text": "To confirm that the system only works under ideal, expected conditions."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Stress-testing is a critical diagnostic tool used to discover weaknesses by intentionally exposing a system to extreme or unexpected conditions."
        },
        {
          "id": "math-601-l06-q8",
          "text": "Your case analysis reveals that the most profitable solution has a significant negative impact on a specific community. How should this be handled in your recommendation?",
          "skillId": "math-601-skill-case-ethics",
          "options": [
            {
              "id": "a",
              "text": "Ignore the negative impact to make the recommendation seem more appealing."
            },
            {
              "id": "b",
              "text": "Mention the impact briefly in an appendix but not in the main summary."
            },
            {
              "id": "c",
              "text": "Quantify the negative impact as a key tradeoff, propose specific mitigation strategies, and present it as a central factor in the decision."
            },
            {
              "id": "d",
              "text": "Recommend the profitable solution but suggest someone else should handle the community impact later."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Responsible analysis requires transparently reporting all significant impacts, including negative ones, and integrating mitigation plans directly into the recommendation."
        }
      ]
    },
    {
      "id": "math-601-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "math-601-l07-a1",
          "type": "image",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l07-c1",
          "kind": "concept",
          "title": "Analyzing Stakeholder Impact",
          "content": "Decisions don't happen in a vacuum. In this lesson, you will learn to map the distribution of a decision's consequences—including benefits, costs, and risks—across different stakeholder groups. Understanding who is affected and how is a critical component of responsible leadership and ethical decision-making.",
          "visualPrompt": "A map showing a proposed factory location. Radiating circles show the impact on different groups: 'Local Residents' (noise, jobs), 'Environment' (pollution), and 'City Treasury' (tax revenue). The impacts are color-coded as positive, negative, or mixed."
        },
        {
          "id": "math-601-l07-c2",
          "kind": "concept",
          "title": "Designing for Accountability",
          "content": "Accountability isn't an accident; it's a feature of a well-designed system. We will explore how to build accountability into a process by ensuring that every major decision is traceable, that there are clear rights for review and appeal, and that there are explicit obligations for fixing any harm caused.",
          "visualPrompt": "A flowchart illustrating an 'Accountability Loop.' It starts with 'Decision Made,' moves to 'Outcome Monitored,' then to a 'Review Gate.' If the outcome is negative, the path leads to 'Remediation Action' and then back to 'Outcome Monitored' to verify the fix."
        },
        {
          "id": "math-601-l07-c3",
          "kind": "recap",
          "title": "The Responsible Leadership Checklist",
          "content": "To conclude, we will introduce a checklist for responsible leadership. This tool helps ensure your final recommendations align with ethical principles, comply with relevant policies, and incorporate resilience. It serves as a final check to confirm that your analysis considers the full impact on the broader community.",
          "visualPrompt": "A simple, elegant checklist with icons. Items include: 'Transparent Assumptions,' 'Fair Tradeoff Analysis,' 'Stakeholder Impact Assessed,' 'Accountability Plan in Place,' and 'Ethical Review Complete.'"
        }
      ],
      "flashcards": [
        {
          "id": "math-601-l07-f1",
          "front": "Impact Distribution",
          "back": "The way the benefits, costs, and risks of a decision are spread across different groups of people and over time."
        },
        {
          "id": "math-601-l07-f2",
          "front": "Decision Traceability",
          "back": "A clear, auditable record showing who made a decision, when, why, and based on what evidence."
        },
        {
          "id": "math-601-l07-f3",
          "front": "Responsible Leadership",
          "back": "Making decisions that effectively balance achieving performance goals with ethical duties and public accountability."
        }
      ]
    },
    {
      "id": "math-601-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "math-601-l08-a1",
          "type": "practice",
          "title": "Core Principle",
          "content": "Use a structured method, make assumptions explicit, and validate recommendations with measurable evidence."
        }
      ],
      "chunks": [
        {
          "id": "math-601-l08-c1",
          "kind": "practice",
          "title": "Assembling Your Defense Brief",
          "content": "In this activity, you will synthesize everything you've learned to create a defense brief for a complex capstone case. You will structure your argument by stating your core claims, presenting the key evidence, defining the bounds of your uncertainty, and proposing a robust implementation and risk mitigation plan.",
          "visualPrompt": "A user interface for building a presentation. The user populates slides with titles like 'Executive Summary,' 'Core Recommendation,' 'Supporting Data,' and 'Risk Analysis.' A progress bar shows how complete their brief is."
        },
        {
          "id": "math-601-l08-c2",
          "kind": "recap",
          "title": "Rehearsing for Expert Review",
          "content": "The final step is to prepare for critique. You will rehearse responding to challenging questions from a simulated expert panel. This will involve defending your technical analysis, explaining your governance choices, and addressing concerns from different stakeholder perspectives, building your confidence for the final defense.",
          "visualPrompt": "An animation of a person standing at a podium. Thought bubbles appear with potential questions from an expert panel, such as 'What is your plan B?' and 'How did you weigh the ethical implications?' The person's own thought bubble shows a structured answer."
        }
      ],
      "interactiveActivities": [
        {
          "id": "math-601-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your capstone recommendation to a simulated panel of experts who will challenge your assumptions, analysis, and conclusions."
        }
      ]
    }
  ]
};
