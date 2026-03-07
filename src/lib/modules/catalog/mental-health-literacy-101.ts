import type { LearningModule } from "@/lib/modules/types";

export const mental_health_literacy_101_Module: LearningModule = {
  "id": "mental-health-literacy-101",
  "title": "Mental Health Literacy Foundations",
  "description": "A beginner's guide to understanding mental health. This course helps you learn the basics, recognize when someone might be struggling, find ways to help, and act ethically and responsibly. You'll learn through real-world examples, interactive activities, and building your own support project.",
  "subject": "Health & Psychology",
  "tags": [
    "mental-health",
    "wellbeing",
    "core-curriculum",
    "interactive",
    "beginner"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Define mental health and identify key factors that influence it.",
    "Recognize early signs of mental health challenges in yourself and others.",
    "Create a simple, effective plan to support someone who is struggling.",
    "Analyze the potential positive and negative impacts of different support actions.",
    "Apply ethical principles like privacy and respect when offering help.",
    "Communicate clearly and compassionately about mental health topics.",
    "Develop a mental health resource for your community based on evidence and best practices."
  ],
  "lessons": [
    {
      "id": "mental-health-literacy-101-l01",
      "title": "Introduction to Mental Health",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l01-a1",
          "type": "image",
          "title": "The Mental Health Spectrum",
          "content": "An infographic showing that mental health is a spectrum, ranging from thriving to struggling, and that everyone's position on it can change over time."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l01-c1",
          "kind": "concept",
          "title": "What is Mental Health?",
          "content": "In this lesson, we'll build a shared understanding of mental health. We'll define key terms like 'mental health,' 'mental illness,' and 'wellbeing' so we can talk about these topics clearly and respectfully. This foundation helps us create a safe space for learning and discussion."
        },
        {
          "id": "mental-health-literacy-101-l01-c2",
          "kind": "concept",
          "title": "Factors That Affect Our Mental Health",
          "content": "We'll explore the different things that can impact our mental health, from daily stress and relationships to biology and environment. Understanding these causes and effects helps us see the bigger picture and find more effective ways to offer support."
        },
        {
          "id": "mental-health-literacy-101-l01-c3",
          "kind": "recap",
          "title": "Relying on Facts, Not Myths",
          "content": "In this recap, we'll review why it's important to base our understanding of mental health on reliable evidence, not stereotypes or misinformation. We'll learn how to spot credible sources and why checking the facts is a key part of being a good ally."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-101-l01-f1",
          "front": "Mental Health",
          "back": "Our emotional, psychological, and social well-being. It affects how we think, feel, and act."
        },
        {
          "id": "mental-health-literacy-101-l01-f2",
          "front": "Early Warning Signs",
          "back": "Changes in a person's thoughts, feelings, or behaviors that might indicate a mental health challenge."
        },
        {
          "id": "mental-health-literacy-101-l01-f3",
          "front": "Support Pathway",
          "back": "A plan or series of steps to help someone access care, from talking to a friend to seeing a professional."
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l02",
      "title": "Building a Support Plan",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l02-a1",
          "type": "image",
          "title": "Diagram: A Simple Support Plan",
          "content": "A flowchart showing the key steps: Listen, Reassure, Encourage, and Check In."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l02-c1",
          "kind": "practice",
          "title": "Creating a Step-by-Step Support Plan",
          "content": "In this activity, you'll learn how to create a basic support plan. We'll map out who does what, when to check in, and how to know if the plan is helping. This hands-on practice will give you a clear framework for offering support to others."
        },
        {
          "id": "mental-health-literacy-101-l02-c2",
          "kind": "recap",
          "title": "What to Do When a Plan Isn't Working",
          "content": "Sometimes, our first attempt to help doesn't work as expected. In this recap, we'll discuss how to recognize when a plan needs to change and the importance of being flexible. We'll also cover when it's time to encourage someone to seek professional help."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Support Actions",
          "description": "Match each supportive action to its main goal.",
          "pairs": [
            {
              "left": "Active Listening",
              "right": "Helps the person feel heard and understood."
            },
            {
              "left": "Suggesting a walk",
              "right": "Offers a healthy coping strategy."
            },
            {
              "left": "Sharing a helpline number",
              "right": "Connects them to professional support."
            },
            {
              "left": "Checking in later",
              "right": "Shows you offer ongoing, reliable support."
            }
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l03",
      "title": "Checkpoint 1: Understanding the Basics",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l03-a1",
          "type": "image",
          "title": "Key Concepts Review",
          "content": "A one-page graphic summarizing the core ideas from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-101-l03-q1",
          "text": "What is the best definition of mental health?",
          "skillId": "mental-health-literacy-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Being happy all the time."
            },
            {
              "id": "b",
              "text": "The absence of a mental illness."
            },
            {
              "id": "c",
              "text": "Our overall emotional, psychological, and social well-being."
            },
            {
              "id": "d",
              "text": "Something that only doctors can understand."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mental health is a broad concept that includes our emotional, psychological, and social well-being, not just the absence of illness."
        },
        {
          "id": "mental-health-literacy-101-l03-q2",
          "text": "When creating a support plan, what is a crucial first step?",
          "skillId": "mental-health-literacy-101-skill-execution",
          "options": [
            {
              "id": "a",
              "text": "Listening to the person to understand their needs."
            },
            {
              "id": "b",
              "text": "Telling the person exactly what to do."
            },
            {
              "id": "c",
              "text": "Posting about their situation on social media."
            },
            {
              "id": "d",
              "text": "Ignoring the problem and hoping it goes away."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A reliable support plan starts with listening to understand the person's unique situation and what they feel they need."
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l04",
      "title": "Analyzing a Real-World Scenario",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l04-a1",
          "type": "image",
          "title": "Decision Tree",
          "content": "A visual diagram showing how different choices in a support scenario can lead to different outcomes."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l04-c1",
          "kind": "example",
          "title": "Scenario: Supporting a Friend",
          "content": "In this case study, we'll look at a common scenario: a student is worried about a friend who seems withdrawn and anxious. We'll analyze the situation, identify potential risks (like saying the wrong thing), and consider the importance of privacy and trust."
        },
        {
          "id": "mental-health-literacy-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Pros and Cons",
          "content": "We'll use a simple framework to evaluate different ways to help. For each option, we'll consider its potential benefits, possible downsides, and how it might make our friend feel. This helps us make more thoughtful and effective decisions."
        },
        {
          "id": "mental-health-literacy-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "In this recap, we'll discuss how to learn from situations that don't go perfectly. By reflecting on what happened, we can create better plans for the future and become more confident in our ability to help others safely and effectively."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-101-l04-f1",
          "front": "Tradeoff",
          "back": "A situation where you have to choose between two or more options, each with its own benefits and drawbacks."
        },
        {
          "id": "mental-health-literacy-101-l04-f2",
          "front": "Stakeholder",
          "back": "Anyone who is affected by a situation or a decision, such as the person needing support, their friends, family, and teachers."
        },
        {
          "id": "mental-health-literacy-101-l04-f3",
          "front": "Confidentiality",
          "back": "Respecting someone's privacy by not sharing their personal information without their permission, unless there is a risk of harm."
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l05",
      "title": "Practicing Your Skills: A Simulation",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l05-a1",
          "type": "practice",
          "title": "Conversation Starters",
          "content": "A list of helpful phrases to start a conversation about mental health, like 'I've noticed you seem down lately, is everything okay?' or 'I'm here for you if you want to talk.'"
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l05-c1",
          "kind": "practice",
          "title": "Role-Playing a Support Conversation",
          "content": "In this interactive simulation, you'll choose how to respond in a conversation with someone who is struggling. You'll see how different choices can lead to different outcomes, helping you practice your communication skills in a safe environment."
        },
        {
          "id": "mental-health-literacy-101-l05-c2",
          "kind": "recap",
          "title": "Reflecting on the Simulation",
          "content": "After the simulation, we'll discuss what worked well and what could be improved. This reflection helps us understand the impact of our words and actions, and builds our confidence for real-life situations."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-101-l05-act1",
          "type": "scenario_practice",
          "title": "Supportive Conversation Simulator",
          "description": "Navigate a conversation with a friend who is showing signs of stress. Choose your responses and see the outcome.",
          "instructions": [
            "Read the opening scenario carefully.",
            "Choose the response you think is most helpful and respectful.",
            "Observe the outcome and reflect on why it was or wasn't effective."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l06",
      "title": "Checkpoint 2: Applying Your Skills",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l06-a1",
          "type": "practice",
          "title": "Scenario Review",
          "content": "A brief summary of the case study and simulation to refresh your memory before the quiz."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-101-l06-q1",
          "text": "In the case study of supporting a friend, what is a key ethical consideration?",
          "skillId": "mental-health-literacy-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Telling all your other friends so they can help too."
            },
            {
              "id": "b",
              "text": "Respecting their privacy unless you believe they are in danger."
            },
            {
              "id": "c",
              "text": "Making decisions for them so they don't have to worry."
            },
            {
              "id": "d",
              "text": "Only helping if they promise to do something for you in return."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ethical support involves respecting a person's confidentiality and autonomy, unless there's a serious risk of harm to themselves or others."
        },
        {
          "id": "mental-health-literacy-101-l06-q2",
          "text": "When weighing the pros and cons of an action, what is most important to consider?",
          "skillId": "mental-health-literacy-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "How the action will make you look to others."
            },
            {
              "id": "b",
              "text": "Only the potential positive outcomes."
            },
            {
              "id": "c",
              "text": "The potential impact on the person's feelings, safety, and trust."
            },
            {
              "id": "d",
              "text": "Which option is the quickest and easiest for you."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A thoughtful decision considers the full impact on the person you are trying to support, including their emotional well-being and your relationship with them."
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l07",
      "title": "Ethics and Responsibility in Mental Health Support",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l07-a1",
          "type": "image",
          "title": "Stakeholder Map",
          "content": "A diagram showing how a person's mental health challenge can affect many people in their life, including family, friends, and teachers."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l07-c1",
          "kind": "concept",
          "title": "Considering Everyone Involved",
          "content": "When we offer support, our actions can affect many people. We'll learn how to think about the impact on different 'stakeholders'—the person, their family, and the wider community—to ensure our help is truly helpful."
        },
        {
          "id": "mental-health-literacy-101-l07-c2",
          "kind": "concept",
          "title": "Being Responsible and Fair",
          "content": "This section covers the architecture of accountability. We'll discuss why it's important to be transparent about our actions, respect people's rights, and take responsibility for the support we offer. This builds trust and ensures fairness."
        },
        {
          "id": "mental-health-literacy-101-l07-c3",
          "kind": "recap",
          "title": "Putting It All Together: A Checklist for Helping",
          "content": "We'll recap with a final checklist for responsible support. This tool will help you balance being effective, managing risks, and considering the ethical impact of your actions, so you can make good decisions when helping others."
        }
      ],
      "flashcards": [
        {
          "id": "mental-health-literacy-101-l07-f1",
          "front": "Accountability",
          "back": "Taking responsibility for your actions and their outcomes, especially when offering support to others."
        },
        {
          "id": "mental-health-literacy-101-l07-f2",
          "front": "Transparency",
          "back": "Being open and honest about your intentions and actions, which helps build trust."
        },
        {
          "id": "mental-health-literacy-101-l07-f3",
          "front": "Ethical Support",
          "back": "Offering help in a way that is effective, respectful, fair, and protects the well-being of everyone involved."
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l08",
      "title": "Planning Your Capstone Project",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l08-a1",
          "type": "practice",
          "title": "Project Idea Bank",
          "content": "A list of sample project ideas, such as creating a poster with mental health resources, writing a script for a school announcement, or designing a social media campaign."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l08-c1",
          "kind": "practice",
          "title": "Creating Your Project Outline",
          "content": "In this activity, you'll start planning your final project. You'll define a clear goal, identify your target audience, and decide how you'll measure your project's success. This structured approach will set you up for a great final product."
        },
        {
          "id": "mental-health-literacy-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Share Your Project",
          "content": "We'll discuss how to prepare to present your project. This includes thinking about how to explain your choices, connect them to what you've learned in the course, and answer questions about your work. This helps build your communication skills."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Project Planner",
          "description": "Build an outline for a capstone project that creates a mental health resource for your community.",
          "instructions": [
            "Define your project's main goal and who it's for.",
            "List at least two key messages you want to communicate.",
            "Describe how you will know if your project is successful."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l09",
      "title": "Capstone Project: Creating a Mental Health Resource",
      "type": "interactive",
      "duration": 30,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l09-a1",
          "type": "image",
          "title": "Project Showcase",
          "content": "Examples of finished capstone projects, like an infographic, a short animated video, and a resource wallet card."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l09-c1",
          "kind": "practice",
          "title": "Build Your Resource",
          "content": "It's time to bring your project plan to life! Use the tools and knowledge from this course to create a valuable mental health resource for your school or community. Focus on making it clear, helpful, and respectful."
        }
      ],
      "interactiveActivities": [
        {
          "id": "mental-health-literacy-101-l09-act1",
          "type": "project_builder",
          "title": "Capstone Creation Studio",
          "description": "Develop and submit your final capstone project.",
          "instructions": [
            "Use your project plan from the previous lesson as your guide.",
            "Create your resource (e.g., write the text, design the visual, record the audio).",
            "Write a brief reflection on what you learned during the creation process."
          ]
        }
      ]
    },
    {
      "id": "mental-health-literacy-101-l10",
      "title": "Final Checkpoint & Course Wrap-Up",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "mental-health-literacy-101-l10-a1",
          "type": "image",
          "title": "Key Takeaways",
          "content": "A summary graphic of the most important skills and concepts from the entire course."
        }
      ],
      "chunks": [
        {
          "id": "mental-health-literacy-101-l10-c1",
          "kind": "recap",
          "title": "Course Wrap-Up",
          "content": "Congratulations on completing the course! You've learned how to understand mental health, recognize signs of struggle, and offer support responsibly. Remember that being a mental health ally is an ongoing journey. Keep learning, keep listening, and keep supporting one another."
        }
      ],
      "questions": [
        {
          "id": "mental-health-literacy-101-l10-q1",
          "text": "Which of the following is the most responsible way to use social media when you're concerned about a friend?",
          "skillId": "mental-health-literacy-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Post a vague status about them to see if they respond."
            },
            {
              "id": "b",
              "text": "Ask for advice in a large group chat that includes the friend."
            },
            {
              "id": "c",
              "text": "Send them a private message to check in and offer support."
            },
            {
              "id": "d",
              "text": "Share a photo of them and ask people to send good vibes."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Contacting someone privately respects their confidentiality and is the most direct and supportive way to show you care."
        },
        {
          "id": "mental-health-literacy-101-l10-q2",
          "text": "What is the ultimate goal of mental health literacy?",
          "skillId": "mental-health-literacy-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To diagnose your friends with mental illnesses."
            },
            {
              "id": "b",
              "text": "To have all the answers and solve everyone's problems."
            },
            {
              "id": "c",
              "text": "To increase understanding, reduce stigma, and help people find support."
            },
            {
              "id": "d",
              "text": "To become a professional therapist after one course."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mental health literacy empowers us to create a more supportive community by increasing understanding, fighting stigma, and knowing how to connect people with the help they need."
        }
      ]
    }
  ]
};
