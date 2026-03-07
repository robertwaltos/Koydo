import type { LearningModule } from "@/lib/modules/types";

export const international_relations_101_Module: LearningModule = {
  "id": "international-relations-101",
  "title": "Foundations of International Relations",
  "description": "An introductory course on International Relations. Learn about the key actors on the world stage, how they make decisions, and how they cooperate or come into conflict. Explore real-world cases and test your skills in interactive simulations.",
  "subject": "Social Studies",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "policy",
    "global-studies"
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
    "Identify key actors in international relations, such as states and non-governmental organizations (NGOs).",
    "Describe the process of how international decisions and agreements are made.",
    "Analyze the potential positive and negative outcomes of different foreign policy choices.",
    "Evaluate historical and current events using core concepts of international relations.",
    "Communicate complex global issues and potential solutions clearly.",
    "Develop and defend a policy recommendation based on evidence and ethical considerations."
  ],
  "lessons": [
    {
      "id": "international-relations-101-l01",
      "title": "What is International Relations?",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "international-relations-101-l01-a1",
          "type": "image",
          "title": "The World Stage",
          "content": "A world map showing connections between countries, international organizations (like the UN), and non-state actors (like Doctors Without Borders), illustrating the key players in global politics."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l01-c1",
          "kind": "concept",
          "title": "Key Concepts and Vocabulary",
          "content": "Welcome to the world of International Relations! In this lesson, we'll define what 'International Relations' means and learn the basic vocabulary. We'll meet the main 'actors' on the world stage, like countries (states) and large organizations (non-state actors), and see how they interact with each other."
        },
        {
          "id": "international-relations-101-l01-c2",
          "kind": "concept",
          "title": "Why Things Happen: Cause and Effect",
          "content": "In this section, we'll learn to think like a detective and uncover the connections between global events. We'll explore how one country's decision can create a ripple effect across the world. Understanding cause and effect helps us analyze why conflicts start and how cooperation is achieved."
        },
        {
          "id": "international-relations-101-l01-c3",
          "kind": "recap",
          "title": "Thinking with Evidence",
          "content": "To wrap up, we'll focus on the importance of using facts and evidence. In International Relations, it's crucial to base our arguments on reliable information. We'll learn how to support our claims with data and recognize when we need more information to make a sound judgment."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-101-l01-f1",
          "front": "State",
          "back": "A country with its own government and defined territory, like the United States, Japan, or Brazil."
        },
        {
          "id": "international-relations-101-l01-f2",
          "front": "Non-State Actor",
          "back": "An influential organization that is not a country, such as the United Nations, the Red Cross, or a multinational corporation."
        },
        {
          "id": "international-relations-101-l01-f3",
          "front": "Diplomacy",
          "back": "The practice of managing relationships between countries through negotiation and discussion, usually carried out by diplomats."
        }
      ]
    },
    {
      "id": "international-relations-101-l02",
      "title": "How Decisions Are Made: A Practical Guide",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "international-relations-101-l02-a1",
          "type": "image",
          "title": "Decision Flowchart",
          "content": "A simple flowchart graphic showing the steps in making a foreign policy decision: 1. Identify Problem -> 2. Gather Info -> 3. Explore Options -> 4. Make Decision -> 5. Review Outcome."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l02-c1",
          "kind": "practice",
          "title": "Building a Plan of Action",
          "content": "In this interactive activity, you'll get to create a plan to address a global issue. Using what we've learned, you'll outline the steps needed to achieve a goal, considering the different actors involved and the resources you have. This is how real-world policy begins!"
        },
        {
          "id": "international-relations-101-l02-c2",
          "kind": "recap",
          "title": "Safety Checks for Your Plan",
          "content": "Before any plan is put into action, it needs safety checks. We'll review the importance of having clear goals, knowing who is in charge of each step, and having a backup plan if things go wrong. These checks help ensure a plan is effective and responsible."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-101-l02-act1",
          "type": "matching_pairs",
          "title": "Diplomatic Tools",
          "description": "Match the diplomatic tool to its primary goal.",
          "pairs": [
            {
              "left": "Signing a Treaty",
              "right": "Create a formal, binding agreement between countries."
            },
            {
              "left": "Applying Sanctions",
              "right": "Pressure a country to change its behavior by restricting trade."
            },
            {
              "left": "Providing Foreign Aid",
              "right": "Help a country develop or recover from a crisis."
            },
            {
              "left": "Hosting a Summit",
              "right": "Bring leaders together for face-to-face negotiation."
            }
          ]
        },
        {
          "id": "international-relations-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Factors in Decision-Making",
          "description": "Sort these factors into the correct category that influences a country's foreign policy.",
          "buckets": [
            "Economic",
            "Political",
            "Social"
          ],
          "items": [
            {
              "text": "Access to oil reserves",
              "bucket": "Economic"
            },
            {
              "text": "Public opinion on a war",
              "bucket": "Social"
            },
            {
              "text": "Upcoming national election",
              "bucket": "Political"
            },
            {
              "text": "A major trade agreement",
              "bucket": "Economic"
            }
          ]
        }
      ]
    },
    {
      "id": "international-relations-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-101-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before you start, quickly review the key terms from the first two lessons. Focus on the definitions of actors and the steps in decision-making."
        }
      ],
      "questions": [
        {
          "id": "international-relations-101-l03-q1",
          "text": "Which of the following is considered a 'state' in International Relations?",
          "skillId": "ir-concepts",
          "options": [
            {
              "id": "a",
              "text": "The Red Cross"
            },
            {
              "id": "b",
              "text": "Germany"
            },
            {
              "id": "c",
              "text": "Apple Inc."
            },
            {
              "id": "d",
              "text": "The United Nations"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A state is a country with its own government and territory. The Red Cross, Apple, and the UN are all examples of non-state actors."
        },
        {
          "id": "international-relations-101-l03-q2",
          "text": "Diplomacy is best described as:",
          "skillId": "ir-concepts",
          "options": [
            {
              "id": "a",
              "text": "The use of military force to achieve goals."
            },
            {
              "id": "b",
              "text": "Managing relationships between countries through negotiation."
            },
            {
              "id": "c",
              "text": "A country isolating itself from the rest of the world."
            },
            {
              "id": "d",
              "text": "Providing economic aid without any discussion."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Diplomacy focuses on communication, negotiation, and peaceful interaction between states to resolve issues and build relationships."
        },
        {
          "id": "international-relations-101-l03-q3",
          "text": "When creating a plan to address a global issue, what is a crucial first step?",
          "skillId": "decision-making-process",
          "options": [
            {
              "id": "a",
              "text": "Immediately sending troops."
            },
            {
              "id": "b",
              "text": "Ignoring the opinions of other countries."
            },
            {
              "id": "c",
              "text": "Clearly defining the problem and your goals."
            },
            {
              "id": "d",
              "text": "Waiting for the problem to solve itself."
            }
          ],
          "correctOptionId": "c",
          "explanation": "A solid plan starts with a clear understanding of the problem you are trying to solve and what you hope to achieve."
        },
        {
          "id": "international-relations-101-l03-q4",
          "text": "A trade agreement between two countries is primarily what kind of factor in decision-making?",
          "skillId": "decision-making-process",
          "options": [
            {
              "id": "a",
              "text": "Social"
            },
            {
              "id": "b",
              "text": "Political"
            },
            {
              "id": "c",
              "text": "Economic"
            },
            {
              "id": "d",
              "text": "Geographic"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Trade agreements directly concern the exchange of goods and money, making them a key economic factor."
        }
      ]
    },
    {
      "id": "international-relations-101-l04",
      "title": "Learning from History: Case Studies",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "international-relations-101-l04-a1",
          "type": "image",
          "title": "Weighing the Options",
          "content": "A simple graphic of a balance scale. On one side are 'Pros' (e.g., increased security, economic benefit). On the other side are 'Cons' (e.g., high cost, risk of conflict)."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l04-c1",
          "kind": "example",
          "title": "Setting the Scene: A Global Crisis",
          "content": "In this lesson, we'll dive into a real historical event. We'll examine a regional crisis that required careful diplomacy and difficult choices. By understanding the context, the key players, and the high stakes involved, we can see how the concepts we've learned apply in the real world."
        },
        {
          "id": "international-relations-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Options",
          "content": "Every decision in international relations involves tradeoffs. We'll use a simple tool, like a 'pros and cons' list, to evaluate the different paths leaders could have taken. This helps us understand why they made the choices they did and what the potential consequences were for each option."
        },
        {
          "id": "international-relations-101-l04-c3",
          "kind": "recap",
          "title": "Learning from the Past",
          "content": "History is one of our best teachers. We'll conclude by discussing what lessons can be learned from this case study. Understanding past successes and failures helps today's leaders make better, more informed decisions to prevent repeating mistakes and to build a more peaceful world."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-101-l04-f1",
          "front": "Tradeoff",
          "back": "A situation where you must choose between two or more things, and gaining one thing means losing another. For example, spending more on defense might mean spending less on education."
        },
        {
          "id": "international-relations-101-l04-f2",
          "front": "Alliance",
          "back": "A formal agreement or partnership between two or more countries to cooperate for specific purposes, often for mutual defense."
        },
        {
          "id": "international-relations-101-l04-f3",
          "front": "Intervention",
          "back": "An action taken by a country or organization to become involved in the affairs of another country, which can be diplomatic, economic, or military."
        }
      ]
    },
    {
      "id": "international-relations-101-l05",
      "title": "You're the Diplomat: A Simulation",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "international-relations-101-l05-a1",
          "type": "practice",
          "title": "Simulation Briefing",
          "content": "Read the scenario carefully. Your goal is to achieve a peaceful resolution while protecting your country's interests. Good luck!"
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "It's your turn to make the decisions! In this interactive simulation, you will be presented with a developing international crisis. You'll define your goals, consider your options, and choose a course of action. Your choices will determine the outcome."
        },
        {
          "id": "international-relations-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After the simulation, we'll review what happened. We'll analyze the results of your decisions, discuss any unexpected consequences, and think about what you might do differently next time. This debrief is key to turning experience into wisdom."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-101-l05-act1",
          "type": "scenario_practice",
          "title": "Crisis Negotiation",
          "description": "You are the lead diplomat for your country. A neighboring nation has blocked a critical shipping lane. Choose your strategy to resolve the crisis.",
          "instructions": [
            "Review your primary objective: Reopen the shipping lane peacefully.",
            "Consider the short-term and long-term consequences of each option.",
            "Choose your first action: Issue a formal protest, propose negotiations, or request international mediation."
          ]
        },
        {
          "id": "international-relations-101-l05-act2",
          "type": "matching_pairs",
          "title": "Responding to Challenges",
          "description": "Match the international challenge to the most appropriate initial response.",
          "pairs": [
            {
              "left": "A sudden refugee crisis on your border",
              "right": "Coordinate with humanitarian aid organizations."
            },
            {
              "left": "A dispute over fishing rights with a neighbor",
              "right": "Propose bilateral negotiations to define boundaries."
            },
            {
              "left": "A global pandemic emerges",
              "right": "Collaborate with the World Health Organization."
            },
            {
              "left": "Another country violates a climate treaty",
              "right": "Raise the issue at the next international summit."
            }
          ]
        }
      ]
    },
    {
      "id": "international-relations-101-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "international-relations-101-l06-a1",
          "type": "practice",
          "title": "Think Strategically",
          "content": "For these questions, apply the concepts from the case study and simulation. Think about tradeoffs and consequences."
        }
      ],
      "questions": [
        {
          "id": "international-relations-101-l06-q1",
          "text": "When analyzing a historical event, why is it important to study the different options the leaders had?",
          "skillId": "case-analysis",
          "options": [
            {
              "id": "a",
              "text": "To prove that the leaders were wrong."
            },
            {
              "id": "b",
              "text": "Because history is always written by the victors."
            },
            {
              "id": "c",
              "text": "To understand the tradeoffs they faced and why they made their specific choice."
            },
            {
              "id": "d",
              "text": "It is not important, as the outcome is already known."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Understanding the available options and their potential consequences (tradeoffs) provides insight into the complexities of decision-making and the reasons behind historical events."
        },
        {
          "id": "international-relations-101-l06-q2",
          "text": "A country decides to increase its military spending, which means it cannot fund a new national healthcare program. This is a clear example of a:",
          "skillId": "case-analysis",
          "options": [
            {
              "id": "a",
              "text": "Tradeoff"
            },
            {
              "id": "b",
              "text": "Treaty"
            },
            {
              "id": "c",
              "text": "Sanction"
            },
            {
              "id": "d",
              "text": "Non-state actor"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A tradeoff occurs when choosing one option means giving up another. Here, the choice to fund the military comes at the cost of funding healthcare."
        },
        {
          "id": "international-relations-101-l06-q3",
          "text": "In a crisis simulation, why is it important to have a clear objective before you act?",
          "skillId": "simulation-strategy",
          "options": [
            {
              "id": "a",
              "text": "It's not important; it's better to be unpredictable."
            },
            {
              "id": "b",
              "text": "A clear objective helps guide your decisions and measure your success."
            },
            {
              "id": "c",
              "text": "Objectives are only for the other side to guess."
            },
            {
              "id": "d",
              "text": "So you can change your objective halfway through."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Having a clear goal (e.g., 'avoid war,' 'protect citizens') allows you to evaluate your options and choose the one that best helps you achieve that goal."
        },
        {
          "id": "international-relations-101-l06-q4",
          "text": "If a country is facing a humanitarian crisis, which of these would be the most appropriate first response?",
          "skillId": "simulation-strategy",
          "options": [
            {
              "id": "a",
              "text": "Declare war on a neighboring country."
            },
            {
              "id": "b",
              "text": "Close all borders and cut off communication."
            },
            {
              "id": "c",
              "text": "Coordinate with international aid organizations like the Red Cross."
            },
            {
              "id": "d",
              "text": "Build a new sports stadium to boost morale."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Humanitarian crises require expertise in aid distribution and medical care, which organizations like the Red Cross specialize in. International cooperation is key."
        }
      ]
    },
    {
      "id": "international-relations-101-l07",
      "title": "Ethics in Global Affairs",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "international-relations-101-l07-a1",
          "type": "image",
          "title": "Circles of Impact",
          "content": "An infographic with a policy decision at the center. Radiating outwards are circles showing the impact on different groups: 'Local Citizens,' 'Neighboring Countries,' 'Global Trade,' 'The Environment.'"
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "Every international decision affects different groups of people in different ways. In this lesson, we'll explore how to map out the potential impact of a policy. We'll consider not just our own country, but also other nations, specific communities, and even future generations."
        },
        {
          "id": "international-relations-101-l07-c2",
          "kind": "concept",
          "title": "Who is Responsible?",
          "content": "When a decision is made, who is held accountable for the outcome? We'll discuss the concept of accountability in international relations. This includes being transparent about why a decision was made, allowing for review and criticism, and having an obligation to address negative consequences."
        },
        {
          "id": "international-relations-101-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Fair Decisions",
          "content": "To conclude, we'll create a simple checklist for making responsible and ethical decisions. This guide will help us consider a policy's effectiveness, its fairness to all involved, and whether it builds trust between nations. This is a key part of being a responsible global citizen."
        }
      ],
      "flashcards": [
        {
          "id": "international-relations-101-l07-f1",
          "front": "Stakeholder",
          "back": "Any person, group, or nation that is affected by or has an interest in a particular decision or action."
        },
        {
          "id": "international-relations-101-l07-f2",
          "front": "Accountability",
          "back": "The responsibility of decision-makers to explain their actions and be answerable for the results."
        },
        {
          "id": "international-relations-101-l07-f3",
          "front": "Ethics",
          "back": "Moral principles that guide the behavior of individuals or groups. In IR, it involves questions of right and wrong in foreign policy."
        }
      ]
    },
    {
      "id": "international-relations-101-l08",
      "title": "Final Project: Your Global Policy",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "international-relations-101-l08-a1",
          "type": "practice",
          "title": "Project Workspace",
          "content": "Use the tools provided to build your policy proposal. Remember to define your goals, support your arguments with evidence, and consider the ethical implications."
        }
      ],
      "chunks": [
        {
          "id": "international-relations-101-l08-c1",
          "kind": "practice",
          "title": "Drafting Your Policy",
          "content": "In this final project, you will choose a current global issue and propose a policy to address it. You will define your main objective, identify potential challenges, and outline how you will measure success. This is your chance to bring everything you've learned together."
        },
        {
          "id": "international-relations-101-l08-c2",
          "kind": "recap",
          "title": "Defending Your Policy",
          "content": "A good policy must be able to withstand criticism. In this section, you'll prepare to defend your proposal. You will need to anticipate questions about its cost, its impact on different groups, and why it's better than other alternatives. This will prepare you to present your ideas confidently."
        }
      ],
      "interactiveActivities": [
        {
          "id": "international-relations-101-l08-act1",
          "type": "project_builder",
          "title": "Policy Proposal Builder",
          "description": "Build a policy proposal to address a global challenge like climate change, poverty, or cybersecurity.",
          "instructions": [
            "Clearly state the problem and your proposed solution.",
            "List at least three measurable goals for your policy.",
            "Identify the key stakeholders and how your policy will affect them."
          ]
        },
        {
          "id": "international-relations-101-l08-act2",
          "type": "debate_simulator",
          "title": "Policy Defense Panel",
          "description": "Present your policy proposal and defend it against critical questions from a simulated panel of international experts."
        }
      ]
    }
  ]
};
