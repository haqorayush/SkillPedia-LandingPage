// =============================================
// SkillPedia Centralized Course Database
// Complete dataset for 33 programs with full modules, tools,
// instructors, stats, pricing, prerequisites, and outcomes.
// =============================================

export type CourseCategory = 'Core' | 'Development' | 'Testing' | 'Communication' | 'core' | 'development' | 'testing' | 'communication';

export interface CourseStat {
  label: string;
  value: string;
  iconName: string;
}

export interface CourseTool {
  name: string;
  category?: string;
  iconName: string;
  color: string;
}

export interface ToolsSectionConfig {
  title: string;
  description: string;
  tools: CourseTool[];
}

export interface CourseModule {
  id: string;
  period?: string;
  title: string;
  duration?: string;
  description: string;
  topics: string[];
}

export interface CurriculumSectionConfig {
  title: string;
  description: string;
  modules: CourseModule[];
}

export interface CourseInstructor {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CTAConfig {
  headline: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

export interface CourseData {
  slug: string;
  title: string;
  tagline: string;
  category: CourseCategory;
  level: string;
  duration: string;
  mode: string;
  price: string;
  originalPrice?: string;
  rating: number;
  enrolledStudents: string;
  overview: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  color: string;
  tags: string[];

  badge: {
    text: string;
    iconName: string;
  };
  heroHeading: {
    prefix?: string;
    highlight: string;
    suffix?: string;
    gradient?: string;
  };
  heroDescription: string;
  stats: CourseStat[];

  tools: CourseTool[];
  toolsSection: ToolsSectionConfig;

  curriculum: CourseModule[];
  curriculumSection: CurriculumSectionConfig;

  instructors: CourseInstructor[];

  prerequisites: string[];
  outcomes: string[];

