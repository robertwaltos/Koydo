import type { LearningModule } from "@/lib/modules/types";

export const cdl_general_knowledge_101_Module: LearningModule = {
  "id": "cdl-general-knowledge-101",
  "title": "CDL General Knowledge",
  "description": "Master the General Knowledge section of the CDL exam — the foundation every commercial driver must pass regardless of license class (A, B, or C). Covers vehicle inspection, basic control, safe driving, transporting cargo, hazardous conditions, emergency procedures, and FMCSA regulations. Based on the official FMCSA CDL Manual used by all 50 states.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "general-knowledge"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en", "es"],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Identify the components inspected during a CDL pre-trip vehicle inspection",
    "Apply safe driving techniques for commercial motor vehicles in varied conditions",
    "Explain cargo securement requirements including weight distribution and tie-down rules",
    "Describe proper procedures for driving in hazardous conditions (rain, ice, fog, mountains)",
    "Recognize emergency situations and apply appropriate response procedures",
    "Understand FMCSA Hours of Service (HOS) regulations and logbook requirements",
    "Interpret road signs, signals, and pavement markings relevant to commercial vehicles"
  ],
  "lessons": [
    {
      "id": "cdl-gk-101-l01",
      "title": "Vehicle Systems and Pre-Trip Inspection",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-gk-101-l01-c1",
          "title": "Why Pre-Trip Inspections Matter",
          "content": "Federal law (FMCSR 392.7 and 396.13) requires every commercial driver to perform a pre-trip inspection before driving. This is not optional — it protects you, other motorists, and your CDL. [Visual Prompt: A driver walking around a semi-truck with a checklist, pointing at tires, lights, and coupling devices.] The inspection covers seven major areas: engine compartment, cab interior, exterior walk-around, steering/suspension, brakes, wheels/tires, and coupling system (for combination vehicles). An examiner during your CDL skills test will ask you to demonstrate this inspection in order, explaining what you are checking and why. Missing a critical defect on the road can result in out-of-service orders, fines up to $16,000, and loss of your CDL."
        },
        {
          "id": "cdl-gk-101-l01-c2",
          "title": "Engine Compartment Checks",
          "content": "Start your pre-trip at the front of the vehicle with the engine off and parking brake set. [Visual Prompt: Labeled diagram of a diesel engine compartment showing oil dipstick, coolant reservoir, power steering reservoir, belts, hoses, alternator, and air compressor.] Check engine oil level (should be between add and full marks on dipstick). Check coolant level in the overflow reservoir — never open a pressurized radiator cap. Inspect the power steering fluid level. Look at all belts for cracks, fraying, or excessive wear — a broken serpentine belt will disable your alternator and air compressor. Check hoses for leaks, bulges, or abrasion. Inspect the air compressor for oil leaks and proper mounting. Check the water pump for leaks. Look at the wiring harness for loose or damaged connections."
        },
        {
          "id": "cdl-gk-101-l01-c3",
          "title": "Tires, Wheels, and Brake Inspection",
          "content": "Tire failures are among the top causes of commercial vehicle crashes. [Visual Prompt: Cross-section diagram of a commercial tire showing tread depth measurement with a gauge, sidewall inspection points, and proper inflation pressure markings.] Federal minimum tread depth is 4/32 inch on steer tires and 2/32 inch on all other tires. Check for cuts, bulges, or tread separation. Verify tire pressure — underinflation causes overheating and blowouts. Inspect lug nuts for looseness, cracks, or missing nuts. Check for rust trails around lug nuts (indicates looseness). Look at brake drums or rotors for cracks. Check brake linings through inspection holes — minimum thickness is typically 1/4 inch. On disc brakes, check pad thickness. Inspect brake chambers for air leaks by listening. Check slack adjusters — pull them by hand; more than 1 inch of movement means the brakes need adjustment."
        }
      ],
      "flashcards": [
        { "id": "cdl-gk-101-l01-f1", "front": "What is the minimum tread depth for steer tires on a commercial vehicle?", "back": "4/32 inch (approximately 3.2 mm)." },
        { "id": "cdl-gk-101-l01-f2", "front": "What federal regulation requires pre-trip inspections?", "back": "FMCSR 392.7 (parts and accessories) and 396.13 (driver inspection report)." },
        { "id": "cdl-gk-101-l01-f3", "front": "How do you check brake adjustment on S-cam brakes?", "back": "Pull the slack adjuster by hand. If it moves more than about 1 inch, the brakes are out of adjustment." },
        { "id": "cdl-gk-101-l01-f4", "front": "What are the seven major areas of a pre-trip inspection?", "back": "Engine compartment, cab interior, exterior walk-around, steering/suspension, brakes, wheels/tires, and coupling system." }
      ]
    },
    {
      "id": "cdl-gk-101-l02",
      "title": "Driving Safely: Space Management and Speed",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-gk-101-l02-c1",
          "title": "Following Distance and Stopping Distance",
          "content": "A fully loaded tractor-trailer at highway speed needs significantly more distance to stop than a car. [Visual Prompt: Comparison diagram showing a car stopping in 150 feet vs a loaded truck stopping in 500+ feet at 55 mph, with perception, reaction, and braking distances labeled.] At 55 mph, a loaded truck needs approximately 390 feet of braking distance alone — plus another 60 feet for perception and 60 feet for reaction time. Total stopping distance: over 500 feet (nearly two football fields). The standard following distance rule: at least 1 second for every 10 feet of vehicle length, at speeds above 40 mph add 1 extra second. For a 60-foot vehicle at highway speed, that means at least 7 seconds of following distance. In poor conditions (rain, fog, night), double the following distance."
        },
        {
          "id": "cdl-gk-101-l02-c2",
          "title": "Speed Management on Curves and Grades",
          "content": "The number one cause of truck rollovers is entering a curve too fast. [Visual Prompt: Aerial view of a highway curve with a posted speed limit sign of 35 mph and a yellow truck advisory sign of 25 mph, showing the correct truck path through the curve.] Posted speed limits are set for cars. Commercial vehicles, especially loaded ones with a high center of gravity, often need to travel 5-10 mph below the posted curve speed. On downgrades, use the braking effect of the engine by selecting a low gear BEFORE starting the descent — the gear you would use to climb the hill is usually the right gear for going down. Never ride the brakes continuously on a long downgrade; this causes brake fade (loss of braking power due to overheating). Use snub braking instead: apply brakes firmly to reduce speed by 5 mph, then release completely to let brakes cool."
        },
        {
          "id": "cdl-gk-101-l02-c3",
          "title": "Lane Management and Blind Spots",
          "content": "Commercial vehicles have large blind spots (No-Zones) on all four sides. [Visual Prompt: Bird's-eye diagram of a semi-truck showing the four No-Zones: front (20 feet), rear (200 feet), left side (1 lane), and right side (2 lanes), with cars positioned in each zone colored red.] The right-side No-Zone extends two full lanes and is the most dangerous — always check your right mirror before turning right. The front No-Zone extends about 20 feet ahead. The rear No-Zone extends approximately 200 feet behind. When changing lanes, check mirrors, signal early, and check mirrors again. Stay in the right lane whenever possible. When passing, do so on the left only and ensure you can see the passed vehicle in your mirror before returning to the right lane. Never linger alongside another vehicle in their blind spot."
        }
      ],
      "flashcards": [
        { "id": "cdl-gk-101-l02-f1", "front": "What is the following distance rule for a 60-foot truck at highway speed?", "back": "At least 7 seconds (1 second per 10 feet of vehicle length, plus 1 extra second above 40 mph)." },
        { "id": "cdl-gk-101-l02-f2", "front": "What is brake fade?", "back": "Loss of braking power caused by overheating from continuous brake application, especially on long downgrades." },
        { "id": "cdl-gk-101-l02-f3", "front": "Which side of a truck has the largest blind spot?", "back": "The right side — it extends approximately two full lanes." },
        { "id": "cdl-gk-101-l02-f4", "front": "What gear should you select before descending a long grade?", "back": "The same gear you would use to climb the hill. Select it BEFORE starting the descent." }
      ]
    },
    {
      "id": "cdl-gk-101-l03",
      "title": "Transporting Cargo Safely",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-gk-101-l03-c1",
          "title": "Cargo Securement Basics",
          "content": "Improperly secured cargo causes over 730 crashes per year in the US. [Visual Prompt: Flatbed trailer showing proper tie-down arrangement with chains, straps, and edge protectors on a load of steel beams, with FMCSA cargo securement rules overlaid.] The FMCSA cargo securement rules (Part 393, Subparts I and J) require that cargo be immobilized or secured to prevent shifting. Every 150 miles or 3 hours (whichever comes first), you must stop and inspect your cargo securement. For the first 50 miles of a trip, you must also stop and re-check. The aggregate working load limit of all tie-downs must be at least 50% of the cargo weight. One tie-down is required for articles 5 feet or less in length, and up to 1,100 lbs. Two tie-downs are needed for cargo longer than 5 feet or heavier than 1,100 lbs, plus one additional tie-down for every additional 10 feet of length."
        },
        {
          "id": "cdl-gk-101-l03-c2",
          "title": "Weight Distribution and Center of Gravity",
          "content": "How you load a truck directly affects handling and safety. [Visual Prompt: Side-view diagram of a trailer showing three loading scenarios: correctly centered cargo (green checkmark), top-heavy cargo (red X with rollover warning), and front-heavy cargo (red X with steering difficulty warning).] The center of gravity should be as low and as close to the center of the vehicle as possible. A high center of gravity makes rollovers much more likely on curves and in evasive maneuvers. Weight must be evenly distributed side-to-side; uneven loading causes the vehicle to lean and can lead to tire failure on the overloaded side. Know your axle weight limits: steer axle typically 12,000-14,000 lbs, drive axles 34,000 lbs, and trailer tandem axles 34,000 lbs. Maximum gross vehicle weight is 80,000 lbs on Interstate highways (some states allow higher with permits). Use certified truck scales to verify compliance."
        },
        {
          "id": "cdl-gk-101-l03-c3",
          "title": "Hazardous Conditions and Emergency Cargo Issues",
          "content": "Cargo emergencies require quick, safe response. [Visual Prompt: Split screen showing a driver pulling over safely to re-secure shifted cargo, and a hazmat placard system chart showing the 9 hazard classes.] If you feel cargo shifting while driving, pull over at the first safe location and re-secure before continuing. Never attempt to secure cargo while the vehicle is moving. If cargo falls onto the roadway, park safely, turn on hazard flashers, and set reflective triangles. For hazardous materials cargo, additional rules apply: you need a Hazmat endorsement (H), proper placards displayed on all four sides, shipping papers accessible in the cab, and knowledge of emergency response procedures. If you are hauling sealed cargo, you are responsible for ensuring the vehicle is not overloaded and that the cargo does not shift based on how the vehicle handles."
        }
      ],
      "flashcards": [
        { "id": "cdl-gk-101-l03-f1", "front": "How often must you stop to check cargo securement during a trip?", "back": "Within the first 50 miles, then every 150 miles or 3 hours (whichever comes first)." },
        { "id": "cdl-gk-101-l03-f2", "front": "What is the maximum gross vehicle weight on US Interstate highways?", "back": "80,000 lbs (without special permits)." },
        { "id": "cdl-gk-101-l03-f3", "front": "What is the minimum aggregate working load limit for tie-downs?", "back": "At least 50% of the cargo weight." },
        { "id": "cdl-gk-101-l03-f4", "front": "Why is a high center of gravity dangerous for commercial vehicles?", "back": "It significantly increases rollover risk on curves, ramps, and during evasive maneuvers." }
      ]
    },
    {
      "id": "cdl-gk-101-l04",
      "title": "Hours of Service and FMCSA Regulations",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-gk-101-l04-c1",
          "title": "Hours of Service (HOS) Rules",
          "content": "The FMCSA Hours of Service rules exist to prevent fatigue-related crashes. [Visual Prompt: Timeline infographic showing a 24-hour clock with color-coded blocks: 11 hours driving (green), 3 hours on-duty not driving (yellow), 10 hours off-duty (blue), with the 14-hour window highlighted.] For property-carrying CMV drivers: You may drive a maximum of 11 hours after 10 consecutive hours off duty. All driving must occur within a 14-hour window after coming on duty — this window cannot be extended by taking breaks. After 8 consecutive hours of driving, you must take a 30-minute break before driving again. You cannot drive after 60 hours on duty in 7 consecutive days (or 70 hours in 8 days). The 7/8-day clock resets after 34 or more consecutive hours off duty (the 34-hour restart). All hours must be recorded in a Record of Duty Status (RODS) — most carriers now use Electronic Logging Devices (ELDs) as required by federal mandate."
        },
        {
          "id": "cdl-gk-101-l04-c2",
          "title": "ELD Mandate and Logbook Basics",
          "content": "Since December 2019, most commercial drivers must use Electronic Logging Devices (ELDs). [Visual Prompt: Photo of an ELD device mounted on a truck dashboard showing duty status, with the four duty statuses labeled: Off Duty, Sleeper Berth, Driving, On-Duty Not Driving.] ELDs automatically record driving time when the vehicle is in motion. Drivers must properly annotate their logs with locations, shipping document numbers, and any edits. There are four duty statuses: Off Duty (resting, personal time), Sleeper Berth (time in the sleeper), Driving (behind the wheel with vehicle in motion), and On-Duty Not Driving (loading, unloading, inspections, fueling, paperwork). Drivers must keep records of the current day plus the previous 7 days. Falsifying logs is a serious federal offense that can result in CDL disqualification. Roadside inspectors will review your ELD records during Level I and Level III inspections."
        },
        {
          "id": "cdl-gk-101-l04-c3",
          "title": "Drug and Alcohol Regulations",
          "content": "The FMCSA has zero tolerance for driving a CMV under the influence. [Visual Prompt: Infographic showing BAC limits: 0.04% CDL disqualification threshold vs 0.08% for regular drivers, with a red prohibited symbol over alcohol and controlled substances.] The BAC limit for commercial drivers is 0.04% — half the limit for regular drivers. You cannot consume alcohol within 4 hours of driving a CMV. If you refuse a drug or alcohol test, it is treated as a positive result. Pre-employment, random, reasonable suspicion, post-accident, return-to-duty, and follow-up testing are all required under FMCSA drug and alcohol testing programs (49 CFR Part 382). A positive drug test or DUI results in immediate CDL disqualification — first offense: 1 year (3 years if hauling hazmat); second offense: lifetime disqualification. The FMCSA Drug and Alcohol Clearinghouse tracks all violations across carriers nationwide."
        }
      ],
      "flashcards": [
        { "id": "cdl-gk-101-l04-f1", "front": "How many hours can a property-carrying CMV driver drive after 10 hours off duty?", "back": "A maximum of 11 hours, within a 14-hour on-duty window." },
        { "id": "cdl-gk-101-l04-f2", "front": "What is the BAC limit for commercial drivers?", "back": "0.04% — half the limit for regular passenger vehicle drivers." },
        { "id": "cdl-gk-101-l04-f3", "front": "How many consecutive hours off duty are needed for a 7/8-day restart?", "back": "34 consecutive hours off duty." },
        { "id": "cdl-gk-101-l04-f4", "front": "What happens if a CDL driver refuses a drug or alcohol test?", "back": "It is treated as a positive result, leading to CDL disqualification." }
      ]
    },
    {
      "id": "cdl-gk-101-l05",
      "title": "Road Signs, Signals, and Hazardous Conditions",
      "type": "interactive",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-gk-101-l05-c1",
          "title": "Road Signs for Commercial Vehicles",
          "content": "Commercial drivers must recognize all standard road signs plus signs specific to CMVs. [Visual Prompt: Grid of 12 road signs arranged in categories — regulatory (speed limit, no trucks, weight limit, low clearance), warning (steep grade, curve, bridge weight), and guide (truck route, weigh station, rest area).] Key CMV-specific signs: Low Clearance signs (diamond or rectangular) — know your vehicle height and add at least 6 inches for safety. Weight Limit signs may apply to bridges, roads, or specific axle limits. 'No Trucks' or 'No CMVs' signs restrict commercial vehicles on certain roads. Weigh Station signs indicate mandatory stops — if the station is open and you meet the weight threshold, you must enter. Steep Grade signs show the percent grade and distance — critical for selecting the right gear. Runaway Truck Ramp signs indicate emergency escape ramps on steep descents."
        },
        {
          "id": "cdl-gk-101-l05-c2",
          "title": "Driving in Hazardous Weather",
          "content": "Commercial vehicles are more affected by adverse weather than passenger cars. [Visual Prompt: Four-panel illustration showing a truck in rain (hydroplaning risk), snow (reduced traction), fog (limited visibility), and crosswind (trailer sway).] In heavy rain, reduce speed by 1/3. Hydroplaning can begin at speeds as low as 30 mph on standing water. If you feel the steering get light, ease off the accelerator — do not brake hard. In snow and ice, reduce speed significantly and increase following distance to at least double. Use low-beam headlights in fog — high beams reflect off moisture and reduce visibility. In strong crosswinds, keep a firm grip on the steering wheel and reduce speed. High-profile vehicles and empty trailers are especially vulnerable to wind. If conditions are severe enough that you cannot drive safely, park at a safe location and wait. No load is worth your life or others'."
        },
        {
          "id": "cdl-gk-101-l05-c3",
          "title": "Emergency Procedures",
          "content": "Knowing how to handle emergencies can save lives. [Visual Prompt: Decision flowchart for tire blowout: 'Hold steering firmly → Do NOT brake → Accelerate slightly → Gradually slow down → Pull off road safely → Turn on 4-ways → Set triangles.'] Tire blowout: grip the steering wheel firmly, do NOT brake immediately, accelerate slightly to stabilize, then gradually slow down and pull over. Brake failure: downshift to the lowest gear possible, use the emergency/parking brake gradually (not all at once), look for an escape route or runaway truck ramp. Skidding: turn into the skid (steer in the direction the rear is sliding), get off the brakes, and avoid sharp steering inputs. If you must leave the road, it is usually better to drive off than to swerve back and forth. After any emergency stop, set reflective triangles: one within 10 feet of the vehicle, one at 100 feet behind, and one at 200 feet behind (or beyond a curve/hill crest if applicable)."
        }
      ],
      "flashcards": [
        { "id": "cdl-gk-101-l05-f1", "front": "By how much should you reduce speed in heavy rain?", "back": "Reduce speed by at least 1/3 of the posted speed limit." },
        { "id": "cdl-gk-101-l05-f2", "front": "Where should reflective triangles be placed after an emergency stop?", "back": "Within 10 feet of the vehicle, at 100 feet behind, and at 200 feet behind." },
        { "id": "cdl-gk-101-l05-f3", "front": "What should you do during a tire blowout?", "back": "Hold the wheel firmly, do NOT brake, accelerate slightly to stabilize, then gradually slow down and pull over safely." },
        { "id": "cdl-gk-101-l05-f4", "front": "What type of headlights should you use in fog?", "back": "Low-beam headlights. High beams reflect off moisture and reduce visibility." }
      ]
    },
    {
      "id": "cdl-gk-101-l06",
      "title": "CDL General Knowledge Practice Exam",
      "type": "quiz",
      "duration": 30,
      "chunks": [
        {
          "id": "cdl-gk-101-l06-c1",
          "title": "Practice Exam Overview",
          "content": "This practice exam simulates the actual CDL General Knowledge test. The real exam has 50 multiple-choice questions covering all General Knowledge topics. You need 80% (40 correct answers) to pass. Questions are drawn from the FMCSA CDL Manual and cover: vehicle inspection, basic vehicle control, safe driving practices, transporting cargo, air brakes (basic knowledge), hazardous conditions, emergency procedures, and federal regulations. Time limit is typically 60 minutes, though some states do not impose a time limit. Take this practice test under timed conditions to simulate the real experience. Review all incorrect answers carefully — the explanations reference specific sections of the CDL manual."
        }
      ],
      "flashcards": []
    }
  ]
};
