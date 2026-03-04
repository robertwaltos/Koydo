import type { LearningModule } from "@/lib/modules/types";

export const ElectricianElectricity101Module: LearningModule = {
  "id": "electrician-electricity-101",
  "title": "Electrician Fundamentals",
  "description": "A comprehensive introduction to the electrical trades covering residential and commercial wiring methods, the National Electrical Code (NEC), overcurrent protection, grounding and bonding, GFCI/AFCI requirements, three-phase power systems, motor controls, and jobsite safety including lockout/tagout and arc-flash awareness. Designed for apprentice and pre-apprentice electricians preparing for licensing exams.",
  "subject": "Trades",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "trades",
    "electrician"
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
    "Apply Ohm's Law and the power formula to solve circuit problems encountered on the job",
    "Select the correct wiring method and conductor size using NEC ampacity tables",
    "Interpret key NEC articles for branch circuits, overcurrent protection, and grounding",
    "Wire common residential circuits including 3-way and 4-way switch configurations",
    "Describe three-phase power distribution, transformer connections, and motor-control basics",
    "Perform safe lockout/tagout procedures and identify arc-flash boundaries",
    "Diagnose common electrical faults using a digital multimeter"
  ],
  "lessons": [
    {
      "id": "electrician-electricity-101-l01",
      "title": "Electrical Theory for Electricians",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "electrician-electricity-101-l01-c1",
          "title": "Voltage, Current, and Resistance",
          "content": "In every electrical circuit, there are three important concepts that you need to understand: voltage, current, and resistance. Let's break these down further to see how they work together.\nVoltage, which we represent with the letter V, is like the pressure that pushes electric charges through a wire. You can think of it as the force that drives electricity, similar to how water pressure pushes water through a hose. We measure voltage in units called volts.\nCurrent, represented by the letter I, is the flow of electrons moving through the circuit. Imagine it as the amount of water flowing through that hose. We measure current in amperes, or amps for short. The more amps, the more electrons are flowing.\nResistance, denoted by R, is what slows down the flow of current. You can think of it as a narrow section in the hose that restricts water flow. We measure resistance in ohms. The higher the resistance, the less current can flow through the circuit.\nA key principle that connects these three concepts is Ohm's Law. This law states that voltage equals current multiplied by resistance (V = I × R). For example, if you have a circuit with a voltage of 120 volts and a resistance of 10 ohms, you can use Ohm's Law to find the current. In this case, the current flowing through that circuit would be 12 amps.\nUnderstanding how these quantities relate to each other is crucial for anyone working with electricity. This knowledge forms the basis for troubleshooting electrical issues, calculating loads, and determining the right size for wires. Mastering these concepts will help you become a skilled electrician and ensure safety in your work.\nContext recap: In every electrical circuit, there are three important concepts that you need to understand: voltage, current, and resistance. Let's break these down further to see how they work together. Voltage, which we represent with the letter V, is like the pressure that pushes electric charges through a wire. You can think of it as the force that drives electricity, similar to how water pressure pushes water through a hose.\nWhy this matters: Voltage, Current, and Resistance helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l01-c2",
          "title": "Power, Energy, and the Power Formula",
          "content": "Power is an important concept in electricity that tells us how quickly electrical energy is being used. We measure power in units called watts. To find out how much power is being used in a circuit, we can use a simple formula: P = V × I. In this formula, P stands for power, V represents voltage, and I stands for current. For example, if you have a circuit that operates at 120 volts and draws a current of 15 amps, you can calculate the power by multiplying these two numbers together. In this case, the power used by the circuit would be 1,800 watts.\nNow, let’s talk about energy. Energy is the total amount of power that is consumed over a certain period of time. We usually measure energy in watt-hours or kilowatt-hours (kWh). This measurement is really important because utility companies, which provide electricity to our homes and businesses, charge us based on how many kilowatt-hours we use.\nAs electricians, we often use these formulas to help us figure out the right sizes for wires, circuit breakers, and transformers. It’s crucial to ensure that everything is sized correctly to handle the power being used safely.\nAdditionally, we can combine Ohm's Law with the power formula to derive other useful equations. For instance, we can find equations like P = I²R and P = V²/R. These equations are particularly helpful when we only know two of the three quantities: power, voltage, or current. Understanding these relationships is essential for anyone working in the electrical field, as it helps ensure safety and efficiency in electrical systems.\nContext recap: Power is an important concept in electricity that tells us how quickly electrical energy is being used. We measure power in units called watts. To find out how much power is being used in a circuit, we can use a simple formula: P = V × I. In this formula, P stands for power, V represents voltage, and I stands for current.\nWhy this matters: Power, Energy, and the Power Formula helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l01-c3",
          "title": "AC vs DC and Phase Systems",
          "content": "When we talk about electrical current, there are two main types you should know: direct current (DC) and alternating current (AC). Direct current is the kind of electricity that flows in just one direction. You can find it in batteries and many of the electronic devices we use every day, like your phone or laptop. This type of current is very stable and is great for devices that need a constant flow of electricity.\nOn the other hand, we have alternating current, which is quite different. Alternating current changes direction regularly, usually at a frequency of 60 hertz in North America. This means that the flow of electricity goes back and forth many times each second. Most of the electricity that powers our homes and buildings is AC because it can be easily transformed to higher or lower voltages. This transformation is important for sending electricity over long distances without losing too much energy.\nIn most homes, we use what is called single-phase power. This setup involves two wires: one is a hot wire that carries the current, and the other is a neutral wire that completes the circuit. This arrangement is perfect for powering everyday appliances like refrigerators, lights, and televisions.\nHowever, in larger commercial buildings, you will often find three-phase power. This system uses three hot wires that are spaced 120 degrees apart from each other. This configuration allows for a more stable and consistent supply of electricity, which is especially important for running heavy machinery and motors.\nAs an electrician, it is crucial to understand both AC and DC systems. This knowledge helps you size electrical feeders correctly and balance loads effectively, ensuring that everything runs smoothly and safely.\nContext recap: When we talk about electrical current, there are two main types you should know: direct current (DC) and alternating current (AC). Direct current is the kind of electricity that flows in just one direction. You can find it in batteries and many of the electronic devices we use every day, like your phone or laptop. This type of current is very stable and is great for devices that need a constant flow of electricity.\nWhy this matters: AC vs DC and Phase Systems helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l01-f1",
          "front": "State Ohm's Law.",
          "back": "V = I × R — Voltage equals current multiplied by resistance."
        },
        {
          "id": "electrician-electricity-101-l01-f2",
          "front": "What unit measures electrical power?",
          "back": "The watt (W). Power = Voltage × Current."
        },
        {
          "id": "electrician-electricity-101-l01-f3",
          "front": "What is the frequency of AC power in North America?",
          "back": "60 Hz — the current alternates direction 60 times per second."
        },
        {
          "id": "electrician-electricity-101-l01-f4",
          "front": "How do single-phase and three-phase power differ?",
          "back": "Single-phase uses one AC waveform; three-phase uses three waveforms 120° apart, delivering smoother, more efficient power for heavy loads."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l01-a1",
          "type": "image",
          "title": "Ohm's Law Triangle",
          "content": "A triangle diagram showing V at the top, I and R at the bottom — cover the unknown quantity to reveal the formula."
        },
        {
          "id": "electrician-electricity-101-l01-a2",
          "type": "animation",
          "title": "AC Waveform Visualization",
          "content": "Animated sine wave showing voltage alternation at 60 Hz with peak, RMS, and zero-crossing labels."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l02",
      "title": "Wiring Methods and Materials",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "electrician-electricity-101-l02-c1",
          "title": "NM-B (Romex) and MC Cable",
          "content": "Non-metallic sheathed cable, often referred to as NM-B or Romex, is the most commonly used wiring method in homes. This type of cable is designed to be safe and efficient, consisting of two or more insulated wires that carry electricity, along with a bare grounding wire that helps prevent electrical shocks. All of these wires are protected by a durable PVC jacket, which keeps them safe from damage. NM-B is ideal for use in dry areas within wooden buildings, making it a popular choice for residential construction. However, it is important to note that NM-B cannot be used in commercial buildings that are taller than three stories due to safety regulations.\nOn the other hand, we have metal-clad (MC) cable. This type of cable features a strong aluminum armor that not only protects the wires inside from physical damage but also provides a grounding path in many locations. This grounding path is crucial for safety, as it helps to prevent electrical hazards. MC cable is versatile and can be used in both residential and commercial settings, making it a valuable option for electricians. In fact, there are situations where using MC cable is required, especially in places where NM-B is not allowed.\nUnderstanding the differences between NM-B and MC cable is vital for electricians. It ensures that they can make informed decisions about which type of wiring to use in various situations, ultimately leading to safer and more reliable electrical installations. By knowing when and where to use each type of cable, electricians can help protect both people and property from electrical risks.\nContext recap: Non-metallic sheathed cable, often referred to as NM-B or Romex, is the most commonly used wiring method in homes. This type of cable is designed to be safe and efficient, consisting of two or more insulated wires that carry electricity, along with a bare grounding wire that helps prevent electrical shocks. All of these wires are protected by a durable PVC jacket, which keeps them safe from damage. NM-B is ideal for use in dry areas within wooden buildings, making it a popular choice for residential construction.\nWhy this matters: NM-B (Romex) and MC Cable helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrician-electricity-101-l02-c2",
          "title": "Conduit Systems: EMT and Rigid",
          "content": "Electrical metallic tubing, commonly referred to as EMT, is a lightweight and thin-walled steel conduit that is widely used in commercial construction projects. One of the key advantages of EMT is its ease of bending, which allows electricians to create smooth and efficient pathways for branch circuits and feeders. EMT is typically connected using set-screw or compression fittings, ensuring a secure and reliable installation.\nIn contrast, rigid metal conduit, known as RMC, features thicker walls and utilizes threaded connections. This design provides enhanced mechanical protection, making RMC an excellent choice for installations in outdoor environments, underground settings, or areas that may be considered hazardous.\nThere is also a type of conduit called intermediate metal conduit (IMC), which has a wall thickness that is between that of EMT and RMC. IMC offers a balance of strength and weight, making it suitable for various applications.\nFor situations where corrosion is a concern, such as in underground installations or in environments with harsh chemicals, PVC conduit is often the preferred option. PVC is resistant to corrosion and can help protect electrical wiring from damage.\nWhen selecting the appropriate type of conduit for a project, electricians must carefully consider several factors, including the specific location of the installation, the relevant local building codes, and the required level of physical protection for the wiring. Making the right choice ensures safety and compliance with regulations, which is crucial in electrical work.\nContext recap: Electrical metallic tubing, commonly referred to as EMT, is a lightweight and thin-walled steel conduit that is widely used in commercial construction projects. One of the key advantages of EMT is its ease of bending, which allows electricians to create smooth and efficient pathways for branch circuits and feeders. EMT is typically connected using set-screw or compression fittings, ensuring a secure and reliable installation. In contrast, rigid metal conduit, known as RMC, features thicker walls and utilizes threaded connections.\nWhy this matters: Conduit Systems: EMT and Rigid helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l02-c3",
          "title": "Wire Gauges, Ampacity, and Junction Boxes",
          "content": "The American Wire Gauge (AWG) system is an important standard used to measure the size of electrical wires. In this system, smaller numbers represent larger wire sizes. For instance, in residential wiring, you will often encounter 14 AWG wires, which are suitable for circuits that carry up to 15 amps of current. Similarly, 12 AWG wires are used for circuits that can handle 20 amps, while 10 AWG wires are designed for circuits that can carry 30 amps. Understanding these sizes is crucial for ensuring that electrical systems function safely and efficiently.\nThe National Electrical Code (NEC) provides guidelines that help electricians determine the appropriate wire sizes for different applications. One of the key resources in the NEC is Table 310.16, which lists the ampacity ratings for various wire sizes. Ampacity refers to the maximum amount of electrical current a wire can safely carry without overheating, and this rating can change based on the type of insulation used and the temperature of the environment where the wire is installed.\nWhen electricians connect wires, they must use approved junction boxes and connectors. This is essential for maintaining safety in electrical installations. Additionally, it is vital to perform box fill calculations as outlined in NEC Article 314. These calculations ensure that junction boxes are adequately sized to hold the number of wires, devices, and clamps they contain. Proper box fill prevents overheating and ensures there is enough space for safe working conditions, which is crucial for both the electrician and the safety of the home’s electrical system.\nContext recap: The American Wire Gauge (AWG) system is an important standard used to measure the size of electrical wires. In this system, smaller numbers represent larger wire sizes. For instance, in residential wiring, you will often encounter 14 AWG wires, which are suitable for circuits that carry up to 15 amps of current. Similarly, 12 AWG wires are used for circuits that can handle 20 amps, while 10 AWG wires are designed for circuits that can carry 30 amps.\nWhy this matters: Wire Gauges, Ampacity, and Junction Boxes helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l02-f1",
          "front": "Where is NM-B (Romex) cable permitted?",
          "back": "In dry locations within residential and wood-frame buildings, generally not above three floors per NEC 334.10."
        },
        {
          "id": "electrician-electricity-101-l02-f2",
          "front": "What NEC table provides conductor ampacity ratings?",
          "back": "NEC Table 310.16 — Allowable Ampacities of Insulated Conductors."
        },
        {
          "id": "electrician-electricity-101-l02-f3",
          "front": "What is the ampacity of 12 AWG copper THHN at 30 °C?",
          "back": "30 A per Table 310.16, but it is typically used on 20 A circuits per NEC 240.4(D)."
        },
        {
          "id": "electrician-electricity-101-l02-f4",
          "front": "What is the purpose of a junction box?",
          "back": "To enclose wire splices and connections, providing mechanical protection and access for future maintenance."
        }
      ],
      "metadata": {
        "prompts": [
          "Compare NM-B and MC cable: list one advantage and one limitation of each.",
          "Using NEC Table 310.16, select the correct conductor size for a 40 A branch circuit.",
          "Calculate the minimum box fill for a 4×4 junction box containing four 12 AWG conductors plus two cable clamps."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-101-l02-a1",
          "type": "practice",
          "title": "Cable Identification Drill",
          "content": "Match cable types (NM-B, MC, UF-B, SE) to their permitted installation locations and jacket markings."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l03",
      "title": "Theory & Wiring Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "electrician-electricity-101-l03-q1",
          "text": "A 240 V circuit has a load resistance of 20 Ω. What current does it draw?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "6 A"
            },
            {
              "id": "b",
              "text": "12 A"
            },
            {
              "id": "c",
              "text": "24 A"
            },
            {
              "id": "d",
              "text": "48 A"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Using Ohm's Law: I = V / R = 240 / 20 = 12 A."
        },
        {
          "id": "electrician-electricity-101-l03-q2",
          "text": "Which wiring method is generally prohibited in commercial buildings above three floors?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "MC cable"
            },
            {
              "id": "b",
              "text": "EMT conduit"
            },
            {
              "id": "c",
              "text": "NM-B (Romex)"
            },
            {
              "id": "d",
              "text": "Rigid metal conduit"
            }
          ],
          "correctOptionId": "c",
          "explanation": "NEC 334.10 restricts NM-B cable from commercial buildings exceeding three floors above grade."
        },
        {
          "id": "electrician-electricity-101-l03-q3",
          "text": "What is the standard maximum amperage for a 14 AWG copper branch circuit per NEC 240.4(D)?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "10 A"
            },
            {
              "id": "b",
              "text": "15 A"
            },
            {
              "id": "c",
              "text": "20 A"
            },
            {
              "id": "d",
              "text": "30 A"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NEC 240.4(D) requires 14 AWG copper conductors to be protected at no more than 15 A."
        },
        {
          "id": "electrician-electricity-101-l03-q4",
          "text": "In a three-phase system, the phase voltages are separated by how many degrees?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "90°"
            },
            {
              "id": "b",
              "text": "120°"
            },
            {
              "id": "c",
              "text": "180°"
            },
            {
              "id": "d",
              "text": "60°"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Three-phase systems have three sinusoidal voltages separated by 120 electrical degrees."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l03-a1",
          "type": "mnemonic",
          "title": "Ohm's Law Memory Aid",
          "content": "VIR — 'Volts Ignite Resistance.' Cover the letter you need: V = IR, I = V/R, R = V/I."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l04",
      "title": "The National Electrical Code (NEC)",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "electrician-electricity-101-l04-c1",
          "title": "NEC Structure and Key Articles",
          "content": "The National Electrical Code (NEC), also referred to as NFPA 70, is a crucial set of guidelines that regulates electrical installations throughout the United States. Understanding the NEC is essential for anyone pursuing a career in electrical work, as it ensures that installations are safe and comply with established standards. The NEC is structured into nine chapters, each addressing different elements of electrical systems.\nThe first four chapters provide foundational knowledge. Chapter 1 introduces important definitions that electricians need to know. Chapter 2 discusses wiring design, which is vital for planning how electrical systems will be set up. Chapter 3 covers wiring methods, detailing the various techniques and materials that can be used. Chapter 4 focuses on equipment standards, ensuring that all electrical devices meet safety requirements.\nChapters five through seven delve into more specialized topics. Chapter 5 addresses special occupancies, which includes unique buildings like hospitals or theaters that have specific electrical needs. Chapter 6 discusses special equipment, while Chapter 7 covers conditions that may affect electrical installations, such as hazardous locations.\nChapter 8 is dedicated to communication systems, which are essential for modern technology, while Chapter 9 provides valuable tables that electricians frequently reference for calculations and specifications.\nAmong the key articles in the NEC, Article 210 focuses on branch circuits, which are the pathways that deliver electricity to outlets and devices. Article 220 is all about load calculations, helping electricians determine how much power is needed for different systems. Article 250 covers grounding and bonding, which are critical for safety, and Article 310 discusses conductors, the wires that carry electricity.\nFor electricians, being well-versed in the NEC is not just about passing licensing exams; it is about ensuring that every electrical installation is safe, reliable, and up to code. This knowledge is essential for protecting both the electrician and the public from electrical hazards.\nContext recap: The National Electrical Code (NEC), also referred to as NFPA 70, is a crucial set of guidelines that regulates electrical installations throughout the United States. Understanding the NEC is essential for anyone pursuing a career in electrical work, as it ensures that installations are safe and comply with established standards. The NEC is structured into nine chapters, each addressing different elements of electrical systems. The first four chapters provide foundational knowledge.\nWhy this matters: NEC Structure and Key Articles helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l04-c2",
          "title": "Branch Circuits and Overcurrent Protection",
          "content": "Article 210 of the National Electrical Code (NEC) provides important guidelines for branch circuits, which are the pathways that carry electricity from the main service panel to various outlets and devices in a building. This article covers several key aspects, including the acceptable electrical loads that can be placed on these circuits, the spacing of outlets, and the number of circuits that are required for safe operation. For instance, if you have a branch circuit that is designed to carry 15 amps of current, it is necessary to use at least 14 AWG (American Wire Gauge) wire. On the other hand, if the circuit is meant to carry 20 amps, you must use at least 12 AWG wire to ensure safety and efficiency. To protect these circuits from damage, we use overcurrent protective devices (OCPDs), which include circuit breakers and fuses. These devices must be carefully sized to match the smallest wire in the circuit to ensure proper protection. The NEC also includes specific rules in section 240.4(D) that set maximum ratings for OCPDs when dealing with smaller conductors. Circuit breakers are designed to automatically trip and shut off the circuit in the event of an overload or short circuit, while time-delay fuses are useful for managing the initial surge of current that motors may require when they start up. Choosing the correct OCPD is crucial to prevent overheating of wires, damage to insulation, and the risk of fire hazards, ensuring a safe electrical system in any building.\nContext recap: Article 210 of the National Electrical Code (NEC) provides important guidelines for branch circuits, which are the pathways that carry electricity from the main service panel to various outlets and devices in a building. This article covers several key aspects, including the acceptable electrical loads that can be placed on these circuits, the spacing of outlets, and the number of circuits that are required for safe operation. For instance, if you have a branch circuit that is designed to carry 15 amps of current, it is necessary to use at least 14 AWG (American Wire Gauge) wire. On the other hand, if the circuit is meant to carry 20 amps, you must use at least 12 AWG wire to ensure safety and efficiency."
        },
        {
          "id": "electrician-electricity-101-l04-c3",
          "title": "Grounding, Bonding, GFCI, and AFCI",
          "content": "According to Article 250 of the National Electrical Code (NEC), it is essential for every electrical outlet to have a continuous grounding path that connects back to the service panel and the grounding electrode system. Grounding is very important because it helps protect people from electrical shocks, which can be very dangerous. When we talk about bonding, we mean that all metal parts of an electrical system should be at the same electrical potential. This is important because it allows any fault current, which is an unintended electrical current, to quickly trip the overcurrent protective device (OCPD). This helps prevent accidents and keeps everyone safe.\nGround-fault circuit interrupters, or GFCIs, are special safety devices that monitor the flow of electricity between the hot wire and the neutral wire. If they notice an imbalance in the current, which can happen if there is a fault, they will trip and cut off the power. This usually happens at a very low level of 4 to 6 milliamps, which is enough to prevent serious harm. GFCIs are required in places where water is present, such as bathrooms, kitchens, garages, and outdoor outlets, to enhance safety and reduce the risk of electric shock.\nArc-fault circuit interrupters, known as AFCIs, are another type of safety device. They are designed to detect dangerous arcing conditions, which can lead to fires. According to NEC 210.12, AFCIs are required in bedrooms and most living areas to help keep homes safe from electrical fires. Both GFCIs and AFCIs are crucial in reducing the risks of electrical fires and electrocution, making our living spaces much safer for everyone.\nContext recap: According to Article 250 of the National Electrical Code (NEC), it is essential for every electrical outlet to have a continuous grounding path that connects back to the service panel and the grounding electrode system. Grounding is very important because it helps protect people from electrical shocks, which can be very dangerous. When we talk about bonding, we mean that all metal parts of an electrical system should be at the same electrical potential. This is important because it allows any fault current, which is an unintended electrical current, to quickly trip the overcurrent protective device (OCPD).\nWhy this matters: Grounding, Bonding, GFCI, and AFCI helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l04-f1",
          "front": "Which NEC article covers grounding and bonding?",
          "back": "Article 250 — Grounding and Bonding."
        },
        {
          "id": "electrician-electricity-101-l04-f2",
          "front": "At what current imbalance does a GFCI trip?",
          "back": "4–6 milliamperes (mA) of leakage current between hot and neutral."
        },
        {
          "id": "electrician-electricity-101-l04-f3",
          "front": "What does AFCI stand for and what does it detect?",
          "back": "Arc-Fault Circuit Interrupter — it detects dangerous arcing that could start a fire."
        },
        {
          "id": "electrician-electricity-101-l04-f4",
          "front": "Which NEC article covers branch circuits?",
          "back": "Article 210 — Branch Circuits."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l04-a1",
          "type": "image",
          "title": "NEC Chapter Map",
          "content": "Flow chart showing NEC chapters 1–9 with key articles highlighted for quick reference."
        },
        {
          "id": "electrician-electricity-101-l04-a2",
          "type": "animation",
          "title": "GFCI Trip Animation",
          "content": "Animated diagram showing current flow through hot and neutral, with a ground fault diverting current and triggering the GFCI sensor coil."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l05",
      "title": "Residential Wiring",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "electrician-electricity-101-l05-c1",
          "title": "Service Entrance and Panel Layout",
          "content": "The service entrance is a crucial part of a building's electrical system, as it is the point where electrical power from the utility company enters. This area is made up of several important components that work together to ensure safe and efficient electricity distribution. First, there is the weatherhead, which is the top part of the service entrance that protects the wires from the elements. Below that, we have the service-entrance conductors, which are the wires that carry electricity from the utility pole to the building. Next is the meter base, where the electric meter is located. This meter measures how much electricity the building uses, helping to determine the monthly bill. Finally, we have the main breaker panel, which is like the control center for the building's electrical system.\nIn a typical residential service rated at 200 amps, two hot wires, each carrying 120 volts, and one neutral wire come from the utility transformer. The main breaker inside the panel acts as a safety switch, protecting the bus bars that distribute power to different circuits throughout the building. Branch-circuit breakers are attached to these bus bars, allowing for the even distribution of 120-volt circuits across the two hot legs. This balancing is important because it helps prevent overloads and ensures that the electrical system operates safely.\nFor larger appliances that require more power, such as dryers or ovens, a 240-volt circuit is used. This circuit is connected using a two-pole breaker that spans both hot legs, allowing it to draw power from both. Additionally, safety is a top priority in electrical systems, which is why the grounding bus connects to a grounding electrode. This grounding electrode is typically a ground rod or the metal water pipe, providing a safe path for electricity to follow in case of a fault, helping to protect both people and property from electrical hazards.\nContext recap: The service entrance is a crucial part of a building's electrical system, as it is the point where electrical power from the utility company enters. This area is made up of several important components that work together to ensure safe and efficient electricity distribution. First, there is the weatherhead, which is the top part of the service entrance that protects the wires from the elements. Below that, we have the service-entrance conductors, which are the wires that carry electricity from the utility pole to the building.\nWhy this matters: Service Entrance and Panel Layout helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l05-c2",
          "title": "120 V and 240 V Branch Circuits",
          "content": "In a typical home, a 120-volt receptacle circuit is essential for powering everyday devices. This circuit is made up of three important wires: the hot wire, which is usually black, the neutral wire, which is typically white, and the ground wire, which can be bare or green. The purpose of the hot wire is to carry electricity to the device, while the neutral wire returns the current back to the electrical panel. The ground wire is a safety feature that helps prevent electrical shocks by providing a path for electricity to flow safely into the ground in case of a fault. To protect these circuits, they are connected to a circuit breaker, which can be either 15 amps or 20 amps, depending on the expected load.\nIn areas where water is present, such as kitchens and bathrooms, safety is even more critical. Therefore, these locations require special circuits known as GFCI (Ground Fault Circuit Interrupter) circuits, which are rated for 20 amps. These circuits help protect against electrical shocks by cutting off power if they detect any imbalance in the electrical flow.\nFor larger appliances, such as dryers, ranges, and water heaters, a 240-volt circuit is necessary. This circuit is different because it uses two hot wires instead of one, along with a neutral wire and a ground wire. The two hot wires allow for a higher voltage, which is needed for these power-hungry appliances. Just like the 120-volt circuits, these 240-volt circuits are also protected by a circuit breaker, but in this case, it is a two-pole breaker.\nAdditionally, dedicated circuits are required for certain appliances like dishwashers and garbage disposals to ensure they have enough power and do not overload other circuits. It is also very important to properly identify and label each circuit in the electrical panel directory. This practice is not just a good habit; it is a requirement by the National Electrical Code (NEC) under section 408.4. Proper labeling helps ensure safety and makes it easier for anyone working on the electrical system to understand which circuits are which, reducing the risk of accidents during maintenance or repairs.\nContext recap: In a typical home, a 120-volt receptacle circuit is essential for powering everyday devices. This circuit is made up of three important wires: the hot wire, which is usually black, the neutral wire, which is typically white, and the ground wire, which can be bare or green. The purpose of the hot wire is to carry electricity to the device, while the neutral wire returns the current back to the electrical panel. The ground wire is a safety feature that helps prevent electrical shocks by providing a path for electricity to flow safely into the ground in case of a fault.\nWhy this matters: 120 V and 240 V Branch Circuits helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l05-c3",
          "title": "Switch Wiring: Single-Pole, 3-Way, and 4-Way",
          "content": "In residential wiring, understanding how different types of switches work is crucial for any aspiring electrician. Let's start with the single-pole switch. This is a basic switch that allows you to control a light fixture from one location, like a hallway or a room. It features two brass terminals: one is connected to the incoming power source (this is called the line), and the other connects to the light fixture (this is known as the load). Additionally, there is a green terminal that is used for grounding, which helps ensure safety by preventing electrical shocks.\nNext, we have the 3-way switch. This type of switch is quite handy because it allows you to control a single light from two different locations. For instance, you might have one switch at the top of the stairs and another at the bottom. A 3-way switch has three terminals: one common terminal, which is usually marked with a dark screw, and two traveler terminals. When you wire two 3-way switches together using traveler wires, flipping either switch will turn the light on or off, making it very convenient for larger spaces.\nIf you want to control a light from three or more locations, you will need to use a 4-way switch. This switch is placed between two 3-way switches and has four traveler terminals that connect the traveler wires. This setup allows for even more flexibility in controlling lighting throughout a home.\nMastering these switch configurations is essential for electricians, especially when working on residential projects. It ensures that homes are not only functional but also safe and user-friendly. By understanding how to wire these different types of switches, you will be well on your way to becoming a skilled electrician.\nContext recap: In residential wiring, understanding how different types of switches work is crucial for any aspiring electrician. Let's start with the single-pole switch. This is a basic switch that allows you to control a light fixture from one location, like a hallway or a room. It features two brass terminals: one is connected to the incoming power source (this is called the line), and the other connects to the light fixture (this is known as the load).\nWhy this matters: Switch Wiring: Single-Pole, 3-Way, and 4-Way helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l05-f1",
          "front": "What voltage is between the two hot legs in a standard residential panel?",
          "back": "240 V — each hot leg is 120 V to neutral, and the two legs are 180° out of phase."
        },
        {
          "id": "electrician-electricity-101-l05-f2",
          "front": "How many traveler wires connect two 3-way switches?",
          "back": "Two traveler wires, plus a common wire that carries the switched hot."
        },
        {
          "id": "electrician-electricity-101-l05-f3",
          "front": "What NEC section requires panel directory labeling?",
          "back": "NEC 408.4 — requires each circuit to be legibly identified as to its purpose."
        },
        {
          "id": "electrician-electricity-101-l05-f4",
          "front": "Why must kitchen countertop receptacles be GFCI-protected?",
          "back": "Water proximity creates shock risk; NEC 210.8(A) requires GFCI protection for kitchen countertop receptacles."
        }
      ],
      "metadata": {
        "prompts": [
          "Trace the power path from the utility transformer through the meter, main breaker, and a 120 V branch circuit to a duplex receptacle.",
          "Draw a wiring diagram for a 3-way switch circuit controlling a hallway light from two locations.",
          "Calculate the maximum number of 15 A general lighting circuits needed for a 1,500 sq ft dwelling unit using the NEC unit load method."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-101-l05-a1",
          "type": "practice",
          "title": "Panel Balancing Exercise",
          "content": "Given a list of branch circuits with their amperages, arrange them on alternating bus stabs to balance the load across both legs within 10%."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l06",
      "title": "NEC & Residential Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "electrician-electricity-101-l06-q1",
          "text": "Which NEC article covers grounding and bonding requirements?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Article 210"
            },
            {
              "id": "b",
              "text": "Article 240"
            },
            {
              "id": "c",
              "text": "Article 250"
            },
            {
              "id": "d",
              "text": "Article 310"
            }
          ],
          "correctOptionId": "c",
          "explanation": "NEC Article 250 contains all requirements for grounding and bonding of electrical systems and equipment."
        },
        {
          "id": "electrician-electricity-101-l06-q2",
          "text": "A GFCI receptacle trips when the current difference between hot and neutral exceeds approximately:",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "15 mA"
            },
            {
              "id": "b",
              "text": "30 mA"
            },
            {
              "id": "c",
              "text": "5 mA"
            },
            {
              "id": "d",
              "text": "100 mA"
            }
          ],
          "correctOptionId": "c",
          "explanation": "GFCIs are designed to trip at 4–6 mA of ground-fault leakage current, approximately 5 mA."
        },
        {
          "id": "electrician-electricity-101-l06-q3",
          "text": "How many 3-way switches are needed to control a light from exactly two locations?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "One"
            },
            {
              "id": "b",
              "text": "Two"
            },
            {
              "id": "c",
              "text": "Three"
            },
            {
              "id": "d",
              "text": "Four"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Two 3-way switches are wired together with traveler wires to allow control from two locations."
        },
        {
          "id": "electrician-electricity-101-l06-q4",
          "text": "In a standard 200 A residential panel, what voltage appears between the two hot bus bars?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "120 V"
            },
            {
              "id": "b",
              "text": "208 V"
            },
            {
              "id": "c",
              "text": "240 V"
            },
            {
              "id": "d",
              "text": "277 V"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Each hot leg is 120 V to neutral. The two legs are 180° out of phase, producing 240 V line-to-line."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l06-a1",
          "type": "mnemonic",
          "title": "NEC Article Numbers",
          "content": "210 = Branch circuits, 220 = Calculations, 240 = Overcurrent, 250 = Grounding, 310 = Conductors — remember '21-22-24-25-31' counting pattern."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l07",
      "title": "Commercial and Industrial Systems",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "electrician-electricity-101-l07-c1",
          "title": "Three-Phase Power Distribution",
          "content": "In commercial and industrial buildings, three-phase power is widely used because it provides a more efficient way to deliver electricity, especially for large machines and motors. This type of power system is designed to handle heavy loads and is essential for many operations. The most common configurations for three-phase power are known as 208Y/120 V (wye) and 480Y/277 V (wye).\nIn a wye system, there are two important types of voltage to understand: phase voltage and line-to-line voltage. The phase voltage is the voltage measured between one of the lines and the neutral point, while the line-to-line voltage is the voltage measured between two lines. Interestingly, the line-to-line voltage is approximately 1.73 times greater than the phase voltage. For instance, in a 480Y/277 V system, the phase voltage for fluorescent lighting is 277 V, which is suitable for lighting fixtures, and the line-to-line voltage for motors is 480 V, which is necessary for running larger equipment.\nAdditionally, some older electrical systems may use delta configurations, such as 240 V delta or high-leg delta. These configurations are different from the wye systems and have their own unique characteristics.\nBefore electricians begin any work, it is extremely important for them to identify the type of power system they are dealing with. This knowledge is crucial because it affects several factors, including how they size the electrical conductors, how they connect transformers, and how they rate the equipment being used. Understanding these differences helps ensure safety and efficiency in electrical work.\nContext recap: In commercial and industrial buildings, three-phase power is widely used because it provides a more efficient way to deliver electricity, especially for large machines and motors. This type of power system is designed to handle heavy loads and is essential for many operations. The most common configurations for three-phase power are known as 208Y/120 V (wye) and 480Y/277 V (wye). In a wye system, there are two important types of voltage to understand: phase voltage and line-to-line voltage.\nWhy this matters: Three-Phase Power Distribution helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrician-electricity-101-l07-c2",
          "title": "Motor Controls and Transformers",
          "content": "Electric motors play a crucial role in commercial buildings, often being the largest single electrical load. Understanding how they work is essential for electricians. A basic motor control circuit is made up of several key components: a disconnect switch, a motor starter (which includes a contactor and an overload relay), and control wiring. These elements work together to ensure that the motor operates safely and efficiently.\nThe National Electrical Code (NEC) Article 430 provides important guidelines for installing motors. One of the key points is how to size the branch-circuit conductors. Electricians need to ensure that these conductors can handle 125% of the motor's full-load current to prevent overheating and potential hazards. Additionally, the code emphasizes the need for proper overcurrent protection and reliable disconnecting means to ensure safety during maintenance or emergencies.\nTransformers are another vital component in electrical systems. They are used to change voltage levels, either stepping them up or down. For example, common commercial step-down transformers convert high voltage (480 V) to lower voltage levels (208Y/120 V), which are suitable for powering receptacles and smaller equipment. This conversion is essential for ensuring that the electrical devices used in commercial settings receive the correct voltage.\nThe NEC Article 450 outlines the requirements for protecting transformers, ensuring they operate safely within their designed limits. Electricians must also be skilled in calculating both primary and secondary currents. This is done using the turns ratio and the volt-ampere (VA) ratings of the transformers, which helps in understanding how much current will flow through the system. By mastering these concepts, electricians can ensure that commercial and industrial electrical systems are safe, efficient, and reliable.\nContext recap: Electric motors play a crucial role in commercial buildings, often being the largest single electrical load. Understanding how they work is essential for electricians. A basic motor control circuit is made up of several key components: a disconnect switch, a motor starter (which includes a contactor and an overload relay), and control wiring. These elements work together to ensure that the motor operates safely and efficiently.\nWhy this matters: Motor Controls and Transformers helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "electrician-electricity-101-l07-c3",
          "title": "Demand Calculations and Emergency Systems",
          "content": "To ensure both safety and efficiency in electrical systems, the National Electrical Code (NEC) Article 220 outlines important methods for calculating feeder and service loads. This is crucial for electricians to understand, as it helps determine how much electrical capacity is needed for different parts of a building. The standard calculation method involves summing up all connected loads and applying specific demand factors to these loads. For instance, the first 10 kVA of general lighting is considered at 100% of its capacity, meaning it is fully accounted for. However, any additional load beyond that is calculated at only 50% of its capacity. This approach helps to ensure that the electrical system is not overloaded and operates safely.\nAdditionally, there are optional calculations provided in Articles 220.82 and 220.83 that can simplify the sizing process for residential homes and existing installations. These optional methods can make it easier for electricians to determine the right size of electrical service needed without overcomplicating the calculations.\nFurthermore, emergency systems are a critical component of electrical safety and are mandated by law. These systems must be capable of supplying power to essential life-safety loads, such as exit signs, stairwell lighting, and fire pumps, within 10 seconds. This rapid response is vital during emergencies to ensure that people can safely exit a building. To maintain clarity and safety, it is essential that these emergency circuits are kept separate from normal wiring. They should also be clearly labeled throughout the building to prevent any confusion during an emergency situation. Understanding these regulations and practices is fundamental for anyone pursuing a career in the electrical trade, as it directly impacts the safety of individuals and the functionality of electrical systems in commercial and industrial settings.\nContext recap: To ensure both safety and efficiency in electrical systems, the National Electrical Code (NEC) Article 220 outlines important methods for calculating feeder and service loads. This is crucial for electricians to understand, as it helps determine how much electrical capacity is needed for different parts of a building. The standard calculation method involves summing up all connected loads and applying specific demand factors to these loads. For instance, the first 10 kVA of general lighting is considered at 100% of its capacity, meaning it is fully accounted for.\nWhy this matters: Demand Calculations and Emergency Systems helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l07-f1",
          "front": "In a 480Y/277 V system, what is the line-to-neutral voltage?",
          "back": "277 V — the line-to-line voltage (480 V) divided by √3 ≈ 1.732."
        },
        {
          "id": "electrician-electricity-101-l07-f2",
          "front": "What NEC article governs motor installations?",
          "back": "Article 430 — Motors, Motor Circuits, and Controllers."
        },
        {
          "id": "electrician-electricity-101-l07-f3",
          "front": "How quickly must an emergency generator restore power per NEC 700?",
          "back": "Within 10 seconds of a power failure."
        },
        {
          "id": "electrician-electricity-101-l07-f4",
          "front": "What multiplier converts phase voltage to line voltage in a wye system?",
          "back": "√3 (approximately 1.732). Line voltage = Phase voltage × √3."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l07-a1",
          "type": "image",
          "title": "Wye vs Delta Diagram",
          "content": "Side-by-side vector diagrams showing wye (star) and delta transformer connections with voltage labels."
        },
        {
          "id": "electrician-electricity-101-l07-a2",
          "type": "animation",
          "title": "Motor Starter Circuit",
          "content": "Animated ladder diagram showing a start/stop pushbutton station, contactor coil, auxiliary contacts, and overload relay operation."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l08",
      "title": "Safety and Troubleshooting",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "electrician-electricity-101-l08-c1",
          "title": "Lockout/Tagout (LOTO) Procedures",
          "content": "When electricians need to work on equipment that has been turned off and is no longer receiving power, it is very important for them to follow specific safety procedures known as lockout/tagout (LOTO). These procedures help protect workers from accidental injuries while they are working. According to the Occupational Safety and Health Administration (OSHA) regulations (29 CFR 1910.147), there are six key steps that must be followed to ensure safety: (1) First, it is essential to notify all employees who might be affected by the work being done. This means letting them know that the equipment will be out of service. (2) Next, the electrician must shut down the equipment using its normal controls, which is the way it is usually turned off. (3) After that, it is important to isolate all energy sources. This can involve opening disconnect switches and closing valves to make sure that no energy can reach the equipment. (4) The electrician then applies personal locks and tags to the equipment. These locks and tags serve as a clear signal that the equipment should not be operated while work is being done. (5) The next step is to release any stored energy that might still be present in the equipment. This could include energy stored in capacitors, springs, or even heavy loads that are elevated. (6) Finally, the electrician must verify that there is zero energy present by using a tested meter. This is a crucial step to ensure that it is safe to begin work. Each worker must apply their own lock, and it is very important that no one else is allowed to remove it. Following these lockout/tagout procedures is vital because not doing so is one of the leading causes of electrical accidents and fatalities in the workplace. Safety should always be the top priority for electricians.\nContext recap: When electricians need to work on equipment that has been turned off and is no longer receiving power, it is very important for them to follow specific safety procedures known as lockout/tagout (LOTO). These procedures help protect workers from accidental injuries while they are working. According to the Occupational Safety and Health Administration (OSHA) regulations (29 CFR 1910.147), there are six key steps that must be followed to ensure safety: (1) First, it is essential to notify all employees who might be affected by the work being done. This means letting them know that the equipment will be out of service.\nWhy this matters: Lockout/Tagout (LOTO) Procedures helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrician-electricity-101-l08-c2",
          "title": "PPE and Arc-Flash Awareness",
          "content": "The National Fire Protection Association (NFPA) 70E provides essential guidelines to keep electricians safe from arc-flash hazards while working with electricity. An arc flash is a dangerous event that can happen when electricity unexpectedly jumps through the air between electrical conductors. This can create incredibly high temperatures, reaching up to 35,000 °F, and can produce explosive pressure waves that pose serious risks to anyone nearby. To protect themselves, electricians need to understand the concept of the arc-flash boundary, which is the area around energized equipment where there is a risk of being harmed by an arc flash. Before starting any work, electricians must assess this boundary to ensure their safety. They must also wear the right personal protective equipment (PPE) to shield themselves from potential injuries. This PPE includes specially designed arc-rated clothing, a face shield to protect their face and eyes, insulated gloves that have leather protectors for added safety, and hearing protection to guard against loud noises. Furthermore, all electrical equipment must be clearly labeled with important information about the incident energy level, which is measured in calories per square centimeter (cal/cm²), and the specific category of PPE required for that equipment. The NFPA also defines two important safety zones: the limited approach boundary and the restricted approach boundary. These boundaries help electricians and other workers understand safe distances to maintain from energized equipment, ensuring that both qualified and unqualified individuals can work safely around electrical systems.\nContext recap: The National Fire Protection Association (NFPA) 70E provides essential guidelines to keep electricians safe from arc-flash hazards while working with electricity. An arc flash is a dangerous event that can happen when electricity unexpectedly jumps through the air between electrical conductors. This can create incredibly high temperatures, reaching up to 35,000 °F, and can produce explosive pressure waves that pose serious risks to anyone nearby. To protect themselves, electricians need to understand the concept of the arc-flash boundary, which is the area around energized equipment where there is a risk of being harmed by an arc flash.\nWhy this matters: PPE and Arc-Flash Awareness helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "electrician-electricity-101-l08-c3",
          "title": "Multimeter Testing and Common Faults",
          "content": "A digital multimeter, often referred to as a DMM, is a vital tool that electricians use to diagnose and troubleshoot electrical problems. This handy device can measure different electrical properties, making it essential for ensuring safety and functionality in electrical systems. One of the primary functions of a DMM is to measure voltage. By doing this, electricians can determine whether a circuit is live, meaning it has electrical energy flowing through it, or if it is safe to work on because there is no energy present.\nAnother important measurement is resistance, which is measured in ohms. This helps electricians check if the conductors, or wires, are continuous and if the insulation around them is intact. If the insulation is damaged, it can lead to dangerous situations, so this check is crucial.\nWhen it comes to measuring current, electricians often use a clamp-on ammeter. This tool allows them to see how much electrical load is being drawn by a device or circuit, which is important for ensuring that everything is operating within safe limits.\nElectricians frequently encounter common electrical faults. For example, a short circuit occurs when a hot wire accidentally touches a neutral or ground wire. This can create a surge of high current that trips the circuit breaker immediately, cutting off power to prevent further issues. An open circuit happens when a wire is broken, resulting in no current flow at all. Ground faults occur when a hot wire comes into contact with the equipment ground, which can also trip a ground fault circuit interrupter (GFCI) or breaker, providing an important safety measure.\nAdditionally, measuring voltage drop across long runs of wire is essential for diagnosing problems related to undersized conductors. The National Electrical Code (NEC) recommends that voltage drop should not exceed 3% on branch circuits and 5% overall to ensure efficient operation and safety in electrical installations.\nContext recap: A digital multimeter, often referred to as a DMM, is a vital tool that electricians use to diagnose and troubleshoot electrical problems. This handy device can measure different electrical properties, making it essential for ensuring safety and functionality in electrical systems. One of the primary functions of a DMM is to measure voltage. By doing this, electricians can determine whether a circuit is live, meaning it has electrical energy flowing through it, or if it is safe to work on because there is no energy present.\nWhy this matters: Multimeter Testing and Common Faults helps learners in Trades connect ideas from Electrician Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "electrician-electricity-101-l08-f1",
          "front": "What are the six steps of lockout/tagout?",
          "back": "Notify, shut down, isolate, lock/tag, release stored energy, verify zero energy."
        },
        {
          "id": "electrician-electricity-101-l08-f2",
          "front": "What temperature can an arc flash reach?",
          "back": "Up to 35,000 °F (19,400 °C) — hotter than the surface of the sun."
        },
        {
          "id": "electrician-electricity-101-l08-f3",
          "front": "What is the NEC-recommended maximum voltage drop for a branch circuit?",
          "back": "3% for the branch circuit, 5% total (feeder + branch circuit combined)."
        },
        {
          "id": "electrician-electricity-101-l08-f4",
          "front": "What is the difference between a short circuit and a ground fault?",
          "back": "A short circuit is hot-to-neutral contact; a ground fault is hot-to-ground/equipment contact. Both cause excessive current."
        }
      ],
      "metadata": {
        "prompts": [
          "Walk through the complete LOTO procedure for de-energizing a 480 V motor control center before performing maintenance.",
          "Using a digital multimeter, describe the step-by-step process to diagnose an open circuit in a 120 V lighting branch.",
          "Calculate the voltage drop on a 100 ft run of 12 AWG copper carrying 16 A at 120 V and determine if it meets NEC recommendations."
        ]
      },
      "learningAids": [
        {
          "id": "electrician-electricity-101-l08-a1",
          "type": "practice",
          "title": "Fault Diagnosis Simulator",
          "content": "Given symptom descriptions (breaker trips immediately, no power at outlet, intermittent flickering), identify the fault type and the correct multimeter test to confirm it."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l09",
      "title": "Commercial & Safety Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "electrician-electricity-101-l09-q1",
          "text": "In a 208Y/120 V three-phase system, what is the line-to-line voltage?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "120 V"
            },
            {
              "id": "b",
              "text": "208 V"
            },
            {
              "id": "c",
              "text": "240 V"
            },
            {
              "id": "d",
              "text": "277 V"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In a 208Y/120 V system, the line-to-line voltage is 208 V (120 V × √3 ≈ 208 V)."
        },
        {
          "id": "electrician-electricity-101-l09-q2",
          "text": "Per NEC Article 430, motor branch-circuit conductors must be sized at what percentage of the motor's full-load current?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "100%"
            },
            {
              "id": "b",
              "text": "110%"
            },
            {
              "id": "c",
              "text": "125%"
            },
            {
              "id": "d",
              "text": "150%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "NEC 430.22 requires motor branch-circuit conductors to have an ampacity of at least 125% of the motor's full-load current."
        },
        {
          "id": "electrician-electricity-101-l09-q3",
          "text": "What is the FIRST step in a lockout/tagout procedure?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Apply personal lock to the disconnect"
            },
            {
              "id": "b",
              "text": "Verify zero energy with a meter"
            },
            {
              "id": "c",
              "text": "Notify all affected employees"
            },
            {
              "id": "d",
              "text": "Open the main breaker"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The first step is always to notify affected employees before beginning the shutdown and isolation process."
        },
        {
          "id": "electrician-electricity-101-l09-q4",
          "text": "NFPA 70E arc-flash labels must include which key piece of information?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Equipment purchase date"
            },
            {
              "id": "b",
              "text": "Incident energy in cal/cm²"
            },
            {
              "id": "c",
              "text": "Name of the installing electrician"
            },
            {
              "id": "d",
              "text": "Wire color code chart"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Arc-flash labels must display the incident energy (cal/cm²) so workers can select the correct PPE category."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l09-a1",
          "type": "mnemonic",
          "title": "LOTO Steps",
          "content": "N-S-I-L-R-V: Notify, Shut down, Isolate, Lock/tag, Release stored energy, Verify zero energy."
        }
      ]
    },
    {
      "id": "electrician-electricity-101-l10",
      "title": "Mastery Quiz: Electrician Fundamentals",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "questions": [
        {
          "id": "electrician-electricity-101-l10-q1",
          "text": "A 1,500 W space heater operates on a 120 V circuit. What current does it draw, and what is the minimum breaker size per NEC?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "12.5 A — 15 A breaker"
            },
            {
              "id": "b",
              "text": "12.5 A — 20 A breaker (continuous load rule)"
            },
            {
              "id": "c",
              "text": "15 A — 20 A breaker"
            },
            {
              "id": "d",
              "text": "10 A — 15 A breaker"
            }
          ],
          "correctOptionId": "b",
          "explanation": "I = P/V = 1500/120 = 12.5 A. A fixed space heater is a continuous load, so the breaker must be rated at 125% of the load: 12.5 × 1.25 = 15.625 A, requiring a 20 A breaker."
        },
        {
          "id": "electrician-electricity-101-l10-q2",
          "text": "An electrician needs to control a stairwell light from three locations. What combination of switches is required?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Three 3-way switches"
            },
            {
              "id": "b",
              "text": "Two 3-way switches and one 4-way switch"
            },
            {
              "id": "c",
              "text": "Three 4-way switches"
            },
            {
              "id": "d",
              "text": "One 3-way switch and two single-pole switches"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Control from three locations requires two 3-way switches at the ends and one 4-way switch in the middle, with traveler wires connecting them."
        },
        {
          "id": "electrician-electricity-101-l10-q3",
          "text": "A 480Y/277 V transformer supplies a 45 kVA balanced three-phase load. What is the line current?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "54.1 A"
            },
            {
              "id": "b",
              "text": "93.75 A"
            },
            {
              "id": "c",
              "text": "162.5 A"
            },
            {
              "id": "d",
              "text": "32.5 A"
            }
          ],
          "correctOptionId": "a",
          "explanation": "For three-phase: I = VA / (V_LL × √3) = 45,000 / (480 × 1.732) = 45,000 / 831.4 ≈ 54.1 A."
        },
        {
          "id": "electrician-electricity-101-l10-q4",
          "text": "During LOTO, an electrician's personal lock is on the disconnect. A supervisor needs the equipment re-energized immediately. What is the correct action?",
          "skillId": "electrician-electricity-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The supervisor may cut the lock in an emergency"
            },
            {
              "id": "b",
              "text": "Only the electrician who placed the lock may remove it"
            },
            {
              "id": "c",
              "text": "Any qualified person may remove any lock"
            },
            {
              "id": "d",
              "text": "The safety officer removes all locks at shift end"
            }
          ],
          "correctOptionId": "b",
          "explanation": "OSHA 1910.147 requires that only the person who applied a lockout device may remove it, ensuring that worker is aware the equipment will be re-energized."
        }
      ],
      "learningAids": [
        {
          "id": "electrician-electricity-101-l10-a1",
          "type": "mnemonic",
          "title": "Three-Phase Current Formula",
          "content": "I = VA ÷ (V × √3) — remember 'Current equals VA divided by Voltage times the square root of three.'"
        }
      ]
    }
  ]
};
