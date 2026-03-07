import type { LearningModule } from "@/lib/modules/types";

export const apple_vision_science_lab_Module: LearningModule = {
  "id": "science-vision-lab",
  "title": "Apple Vision Science Lab",
  "description": "Immersive science lab pathway with spatial safety, AR experiments, and concept mastery checks.",
  "subject": "Science",
  "tags": [
    "immersive",
    "ar",
    "apple-vision",
    "spatial-computing"
  ],
  "minAge": 9,
  "maxAge": 18,
  "version": "1.1.0",
  "learningObjectives": [
    "Safely launch and navigate immersive science experiences.",
    "Use spatial interactions to observe measurement and model-based science concepts.",
    "Explain evidence gathered in AR-based investigations."
  ],
  "lessons": [
    {
      "id": "svl-l1",
      "title": "Device Capability Check",
      "type": "interactive",
      "duration": 6,
      "lessonImagePrompt": "Imagen 4 prompt: A futuristic, glowing holographic checklist floating in a well-lit modern bedroom, viewed through an AR headset perspective. High-tech UI elements, photorealistic, 4k resolution, vibrant colors.",
      "conceptVideoPrompt": "Veo 3.1 prompt: First-person view of a student putting on an AR headset. The room scans with a glowing blue grid, mapping the floor and walls. A green checkmark appears in the air, signaling readiness. Cinematic lighting, smooth camera pan, 3D spatial computing style.",
      "metadata": {
        "route": "/science-lab",
        "prompts": [
          "Run a headset and browser capability check before starting experiments.",
          "Confirm play-space boundaries and hand-tracking readiness."
        ]
      },
      "chunks": [
        {
          "id": "svl-l1-c1",
          "title": "Welcome to the AR Lab",
          "content": "Welcome to the AR Lab! Before we dive into our immersive science experiments, we need to make sure your headset and play space are ready to go. Remember, a safe lab is a successful lab!"
        },
        {
          "id": "svl-l1-c2",
          "title": "Environment Check",
          "content": "First, clear your area of any tripping hazards like shoes or backpacks. Ensure your room is well-lit so the headset's cameras can track your hands and map your environment perfectly."
        }
      ],
      "interactiveActivities": [
        {
          "id": "svl-l1-ia1",
          "type": "lab_virtual",
          "title": "Immersive Preflight Checklist",
          "description": "Complete a guided setup and safety readiness run before lab tasks.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "instructions": [
            "Confirm room boundary scan.",
            "Validate hand tracking and sensor permissions.",
            "Acknowledge safety reminders before launching."
          ],
          "data": {
            "checks": [
              {
                "id": "boundary",
                "label": "Boundary mapped",
                "required": true
              },
              {
                "id": "tracking",
                "label": "Hand tracking stable",
                "required": true
              },
              {
                "id": "lighting",
                "label": "Room lighting acceptable",
                "required": true
              },
              {
                "id": "stance",
                "label": "Centered stance confirmed",
                "required": true
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "svl-l1-a1",
          "type": "practice",
          "title": "Preflight Checklist",
          "content": "Verify sensor permissions, room lighting, and safe movement area."
        }
      ],
      "imageUrl": "/generated-images/refinery/svl-l1.png"
    },
    {
      "id": "svl-l2",
      "title": "Video: Immersive Lab Safety and Controls",
      "type": "video",
      "duration": 7,
      "lessonImagePrompt": "Imagen 4 prompt: A bright, colorful 3D infographic map of a room showing safe zones in glowing green and boundary walls in red. Augmented reality elements floating in the air, educational, clear, photorealistic, 4k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A teenager standing in the center of a room, wearing an AR headset. A glowing circular 'safe zone' appears on the floor around them. They reach out to interact with floating digital planets, staying safely within the glowing circle. Smooth camera pan, cinematic lighting.",
      "chunks": [
        {
          "id": "svl-l2-c1",
          "title": "The Scan-Stand-Start Method",
          "content": "Always use the Scan-Stand-Start method. First, SCAN your room for obstacles. Next, STAND in the center of your clear space. Finally, START your immersive experience. This keeps you safe while you explore!"
        },
        {
          "id": "svl-l2-c2",
          "title": "Respect the Grid",
          "content": "If you see a glowing grid appear while you are moving, it means you are getting too close to a physical wall or object. Stop immediately, turn around, and step back to your center point."
        }
      ],
      "learningAids": [
        {
          "id": "svl-l2-a1",
          "type": "image",
          "title": "Safety Zones Map",
          "content": "Map front, side, and boundary zones for safe movement."
        },
        {
          "id": "svl-l2-a2",
          "type": "mnemonic",
          "title": "Scan-Stand-Start",
          "content": "Scan your area, stand centered, then start interaction."
        }
      ],
      "imageUrl": "/generated-images/refinery/svl-l2.png"
    },
    {
      "id": "svl-l3",
      "title": "Checkpoint Quiz: Immersive Lab Readiness",
      "type": "quiz",
      "duration": 9,
      "lessonImagePrompt": "Imagen 4 prompt: A floating digital quiz interface in an augmented reality environment, with glowing buttons and a holographic lock unlocking, symbolizing readiness. High-tech, educational, photorealistic, 4k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A quick cinematic montage of a student successfully completing a safety checklist in AR, giving a thumbs up, and a virtual door opening to a glowing science lab. Fast-paced, engaging, high-quality 3D render.",
      "chunks": [
        {
          "id": "svl-l3-c1",
          "title": "Knowledge Check",
          "content": "Before we start handling virtual science equipment, let's make sure you understand the safety protocols and controls for your AR headset. Let's test your knowledge!"
        }
      ],
      "questions": [
        {
          "id": "svl-l3-q1",
          "text": "What should you do first before starting an immersive lab?",
          "skillId": "immersive-safety",
          "options": [
            {
              "id": "a",
              "text": "Run device and safety checks."
            },
            {
              "id": "b",
              "text": "Jump directly into the experiment."
            },
            {
              "id": "c",
              "text": "Disable hand tracking."
            },
            {
              "id": "d",
              "text": "Ignore room boundaries."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l3-q2",
          "text": "Why are clear play-space boundaries important?",
          "skillId": "immersive-safety",
          "options": [
            {
              "id": "a",
              "text": "They prevent collisions and support safe movement."
            },
            {
              "id": "b",
              "text": "They make rendering slower."
            },
            {
              "id": "c",
              "text": "They reduce all interaction features."
            },
            {
              "id": "d",
              "text": "They are only needed for non-science apps."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l3-q3",
          "text": "What should you do if hand tracking becomes unstable?",
          "skillId": "immersive-controls",
          "options": [
            {
              "id": "a",
              "text": "Pause, recalibrate, and re-check environment lighting."
            },
            {
              "id": "b",
              "text": "Ignore it and continue rapidly."
            },
            {
              "id": "c",
              "text": "Disable all safety prompts."
            },
            {
              "id": "d",
              "text": "Increase the speed of your hand movements."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l3-q4",
          "text": "What does the 'Scan' step in Scan-Stand-Start mean?",
          "skillId": "immersive-safety",
          "options": [
            {
              "id": "a",
              "text": "Look around your physical room for tripping hazards."
            },
            {
              "id": "b",
              "text": "Scan a QR code to download the app."
            },
            {
              "id": "c",
              "text": "Scan the virtual objects in the lab."
            },
            {
              "id": "d",
              "text": "Scan your eyes for biometric login."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "svl-l3-ia1",
          "type": "matching_pairs",
          "title": "Safety Action Match",
          "description": "Match immersive lab risks to the correct safety response.",
          "estimatedMinutes": 6,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Unmapped room boundary"
              },
              {
                "id": "l2",
                "label": "Unstable hand tracking"
              },
              {
                "id": "l3",
                "label": "Approaching a physical wall"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Run boundary setup before lab start"
              },
              {
                "id": "r2",
                "label": "Pause and check room lighting"
              },
              {
                "id": "r3",
                "label": "Stop and step back to the center"
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
      "quizBlueprint": {
        "frequency": "lesson_assessment",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 9,
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
          "easy": 3,
          "medium": 1,
          "hard": 0
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "imageUrl": "/generated-images/refinery/svl-l3.png"
    },
    {
      "id": "svl-l4",
      "title": "Interactive: AR Measurement Lab",
      "type": "interactive",
      "duration": 12,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing holographic ruler measuring a physical wooden block on a desk, augmented reality perspective, glowing blue and green data points floating in the air, photorealistic, 4k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: First-person AR view. The user looks at a real-world apple on a table. A floating text box says 'Estimate: 8cm'. The user pinches their fingers to drag a glowing digital ruler across the apple. The ruler reads 'Actual: 7.5cm'. The data logs into a floating virtual clipboard. Smooth motion.",
      "metadata": {
        "route": "/science-lab",
        "prompts": [
          "Measure three objects and compare the estimates with actual values.",
          "Record which measurement was hardest and explain why.",
          "Describe one strategy that improved your measurement accuracy."
        ]
      },
      "chunks": [
        {
          "id": "svl-l4-c1",
          "title": "The Power of Estimation",
          "content": "Before you measure an object, make an educated guess about its length. This builds your spatial awareness and helps you spot errors if your actual measurement seems way off."
        },
        {
          "id": "svl-l4-c2",
          "title": "Using the AR Ruler",
          "content": "Pinch your fingers together at one end of the object, drag to the other end, and release. The AR system will calculate the exact distance. Compare this to your estimate to find your error margin!"
        },
        {
          "id": "svl-l4-c3",
          "title": "Recording Your Findings",
          "content": "Science is all about data! Once you measure your objects, record the difference between your estimate and the actual size. This difference is called your 'error margin'. The smaller the margin, the better your estimate!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "svl-l4-ia1",
          "type": "virtual_manipulative",
          "title": "AR Measurement Bench",
          "description": "Capture estimate vs measured values and compute error margins.",
          "estimatedMinutes": 10,
          "difficultyLevel": "medium",
          "instructions": [
            "Select an object in your room and estimate its length.",
            "Use the AR pinch-and-drag tool to take an actual reading.",
            "Compare results and log the error margin in your virtual clipboard."
          ],
          "data": {
            "fields": [
              "estimate",
              "measured",
              "difference",
              "notes"
            ],
            "requiredTrials": 3
          }
        }
      ],
      "learningAids": [
        {
          "id": "svl-l4-a1",
          "type": "practice",
          "title": "Measurement Log",
          "content": "Capture estimate, observed value, and error margin for each object."
        }
      ],
      "imageUrl": "/generated-images/refinery/svl-l4.png"
    },
    {
      "id": "svl-l5",
      "title": "Interactive: Solar Scale Placement",
      "type": "interactive",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A stunning augmented reality solar system floating in the middle of a classroom. Glowing planets orbiting a bright sun, with faint orbital lines. Photorealistic, highly detailed, 4k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A student in an AR headset uses hand gestures to grab and move a glowing 3D model of Jupiter, placing it further away from a virtual Sun. The orbital rings adjust dynamically. Cinematic, awe-inspiring space education, smooth tracking.",
      "metadata": {
        "route": "/science-lab",
        "prompts": [
          "Place planets in order of distance from the Sun.",
          "Adjust spacing to model why outer orbits are longer.",
          "Explain one misconception corrected during this activity."
        ]
      },
      "chunks": [
        {
          "id": "svl-l5-c1",
          "title": "Building the Solar System",
          "content": "The solar system is massive! In this lab, you'll build a scale model right in your room. You will grab and place planets in their correct order from the Sun."
        },
        {
          "id": "svl-l5-c2",
          "title": "Understanding Orbital Distance",
          "content": "Pay close attention to the distances between the planets. A common misconception is that planets are evenly spaced. You'll soon see that the outer gas giants are much further apart than the inner rocky planets!"
        },
        {
          "id": "svl-l5-c3",
          "title": "The Vastness of Space",
          "content": "Did you know that if Earth were the size of a marble, Neptune would be over two miles away? Let's see how well you can estimate these massive relative distances in your own room!"
        }
      ],
      "interactiveActivities": [
        {
          "id": "svl-l5-ia1",
          "type": "simulation",
          "title": "Solar Scale AR Placement",
          "description": "Arrange planets in 3D space and test orbital distance assumptions.",
          "estimatedMinutes": 9,
          "difficultyLevel": "medium",
          "instructions": [
            "Grab and place planets in distance order from the Sun.",
            "Toggle scale hints to compare your model to reality.",
            "Record one corrected misconception about planetary spacing."
          ],
          "data": {
            "objects": [
              "Mercury",
              "Venus",
              "Earth",
              "Mars",
              "Jupiter",
              "Saturn",
              "Uranus",
              "Neptune"
            ],
            "validationMode": "distance-order"
          }
        }
      ],
      "learningAids": [
        {
          "id": "svl-l5-a1",
          "type": "animation",
          "title": "Orbit Spacing Guide",
          "content": "Animated overlay showing relative spacing and orbital paths."
        }
      ],
      "imageUrl": "/generated-images/refinery/svl-l5.png"
    },
    {
      "id": "svl-l6",
      "title": "Mastery Quiz: AR Science Investigation",
      "type": "quiz",
      "duration": 10,
      "lessonImagePrompt": "Imagen 4 prompt: A glowing holographic trophy surrounded by floating science symbols like atoms, planets, and rulers, set in a modern classroom environment. Achievement unlocked concept, photorealistic, 4k.",
      "conceptVideoPrompt": "Veo 3.1 prompt: A fast-paced cinematic recap of the AR science lab: scanning the room, measuring objects, and placing planets. Ends with a bright glowing '100% Mastery' badge floating in the air. Celebratory, high-tech, smooth transitions.",
      "chunks": [
        {
          "id": "svl-l6-c1",
          "title": "Lab Review",
          "content": "You've successfully navigated the AR lab, measured physical objects with digital tools, and built a scale model of the solar system. Let's test your mastery of these scientific concepts!"
        }
      ],
      "questions": [
        {
          "id": "svl-l6-q1",
          "text": "Which sequence best represents a high-quality immersive investigation?",
          "skillId": "investigation-flow",
          "options": [
            {
              "id": "a",
              "text": "Check setup -> collect evidence -> review and explain findings."
            },
            {
              "id": "b",
              "text": "Collect guesses -> skip recording -> submit result."
            },
            {
              "id": "c",
              "text": "Disable controls -> move quickly -> stop early."
            },
            {
              "id": "d",
              "text": "Start quiz first -> run setup later."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l6-q2",
          "text": "Why is it useful to compare estimate and measured values in AR labs?",
          "skillId": "measurement-practice",
          "options": [
            {
              "id": "a",
              "text": "It helps refine accuracy and spatial reasoning."
            },
            {
              "id": "b",
              "text": "It removes the need for gathering actual evidence."
            },
            {
              "id": "c",
              "text": "It proves that AR tools are always 100% perfect."
            },
            {
              "id": "d",
              "text": "It slows down learning with no real benefit."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l6-q3",
          "text": "What is one major advantage of using immersive AR models for science learning?",
          "skillId": "immersive-learning",
          "options": [
            {
              "id": "a",
              "text": "They make massive or abstract systems easier to visualize and test."
            },
            {
              "id": "b",
              "text": "They remove the need for scientific explanations."
            },
            {
              "id": "c",
              "text": "They replace all forms of traditional assessment."
            },
            {
              "id": "d",
              "text": "They only work if you ignore safety checks."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "svl-l6-q4",
          "text": "Which reflection supports strong scientific reasoning after an AR activity?",
          "skillId": "evidence-reflection",
          "options": [
            {
              "id": "a",
              "text": "Describing the evidence observed and explaining how it supports your claim."
            },
            {
              "id": "b",
              "text": "Stating an answer without providing any evidence."
            },
            {
              "id": "c",
              "text": "Copying a result from a completely different activity."
            },
            {
              "id": "d",
              "text": "Skipping the explanation entirely to save time."
            }
          ],
          "correctOptionId": "a"
        }
      ],
      "interactiveActivities": [
        {
          "id": "svl-l6-ia1",
          "type": "matching_pairs",
          "title": "Investigation Flow Match",
          "description": "Pair each investigation signal with a high-quality scientific action.",
          "estimatedMinutes": 7,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "No setup check completed"
              },
              {
                "id": "l2",
                "label": "Data logged without reflection"
              },
              {
                "id": "l3",
                "label": "Claim made without evidence link"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Run setup preflight before collection"
              },
              {
                "id": "r2",
                "label": "Review estimate-measure gaps and annotate"
              },
              {
                "id": "r3",
                "label": "Attach observed evidence to claim"
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
      "quizBlueprint": {
        "frequency": "mastery_check",
        "questionsPerCheck": 4,
        "totalQuestions": 4,
        "timeLimitMinutes": 10,
        "questionTypes": [
          {
            "type": "mcq_single",
            "count": 4,
            "pointsEach": 1,
            "bloomsLevels": [
              2,
              3,
              4
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
        "masteryThreshold": 0.8
      },
      "imageUrl": "/generated-images/refinery/svl-l6.png"
    }
  ]
};
