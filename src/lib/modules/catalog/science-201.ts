import type { LearningModule } from "@/lib/modules/types";

export const science_201_Module: LearningModule = {
  "id": "science-201",
  "title": "Scientific Reasoning and Applied Inquiry II",
  "description": "Intermediate science curriculum on hypothesis testing, measurement quality, experimental controls, and evidence-based explanation across physical, life, and Earth systems.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "inquiry",
    "lab"
  ],
  "minAge": 10,
  "maxAge": 15,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Formulate testable scientific questions and hypotheses",
    "Design fair tests using variables, controls, and repeatability principles",
    "Interpret tables, graphs, and trends with attention to measurement quality",
    "Distinguish correlation from causation in scientific claims",
    "Evaluate reliability of evidence sources and experimental methods",
    "Communicate scientific conclusions with uncertainty-aware language"
  ],
  "lessons": [
    {
      "id": "science-201-l01",
      "title": "Asking Scientific Questions",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-201-l01-a1",
          "type": "practice",
          "title": "Question Shaper",
          "content": "Take a broad question like 'Why do plants grow?' and refine it into a specific, testable question with clear variables."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l01-c1",
          "kind": "concept",
          "title": "From Curiosity to a Testable Question",
          "content": "Science begins with wondering about the world. A good scientific question is one you can answer through investigation. We turn a broad 'I wonder...' into a specific, measurable question like 'Does the amount of sunlight a plant gets affect how tall it grows?'",
          "visualPrompt": "Animation showing a thought bubble with 'Why do plants grow?' transforming into a focused question next to a diagram of a plant, a sun, and a ruler."
        },
        {
          "id": "science-201-l01-c2",
          "kind": "concept",
          "title": "What is a Hypothesis?",
          "content": "A hypothesis is not just a guess; it's a clear, testable prediction about what you think will happen. It's often written as an 'If... then...' statement. For example, 'If a plant gets more sunlight, then it will grow taller.' A strong hypothesis is based on some observation or prior knowledge.",
          "visualPrompt": "A split screen showing a student observing a tall plant in a sunny window (observation) and then writing 'If... then...' on a notepad (hypothesis)."
        },
        {
          "id": "science-201-l01-c3",
          "kind": "concept",
          "title": "Identifying Your Variables",
          "content": "To test a hypothesis, you need to understand your variables. The independent variable is the one thing you intentionally change. The dependent variable is what you measure to see the effect. Control variables are everything else you must keep the same to ensure a fair test.",
          "visualPrompt": "A simple diagram of an experiment with three plants. The 'Amount of Light' is labeled 'Independent Variable', the 'Plant Height' is labeled 'Dependent Variable', and 'Water, Soil, Pot Size' are labeled 'Control Variables'."
        }
      ],
      "flashcards": [
        {
          "id": "science-201-l01-f1",
          "front": "Independent Variable",
          "back": "The one factor a scientist changes on purpose."
        },
        {
          "id": "science-201-l01-f2",
          "front": "Dependent Variable",
          "back": "The factor that is measured or observed to see if it was affected by the change."
        },
        {
          "id": "science-201-l01-f3",
          "front": "Control Variable",
          "back": "Factors that are kept the same to make sure the test is fair."
        }
      ]
    },
    {
      "id": "science-201-l02",
      "title": "Designing a Fair Test",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Design a simple experiment to test a hypothesis, identifying all three types of variables and listing the steps in your procedure."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l02-c1",
          "kind": "concept",
          "title": "The Importance of a Control Group",
          "content": "A control group is a version of your experiment where the independent variable is not changed. This gives you a baseline to compare your results against. Without a control group, you can't be sure if the changes you see are because of your independent variable or something else.",
          "visualPrompt": "Side-by-side comparison: One plant receiving extra fertilizer (experimental group) and one plant receiving none (control group), showing the difference in growth."
        },
        {
          "id": "science-201-l02-c2",
          "kind": "concept",
          "title": "Repeatability: Why Multiple Trials Matter",
          "content": "Doing an experiment just once isn't enough. Scientists conduct multiple trials to make sure their results are reliable and not just a fluke. Averaging the results from several trials gives a more accurate picture of what's really happening.",
          "visualPrompt": "An animation showing a paper airplane being thrown once and landing short, then thrown three more times with the average distance being calculated and marked."
        },
        {
          "id": "science-201-l02-c3",
          "kind": "practice",
          "title": "Keeping Accurate Records",
          "content": "A key part of any experiment is carefully recording your procedure and observations. This includes writing down every step, using consistent units of measurement (like centimeters or grams), and organizing your data in a table. Good records allow others to repeat your experiment and verify your findings.",
          "visualPrompt": "A shot of a neat lab notebook with a clearly labeled data table, including columns for trial number, measurements, and notes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-201-l02-act1",
          "type": "matching_pairs",
          "title": "Good Science Match-Up",
          "description": "Match the scientific practice to the reason it's important.",
          "pairs": [
            {
              "left": "Running multiple trials",
              "right": "Minimizes the effect of random chance"
            },
            {
              "left": "Using a control group",
              "right": "Provides a baseline for comparison"
            },
            {
              "left": "Using a calibrated thermometer",
              "right": "Prevents consistent measurement mistakes"
            },
            {
              "left": "Writing a detailed procedure",
              "right": "Allows others to repeat your experiment"
            }
          ]
        },
        {
          "id": "science-201-l02-act2",
          "type": "scenario_practice",
          "title": "Fix the Flawed Experiment",
          "description": "Read about a flawed experiment and suggest improvements.",
          "instructions": [
            "What is one factor that wasn't controlled?",
            "How could you improve the experiment to make it a fairer test?"
          ]
        }
      ]
    },
    {
      "id": "science-201-l03",
      "title": "Checkpoint 1: Inquiry and Experimental Method",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "science-201-l03-q1",
          "text": "In an experiment testing how the color of a shirt affects how hot it gets in the sun, what is the dependent variable?",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "The color of the shirt"
            },
            {
              "id": "b",
              "text": "The temperature of the shirt"
            },
            {
              "id": "c",
              "text": "The amount of time in the sun"
            },
            {
              "id": "d",
              "text": "The type of fabric"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The dependent variable is what you measure. In this case, you are measuring the temperature to see the effect of the color change."
        },
        {
          "id": "science-201-l03-q2",
          "text": "Which of the following is the most testable hypothesis?",
          "skillId": "science-201-skill-hypothesis",
          "options": [
            {
              "id": "a",
              "text": "Plants are beautiful."
            },
            {
              "id": "b",
              "text": "If I add salt to water, then the water will freeze at a lower temperature."
            },
            {
              "id": "c",
              "text": "Dogs are better than cats."
            },
            {
              "id": "d",
              "text": "Studying more is good for you."
            }
          ],
          "correctOptionId": "b",
          "explanation": "A testable hypothesis must be specific and allow for measurable outcomes. You can measure the freezing temperature of water with and without salt."
        },
        {
          "id": "science-201-l03-q3",
          "text": "What is the main benefit of repeating an experiment multiple times?",
          "skillId": "science-201-skill-data",
          "options": [
            {
              "id": "a",
              "text": "It makes the experiment take longer."
            },
            {
              "id": "b",
              "text": "It increases confidence that the results are reliable."
            },
            {
              "id": "c",
              "text": "It guarantees you will prove your hypothesis."
            },
            {
              "id": "d",
              "text": "It eliminates the need for a control group."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Multiple trials help ensure your results aren't a one-time accident or fluke, which improves the reliability of your findings."
        },
        {
          "id": "science-201-l03-q4",
          "text": "Why is it important to only change one variable at a time in an experiment?",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "It's not important."
            },
            {
              "id": "b",
              "text": "So you know for sure that the one thing you changed is what caused the results."
            },
            {
              "id": "c",
              "text": "Because it is too difficult to change more than one thing."
            },
            {
              "id": "d",
              "text": "To make the experiment finish faster."
            }
          ],
          "correctOptionId": "b",
          "explanation": "If you change multiple variables, you won't know which one was responsible for the outcome. Isolating one variable allows you to determine cause and effect."
        }
      ]
    },
    {
      "id": "science-201-l04",
      "title": "Analyzing Data and Spotting Trends",
      "type": "video",
      "duration": 13,
      "learningAids": [
        {
          "id": "science-201-l04-a1",
          "type": "practice",
          "title": "Graphing Challenge",
          "content": "Given a sample data set, choose the best type of graph (bar, line, or pie) to display it and explain your choice."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l04-c1",
          "kind": "concept",
          "title": "Choosing the Right Graph",
          "content": "Once you have your data, you need to show what it means. Different graphs tell different stories. Bar graphs are great for comparing categories, while line graphs are perfect for showing how something changes over time. Choosing the right graph helps people understand your results quickly.",
          "visualPrompt": "An animation showing a data table, then showing the data being plotted incorrectly as a pie chart (with a red X) and then correctly as a line graph (with a green checkmark)."
        },
        {
          "id": "science-201-l04-c2",
          "kind": "concept",
          "title": "Finding Patterns vs. Random Noise",
          "content": "When you look at a graph, you're searching for a trend or pattern. Does the line generally go up or down? Are some bars consistently taller than others? It's important to distinguish a real pattern from random, meaningless ups and downs, which we call 'noise'.",
          "visualPrompt": "A line graph with points scattered randomly (labeled 'Noise') that morphs into a graph where the points clearly trend upwards (labeled 'Pattern')."
        },
        {
          "id": "science-201-l04-c3",
          "kind": "concept",
          "title": "Understanding Uncertainty and Outliers",
          "content": "No measurement is perfect. There's always a small amount of uncertainty. Sometimes you'll also see an outlier—a data point that is way off from the others. It's important to notice these and think about whether it was a simple mistake or something scientifically interesting.",
          "visualPrompt": "A scatter plot graph showing a clear trend line, with one data point far away from the line, circled and labeled 'Outlier'."
        }
      ],
      "flashcards": [
        {
          "id": "science-201-l04-f1",
          "front": "Trend",
          "back": "The general direction or pattern in a set of data."
        },
        {
          "id": "science-201-l04-f2",
          "front": "Outlier",
          "back": "A data point that is very different from the other points in a set."
        },
        {
          "id": "science-201-l04-f3",
          "front": "Line Graph",
          "back": "A type of graph used to show how data changes over time."
        }
      ]
    },
    {
      "id": "science-201-l05",
      "title": "Correlation vs. Causation",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "science-201-l05-a1",
          "type": "practice",
          "title": "Headline Check",
          "content": "Analyze a news headline that claims one thing causes another. Is it really causation, or just a correlation? Explain your reasoning."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l05-c1",
          "kind": "concept",
          "title": "When Two Things Trend Together",
          "content": "Correlation is when two things seem to be related or follow the same pattern. For example, as ice cream sales go up, so do the number of shark attacks. This is a correlation. But does eating ice cream cause shark attacks?",
          "visualPrompt": "A humorous animation showing a person eating ice cream at the beach, and a shark fin appearing. A large question mark connects them."
        },
        {
          "id": "science-201-l05-c2",
          "kind": "concept",
          "title": "Proving One Thing Causes Another",
          "content": "Causation is when a change in one variable directly causes a change in another. To prove causation, you need a controlled experiment. In our example, the real cause is a third factor: hot weather. Hot weather makes more people buy ice cream AND makes more people swim in the ocean. Ice cream sales and shark attacks are correlated, but the heat is the cause.",
          "visualPrompt": "A diagram with 'Hot Weather' at the top, with two arrows pointing down. One arrow points to 'More Ice Cream Sales' and the other points to 'More People Swimming'."
        }
      ],
      "interactiveActivities": [
        {
          "id": "science-201-l05-act1",
          "type": "sorting_buckets",
          "title": "Correlation or Causation?",
          "description": "Sort these real-world examples into the correct bucket.",
          "buckets": [
            "Correlation (Just a connection)",
            "Causation (One causes the other)"
          ],
          "items": [
            {
              "text": "As the number of firefighters at a fire increases, the amount of damage increases.",
              "bucket": "Correlation (Just a connection)"
            },
            {
              "text": "If you spend more time running on a treadmill, you will burn more calories.",
              "bucket": "Causation (One causes the other)"
            },
            {
              "text": "Students who have tutors tend to get higher grades.",
              "bucket": "Correlation (Just a connection)"
            },
            {
              "text": "If you leave a glass of water in the freezer, it will turn into ice.",
              "bucket": "Causation (One causes the other)"
            }
          ]
        },
        {
          "id": "science-201-l05-act2",
          "type": "scenario_practice",
          "title": "Science in the News",
          "description": "Evaluate a science headline and rate the evidence.",
          "instructions": [
            "What other information would you need to believe this claim?",
            "What is a possible 'third factor' that could explain this connection?"
          ]
        }
      ]
    },
    {
      "id": "science-201-l06",
      "title": "Communicating Scientific Findings",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "science-201-l06-a1",
          "type": "practice",
          "title": "Write a Conclusion",
          "content": "Read the results of a sample experiment and write a short conclusion using the Claim, Evidence, Reasoning framework."
        }
      ],
      "chunks": [
        {
          "id": "science-201-l06-c1",
          "kind": "concept",
          "title": "Claim, Evidence, Reasoning (CER)",
          "content": "A strong scientific conclusion has three parts. The Claim is a one-sentence answer to your question. The Evidence is the data from your experiment that supports your claim. The Reasoning explains how your evidence proves your claim, often using scientific principles.",
          "visualPrompt": "An animated graphic showing three building blocks labeled 'Claim', 'Evidence', and 'Reasoning' stacking on top of each other to form a solid conclusion."
        },
        {
          "id": "science-201-l06-c2",
          "kind": "concept",
          "title": "Acknowledging Limitations and Errors",
          "content": "Good scientists are honest about their work. In your conclusion, it's important to mention any possible sources of error or limitations. Maybe your measurements weren't perfectly precise, or maybe your experiment only worked for one type of plant. This shows you've thought critically about your results.",
          "visualPrompt": "A magnifying glass icon appearing over a lab report, highlighting a section titled 'Possible Errors'."
        },
        {
          "id": "science-201-l06-c3",
          "kind": "recap",
          "title": "Suggesting Next Steps",
          "content": "Science never really ends! A good experiment often leads to more questions. Finishing your conclusion by suggesting a 'next step' or a new question to investigate shows that you understand that science is a cycle of discovery.",
          "visualPrompt": "An arrow looping from the end of an experiment back to a new question mark, showing the cyclical nature of science."
        }
      ],
      "flashcards": [
        {
          "id": "science-201-l06-f1",
          "front": "Claim",
          "back": "A statement that answers the original scientific question."
        },
        {
          "id": "science-201-l06-f2",
          "front": "Evidence",
          "back": "Scientific data (numbers, observations) that supports the claim."
        },
        {
          "id": "science-201-l06-f3",
          "front": "Reasoning",
          "back": "The explanation that connects the evidence to the claim."
        }
      ]
    },
    {
      "id": "science-201-l07",
      "title": "Checkpoint 2: Data, Evidence, and Communication",
      "type": "quiz",
      "duration": 10,
      "learningAids": [],
      "questions": [
        {
          "id": "science-201-l07-q1",
          "text": "A scientist notices that on days it rains, more worms are on the sidewalk. This is an example of:",
          "skillId": "science-201-skill-claims",
          "options": [
            {
              "id": "a",
              "text": "A controlled experiment"
            },
            {
              "id": "b",
              "text": "A correlation"
            },
            {
              "id": "c",
              "text": "A causation"
            },
            {
              "id": "d",
              "text": "A hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "This is an observation of two things happening together (a correlation). Without a controlled experiment, we can't be certain the rain causes the worms to appear."
        },
        {
          "id": "science-201-l07-q2",
          "text": "Which part of a conclusion explains *why* the data supports the claim?",
          "skillId": "science-201-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "The Claim"
            },
            {
              "id": "b",
              "text": "The Evidence"
            },
            {
              "id": "c",
              "text": "The Reasoning"
            },
            {
              "id": "d",
              "text": "The Next Step"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Reasoning acts as the bridge, explaining the scientific principles that connect the evidence you collected to the claim you are making."
        },
        {
          "id": "science-201-l07-q3",
          "text": "A result is considered reproducible if:",
          "skillId": "science-201-skill-method",
          "options": [
            {
              "id": "a",
              "text": "It was published in a magazine"
            },
            {
              "id": "b",
              "text": "Other scientists can follow your procedure and get similar results"
            },
            {
              "id": "c",
              "text": "It has no outliers"
            },
            {
              "id": "d",
              "text": "It perfectly matches the hypothesis"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Reproducibility is a cornerstone of science. It means that the findings are reliable because independent researchers can verify them."
        },
        {
          "id": "science-201-l07-q4",
          "text": "The most responsible way to state a scientific conclusion is:",
          "skillId": "science-201-skill-communication",
          "options": [
            {
              "id": "a",
              "text": "With absolute certainty, stating it as a proven fact."
            },
            {
              "id": "b",
              "text": "Based on the evidence, while acknowledging any limitations or uncertainty."
            },
            {
              "id": "c",
              "text": "By ignoring any data that disagrees with your hypothesis."
            },
            {
              "id": "d",
              "text": "Based on a single personal story."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Responsible scientific communication is precise. It aligns its confidence with the strength of the evidence and is honest about what is still unknown."
        }
      ]
    }
  ]
};
