import type { LearningModule } from "@/lib/modules/types";

export const meteorology_101_Module: LearningModule = {
  "id": "meteorology-101",
  "title": "Meteorology Foundations",
  "description": "Explore the science of weather and atmospheric phenomena — from the structure of the atmosphere and solar energy transfer to cloud formation, pressure systems, air masses, fronts, and severe weather events including thunderstorms, tornadoes, and hurricanes.",
  "subject": "Science",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "science",
    "meteorology"
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
    "Identify the composition and layered structure of Earth's atmosphere including the troposphere, stratosphere, mesosphere, and thermosphere.",
    "Explain how solar radiation, albedo, and the greenhouse effect drive differential heating of Earth's surface and atmosphere.",
    "Describe the processes of evaporation, condensation, and adiabatic cooling that lead to cloud formation and precipitation.",
    "Analyze how pressure gradients, the Coriolis effect, and friction combine to produce local and global wind patterns.",
    "Compare the characteristics of continental and maritime air masses and explain how frontal boundaries generate weather changes.",
    "Identify the formation mechanisms, hazards, and forecasting tools associated with thunderstorms, tornadoes, and hurricanes.",
    "Demonstrate mastery of foundational meteorology concepts through integrated checkpoint assessments."
  ],
  "lessons": [
    {
      "id": "meteorology-101-l01",
      "title": "The Atmosphere",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe the composition of Earth's atmosphere.",
        "Identify the four major atmospheric layers and their defining characteristics.",
        "Explain the environmental lapse rate and its relationship to atmospheric stability."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l01-c1",
          "title": "Atmospheric Composition",
          "content": "The atmosphere surrounding Earth is a thin blanket of gases held in place by gravity. The air we breathe is primarily composed of nitrogen (about 78%) and oxygen (about 21%). The remaining 1% consists of other gases like argon, carbon dioxide, and trace amounts of others. A key variable component is water vapor, which can range from nearly 0% in deserts to 4% in humid tropical regions. Water vapor is crucial for weather, as it forms clouds and transports heat energy. Carbon dioxide, though a small fraction (about 0.042%), is a vital greenhouse gas that traps heat, keeping Earth warm enough to support life. The atmosphere also contains tiny solid and liquid particles called aerosols, such as dust and sea salt. These particles are important because they provide surfaces for water vapor to condense upon, which is essential for cloud formation."
        },
        {
          "id": "meteorology-101-l01-c2",
          "title": "Layers of the Atmosphere",
          "content": "The atmosphere is divided into distinct layers based on how temperature changes with altitude. The lowest layer, the troposphere, extends from the surface to about 12 km (7.5 miles). It contains about 80% of the atmosphere's mass and is where all weather occurs. In the troposphere, temperature generally decreases with height. Above this is the stratosphere, stretching to about 50 km (31 miles). The stratosphere contains the ozone layer, which absorbs harmful ultraviolet (UV) radiation from the Sun. This absorption causes the temperature to increase with altitude in this layer. The next layer is the mesosphere, from 50 km to 85 km (53 miles), where temperatures drop again, making it the coldest layer. Finally, the thermosphere extends hundreds of kilometers upward. The air here is extremely thin, and despite very high temperatures due to solar radiation, it wouldn't feel hot because there are too few molecules to transfer heat effectively. This is also where auroras occur."
        },
        {
          "id": "meteorology-101-l01-c3",
          "title": "Pressure, Density, and Lapse Rates",
          "content": "Atmospheric pressure is the weight of the air above a certain point. At sea level, standard pressure is about 1,013.25 hectopascals (hPa). As you go higher in the atmosphere, both pressure and air density decrease rapidly. This is why airplane cabins must be pressurized for safety and comfort at high altitudes. The rate at which temperature changes with altitude is called the lapse rate. The environmental lapse rate (ELR) is the actual temperature change on a given day. For a rising parcel of air, we consider two other rates: the dry adiabatic lapse rate (DALR) of 9.8 °C/km for unsaturated air, and the saturated adiabatic lapse rate (SALR) of about 5-6 °C/km for saturated (cloudy) air. Comparing the ELR to these adiabatic rates determines atmospheric stability. If the ELR is greater than the DALR, the atmosphere is unstable, which promotes strong vertical air currents and can lead to thunderstorm development."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l01-f1",
          "front": "What are the two most abundant gases in Earth's atmosphere by volume?",
          "back": "Nitrogen (N₂) at ~78% and oxygen (O₂) at ~21%."
        },
        {
          "id": "meteorology-101-l01-f2",
          "front": "In which atmospheric layer does virtually all weather occur, and what is its average lapse rate?",
          "back": "The troposphere, with an average environmental lapse rate of about 6.5 °C per kilometer."
        },
        {
          "id": "meteorology-101-l01-f3",
          "front": "What is standard sea-level atmospheric pressure?",
          "back": "1,013.25 hPa (hectopascals), equivalent to 29.92 inches of mercury."
        },
        {
          "id": "meteorology-101-l01-f4",
          "front": "Why is water vapor considered the most important atmospheric gas for weather?",
          "back": "It carries latent heat released during condensation, drives cloud formation and precipitation, and is a potent greenhouse gas."
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l01-a1",
          "type": "diagram",
          "title": "Layers of the Atmosphere",
          "content": "A diagram showing the four main atmospheric layers (troposphere, stratosphere, mesosphere, thermosphere) with their corresponding altitude ranges and temperature profiles."
        }
      ]
    },
    {
      "id": "meteorology-101-l02",
      "title": "Solar Radiation and Heat Transfer",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe how insolation varies with latitude, season, and time of day.",
        "Define albedo and explain its effect on surface energy balance.",
        "Explain the greenhouse effect and the role of differential heating in driving weather."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l02-c1",
          "title": "Insolation and the Solar Constant",
          "content": "Insolation, short for incoming solar radiation, is the energy from the Sun that reaches Earth. At the top of the atmosphere, this energy averages about 1,361 watts per square meter, a value known as the solar constant. The amount of energy reaching the ground varies based on several factors. The angle of the sun is key: at the equator, sunlight strikes directly, concentrating energy over a small area and leading to higher temperatures. At higher latitudes, the same beam of sunlight spreads over a larger area, reducing its intensity and resulting in cooler temperatures. Earth's 23.5-degree axial tilt causes the seasons. When a hemisphere is tilted toward the Sun, it receives more direct sunlight, leading to summer; when tilted away, it experiences winter. The length of daylight also affects the total insolation received, with polar regions experiencing continuous daylight in summer and prolonged darkness in winter."
        },
        {
          "id": "meteorology-101-l02-c2",
          "title": "Albedo and Surface Energy Balance",
          "content": "Albedo is the fraction of sunlight a surface reflects. It's measured on a scale from 0 (no reflection) to 1 (total reflection). For example, fresh snow has a high albedo (0.80–0.90), reflecting most sunlight, while dark ocean water has a low albedo (0.06–0.10), absorbing most sunlight. Earth's average albedo, including clouds, is about 0.30, meaning 30% of incoming solar energy is reflected back to space. The remaining 70% is absorbed, heating the planet's surface and atmosphere. Surfaces that absorb more energy get warmer and then release that energy as longwave infrared radiation. This process heats the air above them through conduction (direct contact) and convection (movement of warm air). This is why dark asphalt gets much hotter on a sunny day than nearby grass."
        },
        {
          "id": "meteorology-101-l02-c3",
          "title": "The Greenhouse Effect and Differential Heating",
          "content": "As Earth's surface radiates longwave infrared energy, certain gases in the atmosphere—known as greenhouse gases (like water vapor, carbon dioxide, and methane)—absorb some of this outgoing energy. They then re-radiate it in all directions, including back toward the surface. This natural greenhouse effect is essential for life, raising Earth's average temperature from a frigid -18°C to a more habitable +15°C. Differential heating occurs because different surfaces heat up at different rates. Land heats and cools faster than water, and equatorial regions receive more intense solar energy than the poles. This uneven heating creates temperature and pressure differences across the globe, which in turn drive winds and ocean currents, powering the entire global weather system."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l02-f1",
          "front": "What is the approximate value of the solar constant at the top of the atmosphere?",
          "back": "About 1,361 W/m²."
        },
        {
          "id": "meteorology-101-l02-f2",
          "front": "Define albedo and give two examples of surfaces with very different albedo values.",
          "back": "Albedo is the fraction of sunlight reflected by a surface. Fresh snow has a high albedo (~0.85) while dark ocean water has a low albedo (~0.08)."
        },
        {
          "id": "meteorology-101-l02-f3",
          "front": "What temperature would Earth's surface average without the natural greenhouse effect?",
          "back": "About −18 °C (0 °F), compared to the actual average of +15 °C (59 °F)."
        },
        {
          "id": "meteorology-101-l02-f4",
          "front": "Why does the Sun's angle affect the intensity of insolation at different latitudes?",
          "back": "At low angles (high latitudes), the same beam of sunlight is spread over a larger surface area, reducing energy per unit area."
        }
      ],
      "interactiveActivities": [
        {
          "id": "meteorology-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Heat Transfer Mechanisms",
          "description": "Sort each example into the correct heat-transfer category.",
          "instructions": [
            "Drag each item into the bucket that describes the primary heat-transfer mechanism it illustrates."
          ],
          "buckets": [
            "Radiation",
            "Conduction",
            "Convection"
          ],
          "items": [
            {
              "text": "Sunlight warming Earth's surface from 150 million km away",
              "bucket": "Radiation"
            },
            {
              "text": "Hot sand burning bare feet at the beach",
              "bucket": "Conduction"
            },
            {
              "text": "Warm air rising in a cumulus cloud updraft",
              "bucket": "Convection"
            },
            {
              "text": "Earth emitting infrared energy toward space",
              "bucket": "Radiation"
            },
            {
              "text": "A metal spoon heating up in a pot of boiling water",
              "bucket": "Conduction"
            },
            {
              "text": "Sea breeze carrying cool ocean air inland during the afternoon",
              "bucket": "Convection"
            },
            {
              "text": "A greenhouse glass pane warming objects inside by trapping longwave radiation",
              "bucket": "Radiation"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l02-a2",
          "type": "diagram",
          "title": "The Greenhouse Effect",
          "content": "An illustration showing how shortwave solar radiation passes through the atmosphere while longwave radiation emitted by the Earth is absorbed and re-radiated by greenhouse gases, warming the surface."
        }
      ]
    },
    {
      "id": "meteorology-101-l03",
      "title": "Atmosphere & Energy Checkpoint",
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
          "id": "meteorology-101-l03-q1",
          "text": "Which atmospheric layer contains the ozone layer and features a temperature increase with altitude?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Troposphere"
            },
            {
              "id": "b",
              "text": "Stratosphere"
            },
            {
              "id": "c",
              "text": "Mesosphere"
            },
            {
              "id": "d",
              "text": "Thermosphere"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The stratosphere (roughly 12–50 km altitude) contains the ozone layer, which absorbs UV radiation and causes a temperature inversion — temperature rising with height."
        },
        {
          "id": "meteorology-101-l03-q2",
          "text": "Earth's average albedo is approximately 0.30. What does this mean?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "30% of incoming solar radiation is reflected back to space"
            },
            {
              "id": "b",
              "text": "30% of outgoing longwave radiation is absorbed by clouds"
            },
            {
              "id": "c",
              "text": "70% of incoming solar radiation is reflected back to space"
            },
            {
              "id": "d",
              "text": "70% of the atmosphere is composed of reflective gases"
            }
          ],
          "correctOptionId": "a",
          "explanation": "An albedo of 0.30 means 30% of the incoming solar radiation is reflected by Earth's atmosphere and surface combined, while 70% is absorbed."
        },
        {
          "id": "meteorology-101-l03-q3",
          "text": "If the environmental lapse rate is 10 °C/km and the dry adiabatic lapse rate is 9.8 °C/km, what is the atmospheric stability condition?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Absolutely stable"
            },
            {
              "id": "b",
              "text": "Conditionally unstable"
            },
            {
              "id": "c",
              "text": "Absolutely unstable"
            },
            {
              "id": "d",
              "text": "Neutral"
            }
          ],
          "correctOptionId": "c",
          "explanation": "When the environmental lapse rate exceeds the dry adiabatic lapse rate (10 > 9.8 °C/km), the atmosphere is absolutely unstable — a rising parcel remains warmer than its surroundings and continues to accelerate upward."
        },
        {
          "id": "meteorology-101-l03-q4",
          "text": "Which gas is the most variable in the atmosphere yet plays the largest role in weather processes?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Oxygen"
            },
            {
              "id": "b",
              "text": "Argon"
            },
            {
              "id": "c",
              "text": "Carbon dioxide"
            },
            {
              "id": "d",
              "text": "Water vapor"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Water vapor ranges from nearly 0% to about 4% of the atmosphere. It drives cloud formation, releases latent heat during condensation, and is a powerful greenhouse gas — making it the most important gas for weather."
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "meteorology-101-l04",
      "title": "Moisture and Cloud Formation",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Distinguish between humidity, relative humidity, and dew point temperature.",
        "Explain adiabatic cooling processes and how they lead to cloud formation.",
        "Classify major cloud types and their associated precipitation."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l04-c1",
          "title": "Humidity and Dew Point",
          "content": "Humidity measures the amount of water vapor in the air. Relative humidity (RH) is a percentage that compares the actual amount of water vapor present to the maximum amount the air could hold at that temperature. Warm air can hold significantly more moisture than cold air. The dew point temperature is the temperature to which air must be cooled to become saturated (100% RH). At this point, condensation begins. A high dew point (e.g., above 20°C) indicates humid air and feels muggy, while a low dew point (e.g., below 10°C) feels dry and crisp. When the air temperature cools to the dew point, fog or dew can form. Understanding these concepts is key to predicting cloud formation and precipitation."
        },
        {
          "id": "meteorology-101-l04-c2",
          "title": "Adiabatic Processes and Cloud Formation",
          "content": "Clouds form when moist air rises, expands, and cools. This cooling, which occurs without heat exchange with the surroundings, is called adiabatic cooling. As a parcel of unsaturated air rises, it cools at the dry adiabatic lapse rate (DALR) of 9.8°C per kilometer. If it cools to its dew point, it becomes saturated, and condensation begins. This occurs on tiny particles called cloud condensation nuclei (CCN), like dust or salt. The altitude where this happens is the lifted condensation level (LCL), which marks the cloud base. Above the LCL, the now-saturated air continues to rise and cool at the slower saturated adiabatic lapse rate (SALR) of about 5-6°C/km. The slower rate is due to the release of latent heat during condensation, which partially offsets the cooling. Air can be forced to rise through orographic lift (over mountains), frontal lift (at air mass boundaries), convergence (air flowing together), or convective heating (sun-warmed ground)."
        },
        {
          "id": "meteorology-101-l04-c3",
          "title": "Cloud Types and Precipitation",
          "content": "Clouds are classified by their altitude and shape. High clouds (above 6 km), made of ice crystals, include thin, wispy cirrus; sheet-like cirrostratus; and patchy cirrocumulus. Middle clouds (2-6 km) include gray, layered altostratus and patchy altocumulus. Low clouds (below 2 km) include uniform gray stratus (which can produce drizzle), lumpy stratocumulus, and dark, rain-producing nimbostratus. Clouds with vertical development, like cumulus, are formed by convection. When they grow into towering cumulonimbus clouds, they can produce severe weather like heavy rain, lightning, hail, and tornadoes. Precipitation forms through two main processes. In cold clouds, the Bergeron process involves ice crystals growing at the expense of supercooled water droplets. In warm clouds, the collision-coalescence process involves liquid droplets colliding and merging until they are heavy enough to fall as rain."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l04-f1",
          "front": "What is the dew point temperature?",
          "back": "The temperature to which air must be cooled at constant pressure to reach saturation (100% relative humidity) and the onset of condensation."
        },
        {
          "id": "meteorology-101-l04-f2",
          "front": "What is the dry adiabatic lapse rate (DALR)?",
          "back": "About 9.8 °C per kilometer — the rate at which an unsaturated parcel of rising air cools due to expansion."
        },
        {
          "id": "meteorology-101-l04-f3",
          "front": "Name the three main altitude-based cloud categories and give one example of each.",
          "back": "High clouds (e.g., cirrus), middle clouds (e.g., altostratus), low clouds (e.g., stratus)."
        },
        {
          "id": "meteorology-101-l04-f4",
          "front": "What are cloud condensation nuclei (CCN)?",
          "back": "Tiny particles — such as dust, sea salt, or sulfate aerosols — onto which water vapor condenses to form cloud droplets."
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l04-a1",
          "type": "diagram",
          "title": "Cloud Identification Chart",
          "content": "A visual chart illustrating the ten main cloud genera, categorized by altitude (high, middle, low) and form (cumulus, stratus, cirrus), including clouds with vertical development."
        }
      ]
    },
    {
      "id": "meteorology-101-l05",
      "title": "Wind and Pressure Systems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain how pressure gradient force drives air from high to low pressure.",
        "Describe the Coriolis effect and its influence on wind direction in each hemisphere.",
        "Outline the three-cell model of global atmospheric circulation and the location of jet streams."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l05-c1",
          "title": "Pressure Gradients and Wind",
          "content": "Wind is the movement of air caused by differences in atmospheric pressure. Air naturally flows from areas of high pressure to areas of low pressure, driven by the pressure gradient force (PGF). On a weather map, lines of equal pressure called isobars illustrate this gradient. Closely spaced isobars indicate a steep pressure gradient and strong winds, while widely spaced isobars mean a weak gradient and light winds. Near the surface, friction with the ground slows the wind and causes it to cross isobars at an angle toward the low pressure. Higher up in the atmosphere (above ~1 km), friction is negligible. There, the wind, known as the geostrophic wind, flows parallel to the isobars as the PGF is balanced by the Coriolis effect."
        },
        {
          "id": "meteorology-101-l05-c2",
          "title": "The Coriolis Effect",
          "content": "The Coriolis effect is an apparent force caused by Earth's rotation that deflects moving objects, including wind. In the Northern Hemisphere, it deflects objects to the right of their path of motion; in the Southern Hemisphere, it deflects them to the left. The effect is strongest at the poles and zero at the equator. This deflection prevents wind from flowing directly from high to low pressure. Instead, wind spirals around pressure centers. In the Northern Hemisphere, this results in counterclockwise (cyclonic) flow into low-pressure systems and clockwise (anticyclonic) flow out of high-pressure systems. The directions are reversed in the Southern Hemisphere. The Coriolis effect is fundamental to the formation and behavior of large-scale weather systems like mid-latitude cyclones and hurricanes."
        },
        {
          "id": "meteorology-101-l05-c3",
          "title": "Global Circulation and Jet Streams",
          "content": "Uneven heating between the equator and poles drives a global atmospheric circulation pattern, often simplified by the three-cell model. The Hadley cell (0°-30° latitude) involves warm air rising at the Intertropical Convergence Zone (ITCZ) near the equator, flowing poleward aloft, sinking in the subtropics (~30°), and returning to the equator as the trade winds. The Polar cell (60°-90°) has cold, dense air sinking at the poles, flowing toward the equator as polar easterlies, and rising around 60°. The Ferrel cell (30°-60°) is an indirect circulation between the other two, characterized by surface westerlies. At the boundaries between these cells, strong upper-air temperature gradients create jet streams—narrow ribbons of very fast-moving air (160-320 km/h) at 9-12 km altitude. The polar jet stream is particularly important for steering mid-latitude weather systems."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l05-f1",
          "front": "What force drives wind, and how is its strength shown on a weather map?",
          "back": "The pressure gradient force (PGF) drives wind from high to low pressure. On a map, closely spaced isobars indicate a steep gradient and strong winds."
        },
        {
          "id": "meteorology-101-l05-f2",
          "front": "In which direction does the Coriolis effect deflect moving air in the Northern Hemisphere?",
          "back": "To the right of the direction of motion."
        },
        {
          "id": "meteorology-101-l05-f3",
          "front": "Name the three global circulation cells from equator to pole.",
          "back": "Hadley cell (0°–30°), Ferrel cell (30°–60°), and Polar cell (60°–90°)."
        },
        {
          "id": "meteorology-101-l05-f4",
          "front": "What are jet streams and at what altitude are they typically found?",
          "back": "Jet streams are narrow ribbons of fast-moving air (160–320 km/h) located at about 9–12 km altitude, found at the boundaries between global circulation cells."
        }
      ],
      "interactiveActivities": [
        {
          "id": "meteorology-101-l05-a1",
          "type": "matching_pairs",
          "title": "Wind Systems and Features",
          "description": "Match each wind-related concept with its correct description.",
          "instructions": [
            "Connect each term on the left with its matching definition on the right."
          ],
          "pairs": [
            {
              "left": "Pressure gradient force",
              "right": "Drives air from high to low pressure perpendicular to isobars"
            },
            {
              "left": "Coriolis effect",
              "right": "Apparent deflection of moving air due to Earth's rotation"
            },
            {
              "left": "Geostrophic wind",
              "right": "Upper-level wind flowing parallel to isobars when PGF balances Coriolis"
            },
            {
              "left": "Trade winds",
              "right": "Surface easterlies blowing from subtropical highs toward the ITCZ"
            },
            {
              "left": "Polar jet stream",
              "right": "Fast upper-level wind band near 60° latitude that steers mid-latitude storms"
            },
            {
              "left": "ITCZ",
              "right": "Low-pressure belt near the equator where trade winds converge and air rises"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l05-a2",
          "type": "diagram",
          "title": "Global Atmospheric Circulation",
          "content": "A diagram of the Earth showing the three-cell model (Hadley, Ferrel, Polar) in each hemisphere, along with the resulting surface wind belts (trade winds, westerlies, polar easterlies) and pressure zones."
        }
      ]
    },
    {
      "id": "meteorology-101-l06",
      "title": "Moisture & Wind Checkpoint",
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
          "id": "meteorology-101-l06-q1",
          "text": "An air parcel rises unsaturated from the surface. At what rate does it cool, and what is this rate called?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "6.5 °C/km — the environmental lapse rate"
            },
            {
              "id": "b",
              "text": "9.8 °C/km — the dry adiabatic lapse rate"
            },
            {
              "id": "c",
              "text": "5 °C/km — the saturated adiabatic lapse rate"
            },
            {
              "id": "d",
              "text": "3.5 °C/km — the isothermal lapse rate"
            }
          ],
          "correctOptionId": "b",
          "explanation": "An unsaturated rising air parcel cools at the dry adiabatic lapse rate (DALR) of approximately 9.8 °C per kilometer due to expansion as pressure decreases with altitude."
        },
        {
          "id": "meteorology-101-l06-q2",
          "text": "Which cloud genus is a towering vertical cloud capable of producing thunderstorms, hail, and tornadoes?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cirrostratus"
            },
            {
              "id": "b",
              "text": "Altostratus"
            },
            {
              "id": "c",
              "text": "Nimbostratus"
            },
            {
              "id": "d",
              "text": "Cumulonimbus"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Cumulonimbus clouds extend vertically from the low levels to above 12 km and produce heavy rain, lightning, hail, strong winds, and occasionally tornadoes."
        },
        {
          "id": "meteorology-101-l06-q3",
          "text": "Around a low-pressure center in the Northern Hemisphere, surface winds spiral in which direction?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Clockwise and outward"
            },
            {
              "id": "b",
              "text": "Counterclockwise and inward"
            },
            {
              "id": "c",
              "text": "Clockwise and inward"
            },
            {
              "id": "d",
              "text": "Counterclockwise and outward"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In the Northern Hemisphere, the Coriolis effect deflects wind to the right, causing surface air flowing toward a low-pressure center to spiral counterclockwise inward (cyclonic flow)."
        },
        {
          "id": "meteorology-101-l06-q4",
          "text": "What forms at the boundary between the Hadley and Ferrel circulation cells near 30° latitude?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The Intertropical Convergence Zone"
            },
            {
              "id": "b",
              "text": "Subtropical high-pressure belts"
            },
            {
              "id": "c",
              "text": "Polar easterly winds"
            },
            {
              "id": "d",
              "text": "The polar jet stream"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Air that rose at the equatorial ITCZ cools and sinks around 30° latitude, creating persistent subtropical high-pressure belts (such as the Bermuda-Azores and Pacific highs) that produce arid conditions and the trade winds."
        }
      ]
    },
    {
      "id": "meteorology-101-l07",
      "title": "Air Masses and Fronts",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Classify air masses by their source region properties — continental/maritime and polar/tropical.",
        "Describe cold, warm, occluded, and stationary fronts and the weather each produces.",
        "Explain the basic stages of mid-latitude cyclogenesis."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l07-c1",
          "title": "Air Mass Classification",
          "content": "An air mass is a large body of air with uniform temperature and moisture characteristics. They are classified by their source region. The moisture classification is either continental (c), meaning dry and formed over land, or maritime (m), meaning moist and formed over water. The temperature classification is polar (P) for cold, tropical (T) for warm, or arctic (A) for extremely cold. In North America, common air masses include cold, dry continental polar (cP) from Canada; cool, moist maritime polar (mP) from the North Pacific; warm, humid maritime tropical (mT) from the Gulf of Mexico; and hot, dry continental tropical (cT) from the Desert Southwest. As air masses move, they can be modified; for example, a cP air mass moving over the Great Lakes can pick up moisture and cause lake-effect snow."
        },
        {
          "id": "meteorology-101-l07-c2",
          "title": "Frontal Boundaries",
          "content": "A front is the boundary between two different air masses. A cold front occurs when a cold air mass advances on a warm air mass. Its steep slope forces warm air to rise rapidly, often producing a narrow band of heavy showers and thunderstorms. A warm front forms when warm air glides over a retreating cold air mass. Its gentle slope creates a wide area of layered clouds and steady, lighter precipitation that can begin hours before the front arrives. A stationary front is a non-moving boundary between two air masses, often resulting in prolonged cloudy and damp weather. An occluded front forms when a faster-moving cold front overtakes a warm front, lifting the warm air completely off the surface. This is a common feature of a mature mid-latitude cyclone."
        },
        {
          "id": "meteorology-101-l07-c3",
          "title": "Mid-Latitude Cyclogenesis",
          "content": "Mid-latitude cyclones are large low-pressure systems that form along the polar front, the boundary between cold polar and warm tropical air. Their life cycle is often described by the Norwegian cyclone model. It begins with a wave or kink forming on a stationary front due to wind shear. This wave develops into a low-pressure center with a distinct warm front and cold front. As the cyclone matures, upper-level divergence (often enhanced by the jet stream) causes the surface pressure to drop, strengthening the storm. Precipitation wraps around the low-pressure center. The final stage is occlusion, where the cold front catches up to the warm front, lifting the warm sector off the ground. This cuts the storm off from its energy source, causing it to weaken and dissipate. The entire process typically takes one to three days."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l07-f1",
          "front": "What do the letters 'mT' designate in air mass classification?",
          "back": "Maritime tropical — an air mass that formed over warm ocean waters and is warm and humid."
        },
        {
          "id": "meteorology-101-l07-f2",
          "front": "How does a cold front differ from a warm front in terms of slope and weather?",
          "back": "A cold front has a steep slope causing rapid lifting, a narrow band of heavy showers, and sharp temperature drops. A warm front has a gentle slope producing wide areas of steady, lighter precipitation."
        },
        {
          "id": "meteorology-101-l07-f3",
          "front": "What is an occluded front?",
          "back": "An occluded front forms when a fast-moving cold front overtakes a warm front, lifting the warm air entirely off the surface — it signals a mature or decaying cyclone."
        },
        {
          "id": "meteorology-101-l07-f4",
          "front": "Where do mid-latitude cyclones typically develop?",
          "back": "Along the polar front — the boundary between cold polar air and warm tropical air — typically between 40°–60° latitude."
        }
      ],
      "learningAids": [
        {
          "id": "meteorology-101-l07-a1",
          "type": "diagram",
          "title": "Types of Fronts",
          "content": "Cross-sectional diagrams illustrating the structure of cold, warm, stationary, and occluded fronts, showing air mass movement and typical cloud/precipitation patterns."
        },
        {
          "id": "meteorology-101-l07-a2",
          "type": "diagram",
          "title": "Mid-Latitude Cyclone Life Cycle",
          "content": "A sequence of diagrams showing the stages of cyclogenesis according to the Norwegian model, from the initial wave to the final occluded and dissipating storm."
        }
      ]
    },
    {
      "id": "meteorology-101-l08",
      "title": "Severe Weather",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe the life cycle of a thunderstorm from cumulus to dissipating stage.",
        "Explain the formation conditions and rating of tornadoes and tropical cyclones.",
        "Identify forecasting tools used to detect and warn of severe weather."
      ],
      "chunks": [
        {
          "id": "meteorology-101-l08-c1",
          "title": "Thunderstorms",
          "content": "Thunderstorms require three ingredients: moisture, an unstable atmosphere, and a lifting mechanism. Their life cycle has three stages. The cumulus stage is dominated by a strong updraft of rising warm air. The mature stage is the most intense, featuring both updrafts and downdrafts, leading to heavy rain, lightning, and sometimes hail. The dissipating stage occurs when the downdrafts cut off the updraft, causing the storm to weaken and rain out. A thunderstorm is classified as severe by the National Weather Service if it produces winds of 58 mph or higher, hail of one inch or larger, or a tornado. The most powerful severe storms are supercells, which are large, rotating thunderstorms sustained by a tilted, rotating updraft called a mesocyclone. They can last for hours and produce the most violent tornadoes."
        },
        {
          "id": "meteorology-101-l08-c2",
          "title": "Tornadoes and Hurricanes",
          "content": "Tornadoes are violently rotating columns of air extending from a cumulonimbus cloud to the ground. They most often form within supercell thunderstorms. Tornado intensity is rated on the Enhanced Fujita (EF) Scale, from EF0 (light damage) to EF5 (catastrophic destruction), based on wind speed estimated from damage. Hurricanes (or tropical cyclones) are large, rotating storm systems with a warm core that form over warm ocean waters (at least 26.5°C or 80°F). They are characterized by sustained winds of 74 mph or more. Hurricane intensity is rated on the Saffir-Simpson Hurricane Wind Scale from Category 1 to 5. A major hazard of hurricanes is the storm surge, a large dome of water pushed ashore by the storm's winds, which can cause extensive coastal flooding."
        },
        {
          "id": "meteorology-101-l08-c3",
          "title": "Winter Storms and Forecasting Tools",
          "content": "Winter storms produce snow, sleet, or freezing rain, depending on the atmosphere's temperature profile. Snow falls when the entire air column is below freezing. Sleet (ice pellets) forms when snowflakes melt in a warm layer aloft and then refreeze in a cold layer near the surface. Freezing rain occurs when raindrops fall through a shallow layer of subfreezing air at the surface, freezing on contact with objects. Meteorologists use several tools to forecast severe weather. Doppler radar detects precipitation intensity and wind velocity, revealing storm rotation. Weather satellites provide images to track storm systems. Radiosondes, launched on weather balloons, measure temperature, humidity, pressure, and wind profiles. This data is fed into numerical weather prediction (NWP) models, which are complex computer simulations that forecast future atmospheric conditions."
        }
      ],
      "flashcards": [
        {
          "id": "meteorology-101-l08-f1",
          "front": "What three ingredients are required for thunderstorm development?",
          "back": "Moisture, atmospheric instability (positive CAPE), and a lifting mechanism (e.g., front, orographic lift, or surface heating)."
        },
        {
          "id": "meteorology-101-l08-f2",
          "front": "On which scale are tornadoes rated, and what is the range?",
          "back": "The Enhanced Fujita (EF) Scale, from EF0 (65–85 mph, light damage) to EF5 (> 200 mph, incredible destruction)."
        },
        {
          "id": "meteorology-101-l08-f3",
          "front": "What minimum sea surface temperature is generally required for hurricane formation?",
          "back": "Approximately 26.5 °C (about 80 °F)."
        },
        {
          "id": "meteorology-101-l08-f4",
          "front": "How does Doppler radar help meteorologists identify tornado potential?",
          "back": "Doppler radar measures radial wind velocity; strong rotation signatures (velocity couplets) within a storm indicate a mesocyclone, which can spawn tornadoes."
        }
      ],
      "interactiveActivities": [
        {
          "id": "meteorology-101-l08-a1",
          "type": "sorting_buckets",
          "title": "Severe Weather Classification",
          "description": "Sort each weather phenomenon or hazard into the correct storm category.",
          "instructions": [
            "Drag each item into the bucket that best matches the type of severe weather event it describes."
          ],
          "buckets": [
            "Thunderstorm / Tornado",
            "Hurricane / Tropical Cyclone",
            "Winter Storm"
          ],
          "items": [
            {
              "text": "Mesocyclone rotation within a supercell",
              "bucket": "Thunderstorm / Tornado"
            },
            {
              "text": "Storm surge — dome of ocean water pushed ashore",
              "bucket": "Hurricane / Tropical Cyclone"
            },
            {
              "text": "Freezing rain creating an ice glaze on surfaces",
              "bucket": "Winter Storm"
            },
            {
              "text": "Large hail exceeding 1 inch in diameter",
              "bucket": "Thunderstorm / Tornado"
            },
            {
              "text": "Eye wall with the strongest winds in the system",
              "bucket": "Hurricane / Tropical Cyclone"
            },
            {
              "text": "Sleet — ice pellets formed by refreezing aloft",
              "bucket": "Winter Storm"
            },
            {
              "text": "EF Scale rating based on wind damage indicators",
              "bucket": "Thunderstorm / Tornado"
            },
            {
              "text": "Warm-core low fueled by sea surface temperatures ≥ 26.5 °C",
              "bucket": "Hurricane / Tropical Cyclone"
            }
          ]
        }
      ]
    },
    {
      "id": "meteorology-101-l09",
      "title": "Fronts & Severe Weather Checkpoint",
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
          "id": "meteorology-101-l09-q1",
          "text": "Which air mass classification describes air that formed over cold land and is typically dry?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "mT (maritime tropical)"
            },
            {
              "id": "b",
              "text": "cP (continental polar)"
            },
            {
              "id": "c",
              "text": "mP (maritime polar)"
            },
            {
              "id": "d",
              "text": "cT (continental tropical)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Continental polar (cP) air masses form over cold land surfaces (e.g., central Canada) and are cold and dry. Continental means dry (formed over land) and polar means cold."
        },
        {
          "id": "meteorology-101-l09-q2",
          "text": "A fast-moving cold front is overtaking a warm front. What type of front is forming?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Stationary front"
            },
            {
              "id": "b",
              "text": "Dry line"
            },
            {
              "id": "c",
              "text": "Occluded front"
            },
            {
              "id": "d",
              "text": "Sea-breeze front"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An occluded front forms when a faster cold front catches and merges with a warm front, lifting the warm air entirely off the surface. This is typical of mature mid-latitude cyclones."
        },
        {
          "id": "meteorology-101-l09-q3",
          "text": "A thunderstorm is classified as 'severe' by the NWS when it produces which of the following?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Any amount of lightning and rain"
            },
            {
              "id": "b",
              "text": "Winds ≥ 58 mph, hail ≥ 1 inch, or a tornado"
            },
            {
              "id": "c",
              "text": "Rainfall exceeding 1 inch per hour"
            },
            {
              "id": "d",
              "text": "Cloud tops extending above 8 km altitude"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The NWS defines a severe thunderstorm as one producing wind gusts ≥ 58 mph (50 knots), hail ≥ 1 inch in diameter, or a tornado."
        },
        {
          "id": "meteorology-101-l09-q4",
          "text": "What atmospheric sounding instrument is launched on a weather balloon twice daily to measure temperature, humidity, and wind profiles?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Doppler radar"
            },
            {
              "id": "b",
              "text": "ASOS surface station"
            },
            {
              "id": "c",
              "text": "Radiosonde"
            },
            {
              "id": "d",
              "text": "Wind profiler"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Radiosondes are lightweight instrument packages attached to weather balloons launched at 00Z and 12Z each day from hundreds of stations worldwide. They measure temperature, humidity, pressure, and wind speed/direction as they ascend through the atmosphere."
        }
      ]
    },
    {
      "id": "meteorology-101-l10",
      "title": "Mastery Quiz: Meteorology Foundations",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "understand": 2,
          "apply": 1,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "meteorology-101-l10-q1",
          "text": "A surface weather map shows tightly packed isobars over the central United States. What does this pattern indicate?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Light winds and clear skies"
            },
            {
              "id": "b",
              "text": "A strong pressure gradient and high wind speeds"
            },
            {
              "id": "c",
              "text": "High humidity and fog formation"
            },
            {
              "id": "d",
              "text": "Temperature inversion with calm air"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Tightly packed (closely spaced) isobars indicate a steep pressure gradient, which produces strong winds. The closer the isobars, the greater the pressure gradient force and the faster the wind."
        },
        {
          "id": "meteorology-101-l10-q2",
          "text": "Why does the saturated adiabatic lapse rate (SALR) produce slower cooling than the dry adiabatic lapse rate (DALR)?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Saturated air is denser and resists expansion"
            },
            {
              "id": "b",
              "text": "Latent heat released during condensation partially offsets the cooling"
            },
            {
              "id": "c",
              "text": "Clouds reflect incoming solar radiation back into the parcel"
            },
            {
              "id": "d",
              "text": "The Coriolis effect reduces vertical motion in saturated parcels"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When a saturated air parcel rises and water vapor condenses, latent heat is released, warming the parcel and reducing the net cooling rate to about 5–6 °C/km compared to the DALR of 9.8 °C/km."
        },
        {
          "id": "meteorology-101-l10-q3",
          "text": "A hurricane weakens rapidly after making landfall. Which factor BEST explains this weakening?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The Coriolis effect reverses direction over land"
            },
            {
              "id": "b",
              "text": "Land removes the warm ocean water energy source and increases surface friction"
            },
            {
              "id": "c",
              "text": "Upper-level jet streams always dissipate hurricanes over land"
            },
            {
              "id": "d",
              "text": "Atmospheric pressure increases immediately over all land surfaces"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hurricanes are fueled by latent heat from warm ocean-water evaporation. Over land, this moisture supply is cut off, and increased surface friction disrupts the storm's circulation, causing rapid weakening."
        },
        {
          "id": "meteorology-101-l10-q4",
          "text": "During a mid-latitude cyclone's life cycle, upper-level divergence ahead of a trough is most directly responsible for which process?",
          "skillId": "meteorology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increasing surface pressure and suppressing clouds"
            },
            {
              "id": "b",
              "text": "Removing mass aloft and lowering surface pressure, intensifying the cyclone"
            },
            {
              "id": "c",
              "text": "Shifting the polar jet stream northward"
            },
            {
              "id": "d",
              "text": "Causing the warm front to occlude immediately"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Upper-level divergence removes air mass from the column above the surface low, reducing surface pressure and intensifying (deepening) the cyclone in a process closely linked to the jet-stream dynamics atop the developing wave."
        }
      ]
    }
  ]
};
