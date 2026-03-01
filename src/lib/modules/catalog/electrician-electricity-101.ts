import type { LearningModule } from "@/lib/modules/types";

export const ElectricianElectricity101Module: LearningModule = {
  id: "electrician-electricity-101",
  title: "Electrician Fundamentals",
  description:
    "A comprehensive introduction to the electrical trades covering residential and commercial wiring methods, the National Electrical Code (NEC), overcurrent protection, grounding and bonding, GFCI/AFCI requirements, three-phase power systems, motor controls, and jobsite safety including lockout/tagout and arc-flash awareness. Designed for apprentice and pre-apprentice electricians preparing for licensing exams.",
  subject: "Trades",
  tags: ["core", "curriculum", "interactive", "trades", "electrician"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Apply Ohm's Law and the power formula to solve circuit problems encountered on the job",
    "Select the correct wiring method and conductor size using NEC ampacity tables",
    "Interpret key NEC articles for branch circuits, overcurrent protection, and grounding",
    "Wire common residential circuits including 3-way and 4-way switch configurations",
    "Describe three-phase power distribution, transformer connections, and motor-control basics",
    "Perform safe lockout/tagout procedures and identify arc-flash boundaries",
    "Diagnose common electrical faults using a digital multimeter"
  ],

  lessons: [
    /* ── L01 VIDEO ── */
    {
      id: "electrician-electricity-101-l01",
      title: "Electrical Theory for Electricians",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "electrician-electricity-101-l01-c1",
          title: "Voltage, Current, and Resistance",
          content:
            "Every electrical circuit has three fundamental quantities. Voltage (V) is the electrical pressure that pushes charge through a conductor, measured in volts. Current (I) is the flow of electrons, measured in amperes. Resistance (R) opposes that flow and is measured in ohms. Ohm's Law ties them together: V = I × R. If a 120 V circuit has 10 Ω of resistance, it draws 12 A of current. Understanding this relationship is the foundation of all electrical troubleshooting, load calculations, and conductor sizing you will encounter on the job."
        },
        {
          id: "electrician-electricity-101-l01-c2",
          title: "Power, Energy, and the Power Formula",
          content:
            "Power (P) is the rate at which electrical energy is consumed, measured in watts. The power formula P = V × I lets you calculate wattage when voltage and current are known. A 120 V circuit drawing 15 A uses 1,800 W. Energy is power consumed over time, measured in watt-hours or kilowatt-hours (kWh). Utilities bill customers per kWh. On the job, electricians use these formulas to size conductors, breakers, and transformers. Combining Ohm's Law with the power formula gives derived equations such as P = I²R and P = V²/R, useful when only two of the three quantities are known."
        },
        {
          id: "electrician-electricity-101-l01-c3",
          title: "AC vs DC and Phase Systems",
          content:
            "Direct current (DC) flows in one direction and is common in batteries and electronic devices. Alternating current (AC) reverses direction at a set frequency—60 Hz in North America. Most building power is AC because it can be stepped up or down with transformers for efficient long-distance transmission. Single-phase power uses two conductors (hot and neutral) and supplies most residential loads. Three-phase power uses three hot conductors 120° apart, delivering more consistent power for motors and heavy commercial equipment. Electricians must understand both systems to size feeders and balance loads properly."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l01-f1", front: "State Ohm's Law.", back: "V = I × R — Voltage equals current multiplied by resistance." },
        { id: "electrician-electricity-101-l01-f2", front: "What unit measures electrical power?", back: "The watt (W). Power = Voltage × Current." },
        { id: "electrician-electricity-101-l01-f3", front: "What is the frequency of AC power in North America?", back: "60 Hz — the current alternates direction 60 times per second." },
        { id: "electrician-electricity-101-l01-f4", front: "How do single-phase and three-phase power differ?", back: "Single-phase uses one AC waveform; three-phase uses three waveforms 120° apart, delivering smoother, more efficient power for heavy loads." }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l01-a1", type: "image", title: "Ohm's Law Triangle", content: "A triangle diagram showing V at the top, I and R at the bottom — cover the unknown quantity to reveal the formula." },
        { id: "electrician-electricity-101-l01-a2", type: "animation", title: "AC Waveform Visualization", content: "Animated sine wave showing voltage alternation at 60 Hz with peak, RMS, and zero-crossing labels." }
      ]
    },

    /* ── L02 INTERACTIVE ── */
    {
      id: "electrician-electricity-101-l02",
      title: "Wiring Methods and Materials",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "electrician-electricity-101-l02-c1",
          title: "NM-B (Romex) and MC Cable",
          content:
            "Non-metallic sheathed cable (NM-B), commonly called Romex, is the most widely used wiring method in residential construction. It contains two or more insulated conductors and a bare equipment grounding conductor wrapped in a PVC jacket. NM-B is permitted in dry locations inside wood-frame buildings but is not allowed in commercial buildings above three floors. Metal-clad (MC) cable has an interlocking aluminum armor that provides mechanical protection and serves as an equipment grounding path in many jurisdictions. MC cable is permitted in both residential and commercial settings and is required where NM-B is prohibited."
        },
        {
          id: "electrician-electricity-101-l02-c2",
          title: "Conduit Systems: EMT and Rigid",
          content:
            "Electrical metallic tubing (EMT) is thin-walled steel conduit joined with set-screw or compression fittings. It is lightweight, easy to bend, and common in commercial construction for branch circuits and feeders. Rigid metal conduit (RMC) has thicker walls and threaded connections, offering superior mechanical protection for outdoor, underground, or hazardous-location installations. Intermediate metal conduit (IMC) falls between the two in wall thickness. PVC conduit is used underground and in corrosive environments. Choosing the right conduit depends on location, code requirements, and the level of physical protection needed."
        },
        {
          id: "electrician-electricity-101-l02-c3",
          title: "Wire Gauges, Ampacity, and Junction Boxes",
          content:
            "The American Wire Gauge (AWG) system sizes conductors — smaller numbers mean larger wire. Common residential sizes are 14 AWG (15 A circuits), 12 AWG (20 A circuits), and 10 AWG (30 A circuits). NEC Table 310.16 lists ampacity ratings based on insulation type and ambient temperature. Conductors must be joined inside listed junction boxes using approved connectors or wire nuts. Box fill calculations (NEC Article 314) ensure boxes are large enough for the number of conductors, devices, and clamps they contain, preventing overheating and maintaining safe working space."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l02-f1", front: "Where is NM-B (Romex) cable permitted?", back: "In dry locations within residential and wood-frame buildings, generally not above three floors per NEC 334.10." },
        { id: "electrician-electricity-101-l02-f2", front: "What NEC table provides conductor ampacity ratings?", back: "NEC Table 310.16 — Allowable Ampacities of Insulated Conductors." },
        { id: "electrician-electricity-101-l02-f3", front: "What is the ampacity of 12 AWG copper THHN at 30 °C?", back: "30 A per Table 310.16, but it is typically used on 20 A circuits per NEC 240.4(D)." },
        { id: "electrician-electricity-101-l02-f4", front: "What is the purpose of a junction box?", back: "To enclose wire splices and connections, providing mechanical protection and access for future maintenance." }
      ],
      metadata: {
        prompts: [
          "Compare NM-B and MC cable: list one advantage and one limitation of each.",
          "Using NEC Table 310.16, select the correct conductor size for a 40 A branch circuit.",
          "Calculate the minimum box fill for a 4×4 junction box containing four 12 AWG conductors plus two cable clamps."
        ]
      },
      learningAids: [
        { id: "electrician-electricity-101-l02-a1", type: "practice", title: "Cable Identification Drill", content: "Match cable types (NM-B, MC, UF-B, SE) to their permitted installation locations and jacket markings." }
      ]
    },

    /* ── L03 QUIZ ── */
    {
      id: "electrician-electricity-101-l03",
      title: "Theory & Wiring Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "electrician-electricity-101-l03-q1",
          text: "A 240 V circuit has a load resistance of 20 Ω. What current does it draw?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "6 A" },
            { id: "b", text: "12 A" },
            { id: "c", text: "24 A" },
            { id: "d", text: "48 A" }
          ],
          correctOptionId: "b",
          explanation: "Using Ohm's Law: I = V / R = 240 / 20 = 12 A."
        },
        {
          id: "electrician-electricity-101-l03-q2",
          text: "Which wiring method is generally prohibited in commercial buildings above three floors?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "MC cable" },
            { id: "b", text: "EMT conduit" },
            { id: "c", text: "NM-B (Romex)" },
            { id: "d", text: "Rigid metal conduit" }
          ],
          correctOptionId: "c",
          explanation: "NEC 334.10 restricts NM-B cable from commercial buildings exceeding three floors above grade."
        },
        {
          id: "electrician-electricity-101-l03-q3",
          text: "What is the standard maximum amperage for a 14 AWG copper branch circuit per NEC 240.4(D)?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "10 A" },
            { id: "b", text: "15 A" },
            { id: "c", text: "20 A" },
            { id: "d", text: "30 A" }
          ],
          correctOptionId: "b",
          explanation: "NEC 240.4(D) requires 14 AWG copper conductors to be protected at no more than 15 A."
        },
        {
          id: "electrician-electricity-101-l03-q4",
          text: "In a three-phase system, the phase voltages are separated by how many degrees?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "90°" },
            { id: "b", text: "120°" },
            { id: "c", text: "180°" },
            { id: "d", text: "60°" }
          ],
          correctOptionId: "b",
          explanation: "Three-phase systems have three sinusoidal voltages separated by 120 electrical degrees."
        }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l03-a1", type: "mnemonic", title: "Ohm's Law Memory Aid", content: "VIR — 'Volts Ignite Resistance.' Cover the letter you need: V = IR, I = V/R, R = V/I." }
      ]
    },

    /* ── L04 VIDEO ── */
    {
      id: "electrician-electricity-101-l04",
      title: "The National Electrical Code (NEC)",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "electrician-electricity-101-l04-c1",
          title: "NEC Structure and Key Articles",
          content:
            "The National Electrical Code (NFPA 70) is the primary standard governing electrical installations in the United States. It is organized into nine chapters. Chapters 1–4 apply generally: definitions, wiring design, wiring methods, and equipment. Chapters 5–7 cover special occupancies, equipment, and conditions. Chapter 8 addresses communications systems, and Chapter 9 contains tables. Key articles include Article 210 (branch circuits), Article 220 (load calculations), Article 250 (grounding and bonding), and Article 310 (conductors). Electricians must be able to navigate the NEC efficiently to pass licensing exams and ensure code-compliant installations."
        },
        {
          id: "electrician-electricity-101-l04-c2",
          title: "Branch Circuits and Overcurrent Protection",
          content:
            "Article 210 defines branch-circuit requirements including permissible loads, outlet spacing, and required circuits. A 15 A branch circuit uses 14 AWG minimum; a 20 A circuit requires 12 AWG minimum. Overcurrent protective devices (OCPDs) — circuit breakers and fuses — must be sized to protect the smallest conductor in the circuit. NEC 240.4(D) sets maximum OCPD ratings for small conductors. Breakers trip on overloads and short circuits. Time-delay fuses accommodate motor inrush current. Proper OCPD selection prevents conductor overheating, insulation damage, and fire."
        },
        {
          id: "electrician-electricity-101-l04-c3",
          title: "Grounding, Bonding, GFCI, and AFCI",
          content:
            "NEC Article 250 requires a continuous grounding path from every outlet back to the service panel and the grounding electrode system. Grounding protects people from shock; bonding ensures all metal parts are at the same potential so fault current can trip the OCPD quickly. Ground-fault circuit interrupters (GFCIs) monitor current imbalance between hot and neutral — tripping at 4–6 mA — and are required in bathrooms, kitchens, garages, and outdoor receptacles. Arc-fault circuit interrupters (AFCIs) detect dangerous arcing conditions and are required in bedrooms and most living areas per NEC 210.12. Both devices significantly reduce fire and electrocution risks."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l04-f1", front: "Which NEC article covers grounding and bonding?", back: "Article 250 — Grounding and Bonding." },
        { id: "electrician-electricity-101-l04-f2", front: "At what current imbalance does a GFCI trip?", back: "4–6 milliamperes (mA) of leakage current between hot and neutral." },
        { id: "electrician-electricity-101-l04-f3", front: "What does AFCI stand for and what does it detect?", back: "Arc-Fault Circuit Interrupter — it detects dangerous arcing that could start a fire." },
        { id: "electrician-electricity-101-l04-f4", front: "Which NEC article covers branch circuits?", back: "Article 210 — Branch Circuits." }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l04-a1", type: "image", title: "NEC Chapter Map", content: "Flow chart showing NEC chapters 1–9 with key articles highlighted for quick reference." },
        { id: "electrician-electricity-101-l04-a2", type: "animation", title: "GFCI Trip Animation", content: "Animated diagram showing current flow through hot and neutral, with a ground fault diverting current and triggering the GFCI sensor coil." }
      ]
    },

    /* ── L05 INTERACTIVE ── */
    {
      id: "electrician-electricity-101-l05",
      title: "Residential Wiring",
      type: "interactive",
      duration: 15,
      chunks: [
        {
          id: "electrician-electricity-101-l05-c1",
          title: "Service Entrance and Panel Layout",
          content:
            "The service entrance is where utility power enters a building. It typically includes the weatherhead, service-entrance conductors, the meter base, and the main breaker panel. In a 200 A residential service, two 120 V hot legs and one neutral arrive from the utility transformer. Inside the panel, a main breaker protects the bus bars. Branch-circuit breakers snap onto alternating bus stabs so that 120 V circuits load each leg evenly (balancing the panel). A 240 V circuit uses a two-pole breaker that spans both legs. The grounding bus connects to a grounding electrode — typically a ground rod and/or the metal water pipe."
        },
        {
          id: "electrician-electricity-101-l05-c2",
          title: "120 V and 240 V Branch Circuits",
          content:
            "A standard 120 V receptacle circuit uses a hot (black), neutral (white), and equipment ground (bare or green). It is protected by a 15 A or 20 A single-pole breaker. Kitchen countertop and bathroom receptacles require 20 A GFCI-protected circuits. A 240 V circuit — used for dryers, ranges, and water heaters — uses two hots, a neutral (for 120/240 V loads), and a ground, protected by a two-pole breaker. Dedicated circuits are required for appliances like dishwashers, disposals, and laundry outlets. Proper circuit identification and labeling in the panel directory is required by NEC 408.4."
        },
        {
          id: "electrician-electricity-101-l05-c3",
          title: "Switch Wiring: Single-Pole, 3-Way, and 4-Way",
          content:
            "A single-pole switch controls a light from one location. It has two brass terminals (line and load) and a green ground terminal. A 3-way switch controls a light from two locations and has three terminals: one common (dark screw) and two traveler terminals. Two 3-way switches are wired together with traveler wires so flipping either switch toggles the light. A 4-way switch is added between two 3-way switches when control from three or more locations is needed. It has four traveler terminals that cross-connect the travelers. Understanding these configurations is essential for residential rough-in work."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l05-f1", front: "What voltage is between the two hot legs in a standard residential panel?", back: "240 V — each hot leg is 120 V to neutral, and the two legs are 180° out of phase." },
        { id: "electrician-electricity-101-l05-f2", front: "How many traveler wires connect two 3-way switches?", back: "Two traveler wires, plus a common wire that carries the switched hot." },
        { id: "electrician-electricity-101-l05-f3", front: "What NEC section requires panel directory labeling?", back: "NEC 408.4 — requires each circuit to be legibly identified as to its purpose." },
        { id: "electrician-electricity-101-l05-f4", front: "Why must kitchen countertop receptacles be GFCI-protected?", back: "Water proximity creates shock risk; NEC 210.8(A) requires GFCI protection for kitchen countertop receptacles." }
      ],
      metadata: {
        prompts: [
          "Trace the power path from the utility transformer through the meter, main breaker, and a 120 V branch circuit to a duplex receptacle.",
          "Draw a wiring diagram for a 3-way switch circuit controlling a hallway light from two locations.",
          "Calculate the maximum number of 15 A general lighting circuits needed for a 1,500 sq ft dwelling unit using the NEC unit load method."
        ]
      },
      learningAids: [
        { id: "electrician-electricity-101-l05-a1", type: "practice", title: "Panel Balancing Exercise", content: "Given a list of branch circuits with their amperages, arrange them on alternating bus stabs to balance the load across both legs within 10%." }
      ]
    },

    /* ── L06 QUIZ ── */
    {
      id: "electrician-electricity-101-l06",
      title: "NEC & Residential Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "electrician-electricity-101-l06-q1",
          text: "Which NEC article covers grounding and bonding requirements?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "Article 210" },
            { id: "b", text: "Article 240" },
            { id: "c", text: "Article 250" },
            { id: "d", text: "Article 310" }
          ],
          correctOptionId: "c",
          explanation: "NEC Article 250 contains all requirements for grounding and bonding of electrical systems and equipment."
        },
        {
          id: "electrician-electricity-101-l06-q2",
          text: "A GFCI receptacle trips when the current difference between hot and neutral exceeds approximately:",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "15 mA" },
            { id: "b", text: "30 mA" },
            { id: "c", text: "5 mA" },
            { id: "d", text: "100 mA" }
          ],
          correctOptionId: "c",
          explanation: "GFCIs are designed to trip at 4–6 mA of ground-fault leakage current, approximately 5 mA."
        },
        {
          id: "electrician-electricity-101-l06-q3",
          text: "How many 3-way switches are needed to control a light from exactly two locations?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "One" },
            { id: "b", text: "Two" },
            { id: "c", text: "Three" },
            { id: "d", text: "Four" }
          ],
          correctOptionId: "b",
          explanation: "Two 3-way switches are wired together with traveler wires to allow control from two locations."
        },
        {
          id: "electrician-electricity-101-l06-q4",
          text: "In a standard 200 A residential panel, what voltage appears between the two hot bus bars?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "120 V" },
            { id: "b", text: "208 V" },
            { id: "c", text: "240 V" },
            { id: "d", text: "277 V" }
          ],
          correctOptionId: "c",
          explanation: "Each hot leg is 120 V to neutral. The two legs are 180° out of phase, producing 240 V line-to-line."
        }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l06-a1", type: "mnemonic", title: "NEC Article Numbers", content: "210 = Branch circuits, 220 = Calculations, 240 = Overcurrent, 250 = Grounding, 310 = Conductors — remember '21-22-24-25-31' counting pattern." }
      ]
    },

    /* ── L07 VIDEO ── */
    {
      id: "electrician-electricity-101-l07",
      title: "Commercial and Industrial Systems",
      type: "video",
      duration: 12,
      chunks: [
        {
          id: "electrician-electricity-101-l07-c1",
          title: "Three-Phase Power Distribution",
          content:
            "Commercial and industrial buildings use three-phase power for efficiency and to run large motors. Common configurations are 208Y/120 V (wye) and 480Y/277 V (wye). In a wye system, line-to-neutral voltage is the phase voltage, and line-to-line voltage is √3 times the phase voltage. A 480Y/277 V system delivers 277 V for fluorescent lighting and 480 V for motors. Delta configurations (240 V delta, high-leg delta) are found in older installations. Electricians must identify the system type before performing any work, as it affects conductor sizing, transformer connections, and equipment ratings."
        },
        {
          id: "electrician-electricity-101-l07-c2",
          title: "Motor Controls and Transformers",
          content:
            "Electric motors are the largest single load in most commercial buildings. A basic motor-control circuit consists of a disconnect switch, a motor starter (contactor plus overload relay), and control wiring. NEC Article 430 governs motor installations including branch-circuit conductor sizing (125% of full-load current), overcurrent protection, and disconnecting means. Transformers step voltage up or down. Common commercial step-down transformers convert 480 V to 208Y/120 V for receptacles and small equipment. NEC Article 450 covers transformer protection. Electricians must calculate primary and secondary currents using the turns ratio and VA ratings."
        },
        {
          id: "electrician-electricity-101-l07-c3",
          title: "Demand Calculations and Emergency Systems",
          content:
            "NEC Article 220 provides methods for calculating feeder and service loads. The standard method sums all connected loads and applies demand factors — for example, the first 10 kVA of general lighting at 100%, the remainder at 50%. Optional calculations (Article 220.82/220.83) simplify sizing for dwellings and existing installations. Emergency and legally required standby systems (NEC Articles 700–702) must supply life-safety loads like exit signs, stairwell lighting, and fire pumps within 10 seconds via a generator or battery system. These circuits must be kept separate from normal wiring and clearly identified throughout the building."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l07-f1", front: "In a 480Y/277 V system, what is the line-to-neutral voltage?", back: "277 V — the line-to-line voltage (480 V) divided by √3 ≈ 1.732." },
        { id: "electrician-electricity-101-l07-f2", front: "What NEC article governs motor installations?", back: "Article 430 — Motors, Motor Circuits, and Controllers." },
        { id: "electrician-electricity-101-l07-f3", front: "How quickly must an emergency generator restore power per NEC 700?", back: "Within 10 seconds of a power failure." },
        { id: "electrician-electricity-101-l07-f4", front: "What multiplier converts phase voltage to line voltage in a wye system?", back: "√3 (approximately 1.732). Line voltage = Phase voltage × √3." }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l07-a1", type: "image", title: "Wye vs Delta Diagram", content: "Side-by-side vector diagrams showing wye (star) and delta transformer connections with voltage labels." },
        { id: "electrician-electricity-101-l07-a2", type: "animation", title: "Motor Starter Circuit", content: "Animated ladder diagram showing a start/stop pushbutton station, contactor coil, auxiliary contacts, and overload relay operation." }
      ]
    },

    /* ── L08 INTERACTIVE ── */
    {
      id: "electrician-electricity-101-l08",
      title: "Safety and Troubleshooting",
      type: "interactive",
      duration: 14,
      chunks: [
        {
          id: "electrician-electricity-101-l08-c1",
          title: "Lockout/Tagout (LOTO) Procedures",
          content:
            "OSHA 29 CFR 1910.147 requires lockout/tagout procedures whenever an electrician works on de-energized equipment. The six steps are: (1) notify affected employees, (2) shut down the equipment using normal controls, (3) isolate all energy sources (open disconnects, close valves), (4) apply personal locks and tags, (5) release stored energy (capacitors, springs, elevated loads), and (6) verify zero energy with a tested meter. Each worker applies their own lock — no one else may remove it. Failure to follow LOTO is one of the leading causes of electrical fatalities on the job."
        },
        {
          id: "electrician-electricity-101-l08-c2",
          title: "PPE and Arc-Flash Awareness",
          content:
            "NFPA 70E establishes arc-flash boundaries and PPE categories. An arc flash occurs when current flows through air between conductors, generating temperatures up to 35,000 °F and explosive pressure waves. Before working on or near energized equipment, electricians must determine the arc-flash boundary and wear rated PPE: arc-rated clothing, face shield, insulated gloves with leather protectors, and hearing protection. Equipment must be labeled with incident energy (cal/cm²) and the required PPE category. The limited approach boundary and restricted approach boundary define safe distances for qualified and unqualified persons."
        },
        {
          id: "electrician-electricity-101-l08-c3",
          title: "Multimeter Testing and Common Faults",
          content:
            "A digital multimeter (DMM) is the electrician's primary diagnostic tool. Voltage measurements identify live circuits and confirm zero energy. Resistance (ohm) measurements check conductor continuity and insulation integrity. Current measurements (clamp-on ammeter) verify load draw. Common faults include: short circuits (hot to neutral/ground — high current, trips breaker immediately), open circuits (broken conductor — no current flow), and ground faults (hot to equipment ground — trips GFCI or breaker). Voltage drop measurements across long runs help diagnose undersized conductors — NEC recommends no more than 3% drop on branch circuits and 5% total."
        }
      ],
      flashcards: [
        { id: "electrician-electricity-101-l08-f1", front: "What are the six steps of lockout/tagout?", back: "Notify, shut down, isolate, lock/tag, release stored energy, verify zero energy." },
        { id: "electrician-electricity-101-l08-f2", front: "What temperature can an arc flash reach?", back: "Up to 35,000 °F (19,400 °C) — hotter than the surface of the sun." },
        { id: "electrician-electricity-101-l08-f3", front: "What is the NEC-recommended maximum voltage drop for a branch circuit?", back: "3% for the branch circuit, 5% total (feeder + branch circuit combined)." },
        { id: "electrician-electricity-101-l08-f4", front: "What is the difference between a short circuit and a ground fault?", back: "A short circuit is hot-to-neutral contact; a ground fault is hot-to-ground/equipment contact. Both cause excessive current." }
      ],
      metadata: {
        prompts: [
          "Walk through the complete LOTO procedure for de-energizing a 480 V motor control center before performing maintenance.",
          "Using a digital multimeter, describe the step-by-step process to diagnose an open circuit in a 120 V lighting branch.",
          "Calculate the voltage drop on a 100 ft run of 12 AWG copper carrying 16 A at 120 V and determine if it meets NEC recommendations."
        ]
      },
      learningAids: [
        { id: "electrician-electricity-101-l08-a1", type: "practice", title: "Fault Diagnosis Simulator", content: "Given symptom descriptions (breaker trips immediately, no power at outlet, intermittent flickering), identify the fault type and the correct multimeter test to confirm it." }
      ]
    },

    /* ── L09 QUIZ ── */
    {
      id: "electrician-electricity-101-l09",
      title: "Commercial & Safety Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "electrician-electricity-101-l09-q1",
          text: "In a 208Y/120 V three-phase system, what is the line-to-line voltage?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "120 V" },
            { id: "b", text: "208 V" },
            { id: "c", text: "240 V" },
            { id: "d", text: "277 V" }
          ],
          correctOptionId: "b",
          explanation: "In a 208Y/120 V system, the line-to-line voltage is 208 V (120 V × √3 ≈ 208 V)."
        },
        {
          id: "electrician-electricity-101-l09-q2",
          text: "Per NEC Article 430, motor branch-circuit conductors must be sized at what percentage of the motor's full-load current?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "100%" },
            { id: "b", text: "110%" },
            { id: "c", text: "125%" },
            { id: "d", text: "150%" }
          ],
          correctOptionId: "c",
          explanation: "NEC 430.22 requires motor branch-circuit conductors to have an ampacity of at least 125% of the motor's full-load current."
        },
        {
          id: "electrician-electricity-101-l09-q3",
          text: "What is the FIRST step in a lockout/tagout procedure?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "Apply personal lock to the disconnect" },
            { id: "b", text: "Verify zero energy with a meter" },
            { id: "c", text: "Notify all affected employees" },
            { id: "d", text: "Open the main breaker" }
          ],
          correctOptionId: "c",
          explanation: "The first step is always to notify affected employees before beginning the shutdown and isolation process."
        },
        {
          id: "electrician-electricity-101-l09-q4",
          text: "NFPA 70E arc-flash labels must include which key piece of information?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "Equipment purchase date" },
            { id: "b", text: "Incident energy in cal/cm²" },
            { id: "c", text: "Name of the installing electrician" },
            { id: "d", text: "Wire color code chart" }
          ],
          correctOptionId: "b",
          explanation: "Arc-flash labels must display the incident energy (cal/cm²) so workers can select the correct PPE category."
        }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l09-a1", type: "mnemonic", title: "LOTO Steps", content: "N-S-I-L-R-V: Notify, Shut down, Isolate, Lock/tag, Release stored energy, Verify zero energy." }
      ]
    },

    /* ── L10 MASTERY QUIZ ── */
    {
      id: "electrician-electricity-101-l10",
      title: "Mastery Quiz: Electrician Fundamentals",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "electrician-electricity-101-l10-q1",
          text: "A 1,500 W space heater operates on a 120 V circuit. What current does it draw, and what is the minimum breaker size per NEC?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "12.5 A — 15 A breaker" },
            { id: "b", text: "12.5 A — 20 A breaker (continuous load rule)" },
            { id: "c", text: "15 A — 20 A breaker" },
            { id: "d", text: "10 A — 15 A breaker" }
          ],
          correctOptionId: "b",
          explanation: "I = P/V = 1500/120 = 12.5 A. A fixed space heater is a continuous load, so the breaker must be rated at 125% of the load: 12.5 × 1.25 = 15.625 A, requiring a 20 A breaker."
        },
        {
          id: "electrician-electricity-101-l10-q2",
          text: "An electrician needs to control a stairwell light from three locations. What combination of switches is required?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "Three 3-way switches" },
            { id: "b", text: "Two 3-way switches and one 4-way switch" },
            { id: "c", text: "Three 4-way switches" },
            { id: "d", text: "One 3-way switch and two single-pole switches" }
          ],
          correctOptionId: "b",
          explanation: "Control from three locations requires two 3-way switches at the ends and one 4-way switch in the middle, with traveler wires connecting them."
        },
        {
          id: "electrician-electricity-101-l10-q3",
          text: "A 480Y/277 V transformer supplies a 45 kVA balanced three-phase load. What is the line current?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "54.1 A" },
            { id: "b", text: "93.75 A" },
            { id: "c", text: "162.5 A" },
            { id: "d", text: "32.5 A" }
          ],
          correctOptionId: "a",
          explanation: "For three-phase: I = VA / (V_LL × √3) = 45,000 / (480 × 1.732) = 45,000 / 831.4 ≈ 54.1 A."
        },
        {
          id: "electrician-electricity-101-l10-q4",
          text: "During LOTO, an electrician's personal lock is on the disconnect. A supervisor needs the equipment re-energized immediately. What is the correct action?",
          skillId: "electrician-electricity-101-skill-core",
          options: [
            { id: "a", text: "The supervisor may cut the lock in an emergency" },
            { id: "b", text: "Only the electrician who placed the lock may remove it" },
            { id: "c", text: "Any qualified person may remove any lock" },
            { id: "d", text: "The safety officer removes all locks at shift end" }
          ],
          correctOptionId: "b",
          explanation: "OSHA 1910.147 requires that only the person who applied a lockout device may remove it, ensuring that worker is aware the equipment will be re-energized."
        }
      ],
      learningAids: [
        { id: "electrician-electricity-101-l10-a1", type: "mnemonic", title: "Three-Phase Current Formula", content: "I = VA ÷ (V × √3) — remember 'Current equals VA divided by Voltage times the square root of three.'" }
      ]
    }
  ]
};
