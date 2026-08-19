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
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Contact", href: "/about" },
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
    iconName: "Target",
  },
  {
    id: "vision",
    title: "Vision",
    description:
      "To become India's most trusted engineering career acceleration platform — where every graduate is equipped with production-level skills, a compelling portfolio, and the confidence to excel in technical interviews.",
    iconName: "Compass",
  },
  {
    id: "values",
    title: "Values",
    description:
      "Build real things. Ship to production. Learn by doing. Embrace AI-first development. Pursue engineering excellence over shortcuts. Measure outcomes, not hours.",
    iconName: "Heart",
  },
] as const;

// =============================================
// WHY SKILLPEDIA (Section 3)
// =============================================

export const COMPARISON_TRADITIONAL = [
  { label: "Long theoretical lectures", iconName: "MonitorOff" },
  { label: "Little practical exposure", iconName: "FolderX" },
  { label: "Generic, outdated curriculum", iconName: "Archive" },
  { label: "Degree-focused outcome", iconName: "GraduationCap" },
  { label: "No portfolio or project work", iconName: "Briefcase" },
  { label: "Limited interview preparation", iconName: "UserX" },
] as const;

export const COMPARISON_SKILLPEDIA = [
  { label: "Intensive, hands-on training", iconName: "Terminal" },
  { label: "Build real, deployable projects", iconName: "Rocket" },
  { label: "Industry-aligned, AI-first tools", iconName: "Bot" },
  { label: "Interview-ready in 12 weeks", iconName: "Target" },
  { label: "Production portfolio at graduation", iconName: "Briefcase" },
  { label: "Mock interviews & HR preparation", iconName: "Users" },
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
    iconName: "BookOpen",
    color: "#3B82F6",
  },
  {
    id: "practice",
    title: "Practice",
    description: "Hands-on coding exercises & challenges",
    iconName: "Code2",
    color: "#6366F1",
  },
  {
    id: "build",
    title: "Build",
    description: "Develop real-world projects from scratch",
    iconName: "Blocks",
    color: "#8B5CF6",
  },
  {
    id: "deploy",
    title: "Deploy",
    description: "Ship applications to production servers",
    iconName: "Rocket",
    color: "#FF7A00",
  },
  {
    id: "present",
    title: "Present",
    description: "Demo your work in weekly showcases",
    iconName: "Presentation",
    color: "#EC4899",
  },
  {
    id: "interview",
    title: "Interview",
    description: "Mock technical & HR interview rounds",
    iconName: "Users",
    color: "#EF4444",
  },
  {
    id: "hired",
    title: "Get Hired",
    description: "Launch your engineering career",
    iconName: "Briefcase",
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
    icon: "https://img.icons8.com/color/480/000000/resume.png",
    color: "#3B82F6",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Professional GitHub profile with pinned repositories, clean commit history, and documentation",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    color: "#6366F1",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Optimized LinkedIn profile with project highlights, endorsements, and networking strategy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    color: "#0A66C2",
  },
  {
    id: "dsa",
    title: "DSA",
    description: "Structured DSA preparation covering arrays, trees, graphs, DP, and system design fundamentals",
    icon: "https://img.icons8.com/color/480/000000/tree-structure.png",
    color: "#8B5CF6",
  },
  {
    id: "mock-interviews",
    title: "Mock Interviews",
    description: "Multiple rounds of technical mock interviews with detailed feedback and improvement plans",
    icon: "https://img.icons8.com/color/480/000000/interview.png",
    color: "#FF7A00",
  },
  {
    id: "hr-preparation",
    title: "HR Preparation",
    description: "Behavioral interview coaching, salary negotiation tactics, and professional communication skills",
    icon: "https://img.icons8.com/color/480/000000/manager.png",
    color: "#EC4899",
  },
  {
    id: "offer-letter",
    title: "Offer Letter",
    description: "Graduate fully prepared to receive and evaluate job offers with confidence",
    icon: "https://img.icons8.com/color/480/000000/contract.png",
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
    { label: "Fullstack Engineering", href: "/programs/full-stack-engineering" },
    { label: "AI & ML Development", href: "/programs/ai-ml-development" },
    { label: "Software testing and Cybersecurity", href: "/programs/software-testing-cybersecurity" },
    { label: "Career Acceleration", href: "/programs/career-acceleration" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Vision and Mission", href: "/vision-mission" },
    { label: "Message from the CEO", href: "/ceo-message" },
  ],
  resources: [
    { label: "Curriculum", href: "/#roadmap" },
    { label: "Projects", href: "/#projects" },
    { label: "FAQ", href: "/#faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Refund Policy", href: "/refund-policy" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { label: "Twitter", href: "#", icon: "twitter" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

// =============================================
// PROGRAMS (Programs Page)
// =============================================

export const PROGRAMS_LIST: ProgramCourse[] = [
  {
    "id": "full-stack-engineering",
    "title": "Fullstack Engineering",
    "description": "Master both frontend and backend development. Build scalable web applications from scratch using modern frameworks and databases.",
    "href": "/programs/full-stack-engineering",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "color": "#10B981",
    "category": "Core",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "React",
      "Node.js",
      "System Design",
      "Cloud",
      "MongoDB"
    ]
  },
  {
    "id": "ai-ml-development",
    "title": "AI & ML Development Program",
    "description": "Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with LLMs, and deploy AI applications.",
    "href": "/programs/ai-ml-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#6366F1",
    "category": "Core",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "LLMs",
      "LangChain"
    ]
  },
  {
    "id": "software-testing-cybersecurity",
    "title": "Software Testing & Cybersecurity",
    "description": "Combine comprehensive software QA automation with web security testing, OWASP vulnerabilities, penetration testing, and ethical hacking.",
    "href": "/programs/software-testing-cybersecurity",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "color": "#14B8A6",
    "category": "Core",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Manual QA",
      "Selenium",
      "Cybersecurity",
      "OWASP",
      "Burp Suite"
    ]
  },
  {
    "id": "career-acceleration",
    "title": "Career Acceleration",
    "description": "Supercharge your career readiness with technical interview practice, corporate communication mastery, resume optimization, and executive presence.",
    "href": "/programs/career-acceleration",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#F43F5E",
    "category": "Core",
    "duration": "3 Months",
    "level": "All Levels",
    "tags": [
      "Interview Prep",
      "Soft Skills",
      "Resume Building",
      "Public Speaking",
      "Negotiation"
    ]
  },
  {
    "id": "advanced-communication",
    "title": "Advanced Communication & Influence Program",
    "description": "Elevate your impact with high-stakes communication techniques. Master persuasive speaking, corporate storytelling, win-win negotiation tactics, and constructive conflict resolution.",
    "href": "/programs/advanced-communication",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#6366F1",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Advanced",
    "tags": [
      "Persuasion & Influence",
      "Rhetoric & Storytelling",
      "Negotiation",
      "Presence"
    ]
  },
  {
    "id": "ai-based-software-testing",
    "title": "AI-Based Software Testing",
    "description": "Step into the future of QA engineering. Learn AI-powered automated test generation, self-healing test automation scripts, visual AI verification, and LLM-assisted test strategy.",
    "href": "/programs/ai-based-software-testing",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#06B6D4",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate to Advanced",
    "tags": [
      "AI Test Generation",
      "Self-Healing Locators",
      "Visual AI",
      "Test Synthesis"
    ]
  },
  {
    "id": "api-development",
    "title": "API Development Program",
    "description": "Master the craft of designing, building, securing, and documenting production-ready APIs using REST, GraphQL, OpenAPI specs, and modern token authentication.",
    "href": "/programs/api-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "color": "#8B5CF6",
    "category": "Development",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "RESTful APIs",
      "FastAPI",
      "GraphQL",
      "OAuth2 & JWT",
      "OpenAPI"
    ]
  },
  {
    "id": "api-testing-postman-rest-assured",
    "title": "API Testing with Postman & Rest Assured",
    "description": "Learn automated API testing from no-code Postman workflows to full-scale programmatic test automation using Rest Assured in Java with JSON schema assertions.",
    "href": "/programs/api-testing-postman-rest-assured",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "color": "#F59E0B",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Postman Collections",
      "Rest Assured Java",
      "JSON Schema",
      "Newman",
      "OAuth 2.0"
    ]
  },
  {
    "id": "automation-testing-selenium",
    "title": "Automation Testing with Selenium",
    "description": "Transform from manual tester to automation engineer. Master Selenium WebDriver, complex XPath/CSS locators, Page Object Model (POM) architecture, and TestNG test runners.",
    "href": "/programs/automation-testing-selenium",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "color": "#10B981",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Selenium WebDriver",
      "Page Object Model",
      "TestNG",
      "Locators",
      "CI/CD"
    ]
  },
  {
    "id": "backend-development",
    "title": "Backend Development Program",
    "description": "Architect and deploy robust, high-throughput backend services. Master database indexing, distributed caching with Redis, message queues, and microservice patterns.",
    "href": "/programs/backend-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "color": "#6366F1",
    "category": "Development",
    "duration": "3 Months",
    "level": "Intermediate to Advanced",
    "tags": [
      "System Design",
      "Microservices",
      "Redis",
      "DB Optimization",
      "Docker"
    ]
  },
  {
    "id": "basic-english-communication",
    "title": "Basic English Communication Program",
    "description": "Build essential English language skills from the ground up. Learn daily conversational vocabulary, clear sentence structure, correct pronunciation, and eliminate hesitation.",
    "href": "/programs/basic-english-communication",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#F43F5E",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Beginner",
    "tags": [
      "Everyday Vocabulary",
      "Sentence Construction",
      "Pronunciation",
      "Listening"
    ]
  },
  {
    "id": "communication-for-beginners",
    "title": "Communication for Beginners",
    "description": "Tailored for complete beginners who feel shy or anxious speaking in English. Build stage courage, positive body language, effective self-introductions, and engaging small talk.",
    "href": "/programs/communication-for-beginners",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#10B981",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Beginner",
    "tags": [
      "Fear Removal",
      "Self-Introduction",
      "Body Language",
      "Small Talk Starters"
    ]
  },
  {
    "id": "complete-software-testing-course",
    "title": "Complete Software Testing Course",
    "description": "The definitive all-in-one QA bootcamp. Covers everything from Manual Testing and Jira to Selenium WebDriver, API Testing, Performance Testing, and interview placement coaching.",
    "href": "/programs/complete-software-testing-course",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "color": "#059669",
    "category": "Testing",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Manual QA",
      "Selenium Automation",
      "API Testing",
      "Jira & Agile",
      "Placements"
    ]
  },
  {
    "id": "corporate-communication",
    "title": "Corporate Communication & Leadership",
    "description": "Comprehensive corporate readiness program. Master senior stakeholder management, executive presentation delivery, formal business proposal writing, and cross-functional leadership.",
    "href": "/programs/corporate-communication",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#4F46E5",
    "category": "Communication",
    "duration": "3 Months",
    "level": "Intermediate to Advanced",
    "tags": [
      "Stakeholder Management",
      "Leadership Presence",
      "Crisis Comm",
      "Proposals"
    ]
  },
  {
    "id": "english-grammar-tenses",
    "title": "English Grammar & Tenses Mastery",
    "description": "Eliminate grammatical mistakes forever. Gain mastery over all 12 tenses, subject-verb agreement, clauses, prepositions, and active/passive voice for crystal-clear communication.",
    "href": "/programs/english-grammar-tenses",
    "icon": "https://cdn.simpleicons.org/googlemeet",
    "color": "#A855F7",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "All 12 Tenses",
      "Parts of Speech",
      "Active/Passive Voice",
      "Direct/Indirect"
    ]
  },
  {
    "id": "frontend-development",
    "title": "Frontend Development Program",
    "description": "Create stunning, accessible, and high-performance user interfaces. Master modern frontend frameworks, TypeScript, animations with Framer Motion, and Core Web Vitals optimization.",
    "href": "/programs/frontend-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "color": "#EC4899",
    "category": "Development",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Web Performance"
    ]
  },
  {
    "id": "interview-communication",
    "title": "Interview Communication & Placement Mastery",
    "description": "Crack any technical and HR interview round. Master the STAR framework for behavioral questions, deliver punchy resume walkthroughs, and negotiate compensation with confidence.",
    "href": "/programs/interview-communication",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#FF7A00",
    "category": "Communication",
    "duration": "45 Days",
    "level": "All Levels",
    "tags": [
      "STAR Methodology",
      "HR Questions",
      "Resume Walkthrough",
      "Salary Negotiation"
    ]
  },
  {
    "id": "java-development",
    "title": "Java Development Program",
    "description": "Build enterprise-grade applications with Core Java, Object-Oriented Design, Spring Boot microservices, JPA/Hibernate, and scalable database architectures.",
    "href": "/programs/java-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "color": "#EA580C",
    "category": "Development",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Core Java",
      "Spring Boot",
      "Hibernate",
      "Microservices",
      "PostgreSQL"
    ]
  },
  {
    "id": "java-selenium",
    "title": "Java + Selenium Full Track",
    "description": "The industry standard for test automation. Combine Core Java programming with Selenium WebDriver, Maven build management, and Cucumber BDD hybrid test frameworks.",
    "href": "/programs/java-selenium",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "color": "#F97316",
    "category": "Testing",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Java for QA",
      "Selenium WebDriver",
      "Maven",
      "Cucumber BDD",
      "Hybrid Framework"
    ]
  },
  {
    "id": "javascript",
    "title": "JavaScript Mastery Program",
    "description": "Deep dive into the core engine of the modern web. Master execution context, closures, prototypes, asynchronous JavaScript, promises, and the event loop.",
    "href": "/programs/javascript",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "color": "#FACC15",
    "category": "Development",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "ES6+",
      "Async/Await",
      "DOM",
      "Event Loop",
      "Closures"
    ]
  },
  {
    "id": "javascript-typescript-test-automation",
    "title": "JavaScript & TypeScript for Test Automation",
    "description": "Learn modern JavaScript and TypeScript specifically tailored for SDETs and test automation engineers. Master async/await, interfaces, generics, and test runners.",
    "href": "/programs/javascript-typescript-test-automation",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "color": "#3B82F6",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "TypeScript for QA",
      "Async/Await",
      "Jest",
      "Playwright Basics",
      "Clean Tests"
    ]
  },
  {
    "id": "manual-testing",
    "title": "Manual Testing Program",
    "description": "Master software quality assurance fundamentals. Learn test planning, boundary value analysis, test execution, defect reporting in Jira, and Agile QA methodologies.",
    "href": "/programs/manual-testing",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    "color": "#14B8A6",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Beginner",
    "tags": [
      "SDLC & STLC",
      "Test Case Design",
      "Bug Life Cycle",
      "Jira",
      "Agile Testing"
    ]
  },
  {
    "id": "mobile-app-testing",
    "title": "Mobile App Testing with Appium",
    "description": "Test native, hybrid, and mobile web applications on Android and iOS. Master Appium 2.0, mobile gestures (swipe, tap, pinch), device cloud testing, and mobile test architecture.",
    "href": "/programs/mobile-app-testing",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    "color": "#8B5CF6",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Appium 2.0",
      "Android & iOS",
      "Emulators/Real Devices",
      "Mobile Gestures"
    ]
  },
  {
    "id": "nodejs",
    "title": "Node.js Backend Program",
    "description": "Harness the power of asynchronous JavaScript on the backend. Create performant REST APIs, manage streams and buffers, handle file systems, and integrate secure authentication.",
    "href": "/programs/nodejs",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "color": "#22C55E",
    "category": "Development",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Express.js",
      "Event Loop",
      "REST APIs",
      "Streams & Buffers",
      "JWT"
    ]
  },
  {
    "id": "performance-testing",
    "title": "Performance Testing with JMeter",
    "description": "Ensure applications can handle millions of concurrent users. Learn load testing, stress testing, spike testing, bottleneck analysis, and APM monitoring using Apache JMeter.",
    "href": "/programs/performance-testing",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    "color": "#EF4444",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Apache JMeter",
      "Load & Stress Testing",
      "Throughput",
      "Bottleneck Analysis"
    ]
  },
  {
    "id": "playwright-automation",
    "title": "Playwright Automation Program",
    "description": "Master Microsoft Playwright — the next-generation end-to-end automation tool. Test modern single-page apps across Chromium, Firefox, and WebKit with zero flaky tests.",
    "href": "/programs/playwright-automation",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
    "color": "#2DD4BF",
    "category": "Testing",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Playwright",
      "TypeScript",
      "Auto-waiting",
      "Visual Regression",
      "Cross-Browser"
    ]
  },
  {
    "id": "professional-communication",
    "title": "Professional Communication in the Workplace",
    "description": "Master day-to-day corporate communication. Write impactful business emails, run productive standup meetings, master cross-cultural collaboration, and craft clear status reports.",
    "href": "/programs/professional-communication",
    "icon": "https://cdn.simpleicons.org/googlemeet",
    "color": "#0284C7",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Intermediate to Advanced",
    "tags": [
      "Business Email Writing",
      "Meeting Etiquette",
      "Slack/Teams",
      "Status Reports"
    ]
  },
  {
    "id": "python-development",
    "title": "Python Development Program",
    "description": "Master Python programming from syntax and advanced data structures to high-performance FastAPI/Django backend services, automation scripts, and database operations.",
    "href": "/programs/python-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#38BDF8",
    "category": "Development",
    "duration": "3 Months",
    "level": "Beginner to Advanced",
    "tags": [
      "Python 3",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Data Pipelines"
    ]
  },
  {
    "id": "react-js",
    "title": "React JS Program",
    "description": "Build dynamic, lightning-fast Single Page Applications with React 18+. Master custom hooks, state management (Redux Toolkit/Zustand), component lifecycle, and optimized rendering.",
    "href": "/programs/react-js",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "color": "#61DAFB",
    "category": "Development",
    "duration": "45 Days",
    "level": "Intermediate",
    "tags": [
      "Hooks",
      "State Management",
      "Zustand",
      "React Router",
      "Component Lifecycle"
    ]
  },
  {
    "id": "software-development-with-ai-tools",
    "title": "Software Development with AI Tools Program",
    "description": "10x your software engineering productivity. Learn to leverage GitHub Copilot, Cursor AI, Claude, and LLM APIs for rapid prototyping, intelligent debugging, and automated testing.",
    "href": "/programs/software-development-with-ai-tools",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "color": "#10B981",
    "category": "Development",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "GitHub Copilot",
      "Cursor AI",
      "LLM Prompting",
      "AI Code Review",
      "Workflows"
    ]
  },
  {
    "id": "spoken-english",
    "title": "Spoken English & Fluency Program",
    "description": "Master fluent and natural English speaking. Focus on accent reduction, speech rhythm, intonation, extempore speaking, and expressing ideas smoothly without mother-tongue influence (MTI).",
    "href": "/programs/spoken-english",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#FB923C",
    "category": "Communication",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "Fluency Drills",
      "Accent & Intonation",
      "Extempore Speaking",
      "Public Speaking"
    ]
  },
  {
    "id": "web-development",
    "title": "Web Development Program",
    "description": "Kickstart your coding journey by building beautiful, interactive, and mobile-first responsive websites using semantic HTML5, modern CSS3/Tailwind, and vanilla JavaScript.",
    "href": "/programs/web-development",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "color": "#06B6D4",
    "category": "Development",
    "duration": "45 Days",
    "level": "Beginner to Intermediate",
    "tags": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI"
    ]
  }
];


export type CourseCategory = "Core" | "Development" | "Testing" | "Communication" | "Career";

export interface ProgramCourse {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
  iconName?: string;
  color: string;
  tags: string[];
  category?: CourseCategory;
  duration?: string;
  level?: string;
}
