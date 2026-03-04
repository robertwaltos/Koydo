import type { LearningModule } from "@/lib/modules/types";

export const ElectricalEngineering101Module: LearningModule = {
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
  "version": "2.0.0",
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
          "content": "Electric charge is a fundamental property of matter, and it is carried by tiny particles known as protons and electrons. Protons have a positive charge, while electrons carry a negative charge. When electrons begin to move through a material that allows electricity to flow, such as copper wire, they create what we refer to as electric current. This current is measured in units called amperes, often abbreviated as 'A'. To help you understand this better, think of it this way: when we say that one ampere of current is flowing, it means that one coulomb of electric charge is passing through a specific point in the circuit every second. This concept is crucial for understanding how electrical systems work.\nIt's also interesting to note that conventional current is described as flowing from areas of higher electric potential to areas of lower electric potential. This is actually the opposite direction of how the electrons flow. To visualize this concept, you can use an analogy involving water flowing through a pipe. In this analogy, the electric current is similar to the flow of water, the voltage represents the pressure that pushes the water through the pipe, and resistance is like the narrowness of the pipe that limits how much water can flow through at once. This comparison makes it easier to grasp how electricity behaves in a circuit and how various factors like voltage and resistance can affect the flow of current. Understanding these basic principles is essential for anyone interested in the field of electrical engineering, as they form the foundation for more complex concepts that you will encounter later on in your studies.\nContext recap: Electric charge is a fundamental property of matter, and it is carried by tiny particles known as protons and electrons. Protons have a positive charge, while electrons carry a negative charge. When electrons begin to move through a material that allows electricity to flow, such as copper wire, they create what we refer to as electric current. This current is measured in units called amperes, often abbreviated as 'A'.\nWhy this matters: Electric Charge and Current helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l01-c2",
          "title": "Ohm's Law and Resistance",
          "kind": "concept",
          "content": "Ohm's Law is a key concept in electrical engineering that helps us understand how voltage, current, and resistance interact in an electrical circuit. This law states that the voltage (V) across a conductor is equal to the current (I) flowing through it multiplied by the resistance (R) of that conductor. We can express this relationship with the formula V = I × R. In this formula, voltage is measured in volts, current in amperes, and resistance in ohms (Ω).\nResistance is an important property of materials that affects how easily electricity can flow through them. It depends on several factors, including the material's resistivity (ρ), its length (L), and its cross-sectional area (A). We can calculate resistance using the formula R = ρL/A. Here, resistivity is a measure of how strongly a material opposes the flow of electric current.\nFor instance, materials like copper have very low resistivity, around 1.7 × 10⁻⁸ Ω·m, which makes them excellent conductors of electricity. This is why copper is commonly used in electrical wiring. On the other hand, materials like rubber have very high resistivity, exceeding 10¹³ Ω·m, making them effective insulators that prevent the flow of electricity.\nAdditionally, there are materials known as semiconductors, such as silicon, which have resistivity values that fall between conductors and insulators. Semiconductors can be treated or 'doped' to control their conductivity, allowing them to conduct electricity under certain conditions. This property is crucial for the development of modern electronic devices, such as computers and smartphones, which rely on precise control of electrical currents to function properly.\nContext recap: Ohm's Law is a key concept in electrical engineering that helps us understand how voltage, current, and resistance interact in an electrical circuit. This law states that the voltage (V) across a conductor is equal to the current (I) flowing through it multiplied by the resistance (R) of that conductor. We can express this relationship with the formula V = I × R. In this formula, voltage is measured in volts, current in amperes, and resistance in ohms (Ω).\nWhy this matters: Ohm's Law and Resistance helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrical-engineering-101-l01-c3",
          "title": "Electrical Power and Energy",
          "kind": "concept",
          "content": "In electrical circuits, power is a key concept that tells us how quickly electrical energy is transformed into other useful forms of energy, like heat, light, or motion. To understand this better, we use the formula P = IV, where P stands for power measured in watts (W), I represents the current in amperes (A), and V is the voltage in volts (V). This formula helps us calculate how much power is being used in a circuit.\nWe can also connect this idea to Ohm's Law, which allows us to derive two more important formulas: P = I²R and P = V²/R. Let’s break this down with an example: imagine we have a resistor that has a resistance of 100 ohms and it carries a current of 0.5 amperes. We can find out how much power this resistor is dissipating by using the formula P = (0.5)² × 100. When we do the math, we find that the power is 25 watts.\nMoreover, we can calculate the energy consumed over time using the formula E = Pt, where E represents energy in watt-hours. For instance, if we have a 60-watt light bulb that is turned on for 2 hours, we can calculate its energy usage: E = 60 W × 2 h, which equals 120 watt-hours or 0.12 kilowatt-hours.\nUnderstanding these power ratings is very important! It helps us choose the right components for our projects and ensures that we design safe and effective electrical circuits. This knowledge is essential for anyone interested in electrical engineering and helps us create devices that work safely and efficiently.\nContext recap: In electrical circuits, power is a key concept that tells us how quickly electrical energy is transformed into other useful forms of energy, like heat, light, or motion. To understand this better, we use the formula P = IV, where P stands for power measured in watts (W), I represents the current in amperes (A), and V is the voltage in volts (V). This formula helps us calculate how much power is being used in a circuit. We can also connect this idea to Ohm's Law, which allows us to derive two more important formulas: P = I²R and P = V²/R.\nWhy this matters: Electrical Power and Energy helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Kirchhoff's Laws are fundamental principles that play a crucial role in understanding and analyzing electrical circuits. The first of these laws is known as Kirchhoff's Voltage Law (KVL). This law states that when you look at any closed loop in a circuit, the total sum of all the voltages must equal zero. In simpler terms, this means that the energy provided by the power sources, like batteries or generators, is completely balanced by the energy used by the components in that loop, such as resistors or light bulbs. This balance is essential for the circuit to function properly.\nThe second principle is called Kirchhoff's Current Law (KCL). This law explains that at any point in a circuit, known as a junction or node, the total amount of electric current flowing into that point must be equal to the total amount of current flowing out. This concept is based on the idea of conservation of electric charge, which tells us that charge cannot simply disappear; it must flow through the circuit.\nBy applying Kirchhoff's Laws together with Ohm's Law, which relates voltage, current, and resistance, we can analyze and solve even the most complex linear direct current (DC) circuits. Understanding these laws is essential for anyone who wants to pursue a career in electrical engineering or work with electrical systems, as they provide the foundation for circuit analysis and design.\nContext recap: Kirchhoff's Laws are fundamental principles that play a crucial role in understanding and analyzing electrical circuits. The first of these laws is known as Kirchhoff's Voltage Law (KVL). This law states that when you look at any closed loop in a circuit, the total sum of all the voltages must equal zero. In simpler terms, this means that the energy provided by the power sources, like batteries or generators, is completely balanced by the energy used by the components in that loop, such as resistors or light bulbs.\nWhy this matters: Kirchhoff's Laws helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l02-c2",
          "title": "Series and Parallel Resistance",
          "kind": "concept",
          "content": "When we connect resistors in series, they all carry the same amount of electric current. This means that the total resistance in the circuit is simply the sum of all the individual resistances. We can express this relationship using the formula R_eq = R₁ + R₂ + … + Rₙ. Here, R_eq represents the equivalent resistance of the entire series circuit, while R₁, R₂, and so on, represent the resistances of each individual resistor.\nOn the flip side, when resistors are connected in parallel, they share the same voltage across their terminals. This means that the total or equivalent resistance can be calculated using a different formula: 1/R_eq = 1/R₁ + 1/R₂ + … + 1/Rₙ. This formula allows us to find the combined resistance of multiple resistors connected in parallel.\nFor a quick calculation involving just two resistors in parallel, we can use a shortcut formula: R_eq = (R₁ × R₂) / (R₁ + R₂). For instance, if we have a 6-ohm resistor and a 3-ohm resistor connected in parallel, we can calculate the equivalent resistance as follows: R_eq = (6 × 3) / (6 + 3) = 18 / 9 = 2 ohms. This result tells us that the equivalent resistance of resistors in parallel is always less than the smallest resistor in the group, which is an important concept to remember when working with circuits.\nContext recap: When we connect resistors in series, they all carry the same amount of electric current. This means that the total resistance in the circuit is simply the sum of all the individual resistances. We can express this relationship using the formula R_eq = R₁ + R₂ + … + Rₙ. Here, R_eq represents the equivalent resistance of the entire series circuit, while R₁, R₂, and so on, represent the resistances of each individual resistor.\nWhy this matters: Series and Parallel Resistance helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l02-c3",
          "title": "Voltage and Current Dividers",
          "kind": "example",
          "content": "In a series circuit, we can determine how much voltage drops across each resistor using a special formula called the voltage divider formula. This formula is written as V_x = V_total × (R_x / R_total). Here, V_x represents the voltage across the specific resistor we are interested in, V_total is the total voltage provided by the power source, R_x is the resistance of the resistor we are focusing on, and R_total is the total resistance of all the resistors connected in series. This means that the voltage is shared among the resistors based on their resistance values.\nOn the other hand, in a parallel circuit, we can find out how much current flows through each branch using the current divider formula. This formula is expressed as I_x = I_total × (R_other / (R_x + R_other)). In this case, I_x is the current flowing through the branch we are examining, I_total is the total current entering the parallel circuit, and R_other is the resistance of the other branch.\nThese formulas are incredibly helpful shortcuts for analyzing how circuits work. For instance, if we have a 12-volt power source connected to a 4-ohm resistor and an 8-ohm resistor in series, we can easily calculate the voltage across each resistor. Using the voltage divider formula, we find that V₁ = 12 × (4/12) = 4 volts for the 4-ohm resistor, and V₂ = 12 × (8/12) = 8 volts for the 8-ohm resistor. This shows how the total voltage is divided based on the resistance values, helping us understand how electricity flows in a circuit.\nContext recap: In a series circuit, we can determine how much voltage drops across each resistor using a special formula called the voltage divider formula. This formula is written as V_x = V_total × (R_x / R_total). Here, V_x represents the voltage across the specific resistor we are interested in, V_total is the total voltage provided by the power source, R_x is the resistance of the resistor we are focusing on, and R_total is the total resistance of all the resistors connected in series. This means that the voltage is shared among the resistors based on their resistance values.\nWhy this matters: Voltage and Current Dividers helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "A capacitor is an important electrical component that consists of two conductive plates separated by a special insulating material known as a dielectric. When we connect a voltage source to these plates, electric charge begins to accumulate on them. This accumulation creates an electric field, which is a space around the plates where electric forces can be felt. This electric field is what allows the capacitor to store energy for later use. The ability of a capacitor to store charge is measured by a value called capacitance (C), which is defined as the amount of charge (Q) it can hold per unit of voltage (V). We measure capacitance in a unit called farads (F). Capacitors come in a variety of sizes and capacities. For example, in radio frequency circuits, you might find capacitors with very small capacitance values, like picofarads (pF). On the other hand, in power supply applications, you might encounter much larger capacitors that can hold thousands of microfarads (μF). The energy stored in a capacitor can be calculated using the formula E = ½CV², which shows how the capacitance and the voltage affect the amount of energy stored. An interesting feature of capacitors is that they can block direct current (DC) once they are fully charged. However, they allow alternating current (AC) to pass through. This is because the voltage in AC circuits changes direction continuously, causing the charge to flow on and off the plates, which keeps the capacitor from becoming fully charged and allows it to function effectively in AC applications.\nContext recap: A capacitor is an important electrical component that consists of two conductive plates separated by a special insulating material known as a dielectric. When we connect a voltage source to these plates, electric charge begins to accumulate on them. This accumulation creates an electric field, which is a space around the plates where electric forces can be felt. This electric field is what allows the capacitor to store energy for later use.\nWhy this matters: Capacitors and Electric Fields helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrical-engineering-101-l04-c2",
          "title": "Inductors and Magnetic Fields",
          "kind": "concept",
          "content": "An inductor is a special component made of a coil of wire that plays a crucial role in electrical circuits by storing energy in a magnetic field when an electric current flows through it. This ability to store energy is known as inductance, which is measured in a unit called henrys (H). The inductance of an inductor can vary based on several important factors. These include the number of turns in the coil, the type of material used for the core of the inductor, and the overall shape of the coil itself.\nWhen we look at the voltage across an inductor, we can use a specific formula to understand its behavior: v = L(di/dt). This equation tells us that the inductor works against changes in the current flowing through it, meaning it tries to keep the current steady.\nAdditionally, we can calculate the energy stored in the inductor using another formula: E = ½LI². This formula shows us that the energy depends on both the inductance and the amount of current flowing through the inductor.\nInductors have different behaviors depending on the type of current. For direct current (DC), inductors allow it to pass through easily, almost as if they were just a simple wire. However, when it comes to alternating current (AC), inductors create a challenge. The changing nature of AC induces a phenomenon called back electromotive force (back-EMF), which opposes the changes in current, making it harder for AC to flow through. Understanding these principles is essential for anyone studying electrical engineering, as they form the foundation for more complex concepts in the field.\nContext recap: An inductor is a special component made of a coil of wire that plays a crucial role in electrical circuits by storing energy in a magnetic field when an electric current flows through it. This ability to store energy is known as inductance, which is measured in a unit called henrys (H). The inductance of an inductor can vary based on several important factors. These include the number of turns in the coil, the type of material used for the core of the inductor, and the overall shape of the coil itself.\nWhy this matters: Inductors and Magnetic Fields helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrical-engineering-101-l04-c3",
          "title": "Time Constants and Transient Response",
          "kind": "concept",
          "content": "When a capacitor is connected to a resistor and begins to charge, the voltage across the capacitor doesn't just jump to a certain level right away. Instead, it increases gradually in a specific pattern known as an exponential curve. This behavior can be mathematically represented by the formula v(t) = V_s(1 − e^(−t/τ)). In this formula, V_s represents the maximum voltage that the capacitor can reach, and τ (tau) is known as the time constant. The time constant is calculated by multiplying the resistance (R) of the resistor by the capacitance (C) of the capacitor. After a time period of about 5τ, the capacitor will be nearly fully charged, reaching about 99.3% of its maximum voltage.\nNow, let’s consider an RL circuit, which consists of a resistor and an inductor. In this setup, the current flowing through the circuit also increases over time, and we can describe this change with the formula i(t) = (V_s/R)(1 − e^(−t/τ)), where τ is calculated as L/R, with L being the inductance.\nThe time during which the voltages and currents are changing is referred to as the transient response. This is an important phase because it shows how the circuit reacts to changes. Once the circuit reaches a stable condition where the voltages and currents no longer change, we call this the steady state. Understanding these time constants is essential for engineers, as they play a key role in designing circuits that filter signals, manage timing, and ensure smooth operation of power supplies. By grasping these concepts, you will be better equipped to tackle real-world engineering challenges and create effective electronic devices.\nContext recap: When a capacitor is connected to a resistor and begins to charge, the voltage across the capacitor doesn't just jump to a certain level right away. Instead, it increases gradually in a specific pattern known as an exponential curve. This behavior can be mathematically represented by the formula v(t) = V_s(1 − e^(−t/τ)). In this formula, V_s represents the maximum voltage that the capacitor can reach, and τ (tau) is known as the time constant.\nWhy this matters: Time Constants and Transient Response helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Alternating current, commonly known as AC, is a type of electrical current that changes direction periodically. This means that the flow of electricity can reverse itself, which is different from direct current (DC) that flows in only one direction. The most common shape of the AC waveform is called a sinusoidal wave. We can describe this wave mathematically using a formula: v(t) = V_peak × sin(2πft + φ). In this formula, V_peak stands for the maximum voltage that the wave can reach, f represents the frequency of the wave measured in hertz (Hz), which tells us how many cycles occur in one second, and φ is the phase angle that indicates the position of the wave at a specific time.\nIn different parts of the world, power grids operate at different frequencies. For example, in Europe and Asia, the standard frequency is 50 Hz, while in the Americas, it is typically 60 Hz. The period of the waveform, denoted as T, is the time it takes for the wave to complete one full cycle. We can find this period using the formula T = 1/f, which means that if we know the frequency, we can easily calculate how long one cycle lasts.\nAC is particularly advantageous for transmitting electricity over long distances. This is because we can use devices called transformers to easily change the voltage of the AC. By stepping the voltage up or down, we can minimize energy losses that occur in the transmission lines, which is important for efficient power distribution. Understanding these concepts is crucial for anyone interested in electrical engineering and the way our power systems work.\nContext recap: Alternating current, commonly known as AC, is a type of electrical current that changes direction periodically. This means that the flow of electricity can reverse itself, which is different from direct current (DC) that flows in only one direction. The most common shape of the AC waveform is called a sinusoidal wave. We can describe this wave mathematically using a formula: v(t) = V_peak × sin(2πft + φ).\nWhy this matters: Sinusoidal Signals helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l05-c2",
          "title": "RMS Values and Power",
          "kind": "concept",
          "content": "The root-mean-square (RMS) value is an important concept in understanding alternating current (AC) signals. It represents the equivalent direct current (DC) value that would provide the same average power to an electrical load. This means that if you were to use a DC source with the same RMS value, it would perform just as effectively as the AC source. For sinusoidal waveforms, which are common in AC circuits, you can calculate the RMS voltage using the formula: V_rms = V_peak / √2. This means that the RMS voltage is approximately 0.707 times the peak voltage. For instance, a typical household outlet is labeled as '120 V', but its peak voltage is actually around 170 V. When we talk about power in circuits with purely resistive loads, we can find the average power using the formula P = V_rms × I_rms, where I_rms is the RMS current flowing through the circuit. However, in circuits that include reactive components, we need to consider apparent power, which is measured in volt-amperes (VA). We calculate this using the formula S = V_rms × I_rms. The power factor, denoted as cos(φ), is a crucial aspect because it tells us how much of the apparent power is actually being used as real or useful power. We can find the real power using the formula P = S × cos(φ). Understanding these concepts is essential for anyone studying electrical engineering, as they form the foundation for analyzing and designing electrical systems effectively.\nContext recap: The root-mean-square (RMS) value is an important concept in understanding alternating current (AC) signals. It represents the equivalent direct current (DC) value that would provide the same average power to an electrical load. This means that if you were to use a DC source with the same RMS value, it would perform just as effectively as the AC source. For sinusoidal waveforms, which are common in AC circuits, you can calculate the RMS voltage using the formula: V_rms = V_peak / √2.\nWhy this matters: RMS Values and Power helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l05-c3",
          "title": "Impedance and Phasors",
          "kind": "concept",
          "content": "Impedance, often represented by the letter Z, is an important concept in understanding how alternating current (AC) circuits work. It builds upon the idea of resistance, which is how much a material opposes the flow of electric current. Impedance is measured in ohms, just like resistance. For different components in a circuit, the impedance behaves differently. For example, in a simple resistor, the impedance is the same as the resistance, which we can write as Z_R = R. However, for capacitors and inductors, the calculations are a bit more complex. For a capacitor, the impedance is calculated using the formula Z_C = 1/(jωC), and for an inductor, it is Z_L = jωL. Here, ω (omega) is a special value that equals 2π times the frequency (f) of the AC signal, and j is a mathematical symbol that represents the imaginary unit, which is the square root of -1.\nImpedance has two important characteristics: its magnitude, which we denote as |Z|, and its phase angle, represented by θ. Understanding these two aspects helps us analyze how circuits behave.\nPhasors are a helpful tool in this analysis. They are like rotating arrows that represent sinusoidal (wave-like) quantities, showing both their size (magnitude) and their position in time (phase). In a series RLC circuit, which includes a resistor (R), inductor (L), and capacitor (C), the voltage across the resistor (V_R) is perfectly in sync with the current. However, the voltage across the inductor (V_L) leads the current by 90 degrees, meaning it reaches its peak value a quarter cycle earlier. On the other hand, the voltage across the capacitor (V_C) lags behind the current by 90 degrees, reaching its peak a quarter cycle later.\nPhasor diagrams are visual tools that help us see these relationships clearly. They allow us to add these voltages together graphically, making it easier to understand how they interact in the circuit. By using phasor diagrams, we can gain insights into the overall behavior of AC circuits, which is essential for anyone studying electrical engineering.\nContext recap: Impedance, often represented by the letter Z, is an important concept in understanding how alternating current (AC) circuits work. It builds upon the idea of resistance, which is how much a material opposes the flow of electric current. Impedance is measured in ohms, just like resistance. For different components in a circuit, the impedance behaves differently.\nWhy this matters: Impedance and Phasors helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms impedance, current, circuits, resistance, circuit, resistor, capacitor, inductor while answering to reinforce vocabulary and precision."
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
          "content": "Silicon is a fascinating material that plays a crucial role in electronics. It has four electrons in its outer shell, which allows it to bond with four other silicon atoms, forming a unique structure known as a diamond-cubic crystal lattice. This structure is similar to the arrangement of atoms in a diamond, which makes it very strong and stable. However, at room temperature, pure silicon does not conduct electricity very well, meaning it is considered a poor conductor. To enhance its electrical conductivity, we can introduce small amounts of other elements through a process called doping. Doping is like adding special ingredients to a recipe to change the outcome. For instance, when we add phosphorus, which has five outer electrons, it donates extra electrons to the silicon. This process creates what we call n-type silicon, where there are more negative charge carriers (electrons) available to conduct electricity. Conversely, if we add boron, which has only three outer electrons, it creates 'holes' or missing electrons in the silicon structure. These holes act like positive charge carriers, leading to what we refer to as p-type silicon. The ability to manipulate the conductivity of silicon through these methods is essential because it forms the foundation for all semiconductor devices, which are vital components in modern electronics, from smartphones to computers and beyond. Understanding these concepts is key to exploring the exciting world of electrical engineering and technology.\nContext recap: Silicon is a fascinating material that plays a crucial role in electronics. It has four electrons in its outer shell, which allows it to bond with four other silicon atoms, forming a unique structure known as a diamond-cubic crystal lattice. This structure is similar to the arrangement of atoms in a diamond, which makes it very strong and stable. However, at room temperature, pure silicon does not conduct electricity very well, meaning it is considered a poor conductor.\nWhy this matters: Semiconductor Basics helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l07-c2",
          "title": "P-N Junctions and Diodes",
          "kind": "concept",
          "content": "When we bring together two types of silicon, known as p-type and n-type, an exciting process occurs. The p-type silicon has 'holes' or spaces where electrons can fit, while the n-type silicon has extra electrons. When these two types are joined, the extra electrons from the n-type side start to move over to the p-type side. As they fill in the holes, they create a special area called the depletion region. This region is unique because it doesn't have any free charge carriers, which means it acts like a barrier that makes it hard for current to flow. For silicon, this barrier is about 0.7 volts, which is an important number to remember. When we apply a positive voltage to the p-type side, it helps to shrink the depletion region, allowing current to flow through more easily. This situation is known as forward bias. On the other hand, if we apply a positive voltage to the n-type side, the depletion region becomes larger, which blocks the flow of current. However, a tiny amount of current, called leakage current, can still pass through. This special one-way behavior of diodes is crucial in many electronic devices because it allows us to change alternating current (AC) into direct current (DC). This process is called rectification, and it is essential for powering many of the gadgets we use every day, from smartphones to computers. Understanding how diodes work helps us appreciate the technology that surrounds us and the principles of electrical engineering that make it all possible.\nContext recap: When we bring together two types of silicon, known as p-type and n-type, an exciting process occurs. The p-type silicon has 'holes' or spaces where electrons can fit, while the n-type silicon has extra electrons. When these two types are joined, the extra electrons from the n-type side start to move over to the p-type side. As they fill in the holes, they create a special area called the depletion region.\nWhy this matters: P-N Junctions and Diodes helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrical-engineering-101-l07-c3",
          "title": "Rectification and LEDs",
          "kind": "example",
          "content": "A half-wave rectifier is a straightforward electronic device that uses a single diode to allow only the positive half of an alternating current (AC) signal to pass through. This process results in a pulsating direct current (DC), which is not completely smooth but can be useful for certain applications. On the other hand, a full-wave bridge rectifier is a more advanced setup that employs four diodes arranged in a specific configuration. This arrangement allows both halves of the AC signal to be redirected, resulting in a much smoother DC output. To enhance this smoothness even further, we can use a capacitor, which helps to filter out any remaining fluctuations in the current.\nNow, let's talk about light-emitting diodes, commonly known as LEDs. These are special types of diodes that emit light when an electric current flows through them. LEDs are made from various semiconductor materials, such as gallium nitride (GaN), which is used for producing blue and white light, and gallium arsenide phosphide (GaAsP), which is used for red light. When electrons in the LED move and recombine with holes (which are essentially the absence of electrons) at the junction of the diode, they release energy in the form of light. The specific color of the light emitted by an LED depends on the energy gap of the semiconductor material used, which determines how much energy is released during this recombination process. This fascinating interaction between electricity and light is what makes LEDs so popular in various applications, from indicators to lighting solutions.\nContext recap: A half-wave rectifier is a straightforward electronic device that uses a single diode to allow only the positive half of an alternating current (AC) signal to pass through. This process results in a pulsating direct current (DC), which is not completely smooth but can be useful for certain applications. On the other hand, a full-wave bridge rectifier is a more advanced setup that employs four diodes arranged in a specific configuration. This arrangement allows both halves of the AC signal to be redirected, resulting in a much smoother DC output.\nWhy this matters: Rectification and LEDs helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "A Bipolar Junction Transistor, commonly known as a BJT, is an important electronic component that consists of three layers of silicon. These layers are specially treated, or 'doped', to create two types of p-n junctions. The two main types of BJTs are called NPN and PNP. Let's focus on the NPN type for a moment. In an NPN transistor, a small current that flows into the base terminal, referred to as I_B, can control a much larger current that flows from the collector to the emitter, known as I_C. This relationship is captured in a simple formula: I_C = β × I_B. Here, β (beta) represents the current gain of the transistor, which typically ranges from 50 to 300. This means that a small input current can result in a significantly larger output current, making BJTs very useful for amplifying signals.\nWhen the transistor is in saturation mode, both of its junctions are forward-biased, which means they allow current to flow freely. In this state, the transistor behaves like a closed switch, with a very low voltage drop across it, approximately 0.2 volts. Conversely, when the transistor is in cutoff mode, both junctions are reverse-biased, preventing current from flowing. In this state, the transistor acts like an open switch. This on/off switching capability is crucial for the operation of digital logic circuits, as it allows them to represent binary states (0s and 1s) effectively. Understanding how BJTs work is essential for anyone interested in electrical engineering, as they form the building blocks of many electronic devices we use every day.\nContext recap: A Bipolar Junction Transistor, commonly known as a BJT, is an important electronic component that consists of three layers of silicon. These layers are specially treated, or 'doped', to create two types of p-n junctions. The two main types of BJTs are called NPN and PNP. Let's focus on the NPN type for a moment.\nWhy this matters: Bipolar Junction Transistors (BJTs) helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrical-engineering-101-l08-c2",
          "title": "MOSFETs",
          "kind": "concept",
          "content": "A Metal-Oxide-Semiconductor Field-Effect Transistor, commonly known as a MOSFET, is a special type of transistor that operates based on voltage control. When we apply a voltage to the gate of the MOSFET, it opens a pathway for electrical current to flow between two points called the drain and source. This happens when the voltage at the gate (referred to as V_GS) exceeds a specific level known as the threshold voltage (V_th). In simpler terms, if the gate voltage is high enough, the MOSFET turns on and allows current to pass through. There are also enhancement-mode MOSFETs, which are usually in the off position and only turn on when the gate voltage goes above the threshold. One of the remarkable features of MOSFETs is that they require very little current at the gate, which makes them ideal for building compact and efficient integrated circuits. In a technology called CMOS, which stands for Complementary Metal-Oxide-Semiconductor, we combine two types of MOSFETs: n-channel and p-channel. This clever design ensures that one of the transistors is always off, which significantly reduces power consumption. This efficiency is a key reason why modern processors can fit billions of transistors into a very small area, enabling powerful computing in our everyday devices.\nContext recap: A Metal-Oxide-Semiconductor Field-Effect Transistor, commonly known as a MOSFET, is a special type of transistor that operates based on voltage control. When we apply a voltage to the gate of the MOSFET, it opens a pathway for electrical current to flow between two points called the drain and source. This happens when the voltage at the gate (referred to as V_GS) exceeds a specific level known as the threshold voltage (V_th). In simpler terms, if the gate voltage is high enough, the MOSFET turns on and allows current to pass through.\nWhy this matters: MOSFETs helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrical-engineering-101-l08-c3",
          "title": "Basic Logic Gates",
          "kind": "example",
          "content": "Logic gates are essential components in digital circuits, acting as the fundamental building blocks that perform various operations on input signals. Let's explore some of the most common types of logic gates. First, we have the NOT gate, which is also known as an inverter. This gate uses a single transistor to function. When the input signal is high, meaning it has a strong voltage, the transistor allows current to flow, resulting in a low output. Conversely, when the input signal is low, the output becomes high. This simple operation is crucial for many digital systems.\nNext, we have the NAND gate, which consists of two transistors arranged in series. This gate produces a low output only when both of its inputs are high. In all other cases, it outputs a high signal. This characteristic makes NAND gates very useful in creating complex circuits.\nSimilarly, the NOR gate employs two transistors but arranges them in parallel. The output of a NOR gate is low when either of its inputs is high.\nWhat’s fascinating about NAND and NOR gates is that they are considered universal gates. This means that you can construct any logical function using just NAND gates or just NOR gates. By combining these gates in various ways, engineers can create more complex components such as adders, multiplexers, and even entire central processing units (CPUs) that are the brains of our computers. Understanding how these gates work is a fundamental step in learning about digital electronics and computer engineering.\nContext recap: Logic gates are essential components in digital circuits, acting as the fundamental building blocks that perform various operations on input signals. Let's explore some of the most common types of logic gates. First, we have the NOT gate, which is also known as an inverter. This gate uses a single transistor to function.\nWhy this matters: Basic Logic Gates helps learners in Engineering connect ideas from Electrical Engineering Foundations to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
