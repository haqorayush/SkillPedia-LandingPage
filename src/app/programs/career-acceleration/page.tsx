import type { Metadata } from 'next';
import CareerClient from './CareerClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Career Acceleration | SkillPedia',
  description: 'Transform your communication skills, build an undeniable professional brand, and master the interview process to land your dream job.',
};

export default function CareerPage() {
  return (
    <>
      <Navbar />
      <CareerClient />
      <Footer />
    </>
  );
}
