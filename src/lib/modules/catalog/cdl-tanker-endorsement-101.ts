import type { LearningModule } from "@/lib/modules/types";

export const cdl_tanker_endorsement_101_Module: LearningModule = {
  "id": "cdl-tanker-endorsement-101",
  "title": "CDL Tanker Endorsement (N)",
  "description": "Study guide for the CDL Tanker Vehicle (N) endorsement. Covers liquid surge and its effects on vehicle handling, smooth bore vs baffled vs compartmented tanks, proper loading, weight distribution, rollover prevention, and emergency procedures specific to tanker operations.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "tanker", "endorsement"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en"],
  "thumbnail": "/assets/cdl/tanker-liquid-surge.png",
  "learningObjectives": [
    "Explain liquid surge and its effects on vehicle handling during braking, turning, and lane changes",
    "Differentiate between smooth bore, baffled, and compartmented tanks",
    "Apply safe driving techniques specific to tanker vehicles",
    "Understand proper tank vehicle loading to prevent overloading and instability",
    "Describe emergency procedures for tank vehicle leaks and rollovers"
  ],
  "lessons": [
    {
      "id": "cdl-tn-101-l01",
      "title": "Tanker Vehicle Fundamentals",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-tn-101-l01-c1",
          "title": "Liquid Surge and Tank Types",
          "content": "Liquid surge is the most dangerous force a tanker driver faces. [Visual Prompt: Animation showing liquid surging forward inside a smooth-bore tank during braking — the wave of liquid hits the front bulkhead and pushes the truck forward even as brakes are applied. Three tank cross-sections shown: smooth bore (no internal dividers), baffled (walls with holes allowing limited flow), and compartmented (sealed dividers for different products).] When you brake in a tanker, the liquid continues moving forward due to momentum — this is surge. In a smooth bore tank (no baffles), the full weight of the liquid can slam into the front bulkhead, potentially pushing the truck through an intersection even with brakes fully applied. Baffled tanks have internal walls with holes that allow liquid to flow through slowly, reducing but not eliminating surge. Compartmented tanks have sealed dividers — but each compartment can still experience side-to-side surge. Surge is worst in partially loaded tanks because the liquid has room to move. A tank that is 50-75% full has the most dangerous surge characteristics."
        },
        {
          "id": "cdl-tn-101-l01-c2",
          "title": "Safe Driving Techniques for Tankers",
          "content": "Tanker drivers must adjust their driving for the unique handling characteristics of liquid loads. [Visual Prompt: Comparison of a tanker taking a highway on-ramp at 30 mph vs 20 mph, showing center of gravity shift and rollover threshold, with the liquid load shifting to the outside of the curve.] Tankers have the highest rollover rate of any commercial vehicle type. Drive well below the posted speed on curves — liquid loads shift the center of gravity dramatically during turns. Increase following distance significantly because surge can push you into the vehicle ahead during sudden stops. Begin braking earlier than normal. Avoid sudden lane changes — side-to-side surge can destabilize the vehicle. On hills, remember that a liquid load shifts its weight to the rear going uphill and to the front going downhill, affecting steering response. If hauling a partially loaded tanker, drive as if it were fully loaded — the reduced weight does not compensate for the increased surge danger."
        },
        {
          "id": "cdl-tn-101-l01-c3",
          "title": "Loading, Outage, and Weight",
          "content": "Proper tanker loading is critical for both safety and legal compliance. [Visual Prompt: Tank diagram showing fill levels: empty (unstable — bounces), 25% (severe surge danger), 50% (maximum surge), 75% (reduced surge), and full (minimal surge but heavy — check axle weights), with the concept of 'outage' (expansion space) illustrated at the top.] Outage is the empty space left at the top of a tank to allow for liquid expansion due to temperature changes. The amount of outage depends on the liquid type, temperature, and tank size. Liquids expand when heated — a tank filled 100% in cold weather can burst when it warms. Most tanks should be filled to about 95% capacity. Always check your axle weights after loading — different liquids have different densities. A tank full of water weighs very differently than the same tank full of gasoline. Drive to a certified scale after loading to verify you are within legal weight limits on all axles."
        }
      ],
      "flashcards": [
        { "id": "cdl-tn-101-l01-f1", "front": "At what fill level is liquid surge most dangerous?", "back": "50-75% full. The liquid has maximum room to build momentum." },
        { "id": "cdl-tn-101-l01-f2", "front": "What is outage in a tank vehicle?", "back": "The empty space at the top of a tank left for liquid expansion due to temperature changes." },
        { "id": "cdl-tn-101-l01-f3", "front": "What type of tank has the worst surge problem?", "back": "Smooth bore tanks — they have no internal baffles to slow liquid movement." },
        { "id": "cdl-tn-101-l01-f4", "front": "Why do tankers have the highest rollover rate?", "back": "Liquid loads shift the center of gravity during turns, and surge can push the vehicle past its tipping point." }
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
          "title": "Tanker Practice Test",
          "content": "This practice exam simulates the CDL Tanker endorsement knowledge test. The real exam has 20 questions and you need 80% (16 correct) to pass. Topics: liquid surge, tank types, loading procedures, outage, safe driving techniques, rollover prevention, and emergency procedures for tank leaks."
        }
      ],
      "flashcards": []
    }
  ]
};
