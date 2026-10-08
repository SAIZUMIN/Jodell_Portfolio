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
  role: "Backend & Frontend Developer",
  tagline: "Building responsive web applications & AI-powered Retrieval-Augmented Generation (RAG) systems with clean architecture.",
  shortBio: "Information Technology student (expected graduation 2027) at Cebu Technological University with hands-on experience building responsive web apps and AI RAG systems. Proficient in React, TypeScript, Python, and modern web tooling across the full development lifecycle.",
  
  location: "Cebu City, Philippines",
  phone: "+63 977 387 9813",
  email: "jodell272@gmail.com",
  github: "https://github.com/SAIZUMIN/",
  availability: "Eager for Junior Web / Software Developer Roles",
  education: "B.S. Information Technology (2023 – 2027 Expected) • Cebu Technological University – Argao Campus",
  certification: "National Certificate II (NC II) — TESDA",
  yearsExperience: "April 2025 – Present",
  projectsCompleted: "10+",
  
  resumeUrl: "/resume.pdf",
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
    shortDescription: "Architected and developed an AI Retrieval-Augmented Generation system that retrieves knowledge-base documents and generates context-aware responses.",
    fullDescription: "Built interactive, responsive front-end components with React + TypeScript + Vite, focusing on clean design, performance, and seamless user experience while testing and integrating end-to-end AI retrieval workflows.",
    tools: ["React", "TypeScript", "Python", "JavaScript", "Vite", "Git", "RAG AI"],
    link: "https://github.com/SAIZUMIN/",
    githubLink: "https://github.com/SAIZUMIN/",
    pinType: "pin",
    pinColor: "#c85a32",
    rotation: "-1.8deg",
    imageType: "spectrum"
  },
  {
    id: "responsive-web-apps",
    projectNumber: "PROJECT 02",
    date: "APR 2025 – PRESENT",
    title: "Responsive Web Applications Suite",
    category: "Frontend Engineering",
    shortDescription: "Delivered responsive, mobile-friendly web applications using React, TypeScript, JavaScript, HTML, and Vite with clean user accessibility.",
    fullDescription: "Implemented software features, conducted unit testing and debugging against system requirements, and collaborated with team members using Git for version control.",
    tools: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Vite", "Git"],
    link: "https://github.com/SAIZUMIN/",
    githubLink: "https://github.com/SAIZUMIN/",
    pinType: "tape",
    rotation: "1.6deg",
    imageType: "wayline"
  },
  {
    id: "data-analytics-pipeline",
    projectNumber: "PROJECT 03",
    date: "2024 – 2025",
    title: "Data Analytics & System Processing",
    category: "Backend & Data",
    shortDescription: "Created Python data analytics utilities, system analysis scripts, and database management workflows for information processing.",
    fullDescription: "Designed modular data processing scripts, database models, technical documentation, and computer network troubleshooting utilities.",
    tools: ["Python", "Java", "C++", "SQL / Database", "Data Analytics", "Git"],
    link: "https://github.com/SAIZUMIN/",
    githubLink: "https://github.com/SAIZUMIN/",
    pinType: "pin",
    pinColor: "#10b981",
    rotation: "-1.2deg",
    imageType: "tandem"
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
