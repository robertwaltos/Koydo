import type { LearningModule } from "@/lib/modules/types";

export const MicroCircuits101Module: LearningModule = {
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
  "version": "2.0.0",
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
    "Demonstrate proficiency in PCB design workflow including schematic capture, component footprints, trace width calculation, via selection, and ground plane strategy",
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
          "content": "Resistors are crucial components in electronic circuits that help manage and control the flow of electric current. They play a fundamental role in ensuring that circuits function correctly and safely. One of the most interesting aspects of resistors is how their resistance values are identified using color bands. These bands are colored stripes that wrap around the resistor and provide important information about its specifications. In a standard 4-band color code, the first two bands represent the significant digits of the resistance value, the third band indicates the multiplier, and the fourth band tells us about the tolerance level of the resistor. For instance, if you see the colors brown, black, orange, and gold on a resistor, it means that the resistor has a resistance value of 10,000 ohms, which is also expressed as 10 kΩ, and it has a tolerance of ±5%. This means that the actual resistance can vary slightly from this value, which is important to consider in precise applications.\nAdditionally, there are 5-band resistors that include an extra band for a third significant digit, allowing for even more precise measurements. Understanding these codes is essential for anyone working with electronics.\nAnother important aspect of resistors is their power rating. The power rating indicates the maximum amount of energy that a resistor can safely dissipate as heat without getting damaged. Common power ratings for through-hole resistors, which are the larger types that you can insert into a circuit board, include 1/8 watt, 1/4 watt, and 1/2 watt. If a resistor is subjected to a power level that exceeds its rating, it can overheat, which may lead to failure or even damage to the circuit.\nFor smaller electronic devices, surface-mount device (SMD) resistors are often used. These resistors are identified using a numeric code, such as 472, which corresponds to a resistance value of 4.7 kΩ. SMD resistors come in various sizes, which are categorized by numbers like 0402, 0603, 0805, and 1206. These numbers help identify their dimensions, making it easier to select the right resistor for a specific application. Understanding resistors and their specifications is a key part of learning about electronics and circuit design, and it lays the foundation for more advanced topics in engineering.\nContext recap: Resistors are crucial components in electronic circuits that help manage and control the flow of electric current. They play a fundamental role in ensuring that circuits function correctly and safely. One of the most interesting aspects of resistors is how their resistance values are identified using color bands. These bands are colored stripes that wrap around the resistor and provide important information about its specifications.\nWhy this matters: Resistors: Color Codes and Power Ratings helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms resistors, resistor, power, resistance, band, value, color, bands while answering to reinforce vocabulary and precision."
        },
        {
          "id": "micro-circuits-101-l01-c2",
          "title": "Capacitors: Types and Characteristics",
          "content": "Capacitors are fascinating electronic components that play a crucial role in storing electrical energy. They do this by creating an electric field between two conductive plates, which are separated by a special insulating material known as a dielectric. Understanding the different types of capacitors is essential for anyone interested in electronics and circuit design.\nOne common type of capacitor is the ceramic capacitor, which comes in two main classes: class 1 and class 2. Class 1 capacitors, such as C0G or NP0, are known for their small size and stability, making them perfect for high-frequency applications where precision is key. On the other hand, class 2 capacitors, like X7R or X5R, can lose some of their capacitance when a direct current (DC) voltage is applied, which is something to keep in mind when designing circuits.\nAnother important type of capacitor is the electrolytic capacitor, which can be made from materials like aluminum or tantalum. These capacitors have a much higher capacitance range, typically from 1 microfarad (µF) to thousands of µF. However, they are polarized, meaning they must be connected in the correct direction to function properly. This characteristic makes them particularly useful for bulk filtering in power supply applications.\nFilm capacitors, made from materials such as polyester or polypropylene, are also noteworthy. They are recognized for their low equivalent series resistance (ESR) and excellent stability, which makes them ideal for applications in audio circuits, timing circuits, and snubber circuits.\nWhen selecting a capacitor for a project, it’s crucial to pay attention to several key specifications. These include the rated voltage, which should always be derated by at least 20% to ensure safety and reliability. Additionally, you should consider the capacitance tolerance, temperature coefficient, and ESR. The ESR is particularly important in applications like switch-mode power supply output filtering, where efficiency and performance are critical. By understanding these characteristics and specifications, you can make informed decisions when designing and building electronic circuits.\nContext recap: Capacitors are fascinating electronic components that play a crucial role in storing electrical energy. They do this by creating an electric field between two conductive plates, which are separated by a special insulating material known as a dielectric. Understanding the different types of capacitors is essential for anyone interested in electronics and circuit design. One common type of capacitor is the ceramic capacitor, which comes in two main classes: class 1 and class 2.\nWhy this matters: Capacitors: Types and Characteristics helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l01-c3",
          "title": "Inductors and Their Applications",
          "content": "Inductors are fascinating electronic components that play a crucial role in storing energy within a magnetic field. This occurs when an electric current flows through a coil of wire, creating a magnetic field around it. The amount of energy that an inductor can store is measured in henries (H). Several factors influence this measurement, including the number of turns in the coil, the type of material used for the core, and the overall shape of the coil itself.\nIn direct current (DC) circuits, an ideal inductor behaves like a short circuit when the current is steady. This means that once the current reaches a constant level, the inductor allows it to pass through without any resistance. However, inductors are particularly interesting because they resist sudden changes in current. This behavior can be expressed with the formula V = L × (dI/dt). In this equation, V represents the voltage across the inductor, L is the inductance (measured in henries), and dI/dt indicates how quickly the current is changing over time.\nWhen it comes to alternating current (AC) circuits, inductors exhibit a property known as inductive reactance. This property increases with the frequency of the current, which makes inductors very useful for filtering out unwanted high-frequency noise from signals. This filtering capability is essential in many electronic devices to ensure they operate smoothly and without interference.\nInductors can be made from various core materials, each with its own advantages. For example, ferrite cores are excellent for high-frequency applications due to their low energy loss. Powdered iron cores are suitable for moderate frequencies but can handle higher saturation levels. Air cores, on the other hand, do not saturate but typically have lower inductance values.\nYou can find inductors in many different applications, such as in LC filters that help clean up signals, in switch-mode power supplies that store energy efficiently, and in circuits designed to minimize electromagnetic interference (EMI). When selecting an inductor for a specific application, one important factor to consider is the saturation current. This is the maximum current that the inductor can handle before its ability to store energy significantly decreases. Understanding these concepts will help you appreciate the vital role inductors play in modern electronics.\nContext recap: Inductors are fascinating electronic components that play a crucial role in storing energy within a magnetic field. This occurs when an electric current flows through a coil of wire, creating a magnetic field around it. The amount of energy that an inductor can store is measured in henries (H). Several factors influence this measurement, including the number of turns in the coil, the type of material used for the core, and the overall shape of the coil itself.\nWhy this matters: Inductors and Their Applications helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "A diode is an important electronic component that has two terminals and is made from semiconductor materials. Its main job is to allow electric current to flow in one direction while blocking it in the opposite direction. For example, standard silicon diodes usually have a forward voltage drop of about 0.7 volts. This means that when current flows through the diode in the correct direction, there is a small amount of voltage that is lost. On the other hand, Schottky diodes are special types that have a lower voltage drop of only 0.2 to 0.4 volts. This feature makes them very efficient and perfect for applications like rectification, which is the process of converting alternating current (AC) to direct current (DC), and for protecting circuits from reverse polarity, which can damage components.\nAnother interesting type of diode is the Zener diode. Unlike regular diodes, Zener diodes are designed to conduct electricity in reverse when a specific voltage is reached. This unique property allows them to be used in voltage regulation circuits, helping to maintain a steady voltage level in various electronic devices.\nLight Emitting Diodes, or LEDs, are a fun and colorful type of diode that emit light when current flows through them. The color of the light emitted by an LED depends on its material, and this also affects its forward voltage. For instance, red LEDs typically have a forward voltage of around 1.8 volts, while white LEDs usually require about 3.2 volts to operate.\nBipolar Junction Transistors, commonly known as BJTs, are another crucial component in electronics. They are used to control the flow of current in a circuit. A small current flowing into the base terminal of the transistor can control a much larger current flowing from the collector to the emitter. This relationship can be expressed with the formula I_C = β × I_B, where I_C is the collector current, I_B is the base current, and β (also known as h_FE) is a constant that usually ranges from 50 to 300. NPN BJTs are more frequently used than PNP BJTs in digital circuits and switching applications because of their efficiency and effectiveness in controlling current flow.\nContext recap: A diode is an important electronic component that has two terminals and is made from semiconductor materials. Its main job is to allow electric current to flow in one direction while blocking it in the opposite direction. For example, standard silicon diodes usually have a forward voltage drop of about 0.7 volts. This means that when current flows through the diode in the correct direction, there is a small amount of voltage that is lost.\nWhy this matters: Diodes and Transistor Fundamentals helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l02-c2",
          "title": "MOSFETs and Switching",
          "content": "Metal-Oxide-Semiconductor Field-Effect Transistors, commonly known as MOSFETs, are fascinating electronic components that play a crucial role in modern technology. These devices are controlled by voltage, which means they can operate with very high input impedance. This high impedance indicates that they draw almost no current from the source, making them highly efficient.\nAn N-channel enhancement-mode MOSFET is a specific type of MOSFET that activates when the voltage between its gate and source exceeds a certain level, known as the threshold voltage. For logic-level MOSFETs, this threshold voltage typically ranges from 1 to 4 volts. This feature allows them to be used effectively in various electronic applications.\nOne of the standout advantages of MOSFETs compared to Bipolar Junction Transistors (BJTs) is their ability to operate with minimal power. This characteristic, combined with their rapid switching capabilities, makes MOSFETs the preferred choice in power electronics and digital circuits. When a MOSFET is fully turned on, it has a specific resistance between its drain and source, referred to as R_DS(on). This resistance is crucial because it determines how much power is lost during operation. Remarkably, modern power MOSFETs can achieve R_DS(on) values that are less than 10 milliohms, which is incredibly efficient.\nAdditionally, there are P-channel MOSFETs, which are particularly useful for applications where the load is connected to the positive side of the power supply. This makes them ideal for high-side switching applications.\nWhen you are selecting a MOSFET for a project, there are several important parameters to keep in mind. These include the maximum drain-source voltage (V_DS(max)), which indicates the highest voltage the MOSFET can handle; the maximum drain current (I_D(max)), which shows the maximum current it can carry; the R_DS(on) value, which we discussed earlier; the threshold voltage (V_th), which is essential for determining when the MOSFET will turn on; and the thermal resistance, which helps in understanding how well the device can dissipate heat during operation.\nUnderstanding these parameters will help you make informed decisions when working with MOSFETs in your electronic designs, ensuring that your circuits operate efficiently and effectively.\nContext recap: Metal-Oxide-Semiconductor Field-Effect Transistors, commonly known as MOSFETs, are fascinating electronic components that play a crucial role in modern technology. These devices are controlled by voltage, which means they can operate with very high input impedance. This high impedance indicates that they draw almost no current from the source, making them highly efficient. An N-channel enhancement-mode MOSFET is a specific type of MOSFET that activates when the voltage between its gate and source exceeds a certain level, known as the threshold voltage.\nWhy this matters: MOSFETs and Switching helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l02-c3",
          "title": "Op-Amps and Voltage Regulators",
          "content": "Operational amplifiers, often referred to as op-amps, are essential components in many electronic circuits. They are high-gain amplifiers that help in processing signals, making them clearer and more useful for various applications. Imagine an op-amp as a super-smart assistant that can amplify weak signals so that they can be used effectively in devices like radios, televisions, and computers. An ideal op-amp would have infinite gain, meaning it could amplify signals without any limit, and it would also have infinite input impedance, which means it wouldn't draw any current from the source. Additionally, it would have zero output impedance, allowing it to deliver power efficiently. However, in the real world, we have devices like the LM358, which is a general-purpose op-amp, and the OPA2134, which is specifically designed for high-quality audio applications. These devices come very close to the ideal characteristics of an op-amp.\nWhen we apply something called negative feedback to an op-amp, we can configure it to perform different tasks. For instance, it can work as an inverting amplifier, where the output signal is inverted and amplified, or as a non-inverting amplifier, where the output signal is amplified without inversion. It can also act as a voltage follower, which means it outputs the same voltage as the input, or as a summing amplifier, which combines multiple input signals into one output. Additionally, op-amps can be used in active filters, which help to remove unwanted frequencies from signals.\nAnother important component in electronic circuits is the linear voltage regulator. These devices take a higher input voltage and convert it into a stable, lower output voltage that can be used by other components. For example, the LM7805 is a popular voltage regulator that provides a fixed output of 5 volts. However, it requires an input voltage of at least 7 volts because of its dropout voltage, which is about 2 volts. This means that the input voltage must always be higher than the output voltage by a certain amount to ensure proper functioning. On the other hand, low-dropout regulators (LDOs), such as the AMS1117-3.3, are designed to be more efficient, especially in battery-powered devices. They can operate with a smaller difference between the input and output voltage, which helps to save battery life and improve overall efficiency in electronic designs.\nContext recap: Operational amplifiers, often referred to as op-amps, are essential components in many electronic circuits. They are high-gain amplifiers that help in processing signals, making them clearer and more useful for various applications. Imagine an op-amp as a super-smart assistant that can amplify weak signals so that they can be used effectively in devices like radios, televisions, and computers. An ideal op-amp would have infinite gain, meaning it could amplify signals without any limit, and it would also have infinite input impedance, which means it wouldn't draw any current from the source.\nWhy this matters: Op-Amps and Voltage Regulators helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "front": "What is the minimum input voltage for an LM7805 voltage regulator to output stable 5 V?",
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
          "id": "micro-circuits-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "content": "In the fascinating world of circuit analysis, we often encounter complex circuits that can be challenging to understand. However, we have powerful tools at our disposal to simplify these circuits: Thevenin and Norton equivalents. Let's break these concepts down into more manageable parts.\nA Thevenin equivalent circuit is a way to represent a complex circuit using a simple model. It consists of a voltage source, known as V_th, connected in series with a resistance, called R_th. This means that instead of dealing with all the individual components in a circuit, we can replace them with just these two elements. On the other hand, a Norton equivalent circuit represents the same complex circuit but in a different way. It consists of a current source, labeled I_N, in parallel with a resistance, R_N.\nTo find the Thevenin voltage (V_th), we measure the voltage across the terminals of the circuit when no load is connected, which is referred to as the open-circuit voltage. To determine the Thevenin resistance (R_th), we need to deactivate all independent sources in the circuit. This means we short-circuit any voltage sources (which effectively removes them from the circuit) and open-circuit any current sources. After doing this, we can calculate the equivalent resistance seen from the terminals. Interestingly, R_th is equal to R_N, the resistance in the Norton equivalent.\nThere is a key relationship between these values: I_N, the Norton current, can be calculated using the formula I_N = V_th / R_th. This relationship is crucial because it helps us understand how the circuit behaves when we connect different loads.\nOne important concept to remember is that maximum power transfer occurs when the load resistance matches the Thevenin resistance (R_th). This means that to get the most power out of our circuit, we want to ensure that the load we connect has the same resistance as R_th. The maximum power that can be delivered to the load can be calculated using the formula P_max = V_th² / (4 × R_th).\nThevenin and Norton equivalents are not just theoretical concepts; they are widely used in real-world applications, especially in modeling amplifier outputs and matching impedances. By mastering these techniques, you will be better equipped to analyze and design circuits effectively, making you a more skilled engineer in the field of electronics.\nContext recap: In the fascinating world of circuit analysis, we often encounter complex circuits that can be challenging to understand. However, we have powerful tools at our disposal to simplify these circuits: Thevenin and Norton equivalents. Let's break these concepts down into more manageable parts. A Thevenin equivalent circuit is a way to represent a complex circuit using a simple model.\nWhy this matters: Thevenin and Norton Equivalents helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints.\nGuided check: Ask yourself, \"What is the claim?\", \"Which evidence is strongest?\", and \"What would change my conclusion?\" Use the terms circuit, resistance, thevenin, norton, voltage, equivalent, load, equivalents while answering to reinforce vocabulary and precision."
        },
        {
          "id": "micro-circuits-101-l04-c2",
          "title": "Mesh Analysis",
          "content": "Mesh analysis is an important technique used in the field of circuit analysis, particularly when working with electrical circuits. This method is based on Kirchhoff's Voltage Law (KVL), which tells us that the total voltage around any closed loop in a circuit must equal zero. This principle is fundamental to understanding how electrical circuits function.\nIn mesh analysis, we focus on independent loops within a circuit, which are referred to as meshes. Each of these meshes is assigned a specific current, known as the mesh current. Typically, this current flows in a clockwise direction around the loop. To analyze each mesh, we write an equation based on KVL, which involves summing up the voltage drops across all components in that mesh. We use Ohm's Law, represented by the formula V = IR, to relate voltage (V), current (I), and resistance (R) in our calculations.\nWhen two meshes share a branch, the current flowing through that branch is determined by the difference between the mesh currents of the two loops. This relationship is crucial for accurately solving the circuit. After setting up the equations for all the meshes, we end up with a system of simultaneous linear equations. To find the unknown currents, we can use various methods such as substitution, elimination, or matrix techniques.\nIf there are N meshes in the circuit, we will need to create N equations to solve for all the unknown mesh currents. In some cases, if a current source is located on a branch that is shared between two meshes, we create what is known as a supermesh. This involves removing the shared boundary between the two meshes and adding an additional equation that reflects the behavior of the current source. This approach allows us to effectively analyze more complex circuits and understand how different components interact with one another. By mastering mesh analysis, you will gain valuable skills that are essential for anyone interested in electrical engineering and circuit design.\nContext recap: Mesh analysis is an important technique used in the field of circuit analysis, particularly when working with electrical circuits. This method is based on Kirchhoff's Voltage Law (KVL), which tells us that the total voltage around any closed loop in a circuit must equal zero. This principle is fundamental to understanding how electrical circuits function. In mesh analysis, we focus on independent loops within a circuit, which are referred to as meshes.\nWhy this matters: Mesh Analysis helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l04-c3",
          "title": "Nodal Analysis and Superposition",
          "content": "Nodal analysis is a vital technique used in circuit analysis, and it relies on a fundamental principle known as Kirchhoff's Current Law (KCL). This law tells us that the total amount of electric current flowing into a point in a circuit, called a node, must be equal to the total amount of current flowing out of that node. To apply nodal analysis, we first select one node to serve as our reference point, which is often referred to as ground and is assigned a voltage of 0 volts. After establishing this reference point, we can write KCL equations for all the other nodes in the circuit. Each of these equations will relate the currents flowing into and out of the nodes to the voltages at those nodes. To express these relationships, we use the concept of conductance, which is the reciprocal of resistance (G = 1/R). This means that conductance tells us how easily current can flow through a component in the circuit.\nIn cases where a voltage source connects two nodes that are not designated as the reference node, we create what is known as a supernode. This supernode combines the two nodes into a single equation, allowing us to analyze the circuit more effectively. The voltage source then adds an additional constraint that helps us solve for the unknown voltages in the circuit.\nAnother important concept related to nodal analysis is the superposition theorem. This theorem is particularly useful when dealing with circuits that have multiple independent sources, such as batteries or generators. The superposition theorem states that we can analyze the effect of each source on the circuit independently. To do this, we temporarily deactivate all other sources while focusing on one source at a time. Once we have determined the contribution of each source, we can then add these contributions together to find the overall response of the circuit. This method is especially helpful when working with circuits that include both alternating current (AC) and direct current (DC) sources, as it simplifies the analysis process and allows for a clearer understanding of how each source affects the circuit as a whole.\nContext recap: Nodal analysis is a vital technique used in circuit analysis, and it relies on a fundamental principle known as Kirchhoff's Current Law (KCL). This law tells us that the total amount of electric current flowing into a point in a circuit, called a node, must be equal to the total amount of current flowing out of that node. To apply nodal analysis, we first select one node to serve as our reference point, which is often referred to as ground and is assigned a voltage of 0 volts. After establishing this reference point, we can write KCL equations for all the other nodes in the circuit.\nWhy this matters: Nodal Analysis and Superposition helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
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
          "content": "Passive filters are special types of circuits that help manage electrical signals by using components like resistors, capacitors, and inductors. These components work together to either allow certain frequencies to pass through or to block them. For instance, a first-order RC low-pass filter is designed to let frequencies below a specific cutoff frequency (denoted as f_c) pass through while reducing the strength of higher frequencies. This reduction happens at a rate of -20 decibels for every decade of frequency increase. You can calculate the cutoff frequency using the formula: f_c = 1 / (2π × R × C), where R is the resistance in ohms and C is the capacitance in farads.\nIf you switch the positions of the resistor and capacitor in the circuit, you create a high-pass filter. This type of filter also uses the same formula for calculating the cutoff frequency. On the other hand, a band-pass filter combines the features of both low-pass and high-pass filters. It allows only a specific range of frequencies to pass through while blocking others. In an RLC circuit, which includes a resistor (R), inductor (L), and capacitor (C), the center frequency can be calculated using the formula: f₀ = 1 / (2π × √(LC)). The bandwidth of the filter, which tells you how wide the range of frequencies is that can pass through, is determined by a value called the quality factor (Q). This quality factor is the ratio of the center frequency to the bandwidth. A higher Q value indicates a narrower range of frequencies that can pass through, which means the filter is better at selecting specific frequencies.\nWhile passive filters are known for their simplicity and reliability, they do have a downside. They can cause some loss in signal strength, meaning they do not amplify the signal. For example, if you use a resistor with a value of 1 kΩ and a capacitor with a value of 0.1 µF, you can calculate the cutoff frequency to be approximately 1,592 Hz. This frequency is particularly useful for filtering out unwanted noise in audio signals, ensuring that only the desired sounds are heard clearly. Understanding how these filters work is essential for anyone interested in electronics and signal processing, as they play a crucial role in designing effective circuits.\nContext recap: Passive filters are special types of circuits that help manage electrical signals by using components like resistors, capacitors, and inductors. These components work together to either allow certain frequencies to pass through or to block them. For instance, a first-order RC low-pass filter is designed to let frequencies below a specific cutoff frequency (denoted as f_c) pass through while reducing the strength of higher frequencies. This reduction happens at a rate of -20 decibels for every decade of frequency increase.\nWhy this matters: Passive Filters: Low-Pass, High-Pass, Band-Pass helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l05-c2",
          "title": "Amplifier Gain and Active Filters",
          "content": "Active filters are an important part of electronic circuits and are built using operational amplifiers, commonly known as op-amps. These filters help improve signal quality by providing gain and maintaining a high input impedance, which means they can effectively process weak signals without losing their strength. One popular design for a low-pass active filter is called the Sallen-Key topology. This design uses two resistor-capacitor (RC) stages connected to a non-inverting op-amp. The result is a second-order filter that reduces the strength of higher frequencies at a rate of -40 decibels per decade, which means that for every tenfold increase in frequency, the output signal decreases significantly.\nAnother important concept in understanding op-amps is the gain-bandwidth product (GBW). This value is crucial because it sets a limit on how well the op-amp can perform. For instance, if you have an op-amp with a GBW of 1 MHz and you set its gain to 100, the maximum frequency you can effectively use is limited to 10 kHz. This relationship is vital for designing circuits that need to operate within specific frequency ranges.\nWhen selecting the type of active filter to use, you have several options, each with its unique characteristics. The Butterworth filter is known for having a smooth and flat passband, making it suitable for general filtering applications. The Chebyshev filter, on the other hand, has a steeper rolloff and some ripple in the passband, which is useful when you need a sharp cutoff between frequencies. Lastly, the Bessel filter is designed to maintain a flat group delay, which is particularly important in applications where the timing of signals matters, such as in pulse and time-domain applications.\nAdditionally, instrumentation amplifiers, like the INA128, are specialized types of op-amps that provide precise differential gain while rejecting common-mode signals. This feature makes them essential for accurately conditioning signals from various sensors, ensuring that the output is clean and reliable. Understanding these concepts will help you design better circuits and improve your skills in electronics.\nContext recap: Active filters are an important part of electronic circuits and are built using operational amplifiers, commonly known as op-amps. These filters help improve signal quality by providing gain and maintaining a high input impedance, which means they can effectively process weak signals without losing their strength. One popular design for a low-pass active filter is called the Sallen-Key topology. This design uses two resistor-capacitor (RC) stages connected to a non-inverting op-amp.\nWhy this matters: Amplifier Gain and Active Filters helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l05-c3",
          "title": "ADC and DAC Basics",
          "content": "Analog-to-digital converters, or ADCs, are important devices that help us understand and work with the world around us by converting continuous signals, like sound or light, into digital values that computers can process. Imagine you are listening to music; the sound waves are continuous analog signals. An ADC takes these waves and samples them at specific intervals, turning them into a series of numbers that represent the sound. The quality of this conversion is measured in bits. For instance, a 10-bit ADC can create 1,024 different levels of sound from the original signal. If the reference voltage is 3.3 volts, each of these levels, known as least significant bits (LSBs), represents about 3.22 millivolts.\nTo ensure that we accurately capture the sound without losing important details, we follow a rule called the Nyquist-Shannon sampling theorem. This rule states that we need to sample the signal at least twice as fast as the highest frequency we want to capture. To help with this, we often use a special filter called an anti-aliasing low-pass filter before the ADC. This filter helps to remove any high-frequency noise that could distort our measurements.\nThere are different types of ADC architectures designed for various needs. For example, the successive approximation (SAR) ADC is great for moderate speed and resolution, while the delta-sigma (ΔΣ) ADC is perfect for high resolution at slower speeds. On the other hand, flash converters are used when we need very high speed, although they may sacrifice some resolution.\nNow, let's talk about digital-to-analog converters, or DACs. These devices do the opposite of ADCs; they take digital codes and convert them back into analog voltages. When a DAC produces an output, it often creates a staircase-like waveform. To make this output smooth and continuous, we use a reconstruction filter, which is also a low-pass filter. This filter helps to eliminate the sharp edges of the staircase and provides a smooth signal.\nTogether, ADCs and DACs play a crucial role in bridging the gap between the analog signals we receive from sensors and the digital systems that process this information. They allow us to interact with the digital world while still being connected to the physical world around us.\nContext recap: Analog-to-digital converters, or ADCs, are important devices that help us understand and work with the world around us by converting continuous signals, like sound or light, into digital values that computers can process. Imagine you are listening to music; the sound waves are continuous analog signals. An ADC takes these waves and samples them at specific intervals, turning them into a series of numbers that represent the sound. The quality of this conversion is measured in bits.\nWhy this matters: ADC and DAC Basics helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "GBW is constant for a given op-amp: increasing closed-loop gain proportionally decreases the usable bandwidth. For example, GBW = 1 MHz at gain 10 limits bandwidth to 100 kHz."
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
          "id": "micro-circuits-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
          "explanation": "Maximum power transfer occurs when R_load = R_th = 4 Ω. Total current = 12 / (4+4) = 1.5 A. Power in load = 1.5² × 4 = 9 W, or equivalently V_th² / (4 × R_th) = 144 / 16 = 9 W."
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
          "explanation": "f_c = 1 / (2π × R × C) = 1 / (2π × 10,000 × 10 × 10⁻⁹) = 1 / (6.283 × 10⁻⁴) ≈ 1,592 Hz."
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
          "content": "Designing a printed circuit board (PCB) is an exciting journey that begins with a step called schematic capture. This is where you use specialized software tools like KiCad, Altium Designer, or Eagle to create a visual diagram of your circuit. Think of it as drawing a map that shows how all the different parts of your circuit connect to each other. Each symbol you draw in your schematic represents a specific electronic component, such as a resistor or a capacitor. It’s very important that these symbols are accurately linked to what we call a physical footprint. A footprint is a detailed pattern that indicates where the copper pads, courtyard, and silkscreen outline will be located on the actual PCB. To make sure everything fits perfectly, these footprints must adhere to industry standards, such as IPC-7351, and match the dimensions suggested by the manufacturers of the components you are using.\nYou will encounter various types of component packages in your designs. Some common ones include through-hole DIP (dual in-line package), which is often used for larger components, and surface-mount packages like SOIC (small outline integrated circuit), QFP (quad flat package), QFN (no-lead), and BGA (ball grid array) which are used for smaller, more compact designs.\nAfter you have completed your schematic, the next important step is to perform an electrical rules check (ERC). This step is crucial because it helps you identify any potential connectivity issues in your design. The ERC will flag problems such as unconnected pins, short circuits, or mismatched pin types that could cause your circuit to malfunction.\nBefore you can move on to the layout phase of your PCB design, it is essential to have a well-annotated schematic. This means that each component should have a proper reference designator, like R1 for resistors, C1 for capacitors, and U1 for integrated circuits, along with clear net names. This organization will help you and others understand your design better and ensure a smoother transition to the next steps in the PCB design process.\nContext recap: Designing a printed circuit board (PCB) is an exciting journey that begins with a step called schematic capture. This is where you use specialized software tools like KiCad, Altium Designer, or Eagle to create a visual diagram of your circuit. Think of it as drawing a map that shows how all the different parts of your circuit connect to each other. Each symbol you draw in your schematic represents a specific electronic component, such as a resistor or a capacitor.\nWhy this matters: Schematic Capture and Component Footprints helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l07-c2",
          "title": "Trace Width, Vias, and Layer Stackup",
          "content": "In the world of PCB (Printed Circuit Board) design, copper traces play a crucial role as they are the pathways that carry electrical current between various components. Understanding how to design these traces properly is essential for creating effective and safe electronic devices. The width of these copper traces is very important and must be calculated based on several factors: the amount of current they will carry, how much heat they can handle without overheating, and the thickness of the copper used in the board. According to the IPC-2221 standards, if you have a trace on an outer layer that has a thickness of 1 oz/ft² (which is approximately 35 micrometers), and you want to allow for a temperature rise of 10 °C, you will need a trace width of about 10 mils (0.254 mm) to safely carry a current of 1 ampere. If the current increases, you will need to either make the traces wider or use thicker copper, such as 2 oz, to ensure safety and efficiency.\nAnother important aspect of PCB design is the use of vias. Vias are small holes that allow connections between different layers of the PCB. There are three main types of vias:\n1. **Through-hole vias**: These go all the way through the board, connecting the top layer to the bottom layer.\n2. **Blind vias**: These connect an outer layer to one or more inner layers without going all the way through the board.\n3. **Buried vias**: These connect only the inner layers of the PCB and do not reach the outer layers.\nWhen designing a PCB, a standard two-layer board consists of a top copper layer, a dielectric core (usually made from a material called FR-4, which is about 1.6 mm thick), and a bottom copper layer. If you are working with a four-layer board, it will include dedicated inner layers for ground and power. This design helps to reduce electromagnetic interference (EMI) and improves the quality of the signals being transmitted across the board.\nTo ensure that everything is designed correctly and meets safety standards, a design rules check (DRC) is performed. This check enforces minimum requirements for trace width, clearance between traces, the size of the via annular rings, and other important manufacturing specifications. By following these guidelines, you can create PCBs that are not only functional but also reliable and safe for use in various electronic applications.\nContext recap: In the world of PCB (Printed Circuit Board) design, copper traces play a crucial role as they are the pathways that carry electrical current between various components. Understanding how to design these traces properly is essential for creating effective and safe electronic devices. The width of these copper traces is very important and must be calculated based on several factors: the amount of current they will carry, how much heat they can handle without overheating, and the thickness of the copper used in the board. According to the IPC-2221 standards, if you have a trace on an outer layer that has a thickness of 1 oz/ft² (which is approximately 35 micrometers), and you want to allow for a temperature rise of 10 °C, you will need a trace width of about 10 mils (0.254 mm) to safely carry a current of 1 ampere."
        },
        {
          "id": "micro-circuits-101-l07-c3",
          "title": "Ground Planes and Manufacturing Outputs",
          "content": "In the world of PCB (Printed Circuit Board) design, having a continuous ground plane is incredibly important. A ground plane is essentially a layer of copper that is connected to the ground, and it plays a crucial role in how the circuit functions. By providing a low-resistance path for signals to return, it helps ensure that the electrical signals can travel efficiently without interference. This is especially important because it reduces electromagnetic interference (EMI), which can disrupt the performance of the circuit. Additionally, a good ground plane helps with heat dissipation, meaning it can effectively manage the heat generated by the components on the board.\nWhen designing your PCB, it's essential to keep the ground plane intact, especially beneath sensitive signal traces. If there are any splits or slots in the ground plane, it can force the return currents to take longer paths. This not only increases inductance but can also lead to unwanted noise in the circuit, which can affect its performance. To maintain a stable power supply to integrated circuits (ICs), decoupling capacitors, which are typically around 100 nF and made of ceramic materials, should be placed as close as possible to the power pins of each IC. It's also important to connect these capacitors to the ground plane using short and wide traces to minimize resistance and improve performance.\nOnce you have completed the PCB layout, the next step is to prepare the manufacturing outputs. This is a critical phase where you create various files that will guide the manufacturing process. One of the key outputs is the Gerber files, which are in RS-274X format. These files define each copper layer, the solder mask, the silkscreen, and the outline of the board itself. Additionally, an Excellon drill file is created to specify where holes should be placed on the board and their respective sizes. Another important document is the bill of materials (BOM), which lists all the components needed for the board, along with a centroid (pick-and-place) file that assists in automated assembly.\nBefore sending your design off for fabrication, it's essential to conduct a final review. This review checks for important details such as thermal relief on ground pins, the presence of proper fiducial markers, and ensuring that the board dimensions are accurate. This thorough checking process helps to avoid any issues during manufacturing and ensures that the final product will work as intended.\nContext recap: In the world of PCB (Printed Circuit Board) design, having a continuous ground plane is incredibly important. A ground plane is essentially a layer of copper that is connected to the ground, and it plays a crucial role in how the circuit functions. By providing a low-resistance path for signals to return, it helps ensure that the electrical signals can travel efficiently without interference. This is especially important because it reduces electromagnetic interference (EMI), which can disrupt the performance of the circuit.\nWhy this matters: Ground Planes and Manufacturing Outputs helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "Using a solderless breadboard is one of the fastest and most efficient ways to prototype your electronic circuits before you finalize a printed circuit board (PCB). A standard full-size breadboard features 830 tie points, which are arranged in rows of five holes that are internally connected. This design allows for easy connections between different components. Additionally, there are two power bus strips running along each side of the board, which are essential for distributing power throughout your circuit. To make the best use of a breadboard, it's important to follow some best practices. First, connect your power supply to both bus strips and ensure that you bridge them at multiple points. This helps to create a low-resistance power distribution system, which is crucial for the performance of your circuit. Next, keep wire jumps as short as possible. Shorter wire connections help minimize unwanted inductance, which can interfere with your circuit's performance.\nUsing color-coded wires is also a great practice. For example, use red wires for positive voltage (often referred to as V+), black wires for ground connections, and other colors for signal connections. This color-coding helps you quickly identify the purpose of each wire, making troubleshooting much easier. When placing integrated circuits (ICs) on the breadboard, position them across the center channel. This arrangement ensures that each pin of the IC has its own dedicated row, which is important for maintaining a clean and organized circuit layout.\nAnother useful tip is to add 100 nF decoupling capacitors close to the power pins of the ICs. These capacitors help stabilize the circuit by filtering out noise and providing a steady power supply to the ICs. Breadboards are effective for frequencies up to about 10 MHz. However, if you need to work with higher frequencies, it is advisable to consider using stripboard or dead-bug soldering directly onto a copper ground plane. These methods can provide better performance and signal integrity at higher frequencies, ensuring that your circuit operates reliably. By following these guidelines, you can create effective prototypes that help you test and refine your electronic designs before moving on to more permanent solutions like PCBs.\nContext recap: Using a solderless breadboard is one of the fastest and most efficient ways to prototype your electronic circuits before you finalize a printed circuit board (PCB). A standard full-size breadboard features 830 tie points, which are arranged in rows of five holes that are internally connected. This design allows for easy connections between different components. Additionally, there are two power bus strips running along each side of the board, which are essential for distributing power throughout your circuit.\nWhy this matters: Breadboarding Techniques helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l08-c2",
          "title": "Multimeter and Continuity Testing",
          "content": "A digital multimeter, often referred to as a DMM, is a crucial instrument for anyone working with electrical circuits. It allows you to measure various electrical properties, making it an indispensable tool in both professional and educational settings. Let's explore how to use a DMM effectively in different modes.\nIn DC voltage mode, the DMM measures the potential difference, or voltage, between two points in a circuit. To use this mode correctly, always connect the red probe to the point that has a higher voltage (the more positive point) and the black probe to the ground or reference point. This ensures accurate readings and helps you understand the voltage levels in your circuit.\nWhen you switch to AC voltage mode, the DMM will display the root mean square (RMS) value of the alternating current signals. This is important because AC voltage varies over time, and the RMS value gives you a reliable measure of its effective value.\nIf you want to measure DC current, you will need to break the circuit first. This means you have to open the circuit at the point where you want to measure the current and connect the multimeter in series with the circuit. It's important to be cautious here because the ammeter has very low input impedance. If you accidentally connect it across a voltage source instead of in series, it can blow the fuse in the multimeter, rendering it unusable until repaired.\nIn resistance mode, the multimeter sends a small test current through the component you are testing. It then calculates the resistance using the formula R = V/I, where R is resistance, V is voltage, and I is current. For the most accurate results, make sure the component is unpowered and ideally disconnected from the circuit. This prevents any parallel paths from affecting your readings and gives you a clear understanding of the component's resistance.\nThe continuity mode is particularly handy for checking connections in your circuit. When the resistance is below a certain threshold, typically less than 50 ohms, the multimeter will beep. This feature is invaluable for verifying solder joints, ensuring cable integrity, and identifying any short circuits that may be present.\nLastly, in diode mode, the multimeter applies a small forward current to the diode and measures the voltage drop across its junction. For silicon diodes, this voltage drop is usually around 0.6 volts, while for Schottky diodes, it is approximately 0.2 volts. Understanding these values can help you determine whether a diode is functioning correctly.\nUsing a digital multimeter effectively is a fundamental skill in electronics and engineering. By mastering these different modes, you can troubleshoot circuits, test components, and ensure that your projects are functioning as intended. Always remember to follow safety precautions while working with electrical devices to protect yourself and your equipment.\nContext recap: A digital multimeter, often referred to as a DMM, is a crucial instrument for anyone working with electrical circuits. It allows you to measure various electrical properties, making it an indispensable tool in both professional and educational settings. Let's explore how to use a DMM effectively in different modes. In DC voltage mode, the DMM measures the potential difference, or voltage, between two points in a circuit.\nWhy this matters: Multimeter and Continuity Testing helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "micro-circuits-101-l08-c3",
          "title": "Oscilloscope Basics and Power Supply Design",
          "content": "An oscilloscope is an essential tool in electronics that helps you see how voltage changes over time. This visualization is crucial for understanding various types of signals, including alternating current (AC) signals, sudden changes in voltage known as transients, and digital waveforms that represent binary data. When using an oscilloscope, you'll notice several important controls. The vertical scale allows you to adjust how many volts are represented per division on the screen, while the horizontal scale shows how much time each division represents. Another vital feature is the trigger function, which helps stabilize repetitive waveforms. It does this by ensuring that each sweep of the oscilloscope starts at the same point on the signal, making it easier to analyze the waveform accurately.\nThe bandwidth of an oscilloscope is another critical aspect to understand. It indicates the range of frequencies the oscilloscope can accurately display. Specifically, the bandwidth tells you the frequency at which the amplitude of the displayed signal drops to -3 dB, which is about 70.7% of the original signal's strength. For instance, if you're working with a square wave that has a frequency of 100 MHz, it's advisable to use an oscilloscope with a bandwidth of at least 500 MHz. This is known as the 5× rule and ensures that you can capture the harmonics of the signal accurately.\nWhen using probes with the oscilloscope, it's important to calibrate them properly. You can do this by using the oscilloscope's built-in 1 kHz square wave, which helps ensure that your readings are accurate and reliable.\nNow, let's talk about powering your prototypes. A benchtop linear power supply is a great choice for this purpose. It provides clean, low-noise direct current (DC) power, which is essential for reliable operation of your electronic circuits. One of the key features of a good power supply is adjustable voltage and current limiting. This current limiting feature is crucial because it helps protect your components from damage in case of a short circuit. By setting the current limit slightly above the expected current draw of your circuit, you can ensure that the power supply will enter constant-current mode before any components can be harmed. This proactive approach to safety is vital in any electronics project, helping you to work confidently and effectively.\nContext recap: An oscilloscope is an essential tool in electronics that helps you see how voltage changes over time. This visualization is crucial for understanding various types of signals, including alternating current (AC) signals, sudden changes in voltage known as transients, and digital waveforms that represent binary data. When using an oscilloscope, you'll notice several important controls. The vertical scale allows you to adjust how many volts are represented per division on the screen, while the horizontal scale shows how much time each division represents.\nWhy this matters: Oscilloscope Basics and Power Supply Design helps learners in Engineering connect ideas from Micro-Circuits and PCB Design to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "explanation": "LSB = V_ref / 2^n = 5 / 4096 ≈ 1.22 mV. Each digital step corresponds to a 1.22 mV change in the analog input."
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
          "explanation": "Total current through the resistor: I_total = (12 − 5.1) / 1000 = 6.9 mA. The load draws 2 mA, so the Zener carries I_Z = 6.9 − 2 = 4.9 mA, maintaining the 5.1 V regulation."
        }
      ]
    }
  ]
};
