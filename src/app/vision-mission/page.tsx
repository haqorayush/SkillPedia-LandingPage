import type { Metadata } from 'next';
import VisionMissionClient from './VisionMissionClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Vision & Mission | SkillPedia',
  description: 'Empowering the next generation of engineers to bridge the gap between academic theory and industry reality.',
};

export default function VisionMissionPage() {
  return (
    <>
      <Navbar />
      <VisionMissionClient />
      <Footer />
    </>
  );
}
