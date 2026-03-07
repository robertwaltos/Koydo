import type { LearningModule } from "@/lib/modules/types";

export const electrical_engineering_401_Module: LearningModule = {
  "id": "electrical-engineering-401",
  "title": "Power Systems IV",
  "description": "An advanced course on power system analysis and design, focusing on power flow, fault analysis, system stability, and reliability engineering. Students will lead a capstone design project simulating modern grid architecture challenges.",
  "subject": "Power Systems",
  "tags": [
    "curriculum",
    "interactive",
    "electrical engineering",
    "capstone"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "advanced",
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
  "thumbnail": "/thumbnails/power-grid-diagram.svg",
  "learningObjectives": [
    "Perform power flow studies on multi-bus systems using numerical methods like Gauss-Seidel and Newton-Raphson.",
    "Analyze symmetrical and unsymmetrical faults using symmetrical components to determine fault currents and system impact.",
    "Evaluate the transient stability of a power system using the equal-area criterion and the swing equation.",
    "Design and propose a comprehensive protection scheme for a section of a power grid in a capstone project."
  ],
  "lessons": [
    {
      "id": "ee-401-l01",
      "title": "Power Flow Analysis Fundamentals",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "ee-401-l01-a1",
          "type": "image",
          "title": "One-Line Diagram",
          "content": "A visual representation of a sample three-bus power system, showing generators, loads, and transmission lines."
        },
        {
          "id": "ee-401-l01-a2",
          "type": "animation",
          "title": "Bus Admittance Matrix (Ybus) Formation",
          "content": "Step-by-step animated construction of the Ybus matrix for the sample power system."
        }
      ]
    },
    {
      "id": "ee-401-l02",
      "title": "Practice: Solving Power Flow",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Formulate the Ybus matrix for the provided three-bus system.",
          "Perform one iteration of the Gauss-Seidel method to update the voltage at the load bus.",
          "Explain why the Newton-Raphson method is generally preferred for larger systems."
        ]
      },
      "learningAids": [
        {
          "id": "ee-401-l02-a1",
          "type": "practice",
          "title": "Guided Power Flow Calculation",
          "content": "Use the interactive console to input your calculations and receive immediate feedback."
        }
      ]
    },
    {
      "id": "ee-401-l03",
      "title": "Checkpoint: Power Flow Analysis",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "ee-401-l03-q1",
          "text": "In a power flow study, which type of bus has its real power (P) and voltage magnitude (|V|) specified?",
          "skillId": "power-flow-bus-types",
          "options": [
            {
              "id": "a",
              "text": "Slack Bus"
            },
            {
              "id": "b",
              "text": "Load Bus (PQ Bus)"
            },
            {
              "id": "c",
              "text": "Generator Bus (PV Bus)"
            },
            {
              "id": "d",
              "text": "Transfer Bus"
            }
          ],
          "correctOptionId": "c"
        },
        {
          "id": "ee-401-l03-q2",
          "text": "The bus admittance matrix (Ybus) for a power system is typically:",
          "skillId": "ybus-properties",
          "options": [
            {
              "id": "a",
              "text": "A dense matrix with mostly non-zero elements."
            },
            {
              "id": "b",
              "text": "A sparse matrix with mostly zero elements."
            },
            {
              "id": "c",
              "text": "An identity matrix."
            },
            {
              "id": "d",
              "text": "A singular matrix that cannot be inverted."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Most buses in a large power system are connected to only a few other buses, resulting in a sparse Ybus matrix."
        },
        {
          "id": "ee-401-l03-q3",
          "text": "What is the primary purpose of a slack bus in power flow analysis?",
          "skillId": "power-flow-slack-bus",
          "options": [
            {
              "id": "a",
              "text": "To represent the largest load in the system."
            },
            {
              "id": "b",
              "text": "To account for system transmission line losses."
            },
            {
              "id": "c",
              "text": "To set the reference voltage and angle for the system."
            },
            {
              "id": "d",
              "text": "To model a bus with zero power injection."
            }
          ],
          "correctOptionId": "b"
        }
      ]
    },
    {
      "id": "ee-401-l04",
      "title": "Symmetrical & Unsymmetrical Faults",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "ee-401-l04-a1",
          "type": "image",
          "title": "Concept Card: Fault Types",
          "content": "Diagrams illustrating the four main fault types: three-phase (3Φ), single line-to-ground (SLG), line-to-line (LL), and double line-to-ground (DLG)."
        },
        {
          "id": "ee-401-l04-a2",
          "type": "animation",
          "title": "Symmetrical Components",
          "content": "Animation showing how an unbalanced set of phasors can be decomposed into positive, negative, and zero sequence components."
        }
      ]
    },
    {
      "id": "ee-401-l05",
      "title": "Practice: Fault Current Calculation",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Draw the positive, negative, and zero sequence networks for the given system.",
          "Calculate the total fault current for a single line-to-ground fault at Bus 2.",
          "Explain how the generator's grounding impedance affects the zero sequence network."
        ]
      },
      "learningAids": [
        {
          "id": "ee-401-l05-a1",
          "type": "practice",
          "title": "Guided Fault Analysis",
          "content": "Use the interactive schematic to connect sequence networks and solve for fault currents."
        }
      ]
    },
    {
      "id": "ee-401-l06",
      "title": "Checkpoint: Fault Analysis",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "ee-401-l06-q1",
          "text": "Which sequence currents are equal and add to zero for a line-to-line (LL) fault?",
          "skillId": "fault-analysis-components",
          "options": [
            {
              "id": "a",
              "text": "I_a1 = I_a2, and I_a0 = 0"
            },
            {
              "id": "b",
              "text": "I_a1 = -I_a2, and I_a0 = 0"
            },
            {
              "id": "c",
              "text": "I_a1 = I_a2 = I_a0"
            },
            {
              "id": "d",
              "text": "I_a1 = 0, and I_a2 = I_a0"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "ee-401-l06-q2",
          "text": "A three-phase short circuit is considered a 'symmetrical fault' because:",
          "skillId": "fault-analysis-symmetrical",
          "options": [
            {
              "id": "a",
              "text": "It only involves the zero sequence network."
            },
            {
              "id": "b",
              "text": "The system remains balanced, containing only positive sequence currents."
            },
            {
              "id": "c",
              "text": "It has the lowest fault current of all fault types."
            },
            {
              "id": "d",
              "text": "It does not involve ground."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "ee-401-l06-q3",
          "text": "The zero sequence impedance of a transmission line is typically:",
          "skillId": "fault-analysis-impedance",
          "options": [
            {
              "id": "a",
              "text": "Equal to its positive sequence impedance."
            },
            {
              "id": "b",
              "text": "Smaller than its positive sequence impedance."
            },
            {
              "id": "c",
              "text": "Larger than its positive sequence impedance."
            },
            {
              "id": "d",
              "text": "Infinite."
            }
          ],
          "correctOptionId": "c",
          "explanation": "The zero sequence current path includes the earth/ground return, which generally has a higher impedance than the line conductors."
        }
      ]
    },
    {
      "id": "ee-401-l07",
      "title": "Power System Stability",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "ee-401-l07-a1",
          "type": "image",
          "title": "Concept Card: Power-Angle Curve",
          "content": "A plot of electrical power delivered versus the rotor angle (δ), illustrating stable and unstable operating regions."
        },
        {
          "id": "ee-401-l07-a2",
          "type": "animation",
          "title": "Equal-Area Criterion",
          "content": "An animation demonstrating how a fault causes the rotor to accelerate and how clearing the fault can lead to either a new stable equilibrium or loss of synchronism."
        }
      ]
    },
    {
      "id": "ee-401-l08",
      "title": "Practice: Applying the Swing Equation",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Write the swing equation for a synchronous generator.",
          "For a given fault, calculate the critical clearing angle using the equal-area criterion.",
          "Explain how a faster fault clearing time by a circuit breaker improves transient stability."
        ]
      },
      "learningAids": [
        {
          "id": "ee-401-l08-a1",
          "type": "practice",
          "title": "Interactive Stability Simulation",
          "content": "Adjust fault clearing times in a simulation and observe the impact on the generator's rotor angle swing curve."
        }
      ]
    },
    {
      "id": "ee-401-l09",
      "title": "Checkpoint: Power System Stability",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "ee-401-l09-q1",
          "text": "Transient stability of a power system is concerned with its ability to maintain synchronism:",
          "skillId": "stability-transient",
          "options": [
            {
              "id": "a",
              "text": "During small, gradual load changes."
            },
            {
              "id": "b",
              "text": "Following a large, sudden disturbance like a fault."
            },
            {
              "id": "c",
              "text": "Under normal, steady-state operating conditions."
            },
            {
              "id": "d",
              "text": "Over a long period of several hours."
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "ee-401-l09-q2",
          "text": "According to the equal-area criterion, a system will remain stable if the decelerating area is _______ the accelerating area.",
          "skillId": "stability-equal-area",
          "options": [
            {
              "id": "a",
              "text": "less than"
            },
            {
              "id": "b",
              "text": "equal to or greater than"
            },
            {
              "id": "c",
              "text": "exactly half of"
            },
            {
              "id": "d",
              "text": "unrelated to"
            }
          ],
          "correctOptionId": "b"
        },
        {
          "id": "ee-401-l09-q3",
          "text": "Which of the following actions would most effectively improve the transient stability of a power system?",
          "skillId": "stability-improvement",
          "options": [
            {
              "id": "a",
              "text": "Increasing the transmission line reactance."
            },
            {
              "id": "b",
              "text": "Using slower circuit breakers to clear faults."
            },
            {
              "id": "c",
              "text": "Reducing the generator's inertia constant (H)."
            },
            {
              "id": "d",
              "text": "Employing fast-acting excitation systems."
            }
          ],
          "correctOptionId": "d",
          "explanation": "Fast excitation systems can quickly increase the generator's internal voltage during a fault, boosting synchronizing power and improving stability."
        }
      ]
    },
    {
      "id": "ee-401-l10",
      "title": "Capstone: Substation Protection Design",
      "type": "interactive",
      "duration": 60,
      "metadata": {
        "prompts": [
          "Review the provided one-line diagram of a sub-transmission substation.",
          "Propose a primary and backup protection scheme for the main transformer, specifying relay types (e.g., differential, overcurrent).",
          "Develop a coordination plan for the feeder circuit breakers to ensure selectivity.",
          "Submit a brief design report justifying your choices based on reliability and security principles."
        ]
      },
      "learningAids": [
        {
          "id": "ee-401-l10-a1",
          "type": "practice",
          "title": "Design Canvas",
          "content": "Use the interactive canvas to place virtual relays and circuit breakers on the substation diagram and configure their settings."
        }
      ]
    }
  ]
};
