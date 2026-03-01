import type { LearningModule } from "@/lib/modules/types";

export const science101Module: LearningModule = {
  "id": "science-101",
  "title": "Our Solar System",
  "description": "Explore planets, orbits, and solar-system patterns through guided media and interactive practice.",
  "subject": "Science",
  "tags": [
    "space",
    "astronomy",
    "interactive"
  ],
  "minAge": 6,
  "maxAge": 12,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Identify key features of inner and outer planets",
    "Explain why planets orbit the Sun in predictable paths",
    "Use evidence to compare planetary environments",
    "Classify solar-system bodies as planets, dwarf planets, or small bodies",
    "Describe the role of gravity in shaping the solar system"
  ],
  "lessons": [
    {
      "id": "s101-l01",
      "title": "The Sun and Inner Planets",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe the Sun as the center of the solar system and its source of energy",
        "Name the four inner planets and list one key feature of each",
        "Explain why the inner planets are called rocky or terrestrial planets"
      ],
      "chunks": [
        {
          "id": "s101-l01-c1",
          "title": "The Sun: Our Star",
          "content": "The Sun is a medium-sized star at the center of our solar system. It is a giant ball of hot gas — mostly hydrogen and helium — that produces energy through nuclear fusion. The Sun's gravity holds all eight planets, dwarf planets, asteroids, and comets in orbit. Without the Sun, there would be no light, no heat, and no solar system. The Sun is about 150 million kilometers from Earth, and its light takes about 8 minutes to reach us."
        },
        {
          "id": "s101-l01-c2",
          "title": "Mercury and Venus",
          "content": "Mercury is the smallest planet and the closest to the Sun. It has no atmosphere to trap heat, so its surface swings from extremely hot (430 °C in sunlight) to extremely cold (−180 °C at night). Venus is the second planet and the hottest in the solar system — even hotter than Mercury — because its thick atmosphere of carbon dioxide traps heat like a greenhouse. Venus is sometimes called Earth's 'sister planet' because the two are similar in size, but their surface conditions are very different."
        },
        {
          "id": "s101-l01-c3",
          "title": "Earth and Mars",
          "content": "Earth is the third planet from the Sun and the only one known to support life. It has liquid water on its surface, a protective atmosphere with oxygen, and a magnetic field that shields it from harmful solar radiation. Mars is the fourth planet, often called the Red Planet because iron oxide (rust) on its surface gives it a reddish color. Mars has the tallest volcano in the solar system, Olympus Mons, and a thin atmosphere mostly made of carbon dioxide. Scientists are studying whether Mars once had liquid water."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l01-f1",
          "front": "What powers the Sun?",
          "back": "Nuclear fusion — hydrogen atoms combine to form helium, releasing enormous energy as light and heat"
        },
        {
          "id": "s101-l01-f2",
          "front": "Why is Venus hotter than Mercury?",
          "back": "Venus has a thick CO₂ atmosphere that traps heat (greenhouse effect), while Mercury has no atmosphere"
        },
        {
          "id": "s101-l01-f3",
          "front": "Why is Mars called the Red Planet?",
          "back": "Iron oxide (rust) on its surface gives Mars a reddish appearance"
        },
        {
          "id": "s101-l01-f4",
          "front": "Terrestrial planet",
          "back": "A rocky planet with a solid surface — Mercury, Venus, Earth, and Mars are the four terrestrial planets"
        }
      ],
      "learningAids": [
        {
          "id": "s101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "s101-l02",
      "title": "Interactive: Planet Size Sort",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Sort planets by size and explain relative differences",
        "Group planets by composition — rocky versus gas/ice giant",
        "Identify at least one unique fact about each inner planet"
      ],
      "chunks": [
        {
          "id": "s101-l02-c1",
          "title": "Comparing Planet Sizes",
          "content": "The eight planets vary hugely in size. Jupiter is the largest — more than 1,300 Earths could fit inside it. Saturn is the second largest, followed by Uranus and Neptune. Among the inner planets, Earth is the biggest and Mercury is the smallest. A useful way to remember size order from largest to smallest is: Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, Mercury. Comparing sizes helps scientists classify planets into two main groups."
        },
        {
          "id": "s101-l02-c2",
          "title": "Rocky vs. Gas and Ice Giants",
          "content": "The inner planets — Mercury, Venus, Earth, and Mars — are called rocky or terrestrial planets because they have solid surfaces made of rock and metal. The outer planets are much larger and made mostly of gas or ice. Jupiter and Saturn are gas giants (mostly hydrogen and helium). Uranus and Neptune are ice giants (hydrogen, helium, plus water, ammonia, and methane ices). This rocky-versus-giant split is one of the most important patterns in the solar system."
        },
        {
          "id": "s101-l02-c3",
          "title": "What Planet Features Tell Us",
          "content": "Each planet's size, composition, and distance from the Sun shape its environment. Small rocky planets close to the Sun tend to be warmer and have thin or no atmospheres. Large gas and ice giants farther out are colder and have thick atmospheres with powerful storms. Jupiter's Great Red Spot is a storm larger than Earth that has lasted hundreds of years. By sorting and comparing planet features, scientists build models of how the solar system formed."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Planet Type Sort",
          "description": "Sort planets by composition and compare relative size.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "instructions": [
            "Read each planet card.",
            "Drop it into rocky or gas/ice giant.",
            "Check size ranking hints after submit."
          ],
          "data": {
            "buckets": [
              {
                "id": "rocky",
                "label": "Rocky Planet"
              },
              {
                "id": "giant",
                "label": "Gas or Ice Giant"
              }
            ],
            "items": [
              {
                "id": "mercury",
                "label": "Mercury",
                "correctBucketId": "rocky"
              },
              {
                "id": "venus",
                "label": "Venus",
                "correctBucketId": "rocky"
              },
              {
                "id": "earth",
                "label": "Earth",
                "correctBucketId": "rocky"
              },
              {
                "id": "mars",
                "label": "Mars",
                "correctBucketId": "rocky"
              },
              {
                "id": "jupiter",
                "label": "Jupiter",
                "correctBucketId": "giant"
              },
              {
                "id": "saturn",
                "label": "Saturn",
                "correctBucketId": "giant"
              },
              {
                "id": "uranus",
                "label": "Uranus",
                "correctBucketId": "giant"
              },
              {
                "id": "neptune",
                "label": "Neptune",
                "correctBucketId": "giant"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l02-f1",
          "front": "Which is the largest planet?",
          "back": "Jupiter — more than 1,300 Earths could fit inside it"
        },
        {
          "id": "s101-l02-f2",
          "front": "Gas giant",
          "back": "A large planet made mostly of hydrogen and helium — Jupiter and Saturn"
        },
        {
          "id": "s101-l02-f3",
          "front": "Ice giant",
          "back": "A large planet with hydrogen, helium, and ices (water, ammonia, methane) — Uranus and Neptune"
        },
        {
          "id": "s101-l02-f4",
          "front": "Jupiter's Great Red Spot",
          "back": "A massive storm on Jupiter larger than Earth that has been raging for hundreds of years"
        }
      ],
      "learningAids": [
        {
          "id": "s101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "s101-l03",
      "title": "Inner Planets Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of the Sun, inner planets, and planet classification"
      ],
      "questions": [
        {
          "id": "s101-l03-q1",
          "text": "Which planet is known as the Red Planet?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Mars"
            },
            {
              "id": "b",
              "text": "Venus"
            },
            {
              "id": "c",
              "text": "Jupiter"
            },
            {
              "id": "d",
              "text": "Saturn"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mars is called the Red Planet because iron oxide (rust) on its surface gives it a reddish color."
        },
        {
          "id": "s101-l03-q2",
          "text": "Which inner planet has the thickest cloud cover and is the hottest?",
          "skillId": "planet-comparison",
          "options": [
            {
              "id": "a",
              "text": "Mercury"
            },
            {
              "id": "b",
              "text": "Venus"
            },
            {
              "id": "c",
              "text": "Earth"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Venus has a thick CO₂ atmosphere that traps heat through the greenhouse effect, making it the hottest planet — even hotter than Mercury."
        },
        {
          "id": "s101-l03-q3",
          "text": "What do all inner planets have in common?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "They are rocky planets with solid surfaces."
            },
            {
              "id": "b",
              "text": "They all have rings."
            },
            {
              "id": "c",
              "text": "They are gas giants."
            },
            {
              "id": "d",
              "text": "They orbit beyond Saturn."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Mercury, Venus, Earth, and Mars are all terrestrial (rocky) planets with solid surfaces made of rock and metal."
        },
        {
          "id": "s101-l03-q4",
          "text": "What is the main source of energy for our solar system?",
          "skillId": "sun-concepts",
          "options": [
            {
              "id": "a",
              "text": "The Moon"
            },
            {
              "id": "b",
              "text": "The asteroid belt"
            },
            {
              "id": "c",
              "text": "The Sun"
            },
            {
              "id": "d",
              "text": "Saturn's rings"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The Sun produces energy through nuclear fusion and its gravity holds the entire solar system together."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "s101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "s101-l04",
      "title": "The Outer Planets",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Name the four outer planets and describe their main features",
        "Explain the difference between gas giants and ice giants",
        "Identify notable moons and ring systems"
      ],
      "chunks": [
        {
          "id": "s101-l04-c1",
          "title": "Jupiter and Saturn: The Gas Giants",
          "content": "Jupiter is the largest planet, with a mass greater than all other planets combined. It has at least 95 known moons, including Europa, which may have a liquid-water ocean beneath its icy surface. Jupiter's thick atmosphere creates colorful bands and the famous Great Red Spot storm. Saturn is the second largest planet and best known for its spectacular ring system, made of billions of pieces of ice and rock ranging from tiny grains to house-sized boulders. Saturn's moon Titan has a thick atmosphere and liquid methane lakes."
        },
        {
          "id": "s101-l04-c2",
          "title": "Uranus and Neptune: The Ice Giants",
          "content": "Uranus and Neptune are called ice giants because they contain large amounts of water, ammonia, and methane ices in addition to hydrogen and helium. Uranus is unique because it rotates on its side — its axis is tilted about 98 degrees, possibly from a massive collision long ago. Uranus appears pale blue-green due to methane in its atmosphere. Neptune is the farthest planet and has the strongest winds in the solar system, reaching speeds of over 2,000 km/h. Its moon Triton orbits in the opposite direction to Neptune's rotation."
        },
        {
          "id": "s101-l04-c3",
          "title": "Why Outer Planets Are So Different",
          "content": "The outer planets formed farther from the Sun where temperatures were low enough for gases and ices to accumulate into massive planets. Their large sizes give them strong gravitational fields that capture many moons and create ring systems. Because they are so far from the Sun, they receive much less light and heat — Neptune receives about 900 times less sunlight than Earth. The boundary between inner and outer planets is marked by the asteroid belt, a region of rocky debris between Mars and Jupiter."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l04-f1",
          "front": "Saturn's rings",
          "back": "Made of billions of pieces of ice and rock, ranging from tiny grains to house-sized boulders"
        },
        {
          "id": "s101-l04-f2",
          "front": "Why is Uranus tilted?",
          "back": "Its axis is tilted about 98° — likely from a massive collision early in solar system history, causing it to rotate on its side"
        },
        {
          "id": "s101-l04-f3",
          "front": "Europa",
          "back": "A moon of Jupiter that may have a liquid-water ocean beneath its icy surface — a target in the search for extraterrestrial life"
        },
        {
          "id": "s101-l04-f4",
          "front": "Why are outer planets so large?",
          "back": "They formed in cold regions where gases and ices could accumulate, building up massive atmospheres around rocky cores"
        }
      ],
      "learningAids": [
        {
          "id": "s101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "s101-l05",
      "title": "Interactive: Orbit Simulator",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how gravity keeps planets in orbit around the Sun",
        "Compare orbital periods of inner and outer planets",
        "Predict how changing distance affects orbital speed"
      ],
      "chunks": [
        {
          "id": "s101-l05-c1",
          "title": "What is an Orbit?",
          "content": "An orbit is the curved path one object takes around another due to gravity. Every planet in our solar system orbits the Sun. The Sun's enormous mass creates a gravitational pull that keeps all planets following their orbital paths instead of flying off into space. Without gravity, the planets would travel in straight lines and leave the solar system. An orbit is a balance between a planet's forward motion (inertia) and the Sun's gravitational pull toward its center."
        },
        {
          "id": "s101-l05-c2",
          "title": "Orbital Speed and Period",
          "content": "Planets closer to the Sun orbit faster and have shorter orbital periods (the time to complete one trip around the Sun). Mercury, the closest planet, takes only 88 Earth days to orbit the Sun, while Neptune, the farthest, takes about 165 Earth years. This pattern was described by Johannes Kepler: the farther a planet is from the Sun, the slower it moves and the longer its year. Earth's orbital period is 365.25 days — one Earth year."
        },
        {
          "id": "s101-l05-c3",
          "title": "Exploring Orbits with a Simulation",
          "content": "In this simulation, you can change a planet's distance from the Sun and observe how its speed and period change. Moving a planet closer to the Sun increases its orbital speed and shortens its orbital period. Moving it farther away slows it down and makes its year much longer. This demonstrates Kepler's laws of planetary motion — the same rules that NASA uses to plan spacecraft missions to other planets. Every planet, moon, and satellite follows these rules."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l05-ia1",
          "type": "simulation",
          "title": "Orbit Speed Sandbox",
          "description": "Adjust orbital distance and compare speed and period changes.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Choose a planet profile.",
            "Adjust distance from the Sun slider.",
            "Observe speed and period changes in the chart."
          ],
          "data": {
            "controls": [
              "distance",
              "massProfile"
            ],
            "outputs": [
              "orbitalSpeed",
              "orbitalPeriod"
            ],
            "presets": [
              "innerOrbit",
              "earthLikeOrbit",
              "outerOrbit"
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l05-f1",
          "front": "Orbit",
          "back": "The curved path one object takes around another due to gravity — planets orbit the Sun"
        },
        {
          "id": "s101-l05-f2",
          "front": "Orbital period",
          "back": "The time it takes for a planet to complete one full trip around the Sun — Earth's is 365.25 days"
        },
        {
          "id": "s101-l05-f3",
          "front": "Kepler's pattern",
          "back": "Planets farther from the Sun orbit more slowly and take longer to complete one orbit"
        },
        {
          "id": "s101-l05-f4",
          "front": "Mercury's year",
          "back": "Only 88 Earth days — the shortest orbital period because Mercury is the closest planet to the Sun"
        }
      ],
      "learningAids": [
        {
          "id": "s101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "s101-l06",
      "title": "Outer Planets & Orbits Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of outer planets, orbits, and gravitational patterns"
      ],
      "questions": [
        {
          "id": "s101-l06-q1",
          "text": "Which planet is the largest in our solar system?",
          "skillId": "planet-comparison",
          "options": [
            {
              "id": "a",
              "text": "Jupiter"
            },
            {
              "id": "b",
              "text": "Saturn"
            },
            {
              "id": "c",
              "text": "Earth"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Jupiter's mass is greater than all other planets combined, making it by far the largest planet in the solar system."
        },
        {
          "id": "s101-l06-q2",
          "text": "Which planet is famous for its bright ring system?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Neptune"
            },
            {
              "id": "b",
              "text": "Saturn"
            },
            {
              "id": "c",
              "text": "Venus"
            },
            {
              "id": "d",
              "text": "Mercury"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Saturn has the most spectacular ring system, made of billions of pieces of ice and rock."
        },
        {
          "id": "s101-l06-q3",
          "text": "What mainly keeps planets in orbit around the Sun?",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "Magnetism from Earth"
            },
            {
              "id": "b",
              "text": "The Sun's gravity"
            },
            {
              "id": "c",
              "text": "Wind in space"
            },
            {
              "id": "d",
              "text": "Planet engines"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The Sun's enormous gravitational pull keeps all planets following their orbital paths instead of flying off into space."
        },
        {
          "id": "s101-l06-q4",
          "text": "A planet farther from the Sun usually has what kind of orbit period?",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "Shorter orbit period"
            },
            {
              "id": "b",
              "text": "Same orbit period as Earth"
            },
            {
              "id": "c",
              "text": "Longer orbit period"
            },
            {
              "id": "d",
              "text": "No orbit period"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Kepler's laws show that farther planets orbit more slowly and travel longer paths, resulting in longer orbital periods."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "s101-l07",
      "title": "Dwarf Planets and Small Bodies",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define dwarf planet and explain how it differs from a planet",
        "Describe the asteroid belt and the Kuiper Belt",
        "Identify comets and explain what causes their tails"
      ],
      "chunks": [
        {
          "id": "s101-l07-c1",
          "title": "What is a Dwarf Planet?",
          "content": "A dwarf planet orbits the Sun and is massive enough for gravity to shape it into a roughly round shape, but it has not 'cleared its orbit' of other debris — meaning it shares its orbital zone with many other objects. Pluto is the most famous dwarf planet. It was considered the ninth planet until 2006 when the International Astronomical Union reclassified it. Other dwarf planets include Eris, Ceres, Makemake, and Haumea. Ceres is located in the asteroid belt, while the others orbit in or beyond the Kuiper Belt."
        },
        {
          "id": "s101-l07-c2",
          "title": "Asteroids and the Asteroid Belt",
          "content": "Asteroids are rocky objects that orbit the Sun but are too small to be considered planets or dwarf planets. Most asteroids are found in the asteroid belt, a wide region between Mars and Jupiter. The asteroid belt contains millions of asteroids, but they are spread so far apart that spacecraft can fly through without hitting any. The largest asteroid-belt object is Ceres (also classified as a dwarf planet), which is about 940 km across. Scientists study asteroids because they are leftover building blocks from the solar system's formation 4.6 billion years ago."
        },
        {
          "id": "s101-l07-c3",
          "title": "Comets and the Kuiper Belt",
          "content": "Comets are icy bodies that develop glowing tails when they approach the Sun. As a comet gets closer, solar heat vaporizes its ice, creating a bright coma (cloud) and one or two tails — a dust tail and an ion tail that always points away from the Sun, pushed by the solar wind. Many comets come from the Kuiper Belt, a ring of icy objects beyond Neptune's orbit, or from the even more distant Oort Cloud. Halley's Comet is one of the most famous and visits the inner solar system about every 76 years."
        }
      ],
      "flashcards": [
        {
          "id": "s101-l07-f1",
          "front": "Dwarf planet",
          "back": "A body that orbits the Sun and is round, but has not cleared its orbital zone of other debris — e.g., Pluto, Ceres, Eris"
        },
        {
          "id": "s101-l07-f2",
          "front": "Asteroid belt",
          "back": "A wide region of rocky debris between Mars and Jupiter containing millions of asteroids"
        },
        {
          "id": "s101-l07-f3",
          "front": "Why do comets have tails?",
          "back": "Solar heat vaporizes the comet's ice, creating a glowing coma and tails pushed away from the Sun by solar wind"
        },
        {
          "id": "s101-l07-f4",
          "front": "Kuiper Belt",
          "back": "A ring of icy objects beyond Neptune's orbit — home to Pluto, Eris, and many short-period comets"
        }
      ]
    },
    {
      "id": "s101-l08",
      "title": "Interactive: Comparing Worlds",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Compare environments of different solar-system bodies using evidence",
        "Explain how distance from the Sun affects surface conditions",
        "Evaluate which bodies might support future exploration or life"
      ],
      "chunks": [
        {
          "id": "s101-l08-c1",
          "title": "Surface Conditions Across the Solar System",
          "content": "Each world in the solar system has unique surface conditions shaped by its distance from the Sun, size, atmosphere, and composition. Mercury has almost no atmosphere and extreme temperature swings. Venus is crushed under a dense, superheated atmosphere. Earth is the only world with stable liquid water on its surface. Mars has a thin atmosphere and freezing temperatures but shows evidence of ancient riverbeds. The outer planets have no solid surface at all — their atmospheres gradually thicken into liquid interiors."
        },
        {
          "id": "s101-l08-c2",
          "title": "Moons Worth Exploring",
          "content": "Some of the most exciting places in the solar system are moons, not planets. Jupiter's moon Europa has a cracked icy surface covering what scientists believe is a global liquid-water ocean — a possible habitat for simple life. Saturn's moon Enceladus shoots geysers of water ice into space from an underground ocean. Titan, Saturn's largest moon, has a thick nitrogen atmosphere and lakes of liquid methane on its surface. These moons are top targets for future space missions looking for signs of life beyond Earth."
        },
        {
          "id": "s101-l08-c3",
          "title": "Using Evidence to Compare Worlds",
          "content": "Scientists compare worlds by measuring key factors: temperature, atmosphere composition, surface gravity, presence of water, and magnetic-field strength. A comparison table helps reveal patterns — for example, all bodies with liquid water are considered better candidates for life. By sorting and ranking these factors, students practice the same evidence-based reasoning that planetary scientists use when choosing targets for rovers, orbiters, and landers. Data-driven comparison is a core skill in science."
        }
      ],
      "interactiveActivities": [
        {
          "id": "s101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Exploration Targets Sort",
          "description": "Sort solar-system bodies by their potential for future exploration.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "instructions": [
            "Read the clue card for each solar-system body.",
            "Decide if it is a high-priority or low-priority exploration target.",
            "Explain your reasoning after sorting."
          ],
          "data": {
            "buckets": [
              {
                "id": "high",
                "label": "High-Priority Target"
              },
              {
                "id": "low",
                "label": "Lower-Priority Target"
              }
            ],
            "items": [
              {
                "id": "europa",
                "label": "Europa — possible subsurface ocean",
                "correctBucketId": "high"
              },
              {
                "id": "mars",
                "label": "Mars — evidence of ancient water",
                "correctBucketId": "high"
              },
              {
                "id": "enceladus",
                "label": "Enceladus — water geysers detected",
                "correctBucketId": "high"
              },
              {
                "id": "titan",
                "label": "Titan — thick atmosphere, methane lakes",
                "correctBucketId": "high"
              },
              {
                "id": "mercury",
                "label": "Mercury — no atmosphere, extreme temps",
                "correctBucketId": "low"
              },
              {
                "id": "venus",
                "label": "Venus — 460 °C surface, crushing pressure",
                "correctBucketId": "low"
              }
            ]
          }
        }
      ],
      "flashcards": [
        {
          "id": "s101-l08-f1",
          "front": "Europa",
          "back": "A moon of Jupiter with a cracked icy surface covering a possible global liquid-water ocean"
        },
        {
          "id": "s101-l08-f2",
          "front": "Enceladus",
          "back": "A moon of Saturn that shoots geysers of water ice into space from an underground ocean"
        },
        {
          "id": "s101-l08-f3",
          "front": "Titan",
          "back": "Saturn's largest moon — has a thick nitrogen atmosphere and lakes of liquid methane on its surface"
        },
        {
          "id": "s101-l08-f4",
          "front": "Why is liquid water important?",
          "back": "All known life requires liquid water, so bodies with water are top candidates in the search for extraterrestrial life"
        }
      ]
    },
    {
      "id": "s101-l09",
      "title": "Small Bodies & Comparison Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of dwarf planets, small bodies, and evidence-based comparison"
      ],
      "questions": [
        {
          "id": "s101-l09-q1",
          "text": "What is the main difference between a planet and a dwarf planet?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Dwarf planets are not round"
            },
            {
              "id": "b",
              "text": "Dwarf planets have not cleared their orbit of other debris"
            },
            {
              "id": "c",
              "text": "Dwarf planets do not orbit the Sun"
            },
            {
              "id": "d",
              "text": "Dwarf planets are always larger than planets"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A dwarf planet orbits the Sun and is round, but unlike a full planet, it has not cleared its orbital zone of other objects."
        },
        {
          "id": "s101-l09-q2",
          "text": "What causes a comet's tail?",
          "skillId": "small-body-concepts",
          "options": [
            {
              "id": "a",
              "text": "Rocket fuel burning behind it"
            },
            {
              "id": "b",
              "text": "Solar heat vaporizing ice, with tails pushed by solar wind"
            },
            {
              "id": "c",
              "text": "Gravity pulling dust off its surface"
            },
            {
              "id": "d",
              "text": "Lightning inside the comet"
            }
          ],
          "correctOptionId": "b",
          "explanation": "As a comet approaches the Sun, solar heat vaporizes its ice, and the solar wind pushes the gas and dust into glowing tails."
        },
        {
          "id": "s101-l09-q3",
          "text": "Which moon is considered a top target for finding life because of its possible subsurface ocean?",
          "skillId": "exploration-concepts",
          "options": [
            {
              "id": "a",
              "text": "Earth's Moon"
            },
            {
              "id": "b",
              "text": "Europa"
            },
            {
              "id": "c",
              "text": "Phobos"
            },
            {
              "id": "d",
              "text": "Ganymede"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Europa, a moon of Jupiter, has a cracked icy surface that scientists believe covers a global liquid-water ocean — a possible habitat for life."
        },
        {
          "id": "s101-l09-q4",
          "text": "Where is the asteroid belt located?",
          "skillId": "solar-system-geography",
          "options": [
            {
              "id": "a",
              "text": "Between Earth and Venus"
            },
            {
              "id": "b",
              "text": "Beyond Neptune"
            },
            {
              "id": "c",
              "text": "Between Mars and Jupiter"
            },
            {
              "id": "d",
              "text": "Inside Mercury's orbit"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The asteroid belt is a wide region of rocky debris located between the orbits of Mars and Jupiter."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "s101-l10",
      "title": "Mastery Quiz: Solar System Tour",
      "type": "quiz",
      "duration": 12,
      "objectives": [
        "Synthesize all solar-system concepts from the module"
      ],
      "questions": [
        {
          "id": "s101-l10-q1",
          "text": "Which statement best compares inner and outer planets?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Inner planets are mostly rocky; outer planets are mostly gas or ice giants."
            },
            {
              "id": "b",
              "text": "All planets are rocky."
            },
            {
              "id": "c",
              "text": "All planets have rings."
            },
            {
              "id": "d",
              "text": "Outer planets are all smaller than inner planets."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The inner planets (Mercury–Mars) are small and rocky, while the outer planets (Jupiter–Neptune) are much larger gas or ice giants."
        },
        {
          "id": "s101-l10-q2",
          "text": "Which planet is closest to the Sun?",
          "skillId": "planet-identification",
          "options": [
            {
              "id": "a",
              "text": "Venus"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Mercury"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Mercury orbits closest to the Sun, completing one orbit in just 88 Earth days."
        },
        {
          "id": "s101-l10-q3",
          "text": "Why do outer planets take longer to orbit the Sun?",
          "skillId": "orbit-concepts",
          "options": [
            {
              "id": "a",
              "text": "Their orbital paths are larger, so each orbit takes more time."
            },
            {
              "id": "b",
              "text": "They stop moving in winter."
            },
            {
              "id": "c",
              "text": "They have no gravity."
            },
            {
              "id": "d",
              "text": "They spin backward every day."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Farther planets have much longer orbital paths and move more slowly, so their years are much longer — Neptune takes 165 Earth years."
        },
        {
          "id": "s101-l10-q4",
          "text": "Which body is classified as a dwarf planet?",
          "skillId": "planet-classification",
          "options": [
            {
              "id": "a",
              "text": "Pluto"
            },
            {
              "id": "b",
              "text": "Earth"
            },
            {
              "id": "c",
              "text": "Jupiter"
            },
            {
              "id": "d",
              "text": "Mars"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Pluto was reclassified as a dwarf planet in 2006 because it has not cleared its orbital zone in the Kuiper Belt."
        },
        {
          "id": "s101-l10-q5",
          "text": "What is one key role of the Sun in the solar system?",
          "skillId": "sun-concepts",
          "options": [
            {
              "id": "a",
              "text": "It provides gravity and energy that hold the system together."
            },
            {
              "id": "b",
              "text": "It orbits Earth once each day."
            },
            {
              "id": "c",
              "text": "It is a cold rocky planet."
            },
            {
              "id": "d",
              "text": "It has no influence on planets."
            }
          ],
          "correctOptionId": "a",
          "explanation": "The Sun's gravity keeps all planets in orbit, and its nuclear fusion provides the light and heat that drive conditions across the solar system."
        },
        {
          "id": "s101-l10-q6",
          "text": "Scientists consider Europa a top exploration target because:",
          "skillId": "exploration-concepts",
          "options": [
            {
              "id": "a",
              "text": "It has the tallest volcano in the solar system"
            },
            {
              "id": "b",
              "text": "It may have a liquid-water ocean beneath its icy surface"
            },
            {
              "id": "c",
              "text": "It is the closest moon to Earth"
            },
            {
              "id": "d",
              "text": "It has a thick oxygen atmosphere"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Europa's cracked icy surface likely covers a global liquid-water ocean, making it one of the most promising places to search for life beyond Earth."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 6,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 2,
          "analyze": 1
        }
      }
    }
  ]
};
