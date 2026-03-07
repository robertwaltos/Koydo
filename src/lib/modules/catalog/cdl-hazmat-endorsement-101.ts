import type { LearningModule } from "@/lib/modules/types";

export const cdl_hazmat_endorsement_101_Module: LearningModule = {
  "id": "cdl-hazmat-endorsement-101",
  "title": "CDL Hazmat Endorsement (H)",
  "description": "A comprehensive study guide for the CDL Hazardous Materials (Hazmat) endorsement. This module covers the 9 hazard classes, placarding, shipping papers, loading and segregation, driving rules, emergency response, and the Hazmat Table. It also details the required TSA Security Threat Assessment.",
  "subject": "CDL",
  "tags": [
    "core",
    "curriculum",
    "cdl",
    "trades",
    "exam-prep",
    "hazmat",
    "endorsement"
  ],
  "minAge": 21,
  "maxAge": 99,
  "version": "1.1.0",
  "difficultyBand": "intermediate",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/assets/cdl/hazmat-placards.png",
  "learningObjectives": [
    "Identify the 9 hazard classes, their divisions, and associated placards.",
    "Read and interpret hazmat shipping papers and the Hazmat Table.",
    "Apply correct placarding rules based on material type and aggregate gross weight.",
    "Describe loading, unloading, and segregation rules for hazardous materials.",
    "Explain emergency response procedures for hazmat incidents.",
    "Understand the roles and responsibilities of the shipper and the carrier.",
    "Outline the process for the TSA Security Threat Assessment required for the H endorsement."
  ],
  "lessons": [
    {
      "id": "cdl-hm-101-l01",
      "title": "Hazard Classes, Placards, and Shipping Papers",
      "type": "video",
      "duration": 15,
      "chunks": [
        {
          "id": "cdl-hm-101-l01-c1",
          "title": "The Nine Hazard Classes",
          "content": "The Department of Transportation (DOT) organizes all hazardous materials into 9 classes based on their primary danger. Knowing these classes is the foundation of hazmat safety. [Visual Prompt: A full-color, animated grid showing each of the 9 DOT hazard class placards appearing one by one with their class number, name, color, and symbol: Class 1—Explosives (orange), Class 2—Gases (red/green/white), Class 3—Flammable Liquids (red), Class 4—Flammable Solids (red & white stripes/blue/white), Class 5—Oxidizers & Organic Peroxides (yellow), Class 6—Poisons & Infectious Substances (white with skull), Class 7—Radioactive (yellow & white), Class 8—Corrosives (black & white), Class 9—Miscellaneous (white with black stripes).] Some classes are broken into divisions to specify the type of hazard. For example, Class 2 has Division 2.1 (flammable gases), 2.2 (non-flammable gases), and 2.3 (poisonous gases). You must be able to identify these classes to understand shipping papers, placarding, and emergency procedures."
        },
        {
          "id": "cdl-hm-101-l01-c2",
          "title": "Placarding Rules",
          "content": "Placards are diamond-shaped signs placed on all four sides of a vehicle to warn the public and first responders of the hazards inside. [Visual Prompt: A 3D model of a semi-trailer rotating, with placard holders on the front, rear, and both sides highlighted. An animation shows placards for Table 1 materials being applied for a small box, then placards for Table 2 materials being applied only after a scale shows the weight exceeding 1,000 lbs.] Placarding is required based on two tables. Table 1 materials are the most dangerous and require placards for ANY amount. Table 2 materials require placards only when the aggregate gross weight is 1,001 lbs or more. If you carry 1,001+ lbs of two or more Table 2 materials, you may use the 'DANGEROUS' placard. However, you cannot use the 'DANGEROUS' placard for materials that require a Table 1 placard."
        },
        {
          "id": "cdl-hm-101-l01-c3",
          "title": "Shipping Papers and the ERG",
          "content": "The shipper is responsible for preparing the shipping papers, but the driver is responsible for verifying they are correct and accessible. [Visual Prompt: A sample hazmat shipping paper with callout boxes explaining each required field: Proper Shipping Name, Hazard Class, UN/NA ID Number, Packing Group, and Total Quantity. The 'HM' column is shown with an 'X' next to the hazmat entry, and an 'RQ' is highlighted.] Key information includes: the proper shipping name, hazard class, UN/NA identification number, and packing group (I, II, or III, with I being the greatest danger). Hazmat entries must be clearly identified, often with an 'X' or 'RQ' (Reportable Quantity) in the hazmat column. Shipping papers must be within the driver's immediate reach when belted in, and readily visible on the driver's seat or in the door pouch when out of the vehicle. The Emergency Response Guidebook (ERG) uses the UN/NA number to provide critical guidance during the first 30 minutes of an incident."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-hm-101-l01-f1",
          "front": "What are the 9 DOT hazard classes?",
          "back": "1-Explosives, 2-Gases, 3-Flammable Liquids, 4-Flammable Solids, 5-Oxidizers, 6-Poisons, 7-Radioactive, 8-Corrosives, 9-Miscellaneous."
        },
        {
          "id": "cdl-hm-101-l01-f2",
          "front": "When is a 'DANGEROUS' placard permitted?",
          "back": "When transporting 1,001 lbs or more aggregate gross weight of two or more categories of Table 2 materials."
        },
        {
          "id": "cdl-hm-101-l01-f3",
          "front": "What does Packing Group I signify?",
          "back": "The material poses the greatest danger. Packing Groups are I (great danger), II (medium danger), and III (minor danger)."
        },
        {
          "id": "cdl-hm-101-l01-f4",
          "front": "Who is responsible for preparing hazmat shipping papers?",
          "back": "The shipper. The driver is responsible for checking them for accuracy and keeping them accessible."
        }
      ]
    },
    {
      "id": "cdl-hm-101-l02",
      "title": "Loading, Transporting, and Emergency Response",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-hm-101-l02-c1",
          "title": "Loading and Segregation Rules",
          "content": "Never load certain classes of hazardous materials together. The driver is responsible for ensuring the load is properly segregated and secured. [Visual Prompt: A clear, color-coded segregation table. An animation shows a forklift attempting to load boxes of Class 6 Poison next to boxes labeled 'FOOD'; a large red 'X' appears over the screen. Then it shows the forklift correctly loading them in separate trailers.] Key rules: Do not load poisons with foodstuffs. Keep oxidizers away from flammables. Explosives have the most stringent restrictions. Always consult the Segregation Table in the regulations. Before loading, turn off the engine and ensure no smoking within 25 feet. All cargo must be braced and blocked to prevent shifting, falling, or leaking."
        },
        {
          "id": "cdl-hm-101-l02-c2",
          "title": "Driving and Parking with Hazmat",
          "content": "Transporting hazmat requires extra vigilance. [Visual Prompt: A map view of a city with a green line showing a designated hazmat route that bypasses tunnels and dense residential areas, which are marked in red. A separate icon shows a truck parked safely away from the road with reflective triangles set up.] You must follow designated hazmat routes and avoid restricted areas like tunnels. When parking, you must be at least 5 feet from the traveled part of the road. Never park within 300 feet of an open fire. A vehicle carrying hazmat must be 'attended' at all times unless parked in a designated safe haven. 'Attended' means you are within 100 feet and have a clear view of the vehicle. You must also have a fire extinguisher with a rating of 10 B:C or more."
        },
        {
          "id": "cdl-hm-101-l02-c3",
          "title": "Hazmat Emergency Response",
          "content": "In a hazmat incident, your first priority is safety. [Visual Prompt: An animated flowchart for emergency response: 1. PULL OVER SAFELY. 2. IDENTIFY HAZARD (shows driver grabbing shipping papers & ERG). 3. NOTIFY (shows driver on phone calling 911, carrier, CHEMTREC). 4. SECURE AREA (shows driver moving people away and positioning himself upwind/uphill).] If an incident occurs: 1. Secure the scene. 2. Identify the material using shipping papers and placards. 3. Notify authorities (911), your carrier, and CHEMTREC (1-800-424-9300). 4. Protect yourself and the public by keeping people away and staying upwind, uphill, and upstream. Provide your shipping papers to first responders. Do not attempt to fight fires or clean up spills unless you are trained and equipped to do so."
        }
      ],
      "flashcards": [
        {
          "id": "cdl-hm-101-l02-f1",
          "front": "What is the CHEMTREC emergency phone number?",
          "back": "1-800-424-9300. It provides 24/7 expert guidance for hazmat emergencies."
        },
        {
          "id": "cdl-hm-101-l02-f2",
          "front": "What is the minimum fire extinguisher rating required for a placarded hazmat vehicle?",
          "back": "A rating of 10 B:C or more."
        },
        {
          "id": "cdl-hm-101-l02-f3",
          "front": "What does it mean for a hazmat vehicle to be 'attended'?",
          "back": "The driver is awake and either in the vehicle or within 100 feet of it with an unobstructed view."
        },
        {
          "id": "cdl-hm-101-l02-f4",
          "front": "In a hazmat spill, why should you move upwind, uphill, and upstream?",
          "back": "To avoid inhaling toxic fumes (upwind), and to stay clear of leaking liquids or heavier-than-air gases (uphill and upstream)."
        }
      ]
    },
    {
      "id": "cdl-hm-101-l03",
      "title": "TSA Requirements and Practice Exam",
      "type": "quiz",
      "duration": 25,
      "chunks": [
        {
          "id": "cdl-hm-101-l03-c1",
          "title": "TSA Security Threat Assessment and Practice Test",
          "content": "Before you can receive your Hazmat endorsement, you must pass a federal Security Threat Assessment (STA) conducted by the TSA. [Visual Prompt: A simple 3-step graphic: 1. Computer screen showing online application. 2. Fingerprint icon. 3. A driver's license with the 'H' endorsement highlighted.] The process involves an online application, paying a fee, and visiting an enrollment center to provide fingerprints. This background check is valid for five years. You must receive your TSA approval *before* your state will issue the H endorsement. This practice exam will test your knowledge on all key hazmat topics. The official test typically has 30 questions, and you must score at least 80% to pass."
        }
      ],
      "flashcards": []
    }
  ]
};
