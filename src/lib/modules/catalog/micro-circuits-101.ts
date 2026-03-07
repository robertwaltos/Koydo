import type { LearningModule } from "@/lib/modules/types";

export const micro_circuits_101_Module: LearningModule = {
  "id": "micro-circuits-101",
  "title": "Micro-Circuits and PCB Design",
  "description": "Learn the fundamentals of electronic circuit design, from passive and active components through circuit analysis and signal conditioning to PCB layout, prototyping, and testing with real-world instruments.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "engineering",
    "circuits"
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
    "Identify passive components — resistors, capacitors, and inductors — and interpret their ratings, tolerances, and standard marking systems including resistor color codes",
    "Explain the operating principles of active components including diodes, BJTs, MOSFETs, op-amps, and linear voltage regulators",
    "Apply Thevenin and Norton equivalent circuits, mesh analysis, and nodal analysis to solve DC and low-frequency AC networks",
    "Design and analyze passive filters (low-pass, high-pass, band-pass) and describe amplifier gain, ADC resolution, and DAC reconstruction",
    "Demonstrate proficiency in the PCB design workflow, including schematic capture, component footprints, trace width calculation, via selection, and ground plane strategy",
    "Use breadboards, multimeters, and oscilloscopes to prototype, debug, and validate electronic circuits before PCB fabrication",
    "Synthesize component selection, analysis, and layout skills through integrated checkpoint and mastery assessments"
  ],
  "lessons": [
    {
      "id": "micro-circuits-101-l01",
      "title": "Passive Components",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Read 4-band and 5-band resistor color codes and calculate resistance values with tolerance",
        "Compare ceramic, electrolytic, and film capacitors by ESR, voltage rating, and application",
        "Describe inductor behavior in DC and AC circuits and identify common core materials"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l01-c1",
          "title": "Resistors: Color Codes and Power Ratings",
          "content": "Resistors are fundamental components that control the flow of electric current. Their resistance value is often identified by a series of color bands. In a standard 4-band code, the first two bands represent significant digits, the third is a multiplier, and the fourth indicates tolerance. For example, a resistor with brown, black, orange, and gold bands has a value of 10 kΩ (10 × 1,000 Ω) with a ±5% tolerance. 5-band resistors add a third significant digit for higher precision. Another key specification is the power rating (e.g., 1/8 W, 1/4 W), which defines the maximum heat a resistor can safely dissipate. Exceeding this rating can cause overheating and failure. Smaller surface-mount device (SMD) resistors use a numeric code (e.g., '472' for 4.7 kΩ) and are categorized by package sizes like 0402, 0603, and 0805."
        },
        {
          "id": "micro-circuits-101-l01-c2",
          "title": "Capacitors: Types and Characteristics",
          "content": "Capacitors store electrical energy in an electric field between two conductive plates separated by a dielectric insulator. Common types include ceramic, electrolytic, and film capacitors. Ceramic capacitors are small and stable, with Class 1 (C0G/NP0) types being ideal for high-frequency applications, while Class 2 (X7R/X5R) types offer higher capacitance but can be sensitive to DC voltage bias. Electrolytic capacitors (aluminum, tantalum) provide high capacitance (1 µF to thousands of µF) but are polarized, meaning they must be installed with correct polarity; they are often used for power supply filtering. Film capacitors (polyester, polypropylene) offer low equivalent series resistance (ESR) and good stability, making them suitable for audio and timing circuits. Key selection parameters include rated voltage (derate by at least 20%), capacitance tolerance, temperature coefficient, and ESR, which is critical in applications like switch-mode power supplies."
        },
        {
          "id": "micro-circuits-101-l01-c3",
          "title": "Inductors and Their Applications",
          "content": "Inductors store energy in a magnetic field created by current flowing through a coil of wire. Their inductance, measured in henries (H), depends on the number of coil turns, core material, and geometry. In DC circuits, an ideal inductor acts as a short circuit to steady current but resists changes in current according to the formula V = L × (dI/dt). In AC circuits, inductors exhibit inductive reactance, which increases with frequency, making them effective for filtering high-frequency noise. Core materials vary by application: ferrite cores are used for high frequencies, powdered iron for moderate frequencies with high saturation, and air cores for applications requiring no saturation but lower inductance. Common applications include LC filters, switch-mode power supplies, and EMI suppression. A key parameter is the saturation current, the maximum current an inductor can handle before its inductance drops significantly."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l01-f1",
          "front": "How do you read a 4-band resistor with bands brown-black-orange-gold?",
          "back": "Brown (1) Black (0) → 10, Orange multiplier (×1,000) = 10 kΩ, Gold tolerance = ±5%."
        },
        {
          "id": "micro-circuits-101-l01-f2",
          "front": "Why are electrolytic capacitors polarized, and what happens if they are reverse-biased?",
          "back": "Their thin oxide dielectric layer forms only on the anode. Reverse voltage breaks down this layer, causing excessive current, heating, and potentially violent failure."
        },
        {
          "id": "micro-circuits-101-l01-f3",
          "front": "What is ESR (Equivalent Series Resistance) in a capacitor, and why does it matter?",
          "back": "ESR is the effective internal resistance of a capacitor. High ESR causes power dissipation as heat and reduces filtering effectiveness, especially in switch-mode power supply output stages."
        },
        {
          "id": "micro-circuits-101-l01-f4",
          "front": "What does inductor saturation current mean?",
          "back": "It is the DC current at which the inductor's core magnetically saturates and its inductance drops significantly (typically by 20–30%), reducing its effectiveness."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l01-a1",
          "type": "image",
          "title": "Resistor Color Code Chart",
          "content": "A visual chart for reading 4-band and 5-band resistor color codes."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l02",
      "title": "Active Components",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe diode types and their forward voltage drops and applications",
        "Compare BJT and MOSFET transistors in terms of drive requirements and switching characteristics",
        "Explain the function of op-amps and linear voltage regulators such as the LM7805"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l02-c1",
          "title": "Diodes and Transistor Fundamentals",
          "content": "A diode is a two-terminal semiconductor device that allows current to flow primarily in one direction. Standard silicon diodes have a forward voltage drop of approximately 0.7 V. Schottky diodes, with a lower drop of 0.2–0.4 V, are more efficient in applications like power rectification and reverse-polarity protection. Zener diodes are designed to conduct in reverse when a specific breakdown voltage is reached, making them useful for voltage regulation. Light Emitting Diodes (LEDs) emit light when forward biased, with the color and forward voltage (e.g., ~1.8 V for red, ~3.2 V for white) determined by the semiconductor material. Bipolar Junction Transistors (BJTs) are current-controlled devices where a small base current (I_B) controls a larger collector current (I_C), defined by the relation I_C = β × I_B. The gain (β or h_FE) typically ranges from 50 to 300. NPN BJTs are more common than PNP types in switching and digital logic applications."
        },
        {
          "id": "micro-circuits-101-l02-c2",
          "title": "MOSFETs and Switching",
          "content": "Metal-Oxide-Semiconductor Field-Effect Transistors (MOSFETs) are voltage-controlled devices with very high input impedance, meaning they draw almost no gate current. An N-channel enhancement-mode MOSFET turns on when its gate-to-source voltage exceeds a threshold voltage (V_th), typically 1–4 V for logic-level devices. Compared to BJTs, MOSFETs require less drive power and can switch faster, making them dominant in power electronics and digital circuits. When fully on, a MOSFET's performance is characterized by its drain-to-source on-resistance, R_DS(on). Modern power MOSFETs can have R_DS(on) values below 10 mΩ, minimizing conduction losses. P-channel MOSFETs are often used for high-side switching applications. Key selection parameters include maximum drain-source voltage (V_DS(max)), maximum drain current (I_D(max)), R_DS(on), threshold voltage (V_th), and thermal resistance."
        },
        {
          "id": "micro-circuits-101-l02-c3",
          "title": "Op-Amps and Voltage Regulators",
          "content": "Operational amplifiers (op-amps) are high-gain differential amplifiers that are fundamental building blocks in analog circuits. An ideal op-amp has infinite gain, infinite input impedance, and zero output impedance. Real-world devices like the general-purpose LM358 or the high-fidelity OPA2134 approximate these characteristics. Using negative feedback, op-amps can be configured as inverting or non-inverting amplifiers, voltage followers, summing amplifiers, and active filters. Linear voltage regulators convert a higher, often unregulated, input voltage to a stable, lower output voltage. The classic LM7805 provides a fixed 5 V output but requires an input of at least 7 V due to its ~2 V dropout voltage. Low-dropout (LDO) regulators, like the AMS1117-3.3, have a much smaller dropout voltage, making them more efficient and ideal for battery-powered devices."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l02-f1",
          "front": "What is the typical forward voltage drop of a standard silicon diode versus a Schottky diode?",
          "back": "A standard silicon diode drops about 0.7 V; a Schottky diode drops only 0.2–0.4 V due to its metal–semiconductor junction."
        },
        {
          "id": "micro-circuits-101-l02-f2",
          "front": "How does a MOSFET differ from a BJT in terms of input drive?",
          "back": "A MOSFET is voltage-controlled (gate draws virtually no DC current), while a BJT is current-controlled (requires continuous base current to stay on)."
        },
        {
          "id": "micro-circuits-101-l02-f3",
          "front": "What is the gain formula for a non-inverting op-amp configuration?",
          "back": "Gain = 1 + (R_f / R_in), where R_f is the feedback resistor and R_in is the resistor from the inverting input to ground."
        },
        {
          "id": "micro-circuits-101-l02-f4",
          "front": "What is the minimum input voltage for an LM7805 voltage regulator to output a stable 5 V?",
          "back": "About 7 V — the LM7805 requires approximately 2 V of dropout headroom above its 5 V output."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Passive vs. Active Components",
          "description": "Sort each electronic component into the correct category based on whether it can amplify or control power.",
          "instructions": [
            "Drag each component into the bucket that best describes its classification."
          ],
          "buckets": [
            "Passive Component",
            "Active Component"
          ],
          "items": [
            {
              "text": "10 kΩ carbon film resistor",
              "bucket": "Passive Component"
            },
            {
              "text": "2N2222 NPN bipolar junction transistor",
              "bucket": "Active Component"
            },
            {
              "text": "100 µF aluminum electrolytic capacitor",
              "bucket": "Passive Component"
            },
            {
              "text": "IRF540N N-channel power MOSFET",
              "bucket": "Active Component"
            },
            {
              "text": "10 mH ferrite-core inductor",
              "bucket": "Passive Component"
            },
            {
              "text": "LM358 dual operational amplifier",
              "bucket": "Active Component"
            },
            {
              "text": "1N4148 small-signal silicon diode",
              "bucket": "Active Component"
            },
            {
              "text": "0.1 µF ceramic decoupling capacitor",
              "bucket": "Passive Component"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l02-a2",
          "type": "image",
          "title": "BJT vs. MOSFET Comparison",
          "content": "A table comparing the key characteristics of Bipolar Junction Transistors and MOSFETs, including drive type, switching speed, and common applications."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l03",
      "title": "Components Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "questions": [
        {
          "id": "micro-circuits-101-l03-q1",
          "text": "A resistor has bands: red, violet, orange, gold. What is its resistance and tolerance?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "27 kΩ ±5%"
            },
            {
              "id": "b",
              "text": "2.7 kΩ ±5%"
            },
            {
              "id": "c",
              "text": "270 kΩ ±10%"
            },
            {
              "id": "d",
              "text": "27 Ω ±5%"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Red (2) Violet (7) gives 27, the orange multiplier is ×1,000 = 27,000 Ω = 27 kΩ, and gold indicates ±5% tolerance."
        },
        {
          "id": "micro-circuits-101-l03-q2",
          "text": "Which capacitor type is polarized and typically offers the highest capacitance per unit volume?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Ceramic (X7R)"
            },
            {
              "id": "b",
              "text": "Film (polypropylene)"
            },
            {
              "id": "c",
              "text": "Aluminum electrolytic"
            },
            {
              "id": "d",
              "text": "Mica"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Aluminum electrolytic capacitors are polarized and use a very thin oxide dielectric, allowing capacitance values from 1 µF to thousands of µF in compact packages."
        },
        {
          "id": "micro-circuits-101-l03-q3",
          "text": "What parameter of a MOSFET determines its conduction losses when fully turned on?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Threshold voltage (V_th)"
            },
            {
              "id": "b",
              "text": "Gate charge (Q_g)"
            },
            {
              "id": "c",
              "text": "Drain-to-source on-resistance (R_DS(on))"
            },
            {
              "id": "d",
              "text": "Maximum gate-to-source voltage (V_GS(max))"
            }
          ],
          "correctOptionId": "c",
          "explanation": "R_DS(on) is the resistance between drain and source when the MOSFET is fully enhanced. Power dissipation during conduction equals I² × R_DS(on), so lower values mean less heat."
        },
        {
          "id": "micro-circuits-101-l03-q4",
          "text": "An LDO regulator has a dropout voltage of 300 mV and must output 3.3 V. What is the minimum input voltage?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "3.0 V"
            },
            {
              "id": "b",
              "text": "3.3 V"
            },
            {
              "id": "c",
              "text": "3.6 V"
            },
            {
              "id": "d",
              "text": "5.0 V"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The minimum input voltage equals the output voltage plus the dropout voltage: 3.3 V + 0.3 V = 3.6 V. Below this, the regulator cannot maintain regulation."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l04",
      "title": "Circuit Analysis Techniques",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Derive Thevenin and Norton equivalent circuits for linear networks",
        "Apply mesh (loop) analysis using Kirchhoff's voltage law to solve for unknown currents",
        "Use nodal analysis with Kirchhoff's current law to determine node voltages"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l04-c1",
          "title": "Thevenin and Norton Equivalents",
          "content": "Thevenin's and Norton's theorems are powerful tools for simplifying complex linear circuits. A Thevenin equivalent circuit represents any linear network as a single voltage source (V_th) in series with a single resistor (R_th). A Norton equivalent represents the same network as a single current source (I_N) in parallel with a resistor (R_N). To find the Thevenin voltage (V_th), calculate the open-circuit voltage at the terminals. To find the Thevenin resistance (R_th), deactivate all independent sources (short voltage sources, open current sources) and calculate the equivalent resistance from the terminals. The Norton current (I_N) is the short-circuit current at the terminals, and R_N is equal to R_th. These equivalents are related by I_N = V_th / R_th. These models are essential for analyzing amplifier outputs, impedance matching, and understanding the maximum power transfer theorem, which states that maximum power is delivered to a load when its resistance equals R_th."
        },
        {
          "id": "micro-circuits-101-l04-c2",
          "title": "Mesh Analysis",
          "content": "Mesh analysis is a systematic method for solving planar circuits based on Kirchhoff's Voltage Law (KVL), which states that the sum of all voltages around any closed loop is zero. The technique involves identifying independent loops, or 'meshes,' and assigning a mesh current to each, typically in a clockwise direction. For each mesh, a KVL equation is written by summing the voltage drops across all components in the loop, using Ohm's Law (V=IR). When a branch is shared by two meshes, the current through that branch is the difference between the two mesh currents. This process results in a system of N simultaneous linear equations for a circuit with N meshes, which can be solved using substitution, elimination, or matrix methods. If a current source lies on a shared branch, a 'supermesh' is formed by combining the two adjacent meshes, with the current source providing a constraint equation."
        },
        {
          "id": "micro-circuits-101-l04-c3",
          "title": "Nodal Analysis",
          "content": "Nodal analysis is a circuit analysis technique based on Kirchhoff's Current Law (KCL), which states that the sum of currents entering a node must equal the sum of currents leaving it. The first step is to select a reference node (usually ground, 0 V) and assign voltage variables to all other non-reference nodes. KCL equations are then written for each non-reference node, expressing the currents in terms of the node voltages and component resistances (or conductances, G=1/R). This method yields a system of linear equations that can be solved for the unknown node voltages. If a voltage source connects two non-reference nodes, a 'supernode' is created by treating the two nodes and the source as a single entity for the KCL equation, with the voltage source providing an additional constraint. Nodal analysis is particularly efficient for circuits with many parallel components or current sources."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l04-f1",
          "front": "How do you find the Thevenin resistance (R_th) of a linear network?",
          "back": "Deactivate all independent sources — short-circuit voltage sources and open-circuit current sources — then calculate the equivalent resistance seen from the output terminals."
        },
        {
          "id": "micro-circuits-101-l04-f2",
          "front": "What is the maximum power transfer theorem?",
          "back": "Maximum power is delivered to a load when the load resistance equals the source's Thevenin resistance. The maximum power is P = V_th² / (4 × R_th)."
        },
        {
          "id": "micro-circuits-101-l04-f3",
          "front": "When is a supermesh required in mesh analysis?",
          "back": "When a current source exists on a branch shared by two meshes. The two mesh equations are combined into one supermesh equation, and the current source constraint provides the missing equation."
        },
        {
          "id": "micro-circuits-101-l04-f4",
          "front": "State Kirchhoff's current law (KCL).",
          "back": "The algebraic sum of all currents entering (or leaving) any node in a circuit equals zero — charge is conserved at every junction."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l04-a1",
          "type": "image",
          "title": "Thevenin Equivalent Circuit",
          "content": "Diagram illustrating how a complex linear network can be simplified into a single voltage source and series resistor."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l05",
      "title": "Signal Conditioning",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Calculate cutoff frequencies for first-order RC low-pass and high-pass filters",
        "Explain inverting and non-inverting amplifier gain and bandwidth trade-offs",
        "Describe ADC resolution, sampling rate, and the Nyquist criterion"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l05-c1",
          "title": "Passive Filters: Low-Pass, High-Pass, Band-Pass",
          "content": "Passive filters use resistors, capacitors, and inductors to selectively pass or block certain signal frequencies. A first-order RC low-pass filter allows frequencies below its cutoff frequency (f_c) to pass while attenuating higher frequencies at a rate of -20 dB/decade. The cutoff frequency is calculated as f_c = 1 / (2πRC). Swapping the resistor and capacitor creates a high-pass filter with the same cutoff frequency formula. A band-pass filter, which passes a specific range of frequencies, can be created with an RLC circuit. Its center frequency is f₀ = 1 / (2π√(LC)), and its bandwidth is determined by the quality factor (Q), where Q is the ratio of center frequency to bandwidth. A higher Q results in a narrower, more selective passband. While simple and reliable, passive filters introduce signal loss (insertion loss) and do not provide gain."
        },
        {
          "id": "micro-circuits-101-l05-c2",
          "title": "Amplifier Gain and Active Filters",
          "content": "Active filters use operational amplifiers (op-amps) to provide gain, high input impedance, and low output impedance, overcoming the signal loss inherent in passive filters. A common second-order active low-pass filter is the Sallen-Key topology, which uses two RC stages with a non-inverting op-amp to achieve a steeper -40 dB/decade rolloff. An op-amp's performance is limited by its gain-bandwidth product (GBW). For a given op-amp, increasing the closed-loop gain decreases the usable bandwidth (e.g., an op-amp with a 1 MHz GBW configured for a gain of 100 will have a bandwidth of only 10 kHz). Different filter responses offer specific trade-offs: Butterworth filters provide a maximally flat passband, Chebyshev filters offer a steeper rolloff at the cost of passband ripple, and Bessel filters prioritize constant group delay for superior pulse response. For sensor signal conditioning, instrumentation amplifiers provide high-precision differential gain and excellent common-mode rejection."
        },
        {
          "id": "micro-circuits-101-l05-c3",
          "title": "ADC and DAC Basics",
          "content": "Analog-to-Digital Converters (ADCs) transform continuous analog signals into discrete digital values. The ADC's resolution, measured in bits, determines the number of discrete levels it can represent. A 10-bit ADC, for example, can resolve 2¹⁰ = 1,024 levels. For a 3.3 V reference, the voltage of one least significant bit (LSB) is 3.3 V / 1024 ≈ 3.22 mV. The Nyquist-Shannon sampling theorem states that the sampling rate must be at least twice the highest frequency in the analog signal to avoid aliasing, where high-frequency components impersonate lower frequencies. An anti-aliasing low-pass filter is typically placed before the ADC to remove frequencies above this limit. Digital-to-Analog Converters (DACs) perform the reverse operation, converting digital codes back into analog voltages. The output of a DAC is often a staircase waveform, which is smoothed by a reconstruction low-pass filter to produce a continuous analog signal."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l05-f1",
          "front": "What is the cutoff frequency formula for a first-order RC filter?",
          "back": "f_c = 1 / (2π × R × C). At this frequency, the output is −3 dB (≈70.7%) of the input amplitude."
        },
        {
          "id": "micro-circuits-101-l05-f2",
          "front": "What does the Nyquist–Shannon sampling theorem state?",
          "back": "The sampling rate must be at least twice the highest frequency component in the signal to accurately reconstruct it without aliasing."
        },
        {
          "id": "micro-circuits-101-l05-f3",
          "front": "How many discrete voltage levels can a 12-bit ADC resolve?",
          "back": "2¹² = 4,096 levels."
        },
        {
          "id": "micro-circuits-101-l05-f4",
          "front": "What is the gain-bandwidth product (GBW) trade-off in an op-amp?",
          "back": "GBW is constant for a given op-amp: increasing closed-loop gain proportionally decreases the usable bandwidth. For example, an op-amp with GBW = 1 MHz set to a gain of 10 has a bandwidth of 100 kHz."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-101-l05-a1",
          "type": "matching_pairs",
          "title": "Filter Types and Characteristics",
          "description": "Match each filter type or concept with its correct description.",
          "instructions": [
            "Connect each term on the left with its matching definition on the right."
          ],
          "pairs": [
            {
              "left": "Low-pass filter",
              "right": "Passes frequencies below the cutoff and attenuates those above"
            },
            {
              "left": "High-pass filter",
              "right": "Passes frequencies above the cutoff and attenuates those below"
            },
            {
              "left": "Band-pass filter",
              "right": "Passes a specific range of frequencies and rejects those outside the range"
            },
            {
              "left": "Quality factor (Q)",
              "right": "Ratio of center frequency to bandwidth — higher Q means narrower passband"
            },
            {
              "left": "Butterworth response",
              "right": "Maximally flat magnitude in the passband with no ripple"
            },
            {
              "left": "Anti-aliasing filter",
              "right": "Low-pass filter placed before an ADC to remove frequencies above half the sampling rate"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l05-a2",
          "type": "image",
          "title": "Filter Frequency Responses",
          "content": "Graphs showing the ideal frequency response curves for low-pass, high-pass, and band-pass filters."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l06",
      "title": "Analysis & Signals Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "questions": [
        {
          "id": "micro-circuits-101-l06-q1",
          "text": "A circuit has Thevenin voltage V_th = 12 V and Thevenin resistance R_th = 4 Ω. What load resistance receives maximum power, and how much power is delivered?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "4 Ω, receiving 9 W"
            },
            {
              "id": "b",
              "text": "8 Ω, receiving 4.5 W"
            },
            {
              "id": "c",
              "text": "4 Ω, receiving 36 W"
            },
            {
              "id": "d",
              "text": "2 Ω, receiving 8 W"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Maximum power transfer occurs when R_load = R_th = 4 Ω. Total current = 12 V / (4 Ω + 4 Ω) = 1.5 A. Power in load = I²R = (1.5 A)² × 4 Ω = 9 W. Alternatively, P_max = V_th² / (4 × R_th) = 144 / 16 = 9 W."
        },
        {
          "id": "micro-circuits-101-l06-q2",
          "text": "What does Kirchhoff's voltage law (KVL) state?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The total current entering a node equals the total current leaving it"
            },
            {
              "id": "b",
              "text": "The algebraic sum of all voltages around any closed loop is zero"
            },
            {
              "id": "c",
              "text": "Power dissipated by a resistor equals I²R"
            },
            {
              "id": "d",
              "text": "Voltage across a capacitor cannot change instantaneously"
            }
          ],
          "correctOptionId": "b",
          "explanation": "KVL states that the sum of all voltage rises and drops around any closed loop in a circuit equals zero, reflecting conservation of energy."
        },
        {
          "id": "micro-circuits-101-l06-q3",
          "text": "An RC low-pass filter uses R = 10 kΩ and C = 10 nF. What is the approximate cutoff frequency?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "159 Hz"
            },
            {
              "id": "b",
              "text": "1,592 Hz"
            },
            {
              "id": "c",
              "text": "15,923 Hz"
            },
            {
              "id": "d",
              "text": "159,235 Hz"
            }
          ],
          "correctOptionId": "b",
          "explanation": "f_c = 1 / (2π × R × C) = 1 / (2π × 10,000 Ω × 10 × 10⁻⁹ F) = 1 / (6.283 × 10⁻⁴) ≈ 1,592 Hz."
        },
        {
          "id": "micro-circuits-101-l06-q4",
          "text": "What is the minimum sampling rate needed to digitize a 20 kHz audio signal without aliasing?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "10 kHz"
            },
            {
              "id": "b",
              "text": "20 kHz"
            },
            {
              "id": "c",
              "text": "40 kHz"
            },
            {
              "id": "d",
              "text": "80 kHz"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Nyquist theorem requires sampling at a minimum of twice the highest signal frequency: 2 × 20 kHz = 40 kHz. CD audio uses 44.1 kHz for this reason."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l06-a1",
          "type": "mnemonic",
          "title": "Problem-Solving Strategy",
          "content": "For each problem, identify the knowns, determine the relevant formula or law, solve, and check if the answer is reasonable."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l07",
      "title": "PCB Design Fundamentals",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe the PCB design workflow from schematic capture through manufacturing output files",
        "Calculate trace widths for a given current using IPC-2221 guidelines",
        "Explain via types, ground planes, and design rule checks"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l07-c1",
          "title": "Schematic Capture and Component Footprints",
          "content": "The printed circuit board (PCB) design process begins with schematic capture, where a circuit diagram is created using EDA (Electronic Design Automation) software like KiCad, Altium Designer, or Eagle. Each schematic symbol represents a component and must be linked to a physical footprint. The footprint defines the copper pad layout, courtyard, and silkscreen outline on the PCB, conforming to industry standards like IPC-7351 and the component manufacturer's datasheet. Common component packages range from through-hole (e.g., DIP) to surface-mount (e.g., SOIC, QFP, BGA). After completing the schematic, an Electrical Rules Check (ERC) is performed to detect issues like unconnected pins, short circuits, or mismatched pin types. A well-annotated schematic, with clear reference designators (R1, C1, U1) and net names, is essential before proceeding to the layout stage."
        },
        {
          "id": "micro-circuits-101-l07-c2",
          "title": "Trace Width, Vias, and Layer Stackup",
          "content": "In PCB layout, copper traces act as wires connecting components. Trace width must be calculated based on the expected current, allowable temperature rise, and copper thickness, following guidelines like IPC-2221. For example, a 10 mil (0.254 mm) wide trace on an outer layer with 1 oz/ft² copper can typically carry 1 A with a 10°C temperature rise. Vias are plated holes that connect different layers. Through-hole vias pass through the entire board, blind vias connect an outer layer to an inner layer, and buried vias connect only inner layers. A standard 4-layer board stackup often includes top and bottom signal layers with dedicated inner ground and power planes. This configuration improves signal integrity and reduces electromagnetic interference (EMI). A Design Rules Check (DRC) is used to verify that the layout meets manufacturing constraints for minimum trace width, clearance, via size, and other critical parameters."
        },
        {
          "id": "micro-circuits-101-l07-c3",
          "title": "Ground Planes and Manufacturing Outputs",
          "content": "A continuous ground plane is critical for PCB performance. It provides a low-impedance return path for signals, reduces electromagnetic interference (EMI), and aids in heat dissipation. Splits or slots in the ground plane under signal traces should be avoided, as they force return currents to take longer paths, increasing inductance and creating noise. To ensure a stable power supply for integrated circuits (ICs), decoupling capacitors (typically 100 nF ceramic) must be placed as close as possible to each IC's power pins, connected to the ground plane with short, wide traces. Once the layout is complete, manufacturing output files are generated. These include Gerber files (RS-274X format) for each copper, solder mask, and silkscreen layer; an Excellon drill file for hole locations and sizes; and a Bill of Materials (BOM) and centroid (pick-and-place) file for automated assembly. A final review should verify details like thermal reliefs, fiducial markers, and board dimensions."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l07-f1",
          "front": "What is a component footprint (land pattern) in PCB design?",
          "back": "A footprint defines the physical copper pad layout, courtyard area, and silkscreen outline that a component occupies on the PCB, matching the manufacturer's package dimensions."
        },
        {
          "id": "micro-circuits-101-l07-f2",
          "front": "Name the three types of PCB vias.",
          "back": "Through-hole vias (drill through all layers), blind vias (connect an outer layer to inner layers), and buried vias (connect only inner layers, not visible from outside)."
        },
        {
          "id": "micro-circuits-101-l07-f3",
          "front": "Why is an unbroken ground plane important for signal integrity?",
          "back": "It provides a low-impedance return path directly beneath signal traces, minimizing loop area, reducing EMI, and ensuring controlled impedance for high-speed signals."
        },
        {
          "id": "micro-circuits-101-l07-f4",
          "front": "What file format is used to define PCB copper layers for manufacturing?",
          "back": "Gerber files (RS-274X format) define each layer — copper, solder mask, silkscreen, and board outline — and are the industry standard for PCB fabrication."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l07-a1",
          "type": "image",
          "title": "PCB Layer Stackup",
          "content": "Diagram showing a standard 4-layer PCB stackup with signal, ground, and power planes."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l08",
      "title": "Prototyping and Testing",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Build circuits on a solderless breadboard following standard power bus and signal routing practices",
        "Use a digital multimeter to measure voltage, current, resistance, and continuity",
        "Interpret oscilloscope waveforms to verify signal frequency, amplitude, and timing"
      ],
      "chunks": [
        {
          "id": "micro-circuits-101-l08-c1",
          "title": "Breadboarding Techniques",
          "content": "Solderless breadboards are ideal for rapidly prototyping circuits. A standard breadboard consists of terminal strips (rows of five interconnected tie-points) and power bus strips running along the sides. For effective prototyping, connect the power supply to the bus strips and bridge them at multiple points for low-resistance distribution. Keep jumper wires short and organized to minimize parasitic inductance and noise pickup. Use a color-coding convention (e.g., red for V+, black for ground) to simplify wiring and troubleshooting. Integrated circuits (ICs) should be placed straddling the central channel, giving each pin its own terminal strip. Place 100 nF decoupling capacitors close to the power pins of each IC to filter noise. While breadboards are suitable for frequencies up to about 10 MHz, higher-frequency circuits may require more robust prototyping methods like stripboard or direct soldering on a copper ground plane."
        },
        {
          "id": "micro-circuits-101-l08-c2",
          "title": "Multimeter and Continuity Testing",
          "content": "The digital multimeter (DMM) is an essential tool for circuit testing. In DC voltage mode, it measures the potential difference between two points; connect the probes in parallel with the component. In AC voltage mode, it typically displays the Root Mean Square (RMS) value. To measure current, the circuit must be broken and the DMM connected in series, allowing the current to flow through it. An ammeter has very low impedance, so connecting it in parallel across a voltage source will create a short circuit and likely blow the meter's fuse. In resistance mode, the DMM applies a small test current to measure resistance; for accuracy, the component should be unpowered and isolated from the circuit. Continuity mode provides an audible beep for low-resistance connections (<50 Ω), useful for verifying solder joints and finding shorts. Diode mode measures the forward voltage drop across a semiconductor junction."
        },
        {
          "id": "micro-circuits-101-l08-c3",
          "title": "Using the Oscilloscope and Power Supply",
          "content": "An oscilloscope visualizes how voltage changes over time, allowing analysis of AC signals, digital waveforms, and transients. Key controls include the vertical scale (Volts/division), horizontal scale (time/division), and trigger. The trigger function stabilizes repetitive waveforms by starting each horizontal sweep at the same voltage level on the signal. An oscilloscope's bandwidth specifies the frequency at which a displayed signal's amplitude is attenuated to -3 dB (70.7%). To accurately capture a signal's shape, especially the harmonics of a square wave, the oscilloscope's bandwidth should be at least five times the signal's fundamental frequency (the 5× rule). For powering prototypes, a benchtop linear power supply provides clean, low-noise DC power. Its adjustable voltage and current-limiting features are critical for protecting circuits. Set the current limit just above the circuit's expected draw to prevent damage from accidental short circuits."
        }
      ],
      "flashcards": [
        {
          "id": "micro-circuits-101-l08-f1",
          "front": "Why should you keep jumper wires short on a breadboard?",
          "back": "Short wires minimize parasitic inductance and reduce the antenna effect, which can cause signal ringing, oscillation, and noise pickup — especially at higher frequencies."
        },
        {
          "id": "micro-circuits-101-l08-f2",
          "front": "Why must a multimeter be connected in series to measure current?",
          "back": "An ammeter has very low internal resistance. Connecting it in parallel across a voltage source creates a near short circuit, which can blow the meter's fuse or damage the circuit."
        },
        {
          "id": "micro-circuits-101-l08-f3",
          "front": "What is the purpose of the trigger function on an oscilloscope?",
          "back": "The trigger starts each horizontal sweep at the same point on the signal, stabilizing the display so repetitive waveforms appear as a steady, readable trace."
        },
        {
          "id": "micro-circuits-101-l08-f4",
          "front": "What is the 5× bandwidth rule for oscilloscopes?",
          "back": "An oscilloscope should have at least 5 times the bandwidth of the highest frequency being measured to accurately display signal shape, especially the harmonics in square waves."
        }
      ],
      "interactiveActivities": [
        {
          "id": "micro-circuits-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Test Instrument Capabilities",
          "description": "Sort each measurement task into the instrument best suited to perform it.",
          "instructions": [
            "Drag each task into the bucket for the instrument most appropriate for that measurement."
          ],
          "buckets": [
            "Digital Multimeter",
            "Oscilloscope",
            "Benchtop Power Supply"
          ],
          "items": [
            {
              "text": "Checking if a solder joint is electrically connected",
              "bucket": "Digital Multimeter"
            },
            {
              "text": "Viewing the shape of a 1 MHz PWM signal",
              "bucket": "Oscilloscope"
            },
            {
              "text": "Providing adjustable voltage with a 500 mA current limit",
              "bucket": "Benchtop Power Supply"
            },
            {
              "text": "Reading the DC resistance of a 4.7 kΩ resistor",
              "bucket": "Digital Multimeter"
            },
            {
              "text": "Measuring the rise time of a digital clock edge",
              "bucket": "Oscilloscope"
            },
            {
              "text": "Supplying 3.3 V regulated DC to a prototype board",
              "bucket": "Benchtop Power Supply"
            },
            {
              "text": "Measuring the RMS voltage of an AC mains outlet",
              "bucket": "Digital Multimeter"
            },
            {
              "text": "Checking for voltage ripple on a switching regulator output",
              "bucket": "Oscilloscope"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l08-a2",
          "type": "image",
          "title": "Breadboard Layout",
          "content": "Visual guide to a standard solderless breadboard, highlighting power rails and connected terminal strips."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l09",
      "title": "PCB & Testing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      },
      "questions": [
        {
          "id": "micro-circuits-101-l09-q1",
          "text": "What is the primary purpose of placing a 100 nF ceramic capacitor near each IC's power pins on a PCB?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "To increase the IC's clock speed"
            },
            {
              "id": "b",
              "text": "To filter high-frequency switching noise and provide instantaneous current to the IC"
            },
            {
              "id": "c",
              "text": "To protect the IC from electrostatic discharge"
            },
            {
              "id": "d",
              "text": "To set the operating voltage of the IC"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Decoupling capacitors act as local charge reservoirs, supplying instantaneous current during fast logic transitions and filtering high-frequency noise that the main power supply traces cannot deliver quickly enough."
        },
        {
          "id": "micro-circuits-101-l09-q2",
          "text": "Which file format is the industry standard for defining PCB copper layers, solder mask, and silkscreen for fabrication?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DXF (AutoCAD Drawing Exchange Format)"
            },
            {
              "id": "b",
              "text": "STL (Stereolithography)"
            },
            {
              "id": "c",
              "text": "Gerber (RS-274X)"
            },
            {
              "id": "d",
              "text": "STEP (Standard for Exchange of Product Data)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Gerber RS-274X files are the universal standard for PCB fabrication. Each file describes one layer — copper, solder mask, paste stencil, silkscreen, or board outline."
        },
        {
          "id": "micro-circuits-101-l09-q3",
          "text": "Why should you avoid splits or slots in a ground plane beneath a high-speed signal trace?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Splits increase the board's weight"
            },
            {
              "id": "b",
              "text": "Splits force return currents to take longer paths, increasing loop area and radiated EMI"
            },
            {
              "id": "c",
              "text": "Splits prevent the solder mask from adhering properly"
            },
            {
              "id": "d",
              "text": "Splits cause the trace to have higher DC resistance"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Return current on a ground plane flows directly beneath its signal trace. A slot forces the return current around the gap, vastly increasing the current loop area and turning it into an effective antenna for electromagnetic radiation."
        },
        {
          "id": "micro-circuits-101-l09-q4",
          "text": "On a breadboard, what is the approximate upper frequency limit for reliable circuit operation?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "100 kHz"
            },
            {
              "id": "b",
              "text": "10 MHz"
            },
            {
              "id": "c",
              "text": "1 GHz"
            },
            {
              "id": "d",
              "text": "100 MHz"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Breadboards introduce parasitic capacitance (~2 pF per row) and lead inductance that degrade signals above roughly 10 MHz. For higher frequencies, soldered prototyping methods are necessary."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l09-a1",
          "type": "mnemonic",
          "title": "Design Review Checklist",
          "content": "Before finalizing, check for common errors: correct footprints, sufficient clearances, proper decoupling, and complete manufacturing files."
        }
      ]
    },
    {
      "id": "micro-circuits-101-l10",
      "title": "Mastery Quiz: Micro-Circuits",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "micro-circuits-101-l10-q1",
          "text": "A non-inverting op-amp amplifier has R_f = 47 kΩ and R_in = 10 kΩ. What is the closed-loop voltage gain?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "4.7"
            },
            {
              "id": "b",
              "text": "5.7"
            },
            {
              "id": "c",
              "text": "−4.7"
            },
            {
              "id": "d",
              "text": "47"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Non-inverting gain = 1 + R_f / R_in = 1 + 47,000 / 10,000 = 1 + 4.7 = 5.7. The output is in phase with the input (positive gain)."
        },
        {
          "id": "micro-circuits-101-l10-q2",
          "text": "A 12-bit ADC with a 5 V reference digitizes a sensor signal. What is the voltage resolution (LSB size)?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "4.88 mV"
            },
            {
              "id": "b",
              "text": "1.22 mV"
            },
            {
              "id": "c",
              "text": "19.53 mV"
            },
            {
              "id": "d",
              "text": "0.49 mV"
            }
          ],
          "correctOptionId": "b",
          "explanation": "LSB = V_ref / 2^n = 5 V / 2¹² = 5 V / 4096 ≈ 1.22 mV. Each digital step corresponds to a 1.22 mV change in the analog input."
        },
        {
          "id": "micro-circuits-101-l10-q3",
          "text": "For a 4-layer PCB, what is the typical arrangement of the inner layers and why?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Two signal layers — to route more traces without increasing board size"
            },
            {
              "id": "b",
              "text": "A ground plane and a power plane — to reduce EMI, provide low-impedance return paths, and simplify power distribution"
            },
            {
              "id": "c",
              "text": "Two solder mask layers — to improve corrosion resistance on both sides"
            },
            {
              "id": "d",
              "text": "A ground plane and a silkscreen layer — to improve labeling and shielding"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Standard 4-layer stackup places a ground plane and a power plane as the two inner layers. This provides low-impedance return paths for signals, reduces EMI by minimizing loop area, and distributes power uniformly to all components."
        },
        {
          "id": "micro-circuits-101-l10-q4",
          "text": "A Zener diode is rated at 5.1 V and is connected in reverse bias across a load. A 12 V supply feeds through a 1 kΩ series resistor. What current flows through the Zener diode if the load draws 2 mA?",
          "skillId": "micro-circuits-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "6.9 mA"
            },
            {
              "id": "b",
              "text": "4.9 mA"
            },
            {
              "id": "c",
              "text": "12 mA"
            },
            {
              "id": "d",
              "text": "2 mA"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Total current through the resistor: I_total = (12 V − 5.1 V) / 1000 Ω = 6.9 mA. The load draws 2 mA, so the Zener carries the remaining current: I_Z = I_total - I_load = 6.9 mA − 2 mA = 4.9 mA, maintaining the 5.1 V regulation."
        }
      ],
      "learningAids": [
        {
          "id": "micro-circuits-101-l10-a1",
          "type": "mnemonic",
          "title": "Final Review Approach",
          "content": "Read each question carefully, eliminate incorrect options, and double-check calculations before submitting."
        }
      ]
    }
  ]
};
