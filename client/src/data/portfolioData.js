// ⚙️ CENTRAL DATA FILE — edit everything here to personalize your portfolio.
// Replace placeholders with your real name, links, projects, skills and quotes.

export const profile = {
  name: "Alliance Parfaite Isingizwe",
  role: "Full-Stack Developer · System Architect · Designer",
  shortTagline: "I design systems, build products, and make complex things feel effortless.",
  bio: "I'm a full-stack developer who bridges engineering, design and architecture. I build fast, human-centered products across the MERN stack — and I care about the clean ERDs and DFDs hiding underneath the interface.",
  avatar: "/profile.png", // ← your photo (client/public/profile.png)
  location: "Kigali, Rwanda",
  // Direct links — replace placeholders, visible in Contact + Footer
  email: "parfaitea123@gmail.com",
  github: "https://github.com/IAParfaite",
  linkedin: "https://www.linkedin.com/in/isingizwe-parfaite-alliance-4a0a74429/",
  twitter: "https://x.com/IAParfaite",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "10+", label: "Projects shipped" },
  { value: "Full", label: "MERN stack" },
  { value: "∞", label: "Curiosity" },
];

export const projects = [
  {
    id: 1,
    title: "EPMS — Payroll System",
    description:
      "A full Employee Payroll Management System on the MERN stack — employee records, salary structures and payslip workflows, designed around a clean ERD first.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    image: "[ADD_LINK_HERE]",
    live: null, // not deployed yet — set a URL here when you deploy
    repo: "https://github.com/IAParfaite/EPMS",
    featured: true,
  },
  {
    id: 2,
    title: "MyCompanion",
    description:
      "A conversational AI that feels like a real friend — it listens, remembers your story, helps you with your studies and work, and shapes you into the person you're becoming.",
    tags: ["React", "Node.js", "AI"],
    image: "[ADD_LINK_HERE]",
    live: null,
    repo: "https://github.com/IAParfaite",
    featured: true,
  },
  {
    id: 3,
    title: "TaskFlow — Smart To-Do",
    description:
      "A to-do app that goes way beyond checklists — priorities, smart reminders, streaks, projects and progress insights that actually help you get things done.",
    tags: ["React", "MongoDB", "Node.js"],
    image: "[ADD_LINK_HERE]",
    live: null,
    repo: "https://github.com/IAParfaite",
    featured: true,
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "TailwindCSS", level: 88 },
      { name: "JavaScript", level: 92 },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Laravel (basics)", level: 60 },
    ],
  },
  {
    title: "Databases",
    icon: "database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 78 },
      { name: "NoSQL", level: 85 },
    ],
  },
  {
    title: "Mobile",
    icon: "mobile",
    skills: [{ name: "Flutter", level: 70 }],
  },
  {
    title: "Systems & Architecture",
    icon: "architecture",
    skills: [
      { name: "ERDs", level: 92 },
      { name: "DFDs", level: 90 },
      { name: "Logic Design", level: 88 },
    ],
  },
  {
    title: "Design & Tools",
    icon: "design",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Canva", level: 82 },
      { name: "Git / GitHub", level: 90 },
    ],
  },
];

export const mlHighlights = [
  { title: "Math Foundation", desc: "Linear algebra, probability and calculus as the backbone of every model." },
  { title: "Problem Solving", desc: "The same structured reasoning I use in systems design, applied to data." },
  { title: "Learning by Building", desc: "Frameworks in mind are fine; proof lives in notebooks and working demos." },
];

export const hobbies = [
  {
    icon: "book",
    title: "Reading",
    desc: "I read across fiction and non-fiction — books give me new mental models and a calmer mind.",
    accent: "accent-paper",
  },
  {
    icon: "film",
    title: "Movies & Music",
    desc: "A good film or song is like clean code — rhythm, structure, and a payoff worth waiting for.",
    accent: "accent-terracotta",
  },
  {
    icon: "quote",
    title: "Collecting Quotes",
    desc: "I collect lines from movies, songs and books. A well-placed sentence can say more than a paragraph.",
    accent: "accent-hunter",
  },
];

export const quotes = [
  { text: "It is a good thing to face your fear — how else would you overcome them?" },
  { text: "You need to be quiet so that when God speaks, you listen." },
  { text: "Don't hear about it afterwards — be part of it." },
  { text: "No one can make you feel inferior without your consent." },
  { text: "You found it, but did you hold on to it?" },
  { text: "All good things must come to an end, and would I do it again? Absolutely!" },
];

export const apiBase = import.meta.env.VITE_API_BASE || "/api";
