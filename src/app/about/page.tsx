import type { Metadata } from "next";
import NavigationPortalView from "@/components/sections/NavigationPortalView";

export const metadata: Metadata = {
  title: "About SkillPedia — Engineering Career Acceleration",
  description:
    "Explore SkillPedia's mission, philosophy, and curriculum designed to take you from foundational coding to production-grade software engineer in 12 weeks.",
};

export default function AboutPage() {
  return <NavigationPortalView initialSection="OUR TEAM" />;
}
