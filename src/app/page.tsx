import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import dynamic from 'next/dynamic';

const WhoWeAreSection = dynamic(() => import('@/components/sections/WhoWeAreSection'), { ssr: true });
const WhySkillPediaSection = dynamic(() => import('@/components/sections/WhySkillPediaSection'), { ssr: true });
const RoadmapSection = dynamic(() => import('@/components/sections/RoadmapSection'), { ssr: true });
const LearningFlowSection = dynamic(() => import('@/components/sections/LearningFlowSection'), { ssr: true });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection'), { ssr: true });
const CareerSection = dynamic(() => import('@/components/sections/CareerSection'), { ssr: true });
const StatsSection = dynamic(() => import('@/components/sections/StatsSection'), { ssr: true });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'), { ssr: true });
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'), { ssr: true });
const CTASection = dynamic(() => import('@/components/sections/CTASection'), { ssr: true });


export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhoWeAreSection />
        <WhySkillPediaSection />
        <RoadmapSection />
        <LearningFlowSection />
        <ProjectsSection />
        <CareerSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
