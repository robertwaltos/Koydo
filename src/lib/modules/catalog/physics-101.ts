import type { LearningModule } from "@/lib/modules/types";

export const Physics101Module: LearningModule = {
  id: "physics-101",
  title: "Physics Essentials",
  description:
    "Study motion, forces, energy, waves, electricity, and simple machines through hands-on activities and real-world examples.",
  subject: "Physics",
  tags: ["core", "curriculum", "interactive", "enriched-from-epub"],
  minAge: 7,
  maxAge: 18,
  version: "2.0.0",
  learningObjectives: [
    "Describe motion using speed, velocity, and acceleration",
    "Apply Newton's three laws of motion to real-world situations",
    "Explain energy transformations and the law of conservation of energy",
    "Distinguish between types of waves and describe wave properties",
    "Build and analyze simple electric circuits using Ohm's law",
    "Identify the six simple machines and calculate mechanical advantage",
    "Explain how light behaves through reflection, refraction, and absorption",
    "Design a physics-based solution using multiple concepts together"
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Motion and Speed  (video)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l01",
      title: "Motion and Speed",
      type: "video",
      duration: 10,
      objectives: [
        "Define position, distance, and displacement",
        "Calculate speed using the formula speed = distance ÷ time",
        "Distinguish between speed and velocity"
      ],
      chunks: [
        {
          id: "physics-101-l01-c1",
          title: "What Is Motion?",
          content:
            "An object is in motion when its position changes relative to a reference point. If you sit on a bus, you are not moving relative to the seat, but you are moving relative to the road. Motion is always described in comparison to something else."
        },
        {
          id: "physics-101-l01-c2",
          title: "Distance vs Displacement",
          content:
            "Distance is the total path length traveled — it is always positive. Displacement is the straight-line distance from start to finish in a specific direction. Example: Walking 3 blocks north then 4 blocks east covers 7 blocks of distance, but only 5 blocks of displacement (using the Pythagorean theorem: √(3² + 4²) = 5)."
        },
        {
          id: "physics-101-l01-c3",
          title: "Speed and Velocity",
          content:
            "Speed = distance ÷ time. It tells you how fast something moves but not which direction. Velocity = displacement ÷ time. It includes direction. A car driving in a circle at 30 km/h has constant speed but changing velocity because the direction keeps changing. Common units: m/s, km/h, mph."
        },
        {
          id: "physics-101-l01-c4",
          title: "Worked Example",
          content:
            "A cyclist travels 600 meters in 2 minutes. What is her speed? Step 1: Convert 2 minutes to seconds: 2 × 60 = 120 s. Step 2: speed = 600 m ÷ 120 s = 5 m/s. That is about 18 km/h — a comfortable cruising pace on a bicycle."
        },
        {
          id: "physics-101-l01-c5",
          title: "The Cosmic Speed Limit",
          content:
            "Einstein's special relativity revealed that the speed of light (about 300,000 km/s) is the absolute speed limit of the universe. Nothing can travel faster. As Brian Greene explains, our everyday intuition about speed is 'informed by motion that is typically extremely slow compared to the speed of light, and such low speeds obscure the true character of space and time.' As objects approach light speed, time slows down (time dilation) and lengths contract. This means that motion fundamentally changes the nature of space and time themselves — a radical departure from Newton's view of absolute space and time."
        }
      ],
      flashcards: [
        { id: "physics-101-l01-f1", front: "Speed formula", back: "Speed = distance ÷ time (measured in m/s, km/h, or mph)" },
        { id: "physics-101-l01-f2", front: "Distance vs Displacement", back: "Distance = total path length (scalar); Displacement = straight-line start-to-finish with direction (vector)" },
        { id: "physics-101-l01-f3", front: "Velocity", back: "Displacement ÷ time; like speed but includes direction" },
        { id: "physics-101-l01-f4", front: "Reference point", back: "The object or location you compare against to decide whether something is moving" },
        { id: "physics-101-l01-f5", front: "What is the cosmic speed limit?", back: "The speed of light (~300,000 km/s or ~3×10⁸ m/s). Einstein's special relativity shows nothing with mass can reach or exceed this speed." },
        { id: "physics-101-l01-f6", front: "Time dilation (special relativity)", back: "Time passes more slowly for objects moving at speeds close to the speed of light. A clock on a fast-moving spaceship ticks slower than one on Earth." }
      ],
      learningAids: [
        { id: "physics-101-l01-a1", type: "image", title: "Motion Diagram", content: "A diagram showing a runner with distance markers, displacement arrow, and speed calculation." },
        { id: "physics-101-l01-a2", type: "animation", title: "Speed vs Velocity", content: "Animation of a car on a circular track — constant speed, changing velocity." }
      ]
    },

    /* ──────────────────────────────────────────────
       L02  Forces and Newton's Laws  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l02",
      title: "Forces and Newton's Laws",
      type: "interactive",
      duration: 12,
      objectives: [
        "Define force and identify contact vs non-contact forces",
        "State Newton's three laws of motion",
        "Draw a simple free-body diagram"
      ],
      metadata: {
        prompts: [
          "Name two forces acting on a book sitting on a desk.",
          "Explain what happens when you push a shopping cart — which of Newton's laws applies?",
          "Why does a hockey puck eventually stop on ice even though Newton's first law says it should keep going?"
        ]
      },
      interactiveActivities: [
        {
          id: "physics-101-l02-ia1",
          type: "sorting_buckets",
          title: "Sort the Forces",
          description: "Classify each force as a contact force or a non-contact force.",
          estimatedMinutes: 7,
          difficultyLevel: "easy",
          data: {
            buckets: [
              { id: "contact", label: "Contact Forces" },
              { id: "noncontact", label: "Non-Contact Forces" }
            ],
            items: [
              { id: "i1", label: "Friction between shoes and floor", correctBucketId: "contact" },
              { id: "i2", label: "Gravity pulling an apple down", correctBucketId: "noncontact" },
              { id: "i3", label: "A spring pushing a ball", correctBucketId: "contact" },
              { id: "i4", label: "Magnetic attraction of a fridge magnet", correctBucketId: "noncontact" },
              { id: "i5", label: "Air resistance on a parachute", correctBucketId: "contact" },
              { id: "i6", label: "Earth's gravitational pull on the Moon", correctBucketId: "noncontact" }
            ]
          }
        },
        {
          id: "physics-101-l02-ia2",
          type: "matching_pairs",
          title: "Newton's Laws Match",
          description: "Match each law to the correct real-world example.",
          estimatedMinutes: 6,
          difficultyLevel: "medium",
          data: {
            left: [
              { id: "l1", label: "1st Law (Inertia)" },
              { id: "l2", label: "2nd Law (F = ma)" },
              { id: "l3", label: "3rd Law (Action-Reaction)" }
            ],
            right: [
              { id: "r1", label: "A seatbelt stops you when the car brakes suddenly" },
              { id: "r2", label: "A heavier box needs more force to accelerate" },
              { id: "r3", label: "A rocket pushes gas down, gas pushes rocket up" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "physics-101-l02-a1", type: "mnemonic", title: "Newton's Laws Memory Aid", content: "1st: Stay (objects resist change), 2nd: Push (F = ma), 3rd: Bounce Back (every action has an equal and opposite reaction)." }
      ]
    },

    /* ──────────────────────────────────────────────
       L03  Checkpoint: Motion & Forces  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l03",
      title: "Checkpoint: Motion & Forces",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "physics-101-l03-q1",
          text: "A student walks 4 m east and then 3 m west. What is her displacement?",
          skillId: "physics-101-skill-motion",
          options: [
            { id: "a", text: "7 m east" },
            { id: "b", text: "1 m east" },
            { id: "c", text: "3.5 m west" },
            { id: "d", text: "1 m west" }
          ],
          correctOptionId: "b",
          explanation: "Displacement = 4 m east − 3 m west = 1 m east (net direction). Distance would be 7 m."
        },
        {
          id: "physics-101-l03-q2",
          text: "A cheetah runs 300 m in 10 seconds. What is its average speed?",
          skillId: "physics-101-skill-speed",
          options: [
            { id: "a", text: "3 m/s" },
            { id: "b", text: "3000 m/s" },
            { id: "c", text: "30 m/s" },
            { id: "d", text: "310 m/s" }
          ],
          correctOptionId: "c",
          explanation: "Speed = distance ÷ time = 300 m ÷ 10 s = 30 m/s (about 108 km/h)."
        },
        {
          id: "physics-101-l03-q3",
          text: "Which of Newton's laws explains why you lurch forward when a bus stops suddenly?",
          skillId: "physics-101-skill-forces",
          options: [
            { id: "a", text: "Third law — action and reaction" },
            { id: "b", text: "Second law — F = ma" },
            { id: "c", text: "First law — an object in motion tends to stay in motion" },
            { id: "d", text: "Law of gravity only" }
          ],
          correctOptionId: "c",
          explanation: "Newton's first law (inertia): your body was moving with the bus and tends to keep moving even after the bus stops."
        },
        {
          id: "physics-101-l03-q4",
          text: "Two identical boxes sit on a floor. Box A is pushed with 20 N and Box B with 40 N. Which accelerates faster?",
          skillId: "physics-101-skill-newton2",
          options: [
            { id: "a", text: "Box A — less force means more acceleration" },
            { id: "b", text: "They accelerate equally because they have the same mass" },
            { id: "c", text: "Neither moves because of friction" },
            { id: "d", text: "Box B — more force on the same mass means greater acceleration" }
          ],
          correctOptionId: "d",
          explanation: "F = ma → a = F/m. Same mass, double the force = double the acceleration."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "physics-101-l03-a1", type: "mnemonic", title: "Speed Formula", content: "Speed = Distance ÷ Time → think S-D-T triangle: cover the letter you want, the remaining two show the formula." }
      ]
    },

    /* ──────────────────────────────────────────────
       L04  Work and Energy  (video)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l04",
      title: "Work and Energy",
      type: "video",
      duration: 11,
      objectives: [
        "Define work, kinetic energy, and potential energy",
        "Calculate work using W = F × d",
        "Explain the law of conservation of energy"
      ],
      chunks: [
        {
          id: "physics-101-l04-c1",
          title: "What Is Work?",
          content:
            "In physics, work is done when a force moves an object in the direction of the force. Formula: Work = Force × Distance (W = F × d). Work is measured in joules (J). If you push a box with 10 N of force for 3 m, you do 30 J of work. Holding a heavy bag while standing still does zero work — no distance moved."
        },
        {
          id: "physics-101-l04-c2",
          title: "Kinetic Energy",
          content:
            "Kinetic energy is the energy of motion. KE = ½ × mass × velocity² (KE = ½mv²). A 2 kg ball rolling at 3 m/s has KE = ½ × 2 × 9 = 9 J. Doubling the speed quadruples the kinetic energy — that is why car crashes at high speed are so much more dangerous."
        },
        {
          id: "physics-101-l04-c3",
          title: "Potential Energy",
          content:
            "Potential energy is stored energy due to position or condition. Gravitational PE = mass × gravity × height (PE = mgh). A 5 kg book on a 2 m shelf: PE = 5 × 9.8 × 2 = 98 J. Elastic PE is stored in stretched or compressed objects like rubber bands and springs."
        },
        {
          id: "physics-101-l04-c4",
          title: "Conservation of Energy",
          content:
            "Energy cannot be created or destroyed — only transformed. When a ball falls from a shelf, PE converts to KE. At the top: all PE, zero KE. At the bottom: all KE, zero PE. Total energy stays the same (ignoring air resistance). A pendulum swings back and forth continuously converting between PE and KE."
        },
        {
          id: "physics-101-l04-c5",
          title: "E = mc² — Mass as Concentrated Energy",
          content:
            "Einstein's famous equation E = mc² reveals that mass and energy are two forms of the same thing. As Marcus Chown notes, 'a cup of coffee weighs more when it is hot than when it is cold' — because thermal energy has mass. The 'c²' factor (speed of light squared) is enormous (~9×10¹⁶), meaning a tiny amount of mass contains a staggering amount of energy. This is why nuclear reactions release millions of times more energy than chemical reactions: they convert a small fraction of nuclear mass directly into energy."
        }
      ],
      flashcards: [
        { id: "physics-101-l04-f1", front: "Work formula", back: "W = F × d (force × distance in the direction of force), measured in joules (J)" },
        { id: "physics-101-l04-f2", front: "Kinetic energy", back: "KE = ½mv² — energy of motion; doubling speed quadruples KE" },
        { id: "physics-101-l04-f3", front: "Gravitational potential energy", back: "PE = mgh (mass × gravity × height); stored energy due to position" },
        { id: "physics-101-l04-f4", front: "Conservation of energy", back: "Energy is never created or destroyed, only transformed from one form to another" },
        { id: "physics-101-l04-f5", front: "E = mc² (mass-energy equivalence)", back: "Energy equals mass times the speed of light squared. A small amount of mass converts to an enormous amount of energy because c² ≈ 9×10¹⁶ m²/s²." },
        { id: "physics-101-l04-f6", front: "Why do nuclear reactions release so much energy?", back: "Nuclear reactions convert a fraction of the mass of atomic nuclei directly into energy via E = mc². Even a tiny mass loss produces enormous energy because the speed of light squared is so large." }
      ],
      learningAids: [
        { id: "physics-101-l04-a1", type: "animation", title: "Pendulum Energy", content: "Animation showing PE ↔ KE conversion in a swinging pendulum with energy bar graph." }
      ]
    },

    /* ──────────────────────────────────────────────
       L05  Waves and Sound  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l05",
      title: "Waves and Sound",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify parts of a wave: crest, trough, wavelength, amplitude",
        "Distinguish transverse and longitudinal waves",
        "Explain how sound travels and what affects its speed"
      ],
      metadata: {
        prompts: [
          "Draw a transverse wave and label the crest, trough, wavelength, and amplitude.",
          "Explain why sound cannot travel through outer space.",
          "What happens to the pitch of a sound when the frequency increases?"
        ]
      },
      interactiveActivities: [
        {
          id: "physics-101-l05-ia1",
          type: "sorting_buckets",
          title: "Wave Type Sort",
          description: "Classify each example as a transverse wave or a longitudinal wave.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "transverse", label: "Transverse Waves" },
              { id: "longitudinal", label: "Longitudinal Waves" }
            ],
            items: [
              { id: "i1", label: "Light from the Sun", correctBucketId: "transverse" },
              { id: "i2", label: "Sound from a speaker", correctBucketId: "longitudinal" },
              { id: "i3", label: "A wave on a rope", correctBucketId: "transverse" },
              { id: "i4", label: "A slinky pushed end-to-end", correctBucketId: "longitudinal" },
              { id: "i5", label: "Radio waves", correctBucketId: "transverse" },
              { id: "i6", label: "Ultrasound in a medical scan", correctBucketId: "longitudinal" }
            ]
          }
        },
        {
          id: "physics-101-l05-ia2",
          type: "matching_pairs",
          title: "Wave Properties Match",
          description: "Match each wave property to its correct definition.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Wavelength" },
              { id: "l2", label: "Amplitude" },
              { id: "l3", label: "Frequency" },
              { id: "l4", label: "Crest" }
            ],
            right: [
              { id: "r1", label: "Distance from one peak to the next" },
              { id: "r2", label: "Height from the rest position to the peak" },
              { id: "r3", label: "Number of waves passing a point per second (Hz)" },
              { id: "r4", label: "The highest point of a transverse wave" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "physics-101-l05-a1", type: "image", title: "Wave Anatomy Poster", content: "Labeled diagram of a transverse wave showing crest, trough, wavelength, and amplitude." }
      ]
    },

    /* ──────────────────────────────────────────────
       L06  Checkpoint: Energy & Waves  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l06",
      title: "Checkpoint: Energy & Waves",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "physics-101-l06-q1",
          text: "A student pushes a desk 4 m with a force of 25 N. How much work is done?",
          skillId: "physics-101-skill-work",
          options: [
            { id: "a", text: "6.25 J" },
            { id: "b", text: "100 J" },
            { id: "c", text: "29 J" },
            { id: "d", text: "100 N" }
          ],
          correctOptionId: "b",
          explanation: "W = F × d = 25 N × 4 m = 100 J. Remember the unit for work is joules, not newtons."
        },
        {
          id: "physics-101-l06-q2",
          text: "A ball is held at the top of a ramp. What type of energy does it have the most of?",
          skillId: "physics-101-skill-energy",
          options: [
            { id: "a", text: "Kinetic energy" },
            { id: "b", text: "Sound energy" },
            { id: "c", text: "Gravitational potential energy" },
            { id: "d", text: "Electrical energy" }
          ],
          correctOptionId: "c",
          explanation: "At the top and not yet moving, the ball has maximum gravitational PE (mgh) and zero KE."
        },
        {
          id: "physics-101-l06-q3",
          text: "Which type of wave needs a medium (like air or water) to travel through?",
          skillId: "physics-101-skill-waves",
          options: [
            { id: "a", text: "Light waves" },
            { id: "b", text: "Radio waves" },
            { id: "c", text: "Sound waves" },
            { id: "d", text: "X-rays" }
          ],
          correctOptionId: "c",
          explanation: "Sound is a longitudinal (mechanical) wave — it needs particles to vibrate through. Light, radio, and X-rays are electromagnetic waves that can travel through a vacuum."
        },
        {
          id: "physics-101-l06-q4",
          text: "If you double the amplitude of a wave, what happens to its energy?",
          skillId: "physics-101-skill-wave-energy",
          options: [
            { id: "a", text: "Energy stays the same" },
            { id: "b", text: "Energy doubles" },
            { id: "c", text: "Energy is cut in half" },
            { id: "d", text: "Energy quadruples (4×)" }
          ],
          correctOptionId: "d",
          explanation: "Wave energy is proportional to amplitude squared. Double the amplitude → 2² = 4× the energy."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "physics-101-l06-a1", type: "mnemonic", title: "Energy Types", content: "KE = motion, PE = position. A falling object trades PE for KE." }
      ]
    },

    /* ──────────────────────────────────────────────
       L07  Electricity Basics  (video)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l07",
      title: "Electricity Basics",
      type: "video",
      duration: 12,
      objectives: [
        "Explain electric current, voltage, and resistance",
        "Apply Ohm's law: V = I × R",
        "Compare series and parallel circuits"
      ],
      chunks: [
        {
          id: "physics-101-l07-c1",
          title: "Electric Charge and Current",
          content:
            "All matter contains positive protons and negative electrons. When electrons flow through a conductor (like a copper wire), we call that electric current. Current (I) is measured in amperes (A). Think of current like water flowing through a pipe — more flow = more current."
        },
        {
          id: "physics-101-l07-c2",
          title: "Voltage and Resistance",
          content:
            "Voltage (V) is the 'push' that drives electrons through a circuit — like water pressure in a hose. It is measured in volts (V). Resistance (R) opposes current flow and is measured in ohms (Ω). Thin wires, long wires, and certain materials have high resistance. A light bulb works because the filament has high resistance, converting electrical energy into light and heat."
        },
        {
          id: "physics-101-l07-c3",
          title: "Ohm's Law",
          content:
            "Ohm's law: V = I × R. If a circuit has 2 A of current and 6 Ω of resistance, the voltage is V = 2 × 6 = 12 V. Rearrange to find current: I = V/R, or resistance: R = V/I. This is one of the most important equations in physics and electronics."
        },
        {
          id: "physics-101-l07-c4",
          title: "Series vs Parallel Circuits",
          content:
            "In a series circuit, components are connected end-to-end — current follows one path. If one bulb burns out, all go dark (like old Christmas lights). In a parallel circuit, components are on separate branches — current splits. If one bulb burns out, the others stay lit (like outlets in your house). Most real wiring uses parallel circuits."
        },
        {
          id: "physics-101-l07-c5",
          title: "Maxwell's Electromagnetic Unification",
          content:
            "In the mid-1800s, James Clerk Maxwell achieved one of physics' greatest triumphs: he unified electricity and magnetism into a single framework — the electromagnetic field. As Brian Greene describes, Maxwell 'succeeded in uniting electricity and magnetism in the framework of the electromagnetic field.' Maxwell showed that light itself is an electromagnetic wave — oscillating electric and magnetic fields traveling through space. This unification inspired Einstein's quest for a unified theory of all forces, a dream that continues today through string theory."
        }
      ],
      flashcards: [
        { id: "physics-101-l07-f1", front: "Ohm's law", back: "V = I × R (Voltage = Current × Resistance)" },
        { id: "physics-101-l07-f2", front: "Current (I)", back: "Flow of electric charge through a conductor, measured in amperes (A)" },
        { id: "physics-101-l07-f3", front: "Series circuit", back: "One path for current; if one component fails, the whole circuit breaks" },
        { id: "physics-101-l07-f4", front: "Parallel circuit", back: "Multiple paths for current; if one branch fails, others still work" },
        { id: "physics-101-l07-f5", front: "Maxwell's electromagnetic unification", back: "James Clerk Maxwell showed that electricity and magnetism are aspects of a single force — electromagnetism. He proved that light is an electromagnetic wave." },
        { id: "physics-101-l07-f6", front: "What is an electromagnetic field?", back: "A region of space permeated by electric and magnetic lines of force. Moving charges create magnetic fields; changing magnetic fields create electric fields. Together they propagate as electromagnetic waves (including light)." }
      ],
      learningAids: [
        { id: "physics-101-l07-a1", type: "image", title: "Circuit Diagrams", content: "Side-by-side diagrams of a series circuit and a parallel circuit with labeled components." }
      ]
    },

    /* ──────────────────────────────────────────────
       L08  Simple Machines  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l08",
      title: "Simple Machines",
      type: "interactive",
      duration: 12,
      objectives: [
        "Name the six simple machines",
        "Explain mechanical advantage in everyday terms",
        "Identify simple machines in common objects"
      ],
      metadata: {
        prompts: [
          "Name three simple machines you used today without realizing it.",
          "Why does a longer ramp make it easier to push a heavy box upward?",
          "A wheelbarrow combines which two simple machines?"
        ]
      },
      interactiveActivities: [
        {
          id: "physics-101-l08-ia1",
          type: "sorting_buckets",
          title: "Name That Simple Machine",
          description: "Sort each everyday object into the correct simple machine category.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "lever", label: "Lever" },
              { id: "inclined", label: "Inclined Plane" },
              { id: "pulley", label: "Pulley" },
              { id: "wedge", label: "Wedge" },
              { id: "screw", label: "Screw" },
              { id: "wheel", label: "Wheel & Axle" }
            ],
            items: [
              { id: "i1", label: "Seesaw on a playground", correctBucketId: "lever" },
              { id: "i2", label: "Wheelchair ramp", correctBucketId: "inclined" },
              { id: "i3", label: "Flagpole rope system", correctBucketId: "pulley" },
              { id: "i4", label: "Axe blade", correctBucketId: "wedge" },
              { id: "i5", label: "Jar lid", correctBucketId: "screw" },
              { id: "i6", label: "Doorknob", correctBucketId: "wheel" }
            ]
          }
        },
        {
          id: "physics-101-l08-ia2",
          type: "matching_pairs",
          title: "Mechanical Advantage Match",
          description: "Match each simple machine to how it provides mechanical advantage.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Lever" },
              { id: "l2", label: "Inclined plane" },
              { id: "l3", label: "Pulley" }
            ],
            right: [
              { id: "r1", label: "Multiplies force by increasing distance from the fulcrum" },
              { id: "r2", label: "Reduces effort by spreading work over a longer, sloped distance" },
              { id: "r3", label: "Changes direction of force; compound pulleys also multiply force" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "physics-101-l08-a1", type: "image", title: "Six Simple Machines Poster", content: "Illustrated poster showing all six simple machines with labeled parts and everyday examples." }
      ]
    },

    /* ──────────────────────────────────────────────
       L09  Checkpoint: Electricity & Machines  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l09",
      title: "Checkpoint: Electricity & Machines",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "physics-101-l09-q1",
          text: "A circuit has a 9 V battery and a 3 Ω resistor. What is the current?",
          skillId: "physics-101-skill-ohm",
          options: [
            { id: "a", text: "27 A" },
            { id: "b", text: "3 A" },
            { id: "c", text: "12 A" },
            { id: "d", text: "6 A" }
          ],
          correctOptionId: "b",
          explanation: "Ohm's law: I = V/R = 9 V ÷ 3 Ω = 3 A."
        },
        {
          id: "physics-101-l09-q2",
          text: "In a series circuit with three bulbs, what happens if the middle bulb burns out?",
          skillId: "physics-101-skill-circuits",
          options: [
            { id: "a", text: "Only the middle bulb goes off" },
            { id: "b", text: "The other two bulbs get brighter" },
            { id: "c", text: "All three bulbs go off" },
            { id: "d", text: "The first bulb stays on, the third goes off" }
          ],
          correctOptionId: "c",
          explanation: "In a series circuit there is only one path. A break anywhere stops all current, so all bulbs go off."
        },
        {
          id: "physics-101-l09-q3",
          text: "Which simple machine is a spiral version of an inclined plane?",
          skillId: "physics-101-skill-machines",
          options: [
            { id: "a", text: "Lever" },
            { id: "b", text: "Pulley" },
            { id: "c", text: "Screw" },
            { id: "d", text: "Wheel and axle" }
          ],
          correctOptionId: "c",
          explanation: "A screw is an inclined plane wrapped around a cylinder. Each turn moves the screw a small distance with less force."
        },
        {
          id: "physics-101-l09-q4",
          text: "A 20 kg box is pushed up a 5 m ramp instead of lifted straight up 2 m. Why is the ramp easier?",
          skillId: "physics-101-skill-ma",
          options: [
            { id: "a", text: "The ramp removes gravity entirely" },
            { id: "b", text: "The ramp reduces the total work needed" },
            { id: "c", text: "The ramp lets you use less force over a longer distance" },
            { id: "d", text: "The box weighs less on the ramp" }
          ],
          correctOptionId: "c",
          explanation: "The work is the same (W = mgh), but the ramp spreads it over a longer distance so you need less force at any moment. That is mechanical advantage."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "physics-101-l09-a1", type: "mnemonic", title: "Ohm's Law Triangle", content: "Cover the variable you want: V on top, I and R on the bottom. V = IR, I = V/R, R = V/I." }
      ]
    },

    /* ──────────────────────────────────────────────
       L10  Light and Optics  (video)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l10",
      title: "Light and Optics",
      type: "video",
      duration: 11,
      objectives: [
        "Describe reflection, refraction, and absorption of light",
        "Identify the visible spectrum and how we see color",
        "Compare convex and concave lenses"
      ],
      chunks: [
        {
          id: "physics-101-l10-c1",
          title: "How Light Behaves",
          content:
            "Light is an electromagnetic wave that travels at about 300,000 km/s in a vacuum. When light hits an object it can be reflected (bounced off), absorbed (taken in as heat), or transmitted (passed through). Most objects do a combination of all three. A mirror reflects most light; a black shirt absorbs most light."
        },
        {
          id: "physics-101-l10-c2",
          title: "Reflection and Refraction",
          content:
            "Reflection follows the law: angle of incidence = angle of reflection. That is why you see your image in a flat mirror. Refraction is the bending of light as it passes from one medium to another (e.g., air to water). This is why a straw looks bent in a glass of water. Light slows down in denser media, causing it to bend."
        },
        {
          id: "physics-101-l10-c3",
          title: "The Visible Spectrum",
          content:
            "White light contains all colors. A prism separates white light into the spectrum: Red, Orange, Yellow, Green, Blue, Indigo, Violet (ROY G. BIV). Objects appear colored because they reflect certain wavelengths and absorb others. A red apple reflects red light and absorbs the rest."
        },
        {
          id: "physics-101-l10-c4",
          title: "Lenses",
          content:
            "A convex (converging) lens is thicker in the middle — it focuses light to a point. Used in magnifying glasses and camera lenses. A concave (diverging) lens is thinner in the middle — it spreads light out. Used to correct nearsightedness. Your eye has a natural convex lens that focuses images on the retina."
        },
        {
          id: "physics-101-l10-c5",
          title: "Wave-Particle Duality: Light's Quantum Nature",
          content:
            "At the quantum scale, light behaves as both a wave and a particle (photon). Marcus Chown explains that in the famous double-slit experiment, even single photons create an interference pattern — as if each photon passes through both slits simultaneously. This wave-particle duality is a cornerstone of quantum mechanics. As Chown puts it, atoms can 'be in many different places at once, the equivalent of you being in New York and London at the same time.' This strange behavior only manifests at microscopic scales, which is why we don't notice it in everyday life."
        }
      ],
      flashcards: [
        { id: "physics-101-l10-f1", front: "Law of reflection", back: "Angle of incidence = angle of reflection (measured from the normal line)" },
        { id: "physics-101-l10-f2", front: "Refraction", back: "Bending of light when it passes between materials of different density; light slows in denser media" },
        { id: "physics-101-l10-f3", front: "ROY G. BIV", back: "Red, Orange, Yellow, Green, Blue, Indigo, Violet — colors of the visible spectrum in order of decreasing wavelength" },
        { id: "physics-101-l10-f4", front: "Convex lens", back: "Thicker in the middle; converges (focuses) light rays; used in magnifying glasses" },
        { id: "physics-101-l10-f5", front: "Wave-particle duality", back: "Light (and all quantum particles) exhibits both wave-like behavior (interference, diffraction) and particle-like behavior (photoelectric effect). This dual nature is fundamental to quantum mechanics." },
        { id: "physics-101-l10-f6", front: "Double-slit experiment", back: "When particles (photons or electrons) pass through two slits, they create an interference pattern on a screen — even when sent one at a time — demonstrating their wave-like nature." },
        { id: "physics-101-l10-f7", front: "Quantum superposition", back: "A quantum particle can exist in multiple states simultaneously until measured. An atom can be in many places at once — the act of observation 'collapses' it to a single state." }
      ],
      learningAids: [
        { id: "physics-101-l10-a1", type: "image", title: "Prism Spectrum", content: "White light entering a prism and separating into the visible spectrum." },
        { id: "physics-101-l10-a2", type: "animation", title: "Refraction Demo", content: "Animation showing light bending as it passes from air to water." }
      ]
    },

    /* ──────────────────────────────────────────────
       L11  Heat and Temperature  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l11",
      title: "Heat and Temperature",
      type: "interactive",
      duration: 12,
      objectives: [
        "Distinguish between heat and temperature",
        "Describe conduction, convection, and radiation",
        "Give real-world examples of each heat transfer method"
      ],
      metadata: {
        prompts: [
          "A metal spoon in hot soup gets warm. Which type of heat transfer is this?",
          "Why does hot air rise in a room?",
          "How does the Sun warm the Earth even through the vacuum of space?"
        ]
      },
      interactiveActivities: [
        {
          id: "physics-101-l11-ia1",
          type: "sorting_buckets",
          title: "Heat Transfer Sort",
          description: "Classify each scenario as conduction, convection, or radiation.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "conduction", label: "Conduction" },
              { id: "convection", label: "Convection" },
              { id: "radiation", label: "Radiation" }
            ],
            items: [
              { id: "i1", label: "Touching a hot pan handle", correctBucketId: "conduction" },
              { id: "i2", label: "Hot air rising from a campfire", correctBucketId: "convection" },
              { id: "i3", label: "Feeling warmth from the Sun on your face", correctBucketId: "radiation" },
              { id: "i4", label: "Ice melting in your hand", correctBucketId: "conduction" },
              { id: "i5", label: "Boiling water circulating in a pot", correctBucketId: "convection" },
              { id: "i6", label: "Heat from a glowing fireplace across the room", correctBucketId: "radiation" }
            ]
          }
        },
        {
          id: "physics-101-l11-ia2",
          type: "matching_pairs",
          title: "Heat Concepts Match",
          description: "Match each heat concept to its correct definition.",
          estimatedMinutes: 5,
          difficultyLevel: "easy",
          data: {
            left: [
              { id: "l1", label: "Temperature" },
              { id: "l2", label: "Heat" },
              { id: "l3", label: "Insulator" },
              { id: "l4", label: "Conductor" }
            ],
            right: [
              { id: "r1", label: "Average kinetic energy of particles in a substance" },
              { id: "r2", label: "Transfer of thermal energy from hot to cold" },
              { id: "r3", label: "Material that slows heat transfer (e.g., wool, foam)" },
              { id: "r4", label: "Material that transfers heat easily (e.g., metal)" }
            ],
            pairs: [
              { leftId: "l1", rightId: "r1" },
              { leftId: "l2", rightId: "r2" },
              { leftId: "l3", rightId: "r3" },
              { leftId: "l4", rightId: "r4" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "physics-101-l11-a1", type: "mnemonic", title: "Heat Transfer Memory", content: "Conduction = Contact, Convection = Currents (fluids move), Radiation = Rays (no medium needed)." }
      ]
    },

    /* ──────────────────────────────────────────────
       L12  Checkpoint: Light & Heat  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l12",
      title: "Checkpoint: Light & Heat",
      type: "quiz",
      duration: 10,
      questions: [
        {
          id: "physics-101-l12-q1",
          text: "A straw appears bent when placed in a glass of water. What causes this?",
          skillId: "physics-101-skill-light",
          options: [
            { id: "a", text: "Reflection of light off the water surface" },
            { id: "b", text: "Absorption of light by the water" },
            { id: "c", text: "Refraction — light bends as it passes from water to air" },
            { id: "d", text: "The straw actually bends due to water pressure" }
          ],
          correctOptionId: "c",
          explanation: "Refraction: light changes speed and direction when moving between air and water, making the straw look bent."
        },
        {
          id: "physics-101-l12-q2",
          text: "Which color of visible light has the LONGEST wavelength?",
          skillId: "physics-101-skill-spectrum",
          options: [
            { id: "a", text: "Violet" },
            { id: "b", text: "Green" },
            { id: "c", text: "Red" },
            { id: "d", text: "Blue" }
          ],
          correctOptionId: "c",
          explanation: "Red light has the longest wavelength (~700 nm) and violet has the shortest (~400 nm) in the visible spectrum."
        },
        {
          id: "physics-101-l12-q3",
          text: "How does the Sun's energy reach Earth through the vacuum of space?",
          skillId: "physics-101-skill-heat",
          options: [
            { id: "a", text: "Conduction through invisible particles" },
            { id: "b", text: "Convection in space currents" },
            { id: "c", text: "Radiation — electromagnetic waves need no medium" },
            { id: "d", text: "Sound waves carry the heat" }
          ],
          correctOptionId: "c",
          explanation: "Radiation is the only heat transfer method that works through a vacuum. The Sun emits electromagnetic radiation (including infrared) that travels to Earth."
        },
        {
          id: "physics-101-l12-q4",
          text: "A metal spoon heats up quickly in hot soup while a wooden spoon does not. Why?",
          skillId: "physics-101-skill-conduction",
          options: [
            { id: "a", text: "Metal is a good insulator" },
            { id: "b", text: "Wood is a good conductor of heat" },
            { id: "c", text: "Metal is a good conductor of heat; wood is an insulator" },
            { id: "d", text: "The metal spoon is lighter so it heats faster" }
          ],
          correctOptionId: "c",
          explanation: "Metals have free electrons that transfer thermal energy quickly (good conductors). Wood has tightly bound molecules that resist heat flow (insulator)."
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 4,
        totalQuestions: 4,
        timeLimitMinutes: 10,
        questionTypes: [{ type: "mcq_single", count: 4, pointsEach: 1, bloomsLevels: [1, 2, 3] }],
        difficultyDistribution: { easy: 1, medium: 2, hard: 1 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "physics-101-l12-a1", type: "mnemonic", title: "ROY G. BIV", content: "Red Orange Yellow Green Blue Indigo Violet — longest to shortest wavelength." }
      ]
    },

    /* ──────────────────────────────────────────────
       L13  Roller Coaster Design Lab  (video)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l13",
      title: "Roller Coaster Design Lab",
      type: "video",
      duration: 13,
      objectives: [
        "Apply conservation of energy to a roller coaster design",
        "Explain how forces, speed, and height interact in a coaster",
        "Evaluate trade-offs in a physics-based design challenge"
      ],
      chunks: [
        {
          id: "physics-101-l13-c1",
          title: "The Challenge",
          content:
            "You are designing a marble roller coaster for a science fair. The marble starts at the top of a hill and must loop through one loop, go over a second hill, and land in a cup at the end. You have 2 meters of track material. How do you make it work?"
        },
        {
          id: "physics-101-l13-c2",
          title: "Energy Budget",
          content:
            "The marble starts with gravitational PE at the top. As it rolls down, PE converts to KE. For the marble to complete the loop, the first hill must be at least 2.5× the height of the loop (accounting for friction). If the loop is 20 cm tall, the starting hill should be at least 50 cm."
        },
        {
          id: "physics-101-l13-c3",
          title: "Forces in Action",
          content:
            "At the top of the loop, two forces act on the marble: gravity pulling down and the normal force of the track pushing down. Together they provide the centripetal force that keeps the marble moving in a circle. If the marble is too slow, gravity wins and it falls off the track."
        },
        {
          id: "physics-101-l13-c4",
          title: "Design Decisions",
          content:
            "Trade-offs: a taller first hill gives more energy but uses more track length. A wider loop is easier to complete but less dramatic. Adding a second hill after the loop means you need enough leftover KE. Real roller coaster engineers use computer simulations to optimize these trade-offs before building."
        },
        {
          id: "physics-101-l13-c5",
          title: "Beyond Classical Physics: Strings and Extra Dimensions",
          content:
            "While classical physics explains roller coasters beautifully, at the most fundamental level, nature may work very differently. Brian Greene's string theory proposes that every particle — every electron, quark, and photon — is actually a tiny vibrating string of energy. Different vibration patterns produce different particles, much like different vibrations of a guitar string produce different musical notes. Greene writes that 'the microscopic landscape is suffused with tiny strings whose vibrational patterns orchestrate the evolution of the cosmos.' String theory also requires extra spatial dimensions beyond the three we experience — possibly 10 or 11 total — curled up too small to detect."
        }
      ],
      flashcards: [
        { id: "physics-101-l13-f1", front: "Centripetal force", back: "The inward-directed force that keeps an object moving in a circle; provided by gravity + normal force at the top of a loop" },
        { id: "physics-101-l13-f2", front: "Energy budget", back: "Accounting for how PE converts to KE and is lost to friction at each stage of a system" },
        { id: "physics-101-l13-f3", front: "Loop height rule", back: "Starting height must be at least 2.5× the loop height to ensure the marble completes the loop (with friction)" },
        { id: "physics-101-l13-f4", front: "Design trade-off", back: "Choosing between competing physics constraints: height vs track length, speed vs safety, energy vs friction losses" },
        { id: "physics-101-l13-f5", front: "String theory (basic idea)", back: "All fundamental particles are actually tiny one-dimensional vibrating strings of energy. Different vibrational patterns produce different particles — like different notes from a guitar string." },
        { id: "physics-101-l13-f6", front: "Extra dimensions in string theory", back: "String theory requires 10 or 11 total dimensions (not just the 3 spatial + 1 time we experience). The extra dimensions may be curled up at scales too small to observe directly." }
      ],
      learningAids: [
        { id: "physics-101-l13-a1", type: "image", title: "Roller Coaster Energy Diagram", content: "Diagram showing PE and KE at each point along a roller coaster: top hill, bottom, loop, second hill, finish." },
        { id: "physics-101-l13-a2", type: "practice", title: "Design Sketch Prompt", content: "Sketch your roller coaster and label the PE and KE at each point. Calculate the minimum starting height for a 15 cm loop." }
      ]
    },

    /* ──────────────────────────────────────────────
       L14  Physics Investigation Studio  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l14",
      title: "Physics Investigation Studio",
      type: "interactive",
      duration: 13,
      objectives: [
        "Identify variables in a physics experiment",
        "Distinguish between controlled, independent, and dependent variables",
        "Design a simple investigation to test a physics question"
      ],
      metadata: {
        prompts: [
          "Choose one physics question: Does ramp angle affect how far a car rolls? Design an experiment to test it.",
          "What is the independent variable, dependent variable, and what must be controlled?",
          "Predict the results and explain your reasoning using physics concepts from this module."
        ]
      },
      interactiveActivities: [
        {
          id: "physics-101-l14-ia1",
          type: "drag_and_drop",
          title: "Build an Experiment",
          description: "Drag each element to the correct part of the experimental design.",
          estimatedMinutes: 8,
          difficultyLevel: "medium",
          data: {
            targets: [
              { id: "iv", label: "Independent Variable (what you change)" },
              { id: "dv", label: "Dependent Variable (what you measure)" },
              { id: "cv", label: "Controlled Variables (keep the same)" }
            ],
            draggables: [
              { id: "d1", label: "Angle of the ramp", correctTargetId: "iv" },
              { id: "d2", label: "Distance the car rolls", correctTargetId: "dv" },
              { id: "d3", label: "Same car, same surface, same release point", correctTargetId: "cv" }
            ]
          }
        },
        {
          id: "physics-101-l14-ia2",
          type: "sorting_buckets",
          title: "Physics Concept Connections",
          description: "Sort each statement into the physics topic it best connects to.",
          estimatedMinutes: 7,
          difficultyLevel: "medium",
          data: {
            buckets: [
              { id: "forces", label: "Forces & Motion" },
              { id: "energy", label: "Energy" },
              { id: "waves", label: "Waves & Light" }
            ],
            items: [
              { id: "i1", label: "A heavier ball is harder to push", correctBucketId: "forces" },
              { id: "i2", label: "A ball speeds up as it rolls downhill", correctBucketId: "energy" },
              { id: "i3", label: "A prism splits white light into a rainbow", correctBucketId: "waves" },
              { id: "i4", label: "Friction slows a sliding book", correctBucketId: "forces" },
              { id: "i5", label: "A rubber band stores energy when stretched", correctBucketId: "energy" },
              { id: "i6", label: "An echo bounces off a canyon wall", correctBucketId: "waves" }
            ]
          }
        }
      ],
      learningAids: [
        { id: "physics-101-l14-a1", type: "practice", title: "Lab Report Template", content: "Question → Hypothesis → Variables → Procedure → Data → Conclusion" }
      ]
    },

    /* ──────────────────────────────────────────────
       L15  Mastery Sprint: Physics Essentials  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "physics-101-l15",
      title: "Mastery Sprint: Physics Essentials",
      type: "quiz",
      duration: 12,
      questions: [
        {
          id: "physics-101-l15-q1",
          text: "A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?",
          skillId: "physics-101-skill-accel",
          options: [
            { id: "a", text: "100 m/s²" },
            { id: "b", text: "4 m/s²" },
            { id: "c", text: "25 m/s²" },
            { id: "d", text: "15 m/s²" }
          ],
          correctOptionId: "b",
          explanation: "Acceleration = change in velocity ÷ time = (20 − 0) ÷ 5 = 4 m/s²."
        },
        {
          id: "physics-101-l15-q2",
          text: "When a rocket launches, hot gas shoots downward and the rocket goes upward. Which law explains this?",
          skillId: "physics-101-skill-newton3",
          options: [
            { id: "a", text: "Newton's 1st law — inertia" },
            { id: "b", text: "Conservation of energy" },
            { id: "c", text: "Newton's 3rd law — for every action there is an equal and opposite reaction" },
            { id: "d", text: "Ohm's law" }
          ],
          correctOptionId: "c",
          explanation: "Newton's 3rd law: the rocket pushes gas downward (action), the gas pushes the rocket upward (reaction)."
        },
        {
          id: "physics-101-l15-q3",
          text: "A 3 kg book falls from a 4 m shelf. How much PE did it have at the top? (use g = 10 m/s²)",
          skillId: "physics-101-skill-pe",
          options: [
            { id: "a", text: "12 J" },
            { id: "b", text: "7 J" },
            { id: "c", text: "120 J" },
            { id: "d", text: "40 J" }
          ],
          correctOptionId: "c",
          explanation: "PE = mgh = 3 kg × 10 m/s² × 4 m = 120 J."
        },
        {
          id: "physics-101-l15-q4",
          text: "Which statement about parallel circuits is TRUE?",
          skillId: "physics-101-skill-parallel",
          options: [
            { id: "a", text: "Current follows only one path" },
            { id: "b", text: "If one bulb burns out, all others also go off" },
            { id: "c", text: "Voltage is the same across each branch" },
            { id: "d", text: "Total resistance increases as more branches are added" }
          ],
          correctOptionId: "c",
          explanation: "In a parallel circuit, voltage is the same across every branch. Each branch carries its own current. Adding branches actually decreases total resistance."
        },
        {
          id: "physics-101-l15-q5",
          text: "A convex lens is used in a magnifying glass because it:",
          skillId: "physics-101-skill-optics",
          options: [
            { id: "a", text: "Spreads light rays apart (diverges)" },
            { id: "b", text: "Blocks all light from passing through" },
            { id: "c", text: "Focuses light rays to a point (converges)" },
            { id: "d", text: "Reflects light back like a mirror" }
          ],
          correctOptionId: "c",
          explanation: "A convex lens is thicker in the middle and bends light inward, focusing it to a point. This makes objects appear larger when viewed through it."
        },
        {
          id: "physics-101-l15-q6",
          text: "A marble at the top of a roller coaster has 50 J of PE and 0 J of KE. At the bottom, with no friction, how much KE does it have?",
          skillId: "physics-101-skill-conservation",
          options: [
            { id: "a", text: "0 J" },
            { id: "b", text: "25 J" },
            { id: "c", text: "100 J" },
            { id: "d", text: "50 J" }
          ],
          correctOptionId: "d",
          explanation: "Conservation of energy: all 50 J of PE converts to KE at the bottom (ignoring friction). Total energy stays at 50 J."
        }
      ],
      interactiveActivities: [
        {
          id: "physics-101-l15-ia1",
          type: "drag_and_drop",
          title: "Physics Formula Match",
          description: "Drag each formula to the correct physics concept.",
          estimatedMinutes: 6,
          difficultyLevel: "hard",
          data: {
            targets: [
              { id: "speed", label: "Speed" },
              { id: "work", label: "Work" },
              { id: "ke", label: "Kinetic Energy" },
              { id: "pe", label: "Potential Energy" },
              { id: "ohm", label: "Ohm's Law" }
            ],
            draggables: [
              { id: "d1", label: "d ÷ t", correctTargetId: "speed" },
              { id: "d2", label: "F × d", correctTargetId: "work" },
              { id: "d3", label: "½mv²", correctTargetId: "ke" },
              { id: "d4", label: "mgh", correctTargetId: "pe" },
              { id: "d5", label: "V = IR", correctTargetId: "ohm" }
            ]
          }
        }
      ],
      quizBlueprint: {
        frequency: "lesson_assessment",
        questionsPerCheck: 6,
        totalQuestions: 6,
        timeLimitMinutes: 12,
        questionTypes: [{ type: "mcq_single", count: 6, pointsEach: 1, bloomsLevels: [1, 2, 3, 4] }],
        difficultyDistribution: { easy: 1, medium: 3, hard: 2 },
        feedbackMode: "after_submit",
        adaptive: false,
        masteryThreshold: 0.75
      },
      learningAids: [
        { id: "physics-101-l15-a1", type: "mnemonic", title: "Formula Sheet", content: "Speed = d/t | F = ma | W = Fd | KE = ½mv² | PE = mgh | V = IR" }
      ]
    }
  ]
};
