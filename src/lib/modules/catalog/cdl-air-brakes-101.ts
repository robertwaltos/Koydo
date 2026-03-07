import type { LearningModule } from "@/lib/modules/types";

export const cdl_air_brakes_101_Module: LearningModule = {
  "id": "cdl-air-brakes-101",
  "title": "CDL Air Brakes",
  "description": "Complete study guide for the CDL Air Brakes endorsement test. Covers air brake system components, dual air brake systems, inspecting air brakes, using air brakes properly, and the critical air brake tests (applied pressure, low-pressure warning, air loss rate, spring brake pop-out). Required knowledge for all Class A CDL and any vehicle equipped with air brakes. Based on the FMCSA CDL Manual Section 5.",
  "subject": "CDL",
  "tags": [
    "core",
    "curriculum",
    "cdl",
    "trades",
    "exam-prep",
    "air-brakes"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/assets/cdl/air-brake-system.png",
  "learningObjectives": [
    "Identify all major components of a commercial vehicle air brake system and their functions.",
    "Explain how a dual air brake system works and why it's a critical safety feature.",
    "Perform the complete, required in-cab air brake inspection and testing procedures.",
    "Describe the function of spring brakes and the conditions under which they activate automatically.",
    "Apply correct braking techniques for normal stops, emergency stops, and long downgrades to prevent brake fade.",
    "Pass the CDL Air Brakes knowledge test with 80% or higher."
  ],
  "lessons": [
    {
      "id": "cdl-ab-101-l01",
      "title": "The Air Brake System: How It Works",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-ab-101-l01-c1",
          "title": "Air Generation and Storage",
          "content": "Air brakes use compressed air to apply braking force. The system starts with the engine-driven air compressor, which pumps air into the storage tanks. The governor controls the compressor, telling it to cut-in (start pumping) at around 100 psi and cut-out (stop pumping) at around 125 psi. Air passes through an air dryer to remove moisture and oil, then into the primary storage tanks, often called 'wet' and 'dry' tanks. A safety relief valve on the first tank is set to open at 150 psi to prevent over-pressurization. You must drain your air tanks daily to remove any collected moisture, which can freeze in cold weather and cause brake failure. [Visual Prompt: Animated diagram showing the engine running, the compressor pumping, and air flowing through the air dryer into the tanks. The air pressure gauge rises from 100 psi to 125 psi, at which point the compressor animation stops and a 'cut-out' text appears. A safety valve is shown popping off at 150 psi in a separate animation.]"
        },
        {
          "id": "cdl-ab-101-l01-c2",
          "title": "Applying the Service Brakes",
          "content": "When you press the brake pedal (also called the treadle valve), it sends compressed air from the tanks through air lines to the brake chambers at each wheel. Inside the chamber, air pressure pushes on a diaphragm, which moves a pushrod. The pushrod is connected to a slack adjuster, a lever that rotates an S-cam. The S-cam forces the brake shoes against the inside of the brake drum, creating friction to slow the vehicle. The distance the pushrod moves is critical; with the brakes released, it should not move more than about one inch when you pull on it by hand. Automatic slack adjusters maintain this distance, but they must still be checked. [Visual Prompt: An animated, exploded view showing the sequence: foot presses treadle valve -> air rushes through lines -> brake chamber diaphragm expands -> pushrod extends -> slack adjuster rotates -> S-cam turns -> brake shoes press against the drum. A second visual compares a properly adjusted slack adjuster (90-degree angle when applied) to one with excessive travel.]"
        },
        {
          "id": "cdl-ab-101-l01-c3",
          "title": "Parking and Emergency Brakes",
          "content": "Spring brakes are used for parking and emergency braking. They are a fail-safe system. Powerful springs are held back by air pressure while you are driving. When you pull the yellow, diamond-shaped parking brake valve in the cab, you release the air pressure, allowing the springs to expand and mechanically apply the brakes. This is why you hear a loud 'pssh' of air. If your system loses air pressure while driving, the springs will begin to apply the brakes automatically around 60 psi and will fully apply them between 20-45 psi, stopping the vehicle. The red, octagon-shaped valve is the trailer air supply; pulling it applies the trailer's emergency brakes. Never push in the parking brake valve to release the brakes unless you have enough air pressure to stop safely. [Visual Prompt: A cross-section animation of a spring brake chamber. Show air pressure holding the spring compressed. Then, show the air being released, allowing the powerful spring to expand and push the rod, applying the brake. Also show the yellow diamond and red octagon knobs on a dashboard being pulled and pushed.]"
        }
      ],
      "flashcards": [
        {
          "id": "cdl-ab-101-l01-f1",
          "front": "What are the typical cut-in and cut-out pressures for the air compressor governor?",
          "back": "The governor tells the compressor to cut-in (start pumping) at approximately 100 psi and cut-out (stop pumping) at approximately 125 psi."
        },
        {
          "id": "cdl-ab-101-l01-f2",
          "front": "What happens if air pressure drops to the 20-45 psi range?",
          "back": "The spring brakes will automatically apply fully, acting as an emergency stop."
        },
        {
          "id": "cdl-ab-101-l01-f3",
          "front": "What is the function of the S-cam?",
          "back": "When rotated by the slack adjuster, the S-cam forces the brake shoes apart and against the inside of the brake drum."
        },
        {
          "id": "cdl-ab-101-l01-f4",
          "front": "Why is it critical to drain air tanks daily?",
          "back": "To remove water and oil, which can freeze in cold weather or damage brake components, leading to brake failure."
        }
      ]
    },
    {
      "id": "cdl-ab-101-l02",
      "title": "Dual Systems and Air Brake Inspection",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-ab-101-l02-c1",
          "title": "The Dual Air Brake System",
          "content": "Modern heavy vehicles use a dual air brake system for safety. This is essentially two separate air brake systems that use a single set of brake controls. One system typically operates the rear axles (the primary system), and the other operates the front axle (the secondary system). Each system has its own air tanks, hoses, and lines. This provides redundancy; if one system develops a major leak, the other can still provide braking power to stop the vehicle. Your dashboard will have two air pressure gauges, one for each system. Both gauges should show normal pressure before driving. The low air pressure warning must come on when pressure in either tank drops below 60 psi. [Visual Prompt: A color-coded schematic of a truck chassis. The primary system (rear brakes) is highlighted in green, and the secondary system (front brakes) is highlighted in blue. An animation shows a leak in the green system, but the blue system remains pressurized and functional. Show a dashboard with two air gauges, labeled 'Primary' and 'Secondary'.]"
        },
        {
          "id": "cdl-ab-101-l02-c2",
          "title": "Walk-Around Air Brake Inspection",
          "content": "During your pre-trip inspection, you must visually inspect the brake components. Check brake chambers to ensure they are securely mounted and not cracked or damaged. Check slack adjusters and pushrods; if you can pull a pushrod more than one inch by hand on a drum brake, it likely needs adjustment. Check brake drums for cracks, dents, or holes. Look for signs of overheating like a bluish discoloration. Check brake linings (pads/shoes) for thickness—they should not be worn thinner than 1/4 inch. Ensure there are no contaminants like oil or grease on the braking surfaces. Check all air hoses and lines for cracks, chafing, or audible leaks. [Visual Prompt: A first-person view of a driver performing a walk-around. As they point to each component (brake chamber, slack adjuster, drum, hoses), a text box appears with key inspection points and pass/fail criteria, like a 1/4 inch minimum lining thickness indicator.]"
        },
        {
          "id": "cdl-ab-101-l02-c3",
          "title": "The In-Cab Air Brake Check (The 'Big 5' Tests)",
          "content": "This sequence of tests is mandatory for your CDL exam. With the engine on, build air pressure to full (around 125 psi). Then, turn the engine off, chock the wheels, and release all brakes. The 5 steps are: 1. Applied Leakage Test: Apply firm pressure to the brake pedal and hold for one minute. The air loss rate should be less than 3 psi for a straight truck or 4 psi for a combination vehicle. 2. Low Air Warning Test: Turn the key to the 'on' position (engine off) and pump the brake pedal to lower the air pressure. The low air warning light and/or buzzer must come on before pressure drops below 60 psi. 3. Spring Brake Pop-Out Test: Continue pumping the brake pedal. The parking brake valve (and trailer supply valve) must pop out between 20 and 45 psi. 4. Air Pressure Build-Up Test: Start the engine. Time how long it takes for pressure to build from 85 to 100 psi. It must do so within 45 seconds. 5. Governor Cut-Out Test: Let the engine run to observe the air pressure gauge. The governor must stop the compressor (cut-out) at or before 130 psi. You'll hear the air dryer purge. [Visual Prompt: A split screen showing a driver in the cab performing the actions on the left, and a close-up of the air gauges on the right. Each test is labeled, and the acceptable pressure ranges are highlighted in green on the gauge.]"
        }
      ],
      "flashcards": [
        {
          "id": "cdl-ab-101-l02-f1",
          "front": "What is the maximum allowable air loss rate for a combination vehicle during the applied leakage test?",
          "back": "4 psi in one minute. (3 psi for a straight truck or bus)."
        },
        {
          "id": "cdl-ab-101-l02-f2",
          "front": "The low air pressure warning must activate before pressure drops below what level?",
          "back": "60 psi."
        },
        {
          "id": "cdl-ab-101-l02-f3",
          "front": "During the air pressure build-up test, how quickly should pressure rise from 85 to 100 psi?",
          "back": "Within 45 seconds."
        },
        {
          "id": "cdl-ab-101-l02-f4",
          "front": "What is the main advantage of a dual air brake system?",
          "back": "Redundancy. If one system fails, the other can still provide braking power to stop the vehicle."
        }
      ]
    },
    {
      "id": "cdl-ab-101-l03",
      "title": "Using Air Brakes Safely",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-ab-101-l03-c1",
          "title": "Normal and Emergency Stopping",
          "content": "Air brakes have a built-in delay called 'brake lag,' which is the time it takes for air to travel to the brakes after you press the pedal. This can add 30-40 feet to your total stopping distance at highway speeds. Total Stopping Distance = Perception Distance + Reaction Distance + Brake Lag + Braking Distance. You must maintain a greater following distance than in a car. For normal stops, apply smooth, steady pressure. For emergency stops, you can brake as hard as possible without locking the wheels. If your vehicle has ABS (Anti-lock Braking System), hold the pedal down firmly and let the system work—do not pump the brakes. [Visual Prompt: An animation comparing two trucks stopping. The air brake truck has a visible 'lag' bar on its timeline, resulting in a longer total stopping distance. A second animation shows a driver's foot holding steady pressure on the pedal during an ABS stop, with the wheels pulsing but not locking.]"
        },
        {
          "id": "cdl-ab-101-l03-c2",
          "title": "Mountain Driving and Brake Fade",
          "content": "Brakes can fail from overheating, a condition known as brake fade. This is the number one cause of runaway trucks on long downgrades. As brakes get too hot, they become less effective, eventually losing all stopping power. The correct way to descend a steep grade is to use your engine brake (or 'Jake Brake') as your primary tool for speed control. Select a low gear before you start down the hill. Use your service brakes sparingly. The 'snub braking' technique is to apply the brakes firmly to slow down about 5 mph below your safe speed, then release them completely to cool, and repeat as needed. Never ride your brakes down a grade. [Visual Prompt: A diagram showing a truck on a steep grade. An icon for the engine brake is lit up. A temperature gauge on the brake drum rises into the red 'FADE' zone when the brakes are ridden, but stays in the green 'COOL' zone when the snub braking technique is used. Show a runaway truck ramp as a safety option.]"
        },
        {
          "id": "cdl-ab-101-l03-c3",
          "title": "Braking on Slippery Surfaces",
          "content": "Braking too hard on a slippery surface can cause your wheels to lock up, leading to a skid. A tractor-trailer jackknife happens when the drive wheels lock and skid, causing the trailer to push the tractor around. To prevent this, reduce your speed before you encounter slippery conditions. Brake gently and avoid sudden steering movements. Never use the trailer hand brake (trolley valve) to stop, especially on slippery roads, as it only applies the trailer brakes and can easily cause a trailer skid and jackknife. If you do start to skid, release the brakes to allow the wheels to regain traction, and steer in the direction you want to go. [Visual Prompt: An overhead animation of a truck jackknifing on an icy road after the driver brakes too hard. Then, replay the scenario showing the driver braking gently and maintaining control. A separate icon shows the trailer hand brake with a large red 'X' over it for normal stopping.]"
        }
      ],
      "flashcards": [
        {
          "id": "cdl-ab-101-l03-f1",
          "front": "What is 'brake lag'?",
          "back": "The time it takes for air to travel from the brake pedal to the brake chambers, which adds to your total stopping distance."
        },
        {
          "id": "cdl-ab-101-l03-f2",
          "front": "What is the proper braking technique for a long, steep downgrade?",
          "back": "Use a low gear and the engine brake. Use service brakes sparingly with the 'snub braking' method (apply firmly, slow 5 mph, release fully)."
        },
        {
          "id": "cdl-ab-101-l03-f3",
          "front": "What is the primary cause of a jackknife skid?",
          "back": "The drive wheels locking up and losing traction, usually from braking too hard on a slippery surface."
        },
        {
          "id": "cdl-ab-101-l03-f4",
          "front": "How should you brake in an emergency if your vehicle has ABS?",
          "back": "Apply and hold firm, steady pressure on the brake pedal. Do not pump the brakes. Let the ABS system work."
        }
      ]
    },
    {
      "id": "cdl-ab-101-l04",
      "title": "CDL Air Brakes Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-ab-101-l04-c1",
          "title": "Test Your Knowledge",
          "content": "This practice exam is designed to mirror the official CDL Air Brakes knowledge test. The real exam typically consists of 25 multiple-choice questions, and a score of 80% (20 correct answers) is required to pass. Failing this endorsement test will result in an 'L' restriction on your CDL, meaning you cannot legally operate any vehicle equipped with air brakes. This test will cover all the topics we've discussed: system components, dual systems, the complete inspection process, safe braking techniques, and emergency situations. Take your time, read each question carefully, and review the system diagrams if you need a refresher. Good luck!"
        }
      ],
      "flashcards": []
    }
  ]
};
