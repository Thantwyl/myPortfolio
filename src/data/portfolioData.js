import project1 from "../assets/cms.png";
import project2 from "../assets/ticket anywhere.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/ductil.png";

export const personalInfo = {
  name: "ThantWaiYan Linn",
  title: "Backend Developer | Aspiring AI Engineer | Data Science Enthusiast",
  shortBio:
    "I build modern web applications and enjoy working on backend systems, AI-focused solutions, and data-driven projects.",
  email: "twaiyy27@gmail.com",
  phone: "+66 967655893",
  location: "Bangkok, Thailand",
  github: "https://github.com/Thantwyl",
  linkedin: "https://www.linkedin.com/in/thantwyl/",
};

export const aboutInfo = {
  paragraph1:
    "I am a Junior Backend Developer with hands-on experience building backend systems for web and mobile applications. Skilled in FastAPI, Django, and PostgreSQL, I work on APIs, databases, authentication, security, and server-side logic.",
  paragraph2:
    "I also collaborate well with frontend teams and have a basic understanding of frontend integration. My main focus is backend development, with strong interest in AI, automation, data science, and machine learning.",
  education: [
    {
      degree: "Bachelor of Information and Communication Technology (ICT)",
      school: "Rangsit University, Thailand",
      year: "2023 - 2026",
      GPA: "GPA : 3.68 / 4.00 (First Class Honors)",
      detail:
        "Focused on software development, databases, web technologies, and problem solving.",
    },
  ],
};

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "HTML", iconKey: "html" },
      { name: "CSS", iconKey: "css" },
      { name: "JavaScript", iconKey: "javascript" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Python", iconKey: "python" },
      { name: "Django", iconKey: "django" },
      { name: "FastAPI", iconKey: "fastapi" },
      { name: ".NET", iconKey: "dotnet" },
      { name: "REST API", iconKey: "api" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "MySQL", iconKey: "mysql" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "SQLite", iconKey: "sqlite" },
      { name: "MongoDB", iconKey: "mongodb" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
      { name: "Docker", iconKey: "docker" },
      { name: "Postman", iconKey: "postman" },
      { name: "Render", iconKey: "render" },
      { name: "Vercel", iconKey: "vercel" },
      { name: "Cloudinary", iconKey: "cloud" },
    ],
  },
];

export const projectsData = [ 
  {
    id: 1,
    title: "Civil Master Solution Web Application",
    image: project1,
    description:
      "A production web application built for a real company project with backend development and deployment support.",
    role: "Backend Developer Intern",
    experience:
      "Developed backend features for a production web application deployed on a live domain. Implemented admin CRUD operations, authentication, database integration, chatbot integration, email automation, worked with Supabase, and supported deployment on Render.",
    tech: [
      { name: "Django", iconKey: "django" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "Render", iconKey: "render" },
      { name: "PostgreSQL", iconKey: "postgresql" },
    ],
    github: "https://github.com/Thantwyl/cms_final_backend",
    live: "https://www.civilmastersolution.com",
  },
  {
    id: 2,
    title: "Concert Ticket Ordering System",
    image: project2,
    description:
      "A concert ticket ordering platform with backend features for ordering flow, authentication, admin management, and deployment support.",
    role: "Freelance Backend Developer",
    experience:
      "Built backend functionality for a concert ticket ordering platform. Implemented admin CRUD operations, user sign up/sign in, authentication, database integration, CSV export, Cloudinary image storage, and deployment support on Render.",
    tech: [
      { name: "Django", iconKey: "django" },
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "Render", iconKey: "render" },
      { name: "Cloudinary", iconKey: "cloud" },
    ],
    github: "https://github.com/Thantwyl/Tickets-Anywhere-Backend",
    live: "https://ticketany-frontend-pi.vercel.app/",
  },
  {
    id: 3,
    title: "Flight Ticket Ordering System",
    image: project3,
    description:
      "A flight ticket ordering system with backend functionality for booking flow, authentication, and staff management.",
    role: "Volunteer Backend Developer / Mentor",
    experience:
      "Developed backend features for a flight ticket ordering system in a real-world environment. Implemented admin CRUD operations, user and staff management, authentication, database handling, currency management, used Docker for development, and supported hosting on the client server.",
    tech: [
      { name: "FastAPI", iconKey: "fastapi" },
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "Docker", iconKey: "docker" },
      { name: "Python", iconKey: "python" },
    ],
    github: "https://github.com/yourusername/flight-ticket-system",
    live: "https://your-flight-project.com",
  },
  {
    id: 4,
    title: "Civil Master Solution / Ductil  ",
    image: project4,
    description:
      "A responsive product showcase and advertisement website built for a company project.",
    role: "Frontend Developer",
    experience:
      "Built responsive frontend pages for a company product showcase and advertisement website using React and Tailwind CSS, and supported deployment on Vercel.",
    tech: [
      { name: "React", iconKey: "react" },
      { name: "Tailwind CSS", iconKey: "tailwind" },
      { name: "JavaScript", iconKey: "javascript" },
      { name: "Vercel", iconKey: "vercel" },
    ],
    github: "https://github.com/civilmastersolution-CMS/Ductil_dev",
    live: "https://ductil-dev.vercel.app/",
  },
];