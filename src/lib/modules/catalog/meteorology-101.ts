import type { LearningModule } from "@/lib/modules/types";

export const Meteorology101Module: LearningModule = {
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
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Identify the composition and layered structure of Earth's atmosphere including the troposphere, stratosphere, mesosphere, and thermosphere",
    "Explain how solar radiation, albedo, and the greenhouse effect drive differential heating of Earth's surface and atmosphere",
    "Describe the processes of evaporation, condensation, and adiabatic cooling that lead to cloud formation and precipitation",
    "Analyze how pressure gradients, the Coriolis effect, and friction combine to produce local and global wind patterns",
    "Compare the characteristics of continental and maritime air masses and explain how frontal boundaries generate weather changes",
    "Identify the formation mechanisms, hazards, and forecasting tools associated with thunderstorms, tornadoes, and hurricanes",
    "Demonstrate mastery of foundational meteorology concepts through integrated checkpoint assessments"
  ],
  "lessons": [
    {
      "id": "meteorology-101-l01",
      "title": "The Atmosphere",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe the composition of Earth's atmosphere",
        "Identify the four major atmospheric layers and their defining characteristics",
        "Explain environmental lapse rate and its relationship to atmospheric stability"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l01-c1",
          "title": "Atmospheric Composition",
          "content": "Earth's atmosphere is a thin envelope of gases held in place by gravity. By volume, dry air is approximately 78% nitrogen (N₂) and 21% oxygen (O₂), with the remaining 1% consisting of argon, carbon dioxide, neon, helium, and trace gases. Water vapor is variable — from nearly 0% over deserts to about 4% in humid tropical regions — yet it is the most meteorologically important gas because it carries latent heat and forms clouds. Carbon dioxide, although only about 0.042% by volume, is a powerful greenhouse gas that absorbs and re-emits longwave radiation, warming the lower atmosphere. Aerosols — tiny solid or liquid particles such as dust, sea salt, and pollution — serve as cloud condensation nuclei on which water droplets form."
        },
        {
          "id": "meteorology-101-l01-c2",
          "title": "Layers of the Atmosphere",
          "content": "The atmosphere is divided into layers defined by how temperature changes with altitude. The troposphere extends from the surface to roughly 12 km and contains about 80% of atmospheric mass; temperature decreases with height at an average environmental lapse rate of 6.5 °C per kilometer, making it the layer where nearly all weather occurs. Above it, the stratosphere reaches to about 50 km and contains the ozone layer, which absorbs ultraviolet radiation and causes temperature to increase with altitude. The mesosphere extends from 50 to 85 km, where temperature again falls with height, making its upper boundary — the mesopause — the coldest point in the atmosphere at around −90 °C. The thermosphere extends above 85 km; here, sparse gas molecules absorb intense solar radiation and temperatures can exceed 1,000 °C, though the air is too thin to feel warm."
        },
        {
          "id": "meteorology-101-l01-c3",
          "title": "Pressure, Density, and Lapse Rates",
          "content": "Atmospheric pressure is the weight of the air column above a given point. At sea level, standard pressure is 1,013.25 hPa (29.92 inches of mercury). Pressure decreases roughly exponentially with altitude — it drops by about half every 5.5 km. Air density decreases correspondingly, which is why aircraft cabins must be pressurized at cruise altitudes. The environmental lapse rate (ELR) describes the actual temperature decrease observed on a given day, while the dry adiabatic lapse rate (DALR) of 9.8 °C/km and the saturated (moist) adiabatic lapse rate (SALR) of roughly 5–6 °C/km describe how a parcel of air cools as it rises. When the ELR exceeds the DALR, the atmosphere is absolutely unstable and promotes strong convection — a key driver of thunderstorm development."
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
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "meteorology-101-l02",
      "title": "Solar Radiation and Heat Transfer",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe how insolation varies with latitude, season, and time of day",
        "Define albedo and explain its effect on surface energy balance",
        "Explain the greenhouse effect and the role of differential heating in driving weather"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l02-c1",
          "title": "Insolation and the Solar Constant",
          "content": "Insolation — incoming solar radiation — is the energy from the Sun that reaches Earth's surface. At the top of the atmosphere, the solar constant averages about 1,361 W/m². However, the amount of energy actually received at the surface depends on the Sun's angle: at the equator, sunlight strikes nearly perpendicular, concentrating energy over a small area, while at high latitudes the same beam is spread across a larger area, reducing intensity. Earth's 23.5° axial tilt causes the seasons — when the Northern Hemisphere tilts toward the Sun, it receives more direct insolation and experiences summer. Daily insolation also varies with the length of daylight hours; polar regions receive continuous sunlight in their respective summers but months of darkness in winter."
        },
        {
          "id": "meteorology-101-l02-c2",
          "title": "Albedo and Surface Energy Balance",
          "content": "Albedo is the fraction of incoming solar radiation reflected by a surface back into space, expressed as a value between 0 (no reflection) and 1 (total reflection). Fresh snow has an albedo of 0.80–0.90, meaning it reflects most sunlight, while dark ocean water has an albedo of only 0.06–0.10, absorbing the vast majority of energy. Forests, grasslands, and deserts fall between these extremes. The global average albedo of Earth including clouds is about 0.30 — meaning roughly 30% of incoming solar energy is reflected. Surfaces that absorb more radiation warm up and re-emit energy as longwave (infrared) radiation, heating the overlying air through conduction and convection. This differential absorption is why asphalt becomes scorching on a sunny day while nearby grass stays cooler."
        },
        {
          "id": "meteorology-101-l02-c3",
          "title": "The Greenhouse Effect and Differential Heating",
          "content": "Earth's surface emits longwave infrared radiation upward. Greenhouse gases — primarily water vapor, carbon dioxide, methane, and nitrous oxide — absorb a portion of this outgoing radiation and re-emit it in all directions, including back toward the surface. This natural greenhouse effect raises Earth's average surface temperature from a frigid −18 °C to a habitable +15 °C. Differential heating results because land heats and cools faster than water, dark surfaces absorb more than light ones, and equatorial regions receive more insolation than poles. These temperature contrasts create pressure differences that drive winds and ocean currents, ultimately powering the global weather machine. Without differential heating, there would be no weather at all."
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
          "id": "meteorology-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
        "Distinguish between humidity, relative humidity, and dew point temperature",
        "Explain adiabatic cooling processes and how they lead to cloud formation",
        "Classify major cloud types and their associated precipitation"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l04-c1",
          "title": "Humidity and Dew Point",
          "content": "Humidity describes the amount of water vapor in the air. Specific humidity measures the mass of water vapor per kilogram of air and remains constant as air moves unless moisture is added or removed. Relative humidity (RH) is the ratio of the air's actual water vapor content to the maximum it can hold at that temperature, expressed as a percentage. Warm air can hold exponentially more moisture than cold air — this relationship is described by the Clausius–Clapeyron equation. Dew point temperature is the temperature to which air must be cooled (at constant pressure) for saturation to occur. A high dew point indicates considerable moisture; dew points above 20 °C feel oppressively humid, while those below 10 °C feel dry. When air temperature equals the dew point, relative humidity is 100% and condensation begins."
        },
        {
          "id": "meteorology-101-l04-c2",
          "title": "Adiabatic Processes and Cloud Formation",
          "content": "Clouds form when moist air rises and cools adiabatically — that is, without exchanging heat with its surroundings. As a parcel of unsaturated air ascends, it cools at the dry adiabatic lapse rate (DALR) of approximately 9.8 °C per kilometer. Once the parcel cools to its dew point — reaching 100% relative humidity — condensation begins on cloud condensation nuclei (CCN) such as dust, sea salt, or sulfate particles. This altitude is called the lifted condensation level (LCL) and marks the cloud base. Above the LCL, the parcel continues rising but now cools at the slower saturated adiabatic lapse rate (SALR, roughly 5–6 °C/km) because latent heat released during condensation partially offsets the cooling. The four main lifting mechanisms are orographic lift, frontal lift, convergence, and convective (localized) heating."
        },
        {
          "id": "meteorology-101-l04-c3",
          "title": "Cloud Types and Precipitation",
          "content": "Clouds are classified by altitude and shape. High clouds (above ~6 km) include cirrus (thin, wispy ice-crystal clouds), cirrostratus (thin sheets producing halos), and cirrocumulus (small puffs). Middle clouds (2–6 km) include altostratus (gray layered sheets) and altocumulus (white or gray patches). Low clouds (below ~2 km) include stratus (uniform gray layers producing drizzle), stratocumulus (lumpy gray rolls), and nimbostratus (thick, dark, rain-producing layers). Cumulus clouds develop vertically through convection; when they grow into cumulonimbus towers extending above 12 km, they produce heavy rain, lightning, hail, and sometimes tornadoes. Precipitation forms via the Bergeron (ice-crystal) process in cold clouds or the collision-coalescence process in warm clouds, ultimately producing rain, snow, sleet, or freezing rain depending on the temperature profile."
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
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "meteorology-101-l05",
      "title": "Wind and Pressure Systems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain how pressure gradient force drives air from high to low pressure",
        "Describe the Coriolis effect and its influence on wind direction in each hemisphere",
        "Outline the three-cell model of global atmospheric circulation and the location of jet streams"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l05-c1",
          "title": "Pressure Gradients and Wind",
          "content": "Wind is the horizontal movement of air driven primarily by differences in atmospheric pressure. The pressure gradient force (PGF) acts perpendicular to isobars (lines of equal pressure) and pushes air from regions of higher pressure toward regions of lower pressure. The steeper the pressure gradient — shown by closely spaced isobars on a weather map — the stronger the wind. Near the surface, friction slows wind and causes it to cross isobars at an angle toward low pressure (typically 15–45° depending on terrain roughness). Above the friction layer (~1 km altitude), wind flows nearly parallel to isobars as geostrophic wind, where the PGF is balanced by the Coriolis effect. Understanding the PGF is essential because every wind pattern on Earth ultimately traces back to unequal heating creating pressure differences."
        },
        {
          "id": "meteorology-101-l05-c2",
          "title": "The Coriolis Effect",
          "content": "The Coriolis effect is an apparent deflection of moving objects caused by Earth's rotation. In the Northern Hemisphere, moving air is deflected to the right of its path; in the Southern Hemisphere, to the left. The magnitude of the Coriolis effect depends on wind speed and latitude — it is zero at the equator and maximum at the poles. This deflection prevents air from flowing directly from high to low pressure, causing it to spiral. Around a Northern Hemisphere low-pressure center, air spirals counterclockwise inward (cyclonic flow), while around a high-pressure center it spirals clockwise outward (anticyclonic flow). These patterns reverse in the Southern Hemisphere. The Coriolis effect is critical for understanding the rotation of large weather systems, the formation of mid-latitude cyclones, and the spiraling bands of hurricanes."
        },
        {
          "id": "meteorology-101-l05-c3",
          "title": "Global Circulation and Jet Streams",
          "content": "Differential heating between the equator and poles drives a global circulation pattern described by the three-cell model. The Hadley cell spans from the equator to roughly 30° latitude: warm equatorial air rises at the Intertropical Convergence Zone (ITCZ), flows poleward aloft, cools, and sinks around 30° forming subtropical high-pressure belts and the trade winds. The Ferrel cell (30°–60°) is driven indirectly; surface westerlies flow poleward while upper-level air returns equatorward. The Polar cell (60°–90°) features cold, dense polar air sinking at the poles and flowing equatorward as polar easterlies. At the boundaries between cells — particularly around 30° and 60° — strong upper-level temperature contrasts produce jet streams: narrow bands of fast-flowing air (160–320 km/h) at altitudes of 9–12 km. The polar jet stream steers mid-latitude weather systems and its position shifts seasonally."
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
          "id": "meteorology-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
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
        "Classify air masses by their source region properties — continental/maritime and polar/tropical",
        "Describe cold, warm, occluded, and stationary fronts and the weather each produces",
        "Explain the basic stages of mid-latitude cyclogenesis"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l07-c1",
          "title": "Air Mass Classification",
          "content": "An air mass is a large body of air — often spanning thousands of kilometers — that has relatively uniform temperature and moisture characteristics acquired from its source region. Air masses are classified along two axes: moisture and temperature. Continental (c) air masses form over land and are dry, while maritime (m) air masses form over oceans and are moist. Temperature is designated polar (P) for cold source regions and tropical (T) for warm ones. North America's key air masses include continental polar (cP) from Canada — cold and dry; maritime polar (mP) from the North Pacific — cool and moist; maritime tropical (mT) from the Gulf of Mexico — warm and humid; and continental tropical (cT) from the Desert Southwest — hot and dry. An additional arctic (A) designation applies to extremely cold air from the Arctic basin. As an air mass moves away from its source, it modifies — for instance, cP air crossing the Great Lakes picks up moisture and warms at its base, spawning lake-effect snow."
        },
        {
          "id": "meteorology-101-l07-c2",
          "title": "Frontal Boundaries",
          "content": "A front is the boundary between two air masses of different temperature and moisture properties. A cold front occurs when a cold air mass advances and undercuts warmer air; the steep frontal slope forces rapid lifting, producing a narrow band of cumulonimbus clouds, heavy showers, possible thunderstorms, and a sharp temperature drop followed by clearing skies and rising pressure. A warm front occurs when advancing warm air slides over retreating cold air along a gentle slope; this produces a wide band (300–500 km) of layered clouds — cirrus, then altostratus, then nimbostratus — with steady precipitation hours ahead of the surface front. A stationary front forms when neither air mass advances and can produce days of overcast skies and drizzle. An occluded front occurs when a faster-moving cold front overtakes a warm front, lifting the warm sector entirely off the surface — common in mature mid-latitude cyclones."
        },
        {
          "id": "meteorology-101-l07-c3",
          "title": "Mid-Latitude Cyclogenesis",
          "content": "Mid-latitude cyclones are large low-pressure systems (1,000–2,000 km across) that develop along the polar front — the boundary between polar and tropical air. The Norwegian cyclone model describes their life cycle in stages. In the initial stage, a kink forms along the stationary polar front where wind shear creates a wave. During development, the wave amplifies into a well-defined low with a warm front extending to the northeast and a cold front trailing to the southwest, separated by a warm sector. The system deepens as upper-level divergence ahead of a trough evacuates mass, lowering surface pressure (a process enhanced by jet-stream dynamics). In the mature stage, precipitation wraps around the center, and the cold front begins overtaking the warm front. Finally, during occlusion, the warm air is entirely lifted off the surface, the low weakens (fills), and the system dissipates over 1–3 days. These cyclones are the primary weather producers for the mid-latitudes."
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
      ]
    },
    {
      "id": "meteorology-101-l08",
      "title": "Severe Weather",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Describe the life cycle of a thunderstorm from cumulus to dissipating stage",
        "Explain the formation conditions and rating of tornadoes and tropical cyclones",
        "Identify forecasting tools used to detect and warn of severe weather"
      ],
      "chunks": [
        {
          "id": "meteorology-101-l08-c1",
          "title": "Thunderstorms",
          "content": "Thunderstorms require three ingredients: moisture, instability, and a lifting mechanism. An ordinary (air-mass) thunderstorm progresses through three stages — cumulus (dominated by updrafts, lasting ~15 minutes), mature (coexisting updrafts and downdrafts, heaviest rain, lightning, and possible hail; ~15–30 minutes), and dissipating (dominated by downdrafts, rain weakens). These storms are generally short-lived. Severe thunderstorms, defined by the National Weather Service as producing winds ≥ 58 mph, hail ≥ 1 inch, or a tornado, are often supercells — large, rotating storms sustained by a persistent, tilted updraft called a mesocyclone. Supercells form in environments with strong vertical wind shear (speed and direction changing with height) and high convective available potential energy (CAPE), typically exceeding 1,500 J/kg. They can persist for hours and produce the most violent tornadoes."
        },
        {
          "id": "meteorology-101-l08-c2",
          "title": "Tornadoes and Hurricanes",
          "content": "Tornadoes are violently rotating columns of air extending from a cumulonimbus cloud to the ground. Most significant tornadoes form within the mesocyclone of a supercell thunderstorm — a rear-flank downdraft wraps around the updraft base, tightening rotation into a vortex. Tornadoes are rated on the Enhanced Fujita (EF) Scale from EF0 (65–85 mph, light damage) to EF5 (> 200 mph, incredible destruction). Hurricanes (tropical cyclones) are much larger rotating systems fueled by warm ocean water (≥ 26.5 °C). They form over tropical oceans when organized thunderstorm clusters develop a warm-core low with sustained winds ≥ 74 mph. Hurricanes are rated on the Saffir–Simpson scale from Category 1 (74–95 mph) to Category 5 (≥ 157 mph). Storm surge — the dome of ocean water pushed ashore by wind — is typically the deadliest hazard."
        },
        {
          "id": "meteorology-101-l08-c3",
          "title": "Winter Storms and Forecasting Tools",
          "content": "Winter storms produce snow, sleet, freezing rain, and ice depending on the vertical temperature profile. Snow occurs when the air column remains below freezing from cloud to ground. Sleet forms when snowflakes melt in a warm layer aloft and then refreeze into ice pellets before reaching the surface. Freezing rain results when the warm layer is deep enough to fully melt snowflakes into raindrops that remain liquid until striking a sub-freezing surface, creating an ice glaze. Meteorologists use several tools to forecast severe weather: Doppler radar detects precipitation intensity and radial wind velocity, revealing rotation (mesocyclones) within storms. Weather satellites (geostationary and polar-orbiting) provide visible, infrared, and water-vapor imagery. Radiosondes — instrument packages launched on weather balloons twice daily — measure temperature, humidity, pressure, and wind through the atmospheric column. Numerical weather prediction (NWP) models such as the GFS and ECMWF assimilate observations and project atmospheric conditions forward in time."
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
