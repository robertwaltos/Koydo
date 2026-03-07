import type { LearningModule } from "@/lib/modules/types";

export const biotechnology_201_Module: LearningModule = {
  "id": "biotechnology-201",
  "title": "Biotechnology Applied Practice",
  "description": "Level 201 curriculum in Biotechnology, emphasizing genetic engineering, bioprocess systems, clinical translation, bioethics, and real-world decision quality through structured practice and assessment.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Develop rigorous mental models for genetic engineering and bioprocess systems",
    "Apply structured methods to plan, execute, and review clinical translation tasks",
    "Interpret evidence using metrics, constraints, and context",
    "Diagnose common failure modes and design recovery actions",
    "Communicate tradeoffs clearly to technical and non-technical audiences",
    "Build repeatable systems for sustained improvement in Biotechnology"
  ],
  "lessons": [
    {
      "id": "biotechnology-201-l01",
      "title": "Foundations of Biotechnology",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "biotechnology-201-l01-a1",
          "type": "image",
          "title": "Cause-and-Effect Diagram",
          "content": "A visual tool (like a fishbone diagram) helps map potential causes of a problem, encouraging deeper analysis beyond just the symptoms."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l01-c1",
          "kind": "concept",
          "title": "Setting the Stage: Scope and Vocabulary",
          "content": "To succeed in biotechnology, we need a shared and precise language. This starts with defining the 'unit of analysis'—the specific thing we are studying, whether it's a single gene, a cell culture, or an entire process. Clearly defining our scope helps us focus our efforts and ensures everyone on a team is working towards the same goal. This clarity is the first step to making sound, comparable decisions."
        },
        {
          "id": "biotechnology-201-l01-c2",
          "kind": "concept",
          "title": "Thinking in Systems: Cause, Effect, and Constraints",
          "content": "Great problem-solving in science means looking beyond symptoms to find root causes. We will practice mapping out the key factors in any system: our assumptions (what we believe to be true), dependencies (what needs to happen first), and constraints (our limitations, like time or budget). This approach helps us understand why things happen and allows us to design more effective solutions."
        },
        {
          "id": "biotechnology-201-l01-c3",
          "kind": "recap",
          "title": "Working with Evidence and Staying Accountable",
          "content": "Reliable results depend on disciplined work. In this section, we'll cover three key practices: setting clear standards for what counts as good evidence, keeping detailed logs of our work and decisions, and creating accountability loops to ensure we follow through. These habits build trust in our findings and help us learn from every experiment."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-201-l01-f1",
          "front": "Unit of Analysis",
          "back": "The specific 'what' or 'who' you are studying to make a decision (e.g., a specific cell line, a batch of protein)."
        },
        {
          "id": "biotechnology-201-l01-f2",
          "front": "Constraint Mapping",
          "back": "The process of identifying all the limitations or boundaries (like budget, time, or regulations) that affect your project."
        },
        {
          "id": "biotechnology-201-l01-f3",
          "front": "Evidence Standard",
          "back": "A pre-defined rule about the quality and amount of data needed before you can confidently make a decision or take action."
        }
      ]
    },
    {
      "id": "biotechnology-201-l02",
      "title": "Biotechnology Workflow Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "biotechnology-201-l02-a1",
          "type": "image",
          "title": "Sample Workflow Diagram",
          "content": "A flowchart showing the steps of a simple bioprocess, including inputs, checkpoints, and final outputs, to visualize the entire system."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l02-c1",
          "kind": "practice",
          "title": "Building a Workflow",
          "content": "In this interactive lab, you'll design a complete workflow for a genetic engineering task. This involves defining the necessary inputs (like DNA samples and reagents), setting up checkpoints to monitor quality and progress, specifying the desired outputs, and creating 'rollback triggers'—pre-planned actions to take if something goes wrong. This hands-on practice will solidify your understanding of process design."
        },
        {
          "id": "biotechnology-201-l02-c2",
          "kind": "recap",
          "title": "The Importance of Decision Logging",
          "content": "Every step in a scientific workflow involves decisions. It's critical to log each one with a clear reason, what you expect to happen, and how you'll verify the result. This habit makes it possible to review your work later, understand what went right or wrong, and make smarter choices in the future. Good logs are the key to continuous improvement."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-201-l02-act1",
          "type": "matching_pairs",
          "title": "Workflow Component Match",
          "description": "Match each workflow component to its primary role in ensuring a quality process.",
          "pairs": [
            {
              "left": "Input Audit",
              "right": "Prevents low-quality materials from entering the system"
            },
            {
              "left": "Checkpoint Gate",
              "right": "Stops a known error from moving to the next step"
            },
            {
              "left": "Outcome Metric",
              "right": "Measures whether the final objective was achieved"
            },
            {
              "left": "Retrospective Log",
              "right": "Captures lessons to improve the next cycle"
            }
          ]
        },
        {
          "id": "biotechnology-201-l02-act2",
          "type": "sorting_buckets",
          "title": "Risk Classification",
          "description": "Sort each potential problem into its correct risk category: strategic, operational, or quality.",
          "buckets": [
            "Strategic",
            "Operational",
            "Quality"
          ],
          "items": [
            {
              "text": "The project's goal is not aligned with the company's mission.",
              "bucket": "Strategic"
            },
            {
              "text": "The handoff between the lab team and the data team is unclear.",
              "bucket": "Operational"
            },
            {
              "text": "The criteria for a 'successful' result are inconsistent.",
              "bucket": "Quality"
            },
            {
              "text": "There is no baseline data to compare results against.",
              "bucket": "Quality"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-201-l03",
      "title": "Checkpoint 1: Foundations and Workflows",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-201-l03-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-201-l03-q1",
          "text": "A scientist is studying how a new drug affects mitochondria. In this experiment, what is the 'unit of analysis'?",
          "skillId": "biotechnology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The entire laboratory"
            },
            {
              "id": "b",
              "text": "The mitochondria within the cells"
            },
            {
              "id": "c",
              "text": "The company that made the drug"
            },
            {
              "id": "d",
              "text": "The scientist's research paper"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The unit of analysis is the specific entity being measured and evaluated, which in this case is the mitochondria."
        },
        {
          "id": "biotechnology-201-l03-q2",
          "text": "In a multi-step bioprocess workflow, what is the main purpose of a 'checkpoint gate'?",
          "skillId": "biotechnology-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "To speed up the entire process"
            },
            {
              "id": "b",
              "text": "To document the final result"
            },
            {
              "id": "c",
              "text": "To prevent a sample that failed a quality test from proceeding"
            },
            {
              "id": "d",
              "text": "To order new supplies for the lab"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A checkpoint gate is a quality control step designed to stop errors or defects from propagating further down the workflow."
        },
        {
          "id": "biotechnology-201-l03-q3",
          "text": "A research team has a limited budget of $10,000 for their project. This budgetary limit is an example of a:",
          "skillId": "biotechnology-201-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Dependency"
            },
            {
              "id": "b",
              "text": "Constraint"
            },
            {
              "id": "c",
              "text": "Unit of analysis"
            },
            {
              "id": "d",
              "text": "Hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A constraint is a limitation or boundary that shapes the feasible options for a project. Budget, time, and regulations are common constraints."
        },
        {
          "id": "biotechnology-201-l03-q4",
          "text": "What is the primary benefit of keeping a detailed decision log during an experiment?",
          "skillId": "biotechnology-201-skill-process",
          "options": [
            {
              "id": "a",
              "text": "It guarantees the experiment will be successful."
            },
            {
              "id": "b",
              "text": "It makes the experiment look more complicated."
            },
            {
              "id": "c",
              "text": "It allows for accurate review and helps improve future experiments."
            },
            {
              "id": "d",
              "text": "It is the only way to get research published."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Logging decisions, rationale, and outcomes enables systematic review (a retrospective) to identify what worked and what didn't, which is key to learning and improvement."
        }
      ]
    },
    {
      "id": "biotechnology-201-l04",
      "title": "Tools for Success: Methods, Metrics, and Troubleshooting",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "biotechnology-201-l04-a1",
          "type": "image",
          "title": "Leading vs. Lagging Indicators",
          "content": "A dashboard visual showing how a leading indicator (like daily website visits) can predict a lagging indicator (like monthly sales)."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l04-c1",
          "kind": "concept",
          "title": "Choosing the Right Method",
          "content": "Selecting the right scientific method requires careful thought. You must weigh key factors like constraints (time, budget), the quality of your available data, and the 'cost of error'—how serious the consequences would be if you get it wrong. In this lesson, you'll practice comparing different methods, justifying your choice for a given scenario, and understanding the trade-offs involved. This is a critical skill for any scientist."
        },
        {
          "id": "biotechnology-201-l04-c2",
          "kind": "example",
          "title": "Measuring What Matters: A Framework for Metrics",
          "content": "Effective projects are driven by good data. We'll explore a framework that connects 'leading indicators' (early signs that predict future results), 'lagging outcomes' (the final results), and 'diagnostic measures' (data that explains why you got a certain result). Using this structure helps teams see problems early and react intelligently, rather than just waiting to see if they succeeded or failed at the end."
        },
        {
          "id": "biotechnology-201-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes: A Framework for Failure",
          "content": "Failure is a part of science, but learning from it is a skill. We will classify failures into common categories: data failures (bad inputs), process failures (a broken workflow), execution failures (human error), and strategy failures (wrong goals). By categorizing the type of failure, we can design specific, targeted solutions instead of relying on generic fixes, making our troubleshooting far more effective."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-201-l04-f1",
          "front": "Leading Indicator",
          "back": "An early metric that provides a clue about future results before the final outcome is known."
        },
        {
          "id": "biotechnology-201-l04-f2",
          "front": "Failure Framework",
          "back": "A structured way of classifying different types of failures to help design targeted and effective solutions."
        },
        {
          "id": "biotechnology-201-l04-f3",
          "front": "Cost of Error",
          "back": "The total negative impact (e.g., financial, safety, time) that results from making an incorrect decision."
        }
      ]
    },
    {
      "id": "biotechnology-201-l05",
      "title": "Case Study: Improving a Bioprocess System",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "biotechnology-201-l05-a1",
          "type": "image",
          "title": "Case Analysis Template",
          "content": "A worksheet with sections for 'Objective,' 'Context,' 'Constraints,' 'Options,' and 'Trade-offs' to guide your analysis of the case study."
        }
      ],
      "chunks": [
        {
          "id": "biotechnology-201-l05-c1",
          "kind": "practice",
          "title": "Breaking Down the Problem",
          "content": "In this interactive case study, you'll analyze a realistic biotechnology scenario. Your task is to break it down into its core components: the main objective, the surrounding context, the project's constraints, and the different options for intervention. For each option, you'll identify the potential trade-offs. This exercise sharpens your ability to think critically and systematically about complex problems."
        },
        {
          "id": "biotechnology-201-l05-c2",
          "kind": "recap",
          "title": "Developing an Improvement Plan",
          "content": "Based on your analysis, you will create a structured improvement proposal. This plan must include clear success criteria (how you'll know it worked), an accountability map (who is responsible for what), and a timeline for implementation and follow-up. This final step will train you to turn your analysis into a clear, actionable plan that others can understand and support."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-201-l05-act1",
          "type": "scenario_practice",
          "title": "Decision Path Simulation",
          "description": "Choose among three interventions to improve clinical translation outcomes under time and quality constraints.",
          "instructions": [
            "Define your success criteria before selecting an intervention.",
            "Document one short-term tradeoff and one long-term benefit for your choice.",
            "Specify a metric that will confirm if your intervention was successful in the next cycle."
          ]
        },
        {
          "id": "biotechnology-201-l05-act2",
          "type": "matching_pairs",
          "title": "Intervention to Outcome Mapping",
          "description": "Connect each proposed improvement with its most likely positive effect on the system.",
          "pairs": [
            {
              "left": "Stricter sample quality standards",
              "right": "Higher quality data and less rework later"
            },
            {
              "left": "Automated quality checkpoints",
              "right": "Faster detection of preventable errors"
            },
            {
              "left": "Post-project review meetings",
              "right": "Better adaptation and learning in future projects"
            },
            {
              "left": "Regular meetings between lab teams",
              "right": "Less confusion during process handoffs"
            }
          ]
        }
      ]
    },
    {
      "id": "biotechnology-201-l06",
      "title": "Checkpoint 2: Applying Systems Thinking",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "biotechnology-201-l06-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the structured prompt and write your reasoning before finalizing answers."
        }
      ],
      "questions": [
        {
          "id": "biotechnology-201-l06-q1",
          "text": "A lab can choose between a fast, less precise testing method and a slow, highly precise one. If the 'cost of error' is extremely high (e.g., a patient misdiagnosis), which factor should be prioritized in the decision?",
          "skillId": "biotechnology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Speed, to get results quickly"
            },
            {
              "id": "b",
              "text": "Precision, to minimize the chance of a harmful mistake"
            },
            {
              "id": "c",
              "text": "Low cost, to save budget"
            },
            {
              "id": "d",
              "text": "Ease of use for the lab technicians"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When the cost of error is high, accuracy and precision become the most important criteria, even if it means sacrificing speed or cost."
        },
        {
          "id": "biotechnology-201-l06-q2",
          "text": "A team is developing a new biofuel. They measure the density of their algal culture daily. They hope this predicts the final amount of oil produced. In this context, the daily density measurement is a:",
          "skillId": "biotechnology-201-skill-process",
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
              "text": "Constraint"
            },
            {
              "id": "d",
              "text": "Failure mode"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A leading indicator is an early measurement that suggests a future result. The final oil yield would be the lagging outcome."
        },
        {
          "id": "biotechnology-201-l06-q3",
          "text": "An experiment fails because a technician misread the instructions and added the wrong reagent. According to the failure framework, this is best classified as what type of failure?",
          "skillId": "biotechnology-201-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Data failure"
            },
            {
              "id": "b",
              "text": "Process failure"
            },
            {
              "id": "c",
              "text": "Execution failure"
            },
            {
              "id": "d",
              "text": "Strategy failure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An execution failure is a mistake made while performing a correctly designed process. Misreading instructions is a classic example of human error in execution."
        },
        {
          "id": "biotechnology-201-l06-q4",
          "text": "When proposing an improvement in a case study, what is the most important reason to define clear success criteria upfront?",
          "skillId": "biotechnology-201-skill-strategy",
          "options": [
            {
              "id": "a",
              "text": "To make the proposal seem more professional"
            },
            {
              "id": "b",
              "text": "To provide an objective way to know if the change worked"
            },
            {
              "id": "c",
              "text": "To guarantee that the proposal will be approved"
            },
            {
              "id": "d",
              "text": "To assign blame if the improvement fails"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining success criteria beforehand creates a clear, unbiased target, allowing the team to objectively measure whether the intervention achieved its goal."
        }
      ]
    }
  ]
};
