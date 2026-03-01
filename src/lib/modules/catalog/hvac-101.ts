import type { LearningModule } from "@/lib/modules/types";

export const Hvac101Module: LearningModule = {
  "id": "hvac-101",
  "title": "HVAC Fundamentals",
  "description": "Learn the core principles of heating, ventilation, and air conditioning systems — from thermodynamics and the refrigeration cycle to ductwork design, electrical controls, and indoor air quality standards.",
  "subject": "Trades",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "trades",
    "hvac"
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
    "Explain the three modes of heat transfer and calculate heat loads using BTU measurements",
    "Trace the vapor-compression refrigeration cycle and identify the function of each major component",
    "Compare heating system types including furnaces, boilers, and heat pumps, and interpret AFUE ratings",
    "Calculate airflow requirements using CFM and static pressure for basic duct sizing",
    "Identify common HVAC electrical components and describe basic troubleshooting procedures for control circuits",
    "Apply ASHRAE 62.1 ventilation standards and evaluate indoor air quality using filtration ratings and CO₂ thresholds",
    "Demonstrate mastery of foundational HVAC concepts through integrated checkpoint assessments"
  ],
  "lessons": [
    {
      "id": "hvac-101-l01",
      "title": "Thermodynamics for HVAC",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define heat and describe the three modes of heat transfer",
        "Explain BTU and how it relates to HVAC system sizing",
        "Distinguish between sensible heat and latent heat"
      ],
      "chunks": [
        {
          "id": "hvac-101-l01-c1",
          "title": "Heat Transfer Modes",
          "content": "Heat always flows from a warmer object to a cooler one, and it travels by three mechanisms. Conduction is heat transfer through direct contact — think of a metal spoon getting hot in a pot of soup. Convection moves heat through fluids (liquids or gases); warm air rising from a floor register is convective heating. Radiation transfers heat via electromagnetic waves without needing a medium — the sun warming your skin is radiant heat. Every HVAC system exploits at least one of these modes to add or remove heat from a building space."
        },
        {
          "id": "hvac-101-l01-c2",
          "title": "BTU and Heat Measurement",
          "content": "A British Thermal Unit (BTU) is the amount of energy needed to raise one pound of water by one degree Fahrenheit. HVAC equipment is rated in BTU/h (BTUs per hour) to indicate heating or cooling capacity. A typical residential furnace might be rated at 80,000 BTU/h, while a window air conditioner may produce 8,000–12,000 BTU/h of cooling. To size a system you calculate the building's heat load — the total BTUs that must be added or removed each hour to maintain the desired indoor temperature given outdoor conditions, insulation, window area, and occupancy."
        },
        {
          "id": "hvac-101-l01-c3",
          "title": "Sensible Heat, Latent Heat, and Psychrometrics Basics",
          "content": "Sensible heat changes the temperature of a substance without changing its state — you can feel it on a thermometer. Latent heat changes the state of a substance (e.g., liquid to vapor) without changing temperature. Air conditioning removes both: sensible cooling lowers air temperature and latent cooling condenses moisture out of the air. Psychrometrics is the study of air–water-vapor mixtures. A psychrometric chart plots dry-bulb temperature, wet-bulb temperature, relative humidity, and dew point, letting technicians predict how air will behave as it is heated, cooled, humidified, or dehumidified inside ductwork."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l01-f1",
          "front": "What are the three modes of heat transfer?",
          "back": "Conduction (direct contact), convection (fluid movement), and radiation (electromagnetic waves)."
        },
        {
          "id": "hvac-101-l01-f2",
          "front": "What is a BTU?",
          "back": "A British Thermal Unit — the energy required to raise one pound of water by 1 °F. HVAC equipment is rated in BTU/h."
        },
        {
          "id": "hvac-101-l01-f3",
          "front": "What is the difference between sensible heat and latent heat?",
          "back": "Sensible heat changes temperature (measurable with a thermometer). Latent heat changes the state of matter (e.g., liquid to vapor) without changing temperature."
        },
        {
          "id": "hvac-101-l01-f4",
          "front": "What does a psychrometric chart show?",
          "back": "It plots the relationships between dry-bulb temperature, wet-bulb temperature, relative humidity, dew point, and enthalpy of air–water-vapor mixtures."
        }
      ],
      "learningAids": [
        {
          "id": "hvac-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "hvac-101-l02",
      "title": "The Refrigeration Cycle",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify the four main components of the vapor-compression cycle",
        "Describe the state changes of refrigerant through each stage",
        "Explain the role of the metering device in pressure and temperature drop"
      ],
      "chunks": [
        {
          "id": "hvac-101-l02-c1",
          "title": "Compressor and Condenser",
          "content": "The refrigeration cycle begins at the compressor, which receives low-pressure, low-temperature refrigerant vapor from the evaporator and compresses it into high-pressure, high-temperature superheated vapor. This hot gas then enters the condenser coil, where outdoor air (or water, in water-cooled systems) absorbs heat from the refrigerant. As the refrigerant rejects heat it condenses from a vapor into a high-pressure liquid. The condenser fan pulls outdoor air across the coil fins to accelerate heat rejection. Subcooling — cooling the liquid a few degrees below its saturation temperature — improves system efficiency."
        },
        {
          "id": "hvac-101-l02-c2",
          "title": "Expansion Valve and Evaporator",
          "content": "The high-pressure liquid refrigerant flows to the metering device — commonly a thermostatic expansion valve (TXV) or an electronic expansion valve (EEV). This device creates a sharp pressure drop, converting the liquid into a low-pressure, low-temperature mixture of liquid and vapor. The cold mixture enters the evaporator coil inside the conditioned space. Indoor air blows across the evaporator fins, transferring heat into the refrigerant, which absorbs energy and boils into a low-pressure vapor. This is where cooling actually happens — the air gives up both sensible and latent heat to the refrigerant."
        },
        {
          "id": "hvac-101-l02-c3",
          "title": "Refrigerant States and the Complete Cycle",
          "content": "Through one full cycle the refrigerant passes through four states: high-pressure superheated vapor (leaving the compressor), high-pressure liquid (leaving the condenser), low-pressure liquid-vapor mix (leaving the expansion valve), and low-pressure vapor (leaving the evaporator). Common refrigerants include R-410A (used in most modern residential systems) and R-32 (a lower-GWP alternative). The coefficient of performance (COP) measures cycle efficiency — it is the ratio of cooling output to electrical input. Understanding state changes and pressure–temperature relationships is essential for diagnosing charge levels and system faults."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l02-f1",
          "front": "What are the four main components of the vapor-compression refrigeration cycle?",
          "back": "Compressor, condenser, expansion (metering) device, and evaporator."
        },
        {
          "id": "hvac-101-l02-f2",
          "front": "What happens to the refrigerant in the evaporator?",
          "back": "It absorbs heat from indoor air and boils from a low-pressure liquid-vapor mixture into a low-pressure vapor."
        },
        {
          "id": "hvac-101-l02-f3",
          "front": "What does a thermostatic expansion valve (TXV) do?",
          "back": "It meters the flow of high-pressure liquid refrigerant, creating a sharp pressure drop that lowers its temperature before entering the evaporator."
        },
        {
          "id": "hvac-101-l02-f4",
          "front": "What is COP in refrigeration?",
          "back": "Coefficient of Performance — the ratio of useful cooling (or heating) output to electrical energy input. Higher COP means better efficiency."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Refrigerant State at Each Component",
          "description": "Sort each refrigerant description into the correct refrigeration cycle component.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "buckets": [
            "Compressor",
            "Condenser",
            "Expansion Valve",
            "Evaporator"
          ],
          "items": [
            {
              "text": "Low-pressure vapor is squeezed into high-pressure superheated vapor",
              "bucket": "Compressor"
            },
            {
              "text": "High-pressure vapor rejects heat and condenses into a liquid",
              "bucket": "Condenser"
            },
            {
              "text": "High-pressure liquid drops to low pressure and temperature",
              "bucket": "Expansion Valve"
            },
            {
              "text": "Cold refrigerant absorbs indoor heat and boils into vapor",
              "bucket": "Evaporator"
            },
            {
              "text": "Subcooling occurs to improve efficiency",
              "bucket": "Condenser"
            },
            {
              "text": "Superheat is measured to verify proper charge",
              "bucket": "Evaporator"
            },
            {
              "text": "Discharge temperature is highest here",
              "bucket": "Compressor"
            },
            {
              "text": "A TXV or EEV meters refrigerant flow",
              "bucket": "Expansion Valve"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "hvac-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "hvac-101-l03",
      "title": "Heat Transfer & Refrigeration Checkpoint",
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
          "id": "hvac-101-l03-q1",
          "text": "Which mode of heat transfer requires direct physical contact between materials?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Radiation"
            },
            {
              "id": "b",
              "text": "Convection"
            },
            {
              "id": "c",
              "text": "Conduction"
            },
            {
              "id": "d",
              "text": "Evaporation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Conduction transfers heat through direct molecular contact. Convection requires fluid movement and radiation uses electromagnetic waves."
        },
        {
          "id": "hvac-101-l03-q2",
          "text": "An air conditioner removes moisture from indoor air. What type of heat is associated with this moisture removal?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sensible heat"
            },
            {
              "id": "b",
              "text": "Latent heat"
            },
            {
              "id": "c",
              "text": "Radiant heat"
            },
            {
              "id": "d",
              "text": "Specific heat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Latent heat is the energy involved in a phase change. When moisture condenses on the evaporator coil, latent heat is removed from the air without changing its temperature."
        },
        {
          "id": "hvac-101-l03-q3",
          "text": "In the vapor-compression cycle, where does the refrigerant change from a high-pressure liquid to a low-pressure mixture?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Compressor"
            },
            {
              "id": "b",
              "text": "Condenser"
            },
            {
              "id": "c",
              "text": "Evaporator"
            },
            {
              "id": "d",
              "text": "Expansion valve"
            }
          ],
          "correctOptionId": "d",
          "explanation": "The expansion (metering) valve creates a sudden pressure drop, converting the high-pressure liquid into a cold, low-pressure liquid-vapor mixture before entering the evaporator."
        },
        {
          "id": "hvac-101-l03-q4",
          "text": "A system rated at 36,000 BTU/h is equivalent to how many tons of cooling?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 ton"
            },
            {
              "id": "b",
              "text": "2 tons"
            },
            {
              "id": "c",
              "text": "3 tons"
            },
            {
              "id": "d",
              "text": "4 tons"
            }
          ],
          "correctOptionId": "c",
          "explanation": "One ton of cooling equals 12,000 BTU/h. Therefore 36,000 ÷ 12,000 = 3 tons."
        }
      ],
      "learningAids": [
        {
          "id": "hvac-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "hvac-101-l04",
      "title": "Heating Systems",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Compare gas furnaces, boilers, and heat pumps as heating sources",
        "Explain combustion analysis and flue gas safety",
        "Interpret AFUE ratings to evaluate heating efficiency"
      ],
      "chunks": [
        {
          "id": "hvac-101-l04-c1",
          "title": "Furnaces and Combustion",
          "content": "A gas furnace burns natural gas or propane inside a heat exchanger. A draft-inducer motor pulls combustion gases through the exchanger while a blower fan pushes house air over the outside of the exchanger, warming it before distributing it through ductwork. Modern condensing furnaces have a secondary heat exchanger that extracts additional heat from flue gases, causing water vapor to condense. This boosts efficiency above 90%. Combustion analysis measures CO₂, CO, O₂, and stack temperature to verify safe, complete combustion — CO levels above 100 ppm in flue gas signal a cracked heat exchanger or poor flame adjustment."
        },
        {
          "id": "hvac-101-l04-c2",
          "title": "Boilers and Hydronic Heating",
          "content": "Boilers heat water (or produce steam) and circulate it through radiators, baseboard convectors, or in-floor radiant tubing. Hot-water boilers typically operate between 140 °F and 180 °F supply temperature, while steam boilers operate at or just above 212 °F. Radiant floor systems use lower water temperatures (90–120 °F), making them ideal companions for condensing boilers or heat pumps. All boilers require pressure-relief valves, expansion tanks, and regular maintenance including checking the low-water cutoff and inspecting the combustion chamber."
        },
        {
          "id": "hvac-101-l04-c3",
          "title": "Heat Pumps and AFUE Ratings",
          "content": "A heat pump is essentially a reversible refrigeration system — in winter it extracts heat from outdoor air (or ground water) and moves it indoors. Air-source heat pumps work well in moderate climates; ground-source (geothermal) units maintain high efficiency even in extreme cold because ground temperatures stay relatively constant. Heating efficiency for furnaces and boilers is measured by AFUE (Annual Fuel Utilization Efficiency). An 80% AFUE furnace converts 80 cents of every fuel dollar into heat. Heat pump efficiency is expressed as HSPF (Heating Seasonal Performance Factor) or COP; values above 8.0 HSPF indicate high efficiency."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l04-f1",
          "front": "What does AFUE stand for and what does it measure?",
          "back": "Annual Fuel Utilization Efficiency — the percentage of fuel energy a furnace or boiler converts into usable heat over a heating season."
        },
        {
          "id": "hvac-101-l04-f2",
          "front": "What makes a condensing furnace more efficient than a standard furnace?",
          "back": "It has a secondary heat exchanger that recovers latent heat from combustion flue gases, achieving AFUE ratings above 90%."
        },
        {
          "id": "hvac-101-l04-f3",
          "front": "How does a heat pump provide heating in winter?",
          "back": "It reverses the refrigeration cycle — the outdoor coil acts as an evaporator absorbing heat from outside air (or ground), and the indoor coil acts as a condenser releasing heat indoors."
        },
        {
          "id": "hvac-101-l04-f4",
          "front": "Why is combustion analysis important?",
          "back": "It measures CO, CO₂, O₂, and stack temperature to verify safe, complete combustion and detect dangerous conditions like a cracked heat exchanger."
        }
      ],
      "learningAids": [
        {
          "id": "hvac-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "hvac-101-l05",
      "title": "Air Distribution and Ductwork",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Define static pressure and explain its role in duct design",
        "Calculate basic CFM requirements for a room",
        "Describe the purpose of dampers and air balancing"
      ],
      "chunks": [
        {
          "id": "hvac-101-l05-c1",
          "title": "Static Pressure and CFM",
          "content": "Static pressure is the force exerted by air inside ductwork, measured in inches of water column (in. w.c.). It is the 'resistance' the blower must overcome to push air through the duct system. Excessive static pressure — often caused by undersized ducts, dirty filters, or too many fittings — reduces airflow and stresses the blower motor. CFM (cubic feet per minute) measures the volume of air delivered. A rule of thumb for cooling is 400 CFM per ton of capacity. Proper duct design matches blower capacity with duct sizing to maintain static pressure within the equipment manufacturer's range, typically 0.5 in. w.c. or less for residential systems."
        },
        {
          "id": "hvac-101-l05-c2",
          "title": "Duct Types and Sizing",
          "content": "Ducts are manufactured from sheet metal (galvanized steel), flexible insulated hose (flex duct), or rigid fiberglass duct board. Sheet-metal ducts offer the lowest friction loss and longest life. Flex duct is easy to install but must be pulled taut and supported to prevent sagging, which increases resistance. Duct sizing uses friction-rate charts or ACCA Manual D: you start with the total available static pressure, subtract losses from components (filter, coil, grilles), and distribute the remaining pressure budget across duct runs. Round ducts have less friction per CFM than rectangular ducts of the same cross-sectional area."
        },
        {
          "id": "hvac-101-l05-c3",
          "title": "Dampers and Air Balancing",
          "content": "Dampers are adjustable plates inside ducts that regulate airflow to individual zones or rooms. Manual balancing dampers are set during commissioning and locked in place. Motorized dampers open and close automatically in zoning systems controlled by multiple thermostats. Air balancing is the process of measuring airflow at each supply register and adjusting dampers so every room receives its design CFM. Technicians use an anemometer or a flow hood to measure air velocity and volume. Proper balancing eliminates hot and cold spots, reduces energy waste, and ensures consistent occupant comfort throughout the building."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l05-f1",
          "front": "What does CFM stand for and why does it matter?",
          "back": "Cubic Feet per Minute — it measures the volume of air moved by the blower. Correct CFM ensures adequate cooling/heating and comfort."
        },
        {
          "id": "hvac-101-l05-f2",
          "front": "What is static pressure in ductwork?",
          "back": "The resistance to airflow inside the duct system, measured in inches of water column (in. w.c.). High static pressure reduces airflow and strains the blower."
        },
        {
          "id": "hvac-101-l05-f3",
          "front": "What is the rule-of-thumb CFM per ton of cooling?",
          "back": "Approximately 400 CFM per ton (12,000 BTU/h) of cooling capacity."
        },
        {
          "id": "hvac-101-l05-f4",
          "front": "What is the purpose of air balancing?",
          "back": "To measure and adjust airflow at each register so every room receives its design CFM, eliminating hot/cold spots."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-101-l05-a1",
          "type": "matching_pairs",
          "title": "Duct System Components",
          "description": "Match each air distribution term to its correct definition.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "pairs": [
            {
              "left": "Static pressure",
              "right": "Resistance to airflow measured in in. w.c."
            },
            {
              "left": "CFM",
              "right": "Volume of air moved per minute"
            },
            {
              "left": "Flex duct",
              "right": "Insulated flexible hose that must be pulled taut"
            },
            {
              "left": "Balancing damper",
              "right": "Adjustable plate that regulates branch airflow"
            },
            {
              "left": "Flow hood",
              "right": "Instrument that measures air volume at a register"
            },
            {
              "left": "Manual D",
              "right": "ACCA standard for residential duct design"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "hvac-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "hvac-101-l06",
      "title": "Heating & Airflow Checkpoint",
      "type": "quiz",
      "duration": 8,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 2
        }
      },
      "questions": [
        {
          "id": "hvac-101-l06-q1",
          "text": "A furnace with a 92% AFUE rating is classified as which type?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Standard-efficiency furnace"
            },
            {
              "id": "b",
              "text": "Mid-efficiency furnace"
            },
            {
              "id": "c",
              "text": "Condensing furnace"
            },
            {
              "id": "d",
              "text": "Electric resistance furnace"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Condensing furnaces have AFUE ratings of 90% or higher because they recover latent heat from flue gases via a secondary heat exchanger. Standard-efficiency units are typically 80% AFUE."
        },
        {
          "id": "hvac-101-l06-q2",
          "text": "A 3-ton cooling system requires approximately how many CFM of airflow?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "800 CFM"
            },
            {
              "id": "b",
              "text": "1,000 CFM"
            },
            {
              "id": "c",
              "text": "1,200 CFM"
            },
            {
              "id": "d",
              "text": "1,600 CFM"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The rule of thumb is 400 CFM per ton. 3 tons × 400 CFM = 1,200 CFM."
        },
        {
          "id": "hvac-101-l06-q3",
          "text": "Which heating system uses a reversible refrigeration cycle?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gas furnace"
            },
            {
              "id": "b",
              "text": "Steam boiler"
            },
            {
              "id": "c",
              "text": "Electric baseboard"
            },
            {
              "id": "d",
              "text": "Heat pump"
            }
          ],
          "correctOptionId": "d",
          "explanation": "A heat pump reverses the refrigeration cycle with a reversing valve, allowing it to provide either heating or cooling by switching the roles of the indoor and outdoor coils."
        },
        {
          "id": "hvac-101-l06-q4",
          "text": "Excessive static pressure in a duct system is most likely caused by which condition?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Oversized ductwork"
            },
            {
              "id": "b",
              "text": "A clean, low-MERV filter"
            },
            {
              "id": "c",
              "text": "Undersized ducts and clogged filters"
            },
            {
              "id": "d",
              "text": "An open bypass damper"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Undersized ducts restrict airflow and dirty/clogged filters add resistance, both significantly increasing static pressure above the system's design limit."
        }
      ]
    },
    {
      "id": "hvac-101-l07",
      "title": "Controls and Electrical for HVAC",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Identify common electrical components: thermostats, relays, contactors, and capacitors",
        "Read a basic HVAC wiring diagram",
        "Describe systematic troubleshooting steps for control circuits"
      ],
      "chunks": [
        {
          "id": "hvac-101-l07-c1",
          "title": "Thermostats and Control Signals",
          "content": "The thermostat is the brain of the HVAC system. It compares the room temperature to the set point and sends low-voltage control signals (typically 24 VAC) to start heating or cooling equipment. Common thermostat wire colors follow a standard: R (power), G (fan), Y (cooling), W (heat), and C (common). Programmable and smart thermostats allow scheduled set-back temperatures to reduce energy use — for example, lowering heat to 62 °F at night and raising it to 70 °F before morning wake-up. Two-stage thermostats can call for low or high capacity depending on how far the room temperature deviates from the set point."
        },
        {
          "id": "hvac-101-l07-c2",
          "title": "Relays, Contactors, and Capacitors",
          "content": "Relays and contactors are electromagnetic switches. A relay uses a small control signal (24 V) to switch a moderate load on or off — for example, energizing a blower motor. A contactor works the same way but is built for higher-amperage loads like compressor motors; it has heavier-duty contacts. Capacitors store and release electrical energy to help motors start and run. A start capacitor provides a high-torque boost during motor startup and then drops out of the circuit. A run capacitor stays connected, improving motor efficiency and power factor. Technicians use a multimeter to check capacitor microfarad (µF) ratings — a reading more than ±6% from the rated value indicates the capacitor should be replaced."
        },
        {
          "id": "hvac-101-l07-c3",
          "title": "Troubleshooting Control Circuits",
          "content": "Systematic troubleshooting follows the flow of power. First, verify line voltage (120/240 V) at the disconnect. Second, check the transformer for 24 VAC output. Third, follow the control circuit from R through the thermostat calls (G, Y, W) to the component being energized. A multimeter on the VAC setting confirms whether voltage is present at each point. Common faults include a blown 3-amp fuse on the control board (often caused by a shorted thermostat wire), a failed contactor coil, or a defective capacitor preventing the compressor from starting. Always lock out and tag out power before touching high-voltage components."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l07-f1",
          "front": "What voltage do most residential HVAC control circuits use?",
          "back": "24 VAC, stepped down from 120 V by a control transformer."
        },
        {
          "id": "hvac-101-l07-f2",
          "front": "What is the difference between a relay and a contactor?",
          "back": "Both are electromagnetic switches, but a contactor is designed for higher-amperage loads like compressor motors, while a relay handles lighter loads."
        },
        {
          "id": "hvac-101-l07-f3",
          "front": "What do the thermostat wire colors R, G, Y, and W typically control?",
          "back": "R = 24 V power, G = indoor fan, Y = cooling (compressor), W = heating."
        },
        {
          "id": "hvac-101-l07-f4",
          "front": "How do you test a run capacitor?",
          "back": "Use a multimeter on the capacitance (µF) setting. If the reading is more than ±6% from the rated value printed on the capacitor, it should be replaced."
        }
      ]
    },
    {
      "id": "hvac-101-l08",
      "title": "Indoor Air Quality and Ventilation",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Summarize ASHRAE Standard 62.1 ventilation requirements",
        "Compare filter efficiency using MERV ratings",
        "Identify acceptable indoor CO₂ and humidity ranges"
      ],
      "chunks": [
        {
          "id": "hvac-101-l08-c1",
          "title": "ASHRAE 62.1 Ventilation Standard",
          "content": "ASHRAE Standard 62.1 sets minimum outdoor-air ventilation rates for commercial buildings to maintain acceptable indoor air quality. Rates are specified per person and per unit floor area. For example, a typical office requires 5 CFM per person plus 0.06 CFM per square foot. The ventilation rate procedure calculates the total outdoor air needed based on occupancy and zone area. Proper ventilation dilutes indoor pollutants — volatile organic compounds (VOCs), carbon dioxide, and bioaerosols — to levels that protect occupant health. Demand-controlled ventilation (DCV) uses CO₂ sensors to adjust outdoor-air dampers in real time, saving energy when spaces are partially occupied."
        },
        {
          "id": "hvac-101-l08-c2",
          "title": "Filtration and MERV Ratings",
          "content": "Air filters capture particulates before they enter occupied spaces or foul HVAC equipment. The Minimum Efficiency Reporting Value (MERV) scale runs from 1 to 20. MERV 1–4 filters catch large debris like dust bunnies. MERV 8 captures mold spores and dust-mite allergens. MERV 13 captures bacteria, smoke, and fine particles down to 0.3–1.0 µm — this is the level recommended by ASHRAE for most commercial buildings. MERV 17–20 filters (HEPA territory) are used in hospitals and clean rooms. Higher MERV ratings increase pressure drop across the filter, so the duct system must be designed to accommodate the added resistance without starving the blower of airflow."
        },
        {
          "id": "hvac-101-l08-c3",
          "title": "Humidity Control and CO₂ Monitoring",
          "content": "Indoor relative humidity should be maintained between 30% and 60%. Below 30%, dry air causes skin irritation, static electricity, and cracks in wood finishes. Above 60%, mold growth, dust-mite proliferation, and condensation on surfaces become problems. Dehumidifiers, reheat coils, and properly sized cooling systems all help manage humidity. CO₂ is a proxy for ventilation adequacy — outdoor air is roughly 420 ppm CO₂, and ASHRAE guidelines suggest indoor levels stay below 1,000 ppm for comfort and cognitive performance. CO₂ sensors placed in the breathing zone (3–6 feet above the floor) feed data to the building automation system to modulate outdoor-air intake."
        }
      ],
      "flashcards": [
        {
          "id": "hvac-101-l08-f1",
          "front": "What does ASHRAE 62.1 specify?",
          "back": "Minimum outdoor-air ventilation rates for commercial buildings to maintain acceptable indoor air quality."
        },
        {
          "id": "hvac-101-l08-f2",
          "front": "What MERV rating does ASHRAE recommend for most commercial buildings?",
          "back": "MERV 13 — it captures bacteria, smoke, and fine particles down to 0.3–1.0 µm."
        },
        {
          "id": "hvac-101-l08-f3",
          "front": "What is the recommended indoor relative humidity range?",
          "back": "30% to 60%. Below 30% causes dryness; above 60% promotes mold growth."
        },
        {
          "id": "hvac-101-l08-f4",
          "front": "What indoor CO₂ level indicates adequate ventilation?",
          "back": "Below 1,000 ppm. Outdoor air is roughly 420 ppm, so staying under 1,000 ppm means sufficient fresh air is being supplied."
        }
      ],
      "interactiveActivities": [
        {
          "id": "hvac-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Filter MERV Rating Categories",
          "description": "Sort each description into the correct MERV rating range.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "buckets": [
            "MERV 1–4",
            "MERV 5–8",
            "MERV 9–12",
            "MERV 13–16"
          ],
          "items": [
            {
              "text": "Catches large debris like dust bunnies and textile fibers",
              "bucket": "MERV 1–4"
            },
            {
              "text": "Captures mold spores and dust-mite allergens",
              "bucket": "MERV 5–8"
            },
            {
              "text": "Filters auto-emission particles and fine dust",
              "bucket": "MERV 9–12"
            },
            {
              "text": "Captures bacteria, smoke, and aerosol droplets",
              "bucket": "MERV 13–16"
            },
            {
              "text": "Minimal pressure drop; basic equipment protection",
              "bucket": "MERV 1–4"
            },
            {
              "text": "ASHRAE-recommended level for most commercial HVAC",
              "bucket": "MERV 13–16"
            },
            {
              "text": "Common residential furnace filter level",
              "bucket": "MERV 5–8"
            },
            {
              "text": "Traps Legionella and fine pet dander",
              "bucket": "MERV 9–12"
            }
          ]
        }
      ]
    },
    {
      "id": "hvac-101-l09",
      "title": "Controls & IAQ Checkpoint",
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
          "id": "hvac-101-l09-q1",
          "text": "On a standard residential thermostat, which wire color typically controls the cooling compressor?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "R (red)"
            },
            {
              "id": "b",
              "text": "G (green)"
            },
            {
              "id": "c",
              "text": "Y (yellow)"
            },
            {
              "id": "d",
              "text": "W (white)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Y (yellow) carries the cooling call from the thermostat, energizing the compressor contactor. R is power, G is the fan, and W is heat."
        },
        {
          "id": "hvac-101-l09-q2",
          "text": "A run capacitor on a compressor motor reads 38 µF but is rated at 45 µF. What should the technician do?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Leave it — 38 µF is within tolerance"
            },
            {
              "id": "b",
              "text": "Replace it — it is more than 6% below its rated value"
            },
            {
              "id": "c",
              "text": "Add a second capacitor in parallel"
            },
            {
              "id": "d",
              "text": "Increase the supply voltage"
            }
          ],
          "correctOptionId": "b",
          "explanation": "38 µF is about 15.5% below the 45 µF rating, well beyond the ±6% tolerance. A weak capacitor causes the motor to draw excessive amps and overheat."
        },
        {
          "id": "hvac-101-l09-q3",
          "text": "According to ASHRAE 62.1, what is the maximum recommended indoor CO₂ concentration for occupied spaces?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "400 ppm"
            },
            {
              "id": "b",
              "text": "800 ppm"
            },
            {
              "id": "c",
              "text": "1,000 ppm"
            },
            {
              "id": "d",
              "text": "5,000 ppm"
            }
          ],
          "correctOptionId": "c",
          "explanation": "ASHRAE guidelines recommend keeping indoor CO₂ below 1,000 ppm. Levels above this indicate insufficient outdoor-air ventilation."
        },
        {
          "id": "hvac-101-l09-q4",
          "text": "Which MERV rating range is considered HEPA-level filtration used in hospitals?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "MERV 5–8"
            },
            {
              "id": "b",
              "text": "MERV 9–12"
            },
            {
              "id": "c",
              "text": "MERV 13–16"
            },
            {
              "id": "d",
              "text": "MERV 17–20"
            }
          ],
          "correctOptionId": "d",
          "explanation": "MERV 17–20 corresponds to HEPA filtration, capturing at least 99.97% of particles 0.3 µm and larger. These filters are used in hospitals, clean rooms, and critical environments."
        }
      ]
    },
    {
      "id": "hvac-101-l10",
      "title": "Mastery Quiz: HVAC Foundations",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "understand": 1,
          "apply": 2,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "hvac-101-l10-q1",
          "text": "A building's cooling load is 60,000 BTU/h. What tonnage system and approximate blower CFM are needed?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "3 tons / 1,200 CFM"
            },
            {
              "id": "b",
              "text": "5 tons / 2,000 CFM"
            },
            {
              "id": "c",
              "text": "5 tons / 2,500 CFM"
            },
            {
              "id": "d",
              "text": "6 tons / 2,400 CFM"
            }
          ],
          "correctOptionId": "b",
          "explanation": "60,000 BTU/h ÷ 12,000 BTU/ton = 5 tons. At 400 CFM per ton, the blower needs approximately 2,000 CFM."
        },
        {
          "id": "hvac-101-l10-q2",
          "text": "A technician finds that a heat pump heats well at 45 °F outdoor temperature but struggles at 15 °F. What is the most likely explanation?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The compressor has failed"
            },
            {
              "id": "b",
              "text": "Air-source heat pumps lose heating capacity as outdoor temperature drops"
            },
            {
              "id": "c",
              "text": "The thermostat is wired incorrectly"
            },
            {
              "id": "d",
              "text": "The evaporator is oversized"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Air-source heat pumps extract heat from outdoor air. As the outdoor temperature falls, there is less heat available and the unit's capacity decreases, often requiring auxiliary strip heat below a balance point."
        },
        {
          "id": "hvac-101-l10-q3",
          "text": "During commissioning, a technician measures 350 CFM at a supply register that should deliver 500 CFM. Which action is most appropriate?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increase the thermostat set point"
            },
            {
              "id": "b",
              "text": "Open the branch balancing damper and re-measure"
            },
            {
              "id": "c",
              "text": "Replace the register grille"
            },
            {
              "id": "d",
              "text": "Add refrigerant to the system"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Low airflow at a register usually means the balancing damper on that branch is partially closed. Opening it and re-measuring is the correct air-balancing procedure."
        },
        {
          "id": "hvac-101-l10-q4",
          "text": "An occupied conference room reads 1,400 ppm CO₂ and 72 °F. What should the technician adjust FIRST?",
          "skillId": "hvac-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Lower the thermostat to 68 °F"
            },
            {
              "id": "b",
              "text": "Increase outdoor-air damper opening"
            },
            {
              "id": "c",
              "text": "Replace the air filter"
            },
            {
              "id": "d",
              "text": "Add a dehumidifier"
            }
          ],
          "correctOptionId": "b",
          "explanation": "1,400 ppm CO₂ exceeds the 1,000 ppm guideline, indicating insufficient ventilation. Increasing the outdoor-air damper opening brings in more fresh air to dilute CO₂. Temperature is already acceptable at 72 °F."
        }
      ]
    }
  ]
};
