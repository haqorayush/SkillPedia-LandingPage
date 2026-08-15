import type { Metadata } from 'next';
import AIMLClient from './AIMLClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'AI & ML Development Program | SkillPedia',
  description: 'Dive deep into artificial intelligence. Master machine learning algorithms, build intelligent models, work with LLMs, and deploy AI applications.',
};

export default function AIMLDevelopmentPage() {
  return (
    <>
      <Navbar />
      <AIMLClient />
      <Footer />
    </>
  );
}
