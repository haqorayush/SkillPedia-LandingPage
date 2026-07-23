// =============================================
// SkillPedia Website — Content Constants
// =============================================

export const BRAND = {
  name: "SkillPedia",
  tagline: "LEARN. UPSKILL. GET HIRED.",
  description:
    "Build real-world software. Master AI. Deploy production applications. Prepare for technical interviews. Launch your career.",
} as const;


// =============================================
// NAVIGATION
// =============================================

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#why-skillpedia" },
  { label: "Curriculum", href: "#roadmap" },
  { label: "Projects", href: "#projects" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;

// =============================================
// WHO WE ARE (Section 2)
// =============================================

export const WHO_WE_ARE = [
  {
    id: "mission",
    title: "Mission",
    description:
      "To eliminate the gap between college education and industry expectations by delivering engineering-grade training that produces job-ready software professionals.",
    icon: "🎯",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "To become India's most trusted engineering career acceleration platform — where every graduate is equipped with production-level skills, a compelling portfolio, and the confidence to excel in technical interviews.",
    icon: "🔭",
  },
  {
    id: "values",
    title: "Values",
    description:
      "Build real things. Ship to production. Learn by doing. Embrace AI-first development. Pursue engineering excellence over shortcuts. Measure outcomes, not hours.",
    icon: "⚡",
  },
] as const;

// =============================================
// WHY SKILLPEDIA (Section 3)
// =============================================

export const COMPARISON_TRADITIONAL = [
  { label: "Long theoretical lectures", icon: "📚" },
  { label: "Little practical exposure", icon: "📝" },
  { label: "Generic, outdated curriculum", icon: "📖" },
  { label: "Degree-focused outcome", icon: "🎓" },
  { label: "No portfolio or project work", icon: "❌" },
  { label: "Limited interview preparation", icon: "😰" },
] as const;

export const COMPARISON_SKILLPEDIA = [
  { label: "Intensive, hands-on training", icon: "🚀" },
  { label: "Build real, deployable projects", icon: "💻" },
  { label: "Industry-aligned, AI-first tools", icon: "🤖" },
  { label: "Interview-ready in 12 weeks", icon: "✅" },
  { label: "Production portfolio at graduation", icon: "🏆" },
  { label: "Mock interviews & HR preparation", icon: "🎯" },
] as const;

// =============================================
// ENGINEERING ROADMAP (Section 4)
// =============================================

export const ROADMAP_MONTHS = [
  {
    id: "month-1",
    month: 1,
    title: "Engineering Foundations",
    subtitle: "From Zero to Backend Developer",
    color: "#3B82F6",
    topics: [
      "Python Programming & Logic Building",
      "Backend Development with FastAPI",
      "Git, GitHub & Version Control",
      "Cloud Deployment (AWS/GCP)",
      "Database Design & SQL",
    ],
    outcome: "Deploy your first production API",
  },
  {
    id: "month-2",
    month: 2,
    title: "AI & Modern Engineering",
    subtitle: "Build Intelligent Applications",
    color: "#FF7A00",
    topics: [
      "Artificial Intelligence Fundamentals",
      "LLM Integration & SDK Development",
      "Data Engineering Pipelines",
      "Prompt Engineering & RAG Systems",
      "API Design & Microservices",
    ],
    outcome: "Ship an AI-powered application",
  },
  {
    id: "month-3",
    month: 3,
    title: "Capstone & Career Launch",
    subtitle: "Portfolio-Ready Engineer",
    color: "#10B981",
    topics: [
      "Full-Stack Capstone Project",
      "Interactive Dashboard Development",
      "3D Web Experiences",
      "Technical Interview Preparation",
      "Final Production Deployment",
    ],
    outcome: "Graduate with a professional portfolio",
  },
] as const;

// =============================================
// LEARNING FLOW (Section 5)
// =============================================

export const LEARNING_STEPS = [
  {
    id: "learn",
    title: "Learn",
    description: "Live, instructor-led engineering sessions",
    icon: "📖",
    color: "#3B82F6",
  },
  {
    id: "practice",
    title: "Practice",
    description: "Hands-on coding exercises & challenges",
    icon: "⌨️",
    color: "#6366F1",
  },
  {
    id: "build",
    title: "Build",
    description: "Develop real-world projects from scratch",
    icon: "🔨",
    color: "#8B5CF6",
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Ship applications to production servers",
    icon: "🚀",
    color: "#FF7A00",
  },
  {
    id: "present",
    title: "Present",
    description: "Demo your work in weekly showcases",
    icon: "🎤",
    color: "#EC4899",
  },
  {
    id: "interview",
    title: "Interview",
    description: "Mock technical & HR interview rounds",
    icon: "🎯",
    color: "#EF4444",
  },
  {
    id: "hired",
    title: "Get Hired",
    description: "Launch your engineering career",
    icon: "🏆",
    color: "#10B981",
  },
] as const;

// =============================================
// PROJECT SHOWCASE (Section 6)
// =============================================

export const PROJECT_CATEGORIES = [
  "All",
  "Backend APIs",
  "AI Applications",
  "Automation Tools",
  "Dashboards",
  "Portfolio Websites",
  "Capstone Projects",
] as const;

export const PROJECTS = [
  {
    id: "project-1",
    title: "Intelligent Task Manager API",
    description:
      "A production-grade REST API built with FastAPI, featuring JWT authentication, PostgreSQL, and automated CI/CD deployment.",
    category: "Backend APIs",
    tags: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    color: "#3B82F6",
  },
  {
    id: "project-2",
    title: "AI Resume Analyzer",
    description:
      "An LLM-powered application that analyzes resumes against job descriptions and provides actionable improvement suggestions.",
    category: "AI Applications",
    tags: ["Python", "OpenAI", "LangChain", "Streamlit"],
    color: "#FF7A00",
  },
  {
    id: "project-3",
    title: "Cloud Deployment Automator",
    description:
      "A CLI tool that automates AWS/GCP deployments with zero-downtime strategies, environment management, and rollback support.",
    category: "Automation Tools",
    tags: ["Python", "AWS", "Terraform", "GitHub Actions"],
    color: "#10B981",
  },
  {
    id: "project-4",
    title: "Real-Time Analytics Dashboard",
    description:
      "A responsive data visualization dashboard with live-updating charts, WebSocket integration, and dark mode support.",
    category: "Dashboards",
    tags: ["React", "D3.js", "WebSocket", "Tailwind"],
    color: "#8B5CF6",
  },
  {
    id: "project-5",
    title: "Developer Portfolio Platform",
    description:
      "A stunning, animated portfolio site with 3D elements, blog integration, and CMS-powered content management.",
    category: "Portfolio Websites",
    tags: ["Next.js", "Three.js", "Framer Motion", "MDX"],
    color: "#EC4899",
  },
  {
    id: "project-6",
    title: "Full-Stack AI SaaS Platform",
    description:
      "A complete SaaS application with user auth, payment integration, AI-powered features, admin dashboard, and production deployment.",
    category: "Capstone Projects",
    tags: ["Next.js", "FastAPI", "Stripe", "OpenAI"],
    color: "#F59E0B",
  },
] as const;

// =============================================
// CAREER READINESS (Section 7)
// =============================================

export const CAREER_MILESTONES = [
  {
    id: "resume",
    title: "Resume",
    description: "ATS-optimized, technically compelling resume crafted with industry best practices",
    icon: "📄",
    color: "#3B82F6",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Professional GitHub profile with pinned repositories, clean commit history, and documentation",
    icon: "🐙",
    color: "#6366F1",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Optimized LinkedIn profile with project highlights, endorsements, and networking strategy",
    icon: "💼",
    color: "#0A66C2",
  },
  {
    id: "dsa",
    title: "DSA",
    description: "Structured DSA preparation covering arrays, trees, graphs, DP, and system design fundamentals",
    icon: "🧮",
    color: "#8B5CF6",
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description: "Multiple rounds of technical mock interviews with detailed feedback and improvement plans",
    icon: "🎯",
    color: "#FF7A00",
  },
  {
    id: "hr-preparation",
    title: "HR Preparation",
    description: "Behavioral interview coaching, salary negotiation tactics, and professional communication skills",
    icon: "🤝",
    color: "#EC4899",
  },
  {
    id: "offer-letter",
    title: "Offer Letter",
    description: "Graduate fully prepared to receive and evaluate job offers with confidence",
    icon: "🏆",
    color: "#10B981",
  },
] as const;

// =============================================
// STATISTICS (Section 8)
// =============================================

export const STATS = [
  { id: "stat-weeks", value: 12, label: "Weeks", suffix: "", prefix: "" },
  { id: "stat-hours", value: 100, label: "Learning Hours", suffix: "+", prefix: "" },
  { id: "stat-projects", value: 6, label: "Industry Projects", suffix: "+", prefix: "" },
  { id: "stat-assessments", value: 12, label: "Weekly Assessments", suffix: "", prefix: "" },
  { id: "stat-interviews", value: 5, label: "Mock Interviews", suffix: "+", prefix: "" },
  { id: "stat-portfolio", value: 1, label: "Portfolio Ready", suffix: "", prefix: "" },
] as const;

// =============================================
// TESTIMONIALS (Section 9)
// =============================================

export const TESTIMONIALS = [
  {
    id: "testimonial-1",
    name: "Arjun Mehta",
    role: "Backend Developer at TCS",
    quote:
      "SkillPedia transformed my approach to software development. In 12 weeks, I went from writing basic Python scripts to deploying production APIs. The hands-on projects gave me real confidence in interviews.",
    rating: 5,
    avatar: "AM",
  },
  {
    id: "testimonial-2",
    name: "Priya Sharma",
    role: "AI Engineer at Infosys",
    quote:
      "The AI module was incredible. Building an actual LLM-powered application and deploying it to the cloud — that experience was worth more than an entire semester of college theory.",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "testimonial-3",
    name: "Rohit Patel",
    role: "Full Stack Developer at Wipro",
    quote:
      "The career preparation at SkillPedia is unmatched. Mock interviews, GitHub portfolio review, resume optimization — I walked into my interviews feeling like a senior developer.",
    rating: 5,
    avatar: "RP",
  },
  {
    id: "testimonial-4",
    name: "Sneha Gupta",
    role: "Software Engineer at Accenture",
    quote:
      "What makes SkillPedia different is the production-first mindset. Every project was deployed, every API was documented, every feature was code-reviewed. That's how real engineering works.",
    rating: 5,
    avatar: "SG",
  },
  {
    id: "testimonial-5",
    name: "Karan Singh",
    role: "DevOps Engineer at Cognizant",
    quote:
      "I was a mechanical engineering student with zero coding experience. SkillPedia's structured roadmap took me from console logs to containerized microservices in 3 months.",
    rating: 5,
    avatar: "KS",
  },
] as const;

// =============================================
// FAQ (Section 10)
// =============================================

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Who is SkillPedia for?",
    answer:
      "SkillPedia is designed for college students (CS, IT, ECE, MCA, BCA), recent graduates, working professionals looking to switch to software engineering, and anyone who wants to become a job-ready developer in 12 weeks.",
  },
  {
    id: "faq-2",
    question: "Do I need prior coding experience?",
    answer:
      "No. Our program starts from absolute fundamentals. We've designed the curriculum to take complete beginners and transform them into production-ready engineers. However, basic computer literacy is expected.",
  },
  {
    id: "faq-3",
    question: "How is SkillPedia different from online courses?",
    answer:
      "SkillPedia is not a course platform. It's an intensive, live training experience. You'll build real projects, deploy to production, write professional code, and prepare for interviews — all with live instructor guidance and peer collaboration.",
  },
  {
    id: "faq-4",
    question: "What will I be able to build after the program?",
    answer:
      "You'll graduate with 6+ production-deployed projects including backend APIs, AI-powered applications, automation tools, interactive dashboards, and a full-stack capstone project. All with clean code, documentation, and CI/CD.",
  },
  {
    id: "faq-5",
    question: "Is the program entirely online or offline?",
    answer:
      "The program is conducted via live, interactive online sessions. This means you can join from anywhere in India while still getting the real-time instruction and collaboration of an in-person experience.",
  },
  {
    id: "faq-6",
    question: "How does SkillPedia help with placements?",
    answer:
      "Our career preparation includes ATS-optimized resume building, GitHub and LinkedIn profile optimization, structured DSA practice, 5+ mock technical interviews, HR round coaching, and salary negotiation guidance.",
  },
  {
    id: "faq-7",
    question: "What is the time commitment?",
    answer:
      "The program runs for 12 weeks with structured daily sessions. Expect 3-4 hours of live instruction per day plus additional time for projects and practice. Full commitment is required for the best outcomes.",
  },
  {
    id: "faq-8",
    question: "What technologies will I learn?",
    answer:
      "Python, FastAPI, Git/GitHub, SQL/PostgreSQL, AWS/GCP cloud deployment, AI/LLM development, LangChain, prompt engineering, React/Next.js, Docker, CI/CD, and modern DevOps practices.",
  },
] as const;

// =============================================
// FOOTER
// =============================================

export const FOOTER_LINKS = {
  programs: [
    { label: "Full Stack Engineering", href: "#roadmap" },
    { label: "AI & ML Development", href: "#roadmap" },
    { label: "Career Acceleration", href: "#careers" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Method", href: "#learning-flow" },
    { label: "Success Stories", href: "#testimonials" },
  ],
  resources: [
    { label: "Curriculum", href: "#roadmap" },
    { label: "Projects", href: "#projects" },
    { label: "FAQ", href: "#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;
