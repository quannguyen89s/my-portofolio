import { Project, TimelineItem, SkillCategory } from "../types/portfolio";

export const PERSONAL_INFO = {
  name: "Nguyễn Anh Quân",
  university: "FPT University (Da Nang)",
  degree: "Software Engineering",
  handle: "quannguyen89s",
  role: "Software Developer",
  shortBio:
    "I am a final-year Software Engineering student with knowledge of both Front-end and Back-end development. I have experience working with React.js, TypeScript, JavaScript, Node.js, and databases through academic and personal projects. I am eager to strengthen my technical skills, gain practical experience, and contribute to real-world software development projects.",
  avatar: "https://avatars.githubusercontent.com/u/161696764?v=4",
  location: "Da Nang, Vietnam",
  email: "quann89.dev@gmail.com",
  github: "https://github.com/quannguyen89s",
  linkedin: "https://linkedin.com",
  availableForWork: true,
  statusText: "FPT University Da Nang • Available for opportunities",
  yearsOfExperience: "FPTU",
  completedProjects: "3+ Full-Stack Repos",
  uptimeRecord: "99.9%",
};

// Core Technology & Skills Categories (Tech Used)
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    title: "1. Languages",
    subtitle: "Core programming languages",
    skills: [
      { name: "JavaScript", level: "Expert", iconName: "Code" },
      { name: "TypeScript", level: "Expert", iconName: "FileCode" },
      { name: "Java", level: "Advanced", iconName: "Cpu" },
      { name: "SQL", level: "Advanced", iconName: "Database" },
    ],
  },
  {
    id: "frontend",
    title: "2. Frontend",
    subtitle: "Modern & responsive web interfaces",
    skills: [
      { name: "React 19 / React.js", level: "Expert", iconName: "Layers" },
      { name: "Tailwind CSS v4", level: "Expert", iconName: "Sparkles" },
      { name: "TypeScript", level: "Expert", iconName: "FileCode" },
      { name: "Vite", level: "Expert", iconName: "Zap" },
      { name: "React Router v7", level: "Advanced", iconName: "Network" },
      { name: "date-fns", level: "Advanced", iconName: "Activity" },
    ],
  },
  {
    id: "backend",
    title: "3. Backend",
    subtitle: "High-performance server APIs & microservices",
    skills: [
      { name: "Node.js", level: "Advanced", iconName: "Server" },
      { name: "Express.js", level: "Advanced", iconName: "Network" },
      { name: "Spring Boot 3", level: "Advanced", iconName: "ShieldCheck" },
      { name: "Spring Security", level: "Advanced", iconName: "Lock" },
      { name: "WebSocket (STOMP)", level: "Advanced", iconName: "Radio" },
    ],
  },
  {
    id: "mobile",
    title: "4. Mobile",
    subtitle: "Cross-platform iOS & Android apps",
    skills: [
      { name: "React Native", level: "Advanced", iconName: "Smartphone" },
      { name: "Expo", level: "Advanced", iconName: "Layers" },
    ],
  },
  {
    id: "database",
    title: "5. Database",
    subtitle: "Relational & NoSQL data storage",
    skills: [
      { name: "MongoDB (Mongoose)", level: "Advanced", iconName: "Database" },
      { name: "MySQL", level: "Advanced", iconName: "Database" },
      { name: "PostgreSQL", level: "Advanced", iconName: "Database" },
      { name: "Supabase", level: "Advanced", iconName: "Cloud" },
    ],
  },
  {
    id: "tools",
    title: "6. Tools & Technologies",
    subtitle: "Development tooling & authentication protocols",
    skills: [
      { name: "Git & GitHub", level: "Expert", iconName: "GitBranch" },
      { name: "Postman & REST API", level: "Expert", iconName: "Activity" },
      { name: "JWT & OAuth2", level: "Advanced", iconName: "Lock" },
      { name: "Cloudinary API", level: "Advanced", iconName: "Cloud" },
      { name: "Nodemailer & PayOS", level: "Advanced", iconName: "Zap" },
    ],
  },
];

