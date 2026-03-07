import type { LearningModule } from "@/lib/modules/types";

export const us_civics_101_Module: LearningModule = {
  "id": "us-civics-101",
  "title": "U.S. Civics Foundations",
  "description": "An introductory course on U.S. Civics, exploring the principles of the Constitution, the structure of government, how policies are made, and how you can participate as an active citizen.",
  "subject": "Social Studies",
  "tags": [
    "civics",
    "government",
    "history",
    "curriculum",
    "interactive"
  ],
  "minAge": 12,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "learningObjectives": [
    "Understand the foundational principles of the U.S. Constitution, such as federalism and separation of powers.",
    "Explain the structure and functions of the three branches of government.",
    "Analyze how public policy is created, implemented, and evaluated.",
    "Identify common reasons why government actions might succeed or fail.",
    "Develop and propose solutions to community problems.",
    "Recognize the importance of evidence and accountability in a democracy."
  ],
  "lessons": [
    {
      "id": "us-civics-101-l01",
      "title": "Foundations of U.S. Government",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "us-civics-101-l01-a1",
          "type": "image",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-101-l01-c1",
          "kind": "concept",
          "title": "Why Words Matter: Key Civics Terms",
          "content": "To understand how our government works, we need to speak the same language. This lesson introduces essential vocabulary. We'll define key concepts like 'democracy,' 'republic,' and 'federalism.' Using clear and specific terms helps us have meaningful conversations about our rights and responsibilities, and allows us to accurately compare different ideas about how government should work.",
          "visualPrompt": "An animated graphic showing the word 'Government' branching out into key terms like 'Constitution,' 'Democracy,' and 'Federalism,' with simple icons for each."
        },
        {
          "id": "us-civics-101-l01-c2",
          "kind": "concept",
          "title": "Cause and Effect in Government",
          "content": "In civics, it's crucial to understand not just what happens, but why it happens. We'll explore how different events are connected and what factors limit the government's choices. For example, how does a Supreme Court decision (cause) affect laws across the country (effect)? Focusing on the root causes of problems, rather than just the symptoms, helps us develop smarter solutions and become more effective citizens.",
          "visualPrompt": "A split-screen animation. On the left, a gavel strikes (cause). On the right, a series of newspaper headlines change to reflect a new ruling (effect)."
        },
        {
          "id": "us-civics-101-l01-c3",
          "kind": "recap",
          "title": "Using Evidence and Holding Leaders Accountable",
          "content": "In a democracy, citizens have the power to hold their leaders accountable. But how do we do that effectively? This section covers the importance of using evidence—like voting records, news reports, and official data—to evaluate what our government is doing. By tracking promises and results, we can make informed decisions on Election Day and ensure our leaders truly represent us.",
          "visualPrompt": "An illustration of a citizen looking at a report card for a politician, with checkmarks next to 'Voted on Bill X' and 'Attended Town Hall.'"
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-101-l01-f1",
          "front": "Federalism",
          "back": "A system of government where power is divided between a central, national government and smaller, state governments."
        },
        {
          "id": "us-civics-101-l01-f2",
          "front": "Separation of Powers",
          "back": "The division of government responsibilities into three distinct branches—legislative, executive, and judicial—to prevent any one branch from becoming too powerful."
        },
        {
          "id": "us-civics-101-l01-f3",
          "front": "Checks and Balances",
          "back": "A system that allows each branch of government to amend or veto acts of another branch, ensuring no single branch can dominate."
        }
      ]
    },
    {
      "id": "us-civics-101-l02",
      "title": "How a Bill Becomes a Law: An Interactive Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "us-civics-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-101-l02-c1",
          "kind": "practice",
          "title": "Mapping the Legislative Process",
          "content": "In this activity, you'll build a visual flowchart of how an idea becomes a law in the United States. You will map out each major step, from introduction in Congress, through committee debates, to the final vote and the President's signature. This hands-on experience will clarify how our legislative branch creates the laws that shape our country.",
          "visualPrompt": "A drag-and-drop interface where students place icons representing steps (like 'Bill is Introduced,' 'Committee Vote,' 'President Signs') onto a flowchart template."
        },
        {
          "id": "us-civics-101-l02-c2",
          "kind": "recap",
          "title": "Tracking Key Decisions",
          "content": "As we've seen, many decisions are made as a bill moves through Congress. It's important to document who voted for what, and why. This creates a public record that allows citizens to hold their representatives accountable. This practice of tracking decisions is essential for transparency and helps us understand how our government truly works.",
          "visualPrompt": "An animation showing a magnifying glass hovering over a step in the legislative flowchart, revealing a pop-up with vote counts ('Yea: 218, Nay: 210')."
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-101-l02-act1",
          "type": "matching_pairs",
          "title": "Legislative Process Match",
          "description": "Match each step of the legislative process to its main function.",
          "pairs": [
            {
              "left": "Bill Introduction",
              "right": "A member of Congress formally proposes a new law."
            },
            {
              "left": "Committee Markup",
              "right": "A small group of legislators debates, amends, and refines the bill's text."
            },
            {
              "left": "Floor Vote",
              "right": "The entire chamber (House or Senate) votes on passing the bill."
            },
            {
              "left": "Presidential Signature",
              "right": "The final approval needed for a bill to become an official law."
            }
          ]
        },
        {
          "id": "us-civics-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Who Has the Power?",
          "description": "Sort each government power into the correct branch.",
          "buckets": [
            "Legislative (Congress)",
            "Executive (President)",
            "Judicial (Courts)"
          ],
          "items": [
            {
              "text": "Writes and passes laws",
              "bucket": "Legislative (Congress)"
            },
            {
              "text": "Vetoes bills",
              "bucket": "Executive (President)"
            },
            {
              "text": "Declares laws unconstitutional",
              "bucket": "Judicial (Courts)"
            },
            {
              "text": "Commands the military",
              "bucket": "Executive (President)"
            },
            {
              "text": "Declares war",
              "bucket": "Legislative (Congress)"
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-101-l03",
      "title": "Checkpoint 1: Foundations and Processes",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-101-l03-q1",
          "text": "The President vetoes a bill passed by Congress. This is an example of:",
          "skillId": "us-civics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Federalism"
            },
            {
              "id": "b",
              "text": "Checks and Balances"
            },
            {
              "id": "c",
              "text": "Judicial Review"
            },
            {
              "id": "d",
              "text": "Popular Sovereignty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Checks and balances allow each branch to limit the power of the others. The presidential veto is a check on the legislative branch's power."
        },
        {
          "id": "us-civics-101-l03-q2",
          "text": "Before the full House or Senate can vote on a bill, it is usually debated and amended in a smaller group. What is this group called?",
          "skillId": "us-civics-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "A Caucus"
            },
            {
              "id": "b",
              "text": "A Committee"
            },
            {
              "id": "c",
              "text": "The Cabinet"
            },
            {
              "id": "d",
              "text": "A Town Hall"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Committees are specialized groups within Congress that review, amend, and vote on bills before they are sent to the full chamber for a vote."
        },
        {
          "id": "us-civics-101-l03-q3",
          "text": "A citizen wants to see how their representative voted on a recent environmental law. What principle does this action support?",
          "skillId": "us-civics-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Judicial Independence"
            },
            {
              "id": "b",
              "text": "Executive Privilege"
            },
            {
              "id": "c",
              "text": "Government Accountability"
            },
            {
              "id": "d",
              "text": "State Sovereignty"
            }
          ],
          "correctOptionId": "c",
          "explanation": "By checking their representative's voting record, the citizen is using evidence to hold their elected official accountable for their actions."
        },
        {
          "id": "us-civics-101-l03-q4",
          "text": "The national government is responsible for printing money, but state governments are responsible for running schools. This division of power is an example of:",
          "skillId": "us-civics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Federalism"
            },
            {
              "id": "b",
              "text": "Separation of Powers"
            },
            {
              "id": "c",
              "text": "Checks and Balances"
            },
            {
              "id": "d",
              "text": "Bicameralism"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Federalism is the constitutional principle that divides powers between the national government and state governments."
        }
      ]
    },
    {
      "id": "us-civics-101-l04",
      "title": "Evaluating Public Policy",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "us-civics-101-l04-a1",
          "type": "mnemonic",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-101-l04-c1",
          "kind": "concept",
          "title": "Choosing How to Solve a Problem",
          "content": "When governments face a problem, they have many tools to solve it. They could pass a new law, create a public awareness campaign, or fund a new program. In this lesson, we'll explore how leaders decide which approach is best. They must consider the cost, the time it will take, and the potential impact on different groups of people. Understanding these trade-offs is key to analyzing public policy.",
          "visualPrompt": "An animation of a crossroads with signs pointing to different policy solutions: 'New Law,' 'Public Program,' 'Tax Incentive.' A government leader is shown thinking about which path to take."
        },
        {
          "id": "us-civics-101-l04-c2",
          "kind": "example",
          "title": "How Do We Measure Success?",
          "content": "Imagine a city wants to reduce traffic congestion. They pass a policy to encourage more people to use public transit. How do they know if it worked? They need to measure it. They would define their goal (e.g., 'reduce commute times by 10%'), track metrics (e.g., 'number of bus riders,' 'average car speed during rush hour'), and analyze the results after a year. This framework of setting goals and measuring results is how we determine if a policy is successful.",
          "visualPrompt": "A simple dashboard graphic showing metrics for a 'Reduce Traffic' policy. A line graph for 'Bus Ridership' is trending up, while a graph for 'Average Commute Time' is trending down."
        },
        {
          "id": "us-civics-101-l04-c3",
          "kind": "recap",
          "title": "Why Policies Sometimes Fail",
          "content": "Even with the best intentions, government policies can fail. In this recap, we'll look at common reasons why. A policy might not have enough funding, it could have unintended consequences that make the problem worse, or it might be too difficult to implement. By categorizing and understanding these types of failures, we can learn from mistakes and design better policies in the future.",
          "visualPrompt": "A cartoon showing a bridge (the policy) that is built halfway across a river but doesn't reach the other side, with labels like 'Not Enough Funding' and 'Poor Planning.'"
        }
      ],
      "flashcards": [
        {
          "id": "us-civics-101-l04-f1",
          "front": "Public Policy",
          "back": "The course of action the government takes in response to an issue or problem."
        },
        {
          "id": "us-civics-101-l04-f2",
          "front": "Unintended Consequences",
          "back": "Outcomes of a policy or action that were not the ones foreseen or intended by the policymakers."
        },
        {
          "id": "us-civics-101-l04-f3",
          "front": "Stakeholder",
          "back": "A person, group, or organization who is affected by the outcome of a policy or decision."
        }
      ]
    },
    {
      "id": "us-civics-101-l05",
      "title": "Case Study: Fixing a Community Problem",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "us-civics-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "chunks": [
        {
          "id": "us-civics-101-l05-c1",
          "kind": "practice",
          "title": "Analyzing the Situation",
          "content": "In this interactive case study, you'll analyze a realistic community problem, like a local park that has fallen into disrepair. You will identify the main goals (e.g., make it safe and clean), the constraints (e.g., limited city budget), and the key stakeholders (e.g., local families, city council). This exercise will help you practice breaking down complex civic issues into manageable parts.",
          "visualPrompt": "An interactive image of a run-down park. Students can click on different areas (broken swing, overgrown grass) to reveal information about the problem and associated stakeholders."
        },
        {
          "id": "us-civics-101-l05-c2",
          "kind": "recap",
          "title": "Proposing a Solution",
          "content": "Based on your analysis, you will now create a structured proposal to fix the park. Your proposal must include clear success criteria (e.g., 'new playground equipment installed'), identify who is responsible for each step, and set a timeline for action. This will help you practice creating clear, effective, and actionable plans for civic improvement.",
          "visualPrompt": "A fill-in-the-blank template for an 'Improvement Proposal' with sections for 'Goal,' 'Action Steps,' 'Person Responsible,' and 'Deadline.'"
        }
      ],
      "interactiveActivities": [
        {
          "id": "us-civics-101-l05-act1",
          "type": "scenario_practice",
          "title": "Community Action Simulation",
          "description": "Choose one of three proposals to fix the local park, considering a limited budget and a 6-month deadline.",
          "instructions": [
            "Define what a 'successful' park renovation would look like.",
            "For your chosen proposal, identify one short-term challenge and one long-term benefit.",
            "Name one metric you would use to confirm the project was a success after one year."
          ]
        },
        {
          "id": "us-civics-101-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Actions to Results",
          "description": "Connect each community action with its most likely outcome.",
          "pairs": [
            {
              "left": "Organize a community clean-up day",
              "right": "Improves the park quickly with low cost, but may not be a long-term solution."
            },
            {
              "left": "Petition the city council for more funds",
              "right": "Could lead to major, lasting improvements but the process is slow and may not succeed."
            },
            {
              "left": "Start a local fundraiser",
              "right": "Raises money for specific goals and increases community buy-in."
            },
            {
              "left": "Create a 'Friends of the Park' volunteer group",
              "right": "Ensures long-term maintenance and community engagement for the park."
            }
          ]
        }
      ]
    },
    {
      "id": "us-civics-101-l06",
      "title": "Checkpoint 2: Policy and Application",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "us-civics-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "us-civics-101-l06-q1",
          "text": "A city government wants to know if its new recycling program is working. Which of the following is the BEST metric to measure its success?",
          "skillId": "us-civics-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "The number of commercials aired for the program."
            },
            {
              "id": "b",
              "text": "The change in the total tons of recycled materials collected per month."
            },
            {
              "id": "c",
              "text": "The personal opinion of the mayor."
            },
            {
              "id": "d",
              "text": "The cost of the new recycling bins."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The goal of a recycling program is to increase recycling. Measuring the amount of recycled material directly tracks progress toward that goal."
        },
        {
          "id": "us-civics-101-l06-q2",
          "text": "A new law gives a tax credit to companies that use solar panels. An unintended consequence is that small, local solar companies are bought by large corporations. This is an example of a policy failing due to:",
          "skillId": "us-civics-101-skill-process",
          "options": [
            {
              "id": "a",
              "text": "Lack of funding"
            },
            {
              "id": "b",
              "text": "Poor implementation"
            },
            {
              "id": "c",
              "text": "Unforeseen side effects"
            },
            {
              "id": "d",
              "text": "An unclear goal"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The policy achieved its main goal but also caused a negative outcome that was not predicted, which is a classic example of an unintended consequence or unforeseen side effect."
        },
        {
          "id": "us-civics-101-l06-q3",
          "text": "A town is debating whether to build a new skate park. Which of the following groups is a key stakeholder in this decision?",
          "skillId": "us-civics-101-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "Teenagers in the community"
            },
            {
              "id": "b",
              "text": "Homeowners who live next to the proposed location"
            },
            {
              "id": "c",
              "text": "The local construction company that might build it"
            },
            {
              "id": "d",
              "text": "All of the above"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A stakeholder is anyone affected by a decision. Teenagers who would use the park, nearby homeowners, and local businesses are all stakeholders with different interests."
        },
        {
          "id": "us-civics-101-l06-q4",
          "text": "When creating a proposal to solve a community problem, why is it important to define 'success criteria'?",
          "skillId": "us-civics-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To guarantee the proposal will be approved by the government."
            },
            {
              "id": "b",
              "text": "To create a clear, measurable goal so you know if your plan worked."
            },
            {
              "id": "c",
              "text": "To make the proposal seem more complicated and professional."
            },
            {
              "id": "d",
              "text": "To assign blame if the project fails."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Success criteria (e.g., 'reduce litter by 50%') provide a clear, objective way to measure whether the solution actually solved the problem you set out to address."
        }
      ]
    }
  ]
};
