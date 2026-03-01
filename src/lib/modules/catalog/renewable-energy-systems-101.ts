import type { LearningModule } from "@/lib/modules/types";

export const RenewableEnergySystems101Module: LearningModule = {
  id: "renewable-energy-systems-101",
  title: "Renewable Energy Systems",
  description:
    "A comprehensive introduction to renewable energy technologies including solar photovoltaics, wind turbines, hydropower, battery storage, and smart grid integration. Learn how modern energy systems convert natural resources into electricity, explore the physics behind each technology, and understand how variable renewables are balanced on the grid to build a sustainable, low-carbon future.",
  subject: "Engineering",
  tags: ["core", "curriculum", "interactive", "energy", "sustainability"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Distinguish between energy (kWh) and power (kW) and calculate conversion efficiencies for common energy systems",
    "Explain how photovoltaic cells convert sunlight into electricity and compare string, micro, and central inverter architectures",
    "Describe the aerodynamics of wind turbines, the Betz limit, and trade-offs between onshore and offshore installations",
    "Compare conventional hydropower, pumped storage, tidal, geothermal, biomass, and wave energy technologies",
    "Evaluate lithium-ion, flow battery, pumped hydro, and hydrogen storage options by round-trip efficiency, cost, and degradation",
    "Analyze how grid operators use demand response, curtailment, and smart inverters to manage variable renewable generation",
    "Design a conceptual microgrid that balances renewable generation with storage and load management"
  ],
  lessons: [
    /* ------------------------------------------------------------------ */
    /*  L01 – Video: Energy Fundamentals                                  */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l01",
      title: "Energy Fundamentals",
      type: "video",
      duration: 10,
      chunks: [
          {
            id: "renewable-energy-systems-101-l01-c1",
            title: "Energy vs Power",
            content:
              "Energy is the ability to do work, measured in joules or kilowatt-hours (kWh). Power is the rate at which energy is used or produced, measured in watts or kilowatts (kW). A 100 W light bulb running for 10 hours consumes 1 kWh of energy. Understanding this distinction is critical: a solar panel's nameplate rating is given in kW (power), while your electricity bill charges for kWh (energy). The global primary energy consumption exceeded 580 exajoules in 2023, with fossil fuels still providing roughly 80 percent of the total."
          },
          {
            id: "renewable-energy-systems-101-l01-c2",
            title: "Energy Conversion and Efficiency",
            content:
              "Every energy system converts one form of energy into another—solar panels turn photons into electrons, turbines turn kinetic energy into rotational mechanical energy, and generators convert that into electrical energy. No conversion is 100 percent efficient; the ratio of useful output to total input is called conversion efficiency. A modern natural gas combined-cycle plant achieves about 60 percent efficiency, while a coal plant reaches roughly 33 percent. Solar panels typically convert 18–22 percent of incident sunlight into electricity under standard test conditions."
          },
          {
            id: "renewable-energy-systems-101-l01-c3",
            title: "Global Energy Mix and Carbon Intensity",
            content:
              "The global energy mix describes the share of each source in total energy supply. As of 2024, renewables account for roughly 30 percent of global electricity generation, led by hydropower, wind, and solar. Carbon intensity measures grams of CO₂ emitted per kilowatt-hour generated (gCO₂/kWh). Coal-fired electricity averages about 900 gCO₂/kWh, natural gas about 450, solar PV around 40, wind about 11, and nuclear approximately 12. Decarbonization strategies aim to shift the energy mix toward low-carbon sources while electrifying transport and heating."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l01-f1", front: "What is the SI unit of energy?", back: "The joule (J). In electricity billing the kilowatt-hour (kWh) is commonly used; 1 kWh = 3.6 MJ." },
          { id: "renewable-energy-systems-101-l01-f2", front: "How do energy and power differ?", back: "Energy is the total work done (kWh), while power is the rate of doing work (kW). Power × time = energy." },
          { id: "renewable-energy-systems-101-l01-f3", front: "What is conversion efficiency?", back: "The ratio of useful energy output to total energy input, expressed as a percentage." },
          { id: "renewable-energy-systems-101-l01-f4", front: "Roughly what share of global electricity came from renewables by 2024?", back: "About 30 percent, led by hydropower, wind, and solar PV." }
        ],
      learningAids: [
        { id: "renewable-energy-systems-101-l01-a1", type: "image", title: "Energy vs Power Diagram", content: "Illustrated comparison showing kW (instantaneous power) versus kWh (cumulative energy) using a water-tank analogy." },
        { id: "renewable-energy-systems-101-l01-a2", type: "animation", title: "Global Energy Mix Breakdown", content: "Animated pie chart showing the evolution of fossil fuels, nuclear, and renewables in global electricity generation from 2000 to 2024." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L02 – Interactive: Solar Photovoltaic Systems                      */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l02",
      title: "Solar Photovoltaic Systems",
      type: "interactive",
      duration: 14,
      chunks: [
          {
            id: "renewable-energy-systems-101-l02-c1",
            title: "PV Cell Physics",
            content:
              "A photovoltaic cell is a semiconductor device—typically crystalline silicon—that absorbs photons and releases electrons through the photovoltaic effect. When sunlight strikes the cell, photons with energy above the silicon bandgap (1.1 eV) excite electrons from the valence band into the conduction band, creating electron-hole pairs. A built-in electric field at the p-n junction sweeps electrons to the n-type layer and holes to the p-type layer, producing a direct current. Monocrystalline cells achieve 20–24 percent efficiency, while polycrystalline cells reach 15–18 percent."
          },
          {
            id: "renewable-energy-systems-101-l02-c2",
            title: "Modules, Strings, and Arrays",
            content:
              "Individual PV cells produce roughly 0.5–0.6 V each. Cells are wired in series to form a module (panel), typically producing 30–45 V and 300–400 W. Modules are connected in series to form strings that reach the inverter's input voltage window, and strings are connected in parallel to form an array. A residential system might consist of 20 modules totaling 8 kW, while a utility-scale solar farm can deploy hundreds of thousands of modules across several hundred megawatts. Proper string sizing accounts for temperature coefficients, shading, and cable losses."
          },
          {
            id: "renewable-energy-systems-101-l02-c3",
            title: "Inverters, Net Metering, and Capacity Factor",
            content:
              "Inverters convert DC output from PV arrays into grid-compatible AC. String inverters handle an entire string; microinverters attach to each panel for independent maximum power point tracking (MPPT), improving yield under partial shading. Central inverters serve utility-scale plants. Net metering allows homeowners to export surplus solar electricity to the grid and receive bill credits. Capacity factor—the ratio of actual output to maximum possible output—ranges from 10–15 percent in cloudy northern regions to 25–30 percent in sun-rich deserts like the American Southwest."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l02-f1", front: "What is the photovoltaic effect?", back: "The generation of voltage and current in a material upon exposure to light, caused by photon absorption exciting electrons across a semiconductor bandgap." },
          { id: "renewable-energy-systems-101-l02-f2", front: "Why are PV cells connected in series?", back: "To increase voltage. A single silicon cell produces only ~0.5 V; connecting cells in series sums their voltages to a usable level." },
          { id: "renewable-energy-systems-101-l02-f3", front: "What advantage do microinverters have over string inverters?", back: "Each panel operates at its own maximum power point, so shading or soiling on one panel does not reduce the output of the entire string." },
          { id: "renewable-energy-systems-101-l02-f4", front: "What is capacity factor?", back: "The ratio of a plant's actual energy output over a period to the maximum possible output if it ran at nameplate capacity the entire time." }
        ],
      metadata: {
        prompts: [
          "Calculate the annual energy output of a 6 kW residential solar system with a 20 percent capacity factor.",
          "Explain why a microinverter system may produce more energy than a string inverter system on a partially shaded rooftop.",
          "Describe how temperature affects silicon PV cell efficiency and what design choices mitigate the effect."
        ]
      },
      learningAids: [
        { id: "renewable-energy-systems-101-l02-a1", type: "practice", title: "Solar System Sizing Activity", content: "Use irradiance data and module specs to size a residential PV system and estimate annual yield." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L03 – Quiz: Energy & Solar Checkpoint                             */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l03",
      title: "Energy & Solar Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "renewable-energy-systems-101-l03-q1",
          text: "A 5 kW solar array operates for 4 hours at full output. How much energy does it produce?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "20 kWh" },
            { id: "b", text: "20 kW" },
            { id: "c", text: "1.25 kWh" },
            { id: "d", text: "9 kWh" }
          ],
          correctOptionId: "a",
          explanation: "Energy = Power × Time. 5 kW × 4 h = 20 kWh. The answer is in kilowatt-hours because energy equals power multiplied by time."
        },
        {
          id: "renewable-energy-systems-101-l03-q2",
          text: "What fundamental physical process allows a silicon PV cell to generate electricity?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Thermionic emission" },
            { id: "b", text: "The photovoltaic effect at a p-n junction" },
            { id: "c", text: "Electromagnetic induction" },
            { id: "d", text: "Piezoelectric deformation" }
          ],
          correctOptionId: "b",
          explanation: "Silicon PV cells use the photovoltaic effect: photons excite electrons across the bandgap at the p-n junction, creating current."
        },
        {
          id: "renewable-energy-systems-101-l03-q3",
          text: "Which inverter type provides panel-level maximum power point tracking (MPPT)?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Central inverter" },
            { id: "b", text: "String inverter" },
            { id: "c", text: "Microinverter" },
            { id: "d", text: "Battery inverter" }
          ],
          correctOptionId: "c",
          explanation: "Microinverters are installed on each panel, enabling independent MPPT so one shaded panel does not drag down the whole string."
        },
        {
          id: "renewable-energy-systems-101-l03-q4",
          text: "Approximately how many grams of CO₂ per kWh does utility-scale solar PV emit over its lifecycle?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "~450 gCO₂/kWh" },
            { id: "b", text: "~200 gCO₂/kWh" },
            { id: "c", text: "~40 gCO₂/kWh" },
            { id: "d", text: "~900 gCO₂/kWh" }
          ],
          correctOptionId: "c",
          explanation: "Solar PV lifecycle emissions are approximately 40 gCO₂/kWh, far below coal (~900) and natural gas (~450)."
        }
      ],
      learningAids: [
        { id: "renewable-energy-systems-101-l03-a1", type: "mnemonic", title: "Energy Formula", content: "Remember: Energy (kWh) = Power (kW) × Time (h). 'P times T gives E.'" }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L04 – Video: Wind Energy                                          */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l04",
      title: "Wind Energy",
      type: "video",
      duration: 10,
      chunks: [
          {
            id: "renewable-energy-systems-101-l04-c1",
            title: "Aerodynamics of Wind Turbines",
            content:
              "Modern wind turbines extract kinetic energy from moving air using airfoil-shaped blades. As wind passes over the blade, a pressure difference creates lift, causing the rotor to spin. The power available in wind is proportional to the cube of wind speed: P = ½ρAv³, where ρ is air density, A is the swept area, and v is wind velocity. This cubic relationship means doubling wind speed increases available power eightfold, making site selection and hub height crucial to project economics."
          },
          {
            id: "renewable-energy-systems-101-l04-c2",
            title: "Betz Limit and Turbine Types",
            content:
              "The Betz limit states that no turbine can capture more than 59.3 percent of the kinetic energy in wind, because the air must keep moving downstream. Modern horizontal-axis wind turbines (HAWTs) achieve 35–45 percent efficiency, approaching practical Betz limits when tip-speed ratio and blade pitch are optimized. Vertical-axis wind turbines (VAWTs), such as Darrieus and Savonius designs, are omnidirectional and simpler mechanically but typically less efficient and less common at utility scale."
          },
          {
            id: "renewable-energy-systems-101-l04-c3",
            title: "Wind Resource Assessment and Offshore vs Onshore",
            content:
              "Developers use met masts and lidar to measure wind speed distributions over one to three years before committing to a site. Wind resources are classified from Class 1 (poor) to Class 7 (excellent). Onshore wind is cheaper to install but faces land-use and noise constraints. Offshore wind benefits from stronger, more consistent winds and larger turbines (15+ MW), but installation, cabling, and maintenance costs are substantially higher. Floating offshore platforms are extending reach to deeper waters beyond 60 meters."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l04-f1", front: "What is the Betz limit?", back: "The theoretical maximum fraction of wind's kinetic energy a turbine can extract: 59.3 percent (16/27)." },
          { id: "renewable-energy-systems-101-l04-f2", front: "How does wind power scale with wind speed?", back: "Power is proportional to the cube of wind speed (P ∝ v³). Doubling speed increases power eightfold." },
          { id: "renewable-energy-systems-101-l04-f3", front: "What is the difference between HAWT and VAWT?", back: "HAWT (horizontal-axis) has blades rotating around a horizontal shaft and is more efficient at scale. VAWT (vertical-axis) is omnidirectional but generally less efficient." },
          { id: "renewable-energy-systems-101-l04-f4", front: "Why is offshore wind attractive despite higher costs?", back: "Offshore sites offer stronger, steadier winds with fewer obstructions, enabling higher capacity factors (40–55%) and larger turbine sizes." }
        ],
      learningAids: [
        { id: "renewable-energy-systems-101-l04-a1", type: "image", title: "Wind Turbine Anatomy", content: "Labeled cross-section of a HAWT showing nacelle, gearbox, generator, pitch mechanism, and tower." },
        { id: "renewable-energy-systems-101-l04-a2", type: "animation", title: "Betz Limit Visualization", content: "Animated stream-tube diagram showing why extracting 100% of wind energy is impossible—downstream air must keep flowing." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L05 – Interactive: Hydropower and Other Renewables                */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l05",
      title: "Hydropower and Other Renewables",
      type: "interactive",
      duration: 14,
      chunks: [
          {
            id: "renewable-energy-systems-101-l05-c1",
            title: "Conventional Hydropower and Pumped Storage",
            content:
              "Conventional hydropower uses the potential energy of water stored behind a dam. Water flows through penstocks, spinning Francis or Kaplan turbines connected to generators. Large dams like Itaipu (14 GW) can supply baseload power with capacity factors above 50 percent. Pumped-storage hydropower (PSH) uses two reservoirs at different elevations: during low demand, excess electricity pumps water uphill; during peak demand, water flows down to generate. PSH provides about 95 percent of global grid-scale energy storage, with round-trip efficiencies of 70–85 percent."
          },
          {
            id: "renewable-energy-systems-101-l05-c2",
            title: "Tidal, Wave, and Geothermal Energy",
            content:
              "Tidal energy captures the kinetic or potential energy of ocean tides using barrage systems or underwater turbines. The La Rance tidal barrage in France has operated since 1966. Wave energy devices convert the oscillating motion of ocean surface waves into electricity, though commercialization remains early-stage due to harsh marine conditions. Geothermal energy taps heat from the Earth's interior; Iceland generates about 25 percent of its electricity from geothermal plants. Enhanced geothermal systems (EGS) aim to create artificial reservoirs in hot dry rock, greatly expanding potential sites."
          },
          {
            id: "renewable-energy-systems-101-l05-c3",
            title: "Biomass Energy",
            content:
              "Biomass energy converts organic matter—wood, crop residues, animal waste, or dedicated energy crops—into heat, electricity, or biofuels through combustion, gasification, or anaerobic digestion. Biomass can be carbon-neutral when regrowth absorbs the CO₂ released during combustion, though net emissions depend on land-use change and supply-chain energy. Co-firing biomass pellets in existing coal plants offers a transitional decarbonization strategy. Biogas from anaerobic digestion of agricultural waste produces methane that can fuel generators or be upgraded to pipeline-quality renewable natural gas."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l05-f1", front: "What is pumped-storage hydropower?", back: "A storage method using two reservoirs at different elevations. Water is pumped up during surplus generation and released through turbines during peak demand; round-trip efficiency is 70–85%." },
          { id: "renewable-energy-systems-101-l05-f2", front: "Why is geothermal energy limited geographically?", back: "Conventional geothermal requires heat near the surface—typically at tectonic boundaries. Enhanced Geothermal Systems (EGS) aim to extend access by fracturing hot dry rock." },
          { id: "renewable-energy-systems-101-l05-f3", front: "Name two types of tidal energy systems.", back: "Tidal barrage (dam across an estuary using head difference) and tidal stream turbines (underwater turbines in tidal currents)." },
          { id: "renewable-energy-systems-101-l05-f4", front: "Under what condition is biomass considered carbon-neutral?", back: "When the CO₂ released during combustion is fully offset by CO₂ absorbed during regrowth of the biomass feedstock, with no net land-use change emissions." }
        ],
      metadata: {
        prompts: [
          "Compare the capacity factor and dispatchability of conventional hydro versus solar PV.",
          "Explain why pumped-storage hydro is considered a battery for the grid, even though it consumes more energy than it produces.",
          "Evaluate the pros and cons of biomass co-firing in a coal plant as a decarbonization strategy."
        ]
      },
      learningAids: [
        { id: "renewable-energy-systems-101-l05-a1", type: "practice", title: "Renewable Resource Comparison", content: "Rank hydropower, tidal, geothermal, and biomass by capacity factor, geographic flexibility, and carbon intensity using provided data tables." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L06 – Quiz: Wind & Hydro Checkpoint                               */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l06",
      title: "Wind & Hydro Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "renewable-energy-systems-101-l06-q1",
          text: "According to the Betz limit, what is the maximum fraction of wind kinetic energy a turbine can theoretically extract?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "100%" },
            { id: "b", text: "75%" },
            { id: "c", text: "59.3%" },
            { id: "d", text: "45%" }
          ],
          correctOptionId: "c",
          explanation: "The Betz limit is 16/27 ≈ 59.3%. Air must keep moving past the rotor, so extracting all kinetic energy is physically impossible."
        },
        {
          id: "renewable-energy-systems-101-l06-q2",
          text: "If wind speed doubles at a turbine site, by what factor does the available wind power increase?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "2×" },
            { id: "b", text: "4×" },
            { id: "c", text: "6×" },
            { id: "d", text: "8×" }
          ],
          correctOptionId: "d",
          explanation: "Wind power scales with the cube of wind speed (P ∝ v³). Doubling speed: 2³ = 8× more power."
        },
        {
          id: "renewable-energy-systems-101-l06-q3",
          text: "What is the primary purpose of pumped-storage hydropower?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Generating baseload electricity from river flow" },
            { id: "b", text: "Storing energy by moving water between two reservoirs at different elevations" },
            { id: "c", text: "Desalinating seawater using excess wind energy" },
            { id: "d", text: "Cooling thermal power plants" }
          ],
          correctOptionId: "b",
          explanation: "Pumped-storage hydro stores energy by pumping water uphill during surplus and releasing it through turbines during peak demand."
        },
        {
          id: "renewable-energy-systems-101-l06-q4",
          text: "Which renewable source taps heat from the Earth's interior and is geographically concentrated near tectonic boundaries?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Tidal energy" },
            { id: "b", text: "Biomass" },
            { id: "c", text: "Geothermal energy" },
            { id: "d", text: "Wave energy" }
          ],
          correctOptionId: "c",
          explanation: "Geothermal energy exploits subsurface heat, which is most accessible near tectonic plate boundaries and volcanic regions."
        }
      ],
      learningAids: [
        { id: "renewable-energy-systems-101-l06-a1", type: "mnemonic", title: "Wind Power Cube Rule", content: "Remember: Power ∝ v³. 'Cubed with the breeze'—small speed gains yield large power increases." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L07 – Video: Energy Storage                                       */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l07",
      title: "Energy Storage",
      type: "video",
      duration: 10,
      chunks: [
          {
            id: "renewable-energy-systems-101-l07-c1",
            title: "Lithium-Ion and Flow Batteries",
            content:
              "Lithium-ion batteries dominate short-duration grid storage (1–4 hours) due to high energy density, fast response, and falling costs—pack prices dropped below $140/kWh by 2024. They use lithium cobalt, nickel-manganese-cobalt (NMC), or lithium iron phosphate (LFP) cathodes. However, lithium-ion cells degrade over charge cycles, typically retaining 80 percent capacity after 3,000–5,000 cycles. Flow batteries, such as vanadium redox, store energy in liquid electrolytes in external tanks. They offer longer duration (4–12 hours), independent scaling of power and energy, and minimal degradation, but have lower energy density and higher upfront cost."
          },
          {
            id: "renewable-energy-systems-101-l07-c2",
            title: "Pumped Hydro and Compressed Air",
            content:
              "Pumped-storage hydro remains the largest form of grid storage globally, with over 160 GW installed. It offers durations from hours to days and round-trip efficiency of 70–85 percent. Compressed-air energy storage (CAES) stores energy by compressing air into underground caverns during off-peak hours, then expanding it through a turbine to generate electricity. Adiabatic CAES designs capture compression heat for reuse, boosting efficiency from 40–50 percent (diabatic) to 60–70 percent. Both technologies require specific geology, limiting deployment flexibility."
          },
          {
            id: "renewable-energy-systems-101-l07-c3",
            title: "Hydrogen Electrolysis and Round-Trip Efficiency",
            content:
              "Green hydrogen is produced by splitting water via electrolysis powered by renewable electricity. Proton-exchange membrane (PEM) and alkaline electrolyzers achieve 60–70 percent conversion efficiency. The hydrogen can be stored in tanks or underground salt caverns and later reconverted to electricity via fuel cells or gas turbines, but the full round-trip efficiency drops to 25–35 percent—far below batteries or pumped hydro. Hydrogen's value lies in long-duration and seasonal storage, industrial decarbonization, and as a feedstock for ammonia and synthetic fuels."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l07-f1", front: "What is round-trip efficiency?", back: "The percentage of energy put into a storage system that can be retrieved. Lithium-ion: ~85–90%, pumped hydro: ~70–85%, hydrogen: ~25–35%." },
          { id: "renewable-energy-systems-101-l07-f2", front: "Why do flow batteries suit long-duration storage?", back: "Energy capacity scales independently of power by simply adding more electrolyte in larger tanks, and they experience minimal degradation over many cycles." },
          { id: "renewable-energy-systems-101-l07-f3", front: "What limits hydrogen's round-trip efficiency?", back: "Energy is lost at each conversion step: electricity → hydrogen (electrolysis ~65%) → storage → electricity (fuel cell ~50%), compounding losses." },
          { id: "renewable-energy-systems-101-l07-f4", front: "How much lithium-ion capacity is typically retained after 3,000–5,000 cycles?", back: "About 80 percent of original capacity, after which the battery is considered at end-of-life for grid applications." }
        ],
      learningAids: [
        { id: "renewable-energy-systems-101-l07-a1", type: "image", title: "Storage Technology Comparison", content: "Chart comparing lithium-ion, flow batteries, pumped hydro, CAES, and hydrogen by round-trip efficiency, duration, and cost per kWh." },
        { id: "renewable-energy-systems-101-l07-a2", type: "animation", title: "Hydrogen Electrolysis Process", content: "Animated diagram showing water splitting into H₂ and O₂ in a PEM electrolyzer, storage, and reconversion via fuel cell." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L08 – Interactive: Grid Integration and Smart Grids               */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l08",
      title: "Grid Integration and Smart Grids",
      type: "interactive",
      duration: 14,
      chunks: [
          {
            id: "renewable-energy-systems-101-l08-c1",
            title: "AC Grid Frequency and Stability",
            content:
              "Electricity grids operate at a fixed frequency—50 Hz in most of the world, 60 Hz in North America. Frequency is maintained by balancing generation and load in real time; if demand exceeds supply, frequency drops. Traditional synchronous generators in fossil and nuclear plants provide rotational inertia, naturally resisting frequency changes. As inverter-based renewables (solar, wind) replace synchronous machines, grids lose inertia. Grid-forming inverters are being developed to synthetically emulate inertia, maintaining stability in systems with high renewable penetration."
          },
          {
            id: "renewable-energy-systems-101-l08-c2",
            title: "Demand Response and Curtailment",
            content:
              "Demand response programs incentivize consumers to reduce or shift electricity use during peak periods—for example, pre-cooling buildings before afternoon peaks or charging EVs overnight. This flexibility helps grid operators balance variable renewable output without building expensive peaker plants. Curtailment is the deliberate reduction of renewable generation when supply exceeds demand and storage is full. In California, solar curtailment during midday creates the 'duck curve,' where net load dips sharply at noon and ramps steeply in the evening as solar output fades."
          },
          {
            id: "renewable-energy-systems-101-l08-c3",
            title: "Microgrids and Smart Grid Technologies",
            content:
              "A microgrid is a localized energy system with its own generation, storage, and loads that can operate connected to the main grid or independently (islanded). Microgrids improve resilience for hospitals, military bases, and remote communities. Smart grid technologies include advanced metering infrastructure (AMI), distribution automation, and real-time pricing signals. Grid-scale inverters now provide reactive power support, voltage regulation, and frequency response. Together, these technologies enable grids to integrate 50–80 percent variable renewables while maintaining reliability."
          }
        ],
        flashcards: [
          { id: "renewable-energy-systems-101-l08-f1", front: "What is the 'duck curve'?", back: "A graph of net electricity load showing a deep midday dip (due to solar) and steep evening ramp, shaped like a duck. It illustrates challenges of integrating high solar penetration." },
          { id: "renewable-energy-systems-101-l08-f2", front: "How does demand response help integrate renewables?", back: "By shifting flexible loads (EV charging, HVAC, industrial processes) to times of high renewable output, reducing curtailment and peak demand." },
          { id: "renewable-energy-systems-101-l08-f3", front: "What is a grid-forming inverter?", back: "An inverter that can establish grid voltage and frequency independently, emulating the inertia of synchronous generators to maintain stability in low-inertia grids." },
          { id: "renewable-energy-systems-101-l08-f4", front: "What is a microgrid?", back: "A self-contained energy system with local generation, storage, and loads that can operate grid-connected or islanded for resilience." }
        ],
      metadata: {
        prompts: [
          "Sketch a duck curve and label the solar generation period, net load minimum, and evening ramp.",
          "Design a demand response strategy for a university campus that reduces peak load by 15 percent using HVAC pre-cooling and EV charge scheduling.",
          "Explain how a grid-forming inverter differs from a grid-following inverter and why the distinction matters at high renewable penetration."
        ]
      },
      learningAids: [
        { id: "renewable-energy-systems-101-l08-a1", type: "practice", title: "Microgrid Design Challenge", content: "Design a microgrid for a remote hospital: select generation sources, storage capacity, and a load-management strategy to maintain 99.9% uptime." }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L09 – Quiz: Storage & Grid Checkpoint                             */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l09",
      title: "Storage & Grid Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "renewable-energy-systems-101-l09-q1",
          text: "Which storage technology has the highest round-trip efficiency for short-duration applications?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Hydrogen fuel cells (~30%)" },
            { id: "b", text: "Lithium-ion batteries (~85–90%)" },
            { id: "c", text: "Compressed air (~50%)" },
            { id: "d", text: "Thermal storage (~40%)" }
          ],
          correctOptionId: "b",
          explanation: "Lithium-ion batteries achieve 85–90% round-trip efficiency, the highest among common grid storage technologies for short durations."
        },
        {
          id: "renewable-energy-systems-101-l09-q2",
          text: "What phenomenon causes the 'duck curve' in grids with high solar penetration?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Wind generation peaks at midday" },
            { id: "b", text: "Solar output sharply reduces net load at midday, followed by a steep evening ramp" },
            { id: "c", text: "Battery storage discharges at noon" },
            { id: "d", text: "Industrial demand spikes during lunch hours" }
          ],
          correctOptionId: "b",
          explanation: "Abundant midday solar drives net load very low, then as solar fades in the evening demand ramps steeply—creating the duck-shaped curve."
        },
        {
          id: "renewable-energy-systems-101-l09-q3",
          text: "Why is green hydrogen valued despite its low round-trip efficiency?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "It is the cheapest form of storage" },
            { id: "b", text: "It provides seasonal and long-duration storage and serves as a feedstock for industrial processes" },
            { id: "c", text: "It has zero energy losses" },
            { id: "d", text: "It can only be produced from natural gas" }
          ],
          correctOptionId: "b",
          explanation: "Hydrogen excels at long-duration and seasonal storage and can decarbonize industry (steel, ammonia), despite 25–35% round-trip efficiency."
        },
        {
          id: "renewable-energy-systems-101-l09-q4",
          text: "What role does a grid-forming inverter play in a renewable-heavy grid?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "It converts AC to DC for battery charging only" },
            { id: "b", text: "It synthetically provides inertia and sets grid voltage and frequency, replacing the role of synchronous generators" },
            { id: "c", text: "It increases solar panel efficiency" },
            { id: "d", text: "It measures wind speed for turbine control" }
          ],
          correctOptionId: "b",
          explanation: "Grid-forming inverters establish voltage and frequency independently, providing synthetic inertia to maintain stability as synchronous generators retire."
        }
      ],
      learningAids: [
        { id: "renewable-energy-systems-101-l09-a1", type: "mnemonic", title: "Storage Efficiency Ranking", content: "Li-ion > Pumped Hydro > CAES > Hydrogen. 'Lithium Leads, Pumped Follows, Air Compresses, Hydrogen Hopes.'" }
      ]
    },
    /* ------------------------------------------------------------------ */
    /*  L10 – Quiz: Mastery Quiz                                          */
    /* ------------------------------------------------------------------ */
    {
      id: "renewable-energy-systems-101-l10",
      title: "Mastery Quiz: Renewable Energy",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 2, understand: 2 }
      },
      questions: [
        {
          id: "renewable-energy-systems-101-l10-q1",
          text: "A region has average wind speeds of 7 m/s. A new offshore site averages 14 m/s. Compared to the original site, how much more power per swept area is available offshore?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "2× more" },
            { id: "b", text: "4× more" },
            { id: "c", text: "8× more" },
            { id: "d", text: "16× more" }
          ],
          correctOptionId: "c",
          explanation: "Wind power scales with the cube of speed. (14/7)³ = 2³ = 8× more available power per unit swept area."
        },
        {
          id: "renewable-energy-systems-101-l10-q2",
          text: "A utility installs a 100 MW / 400 MWh lithium-ion battery system with 87% round-trip efficiency. If fully charged, how much energy can it deliver back to the grid?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "400 MWh" },
            { id: "b", text: "348 MWh" },
            { id: "c", text: "460 MWh" },
            { id: "d", text: "100 MWh" }
          ],
          correctOptionId: "b",
          explanation: "Deliverable energy = stored energy × round-trip efficiency = 400 MWh × 0.87 = 348 MWh."
        },
        {
          id: "renewable-energy-systems-101-l10-q3",
          text: "Which combination best addresses the duck curve problem on a grid with 40% solar penetration?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "Build more solar panels and reduce battery storage" },
            { id: "b", text: "Deploy battery storage to absorb midday surplus and discharge during the evening ramp, plus demand response to shift flexible loads" },
            { id: "c", text: "Increase coal generation to flatten the curve" },
            { id: "d", text: "Curtail all solar output above 20% penetration" }
          ],
          correctOptionId: "b",
          explanation: "Battery storage time-shifts surplus solar energy to the evening peak, while demand response flattens the load shape—together they mitigate the duck curve."
        },
        {
          id: "renewable-energy-systems-101-l10-q4",
          text: "A remote island microgrid needs 24/7 power. Which portfolio provides the best combination of reliability, sustainability, and cost-effectiveness?",
          skillId: "renewable-energy-systems-101-skill-core",
          options: [
            { id: "a", text: "100% diesel generators" },
            { id: "b", text: "Solar PV + wind + lithium-ion battery storage + a backup diesel generator" },
            { id: "c", text: "A single large wind turbine with no storage" },
            { id: "d", text: "Geothermal only, regardless of local geology" }
          ],
          correctOptionId: "b",
          explanation: "Combining solar, wind, and battery storage covers variability while a small backup diesel ensures reliability during extended low-resource periods—a proven island microgrid architecture."
        }
      ],
      learningAids: [
        { id: "renewable-energy-systems-101-l10-a1", type: "mnemonic", title: "Mastery Checklist", content: "Energy vs Power → Solar PV → Wind → Hydro & Others → Storage → Grid Integration. 'Every Student Wins High Scores Guaranteed.'" }
      ]
    }
  ],
};
