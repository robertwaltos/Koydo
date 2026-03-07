import type { LearningModule } from "@/lib/modules/types";

export const cdl_hazmat_endorsement_101_Module: LearningModule = {
  "id": "cdl-hazmat-endorsement-101",
  "title": "CDL Hazmat Endorsement (H)",
  "description": "Complete study guide for the CDL Hazardous Materials (Hazmat) endorsement. Covers the 9 hazard classes, placarding rules, shipping papers, loading/unloading procedures, emergency response, and the Hazmat Table (49 CFR 172.101). Requires a TSA security threat assessment in addition to passing the knowledge test.",
  "subject": "CDL",
  "tags": ["core", "curriculum", "cdl", "trades", "exam-prep", "hazmat", "endorsement"],
  "minAge": 21,
  "maxAge": 99,
  "version": "1.0.0",
  "difficultyBand": "intermediate",
  "localeSupport": ["en"],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Identify the 9 hazard classes and their associated placard designs",
    "Read and interpret hazmat shipping papers and the Hazmat Table",
    "Apply correct placarding rules based on cargo type and quantity",
    "Describe loading, unloading, and segregation rules for hazardous materials",
    "Explain emergency response procedures for hazmat incidents",
    "Understand TSA background check requirements for the H endorsement"
  ],
  "lessons": [
    {
      "id": "cdl-hm-101-l01",
      "title": "Hazard Classes and Placarding",
      "type": "video",
      "duration": 14,
      "chunks": [
        {
          "id": "cdl-hm-101-l01-c1",
          "title": "The Nine Hazard Classes",
          "content": "All hazardous materials are classified into 9 classes by the Department of Transportation. [Visual Prompt: Full-color grid showing all 9 DOT hazard class placards with their class numbers, colors, and symbols: Class 1 — Explosives (orange), Class 2 — Gases (red/green/white), Class 3 — Flammable Liquids (red), Class 4 — Flammable Solids (red-white striped), Class 5 — Oxidizers/Organic Peroxides (yellow), Class 6 — Poisons/Infectious Substances (white with skull), Class 7 — Radioactive (yellow-white with trefoil), Class 8 — Corrosives (half black/half white), Class 9 — Miscellaneous (white with black stripes).] Each class has specific rules for handling, loading, and transport. Some classes have divisions — for example, Class 2 has Division 2.1 (flammable gases like propane), Division 2.2 (non-flammable gases like oxygen), and Division 2.3 (poisonous gases like chlorine). You must know these classes to correctly identify placards, read shipping papers, and respond to emergencies."
        },
        {
          "id": "cdl-hm-101-l01-c2",
          "title": "Placarding Rules",
          "content": "Federal law requires diamond-shaped placards on all four sides of a vehicle carrying hazardous materials above certain quantities. [Visual Prompt: Diagram of a truck/trailer showing placard placement positions on front, rear, and both sides, with examples of when placards are required: Table 1 materials (ANY quantity) vs Table 2 materials (1,001 lbs or more aggregate).] Table 1 materials (the most dangerous — explosives 1.1-1.3, poison gas 2.3, danger when wet 4.3, organic peroxide type B 5.2, poison inhalation 6.1, radioactive 7) require placards at ANY quantity. Table 2 materials (less dangerous classes) require placards only when the aggregate weight is 1,001 pounds or more. If carrying 1,001+ lbs of two or more Table 2 materials, you may use DANGEROUS placards instead of individual class placards — EXCEPT you must still show individual placards for any material requiring Table 1 placards."
        },
        {
          "id": "cdl-hm-101-l01-c3",
          "title": "Shipping Papers and ERG",
          "content": "Hazmat shipping papers must contain specific information and be accessible in the cab at all times. [Visual Prompt: Sample hazmat shipping paper showing required fields: proper shipping name (highlighted), hazard class, ID number (UN/NA), packing group, total quantity, and emergency contact phone number, with 'X' or 'RQ' in the HM column.] Required information on shipping papers: proper shipping name, hazard class number, UN/NA identification number, packing group (I, II, or III — I being most dangerous), total quantity, and a 24-hour emergency response phone number. Hazmat entries must be highlighted, printed in a different color, or marked with an 'X' in the HM column. The Emergency Response Guidebook (ERG) is a reference book that should be kept in every CMV transporting hazmat. It provides initial response guidance organized by 4-digit UN/NA number and by placard color/type."
        }
      ],
      "flashcards": [
        { "id": "cdl-hm-101-l01-f1", "front": "Name the 9 DOT hazard classes.", "back": "1-Explosives, 2-Gases, 3-Flammable Liquids, 4-Flammable Solids, 5-Oxidizers, 6-Poisons, 7-Radioactive, 8-Corrosives, 9-Miscellaneous." },
        { "id": "cdl-hm-101-l01-f2", "front": "When are placards required for Table 2 hazmat materials?", "back": "When the aggregate weight is 1,001 pounds or more." },
        { "id": "cdl-hm-101-l01-f3", "front": "What does packing group I mean?", "back": "Greatest danger. Packing groups indicate danger level: I = great danger, II = medium danger, III = minor danger." },
        { "id": "cdl-hm-101-l01-f4", "front": "Where must hazmat shipping papers be kept in the cab?", "back": "In a pouch on the driver's door or in clear view within reach while driving. On the seat or in the door pouch when not behind the wheel." }
      ]
    },
    {
      "id": "cdl-hm-101-l02",
      "title": "Loading, Unloading, and Emergency Response",
      "type": "video",
      "duration": 12,
      "chunks": [
        {
          "id": "cdl-hm-101-l02-c1",
          "title": "Loading and Segregation Rules",
          "content": "Certain hazmat classes cannot be loaded together in the same vehicle. [Visual Prompt: Segregation table showing which hazard classes can and cannot be loaded together, with red X marks for prohibited combinations (e.g., Class 1 Explosives cannot be loaded with Class 3 Flammable Liquids) and green checkmarks for permitted combinations.] Key segregation rules: Poison/toxic materials (6.1) must not be loaded in the same vehicle with foodstuffs. Explosives (Class 1) have the most restrictions and cannot be loaded with most other hazard classes. Oxidizers (Class 5) must be separated from flammable materials. Always check the Hazmat Table (49 CFR 172.101) for specific compatibility. When loading: turn off your engine, set the parking brake, and chock wheels. No smoking within 25 feet. Use proper protective equipment as listed on the Safety Data Sheet. Secure all containers so they cannot shift, fall, or leak during transport."
        },
        {
          "id": "cdl-hm-101-l02-c2",
          "title": "Driving with Hazmat",
          "content": "Hazmat drivers have additional responsibilities beyond standard CMV rules. [Visual Prompt: Route map showing a hazmat truck route through a city, avoiding tunnels, residential areas, and crowded areas, with HAZMAT ROUTE signs and restricted zones marked.] You must plan your route to avoid populated areas, tunnels, and narrow roads when possible. Some tunnels and bridges prohibit hazmat vehicles entirely. Never park within 5 feet of the traveled roadway. If you must park near the road, use warning devices. You may never park within 300 feet of a bridge, tunnel, or building with people unless the vehicle is attended or it is necessary for operation. A hazmat vehicle must be attended at all times — meaning the driver is in the vehicle or within 100 feet with clear view of it. Tire checks are required at the beginning of each trip and every time you stop."
        },
        {
          "id": "cdl-hm-101-l02-c3",
          "title": "Hazmat Emergency Response",
          "content": "In a hazmat emergency, your safety and public safety come first. [Visual Prompt: Emergency response flowchart: Assess → Protect (upwind, uphill, upstream) → Notify (911, carrier, CHEMTREC 1-800-424-9300) → Isolate (keep people away) → Reference ERG → Wait for HazMat team.] Steps in a hazmat emergency: (1) Keep yourself and others away from the material. (2) Move upwind, uphill, and upstream from the spill. (3) Notify local emergency services (911) and your carrier. (4) Call CHEMTREC at 1-800-424-9300 for technical emergency guidance. (5) Have shipping papers available for emergency responders — they contain the product names, hazard classes, and emergency contact numbers. (6) Do NOT attempt to clean up a hazmat spill yourself unless you are trained to the Hazmat Technician level. (7) If the material is on fire, do not fight it unless you know exactly what it is and how it reacts with water — some materials react violently with water."
        }
      ],
      "flashcards": [
        { "id": "cdl-hm-101-l02-f1", "front": "What is the CHEMTREC emergency phone number?", "back": "1-800-424-9300 — provides 24/7 technical hazmat emergency guidance." },
        { "id": "cdl-hm-101-l02-f2", "front": "How far from the traveled roadway must you park a hazmat vehicle?", "back": "At least 5 feet from the traveled portion of the road." },
        { "id": "cdl-hm-101-l02-f3", "front": "What does 'attended vehicle' mean for hazmat?", "back": "The driver is in the vehicle, or within 100 feet of it with a clear line of sight." },
        { "id": "cdl-hm-101-l02-f4", "front": "In which direction should you move from a hazmat spill?", "back": "Upwind, uphill, and upstream — to avoid exposure to fumes, runoff, and contamination." }
      ]
    },
    {
      "id": "cdl-hm-101-l03",
      "title": "CDL Hazmat Endorsement Practice Exam",
      "type": "quiz",
      "duration": 25,
      "chunks": [
        {
          "id": "cdl-hm-101-l03-c1",
          "title": "Hazmat Practice Test",
          "content": "This practice exam simulates the CDL Hazmat endorsement knowledge test. The real exam has 30 questions and you need 80% (24 correct) to pass. Remember: the H endorsement also requires a TSA security threat assessment (background check), which involves fingerprinting at an authorized enrollment center and a fee (approximately $86.50 as of 2026). The background check must be completed before you can take the Hazmat knowledge test at the DMV. Topics covered: hazard classes, placarding, shipping papers, loading/segregation, driving rules, emergency response, and the Hazmat Table."
        }
      ],
      "flashcards": []
    }
  ]
};
