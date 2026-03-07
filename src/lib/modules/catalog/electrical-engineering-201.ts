import type { LearningModule } from "@/lib/modules/types";

export const electrical_engineering_201_Module: LearningModule = {
  "id": "electrical-engineering-201",
  "title": "Power Systems II: Analysis and Stability",
  "description": "An intermediate course on power systems, covering power flow analysis, symmetrical components, fault analysis, and system stability. Emphasizes practical analysis and design workflows.",
  "subject": "Power Systems",
  "tags": [
    "curriculum",
    "interactive",
    "power engineering",
    "stability analysis"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-power-grid.svg",
  "learningObjectives": [
    "Analyze power flow in a multi-bus system using standard methods.",
    "Apply symmetrical components to calculate currents and voltages during unbalanced faults.",
    "Evaluate the transient stability of a power system using the swing equation and equal area criterion.",
    "Demonstrate mastery of concepts through problem-solving and checkpoint quizzes."
  ],
  "lessons": [
    {
      "id": "electrical-engineering-201-l01",
      "title": "Introduction to Power Flow Analysis",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrical-engineering-201-l01-a1",
          "type": "image",
          "title": "Concept Card: Bus Types",
          "content": "Visual summary of Slack, PV (Generator), and PQ (Load) buses with their known and unknown variables."
        },
        {
          "id": "electrical-engineering-201-l01-a2",
          "type": "animation",
          "title": "Animated Example: Y-Bus Matrix Formation",
          "content": "Step-by-step visualization of creating the admittance matrix for a simple 3-bus system."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l02",
      "title": "Practice: Solving a Power Flow Problem",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Given a 3-bus system diagram, identify the bus types and their knowns/unknowns.",
          "Formulate the Y-bus matrix for the system.",
          "Perform one iteration of the Gauss-Seidel method to update the voltage at a PQ bus."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-201-l02-a1",
          "type": "practice",
          "title": "Guided Practice: 3-Bus System",
          "content": "Use the interactive simulator to input values and see the results of your power flow calculations."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l03",
      "title": "Checkpoint 1: Power Flow",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrical-engineering-201-l03-q1",
          "text": "In a power flow study, what are the known quantities for a PV (generator) bus?",
          "skillId": "power-flow-concepts",
          "options": [
            {
              "id": "a",
              "text": "Real Power (P) and Reactive Power (Q)"
            },
            {
              "id": "b",
              "text": "Real Power (P) and Voltage Magnitude (|V|)"
            },
            {
              "id": "c",
              "text": "Voltage Magnitude (|V|) and Voltage Angle (δ)"
            },
            {
              "id": "d",
              "text": "Reactive Power (Q) and Voltage Magnitude (|V|)"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "electrical-engineering-201-l03-q2",
          "text": "Why is a slack bus essential for a power flow solution?",
          "skillId": "power-flow-analysis",
          "options": [
            {
              "id": "a",
              "text": "To provide the reactive power required by the system."
            },
            {
              "id": "b",
              "text": "To serve as the voltage reference and balance system losses."
            },
            {
              "id": "c",
              "text": "To represent the largest load in the system."
            },
            {
              "id": "d",
              "text": "To set the system frequency."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The slack bus has a fixed voltage magnitude and angle, providing a reference. It also supplies the difference between scheduled generation and total load plus losses, which are unknown before the study."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l04",
      "title": "Symmetrical Components for Fault Analysis",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "electrical-engineering-201-l04-a1",
          "type": "image",
          "title": "Concept Card: Sequence Networks",
          "content": "Diagrams showing the structure of positive, negative, and zero sequence networks for generators, transformers, and transmission lines."
        },
        {
          "id": "electrical-engineering-201-l04-a2",
          "type": "animation",
          "title": "Animated Example: Decomposing Unbalanced Phasors",
          "content": "Visualization of an unbalanced three-phase system being resolved into its symmetrical components."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l05",
      "title": "Practice: Analyzing an Unbalanced Fault",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "For the given system, draw the three sequence networks.",
          "Connect the networks to represent a single line-to-ground fault.",
          "Calculate the sequence currents and the total fault current."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-201-l05-a1",
          "type": "practice",
          "title": "Guided Practice: Line-to-Ground Fault",
          "content": "Use the interactive schematic to connect sequence networks and calculate fault parameters."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l06",
      "title": "Checkpoint 2: Fault Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrical-engineering-201-l06-q1",
          "text": "For a single line-to-ground fault, how are the sequence networks connected at the fault point?",
          "skillId": "unsymmetrical-faults",
          "options": [
            {
              "id": "a",
              "text": "In parallel"
            },
            {
              "id": "b",
              "text": "In series"
            },
            {
              "id": "c",
              "text": "Only the positive and negative networks are connected"
            },
            {
              "id": "d",
              "text": "Only the positive sequence network is used"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "electrical-engineering-201-l06-q2",
          "text": "Which of the following components has zero impedance in the zero-sequence network, assuming a standard transformer connection?",
          "skillId": "sequence-networks",
          "options": [
            {
              "id": "a",
              "text": "A wye-grounded to delta transformer"
            },
            {
              "id": "b",
              "text": "A transmission line"
            },
            {
              "id": "c",
              "text": "A delta-delta transformer"
            },
            {
              "id": "d",
              "text": "An ungrounded generator"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A delta winding traps zero-sequence currents, effectively appearing as an open circuit to the rest of the system. Therefore, it blocks the flow of zero-sequence current."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l07",
      "title": "Fundamentals of Power System Stability",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrical-engineering-201-l07-a1",
          "type": "image",
          "title": "Concept Card: Power-Angle Curve",
          "content": "A plot of electrical power vs. rotor angle (P-δ curve), illustrating stable and unstable operating regions."
        },
        {
          "id": "electrical-engineering-201-l07-a2",
          "type": "animation",
          "title": "Animated Example: The Swing Equation",
          "content": "A dynamic visualization of a generator rotor swinging in response to a system disturbance."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l08",
      "title": "Practice: Applying the Equal Area Criterion",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "For a single-machine infinite bus system, sketch the P-δ curves for pre-fault, during-fault, and post-fault conditions.",
          "Identify the accelerating and decelerating areas on the graph.",
          "Determine the critical clearing angle to maintain stability."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-201-l08-a1",
          "type": "practice",
          "title": "Guided Practice: Transient Stability",
          "content": "Manipulate fault clearing time in a simulation to see its effect on the equal areas and determine the stability boundary."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l09",
      "title": "Checkpoint 3: System Stability",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrical-engineering-201-l09-q1",
          "text": "The Equal Area Criterion is a method for determining:",
          "skillId": "transient-stability",
          "options": [
            {
              "id": "a",
              "text": "The steady-state power limit"
            },
            {
              "id": "b",
              "text": "The economic dispatch of generators"
            },
            {
              "id": "c",
              "text": "The transient stability of a two-machine system"
            },
            {
              "id": "d",
              "text": "The magnitude of fault currents"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "electrical-engineering-201-l09-q2",
          "text": "Which action would most likely improve the transient stability of a power system?",
          "skillId": "stability-enhancement",
          "options": [
            {
              "id": "a",
              "text": "Increasing the reactance of transmission lines"
            },
            {
              "id": "b",
              "text": "Using slower circuit breakers to clear faults"
            },
            {
              "id": "c",
              "text": "Increasing the generator's moment of inertia"
            },
            {
              "id": "d",
              "text": "Operating generators closer to their steady-state limit"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A higher moment of inertia (H) means the generator's rotor accelerates and decelerates more slowly in response to power imbalances, providing more time to clear faults before synchronism is lost."
        }
      ]
    },
    {
      "id": "electrical-engineering-201-l10",
      "title": "Capstone Project: Grid Resilience Analysis",
      "type": "project",
      "duration": 60,
      "description": "Analyze a 5-bus power system. Perform a power flow study, simulate a three-phase fault on a key transmission line, and assess the system's transient stability. Propose one improvement to enhance grid resilience.",
      "learningAids": [
        {
          "id": "electrical-engineering-201-l10-a1",
          "type": "simulation",
          "title": "5-Bus System Simulator",
          "content": "An interactive environment to model the system, apply faults, and observe stability outcomes."
        },
        {
          "id": "electrical-engineering-201-l10-a2",
          "type": "template",
          "title": "Analysis Report Template",
          "content": "A structured document to guide your analysis, calculations, and final recommendations."
        }
      ]
    }
  ]
};
