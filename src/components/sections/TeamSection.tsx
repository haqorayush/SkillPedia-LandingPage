"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6";

const HeroScene = dynamic(() => import("@/components/3d/HeroScene"), {
  ssr: false,
});

interface TeamMember {
  name: string;
  title: string;
  role: string;
  photo: string;
  description: string;
  highlight: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Dharmendra Kumar Pandey",
    title: "Founder & CEO",
    role: "Software Testing & Training",
    photo: "/images/team/Dharmendra.png",
    highlight: "5+ Years · Testing & Model Training",
    description:
      "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy.",
  },
  {
    name: "Ayush Dwivedy",
    title: "Managing Director",
    role: "Technology & Strategy",
    photo: "/images/team/Ayush.png",
    highlight: "3+ Years · Software & AI Developer",
    description:
      "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy — ensuring every student receives a truly top-tier learning experience. His hands-on expertise in large-scale distributed systems, production-grade code review, and agile product development shapes the backbone of SkillPedia's curriculum.",
  },
  {
    name: "Line",
    title: "Head of HR & Communications",
    role: "People & Culture",
    photo: "/images/team/Line.png",
    highlight: "5+ Years · HR & Tech Recruitment",
    description:
      "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished.",
  },
  {
    name: "Aniket",
    title: "Head of Operations",
    role: "QA & EdTech",
    photo: "/images/team/Aniket.png",
    highlight: "5+ Years · IT & EdTech",
    description:
      "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules. His industry-tested approach ensures students graduate with practical expertise in quality assurance workflows used by leading tech companies worldwide.",
  },
  {
    name: "Lavli Pandey",
    title: "Pre-Basic Communication Trainer",
    role: "Foundation & Communication Skills",
    photo: "/images/team/Lavli.png",
    highlight: "3+ Years · Communication Training",
    description:
      "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments.",
  },
  {
    name: "Saurabh Pathak",
    title: "Backend Developer",
    role: "Backend Development",
    photo: "/images/team/Saurabh.png",
    highlight: "3+ Years · Backend Development",
    description: "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise ensures that our students gain real-world insights into scalable architectures, API development, and modern backend practices.",
  },
  {
    name: "Sumit Kumar",
    title: "SDET",
    role: "Manual, ETL, Mobile & API Testing",
    photo: "/images/team/Sumit.png",
    highlight: "3+ Years · SDET at NPCI India",
    description: "Sumit is a highly skilled Software Development Engineer in Test (SDET) with over 3 years of experience at NPCI India. His comprehensive knowledge spans Manual, ETL, Mobile, and API testing, bringing an industry-leading standard of quality assurance to our training programs.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TeamSection() {
  return (
    <div className="relative min-h-screen w-full animated-gradient-mesh bg-[#0B1F5E] dark:bg-[#071340] text-white overflow-x-hidden font-[family-name:var(--font-body)]">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 h-full w-full opacity-40 flex items-center justify-center pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-[#071340] via-[#071340]/70 to-transparent pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-radial-vignette opacity-50 pointer-events-none" />

      {/* Navigation Bar */}
      <header className="relative z-30 w-full px-6 sm:px-12 py-8 flex items-center justify-between">
        <Link href="/about" className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="text-sm font-medium tracking-wide uppercase">Back</span>
        </Link>
        <Link href="/" className="flex items-center group relative z-30">
          <div className="w-36 sm:w-44 h-10 relative drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.svg"
              alt="SkillPedia Logo"
              fill
              priority
              className="object-contain object-right"
            />
          </div>
        </Link>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-20 pt-8 pb-16 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            <span>THE PEOPLE BEHIND SKILLPEDIA</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-heading-display)] font-bold leading-tight mb-6">
            Meet Our{" "}
            <span className="text-gradient-orange">Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            A collective of industry veterans, academic toppers, and seasoned engineers united by one mission — to transform aspiring developers into production-ready professionals.
          </p>
        </motion.div>
      </section>

      {/* Team Grid */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-20 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Leadership Row — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {TEAM_MEMBERS.slice(0, 2).map((member) => (
              <TeamCard key={member.name} member={member} isLeadership />
            ))}
          </div>

          {/* Core Team Row 1 — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {TEAM_MEMBERS.slice(2, 5).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          {/* Core Team Row 2 — 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TEAM_MEMBERS.slice(5).map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bottom CTA */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl px-8 py-12 sm:px-16 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading-display)] font-bold mb-4">
              Ready to Learn from the Best?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
              Join our next batch and get mentored directly by our world-class team of instructors and industry professionals.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#FF7A00] hover:bg-[#FF9E40] text-white font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,122,0,0.4)]"
            >
              <span>Apply Now</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 sm:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
        <div className="flex items-center space-x-5 text-white/50">
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaLinkedinIn className="w-4 h-4" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaXTwitter className="w-4 h-4" />
          </Link>
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaGithub className="w-4 h-4" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
        <p className="text-white/30 text-xs tracking-wide">
          © {new Date().getFullYear()} SkillPedia. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

function TeamCard({
  member,
  isLeadership = false,
}: {
  member: TeamMember;
  isLeadership?: boolean;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 ${
        isLeadership ? "p-8" : "p-6"
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-[#FF7A00]/10 rounded-2xl" />

      <div className="relative z-10">
        {/* Photo & Info */}
        <div className={`flex ${isLeadership ? "flex-col sm:flex-row items-start sm:items-center" : "flex-col items-center text-center"} gap-5 mb-5`}>
          <div className={`relative ${isLeadership ? "w-24 h-24 sm:w-28 sm:h-28" : "w-24 h-24"} rounded-2xl overflow-hidden ring-2 ring-white/15 group-hover:ring-[#FF7A00]/40 transition-all duration-500 shrink-0`}>
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 96px, 112px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className={isLeadership ? "" : "mt-1"}>
            <h3 className={`font-[family-name:var(--font-heading-display)] font-bold text-white ${isLeadership ? "text-xl sm:text-2xl" : "text-lg"}`}>
              {member.name}
            </h3>
            <p className="text-[#FF7A00] font-semibold text-sm tracking-wide mt-1">
              {member.title}
            </p>
            <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-white/10 text-white/70 text-xs font-medium tracking-wide">
              {member.highlight}
            </div>
          </div>
        </div>

        {/* Role Tag */}
        <div className="mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#3B82F6]">
            {member.role}
          </span>
        </div>

        {/* Description */}
        <p className={`text-white/55 leading-relaxed text-justify ${isLeadership ? "text-sm" : "text-xs sm:text-sm"}`}>
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}
