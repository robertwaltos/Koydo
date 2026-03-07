import type { LearningModule } from "@/lib/modules/types";

export const science_301_Module: LearningModule = {
  "id": "science-301",
  "title": "Systems Science, Modeling, and Experimental Analysis III",
  "description": "Explore the interconnectedness of the world around you. This advanced course teaches you to analyze complex systems, design robust experiments, build scientific models, and construct powerful arguments from evidence across physics, chemistry, biology, and Earth science.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "systems",
    "analysis",
    "research"
  ],
  "minAge": 13,
  "maxAge": 18,
  "version": "1.1.0",
  "difficultyBand": "advanced",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Analyze complex systems with interacting components and feedback loops.",
    "Design multivariable experiments and evaluate the risk of confounding variables.",
    "Interpret the assumptions of scientific models and compare their predictive performance.",
    "Integrate evidence from physics, chemistry,biology, and Earth science contexts.",
    "Assess sources of uncertainty and the robustness of scientific conclusions.",
    "Construct coherent scientific arguments from multiple streams of data."
  ],
  "lessons": [
    {
      "id": "science-301-l01",
      "title": "Introduction to Systems Thinking",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-301-l01-a1",
          "type": "practice",
          "title": "System Mapping Practice",
          "content": "Choose a simple system (e.g., a bicycle, a plant) and map its components, boundaries, and one feedback loop."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l01-c1",
          "kind": "concept",
          "title": "System Boundaries and Components",
          "content": "A system is a set of interacting parts that form a complex whole. To study a system, we first define its boundaries—what's inside the system and what's outside. This helps us focus our analysis and understand the external factors that might influence it. For example, in studying a forest ecosystem, the trees, animals, and soil are components inside the boundary, while weather patterns are an external factor.",
          "visualPrompt": "An animated diagram showing a circle being drawn around a pond ecosystem. Components like fish and plants are inside, while an arrow labeled 'Sunlight' points from the outside."
        },
        {
          "id": "science-301-l01-c2",
          "kind": "concept",
          "title": "Feedback Loops: The Engines of Change",
          "content": "Feedback loops are processes where a system's output circles back to become an input, influencing its future behavior. A 'positive' feedback loop amplifies change, like a snowball rolling downhill. A 'negative' feedback loop stabilizes a system, like a thermostat turning off the heat when a room reaches the target temperature. Understanding these loops helps us predict how systems will change over time.",
          "visualPrompt": "A split-screen animation. On the left, a diagram of a positive feedback loop (e.g., population growth). On the right, a diagram of a negative feedback loop (e.g., predator-prey cycle)."
        },
        {
          "id": "science-301-l01-c3",
          "kind": "recap",
          "title": "Emergent Behavior: The Whole is Greater",
          "content": "Emergent behavior is when a system shows complex patterns that its individual components do not have. A single bird doesn't form a flock, but together, simple interaction rules create mesmerizing flocking patterns. This teaches us to look at the entire system, not just its parts, to understand its most interesting behaviors.",
          "visualPrompt": "A video clip transitioning from a close-up of a single ant to a wide shot of an entire ant colony building a complex structure."
        }
      ],
      "flashcards": [
        {
          "id": "science-301-l01-f1",
          "front": "What is a feedback loop?",
          "back": "A process where the output of a system influences its future inputs and behavior, either by amplifying (positive) or stabilizing (negative) it."
        },
        {
          "id": "science-301-l01-f2",
          "front": "What is a system boundary?",
          "back": "The defined limit that separates the components of a system from its external environment."
        },
        {
          "id": "science-301-l01-f3",
          "front": "What is emergent behavior?",
          "back": "Complex, system-level patterns that arise from the interactions of simple, individual components."
        }
      ]
    },
    {
      "id": "science-301-l02",
      "title": "Multivariable Experimental Design Lab",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "science-301-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the interactive lab to design an experiment testing two variables on plant growth, ensuring you control for potential confounders."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l02-c1",
          "kind": "concept",
          "title": "Confounding and Interaction Effects",
          "content": "In experiments with multiple variables, a 'confounding' variable can mix up your results, making it seem like one variable is causing an effect when it's actually another. For example, if you test two fertilizers on plants in different locations, is it the fertilizer or the amount of sunlight (a confounder) causing the growth? Good experimental design helps us isolate the true cause and also discover 'interaction effects,' where two variables work together to produce a unique outcome.",
          "visualPrompt": "A simple animation showing two groups of plants. Group A gets fertilizer and lots of sun. Group B gets no fertilizer and little sun. A question mark appears: 'What caused the difference?' The sun icon is then shown as a 'confounding variable'."
        },
        {
          "id": "science-301-l02-c2",
          "kind": "practice",
          "title": "Factorial Design: Testing All Combos",
          "content": "A powerful way to handle multiple variables is a 'factorial design,' where you test every possible combination of your variables' levels. For example, to test two fertilizers (A and B) and two watering schedules (daily and weekly), you would create four groups: A/daily, A/weekly, B/daily, and B/weekly. This method efficiently reveals the main effects of each variable and any interaction effects between them.",
          "visualPrompt": "A 2x2 grid appears. The rows are labeled 'Fertilizer A' and 'Fertilizer B'. The columns are labeled 'Daily Water' and 'Weekly Water'. The four cells are highlighted one by one, representing the experimental groups."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-301-l02-act1",
          "type": "matching_pairs",
          "title": "Design-to-Risk Match",
          "description": "Match the experimental design strategy to the type of risk it helps reduce.",
          "pairs": [
            {
              "left": "Random assignment",
              "right": "Reduces selection bias"
            },
            {
              "left": "Blinding",
              "right": "Reduces observer and participant bias"
            },
            {
              "left": "Factorial design",
              "right": "Tests interactions among variables"
            },
            {
              "left": "Replication",
              "right": "Improves reliability and confidence"
            }
          ]
        },
        {
          "id": "science-301-l02-act2",
          "type": "scenario_practice",
          "title": "Confounder Isolation Drill",
          "description": "You are given a flawed experimental design. Your task is to identify a key confounding variable and propose a change to fix it.",
          "instructions": [
            "Read the description of the flawed experiment.",
            "Identify one potential confounding variable.",
            "Propose one specific change to the experiment's design to control for that variable."
          ]
        }
      ]
    },
    {
      "id": "science-301-l03",
      "title": "Checkpoint 1: Systems and Experimental Rigor",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "science-301-l03-q1",
          "text": "Why is it crucial to define a system's boundaries before starting an analysis?",
          "skillId": "analyze-systems",
          "options": [
            {
              "id": "a",
              "text": "To ignore all external factors"
            },
            {
              "id": "b",
              "text": "To clarify the scope of the study and its limitations"
            },
            {
              "id": "c",
              "text": "To eliminate all uncertainty from the results"
            },
            {
              "id": "d",
              "text": "To make the system seem simpler than it is"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Defining boundaries clarifies what is being studied, preventing confusion and ensuring conclusions are valid for that specific scope."
        },
        {
          "id": "science-301-l03-q2",
          "text": "Factorial designs are particularly powerful for experiments because they:",
          "skillId": "design-experiments",
          "options": [
            {
              "id": "a",
              "text": "Are the simplest type of experiment to run"
            },
            {
              "id": "b",
              "text": "Allow scientists to estimate both main effects and interaction effects"
            },
            {
              "id": "c",
              "text": "Require no control group"
            },
            {
              "id": "d",
              "text": "Guarantee a causal link with no uncertainty"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Factorial designs are efficient because they test how variables perform alone (main effects) and in combination (interaction effects)."
        },
        {
          "id": "science-301-l03-q3",
          "text": "A positive feedback loop in a system tends to:",
          "skillId": "analyze-systems",
          "options": [
            {
              "id": "a",
              "text": "Stabilize the system against change"
            },
            {
              "id": "b",
              "text": "Amplify or accelerate change"
            },
            {
              "id": "c",
              "text": "Maintain a constant state"
            },
            {
              "id": "d",
              "text": "Reverse the direction of a process"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Positive feedback reinforces deviations from a baseline, causing exponential growth or rapid change."
        },
        {
          "id": "science-301-l03-q4",
          "text": "In science, replicating an experiment primarily improves:",
          "skillId": "assess-uncertainty",
          "options": [
            {
              "id": "a",
              "text": "The amount of bias in the original study"
            },
            {
              "id": "b",
              "text": "The reliability of and confidence in the findings"
            },
            {
              "id": "c",
              "text": "The certainty of a single trial's outcome"
            },
            {
              "id": "d",
              "text": "The novelty of the discovery"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When results can be replicated by the same or different researchers, it strengthens our confidence that the finding is reliable and not a fluke."
        }
      ]
    },
    {
      "id": "science-301-l04",
      "title": "Modeling Scientific Phenomena",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-301-l04-a1",
          "type": "practice",
          "title": "Model Matching",
          "content": "For a given scientific question (e.g., 'How does a volcano work?'), describe what a conceptual, physical, and computational model might look like."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l04-c1",
          "kind": "concept",
          "title": "Model Types and Their Purposes",
          "content": "Scientists use models as simplified representations of reality to help understand and predict phenomena. A 'conceptual' model is a diagram of ideas, like a food web. A 'physical' model is a hands-on replica, like a model volcano. A 'mathematical' or 'computational' model uses equations and algorithms to simulate complex processes, like a climate forecast. The key is choosing the right type of model for the question you're asking.",
          "visualPrompt": "An icon for each model type is shown: a flowchart for 'conceptual', a 3D model of a cell for 'physical', and lines of code/graphs for 'computational'."
        },
        {
          "id": "science-301-l04-c2",
          "kind": "concept",
          "title": "Synthesizing Cross-Disciplinary Evidence",
          "content": "Today's biggest scientific challenges, like climate change or disease pandemics, are too complex for one field alone. Progress requires synthesizing evidence from multiple disciplines. For example, understanding a changing climate involves physics (heat transfer), chemistry (greenhouse gases), biology (ecosystem impact), and Earth science (ice core data). Integrating these perspectives creates a more complete and robust picture.",
          "visualPrompt": "A central puzzle piece labeled 'Climate Change' is connected to other pieces labeled 'Physics', 'Chemistry', 'Biology', and 'Earth Science'."
        },
        {
          "id": "science-301-l04-c3",
          "kind": "recap",
          "title": "Understanding a Model's Limits",
          "content": "No model is perfect. Every model has assumptions and a limited range where it is accurate, known as its 'validated range.' Using a model to make predictions far outside this range is called 'extrapolation' and can be very unreliable. A crucial part of using models is to clearly state their limitations and the level of uncertainty in their predictions.",
          "visualPrompt": "A graph with data points in the middle, with a solid line drawn through them labeled 'Validated Range'. The line continues as a dotted line into an empty area of the graph, labeled 'Uncertain Extrapolation'."
        }
      ],
      "flashcards": [
        {
          "id": "science-301-l04-f1",
          "front": "What is a conceptual model?",
          "back": "A qualitative representation of a system's components and their relationships, often shown as a diagram or flowchart."
        },
        {
          "id": "science-301-l04-f2",
          "front": "What is a computational model?",
          "back": "A computer-run simulation based on mathematical rules, used to explore how a system's behavior changes over time."
        },
        {
          "id": "science-301-l04-f3",
          "front": "What is model validation?",
          "back": "The process of testing a model's predictions against real-world observations to determine its accuracy and reliability."
        }
      ]
    },
    {
      "id": "science-301-l05",
      "title": "Evidence Synthesis and Claim Defense Lab",
      "type": "interactive",
      "duration": 18,
      "learningAids": [
        {
          "id": "science-301-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Use the interactive lab to evaluate a set of mixed evidence and construct a scientific claim, calibrating your confidence level."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l05-c1",
          "kind": "practice",
          "title": "Integrating Multiple Streams of Evidence",
          "content": "A strong scientific conclusion is like a sturdy table—it needs more than one leg to stand on. Instead of relying on a single experiment, scientists look for 'convergence,' where different types of evidence (e.g., lab experiments, field observations, computer models) all point to the same conclusion. This process of integrating multiple evidence streams builds a much more convincing and robust scientific argument.",
          "visualPrompt": "An animation showing three separate streams (labeled 'Experiment', 'Observation', 'Model') flowing together to fill a container labeled 'Strong Conclusion'."
        },
        {
          "id": "science-301-l05-c2",
          "kind": "recap",
          "title": "Calibrating Your Claim",
          "content": "Making a scientific claim isn't just about stating a fact; it's about communicating your level of confidence. 'Claim calibration' means adjusting the strength of your language based on the quality and quantity of your evidence. Instead of saying 'This proves X,' a calibrated claim might be 'The evidence strongly suggests X, with the main uncertainty being Y.' This is honest, precise, and reflects the true nature of science.",
          "visualPrompt": "A 'Confidence Meter' graphic with a needle that moves from 'Weakly Supported' to 'Moderately Supported' to 'Strongly Supported' as more pieces of evidence are added below it."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-301-l05-act1",
          "type": "sorting_buckets",
          "title": "Evidence Strength Sort",
          "description": "Sort the following pieces of evidence based on how strongly they would support a scientific claim.",
          "buckets": [
            "Strong Support",
            "Moderate Support",
            "Weak Support"
          ],
          "items": [
            {
              "text": "A replicated, randomized controlled experiment with a consistent outcome.",
              "bucket": "Strong Support"
            },
            {
              "text": "A single observational study with several potential confounding variables.",
              "bucket": "Moderate Support"
            },
            {
              "text": "An unverified anecdotal report from a single person.",
              "bucket": "Weak Support"
            },
            {
              "text": "Three independent studies using different methods all find the same trend.",
              "bucket": "Strong Support"
            }
          ]
        },
        {
          "id": "science-301-l05-act2",
          "type": "scenario_practice",
          "title": "Claim Defense Exercise",
          "description": "Based on a provided set of mixed evidence about a new energy drink, construct and defend a calibrated scientific claim.",
          "instructions": [
            "State your overall claim about the drink's effectiveness.",
            "List the strongest piece of evidence that supports your claim.",
            "Identify one major uncertainty or limitation that prevents you from being 100% certain."
          ]
        }
      ]
    },
    {
      "id": "science-301-l06",
      "title": "Checkpoint 2: Models and Evidence Integration",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "science-301-l06-q1",
          "text": "What is the primary benefit of combining multiple, independent streams of evidence?",
          "skillId": "synthesize-evidence",
          "options": [
            {
              "id": "a",
              "text": "It makes the scientific paper longer"
            },
            {
              "id": "b",
              "text": "It improves the robustness of a conclusion through convergence"
            },
            {
              "id": "c",
              "text": "It completely removes all uncertainty"
            },
            {
              "id": "d",
              "text": "It allows you to avoid using a control group"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When independent methods point to the same conclusion (convergence), it greatly increases confidence that the finding is real and not an artifact of one method."
        },
        {
          "id": "science-301-l06-q2",
          "text": "Making a prediction with a model far outside its validated conditions (extrapolation) should be:",
          "skillId": "interpret-models",
          "options": [
            {
              "id": "a",
              "text": "Treated as a certainty"
            },
            {
              "id": "b",
              "text": "Reported with caution and explicitly stated uncertainty"
            },
            {
              "id": "c",
              "text": "Hidden from the discussion to avoid confusion"
            },
            {
              "id": "d",
              "text": "Considered more reliable than data from within the validated range"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A model's predictive reliability decreases significantly outside the range where it has been tested against real data."
        },
        {
          "id": "science-301-l06-q3",
          "text": "The most reliable and honest scientific claims are typically:",
          "skillId": "construct-arguments",
          "options": [
            {
              "id": "a",
              "text": "Stated in absolute, unconditional language"
            },
            {
              "id": "b",
              "text": "Calibrated to the evidence, acknowledging assumptions and limits"
            },
            {
              "id": "c",
              "text": "Independent of the quality of the measurements"
            },
            {
              "id": "d",
              "text": "Driven by anecdotes rather than data"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Good scientific communication aligns the confidence of a claim with the strength of the supporting evidence and is transparent about limitations."
        },
        {
          "id": "science-301-l06-q4",
          "text": "In multivariable studies, why is a confounding variable a problem?",
          "skillId": "design-experiments",
          "options": [
            {
              "id": "a",
              "text": "It improves the certainty of the causal link"
            },
            {
              "id": "b",
              "text": "It creates ambiguity about what is causing the observed effect"
            },
            {
              "id": "c",
              "text": "It eliminates all interaction effects between variables"
            },
            {
              "id": "d",
              "text": "It guarantees the experiment will be reproducible"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Confounders make it difficult or impossible to tell if the variable you are testing or the confounding variable is responsible for the outcome."
        }
      ]
    },
    {
      "id": "science-301-l07",
      "title": "Capstone Project: Interdisciplinary System Investigation",
      "type": "project",
      "duration": 45,
      "learningAids": [
        {
          "id": "science-301-l07-a1",
          "type": "project_brief",
          "title": "Project Brief",
          "content": "Detailed instructions, a list of suggested systems for investigation, and submission guidelines."
        },
        {
          "id": "science-301-l07-a2",
          "type": "rubric",
          "title": "Grading Rubric",
          "content": "A clear rubric outlining how the project will be assessed, focusing on system analysis, experimental design, evidence synthesis, and claim calibration."
        }
      ],
      "chunks": [
        {
          "id": "science-301-l07-c1",
          "kind": "concept",
          "title": "Your Mission: Become a Systems Analyst",
          "content": "It's time to put all your new skills together. Your mission is to choose a complex real-world system and analyze it from start to finish. You will act as a scientist tasked with investigating the system, proposing an experiment, evaluating evidence, and presenting a final, well-supported conclusion. This project will challenge you to think critically and apply the concepts from this module to a topic that interests you.",
          "visualPrompt": "A montage of images showing different complex systems: a coral reef, a bustling city intersection, the spread of a viral video online, a weather system on a map."
        },
        {
          "id": "science-301-l07-c2",
          "kind": "practice",
          "title": "Project Steps",
          "content": "1. **Select & Define:** Choose a system and clearly define its boundaries and key components.\n2. **Analyze:** Identify at least one major positive or negative feedback loop that drives its behavior.\n3. **Design:** Propose a hypothetical multivariable experiment to test a hypothesis about the system. Identify potential confounders.\n4. **Synthesize:** Research and gather at least three different types of evidence about your system (e.g., from a news article, a scientific study, a dataset).\n5. **Conclude:** Construct a final, calibrated claim about your system, supported by your synthesized evidence and acknowledging key uncertainties.",
          "visualPrompt": "A series of five icons in a row, each representing a step: a magnifying glass (Select), a gear diagram (Analyze), a beaker (Design), a funnel (Synthesize), and a lightbulb with a checkmark (Conclude)."
        },
        {
          "id": "science-301-l07-c3",
          "kind": "recap",
          "title": "Deliverable: Investigation Report",
          "content": "You will summarize your findings in a short investigation report or a 5-minute presentation. The goal is to clearly communicate your analysis and conclusions, demonstrating your mastery of systems thinking, experimental design, and evidence-based reasoning. Be prepared to defend your claims and explain the limitations of your analysis.",
          "visualPrompt": "An image of a professional-looking report cover or a slide from a presentation, showing clear headings that match the project steps."
        }
      ],
      "flashcards": []
    }
  ]
};
