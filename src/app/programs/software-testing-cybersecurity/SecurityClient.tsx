'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
  Terminal, ShieldCheck, Lock, CheckCircle2, 
  ArrowRight, Users, Calendar, Briefcase,
  MonitorPlay, Server, Smartphone, Activity
} from 'lucide-react';

const TECH_STACK = [
  { name: 'Selenium', icon: <MonitorPlay className="w-6 h-6" />, color: 'text-green-500' },
  { name: 'Appium', icon: <Smartphone className="w-6 h-6" />, color: 'text-teal-500' },
  { name: 'Postman', icon: <Activity className="w-6 h-6" />, color: 'text-orange-500' },
  { name: 'Jenkins (CI/CD)', icon: <Server className="w-6 h-6" />, color: 'text-blue-500' },
  { name: 'Kali Linux', icon: <Terminal className="w-6 h-6" />, color: 'text-gray-800 dark:text-gray-200' },
  { name: 'Wireshark', icon: <Activity className="w-6 h-6" />, color: 'text-indigo-500' },
  { name: 'Burp Suite', icon: <ShieldCheck className="w-6 h-6" />, color: 'text-red-500' },
  { name: 'OWASP', icon: <Lock className="w-6 h-6" />, color: 'text-purple-500' },
];

const CURRICULUM = [
  {
    month: "Month 1",
    title: "QA Automation & Testing Foundations",
    description: "Master the fundamentals of quality assurance, from manual testing strategies to powerful automation frameworks.",
    topics: [
      "Manual vs Automated Testing methodologies",
      "Test-Driven Development (TDD) & BDD",
      "Web Automation with Selenium WebDriver",
      "Mobile Testing with Appium",
      "API Testing & Validation with Postman",
      "Project: End-to-End E-commerce Test Suite"
    ]
  },
  {
    month: "Month 2",
    title: "CI/CD Pipelines & Network Security",
    description: "Integrate testing into the deployment pipeline and explore the fundamentals of network security.",
    topics: [
      "Continuous Integration with Jenkins",
      "Advanced Test Frameworks (TestNG, JUnit)",
      "Network Protocols (TCP/IP, HTTP/S, DNS)",
      "Threat Modeling & Risk Assessment",
      "Introduction to Cryptography & PKI",
      "Project: Automated Pipeline & Network Scan"
    ]
  },
  {
    month: "Month 3",
    title: "Ethical Hacking, App Security & Career Prep",
    description: "Learn to break what you build. Identify vulnerabilities and secure applications against real-world threats.",
    topics: [
      "OWASP Top 10 Vulnerabilities",
      "Web Application Penetration Testing",
      "Vulnerability Scanning (Burp Suite, Metasploit)",
      "Communication & Behavioral Interview coaching",
      "Mock Technical Interviews & Resume Building",
      "Final Capstone Project: Secure Architecture Audit"
    ]
  }
];

const INSTRUCTORS = [
  {
    name: "Dharmendra",
    role: "Founder · Vision & Execution",
    image: "/images/team/Dharmendra.png",
    bio: "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy."
  },
  {
    name: "Aniket",
    role: "Head of Operations · QA & EdTech",
    image: "/images/team/Aniket.png",
    bio: "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules. His industry-tested approach ensures students graduate with practical expertise in quality assurance workflows used by leading tech companies worldwide."
  }
];

export default function SecurityClient() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="min-h-screen bg-white dark:bg-[#071340]">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white dark:from-[#0B1F5E] dark:to-[#071340]" />
          <motion.div 
            style={{ y, opacity }}
            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-teal-400/10 dark:bg-teal-600/20 blur-[100px] pointer-events-none"
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
            className="absolute -bottom-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-emerald-400/10 dark:bg-emerald-600/10 blur-[100px] pointer-events-none"
          />
        </div>

        <div className="container relative z-10 mx-auto px-6 max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Advanced Security & Quality</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight font-[family-name:var(--font-heading)]">
              Software Testing & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-400">Cybersecurity</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Master the art of securing applications and ensuring flawless quality. From automated QA frameworks to ethical hacking and vulnerability assessment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/apply" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FF7A00] text-white font-semibold text-lg hover:bg-[#FF7A00]/90 transition-all shadow-lg shadow-[#FF7A00]/25 flex items-center justify-center gap-2 group"
              >
                Apply for Next Cohort
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#curriculum" 
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white font-semibold text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all text-center"
              >
                View Curriculum
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
              {[
                { label: "Duration", value: "12 Weeks", icon: <Calendar /> },
                { label: "Format", value: "Live Classes", icon: <MonitorPlay /> },
                { label: "Focus", value: "Project-Based", icon: <Briefcase /> },
                { label: "Mentorship", value: "1-on-1 Guidance", icon: <Users /> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-4">
                  <div className="text-gray-400 dark:text-gray-500 mb-2">{stat.icon}</div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-teal-900/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">The Security & QA Stack</h2>
            <p className="text-gray-600 dark:text-gray-400">Master the industry-standard tools for testing and defending applications.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:shadow-teal-500/10 transition-all group"
              >
                <div className={`p-3 rounded-xl bg-gray-50 dark:bg-white/5 \${tech.color} group-hover:scale-110 transition-transform`}>
                  {tech.icon}
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">12-Week Curriculum</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">A comprehensive journey from QA fundamentals to advanced security architecture.</p>
          </div>

          <div className="space-y-8">
            {CURRICULUM.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline Line for Mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-teal-200 dark:bg-teal-800 md:hidden" />
                
                <div className="bg-white dark:bg-[#0B1F5E] rounded-3xl p-8 md:p-10 border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-2 h-full bg-[#FF7A00] opacity-50 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <span className="text-[#FF7A00] font-bold tracking-wider text-sm uppercase mb-2 block">{module.month}</span>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{module.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">{module.description}</p>
                  
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {module.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-24 bg-gray-50 dark:bg-[#0B1F5E]/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Learn From Experts</h2>
            <p className="text-gray-600 dark:text-gray-400">Taught by engineers who enforce quality and security daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {INSTRUCTORS.map((instructor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white dark:bg-[#0B1F5E] p-8 rounded-3xl border border-gray-100 dark:border-white/5 shadow-lg flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gray-50 dark:border-[#071340] shadow-inner bg-gray-100 dark:bg-white/5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={instructor.image} alt={instructor.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{instructor.name}</h3>
                <p className="text-[#FF7A00] font-medium mb-4">{instructor.role}</p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {instructor.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-600 dark:bg-[#0B1F5E]" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />
        
        <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Defend and Automate?</h2>
          <p className="text-teal-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Join the next cohort of Software Testing & Cybersecurity. Seats are extremely limited to ensure 1-on-1 mentorship.
          </p>
          <Link 
            href="/apply" 
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-teal-700 font-bold text-lg hover:scale-105 transition-transform shadow-xl"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </main>
  );
}
