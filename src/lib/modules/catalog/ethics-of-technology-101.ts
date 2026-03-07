import type { LearningModule } from "@/lib/modules/types";

export const ethics_of_technology_101_Module: LearningModule = {
  "id": "ethics-of-technology-101",
  "title": "Introduction to the Ethics of Technology",
  "description": "A beginner's course on the ethics of technology. Learn to identify potential harms, use frameworks for fair decision-making, design technology responsibly, and understand the importance of rules and accountability. This course uses real-world case studies, interactive simulations, and project-based learning.",
  "subject": "Ethics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "ethics",
    "technology"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Apply ethical frameworks to technology-related decisions, clearly stating assumptions and tradeoffs.",
    "Develop a step-by-step process for identifying and addressing potential harm caused by technology.",
    "Evaluate the impact of design choices, considering both intended benefits and unintended side effects.",
    "Propose clear rules and procedures to ensure technology is governed responsibly and people are held accountable.",
    "Clearly communicate complex ethical issues, including evidence and uncertainties, to different audiences.",
    "Create well-reasoned recommendations that can be defended against questions and criticism."
  ],
  "lessons": [
    {
      "id": "ethics-of-technology-101-l00",
      "title": "Welcome to the Ethics of Technology",
      "type": "video",
      "duration": 5,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l00-a1",
          "type": "glossary",
          "title": "Key Terms",
          "content": "A list of important terms and definitions that will be used throughout the course."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l00-c1",
          "kind": "concept",
          "title": "Why Does Tech Ethics Matter?",
          "content": "Technology is a powerful tool that shapes our world, from how we communicate to the jobs we do. In this introduction, we'll explore why it's crucial to think about the ethical side of technology and ask important questions about fairness, safety, and responsibility.",
          "visualPrompt": "Animation showing technology connecting people globally, then morphing to show a question mark over a computer chip."
        },
        {
          "id": "ethics-of-technology-101-l00-c2",
          "kind": "concept",
          "title": "What You Will Learn",
          "content": "This course will give you the tools to analyze technology's impact on society. We will cover core concepts, work through real-world case studies, and build a final project to showcase your skills. Our goal is to help you become a more thoughtful and responsible user, creator, and citizen in a technological world.",
          "visualPrompt": "A visual roadmap of the course, showing icons for 'Concepts', 'Case Study', 'Simulation', and 'Final Project'."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l01",
      "title": "What is Tech Ethics? Core Concepts",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l01-a1",
          "type": "image",
          "title": "Concept Map",
          "content": "A visual diagram connecting the core concepts of ethical frameworks, harms, and responsible design."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l01-c1",
          "kind": "concept",
          "title": "Setting the Stage: Key Ideas",
          "content": "To talk about tech ethics, we need a shared vocabulary. We'll define key terms like 'ethical frameworks' (our guides for making fair decisions), 'stakeholders' (everyone affected by a technology), and 'sociotechnical harms' (the negative impacts that can arise when tech meets society).",
          "visualPrompt": "Simple animated icons appearing on screen for 'Framework' (a compass), 'Stakeholders' (a group of diverse people), and 'Harm' (a cracked screen)."
        },
        {
          "id": "ethics-of-technology-101-l01-c2",
          "kind": "concept",
          "title": "Thinking About Cause and Effect",
          "content": "It's important to understand how a technology can lead to certain outcomes, both good and bad. We'll practice mapping out these cause-and-effect chains and learn to spot the hidden assumptions we might be making. This helps us choose better ways to solve problems.",
          "visualPrompt": "An animated flowchart showing a technology (e.g., a food delivery app) leading to multiple outcomes (convenience, traffic, impact on local restaurants)."
        },
        {
          "id": "ethics-of-technology-101-l01-c3",
          "kind": "recap",
          "title": "Using Evidence to Make Claims",
          "content": "In this course, every claim you make should be backed by evidence. We'll discuss what counts as good evidence, how to be honest about what we don't know (uncertainty), and why it's important to have checkpoints to review our work for accuracy.",
          "visualPrompt": "A graphic of a magnifying glass over a data point, with a checklist icon nearby."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l01-f1",
          "front": "Ethical Frameworks",
          "back": "Guiding principles (like fairness or safety) that help us make decisions and evaluate tradeoffs."
        },
        {
          "id": "ethics-of-technology-101-l01-f2",
          "front": "Sociotechnical Harms",
          "back": "Negative impacts on people or society that arise from the interaction of technology and human behavior."
        },
        {
          "id": "ethics-of-technology-101-l01-f3",
          "front": "Responsible Design",
          "back": "The practice of creating technology while carefully considering its potential impacts and building in safeguards."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l02",
      "title": "Building an Ethical Workflow",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l02-a1",
          "type": "template",
          "title": "Workflow Template",
          "content": "A downloadable template to help you structure your own ethical workflow, including sections for goals, stakeholders, potential harms, and checkpoints."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l02-c1",
          "kind": "practice",
          "title": "Designing a Responsible Process",
          "content": "In this lab, you'll design a step-by-step process (a workflow) for analyzing a new technology. You'll use the key terms we've learned, map out how the tech works, and think through a few possible scenarios. Then, you'll test your workflow to see if it holds up.",
          "visualPrompt": "An interactive drag-and-drop interface where users can arrange blocks labeled 'Identify Stakeholders', 'Brainstorm Harms', 'Propose Solutions', and 'Review'."
        },
        {
          "id": "ethics-of-technology-101-l02-c2",
          "kind": "recap",
          "title": "Checkpoints for Safety and Quality",
          "content": "A good workflow has built-in safety checks. We'll learn how to define who is responsible for what, create 'control gates' or review points to monitor progress, and set up ways to verify that our decisions are having the intended effect after they're made.",
          "visualPrompt": "An animation of a conveyor belt with products moving along it, passing through quality-check gates where a robotic arm gives a thumbs-up."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l02-act1",
          "type": "matching_pairs",
          "title": "Matching Actions to Benefits",
          "description": "Match each safety check with the primary benefit it provides to a system.",
          "pairs": [
            {
              "left": "Reviewing a plan before launch",
              "right": "Reduces preventable mistakes"
            },
            {
              "left": "Having a quick 'undo' button",
              "right": "Limits the damage when something goes wrong"
            },
            {
              "left": "Tracking key metrics over time",
              "right": "Helps prove if something is working"
            },
            {
              "left": "Holding a 'lessons learned' meeting",
              "right": "Improves the quality of future decisions"
            }
          ]
        },
        {
          "id": "ethics-of-technology-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Classifying Constraints",
          "description": "Sort these project limitations into the correct categories.",
          "buckets": [
            "Technical",
            "Policy",
            "Human Impact"
          ],
          "items": [
            {
              "text": "The app must load in under 2 seconds",
              "bucket": "Technical"
            },
            {
              "text": "User data must be deleted after 90 days",
              "bucket": "Policy"
            },
            {
              "text": "The community may lose trust in us",
              "bucket": "Human Impact"
            },
            {
              "text": "We must publicly report any data breaches",
              "bucket": "Policy"
            }
          ]
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l03",
      "title": "Checkpoint 1: Core Concepts",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l03-a1",
          "type": "practice",
          "title": "Review Your Notes",
          "content": "Before starting the quiz, take a moment to review the key concepts from the first two lessons."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-101-l03-q1",
          "text": "When using an ethical framework, what is the most important first step?",
          "skillId": "ethics-of-technology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Rely only on your gut feeling"
            },
            {
              "id": "b",
              "text": "Clearly state your assumptions and the values you are prioritizing"
            },
            {
              "id": "c",
              "text": "Assume every possible outcome is equally good"
            },
            {
              "id": "d",
              "text": "Ignore anyone who disagrees with you"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Good ethical decisions require being clear about your starting assumptions and what you are trying to achieve."
        },
        {
          "id": "ethics-of-technology-101-l03-q2",
          "text": "For a beginner's course, the strongest focus should be on:",
          "skillId": "ethics-of-technology-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Understanding key terms, how systems work, and thinking through basic scenarios"
            },
            {
              "id": "b",
              "text": "Moving as fast as possible without stopping to review your work"
            },
            {
              "id": "c",
              "text": "Only considering the perspective of the person who built the technology"
            },
            {
              "id": "d",
              "text": "Making claims about success without any data to back them up"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A strong foundation is built on understanding the basics: vocabulary, system mechanics, and scenario analysis."
        },
        {
          "id": "ethics-of-technology-101-l03-q3",
          "text": "What is the best way to reduce the risk of sociotechnical harms?",
          "skillId": "ethics-of-technology-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "Hope that no one is responsible when something goes wrong"
            },
            {
              "id": "b",
              "text": "Have clear checkpoints, owners for each task, and a plan for when to escalate problems"
            },
            {
              "id": "c",
              "text": "Make changes to the system without telling anyone or writing it down"
            },
            {
              "id": "d",
              "text": "Avoid learning from past mistakes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reliability and safety improve when responsibility, control, and escalation paths are clear and planned in advance."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l04",
      "title": "Case Study: The Recommendation Algorithm",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l04-a1",
          "type": "case_brief",
          "title": "Case Study Brief",
          "content": "A one-page summary of the case, outlining the technology, the stakeholders, and the central ethical dilemma."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l04-c1",
          "kind": "example",
          "title": "The Case: A New Recommendation Algorithm",
          "content": "A social media company introduces a new algorithm to recommend content to users. It's designed to maximize engagement, but soon, users report seeing more extreme and polarizing content. We'll map out the stakeholders (users, advertisers, the company) and identify the core tensions between engagement, user well-being, and fairness.",
          "visualPrompt": "A split screen showing a happy user on one side and a frustrated user on the other, with the algorithm's code flowing between them."
        },
        {
          "id": "ethics-of-technology-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Pros and Cons",
          "content": "We'll create a decision-making grid to compare different solutions. Should the company change the algorithm, give users more control, or do something else? We'll evaluate each option based on its effectiveness, fairness, and feasibility to understand the tradeoffs.",
          "visualPrompt": "An animated grid appearing on screen with rows for 'Option 1', 'Option 2' and columns for 'Pros', 'Cons', and 'Risks'."
        },
        {
          "id": "ethics-of-technology-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "How can the company prevent this from happening again? We'll look for patterns that led to the problem and turn those insights into safeguards. We'll also outline a 'playbook' for what to do if a similar problem occurs in the future, including how to monitor the situation.",
          "visualPrompt": "A graphic showing a 'warning sign' icon turning into a 'shield' icon, representing a lesson learned and a safeguard created."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l04-f1",
          "front": "Tradeoff",
          "back": "A situation where you must choose between two or more desirable but conflicting options, accepting a loss in one area to gain in another."
        },
        {
          "id": "ethics-of-technology-101-l04-f2",
          "front": "Failure Pattern",
          "back": "A specific, repeatable set of conditions or events that indicate a likely risk or problem in a system."
        },
        {
          "id": "ethics-of-technology-101-l04-f3",
          "front": "Response Playbook",
          "back": "A step-by-step guide for how to respond safely and quickly when a problem or crisis occurs."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l05",
      "title": "Simulation Lab: Testing Your Decisions",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l05-a1",
          "type": "practice",
          "title": "Simulation Guide",
          "content": "Follow the steps in this guide to set up your simulation, run the test, and interpret the results."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l05-c1",
          "kind": "practice",
          "title": "Setting Up the Simulation",
          "content": "In this interactive lab, you'll be in the driver's seat. You will choose a strategy to fix the recommendation algorithm from our case study. You'll set parameters for your test and define what a 'successful' outcome looks like in measurable terms.",
          "visualPrompt": "A dashboard interface with sliders and buttons that allow the user to 'tweak' the algorithm's priorities (e.g., 'Increase Diversity', 'Lower Polarization')."
        },
        {
          "id": "ethics-of-technology-101-l05-c2",
          "kind": "recap",
          "title": "Reviewing the Results",
          "content": "After running the simulation, we'll analyze the outcome. Did your chosen strategy work as expected? Were there any surprising side effects? Did your solution follow the company's ethical guidelines? This debrief helps us learn from the simulated experience.",
          "visualPrompt": "A results screen showing charts and graphs of the simulation's outcome, with green checkmarks for met goals and red flags for negative side effects."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l05-act1",
          "type": "scenario_practice",
          "title": "Intervention Simulation",
          "description": "Choose one of three strategies to fix the algorithm. Run the simulation and write a short justification for your choice based on the results.",
          "instructions": [
            "First, define your main goal and any 'do not cross' lines (guardrails).",
            "For each of the three options, predict one short-term and one long-term consequence.",
            "Run the simulation and use the data to explain why your chosen strategy was the best option."
          ]
        },
        {
          "id": "ethics-of-technology-101-l05-act2",
          "type": "matching_pairs",
          "title": "Matching Problems to Solutions",
          "description": "Match each common risk with the most effective way to address it.",
          "pairs": [
            {
              "left": "No one is sure who is in charge",
              "right": "Create a clear chart of roles and responsibilities"
            },
            {
              "left": "The data we're using is unreliable",
              "right": "Add better data validation and quality checks"
            },
            {
              "left": "The rules are being ignored over time",
              "right": "Schedule regular reviews to align with standards"
            },
            {
              "left": "Users are angry and feel ignored",
              "right": "Increase transparency and create feedback channels"
            }
          ]
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l06",
      "title": "Checkpoint 2: Applying Your Skills",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l06-a1",
          "type": "practice",
          "title": "Review the Case Study",
          "content": "Refresh your memory of the recommendation algorithm case study before starting this quiz."
        }
      ],
      "questions": [
        {
          "id": "ethics-of-technology-101-l06-q1",
          "text": "When analyzing a case study, what is the purpose of a decision-making grid (or tradeoff matrix)?",
          "skillId": "ethics-of-technology-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "To prove that your first idea is always the best one"
            },
            {
              "id": "b",
              "text": "To hide the negative consequences of a preferred option"
            },
            {
              "id": "c",
              "text": "To systematically compare different options against important criteria like fairness and effectiveness"
            },
            {
              "id": "d",
              "text": "To make the decision more complicated than it needs to be"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A decision-making grid is a tool for structured comparison, helping to make tradeoffs explicit and defensible."
        },
        {
          "id": "ethics-of-technology-101-l06-q2",
          "text": "In a simulation, 'side effects' refer to:",
          "skillId": "ethics-of-technology-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "The intended positive outcomes of your intervention"
            },
            {
              "id": "b",
              "text": "Unintended consequences, which can be positive or negative, that result from your action"
            },
            {
              "id": "c",
              "text": "Results that should be ignored because they were not part of the original plan"
            },
            {
              "id": "d",
              "text": "Data errors in the simulation that make the results invalid"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Monitoring for side effects is crucial for responsible design, as it reveals the full impact of an intervention beyond its primary goal."
        },
        {
          "id": "ethics-of-technology-101-l06-q3",
          "text": "What is the main goal of creating a 'response playbook' after a problem occurs?",
          "skillId": "ethics-of-technology-101-skill-reliability",
          "options": [
            {
              "id": "a",
              "text": "To blame a specific person for the failure"
            },
            {
              "id": "b",
              "text": "To ensure the exact same response is used every time, regardless of the situation"
            },
            {
              "id": "c",
              "text": "To have a pre-planned, effective procedure to follow, which allows for a faster and safer recovery"
            },
            {
              "id": "d",
              "text": "To create a secret document that is only shared with executives"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A playbook is a proactive tool designed to make incident response more predictable, safe, and efficient."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l07",
      "title": "Policy, People, and Accountability",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l07-a1",
          "type": "checklist",
          "title": "Accountability Checklist",
          "content": "A checklist with questions to ask to determine if a system has a strong accountability structure."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "Technology doesn't affect everyone in the same way. We'll learn how to map out the different groups of people (stakeholders) and analyze how the benefits and burdens of a technology are distributed among them. This is key to understanding issues of fairness and equity.",
          "visualPrompt": "A diagram of a central technology with lines branching out to different groups of people (e.g., 'Children', 'Elderly Users', 'Employees'), with plus (+) and minus (-) signs next to each to show benefits and harms."
        },
        {
          "id": "ethics-of-technology-101-l07-c2",
          "kind": "concept",
          "title": "Who is Responsible?",
          "content": "When something goes wrong, who is accountable? A good system has clear accountability. This means we can trace why a decision was made, people have a right to appeal decisions that affect them, and there are clear processes for fixing mistakes.",
          "visualPrompt": "An animation showing a 'decision' block, with arrows pointing to it labeled 'Who?', 'Why?', and 'With what data?'. An 'Appeal' button appears next to it."
        },
        {
          "id": "ethics-of-technology-101-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Tech",
          "content": "We can bring everything together into a final checklist for responsible technology. This includes checking our work against company policies, our ethical principles, reliability standards, and whether we are building trust with our users and society.",
          "visualPrompt": "A clipboard with a checklist appears, with items like 'Fairness', 'Transparency', 'Safety', and 'Accountability' being checked off."
        }
      ],
      "flashcards": [
        {
          "id": "ethics-of-technology-101-l07-f1",
          "front": "Impact Distribution",
          "back": "How the positive and negative effects of a technology are spread across different groups of people."
        },
        {
          "id": "ethics-of-technology-101-l07-f2",
          "front": "Decision Traceability",
          "back": "The ability to look back and understand how and why a decision was made, who made it, and what information was used."
        },
        {
          "id": "ethics-of-technology-101-l07-f3",
          "front": "Accountability",
          "back": "Having clear responsibility for an outcome and being answerable for it, including an obligation to fix harms."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l08",
      "title": "Capstone Project: Planning Your Analysis",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l08-a1",
          "type": "template",
          "title": "Project Charter Template",
          "content": "A fillable document to help you structure your capstone project plan, including sections for your objective, scope, metrics, and risks."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l08-c1",
          "kind": "practice",
          "title": "Creating Your Project Plan",
          "content": "For your final project, you will analyze a technology of your choice. In this lab, you'll create a project plan, or 'charter'. You will define the scope of your analysis, the success metrics you'll use, and the checkpoints you'll have for review.",
          "visualPrompt": "An interactive form on screen where the user fills in fields for 'Technology to Analyze', 'Key Questions', and 'Potential Harms to Investigate'."
        },
        {
          "id": "ethics-of-technology-101-l08-c2",
          "kind": "recap",
          "title": "Preparing to Share Your Findings",
          "content": "A key part of ethical analysis is being able to defend your conclusions. We'll discuss how to gather strong evidence for your claims and anticipate tough questions. Being prepared to explain your reasoning is essential for building trust and making a real impact.",
          "visualPrompt": "An animation of a person standing next to a presentation, with question marks flying towards them, which they catch and turn into checkmarks."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l08-act1",
          "type": "project_builder",
          "title": "Project Plan Builder",
          "description": "Use this tool to build a plan for your capstone project, including your main objective, risks, and how you'll measure success.",
          "instructions": [
            "State the technology you will analyze and the main ethical question you are asking.",
            "Define at least three measurable indicators you will use to evaluate the technology's impact.",
            "Describe what you would do if you discovered a critical risk during your analysis."
          ]
        },
        {
          "id": "ethics-of-technology-101-l08-act2",
          "type": "debate_simulator",
          "title": "Decision Defense Panel",
          "description": "Practice defending your project plan against critiques from different perspectives (technical, policy, and user impact)."
        }
      ]
    },
    {
      "id": "ethics-of-technology-101-l09",
      "title": "Capstone Project: Final Report",
      "type": "project",
      "duration": 60,
      "learningAids": [
        {
          "id": "ethics-of-technology-101-l09-a1",
          "type": "rubric",
          "title": "Grading Rubric",
          "content": "A detailed rubric showing how your final project will be evaluated, including criteria for analysis, evidence, clarity, and recommendations."
        }
      ],
      "chunks": [
        {
          "id": "ethics-of-technology-101-l09-c1",
          "kind": "practice",
          "title": "Project Submission",
          "content": "It's time to bring together everything you've learned. Using the plan you created in the previous lesson, conduct your analysis of your chosen technology. Compile your findings into a final report or presentation that outlines the context, your analysis, the evidence you gathered, and your final recommendations.",
          "visualPrompt": "A montage of a student researching, typing, creating charts, and finally clicking a 'Submit' button on a project upload page."
        },
        {
          "id": "ethics-of-technology-101-l09-c2",
          "kind": "recap",
          "title": "Course Wrap-Up and Next Steps",
          "content": "Congratulations on completing the course! You now have a foundational toolkit for thinking critically about the ethics of technology. This is just the beginning of a lifelong learning journey. Continue to ask critical questions, seek out diverse perspectives, and advocate for a more responsible and equitable technological future.",
          "visualPrompt": "An animation of a toolkit closing, then the learner walking towards a path that splits into multiple directions, symbolizing future learning and application."
        }
      ],
      "interactiveActivities": [
        {
          "id": "ethics-of-technology-101-l09-act1",
          "type": "project_submission",
          "title": "Submit Your Capstone Project",
          "description": "Upload your final report or presentation here. Ensure it meets all the requirements outlined in the project charter and grading rubric."
        }
      ]
    }
  ]
};
