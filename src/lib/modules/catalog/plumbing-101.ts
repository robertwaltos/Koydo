import type { LearningModule } from "@/lib/modules/types";

/**
 * Plumbing 101 — v2.0.0 (full rewrite)
 *
 * Plumbing fundamentals covering water supply systems,
 * drain-waste-vent design, pipe joining methods, fixtures,
 * valves, plumbing codes, and troubleshooting — ages 16+.
 *
 * 10 lessons: 3 video · 3 interactive · 4 quiz
 */
export const Plumbing101Module: LearningModule = {
  id: "plumbing-101",
  title: "Plumbing Fundamentals",
  description:
    "Master the principles of residential and commercial plumbing systems — from water supply piping and drain-waste-vent design to pipe joining techniques, fixture installation, code compliance, and diagnosing common service problems.",
  subject: "Trades",
  tags: ["core", "curriculum", "interactive", "trades", "plumbing"],
  minAge: 16,
  maxAge: 99,
  version: "2.0.0",
  difficultyBand: "beginner",
  localeSupport: ["en"],
  thumbnail: "/placeholders/lesson-robot.svg",
  learningObjectives: [
    "Describe how municipal water supply reaches a building and identify common supply pipe materials including copper, PEX, and CPVC",
    "Explain gravity drainage principles, trap seal function, and proper DWV venting to prevent siphonage and sewer gas entry",
    "Compare pipe joining methods — soldering copper, crimping/expanding PEX, solvent welding PVC/CPVC, and threading steel pipe",
    "Identify major plumbing fixtures and valve types, and calculate fixture unit loads for basic system sizing",
    "Interpret International Plumbing Code (IPC) backflow prevention requirements and cross-connection hazards",
    "Diagnose common plumbing problems including leaks, clogs, low pressure, water hammer, and sewer gas odors",
    "Demonstrate mastery of foundational plumbing concepts through integrated checkpoint assessments",
  ],
  lessons: [
    /* ──────────────────────────────────────────────
       L01  Water Supply Systems  (video)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l01",
      title: "Water Supply Systems",
      type: "video",
      duration: 10,
      objectives: [
        "Describe how potable water travels from a municipal source to a building",
        "Compare copper, PEX, and CPVC as supply pipe materials",
        "Explain water pressure, pipe sizing, and the role of the main shutoff valve",
      ],
      chunks: [
        {
          id: "plumbing-101-l01-c1",
          title: "Municipal Supply and Building Entry",
          content:
            "Potable water begins at a treatment plant where it is filtered, disinfected, and pumped into a pressurized distribution main buried beneath public streets. A service line — typically ¾-inch or 1-inch diameter — branches from the main through a curb stop valve and a water meter before entering the building. Inside, a main shutoff valve allows the entire supply to be isolated for repairs. Municipal pressure typically ranges from 40 to 80 psi; a pressure-reducing valve (PRV) is installed when incoming pressure exceeds 80 psi to protect fixtures and piping from damage. Buildings beyond municipal reach rely on private wells with pressure tanks that cycle between cut-in and cut-out pressures.",
        },
        {
          id: "plumbing-101-l01-c2",
          title: "Supply Pipe Materials",
          content:
            "Three materials dominate modern potable water supply lines. Copper (Type L and Type M) has been the industry standard for decades — it resists corrosion, handles high temperatures, and has a proven 50+ year service life, but it requires soldering or press-fit connections. Cross-linked polyethylene (PEX) is a flexible plastic tubing available in sizes from ⅜″ to 1″; it resists scale buildup and freezing damage, installs quickly with crimp or expansion fittings, and costs roughly half the price of copper. Chlorinated polyvinyl chloride (CPVC) is a rigid plastic rated for hot and cold water up to 200 °F; it uses solvent-cement joints and is common in warm climates. Each material has code restrictions — for instance, PEX cannot be exposed to UV light and CPVC may become brittle with certain chemicals.",
        },
        {
          id: "plumbing-101-l01-c3",
          title: "Pressure, Pipe Sizing, and Layout",
          content:
            "Adequate water pressure at every fixture depends on correct pipe sizing. As pipe diameter decreases or run length increases, friction losses rise and delivery pressure drops. Plumbers use friction-loss tables or software to ensure the most remote fixture receives at least 8 psi of residual pressure. A trunk-and-branch layout runs a large main trunk from which smaller branches tee off to fixture groups. A home-run (manifold) layout sends a dedicated PEX line from a central manifold to each fixture, reducing pressure drop and allowing individual shutoff. Pipe sizing follows the fixture-unit method: each fixture is assigned a Water Supply Fixture Unit (WSFU) value, and the total demand is converted to gallons per minute (GPM) to select the correct pipe diameter.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l01-f1",
          front: "What is the typical residential water pressure range, and when is a PRV required?",
          back: "Normal municipal pressure is 40–80 psi. A pressure-reducing valve (PRV) is required when incoming pressure exceeds 80 psi.",
        },
        {
          id: "plumbing-101-l01-f2",
          front: "Name three common potable water supply pipe materials.",
          back: "Copper (Type L/M), PEX (cross-linked polyethylene), and CPVC (chlorinated polyvinyl chloride).",
        },
        {
          id: "plumbing-101-l01-f3",
          front: "What is the difference between a trunk-and-branch layout and a manifold (home-run) layout?",
          back: "Trunk-and-branch uses a large main line with smaller branches teeing off. A manifold layout sends a dedicated PEX line from a central manifold to each fixture, minimizing pressure drop.",
        },
        {
          id: "plumbing-101-l01-f4",
          front: "What is a Water Supply Fixture Unit (WSFU)?",
          back: "A standardized value assigned to each plumbing fixture representing its probable demand on the water supply system, used to size supply piping.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L02  Drain-Waste-Vent (DWV) Systems  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l02",
      title: "Drain-Waste-Vent (DWV) Systems",
      type: "interactive",
      duration: 12,
      objectives: [
        "Explain how gravity moves wastewater through drain and waste pipes",
        "Describe the purpose of trap seals and how venting preserves them",
        "Identify proper slope requirements for horizontal drain pipes",
      ],
      chunks: [
        {
          id: "plumbing-101-l02-c1",
          title: "Gravity Drainage Principles",
          content:
            "Unlike the pressurized supply system, the drain-waste-vent (DWV) system relies entirely on gravity. Wastewater exits a fixture through a tailpiece into a trap, then flows through branch drains into a vertical waste stack or soil stack that carries it down to the building drain below the floor slab. The building drain exits the foundation as the building sewer, which connects to the municipal sewer main or a private septic system. Horizontal drain pipes must be sloped to maintain self-cleaning velocity — typically ¼ inch per foot for pipes 3 inches or smaller and ⅛ inch per foot for 4-inch and larger pipes. Insufficient slope causes solids to settle; excessive slope allows liquids to outrun solids, also causing blockages.",
        },
        {
          id: "plumbing-101-l02-c2",
          title: "Trap Seals and Sewer Gas Prevention",
          content:
            "Every plumbing fixture connects to the DWV system through a trap — a U-shaped or P-shaped fitting that retains a water seal (typically 2 to 4 inches deep). This water plug prevents sewer gases — including methane, hydrogen sulfide, and bacteria — from entering the living space. The most common trap is the P-trap, found under sinks and lavatories. Water closets (toilets) have an integral trap cast into the porcelain. Traps can lose their seal through evaporation (in seldom-used fixtures), siphonage (when venting is inadequate), or back-pressure from a blocked downstream pipe. Floor drains in basements and mechanical rooms require periodic priming with water to maintain the seal.",
        },
        {
          id: "plumbing-101-l02-c3",
          title: "Venting Principles",
          content:
            "Vent pipes are open to atmospheric pressure and serve two critical roles: they allow air into the drainage system to prevent siphonage of trap seals, and they allow sewer gases to escape harmlessly above the roofline. Every trap must be vented within a specified distance (called the developed length) — for a 1½″ trap arm the maximum distance is typically 6 feet. Common vent types include individual vents (one vent per trap), common vents (serving two fixtures back-to-back on opposite sides of a wall), wet vents (where a vent pipe also carries waste from an upstream fixture), and air admittance valves (AAVs), which are one-way mechanical vents permitted by many codes for limited use. The main vent stack extends through the roof at least 6 inches above the roofline.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l02-f1",
          front: "What is the required slope for a 3-inch or smaller horizontal drain pipe?",
          back: "¼ inch per foot of run. Pipes 4 inches and larger require ⅛ inch per foot.",
        },
        {
          id: "plumbing-101-l02-f2",
          front: "What is the purpose of a P-trap?",
          back: "It holds a water seal (2–4 inches deep) that blocks sewer gases from entering the building through the fixture drain.",
        },
        {
          id: "plumbing-101-l02-f3",
          front: "Why do drain pipes need venting?",
          back: "Vents admit atmospheric air to prevent siphonage of trap seals and allow sewer gases to escape above the roofline.",
        },
        {
          id: "plumbing-101-l02-f4",
          front: "What is an Air Admittance Valve (AAV)?",
          back: "A one-way mechanical valve that opens to admit air when negative pressure occurs in the drain, serving as a vent without penetrating the roof. Permitted by many codes for limited applications.",
        },
      ],
      interactiveActivities: [
        {
          id: "plumbing-101-l02-a1",
          type: "sorting_buckets",
          title: "Supply System vs. DWV System Components",
          description:
            "Sort each plumbing component into the correct system category.",
          estimatedMinutes: 5,
          difficultyLevel: "medium",
          buckets: ["Water Supply System", "Drain-Waste-Vent System"],
          items: [
            { text: "Pressure-reducing valve (PRV)", bucket: "Water Supply System" },
            { text: "P-trap under a lavatory", bucket: "Drain-Waste-Vent System" },
            { text: "PEX manifold with hot/cold ports", bucket: "Water Supply System" },
            { text: "Roof vent terminal extending above shingles", bucket: "Drain-Waste-Vent System" },
            { text: "Main shutoff valve at meter", bucket: "Water Supply System" },
            { text: "Building sewer line to municipal main", bucket: "Drain-Waste-Vent System" },
            { text: "Copper Type L tubing for hot water", bucket: "Water Supply System" },
            { text: "Soil stack carrying toilet waste vertically", bucket: "Drain-Waste-Vent System" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L03  Supply & DWV Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l03",
      title: "Supply & DWV Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 },
      },
      questions: [
        {
          id: "plumbing-101-l03-q1",
          text: "At what incoming pressure is a pressure-reducing valve (PRV) required on a residential water supply?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Above 40 psi" },
            { id: "b", text: "Above 60 psi" },
            { id: "c", text: "Above 80 psi" },
            { id: "d", text: "Above 100 psi" },
          ],
          correctOptionId: "c",
          explanation:
            "Most plumbing codes require a PRV when static water pressure at the building entrance exceeds 80 psi to protect fixtures and piping from excessive pressure.",
        },
        {
          id: "plumbing-101-l03-q2",
          text: "Which pipe material is flexible, resistant to freezing damage, and cannot be exposed to ultraviolet light?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Copper Type L" },
            { id: "b", text: "CPVC" },
            { id: "c", text: "Cast iron" },
            { id: "d", text: "PEX" },
          ],
          correctOptionId: "d",
          explanation:
            "PEX (cross-linked polyethylene) is flexible and expands to resist freeze cracking, but it degrades under UV exposure and must be protected from direct sunlight.",
        },
        {
          id: "plumbing-101-l03-q3",
          text: "What is the standard slope for a horizontal drain pipe that is 2 inches in diameter?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "⅛ inch per foot" },
            { id: "b", text: "¼ inch per foot" },
            { id: "c", text: "½ inch per foot" },
            { id: "d", text: "1 inch per foot" },
          ],
          correctOptionId: "b",
          explanation:
            "Horizontal drain pipes 3 inches or smaller require a minimum slope of ¼ inch per foot. Pipes 4 inches and larger require ⅛ inch per foot.",
        },
        {
          id: "plumbing-101-l03-q4",
          text: "A bathroom sink's P-trap has lost its water seal. Which condition is the MOST likely cause?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "The supply pressure is too high" },
            { id: "b", text: "The vent is blocked, causing siphonage" },
            { id: "c", text: "The water heater thermostat is set too low" },
            { id: "d", text: "The main shutoff valve is partially closed" },
          ],
          correctOptionId: "b",
          explanation:
            "A blocked or missing vent creates negative pressure in the drain line that can siphon the water out of the P-trap, breaking the seal and allowing sewer gas to enter.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L04  Pipe Joining Methods  (video)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l04",
      title: "Pipe Joining Methods",
      type: "video",
      duration: 10,
      objectives: [
        "Demonstrate the steps for soldering (sweating) a copper joint",
        "Compare PEX crimp, clamp, and expansion fitting systems",
        "Describe solvent-cement welding for PVC and CPVC pipe",
      ],
      chunks: [
        {
          id: "plumbing-101-l04-c1",
          title: "Soldering Copper Pipe",
          content:
            "Soldering — also called sweating — creates a permanent, leak-free joint by melting a filler metal (solder) into the gap between a copper tube and fitting. The process has five critical steps: cut the tube square with a tube cutter, deburr the inside edge with a reamer, clean the outside of the tube and inside of the fitting with emery cloth or a fitting brush until they are bright and shiny, apply a thin layer of lead-free flux (paste) to both mating surfaces, and then heat the joint evenly with a propane or MAPP-gas torch while touching the solder wire to the opposite side of the fitting. Capillary action draws the molten solder into the gap when the copper reaches the correct temperature (about 450 °F). Allow the joint to cool naturally — quenching with water can cause stress cracks.",
        },
        {
          id: "plumbing-101-l04-c2",
          title: "PEX Connection Systems",
          content:
            "PEX tubing uses mechanical connections rather than soldering or glue. The crimp method requires a copper crimp ring slid over the PEX, a brass insert fitting pushed inside the tube, and a crimp tool that compresses the ring around the tubing and fitting. A go/no-go gauge verifies the crimp diameter. The expansion (cold-expansion) method uses an ASTM F1960 fitting: the PEX end is expanded with a battery-powered expansion tool, the fitting is inserted, and the PEX memory shrinks it tightly around the fitting within seconds. This method is considered more reliable because it produces a full-bore connection with minimal flow restriction. The clamp (cinch) method uses stainless-steel clamp rings and a ratcheting cinch tool — it is the most affordable option and works with all PEX brands. Push-fit (SharkBite-style) fittings require no tools but are generally reserved for repairs rather than full installations.",
        },
        {
          id: "plumbing-101-l04-c3",
          title: "Solvent Welding PVC/CPVC and Threading Steel Pipe",
          content:
            "PVC and CPVC pipes are joined by solvent cementing — a chemical welding process. The pipe end is cut square, deburred, and dry-fitted to check insertion depth. A purple primer is applied to soften both surfaces, followed immediately by a coat of the appropriate cement (PVC cement for PVC, CPVC cement for CPVC — they are not interchangeable). The pipe is pushed fully into the fitting with a quarter-turn twist and held for 30 seconds. Full cure times range from 15 minutes (small pipes, warm conditions) to 48 hours (large pipes, cold conditions) before pressurizing. Galvanized steel and black iron pipe use threaded joints: pipe threads are cut with a manual or powered die, pipe-thread sealant tape (PTFE) or pipe dope is applied to the male threads, and the fitting is tightened with pipe wrenches. Steel pipe is still used for gas lines and some drainage applications.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l04-f1",
          front: "What are the five steps for soldering a copper joint?",
          back: "Cut square, deburr, clean with emery cloth, apply lead-free flux, heat and apply solder — capillary action draws it into the joint.",
        },
        {
          id: "plumbing-101-l04-f2",
          front: "How does the PEX expansion method work?",
          back: "The PEX end is expanded with a tool, a fitting is inserted, and the tubing's memory shrinks it tightly around the fitting, creating a full-bore connection.",
        },
        {
          id: "plumbing-101-l04-f3",
          front: "Why must PVC and CPVC cements not be interchanged?",
          back: "Each cement is chemically formulated to soften and fuse its specific plastic type. Using PVC cement on CPVC (or vice versa) will produce a weak joint that may fail under pressure.",
        },
        {
          id: "plumbing-101-l04-f4",
          front: "What is applied to male pipe threads before assembling a threaded steel joint?",
          back: "PTFE tape (Teflon tape) or pipe-thread sealant compound (pipe dope) to lubricate threads and seal against leaks.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L05  Fixtures and Valves  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l05",
      title: "Fixtures and Valves",
      type: "interactive",
      duration: 12,
      objectives: [
        "Identify common plumbing valve types and their applications",
        "Explain fixture unit values and how they affect system sizing",
        "Describe major fixture categories and water heater fundamentals",
      ],
      chunks: [
        {
          id: "plumbing-101-l05-c1",
          title: "Valve Types and Applications",
          content:
            "Valves control the flow, direction, and pressure of water in a plumbing system. A gate valve opens and closes with a wedge-shaped gate and is designed for full-open or full-closed service — not throttling. A ball valve uses a quarter-turn handle to rotate a bored ball, offering rapid shutoff and excellent flow characteristics; it has largely replaced gate valves in modern installations. A globe valve forces water through an S-shaped path, making it ideal for throttling flow but causing higher pressure drop. Check valves (swing or spring) allow flow in one direction only, preventing backflow. A pressure-reducing valve (PRV) automatically lowers incoming pressure to a set downstream value. Tempering (mixing) valves blend hot and cold water to deliver a safe outlet temperature, typically 120 °F, and are required on water heater outlets in many jurisdictions.",
        },
        {
          id: "plumbing-101-l05-c2",
          title: "Fixture Types and Fixture Units",
          content:
            "Plumbing fixtures are the end-use devices that deliver or receive water. Major categories include water closets (toilets) — rated at 1.6 gallons per flush (GPF) or 1.28 GPF for WaterSense models — lavatories (bathroom sinks), kitchen sinks, bathtubs, showers, bidets, urinals, and hose bibbs. Each fixture is assigned a Drainage Fixture Unit (DFU) value representing its load on the DWV system. A lavatory is typically 1 DFU, a kitchen sink 2 DFU, and a water closet 3-4 DFU. The total DFU count determines the minimum size of branch drains, waste stacks, building drains, and the building sewer. On the supply side, Water Supply Fixture Units (WSFUs) determine pipe sizing using tables from the IPC or UPC.",
        },
        {
          id: "plumbing-101-l05-c3",
          title: "Water Heaters",
          content:
            "Residential water heaters store and heat potable water for domestic use. Tank-type heaters (gas or electric) maintain 40–80 gallons at a set temperature — the first-hour rating (FHR) indicates how many gallons of hot water the unit can deliver in the first hour of use. Tankless (demand) water heaters heat water on the fly using high-powered burners or elements and are rated in gallons per minute (GPM) rather than storage volume. Heat-pump water heaters extract heat from surrounding air and transfer it to the stored water, achieving energy factors (UEF) of 2.0 or higher — roughly twice the efficiency of standard electric tank units. All water heaters require a temperature-and-pressure (T&P) relief valve rated to the unit's BTU input and a discharge pipe routed to within 6 inches of the floor or to an approved drain.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l05-f1",
          front: "What is the key difference between a gate valve and a ball valve?",
          back: "A gate valve uses a wedge gate for full-open/full-closed service. A ball valve uses a quarter-turn bored ball for rapid shutoff and better flow characteristics.",
        },
        {
          id: "plumbing-101-l05-f2",
          front: "What does DFU stand for and what does it represent?",
          back: "Drainage Fixture Unit — a standardized value assigned to each fixture representing its probable load on the DWV system, used to size drain piping.",
        },
        {
          id: "plumbing-101-l05-f3",
          front: "What is the first-hour rating (FHR) on a tank water heater?",
          back: "The number of gallons of hot water the heater can supply during the first hour of heavy use, combining stored hot water and recovery capacity.",
        },
        {
          id: "plumbing-101-l05-f4",
          front: "Why is a T&P relief valve required on every water heater?",
          back: "It opens automatically if temperature exceeds ~210 °F or pressure exceeds 150 psi, preventing catastrophic tank rupture from thermal expansion or runaway heating.",
        },
      ],
      interactiveActivities: [
        {
          id: "plumbing-101-l05-a1",
          type: "matching_pairs",
          title: "Match the Valve to Its Function",
          description:
            "Match each valve type with its primary plumbing function.",
          estimatedMinutes: 4,
          difficultyLevel: "medium",
          pairs: [
            { left: "Gate valve", right: "Full-open / full-closed isolation — not for throttling" },
            { left: "Ball valve", right: "Quarter-turn rapid shutoff with low flow restriction" },
            { left: "Globe valve", right: "Throttling flow regulation with S-path design" },
            { left: "Check valve", right: "Allows flow in one direction only, prevents backflow" },
            { left: "Pressure-reducing valve", right: "Lowers incoming water pressure to a set value" },
            { left: "Tempering (mixing) valve", right: "Blends hot and cold water to a safe outlet temperature" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L06  Pipe Joining & Fixtures Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l06",
      title: "Pipe Joining & Fixtures Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 },
      },
      questions: [
        {
          id: "plumbing-101-l06-q1",
          text: "During copper soldering, what force draws molten solder into the joint?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Gravity" },
            { id: "b", text: "Water pressure" },
            { id: "c", text: "Capillary action" },
            { id: "d", text: "Vacuum suction" },
          ],
          correctOptionId: "c",
          explanation:
            "Capillary action draws the molten solder into the narrow gap between the tube and fitting when the copper surfaces are properly cleaned, fluxed, and heated to the correct temperature.",
        },
        {
          id: "plumbing-101-l06-q2",
          text: "Which PEX connection method creates a full-bore joint by expanding the tubing before inserting the fitting?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Crimp" },
            { id: "b", text: "Expansion (cold-expansion)" },
            { id: "c", text: "Push-fit (SharkBite)" },
            { id: "d", text: "Solvent cement" },
          ],
          correctOptionId: "b",
          explanation:
            "The ASTM F1960 expansion method enlarges the PEX end with a tool, the fitting is inserted, and the tubing's molecular memory contracts it around the fitting for a full-bore connection.",
        },
        {
          id: "plumbing-101-l06-q3",
          text: "A water closet (toilet) is typically rated at how many Drainage Fixture Units (DFU)?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "1 DFU" },
            { id: "b", text: "2 DFU" },
            { id: "c", text: "3–4 DFU" },
            { id: "d", text: "6 DFU" },
          ],
          correctOptionId: "c",
          explanation:
            "A water closet is generally rated at 3 DFU (IPC for 1.6 GPF) or 4 DFU depending on the code edition. Lavatories are 1 DFU and kitchen sinks are 2 DFU.",
        },
        {
          id: "plumbing-101-l06-q4",
          text: "Why should you NOT quench a freshly soldered copper joint with water?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "It washes away the flux needed for bonding" },
            { id: "b", text: "Rapid cooling can cause thermal stress cracks in the joint" },
            { id: "c", text: "The solder has not yet melted at that point" },
            { id: "d", text: "Water reacts chemically with copper to weaken it" },
          ],
          correctOptionId: "b",
          explanation:
            "Quenching subjects the hot joint to sudden contraction, which can create stress cracks in the solder. The joint should be allowed to cool naturally to room temperature.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L07  Plumbing Codes and Safety  (video)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l07",
      title: "Plumbing Codes and Safety",
      type: "video",
      duration: 10,
      objectives: [
        "Identify the major model plumbing codes (IPC and UPC) and explain their purpose",
        "Describe backflow prevention devices and cross-connection hazards",
        "Outline basic gas piping safety requirements for plumbers",
      ],
      chunks: [
        {
          id: "plumbing-101-l07-c1",
          title: "Model Plumbing Codes",
          content:
            "Plumbing work in the United States is governed by model codes adopted at the state or local level. The two primary codes are the International Plumbing Code (IPC), published by the International Code Council (ICC), and the Uniform Plumbing Code (UPC), published by the International Association of Plumbing and Mechanical Officials (IAPMO). Both codes cover minimum pipe sizes, materials, fixture requirements, venting rules, and inspection procedures. The IPC is used by roughly 35 states, while the UPC is predominant in the western states. Plumbers must hold a license issued by the Authority Having Jurisdiction (AHJ) and obtain permits before starting work. Inspections occur at rough-in (before walls are closed) and at final (after fixtures are set and the system is tested).",
        },
        {
          id: "plumbing-101-l07-c2",
          title: "Backflow Prevention and Cross-Connection Control",
          content:
            "A cross-connection is any physical link between potable water and a non-potable source. Backflow occurs when pressure conditions reverse and contaminated water flows back into the drinking supply. Two conditions cause backflow: back-siphonage (negative pressure in the supply) and back-pressure (downstream pressure exceeds supply pressure). Protection devices are ranked by hazard level. An air gap — a physical separation at least twice the supply pipe diameter — is the most reliable method. A reduced-pressure zone (RPZ) assembly protects against high-hazard connections such as boiler fill lines. A double-check valve assembly (DCVA) is used for low-hazard applications like fire sprinkler connections. Atmospheric vacuum breakers (AVBs) and hose-bibb vacuum breakers protect outdoor faucets and irrigation systems.",
        },
        {
          id: "plumbing-101-l07-c3",
          title: "Gas Piping Basics and Safety",
          content:
            "Many plumbers work with natural gas and propane piping for water heaters, furnaces, and cooking appliances. Gas pipe is typically black steel with threaded or pressed fittings, or corrugated stainless steel tubing (CSST) with proprietary connectors. All gas piping must be pressure-tested (minimum 3 psi for 10 minutes with a calibrated gauge for small systems) before being placed in service. Leak detection uses an approved leak-detection solution — never an open flame. Gas appliances require adequate combustion air: sealed-combustion (direct-vent) units draw air from outside, while atmospherically vented appliances rely on room air and need correctly sized combustion air openings. CSST requires bonding to the building's grounding electrode system to protect against lightning-induced arcing. A gas shutoff valve must be within 6 feet of each appliance.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l07-f1",
          front: "What are the two major model plumbing codes used in the United States?",
          back: "The International Plumbing Code (IPC) published by ICC, and the Uniform Plumbing Code (UPC) published by IAPMO.",
        },
        {
          id: "plumbing-101-l07-f2",
          front: "What is a cross-connection?",
          back: "A physical link between a potable water supply and a non-potable source that could allow contamination to enter the drinking water system through backflow.",
        },
        {
          id: "plumbing-101-l07-f3",
          front: "Name three types of backflow prevention devices in order of protection level.",
          back: "Air gap (highest), reduced-pressure zone (RPZ) assembly, and double-check valve assembly (DCVA) — each suited to a different hazard level.",
        },
        {
          id: "plumbing-101-l07-f4",
          front: "How is a gas piping system tested for leaks before use?",
          back: "The system is pressurized to a minimum of 3 psi (for small systems) for 10 minutes using a calibrated gauge. Joints are tested with an approved leak-detection solution — never an open flame.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L08  Troubleshooting Common Problems  (interactive)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l08",
      title: "Troubleshooting Common Problems",
      type: "interactive",
      duration: 12,
      objectives: [
        "Diagnose the root causes of leaks, clogs, and low water pressure",
        "Explain the causes and remedies for water hammer and sewer gas odors",
        "Select appropriate tools and techniques for common plumbing repairs",
      ],
      chunks: [
        {
          id: "plumbing-101-l08-c1",
          title: "Leaks and Clogs",
          content:
            "Leaks are the most common plumbing service call. Supply-side leaks often occur at fittings, valves, or corroded pipe sections and can be detected by a spinning water meter when all fixtures are off. Drain-side leaks are harder to detect — stains on ceilings below bathrooms or musty smells in walls are telltale signs. Troubleshooting starts with isolating the section: close the nearest shutoff valve and observe whether the leak stops. Clogs in drains are typically caused by hair, grease, soap buildup, or foreign objects. A plunger creates pressure and suction to dislodge minor blockages. A hand-cranked drain snake (drum auger) physically breaks through clogs in branch drains up to 50 feet. For main sewer blockages, a powered sewer machine with a cutting head is used. Chemical drain cleaners are discouraged because they corrode pipes and pose safety hazards.",
        },
        {
          id: "plumbing-101-l08-c2",
          title: "Low Water Pressure",
          content:
            "Low pressure complaints require systematic diagnosis. Start at the water meter or well tank and measure static pressure with a gauge — normal residential pressure is 40–80 psi. If pressure at the meter is adequate, the problem is inside the building. Common internal causes include a partially closed main shutoff or fixture stop valve, a clogged or failing PRV, mineral buildup inside galvanized steel pipes (a condition called tuberculation), a clogged aerator on a single faucet, or a failed check valve in a recirculation loop. If only hot water pressure is low, the water heater dip tube may have deteriorated, sending plastic fragments into the piping. Corrosion in older galvanized supply lines is a widespread cause; re-piping with copper or PEX is the permanent solution.",
        },
        {
          id: "plumbing-101-l08-c3",
          title: "Water Hammer and Sewer Gas",
          content:
            "Water hammer is a loud banging noise caused by a pressure shock wave when a fast-closing valve (like a solenoid valve on a washing machine) suddenly stops water flow. The kinetic energy of the moving water column converts into a pressure spike that can exceed 600 psi momentarily, stressing joints and fittings. Water hammer arrestors — small, sealed chambers with a piston or diaphragm and a gas cushion — are installed near the offending valve to absorb the shock. Sewer gas odors inside a building usually indicate a dried-out trap seal (especially on floor drains or seldom-used fixtures), a cracked or disconnected vent pipe, a missing cleanout cap, or a failed wax ring seal under a toilet. Smoke testing — introducing non-toxic smoke into the DWV system — is an effective method for locating the source of a sewer gas leak.",
        },
      ],
      flashcards: [
        {
          id: "plumbing-101-l08-f1",
          front: "How can you detect a hidden supply-side leak?",
          back: "Turn off all fixtures and check the water meter — if it continues to spin, there is a leak in the supply piping between the meter and the fixtures.",
        },
        {
          id: "plumbing-101-l08-f2",
          front: "What is water hammer and how is it prevented?",
          back: "A pressure shock wave from abrupt valve closure. It is prevented by installing water hammer arrestors near fast-closing valves.",
        },
        {
          id: "plumbing-101-l08-f3",
          front: "What causes tuberculation in galvanized pipes?",
          back: "Internal corrosion and mineral deposits build up over time, gradually reducing the pipe's internal diameter and restricting water flow.",
        },
        {
          id: "plumbing-101-l08-f4",
          front: "What is smoke testing in plumbing diagnostics?",
          back: "Non-toxic smoke is pumped into the DWV system to locate leaks — smoke escaping through cracks, dried traps, or disconnected pipes reveals the sewer gas entry point.",
        },
      ],
      interactiveActivities: [
        {
          id: "plumbing-101-l08-a1",
          type: "matching_pairs",
          title: "Match the Symptom to Its Root Cause",
          description:
            "Match each plumbing symptom with its most likely cause.",
          estimatedMinutes: 4,
          difficultyLevel: "medium",
          pairs: [
            { left: "Banging noise when washing machine fills", right: "Water hammer — fast-closing solenoid valve" },
            { left: "Rotten-egg smell from basement floor drain", right: "Dried-out trap seal allowing sewer gas entry" },
            { left: "Low pressure at all fixtures in the house", right: "Failing PRV or partially closed main shutoff" },
            { left: "Low hot-water pressure only", right: "Deteriorated dip tube in the water heater" },
            { left: "Slow drain in bathroom sink", right: "Hair and soap buildup in the P-trap or branch drain" },
            { left: "Water meter spinning with all fixtures off", right: "Hidden supply-side leak in the piping" },
          ],
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L09  Codes & Troubleshooting Checkpoint  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l09",
      title: "Codes & Troubleshooting Checkpoint",
      type: "quiz",
      duration: 8,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 2, apply: 1 },
      },
      questions: [
        {
          id: "plumbing-101-l09-q1",
          text: "Which backflow prevention method provides the HIGHEST level of protection for potable water?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Atmospheric vacuum breaker (AVB)" },
            { id: "b", text: "Double-check valve assembly (DCVA)" },
            { id: "c", text: "Air gap" },
            { id: "d", text: "Hose-bibb vacuum breaker" },
          ],
          correctOptionId: "c",
          explanation:
            "An air gap — a physical separation between the water outlet and the flood-level rim — is the most reliable backflow protection because there is no mechanical device that can fail.",
        },
        {
          id: "plumbing-101-l09-q2",
          text: "A homeowner reports a rotten-egg smell near a guest bathroom that is rarely used. What should the plumber check FIRST?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "The water heater anode rod" },
            { id: "b", text: "The fixture trap seal for evaporation" },
            { id: "c", text: "The incoming water pressure" },
            { id: "d", text: "The supply pipe material" },
          ],
          correctOptionId: "b",
          explanation:
            "In seldom-used fixtures the trap water evaporates, breaking the seal and allowing sewer gas (hydrogen sulfide — the rotten-egg odor) to enter the room. Running water to refill the trap is the immediate fix.",
        },
        {
          id: "plumbing-101-l09-q3",
          text: "What minimum pressure test is required for a small natural gas piping system before it is placed in service?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "½ psi for 5 minutes" },
            { id: "b", text: "3 psi for 10 minutes" },
            { id: "c", text: "15 psi for 30 minutes" },
            { id: "d", text: "80 psi for 1 hour" },
          ],
          correctOptionId: "b",
          explanation:
            "Small residential gas piping is tested at a minimum of 3 psi (typically using a diaphragm gauge) for at least 10 minutes. The gauge must hold steady with no pressure drop to pass.",
        },
        {
          id: "plumbing-101-l09-q4",
          text: "Water hammer arrestors work by:",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Increasing the pipe diameter to slow water velocity" },
            { id: "b", text: "Absorbing the pressure shock wave with a sealed gas cushion" },
            { id: "c", text: "Adding a check valve to prevent reverse flow" },
            { id: "d", text: "Reducing incoming water pressure below 40 psi" },
          ],
          correctOptionId: "b",
          explanation:
            "A water hammer arrestor contains a piston or diaphragm backed by a sealed gas cushion. When the pressure spike occurs, the piston compresses the gas, absorbing the shock wave and protecting the piping.",
        },
      ],
    },

    /* ──────────────────────────────────────────────
       L10  Mastery Quiz: Plumbing Foundations  (quiz)
    ────────────────────────────────────────────── */
    {
      id: "plumbing-101-l10",
      title: "Mastery Quiz: Plumbing Foundations",
      type: "quiz",
      duration: 10,
      quizBlueprint: {
        totalQuestions: 4,
        bloomProfile: { remember: 1, understand: 1, apply: 1, analyze: 1 },
      },
      questions: [
        {
          id: "plumbing-101-l10-q1",
          text: "A plumber needs to join CPVC pipe for a hot-water supply line. Which joining method is correct?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Solder with lead-free solder and flux" },
            { id: "b", text: "Apply CPVC primer and CPVC solvent cement" },
            { id: "c", text: "Use PEX crimp rings and brass insert fittings" },
            { id: "d", text: "Thread the pipe ends and apply PTFE tape" },
          ],
          correctOptionId: "b",
          explanation:
            "CPVC pipe is joined by solvent welding with CPVC-specific primer and cement. Soldering is for copper, crimp fittings are for PEX, and threading is for steel pipe.",
        },
        {
          id: "plumbing-101-l10-q2",
          text: "In a manifold (home-run) PEX supply system, what is the PRIMARY advantage over a traditional trunk-and-branch layout?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "It eliminates the need for a water meter" },
            { id: "b", text: "Each fixture has a dedicated line, reducing pressure drop and allowing individual shutoff" },
            { id: "c", text: "It uses larger pipe throughout to increase flow" },
            { id: "d", text: "It removes the need for venting on the DWV side" },
          ],
          correctOptionId: "b",
          explanation:
            "A manifold system runs a dedicated PEX line to each fixture, so fixtures do not compete for flow on a shared branch. Each line can be individually shut off at the manifold without affecting other fixtures.",
        },
        {
          id: "plumbing-101-l10-q3",
          text: "An inspector finds a 2-inch horizontal drain with a slope of ⅛ inch per foot. What is the correct assessment?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "The slope is correct for pipes 3 inches and smaller" },
            { id: "b", text: "The slope is too steep and will cause channel flow" },
            { id: "c", text: "The slope is insufficient — it should be ¼ inch per foot" },
            { id: "d", text: "Slope is only required for pipes larger than 4 inches" },
          ],
          correctOptionId: "c",
          explanation:
            "Horizontal drains 3 inches or smaller require a minimum ¼ inch per foot slope. The ⅛ inch per foot standard applies only to pipes 4 inches and larger. The 2-inch pipe is under-sloped.",
        },
        {
          id: "plumbing-101-l10-q4",
          text: "A commercial kitchen has a connection between the potable water supply and a chemical mixing station. The health inspector classifies this as a high-hazard cross-connection. Which backflow preventer is MOST appropriate?",
          skillId: "plumbing-101-skill-core",
          options: [
            { id: "a", text: "Hose-bibb vacuum breaker" },
            { id: "b", text: "Double-check valve assembly (DCVA)" },
            { id: "c", text: "Reduced-pressure zone (RPZ) assembly" },
            { id: "d", text: "Atmospheric vacuum breaker (AVB)" },
          ],
          correctOptionId: "c",
          explanation:
            "High-hazard cross-connections require an RPZ assembly, which has two independently operating check valves and a relief port between them. If either check fails, the relief port opens to drain, preventing contamination of the potable supply. An air gap would also be acceptable but is not listed.",
        },
      ],
    },
  ],
};
