"use client";

import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";

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

// ── Tier 1: Executive Leadership ──
const EXECUTIVE: TeamMember[] = [
  {
    name: "Dharmendra Kumar Pandey",
    title: "Founder & CEO",
    role: "Software Testing & Training",
    photo: "/images/team/Dharmendra.webp",
    highlight: "5+ Years · Testing & Model Training",
    description:
      "The visionary behind SkillPedia, Dharmendra founded the platform with a singular mission — to bridge the gap between academic learning and industry-readiness. With over 5 years of deep expertise in Software Testing and the Model Training Industry, he has mentored hundreds of aspiring engineers into confident, job-ready professionals. His passion for structured, outcome-driven education is the driving force behind SkillPedia's pedagogy and placement-first philosophy.",
  },
];

// ── Tier 2: Senior Leadership ──
const SENIOR_LEADERSHIP: TeamMember[] = [
  {
    name: "Ayush Dwivedy",
    title: "Managing Director",
    role: "Technology & Strategy",
    photo: "/images/team/Ayush.webp",
    highlight: "3+ Years · Software & AI Developer",
    description:
      "As Managing Director, Ayush brings over 3 years of experience as a Software and AI Developer. He architects SkillPedia's vision, technology stack, and growth strategy — ensuring every student receives a truly top-tier learning experience. His hands-on expertise in large-scale distributed systems, production-grade code review, and agile product development shapes the backbone of SkillPedia's curriculum.",
  },
];

// ── Tier 3: Department Heads ──
const DEPARTMENT_HEADS: TeamMember[] = [
  {
    name: "Line",
    title: "Head of HR & Communications",
    role: "People & Culture",
    photo: "/images/team/Line.webp",
    highlight: "5+ Years · HR & Tech Recruitment",
    description:
      "Line brings over 5 years of communication expertise in Human Resources and Technical Recruitment. At SkillPedia, she leads talent operations, student engagement, and industry partnership communications. Her deep understanding of corporate hiring pipelines and professional communication standards ensures SkillPedia students are not just technically proficient, but also articulate, interview-ready, and corporate-polished.",
  },
  {
    name: "Aniket",
    title: "Head of Operations",
    role: "QA & EdTech",
    photo: "/images/team/Aniket.webp",
    highlight: "5+ Years · IT & EdTech",
    description:
      "Aniket is SkillPedia's automation testing powerhouse, carrying over 5 years of hands-on experience across the IT and EdTech industries. Specializing in Selenium, Appium, CI/CD pipelines, and test framework architecture, he transforms complex testing methodologies into intuitive, project-based learning modules. His industry-tested approach ensures students graduate with practical expertise in quality assurance workflows used by leading tech companies worldwide.",
  },
];

