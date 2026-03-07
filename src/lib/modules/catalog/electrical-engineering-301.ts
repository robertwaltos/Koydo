import type { LearningModule } from "@/lib/modules/types";

export const electrical_engineering_301_Module: LearningModule = {
  "id": "electrical-engineering-301",
  "title": "Power Systems III",
  "description": "Advanced electrical engineering focusing on power grid control systems, high-voltage signal integrity, and integrated load flow analysis.",
  "subject": "Power Systems",
  "tags": [
    "curriculum",
    "interactive",
    "engineering",
    "advanced"
  ],
  "minAge": 17,
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
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Analyze and tune control systems for grid stability and load frequency control.",
    "Evaluate signal integrity, wave propagation, and impedance matching in high-voltage transmission lines.",
    "Perform integrated load flow and fault analysis using Newton-Raphson and symmetrical components."
  ],
  "lessons": [
    {
      "id": "electrical-engineering-301-l01",
      "title": "Control Systems in Power Grids",
      "type": "video",
      "duration": 15,
      "learningAids": [
        {
          "id": "electrical-engineering-301-l01-a1",
          "type": "image",
          "title": "SCADA Architecture",
          "content": "Visual prompt: A high-resolution, multi-layered schematic showing a modern power grid with SCADA control nodes highlighted in glowing blue, illustrating real-time data flow from remote terminal units (RTUs) to the central master station."
        },
        {
          "id": "electrical-engineering-301-l01-a2",
          "type": "animation",
          "title": "Load Frequency Control",
          "content": "Visual prompt: A dynamic animation displaying a sudden industrial load increase on a grid. A graph shows the frequency dipping below 60Hz, followed by the automated response of a PID controller adjusting turbine governor valves to restore steady-state frequency."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l02",
      "title": "Practice: Tuning Grid Controllers",
      "type": "interactive",
      "duration": 20,
      "metadata": {
        "prompts": [
          "Calculate the steady-state frequency deviation for a 50 MW load step change.",
          "Adjust the integral gain (Ki) of the simulated controller to eliminate the steady-state error.",
          "Analyze the transient response and explain how increasing the derivative gain (Kd) affects the maximum overshoot."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-301-l02-a1",
          "type": "practice",
          "title": "PID Tuning Simulator",
          "content": "Visual prompt: An interactive dashboard featuring a live-updating Bode plot and step-response graph. Users drag sliders for Kp, Ki, and Kd to stabilize a simulated two-area power system."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l03",
      "title": "Checkpoint 1: Grid Control",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "electrical-engineering-301-l03-q1",
          "text": "In a multi-area power system, what is the primary objective of Automatic Generation Control (AGC)?",
          "skillId": "electrical-engineering-301-skill-control",
          "options": [
            {
              "id": "a",
              "text": "To maintain system frequency and tie-line power flows at scheduled values."
            },
            {
              "id": "b",
              "text": "To minimize the reactive power losses across transmission lines."
            },
            {
              "id": "c",
              "text": "To isolate faulted zones using distance relays."
            },
            {
              "id": "d",
              "text": "To step up voltage for long-distance transmission."
            }
          ],
          "correctOptionId": "a",
          "explanation": "AGC adjusts the power output of multiple generators in response to changes in load to maintain the system frequency and scheduled tie-line power exchanges."
        },
        {
          "id": "electrical-engineering-301-l03-q2",
          "text": "Which component of a PID controller is primarily responsible for eliminating steady-state error in load frequency control?",
          "skillId": "electrical-engineering-301-skill-control",
          "options": [
            {
              "id": "a",
              "text": "Proportional (P)"
            },
            {
              "id": "b",
              "text": "Integral (I)"
            },
            {
              "id": "c",
              "text": "Derivative (D)"
            },
            {
              "id": "d",
              "text": "Feedforward"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Integral (I) component accumulates the error over time, ensuring that even a small constant error is eventually driven to zero, restoring the exact nominal frequency."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-301-l03-a1",
          "type": "mnemonic",
          "title": "PID Memory Cue",
          "content": "Proportional for Present, Integral for Past (eliminates steady-state error), Derivative for Future (dampens overshoot)."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l04",
      "title": "Signal Integrity & Transmission",
      "type": "video",
      "duration": 18,
      "learningAids": [
        {
          "id": "electrical-engineering-301-l04-a1",
          "type": "image",
          "title": "Skin Effect and Corona Discharge",
          "content": "Visual prompt: A cross-sectional diagram of a high-voltage AC conductor showing current density concentrated at the outer edge (skin effect), accompanied by a photograph-style rendering of a faint purple glow (corona discharge) ionizing the surrounding air."
        },
        {
          "id": "electrical-engineering-301-l04-a2",
          "type": "animation",
          "title": "Wave Reflection",
          "content": "Visual prompt: An animation of a voltage surge traveling down a transmission line. As it hits an open-circuit termination, the wave reflects positively, doubling the voltage at the receiving end."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l05",
      "title": "Practice: Transmission Line Parameters",
      "type": "interactive",
      "duration": 25,
      "metadata": {
        "prompts": [
          "Calculate the Surge Impedance Loading (SIL) for a 500kV line with a surge impedance of 250 ohms.",
          "Determine the reflection coefficient at a junction where the line connects to a transformer with an impedance of 1000 ohms.",
          "Propose a reactive compensation strategy to mitigate the Ferranti effect during light load conditions."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-301-l05-a1",
          "type": "practice",
          "title": "Impedance Matching Lab",
          "content": "Visual prompt: A virtual Smith chart and circuit schematic. The user inputs R, L, C, and G values to calculate the characteristic impedance and visualizes the standing wave ratio (SWR) along the line."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l06",
      "title": "Checkpoint 2: Signal Integrity",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "electrical-engineering-301-l06-q1",
          "text": "What causes the Ferranti effect in long, lightly loaded AC transmission lines?",
          "skillId": "electrical-engineering-301-skill-transmission",
          "options": [
            {
              "id": "a",
              "text": "The charging current flowing through the line's distributed shunt capacitance."
            },
            {
              "id": "b",
              "text": "High series resistance causing excessive voltage drop."
            },
            {
              "id": "c",
              "text": "Corona discharge ionizing the surrounding air."
            },
            {
              "id": "d",
              "text": "Symmetrical faults at the receiving end."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Under light load or open-circuit conditions, the charging current drawn by the distributed capacitance of the line leads the voltage, causing the receiving end voltage to become higher than the sending end voltage."
        },
        {
          "id": "electrical-engineering-301-l06-q2",
          "text": "If a transmission line is terminated by an impedance equal to its characteristic impedance (Z0), what is the reflection coefficient?",
          "skillId": "electrical-engineering-301-skill-transmission",
          "options": [
            {
              "id": "a",
              "text": "1"
            },
            {
              "id": "b",
              "text": "-1"
            },
            {
              "id": "c",
              "text": "0"
            },
            {
              "id": "d",
              "text": "Infinity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When the load impedance matches the characteristic impedance, all incident wave energy is absorbed by the load, resulting in a reflection coefficient of zero (no reflection)."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-301-l06-a1",
          "type": "mnemonic",
          "title": "Ferranti Effect Cue",
          "content": "Ferranti = Forward voltage rises. Capacitance causes the receiving end to 'charge up' higher than the source."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l07",
      "title": "Integrated Design & Load Flow",
      "type": "video",
      "duration": 20,
      "learningAids": [
        {
          "id": "electrical-engineering-301-l07-a1",
          "type": "image",
          "title": "One-Line Diagram",
          "content": "Visual prompt: A complex one-line diagram of a 5-bus power system, detailing slack, PV, and PQ buses, with per-unit impedances labeled on all transmission lines and transformers."
        },
        {
          "id": "electrical-engineering-301-l07-a2",
          "type": "animation",
          "title": "Newton-Raphson Iteration",
          "content": "Visual prompt: A mathematical animation showing the iterative convergence of the Newton-Raphson method. A 3D surface plot demonstrates the algorithm finding the root (voltage magnitudes and angles) by following the tangent of the Jacobian matrix."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l08",
      "title": "Practice: Fault Analysis",
      "type": "interactive",
      "duration": 30,
      "metadata": {
        "prompts": [
          "Construct the positive, negative, and zero sequence networks for a given single line-to-ground fault.",
          "Calculate the subtransient fault current in per-unit.",
          "Determine the voltage at the faulted bus during the fault condition."
        ]
      },
      "learningAids": [
        {
          "id": "electrical-engineering-301-l08-a1",
          "type": "practice",
          "title": "Symmetrical Components Matrix",
          "content": "Visual prompt: An interactive matrix calculator where users input phase voltages (Va, Vb, Vc) and the system multiplies them by the Fortescue transformation matrix to output sequence components (V0, V1, V2)."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l09",
      "title": "Checkpoint 3: Load Flow & Faults",
      "type": "quiz",
      "duration": 15,
      "questions": [
        {
          "id": "electrical-engineering-301-l09-q1",
          "text": "Why is the Newton-Raphson method generally preferred over the Gauss-Seidel method for large power system load flow analysis?",
          "skillId": "electrical-engineering-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "It requires less memory per iteration."
            },
            {
              "id": "b",
              "text": "It exhibits quadratic convergence, requiring fewer iterations to reach a solution."
            },
            {
              "id": "c",
              "text": "It does not require the calculation of a Jacobian matrix."
            },
            {
              "id": "d",
              "text": "It is strictly a linear algebraic method."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Newton-Raphson has quadratic convergence characteristics, meaning it converges much faster (in fewer iterations) than Gauss-Seidel, making it highly efficient for large, complex systems despite the computational cost of the Jacobian matrix."
        },
        {
          "id": "electrical-engineering-301-l09-q2",
          "text": "For a single line-to-ground (SLG) fault, how are the sequence networks connected?",
          "skillId": "electrical-engineering-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "Positive, negative, and zero sequence networks are connected in parallel."
            },
            {
              "id": "b",
              "text": "Positive, negative, and zero sequence networks are connected in series."
            },
            {
              "id": "c",
              "text": "Only the positive and negative sequence networks are connected in parallel."
            },
            {
              "id": "d",
              "text": "Only the zero sequence network is utilized."
            }
          ],
          "correctOptionId": "b",
          "explanation": "In a single line-to-ground fault, the boundary conditions dictate that the sequence currents are equal (I1 = I2 = I0). This implies that the positive, negative, and zero sequence networks must be connected in series."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-301-l09-a1",
          "type": "mnemonic",
          "title": "Fault Connection Cue",
          "content": "SLG = Series (Currents are equal). LL = Parallel (Voltages are equal)."
        }
      ]
    },
    {
      "id": "electrical-engineering-301-l10",
      "title": "Final Assessment: Power Systems III",
      "type": "quiz",
      "duration": 20,
      "questions": [
        {
          "id": "electrical-engineering-301-l10-q1",
          "text": "A power system experiences a sudden loss of a major generator. Which sequence of control actions correctly describes the system's response?",
          "skillId": "electrical-engineering-301-skill-control",
          "options": [
            {
              "id": "a",
              "text": "Inertial response -> Primary frequency control (Governor) -> Secondary frequency control (AGC)"
            },
            {
              "id": "b",
              "text": "Secondary frequency control (AGC) -> Inertial response -> Primary frequency control (Governor)"
            },
            {
              "id": "c",
              "text": "Primary frequency control (Governor) -> Secondary frequency control (AGC) -> Inertial response"
            },
            {
              "id": "d",
              "text": "Inertial response -> Secondary frequency control (AGC) -> Primary frequency control (Governor)"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Immediately after a loss of generation, the kinetic energy of rotating machines (inertia) slows the frequency drop. Next, governors (primary control) arrest the decline and stabilize frequency at a new, lower steady state. Finally, AGC (secondary control) restores the frequency to the nominal 60Hz/50Hz."
        },
        {
          "id": "electrical-engineering-301-l10-q2",
          "text": "To increase the power transfer capability of a long transmission line, which compensation method is most effective at reducing the series inductive reactance?",
          "skillId": "electrical-engineering-301-skill-transmission",
          "options": [
            {
              "id": "a",
              "text": "Shunt reactors"
            },
            {
              "id": "b",
              "text": "Series capacitors"
            },
            {
              "id": "c",
              "text": "Shunt capacitors"
            },
            {
              "id": "d",
              "text": "Synchronous condensers"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Series capacitors directly offset the series inductive reactance of the transmission line, effectively 'shortening' the electrical length of the line and increasing its maximum power transfer capability."
        },
        {
          "id": "electrical-engineering-301-l10-q3",
          "text": "In the Jacobian matrix of the Newton-Raphson load flow method, what do the off-diagonal elements represent?",
          "skillId": "electrical-engineering-301-skill-analysis",
          "options": [
            {
              "id": "a",
              "text": "The total real and reactive power at a specific bus."
            },
            {
              "id": "b",
              "text": "The partial derivatives of real and reactive power with respect to voltage angles and magnitudes at adjacent buses."
            },
            {
              "id": "c",
              "text": "The physical admittance (Y-bus) values between unconnected buses."
            },
            {
              "id": "d",
              "text": "The sequence impedances of the transmission lines."
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Jacobian matrix consists of partial derivatives. The off-diagonal elements represent the rate of change of real or reactive power at one bus with respect to changes in the voltage magnitude or angle at a different, connected bus."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-301-l10-a1",
          "type": "image",
          "title": "Completion Certificate Placeholder",
          "content": "Visual prompt: A highly detailed, professional certificate graphic featuring a gold seal with a transmission tower emblem, signifying mastery of advanced power systems engineering."
        }
      ]
    }
  ]
};
