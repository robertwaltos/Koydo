import type { LearningModule } from "@/lib/modules/types";

// High-quality curriculum module derived from EPUB.
// Source: G:/My Drive/15_E-BOOKS/file002188.epub
// Author: Gary A. Donahue  |  Subject: Networking/IT

export const NetworkWarriorGaryADonahueModule: LearningModule = {
  id: "network-warrior-gary-a-donahue",
  title: "Network Warrior",
  description:
    "A comprehensive educational module derived from Network Warrior by Gary A. Donahue. This course provides structured video lessons and interactive quizzes exploring the key themes, arguments, and insights of the work.",
  subject: "Networking/IT",
  tags: ["epub-derived", "curriculum", "interactive", "networking", "it"],
  minAge: 18,
  maxAge: 99,
  version: "2.0.0",
  learningObjectives: [
    "Understand and critically analyze the concepts related to conventions used in this book",
    "Understand and critically analyze the concepts related to using code examples",
    "Understand and critically analyze the concepts related to we'd like to hear from you",
    "Understand and critically analyze the concepts related to safari® enabled",
    "Understand and critically analyze the concepts related to hubs, switches, and switching",
    "Understand and critically analyze the concepts related to what is a network?",
    "Understand and critically analyze the concepts related to hubs and switches",
  ],
  lessons: [
    /* ─────────────────────────────────────────────────
       L01  Conventions Used in This Book and Using Code Examples
    ───────────────────────────────────────────────── */
    {
      id: "nw-l01",
      title: "Conventions Used in This Book and Using Code Examples",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to conventions used in this book",
        "Examine the key ideas and arguments related to using code examples",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "nw-l01-c1",
          title: "Conventions Used in This Book",
          content:
            "Conventions Used in This Book The following typographical conventions are used in this book: Italic Used for new terms where they are defined, for emphasis, and for URLs Constant width Used for commands, output from devices as it is seen on the screen, and samples of Request for Comments (RFC) documents reproduced in the text Constant width italic Used to indicate arguments within commands for which you should supply values Constant width bold Used for commands to be entered by the user and to highlight sections of output from a device that have been referenced in the text or are significant in some way Tip Indicates a tip, suggestion, or general note Warning Indicates a warning or caution",
        },
        {
          id: "nw-l01-c2",
          title: "Using Code Examples",
          content:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implications for contemporary understanding.",
        },
        {
          id: "nw-l01-c3",
          title: "Deeper Analysis: Conventions Used in This Book",
          content:
            "Conventions Used in This Book The following typographical conventions are used in this book: Italic Used for new terms where they are defined, for emphasis, and for URLs Constant width Used for commands, output from devices as it is seen on the screen, and samples of Request for Comments (RFC) documents reproduced in the text Constant width italic Used to indicate arguments within commands for which you should supply values Constant width bold Used for commands to be entered by the user and to highlight sections of output from a device that have been referenced in the text or are significant in some way Tip Indicates a tip, suggestion, or general note Warning Indicates a warning or caution",
        },
      ],
      flashcards: [
        {
          id: "nw-l01-f1",
          front: "Conventions Used in This Book",
          back:
            "Conventions Used in This Book The following typographical conventions are used in this book: Italic Used for new terms where they are defined, for emphasis, and for URLs Constant w...",
        },
        {
          id: "nw-l01-f2",
          front: "Using Code Examples",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
        {
          id: "nw-l01-f3",
          front: "Key concept: Conventions Used in This Book",
          back:
            "Conventions Used in This Book The following typographical conventions are used in this book: Italic Used for new terms where they are defined, for emphasis, and for URLs Constant w...",
        },
        {
          id: "nw-l01-f4",
          front: "Key concept: Using Code Examples",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L02  We'd Like to Hear from You and Safari® Enabled
    ───────────────────────────────────────────────── */
    {
      id: "nw-l02",
      title: "We'd Like to Hear from You and Safari® Enabled",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to we'd like to hear from you",
        "Examine the key ideas and arguments related to safari® enabled",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "nw-l02-c1",
          title: "We'd Like to Hear from You",
          content:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implications for contemporary understanding.",
        },
        {
          id: "nw-l02-c2",
          title: "Safari® Enabled",
          content:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implications for contemporary understanding.",
        },
        {
          id: "nw-l02-c3",
          title: "Deeper Analysis: We'd Like to Hear from You",
          content:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implications for contemporary understanding.",
        },
      ],
      flashcards: [
        {
          id: "nw-l02-f1",
          front: "We'd Like to Hear from You",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
        {
          id: "nw-l02-f2",
          front: "Safari® Enabled",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
        {
          id: "nw-l02-f3",
          front: "Key concept: We'd Like to Hear from You",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
        {
          id: "nw-l02-f4",
          front: "Key concept: Safari® Enabled",
          back:
            "This section examines the fundamental concepts and arguments presented by the author, exploring their significance within the broader context of the discipline and their implicatio...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L03  Hubs, Switches, and Switching and What Is a Network?
    ───────────────────────────────────────────────── */
    {
      id: "nw-l03",
      title: "Hubs, Switches, and Switching and What Is a Network?",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to hubs, switches, and switching",
        "Examine the key ideas and arguments related to what is a network?",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "nw-l03-c1",
          title: "Hubs, Switches, and Switching",
          content:
            "Part I. Hubs, Switches, and Switching This section begins with a brief introduction to networks. It then moves on to describe the benefits and drawbacks of hubs and switches in Ethernet networks. Finally, many of the protocols commonly used in a switched environment are covered. This section is composed of the following chapters: Chapter 1 Chapter 2 Chapter 3 Chapter 4 Chapter 5 Chapter 6 Chapter 7 Chapter 8",
        },
        {
          id: "nw-l03-c2",
          title: "What Is a Network?",
          content:
            "Chapter 1. What Is a Network? Before we get started, I would like to define some terms and set some ground rules. For the purposes of this book (and your professional life, I hope), a computer network can be defined as \"two or more computers connected by some means through which they are capable of sharing information.\" Don't bother looking for that in an RFC because I just made it up, but it suits our needs just fine.",
        },
        {
          id: "nw-l03-c3",
          title: "Deeper Analysis: Hubs, Switches, and Switching",
          content:
            "Part I. Hubs, Switches, and Switching This section begins with a brief introduction to networks. It then moves on to describe the benefits and drawbacks of hubs and switches in Ethernet networks. Finally, many of the protocols commonly used in a switched environment are covered. This section is composed of the following chapters: Chapter 1 Chapter 2 Chapter 3 Chapter 4 Chapter 5 Chapter 6 Chapter 7 Chapter 8",
        },
      ],
      flashcards: [
        {
          id: "nw-l03-f1",
          front: "Hubs, Switches, and Switching",
          back:
            "Part I.",
        },
        {
          id: "nw-l03-f2",
          front: "What Is a Network?",
          back:
            "There are many types of networks: Local Area Networks (LANs), Wide Area Networks (WANs), Metropolitan Area Networks (MANs), Campus Area Networks (CANs), Ethernet networks, Token Ri...",
        },
        {
          id: "nw-l03-f3",
          front: "Key concept: Hubs, Switches, and Switching",
          back:
            "Part I.",
        },
        {
          id: "nw-l03-f4",
          front: "Key concept: What Is a Network?",
          back:
            "It's what distinguishes a sneaker net , in which information is physically transferred from one computer to another via removable media, from a real network.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L04  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "nw-l04",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "nw-l04-q1",
          text: "Which of the following best describes a key idea from the section on Conventions Used in This Book?",
          options: [
            { id: "a", text: "Conventions Used in This Book The following typographical conventions are used in this book: Italic..." },
            { id: "b", text: "Key aspects of we'd like to hear from you" },
            { id: "c", text: "Key aspects of using code examples" },
            { id: "d", text: "Key aspects of safari® enabled" },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Conventions Used in This Book. Conventions Used in This Book The following typographical conventions are used in this book: Italic...",
        },
        {
          id: "nw-l04-q2",
          text: "Which of the following best describes a key idea from the section on Using Code Examples?",
          options: [
            { id: "a", text: "Key aspects of using code examples" },
            { id: "b", text: "Key aspects of safari® enabled" },
            { id: "c", text: "Conventions Used in This Book The following typographical conventions are used in this book: Italic..." },
            { id: "d", text: "Key aspects of we'd like to hear from you" },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Using Code Examples. Key aspects of using code examples",
        },
        {
          id: "nw-l04-q3",
          text: "Which of the following best describes a key idea from the section on We'd Like to Hear from You?",
          options: [
            { id: "a", text: "Key aspects of safari® enabled" },
            { id: "b", text: "Key aspects of using code examples" },
            { id: "c", text: "Key aspects of we'd like to hear from you" },
            { id: "d", text: "Conventions Used in This Book The following typographical conventions are used in this book: Italic..." },
          ],
          correctOptionId: "c",
          explanation:
            "This question relates to We'd Like to Hear from You. Key aspects of we'd like to hear from you",
        },
        {
          id: "nw-l04-q4",
          text: "Which of the following best describes a key idea from the section on Safari® Enabled?",
          options: [
            { id: "a", text: "Conventions Used in This Book The following typographical conventions are used in this book: Italic..." },
            { id: "b", text: "Key aspects of using code examples" },
            { id: "c", text: "Key aspects of we'd like to hear from you" },
            { id: "d", text: "Key aspects of safari® enabled" },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Safari® Enabled. Key aspects of safari® enabled",
        },
        {
          id: "nw-l04-q5",
          text: "Which of the following best describes a key idea from the section on Hubs, Switches, and Switching?",
          options: [
            { id: "a", text: "Part I." },
            { id: "b", text: "Conventions Used in This Book The following typographical conventions are used in this book: Italic..." },
            { id: "c", text: "Key aspects of using code examples" },
            { id: "d", text: "Key aspects of we'd like to hear from you" },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to Hubs, Switches, and Switching. Part I.",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L05  Hubs and Switches and Switches
    ───────────────────────────────────────────────── */
    {
      id: "nw-l05",
      title: "Hubs and Switches and Switches",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to hubs and switches",
        "Examine the key ideas and arguments related to switches",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "nw-l05-c1",
          title: "Hubs and Switches",
          content:
            "Chapter 2. Hubs and Switches Hubs In the beginning of Ethernet, 10Base-5 used a very thick cable that was hard to work with (it was nicknamed thicknet ). 10Base-2, which later replaced 10Base-5, used a much smaller cable, similar to that used for cable TV. Because the cable was much thinner than that used by 10Base-5, 10Base-2 was nicknamed thin-net . These cable technologies required large metal couplers called N connectors (10Base-5) and BNC connectors (10Base-2). These networks also required special terminators to be installed at the end of cable runs. When these couplers or terminators were removed, the entire network would stop working. These cables formed the physical backbones for Ethernet networks.",
        },
        {
          id: "nw-l05-c2",
          title: "Switches",
          content:
            "Switches The next step in the evolution of Ethernet after the hub was the switch. Switches differ from hubs in that switches play an active role in how frames are forwarded. Remember that a hub simply repeats every signal it receives via any of its ports out every other port. A switch, in contrast, keeps track of what devices are on what ports, and forwards frames only to the devices for which they are intended. Tip What we refer to as a packet in TCP/IP is called a frame when speaking about hubs, bridges, and switches. Technically, they are different things, since a TCP packet is encapsulated with layer-2 information to form a frame. However, the terms \"frames\" and \"packets\" are often thrown around interchangeably (I'm guilty of this myself).",
        },
        {
          id: "nw-l05-c3",
          title: "Deeper Analysis: Hubs and Switches",
          content:
            "With the introduction of Ethernet running over unshielded twisted pair (UTP) cables terminated with RJ45 connectors, hubs became the new backbones in most installations. Many companies attached hubs to their existing thin-net networks to allow greater flexibility as well. Hubs were made to support UTP and BNC 10Base-2 installations, but UTP was so much easier to work with that it became the de facto standard. A hub is simply a means of connecting Ethernet cables together so that their signals can be repeated to every other connected cable on the hub. Hubs may also be called repeaters for this reason, but it is important to understand that while a hub is a repeater, a repeater is not necessarily a hub. A repeater repeats a signal.",
        },
      ],
      flashcards: [
        {
          id: "nw-l05-f1",
          front: "Hubs and Switches",
          back:
            "With the introduction of Ethernet running over unshielded twisted pair (UTP) cables terminated with RJ45 connectors, hubs became the new backbones in most installations.",
        },
        {
          id: "nw-l05-f2",
          front: "Switches",
          back:
            "To be perfectly correct, always refer to frames when speaking of hubs and switches.",
        },
        {
          id: "nw-l05-f3",
          front: "Key concept: Hubs and Switches",
          back:
            "Repeaters are usually used to extend a connection to a remote host, or to connect a group of users who exceed the distance limitation of 10Base-T.",
        },
        {
          id: "nw-l05-f4",
          front: "Key concept: Switches",
          back:
            "While Cisco routers used the Internetwork Operating System (IOS), the Cisco switches sometimes used menus, or an operating system called CatOS .",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L06  Auto-Negotiation and How Auto-Negotiation Works
    ───────────────────────────────────────────────── */
    {
      id: "nw-l06",
      title: "Auto-Negotiation and How Auto-Negotiation Works",
      type: "video",
      duration: 12,
      objectives: [
        "Examine the key ideas and arguments related to auto-negotiation",
        "Examine the key ideas and arguments related to how auto-negotiation works",
        "Synthesize and compare the themes across the covered material",
      ],
      chunks: [
        {
          id: "nw-l06-c1",
          title: "Auto-Negotiation",
          content:
            "Chapter 3. Auto-Negotiation When I get called to a client's site to diagnose a network slowdown or a \"slow\" device, the first things I look at are the error statistics and the auto-negotiation settings on the switches and the devices connected to them. If I had to list the most common problems I've seen during my years in the field, auto-negotiation issues would be in the top five, if not number one. Why is auto-negotiation such a widespread problem? The truth is, too many people don't really understand what it does and how it works, so they make assumptions that lead to trouble. What Is Auto-Negotiation?",
        },
        {
          id: "nw-l06-c2",
          title: "How Auto-Negotiation Works",
          content:
            "How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiation is enabled on a port, it does not automatically determine the configuration of the port on the other side of the Ethernet cable and then match it. This is a common misconception that often leads to problems. Auto-negotiation is a protocol, and as with any protocol, it only works if it's running on both sides of the link. In other words, if one side of a link is running auto-negotiation, and the other side of the link is not, auto-negotiation cannot determine the speed and duplex configuration of the other side. If auto-negotiation is running on the other side of the link, the two devices decide together on the best speed and duplex mode.",
        },
        {
          id: "nw-l06-c3",
          title: "Deeper Analysis: Auto-Negotiation",
          content:
            "Auto-negotiation is the feature that allows a port on a switch, router, server, or other device to communicate with the device on the other end of the link to determine the optimal duplex mode and speed for the connection. The driver then dynamically configures the interface to the values determined for the link. Let's examine these parameters: Speed Speed is the rate of the interface, usually listed in megabits per second (Mbps). Common Ethernet speeds include 10 Mbps, 100 Mbps, and 1,000 Mbps. 1,000 Mbps Ethernet is also referred to as Gigabit Ethernet . Duplex Duplex refers to how data flows on the interface. On a half-duplex interface, data can only be transmitted or received at any given time.",
        },
      ],
      flashcards: [
        {
          id: "nw-l06-f1",
          front: "Auto-Negotiation",
          back:
            "Auto-negotiation is the feature that allows a port on a switch, router, server, or other device to communicate with the device on the other end of the link to determine the optimal...",
        },
        {
          id: "nw-l06-f2",
          front: "How Auto-Negotiation Works",
          back:
            "Each interface advertises the speeds and duplex modes at which it can operate, and the best match is selected (higher speeds and full duplex are preferred).",
        },
        {
          id: "nw-l06-f3",
          front: "Key concept: Auto-Negotiation",
          back:
            "A conversation on a two-way radio is usually half-duplex—each person must push a button to talk, and, while talking, that person cannot listen.",
        },
        {
          id: "nw-l06-f4",
          front: "Key concept: How Auto-Negotiation Works",
          back:
            "This is an important consideration because the common modes of Ethernet have differing levels of duplex support: 10Base-T 10Base-T was originally designed without full-duplex suppo...",
        },
      ],
    },
    /* ─────────────────────────────────────────────────
       L07  Checkpoint Quiz 2
    ───────────────────────────────────────────────── */
    {
      id: "nw-l07",
      title: "Checkpoint Quiz 2",
      type: "quiz",
      duration: 8,
      objectives: ["Assess understanding of the concepts covered in the preceding lessons"],
      questions: [
        {
          id: "nw-l07-q1",
          text: "Which of the following best describes a key idea from the section on Hubs and Switches?",
          options: [
            { id: "a", text: "Chapter 3." },
            { id: "b", text: "How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiati..." },
            { id: "c", text: "Switches The next step in the evolution of Ethernet after the hub was the switch." },
            { id: "d", text: "Chapter 2." },
          ],
          correctOptionId: "d",
          explanation:
            "This question relates to Hubs and Switches. Chapter 2.",
        },
        {
          id: "nw-l07-q2",
          text: "Which of the following best describes a key idea from the section on Switches?",
          options: [
            { id: "a", text: "Chapter 3." },
            { id: "b", text: "Switches The next step in the evolution of Ethernet after the hub was the switch." },
            { id: "c", text: "How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiati..." },
            { id: "d", text: "Chapter 2." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Switches. Switches The next step in the evolution of Ethernet after the hub was the switch.",
        },
        {
          id: "nw-l07-q3",
          text: "Which of the following best describes a key idea from the section on Auto-Negotiation?",
          options: [
            { id: "a", text: "Chapter 2." },
            { id: "b", text: "Chapter 3." },
            { id: "c", text: "Switches The next step in the evolution of Ethernet after the hub was the switch." },
            { id: "d", text: "How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiati..." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to Auto-Negotiation. Chapter 3.",
        },
        {
          id: "nw-l07-q4",
          text: "Which of the following best describes a key idea from the section on How Auto-Negotiation Works?",
          options: [
            { id: "a", text: "Chapter 3." },
            { id: "b", text: "How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiati..." },
            { id: "c", text: "Chapter 2." },
            { id: "d", text: "Switches The next step in the evolution of Ethernet after the hub was the switch." },
          ],
          correctOptionId: "b",
          explanation:
            "This question relates to How Auto-Negotiation Works. How Auto-Negotiation Works First, let's cover what auto-negotiation does not do: when auto-negotiati...",
        },
        {
          id: "nw-l07-q5",
          text: "Which of the following best describes a key idea from the section on When Auto-Negotiation Fails?",
          options: [
            { id: "a", text: "When Auto-Negotiation Fails When auto-negotiation fails on 10/100 links, the most likely cause is th..." },
            { id: "b", text: "Chapter 2." },
            { id: "c", text: "Chapter 3." },
            { id: "d", text: "Switches The next step in the evolution of Ethernet after the hub was the switch." },
          ],
          correctOptionId: "a",
          explanation:
            "This question relates to When Auto-Negotiation Fails. When Auto-Negotiation Fails When auto-negotiation fails on 10/100 links, the most likely cause is th...",
        },
      ],
    },
  ],
};
