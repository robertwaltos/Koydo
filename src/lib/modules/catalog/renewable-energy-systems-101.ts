import type { LearningModule } from "@/lib/modules/types";

export const renewable_energy_systems_101_Module: LearningModule = {
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
  "version": "1.1.0",
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
          "content": "Energy is the ability to do work, measured in joules or kilowatt-hours (kWh). It powers our devices, heats our homes, and moves our cars. Power, measured in watts or kilowatts (kW), is the rate at which energy is used or produced. For example, a 100-watt light bulb left on for 10 hours consumes 1 kilowatt-hour of energy (100 W × 10 h = 1000 Wh = 1 kWh). A solar panel's rating in kW tells you its instantaneous power output, while your electricity bill in kWh reflects your total energy consumption over time. In 2023, global energy consumption exceeded 580 exajoules, with fossil fuels providing about 80% of that energy. Understanding the distinction between energy and power is fundamental to analyzing any energy system."
        },
        {
          "id": "renewable-energy-systems-101-l01-c2",
          "title": "Energy Conversion and Efficiency",
          "content": "Every energy system is designed to convert one form of energy into another. Solar panels convert sunlight (photons) into electricity. Wind turbines convert the kinetic energy of moving air into mechanical energy, which a generator then converts into electrical energy. No conversion process is 100% efficient; some energy is always lost, usually as heat. Conversion efficiency is the ratio of useful energy output to total energy input. For example, a modern natural gas power plant has about 60% efficiency, while a typical coal plant is around 33% efficient. Solar panels, under ideal conditions, convert about 18-22% of incident sunlight into electricity. Understanding these efficiencies is crucial for comparing different energy technologies and improving sustainability."
        },
        {
          "id": "renewable-energy-systems-101-l01-c3",
          "title": "Global Energy Mix and Carbon Intensity",
          "content": "The global energy mix describes the combination of different energy sources used worldwide. By 2024, renewable sources—including hydropower, wind, and solar—accounted for about 30% of global electricity generation, a significant step towards a sustainable future. A key metric for comparing sources is carbon intensity, the amount of carbon dioxide (CO₂) emitted per kilowatt-hour of electricity produced (gCO₂/kWh). Coal-fired power plants are highly intensive, emitting around 900 gCO₂/kWh, while natural gas plants emit about 450 gCO₂/kWh. In contrast, renewables have very low lifecycle emissions: solar photovoltaics are around 40 gCO₂/kWh, wind is about 11 gCO₂/kWh, and nuclear is approximately 12 gCO₂/kWh. Decarbonization strategies focus on shifting to these low-carbon sources and electrifying sectors like transportation and heating."
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
      "metadata": {
        "prompts": [
          "A 1500 W electric kettle runs for 6 minutes. How much energy does it consume in kWh?",
          "A coal plant with 35% efficiency burns fuel with 1000 MWh of chemical energy. How much electrical energy is produced?",
          "Compare the lifecycle carbon intensity of solar PV (~40 gCO₂/kWh) to natural gas (~450 gCO₂/kWh). How many times cleaner is solar?"
        ]
      },
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
          "content": "A photovoltaic (PV) cell transforms sunlight directly into electricity. Most cells are made from crystalline silicon. When sunlight photons strike the silicon, their energy excites electrons, creating mobile electron-hole pairs. This is known as the photovoltaic effect. A built-in electric field at the junction between two types of silicon (p-type and n-type) separates these pairs, pushing electrons to the n-type layer and holes to the p-type layer. This separation creates a voltage, and when connected to a circuit, it drives an electric current. The efficiency of this process varies by cell type: monocrystalline cells, made from a single crystal structure, achieve 20-24% efficiency, while polycrystalline cells, with multiple crystal structures, typically reach 15-18%."
        },
        {
          "id": "renewable-energy-systems-101-l02-c2",
          "title": "Modules, Strings, and Arrays",
          "content": "Individual PV cells produce a low voltage, around 0.5-0.6 volts. To be useful, cells are connected in series to form a module, or solar panel, which typically generates 30-45 volts and 300-400 watts. Multiple modules are then connected in series to create a 'string,' designed to match the voltage requirements of an inverter. An inverter is a device that converts the direct current (DC) from the panels into alternating current (AC) used by the grid and our appliances. Finally, multiple strings are connected in parallel to form an array. A residential system might have a 20-panel, 8-kilowatt array, while a utility-scale solar farm can have hundreds of thousands of panels producing hundreds of megawatts. Proper string sizing is critical and must account for factors like temperature, shading, and cable losses."
        },
        {
          "id": "renewable-energy-systems-101-l02-c3",
          "title": "Inverters, Net Metering, and Capacity Factor",
          "content": "Inverters are the brains of a PV system, converting DC to grid-compatible AC. String inverters manage a whole string of panels. Microinverters are attached to each individual panel, allowing each to operate at its maximum power point, which is ideal for roofs with partial shading. Central inverters are used in large, utility-scale plants. Net metering is a billing mechanism that allows PV system owners to send surplus electricity back to the grid in exchange for credits. The capacity factor of a solar plant is the ratio of its actual energy output to its maximum possible output. This factor is highly dependent on location and weather; it might be 10-15% in a cloudy northern climate but can reach 25-30% in the sunny American Southwest."
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
        },
        {
          "id": "renewable-energy-systems-101-l02-a2",
          "type": "image",
          "title": "Inverter Architectures",
          "content": "Diagram comparing string, micro, and central inverter setups, highlighting panel connections and DC-AC conversion points."
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
          "content": "Modern wind turbines convert the kinetic energy of wind into electricity. Their blades are shaped like airfoils, similar to an airplane wing. As wind flows over a blade, it creates a pressure difference between the two sides, generating an aerodynamic force called lift. This lift causes the rotor to spin, which in turn drives a generator to produce electricity. The power available in the wind is proportional to the cube of the wind speed. This relationship is expressed by the formula P = ½ρAv³, where ρ is air density, A is the rotor's swept area, and v is wind speed. Because of this cubic relationship, even a small increase in wind speed leads to a large increase in potential power, making site selection and turbine hub height critically important."
        },
        {
          "id": "renewable-energy-systems-101-l04-c2",
          "title": "Betz Limit and Turbine Types",
          "content": "The Betz limit states that a wind turbine can capture a maximum of 59.3% of the kinetic energy in the wind. It's physically impossible to capture 100% because the air must continue to flow downstream after passing through the rotor. Modern horizontal-axis wind turbines (HAWTs) are highly efficient, achieving 35-45% of this theoretical maximum by optimizing factors like blade pitch and tip-speed ratio. Vertical-axis wind turbines (VAWTs), such as the Darrieus and Savonius designs, are omnidirectional (accept wind from any direction) and mechanically simpler. However, VAWTs are generally less efficient than HAWTs and are rarely used for utility-scale power generation."
        },
        {
          "id": "renewable-energy-systems-101-l04-c3",
          "title": "Wind Resource Assessment and Offshore vs Onshore",
          "content": "Before building a wind farm, developers conduct a detailed wind resource assessment. They use meteorological masts and lidar to measure wind speeds for 1-3 years, classifying the resource from Class 1 (poor) to Class 7 (excellent). Onshore wind farms are less expensive to build but can face challenges with land use and noise concerns. Offshore wind farms benefit from stronger, more consistent winds, allowing for massive turbines generating over 15 megawatts each. While offshore projects have higher installation, cabling, and maintenance costs, their higher capacity factors make them attractive. New floating offshore platforms are enabling development in deeper waters (beyond 60 meters), greatly expanding the potential for wind energy."
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
      "metadata": {
        "prompts": [
          "Explain why a wind turbine cannot capture 100% of the wind's kinetic energy, referencing the Betz limit.",
          "A turbine's rotor diameter is doubled. Assuming all else is equal, by what factor does its power potential increase?",
          "Debate the pros and cons of developing an onshore versus an offshore wind farm for a coastal city."
        ]
      },
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
          "content": "Conventional hydropower generates electricity by harnessing the potential energy of water stored behind a dam. When released, the water flows through large pipes called penstocks, spinning turbines (like Francis or Kaplan types) connected to generators. Large dams, such as the 14-gigawatt Itaipu Dam, can provide reliable, dispatchable baseload power with capacity factors often exceeding 50%. Pumped-storage hydropower (PSH) acts like a giant battery. It uses two reservoirs at different elevations. During times of low electricity demand and surplus generation, water is pumped from the lower reservoir to the upper one. When demand is high, the water is released back down through turbines to generate electricity. PSH accounts for about 95% of global grid-scale energy storage capacity and has a round-trip efficiency of 70-85%."
        },
        {
          "id": "renewable-energy-systems-101-l05-c2",
          "title": "Tidal, Wave, and Geothermal Energy",
          "content": "Tidal energy captures the kinetic energy of ocean tides using tidal barrages or underwater turbines. The La Rance tidal barrage in France has been operating since 1966. Wave energy converts the motion of ocean surface waves into electricity, but the technology is still in early commercial stages due to the harsh marine environment. Geothermal energy taps into the Earth's internal heat. In countries like Iceland, it provides a significant portion of electricity (about 25%). Conventional geothermal requires specific geology, but Enhanced Geothermal Systems (EGS), which create artificial reservoirs in hot dry rock, could greatly expand its geographic potential."
        },
        {
          "id": "renewable-energy-systems-101-l05-c3",
          "title": "Biomass Energy",
          "content": "Biomass energy converts organic matter—such as wood, agricultural residues, and dedicated energy crops—into energy through combustion, gasification, or anaerobic digestion. It can be carbon-neutral if the CO₂ released during combustion is reabsorbed by the regrowth of the biomass feedstock, assuming no negative land-use changes. Co-firing biomass pellets in existing coal plants is a common strategy to reduce emissions. Anaerobic digestion of agricultural waste produces biogas (methane), which can be burned to generate electricity or upgraded to renewable natural gas for injection into pipelines."
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
        },
        {
          "id": "renewable-energy-systems-101-l05-a2",
          "type": "image",
          "title": "Pumped-Storage Hydropower",
          "content": "Illustration showing the upper and lower reservoirs of a pumped-storage facility, with arrows indicating the flow during charging (pumping) and discharging (generating)."
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
          "content": "Lithium-ion batteries are the dominant technology for short-duration grid storage (1-4 hours). They offer high energy density, fast response times, and rapidly falling costs, projected to drop below $140/kWh by 2024. Common chemistries include Nickel-Manganese-Cobalt (NMC) and Lithium Iron Phosphate (LFP). However, they degrade over time, typically retaining about 80% of their original capacity after 3,000-5,000 charge cycles. In contrast, flow batteries, like the vanadium redox type, store energy in external tanks of liquid electrolyte. This design allows them to provide longer-duration storage (4-12 hours) and to scale power and energy capacity independently. Flow batteries experience minimal degradation but have lower energy density and higher upfront costs than lithium-ion."
        },
        {
          "id": "renewable-energy-systems-101-l07-c2",
          "title": "Pumped Hydro and Compressed Air",
          "content": "Pumped-storage hydroelectricity is the most mature and widespread form of grid-scale energy storage, with over 160 gigawatts of global capacity. It provides long-duration storage (hours to days) with a round-trip efficiency of 70-85%. Compressed-air energy storage (CAES) is another mechanical storage method. It uses off-peak electricity to compress air into underground caverns. When power is needed, the compressed air is released and heated to drive a turbine. Traditional CAES has an efficiency of 40-50%, but advanced adiabatic CAES, which stores and reuses the heat from compression, can reach 60-70%. Both pumped hydro and CAES are geographically constrained, requiring specific topography or geology."
        },
        {
          "id": "renewable-energy-systems-101-l07-c3",
          "title": "Hydrogen Electrolysis and Round-Trip Efficiency",
          "content": "Green hydrogen is produced by splitting water into hydrogen and oxygen via electrolysis, using renewable electricity. The two main types of electrolyzers, Proton-Exchange Membrane (PEM) and alkaline, convert electricity to hydrogen with 60-70% efficiency. The hydrogen can then be stored in tanks or underground salt caverns. To generate electricity, the hydrogen is used in a fuel cell or a gas turbine. The overall process, from electricity to hydrogen and back to electricity, has a relatively low round-trip efficiency of 25-35%. Despite this, hydrogen is a promising option for long-duration and seasonal energy storage, and it is a critical tool for decarbonizing heavy industry, producing ammonia, and creating synthetic fuels."
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
      "metadata": {
        "prompts": [
          "A grid needs 8 hours of energy storage to shift solar power to the evening. Compare the suitability of lithium-ion versus vanadium redox flow batteries for this application.",
          "Calculate the energy delivered by a 1 GW pumped-hydro facility that runs for 5 hours, assuming an 80% round-trip efficiency.",
          "Explain the key energy conversion losses that contribute to green hydrogen's low round-trip efficiency."
        ]
      },
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
          "content": "AC power grids must operate at a precise frequency (60 Hz in North America, 50 Hz elsewhere) to function. This frequency is maintained when electricity generation exactly matches consumption. If consumption exceeds generation, the frequency drops. Traditional power plants with large, spinning synchronous generators provide rotational inertia, a physical property that resists changes in frequency and helps stabilize the grid. Renewable sources like solar and wind connect to the grid through inverters and do not inherently provide this inertia. As renewables displace traditional plants, the grid's overall inertia decreases. To solve this, advanced grid-forming inverters are being developed to synthetically mimic inertia and provide stability services, ensuring a reliable grid even with high renewable penetration."
        },
        {
          "id": "renewable-energy-systems-101-l08-c2",
          "title": "Demand Response and Curtailment",
          "content": "Demand response programs incentivize consumers to shift their electricity use away from peak hours. This can involve pre-cooling buildings before a hot afternoon or scheduling electric vehicle charging for overnight. This load flexibility helps grid operators manage the variability of solar and wind generation without relying on expensive 'peaker' power plants. When renewable generation exceeds demand and storage is full, operators may resort to curtailment—intentionally reducing the output of wind or solar farms. In California, high midday solar generation causes a phenomenon called the 'duck curve,' where net electricity demand plummets at noon and then ramps up steeply in the evening as the sun sets, creating a major challenge for grid operators."
        },
        {
          "id": "renewable-energy-systems-101-l08-c3",
          "title": "Microgrids and Smart Grid Technologies",
          "content": "A microgrid is a localized energy system with its own generation, storage, and loads. It can operate connected to the main grid or independently in 'islanded' mode. Microgrids enhance resilience for critical facilities like hospitals, military bases, and remote communities. Smart grid technologies are essential for modernizing the power system. These include Advanced Metering Infrastructure (AMI) for real-time energy monitoring, distribution automation for improved efficiency, and real-time pricing signals to encourage flexible consumption. Smart inverters can also provide critical grid support services like voltage regulation and frequency response. Together, these technologies enable the grid to integrate high levels of variable renewables reliably and efficiently."
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
        },
        {
          "id": "renewable-energy-systems-101-l08-a2",
          "type": "image",
          "title": "The 'Duck Curve'",
          "content": "Annotated graph showing the net load on the California grid over 24 hours, highlighting the midday 'belly' from solar generation and the steep evening 'neck' or ramp."
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