  cta: CTAConfig;
  ctaHeadline?: string;
  ctaDescription?: string;
}

export const COURSES_DATA: CourseData[] = [
  {
    "slug": "advanced-communication",
    "title": "Advanced Communication & Influence Program",
    "tagline": "Elevate your impact with high-stakes communication techniques. Master persuasive speaking, corporate storytelling, win-win negotiation tactics, and constructive conflict resolution.",
    "category": "Communication",
    "level": "Advanced",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Step into the boardroom with confidence. Master executive storytelling, the psychology of persuasion, win-win negotiation, and high-impact stakeholder influence in 45 days.",
    "metaTitle": "Advanced Communication & Influence Program | SkillPedia",
    "metaDescription": "Master high-stakes persuasion, executive storytelling, win-win negotiation, and boardroom presence in 45 days. Designed for aspiring leaders and senior professionals.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#6366F1",
    "tags": [
      "Persuasion & Influence",
      "Rhetoric & Storytelling",
      "Negotiation",
      "Presence"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Leadership & Influence Program"
    },
    "heroHeading": {
      "prefix": "Advanced",
      "highlight": "Communication",
      "suffix": "",
      "gradient": "from-indigo-600 to-violet-500"
    },
    "heroDescription": "Step into the boardroom with confidence. Master executive storytelling, the psychology of persuasion, win-win negotiation, and high-impact stakeholder influence in 45 days.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Executive Workshops",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Persuasion & Presence",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Leadership Coaching",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Corporate Storytelling & Hooks",
        "iconName": "Sparkles",
        "color": "text-indigo-500"
      },
      {
        "name": "Psychology of Persuasion & Influence",
        "iconName": "Brain",
        "color": "text-violet-500"
      },
      {
        "name": "Win-Win Negotiation Frameworks",
        "iconName": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "name": "Executive Presence & Charisma",
        "iconName": "Award",
        "color": "text-rose-500"
      },
      {
        "name": "High-Stakes Keynote Pitching",
        "iconName": "Presentation",
        "color": "text-blue-500"
      },
      {
        "name": "Objection Handling & Reframing",
        "iconName": "Lightbulb",
        "color": "text-amber-500"
      }
    ],
    "toolsSection": {
      "title": "The Executive Toolkit",
      "description": "Advanced frameworks engineered to influence decision-makers and command respect.",
      "tools": [
        {
          "name": "Corporate Storytelling & Hooks",
          "iconName": "Sparkles",
          "color": "text-indigo-500"
        },
        {
          "name": "Psychology of Persuasion & Influence",
          "iconName": "Brain",
          "color": "text-violet-500"
        },
        {
          "name": "Win-Win Negotiation Frameworks",
          "iconName": "ShieldCheck",
          "color": "text-emerald-500"
        },
        {
          "name": "Executive Presence & Charisma",
          "iconName": "Award",
          "color": "text-rose-500"
        },
        {
          "name": "High-Stakes Keynote Pitching",
          "iconName": "Presentation",
          "color": "text-blue-500"
        },
        {
          "name": "Objection Handling & Reframing",
          "iconName": "Lightbulb",
          "color": "text-amber-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Narrative Architecture & Business Storytelling",
        "description": "Learn to move stakeholders through emotion and logic using time-tested narrative frameworks.",
        "topics": [
          "The Hero's Journey in Business & Technical Pitches",
          "The Hook-Story-Offer Framework for High-Stakes Talks",
          "Using Data Storytelling & Analogies to Simplify Complexity",
          "Vocal Dynamics: Cadence, Modulation, Pauses & Gravitas",
          "Commanding Authority without Aggression",
          "Project: Delivering a 3-Minute Strategic Vision Pitch"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "High-Stakes Negotiation, Executive Storytelling & Objection Handling",
        "description": "Master tactical empathy, principled negotiation, and rapid objection reframing in high-pressure scenarios.",
        "topics": [
          "Principled Negotiation: Harvard PON Framework & BATNA Strategy",
          "Tactical Empathy & Calibrated Questioning (Chris Voss Methodology)",
          "Live Objection Handling & Cognitive Reframing Techniques",
          "Defusing Hostile Stakeholders & De-escalation Dynamics",
          "Cross-Functional Influence Without Positional Authority",
          "Live Simulation: Enterprise Contract & Salary Negotiation Lab"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Executive Presence, Town Halls & Boardroom Influence",
        "description": "Lead organizations, manage difficult conversations, and inspire cross-functional teams with charisma.",
        "topics": [
          "Executive Presence: Micro-Expressions, Posture & Spatial Awareness",
          "Delivering Unscripted Impromptu Responses to Leadership",
          "Town Hall & All-Hands Presentation Delivery",
          "Constructive Conflict Resolution Between Competing Stakeholders",
          "Delivering Radical Candor: Direct Feedback with Empathy",
          "Final Capstone: Boardroom Pitch Showcase with Industry Judges"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Leadership Curriculum",
      "description": "Master the art of storytelling, high-stakes negotiation, and executive presence.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Narrative Architecture & Business Storytelling",
          "description": "Learn to move stakeholders through emotion and logic using time-tested narrative frameworks.",
          "topics": [
            "The Hero's Journey in Business & Technical Pitches",
            "The Hook-Story-Offer Framework for High-Stakes Talks",
            "Using Data Storytelling & Analogies to Simplify Complexity",
            "Vocal Dynamics: Cadence, Modulation, Pauses & Gravitas",
            "Commanding Authority without Aggression",
            "Project: Delivering a 3-Minute Strategic Vision Pitch"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "High-Stakes Negotiation, Executive Storytelling & Objection Handling",
          "description": "Master tactical empathy, principled negotiation, and rapid objection reframing in high-pressure scenarios.",
          "topics": [
            "Principled Negotiation: Harvard PON Framework & BATNA Strategy",
            "Tactical Empathy & Calibrated Questioning (Chris Voss Methodology)",
            "Live Objection Handling & Cognitive Reframing Techniques",
            "Defusing Hostile Stakeholders & De-escalation Dynamics",
            "Cross-Functional Influence Without Positional Authority",
            "Live Simulation: Enterprise Contract & Salary Negotiation Lab"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Executive Presence, Town Halls & Boardroom Influence",
          "description": "Lead organizations, manage difficult conversations, and inspire cross-functional teams with charisma.",
          "topics": [
            "Executive Presence: Micro-Expressions, Posture & Spatial Awareness",
            "Delivering Unscripted Impromptu Responses to Leadership",
            "Town Hall & All-Hands Presentation Delivery",
            "Constructive Conflict Resolution Between Competing Stakeholders",
            "Delivering Radical Candor: Direct Feedback with Empathy",
            "Final Capstone: Boardroom Pitch Showcase with Industry Judges"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      },
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Elevate Your Voice to Leadership Level",
      "description": "Command respect in high-stakes presentations, master subtle negotiations, and lead with unmistakable authority.",
      "buttonText": "Apply for Advanced Cohort",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Elevate Your Voice to Leadership Level",
    "ctaDescription": "Command respect in high-stakes presentations, master subtle negotiations, and lead with unmistakable authority."
  },
  {
    "slug": "ai-based-software-testing",
    "title": "AI-Based Software Testing",
    "tagline": "Step into the future of QA engineering. Learn AI-powered automated test generation, self-healing test automation scripts, visual AI verification, and LLM-assisted test strategy.",
    "category": "Testing",
    "level": "Intermediate to Advanced",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Step into the future of QA engineering. Master AI-powered automated test generation, self-healing test automation scripts, visual AI verification, and LLM-assisted test strategy.",
    "metaTitle": "AI-Based Software Testing | SkillPedia",
    "metaDescription": "Master AI-driven test automation in 45 days. Learn self-healing test locators, Applitools visual AI regression, automated test generation with LLMs, and autonomous QA pipelines.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#06B6D4",
    "tags": [
      "AI Test Generation",
      "Self-Healing Locators",
      "Visual AI",
      "Test Synthesis"
    ],
    "badge": {
      "iconName": "Brain",
      "text": "45-Day Next-Gen AI QA Specialization"
    },
    "heroHeading": {
      "prefix": "AI-Based",
      "highlight": "Software Testing",
      "suffix": "",
      "gradient": "from-cyan-500 to-blue-500"
    },
    "heroDescription": "Step into the future of QA engineering. Master AI-powered automated test generation, self-healing test automation scripts, visual AI verification, and LLM-assisted test strategy.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live AI Workshops",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Self-Healing & Visual AI",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 AI Architecture",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "LLM Prompting for QA",
        "iconName": "Brain",
        "color": "text-cyan-500"
      },
      {
        "name": "Applitools Eyes (Visual AI)",
        "iconName": "Eye",
        "color": "text-purple-500"
      },
      {
        "name": "Healenium (Self-Healing)",
        "iconName": "Sparkles",
        "color": "text-emerald-500"
      },
      {
        "name": "Cursor AI & Copilot",
        "iconName": "Cpu",
        "color": "text-blue-500"
      },
      {
        "name": "Synthetic Test Data Gen",
        "iconName": "Activity",
        "color": "text-yellow-500"
      },
      {
        "name": "Postman Postbot AI",
        "iconName": "Layers",
        "color": "text-orange-500"
      },
      {
        "name": "Playwright AI Extensions",
        "iconName": "ShieldCheck",
        "color": "text-teal-500"
      },
      {
        "name": "GitHub Actions AI CI",
        "iconName": "GitBranch",
        "color": "text-red-500"
      }
    ],
    "toolsSection": {
      "title": "The AI Testing Toolkit",
      "description": "Master modern visual AI, self-healing frameworks, and LLM-assisted QA toolchains.",
      "tools": [
        {
          "name": "LLM Prompting for QA",
          "iconName": "Brain",
          "color": "text-cyan-500"
        },
        {
          "name": "Applitools Eyes (Visual AI)",
          "iconName": "Eye",
          "color": "text-purple-500"
        },
        {
          "name": "Healenium (Self-Healing)",
          "iconName": "Sparkles",
          "color": "text-emerald-500"
        },
        {
          "name": "Cursor AI & Copilot",
          "iconName": "Cpu",
          "color": "text-blue-500"
        },
        {
          "name": "Synthetic Test Data Gen",
          "iconName": "Activity",
          "color": "text-yellow-500"
        },
        {
          "name": "Postman Postbot AI",
          "iconName": "Layers",
          "color": "text-orange-500"
        },
        {
          "name": "Playwright AI Extensions",
          "iconName": "ShieldCheck",
          "color": "text-teal-500"
        },
        {
          "name": "GitHub Actions AI CI",
          "iconName": "GitBranch",
          "color": "text-red-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Generative AI in Software QA Strategy",
        "description": "Learn prompt engineering for QA, synthesize edge case test plans from PRDs, and generate synthetic localized test data.",
        "topics": [
          "How Generative AI and LLMs are transforming Quality Engineering",
          "Prompt engineering for QA: Generating comprehensive test plans from PRDs & User Stories",
          "Automated Black Box & Edge Case test scenario synthesis with LLMs",
          "Generating production-grade synthetic test datasets (PII-safe, localized data)",
          "AI-driven test automation script generation for Selenium, Playwright & Cypress",
          "Automated conversion of manual test steps into executable BDD feature files"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Self-Healing Locators & Visual AI Regression",
        "description": "Eliminate test flakiness with Healenium self-healing algorithms and perform automated visual validation using Applitools Eyes.",
        "topics": [
          "The flaky test problem: Why traditional XPath/CSS locators fail in agile releases",
          "Self-Healing test frameworks with Healenium and AI locator algorithms",
          "Visual AI testing with Applitools Eyes: Visual checkpoints, layout vs strict match levels",
          "Automated cross-device visual snapshot comparison and AI bug categorization",
          "AI-assisted API testing: Generating request payloads and assertions with Postbot",
          "Automated root cause analysis of test run failures using LLM log analyzers"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Autonomous QA Pipelines & Capstone Project",
        "description": "Build autonomous QA agents, integrate AI testing tools into CI/CD pipelines, and calculate enterprise testing ROI.",
        "topics": [
          "Building autonomous test generation agents using LangChain / LLM APIs",
          "AI-driven code coverage analysis and automated gap identification",
          "Integrating AI QA tools into GitHub Actions CI/CD pipelines",
          "Evaluating AI testing tool vendors, ROI calculations & enterprise security compliance",
          "Future of testing: Agentic QA workflows and automated exploratory testing",
          "Capstone: Building an AI-Augmented Autonomous Test Suite with Self-Healing & Visual AI"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day AI QA Curriculum",
      "description": "From LLM prompt engineering for testing to autonomous self-healing test pipelines.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Generative AI in Software QA Strategy",
          "description": "Learn prompt engineering for QA, synthesize edge case test plans from PRDs, and generate synthetic localized test data.",
          "topics": [
            "How Generative AI and LLMs are transforming Quality Engineering",
            "Prompt engineering for QA: Generating comprehensive test plans from PRDs & User Stories",
            "Automated Black Box & Edge Case test scenario synthesis with LLMs",
            "Generating production-grade synthetic test datasets (PII-safe, localized data)",
            "AI-driven test automation script generation for Selenium, Playwright & Cypress",
            "Automated conversion of manual test steps into executable BDD feature files"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Self-Healing Locators & Visual AI Regression",
          "description": "Eliminate test flakiness with Healenium self-healing algorithms and perform automated visual validation using Applitools Eyes.",
          "topics": [
            "The flaky test problem: Why traditional XPath/CSS locators fail in agile releases",
            "Self-Healing test frameworks with Healenium and AI locator algorithms",
            "Visual AI testing with Applitools Eyes: Visual checkpoints, layout vs strict match levels",
            "Automated cross-device visual snapshot comparison and AI bug categorization",
            "AI-assisted API testing: Generating request payloads and assertions with Postbot",
            "Automated root cause analysis of test run failures using LLM log analyzers"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Autonomous QA Pipelines & Capstone Project",
          "description": "Build autonomous QA agents, integrate AI testing tools into CI/CD pipelines, and calculate enterprise testing ROI.",
          "topics": [
            "Building autonomous test generation agents using LangChain / LLM APIs",
            "AI-driven code coverage analysis and automated gap identification",
            "Integrating AI QA tools into GitHub Actions CI/CD pipelines",
            "Evaluating AI testing tool vendors, ROI calculations & enterprise security compliance",
            "Future of testing: Agentic QA workflows and automated exploratory testing",
            "Capstone: Building an AI-Augmented Autonomous Test Suite with Self-Healing & Visual AI"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO · Software Testing & Training",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with over 5 years of deep expertise in Software Testing and the Model Training Industry. He has mentored hundreds of engineers into confident, job-ready QA professionals with a structured, placement-first pedagogy."
      },
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Future-Proof Your QA Career",
      "description": "Become an early adopter of AI-augmented test engineering and lead next-generation QA teams.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Future-Proof Your QA Career",
    "ctaDescription": "Become an early adopter of AI-augmented test engineering and lead next-generation QA teams."
  },
  {
    "slug": "ai-ml-development",
    "title": "AI & ML Development Program",
    "tagline": "Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with LLMs, and deploy AI applications.",
    "category": "Core",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with cutting-edge LLMs, and deploy scalable AI applications.",
    "metaTitle": "AI & ML Development Program | SkillPedia",
    "metaDescription": "Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with LLMs, and deploy AI applications.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#6366F1",
    "tags": [
      "Python",
      "TensorFlow",
      "PyTorch",
      "LLMs",
      "LangChain"
    ],
    "badge": {
      "iconName": "BrainCircuit",
      "text": "Premium Intelligence Program"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "AI & ML",
      "suffix": "Development",
      "gradient": "from-indigo-600 to-purple-500"
    },
    "heroDescription": "Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with cutting-edge LLMs, and deploy scalable AI applications.",
    "stats": [
      {
        "label": "Duration",
        "value": "12 Weeks",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Project-Based",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Python",
        "iconName": "Terminal",
        "color": "text-blue-500"
      },
      {
        "name": "TensorFlow",
        "iconName": "Cpu",
        "color": "text-orange-500"
      },
      {
        "name": "PyTorch",
        "iconName": "Cpu",
        "color": "text-red-500"
      },
      {
        "name": "Scikit-learn",
        "iconName": "LineChart",
        "color": "text-orange-400"
      },
      {
        "name": "Pandas & NumPy",
        "iconName": "Database",
        "color": "text-purple-500"
      },
      {
        "name": "Hugging Face",
        "iconName": "MessageSquareCode",
        "color": "text-yellow-500"
      },
      {
        "name": "LangChain",
        "iconName": "Globe",
        "color": "text-green-500"
      },
      {
        "name": "FastAPI",
        "iconName": "Server",
        "color": "text-teal-500"
      }
    ],
    "toolsSection": {
      "title": "The Modern Stack",
      "description": "Learn the tools that top tech companies are using today.",
      "tools": [
        {
          "name": "Python",
          "iconName": "Terminal",
          "color": "text-blue-500"
        },
        {
          "name": "TensorFlow",
          "iconName": "Cpu",
          "color": "text-orange-500"
        },
        {
          "name": "PyTorch",
          "iconName": "Cpu",
          "color": "text-red-500"
        },
        {
          "name": "Scikit-learn",
          "iconName": "LineChart",
          "color": "text-orange-400"
        },
        {
          "name": "Pandas & NumPy",
          "iconName": "Database",
          "color": "text-purple-500"
        },
        {
          "name": "Hugging Face",
          "iconName": "MessageSquareCode",
          "color": "text-yellow-500"
        },
        {
          "name": "LangChain",
          "iconName": "Globe",
          "color": "text-green-500"
        },
        {
          "name": "FastAPI",
          "iconName": "Server",
          "color": "text-teal-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Foundations & Machine Learning",
        "description": "Master Python programming and core machine learning algorithms to process and analyze data.",
        "topics": [
          "Python for Data Science (Advanced syntax, OOP)",
          "Applied Mathematics (Linear Algebra, Calculus, Stats)",
          "Data Manipulation & EDA (Pandas, NumPy, Matplotlib)",
          "Supervised Learning (Regression, Classification)",
          "Unsupervised Learning (Clustering, PCA)",
          "Project: Predictive Analytics Dashboard"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Deep Learning & Neural Networks",
        "description": "Build robust neural architectures to solve complex computer vision and NLP problems.",
        "topics": [
          "Neural Network Architecture & Backpropagation",
          "Computer Vision with CNNs",
          "Natural Language Processing (RNNs, Transformers)",
          "Deep Learning frameworks (TensorFlow, PyTorch)",
          "Model Evaluation, Tuning & Optimization",
          "Project: Image Classification & Sentiment Analysis"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Generative AI, LLMs & Career Prep",
        "description": "Work with cutting-edge Generative AI and prepare for top-tier industry roles.",
        "topics": [
          "Working with Large Language Models (OpenAI, Open Source)",
          "Building RAG Pipelines with LangChain",
          "Model Deployment & MLOps (FastAPI, Docker)",
          "Communication & Behavioral Interview coaching",
          "Mock Technical & System Design Interviews",
          "Resume Building & Portfolio creation",
          "Final Capstone Project"
        ]
      }
    ],
    "curriculumSection": {
      "title": "12-Week Curriculum",
      "description": "A comprehensive journey from basics to advanced intelligence models.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Foundations & Machine Learning",
          "description": "Master Python programming and core machine learning algorithms to process and analyze data.",
          "topics": [
            "Python for Data Science (Advanced syntax, OOP)",
            "Applied Mathematics (Linear Algebra, Calculus, Stats)",
            "Data Manipulation & EDA (Pandas, NumPy, Matplotlib)",
            "Supervised Learning (Regression, Classification)",
            "Unsupervised Learning (Clustering, PCA)",
            "Project: Predictive Analytics Dashboard"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Deep Learning & Neural Networks",
          "description": "Build robust neural architectures to solve complex computer vision and NLP problems.",
          "topics": [
            "Neural Network Architecture & Backpropagation",
            "Computer Vision with CNNs",
            "Natural Language Processing (RNNs, Transformers)",
            "Deep Learning frameworks (TensorFlow, PyTorch)",
            "Model Evaluation, Tuning & Optimization",
            "Project: Image Classification & Sentiment Analysis"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Generative AI, LLMs & Career Prep",
          "description": "Work with cutting-edge Generative AI and prepare for top-tier industry roles.",
          "topics": [
            "Working with Large Language Models (OpenAI, Open Source)",
            "Building RAG Pipelines with LangChain",
            "Model Deployment & MLOps (FastAPI, Docker)",
            "Communication & Behavioral Interview coaching",
            "Mock Technical & System Design Interviews",
            "Resume Building & Portfolio creation",
            "Final Capstone Project"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy — ensuring every student receives a truly top-tier learning experience. His hands-on expertise in large-scale distributed systems, production-grade code review, and agile product development shapes the backbone of SkillPedia's curriculum."
      },
      {
        "name": "Dharmendra",
        "role": "Founder · Vision & Execution",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Accelerate Your Career?",
      "description": "Join the next cohort of AI & ML Development. Seats are extremely limited to ensure 1-on-1 mentorship.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Accelerate Your Career?",
    "ctaDescription": "Join the next cohort of AI & ML Development. Seats are extremely limited to ensure 1-on-1 mentorship."
  },
  {
    "slug": "api-development",
    "title": "API Development Program",
    "tagline": "Master the craft of designing, building, securing, and documenting production-ready APIs using REST, GraphQL, OpenAPI specs, and modern token authentication.",
    "category": "Development",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master the craft of designing, building, securing, and documenting production-ready APIs using REST, GraphQL, OpenAPI specs, and modern token authentication.",
    "metaTitle": "API Development Program | SkillPedia",
    "metaDescription": "Master modern API architecture in 45 days. Design, build, secure, and document production-ready RESTful and GraphQL APIs using FastAPI, Node.js, OAuth2, and OpenAPI.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    "color": "#8B5CF6",
    "tags": [
      "RESTful APIs",
      "FastAPI",
      "GraphQL",
      "OAuth2 & JWT",
      "OpenAPI"
    ],
    "badge": {
      "iconName": "Zap",
      "text": "45-Day API Engineering Sprint"
    },
    "heroHeading": {
      "prefix": "Master Production",
      "highlight": "API Development",
      "suffix": "",
      "gradient": "from-indigo-500 to-blue-600"
    },
    "heroDescription": "Master the craft of designing, building, securing, and documenting production-ready APIs using REST, GraphQL, OpenAPI specs, and modern token authentication.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "API Design & Security",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "RESTful API Architecture",
        "iconName": "Globe",
        "color": "text-blue-500"
      },
      {
        "name": "FastAPI & Express.js",
        "iconName": "Server",
        "color": "text-teal-400"
      },
      {
        "name": "GraphQL & Apollo Server",
        "iconName": "Layers",
        "color": "text-pink-500"
      },
      {
        "name": "OAuth 2.0 & JWT Security",
        "iconName": "ShieldCheck",
        "color": "text-green-500"
      },
      {
        "name": "OpenAPI 3.0 & Swagger",
        "iconName": "FileText",
        "color": "text-emerald-500"
      },
      {
        "name": "Postman & Newman Testing",
        "iconName": "CheckCircle2",
        "color": "text-orange-500"
      }
    ],
    "toolsSection": {
      "title": "The API Architecture Stack",
      "description": "Master the protocols, security mechanisms, and documentation frameworks used globally.",
      "tools": [
        {
          "name": "RESTful API Architecture",
          "iconName": "Globe",
          "color": "text-blue-500"
        },
        {
          "name": "FastAPI & Express.js",
          "iconName": "Server",
          "color": "text-teal-400"
        },
        {
          "name": "GraphQL & Apollo Server",
          "iconName": "Layers",
          "color": "text-pink-500"
        },
        {
          "name": "OAuth 2.0 & JWT Security",
          "iconName": "ShieldCheck",
          "color": "text-green-500"
        },
        {
          "name": "OpenAPI 3.0 & Swagger",
          "iconName": "FileText",
          "color": "text-emerald-500"
        },
        {
          "name": "Postman & Newman Testing",
          "iconName": "CheckCircle2",
          "color": "text-orange-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "RESTful Principles, Resource Modeling & Schemas",
        "description": "Master REST architectural constraints, resource modeling, HTTP semantics, and strict schema validation.",
        "topics": [
          "REST Architectural Constraints & The Richardson Maturity Model (Levels 0-3)",
          "Resource URI Design, Naming Conventions, HTTP Methods & Idempotency",
          "HTTP Status Codes, Header Management, Content Negotiation & Compression",
          "Request/Response Validation with JSON Schema, Pydantic v2 & Zod",
          "Pagination Strategies: Offset/Limit vs Cursor-Based Deep Pagination",
          "Project: Production-Grade RESTful API Architecture Specification"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "API Implementation, Security & Authentication",
        "description": "Build high-throughput backend APIs with rock-solid security, token lifecycle management, and rate limiting.",
        "topics": [
          "High-Performance API Implementation using FastAPI (Python) & Express (Node.js)",
          "OAuth 2.0 Authorization Code Flow, JWT Claims & Refresh Token Rotation",
          "Rate Limiting, IP Throttling, CORS Policies & OWASP API Security Top 10",
          "Database Persistence with PostgreSQL, Connection Pools & ORM Query Optimization",
          "Error Handling Standards: RFC 7807 Problem Details for HTTP APIs",
          "Project: Secure Multi-Tenant Authentication & Identity Provider API"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "GraphQL, Webhooks, Documentation & CI Automation",
        "description": "Implement GraphQL endpoints, reliable webhook notification systems, interactive documentation, and automated tests.",
        "topics": [
          "GraphQL Schemas, Type Definitions, Resolvers, Mutations & N+1 Query Problem",
          "Interactive Documentation: Auto-Generating OpenAPI 3.0 Specs & Swagger UI",
          "Designing Reliable Webhook Infrastructure: Idempotency Keys, Signatures & Retries",
          "Automated API Contract Testing with Postman Collections & Newman CI/CD",
          "API Versioning Strategies (URI, Header, Query Param) & Deprecation Lifecycle",
          "Capstone Project: Unified REST & GraphQL API Gateway with Automated CI Pipeline"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Syllabus",
      "description": "From REST constraints to GraphQL resolvers, OpenAPI specs, and automated CI pipelines.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "RESTful Principles, Resource Modeling & Schemas",
          "description": "Master REST architectural constraints, resource modeling, HTTP semantics, and strict schema validation.",
          "topics": [
            "REST Architectural Constraints & The Richardson Maturity Model (Levels 0-3)",
            "Resource URI Design, Naming Conventions, HTTP Methods & Idempotency",
            "HTTP Status Codes, Header Management, Content Negotiation & Compression",
            "Request/Response Validation with JSON Schema, Pydantic v2 & Zod",
            "Pagination Strategies: Offset/Limit vs Cursor-Based Deep Pagination",
            "Project: Production-Grade RESTful API Architecture Specification"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "API Implementation, Security & Authentication",
          "description": "Build high-throughput backend APIs with rock-solid security, token lifecycle management, and rate limiting.",
          "topics": [
            "High-Performance API Implementation using FastAPI (Python) & Express (Node.js)",
            "OAuth 2.0 Authorization Code Flow, JWT Claims & Refresh Token Rotation",
            "Rate Limiting, IP Throttling, CORS Policies & OWASP API Security Top 10",
            "Database Persistence with PostgreSQL, Connection Pools & ORM Query Optimization",
            "Error Handling Standards: RFC 7807 Problem Details for HTTP APIs",
            "Project: Secure Multi-Tenant Authentication & Identity Provider API"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "GraphQL, Webhooks, Documentation & CI Automation",
          "description": "Implement GraphQL endpoints, reliable webhook notification systems, interactive documentation, and automated tests.",
          "topics": [
            "GraphQL Schemas, Type Definitions, Resolvers, Mutations & N+1 Query Problem",
            "Interactive Documentation: Auto-Generating OpenAPI 3.0 Specs & Swagger UI",
            "Designing Reliable Webhook Infrastructure: Idempotency Keys, Signatures & Retries",
            "Automated API Contract Testing with Postman Collections & Newman CI/CD",
            "API Versioning Strategies (URI, Header, Query Param) & Deprecation Lifecycle",
            "Capstone Project: Unified REST & GraphQL API Gateway with Automated CI Pipeline"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building enterprise API gateways and backend architectures for a Malaysia-based company. He teaches students how to design, secure, and scale APIs that handle millions of requests reliably."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. His expertise in designing schema-first RESTful interfaces, OpenAPI documentation, and GraphQL microservices ensures students master modern industry standards."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Build Secure, Enterprise-Grade APIs",
      "description": "Join the 45-Day API Development program. Master REST, GraphQL, OAuth2 security, and automated API testing.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Build Secure, Enterprise-Grade APIs",
    "ctaDescription": "Join the 45-Day API Development program. Master REST, GraphQL, OAuth2 security, and automated API testing."
  },
  {
    "slug": "api-testing-postman-rest-assured",
    "title": "API Testing with Postman & Rest Assured",
    "tagline": "Learn automated API testing from no-code Postman workflows to full-scale programmatic test automation using Rest Assured in Java with JSON schema assertions.",
    "category": "Testing",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master modern API testing from exploratory Postman workflows to enterprise code-based automation using Rest Assured Java, OAuth 2.0 authentication, JSON schema validation, and CI/CD.",
    "metaTitle": "API Testing with Postman & Rest Assured | SkillPedia",
    "metaDescription": "Master automated API testing in 45 days. Learn Postman collections, Rest Assured Java, OAuth2, JSON Schema validation, and CI/CD test automation.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "color": "#F59E0B",
    "tags": [
      "Postman Collections",
      "Rest Assured Java",
      "JSON Schema",
      "Newman",
      "OAuth 2.0"
    ],
    "badge": {
      "iconName": "Network",
      "text": "45-Day API Automation Program"
    },
    "heroHeading": {
      "prefix": "API Testing with",
      "highlight": "Postman & Rest Assured",
      "suffix": "",
      "gradient": "from-amber-500 to-orange-400"
    },
    "heroDescription": "Master modern API testing from exploratory Postman workflows to enterprise code-based automation using Rest Assured Java, OAuth 2.0 authentication, JSON schema validation, and CI/CD.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Hands-on Coding",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "REST API Framework",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Postman Collections",
        "iconName": "Activity",
        "color": "text-orange-500"
      },
      {
        "name": "Rest Assured Java",
        "iconName": "Server",
        "color": "text-red-500"
      },
      {
        "name": "Newman CLI",
        "iconName": "Terminal",
        "color": "text-amber-500"
      },
      {
        "name": "JSON Schema Validator",
        "iconName": "ShieldCheck",
        "color": "text-green-500"
      },
      {
        "name": "Jackson / POJO Models",
        "iconName": "FileCode",
        "color": "text-blue-500"
      },
      {
        "name": "OAuth 2.0 & JWT",
        "iconName": "Lock",
        "color": "text-purple-500"
      },
      {
        "name": "TestNG & Maven",
        "iconName": "Layers",
        "color": "text-teal-500"
      },
      {
        "name": "WireMock (Stubs)",
        "iconName": "Network",
        "color": "text-cyan-500"
      }
    ],
    "toolsSection": {
      "title": "The API Testing Toolkit",
      "description": "Master the primary tools for validating RESTful endpoints and microservice architectures.",
      "tools": [
        {
          "name": "Postman Collections",
          "iconName": "Activity",
          "color": "text-orange-500"
        },
        {
          "name": "Rest Assured Java",
          "iconName": "Server",
          "color": "text-red-500"
        },
        {
          "name": "Newman CLI",
          "iconName": "Terminal",
          "color": "text-amber-500"
        },
        {
          "name": "JSON Schema Validator",
          "iconName": "ShieldCheck",
          "color": "text-green-500"
        },
        {
          "name": "Jackson / POJO Models",
          "iconName": "FileCode",
          "color": "text-blue-500"
        },
        {
          "name": "OAuth 2.0 & JWT",
          "iconName": "Lock",
          "color": "text-purple-500"
        },
        {
          "name": "TestNG & Maven",
          "iconName": "Layers",
          "color": "text-teal-500"
        },
        {
          "name": "WireMock (Stubs)",
          "iconName": "Network",
          "color": "text-cyan-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "REST API Fundamentals & Postman Mastery",
        "description": "Understand REST architecture, HTTP methods/headers/status codes, write JavaScript test assertions, and automate with Newman.",
        "topics": [
          "Client-Server architecture, HTTP methods (GET, POST, PUT, PATCH, DELETE) & Headers",
          "HTTP status codes breakdown (2xx, 3xx, 4xx, 5xx) & Payload formats (JSON, XML, Form)",
          "Postman environment, collection & global variables configuration",
          "Authoring Postman test scripts in JavaScript with pm.* test library",
          "Collection Runner, Data-Driven testing with CSV/JSON feeds & Workflows",
          "Newman CLI runner for headless execution & HTML reporting"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Programmatic Testing with Rest Assured in Java",
        "description": "Write clean, readable API tests using Given-When-Then BDD syntax, validate nested JSON schemas, and deserialize POJOs.",
        "topics": [
          "Rest Assured setup: Maven dependencies, Given-When-Then BDD DSL syntax",
          "RequestSpecification and ResponseSpecification builders for reusability",
          "Validating JSON response body, nested JSON structures & JsonPath query expressions",
          "POJO classes creation, Serialization & Deserialization with Jackson",
          "Authentication mechanisms: Basic Auth, Bearer Token, API Keys & OAuth 2.0 flows",
          "Handling complex payloads, multi-part form data & file uploads"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Schema Validation, Mocking & CI/CD Framework",
        "description": "Validate JSON/XML schemas against specs, stub external microservices with WireMock, and trigger CI test runs.",
        "topics": [
          "JSON Schema and XML Schema validation against live API responses",
          "API Mocking and stubbing using WireMock & Postman Mock Servers",
          "Building a Modular Rest Assured Automation Framework with TestNG",
          "Integrating Allure reporting and automated request/response logging",
          "Continuous API testing pipeline execution in Jenkins / GitHub Actions",
          "Capstone: End-to-end Automated Test Suite for a Banking & Payment Gateway API"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum Blueprint",
      "description": "From manual API exploratory testing with Postman to code-first Rest Assured BDD frameworks.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "REST API Fundamentals & Postman Mastery",
          "description": "Understand REST architecture, HTTP methods/headers/status codes, write JavaScript test assertions, and automate with Newman.",
          "topics": [
            "Client-Server architecture, HTTP methods (GET, POST, PUT, PATCH, DELETE) & Headers",
            "HTTP status codes breakdown (2xx, 3xx, 4xx, 5xx) & Payload formats (JSON, XML, Form)",
            "Postman environment, collection & global variables configuration",
            "Authoring Postman test scripts in JavaScript with pm.* test library",
            "Collection Runner, Data-Driven testing with CSV/JSON feeds & Workflows",
            "Newman CLI runner for headless execution & HTML reporting"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Programmatic Testing with Rest Assured in Java",
          "description": "Write clean, readable API tests using Given-When-Then BDD syntax, validate nested JSON schemas, and deserialize POJOs.",
          "topics": [
            "Rest Assured setup: Maven dependencies, Given-When-Then BDD DSL syntax",
            "RequestSpecification and ResponseSpecification builders for reusability",
            "Validating JSON response body, nested JSON structures & JsonPath query expressions",
            "POJO classes creation, Serialization & Deserialization with Jackson",
            "Authentication mechanisms: Basic Auth, Bearer Token, API Keys & OAuth 2.0 flows",
            "Handling complex payloads, multi-part form data & file uploads"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Schema Validation, Mocking & CI/CD Framework",
          "description": "Validate JSON/XML schemas against specs, stub external microservices with WireMock, and trigger CI test runs.",
          "topics": [
            "JSON Schema and XML Schema validation against live API responses",
            "API Mocking and stubbing using WireMock & Postman Mock Servers",
            "Building a Modular Rest Assured Automation Framework with TestNG",
            "Integrating Allure reporting and automated request/response logging",
            "Continuous API testing pipeline execution in Jenkins / GitHub Actions",
            "Capstone: End-to-end Automated Test Suite for a Banking & Payment Gateway API"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      },
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master API Automation Today",
      "description": "Become an indispensable SDET by mastering the backend communication layer of modern applications.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master API Automation Today",
    "ctaDescription": "Become an indispensable SDET by mastering the backend communication layer of modern applications."
  },
  {
    "slug": "automation-testing-selenium",
    "title": "Automation Testing with Selenium",
    "tagline": "Transform from manual tester to automation engineer. Master Selenium WebDriver, complex XPath/CSS locators, Page Object Model (POM) architecture, and TestNG test runners.",
    "category": "Testing",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Transform from a manual tester to a high-demand automation engineer. Master Selenium WebDriver 4, dynamic XPath/CSS locators, Page Object Model (POM), TestNG, and CI/CD pipelines.",
    "metaTitle": "Automation Testing with Selenium | SkillPedia",
    "metaDescription": "Master Selenium WebDriver 4 automation in 45 days. Learn Page Object Model (POM), TestNG, dynamic locators, Maven, and CI/CD automated test pipelines.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "color": "#10B981",
    "tags": [
      "Selenium WebDriver",
      "Page Object Model",
      "TestNG",
      "Locators",
      "CI/CD"
    ],
    "badge": {
      "iconName": "Bot",
      "text": "45-Day Test Automation Accelerator"
    },
    "heroHeading": {
      "prefix": "Automation Testing",
      "highlight": "with Selenium",
      "suffix": "",
      "gradient": "from-emerald-500 to-teal-400"
    },
    "heroDescription": "Transform from a manual tester to a high-demand automation engineer. Master Selenium WebDriver 4, dynamic XPath/CSS locators, Page Object Model (POM), TestNG, and CI/CD pipelines.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Code-Along",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Enterprise POM",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Code Review",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Selenium WebDriver 4",
        "iconName": "MonitorPlay",
        "color": "text-emerald-500"
      },
      {
        "name": "TestNG Framework",
        "iconName": "Cpu",
        "color": "text-teal-500"
      },
      {
        "name": "Maven Build Tool",
        "iconName": "Layers",
        "color": "text-red-500"
      },
      {
        "name": "ExtentReports",
        "iconName": "Activity",
        "color": "text-blue-500"
      },
      {
        "name": "Apache POI (Data)",
        "iconName": "FileCode",
        "color": "text-green-500"
      },
      {
        "name": "Jenkins CI/CD",
        "iconName": "Server",
        "color": "text-indigo-500"
      },
      {
        "name": "Git & GitHub",
        "iconName": "GitBranch",
        "color": "text-orange-500"
      },
      {
        "name": "Selenium Grid",
        "iconName": "ShieldCheck",
        "color": "text-cyan-500"
      }
    ],
    "toolsSection": {
      "title": "The Selenium Automation Stack",
      "description": "Master the industry-standard libraries and tools powering enterprise browser automation.",
      "tools": [
        {
          "name": "Selenium WebDriver 4",
          "iconName": "MonitorPlay",
          "color": "text-emerald-500"
        },
        {
          "name": "TestNG Framework",
          "iconName": "Cpu",
          "color": "text-teal-500"
        },
        {
          "name": "Maven Build Tool",
          "iconName": "Layers",
          "color": "text-red-500"
        },
        {
          "name": "ExtentReports",
          "iconName": "Activity",
          "color": "text-blue-500"
        },
        {
          "name": "Apache POI (Data)",
          "iconName": "FileCode",
          "color": "text-green-500"
        },
        {
          "name": "Jenkins CI/CD",
          "iconName": "Server",
          "color": "text-indigo-500"
        },
        {
          "name": "Git & GitHub",
          "iconName": "GitBranch",
          "color": "text-orange-500"
        },
        {
          "name": "Selenium Grid",
          "iconName": "ShieldCheck",
          "color": "text-cyan-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "WebDriver Architecture & Dynamic Locators",
        "description": "Master the W3C Selenium 4 architecture, dynamic XPath expressions, CSS selectors, and resilient synchronization.",
        "topics": [
          "Selenium 4 W3C WebDriver architecture & browser driver configuration",
          "Advanced XPath strategies: axes, following-sibling, ancestor & text matching",
          "CSS Selectors mastery & Shadow DOM / Iframe traversal",
          "Synchronization strategies: Implicit, Explicit & Fluent Waits",
          "Handling complex UI widgets: Dropdowns, Alerts, Popups & Windows",
          "Actions Class: Drag-and-Drop, Mouse Hover, Keyboard Chaining & JS Executor"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "TestNG Framework & Data-Driven Automation",
        "description": "Structure test suites with TestNG annotations, assertions, parallel execution, and Excel-driven test parameters.",
        "topics": [
          "TestNG core annotations, priority, grouping & dependency configuration",
          "Assertions (Hard vs Soft), Listeners & Parallel test execution",
          "Data-Driven testing with @DataProvider and Apache POI Excel parsing",
          "Page Object Model (POM) design pattern with PageFactory",
          "Clean test structure, Base test classes & Config property loaders",
          "Automated Screenshot capture on test failure & ExtentReports logging"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Enterprise Framework Integration & CI/CD",
        "description": "Package the automated framework with Maven, run cross-browser distributed grids, and integrate into Jenkins CI/CD.",
        "topics": [
          "Maven build lifecycle, pom.xml dependencies & Surefire plugin",
          "Cross-browser grid execution (Chrome, Firefox, Edge, Safari)",
          "Headless browser testing for fast CI pipelines",
          "Jenkins integration: Freestyle jobs, Parameterized builds & email notifications",
          "Git branching workflows & pull request automated test validation",
          "Capstone Project: Enterprise E-Commerce Automated Regression Framework"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum Blueprint",
      "description": "A fast-paced, hands-on path from basic browser automation to a production-ready CI/CD test framework.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "WebDriver Architecture & Dynamic Locators",
          "description": "Master the W3C Selenium 4 architecture, dynamic XPath expressions, CSS selectors, and resilient synchronization.",
          "topics": [
            "Selenium 4 W3C WebDriver architecture & browser driver configuration",
            "Advanced XPath strategies: axes, following-sibling, ancestor & text matching",
            "CSS Selectors mastery & Shadow DOM / Iframe traversal",
            "Synchronization strategies: Implicit, Explicit & Fluent Waits",
            "Handling complex UI widgets: Dropdowns, Alerts, Popups & Windows",
            "Actions Class: Drag-and-Drop, Mouse Hover, Keyboard Chaining & JS Executor"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "TestNG Framework & Data-Driven Automation",
          "description": "Structure test suites with TestNG annotations, assertions, parallel execution, and Excel-driven test parameters.",
          "topics": [
            "TestNG core annotations, priority, grouping & dependency configuration",
            "Assertions (Hard vs Soft), Listeners & Parallel test execution",
            "Data-Driven testing with @DataProvider and Apache POI Excel parsing",
            "Page Object Model (POM) design pattern with PageFactory",
            "Clean test structure, Base test classes & Config property loaders",
            "Automated Screenshot capture on test failure & ExtentReports logging"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Enterprise Framework Integration & CI/CD",
          "description": "Package the automated framework with Maven, run cross-browser distributed grids, and integrate into Jenkins CI/CD.",
          "topics": [
            "Maven build lifecycle, pom.xml dependencies & Surefire plugin",
            "Cross-browser grid execution (Chrome, Firefox, Edge, Safari)",
            "Headless browser testing for fast CI pipelines",
            "Jenkins integration: Freestyle jobs, Parameterized builds & email notifications",
            "Git branching workflows & pull request automated test validation",
            "Capstone Project: Enterprise E-Commerce Automated Regression Framework"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      },
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO · Software Testing & Training",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with over 5 years of deep expertise in Software Testing and the Model Training Industry. He has mentored hundreds of engineers into confident, job-ready QA professionals with a structured, placement-first pedagogy."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master Selenium Automation Today",
      "description": "Gain the competitive edge with production-grade Selenium framework architecture skills.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master Selenium Automation Today",
    "ctaDescription": "Gain the competitive edge with production-grade Selenium framework architecture skills."
  },
  {
    "slug": "backend-development",
    "title": "Backend Development Program",
    "tagline": "Architect and deploy robust, high-throughput backend services. Master database indexing, distributed caching with Redis, message queues, and microservice patterns.",
    "category": "Development",
    "level": "Intermediate to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Architect and deploy robust, high-throughput backend services. Master database indexing, distributed caching with Redis, message queues, and microservice system design.",
    "metaTitle": "Backend Development Program | SkillPedia",
    "metaDescription": "Master backend architecture and system design in 3 months. Build scalable microservices, database optimizations, Redis caching, and distributed systems.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "color": "#6366F1",
    "tags": [
      "System Design",
      "Microservices",
      "Redis",
      "DB Optimization",
      "Docker"
    ],
    "badge": {
      "iconName": "Server",
      "text": "3-Month Backend Architecture Track"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Scalable Backend",
      "suffix": "Engineering",
      "gradient": "from-indigo-600 to-blue-500"
    },
    "heroDescription": "Architect and deploy robust, high-throughput backend services. Master database indexing, distributed caching with Redis, message queues, and microservice system design.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "System Design",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Node.js & Go Runtime",
        "iconName": "Server",
        "color": "text-green-500"
      },
      {
        "name": "PostgreSQL & MySQL Tuning",
        "iconName": "Database",
        "color": "text-blue-500"
      },
      {
        "name": "Redis Distributed Cache",
        "iconName": "Zap",
        "color": "text-red-500"
      },
      {
        "name": "RabbitMQ & Kafka Queues",
        "iconName": "Cpu",
        "color": "text-orange-500"
      },
      {
        "name": "Docker & Microservices",
        "iconName": "Layers",
        "color": "text-cyan-500"
      },
      {
        "name": "High-Level System Design",
        "iconName": "Code2",
        "color": "text-purple-400"
      },
      {
        "name": "gRPC & REST Protocols",
        "iconName": "Globe",
        "color": "text-blue-400"
      },
      {
        "name": "Prometheus & Observability",
        "iconName": "Activity",
        "color": "text-yellow-500"
      }
    ],
    "toolsSection": {
      "title": "Backend Architecture Stack",
      "description": "Master the distributed systems infrastructure trusted by modern tech enterprises.",
      "tools": [
        {
          "name": "Node.js & Go Runtime",
          "iconName": "Server",
          "color": "text-green-500"
        },
        {
          "name": "PostgreSQL & MySQL Tuning",
          "iconName": "Database",
          "color": "text-blue-500"
        },
        {
          "name": "Redis Distributed Cache",
          "iconName": "Zap",
          "color": "text-red-500"
        },
        {
          "name": "RabbitMQ & Kafka Queues",
          "iconName": "Cpu",
          "color": "text-orange-500"
        },
        {
          "name": "Docker & Microservices",
          "iconName": "Layers",
          "color": "text-cyan-500"
        },
        {
          "name": "High-Level System Design",
          "iconName": "Code2",
          "color": "text-purple-400"
        },
        {
          "name": "gRPC & REST Protocols",
          "iconName": "Globe",
          "color": "text-blue-400"
        },
        {
          "name": "Prometheus & Observability",
          "iconName": "Activity",
          "color": "text-yellow-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Advanced Database Architecture & Query Optimization",
        "description": "Design relational and distributed database schemas for maximum throughput, low latency, and zero downtime.",
        "topics": [
          "Relational Database Internals: B-Tree Indexing, Execution Plans & Query Tuning",
          "ACID Transactions, Isolation Levels (Read Committed vs Serializable) & Locks",
          "NoSQL Data Modeling with MongoDB & DynamoDB for Distributed Reads",
          "Database Replication, Connection Pooling & Sharding Partitioning Strategies",
          "Zero-Downtime Database Migration Pipelines & Version Control",
          "Project: High-Throughput Financial Ledger & Transaction Engine"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "High-Performance APIs, Caching & Message Queues",
        "description": "Build ultra low-latency APIs with in-memory caching layers and event-driven distributed architectures.",
        "topics": [
          "REST vs gRPC Protocols: Protocol Buffers, Binary Serialization & HTTP/2",
          "Redis Distributed Caching Strategies (Cache-Aside, Write-Through, TTLs & Eviction)",
          "API Rate Limiting Algorithms (Token Bucket, Leaky Bucket, Sliding Window)",
          "Event-Driven Architecture with RabbitMQ & Apache Kafka Event Streams",
          "Background Job Processing, Dead-Letter Queues & Worker Node Scaling",
          "Project: Event-Driven Order Processing & Notification Engine"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Microservices, Distributed System Design & DevOps",
        "description": "Architect resilient distributed systems, implement observability, and ace system design technical interviews.",
        "topics": [
          "Microservice Design Patterns: Saga Pattern, CQRS, API Gateway & Circuit Breakers",
          "Docker Containerization, Multi-Stage Builds & Kubernetes Pod Orchestration",
          "Distributed Tracing, Structured Logging, Prometheus Metrics & Grafana Dashboards",
          "High-Level System Design (URL Shortener, Uber Matching Engine, Twitter Feed)",
          "Mock Backend Technical Coding & System Design Whiteboarding Rounds",
          "Capstone Project: Distributed Cloud-Native E-Commerce Microservices Platform"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month Comprehensive Curriculum",
      "description": "From deep database internals to distributed cloud microservices and system design.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Advanced Database Architecture & Query Optimization",
          "description": "Design relational and distributed database schemas for maximum throughput, low latency, and zero downtime.",
          "topics": [
            "Relational Database Internals: B-Tree Indexing, Execution Plans & Query Tuning",
            "ACID Transactions, Isolation Levels (Read Committed vs Serializable) & Locks",
            "NoSQL Data Modeling with MongoDB & DynamoDB for Distributed Reads",
            "Database Replication, Connection Pooling & Sharding Partitioning Strategies",
            "Zero-Downtime Database Migration Pipelines & Version Control",
            "Project: High-Throughput Financial Ledger & Transaction Engine"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "High-Performance APIs, Caching & Message Queues",
          "description": "Build ultra low-latency APIs with in-memory caching layers and event-driven distributed architectures.",
          "topics": [
            "REST vs gRPC Protocols: Protocol Buffers, Binary Serialization & HTTP/2",
            "Redis Distributed Caching Strategies (Cache-Aside, Write-Through, TTLs & Eviction)",
            "API Rate Limiting Algorithms (Token Bucket, Leaky Bucket, Sliding Window)",
            "Event-Driven Architecture with RabbitMQ & Apache Kafka Event Streams",
            "Background Job Processing, Dead-Letter Queues & Worker Node Scaling",
            "Project: Event-Driven Order Processing & Notification Engine"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Microservices, Distributed System Design & DevOps",
          "description": "Architect resilient distributed systems, implement observability, and ace system design technical interviews.",
          "topics": [
            "Microservice Design Patterns: Saga Pattern, CQRS, API Gateway & Circuit Breakers",
            "Docker Containerization, Multi-Stage Builds & Kubernetes Pod Orchestration",
            "Distributed Tracing, Structured Logging, Prometheus Metrics & Grafana Dashboards",
            "High-Level System Design (URL Shortener, Uber Matching Engine, Twitter Feed)",
            "Mock Backend Technical Coding & System Design Whiteboarding Rounds",
            "Capstone Project: Distributed Cloud-Native E-Commerce Microservices Platform"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise in distributed architectures, microservices, database optimizations, and cloud deployments forms the backbone of this comprehensive backend track."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He mentors backend students on distributed system design, high-concurrency microservices, and technical interview problem solving."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Architect Scalable Systems?",
      "description": "Join the 3-Month Backend Development program. Learn database tuning, Redis caching, microservices, and ace system design interviews.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Architect Scalable Systems?",
    "ctaDescription": "Join the 3-Month Backend Development program. Learn database tuning, Redis caching, microservices, and ace system design interviews."
  },
  {
    "slug": "basic-english-communication",
    "title": "Basic English Communication Program",
    "tagline": "Build essential English language skills from the ground up. Learn daily conversational vocabulary, clear sentence structure, correct pronunciation, and eliminate hesitation.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Build unshakeable confidence in everyday English. Master correct pronunciation, daily vocabulary, sentence framing, and eliminate the fear of speaking in just 45 days.",
    "metaTitle": "Basic English Communication Program | SkillPedia",
    "metaDescription": "Master foundational English communication in 45 days. Build essential conversational vocabulary, correct pronunciation, sentence construction, and speak with zero hesitation.",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#F43F5E",
    "tags": [
      "Everyday Vocabulary",
      "Sentence Construction",
      "Pronunciation",
      "Listening"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Foundational English Speaking"
    },
    "heroHeading": {
      "prefix": "Basic English",
      "highlight": "Communication",
      "suffix": "",
      "gradient": "from-rose-500 to-orange-400"
    },
    "heroDescription": "Build unshakeable confidence in everyday English. Master correct pronunciation, daily vocabulary, sentence framing, and eliminate the fear of speaking in just 45 days.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Practice",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Confidence & Fluency",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Feedback",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Everyday Vocabulary",
        "iconName": "BookOpen",
        "color": "text-rose-500"
      },
      {
        "name": "Phonetics & Pronunciation",
        "iconName": "Mic",
        "color": "text-amber-500"
      },
      {
        "name": "Sentence Construction",
        "iconName": "FileText",
        "color": "text-purple-500"
      },
      {
        "name": "Active Listening Drills",
        "iconName": "Headphones",
        "color": "text-cyan-500"
      },
      {
        "name": "Real-Life Role Playing",
        "iconName": "Users",
        "color": "text-emerald-500"
      },
      {
        "name": "Daily Conversation Flow",
        "iconName": "MessageSquare",
        "color": "text-orange-500"
      }
    ],
    "toolsSection": {
      "title": "The Communication Toolkit",
      "description": "Core pillars designed to transform hesitant learners into clear and articulate speakers.",
      "tools": [
        {
          "name": "Everyday Vocabulary",
          "iconName": "BookOpen",
          "color": "text-rose-500"
        },
        {
          "name": "Phonetics & Pronunciation",
          "iconName": "Mic",
          "color": "text-amber-500"
        },
        {
          "name": "Sentence Construction",
          "iconName": "FileText",
          "color": "text-purple-500"
        },
        {
          "name": "Active Listening Drills",
          "iconName": "Headphones",
          "color": "text-cyan-500"
        },
        {
          "name": "Real-Life Role Playing",
          "iconName": "Users",
          "color": "text-emerald-500"
        },
        {
          "name": "Daily Conversation Flow",
          "iconName": "MessageSquare",
          "color": "text-orange-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Sound, Phonetics & Core Vocabulary",
        "description": "Build a rock-solid foundation by mastering pronunciation, reducing hesitation, and expanding everyday vocabulary.",
        "topics": [
          "Vowel & Consonant Sounds Mastery",
          "Overcoming Shyness & Mental Translation",
          "500+ Essential Daily Conversational Words",
          "Greetings, Formal vs Informal Introductions",
          "Numbers, Time, Directions & Shopping Phrases",
          "Project: 60-Second Self-Introduction Audio"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Sentence Construction & Daily Dialogue",
        "description": "Learn how to frame correct English sentences effortlessly without freezing or getting stuck.",
        "topics": [
          "Simple Sentence Structures (SVO Framework)",
          "Asking & Answering Everyday Questions (WH-Questions)",
          "Daily Routine & Lifestyle Conversations",
          "Describing Objects, People, and Surroundings",
          "Active Listening Drills & Conversational Reactivity",
          "Project: Live 1-on-1 Dialogue Simulation"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Fluency Drills, Confidence & Real-World Interaction",
        "description": "Apply your speaking skills in real-world scenarios with live feedback and guided role-plays.",
        "topics": [
          "Role-Playing Situations (Restaurant, Bank, Travel)",
          "Expressing Likes, Dislikes, and Basic Opinions",
          "Picture Description & Story Recounting Drills",
          "Overcoming Mother Tongue Influence (MTI) Basics",
          "Personalized 1-on-1 Speaking Evaluation",
          "Final Capstone: 3-Minute Live Showcase Speech"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum",
      "description": "Structured in 3 intensive phases to guarantee measurable speaking improvements.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Sound, Phonetics & Core Vocabulary",
          "description": "Build a rock-solid foundation by mastering pronunciation, reducing hesitation, and expanding everyday vocabulary.",
          "topics": [
            "Vowel & Consonant Sounds Mastery",
            "Overcoming Shyness & Mental Translation",
            "500+ Essential Daily Conversational Words",
            "Greetings, Formal vs Informal Introductions",
            "Numbers, Time, Directions & Shopping Phrases",
            "Project: 60-Second Self-Introduction Audio"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Sentence Construction & Daily Dialogue",
          "description": "Learn how to frame correct English sentences effortlessly without freezing or getting stuck.",
          "topics": [
            "Simple Sentence Structures (SVO Framework)",
            "Asking & Answering Everyday Questions (WH-Questions)",
            "Daily Routine & Lifestyle Conversations",
            "Describing Objects, People, and Surroundings",
            "Active Listening Drills & Conversational Reactivity",
            "Project: Live 1-on-1 Dialogue Simulation"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Fluency Drills, Confidence & Real-World Interaction",
          "description": "Apply your speaking skills in real-world scenarios with live feedback and guided role-plays.",
          "topics": [
            "Role-Playing Situations (Restaurant, Bank, Travel)",
            "Expressing Likes, Dislikes, and Basic Opinions",
            "Picture Description & Story Recounting Drills",
            "Overcoming Mother Tongue Influence (MTI) Basics",
            "Personalized 1-on-1 Speaking Evaluation",
            "Final Capstone: 3-Minute Live Showcase Speech"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      },
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Start Speaking English with Confidence",
      "description": "Overcome hesitation, master everyday vocabulary, and unlock new career opportunities with our 45-day foundational program.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Start Speaking English with Confidence",
    "ctaDescription": "Overcome hesitation, master everyday vocabulary, and unlock new career opportunities with our 45-day foundational program."
  },
  {
    "slug": "career-acceleration",
    "title": "Career Acceleration",
    "tagline": "Supercharge your career readiness with technical interview practice, corporate communication mastery, resume optimization, and executive presence.",
    "category": "Core",
    "level": "All Levels",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Transform your communication skills, build an undeniable professional brand, and master the interview process to land your dream job in tech.",
    "metaTitle": "Career Acceleration | SkillPedia",
    "metaDescription": "Transform your communication skills, build an undeniable professional brand, and master the interview process to land your dream job.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#F43F5E",
    "tags": [
      "Interview Prep",
      "Soft Skills",
      "Resume Building",
      "Public Speaking",
      "Negotiation"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Placement & Soft Skills Program"
    },
    "heroHeading": {
      "prefix": "Career",
      "highlight": "Acceleration",
      "suffix": "",
      "gradient": "from-rose-500 to-orange-400"
    },
    "heroDescription": "Transform your communication skills, build an undeniable professional brand, and master the interview process to land your dream job in tech.",
    "stats": [
      {
        "label": "Duration",
        "value": "12 Weeks",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Coaching",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Placement Ready",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Resume & CV Crafting",
        "iconName": "FileText",
        "color": "text-rose-500"
      },
      {
        "name": "LinkedIn Optimization",
        "iconName": "Network",
        "color": "text-blue-600"
      },
      {
        "name": "Portfolio & GitHub",
        "iconName": "GitBranch",
        "color": "text-orange-500"
      },
      {
        "name": "Agile & Scrum Flow",
        "iconName": "RefreshCw",
        "color": "text-teal-500"
      },
      {
        "name": "Corporate Email Etiquette",
        "iconName": "Mail",
        "color": "text-indigo-500"
      },
      {
        "name": "Presentation Skills",
        "iconName": "Mic",
        "color": "text-yellow-500"
      }
    ],
    "toolsSection": {
      "title": "The Professional Toolkit",
      "description": "Master the soft skills and platforms necessary to stand out in the corporate world.",
      "tools": [
        {
          "name": "Resume & CV Crafting",
          "iconName": "FileText",
          "color": "text-rose-500"
        },
        {
          "name": "LinkedIn Optimization",
          "iconName": "Network",
          "color": "text-blue-600"
        },
        {
          "name": "Portfolio & GitHub",
          "iconName": "GitBranch",
          "color": "text-orange-500"
        },
        {
          "name": "Agile & Scrum Flow",
          "iconName": "RefreshCw",
          "color": "text-teal-500"
        },
        {
          "name": "Corporate Email Etiquette",
          "iconName": "Mail",
          "color": "text-indigo-500"
        },
        {
          "name": "Presentation Skills",
          "iconName": "Mic",
          "color": "text-yellow-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Foundational Communication",
        "description": "Build unshakeable confidence in your verbal and written communication.",
        "topics": [
          "Overcoming Public Speaking Anxiety",
          "Corporate Etiquette & Active Listening",
          "Body Language & Non-Verbal Cues",
          "Articulating Complex Thoughts Clearly",
          "Mastering Business English & Grammar",
          "Project: Live Group Presentations"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Professional Branding & Presence",
        "description": "Craft a personal brand that attracts recruiters and highlights your potential.",
        "topics": [
          "Crafting a Winning Resume/CV",
          "LinkedIn Profile Optimization & Networking",
          "Building a Standout Technical Portfolio",
          "Agile Methodologies (Scrum, Kanban) basics",
          "Cold Emailing & Outreach Strategies",
          "Project: Personal Brand Overhaul & Review"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Interview Mastery & Placement",
        "description": "Navigate the corporate hiring pipeline from initial screening to final negotiation.",
        "topics": [
          "Tackling HR & Behavioral Interviews",
          "The STAR Method for Situational Questions",
          "Culture Fit & Psychometric Assessments",
          "Navigating Salary Negotiations & Offers",
          "Handling Rejection & Building Resilience",
          "Final Capstone: Full Mock Hiring Process"
        ]
      }
    ],
    "curriculumSection": {
      "title": "12-Week Curriculum",
      "description": "A comprehensive journey from building confidence to securing job offers.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Foundational Communication",
          "description": "Build unshakeable confidence in your verbal and written communication.",
          "topics": [
            "Overcoming Public Speaking Anxiety",
            "Corporate Etiquette & Active Listening",
            "Body Language & Non-Verbal Cues",
            "Articulating Complex Thoughts Clearly",
            "Mastering Business English & Grammar",
            "Project: Live Group Presentations"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Professional Branding & Presence",
          "description": "Craft a personal brand that attracts recruiters and highlights your potential.",
          "topics": [
            "Crafting a Winning Resume/CV",
            "LinkedIn Profile Optimization & Networking",
            "Building a Standout Technical Portfolio",
            "Agile Methodologies (Scrum, Kanban) basics",
            "Cold Emailing & Outreach Strategies",
            "Project: Personal Brand Overhaul & Review"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Interview Mastery & Placement",
          "description": "Navigate the corporate hiring pipeline from initial screening to final negotiation.",
          "topics": [
            "Tackling HR & Behavioral Interviews",
            "The STAR Method for Situational Questions",
            "Culture Fit & Psychometric Assessments",
            "Navigating Salary Negotiations & Offers",
            "Handling Rejection & Building Resilience",
            "Final Capstone: Full Mock Hiring Process"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      },
      {
        "name": "Lavli Pandey",
        "role": "Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Land Your Dream Job?",
      "description": "Join the next cohort of Career Acceleration. Become undeniable to recruiters and secure the offers you deserve.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Land Your Dream Job?",
    "ctaDescription": "Join the next cohort of Career Acceleration. Become undeniable to recruiters and secure the offers you deserve."
  },
  {
    "slug": "communication-for-beginners",
    "title": "Communication for Beginners",
    "tagline": "Tailored for complete beginners who feel shy or anxious speaking in English. Build stage courage, positive body language, effective self-introductions, and engaging small talk.",
    "category": "Communication",
    "level": "Beginner",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Designed specially for introverts and hesitant speakers. Overcome stage fear, master positive body language, build captivating self-introductions, and speak with self-assurance.",
    "metaTitle": "Communication for Beginners | SkillPedia",
    "metaDescription": "Conquer stage fear, build positive body language, craft compelling self-introductions, and master small talk in 45 days. Designed specifically for shy and hesitant beginners.",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#10B981",
    "tags": [
      "Fear Removal",
      "Self-Introduction",
      "Body Language",
      "Small Talk Starters"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Zero-to-Confidence Program"
    },
    "heroHeading": {
      "prefix": "Communication",
      "highlight": "for Beginners",
      "suffix": "",
      "gradient": "from-emerald-500 to-teal-400"
    },
    "heroDescription": "Designed specially for introverts and hesitant speakers. Overcome stage fear, master positive body language, build captivating self-introductions, and speak with self-assurance.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Safe-Space Live Sessions",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Overcoming Stage Fear",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "Empathetic 1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Stage Fear & Anxiety Removal",
        "iconName": "Sparkles",
        "color": "text-emerald-500"
      },
      {
        "name": "60s Impactful Self-Introduction",
        "iconName": "UserCheck",
        "color": "text-rose-500"
      },
      {
        "name": "Confident Body Language & Eye Contact",
        "iconName": "Eye",
        "color": "text-blue-500"
      },
      {
        "name": "Small Talk & Social Icebreakers",
        "iconName": "MessageCircle",
        "color": "text-amber-500"
      },
      {
        "name": "Polite Assertiveness & Opinion Sharing",
        "iconName": "Shield",
        "color": "text-purple-500"
      },
      {
        "name": "Impromptu Speaking Courage",
        "iconName": "Mic",
        "color": "text-teal-500"
      }
    ],
    "toolsSection": {
      "title": "The Confidence Toolkit",
      "description": "Step-by-step techniques to dissolve hesitation and communicate with presence.",
      "tools": [
        {
          "name": "Stage Fear & Anxiety Removal",
          "iconName": "Sparkles",
          "color": "text-emerald-500"
        },
        {
          "name": "60s Impactful Self-Introduction",
          "iconName": "UserCheck",
          "color": "text-rose-500"
        },
        {
          "name": "Confident Body Language & Eye Contact",
          "iconName": "Eye",
          "color": "text-blue-500"
        },
        {
          "name": "Small Talk & Social Icebreakers",
          "iconName": "MessageCircle",
          "color": "text-amber-500"
        },
        {
          "name": "Polite Assertiveness & Opinion Sharing",
          "iconName": "Shield",
          "color": "text-purple-500"
        },
        {
          "name": "Impromptu Speaking Courage",
          "iconName": "Mic",
          "color": "text-teal-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Breaking Mental Barriers & Fear of Judgment",
        "description": "Shatter stage fright, reframe speaking anxiety, and create a captivating 60-second personal introduction.",
        "topics": [
          "Deconstructing Glossophobia (Fear of Public Speaking)",
          "Overcoming the 'What Will People Think?' Mindset",
          "The 60-Second Elevator Pitch / Self-Introduction Blueprint",
          "Vocal Warm-Ups, Pauses & Calming Breathwork",
          "Establishing Natural Eye Contact Without Awkwardness",
          "Project: Video-Recorded First-Impression Introduction"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Body Language, Small Talk & Social Dynamics",
        "description": "Learn how non-verbal cues command attention and how to start conversations with strangers effortlessly.",
        "topics": [
          "Open vs Closed Posture, Hand Gestures & Smiling Techniques",
          "Starting Organic Small Talk at Networking Events & Workplaces",
          "Active Listening: Head Nods, Paraphrasing & Encouragers",
          "The Art of Asking Meaningful Open-Ended Questions",
          "Exiting Conversations Gracefully and Leaving a Lasting Impression",
          "Project: Simulated Coffee-Break Networking Conversation"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Group Participation & Assertive Expression",
        "description": "Learn to express your opinions respectfully in team discussions, meetings, and public forums.",
        "topics": [
          "Expressing Agreement, Disagreement, and Clarifications Politely",
          "Speaking Up in Classrooms, Meetings & Social Gatherings",
          "Impromptu 2-Minute Presentations on Everyday Topics",
          "Handling Interruptions with Poise and Confidence",
          "Constructive Peer Feedback & Self-Reflection Review",
          "Final Capstone: Live Interactive Beginner Showcase"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Confidence Curriculum",
      "description": "A nurturing and supportive program designed to unlock your natural speaking voice.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Breaking Mental Barriers & Fear of Judgment",
          "description": "Shatter stage fright, reframe speaking anxiety, and create a captivating 60-second personal introduction.",
          "topics": [
            "Deconstructing Glossophobia (Fear of Public Speaking)",
            "Overcoming the 'What Will People Think?' Mindset",
            "The 60-Second Elevator Pitch / Self-Introduction Blueprint",
            "Vocal Warm-Ups, Pauses & Calming Breathwork",
            "Establishing Natural Eye Contact Without Awkwardness",
            "Project: Video-Recorded First-Impression Introduction"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Body Language, Small Talk & Social Dynamics",
          "description": "Learn how non-verbal cues command attention and how to start conversations with strangers effortlessly.",
          "topics": [
            "Open vs Closed Posture, Hand Gestures & Smiling Techniques",
            "Starting Organic Small Talk at Networking Events & Workplaces",
            "Active Listening: Head Nods, Paraphrasing & Encouragers",
            "The Art of Asking Meaningful Open-Ended Questions",
            "Exiting Conversations Gracefully and Leaving a Lasting Impression",
            "Project: Simulated Coffee-Break Networking Conversation"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Group Participation & Assertive Expression",
          "description": "Learn to express your opinions respectfully in team discussions, meetings, and public forums.",
          "topics": [
            "Expressing Agreement, Disagreement, and Clarifications Politely",
            "Speaking Up in Classrooms, Meetings & Social Gatherings",
            "Impromptu 2-Minute Presentations on Everyday Topics",
            "Handling Interruptions with Poise and Confidence",
            "Constructive Peer Feedback & Self-Reflection Review",
            "Final Capstone: Live Interactive Beginner Showcase"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      },
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Leave Self-Doubt Behind",
      "description": "Take the first step towards courageous communication. Join a supportive community of learners and discover your true potential.",
      "buttonText": "Join the Beginner Cohort",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Leave Self-Doubt Behind",
    "ctaDescription": "Take the first step towards courageous communication. Join a supportive community of learners and discover your true potential."
  },
  {
    "slug": "complete-software-testing-course",
    "title": "Complete Software Testing Course",
    "tagline": "The definitive all-in-one QA bootcamp. Covers everything from Manual Testing and Jira to Selenium WebDriver, API Testing, Performance Testing, and interview placement coaching.",
    "category": "Testing",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "The definitive 360° Quality Assurance bootcamp. Master Manual Testing, Selenium WebDriver Automation with Java, Rest Assured API Testing, Performance Testing with JMeter, Mobile Appium, and 100% Placement Coaching.",
    "metaTitle": "Complete Software Testing Course | SkillPedia",
    "metaDescription": "The definitive all-in-one QA bootcamp in 3 months. Master Manual Testing, Selenium WebDriver Automation with Java, Rest Assured API Testing, JMeter Performance, and 100% Placement Coaching.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
    "color": "#059669",
    "tags": [
      "Manual QA",
      "Selenium Automation",
      "API Testing",
      "Jira & Agile",
      "Placements"
    ],
    "badge": {
      "iconName": "ShieldCheck",
      "text": "3-Month Complete SDET Career Track"
    },
    "heroHeading": {
      "prefix": "Complete Software Testing",
      "highlight": "Career Track",
      "suffix": "",
      "gradient": "from-emerald-600 to-teal-500"
    },
    "heroDescription": "The definitive 360° Quality Assurance bootcamp. Master Manual Testing, Selenium WebDriver Automation with Java, Rest Assured API Testing, Performance Testing with JMeter, Mobile Appium, and 100% Placement Coaching.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Immersive Cohort",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Full-Stack QA & SDET",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Placement Prep",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Jira Software & Agile",
        "iconName": "Bug",
        "color": "text-blue-500"
      },
      {
        "name": "Java & Selenium 4",
        "iconName": "MonitorPlay",
        "color": "text-green-500"
      },
      {
        "name": "TestNG & Cucumber BDD",
        "iconName": "Cpu",
        "color": "text-teal-500"
      },
      {
        "name": "Postman & Rest Assured",
        "iconName": "Activity",
        "color": "text-orange-500"
      },
      {
        "name": "Apache JMeter Load",
        "iconName": "Server",
        "color": "text-red-500"
      },
      {
        "name": "Appium Mobile QA",
        "iconName": "Layers",
        "color": "text-purple-500"
      },
      {
        "name": "Jenkins CI/CD Pipelines",
        "iconName": "GitBranch",
        "color": "text-cyan-500"
      },
      {
        "name": "ExtentReports & Allure",
        "iconName": "FileCode",
        "color": "text-yellow-500"
      }
    ],
    "toolsSection": {
      "title": "The Complete SDET Toolkit",
      "description": "Master the 360° testing stack spanning web, API, mobile, performance, and CI/CD pipelines.",
      "tools": [
        {
          "name": "Jira Software & Agile",
          "iconName": "Bug",
          "color": "text-blue-500"
        },
        {
          "name": "Java & Selenium 4",
          "iconName": "MonitorPlay",
          "color": "text-green-500"
        },
        {
          "name": "TestNG & Cucumber BDD",
          "iconName": "Cpu",
          "color": "text-teal-500"
        },
        {
          "name": "Postman & Rest Assured",
          "iconName": "Activity",
          "color": "text-orange-500"
        },
        {
          "name": "Apache JMeter Load",
          "iconName": "Server",
          "color": "text-red-500"
        },
        {
          "name": "Appium Mobile QA",
          "iconName": "Layers",
          "color": "text-purple-500"
        },
        {
          "name": "Jenkins CI/CD Pipelines",
          "iconName": "GitBranch",
          "color": "text-cyan-500"
        },
        {
          "name": "ExtentReports & Allure",
          "iconName": "FileCode",
          "color": "text-yellow-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Manual QA, Agile Methodologies & API Foundations",
        "description": "Master SDLC/STLC models, black-box test design techniques, Jira defect logging, and exploratory API testing with Postman.",
        "topics": [
          "SDLC, STLC, Waterfall vs Agile Scrum ceremonies & QA roles",
          "Test Strategy, Test Plan & Black Box Design Techniques (ECP, BVA, Decision Tables)",
          "Writing structured Test Cases, Defect Life Cycle & Jira issue management",
          "Requirements Traceability Matrix (RTM) & Test Sign-off documentation",
          "REST API Testing with Postman: Requests, Status Codes, Scripts & Collections",
          "Database testing fundamentals: SQL queries, Joins & Data integrity verification"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Test Automation with Java & Selenium WebDriver",
        "description": "Build object-oriented programming foundation in Java and architect a scalable Page Object Model automated suite with Selenium and TestNG.",
        "topics": [
          "Core Java for QA: OOP, Collections, Exception Handling, String manipulation",
          "Selenium WebDriver 4: Locators, Waits, Windows, Frames, Alerts & Actions class",
          "Page Object Model (POM) design pattern & PageFactory implementation",
          "TestNG test framework: Annotations, DataProviders, XML suites & Parallel runs",
          "Cucumber BDD framework: Feature files, Step Definitions & Scenario Outlines",
          "Maven build management, ExtentReports HTML reporting & Git versioning"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Advanced SDET Tracks (API, Performance, Mobile) & Placements",
        "description": "Automate APIs with Rest Assured, run JMeter load tests, automate mobile apps with Appium, and crack SDET placement interviews.",
        "topics": [
          "Automated API Testing with Rest Assured: Assertions, JsonPath & POJO validation",
          "Performance Testing with Apache JMeter: Load, Stress, Thread Groups & Reports",
          "Mobile App Testing with Appium: Native app automation & Inspector walkthrough",
          "CI/CD integration with Jenkins & GitHub Actions automated pipelines",
          "Weekly Mock Technical & Behavioral Interviews with Industry SDET Mentors",
          "Resume Overhaul, LinkedIn Optimization, ATS Compliance & Capstone Portfolio Project"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month Comprehensive Roadmap",
      "description": "A 12-week immersive curriculum covering Manual QA, Selenium Automation, API Testing, Performance Testing, and Placements.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Manual QA, Agile Methodologies & API Foundations",
          "description": "Master SDLC/STLC models, black-box test design techniques, Jira defect logging, and exploratory API testing with Postman.",
          "topics": [
            "SDLC, STLC, Waterfall vs Agile Scrum ceremonies & QA roles",
            "Test Strategy, Test Plan & Black Box Design Techniques (ECP, BVA, Decision Tables)",
            "Writing structured Test Cases, Defect Life Cycle & Jira issue management",
            "Requirements Traceability Matrix (RTM) & Test Sign-off documentation",
            "REST API Testing with Postman: Requests, Status Codes, Scripts & Collections",
            "Database testing fundamentals: SQL queries, Joins & Data integrity verification"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Test Automation with Java & Selenium WebDriver",
          "description": "Build object-oriented programming foundation in Java and architect a scalable Page Object Model automated suite with Selenium and TestNG.",
          "topics": [
            "Core Java for QA: OOP, Collections, Exception Handling, String manipulation",
            "Selenium WebDriver 4: Locators, Waits, Windows, Frames, Alerts & Actions class",
            "Page Object Model (POM) design pattern & PageFactory implementation",
            "TestNG test framework: Annotations, DataProviders, XML suites & Parallel runs",
            "Cucumber BDD framework: Feature files, Step Definitions & Scenario Outlines",
            "Maven build management, ExtentReports HTML reporting & Git versioning"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Advanced SDET Tracks (API, Performance, Mobile) & Placements",
          "description": "Automate APIs with Rest Assured, run JMeter load tests, automate mobile apps with Appium, and crack SDET placement interviews.",
          "topics": [
            "Automated API Testing with Rest Assured: Assertions, JsonPath & POJO validation",
            "Performance Testing with Apache JMeter: Load, Stress, Thread Groups & Reports",
            "Mobile App Testing with Appium: Native app automation & Inspector walkthrough",
            "CI/CD integration with Jenkins & GitHub Actions automated pipelines",
            "Weekly Mock Technical & Behavioral Interviews with Industry SDET Mentors",
            "Resume Overhaul, LinkedIn Optimization, ATS Compliance & Capstone Portfolio Project"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO · Software Testing & Training",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with over 5 years of deep expertise in Software Testing and the Model Training Industry. He has mentored hundreds of engineers into confident, job-ready QA professionals with a structured, placement-first pedagogy."
      },
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Start Your QA Journey Today",
      "description": "Enroll in the Complete Software Testing course and get dedicated 1-on-1 placement assistance.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Start Your QA Journey Today",
    "ctaDescription": "Enroll in the Complete Software Testing course and get dedicated 1-on-1 placement assistance."
  },
  {
    "slug": "corporate-communication",
    "title": "Corporate Communication & Leadership",
    "tagline": "Comprehensive corporate readiness program. Master senior stakeholder management, executive presentation delivery, formal business proposal writing, and cross-functional leadership.",
    "category": "Communication",
    "level": "Intermediate to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Transform into an executive leader. Master multi-stakeholder management, boardroom defense, formal RFP proposal writing, and crisis communication in our comprehensive 3-month flagship program.",
    "metaTitle": "Corporate Communication & Leadership | SkillPedia",
    "metaDescription": "Master executive stakeholder management, formal business proposals, crisis communication, and boardroom leadership presence in our comprehensive 3-month program.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#4F46E5",
    "tags": [
      "Stakeholder Management",
      "Leadership Presence",
      "Crisis Comm",
      "Proposals"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Executive Leadership & Strategy"
    },
    "heroHeading": {
      "prefix": "Corporate",
      "highlight": "Communication",
      "suffix": "",
      "gradient": "from-rose-600 to-indigo-600"
    },
    "heroDescription": "Transform into an executive leader. Master multi-stakeholder management, boardroom defense, formal RFP proposal writing, and crisis communication in our comprehensive 3-month flagship program.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months (12 Weeks)",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Executive Masterclasses",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Boardroom & Leadership",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 C-Suite Coaching",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Executive Proposals & RFP Writing",
        "iconName": "FileText",
        "color": "text-indigo-500"
      },
      {
        "name": "Senior Stakeholder Management",
        "iconName": "Users",
        "color": "text-rose-500"
      },
      {
        "name": "Crisis Communication & Risk Mitigation",
        "iconName": "ShieldCheck",
        "color": "text-amber-500"
      },
      {
        "name": "Boardroom Presentations & Keynotes",
        "iconName": "Presentation",
        "color": "text-blue-500"
      },
      {
        "name": "Cross-Functional Leadership Alignment",
        "iconName": "Briefcase",
        "color": "text-emerald-500"
      },
      {
        "name": "Upward Influence & Strategic Reporting",
        "iconName": "TrendingUp",
        "color": "text-purple-500"
      }
    ],
    "toolsSection": {
      "title": "The Leadership Toolkit",
      "description": "Executive communication assets used by top corporate leaders and directors.",
      "tools": [
        {
          "name": "Executive Proposals & RFP Writing",
          "iconName": "FileText",
          "color": "text-indigo-500"
        },
        {
          "name": "Senior Stakeholder Management",
          "iconName": "Users",
          "color": "text-rose-500"
        },
        {
          "name": "Crisis Communication & Risk Mitigation",
          "iconName": "ShieldCheck",
          "color": "text-amber-500"
        },
        {
          "name": "Boardroom Presentations & Keynotes",
          "iconName": "Presentation",
          "color": "text-blue-500"
        },
        {
          "name": "Cross-Functional Leadership Alignment",
          "iconName": "Briefcase",
          "color": "text-emerald-500"
        },
        {
          "name": "Upward Influence & Strategic Reporting",
          "iconName": "TrendingUp",
          "color": "text-purple-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Executive Documentation & Business Proposals",
        "description": "Master high-level corporate documentation, formal RFP responses, and technical translation for C-suite executives.",
        "topics": [
          "Structuring Million-Dollar Business Proposals & RFPs",
          "Writing Executive Summaries & One-Page Decision Memos",
          "Translating Complex Technical Architectures for Non-Tech Executives",
          "Legal, Compliance & Contractual Wording Nuances",
          "Visual Data Communication: Chart Formatting & KPI Visuals",
          "Project: Authoring a Formal Enterprise Transformation Proposal"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Interpersonal Influence & Stakeholder Management",
        "description": "Align competing departmental priorities, influence without formal authority, and facilitate high-impact workshops.",
        "topics": [
          "Stakeholder Mapping: Power-Interest Grid & Engagement Matrix",
          "Managing Upward: Communicating with C-Level Executives & Board Members",
          "Influencing Without Authority in Matrixed Organizations",
          "Facilitating High-Stakes Strategy Workshops & Town Halls",
          "Radical Candor: Handling Toxic Dynamics & Delivering Hard Feedback",
          "Project: Live Multi-Stakeholder Conflict Resolution Simulation"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Crisis Communication & Boardroom Executive Presence",
        "description": "Navigate organizational crises, deliver high-pressure media briefings, and command boardroom respect.",
        "topics": [
          "Crisis Communication Playbooks: Rapid Response & Brand Protection",
          "Internal Communications During Mergers, Layoffs & Pivots",
          "Boardroom Presentation Architecture: The 10/20/30 Rule & Defense",
          "Handling Hostile Cross-Examination from Investors & Directors",
          "Cultivating Executive Gravitas, Vocal Resonance & Poise",
          "Final Capstone: Live Simulated Boardroom Crisis & Defense Showcase"
        ]
      }
    ],
    "curriculumSection": {
      "title": "12-Week Executive Curriculum",
      "description": "A comprehensive leadership trajectory covering documentation, stakeholder alignment, and crisis governance.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Executive Documentation & Business Proposals",
          "description": "Master high-level corporate documentation, formal RFP responses, and technical translation for C-suite executives.",
          "topics": [
            "Structuring Million-Dollar Business Proposals & RFPs",
            "Writing Executive Summaries & One-Page Decision Memos",
            "Translating Complex Technical Architectures for Non-Tech Executives",
            "Legal, Compliance & Contractual Wording Nuances",
            "Visual Data Communication: Chart Formatting & KPI Visuals",
            "Project: Authoring a Formal Enterprise Transformation Proposal"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Interpersonal Influence & Stakeholder Management",
          "description": "Align competing departmental priorities, influence without formal authority, and facilitate high-impact workshops.",
          "topics": [
            "Stakeholder Mapping: Power-Interest Grid & Engagement Matrix",
            "Managing Upward: Communicating with C-Level Executives & Board Members",
            "Influencing Without Authority in Matrixed Organizations",
            "Facilitating High-Stakes Strategy Workshops & Town Halls",
            "Radical Candor: Handling Toxic Dynamics & Delivering Hard Feedback",
            "Project: Live Multi-Stakeholder Conflict Resolution Simulation"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Crisis Communication & Boardroom Executive Presence",
          "description": "Navigate organizational crises, deliver high-pressure media briefings, and command boardroom respect.",
          "topics": [
            "Crisis Communication Playbooks: Rapid Response & Brand Protection",
            "Internal Communications During Mergers, Layoffs & Pivots",
            "Boardroom Presentation Architecture: The 10/20/30 Rule & Defense",
            "Handling Hostile Cross-Examination from Investors & Directors",
            "Cultivating Executive Gravitas, Vocal Resonance & Poise",
            "Final Capstone: Live Simulated Boardroom Crisis & Defense Showcase"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      },
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers and executives into confident, job-ready professionals."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Step into Corporate Leadership",
      "description": "Acquire the executive presence, strategic proposal writing, and boardroom influence required to lead global organizations.",
      "buttonText": "Apply for Corporate Cohort",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Step into Corporate Leadership",
    "ctaDescription": "Acquire the executive presence, strategic proposal writing, and boardroom influence required to lead global organizations."
  },
  {
    "slug": "english-grammar-tenses",
    "title": "English Grammar & Tenses Mastery",
    "tagline": "Eliminate grammatical mistakes forever. Gain mastery over all 12 tenses, subject-verb agreement, clauses, prepositions, and active/passive voice for crystal-clear communication.",
    "category": "Communication",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Never second-guess your grammar again. Master all 12 tenses, active and passive voice, subject-verb harmony, and speak and write with immaculate precision.",
    "metaTitle": "English Grammar & Tenses Mastery | SkillPedia",
    "metaDescription": "Master all 12 tenses, parts of speech, active and passive voice, and error-free sentence structure in 45 days. Eliminate grammatical mistakes forever.",
    "icon": "https://cdn.simpleicons.org/googlemeet",
    "color": "#A855F7",
    "tags": [
      "All 12 Tenses",
      "Parts of Speech",
      "Active/Passive Voice",
      "Direct/Indirect"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Grammar & Syntax Mastery"
    },
    "heroHeading": {
      "prefix": "English Grammar &",
      "highlight": "Tenses Program",
      "suffix": "",
      "gradient": "from-violet-600 to-pink-500"
    },
    "heroDescription": "Never second-guess your grammar again. Master all 12 tenses, active and passive voice, subject-verb harmony, and speak and write with immaculate precision.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Interactive Drills",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Flawless Sentence Construction",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "Personalized Corrections",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "The 12 Tenses Framework",
        "iconName": "Calendar",
        "color": "text-violet-500"
      },
      {
        "name": "8 Parts of Speech Mastery",
        "iconName": "Layers",
        "color": "text-rose-500"
      },
      {
        "name": "Subject-Verb Agreement",
        "iconName": "ShieldCheck",
        "color": "text-emerald-500"
      },
      {
        "name": "Active & Passive Voice",
        "iconName": "RefreshCw",
        "color": "text-blue-500"
      },
      {
        "name": "Reported Speech (Direct/Indirect)",
        "iconName": "MessageSquare",
        "color": "text-amber-500"
      },
      {
        "name": "Real-Time Error Spotting",
        "iconName": "CheckCheck",
        "color": "text-pink-500"
      }
    ],
    "toolsSection": {
      "title": "The Grammar Toolkit",
      "description": "Core structural frameworks to write and speak English with flawless accuracy.",
      "tools": [
        {
          "name": "The 12 Tenses Framework",
          "iconName": "Calendar",
          "color": "text-violet-500"
        },
        {
          "name": "8 Parts of Speech Mastery",
          "iconName": "Layers",
          "color": "text-rose-500"
        },
        {
          "name": "Subject-Verb Agreement",
          "iconName": "ShieldCheck",
          "color": "text-emerald-500"
        },
        {
          "name": "Active & Passive Voice",
          "iconName": "RefreshCw",
          "color": "text-blue-500"
        },
        {
          "name": "Reported Speech (Direct/Indirect)",
          "iconName": "MessageSquare",
          "color": "text-amber-500"
        },
        {
          "name": "Real-Time Error Spotting",
          "iconName": "CheckCheck",
          "color": "text-pink-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Sentence Architecture & The 8 Parts of Speech",
        "description": "Deconstruct the mechanics of correct English sentences and build an instinct for flawless syntax.",
        "topics": [
          "Nouns, Pronouns, Verbs, Adverbs & Adjectives",
          "Prepositions of Time, Place & Direction (In, On, At, By)",
          "Conjunctions, Compound & Complex Sentences",
          "Subject-Verb Agreement Rules & Exception Traps",
          "Articles (A, An, The) - Definite vs Indefinite Usage",
          "Project: Diagnostic Grammar Audit & Error Analysis"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "The 12 English Tenses In-Depth",
        "description": "Demystify past, present, and future tenses with practical timelines and real-life context associations.",
        "topics": [
          "Present Tenses: Simple, Continuous, Perfect & Perfect Continuous",
          "Past Tenses: Simple Past, Past Continuous, Past Perfect & Past Perfect Continuous",
          "Future Tenses: Will vs Going To, Future Perfect & Aspect Nuances",
          "Time Markers & Signal Words for Every Tense",
          "Modal Verbs (Can, Could, Should, Would, Might, Must)",
          "Project: Tense Conjugation & Conversational Story Telling"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Advanced Voice, Reported Speech & Error Rectification",
        "description": "Master sophisticated grammatical constructs for professional writing and articulate oral expression.",
        "topics": [
          "Active vs Passive Voice Conversion across All Tenses",
          "Direct to Indirect / Reported Speech in Business Contexts",
          "Conditional Clauses (Zero, First, Second & Third Conditionals)",
          "Rectifying Common Indian English Grammatical Errors",
          "Punctuation, Capitalization & Written Cohesion",
          "Final Capstone: Comprehensive 100-Question Error-Free Mastery Assessment"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Comprehensive Curriculum",
      "description": "A progressive curriculum that turns grammar rules into second nature.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Sentence Architecture & The 8 Parts of Speech",
          "description": "Deconstruct the mechanics of correct English sentences and build an instinct for flawless syntax.",
          "topics": [
            "Nouns, Pronouns, Verbs, Adverbs & Adjectives",
            "Prepositions of Time, Place & Direction (In, On, At, By)",
            "Conjunctions, Compound & Complex Sentences",
            "Subject-Verb Agreement Rules & Exception Traps",
            "Articles (A, An, The) - Definite vs Indefinite Usage",
            "Project: Diagnostic Grammar Audit & Error Analysis"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "The 12 English Tenses In-Depth",
          "description": "Demystify past, present, and future tenses with practical timelines and real-life context associations.",
          "topics": [
            "Present Tenses: Simple, Continuous, Perfect & Perfect Continuous",
            "Past Tenses: Simple Past, Past Continuous, Past Perfect & Past Perfect Continuous",
            "Future Tenses: Will vs Going To, Future Perfect & Aspect Nuances",
            "Time Markers & Signal Words for Every Tense",
            "Modal Verbs (Can, Could, Should, Would, Might, Must)",
            "Project: Tense Conjugation & Conversational Story Telling"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Advanced Voice, Reported Speech & Error Rectification",
          "description": "Master sophisticated grammatical constructs for professional writing and articulate oral expression.",
          "topics": [
            "Active vs Passive Voice Conversion across All Tenses",
            "Direct to Indirect / Reported Speech in Business Contexts",
            "Conditional Clauses (Zero, First, Second & Third Conditionals)",
            "Rectifying Common Indian English Grammatical Errors",
            "Punctuation, Capitalization & Written Cohesion",
            "Final Capstone: Comprehensive 100-Question Error-Free Mastery Assessment"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      },
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master English Grammar Once and For All",
      "description": "Eliminate grammatical doubt, write professional reports with conviction, and speak with flawless sentence structure.",
      "buttonText": "Apply For Grammar Mastery",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master English Grammar Once and For All",
    "ctaDescription": "Eliminate grammatical doubt, write professional reports with conviction, and speak with flawless sentence structure."
  },
  {
    "slug": "frontend-development",
    "title": "Frontend Development Program",
    "tagline": "Create stunning, accessible, and high-performance user interfaces. Master modern frontend frameworks, TypeScript, animations with Framer Motion, and Core Web Vitals optimization.",
    "category": "Development",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Create stunning, accessible, and ultra-high-performance user interfaces. Master Next.js 15, React 19, TypeScript, Framer Motion, and Core Web Vitals optimization.",
    "metaTitle": "Frontend Development Program | SkillPedia",
    "metaDescription": "Master modern frontend engineering in 3 months. Build high-performance, accessible, and stunning user interfaces with Next.js, React, TypeScript, Tailwind, and Framer Motion.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "color": "#EC4899",
    "tags": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Web Performance"
    ],
    "badge": {
      "iconName": "Layout",
      "text": "3-Month Frontend Engineering Track"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Frontend",
      "suffix": "Engineering",
      "gradient": "from-purple-600 to-pink-500"
    },
    "heroDescription": "Create stunning, accessible, and ultra-high-performance user interfaces. Master Next.js 15, React 19, TypeScript, Framer Motion, and Core Web Vitals optimization.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "UI/UX & Speed",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "React 19 & Next.js 15",
        "iconName": "Globe",
        "color": "text-blue-400"
      },
      {
        "name": "TypeScript 5",
        "iconName": "Code2",
        "color": "text-blue-600"
      },
      {
        "name": "Tailwind CSS & Tokens",
        "iconName": "Layout",
        "color": "text-cyan-400"
      },
      {
        "name": "Framer Motion 3D",
        "iconName": "Zap",
        "color": "text-purple-400"
      },
      {
        "name": "Web Accessibility (a11y)",
        "iconName": "Users",
        "color": "text-emerald-400"
      },
      {
        "name": "Zustand & TanStack Query",
        "iconName": "Layers",
        "color": "text-orange-400"
      },
      {
        "name": "Core Web Vitals & SEO",
        "iconName": "Activity",
        "color": "text-green-400"
      },
      {
        "name": "Vitest & Cypress Testing",
        "iconName": "CheckCircle2",
        "color": "text-red-400"
      }
    ],
    "toolsSection": {
      "title": "Modern Frontend Stack",
      "description": "Master the cutting-edge frameworks, animation engines, and design systems.",
      "tools": [
        {
          "name": "React 19 & Next.js 15",
          "iconName": "Globe",
          "color": "text-blue-400"
        },
        {
          "name": "TypeScript 5",
          "iconName": "Code2",
          "color": "text-blue-600"
        },
        {
          "name": "Tailwind CSS & Tokens",
          "iconName": "Layout",
          "color": "text-cyan-400"
        },
        {
          "name": "Framer Motion 3D",
          "iconName": "Zap",
          "color": "text-purple-400"
        },
        {
          "name": "Web Accessibility (a11y)",
          "iconName": "Users",
          "color": "text-emerald-400"
        },
        {
          "name": "Zustand & TanStack Query",
          "iconName": "Layers",
          "color": "text-orange-400"
        },
        {
          "name": "Core Web Vitals & SEO",
          "iconName": "Activity",
          "color": "text-green-400"
        },
        {
          "name": "Vitest & Cypress Testing",
          "iconName": "CheckCircle2",
          "color": "text-red-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Modern CSS Architecture, TypeScript & Accessibility",
        "description": "Build rock-solid UI foundations with advanced CSS layouts, strict static typing, and WCAG accessibility standards.",
        "topics": [
          "Advanced CSS: CSS Grid, Subgrid, Container Queries, Cascade Layers & CSS Variables",
          "Tailwind CSS Architecture, Custom Plugins, Dark Mode & Design Tokens",
          "TypeScript for Frontend: Generics, Utility Types, Discriminated Unions & Strict Mode",
          "Web Accessibility (WCAG 2.2 Level AA, ARIA Roles, Screen Readers & Keyboard Focus)",
          "Modern Frontend Tooling: Vite, Turbopack, ESLint & Prettier Configurations",
          "Project: Accessible, Headless & Fully Keyboard-Navigable UI Design System"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "React 19, Next.js App Router & Micro-Interactions",
        "description": "Architect scalable frontend applications with Next.js App Router, streaming SSR, and fluid animations.",
        "topics": [
          "React 19 Deep Dive: Transitions, useActionState, useOptimistic & Server Components (RSC)",
          "Next.js App Router: Dynamic Routing, Intercepting Routes, Parallel Routes & Metadata SEO",
          "Fluid Micro-Interactions, Scroll-Driven Animations & Parallax with Framer Motion",
          "State Architecture: Global State with Zustand & Async Server Caching with TanStack Query",
          "Complex Form Architecture with React Hook Form & Zod Schema Validation",
          "Project: Highly Interactive SaaS Analytics Portal & Marketing Landing Experience"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Performance Optimization, Testing & Career Placements",
        "description": "Optimize for lightning speed, write comprehensive component/E2E test suites, and master machine coding rounds.",
        "topics": [
          "Core Web Vitals (LCP, INP, CLS) Diagnostics & Chrome DevTools Performance Profiling",
          "Bundle Optimization: Dynamic Imports, Tree Shaking & Critical CSS Extraction",
          "Unit & Integration Testing with Vitest and React Testing Library",
          "End-to-End Visual Regression & Functional Testing with Cypress",
          "Frontend System Design: Virtualized Lists, Infinite Scroll & Offline Capabilities",
          "Mock Frontend Machine Coding Rounds, System Design & Portfolio Reviews"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month Comprehensive Curriculum",
      "description": "A structured journey from advanced styling to full-scale Next.js application architecture.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Modern CSS Architecture, TypeScript & Accessibility",
          "description": "Build rock-solid UI foundations with advanced CSS layouts, strict static typing, and WCAG accessibility standards.",
          "topics": [
            "Advanced CSS: CSS Grid, Subgrid, Container Queries, Cascade Layers & CSS Variables",
            "Tailwind CSS Architecture, Custom Plugins, Dark Mode & Design Tokens",
            "TypeScript for Frontend: Generics, Utility Types, Discriminated Unions & Strict Mode",
            "Web Accessibility (WCAG 2.2 Level AA, ARIA Roles, Screen Readers & Keyboard Focus)",
            "Modern Frontend Tooling: Vite, Turbopack, ESLint & Prettier Configurations",
            "Project: Accessible, Headless & Fully Keyboard-Navigable UI Design System"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "React 19, Next.js App Router & Micro-Interactions",
          "description": "Architect scalable frontend applications with Next.js App Router, streaming SSR, and fluid animations.",
          "topics": [
            "React 19 Deep Dive: Transitions, useActionState, useOptimistic & Server Components (RSC)",
            "Next.js App Router: Dynamic Routing, Intercepting Routes, Parallel Routes & Metadata SEO",
            "Fluid Micro-Interactions, Scroll-Driven Animations & Parallax with Framer Motion",
            "State Architecture: Global State with Zustand & Async Server Caching with TanStack Query",
            "Complex Form Architecture with React Hook Form & Zod Schema Validation",
            "Project: Highly Interactive SaaS Analytics Portal & Marketing Landing Experience"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Performance Optimization, Testing & Career Placements",
          "description": "Optimize for lightning speed, write comprehensive component/E2E test suites, and master machine coding rounds.",
          "topics": [
            "Core Web Vitals (LCP, INP, CLS) Diagnostics & Chrome DevTools Performance Profiling",
            "Bundle Optimization: Dynamic Imports, Tree Shaking & Critical CSS Extraction",
            "Unit & Integration Testing with Vitest and React Testing Library",
            "End-to-End Visual Regression & Functional Testing with Cypress",
            "Frontend System Design: Virtualized Lists, Infinite Scroll & Offline Capabilities",
            "Mock Frontend Machine Coding Rounds, System Design & Portfolio Reviews"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. Having architected high-performance web platforms and fluid user interfaces, he mentors frontend developers on mastering TypeScript, Next.js App Router, Core Web Vitals optimization, and micro-interactions."
      },
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. He ensures frontend students gain deep proficiency in API contracts, data hydration, authentication cookies, and seamless client-server integration."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Build World-Class User Interfaces",
      "description": "Join the 3-Month Frontend Development program. Master Next.js, animations, and web performance with 1-on-1 mentorship.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Build World-Class User Interfaces",
    "ctaDescription": "Join the 3-Month Frontend Development program. Master Next.js, animations, and web performance with 1-on-1 mentorship."
  },
  {
  "slug": "full-stack-engineering",
  "title": "Fullstack Engineering",
  "tagline": "Master both frontend and backend development. Build scalable web applications from scratch using modern frameworks and databases.",
  "category": "Core",
  "level": "Beginner to Advanced",
  "duration": "3 Months",
  "mode": "Live Interactive Online",
  "price": "₹24,999",
  "originalPrice": "₹39,999",
  "rating": 4.9,
  "enrolledStudents": "1,200+",
  "overview": "Master end-to-end web engineering from responsive frontend interfaces to scalable backend microservices, SQL/NoSQL databases, and cloud deployments.",
  "metaTitle": "Fullstack Engineering Program | SkillPedia",
  "metaDescription": "Learn Fullstack Engineering with hands-on projects. Master React, Node.js, System Design, and Cloud deployments.",
  "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "color": "#10B981",
  "tags": [
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "AWS"
  ],
  "badge": {
    "iconName": "Code",
    "text": "3-Month Fullstack Engineering Track"
  },
  "heroHeading": {
    "prefix": "Master",
    "highlight": "Fullstack",
    "suffix": "Engineering",
    "gradient": "from-emerald-600 to-teal-500"
  },
  "heroDescription": "Architect scalable applications from the database to the DOM. Master React, Node.js, SQL/NoSQL, System Design, and Cloud deployments in our comprehensive 3-month track.",
  "stats": [
    {
      "label": "Duration",
      "value": "3 Months",
      "iconName": "Calendar"
    },
    {
      "label": "Format",
      "value": "Live Classes",
      "iconName": "MonitorPlay"
    },
    {
      "label": "Mentorship",
      "value": "1-on-1 Guidance",
      "iconName": "Users"
    },
    {
      "label": "Focus",
      "value": "MERN Stack",
      "iconName": "Briefcase"
    }
  ],
  "tools": [
    {
      "name": "React & Next.js",
      "iconName": "Code",
      "color": "text-blue-400"
    },
    {
      "name": "Node.js & Express",
      "iconName": "Server",
      "color": "text-green-500"
    },
    {
      "name": "MongoDB & PostgreSQL",
      "iconName": "Database",
      "color": "text-emerald-600"
    },
    {
      "name": "AWS & Azure",
      "iconName": "Cloud",
      "color": "text-orange-400"
    },
    {
      "name": "TypeScript",
      "iconName": "FileCode",
      "color": "text-blue-600"
    },
    {
      "name": "Docker & CI/CD",
      "iconName": "Terminal",
      "color": "text-sky-500"
    },
    {
      "name": "Redis & Caching",
      "iconName": "Zap",
      "color": "text-red-500"
    },
    {
      "name": "System Architecture",
      "iconName": "Layers",
      "color": "text-purple-500"
    }
  ],
  "toolsSection": {
    "title": "Master the Modern Stack",
    "description": "Learn the most demanded frontend and backend technologies in the industry.",
    "tools": [
    {
      "name": "React & Next.js",
      "iconName": "Code",
      "color": "text-blue-400"
    },
    {
      "name": "Node.js & Express",
      "iconName": "Server",
      "color": "text-green-500"
    },
    {
      "name": "MongoDB & PostgreSQL",
      "iconName": "Database",
      "color": "text-emerald-600"
    },
    {
      "name": "AWS & Azure",
      "iconName": "Cloud",
      "color": "text-orange-400"
    },
    {
      "name": "TypeScript",
      "iconName": "FileCode",
      "color": "text-blue-600"
    },
    {
      "name": "Docker & CI/CD",
      "iconName": "Terminal",
      "color": "text-sky-500"
    },
    {
      "name": "Redis & Caching",
      "iconName": "Zap",
      "color": "text-red-500"
    },
    {
      "name": "System Architecture",
      "iconName": "Layers",
      "color": "text-purple-500"
    }
  ]
  },
  "curriculum": [
    {
      "id": "module-1",
      "period": "Month 1",
      "title": "Frontend Deep Dive with React & Next.js",
      "description": "Master advanced UI architecture, state management, and server-side rendering.",
      "topics": [
        "Advanced React: Hooks, Context API, Performance Profiling",
        "Next.js App Router: RSC, SSR, SSG, API Routes",
        "State Management: Redux Toolkit, Zustand, TanStack Query",
        "Modern CSS: Tailwind CSS, CSS Modules, Framer Motion",
        "TypeScript integration and strict typing across the frontend"
      ]
    },
    {
      "id": "module-2",
      "period": "Month 2",
      "title": "Backend Architecture & Databases",
      "description": "Build robust APIs with Node.js, Express, and secure authentication systems.",
      "topics": [
        "Node.js Internals, Event Loop, Streams, and Asynchronous Programming",
        "Express.js REST API Design, Middlewares, and Error Handling",
        "Database Modeling: MongoDB (Mongoose) and PostgreSQL (Prisma ORM)",
        "Authentication & Security: JWT, OAuth 2.0, bcrypt, Helmet, Rate Limiting",
        "Caching Strategies with Redis and API Performance Optimization"
      ]
    },
    {
      "id": "module-3",
      "period": "Month 3",
      "title": "System Design, Cloud & DevOps",
      "description": "Learn to architect distributed systems and deploy applications at scale.",
      "topics": [
        "System Design Basics: Load Balancing, Microservices, Message Queues",
        "Containerization with Docker and multi-container apps with Docker Compose",
        "CI/CD Pipelines using GitHub Actions for automated testing and deployment",
        "AWS Fundamentals: EC2, S3, RDS, Serverless, and Cloud Architecture",
        "Capstone Project: Full-scale SaaS Application Development and Launch"
      ]
    }
  ],
  "curriculumSection": {
    "title": "3-Month Fullstack Curriculum",
    "description": "A structured journey from frontend interactivity to backend scalability and cloud deployments.",
    "modules": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Frontend Deep Dive with React & Next.js",
        "description": "Master advanced UI architecture, state management, and server-side rendering.",
        "topics": [
          "Advanced React: Hooks, Context API, Performance Profiling",
          "Next.js App Router: RSC, SSR, SSG, API Routes",
          "State Management: Redux Toolkit, Zustand, TanStack Query",
          "Modern CSS: Tailwind CSS, CSS Modules, Framer Motion",
          "TypeScript integration and strict typing across the frontend"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Backend Architecture & Databases",
        "description": "Build robust APIs with Node.js, Express, and secure authentication systems.",
        "topics": [
          "Node.js Internals, Event Loop, Streams, and Asynchronous Programming",
          "Express.js REST API Design, Middlewares, and Error Handling",
          "Database Modeling: MongoDB (Mongoose) and PostgreSQL (Prisma ORM)",
          "Authentication & Security: JWT, OAuth 2.0, bcrypt, Helmet, Rate Limiting",
          "Caching Strategies with Redis and API Performance Optimization"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "System Design, Cloud & DevOps",
        "description": "Learn to architect distributed systems and deploy applications at scale.",
        "topics": [
          "System Design Basics: Load Balancing, Microservices, Message Queues",
          "Containerization with Docker and multi-container apps with Docker Compose",
          "CI/CD Pipelines using GitHub Actions for automated testing and deployment",
          "AWS Fundamentals: EC2, S3, RDS, Serverless, and Cloud Architecture",
          "Capstone Project: Full-scale SaaS Application Development and Launch"
        ]
      }
    ]
  },
  "instructors": [
    {
      "name": "Ayush Dwivedy",
      "role": "Managing Director · Technology & Strategy",
      "image": "/images/team/Ayush.webp",
      "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. Having architected high-performance web platforms, he guides students through fullstack paradigms, system design, and building production-ready architectures."
    },
    {
      "name": "Saurabh Pathak",
      "role": "Backend Developer · Scalable Systems & Cloud",
      "image": "/images/team/Saurabh.webp",
      "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems. He mentors fullstack students in database modeling, backend security, RESTful APIs, and seamless cloud deployments."
    }
  ],
  "prerequisites": [
    "Basic computer literacy and enthusiasm to learn",
    "Dedication of 3-4 hours daily for live lectures and hands-on coding",
    "A laptop or desktop with modern browser and internet connectivity"
  ],
  "outcomes": [
    "Build and deploy industry-grade production projects",
    "Master modern tooling, frameworks, and best engineering practices",
    "1-on-1 mentorship, code reviews, and mock interview coaching",
    "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
  ],
  "cta": {
    "headline": "Ready to Become a Fullstack Engineer?",
    "description": "Join the next cohort of Fullstack Engineering. Seats are extremely limited to ensure 1-on-1 mentorship.",
    "buttonText": "Apply Now",
    "buttonHref": "/apply"
  },
  "ctaHeadline": "Ready to Become a Fullstack Engineer?",
  "ctaDescription": "Join the next cohort of Fullstack Engineering. Seats are extremely limited to ensure 1-on-1 mentorship."
},
  
    
  {
    "slug": "interview-communication",
    "title": "Interview Communication & Placement Mastery",
    "tagline": "Crack any technical and HR interview round. Master the STAR framework for behavioral questions, deliver punchy resume walkthroughs, and negotiate compensation with confidence.",
    "category": "Communication",
    "level": "All Levels",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Crack top tech and corporate interviews. Master the STAR technique, ace behavioral and culture-fit rounds, and negotiate top-tier compensation packages in 45 days.",
    "metaTitle": "Interview Communication & Placement Mastery | SkillPedia",
    "metaDescription": "Crack technical & HR behavioral interviews in 45 days. Master the STAR framework, compelling resume walkthroughs, tough objection handling, and confident salary negotiation.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    "color": "#FF7A00",
    "tags": [
      "STAR Methodology",
      "HR Questions",
      "Resume Walkthrough",
      "Salary Negotiation"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Interview Mastery & Placement Prep"
    },
    "heroHeading": {
      "prefix": "Interview",
      "highlight": "Communication",
      "suffix": "",
      "gradient": "from-[#FF7A00] to-amber-500"
    },
    "heroDescription": "Crack top tech and corporate interviews. Master the STAR technique, ace behavioral and culture-fit rounds, and negotiate top-tier compensation packages in 45 days.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Mock Panels",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "STAR & Offer Negotiation",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "HR Recruiter Feedback",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "STAR Behavioral Framework",
        "iconName": "Target",
        "color": "text-orange-500"
      },
      {
        "name": "Top 50 HR Question Mastery",
        "iconName": "UserCheck",
        "color": "text-emerald-500"
      },
      {
        "name": "Resume & Project Walkthroughs",
        "iconName": "FileText",
        "color": "text-blue-500"
      },
      {
        "name": "Salary & Package Negotiation",
        "iconName": "TrendingUp",
        "color": "text-purple-500"
      },
      {
        "name": "1-on-1 Video Mock Interviews",
        "iconName": "Video",
        "color": "text-rose-500"
      },
      {
        "name": "Interview Body Language & Poise",
        "iconName": "Smile",
        "color": "text-teal-500"
      }
    ],
    "toolsSection": {
      "title": "The Interview Toolkit",
      "description": "Battle-tested tools and frameworks to guarantee you outperform the competition.",
      "tools": [
        {
          "name": "STAR Behavioral Framework",
          "iconName": "Target",
          "color": "text-orange-500"
        },
        {
          "name": "Top 50 HR Question Mastery",
          "iconName": "UserCheck",
          "color": "text-emerald-500"
        },
        {
          "name": "Resume & Project Walkthroughs",
          "iconName": "FileText",
          "color": "text-blue-500"
        },
        {
          "name": "Salary & Package Negotiation",
          "iconName": "TrendingUp",
          "color": "text-purple-500"
        },
        {
          "name": "1-on-1 Video Mock Interviews",
          "iconName": "Video",
          "color": "text-rose-500"
        },
        {
          "name": "Interview Body Language & Poise",
          "iconName": "Smile",
          "color": "text-teal-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "The STAR Framework & Behavioral Mastery",
        "description": "Structure compelling, evidence-backed answers using Situation, Task, Action, and Result.",
        "topics": [
          "Mastering 'Tell Me About Yourself' with the Past-Present-Future Pitch",
          "Deconstructing the STAR Framework for Situational Questions",
          "Highlighting Core Strengths with Concrete Metric-Driven Examples",
          "Explaining Technical Projects to Non-Technical HR Recruiters",
          "Eliminating Hesitation When Answering Unprepared Behavioral Prompts",
          "Project: Audio-Visual Recording of 5 Core Behavioral Stories"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Tough Questions, Career Gaps & Cultural Fit",
        "description": "Handle sensitive and high-pressure interview questions with grace, authenticity, and confidence.",
        "topics": [
          "Explaining Career Gaps, Role Changes & Academic Performance Confidently",
          "Reframing 'What is Your Greatest Weakness?' into a Growth Narrative",
          "Answering 'Why Should We Hire You?' & 'Why This Company?'",
          "Formulating High-Impact Questions to Ask the Hiring Manager",
          "Navigating Cross-Functional & Culture-Fit Interview Rounds",
          "Project: Live Panel Simulation with Rapid-Fire Questioning"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Live Mock Rounds & High-Value Salary Negotiation",
        "description": "Experience realistic end-to-end mock interviews and master counter-offer strategies.",
        "topics": [
          "Full-Length 45-Minute 1-on-1 Mock Interview with Detailed Rubric Scoring",
          "Psychology of Salary Negotiation: Anchoring & Silence Tactics",
          "Handling 'What is Your Current/Expected CTC?' Questions",
          "Evaluating Comp Packages: Base, Bonuses, ESOPs & Perks",
          "Writing Professional Follow-Up & Offer Acceptance/Counter Emails",
          "Final Capstone: Graduation Hiring Simulation with Hiring Experts"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Placement Curriculum",
      "description": "A structured interview bootcamp from initial elevator pitch to signed offer letter.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "The STAR Framework & Behavioral Mastery",
          "description": "Structure compelling, evidence-backed answers using Situation, Task, Action, and Result.",
          "topics": [
            "Mastering 'Tell Me About Yourself' with the Past-Present-Future Pitch",
            "Deconstructing the STAR Framework for Situational Questions",
            "Highlighting Core Strengths with Concrete Metric-Driven Examples",
            "Explaining Technical Projects to Non-Technical HR Recruiters",
            "Eliminating Hesitation When Answering Unprepared Behavioral Prompts",
            "Project: Audio-Visual Recording of 5 Core Behavioral Stories"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Tough Questions, Career Gaps & Cultural Fit",
          "description": "Handle sensitive and high-pressure interview questions with grace, authenticity, and confidence.",
          "topics": [
            "Explaining Career Gaps, Role Changes & Academic Performance Confidently",
            "Reframing 'What is Your Greatest Weakness?' into a Growth Narrative",
            "Answering 'Why Should We Hire You?' & 'Why This Company?'",
            "Formulating High-Impact Questions to Ask the Hiring Manager",
            "Navigating Cross-Functional & Culture-Fit Interview Rounds",
            "Project: Live Panel Simulation with Rapid-Fire Questioning"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Live Mock Rounds & High-Value Salary Negotiation",
          "description": "Experience realistic end-to-end mock interviews and master counter-offer strategies.",
          "topics": [
            "Full-Length 45-Minute 1-on-1 Mock Interview with Detailed Rubric Scoring",
            "Psychology of Salary Negotiation: Anchoring & Silence Tactics",
            "Handling 'What is Your Current/Expected CTC?' Questions",
            "Evaluating Comp Packages: Base, Bonuses, ESOPs & Perks",
            "Writing Professional Follow-Up & Offer Acceptance/Counter Emails",
            "Final Capstone: Graduation Hiring Simulation with Hiring Experts"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      },
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Crack Your Dream Job Interview",
      "description": "Transform into a confident, articulate, and highly sought-after candidate. Join the interview communication bootcamp today.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Crack Your Dream Job Interview",
    "ctaDescription": "Transform into a confident, articulate, and highly sought-after candidate. Join the interview communication bootcamp today."
  },
  {
    "slug": "java-development",
    "title": "Java Development Program",
    "tagline": "Build enterprise-grade applications with Core Java, Object-Oriented Design, Spring Boot microservices, JPA/Hibernate, and scalable database architectures.",
    "category": "Development",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Build enterprise-grade applications with Core Java, Object-Oriented Design, Spring Boot microservices, JPA/Hibernate, and scalable distributed database architectures.",
    "metaTitle": "Java Development Program | SkillPedia",
    "metaDescription": "Master enterprise Java development in 3 months. Build scalable microservices with Core Java, Spring Boot, Hibernate, JPA, and PostgreSQL.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "color": "#EA580C",
    "tags": [
      "Core Java",
      "Spring Boot",
      "Hibernate",
      "Microservices",
      "PostgreSQL"
    ],
    "badge": {
      "iconName": "Code2",
      "text": "3-Month Enterprise Java Immersion"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Enterprise Java",
      "suffix": "Development",
      "gradient": "from-orange-600 to-amber-500"
    },
    "heroDescription": "Build enterprise-grade applications with Core Java, Object-Oriented Design, Spring Boot microservices, JPA/Hibernate, and scalable distributed database architectures.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Enterprise Scale",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Core Java 21",
        "iconName": "Terminal",
        "color": "text-orange-500"
      },
      {
        "name": "Spring Boot 3",
        "iconName": "Server",
        "color": "text-green-500"
      },
      {
        "name": "Hibernate & JPA",
        "iconName": "Database",
        "color": "text-yellow-500"
      },
      {
        "name": "Microservices & Cloud",
        "iconName": "Cpu",
        "color": "text-blue-500"
      },
      {
        "name": "PostgreSQL & MySQL",
        "iconName": "Database",
        "color": "text-blue-400"
      },
      {
        "name": "Docker & Containers",
        "iconName": "Layers",
        "color": "text-cyan-500"
      },
      {
        "name": "JUnit 5 & Mockito",
        "iconName": "CheckCircle2",
        "color": "text-emerald-500"
      },
      {
        "name": "RESTful Web Services",
        "iconName": "Globe",
        "color": "text-purple-500"
      }
    ],
    "toolsSection": {
      "title": "Enterprise Tech Stack",
      "description": "Master the battle-tested Java and Spring frameworks powering global enterprises.",
      "tools": [
        {
          "name": "Core Java 21",
          "iconName": "Terminal",
          "color": "text-orange-500"
        },
        {
          "name": "Spring Boot 3",
          "iconName": "Server",
          "color": "text-green-500"
        },
        {
          "name": "Hibernate & JPA",
          "iconName": "Database",
          "color": "text-yellow-500"
        },
        {
          "name": "Microservices & Cloud",
          "iconName": "Cpu",
          "color": "text-blue-500"
        },
        {
          "name": "PostgreSQL & MySQL",
          "iconName": "Database",
          "color": "text-blue-400"
        },
        {
          "name": "Docker & Containers",
          "iconName": "Layers",
          "color": "text-cyan-500"
        },
        {
          "name": "JUnit 5 & Mockito",
          "iconName": "CheckCircle2",
          "color": "text-emerald-500"
        },
        {
          "name": "RESTful Web Services",
          "iconName": "Globe",
          "color": "text-purple-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Core Java, OOP Mastery & Modern Concurrency",
        "description": "Master Java 21 fundamentals, memory management, object-oriented design patterns, and high-performance concurrency.",
        "topics": [
          "Java Syntax, JVM Internals (Memory Model, Garbage Collection)",
          "OOP Principles (Inheritance, Polymorphism, Encapsulation, Abstraction)",
          "Java Collections Framework (Lists, Sets, Maps) & Generics in Depth",
          "Multithreading, Concurrency Utilities & Virtual Threads (Java 21)",
          "Java Streams API, Lambda Expressions & Functional Interfaces",
          "Project: Multithreaded High-Concurrency Banking Transaction Engine"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Spring Boot 3, Spring Data JPA & Database Engineering",
        "description": "Develop production-ready backend microservices using the industry-standard Spring ecosystem.",
        "topics": [
          "Spring Core, Inversion of Control (IoC) & Dependency Injection",
          "Spring Boot 3 Architecture, Starters & Auto-Configuration",
          "Building RESTful Web Services with Spring MVC & OpenAPI/Swagger",
          "Hibernate ORM & Spring Data JPA (Entities, Repositories, Cascades)",
          "Transaction Management, Connection Pooling & Database Indexing",
          "Project: Enterprise E-Commerce Backend Service with Spring Data JPA"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Microservices, Spring Cloud, Security & Cloud Deployment",
        "description": "Architect distributed microservice systems with security, containerization, and automated testing.",
        "topics": [
          "Spring Cloud (Eureka Service Registry, API Gateway, Config Server)",
          "Spring Security 6 with JWT & OAuth 2.0 Token Authentication",
          "Asynchronous Event Messaging with Apache Kafka & RabbitMQ",
          "Unit & Integration Testing with JUnit 5, Mockito & Testcontainers",
          "Docker Containerization & Cloud Deployment on AWS",
          "Capstone Project: Distributed Banking & Payment Microservice Platform"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month Curriculum",
      "description": "From core language internals to distributed cloud microservices.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Core Java, OOP Mastery & Modern Concurrency",
          "description": "Master Java 21 fundamentals, memory management, object-oriented design patterns, and high-performance concurrency.",
          "topics": [
            "Java Syntax, JVM Internals (Memory Model, Garbage Collection)",
            "OOP Principles (Inheritance, Polymorphism, Encapsulation, Abstraction)",
            "Java Collections Framework (Lists, Sets, Maps) & Generics in Depth",
            "Multithreading, Concurrency Utilities & Virtual Threads (Java 21)",
            "Java Streams API, Lambda Expressions & Functional Interfaces",
            "Project: Multithreaded High-Concurrency Banking Transaction Engine"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Spring Boot 3, Spring Data JPA & Database Engineering",
          "description": "Develop production-ready backend microservices using the industry-standard Spring ecosystem.",
          "topics": [
            "Spring Core, Inversion of Control (IoC) & Dependency Injection",
            "Spring Boot 3 Architecture, Starters & Auto-Configuration",
            "Building RESTful Web Services with Spring MVC & OpenAPI/Swagger",
            "Hibernate ORM & Spring Data JPA (Entities, Repositories, Cascades)",
            "Transaction Management, Connection Pooling & Database Indexing",
            "Project: Enterprise E-Commerce Backend Service with Spring Data JPA"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Microservices, Spring Cloud, Security & Cloud Deployment",
          "description": "Architect distributed microservice systems with security, containerization, and automated testing.",
          "topics": [
            "Spring Cloud (Eureka Service Registry, API Gateway, Config Server)",
            "Spring Security 6 with JWT & OAuth 2.0 Token Authentication",
            "Asynchronous Event Messaging with Apache Kafka & RabbitMQ",
            "Unit & Integration Testing with JUnit 5, Mockito & Testcontainers",
            "Docker Containerization & Cloud Deployment on AWS",
            "Capstone Project: Distributed Banking & Payment Microservice Platform"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust enterprise backend systems for a Malaysia-based company. His expertise ensures that our students gain real-world insights into scalable architectures, Spring Boot, API development, and modern backend practices. He guides learners through complex database optimizations and cloud deployment strategies."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy. His hands-on expertise in large-scale distributed systems, production-grade code review, and agile product development shapes the backbone of SkillPedia's curriculum."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Master Enterprise Java?",
      "description": "Join the next cohort of Java Development. Learn Spring Boot, microservices, and prepare for high-impact backend roles.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Master Enterprise Java?",
    "ctaDescription": "Join the next cohort of Java Development. Learn Spring Boot, microservices, and prepare for high-impact backend roles."
  },
  {
    "slug": "java-selenium",
    "title": "Java + Selenium Full Track",
    "tagline": "The industry standard for test automation. Combine Core Java programming with Selenium WebDriver, Maven build management, and Cucumber BDD hybrid test frameworks.",
    "category": "Testing",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "The gold standard for test automation engineering. Master Core Java from scratch, Selenium 4 WebDriver, Cucumber BDD, TestNG, Maven, and complete Hybrid Enterprise Frameworks.",
    "metaTitle": "Java + Selenium Full Track | SkillPedia",
    "metaDescription": "Master Core Java and Selenium 4 WebDriver in 3 months. Build enterprise hybrid BDD Cucumber test frameworks, TestNG suites, Maven builds, and Jenkins CI/CD pipelines.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "color": "#F97316",
    "tags": [
      "Java for QA",
      "Selenium WebDriver",
      "Maven",
      "Cucumber BDD",
      "Hybrid Framework"
    ],
    "badge": {
      "iconName": "Coffee",
      "text": "3-Month Flagship SDET Track"
    },
    "heroHeading": {
      "prefix": "Java + Selenium",
      "highlight": "Full Track",
      "suffix": "",
      "gradient": "from-orange-500 to-amber-400"
    },
    "heroDescription": "The gold standard for test automation engineering. Master Core Java from scratch, Selenium 4 WebDriver, Cucumber BDD, TestNG, Maven, and complete Hybrid Enterprise Frameworks.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Interactive",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Hybrid BDD Framework",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Core Java 17+",
        "iconName": "Coffee",
        "color": "text-orange-500"
      },
      {
        "name": "Selenium 4 WebDriver",
        "iconName": "MonitorPlay",
        "color": "text-green-500"
      },
      {
        "name": "Cucumber BDD",
        "iconName": "Workflow",
        "color": "text-emerald-500"
      },
      {
        "name": "TestNG Runner",
        "iconName": "Cpu",
        "color": "text-blue-500"
      },
      {
        "name": "Maven Build Tool",
        "iconName": "Layers",
        "color": "text-red-500"
      },
      {
        "name": "ExtentReports & Allure",
        "iconName": "Activity",
        "color": "text-indigo-500"
      },
      {
        "name": "Jenkins CI/CD",
        "iconName": "Server",
        "color": "text-cyan-500"
      },
      {
        "name": "Log4j2 & Apache POI",
        "iconName": "FileCode",
        "color": "text-yellow-500"
      }
    ],
    "toolsSection": {
      "title": "The Java Automation Ecosystem",
      "description": "Master the complete enterprise stack used by Tier-1 product tech companies.",
      "tools": [
        {
          "name": "Core Java 17+",
          "iconName": "Coffee",
          "color": "text-orange-500"
        },
        {
          "name": "Selenium 4 WebDriver",
          "iconName": "MonitorPlay",
          "color": "text-green-500"
        },
        {
          "name": "Cucumber BDD",
          "iconName": "Workflow",
          "color": "text-emerald-500"
        },
        {
          "name": "TestNG Runner",
          "iconName": "Cpu",
          "color": "text-blue-500"
        },
        {
          "name": "Maven Build Tool",
          "iconName": "Layers",
          "color": "text-red-500"
        },
        {
          "name": "ExtentReports & Allure",
          "iconName": "Activity",
          "color": "text-indigo-500"
        },
        {
          "name": "Jenkins CI/CD",
          "iconName": "Server",
          "color": "text-cyan-500"
        },
        {
          "name": "Log4j2 & Apache POI",
          "iconName": "FileCode",
          "color": "text-yellow-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Core Java Programming for Test Engineers",
        "description": "Deep dive into Object-Oriented Java programming, collections, exception handling, and streams essential for automation.",
        "topics": [
          "Java fundamentals: Data types, operators, control flow & loop structures",
          "Object-Oriented Programming: Classes, Objects, Inheritance & Polymorphism",
          "Encapsulation, Abstraction, Interfaces & Abstract Classes",
          "Java Collections Framework: ArrayList, LinkedList, HashSet, HashMap & Iterators",
          "Exception Handling: try-catch-finally, throws & Custom Exceptions",
          "Java String manipulations, Regex, File I/O & Streams API basics"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Advanced Selenium 4 WebDriver & Framework Design",
        "description": "Master Selenium 4 WebDriver architecture, complex UI interactions, synchronization, and Page Object Model design patterns.",
        "topics": [
          "Selenium 4 architecture, dynamic locators, XPath axes & CSS Selectors",
          "Explicit Waits, ExpectedConditions & StaleElementReference resolution",
          "Handling Multi-Window tabs, Iframes, Alert dialogs & JavaScriptExecutor",
          "Page Object Model (POM) pattern & PageFactory implementation",
          "TestNG framework: XML suites, DataProviders, Listeners & Parallel testing",
          "Data-Driven framework using Apache POI and external JSON/Excel feeds"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Enterprise Cucumber BDD, Hybrid Framework & CI/CD",
        "description": "Build an enterprise-grade hybrid BDD framework from scratch, integrate reporting, and execute on Jenkins CI/CD pipelines.",
        "topics": [
          "Behavior Driven Development (BDD) concepts & Gherkin syntax (Given-When-Then)",
          "Cucumber Feature files, Step Definitions & Scenario Outlines",
          "Cucumber Hooks, Backgrounds, Tags & Dependency Injection (PicoContainer)",
          "Building a Production-Grade Hybrid Framework (POM + BDD + Data-Driven + Keyword)",
          "Logging with Log4j2, Allure/ExtentReports interactive dashboard reports",
          "CI/CD integration with Jenkins & GitHub Actions, Mock SDET Interviews & Capstone"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month In-Depth Curriculum",
      "description": "A 12-week comprehensive journey from Core Java fundamentals to enterprise Hybrid BDD automation frameworks.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Core Java Programming for Test Engineers",
          "description": "Deep dive into Object-Oriented Java programming, collections, exception handling, and streams essential for automation.",
          "topics": [
            "Java fundamentals: Data types, operators, control flow & loop structures",
            "Object-Oriented Programming: Classes, Objects, Inheritance & Polymorphism",
            "Encapsulation, Abstraction, Interfaces & Abstract Classes",
            "Java Collections Framework: ArrayList, LinkedList, HashSet, HashMap & Iterators",
            "Exception Handling: try-catch-finally, throws & Custom Exceptions",
            "Java String manipulations, Regex, File I/O & Streams API basics"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Advanced Selenium 4 WebDriver & Framework Design",
          "description": "Master Selenium 4 WebDriver architecture, complex UI interactions, synchronization, and Page Object Model design patterns.",
          "topics": [
            "Selenium 4 architecture, dynamic locators, XPath axes & CSS Selectors",
            "Explicit Waits, ExpectedConditions & StaleElementReference resolution",
            "Handling Multi-Window tabs, Iframes, Alert dialogs & JavaScriptExecutor",
            "Page Object Model (POM) pattern & PageFactory implementation",
            "TestNG framework: XML suites, DataProviders, Listeners & Parallel testing",
            "Data-Driven framework using Apache POI and external JSON/Excel feeds"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Enterprise Cucumber BDD, Hybrid Framework & CI/CD",
          "description": "Build an enterprise-grade hybrid BDD framework from scratch, integrate reporting, and execute on Jenkins CI/CD pipelines.",
          "topics": [
            "Behavior Driven Development (BDD) concepts & Gherkin syntax (Given-When-Then)",
            "Cucumber Feature files, Step Definitions & Scenario Outlines",
            "Cucumber Hooks, Backgrounds, Tags & Dependency Injection (PicoContainer)",
            "Building a Production-Grade Hybrid Framework (POM + BDD + Data-Driven + Keyword)",
            "Logging with Log4j2, Allure/ExtentReports interactive dashboard reports",
            "CI/CD integration with Jenkins & GitHub Actions, Mock SDET Interviews & Capstone"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      },
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Become a High-Paid SDET",
      "description": "Build your portfolio with an enterprise hybrid test framework and crack top SDET interview rounds.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Become a High-Paid SDET",
    "ctaDescription": "Build your portfolio with an enterprise hybrid test framework and crack top SDET interview rounds."
  },
  {
    "slug": "javascript",
    "title": "JavaScript Mastery Program",
    "tagline": "Deep dive into the core engine of the modern web. Master execution context, closures, prototypes, asynchronous JavaScript, promises, and the event loop.",
    "category": "Development",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Deep dive into the core engine of the modern web. Master execution context, closures, prototypes, asynchronous JavaScript, promises, and the event loop.",
    "metaTitle": "JavaScript Mastery Program | SkillPedia",
    "metaDescription": "Master core and advanced JavaScript in 45 days. Deep dive into execution contexts, closures, prototypes, async/await, the event loop, and design patterns.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "color": "#FACC15",
    "tags": [
      "ES6+",
      "Async/Await",
      "DOM",
      "Event Loop",
      "Closures"
    ],
    "badge": {
      "iconName": "Terminal",
      "text": "45-Day JavaScript Specialization"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Modern JavaScript",
      "suffix": "Internals",
      "gradient": "from-yellow-500 to-amber-500"
    },
    "heroDescription": "Deep dive into the core engine of the modern web. Master execution context, closures, prototypes, asynchronous JavaScript, promises, and the event loop.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Core & Advanced",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "ES6+ Modern JavaScript",
        "iconName": "Terminal",
        "color": "text-yellow-400"
      },
      {
        "name": "Async/Await & Promises",
        "iconName": "Zap",
        "color": "text-blue-400"
      },
      {
        "name": "DOM & Browser Web APIs",
        "iconName": "Globe",
        "color": "text-cyan-400"
      },
      {
        "name": "OOP & Prototypes",
        "iconName": "Layers",
        "color": "text-purple-400"
      },
      {
        "name": "Functional JS Patterns",
        "iconName": "Code2",
        "color": "text-emerald-400"
      },
      {
        "name": "Jest Unit Testing",
        "iconName": "CheckCircle2",
        "color": "text-red-400"
      }
    ],
    "toolsSection": {
      "title": "The JavaScript Ecosystem",
      "description": "Master the exact concepts and tools tested in top engineering interviews.",
      "tools": [
        {
          "name": "ES6+ Modern JavaScript",
          "iconName": "Terminal",
          "color": "text-yellow-400"
        },
        {
          "name": "Async/Await & Promises",
          "iconName": "Zap",
          "color": "text-blue-400"
        },
        {
          "name": "DOM & Browser Web APIs",
          "iconName": "Globe",
          "color": "text-cyan-400"
        },
        {
          "name": "OOP & Prototypes",
          "iconName": "Layers",
          "color": "text-purple-400"
        },
        {
          "name": "Functional JS Patterns",
          "iconName": "Code2",
          "color": "text-emerald-400"
        },
        {
          "name": "Jest Unit Testing",
          "iconName": "CheckCircle2",
          "color": "text-red-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "JavaScript Engine Internals, Scope & Closures",
        "description": "Understand how the JavaScript V8 engine parses, compiles, allocates memory, and executes your code.",
        "topics": [
          "Call Stack, Memory Heap, Execution Context & Hoisting Lifecycle",
          "Lexical Scope, Scope Chain & Mastering Closures in Practice",
          "The 'this' Keyword Binding, Call, Apply, Bind & Arrow Functions",
          "Prototypes, Prototypal Inheritance & Modern ES6 Classes",
          "Value vs Reference Types, Garbage Collection & Deep vs Shallow Cloning",
          "Project: Custom Reactive State Management & Observer Library"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Asynchronous JavaScript, Event Loop & Web APIs",
        "description": "Master asynchronous concurrency, the microtask/macrotask queues, promises, and modern data streaming.",
        "topics": [
          "Event Loop Architecture: Call Stack, Web APIs, Microtasks & Macrotasks",
          "Callbacks, Promises in Depth, Promise.all, Promise.allSettled & Error Handling",
          "Async/Await Patterns, Top-Level Await & Parallel Async Execution",
          "Fetch API, AbortController, Web Workers & IndexedDB",
          "Custom Event Emitters & Browser Custom Events",
          "Project: Real-Time Live Flight Tracker & Weather Telemetry Dashboard"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Advanced Design Patterns, Performance & Testing",
        "description": "Write clean, enterprise-grade modular JavaScript with battle-tested design patterns and automated tests.",
        "topics": [
          "Software Design Patterns: Module, Observer, Singleton, Factory & Proxy",
          "Performance Tuning: Debouncing, Throttling, Memory Leak Prevention & Profiling",
          "ES Modules (ESM) Architecture, Tree Shaking & Modern Bundlers",
          "Unit Testing Asynchronous JavaScript with Jest, Mocks & Spies",
          "TypeScript Foundations for JavaScript Engineers",
          "Capstone Project: High-Performance Lightweight JavaScript Utility Framework"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum",
      "description": "From JavaScript engine execution to enterprise design patterns and automated testing.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "JavaScript Engine Internals, Scope & Closures",
          "description": "Understand how the JavaScript V8 engine parses, compiles, allocates memory, and executes your code.",
          "topics": [
            "Call Stack, Memory Heap, Execution Context & Hoisting Lifecycle",
            "Lexical Scope, Scope Chain & Mastering Closures in Practice",
            "The 'this' Keyword Binding, Call, Apply, Bind & Arrow Functions",
            "Prototypes, Prototypal Inheritance & Modern ES6 Classes",
            "Value vs Reference Types, Garbage Collection & Deep vs Shallow Cloning",
            "Project: Custom Reactive State Management & Observer Library"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Asynchronous JavaScript, Event Loop & Web APIs",
          "description": "Master asynchronous concurrency, the microtask/macrotask queues, promises, and modern data streaming.",
          "topics": [
            "Event Loop Architecture: Call Stack, Web APIs, Microtasks & Macrotasks",
            "Callbacks, Promises in Depth, Promise.all, Promise.allSettled & Error Handling",
            "Async/Await Patterns, Top-Level Await & Parallel Async Execution",
            "Fetch API, AbortController, Web Workers & IndexedDB",
            "Custom Event Emitters & Browser Custom Events",
            "Project: Real-Time Live Flight Tracker & Weather Telemetry Dashboard"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Advanced Design Patterns, Performance & Testing",
          "description": "Write clean, enterprise-grade modular JavaScript with battle-tested design patterns and automated tests.",
          "topics": [
            "Software Design Patterns: Module, Observer, Singleton, Factory & Proxy",
            "Performance Tuning: Debouncing, Throttling, Memory Leak Prevention & Profiling",
            "ES Modules (ESM) Architecture, Tree Shaking & Modern Bundlers",
            "Unit Testing Asynchronous JavaScript with Jest, Mocks & Spies",
            "TypeScript Foundations for JavaScript Engineers",
            "Capstone Project: High-Performance Lightweight JavaScript Utility Framework"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. His deep understanding of JavaScript runtime internals, asynchronous programming patterns, and performant frontend architectures forms the core of this intensive mastery program."
      },
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. He teaches students how modern JavaScript operates seamlessly on both server and client environments with unmatched execution efficiency."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Become a JavaScript Powerhouse",
      "description": "Join the 45-Day JavaScript program. Gain deep mechanical sympathy for the web's most popular programming language.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Become a JavaScript Powerhouse",
    "ctaDescription": "Join the 45-Day JavaScript program. Gain deep mechanical sympathy for the web's most popular programming language."
  },
  {
    "slug": "javascript-typescript-test-automation",
    "title": "JavaScript & TypeScript for Test Automation",
    "tagline": "Learn modern JavaScript and TypeScript specifically tailored for SDETs and test automation engineers. Master async/await, interfaces, generics, and test runners.",
    "category": "Testing",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Level up your coding skills as an SDET. Master modern ES6+ JavaScript and strictly-typed TypeScript specifically tailored for high-speed test automation frameworks and tools like Playwright and Cypress.",
    "metaTitle": "JavaScript & TypeScript for Test Automation | SkillPedia",
    "metaDescription": "Master modern ES6+ JavaScript and TypeScript tailored for SDETs in 45 days. Learn async testing, Jest, custom assertions, and type-safe automation architecture.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "color": "#3B82F6",
    "tags": [
      "TypeScript for QA",
      "Async/Await",
      "Jest",
      "Playwright Basics",
      "Clean Tests"
    ],
    "badge": {
      "iconName": "Code2",
      "text": "45-Day SDET Coding Accelerator"
    },
    "heroHeading": {
      "prefix": "JavaScript & TypeScript",
      "highlight": "for Test Automation",
      "suffix": "",
      "gradient": "from-blue-600 to-cyan-500"
    },
    "heroDescription": "Level up your coding skills as an SDET. Master modern ES6+ JavaScript and strictly-typed TypeScript specifically tailored for high-speed test automation frameworks and tools like Playwright and Cypress.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Interactive Live Labs",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Type-Safe Automation",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Code Review",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "JavaScript ES6+",
        "iconName": "FileCode",
        "color": "text-yellow-500"
      },
      {
        "name": "TypeScript 5+",
        "iconName": "Code2",
        "color": "text-blue-500"
      },
      {
        "name": "Node.js Runtime",
        "iconName": "Terminal",
        "color": "text-green-500"
      },
      {
        "name": "Jest Test Runner",
        "iconName": "Activity",
        "color": "text-red-500"
      },
      {
        "name": "Vitest & Mocha",
        "iconName": "Cpu",
        "color": "text-purple-500"
      },
      {
        "name": "NPM / PNPM Workspaces",
        "iconName": "Layers",
        "color": "text-orange-500"
      },
      {
        "name": "ESLint & Prettier",
        "iconName": "ShieldCheck",
        "color": "text-indigo-500"
      },
      {
        "name": "GitHub Actions",
        "iconName": "GitBranch",
        "color": "text-cyan-500"
      }
    ],
    "toolsSection": {
      "title": "The JS / TS Automation Stack",
      "description": "Master the languages and runtime tools powering modern frontend and full-stack test engineering.",
      "tools": [
        {
          "name": "JavaScript ES6+",
          "iconName": "FileCode",
          "color": "text-yellow-500"
        },
        {
          "name": "TypeScript 5+",
          "iconName": "Code2",
          "color": "text-blue-500"
        },
        {
          "name": "Node.js Runtime",
          "iconName": "Terminal",
          "color": "text-green-500"
        },
        {
          "name": "Jest Test Runner",
          "iconName": "Activity",
          "color": "text-red-500"
        },
        {
          "name": "Vitest & Mocha",
          "iconName": "Cpu",
          "color": "text-purple-500"
        },
        {
          "name": "NPM / PNPM Workspaces",
          "iconName": "Layers",
          "color": "text-orange-500"
        },
        {
          "name": "ESLint & Prettier",
          "iconName": "ShieldCheck",
          "color": "text-indigo-500"
        },
        {
          "name": "GitHub Actions",
          "iconName": "GitBranch",
          "color": "text-cyan-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Modern JavaScript Essentials for SDETs",
        "description": "Master modern ECMAScript features, functional array manipulations, destructuring, and object-oriented patterns in JS.",
        "topics": [
          "Variables (let, const), Scope, Hoisting & Data types in JavaScript",
          "Arrow functions, Default parameters, Rest & Spread operators",
          "Destructuring Arrays & Objects for clean test assertions",
          "Array manipulation methods (map, filter, reduce, find, some, every)",
          "Object-Oriented JS: Classes, Constructors, Methods, Getters & Setters",
          "Modules in JS: ES Modules (import/export) vs CommonJS (require)"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Asynchronous JavaScript & TypeScript Foundations",
        "description": "Demystify the Event Loop, Promises, Async/Await patterns, and build strong TypeScript typing habits.",
        "topics": [
          "Event Loop, Callbacks, Promises & chaining async operations",
          "Async/Await patterns and robust try-catch error handling in test scripts",
          "TypeScript setup: tsconfig.json, types, type inference & type annotations",
          "Interfaces, Type Aliases, Union & Intersection types for test data schemas",
          "Enums, Generics & Utility types (Partial, Pick, Omit, Record)",
          "Strict null checking, Type Narrowing & Type Guards in test logic"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Test Frameworks, Clean Architecture & Tooling",
        "description": "Write unit/integration tests with Jest, apply SOLID design principles to test frameworks, and configure QA linters.",
        "topics": [
          "Unit & Integration testing with Jest / Vitest: Mocks, Spies & Matchers",
          "Writing clean, maintainable automation code (SOLID principles for QA)",
          "Designing type-safe Page Object Models and reusable custom assertion helpers",
          "Handling asynchronous test queues, retry policies & flaky test mitigation",
          "Configuring ESLint, Prettier & pre-commit hooks (Husky) for QA repositories",
          "Capstone: Building a Type-Safe Automation Utility Library & Test Framework"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum Blueprint",
      "description": "Master core JavaScript syntax, async queues, TypeScript type architectures, and clean code principles.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Modern JavaScript Essentials for SDETs",
          "description": "Master modern ECMAScript features, functional array manipulations, destructuring, and object-oriented patterns in JS.",
          "topics": [
            "Variables (let, const), Scope, Hoisting & Data types in JavaScript",
            "Arrow functions, Default parameters, Rest & Spread operators",
            "Destructuring Arrays & Objects for clean test assertions",
            "Array manipulation methods (map, filter, reduce, find, some, every)",
            "Object-Oriented JS: Classes, Constructors, Methods, Getters & Setters",
            "Modules in JS: ES Modules (import/export) vs CommonJS (require)"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Asynchronous JavaScript & TypeScript Foundations",
          "description": "Demystify the Event Loop, Promises, Async/Await patterns, and build strong TypeScript typing habits.",
          "topics": [
            "Event Loop, Callbacks, Promises & chaining async operations",
            "Async/Await patterns and robust try-catch error handling in test scripts",
            "TypeScript setup: tsconfig.json, types, type inference & type annotations",
            "Interfaces, Type Aliases, Union & Intersection types for test data schemas",
            "Enums, Generics & Utility types (Partial, Pick, Omit, Record)",
            "Strict null checking, Type Narrowing & Type Guards in test logic"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Test Frameworks, Clean Architecture & Tooling",
          "description": "Write unit/integration tests with Jest, apply SOLID design principles to test frameworks, and configure QA linters.",
          "topics": [
            "Unit & Integration testing with Jest / Vitest: Mocks, Spies & Matchers",
            "Writing clean, maintainable automation code (SOLID principles for QA)",
            "Designing type-safe Page Object Models and reusable custom assertion helpers",
            "Handling asynchronous test queues, retry policies & flaky test mitigation",
            "Configuring ESLint, Prettier & pre-commit hooks (Husky) for QA repositories",
            "Capstone: Building a Type-Safe Automation Utility Library & Test Framework"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "Managing Director at SkillPedia and full-stack software & AI architect. Ayush mentors engineers on test architecture, JavaScript/TypeScript test ecosystems, CI/CD pipelines, and integrating AI toolchains into modern automated test suites."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Level Up Your SDET Code",
      "description": "Write clean, type-safe, production-grade test automation code and stand out in SDET interviews.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Level Up Your SDET Code",
    "ctaDescription": "Write clean, type-safe, production-grade test automation code and stand out in SDET interviews."
  },
  {
    "slug": "manual-testing",
    "title": "Manual Testing Program",
    "tagline": "Master software quality assurance fundamentals. Learn test planning, boundary value analysis, test execution, defect reporting in Jira, and Agile QA methodologies.",
    "category": "Testing",
    "level": "Beginner",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master software quality assurance fundamentals from ground zero. Learn test planning, boundary value analysis, test execution, defect reporting in Jira, and Agile QA methodologies.",
    "metaTitle": "Manual Testing Program | SkillPedia",
    "metaDescription": "Master software quality assurance fundamentals in 45 days. Learn SDLC, STLC, test case design, black box techniques, bug life cycle, and Jira defect tracking.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
    "color": "#14B8A6",
    "tags": [
      "SDLC & STLC",
      "Test Case Design",
      "Bug Life Cycle",
      "Jira",
      "Agile Testing"
    ],
    "badge": {
      "iconName": "ClipboardCheck",
      "text": "45-Day QA Foundations Track"
    },
    "heroHeading": {
      "prefix": "Manual Testing",
      "highlight": "Mastery",
      "suffix": "",
      "gradient": "from-teal-500 to-emerald-400"
    },
    "heroDescription": "Master software quality assurance fundamentals from ground zero. Learn test planning, boundary value analysis, test execution, defect reporting in Jira, and Agile QA methodologies.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Live QA Audits",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Jira Software",
        "iconName": "Bug",
        "color": "text-blue-500"
      },
      {
        "name": "Confluence",
        "iconName": "FileText",
        "color": "text-indigo-500"
      },
      {
        "name": "Postman (API QA)",
        "iconName": "Layers",
        "color": "text-orange-500"
      },
      {
        "name": "TestRail",
        "iconName": "CheckSquare",
        "color": "text-teal-500"
      },
      {
        "name": "Chrome DevTools",
        "iconName": "Search",
        "color": "text-yellow-500"
      },
      {
        "name": "Bugzilla",
        "iconName": "ShieldCheck",
        "color": "text-red-500"
      },
      {
        "name": "Excel / RTM Matrix",
        "iconName": "FileSpreadsheet",
        "color": "text-green-500"
      },
      {
        "name": "Swagger / OpenAPI",
        "iconName": "ClipboardCheck",
        "color": "text-cyan-500"
      }
    ],
    "toolsSection": {
      "title": "The QA & Testing Toolkit",
      "description": "Master the essential platforms and documentation tools used by QA teams worldwide.",
      "tools": [
        {
          "name": "Jira Software",
          "iconName": "Bug",
          "color": "text-blue-500"
        },
        {
          "name": "Confluence",
          "iconName": "FileText",
          "color": "text-indigo-500"
        },
        {
          "name": "Postman (API QA)",
          "iconName": "Layers",
          "color": "text-orange-500"
        },
        {
          "name": "TestRail",
          "iconName": "CheckSquare",
          "color": "text-teal-500"
        },
        {
          "name": "Chrome DevTools",
          "iconName": "Search",
          "color": "text-yellow-500"
        },
        {
          "name": "Bugzilla",
          "iconName": "ShieldCheck",
          "color": "text-red-500"
        },
        {
          "name": "Excel / RTM Matrix",
          "iconName": "FileSpreadsheet",
          "color": "text-green-500"
        },
        {
          "name": "Swagger / OpenAPI",
          "iconName": "ClipboardCheck",
          "color": "text-cyan-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "QA Foundations & Software Lifecycles",
        "description": "Understand the core principles of quality assurance, software development lifecycle models, and test planning.",
        "topics": [
          "Software Development Life Cycle (SDLC) models: Waterfall, V-Model & Agile Scrum",
          "Software Testing Life Cycle (STLC) phases & entry/exit criteria",
          "Verification vs Validation & Quality Assurance (QA) vs Quality Control (QC)",
          "Understanding Web & Microservices Client-Server Architecture",
          "Static Testing: Code Reviews, Walkthroughs & Inspections",
          "Test Strategy formulation & Comprehensive Test Plan authoring"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Black Box Test Design & Execution Techniques",
        "description": "Master industry-standard test design techniques to catch edge cases, write structured test cases, and execute test runs.",
        "topics": [
          "Equivalence Class Partitioning (ECP) & Boundary Value Analysis (BVA)",
          "Decision Table Testing & State Transition Testing",
          "Use Case Testing & Error Guessing heuristics",
          "Test Scenario identification & structured Test Case writing",
          "Functional, Integration, System, Smoke & Sanity Testing",
          "Regression & Retesting strategies for production releases"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Defect Lifecycle, Jira & Live Application Audit",
        "description": "Track defects using Jira, build Requirements Traceability Matrices, and perform live comprehensive application audits.",
        "topics": [
          "Defect Life Cycle stages, Severity vs Priority classification",
          "Jira setup: Sprints, Epics, User Stories, Bug logging & workflows",
          "Requirements Traceability Matrix (RTM) generation & Sign-off reports",
          "Cross-Browser, Responsive & Usability Testing checklists",
          "Non-Functional QA: Security & Performance manual sanity audits",
          "Live Project Capstone: End-to-end Manual QA Audit of an E-Commerce Platform"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Intensive Curriculum",
      "description": "Structured in 3 progressive phases to take you from foundational theory to practical test execution.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "QA Foundations & Software Lifecycles",
          "description": "Understand the core principles of quality assurance, software development lifecycle models, and test planning.",
          "topics": [
            "Software Development Life Cycle (SDLC) models: Waterfall, V-Model & Agile Scrum",
            "Software Testing Life Cycle (STLC) phases & entry/exit criteria",
            "Verification vs Validation & Quality Assurance (QA) vs Quality Control (QC)",
            "Understanding Web & Microservices Client-Server Architecture",
            "Static Testing: Code Reviews, Walkthroughs & Inspections",
            "Test Strategy formulation & Comprehensive Test Plan authoring"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Black Box Test Design & Execution Techniques",
          "description": "Master industry-standard test design techniques to catch edge cases, write structured test cases, and execute test runs.",
          "topics": [
            "Equivalence Class Partitioning (ECP) & Boundary Value Analysis (BVA)",
            "Decision Table Testing & State Transition Testing",
            "Use Case Testing & Error Guessing heuristics",
            "Test Scenario identification & structured Test Case writing",
            "Functional, Integration, System, Smoke & Sanity Testing",
            "Regression & Retesting strategies for production releases"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Defect Lifecycle, Jira & Live Application Audit",
          "description": "Track defects using Jira, build Requirements Traceability Matrices, and perform live comprehensive application audits.",
          "topics": [
            "Defect Life Cycle stages, Severity vs Priority classification",
            "Jira setup: Sprints, Epics, User Stories, Bug logging & workflows",
            "Requirements Traceability Matrix (RTM) generation & Sign-off reports",
            "Cross-Browser, Responsive & Usability Testing checklists",
            "Non-Functional QA: Security & Performance manual sanity audits",
            "Live Project Capstone: End-to-end Manual QA Audit of an E-Commerce Platform"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO · Software Testing & Training",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with over 5 years of deep expertise in Software Testing and the Model Training Industry. He has mentored hundreds of engineers into confident, job-ready QA professionals with a structured, placement-first pedagogy."
      },
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Launch Your QA Career Today",
      "description": "Become a skilled manual testing specialist ready for high-demand software engineering teams.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Launch Your QA Career Today",
    "ctaDescription": "Become a skilled manual testing specialist ready for high-demand software engineering teams."
  },
  {
    "slug": "mobile-app-testing",
    "title": "Mobile App Testing with Appium",
    "tagline": "Test native, hybrid, and mobile web applications on Android and iOS. Master Appium 2.0, mobile gestures (swipe, tap, pinch), device cloud testing, and mobile test architecture.",
    "category": "Testing",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master mobile automation for Android and iOS native, hybrid, and web applications. Learn Appium 2.0, touch gestures, real device clouds (BrowserStack), ADB debugging, and CI/CD pipelines.",
    "metaTitle": "Mobile App Testing with Appium | SkillPedia",
    "metaDescription": "Master Android and iOS mobile app automation in 45 days. Learn Appium 2.0, touch gestures, BrowserStack real device testing, UIAutomator2, and XCUITest.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
    "color": "#8B5CF6",
    "tags": [
      "Appium 2.0",
      "Android & iOS",
      "Emulators/Real Devices",
      "Mobile Gestures"
    ],
    "badge": {
      "iconName": "Smartphone",
      "text": "45-Day Mobile Automation Track"
    },
    "heroHeading": {
      "prefix": "Mobile App Testing",
      "highlight": "with Appium",
      "suffix": "",
      "gradient": "from-violet-500 to-indigo-500"
    },
    "heroDescription": "Master mobile automation for Android and iOS native, hybrid, and web applications. Learn Appium 2.0, touch gestures, real device clouds (BrowserStack), ADB debugging, and CI/CD pipelines.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Real-Device Labs",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Android & iOS POM",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Appium Debugging",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Appium 2.0",
        "iconName": "Smartphone",
        "color": "text-violet-500"
      },
      {
        "name": "UIAutomator2 (Android)",
        "iconName": "Cpu",
        "color": "text-green-500"
      },
      {
        "name": "XCUITest (iOS)",
        "iconName": "Layers",
        "color": "text-blue-500"
      },
      {
        "name": "Android Studio & ADB",
        "iconName": "Terminal",
        "color": "text-emerald-500"
      },
      {
        "name": "BrowserStack Cloud",
        "iconName": "Server",
        "color": "text-orange-500"
      },
      {
        "name": "Appium Inspector",
        "iconName": "MonitorPlay",
        "color": "text-teal-500"
      },
      {
        "name": "TestNG & Maven",
        "iconName": "FileCode",
        "color": "text-red-500"
      },
      {
        "name": "GitHub Actions Mobile CI",
        "iconName": "GitBranch",
        "color": "text-cyan-500"
      }
    ],
    "toolsSection": {
      "title": "The Mobile QA Toolkit",
      "description": "Master the industry-leading mobile drivers, simulators, and cloud device farms.",
      "tools": [
        {
          "name": "Appium 2.0",
          "iconName": "Smartphone",
          "color": "text-violet-500"
        },
        {
          "name": "UIAutomator2 (Android)",
          "iconName": "Cpu",
          "color": "text-green-500"
        },
        {
          "name": "XCUITest (iOS)",
          "iconName": "Layers",
          "color": "text-blue-500"
        },
        {
          "name": "Android Studio & ADB",
          "iconName": "Terminal",
          "color": "text-emerald-500"
        },
        {
          "name": "BrowserStack Cloud",
          "iconName": "Server",
          "color": "text-orange-500"
        },
        {
          "name": "Appium Inspector",
          "iconName": "MonitorPlay",
          "color": "text-teal-500"
        },
        {
          "name": "TestNG & Maven",
          "iconName": "FileCode",
          "color": "text-red-500"
        },
        {
          "name": "GitHub Actions Mobile CI",
          "iconName": "GitBranch",
          "color": "text-cyan-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Mobile Testing Foundations & Appium 2.0 Setup",
        "description": "Understand mobile operating systems, native vs hybrid architectures, ADB commands, and Appium 2.0 driver setups.",
        "topics": [
          "Mobile app architectures: Native (Java/Kotlin, Swift), Hybrid (React Native, Flutter) & Mobile Web",
          "Android testing ecosystem: Android SDK, ADB commands, Emulators & APK installation",
          "iOS testing ecosystem: Xcode, iOS Simulators, IPA files & provisioning profiles",
          "Appium 2.0 modular architecture, Driver installation (uiautomator2, xcuitest)",
          "Appium Inspector setup, Desired Capabilities / W3C Options configuration",
          "Inspecting mobile UI elements: Accessibility IDs, Resource IDs, Class Chains & Predicates"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Touch Gestures, Native Interactions & WebViews",
        "description": "Automate complex mobile user journeys with W3C Touch Actions, swipe/scroll gestures, notifications, and hybrid WebViews.",
        "topics": [
          "Advanced touch actions with W3C Actions API: Tap, Long Press, Swipe & Scroll",
          "Multi-touch gestures: Pinch-to-zoom, Drag-and-drop & Slider adjustments",
          "Handling Mobile Dialogs, Push Notifications, Device Rotations & Network Toggling",
          "Automating WebViews in Hybrid apps and switching between Native & Web contexts",
          "Deep linking, Activity launches & Biometric authentication mocking",
          "Capturing device logs, performance stats (CPU/Memory usage) and screenshots"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Enterprise Mobile POM, Cloud Grids & CI/CD",
        "description": "Design a maintainable mobile Page Object Model, execute parallel test suites on BrowserStack, and integrate with CI/CD.",
        "topics": [
          "Designing a Mobile Page Object Model (POM) framework with Java & TestNG",
          "Data-driven mobile testing with external test datasets and configuration managers",
          "Executing automated test suites on Cloud Device Farms (BrowserStack, Sauce Labs)",
          "Parallel test execution across multiple Android & iOS physical devices",
          "Continuous mobile test execution in Jenkins & GitHub Actions pipelines",
          "Capstone: End-to-end Automated Test Suite for a FinTech / Ride-Sharing Mobile App"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum Blueprint",
      "description": "A hands-on mobile automation roadmap from Appium setup to cloud-based cross-device execution.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Mobile Testing Foundations & Appium 2.0 Setup",
          "description": "Understand mobile operating systems, native vs hybrid architectures, ADB commands, and Appium 2.0 driver setups.",
          "topics": [
            "Mobile app architectures: Native (Java/Kotlin, Swift), Hybrid (React Native, Flutter) & Mobile Web",
            "Android testing ecosystem: Android SDK, ADB commands, Emulators & APK installation",
            "iOS testing ecosystem: Xcode, iOS Simulators, IPA files & provisioning profiles",
            "Appium 2.0 modular architecture, Driver installation (uiautomator2, xcuitest)",
            "Appium Inspector setup, Desired Capabilities / W3C Options configuration",
            "Inspecting mobile UI elements: Accessibility IDs, Resource IDs, Class Chains & Predicates"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Touch Gestures, Native Interactions & WebViews",
          "description": "Automate complex mobile user journeys with W3C Touch Actions, swipe/scroll gestures, notifications, and hybrid WebViews.",
          "topics": [
            "Advanced touch actions with W3C Actions API: Tap, Long Press, Swipe & Scroll",
            "Multi-touch gestures: Pinch-to-zoom, Drag-and-drop & Slider adjustments",
            "Handling Mobile Dialogs, Push Notifications, Device Rotations & Network Toggling",
            "Automating WebViews in Hybrid apps and switching between Native & Web contexts",
            "Deep linking, Activity launches & Biometric authentication mocking",
            "Capturing device logs, performance stats (CPU/Memory usage) and screenshots"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Enterprise Mobile POM, Cloud Grids & CI/CD",
          "description": "Design a maintainable mobile Page Object Model, execute parallel test suites on BrowserStack, and integrate with CI/CD.",
          "topics": [
            "Designing a Mobile Page Object Model (POM) framework with Java & TestNG",
            "Data-driven mobile testing with external test datasets and configuration managers",
            "Executing automated test suites on Cloud Device Farms (BrowserStack, Sauce Labs)",
            "Parallel test execution across multiple Android & iOS physical devices",
            "Continuous mobile test execution in Jenkins & GitHub Actions pipelines",
            "Capstone: End-to-end Automated Test Suite for a FinTech / Ride-Sharing Mobile App"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      },
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master Mobile QA Engineering",
      "description": "Acquire high-demand Appium automation skills and automate Android and iOS apps on real device clouds.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master Mobile QA Engineering",
    "ctaDescription": "Acquire high-demand Appium automation skills and automate Android and iOS apps on real device clouds."
  },
  {
    "slug": "nodejs",
    "title": "Node.js Backend Program",
    "tagline": "Harness the power of asynchronous JavaScript on the backend. Create performant REST APIs, manage streams and buffers, handle file systems, and integrate secure authentication.",
    "category": "Development",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Harness the power of asynchronous JavaScript on the server. Create performant REST APIs, handle streams and buffers, connect databases, and integrate real-time WebSockets.",
    "metaTitle": "Node.js Backend Program | SkillPedia",
    "metaDescription": "Master Node.js backend development in 45 days. Build scalable REST APIs, microservices, real-time WebSockets, and database systems with Express, MongoDB, and PostgreSQL.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "color": "#22C55E",
    "tags": [
      "Express.js",
      "Event Loop",
      "REST APIs",
      "Streams & Buffers",
      "JWT"
    ],
    "badge": {
      "iconName": "Server",
      "text": "45-Day Backend Engineering Sprint"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Node.js Backend",
      "suffix": "Engineering",
      "gradient": "from-green-500 to-emerald-600"
    },
    "heroDescription": "Harness the power of asynchronous JavaScript on the server. Create performant REST APIs, handle streams and buffers, connect databases, and integrate real-time WebSockets.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Backend & APIs",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Node.js Runtime & Libuv",
        "iconName": "Server",
        "color": "text-green-500"
      },
      {
        "name": "Express.js Framework",
        "iconName": "Layers",
        "color": "text-gray-900 dark:text-white"
      },
      {
        "name": "MongoDB & Prisma ORM",
        "iconName": "Database",
        "color": "text-emerald-400"
      },
      {
        "name": "Socket.io WebSockets",
        "iconName": "Zap",
        "color": "text-yellow-400"
      },
      {
        "name": "JWT & OAuth2 Security",
        "iconName": "ShieldCheck",
        "color": "text-blue-400"
      },
      {
        "name": "Docker & PM2 Clustering",
        "iconName": "Cpu",
        "color": "text-cyan-400"
      }
    ],
    "toolsSection": {
      "title": "The Node.js Backend Stack",
      "description": "Master the server-side runtime trusted by Netflix, Uber, and PayPal.",
      "tools": [
        {
          "name": "Node.js Runtime & Libuv",
          "iconName": "Server",
          "color": "text-green-500"
        },
        {
          "name": "Express.js Framework",
          "iconName": "Layers",
          "color": "text-gray-900 dark:text-white"
        },
        {
          "name": "MongoDB & Prisma ORM",
          "iconName": "Database",
          "color": "text-emerald-400"
        },
        {
          "name": "Socket.io WebSockets",
          "iconName": "Zap",
          "color": "text-yellow-400"
        },
        {
          "name": "JWT & OAuth2 Security",
          "iconName": "ShieldCheck",
          "color": "text-blue-400"
        },
        {
          "name": "Docker & PM2 Clustering",
          "iconName": "Cpu",
          "color": "text-cyan-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Node Runtime, Architecture & Core Modules",
        "description": "Understand the V8 engine, Libuv event loop, streams, buffers, and non-blocking asynchronous I/O.",
        "topics": [
          "Node.js Architecture: V8 Engine, Libuv, Thread Pool & Event Loop Lifecycle",
          "Core Modules: fs (File System), path, events (EventEmitter), http & crypto",
          "Buffers, Binary Data, Streams (Readable, Writable, Transform) & Pipe Handling",
          "Process Management, Environment Variables & Uncaught Exception Handlers",
          "ES Modules (ESM) vs CommonJS (CJS) in Node.js Applications",
          "Project: High-Throughput Streaming File Transformation CLI Tool"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Express.js REST APIs & Database Persistence",
        "description": "Build production RESTful APIs with Express, layered routing, middleware pipelines, and ORMs.",
        "topics": [
          "Express.js Architecture, Routers, Param Middleware & Global Error Handlers",
          "Request Validation with Zod/Joi & Sanitization Best Practices",
          "MongoDB & Mongoose: Schemas, Middleware Hooks, Population & Aggregations",
          "PostgreSQL Integration with Prisma ORM & Database Connection Pooling",
          "RESTful API Versioning, Status Codes & Swagger/OpenAPI Auto-Docs",
          "Project: Scalable RESTful API for a Digital Media Platform"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Real-Time WebSockets, Security & Deployment",
        "description": "Implement real-time bidirectional communication, production authentication, and containerized deployment.",
        "topics": [
          "Authentication with JWT, Refresh Tokens, bcrypt Password Hashing & RBAC",
          "Real-Time Bidirectional Communication with Socket.io & Rooms",
          "API Security: Helmet Headers, CORS, Rate Limiting & OWASP Node Guidelines",
          "Dockerizing Node.js Apps, PM2 Cluster Mode & Graceful Shutdowns",
          "Cloud Deployment on Render/AWS & Server Health Monitoring",
          "Capstone Project: Real-Time Collaborative Team Chat & Notification Engine"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Syllabus",
      "description": "From runtime mechanics to real-time WebSockets and cloud deployment.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Node Runtime, Architecture & Core Modules",
          "description": "Understand the V8 engine, Libuv event loop, streams, buffers, and non-blocking asynchronous I/O.",
          "topics": [
            "Node.js Architecture: V8 Engine, Libuv, Thread Pool & Event Loop Lifecycle",
            "Core Modules: fs (File System), path, events (EventEmitter), http & crypto",
            "Buffers, Binary Data, Streams (Readable, Writable, Transform) & Pipe Handling",
            "Process Management, Environment Variables & Uncaught Exception Handlers",
            "ES Modules (ESM) vs CommonJS (CJS) in Node.js Applications",
            "Project: High-Throughput Streaming File Transformation CLI Tool"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Express.js REST APIs & Database Persistence",
          "description": "Build production RESTful APIs with Express, layered routing, middleware pipelines, and ORMs.",
          "topics": [
            "Express.js Architecture, Routers, Param Middleware & Global Error Handlers",
            "Request Validation with Zod/Joi & Sanitization Best Practices",
            "MongoDB & Mongoose: Schemas, Middleware Hooks, Population & Aggregations",
            "PostgreSQL Integration with Prisma ORM & Database Connection Pooling",
            "RESTful API Versioning, Status Codes & Swagger/OpenAPI Auto-Docs",
            "Project: Scalable RESTful API for a Digital Media Platform"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Real-Time WebSockets, Security & Deployment",
          "description": "Implement real-time bidirectional communication, production authentication, and containerized deployment.",
          "topics": [
            "Authentication with JWT, Refresh Tokens, bcrypt Password Hashing & RBAC",
            "Real-Time Bidirectional Communication with Socket.io & Rooms",
            "API Security: Helmet Headers, CORS, Rate Limiting & OWASP Node Guidelines",
            "Dockerizing Node.js Apps, PM2 Cluster Mode & Graceful Shutdowns",
            "Cloud Deployment on Render/AWS & Server Health Monitoring",
            "Capstone Project: Real-Time Collaborative Team Chat & Notification Engine"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise in Node.js, Express, high-concurrency microservices, and database optimization powers this intensive backend program."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He ensures SkillPedia students master production-grade backend design patterns, asynchronous error handling, and scalable API architecture."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Build Scalable Backend Services",
      "description": "Join the 45-Day Node.js Backend program. Build scalable APIs, handle real-time WebSockets, and gain production backend skills.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Build Scalable Backend Services",
    "ctaDescription": "Join the 45-Day Node.js Backend program. Build scalable APIs, handle real-time WebSockets, and gain production backend skills."
  },
  {
    "slug": "performance-testing",
    "title": "Performance Testing with JMeter",
    "tagline": "Ensure applications can handle millions of concurrent users. Learn load testing, stress testing, spike testing, bottleneck analysis, and APM monitoring using Apache JMeter.",
    "category": "Testing",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Ensure applications withstand massive scale and concurrency. Learn load testing, stress testing, spike testing, distributed execution, server metrics monitoring, and bottleneck diagnosis using Apache JMeter.",
    "metaTitle": "Performance Testing with JMeter | SkillPedia",
    "metaDescription": "Master enterprise load and performance testing in 45 days. Learn Apache JMeter, workload modeling, distributed load generation, Grafana monitoring, and bottleneck analysis.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
    "color": "#EF4444",
    "tags": [
      "Apache JMeter",
      "Load & Stress Testing",
      "Throughput",
      "Bottleneck Analysis"
    ],
    "badge": {
      "iconName": "Gauge",
      "text": "45-Day Performance Engineering"
    },
    "heroHeading": {
      "prefix": "Performance Testing",
      "highlight": "with JMeter",
      "suffix": "",
      "gradient": "from-red-500 to-rose-400"
    },
    "heroDescription": "Ensure applications withstand massive scale and concurrency. Learn load testing, stress testing, spike testing, distributed execution, server metrics monitoring, and bottleneck diagnosis using Apache JMeter.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Performance Labs",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Distributed Load Testing",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Bottleneck Review",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Apache JMeter 5.6",
        "iconName": "Gauge",
        "color": "text-red-500"
      },
      {
        "name": "Grafana & InfluxDB",
        "iconName": "BarChart3",
        "color": "text-orange-500"
      },
      {
        "name": "Prometheus APM",
        "iconName": "Activity",
        "color": "text-amber-500"
      },
      {
        "name": "BlazeMeter / Taurus",
        "iconName": "Zap",
        "color": "text-yellow-500"
      },
      {
        "name": "Wireshark Profiling",
        "iconName": "ShieldCheck",
        "color": "text-blue-500"
      },
      {
        "name": "Linux Server Monitoring",
        "iconName": "Terminal",
        "color": "text-green-500"
      },
      {
        "name": "Distributed Load Nodes",
        "iconName": "Server",
        "color": "text-indigo-500"
      },
      {
        "name": "HTML Dashboard Reports",
        "iconName": "MonitorPlay",
        "color": "text-teal-500"
      }
    ],
    "toolsSection": {
      "title": "The Performance Engineering Stack",
      "description": "Master the industry standard for load injection, server telemetry, and bottleneck diagnosis.",
      "tools": [
        {
          "name": "Apache JMeter 5.6",
          "iconName": "Gauge",
          "color": "text-red-500"
        },
        {
          "name": "Grafana & InfluxDB",
          "iconName": "BarChart3",
          "color": "text-orange-500"
        },
        {
          "name": "Prometheus APM",
          "iconName": "Activity",
          "color": "text-amber-500"
        },
        {
          "name": "BlazeMeter / Taurus",
          "iconName": "Zap",
          "color": "text-yellow-500"
        },
        {
          "name": "Wireshark Profiling",
          "iconName": "ShieldCheck",
          "color": "text-blue-500"
        },
        {
          "name": "Linux Server Monitoring",
          "iconName": "Terminal",
          "color": "text-green-500"
        },
        {
          "name": "Distributed Load Nodes",
          "iconName": "Server",
          "color": "text-indigo-500"
        },
        {
          "name": "HTML Dashboard Reports",
          "iconName": "MonitorPlay",
          "color": "text-teal-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Performance Engineering Concepts & Workload Modeling",
        "description": "Understand performance testing types, key metrics (TPS, latency, throughput), and mathematical workload modeling.",
        "topics": [
          "Performance testing fundamentals: Load, Stress, Endurance/Soak, Spike & Volume testing",
          "Key metrics: Response Time, Latency, Throughput (TPS), Error Rate & Concurrency",
          "Service Level Agreements (SLAs), SLOs & Non-Functional Requirement (NFR) analysis",
          "Workload Modeling: Calculating Think Time, Pacing & User Concurrency distributions",
          "Client-side vs Server-side performance metrics & Network bandwidth limits",
          "Apache JMeter architecture, Test Plan tree & GUI overview"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Advanced JMeter Scripting & Parameterization",
        "description": "Script realistic user behavior using dynamic correlations, extractors, CSV parameterization, and timers.",
        "topics": [
          "Thread Groups (Standard, Concurrency, Stepping Thread Groups) configuration",
          "HTTP Request Defaults, HTTP Header Manager, Cookie & Cache Managers",
          "Dynamic Correlation: Regular Expression, JSON Extractor & Boundary Extractors",
          "Parameterization with CSV Data Set Config & random data generation functions",
          "Logic Controllers (If, Loop, While, ForEach, Transaction Controllers)",
          "Timers: Constant, Gaussian Random & Uniform Random Timers for realistic pacing"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Distributed Testing, Monitoring & Bottleneck Analysis",
        "description": "Execute large-scale CLI distributed load tests, stream live metrics to Grafana, and diagnose memory/CPU bottlenecks.",
        "topics": [
          "Non-GUI (CLI) mode execution for clean, resource-light load testing",
          "Distributed Master-Slave architecture for multi-node large-scale load generation",
          "Generating interactive HTML Dashboard Reports with graphs & response percentiles",
          "Real-time metrics streaming to InfluxDB and visualizing dashboards in Grafana",
          "Server monitoring: Identifying CPU spikes, memory leaks, thread locks & DB slow queries",
          "Capstone: Enterprise E-Commerce Flash Sale Load & Stress Simulation Audit"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Curriculum Blueprint",
      "description": "A structured curriculum focused on realistic workload scripting, distributed executions, and system bottleneck isolation.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Performance Engineering Concepts & Workload Modeling",
          "description": "Understand performance testing types, key metrics (TPS, latency, throughput), and mathematical workload modeling.",
          "topics": [
            "Performance testing fundamentals: Load, Stress, Endurance/Soak, Spike & Volume testing",
            "Key metrics: Response Time, Latency, Throughput (TPS), Error Rate & Concurrency",
            "Service Level Agreements (SLAs), SLOs & Non-Functional Requirement (NFR) analysis",
            "Workload Modeling: Calculating Think Time, Pacing & User Concurrency distributions",
            "Client-side vs Server-side performance metrics & Network bandwidth limits",
            "Apache JMeter architecture, Test Plan tree & GUI overview"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Advanced JMeter Scripting & Parameterization",
          "description": "Script realistic user behavior using dynamic correlations, extractors, CSV parameterization, and timers.",
          "topics": [
            "Thread Groups (Standard, Concurrency, Stepping Thread Groups) configuration",
            "HTTP Request Defaults, HTTP Header Manager, Cookie & Cache Managers",
            "Dynamic Correlation: Regular Expression, JSON Extractor & Boundary Extractors",
            "Parameterization with CSV Data Set Config & random data generation functions",
            "Logic Controllers (If, Loop, While, ForEach, Transaction Controllers)",
            "Timers: Constant, Gaussian Random & Uniform Random Timers for realistic pacing"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Distributed Testing, Monitoring & Bottleneck Analysis",
          "description": "Execute large-scale CLI distributed load tests, stream live metrics to Grafana, and diagnose memory/CPU bottlenecks.",
          "topics": [
            "Non-GUI (CLI) mode execution for clean, resource-light load testing",
            "Distributed Master-Slave architecture for multi-node large-scale load generation",
            "Generating interactive HTML Dashboard Reports with graphs & response percentiles",
            "Real-time metrics streaming to InfluxDB and visualizing dashboards in Grafana",
            "Server monitoring: Identifying CPU spikes, memory leaks, thread locks & DB slow queries",
            "Capstone: Enterprise E-Commerce Flash Sale Load & Stress Simulation Audit"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      },
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master Scale & Performance",
      "description": "Become an elite Performance Engineer capable of benchmarking and optimizing enterprise architectures.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master Scale & Performance",
    "ctaDescription": "Become an elite Performance Engineer capable of benchmarking and optimizing enterprise architectures."
  },
  {
    "slug": "playwright-automation",
    "title": "Playwright Automation Program",
    "tagline": "Master Microsoft Playwright — the next-generation end-to-end automation tool. Test modern single-page apps across Chromium, Firefox, and WebKit with zero flaky tests.",
    "category": "Testing",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master Microsoft Playwright — the fastest, most reliable end-to-end automation engine. Test modern SPAs across Chromium, Firefox, and WebKit with zero flakiness, auto-waiting, and visual regression.",
    "metaTitle": "Playwright Automation Program | SkillPedia",
    "metaDescription": "Master next-generation test automation with Microsoft Playwright in 45 days. Learn TypeScript test authoring, auto-waiting, visual testing, network mocking, and CI/CD.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
    "color": "#2DD4BF",
    "tags": [
      "Playwright",
      "TypeScript",
      "Auto-waiting",
      "Visual Regression",
      "Cross-Browser"
    ],
    "badge": {
      "iconName": "Boxes",
      "text": "45-Day Next-Gen E2E Automation"
    },
    "heroHeading": {
      "prefix": "Playwright",
      "highlight": "Automation",
      "suffix": "",
      "gradient": "from-teal-400 to-cyan-500"
    },
    "heroDescription": "Master Microsoft Playwright — the fastest, most reliable end-to-end automation engine. Test modern SPAs across Chromium, Firefox, and WebKit with zero flakiness, auto-waiting, and visual regression.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Code-Along",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Modern E2E & Visual",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Trace Review",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Microsoft Playwright",
        "iconName": "Boxes",
        "color": "text-teal-500"
      },
      {
        "name": "TypeScript & Node.js",
        "iconName": "FileCode",
        "color": "text-blue-500"
      },
      {
        "name": "Trace Viewer",
        "iconName": "Activity",
        "color": "text-emerald-500"
      },
      {
        "name": "Visual Snapshots",
        "iconName": "Eye",
        "color": "text-purple-500"
      },
      {
        "name": "Network Interception",
        "iconName": "Globe",
        "color": "text-cyan-500"
      },
      {
        "name": "GitHub Actions CI",
        "iconName": "GitBranch",
        "color": "text-orange-500"
      },
      {
        "name": "Allure HTML Reports",
        "iconName": "Layers",
        "color": "text-red-500"
      },
      {
        "name": "Playwright Codegen",
        "iconName": "Cpu",
        "color": "text-yellow-500"
      }
    ],
    "toolsSection": {
      "title": "The Modern Playwright Stack",
      "description": "Master the cutting-edge testing ecosystem used by top modern engineering startups.",
      "tools": [
        {
          "name": "Microsoft Playwright",
          "iconName": "Boxes",
          "color": "text-teal-500"
        },
        {
          "name": "TypeScript & Node.js",
          "iconName": "FileCode",
          "color": "text-blue-500"
        },
        {
          "name": "Trace Viewer",
          "iconName": "Activity",
          "color": "text-emerald-500"
        },
        {
          "name": "Visual Snapshots",
          "iconName": "Eye",
          "color": "text-purple-500"
        },
        {
          "name": "Network Interception",
          "iconName": "Globe",
          "color": "text-cyan-500"
        },
        {
          "name": "GitHub Actions CI",
          "iconName": "GitBranch",
          "color": "text-orange-500"
        },
        {
          "name": "Allure HTML Reports",
          "iconName": "Layers",
          "color": "text-red-500"
        },
        {
          "name": "Playwright Codegen",
          "iconName": "Cpu",
          "color": "text-yellow-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Playwright Core Architecture, Locators, Actions & Test Runner Fundamentals",
        "description": "Master the modern architecture of Playwright, robust auto-waiting locators, and resilient end-to-end test execution.",
        "topics": [
          "Playwright Architecture: CDP, WebSockets, Browser Contexts & Multi-Browser Isolation",
          "Modern Locator Strategies: getByRole, getByText, getByTestId & Web-First Assertions",
          "Auto-Waiting, Actionability Checks & Flakiness Elimination Mechanics",
          "Playwright Test Runner: Config, Annotations, Tags, and Trace Viewer Debugging",
          "Playwright Codegen, VS Code Extension & Live Test Generator Tools",
          "Project: Writing Resilient Multi-Step E2E Flows for an E-Commerce Checkout"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Advanced Interactions, State & Network Mocking",
        "description": "Intercept HTTP traffic, mock backend APIs, bypass logins with storage state, and perform visual snapshot regression.",
        "topics": [
          "Handling complex UI: Popups, Dialogs, Downloads, Multi-Tabs & Iframes",
          "Storage State authentication: Bypassing repetitive login screens",
          "Network interception: Mocking REST API responses, routing & error simulation",
          "API testing directly within Playwright tests (Request context)",
          "Geolocation, Permissions, Emulated Dark Mode & Timezone mocking",
          "Visual Regression testing with pixel-perfect snapshot comparisons"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Page Object Model, Sharding & CI/CD Pipelines",
        "description": "Architect scalable TypeScript POM frameworks, shard parallel test executions, and integrate with GitHub Actions.",
        "topics": [
          "Page Object Model (POM) design pattern with TypeScript type safety",
          "Custom fixtures, test hooks & global setup/teardown configuration",
          "Parallelism, Worker processes, Retries & Test Sharding across multiple machines",
          "HTML Reports, Allure integration & Video/Screenshot capture on failure",
          "GitHub Actions workflow setup with automated matrix test runs",
          "Capstone: Full-scale automated test suite for a Modern SaaS Web Application"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day High-Impact Curriculum",
      "description": "Master modern web testing patterns, TypeScript assertions, and automated CI pipelines.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Playwright Core Architecture, Locators, Actions & Test Runner Fundamentals",
          "description": "Master the modern architecture of Playwright, robust auto-waiting locators, and resilient end-to-end test execution.",
          "topics": [
            "Playwright Architecture: CDP, WebSockets, Browser Contexts & Multi-Browser Isolation",
            "Modern Locator Strategies: getByRole, getByText, getByTestId & Web-First Assertions",
            "Auto-Waiting, Actionability Checks & Flakiness Elimination Mechanics",
            "Playwright Test Runner: Config, Annotations, Tags, and Trace Viewer Debugging",
            "Playwright Codegen, VS Code Extension & Live Test Generator Tools",
            "Project: Writing Resilient Multi-Step E2E Flows for an E-Commerce Checkout"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Advanced Interactions, State & Network Mocking",
          "description": "Intercept HTTP traffic, mock backend APIs, bypass logins with storage state, and perform visual snapshot regression.",
          "topics": [
            "Handling complex UI: Popups, Dialogs, Downloads, Multi-Tabs & Iframes",
            "Storage State authentication: Bypassing repetitive login screens",
            "Network interception: Mocking REST API responses, routing & error simulation",
            "API testing directly within Playwright tests (Request context)",
            "Geolocation, Permissions, Emulated Dark Mode & Timezone mocking",
            "Visual Regression testing with pixel-perfect snapshot comparisons"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Page Object Model, Sharding & CI/CD Pipelines",
          "description": "Architect scalable TypeScript POM frameworks, shard parallel test executions, and integrate with GitHub Actions.",
          "topics": [
            "Page Object Model (POM) design pattern with TypeScript type safety",
            "Custom fixtures, test hooks & global setup/teardown configuration",
            "Parallelism, Worker processes, Retries & Test Sharding across multiple machines",
            "HTML Reports, Allure integration & Video/Screenshot capture on failure",
            "GitHub Actions workflow setup with automated matrix test runs",
            "Capstone: Full-scale automated test suite for a Modern SaaS Web Application"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience in Selenium, Appium, Playwright, CI/CD pipelines, and test framework architecture, transforming complex automation into intuitive project-based modules."
      },
      {
        "name": "Sumit Kumar",
        "role": "Cybersecurity Expert · Cloud deployment and Security",
        "image": "/images/team/Sumit.webp",
        "bio": "Sumit is a seasoned Cybersecurity Expert with 3+ years of experience at NPCI India. His expertise spans Postman, Rest Assured, JMeter performance testing, ETL validation, and continuous testing pipelines for mission-critical financial systems."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Build Lightning-Fast Test Suites",
      "description": "Master the most modern E2E automation tool and accelerate your SDET career.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Build Lightning-Fast Test Suites",
    "ctaDescription": "Master the most modern E2E automation tool and accelerate your SDET career."
  },
  {
    "slug": "professional-communication",
    "title": "Professional Communication in the Workplace",
    "tagline": "Master day-to-day corporate communication. Write impactful business emails, run productive standup meetings, master cross-cultural collaboration, and craft clear status reports.",
    "category": "Communication",
    "level": "Intermediate to Advanced",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master the everyday language of business. Write crystal-clear emails, run agile standups, master cross-cultural team dynamics, and accelerate your workplace promotion path in 45 days.",
    "metaTitle": "Professional Communication in the Workplace | SkillPedia",
    "metaDescription": "Master business email writing, agile meeting dynamics, cross-cultural collaboration, and executive status reporting in 45 days. Thrive in corporate and remote work environments.",
    "icon": "https://cdn.simpleicons.org/googlemeet",
    "color": "#0284C7",
    "tags": [
      "Business Email Writing",
      "Meeting Etiquette",
      "Slack/Teams",
      "Status Reports"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Corporate Readiness Program"
    },
    "heroHeading": {
      "prefix": "Professional",
      "highlight": "Communication",
      "suffix": "",
      "gradient": "from-sky-500 to-blue-600"
    },
    "heroDescription": "Master the everyday language of business. Write crystal-clear emails, run agile standups, master cross-cultural team dynamics, and accelerate your workplace promotion path in 45 days.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Real-World Simulations",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Business & Remote Etiquette",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "Corporate HR Feedback",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Impactful Business Email Writing",
        "iconName": "Mail",
        "color": "text-sky-500"
      },
      {
        "name": "Standup & Sprint Demo Etiquette",
        "iconName": "Users",
        "color": "text-indigo-500"
      },
      {
        "name": "Cross-Cultural Remote Teamwork",
        "iconName": "Globe",
        "color": "text-teal-500"
      },
      {
        "name": "Slack & Teams Async Clarity",
        "iconName": "MessageSquare",
        "color": "text-amber-500"
      },
      {
        "name": "Weekly Status & Risk Reporting",
        "iconName": "FileText",
        "color": "text-blue-500"
      },
      {
        "name": "Constructive Feedback & 1-on-1s",
        "iconName": "CheckCircle2",
        "color": "text-rose-500"
      }
    ],
    "toolsSection": {
      "title": "The Professional Toolkit",
      "description": "Essential workplace communication tools and protocols for high-performing teams.",
      "tools": [
        {
          "name": "Impactful Business Email Writing",
          "iconName": "Mail",
          "color": "text-sky-500"
        },
        {
          "name": "Standup & Sprint Demo Etiquette",
          "iconName": "Users",
          "color": "text-indigo-500"
        },
        {
          "name": "Cross-Cultural Remote Teamwork",
          "iconName": "Globe",
          "color": "text-teal-500"
        },
        {
          "name": "Slack & Teams Async Clarity",
          "iconName": "MessageSquare",
          "color": "text-amber-500"
        },
        {
          "name": "Weekly Status & Risk Reporting",
          "iconName": "FileText",
          "color": "text-blue-500"
        },
        {
          "name": "Constructive Feedback & 1-on-1s",
          "iconName": "CheckCircle2",
          "color": "text-rose-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Written Corporate Excellence & Email Mastery",
        "description": "Write crisp, actionable business emails that get quick responses and establish professionalism.",
        "topics": [
          "The Anatomy of an Effective Corporate Email",
          "Writing Action-Oriented Subject Lines & Direct CTAs",
          "Tone Calibration: Formal vs Semi-Formal vs Diplomatic",
          "Slack, Teams & Async Messaging Best Practices",
          "Handling Escalations, Delays & Uncomfortable News in Writing",
          "Project: Email Redrafting Workshop with Before-and-After Analysis"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Meeting Dynamics, Standups & Active Listening",
        "description": "Make your presence felt in daily standups, sprint reviews, and client-facing conference calls.",
        "topics": [
          "The 3-Point Daily Standup Update (Yesterday, Today, Blockers)",
          "Running & Moderating Effective 30-Minute Meetings with Agendas",
          "Active Listening & Capturing Accurate Action Items (MoM)",
          "Interjecting Politely and Adding Value Without Derailing",
          "Handling Difficult Stakeholders & Defusing Meeting Conflicts",
          "Project: Live Simulated Cross-Functional Sprint Review"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Cross-Cultural Collaboration & Executive Visibility",
        "description": "Navigate global team dynamics, master status reporting, and build high executive visibility.",
        "topics": [
          "Cross-Cultural Nuances in US, UK, European & Asian Workplaces",
          "Crafting Weekly Executive Status Reports & KPI Dashboards",
          "Conducting Productive 1-on-1s with Managers and Direct Reports",
          "Professional Video & Phone Etiquette for Remote Work",
          "Building Meaningful Professional Networks Inside Your Company",
          "Final Capstone: Comprehensive Workplace Communication Portfolio"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Action-Oriented Curriculum",
      "description": "Designed to transform your daily emails, meetings, and cross-functional communication.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Written Corporate Excellence & Email Mastery",
          "description": "Write crisp, actionable business emails that get quick responses and establish professionalism.",
          "topics": [
            "The Anatomy of an Effective Corporate Email",
            "Writing Action-Oriented Subject Lines & Direct CTAs",
            "Tone Calibration: Formal vs Semi-Formal vs Diplomatic",
            "Slack, Teams & Async Messaging Best Practices",
            "Handling Escalations, Delays & Uncomfortable News in Writing",
            "Project: Email Redrafting Workshop with Before-and-After Analysis"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Meeting Dynamics, Standups & Active Listening",
          "description": "Make your presence felt in daily standups, sprint reviews, and client-facing conference calls.",
          "topics": [
            "The 3-Point Daily Standup Update (Yesterday, Today, Blockers)",
            "Running & Moderating Effective 30-Minute Meetings with Agendas",
            "Active Listening & Capturing Accurate Action Items (MoM)",
            "Interjecting Politely and Adding Value Without Derailing",
            "Handling Difficult Stakeholders & Defusing Meeting Conflicts",
            "Project: Live Simulated Cross-Functional Sprint Review"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Cross-Cultural Collaboration & Executive Visibility",
          "description": "Navigate global team dynamics, master status reporting, and build high executive visibility.",
          "topics": [
            "Cross-Cultural Nuances in US, UK, European & Asian Workplaces",
            "Crafting Weekly Executive Status Reports & KPI Dashboards",
            "Conducting Productive 1-on-1s with Managers and Direct Reports",
            "Professional Video & Phone Etiquette for Remote Work",
            "Building Meaningful Professional Networks Inside Your Company",
            "Final Capstone: Comprehensive Workplace Communication Portfolio"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      },
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Master the Language of Leadership",
      "description": "Elevate your workplace communication, lead meetings with authority, and stand out in modern corporate environments.",
      "buttonText": "Join Professional Cohort",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Master the Language of Leadership",
    "ctaDescription": "Elevate your workplace communication, lead meetings with authority, and stand out in modern corporate environments."
  },
  {
    "slug": "python-development",
    "title": "Python Development Program",
    "tagline": "Master Python programming from syntax and advanced data structures to high-performance FastAPI/Django backend services, automation scripts, and database operations.",
    "category": "Development",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master Python programming from language internals and advanced OOP to high-performance FastAPI/Django backend services, automation scripts, and cloud database operations.",
    "metaTitle": "Python Development Program | SkillPedia",
    "metaDescription": "Master Python development in 3 months. Build high-performance backend APIs, web applications, and data pipelines with Python 3, FastAPI, Django, and PostgreSQL.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "color": "#38BDF8",
    "tags": [
      "Python 3",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Data Pipelines"
    ],
    "badge": {
      "iconName": "Code2",
      "text": "3-Month High-Performance Python Track"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "Python Backend",
      "suffix": "Development",
      "gradient": "from-sky-500 to-blue-600"
    },
    "heroDescription": "Master Python programming from language internals and advanced OOP to high-performance FastAPI/Django backend services, automation scripts, and cloud database operations.",
    "stats": [
      {
        "label": "Duration",
        "value": "3 Months",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "High-Performance",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Python 3.12+",
        "iconName": "Terminal",
        "color": "text-yellow-400"
      },
      {
        "name": "FastAPI",
        "iconName": "Zap",
        "color": "text-teal-400"
      },
      {
        "name": "Django 5",
        "iconName": "Globe",
        "color": "text-green-500"
      },
      {
        "name": "PostgreSQL & SQLAlchemy",
        "iconName": "Database",
        "color": "text-blue-500"
      },
      {
        "name": "Redis Caching",
        "iconName": "Server",
        "color": "text-red-500"
      },
      {
        "name": "Celery & Background Tasks",
        "iconName": "Cpu",
        "color": "text-emerald-500"
      },
      {
        "name": "Docker & Compose",
        "iconName": "Layers",
        "color": "text-cyan-500"
      },
      {
        "name": "Pytest & CI/CD",
        "iconName": "CheckCircle2",
        "color": "text-purple-400"
      }
    ],
    "toolsSection": {
      "title": "The Python Engineering Stack",
      "description": "Master the modern tools used for scalable backend APIs and data-intensive services.",
      "tools": [
        {
          "name": "Python 3.12+",
          "iconName": "Terminal",
          "color": "text-yellow-400"
        },
        {
          "name": "FastAPI",
          "iconName": "Zap",
          "color": "text-teal-400"
        },
        {
          "name": "Django 5",
          "iconName": "Globe",
          "color": "text-green-500"
        },
        {
          "name": "PostgreSQL & SQLAlchemy",
          "iconName": "Database",
          "color": "text-blue-500"
        },
        {
          "name": "Redis Caching",
          "iconName": "Server",
          "color": "text-red-500"
        },
        {
          "name": "Celery & Background Tasks",
          "iconName": "Cpu",
          "color": "text-emerald-500"
        },
        {
          "name": "Docker & Compose",
          "iconName": "Layers",
          "color": "text-cyan-500"
        },
        {
          "name": "Pytest & CI/CD",
          "iconName": "CheckCircle2",
          "color": "text-purple-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "Python Core Mastery, Advanced Data Structures & OOP",
        "description": "Deep dive into Python internals, memory models, object-oriented patterns, and clean code practices.",
        "topics": [
          "Python Internals, Memory Management, CPython Execution Model",
          "Advanced Data Structures, List/Dict/Set Comprehensions & Iterators",
          "Object-Oriented Programming: Dunder Methods, Polymorphism & Metaclasses",
          "Decorators, Context Managers, Generators & Yield Expressions",
          "File Handling, JSON/CSV Serialization & Modular Package Architecture",
          "Project: High-Performance Data Ingestion & ETL Pipeline Engine"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "Modern Backend Frameworks: FastAPI, Django & Asyncio",
        "description": "Build high-throughput asynchronous APIs and robust web applications with modern ORMs.",
        "topics": [
          "Asynchronous Python with Asyncio, Coroutines & Event Loops",
          "FastAPI Architecture, Pydantic v2 Validation & Dependency Injection",
          "Django 5 Framework, Django ORM, Admin Panel & Django REST Framework (DRF)",
          "SQLAlchemy 2.0 Async ORM & Database Migrations with Alembic",
          "JWT Authentication, OAuth 2.0 Password Bearer & CORS Management",
          "Project: Asynchronous Multi-Tenant Microservice API with FastAPI & PostgreSQL"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Distributed Systems, Background Workers & Cloud Deployments",
        "description": "Scale Python applications with in-memory caching, asynchronous job queues, and cloud deployment.",
        "topics": [
          "In-Memory Caching with Redis & High-Speed Rate Limiting",
          "Asynchronous Task Queues with Celery & RabbitMQ/Redis Brokers",
          "Automated Unit & Integration Testing with Pytest and Testcontainers",
          "Docker Containerization, Docker Compose & Production Gunicorn/Uvicorn",
          "AWS Deployments, CI/CD with GitHub Actions & Performance Profiling",
          "Capstone Project: Scalable Real-Time Analytics & Webhook Dispatch Platform"
        ]
      }
    ],
    "curriculumSection": {
      "title": "3-Month Curriculum",
      "description": "A structured journey from Python language internals to distributed backend systems.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "Python Core Mastery, Advanced Data Structures & OOP",
          "description": "Deep dive into Python internals, memory models, object-oriented patterns, and clean code practices.",
          "topics": [
            "Python Internals, Memory Management, CPython Execution Model",
            "Advanced Data Structures, List/Dict/Set Comprehensions & Iterators",
            "Object-Oriented Programming: Dunder Methods, Polymorphism & Metaclasses",
            "Decorators, Context Managers, Generators & Yield Expressions",
            "File Handling, JSON/CSV Serialization & Modular Package Architecture",
            "Project: High-Performance Data Ingestion & ETL Pipeline Engine"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "Modern Backend Frameworks: FastAPI, Django & Asyncio",
          "description": "Build high-throughput asynchronous APIs and robust web applications with modern ORMs.",
          "topics": [
            "Asynchronous Python with Asyncio, Coroutines & Event Loops",
            "FastAPI Architecture, Pydantic v2 Validation & Dependency Injection",
            "Django 5 Framework, Django ORM, Admin Panel & Django REST Framework (DRF)",
            "SQLAlchemy 2.0 Async ORM & Database Migrations with Alembic",
            "JWT Authentication, OAuth 2.0 Password Bearer & CORS Management",
            "Project: Asynchronous Multi-Tenant Microservice API with FastAPI & PostgreSQL"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Distributed Systems, Background Workers & Cloud Deployments",
          "description": "Scale Python applications with in-memory caching, asynchronous job queues, and cloud deployment.",
          "topics": [
            "In-Memory Caching with Redis & High-Speed Rate Limiting",
            "Asynchronous Task Queues with Celery & RabbitMQ/Redis Brokers",
            "Automated Unit & Integration Testing with Pytest and Testcontainers",
            "Docker Containerization, Docker Compose & Production Gunicorn/Uvicorn",
            "AWS Deployments, CI/CD with GitHub Actions & Performance Profiling",
            "Capstone Project: Scalable Real-Time Analytics & Webhook Dispatch Platform"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He specializes in Python architectures, asynchronous FastAPI microservices, and AI-driven automation systems. His hands-on background in production-grade Python engineering guides students through building scalable backend systems."
      },
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise spans database optimizations, API development, asynchronous background workers, and containerized cloud architectures."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Master Python Development?",
      "description": "Join the next cohort of Python Development. Master FastAPI, Django, and production backend architectures with 1-on-1 mentorship.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Master Python Development?",
    "ctaDescription": "Join the next cohort of Python Development. Master FastAPI, Django, and production backend architectures with 1-on-1 mentorship."
  },
  {
    "slug": "react-js",
    "title": "React JS Program",
    "tagline": "Build dynamic, lightning-fast Single Page Applications with React 18+. Master custom hooks, state management (Redux Toolkit/Zustand), component lifecycle, and optimized rendering.",
    "category": "Development",
    "level": "Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Build dynamic, lightning-fast Single Page Applications with React 19+. Master custom hooks, global state management, component lifecycles, and optimized rendering.",
    "metaTitle": "React JS Program | SkillPedia",
    "metaDescription": "Master React 19 in 45 days. Build high-performance Single Page Applications with Custom Hooks, Zustand/Redux Toolkit, Context API, and Tailwind CSS.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "color": "#61DAFB",
    "tags": [
      "Hooks",
      "State Management",
      "Zustand",
      "React Router",
      "Component Lifecycle"
    ],
    "badge": {
      "iconName": "Globe",
      "text": "45-Day React Specialization"
    },
    "heroHeading": {
      "prefix": "Master",
      "highlight": "React JS",
      "suffix": "Engineering",
      "gradient": "from-cyan-400 to-blue-500"
    },
    "heroDescription": "Build dynamic, lightning-fast Single Page Applications with React 19+. Master custom hooks, global state management, component lifecycles, and optimized rendering.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "SPA Development",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "React 19 & JSX",
        "iconName": "Globe",
        "color": "text-cyan-400"
      },
      {
        "name": "Advanced Custom Hooks",
        "iconName": "Zap",
        "color": "text-blue-400"
      },
      {
        "name": "Zustand & Redux Toolkit",
        "iconName": "Layers",
        "color": "text-purple-400"
      },
      {
        "name": "React Router v6",
        "iconName": "Compass",
        "color": "text-emerald-400"
      },
      {
        "name": "TanStack Query (React Query)",
        "iconName": "Database",
        "color": "text-orange-400"
      },
      {
        "name": "Vite & Tailwind CSS",
        "iconName": "Layout",
        "color": "text-yellow-400"
      }
    ],
    "toolsSection": {
      "title": "The Modern React Stack",
      "description": "Master the ecosystem libraries used in high-growth startups and tech giants.",
      "tools": [
        {
          "name": "React 19 & JSX",
          "iconName": "Globe",
          "color": "text-cyan-400"
        },
        {
          "name": "Advanced Custom Hooks",
          "iconName": "Zap",
          "color": "text-blue-400"
        },
        {
          "name": "Zustand & Redux Toolkit",
          "iconName": "Layers",
          "color": "text-purple-400"
        },
        {
          "name": "React Router v6",
          "iconName": "Compass",
          "color": "text-emerald-400"
        },
        {
          "name": "TanStack Query (React Query)",
          "iconName": "Database",
          "color": "text-orange-400"
        },
        {
          "name": "Vite & Tailwind CSS",
          "iconName": "Layout",
          "color": "text-yellow-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "React Core Architecture, JSX & Essential Hooks",
        "description": "Master the mental model of React 19, JSX rendering, component lifecycle, and stateful hooks.",
        "topics": [
          "React 19 Mental Model, Virtual DOM, Fiber Architecture & Reconciliation",
          "JSX Syntax, Props, Children Props & Component Composition Patterns",
          "State Management with useState, useReducer & Controlled/Uncontrolled Forms",
          "Side Effects with useEffect, Dependency Arrays, Cleanup & AbortControllers",
          "Building Custom Component UI Library with Tailwind CSS",
          "Project: Interactive Task Management & Kanban Board SPA"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Advanced Hooks, Routing & Render Optimization",
        "description": "Scale application complexity with custom hooks, client-side routing, and performance profiling.",
        "topics": [
          "useMemo, useCallback & React.memo for Preventing Unnecessary Re-renders",
          "useRef, forwardRef, useImperativeHandle & DOM Manipulation",
          "Architecting Reusable, Type-Safe Custom Hooks",
          "React Router v6 Navigation: Nested Routes, Dynamic Params, Loaders & Actions",
          "Context API Architecture vs Prop Drilling in Medium-Scale Apps",
          "Project: Multi-Route E-Commerce Storefront with Live Cart & Filters"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Global State Management, Server Data & Production SPA",
        "description": "Integrate global state stores, async server state caching, and deploy high-performance applications.",
        "topics": [
          "Global State Management with Zustand & Redux Toolkit (RTK)",
          "Asynchronous Server State with TanStack Query (React Query)",
          "Optimistic UI Updates, Error Boundaries & Suspense for Data Fetching",
          "Vite Production Build Optimization, Code Splitting & Lazy Loading",
          "Unit Testing React Components with Vitest and React Testing Library",
          "Capstone Project: Enterprise Analytics Dashboard & Collaborative Workspace SPA"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Syllabus",
      "description": "Structured phases taking you from component architecture to enterprise SPAs.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "React Core Architecture, JSX & Essential Hooks",
          "description": "Master the mental model of React 19, JSX rendering, component lifecycle, and stateful hooks.",
          "topics": [
            "React 19 Mental Model, Virtual DOM, Fiber Architecture & Reconciliation",
            "JSX Syntax, Props, Children Props & Component Composition Patterns",
            "State Management with useState, useReducer & Controlled/Uncontrolled Forms",
            "Side Effects with useEffect, Dependency Arrays, Cleanup & AbortControllers",
            "Building Custom Component UI Library with Tailwind CSS",
            "Project: Interactive Task Management & Kanban Board SPA"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Advanced Hooks, Routing & Render Optimization",
          "description": "Scale application complexity with custom hooks, client-side routing, and performance profiling.",
          "topics": [
            "useMemo, useCallback & React.memo for Preventing Unnecessary Re-renders",
            "useRef, forwardRef, useImperativeHandle & DOM Manipulation",
            "Architecting Reusable, Type-Safe Custom Hooks",
            "React Router v6 Navigation: Nested Routes, Dynamic Params, Loaders & Actions",
            "Context API Architecture vs Prop Drilling in Medium-Scale Apps",
            "Project: Multi-Route E-Commerce Storefront with Live Cart & Filters"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Global State Management, Server Data & Production SPA",
          "description": "Integrate global state stores, async server state caching, and deploy high-performance applications.",
          "topics": [
            "Global State Management with Zustand & Redux Toolkit (RTK)",
            "Asynchronous Server State with TanStack Query (React Query)",
            "Optimistic UI Updates, Error Boundaries & Suspense for Data Fetching",
            "Vite Production Build Optimization, Code Splitting & Lazy Loading",
            "Unit Testing React Components with Vitest and React Testing Library",
            "Capstone Project: Enterprise Analytics Dashboard & Collaborative Workspace SPA"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. Having architected complex React and Next.js applications in production, he mentors students on building scalable frontend state machines, custom hooks, and modern component design systems."
      },
      {
        "name": "Saurabh Pathak",
        "role": "Backend Developer · Scalable Systems & Cloud",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust full-stack and backend systems for a Malaysia-based company. He ensures students master frontend-backend integration, REST API consumption, and caching strategies."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Build Lightning-Fast React Apps",
      "description": "Join the 45-Day React JS program. Master modern React 19 patterns and level up your frontend career.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Build Lightning-Fast React Apps",
    "ctaDescription": "Join the 45-Day React JS program. Master modern React 19 patterns and level up your frontend career."
  },
  {
    "slug": "software-development-with-ai-tools",
    "title": "Software Development with AI Tools Program",
    "tagline": "10x your software engineering productivity. Learn to leverage GitHub Copilot, Cursor AI, Claude, and LLM APIs for rapid prototyping, intelligent debugging, and automated testing.",
    "category": "Development",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "10x your software engineering productivity. Learn to leverage GitHub Copilot, Cursor AI, Claude, and LLM APIs for rapid prototyping, intelligent debugging, and automated testing.",
    "metaTitle": "Software Development with AI Tools Program | SkillPedia",
    "metaDescription": "10x your software engineering productivity in 45 days. Master GitHub Copilot, Cursor AI, Claude, LLM prompt engineering, AI code review, and building AI-native applications.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "color": "#10B981",
    "tags": [
      "GitHub Copilot",
      "Cursor AI",
      "LLM Prompting",
      "AI Code Review",
      "Workflows"
    ],
    "badge": {
      "iconName": "Cpu",
      "text": "45-Day AI-Powered Engineering Sprint"
    },
    "heroHeading": {
      "prefix": "Software Development with",
      "highlight": "AI Tools",
      "suffix": "",
      "gradient": "from-emerald-500 to-teal-500"
    },
    "heroDescription": "10x your software engineering productivity. Learn to leverage GitHub Copilot, Cursor AI, Claude, and LLM APIs for rapid prototyping, intelligent debugging, and automated testing.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "AI-Augmented",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Cursor AI & Composer",
        "iconName": "Terminal",
        "color": "text-blue-400"
      },
      {
        "name": "GitHub Copilot Workspace",
        "iconName": "Cpu",
        "color": "text-purple-400"
      },
      {
        "name": "OpenAI & Claude SDKs",
        "iconName": "Zap",
        "color": "text-teal-400"
      },
      {
        "name": "Prompt Engineering for Code",
        "iconName": "Code2",
        "color": "text-emerald-400"
      },
      {
        "name": "Local LLMs (Ollama)",
        "iconName": "Server",
        "color": "text-orange-400"
      },
      {
        "name": "AI Code Review & QA",
        "iconName": "CheckCircle2",
        "color": "text-cyan-400"
      }
    ],
    "toolsSection": {
      "title": "The AI Developer Stack",
      "description": "Master the state-of-the-art AI developer tools transforming modern software engineering.",
      "tools": [
        {
          "name": "Cursor AI & Composer",
          "iconName": "Terminal",
          "color": "text-blue-400"
        },
        {
          "name": "GitHub Copilot Workspace",
          "iconName": "Cpu",
          "color": "text-purple-400"
        },
        {
          "name": "OpenAI & Claude SDKs",
          "iconName": "Zap",
          "color": "text-teal-400"
        },
        {
          "name": "Prompt Engineering for Code",
          "iconName": "Code2",
          "color": "text-emerald-400"
        },
        {
          "name": "Local LLMs (Ollama)",
          "iconName": "Server",
          "color": "text-orange-400"
        },
        {
          "name": "AI Code Review & QA",
          "iconName": "CheckCircle2",
          "color": "text-cyan-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "AI Pair Programming & Editor Superpowers",
        "description": "Set up next-generation AI developer environments and master AI-driven code writing, autocompletion, and indexing.",
        "topics": [
          "Configuring Cursor AI: .cursorrules, Codebase Indexing & Multi-File Composer Edits",
          "GitHub Copilot Mastery: Inline Completions, Copilot Chat & Custom Prompt Shortcuts",
          "Effective Prompt Engineering for Software Engineers (Context Window, Constraints & Few-Shot)",
          "Rapid UI Prototyping & Boilerplate Generation with AI Workflows",
          "AI-Assisted Regex, SQL Query Generation & Complex Algorithmic Logic",
          "Project: Building and Deploying a Web Application at 10x Speed with Cursor"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "AI-Augmented Debugging, Refactoring & Test Generation",
        "description": "Use LLMs for root-cause analysis, legacy codebase refactoring, and comprehensive automated test synthesis.",
        "topics": [
          "Automated Bug Localization, Stack Trace Analysis & AI-Driven Root Cause Fixing",
          "AI-Assisted Code Refactoring & Modernizing Legacy Code to Modern TypeScript",
          "Generating Comprehensive Unit, Integration, and Mock Test Suites with AI",
          "Auto-Generating Architecture Diagrams, API Specs & Markdown Documentation",
          "AI-Powered Code Review Agents & Pull Request Summarization in GitHub Actions",
          "Project: AI-Powered Code Quality Audit & Automated Test Suite Generation"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Building AI-Native Applications & LLM Workflows",
        "description": "Integrate LLM APIs into production applications with function calling, structured outputs, and local models.",
        "topics": [
          "Integrating OpenAI & Anthropic Claude APIs with Next.js / Node.js & Python",
          "Function Calling, Tool Use & Structured JSON Output Extraction (Pydantic / Zod)",
          "Setting Up Local Open-Source LLMs with Ollama for Privacy & Zero API Costs",
          "Building Context-Aware AI Agents & Retrieval-Augmented Generation (RAG) Workflows",
          "AI Ethics, Token Cost Optimization, Caching & Rate Limit Management",
          "Capstone Project: Full-Stack AI-Augmented Developer Productivity Assistant"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Syllabus",
      "description": "From AI editor configuration to automated testing and building AI-native applications.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "AI Pair Programming & Editor Superpowers",
          "description": "Set up next-generation AI developer environments and master AI-driven code writing, autocompletion, and indexing.",
          "topics": [
            "Configuring Cursor AI: .cursorrules, Codebase Indexing & Multi-File Composer Edits",
            "GitHub Copilot Mastery: Inline Completions, Copilot Chat & Custom Prompt Shortcuts",
            "Effective Prompt Engineering for Software Engineers (Context Window, Constraints & Few-Shot)",
            "Rapid UI Prototyping & Boilerplate Generation with AI Workflows",
            "AI-Assisted Regex, SQL Query Generation & Complex Algorithmic Logic",
            "Project: Building and Deploying a Web Application at 10x Speed with Cursor"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "AI-Augmented Debugging, Refactoring & Test Generation",
          "description": "Use LLMs for root-cause analysis, legacy codebase refactoring, and comprehensive automated test synthesis.",
          "topics": [
            "Automated Bug Localization, Stack Trace Analysis & AI-Driven Root Cause Fixing",
            "AI-Assisted Code Refactoring & Modernizing Legacy Code to Modern TypeScript",
            "Generating Comprehensive Unit, Integration, and Mock Test Suites with AI",
            "Auto-Generating Architecture Diagrams, API Specs & Markdown Documentation",
            "AI-Powered Code Review Agents & Pull Request Summarization in GitHub Actions",
            "Project: AI-Powered Code Quality Audit & Automated Test Suite Generation"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Building AI-Native Applications & LLM Workflows",
          "description": "Integrate LLM APIs into production applications with function calling, structured outputs, and local models.",
          "topics": [
            "Integrating OpenAI & Anthropic Claude APIs with Next.js / Node.js & Python",
            "Function Calling, Tool Use & Structured JSON Output Extraction (Pydantic / Zod)",
            "Setting Up Local Open-Source LLMs with Ollama for Privacy & Zero API Costs",
            "Building Context-Aware AI Agents & Retrieval-Augmented Generation (RAG) Workflows",
            "AI Ethics, Token Cost Optimization, Caching & Rate Limit Management",
            "Capstone Project: Full-Stack AI-Augmented Developer Productivity Assistant"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He specializes in designing AI agentic workflows, LLM tool integration, and AI-augmented developer environments that supercharge developer velocity."
      },
      {
        "name": "Dharmendra Kumar Pandey",
        "role": "Founder & CEO · Software Testing & Training",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra has over 5 years of experience across software engineering, quality assurance, and model training. He guides students through leveraging AI tools to accelerate quality software delivery."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Supercharge Your Coding Velocity",
      "description": "Join the 45-Day Software Development with AI Tools program. Master AI-augmented software engineering and stay ahead of the curve.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Supercharge Your Coding Velocity",
    "ctaDescription": "Join the 45-Day Software Development with AI Tools program. Master AI-augmented software engineering and stay ahead of the curve."
  },
  {
    "slug": "software-testing-cybersecurity",
    "title": "Software Testing & Cybersecurity",
    "tagline": "Combine comprehensive software QA automation with web security testing, OWASP vulnerabilities, penetration testing, and ethical hacking.",
    "category": "Core",
    "level": "Beginner to Advanced",
    "duration": "3 Months",
    "mode": "Live Interactive Online",
    "price": "₹24,999",
    "originalPrice": "₹39,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Master the art of securing applications and ensuring flawless quality. From automated QA frameworks to ethical hacking and vulnerability assessment.",
    "metaTitle": "Software Testing & Cybersecurity | SkillPedia",
    "metaDescription": "Master the art of securing applications and ensuring flawless quality. From automated QA frameworks to ethical hacking and vulnerability assessment.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "color": "#14B8A6",
    "tags": [
      "Manual QA",
      "Selenium",
      "Cybersecurity",
      "OWASP",
      "Burp Suite"
    ],
    "badge": {
      "iconName": "ShieldCheck",
      "text": "Advanced Security & Quality"
    },
    "heroHeading": {
      "prefix": "Software Testing &",
      "highlight": "Cybersecurity",
      "suffix": "",
      "gradient": "from-teal-500 to-emerald-400"
    },
    "heroDescription": "Master the art of securing applications and ensuring flawless quality. From automated QA frameworks to ethical hacking and vulnerability assessment.",
    "stats": [
      {
        "label": "Duration",
        "value": "12 Weeks",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Project-Based",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "Selenium",
        "iconName": "MonitorPlay",
        "color": "text-green-500"
      },
      {
        "name": "Appium",
        "iconName": "Smartphone",
        "color": "text-teal-500"
      },
      {
        "name": "Postman",
        "iconName": "Activity",
        "color": "text-orange-500"
      },
      {
        "name": "Jenkins (CI/CD)",
        "iconName": "Server",
        "color": "text-blue-500"
      },
      {
        "name": "Kali Linux",
        "iconName": "Terminal",
        "color": "text-gray-800 dark:text-gray-200"
      },
      {
        "name": "Wireshark",
        "iconName": "Activity",
        "color": "text-indigo-500"
      },
      {
        "name": "Burp Suite",
        "iconName": "ShieldCheck",
        "color": "text-red-500"
      },
      {
        "name": "OWASP",
        "iconName": "Lock",
        "color": "text-purple-500"
      }
    ],
    "toolsSection": {
      "title": "The Security & QA Stack",
      "description": "Master the industry-standard tools for testing and defending applications.",
      "tools": [
        {
          "name": "Selenium",
          "iconName": "MonitorPlay",
          "color": "text-green-500"
        },
        {
          "name": "Appium",
          "iconName": "Smartphone",
          "color": "text-teal-500"
        },
        {
          "name": "Postman",
          "iconName": "Activity",
          "color": "text-orange-500"
        },
        {
          "name": "Jenkins (CI/CD)",
          "iconName": "Server",
          "color": "text-blue-500"
        },
        {
          "name": "Kali Linux",
          "iconName": "Terminal",
          "color": "text-gray-800 dark:text-gray-200"
        },
        {
          "name": "Wireshark",
          "iconName": "Activity",
          "color": "text-indigo-500"
        },
        {
          "name": "Burp Suite",
          "iconName": "ShieldCheck",
          "color": "text-red-500"
        },
        {
          "name": "OWASP",
          "iconName": "Lock",
          "color": "text-purple-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Month 1",
        "title": "QA Automation & Testing Foundations",
        "description": "Master the fundamentals of quality assurance, from manual testing strategies to powerful automation frameworks.",
        "topics": [
          "Manual vs Automated Testing methodologies",
          "Test-Driven Development (TDD) & BDD",
          "Web Automation with Selenium WebDriver",
          "Mobile Testing with Appium",
          "API Testing & Validation with Postman",
          "Project: End-to-End E-commerce Test Suite"
        ]
      },
      {
        "id": "module-2",
        "period": "Month 2",
        "title": "CI/CD Pipelines & Network Security",
        "description": "Integrate testing into the deployment pipeline and explore the fundamentals of network security.",
        "topics": [
          "Continuous Integration with Jenkins",
          "Advanced Test Frameworks (TestNG, JUnit)",
          "Network Protocols (TCP/IP, HTTP/S, DNS)",
          "Threat Modeling & Risk Assessment",
          "Introduction to Cryptography & PKI",
          "Project: Automated Pipeline & Network Scan"
        ]
      },
      {
        "id": "module-3",
        "period": "Month 3",
        "title": "Ethical Hacking, App Security & Career Prep",
        "description": "Learn to break what you build. Identify vulnerabilities and secure applications against real-world threats.",
        "topics": [
          "OWASP Top 10 Vulnerabilities",
          "Web Application Penetration Testing",
          "Vulnerability Scanning (Burp Suite, Metasploit)",
          "Communication & Behavioral Interview coaching",
          "Mock Technical Interviews & Resume Building",
          "Final Capstone Project: Secure Architecture Audit"
        ]
      }
    ],
    "curriculumSection": {
      "title": "12-Week Curriculum",
      "description": "A comprehensive journey from QA fundamentals to advanced security architecture.",
      "modules": [
        {
          "id": "module-1",
          "period": "Month 1",
          "title": "QA Automation & Testing Foundations",
          "description": "Master the fundamentals of quality assurance, from manual testing strategies to powerful automation frameworks.",
          "topics": [
            "Manual vs Automated Testing methodologies",
            "Test-Driven Development (TDD) & BDD",
            "Web Automation with Selenium WebDriver",
            "Mobile Testing with Appium",
            "API Testing & Validation with Postman",
            "Project: End-to-End E-commerce Test Suite"
          ]
        },
        {
          "id": "module-2",
          "period": "Month 2",
          "title": "CI/CD Pipelines & Network Security",
          "description": "Integrate testing into the deployment pipeline and explore the fundamentals of network security.",
          "topics": [
            "Continuous Integration with Jenkins",
            "Advanced Test Frameworks (TestNG, JUnit)",
            "Network Protocols (TCP/IP, HTTP/S, DNS)",
            "Threat Modeling & Risk Assessment",
            "Introduction to Cryptography & PKI",
            "Project: Automated Pipeline & Network Scan"
          ]
        },
        {
          "id": "module-3",
          "period": "Month 3",
          "title": "Ethical Hacking, App Security & Career Prep",
          "description": "Learn to break what you build. Identify vulnerabilities and secure applications against real-world threats.",
          "topics": [
            "OWASP Top 10 Vulnerabilities",
            "Web Application Penetration Testing",
            "Vulnerability Scanning (Burp Suite, Metasploit)",
            "Communication & Behavioral Interview coaching",
            "Mock Technical Interviews & Resume Building",
            "Final Capstone Project: Secure Architecture Audit"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Dharmendra",
        "role": "Founder · Vision & Execution",
        "image": "/images/team/Dharmendra.webp",
        "bio": "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy."
      },
      {
        "name": "Aniket",
        "role": "Head of Operations · QA & EdTech",
        "image": "/images/team/Aniket.webp",
        "bio": "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules. His industry-tested approach ensures students graduate with practical expertise in quality assurance workflows used by leading tech companies worldwide."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Ready to Defend and Automate?",
      "description": "Join the next cohort of Software Testing & Cybersecurity. Seats are extremely limited to ensure 1-on-1 mentorship.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Ready to Defend and Automate?",
    "ctaDescription": "Join the next cohort of Software Testing & Cybersecurity. Seats are extremely limited to ensure 1-on-1 mentorship."
  },
  {
    "slug": "spoken-english",
    "title": "Spoken English & Fluency Program",
    "tagline": "Master fluent and natural English speaking. Focus on accent reduction, speech rhythm, intonation, extempore speaking, and expressing ideas smoothly without mother-tongue influence (MTI).",
    "category": "Communication",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Express your thoughts fluently without pausing, translating in your head, or worrying about accents. Intensive 45-day spoken English bootcamp with live conversational sparring.",
    "metaTitle": "Spoken English & Fluency Program | SkillPedia",
    "metaDescription": "Master fluent, spontaneous, and accent-neutral English in 45 days. Intensive speech flow drills, MTI reduction, extempore speaking, and public presentation mastery.",
    "icon": "https://cdn.simpleicons.org/zoom/0B5CFF",
    "color": "#FB923C",
    "tags": [
      "Fluency Drills",
      "Accent & Intonation",
      "Extempore Speaking",
      "Public Speaking"
    ],
    "badge": {
      "iconName": "Star",
      "text": "Speech Fluency & Accent Mastery"
    },
    "heroHeading": {
      "prefix": "Spoken",
      "highlight": "English Program",
      "suffix": "",
      "gradient": "from-amber-500 to-orange-500"
    },
    "heroDescription": "Express your thoughts fluently without pausing, translating in your head, or worrying about accents. Intensive 45-day spoken English bootcamp with live conversational sparring.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Daily Speaking Drills",
        "iconName": "PlayCircle"
      },
      {
        "label": "Focus",
        "value": "Fluency & Pronunciation",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "Live Group & 1-on-1",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "MTI Reduction & Clarity",
        "iconName": "Volume2",
        "color": "text-amber-500"
      },
      {
        "name": "Accent & Intonation Modulation",
        "iconName": "Sparkles",
        "color": "text-rose-500"
      },
      {
        "name": "Extempore Speech Drills",
        "iconName": "Timer",
        "color": "text-orange-500"
      },
      {
        "name": "Idiomatic & Modern Phrasing",
        "iconName": "BookOpen",
        "color": "text-indigo-500"
      },
      {
        "name": "Public Speaking & Projection",
        "iconName": "Megaphone",
        "color": "text-teal-500"
      },
      {
        "name": "Debates & Group Discussions",
        "iconName": "MessageSquare",
        "color": "text-blue-500"
      }
    ],
    "toolsSection": {
      "title": "The Fluency Toolkit",
      "description": "Targeted tools and drills engineered to unlock rapid, effortless speech delivery.",
      "tools": [
        {
          "name": "MTI Reduction & Clarity",
          "iconName": "Volume2",
          "color": "text-amber-500"
        },
        {
          "name": "Accent & Intonation Modulation",
          "iconName": "Sparkles",
          "color": "text-rose-500"
        },
        {
          "name": "Extempore Speech Drills",
          "iconName": "Timer",
          "color": "text-orange-500"
        },
        {
          "name": "Idiomatic & Modern Phrasing",
          "iconName": "BookOpen",
          "color": "text-indigo-500"
        },
        {
          "name": "Public Speaking & Projection",
          "iconName": "Megaphone",
          "color": "text-teal-500"
        },
        {
          "name": "Debates & Group Discussions",
          "iconName": "MessageSquare",
          "color": "text-blue-500"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Speech Flow & Mother-Tongue Influence (MTI) Reduction",
        "description": "Neutralize regional accents, master syllable stress, and establish effortless rhythm in English pronunciation.",
        "topics": [
          "Identifying & Neutralizing Regional Accent Patterns (MTI)",
          "Vowel Elongation, Diphthongs & Consonant Clusters",
          "Word Stress, Sentence Stress & Natural Cadence",
          "Connected Speech: Linking, Assimilation & Elision",
          "Breath Control & Vocal Projection Techniques",
          "Project: Accent Analysis & Baseline Speech Recording"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Fluency Drills, Idioms & Spontaneous Speaking",
        "description": "Break the habit of translating from your native language. Learn to think and respond instantaneously in English.",
        "topics": [
          "Extempore Speaking on Unseen Prompts (JAM - Just A Minute)",
          "High-Frequency Idioms & Colloquial Expressions",
          "Storytelling Structures: Hook, Climax & Resolution",
          "Eliminating Fillers ('um', 'ah', 'like', 'you know')",
          "Conversational Connectors & Transition Phrases",
          "Project: Live 2-Minute Impromptu Narrative"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Public Speaking, Debates & Group Discussions",
        "description": "Command the room in meetings, seminars, and social discussions with poise, assertiveness, and eloquence.",
        "topics": [
          "Delivering Structured 3-Minute Keynote Speeches",
          "Group Discussion (GD) Strategies: Initiating, Moderating & Concluding",
          "Constructive Debating: Refuting Arguments Politely",
          "Audience Engagement & Non-Verbal Expressiveness",
          "Video-Recorded Speech Analysis with Trainer Feedback",
          "Final Capstone: Live Cohort Debate & Graduation Showcase"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Intensive Syllabus",
      "description": "From breaking the translation barrier to delivering confident impromptu speeches.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Speech Flow & Mother-Tongue Influence (MTI) Reduction",
          "description": "Neutralize regional accents, master syllable stress, and establish effortless rhythm in English pronunciation.",
          "topics": [
            "Identifying & Neutralizing Regional Accent Patterns (MTI)",
            "Vowel Elongation, Diphthongs & Consonant Clusters",
            "Word Stress, Sentence Stress & Natural Cadence",
            "Connected Speech: Linking, Assimilation & Elision",
            "Breath Control & Vocal Projection Techniques",
            "Project: Accent Analysis & Baseline Speech Recording"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Fluency Drills, Idioms & Spontaneous Speaking",
          "description": "Break the habit of translating from your native language. Learn to think and respond instantaneously in English.",
          "topics": [
            "Extempore Speaking on Unseen Prompts (JAM - Just A Minute)",
            "High-Frequency Idioms & Colloquial Expressions",
            "Storytelling Structures: Hook, Climax & Resolution",
            "Eliminating Fillers ('um', 'ah', 'like', 'you know')",
            "Conversational Connectors & Transition Phrases",
            "Project: Live 2-Minute Impromptu Narrative"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Public Speaking, Debates & Group Discussions",
          "description": "Command the room in meetings, seminars, and social discussions with poise, assertiveness, and eloquence.",
          "topics": [
            "Delivering Structured 3-Minute Keynote Speeches",
            "Group Discussion (GD) Strategies: Initiating, Moderating & Concluding",
            "Constructive Debating: Refuting Arguments Politely",
            "Audience Engagement & Non-Verbal Expressiveness",
            "Video-Recorded Speech Analysis with Trainer Feedback",
            "Final Capstone: Live Cohort Debate & Graduation Showcase"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Lavli Pandey",
        "role": "Pre-Basic Communication Trainer",
        "image": "/images/team/Lavli.webp",
        "bio": "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments."
      },
      {
        "name": "Line",
        "role": "Head of HR & Communications",
        "image": "/images/team/Line.webp",
        "bio": "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Speak Natural, Fluent English Today",
      "description": "Overcome hesitation, master speech cadence, and speak English as naturally as your first language.",
      "buttonText": "Join the Spoken English Cohort",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Speak Natural, Fluent English Today",
    "ctaDescription": "Overcome hesitation, master speech cadence, and speak English as naturally as your first language."
  },
  {
    "slug": "web-development",
    "title": "Web Development Program",
    "tagline": "Kickstart your coding journey by building beautiful, interactive, and mobile-first responsive websites using semantic HTML5, modern CSS3/Tailwind, and vanilla JavaScript.",
    "category": "Development",
    "level": "Beginner to Intermediate",
    "duration": "45 Days",
    "mode": "Live Interactive Online",
    "price": "₹14,999",
    "originalPrice": "₹24,999",
    "rating": 4.9,
    "enrolledStudents": "1,200+",
    "overview": "Kickstart your coding journey by building beautiful, interactive, and mobile-first responsive websites using semantic HTML5, modern CSS3, Tailwind CSS, and vanilla JavaScript.",
    "metaTitle": "Web Development Program | SkillPedia",
    "metaDescription": "Learn modern web development in 45 days. Master semantic HTML5, modern CSS3, JavaScript, Tailwind CSS, and responsive UI design.",
    "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "color": "#06B6D4",
    "tags": [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Responsive UI"
    ],
    "badge": {
      "iconName": "Layout",
      "text": "45-Day Accelerated Web Bootcamp"
    },
    "heroHeading": {
      "prefix": "Learn",
      "highlight": "Modern Web",
      "suffix": "Development",
      "gradient": "from-cyan-500 to-blue-600"
    },
    "heroDescription": "Kickstart your coding journey by building beautiful, interactive, and mobile-first responsive websites using semantic HTML5, modern CSS3, Tailwind CSS, and vanilla JavaScript.",
    "stats": [
      {
        "label": "Duration",
        "value": "45 Days",
        "iconName": "Calendar"
      },
      {
        "label": "Format",
        "value": "Live Classes",
        "iconName": "MonitorPlay"
      },
      {
        "label": "Focus",
        "value": "Hands-on UI/UX",
        "iconName": "Briefcase"
      },
      {
        "label": "Mentorship",
        "value": "1-on-1 Guidance",
        "iconName": "Users"
      }
    ],
    "tools": [
      {
        "name": "HTML5 Semantic Web",
        "iconName": "Layout",
        "color": "text-orange-500"
      },
      {
        "name": "CSS3 & Flexbox/Grid",
        "iconName": "Palette",
        "color": "text-blue-500"
      },
      {
        "name": "Modern JavaScript (ES6+)",
        "iconName": "Terminal",
        "color": "text-yellow-400"
      },
      {
        "name": "Tailwind CSS",
        "iconName": "Layers",
        "color": "text-cyan-400"
      },
      {
        "name": "Responsive Mobile-First",
        "iconName": "Smartphone",
        "color": "text-green-500"
      },
      {
        "name": "Git & GitHub Workflow",
        "iconName": "GitBranch",
        "color": "text-purple-400"
      }
    ],
    "toolsSection": {
      "title": "Core Web Technologies",
      "description": "Master the fundamental building blocks powering the entire World Wide Web.",
      "tools": [
        {
          "name": "HTML5 Semantic Web",
          "iconName": "Layout",
          "color": "text-orange-500"
        },
        {
          "name": "CSS3 & Flexbox/Grid",
          "iconName": "Palette",
          "color": "text-blue-500"
        },
        {
          "name": "Modern JavaScript (ES6+)",
          "iconName": "Terminal",
          "color": "text-yellow-400"
        },
        {
          "name": "Tailwind CSS",
          "iconName": "Layers",
          "color": "text-cyan-400"
        },
        {
          "name": "Responsive Mobile-First",
          "iconName": "Smartphone",
          "color": "text-green-500"
        },
        {
          "name": "Git & GitHub Workflow",
          "iconName": "GitBranch",
          "color": "text-purple-400"
        }
      ]
    },
    "curriculum": [
      {
        "id": "module-1",
        "period": "Phase 1 (Weeks 1-2)",
        "title": "Semantic Web Structure, Styling & Responsive Layouts",
        "description": "Master semantic markup, CSS Box Model, modern Flexbox, CSS Grid, and mobile-first responsive design principles.",
        "topics": [
          "Semantic HTML5 Elements, Document Hierarchy & Web Accessibility (a11y)",
          "CSS3 Box Model, Modern Typography, Color Systems & Reset Styles",
          "Mastering CSS Flexbox & CSS Grid for Complex Dynamic Layouts",
          "Mobile-First Media Queries & Cross-Device Responsive Breakpoints",
          "CSS Animations, Keyframes, Transitions & Pseudo-Classes",
          "Project: Pixel-Perfect Responsive Business Landing Page"
        ]
      },
      {
        "id": "module-2",
        "period": "Phase 2 (Weeks 3-4)",
        "title": "Interactive JavaScript, DOM Manipulation & Tailwind CSS",
        "description": "Bring static pages to life with dynamic DOM manipulation, user interactions, and utility-first styling.",
        "topics": [
          "JavaScript Fundamentals: Variables, Data Types, Control Flow & Loops",
          "DOM Traversal, Event Listeners & Dynamic DOM Injection",
          "Interactive Forms, Client-Side Validation & LocalStorage Persistence",
          "Tailwind CSS Architecture, Custom Configuration & Design Tokens",
          "Building Reusable UI Components with Tailwind and Vanilla JS",
          "Project: Interactive Task Planner & Data Visualization Dashboard"
        ]
      },
      {
        "id": "module-3",
        "period": "Phase 3 (Weeks 5-6)",
        "title": "Async Data, Modern Tooling & Production Deployment",
        "description": "Connect frontend interfaces to live web APIs, master build tools, and deploy production websites.",
        "topics": [
          "Asynchronous JavaScript, Promises, Fetch API & Consuming Public REST APIs",
          "Git Version Control: Branching, Pull Requests & GitHub Collaboration",
          "Vite Build Tool, Asset Optimization & Modern Dev Workflows",
          "Performance Tuning, Lighthouse Audits, SEO Meta Tags & Favicons",
          "Deploying Static Web Apps to Vercel, Netlify & GitHub Pages",
          "Capstone Project: Full-Featured Multi-Page Interactive Web Portal"
        ]
      }
    ],
    "curriculumSection": {
      "title": "45-Day Syllabus",
      "description": "A fast-paced, highly practical curriculum designed for rapid real-world results.",
      "modules": [
        {
          "id": "module-1",
          "period": "Phase 1 (Weeks 1-2)",
          "title": "Semantic Web Structure, Styling & Responsive Layouts",
          "description": "Master semantic markup, CSS Box Model, modern Flexbox, CSS Grid, and mobile-first responsive design principles.",
          "topics": [
            "Semantic HTML5 Elements, Document Hierarchy & Web Accessibility (a11y)",
            "CSS3 Box Model, Modern Typography, Color Systems & Reset Styles",
            "Mastering CSS Flexbox & CSS Grid for Complex Dynamic Layouts",
            "Mobile-First Media Queries & Cross-Device Responsive Breakpoints",
            "CSS Animations, Keyframes, Transitions & Pseudo-Classes",
            "Project: Pixel-Perfect Responsive Business Landing Page"
          ]
        },
        {
          "id": "module-2",
          "period": "Phase 2 (Weeks 3-4)",
          "title": "Interactive JavaScript, DOM Manipulation & Tailwind CSS",
          "description": "Bring static pages to life with dynamic DOM manipulation, user interactions, and utility-first styling.",
          "topics": [
            "JavaScript Fundamentals: Variables, Data Types, Control Flow & Loops",
            "DOM Traversal, Event Listeners & Dynamic DOM Injection",
            "Interactive Forms, Client-Side Validation & LocalStorage Persistence",
            "Tailwind CSS Architecture, Custom Configuration & Design Tokens",
            "Building Reusable UI Components with Tailwind and Vanilla JS",
            "Project: Interactive Task Planner & Data Visualization Dashboard"
          ]
        },
        {
          "id": "module-3",
          "period": "Phase 3 (Weeks 5-6)",
          "title": "Async Data, Modern Tooling & Production Deployment",
          "description": "Connect frontend interfaces to live web APIs, master build tools, and deploy production websites.",
          "topics": [
            "Asynchronous JavaScript, Promises, Fetch API & Consuming Public REST APIs",
            "Git Version Control: Branching, Pull Requests & GitHub Collaboration",
            "Vite Build Tool, Asset Optimization & Modern Dev Workflows",
            "Performance Tuning, Lighthouse Audits, SEO Meta Tags & Favicons",
            "Deploying Static Web Apps to Vercel, Netlify & GitHub Pages",
            "Capstone Project: Full-Featured Multi-Page Interactive Web Portal"
          ]
        }
      ]
    },
    "instructors": [
      {
        "name": "Saurabh Pathak",
        "role": "Backend & Web Developer · Scalable Systems",
        "image": "/images/team/Saurabh.webp",
        "bio": "Saurabh has over 3 years of software engineering experience building scalable web applications. He specializes in clean code practices, responsive UI architecture, and robust web standards, guiding beginners through step-by-step practical coding workflows."
      },
      {
        "name": "Ayush Dwivedy",
        "role": "Managing Director · Technology & Strategy",
        "image": "/images/team/Ayush.webp",
        "bio": "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He ensures that SkillPedia's web development curriculum matches contemporary frontend best practices and real-world employer requirements."
      }
    ],
    "prerequisites": [
      "Basic computer literacy and enthusiasm to learn",
      "Dedication of 3-4 hours daily for live lectures and hands-on coding",
      "A laptop or desktop with modern browser and internet connectivity"
    ],
    "outcomes": [
      "Build and deploy industry-grade production projects",
      "Master modern tooling, frameworks, and best engineering practices",
      "1-on-1 mentorship, code reviews, and mock interview coaching",
      "ATS-optimized resume, active GitHub portfolio, and job placement assistance"
    ],
    "cta": {
      "headline": "Start Building for the Web Today",
      "description": "Join the 45-Day Web Development program. Build real-world portfolio websites and launch your tech journey.",
      "buttonText": "Apply Now",
      "buttonHref": "/apply"
    },
    "ctaHeadline": "Start Building for the Web Today",
    "ctaDescription": "Join the 45-Day Web Development program. Build real-world portfolio websites and launch your tech journey."
  }
];

export const COURSES_MAP: Record<string, CourseData> = COURSES_DATA.reduce((acc, course) => {
  acc[course.slug] = course;
  return acc;
}, Object.create(null) as Record<string, CourseData>);

export function getAllCourses(): CourseData[] {
  return COURSES_DATA;
}

export function getCourseBySlug(slug: string): CourseData | undefined {
  if (!slug || typeof slug !== 'string') return undefined;
  return Object.prototype.hasOwnProperty.call(COURSES_MAP, slug) ? COURSES_MAP[slug] : undefined;
}

export function getAllCourseSlugs(): string[] {
  return COURSES_DATA.map((c) => c.slug);
}

export function getCoursesByCategory(category: string): CourseData[] {
  const normCat = category.toLowerCase();
  return COURSES_DATA.filter((c) => c.category.toLowerCase() === normCat);
}
