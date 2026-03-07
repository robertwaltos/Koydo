import type { LearningModule } from "@/lib/modules/types";

export const cdl_tanker_endorsement_101_Module: LearningModule = {
  "id": "cdl-tanker-endorsement-101",
  "title": "CDL Tanker Endorsement (N)",
  "description": "A comprehensive study guide for the CDL Tanker Vehicle (N) endorsement. This module covers the physics of liquid surge, the differences between tank designs, critical safe driving techniques, proper loading and weight distribution, rollover prevention, pre-trip inspections, and emergency procedures specific to tanker operations.",
  "subject": "CDL",
  "tags": [
    "core",
    "curriculum",
    "cdl",
    "trades",
    "exam-prep",
    "tanker",
    "endorsement"
  ],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/assets/cdl/tanker-liquid-surge.png",
  "learningObjectives": [
    "Explain liquid surge and its effects on vehicle handling",
    "Differentiate between smooth bore, baffled, and compartmented tanks and their unique handling characteristics",
    "Apply safe driving techniques for high center-of-gravity vehicles, including speed management on curves and smooth inputs",
    "Understand proper loading procedures, including outage, weight distribution, and securing equipment",
    "Perform key pre-trip inspection points specific to tanker vehicles",
    "Describe the correct emergency procedures for leaks and rollovers"
  ],
  "lessons": [
    {
      "id": "cdl-tn-101-l01",
      "title": "Tanker Operations and Safety",
      "type": "video",
      "duration": 16,
      "chunks": [
        {
          "id": "cdl-tn-101-l01-c1",
          "title": "Understanding Liquid Surge and Tank Types",
          "content": "Liquid surge is the movement of liquid in a partially filled tank. This force can dramatically affect vehicle stability. When you brake, the liquid surges forward, pushing the truck. When you accelerate, it surges backward. There are three main tank types. Smooth bore tanks, or 'un-baffled' tanks, have nothing inside to slow the surge, making them the most dangerous. Baffled tanks have internal walls with holes that reduce forward-and-back surge but do not prevent side-to-side surge. Compartmented tanks are divided into smaller, separate tanks. While this prevents product mixing and limits surge in each compartment, you may feel a 'jerking' motion as the liquid in each compartment surges at a slightly different time. Surge is most dangerous in a tank that is between half and three-quarters full, as the liquid has the most room to gain momentum.",
          "visualPrompt": "Animation comparing three tankers braking. 1) Smooth bore: A large wave surges forward, pushing the truck. 2) Baffled: The wave is broken up and slowed by baffles. 3) Compartmented: Multiple smaller waves hit the front of each compartment, causing a slight rocking motion."
        },
        {
          "id": "cdl-tn-101-l01-c2",
          "title": "Safe Driving Techniques for Tankers",
          "content": "Driving a tanker requires extreme smoothness and foresight. Because of their high center of gravity and the effects of liquid surge, tankers are prone to rollovers. Always drive well below the posted speed limit on curves and ramps. Increase your following distance to allow for longer stopping distances, as surge can push you forward even while braking. Make all inputs—braking, accelerating, and steering—as smooth as possible to minimize surge. Avoid quick lane changes or sudden maneuvers. When stopping, brake early and gently, then apply firmer pressure as you slow down to prevent a final, hard surge from jolting the vehicle.",
          "visualPrompt": "Split-screen view. Left: A tanker takes a curve too fast, showing the liquid load shifting dramatically to the outside, lifting the inside wheels. Right: The same tanker takes the curve at a reduced speed, showing the liquid shifting much less and the vehicle remaining stable."
        },
        {
          "id": "cdl-tn-101-l01-c3",
          "title": "Proper Loading and Weight Distribution",
          "content": "Correctly loading a tanker is critical for safety and legality. You must leave room for the liquid to expand with temperature changes; this empty space is called 'outage'. Never fill a tank 100%. The required outage depends on the material being hauled. After loading, ensure all manhole covers, valves, and caps are securely closed and latched to prevent leaks. It is your responsibility to check the vehicle's weight. Different liquids have different densities, so a full tank of one product can weigh much more than a full tank of another. Always check your gross vehicle weight and axle weights at a certified scale to ensure you are within legal limits.",
          "visualPrompt": "Diagram of a tanker trailer showing the fill level at 95% capacity. An arrow points to the empty space at the top, labeled 'Outage (for liquid expansion)'. A checklist overlay appears: ✓ Check Outage, ✓ Secure Manhole, ✓ Close All Valves, ✓ Verify Axle Weights."
        },
        {
          "id": "cdl-tn-101-l01-c4",
          "title": "Inspections and Emergency Procedures",
          "content": "Your pre-trip inspection must be thorough. Pay special attention to the tank shell for any cracks or dents. Check all pipes, valves, and hoses for leaks. Ensure the emergency shut-off system and remote controls are working correctly. In an emergency, your first priority is safety. If you discover a leak, park in a safe, open area away from people and ignition sources. If possible, identify the leaking product using the shipping papers. Notify your dispatcher and call 911. Do not attempt to handle major leaks yourself. In the event of a rollover, get away from the vehicle to a safe distance upwind and uphill. Warn others to stay away and call for emergency services immediately, providing them with the placard information.",
          "visualPrompt": "Infographic showing a tanker trailer with key inspection points highlighted with callouts: Tank Shell, Manhole Cover & Gasket, Valves & Hoses, Emergency Shut-off Switch, Placards. A simple flowchart is shown for 'Leak Detected': 1. Pull Over Safely, 2. Identify Product, 3. Notify Dispatch/911, 4. Secure Area."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-tn-101-l01-f1",
          "front": "At what fill level is liquid surge most dangerous?",
          "back": "When the tank is between 50% and 75% full, as the liquid has maximum room to build momentum."
        },
        {
          "id": "cdl-tn-101-l01-f2",
          "front": "What is 'outage' in a tank vehicle?",
          "back": "The empty space left at the top of a tank to allow for liquid expansion due to temperature changes."
        },
        {
          "id": "cdl-tn-101-l01-f3",
          "front": "Which tank type has the most severe forward-and-back surge?",
          "back": "Smooth bore tanks, because they have no internal baffles to slow the liquid's movement."
        },
        {
          "id": "cdl-tn-101-l01-f4",
          "front": "Why must you drive slower on curves in a tanker?",
          "back": "Tankers have a high center of gravity, and the sideways surge of the liquid load can easily push the vehicle into a rollover."
        },
        {
          "id": "cdl-tn-101-l01-f5",
          "front": "What causes the 'jerking' motion in a compartmented tanker?",
          "back": "The surge in each individual compartment hitting the bulkheads at slightly different times."
        },
        {
          "id": "cdl-tn-101-l01-f6",
          "front": "What is your first action if you discover a major leak while driving?",
          "back": "Pull over to a safe location away from people and traffic, and notify emergency services."
        }
      ]
    },
    {
      "id": "cdl-tn-101-l02",
      "title": "CDL Tanker Endorsement Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-tn-101-l02-c1",
          "title": "Knowledge Check: Tanker Operations",
          "content": "This practice exam simulates the official CDL Tanker (N) endorsement knowledge test. The real exam typically consists of 20 questions, and a score of 80% (16 correct answers) is required to pass. This quiz will test your understanding of liquid surge, tank types, loading procedures, outage, safe driving techniques, rollover prevention, and emergency response."
        }
      ],
      "flashcards": []
    }
  ]
};
