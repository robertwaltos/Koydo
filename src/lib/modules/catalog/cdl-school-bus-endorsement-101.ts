import type { LearningModule } from "@/lib/modules/types";

export const cdl_school_bus_endorsement_101_Module: LearningModule = {
  "id": "cdl-school-bus-endorsement-101",
  "title": "CDL School Bus Endorsement (S)",
  "description": "Study guide for the CDL School Bus (S) endorsement. Covers student loading/unloading danger zones, school bus-specific equipment, emergency evacuation procedures, student management, and railroad crossing requirements. Requires both the P and S endorsements to drive a school bus.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "school-bus", "endorsement"],
  "minAge": 18,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "beginner",
  "localeSupport": ["en"],
  "thumbnail": "/assets/cdl/school-bus-danger-zones.png",
  "learningObjectives": [
    "Identify the danger zones around a school bus where children are at greatest risk",
    "Apply proper loading and unloading procedures at bus stops",
    "Operate school bus-specific safety equipment (stop arm, crossing gate, warning lights)",
    "Perform emergency evacuation of a school bus",
    "Manage student behavior safely while driving"
  ],
  "lessons": [
    {
      "id": "cdl-sb-101-l01",
      "title": "School Bus Safety Operations",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-sb-101-l01-c1",
          "title": "Danger Zones and Loading Procedures",
          "content": "The most dangerous time for school children is during loading and unloading — not while the bus is moving. [Visual Prompt: Bird's-eye view of a school bus showing the danger zone: 10 feet on all sides of the bus, with particular emphasis on the front danger zone where children can be hidden below the driver's line of sight. Children illustrated crossing in front of the bus at a safe distance (10 feet) with the driver watching.] The danger zone extends 10 feet on all sides of the school bus. Children should never be in the danger zone unless the driver can see them. When loading: activate amber warning lights 200 feet before the stop, bring the bus to a complete stop, set the parking brake, then activate the red lights and stop arm. Have students wait until you signal them to approach. Students should walk, not run, and use the handrail. When students must cross the road, they should cross at least 10 feet in front of the bus where you can see them — have them wait for your signal."
        },
        {
          "id": "cdl-sb-101-l01-c2",
          "title": "Unloading and Accounting for Students",
          "content": "Unloading requires the same level of vigilance as loading. [Visual Prompt: Sequence showing unloading procedure: bus stopped, parking brake set, door opens, students exit in orderly fashion, driver checks mirrors and all around before releasing stop arm, then performs interior check walking to the rear.] After students exit, check all mirrors and look for students who might have dropped something in the danger zone. If a child drops an item near the bus, they MUST make eye contact with the driver and get permission before retrieving it. After every stop, count students if possible. After the final stop, perform a complete interior check — walk to the rear of the bus, check under seats, check behind the last seat, and verify no sleeping or hiding students remain. Some states require a child check system (a button at the rear that must be pressed to deactivate an alarm). A child left on a bus is a life-threatening emergency in extreme temperatures."
        },
        {
          "id": "cdl-sb-101-l01-c3",
          "title": "Emergency Evacuation Procedures",
          "content": "You must be prepared to evacuate the bus quickly in an emergency. [Visual Prompt: Diagram showing bus emergency evacuation routes: front door, rear emergency door, side emergency windows, and roof hatches, with evacuation flow arrows and assembly point 100 feet from the bus.] Evacuate the bus when: there is a fire or danger of fire, the bus is in an unsafe position (e.g., risk of being struck by another vehicle), or there is a hazardous materials spill nearby. Front door evacuation is preferred when possible. For rear door evacuation, assign responsible older students to help younger ones. Students should move at least 100 feet from the bus to a safe location. Account for all students by name. Contact dispatch and emergency services (911) immediately. If the bus is on fire, do NOT open the rear emergency exit until you are ready — opening it can feed oxygen to a fire. Never let students go back for personal items."
        }
      ],
      "flashcards": [
        { "id": "cdl-sb-101-l01-f1", "front": "How far does the danger zone extend around a school bus?", "back": "10 feet on all sides of the bus." },
        { "id": "cdl-sb-101-l01-f2", "front": "How far in front of the bus should students cross the road?", "back": "At least 10 feet in front of the bus where the driver can see them." },
        { "id": "cdl-sb-101-l01-f3", "front": "When should you evacuate a school bus?", "back": "When there is fire/danger of fire, the bus is in an unsafe position, or there is a nearby hazmat spill." },
        { "id": "cdl-sb-101-l01-f4", "front": "What must you do after the last students exit at the final stop?", "back": "Walk to the rear of the bus and check under/behind all seats to ensure no students remain." }
      ]
    },
    {
      "id": "cdl-sb-101-l02",
      "title": "CDL School Bus Endorsement Practice Exam",
      "type": "quiz",
      "duration": 20,
      "chunks": [
        {
          "id": "cdl-sb-101-l02-c1",
          "title": "School Bus Practice Test",
          "content": "This practice exam simulates the CDL School Bus endorsement knowledge test. The real exam has 20 questions and you need 80% (16 correct) to pass. You must also hold the Passenger (P) endorsement to drive a school bus. Topics: danger zones, loading/unloading, warning light activation, emergency evacuation, student management, railroad crossings, and special equipment."
        }
      ],
      "flashcards": []
    }
  ]
};
