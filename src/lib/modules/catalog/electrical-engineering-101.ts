import type { LearningModule } from "@/lib/modules/types";

export const electrical_engineering_101_Module: LearningModule = {
  "id": "electrical-engineering-101",
  "title": "Electrical Engineering Foundations",
  "description": "Build a solid understanding of circuit analysis, analog and digital electronics, and electromagnetism — from Ohm's law through transistors and logic gates.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "engineering",
    "electrical"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Apply Ohm's law and Kirchhoff's laws to solve DC circuit problems",
    "Calculate equivalent resistance for series and parallel networks",
    "Describe the energy-storage behavior of capacitors and inductors and their time constants",
    "Analyze AC circuits using RMS values, impedance, and phasor diagrams",
    "Explain p-n junction operation and the role of diodes in rectification",
    "Distinguish between BJT and MOSFET transistors and map them to basic digital logic gates",
    "Evaluate power dissipation and efficiency in resistive and reactive circuits"
  ],
  "lessons": [
    {
      "id": "electrical-engineering-101-l01",
      "title": "Voltage, Current, and Resistance",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define voltage, current, and resistance using the water-flow analogy",
        "State and apply Ohm's law (V = IR)",
        "Classify materials as conductors, semiconductors, or insulators",
        "Calculate power dissipated in a resistor using P = IV"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l01-c1",
          "title": "Electric Charge and Current",
          "kind": "intro",
          "content": "Electric charge is a fundamental property of matter, carried by tiny particles known as protons (positive) and electrons (negative). When electrons move through a conductive material like copper wire, they create an electric current. This current is measured in amperes (A). One ampere means one coulomb of charge passes a specific point every second. Interestingly, 'conventional current' is drawn as flowing from positive to negative, even though electrons actually flow the opposite way! To visualize this, imagine water flowing through a pipe: the electric current is the water flow, the voltage is the water pressure pushing it, and resistance is the narrowness of the pipe restricting the flow. Understanding this relationship is the first step in mastering electrical engineering.",
          "visualPrompt": "An animation showing water flowing through a pipe with a valve (resistance), a pump (voltage), and the water itself (current), transitioning to a simple battery and resistor circuit."
        },
        {
          "id": "electrical-engineering-101-l01-c2",
          "title": "Ohm's Law and Resistance",
          "kind": "concept",
          "content": "Ohm's Law is the most important fundamental rule in electrical engineering. It defines how voltage (V), current (I), and resistance (R) interact. The law states that voltage across a conductor equals the current multiplied by its resistance: V = I × R. Resistance, measured in ohms (Ω), depends on a material's physical properties: its resistivity (ρ), length (L), and cross-sectional area (A), calculated as R = ρL/A. For example, copper has very low resistivity, making it an excellent conductor for wiring. Rubber has high resistivity, making it a great insulator. Semiconductors, like silicon, fall in the middle; their conductivity can be precisely controlled, which is the secret behind all modern computer chips.",
          "visualPrompt": "A 3D diagram of a wire showing its length (L) and cross-sectional area (A), with a formula overlay showing R = ρL/A, alongside a glowing Ohm's Law triangle."
        },
        {
          "id": "electrical-engineering-101-l01-c3",
          "title": "Electrical Power and Energy",
          "kind": "concept",
          "content": "Power (P) measures how quickly electrical energy is transformed into other forms, like heat, light, or motion. It is measured in watts (W). The basic formula is P = IV (Power = Current × Voltage). By combining this with Ohm's Law (V = IR), we get two more incredibly useful formulas: P = I²R and P = V²/R. For example, if a 100 Ω resistor carries 0.5 A of current, it dissipates P = (0.5)² × 100 = 25 watts of heat. Over time, this power consumption adds up to energy, measured in watt-hours (E = Pt). A 60-watt bulb left on for 2 hours uses 120 watt-hours. Calculating power is critical to ensure components don't overheat and circuits operate safely.",
          "visualPrompt": "An incandescent light bulb glowing, with overlays showing P = IV, P = I²R, and P = V²/R as the brightness increases, followed by an electricity meter spinning."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l01-f1",
          "front": "What is Ohm's law?",
          "back": "V = I × R. Voltage (V) equals current (I) times resistance (R). It applies to linear (ohmic) resistors at constant temperature."
        },
        {
          "id": "electrical-engineering-101-l01-f2",
          "front": "What is the unit of electric current and what does it measure?",
          "back": "The ampere (A). It measures the rate of charge flow — one ampere equals one coulomb per second (1 A = 1 C/s)."
        },
        {
          "id": "electrical-engineering-101-l01-f3",
          "front": "How does resistance depend on a conductor's dimensions?",
          "back": "R = ρL/A. Resistance increases with length (L) and resistivity (ρ) but decreases with larger cross-sectional area (A)."
        },
        {
          "id": "electrical-engineering-101-l01-f4",
          "front": "Give three equivalent formulas for electrical power.",
          "back": "P = IV, P = I²R, and P = V²/R. All derive from combining Ohm's law with the basic power relationship."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l01-a1",
          "type": "image",
          "title": "Water-Flow Analogy Diagram",
          "content": "Side-by-side comparison showing voltage as water pressure, current as flow rate, and resistance as pipe constriction."
        },
        {
          "id": "electrical-engineering-101-l01-a2",
          "type": "animation",
          "title": "Ohm's Law Triangle",
          "content": "Interactive triangle showing V at top, I and R at bottom. Cover the unknown quantity to reveal the formula: V = IR, I = V/R, R = V/I."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l02",
      "title": "Series and Parallel Circuits",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Apply Kirchhoff's Voltage Law (KVL) around a closed loop",
        "Apply Kirchhoff's Current Law (KCL) at a node",
        "Calculate equivalent resistance in series and parallel",
        "Use voltage and current divider formulas"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l02-c1",
          "title": "Kirchhoff's Laws",
          "kind": "concept",
          "content": "Kirchhoff's Laws allow us to analyze complex circuits where Ohm's Law alone isn't enough. Kirchhoff's Voltage Law (KVL) states that the sum of all voltages around any closed loop in a circuit must equal zero. This means the energy supplied by a battery is perfectly balanced by the energy dropped across the components. Kirchhoff's Current Law (KCL) states that at any junction (or node) in a circuit, the total current flowing in must equal the total current flowing out. This is the electrical equivalent of 'what goes in must come out,' based on the conservation of charge. Together, KVL and KCL form the ultimate toolkit for circuit analysis.",
          "visualPrompt": "A circuit loop highlighting voltage drops across resistors summing to the battery voltage (KVL), and a node showing incoming electron flow splitting into two paths (KCL)."
        },
        {
          "id": "electrical-engineering-101-l02-c2",
          "title": "Series and Parallel Resistance",
          "kind": "concept",
          "content": "Components in a circuit can be connected in two primary ways: series and parallel. In a series circuit, components are connected end-to-end, meaning the exact same current flows through all of them. The total equivalent resistance is simply the sum: R_eq = R₁ + R₂ + ... + Rₙ. In a parallel circuit, components are connected across the same two points, meaning they share the same voltage. The equivalent resistance is found using 1/R_eq = 1/R₁ + 1/R₂ + ... + 1/Rₙ. For just two resistors in parallel, a handy shortcut is R_eq = (R₁ × R₂) / (R₁ + R₂). Because parallel paths give current more ways to flow, the total resistance of a parallel circuit is always less than the smallest individual resistor.",
          "visualPrompt": "Side-by-side comparison of resistors placed end-to-end (series) versus side-by-side (parallel), with equivalent resistance formulas appearing below each."
        },
        {
          "id": "electrical-engineering-101-l02-c3",
          "title": "Voltage and Current Dividers",
          "kind": "example",
          "content": "Voltage and current dividers are practical shortcuts derived from Kirchhoff's Laws. In a series circuit, the total voltage is divided among the resistors proportionally to their resistance. The voltage divider formula is V_x = V_total × (R_x / R_total). For example, if a 12V source is connected to a 4Ω and an 8Ω resistor in series (12Ω total), the 8Ω resistor gets 12V × (8/12) = 8 volts. Conversely, in a parallel circuit, the total current splits among the branches. The current divider formula for two branches is I_x = I_total × (R_other / (R_x + R_other)). These formulas allow engineers to quickly design circuits that provide specific voltages or currents to different components.",
          "visualPrompt": "A schematic of a voltage divider circuit with a multimeter measuring the voltage across one resistor, alongside the V_x formula."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l02-f1",
          "front": "State Kirchhoff's Voltage Law (KVL).",
          "back": "The algebraic sum of all voltages around any closed loop in a circuit equals zero: ΣV = 0."
        },
        {
          "id": "electrical-engineering-101-l02-f2",
          "front": "State Kirchhoff's Current Law (KCL).",
          "back": "The sum of currents entering a node equals the sum leaving it: ΣI_in = ΣI_out, based on conservation of charge."
        },
        {
          "id": "electrical-engineering-101-l02-f3",
          "front": "How do you find equivalent resistance for resistors in parallel?",
          "back": "1/R_eq = 1/R₁ + 1/R₂ + … 1/Rₙ. For two resistors: R_eq = (R₁ × R₂)/(R₁ + R₂). The result is always less than the smallest individual resistor."
        },
        {
          "id": "electrical-engineering-101-l02-f4",
          "front": "Write the voltage divider formula for a series circuit.",
          "back": "V_x = V_total × (R_x / R_total). The voltage across a resistor is proportional to its share of the total resistance."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Series vs Parallel Properties",
          "description": "Sort each property to the correct circuit configuration.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "series",
                "label": "Series Circuit"
              },
              {
                "id": "parallel",
                "label": "Parallel Circuit"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Same current through every component",
                "correctBucketId": "series"
              },
              {
                "id": "i2",
                "label": "Same voltage across every branch",
                "correctBucketId": "parallel"
              },
              {
                "id": "i3",
                "label": "R_eq = R₁ + R₂ + … Rₙ",
                "correctBucketId": "series"
              },
              {
                "id": "i4",
                "label": "1/R_eq = 1/R₁ + 1/R₂ + … 1/Rₙ",
                "correctBucketId": "parallel"
              },
              {
                "id": "i5",
                "label": "If one component fails open, entire circuit breaks",
                "correctBucketId": "series"
              },
              {
                "id": "i6",
                "label": "Total current splits among branches",
                "correctBucketId": "parallel"
              },
              {
                "id": "i7",
                "label": "Voltage divider formula applies directly",
                "correctBucketId": "series"
              },
              {
                "id": "i8",
                "label": "Equivalent resistance is less than the smallest resistor",
                "correctBucketId": "parallel"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l02-a2",
          "type": "practice",
          "title": "Circuit Solver Exercise",
          "content": "Given a 24 V battery with three resistors (6 Ω, 12 Ω in parallel, then in series with 4 Ω), calculate the total current, voltage across each section, and power dissipated."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l03",
      "title": "DC Circuits Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "apply": 2,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "electrical-engineering-101-l03-q1",
          "text": "A 12 V battery drives 0.5 A through a resistor. What is the resistance?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "6 Ω"
            },
            {
              "id": "b",
              "text": "12 Ω"
            },
            {
              "id": "c",
              "text": "24 Ω"
            },
            {
              "id": "d",
              "text": "0.042 Ω"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Ohm's law: R = V/I = 12 V / 0.5 A = 24 Ω."
        },
        {
          "id": "electrical-engineering-101-l03-q2",
          "text": "Three resistors of 10 Ω, 20 Ω, and 30 Ω are connected in series. What is the equivalent resistance?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "5.45 Ω"
            },
            {
              "id": "b",
              "text": "20 Ω"
            },
            {
              "id": "c",
              "text": "60 Ω"
            },
            {
              "id": "d",
              "text": "600 Ω"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In series, R_eq = R₁ + R₂ + R₃ = 10 + 20 + 30 = 60 Ω."
        },
        {
          "id": "electrical-engineering-101-l03-q3",
          "text": "According to Kirchhoff's Current Law, what happens at a circuit node?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Current is always equally divided among branches"
            },
            {
              "id": "b",
              "text": "The total current entering equals the total current leaving"
            },
            {
              "id": "c",
              "text": "Current increases as it passes through the node"
            },
            {
              "id": "d",
              "text": "Voltage across the node is always zero"
            }
          ],
          "correctOptionId": "b",
          "explanation": "KCL is based on conservation of charge — charge cannot accumulate at a node, so ΣI_in = ΣI_out."
        },
        {
          "id": "electrical-engineering-101-l03-q4",
          "text": "Two resistors, 6 Ω and 3 Ω, are connected in parallel across a 9 V source. What is the total current drawn from the source?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 A"
            },
            {
              "id": "b",
              "text": "1.5 A"
            },
            {
              "id": "c",
              "text": "3 A"
            },
            {
              "id": "d",
              "text": "4.5 A"
            }
          ],
          "correctOptionId": "d",
          "explanation": "R_eq = (6 × 3)/(6 + 3) = 2 Ω. I_total = V/R_eq = 9/2 = 4.5 A. Alternatively: I₁ = 9/6 = 1.5 A, I₂ = 9/3 = 3 A, total = 4.5 A."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l03-a1",
          "type": "mnemonic",
          "title": "VIR Triangle",
          "content": "Cover the unknown in the triangle: V on top, I and R on the bottom. V = IR, I = V/R, R = V/I."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l04",
      "title": "Capacitors and Inductors",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain how capacitors store energy in an electric field",
        "Explain how inductors store energy in a magnetic field",
        "Calculate RC and RL time constants",
        "Distinguish between transient and steady-state behavior"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l04-c1",
          "title": "Capacitors and Electric Fields",
          "kind": "concept",
          "content": "A capacitor stores electrical energy in an electric field. It consists of two conductive plates separated by an insulating material called a dielectric. When connected to a voltage source, opposite charges accumulate on the plates, creating an electric field between them. Capacitance (C), measured in farads (F), is the amount of charge stored per volt (C = Q/V). The stored energy is calculated as E = ½CV². Because the plates are separated by an insulator, capacitors block steady direct current (DC) once fully charged. However, they allow alternating current (AC) to pass, as the constantly reversing voltage causes charge to continuously flow on and off the plates.",
          "visualPrompt": "Two parallel metal plates charging up with positive and negative symbols, creating glowing electric field lines between them."
        },
        {
          "id": "electrical-engineering-101-l04-c2",
          "title": "Inductors and Magnetic Fields",
          "kind": "concept",
          "content": "While capacitors store energy in an electric field, inductors store energy in a magnetic field. An inductor is simply a coil of wire. When current flows through it, a magnetic field expands outward. Inductance (L), measured in henrys (H), depends on the number of coils, the core material, and the shape. The energy stored is E = ½LI². Inductors fundamentally oppose any change in current. If the current tries to change suddenly, the inductor generates a 'back-voltage' (v = L × di/dt) to fight the change. Because of this, inductors easily pass steady DC, but they resist the constantly changing flow of AC.",
          "visualPrompt": "A coiled copper wire with glowing magnetic field lines expanding outward as current flows through it."
        },
        {
          "id": "electrical-engineering-101-l04-c3",
          "title": "Time Constants and Transient Response",
          "kind": "concept",
          "content": "When you flip a switch, voltages and currents don't change instantly; they transition over a brief period called the transient response. In an RC (resistor-capacitor) circuit, the capacitor charges exponentially. The speed of this charging is defined by the time constant, τ (tau), where τ = R × C. After one time constant, the capacitor reaches about 63.2% of its final voltage. After 5τ, it is considered fully charged (99.3%). Similarly, in an RL (resistor-inductor) circuit, the current ramps up exponentially with a time constant of τ = L / R. Understanding these time constants is vital for designing timing circuits, filters, and memory cells in computers.",
          "visualPrompt": "An animated graph plotting voltage over time, showing a steep initial climb that gradually levels off at the 5τ mark."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l04-f1",
          "front": "What is the time constant of an RC circuit?",
          "back": "τ = RC (seconds). After one time constant, the capacitor reaches ~63.2% of its final voltage. After 5τ it is ~99.3% charged."
        },
        {
          "id": "electrical-engineering-101-l04-f2",
          "front": "How does an inductor respond to a sudden change in current?",
          "back": "It generates a back-EMF (v = L di/dt) that opposes the change. Current through an inductor cannot change instantaneously."
        },
        {
          "id": "electrical-engineering-101-l04-f3",
          "front": "What energy does a capacitor store and in what form?",
          "back": "E = ½CV², stored in the electric field between its plates."
        },
        {
          "id": "electrical-engineering-101-l04-f4",
          "front": "Why do capacitors block DC but pass AC?",
          "back": "Once fully charged, no more current flows (DC blocked). AC continuously changes polarity, so charge flows on and off the plates, effectively passing the signal."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l04-a1",
          "type": "animation",
          "title": "RC Charging Curve",
          "content": "Animated exponential curve showing capacitor voltage rising from 0 to V_s, marking 1τ (63.2%), 3τ (95%), and 5τ (99.3%)."
        },
        {
          "id": "electrical-engineering-101-l04-a2",
          "type": "image",
          "title": "Capacitor vs Inductor Comparison",
          "content": "Two-column chart comparing: stores energy in E-field vs B-field, opposes voltage change vs current change, blocks DC vs passes DC."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l05",
      "title": "AC Circuit Fundamentals",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe sinusoidal voltage in terms of amplitude, frequency, and phase",
        "Calculate RMS values for voltage and current",
        "Define impedance and distinguish it from resistance",
        "Use phasor diagrams to represent AC quantities"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l05-c1",
          "title": "Sinusoidal Signals",
          "kind": "concept",
          "content": "Alternating current (AC) periodically reverses direction, unlike the one-way flow of DC. The most common AC waveform is a sine wave, described mathematically as v(t) = V_peak × sin(2πft + φ). Here, V_peak is the maximum voltage, f is the frequency in hertz (Hz), and φ is the phase angle. The period (T) is the time for one complete cycle, calculated as T = 1/f. For example, a 60 Hz power grid has a period of about 16.7 milliseconds. AC is the global standard for power grids because its voltage can be easily stepped up or down using transformers, minimizing energy loss when transmitting electricity over long distances.",
          "visualPrompt": "A rotating generator coil producing a smooth sine wave on a graph, with labels for V_peak, period (T), and frequency."
        },
        {
          "id": "electrical-engineering-101-l05-c2",
          "title": "RMS Values and Power",
          "kind": "concept",
          "content": "Because AC voltage is constantly changing, we can't just use its peak value to calculate power. Instead, we use the Root-Mean-Square (RMS) value. The RMS value is the equivalent DC voltage that would deliver the exact same average power to a resistor. For a sine wave, V_rms = V_peak / √2 (about 0.707 × V_peak). When you plug into a '120V' wall outlet, 120V is the RMS value; the actual peak is around 170V! In AC circuits with capacitors or inductors, power gets complicated. We have 'apparent power' (measured in VA) and 'real power' (measured in Watts). The ratio between them is the power factor (cos φ). A high power factor means the circuit is using energy efficiently.",
          "visualPrompt": "A sine wave with a shaded area representing peak power, and a solid horizontal line cutting through at 0.707 to represent the RMS (DC equivalent) value."
        },
        {
          "id": "electrical-engineering-101-l05-c3",
          "title": "Impedance and Phasors",
          "kind": "concept",
          "content": "Impedance (Z) is the AC equivalent of resistance. While resistors simply resist current (Z_R = R), capacitors and inductors react to the frequency of the AC signal. This reaction is called reactance. A capacitor's impedance is Z_C = 1/(jωC), meaning it blocks low frequencies but passes high frequencies. An inductor's impedance is Z_L = jωL, meaning it passes low frequencies but blocks high ones. Because these components cause the voltage and current to fall out of sync, we use 'phasors'—rotating vectors—to visualize them. In an inductor, voltage leads current by 90°. In a capacitor, current leads voltage by 90°. Phasor diagrams help engineers easily add these out-of-phase signals together.",
          "visualPrompt": "A rotating phasor arrow on a complex plane, projecting a sine wave, with R, L, and C vectors showing their 90-degree phase differences."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l05-f1",
          "front": "How do you convert peak voltage to RMS?",
          "back": "V_rms = V_peak / √2 ≈ 0.707 × V_peak. This gives the DC-equivalent value for power calculations."
        },
        {
          "id": "electrical-engineering-101-l05-f2",
          "front": "What is impedance?",
          "back": "The AC equivalent of resistance, combining resistance and reactance: Z = R + jX, measured in ohms. It has both magnitude and phase angle."
        },
        {
          "id": "electrical-engineering-101-l05-f3",
          "front": "How does inductor voltage relate to current in phasor form?",
          "back": "Voltage across an inductor leads the current by 90°. Remembered by the mnemonic 'ELI the ICE man' (E leads I in L; I leads E in C)."
        },
        {
          "id": "electrical-engineering-101-l05-f4",
          "front": "What is power factor?",
          "back": "cos(φ), where φ is the phase angle between voltage and current. It indicates the fraction of apparent power (VA) that does real work (W). Unity power factor (cos φ = 1) means all power is real."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-101-l05-a1",
          "type": "matching_pairs",
          "title": "AC Quantities Matching",
          "description": "Match each AC concept to its correct definition or formula.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "p1",
                "text": "Impedance of a capacitor"
              },
              {
                "id": "p2",
                "text": "Impedance of an inductor"
              },
              {
                "id": "p3",
                "text": "RMS voltage"
              },
              {
                "id": "p4",
                "text": "Period"
              },
              {
                "id": "p5",
                "text": "Power factor"
              },
              {
                "id": "p6",
                "text": "Angular frequency"
              }
            ],
            "right": [
              {
                "id": "p1",
                "text": "1 / (jωC)"
              },
              {
                "id": "p2",
                "text": "jωL"
              },
              {
                "id": "p3",
                "text": "V_peak / √2"
              },
              {
                "id": "p4",
                "text": "T = 1/f"
              },
              {
                "id": "p5",
                "text": "cos(φ)"
              },
              {
                "id": "p6",
                "text": "ω = 2πf"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l05-a2",
          "type": "practice",
          "title": "Phasor Diagram Sketch",
          "content": "Draw the phasor diagram for a series RLC circuit driven at resonance (X_L = X_C). Show where V_R, V_L, and V_C point and explain why total voltage equals V_R at resonance."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l06",
      "title": "Energy Storage & AC Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "apply": 2,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "electrical-engineering-101-l06-q1",
          "text": "An RC circuit has R = 10 kΩ and C = 100 μF. What is the time constant?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.001 s"
            },
            {
              "id": "b",
              "text": "0.1 s"
            },
            {
              "id": "c",
              "text": "1 s"
            },
            {
              "id": "d",
              "text": "10 s"
            }
          ],
          "correctOptionId": "c",
          "explanation": "τ = RC = 10,000 Ω × 100 × 10⁻⁶ F = 1 s."
        },
        {
          "id": "electrical-engineering-101-l06-q2",
          "text": "What is the RMS voltage of a sinusoidal source with a peak voltage of 340 V?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "170 V"
            },
            {
              "id": "b",
              "text": "240 V"
            },
            {
              "id": "c",
              "text": "340 V"
            },
            {
              "id": "d",
              "text": "480 V"
            }
          ],
          "correctOptionId": "b",
          "explanation": "V_rms = V_peak / √2 = 340 / 1.414 ≈ 240 V. This is the standard European mains voltage."
        },
        {
          "id": "electrical-engineering-101-l06-q3",
          "text": "Which component opposes changes in current and stores energy in a magnetic field?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Resistor"
            },
            {
              "id": "b",
              "text": "Capacitor"
            },
            {
              "id": "c",
              "text": "Inductor"
            },
            {
              "id": "d",
              "text": "Diode"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An inductor stores energy as E = ½LI² in its magnetic field and opposes current changes via v = L(di/dt)."
        },
        {
          "id": "electrical-engineering-101-l06-q4",
          "text": "In a phasor diagram, the voltage across a capacitor _____ the current by 90°.",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "leads"
            },
            {
              "id": "b",
              "text": "lags"
            },
            {
              "id": "c",
              "text": "is in phase with"
            },
            {
              "id": "d",
              "text": "is 180° out of phase with"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In a capacitor, current leads voltage (or equivalently, voltage lags current) by 90°. Mnemonic: 'ICE' — I leads E in C."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l06-a1",
          "type": "mnemonic",
          "title": "ELI the ICE man",
          "content": "ELI: in an inductor (L), voltage (E) leads current (I). ICE: in a capacitor (C), current (I) leads voltage (E)."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l07",
      "title": "Semiconductors and Diodes",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Describe the crystal structure and doping of silicon",
        "Explain p-n junction formation and the depletion region",
        "Distinguish forward bias from reverse bias in a diode",
        "Identify common diode applications: rectification and LEDs"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l07-c1",
          "title": "Semiconductor Basics",
          "kind": "concept",
          "content": "Silicon is the foundational material of modern electronics. In its pure form, silicon atoms bond in a rigid diamond-cubic lattice, making it a poor conductor. To make it useful, we 'dope' it by adding tiny amounts of impurities. If we add phosphorus, which has five outer electrons, we get an extra, free-roaming electron. This creates 'n-type' silicon (n for negative). If we add boron, which has only three outer electrons, it leaves a missing electron, or a 'hole'. This creates 'p-type' silicon (p for positive). By carefully arranging n-type and p-type silicon, we can create components that control the flow of electricity in incredible ways.",
          "visualPrompt": "A 3D diamond-cubic lattice of silicon atoms, showing a phosphorus atom (n-type) donating an electron, and a boron atom (p-type) creating a hole."
        },
        {
          "id": "electrical-engineering-101-l07-c2",
          "title": "P-N Junctions and Diodes",
          "kind": "concept",
          "content": "When p-type and n-type silicon are joined, they form a p-n junction—the core of a diode. At the junction, free electrons from the n-side fall into the holes on the p-side. This creates a 'depletion region' with no free charges, acting as a barrier. To push current through this barrier, we must apply a forward voltage (about 0.7V for silicon). This is called 'forward bias', and it allows current to flow freely. If we reverse the voltage ('reverse bias'), the depletion region widens, blocking the current entirely. This makes the diode a one-way valve for electricity, a property essential for converting AC power into DC power.",
          "visualPrompt": "A p-n junction showing electrons and holes combining in the middle to form a grayed-out 'depletion region' barrier."
        },
        {
          "id": "electrical-engineering-101-l07-c3",
          "title": "Rectification and LEDs",
          "kind": "example",
          "content": "Diodes have many practical applications. A rectifier uses diodes to convert AC to DC. A half-wave rectifier uses one diode to chop off the negative half of the AC wave. A full-wave bridge rectifier uses four diodes to flip the negative half upward, creating a smoother, pulsing DC that can be flattened out with a capacitor. Another famous application is the Light-Emitting Diode (LED). When forward-biased, electrons and holes recombine at the junction, releasing energy as photons (light). The color of the LED depends on the semiconductor material's 'bandgap'. Gallium nitride produces blue light, while gallium arsenide produces red. LEDs are vastly more efficient than traditional incandescent bulbs.",
          "visualPrompt": "An animated bridge rectifier with four diodes, highlighting the current path in red during the positive half-cycle and blue during the negative half-cycle, producing a pulsing DC wave."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l07-f1",
          "front": "What is n-type doping?",
          "back": "Adding pentavalent impurity atoms (e.g., phosphorus) to silicon. Each dopant atom contributes one extra electron, making electrons the majority carriers."
        },
        {
          "id": "electrical-engineering-101-l07-f2",
          "front": "What is the forward-bias voltage drop of a silicon diode?",
          "back": "Approximately 0.7 V. Once forward voltage exceeds this threshold, the diode conducts freely."
        },
        {
          "id": "electrical-engineering-101-l07-f3",
          "front": "How does a full-wave bridge rectifier work?",
          "back": "Four diodes arranged so that both halves of the AC input produce current in the same direction through the load, yielding smoother DC than a half-wave rectifier."
        },
        {
          "id": "electrical-engineering-101-l07-f4",
          "front": "What determines the color of an LED?",
          "back": "The bandgap energy of the semiconductor material. Larger bandgaps (e.g., GaN ≈ 3.4 eV) produce shorter-wavelength blue/violet light; smaller bandgaps produce red/infrared."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l07-a1",
          "type": "image",
          "title": "P-N Junction Diagram",
          "content": "Cross-section showing p-type (holes) on the left, n-type (electrons) on the right, and the depletion region in the center with its built-in electric field pointing from n to p."
        },
        {
          "id": "electrical-engineering-101-l07-a2",
          "type": "animation",
          "title": "Bridge Rectifier Operation",
          "content": "Step-by-step animation showing how the four diodes steer current through the load in the same direction during both positive and negative AC half-cycles."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l08",
      "title": "Transistors and Digital Logic",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain the operation of a BJT as a current-controlled switch",
        "Explain the operation of a MOSFET as a voltage-controlled switch",
        "Construct AND, OR, and NOT gates from transistors",
        "Trace logic levels through a simple combinational circuit"
      ],
      "chunks": [
        {
          "id": "electrical-engineering-101-l08-c1",
          "title": "Bipolar Junction Transistors (BJTs)",
          "kind": "concept",
          "content": "A Bipolar Junction Transistor (BJT) is a three-layer semiconductor device (like NPN or PNP) that acts as an electrically controlled switch or amplifier. In an NPN transistor, the three terminals are the base, collector, and emitter. By feeding a tiny current into the base, you can control a much larger current flowing from the collector to the emitter. The ratio of these currents is the gain, or β (beta). If you push enough current into the base, the transistor fully turns on ('saturation'), acting like a closed switch. If you remove the base current, it fully turns off ('cutoff'), acting like an open switch. This switching ability is the foundation of digital electronics.",
          "visualPrompt": "A water valve analogy for an NPN transistor, where a small trickle of water (base current) opens a large gate for a massive flow of water (collector current)."
        },
        {
          "id": "electrical-engineering-101-l08-c2",
          "title": "MOSFETs",
          "kind": "concept",
          "content": "While BJTs are controlled by current, Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) are controlled by voltage. A MOSFET has a gate, drain, and source. Applying a voltage to the gate creates an electric field that pulls charge carriers into a channel, allowing current to flow between the drain and source. Because the gate is insulated by a thin layer of oxide, it draws virtually zero continuous current. This makes MOSFETs incredibly energy-efficient. Modern computer chips use a technology called CMOS (Complementary MOS), which pairs n-channel and p-channel MOSFETs. In CMOS, one transistor is always off, meaning the circuit only consumes power when switching states. This is how billions of transistors can fit on a single chip without melting.",
          "visualPrompt": "A cross-section of a MOSFET showing a positive voltage applied to the gate, pulling electrons up to form a conductive channel between the source and drain."
        },
        {
          "id": "electrical-engineering-101-l08-c3",
          "title": "Basic Logic Gates",
          "kind": "example",
          "content": "By wiring transistors together, we create logic gates—the building blocks of digital computation. A NOT gate (inverter) outputs the opposite of its input: a high voltage (1) becomes a low voltage (0). A NAND gate outputs 0 only if both inputs are 1. A NOR gate outputs 0 if any input is 1. NAND and NOR gates are incredibly special because they are 'universal gates'. This means you can build any other logic gate, and therefore any digital circuit, using only NAND or only NOR gates. By combining thousands or millions of these simple gates, engineers build complex circuits like memory modules, arithmetic logic units, and the CPUs that power our computers and smartphones.",
          "visualPrompt": "Animated logic gate symbols (NOT, NAND, NOR) with glowing inputs (0s and 1s) and corresponding outputs, demonstrating their truth tables."
        }
      ],
      "flashcards": [
        {
          "id": "electrical-engineering-101-l08-f1",
          "front": "What is the key difference between a BJT and a MOSFET?",
          "back": "A BJT is current-controlled (base current sets collector current). A MOSFET is voltage-controlled (gate voltage creates the channel). MOSFETs draw virtually no gate current."
        },
        {
          "id": "electrical-engineering-101-l08-f2",
          "front": "What does β (beta) represent in a BJT?",
          "back": "Current gain: β = I_C / I_B. A small base current controls a much larger collector current. Typical values are 50–300."
        },
        {
          "id": "electrical-engineering-101-l08-f3",
          "front": "Why are NAND and NOR called 'universal' gates?",
          "back": "Any Boolean logic function (AND, OR, NOT, XOR, etc.) can be implemented using only NAND gates or only NOR gates."
        },
        {
          "id": "electrical-engineering-101-l08-f4",
          "front": "Why does CMOS logic consume very low static power?",
          "back": "In CMOS, complementary n-channel and p-channel MOSFETs ensure one transistor is always off in each logic state, so negligible current flows through the circuit at rest."
        }
      ],
      "interactiveActivities": [
        {
          "id": "electrical-engineering-101-l08-a1",
          "type": "sorting_buckets",
          "title": "BJT vs MOSFET Properties",
          "description": "Sort each characteristic to the correct transistor type.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "bjt",
                "label": "BJT"
              },
              {
                "id": "mosfet",
                "label": "MOSFET"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Current-controlled device",
                "correctBucketId": "bjt"
              },
              {
                "id": "i2",
                "label": "Voltage-controlled device",
                "correctBucketId": "mosfet"
              },
              {
                "id": "i3",
                "label": "Has base, collector, emitter terminals",
                "correctBucketId": "bjt"
              },
              {
                "id": "i4",
                "label": "Has gate, drain, source terminals",
                "correctBucketId": "mosfet"
              },
              {
                "id": "i5",
                "label": "Draws significant input current",
                "correctBucketId": "bjt"
              },
              {
                "id": "i6",
                "label": "Virtually zero gate current",
                "correctBucketId": "mosfet"
              },
              {
                "id": "i7",
                "label": "Preferred for high-density ICs (CMOS)",
                "correctBucketId": "mosfet"
              },
              {
                "id": "i8",
                "label": "Gain described by β = I_C / I_B",
                "correctBucketId": "bjt"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l08-a2",
          "type": "practice",
          "title": "Logic Gate Truth Table Exercise",
          "content": "Complete truth tables for 2-input AND, OR, NAND, and NOR gates. Then show how to build an AND gate using only NAND gates (hint: two NAND gates)."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l09",
      "title": "Semiconductors & Logic Checkpoint",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 1,
          "apply": 1
        }
      },
      "questions": [
        {
          "id": "electrical-engineering-101-l09-q1",
          "text": "What type of doping creates 'holes' as majority carriers?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "n-type (pentavalent dopant)"
            },
            {
              "id": "b",
              "text": "p-type (trivalent dopant)"
            },
            {
              "id": "c",
              "text": "Intrinsic (no dopant)"
            },
            {
              "id": "d",
              "text": "Metallic doping"
            }
          ],
          "correctOptionId": "b",
          "explanation": "P-type doping uses trivalent atoms like boron. Each boron atom has only three valence electrons, creating a 'hole' that acts as a positive charge carrier in the silicon lattice."
        },
        {
          "id": "electrical-engineering-101-l09-q2",
          "text": "A silicon diode is forward-biased. What is the approximate voltage drop across it?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0 V"
            },
            {
              "id": "b",
              "text": "0.3 V"
            },
            {
              "id": "c",
              "text": "0.7 V"
            },
            {
              "id": "d",
              "text": "5 V"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The built-in potential of a silicon p-n junction is approximately 0.7 V (germanium is ~0.3 V). This must be exceeded for significant current to flow."
        },
        {
          "id": "electrical-engineering-101-l09-q3",
          "text": "Which gate outputs LOW only when BOTH inputs are HIGH?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "AND"
            },
            {
              "id": "b",
              "text": "OR"
            },
            {
              "id": "c",
              "text": "NAND"
            },
            {
              "id": "d",
              "text": "NOR"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A NAND gate outputs HIGH for all input combinations except when both inputs are HIGH. It is the complement of AND."
        },
        {
          "id": "electrical-engineering-101-l09-q4",
          "text": "Why is CMOS technology preferred for modern processors?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It uses only NPN transistors"
            },
            {
              "id": "b",
              "text": "Its complementary transistor pairs minimize static power dissipation"
            },
            {
              "id": "c",
              "text": "It requires no voltage supply"
            },
            {
              "id": "d",
              "text": "It can only build NOT gates"
            }
          ],
          "correctOptionId": "b",
          "explanation": "CMOS pairs n-channel and p-channel MOSFETs. In any stable logic state one transistor is off, so almost no static current flows, enabling billions of transistors with manageable power."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l09-a1",
          "type": "mnemonic",
          "title": "NPN vs PNP Quick Check",
          "content": "NPN: 'Not Pointing iN' — the arrow on the emitter points outward. PNP: 'Pointing iN Proudly' — the arrow points inward toward the base."
        }
      ]
    },
    {
      "id": "electrical-engineering-101-l10",
      "title": "Mastery Quiz: EE Foundations",
      "type": "quiz",
      "duration": 12,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "apply": 2,
          "analyze": 1,
          "evaluate": 1
        }
      },
      "questions": [
        {
          "id": "electrical-engineering-101-l10-q1",
          "text": "A 50 Ω resistor and a capacitor with reactance X_C = 50 Ω are in series across a 100 V_rms AC source. What is the magnitude of the impedance?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0 Ω"
            },
            {
              "id": "b",
              "text": "50 Ω"
            },
            {
              "id": "c",
              "text": "70.7 Ω"
            },
            {
              "id": "d",
              "text": "100 Ω"
            }
          ],
          "correctOptionId": "c",
          "explanation": "|Z| = √(R² + X_C²) = √(50² + 50²) = √5000 ≈ 70.7 Ω. Resistance and reactance add as vectors, not arithmetically."
        },
        {
          "id": "electrical-engineering-101-l10-q2",
          "text": "In a full-wave bridge rectifier, how many diodes conduct during each half-cycle of the AC input?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1"
            },
            {
              "id": "b",
              "text": "2"
            },
            {
              "id": "c",
              "text": "3"
            },
            {
              "id": "d",
              "text": "4"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In each half-cycle, two diodes are forward-biased and conduct while the other two are reverse-biased. This steers both halves through the load in the same direction."
        },
        {
          "id": "electrical-engineering-101-l10-q3",
          "text": "A MOSFET's gate-source voltage is below threshold. What is the state of the device?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Saturation — maximum current flows"
            },
            {
              "id": "b",
              "text": "Ohmic region — behaves as a variable resistor"
            },
            {
              "id": "c",
              "text": "Cutoff — no channel, no drain current"
            },
            {
              "id": "d",
              "text": "Breakdown — destructive current flows"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When V_GS < V_th for an enhancement-mode MOSFET, no inversion layer forms and the transistor is in cutoff — effectively an open switch with zero drain current."
        },
        {
          "id": "electrical-engineering-101-l10-q4",
          "text": "An RL circuit has R = 200 Ω and L = 0.4 H. How long does it take to reach approximately 63% of its final current after a step input?",
          "skillId": "electrical-engineering-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "0.002 s"
            },
            {
              "id": "b",
              "text": "0.02 s"
            },
            {
              "id": "c",
              "text": "0.2 s"
            },
            {
              "id": "d",
              "text": "80 s"
            }
          ],
          "correctOptionId": "a",
          "explanation": "τ = L/R = 0.4 H / 200 Ω = 0.002 s (2 ms). After one time constant the current reaches ~63.2% of V_s/R."
        }
      ],
      "learningAids": [
        {
          "id": "electrical-engineering-101-l10-a1",
          "type": "mnemonic",
          "title": "Impedance Magnitude Formula",
          "content": "|Z| = √(R² + (X_L − X_C)²). Think of R and net reactance as the two sides of a right triangle — impedance is the hypotenuse."
        }
      ]
    }
  ]
};
