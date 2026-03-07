import type { LearningModule } from "@/lib/modules/types";

export const cdl_eldt_theory_101_Module: LearningModule = {
  "id": "cdl-eldt-theory-101",
  "title": "CDL ELDT Theory Training Guide",
  "description": "A comprehensive guide to the Entry-Level Driver Training (ELDT) theory curriculum, mandated by the FMCSA for all new CDL applicants. This module covers all required theory topics, preparing you for the certification needed to take your CDL skills test.",
  "subject": "CDL",
  "tags": [
    "core",
    "curriculum",
    "cdl",
    "trades",
    "eldt",
    "fmcsa",
    "entry-level"
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
    "Understand all FMCSA-required ELDT theory topics.",
    "Learn federal driver qualification requirements, including medical standards and disqualifications.",
    "Master the vehicle systems, inspection procedures, and basic controls of a commercial motor vehicle.",
    "Grasp safe driving principles, hazard perception, and advanced operational tactics.",
    "Comprehend Hours of Service (HOS) regulations and the use of Electronic Logging Devices (ELDs).",
    "Successfully prepare for the ELDT theory assessment to qualify for the CDL skills test."
  ],
  "lessons": [
    {
      "id": "cdl-eldt-101-l01",
      "title": "Introduction to ELDT & Driver Qualifications",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-eldt-101-l01-c1",
          "title": "What is ELDT and Why It Matters",
          "content": "Entry-Level Driver Training (ELDT) is a federal safety standard that all new CDL applicants must meet. Before ELDT, training requirements varied by state. Now, you must complete a specific theory and behind-the-wheel curriculum from a provider listed on the FMCSA's Training Provider Registry (TPR). Your provider reports your completion to the TPR, which your state DMV will check before you can take your CDL skills test. This ensures every new driver has the same baseline knowledge and skills.",
          "visualPrompts": [
            "Animation showing a timeline pre- and post-February 2022.",
            "Graphic of a certificate being uploaded to the FMCSA Training Provider Registry (TPR) database.",
            "Flowchart: Student -> Training Provider -> TPR -> DMV -> CDL Skills Test."
          ]
        },
        {
          "id": "cdl-eldt-101-l01-c2",
          "title": "Who Needs ELDT?",
          "content": "ELDT is required if you are: (1) Getting a Class A or Class B CDL for the first time. (2) Upgrading an existing Class B CDL to a Class A CDL. (3) Getting a School Bus (S), Passenger (P), or Hazardous Materials (H) endorsement for the first time. It is NOT required for CDL renewals or for adding endorsements like Tanker (N) or Doubles/Triples (T).",
          "visualPrompts": [
            "Side-by-side images of a Class A truck, Class B truck, School Bus, and Passenger Bus with checkmarks.",
            "Image of a tanker truck with an 'X' mark for ELDT requirement (for the endorsement only)."
          ]
        },
        {
          "id": "cdl-eldt-101-l01-c3",
          "title": "Federal Driver Qualification Rules",
          "content": "To drive a Commercial Motor Vehicle (CMV) across state lines (interstate), you must: (1) Be at least 21 years old. (2) Pass a DOT physical exam and carry a valid medical certificate. (3) Be able to read and speak English. (4) Have a valid, non-CDL driver's license from one state only. (5) Pass required background checks and a pre-employment drug test. Certain medical conditions or criminal offenses, like a DUI in a CMV, can disqualify you from driving.",
          "visualPrompts": [
            "Graphic showing a map of the USA with arrows crossing state lines, labeled 'Interstate - 21+'.",
            "Image of a DOT medical certificate.",
            "Icon array representing vision, hearing, and blood pressure tests."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l01-f1",
          "front": "What does ELDT stand for?",
          "back": "Entry-Level Driver Training. It's a federal requirement for new CDL applicants."
        },
        {
          "id": "cdl-eldt-101-l01-f2",
          "front": "What is the TPR?",
          "back": "The Training Provider Registry. An FMCSA database where approved schools report your training completion."
        },
        {
          "id": "cdl-eldt-101-l01-f3",
          "front": "What is the minimum age for driving a CMV interstate?",
          "back": "21 years old."
        },
        {
          "id": "cdl-eldt-101-l01-f4",
          "front": "How often must most drivers renew their DOT medical certificate?",
          "back": "Every 24 months (2 years), unless a medical condition requires more frequent monitoring."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l02",
      "title": "Vehicle Systems & Maintenance",
      "type": "video",
      "duration": 18,
      "chunks": [
        {
          "id": "cdl-eldt-101-l02-c1",
          "title": "Engine & Drivetrain",
          "content": "Most CMVs use diesel engines, which use high compression to ignite fuel. Key parts include the turbocharger (forces more air in for more power) and exhaust aftertreatment systems (like DPF and DEF) to reduce pollution. The drivetrain transfers power from the engine to the wheels. It includes the clutch, transmission, driveshaft, and drive axles. You must know how to select the right gear for the terrain and speed.",
          "visualPrompts": [
            "Animated cutaway of a diesel engine showing compression ignition.",
            "Diagram showing the flow of power: Engine -> Clutch -> Transmission -> Driveshaft -> Axles -> Wheels.",
            "Image of a multi-speed shifter knob (e.g., 10-speed)."
          ]
        },
        {
          "id": "cdl-eldt-101-l02-c2",
          "title": "Braking Systems",
          "content": "Most heavy vehicles use air brakes, which use compressed air to stop the vehicle. Key components are the air compressor, air tanks, brake chambers, slack adjusters, and brake drums or discs. You must know how to check for leaks, drain air tanks to remove water and oil, and test the low-air warning devices. A leak in the air brake system is a serious safety defect.",
          "visualPrompts": [
            "Animated diagram of a complete air brake system, showing air flowing from the compressor to the brake chambers.",
            "Close-up shot of a driver draining an air tank using the drain valve.",
            "Image of the air pressure gauges on the dashboard."
          ]
        },
        {
          "id": "cdl-eldt-101-l02-c3",
          "title": "Tires, Wheels & Suspension",
          "content": "Tires are your only connection to the road. You must check for proper inflation, adequate tread depth (minimum 4/32-inch on steer tires, 2/32-inch on all others), and damage like cuts or bulges. Wheels must be checked for cracks and loose lug nuts (look for rust trails). The suspension system (leaf springs, air bags, shock absorbers) supports the load and absorbs bumps. Check for broken leaves, leaking air bags, or leaking shocks.",
          "visualPrompts": [
            "Graphic comparing a new tire tread to a worn tire, with a tread depth gauge.",
            "Close-up image of rust trails coming from a lug nut, indicating looseness.",
            "Side-by-side images of a healthy leaf spring and a broken one."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l02-f1",
          "front": "What is the minimum legal tread depth for a front steer tire?",
          "back": "4/32 of an inch."
        },
        {
          "id": "cdl-eldt-101-l02-f2",
          "front": "What do rust trails around lug nuts indicate?",
          "back": "The lug nuts may be loose, which is a dangerous condition."
        },
        {
          "id": "cdl-eldt-101-l02-f3",
          "front": "Why must you drain your air tanks regularly?",
          "back": "To remove water and compressor oil, which can freeze in cold weather and cause brake failure."
        },
        {
          "id": "cdl-eldt-101-l02-f4",
          "front": "Are retreaded tires allowed on the steer axle?",
          "back": "No. Retreaded or recapped tires are prohibited on the front (steer) wheels of a truck or bus."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l03",
      "title": "Vehicle Inspections",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-eldt-101-l03-c1",
          "title": "The Three Types of Inspection",
          "content": "As a professional driver, you are required to inspect your vehicle regularly. There are three types of inspections: (1) Pre-Trip Inspection: A thorough check before you drive to ensure the vehicle is safe. (2) En-Route Inspection: Monitoring your vehicle while driving (checking gauges, looking, listening, smelling) and during stops. (3) Post-Trip Inspection: A check at the end of your trip to find any problems so they can be fixed before the next trip. You must complete a daily written report (DVIR).",
          "visualPrompts": [
            "Split screen showing a driver with a checklist in the morning, glancing at mirrors on the road, and filling out a form at night.",
            "Image of a Driver Vehicle Inspection Report (DVIR)."
          ]
        },
        {
          "id": "cdl-eldt-101-l03-c2",
          "title": "The 7-Step Inspection Method",
          "content": "A systematic approach ensures you don't miss anything. The 7-step method is a common and effective process: Step 1: Vehicle Overview (approach and look for leaks/damage). Step 2: Engine Compartment (check fluids, belts, hoses). Step 3: Start Engine and Check Cab (gauges, lights, safety equipment). Step 4: Turn Off Engine and Check Lights. Step 5: Walk-Around Inspection (tires, wheels, brakes, suspension, coupling). Step 6: Check Signal Lights. Step 7: Start Engine and Check Brakes (test parking and service brakes).",
          "visualPrompts": [
            "Graphic showing a truck with numbers 1-7 pointing to different areas, corresponding to the inspection steps.",
            "Short video clips showing a driver performing each of the 7 steps in order."
          ]
        },
        {
          "id": "cdl-eldt-101-l03-c3",
          "title": "What to Look For: Critical Items",
          "content": "During your inspection, pay close attention to critical safety items. Tires: inflation, tread, damage. Brakes: air leaks, worn parts, slack adjuster travel. Steering: loose or damaged components. Suspension: broken springs, leaking shocks. Lights and Reflectors: all must be clean and working. Coupling System: secure connection, no damage to fifth wheel or pintle hook. Emergency Equipment: fire extinguisher, spare fuses, warning triangles.",
          "visualPrompts": [
            "A checklist overlay on the screen with icons for each critical item.",
            "Close-up shots of a driver checking brake adjustment, steering linkage, and emergency equipment."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l03-f1",
          "front": "What is a DVIR?",
          "back": "A Driver Vehicle Inspection Report. A written report you must complete at the end of each driving day."
        },
        {
          "id": "cdl-eldt-101-l03-f2",
          "front": "What is the first step of the 7-step inspection method?",
          "back": "Step 1: Vehicle Overview. Approaching the vehicle to look for general problems like leaks or damage."
        },
        {
          "id": "cdl-eldt-101-l03-f3",
          "front": "What three pieces of emergency equipment must be in your vehicle?",
          "back": "A properly charged fire extinguisher, spare fuses (unless equipped with circuit breakers), and three reflective warning triangles."
        },
        {
          "id": "cdl-eldt-101-l03-f4",
          "front": "During the in-cab inspection, what air brake checks must you perform?",
          "back": "Test for air leaks (applied pressure test), check the low-air warning alarm, and test the tractor/trailer protection valves."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l04",
      "title": "Basic Vehicle Control",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-eldt-101-l04-c1",
          "title": "Starting, Stopping, and Steering",
          "content": "Basic control starts with being smooth. When starting, accelerate smoothly and evenly. When stopping, brake early and gently to avoid sudden stops that can shift cargo or upset passengers. Proper steering involves holding the wheel with both hands and using the 'push-pull' or 'hand-over-hand' method. Look far enough ahead to see hazards and make steering corrections early and smoothly.",
          "visualPrompts": [
            "POV shot from the driver's seat showing smooth acceleration from a stoplight.",
            "Diagram showing the total stopping distance = perception distance + reaction distance + braking distance.",
            "Animation of correct 'push-pull' steering technique."
          ]
        },
        {
          "id": "cdl-eldt-101-l04-c2",
          "title": "Backing Safely",
          "content": "Backing is one of the most dangerous maneuvers. The most important rule is to avoid backing whenever possible. If you must back, follow these rules: Get Out and Look (G.O.A.L.) to check your path for obstacles. Back slowly. Use a reliable spotter if available. Use your mirrors on both sides and check them constantly. The driver's side is easier to see, so try to back towards the driver's side (a 'sight-side' back).",
          "visualPrompts": [
            "Video of a driver getting out of the cab and walking the path behind the truck before backing.",
            "Split-screen view showing the driver's eyes checking the left mirror, then the right mirror, repeatedly.",
            "Overhead animation comparing a 'sight-side' back to a 'blind-side' back."
          ]
        },
        {
          "id": "cdl-eldt-101-l04-c3",
          "title": "Making Turns",
          "content": "Large vehicles have significant 'off-tracking,' where the rear wheels follow a shorter path than the front wheels. For a right turn, you may need to move into the next lane to the left before starting the turn (a 'button hook' turn) to prevent your trailer from hitting the curb. For a left turn, make sure you reach the center of the intersection before you start turning to avoid cutting off other drivers.",
          "visualPrompts": [
            "Overhead diagram clearly showing the different paths of the front and rear wheels during a turn (off-tracking).",
            "Animation of a truck making a proper 'button hook' right turn.",
            "Animation of a truck making a proper left turn at a wide intersection."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l04-f1",
          "front": "What is 'off-tracking'?",
          "back": "The tendency for the rear wheels of a vehicle to follow a shorter path than the front wheels when turning."
        },
        {
          "id": "cdl-eldt-101-l04-f2",
          "front": "What does the acronym G.O.A.L. stand for in backing?",
          "back": "Get Out And Look. Always check your path for obstacles before backing up."
        },
        {
          "id": "cdl-eldt-101-l04-f3",
          "front": "Which direction is preferred when backing a trailer?",
          "back": "Backing towards the driver's side ('sight-side' backing) because it is easier to see."
        },
        {
          "id": "cdl-eldt-101-l04-f4",
          "front": "What is total stopping distance?",
          "back": "The sum of your perception distance, reaction distance, and braking distance."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l05",
      "title": "Safe Driving & Advanced Operations",
      "type": "video",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-eldt-101-l05-c1",
          "title": "Speed and Space Management",
          "content": "Managing the space around your vehicle is critical. For following distance, use the 'one second per ten feet of vehicle length, plus one extra second' rule. At highway speeds, this is often 7 seconds or more. Always maintain a space cushion on all four sides of your vehicle. Adjust your speed for conditions; the posted speed limit is for ideal conditions only. Slow down for curves, bad weather, and heavy traffic.",
          "visualPrompts": [
            "POV driving video showing a truck maintaining a safe following distance, with a timer graphic counting the seconds.",
            "Overhead graphic of a truck with a 'bubble' or 'cushion' of space around it.",
            "Image of a road sign showing a reduced speed limit for trucks on a curve."
          ]
        },
        {
          "id": "cdl-eldt-101-l05-c2",
          "title": "Hazard Perception and Communication",
          "content": "Safe driving is proactive, not reactive. Constantly scan your mirrors and the road ahead, looking 12-15 seconds down the road (about a quarter-mile on the highway). This allows you to see hazards like brake lights, merging traffic, or obstacles early. Communicate your intentions to other drivers. Signal well in advance of turns or lane changes. Use your horn with a light tap when needed, and flash your lights to alert other drivers.",
          "visualPrompts": [
            "Driver's POV video with highlighted areas showing where the driver's eyes should be scanning.",
            "Animation showing a truck signaling a lane change far in advance.",
            "Graphic illustrating the 12-15 second visual lead time on a highway."
          ]
        },
        {
          "id": "cdl-eldt-101-l05-c3",
          "title": "Extreme Driving Conditions",
          "content": "You must know how to handle adverse conditions. In rain or snow, reduce speed and increase following distance. Avoid hard braking to prevent skids. When driving in mountains, use a lower gear for both climbing and descending to prevent brake overheating. This is called 'brake fade' and can lead to total loss of braking power. If you start to skid, take your foot off the accelerator and steer in the direction you want to go.",
          "visualPrompts": [
            "Video of a truck driving safely in heavy rain with wipers on full.",
            "Diagram of a mountain road with signs indicating 'Steep Grade, Trucks Use Low Gear'.",
            "Animation showing the correct steering input to recover from a trailer skid."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l05-f1",
          "front": "How far ahead should you look while driving on the highway?",
          "back": "12 to 15 seconds, which is about a quarter of a mile at highway speeds."
        },
        {
          "id": "cdl-eldt-101-l05-f2",
          "front": "What is 'brake fade'?",
          "back": "A loss of braking power caused by brakes overheating from excessive use, especially on long downgrades."
        },
        {
          "id": "cdl-eldt-101-l05-f3",
          "front": "What is the general rule for following distance in a large truck?",
          "back": "Allow at least one second for every ten feet of vehicle length, plus an extra second for safety. (e.g., 6 seconds for a 50-foot truck)."
        },
        {
          "id": "cdl-eldt-101-l05-f4",
          "front": "If your trailer starts to skid, what should you do?",
          "back": "Release the accelerator and steer in the direction you want the vehicle to go. Do not use the trailer hand brake."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l06",
      "title": "Hours of Service & Logging",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-eldt-101-l06-c1",
          "title": "Hours of Service Rules (Property-Carrying)",
          "content": "Hours of Service (HOS) rules prevent fatigued driving. For property carriers, the main rules are: (1) 11-Hour Driving Limit: You can drive a maximum of 11 hours after 10 consecutive hours off duty. (2) 14-Hour Limit: You cannot drive after the 14th consecutive hour since starting your shift. This clock does not stop for breaks. (3) 30-Minute Break: You must take a 30-minute break after 8 hours of driving time. (4) 60/70-Hour Limit: You cannot drive after being on-duty for 60 hours in 7 days or 70 hours in 8 days. A 34-hour off-duty period can restart this clock.",
          "visualPrompts": [
            "Animated clock graphic illustrating the 14-hour on-duty window and the 11 hours of driving allowed within it.",
            "A timeline graphic showing a driver's day, including a 30-minute break before the 8-hour driving mark.",
            "Calendar graphic showing a 34-hour restart period over a weekend."
          ]
        },
        {
          "id": "cdl-eldt-101-l06-c2",
          "title": "Electronic Logging Devices (ELDs)",
          "content": "Most CMV drivers must use an Electronic Logging Device (ELD) to record their HOS. The ELD connects to the truck's engine and automatically records driving time. Drivers manually select their other duty statuses: On-Duty Not Driving, Off-Duty, or Sleeper Berth. Driving time recorded by the ELD cannot be edited. During a roadside inspection, you must be able to show your logs for the current day and the previous 7 days.",
          "visualPrompts": [
            "Image of a driver's hand tapping the screen of an ELD to change duty status.",
            "Diagram showing the ELD connected to the truck's Engine Control Module (ECM).",
            "Screenshot of a typical ELD log grid display."
          ]
        },
        {
          "id": "cdl-eldt-101-l06-c3",
          "title": "Record-Keeping and Compliance",
          "content": "Accurate records are a legal requirement. In addition to your HOS logs, you must maintain supporting documents like fuel receipts or bills of lading. Your employer maintains a Driver Qualification (DQ) file for you, which includes your application, medical certificate, and driving record. All CDL drivers are also part of the FMCSA Drug & Alcohol Clearinghouse, which tracks any violations and makes them available to employers.",
          "visualPrompts": [
            "Image of a folder labeled 'Driver Qualification File' with documents inside.",
            "Photo of a fuel receipt next to an ELD screen.",
            "Logo of the FMCSA Drug & Alcohol Clearinghouse."
          ]
        }
      ],
      "flashcards": [
        {
          "id": "cdl-eldt-101-l06-f1",
          "front": "After 10 consecutive hours off duty, how many hours can you drive?",
          "back": "A maximum of 11 hours, within a 14-consecutive-hour window."
        },
        {
          "id": "cdl-eldt-101-l06-f2",
          "front": "Does taking a lunch break stop the 14-hour clock?",
          "back": "No. The 14-hour on-duty clock runs consecutively once you start your day."
        },
        {
          "id": "cdl-eldt-101-l06-f3",
          "front": "What is the 34-hour restart rule?",
          "back": "A driver can reset their 60/70-hour clock to zero by taking at least 34 consecutive hours off duty."
        },
        {
          "id": "cdl-eldt-101-l06-f4",
          "front": "For how many days must you be able to produce your logs for a roadside inspection?",
          "back": "The current day plus the previous 7 consecutive days."
        }
      ]
    },
    {
      "id": "cdl-eldt-101-l07",
      "title": "ELDT Theory Assessment Prep",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-eldt-101-l07-c1",
          "title": "Review of Key Topics",
          "content": "This final review will prepare you for the theory assessment. The test covers all topics in this module, with a focus on safety and regulations. Key areas include: Driver Qualifications, Vehicle Systems (especially air brakes), the complete Vehicle Inspection process, Hours of Service rules, and Safe Driving practices like space management and hazard perception. Your training provider administers this test and requires a minimum score, typically 80%, to certify you.",
          "visualPrompts": [
            "A montage of key images from previous lessons: a DOT medical card, an air brake diagram, a driver performing an inspection, and an ELD screen.",
            "Graphic showing '80% or Higher to Pass'."
          ]
        },
        {
          "id": "cdl-eldt-101-l07-c2",
          "title": "Practice Questions & Scenarios",
          "content": "Let's apply your knowledge. Scenario 1: You are on a long downgrade. What is the best way to control your speed? (Answer: Use a low gear and light, steady brake pressure). Scenario 2: Your low-air warning alarm comes on. What should you do? (Answer: Pull over and stop as soon as it is safe to do so). Scenario 3: You started your day at 6 AM. What is the latest you can legally drive? (Answer: 8 PM, which is 14 hours later).",
          "visualPrompts": [
            "Interactive quiz format where the scenarios pop up as questions.",
            "A visual for each scenario: a truck on a mountain road, a dashboard with a warning light, a clock showing 6 AM and 8 PM."
          ]
        },
        {
          "id": "cdl-eldt-101-l07-c3",
          "title": "Final Checklist & Next Steps",
          "content": "Before your assessment, review your notes, especially any areas you found difficult. Get a good night's sleep. Remember, this assessment is separate from the state CDL permit test. You must pass both. Once you pass the theory assessment, your provider will update your status in the TPR, and you will be eligible to begin the behind-the-wheel portion of your training. Good luck!",
          "visualPrompts": [
            "A simple checklist graphic: 'Review Notes', 'Rest Well', 'Pass Assessment'.",
            "Flowchart showing 'Pass Theory' -> 'TPR Update' -> 'Begin Behind-the-Wheel Training'."
          ]
        }
      ],
      "flashcards": []
    }
  ]
};
