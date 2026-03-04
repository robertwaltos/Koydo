import type { LearningModule } from "@/lib/modules/types";

export const RenewableEnergySystems101Module: LearningModule = {
  "id": "renewable-energy-systems-101",
  "title": "Renewable Energy Systems",
  "description": "A comprehensive introduction to renewable energy technologies including solar photovoltaics, wind turbines, hydropower, battery storage, and smart grid integration. Learn how modern energy systems convert natural resources into electricity, explore the physics behind each technology, and understand how variable renewables are balanced on the grid to build a sustainable, low-carbon future.",
  "subject": "Engineering",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "energy",
    "sustainability"
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
    "Distinguish between energy (kWh) and power (kW) and calculate conversion efficiencies for common energy systems",
    "Explain how photovoltaic cells convert sunlight into electricity and compare string, micro, and central inverter architectures",
    "Describe the aerodynamics of wind turbines, the Betz limit, and trade-offs between onshore and offshore installations",
    "Compare conventional hydropower, pumped storage, tidal, geothermal, biomass, and wave energy technologies",
    "Evaluate lithium-ion, flow battery, pumped hydro, and hydrogen storage options by round-trip efficiency, cost, and degradation",
    "Analyze how grid operators use demand response, curtailment, and smart inverters to manage variable renewable generation",
    "Design a conceptual microgrid that balances renewable generation with storage and load management"
  ],
  "lessons": [
    {
      "id": "renewable-energy-systems-101-l01",
      "title": "Energy Fundamentals",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l01-c1",
          "title": "Energy vs Power",
          "content": "Energy is a key concept in understanding how the world works. It refers to the ability to do work or cause change, and it is measured in units called joules or kilowatt-hours (kWh). To put it simply, energy is what allows us to power our devices, heat our homes, and even move our cars. On the other hand, power is a bit different; it describes how quickly energy is used or produced. Power is measured in watts or kilowatts (kW). For instance, if you have a light bulb that uses 100 watts of power and you leave it on for 10 hours, it will consume 1 kilowatt-hour of energy. This is an important distinction to understand because it helps us make sense of how we use energy in our daily lives. When you look at a solar panel, its rating is given in kilowatts, which tells you how much power it can generate at any given moment. However, when you receive your electricity bill, it is based on the total amount of energy you have consumed over time, which is measured in kilowatt-hours. In 2023, the total global energy consumption exceeded an astonishing 580 exajoules, and fossil fuels still provided about 80 percent of that energy. This shows us that while we are making strides towards renewable energy, we still heavily depend on traditional energy sources. Understanding these concepts is crucial as we move towards a more sustainable future.\nContext recap: Energy is a key concept in understanding how the world works. It refers to the ability to do work or cause change, and it is measured in units called joules or kilowatt-hours (kWh). To put it simply, energy is what allows us to power our devices, heat our homes, and even move our cars. On the other hand, power is a bit different; it describes how quickly energy is used or produced.\nWhy this matters: Energy vs Power helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "renewable-energy-systems-101-l01-c2",
          "title": "Energy Conversion and Efficiency",
          "content": "Every energy system is designed to convert one type of energy into another, which is a fundamental concept in understanding how we generate power. For example, solar panels are fascinating devices that take sunlight, which is composed of tiny particles called photons, and convert it into electricity that we can use to power our homes and devices. Similarly, wind turbines harness the kinetic energy from moving air, transforming it into mechanical energy. This mechanical energy is then converted into electrical energy by generators, allowing us to use the wind as a source of power.\nIt's important to understand that no energy conversion process is completely efficient. This means that during the conversion of energy from one form to another, some energy is always lost, often as heat. The efficiency of a conversion process is measured by the ratio of useful energy output to the total energy input, and this is referred to as conversion efficiency. For instance, a modern natural gas power plant can achieve about 60 percent efficiency, meaning that 60 percent of the energy from the gas is converted into electricity, while a coal power plant typically operates at around 33 percent efficiency. Solar panels, under ideal conditions, convert about 18 to 22 percent of the sunlight they receive into usable electricity. Understanding these efficiencies is crucial because it helps us appreciate how effective different energy technologies are and encourages us to think about ways to improve energy use and sustainability in our daily lives.\nContext recap: Every energy system is designed to convert one type of energy into another, which is a fundamental concept in understanding how we generate power. For example, solar panels are fascinating devices that take sunlight, which is composed of tiny particles called photons, and convert it into electricity that we can use to power our homes and devices. Similarly, wind turbines harness the kinetic energy from moving air, transforming it into mechanical energy. This mechanical energy is then converted into electrical energy by generators, allowing us to use the wind as a source of power.\nWhy this matters: Energy Conversion and Efficiency helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "renewable-energy-systems-101-l01-c3",
          "title": "Global Energy Mix and Carbon Intensity",
          "content": "The global energy mix is a term that describes the different sources of energy that are used to satisfy the energy needs of people around the world. As we look at the year 2024, it's exciting to see that renewable energy sources, which include hydropower, wind, and solar energy, now make up about 30 percent of the total electricity generated globally. This is a significant step towards a more sustainable future!\nAnother important concept to understand is carbon intensity. This term refers to the amount of carbon dioxide (CO₂) that is released into the atmosphere for every kilowatt-hour of electricity that is produced. We measure this in grams of CO₂ per kilowatt-hour, which is written as gCO₂/kWh. For instance, traditional coal-fired power plants are quite polluting, emitting around 900 gCO₂/kWh. Natural gas plants are somewhat better, with emissions of about 450 gCO₂/kWh. On the other hand, renewable sources like solar photovoltaic systems are much cleaner, producing only about 40 gCO₂/kWh. Wind energy is even better, with emissions around 11 gCO₂/kWh, and nuclear power is quite low as well, at approximately 12 gCO₂/kWh.\nTo combat climate change and reduce our carbon footprint, many countries are implementing decarbonization strategies. These strategies focus on shifting our energy mix towards cleaner, low-carbon sources. Additionally, there is a strong push to electrify transportation and heating systems, which will help us rely less on fossil fuels and further reduce harmful emissions. By understanding these concepts, we can all contribute to a healthier planet for future generations.\nContext recap: The global energy mix is a term that describes the different sources of energy that are used to satisfy the energy needs of people around the world. As we look at the year 2024, it's exciting to see that renewable energy sources, which include hydropower, wind, and solar energy, now make up about 30 percent of the total electricity generated globally. This is a significant step towards a more sustainable future! Another important concept to understand is carbon intensity.\nWhy this matters: Global Energy Mix and Carbon Intensity helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l01-f1",
          "front": "What is the SI unit of energy?",
          "back": "The joule (J). In electricity billing the kilowatt-hour (kWh) is commonly used; 1 kWh = 3.6 MJ."
        },
        {
          "id": "renewable-energy-systems-101-l01-f2",
          "front": "How do energy and power differ?",
          "back": "Energy is the total work done (kWh), while power is the rate of doing work (kW). Power × time = energy."
        },
        {
          "id": "renewable-energy-systems-101-l01-f3",
          "front": "What is conversion efficiency?",
          "back": "The ratio of useful energy output to total energy input, expressed as a percentage."
        },
        {
          "id": "renewable-energy-systems-101-l01-f4",
          "front": "Roughly what share of global electricity came from renewables by 2024?",
          "back": "About 30 percent, led by hydropower, wind, and solar PV."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l01-a1",
          "type": "image",
          "title": "Energy vs Power Diagram",
          "content": "Illustrated comparison showing kW (instantaneous power) versus kWh (cumulative energy) using a water-tank analogy."
        },
        {
          "id": "renewable-energy-systems-101-l01-a2",
          "type": "animation",
          "title": "Global Energy Mix Breakdown",
          "content": "Animated pie chart showing the evolution of fossil fuels, nuclear, and renewables in global electricity generation from 2000 to 2024."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l02",
      "title": "Solar Photovoltaic Systems",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l02-c1",
          "title": "PV Cell Physics",
          "content": "A photovoltaic (PV) cell is a fascinating device that transforms sunlight into electricity, making it a key player in renewable energy technology. These cells are primarily made from a material called crystalline silicon, which is known for its excellent ability to absorb sunlight. When sunlight, which is made up of tiny particles called photons, strikes the surface of the PV cell, it triggers a special process known as the photovoltaic effect. During this process, the energy from the photons excites electrons within the silicon material, allowing them to jump from one area of the silicon to another. This movement creates what we call electron-hole pairs, where an electron is free to move while leaving behind a positively charged hole.\nInside the PV cell, there is a built-in electric field created at a junction between two types of silicon: p-type and n-type. This electric field plays a crucial role by pushing the excited electrons toward the n-type layer and the holes toward the p-type layer. As a result, this movement generates a flow of electricity, which can be harnessed for various applications, such as powering homes and businesses.\nThe efficiency of these PV cells can vary based on their design and materials. For example, monocrystalline cells, which are made from a single crystal structure, can achieve efficiencies ranging from 20 to 24 percent. On the other hand, polycrystalline cells, which are made from multiple crystal structures, typically have efficiencies between 15 to 18 percent. Understanding the physics behind these cells is essential for effectively harnessing solar energy and advancing our use of renewable energy sources.\nContext recap: A photovoltaic (PV) cell is a fascinating device that transforms sunlight into electricity, making it a key player in renewable energy technology. These cells are primarily made from a material called crystalline silicon, which is known for its excellent ability to absorb sunlight. When sunlight, which is made up of tiny particles called photons, strikes the surface of the PV cell, it triggers a special process known as the photovoltaic effect. During this process, the energy from the photons excites electrons within the silicon material, allowing them to jump from one area of the silicon to another."
        },
        {
          "id": "renewable-energy-systems-101-l02-c2",
          "title": "Modules, Strings, and Arrays",
          "content": "Photovoltaic (PV) cells are the building blocks of solar energy systems, and each cell produces a voltage of approximately 0.5 to 0.6 volts. To harness more power, these individual cells are connected in series, which means they are linked one after another to form a module, commonly known as a solar panel. A typical solar panel can generate between 30 to 45 volts and produce around 300 to 400 watts of electrical power.\nOnce we have several solar panels, we can connect them in series to create what we call strings. These strings are specifically designed to meet the voltage requirements of an inverter, which is a crucial component that converts the direct current (DC) electricity generated by the panels into alternating current (AC) electricity, which is what most homes and businesses use.\nFurthermore, multiple strings can be connected in parallel to form an array. An array is essentially a larger collection of solar panels working together to generate electricity. For instance, a typical residential solar energy system might consist of about 20 solar panels, which can collectively generate a total of around 8 kilowatts of power. On the other hand, a utility-scale solar farm can deploy hundreds of thousands of panels, producing several hundred megawatts of electricity to supply power to many homes and businesses.\nWhen designing these systems, it is vital to consider various factors such as temperature, shading from trees or buildings, and cable losses. These elements can affect the overall efficiency and performance of the solar energy system, so proper string sizing is essential to ensure that the system operates at its best. By understanding these components and their connections, we can appreciate how solar energy systems are designed to capture and utilize the sun's energy effectively.\nContext recap: Photovoltaic (PV) cells are the building blocks of solar energy systems, and each cell produces a voltage of approximately 0.5 to 0.6 volts. To harness more power, these individual cells are connected in series, which means they are linked one after another to form a module, commonly known as a solar panel. A typical solar panel can generate between 30 to 45 volts and produce around 300 to 400 watts of electrical power. Once we have several solar panels, we can connect them in series to create what we call strings.\nWhy this matters: Modules, Strings, and Arrays helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "renewable-energy-systems-101-l02-c3",
          "title": "Inverters, Net Metering, and Capacity Factor",
          "content": "Inverters are essential components of solar energy systems because they transform the direct current (DC) electricity generated by photovoltaic (PV) panels into alternating current (AC) electricity. This AC electricity is what we use in our homes and is compatible with the electrical grid. There are several types of inverters, each serving a unique purpose. For instance, string inverters manage the output from a whole string of solar panels, making them a common choice for residential installations. On the other hand, microinverters are attached to each individual solar panel. This setup allows for independent tracking of each panel's performance, which is particularly beneficial when some panels might be shaded by trees or buildings. In larger solar installations, such as those found in utility-scale solar plants, central inverters are often used to handle the significant amount of electricity produced.\nAnother important aspect of solar energy systems is net metering. This system enables homeowners with solar panels to send any surplus electricity they generate back to the grid. In return, they receive credits on their electricity bills, which can help offset costs.\nFinally, we should understand the concept of capacity factor. This term refers to the ratio of the actual electricity output of a solar system to its maximum possible output. The capacity factor can vary significantly based on location and weather conditions. For example, in areas that experience frequent cloud cover, like some northern regions, the capacity factor might be around 10 to 15 percent. In contrast, in sunny regions such as the American Southwest, the capacity factor can reach between 25 to 30 percent, indicating a more efficient use of solar energy in those areas.\nContext recap: Inverters are essential components of solar energy systems because they transform the direct current (DC) electricity generated by photovoltaic (PV) panels into alternating current (AC) electricity. This AC electricity is what we use in our homes and is compatible with the electrical grid. There are several types of inverters, each serving a unique purpose. For instance, string inverters manage the output from a whole string of solar panels, making them a common choice for residential installations.\nWhy this matters: Inverters, Net Metering, and Capacity Factor helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l02-f1",
          "front": "What is the photovoltaic effect?",
          "back": "The generation of voltage and current in a material upon exposure to light, caused by photon absorption exciting electrons across a semiconductor bandgap."
        },
        {
          "id": "renewable-energy-systems-101-l02-f2",
          "front": "Why are PV cells connected in series?",
          "back": "To increase voltage. A single silicon cell produces only ~0.5 V; connecting cells in series sums their voltages to a usable level."
        },
        {
          "id": "renewable-energy-systems-101-l02-f3",
          "front": "What advantage do microinverters have over string inverters?",
          "back": "Each panel operates at its own maximum power point, so shading or soiling on one panel does not reduce the output of the entire string."
        },
        {
          "id": "renewable-energy-systems-101-l02-f4",
          "front": "What is capacity factor?",
          "back": "The ratio of a plant's actual energy output over a period to the maximum possible output if it ran at nameplate capacity the entire time."
        }
      ],
      "metadata": {
        "prompts": [
          "Calculate the annual energy output of a 6 kW residential solar system with a 20 percent capacity factor.",
          "Explain why a microinverter system may produce more energy than a string inverter system on a partially shaded rooftop.",
          "Describe how temperature affects silicon PV cell efficiency and what design choices mitigate the effect."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l02-a1",
          "type": "practice",
          "title": "Solar System Sizing Activity",
          "content": "Use irradiance data and module specs to size a residential PV system and estimate annual yield."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l03",
      "title": "Energy & Solar Checkpoint",
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
          "id": "renewable-energy-systems-101-l03-q1",
          "text": "A 5 kW solar array operates for 4 hours at full output. How much energy does it produce?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "20 kWh"
            },
            {
              "id": "b",
              "text": "20 kW"
            },
            {
              "id": "c",
              "text": "1.25 kWh"
            },
            {
              "id": "d",
              "text": "9 kWh"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Energy = Power × Time. 5 kW × 4 h = 20 kWh. The answer is in kilowatt-hours because energy equals power multiplied by time."
        },
        {
          "id": "renewable-energy-systems-101-l03-q2",
          "text": "What fundamental physical process allows a silicon PV cell to generate electricity?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Thermionic emission"
            },
            {
              "id": "b",
              "text": "The photovoltaic effect at a p-n junction"
            },
            {
              "id": "c",
              "text": "Electromagnetic induction"
            },
            {
              "id": "d",
              "text": "Piezoelectric deformation"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Silicon PV cells use the photovoltaic effect: photons excite electrons across the bandgap at the p-n junction, creating current."
        },
        {
          "id": "renewable-energy-systems-101-l03-q3",
          "text": "Which inverter type provides panel-level maximum power point tracking (MPPT)?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Central inverter"
            },
            {
              "id": "b",
              "text": "String inverter"
            },
            {
              "id": "c",
              "text": "Microinverter"
            },
            {
              "id": "d",
              "text": "Battery inverter"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Microinverters are installed on each panel, enabling independent MPPT so one shaded panel does not drag down the whole string."
        },
        {
          "id": "renewable-energy-systems-101-l03-q4",
          "text": "Approximately how many grams of CO₂ per kWh does utility-scale solar PV emit over its lifecycle?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "~450 gCO₂/kWh"
            },
            {
              "id": "b",
              "text": "~200 gCO₂/kWh"
            },
            {
              "id": "c",
              "text": "~40 gCO₂/kWh"
            },
            {
              "id": "d",
              "text": "~900 gCO₂/kWh"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Solar PV lifecycle emissions are approximately 40 gCO₂/kWh, far below coal (~900) and natural gas (~450)."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l03-a1",
          "type": "mnemonic",
          "title": "Energy Formula",
          "content": "Remember: Energy (kWh) = Power (kW) × Time (h). 'P times T gives E.'"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l04",
      "title": "Wind Energy",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l04-c1",
          "title": "Aerodynamics of Wind Turbines",
          "content": "Modern wind turbines are incredible machines that convert the kinetic energy from moving air, which we commonly call wind, into usable electricity. These turbines are equipped with blades that are specially shaped like airfoils, which are designed to capture the wind's energy as efficiently as possible. When the wind blows over these blades, it creates a difference in air pressure on either side of the blade. This pressure difference generates lift, which causes the rotor of the turbine to spin. The spinning rotor is connected to a generator that produces electricity.\nThe amount of power that can be generated from the wind is not just a simple relationship; it is actually related to the cube of the wind speed. This means that if the wind speed doubles, the power available increases by a factor of eight! This relationship is expressed in a formula: P = ½ρAv³. In this formula, ρ (rho) stands for the density of the air, A represents the area that the blades sweep as they turn, and v is the speed of the wind.\nBecause of this cubic relationship, it is very important to choose the right location for wind turbines. The height of the turbine hub is also a crucial factor. If turbines are placed in areas with higher wind speeds, they can generate much more power, making the project more economically viable. Therefore, careful planning and site selection are essential for the success of any wind energy project.\nContext recap: Modern wind turbines are incredible machines that convert the kinetic energy from moving air, which we commonly call wind, into usable electricity. These turbines are equipped with blades that are specially shaped like airfoils, which are designed to capture the wind's energy as efficiently as possible. When the wind blows over these blades, it creates a difference in air pressure on either side of the blade. This pressure difference generates lift, which causes the rotor of the turbine to spin.\nWhy this matters: Aerodynamics of Wind Turbines helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "renewable-energy-systems-101-l04-c2",
          "title": "Betz Limit and Turbine Types",
          "content": "The Betz limit is a key concept in understanding how wind energy works. It tells us that no wind turbine can capture more than 59.3 percent of the kinetic energy in the wind. This limit is in place because, after the wind passes through the turbine, it needs to keep moving downstream. This is crucial for maintaining the flow of air. Modern horizontal-axis wind turbines, often referred to as HAWTs, are designed to be very efficient. They can achieve efficiencies between 35 and 45 percent, especially when their design is optimized. This optimization involves adjusting factors like the tip-speed ratio, which is the speed of the blade tips compared to the wind speed, and the blade pitch, which is the angle of the blades. On the other hand, we also have vertical-axis wind turbines, known as VAWTs. These include designs like the Darrieus and Savonius turbines. One of the advantages of VAWTs is that they can capture wind from any direction, making them versatile. They are also mechanically simpler, which can make them easier to maintain. However, it's important to note that VAWTs are generally less efficient than HAWTs and are not as commonly used for large-scale energy production. Understanding these differences helps us appreciate the various technologies available in the field of renewable energy and their respective efficiencies in harnessing wind power.\nContext recap: The Betz limit is a key concept in understanding how wind energy works. It tells us that no wind turbine can capture more than 59.3 percent of the kinetic energy in the wind. This limit is in place because, after the wind passes through the turbine, it needs to keep moving downstream. This is crucial for maintaining the flow of air.\nWhy this matters: Betz Limit and Turbine Types helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "renewable-energy-systems-101-l04-c3",
          "title": "Wind Resource Assessment and Offshore vs Onshore",
          "content": "Before choosing a site for wind energy projects, developers carry out detailed assessments to understand the wind resources available in that area. They utilize advanced tools such as meteorological masts and lidar technology to measure wind speeds over a period of one to three years. This data helps them classify wind resources into different categories, known as classes. These classes range from Class 1, which indicates poor wind resources, to Class 7, which signifies excellent wind resources.\nOnshore wind farms, which are located on land, are typically less expensive to install compared to their offshore counterparts. However, they can face challenges such as land use restrictions and noise concerns from the turbines. On the other hand, offshore wind farms, which are situated in bodies of water, benefit from stronger and more consistent winds. This allows them to use larger turbines that can generate more than 15 megawatts of power.\nDespite the advantages, offshore wind projects come with higher costs for installation, cabling, and maintenance. To overcome some of these challenges, innovative floating offshore platforms are being developed. These platforms can operate in deeper waters, beyond 60 meters, which opens up new opportunities for harnessing wind energy in locations that were previously inaccessible. This advancement could significantly increase the potential for offshore wind energy generation, contributing to a more sustainable energy future.\nContext recap: Before choosing a site for wind energy projects, developers carry out detailed assessments to understand the wind resources available in that area. They utilize advanced tools such as meteorological masts and lidar technology to measure wind speeds over a period of one to three years. This data helps them classify wind resources into different categories, known as classes. These classes range from Class 1, which indicates poor wind resources, to Class 7, which signifies excellent wind resources.\nWhy this matters: Wind Resource Assessment and Offshore vs Onshore helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l04-f1",
          "front": "What is the Betz limit?",
          "back": "The theoretical maximum fraction of wind's kinetic energy a turbine can extract: 59.3 percent (16/27)."
        },
        {
          "id": "renewable-energy-systems-101-l04-f2",
          "front": "How does wind power scale with wind speed?",
          "back": "Power is proportional to the cube of wind speed (P ∝ v³). Doubling speed increases power eightfold."
        },
        {
          "id": "renewable-energy-systems-101-l04-f3",
          "front": "What is the difference between HAWT and VAWT?",
          "back": "HAWT (horizontal-axis) has blades rotating around a horizontal shaft and is more efficient at scale. VAWT (vertical-axis) is omnidirectional but generally less efficient."
        },
        {
          "id": "renewable-energy-systems-101-l04-f4",
          "front": "Why is offshore wind attractive despite higher costs?",
          "back": "Offshore sites offer stronger, steadier winds with fewer obstructions, enabling higher capacity factors (40–55%) and larger turbine sizes."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l04-a1",
          "type": "image",
          "title": "Wind Turbine Anatomy",
          "content": "Labeled cross-section of a HAWT showing nacelle, gearbox, generator, pitch mechanism, and tower."
        },
        {
          "id": "renewable-energy-systems-101-l04-a2",
          "type": "animation",
          "title": "Betz Limit Visualization",
          "content": "Animated stream-tube diagram showing why extracting 100% of wind energy is impossible—downstream air must keep flowing."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l05",
      "title": "Hydropower and Other Renewables",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l05-c1",
          "title": "Conventional Hydropower and Pumped Storage",
          "content": "Conventional hydropower is a widely used method for generating electricity that harnesses the potential energy of water stored behind large structures known as dams. When water is released from the dam, it flows through large pipes called penstocks. As the water moves through these pipes, it spins turbines, specifically designed types like Francis or Kaplan turbines, which are connected to generators that convert the mechanical energy into electrical energy. One of the largest hydropower plants in the world is the Itaipu Dam, which has an impressive capacity of 14 gigawatts. This means it can provide a consistent and reliable source of electricity, often referred to as baseload power, with capacity factors that can exceed 50 percent, ensuring that it can meet a significant portion of energy needs consistently.\nAnother important technology in the realm of hydropower is called pumped-storage hydropower (PSH). This system uses two reservoirs that are situated at different heights. During times when electricity demand is low, excess energy from the grid is utilized to pump water from the lower reservoir to the upper one, effectively storing energy in the form of potential energy. When the demand for electricity increases, the stored water is released back down to the lower reservoir, passing through turbines to generate electricity. This method of energy storage is crucial, as pumped-storage hydropower accounts for about 95 percent of the global energy storage capacity at the grid scale. Additionally, it boasts round-trip efficiencies that range from 70 to 85 percent, making it a highly effective solution for balancing supply and demand in electricity generation.\nContext recap: Conventional hydropower is a widely used method for generating electricity that harnesses the potential energy of water stored behind large structures known as dams. When water is released from the dam, it flows through large pipes called penstocks. As the water moves through these pipes, it spins turbines, specifically designed types like Francis or Kaplan turbines, which are connected to generators that convert the mechanical energy into electrical energy. One of the largest hydropower plants in the world is the Itaipu Dam, which has an impressive capacity of 14 gigawatts."
        },
        {
          "id": "renewable-energy-systems-101-l05-c2",
          "title": "Tidal, Wave, and Geothermal Energy",
          "content": "Tidal energy is a fascinating renewable energy source that captures the energy produced by the movement of ocean tides. This process can be accomplished using special systems known as tidal barrages or underwater turbines. A great example of this technology in action is the La Rance tidal barrage located in France, which has been successfully generating electricity since 1966. This innovative structure demonstrates how we can harness natural forces to produce clean energy.\nWave energy is another exciting form of renewable energy that transforms the up-and-down motion of ocean surface waves into electricity. While this technology holds great promise, it is still in the early stages of commercialization. This is largely due to the tough conditions found in marine environments, which can make it challenging to develop and maintain wave energy devices.\nGeothermal energy is a unique type of energy that utilizes the heat stored deep within the Earth. For example, in Iceland, about 25 percent of the country's electricity comes from geothermal power plants. This shows how countries can use their natural resources to produce sustainable energy. Furthermore, researchers are working on Enhanced Geothermal Systems (EGS), which aim to create artificial reservoirs in hot dry rock. This advancement could greatly expand the number of locations suitable for geothermal energy production, making it an even more viable option for clean energy in the future.\nContext recap: Tidal energy is a fascinating renewable energy source that captures the energy produced by the movement of ocean tides. This process can be accomplished using special systems known as tidal barrages or underwater turbines. A great example of this technology in action is the La Rance tidal barrage located in France, which has been successfully generating electricity since 1966. This innovative structure demonstrates how we can harness natural forces to produce clean energy.\nWhy this matters: Tidal, Wave, and Geothermal Energy helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "renewable-energy-systems-101-l05-c3",
          "title": "Biomass Energy",
          "content": "Biomass energy is an important type of renewable energy that transforms organic materials into usable energy forms. These materials can include things like wood, leftover crops, animal waste, and specially cultivated energy crops. The process of converting biomass into energy can happen in several ways, including combustion (burning), gasification (turning into gas), or anaerobic digestion (breaking down without oxygen). One of the great things about biomass is that it can be carbon-neutral. This means that when plants grow back, they can absorb the carbon dioxide (CO₂) that was released when the biomass was burned. However, whether biomass truly is carbon-neutral can depend on various factors, such as changes in land use and the energy consumed during the supply chain process. A practical approach to reducing carbon emissions is to mix biomass pellets with coal in existing coal power plants. This method is known as co-firing and can help transition to cleaner energy sources. Furthermore, when agricultural waste is broken down through anaerobic digestion, it produces biogas, which contains methane. This methane can be used to power generators or can be upgraded to meet the standards for renewable natural gas that can be delivered through pipelines. Overall, biomass energy plays a significant role in our efforts to create a more sustainable energy future.\nContext recap: Biomass energy is an important type of renewable energy that transforms organic materials into usable energy forms. These materials can include things like wood, leftover crops, animal waste, and specially cultivated energy crops. The process of converting biomass into energy can happen in several ways, including combustion (burning), gasification (turning into gas), or anaerobic digestion (breaking down without oxygen). One of the great things about biomass is that it can be carbon-neutral.\nWhy this matters: Biomass Energy helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l05-f1",
          "front": "What is pumped-storage hydropower?",
          "back": "A storage method using two reservoirs at different elevations. Water is pumped up during surplus generation and released through turbines during peak demand; round-trip efficiency is 70–85%."
        },
        {
          "id": "renewable-energy-systems-101-l05-f2",
          "front": "Why is geothermal energy limited geographically?",
          "back": "Conventional geothermal requires heat near the surface—typically at tectonic boundaries. Enhanced Geothermal Systems (EGS) aim to extend access by fracturing hot dry rock."
        },
        {
          "id": "renewable-energy-systems-101-l05-f3",
          "front": "Name two types of tidal energy systems.",
          "back": "Tidal barrage (dam across an estuary using head difference) and tidal stream turbines (underwater turbines in tidal currents)."
        },
        {
          "id": "renewable-energy-systems-101-l05-f4",
          "front": "Under what condition is biomass considered carbon-neutral?",
          "back": "When the CO₂ released during combustion is fully offset by CO₂ absorbed during regrowth of the biomass feedstock, with no net land-use change emissions."
        }
      ],
      "metadata": {
        "prompts": [
          "Compare the capacity factor and dispatchability of conventional hydro versus solar PV.",
          "Explain why pumped-storage hydro is considered a battery for the grid, even though it consumes more energy than it produces.",
          "Evaluate the pros and cons of biomass co-firing in a coal plant as a decarbonization strategy."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l05-a1",
          "type": "practice",
          "title": "Renewable Resource Comparison",
          "content": "Rank hydropower, tidal, geothermal, and biomass by capacity factor, geographic flexibility, and carbon intensity using provided data tables."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l06",
      "title": "Wind & Hydro Checkpoint",
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
          "id": "renewable-energy-systems-101-l06-q1",
          "text": "According to the Betz limit, what is the maximum fraction of wind kinetic energy a turbine can theoretically extract?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "100%"
            },
            {
              "id": "b",
              "text": "75%"
            },
            {
              "id": "c",
              "text": "59.3%"
            },
            {
              "id": "d",
              "text": "45%"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Betz limit is 16/27 ≈ 59.3%. Air must keep moving past the rotor, so extracting all kinetic energy is physically impossible."
        },
        {
          "id": "renewable-energy-systems-101-l06-q2",
          "text": "If wind speed doubles at a turbine site, by what factor does the available wind power increase?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2×"
            },
            {
              "id": "b",
              "text": "4×"
            },
            {
              "id": "c",
              "text": "6×"
            },
            {
              "id": "d",
              "text": "8×"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Wind power scales with the cube of wind speed (P ∝ v³). Doubling speed: 2³ = 8× more power."
        },
        {
          "id": "renewable-energy-systems-101-l06-q3",
          "text": "What is the primary purpose of pumped-storage hydropower?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Generating baseload electricity from river flow"
            },
            {
              "id": "b",
              "text": "Storing energy by moving water between two reservoirs at different elevations"
            },
            {
              "id": "c",
              "text": "Desalinating seawater using excess wind energy"
            },
            {
              "id": "d",
              "text": "Cooling thermal power plants"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Pumped-storage hydro stores energy by pumping water uphill during surplus and releasing it through turbines during peak demand."
        },
        {
          "id": "renewable-energy-systems-101-l06-q4",
          "text": "Which renewable source taps heat from the Earth's interior and is geographically concentrated near tectonic boundaries?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Tidal energy"
            },
            {
              "id": "b",
              "text": "Biomass"
            },
            {
              "id": "c",
              "text": "Geothermal energy"
            },
            {
              "id": "d",
              "text": "Wave energy"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Geothermal energy exploits subsurface heat, which is most accessible near tectonic plate boundaries and volcanic regions."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l06-a1",
          "type": "mnemonic",
          "title": "Wind Power Cube Rule",
          "content": "Remember: Power ∝ v³. 'Cubed with the breeze'—small speed gains yield large power increases."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l07",
      "title": "Energy Storage",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l07-c1",
          "title": "Lithium-Ion and Flow Batteries",
          "content": "Lithium-ion batteries are a key technology used for short-term energy storage in power grids, typically providing energy for durations ranging from 1 to 4 hours. Their popularity stems from several advantages: they have a high energy density, which means they can store a significant amount of energy in a compact size. This feature allows them to respond quickly to fluctuations in energy demand, making them very efficient for balancing supply and demand. Additionally, the costs associated with lithium-ion batteries have been decreasing rapidly, with projections indicating that prices could fall below $140 per kilowatt-hour by the year 2024.\nThese batteries utilize various materials for their cathodes, including lithium cobalt, nickel-manganese-cobalt (often abbreviated as NMC), and lithium iron phosphate (known as LFP). However, it's essential to understand that lithium-ion batteries do experience degradation over time. After undergoing approximately 3,000 to 5,000 charging cycles, they typically retain about 80% of their original capacity, which means they gradually lose some of their ability to hold energy.\nIn contrast, flow batteries, such as vanadium redox batteries, operate differently. They store energy in liquid electrolytes that are kept in separate external tanks. This design allows flow batteries to provide energy for longer durations, typically between 4 to 12 hours. One of the significant advantages of flow batteries is their ability to scale power and energy independently, which means you can adjust their capacity without affecting their performance. Furthermore, flow batteries experience minimal degradation over time, making them a durable option. However, they generally have lower energy density and higher upfront costs compared to lithium-ion batteries, which is an important consideration when choosing the right energy storage solution for specific applications.\nContext recap: Lithium-ion batteries are a key technology used for short-term energy storage in power grids, typically providing energy for durations ranging from 1 to 4 hours. Their popularity stems from several advantages: they have a high energy density, which means they can store a significant amount of energy in a compact size. This feature allows them to respond quickly to fluctuations in energy demand, making them very efficient for balancing supply and demand. Additionally, the costs associated with lithium-ion batteries have been decreasing rapidly, with projections indicating that prices could fall below $140 per kilowatt-hour by the year 2024."
        },
        {
          "id": "renewable-energy-systems-101-l07-c2",
          "title": "Pumped Hydro and Compressed Air",
          "content": "Pumped-storage hydroelectricity is the most widely used method for storing energy in power grids across the globe, boasting an impressive capacity of over 160 gigawatts. This technology allows us to store energy for durations that can range from several hours to a few days, making it a reliable option for balancing supply and demand. The efficiency of this system is quite remarkable, with round-trip efficiency rates typically falling between 70% and 85%.\nAnother fascinating technology in the realm of energy storage is compressed-air energy storage, or CAES. This innovative system works by compressing air into large underground caverns during periods when energy demand is low, such as at night. When energy is needed, the compressed air is released and passed through a turbine, which generates electricity.\nThere are also advanced designs known as adiabatic CAES. These systems capture the heat produced during the air compression process and reuse it, which significantly boosts their efficiency. While traditional CAES systems achieve efficiencies of around 40% to 50%, adiabatic designs can improve this to between 60% and 70%.\nIt's important to note that both pumped hydro and CAES technologies require specific geological conditions to function effectively. This means that their deployment can be limited to certain locations where the right underground formations exist, which can pose challenges for widespread implementation.\nContext recap: Pumped-storage hydroelectricity is the most widely used method for storing energy in power grids across the globe, boasting an impressive capacity of over 160 gigawatts. This technology allows us to store energy for durations that can range from several hours to a few days, making it a reliable option for balancing supply and demand. The efficiency of this system is quite remarkable, with round-trip efficiency rates typically falling between 70% and 85%. Another fascinating technology in the realm of energy storage is compressed-air energy storage, or CAES.\nWhy this matters: Pumped Hydro and Compressed Air helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "renewable-energy-systems-101-l07-c3",
          "title": "Hydrogen Electrolysis and Round-Trip Efficiency",
          "content": "Green hydrogen is an innovative and promising energy source that is produced through a process called electrolysis. This process involves splitting water into hydrogen and oxygen using renewable electricity, which makes it environmentally friendly. There are two main types of devices called electrolyzers that help with this process: proton-exchange membrane (PEM) electrolyzers and alkaline electrolyzers. These devices can convert about 60% to 70% of the energy from electricity into hydrogen, which is quite efficient.\nOnce the hydrogen is generated, it can be stored in special tanks or even in underground salt caverns, which are large natural formations that can safely hold the gas. When we need to use the stored hydrogen, it can be transformed back into electricity through fuel cells or gas turbines. However, it’s important to understand that the overall efficiency of converting hydrogen back to electricity, known as round-trip efficiency, is not as high as that of batteries or pumped hydro systems. This efficiency typically ranges from 25% to 35%, which means that some energy is lost in the process.\nDespite this lower efficiency, hydrogen has significant advantages. It is particularly useful for long-duration energy storage, which means it can hold energy for extended periods. It also plays a crucial role in helping industries reduce their carbon emissions, known as decarbonization. Additionally, hydrogen is an essential ingredient for creating ammonia and synthetic fuels, which are important for various applications in our economy and daily lives.\nContext recap: Green hydrogen is an innovative and promising energy source that is produced through a process called electrolysis. This process involves splitting water into hydrogen and oxygen using renewable electricity, which makes it environmentally friendly. There are two main types of devices called electrolyzers that help with this process: proton-exchange membrane (PEM) electrolyzers and alkaline electrolyzers. These devices can convert about 60% to 70% of the energy from electricity into hydrogen, which is quite efficient.\nWhy this matters: Hydrogen Electrolysis and Round-Trip Efficiency helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l07-f1",
          "front": "What is round-trip efficiency?",
          "back": "The percentage of energy put into a storage system that can be retrieved. Lithium-ion: ~85–90%, pumped hydro: ~70–85%, hydrogen: ~25–35%."
        },
        {
          "id": "renewable-energy-systems-101-l07-f2",
          "front": "Why do flow batteries suit long-duration storage?",
          "back": "Energy capacity scales independently of power by simply adding more electrolyte in larger tanks, and they experience minimal degradation over many cycles."
        },
        {
          "id": "renewable-energy-systems-101-l07-f3",
          "front": "What limits hydrogen's round-trip efficiency?",
          "back": "Energy is lost at each conversion step: electricity → hydrogen (electrolysis ~65%) → storage → electricity (fuel cell ~50%), compounding losses."
        },
        {
          "id": "renewable-energy-systems-101-l07-f4",
          "front": "How much lithium-ion capacity is typically retained after 3,000–5,000 cycles?",
          "back": "About 80 percent of original capacity, after which the battery is considered at end-of-life for grid applications."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l07-a1",
          "type": "image",
          "title": "Storage Technology Comparison",
          "content": "Chart comparing lithium-ion, flow batteries, pumped hydro, CAES, and hydrogen by round-trip efficiency, duration, and cost per kWh."
        },
        {
          "id": "renewable-energy-systems-101-l07-a2",
          "type": "animation",
          "title": "Hydrogen Electrolysis Process",
          "content": "Animated diagram showing water splitting into H₂ and O₂ in a PEM electrolyzer, storage, and reconversion via fuel cell."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l08",
      "title": "Grid Integration and Smart Grids",
      "type": "interactive",
      "duration": 14,
      "chunks": [
        {
          "id": "renewable-energy-systems-101-l08-c1",
          "title": "AC Grid Frequency and Stability",
          "content": "Electricity grids are essential systems that deliver power to our homes and businesses, and they are designed to operate at a specific frequency. In most parts of the world, this frequency is set at 50 Hertz, while in North America, it is 60 Hertz. Maintaining this frequency is crucial because it ensures that the amount of electricity generated matches the amount being consumed at any given moment. If more electricity is being used than what is being produced, the frequency will drop, which can lead to problems in the grid. Traditional power plants, especially those that use fossil fuels or nuclear energy, provide a feature known as rotational inertia. This inertia acts like a buffer, helping to resist sudden changes in frequency and keeping the grid stable. However, as we increasingly rely on renewable energy sources such as solar and wind power, which use inverters instead of traditional synchronous machines, the grid loses some of this valuable inertia. To tackle this issue, engineers are working on innovative solutions like grid-forming inverters. These advanced devices are designed to mimic the effects of inertia, ensuring that the electricity grid remains stable and reliable, even when a large portion of the energy comes from renewable sources. This development is crucial for the future of energy systems, as it allows us to harness clean energy while maintaining the stability of our power supply.\nContext recap: Electricity grids are essential systems that deliver power to our homes and businesses, and they are designed to operate at a specific frequency. In most parts of the world, this frequency is set at 50 Hertz, while in North America, it is 60 Hertz. Maintaining this frequency is crucial because it ensures that the amount of electricity generated matches the amount being consumed at any given moment. If more electricity is being used than what is being produced, the frequency will drop, which can lead to problems in the grid.\nWhy this matters: AC Grid Frequency and Stability helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "renewable-energy-systems-101-l08-c2",
          "title": "Demand Response and Curtailment",
          "content": "Demand response programs are special initiatives designed to encourage consumers to adjust their electricity usage during times when demand is high. This means that when everyone is using a lot of electricity, such as on a hot afternoon, consumers might be asked to reduce their usage or shift it to a different time. For example, people can pre-cool their buildings before the hottest part of the day or charge their electric vehicles at night when electricity demand is lower. This kind of flexibility is really helpful for grid operators because it allows them to manage the varying output from renewable energy sources, like solar and wind, without having to invest in expensive peaker plants. Peaker plants are power plants that only run during peak demand times, which can be costly to build and maintain. Additionally, there is a concept called curtailment, which means intentionally reducing the amount of renewable energy generated when there is more supply than demand, and when energy storage systems are full. A great example of this is seen in California, where solar energy curtailment during midday leads to a situation known as the 'duck curve.' This curve shows that net electricity demand drops sharply at noon when solar energy production is at its peak, and then it rises steeply in the evening as the solar energy production decreases. Understanding these concepts is crucial for managing our energy systems effectively and ensuring a sustainable future.\nContext recap: Demand response programs are special initiatives designed to encourage consumers to adjust their electricity usage during times when demand is high. This means that when everyone is using a lot of electricity, such as on a hot afternoon, consumers might be asked to reduce their usage or shift it to a different time. For example, people can pre-cool their buildings before the hottest part of the day or charge their electric vehicles at night when electricity demand is lower. This kind of flexibility is really helpful for grid operators because it allows them to manage the varying output from renewable energy sources, like solar and wind, without having to invest in expensive peaker plants.\nWhy this matters: Demand Response and Curtailment helps learners in Engineering connect ideas from Renewable Energy Systems to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "renewable-energy-systems-101-l08-c3",
          "title": "Microgrids and Smart Grid Technologies",
          "content": "A microgrid is a special type of energy system that is localized, meaning it can generate, store, and use its own electricity right where it is needed. This system can either connect to the main power grid, which is the larger network that supplies electricity to many areas, or it can operate independently, a situation known as being 'islanded.' Microgrids are especially important for places that need a reliable power supply, such as hospitals, military bases, and remote communities that might not always have consistent access to the main grid.\nSmart grid technologies are essential for making our electricity systems more efficient and reliable. One key component is advanced metering infrastructure (AMI), which helps monitor and manage how electricity is used. This technology allows for better tracking of energy consumption, helping both consumers and providers make informed decisions about energy use. Another important aspect is distribution automation, which enhances the efficiency of how electricity is distributed across the grid.\nAdditionally, real-time pricing signals are used to inform consumers about the current costs of electricity, encouraging them to use energy during off-peak times when it is cheaper. Furthermore, grid-scale inverters have become vital in supporting the grid by providing services like reactive power support, which helps maintain voltage levels, voltage regulation to ensure the electricity supply is stable, and frequency response to keep the grid balanced. Together, these advanced technologies allow power grids to incorporate a large amount of variable renewable energy sources, such as wind and solar, while still ensuring that electricity remains reliable and available for everyone.\nContext recap: A microgrid is a special type of energy system that is localized, meaning it can generate, store, and use its own electricity right where it is needed. This system can either connect to the main power grid, which is the larger network that supplies electricity to many areas, or it can operate independently, a situation known as being 'islanded.' Microgrids are especially important for places that need a reliable power supply, such as hospitals, military bases, and remote communities that might not always have consistent access to the main grid. Smart grid technologies are essential for making our electricity systems more efficient and reliable. One key component is advanced metering infrastructure (AMI), which helps monitor and manage how electricity is used."
        }
      ],
      "flashcards": [
        {
          "id": "renewable-energy-systems-101-l08-f1",
          "front": "What is the 'duck curve'?",
          "back": "A graph of net electricity load showing a deep midday dip (due to solar) and steep evening ramp, shaped like a duck. It illustrates challenges of integrating high solar penetration."
        },
        {
          "id": "renewable-energy-systems-101-l08-f2",
          "front": "How does demand response help integrate renewables?",
          "back": "By shifting flexible loads (EV charging, HVAC, industrial processes) to times of high renewable output, reducing curtailment and peak demand."
        },
        {
          "id": "renewable-energy-systems-101-l08-f3",
          "front": "What is a grid-forming inverter?",
          "back": "An inverter that can establish grid voltage and frequency independently, emulating the inertia of synchronous generators to maintain stability in low-inertia grids."
        },
        {
          "id": "renewable-energy-systems-101-l08-f4",
          "front": "What is a microgrid?",
          "back": "A self-contained energy system with local generation, storage, and loads that can operate grid-connected or islanded for resilience."
        }
      ],
      "metadata": {
        "prompts": [
          "Sketch a duck curve and label the solar generation period, net load minimum, and evening ramp.",
          "Design a demand response strategy for a university campus that reduces peak load by 15 percent using HVAC pre-cooling and EV charge scheduling.",
          "Explain how a grid-forming inverter differs from a grid-following inverter and why the distinction matters at high renewable penetration."
        ]
      },
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l08-a1",
          "type": "practice",
          "title": "Microgrid Design Challenge",
          "content": "Design a microgrid for a remote hospital: select generation sources, storage capacity, and a load-management strategy to maintain 99.9% uptime."
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l09",
      "title": "Storage & Grid Checkpoint",
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
          "id": "renewable-energy-systems-101-l09-q1",
          "text": "Which storage technology has the highest round-trip efficiency for short-duration applications?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Hydrogen fuel cells (~30%)"
            },
            {
              "id": "b",
              "text": "Lithium-ion batteries (~85–90%)"
            },
            {
              "id": "c",
              "text": "Compressed air (~50%)"
            },
            {
              "id": "d",
              "text": "Thermal storage (~40%)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lithium-ion batteries achieve 85–90% round-trip efficiency, the highest among common grid storage technologies for short durations."
        },
        {
          "id": "renewable-energy-systems-101-l09-q2",
          "text": "What phenomenon causes the 'duck curve' in grids with high solar penetration?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Wind generation peaks at midday"
            },
            {
              "id": "b",
              "text": "Solar output sharply reduces net load at midday, followed by a steep evening ramp"
            },
            {
              "id": "c",
              "text": "Battery storage discharges at noon"
            },
            {
              "id": "d",
              "text": "Industrial demand spikes during lunch hours"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Abundant midday solar drives net load very low, then as solar fades in the evening demand ramps steeply—creating the duck-shaped curve."
        },
        {
          "id": "renewable-energy-systems-101-l09-q3",
          "text": "Why is green hydrogen valued despite its low round-trip efficiency?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It is the cheapest form of storage"
            },
            {
              "id": "b",
              "text": "It provides seasonal and long-duration storage and serves as a feedstock for industrial processes"
            },
            {
              "id": "c",
              "text": "It has zero energy losses"
            },
            {
              "id": "d",
              "text": "It can only be produced from natural gas"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hydrogen excels at long-duration and seasonal storage and can decarbonize industry (steel, ammonia), despite 25–35% round-trip efficiency."
        },
        {
          "id": "renewable-energy-systems-101-l09-q4",
          "text": "What role does a grid-forming inverter play in a renewable-heavy grid?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It converts AC to DC for battery charging only"
            },
            {
              "id": "b",
              "text": "It synthetically provides inertia and sets grid voltage and frequency, replacing the role of synchronous generators"
            },
            {
              "id": "c",
              "text": "It increases solar panel efficiency"
            },
            {
              "id": "d",
              "text": "It measures wind speed for turbine control"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Grid-forming inverters establish voltage and frequency independently, providing synthetic inertia to maintain stability as synchronous generators retire."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l09-a1",
          "type": "mnemonic",
          "title": "Storage Efficiency Ranking",
          "content": "Li-ion > Pumped Hydro > CAES > Hydrogen. 'Lithium Leads, Pumped Follows, Air Compresses, Hydrogen Hopes.'"
        }
      ]
    },
    {
      "id": "renewable-energy-systems-101-l10",
      "title": "Mastery Quiz: Renewable Energy",
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
          "id": "renewable-energy-systems-101-l10-q1",
          "text": "A region has average wind speeds of 7 m/s. A new offshore site averages 14 m/s. Compared to the original site, how much more power per swept area is available offshore?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "2× more"
            },
            {
              "id": "b",
              "text": "4× more"
            },
            {
              "id": "c",
              "text": "8× more"
            },
            {
              "id": "d",
              "text": "16× more"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Wind power scales with the cube of speed. (14/7)³ = 2³ = 8× more available power per unit swept area."
        },
        {
          "id": "renewable-energy-systems-101-l10-q2",
          "text": "A utility installs a 100 MW / 400 MWh lithium-ion battery system with 87% round-trip efficiency. If fully charged, how much energy can it deliver back to the grid?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "400 MWh"
            },
            {
              "id": "b",
              "text": "348 MWh"
            },
            {
              "id": "c",
              "text": "460 MWh"
            },
            {
              "id": "d",
              "text": "100 MWh"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Deliverable energy = stored energy × round-trip efficiency = 400 MWh × 0.87 = 348 MWh."
        },
        {
          "id": "renewable-energy-systems-101-l10-q3",
          "text": "Which combination best addresses the duck curve problem on a grid with 40% solar penetration?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Build more solar panels and reduce battery storage"
            },
            {
              "id": "b",
              "text": "Deploy battery storage to absorb midday surplus and discharge during the evening ramp, plus demand response to shift flexible loads"
            },
            {
              "id": "c",
              "text": "Increase coal generation to flatten the curve"
            },
            {
              "id": "d",
              "text": "Curtail all solar output above 20% penetration"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Battery storage time-shifts surplus solar energy to the evening peak, while demand response flattens the load shape—together they mitigate the duck curve."
        },
        {
          "id": "renewable-energy-systems-101-l10-q4",
          "text": "A remote island microgrid needs 24/7 power. Which portfolio provides the best combination of reliability, sustainability, and cost-effectiveness?",
          "skillId": "renewable-energy-systems-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "100% diesel generators"
            },
            {
              "id": "b",
              "text": "Solar PV + wind + lithium-ion battery storage + a backup diesel generator"
            },
            {
              "id": "c",
              "text": "A single large wind turbine with no storage"
            },
            {
              "id": "d",
              "text": "Geothermal only, regardless of local geology"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Combining solar, wind, and battery storage covers variability while a small backup diesel ensures reliability during extended low-resource periods—a proven island microgrid architecture."
        }
      ],
      "learningAids": [
        {
          "id": "renewable-energy-systems-101-l10-a1",
          "type": "mnemonic",
          "title": "Mastery Checklist",
          "content": "Energy vs Power → Solar PV → Wind → Hydro & Others → Storage → Grid Integration. 'Every Student Wins High Scores Guaranteed.'"
        }
      ]
    }
  ]
};
