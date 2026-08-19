import type { Metadata } from "next";
import ProgramsList from "./ProgramsList";

export const metadata: Metadata = {
  title: "Programs | SkillPedia",
  description: "Explore our comprehensive programs ranging from Full Stack Engineering to AI & ML Development, designed to accelerate your career.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#071340] pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <h1 className="text-4xl md:text-6xl font-black font-[family-name:var(--font-heading-display)] text-gray-900 dark:text-white uppercase tracking-tight mb-6">
            Our <span className="text-[#FF7A00]">Programs</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover industry-aligned courses crafted by engineering veterans. Whether you&apos;re building intelligent systems or scaling backend architecture, we have a path for you.
          </p>
        </div>
        
        <ProgramsList />
      </div>
    </main>
  );
}