// ── Tier 4: Specialists & Trainers ──
const SPECIALISTS: TeamMember[] = [
  {
    name: "Lavli Pandey",
    title: "Pre-Basic Communication Trainer",
    role: "Foundation & Communication Skills",
    photo: "/images/team/Lavli.webp",
    highlight: "3+ Years · Communication Training",
    description:
      "With over 3 years of experience as a Pre-basic communication trainer, Lavli brings exceptional communication mastery to SkillPedia's foundational training programs. She specializes in building strong verbal and written communication skills from the ground up — empowering students who are early in their journey to develop the confidence, clarity, and professional communication abilities essential for cracking interviews and thriving in corporate environments.",
  },
  {
    name: "Saurabh Pathak",
    title: "Backend Developer",
    role: "Backend Development",
    photo: "/images/team/Saurabh.webp",
    highlight: "3+ Years · Backend Development",
    description: "Saurabh is a seasoned Backend Developer with over 3 years of experience building robust backend systems for a Malaysia-based company. His expertise ensures that our students gain real-world insights into scalable architectures, API development, and modern backend practices. He guides learners through complex database optimizations and cloud deployment strategies, ensuring they are fully prepared to tackle enterprise-level backend challenges.",
  },
  {
    name: "Sumit Kumar",
    title: "Cybersecurity Expert",
    role: "Cloud deployment and Security",
    photo: "/images/team/Sumit.webp",
    highlight: "3+ Years · Cloud deployment and Security",
    description: "Sumit is a highly skilled Cybersecurity Expert with over 3 years of experience at NPCI India. His comprehensive knowledge spans Manual, ETL, Mobile, and API testing, bringing an industry-leading standard of quality assurance to our training programs. He focuses on building robust automated test frameworks and continuous testing pipelines, empowering students to master the critical skills needed for flawless software delivery.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

// ── Tier Label Component ──
function TierLabel({ label, sublabel }: { label: string; sublabel?: string }) {
  return (
    <motion.div
      variants={itemVariants}
      className="flex items-center gap-4 mb-10"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/15 to-transparent" />
      <div className="text-center shrink-0 px-2">
        <h2 className="text-sm sm:text-base font-bold uppercase tracking-[0.2em] text-[#FF7A00]">
          {label}
        </h2>
        {sublabel && (
          <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 tracking-[0.15em] mt-1">{sublabel}</p>
        )}
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/15 to-transparent" />
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <div className="relative min-h-screen w-full animated-gradient-mesh bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-[#071340] dark:via-[#0A194A] dark:to-[#071340] text-gray-900 dark:text-white overflow-x-hidden font-[family-name:var(--font-body)]">
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 h-full w-full opacity-40 flex items-center justify-center pointer-events-none">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>
      <div className="fixed inset-0 z-0 bg-gradient-to-t from-white dark:from-[#071340] via-white/70 dark:via-[#071340]/70 to-transparent pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-radial-vignette opacity-50 pointer-events-none" />



      {/* Hero Section */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-20 pt-32 sm:pt-40 pb-20 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-white/10 backdrop-blur-xl border border-blue-200 dark:border-white/20 text-blue-900 dark:text-white/90 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            <span>THE PEOPLE BEHIND SKILLPEDIA</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-heading-display)] font-bold leading-tight mb-6">
            Meet Our{" "}
            <span className="text-gradient-orange">Team</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto leading-relaxed">
            A collective of industry veterans, academic toppers, and seasoned engineers united by one mission — to transform aspiring developers into production-ready professionals.
          </p>
        </motion.div>
      </section>

      {/* ═══ Organizational Hierarchy ═══ */}
      <section className="relative z-10 px-6 sm:px-12 lg:px-20 pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-6xl mx-auto"
        >

          {/* ── Tier 1: Executive Leadership ── */}
          <TierLabel label="Executive Leadership" sublabel="Founder" />
          <div className="flex justify-center mb-16">
            {EXECUTIVE.map((member) => (
              <ExecutiveCard key={member.name} member={member} />
            ))}
          </div>

          {/* Connector line */}
          <div className="flex justify-center mb-16">
            <div className="w-px h-12 bg-gradient-to-b from-[#FF7A00]/50 to-gray-200 dark:to-white/10" />
          </div>

          {/* ── Tier 2: Senior Leadership ── */}
          <TierLabel label="Senior Leadership" sublabel="Management" />
          <div className="flex justify-center mb-16">
            {SENIOR_LEADERSHIP.map((member) => (
              <SeniorCard key={member.name} member={member} />
            ))}
          </div>

          {/* Connector line — branches out */}
          <div className="hidden lg:flex justify-center mb-16">
            <div className="relative w-full max-w-md">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 dark:from-white/15 to-gray-200 dark:to-white/8" />
              <div className="absolute top-6 left-1/4 right-1/4 h-px bg-gray-200 dark:bg-white/10" />
              <div className="absolute top-6 left-1/4 w-px h-6 bg-gray-200 dark:bg-white/8" />
              <div className="absolute top-6 right-1/4 w-px h-6 bg-gray-200 dark:bg-white/8" />
              <div className="h-12" />
            </div>
          </div>

          {/* ── Tier 3: Department Heads ── */}
          <TierLabel label="Department Heads" sublabel="Operations & People" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {DEPARTMENT_HEADS.map((member) => (
              <DepartmentCard key={member.name} member={member} />
            ))}
          </div>

          {/* Connector line — branches out to 3 */}
          <div className="hidden lg:flex justify-center mb-16">
            <div className="relative w-full max-w-2xl">
              <div className="absolute left-1/2 -translate-x-1/2 w-px h-6 bg-gradient-to-b from-gray-300 dark:from-white/12 to-gray-200 dark:to-white/5" />
              <div className="absolute top-6 left-[16.67%] right-[16.67%] h-px bg-gray-200 dark:bg-white/8" />
              <div className="absolute top-6 left-[16.67%] w-px h-6 bg-gray-200 dark:bg-white/6" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-gray-200 dark:bg-white/6" />
              <div className="absolute top-6 right-[16.67%] w-px h-6 bg-gray-200 dark:bg-white/6" />
              <div className="h-12" />
            </div>
          </div>

          {/* ── Tier 4: Specialists & Trainers ── */}
          <TierLabel label="Specialists & Trainers" sublabel="Core Team" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {SPECIALISTS.map((member) => (
              <SpecialistCard key={member.name} member={member} />
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
          <div className="bg-white shadow-xl dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl px-8 py-12 sm:px-16 sm:py-16">
            <h2 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading-display)] font-bold mb-4">
              Ready to Learn from the Best?
            </h2>
            <p className="text-gray-600 dark:text-white/60 text-lg mb-8 max-w-xl mx-auto">
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


    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TIER 1 — Executive Card (Largest, most prominent)
// ═══════════════════════════════════════════════════════════════
function ExecutiveCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full max-w-3xl bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.06] dark:to-white/[0.02] hover:from-gray-50 hover:to-gray-100 dark:hover:from-white/[0.10] dark:hover:to-white/[0.04] backdrop-blur-xl border border-gray-200 dark:border-white/15 hover:border-[#FF7A00]/30 rounded-3xl overflow-hidden transition-all duration-500 shadow-2xl hover:shadow-[0_8px_60px_rgba(255,122,0,0.12)] p-8 sm:p-10"
    >
      {/* Premium top-edge accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent opacity-60" />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#FF7A00]/8 via-transparent to-[#3B82F6]/8 rounded-3xl" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
        {/* Photo */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-2 ring-[#FF7A00]/25 group-hover:ring-[#FF7A00]/50 transition-all duration-500 shrink-0 shadow-lg">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 128px, 144px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Info */}
        <div className="text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
            <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white">
              {member.name}
            </h3>
          </div>
          <p className="text-[#FF7A00] font-bold text-base tracking-wide mb-2">
            {member.title}
          </p>
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-[#FF7A00]/90 text-xs font-semibold tracking-wide mb-4">
            {member.highlight}
          </div>
          <div className="mb-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
              {member.role}
            </span>
          </div>
          <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed text-left sm:text-justify">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TIER 2 — Senior Leadership Card
// ═══════════════════════════════════════════════════════════════
function SeniorCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative w-full max-w-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/[0.05] dark:to-white/[0.02] hover:from-gray-50 hover:to-gray-100 dark:hover:from-white/[0.09] dark:hover:to-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/12 hover:border-[#FF7A00]/30 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-[0_6px_40px_rgba(255,122,0,0.10)] p-7 sm:p-9"
    >
      {/* Top-edge accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent opacity-40" />

      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#FF7A00]/8 via-transparent to-[#3B82F6]/6 rounded-2xl" />

      <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6">
        {/* Photo */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden ring-2 ring-[#FF7A00]/20 group-hover:ring-[#FF7A00]/40 transition-all duration-500 shrink-0 shadow-md">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 112px, 128px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Info */}
        <div className="text-center sm:text-left flex-1">
          <h3 className="text-xl sm:text-2xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white mb-1">
            {member.name}
          </h3>
          <p className="text-[#FF7A00] font-semibold text-sm tracking-wide mb-2">
            {member.title}
          </p>
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/20 text-[#FF7A00]/90 text-xs font-medium tracking-wide mb-3">
            {member.highlight}
          </div>
          <div className="mb-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#60A5FA]">
              {member.role}
            </span>
          </div>
          <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed text-left sm:text-justify">
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TIER 3 — Department Head Card
// ═══════════════════════════════════════════════════════════════
function DepartmentCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white hover:bg-gray-50 dark:bg-white/[0.04] dark:hover:bg-white/[0.08] backdrop-blur-xl border border-gray-200 hover:border-gray-300 dark:border-white/10 dark:hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/8 p-7"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#3B82F6]/8 via-transparent to-[#FF7A00]/6 rounded-2xl" />

      <div className="relative z-10">
        {/* Photo & Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-5">
          <div className="relative w-24 h-24 sm:w-26 sm:h-26 rounded-2xl overflow-hidden ring-2 ring-gray-200 dark:ring-white/15 group-hover:ring-[#FF7A00]/30 transition-all duration-500 shrink-0">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 96px, 104px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h3 className="text-xl font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white">
              {member.name}
            </h3>
            <p className="text-[#FF7A00] font-semibold text-sm tracking-wide mt-1">
              {member.title}
            </p>
            <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/80 text-xs font-medium tracking-wide">
              {member.highlight}
            </div>
          </div>
        </div>

        {/* Role Tag */}
        <div className="mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#60A5FA]">
            {member.role}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed text-left sm:text-justify">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════
// TIER 4 — Specialist / Trainer Card (Compact)
// ═══════════════════════════════════════════════════════════════
function SpecialistCard({ member }: { member: TeamMember }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white hover:bg-gray-50 dark:bg-white/[0.03] dark:hover:bg-white/[0.07] backdrop-blur-xl border border-gray-200 hover:border-gray-300 dark:border-white/8 dark:hover:border-white/18 rounded-2xl overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/6 p-6"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#3B82F6]/6 via-transparent to-[#FF7A00]/4 rounded-2xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Photo */}
        <div className="relative w-20 h-20 rounded-xl overflow-hidden ring-2 ring-gray-200 dark:ring-white/10 group-hover:ring-[#FF7A00]/30 transition-all duration-500 shrink-0 mb-4">
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="80px"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* Info */}
        <h3 className="text-lg font-[family-name:var(--font-heading-display)] font-bold text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="text-[#FF7A00] font-semibold text-xs tracking-wide mt-1">
          {member.title}
        </p>
        <div className="inline-flex items-center mt-2 px-3 py-1 rounded-full bg-gray-200 dark:bg-white/10 text-gray-700 dark:text-white/80 text-[11px] font-medium tracking-wide mb-3">
          {member.highlight}
        </div>

        {/* Role Tag */}
        <div className="mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#60A5FA]">
            {member.role}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-white/55 text-xs sm:text-sm leading-relaxed text-left sm:text-justify">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}
