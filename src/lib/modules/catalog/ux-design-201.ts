import type { LearningModule } from "@/lib/modules/types";

export const ux_design_201_Module: LearningModule = {
  "id": "ux-design-201",
  "title": "UX Design Applied Practice",
  "description": "Level 201 curriculum in UX Design, emphasizing user research, interaction modeling, accessibility, product experimentation, and real-world decision quality through structured practice and assessment.",
  "subject": "UX Design",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "design",
    "human-computer-interaction"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for user research and interaction modeling",
    "Apply structured methods to plan, execute, and review accessibility tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in UX Design"
  ],
  "lessons": [
    {
      "id": "ux-design-201-l01",
      "title": "Core Models for UX Design",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ux-design-201-l01-a1",
          "type": "image",
          "title": "Visual Prompt: The UX Intersection",
          "content": "Visual: A Venn diagram showing the intersection of User Needs, Business Goals, and Technical Constraints, with 'Optimal UX' in the center."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In UX Design, using precise language is essential. This means setting clear boundaries for our projects to define our exact focus. We will identify specific units of analysis, such as user behaviors or interface elements. When the entire team shares a common vocabulary, it streamlines decision-making and allows us to compare our work effectively with other teams, ultimately leading to more cohesive user experiences.\nContext recap: Using precise language and setting clear boundaries helps teams understand their focus and identify specific units of analysis. A shared vocabulary improves decision-making and cross-team collaboration.\nWhy this matters: Operating Vocabulary and Scope helps learners connect ideas from UX Design Applied Practice to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "ux-design-201-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To excel in UX Design, we must look beyond surface-level results and understand root causes. In this lesson, we will learn how to identify our assumptions (what we believe to be true), our dependencies (how different elements rely on each other), and our constraints (what limits our designs). By doing this, we can create robust solutions that tackle real problems at their source, rather than just patching visible symptoms.\nContext recap: Identifying assumptions, dependencies, and constraints allows designers to address root causes rather than just surface-level symptoms, leading to more effective and realistic solutions."
        },
        {
          "id": "ux-design-201-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this section, we introduce practices essential for successful execution in UX Design. We will discuss the importance of establishing clear evidence standards, maintaining a disciplined approach to logging our design decisions, and creating accountability loops. These practices ensure that our projects remain reliable, defensible, and effective.\nContext recap: Establishing evidence standards, logging decisions, and creating accountability loops are critical practices that ensure design projects are reliable and effective."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-201-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "ux-design-201-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "ux-design-201-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "ux-design-201-l02",
      "title": "UX Design Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ux-design-201-l02-a1",
          "type": "practice",
          "title": "Visual Prompt: Workflow Timeline",
          "content": "Visual: A step-by-step timeline graphic illustrating a UX research workflow, starting from 'Input Audit' and ending at 'Retrospective Log'."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this hands-on activity, you will construct a comprehensive workflow for conducting user research and modeling interactions. This includes identifying necessary inputs, setting up checkpoints to monitor progress, defining expected outputs, and establishing rollback triggers in case a previous step needs revisiting. This exercise builds your capacity to structure the design process effectively.\nContext recap: Constructing a comprehensive workflow involves identifying inputs, setting checkpoints, defining outputs, and establishing rollback triggers to structure the design process effectively."
        },
        {
          "id": "ux-design-201-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "Logging every decision made during the design process is a cornerstone of mature UX practice. Each decision should be accompanied by a clear rationale, an expected effect, and a specific point for verification. This practice allows teams to analyze decisions post-implementation, fostering continuous learning and improvement for future projects.\nContext recap: Documenting decisions with clear rationale, expected effects, and verification points enables post-project analysis and continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-201-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Match",
          "description": "Match each workflow component to its strongest governance function.",
          "pairs": [
            {
              "left": "Input audit",
              "right": "Prevents low-quality data from entering the system"
            },
            {
              "left": "Checkpoint gate",
              "right": "Stops propagation of known defects"
            },
            {
              "left": "Outcome metric",
              "right": "Measures whether the objective was met"
            },
            {
              "left": "Retrospective log",
              "right": "Captures lessons for next iteration"
            }
          ]
        },
        {
          "id": "ux-design-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort items into strategic, operational, and quality-risk groups.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "Misaligned goals",
              "bucket": "Strategic"
            },
            {
              "text": "Unclear handoff timing",
              "bucket": "Operational"
            },
            {
              "text": "Inconsistent acceptance criteria",
              "bucket": "Quality"
            },
            {
              "text": "No benchmark baseline",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "ux-design-201-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-201-l03-a1",
          "type": "practice",
          "title": "Visual Prompt: Evaluation Icon",
          "content": "Visual: An icon of a magnifying glass hovering over a digital wireframe, symbolizing evaluation and checkpoints."
        }
      ],
      "questions": [
        {
          "id": "ux-design-201-l03-q1",
          "text": "Which action best improves decisions in user research work?",
          "skillId": "ux-design-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely on one unverified example"
            },
            {
              "id": "b",
              "text": "Define criteria, compare alternatives, and test assumptions"
            },
            {
              "id": "c",
              "text": "Skip metrics and move directly to execution"
            },
            {
              "id": "d",
              "text": "Avoid documenting rationale"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Explicit criteria and testable assumptions improve reliability and transferability."
        },
        {
          "id": "ux-design-201-l03-q2",
          "text": "In interaction modeling, what is the strongest indicator of process quality?",
          "skillId": "ux-design-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Output speed only"
            },
            {
              "id": "b",
              "text": "Traceable steps, checkpoints, and measurable outcomes"
            },
            {
              "id": "c",
              "text": "Unstructured iteration without logs"
            },
            {
              "id": "d",
              "text": "One-time performance anecdotes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quality processes are observable, repeatable, and measurable."
        },
        {
          "id": "ux-design-201-l03-q3",
          "text": "When evaluating accessibility, which practice supports trustworthy conclusions?",
          "skillId": "ux-design-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Ignore edge cases"
            },
            {
              "id": "b",
              "text": "Use baseline comparisons and failure analysis"
            },
            {
              "id": "c",
              "text": "Change targets after results are known"
            },
            {
              "id": "d",
              "text": "Remove context from findings"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Baselines and failure analysis prevent overclaiming and improve design quality."
        },
        {
          "id": "ux-design-201-l03-q4",
          "text": "A mature product experimentation strategy should prioritize:",
          "skillId": "ux-design-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Single-metric optimization at any cost"
            },
            {
              "id": "b",
              "text": "Balanced outcomes across quality, risk, and sustainability"
            },
            {
              "id": "c",
              "text": "Decisions based only on intuition"
            },
            {
              "id": "d",
              "text": "No post-implementation review"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced scorecards align long-term performance with accountability."
        }
      ]
    },
    {
      "id": "ux-design-201-l04",
      "title": "Methods, Metrics, and Failure Modes in UX Design",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ux-design-201-l04-a1",
          "type": "mnemonic",
          "title": "Visual Prompt: Metrics Dashboard",
          "content": "Visual: A dashboard mockup showing leading indicators (e.g., task success rate) on the left and lagging outcomes (e.g., user retention) on the right."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When selecting methods for UX Design, it is critical to evaluate several key factors. First, assess any constraints, such as time, budget, or technical limitations. Next, evaluate the quality and reliability of the available information. Finally, consider the 'cost of error'—the potential negative impact if the chosen method yields incorrect insights. In this lesson, you will practice comparing different research methods and justifying your selections based on these contextual factors.\nContext recap: Selecting the right UX method requires evaluating constraints, information quality, and the potential cost of error to ensure accurate and actionable insights.\nWhy this matters: Method Selection helps learners connect theoretical UX concepts to practical, risk-aware decisions made during real-world projects."
        },
        {
          "id": "ux-design-201-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "A well-organized metric architecture acts as a roadmap for UX teams. It connects three crucial types of measurements: leading indicators (which predict future success), lagging outcomes (which show the results of past actions), and diagnostic measures (which explain why certain behaviors are happening). By utilizing this framework, teams can spot trends early and make informed adjustments to stay on track. In this lesson, we will build a robust metric architecture to elevate our design processes.\nContext recap: Metric architecture connects leading indicators, lagging outcomes, and diagnostic measures, allowing teams to predict success, measure past results, and understand user behaviors.\nWhy this matters: Understanding Metric Architecture enables designers to prove the value of their work and make data-informed adjustments before final outcomes are locked in."
        },
        {
          "id": "ux-design-201-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we categorize the different types of failures that can occur in UX Design. These failures typically stem from data inaccuracies, process breakdowns, execution errors, or governance gaps. By classifying failures into a structured taxonomy, we can design specific, targeted interventions to address each type, making our problem-solving approach highly systematic.\nContext recap: Categorizing failures into data, process, execution, or governance issues allows teams to create targeted and systematic interventions."
        }
      ],
      "flashcards": [
        {
          "id": "ux-design-201-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "ux-design-201-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "ux-design-201-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "ux-design-201-l05",
      "title": "Case Studio: Improve a UX Design System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ux-design-201-l05-a1",
          "type": "practice",
          "title": "Visual Prompt: Before and After",
          "content": "Visual: A split-screen graphic showing a 'Before' state of a chaotic design system and an 'After' state of a streamlined, accessible design system."
        }
      ],
      "chunks": [
        {
          "id": "ux-design-201-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic UX scenario into its core components: the primary objective, the business context, technical constraints, and potential intervention options. You will also document the trade-offs associated with each option. This exercise sharpens your critical thinking and prepares you to navigate the complexities of enterprise-level UX Design.\nContext recap: Breaking down a scenario into objectives, context, constraints, and interventions helps designers navigate complex trade-offs and make informed decisions."
        },
        {
          "id": "ux-design-201-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "Following the case decomposition, you will draft a staged improvement proposal. Your proposal must include clear success criteria, a responsibility matrix detailing who owns each part of the project, and a timeline for follow-up actions. This practice bridges the gap between identifying a problem and successfully implementing a structured solution.\nContext recap: A staged improvement proposal requires clear success criteria, a responsibility matrix, and a timeline to ensure successful implementation of design solutions."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ux-design-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve accessibility outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "ux-design-201-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect interventions with the most likely system-level effects.",
          "pairs": [
            {
              "left": "Tighter intake criteria",
              "right": "Higher signal quality and lower downstream rework"
            },
            {
              "left": "Checkpoint automation",
              "right": "Faster detection of preventable defects"
            },
            {
              "left": "Post-run retrospective",
              "right": "Improved adaptation in later cycles"
            },
            {
              "left": "Cross-team briefing",
              "right": "Reduced ambiguity at handoff boundaries"
            }
          ]
        }
      ]
    },
    {
      "id": "ux-design-201-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ux-design-201-l06-a1",
          "type": "practice",
          "title": "Visual Prompt: The Balance Scale",
          "content": "Visual: A balanced scale representing the careful weighing of trade-offs, constraints, and user needs in UX decision-making."
        }
      ],
      "questions": [
        {
          "id": "ux-design-201-l06-q1",
          "text": "Which type of metric is best used to predict future success before final results are fully realized?",
          "skillId": "ux-design-201-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "Lagging outcome"
            },
            {
              "id": "b",
              "text": "Leading indicator"
            },
            {
              "id": "c",
              "text": "Diagnostic measure"
            },
            {
              "id": "d",
              "text": "Vanity metric"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Leading indicators signal probable future outcomes, allowing teams to adjust strategies proactively."
        },
        {
          "id": "ux-design-201-l06-q2",
          "text": "Why is establishing a failure taxonomy important in UX Design?",
          "skillId": "ux-design-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It guarantees that no errors will ever occur again."
            },
            {
              "id": "b",
              "text": "It provides a structured way to classify errors and design targeted fixes."
            },
            {
              "id": "c",
              "text": "It is primarily used to assign blame to specific team members."
            },
            {
              "id": "d",
              "text": "It replaces the need for user testing."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A failure taxonomy categorizes issues (e.g., data, process, execution) so teams can implement specific, effective interventions."
        },
        {
          "id": "ux-design-201-l06-q3",
          "text": "When selecting a UX research method, what does 'cost of error' refer to?",
          "skillId": "ux-design-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "The financial budget allocated for the research software."
            },
            {
              "id": "b",
              "text": "The operational, financial, or social impact caused by an incorrect decision."
            },
            {
              "id": "c",
              "text": "The time it takes to recruit participants."
            },
            {
              "id": "d",
              "text": "The number of bugs found in the final product."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cost of error evaluates the potential negative consequences if the chosen method yields incorrect or misleading insights."
        },
        {
          "id": "ux-design-201-l06-q4",
          "text": "During a case decomposition, why is it critical to document trade-offs for each intervention?",
          "skillId": "ux-design-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "To ensure that both short-term benefits and long-term consequences are balanced."
            },
            {
              "id": "b",
              "text": "To prove that only one perfect solution exists."
            },
            {
              "id": "c",
              "text": "To delay the project timeline intentionally."
            },
            {
              "id": "d",
              "text": "To avoid having to set success criteria."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Documenting trade-offs acknowledges that every design decision has pros and cons, ensuring a balanced and realistic approach."
        }
      ]
    }
  ]
};