// List of Featured Engineering Projects
export const PROJECTS: Project[] = [
  {
    id: "homestay-booking-platform",
    title: "Homestay Booking & Management Platform",
    repoName: "quannguyen89s/cathomestay-frontend",
    tagline:
      "Hourly homestay booking with interactive 24h SVG circular clock & calendar",
    category: "Web Apps",
    featured: true,
    year: "2026",
    description:
      "Full-stack web application for flexible hourly bookings, featuring an SVG circular 24h clock for slot visualization and zero booking conflict guarantee.",
    gradient: "from-amber-500/10 via-orange-500/5 to-transparent",
    coverImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    mockupType: "browser",
    metrics: [
      { label: "Conflict Engine", value: "0% Overlap" },
      { label: "Visualization", value: "24h Circular SVG Clock" },
      { label: "Frontend Stack", value: "React 19 + Tailwind v4" },
      { label: "Response Latency", value: "< 90ms" },
    ],
    tags: [
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Node.js",
      "Express",
      "MongoDB",
      "React Router v7",
      "JWT",
      "Cloudinary",
      "Nodemailer",
      "xlsx",
      "date-fns",
    ],
    links: {
      github: "https://github.com/quannguyen89s/cathomestay-frontend",
      live: "https://cathomestay.studio",
    },
    caseStudy: {
      overview:
        "A comprehensive homestay booking and management platform connecting guests and hosts directly, optimizing workflows from hourly reservations to automated revenue reporting.",
      challenge:
        "Preventing concurrent booking collisions for identical time slots while providing an intuitive, seamless hourly availability visualization.",
      solution:
        "Engineered an optimized MongoDB time-range query algorithm paired with an interactive 24h SVG circular clock synchronized to a month-view calendar.",
      architectureHighlights: [
        "Booking Engine: Real-time availability checks with 100% collision prevention.",
        "24h SVG Clock: Interactive hourly slot visualization synced with monthly dates.",
        "Dynamic Pricing: Automated rate adjustments for weekends, holidays, and peak hours.",
        "Security & RBAC: Role-based access control via JWT and Google OAuth integration.",
        "Automated Services: Cloudinary image management, Nodemailer receipts, and Excel reporting.",
      ],
      keyOutcomes: [
        "100% elimination of scheduling overlaps and booking collisions.",
        "Modern, fluid user experience powered by React 19 and Tailwind CSS v4.",
        "60% reduction in booking turnaround and host management time.",
      ],
      techStackBreakdown: [
        {
          title: "Frontend Layer",
          tech: [
            "React 19",
            "TypeScript",
            "Tailwind CSS v4",
            "Vite",
            "React Router v7",
            "date-fns",
          ],
        },
        {
          title: "Backend Services",
          tech: [
            "Node.js",
            "Express.js",
            "TypeScript",
            "MongoDB (Mongoose)",
            "JWT",
            "Nodemailer",
          ],
        },
        {
          title: "Media & Analytics",
          tech: [
            "Cloudinary CDN",
            "Excel Export (xlsx)",
            "Context API State Management",
          ],
        },
      ],
    },
  },
  {
    id: "clinic-management-system",
    title: "SmartCare — Clinic Appointment & Medical Management System",
    repoName: "vanson1602/SWP_Project",
    tagline:
      "Online clinic appointments, electronic medical records (EMR) & real-time consultations",
    category: "Web Apps",
    featured: true,
    year: "2025",
    description:
      "Digital healthcare platform streamlining doctor appointments, live WebSocket consultations, ICD-10 standardized EMR management, and PayOS automated billing.",
    gradient: "from-emerald-500/10 via-teal-500/5 to-transparent",
    coverImage:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    mockupType: "browser",
    metrics: [
      { label: "Live Consultation", value: "WebSocket STOMP" },
      { label: "Medical Standard", value: "ICD-10 Disease Codes" },
      { label: "Digital Payments", value: "PayOS QR Gateway" },
      { label: "Prescriptions & Reports", value: "iText PDF & CSV" },
    ],
    tags: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "MySQL",
      "Spring Data JPA",
      "WebSocket",
      "STOMP",
      "PayOS",
      "iText PDF",
      "Cloudinary",
      "React.js",
    ],
    links: {
      github: "https://github.com/vanson1602/SWP_Project",
    },
    caseStudy: {
      overview:
        "A clinic digital transformation system covering patient appointments, remote doctor-patient chat, electronic medical records, digital prescription generation, and automated payments.",
      challenge:
        "Ensuring strict confidentiality for sensitive medical data while maintaining an instantaneous, reliable doctor-patient consultation channel.",
      solution:
        "Multi-layered Spring Boot 3 architecture secured by Spring Security, resilient WebSocket STOMP messaging, and compliant medical PDF prescription generation.",
      architectureHighlights: [
        "Smart Scheduling: Doctor shift coordination and department-based queue dispatching.",
        "Real-time Chat: Direct doctor-patient messaging channel over WebSocket STOMP.",
        "Electronic Medical Records (EMR): ICD-10 medical diagnostics catalog and clinical history.",
        "Billing & Documentation: PayOS QR payments with automated iText PDF prescription exports.",
        "Role-Based Security: 3-tier access control (Admin, Doctor, Patient) via Spring Security & JWT.",
      ],
      keyOutcomes: [
        "Automated patient queue numbering and doctor schedule coordination.",
        "Instant prescription and clinical referral generation in standardized PDF format.",
        "Robust data protection complying with medical privacy and encryption standards.",
      ],
      techStackBreakdown: [
        {
          title: "Backend Framework",
          tech: [
            "Java 17",
            "Spring Boot 3.5",
            "Spring Security",
            "Spring Data JPA",
            "Hibernate Validator",
          ],
        },
        {
          title: "Database & Security",
          tech: [
            "MySQL",
            "JWT (jjwt)",
            "BCrypt Password Hashing",
            "Google OAuth2",
          ],
        },
        {
          title: "Realtime & Integrations",
          tech: [
            "Spring WebSocket",
            "STOMP & SockJS",
            "PayOS Payment API",
            "Cloudinary",
            "iText PDF",
            "Super CSV",
          ],
        },
      ],
    },
  },
  {
    id: "frontend-hesta",
    title: "Hesta Smart Home — Web Dashboard",
    repoName: "diethon/frontend_hesta",
    tagline:
      "Real-time IoT smart home device control and environmental monitoring dashboard",
    category: "Smart Home / IoT",
    featured: true,
    year: "2026",
    description:
      "Centralized dashboard for real-time sensor tracking, instant device switching, living automation routines, and family permission controls.",
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
    coverImage:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    mockupType: "browser",
    metrics: [
      { label: "Language", value: "TypeScript" },
      { label: "Interface", value: "React + Tailwind" },
      { label: "Interaction", value: "Realtime IoT" },
      { label: "Control Latency", value: "< 150ms" },
    ],
    tags: [
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "Vite",
      "REST API",
      "IoT Dashboard",
      "WebSocket",
    ],
    links: {
      github: "https://github.com/diethon/frontend_hesta",
    },
    caseStudy: {
      overview:
        "A responsive central control dashboard for monitoring sensors and orchestrating smart home appliances within the Hesta ecosystem.",
      challenge:
        "Delivering real-time sensor feedback and responsive device control without UI lag or redundant re-renders.",
      solution:
        "Architected optimized React + TypeScript components synchronized with a Spring Boot backend via WebSockets and REST APIs.",
      architectureHighlights: [
        "Visual Simulation: Real-time status monitoring for devices room-by-room.",
        "Responsive Across Devices: Tailored experience for desktop monitors and wall-mounted tablets.",
        "Safety Alerts: Instant push notifications triggered by electrical threshold alerts.",
      ],
      keyOutcomes: [
        "Clean, strictly typed TypeScript codebase with zero runtime type errors.",
        "Sub-150ms command execution latency for IoT toggles.",
      ],
      techStackBreakdown: [
        {
          title: "Frontend Core",
          tech: ["TypeScript", "React.js", "Tailwind CSS", "Vite"],
        },
        {
          title: "API & Protocol",
          tech: ["REST API", "JSON Web Token (JWT)", "WebSocket"],
        },
      ],
    },
  },
];

