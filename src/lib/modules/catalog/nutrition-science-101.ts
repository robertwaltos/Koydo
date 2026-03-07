import type { LearningModule } from "@/lib/modules/types";

export const nutrition_science_101_Module: LearningModule = {
  "id": "nutrition-science-101",
  "title": "Nutrition Science Foundations",
  "description": "A beginner's guide to nutrition science, focusing on how the body uses food, analyzing dietary patterns, designing effective health interventions, and understanding nutrition policy. Learn through case studies, interactive simulations, and hands-on projects.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "nutrition",
    "public-health"
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
    "Explain the basics of metabolism and how the body uses nutrients.",
    "Develop a structured plan for analyzing and improving dietary patterns.",
    "Evaluate the effectiveness of nutrition programs using evidence.",
    "Analyze how nutrition policies can be designed to be fair and effective.",
    "Communicate nutrition concepts, risks, and benefits clearly to others.",
    "Defend nutrition-related decisions using scientific evidence and logical reasoning."
  ],
  "lessons": [
    {
      "id": "nutrition-science-101-l01",
      "title": "Foundations of Nutrition Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "nutrition-science-101-l01-a1",
          "type": "image",
          "title": "How Your Body Uses Food",
          "content": "A diagram showing how macronutrients (carbohydrates, proteins, fats) and micronutrients (vitamins, minerals) are broken down and used by the body for energy, growth, and repair."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l01-c1",
          "kind": "concept",
          "title": "Core Concepts and Vocabulary",
          "content": "To get started, we need to speak the same language. In this section, we'll define the key terms in nutrition science. We'll cover the basics of metabolism—how your body converts food into energy. We will also learn about the essential nutrients our bodies need to function, including carbohydrates, proteins, fats, vitamins, and minerals. Understanding these fundamentals is the first step to making smarter, healthier food choices."
        },
        {
          "id": "nutrition-science-101-l01-c2",
          "kind": "concept",
          "title": "Understanding Cause and Effect",
          "content": "Nutrition is all about cause and effect. For example, what is the effect of eating a balanced diet? What causes nutrient deficiencies? In this section, we'll learn how to think critically about the relationship between what we eat and our health. This will help you move beyond common myths and understand the real science behind nutritional advice, enabling you to create effective strategies for better health."
        },
        {
          "id": "nutrition-science-101-l01-c3",
          "kind": "recap",
          "title": "Evaluating Nutrition Claims",
          "content": "There's a lot of nutrition information out there, and not all of it is reliable. How can you tell fact from fiction? We'll discuss how to evaluate nutrition claims by looking for solid evidence. This includes understanding measurable results, like changes in cholesterol levels, and knowing what makes a scientific study trustworthy. This skill is essential for making informed decisions about your health."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-101-l01-f1",
          "front": "Metabolism",
          "back": "The process by which your body converts what you eat and drink into energy."
        },
        {
          "id": "nutrition-science-101-l01-f2",
          "front": "Dietary Pattern",
          "back": "The complete picture of what a person usually eats and drinks."
        },
        {
          "id": "nutrition-science-101-l01-f3",
          "front": "Evidence-Based",
          "back": "An approach where decisions are made based on the best available scientific research and data."
        }
      ]
    },
    {
      "id": "nutrition-science-101-l02",
      "title": "Building a Nutrition Plan",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow a step-by-step guide to create a simple, one-week healthy eating plan for a specific goal, like increasing energy levels."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l02-c1",
          "kind": "practice",
          "title": "Creating Your Plan",
          "content": "In this activity, you'll build a step-by-step nutrition plan. You will define a clear health goal, outline the actions needed to reach it, and set up checkpoints to monitor your progress. You'll also decide how to measure success. This hands-on exercise will teach you how to create structured, effective nutrition strategies for yourself or others."
        },
        {
          "id": "nutrition-science-101-l02-c2",
          "kind": "recap",
          "title": "Planning for Setbacks",
          "content": "Even the best plans can face challenges. What happens if you get busy or a certain food isn't available? Here, we'll discuss how to build flexibility into your nutrition plan. By creating a backup plan and knowing when to adjust your strategy, you can ensure that small setbacks don't derail your long-term health goals. This makes your plan more resilient and realistic."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Actions to Goals",
          "description": "Match each planning step to its main purpose.",
          "pairs": [
            {
              "left": "Set a clear goal",
              "right": "Provides direction and motivation"
            },
            {
              "left": "Create a backup plan",
              "right": "Helps you stay on track during challenges"
            },
            {
              "left": "Track your progress",
              "right": "Shows if your plan is working"
            },
            {
              "left": "Review your plan weekly",
              "right": "Allows you to make improvements"
            }
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-101-l03",
      "title": "Checkpoint 1: Basic Concepts and Planning",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-101-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-101-l03-q1",
          "text": "Which practice most improves the quality of a nutritional decision?",
          "skillId": "nutrition-science-101-skill-reasoning",
          "options": [
            {
              "id": "a",
              "text": "Relying on assumptions without data"
            },
            {
              "id": "b",
              "text": "Defining goals, limitations, and ways to measure success"
            },
            {
              "id": "c",
              "text": "Prioritizing speed over accuracy in all cases"
            },
            {
              "id": "d",
              "text": "Ignoring potential challenges"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decision quality improves when goals, constraints, and measurement are clearly defined."
        },
        {
          "id": "nutrition-science-101-l03-q2",
          "text": "A high-quality plan for analyzing a dietary pattern should include:",
          "skillId": "nutrition-science-101-skill-planning",
          "options": [
            {
              "id": "a",
              "text": "Clear responsibilities, progress checkpoints, and rules for when to adjust the plan"
            },
            {
              "id": "b",
              "text": "Vague roles and spontaneous decisions"
            },
            {
              "id": "c",
              "text": "No review after the plan is implemented"
            },
            {
              "id": "d",
              "text": "Changes to the process that are not tracked"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A reliable plan needs clear ownership and defined checkpoints to manage progress."
        },
        {
          "id": "nutrition-science-101-l03-q3",
          "text": "A trustworthy, evidence-based nutrition program requires:",
          "skillId": "nutrition-science-101-skill-evaluation",
          "options": [
            {
              "id": "a",
              "text": "Success stories without any data to back them up"
            },
            {
              "id": "b",
              "text": "Comparison to a starting point (baseline) and analysis of side effects"
            },
            {
              "id": "c",
              "text": "Changing the definition of success after seeing the results"
            },
            {
              "id": "d",
              "text": "Ignoring cases where the program didn't work"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing results to a baseline and analyzing side effects prevents biased conclusions."
        },
        {
          "id": "nutrition-science-101-l03-q4",
          "text": "An effective nutrition policy connects:",
          "skillId": "nutrition-science-101-skill-policy",
          "options": [
            {
              "id": "a",
              "text": "The goal of the policy, measurable ways to track it, and a plan for what to do if it's not working"
            },
            {
              "id": "b",
              "text": "Policy statements without anyone being held accountable"
            },
            {
              "id": "c",
              "text": "Performance targets with no plan for managing risks"
            },
            {
              "id": "d",
              "text": "A system of rules that is not transparent"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Effective policy links the original goal to measurable controls and a plan for corrective action."
        }
      ]
    },
    {
      "id": "nutrition-science-101-l04",
      "title": "Analyzing a Nutrition Case Study",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "nutrition-science-101-l04-a1",
          "type": "image",
          "title": "Weighing the Options",
          "content": "An infographic of a balance scale. On one side are 'Pros' (like Health Impact, Affordability) and on the other are 'Cons' (like Cost, Difficulty), visually representing a tradeoff analysis."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l04-c1",
          "kind": "example",
          "title": "Case Study: A School Lunch Program",
          "content": "Let's analyze a real-world example: a public school wants to make its lunch menu healthier. We'll look at the different goals they might have, such as improving student health, keeping costs low, and offering food kids will actually eat. We'll identify the challenges and risks involved, like students rejecting the new food. This case study will show you how complex nutrition initiatives can be and the importance of community involvement."
        },
        {
          "id": "nutrition-science-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Pros and Cons",
          "content": "When making a decision, you often have to make tradeoffs. For example, the healthiest option might also be the most expensive. We'll introduce a tool called a 'tradeoff matrix' to help evaluate different choices. By comparing options based on factors like effectiveness, cost, and risks, you can make a more balanced and strategic decision. This is a powerful skill for analyzing any complex problem."
        },
        {
          "id": "nutrition-science-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "What if the new school lunch program fails and most students stop buying lunch? Instead of seeing this as a total failure, we can learn from it. This section is about turning setbacks into opportunities for improvement. By analyzing what went wrong, we can design safeguards and response plans for the future. This proactive mindset helps create stronger, more successful nutrition programs over time."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-101-l04-f1",
          "front": "Tradeoff",
          "back": "A situation where you must balance two desirable but opposing factors, accepting less of one to get more of another."
        },
        {
          "id": "nutrition-science-101-l04-f2",
          "front": "Failure Pattern",
          "back": "A recurring problem that points to a predictable weakness in a plan or system."
        },
        {
          "id": "nutrition-science-101-l04-f3",
          "front": "Response Plan",
          "back": "A pre-planned set of actions to take when something goes wrong, ensuring a quick and safe recovery."
        }
      ]
    },
    {
      "id": "nutrition-science-101-l05",
      "title": "Nutrition Plan Simulation",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "nutrition-science-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the simulation to test three different approaches to the school lunch problem. Compare the outcomes for student health, budget, and student satisfaction for each."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l05-c1",
          "kind": "practice",
          "title": "Scenario Simulation",
          "content": "Now it's your turn to be the decision-maker. In this interactive simulation, you'll make choices for the school lunch program and see the results. You'll have to deal with unexpected events and budget cuts. By comparing the outcomes of different choices, you'll learn how to adapt your strategy and think on your feet. This will reinforce your understanding of how to apply nutrition science in a dynamic, real-world context."
        },
        {
          "id": "nutrition-science-101-l05-c2",
          "kind": "recap",
          "title": "Reviewing the Results",
          "content": "After each simulation, we'll debrief. Did you achieve your original goals? Were there any unexpected side effects? Did you stick to your budget? This reflection is key to learning. By analyzing what worked and what didn't, you'll gain valuable insights that will help you make better decisions in the future. This process builds accountability and a habit of continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Choose an intervention path for the school lunch program and analyze its impact on health, budget, and fairness.",
          "instructions": [
            "First, define your main objective and budget constraints.",
            "Choose an intervention and document its potential short-term and long-term tradeoffs.",
            "Select three key metrics that will prove whether your chosen path was successful."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-101-l06",
      "title": "Checkpoint 2: Applying Your Knowledge",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-101-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-101-l06-q1",
          "text": "In the school lunch case study, choosing a cheaper but less popular healthy menu item is an example of a tradeoff between:",
          "skillId": "nutrition-science-101-skill-tradeoffs",
          "options": [
            {
              "id": "a",
              "text": "Long-term and short-term goals"
            },
            {
              "id": "b",
              "text": "Budget and student satisfaction"
            },
            {
              "id": "c",
              "text": "Evidence and opinion"
            },
            {
              "id": "d",
              "text": "Safety and speed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This decision balances the goal of staying within budget against the goal of having students enjoy (and eat) the food."
        },
        {
          "id": "nutrition-science-101-l06-q2",
          "text": "To measure the success of a new community garden initiative, which metric is most effective?",
          "skillId": "nutrition-science-101-skill-metrics",
          "options": [
            {
              "id": "a",
              "text": "The number of people who heard about the garden"
            },
            {
              "id": "b",
              "text": "The number of positive comments on social media"
            },
            {
              "id": "c",
              "text": "The percentage of participating families who report eating more vegetables"
            },
            {
              "id": "d",
              "text": "The total cost of the garden tools"
            }
          ],
          "correctOptionId": "c",
          "explanation": "This is a direct, measurable outcome that connects the initiative to its primary goal of improving nutrition."
        },
        {
          "id": "nutrition-science-101-l06-q3",
          "text": "If a nutrition program unexpectedly leads to a negative side effect, what is the best first step?",
          "skillId": "nutrition-science-101-skill-response",
          "options": [
            {
              "id": "a",
              "text": "Ignore the problem and hope it goes away"
            },
            {
              "id": "b",
              "text": "End the entire program immediately without investigation"
            },
            {
              "id": "c",
              "text": "Use a pre-defined response plan to contain the harm and investigate the cause"
            },
            {
              "id": "d",
              "text": "Blame the participants for not following the program correctly"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A structured response plan allows for a safe, timely, and effective way to manage problems without overreacting."
        },
        {
          "id": "nutrition-science-101-l06-q4",
          "text": "When designing a nutrition policy for a diverse community, why is it important to consider different stakeholders (e.g., parents, farmers, store owners)?",
          "skillId": "nutrition-science-101-skill-stakeholders",
          "options": [
            {
              "id": "a",
              "text": "To ensure the policy benefits everyone equally and avoids unintended harm"
            },
            {
              "id": "b",
              "text": "It is not important; only the scientific evidence matters"
            },
            {
              "id": "c",
              "text": "To find someone to blame if the policy fails"
            },
            {
              "id": "d",
              "text": "To make the decision process more complicated"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Considering all stakeholders helps create fair and effective policies that have broad support and address the community's actual needs."
        }
      ]
    },
    {
      "id": "nutrition-science-101-l07",
      "title": "Nutrition, Policy, and Community",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "nutrition-science-101-l07-a1",
          "type": "image",
          "title": "Community Impact Map",
          "content": "A concept map showing a central nutrition policy (e.g., a tax on sugary drinks) and how it connects to different stakeholders like families, local businesses, schools, and public health agencies, with arrows indicating positive and negative impacts."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "Nutrition decisions, especially large-scale policies, don't happen in a vacuum. They affect many different groups of people, or 'stakeholders.' In this section, we'll explore how the benefits and costs of a nutrition program are distributed. For example, who benefits most from a new food program? Does anyone experience a negative impact? Understanding this helps us design programs that are fair and just for the entire community."
        },
        {
          "id": "nutrition-science-101-l07-c2",
          "kind": "concept",
          "title": "Ensuring Responsibility",
          "content": "Who is responsible for making sure a nutrition program is safe and effective? This is the concept of accountability. We'll discuss how to build systems where decisions are transparent, can be traced back to who made them, and include a clear process for review. This builds trust and ensures that if something goes wrong, there is a clear path to fix it. Responsible systems lead to better, more reliable outcomes for everyone."
        },
        {
          "id": "nutrition-science-101-l07-c3",
          "kind": "recap",
          "title": "Putting It All Together",
          "content": "Responsible implementation means combining everything we've learned. It's about creating a program that is not only effective (it works) but also fair (it considers everyone's needs) and accountable (it has strong oversight). We'll recap with a simple checklist to help you evaluate whether a nutrition plan meets these important standards."
        }
      ],
      "flashcards": [
        {
          "id": "nutrition-science-101-l07-f1",
          "front": "Stakeholder",
          "back": "Any person, group, or organization who can be affected by the outcome of a project or policy."
        },
        {
          "id": "nutrition-science-101-l07-f2",
          "front": "Accountability",
          "back": "The responsibility to justify decisions or actions and be held answerable for the results."
        },
        {
          "id": "nutrition-science-101-l07-f3",
          "front": "Equity in Nutrition",
          "back": "Ensuring that everyone has a fair and just opportunity to be as healthy as possible."
        }
      ]
    },
    {
      "id": "nutrition-science-101-l08",
      "title": "Planning Your Final Project",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "nutrition-science-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the Capstone Charter Builder to outline a project for improving nutrition awareness among teenagers in your local area."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l08-c1",
          "kind": "practice",
          "title": "Creating Your Project Outline",
          "content": "It's time to plan your own nutrition project. In this activity, you'll create a 'project charter,' which is a simple, one-page outline for your idea. You will define your project's main goal, list any limitations (like budget or time), and decide how you will measure success. This charter will be the roadmap for your capstone project, keeping you focused and organized."
        },
        {
          "id": "nutrition-science-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Share Your Work",
          "content": "A key part of any project is being able to explain and defend your choices. As you create your charter, think about why you are making each decision. How does your plan align with the scientific principles and ethical guidelines we've discussed? This preparation will help you confidently present your project and answer questions about your work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Charter Builder",
          "description": "Build a charter for your final project with measurable goals and a plan for addressing challenges.",
          "instructions": [
            "Define your project's main objective in one sentence.",
            "List at least three measurable indicators that will show you have succeeded.",
            "Describe a potential risk and define what action you will take if it occurs."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-101-l09",
      "title": "Capstone Project: Design a Community Nutrition Program",
      "type": "interactive",
      "duration": 20,
      "learningAids": [
        {
          "id": "nutrition-science-101-l09-a1",
          "type": "image",
          "title": "Project Checklist",
          "content": "A visual checklist graphic with key project components: Clear Goal, Target Audience, Key Actions, Success Metrics, Budget, and Risk Plan."
        }
      ],
      "chunks": [
        {
          "id": "nutrition-science-101-l09-c1",
          "kind": "practice",
          "title": "Project Implementation",
          "content": "Using the project charter you created in the last lesson, you will now fully design your community nutrition program. This capstone project is your opportunity to apply everything you've learned in this course. You will detail the steps of your program, consider the stakeholders involved, analyze potential tradeoffs, and build in a plan for measuring your impact. This is your chance to be creative and design a program that could make a real difference."
        },
        {
          "id": "nutrition-science-101-l09-c2",
          "kind": "recap",
          "title": "Final Review and Submission",
          "content": "Before you finalize your project, take a moment for a self-review. Does your final design meet the goals you set in your charter? Is it realistic, evidence-based, and equitable? Use the project checklist to ensure you've covered all the key components. This final check helps you submit your best work and solidifies your understanding of how to design a complete and thoughtful nutrition program."
        }
      ],
      "interactiveActivities": [
        {
          "id": "nutrition-science-101-l09-act1",
          "type": "project_builder",
          "title": "Final Project Submission",
          "description": "Finalize and submit your complete community nutrition program plan.",
          "instructions": [
            "Upload or complete your final project plan based on your charter.",
            "Write a brief summary explaining how your project is effective, equitable, and accountable.",
            "Review your work against the course learning objectives before submitting."
          ]
        }
      ]
    },
    {
      "id": "nutrition-science-101-l10",
      "title": "Final Checkpoint: Comprehensive Review",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "nutrition-science-101-l10-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use structured reasoning, map tradeoffs, and verify outcomes with metrics before finalizing."
        }
      ],
      "questions": [
        {
          "id": "nutrition-science-101-l10-q1",
          "text": "A city wants to improve food access in a low-income neighborhood. Why is it critical to involve neighborhood residents in the planning process?",
          "skillId": "nutrition-science-101-skill-equity",
          "options": [
            {
              "id": "a",
              "text": "To ensure the solution meets their actual needs, cultural preferences, and practical challenges."
            },
            {
              "id": "b",
              "text": "Because it is a legal requirement in all cities."
            },
            {
              "id": "c",
              "text": "To slow down the project with unnecessary meetings."
            },
            {
              "id": "d",
              "text": "To make the outside experts feel good about their work."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Involving the community (the primary stakeholders) directly is the most effective way to create a solution that is accepted, used, and successful long-term."
        },
        {
          "id": "nutrition-science-101-l10-q2",
          "text": "What is the primary function of a 'rollback trigger' or a 'response plan' in a nutrition intervention?",
          "skillId": "nutrition-science-101-skill-resilience",
          "options": [
            {
              "id": "a",
              "text": "To punish the team if the project fails."
            },
            {
              "id": "b",
              "text": "To limit the damage from an unexpected negative outcome."
            },
            {
              "id": "c",
              "text": "To prove that the original plan was perfect."
            },
            {
              "id": "d",
              "text": "To secure more funding for the project."
            }
          ],
          "correctOptionId": "b",
          "explanation": "These plans are designed to manage risk and provide a safe, controlled way to respond to problems, thus making the overall program more resilient."
        },
        {
          "id": "nutrition-science-101-l10-q3",
          "text": "An effective system of accountability in nutrition policy must include:",
          "skillId": "nutrition-science-101-skill-accountability",
          "options": [
            {
              "id": "a",
              "text": "Complete secrecy around how decisions are made."
            },
            {
              "id": "b",
              "text": "A way to trace decisions, clear oversight, and a process for corrections."
            },
            {
              "id": "c",
              "text": "Assigning blame to a single person for any failure."
            },
            {
              "id": "d",
              "text": "Frequent changes in leadership to avoid responsibility."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Accountability requires transparency (traceability), review (oversight), and a mechanism to fix problems (corrections)."
        },
        {
          "id": "nutrition-science-101-l10-q4",
          "text": "What is the most critical first step when designing any new nutrition program?",
          "skillId": "nutrition-science-101-skill-synthesis",
          "options": [
            {
              "id": "a",
              "text": "Choosing a catchy name for the program."
            },
            {
              "id": "b",
              "text": "Securing the maximum possible budget."
            },
            {
              "id": "c",
              "text": "Clearly defining the problem you are trying to solve and for whom."
            },
            {
              "id": "d",
              "text": "Creating the marketing materials."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Without a clear and accurate definition of the problem and the target audience, any solution is likely to be ineffective and a waste of resources."
        }
      ]
    }
  ]
};
