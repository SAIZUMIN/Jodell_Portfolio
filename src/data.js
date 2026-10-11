/**
 * PORTFOLIO DATA FILE - JODELL D. DOÑOS
 * 
 * Updated with official resume details & skills progress bars
 */

// ==========================================
// 1. PERSONAL INFORMATION
// ==========================================
export const personalInfo = {
  name: "Jodell D. Doños",
  role: "Backend Developer",
  tagline: "Delivering end-to-end solutions—from hardware integration and cloud APIs to responsive web applications.",
  shortBio: "Information Technology student (expected graduation 2027) with hands-on experience building full-stack web applications and IoT-based automation systems. Proficient in React, TypeScript, Python, and embedded systems development across the full development lifecycle.",
  
  location: "Cebu City, Philippines",
  phone: "+63 977 387 9813",
  email: "jodell272@gmail.com",
  github: "https://github.com/SAIZUMIN/",
  availability: "Seeking Junior Backend or Full Stack Developer Roles",
  education: "B.S. Information Technology (2023 – 2027 Expected) • Cebu Technological University – Argao Campus",
  certification: "National Certificate II (NC II) — TESDA",
  yearsExperience: "April 2025 – Present",
  projectsCompleted: "10+",
  
  resumeUrl: "/RESUME.pdf",
};

// ==========================================
// 2. NAVIGATION LINKS
// ==========================================
export const navLinks = [
  { id: "hero", label: "Home", icon: "home" },
  { id: "about", label: "About", icon: "user" },
  { id: "projects", label: "Projects", icon: "grid" },
  { id: "skills", label: "Skills", icon: "cpu" },
  { id: "contact", label: "Contact", icon: "mail" },
];

// ==========================================
// 3. PROJECTS CATALOG (STICKY STACKING CARDS)
// ==========================================
export const projectsData = [
  {
    id: "ai-rag-system",
    projectNumber: "PROJECT 01",
    date: "2025 – PRESENT",
    title: "AI RAG-Powered Knowledge System",
    category: "AI & Full-Stack",
    shortDescription: "Architected an AI Retrieval-Augmented Generation governance platform that retrieves institutional policy documents and generates verifiable context-aware answers.",
    fullDescription: "Built interactive, responsive front-end components with React, TypeScript, and Vite, integrating role-based access control, document management, accreditation tracking, and automated AI assistance workflows.",
    tools: ["React", "TypeScript", "Python", "Vite", "Tailwind CSS", "RAG AI", "Git"],
    link: "https://github.com/SAIZUMIN/rag-governanceV2",
    githubLink: "https://github.com/SAIZUMIN/rag-governanceV2",
    pinType: "pin",
    pinColor: "#c85a32",
    rotation: "-1.8deg",
    imageType: "spectrum"
  },
  {
    id: "python-projects-journey",
    projectNumber: "PROJECT 02",
    date: "2025 – PRESENT",
    title: "Python Projects — Fundamentals to OOP",
    category: "Backend & Programming",
    shortDescription: "Curated collection of 31 hands-on Python projects tracking progression from fundamentals, data structures, and functions to modular OOP systems.",
    fullDescription: "Built step-by-step to master practical problem solving without relying on tutorials: covers loops & input validation, multi-list managers, nested dictionaries, custom modules, file handling, and Object-Oriented systems (bank accounts, digital wallets, inheritance).",
    tools: ["Python", "OOP", "Data Structures", "Functions", "File I/O", "Git"],
    link: "https://github.com/SAIZUMIN/python-projects",
    githubLink: "https://github.com/SAIZUMIN/python-projects",
    pinType: "tape",
    rotation: "1.6deg",
    imageType: "python-journey"
  },
  {
    id: "enersave-iot-system",
    projectNumber: "PROJECT 03",
    date: "2026",
    title: "EnerSave: Smart Energy Management System",
    category: "IoT & Embedded Systems",
    shortDescription: "IoT smart energy management system using NodeMCU ESP8266 and PIR motion sensing for automated room lighting, Google Home voice control, and live ThingSpeak telemetry.",
    fullDescription: "Engineered circuit connections with ESP8266, HC-SR501 PIR sensor, and 3-channel relay control. Features a local web dashboard with 10-second motion-refreshed auto-off timer, SinricPro Google Assistant voice commands, and 4-field ThingSpeak cloud analytics.",
    tools: ["ESP8266 (NodeMCU)", "C++ / Arduino IDE", "PIR Motion Sensor", "SinricPro (Voice)", "ThingSpeak (IoT Cloud)", "WebSockets"],
    link: "https://github.com/SAIZUMIN?tab=repositories",
    githubLink: "https://github.com/SAIZUMIN?tab=repositories",
    pinType: "pin",
    pinColor: "#10b981",
    rotation: "-1.2deg",
    imageType: "enersave-iot"
  }
];

// ==========================================
// 4. TECHNICAL SKILLS CATALOG (PROGRESS BARS)
// ==========================================
export const skillsData = [
  { name: "HTML", level: 95, iconKey: "html", category: "Frontend" },
  { name: "React.js", level: 85, iconKey: "react", category: "Frontend" },
  { name: "Python", level: 90, iconKey: "python", category: "Backend / AI" },

  { name: "CSS", level: 90, iconKey: "css", category: "Frontend" },
  { name: "TypeScript", level: 85, iconKey: "ts", category: "Frontend" },
  { name: "RAG / AI", level: 88, iconKey: "rag", category: "AI & Data" },

  { name: "JavaScript", level: 90, iconKey: "js", category: "Frontend" },
  { name: "Vite & Tooling", level: 90, iconKey: "vite", category: "Tools" },
  { name: "Git & Version Control", level: 85, iconKey: "git", category: "Tools" }
];

// ==========================================
// 5. CONTACT & SOCIAL LINKS
// ==========================================
export const contactInfo = {
  email: "jodell272@gmail.com",
  phone: "+63 977 387 9813",
  location: "Cebu City, Philippines",
  socials: [
    { name: "GitHub", url: "https://github.com/SAIZUMIN/", icon: "github", handle: "github.com/SAIZUMIN/" },
    { name: "Facebook", url: "https://www.facebook.com/jodell.dejan", icon: "facebook", handle: "facebook.com/jodell.dejan" },
    { name: "Gmail", url: "https://mail.google.com/mail/?view=cm&fs=1&to=jodell272@gmail.com", icon: "gmail", handle: "jodell272@gmail.com" }
  ],
  note: "I am actively seeking junior web or software developer roles. Feel free to connect or reach out for inquiries or project collaborations!"
};
