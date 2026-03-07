import type { LearningModule } from "@/lib/modules/types";

export const cdl_eldt_theory_101_Module: LearningModule = {
  "id": "cdl-eldt-theory-101",
  "title": "CDL ELDT Theory Training Guide",
  "description": "Entry-Level Driver Training (ELDT) theory curriculum required by FMCSA since February 2022 for all new CDL applicants. Covers the 31 required theory topics across driver qualifications, vehicle systems, vehicle inspections, basic control, safe driving, and advanced operations. This module prepares you for the ELDT theory certification that training providers must report to FMCSA's Training Provider Registry (TPR) before you can take the CDL skills test.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "eldt", "fmcsa", "entry-level"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en", "es"],
  "thumbnail": "/assets/cdl/cab-dashboard.png",
  "learningObjectives": [
    "Understand all 31 FMCSA-required ELDT theory topics",
    "Learn federal driver qualification requirements (age, medical, disqualifications)",
    "Master vehicle systems knowledge required for theory certification",
    "Understand Hours of Service (HOS) regulations and electronic logging devices",
    "Prepare for ELDT theory assessment to qualify for CDL skills test"
  ],
  "lessons": [
    {
      "id": "cdl-eldt-101-l01",
      "title": "ELDT Overview and Driver Qualifications",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-eldt-101-l01-c1",
          "title": "What is ELDT and Why It Matters",
          "content": "Entry-Level Driver Training (ELDT) is a federally mandated training program required for all new CDL applicants since February 7, 2022. Before ELDT, anyone could walk into a DMV, take a written test and skills test, and get a CDL with no formal training. ELDT changed this by requiring: (1) completion of theory and behind-the-wheel training from an FMCSA-registered training provider, (2) the provider must report your completion to the Training Provider Registry (TPR), (3) your state DMV checks the TPR before allowing you to take the CDL skills test. ELDT applies to: new Class A CDL, new Class B CDL, upgrading from Class B to Class A, and adding the H (Hazmat), P (Passenger), or S (School Bus) endorsements. It does NOT apply to CDL renewals, adding N (Tanker) or T (Doubles/Triples) endorsements, or military-exempted drivers. The theory portion covers 31 topics that you must demonstrate proficiency in before moving to behind-the-wheel training."
        },
        {
          "id": "cdl-eldt-101-l01-c2",
          "title": "Federal Driver Qualifications",
          "content": "FMCSA requires all CMV drivers to meet these qualifications: (1) Age: Minimum 21 for interstate commerce, 18-20 for intrastate only (some states). (2) Medical: Pass a DOT physical exam (FMCSA medical card) every 2 years (or 1 year with certain conditions). Vision: 20/40 in each eye, 70-degree field of vision. Hearing: perceive a forced whisper at 5 feet. No insulin-dependent diabetes (exemption possible), no epilepsy/seizure disorder, no disqualifying heart conditions. (3) English proficiency: Must be able to read and speak English sufficiently to communicate with the public and understand highway signs. (4) Driving record: Cannot have a suspended, revoked, or canceled CDL. Cannot hold CDLs from more than one state. (5) Background: Subject to FMCSA drug and alcohol clearinghouse checks. Pre-employment drug test required. Random testing throughout career. (6) No disqualifying offenses: DUI/DWI in a CMV, leaving the scene of an accident in a CMV, using a CMV to commit a felony, driving a CMV while CDL is suspended."
        },
        {
          "id": "cdl-eldt-101-l01-c3",
          "title": "ELDT Theory Curriculum Structure",
          "content": "The 31 ELDT theory topics are organized into these units: Unit 1 — Basic Operation: orientation, vehicle systems (engine, drivetrain, brakes, steering, suspension, electrical, tires), vehicle inspection, basic control (starting, stopping, backing, turning). Unit 2 — Safe Driving: visual search, communication, speed management, space management, night operation, extreme driving conditions (weather, mountains, railroad crossings). Unit 3 — Advanced Operation: hazard perception, skid control/recovery, crash avoidance, Hours of Service (HOS) regulations, post-crash procedures, external communications (radio, signals), trip planning, vehicle systems maintenance, cargo handling, environmental compliance, and record-keeping. You must pass a theory assessment covering all 31 topics before proceeding to behind-the-wheel training. The assessment is administered by your training provider — it is NOT the same as the state CDL written test (you must pass both). Most training providers use a combination of classroom instruction, online modules, and written assessments."
        }
      ],
      "flashcards": [
        { "id": "cdl-eldt-101-l01-f1", "front": "What does ELDT stand for?", "back": "Entry-Level Driver Training — federally mandated training required for all new CDL applicants since February 2022." },
        { "id": "cdl-eldt-101-l01-f2", "front": "What is the Training Provider Registry (TPR)?", "back": "An FMCSA database where approved training providers report student completion. The state DMV checks the TPR before allowing CDL skills testing." },
        { "id": "cdl-eldt-101-l01-f3", "front": "What is the minimum age for interstate CMV driving?", "back": "21 years old. Some states allow intrastate CDL driving at 18." },
        { "id": "cdl-eldt-101-l01-f4", "front": "How often must a CDL driver renew their DOT medical card?", "back": "Every 2 years (or annually with certain medical conditions)." }
      ]
    },
    {
      "id": "cdl-eldt-101-l02",
      "title": "Hours of Service and Electronic Logging",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-eldt-101-l02-c1",
          "title": "Hours of Service Rules for Property Carriers",
          "content": "Hours of Service (HOS) regulations prevent fatigued driving by limiting how long drivers can operate. For property-carrying drivers: (1) 11-Hour Driving Limit: You may drive a maximum of 11 hours after 10 consecutive hours off duty. (2) 14-Hour Driving Window: You may not drive beyond the 14th consecutive hour after coming on duty. The 14-hour clock runs continuously — off-duty breaks do NOT pause it. (3) 30-Minute Break: You must take a 30-minute break before driving if 8 cumulative hours of driving have passed since your last off-duty period of 30+ minutes. (4) 60/70-Hour Limit: You cannot drive after being on duty 60 hours in 7 consecutive days (carriers not operating every day) or 70 hours in 8 consecutive days (carriers operating every day). (5) 34-Hour Restart: You may restart your 60/70-hour clock after taking 34 or more consecutive hours off duty. (6) Sleeper Berth Provision: Drivers using a sleeper berth can split their required 10 hours off duty into two periods — one at least 7 consecutive hours in the sleeper and one at least 2 consecutive hours off duty or in the sleeper. Neither period counts against the 14-hour window."
        },
        {
          "id": "cdl-eldt-101-l02-c2",
          "title": "Electronic Logging Devices (ELDs)",
          "content": "Since December 2017, most CMV drivers must use Electronic Logging Devices (ELDs) to record their duty status. ELDs automatically record: driving time, engine hours, vehicle movement, miles driven, and location data. The ELD connects to the engine's ECM (Engine Control Module) and records when the vehicle is in motion. Drivers cannot edit driving time recorded by the ELD — they can only add annotations to explain circumstances. Duty statuses recorded: Off Duty, Sleeper Berth, Driving, On-Duty Not Driving. ELD exemptions: drivers who use paper logs no more than 8 days in any 30-day period, drivers of vehicles manufactured before model year 2000, and driveaway-towaway operations. During a roadside inspection, drivers must present their ELD records to law enforcement. Records must be available for the current 24-hour period plus the previous 7 consecutive days. Malfunctions must be reported to the carrier within 24 hours and repaired within 8 days."
        },
        {
          "id": "cdl-eldt-101-l02-c3",
          "title": "Record-Keeping and Compliance",
          "content": "Accurate record-keeping is a legal requirement for CDL drivers. Beyond ELD/HOS records, you must maintain: (1) Vehicle Inspection Reports (DVIRs): Written report at end of each driving day listing any vehicle defects found. The carrier must certify repairs before the vehicle is dispatched again. (2) Accident Register: Carriers must maintain records of all accidents for 3 years. Reportable accidents involve a fatality, injury requiring transport for medical treatment, or a towed vehicle. (3) Driver Qualification File: Your carrier maintains your DQ file including: employment application, road test certificate, annual driving record review, medical certificate, and drug/alcohol test results. (4) Trip Records: Maintain records of routes traveled, fuel purchased, and cargo manifests. (5) Drug & Alcohol Clearinghouse: Since January 2020, all CDL holders are registered in the FMCSA Drug & Alcohol Clearinghouse. Violations are reported and available to current and prospective employers. You can check your own record at any time."
        }
      ],
      "flashcards": [
        { "id": "cdl-eldt-101-l02-f1", "front": "How many hours can a property-carrying driver drive after 10 hours off duty?", "back": "11 hours maximum, and all driving must occur within a 14-hour on-duty window." },
        { "id": "cdl-eldt-101-l02-f2", "front": "What is the 34-hour restart?", "back": "After taking 34 or more consecutive hours off duty, your 60/70-hour clock resets to zero." },
        { "id": "cdl-eldt-101-l02-f3", "front": "What does an ELD automatically record?", "back": "Driving time, engine hours, vehicle movement, miles driven, and location data via the engine's ECM." },
        { "id": "cdl-eldt-101-l02-f4", "front": "How long must ELD records be available for roadside inspection?", "back": "Current 24-hour period plus the previous 7 consecutive days." }
      ]
    },
    {
      "id": "cdl-eldt-101-l03",
      "title": "Vehicle Systems and Maintenance",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-eldt-101-l03-c1",
          "title": "Engine, Drivetrain, and Electrical Systems",
          "content": "Understanding vehicle systems is an ELDT theory requirement. Engine: Most commercial trucks use diesel engines. Key components to understand: turbocharger (increases power by forcing more air into cylinders), aftercooler/intercooler (cools compressed air for denser charge), exhaust aftertreatment (DPF, DEF/SCR for emissions). Diesel engines have higher compression ratios than gasoline engines and use compression ignition rather than spark plugs. Drivetrain: Power flows from engine through clutch (manual) or torque converter (automatic) to transmission, then through driveshaft to rear differential and drive axles. Multi-speed transmissions (10, 13, or 18 speed) require understanding shift patterns and gear selection for speed and terrain. Electrical: 12V or 24V system. Alternator charges batteries while engine runs. Key circuits: starting, charging, lighting, instrument/gauge, and accessories. Check: battery connections (tight, no corrosion), alternator belt tension, warning lights function, and wiring condition (no chafing or exposed wires)."
        },
        {
          "id": "cdl-eldt-101-l03-c2",
          "title": "Cooling, Lubrication, and Fuel Systems",
          "content": "Cooling System: Prevents engine overheating. Components: radiator, water pump, thermostat, coolant hoses (upper and lower), overflow reservoir, fan (may be clutch-type or electric). Check: coolant level (above minimum mark in overflow), condition (not rusty/oily), hose condition (no cracks, leaks, swelling), fan belt tension, and radiator for leaks or damage. Never remove the radiator cap when hot — pressurized coolant can cause severe burns. Normal operating temperature: 170-195 degrees F. Lubrication System: Reduces friction, cools internal parts, seals combustion chambers, and cleans contaminants. Check oil level on dipstick (between add and full marks), oil condition (should be amber to dark brown, not milky or gritty), look for leaks under vehicle. Oil pressure should build within seconds of startup (5-20 psi at idle typical). Fuel System: Diesel fuel is stored in one or two saddle tanks. Check: fuel level, cap is secure, no leaks at connections or tank seams, fuel filters are not clogged, fuel-water separator is drained."
        },
        {
          "id": "cdl-eldt-101-l03-c3",
          "title": "Tires, Wheels, and Suspension Maintenance",
          "content": "Tires: Most critical safety component touching the road. Federal minimums: 4/32 inch tread on steer tires, 2/32 inch on all others. Check for: uneven wear (alignment issues), cuts exposing cords, bulges (internal damage), proper inflation (thump test with tool, visual inspection). Regrooved tires are NOT permitted on steer axles. Recapped/retreaded tires are allowed on drive and trailer axles but NOT on the steer axle of a bus. Proper tire pressure is critical — underinflation causes heat buildup and blowouts; overinflation causes reduced traction and uneven wear. Wheels: Check for cracks in rims, missing or loose lug nuts (rust trails indicate looseness), damaged or leaking hub seals, bent or damaged rims, mismatched wheel or rim sizes on same axle. Suspension: Supports vehicle weight and absorbs road shocks. Leaf springs: check for broken, shifted, or missing leaves, cracked spring hangers, worn U-bolts. Air bags: check for leaks, cuts, proper inflation, rubbing against frame. Shock absorbers: oil leaking = bad shock."
        }
      ],
      "flashcards": [
        { "id": "cdl-eldt-101-l03-f1", "front": "What type of ignition do diesel engines use?", "back": "Compression ignition — diesel fuel ignites from the heat of compressed air, not from spark plugs." },
        { "id": "cdl-eldt-101-l03-f2", "front": "What is the minimum tread depth for steer tires?", "back": "4/32 inch. All other tires: 2/32 inch minimum." },
        { "id": "cdl-eldt-101-l03-f3", "front": "What does a milky appearance on the oil dipstick indicate?", "back": "Water or coolant contamination in the oil — a serious engine problem that requires immediate attention." },
        { "id": "cdl-eldt-101-l03-f4", "front": "Are recapped tires allowed on the steer axle?", "back": "No. Recapped/retreaded tires are prohibited on the front (steer) axle. They may be used on drive and trailer axles." }
      ]
    },
    {
      "id": "cdl-eldt-101-l04",
      "title": "ELDT Theory Assessment Prep",
      "type": "interactive",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-eldt-101-l04-c1",
          "title": "Theory Assessment Practice",
          "content": "The ELDT theory assessment tests your knowledge of all 31 required topics. This practice session covers the most frequently tested areas: driver qualifications and disqualifications, vehicle systems identification, pre-trip inspection sequence, Hours of Service regulations (11-hour, 14-hour, 30-minute break, 60/70-hour limits), ELD requirements and operation, basic control maneuvers (backing, turning, coupling), hazard perception and defensive driving, speed and space management, adverse conditions driving, and post-crash procedures. Most training providers require a score of 80% or higher to pass. The actual format varies by provider but typically includes multiple-choice questions similar to the state CDL written test. Remember: passing the ELDT theory assessment is separate from passing the state CDL written test — you must pass both."
        }
      ],
      "flashcards": []
    }
  ]
};
