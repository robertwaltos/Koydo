import type { LearningModule } from "@/lib/modules/types";

export const Chemistry101Module: LearningModule = {
  "id": "chemistry-101",
  "title": "Chemistry Essentials",
  "description": "Learn matter, reactions, mixtures, and lab safety through guided lessons.",
  "subject": "Chemistry",
  "tags": [
    "core",
    "curriculum",
    "interactive"
  ],
  "minAge": 7,
  "maxAge": 18,
  "version": "2.0.0",
  "learningObjectives": [
    "Describe the three states of matter and how particles behave in each",
    "Identify the parts of an atom and read basic information from the periodic table",
    "Distinguish between elements, compounds, and mixtures",
    "Recognize signs of a chemical reaction and balance simple equations",
    "Apply lab safety rules and measurement skills"
  ],
  "lessons": [
    {
      "id": "chemistry-101-l01",
      "title": "States of Matter",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe solids, liquids, and gases at the particle level",
        "Explain how temperature affects the state of matter"
      ],
      "chunks": [
        {
          "id": "chemistry-101-l01-c1",
          "title": "Three States of Matter",
          "kind": "intro",
          "content": "Matter is everything around us that has weight and takes up space. It can be found in three main forms, which we call states: solid, liquid, and gas. Each state of matter has unique characteristics that make it special. For instance, in solids, the tiny particles are packed tightly together, which gives solids a definite shape and volume. In liquids, the particles are still close but can move around each other, allowing liquids to flow and take the shape of their container. Finally, in gases, the particles are much more spread out and move freely, filling up any space available. Understanding these states helps us learn about the world around us and how different materials behave!"
        },
        {
          "id": "chemistry-101-l01-c2",
          "title": "Particle Behavior",
          "kind": "concept",
          "content": "Let's explore how particles behave in different states of matter! In solids, the particles are packed closely together in a specific arrangement. This means they can only vibrate in place, which is why solids have a definite shape and volume. Think of ice or a rock; they hold their shape no matter where you put them!\nNow, when we look at liquids, the particles are still close together, but they have more freedom to move around. They can slide past each other, which allows liquids to take the shape of their container. For example, when you pour water into a glass, it takes the shape of the glass while still keeping the same amount of water inside.\nFinally, we have gases. In gases, the particles are much farther apart and move around freely. This is why gases do not have a definite shape or volume. If you blow up a balloon, the air inside spreads out to fill the entire balloon, no matter how big or small it is.\nUnderstanding how particles behave in solids, liquids, and gases helps us learn about the properties of matter and how they interact with each other in our world! Isn't that fascinating?"
        },
        {
          "id": "chemistry-101-l01-c3",
          "title": "Changing States",
          "kind": "concept",
          "content": "When we add heat energy to a substance, it makes the tiny particles that make up that substance move faster. This increase in movement can lead to a change in the state of matter. For instance, when we heat ice, which is a solid, to 0°C, it melts and transforms into liquid water. This is a fascinating process! Similarly, when we continue to heat water to 100°C, it boils and changes into steam, which is a gas. But what happens when we take away heat? The process can reverse! Steam can cool down and condense back into water, and water can freeze and turn back into ice. These changes are known as physical changes because, even though the state of the substance changes, the substance itself remains the same. Understanding these processes is important because it helps us learn how different forms of matter interact with energy in our world!"
        },
        {
          "id": "chemistry-101-l01-c4",
          "title": "Try It Yourself",
          "kind": "practice",
          "content": "Let's get creative and explore the world of particles! Start by drawing three boxes. Each box will show how particles are arranged in a solid, a liquid, and a gas. Be sure to label each box with important properties: the shape, the volume, and how the particles move in each state. For example, in a solid, the particles are tightly packed and don't move around much, while in a gas, they are spread out and move freely!\nNext, let's think about what happens when you hold a piece of ice in your hand. As it melts, the particles in the ice start to move faster and spread apart. Write down your thoughts on this process. Why do you think the ice changes from solid to liquid? This fun activity will help you visualize and understand the differences between the states of matter and how temperature affects them!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-101-l01-f1",
          "front": "How do particles behave in a solid?",
          "back": "Tightly packed in a fixed pattern, vibrating in place. Definite shape and definite volume."
        },
        {
          "id": "chemistry-101-l01-f2",
          "front": "What is the difference between evaporation and boiling?",
          "back": "Both are liquid → gas. Evaporation happens at the surface at any temperature. Boiling happens throughout the liquid at the boiling point."
        },
        {
          "id": "chemistry-101-l01-f3",
          "front": "What is condensation?",
          "back": "Gas → liquid. Happens when gas particles lose energy and slow down enough for attractions to pull them together (e.g., water droplets on a cold glass)."
        },
        {
          "id": "chemistry-101-l01-f4",
          "front": "Are state changes physical or chemical?",
          "back": "Physical changes. The substance does not change identity — water is still H₂O whether it is ice, liquid water, or steam."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l01-a1",
          "type": "image",
          "title": "Particle Model Diagram",
          "content": "Three panels showing particle arrangement in solid (ordered grid), liquid (close but disordered), and gas (spread apart, fast-moving)."
        },
        {
          "id": "chemistry-101-l01-a2",
          "type": "animation",
          "title": "Heating Ice to Steam",
          "content": "Animation showing ice particles vibrating, then melting into flowing liquid particles, then boiling into fast-moving gas particles."
        }
      ]
    },
    {
      "id": "chemistry-101-l02",
      "title": "Atoms and Molecules",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify protons, neutrons, and electrons in an atom",
        "Explain how atoms combine to form molecules"
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Parts of an Atom",
          "description": "Sort each description to the correct subatomic particle.",
          "estimatedMinutes": 8,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "proton",
                "label": "Proton"
              },
              {
                "id": "neutron",
                "label": "Neutron"
              },
              {
                "id": "electron",
                "label": "Electron"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Positive charge (+)",
                "correctBucketId": "proton"
              },
              {
                "id": "i2",
                "label": "No charge (neutral)",
                "correctBucketId": "neutron"
              },
              {
                "id": "i3",
                "label": "Negative charge (−)",
                "correctBucketId": "electron"
              },
              {
                "id": "i4",
                "label": "Found in the nucleus",
                "correctBucketId": "proton"
              },
              {
                "id": "i5",
                "label": "Orbits the nucleus in energy levels",
                "correctBucketId": "electron"
              },
              {
                "id": "i6",
                "label": "Adds mass but no charge to the nucleus",
                "correctBucketId": "neutron"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "chemistry-101-l02-c1",
          "title": "Inside the Atom",
          "kind": "concept",
          "content": "An atom is the tiniest building block of everything around us! It is so small that we can't see it with our eyes, but it plays a huge role in making up all the matter in the universe. At the very center of an atom is a part called the nucleus. This nucleus is like a tiny core that holds two types of particles: protons and neutrons. Protons are special because they have a positive charge, while neutrons are neutral, meaning they have no charge at all. Surrounding the nucleus are even smaller particles called electrons. Electrons have a negative charge and they zoom around the nucleus in areas known as energy levels or shells. The number of protons in the nucleus is what makes each element unique. For instance, hydrogen, which is the simplest element, has just one proton. Carbon, which is important for life, has six protons, and oxygen, which we breathe, has eight protons. Learning about atoms is super important because they are the basic units that create everything we see and touch in our world!"
        },
        {
          "id": "chemistry-101-l02-c2",
          "title": "Atoms to Molecules",
          "kind": "concept",
          "content": "Atoms are the tiny building blocks of everything around us, and they can come together to form molecules. Molecules are groups of two or more atoms that are bonded together. For example, a water molecule, which we write as H₂O, is made up of two hydrogen atoms and one oxygen atom. The little number that appears after the element symbol, known as a subscript, tells us how many of each type of atom are in the molecule. So in H₂O, the '2' means there are two hydrogen atoms. Molecules can be made of the same kind of atoms, like O₂, which consists of two oxygen atoms, or they can be made of different kinds of atoms, like CO₂, which has one carbon atom and two oxygen atoms. Understanding molecules is important because it helps us learn how different substances are created and how they interact with each other in our world!"
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l02-a1",
          "type": "practice",
          "title": "Atom Builder",
          "content": "Build a carbon atom: place 6 protons and 6 neutrons in the nucleus, and arrange 6 electrons in shells (2 in the first shell, 4 in the second)."
        }
      ]
    },
    {
      "id": "chemistry-101-l03",
      "title": "Checkpoint: Matter Basics",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l03-q1",
          "text": "Which state of matter has a definite volume but no definite shape?",
          "skillId": "chemistry-101-skill-states",
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
            },
            {
              "id": "d",
              "text": "Plasma"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Liquids have a definite volume (fixed amount of space) but take the shape of their container because particles can slide past each other."
        },
        {
          "id": "chemistry-101-l03-q2",
          "text": "What determines which element an atom is?",
          "skillId": "chemistry-101-skill-atoms",
          "options": [
            {
              "id": "a",
              "text": "The number of neutrons"
            },
            {
              "id": "b",
              "text": "The number of electrons"
            },
            {
              "id": "c",
              "text": "The number of protons"
            },
            {
              "id": "d",
              "text": "The total mass"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The atomic number (number of protons) defines the element. Carbon always has 6 protons; change that number and it becomes a different element."
        },
        {
          "id": "chemistry-101-l03-q3",
          "text": "What happens to particles when a solid melts into a liquid?",
          "skillId": "chemistry-101-skill-states",
          "options": [
            {
              "id": "a",
              "text": "Particles stop moving entirely"
            },
            {
              "id": "b",
              "text": "Particles gain energy and begin to slide past each other"
            },
            {
              "id": "c",
              "text": "Particles spread far apart and fly freely"
            },
            {
              "id": "d",
              "text": "Particles shrink in size"
            }
          ],
          "correctOptionId": "b",
          "explanation": "When a solid melts, particles gain enough energy to overcome their fixed positions and begin sliding past each other, becoming a liquid."
        },
        {
          "id": "chemistry-101-l03-q4",
          "text": "How many atoms are in one molecule of CO₂?",
          "skillId": "chemistry-101-skill-atoms",
          "options": [
            {
              "id": "a",
              "text": "2"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "4"
            },
            {
              "id": "d",
              "text": "1"
            }
          ],
          "correctOptionId": "b",
          "explanation": "CO₂ = 1 carbon atom + 2 oxygen atoms = 3 atoms total. The subscript 2 applies only to oxygen."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l03-ia1",
          "type": "matching_pairs",
          "title": "State Change Names",
          "description": "Match each state change to its correct name.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Solid → Liquid"
              },
              {
                "id": "l2",
                "label": "Liquid → Gas"
              },
              {
                "id": "l3",
                "label": "Gas → Liquid"
              },
              {
                "id": "l4",
                "label": "Liquid → Solid"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Melting"
              },
              {
                "id": "r2",
                "label": "Evaporation / Boiling"
              },
              {
                "id": "r3",
                "label": "Condensation"
              },
              {
                "id": "r4",
                "label": "Freezing"
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
          "id": "chemistry-101-l03-a1",
          "type": "mnemonic",
          "title": "State Change Memory",
          "content": "Heat adds energy: Melt → Evaporate (solid→liquid→gas). Cold removes energy: Condense → Freeze (gas→liquid→solid)."
        }
      ]
    },
    {
      "id": "chemistry-101-l04",
      "title": "The Periodic Table",
      "type": "video",
      "duration": 11,
      "objectives": [
        "Read an element's atomic number, symbol, and atomic mass from the periodic table",
        "Explain how elements are organized into groups and periods"
      ],
      "chunks": [
        {
          "id": "chemistry-101-l04-c1",
          "title": "Organizing the Elements",
          "kind": "intro",
          "content": "The periodic table is a fascinating and important chart that organizes all known chemical elements according to their atomic number. The atomic number tells us how many protons are found in the nucleus of each atom. In this table, the rows are called periods, and the columns are known as groups. Each group contains elements that share similar chemical properties because they have the same number of electrons in their outer shell. This means that elements in the same group often behave in similar ways during chemical reactions. Understanding how to read and use the periodic table is a vital skill for anyone studying chemistry, as it helps scientists predict how different elements will interact with each other. By learning about the periodic table, you are taking an exciting step into the world of science!"
        },
        {
          "id": "chemistry-101-l04-c2",
          "title": "Reading an Element Tile",
          "kind": "concept",
          "content": "Each tile on the periodic table is like a little window into the world of elements! At the very top of each tile, you will see the atomic number. This number is super important because it tells us how many protons are in the atom. For example, carbon has an atomic number of 6, which means it has 6 protons. In the center of the tile, you will find the chemical symbol, which is a special one- or two-letter abbreviation for the element. For carbon, the symbol is 'C'. Below the symbol, you can see the name of the element, which helps us know what it is. Finally, at the bottom of the tile, there is the atomic mass. This number represents the average mass of the atom and is found by adding the number of protons and neutrons together. Learning how to read these tiles is a key step in understanding chemistry and the building blocks of everything around us!"
        },
        {
          "id": "chemistry-101-l04-c3",
          "title": "Metals, Nonmetals, and Metalloids",
          "kind": "concept",
          "content": "In the periodic table, most elements are categorized as metals, which you can find on the left and center parts of the table. Metals are fascinating because they are usually shiny and can conduct heat and electricity very well. They are also malleable, which means they can be shaped into different forms without breaking. On the other hand, we have nonmetals, which are located on the upper right side of the table. Nonmetals are typically dull in appearance, do not conduct heat and electricity effectively, and tend to be brittle when they are solid, meaning they can break easily. Additionally, there are metalloids, which are positioned along a staircase-like line on the table. Metalloids have a mix of properties from both metals and nonmetals, making them unique. Understanding these classifications is important because it helps scientists predict how different elements will react with one another in chemical reactions! This knowledge is essential for exploring the world of chemistry and understanding the materials around us."
        },
        {
          "id": "chemistry-101-l04-c4",
          "title": "Famous Groups",
          "kind": "example",
          "content": "In the periodic table, elements are organized into groups that share similar properties. Let's explore some of these fascinating groups! Group 1 is known as the alkali metals, which includes elements like lithium (Li), sodium (Na), and potassium (K). These metals are quite soft and very reactive, meaning they can easily combine with other substances. For instance, if you put sodium in water, it will react vigorously!\nNext, we have Group 17, which consists of the halogens. This group includes elements such as fluorine (F), chlorine (Cl), and bromine (Br). These elements are also reactive, but they are nonmetals, which means they don’t have the same metallic properties as alkali metals.\nFinally, there's Group 18, known as the noble gases. This group features elements like helium (He), neon (Ne), and argon (Ar). These gases are special because they are unreactive; their outer electron shells are completely filled, which makes them stable and less likely to form bonds with other elements.\nUnderstanding which group an element belongs to helps scientists predict how it will behave in different situations, making the periodic table a powerful tool in chemistry!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-101-l04-f1",
          "front": "What does the atomic number tell you?",
          "back": "The number of protons in an atom's nucleus. It also equals the number of electrons in a neutral atom."
        },
        {
          "id": "chemistry-101-l04-f2",
          "front": "Why are elements in the same group similar?",
          "back": "They have the same number of valence (outer) electrons, which determines chemical properties and reactivity."
        },
        {
          "id": "chemistry-101-l04-f3",
          "front": "What are the three categories of elements?",
          "back": "Metals (conduct, malleable, shiny), Nonmetals (poor conductors, brittle), and Metalloids (properties of both)."
        },
        {
          "id": "chemistry-101-l04-f4",
          "front": "Why are noble gases unreactive?",
          "back": "Their outer electron shell is full, so they don't need to gain, lose, or share electrons. They are very stable."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l04-a1",
          "type": "image",
          "title": "Periodic Table Map",
          "content": "Color-coded periodic table highlighting metals (blue), nonmetals (orange), metalloids (green), with element tile anatomy callout."
        }
      ]
    },
    {
      "id": "chemistry-101-l05",
      "title": "Elements, Compounds, and Mixtures",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Distinguish between elements, compounds, and mixtures",
        "Classify common substances"
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l05-ia1",
          "type": "sorting_buckets",
          "title": "Classify the Substance",
          "description": "Sort each substance as an element, compound, or mixture.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "element",
                "label": "Element (one type of atom)"
              },
              {
                "id": "compound",
                "label": "Compound (atoms chemically bonded)"
              },
              {
                "id": "mixture",
                "label": "Mixture (physically combined)"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Pure gold (Au)",
                "correctBucketId": "element"
              },
              {
                "id": "i2",
                "label": "Water (H₂O)",
                "correctBucketId": "compound"
              },
              {
                "id": "i3",
                "label": "Salt water",
                "correctBucketId": "mixture"
              },
              {
                "id": "i4",
                "label": "Carbon dioxide (CO₂)",
                "correctBucketId": "compound"
              },
              {
                "id": "i5",
                "label": "Trail mix (nuts, raisins, chocolate)",
                "correctBucketId": "mixture"
              },
              {
                "id": "i6",
                "label": "Oxygen gas (O₂)",
                "correctBucketId": "element"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "chemistry-101-l05-c1",
          "title": "Three Types of Substances",
          "kind": "concept",
          "content": "In the world of chemistry, we can categorize substances into three main types: elements, compounds, and mixtures. Let's explore each one! An element is a pure substance that consists of only one type of atom. For example, gold is an element made entirely of gold atoms, and oxygen is another element made up of oxygen atoms. These elements are the building blocks of everything around us!\nNext, we have compounds. A compound is created when two or more different elements bond together in a specific way. For instance, water is a compound that is always made up of two hydrogen atoms and one oxygen atom, which we write as H₂O. This fixed ratio is important because it defines the compound's unique properties.\nLastly, we have mixtures. A mixture contains two or more substances that are combined physically but not chemically. This means that the individual substances retain their own properties and can be separated easily. For example, if you mix sand and salt, you can separate them by filtering or evaporating the water. Understanding these three types of substances is crucial for learning about chemistry and how different materials interact with each other!"
        },
        {
          "id": "chemistry-101-l05-c2",
          "title": "Separating Mixtures",
          "kind": "example",
          "content": "In chemistry, we have some really cool ways to separate mixtures based on how different the materials are! One common method is called filtration. This is like using a strainer to separate sand from water. When you pour the mixture through the strainer, the sand stays behind, and the clean water flows through. Another method is evaporation. Imagine you have saltwater; if you let it sit out in the sun, the water will slowly disappear, leaving the salt behind. That’s evaporation at work! Then there’s distillation, which is a bit more advanced. It’s used to separate liquids that boil at different temperatures. For example, if you heat a mixture of alcohol and water, the alcohol will boil away first because it has a lower boiling point. Lastly, we can use magnetism to separate materials. If you have a mix of iron filings and sand, a magnet can pull out the iron filings, leaving the sand behind. Each method is special and works best depending on the properties of the materials we are working with. Isn’t it fascinating how we can use these techniques to explore and understand the world around us?"
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l05-a1",
          "type": "animation",
          "title": "Separating Salt Water",
          "content": "Animation showing evaporation: salt water heated, water evaporates as steam, salt crystals remain in the dish."
        }
      ]
    },
    {
      "id": "chemistry-101-l06",
      "title": "Checkpoint: Reaction Evidence",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l06-q1",
          "text": "Which is a compound?",
          "skillId": "chemistry-101-skill-classification",
          "options": [
            {
              "id": "a",
              "text": "Pure iron (Fe)"
            },
            {
              "id": "b",
              "text": "Table salt (NaCl)"
            },
            {
              "id": "c",
              "text": "Air"
            },
            {
              "id": "d",
              "text": "Trail mix"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NaCl (sodium chloride) is a compound — two different elements (Na and Cl) chemically bonded in a fixed ratio. Iron is an element. Air and trail mix are mixtures."
        },
        {
          "id": "chemistry-101-l06-q2",
          "text": "What separation method would you use to get sand out of water?",
          "skillId": "chemistry-101-skill-mixtures",
          "options": [
            {
              "id": "a",
              "text": "Evaporation"
            },
            {
              "id": "b",
              "text": "Magnetism"
            },
            {
              "id": "c",
              "text": "Filtration"
            },
            {
              "id": "d",
              "text": "Distillation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Filtration: pour the mixture through a filter. Sand particles are too large to pass through, while water flows through."
        },
        {
          "id": "chemistry-101-l06-q3",
          "text": "Element X has 11 protons. It is in Group 1 of the periodic table. Which describes it best?",
          "skillId": "chemistry-101-skill-periodic-table",
          "options": [
            {
              "id": "a",
              "text": "A noble gas — unreactive"
            },
            {
              "id": "b",
              "text": "A halogen — reactive nonmetal"
            },
            {
              "id": "c",
              "text": "An alkali metal — very reactive"
            },
            {
              "id": "d",
              "text": "A metalloid — mixed properties"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Group 1 elements are alkali metals. Element 11 is sodium (Na) — a soft, very reactive metal."
        },
        {
          "id": "chemistry-101-l06-q4",
          "text": "Why can a mixture be separated by physical means but a compound cannot?",
          "skillId": "chemistry-101-skill-classification",
          "options": [
            {
              "id": "a",
              "text": "Mixtures are always liquid"
            },
            {
              "id": "b",
              "text": "Mixture components are only physically combined, not chemically bonded"
            },
            {
              "id": "c",
              "text": "Compounds are always gases"
            },
            {
              "id": "d",
              "text": "There is no difference between them"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In a mixture, substances keep their own properties and are not chemically bonded, so physical methods (filtering, evaporating) can separate them. Compounds require chemical reactions to break apart."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l06-ia1",
          "type": "matching_pairs",
          "title": "Separation Method Match",
          "description": "Match each mixture to the best separation technique.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Iron filings mixed with sand"
              },
              {
                "id": "l2",
                "label": "Salt dissolved in water"
              },
              {
                "id": "l3",
                "label": "Oil floating on water"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Use a magnet (magnetism)"
              },
              {
                "id": "r2",
                "label": "Heat to evaporate the water (evaporation)"
              },
              {
                "id": "r3",
                "label": "Pour off the top layer (decanting)"
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
          "id": "chemistry-101-l06-a1",
          "type": "mnemonic",
          "title": "Element vs Compound vs Mixture",
          "content": "Element = one type of atom. Compound = different atoms bonded (fixed formula). Mixture = combined but not bonded (variable proportions)."
        }
      ]
    },
    {
      "id": "chemistry-101-l07",
      "title": "Chemical Reactions",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Identify signs of a chemical reaction",
        "Understand reactants, products, and conservation of mass"
      ],
      "chunks": [
        {
          "id": "chemistry-101-l07-c1",
          "title": "What Is a Chemical Reaction?",
          "kind": "intro",
          "content": "A chemical reaction is a fascinating process that happens when different substances, known as reactants, come together and interact to create new substances called products. These new products have their own unique properties that are different from the original reactants. It's important to understand that chemical reactions are different from physical changes, like melting ice or dissolving sugar in water. In a chemical reaction, the atoms that make up the substances rearrange themselves to form new substances, but they are never created or destroyed. This means that the same atoms are just being rearranged in a new way!"
        },
        {
          "id": "chemistry-101-l07-c2",
          "title": "Signs of a Chemical Reaction",
          "kind": "concept",
          "content": "When a chemical reaction happens, there are some exciting signs that show us it's taking place! Here are five important clues to help you recognize a chemical reaction: 1) A color change, like when iron rusts and turns a bright orange color. This is a clear indication that something new is forming! 2) You might see gas being produced, which often looks like bubbles or fizzing. This can happen in many reactions, like when you open a soda! 3) Sometimes, the temperature changes during a reaction. Some reactions give off heat, which we call exothermic, while others take in heat, known as endothermic. 4) A precipitate can form, which is a solid that appears in a liquid mixture. This is like when you see cloudy bits in a clear liquid! 5) Lastly, some reactions can produce light or sound, which can be really cool to observe! By paying attention to these signs, we can easily tell when a chemical reaction has occurred, making science even more fun and interesting!"
        },
        {
          "id": "chemistry-101-l07-c3",
          "title": "Conservation of Mass",
          "kind": "concept",
          "content": "One of the most important ideas in chemistry is called the Law of Conservation of Mass. This law tells us that during a chemical reaction, the total mass of the substances we start with, known as reactants, is always equal to the total mass of the substances we end up with, called products. This means that the atoms that make up these substances are not lost or created; instead, they are simply rearranged to form new substances. For instance, if you begin with 10 grams of reactants, after the reaction, you will still have 10 grams of products. This understanding is very important because it helps us to balance chemical equations. Balancing equations means making sure that the same number of each type of atom is present on both sides of the equation, which is essential for accurately representing what happens during a chemical reaction. By grasping this concept, we can better understand how different substances interact and change in the world around us."
        },
        {
          "id": "chemistry-101-l07-c4",
          "title": "Reading a Chemical Equation",
          "kind": "example",
          "content": "Let's dive deeper into understanding a chemical equation and what it tells us about the reactions happening in the world around us! Take the equation 2H₂ + O₂ → 2H₂O as an example. This equation shows us that two molecules of hydrogen gas (H₂) come together with one molecule of oxygen gas (O₂) to create two molecules of water (H₂O). The arrow in the equation is very important; it acts like a signpost that tells us what happens in the reaction. It means 'yields' or 'produces,' indicating the result of the reaction. Now, let's talk about the big numbers you see in front of the chemical symbols; these are called coefficients. They tell us how many molecules are participating in the reaction. In our example, the coefficients show that we have two hydrogen molecules and one oxygen molecule reacting to form two water molecules. It's also crucial to recognize that this equation is balanced. This means that if we count the atoms, we find that there are four hydrogen atoms and two oxygen atoms on both sides of the equation. Balancing equations is an essential skill in chemistry because it helps us understand how matter interacts in reactions!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-101-l07-f1",
          "front": "What are the five signs of a chemical reaction?",
          "back": "Color change, gas production (bubbles), temperature change, precipitate (solid) forms, light or sound produced."
        },
        {
          "id": "chemistry-101-l07-f2",
          "front": "What is the Law of Conservation of Mass?",
          "back": "In a chemical reaction, mass is neither created nor destroyed. Total mass of reactants = total mass of products."
        },
        {
          "id": "chemistry-101-l07-f3",
          "front": "What is the difference between reactants and products?",
          "back": "Reactants are the starting substances (left side of the arrow). Products are the new substances formed (right side of the arrow)."
        },
        {
          "id": "chemistry-101-l07-f4",
          "front": "What does a balanced equation mean?",
          "back": "The same number of each type of atom appears on both sides of the equation. Atoms are rearranged but not lost."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l07-a1",
          "type": "practice",
          "title": "Reaction Spotting",
          "content": "For each scenario, identify if a chemical reaction occurred and which sign(s) you observed: 1) Baking soda + vinegar → fizzing. 2) Ice melting in the sun. 3) A nail left outside turns reddish-brown."
        }
      ]
    },
    {
      "id": "chemistry-101-l08",
      "title": "Lab Safety and Measurement",
      "type": "interactive",
      "duration": 10,
      "objectives": [
        "Identify key lab safety rules and equipment",
        "Make accurate measurements using appropriate tools"
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l08-ia1",
          "type": "matching_pairs",
          "title": "Safety Equipment Match",
          "description": "Match each piece of lab equipment to what it protects.",
          "estimatedMinutes": 7,
          "difficultyLevel": "easy",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Safety goggles"
              },
              {
                "id": "l2",
                "label": "Lab coat or apron"
              },
              {
                "id": "l3",
                "label": "Fume hood"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Protects eyes from splashes and fumes"
              },
              {
                "id": "r2",
                "label": "Protects skin and clothing from spills"
              },
              {
                "id": "r3",
                "label": "Ventilates harmful gases away from the user"
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
      "chunks": [
        {
          "id": "chemistry-101-l08-c1",
          "title": "Essential Lab Safety Rules",
          "kind": "concept",
          "content": "When you step into a chemistry lab, your safety is the most important thing to remember! Here are some essential rules that everyone should follow to stay safe while exploring the world of chemistry. First, always wear safety goggles to protect your eyes from any splashes or harmful chemicals. It's like wearing a superhero mask for your eyes! Next, never eat or drink anything in the lab. This is really important because some chemicals can be very dangerous if they get into your body. Before you start any experiment, take a moment to read all the instructions carefully. This helps you understand what to do and keeps you safe. Also, make sure you know where the safety equipment is located. This includes the fire extinguisher, which can put out fires, the eyewash station for rinsing your eyes if something gets in them, and the emergency exit in case you need to leave quickly. If you ever spill something or break glass, tell your teacher right away. They are there to help you! Remember, these rules are here to protect you and your classmates, so always keep safety first in your mind when you're in the lab!"
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l08-a1",
          "type": "mnemonic",
          "title": "SAFE in the Lab",
          "content": "Safety goggles on, Ask before you touch, Follow all instructions, Exit plan known."
        }
      ]
    },
    {
      "id": "chemistry-101-l09",
      "title": "Review: Chemistry Concepts",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l09-q1",
          "text": "Baking soda and vinegar react to produce bubbles. Which sign of a chemical reaction is this?",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "Color change"
            },
            {
              "id": "b",
              "text": "Gas production"
            },
            {
              "id": "c",
              "text": "Precipitate formation"
            },
            {
              "id": "d",
              "text": "Light production"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bubbles indicate gas production — one of the five signs of a chemical reaction. The gas produced is carbon dioxide (CO₂)."
        },
        {
          "id": "chemistry-101-l09-q2",
          "text": "In the equation 2H₂ + O₂ → 2H₂O, how many oxygen atoms are on each side?",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "1 on each side"
            },
            {
              "id": "b",
              "text": "2 on each side"
            },
            {
              "id": "c",
              "text": "2 on the left, 1 on the right"
            },
            {
              "id": "d",
              "text": "4 on each side"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Left: O₂ = 2 oxygen atoms. Right: 2H₂O = 2 × 1 = 2 oxygen atoms. Balanced: 2 on each side."
        },
        {
          "id": "chemistry-101-l09-q3",
          "text": "Which piece of lab equipment should you always wear when handling chemicals?",
          "skillId": "chemistry-101-skill-safety",
          "options": [
            {
              "id": "a",
              "text": "Headphones"
            },
            {
              "id": "b",
              "text": "Safety goggles"
            },
            {
              "id": "c",
              "text": "Gloves only"
            },
            {
              "id": "d",
              "text": "A hat"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Safety goggles protect your eyes from chemical splashes and fumes. They are required whenever working with chemicals."
        },
        {
          "id": "chemistry-101-l09-q4",
          "text": "An atom has 8 protons, 8 neutrons, and 8 electrons. Which element is it?",
          "skillId": "chemistry-101-skill-atoms",
          "options": [
            {
              "id": "a",
              "text": "Carbon (C)"
            },
            {
              "id": "b",
              "text": "Nitrogen (N)"
            },
            {
              "id": "c",
              "text": "Oxygen (O)"
            },
            {
              "id": "d",
              "text": "Neon (Ne)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "The element is determined by the number of protons (atomic number). 8 protons = oxygen (O)."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l09-ia1",
          "type": "drag_and_drop",
          "title": "Chemical vs Physical Change",
          "description": "Place each example under the correct category.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "targets": [
              {
                "id": "chemical",
                "label": "Chemical Change"
              },
              {
                "id": "physical",
                "label": "Physical Change"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Burning wood",
                "correctTargetId": "chemical"
              },
              {
                "id": "d2",
                "label": "Melting ice",
                "correctTargetId": "physical"
              },
              {
                "id": "d3",
                "label": "Rusting iron",
                "correctTargetId": "chemical"
              },
              {
                "id": "d4",
                "label": "Dissolving sugar in water",
                "correctTargetId": "physical"
              }
            ]
          }
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
          "id": "chemistry-101-l09-a1",
          "type": "mnemonic",
          "title": "Chemical vs Physical",
          "content": "Chemical = new substance formed (can't easily undo). Physical = same substance, different form (can usually undo)."
        }
      ]
    },
    {
      "id": "chemistry-101-l10",
      "title": "Mastery: Chemistry",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l10-q1",
          "text": "If 50g of reactants enter a sealed container and a reaction occurs, how much product is formed?",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "Less than 50g"
            },
            {
              "id": "b",
              "text": "Exactly 50g"
            },
            {
              "id": "c",
              "text": "More than 50g"
            },
            {
              "id": "d",
              "text": "It depends on the reaction"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Law of Conservation of Mass: mass is neither created nor destroyed. 50g of reactants → 50g of products."
        },
        {
          "id": "chemistry-101-l10-q2",
          "text": "Why are alkali metals (Group 1) so reactive?",
          "skillId": "chemistry-101-skill-periodic-table",
          "options": [
            {
              "id": "a",
              "text": "They have a full outer shell"
            },
            {
              "id": "b",
              "text": "They have one electron in their outer shell that is easily lost"
            },
            {
              "id": "c",
              "text": "They are very heavy"
            },
            {
              "id": "d",
              "text": "They are nonmetals"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Alkali metals have one valence electron that is easily lost, making them very reactive as they readily form bonds with other elements."
        },
        {
          "id": "chemistry-101-l10-q3",
          "text": "You heat a liquid until it boils, then cool the steam. What process does the steam undergo?",
          "skillId": "chemistry-101-skill-states",
          "options": [
            {
              "id": "a",
              "text": "Melting"
            },
            {
              "id": "b",
              "text": "Freezing"
            },
            {
              "id": "c",
              "text": "Condensation"
            },
            {
              "id": "d",
              "text": "Evaporation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Steam (gas) cooling down → liquid. Gas → liquid is condensation."
        },
        {
          "id": "chemistry-101-l10-q4",
          "text": "Which is NOT a mixture?",
          "skillId": "chemistry-101-skill-classification",
          "options": [
            {
              "id": "a",
              "text": "Salad"
            },
            {
              "id": "b",
              "text": "Salt water"
            },
            {
              "id": "c",
              "text": "Pure water (H₂O)"
            },
            {
              "id": "d",
              "text": "Air"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Pure water (H₂O) is a compound — hydrogen and oxygen are chemically bonded. Salad, salt water, and air are all mixtures."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l10-ia1",
          "type": "sorting_buckets",
          "title": "Metal, Nonmetal, or Metalloid?",
          "description": "Classify each element.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "metal",
                "label": "Metal"
              },
              {
                "id": "nonmetal",
                "label": "Nonmetal"
              },
              {
                "id": "metalloid",
                "label": "Metalloid"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Iron (Fe)",
                "correctBucketId": "metal"
              },
              {
                "id": "i2",
                "label": "Oxygen (O)",
                "correctBucketId": "nonmetal"
              },
              {
                "id": "i3",
                "label": "Silicon (Si)",
                "correctBucketId": "metalloid"
              },
              {
                "id": "i4",
                "label": "Gold (Au)",
                "correctBucketId": "metal"
              },
              {
                "id": "i5",
                "label": "Carbon (C)",
                "correctBucketId": "nonmetal"
              },
              {
                "id": "i6",
                "label": "Boron (B)",
                "correctBucketId": "metalloid"
              }
            ]
          }
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
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "chemistry-101-l10-a1",
          "type": "mnemonic",
          "title": "Conservation Law",
          "content": "Atoms in = Atoms out. Nothing appears or vanishes — they just rearrange."
        }
      ]
    },
    {
      "id": "chemistry-101-l11",
      "title": "Applied Chemistry Challenge Studio",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Apply classification and reaction concepts to real-world scenarios",
        "Predict products and identify reaction types"
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l11-ia1",
          "type": "sorting_buckets",
          "title": "Reaction Sign Spotter",
          "description": "Sort each observation into the correct sign of a chemical reaction.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "buckets": [
              {
                "id": "color",
                "label": "Color Change"
              },
              {
                "id": "gas",
                "label": "Gas Production"
              },
              {
                "id": "temp",
                "label": "Temperature Change"
              },
              {
                "id": "precipitate",
                "label": "Precipitate Formed"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "A shiny nail turns reddish-brown over weeks",
                "correctBucketId": "color"
              },
              {
                "id": "i2",
                "label": "Fizzing when antacid tablet is dropped in water",
                "correctBucketId": "gas"
              },
              {
                "id": "i3",
                "label": "The beaker feels warm after mixing two solutions",
                "correctBucketId": "temp"
              },
              {
                "id": "i4",
                "label": "A white solid appears when two clear liquids are mixed",
                "correctBucketId": "precipitate"
              },
              {
                "id": "i5",
                "label": "Bread dough rises as yeast produces bubbles",
                "correctBucketId": "gas"
              },
              {
                "id": "i6",
                "label": "A banana peel turns brown over time",
                "correctBucketId": "color"
              }
            ]
          }
        }
      ],
      "chunks": [
        {
          "id": "chemistry-101-l11-c1",
          "title": "Chemistry in the Kitchen",
          "kind": "concept",
          "content": "Did you know that cooking is actually full of chemistry? When you bake, you are using chemical reactions to create delicious treats! For example, when baking soda is mixed with an acid, it produces carbon dioxide gas. This gas forms bubbles that help the cake rise and become fluffy. Isn’t that cool? Another fun example is when you caramelize sugar. This process is a chemical change that transforms the sugar into a beautiful brown color and gives it a rich, sweet flavor. On the other hand, when you dissolve salt in water, that is a physical change. The salt disappears in the water, but if you let the water evaporate, the salt will reappear! By recognizing these different types of changes, you can see how chemistry is all around us, even in the kitchen! So next time you cook or bake, think about the amazing science happening right before your eyes!"
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l11-a1",
          "type": "practice",
          "title": "Kitchen Chemistry",
          "content": "List three things that happen in your kitchen. For each, decide if it is a physical or chemical change and explain your reasoning using the five signs."
        }
      ]
    },
    {
      "id": "chemistry-101-l12",
      "title": "Chemistry Mastery Applied Retest",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l12-q1",
          "text": "Cooking an egg is a chemical change because:",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "The egg changes shape"
            },
            {
              "id": "b",
              "text": "The proteins form new bonds and the change cannot be reversed"
            },
            {
              "id": "c",
              "text": "The egg gets bigger"
            },
            {
              "id": "d",
              "text": "Heat is applied"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cooking permanently changes the egg's proteins — new chemical bonds form. You cannot un-cook an egg, confirming it is a chemical change."
        },
        {
          "id": "chemistry-101-l12-q2",
          "text": "Element Y is in Period 2, Group 18. What can you predict about it?",
          "skillId": "chemistry-101-skill-periodic-table",
          "options": [
            {
              "id": "a",
              "text": "It is a very reactive metal"
            },
            {
              "id": "b",
              "text": "It is a noble gas — stable and unreactive"
            },
            {
              "id": "c",
              "text": "It is a halogen"
            },
            {
              "id": "d",
              "text": "It is a metalloid"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Group 18 = noble gases (full outer shell, very stable). Period 2, Group 18 = Neon (Ne)."
        },
        {
          "id": "chemistry-101-l12-q3",
          "text": "You mix two clear solutions and a yellow solid appears at the bottom. This yellow solid is called a:",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "Solute"
            },
            {
              "id": "b",
              "text": "Precipitate"
            },
            {
              "id": "c",
              "text": "Catalyst"
            },
            {
              "id": "d",
              "text": "Solvent"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A precipitate is a solid that forms from a reaction between two solutions. Its appearance is one of the five signs of a chemical reaction."
        },
        {
          "id": "chemistry-101-l12-q4",
          "text": "Which correctly shows a balanced chemical equation?",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "H₂ + O₂ → H₂O"
            },
            {
              "id": "b",
              "text": "2H₂ + O₂ → 2H₂O"
            },
            {
              "id": "c",
              "text": "H₂ + O₂ → 2H₂O"
            },
            {
              "id": "d",
              "text": "2H₂ + 2O₂ → 2H₂O"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Balanced: Left has 4 H and 2 O. Right has 4 H and 2 O. Option A has 2 H and 2 O left but 2 H and 1 O right — unbalanced."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l12-ia1",
          "type": "matching_pairs",
          "title": "Vocabulary Precision",
          "description": "Match each chemistry term to its correct definition.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Reactant"
              },
              {
                "id": "l2",
                "label": "Product"
              },
              {
                "id": "l3",
                "label": "Coefficient"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "A starting substance in a chemical reaction"
              },
              {
                "id": "r2",
                "label": "A new substance formed by a chemical reaction"
              },
              {
                "id": "r3",
                "label": "The number before a formula showing how many molecules"
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
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "chemistry-101-l12-a1",
          "type": "mnemonic",
          "title": "Equation Balancing",
          "content": "Count atoms on each side. Adjust coefficients (never subscripts!) until both sides match. Check your work."
        }
      ]
    },
    {
      "id": "chemistry-101-l13",
      "title": "Chemistry Scenario Lab",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Apply chemistry knowledge to a real-world water purification scenario",
        "Connect multiple chemistry concepts to solve a practical problem"
      ],
      "chunks": [
        {
          "id": "chemistry-101-l13-c1",
          "title": "Clean Water Challenge",
          "kind": "intro",
          "content": "Imagine you are faced with the exciting challenge of making muddy river water safe to drink! This task involves chemistry at every step, and it’s a great way to learn how science helps us in real life. First, we will talk about how to separate mixtures, which is when we take different substances and pull them apart. Next, we will discover the difference between dissolved particles, which are mixed in so well you can't see them, and suspended particles, which float around in the water. Finally, we will learn about chemical treatments that can help purify the water and make it safe for us to drink. In this lesson, we will explore the entire water treatment process together, understanding how chemistry plays a crucial role in ensuring that the water is clean and safe for everyone. Let’s dive into this important topic and see how we can make a difference!"
        },
        {
          "id": "chemistry-101-l13-c2",
          "title": "Step 1: Filtration",
          "kind": "example",
          "content": "The first step in making muddy river water safe to drink is called filtration. This important process involves passing the water through layers of sand and gravel. By doing this, we can effectively remove large particles like dirt, leaves, and other debris, which helps the water look much clearer. However, it's crucial to understand that this step does not get rid of dissolved substances, like minerals or chemicals, and it also does not remove harmful bacteria that could make us sick. So, even though the water may appear cleaner after filtration, it is still not safe to drink. Filtration is just the beginning of the water purification process, and there are more steps we need to take to ensure the water is completely safe for us to consume!"
        },
        {
          "id": "chemistry-101-l13-c3",
          "title": "Step 2: Chemical Treatment",
          "kind": "example",
          "content": "Now, let's explore the second step in our water treatment process, which is called chemical treatment. In this important step, we add a small amount of chlorine to the water. Chlorine is a special chemical that helps keep us safe by reacting with harmful bacteria and viruses that can make us sick. When chlorine meets these germs, it destroys them, which is crucial for making the water safe for us to drink. This process is known as a chemical reaction, where new substances are created that help neutralize the pathogens. However, we must be very careful with how much chlorine we use. If we add too much, it can actually be harmful instead of helpful. That's why precise measurement is so important in this step — it ensures that the water is safe and clean for everyone to enjoy!"
        },
        {
          "id": "chemistry-101-l13-c4",
          "title": "Chemistry Connections",
          "kind": "practice",
          "content": "As we think about how we treat water to make it safe for drinking, let's explore the important chemistry concepts we used during this process. First, we learned about mixtures and how to separate them using a method called filtration. This is where we remove unwanted particles from the water. Next, we discovered how chemical reactions work, especially when we added chlorine to the water. Chlorine is a special chemical that helps kill harmful bacteria, making the water safe for us to drink. We also talked about the states of matter, which is important because water is a liquid that helps dissolve other substances. Finally, we looked at the periodic table, where we found out that chlorine belongs to a group called halogens, specifically Group 17. By connecting all these concepts, we can see how chemistry plays a vital role in solving real-life problems like making our water clean and safe! Chemistry is everywhere, and it helps us understand the world around us!"
        }
      ],
      "flashcards": [
        {
          "id": "chemistry-101-l13-f1",
          "front": "Why can't filtration alone make water safe?",
          "back": "Filtration removes large particles but not dissolved chemicals, bacteria, or viruses. Chemical treatment is needed for those."
        },
        {
          "id": "chemistry-101-l13-f2",
          "front": "How does chlorine purify water?",
          "back": "Chlorine reacts with and destroys bacteria and viruses — a chemical reaction that makes the water safe to drink."
        },
        {
          "id": "chemistry-101-l13-f3",
          "front": "Why is measurement important in chemical treatment?",
          "back": "Too little may not kill all pathogens; too much can be toxic. Precise measurement ensures safety and effectiveness."
        },
        {
          "id": "chemistry-101-l13-f4",
          "front": "Is adding chlorine to water a physical or chemical change?",
          "back": "Chemical change — chlorine reacts with organisms in the water, forming new substances and destroying the pathogens."
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l13-a1",
          "type": "image",
          "title": "Water Treatment Steps",
          "content": "Diagram showing four stages: source water → filtration (sand/gravel) → chemical treatment (chlorine) → clean water, with chemistry concepts labeled at each step."
        },
        {
          "id": "chemistry-101-l13-a2",
          "type": "practice",
          "title": "Design Your Own Filter",
          "content": "If you had muddy water, gravel, sand, cotton cloth, and a plastic bottle, how would you build a filter? Draw your design and explain which particles each layer removes."
        }
      ]
    },
    {
      "id": "chemistry-101-l14",
      "title": "Chemistry Coaching Clinic",
      "type": "interactive",
      "duration": 13,
      "objectives": [
        "Identify and correct common chemistry misconceptions",
        "Apply targeted review strategies"
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l14-ia1",
          "type": "matching_pairs",
          "title": "Misconception Buster",
          "description": "Match each misconception to the correct scientific understanding.",
          "estimatedMinutes": 8,
          "difficultyLevel": "medium",
          "data": {
            "left": [
              {
                "id": "l1",
                "label": "Misconception: Dissolving sugar is a chemical reaction"
              },
              {
                "id": "l2",
                "label": "Misconception: Atoms are destroyed when wood burns"
              },
              {
                "id": "l3",
                "label": "Misconception: Gas has no mass because you can't feel it"
              },
              {
                "id": "l4",
                "label": "Misconception: All metals are solid at room temperature"
              }
            ],
            "right": [
              {
                "id": "r1",
                "label": "Dissolving is a physical change — the sugar can be recovered by evaporation"
              },
              {
                "id": "r2",
                "label": "Atoms rearrange into new molecules (CO₂, H₂O) but are never destroyed"
              },
              {
                "id": "r3",
                "label": "Gas has mass — a balloon filled with air weighs more than an empty one"
              },
              {
                "id": "r4",
                "label": "Mercury (Hg) is a metal that is liquid at room temperature"
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
      "chunks": [
        {
          "id": "chemistry-101-l14-c1",
          "title": "Common Chemistry Mistakes",
          "kind": "recap",
          "content": "As we come to the end of our chemistry lessons, it's important to take a moment to reflect on some common mistakes that students often make. Understanding these can help you avoid them in the future! Here are a few frequent errors to be aware of: 1) Sometimes, students confuse physical changes, like when sugar dissolves in water, with chemical changes, like when iron rusts. It's essential to know the difference! 2) Another common misconception is the belief that atoms are destroyed during chemical reactions. In reality, atoms are rearranged, but they are never lost! 3) Don't forget that gases have mass, just like solids and liquids do. This means that even though you can't see it, the air around you has weight! 4) Many students mix up the terms atoms, molecules, elements, and compounds. Remember, atoms are the building blocks, molecules are made of two or more atoms, elements are pure substances, and compounds are combinations of different elements. 5) Lastly, some people think that the rows and columns of the periodic table are the same, but they actually represent different things. Rows are called periods and columns are called groups, and they tell us important information about the elements. To help reinforce your understanding, try asking yourself: 'Can I explain this concept in my own words?' This self-check is a fantastic way to solidify your learning and ensure you really grasp these important ideas!"
        }
      ],
      "learningAids": [
        {
          "id": "chemistry-101-l14-a1",
          "type": "mnemonic",
          "title": "Physical vs Chemical Test",
          "content": "Ask: 'Is a new substance formed?' Yes = chemical. No = physical. Can I undo it easily? If yes, probably physical."
        }
      ]
    },
    {
      "id": "chemistry-101-l15",
      "title": "Chemistry Mastery Sprint",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "chemistry-101-l15-q1",
          "text": "A student heats a white powder and it turns black, releases a gas, and cannot be turned back into the white powder. This is:",
          "skillId": "chemistry-101-skill-reactions",
          "options": [
            {
              "id": "a",
              "text": "A physical change"
            },
            {
              "id": "b",
              "text": "A state change"
            },
            {
              "id": "c",
              "text": "A chemical change"
            },
            {
              "id": "d",
              "text": "Evaporation"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Three signs of chemical change: color change (white→black), gas produced, and irreversible. This is a chemical reaction."
        },
        {
          "id": "chemistry-101-l15-q2",
          "text": "Helium is in Group 18, Period 1. It is used in balloons because it is:",
          "skillId": "chemistry-101-skill-periodic-table",
          "options": [
            {
              "id": "a",
              "text": "Very reactive and explosive"
            },
            {
              "id": "b",
              "text": "Lighter than air and unreactive (safe)"
            },
            {
              "id": "c",
              "text": "A liquid at room temperature"
            },
            {
              "id": "d",
              "text": "Magnetic"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Helium is a noble gas (Group 18) — unreactive and safe. It is lighter than air, so balloons float."
        },
        {
          "id": "chemistry-101-l15-q3",
          "text": "How would you separate a mixture of salt and sand?",
          "skillId": "chemistry-101-skill-mixtures",
          "options": [
            {
              "id": "a",
              "text": "Use a magnet"
            },
            {
              "id": "b",
              "text": "Dissolve in water, filter out sand, evaporate water to get salt"
            },
            {
              "id": "c",
              "text": "Heat until both melt"
            },
            {
              "id": "d",
              "text": "They cannot be separated"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Salt dissolves in water but sand does not. Filter to remove sand, then evaporate the water to recover the salt crystals."
        },
        {
          "id": "chemistry-101-l15-q4",
          "text": "Carbon has an atomic number of 6. A neutral carbon atom has how many electrons?",
          "skillId": "chemistry-101-skill-atoms",
          "options": [
            {
              "id": "a",
              "text": "12"
            },
            {
              "id": "b",
              "text": "3"
            },
            {
              "id": "c",
              "text": "6"
            },
            {
              "id": "d",
              "text": "8"
            }
          ],
          "correctOptionId": "c",
          "explanation": "In a neutral atom, the number of electrons equals the number of protons. Atomic number 6 = 6 protons = 6 electrons."
        }
      ],
      "interactiveActivities": [
        {
          "id": "chemistry-101-l15-ia1",
          "type": "drag_and_drop",
          "title": "Build a Water Molecule",
          "description": "Place atoms into the correct positions to form H₂O.",
          "estimatedMinutes": 4,
          "difficultyLevel": "easy",
          "data": {
            "targets": [
              {
                "id": "center",
                "label": "Central Atom"
              },
              {
                "id": "left",
                "label": "Bonded Atom 1"
              },
              {
                "id": "right",
                "label": "Bonded Atom 2"
              }
            ],
            "draggables": [
              {
                "id": "d1",
                "label": "Oxygen (O)",
                "correctTargetId": "center"
              },
              {
                "id": "d2",
                "label": "Hydrogen (H)",
                "correctTargetId": "left"
              },
              {
                "id": "d3",
                "label": "Hydrogen (H)",
                "correctTargetId": "right"
              }
            ]
          }
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
              2,
              3,
              4
            ]
          }
        ],
        "difficultyDistribution": {
          "easy": 0,
          "medium": 2,
          "hard": 2
        },
        "feedbackMode": "after_submit",
        "adaptive": false,
        "masteryThreshold": 0.75
      },
      "learningAids": [
        {
          "id": "chemistry-101-l15-a1",
          "type": "mnemonic",
          "title": "Atom Number Rule",
          "content": "Atomic number = protons = electrons (in a neutral atom). Mass number ≈ protons + neutrons."
        }
      ]
    }
  ]
};
