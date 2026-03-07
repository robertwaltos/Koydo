import type { LearningModule } from "@/lib/modules/types";

export const media_literacy_101_Module: LearningModule = {
  "id": "media-literacy-101",
  "title": "Media Literacy Foundations",
  "description": "An introductory course on media literacy, teaching you how to evaluate sources, understand narrative framing, spot misinformation, and make informed civic decisions through hands-on analysis and real-world scenarios.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Evaluate the credibility of a media source using a clear set of criteria.",
    "Identify and analyze how media stories are framed to influence perception.",
    "Develop a step-by-step process for analyzing misinformation and its potential impact.",
    "Analyze the impact of media on public decisions and civic life.",
    "Communicate the tradeoffs between different ways of reporting information.",
    "Synthesize media literacy concepts to form and defend a conclusion about a piece of media."
  ],
  "lessons": [
    {
      "id": "media-literacy-101-l01",
      "title": "What is Media Literacy?",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson's key concepts, show your reasoning, and check your assumptions before finalizing your answer."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l01-c1",
          "kind": "concept",
          "title": "Core Vocabulary",
          "content": "In this lesson, we'll build a shared vocabulary to understand media literacy. We will define key terms like 'source,' 'bias,' and 'framing.' This foundation will help us navigate the complex media landscape, evaluate the credibility of information, and understand how stories are constructed.",
          "visualPrompts": [
            "A word cloud of key terms: Source, Bias, Frame, Evidence, Narrative, Misinformation.",
            "Icons representing each key term."
          ]
        },
        {
          "id": "media-literacy-101-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect",
          "content": "We will learn to trace the connections between a media report and its potential effects on an audience. This involves identifying the hidden assumptions in a story and thinking critically about how a narrative can lead to specific conclusions or actions. This helps us understand the real-world impact of media.",
          "visualPrompts": [
            "A simple flowchart showing a cause-and-effect chain: Misleading Headline -> Public Misunderstanding -> Poor Decisions.",
            "An animation of dominoes falling to represent a causal chain."
          ]
        },
        {
          "id": "media-literacy-101-l01-c3",
          "kind": "recap",
          "title": "Focus on Evidence",
          "content": "This module introduces an evidence-first approach. This means that any claim or conclusion should be supported by observable facts. We will practice connecting claims to evidence and learn to recognize when a claim lacks support. We'll also discuss uncertainty and how to be comfortable with the idea that not everything is black and white.",
          "visualPrompts": [
            "An icon of a magnifying glass over a document, symbolizing the search for evidence.",
            "A scale balancing a 'Claim' on one side and 'Evidence' on the other."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l01-f1",
          "front": "Source Credibility",
          "back": "The process of deciding if a source is trustworthy. It involves checking the author's expertise, looking for evidence, and identifying potential bias."
        },
        {
          "id": "media-literacy-101-l01-f2",
          "front": "Narrative Framing",
          "back": "The way a story is told to highlight certain aspects and influence an audience's perspective. It's a deliberate choice of what to include, what to exclude, and what to emphasize."
        },
        {
          "id": "media-literacy-101-l01-f3",
          "front": "Misinformation",
          "back": "False or inaccurate information that is spread, regardless of the intent to deceive. Analyzing it means identifying it and understanding its potential impact."
        }
      ]
    },
    {
      "id": "media-literacy-101-l02",
      "title": "Your Media Analysis Toolkit",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the provided framework, explain your reasoning, and double-check your work before submitting."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l02-c1",
          "kind": "practice",
          "title": "Building Your Analysis Process",
          "content": "In this interactive segment, you will build a step-by-step process for analyzing a piece of media. You'll start with core vocabulary, identify the key message, and perform a basic analysis. You will then test your process to see how well it works when information is unclear or incomplete.",
          "visualPrompts": [
            "An animation of puzzle pieces or building blocks being assembled into a clear workflow diagram.",
            "A visual of a 'stress test' where the workflow is challenged by question marks or fog."
          ]
        },
        {
          "id": "media-literacy-101-l02-c2",
          "kind": "recap",
          "title": "Checking Your Work",
          "content": "To make sure our analysis is reliable, we need a way to check our work. This involves setting checkpoints to review our progress, identifying triggers that tell us to reconsider our conclusions, and keeping a log of the evidence we find. These habits ensure our media analysis is thorough and accountable.",
          "visualPrompts": [
            "A checklist icon with items like 'Check Source,' 'Identify Frame,' 'Find Evidence.'",
            "A simple diagram showing a decision point with a 'Proceed' or 'Re-evaluate' path."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l02-act1",
          "type": "matching_pairs",
          "title": "Connecting Actions to Results",
          "description": "Match each media analysis technique to its most likely outcome.",
          "pairs": [
            {
              "left": "Checking multiple sources",
              "right": "Reduces the influence of bias from a single report"
            },
            {
              "left": "Identifying the author",
              "right": "Helps evaluate expertise and potential conflicts of interest"
            },
            {
              "left": "Comparing headline to article content",
              "right": "Catches clickbait and misleading summaries"
            },
            {
              "left": "Looking for quotes and data",
              "right": "Verifies that claims are supported by evidence"
            }
          ]
        },
        {
          "id": "media-literacy-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Sorting Real-World Challenges",
          "description": "Sort these challenges into the correct categories: Source, Message, or Audience.",
          "buckets": [
            "Source-related",
            "Message-related",
            "Audience-related"
          ],
          "items": [
            {
              "text": "The author is anonymous",
              "bucket": "Source-related"
            },
            {
              "text": "The article uses emotional language",
              "bucket": "Message-related"
            },
            {
              "text": "The reader has strong pre-existing beliefs",
              "bucket": "Audience-related"
            },
            {
              "text": "The website is funded by a political group",
              "bucket": "Source-related"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-101-l03",
      "title": "Checkpoint 1: Core Concepts",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Review the concepts from the first two lessons. Read each question carefully and choose the best answer."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-101-l03-q1",
          "text": "What is the best first step to determine if a news source is credible?",
          "skillId": "media-literacy-101-skill-credibility",
          "options": [
            {
              "id": "a",
              "text": "Trust it if it confirms what you already believe"
            },
            {
              "id": "b",
              "text": "Look for information about the author and publisher"
            },
            {
              "id": "c",
              "text": "Assume it's true if it has a professional-looking website"
            },
            {
              "id": "d",
              "text": "Check if the article is popular on social media"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Investigating the author and publisher helps you understand their expertise, mission, and potential biases, which is key to assessing credibility."
        },
        {
          "id": "media-literacy-101-l03-q2",
          "text": "When you are just starting to learn media literacy, what should you focus on first?",
          "skillId": "media-literacy-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Understanding basic terms, checking sources, and analyzing simple news articles"
            },
            {
              "id": "b",
              "text": "Writing complex academic papers on media theory"
            },
            {
              "id": "c",
              "text": "Building your own news website from scratch"
            },
            {
              "id": "d",
              "text": "Memorizing the names of every major news CEO"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Building a strong foundation starts with understanding the core concepts and applying them in a basic, repeatable way."
        },
        {
          "id": "media-literacy-101-l03-q3",
          "text": "The 'frame' of a news story refers to:",
          "skillId": "media-literacy-101-skill-framing",
          "options": [
            {
              "id": "a",
              "text": "The physical border around a picture in the article"
            },
            {
              "id": "b",
              "text": "The perspective or angle the story is told from"
            },
            {
              "id": "c",
              "text": "The font size and color of the text"
            },
            {
              "id": "d",
              "text": "How quickly the article was published"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Narrative framing is about the perspective—what the author chooses to emphasize or de-emphasize to shape the audience's understanding."
        },
        {
          "id": "media-literacy-101-l03-q4",
          "text": "What is 'confirmation bias'?",
          "skillId": "media-literacy-101-skill-bias",
          "options": [
            {
              "id": "a",
              "text": "The tendency to look for and favor information that confirms your existing beliefs"
            },
            {
              "id": "b",
              "text": "The bias of professional journalists against amateurs"
            },
            {
              "id": "c",
              "text": "A computer error that confirms a file has been saved"
            },
            {
              "id": "d",
              "text": "The belief that all news from official sources is true"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Confirmation bias is a common mental shortcut where we prefer information that agrees with us and ignore information that challenges us."
        },
        {
          "id": "media-literacy-101-l03-q5",
          "text": "An evidence-first approach means that every claim should be supported by:",
          "skillId": "media-literacy-101-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "A popular opinion"
            },
            {
              "id": "b",
              "text": "A strong feeling or emotion"
            },
            {
              "id": "c",
              "text": "The author's personal guarantee"
            },
            {
              "id": "d",
              "text": "Verifiable facts, data, or direct quotes"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Evidence must be something that can be checked and verified independently, such as data, documents, or firsthand accounts."
        }
      ]
    },
    {
      "id": "media-literacy-101-l04",
      "title": "Analyzing a Real-World News Event",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the lesson's framework to analyze the case. Show your reasoning and check your assumptions."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l04-c1",
          "kind": "example",
          "title": "Setting the Scene: A Breaking News Story",
          "content": "In this case study, we'll examine a fast-moving public event with multiple media outlets reporting on it live. We will see different headlines and perspectives emerge, which can shape public reaction. Your task is to analyze the information, separate fact from assumption, and identify the potential risks of different narratives.",
          "visualPrompts": [
            "A split-screen image showing two very different news headlines about the exact same event.",
            "A simulated social media feed with posts reacting to the breaking news."
          ]
        },
        {
          "id": "media-literacy-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Options",
          "content": "When analyzing a situation, there are often several possible interpretations or actions. We will use a simple 'tradeoff matrix' to evaluate different options. Each option will be scored on criteria like its accuracy, fairness, and potential for impact. This structured approach helps us make more thoughtful and defensible choices.",
          "visualPrompts": [
            "A simple grid comparing Option A and Option B against criteria like 'Speed,' 'Accuracy,' and 'Clarity.'",
            "An animation of a scale weighing 'Publish Now' vs. 'Verify First.'"
          ]
        },
        {
          "id": "media-literacy-101-l04-c3",
          "kind": "recap",
          "title": "Learning from What Goes Wrong",
          "content": "In our case study, we will see examples of reporting that led to confusion or harm. We will categorize these 'failure modes'—or patterns of what went wrong. By understanding these patterns, we can turn isolated mistakes into valuable lessons that help us become better media analysts in the future.",
          "visualPrompts": [
            "An animation of a bridge collapsing, with labels on the weak points ('Unverified Source,' 'Hidden Bias') to represent system failure.",
            "A 'Lessons Learned' document icon."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l04-f1",
          "front": "Tradeoff",
          "back": "A situation where you must make a choice between two or more competing priorities, where gaining one thing means losing another (e.g., speed vs. accuracy)."
        },
        {
          "id": "media-literacy-101-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way that a process or system can fail to achieve its goal. For example, a fact-checking process failing to catch a manipulated photo."
        },
        {
          "id": "media-literacy-101-l04-f3",
          "front": "Stakeholder",
          "back": "Any person or group who is affected by a decision or action. In media, this includes the audience, the subjects of the story, and the publisher."
        }
      ]
    },
    {
      "id": "media-literacy-101-l05",
      "title": "Interactive Simulation: Your Turn to Decide",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the simulation tools to test your ideas. Explain the reasoning behind your choices and observe the outcomes."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l05-c1",
          "kind": "practice",
          "title": "Setting Up Your Scenario",
          "content": "In this interactive practice, you will be in charge. You'll set up a scenario, decide what your goals are, and define how you will measure success. This exercise will help you understand how to model real-world complexities and see the direct impact of your decisions.",
          "visualPrompts": [
            "An image of a 'control panel' with dials for 'Goal,' 'Audience,' and 'Message.'",
            "A simple map of a community, where your decisions will have a visible effect."
          ]
        },
        {
          "id": "media-literacy-101-l05-c2",
          "kind": "recap",
          "title": "Reviewing Your Impact",
          "content": "At the end of each simulation round, you will review the results. Did you achieve your goal? What were the unintended consequences? This review loop helps you learn from experience and adapt your strategy, which is a key skill in media literacy.",
          "visualPrompts": [
            "A circular arrow diagram representing a feedback loop: Plan -> Act -> Review -> Adapt.",
            "A simple dashboard showing the results of your simulation round with green (positive) and red (negative) indicators."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l05-act1",
          "type": "scenario_practice",
          "title": "Media Response Simulation",
          "description": "You are a journalist covering a local protest. Choose one of three reporting strategies and justify which option best balances speed, accuracy, and public safety.",
          "instructions": [
            "Define your primary objective: Is it to be first, be most accurate, or prevent panic?",
            "For each strategy, identify one potential negative consequence (a tradeoff).",
            "Choose a follow-up metric to determine if your choice was successful (e.g., 'number of corrections issued' or 'reader trust survey')."
          ]
        },
        {
          "id": "media-literacy-101-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Problems to Solutions",
          "description": "Match each common media problem with the strongest solution.",
          "pairs": [
            {
              "left": "A source provides unreliable information",
              "right": "Verify with a second, independent source"
            },
            {
              "left": "The public is confused by a complex topic",
              "right": "Use clear language, analogies, and visuals"
            },
            {
              "left": "An article is accused of being biased",
              "right": "Issue a clarification and include other perspectives"
            },
            {
              "left": "A misleading rumor is spreading on social media",
              "right": "Publish a clear fact-check to correct the record"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-101-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Apply the concepts from the case study and simulation. Read each scenario carefully and choose the best course of action."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-101-l06-q1",
          "text": "In a breaking news event with conflicting reports from different outlets, what is the most responsible action for a media consumer?",
          "skillId": "media-literacy-101-skill-application",
          "options": [
            {
              "id": "a",
              "text": "Share the most exciting or dramatic report immediately."
            },
            {
              "id": "b",
              "text": "Choose the report that aligns with your political views."
            },
            {
              "id": "c",
              "text": "Wait for more information and seek out trusted sources for verification."
            },
            {
              "id": "d",
              "text": "Assume all the reports are false."
            }
          ],
          "correctOptionId": "c",
          "explanation": "In confusing situations, the best practice is to pause, exercise skepticism, and wait for credible sources to confirm the facts before forming a conclusion or sharing."
        },
        {
          "id": "media-literacy-101-l06-q2",
          "text": "A news outlet can publish a story immediately, or wait two hours to get a comment from a key person involved. This choice is an example of a tradeoff between:",
          "skillId": "media-literacy-101-skill-tradeoff",
          "options": [
            {
              "id": "a",
              "text": "Right and wrong"
            },
            {
              "id": "b",
              "text": "Speed and completeness"
            },
            {
              "id": "c",
              "text": "Fact and opinion"
            },
            {
              "id": "d",
              "text": "Old media and new media"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is a classic journalism tradeoff. Publishing faster gets the news out but may result in an incomplete or less accurate story."
        },
        {
          "id": "media-literacy-101-l06-q3",
          "text": "A fact-checking process repeatedly approves articles with the same type of error (e.g., misinterpreting statistics). This is a sign of a:",
          "skillId": "media-literacy-101-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "Successful outcome"
            },
            {
              "id": "b",
              "text": "One-time mistake"
            },
            {
              "id": "c",
              "text": "Systemic failure mode"
            },
            {
              "id": "d",
              "text": "Personal disagreement"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When the same type of error occurs repeatedly, it points to a flaw in the process or system itself, not just an individual error."
        },
        {
          "id": "media-literacy-101-l06-q4",
          "text": "When analyzing the impact of a media campaign, why is it important to define your success metrics *before* you start?",
          "skillId": "media-literacy-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "It's not important; you can pick metrics later that make you look good."
            },
            {
              "id": "b",
              "text": "To ensure you have a clear, unbiased way to measure if you achieved your original goal."
            },
            {
              "id": "c",
              "text": "Because the metrics are the least important part of the campaign."
            },
            {
              "id": "d",
              "text": "To make the campaign more expensive and complicated."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining success upfront prevents you from 'moving the goalposts' and claiming success based on unexpected but positive outcomes, ensuring an honest evaluation."
        },
        {
          "id": "media-literacy-101-l06-q5",
          "text": "A news story about a factory closure focuses only on the economic benefit to the company's shareholders, ignoring the laid-off workers. This is a clear example of:",
          "skillId": "media-literacy-101-skill-framing-impact",
          "options": [
            {
              "id": "a",
              "text": "Objective, balanced reporting"
            },
            {
              "id": "b",
              "text": "A mathematical error"
            },
            {
              "id": "c",
              "text": "Narrative framing that prioritizes one stakeholder group"
            },
            {
              "id": "d",
              "text": "A government press release"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The story is 'framed' to highlight the business perspective while excluding the human impact on workers, which creates a biased narrative."
        }
      ]
    },
    {
      "id": "media-literacy-101-l07",
      "title": "The Bigger Picture: Ethics and Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-101-l07-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the lesson's ethical checklist to analyze the scenarios. Consider all affected groups."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "In this lesson, we will analyze the different 'stakeholders' involved in any media story. We'll identify who benefits, who might be harmed, and how different reporting choices affect various groups. This helps us understand the ethical responsibility that comes with creating and sharing information.",
          "visualPrompts": [
            "A mind map with a central topic ('New Media Policy') and branches to different groups: 'Journalists,' 'The Public,' 'Advertisers,' 'Subjects of Stories.'"
          ]
        },
        {
          "id": "media-literacy-101-l07-c2",
          "kind": "concept",
          "title": "Who is Responsible?",
          "content": "Here, we will discuss accountability. Who is responsible when media causes harm? We will learn about the importance of transparency (being open about your process), and the need for clear pathways to correct errors and address complaints. This empowers us to demand more responsible media.",
          "visualPrompts": [
            "A diagram showing a clear path for a reader to submit a correction request and for the newsroom to review and respond to it.",
            "An icon of a shield, representing accountability and protection."
          ]
        },
        {
          "id": "media-literacy-101-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Ethical Media",
          "content": "Before publishing, responsible creators should use an ethical checklist. Does this story protect vulnerable people? Is it fair to everyone involved? Have we been transparent about our sources and methods? By asking these questions, we can ensure our media practices are responsible and serve the public good.",
          "visualPrompts": [
            "An illustration of a pre-flight checklist used by a pilot, but with items like 'Check for Bias,' 'Confirm Sources,' 'Consider Impact.'",
            "A simple infographic summarizing the key ethical questions."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-101-l07-f1",
          "front": "Stakeholder Map",
          "back": "A visual tool used to identify all the different people and groups affected by a decision and to analyze the impact on each one."
        },
        {
          "id": "media-literacy-101-l07-f2",
          "front": "Accountability",
          "back": "The obligation of an individual or organization to be responsible for their actions and outcomes, including providing a way to fix problems."
        },
        {
          "id": "media-literacy-101-l07-f3",
          "front": "Ethical Media Practice",
          "back": "Creating and sharing media in a way that is fair, accurate, transparent, and minimizes harm to individuals and society."
        }
      ]
    },
    {
      "id": "media-literacy-101-l08",
      "title": "Final Project: Your Media Literacy Capstone",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the provided template to build your project plan. Be clear, concise, and base your claims on the evidence you plan to gather."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-101-l08-c1",
          "kind": "practice",
          "title": "Planning Your Project",
          "content": "In this activity, you will create a one-page plan for your final capstone project. This plan will outline your main objective, identify potential challenges, establish how you will measure success, and set checkpoints to review your progress. This structured approach will guide your project from start to finish.",
          "visualPrompts": [
            "An icon of an architectural blueprint or a project charter document.",
            "An animation of a blank page being filled in with the sections of the project plan."
          ]
        },
        {
          "id": "media-literacy-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Share Your Findings",
          "content": "To conclude the course, you will prepare a short presentation of your project. We will provide a template to help you make claims that are strongly supported by evidence and to clearly explain the reasoning behind your conclusions and any tradeoffs you identified. This will help you share your work confidently and effectively.",
          "visualPrompts": [
            "An image of a person presenting a slide with a clear claim, supported by a simple chart (evidence).",
            "A template slide with placeholders for 'My Claim,' 'My Evidence,' and 'My Reasoning.'"
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-101-l08-act1",
          "type": "project_builder",
          "title": "Build Your Project Plan",
          "description": "Use this tool to build a one-page plan for your capstone project, including your research question, methods, and success criteria.",
          "instructions": [
            "State your primary objective or research question.",
            "Define at least two measurable indicators of success.",
            "Identify one potential ethical challenge and your plan to address it."
          ]
        },
        {
          "id": "media-literacy-101-l08-act2",
          "type": "debate_simulator",
          "title": "Defend Your Choices",
          "description": "In this drill, you will receive critiques of your proposed project plan. Practice defending your approach against challenges related to bias, evidence, and impact.",
          "instructions": []
        }
      ]
    }
  ]
};
