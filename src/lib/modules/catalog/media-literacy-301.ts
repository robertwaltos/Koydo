import type { LearningModule } from "@/lib/modules/types";

export const media_literacy_301_Module: LearningModule = {
  "id": "media-literacy-301",
  "title": "Media Literacy: Systems and Governance",
  "description": "An advanced curriculum in Media Literacy focused on source credibility, narrative framing, misinformation analysis, and civic impact. This course uses rigorous scenario analysis and assessment-backed learning to achieve mastery.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Analyze and evaluate source credibility using explicit criteria and constraints.",
    "Develop systematic workflows for analyzing narrative framing with clear checkpoints.",
    "Assess the effectiveness of misinformation analysis against defined metrics.",
    "Apply governance patterns to improve the quality of civic decision-making.",
    "Communicate complex tradeoffs between technical, policy, and user-impact dimensions.",
    "Synthesize media literacy methods to formulate and defend recommendations."
  ],
  "lessons": [
    {
      "id": "media-literacy-301-l01",
      "title": "Foundations of Media Systems",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-301-l01-a1",
          "type": "image",
          "title": "Media Systems Concept Map",
          "content": "A visual diagram connecting core concepts like sources, narratives, platforms, and audiences."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l01-c1",
          "kind": "concept",
          "title": "Shared Vocabulary and System Boundaries",
          "content": "In this lesson, we will build a shared vocabulary for discussing Media Literacy. We will define the boundaries of our analysis and examine how source credibility and narrative framing shape our perception of real-world events. This foundation will improve our ability to communicate effectively about media's impact on society and empower us to critically analyze the information we encounter."
        },
        {
          "id": "media-literacy-301-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "Here, we will explore how to map the causal links between media events and their outcomes. You will learn to identify hidden assumptions that influence analysis and apply critical checks to understand real-world constraints before proposing solutions. This process encourages deep thinking and careful evaluation of complex media landscapes."
        },
        {
          "id": "media-literacy-301-l01-c3",
          "kind": "recap",
          "title": "Building an Evidence-Based Approach",
          "content": "This module introduces a workflow that prioritizes evidence. Every claim must be linked to observable indicators—data we can see and measure. We will also discuss how to account for the inherent uncertainty in any analysis. This approach ensures our conclusions are built on a solid foundation of verifiable evidence."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l01-f1",
          "front": "Source Credibility",
          "back": "The process of evaluating a source's trustworthiness, based on evidence, transparency, and accountability."
        },
        {
          "id": "media-literacy-301-l01-f2",
          "front": "Narrative Framing",
          "back": "The way a story is constructed and presented, including the language, imagery, and context used to influence audience perception."
        },
        {
          "id": "media-literacy-301-l01-f3",
          "front": "Misinformation Analysis",
          "back": "The systematic evaluation of false or misleading information to understand its origin, spread, and impact."
        }
      ]
    },
    {
      "id": "media-literacy-301-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-301-l02-a1",
          "type": "image",
          "title": "Workflow Diagram Template",
          "content": "A blank flowchart for learners to map out their analysis process, from identifying a claim to reaching a conclusion."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l02-c1",
          "kind": "practice",
          "title": "Constructing an Analysis Workflow",
          "content": "In this interactive lab, you will build a step-by-step method for analyzing media. You will learn to balance competing priorities, decide how to measure success, and make informed governance choices. After building your workflow, you will stress-test each step to see how it performs under pressure, preparing you for real-world challenges."
        },
        {
          "id": "media-literacy-301-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness Checks",
          "content": "In this recap, we will review our readiness for analysis. This involves mapping out responsibilities, setting a schedule for review checkpoints, defining criteria for reversing a decision if new evidence emerges, and maintaining logs to track our process. This systematic approach ensures accountability and high-quality work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each analytical method to its most likely effect on the quality of your conclusion.",
          "pairs": [
            {
              "left": "Pre-analysis stress testing",
              "right": "Lowers the probability of major errors"
            },
            {
              "left": "Scheduled review checkpoints",
              "right": "Prevents the spread of flawed information"
            },
            {
              "left": "Comparison to a baseline",
              "right": "Supports defensible claims about impact"
            },
            {
              "left": "Post-analysis review",
              "right": "Improves the quality of future analyses"
            }
          ]
        },
        {
          "id": "media-literacy-301-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort these real-world constraints into their correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Platform API rate limits",
              "bucket": "Technical"
            },
            {
              "text": "Data privacy regulations (GDPR)",
              "bucket": "Policy"
            },
            {
              "text": "Readability for a general audience",
              "bucket": "User Impact"
            },
            {
              "text": "Fact-checking time budget",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-301-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-301-l03-a1",
          "type": "image",
          "title": "Checklist of Key Concepts",
          "content": "A summary sheet reviewing the main ideas from the first two lessons to help prepare for the quiz."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-301-l03-q1",
          "text": "Which practice most strengthens the evaluation of source credibility in real-world scenarios?",
          "skillId": "media-literacy-301-skill-risk",
          "options": [
            {
              "id": "a",
              "text": "Relying on assumptions without documenting them"
            },
            {
              "id": "b",
              "text": "Defining clear criteria for evaluation and monitoring for bias"
            },
            {
              "id": "c",
              "text": "Evaluating a source's history only once per year"
            },
            {
              "id": "d",
              "text": "Avoiding analysis of controversial or complex topics"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and active monitoring for bias provide a rigorous and transparent foundation for credibility analysis."
        },
        {
          "id": "media-literacy-301-l03-q2",
          "text": "At an advanced level, media literacy work should prioritize:",
          "skillId": "media-literacy-301-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Analyzing system tradeoffs, how success is measured, and governance decisions"
            },
            {
              "id": "b",
              "text": "Speed of analysis over traceability in all cases"
            },
            {
              "id": "c",
              "text": "Avoiding validation after publishing an analysis"
            },
            {
              "id": "d",
              "text": "Focusing on a single metric without considering context"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Advanced media literacy requires a holistic view that includes system dynamics, measurement, and governance."
        },
        {
          "id": "media-literacy-301-l03-q3",
          "text": "What is the strongest indicator of a healthy process for analyzing narrative framing?",
          "skillId": "media-literacy-301-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Untracked changes and informal approvals"
            },
            {
              "id": "b",
              "text": "Clear ownership, a regular review cadence, and measurable thresholds"
            },
            {
              "id": "c",
              "text": "Skipping post-analysis review to save time"
            },
            {
              "id": "d",
              "text": "Changing evaluation criteria after seeing the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A robust process requires clear ownership, a consistent review schedule, and measurable standards for quality."
        },
        {
          "id": "media-literacy-301-l03-q4",
          "text": "When analyzing misinformation, which approach is the most defensible?",
          "skillId": "media-literacy-301-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using anecdotal examples as the sole evidence of impact"
            },
            {
              "id": "b",
              "text": "Comparing findings against a baseline and including a failure analysis"
            },
            {
              "id": "c",
              "text": "Removing difficult or ambiguous examples from the analysis"
            },
            {
              "id": "d",
              "text": "Ignoring long-term outcomes of the misinformation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing against baselines and analyzing failures reduces bias and reveals the true performance of an analysis."
        },
        {
          "id": "media-literacy-301-l03-q5",
          "text": "A mature strategy for assessing civic decision impact should include:",
          "skillId": "media-literacy-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "No clear path for escalating critical issues"
            },
            {
              "id": "b",
              "text": "Policy, measurement, and escalation pathways linked to different levels of impact"
            },
            {
              "id": "c",
              "text": "A one-time governance review at the beginning of a project"
            },
            {
              "id": "d",
              "text": "Separating the metrics from the decision-making process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Effective governance connects policy goals to measurement and defines clear actions for responding to different situations."
        }
      ]
    },
    {
      "id": "media-literacy-301-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-301-l04-a1",
          "type": "image",
          "title": "Sample Tradeoff Matrix",
          "content": "An example matrix comparing different media responses to a crisis based on speed, accuracy, and public trust."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l04-c1",
          "kind": "example",
          "title": "Case Study: A Breaking News Event",
          "content": "In this case study, we will analyze a fast-moving public event that has generated multiple, conflicting media narratives. You will practice distinguishing factual evidence from assumptions and identify the high-stakes risks associated with each narrative. This exercise will sharpen your ability to analyze how media shapes public perception in real time."
        },
        {
          "id": "media-literacy-301-l04-c2",
          "kind": "concept",
          "title": "The Decision Tradeoff Matrix",
          "content": "We will use a decision tradeoff matrix to evaluate different response strategies. By scoring alternatives against criteria like performance, reliability, cost, and equity, you will learn to make a structured and defensible choice for the best path forward. This tool is essential for making informed decisions under pressure."
        },
        {
          "id": "media-literacy-301-l04-c3",
          "kind": "recap",
          "title": "Learning from Common Pitfalls",
          "content": "In this recap, we will categorize common patterns of failure observed in our case study. By analyzing these patterns, we can turn isolated mistakes into reusable safeguards for future analyses. This practice helps us learn from errors and improves our decision-making processes over time."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool used to compare different options across multiple, often competing, criteria to support a clear decision."
        },
        {
          "id": "media-literacy-301-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a system, process, or analysis can fail to meet its intended goal, often in a repeatable pattern."
        },
        {
          "id": "media-literacy-301-l04-f3",
          "front": "Escalation Threshold",
          "back": "A predefined trigger (e.g., a certain level of risk or error) that requires a problem to be raised to a higher level of review."
        }
      ]
    },
    {
      "id": "media-literacy-301-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-301-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard Mockup",
          "content": "A visual of a simulation interface showing key metrics, intervention choices, and outcome graphs."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "In this interactive simulation, you will model a media scenario, defining your assumptions about uncertainty and setting metrics for success. These metrics will be directly linked to civic outcomes, allowing you to see the tangible impact of different media strategies in a controlled environment."
        },
        {
          "id": "media-literacy-301-l05-c2",
          "kind": "recap",
          "title": "The Decision Review Loop",
          "content": "At the end of each simulation round, we will review the evidence gathered. This includes checking if our actions aligned with our policy goals and identifying opportunities for improvement. This iterative process of action and reflection is key to continuous learning and adapting your strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l05-act1",
          "type": "scenario_practice",
          "title": "Policy and Operations Simulation",
          "description": "Run three different intervention strategies in a simulated media environment and justify which option best balances source credibility and positive civic impact.",
          "instructions": [
            "Define your primary objective and ethical guardrails before choosing an intervention.",
            "For each intervention, record the main tradeoff you had to make.",
            "Select a follow-up metric to confirm whether your choice was successful."
          ]
        },
        {
          "id": "media-literacy-301-l05-act2",
          "type": "matching_pairs",
          "title": "Mitigation Mapping",
          "description": "Match each potential problem with the strongest response to mitigate it.",
          "pairs": [
            {
              "left": "An unreliable information source",
              "right": "Introduce quality checks and quarantine suspect data"
            },
            {
              "left": "Ambiguous ethical guidelines",
              "right": "Define decision authority and rules for escalation"
            },
            {
              "left": "Key metrics are no longer accurate",
              "right": "Re-baseline measurements and monitor leading indicators"
            },
            {
              "left": "Decline in audience trust",
              "right": "Increase transparency and create feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-301-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-301-l06-a1",
          "type": "image",
          "title": "Scenario Analysis Flowchart",
          "content": "A flowchart illustrating the steps of analyzing a case, from identifying stakes to choosing a response."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-301-l06-q1",
          "text": "In a case analysis, what is the primary function of a decision tradeoff matrix?",
          "skillId": "media-literacy-301-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in all aspects"
            },
            {
              "id": "b",
              "text": "To systematically compare options across multiple, competing criteria"
            },
            {
              "id": "c",
              "text": "To eliminate the need for expert judgment"
            },
            {
              "id": "d",
              "text": "To focus only on the financial cost of each option"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate how different options perform against various important criteria, such as cost, speed, and equity."
        },
        {
          "id": "media-literacy-301-l06-q2",
          "text": "Identifying 'failure modes' in a case study is most useful for:",
          "skillId": "media-literacy-301-skill-failure-analysis",
          "options": [
            {
              "id": "a",
              "text": "Assigning blame to individuals for mistakes"
            },
            {
              "id": "b",
              "text": "Ignoring small errors to focus only on large ones"
            },
            {
              "id": "c",
              "text": "Developing reusable safeguards to prevent future errors"
            },
            {
              "id": "d",
              "text": "Proving that a system is flawless"
            }
          ],
          "correctOptionId": "c",
          "explanation": "By understanding common patterns of failure, we can design better processes and systems to be more resilient in the future."
        },
        {
          "id": "media-literacy-301-l06-q3",
          "text": "What is the main educational benefit of using a simulation for media literacy?",
          "skillId": "media-literacy-301-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "To experience a simplified version of reality with no consequences"
            },
            {
              "id": "b",
              "text": "To practice making decisions and see their potential outcomes in a controlled environment"
            },
            {
              "id": "c",
              "text": "To find a single, correct answer to a complex media problem"
            },
            {
              "id": "d",
              "text": "To prove that all media interventions are equally effective"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations provide a safe space to apply theoretical knowledge, test strategies, and learn from the outcomes without real-world risk."
        },
        {
          "id": "media-literacy-301-l06-q4",
          "text": "When analyzing a media case study, an 'escalation threshold' is best defined as:",
          "skillId": "media-literacy-301-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "The point at which an analysis is complete"
            },
            {
              "id": "b",
              "text": "A personal opinion about the severity of an issue"
            },
            {
              "id": "c",
              "text": "A predefined trigger that requires an issue to be reviewed by a higher authority"
            },
            {
              "id": "d",
              "text": "The final deadline for a project"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An escalation threshold is a key governance tool that ensures significant problems receive the appropriate level of attention and resources."
        },
        {
          "id": "media-literacy-301-l06-q5",
          "text": "A 'decision review loop' after a simulation round is designed to:",
          "skillId": "media-literacy-301-skill-review",
          "options": [
            {
              "id": "a",
              "text": "Confirm that your initial assumptions were all correct"
            },
            {
              "id": "b",
              "text": "Quickly move to the next round without reflection"
            },
            {
              "id": "c",
              "text": "Critique the performance of other participants"
            },
            {
              "id": "d",
              "text": "Reflect on outcomes, check alignment with goals, and identify improvements"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The review loop is a critical part of the learning process, enabling continuous improvement through reflection and adaptation."
        }
      ]
    },
    {
      "id": "media-literacy-301-l07",
      "title": "Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-301-l07-a1",
          "type": "image",
          "title": "Example Stakeholder Map",
          "content": "A diagram showing the different groups affected by a media policy decision and their respective interests and impacts."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, you will learn to analyze the various stakeholders involved in media decisions. We will map who benefits from certain policies, who bears the risks, and how different choices distribute outcomes across various groups. This is a crucial skill for responsible and ethical media analysis."
        },
        {
          "id": "media-literacy-301-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore how effective governance connects high-level policies to measurable controls on the ground. Understanding these connections, along with obligations for transparency and pathways for fixing mistakes, is essential for building accountability and trust in media systems. This helps connect our analytical work to real-world impact."
        },
        {
          "id": "media-literacy-301-l07-c3",
          "kind": "recap",
          "title": "Responsible Execution Checklist",
          "content": "Before deploying any media analysis or intervention, it is critical to use a checklist. This tool ensures you have considered all relevant legal, ethical, technical, and user-impact factors. By carefully reviewing these criteria, we can ensure our work is responsible, safe, and beneficial to the community."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-301-l07-f1",
          "front": "Stakeholder Map",
          "back": "A visual framework for identifying all parties affected by a decision and analyzing the impact on each group."
        },
        {
          "id": "media-literacy-301-l07-f2",
          "front": "Accountability Loop",
          "back": "A process that connects an action's outcome back to the responsible party and ensures corrective measures are taken if needed."
        },
        {
          "id": "media-literacy-301-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of delivering work that balances performance goals with duties of safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "media-literacy-301-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-301-l08-a1",
          "type": "image",
          "title": "Capstone Project Charter Template",
          "content": "A one-page document template for students to define their capstone project's scope, goals, risks, and metrics."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-301-l08-c1",
          "kind": "practice",
          "title": "Capstone Scope Definition",
          "content": "In this activity, you will create a detailed charter for your capstone project. This document will outline your main objectives, identify potential risks, establish metrics for success, and set up governance checkpoints. This structured planning process is essential for executing a successful and impactful final project."
        },
        {
          "id": "media-literacy-301-l08-c2",
          "kind": "recap",
          "title": "Defense Preparation",
          "content": "To conclude, you will work with a defense template designed to help you present your project clearly and persuasively. The template will prompt you to support your claims with evidence and articulate the tradeoffs you considered. This exercise prepares you to communicate your work effectively and defend your conclusions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-301-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page capstone charter with clear objectives, metrics, controls, and success criteria.",
          "instructions": [
            "State the primary objective and the boundaries of your project.",
            "Define at least three measurable indicators of success.",
            "Identify one significant ethical or policy risk and propose a mitigation plan."
          ]
        },
        {
          "id": "media-literacy-301-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Defend your proposed capstone approach against a series of critiques related to cost, risk, and equity.",
          "instructions": []
        }
      ]
    }
  ]
};
