import type { LearningModule } from "@/lib/modules/types";

export const cdl_combination_vehicles_101_Module: LearningModule = {
  "id": "cdl-combination-vehicles-101",
  "title": "CDL Combination Vehicles",
  "description": "Study guide for the CDL Combination Vehicles test — required for Class A CDL. Covers coupling and uncoupling procedures, trailer inspection, rollover prevention, skid control for combination vehicles, and trailer air brake systems. Includes detailed diagrams of fifth wheel coupling, glad hands, and kingpin engagement.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "combination-vehicles"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en", "es"],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Perform the proper coupling and uncoupling procedure for tractor-trailer combinations",
    "Inspect trailer coupling systems including fifth wheel, kingpin, and glad hands",
    "Understand trailer air brake systems and the role of the trailer hand valve",
    "Identify rollover risks specific to combination vehicles",
    "Apply proper techniques for backing, turning, and lane changes with trailers"
  ],
  "lessons": [
    {
      "id": "cdl-cv-101-l01",
      "title": "Coupling and Uncoupling Procedures",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-cv-101-l01-c1",
          "title": "Step-by-Step Coupling Procedure",
          "content": "Coupling a tractor to a trailer requires precision and safety awareness. [Visual Prompt: 8-step illustrated sequence showing: (1) inspect fifth wheel — jaws open, mounting bolts tight, (2) inspect trailer kingpin and apron, (3) position tractor — align with trailer kingpin, (4) back slowly under trailer — watch clearance, (5) feel fifth wheel lock — do NOT go under trailer yet, (6) tug test — pull forward gently in low gear to verify lock, (7) connect air lines and electrical cable — glad hands blue to blue (service), red to red (emergency), and 7-pin electrical, (8) raise landing gear fully and do final walk-around.] The most critical step is verifying the fifth wheel jaws have locked around the kingpin. A partially coupled trailer can separate from the tractor while driving, which is catastrophic. After the tug test, get out and visually verify there is no space between the upper and lower fifth wheel plates, and that the locking jaws are closed around the kingpin. Check that the release handle is in the locked position."
        },
        {
          "id": "cdl-cv-101-l01-c2",
          "title": "Uncoupling Procedure and Trailer Parking",
          "content": "Uncoupling is the reverse process, but with critical safety differences. [Visual Prompt: 7-step illustrated sequence showing: (1) park on firm, level surface, (2) secure trailer — chock wheels or use spring brakes, (3) lower landing gear until firm contact, (4) disconnect air and electrical lines — store on dummy couplers, (5) unlock fifth wheel release handle, (6) pull tractor forward slowly — watch for trailer drop, (7) clear trailer and verify stability.] Before uncoupling, always chock the trailer wheels or apply trailer spring brakes. Lower the landing gear to firm ground contact and crank slightly more to transfer some weight off the fifth wheel — this makes it easier to release. After pulling out, watch the trailer to ensure it does not tip, lean, or drop. On uneven ground, use wheel chocks even with spring brakes applied. Never park a trailer with the landing gear on soft ground (mud, asphalt in extreme heat) as it can sink."
        },
        {
          "id": "cdl-cv-101-l01-c3",
          "title": "Glad Hands, Air Lines, and Trailer Brakes",
          "content": "The air connections between tractor and trailer are called glad hands. [Visual Prompt: Close-up photo/diagram of glad hand connections color-coded: blue service line (carries air to trailer service brakes) and red emergency/supply line (supplies air to trailer air tank and controls trailer spring brakes), with proper connection and crossflow prevention shown.] The blue glad hand is the service line — it carries air from the foot valve to the trailer service brakes when you press the brake pedal. The red glad hand is the emergency (supply) line — it supplies air to the trailer air tank and holds the trailer spring brakes released. If the red line separates while driving, air escapes from the trailer tank and the spring brakes lock the trailer wheels — this is the fail-safe design. NEVER cross-connect the glad hands (blue to red) — this can cause the trailer brakes to not work at all or cause unpredictable braking. Always check for air leaks at glad hand connections after coupling. The trailer hand valve (trolley valve) applies only the trailer service brakes — use it only for testing, never for parking."
        }
      ],
      "flashcards": [
        { "id": "cdl-cv-101-l01-f1", "front": "What color are the service and emergency glad hands?", "back": "Blue = service (foot brake air to trailer). Red = emergency/supply (air tank supply and spring brake control)." },
        { "id": "cdl-cv-101-l01-f2", "front": "What is the tug test during coupling?", "back": "After the fifth wheel appears locked, pull forward gently in low gear to verify the kingpin is securely locked in the jaws." },
        { "id": "cdl-cv-101-l01-f3", "front": "What happens if the red (emergency) air line separates while driving?", "back": "Air escapes from the trailer tank, and the trailer spring brakes automatically lock the trailer wheels." },
        { "id": "cdl-cv-101-l01-f4", "front": "Should you use the trailer hand valve for parking?", "back": "No. The hand valve applies only trailer service brakes which can leak off. Always use the parking brake system." }
      ]
    },
    {
      "id": "cdl-cv-101-l02",
      "title": "Safe Driving with Combination Vehicles",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-cv-101-l02-c1",
          "title": "Rollover Prevention",
          "content": "Combination vehicles have a higher center of gravity and are more prone to rollover than single vehicles. [Visual Prompt: Physics diagram showing centrifugal force on a loaded trailer in a curve, with the tipping point illustrated — comparing a low COG load (stable) vs a high COG load (tipping), and the effect of speed on lateral force.] The most common cause of rollover is excessive speed in curves. A truck that can handle a curve at 30 mph when empty may roll at the same speed when loaded, depending on the load height. Liquid tankers are especially dangerous because liquid surge shifts the center of gravity during turns and braking. Never exceed the posted speed for curves — and go even slower if your load is high or liquid. Off-ramps are particularly dangerous because they often have decreasing-radius curves. If a posted ramp speed is 25 mph, a loaded truck should take it at 20 mph or less."
        },
        {
          "id": "cdl-cv-101-l02-c2",
          "title": "Turning, Backing, and Off-Tracking",
          "content": "Trailers do not follow the same path as the tractor — this is called off-tracking. [Visual Prompt: Aerial view of a tractor-trailer making a right turn at an intersection, showing the trailer wheels tracking inside the tractor's path, with a car positioned in the danger zone between the trailer and the curb.] When making right turns, the trailer wheels cut inside the tractor's turning arc. The longer the vehicle, the more off-tracking occurs. To safely make right turns: turn wide, check your right mirror continuously, and go slowly. For backing, use the hand-over-hand method on the bottom of the steering wheel — turn the wheel in the direction you want the trailer to go. Get out and look (GOAL) whenever you are unsure of clearance. Use a spotter when available, and agree on hand signals before starting. When backing to a dock, start by positioning the tractor about 12-15 feet from the dock at a 45-degree angle."
        },
        {
          "id": "cdl-cv-101-l02-c3",
          "title": "Skid Control and Emergency Maneuvers",
          "content": "Combination vehicles can experience three types of skids: tractor drive-wheel skid (jackknife), trailer skid (trailer swing), and front-wheel skid (loss of steering). [Visual Prompt: Three diagrams showing each skid type from above: (1) jackknife — rear of tractor swings out while trailer pushes straight, (2) trailer swing — trailer rear swings out while tractor goes straight, (3) front-wheel skid — tractor goes straight despite steering input.] Jackknife prevention: avoid hard braking, especially on curves or slippery surfaces. If a jackknife begins, release the brakes immediately. Trailer swing: usually caused by locked trailer wheels. Release the brakes. If using the trailer hand valve, release it immediately. Front-wheel skid: caused by high speed, overloading the front axle, or underinflated tires. Reduce speed and the front tires may regain traction. ABS on the tractor helps prevent jackknifes, ABS on the trailer helps prevent trailer swing. However, ABS does not reduce stopping distance — it helps you maintain steering control."
        }
      ],
      "flashcards": [
        { "id": "cdl-cv-101-l02-f1", "front": "What is off-tracking?", "back": "When the trailer wheels follow a shorter path than the tractor, cutting inside on turns. Longer vehicles off-track more." },
        { "id": "cdl-cv-101-l02-f2", "front": "What type of skid does a tractor jackknife involve?", "back": "Drive-wheel skid — the rear tractor wheels lose traction and the rear of the tractor swings out." },
        { "id": "cdl-cv-101-l02-f3", "front": "What should you do if a jackknife begins?", "back": "Immediately release the brakes. Do not use the trailer hand valve." },
        { "id": "cdl-cv-101-l02-f4", "front": "Does ABS reduce stopping distance?", "back": "No. ABS helps maintain steering control during hard braking but does not shorten stopping distance." }
      ]
    },
    {
      "id": "cdl-cv-101-l03",
      "title": "CDL Combination Vehicles Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-cv-101-l03-c1",
          "title": "Combination Vehicles Practice Test",
          "content": "This practice exam simulates the CDL Combination Vehicles knowledge test. The real exam typically has 20 multiple-choice questions and you need 80% (16 correct) to pass. This test is required for Class A CDL. Topics include: coupling/uncoupling, glad hands, trailer brakes, off-tracking, rollover prevention, skid types, and emergency procedures. Pay special attention to the coupling sequence and air line connections — these are among the most frequently tested areas."
        }
      ],
      "flashcards": []
    }
  ]
};
