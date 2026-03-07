import type { LearningModule } from "@/lib/modules/types";

export const cdl_passenger_endorsement_101_Module: LearningModule = {
  "id": "cdl-passenger-endorsement-101",
  "title": "CDL Passenger Endorsement (P)",
  "description": "Study guide for the CDL Passenger Vehicle (P) endorsement. Covers passenger loading, unloading procedures, pre-trip inspection for buses, emergency exits, passenger safety, railroad crossings, and ADA requirements. Required for driving buses carrying 16 or more passengers.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "passenger", "endorsement"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en"],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Perform a complete pre-trip inspection specific to passenger vehicles",
    "Apply safe passenger loading and unloading procedures",
    "Handle emergency situations with passengers on board",
    "Navigate railroad crossings according to federal requirements",
    "Understand ADA accessibility requirements for passenger vehicles"
  ],
  "lessons": [
    {
      "id": "cdl-pe-101-l01",
      "title": "Passenger Vehicle Operations",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-pe-101-l01-c1",
          "title": "Pre-Trip Inspection for Buses",
          "content": "Bus pre-trip inspection includes all standard CMV checks plus passenger-specific items. [Visual Prompt: Bus interior diagram showing inspection points: emergency exits (windows, roof hatches, doors), fire extinguisher location, first aid kit, emergency reflectors, seat condition, handrails, floor condition, wheelchair lift/ramp, and standee line.] Check all emergency exits — windows, roof hatches, and doors must open easily from inside. Verify emergency exit signs and buzzer alarms work. Check the fire extinguisher (fully charged, proper rating), first aid kit (stocked), and spare emergency reflective triangles. Inspect all seats for security — loose seats are a hazard. Check handrails and stanchions (poles). Verify the floor is clean and free of tripping hazards. If the bus has a wheelchair lift or ramp, test it for proper operation. Check the standee line — passengers standing must remain behind this line."
        },
        {
          "id": "cdl-pe-101-l01-c2",
          "title": "Loading, Unloading, and On-Board Safety",
          "content": "As a bus driver, you are responsible for passenger safety at all times. [Visual Prompt: Bus stop scene showing proper loading sequence: bus stopped with door at curb, passengers boarding in orderly fashion, driver checking mirrors, passenger behind standee line, and aisle clear of luggage.] Never allow passengers to stand in front of the standee line while the bus is moving. Do not allow passengers to stand on a bus traveling at highway speeds. Ensure the aisle is clear of luggage, packages, and other obstructions. At stops, set the parking brake before opening the door. Use your mirrors to check for passengers or pedestrians near the bus before pulling away. Never refuel with passengers on board. If your bus has a baggage compartment, make sure all compartment doors are secure before driving. Prohibited items: firearms, flammable liquids, and other hazardous materials are not allowed on a passenger bus."
        },
        {
          "id": "cdl-pe-101-l01-c3",
          "title": "Railroad Crossings and Emergencies",
          "content": "Buses must stop at ALL railroad crossings (with very few exceptions). [Visual Prompt: Step-by-step railroad crossing procedure: (1) activate 4-way flashers, (2) stop within 15-50 feet of nearest rail, (3) open door and driver window, (4) look and listen both directions, (5) check tracks are clear, (6) cross in a gear that does not require shifting, (7) do not stop on the tracks.] Stop between 15 and 50 feet of the nearest rail. Open the front door and your window to listen for a train. Look both directions along the tracks. Do not proceed until you are certain no train is approaching. Cross in a gear low enough that you will not need to shift while on the tracks — stalling on the tracks is extremely dangerous. If your bus stalls on the tracks, evacuate all passengers immediately and move them away from the tracks at a 45-degree angle in the direction of the approaching train (so they are moving away from where debris would travel if struck)."
        }
      ],
      "flashcards": [
        { "id": "cdl-pe-101-l01-f1", "front": "At what distance must a bus stop from railroad tracks?", "back": "Between 15 and 50 feet of the nearest rail." },
        { "id": "cdl-pe-101-l01-f2", "front": "Can passengers stand on a bus traveling at highway speeds?", "back": "No. Standing passengers are generally only allowed on buses operating at lower speeds (typically under 35 mph in urban service)." },
        { "id": "cdl-pe-101-l01-f3", "front": "What should you do if your bus stalls on railroad tracks?", "back": "Evacuate all passengers immediately. Move them away from the tracks at a 45-degree angle toward the approaching train (away from debris path)." },
        { "id": "cdl-pe-101-l01-f4", "front": "What items are prohibited on a passenger bus?", "back": "Firearms, flammable liquids, and hazardous materials." }
      ]
    },
    {
      "id": "cdl-pe-101-l02",
      "title": "CDL Passenger Endorsement Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-pe-101-l02-c1",
          "title": "Passenger Endorsement Practice Test",
          "content": "This practice exam simulates the CDL Passenger endorsement knowledge test. The real exam has 20 questions and you need 80% (16 correct) to pass. Topics: pre-trip inspection, loading/unloading, emergency exits, railroad crossings, passenger safety, ADA requirements, and prohibited items."
        }
      ],
      "flashcards": []
    }
  ]
};
