import type { LearningModule } from "@/lib/modules/types";

export const physics_101_Module: LearningModule = {
  "id": "physics-101",
  "title": "Physics Essentials",
  "description": "Study motion, forces, energy, waves, electricity, and simple machines through hands-on activities and real-world examples.",
  "subject": "Physics",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "enriched-from-epub"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Describe motion using speed, velocity, and acceleration",
    "Apply Newton's three laws of motion to real-world situations",
    "Explain energy transformations and the law of conservation of energy",
    "Distinguish between types of waves and describe wave properties",
    "Build and analyze simple electric circuits using Ohm's law",
    "Identify the six simple machines and calculate mechanical advantage",
    "Explain how light behaves through reflection, refraction, and absorption",
    "Design a physics-based solution using multiple concepts together"
  ],
  "lessons": [
    {
      "id": "physics-101-l01",
      "title": "Motion, Speed, and Acceleration",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Define position, distance, and displacement",
        "Calculate speed using the formula speed = distance ÷ time",
        "Distinguish between speed and velocity",
        "Define and identify examples of acceleration"
      ],
      "metadata": {
        "prompts": [
          "If you are on a spinning merry-go-round at a constant speed, is your velocity changing? Are you accelerating?",
          "Describe the motion of a ball thrown straight up into the air, from the moment it leaves your hand to the moment it lands.",
          "Think of a time you traveled in a car. What was your reference point for motion?"
        ]
      },
      "chunks": [
        {
          "id": "physics-101-l01-c1",
          "title": "What Is Motion?",
          "content": "What does it mean for something to be in motion? It simply means its position is changing. To know if something is moving, we must compare it to a 'reference point'—an object that we assume is stationary. For example, if you're on a bus, you feel still compared to your seat. But looking out the window, you see you're moving past trees and buildings. The trees are your reference point. Motion is always relative to a reference point, helping us describe how everything from a thrown ball to a planet moves."
        },
        {
          "id": "physics-101-l01-c2",
          "title": "Distance vs. Displacement",
          "content": "Distance and displacement are two different ways to measure how far something has moved. Distance is the total length of the path traveled. If you walk 3 blocks north and 4 blocks east, your total distance is 7 blocks. Displacement, however, is the shortest straight-line distance from your starting point to your ending point, including the direction. In the same example, your displacement would be 5 blocks to the northeast. Displacement is a vector, meaning it has both a size and a direction, while distance is a scalar, with only size."
        },
        {
          "id": "physics-101-l01-c3",
          "title": "Speed and Velocity",
          "content": "Speed tells us how fast something is moving. We calculate it with the formula: Speed = Distance ÷ Time. If a car travels 100 kilometers in 2 hours, its speed is 50 km/h. Velocity is more specific: it's an object's speed in a particular direction. For example, saying a car is moving at 50 km/h *east* describes its velocity. If the car turns a corner, its speed might stay the same, but its velocity changes because its direction changed. This difference is key to understanding motion."
        },
        {
          "id": "physics-101-l01-c4",
          "title": "Understanding Acceleration",
          "content": "Acceleration is any change in velocity. This can mean speeding up, slowing down, or even just changing direction. If a car speeds up from a stoplight, it's accelerating. If it slows down for a red light, that's also acceleration (sometimes called deceleration). Even a car turning a corner at a constant speed is accelerating because its direction—and therefore its velocity—is changing. We measure acceleration in meters per second squared (m/s²). It's the key link between motion and the forces that cause it."
        },
        {
          "id": "physics-101-l01-c5",
          "title": "Worked Example: Calculating Speed",
          "content": "Let's calculate speed with an example. A cyclist travels 600 meters in 2 minutes. To find her speed in meters per second (m/s), we first need consistent units. Since there are 60 seconds in a minute, 2 minutes is 2 × 60 = 120 seconds. Now, we use the formula: Speed = Distance ÷ Time. Plugging in our values: Speed = 600 meters ÷ 120 seconds. This gives us a speed of 5 m/s. To put that in perspective, 5 m/s is equal to 18 kilometers per hour (km/h), a comfortable pace for a bike ride."
        },
        {
          "id": "physics-101-l01-c6",
          "title": "The Cosmic Speed Limit",
          "content": "Did you know there's a speed limit for the entire universe? According to Albert Einstein's theory of special relativity, nothing can travel faster than the speed of light, which is about 300,000 kilometers per second. At speeds close to this limit, strange things happen. Time slows down for the moving object (time dilation), and distances appear to shrink. This was a revolutionary idea that showed space and time are not absolute, as Isaac Newton thought, but are flexible and depend on your motion. This concept is mind-blowing and fundamental to modern physics."
        }
      ],
      "flashcards": [
        {
          "id": "physics-101-l01-f1",
          "front": "Speed formula",
          "back": "Speed = distance ÷ time (measured in m/s, km/h, or mph)"
        },
        {
          "id": "physics-101-l01-f2",
          "front": "Distance vs. Displacement",
          "back": "Distance = total path length (scalar); Displacement = straight-line start-to-finish with direction (vector)"
        },
        {
          "id": "physics-101-l01-f3",
          "front": "Velocity",
          "back": "Speed in a specific direction. It changes if speed or direction changes."
        },
        {
          "id": "physics-101-l01-f4",
          "front": "Acceleration",
          "back": "The rate of change of velocity. It can be speeding up, slowing down, or changing direction."
        },
        {
          "id": "physics-101-l01-f5",
          "front": "What is the cosmic speed limit?",
          "back": "The speed of light (~300,000 km/s). Einstein's special relativity shows nothing with mass can reach or exceed this speed."
        },
        {
          "id": "physics-101-l01-f6",
          "front": "Time dilation",
          "back": "A consequence of special relativity where time passes more slowly for objects moving at very high speeds compared to a stationary observer."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l01-a1",
          "type": "image",
          "title": "Motion Diagram",
          "content": "A diagram showing a runner with distance markers, a displacement arrow, and a speed calculation."
        },
        {
          "id": "physics-101-l01-a2",
          "type": "animation",
          "title": "Speed vs. Velocity",
          "content": "Animation of a car on a circular track — its speed is constant, but its velocity is always changing because its direction is changing."
        }
      ]
    },
    {
      "id": "physics-101-l02",
      "title": "Forces and Newton's Laws",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Define force and identify contact vs. non-contact forces",
        "State Newton's three laws of motion",
        "Draw a simple free-body diagram"
      ],
      "metadata": {
        "prompts": [
          "Name two forces acting on a book sitting on a desk.",
          "Explain what happens when you push a shopping cart — which of Newton's laws applies?",
          "Why does a hockey puck eventually stop on ice even though Newton's first law says it should keep going?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Sort the Forces",
          "description": "Classify each force as a contact force or a non-contact force.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "contact",
                "label": "Contact Forces"
              },
              {
                "id": "noncontact",
                "label": "Non-Contact Forces"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Friction between shoes and floor",
                "correctBucketId": "contact"
              },
              {
                "id": "i2",
                "label": "Gravity pulling an apple down",
                "correctBucketId": "noncontact"
              },
              {
                "id": "i3",
                "label": "A spring pushing a ball",
                "correctBucketId": "contact"
              },
              {
                "id": "i4",
                "label": "Magnetic attraction of a fridge magnet",
                "correctBucketId": "noncontact"
              },
              {
                "id": "i5",
                "label": "Air resistance on a parachute",
                "correctBucketId": "contact"
              },
              {
                "id": "i6",
                "label": "Earth's gravitational pull on the Moon",
                "correctBucketId": "noncontact"
              }
            ]
          }
        },
        {
          "id": "physics-101-l02-ia2",
          "type": "matching_pairs",
          "title": "Newton's Laws Match",
          "description": "Match each law to the correct real-world example.",
          "estimatedMinutes": 6,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "1st Law (Inertia)"
              },
              {
                "id": "l2",
                "label": "2nd Law (F = ma)"
              },
              {
                "id": "l3",
                "label": "3rd Law (Action-Reaction)"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A seatbelt stops you when the car brakes suddenly"
              },
              {
                "id": "r2",
                "label": "A heavier box needs more force to accelerate"
              },
              {
                "id": "r3",
                "label": "A rocket pushes gas down, gas pushes rocket up"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l02-a1",
          "type": "mnemonic",
          "title": "Newton's Laws Memory Aid",
          "content": "1st: Stay (objects resist change), 2nd: Push (F = ma), 3rd: Bounce Back (every action has an equal and opposite reaction)."
        },
        {
          "id": "physics-101-l02-a2",
          "type": "image",
          "title": "Free-Body Diagram Example",
          "content": "A simple diagram of a book on a table, with an arrow pointing down for gravity (Weight) and an equal-sized arrow pointing up for the normal force from the table."
        }
      ]
    },
    {
      "id": "physics-101-l03",
      "title": "Checkpoint: Motion & Forces",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-101-l03-q1",
          "text": "A student walks 4 m east and then 3 m west. What is her displacement?",
          "skillId": "physics-101-skill-motion",
          "options": [
            {
              "id": "a",
              "text": "7 m east"
            },
            {
              "id": "b",
              "text": "1 m east"
            },
            {
              "id": "c",
              "text": "3.5 m west"
            },
            {
              "id": "d",
              "text": "1 m west"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Displacement = 4 m east − 3 m west = 1 m east (net direction). Distance would be 7 m."
        },
        {
          "id": "physics-101-l03-q2",
          "text": "A cheetah runs 300 m in 10 seconds. What is its average speed?",
          "skillId": "physics-101-skill-speed",
          "options": [
            {
              "id": "a",
              "text": "3 m/s"
            },
            {
              "id": "b",
              "text": "3000 m/s"
            },
            {
              "id": "c",
              "text": "30 m/s"
            },
            {
              "id": "d",
              "text": "310 m/s"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Speed = distance ÷ time = 300 m ÷ 10 s = 30 m/s (about 108 km/h)."
        },
        {
          "id": "physics-101-l03-q3",
          "text": "Which of Newton's laws explains why you lurch forward when a bus stops suddenly?",
          "skillId": "physics-101-skill-forces",
          "options": [
            {
              "id": "a",
              "text": "Third law — action and reaction"
            },
            {
              "id": "b",
              "text": "Second law — F = ma"
            },
            {
              "id": "c",
              "text": "First law — an object in motion tends to stay in motion"
            },
            {
              "id": "d",
              "text": "Law of gravity only"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Newton's first law (inertia): your body was moving with the bus and tends to keep moving even after the bus stops."
        },
        {
          "id": "physics-101-l03-q4",
          "text": "Two identical boxes sit on a floor. Box A is pushed with 20 N and Box B with 40 N. Which accelerates faster?",
          "skillId": "physics-101-skill-newton2",
          "options": [
            {
              "id": "a",
              "text": "Box A — less force means more acceleration"
            },
            {
              "id": "b",
              "text": "They accelerate equally because they have the same mass"
            },
            {
              "id": "c",
              "text": "Neither moves because of friction"
            },
            {
              "id": "d",
              "text": "Box B — more force on the same mass means greater acceleration"
            }
          ],
          "correctOptionId": "d",
          "explanation": "F = ma → a = F/m. Same mass, double the force = double the acceleration."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "physics-101-l03-a1",
          "type": "mnemonic",
          "title": "Speed Formula",
          "content": "Speed = Distance ÷ Time → think S-D-T triangle: cover the letter you want, the remaining two show the formula."
        }
      ]
    },
    {
      "id": "physics-101-l04",
      "title": "Work and Energy",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Define work, kinetic energy, and potential energy",
        "Calculate work using W = F × d",
        "Explain the law of conservation of energy"
      ],
      "metadata": {
        "prompts": [
          "Are you doing 'work' in the physics sense if you push against a solid wall that doesn't move?",
          "A fast baseball and a slow bowling ball can have the same kinetic energy. How is this possible?",
          "Where in a roller coaster ride is the potential energy highest? Where is the kinetic energy highest?"
        ]
      },
      "chunks": [
        {
          "id": "physics-101-l04-c1",
          "title": "What Is Work?",
          "content": "In physics, 'work' has a very specific meaning. Work is done when a force causes an object to move a certain distance in the direction of the force. The formula is simple: Work = Force × Distance. The unit for work is the joule (J). If you push a box with 10 newtons of force for 3 meters, you've done 30 joules of work. Interestingly, if you hold a heavy bag perfectly still, you're not doing any work on the bag, because it isn't moving. Work is all about force causing motion."
        },
        {
          "id": "physics-101-l04-c2",
          "title": "Kinetic Energy",
          "content": "Kinetic energy is the energy of motion. Anything that moves has kinetic energy. The formula is KE = ½ × mass × velocity². This means an object's kinetic energy depends on both its mass and its speed. What's surprising is the velocity is squared. This means if you double an object's speed, you quadruple its kinetic energy! This is why high-speed car crashes are so much more dangerous—the energy involved increases dramatically with speed."
        },
        {
          "id": "physics-101-l04-c3",
          "title": "Potential Energy",
          "content": "Potential energy is stored energy, ready to be used. The most common type is gravitational potential energy, which an object has due to its height. The formula is PE = mass × gravity × height. A book on a high shelf has more potential energy than one on the floor. Another type is elastic potential energy, which is stored in stretched or compressed objects like a rubber band or a spring. Potential energy is all about an object's position or condition."
        },
        {
          "id": "physics-101-l04-c4",
          "title": "Conservation of Energy",
          "content": "The law of conservation of energy is one of the most important principles in physics. It states that energy cannot be created or destroyed, only transformed from one form to another. For example, as a ball falls from a shelf, its potential energy (from its height) is converted into kinetic energy (from its motion). At the top, it's all PE; at the bottom, just before it hits, it's all KE. The total energy remains the same. A swinging pendulum is a perfect example of this constant PE ↔ KE conversion."
        },
        {
          "id": "physics-101-l04-c5",
          "title": "E = mc²: Mass as Concentrated Energy",
          "content": "Einstein's famous equation, E = mc², reveals a stunning connection: mass and energy are two forms of the same thing. It tells us that a small amount of mass can be converted into a huge amount of energy. The 'c²' is the speed of light squared, an enormous number. This is why nuclear reactions, which convert a tiny fraction of an atom's mass into energy, release millions of times more energy than chemical reactions like burning wood. This principle powers stars and nuclear power plants."
        }
      ],
      "flashcards": [
        {
          "id": "physics-101-l04-f1",
          "front": "Work formula",
          "back": "W = F × d (force × distance in the direction of force), measured in joules (J)"
        },
        {
          "id": "physics-101-l04-f2",
          "front": "Kinetic energy",
          "back": "KE = ½mv² — energy of motion; doubling speed quadruples KE"
        },
        {
          "id": "physics-101-l04-f3",
          "front": "Gravitational potential energy",
          "back": "PE = mgh (mass × gravity × height); stored energy due to position"
        },
        {
          "id": "physics-101-l04-f4",
          "front": "Conservation of energy",
          "back": "Energy is never created or destroyed, only transformed from one form to another"
        },
        {
          "id": "physics-101-l04-f5",
          "front": "E = mc² (mass-energy equivalence)",
          "back": "Energy equals mass times the speed of light squared. A small amount of mass converts to an enormous amount of energy because c² is a huge number."
        },
        {
          "id": "physics-101-l04-f6",
          "front": "Why do nuclear reactions release so much energy?",
          "back": "They convert a fraction of the mass of atomic nuclei directly into energy via E = mc². Even a tiny mass loss produces enormous energy."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l04-a1",
          "type": "animation",
          "title": "Pendulum Energy",
          "content": "Animation showing PE ↔ KE conversion in a swinging pendulum with an energy bar graph that shows total energy remaining constant."
        }
      ]
    },
    {
      "id": "physics-101-l05",
      "title": "Waves and Sound",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify parts of a wave: crest, trough, wavelength, amplitude",
        "Distinguish transverse and longitudinal waves",
        "Explain how sound travels and what affects its speed"
      ],
      "metadata": {
        "prompts": [
          "Draw a transverse wave and label the crest, trough, wavelength, and amplitude.",
          "Explain why sound cannot travel through outer space.",
          "What happens to the pitch of a sound when the frequency increases?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Wave Type Sort",
          "description": "Classify each example as a transverse wave or a longitudinal wave.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "transverse",
                "label": "Transverse Waves"
              },
              {
                "id": "longitudinal",
                "label": "Longitudinal Waves"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Light from the Sun",
                "correctBucketId": "transverse"
              },
              {
                "id": "i2",
                "label": "Sound from a speaker",
                "correctBucketId": "longitudinal"
              },
              {
                "id": "i3",
                "label": "A wave on a rope",
                "correctBucketId": "transverse"
              },
              {
                "id": "i4",
                "label": "A slinky pushed end-to-end",
                "correctBucketId": "longitudinal"
              },
              {
                "id": "i5",
                "label": "Radio waves",
                "correctBucketId": "transverse"
              },
              {
                "id": "i6",
                "label": "Ultrasound in a medical scan",
                "correctBucketId": "longitudinal"
              }
            ]
          }
        },
        {
          "id": "physics-101-l05-ia2",
          "type": "matching_pairs",
          "title": "Wave Properties Match",
          "description": "Match each wave property to its correct definition.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Wavelength"
              },
              {
                "id": "l2",
                "label": "Amplitude"
              },
              {
                "id": "l3",
                "label": "Frequency"
              },
              {
                "id": "l4",
                "label": "Crest"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Distance from one peak to the next"
              },
              {
                "id": "r2",
                "label": "Height from the rest position to the peak"
              },
              {
                "id": "r3",
                "label": "Number of waves passing a point per second (Hz)"
              },
              {
                "id": "r4",
                "label": "The highest point of a transverse wave"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l05-a1",
          "type": "image",
          "title": "Wave Anatomy Poster",
          "content": "Labeled diagram of a transverse wave showing crest, trough, wavelength, and amplitude."
        }
      ]
    },
    {
      "id": "physics-101-l06",
      "title": "Checkpoint: Energy & Waves",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-101-l06-q1",
          "text": "A student pushes a desk 4 m with a force of 25 N. How much work is done?",
          "skillId": "physics-101-skill-work",
          "options": [
            {
              "id": "a",
              "text": "6.25 J"
            },
            {
              "id": "b",
              "text": "100 J"
            },
            {
              "id": "c",
              "text": "29 J"
            },
            {
              "id": "d",
              "text": "100 N"
            }
          ],
          "correctOptionId": "b",
          "explanation": "W = F × d = 25 N × 4 m = 100 J. Remember the unit for work is joules, not newtons."
        },
        {
          "id": "physics-101-l06-q2",
          "text": "A ball is held at the top of a ramp. What type of energy does it have the most of?",
          "skillId": "physics-101-skill-energy",
          "options": [
            {
              "id": "a",
              "text": "Kinetic energy"
            },
            {
              "id": "b",
              "text": "Sound energy"
            },
            {
              "id": "c",
              "text": "Gravitational potential energy"
            },
            {
              "id": "d",
              "text": "Electrical energy"
            }
          ],
          "correctOptionId": "c",
          "explanation": "At the top and not yet moving, the ball has maximum gravitational PE (mgh) and zero KE."
        },
        {
          "id": "physics-101-l06-q3",
          "text": "Which type of wave needs a medium (like air or water) to travel through?",
          "skillId": "physics-101-skill-waves",
          "options": [
            {
              "id": "a",
              "text": "Light waves"
            },
            {
              "id": "b",
              "text": "Radio waves"
            },
            {
              "id": "c",
              "text": "Sound waves"
            },
            {
              "id": "d",
              "text": "X-rays"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Sound is a mechanical wave — it needs particles to vibrate through. Light, radio, and X-rays are electromagnetic waves that can travel through a vacuum."
        },
        {
          "id": "physics-101-l06-q4",
          "text": "If you double the amplitude of a wave, what happens to its energy?",
          "skillId": "physics-101-skill-wave-energy",
          "options": [
            {
              "id": "a",
              "text": "Energy stays the same"
            },
            {
              "id": "b",
              "text": "Energy doubles"
            },
            {
              "id": "c",
              "text": "Energy is cut in half"
            },
            {
              "id": "d",
              "text": "Energy quadruples (4×)"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Wave energy is proportional to amplitude squared. Double the amplitude → 2² = 4× the energy."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "physics-101-l06-a1",
          "type": "mnemonic",
          "title": "Energy Types",
          "content": "KE = motion, PE = position. A falling object trades PE for KE."
        }
      ]
    },
    {
      "id": "physics-101-l07",
      "title": "Electricity Basics",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Explain electric current, voltage, and resistance",
        "Apply Ohm's law: V = I × R",
        "Compare series and parallel circuits"
      ],
      "metadata": {
        "prompts": [
          "Why does a thin wire get hotter than a thick wire when the same current flows through them?",
          "If you add another light bulb to a simple series circuit, what happens to the brightness of the other bulbs? Why?",
          "Are the lights in your house wired in series or parallel? How do you know?"
        ]
      },
      "chunks": [
        {
          "id": "physics-101-l07-c1",
          "title": "Electric Charge and Current",
          "content": "Everything is made of atoms, which contain charged particles: positive protons and negative electrons. Electric current is the flow of these electrons through a material, like a copper wire. We measure current in amperes (A), or amps. Think of it like water flowing in a pipe: more water flow means a stronger current. This flow of charge is what powers everything from your phone to your lights."
        },
        {
          "id": "physics-101-l07-c2",
          "title": "Voltage and Resistance",
          "content": "Voltage is the 'push' or 'pressure' that makes electric current flow. Measured in volts (V), it's like the water pressure in a hose—higher voltage pushes more current. Resistance is a measure of how much a material opposes the flow of current, measured in ohms (Ω). A thin wire has more resistance than a thick wire. A light bulb's filament has high resistance, causing it to heat up and glow when current passes through it."
        },
        {
          "id": "physics-101-l07-c3",
          "title": "Ohm's Law",
          "content": "Ohm's Law is a fundamental rule that connects voltage, current, and resistance in a simple formula: V = I × R. This means Voltage = Current × Resistance. If you know any two of these values, you can find the third. For example, if a circuit has a 12-volt battery (V) and a 6-ohm resistor (R), the current (I) flowing through it would be I = V/R = 12/6 = 2 amps. This law is essential for designing and analyzing any electric circuit."
        },
        {
          "id": "physics-101-l07-c4",
          "title": "Series vs. Parallel Circuits",
          "content": "There are two basic ways to wire a circuit. In a series circuit, components are connected in a single loop. The current has only one path. If one bulb in a string of old holiday lights burns out, the whole string goes dark because the path is broken. In a parallel circuit, components are on separate branches. The current splits to flow through each branch. If one bulb burns out, the others stay lit because their paths are still complete. Your home is wired in parallel so you can use multiple appliances at once."
        },
        {
          "id": "physics-101-l07-c5",
          "title": "Maxwell's Electromagnetic Unification",
          "content": "In the 1800s, scientist James Clerk Maxwell discovered something amazing: electricity and magnetism are not separate forces. They are two aspects of a single force called electromagnetism. His equations showed that a changing electric field creates a magnetic field, and a changing magnetic field creates an electric field. This relationship allows energy to travel through space as an electromagnetic wave. Most importantly, he proved that light itself is an electromagnetic wave, unifying optics with electricity and magnetism in one of the greatest achievements in physics."
        }
      ],
      "flashcards": [
        {
          "id": "physics-101-l07-f1",
          "front": "Ohm's law",
          "back": "V = I × R (Voltage = Current × Resistance)"
        },
        {
          "id": "physics-101-l07-f2",
          "front": "Current (I)",
          "back": "Flow of electric charge through a conductor, measured in amperes (A)"
        },
        {
          "id": "physics-101-l07-f3",
          "front": "Series circuit",
          "back": "One path for current; if one component fails, the whole circuit breaks"
        },
        {
          "id": "physics-101-l07-f4",
          "front": "Parallel circuit",
          "back": "Multiple paths for current; if one branch fails, others still work"
        },
        {
          "id": "physics-101-l07-f5",
          "front": "Maxwell's electromagnetic unification",
          "back": "James Clerk Maxwell showed that electricity and magnetism are aspects of a single force—electromagnetism. He proved that light is an electromagnetic wave."
        },
        {
          "id": "physics-101-l07-f6",
          "front": "What is an electromagnetic field?",
          "back": "A field created by moving electric charges that exerts a force on other charges. It consists of intertwined electric and magnetic fields that can propagate as waves."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l07-a1",
          "type": "image",
          "title": "Circuit Diagrams",
          "content": "Side-by-side diagrams of a series circuit and a parallel circuit with labeled components (battery, wires, bulbs)."
        }
      ]
    },
    {
      "id": "physics-101-l08",
      "title": "Simple Machines",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Name the six simple machines",
        "Explain mechanical advantage in everyday terms",
        "Identify simple machines in common objects"
      ],
      "metadata": {
        "prompts": [
          "Name three simple machines you used today without realizing it.",
          "Why does a longer ramp make it easier to push a heavy box upward?",
          "A wheelbarrow combines which two simple machines?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-101-l08-ia1",
          "type": "sorting_buckets",
          "title": "Name That Simple Machine",
          "description": "Sort each everyday object into the correct simple machine category.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "lever",
                "label": "Lever"
              },
              {
                "id": "inclined",
                "label": "Inclined Plane"
              },
              {
                "id": "pulley",
                "label": "Pulley"
              },
              {
                "id": "wedge",
                "label": "Wedge"
              },
              {
                "id": "screw",
                "label": "Screw"
              },
              {
                "id": "wheel",
                "label": "Wheel & Axle"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Seesaw on a playground",
                "correctBucketId": "lever"
              },
              {
                "id": "i2",
                "label": "Wheelchair ramp",
                "correctBucketId": "inclined"
              },
              {
                "id": "i3",
                "label": "Flagpole rope system",
                "correctBucketId": "pulley"
              },
              {
                "id": "i4",
                "label": "Axe blade",
                "correctBucketId": "wedge"
              },
              {
                "id": "i5",
                "label": "Jar lid",
                "correctBucketId": "screw"
              },
              {
                "id": "i6",
                "label": "Doorknob",
                "correctBucketId": "wheel"
              }
            ]
          }
        },
        {
          "id": "physics-101-l08-ia2",
          "type": "matching_pairs",
          "title": "Mechanical Advantage Match",
          "description": "Match each simple machine to how it provides mechanical advantage.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Lever"
              },
              {
                "id": "l2",
                "label": "Inclined plane"
              },
              {
                "id": "l3",
                "label": "Pulley"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Multiplies force by increasing distance from the fulcrum"
              },
              {
                "id": "r2",
                "label": "Reduces effort by spreading work over a longer, sloped distance"
              },
              {
                "id": "r3",
                "label": "Changes direction of force; compound pulleys also multiply force"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l08-a1",
          "type": "image",
          "title": "Six Simple Machines Poster",
          "content": "Illustrated poster showing all six simple machines (lever, pulley, wheel and axle, inclined plane, wedge, screw) with labeled parts and everyday examples."
        }
      ]
    },
    {
      "id": "physics-101-l09",
      "title": "Checkpoint: Electricity & Machines",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-101-l09-q1",
          "text": "A circuit has a 9 V battery and a 3 Ω resistor. What is the current?",
          "skillId": "physics-101-skill-ohm",
          "options": [
            {
              "id": "a",
              "text": "27 A"
            },
            {
              "id": "b",
              "text": "3 A"
            },
            {
              "id": "c",
              "text": "12 A"
            },
            {
              "id": "d",
              "text": "6 A"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Ohm's law: I = V/R = 9 V ÷ 3 Ω = 3 A."
        },
        {
          "id": "physics-101-l09-q2",
          "text": "In a series circuit with three bulbs, what happens if the middle bulb burns out?",
          "skillId": "physics-101-skill-circuits",
          "options": [
            {
              "id": "a",
              "text": "Only the middle bulb goes off"
            },
            {
              "id": "b",
              "text": "The other two bulbs get brighter"
            },
            {
              "id": "c",
              "text": "All three bulbs go off"
            },
            {
              "id": "d",
              "text": "The first bulb stays on, the third goes off"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In a series circuit there is only one path. A break anywhere stops all current, so all bulbs go off."
        },
        {
          "id": "physics-101-l09-q3",
          "text": "Which simple machine is a spiral version of an inclined plane?",
          "skillId": "physics-101-skill-machines",
          "options": [
            {
              "id": "a",
              "text": "Lever"
            },
            {
              "id": "b",
              "text": "Pulley"
            },
            {
              "id": "c",
              "text": "Screw"
            },
            {
              "id": "d",
              "text": "Wheel and axle"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A screw is an inclined plane wrapped around a cylinder. Each turn moves the screw a small distance with less force."
        },
        {
          "id": "physics-101-l09-q4",
          "text": "A 20 kg box is pushed up a 5 m ramp instead of lifted straight up 2 m. Why is the ramp easier?",
          "skillId": "physics-101-skill-ma",
          "options": [
            {
              "id": "a",
              "text": "The ramp removes gravity entirely"
            },
            {
              "id": "b",
              "text": "The ramp reduces the total work needed"
            },
            {
              "id": "c",
              "text": "The ramp lets you use less force over a longer distance"
            },
            {
              "id": "d",
              "text": "The box weighs less on the ramp"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The work is the same (W = mgh), but the ramp spreads it over a longer distance so you need less force at any moment. That is mechanical advantage."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "physics-101-l09-a1",
          "type": "mnemonic",
          "title": "Ohm's Law Triangle",
          "content": "Cover the variable you want: V on top, I and R on the bottom. V = IR, I = V/R, R = V/I."
        }
      ]
    },
    {
      "id": "physics-101-l10",
      "title": "Light and Optics",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Describe reflection, refraction, and absorption of light",
        "Identify the visible spectrum and how we see color",
        "Compare convex and concave lenses"
      ],
      "metadata": {
        "prompts": [
          "Why does a black car get hotter in the sun than a white car?",
          "If you look at your reflection in a spoon, why do you look different on the front side versus the back side?",
          "What color would a blue shirt appear to be under a pure red light?"
        ]
      },
      "chunks": [
        {
          "id": "physics-101-l10-c1",
          "title": "How Light Behaves",
          "content": "Light is a form of energy that travels in waves. When light hits an object, one of three things can happen. Reflection is when light bounces off a surface, like with a mirror. Absorption is when an object soaks up the light, converting it to heat, which is why dark-colored shirts feel hot in the sun. Transmission is when light passes through an object, like a clear window. Most objects do a combination of these, which determines how we see them."
        },
        {
          "id": "physics-101-l10-c2",
          "title": "Reflection and Refraction",
          "content": "The law of reflection states that light bounces off a smooth surface at the same angle it hits it. This predictable bounce is what allows mirrors to form clear images. Refraction is the bending of light as it passes from one material to another, like from air to water. This happens because light changes speed. Refraction is why a straw in a glass of water looks bent at the surface. Lenses work by using refraction to focus or spread light."
        },
        {
          "id": "physics-101-l10-c3",
          "title": "The Visible Spectrum and Color",
          "content": "What we see as white light is actually a mix of all the colors of the rainbow. You can see this by passing light through a prism, which separates the colors into a spectrum: Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROY G. BIV). The color of an object is determined by which colors of light it reflects. A red apple looks red because it reflects red light and absorbs all the other colors. A white object reflects all colors, and a black object absorbs all colors."
        },
        {
          "id": "physics-101-l10-c4",
          "title": "Lenses",
          "content": "Lenses are curved pieces of glass or plastic that use refraction to form images. There are two main types. A convex lens is thicker in the middle and converges (focuses) light rays to a point. They are used in magnifying glasses and cameras to make things look bigger. A concave lens is thinner in the middle and diverges (spreads out) light rays. They are used in glasses to help nearsighted people see distant objects more clearly."
        },
        {
          "id": "physics-101-l10-c5",
          "title": "Wave-Particle Duality: Light's Quantum Nature",
          "content": "At the smallest scales, light has a strange secret: it acts like both a wave and a particle. This is called wave-particle duality. In some experiments, light behaves like a continuous wave, creating interference patterns. In others, it behaves like a stream of tiny energy packets called photons. This bizarre dual nature is a cornerstone of quantum mechanics, the physics of the very small. It shows that the universe is much stranger and more wonderful than it appears in our everyday lives."
        }
      ],
      "flashcards": [
        {
          "id": "physics-101-l10-f1",
          "front": "Law of reflection",
          "back": "Angle of incidence = angle of reflection (measured from the normal line)"
        },
        {
          "id": "physics-101-l10-f2",
          "front": "Refraction",
          "back": "Bending of light when it passes between materials of different density; light slows in denser media"
        },
        {
          "id": "physics-101-l10-f3",
          "front": "ROY G. BIV",
          "back": "Red, Orange, Yellow, Green, Blue, Indigo, Violet — colors of the visible spectrum in order of decreasing wavelength"
        },
        {
          "id": "physics-101-l10-f4",
          "front": "Convex lens",
          "back": "Thicker in the middle; converges (focuses) light rays; used in magnifying glasses"
        },
        {
          "id": "physics-101-l10-f5",
          "front": "Wave-particle duality",
          "back": "Light (and all quantum particles) exhibits both wave-like behavior (interference) and particle-like behavior (photoelectric effect)."
        },
        {
          "id": "physics-101-l10-f6",
          "front": "Double-slit experiment",
          "back": "When particles like photons pass through two slits, they create an interference pattern on a screen—even one at a time—demonstrating their wave-like nature."
        },
        {
          "id": "physics-101-l10-f7",
          "front": "Quantum superposition",
          "back": "A quantum particle can exist in multiple states or locations at once until it is measured. The act of observation 'collapses' it to a single state."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l10-a1",
          "type": "image",
          "title": "Prism Spectrum",
          "content": "White light entering a prism and separating into the visible spectrum."
        },
        {
          "id": "physics-101-l10-a2",
          "type": "animation",
          "title": "Refraction Demo",
          "content": "Animation showing a light ray bending as it passes from air into water, making a submerged object appear shifted."
        }
      ]
    },
    {
      "id": "physics-101-l11",
      "title": "Heat and Temperature",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Distinguish between heat and temperature",
        "Describe conduction, convection, and radiation",
        "Give real-world examples of each heat transfer method"
      ],
      "metadata": {
        "prompts": [
          "A metal spoon in hot soup gets warm. Which type of heat transfer is this?",
          "Why does hot air rise in a room?",
          "How does the Sun warm the Earth even through the vacuum of space?"
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-101-l11-ia1",
          "type": "sorting_buckets",
          "title": "Heat Transfer Sort",
          "description": "Classify each scenario as conduction, convection, or radiation.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "conduction",
                "label": "Conduction"
              },
              {
                "id": "convection",
                "label": "Convection"
              },
              {
                "id": "radiation",
                "label": "Radiation"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Touching a hot pan handle",
                "correctBucketId": "conduction"
              },
              {
                "id": "i2",
                "label": "Hot air rising from a campfire",
                "correctBucketId": "convection"
              },
              {
                "id": "i3",
                "label": "Feeling warmth from the Sun on your face",
                "correctBucketId": "radiation"
              },
              {
                "id": "i4",
                "label": "Ice melting in your hand",
                "correctBucketId": "conduction"
              },
              {
                "id": "i5",
                "label": "Boiling water circulating in a pot",
                "correctBucketId": "convection"
              },
              {
                "id": "i6",
                "label": "Heat from a glowing fireplace across the room",
                "correctBucketId": "radiation"
              }
            ]
          }
        },
        {
          "id": "physics-101-l11-ia2",
          "type": "matching_pairs",
          "title": "Heat Concepts Match",
          "description": "Match each heat concept to its correct definition.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Temperature"
              },
              {
                "id": "l2",
                "label": "Heat"
              },
              {
                "id": "l3",
                "label": "Insulator"
              },
              {
                "id": "l4",
                "label": "Conductor"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Average kinetic energy of particles in a substance"
              },
              {
                "id": "r2",
                "label": "Transfer of thermal energy from hot to cold"
              },
              {
                "id": "r3",
                "label": "Material that slows heat transfer (e.g., wool, foam)"
              },
              {
                "id": "r4",
                "label": "Material that transfers heat easily (e.g., metal)"
              }
            ],
            "pairs": [
              {
                "leftId": "l1",
                "rightId": "r1"
              },
              {
                "leftId": "l2",
                "rightId": "r2"
              },
              {
                "leftId": "l3",
                "rightId": "r3"
              },
              {
                "leftId": "l4",
                "rightId": "r4"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l11-a1",
          "type": "mnemonic",
          "title": "Heat Transfer Memory",
          "content": "Conduction = Contact, Convection = Currents (fluids move), Radiation = Rays (no medium needed)."
        },
        {
          "id": "physics-101-l11-a2",
          "type": "image",
          "title": "Heat Transfer Methods",
          "content": "An illustration of a campfire. An arrow showing heat traveling up a metal poker represents conduction. Swirling arrows in the air above the fire represent convection. Wavy lines moving out from the fire to a person's hands represent radiation."
        }
      ]
    },
    {
      "id": "physics-101-l12",
      "title": "Checkpoint: Light & Heat",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "physics-101-l12-q1",
          "text": "A straw appears bent when placed in a glass of water. What causes this?",
          "skillId": "physics-101-skill-light",
          "options": [
            {
              "id": "a",
              "text": "Reflection of light off the water surface"
            },
            {
              "id": "b",
              "text": "Absorption of light by the water"
            },
            {
              "id": "c",
              "text": "Refraction — light bends as it passes from water to air"
            },
            {
              "id": "d",
              "text": "The straw actually bends due to water pressure"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Refraction: light changes speed and direction when moving between air and water, making the straw look bent."
        },
        {
          "id": "physics-101-l12-q2",
          "text": "Which color of visible light has the LONGEST wavelength?",
          "skillId": "physics-101-skill-spectrum",
          "options": [
            {
              "id": "a",
              "text": "Violet"
            },
            {
              "id": "b",
              "text": "Green"
            },
            {
              "id": "c",
              "text": "Red"
            },
            {
              "id": "d",
              "text": "Blue"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Red light has the longest wavelength (~700 nm) and violet has the shortest (~400 nm) in the visible spectrum."
        },
        {
          "id": "physics-101-l12-q3",
          "text": "How does the Sun's energy reach Earth through the vacuum of space?",
          "skillId": "physics-101-skill-heat",
          "options": [
            {
              "id": "a",
              "text": "Conduction through invisible particles"
            },
            {
              "id": "b",
              "text": "Convection in space currents"
            },
            {
              "id": "c",
              "text": "Radiation — electromagnetic waves need no medium"
            },
            {
              "id": "d",
              "text": "Sound waves carry the heat"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Radiation is the only heat transfer method that works through a vacuum. The Sun emits electromagnetic radiation (including infrared) that travels to Earth."
        },
        {
          "id": "physics-101-l12-q4",
          "text": "A metal spoon heats up quickly in hot soup while a wooden spoon does not. Why?",
          "skillId": "physics-101-skill-conduction",
          "options": [
            {
              "id": "a",
              "text": "Metal is a good insulator"
            },
            {
              "id": "b",
              "text": "Wood is a good conductor of heat"
            },
            {
              "id": "c",
              "text": "Metal is a good conductor of heat; wood is an insulator"
            },
            {
              "id": "d",
              "text": "The metal spoon is lighter so it heats faster"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Metals have free electrons that transfer thermal energy quickly (good conductors). Wood has tightly bound molecules that resist heat flow (insulator)."
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 2,
          "hard": 1
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "physics-101-l12-a1",
          "type": "mnemonic",
          "title": "ROY G. BIV",
          "content": "Red Orange Yellow Green Blue Indigo Violet — longest to shortest wavelength."
        }
      ]
    },
    {
      "id": "physics-101-l13",
      "title": "Roller Coaster Design Lab",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Apply conservation of energy to a roller coaster design",
        "Explain how forces, speed, and height interact in a coaster",
        "Evaluate trade-offs in a physics-based design challenge"
      ],
      "metadata": {
        "prompts": [
          "If you make the first hill of your roller coaster twice as high, what happens to the marble's potential energy?",
          "Why can't the second hill in a roller coaster be taller than the first hill (without an extra motor)?",
          "What role does friction play in your roller coaster design? Is it helpful or harmful?"
        ]
      },
      "chunks": [
        {
          "id": "physics-101-l13-c1",
          "title": "The Challenge",
          "content": "Your challenge is to design and build a marble roller coaster. The marble must start from a hill, go through a loop, travel over a second, smaller hill, and land safely in a cup. You have a limited amount of track material. This project will test your understanding of energy, forces, and motion. Let's think like a physics engineer and build something amazing!"
        },
        {
          "id": "physics-101-l13-c2",
          "title": "Energy Budget",
          "content": "To design a successful coaster, you must manage its energy. The marble starts at the top of the first hill with maximum gravitational potential energy (PE). As it rolls down, this PE converts into kinetic energy (KE), the energy of motion. To make it through a loop, the starting hill must be high enough to provide sufficient energy. A good rule of thumb is that the starting hill must be at least 2.5 times the height of the loop to overcome energy losses from friction."
        },
        {
          "id": "physics-101-l13-c3",
          "title": "Forces in Action",
          "content": "As the marble goes through the loop, two forces keep it on the track: gravity pulling it down, and the normal force from the track pushing on it. Together, these provide the centripetal force needed to move in a circle. If the marble is too slow at the top of the loop, gravity will win and it will fall off. Your design must ensure the marble maintains enough speed to complete the loop safely."
        },
        {
          "id": "physics-101-l13-c4",
          "title": "Design Trade-offs",
          "content": "Engineering is all about trade-offs. A taller first hill gives the marble more energy and speed, but it uses more track. A wider, gentler loop is easier for the marble to complete, but less exciting. A second hill must be lower than the first because the marble will have lost some energy to friction. You must balance these factors—speed, safety, and your track budget—to create the best possible design."
        },
        {
          "id": "physics-101-l13-c5",
          "title": "Beyond Classical Physics: String Theory",
          "content": "While our roller coaster is governed by classical physics, at the most fundamental level, the universe may be even stranger. String theory suggests that all particles—like electrons and photons—are actually tiny, vibrating strings of energy. Different vibrations create different particles, like different notes from a guitar string. This theory also requires extra dimensions of space, curled up too small for us to see. It's a mind-bending idea that shows how much more there is to discover about the rules of our universe."
        }
      ],
      "flashcards": [
        {
          "id": "physics-101-l13-f1",
          "front": "Centripetal force",
          "back": "The inward-directed force that keeps an object moving in a circle; provided by gravity + normal force at the top of a loop"
        },
        {
          "id": "physics-101-l13-f2",
          "front": "Energy budget",
          "back": "Accounting for how PE converts to KE and is lost to friction at each stage of a system"
        },
        {
          "id": "physics-101-l13-f3",
          "front": "Loop height rule",
          "back": "Starting height must be at least 2.5× the loop height to ensure the marble completes the loop (accounting for friction)"
        },
        {
          "id": "physics-101-l13-f4",
          "front": "Design trade-off",
          "back": "Choosing between competing constraints: a taller hill gives more energy but uses more track; a gentle loop is safer but less thrilling."
        },
        {
          "id": "physics-101-l13-f5",
          "front": "String theory (basic idea)",
          "back": "All fundamental particles are actually tiny, one-dimensional vibrating strings of energy. Different vibrational patterns produce different particles."
        },
        {
          "id": "physics-101-l13-f6",
          "front": "Extra dimensions in string theory",
          "back": "String theory requires 10 or 11 total dimensions. The extra dimensions may be curled up at scales too small to observe directly."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l13-a1",
          "type": "image",
          "title": "Roller Coaster Energy Diagram",
          "content": "Diagram showing PE and KE bar graphs at each point along a roller coaster: top hill, bottom, loop, second hill, finish."
        },
        {
          "id": "physics-101-l13-a2",
          "type": "practice",
          "title": "Design Sketch Prompt",
          "content": "Sketch your roller coaster and label the points of maximum PE and maximum KE. Calculate the minimum starting height for a 15 cm loop."
        }
      ]
    },
    {
      "id": "physics-101-l14",
      "title": "Physics Investigation Studio",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify variables in a physics experiment",
        "Distinguish between controlled, independent, and dependent variables",
        "Design a simple investigation to test a physics question"
      ],
      "metadata": {
        "prompts": [
          "Choose one physics question: Does ramp angle affect how far a car rolls? Design an experiment to test it.",
          "What is the independent variable, dependent variable, and what must be controlled?",
          "Predict the results and explain your reasoning using physics concepts from this module."
        ]
      },
      "interactiveActivities": [
        {
          "id": "physics-101-l14-ia1",
          "type": "drag_and_drop",
          "title": "Build an Experiment",
          "description": "Drag each element to the correct part of the experimental design for testing how ramp angle affects a toy car's travel distance.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "iv",
                "label": "Independent Variable (what you change)"
              },
              {
                "id": "dv",
                "label": "Dependent Variable (what you measure)"
              },
              {
                "id": "cv",
                "label": "Controlled Variables (keep the same)"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Angle of the ramp",
                "correctTargetId": "iv"
              },
              {
                "id": "d2",
                "label": "Distance the car rolls",
                "correctTargetId": "dv"
              },
              {
                "id": "d3",
                "label": "Same car, same surface, same release point",
                "correctTargetId": "cv"
              }
            ]
          }
        },
        {
          "id": "physics-101-l14-ia2",
          "type": "sorting_buckets",
          "title": "Physics Concept Connections",
          "description": "Sort each statement into the physics topic it best connects to.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "forces",
                "label": "Forces & Motion"
              },
              {
                "id": "energy",
                "label": "Energy"
              },
              {
                "id": "waves",
                "label": "Waves & Light"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A heavier ball is harder to push",
                "correctBucketId": "forces"
              },
              {
                "id": "i2",
                "label": "A ball speeds up as it rolls downhill",
                "correctBucketId": "energy"
              },
              {
                "id": "i3",
                "label": "A prism splits white light into a rainbow",
                "correctBucketId": "waves"
              },
              {
                "id": "i4",
                "label": "Friction slows a sliding book",
                "correctBucketId": "forces"
              },
              {
                "id": "i5",
                "label": "A rubber band stores energy when stretched",
                "correctBucketId": "energy"
              },
              {
                "id": "i6",
                "label": "An echo bounces off a canyon wall",
                "correctBucketId": "waves"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l14-a1",
          "type": "practice",
          "title": "Lab Report Template",
          "content": "A simple template with sections: Question → Hypothesis → Variables → Procedure → Data → Conclusion."
        }
      ]
    },
    {
      "id": "physics-101-l15",
      "title": "Mastery Sprint: Physics Essentials",
      "type": "quiz",
      "duration": 12,
      "questions": [
        {
          "id": "physics-101-l15-q1",
          "text": "A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?",
          "skillId": "physics-101-skill-accel",
          "options": [
            {
              "id": "a",
              "text": "100 m/s²"
            },
            {
              "id": "b",
              "text": "4 m/s²"
            },
            {
              "id": "c",
              "text": "25 m/s²"
            },
            {
              "id": "d",
              "text": "15 m/s²"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Acceleration = change in velocity ÷ time = (20 m/s − 0 m/s) ÷ 5 s = 4 m/s²."
        },
        {
          "id": "physics-101-l15-q2",
          "text": "When a rocket launches, hot gas shoots downward and the rocket goes upward. Which law explains this?",
          "skillId": "physics-101-skill-newton3",
          "options": [
            {
              "id": "a",
              "text": "Newton's 1st law — inertia"
            },
            {
              "id": "b",
              "text": "Conservation of energy"
            },
            {
              "id": "c",
              "text": "Newton's 3rd law — for every action there is an equal and opposite reaction"
            },
            {
              "id": "d",
              "text": "Ohm's law"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Newton's 3rd law: the rocket pushes gas downward (action), the gas pushes the rocket upward (reaction)."
        },
        {
          "id": "physics-101-l15-q3",
          "text": "A 3 kg book falls from a 4 m shelf. How much PE did it have at the top? (use g ≈ 10 m/s²)",
          "skillId": "physics-101-skill-pe",
          "options": [
            {
              "id": "a",
              "text": "12 J"
            },
            {
              "id": "b",
              "text": "7 J"
            },
            {
              "id": "c",
              "text": "120 J"
            },
            {
              "id": "d",
              "text": "40 J"
            }
          ],
          "correctOptionId": "c",
          "explanation": "PE = mgh = 3 kg × 10 m/s² × 4 m = 120 J."
        },
        {
          "id": "physics-101-l15-q4",
          "text": "Which statement about parallel circuits is TRUE?",
          "skillId": "physics-101-skill-parallel",
          "options": [
            {
              "id": "a",
              "text": "Current follows only one path"
            },
            {
              "id": "b",
              "text": "If one bulb burns out, all others also go off"
            },
            {
              "id": "c",
              "text": "Voltage is the same across each branch"
            },
            {
              "id": "d",
              "text": "Total resistance increases as more branches are added"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In a parallel circuit, voltage is the same across every branch. Each branch provides a separate path for current. Adding branches actually decreases total resistance."
        },
        {
          "id": "physics-101-l15-q5",
          "text": "A convex lens is used in a magnifying glass because it:",
          "skillId": "physics-101-skill-optics",
          "options": [
            {
              "id": "a",
              "text": "Spreads light rays apart (diverges)"
            },
            {
              "id": "b",
              "text": "Blocks all light from passing through"
            },
            {
              "id": "c",
              "text": "Focuses light rays to a point (converges)"
            },
            {
              "id": "d",
              "text": "Reflects light back like a mirror"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A convex lens is thicker in the middle and bends light inward, focusing (converging) it to a point. This makes objects appear larger when viewed through it."
        },
        {
          "id": "physics-101-l15-q6",
          "text": "A marble at the top of a roller coaster has 50 J of PE and 0 J of KE. At the bottom, with no friction, how much KE does it have?",
          "skillId": "physics-101-skill-conservation",
          "options": [
            {
              "id": "a",
              "text": "0 J"
            },
            {
              "id": "b",
              "text": "25 J"
            },
            {
              "id": "c",
              "text": "100 J"
            },
            {
              "id": "d",
              "text": "50 J"
            }
          ],
          "correctOptionId": "d",
          "explanation": "By the law of conservation of energy, all 50 J of potential energy is converted to kinetic energy at the bottom (ignoring friction). Total energy stays at 50 J."
        }
      ],
      "interactiveActivities": [
        {
          "id": "physics-101-l15-ia1",
          "type": "drag_and_drop",
          "title": "Physics Formula Match",
          "description": "Drag each formula to the correct physics concept.",
          "estimatedMinutes": 6,
          "difficultyLevel": "hard",
          "data": {
            "targets": [
              {
                "id": "speed",
                "label": "Speed"
              },
              {
                "id": "work",
                "label": "Work"
              },
              {
                "id": "ke",
                "label": "Kinetic Energy"
              },
              {
                "id": "pe",
                "label": "Potential Energy"
              },
              {
                "id": "ohm",
                "label": "Ohm's Law"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "d ÷ t",
                "correctTargetId": "speed"
              },
              {
                "id": "d2",
                "label": "F × d",
                "correctTargetId": "work"
              },
              {
                "id": "d3",
                "label": "½mv²",
                "correctTargetId": "ke"
              },
              {
                "id": "d4",
                "label": "mgh",
                "correctTargetId": "pe"
              },
              {
                "id": "d5",
                "label": "V = IR",
                "correctTargetId": "ohm"
              }
            ]
          }
        }
      ],
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 6,
        "totalQuestions": 6,
        "timeLimitMinutes": 12,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 6,
            "pointsEach": 1,
            "bloomsLevels": [
              1,
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 1,
          "medium": 3,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "physics-101-l15-a1",
          "type": "mnemonic",
          "title": "Formula Sheet",
          "content": "Speed = d/t | F = ma | W = Fd | KE = ½mv² | PE = mgh | V = IR"
        }
      ]
    }
  ]
};
