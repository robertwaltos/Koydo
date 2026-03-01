import type { LearningModule } from "@/lib/modules/types";

export const Biotechnology101Module: LearningModule = {
  "id": "biotechnology-101",
  "title": "Biotechnology Foundations",
  "description": "Master the science of biotechnology — from DNA structure and recombinant techniques to CRISPR genome editing, biopharmaceuticals, agricultural biotech, and the ethical frameworks guiding modern innovation.",
  "subject": "Biotechnology",
  "tags": [
    "core",
    "curriculum",
    "interactive",
    "stem",
    "life-sciences"
  ],
  "minAge": 15,
  "maxAge": 99,
  "version": "2.0.0",
  "difficultyBand": "beginner",
  "localeSupport": [
    "en"
  ],
  "thumbnail": "/placeholders/lesson-robot.svg",
  "learningObjectives": [
    "Explain the central dogma of molecular biology and its relevance to biotechnology",
    "Describe recombinant DNA technology including restriction enzymes, plasmid vectors, and transformation",
    "Outline the principles of PCR, gel electrophoresis, and DNA sequencing methods",
    "Analyze the CRISPR-Cas9 mechanism and compare NHEJ and HDR repair pathways",
    "Evaluate the development and function of biopharmaceuticals, mRNA vaccines, and gene therapy",
    "Assess the benefits and risks of agricultural biotechnology, biofuels, and industrial fermentation",
    "Discuss bioethical considerations and regulatory frameworks governing GMOs and genome editing"
  ],
  "lessons": [
    {
      "id": "biotechnology-101-l01",
      "title": "What is Biotechnology? — DNA, Genes & the Central Dogma",
      "type": "video",
      "duration": 12,
      "objectives": [
        "Define biotechnology and trace its historical development from fermentation to genomics",
        "Describe the structure of DNA including nucleotides, base pairing, and the double helix",
        "Explain the central dogma of molecular biology: DNA → RNA → Protein"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l01-c1",
          "title": "Defining Biotechnology",
          "content": "Biotechnology is the use of living organisms, cells, or biological systems to develop products and technologies that improve human life. The term spans millennia — ancient civilizations used yeast fermentation to make bread and beer. Modern biotechnology emerged in the 1970s when scientists learned to cut, splice, and transfer DNA between organisms. Today the field encompasses medicine (biopharmaceuticals, gene therapy), agriculture (GM crops), industry (biofuels, enzymes), and environmental science (bioremediation). Understanding biotechnology begins with understanding its molecular foundation: DNA."
        },
        {
          "id": "biotechnology-101-l01-c2",
          "title": "DNA Structure and Genes",
          "content": "Deoxyribonucleic acid (DNA) is a double-stranded helical polymer made of nucleotide subunits. Each nucleotide contains a deoxyribose sugar, a phosphate group, and one of four nitrogenous bases: adenine (A), thymine (T), guanine (G), or cytosine (C). Base-pairing rules (A–T, G–C) hold the two strands together via hydrogen bonds. A gene is a specific stretch of DNA that encodes instructions for building a functional product, usually a protein. The human genome contains roughly 20,000–25,000 protein-coding genes distributed across 23 pairs of chromosomes. Variations in DNA sequence — mutations — drive evolution and can cause genetic diseases."
        },
        {
          "id": "biotechnology-101-l01-c3",
          "title": "The Central Dogma",
          "content": "The central dogma of molecular biology, articulated by Francis Crick in 1958, describes the flow of genetic information: DNA is transcribed into messenger RNA (mRNA) in the nucleus, then mRNA is translated into protein at ribosomes in the cytoplasm. During transcription, RNA polymerase reads the template strand and synthesizes a complementary mRNA (using uracil instead of thymine). During translation, transfer RNAs (tRNAs) carry amino acids to the ribosome, where codons on the mRNA are matched to anticodons on tRNA, assembling a polypeptide chain. Biotechnology manipulates every step of this flow — inserting genes, editing sequences, or harnessing expression systems to produce desired proteins."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l01-f1",
          "front": "Biotechnology",
          "back": "The use of living organisms, cells, or biological systems to develop products and technologies — spans medicine, agriculture, industry, and environmental science"
        },
        {
          "id": "biotechnology-101-l01-f2",
          "front": "DNA base-pairing rules",
          "back": "Adenine pairs with Thymine (A–T, two hydrogen bonds); Guanine pairs with Cytosine (G–C, three hydrogen bonds)"
        },
        {
          "id": "biotechnology-101-l01-f3",
          "front": "Central dogma of molecular biology",
          "back": "DNA → (transcription) → mRNA → (translation) → Protein — the unidirectional flow of genetic information"
        },
        {
          "id": "biotechnology-101-l01-f4",
          "front": "Gene",
          "back": "A specific segment of DNA that encodes the instructions for building a functional RNA or protein product"
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l01-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "biotechnology-101-l02",
      "title": "Recombinant DNA Technology & Molecular Cloning",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Explain how restriction enzymes recognize and cut DNA at specific palindromic sequences",
        "Describe the role of plasmid vectors, DNA ligase, and selectable markers in molecular cloning",
        "Outline the transformation process and methods for screening recombinant clones"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l02-c1",
          "title": "Restriction Enzymes: Molecular Scissors",
          "content": "Restriction enzymes (restriction endonucleases) are proteins produced by bacteria as a defense against viral DNA. Each enzyme recognizes a specific palindromic DNA sequence — typically 4–8 base pairs long — and cuts both strands. For example, EcoRI recognizes 5′-GAATTC-3′ and cuts between the G and A on each strand, producing sticky ends with single-stranded overhangs. Other enzymes like SmaI produce blunt ends. Sticky ends are preferred in cloning because the complementary overhangs base-pair with matching fragments, making ligation more efficient. Hundreds of restriction enzymes have been characterized, giving scientists a versatile toolbox for cutting DNA at precise locations."
        },
        {
          "id": "biotechnology-101-l02-c2",
          "title": "Plasmid Vectors and DNA Ligase",
          "content": "A cloning vector is a DNA molecule that can carry a foreign DNA insert into a host cell and replicate there. Plasmids — small, circular, double-stranded DNA molecules found naturally in bacteria — are the most common vectors. A good cloning plasmid contains an origin of replication (ori) so it replicates independently, a selectable marker gene (e.g., antibiotic resistance to ampicillin) to identify bacteria that took up the plasmid, and a multiple cloning site (MCS) with several unique restriction enzyme sites for inserting foreign DNA. After cutting both the vector and the target gene with the same restriction enzyme, DNA ligase joins the fragments by forming phosphodiester bonds, creating a recombinant plasmid."
        },
        {
          "id": "biotechnology-101-l02-c3",
          "title": "Transformation and Clone Screening",
          "content": "Transformation is the process of introducing recombinant DNA into host cells — most commonly E. coli. Bacteria are made competent (able to take up DNA) using calcium chloride treatment or electroporation (brief electric pulse). After transformation, cells are plated on selective media containing an antibiotic; only cells harboring the plasmid (with the resistance gene) survive. Blue-white screening uses the lacZ gene: insertional inactivation of lacZ in recombinant plasmids produces white colonies, while non-recombinant plasmids yield blue colonies on X-gal plates. Positive clones are further verified by colony PCR or restriction digest analysis."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l02-a1",
          "title": "Match the Cloning Component",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "EcoRI",
              "right": "Restriction enzyme that cuts at GAATTC"
            },
            {
              "left": "DNA ligase",
              "right": "Enzyme that joins DNA fragments by forming phosphodiester bonds"
            },
            {
              "left": "Plasmid",
              "right": "Circular DNA vector with ori, MCS, and selectable marker"
            },
            {
              "left": "Ampicillin resistance",
              "right": "Selectable marker gene on the cloning vector"
            },
            {
              "left": "Blue-white screening",
              "right": "Method using lacZ/X-gal to identify recombinant clones"
            },
            {
              "left": "Electroporation",
              "right": "Using an electric pulse to make cells competent for transformation"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l02-f1",
          "front": "Restriction enzyme",
          "back": "A bacterial protein that cuts DNA at specific palindromic sequences — produces sticky ends or blunt ends used in molecular cloning"
        },
        {
          "id": "biotechnology-101-l02-f2",
          "front": "Sticky ends vs. blunt ends",
          "back": "Sticky ends: single-stranded overhangs that base-pair with complementary fragments (more efficient ligation). Blunt ends: flush cuts with no overhang"
        },
        {
          "id": "biotechnology-101-l02-f3",
          "front": "Plasmid vector components",
          "back": "Origin of replication (ori), selectable marker (e.g., antibiotic resistance), and multiple cloning site (MCS) with unique restriction sites"
        },
        {
          "id": "biotechnology-101-l02-f4",
          "front": "Transformation",
          "back": "The process of introducing foreign DNA into a host cell — typically E. coli made competent via CaCl₂ or electroporation"
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l02-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "biotechnology-101-l03",
      "title": "Foundations of Biotechnology Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of DNA structure, the central dogma, restriction enzymes, and molecular cloning"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l03-q1",
          "text": "The central dogma of molecular biology describes the flow of information as:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Protein → RNA → DNA"
            },
            {
              "id": "b",
              "text": "DNA → RNA → Protein"
            },
            {
              "id": "c",
              "text": "RNA → DNA → Protein"
            },
            {
              "id": "d",
              "text": "DNA → Protein → RNA"
            }
          ],
          "correctOptionId": "b",
          "explanation": "The central dogma states that DNA is transcribed into mRNA, which is then translated into protein — the standard unidirectional flow of genetic information."
        },
        {
          "id": "biotechnology-101-l03-q2",
          "text": "Restriction enzymes are valuable in molecular cloning because they:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Replicate DNA during the cell cycle"
            },
            {
              "id": "b",
              "text": "Cut DNA at specific, predictable sequences"
            },
            {
              "id": "c",
              "text": "Translate mRNA into protein"
            },
            {
              "id": "d",
              "text": "Synthesize new DNA strands from scratch"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Restriction enzymes recognize specific palindromic sequences and cut both DNA strands, enabling precise insertion of foreign DNA into vectors."
        },
        {
          "id": "biotechnology-101-l03-q3",
          "text": "During blue-white screening, white colonies indicate:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Bacteria that did not take up any plasmid"
            },
            {
              "id": "b",
              "text": "Bacteria with non-recombinant plasmids (intact lacZ)"
            },
            {
              "id": "c",
              "text": "Bacteria with recombinant plasmids (disrupted lacZ)"
            },
            {
              "id": "d",
              "text": "Dead bacteria that failed to grow"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Inserting foreign DNA into the lacZ gene disrupts β-galactosidase production, so recombinant colonies appear white instead of blue on X-gal plates."
        },
        {
          "id": "biotechnology-101-l03-q4",
          "text": "A plasmid cloning vector must contain all of the following EXCEPT:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Origin of replication (ori)"
            },
            {
              "id": "b",
              "text": "Selectable marker (e.g., antibiotic resistance)"
            },
            {
              "id": "c",
              "text": "Multiple cloning site (MCS)"
            },
            {
              "id": "d",
              "text": "Eukaryotic centromere"
            }
          ],
          "correctOptionId": "d",
          "explanation": "Bacterial plasmids need an ori, selectable marker, and MCS — but not a eukaryotic centromere, which is a chromosome structure found in eukaryotic cells."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 4,
        "bloomProfile": {
          "remember": 2,
          "understand": 2
        }
      },
      "learningAids": [
        {
          "id": "biotechnology-101-l03-a1",
          "type": "mnemonic",
          "title": "Memory Cue",
          "content": "Use Plan, Solve, Explain to structure each response."
        }
      ]
    },
    {
      "id": "biotechnology-101-l04",
      "title": "PCR, Gel Electrophoresis & DNA Sequencing",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Describe the three steps of PCR and the role of Taq polymerase",
        "Explain how agarose gel electrophoresis separates DNA fragments by size",
        "Compare Sanger sequencing with next-generation sequencing (NGS) technologies"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l04-c1",
          "title": "Polymerase Chain Reaction (PCR)",
          "content": "PCR is a technique that amplifies a specific DNA segment exponentially, producing millions of copies from a tiny starting sample. It requires a DNA template, two short oligonucleotide primers flanking the target region, deoxyribonucleotide triphosphates (dNTPs), and Taq polymerase — a heat-stable DNA polymerase isolated from the thermophilic bacterium Thermus aquaticus. Each PCR cycle has three temperature-controlled steps: (1) Denaturation at ~95 °C separates the double-stranded DNA. (2) Annealing at ~55–65 °C allows primers to bind complementary sequences. (3) Extension at ~72 °C enables Taq polymerase to synthesize new strands. After 30 cycles, one molecule becomes approximately one billion copies (2³⁰). PCR is foundational for diagnostics, forensics, cloning, and genetic testing."
        },
        {
          "id": "biotechnology-101-l04-c2",
          "title": "Gel Electrophoresis",
          "content": "Agarose gel electrophoresis separates DNA fragments by size. DNA samples are loaded into wells in an agarose gel submerged in buffer. When an electric field is applied, negatively charged DNA migrates toward the positive electrode (anode). Smaller fragments move faster through the gel matrix, while larger fragments migrate more slowly, producing distinct bands. A DNA ladder (molecular weight marker) loaded alongside the samples provides size references. After electrophoresis, DNA is visualized using ethidium bromide or safer dyes like SYBR Safe under UV light. This technique confirms PCR product sizes, verifies restriction digests, and assesses DNA quality."
        },
        {
          "id": "biotechnology-101-l04-c3",
          "title": "DNA Sequencing: Sanger and NGS",
          "content": "Sanger sequencing (chain-termination method), developed by Frederick Sanger in 1977, uses dideoxynucleotides (ddNTPs) that lack the 3′ hydroxyl group needed for chain elongation. When a ddNTP is incorporated during DNA synthesis, the growing strand terminates. Running all four ddNTP reactions and separating the fragments by size reveals the sequence one base at a time. Sanger sequencing reads ~700–1,000 bases per run and remains the gold standard for validating specific sequences. Next-generation sequencing (NGS) platforms — such as Illumina — massively parallelize sequencing, reading millions of short fragments simultaneously. NGS enables whole-genome sequencing in hours and has driven the cost below $1,000 per human genome. Third-generation platforms (PacBio, Oxford Nanopore) read long single molecules in real time, improving assembly of repetitive regions."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l04-f1",
          "front": "Three steps of PCR",
          "back": "1) Denaturation (~95 °C) — strands separate. 2) Annealing (~55–65 °C) — primers bind. 3) Extension (~72 °C) — Taq polymerase synthesizes new DNA"
        },
        {
          "id": "biotechnology-101-l04-f2",
          "front": "Taq polymerase",
          "back": "A heat-stable DNA polymerase from Thermus aquaticus — withstands repeated denaturation at 95 °C, enabling PCR cycling"
        },
        {
          "id": "biotechnology-101-l04-f3",
          "front": "Gel electrophoresis principle",
          "back": "DNA (negatively charged) migrates toward the anode through an agarose matrix — smaller fragments travel faster, producing size-based separation"
        },
        {
          "id": "biotechnology-101-l04-f4",
          "front": "Sanger vs. NGS sequencing",
          "back": "Sanger: chain-termination with ddNTPs, reads ~700–1,000 bp, gold standard for validation. NGS: massively parallel, millions of reads, enables whole-genome sequencing"
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l04-a1",
          "type": "image",
          "title": "Concept Card",
          "content": "Visual summary of the lesson's main concept."
        }
      ]
    },
    {
      "id": "biotechnology-101-l05",
      "title": "CRISPR-Cas9 & Genome Editing",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe the natural CRISPR adaptive immune system in bacteria and its adaptation as a genome-editing tool",
        "Explain the roles of guide RNA, PAM site, and Cas9 in creating targeted double-strand breaks",
        "Compare the NHEJ and HDR DNA repair pathways and their applications in gene editing"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l05-c1",
          "title": "CRISPR in Nature and as a Tool",
          "content": "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a natural adaptive immune system found in bacteria and archaea. When a bacteriophage infects a bacterium, the cell captures a short piece of viral DNA and integrates it into its CRISPR array as a spacer. On subsequent infection, the spacer is transcribed into CRISPR RNA (crRNA) that guides a Cas nuclease to the matching viral DNA, which is then cleaved and destroyed. In 2012, Jennifer Doudna and Emmanuelle Charpentier demonstrated that the Cas9 protein from Streptococcus pyogenes could be reprogrammed with a synthetic single guide RNA (sgRNA) to cut any DNA sequence of interest — transforming a bacterial defense into the most powerful genome-editing tool in history."
        },
        {
          "id": "biotechnology-101-l05-c2",
          "title": "Guide RNA, PAM Site, and Double-Strand Breaks",
          "content": "The CRISPR-Cas9 system requires two components: the Cas9 endonuclease and a guide RNA (gRNA) — a ~20-nucleotide sequence complementary to the target DNA. Cas9 scans the genome for a protospacer adjacent motif (PAM) — a short 5′-NGG-3′ sequence immediately downstream of the target. When the gRNA base-pairs with the complementary strand adjacent to a PAM, Cas9 undergoes a conformational change that activates its two nuclease domains (RuvC and HNH), each cutting one strand of the DNA to create a precise double-strand break (DSB). The requirement for both gRNA complementarity and a PAM provides dual-layer targeting specificity, though off-target edits at similar sequences remain a concern addressed by high-fidelity Cas9 variants."
        },
        {
          "id": "biotechnology-101-l05-c3",
          "title": "DNA Repair: NHEJ vs. HDR",
          "content": "After Cas9 creates a double-strand break, the cell activates one of two repair pathways. Non-homologous end joining (NHEJ) is error-prone: it directly ligates the broken ends, often introducing small insertions or deletions (indels) that disrupt the gene — effectively a gene knockout. NHEJ is active throughout the cell cycle and is the dominant repair pathway. Homology-directed repair (HDR) uses a supplied DNA template with sequences homologous to the regions flanking the break to introduce precise edits — point mutations, gene insertions, or tag additions. HDR is restricted to the S and G2 phases of the cell cycle and is less efficient than NHEJ. Researchers optimize HDR efficiency by synchronizing cell cycles, using single-stranded oligonucleotide donors, or inhibiting NHEJ. Applications range from correcting disease-causing mutations (sickle cell disease, beta-thalassemia) to creating transgenic organisms for research."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l05-a1",
          "title": "Sort CRISPR Concepts",
          "type": "sorting_buckets",
          "buckets": [
            "NHEJ Repair",
            "HDR Repair"
          ],
          "items": [
            {
              "text": "Error-prone — introduces insertions or deletions",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Requires a homologous DNA template",
              "bucket": "HDR Repair"
            },
            {
              "text": "Active throughout the cell cycle",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Restricted to S and G2 phases",
              "bucket": "HDR Repair"
            },
            {
              "text": "Used for gene knockouts",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Enables precise point mutations and gene insertions",
              "bucket": "HDR Repair"
            },
            {
              "text": "Directly ligates broken DNA ends",
              "bucket": "NHEJ Repair"
            },
            {
              "text": "Uses single-stranded oligonucleotide donors",
              "bucket": "HDR Repair"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l05-f1",
          "front": "CRISPR-Cas9",
          "back": "A genome-editing system using a guide RNA to direct the Cas9 nuclease to a specific DNA sequence, creating a targeted double-strand break"
        },
        {
          "id": "biotechnology-101-l05-f2",
          "front": "PAM (protospacer adjacent motif)",
          "back": "A short DNA sequence (5′-NGG-3′ for SpCas9) required adjacent to the target site for Cas9 recognition and cleavage"
        },
        {
          "id": "biotechnology-101-l05-f3",
          "front": "NHEJ (non-homologous end joining)",
          "back": "Error-prone DSB repair that ligates broken ends directly — often introduces indels, useful for gene knockouts"
        },
        {
          "id": "biotechnology-101-l05-f4",
          "front": "HDR (homology-directed repair)",
          "back": "Precise DSB repair using a homologous template — enables exact gene corrections, insertions, or modifications; active in S/G2 phases"
        }
      ],
      "learningAids": [
        {
          "id": "biotechnology-101-l05-a1",
          "type": "practice",
          "title": "Guided Practice",
          "content": "Follow the prompt sequence and document your reasoning."
        }
      ]
    },
    {
      "id": "biotechnology-101-l06",
      "title": "Molecular Methods & Genome Editing Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate understanding of PCR, sequencing, and CRISPR-Cas9 genome editing"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l06-q1",
          "text": "During PCR, Taq polymerase is essential because it:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cuts DNA at restriction sites"
            },
            {
              "id": "b",
              "text": "Survives the high-temperature denaturation step (~95 °C)"
            },
            {
              "id": "c",
              "text": "Ligates DNA fragments together"
            },
            {
              "id": "d",
              "text": "Unwinds the double helix using helicase activity"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Taq polymerase is thermostable — isolated from Thermus aquaticus — allowing it to retain activity through repeated 95 °C denaturation cycles."
        },
        {
          "id": "biotechnology-101-l06-q2",
          "text": "Sanger sequencing relies on chain termination caused by:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Restriction enzymes cutting the growing strand"
            },
            {
              "id": "b",
              "text": "dNTPs forming complete strands"
            },
            {
              "id": "c",
              "text": "Dideoxynucleotides (ddNTPs) lacking the 3′ hydroxyl group"
            },
            {
              "id": "d",
              "text": "RNA primers that cannot extend"
            }
          ],
          "correctOptionId": "c",
          "explanation": "ddNTPs lack the 3′-OH required for forming the next phosphodiester bond, so chain elongation stops wherever a ddNTP is incorporated."
        },
        {
          "id": "biotechnology-101-l06-q3",
          "text": "In the CRISPR-Cas9 system, the PAM sequence is necessary for:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Synthesizing the guide RNA"
            },
            {
              "id": "b",
              "text": "Cas9 recognition and binding to the target DNA"
            },
            {
              "id": "c",
              "text": "Replicating the plasmid vector"
            },
            {
              "id": "d",
              "text": "Ligating the double-strand break"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cas9 first recognizes the PAM (5′-NGG-3′) adjacent to the target site before unwinding the DNA and checking for gRNA complementarity."
        },
        {
          "id": "biotechnology-101-l06-q4",
          "text": "A researcher wants to precisely correct a disease-causing point mutation using CRISPR. Which repair pathway should they favor?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "NHEJ — because it is fast and efficient"
            },
            {
              "id": "b",
              "text": "HDR — because it uses a template for precise editing"
            },
            {
              "id": "c",
              "text": "Mismatch repair — because it fixes single bases"
            },
            {
              "id": "d",
              "text": "Base excision repair — because it removes damaged bases"
            }
          ],
          "correctOptionId": "b",
          "explanation": "HDR uses a supplied homologous donor template to introduce precise changes at the break site, making it ideal for correcting specific mutations."
        },
        {
          "id": "biotechnology-101-l06-q5",
          "text": "After 30 cycles of PCR, approximately how many copies of the target sequence are produced from one template molecule?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "30"
            },
            {
              "id": "b",
              "text": "1,000"
            },
            {
              "id": "c",
              "text": "One million"
            },
            {
              "id": "d",
              "text": "One billion (2³⁰ ≈ 10⁹)"
            }
          ],
          "correctOptionId": "d",
          "explanation": "PCR doubles the target DNA each cycle. After 30 cycles: 2³⁰ ≈ 1.07 × 10⁹ (approximately one billion copies)."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 2,
          "understand": 2,
          "apply": 1
        }
      }
    },
    {
      "id": "biotechnology-101-l07",
      "title": "Biopharmaceuticals, Vaccines & Gene Therapy",
      "type": "video",
      "duration": 13,
      "objectives": [
        "Explain how monoclonal antibodies are produced and used as targeted therapeutics",
        "Compare traditional vaccine platforms with mRNA vaccine technology",
        "Describe the principles of gene therapy including viral vector delivery using AAV"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l07-c1",
          "title": "Monoclonal Antibodies",
          "content": "Monoclonal antibodies (mAbs) are laboratory-produced proteins engineered to bind a single specific antigen with high affinity. They are generated using hybridoma technology: a mouse is immunized with the target antigen, spleen B cells producing the desired antibody are fused with immortal myeloma cells to create hybridomas that proliferate indefinitely and secrete identical antibodies. Modern approaches include humanized antibodies (replacing mouse framework regions with human sequences to reduce immunogenicity) and fully human antibodies produced using phage display or transgenic mice. mAbs are used to treat cancer (trastuzumab targets HER2 in breast cancer), autoimmune diseases (adalimumab blocks TNF-α in rheumatoid arthritis), and infectious diseases. The global mAb market exceeds $200 billion annually, making them the largest class of biopharmaceuticals."
        },
        {
          "id": "biotechnology-101-l07-c2",
          "title": "mRNA Vaccines",
          "content": "Traditional vaccines use inactivated pathogens, live-attenuated organisms, or purified protein subunits to stimulate immunity. mRNA vaccines represent a paradigm shift: synthetic mRNA encoding a pathogen protein (e.g., SARS-CoV-2 spike protein) is encapsulated in lipid nanoparticles (LNPs) and injected into muscle tissue. Host ribosomes translate the mRNA into the target protein, which is displayed on cell surfaces, triggering both humoral (antibody) and cellular (T cell) immune responses. The mRNA is degraded within days and never enters the nucleus or alters the recipient's DNA. Advantages include rapid design (Moderna's COVID-19 vaccine sequence was finalized in two days), scalable manufacturing, and flexibility — the same platform can target new variants or entirely different pathogens by simply changing the mRNA sequence."
        },
        {
          "id": "biotechnology-101-l07-c3",
          "title": "Gene Therapy and AAV Vectors",
          "content": "Gene therapy aims to treat or cure genetic diseases by delivering a functional copy of a defective gene, silencing a harmful gene, or editing the genome directly. Adeno-associated viruses (AAVs) are the most widely used delivery vectors: they infect human cells efficiently, provoke minimal immune response, and rarely integrate into the host genome (reducing insertional mutagenesis risk). AAV serotypes differ in tissue tropism — AAV9 crosses the blood-brain barrier (used in Zolgensma for spinal muscular atrophy), AAV8 targets the liver. Limitations include limited cargo capacity (~4.7 kb), potential immune reactions on re-dosing, and high manufacturing costs. Ex vivo gene therapy modifies a patient's own cells (e.g., hematopoietic stem cells) outside the body before reinfusion, while in vivo therapy delivers the vector directly to the patient. Luxturna (for inherited retinal dystrophy) and Zolgensma exemplify FDA-approved gene therapies that have transformed patient outcomes."
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l07-f1",
          "front": "Monoclonal antibodies (mAbs)",
          "back": "Lab-produced proteins that bind a single specific antigen — generated via hybridoma technology, used in cancer, autoimmune, and infectious disease treatment"
        },
        {
          "id": "biotechnology-101-l07-f2",
          "front": "mRNA vaccine mechanism",
          "back": "Synthetic mRNA in lipid nanoparticles is translated by host ribosomes into pathogen protein, triggering antibody and T cell responses — mRNA never enters the nucleus"
        },
        {
          "id": "biotechnology-101-l07-f3",
          "front": "AAV (adeno-associated virus)",
          "back": "A small, non-pathogenic viral vector used in gene therapy — efficient cell entry, low immunogenicity, limited cargo (~4.7 kb), serotype-dependent tissue tropism"
        },
        {
          "id": "biotechnology-101-l07-f4",
          "front": "Ex vivo vs. in vivo gene therapy",
          "back": "Ex vivo: patient cells modified outside the body then reinfused. In vivo: vector delivered directly into the patient's body"
        }
      ]
    },
    {
      "id": "biotechnology-101-l08",
      "title": "Agricultural Biotech, Biofuels & Industrial Applications",
      "type": "interactive",
      "duration": 14,
      "objectives": [
        "Describe the development and function of Bt crops, Golden Rice, and Roundup Ready varieties",
        "Explain cellulosic ethanol production and the role of bioreactors in industrial fermentation",
        "Discuss bioethics considerations and regulatory frameworks governing GMOs and biotechnology"
      ],
      "chunks": [
        {
          "id": "biotechnology-101-l08-c1",
          "title": "Agricultural Biotechnology: GM Crops",
          "content": "Agricultural biotechnology uses genetic engineering to improve crop traits. Bt crops (corn, cotton, soybean) carry a gene from the soil bacterium Bacillus thuringiensis encoding Cry proteins — crystalline toxins that bind to receptors in the gut lining of target insect pests (e.g., European corn borer), creating lethal pores. Bt crops reduce pesticide use by 37% on average while increasing yields. Golden Rice is engineered to produce beta-carotene (provitamin A) in the grain endosperm by introducing two genes from daffodil and the bacterium Erwinia — addressing vitamin A deficiency that causes blindness in 250,000–500,000 children annually. Roundup Ready crops contain the CP4 EPSPS gene from Agrobacterium, conferring tolerance to glyphosate herbicide and enabling no-till farming that reduces soil erosion. Controversy surrounds herbicide-tolerant crops due to concerns about herbicide-resistant weeds and environmental impact."
        },
        {
          "id": "biotechnology-101-l08-c2",
          "title": "Biofuels and Industrial Fermentation",
          "content": "Biofuels are renewable energy sources derived from biological feedstocks. First-generation bioethanol uses food crops (corn, sugarcane) as substrate — yeast ferments sugars into ethanol and CO₂. Cellulosic ethanol (second-generation) uses non-food lignocellulosic biomass — agricultural residues, wood chips, switchgrass — that must be pretreated to break down lignin, then enzymatically hydrolyzed by cellulases to release fermentable sugars. Industrial bioreactors are engineered vessels that maintain optimal conditions (temperature, pH, dissolved oxygen, agitation) for microbial fermentation at scale. Fed-batch and continuous fermentation modes maximize product yields. Beyond fuels, industrial fermentation produces enzymes (amylases in detergents), organic acids (citric acid from Aspergillus niger), amino acids (L-lysine from Corynebacterium), antibiotics (penicillin from Penicillium), and bioplastics (polyhydroxyalkanoates from bacteria)."
        },
        {
          "id": "biotechnology-101-l08-c3",
          "title": "Bioethics, GMO Regulation, and Societal Impact",
          "content": "Biotechnology raises profound ethical questions. GMO regulation varies globally: the United States follows a coordinated framework (USDA, EPA, FDA), evaluating GMOs based on the product's characteristics rather than the process. The European Union applies the precautionary principle, requiring extensive pre-market safety assessments and mandatory labeling. Key bioethical debates include: germline vs. somatic gene editing (editing heritable DNA raises concerns about designer babies and equity), dual-use research (CRISPR could create bioweapons), genetic privacy (who owns your genome data?), and access to expensive gene therapies (Zolgensma costs ~$2.1 million per dose). The scientific consensus holds that approved GM foods are as safe as conventional counterparts, supported by over 2,000 studies. Balancing innovation with precaution, equity, and public engagement remains central to responsible biotechnology development."
        }
      ],
      "interactiveActivities": [
        {
          "id": "biotechnology-101-l08-a1",
          "title": "Match Application to Biotech Category",
          "type": "matching_pairs",
          "pairs": [
            {
              "left": "Bt Cry protein in corn",
              "right": "Agricultural biotech — insect pest resistance"
            },
            {
              "left": "Golden Rice with beta-carotene",
              "right": "Agricultural biotech — nutritional enhancement"
            },
            {
              "left": "Cellulosic ethanol from switchgrass",
              "right": "Biofuels — second-generation renewable energy"
            },
            {
              "left": "Citric acid from Aspergillus niger",
              "right": "Industrial fermentation — organic acid production"
            },
            {
              "left": "Roundup Ready soybeans",
              "right": "Agricultural biotech — herbicide tolerance"
            },
            {
              "left": "AAV gene therapy for SMA",
              "right": "Medical biotech — therapeutic gene delivery"
            }
          ]
        }
      ],
      "flashcards": [
        {
          "id": "biotechnology-101-l08-f1",
          "front": "Bt crops",
          "back": "Genetically engineered plants carrying Bacillus thuringiensis Cry protein genes — produce insecticidal toxins that kill target pests, reducing pesticide use"
        },
        {
          "id": "biotechnology-101-l08-f2",
          "front": "Golden Rice",
          "back": "Rice engineered to produce beta-carotene (provitamin A) in the endosperm — developed to combat vitamin A deficiency in developing countries"
        },
        {
          "id": "biotechnology-101-l08-f3",
          "front": "Cellulosic ethanol",
          "back": "Second-generation biofuel produced from non-food lignocellulosic biomass — requires pretreatment, enzymatic hydrolysis by cellulases, then yeast fermentation"
        },
        {
          "id": "biotechnology-101-l08-f4",
          "front": "Bioreactor",
          "back": "An engineered vessel that maintains optimal conditions (temperature, pH, O₂, agitation) for large-scale microbial fermentation to produce fuels, enzymes, or pharmaceuticals"
        }
      ]
    },
    {
      "id": "biotechnology-101-l09",
      "title": "Applications & Bioethics Checkpoint",
      "type": "quiz",
      "duration": 8,
      "objectives": [
        "Demonstrate knowledge of biopharmaceuticals, agricultural biotech, biofuels, and bioethics"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l09-q1",
          "text": "Monoclonal antibodies are produced using hybridoma technology, which involves fusing:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Two different bacterial strains"
            },
            {
              "id": "b",
              "text": "B cells with myeloma cells"
            },
            {
              "id": "c",
              "text": "T cells with dendritic cells"
            },
            {
              "id": "d",
              "text": "Stem cells with fibroblasts"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Hybridoma technology fuses antigen-specific B cells from an immunized animal with immortal myeloma cells to create cells that proliferate and secrete identical antibodies indefinitely."
        },
        {
          "id": "biotechnology-101-l09-q2",
          "text": "mRNA vaccines do NOT alter the recipient's DNA because:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "The mRNA is destroyed before entering any cells"
            },
            {
              "id": "b",
              "text": "mRNA is translated in the cytoplasm and never enters the nucleus"
            },
            {
              "id": "c",
              "text": "mRNA integrates into mitochondrial DNA instead"
            },
            {
              "id": "d",
              "text": "The lipid nanoparticle prevents nuclear entry of all molecules"
            }
          ],
          "correctOptionId": "b",
          "explanation": "mRNA is translated by ribosomes in the cytoplasm. It does not enter the nucleus where chromosomal DNA resides, and it is degraded within days by normal cellular enzymes."
        },
        {
          "id": "biotechnology-101-l09-q3",
          "text": "Bt crops reduce pesticide use because they:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Produce their own herbicide"
            },
            {
              "id": "b",
              "text": "Contain Cry proteins toxic to target insect pests"
            },
            {
              "id": "c",
              "text": "Are resistant to all plant diseases"
            },
            {
              "id": "d",
              "text": "Grow faster than pests can consume them"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bt crops express Cry proteins from Bacillus thuringiensis that create lethal pores in the gut lining of target insect larvae, providing built-in pest protection."
        },
        {
          "id": "biotechnology-101-l09-q4",
          "text": "The main challenge of cellulosic ethanol compared to corn ethanol is:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Cellulose ferments too quickly"
            },
            {
              "id": "b",
              "text": "Lignocellulosic biomass requires pretreatment and enzymatic hydrolysis before fermentation"
            },
            {
              "id": "c",
              "text": "Cellulose cannot be converted to sugar"
            },
            {
              "id": "d",
              "text": "It produces methanol instead of ethanol"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Lignocellulosic biomass contains lignin and crystalline cellulose that must be physically/chemically pretreated, then enzymatically broken down by cellulases before yeast can ferment the released sugars."
        },
        {
          "id": "biotechnology-101-l09-q5",
          "text": "Which bioethical concern distinguishes germline gene editing from somatic gene therapy?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Germline edits are less precise"
            },
            {
              "id": "b",
              "text": "Germline edits are heritable and affect future generations"
            },
            {
              "id": "c",
              "text": "Somatic therapy cannot use CRISPR"
            },
            {
              "id": "d",
              "text": "Germline editing only works in plants"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Germline edits alter DNA in eggs, sperm, or embryos and are passed to all future generations — raising ethical concerns about consent, equity, and unintended consequences that somatic therapy does not."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 5,
        "bloomProfile": {
          "remember": 1,
          "understand": 2,
          "apply": 1,
          "analyze": 1
        }
      }
    },
    {
      "id": "biotechnology-101-l10",
      "title": "Biotechnology Foundations — Comprehensive Final",
      "type": "quiz",
      "duration": 15,
      "objectives": [
        "Synthesize knowledge across DNA fundamentals, molecular cloning, PCR, sequencing, CRISPR, biopharmaceuticals, agricultural biotech, and bioethics"
      ],
      "questions": [
        {
          "id": "biotechnology-101-l10-q1",
          "text": "Which enzyme joins DNA fragments by forming phosphodiester bonds during molecular cloning?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Restriction endonuclease"
            },
            {
              "id": "b",
              "text": "DNA polymerase"
            },
            {
              "id": "c",
              "text": "DNA ligase"
            },
            {
              "id": "d",
              "text": "RNA polymerase"
            }
          ],
          "correctOptionId": "c",
          "explanation": "DNA ligase catalyzes the formation of phosphodiester bonds between the 3′-OH and 5′-phosphate of adjacent nucleotides, sealing nicks in the sugar-phosphate backbone."
        },
        {
          "id": "biotechnology-101-l10-q2",
          "text": "A PAM sequence is required in the CRISPR-Cas9 system to:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Translate the guide RNA into protein"
            },
            {
              "id": "b",
              "text": "Allow Cas9 to dock and verify target complementarity"
            },
            {
              "id": "c",
              "text": "Activate DNA ligase for repair"
            },
            {
              "id": "d",
              "text": "Provide primers for PCR amplification"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Cas9 first identifies the PAM (5′-NGG-3′), then unwinds the adjacent DNA to check for gRNA complementarity before cleaving both strands."
        },
        {
          "id": "biotechnology-101-l10-q3",
          "text": "Golden Rice was engineered to address deficiency in:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Iron"
            },
            {
              "id": "b",
              "text": "Vitamin C"
            },
            {
              "id": "c",
              "text": "Vitamin A (beta-carotene)"
            },
            {
              "id": "d",
              "text": "Calcium"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Golden Rice produces beta-carotene (provitamin A) in the grain endosperm to combat vitamin A deficiency, a leading cause of childhood blindness in developing nations."
        },
        {
          "id": "biotechnology-101-l10-q4",
          "text": "In gel electrophoresis, DNA fragments migrate toward the positive electrode because:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "DNA has a net positive charge from histone proteins"
            },
            {
              "id": "b",
              "text": "The agarose gel pushes DNA forward mechanically"
            },
            {
              "id": "c",
              "text": "DNA's phosphate backbone carries a net negative charge"
            },
            {
              "id": "d",
              "text": "The electric field reverses DNA polarity"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Each phosphate group in DNA's backbone carries a negative charge at physiological pH, so DNA molecules migrate through the gel toward the anode (positive electrode)."
        },
        {
          "id": "biotechnology-101-l10-q5",
          "text": "An AAV vector is preferred for gene therapy because it:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Has unlimited cargo capacity"
            },
            {
              "id": "b",
              "text": "Integrates efficiently into the host genome"
            },
            {
              "id": "c",
              "text": "Causes strong immune suppression"
            },
            {
              "id": "d",
              "text": "Infects cells efficiently with minimal immune response and low integration risk"
            }
          ],
          "correctOptionId": "d",
          "explanation": "AAVs are small, non-pathogenic vectors that transduce cells efficiently, provoke minimal immune response, and rarely integrate into host DNA — reducing insertional mutagenesis risk."
        },
        {
          "id": "biotechnology-101-l10-q6",
          "text": "The Roundup Ready trait in soybeans confers tolerance to:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Drought stress"
            },
            {
              "id": "b",
              "text": "Insect herbivory"
            },
            {
              "id": "c",
              "text": "Glyphosate herbicide"
            },
            {
              "id": "d",
              "text": "Fungal infection"
            }
          ],
          "correctOptionId": "c",
          "explanation": "Roundup Ready crops carry the CP4 EPSPS gene from Agrobacterium, which encodes an enzyme resistant to glyphosate (Roundup), allowing the herbicide to kill weeds without harming the crop."
        },
        {
          "id": "biotechnology-101-l10-q7",
          "text": "Which statement best describes the difference between Sanger sequencing and next-generation sequencing (NGS)?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Sanger uses primers; NGS does not"
            },
            {
              "id": "b",
              "text": "NGS reads millions of fragments in parallel; Sanger reads one fragment at a time"
            },
            {
              "id": "c",
              "text": "Sanger is faster and cheaper than NGS"
            },
            {
              "id": "d",
              "text": "NGS cannot sequence human genomes"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NGS massively parallelizes sequencing — reading millions of short fragments simultaneously — enabling whole-genome sequencing in hours. Sanger reads one ~700–1,000 bp fragment per reaction."
        },
        {
          "id": "biotechnology-101-l10-q8",
          "text": "A bioreactor is best described as:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "A chemical reactor that uses only inorganic catalysts"
            },
            {
              "id": "b",
              "text": "An engineered vessel maintaining optimal conditions for microbial fermentation at scale"
            },
            {
              "id": "c",
              "text": "A device that separates DNA fragments by electrophoresis"
            },
            {
              "id": "d",
              "text": "A centrifuge for isolating cell organelles"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Bioreactors are engineered vessels that control temperature, pH, dissolved oxygen, and agitation to optimize microbial growth and product formation at industrial scale."
        },
        {
          "id": "biotechnology-101-l10-q9",
          "text": "Which repair pathway would a researcher exploit to knock out a gene using CRISPR-Cas9?",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "Homology-directed repair (HDR)"
            },
            {
              "id": "b",
              "text": "Non-homologous end joining (NHEJ)"
            },
            {
              "id": "c",
              "text": "Nucleotide excision repair (NER)"
            },
            {
              "id": "d",
              "text": "Base excision repair (BER)"
            }
          ],
          "correctOptionId": "b",
          "explanation": "NHEJ is error-prone — it ligates broken ends directly, often introducing insertions or deletions (indels) that disrupt the reading frame and effectively knock out the gene."
        },
        {
          "id": "biotechnology-101-l10-q10",
          "text": "The primary ethical concern unique to germline genome editing is that:",
          "skillId": "biotechnology-101-skill-core",
          "options": [
            {
              "id": "a",
              "text": "It only works in bacterial cells"
            },
            {
              "id": "b",
              "text": "Changes are heritable and affect all future generations without their consent"
            },
            {
              "id": "c",
              "text": "It cannot use CRISPR technology"
            },
            {
              "id": "d",
              "text": "It is less expensive than somatic therapy"
            }
          ],
          "correctOptionId": "b",
          "explanation": "Germline edits in eggs, sperm, or embryos are inherited by all descendants — raising unique ethical questions about consent, equity, and unintended multigenerational consequences."
        }
      ],
      "quizBlueprint": {
        "totalQuestions": 10,
        "bloomProfile": {
          "remember": 3,
          "understand": 3,
          "apply": 2,
          "analyze": 2
        }
      }
    }
  ]
};
