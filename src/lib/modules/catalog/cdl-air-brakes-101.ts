import type { LearningModule } from "@/lib/modules/types";

export const cdl_air_brakes_101_Module: LearningModule = {
  "id": "cdl-air-brakes-101",
  "title": "CDL Air Brakes",
  "description": "Complete study guide for the CDL Air Brakes endorsement test. Covers air brake system components, dual air brake systems, inspecting air brakes, using air brakes properly, and the critical air brake tests (applied pressure, low-pressure warning, air loss rate, spring brake pop-out). Required knowledge for all Class A CDL and any vehicle equipped with air brakes. Based on the FMCSA CDL Manual Section 5.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "air-brakes"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en", "es"],
  "thumbnail": "/assets/cdl/air-brake-system.png",
  "learningObjectives": [
    "Identify all major components of a commercial vehicle air brake system",
    "Explain how dual air brake systems provide redundancy and safety",
    "Perform proper air brake inspection and testing procedures",
    "Describe the function of spring brakes and when they activate automatically",
    "Apply correct braking techniques to prevent brake fade and jackknifing",
    "Pass the CDL Air Brakes knowledge test with 80% or higher"
  ],
  "lessons": [
    {
      "id": "cdl-ab-101-l01",
      "title": "Air Brake System Components",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-ab-101-l01-c1",
          "title": "The Air Compressor and Reservoirs",
          "content": "Air brakes use compressed air instead of hydraulic fluid to apply braking force. [Visual Prompt: Cutaway diagram of a complete air brake system showing the air compressor (gear-driven from engine), governor, wet tank, dry tanks, safety relief valve, one-way check valves, and drain cocks, with arrows showing airflow direction.] The air compressor is gear-driven or belt-driven by the engine and pumps air into the storage tanks. The governor controls when the compressor pumps air — it cuts in at about 100 psi and cuts out at about 125 psi. Air first enters the wet (supply) tank where moisture and oil are separated. From there, one-way check valves direct air into the dry (service) tanks. If the wet tank develops a leak, the check valves prevent air from escaping the dry tanks — this is a critical safety feature. Each tank has a drain valve at the bottom. You must drain the tanks daily to remove accumulated moisture, which can freeze in cold weather and block air lines, causing brake failure."
        },
        {
          "id": "cdl-ab-101-l01-c2",
          "title": "Brake Chambers, Slack Adjusters, and S-Cam",
          "content": "The brake chamber converts air pressure into mechanical force. [Visual Prompt: Exploded view diagram showing the sequence: brake pedal → foot valve → air line → brake chamber (diaphragm pushing rod) → slack adjuster (lever arm) → S-cam (rotating cam) → brake shoes (pressed against drum), with labels and force direction arrows.] When you press the brake pedal, the foot valve sends compressed air through the air lines to the brake chambers at each wheel. Inside the chamber, a diaphragm pushes a push rod outward. The push rod connects to the slack adjuster, which is a lever arm that rotates the S-cam (a cam shaped like the letter S). As the S-cam turns, it forces the brake shoes outward against the inside of the brake drum, creating friction to stop the wheel. Automatic slack adjusters maintain the correct push rod stroke as brake linings wear down. Manual slack adjusters require periodic adjustment — excessive push rod travel means reduced braking force."
        },
        {
          "id": "cdl-ab-101-l01-c3",
          "title": "Spring Brakes and Parking Brake",
          "content": "Spring brakes are the fail-safe mechanism in air brake systems. [Visual Prompt: Cross-section of a spring brake chamber showing two compartments: the service side (air pushes diaphragm to apply brakes) and the spring side (powerful spring held back by air pressure), with labels showing both released and applied states.] Spring brakes have a powerful spring held compressed by air pressure during normal driving. If air pressure drops below about 60 psi, the springs begin to overcome the air pressure. At approximately 20-45 psi, the springs fully apply the brakes automatically — this is your emergency braking system. The parking brake control (yellow diamond-shaped button in the cab) releases air from the spring brake chambers, allowing the springs to apply. Never try to drive with the parking brake partially applied — it can overheat and damage the brakes. If your air pressure drops to about 60 psi while driving, pull over immediately. Below 20 psi, you will have NO service brakes and only the spring brakes working."
        }
      ],
      "flashcards": [
        { "id": "cdl-ab-101-l01-f1", "front": "At what pressure does the governor cut in and cut out?", "back": "Cut in: approximately 100 psi. Cut out: approximately 125 psi." },
        { "id": "cdl-ab-101-l01-f2", "front": "What happens when air pressure drops below 20-45 psi?", "back": "Spring brakes automatically apply fully, stopping the vehicle." },
        { "id": "cdl-ab-101-l01-f3", "front": "Why must air tanks be drained daily?", "back": "To remove accumulated moisture that can freeze in cold weather and block air lines, causing brake failure." },
        { "id": "cdl-ab-101-l01-f4", "front": "What does the S-cam do in the braking system?", "back": "It rotates and forces the brake shoes outward against the brake drum to create friction." }
      ]
    },
    {
      "id": "cdl-ab-101-l02",
      "title": "Dual Air Brake Systems and Inspection",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-ab-101-l02-c1",
          "title": "Dual Air Brake System Design",
          "content": "Modern trucks use dual air brake systems for safety redundancy. [Visual Prompt: Schematic diagram showing two independent brake circuits — primary (rear brakes) and secondary (front brakes/trailer) — each with its own air tank, with a tractor protection valve and trailer supply valve labeled.] The primary system operates the rear axle brakes. The secondary system operates the front axle brakes and possibly the trailer brakes. Each system has its own air tank, lines, and components. If one system fails (leak, line break), the other system still provides partial braking. The low air pressure warning activator must come on before pressure drops below 60 psi. Most systems have both a warning light and an audible buzzer. The tractor protection valve automatically disconnects the trailer air supply if tractor air pressure gets too low, preventing the trailer from draining all the tractor's air."
        },
        {
          "id": "cdl-ab-101-l02-c2",
          "title": "Air Brake Inspection Procedures",
          "content": "A thorough air brake inspection is critical and tested during the CDL skills test. [Visual Prompt: Step-by-step checklist overlaid on a truck undercarriage showing inspection points: brake chambers, hoses, slack adjusters, drums, brake linings, and air lines.] Check brake drums/rotors for cracks, excessive wear, or contamination (oil or grease on braking surfaces). Inspect brake linings — minimum thickness is usually 1/4 inch, and they should be evenly worn. Check brake hoses and tubing for cracks, bulges, or signs of wear from rubbing. Inspect brake chambers for air leaks — listen for hissing sounds with brakes applied. Check slack adjusters for proper angle (approximately 90 degrees when brakes are applied). Look for air line connections that are secure and not leaking. Check for missing or loose parts. Inspect spring brake chambers for damage or cracks in the housing."
        },
        {
          "id": "cdl-ab-101-l02-c3",
          "title": "Critical Air Brake Tests",
          "content": "You must perform and pass these tests during the CDL skills exam. [Visual Prompt: Dashboard air gauge showing pressure readings for each test, with pass/fail thresholds clearly marked in green and red zones.] Test 1 — Air Leakage Rate: With a fully charged system (125 psi), turn off the engine, release the parking brake, and apply full foot brake. Air loss should not exceed 3 psi per minute for single vehicles or 4 psi per minute for combination vehicles. Test 2 — Low Pressure Warning: With the engine off, pump the brake pedal repeatedly to reduce air pressure. The low-pressure warning light and buzzer must activate before pressure drops below 60 psi. Test 3 — Spring Brake Activation: Continue pumping. The parking brake valve (tractor protection valve on combination vehicles) must pop out between 20-45 psi. Test 4 — Air Pressure Build-Up: Start the engine. Air pressure should build from 85 to 100 psi within 45 seconds. If any test fails, the vehicle must not be driven."
        }
      ],
      "flashcards": [
        { "id": "cdl-ab-101-l02-f1", "front": "What is the maximum allowable air loss rate for a combination vehicle with brakes applied?", "back": "4 psi per minute (3 psi for a single vehicle)." },
        { "id": "cdl-ab-101-l02-f2", "front": "At what pressure must the low air pressure warning activate?", "back": "Before pressure drops below 60 psi." },
        { "id": "cdl-ab-101-l02-f3", "front": "How quickly should air pressure build from 85 to 100 psi?", "back": "Within 45 seconds with the engine at operating RPM." },
        { "id": "cdl-ab-101-l02-f4", "front": "What does the tractor protection valve do?", "back": "It automatically disconnects the trailer air supply if tractor air pressure drops too low, preventing the trailer from draining all the tractor's air." }
      ]
    },
    {
      "id": "cdl-ab-101-l03",
      "title": "Using Air Brakes and Preventing Failures",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-ab-101-l03-c1",
          "title": "Proper Braking Technique",
          "content": "Air brakes have a slight delay compared to hydraulic brakes — called brake lag. [Visual Prompt: Timeline showing brake application sequence: foot presses pedal (0 sec) → air travels through lines (0.4 sec brake lag) → brakes begin to apply (0.4 sec) → full braking force (0.7-1.0 sec total), compared to hydraulic brakes with near-instant response.] Brake lag is the time it takes for air to travel through the lines to the brake chambers — typically 0.4 seconds. This means you need more following distance with air brakes. At 55 mph, brake lag adds about 32 feet to your stopping distance. For controlled braking, apply the brakes as hard as you can without locking the wheels. If wheels lock, release the brake pedal, let them roll, and re-apply with less pressure. Many modern trucks have ABS (Anti-lock Braking Systems), which automatically prevent wheel lockup. With ABS, apply steady brake pressure and let the system work — do not pump the brakes."
        },
        {
          "id": "cdl-ab-101-l03-c2",
          "title": "Brake Fade and Downgrade Braking",
          "content": "Brake fade is the number one cause of runaway trucks on downgrades. [Visual Prompt: Temperature gauge showing brake drum temperature rising from 200°F (normal) through 500°F (reduced effectiveness) to 800°F+ (brake fade - critical failure), with color gradient from green to red.] Brake fade occurs when brakes overheat from excessive use. As drum brakes heat up, the drums expand away from the shoes, requiring more air pressure to achieve the same braking force. Eventually, even full air pressure cannot push the shoes firmly enough against the expanded drums. Prevention: use the correct gear BEFORE descending a grade. The proper technique is the snub braking method — apply brakes to reduce speed by 5 mph below your target speed, then release completely to let brakes cool, then repeat. Never ride the brakes continuously. If you smell brakes or see smoke, stop immediately and let them cool. Know the location of runaway truck ramps and do not hesitate to use them."
        },
        {
          "id": "cdl-ab-101-l03-c3",
          "title": "Jackknifing and Loss of Control",
          "content": "Jackknifing occurs when drive wheels lose traction and the rear of the tractor swings out. [Visual Prompt: Aerial diagram showing three stages of a jackknife: (1) tractor and trailer aligned, (2) drive wheels skid, tractor begins to swing, (3) full jackknife with tractor at 90 degrees to trailer, with correction arrows showing steering into the skid.] Most jackknife situations are caused by braking on slippery surfaces, taking curves too fast, or over-acceleration. Drive wheels skid first because they have the greatest braking force. Once the tractor starts to swing, the trailer pushes it further around. To recover: immediately release the brake pedal, do not use the trailer hand valve (this can make it worse), and steer in the direction of the skid. Prevention is key: reduce speed before curves, use gentle braking on slippery roads, and avoid sudden steering inputs. ABS helps prevent jackknifing but does not eliminate the risk entirely."
        }
      ],
      "flashcards": [
        { "id": "cdl-ab-101-l03-f1", "front": "What is brake lag and how long does it typically last?", "back": "Brake lag is the delay for air to travel from the foot valve to the brakes. It typically takes about 0.4 seconds." },
        { "id": "cdl-ab-101-l03-f2", "front": "What is the snub braking method?", "back": "Apply brakes to reduce speed by 5 mph below target, release completely to let brakes cool, then repeat. Used on long downgrades." },
        { "id": "cdl-ab-101-l03-f3", "front": "What causes jackknifing?", "back": "Drive wheels losing traction — usually from braking on slippery surfaces, excessive speed in curves, or over-acceleration." },
        { "id": "cdl-ab-101-l03-f4", "front": "With ABS, should you pump the brake pedal?", "back": "No. Apply steady brake pressure and let the ABS system prevent wheel lockup automatically." }
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
          "title": "Air Brakes Practice Test",
          "content": "This practice exam simulates the CDL Air Brakes knowledge test. The real exam typically has 25 multiple-choice questions and you need 80% (20 correct) to pass. If you fail this endorsement, you will receive an Air Brake Restriction on your CDL, meaning you cannot drive any vehicle equipped with air brakes. Topics covered: system components, dual systems, inspection procedures, proper use, emergency situations, and the four critical air brake tests. Review the air brake system diagram before starting — many questions reference specific components and their functions."
        }
      ],
      "flashcards": []
    }
  ]
};
