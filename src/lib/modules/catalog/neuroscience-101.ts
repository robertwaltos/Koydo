import type { LearningModule } from "@/lib/modules/types";

export const neuroscience_101_Module: LearningModule = {
  "id": "neuroscience-101",
  "title": "Neuroscience Foundations",
  "description": "An introductory curriculum in Neuroscience, exploring how brain cells communicate, how we think and learn, the methods scientists use for discovery, and how research can help people. This course uses interactive scenarios and assessments to build a strong foundation.",
  "subject": "Neuroscience",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "biology",
    "cognition"
  ],
  "minAge": 14,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "learningObjectives": [
    "Explain how neurons communicate using basic electrical and chemical signals.",
    "Describe the relationship between neural activity and cognitive functions like memory and attention.",
    "Evaluate the pros and cons of common experimental methods in neuroscience.",
    "Analyze a simple clinical case study and weigh the tradeoffs of different interventions.",
    "Discuss the ethical considerations involved in neuroscience research.",
    "Synthesize core concepts to plan a basic neuroscience research project."
  ],
  "lessons": [
    {
      "id": "neuroscience-101-l01",
      "title": "The Brain's Building Blocks",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-101-l01-a1",
          "type": "image",
          "title": "Anatomy of a Neuron",
          "content": "A labeled diagram showing the main parts of a neuron: dendrite, soma (cell body), axon, and synapse."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l01-c1",
          "kind": "concept",
          "title": "Meet the Neuron",
          "content": "Welcome to the exciting world of neuroscience! In this first lesson, we'll learn the basic vocabulary to talk about the brain. We'll start with the neuron, the brain's main cell, and understand its different parts. We'll also define the scope of our study, focusing on how individual neurons and small groups of them work together to create thoughts and actions."
        },
        {
          "id": "neuroscience-101-l01-c2",
          "kind": "concept",
          "title": "How Neurons Talk: Neural Signaling",
          "content": "Neurons communicate using a fascinating process of electrical and chemical signals. We'll trace the path of a signal, called an action potential, as it travels down a neuron and triggers the release of chemical messengers called neurotransmitters at the synapse. Understanding this process is key to understanding everything else in the brain."
        },
        {
          "id": "neuroscience-101-l01-c3",
          "kind": "recap",
          "title": "Core Concepts Review",
          "content": "Let's review what we've learned. The brain is made of billions of neurons that communicate at synapses using neural signals. This communication is the foundation for all cognitive systems—how we think, feel, and act. In this course, we will always base our claims on observable evidence."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-101-l01-f1",
          "front": "Neural Signaling",
          "back": "The process of communication between neurons through electrical and chemical signals."
        },
        {
          "id": "neuroscience-101-l01-f2",
          "front": "Cognitive Systems",
          "back": "The mental processes that allow us to think, learn, remember, and perceive the world around us."
        },
        {
          "id": "neuroscience-101-l01-f3",
          "front": "Synapse",
          "back": "The tiny gap between two neurons where chemical signals are passed from one to the other."
        }
      ]
    },
    {
      "id": "neuroscience-101-l02",
      "title": "How We Study the Brain",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-101-l02-a1",
          "type": "diagram",
          "title": "The Scientific Method",
          "content": "A flowchart illustrating the steps of the scientific method: Observation, Question, Hypothesis, Experiment, Analysis, and Conclusion."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l02-c1",
          "kind": "practice",
          "title": "Designing an Experiment",
          "content": "In this interactive lab, you'll learn about the methods neuroscientists use to study the brain. We'll walk through how to form a hypothesis, choose the right tools (like fMRI or EEG), and set up an experiment to test your ideas. You'll practice creating a step-by-step plan to investigate a simple question about the brain."
        },
        {
          "id": "neuroscience-101-l02-c2",
          "kind": "recap",
          "title": "Being a Good Scientist",
          "content": "A good experiment needs careful planning. In this recap, we'll review the importance of having clear checkpoints to monitor progress, comparing results to a baseline or control group, and keeping detailed logs of our evidence. These steps ensure our findings are reliable and that others can build on our work."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-101-l02-act1",
          "type": "matching_pairs",
          "title": "Connecting Tools to Questions",
          "description": "Match each scientific question to the best experimental tool.",
          "pairs": [
            {
              "left": "Which brain area is active when you see a face?",
              "right": "fMRI (functional Magnetic Resonance Imaging)"
            },
            {
              "left": "How fast does the brain react to a sudden sound?",
              "right": "EEG (Electroencephalography)"
            },
            {
              "left": "What is the shape of a single neuron?",
              "right": "Microscopy"
            },
            {
              "left": "How does a specific gene affect behavior in mice?",
              "right": "Animal model studies"
            }
          ]
        },
        {
          "id": "neuroscience-101-l02-act2",
          "type": "sorting_buckets",
          "title": "Types of Variables",
          "description": "Sort the items into the correct experimental variable category.",
          "buckets": [
            "Independent Variable (What you change)",
            "Dependent Variable (What you measure)",
            "Control Variable (What you keep the same)"
          ],
          "items": [
            {
              "text": "Amount of caffeine given to subjects",
              "bucket": "Independent Variable (What you change)"
            },
            {
              "text": "Reaction time on a memory test",
              "bucket": "Dependent Variable (What you measure)"
            },
            {
              "text": "The time of day the experiment is run",
              "bucket": "Control Variable (What you keep the same)"
            },
            {
              "text": "The brightness of the computer screen",
              "bucket": "Control Variable (What you keep the same)"
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-101-l03",
      "title": "Checkpoint 1: Core Concepts & Methods",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-101-l03-a1",
          "type": "image",
          "title": "Check Your Understanding",
          "content": "A graphic with a question mark, encouraging students to review the previous lessons before starting the quiz."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-101-l03-q1",
          "text": "What is the primary way neurons communicate with each other?",
          "skillId": "neuroscience-101-skill-signaling",
          "options": [
            {
              "id": "a",
              "text": "Through direct physical contact"
            },
            {
              "id": "b",
              "text": "By sending chemical signals across a synapse"
            },
            {
              "id": "c",
              "text": "Through the bloodstream"
            },
            {
              "id": "d",
              "text": "By vibrating at different frequencies"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Neurons send chemical messengers, called neurotransmitters, across a tiny gap called a synapse to transmit information."
        },
        {
          "id": "neuroscience-101-l03-q2",
          "text": "An introductory neuroscience experiment should first focus on:",
          "skillId": "neuroscience-101-skill-level",
          "options": [
            {
              "id": "a",
              "text": "Understanding the basic terms, key processes, and establishing a baseline for comparison."
            },
            {
              "id": "b",
              "text": "Getting results as fast as possible, even if the process isn't documented."
            },
            {
              "id": "c",
              "text": "Solving a major, unsolved mystery in the field."
            },
            {
              "id": "d",
              "text": "Focusing on only one measurement without considering the context."
            }
          ],
          "correctOptionId": "a",
          "explanation": "A strong foundation requires understanding the vocabulary, core mechanisms, and what a 'normal' or baseline state looks like."
        },
        {
          "id": "neuroscience-101-l03-q3",
          "text": "What is a key sign of a well-designed experiment?",
          "skillId": "neuroscience-101-skill-ops",
          "options": [
            {
              "id": "a",
              "text": "Making changes to the experiment halfway through without noting them."
            },
            {
              "id": "b",
              "text": "Having clear procedures, measurable results, and a control group."
            },
            {
              "id": "c",
              "text": "Skipping the analysis of unexpected results."
            },
            {
              "id": "d",
              "text": "Changing your hypothesis to fit the results you found."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Good science requires clear procedures, measurable outcomes, and controls to ensure the results are reliable."
        },
        {
          "id": "neuroscience-101-l03-q4",
          "text": "When evaluating the results of an experiment, which approach is most scientific?",
          "skillId": "neuroscience-101-skill-eval",
          "options": [
            {
              "id": "a",
              "text": "Using only personal stories as evidence."
            },
            {
              "id": "b",
              "text": "Comparing results against a baseline and analyzing why some trials failed."
            },
            {
              "id": "c",
              "text": "Throwing out data that doesn't support the hypothesis."
            },
            {
              "id": "d",
              "text": "Ignoring results that are slow to appear."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Comparing to a baseline and analyzing failures provides a complete and unbiased picture of the experiment's outcome."
        },
        {
          "id": "neuroscience-101-l03-q5",
          "text": "If a scientist wants to see which parts of the brain are most active during a memory task, which tool would be most appropriate?",
          "skillId": "neuroscience-101-skill-methods",
          "options": [
            {
              "id": "a",
              "text": "A stethoscope"
            },
            {
              "id": "b",
              "text": "An fMRI machine"
            },
            {
              "id": "c",
              "text": "A simple microscope"
            },
            {
              "id": "d",
              "text": "A ruler"
            }
          ],
          "correctOptionId": "b",
          "explanation": "fMRI (functional Magnetic Resonance Imaging) measures blood flow in the brain, which is an indicator of neural activity."
        }
      ]
    },
    {
      "id": "neuroscience-101-l04",
      "title": "Neuroscience in Action: A Case Study",
      "type": "video",
      "duration": 14,
      "learningAids": [
        {
          "id": "neuroscience-101-l04-a1",
          "type": "image",
          "title": "Patient's Brain Scan",
          "content": "An example fMRI scan showing areas of high and low activity, used to illustrate the case study."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l04-c1",
          "kind": "example",
          "title": "A Patient's Story",
          "content": "In this case study, we'll look at a fictional patient experiencing memory problems. We will examine their symptoms, look at brain scan data, and explore how these issues might connect to specific neural circuits. Your job will be to act like a scientist, carefully separating the hard evidence from any assumptions."
        },
        {
          "id": "neuroscience-101-l04-c2",
          "kind": "concept",
          "title": "Weighing the Treatment Options",
          "content": "For our patient, there are several possible treatments, from medication to therapy. We'll use a 'decision tradeoff matrix'—a simple chart to compare the pros and cons of each option. We'll score each choice based on factors like effectiveness, potential side effects, and cost. This helps us make a well-reasoned recommendation."
        },
        {
          "id": "neuroscience-101-l04-c3",
          "kind": "recap",
          "title": "Learning from Mistakes",
          "content": "In science and medicine, things don't always go as planned. We'll look at common 'failure modes,' or reasons why a treatment might not work. By analyzing these patterns, we can learn from them and design better, safer strategies for the future. This helps turn a single mistake into a valuable lesson."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-101-l04-f1",
          "front": "Tradeoff Matrix",
          "back": "A chart used to compare different options by weighing their pros and cons across several criteria."
        },
        {
          "id": "neuroscience-101-l04-f2",
          "front": "Failure Mode",
          "back": "A specific way in which a system, process, or treatment can fail to perform its intended function."
        },
        {
          "id": "neuroscience-101-l04-f3",
          "front": "Clinical Translation",
          "back": "The process of applying discoveries from basic science research to help patients in a clinical setting."
        }
      ]
    },
    {
      "id": "neuroscience-101-l05",
      "title": "Brain Simulation Lab",
      "type": "interactive",
      "duration": 16,
      "learningAids": [
        {
          "id": "neuroscience-101-l05-a1",
          "type": "image",
          "title": "Simulation Interface",
          "content": "A screenshot of a simple, interactive brain simulation, showing neurons firing and connections being made."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l05-c1",
          "kind": "practice",
          "title": "Building a Virtual Brain Circuit",
          "content": "Welcome to the Simulation Lab! Here, you'll use a simple model to see how neural circuits work. You'll be able to change variables, like the strength of a connection between neurons, and see the outcome. This lets you test hypotheses about how the brain works in a safe, controlled digital environment."
        },
        {
          "id": "neuroscience-101-l05-c2",
          "kind": "recap",
          "title": "Reviewing Your Results",
          "content": "After each simulation, we'll pause to review the results. Did the outcome match your prediction? What does the data tell you? This 'decision review loop' helps us learn from the simulation and decide what to test next. It's a key part of how scientists refine their understanding."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-101-l05-act1",
          "type": "scenario_practice",
          "title": "Testing Treatment Strategies",
          "description": "In the simulation, apply three different 'treatments' to a malfunctioning neural circuit and justify which one works best.",
          "instructions": [
            "First, define what a 'successful' outcome looks like for your circuit.",
            "Apply each of the three simulated interventions and record the results.",
            "Choose the best intervention and explain the tradeoffs (e.g., it worked well but had a side effect)."
          ]
        },
        {
          "id": "neuroscience-101-l05-act2",
          "type": "matching_pairs",
          "title": "Problem and Solution",
          "description": "Match each problem that can occur in a system with the best way to fix it.",
          "pairs": [
            {
              "left": "A signal is too weak to reach the next neuron.",
              "right": "Increase the strength of the synaptic connection."
            },
            {
              "left": "The experimental results are unclear or confusing.",
              "right": "Redefine the rules and run the experiment again."
            },
            {
              "left": "The measurements keep changing unexpectedly.",
              "right": "Check the baseline and monitor for what's causing the change."
            },
            {
              "left": "People are losing trust in the results.",
              "right": "Be more transparent and explain how you're fixing errors."
            }
          ]
        }
      ]
    },
    {
      "id": "neuroscience-101-l06",
      "title": "Checkpoint 2: Application & Decisions",
      "type": "quiz",
      "duration": 10,
      "learningAids": [
        {
          "id": "neuroscience-101-l06-a1",
          "type": "image",
          "title": "Apply Your Knowledge",
          "content": "A graphic showing a brain with gears turning, symbolizing the application of knowledge from the case study and simulation labs."
        }
      ],
      "questions": [
        {
          "id": "neuroscience-101-l06-q1",
          "text": "When analyzing a patient case study, what is the most important first step?",
          "skillId": "neuroscience-101-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Guessing the best treatment immediately."
            },
            {
              "id": "b",
              "text": "Focusing only on the positive signs."
            },
            {
              "id": "c",
              "text": "Carefully separating factual evidence (like symptoms or test results) from assumptions."
            },
            {
              "id": "d",
              "text": "Choosing the cheapest treatment option."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Good scientific and clinical practice starts with a clear understanding of the known facts before making interpretations or decisions."
        },
        {
          "id": "neuroscience-101-l06-q2",
          "text": "A 'decision tradeoff matrix' is a tool used to:",
          "skillId": "neuroscience-101-skill-decision",
          "options": [
            {
              "id": "a",
              "text": "Create complex brain simulations."
            },
            {
              "id": "b",
              "text": "Systematically compare different options based on multiple factors, like benefits and risks."
            },
            {
              "id": "c",
              "text": "Measure the speed of a neural signal."
            },
            {
              "id": "d",
              "text": "Document the history of neuroscience."
            }
          ],
          "correctOptionId": "b",
          "explanation": "This tool helps organize complex decisions by allowing a clear comparison of the pros and cons of each choice."
        },
        {
          "id": "neuroscience-101-l06-q3",
          "text": "What is a primary benefit of using simulations in neuroscience research?",
          "skillId": "neuroscience-101-skill-simulation",
          "options": [
            {
              "id": "a",
              "text": "They are always a perfect representation of a real brain."
            },
            {
              "id": "b",
              "text": "They allow scientists to test ideas and interventions in a safe, controlled environment without risk to a real person."
            },
            {
              "id": "c",
              "text": "They provide faster results than any other method."
            },
            {
              "id": "d",
              "text": "They don't require any data to set up."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Simulations provide a safe and ethical way to explore 'what if' scenarios that would be impossible or dangerous to test in real life."
        },
        {
          "id": "neuroscience-101-l06-q4",
          "text": "Why is it important for scientists to study 'failure modes' or mistakes?",
          "skillId": "neuroscience-101-skill-failure",
          "options": [
            {
              "id": "a",
              "text": "To blame the person who made the mistake."
            },
            {
              "id": "b",
              "text": "It is not important; scientists should only focus on successes."
            },
            {
              "id": "c",
              "text": "To understand why something went wrong and design better, safer systems in the future."
            },
            {
              "id": "d",
              "text": "To prove that the original idea was completely wrong."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Analyzing failures is a powerful learning tool that leads to improved designs and prevents the same mistakes from happening again."
        },
        {
          "id": "neuroscience-101-l06-q5",
          "text": "The process of taking a discovery from a research lab and using it to develop a new treatment for patients is called:",
          "skillId": "neuroscience-101-skill-governance",
          "options": [
            {
              "id": "a",
              "text": "Hypothesis Generation"
            },
            {
              "id": "b",
              "text": "Clinical Translation"
            },
            {
              "id": "c",
              "text": "Peer Review"
            },
            {
              "id": "d",
              "text": "Data Simulation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Clinical translation is the bridge between basic science and practical applications that can improve human health."
        }
      ]
    },
    {
      "id": "neuroscience-101-l07",
      "title": "Neuroscience, Ethics, and Society",
      "type": "video",
      "duration": 12,
      "learningAids": [
        {
          "id": "neuroscience-101-l07-a1",
          "type": "diagram",
          "title": "Ethical Pillars of Research",
          "content": "An infographic showing key ethical principles: Informed Consent, Beneficence (Do Good), Non-maleficence (Do No Harm), and Justice."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l07-c1",
          "kind": "concept",
          "title": "Who is Affected?",
          "content": "Neuroscience doesn't happen in a vacuum. Its discoveries can affect many people, from patients and their families to society as a whole. In this lesson, we'll analyze the 'stakeholders'—the different groups of people involved. We'll discuss who benefits from new technologies, who might be at risk, and how we can make fair decisions."
        },
        {
          "id": "neuroscience-101-l07-c2",
          "kind": "concept",
          "title": "Rules and Responsibility",
          "content": "With great knowledge comes great responsibility. We'll explore the rules and ethical guidelines that keep neuroscience research safe and fair. This includes the concept of 'informed consent' (where participants must agree to be in a study) and the importance of being transparent about our work and accountable for the outcomes."
        },
        {
          "id": "neuroscience-101-l07-c3",
          "kind": "recap",
          "title": "A Checklist for Responsible Science",
          "content": "Before starting any new project, it's important to pause and think. We'll introduce a simple checklist to guide responsible decision-making. It prompts us to consider the legal rules, the ethical questions, the technical safety, and the real-world impact on people. This helps ensure our work is not only innovative but also beneficial to society."
        }
      ],
      "flashcards": [
        {
          "id": "neuroscience-101-l07-f1",
          "front": "Stakeholder",
          "back": "Any person, group, or organization who can be affected by the outcome of a project or decision."
        },
        {
          "id": "neuroscience-101-l07-f2",
          "front": "Informed Consent",
          "back": "The process where a research participant, after understanding the risks and benefits, voluntarily agrees to be in a study."
        },
        {
          "id": "neuroscience-101-l07-f3",
          "front": "Responsible Execution",
          "back": "Conducting research in a way that is safe, fair, transparent, and considers the impact on all stakeholders."
        }
      ]
    },
    {
      "id": "neuroscience-101-l08",
      "title": "Your Final Project: Planning Lab",
      "type": "interactive",
      "duration": 15,
      "learningAids": [
        {
          "id": "neuroscience-101-l08-a1",
          "type": "image",
          "title": "Project Proposal Template",
          "content": "A sample one-page project proposal, with sections for Objective, Hypothesis, Methods, and Success Metrics."
        }
      ],
      "chunks": [
        {
          "id": "neuroscience-101-l08-c1",
          "kind": "practice",
          "title": "Planning Your Capstone Project",
          "content": "In this final interactive lab, you'll get to design your own (hypothetical) neuroscience project! You will create a simple project plan, or 'charter.' This will include your main research question, the methods you would use to answer it, the potential risks to consider, and how you would measure success. This is your chance to bring together everything you've learned."
        },
        {
          "id": "neuroscience-101-l08-c2",
          "kind": "recap",
          "title": "Getting Ready to Present Your Findings",
          "content": "A key part of science is communicating your ideas to others. To wrap up, we'll provide a template to help you prepare a defense of your project plan. It will guide you to make claims that are supported by evidence and to explain the tradeoffs you considered. This is great practice for thinking critically and clearly communicating your reasoning."
        }
      ],
      "interactiveActivities": [
        {
          "id": "neuroscience-101-l08-act1",
          "type": "project_builder",
          "title": "Your Project Blueprint",
          "description": "Use this tool to build a one-page plan for your capstone project.",
          "instructions": [
            "State your research question in one sentence.",
            "Define at least two ways you would measure whether your experiment was successful.",
            "Identify one ethical risk related to your project and suggest a way to manage it."
          ]
        },
        {
          "id": "neuroscience-101-l08-act2",
          "type": "debate_simulator",
          "title": "Practice Your Presentation",
          "description": "Prepare to defend your project plan against friendly critiques about its cost, risks, and fairness."
        }
      ]
    }
  ]
};
