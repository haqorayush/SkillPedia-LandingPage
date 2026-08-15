import type { Metadata } from 'next';
import CeoClient from './CeoClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Message from the CEO | SkillPedia',
  description: 'A message from our Founder & CEO, Dharmendra Kumar Pandey.',
};

export default function CeoMessagePage() {
  return (
    <>
      <Navbar />
      <CeoClient />
      <Footer />
    </>
  );
}
