import type { LearningModule } from "@/lib/modules/types";

export const sports_science_101_Module: LearningModule = {
  "id": "sports-science-101",
  "title": "Sports Science Foundations",
  "description": "An introductory curriculum in Sports Science, focusing on how the body performs, planning effective training, analyzing movement, and preventing injuries. Learn through real-world case studies, interactive simulations, and knowledge checkpoints.",
  "subject": "Health Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "sports",
    "human-performance"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain how the body responds to exercise using fundamental principles of physiology.",
    "Design a basic training plan with clear phases and goals.",
    "Analyze athletic movements to identify areas for improvement and potential injury risks.",
    "Develop strategies to prevent common sports injuries.",
    "Communicate training plans and risks clearly to athletes, coaches, or parents.",
    "Create and defend a sports science recommendation based on evidence."
  ],
  "lessons": [
    {
      "id": "sports-science-101-l01",
      "title": "Introduction to Sports Science",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "sports-science-101-l01-a1",
          "type": "image",
          "title": "Key Concepts Map",
          "content": "A visual diagram showing how Performance Physiology, Training Periodization, and Biomechanics are interconnected."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l01-c1",
          "kind": "concept",
          "title": "What is Sports Science?",
          "content": "Welcome to the exciting world of Sports Science! In this lesson, we'll define what Sports Science is and introduce key terms you'll hear throughout this course. We'll explore how 'performance physiology' (how our bodies work during exercise) and 'training periodization' (planning training over time) are the building blocks for helping any athlete improve. Visual prompt: An animation showing a runner's heart rate, muscle engagement, and breathing, linked to a calendar showing different training phases (easy, hard, rest)."
        },
        {
          "id": "sports-science-101-l01-c2",
          "kind": "concept",
          "title": "Connecting Cause and Effect",
          "content": "In sports, every action has a reaction. We'll learn to map out these connections, like how a specific drill improves reaction time, or how too much training can lead to fatigue. This helps us understand the 'why' behind a training plan. We'll also practice questioning our assumptions. For example, is 'more training' always better? Thinking critically helps us choose the best and safest path for an athlete."
        },
        {
          "id": "sports-science-101-l01-c3",
          "kind": "recap",
          "title": "Using Evidence to Make Decisions",
          "content": "In this recap, we'll stress the importance of using observable evidence—like heart rate data, sprint times, or jump height—to support our claims. Making decisions based on data helps us track progress accurately and make adjustments when needed. We'll also discuss why it's important to acknowledge what we don't know and to have regular check-ins to review our plan."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-101-l01-f1",
          "front": "Performance Physiology",
          "back": "The study of how the body responds and adapts to exercise and training."
        },
        {
          "id": "sports-science-101-l01-f2",
          "front": "Training Periodization",
          "back": "The strategic planning of training into cycles to manage fatigue and peak for competition."
        },
        {
          "id": "sports-science-101-l01-f3",
          "front": "Biomechanics",
          "back": "The study of how forces affect human movement, used to improve technique and prevent injury."
        }
      ]
    },
    {
      "id": "sports-science-101-l02",
      "title": "Building a Training Plan",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "For your training plan, clearly state your goals, explain your reasoning for each phase, and describe how you'll measure success."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l02-c1",
          "kind": "practice",
          "title": "Design Your First Workflow",
          "content": "In this interactive lab, you'll design a simple training workflow for a specific scenario, like preparing a soccer player for the upcoming season. You'll use the key terms we've learned to structure your plan. Then, you'll test your plan by considering potential challenges, like an unexpected injury or a change in the game schedule. This hands-on experience will bring the concepts to life."
        },
        {
          "id": "sports-science-101-l02-c2",
          "kind": "recap",
          "title": "Planning for Success and Setbacks",
          "content": "A good plan is flexible. In this recap, we'll discuss how to build checkpoints into your training schedule. This includes defining who is responsible for what, setting clear criteria for moving to the next training phase, and knowing when to scale back if an athlete is showing signs of overtraining. These steps are crucial for keeping a training program safe and effective."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Plans to Outcomes",
          "description": "Match the planning action to its most likely positive outcome.",
          "pairs": [
            {
              "left": "Pre-competition check-in",
              "right": "Reduces preventable mistakes on game day"
            },
            {
              "left": "Setting a 'rest day' rule",
              "right": "Limits the risk of burnout and overtraining"
            },
            {
              "left": "Tracking daily performance",
              "right": "Helps connect training activities to results"
            },
            {
              "left": "Post-season review",
              "right": "Improves the training plan for next year"
            }
          ]
        },
        {
          "id": "sports-science-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Sorting Training Factors",
          "description": "Sort these factors into the correct categories: Physical, Tactical, or Lifestyle.",
          "buckets": [
            "Physical",
            "Tactical",
            "Lifestyle"
          ],
          "items": [
            {
              "text": "Maximum sprint speed",
              "bucket": "Physical"
            },
            {
              "text": "Understanding team plays",
              "bucket": "Tactical"
            },
            {
              "text": "Getting 8 hours of sleep",
              "bucket": "Lifestyle"
            },
            {
              "text": "Proper nutrition and hydration",
              "bucket": "Lifestyle"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-101-l03",
      "title": "Checkpoint 1: Concepts and Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-101-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting, quickly review the flashcards and key concepts from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "sports-science-101-l03-q1",
          "text": "When studying performance physiology, what is the most reliable approach?",
          "skillId": "sports-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Assume what works for one athlete works for all"
            },
            {
              "id": "b",
              "text": "Set clear goals, plan for potential problems, and track progress with data"
            },
            {
              "id": "c",
              "text": "Focus only on strengths and ignore weaknesses"
            },
            {
              "id": "d",
              "text": "Avoid changing the plan once it's made"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliable decisions require clear goals, planning for challenges, and using data to monitor progress."
        },
        {
          "id": "sports-science-101-l03-q2",
          "text": "This introductory course should help you learn to:",
          "skillId": "sports-science-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Use basic terms, understand how training works, and apply concepts to simple scenarios"
            },
            {
              "id": "b",
              "text": "Coach a professional team immediately"
            },
            {
              "id": "c",
              "text": "Make decisions without needing to see any data"
            },
            {
              "id": "d",
              "text": "Focus on only one aspect of sports science, like nutrition"
            }
          ],
          "correctOptionId": "a",
          "explanation": "This course is designed to build a foundation with key vocabulary, understanding of mechanisms, and interpretation of basic scenarios."
        },
        {
          "id": "sports-science-101-l03-q3",
          "text": "What is the best way to make a training plan more reliable?",
          "skillId": "sports-science-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Have no one in charge of the overall plan"
            },
            {
              "id": "b",
              "text": "Include regular check-ins, clear roles, and rules for when to rest or push harder"
            },
            {
              "id": "c",
              "text": "Never write down any changes made to the plan"
            },
            {
              "id": "d",
              "text": "Avoid reviewing what went wrong after a bad performance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability in training comes from having clear checkpoints, defined responsibilities, and clear guidelines for making decisions."
        },
        {
          "id": "sports-science-101-l03-q4",
          "text": "When analyzing an athlete's movement, what is the most defensible practice?",
          "skillId": "sports-science-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Only use stories of success as evidence"
            },
            {
              "id": "b",
              "text": "Compare current performance to a starting point and watch for negative side effects"
            },
            {
              "id": "c",
              "text": "Ignore movements that are difficult to analyze"
            },
            {
              "id": "d",
              "text": "Change your success criteria after you see the results"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A fair evaluation requires comparing against a baseline and checking for unintended negative consequences, like poor form or pain."
        },
        {
          "id": "sports-science-101-l03-q5",
          "text": "A good injury prevention plan should include:",
          "skillId": "sports-science-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Rules that are not connected to how you measure athlete health"
            },
            {
              "id": "b",
              "text": "Clear safety rules, measurable limits, and a plan for what to do if an issue arises"
            },
            {
              "id": "c",
              "text": "A lack of transparency about why decisions are made"
            },
            {
              "id": "d",
              "text": "No plan for how to help an athlete recover from an injury"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A mature safety plan connects rules to measurement and includes a clear response plan for when things go wrong."
        }
      ]
    },
    {
      "id": "sports-science-101-l04",
      "title": "Case Study: The Marathon Runner",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "sports-science-101-l04-a1",
          "type": "image",
          "title": "Tradeoff Matrix Example",
          "content": "A sample 2x2 grid comparing four training options, rated on 'Performance Gain' (Y-axis) and 'Injury Risk' (X-axis)."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l04-c1",
          "kind": "example",
          "title": "Case Context and Decision Stakes",
          "content": "In this case study, we'll analyze a training program for a marathon runner. The goal is to improve their race time while managing recovery and avoiding injury. We will map out the biggest risks (like shin splints or burnout) and identify the competing demands on the athlete (like training time vs. work/school)."
        },
        {
          "id": "sports-science-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Options",
          "content": "We'll introduce a tool called a 'tradeoff matrix' to compare different training choices. For example, we could compare 'adding hill sprints' vs. 'increasing long run distance'. We'll score each option based on factors like how much it could improve performance, the risk of injury, and how practical it is for the athlete. This helps us visualize the pros and cons of each decision."
        },
        {
          "id": "sports-science-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Setbacks",
          "content": "In this recap, we'll discuss how to turn setbacks into learning opportunities. If our marathon runner develops knee pain, how do we analyze the cause? We'll learn how to create safety rules (e.g., 'stop running if pain exceeds 3/10'), develop a response plan (e.g., 'cross-train for 1 week'), and adjust our monitoring to prevent it from happening again. This encourages a mindset of continuous improvement."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A tool for comparing different options by weighing their pros and cons across key factors."
        },
        {
          "id": "sports-science-101-l04-f2",
          "front": "Risk Mitigation",
          "back": "The process of identifying potential problems and creating a plan to reduce their impact."
        },
        {
          "id": "sports-science-101-l04-f3",
          "front": "Response Plan",
          "back": "A pre-defined set of actions to take when a specific problem, like an injury, occurs."
        }
      ]
    },
    {
      "id": "sports-science-101-l05",
      "title": "Simulation: In-Season Adjustments",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "sports-science-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "In the simulation, clearly state your goal for the adjustment. Record the expected benefits and potential risks of your choice."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l05-c1",
          "kind": "practice",
          "title": "Simulation Setup",
          "content": "Time to put your skills to the test! In this interactive simulation, you are the sports scientist for a basketball team mid-season. You'll be presented with a scenario, like a key player showing signs of fatigue. You will choose from several interventions, set your goals for the intervention, and define what success looks like."
        },
        {
          "id": "sports-science-101-l05-c2",
          "kind": "recap",
          "title": "Simulation Debrief",
          "content": "After the simulation runs, we'll review the outcomes. Did your chosen intervention work? Were there any unexpected side effects? Did your decision align with the team's overall safety rules and goals? This debrief is essential for learning how to adapt your plans in a dynamic, real-world environment."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-101-l05-act1",
          "type": "scenario_practice",
          "title": "Mid-Season Intervention",
          "description": "Your team's star player is in a shooting slump. Evaluate three strategies and justify which one you'll implement.",
          "instructions": [
            "Define your main objective (e.g., improve shooting percentage) and your safety limits (e.g., do not increase weekly training time).",
            "For each option, list the potential short-term and long-term effects.",
            "Choose the metrics you will use to confirm if your plan is working (e.g., practice stats, player feedback)."
          ]
        },
        {
          "id": "sports-science-101-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Problems to Solutions",
          "description": "Match the common coaching problem to the best sports science solution.",
          "pairs": [
            {
              "left": "Unclear who decides if a player is ready to return from injury",
              "right": "Create a clear protocol with input from medical staff"
            },
            {
              "left": "Player feedback isn't being used to adjust training",
              "right": "Schedule regular, brief check-ins with athletes"
            },
            {
              "left": "The team seems to be fading late in the season",
              "right": "Review the periodization plan to ensure adequate recovery phases"
            },
            {
              "left": "A new training drill is causing minor muscle strains",
              "right": "Pause the drill and analyze the biomechanics of the movement"
            }
          ]
        }
      ]
    },
    {
      "id": "sports-science-101-l06",
      "title": "Checkpoint 2: Application and Analysis",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "sports-science-101-l06-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting, think about the marathon runner case study and the mid-season simulation."
        }
      ],
      "questions": [
        {
          "id": "sports-science-101-l06-q1",
          "text": "In a case study about a weightlifter who is not getting stronger, what is the best first step?",
          "skillId": "sports-science-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Immediately tell them to lift heavier weights"
            },
            {
              "id": "b",
              "text": "Analyze their training log, nutrition, and recovery data to find patterns"
            },
            {
              "id": "c",
              "text": "Assume they are not trying hard enough"
            },
            {
              "id": "d",
              "text": "Compare them to a world-record holder"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A data-driven approach is crucial. Analyzing existing information helps identify the root cause of a problem before prescribing a solution."
        },
        {
          "id": "sports-science-101-l06-q2",
          "text": "A 'tradeoff matrix' is most useful for:",
          "skillId": "sports-science-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Creating a workout schedule with no flexibility"
            },
            {
              "id": "b",
              "text": "Visually comparing the pros and cons of different decisions"
            },
            {
              "id": "c",
              "text": "Proving that one single training method is always the best"
            },
            {
              "id": "d",
              "text": "Tracking an athlete's heart rate during a game"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Its primary purpose is to help decision-makers understand the tradeoffs between different options, such as risk versus reward."
        },
        {
          "id": "sports-science-101-l06-q3",
          "text": "During a simulation, you choose an intervention that leads to an unexpected negative side effect. What is the best response?",
          "skillId": "sports-science-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Ignore the side effect and focus only on the positive results"
            },
            {
              "id": "b",
              "text": "Debrief what happened to understand the cause and improve future decisions"
            },
            {
              "id": "c",
              "text": "Blame the simulation for being unrealistic"
            },
            {
              "id": "d",
              "text": "Decide to never use that type of intervention again, no matter the context"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Learning from both expected and unexpected outcomes is key to improving decision-making skills in complex situations."
        },
        {
          "id": "sports-science-101-l06-q4",
          "text": "What does 'risk mitigation' in a training plan mean?",
          "skillId": "sports-science-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Avoiding any training that has any level of risk"
            },
            {
              "id": "b",
              "text": "Identifying potential problems (like injury) and having a plan to reduce their likelihood or impact"
            },
            {
              "id": "c",
              "text": "Only focusing on an athlete's physical health and not their mental health"
            },
            {
              "id": "d",
              "text": "Waiting for an injury to happen before thinking about how to treat it"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Mitigation is about being proactive—identifying risks ahead of time and planning ways to manage them."
        },
        {
          "id": "sports-science-101-l06-q5",
          "text": "When analyzing a complex sports scenario, it's most important to:",
          "skillId": "sports-science-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Find a quick and easy answer"
            },
            {
              "id": "b",
              "text": "Consider how different factors (physiology, psychology, tactics) are interconnected"
            },
            {
              "id": "c",
              "text": "Listen to only one person's opinion"
            },
            {
              "id": "d",
              "text": "Apply the same solution to every problem"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Sports science involves understanding systems. The best analysis considers the interplay between multiple factors."
        }
      ]
    },
    {
      "id": "sports-science-101-l07",
      "title": "Ethics and Responsibility in Sports",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "sports-science-101-l07-a1",
          "type": "image",
          "title": "Stakeholder Map",
          "content": "A diagram with the athlete at the center, surrounded by connected stakeholders like coaches, parents, teammates, medical staff, and fans."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "Sports science decisions don't just affect the athlete. In this lesson, we'll map out all the 'stakeholders'—coaches, parents, teammates, and even fans—and consider how our choices impact them. For example, a decision to push an athlete to play through a minor injury might help the team win but could have long-term health consequences. Understanding these impacts is key to making ethical choices."
        },
        {
          "id": "sports-science-101-l07-c2",
          "kind": "concept",
          "title": "Ensuring Responsibility and Trust",
          "content": "How do we build trust? By being accountable. This means keeping a clear record of why decisions were made, giving stakeholders (like the athlete and their parents) the right to review the plan, and having a clear process for fixing problems if they arise. This framework ensures that decisions are made transparently and responsibly."
        },
        {
          "id": "sports-science-101-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Practice",
          "content": "We'll conclude with a simple checklist to guide ethical decision-making. It includes questions like: 'Have I considered the long-term health of the athlete?', 'Is this decision transparent to everyone involved?', and 'Is there a plan in place if something goes wrong?'. This checklist connects our scientific work to the well-being and trust of the people we work with."
        }
      ],
      "flashcards": [
        {
          "id": "sports-science-101-l07-f1",
          "front": "Stakeholder",
          "back": "Any person or group who is affected by a decision, such as athletes, coaches, and parents."
        },
        {
          "id": "sports-science-101-l07-f2",
          "front": "Accountability",
          "back": "Taking responsibility for decisions and their outcomes, often through transparency and clear procedures."
        },
        {
          "id": "sports-science-101-l07-f3",
          "front": "Ethical Practice",
          "back": "Making decisions that prioritize the well-being, safety, and trust of all stakeholders."
        }
      ]
    },
    {
      "id": "sports-science-101-l08",
      "title": "Capstone Project: Build a Proposal",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "sports-science-101-l08-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the provided template to structure your proposal. Be clear, concise, and use evidence from the course to support your plan."
        }
      ],
      "chunks": [
        {
          "id": "sports-science-101-l08-c1",
          "kind": "practice",
          "title": "Your Capstone Plan",
          "content": "In this final lab, you'll bring everything together by creating a proposal for a sports science project. You'll choose a scenario (e.g., designing an off-season program for a youth swim team) and create a detailed plan. Your plan will include your main goal, any limitations, how you'll measure success, and the ethical guidelines you'll follow."
        },
        {
          "id": "sports-science-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Defend Your Plan",
          "content": "A good plan can stand up to tough questions. As you build your proposal, think about the challenges you might face. What questions would a skeptical coach or a concerned parent ask? Preparing evidence-based answers for your technical, safety, and ethical choices will make your proposal stronger and more convincing."
        }
      ],
      "interactiveActivities": [
        {
          "id": "sports-science-101-l08-act1",
          "type": "project_builder",
          "title": "Capstone Proposal Builder",
          "description": "Build a complete capstone proposal with objectives, metrics, risks, and ethical considerations.",
          "instructions": [
            "Define your project's main goal and any important constraints (e.g., budget, time).",
            "List at least three measurable indicators of success.",
            "Identify two potential risks and describe your plan to mitigate them."
          ]
        },
        {
          "id": "sports-science-101-l08-act2",
          "type": "debate_simulator",
          "title": "Present and Defend Your Plan",
          "description": "Defend your capstone proposal against questions from a simulated panel of a coach, an athlete, and a parent."
        }
      ]
    }
  ]
};
