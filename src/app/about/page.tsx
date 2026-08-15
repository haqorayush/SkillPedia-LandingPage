import type { Metadata } from "next";
import NavigationPortalView from "@/components/sections/NavigationPortalView";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "About SkillPedia — Engineering Career Acceleration",
  description:
    "Explore SkillPedia's mission, philosophy, and curriculum designed to take you from foundational coding to production-grade software engineer in 12 weeks.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <NavigationPortalView initialSection="OUR TEAM" />
      <Footer />
    </>
  );
}
