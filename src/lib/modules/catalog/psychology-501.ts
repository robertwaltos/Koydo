import type { LearningModule } from "@/lib/modules/types";

export const psychology_501_Module: LearningModule = {
  "id": "psychology-501",
  "title": "Psychology Specialization Studio",
  "description": "An advanced specialization course focusing on diagnosing psychological systems, designing interventions, analyzing impacts and tradeoffs, and applying principles of governance and leadership through complex case studies, simulations, and expert-led critiques.",
  "subject": "Psychology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "psychology",
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
    "Apply advanced methods for diagnosing psychological systems in high-constraint environments.",
    "Design robust psychological interventions with measurable checkpoints and controls.",
    "Evaluate the impact and tradeoffs of psychological interventions with research-grade rigor.",
    "Develop and implement systems for ethical governance and leadership in psychology.",
    "Lead cross-functional decision reviews, clearly communicating tradeoffs and uncertainties.",
    "Defend recommendations to expert panels using evidence-based arguments."
  ],
  "lessons": [
    {
      "id": "psychology-501-l01",
      "title": "Advanced Foundations of Psychological Systems",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-501-l01-a1",
          "type": "image",
          "title": "Systems Diagnostics Flowchart",
          "content": "A visual flowchart illustrating the process of diagnosing a psychological system, from defining its boundaries to mapping causal relationships and identifying key variables."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l01-c1",
          "kind": "concept",
          "title": "Defining the Scope of Psychological Systems",
          "content": "In this lesson, we will explore the advanced boundaries of psychology as a field. We will focus on how to effectively diagnose complex psychological systems by clearly defining what is inside and outside the scope of our analysis, which is the first step toward any effective intervention."
        },
        {
          "id": "psychology-501-l01-c2",
          "kind": "concept",
          "title": "Modeling Cause, Effect, and Uncertainty",
          "content": "Here, you will learn to map out causal pathways to understand how different factors influence each other. We will also model ranges of uncertainty and system dependencies, which are critical for developing realistic and robust strategies for addressing psychological issues."
        },
        {
          "id": "psychology-501-l01-c3",
          "kind": "recap",
          "title": "The Role of Evidence and Measurement",
          "content": "In our recap, we will emphasize that all claims must be linked to measurable indicators. We will also discuss the importance of establishing confidence bounds and review checkpoints to ensure our findings are reliable, valid, and grounded in solid evidence."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-501-l01-f1",
          "front": "Psychological Systems Diagnostics",
          "back": "The structured process of analyzing a complex psychological issue by defining its boundaries, variables, and causal relationships."
        },
        {
          "id": "psychology-501-l01-f2",
          "front": "Psychological Operations Design",
          "back": "The design of a psychological intervention that ensures it works effectively, even in challenging or high-stress situations."
        },
        {
          "id": "psychology-501-l01-f3",
          "front": "Impact and Tradeoff Analysis",
          "back": "The discipline of evaluating an intervention's effects, including both its intended benefits and unintended consequences or costs."
        }
      ]
    },
    {
      "id": "psychology-501-l02",
      "title": "Specialist Methods Lab",
      "type": "interactive",
      "duration": 17,
      "learningAids": [
        {
          "id": "psychology-501-l02-a1",
          "type": "practice",
          "title": "Workflow Design Canvas",
          "content": "A downloadable template to help you design and map out a psychological intervention, including checkpoints, escalation paths, and rollback criteria."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l02-c1",
          "kind": "practice",
          "title": "Designing and Stress-Testing Methods",
          "content": "In this interactive practice, you will design specialized workflows for specific psychological interventions. You will then stress-test these workflows in challenging scenarios to evaluate their resilience and identify potential points of failure, which is crucial for real-world application."
        },
        {
          "id": "psychology-501-l02-c2",
          "kind": "recap",
          "title": "Building in Safety and Control",
          "content": "In our recap, we will review how effective workflows must include safety features like review checkpoints, criteria for stopping or reversing a process (rollback), and clear triggers for escalating an issue to a higher level of review. These elements ensure our interventions are robust and responsible."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-501-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Safety Checks to Their Purpose",
          "description": "Match each control mechanism with its primary function in ensuring a reliable and well-governed intervention.",
          "pairs": [
            {
              "left": "Initial Review Checkpoint",
              "right": "Prevents predictable downstream failures before they start."
            },
            {
              "left": "Safety Stop Mechanism",
              "right": "Limits the potential negative impact if an intervention fails."
            },
            {
              "left": "Baseline Performance Dashboard",
              "right": "Helps prove that the intervention caused the observed impact."
            },
            {
              "left": "Post-Intervention Review",
              "right": "Improves the quality of future decisions and interventions."
            }
          ]
        }
      ]
    },
    {
      "id": "psychology-501-l03",
      "title": "Checkpoint 1: Specialist Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "psychology-501-l03-a1",
          "type": "practice",
          "title": "Key Concepts Review Sheet",
          "content": "A one-page summary of the core concepts from the first two lessons, including key terms and process diagrams, to help you prepare for the checkpoint."
        }
      ],
      "questions": [
        {
          "id": "psychology-501-l03-q1",
          "text": "When diagnosing a complex psychological system, what is the most effective practice for making high-quality decisions?",
          "skillId": "psychology-501-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Proceed without a baseline or stated assumptions."
            },
            {
              "id": "b",
              "text": "Clearly define assumptions, constraints, and measurable indicators."
            },
            {
              "id": "c",
              "text": "Optimize only for the speed of the diagnosis."
            },
            {
              "id": "d",
              "text": "Ignore uncertainty and potential edge cases."
            }
          ],
          "correctOptionId": "b",
          "explanation": "High-quality decisions in complex systems improve when assumptions, constraints, and metrics are made explicit from the start."
        },
        {
          "id": "psychology-501-l03-q2",
          "text": "A well-designed psychological intervention requires:",
          "skillId": "psychology-501-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Clear ownership, regular checkpoints, and pre-defined escalation triggers."
            },
            {
              "id": "b",
              "text": "Vague roles and the ability to make process changes on the fly."
            },
            {
              "id": "c",
              "text": "No formal review after the intervention is complete."
            },
            {
              "id": "d",
              "text": "No plan for what to do if the intervention fails."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Reliable execution requires clear ownership, planned checkpoints, and rules for when to escalate issues."
        },
        {
          "id": "psychology-501-l03-q3",
          "text": "A defensible analysis of a psychological intervention's impact includes:",
          "skillId": "psychology-501-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Personal stories without any comparison group."
            },
            {
              "id": "b",
              "text": "Comparison to a baseline, analysis of side effects, and stated uncertainty."
            },
            {
              "id": "c",
              "text": "Changing the definition of success after seeing the results."
            },
            {
              "id": "d",
              "text": "Excluding difficult or inconvenient data from the analysis."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis requires comparing results to a baseline, checking for side effects, and being transparent about uncertainty."
        },
        {
          "id": "psychology-501-l03-q4",
          "text": "A mature governance system for psychological practice connects:",
          "skillId": "psychology-501-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The intention of a policy, measurable controls, and clear paths for correction."
            },
            {
              "id": "b",
              "text": "Policy language that has no measurable way to be enforced."
            },
            {
              "id": "c",
              "text": "Goals without clear ownership or a plan for what to do if they are not met."
            },
            {
              "id": "d",
              "text": "Operations that are not transparent or accountable to anyone."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance creates an operational link between the intent of a policy, how it's measured, and what actions are taken when it's not followed."
        },
        {
          "id": "psychology-501-l03-q5",
          "text": "What is the best way to compare two competing psychological interventions?",
          "skillId": "psychology-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Choose the one that has the most compelling story."
            },
            {
              "id": "b",
              "text": "Evaluate both against the same metrics, including side effects and uncertainty."
            },
            {
              "id": "c",
              "text": "Use different metrics for each one after the results are in."
            },
            {
              "id": "d",
              "text": "Pick the one that is described in the shortest document."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A fair and defensible comparison requires using shared metrics, accounting for side effects, and disclosing uncertainty for all options."
        },
        {
          "id": "psychology-501-l03-q6",
          "text": "In a high-stakes psychological intervention, which communication strategy is most effective?",
          "skillId": "psychology-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Announce conclusions without sharing the underlying assumptions."
            },
            {
              "id": "b",
              "text": "Share assumptions, confidence levels, and decision checkpoints with stakeholders."
            },
            {
              "id": "c",
              "text": "Share only the final outcome after everything is finished."
            },
            {
              "id": "d",
              "text": "Limit all updates to a single, informal communication channel."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective communication in high-stakes situations requires transparency about assumptions, confidence, and key decision points."
        },
        {
          "id": "psychology-501-l03-q7",
          "text": "When an intervention fails, a mature correction process should prioritize:",
          "skillId": "psychology-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame without updating the system."
            },
            {
              "id": "b",
              "text": "Analyzing the root cause, redesigning controls, and verifying the fix."
            },
            {
              "id": "c",
              "text": "Implementing a one-time fix without retesting the system."
            },
            {
              "id": "d",
              "text": "Closing the issue after a certain amount of time has passed."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature correction process focuses on learning from failure by linking root cause analysis to system redesign and verification."
        },
        {
          "id": "psychology-501-l03-q8",
          "text": "When managing a portfolio of interventions, what is the best rule for balancing performance and risk?",
          "skillId": "psychology-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Maximize short-term results, regardless of the risks involved."
            },
            {
              "id": "b",
              "text": "Optimize for the best expected outcome while enforcing risk limits and having backup plans."
            },
            {
              "id": "c",
              "text": "Ignore the possibility that multiple interventions could fail at the same time."
            },
            {
              "id": "d",
              "text": "Commit all resources to a single intervention that cannot be reversed."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A balanced portfolio approach combines optimizing for value with setting explicit risk limits and maintaining contingency options."
        }
      ]
    },
    {
      "id": "psychology-501-l04",
      "title": "Advanced Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "psychology-501-l04-a1",
          "type": "image",
          "title": "Decision Matrix Template",
          "content": "A visual template of a decision matrix used to compare multiple intervention options across key criteria like safety, cost, effectiveness, and equity."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l04-c1",
          "kind": "concept",
          "title": "Analyzing Complex Scenarios",
          "content": "In this lesson, we will analyze complex scenarios with competing constraints. This involves understanding the impacts and tradeoffs of different psychological approaches, which is vital for making well-informed decisions. This skill helps you connect theory to the complex decisions you will face in practice."
        },
        {
          "id": "psychology-501-l04-c2",
          "kind": "practice",
          "title": "Weighing Pros and Cons",
          "content": "In this practice session, you will compare various intervention options across important dimensions such as safety, reliability, cost, equity, and governance. This structured comparison helps clarify the full implications of each choice and leads to better decision-making."
        },
        {
          "id": "psychology-501-l04-c3",
          "kind": "recap",
          "title": "Structuring a Professional Recommendation",
          "content": "In our recap, we will review a standard structure for a professional recommendation. Each recommendation should be supported by explicit assumptions, clear evidence, proposed risk controls, and fallback plans. This ensures your decisions are well-reasoned and prepared for complications."
        }
      ]
    },
    {
      "id": "psychology-501-l05",
      "title": "Simulation Clinic",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "psychology-501-l05-a1",
          "type": "practice",
          "title": "Simulation Control Panel Guide",
          "content": "A user guide explaining the variables and controls you can manipulate within the simulation, and how they affect the scenario's outcomes."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l05-c1",
          "kind": "practice",
          "title": "Managing a Live Simulation",
          "content": "In this interactive practice, you will manage a live scenario, making decisions to balance performance goals with governance constraints. This requires you to aim for effective outcomes while adhering to ethical and regulatory standards under pressure."
        },
        {
          "id": "psychology-501-l05-c2",
          "kind": "recap",
          "title": "Adapting Your Strategy in Real-Time",
          "content": "In our recap, we will focus on how to adapt your strategy as a situation evolves. This includes updating your approach and controls in response to new information, without losing track of your original goals or accountability for your decisions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-501-l05-act1",
          "type": "scenario",
          "title": "High-Pressure Decision Simulation",
          "description": "Navigate a challenging psychological scenario in real-time, adjusting your strategy based on new information and evolving constraints."
        }
      ]
    },
    {
      "id": "psychology-501-l06",
      "title": "Checkpoint 2: Case and Simulation Mastery",
      "type": "quiz",
      "duration": 11,
      "learningAids": [
        {
          "id": "psychology-501-l06-a1",
          "type": "practice",
          "title": "Case Study and Simulation Debrief Guide",
          "content": "A structured guide with questions to help you reflect on your performance in the case analysis and simulation exercises, focusing on decision quality and lessons learned."
        }
      ],
      "questions": [
        {
          "id": "psychology-501-l06-q1",
          "text": "In advanced casework, the first requirement for a defensible recommendation is:",
          "skillId": "psychology-501-skill-case1",
          "options": [
            {
              "id": "a",
              "text": "A preferred option without any stated assumptions."
            },
            {
              "id": "b",
              "text": "A clear baseline, explicit constraints, and pre-defined success criteria."
            },
            {
              "id": "c",
              "text": "High confidence in a decision without any supporting evidence."
            },
            {
              "id": "d",
              "text": "Focusing on improving only a single metric."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defensible recommendations must begin with an explicit foundation of assumptions, constraints, and measurable targets."
        },
        {
          "id": "psychology-501-l06-q2",
          "text": "A resilient strategy for a psychological intervention should always include:",
          "skillId": "psychology-501-skill-case2",
          "options": [
            {
              "id": "a",
              "text": "A process with checkpoints, fallback options, and clear escalation criteria."
            },
            {
              "id": "b",
              "text": "A one-way process that cannot be stopped or reversed."
            },
            {
              "id": "c",
              "text": "No clear assignment of roles or responsibilities across the team."
            },
            {
              "id": "d",
              "text": "Hidden assumptions and undocumented decisions."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Resilience in any plan depends on having checkpoints, fallback options, and an explicit process for escalating problems."
        },
        {
          "id": "psychology-501-l06-q3",
          "text": "When evaluating the impact of an intervention in a case study, which method is most rigorous?",
          "skillId": "psychology-501-skill-case3",
          "options": [
            {
              "id": "a",
              "text": "A single success story without any data or controls."
            },
            {
              "id": "b",
              "text": "Comparison against a baseline, plus analysis of side effects and uncertainty."
            },
            {
              "id": "c",
              "text": "A narrative of the outcome without evidence of the process."
            },
            {
              "id": "d",
              "text": "Changing the scope of the analysis to better fit the outcomes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rigorous evaluation requires comparing results to a baseline, analyzing side effects, and being transparent about uncertainty."
        },
        {
          "id": "psychology-501-l06-q4",
          "text": "In a complex case study, a strong governance plan is one that:",
          "skillId": "psychology-501-skill-case4",
          "options": [
            {
              "id": "a",
              "text": "Clearly aligns decision-making authority, measurement, and the obligation to remediate issues."
            },
            {
              "id": "b",
              "text": "Separates the stated policy from the operational controls used to enforce it."
            },
            {
              "id": "c",
              "text": "Avoids external review and operates without transparency."
            },
            {
              "id": "d",
              "text": "Treats accountability as optional, especially under pressure."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mature governance links who has authority, how success is measured, and who is responsible for corrective action."
        },
        {
          "id": "psychology-501-l06-q5",
          "text": "In a simulation where your initial strategy is failing, what is the best immediate action?",
          "skillId": "psychology-501-skill-advanced-5",
          "options": [
            {
              "id": "a",
              "text": "Continue with the same strategy, hoping the situation improves."
            },
            {
              "id": "b",
              "text": "Activate a pre-planned fallback or contingency plan."
            },
            {
              "id": "c",
              "text": "Stop the simulation to avoid a negative outcome."
            },
            {
              "id": "d",
              "text": "Blame the simulation's design for the failure."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective real-time management involves having and using contingency plans when the primary strategy fails."
        },
        {
          "id": "psychology-501-l06-q6",
          "text": "During a complex case analysis, you discover a significant, unexpected risk. What is the most responsible way to communicate this?",
          "skillId": "psychology-501-skill-advanced-6",
          "options": [
            {
              "id": "a",
              "text": "Ignore the risk to avoid complicating the recommendation."
            },
            {
              "id": "b",
              "text": "Immediately notify all stakeholders with an analysis of the risk and a proposed mitigation plan."
            },
            {
              "id": "c",
              "text": "Mention it briefly in a footnote of the final report."
            },
            {
              "id": "d",
              "text": "Only tell the person you think is responsible for the risk."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible communication requires promptly and transparently informing stakeholders of new risks, along with a plan to address them."
        },
        {
          "id": "psychology-501-l06-q7",
          "text": "After a simulation, a debrief reveals that your team made a poor decision due to shared bias. The most constructive next step is to:",
          "skillId": "psychology-501-skill-advanced-7",
          "options": [
            {
              "id": "a",
              "text": "Decide that the simulation was unrealistic."
            },
            {
              "id": "b",
              "text": "Identify the bias and design a new checkpoint in your decision-making process to guard against it."
            },
            {
              "id": "c",
              "text": "Assign blame to the team member who first suggested the biased idea."
            },
            {
              "id": "d",
              "text": "Agree to 'try harder' next time without changing any processes."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of a debrief is to learn and improve. The best way to do this is to turn the lesson into a structural change in your process."
        },
        {
          "id": "psychology-501-l06-q8",
          "text": "When allocating limited resources in a case study, the most strategic approach is to:",
          "skillId": "psychology-501-skill-advanced-8",
          "options": [
            {
              "id": "a",
              "text": "Spread resources thinly across all possible interventions."
            },
            {
              "id": "b",
              "text": "Concentrate resources on interventions that address the root cause and have the highest expected impact."
            },
            {
              "id": "c",
              "text": "Allocate all resources to the easiest and quickest intervention."
            },
            {
              "id": "d",
              "text": "Fund interventions based on which team makes the most persuasive argument."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Strategic resource allocation focuses on concentrating effort where it can be most effective, typically by addressing root causes."
        }
      ]
    },
    {
      "id": "psychology-501-l07",
      "title": "Governance and Public Impact",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "psychology-501-l07-a1",
          "type": "image",
          "title": "Stakeholder Impact Map",
          "content": "A diagram that maps out various stakeholder groups and analyzes how an intervention's benefits, costs, and risks are distributed among them over time."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l07-c1",
          "kind": "concept",
          "title": "Analyzing the Impact on Different Groups",
          "content": "In this lesson, you will learn to map how benefits, burdens, and delayed effects of an intervention are distributed among different stakeholder groups. This is crucial for ethically evaluating the full impact of psychological work on various communities."
        },
        {
          "id": "psychology-501-l07-c2",
          "kind": "concept",
          "title": "Designing Accountable Systems",
          "content": "Here, we will explore the architecture of accountability. This includes ensuring that decisions can be traced, that individuals have the right to review those decisions, and that there is an obligation to correct issues. This framework is essential for maintaining trust and integrity."
        },
        {
          "id": "psychology-501-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Ethical Leadership",
          "content": "This checklist serves as a guide to connect intervention outcomes with ethical considerations, policy adherence, and system resilience. It encourages thoughtful reflection on how our decisions impact individuals, communities, and the systems we operate in."
        }
      ],
      "flashcards": [
        {
          "id": "psychology-501-l07-f1",
          "front": "Impact Distribution",
          "back": "The analysis of how an intervention's positive and negative outcomes are allocated across different populations and over time."
        },
        {
          "id": "psychology-501-l07-f2",
          "front": "Decision Traceability",
          "back": "An auditable record of a decision, including the evidence, rationale, and ownership, allowing for transparent review."
        },
        {
          "id": "psychology-501-l07-f3",
          "front": "Responsible Leadership",
          "back": "A decision-making approach that balances performance goals with accountability and ethical obligations."
        }
      ]
    },
    {
      "id": "psychology-501-l08",
      "title": "Capstone Defense Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "psychology-501-l08-a1",
          "type": "practice",
          "title": "Capstone Defense Presentation Template",
          "content": "A slide deck template that guides you in structuring your final presentation, with sections for the problem statement, evidence, recommendation, risks, and mitigation plans."
        }
      ],
      "chunks": [
        {
          "id": "psychology-501-l08-c1",
          "kind": "practice",
          "title": "Preparing Your Capstone Argument",
          "content": "In this activity, you will assemble a comprehensive defense brief for your proposed intervention. This brief will include a well-supported claim, supporting evidence, an analysis of uncertainties, and recommended paths for remediation if issues arise."
        },
        {
          "id": "psychology-501-l08-c2",
          "kind": "recap",
          "title": "Practicing for Expert Review",
          "content": "During this rehearsal, you will practice responding to critiques from the perspective of experts, governance bodies, and other stakeholders. This preparation is essential for building confidence and learning to defend your position in a professional setting."
        }
      ],
      "interactiveActivities": [
        {
          "id": "psychology-501-l08-act1",
          "type": "debate_simulator",
          "title": "Expert Defense Panel",
          "description": "Present and defend your psychological intervention plan to a simulated panel of experts, responding to their questions and critiques."
        }
      ]
    }
  ]
};
