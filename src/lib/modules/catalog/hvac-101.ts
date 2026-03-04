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
          "content": "Heat is a type of energy that is always on the move, flowing from warmer objects to cooler ones. This movement happens through three main methods, each with its own unique characteristics. The first method is called conduction. This occurs when heat transfers through direct contact between materials. For instance, if you place a metal spoon into a hot pot of soup, the spoon becomes warm because it is in direct contact with the hot soup. This is a simple yet effective way heat travels!\nThe second method is known as convection. This process involves the movement of heat through fluids, which can be either liquids or gases. A common example of convection is when warm air rises from a heater vent. As the air heats up, it becomes lighter and rises, while cooler air moves in to take its place, creating a cycle that helps distribute warmth throughout a room.\nThe third method is called radiation. Unlike conduction and convection, radiation transfers heat in the form of electromagnetic waves, which means it doesn’t need a physical medium to travel through. A perfect example of radiation is how the sun warms your skin when you are outside on a sunny day. You can feel the warmth even if you are not touching the sun itself!\nIn the world of HVAC (Heating, Ventilation, and Air Conditioning), every system utilizes at least one of these three methods to either add or remove heat from a building. This is essential for maintaining comfortable indoor environments, ensuring that we can enjoy our spaces regardless of the weather outside.\nContext recap: Heat is a type of energy that is always on the move, flowing from warmer objects to cooler ones. This movement happens through three main methods, each with its own unique characteristics. The first method is called conduction. This occurs when heat transfers through direct contact between materials.\nWhy this matters: Heat Transfer Modes helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l01-c2",
          "title": "BTU and Heat Measurement",
          "content": "A British Thermal Unit, or BTU for short, is an important unit of measurement in the heating, ventilation, and air conditioning (HVAC) industry. It tells us how much energy is required to raise the temperature of one pound of water by one degree Fahrenheit. This measurement is crucial because it helps us understand how much heating or cooling a system can provide. When we look at HVAC equipment, we often see it rated in BTUs per hour, which is abbreviated as BTU/h. This rating indicates the capacity of the equipment to either heat or cool a space effectively.\nFor example, a typical residential furnace might be rated at 80,000 BTU/h. This means that it can generate enough heat to warm a home efficiently. On the other hand, a window air conditioner usually has a cooling capacity that falls between 8,000 and 12,000 BTU/h. This range tells us how much cool air the unit can produce to keep a room comfortable during hot weather.\nTo ensure that we choose the right HVAC system for a building, we need to calculate what is known as the heat load. The heat load is the total number of BTUs that must be added or removed each hour to maintain a comfortable indoor temperature. When calculating this, we take into account various factors such as the outdoor temperature, the quality of insulation in the building, the size and number of windows, and the number of people occupying the space. By understanding these elements, we can select an HVAC system that will work efficiently and effectively to keep our indoor environment pleasant all year round.\nContext recap: A British Thermal Unit, or BTU for short, is an important unit of measurement in the heating, ventilation, and air conditioning (HVAC) industry. It tells us how much energy is required to raise the temperature of one pound of water by one degree Fahrenheit. This measurement is crucial because it helps us understand how much heating or cooling a system can provide. When we look at HVAC equipment, we often see it rated in BTUs per hour, which is abbreviated as BTU/h.\nWhy this matters: BTU and Heat Measurement helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "hvac-101-l01-c3",
          "title": "Sensible Heat, Latent Heat, and Psychrometrics Basics",
          "content": "Sensible heat is a fascinating concept in thermodynamics that refers to the type of heat that can change the temperature of a substance without altering its physical state. For instance, when you heat water on a stove, you can observe the temperature rising on a thermometer, which indicates that sensible heat is at work. On the other hand, latent heat is a different kind of heat that causes a change in the state of a substance, such as transforming liquid water into vapor. This process occurs without any change in temperature, which can be quite surprising!\nIn the world of air conditioning, both sensible and latent heat play crucial roles. Sensible cooling is responsible for lowering the temperature of the air, making it feel cooler and more comfortable. Meanwhile, latent cooling is essential for removing excess moisture from the air, which helps to prevent humidity and create a more pleasant indoor environment.\nTo better understand how air interacts with water vapor, we turn to the field of psychrometrics. This area of study focuses on the relationships between air and water vapor mixtures. Technicians often use a special tool called a psychrometric chart. This chart visually represents important factors such as dry-bulb temperature (the actual air temperature), wet-bulb temperature (which indicates humidity), relative humidity (the amount of moisture in the air compared to the maximum it can hold), and dew point (the temperature at which air becomes saturated with moisture). By using this chart, technicians can predict how air will behave when it is heated, cooled, humidified, or dehumidified as it moves through duct systems, ensuring optimal performance of HVAC systems.\nContext recap: Sensible heat is a fascinating concept in thermodynamics that refers to the type of heat that can change the temperature of a substance without altering its physical state. For instance, when you heat water on a stove, you can observe the temperature rising on a thermometer, which indicates that sensible heat is at work. On the other hand, latent heat is a different kind of heat that causes a change in the state of a substance, such as transforming liquid water into vapor. This process occurs without any change in temperature, which can be quite surprising!\nWhy this matters: Sensible Heat, Latent Heat, and Psychrometrics Basics helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "The refrigeration cycle is a crucial process in HVAC systems, and it all begins with the compressor. The compressor's job is to take in refrigerant vapor that is low in both pressure and temperature, which comes from the evaporator. Once the compressor receives this vapor, it compresses it, transforming it into a high-pressure, high-temperature gas. This hot gas then travels into the condenser coil. Here, the refrigerant releases its heat to the surrounding environment, which can be outdoor air or water in systems that use water for cooling. As the refrigerant cools down and loses heat, it undergoes a change from a gas to a high-pressure liquid. To assist in this heat release, the condenser fan plays an important role by pulling outdoor air across the coil fins, which helps speed up the process of heat rejection. Furthermore, there is a process called subcooling that occurs in the condenser. This involves cooling the liquid refrigerant just a few degrees below its saturation temperature. This step is important because it enhances the efficiency of the entire system, allowing it to operate more effectively and use less energy. Understanding these components and their functions is essential for anyone interested in HVAC systems, as they play a vital role in maintaining comfortable indoor environments.\nContext recap: The refrigeration cycle is a crucial process in HVAC systems, and it all begins with the compressor. The compressor's job is to take in refrigerant vapor that is low in both pressure and temperature, which comes from the evaporator. Once the compressor receives this vapor, it compresses it, transforming it into a high-pressure, high-temperature gas. This hot gas then travels into the condenser coil.\nWhy this matters: Compressor and Condenser helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l02-c2",
          "title": "Expansion Valve and Evaporator",
          "content": "Once the refrigerant has completed its journey through the condenser, it moves on to a crucial component known as the metering device. This device is typically either a thermostatic expansion valve (TXV) or an electronic expansion valve (EEV). The primary function of the metering device is to create a significant drop in pressure. This transformation is essential because it changes the refrigerant from a high-pressure liquid into a low-pressure mixture that contains both liquid and vapor. This cold mixture is then directed into the evaporator coil, which is strategically placed inside the area that needs to be cooled, such as a room or building.\nAs warm indoor air circulates and blows across the fins of the evaporator coil, it transfers heat to the refrigerant. This process is vital because it allows the refrigerant to absorb energy from the air, causing it to boil and convert into a low-pressure vapor. This phase is where the actual cooling effect occurs. The air loses both sensible heat, which you can feel as warmth, and latent heat, which is related to moisture in the air. As a result, the air that is blown back into the room is cooler and more comfortable. Understanding this process is fundamental to grasping how HVAC systems maintain a pleasant indoor environment, especially during hot weather.\nContext recap: Once the refrigerant has completed its journey through the condenser, it moves on to a crucial component known as the metering device. This device is typically either a thermostatic expansion valve (TXV) or an electronic expansion valve (EEV). The primary function of the metering device is to create a significant drop in pressure. This transformation is essential because it changes the refrigerant from a high-pressure liquid into a low-pressure mixture that contains both liquid and vapor.\nWhy this matters: Expansion Valve and Evaporator helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l02-c3",
          "title": "Refrigerant States and the Complete Cycle",
          "content": "In the refrigeration cycle, the refrigerant travels through four important states, each playing a vital role in how cooling systems work. First, it leaves the compressor as a high-pressure superheated vapor. This means it has been compressed and heated, ready to move on to the next stage. After this, it enters the condenser, where it transforms into a high-pressure liquid. This change occurs as the refrigerant releases heat to the outside environment. Next, the refrigerant passes through the expansion valve, where it becomes a low-pressure liquid-vapor mix. This is a crucial step because it prepares the refrigerant for the final stage. Finally, it exits the evaporator as a low-pressure vapor, absorbing heat from the indoor air and providing cooling.\nIn modern HVAC systems, common refrigerants include R-410A, which is widely used, and R-32, a more environmentally friendly alternative with a lower global warming potential (GWP). To evaluate how effectively the refrigeration cycle operates, we use a measurement called the coefficient of performance (COP). This ratio compares the cooling output to the electrical input, helping us understand how efficiently the system is running.\nGrasping the changes in the refrigerant's state and the relationship between pressure and temperature is essential. This knowledge not only aids in diagnosing issues within the system but also ensures that everything is functioning correctly, leading to optimal performance and energy efficiency.\nContext recap: In the refrigeration cycle, the refrigerant travels through four important states, each playing a vital role in how cooling systems work. First, it leaves the compressor as a high-pressure superheated vapor. This means it has been compressed and heated, ready to move on to the next stage. After this, it enters the condenser, where it transforms into a high-pressure liquid.\nWhy this matters: Refrigerant States and the Complete Cycle helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "A gas furnace is an important part of many heating systems, and it works by burning natural gas or propane inside a special component known as a heat exchanger. This process begins when a draft-inducer motor pulls the combustion gases through the heat exchanger. At the same time, a blower fan circulates air from inside the house over the outside of the heat exchanger. This action warms the air before it is distributed throughout the home via ductwork.\nModern condensing furnaces are designed with an innovative feature: a secondary heat exchanger. This additional component captures extra heat from the exhaust gases, which causes water vapor to condense. This design significantly improves the efficiency of the furnace, allowing it to achieve efficiency ratings of over 90%.\nTo ensure that the furnace is operating safely and efficiently, technicians perform a process called combustion analysis. This involves measuring the levels of several important gases: carbon dioxide (CO₂), carbon monoxide (CO), and oxygen (O₂), as well as the temperature of the exhaust gases. Monitoring these levels is crucial because if the carbon monoxide levels exceed 100 parts per million in the flue gas, it can indicate a serious issue, such as a cracked heat exchanger or improper flame adjustment. Addressing these problems promptly is essential for maintaining a safe and effective heating system in your home.\nContext recap: A gas furnace is an important part of many heating systems, and it works by burning natural gas or propane inside a special component known as a heat exchanger. This process begins when a draft-inducer motor pulls the combustion gases through the heat exchanger. At the same time, a blower fan circulates air from inside the house over the outside of the heat exchanger. This action warms the air before it is distributed throughout the home via ductwork.\nWhy this matters: Furnaces and Combustion helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l04-c2",
          "title": "Boilers and Hydronic Heating",
          "content": "Boilers are important devices used in heating systems to warm up water or create steam. This heated water or steam is then sent through various components like radiators, baseboard convectors, or even special tubing installed in floors, which helps to keep our spaces cozy and comfortable. Hot-water boilers usually work at temperatures ranging from 140 °F to 180 °F, while steam boilers operate at temperatures at or just above 212 °F.\nOne interesting type of heating system is the radiant floor heating system. These systems use lower water temperatures, typically between 90 °F and 120 °F, which makes them excellent partners for more energy-efficient condensing boilers or heat pumps. This means they can help save energy while still keeping your home warm.\nSafety is a top priority when it comes to boilers. Every boiler must be equipped with essential safety features, such as pressure-relief valves and expansion tanks. These components help prevent dangerous situations from occurring. Additionally, regular maintenance is crucial to ensure that the boiler operates safely and efficiently. This maintenance includes checking the low-water cutoff, which prevents the boiler from running dry, and inspecting the combustion chamber to make sure everything is working properly. By taking these steps, we can enjoy the warmth of our heating systems while staying safe and comfortable in our homes.\nContext recap: Boilers are important devices used in heating systems to warm up water or create steam. This heated water or steam is then sent through various components like radiators, baseboard convectors, or even special tubing installed in floors, which helps to keep our spaces cozy and comfortable. Hot-water boilers usually work at temperatures ranging from 140 °F to 180 °F, while steam boilers operate at temperatures at or just above 212 °F. One interesting type of heating system is the radiant floor heating system.\nWhy this matters: Boilers and Hydronic Heating helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l04-c3",
          "title": "Heat Pumps and AFUE Ratings",
          "content": "A heat pump is a fascinating system that can both heat and cool your home. In the winter, it works by pulling heat from the outdoor air or from the ground water and bringing that warmth inside to keep your living space cozy. This is especially useful in places where the weather is not too extreme. There are two main types of heat pumps: air-source and ground-source. Air-source heat pumps are great for moderate climates, while ground-source heat pumps, also known as geothermal heat pumps, are very efficient even when it gets really cold outside. This is because the temperature underground stays more constant than the air temperature above ground.\nWhen we talk about how well heating systems like furnaces and boilers work, we use a measure called AFUE, which stands for Annual Fuel Utilization Efficiency. This tells us how much of the fuel we pay for is actually turned into heat for our homes. For instance, if a furnace has an AFUE rating of 80%, it means that 80 cents of every dollar spent on fuel is converted into heat, while the remaining 20 cents is lost.\nHeat pumps also have their own efficiency ratings, which can be expressed as HSPF, or Heating Seasonal Performance Factor, and COP, which stands for Coefficient of Performance. If a heat pump has an HSPF rating above 8.0, it is considered to be very efficient. Understanding these ratings helps us choose the right heating system for our needs and can lead to savings on energy bills while keeping our homes comfortable all year round.\nContext recap: A heat pump is a fascinating system that can both heat and cool your home. In the winter, it works by pulling heat from the outdoor air or from the ground water and bringing that warmth inside to keep your living space cozy. This is especially useful in places where the weather is not too extreme. There are two main types of heat pumps: air-source and ground-source.\nWhy this matters: Heat Pumps and AFUE Ratings helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "Static pressure is an important concept in understanding how air moves through ductwork in heating, ventilation, and air conditioning (HVAC) systems. It refers to the force that air exerts inside the ducts, and it is measured in inches of water column (in. w.c.). Think of static pressure as the resistance that the blower, which is the fan that moves air, has to overcome in order to push air through the duct system. If the static pressure is too high, it can lead to several problems. This can happen for a few reasons, such as if the ducts are too small, if the filters are dirty and need to be replaced, or if there are too many fittings or bends in the ductwork. When static pressure is excessive, it can reduce the airflow, making the system less efficient, and it can also put extra stress on the blower motor, potentially leading to mechanical issues.\nCFM, which stands for cubic feet per minute, is another important measurement in HVAC. It tells us how much air is being delivered by the system. A common guideline for cooling systems is to aim for about 400 CFM for every ton of cooling capacity. This means that if you have a cooling system that is rated for one ton, you should expect it to deliver around 400 CFM of air.\nTo ensure that your HVAC system works efficiently, proper duct design is crucial. This means that the size of the ducts should match the capacity of the blower. By doing this, we can keep the static pressure within the recommended range set by the equipment manufacturer, which is typically 0.5 in. w.c. or less for residential systems. Maintaining the right static pressure is key to ensuring that your HVAC system operates effectively and provides comfortable indoor air quality.\nContext recap: Static pressure is an important concept in understanding how air moves through ductwork in heating, ventilation, and air conditioning (HVAC) systems. It refers to the force that air exerts inside the ducts, and it is measured in inches of water column (in. w.c.). Think of static pressure as the resistance that the blower, which is the fan that moves air, has to overcome in order to push air through the duct system.\nWhy this matters: Static Pressure and CFM helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l05-c2",
          "title": "Duct Types and Sizing",
          "content": "Ducts play a crucial role in moving air throughout buildings, ensuring that spaces are comfortable and well-ventilated. They can be made from different materials, each with its own advantages. For example, sheet metal ducts, often made from galvanized steel, are popular because they are durable and have the lowest friction loss, which means air can flow through them more easily and efficiently. This type of duct also tends to last a long time, making it a reliable choice for many HVAC systems.\nOn the other hand, flexible insulated hoses, commonly referred to as flex ducts, are designed for ease of installation. They can be bent and shaped to fit into tight spaces, which can be very helpful in complex building layouts. However, it is important to install flex ducts correctly. They need to be pulled tight and properly supported to avoid sagging. If they sag, it can create resistance to airflow, making the system less efficient.\nWhen it comes to sizing ducts, HVAC technicians rely on specific tools and guidelines to ensure that the ducts are the right size for the airflow needed. One common method is to use friction-rate charts or the ACCA Manual D, which provides detailed instructions. The process begins by determining the total available static pressure, which is the pressure available to push air through the system. Technicians then subtract any losses from components like filters, coils, and grilles, which can reduce the pressure available for airflow. Finally, they distribute the remaining pressure across the various duct runs to ensure balanced airflow throughout the building.\nInterestingly, round ducts are often preferred because they typically have less friction for the same amount of airflow compared to rectangular ducts. This means that round ducts can be more efficient in transporting air, making them a popular choice in many HVAC designs.\nContext recap: Ducts play a crucial role in moving air throughout buildings, ensuring that spaces are comfortable and well-ventilated. They can be made from different materials, each with its own advantages. For example, sheet metal ducts, often made from galvanized steel, are popular because they are durable and have the lowest friction loss, which means air can flow through them more easily and efficiently. This type of duct also tends to last a long time, making it a reliable choice for many HVAC systems.\nWhy this matters: Duct Types and Sizing helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l05-c3",
          "title": "Dampers and Air Balancing",
          "content": "Dampers are special adjustable plates found inside the ductwork of heating, ventilation, and air conditioning (HVAC) systems. Their main job is to control how much air flows to different areas or rooms within a building. There are two main types of dampers: manual and motorized. Manual balancing dampers are set up during the initial installation of the HVAC system. Once they are adjusted to the right position, they are locked in place to keep the airflow consistent. On the other hand, motorized dampers are more advanced. They can automatically open and close based on the temperature settings from multiple thermostats located in different rooms. This allows for better control of the temperature in each area.\nAir balancing is a crucial process in HVAC systems. It involves measuring the airflow at each supply register, which is the point where air enters a room. Technicians adjust the dampers to ensure that every room receives the right amount of air, which is measured in cubic feet per minute (CFM). To do this accurately, technicians often use specialized tools like an anemometer or a flow hood. These tools help them measure how fast the air is moving and how much air is being delivered.\nProper air balancing is essential for several reasons. First, it helps to eliminate hot and cold spots in different rooms, making sure that every area is comfortable. Second, it reduces energy waste, which can save money on utility bills. Finally, it ensures that everyone in the building enjoys a consistent and pleasant indoor environment, contributing to overall comfort and satisfaction.\nContext recap: Dampers are special adjustable plates found inside the ductwork of heating, ventilation, and air conditioning (HVAC) systems. Their main job is to control how much air flows to different areas or rooms within a building. There are two main types of dampers: manual and motorized. Manual balancing dampers are set up during the initial installation of the HVAC system.\nWhy this matters: Dampers and Air Balancing helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "content": "The thermostat is a crucial component of the HVAC system, often referred to as its 'brain.' This device plays a vital role in maintaining a comfortable indoor environment by constantly comparing the current room temperature to a desired temperature, known as the set point. When the room temperature falls below or rises above this set point, the thermostat takes action by sending low-voltage control signals, typically 24 volts alternating current (VAC), to activate either the heating or cooling equipment.\nTo help technicians and anyone working with HVAC systems, there are standard colors for thermostat wires that indicate their specific functions. For instance, the wire labeled 'R' is used for power, 'G' controls the fan, 'Y' is designated for cooling, 'W' is for heating, and 'C' serves as the common wire. Understanding these color codes is essential for proper installation and troubleshooting.\nIn today's world, many thermostats are programmable or smart, which means they can be set to automatically adjust the temperature at different times throughout the day. For example, you might program your thermostat to lower the heat to 62 degrees Fahrenheit at night when you're sleeping and then raise it to a cozy 70 degrees Fahrenheit just before you wake up in the morning. This not only keeps your home comfortable but also helps save energy.\nMoreover, there are advanced two-stage thermostats available that can adjust their heating or cooling capacity based on how much the room temperature deviates from the set point. This feature allows for more efficient temperature control, ensuring that your home remains at the perfect temperature while minimizing energy consumption. Understanding how these systems work can empower you to make informed decisions about your heating and cooling needs, ultimately leading to a more comfortable and energy-efficient living space.\nContext recap: The thermostat is a crucial component of the HVAC system, often referred to as its 'brain.' This device plays a vital role in maintaining a comfortable indoor environment by constantly comparing the current room temperature to a desired temperature, known as the set point. When the room temperature falls below or rises above this set point, the thermostat takes action by sending low-voltage control signals, typically 24 volts alternating current (VAC), to activate either the heating or cooling equipment. To help technicians and anyone working with HVAC systems, there are standard colors for thermostat wires that indicate their specific functions. For instance, the wire labeled 'R' is used for power, 'G' controls the fan, 'Y' is designated for cooling, 'W' is for heating, and 'C' serves as the common wire."
        },
        {
          "id": "hvac-101-l07-c2",
          "title": "Relays, Contactors, and Capacitors",
          "content": "Relays and contactors are essential components in HVAC systems, acting as electromagnetic switches that help control various electrical loads. A relay is designed to use a small control signal, typically 24 volts, to turn on or off a moderate load, such as a blower motor. This means that when the system needs to circulate air, the relay can activate the blower motor efficiently. On the other hand, a contactor functions in a similar way but is specifically built to handle larger electrical loads, like those found in compressor motors. Because of this, contactors have heavier-duty contacts that can withstand the increased electrical demands without failing.\nCapacitors are another important part of HVAC systems. They are devices that store and release electrical energy, which is crucial for helping motors start and run smoothly. There are two main types of capacitors used in HVAC systems: start capacitors and run capacitors. A start capacitor provides a significant boost of power to the motor when it first starts up, helping it overcome inertia and begin turning. Once the motor is running, the start capacitor disconnects from the circuit. In contrast, a run capacitor remains connected to the motor throughout its operation. This continuous connection helps improve the motor's efficiency and enhances its power factor, which is a measure of how effectively the electrical power is being used.\nTo ensure that these components are functioning correctly, technicians often use a multimeter to measure the microfarad (µF) ratings of capacitors. This measurement indicates the capacitor's ability to store electrical energy. If the reading is more than ±6% off from the rated value, it typically signals that the capacitor should be replaced. Replacing faulty capacitors is important for maintaining the efficiency and reliability of HVAC systems, ensuring they operate smoothly and effectively.\nContext recap: Relays and contactors are essential components in HVAC systems, acting as electromagnetic switches that help control various electrical loads. A relay is designed to use a small control signal, typically 24 volts, to turn on or off a moderate load, such as a blower motor. This means that when the system needs to circulate air, the relay can activate the blower motor efficiently. On the other hand, a contactor functions in a similar way but is specifically built to handle larger electrical loads, like those found in compressor motors.\nWhy this matters: Relays, Contactors, and Capacitors helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "hvac-101-l07-c3",
          "title": "Troubleshooting Control Circuits",
          "content": "When you are troubleshooting HVAC control circuits, it is essential to follow a clear and organized method that helps you understand how electrical power flows through the system. Start by checking the line voltage at the disconnect switch. This voltage is usually either 120 volts or 240 volts, and it is crucial to ensure that the power supply is functioning correctly. Next, you will want to verify that the transformer is working properly by checking that it outputs 24 volts alternating current (VAC). This voltage is necessary for the control circuit to operate effectively.\nAfter confirming the transformer’s output, you should trace the control circuit. Begin at the R terminal, which is the power source for the thermostat, and follow the connections through the thermostat calls: G for the fan, Y for cooling, and W for heating. This will lead you to the component that is being powered, such as the compressor or fan. To check if voltage is present at each point in the circuit, you can use a multimeter set to measure VAC. This tool is very helpful in identifying where the issue may lie.\nCommon problems that you might encounter include a blown 3-amp fuse on the control board. This often happens due to a shorted wire in the thermostat. Other issues could be a malfunctioning contactor coil, which is responsible for switching the power to the compressor, or a defective capacitor that can prevent the compressor from starting altogether.\nRemember, safety is the top priority! Always make sure to lock out and tag out the power before you start working on any high-voltage components. This practice helps to prevent accidents and ensures that you can work safely on the system.\nContext recap: When you are troubleshooting HVAC control circuits, it is essential to follow a clear and organized method that helps you understand how electrical power flows through the system. Start by checking the line voltage at the disconnect switch. This voltage is usually either 120 volts or 240 volts, and it is crucial to ensure that the power supply is functioning correctly. Next, you will want to verify that the transformer is working properly by checking that it outputs 24 volts alternating current (VAC).\nWhy this matters: Troubleshooting Control Circuits helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
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
          "content": "The ASHRAE Standard 62.1 is an important guideline that helps ensure the air we breathe indoors is clean and safe, especially in commercial buildings like offices and stores. This standard sets the minimum amount of outdoor air that needs to be brought inside to maintain good indoor air quality. The amount of outdoor air required is calculated based on two main factors: the number of people in the building and the size of the space. For example, in a typical office, each person needs about 5 cubic feet per minute (CFM) of outdoor air, plus an extra 0.06 CFM for every square foot of the office area.\nTo determine how much outdoor air is needed, we use a ventilation rate procedure. This procedure takes into account how many people are in the building and the area of different zones, or sections, within the building. Proper ventilation is crucial because it helps to dilute harmful indoor pollutants, which can include volatile organic compounds (VOCs), carbon dioxide, and bioaerosols. These pollutants can affect our health, so keeping them at safe levels is very important.\nOne innovative way to manage ventilation is through a system called demand-controlled ventilation (DCV). This system uses sensors to monitor the levels of carbon dioxide (CO₂) in the air. When the sensors detect that the CO₂ levels are high, indicating that more people are present, the system automatically adjusts the amount of outdoor air being brought in. This not only helps maintain a healthy indoor environment but also saves energy when the building is not fully occupied, making it a smart choice for energy efficiency.\nContext recap: The ASHRAE Standard 62.1 is an important guideline that helps ensure the air we breathe indoors is clean and safe, especially in commercial buildings like offices and stores. This standard sets the minimum amount of outdoor air that needs to be brought inside to maintain good indoor air quality. The amount of outdoor air required is calculated based on two main factors: the number of people in the building and the size of the space. For example, in a typical office, each person needs about 5 cubic feet per minute (CFM) of outdoor air, plus an extra 0.06 CFM for every square foot of the office area."
        },
        {
          "id": "hvac-101-l08-c2",
          "title": "Filtration and MERV Ratings",
          "content": "Air filters play a crucial role in HVAC systems by ensuring that the air we breathe indoors is clean and healthy. They work by capturing various particles and pollutants before they can enter the spaces where people live and work. To understand how effective these filters are, we use a system called the Minimum Efficiency Reporting Value, or MERV scale. This scale ranges from 1 to 20, with higher numbers indicating better filtration capabilities.\nFilters that are rated MERV 1 to 4 are designed to catch larger pieces of debris, such as dust bunnies and lint. While these filters are helpful, they are not very effective at removing smaller particles. On the other hand, MERV 8 filters are a step up; they can capture smaller particles like mold spores and allergens from dust mites, which can be important for maintaining good indoor air quality.\nFor even better filtration, MERV 13 filters are recommended. These filters can trap bacteria, smoke, and fine particles that are as small as 0.3 to 1.0 micrometers. This level of filtration is recommended by the American Society of Heating, Refrigerating and Air-Conditioning Engineers (ASHRAE) for most commercial buildings, ensuring that the air is safe for everyone.\nAt the highest end of the MERV scale, filters rated MERV 17 to 20 are often referred to as HEPA filters. These filters are used in environments where air quality is of utmost importance, such as hospitals and clean rooms, where even the smallest contaminants can pose serious health risks.\nIt's important to keep in mind that while higher MERV ratings indicate better filtration, they can also create more resistance to airflow. This means that the duct system in an HVAC setup must be carefully designed to handle this increased pressure drop without compromising the airflow to the blower. Proper design ensures that the system operates efficiently while providing clean air to the occupants.\nContext recap: Air filters play a crucial role in HVAC systems by ensuring that the air we breathe indoors is clean and healthy. They work by capturing various particles and pollutants before they can enter the spaces where people live and work. To understand how effective these filters are, we use a system called the Minimum Efficiency Reporting Value, or MERV scale. This scale ranges from 1 to 20, with higher numbers indicating better filtration capabilities.\nWhy this matters: Filtration and MERV Ratings helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "hvac-101-l08-c3",
          "title": "Humidity Control and CO₂ Monitoring",
          "content": "Maintaining the right level of humidity indoors is crucial for both comfort and health. Ideally, indoor relative humidity should be kept between 30% and 60%. When humidity levels drop below 30%, the air can become excessively dry. This can lead to uncomfortable conditions such as skin irritation, increased static electricity, and even damage to wooden furniture and finishes. On the other hand, if humidity levels rise above 60%, it can create a perfect environment for mold growth, dust mites, and condensation on surfaces, which can lead to further issues. To effectively manage humidity levels, there are several tools available. Dehumidifiers can help remove excess moisture from the air, while reheat coils can warm up the air to reduce humidity. Additionally, using appropriately sized cooling systems can also play a significant role in maintaining comfortable humidity levels.\nAnother important aspect of indoor air quality is monitoring carbon dioxide (CO₂) levels. CO₂ levels can give us a good indication of whether there is enough fresh air circulating in a space. Typically, outdoor air contains about 420 parts per million (ppm) of CO₂. According to the guidelines set by ASHRAE, it is recommended that indoor CO₂ levels remain below 1,000 ppm. Keeping CO₂ levels within this range is essential for ensuring comfort and supporting cognitive performance. To achieve this, CO₂ sensors are often installed in the breathing zone, which is about 3 to 6 feet above the floor. These sensors collect data and send it to the building's automation system, which can then adjust the intake of outdoor air as needed to maintain a healthy indoor environment.\nContext recap: Maintaining the right level of humidity indoors is crucial for both comfort and health. Ideally, indoor relative humidity should be kept between 30% and 60%. When humidity levels drop below 30%, the air can become excessively dry. This can lead to uncomfortable conditions such as skin irritation, increased static electricity, and even damage to wooden furniture and finishes.\nWhy this matters: Humidity Control and CO₂ Monitoring helps learners in Trades connect ideas from HVAC Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
