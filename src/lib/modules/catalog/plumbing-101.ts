import type { LearningModule } from "@/lib/modules/types";

export const plumbing_101_Module: LearningModule = {
  "id": "plumbing-101",
  "title": "Plumbing Fundamentals",
  "description": "Master the principles of residential and commercial plumbing systems — from water supply piping and drain-waste-vent design to pipe joining techniques, fixture installation, code compliance, and diagnosing common service problems.",
  "subject": "Trades",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "trades",
    "plumbing"
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
    "Describe how municipal water supply reaches a building and identify common supply pipe materials including copper, PEX, and CPVC.",
    "Explain gravity drainage principles, trap seal function, and proper DWV venting to prevent siphonage and sewer gas entry.",
    "Compare pipe joining methods — soldering copper, crimping/expanding PEX, solvent welding PVC/CPVC, and threading steel pipe.",
    "Identify major plumbing fixtures and valve types, and calculate fixture unit loads for basic system sizing.",
    "Interpret International Plumbing Code (IPC) backflow prevention requirements and cross-connection hazards.",
    "Diagnose common plumbing problems including leaks, clogs, low pressure, water hammer, and sewer gas odors.",
    "Demonstrate mastery of foundational plumbing concepts through integrated checkpoint assessments."
  ],
  "lessons": [
    {
      "id": "plumbing-101-l01",
      "title": "Water Supply Systems",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe how potable water travels from a municipal source to a building.",
        "Compare copper, PEX, and CPVC as supply pipe materials.",
        "Explain water pressure, pipe sizing, and the role of the main shutoff valve."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l01-c1",
          "title": "Municipal Supply and Building Entry",
          "content": "The journey of clean, drinkable water begins at a treatment plant, where it is filtered and disinfected. From there, it's pumped into large underground pipes called distribution mains. Smaller pipes, known as service lines, branch off from these mains to deliver water to individual buildings. Each service line connects to a curb stop valve for emergency shutoff and a water meter to measure usage.\n\nOnce inside a building, a main shutoff valve allows the entire water supply to be turned off for repairs. Municipal water pressure typically ranges from 40 to 80 psi (pounds per square inch). If the pressure exceeds 80 psi, a pressure-reducing valve (PRV) is installed to protect pipes and fixtures from damage.\n\nIn areas without municipal water, buildings may use private wells. These systems use a pump and a pressure tank to maintain consistent water pressure."
        },
        {
          "id": "plumbing-101-l01-c2",
          "title": "Supply Pipe Materials",
          "content": "Three primary materials are used for modern water supply lines: copper, PEX, and CPVC.\n\nCopper (Type L and M) has long been the industry standard due to its durability, corrosion resistance, and ability to handle high temperatures. It can last over 50 years but requires skill to join by soldering or using press-fit connections.\n\nPEX (cross-linked polyethylene) is a flexible plastic tubing that resists scale buildup and is less likely to burst if frozen. It is installed quickly using crimp or expansion fittings and is generally more affordable than copper. However, PEX must be protected from direct sunlight, as UV rays can damage the material.\n\nCPVC (chlorinated polyvinyl chloride) is a rigid plastic pipe rated for hot and cold water up to 200°F. It is joined using a solvent-cement method that creates a strong, permanent bond. CPVC is common in warmer climates but can become brittle with age or exposure to certain chemicals."
        },
        {
          "id": "plumbing-101-l01-c3",
          "title": "Pressure, Pipe Sizing, and Layout",
          "content": "Proper pipe sizing is crucial to ensure adequate water pressure at every fixture. Pipes that are too small or run too long cause pressure loss due to friction. Plumbers use sizing tables or software to calculate these friction losses, aiming for a minimum of 8 psi at the most distant fixture.\n\nTwo common layout designs are trunk-and-branch and home-run (manifold). In a trunk-and-branch system, a large main pipe runs through the building with smaller pipes branching off to serve groups of fixtures. In a home-run layout, a dedicated PEX line runs from a central manifold directly to each fixture, minimizing pressure loss and providing individual fixture shutoffs.\n\nTo determine the correct pipe size, plumbers use the fixture-unit method. Each fixture is assigned a Water Supply Fixture Unit (WSFU) value. By adding up all the WSFU values, they can calculate the total water demand in gallons per minute (GPM) and select the appropriate pipe diameter to meet that demand."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l01-f1",
          "front": "What is the typical residential water pressure range, and when is a PRV required?",
          "back": "Normal municipal pressure is 40–80 psi. A pressure-reducing valve (PRV) is required when incoming pressure exceeds 80 psi."
        },
        {
          "id": "plumbing-101-l01-f2",
          "front": "Name three common potable water supply pipe materials.",
          "back": "Copper (Type L/M), PEX (cross-linked polyethylene), and CPVC (chlorinated polyvinyl chloride)."
        },
        {
          "id": "plumbing-101-l01-f3",
          "front": "What is the difference between a trunk-and-branch layout and a manifold (home-run) layout?",
          "back": "Trunk-and-branch uses a large main line with smaller branches teeing off. A manifold layout sends a dedicated PEX line from a central manifold to each fixture, minimizing pressure drop."
        },
        {
          "id": "plumbing-101-l01-f4",
          "front": "What is a Water Supply Fixture Unit (WSFU)?",
          "back": "A standardized value assigned to each plumbing fixture representing its probable demand on the water supply system, used to size supply piping."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l01-a1",
          "type": "diagram",
          "title": "Water Service Entry",
          "content": "Diagram showing the path of water from the city main, through the curb stop and meter, to the main shutoff valve inside a building."
        }
      ]
    },
    {
      "id": "plumbing-101-l02",
      "title": "Drain-Waste-Vent (DWV) Systems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain how gravity moves wastewater through drain and waste pipes.",
        "Describe the purpose of trap seals and how venting preserves them.",
        "Identify proper slope requirements for horizontal drain pipes."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l02-c1",
          "title": "Gravity Drainage Principles",
          "content": "Unlike the pressurized water supply system, the drain-waste-vent (DWV) system relies on gravity. Wastewater leaves a fixture, flows through a tailpiece into a trap, and then travels through branch drains into a vertical pipe called a waste or soil stack. This stack carries the waste down to the building drain, located below the floor. The building drain exits the foundation as the building sewer, which connects to either a municipal sewer main or a private septic system.\n\nFor gravity to work effectively, horizontal drain pipes must have a specific slope. Pipes 3 inches in diameter or smaller require a slope of ¼ inch per foot. Larger pipes (4 inches or more) require a slope of ⅛ inch per foot. If the slope is too shallow, solids can settle and cause clogs. If it's too steep, liquids can outrun solids, also leading to blockages."
        },
        {
          "id": "plumbing-101-l02-c2",
          "title": "Trap Seals and Sewer Gas Prevention",
          "content": "Every plumbing fixture connects to the DWV system through a trap, which is a U-shaped or P-shaped fitting. The trap holds a small amount of water (a 2- to 4-inch deep 'seal') that acts as a barrier, blocking harmful sewer gases like methane and hydrogen sulfide from entering the building. The most common type is the P-trap, found under sinks. Toilets have an integral trap built into their porcelain base.\n\nA trap can lose its water seal for several reasons. Evaporation can occur if a fixture isn't used frequently. Siphonage can pull water out of the trap if the venting system is inadequate. Back-pressure from a downstream blockage can also push the water out. To maintain the seal in floor drains, it's important to pour water into them periodically."
        },
        {
          "id": "plumbing-101-l02-c3",
          "title": "Venting Principles",
          "content": "Vent pipes serve two critical functions. First, they allow atmospheric air to enter the drainage system, which prevents the siphoning of water from traps. Without vents, the rush of wastewater could create a vacuum and pull the trap seal out, allowing sewer gas to enter. Second, vents provide a safe path for sewer gases to escape harmlessly above the roofline.\n\nEvery trap must be vented within a specific distance, known as the developed length (e.g., a 1½-inch trap arm should be no more than 6 feet from its vent). Venting systems can be individual (one vent per trap), common (serving two back-to-back fixtures), or wet (where a drain pipe also serves as a vent for an upstream fixture). In some limited situations, an air admittance valve (AAV), a one-way mechanical vent, can be used. The main vent stack must extend through the roof and terminate at least 6 inches above it."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l02-f1",
          "front": "What is the required slope for a 3-inch or smaller horizontal drain pipe?",
          "back": "¼ inch per foot of run. Pipes 4 inches and larger require ⅛ inch per foot."
        },
        {
          "id": "plumbing-101-l02-f2",
          "front": "What is the purpose of a P-trap?",
          "back": "It holds a water seal (2–4 inches deep) that blocks sewer gases from entering the building through the fixture drain."
        },
        {
          "id": "plumbing-101-l02-f3",
          "front": "Why do drain pipes need venting?",
          "back": "Vents admit atmospheric air to prevent siphonage of trap seals and allow sewer gases to escape above the roofline."
        },
        {
          "id": "plumbing-101-l02-f4",
          "front": "What is an Air Admittance Valve (AAV)?",
          "back": "A one-way mechanical valve that opens to admit air when negative pressure occurs in the drain, serving as a vent without penetrating the roof. Permitted by many codes for limited applications."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Supply System vs. DWV System Components",
          "description": "Sort each plumbing component into the correct system category.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "buckets": [
            "Water Supply System",
            "Drain-Waste-Vent System"
          ],
          "items": [
            {
              "text": "Pressure-reducing valve (PRV)",
              "bucket": "Water Supply System"
            },
            {
              "text": "P-trap under a lavatory",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "PEX manifold with hot/cold ports",
              "bucket": "Water Supply System"
            },
            {
              "text": "Roof vent terminal extending above shingles",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "Main shutoff valve at meter",
              "bucket": "Water Supply System"
            },
            {
              "text": "Building sewer line to municipal main",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "Copper Type L tubing for hot water",
              "bucket": "Water Supply System"
            },
            {
              "text": "Soil stack carrying toilet waste vertically",
              "bucket": "Drain-Waste-Vent System"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l02-a2",
          "type": "diagram",
          "title": "DWV System Overview",
          "content": "Cutaway illustration of a two-story house showing how fixtures connect to traps, branch drains, stacks, and vents, all leading to the building sewer."
        }
      ]
    },
    {
      "id": "plumbing-101-l03",
      "title": "Supply & DWV Checkpoint",
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
          "id": "plumbing-101-l03-q1",
          "text": "At what incoming pressure is a pressure-reducing valve (PRV) required on a residential water supply?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Above 40 psi"
            },
            {
              "id": "b",
              "text": "Above 60 psi"
            },
            {
              "id": "c",
              "text": "Above 80 psi"
            },
            {
              "id": "d",
              "text": "Above 100 psi"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Most plumbing codes require a PRV when static water pressure at the building entrance exceeds 80 psi to protect fixtures and piping from excessive pressure."
        },
        {
          "id": "plumbing-101-l03-q2",
          "text": "Which pipe material is flexible, resistant to freezing damage, and cannot be exposed to ultraviolet light?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Copper Type L"
            },
            {
              "id": "b",
              "text": "CPVC"
            },
            {
              "id": "c",
              "text": "Cast iron"
            },
            {
              "id": "d",
              "text": "PEX"
            }
          ],
          "correctOptionId": "d",
          "explanation": "PEX (cross-linked polyethylene) is flexible and expands to resist freeze cracking, but it degrades under UV exposure and must be protected from direct sunlight."
        },
        {
          "id": "plumbing-101-l03-q3",
          "text": "What is the standard slope for a horizontal drain pipe that is 2 inches in diameter?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "⅛ inch per foot"
            },
            {
              "id": "b",
              "text": "¼ inch per foot"
            },
            {
              "id": "c",
              "text": "½ inch per foot"
            },
            {
              "id": "d",
              "text": "1 inch per foot"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Horizontal drain pipes 3 inches or smaller require a minimum slope of ¼ inch per foot. Pipes 4 inches and larger require ⅛ inch per foot."
        },
        {
          "id": "plumbing-101-l03-q4",
          "text": "A bathroom sink's P-trap has lost its water seal. Which condition is the MOST likely cause?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The supply pressure is too high"
            },
            {
              "id": "b",
              "text": "The vent is blocked, causing siphonage"
            },
            {
              "id": "c",
              "text": "The water heater thermostat is set too low"
            },
            {
              "id": "d",
              "text": "The main shutoff valve is partially closed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A blocked or missing vent creates negative pressure in the drain line that can siphon the water out of the P-trap, breaking the seal and allowing sewer gas to enter."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "plumbing-101-l04",
      "title": "Pipe Joining Methods",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Demonstrate the steps for soldering (sweating) a copper joint.",
        "Compare PEX crimp, clamp, and expansion fitting systems.",
        "Describe solvent-cement welding for PVC and CPVC pipe."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l04-c1",
          "title": "Soldering Copper Pipe",
          "content": "Soldering, or 'sweating,' creates a strong, leak-proof bond between copper pipes and fittings. The process requires careful preparation. First, cut the copper tube squarely with a tube cutter. Next, deburr the inside edge with a reamer to remove any sharp edges. Then, thoroughly clean the outside of the tube and the inside of the fitting with emery cloth or a fitting brush until both surfaces are bright and shiny.\n\nApply a thin, even layer of lead-free flux to both cleaned surfaces. Heat the joint evenly with a propane or MAPP-gas torch. Touch the solder wire to the side of the joint opposite the flame. When the copper is hot enough (around 450°F), the solder will melt and be drawn into the joint by capillary action. Once the joint is filled, remove the heat and allow it to cool naturally. Do not quench it with water, as this can cause stress cracks."
        },
        {
          "id": "plumbing-101-l04-c2",
          "title": "PEX Connection Systems",
          "content": "PEX tubing uses mechanical fittings, which eliminates the need for flames or chemicals. There are several common methods:\n\nCrimp Method: A copper crimp ring is slid over the PEX, a brass fitting is inserted, and a crimp tool compresses the ring. A go/no-go gauge is used to verify the crimp diameter is correct.\n\nExpansion Method: An expansion tool enlarges the end of the PEX tubing. A special fitting is inserted, and the PEX's 'memory' causes it to shrink back around the fitting, creating a secure, full-bore connection with minimal flow restriction.\n\nClamp Method: This uses stainless-steel clamp rings and a cinch tool. It is often the most economical option and is compatible with all brands of PEX.\n\nPush-Fit Fittings: Brands like SharkBite allow for tool-free connections. While convenient, they are typically more expensive and often used for repairs rather than new installations."
        },
        {
          "id": "plumbing-101-l04-c3",
          "title": "Solvent Welding PVC/CPVC and Threading Steel Pipe",
          "content": "Joining PVC and CPVC is a chemical process called solvent cementing. First, cut the pipe squarely and deburr the edge. Perform a 'dry fit' to ensure the pipe seats fully into the fitting. Apply a purple primer to soften both the pipe end and the inside of the fitting socket. Immediately apply the correct cement (PVC cement for PVC, CPVC cement for CPVC) to both surfaces. Push the pipe fully into the fitting with a quarter-turn twist to spread the cement evenly. Hold for about 30 seconds. Cure times vary from 15 minutes to 48 hours depending on pipe size and temperature.\n\nGalvanized steel and black iron pipes use threaded joints. Threads are cut on the pipe using a die. A sealant, like PTFE tape or pipe dope, is applied to the male threads. The fitting is then tightened securely using pipe wrenches."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l04-f1",
          "front": "What are the five steps for soldering a copper joint?",
          "back": "Cut square, deburr, clean with emery cloth, apply lead-free flux, heat and apply solder — capillary action draws it into the joint."
        },
        {
          "id": "plumbing-101-l04-f2",
          "front": "How does the PEX expansion method work?",
          "back": "The PEX end is expanded with a tool, a fitting is inserted, and the tubing's memory shrinks it tightly around the fitting, creating a full-bore connection."
        },
        {
          "id": "plumbing-101-l04-f3",
          "front": "Why must PVC and CPVC cements not be interchanged?",
          "back": "Each cement is chemically formulated to soften and fuse its specific plastic type. Using PVC cement on CPVC (or vice versa) will produce a weak joint that may fail under pressure."
        },
        {
          "id": "plumbing-101-l04-f4",
          "front": "What is applied to male pipe threads before assembling a threaded steel joint?",
          "back": "PTFE tape (Teflon tape) or pipe-thread sealant compound (pipe dope) to lubricate threads and seal against leaks."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l04-a1",
          "type": "infographic",
          "title": "Pipe Joining Techniques",
          "content": "Side-by-side visual comparison of soldering copper, crimping PEX, and solvent welding PVC, highlighting key tools and materials for each."
        }
      ]
    },
    {
      "id": "plumbing-101-l05",
      "title": "Fixtures and Valves",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify common plumbing valve types and their applications.",
        "Explain fixture unit values and how they affect system sizing.",
        "Describe major fixture categories and water heater fundamentals."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l05-c1",
          "title": "Valve Types and Applications",
          "content": "Valves are essential for controlling water flow, direction, and pressure.\n\nGate Valve: Uses a wedge-shaped gate to fully open or close flow. It is not designed for throttling or regulating flow.\n\nBall Valve: A quarter-turn handle rotates a ball with a hole through it. They offer quick shutoff and excellent flow, making them a modern standard.\n\nGlobe Valve: An internal baffle forces water through an S-shaped path, making it ideal for throttling flow. However, this design causes a higher pressure drop.\n\nCheck Valve: Allows water to flow in only one direction, preventing backflow. Common types are swing and spring-loaded.\n\nPressure-Reducing Valve (PRV): Automatically lowers high incoming water pressure to a safe, preset level.\n\nTempering (Mixing) Valve: Blends hot and cold water to deliver it at a safe temperature (typically around 120°F), preventing scalding."
        },
        {
          "id": "plumbing-101-l05-c2",
          "title": "Fixture Types and Fixture Units",
          "content": "Plumbing fixtures are devices that supply or receive water. Common fixtures include water closets (toilets), lavatories (bathroom sinks), kitchen sinks, bathtubs, showers, and hose bibbs (outdoor faucets).\n\nTo properly size pipes, each fixture is assigned a value. A Drainage Fixture Unit (DFU) represents the load a fixture places on the DWV system. For example, a lavatory is 1 DFU, a kitchen sink is 2 DFU, and a water closet is 3-4 DFU. The total DFU count determines the required size of drain pipes and stacks.\n\nSimilarly, a Water Supply Fixture Unit (WSFU) is used to calculate the total demand on the water supply system. Plumbers use tables in the plumbing code to convert total WSFUs into the required supply pipe diameter."
        },
        {
          "id": "plumbing-101-l05-c3",
          "title": "Water Heaters",
          "content": "Water heaters provide hot water for bathing, cooking, and cleaning. The two main types are tank-type and tankless.\n\nTank-Type: These heaters store and maintain a reservoir of hot water (typically 40-80 gallons), powered by gas or electricity. Their performance is measured by a first-hour rating (FHR), which indicates how many gallons of hot water they can deliver in one hour.\n\nTankless: Also called demand water heaters, these units heat water instantly as it flows through them. They provide a continuous supply of hot water and are rated in gallons per minute (GPM).\n\nHeat-Pump: A highly efficient type of electric water heater that extracts heat from the surrounding air to warm the water in the tank.\n\nAll water heaters must have a temperature-and-pressure (T&P) relief valve. This safety device opens to release pressure if the temperature or pressure inside the tank gets too high, preventing a dangerous explosion. Its discharge pipe must be routed to a safe location near the floor."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l05-f1",
          "front": "What is the key difference between a gate valve and a ball valve?",
          "back": "A gate valve uses a wedge gate for full-open/full-closed service. A ball valve uses a quarter-turn bored ball for rapid shutoff and better flow characteristics."
        },
        {
          "id": "plumbing-101-l05-f2",
          "front": "What does DFU stand for and what does it represent?",
          "back": "Drainage Fixture Unit — a standardized value assigned to each fixture representing its probable load on the DWV system, used to size drain piping."
        },
        {
          "id": "plumbing-101-l05-f3",
          "front": "What is the first-hour rating (FHR) on a tank water heater?",
          "back": "The number of gallons of hot water the heater can supply during the first hour of heavy use, combining stored hot water and recovery capacity."
        },
        {
          "id": "plumbing-101-l05-f4",
          "front": "Why is a T&P relief valve required on every water heater?",
          "back": "It opens automatically if temperature exceeds ~210 °F or pressure exceeds 150 psi, preventing catastrophic tank rupture from thermal expansion or runaway heating."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l05-a1",
          "type": "matching_pairs",
          "title": "Match the Valve to Its Function",
          "description": "Match each valve type with its primary plumbing function.",
          "estimatedMinutes": 4,
          "difficultyLevel": "medium",
          "pairs": [
            {
              "left": "Gate valve",
              "right": "Full-open / full-closed isolation — not for throttling"
            },
            {
              "left": "Ball valve",
              "right": "Quarter-turn rapid shutoff with low flow restriction"
            },
            {
              "left": "Globe valve",
              "right": "Throttling flow regulation with S-path design"
            },
            {
              "left": "Check valve",
              "right": "Allows flow in one direction only, prevents backflow"
            },
            {
              "left": "Pressure-reducing valve",
              "right": "Lowers incoming water pressure to a set value"
            },
            {
              "left": "Tempering (mixing) valve",
              "right": "Blends hot and cold water to a safe outlet temperature"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l05-a2",
          "type": "diagram",
          "title": "Common Plumbing Valves",
          "content": "An illustrated guide showing cutaway views of a gate valve, ball valve, globe valve, and check valve, with labels indicating their internal parts and direction of flow."
        }
      ]
    },
    {
      "id": "plumbing-101-l06",
      "title": "Pipe Joining & Fixtures Checkpoint",
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
          "id": "plumbing-101-l06-q1",
          "text": "During copper soldering, what force draws molten solder into the joint?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gravity"
            },
            {
              "id": "b",
              "text": "Water pressure"
            },
            {
              "id": "c",
              "text": "Capillary action"
            },
            {
              "id": "d",
              "text": "Vacuum suction"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Capillary action draws the molten solder into the narrow gap between the tube and fitting when the copper surfaces are properly cleaned, fluxed, and heated to the correct temperature."
        },
        {
          "id": "plumbing-101-l06-q2",
          "text": "Which PEX connection method creates a full-bore joint by expanding the tubing before inserting the fitting?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Crimp"
            },
            {
              "id": "b",
              "text": "Expansion (cold-expansion)"
            },
            {
              "id": "c",
              "text": "Push-fit (SharkBite)"
            },
            {
              "id": "d",
              "text": "Solvent cement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The ASTM F1960 expansion method enlarges the PEX end with a tool, the fitting is inserted, and the tubing's molecular memory contracts it around the fitting for a full-bore connection."
        },
        {
          "id": "plumbing-101-l06-q3",
          "text": "A water closet (toilet) is typically rated at how many Drainage Fixture Units (DFU)?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 DFU"
            },
            {
              "id": "b",
              "text": "2 DFU"
            },
            {
              "id": "c",
              "text": "3–4 DFU"
            },
            {
              "id": "d",
              "text": "6 DFU"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A water closet is generally rated at 3 DFU (IPC for 1.6 GPF) or 4 DFU depending on the code edition. Lavatories are 1 DFU and kitchen sinks are 2 DFU."
        },
        {
          "id": "plumbing-101-l06-q4",
          "text": "Why should you NOT quench a freshly soldered copper joint with water?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It washes away the flux needed for bonding"
            },
            {
              "id": "b",
              "text": "Rapid cooling can cause thermal stress cracks in the joint"
            },
            {
              "id": "c",
              "text": "The solder has not yet melted at that point"
            },
            {
              "id": "d",
              "text": "Water reacts chemically with copper to weaken it"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quenching subjects the hot joint to sudden contraction, which can create stress cracks in the solder. The joint should be allowed to cool naturally to room temperature."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l06-a1",
          "type": "image",
          "title": "Key Terms Review",
          "content": "A flashcard-style image reviewing the key terms from the previous two lessons, such as 'capillary action', 'DFU', and 'T&P valve'."
        }
      ]
    },
    {
      "id": "plumbing-101-l07",
      "title": "Plumbing Codes and Safety",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Identify the major model plumbing codes (IPC and UPC) and explain their purpose.",
        "Describe backflow prevention devices and cross-connection hazards.",
        "Outline basic gas piping safety requirements for plumbers."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l07-c1",
          "title": "Model Plumbing Codes",
          "content": "Plumbing work is regulated by codes adopted at the state or local level to ensure safety and quality. The two major model codes in the U.S. are the International Plumbing Code (IPC) and the Uniform Plumbing Code (UPC). The IPC is used in about 35 states, while the UPC is more common in western states.\n\nThese codes provide minimum requirements for pipe sizes, approved materials, fixture installation, venting, and inspection procedures. Plumbers must be licensed by the Authority Having Jurisdiction (AHJ) and obtain permits before starting work. Inspections typically occur at two stages: the 'rough-in' stage (before walls are closed) and the 'final' stage (after all fixtures are installed and tested)."
        },
        {
          "id": "plumbing-101-l07-c2",
          "title": "Backflow Prevention and Cross-Connection Control",
          "content": "A cross-connection is any link between the safe, potable water supply and a non-potable source, which creates a risk of contamination. This can lead to backflow, where contaminated water reverses direction and enters the drinking water system. Backflow is caused by either back-siphonage (negative pressure in the supply line) or back-pressure (downstream pressure is higher than supply pressure).\n\nTo prevent this, various devices are used based on the level of hazard. The most reliable method is an air gap, a physical separation between the water outlet and any potential contaminant. For high-hazard situations (like boilers), a reduced-pressure zone (RPZ) assembly is required. For lower-risk applications (like fire sprinklers), a double-check valve assembly (DCVA) is used. Other devices, like vacuum breakers, protect hose bibbs and irrigation systems."
        },
        {
          "id": "plumbing-101-l07-c3",
          "title": "Gas Piping Basics and Safety",
          "content": "Plumbers frequently install gas piping for appliances like water heaters and furnaces. Common materials include black steel pipe with threaded fittings or corrugated stainless steel tubing (CSST) with proprietary fittings.\n\nBefore being used, a gas piping system must pass a pressure test to ensure it is leak-free. A small system is typically tested at a minimum of 3 psi for 10 minutes with a calibrated gauge. Leaks are located using an approved leak-detection solution—never an open flame.\n\nGas appliances need adequate air for safe combustion. Sealed-combustion units draw air from outside, while atmospherically vented appliances require properly sized openings for room air. For safety, a gas shutoff valve must be installed within 6 feet of each appliance."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l07-f1",
          "front": "What are the two major model plumbing codes used in the United States?",
          "back": "The International Plumbing Code (IPC) published by ICC, and the Uniform Plumbing Code (UPC) published by IAPMO."
        },
        {
          "id": "plumbing-101-l07-f2",
          "front": "What is a cross-connection?",
          "back": "A physical link between a potable water supply and a non-potable source that could allow contamination to enter the drinking water system through backflow."
        },
        {
          "id": "plumbing-101-l07-f3",
          "front": "Name three types of backflow prevention devices in order of protection level.",
          "back": "Air gap (highest), reduced-pressure zone (RPZ) assembly, and double-check valve assembly (DCVA) — each suited to a different hazard level."
        },
        {
          "id": "plumbing-101-l07-f4",
          "front": "How is a gas piping system tested for leaks before use?",
          "back": "The system is pressurized to a minimum of 3 psi (for small systems) for 10 minutes using a calibrated gauge. Joints are tested with an approved leak-detection solution — never an open flame."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l07-a1",
          "type": "diagram",
          "title": "Cross-Connection and Air Gap",
          "content": "A clear diagram illustrating a hazardous cross-connection (e.g., a hose submerged in a bucket) and the correct way to prevent it using a physical air gap."
        }
      ]
    },
    {
      "id": "plumbing-101-l08",
      "title": "Troubleshooting Common Problems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Diagnose the root causes of leaks, clogs, and low water pressure.",
        "Explain the causes and remedies for water hammer and sewer gas odors.",
        "Select appropriate tools and techniques for common plumbing repairs."
      ],
      "chunks": [
        {
          "id": "plumbing-101-l08-c1",
          "title": "Leaks and Clogs",
          "content": "Leaks are a common plumbing problem. Supply-side leaks often occur at fittings, valves, or corroded pipes. A hidden supply leak can be detected by turning off all fixtures and checking if the water meter is still spinning. Drain-side leaks may reveal themselves as water stains on ceilings or musty odors. To troubleshoot, isolate the suspected section by closing the nearest shutoff valve and see if the leak stops.\n\nDrain clogs are typically caused by hair, grease, soap, or foreign objects. A plunger can clear minor blockages. For tougher clogs in branch drains, a hand-cranked drain snake (drum auger) is effective. Main sewer line blockages require a powered sewer machine. It is best to avoid chemical drain cleaners, as they can damage pipes and pose safety risks."
        },
        {
          "id": "plumbing-101-l08-c2",
          "title": "Low Water Pressure",
          "content": "To diagnose low water pressure, first check the static pressure at the water meter or well tank with a gauge; it should be between 40-80 psi. If the pressure is normal there, the problem is inside the building. Common causes include a partially closed main shutoff valve, a failing pressure-reducing valve (PRV), or a clogged faucet aerator.\n\nIn older homes with galvanized steel pipes, internal corrosion and mineral buildup (tuberculation) can severely restrict flow. If low pressure affects only the hot water, a deteriorated dip tube in the water heater could be sending plastic fragments into the lines. The most effective long-term solution for corroded pipes is replacement with copper or PEX."
        },
        {
          "id": "plumbing-101-l08-c3",
          "title": "Water Hammer and Sewer Gas",
          "content": "Water hammer is a loud banging noise caused by a pressure shock wave when a fast-closing valve (like on a washing machine) abruptly stops water flow. This pressure spike can damage pipes and fittings. The solution is to install water hammer arrestors, which are small chambers that absorb the shock with a gas cushion.\n\nSewer gas odors inside a building indicate a problem with the DWV system. The most common cause is a dried-out trap seal in a seldom-used floor drain or fixture. Other causes include a cracked vent pipe, a missing cleanout cap, or a failed wax ring seal under a toilet. Plumbers can locate the source of a leak by performing a smoke test, where non-toxic smoke is introduced into the DWV system to reveal escape points."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l08-f1",
          "front": "How can you detect a hidden supply-side leak?",
          "back": "Turn off all fixtures and check the water meter — if it continues to spin, there is a leak in the supply piping between the meter and the fixtures."
        },
        {
          "id": "plumbing-101-l08-f2",
          "front": "What is water hammer and how is it prevented?",
          "back": "A pressure shock wave from abrupt valve closure. It is prevented by installing water hammer arrestors near fast-closing valves."
        },
        {
          "id": "plumbing-101-l08-f3",
          "front": "What causes tuberculation in galvanized pipes?",
          "back": "Internal corrosion and mineral deposits build up over time, gradually reducing the pipe's internal diameter and restricting water flow."
        },
        {
          "id": "plumbing-101-l08-f4",
          "front": "What is smoke testing in plumbing diagnostics?",
          "back": "Non-toxic smoke is pumped into the DWV system to locate leaks — smoke escaping through cracks, dried traps, or disconnected pipes reveals the sewer gas entry point."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l08-a1",
          "type": "matching_pairs",
          "title": "Match the Symptom to Its Root Cause",
          "description": "Match each plumbing symptom with its most likely cause.",
          "estimatedMinutes": 4,
          "difficultyLevel": "medium",
          "pairs": [
            {
              "left": "Banging noise when washing machine fills",
              "right": "Water hammer — fast-closing solenoid valve"
            },
            {
              "left": "Rotten-egg smell from basement floor drain",
              "right": "Dried-out trap seal allowing sewer gas entry"
            },
            {
              "left": "Low pressure at all fixtures in the house",
              "right": "Failing PRV or partially closed main shutoff"
            },
            {
              "left": "Low hot-water pressure only",
              "right": "Deteriorated dip tube in the water heater"
            },
            {
              "left": "Slow drain in bathroom sink",
              "right": "Hair and soap buildup in the P-trap or branch drain"
            },
            {
              "left": "Water meter spinning with all fixtures off",
              "right": "Hidden supply-side leak in the piping"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l08-a2",
          "type": "flowchart",
          "title": "Diagnosing Low Water Pressure",
          "content": "A step-by-step flowchart guiding the user through diagnosing low water pressure, starting with checking the main, then isolating hot/cold, and checking individual fixtures."
        }
      ]
    },
    {
      "id": "plumbing-101-l09",
      "title": "Codes & Troubleshooting Checkpoint",
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
          "id": "plumbing-101-l09-q1",
          "text": "Which backflow prevention method provides the HIGHEST level of protection for potable water?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Atmospheric vacuum breaker (AVB)"
            },
            {
              "id": "b",
              "text": "Double-check valve assembly (DCVA)"
            },
            {
              "id": "c",
              "text": "Air gap"
            },
            {
              "id": "d",
              "text": "Hose-bibb vacuum breaker"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An air gap — a physical separation between the water outlet and the flood-level rim — is the most reliable backflow protection because there is no mechanical device that can fail."
        },
        {
          "id": "plumbing-101-l09-q2",
          "text": "A homeowner reports a rotten-egg smell near a guest bathroom that is rarely used. What should the plumber check FIRST?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The water heater anode rod"
            },
            {
              "id": "b",
              "text": "The fixture trap seal for evaporation"
            },
            {
              "id": "c",
              "text": "The incoming water pressure"
            },
            {
              "id": "d",
              "text": "The supply pipe material"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In seldom-used fixtures the trap water evaporates, breaking the seal and allowing sewer gas (hydrogen sulfide — the rotten-egg odor) to enter the room. Running water to refill the trap is the immediate fix."
        },
        {
          "id": "plumbing-101-l09-q3",
          "text": "What minimum pressure test is required for a small natural gas piping system before it is placed in service?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "½ psi for 5 minutes"
            },
            {
              "id": "b",
              "text": "3 psi for 10 minutes"
            },
            {
              "id": "c",
              "text": "15 psi for 30 minutes"
            },
            {
              "id": "d",
              "text": "80 psi for 1 hour"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Small residential gas piping is tested at a minimum of 3 psi (typically using a diaphragm gauge) for at least 10 minutes. The gauge must hold steady with no pressure drop to pass."
        },
        {
          "id": "plumbing-101-l09-q4",
          "text": "Water hammer arrestors work by:",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increasing the pipe diameter to slow water velocity"
            },
            {
              "id": "b",
              "text": "Absorbing the pressure shock wave with a sealed gas cushion"
            },
            {
              "id": "c",
              "text": "Adding a check valve to prevent reverse flow"
            },
            {
              "id": "d",
              "text": "Reducing incoming water pressure below 40 psi"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A water hammer arrestor contains a piston or diaphragm backed by a sealed gas cushion. When the pressure spike occurs, the piston compresses the gas, absorbing the shock wave and protecting the piping."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l09-a1",
          "type": "image",
          "title": "Safety First",
          "content": "A visual reminder highlighting key safety concepts like backflow prevention and gas leak testing procedures."
        }
      ]
    },
    {
      "id": "plumbing-101-l10",
      "title": "Mastery Quiz: Plumbing Foundations",
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
          "id": "plumbing-101-l10-q1",
          "text": "A plumber needs to join CPVC pipe for a hot-water supply line. Which joining method is correct?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Solder with lead-free solder and flux"
            },
            {
              "id": "b",
              "text": "Apply CPVC primer and CPVC solvent cement"
            },
            {
              "id": "c",
              "text": "Use PEX crimp rings and brass insert fittings"
            },
            {
              "id": "d",
              "text": "Thread the pipe ends and apply PTFE tape"
            }
          ],
          "correctOptionId": "b",
          "explanation": "CPVC pipe is joined by solvent welding with CPVC-specific primer and cement. Soldering is for copper, crimp fittings are for PEX, and threading is for steel pipe."
        },
        {
          "id": "plumbing-101-l10-q2",
          "text": "In a manifold (home-run) PEX supply system, what is the PRIMARY advantage over a traditional trunk-and-branch layout?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It eliminates the need for a water meter"
            },
            {
              "id": "b",
              "text": "Each fixture has a dedicated line, reducing pressure drop and allowing individual shutoff"
            },
            {
              "id": "c",
              "text": "It uses larger pipe throughout to increase flow"
            },
            {
              "id": "d",
              "text": "It removes the need for venting on the DWV side"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A manifold system runs a dedicated PEX line to each fixture, so fixtures do not compete for flow on a shared branch. Each line can be individually shut off at the manifold without affecting other fixtures."
        },
        {
          "id": "plumbing-101-l10-q3",
          "text": "An inspector finds a 2-inch horizontal drain with a slope of ⅛ inch per foot. What is the correct assessment?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The slope is correct for pipes 3 inches and smaller"
            },
            {
              "id": "b",
              "text": "The slope is too steep and will cause channel flow"
            },
            {
              "id": "c",
              "text": "The slope is insufficient — it should be ¼ inch per foot"
            },
            {
              "id": "d",
              "text": "Slope is only required for pipes larger than 4 inches"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Horizontal drains 3 inches or smaller require a minimum ¼ inch per foot slope. The ⅛ inch per foot standard applies only to pipes 4 inches and larger. The 2-inch pipe is under-sloped."
        },
        {
          "id": "plumbing-101-l10-q4",
          "text": "A commercial kitchen has a connection between the potable water supply and a chemical mixing station. The health inspector classifies this as a high-hazard cross-connection. Which backflow preventer is MOST appropriate?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Hose-bibb vacuum breaker"
            },
            {
              "id": "b",
              "text": "Double-check valve assembly (DCVA)"
            },
            {
              "id": "c",
              "text": "Reduced-pressure zone (RPZ) assembly"
            },
            {
              "id": "d",
              "text": "Atmospheric vacuum breaker (AVB)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "High-hazard cross-connections require an RPZ assembly, which has two independently operating check valves and a relief port between them. If either check fails, the relief port opens to drain, preventing contamination of the potable supply. An air gap would also be acceptable but is not listed."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l10-a1",
          "type": "image",
          "title": "Module Summary",
          "content": "A comprehensive infographic summarizing the core concepts of the entire Plumbing Fundamentals module, from water supply to troubleshooting."
        }
      ]
    }
  ]
};
