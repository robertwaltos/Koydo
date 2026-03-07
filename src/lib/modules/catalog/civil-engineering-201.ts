import type { LearningModule } from "@/lib/modules/types";

export const civil_engineering_201_Module: LearningModule = {
  "id": "civil-engineering-201",
  "title": "Civil Engineering II",
  "description": "Intermediate civil design concepts focusing on structural analysis, geotechnics, transportation systems, and construction practice.",
  "subject": "Civil Engineering",
  "tags": [
    "curriculum",
    "interactive",
    "structures",
    "geotechnics",
    "transportation"
  ],
  "minAge": 16,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en",
    "es",
    "fr",
    "de",
    "ar",
    "hi",
    "zh",
    "ja",
    "ko",
    "ru"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Analyze load distributions and forces in structural systems.",
    "Evaluate soil mechanics and determine appropriate foundation types.",
    "Design basic transportation systems considering traffic flow and safety.",
    "Demonstrate mastery of intermediate civil engineering concepts through applied practice."
  ],
  "lessons": [
    {
      "id": "civil-engineering-201-l01",
      "title": "Structural Analysis Fundamentals",
      "type": "video",
      "duration": 10,
      "lessonImagePrompt": "A photorealistic image of a modern steel bridge under construction, showing exposed trusses and beams against a clear blue sky, high detail, 8k.",
      "conceptVideoPrompt": "A 3D animated sequence showing the distribution of weight across a suspension bridge, with glowing arrows indicating tension and compression forces, cinematic lighting.",
      "learningAids": [
        {
          "id": "civil-engineering-201-l01-a1",
          "type": "image",
          "title": "Forces in Structures",
          "content": "Visual summary of tension, compression, shear, and bending moments."
        },
        {
          "id": "civil-engineering-201-l01-a2",
          "type": "animation",
          "title": "Load Path Animation",
          "content": "Step-by-step walkthrough of how gravity loads travel from a roof down to the foundation."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l01.png"
    },
    {
      "id": "civil-engineering-201-l02",
      "title": "Designing Load-Bearing Structures",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "An interactive blueprint interface showing a skyscraper's structural grid, glowing nodes highlighting stress points, modern UI style.",
      "conceptVideoPrompt": "A time-lapse animation of a skyscraper's steel frame being assembled floor by floor, emphasizing the load-bearing columns.",
      "metadata": {
        "prompts": [
          "Identify the primary load-bearing elements in the provided schematic.",
          "Calculate the basic dead load for the highlighted floor section.",
          "Propose a structural reinforcement for the identified high-stress node."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-201-l02-a1",
          "type": "practice",
          "title": "Truss Design Challenge",
          "content": "Use the interactive tool to add members to a truss until it can support the required 50kN load."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l02.png"
    },
    {
      "id": "civil-engineering-201-l03",
      "title": "Checkpoint: Structures",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A close-up of a civil engineer's desk with structural calculation sheets, a scientific calculator, and a small 3D-printed model of a truss bridge.",
      "conceptVideoPrompt": "A slow pan over a completed truss bridge, transitioning into a wireframe view showing structural integrity and load distribution.",
      "questions": [
        {
          "id": "civil-engineering-201-l03-q1",
          "text": "In structural engineering, what does 'tension' refer to?",
          "skillId": "civil-engineering-201-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "A pulling force that stretches a material."
            },
            {
              "id": "b",
              "text": "A pushing force that squeezes a material."
            },
            {
              "id": "c",
              "text": "A twisting force applied to a structural member."
            },
            {
              "id": "d",
              "text": "A force that causes layers of material to slide past one another."
            }
          ],
          "correctOptionId": "a",
          "explanation": "Tension is a pulling force that acts to lengthen or stretch a structural element, such as a cable in a suspension bridge."
        },
        {
          "id": "civil-engineering-201-l03-q2",
          "text": "Which material is best known for its high compressive strength but relatively low tensile strength?",
          "skillId": "civil-engineering-201-skill-materials",
          "options": [
            {
              "id": "a",
              "text": "Steel"
            },
            {
              "id": "b",
              "text": "Concrete"
            },
            {
              "id": "c",
              "text": "Wood"
            },
            {
              "id": "d",
              "text": "Aluminum"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Concrete can withstand immense squeezing (compression) but cracks easily when pulled (tension), which is why it is often reinforced with steel."
        },
        {
          "id": "civil-engineering-201-l03-q3",
          "text": "What is the primary purpose of a load-bearing wall?",
          "skillId": "civil-engineering-201-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "To divide interior spaces for aesthetic purposes."
            },
            {
              "id": "b",
              "text": "To house electrical wiring and plumbing."
            },
            {
              "id": "c",
              "text": "To support the weight of the elements above it and transfer it to the foundation."
            },
            {
              "id": "d",
              "text": "To provide thermal insulation for the building."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Load-bearing walls are critical structural elements that carry compressive loads from roofs and upper floors down to the foundation."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-201-l03-a1",
          "type": "mnemonic",
          "title": "Force Types",
          "content": "Tension Tears apart, Compression Crushes, Shear Slides."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l03.png"
    },
    {
      "id": "civil-engineering-201-l04",
      "title": "Soil Mechanics & Foundations",
      "type": "video",
      "duration": 12,
      "lessonImagePrompt": "A cross-section illustration of earth layers beneath a building foundation, showing topsoil, clay, and solid bedrock, highly detailed.",
      "conceptVideoPrompt": "An animation demonstrating soil liquefaction during an earthquake, showing how solid ground temporarily behaves like a liquid, causing structures to tilt.",
      "learningAids": [
        {
          "id": "civil-engineering-201-l04-a1",
          "type": "image",
          "title": "Foundation Types",
          "content": "Diagram comparing shallow foundations (spread footings) and deep foundations (piles/caissons)."
        },
        {
          "id": "civil-engineering-201-l04-a2",
          "type": "animation",
          "title": "Soil Settlement",
          "content": "Animation showing primary and secondary consolidation of clay soils under a new building load."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l04.png"
    },
    {
      "id": "civil-engineering-201-l05",
      "title": "Geotechnical Site Analysis",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A digital tablet displaying a topographical map with soil sample data points, resting on a dusty construction site.",
      "conceptVideoPrompt": "A 3D simulation of a deep foundation pile being driven into the ground, showing friction along the sides and end-bearing resistance at the tip.",
      "metadata": {
        "prompts": [
          "Review the borehole log and identify the depth of the bedrock.",
          "Select the appropriate foundation type based on the soil bearing capacity.",
          "Calculate the expected settlement over 10 years."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-201-l05-a1",
          "type": "practice",
          "title": "Site Investigation Simulator",
          "content": "Place boreholes on the virtual site map to discover the subsurface profile while staying within budget."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l05.png"
    },
    {
      "id": "civil-engineering-201-l06",
      "title": "Checkpoint: Geotechnics",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A geotechnical testing laboratory setup with soil samples in glass cylinders, sieves, and a triaxial testing apparatus.",
      "conceptVideoPrompt": "A visual breakdown of a retaining wall holding back soil, with glowing force vectors showing lateral earth pressure increasing with depth.",
      "questions": [
        {
          "id": "civil-engineering-201-l06-q1",
          "text": "What is soil liquefaction?",
          "skillId": "civil-engineering-201-skill-geotechnics",
          "options": [
            {
              "id": "a",
              "text": "The process of mixing water with soil to create concrete."
            },
            {
              "id": "b",
              "text": "A phenomenon where saturated soil substantially loses strength and stiffness due to applied stress, like an earthquake."
            },
            {
              "id": "c",
              "text": "The intentional flooding of a construction site to compact the soil."
            },
            {
              "id": "d",
              "text": "The natural drainage of water through porous rock layers."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Liquefaction occurs when vibrations (like earthquakes) increase water pressure between soil particles, causing the soil to act like a liquid."
        },
        {
          "id": "civil-engineering-201-l06-q2",
          "text": "Under what condition are deep foundations (such as piles) typically required?",
          "skillId": "civil-engineering-201-skill-geotechnics",
          "options": [
            {
              "id": "a",
              "text": "When the surface soils are strong and bedrock is very deep."
            },
            {
              "id": "b",
              "text": "When building a lightweight, single-story residential home."
            },
            {
              "id": "c",
              "text": "When surface soils are weak or highly compressible, and strong strata are located deep underground."
            },
            {
              "id": "d",
              "text": "When the construction budget is extremely limited."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Deep foundations bypass weak, unstable top layers of soil to transfer the building's load to deeper, more stable rock or dense soil."
        },
        {
          "id": "civil-engineering-201-l06-q3",
          "text": "What primary force must a retaining wall be designed to resist?",
          "skillId": "civil-engineering-201-skill-geotechnics",
          "options": [
            {
              "id": "a",
              "text": "Lateral earth pressure"
            },
            {
              "id": "b",
              "text": "Upward buoyant force"
            },
            {
              "id": "c",
              "text": "Wind uplift"
            },
            {
              "id": "d",
              "text": "Tensile strain from the atmosphere"
            }
          ],
          "correctOptionId": "a",
          "explanation": "Retaining walls hold back soil, which exerts a horizontal (lateral) pressure against the wall that increases with depth."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-201-l06-a1",
          "type": "mnemonic",
          "title": "Foundation Rule of Thumb",
          "content": "Shallow for strong surface, Deep for weak surface."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l06.png"
    },
    {
      "id": "civil-engineering-201-l07",
      "title": "Transportation Systems & Traffic Flow",
      "type": "video",
      "duration": 11,
      "lessonImagePrompt": "An aerial view of a complex highway interchange at twilight, with long-exposure light trails from vehicles showing traffic flow.",
      "conceptVideoPrompt": "A top-down animation of traffic flow through a modern roundabout versus a traditional signalized intersection, highlighting efficiency and conflict points.",
      "learningAids": [
        {
          "id": "civil-engineering-201-l07-a1",
          "type": "image",
          "title": "Level of Service (LOS)",
          "content": "Chart showing LOS grades A through F with corresponding traffic density visuals."
        },
        {
          "id": "civil-engineering-201-l07-a2",
          "type": "animation",
          "title": "Superelevation",
          "content": "Animation showing how banking a curve helps counteract centrifugal force on a vehicle."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l07.png"
    },
    {
      "id": "civil-engineering-201-l08",
      "title": "Highway Design Practice",
      "type": "interactive",
      "duration": 15,
      "lessonImagePrompt": "A computer screen showing civil engineering CAD software designing a curved highway, with radius, elevation, and contour data visible.",
      "conceptVideoPrompt": "A driver's perspective simulation of a newly designed highway curve, demonstrating proper banking (superelevation) for safe high-speed travel.",
      "metadata": {
        "prompts": [
          "Determine the required curve radius for a design speed of 100 km/h.",
          "Calculate the necessary superelevation rate.",
          "Adjust the alignment to minimize environmental impact on the adjacent wetlands."
        ]
      },
      "learningAids": [
        {
          "id": "civil-engineering-201-l08-a1",
          "type": "practice",
          "title": "Alignment Optimizer",
          "content": "Drag the control points of the highway alignment to balance cut/fill volumes while maintaining safe curve radii."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l08.png"
    },
    {
      "id": "civil-engineering-201-l09",
      "title": "Checkpoint: Transportation",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "A close-up of fresh asphalt being laid on a new road, with a heavy steamroller compacting the surface in the background.",
      "conceptVideoPrompt": "An animated cross-section of a road showing the subgrade, base, and asphalt layers compressing and distributing the load of a heavy truck.",
      "questions": [
        {
          "id": "civil-engineering-201-l09-q1",
          "text": "What is the purpose of superelevation in highway design?",
          "skillId": "civil-engineering-201-skill-transportation",
          "options": [
            {
              "id": "a",
              "text": "To increase the aesthetic appeal of the roadway."
            },
            {
              "id": "b",
              "text": "To bank the roadway to help vehicles safely navigate curves at higher speeds."
            },
            {
              "id": "c",
              "text": "To elevate the highway above flood plains."
            },
            {
              "id": "d",
              "text": "To provide a steeper grade for water drainage on straightaways."
            }
          ],
          "correctOptionId": "b",
          "explanation": "Superelevation (banking) tilts the roadway on a curve, using gravity to help counteract the outward centrifugal force acting on vehicles."
        },
        {
          "id": "civil-engineering-201-l09-q2",
          "text": "Which factor is most critical when designing the thickness of a pavement structure?",
          "skillId": "civil-engineering-201-skill-transportation",
          "options": [
            {
              "id": "a",
              "text": "The color of the asphalt."
            },
            {
              "id": "b",
              "text": "The number of passenger cars expected per day."
            },
            {
              "id": "c",
              "text": "The expected volume of heavy commercial trucks (axle loads)."
            },
            {
              "id": "d",
              "text": "The proximity to the nearest city center."
            }
          ],
          "correctOptionId": "c",
          "explanation": "Pavement thickness is primarily dictated by heavy vehicle traffic, as heavy axle loads cause exponentially more wear and tear than passenger cars."
        },
        {
          "id": "civil-engineering-201-l09-q3",
          "text": "What does 'Level of Service' (LOS) measure in traffic engineering?",
          "skillId": "civil-engineering-201-skill-transportation",
          "options": [
            {
              "id": "a",
              "text": "The structural integrity of the road surface."
            },
            {
              "id": "b",
              "text": "A qualitative measure describing operational conditions within a traffic stream, like speed and delay."
            },
            {
              "id": "c",
              "text": "The amount of toll revenue generated by a highway."
            },
            {
              "id": "d",
              "text": "The environmental impact score of a new road project."
            }
          ],
          "correctOptionId": "b",
          "explanation": "LOS is a letter grade (A through F) used to describe the quality of traffic flow, with A being free-flow and F being a traffic jam."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-201-l09-a1",
          "type": "mnemonic",
          "title": "LOS Grades",
          "content": "A is Awesome (free flow), F is Frustrating (gridlock)."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l09.png"
    },
    {
      "id": "civil-engineering-201-l10",
      "title": "Final Assessment: Civil Engineering II",
      "type": "quiz",
      "duration": 15,
      "lessonImagePrompt": "A diverse team of civil engineers in hard hats looking at a large blueprint spread out on a table at a bustling construction site.",
      "conceptVideoPrompt": "A sweeping drone shot over a modern, sustainable city, showcasing bridges, highways, and skyscrapers working in harmony, with subtle data overlays.",
      "questions": [
        {
          "id": "civil-engineering-201-l10-q1",
          "text": "If a soil report indicates highly compressible clay near the surface and solid bedrock 30 meters down, which foundation is most appropriate for a high-rise?",
          "skillId": "civil-engineering-201-skill-geotechnics",
          "options": [
            {
              "id": "a",
              "text": "Shallow spread footings"
            },
            {
              "id": "b",
              "text": "A floating slab"
            },
            {
              "id": "c",
              "text": "End-bearing piles driven to bedrock"
            },
            {
              "id": "d",
              "text": "No foundation is needed"
            }
          ],
          "correctOptionId": "c",
          "explanation": "End-bearing piles will bypass the weak clay and transfer the massive load of the high-rise directly to the strong bedrock."
        },
        {
          "id": "civil-engineering-201-l10-q2",
          "text": "When designing a steel truss bridge, engineers must ensure that the bottom chord can withstand which primary force as the bridge bends downward under a load?",
          "skillId": "civil-engineering-201-skill-structures",
          "options": [
            {
              "id": "a",
              "text": "Compression"
            },
            {
              "id": "b",
              "text": "Tension"
            },
            {
              "id": "c",
              "text": "Torsion"
            },
            {
              "id": "d",
              "text": "Liquefaction"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When a simply supported bridge bends downward (sags) under a load, the top is squeezed (compression) and the bottom is stretched (tension)."
        },
        {
          "id": "civil-engineering-201-l10-q3",
          "text": "Which of the following best describes the relationship between traffic volume, speed, and density?",
          "skillId": "civil-engineering-201-skill-transportation",
          "options": [
            {
              "id": "a",
              "text": "As density increases to its maximum, speed and volume drop to zero (a traffic jam)."
            },
            {
              "id": "b",
              "text": "Speed always increases as volume increases."
            },
            {
              "id": "c",
              "text": "Density has no effect on the speed of vehicles."
            },
            {
              "id": "d",
              "text": "Maximum volume occurs when vehicles are traveling at their absolute maximum speed."
            }
          ],
          "correctOptionId": "a",
          "explanation": "In traffic flow theory, when a road becomes completely congested (maximum density), vehicles stop moving, meaning speed and flow (volume) both drop to zero."
        }
      ],
      "learningAids": [
        {
          "id": "civil-engineering-201-l10-a1",
          "type": "mnemonic",
          "title": "Exam Strategy",
          "content": "Read carefully: Identify if the question is asking about Structures (forces), Geotechnics (soil/foundations), or Transportation (flow/design)."
        }
      ],
      "imageUrl": "/generated-images/refinery/civil-engineering-201-l10.png"
    }
  ]
};
