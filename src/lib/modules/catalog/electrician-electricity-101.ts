import type { LearningModule } from "@/lib/modules/types";

export const electrician_electricity_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "In every electrical circuit, there are three fundamental concepts you must understand: voltage, current, and resistance. [Visual Prompt: Animation of water flowing through a pipe with a valve (resistance), a pump (voltage), and the water itself (current), transitioning into an electrical circuit diagram.] Voltage (V) is the pressure that pushes electric charges through a wire, measured in volts. Current (I) is the actual flow of electrons, measured in amperes (amps). Resistance (R) is the opposition to that flow, measured in ohms. Ohm's Law connects these three: Voltage equals Current multiplied by Resistance (V = I × R). For example, if a circuit has 120 volts and 10 ohms of resistance, the current is 12 amps. Mastering these relationships is the first step to troubleshooting, calculating loads, and sizing wires safely."
        },
        {
          "id": "electrician-electricity-101-l01-c2",
          "title": "Power, Energy, and the Power Formula",
          "content": "Power measures how quickly electrical energy is used, expressed in watts (W). [Visual Prompt: An electric meter spinning, transitioning to the Power Formula triangle (P = V x I) with glowing text.] The basic power formula is P = V × I. For example, a 120-volt circuit drawing 15 amps consumes 1,800 watts of power. Energy, on the other hand, is power consumed over time, measured in watt-hours or kilowatt-hours (kWh)—the unit utility companies use for billing. By combining Ohm's Law with the power formula, we get other useful equations like P = I²R and P = V²/R. Electricians use these formulas daily to properly size wires, breakers, and transformers to handle specific loads without overheating."
        },
        {
          "id": "electrician-electricity-101-l01-c3",
          "title": "AC vs DC and Phase Systems",
          "content": "Electrical current comes in two main forms: direct current (DC) and alternating current (AC). [Visual Prompt: Split screen showing a flat DC line from a battery on the left, and a wavy AC sine wave from a wall outlet on the right.] DC flows in only one direction and is common in batteries and electronics. AC changes direction continuously—60 times per second (60 Hz) in North America. AC is the standard for power grids because it can be easily transformed to higher or lower voltages for long-distance transmission. Most homes use single-phase AC power (one hot, one neutral), while commercial buildings use three-phase power (three hot wires 120 degrees apart) to run heavy machinery smoothly. Understanding both systems is critical for balancing loads and sizing feeders."
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
          "content": "Non-metallic sheathed cable, commonly known as NM-B or Romex, is the standard wiring method for residential homes. [Visual Prompt: Close-up cross-section of NM-B (Romex) showing the paper wrapping and bare ground, compared to MC cable with its metal armor and insulated ground.] It contains insulated conductors and a bare ground wire wrapped in a PVC jacket. NM-B is easy to pull but offers little physical protection, which is why the NEC restricts its use to dry locations in residential or wood-frame buildings (generally three stories or less). Metal-clad (MC) cable, however, features an interlocking aluminum or steel armor. This armor protects the wires and, in some types, serves as an equipment grounding path. MC is highly versatile and heavily used in commercial construction where NM-B is prohibited."
        },
        {
          "id": "electrician-electricity-101-l02-c2",
          "title": "Conduit Systems: EMT and Rigid",
          "content": "Conduit systems provide the highest level of physical protection for electrical conductors. [Visual Prompt: An electrician using a hand bender to shape a piece of EMT conduit, followed by a graphic comparing the wall thickness of EMT, IMC, and RMC.] Electrical metallic tubing (EMT) is a lightweight, thin-walled steel conduit popular in commercial builds because it is easy to bend and uses set-screw or compression fittings. Rigid metal conduit (RMC) has thick walls and threaded connections, offering maximum protection for outdoor, underground, or hazardous locations. Intermediate metal conduit (IMC) offers a middle ground in weight and strength. For corrosive environments or underground runs, PVC (plastic) conduit is often the best choice. Selecting the right conduit depends on the environment, local codes, and the required durability."
        },
        {
          "id": "electrician-electricity-101-l02-c3",
          "title": "Wire Gauges, Ampacity, and Junction Boxes",
          "content": "The American Wire Gauge (AWG) system standardizes wire sizes: the smaller the number, the larger the wire. [Visual Prompt: A wire gauge tool measuring different stripped copper wires (14 AWG, 12 AWG, 10 AWG), highlighting that smaller numbers mean thicker wires.] In residential wiring, 14 AWG is typically used for 15-amp circuits, 12 AWG for 20-amp circuits, and 10 AWG for 30-amp circuits. NEC Table 310.16 is the electrician's guide for 'ampacity'—the maximum current a conductor can carry continuously without damaging its insulation. When splicing these wires, electricians must use approved junction boxes. NEC Article 314 dictates 'box fill' calculations to ensure boxes aren't overcrowded, which prevents heat buildup and protects the integrity of the splices."
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
          "content": "The National Electrical Code (NEC), or NFPA 70, is the foundational rulebook for safe electrical installations in the United States. [Visual Prompt: A 3D book opening to show the 9 chapters of the NEC as a color-coded index system.] It is organized into nine chapters. Chapters 1-4 cover general rules: definitions, wiring and protection, wiring methods, and equipment. Chapters 5-7 cover special occupancies (like hospitals), special equipment, and special conditions (like emergency systems). Chapter 8 covers communications, and Chapter 9 contains essential calculation tables. Key articles every electrician must know include Article 210 (Branch Circuits), Article 250 (Grounding and Bonding), and Article 310 (Conductors). The NEC isn't an instruction manual; it's a safety standard designed to protect people and property from electrical hazards."
        },
        {
          "id": "electrician-electricity-101-l04-c2",
          "title": "Branch Circuits and Overcurrent Protection",
          "content": "NEC Article 210 governs branch circuits—the final segment of the electrical system running from the panel to the outlets or devices. [Visual Prompt: Animation of a circuit breaker tripping when too many appliances are plugged into a single branch circuit, stopping the glowing red current.] It dictates outlet spacing, required circuits, and load limits. To prevent wires from overheating, circuits are safeguarded by overcurrent protective devices (OCPDs) like breakers or fuses. The OCPD must be sized to protect the weakest link in the circuit, usually the smallest wire. For example, NEC 240.4(D) requires that standard 14 AWG copper wire be protected by a breaker no larger than 15 amps. Breakers trip during overloads or short circuits, stopping the flow of electricity before a fire can start."
        },
        {
          "id": "electrician-electricity-101-l04-c3",
          "title": "Grounding, Bonding, GFCI, and AFCI",
          "content": "Grounding and bonding, covered in NEC Article 250, are critical life-safety concepts. [Visual Prompt: A side-by-side comparison of a GFCI outlet near a sink and an AFCI breaker in a panel, with icons showing water protection vs. fire protection.] Grounding connects the system to the earth, while bonding connects all metal parts together to create a low-resistance path for fault current, ensuring the breaker trips instantly if a live wire touches metal. Ground-Fault Circuit Interrupters (GFCIs) monitor the balance of current between hot and neutral wires. If even 5 milliamps leak (e.g., through a person or water), the GFCI trips to prevent electrocution. Arc-Fault Circuit Interrupters (AFCIs) detect dangerous sparking or arcing behind walls, tripping the circuit to prevent electrical fires. Both are heavily mandated in modern homes."
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
          "content": "The service entrance is where utility power enters a building. [Visual Prompt: Exterior view of a house showing the weatherhead, dropping down to the meter base, and penetrating the wall to the main breaker panel.] In a standard 200-amp residential service, three wires arrive from the utility transformer: two 120-volt hot wires and one neutral. These feed into the meter base and then to the main breaker panel. The main breaker acts as the primary disconnect and protects the panel's bus bars. Branch-circuit breakers snap onto these bus bars. Because the two hot legs are 180 degrees out of phase, connecting a single-pole breaker to one bus bar provides 120 volts, while a double-pole breaker connecting to both bus bars provides 240 volts. The panel also houses the neutral and grounding bus bars, which are bonded together at this main service point."
        },
        {
          "id": "electrician-electricity-101-l05-c2",
          "title": "120 V and 240 V Branch Circuits",
          "content": "Standard residential branch circuits operate at 120 volts, utilizing a hot, neutral, and ground wire to power lighting and standard receptacles. [Visual Prompt: Inside a breaker panel, highlighting a single-pole breaker tapping one bus bar (120V) and a double-pole breaker tapping both bus bars (240V).] Kitchens, bathrooms, and outdoor areas require 20-amp GFCI-protected circuits due to water proximity. Heavy-duty appliances like electric ranges, dryers, and water heaters require 240-volt circuits, which use two hot wires and a double-pole breaker to deliver more power. The NEC also requires dedicated circuits for fixed appliances like microwaves and furnaces to prevent overloads. Finally, NEC 408.4 mandates that every circuit must be clearly and accurately labeled on the panel directory, ensuring safe and efficient maintenance in the future."
        },
        {
          "id": "electrician-electricity-101-l05-c3",
          "title": "Switch Wiring: Single-Pole, 3-Way, and 4-Way",
          "content": "Controlling lighting requires a solid understanding of switch wiring. [Visual Prompt: An interactive wiring diagram where the user can toggle two 3-way switches to see the current travel down alternating traveler wires to light a bulb.] A single-pole switch is the simplest, controlling a light from one location. It breaks the hot 'line' wire and connects to the 'load' wire going to the light. A 3-way switch allows control from two locations, like the top and bottom of a staircase. It uses a 'common' terminal and two 'traveler' terminals. The traveler wires run between the two switches, creating alternate paths for the current. If you need to control a light from three or more locations, you install a 4-way switch between the 3-way switches. The 4-way switch simply swaps the connections between the traveler wires, allowing any switch in the sequence to toggle the light."
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
          "content": "Commercial and industrial facilities rely on three-phase power because it delivers energy more smoothly and efficiently than single-phase systems. [Visual Prompt: Three sine waves offset by 120 degrees, merging into a powerful industrial motor.] The most common configurations are wye (Y) systems, specifically 208Y/120V and 480Y/277V. In a wye system, the line-to-line voltage is the phase voltage multiplied by the square root of 3 (approx. 1.732). For example, in a 480Y/277V system, 277V is used for commercial fluorescent lighting (line-to-neutral), while 480V is used for heavy motors (line-to-line). Older facilities might use delta configurations, such as a 240V high-leg delta. Identifying the exact system voltage and configuration is the critical first step before sizing conductors, ordering equipment, or beginning any commercial installation."
        },
        {
          "id": "electrician-electricity-101-l07-c2",
          "title": "Motor Controls and Transformers",
          "content": "Electric motors are the workhorses of industry, and NEC Article 430 governs their installation. [Visual Prompt: A step-down transformer showing 480V entering the primary coils and 208Y/120V exiting the secondary coils.] A standard motor circuit requires a disconnect, short-circuit protection, a motor starter (contactor), and overload protection. Because motors draw a massive surge of current when starting, branch-circuit conductors must be sized at 125% of the motor's full-load current. Transformers are equally vital, stepping voltages up or down. A common commercial step-down transformer converts a 480V primary supply to a 208Y/120V secondary supply for standard wall outlets. Electricians must calculate primary and secondary currents using the transformer's kVA rating to properly size the overcurrent protection and conductors per NEC Article 450."
        },
        {
          "id": "electrician-electricity-101-l07-c3",
          "title": "Demand Calculations and Emergency Systems",
          "content": "Properly sizing a commercial electrical service requires precise demand calculations per NEC Article 220. [Visual Prompt: A blueprint of a commercial building with a pie chart overlay showing lighting, HVAC, and emergency loads being calculated.] Instead of assuming every light and motor will run simultaneously, electricians apply 'demand factors.' For example, a hospital's lighting load might have a different demand factor than a warehouse. Commercial buildings also require robust emergency systems. Under NEC Article 700, emergency generators or battery backups must restore power to life-safety loads—like exit signs, egress lighting, and fire pumps—within 10 seconds of a power failure. These emergency circuits must be kept in entirely separate conduits and boxes from normal wiring to ensure a single fault doesn't take down both the normal and emergency power."
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
          "content": "Working on electrical equipment requires strict adherence to Lockout/Tagout (LOTO) procedures to prevent accidental re-energization. [Visual Prompt: A step-by-step animation of a worker turning off a disconnect, applying a red padlock and tag, and testing the line with a multimeter.] OSHA mandates a six-step process: (1) Notify all affected employees. (2) Shut down the equipment normally. (3) Isolate the equipment from all energy sources by opening disconnects. (4) Apply your personal lock and tag to the disconnect. (5) Release any stored energy, such as discharging capacitors or blocking elevated parts. (6) Verify zero energy using a properly rated multimeter. Every worker on the circuit must apply their own lock, and only the person who applied the lock is legally permitted to remove it. Skipping LOTO is a leading cause of fatal electrical accidents."
        },
        {
          "id": "electrician-electricity-101-l08-c2",
          "title": "PPE and Arc-Flash Awareness",
          "content": "An arc flash is a violent electrical explosion caused by a fault through the air, generating temperatures up to 35,000°F—hotter than the sun. [Visual Prompt: An electrician suiting up in an arc-flash suit, face shield, and insulated gloves, with a warning label showing the arc-flash boundary.] NFPA 70E establishes safety standards to protect workers from these hazards. Before opening energized equipment, electricians must read the arc-flash warning label to determine the 'incident energy' (measured in cal/cm²) and the required Personal Protective Equipment (PPE) category. Proper PPE includes arc-rated clothing, face shields, and voltage-rated gloves with leather protectors. NFPA 70E also defines approach boundaries: the Arc-Flash Boundary (where PPE is required), the Limited Approach Boundary (for qualified persons), and the Restricted Approach Boundary (requiring extreme caution and insulation)."
        },
        {
          "id": "electrician-electricity-101-l08-c3",
          "title": "Multimeter Testing and Common Faults",
          "content": "The digital multimeter (DMM) is an electrician's primary diagnostic tool. [Visual Prompt: Close-up of a digital multimeter dial switching from AC Voltage to Continuity (Ohms), with the probes touching a broken wire to show an open circuit.] It measures voltage to verify if a circuit is live or dead, resistance (ohms) to check continuity, and current (amps) using a clamp-on jaw. Troubleshooting often involves identifying common faults. A 'short circuit' happens when a hot wire touches a neutral, causing a massive current spike that trips the breaker. A 'ground fault' occurs when a hot wire touches the grounding path or metal casing. An 'open circuit' means the path is broken, like a cut wire or blown fuse, resulting in zero current flow. Electricians also use DMMs to check for voltage drop across long wire runs, ensuring it stays within the NEC's recommended 3% limit for branch circuits."
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
