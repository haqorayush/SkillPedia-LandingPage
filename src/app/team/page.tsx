import type { Metadata } from "next";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "Our Team — SkillPedia | Meet the Experts Behind Your Career Transformation",
  description:
    "Meet the industry veterans, FAANG engineers, and academic toppers who power SkillPedia's world-class engineering training and career acceleration programs.",
};

export default function TeamPage() {
  return <TeamSection />;
}

