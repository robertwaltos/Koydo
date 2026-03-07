import type { LearningModule } from "@/lib/modules/types";

export const media_literacy_201_Module: LearningModule = {
  "id": "media-literacy-201",
  "title": "Media Literacy Applied Practice",
  "description": "A hands-on course in media literacy where you'll learn to analyze source credibility, understand how stories are framed, identify misinformation, and see how media impacts society. Develop critical thinking skills through real-world scenarios and projects.",
  "subject": "Media Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "communication",
    "critical-thinking"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Analyze the credibility of a media source by identifying its biases and assumptions.",
    "Develop a consistent method for evaluating how media narratives are constructed.",
    "Identify and analyze misinformation and its potential impact.",
    "Evaluate how media consumption can influence personal and community decisions.",
    "Communicate complex media concepts, including the trade-offs between different viewpoints.",
    "Synthesize media literacy skills to create and defend a final analysis project."
  ],
  "lessons": [
    {
      "id": "media-literacy-201-l01",
      "title": "Media Literacy Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "media-literacy-201-l01-a1",
          "type": "image",
          "title": "The 5 W's of Source Credibility",
          "content": "An infographic showing key questions to ask: Who created this? What is its purpose? When was it published? Where does the information come from? Why should I believe it?"
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l01-c1",
          "kind": "concept",
          "title": "Building a Common Language",
          "content": "In this lesson, we'll establish a shared vocabulary for discussing media literacy. We will define the key terms and concepts that guide our learning, and explore how source credibility and narrative framing shape our perception of real-world events. Our goal is to become more thoughtful and critical consumers of information."
        },
        {
          "id": "media-literacy-201-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "Here, you will practice tracing the connections between events and their reported outcomes in media. We will learn to identify hidden assumptions in a story and check for important context before drawing conclusions. This helps you think critically about the cause-and-effect relationships presented in media narratives."
        },
        {
          "id": "media-literacy-201-l01-c3",
          "kind": "recap",
          "title": "The Importance of Evidence",
          "content": "This module introduces a workflow that puts evidence first. You will learn how to connect claims made in the media to facts that can be checked and verified. We will also discuss how to assess the level of certainty for different claims, helping you approach all information with a healthy dose of skepticism."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l01-f1",
          "front": "Source Credibility",
          "back": "How trustworthy a source of information is, based on evidence like expertise, reputation, and lack of bias."
        },
        {
          "id": "media-literacy-201-l01-f2",
          "front": "Narrative Framing",
          "back": "The way a story is told, including the details, images, and words chosen to influence an audience's perspective."
        },
        {
          "id": "media-literacy-201-l01-f3",
          "front": "Misinformation Analysis",
          "back": "The process of identifying false or misleading information and understanding how it spreads and affects people."
        }
      ]
    },
    {
      "id": "media-literacy-201-l02",
      "title": "Media Literacy Methods Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-201-l02-a1",
          "type": "image",
          "title": "Your Media Analysis Toolkit",
          "content": "A visual checklist of steps for analyzing a media piece: 1. Identify the source. 2. Check for bias. 3. Find other sources. 4. Analyze the framing."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l02-c1",
          "kind": "practice",
          "title": "Building Your Analysis Workflow",
          "content": "In this interactive practice, you will build a step-by-step process to analyze media effectively and reliably. After creating your workflow, you will test it against several challenging scenarios to see how well it works under uncertain conditions, sharpening your problem-solving skills."
        },
        {
          "id": "media-literacy-201-l02-c2",
          "kind": "recap",
          "title": "Reviewing Your Process",
          "content": "In this recap, you will review your media analysis workflow. We'll focus on setting checkpoints to pause and reflect, identifying when a piece of information is too unreliable to continue, and keeping a log of your evidence. This ensures you are prepared for any analytical challenges."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l02-act1",
          "type": "matching_pairs",
          "title": "Connecting Actions to Results",
          "description": "Match each critical thinking action to its most likely outcome.",
          "pairs": [
            {
              "left": "Fact-checking a claim before sharing",
              "right": "Reduces the spread of misinformation"
            },
            {
              "left": "Pausing to review your own bias",
              "right": "Leads to a more objective analysis"
            },
            {
              "left": "Comparing multiple sources",
              "right": "Provides a more complete picture of the story"
            },
            {
              "left": "Reflecting on what you learned",
              "right": "Improves your analysis skills for the future"
            }
          ]
        },
        {
          "id": "media-literacy-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Identifying Different Types of Influence",
          "description": "Sort these factors based on how they influence a media message.",
          "buckets": [
            "Creator's Choices",
            "Audience Factors",
            "Platform Rules"
          ],
          "items": [
            {
              "text": "Using emotional language in a headline",
              "bucket": "Creator's Choices"
            },
            {
              "text": "A viewer's existing political beliefs",
              "bucket": "Audience Factors"
            },
            {
              "text": "An algorithm that promotes viral content",
              "bucket": "Platform Rules"
            },
            {
              "text": "The photo chosen for an article",
              "bucket": "Creator's Choices"
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-201-l03",
      "title": "Checkpoint 1: Core Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-201-l03-a1",
          "type": "image",
          "title": "Tip Sheet: Answering Quiz Questions",
          "content": "A graphic with tips: 1. Read each question carefully. 2. Eliminate obviously wrong answers. 3. Choose the BEST option based on the lessons."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-201-l03-q1",
          "text": "When evaluating a news source's credibility, what is the most important first step?",
          "skillId": "media-literacy-201-skill-credibility",
          "options": [
            {
              "id": "a",
              "text": "Agreeing with the article's conclusion"
            },
            {
              "id": "b",
              "text": "Identifying the author and their potential biases"
            },
            {
              "id": "c",
              "text": "Checking how many likes it has on social media"
            },
            {
              "id": "d",
              "text": "Reading only the headline"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Understanding who created the content and what their perspective might be is a critical first step in assessing credibility."
        },
        {
          "id": "media-literacy-201-l03-q2",
          "text": "Narrative framing refers to...",
          "skillId": "media-literacy-201-skill-framing",
          "options": [
            {
              "id": "a",
              "text": "The process of printing a newspaper."
            },
            {
              "id": "b",
              "text": "How a story is constructed to emphasize certain aspects and influence the audience."
            },
            {
              "id": "c",
              "text": "A list of 100% objective, unchangeable facts."
            },
            {
              "id": "d",
              "text": "The physical frame around a picture in an article."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Framing involves selecting and highlighting certain information to encourage a particular interpretation."
        },
        {
          "id": "media-literacy-201-l03-q3",
          "text": "What is the most effective way to verify a surprising claim you see online?",
          "skillId": "media-literacy-201-skill-verification",
          "options": [
            {
              "id": "a",
              "text": "Trust it if it comes from a friend."
            },
            {
              "id": "b",
              "text": "Check the comment section to see if people agree."
            },
            {
              "id": "c",
              "text": "Search for the claim on multiple, independent, and reliable news sites."
            },
            {
              "id": "d",
              "text": "Share it immediately to see what your friends think."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Corroborating information across multiple reliable sources is a core practice of fact-checking and media literacy."
        },
        {
          "id": "media-literacy-201-l03-q4",
          "text": "An 'observable indicator' of a claim is another way of saying...",
          "skillId": "media-literacy-201-skill-evidence",
          "options": [
            {
              "id": "a",
              "text": "A popular opinion about the claim."
            },
            {
              "id": "b",
              "text": "A feeling or hunch you have."
            },
            {
              "id": "c",
              "text": "Verifiable evidence or data that supports the claim."
            },
            {
              "id": "d",
              "text": "A prediction of what might happen next."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Evidence consists of facts, data, and observations that can be checked and verified independently."
        },
        {
          "id": "media-literacy-201-l03-q5",
          "text": "Developing a personal 'analysis workflow' is useful because it...",
          "skillId": "media-literacy-201-skill-workflow",
          "options": [
            {
              "id": "a",
              "text": "Guarantees you will never be wrong."
            },
            {
              "id": "b",
              "text": "Helps you analyze information quickly without thinking."
            },
            {
              "id": "c",
              "text": "Provides a consistent, step-by-step method for evaluating media critically."
            },
            {
              "id": "d",
              "text": "Only works for analyzing social media posts."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A workflow provides a structured and reliable process to ensure you are thorough and consistent in your analysis."
        }
      ]
    },
    {
      "id": "media-literacy-201-l04",
      "title": "Media Literacy Case Analysis",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "media-literacy-201-l04-a1",
          "type": "image",
          "title": "Case Study Deconstruction",
          "content": "A diagram showing how to break down a news story: Main Claim -> Supporting Evidence -> Narrative Frame -> Potential Impact."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l04-c1",
          "kind": "example",
          "title": "Analyzing a Real-World Event",
          "content": "In this case study, we will analyze multiple media narratives surrounding a recent, fast-moving public event. Your goal is to distinguish between verifiable evidence and speculation, and to identify the potential real-world consequences of different media portrayals. This exercise will deepen your understanding of how media shapes public perception."
        },
        {
          "id": "media-literacy-201-l04-c2",
          "kind": "concept",
          "title": "Weighing Different Perspectives",
          "content": "In this section, you will practice evaluating different interpretations of the same event. We will use a structured approach to compare the evidence, logic, and potential biases of each perspective. This method will guide you in forming a more complete and nuanced understanding of complex issues."
        },
        {
          "id": "media-literacy-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Misleading Media",
          "content": "In this recap, we will identify common patterns in how media can be misleading. By understanding these patterns, such as using emotional language or taking quotes out of context, you can develop mental shortcuts to spot potential misinformation more quickly in the future."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l04-f1",
          "front": "Weighing Pros and Cons",
          "back": "A structured way to compare the strengths and weaknesses of different arguments or interpretations before forming a conclusion."
        },
        {
          "id": "media-literacy-201-l04-f2",
          "front": "Misleading Pattern",
          "back": "A common technique or reason why information can be deceptive, such as using a misleading chart or an out-of-context photo."
        },
        {
          "id": "media-literacy-201-l04-f3",
          "front": "Impact Assessment",
          "back": "The process of evaluating the potential real-world consequences of a media narrative on individuals or society."
        }
      ]
    },
    {
      "id": "media-literacy-201-l05",
      "title": "Media Literacy Simulation Studio",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "media-literacy-201-l05-a1",
          "type": "image",
          "title": "Simulation Dashboard",
          "content": "An image of a dashboard with dials for 'Public Trust,' 'Information Accuracy,' and 'Civic Engagement' that you will try to influence in the simulation."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l05-c1",
          "kind": "practice",
          "title": "Setting the Scene",
          "content": "In this interactive simulation, you will take on the role of a media analyst during a breaking news event. You will make choices about what information to trust and share, and see how those choices affect public trust and understanding of the event."
        },
        {
          "id": "media-literacy-201-l05-c2",
          "kind": "recap",
          "title": "Analyzing Your Impact",
          "content": "At the end of each simulation round, you will review the consequences of your decisions. We will examine the evidence, see how your actions aligned with the goal of informing the public responsibly, and identify ways to improve your decision-making in the next round."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l05-act1",
          "type": "scenario_practice",
          "title": "The Information Crisis Simulation",
          "description": "You are presented with three conflicting reports about a local crisis. Choose a strategy for how to report on the situation and justify your choice based on its likely impact on public trust and safety.",
          "instructions": [
            "Define your primary objective: Is it to be first, to be 100% accurate, or to prevent panic?",
            "For each of the three reports, identify one potential risk of sharing it.",
            "Choose your strategy and explain how you will measure whether it was successful."
          ]
        },
        {
          "id": "media-literacy-201-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Problems to Solutions",
          "description": "Match each common media problem with the best response.",
          "pairs": [
            {
              "left": "A source is known for sensational clickbait.",
              "right": "Verify its claims with more reputable sources."
            },
            {
              "left": "A platform's rules on misinformation are unclear.",
              "right": "Be extra cautious and prioritize well-vetted information."
            },
            {
              "left": "A story's 'likes' don't match its factual accuracy.",
              "right": "Ignore social metrics and focus on the evidence."
            },
            {
              "left": "Public trust in the media is declining.",
              "right": "Increase transparency about your sources and methods."
            }
          ]
        }
      ]
    },
    {
      "id": "media-literacy-201-l06",
      "title": "Checkpoint 2: Systems and Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "media-literacy-201-l06-a1",
          "type": "image",
          "title": "Tip Sheet: Answering Quiz Questions",
          "content": "A graphic with tips: 1. Read each question carefully. 2. Eliminate obviously wrong answers. 3. Choose the BEST option based on the lessons."
        }
      ],
      "questions": [
        {
          "id": "media-literacy-201-l06-q1",
          "text": "In a case study involving multiple conflicting reports, what is the most responsible action?",
          "skillId": "media-literacy-201-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Choose the report that sounds the most exciting."
            },
            {
              "id": "b",
              "text": "Report all of them as equally true."
            },
            {
              "id": "c",
              "text": "Acknowledge the uncertainty and report only what can be verified."
            },
            {
              "id": "d",
              "text": "Ignore all of them and wait for the story to disappear."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Responsible analysis involves clearly communicating what is known, what is unknown, and what is unconfirmed."
        },
        {
          "id": "media-literacy-201-l06-q2",
          "text": "The goal of a 'weighing perspectives' exercise is to...",
          "skillId": "media-literacy-201-skill-perspective",
          "options": [
            {
              "id": "a",
              "text": "Prove that one side is 100% right and the other is 100% wrong."
            },
            {
              "id": "b",
              "text": "Understand the strengths, weaknesses, and underlying assumptions of different viewpoints."
            },
            {
              "id": "c",
              "text": "Decide which perspective is the most popular."
            },
            {
              "id": "d",
              "text": "Avoid making any judgment at all."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This method encourages a nuanced understanding by systematically evaluating multiple sides of an issue."
        },
        {
          "id": "media-literacy-201-l06-q3",
          "text": "What does it mean to learn from 'misleading patterns' in media?",
          "skillId": "media-literacy-201-skill-patterns",
          "options": [
            {
              "id": "a",
              "text": "Memorizing a list of every false story ever published."
            },
            {
              "id": "b",
              "text": "Recognizing common techniques used to manipulate or mislead audiences."
            },
            {
              "id": "c",
              "text": "Assuming that all media is intentionally misleading."
            },
            {
              "id": "d",
              "text": "Only trusting media that you create yourself."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Identifying patterns, like using emotional appeals over facts, helps you spot potential issues in new content you encounter."
        },
        {
          "id": "media-literacy-201-l06-q4",
          "text": "A media simulation is a useful learning tool because it...",
          "skillId": "media-literacy-201-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "Perfectly predicts the future."
            },
            {
              "id": "b",
              "text": "Shows how your decisions can have unintended consequences in a safe environment."
            },
            {
              "id": "c",
              "text": "Proves that there is always one single right answer."
            },
            {
              "id": "d",
              "text": "Is a fun game that has no connection to the real world."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations provide a space to practice decision-making and see the cause-and-effect of your choices without real-world harm."
        },
        {
          "id": "media-literacy-201-l06-q5",
          "text": "In the 'Information Crisis Simulation,' prioritizing speed over accuracy is likely to lead to what outcome?",
          "skillId": "media-literacy-201-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "An increase in long-term public trust."
            },
            {
              "id": "b",
              "text": "A decrease in public trust if the initial information is wrong."
            },
            {
              "id": "c",
              "text": "A perfectly informed public."
            },
            {
              "id": "d",
              "text": "No significant consequences."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Rushing to publish unverified information can severely damage credibility and trust, even if it is later corrected."
        }
      ]
    },
    {
      "id": "media-literacy-201-l07",
      "title": "Media Literacy Ethics, Policy, and Public Impact",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "media-literacy-201-l07-a1",
          "type": "image",
          "title": "The Ripple Effect",
          "content": "An infographic showing how a single piece of media can ripple outwards to affect individuals, communities, and society."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "In this section, we will conduct a 'stakeholder analysis' to identify who benefits from a media narrative, who might be harmed, and how different editorial choices can shape outcomes for various groups. This helps us understand the complex impact of media on society."
        },
        {
          "id": "media-literacy-201-l07-c2",
          "kind": "concept",
          "title": "Rules, Responsibility, and Consequences",
          "content": "Here, we will explore governance and accountability in media. You will learn how ethical guidelines, transparency, and pathways for correcting errors are essential for building trust. This knowledge will empower you to understand how media organizations can be held accountable."
        },
        {
          "id": "media-literacy-201-l07-c3",
          "kind": "recap",
          "title": "An Ethical Media Checklist",
          "content": "Before creating or sharing media, it's important to consider its ethical implications. We will review a checklist that includes key questions about fairness, accuracy, potential for harm, and transparency. This helps ensure our media practices are responsible and constructive."
        }
      ],
      "flashcards": [
        {
          "id": "media-literacy-201-l07-f1",
          "front": "Stakeholder",
          "back": "Any person or group who is affected by a media story, including the subjects of the story, the audience, and the wider community."
        },
        {
          "id": "media-literacy-201-l07-f2",
          "front": "Accountability",
          "back": "The process of holding media creators and organizations responsible for their content and its impact, often through corrections, clarifications, or public statements."
        },
        {
          "id": "media-literacy-201-l07-f3",
          "front": "Responsible Sharing",
          "back": "The practice of sharing information in a way that is ethical, fair, and considers the potential harm to others."
        }
      ]
    },
    {
      "id": "media-literacy-201-l08",
      "title": "Media Literacy Capstone Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "media-literacy-201-l08-a1",
          "type": "image",
          "title": "Capstone Project Canvas",
          "content": "A one-page template with sections for Project Goal, Key Questions, Target Audience, and Success Metrics."
        }
      ],
      "chunks": [
        {
          "id": "media-literacy-201-l08-c1",
          "kind": "practice",
          "title": "Defining Your Final Project",
          "content": "In this activity, you will create a detailed plan for your final capstone project. This plan will outline your main research question, identify potential challenges, establish how you will measure success, and set checkpoints to keep your project on track."
        },
        {
          "id": "media-literacy-201-l08-c2",
          "kind": "recap",
          "title": "Preparing to Present Your Findings",
          "content": "To conclude the lesson, you will use a presentation template to structure your project's argument. This will guide you in making claims that are strongly supported by evidence and require you to explain the reasoning behind your conclusions and any trade-offs you considered."
        }
      ],
      "interactiveActivities": [
        {
          "id": "media-literacy-201-l08-act1",
          "type": "project_builder",
          "title": "Project Proposal Builder",
          "description": "Build a one-page plan for your capstone project, including your topic, key questions, and success criteria.",
          "instructions": [
            "State the primary objective of your analysis.",
            "Define at least three key questions you plan to investigate.",
            "Identify one potential ethical consideration or bias in your topic and a plan to address it."
          ]
        },
        {
          "id": "media-literacy-201-l08-act2",
          "type": "debate_simulator",
          "title": "Critique Your Own Work",
          "description": "Anticipate and prepare responses to potential critiques of your capstone project related to bias, evidence, and fairness."
        }
      ]
    }
  ]
};