// Experience & Education Journey (CV Timeline)
export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: "homestay-booking-dev",
    year: "2025 — 2026",
    period: "2025 — 2026",
    role: "Full-Stack Developer",
    company: "Homestay Booking & Management Platform",
    location: "Da Nang, Vietnam",
    type: "work",
    description:
      "End-to-end development of a full-stack homestay booking web platform (React 19, Node.js, Express, MongoDB, Tailwind CSS v4).",
    highlights: [
      "Booking Engine: Real-time room availability algorithm eliminating 100% of scheduling conflicts.",
      "24h SVG Clock: Interactive circular clock and synced calendar for intuitive hourly slot selection.",
      "Dynamic Pricing: Automated pricing rules for weekends, holidays, and peak hours.",
      "Security & Tooling: JWT role-based auth, Google login, Cloudinary storage, and Excel exports.",
    ],
    skills: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS v4",
      "JWT",
      "Nodemailer",
      "Cloudinary",
      "xlsx",
      "date-fns",
    ],
  },
  {
    id: "clinic-management-dev",
    year: "2025",
    period: "2025",
    role: "Full-Stack Developer (Java Spring Boot & React)",
    company: "SmartCare — Clinic Appointment & EMR System",
    location: "Da Nang, Vietnam",
    type: "work",
    description:
      "Developed an online healthcare appointment, EMR management, and clinic dispatching platform.",
    highlights: [
      "Smart Scheduling: Doctor shift coordination and specialty dispatching, preventing appointment collisions.",
      "Real-time Chat: Direct doctor-patient consultation channel powered by Spring WebSocket (STOMP).",
      "EMR & Billing: ICD-10 standardized medical records, PayOS QR payment integration, and PDF exports.",
      "RBAC Security: 3-tier authorization (Admin, Doctor, Patient) using Spring Security and JWT.",
    ],
    skills: [
      "Java 17",
      "Spring Boot 3",
      "Spring Security",
      "MySQL",
      "Spring Data JPA",
      "WebSocket STOMP",
      "PayOS",
      "iText PDF",
      "React.js",
    ],
  },
  {
    id: "hesta-smarthome-dev",
    year: "2024 — Present",
    period: "2024 — Present",
    role: "Frontend & IoT Developer",
    company: "Hesta Smart Home Ecosystem",
    location: "Da Nang, Vietnam",
    type: "work",
    description:
      "Built web dashboards for real-time smart home device control and IoT sensor monitoring.",
    highlights: [
      "React & TypeScript interface with fast response (< 150ms), optimized for desktops and tablets.",
      "Continuous sensor data synchronization over WebSockets and RESTful APIs.",
      "Automated safety alert system and smart living routine automations.",
    ],
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "IoT Dashboard",
      "REST API",
      "WebSocket",
    ],
  },
  {
    id: "fpt-university",
    year: "2022 — Present",
    period: "2022 — Present",
    role: "Software Engineering Student",
    company: "FPT University Da Nang",
    location: "Da Nang, Vietnam",
    type: "education",
    description:
      "Software Engineering student at FPT University Da Nang, focused on Full-Stack Web, IoT, and backend API services.",
    highlights: [
      "Core foundations: OOP with Java, Data Structures & Algorithms, MySQL, PostgreSQL, and MongoDB.",
      "High-impact projects: Homestay Booking Platform, SmartCare Clinic System, Hesta IoT Dashboard.",
      "Active open-source contributor on GitHub @quannguyen89s and organization @diethon.",
    ],
    skills: [
      "FPT University Da Nang",
      "Java",
      "Spring Boot",
      "React.js",
      "TypeScript",
      "Node.js",
      "REST API",
      "Algorithms",
    ],
  },
];
