import type { LearningModule } from "@/lib/modules/types";

export const Entrepreneurship301Module: LearningModule = {
  "id": "entrepreneurship-301",
  "title": "Entrepreneurship Systems and Analysis",
  "description": "Level 301 curriculum in Entrepreneurship, emphasizing opportunity discovery, business modeling, capital strategy, venture operations, and real-world decision quality through structured practice and assessment.",
  "subject": "Business",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "business",
    "innovation"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for opportunity discovery and business modeling",
    "Apply structured methods to plan, execute, and review capital strategy tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Entrepreneurship"
  ],
  "lessons": [
    {
      "id": "entrepreneurship-301-l01",
      "title": "Core Models for Entrepreneurship",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l01-c1",
          "kind": "concept",
          "title": "Operating Vocabulary and Scope",
          "content": "In our Entrepreneurship 301 course, using clear and specific language is essential for our success. We will explore how to define the boundaries of our projects, which means understanding what is included and what is not. Additionally, we will identify the main areas we will focus on, helping us to stay organized and effective. It's also crucial that everyone uses the same terms when discussing ideas and making decisions. By doing this, we can easily compare the choices made by different teams, ensuring that everyone understands each other and is working towards the same goals. This shared vocabulary will help us collaborate better and achieve our objectives more efficiently."
        },
        {
          "id": "entrepreneurship-301-l01-c2",
          "kind": "concept",
          "title": "Causal Thinking and Constraints",
          "content": "To be successful in Entrepreneurship, it's really important to look at why things happen, not just what happens. In this lesson, we will dive into how to find out what we believe to be true (our assumptions), what we rely on (our dependencies), and any challenges we might encounter (our constraints). By understanding these deeper reasons, we can come up with more effective solutions that tackle the real problems instead of just fixing the surface issues. This way, we can make smarter decisions and improve our entrepreneurial efforts significantly."
        },
        {
          "id": "entrepreneurship-301-l01-c3",
          "kind": "recap",
          "title": "Evidence and Accountability",
          "content": "In this recap, we will explore why it is crucial to have strong evidence standards in our work. This means we should always back up our claims with solid proof. Additionally, we need to maintain a disciplined approach to logging our activities, which helps us keep track of our progress and decisions. Finally, establishing clear accountability practices is vital. This means that everyone involved knows their responsibilities and can be held accountable for their actions. By adopting these essential habits, we can ensure that our projects are executed reliably and effectively, leading to greater success in our entrepreneurial endeavors."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-301-l01-f1",
          "front": "Unit of analysis",
          "back": "The specific entity or process you evaluate to make defensible decisions."
        },
        {
          "id": "entrepreneurship-301-l01-f2",
          "front": "Constraint mapping",
          "back": "A method for identifying boundaries that shape feasible options."
        },
        {
          "id": "entrepreneurship-301-l01-f3",
          "front": "Evidence standard",
          "back": "The minimum quality threshold data must meet before action is taken."
        }
      ]
    },
    {
      "id": "entrepreneurship-301-l02",
      "title": "Entrepreneurship Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l02-c1",
          "kind": "practice",
          "title": "Workflow Construction",
          "content": "In this engaging interactive activity, you will get to design a comprehensive workflow that will help you discover exciting business opportunities and create effective business models. You will outline the essential inputs needed to start your process, identify key checkpoints to monitor your progress, define the expected outputs that will show your success, and establish rollback triggers to help you manage any challenges that may arise along the way. This hands-on experience will enhance your understanding of how to navigate the entrepreneurial journey effectively.\nContext recap: In this engaging interactive activity, you will get to design a comprehensive workflow that will help you discover exciting business opportunities and create effective business models. You will outline the essential inputs needed to start your process, identify key checkpoints to monitor your progress, define the expected outputs that will show your success, and establish rollback triggers to help you manage any challenges that may arise along the way. This hands-on experience will enhance your understanding of how to navigate the entrepreneurial journey effectively."
        },
        {
          "id": "entrepreneurship-301-l02-c2",
          "kind": "recap",
          "title": "Decision Logging",
          "content": "In this recap, we will emphasize the importance of documenting every decision made during our projects. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will help us analyze our decisions after the project is completed, allowing us to learn and improve in the future.\nContext recap: In this recap, we will emphasize the importance of documenting every decision made during our projects. Each decision should be accompanied by a clear rationale, an expected effect, and a point for verification. This practice will help us analyze our decisions after the project is completed, allowing us to learn and improve in the future."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-301-l02-act1",
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
          "id": "entrepreneurship-301-l02-act2",
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
      "id": "entrepreneurship-301-l03",
      "title": "Checkpoint 1: Concepts and Workflow",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-301-l03-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-301-skill-core",
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
          "id": "entrepreneurship-301-l03-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-301-skill-process",
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
          "id": "entrepreneurship-301-l03-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-301-skill-eval",
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
          "id": "entrepreneurship-301-l03-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-301-skill-strategy",
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
      "id": "entrepreneurship-301-l04",
      "title": "Methods, Metrics, and Failure Modes in Entrepreneurship",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l04-c1",
          "kind": "concept",
          "title": "Method Selection",
          "content": "When we choose methods for our entrepreneurial projects, it's important to think about several key factors. First, we need to look at any constraints we might have, such as time, resources, or regulations. Next, we should evaluate the quality of the information we possess; reliable information can lead to better decisions. Lastly, we must consider the potential costs of making mistakes, as errors can be expensive and time-consuming. In this lesson, you will learn how to compare various alternatives and explain why certain methods are more suitable for different Entrepreneurship scenarios. This will help you make informed decisions in your future projects."
        },
        {
          "id": "entrepreneurship-301-l04-c2",
          "kind": "example",
          "title": "Metric Architecture",
          "content": "In this example, we will delve into the concept of a metric architecture and how it serves as a vital tool for entrepreneurs. A metric architecture connects three important components: leading indicators, which are early signs of progress; lagging outcomes, which reflect the results of past actions; and diagnostic measures, which help teams analyze their performance. By using this framework, teams can spot any deviations from their goals at an early stage. This early detection allows them to respond thoughtfully and deliberately, ensuring they remain focused and on track towards achieving their objectives."
        },
        {
          "id": "entrepreneurship-301-l04-c3",
          "kind": "recap",
          "title": "Failure Taxonomy",
          "content": "In this recap, we will categorize different types of failures into four main groups: data-related, process-related, execution-related, and governance-related. By organizing failures this way, we can create specific plans to address each type, rather than using a one-size-fits-all approach.\nContext recap: In this recap, we will categorize different types of failures into four main groups: data-related, process-related, execution-related, and governance-related. By organizing failures this way, we can create specific plans to address each type, rather than using a one-size-fits-all approach."
        }
      ],
      "flashcards": [
        {
          "id": "entrepreneurship-301-l04-f1",
          "front": "Leading indicator",
          "back": "A metric that signals probable future outcomes before final results appear."
        },
        {
          "id": "entrepreneurship-301-l04-f2",
          "front": "Failure taxonomy",
          "back": "A structured classification of failure types used to design targeted fixes."
        },
        {
          "id": "entrepreneurship-301-l04-f3",
          "front": "Cost of error",
          "back": "The operational, financial, or social impact caused by an incorrect decision."
        }
      ]
    },
    {
      "id": "entrepreneurship-301-l05",
      "title": "Case Studio: Improve a Entrepreneurship System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "entrepreneurship-301-l05-c1",
          "kind": "practice",
          "title": "Case Decomposition",
          "content": "In this interactive case study, you will break down a realistic business scenario into its key components: the objective, the context in which it operates, the constraints it faces, and the options available for intervention. Be sure to include notes on the trade-offs involved in each option.\nContext recap: In this interactive case study, you will break down a realistic business scenario into its key components: the objective, the context in which it operates, the constraints it faces, and the options available for intervention. Be sure to include notes on the trade-offs involved in each option."
        },
        {
          "id": "entrepreneurship-301-l05-c2",
          "kind": "recap",
          "title": "Improvement Proposal",
          "content": "In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who will be responsible for each part, and a timeline for follow-up actions to ensure that improvements are implemented effectively.\nContext recap: In this recap, you will present a structured improvement proposal based on your analysis. This proposal should include clear success criteria, a mapping of who will be responsible for each part, and a timeline for follow-up actions to ensure that improvements are implemented effectively."
        }
      ],
      "interactiveActivities": [
        {
          "id": "entrepreneurship-301-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve capital strategy outcomes under time and quality constraints.",
          "instructions": [
            "Define success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit.",
            "Specify a metric that confirms success in the next cycle."
          ]
        },
        {
          "id": "entrepreneurship-301-l05-act2",
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
      "id": "entrepreneurship-301-l06",
      "title": "Checkpoint 2: Systems Reasoning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "entrepreneurship-301-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "entrepreneurship-301-l06-q1",
          "text": "Which action best improves decisions in opportunity discovery work?",
          "skillId": "entrepreneurship-301-skill-core",
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
          "id": "entrepreneurship-301-l06-q2",
          "text": "In business modeling, what is the strongest indicator of process quality?",
          "skillId": "entrepreneurship-301-skill-process",
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
          "id": "entrepreneurship-301-l06-q3",
          "text": "When evaluating capital strategy, which practice supports trustworthy conclusions?",
          "skillId": "entrepreneurship-301-skill-eval",
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
          "id": "entrepreneurship-301-l06-q4",
          "text": "A mature venture operations strategy should prioritize:",
          "skillId": "entrepreneurship-301-skill-strategy",
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
    }
  ]
};
