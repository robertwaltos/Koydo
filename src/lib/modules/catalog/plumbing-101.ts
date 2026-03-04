import type { LearningModule } from "@/lib/modules/types";

export const Plumbing101Module: LearningModule = {
  "id": "plumbing-101",
  "title": "Plumbing Fundamentals",
  "description": "Master the principles of residential and commercial plumbing systems — from water supply piping and drain-waste-vent design to pipe joining techniques, fixture installation, code compliance, and diagnosing common service problems.",
  "subject": "Trades",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "trades",
    "plumbing"
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
    "Describe how municipal water supply reaches a building and identify common supply pipe materials including copper, PEX, and CPVC",
    "Explain gravity drainage principles, trap seal function, and proper DWV venting to prevent siphonage and sewer gas entry",
    "Compare pipe joining methods — soldering copper, crimping/expanding PEX, solvent welding PVC/CPVC, and threading steel pipe",
    "Identify major plumbing fixtures and valve types, and calculate fixture unit loads for basic system sizing",
    "Interpret International Plumbing Code (IPC) backflow prevention requirements and cross-connection hazards",
    "Diagnose common plumbing problems including leaks, clogs, low pressure, water hammer, and sewer gas odors",
    "Demonstrate mastery of foundational plumbing concepts through integrated checkpoint assessments"
  ],
  "lessons": [
    {
      "id": "plumbing-101-l01",
      "title": "Water Supply Systems",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Describe how potable water travels from a municipal source to a building",
        "Compare copper, PEX, and CPVC as supply pipe materials",
        "Explain water pressure, pipe sizing, and the role of the main shutoff valve"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l01-c1",
          "title": "Municipal Supply and Building Entry",
          "content": "The journey of clean, drinkable water begins at a special facility known as a treatment plant. This is where water undergoes a thorough process to ensure it is safe for us to use. First, the water is carefully filtered to remove any impurities and then disinfected to kill harmful bacteria and viruses. Once this process is complete, the clean water is pumped into large pipes called distribution mains, which are buried underground beneath our streets. These mains are essential for transporting water to our homes and businesses.\nFrom these distribution mains, smaller pipes known as service lines branch off. These service lines are typically about ¾-inch or 1-inch in diameter and play a crucial role in delivering water directly to buildings. Each service line connects to a curb stop valve, which allows the water supply to be turned off if necessary, and a water meter, which measures how much water is being used.\nOnce the water enters a building, there is a main shutoff valve located inside. This valve is very important because it allows us to completely stop the water supply when repairs are needed, ensuring that we can fix any plumbing issues safely.\nThe pressure of the water provided by the municipality typically ranges from 40 to 80 psi (pounds per square inch). This pressure is important because it ensures that water flows properly through our pipes and fixtures. If the pressure exceeds 80 psi, a special device called a pressure-reducing valve (PRV) is installed. The PRV helps protect our plumbing fixtures and pipes from potential damage caused by excessive pressure.\nIn areas where municipal water supply is not available, buildings may rely on private wells. These wells are equipped with pressure tanks that help maintain the water pressure by cycling between two pressure levels, ensuring that residents still have access to clean water even without a municipal supply.\nContext recap: The journey of clean, drinkable water begins at a special facility known as a treatment plant. This is where water undergoes a thorough process to ensure it is safe for us to use. First, the water is carefully filtered to remove any impurities and then disinfected to kill harmful bacteria and viruses. Once this process is complete, the clean water is pumped into large pipes called distribution mains, which are buried underground beneath our streets.\nWhy this matters: Municipal Supply and Building Entry helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "plumbing-101-l01-c2",
          "title": "Supply Pipe Materials",
          "content": "In the world of plumbing, understanding the materials used for water supply lines is essential for anyone looking to work in this field. There are three primary types of materials that are widely used today: copper, cross-linked polyethylene (PEX), and chlorinated polyvinyl chloride (CPVC). Let's explore each one in detail.\nFirst, we have copper pipes, specifically the types known as Type L and Type M. Copper has been the industry standard for many years due to its impressive qualities. It is highly resistant to corrosion, which means it won't easily rust or degrade over time. Additionally, copper can handle high temperatures, making it suitable for both hot and cold water applications. One of the most significant advantages of copper pipes is their longevity; they can last for over 50 years with proper installation and maintenance. However, working with copper does require some skill, as it involves techniques like soldering or using press-fit connections to join the pipes together.\nNext up is PEX, or cross-linked polyethylene. This material is a flexible plastic tubing that comes in various sizes, ranging from ⅜ inch to 1 inch. PEX is particularly popular among plumbers because it offers several benefits. For instance, it resists scale buildup, which can clog pipes over time, and it is also less likely to freeze in cold temperatures. Installing PEX is quick and easy, as it can be connected using crimp or expansion fittings, which saves time on the job. Additionally, PEX is often much more affordable than copper, making it a cost-effective choice for many plumbing projects.\nLastly, we have CPVC, which stands for chlorinated polyvinyl chloride. This is a rigid plastic material that is designed to handle both hot and cold water, with a temperature rating of up to 200 °F. CPVC pipes are joined using a solvent-cement method, which creates strong, leak-proof connections. This type of piping is especially common in warmer climates where the risk of freezing is lower. However, it's important to note that CPVC has specific limitations; for example, it can become brittle if it comes into contact with certain chemicals.\nEach of these materials comes with its own set of building codes and regulations that must be followed to ensure safety and compliance. For instance, PEX should never be exposed to direct sunlight, as UV rays can damage the material. Understanding these materials and their properties is crucial for anyone interested in plumbing, as it lays the foundation for effective and safe water supply systems.\nContext recap: In the world of plumbing, understanding the materials used for water supply lines is essential for anyone looking to work in this field. There are three primary types of materials that are widely used today: copper, cross-linked polyethylene (PEX), and chlorinated polyvinyl chloride (CPVC). Let's explore each one in detail. First, we have copper pipes, specifically the types known as Type L and Type M.\nWhy this matters: Supply Pipe Materials helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l01-c3",
          "title": "Pressure, Pipe Sizing, and Layout",
          "content": "To make sure that every faucet, shower, and other water fixture in a building has enough water pressure, it is very important to choose the right sizes for the pipes that carry the water. When the pipes are too narrow or if they are too long, the water can lose pressure as it travels through them because of something called friction losses. This means that the water has to push harder to get through, which can lead to a drop in pressure. To avoid this issue, plumbers often use special tables that show how much pressure is lost over different pipe sizes and lengths, or they might use computer software designed for this purpose. They aim to ensure that even the furthest fixture from the water source gets at least 8 psi (pounds per square inch) of pressure, which is enough for proper operation.\nThere are two main ways to arrange plumbing systems in buildings: the trunk-and-branch layout and the home-run (or manifold) layout. In a trunk-and-branch layout, a large main pipe runs through the building, and smaller pipes branch off from it to connect to groups of fixtures like sinks and toilets. This method can be efficient but may sometimes lead to pressure issues if not designed properly.\nOn the other hand, the home-run layout is a bit different. In this setup, a dedicated line of PEX (a type of flexible plastic pipe) runs from a central manifold directly to each individual fixture. This design helps to minimize pressure loss and allows each fixture to have its own shutoff valve, making it easier to control water flow and repairs.\nTo figure out the correct pipe size for each fixture, plumbers use a method called the fixture-unit method. Each fixture, like a sink or shower, is given a specific value known as a Water Supply Fixture Unit (WSFU). By adding up the WSFU values for all the fixtures, plumbers can calculate the total water demand in gallons per minute (GPM). This total helps them choose the right pipe diameter to ensure that all fixtures receive adequate water pressure and flow, making sure everything works smoothly and efficiently.\nContext recap: To make sure that every faucet, shower, and other water fixture in a building has enough water pressure, it is very important to choose the right sizes for the pipes that carry the water. When the pipes are too narrow or if they are too long, the water can lose pressure as it travels through them because of something called friction losses. This means that the water has to push harder to get through, which can lead to a drop in pressure. To avoid this issue, plumbers often use special tables that show how much pressure is lost over different pipe sizes and lengths, or they might use computer software designed for this purpose.\nWhy this matters: Pressure, Pipe Sizing, and Layout helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l01-f1",
          "front": "What is the typical residential water pressure range, and when is a PRV required?",
          "back": "Normal municipal pressure is 40–80 psi. A pressure-reducing valve (PRV) is required when incoming pressure exceeds 80 psi."
        },
        {
          "id": "plumbing-101-l01-f2",
          "front": "Name three common potable water supply pipe materials.",
          "back": "Copper (Type L/M), PEX (cross-linked polyethylene), and CPVC (chlorinated polyvinyl chloride)."
        },
        {
          "id": "plumbing-101-l01-f3",
          "front": "What is the difference between a trunk-and-branch layout and a manifold (home-run) layout?",
          "back": "Trunk-and-branch uses a large main line with smaller branches teeing off. A manifold layout sends a dedicated PEX line from a central manifold to each fixture, minimizing pressure drop."
        },
        {
          "id": "plumbing-101-l01-f4",
          "front": "What is a Water Supply Fixture Unit (WSFU)?",
          "back": "A standardized value assigned to each plumbing fixture representing its probable demand on the water supply system, used to size supply piping."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "plumbing-101-l02",
      "title": "Drain-Waste-Vent (DWV) Systems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Explain how gravity moves wastewater through drain and waste pipes",
        "Describe the purpose of trap seals and how venting preserves them",
        "Identify proper slope requirements for horizontal drain pipes"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l02-c1",
          "title": "Gravity Drainage Principles",
          "content": "The drain-waste-vent (DWV) system is an essential part of plumbing that operates using the natural force of gravity, unlike the water supply system that depends on pressure. When wastewater, such as water from sinks or toilets, leaves a fixture, it first flows through a component called a tailpiece. This tailpiece directs the wastewater into a trap, which is a special part of the plumbing designed to hold a small amount of water. This water in the trap serves an important purpose: it creates a barrier that prevents unpleasant odors from entering your home.\nAfter passing through the trap, the wastewater continues its journey through branch drains. These branch drains lead into a vertical pipe known as a waste stack or soil stack. This stack is crucial because it carries the wastewater down to the building drain, which is located below the floor slab of the building. Once the wastewater reaches the building drain, it exits the foundation of the building as the building sewer. This sewer connects either to the municipal sewer main, which is part of the city's waste management system, or to a private septic system that treats the wastewater on-site.\nTo ensure that wastewater flows smoothly through the pipes, it is important to maintain the correct slope in horizontal drain pipes. A proper slope helps prevent clogs and ensures that the system works efficiently. For pipes that are 3 inches in diameter or smaller, a slope of ¼ inch per foot is typically required. For larger pipes, specifically those that are 4 inches or more in diameter, a slope of ⅛ inch per foot is necessary. If the slope is not steep enough, solids can settle in the pipes, leading to blockages. Conversely, if the slope is too steep, the liquids can flow faster than the solids, which can also cause clogs. Therefore, understanding and implementing the correct slope is vital for a well-functioning DWV system.\nContext recap: The drain-waste-vent (DWV) system is an essential part of plumbing that operates using the natural force of gravity, unlike the water supply system that depends on pressure. When wastewater, such as water from sinks or toilets, leaves a fixture, it first flows through a component called a tailpiece. This tailpiece directs the wastewater into a trap, which is a special part of the plumbing designed to hold a small amount of water. This water in the trap serves an important purpose: it creates a barrier that prevents unpleasant odors from entering your home.\nWhy this matters: Gravity Drainage Principles helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l02-c2",
          "title": "Trap Seals and Sewer Gas Prevention",
          "content": "In plumbing, every fixture, like sinks and toilets, connects to a system called the Drain-Waste-Vent (DWV) system through a crucial part known as a trap. Traps are specially designed fittings that are shaped like a U or a P, and they hold a small amount of water, usually between 2 to 4 inches deep. This water serves an important purpose: it acts as a barrier that prevents harmful sewer gases from entering our homes. These gases can include dangerous substances like methane and hydrogen sulfide, which can be harmful to our health. The most common type of trap you will encounter is the P-trap, which is typically located under sinks and lavatories. Toilets, also known as water closets, have a trap that is built right into the porcelain structure.\nHowever, it's important to know that traps can sometimes lose their water seal, which can lead to unpleasant odors and potential health risks. There are a few reasons why this can happen. For example, if a fixture is not used often, the water in the trap can evaporate. This is why it's important to regularly use all the fixtures in your home. Another reason is siphonage, which can occur if the venting system is not working properly. Lastly, back-pressure can happen if there is a blockage in the pipes downstream, which can also affect the trap's ability to hold water.\nTo ensure that floor drains in areas like basements and mechanical rooms continue to work effectively, it is necessary to periodically fill them with water. This helps maintain the water seal and keeps harmful gases from escaping into the living space. Regular maintenance of these traps is essential for a safe and healthy home environment.\nContext recap: In plumbing, every fixture, like sinks and toilets, connects to a system called the Drain-Waste-Vent (DWV) system through a crucial part known as a trap. Traps are specially designed fittings that are shaped like a U or a P, and they hold a small amount of water, usually between 2 to 4 inches deep. This water serves an important purpose: it acts as a barrier that prevents harmful sewer gases from entering our homes. These gases can include dangerous substances like methane and hydrogen sulfide, which can be harmful to our health.\nWhy this matters: Trap Seals and Sewer Gas Prevention helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l02-c3",
          "title": "Venting Principles",
          "content": "Vent pipes are an essential part of plumbing systems, and they serve two important purposes. First, they allow air to flow into the drainage system. This is crucial because it helps to maintain the water seals in traps, which are designed to prevent sewer gases from entering our homes. Without proper venting, the water in these traps can be siphoned away, leading to unpleasant odors and potential health hazards. Second, vent pipes provide a safe way for sewer gases to escape into the atmosphere, well above the roofline of the building. This ensures that any harmful gases do not accumulate inside the home, keeping the environment safe for everyone.\nEvery trap in a plumbing system must be vented within a specific distance, which is referred to as the developed length. For instance, if you have a 1½-inch trap arm, it typically should not be more than 6 feet away from its vent. This distance is important to ensure that the venting system works effectively.\nThere are several types of venting systems used in plumbing. Individual vents are designed to serve a single trap, while common vents can serve two fixtures that are positioned back-to-back on opposite sides of a wall. Wet vents are a bit different; they can carry waste from an upstream fixture while also allowing for venting. Additionally, air admittance valves (AAVs) are one-way mechanical vents that can be used in certain situations where traditional venting might not be feasible. These valves are allowed by many plumbing codes but should be used with care.\nFinally, the main vent stack is a critical component of the venting system. It extends through the roof and must rise at least 6 inches above the roofline. This height is necessary to ensure that the vent functions properly and that sewer gases are safely released into the atmosphere, away from any windows or air intakes. Understanding these venting principles is vital for anyone interested in plumbing, as they help ensure the safety and efficiency of the entire drainage system.\nContext recap: Vent pipes are an essential part of plumbing systems, and they serve two important purposes. First, they allow air to flow into the drainage system. This is crucial because it helps to maintain the water seals in traps, which are designed to prevent sewer gases from entering our homes. Without proper venting, the water in these traps can be siphoned away, leading to unpleasant odors and potential health hazards.\nWhy this matters: Venting Principles helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l02-f1",
          "front": "What is the required slope for a 3-inch or smaller horizontal drain pipe?",
          "back": "¼ inch per foot of run. Pipes 4 inches and larger require ⅛ inch per foot."
        },
        {
          "id": "plumbing-101-l02-f2",
          "front": "What is the purpose of a P-trap?",
          "back": "It holds a water seal (2–4 inches deep) that blocks sewer gases from entering the building through the fixture drain."
        },
        {
          "id": "plumbing-101-l02-f3",
          "front": "Why do drain pipes need venting?",
          "back": "Vents admit atmospheric air to prevent siphonage of trap seals and allow sewer gases to escape above the roofline."
        },
        {
          "id": "plumbing-101-l02-f4",
          "front": "What is an Air Admittance Valve (AAV)?",
          "back": "A one-way mechanical valve that opens to admit air when negative pressure occurs in the drain, serving as a vent without penetrating the roof. Permitted by many codes for limited applications."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l02-a1",
          "type": "sorting_buckets",
          "title": "Supply System vs. DWV System Components",
          "description": "Sort each plumbing component into the correct system category.",
          "estimatedMinutes": 5,
          "difficultyLevel": "medium",
          "buckets": [
            "Water Supply System",
            "Drain-Waste-Vent System"
          ],
          "items": [
            {
              "text": "Pressure-reducing valve (PRV)",
              "bucket": "Water Supply System"
            },
            {
              "text": "P-trap under a lavatory",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "PEX manifold with hot/cold ports",
              "bucket": "Water Supply System"
            },
            {
              "text": "Roof vent terminal extending above shingles",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "Main shutoff valve at meter",
              "bucket": "Water Supply System"
            },
            {
              "text": "Building sewer line to municipal main",
              "bucket": "Drain-Waste-Vent System"
            },
            {
              "text": "Copper Type L tubing for hot water",
              "bucket": "Water Supply System"
            },
            {
              "text": "Soil stack carrying toilet waste vertically",
              "bucket": "Drain-Waste-Vent System"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "plumbing-101-l03",
      "title": "Supply & DWV Checkpoint",
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
          "id": "plumbing-101-l03-q1",
          "text": "At what incoming pressure is a pressure-reducing valve (PRV) required on a residential water supply?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Above 40 psi"
            },
            {
              "id": "b",
              "text": "Above 60 psi"
            },
            {
              "id": "c",
              "text": "Above 80 psi"
            },
            {
              "id": "d",
              "text": "Above 100 psi"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Most plumbing codes require a PRV when static water pressure at the building entrance exceeds 80 psi to protect fixtures and piping from excessive pressure."
        },
        {
          "id": "plumbing-101-l03-q2",
          "text": "Which pipe material is flexible, resistant to freezing damage, and cannot be exposed to ultraviolet light?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Copper Type L"
            },
            {
              "id": "b",
              "text": "CPVC"
            },
            {
              "id": "c",
              "text": "Cast iron"
            },
            {
              "id": "d",
              "text": "PEX"
            }
          ],
          "correctOptionId": "d",
          "explanation": "PEX (cross-linked polyethylene) is flexible and expands to resist freeze cracking, but it degrades under UV exposure and must be protected from direct sunlight."
        },
        {
          "id": "plumbing-101-l03-q3",
          "text": "What is the standard slope for a horizontal drain pipe that is 2 inches in diameter?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "⅛ inch per foot"
            },
            {
              "id": "b",
              "text": "¼ inch per foot"
            },
            {
              "id": "c",
              "text": "½ inch per foot"
            },
            {
              "id": "d",
              "text": "1 inch per foot"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Horizontal drain pipes 3 inches or smaller require a minimum slope of ¼ inch per foot. Pipes 4 inches and larger require ⅛ inch per foot."
        },
        {
          "id": "plumbing-101-l03-q4",
          "text": "A bathroom sink's P-trap has lost its water seal. Which condition is the MOST likely cause?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The supply pressure is too high"
            },
            {
              "id": "b",
              "text": "The vent is blocked, causing siphonage"
            },
            {
              "id": "c",
              "text": "The water heater thermostat is set too low"
            },
            {
              "id": "d",
              "text": "The main shutoff valve is partially closed"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A blocked or missing vent creates negative pressure in the drain line that can siphon the water out of the P-trap, breaking the seal and allowing sewer gas to enter."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "plumbing-101-l04",
      "title": "Pipe Joining Methods",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Demonstrate the steps for soldering (sweating) a copper joint",
        "Compare PEX crimp, clamp, and expansion fitting systems",
        "Describe solvent-cement welding for PVC and CPVC pipe"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l04-c1",
          "title": "Soldering Copper Pipe",
          "content": "Soldering, often referred to as sweating, is a crucial technique used in plumbing to create strong and leak-proof connections between copper pipes and fittings. This method is essential for ensuring that water flows smoothly through the plumbing system without any leaks. The soldering process consists of several important steps that must be followed carefully to achieve a successful joint.\nFirst, you need to cut the copper tube squarely. This is done using a tool called a tube cutter, which ensures that the ends of the pipe are even and ready for joining. After cutting, the next step is to smooth out the inside edge of the tube. This is done with a tool called a reamer, which removes any sharp edges or burrs that could interfere with the connection. A clean and smooth edge is vital for a good seal.\nOnce the tube is prepared, it’s time to clean both the outside of the tube and the inside of the fitting. This is done using emery cloth or a fitting brush. The goal is to make both surfaces bright and shiny, which helps the solder to adhere better. Cleaning is a very important step because any dirt or oxidation can prevent a strong bond from forming.\nAfter cleaning, you will apply a thin layer of lead-free flux to both surfaces that will be joined. Flux is a special paste that helps the solder flow and bond to the metal. It’s important to use lead-free flux for safety reasons, as lead can be harmful.\nNext, you will need to heat the joint evenly using a propane or MAPP-gas torch. It’s important to heat the joint evenly to ensure that the solder melts properly. While heating, you should touch the solder wire to the opposite side of the fitting. This allows the solder to melt and be drawn into the joint by a process called capillary action. For soldering copper, the ideal temperature is around 450 °F.\nFinally, once the solder has flowed into the joint, you must allow it to cool naturally. It’s crucial not to cool the joint too quickly by using water, as this can cause stress cracks in the solder joint. Allowing it to cool at room temperature ensures a strong and durable bond. By following these steps carefully, you can create reliable and long-lasting connections in your plumbing projects.\nContext recap: Soldering, often referred to as sweating, is a crucial technique used in plumbing to create strong and leak-proof connections between copper pipes and fittings. This method is essential for ensuring that water flows smoothly through the plumbing system without any leaks. The soldering process consists of several important steps that must be followed carefully to achieve a successful joint. First, you need to cut the copper tube squarely.\nWhy this matters: Soldering Copper Pipe helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l04-c2",
          "title": "PEX Connection Systems",
          "content": "PEX tubing, which stands for cross-linked polyethylene, is becoming a very popular choice for plumbing connections in homes and buildings. One of the main reasons for its popularity is that it uses mechanical methods for joining pipes instead of traditional methods like soldering or using glue. This makes it easier and safer to work with, especially for those who are new to plumbing.\nOne of the most common methods for connecting PEX tubing is called the crimp method. In this process, a copper crimp ring is slid over the end of the PEX tubing. Then, a brass fitting is pushed inside the tube. After that, a special tool called a crimp tool is used to compress the ring tightly around both the tubing and the fitting. To make sure that the crimp is done correctly, plumbers use a tool called a go/no-go gauge. This gauge checks the diameter of the crimp to ensure it meets the required standards.\nAnother method used for connecting PEX is known as the expansion method. This method involves using a special fitting designed for cold expansion. In this process, the end of the PEX tubing is expanded using a battery-powered tool. Once the tubing is expanded, the fitting is inserted, and the PEX quickly shrinks back around the fitting. This creates a very secure connection that is often preferred because it allows for a full-bore connection, which means there is minimal restriction to the flow of water. This is particularly important in plumbing systems where good water flow is essential.\nThe clamp method is another option for connecting PEX tubing. This method uses stainless-steel clamp rings and a cinch tool to secure the connection. It is considered the most economical option and is compatible with all brands of PEX tubing, making it a versatile choice for many plumbers.\nLastly, there are push-fit fittings, like those made by SharkBite. These fittings are unique because they require no tools for installation. However, they are generally used for repairs rather than for new installations. This makes them a convenient option for quick fixes in plumbing systems.\nIn summary, PEX tubing offers several methods for making connections, each with its own advantages. Understanding these methods is essential for anyone interested in plumbing, whether you are a beginner or looking to expand your skills in the field. By learning about these techniques, you can ensure that your plumbing projects are successful and efficient.\nContext recap: PEX tubing, which stands for cross-linked polyethylene, is becoming a very popular choice for plumbing connections in homes and buildings. One of the main reasons for its popularity is that it uses mechanical methods for joining pipes instead of traditional methods like soldering or using glue. This makes it easier and safer to work with, especially for those who are new to plumbing. One of the most common methods for connecting PEX tubing is called the crimp method.\nWhy this matters: PEX Connection Systems helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l04-c3",
          "title": "Solvent Welding PVC/CPVC and Threading Steel Pipe",
          "content": "Joining PVC and CPVC pipes is an important skill in plumbing, and it involves a process known as solvent cementing, which is quite similar to chemical welding. To begin, the end of the pipe must be cut squarely and any rough edges must be smoothed out, a step known as deburring. After this, a dry fit is performed to ensure that the pipe fits correctly into the fitting and to check how deep the pipe will go. This is a crucial step to ensure a proper seal. Next, a purple primer is applied to both surfaces of the pipe and the fitting. This primer serves to soften the surfaces, preparing them for the cement that will follow. It is important to use the correct type of cement: PVC cement for PVC pipes and CPVC cement for CPVC pipes, as these two types of cement are not interchangeable. After applying the primer, a coat of the appropriate cement is applied immediately. The pipe is then pushed fully into the fitting with a quarter-turn twist, which helps to create a strong bond. It is essential to hold the pipe in place for about 30 seconds to allow the cement to start setting. The time required for the joint to fully cure can vary significantly. For smaller pipes in warm conditions, it may take as little as 15 minutes, while larger pipes in colder conditions may require up to 48 hours before they can be safely pressurized. In addition to PVC and CPVC pipes, plumbers also work with galvanized steel and black iron pipes, which use a different method called threaded joints. This involves cutting threads on the pipe using a die, and then applying a sealant tape or pipe dope to the male threads to ensure a watertight seal. Finally, the fitting is tightened using pipe wrenches. Steel pipes are still widely used in plumbing, especially for gas lines and certain drainage applications, due to their durability and strength.\nContext recap: Joining PVC and CPVC pipes is an important skill in plumbing, and it involves a process known as solvent cementing, which is quite similar to chemical welding. To begin, the end of the pipe must be cut squarely and any rough edges must be smoothed out, a step known as deburring. After this, a dry fit is performed to ensure that the pipe fits correctly into the fitting and to check how deep the pipe will go. This is a crucial step to ensure a proper seal.\nWhy this matters: Solvent Welding PVC/CPVC and Threading Steel Pipe helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l04-f1",
          "front": "What are the five steps for soldering a copper joint?",
          "back": "Cut square, deburr, clean with emery cloth, apply lead-free flux, heat and apply solder — capillary action draws it into the joint."
        },
        {
          "id": "plumbing-101-l04-f2",
          "front": "How does the PEX expansion method work?",
          "back": "The PEX end is expanded with a tool, a fitting is inserted, and the tubing's memory shrinks it tightly around the fitting, creating a full-bore connection."
        },
        {
          "id": "plumbing-101-l04-f3",
          "front": "Why must PVC and CPVC cements not be interchanged?",
          "back": "Each cement is chemically formulated to soften and fuse its specific plastic type. Using PVC cement on CPVC (or vice versa) will produce a weak joint that may fail under pressure."
        },
        {
          "id": "plumbing-101-l04-f4",
          "front": "What is applied to male pipe threads before assembling a threaded steel joint?",
          "back": "PTFE tape (Teflon tape) or pipe-thread sealant compound (pipe dope) to lubricate threads and seal against leaks."
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "plumbing-101-l05",
      "title": "Fixtures and Valves",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Identify common plumbing valve types and their applications",
        "Explain fixture unit values and how they affect system sizing",
        "Describe major fixture categories and water heater fundamentals"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l05-c1",
          "title": "Valve Types and Applications",
          "content": "Valves play a crucial role in plumbing systems by controlling how water flows, its direction, and the pressure within the pipes. Understanding the different types of valves and their applications is essential for anyone interested in plumbing.\nOne common type of valve is the gate valve. This valve operates using a wedge-shaped gate that can either fully open or fully close the water flow. It's important to note that gate valves are not designed for regulating flow; they are best used when you need to completely stop or allow water to flow through the system.\nAnother widely used valve is the ball valve. This valve features a handle that you can turn a quarter of a turn to open or close it. Inside the valve, there is a ball with a hole in it. When the handle is turned, the ball rotates, allowing water to flow through or stopping it completely. Ball valves are favored in modern plumbing because they provide quick shutoff capabilities and maintain excellent flow characteristics, making them very efficient.\nGlobe valves are another type that you might encounter. These valves have a unique design that forces water to flow through an S-shaped path. This design is particularly useful for regulating the flow of water, which means you can adjust how much water is allowed to pass through. However, it's important to keep in mind that globe valves can cause a higher pressure drop, which means they might not be the best choice for every situation.\nCheck valves are essential for preventing backflow, which can cause contamination in the water supply. These valves come in two main types: swing and spring. They only allow water to flow in one direction, ensuring that once water has passed through, it cannot flow back the other way. This is particularly important in systems where backflow could lead to serious issues.\nA pressure-reducing valve (PRV) is another important component. This valve automatically lowers the incoming water pressure to a predetermined level, which helps protect your plumbing fixtures from damage caused by high pressure.\nLastly, tempering or mixing valves are designed to blend hot and cold water together. This ensures that the water delivered to your taps is at a safe temperature, typically around 120 °F. Many local regulations require these valves to be installed on water heater outlets to prevent scalding accidents. Understanding these different types of valves and their functions is key to mastering plumbing fundamentals and ensuring safe and efficient water management in any plumbing system.\nContext recap: Valves play a crucial role in plumbing systems by controlling how water flows, its direction, and the pressure within the pipes. Understanding the different types of valves and their applications is essential for anyone interested in plumbing. One common type of valve is the gate valve. This valve operates using a wedge-shaped gate that can either fully open or fully close the water flow.\nWhy this matters: Valve Types and Applications helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l05-c2",
          "title": "Fixture Types and Fixture Units",
          "content": "Plumbing fixtures are essential devices found in our homes that either deliver or receive water. Understanding these fixtures is crucial for anyone interested in plumbing. The main types of fixtures include water closets, commonly known as toilets, which are designed to use either 1.6 gallons per flush (GPF) or a more efficient 1.28 GPF if they are WaterSense certified. Other important fixtures include lavatories, which are the sinks found in bathrooms, kitchen sinks, bathtubs, showers, bidets, urinals, and hose bibbs, which are outdoor faucets. Each of these fixtures has a specific value called a Drainage Fixture Unit (DFU). This value helps us understand how much load each fixture places on the drainage and venting (DWV) system of a building. For instance, a lavatory typically has a DFU value of 1, meaning it has a relatively low impact on the system. In contrast, a kitchen sink is assigned a DFU value of 2, while a water closet can have a DFU value ranging from 3 to 4, depending on its design and efficiency. Knowing the total DFU count is very important because it helps plumbers and builders determine the minimum size required for branch drains, waste stacks, building drains, and the overall building sewer system. On the supply side, we also have Water Supply Fixture Units (WSFUs). These units are used to figure out the right pipe sizes needed for the water supply system, and this is often done using tables provided in plumbing codes such as the International Plumbing Code (IPC) or the Uniform Plumbing Code (UPC). Understanding these concepts is vital for ensuring that plumbing systems function properly and efficiently, providing us with clean water and effective waste removal.\nContext recap: Plumbing fixtures are essential devices found in our homes that either deliver or receive water. Understanding these fixtures is crucial for anyone interested in plumbing. The main types of fixtures include water closets, commonly known as toilets, which are designed to use either 1.6 gallons per flush (GPF) or a more efficient 1.28 GPF if they are WaterSense certified. Other important fixtures include lavatories, which are the sinks found in bathrooms, kitchen sinks, bathtubs, showers, bidets, urinals, and hose bibbs, which are outdoor faucets.\nWhy this matters: Fixture Types and Fixture Units helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l05-c3",
          "title": "Water Heaters",
          "content": "Residential water heaters are essential devices that store and heat water for our daily activities at home, such as bathing, cooking, and cleaning. Understanding how these heaters work can help us make informed choices about our water heating needs. There are two primary types of water heaters: tank-type and tankless.\nTank-type water heaters are the most common. They can be powered by either gas or electricity and typically hold between 40 to 80 gallons of hot water. These heaters keep the water at a consistent temperature, ready for use whenever we need it. One important feature of tank-type heaters is the first-hour rating (FHR). This rating tells us how many gallons of hot water the heater can provide in the first hour of use, which is crucial for busy households that need a lot of hot water quickly.\nOn the other hand, tankless water heaters, also known as demand water heaters, work differently. Instead of storing hot water, they heat it on demand. When you turn on the hot water tap, powerful burners or electric elements quickly heat the water as it flows through the unit. This means you can have a continuous supply of hot water without worrying about running out, and these units are rated in gallons per minute (GPM) rather than by how much water they can store.\nAnother innovative option is the heat-pump water heater. These heaters are designed to be very energy-efficient. They work by extracting heat from the surrounding air and using it to warm the water stored in the tank. This process allows them to achieve energy factors (UEF) of 2.0 or higher, making them roughly twice as efficient as standard electric tank units. This efficiency can lead to significant savings on energy bills over time.\nRegardless of the type of water heater, safety is a top priority. All water heaters must be equipped with a temperature-and-pressure (T&P) relief valve. This valve is crucial because it helps prevent dangerous pressure buildup inside the tank. It must be rated for the unit's BTU input, ensuring it can handle the heat generated. Additionally, the discharge pipe from the T&P valve must be routed to within 6 inches of the floor or directed to an approved drain. This setup is vital for safely managing any excess pressure or hot water that may escape, protecting both the appliance and the home from potential hazards.\nContext recap: Residential water heaters are essential devices that store and heat water for our daily activities at home, such as bathing, cooking, and cleaning. Understanding how these heaters work can help us make informed choices about our water heating needs. There are two primary types of water heaters: tank-type and tankless. Tank-type water heaters are the most common.\nWhy this matters: Water Heaters helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l05-f1",
          "front": "What is the key difference between a gate valve and a ball valve?",
          "back": "A gate valve uses a wedge gate for full-open/full-closed service. A ball valve uses a quarter-turn bored ball for rapid shutoff and better flow characteristics."
        },
        {
          "id": "plumbing-101-l05-f2",
          "front": "What does DFU stand for and what does it represent?",
          "back": "Drainage Fixture Unit — a standardized value assigned to each fixture representing its probable load on the DWV system, used to size drain piping."
        },
        {
          "id": "plumbing-101-l05-f3",
          "front": "What is the first-hour rating (FHR) on a tank water heater?",
          "back": "The number of gallons of hot water the heater can supply during the first hour of heavy use, combining stored hot water and recovery capacity."
        },
        {
          "id": "plumbing-101-l05-f4",
          "front": "Why is a T&P relief valve required on every water heater?",
          "back": "It opens automatically if temperature exceeds ~210 °F or pressure exceeds 150 psi, preventing catastrophic tank rupture from thermal expansion or runaway heating."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l05-a1",
          "type": "matching_pairs",
          "title": "Match the Valve to Its Function",
          "description": "Match each valve type with its primary plumbing function.",
          "estimatedMinutes": 4,
          "difficultyLevel": "medium",
          "pairs": [
            {
              "left": "Gate valve",
              "right": "Full-open / full-closed isolation — not for throttling"
            },
            {
              "left": "Ball valve",
              "right": "Quarter-turn rapid shutoff with low flow restriction"
            },
            {
              "left": "Globe valve",
              "right": "Throttling flow regulation with S-path design"
            },
            {
              "left": "Check valve",
              "right": "Allows flow in one direction only, prevents backflow"
            },
            {
              "left": "Pressure-reducing valve",
              "right": "Lowers incoming water pressure to a set value"
            },
            {
              "left": "Tempering (mixing) valve",
              "right": "Blends hot and cold water to a safe outlet temperature"
            }
          ]
        }
      ],
      "learningAids": [
        {
          "id": "plumbing-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "plumbing-101-l06",
      "title": "Pipe Joining & Fixtures Checkpoint",
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
          "id": "plumbing-101-l06-q1",
          "text": "During copper soldering, what force draws molten solder into the joint?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Gravity"
            },
            {
              "id": "b",
              "text": "Water pressure"
            },
            {
              "id": "c",
              "text": "Capillary action"
            },
            {
              "id": "d",
              "text": "Vacuum suction"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Capillary action draws the molten solder into the narrow gap between the tube and fitting when the copper surfaces are properly cleaned, fluxed, and heated to the correct temperature."
        },
        {
          "id": "plumbing-101-l06-q2",
          "text": "Which PEX connection method creates a full-bore joint by expanding the tubing before inserting the fitting?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Crimp"
            },
            {
              "id": "b",
              "text": "Expansion (cold-expansion)"
            },
            {
              "id": "c",
              "text": "Push-fit (SharkBite)"
            },
            {
              "id": "d",
              "text": "Solvent cement"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The ASTM F1960 expansion method enlarges the PEX end with a tool, the fitting is inserted, and the tubing's molecular memory contracts it around the fitting for a full-bore connection."
        },
        {
          "id": "plumbing-101-l06-q3",
          "text": "A water closet (toilet) is typically rated at how many Drainage Fixture Units (DFU)?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "1 DFU"
            },
            {
              "id": "b",
              "text": "2 DFU"
            },
            {
              "id": "c",
              "text": "3–4 DFU"
            },
            {
              "id": "d",
              "text": "6 DFU"
            }
          ],
          "correctOptionId": "c",
          "explanation": "A water closet is generally rated at 3 DFU (IPC for 1.6 GPF) or 4 DFU depending on the code edition. Lavatories are 1 DFU and kitchen sinks are 2 DFU."
        },
        {
          "id": "plumbing-101-l06-q4",
          "text": "Why should you NOT quench a freshly soldered copper joint with water?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It washes away the flux needed for bonding"
            },
            {
              "id": "b",
              "text": "Rapid cooling can cause thermal stress cracks in the joint"
            },
            {
              "id": "c",
              "text": "The solder has not yet melted at that point"
            },
            {
              "id": "d",
              "text": "Water reacts chemically with copper to weaken it"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Quenching subjects the hot joint to sudden contraction, which can create stress cracks in the solder. The joint should be allowed to cool naturally to room temperature."
        }
      ]
    },
    {
      "id": "plumbing-101-l07",
      "title": "Plumbing Codes and Safety",
      "type": "video",
      "duration": 10,
      "objectives": [
        "Identify the major model plumbing codes (IPC and UPC) and explain their purpose",
        "Describe backflow prevention devices and cross-connection hazards",
        "Outline basic gas piping safety requirements for plumbers"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l07-c1",
          "title": "Model Plumbing Codes",
          "content": "In the United States, plumbing work is carefully regulated to ensure that it is safe and meets high-quality standards. This regulation is done through specific plumbing codes that are adopted at either the state or local level. The two main codes that plumbers need to be familiar with are the International Plumbing Code (IPC) and the Uniform Plumbing Code (UPC). The IPC is published by the International Code Council (ICC) and is utilized in approximately 35 states across the country. On the other hand, the UPC is published by the International Association of Plumbing and Mechanical Officials (IAPMO) and is more commonly found in the western states.\nThese plumbing codes provide important guidelines that cover various essential aspects of plumbing work. For example, they specify the minimum sizes for pipes to ensure proper water flow, outline the types of materials that can be used in plumbing systems, and detail the requirements for fixtures such as sinks and toilets. Additionally, the codes include rules for venting, which is crucial for preventing sewer gases from entering buildings, and they establish procedures for inspections to ensure that plumbing work is done correctly.\nBefore plumbers can begin their work, they must obtain a license from the Authority Having Jurisdiction (AHJ), which is the local governing body responsible for enforcing plumbing regulations. They also need to secure the necessary permits, which allow them to legally perform plumbing tasks. Inspections are a vital part of the plumbing process and occur at two key stages. The first inspection, known as the rough-in stage, takes place before the walls are closed up, allowing inspectors to check the plumbing layout. The second inspection, called the final stage, occurs after all fixtures are installed and the plumbing system has been tested to ensure it functions properly. Following these codes and regulations helps to keep everyone safe and ensures that plumbing systems operate efficiently and effectively.\nContext recap: In the United States, plumbing work is carefully regulated to ensure that it is safe and meets high-quality standards. This regulation is done through specific plumbing codes that are adopted at either the state or local level. The two main codes that plumbers need to be familiar with are the International Plumbing Code (IPC) and the Uniform Plumbing Code (UPC). The IPC is published by the International Code Council (ICC) and is utilized in approximately 35 states across the country.\nWhy this matters: Model Plumbing Codes helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l07-c2",
          "title": "Backflow Prevention and Cross-Connection Control",
          "content": "A cross-connection is a situation where safe drinking water is connected to a source that is not safe, which can lead to serious health risks. This connection can cause backflow, a process where water flows backward into the drinking supply due to changes in pressure. There are two main reasons why backflow can occur: first, back-siphonage happens when there is negative pressure in the water supply, which can suck contaminated water back into the clean supply. Second, back-pressure occurs when the pressure downstream is greater than the pressure in the supply line, pushing dirty water back into the drinking water system. To prevent backflow and protect our drinking water, various protective devices are used, and they are categorized based on the level of hazard they protect against. The most reliable method for preventing backflow is called an air gap. This is a physical space that must be at least twice the diameter of the supply pipe, creating a safe distance between the drinking water and any potential contaminants. For high-hazard situations, such as when filling a boiler, a special device called a reduced-pressure zone (RPZ) assembly is used. This device helps ensure that any potential contaminants cannot enter the drinking water supply. For lower-risk applications, like fire sprinkler systems, a double-check valve assembly (DCVA) is appropriate. This device helps prevent backflow in situations where the risk is lower. Additionally, there are other devices like atmospheric vacuum breakers (AVBs) and hose-bibb vacuum breakers that are specifically designed to protect outdoor faucets and irrigation systems from contamination. These devices are essential for keeping our water safe and ensuring that we have access to clean drinking water at all times.\nContext recap: A cross-connection is a situation where safe drinking water is connected to a source that is not safe, which can lead to serious health risks. This connection can cause backflow, a process where water flows backward into the drinking supply due to changes in pressure. There are two main reasons why backflow can occur: first, back-siphonage happens when there is negative pressure in the water supply, which can suck contaminated water back into the clean supply. Second, back-pressure occurs when the pressure downstream is greater than the pressure in the supply line, pushing dirty water back into the drinking water system."
        },
        {
          "id": "plumbing-101-l07-c3",
          "title": "Gas Piping Basics and Safety",
          "content": "Plumbers often work with gas piping, which is crucial for many household appliances, including water heaters, furnaces, and stoves. The pipes used for transporting gas are typically made from black steel and can feature either threaded or pressed fittings. Alternatively, some plumbers use corrugated stainless steel tubing (CSST), which comes with special connectors designed for safety and efficiency.\nBefore any gas piping can be put into service, it must undergo a pressure test. This test is essential to ensure that there are no leaks in the system. For small gas systems, the pressure test usually requires a minimum of 3 psi and must last for at least 10 minutes. A calibrated gauge is used to measure the pressure accurately during this test.\nWhen it comes to detecting leaks in gas piping, plumbers use an approved leak-detection solution. This is a much safer method than using an open flame, which can be extremely dangerous and could lead to fires or explosions. Safety is always the top priority when working with gas.\nGas appliances also require sufficient air for proper combustion. There are two main types of gas appliances: sealed-combustion units and atmospherically vented appliances. Sealed-combustion units draw air directly from outside, which helps to ensure they operate safely and efficiently. On the other hand, atmospherically vented appliances rely on air from the room. These appliances need to have correctly sized openings for combustion air to function properly and safely.\nFurthermore, when using CSST, it is important to bond it to the building's grounding electrode system. This bonding helps protect against potential issues caused by lightning strikes, which can lead to dangerous arcing.\nLastly, for safety reasons, it is essential to have a gas shutoff valve located within 6 feet of each gas appliance. This allows for quick access to shut off the gas supply in case of an emergency, ensuring the safety of everyone in the building.\nContext recap: Plumbers often work with gas piping, which is crucial for many household appliances, including water heaters, furnaces, and stoves. The pipes used for transporting gas are typically made from black steel and can feature either threaded or pressed fittings. Alternatively, some plumbers use corrugated stainless steel tubing (CSST), which comes with special connectors designed for safety and efficiency. Before any gas piping can be put into service, it must undergo a pressure test.\nWhy this matters: Gas Piping Basics and Safety helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l07-f1",
          "front": "What are the two major model plumbing codes used in the United States?",
          "back": "The International Plumbing Code (IPC) published by ICC, and the Uniform Plumbing Code (UPC) published by IAPMO."
        },
        {
          "id": "plumbing-101-l07-f2",
          "front": "What is a cross-connection?",
          "back": "A physical link between a potable water supply and a non-potable source that could allow contamination to enter the drinking water system through backflow."
        },
        {
          "id": "plumbing-101-l07-f3",
          "front": "Name three types of backflow prevention devices in order of protection level.",
          "back": "Air gap (highest), reduced-pressure zone (RPZ) assembly, and double-check valve assembly (DCVA) — each suited to a different hazard level."
        },
        {
          "id": "plumbing-101-l07-f4",
          "front": "How is a gas piping system tested for leaks before use?",
          "back": "The system is pressurized to a minimum of 3 psi (for small systems) for 10 minutes using a calibrated gauge. Joints are tested with an approved leak-detection solution — never an open flame."
        }
      ]
    },
    {
      "id": "plumbing-101-l08",
      "title": "Troubleshooting Common Problems",
      "type": "interactive",
      "duration": 12,
      "objectives": [
        "Diagnose the root causes of leaks, clogs, and low water pressure",
        "Explain the causes and remedies for water hammer and sewer gas odors",
        "Select appropriate tools and techniques for common plumbing repairs"
      ],
      "chunks": [
        {
          "id": "plumbing-101-l08-c1",
          "title": "Leaks and Clogs",
          "content": "Leaks are one of the most frequent reasons why people need plumbing assistance. They can occur on the supply side, which is where water comes into your home. These leaks often happen at fittings, valves, or sections of pipe that have started to corrode or wear out over time. A helpful way to detect these leaks is by checking your water meter. If the meter is spinning even when all your faucets and fixtures are turned off, it’s a strong indication that there is a leak somewhere in your plumbing system.\nOn the other hand, drain-side leaks can be a bit more challenging to identify. You might notice signs like water stains on the ceilings below bathrooms or a musty smell coming from the walls. These clues can help you figure out where the leak might be hiding. To troubleshoot a leak effectively, you should start by isolating the section of plumbing that you suspect is leaking. This can be done by closing the nearest shutoff valve. After doing this, observe whether the leak stops. If it does, you have successfully isolated the problem area.\nClogs in drains are another common plumbing issue. They are usually caused by a buildup of hair, grease, soap, or even foreign objects that accidentally fall into the drain. For minor blockages, a plunger can be a very effective tool. It works by creating pressure and suction, which can help dislodge the blockage and allow water to flow freely again.\nFor more stubborn clogs, you might need to use a hand-cranked drain snake, also known as a drum auger. This tool can reach into branch drains that are up to 50 feet long and physically break through the clogs. If you are dealing with a blockage in the main sewer line, a powered sewer machine equipped with a cutting head is the best option.\nIt’s very important to avoid using chemical drain cleaners. While they may seem like a quick fix, they can actually corrode your pipes over time and create safety hazards. Instead, consider using mechanical methods or calling a professional plumber if you’re unsure about how to handle a clog or leak safely.\nContext recap: Leaks are one of the most frequent reasons why people need plumbing assistance. They can occur on the supply side, which is where water comes into your home. These leaks often happen at fittings, valves, or sections of pipe that have started to corrode or wear out over time. A helpful way to detect these leaks is by checking your water meter.\nWhy this matters: Leaks and Clogs helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification.\nStep-by-step approach: (1) define the goal in one sentence, (2) identify evidence that supports the goal, (3) explain how each piece of evidence changes your conclusion, and (4) verify the final answer against the original goal and constraints."
        },
        {
          "id": "plumbing-101-l08-c2",
          "title": "Low Water Pressure",
          "content": "When someone mentions that they are experiencing low water pressure in their home, it’s essential to approach the situation with a systematic method to identify the cause. First, you should check the water meter or the well tank. Using a pressure gauge, measure the static water pressure; typically, normal residential water pressure ranges from 40 to 80 psi (pounds per square inch). If the pressure reading at the meter is within this normal range, it indicates that the issue is likely occurring inside the building itself.\nThere are several common reasons for low water pressure within a home. One possibility is that the main shutoff valve or the fixture stop valve is partially closed, which can restrict water flow. Another potential cause could be a clogged or malfunctioning pressure-reducing valve (PRV), which helps regulate the water pressure throughout the plumbing system. Additionally, if the home has galvanized steel pipes, mineral buildup can occur over time, leading to a condition known as tuberculation, which can significantly reduce water flow.\nSometimes, the problem can be as simple as a clogged aerator on a faucet, which is the small screen that helps regulate water flow. If the low pressure is only affecting the hot water, it might be due to a deteriorated dip tube in the water heater. This tube is responsible for directing cold water to the bottom of the tank, and if it breaks down, it can send plastic fragments into the plumbing system.\nFinally, it’s important to note that corrosion in older galvanized supply lines is a widespread issue that can lead to low water pressure. The most effective long-term solution for this problem is to replace the old pipes with new ones made of copper or PEX, which are more resistant to corrosion and can help maintain proper water pressure in the home. By understanding these potential issues, you can better troubleshoot low water pressure problems and find effective solutions.\nContext recap: When someone mentions that they are experiencing low water pressure in their home, it’s essential to approach the situation with a systematic method to identify the cause. First, you should check the water meter or the well tank. Using a pressure gauge, measure the static water pressure; typically, normal residential water pressure ranges from 40 to 80 psi (pounds per square inch). If the pressure reading at the meter is within this normal range, it indicates that the issue is likely occurring inside the building itself.\nWhy this matters: Low Water Pressure helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        },
        {
          "id": "plumbing-101-l08-c3",
          "title": "Water Hammer and Sewer Gas",
          "content": "Water hammer is a loud banging noise that can happen in plumbing systems, and it’s important to understand why it occurs. This noise is caused by a pressure shock wave that happens when a fast-closing valve, like the one found on a washing machine, suddenly stops the flow of water. When this happens, the energy from the moving water creates a pressure spike that can exceed 600 psi for a brief moment. This sudden change in pressure can put a lot of stress on the joints and fittings in the plumbing system, which can lead to leaks or other issues if not addressed.\nTo help prevent water hammer, plumbers often install devices called water hammer arrestors. These are small, sealed chambers that contain either a piston or a diaphragm along with a gas cushion. Their purpose is to absorb the shock created by the sudden stop of water flow, which helps to reduce the loud banging noise and protect the plumbing system from damage.\nAnother important plumbing issue to be aware of is the presence of sewer gas odors inside a building. If you notice a foul smell, it usually indicates that there is a problem with the plumbing system. Common causes of sewer gas odors include a dried-out trap seal, particularly in floor drains or fixtures that are not used very often. Other potential issues could be a cracked or disconnected vent pipe, a missing cleanout cap, or a failed wax ring seal located under a toilet.\nTo effectively locate the source of a sewer gas leak, plumbers often use a method called smoke testing. This involves introducing non-toxic smoke into the drainage and venting system. If there are any leaks, the smoke will escape from the problem areas, making it easier to identify where the issue lies. Understanding these concepts is crucial for anyone interested in plumbing, as they highlight the importance of maintaining a healthy plumbing system and addressing issues promptly to avoid more significant problems down the line.\nContext recap: Water hammer is a loud banging noise that can happen in plumbing systems, and it’s important to understand why it occurs. This noise is caused by a pressure shock wave that happens when a fast-closing valve, like the one found on a washing machine, suddenly stops the flow of water. When this happens, the energy from the moving water creates a pressure spike that can exceed 600 psi for a brief moment. This sudden change in pressure can put a lot of stress on the joints and fittings in the plumbing system, which can lead to leaks or other issues if not addressed.\nWhy this matters: Water Hammer and Sewer Gas helps learners in Trades connect ideas from Plumbing Fundamentals to decisions they make during practice and assessment. Highlight tradeoffs, assumptions, and verification."
        }
      ],
      "flashcards": [
        {
          "id": "plumbing-101-l08-f1",
          "front": "How can you detect a hidden supply-side leak?",
          "back": "Turn off all fixtures and check the water meter — if it continues to spin, there is a leak in the supply piping between the meter and the fixtures."
        },
        {
          "id": "plumbing-101-l08-f2",
          "front": "What is water hammer and how is it prevented?",
          "back": "A pressure shock wave from abrupt valve closure. It is prevented by installing water hammer arrestors near fast-closing valves."
        },
        {
          "id": "plumbing-101-l08-f3",
          "front": "What causes tuberculation in galvanized pipes?",
          "back": "Internal corrosion and mineral deposits build up over time, gradually reducing the pipe's internal diameter and restricting water flow."
        },
        {
          "id": "plumbing-101-l08-f4",
          "front": "What is smoke testing in plumbing diagnostics?",
          "back": "Non-toxic smoke is pumped into the DWV system to locate leaks — smoke escaping through cracks, dried traps, or disconnected pipes reveals the sewer gas entry point."
        }
      ],
      "interactiveActivities": [
        {
          "id": "plumbing-101-l08-a1",
          "type": "matching_pairs",
          "title": "Match the Symptom to Its Root Cause",
          "description": "Match each plumbing symptom with its most likely cause.",
          "estimatedMinutes": 4,
          "difficultyLevel": "medium",
          "pairs": [
            {
              "left": "Banging noise when washing machine fills",
              "right": "Water hammer — fast-closing solenoid valve"
            },
            {
              "left": "Rotten-egg smell from basement floor drain",
              "right": "Dried-out trap seal allowing sewer gas entry"
            },
            {
              "left": "Low pressure at all fixtures in the house",
              "right": "Failing PRV or partially closed main shutoff"
            },
            {
              "left": "Low hot-water pressure only",
              "right": "Deteriorated dip tube in the water heater"
            },
            {
              "left": "Slow drain in bathroom sink",
              "right": "Hair and soap buildup in the P-trap or branch drain"
            },
            {
              "left": "Water meter spinning with all fixtures off",
              "right": "Hidden supply-side leak in the piping"
            }
          ]
        }
      ]
    },
    {
      "id": "plumbing-101-l09",
      "title": "Codes & Troubleshooting Checkpoint",
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
          "id": "plumbing-101-l09-q1",
          "text": "Which backflow prevention method provides the HIGHEST level of protection for potable water?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Atmospheric vacuum breaker (AVB)"
            },
            {
              "id": "b",
              "text": "Double-check valve assembly (DCVA)"
            },
            {
              "id": "c",
              "text": "Air gap"
            },
            {
              "id": "d",
              "text": "Hose-bibb vacuum breaker"
            }
          ],
          "correctOptionId": "c",
          "explanation": "An air gap — a physical separation between the water outlet and the flood-level rim — is the most reliable backflow protection because there is no mechanical device that can fail."
        },
        {
          "id": "plumbing-101-l09-q2",
          "text": "A homeowner reports a rotten-egg smell near a guest bathroom that is rarely used. What should the plumber check FIRST?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The water heater anode rod"
            },
            {
              "id": "b",
              "text": "The fixture trap seal for evaporation"
            },
            {
              "id": "c",
              "text": "The incoming water pressure"
            },
            {
              "id": "d",
              "text": "The supply pipe material"
            }
          ],
          "correctOptionId": "b",
          "explanation": "In seldom-used fixtures the trap water evaporates, breaking the seal and allowing sewer gas (hydrogen sulfide — the rotten-egg odor) to enter the room. Running water to refill the trap is the immediate fix."
        },
        {
          "id": "plumbing-101-l09-q3",
          "text": "What minimum pressure test is required for a small natural gas piping system before it is placed in service?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "½ psi for 5 minutes"
            },
            {
              "id": "b",
              "text": "3 psi for 10 minutes"
            },
            {
              "id": "c",
              "text": "15 psi for 30 minutes"
            },
            {
              "id": "d",
              "text": "80 psi for 1 hour"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Small residential gas piping is tested at a minimum of 3 psi (typically using a diaphragm gauge) for at least 10 minutes. The gauge must hold steady with no pressure drop to pass."
        },
        {
          "id": "plumbing-101-l09-q4",
          "text": "Water hammer arrestors work by:",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Increasing the pipe diameter to slow water velocity"
            },
            {
              "id": "b",
              "text": "Absorbing the pressure shock wave with a sealed gas cushion"
            },
            {
              "id": "c",
              "text": "Adding a check valve to prevent reverse flow"
            },
            {
              "id": "d",
              "text": "Reducing incoming water pressure below 40 psi"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A water hammer arrestor contains a piston or diaphragm backed by a sealed gas cushion. When the pressure spike occurs, the piston compresses the gas, absorbing the shock wave and protecting the piping."
        }
      ]
    },
    {
      "id": "plumbing-101-l10",
      "title": "Mastery Quiz: Plumbing Foundations",
      "type": "quiz",
      "duration": 10,
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 1,
          "understand": 1,
          "apply": 1,
          "analyze": 1
        }
      },
      "questions": [
        {
          "id": "plumbing-101-l10-q1",
          "text": "A plumber needs to join CPVC pipe for a hot-water supply line. Which joining method is correct?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Solder with lead-free solder and flux"
            },
            {
              "id": "b",
              "text": "Apply CPVC primer and CPVC solvent cement"
            },
            {
              "id": "c",
              "text": "Use PEX crimp rings and brass insert fittings"
            },
            {
              "id": "d",
              "text": "Thread the pipe ends and apply PTFE tape"
            }
          ],
          "correctOptionId": "b",
          "explanation": "CPVC pipe is joined by solvent welding with CPVC-specific primer and cement. Soldering is for copper, crimp fittings are for PEX, and threading is for steel pipe."
        },
        {
          "id": "plumbing-101-l10-q2",
          "text": "In a manifold (home-run) PEX supply system, what is the PRIMARY advantage over a traditional trunk-and-branch layout?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It eliminates the need for a water meter"
            },
            {
              "id": "b",
              "text": "Each fixture has a dedicated line, reducing pressure drop and allowing individual shutoff"
            },
            {
              "id": "c",
              "text": "It uses larger pipe throughout to increase flow"
            },
            {
              "id": "d",
              "text": "It removes the need for venting on the DWV side"
            }
          ],
          "correctOptionId": "b",
          "explanation": "A manifold system runs a dedicated PEX line to each fixture, so fixtures do not compete for flow on a shared branch. Each line can be individually shut off at the manifold without affecting other fixtures."
        },
        {
          "id": "plumbing-101-l10-q3",
          "text": "An inspector finds a 2-inch horizontal drain with a slope of ⅛ inch per foot. What is the correct assessment?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The slope is correct for pipes 3 inches and smaller"
            },
            {
              "id": "b",
              "text": "The slope is too steep and will cause channel flow"
            },
            {
              "id": "c",
              "text": "The slope is insufficient — it should be ¼ inch per foot"
            },
            {
              "id": "d",
              "text": "Slope is only required for pipes larger than 4 inches"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Horizontal drains 3 inches or smaller require a minimum ¼ inch per foot slope. The ⅛ inch per foot standard applies only to pipes 4 inches and larger. The 2-inch pipe is under-sloped."
        },
        {
          "id": "plumbing-101-l10-q4",
          "text": "A commercial kitchen has a connection between the potable water supply and a chemical mixing station. The health inspector classifies this as a high-hazard cross-connection. Which backflow preventer is MOST appropriate?",
          "skillId": "plumbing-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Hose-bibb vacuum breaker"
            },
            {
              "id": "b",
              "text": "Double-check valve assembly (DCVA)"
            },
            {
              "id": "c",
              "text": "Reduced-pressure zone (RPZ) assembly"
            },
            {
              "id": "d",
              "text": "Atmospheric vacuum breaker (AVB)"
            }
          ],
          "correctOptionId": "c",
          "explanation": "High-hazard cross-connections require an RPZ assembly, which has two independently operating check valves and a relief port between them. If either check fails, the relief port opens to drain, preventing contamination of the potable supply. An air gap would also be acceptable but is not listed."
        }
      ]
    }
  ]
};
