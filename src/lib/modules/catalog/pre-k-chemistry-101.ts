import type { LearningModule } from "@/lib/modules/types";

export const pre_k_chemistry_101_Module: LearningModule = {
  "id": "pre-k-chemistry-101",
  "title": "Pre-K Kitchen Science Lab!",
  "description": "Explore the amazing world of matter and mixtures right in your kitchen! Children ages 3-5 discover solids, liquids, and gases, learn how mixing creates new things, watch ice melt and water boil, and find out why oil and water refuse to be friends.",
  "subject": "Chemistry",
  "tags": [
    "pre-k",
    "kitchen science",
    "interactive",
    "states of matter"
  ],
  "minAge": 3,
  "maxAge": 5,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/placeholders/lesson-robot-chemistry.svg",
  "learningObjectives": [
    "Identify the three states of matter: solid, liquid, and gas.",
    "Give examples of everyday solids, liquids, and gases.",
    "Describe what happens when ice melts, water freezes, and water boils.",
    "Explain that mixing things can create something new.",
    "Predict whether two liquids will mix or stay separate.",
    "Describe a simple chemical reaction, like baking soda and vinegar."
  ],
  "lessons": [
    {
      "id": "prek-chem-l01",
      "title": "Solids: Things You Can Hold!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Define a solid as something that keeps its shape.",
        "Name at least three everyday solids.",
        "Explain that solids can be hard, soft, or squishy."
      ],
      "chunks": [
        {
          "id": "prek-chem-l01-c1",
          "title": "What Is a Solid?",
          "content": "A solid is something special that keeps its own shape! If you pick up a toy block, it stays a block. If you put it in a cup, it's still a block! 🧱 You can hold solids, stack them, and build amazing towers. Solids don't flow like water. Look around! What solids can you see?",
          "visualPrompt": "Animation of a toy block being picked up and placed in different containers (a box, a bowl), always keeping its block shape."
        },
        {
          "id": "prek-chem-l01-c2",
          "title": "Hard Solids vs. Soft Solids",
          "content": "Guess what? Not all solids are hard like a rock. Some are soft and cuddly! A pillow is a solid, but it's super soft and squishy. A rubber ball is a solid, and it bounces! Even a cookie is a solid, but it's crumbly and yummy. Solids can feel hard, soft, smooth, or rough. Isn't that neat?",
          "visualPrompt": "Side-by-side comparison: a child easily squishes a soft pillow, then tries to squish a hard wooden block and can't."
        },
        {
          "id": "prek-chem-l01-c3",
          "title": "Solid Scavenger Hunt",
          "content": "Let's go on a solid scavenger hunt! Look around you. Your chair is a solid. Your shoe is a solid. A crayon is a solid you can draw with! 🖍️ Even an ice cube is a solid. It's cold and slippery! Let's see how many solids we can find before this video ends!",
          "visualPrompt": "Fast-paced montage of a child pointing to various solid objects in a room: a book, a spoon, a toy car, an apple."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l01-f1",
          "front": "What is a solid?",
          "back": "Something that keeps its own shape! You can hold it. 🧱"
        },
        {
          "id": "prek-chem-l01-f2",
          "front": "Are all solids hard?",
          "back": "No! Solids can be hard (rock), soft (pillow), or squishy (ball). 🧸"
        },
        {
          "id": "prek-chem-l01-f3",
          "front": "Name 3 solids.",
          "back": "Block, shoe, crayon, ice cube, teddy bear!"
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l01-q1",
          "text": "Which one of these is a solid?",
          "options": [
            {
              "id": "a",
              "text": "A wooden block 🧱"
            },
            {
              "id": "b",
              "text": "Orange juice 🧃"
            },
            {
              "id": "c",
              "text": "Steam from a kettle ♨️"
            }
          ],
          "correctOptionId": "a",
          "explanation": "A block keeps its shape, so it's a solid!"
        },
        {
          "id": "prek-chem-l01-q2",
          "text": "A soft, cuddly teddy bear is...",
          "options": [
            {
              "id": "a",
              "text": "A liquid because it's soft"
            },
            {
              "id": "b",
              "text": "A solid because it keeps its shape"
            },
            {
              "id": "c",
              "text": "A gas because it's fluffy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Even soft, squishy things are solids if they keep their own shape!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l01-a1",
          "type": "image",
          "title": "Look and Find: Solids!",
          "content": "A colorful illustration of a playroom filled with different solid objects. A prompt asks the child to point to all the solids they can find."
        }
      ]
    },
    {
      "id": "prek-chem-l02",
      "title": "Liquids: Things That Flow and Splash!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Define a liquid as something that flows and takes the shape of its container.",
        "Name at least three everyday liquids.",
        "Explain that some liquids are thick and some are thin."
      ],
      "chunks": [
        {
          "id": "prek-chem-l02-c1",
          "title": "What Is a Liquid?",
          "content": "A liquid is something that can flow, splash, and pour! 🌊 When you pour water into a cup, it takes the shape of the cup. If you pour it into a bowl, it takes the shape of the bowl. Liquids don't have a shape of their own. Think about juice, milk, or soup. They are all liquids!",
          "visualPrompt": "Animation showing water being poured from a pitcher into three differently shaped glasses (tall, short, curvy). The water perfectly takes the shape of each glass."
        },
        {
          "id": "prek-chem-l02-c2",
          "title": "Thick and Thin Liquids",
          "content": "Not all liquids flow the same way. Water is a thin liquid. It flows super fast—splash! But honey is a thick liquid. It flows very slowly—glug, glug, glug. 🍯 Ketchup is thick, too! Even though they flow differently, they are all liquids because they take the shape of their container.",
          "visualPrompt": "A split-screen race: water is poured on one side and flows quickly to the bottom, while honey is poured on the other side and flows very slowly."
        },
        {
          "id": "prek-chem-l02-c3",
          "title": "Liquid Lab Fun",
          "content": "Let's be scientists in the kitchen! You can find milk in the fridge, soap by the sink, and juice in a carton. Try pouring water from a tall cup into a wide bowl. See how it changes shape? That's the magic of liquids! They can flow and splash and are so much fun to explore.",
          "visualPrompt": "A child safely pours water from a measuring cup into a baking dish, watching it spread out to fill the bottom."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l02-f1",
          "front": "What is a liquid?",
          "back": "Something that flows and takes the shape of its container! Like water or milk. 💧"
        },
        {
          "id": "prek-chem-l02-f2",
          "front": "Why can't you stack liquids?",
          "back": "Because they flow! They don't have their own shape and would just spread out."
        },
        {
          "id": "prek-chem-l02-f3",
          "front": "Name a thick liquid.",
          "back": "Honey, syrup, or ketchup! They flow very slowly. 🍯"
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l02-q1",
          "text": "Which one of these is a liquid?",
          "options": [
            {
              "id": "a",
              "text": "A rock 🪨"
            },
            {
              "id": "b",
              "text": "Milk 🥛"
            },
            {
              "id": "c",
              "text": "A spoon 🥄"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Milk flows and takes the shape of its glass—it's a liquid!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l02-a1",
          "type": "image",
          "title": "Look and Find: Liquids!",
          "content": "A colorful illustration of a kitchen showing different liquids (juice in a pitcher, soup in a bowl, soap in a dispenser). A prompt asks the child to point to all the liquids."
        }
      ]
    },
    {
      "id": "prek-chem-l03",
      "title": "Gases: The Invisible Stuff!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Define a gas as something that spreads out to fill all the space it can.",
        "Explain that air is a gas we can feel but not see.",
        "Name two examples of gases."
      ],
      "chunks": [
        {
          "id": "prek-chem-l03-c1",
          "title": "What Is a Gas?",
          "content": "A gas is a super sneaky kind of matter. We usually can't see it! When you blow up a balloon, you are filling it with a gas called air. 🎈 Gas doesn't have its own shape. It spreads out to fill up any container it's in, no matter how big! Like the yummy smell of cookies baking that fills the whole kitchen.",
          "visualPrompt": "Animation of a child blowing up a balloon. Colorful dots representing 'air' fly into the balloon and bounce around, filling the entire space inside."
        },
        {
          "id": "prek-chem-l03-c2",
          "title": "Air Is All Around Us!",
          "content": "The most important gas is the air you are breathing right now! 🌬️ You can't see air, but you can feel it. Feel the wind on your face? That's moving air! You can see what air does, too. It makes kites fly, flags wave, and bubbles float. Air is invisible, but it's very real and very important.",
          "visualPrompt": "A gentle animation of wind blowing through trees, making leaves rustle and a pinwheel spin."
        },
        {
          "id": "prek-chem-l03-c3",
          "title": "Steam and Bubbles",
          "content": "Have you ever seen steam rising from a hot bowl of soup? That steam is water that has turned into a gas! And the fizz in your soda? Those are tiny bubbles of gas called carbon dioxide. They tickle your nose! Gases are everywhere, doing amazing things.",
          "visualPrompt": "Close-up shot of fizzy soda, with animated bubbles rising to the surface and popping."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l03-f1",
          "front": "What is a gas?",
          "back": "Matter that spreads out to fill all the space. It's usually invisible! 💨"
        },
        {
          "id": "prek-chem-l03-f2",
          "front": "Can you see air?",
          "back": "No, but you can feel it (wind) and see what it does (makes bubbles float)! 🌬️"
        },
        {
          "id": "prek-chem-l03-f3",
          "front": "What gas is in fizzy drinks?",
          "back": "Carbon dioxide! It makes the bubbles. ✨"
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l03-q1",
          "text": "The air you breathe is a...",
          "options": [
            {
              "id": "a",
              "text": "Solid"
            },
            {
              "id": "b",
              "text": "Liquid"
            },
            {
              "id": "c",
              "text": "Gas"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Air is an invisible gas that's all around us!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l03-a1",
          "type": "image",
          "title": "Look and Find: Gases!",
          "content": "An illustration of a park scene showing wind blowing a kite, a person blowing bubbles, and steam from a hot dog cart. A prompt asks the child to point to where the gases are."
        }
      ]
    },
    {
      "id": "prek-chem-l04",
      "title": "Sort It Out: Solid, Liquid, or Gas?",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Sort everyday items into groups: solid, liquid, or gas.",
        "Tell why an item is a solid, liquid, or gas."
      ],
      "interactiveActivities": [
        {
          "id": "prek-chem-l04-ia1",
          "type": "sorting_buckets",
          "title": "Matter Sorting Game!",
          "description": "Drag each picture to the right bucket!",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "solid",
                "label": "Solids (Keep their shape)"
              },
              {
                "id": "liquid",
                "label": "Liquids (Flow and pour)"
              },
              {
                "id": "gas",
                "label": "Gases (Spread out)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Ice cube",
                "labelImageUrl": "/images/ice-cube.svg",
                "correctBucketId": "solid"
              },
              {
                "id": "i2",
                "label": "Orange juice",
                "labelImageUrl": "/images/juice-box.svg",
                "correctBucketId": "liquid"
              },
              {
                "id": "i3",
                "label": "Air in a balloon",
                "labelImageUrl": "/images/balloon.svg",
                "correctBucketId": "gas"
              },
              {
                "id": "i4",
                "label": "Wooden spoon",
                "labelImageUrl": "/images/spoon.svg",
                "correctBucketId": "solid"
              },
              {
                "id": "i5",
                "label": "Honey",
                "labelImageUrl": "/images/honey-pot.svg",
                "correctBucketId": "liquid"
              },
              {
                "id": "i6",
                "label": "Steam from soup",
                "labelImageUrl": "/images/soup-bowl.svg",
                "correctBucketId": "gas"
              }
            ]
          }
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l04-a1",
          "type": "worksheet",
          "title": "Let's Sort!",
          "content": "A printable worksheet with pictures of objects to cut out and paste into three columns: 'Solid', 'Liquid', and 'Gas'."
        }
      ]
    },
    {
      "id": "prek-chem-l05",
      "title": "Checkpoint: States of Matter",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Recall the definitions of solid, liquid, and gas.",
        "Identify examples of each state of matter."
      ],
      "questions": [
        {
          "id": "prek-chem-l05-q1",
          "text": "A solid is something that...",
          "options": [
            {
              "id": "a",
              "text": "Flows like water"
            },
            {
              "id": "b",
              "text": "Keeps its own shape"
            },
            {
              "id": "c",
              "text": "Is always invisible"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Solids like a toy car or a book always keep their own shape!"
        },
        {
          "id": "prek-chem-l05-q2",
          "text": "Which of these is a liquid?",
          "options": [
            {
              "id": "a",
              "text": "A brick"
            },
            {
              "id": "b",
              "text": "Maple syrup"
            },
            {
              "id": "c",
              "text": "A balloon full of air"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Maple syrup flows and takes the shape of your pancakes—it's a liquid!"
        },
        {
          "id": "prek-chem-l05-q3",
          "text": "You can't see air, but you can...",
          "options": [
            {
              "id": "a",
              "text": "Stack it like blocks"
            },
            {
              "id": "b",
              "text": "Feel it when the wind blows"
            },
            {
              "id": "c",
              "text": "Eat it with a fork"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Air is an invisible gas, but you can feel the wind!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l05-a1",
          "type": "review_sheet",
          "title": "Matter Chart",
          "content": "A simple, one-page chart with three columns (Solid, Liquid, Gas) showing picture examples for each state of matter."
        }
      ]
    },
    {
      "id": "prek-chem-l06",
      "title": "Changing States: Ice, Water, Steam!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that heat makes solids melt into liquids.",
        "Explain that cold makes liquids freeze into solids.",
        "Describe what happens when water boils and turns into steam."
      ],
      "chunks": [
        {
          "id": "prek-chem-l06-c1",
          "title": "From Solid to Liquid: Melting!",
          "content": "Have you ever held an ice cube in your warm hand? Drip, drip, drip! The warmth from your hand makes the solid ice change into liquid water. This is called MELTING! 🧊➡️💧 An ice cream cone on a hot day melts, too. Heat can turn solids into liquids. It's like magic!",
          "visualPrompt": "Time-lapse video of an ice cube sitting on a plate, slowly melting into a puddle of water."
        },
        {
          "id": "prek-chem-l06-c2",
          "title": "From Liquid to Solid: Freezing!",
          "content": "Now let's go the other way! If you put liquid water in the freezer, it gets super cold and turns into solid ice! This is called FREEZING. 💧➡️🧊 That's how we make yummy popsicles and ice cubes for our drinks. Cold turns liquids into solids!",
          "visualPrompt": "Animation showing a tray of water being placed in a freezer. A thermometer drops, and the water slowly crystallizes into solid ice cubes."
        },
        {
          "id": "prek-chem-l06-c3",
          "title": "From Liquid to Gas: Boiling!",
          "content": "What happens when water gets really, really hot on the stove? It starts to bubble! This is called BOILING. The hot water turns into a gas called steam, which floats up into the air. 💧➡️♨️ So water can be a solid (ice), a liquid (water), and a gas (steam)!",
          "visualPrompt": "A pot of water on a stove begins to bubble and then produces visible steam that rises and disappears."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l06-f1",
          "front": "What is melting?",
          "back": "When heat turns a solid into a liquid! Like ice melting into water. 🧊➡️💧"
        },
        {
          "id": "prek-chem-l06-f2",
          "front": "What is freezing?",
          "back": "When cold turns a liquid into a solid! Like water freezing into ice. 💧➡️🧊"
        },
        {
          "id": "prek-chem-l06-f3",
          "front": "What is boiling?",
          "back": "When heat turns a liquid into a gas! Like water boiling into steam. 💧➡️♨️"
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l06-q1",
          "text": "What happens when an ice cube gets warm?",
          "options": [
            {
              "id": "a",
              "text": "It gets harder"
            },
            {
              "id": "b",
              "text": "It melts into water"
            },
            {
              "id": "c",
              "text": "It turns into a rock"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Heat makes solid ice melt into liquid water!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l06-a1",
          "type": "animation",
          "title": "The Water Adventure",
          "content": "A short, simple animation showing a friendly water drop character freezing into an ice cube, melting back to water, and boiling into a happy steam cloud."
        }
      ]
    },
    {
      "id": "prek-chem-l07",
      "title": "Mixing Magic!",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Explain that mixing two things can create something new.",
        "Give an example of two things that mix well.",
        "Describe what happens when oil and water are combined."
      ],
      "chunks": [
        {
          "id": "prek-chem-l07-c1",
          "title": "Color Mixing",
          "content": "Let's do some mixing magic with paint! 🎨 If you take red paint and mix it with yellow paint, what do you get? Orange! You made a brand new color! When you mix blue and yellow, you get green. Mixing things together can make something totally new and beautiful.",
          "visualPrompt": "Animated blobs of red and yellow paint swirl together on a palette, transforming into a bright orange blob."
        },
        {
          "id": "prek-chem-l07-c2",
          "title": "Kitchen Mixtures",
          "content": "You're a scientist every time you're in the kitchen! When you pour chocolate syrup into milk, you mix them to make yummy chocolate milk. 🥛🍫 When you stir sugar into water, the sugar seems to disappear, but it's just mixed in to make the water sweet! Some things mix together perfectly.",
          "visualPrompt": "A clear glass of milk is shown. Chocolate syrup is poured in and stirred, and the whole glass turns brown."
        },
        {
          "id": "prek-chem-l07-c3",
          "title": "Oil and Water Don't Mix!",
          "content": "Let's try a tricky one. What happens if you pour oil into water? They don't mix! No matter how much you shake them, the oil will always float back to the top in little bubbles. 🫗 Oil and water are like two friends who like to play separately. They just don't mix together.",
          "visualPrompt": "A clear jar with water. Yellow oil is poured in. The jar is shaken, creating bubbles, but then it settles, and the oil forms a distinct layer on top of the water."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l07-f1",
          "front": "What happens when you mix red and yellow paint?",
          "back": "You get ORANGE! Mixing can create a new color. 🎨"
        },
        {
          "id": "prek-chem-l07-f2",
          "front": "Do oil and water mix?",
          "back": "No! Oil floats on top of water. They stay separate. 🫗"
        },
        {
          "id": "prek-chem-l07-f3",
          "front": "Name two things that mix well.",
          "back": "Chocolate and milk! Sugar and water! Salt and water!"
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l07-q1",
          "text": "If you mix blue paint and yellow paint, you get...",
          "options": [
            {
              "id": "a",
              "text": "Red"
            },
            {
              "id": "b",
              "text": "Purple"
            },
            {
              "id": "c",
              "text": "Green"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Blue and yellow make green! Try it with your crayons."
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l07-a1",
          "type": "video_clip",
          "title": "Mixing Fun!",
          "content": "A short, hands-on video clip showing paint colors blending, chocolate syrup dissolving in milk, and oil separating from water."
        }
      ]
    },
    {
      "id": "prek-chem-l08",
      "title": "Mix It Up Lab!",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Match color combinations to their results.",
        "Predict whether common kitchen items will mix or stay separate."
      ],
      "interactiveActivities": [
        {
          "id": "prek-chem-l08-ia1",
          "type": "matching_pairs",
          "title": "Color Mixing Match!",
          "description": "Connect the two paint colors to the new color they make.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Red + Yellow"
              },
              {
                "id": "l2",
                "label": "Red + Blue"
              },
              {
                "id": "l3",
                "label": "Yellow + Blue"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Orange"
              },
              {
                "id": "r2",
                "label": "Purple"
              },
              {
                "id": "r3",
                "label": "Green"
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
        },
        {
          "id": "prek-chem-l08-ia2",
          "type": "sorting_buckets",
          "title": "Will It Mix?",
          "description": "Drag each pair into the 'Mix' or 'Don't Mix' bucket.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "mix",
                "label": "Yes, they mix! 👍"
              },
              {
                "id": "dont_mix",
                "label": "No, they don't! 👎"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Oil + Water",
                "correctBucketId": "dont_mix"
              },
              {
                "id": "i2",
                "label": "Sugar + Water",
                "correctBucketId": "mix"
              },
              {
                "id": "i3",
                "label": "Sand + Water",
                "correctBucketId": "dont_mix"
              },
              {
                "id": "i4",
                "label": "Juice + Water",
                "correctBucketId": "mix"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "prek-chem-l09",
      "title": "Fizz, Pop, Boom! Simple Reactions",
      "type": "video",
      "duration": 8,
      "objectives": [
        "Describe what happens when baking soda and vinegar are mixed.",
        "Explain that a chemical reaction creates something new.",
        "Give an example of a change that cannot be reversed, like baking a cake."
      ],
      "chunks": [
        {
          "id": "prek-chem-l09-c1",
          "title": "The Volcano Experiment!",
          "content": "Let's make a mini volcano! All you need is baking soda and vinegar. When you pour the vinegar onto the baking soda... FIZZZZ! 🌋 Bubbles erupt and overflow, just like lava! This isn't just mixing. The baking soda and vinegar are changing into something new: a gas! This is called a chemical reaction.",
          "visualPrompt": "A simple, safe demonstration of a baking soda and vinegar volcano erupting in a kitchen sink."
        },
        {
          "id": "prek-chem-l09-c2",
          "title": "What Is a Reaction?",
          "content": "A chemical reaction is when you mix things and they change to make something brand new. Think about baking a cake. You mix flour, eggs, and sugar. But after you bake it, you have a cake! 🎂 You can't change it back into eggs and flour. The ingredients reacted with the heat to make something new and delicious!",
          "visualPrompt": "Animation showing icons for flour, eggs, and sugar going into a bowl, then into an oven, and coming out as a decorated cake."
        },
        {
          "id": "prek-chem-l09-c3",
          "title": "You're a Chemist!",
          "content": "When you made the volcano or helped bake a cake, you were being a chemist! A chemist is a scientist who studies how things mix and change. These amazing changes, or reactions, happen all around us every day. Science is everywhere, and it's so much fun!",
          "visualPrompt": "A child wearing oversized safety goggles and a lab coat smiles proudly next to their fizzing volcano experiment."
        }
      ],
      "flashcards": [
        {
          "id": "prek-chem-l09-f1",
          "front": "What happens with baking soda + vinegar?",
          "back": "FIZZ! They react and make a gas, like a mini volcano! 🌋"
        },
        {
          "id": "prek-chem-l09-f2",
          "front": "What is a chemical reaction?",
          "back": "When things combine to make something totally new! Like baking a cake. 🧪"
        },
        {
          "id": "prek-chem-l09-f3",
          "front": "Can you un-bake a cake?",
          "back": "No! A reaction creates a permanent change. You can't go back."
        }
      ],
      "questions": [
        {
          "id": "prek-chem-l09-q1",
          "text": "Mixing baking soda and vinegar makes...",
          "options": [
            {
              "id": "a",
              "text": "A solid rock"
            },
            {
              "id": "b",
              "text": "Fizzy bubbles of gas!"
            },
            {
              "id": "c",
              "text": "A rainbow"
            }
          ],
          "correctOptionId": "b",
          "explanation": "They have a chemical reaction and create fizzy gas bubbles!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l09-a1",
          "type": "safety_card",
          "title": "Science Safety!",
          "content": "A simple visual card showing a child with a friendly grown-up, with icons for 'Ask a grown-up for help' and 'Wear safety glasses'."
        }
      ]
    },
    {
      "id": "prek-chem-l10",
      "title": "Celebration Quiz: You're a Kitchen Scientist!",
      "type": "quiz",
      "duration": 10,
      "objectives": [
        "Review and identify solids, liquids, and gases.",
        "Recall the results of simple mixtures and reactions."
      ],
      "questions": [
        {
          "id": "prek-chem-l10-q1",
          "text": "A wooden block is a...",
          "options": [
            {
              "id": "a",
              "text": "Liquid"
            },
            {
              "id": "b",
              "text": "Gas"
            },
            {
              "id": "c",
              "text": "Solid"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A block keeps its shape—it's a solid!"
        },
        {
          "id": "prek-chem-l10-q2",
          "text": "Orange juice is a...",
          "options": [
            {
              "id": "a",
              "text": "Solid"
            },
            {
              "id": "b",
              "text": "Liquid"
            },
            {
              "id": "c",
              "text": "Gas"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Orange juice flows and takes the shape of its glass—it's a liquid!"
        },
        {
          "id": "prek-chem-l10-q3",
          "text": "When ice gets warm, it...",
          "options": [
            {
              "id": "a",
              "text": "Freezes"
            },
            {
              "id": "b",
              "text": "Melts into water"
            },
            {
              "id": "c",
              "text": "Turns into a rock"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Heat makes ice melt—it changes from a solid to a liquid!"
        },
        {
          "id": "prek-chem-l10-q4",
          "text": "Oil and water...",
          "options": [
            {
              "id": "a",
              "text": "Mix perfectly"
            },
            {
              "id": "b",
              "text": "Do NOT mix"
            },
            {
              "id": "c",
              "text": "Turn into a gas"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Oil and water refuse to mix—the oil always floats to the top!"
        },
        {
          "id": "prek-chem-l10-q5",
          "text": "Baking soda + vinegar is an example of a...",
          "options": [
            {
              "id": "a",
              "text": "Simple mixture"
            },
            {
              "id": "b",
              "text": "Chemical reaction"
            },
            {
              "id": "c",
              "text": "Freezing"
            }
          ],
          "correctOptionId": "b",
          "explanation": "They react and create something new—fizzy carbon dioxide gas!"
        }
      ],
      "learningAids": [
        {
          "id": "prek-chem-l10-a1",
          "type": "certificate",
          "title": "Kitchen Scientist Certificate",
          "content": "A fun, printable certificate of completion for the 'Pre-K Kitchen Science Lab!' module, with a space for the child's name."
        }
      ]
    }
  ]
};
