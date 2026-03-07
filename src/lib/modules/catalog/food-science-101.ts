import type { LearningModule } from "@/lib/modules/types";

export const food_science_101_Module: LearningModule = {
  "id": "food-science-101",
  "title": "Food Science Foundations",
  "description": "Learn how ingredients behave through heat, water, acids, fats, proteins, and fermentation.",
  "subject": "Food Science",
  "tags": [
    "curriculum",
    "interactive",
    "science",
    "cooking"
  ],
  "minAge": 12,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "thumbnail": "/placeholders/lesson-robot-chef.svg",
  "learningObjectives": [
    "Explain the roles of water, fat, protein, and starch in cooking.",
    "Predict how heat, acid, salt, and mixing change food texture and flavor.",
    "Describe the basic principles of fermentation for flavor and preservation.",
    "Apply food-science reasoning to troubleshoot common recipe failures."
  ],
  "lessons": [
    {
      "id": "food-science-101-l01",
      "title": "The Main Ingredients of Change",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "food-science-101-l01-c1",
          "title": "The Four Key Players",
          "content": "Most cooking transformations can be explained by the behavior of four main components: water, fat, protein, and starch. Understanding them is the first step.",
          "visualPrompts": [
            "Animation showing simple molecular models of water, a triglyceride (fat), an amino acid chain (protein), and a glucose chain (starch)."
          ]
        },
        {
          "id": "food-science-101-l01-c2",
          "title": "How Texture Changes",
          "content": "Heating, cooling, and mixing change the shape and arrangement of molecules. This is what we feel as a change in texture, from a liquid egg to a solid one.",
          "visualPrompts": [
            "Side-by-side video: a raw, translucent egg white next to a cooked, opaque egg white. A simple animation shows a coiled string (protein) slowly uncoiling."
          ]
        },
        {
          "id": "food-science-101-l01-c3",
          "title": "Creating Flavor and Aroma",
          "content": "New, delicious flavors and aromas are often created during cooking through processes like browning, which forms hundreds of new compounds.",
          "visualPrompts": [
            "Close-up, slow-motion shot of a steak searing in a pan, with steam and aroma clouds visualized as colorful, animated molecules being released."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "food-science-101-l01-f1",
          "front": "Emulsion",
          "back": "A stable mixture of two liquids that don't normally mix, like oil and water."
        },
        {
          "id": "food-science-101-l01-f2",
          "front": "Denaturation",
          "back": "The process where proteins lose their natural shape due to heat, acid, or agitation."
        },
        {
          "id": "food-science-101-l01-f3",
          "front": "Gelatinization",
          "back": "The process where starch granules swell and absorb water when heated, causing liquids to thicken."
        }
      ]
    },
    {
      "id": "food-science-101-l02",
      "title": "Heat and Transformation",
      "type": "interactive",
      "duration": 15,
      "interactiveActivities": [
        {
          "id": "food-science-101-l02-ia1",
          "type": "sorting_buckets",
          "title": "Name That Reaction!",
          "description": "Drag each kitchen phenomenon to the primary scientific process responsible for the change.",
          "estimatedMinutes": 10,
          "difficultyLevel": "easy",
          "data": {
            "buckets": [
              {
                "id": "maillard",
                "label": "Maillard Reaction"
              },
              {
                "id": "caramelization",
                "label": "Caramelization"
              },
              {
                "id": "denaturation",
                "label": "Protein Denaturation"
              },
              {
                "id": "gelatinization",
                "label": "Starch Gelatinization"
              }
            ],
            "items": [
              {
                "id": "i1",
                "label": "Bread crust developing its brown color and toasty flavor.",
                "correctTargetId": "maillard"
              },
              {
                "id": "i2",
                "label": "An egg white turning from clear to solid white when fried.",
                "correctTargetId": "denaturation"
              },
              {
                "id": "i3",
                "label": "A gravy or sauce thickening after you add flour or cornstarch.",
                "correctTargetId": "gelatinization"
              },
              {
                "id": "i4",
                "label": "Sugar melting and turning into a brown, nutty liquid for candy.",
                "correctTargetId": "caramelization"
              },
              {
                "id": "i5",
                "label": "Pasta getting soft and plump when boiled in water.",
                "correctTargetId": "gelatinization"
              },
              {
                "id": "i6",
                "label": "A steak getting a deep brown, savory crust when seared.",
                "correctTargetId": "maillard"
              }
            ]
          },
          "visualPrompts": [
            "Each item and bucket should have a clear, simple icon: a loaf of bread, a frying pan, a saucepan with a whisk, a sugar cube, a piece of pasta, and a steak."
          ]
        }
      ]
    },
    {
      "id": "food-science-101-l03",
      "title": "Beyond Heat: Acids, Salts, and Mixing",
      "type": "video_interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "food-science-101-l03-c1",
          "title": "The Power of Acid",
          "content": "Acids, like lemon juice and vinegar, can denature proteins without any heat. This chemical 'cooking' changes texture, making tough meats tender or 'cooking' fish in ceviche.",
          "visualPrompts": [
            "Time-lapse video showing pieces of raw fish in a bowl of lime juice slowly turning opaque and firm."
          ]
        },
        {
          "id": "food-science-101-l03-c2",
          "title": "The Role of Salt",
          "content": "Salt does more than add flavor. It can draw water out of vegetables through osmosis, making them crispier for pickles, and it helps proteins hold onto moisture in brines.",
          "visualPrompts": [
            "An animation showing salt molecules on the outside of a vegetable cell wall pulling water molecules from the inside."
          ]
        },
        {
          "id": "food-science-101-l03-c3",
          "title": "Building with Force",
          "content": "Simple mechanical force, like whisking, can create new structures. It traps air to create foams like whipped cream and forces oil and water together to form stable emulsions like mayonnaise.",
          "visualPrompts": [
            "Split-screen animation: on the left, a whisk incorporates air bubbles into cream; on the right, a whisk breaks up oil droplets and surrounds them with water."
          ]
        }
      ],
      "interactiveActivities": [
        {
          "id": "food-science-101-l03-ia1",
          "type": "matching_pairs",
          "title": "Match the Method to the Science",
          "description": "Connect the cooking technique to the scientific principle that makes it work.",
          "estimatedMinutes": 5,
          "difficultyLevel": "easy",
          "data": {
            "pairs": [
              {
                "id": "p1",
                "item": "Marinating chicken in a yogurt-based sauce.",
                "match": "Acid Denaturation"
              },
              {
                "id": "p2",
                "item": "Sprinkling salt on sliced cucumbers to draw out water.",
                "match": "Osmosis"
              },
              {
                "id": "p3",
                "item": "Making a vinaigrette that doesn't separate.",
                "match": "Emulsification"
              },
              {
                "id": "p4",
                "item": "Whipping egg whites into stiff peaks for a meringue.",
                "match": "Mechanical Aeration (Foam)"
              }
            ]
          }
        }
      ]
    },
    {
      "id": "food-science-101-l04",
      "title": "Checkpoint: Kitchen Chemistry",
      "type": "quiz",
      "duration": 10,
      "questions": [
        {
          "id": "food-science-101-l04-q1",
          "text": "Your homemade vinaigrette dressing separated into layers of oil and vinegar. What is the most likely scientific reason?",
          "skillId": "food-science-101-skill-emulsion",
          "options": [
            {
              "id": "a",
              "text": "The emulsion was unstable and broke."
            },
            {
              "id": "b",
              "text": "The starch in the vinegar gelatinized."
            },
            {
              "id": "c",
              "text": "The salt caused the oil to evaporate."
            },
            {
              "id": "d",
              "text": "The acid denatured the proteins in the oil."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "food-science-101-l04-q2",
          "text": "What is the name of the reaction between amino acids and sugars that gives seared meat its brown crust and complex flavor?",
          "skillId": "food-science-101-skill-maillard",
          "options": [
            {
              "id": "a",
              "text": "Maillard reaction"
            },
            {
              "id": "b",
              "text": "Caramelization"
            },
            {
              "id": "c",
              "text": "Gelatinization"
            },
            {
              "id": "d",
              "text": "Osmosis"
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "food-science-101-l04-q3",
          "text": "Why can marinating a tough cut of meat in a lemon-based marinade make it more tender?",
          "skillId": "food-science-101-skill-acid",
          "options": [
            {
              "id": "a",
              "text": "The acid denatures and loosens the tightly-wound protein structures."
            },
            {
              "id": "b",
              "text": "The acid caramelizes the sugars on the meat's surface."
            },
            {
              "id": "c",
              "text": "The acid removes all the water from the meat."
            },
            {
              "id": "d",
              "text": "The acid creates a stable emulsion inside the muscle fibers."
            }
          ],
          "correctOptionId": "a"
        },
        {
          "id": "food-science-101-l04-q4",
          "text": "Why does salting shredded cabbage help when making coleslaw or sauerkraut?",
          "skillId": "food-science-101-skill-osmosis",
          "options": [
            {
              "id": "a",
              "text": "Salt draws water out of the cabbage cells, making it more tender and flavorful."
            },
            {
              "id": "b",
              "text": "Salt cooks the cabbage through a chemical reaction."
            },
            {
              "id": "c",
              "text": "Salt prevents the Maillard reaction from happening."
            },
            {
              "id": "d",
              "text": "Salt turns the cabbage starches into a gel."
            }
          ],
          "correctOptionId": "a"
        }
      ]
    },
    {
      "id": "food-science-101-l05",
      "title": "Fermentation and Preservation",
      "type": "video",
      "duration": 11,
      "chunks": [
        {
          "id": "food-science-101-l05-c1",
          "title": "Microbes at Work",
          "content": "Fermentation uses beneficial microbes like yeast and bacteria to transform sugars in food into acids, gases, or alcohol. This creates new flavors and helps preserve the food.",
          "visualPrompts": [
            "Simple animation of yeast microbes 'eating' a sugar molecule and releasing CO2 bubbles and an alcohol molecule."
          ]
        },
        {
          "id": "food-science-101-l05-c2",
          "title": "Controlling the Environment",
          "content": "To get the right result, you must control the variables. Temperature, salt concentration, and oxygen exposure determine which microbes thrive and what flavors develop.",
          "visualPrompts": [
            "A dashboard graphic showing dials for Temperature, Salt, and Time, with optimal zones highlighted for making yogurt or sourdough."
          ]
        },
        {
          "id": "food-science-101-l05-c3",
          "title": "Safety Through Science",
          "content": "Proper fermentation is safe. The acid produced by the good microbes creates an environment where harmful bacteria can't grow. Good sanitation is key to starting correctly.",
          "visualPrompts": [
            "A visual checklist for sanitation: icon of clean jars, washed hands, and fresh ingredients."
          ]
        }
      ]
    },
    {
      "id": "food-science-101-l06",
      "title": "Capstone: Fix the Failed Dish",
      "type": "interactive",
      "duration": 14,
      "interactiveActivities": [
        {
          "id": "food-science-101-l06-ia1",
          "type": "project_builder",
          "title": "Kitchen Detective",
          "description": "Choose one of the failed dishes below. Using your food science knowledge, diagnose the problem and propose a specific, science-based solution.",
          "estimatedMinutes": 12,
          "difficultyLevel": "medium",
          "instructions": [
            "Choose a scenario: A broken, greasy sauce; tough, dry chicken breast; bread dough that didn't rise; or bland, pale vegetables.",
            "In the 'Diagnosis' field, identify the likely scientific principle that failed (e.g., 'unstable emulsion').",
            "In the 'Solution' field, propose a specific fix for next time and explain why it would work based on what you've learned."
          ],
          "visualPrompts": [
            "A 'detective's board' with photos of the four failed dishes connected by strings to a list of possible scientific culprits (e.g., 'Denaturation', 'Emulsion', 'Yeast Activity', 'Maillard Reaction')."
          ]
        }
      ],
      "learningAids": [
        {
          "id": "food-science-101-l06-a1",
          "type": "checklist",
          "title": "Troubleshooting Toolkit (T.A.M.E.S.)",
          "content": "When a dish fails, check these factors: **T**emperature (too high/low?), **A**cidity (pH balance off?), **M**ixing (over/under-mixed?), **E**mulsifiers (is the fat/water stable?), **S**alt/Sugar (concentration correct?)."
        }
      ]
    }
  ]
};
