import type { Metadata } from 'next';
import ApplyClient from './ApplyClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Apply Now | SkillPedia',
  description: 'Apply for SkillPedia engineering programs and accelerate your career.',
};

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <ApplyClient />
      <Footer />
    </>
  );
}
