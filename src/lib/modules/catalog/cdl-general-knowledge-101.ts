import type { LearningModule } from "@/lib/modules/types";

export const cdl_general_knowledge_101_Module: LearningModule = {
  "id": "cdl-general-knowledge-101",
  "title": "CDL General Knowledge",
  "description": "Master the General Knowledge section of the CDL exam — the foundation every commercial driver must pass regardless of license class (A, B, or C). Covers vehicle inspection, basic control, safe driving, transporting cargo, hazardous conditions, emergency procedures, and FMCSA regulations. Based on the official FMCSA CDL Manual used by all 50 states.",
  "subject": "CDL",
  "tags": [
    "core",
    "curriculum",
    "cdl",
    "trades",
    "exam-prep",
    "general-knowledge"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en",
    "es"
  ],
  "thumbnail": "/assets/cdl/cab-dashboard.png",
  "learningObjectives": [
    "Demonstrate the seven-step CDL pre-trip vehicle inspection process",
    "Apply fundamental vehicle control techniques for starting, stopping, turning, and backing",
    "Implement safe driving strategies for speed and space management in varied conditions",
    "Explain and apply FMCSA cargo securement rules, including weight distribution and tie-down requirements",
    "Describe proper procedures for driving in hazardous conditions like rain, ice, fog, and mountains",
    "Recognize and respond appropriately to common driving emergencies",
    "Comply with FMCSA Hours of Service (HOS) and Drug & Alcohol regulations",
    "Interpret road signs, signals, and pavement markings, including those specific to commercial vehicles",
    "Understand procedures for safely navigating railroad-highway grade crossings"
  ],
  "lessons": [
    {
      "id": "cdl-gk-101-l01",
      "title": "The Pre-Trip Vehicle Inspection",
      "type": "video",
      "duration": 18,
      "chunks": [
        {
          "id": "cdl-gk-101-l01-c1",
          "title": "Why Inspect? The Seven-Step Method",
          "content": "A thorough pre-trip inspection is your first line of defense and a federal requirement (FMCSR §392.7). It protects you, the public, and your cargo. A failed roadside inspection can result in fines, out-of-service orders, and points against your safety record. We'll use a systematic seven-step method, the same one used in the CDL skills test. [Visual Prompt: A driver holding a clipboard next to a truck, with a circular arrow graphic showing the 7 steps: Vehicle Overview, Engine Compartment, In-Cab & Safe Start, Walk-Around, Coupling System, Trailer, and Brake Test.] This ensures you check everything in a logical order and don't miss critical components."
        },
        {
          "id": "cdl-gk-101-l01-c2",
          "title": "Step 2: Engine Compartment",
          "content": "With the parking brakes set and wheels chocked, open the hood. [Visual Prompt: A clean, labeled diagram of a commercial truck engine compartment. Highlighted items: oil dipstick, coolant reservoir, power steering fluid reservoir, alternator, air compressor, belts, and hoses.] Check fluid levels: engine oil, coolant, and power steering fluid. Inspect all belts for tightness (no more than 3/4 inch of play), cracks, or fraying. Check hoses for leaks, bulges, or damage. Ensure the air compressor and alternator are securely mounted and not leaking. Look for any loose wiring or signs of fluid leaks on the ground beneath the engine."
        },
        {
          "id": "cdl-gk-101-l01-c3",
          "title": "Step 3: In-Cab Inspection and Safe Start",
          "content": "Inside the cab, ensure your seatbelt is secure and the vehicle is in neutral. [Visual Prompt: A driver's view of a truck dashboard with key gauges and controls highlighted: oil pressure, water temperature, ammeter/voltmeter, air pressure gauges, and safety equipment like fire extinguisher and triangles.] Start the engine and check that the oil pressure gauge shows rising pressure. Check the ammeter/voltmeter for a normal reading (12-14 volts). Verify that both air pressure gauges build to their cutout pressure (around 120-125 psi). Test your horn, windshield wipers, and all lights (headlights, high beams, turn signals, 4-way flashers). Check for safety equipment: a fully charged fire extinguisher, spare fuses, and three reflective triangles."
        },
        {
          "id": "cdl-gk-101-l01-c4",
          "title": "Step 4: The Walk-Around (Tires, Wheels, Brakes, Suspension)",
          "content": "The walk-around covers the entire exterior. [Visual Prompt: Close-up shot of a truck wheel assembly. Callouts point to the tire tread, sidewall, lug nuts, brake drum, and slack adjuster.] For every tire, check for proper inflation, even wear, and a minimum tread depth of 4/32 inch on steer tires and 2/32 inch on all others. Inspect wheels for cracks or illegal welds. Check that all lug nuts are present and tight, looking for rust trails. Inspect brake components: drums or rotors for cracks, and linings for a minimum thickness of 1/4 inch. Check slack adjusters; with brakes released, they should not move more than 1 inch when pulled by hand. Look at suspension parts like leaf springs, checking for cracks or missing leaves."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l01-f1",
          "front": "What is the minimum legal tread depth for a front steer tire?",
          "back": "4/32 of an inch."
        },
        {
          "id": "cdl-gk-101-l01-f2",
          "front": "During an in-cab inspection, what is the typical cutout pressure for the air compressor?",
          "back": "Approximately 120-125 psi."
        },
        {
          "id": "cdl-gk-101-l01-f3",
          "front": "How much play should a slack adjuster have when the brakes are released?",
          "back": "No more than about 1 inch when pulled by hand."
        },
        {
          "id": "cdl-gk-101-l01-f4",
          "front": "What three pieces of emergency equipment must be in your vehicle?",
          "back": "A properly rated and charged fire extinguisher, spare fuses (unless equipped with circuit breakers), and three reflective triangles."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l02",
      "title": "Basic Vehicle Control",
      "type": "video",
      "duration": 10,
      "chunks": [
        {
          "id": "cdl-gk-101-l02-c1",
          "title": "Starting, Steering, and Stopping",
          "content": "Controlling a large vehicle requires smooth, deliberate actions. When accelerating, do so smoothly to avoid mechanical damage and cargo shifts. When steering, use both hands and make turns slowly and correctly. [Visual Prompt: Animation showing hand-over-hand steering for a sharp turn and shuffle steering for slight curves.] Stopping a heavy vehicle requires planning. Brake smoothly and early. Avoid 'stabbing' the brakes, which can be unsettling for the vehicle and cargo. Always look far ahead to anticipate stops."
        },
        {
          "id": "cdl-gk-101-l02-c2",
          "title": "Turning and Off-Tracking",
          "content": "Large vehicles have significant 'off-tracking,' where the rear wheels follow a shorter path than the front wheels in a turn. [Visual Prompt: Overhead diagram showing a tractor-trailer making a right turn. The path of the front steer tires is shown in blue, and the shorter, tighter path of the rear trailer tires is shown in red, highlighting the off-tracking space.] To manage this, you must use the correct turning technique. For a right turn, keep the front of your vehicle in the middle of the intersection before starting your turn (a 'button hook' turn). For a left turn, ensure you reach the center of the intersection before turning to avoid cutting off other drivers."
        },
        {
          "id": "cdl-gk-101-l02-c3",
          "title": "Backing Safely: G.O.A.L.",
          "content": "Backing is one of the most dangerous maneuvers. Before you back, remember the acronym G.O.A.L.: Get Out And Look. [Visual Prompt: A driver is shown getting out of the cab, walking a full circle around the truck and trailer, and then using a spotter with agreed-upon hand signals during the backing maneuver.] Walk completely around your vehicle to check for overhead and side clearance, obstacles, and people. If possible, use a reliable spotter and agree on hand signals before you start. Back slowly, use your mirrors constantly, and don't be afraid to pull forward to correct your position. If you lose sight of your spotter, stop immediately."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l02-f1",
          "front": "What is 'off-tracking'?",
          "back": "The tendency of the rear wheels to follow a shorter path than the front wheels during a turn."
        },
        {
          "id": "cdl-gk-101-l02-f2",
          "front": "What does the acronym G.O.A.L. stand for in backing?",
          "back": "Get Out And Look. It's the most important rule for safe backing."
        },
        {
          "id": "cdl-gk-101-l02-f3",
          "front": "When making a right turn, why should you avoid turning too early?",
          "back": "To prevent your rear wheels from hitting the curb, a pole, or other objects due to off-tracking."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l03",
      "title": "Driving Safely: Speed and Space Management",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-gk-101-l03-c1",
          "title": "Seeing Hazards: The 12-15 Second Rule",
          "content": "Safe driving is proactive, not reactive. You must see hazards before they become emergencies. The rule is to look ahead 12-15 seconds. [Visual Prompt: A driver's point-of-view on a highway. A transparent overlay highlights the road ahead, with a marker at the 1/4 mile point labeled '12-15 seconds at highway speed'.] At highway speeds, this is about a quarter of a mile. This gives you time to identify potential problems like brake lights, merging traffic, or road obstructions and plan your response. Constantly scan your mirrors to know what is happening around and behind you."
        },
        {
          "id": "cdl-gk-101-l03-c2",
          "title": "Managing Space: Following Distance and Blind Spots",
          "content": "Space is your best defense. For following distance, use this formula: 1 second for every 10 feet of vehicle length, plus an additional second for speeds over 40 mph. For a typical 60-foot rig, this means at least 7 seconds. Double this in bad weather. [Visual Prompt: Bird's-eye diagram of a semi-truck showing the four large 'No-Zones' (blind spots) colored in red: 20 feet in front, 200 feet in back, one lane to the left, and two lanes to the right.] Be aware of your massive blind spots, or 'No-Zones.' The largest is on your right side. Always signal early, check your mirrors, and make a physical head check (lean forward) before changing lanes or turning."
        },
        {
          "id": "cdl-gk-101-l03-c3",
          "title": "Managing Speed: Curves, Grades, and Slippery Surfaces",
          "content": "Posted speed limits are for cars, not 80,000-pound trucks. The #1 cause of rollovers is excessive speed in a curve or on a ramp. Slow down before you enter the curve. On long downgrades, use the engine's braking power. [Visual Prompt: A side-view animation of a truck on a steep downgrade. It shows the driver downshifting *before* the grade, then using intermittent 'snub braking' (5 mph reduction, then release) instead of riding the brakes.] Select a gear low enough to maintain a safe speed without constant braking. This prevents brake fade, a dangerous loss of stopping power from overheating. On slippery surfaces, reduce speed by 1/3 on wet roads and by 1/2 or more on snow and ice."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l03-f1",
          "front": "How far ahead should you be looking while driving on the highway?",
          "back": "12 to 15 seconds, which is about a quarter of a mile at highway speeds."
        },
        {
          "id": "cdl-gk-101-l03-f2",
          "front": "What is brake fade and how do you prevent it on a long downgrade?",
          "back": "Brake fade is the loss of braking power due to overheating. Prevent it by using a low gear for engine braking and applying brakes intermittently (snub braking)."
        },
        {
          "id": "cdl-gk-101-l03-f3",
          "front": "Which side of a commercial truck has the largest blind spot?",
          "back": "The right side, which can extend out two full lanes."
        },
        {
          "id": "cdl-gk-101-l03-f4",
          "front": "What is the minimum following distance for a 60-foot truck at 55 mph?",
          "back": "At least 7 seconds (1 second per 10 feet of vehicle, plus 1 second for speed over 40 mph)."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l04",
      "title": "Transporting Cargo Safely",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-gk-101-l04-c1",
          "title": "Weight Distribution and Center of Gravity",
          "content": "Proper loading is critical for vehicle stability. [Visual Prompt: Side-view diagram of a trailer showing three loading scenarios: correctly centered cargo (green checkmark), top-heavy cargo (red X with a rollover warning icon), and front-heavy cargo (red X with a steering difficulty icon).] Keep the cargo's center of gravity as low and as centered as possible. A high center of gravity dramatically increases the risk of rollover. Distribute weight evenly to comply with legal axle weight limits (e.g., 12,000 lbs on steers, 34,000 lbs on tandems) and prevent handling problems. The gross vehicle weight limit on most interstate highways is 80,000 lbs."
        },
        {
          "id": "cdl-gk-101-l04-c2",
          "title": "Cargo Securement Rules",
          "content": "You are responsible for your cargo, even if you didn't load it. The FMCSA requires cargo to be secured to prevent shifting, falling, or leaking. [Visual Prompt: A flatbed trailer with a load of concrete pipes. Callouts point to the minimum number of tie-downs required, proper use of straps, and edge protectors to prevent strap damage.] The aggregate working load limit (WLL) of your tie-downs must be at least half the weight of the cargo. You need at least two tie-downs for cargo longer than 5 feet, and one additional tie-down for every 10 feet of cargo length beyond the first 10 feet."
        },
        {
          "id": "cdl-gk-101-l04-c3",
          "title": "Inspecting Cargo During Transit",
          "content": "Cargo can shift and tie-downs can loosen. Federal rules require you to inspect your cargo and securement devices within the first 50 miles of a trip. [Visual Prompt: A driver pulled over at a safe rest area, walking around the trailer and physically checking the tension of the cargo straps.] After the initial check, you must re-inspect your cargo whenever you make a change of duty status, or every 3 hours or 150 miles, whichever comes first. If you are hauling sealed cargo, you can't inspect it directly, but you are still responsible for knowing it is not overloaded and for sensing any shifts in the load through how the vehicle handles."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l04-f1",
          "front": "How often must you inspect your cargo during a trip?",
          "back": "Within the first 50 miles, and then every 3 hours or 150 miles (whichever comes first), or when you change duty status."
        },
        {
          "id": "cdl-gk-101-l04-f2",
          "front": "What is the maximum gross vehicle weight on most U.S. Interstate highways without a special permit?",
          "back": "80,000 pounds."
        },
        {
          "id": "cdl-gk-101-l04-f3",
          "front": "The total strength (aggregate WLL) of your tie-downs must be at least what percentage of the cargo's weight?",
          "back": "50 percent."
        },
        {
          "id": "cdl-gk-101-l04-f4",
          "front": "Why is a high center of gravity dangerous?",
          "back": "It makes the vehicle less stable and significantly increases the risk of rolling over, especially in curves or during sudden maneuvers."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l05",
      "title": "Hazardous Conditions and Emergencies",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-gk-101-l05-c1",
          "title": "Driving in Hazardous Weather",
          "content": "Adverse weather demands extra caution. [Visual Prompt: Four-panel illustration showing a truck in: 1) Rain with a 'Hydroplaning Risk' warning, 2) Snow with a 'Reduced Traction' warning, 3) Fog with a 'Low Visibility' warning, and 4) Crosswinds with a 'Trailer Sway' warning.] In heavy rain, reduce speed by 1/3. In snow or ice, reduce speed by 1/2 or more and increase following distance dramatically. Use low-beam headlights in fog; high beams will reflect off the fog and worsen visibility. In strong crosswinds, be prepared for sudden gusts, especially when coming out from under an overpass. If conditions become unsafe, pull over and wait."
        },
        {
          "id": "cdl-gk-101-l05-c2",
          "title": "Railroad-Highway Crossings",
          "content": "Never take chances at a railroad crossing. A loaded truck can take 14 seconds or more to cross a double track. [Visual Prompt: Diagram of a railroad crossing showing a truck stopped no closer than 15 feet and no farther than 50 feet from the nearest rail. A callout explains the difference between a passive crossing (signs only) and an active crossing (lights and gates).] Know that some vehicles, like those carrying passengers or placarded hazardous materials, MUST stop at all crossings. If you get stuck on the tracks, get out of the vehicle immediately, move away from the tracks in the direction the train is coming from, and call 911 or the emergency number posted at the crossing."
        },
        {
          "id": "cdl-gk-101-l05-c3",
          "title": "Emergency Maneuvers and Procedures",
          "content": "Knowing what to do in an emergency can save your life. [Visual Prompt: A decision flowchart for a steer tire blowout: '1. Grip Wheel Firmly -> 2. Do NOT Brake -> 3. Stay Off Accelerator -> 4. Slow Down Gradually -> 5. Pull Off Road Safely.'] For a tire blowout, hold the steering wheel firmly and do not brake hard. For brake failure, downshift, apply the parking brake gently, and look for an escape route like a runaway truck ramp. In a skid, stop braking and turn the wheel in the direction you want the vehicle to go. After any emergency stop on the roadside, activate your 4-way flashers and set out your reflective triangles within 10 minutes: one 100 feet behind, one 200 feet behind, and one within 10 feet of the rear of the vehicle."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l05-f1",
          "front": "What is the proper procedure for a steer tire blowout?",
          "back": "Grip the steering wheel firmly, do not brake, let the vehicle slow down on its own, and then pull over safely."
        },
        {
          "id": "cdl-gk-101-l05-f2",
          "front": "How far from a railroad track should you stop?",
          "back": "No closer than 15 feet and no farther than 50 feet."
        },
        {
          "id": "cdl-gk-101-l05-f3",
          "front": "Where should you place reflective triangles after an emergency stop on a two-lane road?",
          "back": "One 10 feet from the rear, one 100 feet from the rear, and one 100 feet from the front of the vehicle."
        },
        {
          "id": "cdl-gk-101-l05-f4",
          "front": "What type of headlights should you use in fog and why?",
          "back": "Low-beam headlights. High beams reflect off the moisture in the fog, reducing your visibility even more."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l06",
      "title": "FMCSA Regulations and Driver Wellness",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-gk-101-l06-c1",
          "title": "Hours of Service (HOS) Rules",
          "content": "HOS rules are designed to prevent fatigued driving. For property-carrying drivers, the key limits are: [Visual Prompt: An infographic timeline of a 24-hour day with color-coded blocks representing the main HOS rules: 11-Hour Driving Limit, 14-Hour On-Duty Window, 10-Hour Off-Duty Requirement, and 30-Minute Break.] You may drive a maximum of 11 hours after 10 consecutive hours off duty. You may not drive beyond the 14th consecutive hour after coming on duty. You must take a 30-minute break after 8 hours of driving time. You also have a 60-hour/7-day or 70-hour/8-day limit, which can be reset by a 34-hour restart."
        },
        {
          "id": "cdl-gk-101-l06-c2",
          "title": "Logbooks and Electronic Logging Devices (ELDs)",
          "content": "Your Record of Duty Status (RODS), or logbook, tracks your compliance with HOS. Most drivers are now required to use an Electronic Logging Device (ELD). [Visual Prompt: A close-up photo of an ELD screen on a truck's dashboard, showing the four main duty statuses: Off Duty, Sleeper Berth, Driving, and On-Duty Not Driving.] The ELD automatically records driving time. You are responsible for manually selecting your non-driving duty statuses and certifying your logs each day. You must be able to explain your logs to a roadside inspector and have the required supporting documents, such as fuel receipts and bills of lading."
        },
        {
          "id": "cdl-gk-101-l06-c3",
          "title": "Drug and Alcohol Regulations",
          "content": "The FMCSA has a zero-tolerance policy for drug and alcohol use. [Visual Prompt: A split infographic. Left side shows a beer bottle with a red circle and slash, labeled 'Illegal to consume alcohol within 4 hours of duty.' Right side shows a BAC meter with 0.04% highlighted as the 'CDL Disqualification' limit.] The blood alcohol concentration (BAC) limit for CDL holders is 0.04%. Any detectable amount means you will be put out-of-service for 24 hours. Refusing a test is the same as failing it. A first offense DUI or positive drug test in a CMV results in a 1-year CDL disqualification; a second offense results in a lifetime ban."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-gk-101-l06-f1",
          "front": "What are the 11-hour and 14-hour rules for property-carrying drivers?",
          "back": "You can drive a maximum of 11 hours within a 14-hour window after coming on duty."
        },
        {
          "id": "cdl-gk-101-l06-f2",
          "front": "What is the legal Blood Alcohol Concentration (BAC) limit for a CDL driver on duty?",
          "back": "0.04%. Any detectable amount (e.g., 0.02%) will result in a 24-hour out-of-service order."
        },
        {
          "id": "cdl-gk-101-l06-f3",
          "front": "How many consecutive hours off duty are required to reset your 60/70-hour clock?",
          "back": "A minimum of 34 consecutive hours off duty."
        },
        {
          "id": "cdl-gk-101-l06-f4",
          "front": "What happens if a CDL driver refuses to take a required drug or alcohol test?",
          "back": "The refusal is treated as a positive test result, leading to immediate CDL disqualification."
        }
      ]
    },
    {
      "id": "cdl-gk-101-l07",
      "title": "CDL General Knowledge Practice Exam",
      "type": "quiz",
      "duration": 30,
      "chunks": [
        {
          "id": "cdl-gk-101-l07-c1",
          "title": "Test Your Knowledge",
          "content": "This practice exam is designed to simulate the official state CDL General Knowledge test. The real exam typically consists of 50 multiple-choice questions, and you must score at least 80% (40 correct answers) to pass. [Visual Prompt: A sample multiple-choice question on a computer screen, formatted like a DMV test, with four answer options.] The questions cover all topics from the previous lessons: vehicle inspection, safe driving, cargo, regulations, and emergencies. Read each question and all possible answers carefully before selecting the best one. Use this as an opportunity to identify any areas where you need more review before taking the official exam."
        }
      ],
      "flashcards": []
    }
  ]
};
