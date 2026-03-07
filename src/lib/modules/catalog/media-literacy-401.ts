import type { LearningModule } from "@/lib/modules/types";

export const media_literacy_401_Module: LearningModule = {
  "id": "media-literacy-401",
  "title": "Media Literacy Leadership and Capstone",
  "description": "An advanced curriculum in Media Literacy focused on analyzing source credibility, narrative framing, and misinformation. Culminates in a capstone project where learners apply methods to address real-world media challenges and their civic impact.",
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
    "Evaluate source credibility using a consistent framework of assumptions and evidence.",
    "Develop and refine workflows for analyzing how media narratives are framed.",
    "Analyze misinformation and measure the effectiveness of potential interventions.",
    "Assess the impact of media on civic decisions using established principles.",
    "Communicate the tradeoffs between technical, policy, and user-impact considerations.",
    "Synthesize media literacy concepts into a defensible capstone project with clear recommendations."
  ],
  "lessons": [
    {
      "id": "media-literacy-401-l01",
      "title": "Foundations of Advanced Media Literacy",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-401-l01-a1",
          "type": "image",
          "title": "The Credibility Lens",
          "content": "Visual diagram showing a news source being examined through a magnifying glass, which highlights key areas for evaluation: Author's Expertise, Publication's Reputation, Evidence & Citations, and Potential Bias."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l01-c1",
          "kind": "concept",
          "title": "Shared Vocabulary and Core Principles",
          "content": "In this lesson, we establish a shared vocabulary for analyzing media. We'll define the key concepts of source credibility, narrative framing, and misinformation. Understanding these foundational ideas is the first step to navigating the complex media landscape effectively and responsibly."
        },
        {
          "id": "media-literacy-401-l01-c2",
          "kind": "concept",
          "title": "Identifying Causal Links and Hidden Assumptions",
          "content": "Here, we'll practice tracing the connections between a media message and its potential real-world impact. This involves identifying the causal path from information to action, uncovering hidden assumptions in arguments, and checking constraints before proposing solutions."
        },
        {
          "id": "media-literacy-401-l01-c3",
          "kind": "recap",
          "title": "An Evidence-First Approach",
          "content": "This module introduces a workflow that prioritizes evidence. Every claim should be linked to observable facts or data. We will also learn to acknowledge the level of uncertainty with each claim, allowing us to make more informed and responsible judgments about the information we consume."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-401-l01-f1",
          "front": "Source Credibility",
          "back": "The process of evaluating a source's trustworthiness based on factors like expertise, evidence, and potential bias."
        },
        {
          "id": "media-literacy-401-l01-f2",
          "front": "Narrative Framing",
          "back": "The way a story is presented, including the specific details, language, and images chosen to influence audience perception."
        },
        {
          "id": "media-literacy-401-l01-f3",
          "front": "Misinformation Analysis",
          "back": "The systematic evaluation of false or misleading information to understand its origin, spread, and impact."
        }
      ]
    },
    {
      "id": "media-literacy-401-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-401-l02-a1",
          "type": "image",
          "title": "Workflow Builder",
          "content": "An interactive graphic of a flowchart where learners can drag and drop steps like 'Identify Claim,' 'Verify Source,' 'Check for Bias,' and 'Assess Impact' to build a repeatable analysis workflow."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l02-c1",
          "kind": "practice",
          "title": "Building Your Analysis Workflow",
          "content": "In this interactive lab, you will design a step-by-step process for analyzing media. This hands-on exercise prepares you for the capstone project by testing your method in scenarios with incomplete information, helping you build adaptable and resilient problem-solving skills."
        },
        {
          "id": "media-literacy-401-l02-c2",
          "kind": "recap",
          "title": "Operational Readiness",
          "content": "To ensure our analysis is thorough, we will establish a clear process. This includes defining who is responsible for each step, setting up regular checkpoints to monitor progress, and keeping a detailed log of the evidence we gather. These practices help maintain rigor and organization."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-401-l02-act1",
          "type": "matching_pairs",
          "title": "Method-to-Outcome Mapping",
          "description": "Match each analytical technique to its most likely outcome.",
          "pairs": [
            {
              "left": "Fact-checking claims before sharing",
              "right": "Reduces the spread of misinformation"
            },
            {
              "left": "Analyzing the funding of a source",
              "right": "Helps identify potential conflicts of interest"
            },
            {
              "left": "Comparing multiple sources on the same topic",
              "right": "Provides a more complete and balanced view"
            },
            {
              "left": "Reviewing past errors and corrections",
              "right": "Improves future analysis and judgment"
            }
          ]
        },
        {
          "id": "media-literacy-401-l02-act2",
          "type": "sorting_buckets",
          "title": "Constraint Sorting",
          "description": "Sort each factor into its correct category: Technical, Policy, or User Impact.",
          "buckets": [
            "Technical",
            "Policy",
            "User Impact"
          ],
          "items": [
            {
              "text": "Website loading speed",
              "bucket": "Technical"
            },
            {
              "text": "Adherence to privacy laws (GDPR)",
              "bucket": "Policy"
            },
            {
              "text": "Readability for people with visual impairments",
              "bucket": "User Impact"
            },
            {
              "text": "Rules for content moderation",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-401-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-401-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting the quiz, review the key concepts from the first two lessons. Focus on the definitions of source credibility, narrative framing, and the steps in an evidence-first workflow."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-401-l03-q1",
          "text": "Which practice most strengthens the evaluation of source credibility?",
          "skillId": "credibility-assessment",
          "options": [
            {
              "id": "a",
              "text": "Trusting a source because it's popular"
            },
            {
              "id": "b",
              "text": "Defining clear criteria for what makes a source trustworthy and applying them consistently"
            },
            {
              "id": "c",
              "text": "Evaluating a source only once"
            },
            {
              "id": "d",
              "text": "Ignoring the author's potential biases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using clear, consistent criteria for evaluation reduces personal bias and improves the reliability of your credibility assessment."
        },
        {
          "id": "media-literacy-401-l03-q2",
          "text": "This advanced course in Media Literacy prioritizes:",
          "skillId": "course-focus",
          "options": [
            {
              "id": "a",
              "text": "Developing leadership skills to guide media analysis and defending your conclusions in a capstone project"
            },
            {
              "id": "b",
              "text": "Speed of analysis over accuracy"
            },
            {
              "id": "c",
              "text": "Accepting information without verification"
            },
            {
              "id": "d",
              "text": "Focusing on a single perspective without considering others"
            }
          ],
          "correctOptionId": "a",
          "explanation": "The 401 course is designed to build strategic leadership and the ability to defend a comprehensive analysis, as demonstrated in the capstone."
        },
        {
          "id": "media-literacy-401-l03-q3",
          "text": "What is the strongest indicator of a well-structured analysis of narrative framing?",
          "skillId": "framing-analysis",
          "options": [
            {
              "id": "a",
              "text": "A process with no clear steps or documentation"
            },
            {
              "id": "b",
              "text": "A clear, repeatable process with defined steps and measurable checks for bias"
            },
            {
              "id": "c",
              "text": "Skipping the review of how a story might impact different audiences"
            },
            {
              "id": "d",
              "text": "Changing your evaluation criteria to fit the story"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A strong analytical process is systematic, transparent, and uses consistent, measurable standards to ensure reliability."
        },
        {
          "id": "media-literacy-401-l03-q4",
          "text": "When analyzing potential misinformation, which approach is most defensible?",
          "skillId": "misinformation-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Using a single anecdote as your only evidence"
            },
            {
              "id": "b",
              "text": "Comparing the claim against multiple reliable sources and acknowledging uncertainties"
            },
            {
              "id": "c",
              "text": "Avoiding difficult or controversial claims"
            },
            {
              "id": "d",
              "text": "Ignoring the original source of the information"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A defensible analysis relies on cross-verification with reliable sources and a transparent acknowledgment of any remaining questions."
        },
        {
          "id": "media-literacy-401-l03-q5",
          "text": "A mature strategy for assessing media's civic impact should include:",
          "skillId": "civic-impact-governance",
          "options": [
            {
              "id": "a",
              "text": "No clear plan for how to address harmful content"
            },
            {
              "id": "b",
              "text": "A clear policy, a way to measure impact, and a process for addressing issues"
            },
            {
              "id": "c",
              "text": "A one-time review that is never updated"
            },
            {
              "id": "d",
              "text": "Separating the data about impact from any decisions that are made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An effective strategy connects policy goals to measurable outcomes and includes a clear process for taking action based on those measurements."
        }
      ]
    },
    {
      "id": "media-literacy-401-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-401-l04-a1",
          "type": "mnemonic",
          "title": "The 'TRADE' Mnemonic",
          "content": "Use 'TRADE' to analyze decisions: T (Transparency), R (Risk), A (Audience), D (Data), E (Ethics). This helps ensure you consider multiple factors when evaluating a media case."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l04-c1",
          "kind": "example",
          "title": "Case Study: A Fast-Moving Public Event",
          "content": "We will analyze a real-world case study of a major public event, examining how different media outlets framed the story. Learners will distinguish between evidence-based reporting and speculation, and discuss the potential real-world consequences of different narratives."
        },
        {
          "id": "media-literacy-401-l04-c2",
          "kind": "concept",
          "title": "Using a Decision Tradeoff Matrix",
          "content": "We will introduce the decision tradeoff matrix, a tool for evaluating different choices. By scoring options on criteria like accuracy, speed, cost, and fairness, learners can practice making systematic and justifiable decisions when faced with complex media dilemmas."
        },
        {
          "id": "media-literacy-401-l04-c3",
          "kind": "recap",
          "title": "Learning from Failure",
          "content": "We will analyze common patterns of failure in media analysis, such as confirmation bias or over-reliance on a single source. By understanding these pitfalls, we can develop safeguards and turn past mistakes into valuable lessons for future work, fostering continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-401-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool used to compare different options across multiple criteria, helping to make a balanced and informed decision."
        },
        {
          "id": "media-literacy-401-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a process or system can fail to meet its objective, often following a repeatable pattern."
        },
        {
          "id": "media-literacy-401-l04-f3",
          "front": "Escalation Path",
          "back": "A predefined process for reporting a serious issue to a higher level of authority for review and action."
        }
      ]
    },
    {
      "id": "media-literacy-401-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-401-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "A mock dashboard showing a scenario with variables the learner can adjust, such as 'Verification Speed' and 'Source Diversity,' with real-time feedback on outcomes like 'Public Trust' and 'Misinformation Spread.'"
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l05-c1",
          "kind": "practice",
          "title": "Running the Simulation",
          "content": "In this interactive session, you will run a simulation of a media ecosystem. You will set key variables, make assumptions about uncertainties, and define how you will measure success in terms of civic impact. This helps you understand the complex dynamics of real-world information flow."
        },
        {
          "id": "media-literacy-401-l05-c2",
          "kind": "recap",
          "title": "The Decision Review Loop",
          "content": "At the end of each simulation round, we will review the results. We'll analyze the evidence, check if our actions aligned with our goals, and identify what we can do better next time. This reflective loop is crucial for learning and adapting our strategies."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-401-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Strategy Simulation",
          "description": "Run three different intervention strategies in a simulated media crisis and justify which option best balances accuracy, speed, and public trust.",
          "instructions": [
            "Define your primary objective and ethical guardrails before choosing an intervention.",
            "For each intervention, record one positive outcome and one negative tradeoff.",
            "Select a follow-up metric to confirm whether your choice was successful in the long term."
          ]
        },
        {
          "id": "media-literacy-401-l05-act2",
          "type": "matching_pairs",
          "title": "Problem and Solution Mapping",
          "description": "Match each common problem in media analysis with the most effective response.",
          "pairs": [
            {
              "left": "A source provides unreliable or biased data",
              "right": "Implement quality checks and seek alternative sources"
            },
            {
              "left": "The rules for handling a situation are unclear",
              "right": "Define who has the authority to make a decision"
            },
            {
              "left": "The public is losing trust in the information",
              "right": "Increase transparency about your process and correct errors openly"
            },
            {
              "left": "A metric is no longer accurately measuring impact",
              "right": "Re-evaluate and update the metric to align with goals"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-401-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-401-l06-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting the quiz, review the concepts from the Case Analysis and Simulation lessons. Focus on tradeoff matrices, failure modes, and the decision review loop."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-401-l06-q1",
          "text": "In a case analysis, what is the primary purpose of a tradeoff matrix?",
          "skillId": "tradeoff-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove one option is perfect in every way"
            },
            {
              "id": "b",
              "text": "To systematically compare several options across multiple important criteria"
            },
            {
              "id": "c",
              "text": "To quickly pick the cheapest option"
            },
            {
              "id": "d",
              "text": "To avoid making a difficult decision"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A tradeoff matrix provides a structured way to evaluate options against competing priorities, leading to a more balanced and defensible decision."
        },
        {
          "id": "media-literacy-401-l06-q2",
          "text": "Analyzing 'failure modes' is important because it helps you:",
          "skillId": "failure-mode-analysis",
          "options": [
            {
              "id": "a",
              "text": "Blame individuals for mistakes"
            },
            {
              "id": "b",
              "text": "Ignore problems until they become crises"
            },
            {
              "id": "c",
              "text": "Identify repeatable patterns of failure to build better safeguards for the future"
            },
            {
              "id": "d",
              "text": "Assume that failures are random, one-time events"
            }
          ],
          "correctOptionId": "c",
          "explanation": "By understanding common ways a system can fail, you can proactively design processes and safeguards to prevent those failures from recurring."
        },
        {
          "id": "media-literacy-401-l06-q3",
          "text": "In the simulation studio, why is it important to define your success metrics BEFORE running the simulation?",
          "skillId": "simulation-methodology",
          "options": [
            {
              "id": "a",
              "text": "It's not important; you can pick metrics that make your results look good afterward"
            },
            {
              "id": "b",
              "text": "To provide an objective benchmark for evaluating the outcome of your strategy"
            },
            {
              "id": "c",
              "text": "To make the simulation more complicated and difficult"
            },
            {
              "id": "d",
              "text": "Metrics are not relevant to understanding media impact"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining success metrics beforehand prevents bias and ensures you have a clear, objective way to judge whether your chosen interventions were effective."
        },
        {
          "id": "media-literacy-401-l06-q4",
          "text": "A 'decision review loop' after a simulation round is designed to:",
          "skillId": "reflective-practice",
          "options": [
            {
              "id": "a",
              "text": "Quickly move on to the next task without reflection"
            },
            {
              "id": "b",
              "text": "Systematically reflect on what worked, what didn't, and how to improve next time"
            },
            {
              "id": "c",
              "text": "Find someone to blame for poor results"
            },
            {
              "id": "d",
              "text": "Confirm that your initial assumptions were all correct"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The review loop is a critical part of learning, allowing you to adapt your strategies based on evidence and outcomes from the simulation."
        },
        {
          "id": "media-literacy-401-l06-q5",
          "text": "When faced with a complex media scenario, a leader should first:",
          "skillId": "strategic-decision-making",
          "options": [
            {
              "id": "a",
              "text": "React immediately based on gut feeling"
            },
            {
              "id": "b",
              "text": "Wait for someone else to solve the problem"
            },
            {
              "id": "c",
              "text": "Frame the problem, identify key stakeholders, and evaluate potential tradeoffs"
            },
            {
              "id": "d",
              "text": "Choose a solution before understanding the problem"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Effective leadership in media literacy involves a structured approach: understanding the problem and its context before evaluating and choosing a course of action."
        }
      ]
    },
    {
      "id": "media-literacy-401-l07",
      "title": "Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-401-l07-a1",
          "type": "image",
          "title": "Stakeholder Web",
          "content": "An infographic showing a central media issue (e.g., 'AI in Newsrooms') connected to various stakeholders like 'Journalists,' 'Readers,' 'Tech Companies,' and 'Regulators,' with brief notes on each group's interests and concerns."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l07-c1",
          "kind": "concept",
          "title": "Stakeholder Analysis",
          "content": "In this lesson, we analyze the various groups affected by media decisions. You will learn to identify who benefits from a particular narrative or policy, who bears the risks, and how different choices impact society. This is essential for making ethical and responsible decisions."
        },
        {
          "id": "media-literacy-401-l07-c2",
          "kind": "concept",
          "title": "Governance and Accountability",
          "content": "We will explore how to create systems of accountability in media. This involves connecting rules and policies to measurable outcomes, ensuring transparency, and establishing clear pathways for the public to raise concerns. Effective governance helps ensure media serves the public interest."
        },
        {
          "id": "media-literacy-401-l07-c3",
          "kind": "recap",
          "title": "Responsible Decision-Making Checklist",
          "content": "Before taking action, it's critical to use a checklist to review your decision. This includes confirming legal compliance, considering ethical implications, assessing technical feasibility, and evaluating the potential impact on users. This practice ensures your choices are well-rounded and responsible."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-401-l07-f1",
          "front": "Stakeholder Map",
          "back": "A visual tool for identifying all the groups affected by a decision and analyzing their interests and influence."
        },
        {
          "id": "media-literacy-401-l07-f2",
          "front": "Accountability Loop",
          "back": "A process that connects an action to its outcome, assigns responsibility, and ensures corrective measures are taken if needed."
        },
        {
          "id": "media-literacy-401-l07-f3",
          "front": "Responsible Execution",
          "back": "The practice of delivering a project or intervention in a way that balances goals with safety, fairness, and transparency."
        }
      ]
    },
    {
      "id": "media-literacy-401-l08",
      "title": "Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-401-l08-a1",
          "type": "image",
          "title": "Capstone Charter Template",
          "content": "A one-page document template with sections for 'Problem Statement,' 'Project Goals,' 'Success Metrics,' 'Key Risks,' and 'Stakeholders' for learners to fill out."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l08-c1",
          "kind": "practice",
          "title": "Defining Your Capstone Project",
          "content": "In this activity, you will create a 'capstone charter'—a detailed plan for your final project. This charter will outline your main objectives, identify potential risks, establish metrics for success, and set up checkpoints to ensure your project stays on track."
        },
        {
          "id": "media-literacy-401-l08-c2",
          "kind": "recap",
          "title": "Preparing Your Defense",
          "content": "At the end of this lesson, you will receive a template to structure your final presentation. This will guide you in supporting your claims with strong evidence and clearly explaining the tradeoffs you considered, helping you prepare a convincing and professional defense of your work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-401-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a one-page charter for your capstone project that defines its metrics, controls, and success criteria.",
          "instructions": [
            "State the primary problem you are addressing and the scope of your project.",
            "Define at least three measurable indicators of success.",
            "Identify one significant ethical or policy risk and propose a plan to mitigate it."
          ]
        },
        {
          "id": "media-literacy-401-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Drill",
          "description": "Practice defending your proposed capstone approach against critiques related to its cost, risk, and fairness.",
          "instructions": []
        }
      ]
    },
    {
      "id": "media-literacy-401-l09",
      "title": "Capstone Project Defense",
      "type": "assessment",
      "duration": 20,
      "learningAids": [
        {
          "id": "media-literacy-401-l09-a1",
          "type": "image",
          "title": "Capstone Rubric",
          "content": "A visual of the scoring rubric for the final presentation, with criteria such as 'Problem Framing,' 'Evidence-Based Analysis,' 'Intervention Design,' 'Ethical Consideration,' and 'Presentation Clarity.'"
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-401-l09-c1",
          "kind": "concept",
          "title": "Synthesizing Your Work",
          "content": "This final lesson is about bringing everything together. You will synthesize the concepts from the entire module—source credibility, narrative framing, ethics, and impact—into a single, coherent capstone presentation that showcases your analytical skills."
        },
        {
          "id": "media-literacy-401-l09-c2",
          "kind": "practice",
          "title": "Presenting with Evidence",
          "content": "Here, we focus on how to structure and deliver your defense. The key is to build your argument on a foundation of solid evidence, clearly articulate the tradeoffs of your proposed solution, and confidently respond to critical questions about your analysis."
        },
        {
          "id": "media-literacy-401-l09-c3",
          "kind": "recap",
          "title": "Module Synthesis and Next Steps",
          "content": "Congratulations on reaching the final stage of the module. This capstone project is not just an assessment but a demonstration of your ability to think critically and act responsibly in the modern media environment. The skills you've honed here are valuable in any field you choose to pursue."
        }
      ],
      "assessment": {
        "id": "media-literacy-401-l09-as1",
        "type": "capstone_project",
        "title": "Final Capstone Defense",
        "description": "Present a comprehensive analysis of a real-world media case study. Your defense must include an evaluation of source credibility, an analysis of narrative framing, a proposed intervention to counter potential misinformation, and a discussion of the ethical and civic impact. Your recommendations must be supported by evidence and a clear articulation of tradeoffs.",
        "rubric": [
          {
            "criterion": "Problem Framing",
            "description": "Clearly defines the problem, scope, and key stakeholders."
          },
          {
            "criterion": "Evidence-Based Analysis",
            "description": "Analysis is well-supported by credible evidence and multiple sources."
          },
          {
            "criterion": "Intervention Design",
            "description": "Proposed solution is thoughtful, feasible, and directly addresses the problem."
          },
          {
            "criterion": "Ethical Consideration",
            "description": "Demonstrates a deep understanding of the ethical implications and tradeoffs."
          },
          {
            "criterion": "Presentation Clarity",
            "description": "Arguments are presented clearly, concisely, and persuasively."
          }
        ]
      }
    }
  ]
};
