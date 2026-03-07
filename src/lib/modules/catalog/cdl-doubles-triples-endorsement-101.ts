import type { LearningModule } from "@/lib/modules/types";

export const cdl_doubles_triples_endorsement_101_Module: LearningModule = {
  "id": "cdl-doubles-triples-endorsement-101",
  "title": "CDL Doubles/Triples Endorsement (T)",
  "description": "Study guide for the CDL Doubles/Triples (T) endorsement. Covers coupling and uncoupling doubles and triples, converter dolly connection, rearmost trailer instability (crack-the-whip effect), inspection procedures, and safe driving techniques for multi-trailer combinations.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "doubles-triples", "endorsement"],
  "minAge": 21,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": ["en"],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Couple and uncouple double and triple trailer combinations safely",
    "Connect and inspect converter dollies",
    "Understand the crack-the-whip effect and how to minimize rearmost trailer instability",
    "Apply safe driving and braking techniques for multi-trailer combinations",
    "Perform proper pre-trip inspections for doubles and triples"
  ],
  "lessons": [
    {
      "id": "cdl-dt-101-l01",
      "title": "Doubles and Triples Operations",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-dt-101-l01-c1",
          "title": "Coupling Doubles and the Converter Dolly",
          "content": "Doubles use a converter dolly to connect the second trailer. [Visual Prompt: Step-by-step diagram of coupling doubles: (1) couple tractor to first trailer normally, (2) position converter dolly behind first trailer, (3) couple dolly to first trailer pintle hook, (4) connect dolly air and electric lines to first trailer, (5) back first trailer to second trailer until dolly fifth wheel engages second trailer kingpin, (6) connect second trailer air and electric lines, (7) perform all connection checks.] The converter dolly has its own fifth wheel that couples to the rear trailer's kingpin. It also has a drawbar and eye that connects to the first trailer's pintle hook. Make sure the dolly air tank is charged and brakes are working before coupling. After coupling, perform the same tug test as a standard coupling. Check all glad hand connections between the first trailer and dolly, and between the dolly and second trailer. Verify the safety chains are properly connected and crossed under the drawbar."
        },
        {
          "id": "cdl-dt-101-l01-c2",
          "title": "The Crack-the-Whip Effect",
          "content": "The biggest danger unique to doubles and triples is the crack-the-whip effect. [Visual Prompt: Aerial view of a triple-trailer combination making a lane change, showing how the movement amplifies from tractor (small movement) → first trailer (medium) → second trailer (large) → third trailer (extreme sway), with the rear trailer's arc dramatically wider than the tractor's.] Any steering input or lane change at the tractor is amplified through each successive trailer. What is a gentle lane change for the tractor becomes a violent sway at the last trailer. This effect is worse at higher speeds, in crosswinds, and with lighter rear trailers. To minimize the crack-the-whip effect: make smooth, gradual steering inputs, reduce speed before lane changes, always put the heaviest trailer directly behind the tractor and the lightest trailer last (for doubles), and avoid sudden maneuvers. If the rearmost trailer begins to sway, gently steer in the opposite direction and gradually reduce speed — do NOT brake hard."
        },
        {
          "id": "cdl-dt-101-l01-c3",
          "title": "Safe Driving and Inspection",
          "content": "Doubles and triples require extra vigilance during driving and inspections. [Visual Prompt: Comparison chart showing: single trailer stopping distance (base), doubles (+20% longer), triples (+30% longer), with diagrams showing wider off-tracking for each configuration.] Pre-trip inspection: check all coupling devices on each connection point — fifth wheels, pintle hooks, safety chains, converter dolly, glad hands, and electrical connections. Check air brake operation on each trailer separately using the trailer hand valve. Verify all lights work on all trailers. While driving: increase following distance beyond normal CMV standards (at least 8-10 seconds). Avoid driving beside other vehicles when possible — you need room to maneuver. Take turns and curves even slower than with a single trailer. Remember that backing doubles or triples is extremely difficult — most operations are set up to avoid it. If you must back, disconnect the rear trailer first."
        }
      ],
      "flashcards": [
        { "id": "cdl-dt-101-l01-f1", "front": "What is the crack-the-whip effect?", "back": "Steering and road inputs are amplified through each successive trailer, causing the rearmost trailer to sway much more than the tractor." },
        { "id": "cdl-dt-101-l01-f2", "front": "Which trailer should be heaviest in a doubles combination?", "back": "The heaviest trailer goes directly behind the tractor. The lighter trailer is the rear trailer." },
        { "id": "cdl-dt-101-l01-f3", "front": "What minimum age is required for the Doubles/Triples endorsement?", "back": "21 years old (required for interstate driving of doubles/triples)." },
        { "id": "cdl-dt-101-l01-f4", "front": "Can you back a doubles or triples combination?", "back": "It is extremely difficult and usually avoided. If necessary, disconnect the rear trailer first." }
      ]
    },
    {
      "id": "cdl-dt-101-l02",
      "title": "CDL Doubles/Triples Endorsement Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-dt-101-l02-c1",
          "title": "Doubles/Triples Practice Test",
          "content": "This practice exam simulates the CDL Doubles/Triples endorsement knowledge test. The real exam has 20 questions and you need 80% (16 correct) to pass. Topics: coupling/uncoupling with converter dollies, crack-the-whip effect, trailer order, safe driving, inspection procedures, and braking with multiple trailers."
        }
      ],
      "flashcards": []
    }
  ]
};
