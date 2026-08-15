import type { Metadata } from 'next';
import FullStackClient from './FullStackClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Full Stack Engineering Program | SkillPedia',
  description: 'Master modern web development in 12 weeks. Build scalable applications from scratch using React, Next.js, Node.js, and more with our Full Stack Engineering program.',
};

export default function FullStackEngineeringPage() {
  return (
    <>
      <Navbar />
      <FullStackClient />
      <Footer />
    </>
  );
}
