import type { LearningModule } from "@/lib/modules/types";

export const Physics101Module: LearningModule = {
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
  "version": "2.0.0",
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
      "title": "Motion and Speed",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Define position, distance, and displacement",
        "Calculate speed using the formula speed = distance ÷ time",
        "Distinguish between speed and velocity"
      ],
      "chunks": [
        {
          "id": "physics-101-l01-c1",
          "title": "What Is Motion?",
          "content": "Motion is an exciting concept in physics! When we say an object is in motion, we mean that its position is changing compared to something else, which we call a reference point. For example, if you are sitting on a bus, you might feel like you are not moving at all because you are in the same spot as your seat. However, if you look out the window, you can see that you are moving along the road. This shows us that motion is always about comparing one thing to another. Understanding motion helps us learn how things move in our world! It’s like when you watch a friend running on a playground; they are moving fast compared to the trees around them, but if you are standing still, you can see their speed more clearly. So, motion is all around us, and it helps us understand how everything from cars to planets travels through space!\nContext recap: Motion is an exciting concept in physics! When we say an object is in motion, we mean that its position is changing compared to something else, which we call a reference point. For example, if you are sitting on a bus, you might feel like you are not moving at all because you are in the same spot as your seat. However, if you look out the window, you can see that you are moving along the road.\nWhy this matters: What Is Motion? helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-101-l01-c2",
          "title": "Distance vs Displacement",
          "content": "When we explore the concepts of distance and displacement, we discover two unique ways to measure how far an object has moved. Distance refers to the total length of the path that has been traveled, and it is always a positive number. For instance, imagine you walk 3 blocks north and then 4 blocks east. In this case, you have covered a distance of 7 blocks in total. However, displacement is a little different; it measures the shortest straight-line distance from your starting point to your ending point, along with the direction you took. In our example, your displacement would be 5 blocks. We can calculate this using the Pythagorean theorem, which is a special rule in math that helps us find the length of the sides of a right triangle. This understanding not only tells us how far we traveled but also gives us insight into the path we took to get there, making it easier to visualize our journey!\nContext recap: When we explore the concepts of distance and displacement, we discover two unique ways to measure how far an object has moved. Distance refers to the total length of the path that has been traveled, and it is always a positive number. For instance, imagine you walk 3 blocks north and then 4 blocks east. In this case, you have covered a distance of 7 blocks in total.\nWhy this matters: Distance vs Displacement helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l01-c3",
          "title": "Speed and Velocity",
          "content": "Speed and velocity are two important ideas that help us understand how things move. Speed tells us how fast something is going, but it doesn’t tell us where it’s headed. We can find out the speed of an object by using a simple formula: Speed = distance ÷ time. This means if we know how far something has traveled and how long it took, we can calculate its speed!\nNow, let’s talk about velocity. Velocity is a bit more special because it includes both how fast something is moving and the direction it’s going. For example, imagine a car driving in a circle at a speed of 30 kilometers per hour. While the speed stays the same, the velocity changes because the car is always turning.\nWhen we measure speed and velocity, we often use units like meters per second (m/s), kilometers per hour (km/h), and miles per hour (mph). Knowing the difference between speed and velocity helps us describe how things move in a clearer way! Understanding these concepts is essential for studying motion in physics and can help us in real-life situations, like driving or playing sports.\nContext recap: Speed and velocity are two important ideas that help us understand how things move. Speed tells us how fast something is going, but it doesn’t tell us where it’s headed. We can find out the speed of an object by using a simple formula: Speed = distance ÷ time. This means if we know how far something has traveled and how long it took, we can calculate its speed!\nWhy this matters: Speed and Velocity helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l01-c4",
          "title": "Worked Example",
          "content": "Let’s explore a fun example to help us understand the concept of speed! Imagine a cyclist who rides her bicycle and travels a distance of 600 meters in just 2 minutes. To find out how fast she is going, we need to convert the time from minutes to seconds because speed is typically measured in meters per second. So, we start by converting 2 minutes into seconds. We know that there are 60 seconds in a minute, so we multiply: 2 minutes × 60 seconds/minute = 120 seconds. Now that we have the time in seconds, we can use the formula for speed, which is: Speed = distance ÷ time. Let’s plug in the numbers we have: Speed = 600 meters ÷ 120 seconds. When we do the math, we find that her speed is 5 meters per second. But wait, we can also convert this speed into kilometers per hour to see how fast that really is! When we do the conversion, we find that 5 meters per second is approximately 18 kilometers per hour. That’s a nice, comfortable speed for a cyclist, making it easy to enjoy a ride while exploring the outdoors!\nContext recap: Let’s explore a fun example to help us understand the concept of speed! Imagine a cyclist who rides her bicycle and travels a distance of 600 meters in just 2 minutes. To find out how fast she is going, we need to convert the time from minutes to seconds because speed is typically measured in meters per second. So, we start by converting 2 minutes into seconds.\nWhy this matters: Worked Example helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l01-c5",
          "title": "The Cosmic Speed Limit",
          "content": "Have you ever heard about the cosmic speed limit? It's a fascinating concept in physics! According to Albert Einstein's theory of special relativity, the speed of light is the fastest speed at which anything can travel in our universe. This speed is about 300,000 kilometers per second, which is incredibly fast! To put that into perspective, light can travel around the Earth more than seven times in just one second!\nThis idea might seem surprising because in our daily lives, we usually deal with much slower speeds. For example, when we walk, run, or even drive a car, we are moving at speeds that are tiny compared to the speed of light. Physicist Brian Greene points out that our experiences with speed can make it difficult to understand how space and time behave when things move really fast.\nAs objects get closer to the speed of light, something amazing happens: time starts to slow down for them! This effect is called time dilation. Imagine if you could travel at such high speeds; you would age more slowly compared to someone who stayed on Earth! Additionally, distances can appear to shrink for those moving at these incredible speeds. This means that motion can actually change how we perceive space and time.\nThis idea is a big change from what Sir Isaac Newton believed. Newton thought of space and time as absolute, meaning they were the same for everyone, everywhere. But Einstein showed us that they are much more flexible and can change depending on how fast you are moving. Isn't that mind-blowing? Understanding these concepts helps us learn more about the universe and our place in it!\nContext recap: Have you ever heard about the cosmic speed limit? It's a fascinating concept in physics! According to Albert Einstein's theory of special relativity, the speed of light is the fastest speed at which anything can travel in our universe. This speed is about 300,000 kilometers per second, which is incredibly fast!\nWhy this matters: The Cosmic Speed Limit helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "front": "Distance vs Displacement",
          "back": "Distance = total path length (scalar); Displacement = straight-line start-to-finish with direction (vector)"
        },
        {
          "id": "physics-101-l01-f3",
          "front": "Velocity",
          "back": "Displacement ÷ time; like speed but includes direction"
        },
        {
          "id": "physics-101-l01-f4",
          "front": "Reference point",
          "back": "The object or location you compare against to decide whether something is moving"
        },
        {
          "id": "physics-101-l01-f5",
          "front": "What is the cosmic speed limit?",
          "back": "The speed of light (~300,000 km/s or ~3×10⁸ m/s). Einstein's special relativity shows nothing with mass can reach or exceed this speed."
        },
        {
          "id": "physics-101-l01-f6",
          "front": "Time dilation (special relativity)",
          "back": "Time passes more slowly for objects moving at speeds close to the speed of light. A clock on a fast-moving spaceship ticks slower than one on Earth."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l01-a1",
          "type": "image",
          "title": "Motion Diagram",
          "content": "A diagram showing a runner with distance markers, displacement arrow, and speed calculation."
        },
        {
          "id": "physics-101-l01-a2",
          "type": "animation",
          "title": "Speed vs Velocity",
          "content": "Animation of a car on a circular track — constant speed, changing velocity."
        }
      ]
    },
    {
      "id": "physics-101-l02",
      "title": "Forces and Newton's Laws",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Define force and identify contact vs non-contact forces",
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
      "chunks": [
        {
          "id": "physics-101-l04-c1",
          "title": "What Is Work?",
          "content": "In the world of physics, the word 'work' means something very specific! Work happens when a force, like a push or a pull, moves an object in the same direction that the force is applied. To figure out how much work is done, we can use a simple formula: Work = Force × Distance. This means that to find out the work, you multiply the amount of force you use by the distance the object moves. The unit we use to measure work is called a joule, which is often represented by the letter 'J'. For instance, if you push a box with a force of 10 newtons (which is a way to measure how strong your push is) and you push it for a distance of 3 meters, you have done 30 joules of work! But here’s something interesting: if you are holding a heavy bag and standing still, you are not doing any work at all because the bag isn’t moving. This concept of work is important because it helps us understand how forces can change the way things move in our everyday lives, from pushing a friend on a swing to lifting your backpack!\nContext recap: In the world of physics, the word 'work' means something very specific! Work happens when a force, like a push or a pull, moves an object in the same direction that the force is applied. To figure out how much work is done, we can use a simple formula: Work = Force × Distance. This means that to find out the work, you multiply the amount of force you use by the distance the object moves.\nWhy this matters: What Is Work? helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l04-c2",
          "title": "Kinetic Energy",
          "content": "Kinetic energy is a really interesting idea in physics! It describes the energy that an object has when it is moving. We can figure out how much kinetic energy something has by using a special formula: KE = ½ × mass × velocity². Let’s break that down a bit. Here, 'mass' is how heavy the object is, and 'velocity' is how fast it is going. For example, imagine we have a ball that weighs 2 kilograms, and it’s rolling along at a speed of 3 meters per second. To find out its kinetic energy, we can use our formula: KE = ½ × 2 × (3)². When we do the math, we find that the kinetic energy is 9 joules! Isn’t that cool? Now, here’s something really surprising: if we make the ball go twice as fast, its kinetic energy doesn’t just double — it actually becomes four times greater! This is super important to understand, especially when we think about car accidents. When cars crash at high speeds, the energy involved is much higher, which is why those crashes can be so much more dangerous! Understanding kinetic energy helps us learn about safety and the effects of speed in our everyday lives.\nContext recap: Kinetic energy is a really interesting idea in physics! It describes the energy that an object has when it is moving. We can figure out how much kinetic energy something has by using a special formula: KE = ½ × mass × velocity². Let’s break that down a bit.\nWhy this matters: Kinetic Energy helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-101-l04-c3",
          "title": "Potential Energy",
          "content": "Potential energy is a fascinating type of energy that is all about what we call stored energy. This means that energy can be kept in an object based on where it is located or how it is arranged. One of the most common forms of potential energy is called gravitational potential energy. We can figure out how much gravitational potential energy something has by using a special formula: PE = mass × gravity × height. Let's think about a fun example! Imagine you have a book that weighs 5 kilograms, and it is sitting on a shelf that is 2 meters high. To find out how much gravitational potential energy this book has, we can plug the numbers into our formula: PE = 5 × 9.8 × 2. When we do the math, we find that the book has 98 joules of potential energy! Isn't that cool? Another type of potential energy is called elastic potential energy. This energy is stored in objects that can be stretched or squished, like rubber bands and springs. Learning about potential energy helps us understand how energy can be stored and then released in different situations, which is super important in physics!\nContext recap: Potential energy is a fascinating type of energy that is all about what we call stored energy. This means that energy can be kept in an object based on where it is located or how it is arranged. One of the most common forms of potential energy is called gravitational potential energy. We can figure out how much gravitational potential energy something has by using a special formula: PE = mass × gravity × height.\nWhy this matters: Potential Energy helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l04-c4",
          "title": "Conservation of Energy",
          "content": "One of the most fascinating ideas in physics is called the conservation of energy. This means that energy cannot just appear out of nowhere or vanish into thin air; instead, it changes from one form to another. Let's think about a simple example: when a ball falls off a shelf, it starts with something called gravitational potential energy (PE) because it is high up. As the ball drops, that potential energy transforms into kinetic energy (KE), which is the energy of motion. At the very top of the shelf, the ball has all its energy as potential energy and none as kinetic energy because it isn't moving yet. But when the ball reaches the ground, it has converted all that energy into kinetic energy, moving fast and having no potential energy left. Throughout this whole process, the total energy stays the same, as long as we don’t consider things like air resistance that can slow it down. Another great example of energy transformation is a pendulum. When it swings back and forth, it constantly changes between potential energy when it’s at the highest points and kinetic energy when it’s at the lowest point. Isn’t it amazing how energy works?\nContext recap: One of the most fascinating ideas in physics is called the conservation of energy. This means that energy cannot just appear out of nowhere or vanish into thin air; instead, it changes from one form to another. Let's think about a simple example: when a ball falls off a shelf, it starts with something called gravitational potential energy (PE) because it is high up. As the ball drops, that potential energy transforms into kinetic energy (KE), which is the energy of motion.\nWhy this matters: Conservation of Energy helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l04-c5",
          "title": "E = mc² — Mass as Concentrated Energy",
          "content": "One of the most famous equations in physics is Einstein's E = mc². This equation teaches us that mass and energy are actually two forms of the same thing! Imagine that everything around us, including you, is made up of tiny particles that have mass. Now, what’s really cool is that even a small amount of mass can hold a huge amount of energy. For example, think about a cup of coffee. According to physicist Marcus Chown, when your coffee is hot, it actually weighs a tiny bit more than when it is cold. Why? Because the heat energy, or thermal energy, that it contains adds to its mass! Isn’t that fascinating?\nNow, let’s talk about the 'c²' in the equation. This stands for the speed of light squared, which is an incredibly large number (around 9 × 10¹⁶). This large number is important because it shows us why nuclear reactions can release so much more energy than chemical reactions. In nuclear reactions, a tiny bit of nuclear mass is transformed directly into energy, which is why they can produce millions of times more energy than the reactions that happen when you burn wood or fuel.\nUnderstanding the relationship between mass and energy is key to grasping some of the most powerful processes in the universe, like how stars shine and how nuclear power works. So, the next time you think about energy, remember that it’s all connected to mass in ways that are truly amazing!\nContext recap: One of the most famous equations in physics is Einstein's E = mc². This equation teaches us that mass and energy are actually two forms of the same thing! Imagine that everything around us, including you, is made up of tiny particles that have mass. Now, what’s really cool is that even a small amount of mass can hold a huge amount of energy.\nWhy this matters: E = mc² — Mass as Concentrated Energy helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "Energy equals mass times the speed of light squared. A small amount of mass converts to an enormous amount of energy because c² ≈ 9×10¹⁶ m²/s²."
        },
        {
          "id": "physics-101-l04-f6",
          "front": "Why do nuclear reactions release so much energy?",
          "back": "Nuclear reactions convert a fraction of the mass of atomic nuclei directly into energy via E = mc². Even a tiny mass loss produces enormous energy because the speed of light squared is so large."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l04-a1",
          "type": "animation",
          "title": "Pendulum Energy",
          "content": "Animation showing PE ↔ KE conversion in a swinging pendulum with energy bar graph."
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
          "explanation": "Sound is a longitudinal (mechanical) wave — it needs particles to vibrate through. Light, radio, and X-rays are electromagnetic waves that can travel through a vacuum."
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
      "chunks": [
        {
          "id": "physics-101-l07-c1",
          "title": "Electric Charge and Current",
          "content": "Electric charge and current are two very important ideas in the world of electricity! Everything around us is made up of tiny building blocks called atoms. These atoms contain even smaller particles: protons, which have a positive charge, and electrons, which have a negative charge. When we talk about electric current, we are referring to the movement of these electrons through a material that can carry electricity, such as a copper wire. This flow of electrons is what we call electric current. We measure how much current is flowing in a circuit using a unit called amperes, often shortened to 'amps' (A). To help visualize this, think about water flowing through a pipe. If more water is flowing, that means there is more current. Just like water can power things like water wheels, electric current powers our lights, computers, and many other devices in our homes! Understanding these concepts helps us see how electricity is a part of our daily lives and how it makes many of our favorite gadgets work.\nContext recap: Electric charge and current are two very important ideas in the world of electricity! Everything around us is made up of tiny building blocks called atoms. These atoms contain even smaller particles: protons, which have a positive charge, and electrons, which have a negative charge. When we talk about electric current, we are referring to the movement of these electrons through a material that can carry electricity, such as a copper wire.\nWhy this matters: Electric Charge and Current helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l07-c2",
          "title": "Voltage and Resistance",
          "content": "Voltage and resistance are two important ideas that help us understand how electricity moves in a circuit. Let's start with voltage! Voltage, which we measure in volts (V), is like the 'push' that makes electrons travel through a circuit. You can think of it like water pressure in a hose: just as higher pressure pushes more water through, higher voltage pushes more electrons through the wires. Now, let's talk about resistance. Resistance is measured in ohms (Ω) and it is what slows down or opposes the flow of electricity. Some materials, like thin wires or very long wires, have high resistance, which means they make it harder for the current to flow. A great example of resistance in action is a light bulb. Inside the light bulb, there is a thin wire called a filament that has high resistance. When electricity flows through this filament, it gets very hot and produces light and heat. By understanding both voltage and resistance, we can better appreciate how our electrical devices work every day, from our lights to our computers!\nContext recap: Voltage and resistance are two important ideas that help us understand how electricity moves in a circuit. Let's start with voltage! Voltage, which we measure in volts (V), is like the 'push' that makes electrons travel through a circuit. You can think of it like water pressure in a hose: just as higher pressure pushes more water through, higher voltage pushes more electrons through the wires.\nWhy this matters: Voltage and Resistance helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l07-c3",
          "title": "Ohm's Law",
          "content": "Ohm's Law is a key concept in the study of electricity that helps us understand how three important parts of a circuit work together: voltage, current, and resistance. We can express this relationship with a simple formula: V = I × R. In this formula, V stands for voltage, I represents current, and R is the resistance. Let's break this down with an example! Imagine we have a circuit where the current flowing through it is 2 Amperes (A), and the resistance is 6 Ohms (Ω). To find the voltage, we can use our formula: V = 2 × 6. When we do the math, we find that the voltage is 12 Volts (V). This equation is super important in both physics and electronics because it helps us figure out other values too! If we want to know the current, we can rearrange the formula to I = V/R, and if we need to find the resistance, we can use R = V/I. Learning about Ohm's Law is really important for anyone who wants to understand how electrical circuits function and how electricity powers our world!\nContext recap: Ohm's Law is a key concept in the study of electricity that helps us understand how three important parts of a circuit work together: voltage, current, and resistance. We can express this relationship with a simple formula: V = I × R. In this formula, V stands for voltage, I represents current, and R is the resistance. Let's break this down with an example!\nWhy this matters: Ohm's Law helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l07-c4",
          "title": "Series vs Parallel Circuits",
          "content": "When we explore the fascinating world of electricity, we can find two main types of circuits: series circuits and parallel circuits. Let's start with series circuits. In a series circuit, all the components, like light bulbs, are connected one after another in a single line. This means that the electric current has only one path to follow. Imagine if you have a string of old Christmas lights; if one bulb burns out, the entire string goes dark because the current can't flow anymore. Now, let's look at parallel circuits. In a parallel circuit, the components are connected on different branches, almost like a tree with many limbs. This setup allows the electric current to split and flow through multiple paths at the same time. So, if one light bulb in a parallel circuit stops working, the other bulbs will keep shining brightly, just like the outlets in your home where you can plug in multiple devices. Most of the electrical systems we use today, like in our houses and schools, are designed with parallel circuits because they are more reliable and efficient, ensuring that we have power where we need it most.\nContext recap: When we explore the fascinating world of electricity, we can find two main types of circuits: series circuits and parallel circuits. Let's start with series circuits. In a series circuit, all the components, like light bulbs, are connected one after another in a single line. This means that the electric current has only one path to follow.\nWhy this matters: Series vs Parallel Circuits helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-101-l07-c5",
          "title": "Maxwell's Electromagnetic Unification",
          "content": "In the mid-1800s, a brilliant scientist named James Clerk Maxwell made a groundbreaking discovery that changed our understanding of physics forever. He successfully combined the concepts of electricity and magnetism into a single theory known as the electromagnetic field. This unification was so significant that it inspired future scientists, including Albert Einstein, who sought to create a theory that would explain all forces in nature. Maxwell's work revealed that light itself is an electromagnetic wave, which means it consists of oscillating electric and magnetic fields that travel through space. This idea opened up new avenues of research and understanding, leading to the development of modern physics and theories like string theory, which continues to be explored by scientists today. Maxwell's discoveries help us understand how electricity powers our homes, how magnets can attract or repel each other, and even how we can send information through the air using radio waves. By studying Maxwell's work, we learn not just about electricity and magnetism, but also about the fundamental forces that shape our universe. His legacy reminds us of the importance of curiosity and exploration in science, encouraging young minds to ask questions and seek answers about the world around them. As we continue to explore these concepts, we can appreciate how interconnected everything is in the universe, from the smallest particles to the vastness of light and energy that surrounds us.\nContext recap: In the mid-1800s, a brilliant scientist named James Clerk Maxwell made a groundbreaking discovery that changed our understanding of physics forever. He successfully combined the concepts of electricity and magnetism into a single theory known as the electromagnetic field. This unification was so significant that it inspired future scientists, including Albert Einstein, who sought to create a theory that would explain all forces in nature. Maxwell's work revealed that light itself is an electromagnetic wave, which means it consists of oscillating electric and magnetic fields that travel through space.\nWhy this matters: Maxwell's Electromagnetic Unification helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
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
          "back": "James Clerk Maxwell showed that electricity and magnetism are aspects of a single force — electromagnetism. He proved that light is an electromagnetic wave."
        },
        {
          "id": "physics-101-l07-f6",
          "front": "What is an electromagnetic field?",
          "back": "A region of space permeated by electric and magnetic lines of force. Moving charges create magnetic fields; changing magnetic fields create electric fields. Together they propagate as electromagnetic waves (including light)."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l07-a1",
          "type": "image",
          "title": "Circuit Diagrams",
          "content": "Side-by-side diagrams of a series circuit and a parallel circuit with labeled components."
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
          "content": "Illustrated poster showing all six simple machines with labeled parts and everyday examples."
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
      "chunks": [
        {
          "id": "physics-101-l10-c1",
          "title": "How Light Behaves",
          "content": "Light is a fascinating form of energy that travels incredibly fast—about 300,000 kilometers per second in a vacuum! This means that light can travel from the Moon to Earth in just over one second! When light encounters an object, it can behave in three different ways: it can be reflected, absorbed, or transmitted. Reflection occurs when light bounces off a surface, just like how you can see your reflection in a mirror. Mirrors are special because they reflect most of the light that hits them, which is why we can see ourselves so clearly. Absorption happens when an object takes in light and converts it into heat. For example, if you wear a black shirt on a sunny day, it will absorb most of the sunlight and feel warm. Lastly, transmission is when light passes through an object, like how clear glass allows light to come through. Most objects we see do a combination of these three behaviors, which is why we experience different colors and brightness in our environment. Understanding how light interacts with different materials helps us learn about the world around us and the science of optics!\nContext recap: Light is a fascinating form of energy that travels incredibly fast—about 300,000 kilometers per second in a vacuum! This means that light can travel from the Moon to Earth in just over one second! When light encounters an object, it can behave in three different ways: it can be reflected, absorbed, or transmitted. Reflection occurs when light bounces off a surface, just like how you can see your reflection in a mirror.\nWhy this matters: How Light Behaves helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l10-c2",
          "title": "Reflection and Refraction",
          "content": "When light interacts with different surfaces, it follows some important rules that help us understand how we see things around us. One of these rules is known as the law of reflection. This law tells us that when light hits a surface, the angle at which it strikes the surface (called the angle of incidence) is equal to the angle at which it bounces off (known as the angle of reflection). This is the reason we can see our own reflection in a flat mirror; the light bounces back to our eyes in a way that allows us to see ourselves clearly.\nNow, let’s talk about refraction, which is another fascinating behavior of light. Refraction happens when light travels from one material to another, like when it moves from air into water. As light enters a denser material, it slows down and bends. This bending is why a straw looks like it’s bent when you put it in a glass of water. The light is changing direction because it is moving from a less dense medium (air) to a denser one (water). Understanding these concepts helps us see the world in a whole new way and explains many everyday phenomena!\nContext recap: When light interacts with different surfaces, it follows some important rules that help us understand how we see things around us. One of these rules is known as the law of reflection. This law tells us that when light hits a surface, the angle at which it strikes the surface (called the angle of incidence) is equal to the angle at which it bounces off (known as the angle of reflection). This is the reason we can see our own reflection in a flat mirror; the light bounces back to our eyes in a way that allows us to see ourselves clearly."
        },
        {
          "id": "physics-101-l10-c3",
          "title": "The Visible Spectrum",
          "content": "Did you know that white light is actually made up of all the colors of the rainbow? It's true! When white light passes through a special piece of glass called a prism, it splits into a beautiful spectrum of colors. These colors are Red, Orange, Yellow, Green, Blue, Indigo, and Violet. You can remember these colors easily with the fun acronym ROY G. BIV! Each color represents a different wavelength of light. The colors we see in everyday objects depend on how those objects interact with light. For example, when you look at a red apple, it appears red because it reflects red light while absorbing all the other colors. This amazing interaction between light and objects is what allows us to see the vibrant colors that brighten our world every day. Isn’t it fascinating how light works?\nContext recap: Did you know that white light is actually made up of all the colors of the rainbow? It's true! When white light passes through a special piece of glass called a prism, it splits into a beautiful spectrum of colors. These colors are Red, Orange, Yellow, Green, Blue, Indigo, and Violet.\nWhy this matters: The Visible Spectrum helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-101-l10-c4",
          "title": "Lenses",
          "content": "Lenses are fascinating tools made from glass or plastic that help us see things more clearly by bending light. There are two main types of lenses: convex and concave. A convex lens is thicker in the middle and is designed to focus light rays to a single point. This type of lens is commonly used in devices like magnifying glasses, which allow us to see tiny details up close, and in camera lenses, which help us capture beautiful photographs. On the other hand, a concave lens is thinner in the middle and works by spreading light rays apart. This type of lens is particularly useful for people who are nearsighted, as it helps them see distant objects more clearly. It's interesting to note that our own eyes have a natural convex lens that plays a crucial role in focusing images onto the retina, which is the part of our eye that sends visual information to our brain, allowing us to enjoy the world around us.\nContext recap: Lenses are fascinating tools made from glass or plastic that help us see things more clearly by bending light. There are two main types of lenses: convex and concave. A convex lens is thicker in the middle and is designed to focus light rays to a single point. This type of lens is commonly used in devices like magnifying glasses, which allow us to see tiny details up close, and in camera lenses, which help us capture beautiful photographs.\nWhy this matters: Lenses helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l10-c5",
          "title": "Wave-Particle Duality: Light's Quantum Nature",
          "content": "At a tiny scale, light behaves in some very interesting ways! It can act both like a wave and like a particle, which is a concept known as wave-particle duality. Imagine throwing a stone into a pond; the ripples that spread out are like waves. Now, think of light as being able to do something similar! In a famous experiment called the double-slit experiment, scientists discovered that even single particles of light, called photons, can create patterns that suggest they are behaving like waves. This means that each photon seems to pass through both slits at the same time, creating an interference pattern, which looks like a series of bright and dark stripes. This strange behavior is a key part of quantum mechanics, which studies the smallest particles in the universe. As physicist Marcus Chown explains, this means that atoms can exist in many places at once, similar to the idea of being in two cities at the same time! Imagine if you could be in New York and London at the same moment — that’s how peculiar the world of tiny particles can be! However, this unusual behavior is only noticeable at very small scales, which is why we don't see it in our everyday lives. In our daily experiences, light seems to travel in straight lines, and we don’t notice its wave-like properties. Understanding wave-particle duality helps scientists unlock the mysteries of the universe and has led to many exciting discoveries in technology and physics. So, the next time you see light, remember that it has a secret life as both a wave and a particle!\nContext recap: At a tiny scale, light behaves in some very interesting ways! It can act both like a wave and like a particle, which is a concept known as wave-particle duality. Imagine throwing a stone into a pond; the ripples that spread out are like waves. Now, think of light as being able to do something similar!\nWhy this matters: Wave-Particle Duality: Light's Quantum Nature helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
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
          "back": "Light (and all quantum particles) exhibits both wave-like behavior (interference, diffraction) and particle-like behavior (photoelectric effect). This dual nature is fundamental to quantum mechanics."
        },
        {
          "id": "physics-101-l10-f6",
          "front": "Double-slit experiment",
          "back": "When particles (photons or electrons) pass through two slits, they create an interference pattern on a screen — even when sent one at a time — demonstrating their wave-like nature."
        },
        {
          "id": "physics-101-l10-f7",
          "front": "Quantum superposition",
          "back": "A quantum particle can exist in multiple states simultaneously until measured. An atom can be in many places at once — the act of observation 'collapses' it to a single state."
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
          "content": "Animation showing light bending as it passes from air to water."
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
      "chunks": [
        {
          "id": "physics-101-l13-c1",
          "title": "The Challenge",
          "content": "Imagine you are taking on an exciting challenge: designing a marble roller coaster for a science fair! Your goal is to create a track that allows a marble to start at the top of a hill, roll through a loop, go over a second hill, and finally land safely in a cup at the end. You have a total of 2 meters of track material to work with. How can you design your roller coaster to make sure the marble completes all these tasks? This project will require you to think creatively and apply your knowledge of physics!\nAs you start brainstorming, consider the different shapes and angles you can use for your track. Think about how gravity will help the marble move and how you can use energy to make it go through the loop and over the hills. You might want to sketch your ideas on paper first, and then build a model to test your design. Remember, the key is to have fun while learning about the forces at play in your roller coaster! Good luck, and let your imagination run wild!\nContext recap: Imagine you are taking on an exciting challenge: designing a marble roller coaster for a science fair! Your goal is to create a track that allows a marble to start at the top of a hill, roll through a loop, go over a second hill, and finally land safely in a cup at the end. You have a total of 2 meters of track material to work with. How can you design your roller coaster to make sure the marble completes all these tasks?\nWhy this matters: The Challenge helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l13-c2",
          "title": "Energy Budget",
          "content": "When you're designing your very own marble roller coaster, it's super important to understand how energy works! Imagine the marble sitting at the very top of the first hill. At this point, it has something called gravitational potential energy (PE). This type of energy is all about how high the marble is above the ground. The higher it is, the more potential energy it has! Now, as the marble starts to roll down the hill, that potential energy begins to change into kinetic energy (KE). Kinetic energy is the energy of motion, and it's what makes the marble go faster as it rolls down.\nBut here's a fun fact: for the marble to make it all the way through a loop, the first hill needs to be tall enough! Specifically, the height of that first hill should be at least 2.5 times the height of the loop. This is really important because some energy gets lost due to friction, which is like a little bit of resistance that slows things down. So, if your loop is 20 centimeters tall, you need to make sure your starting hill is at least 50 centimeters high. This way, the marble will have enough energy to zoom through the loop and keep on rolling!\nUnderstanding these energy transformations will help you create a thrilling and successful roller coaster design!\nContext recap: When you're designing your very own marble roller coaster, it's super important to understand how energy works! Imagine the marble sitting at the very top of the first hill. At this point, it has something called gravitational potential energy (PE). This type of energy is all about how high the marble is above the ground.\nWhy this matters: Energy Budget helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "physics-101-l13-c3",
          "title": "Forces in Action",
          "content": "When you design a roller coaster, it's essential to understand how forces work, especially when the marble goes through a loop. At the very top of the loop, two main forces are acting on the marble: gravity and the normal force from the track. Gravity is a force that pulls everything towards the Earth, so it pulls the marble downwards. On the other hand, the normal force is the force that the track exerts on the marble, pushing it down as well. These two forces work together to create what we call centripetal force, which is necessary for keeping the marble moving in a circular path. If the marble is moving too slowly, gravity will be stronger than the normal force, and this can cause the marble to fall off the track. That's why it's so important to make sure your roller coaster design allows the marble to maintain the right speed throughout the loop. By understanding these forces, you can create a fun and safe roller coaster experience for everyone!\nContext recap: When you design a roller coaster, it's essential to understand how forces work, especially when the marble goes through a loop. At the very top of the loop, two main forces are acting on the marble: gravity and the normal force from the track. Gravity is a force that pulls everything towards the Earth, so it pulls the marble downwards. On the other hand, the normal force is the force that the track exerts on the marble, pushing it down as well.\nWhy this matters: Forces in Action helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
        },
        {
          "id": "physics-101-l13-c4",
          "title": "Design Decisions",
          "content": "When you start designing your roller coaster, you will encounter some important choices, known as trade-offs. For instance, if you decide to make the first hill taller, this will give the marble more energy as it rolls down, which can make the ride more exciting. However, this taller hill will also require a longer piece of track to accommodate it. On the flip side, if you choose to create a wider loop, it will be easier for the marble to go through, but it might not be as thrilling for the riders. Additionally, if you want to add a second hill after the loop, you must make sure that there is enough leftover kinetic energy from the marble to help it climb back up that hill. Professional roller coaster engineers use advanced computer simulations to test and fine-tune these trade-offs before they start building the actual coaster. This careful planning helps them create rides that are both fun and safe for everyone to enjoy.\nContext recap: When you start designing your roller coaster, you will encounter some important choices, known as trade-offs. For instance, if you decide to make the first hill taller, this will give the marble more energy as it rolls down, which can make the ride more exciting. However, this taller hill will also require a longer piece of track to accommodate it. On the flip side, if you choose to create a wider loop, it will be easier for the marble to go through, but it might not be as thrilling for the riders."
        },
        {
          "id": "physics-101-l13-c5",
          "title": "Beyond Classical Physics: Strings and Extra Dimensions",
          "content": "While classical physics does a fantastic job of explaining how roller coasters work, scientists believe that there might be even more exciting ideas about how the universe operates at a deeper level. One fascinating idea is called string theory, proposed by physicist Brian Greene. According to this theory, everything in the universe, including tiny particles like electrons and photons, is made up of incredibly small strings of energy that vibrate. Just like how different vibrations of a guitar string create different musical notes, these tiny strings vibrate in various ways to form different particles. Greene describes this microscopic world as filled with these tiny strings, and their unique patterns of vibration help shape everything we see in the universe.\nImagine if you could see these strings! They would be so tiny that they are much smaller than anything we can see with our eyes or even with powerful microscopes. This is where it gets even more interesting: string theory suggests that there are more dimensions in space than the three we can see and experience every day. We live in a world with length, width, and height, but string theory proposes that there could be as many as 10 or 11 dimensions! These extra dimensions are curled up so small that we can't detect them, but they might play a crucial role in how everything in the universe works together.\nThis idea opens up a whole new way of thinking about the universe and how everything is connected, making physics even more exciting and mysterious! It encourages us to explore and ask questions about the world around us, pushing the boundaries of what we know. Who knows what other amazing discoveries await us in the future? Learning about concepts like string theory can inspire us to think big and dream about the possibilities of science!\nContext recap: While classical physics does a fantastic job of explaining how roller coasters work, scientists believe that there might be even more exciting ideas about how the universe operates at a deeper level. One fascinating idea is called string theory, proposed by physicist Brian Greene. According to this theory, everything in the universe, including tiny particles like electrons and photons, is made up of incredibly small strings of energy that vibrate. Just like how different vibrations of a guitar string create different musical notes, these tiny strings vibrate in various ways to form different particles.\nWhy this matters: Beyond Classical Physics: Strings and Extra Dimensions helps learners in Physics connect ideas from Physics Essentials to decisions they make during practice and assessment. Keep the explanation friendly and practical."
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
          "back": "Starting height must be at least 2.5× the loop height to ensure the marble completes the loop (with friction)"
        },
        {
          "id": "physics-101-l13-f4",
          "front": "Design trade-off",
          "back": "Choosing between competing physics constraints: height vs track length, speed vs safety, energy vs friction losses"
        },
        {
          "id": "physics-101-l13-f5",
          "front": "String theory (basic idea)",
          "back": "All fundamental particles are actually tiny one-dimensional vibrating strings of energy. Different vibrational patterns produce different particles — like different notes from a guitar string."
        },
        {
          "id": "physics-101-l13-f6",
          "front": "Extra dimensions in string theory",
          "back": "String theory requires 10 or 11 total dimensions (not just the 3 spatial + 1 time we experience). The extra dimensions may be curled up at scales too small to observe directly."
        }
      ],
      "learningAids": [
        {
          "id": "physics-101-l13-a1",
          "type": "image",
          "title": "Roller Coaster Energy Diagram",
          "content": "Diagram showing PE and KE at each point along a roller coaster: top hill, bottom, loop, second hill, finish."
        },
        {
          "id": "physics-101-l13-a2",
          "type": "practice",
          "title": "Design Sketch Prompt",
          "content": "Sketch your roller coaster and label the PE and KE at each point. Calculate the minimum starting height for a 15 cm loop."
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
          "description": "Drag each element to the correct part of the experimental design.",
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
          "content": "Question → Hypothesis → Variables → Procedure → Data → Conclusion"
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
          "explanation": "Acceleration = change in velocity ÷ time = (20 − 0) ÷ 5 = 4 m/s²."
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
          "text": "A 3 kg book falls from a 4 m shelf. How much PE did it have at the top? (use g = 10 m/s²)",
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
          "explanation": "In a parallel circuit, voltage is the same across every branch. Each branch carries its own current. Adding branches actually decreases total resistance."
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
          "explanation": "A convex lens is thicker in the middle and bends light inward, focusing it to a point. This makes objects appear larger when viewed through it."
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
          "explanation": "Conservation of energy: all 50 J of PE converts to KE at the bottom (ignoring friction). Total energy stays at 50 J."
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
