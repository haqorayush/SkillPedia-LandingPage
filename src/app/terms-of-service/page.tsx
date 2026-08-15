import type { Metadata } from 'next';
import TermsClient from './TermsClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | SkillPedia',
  description: 'Read the terms of service governing the use of SkillPedia programs and platform.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <TermsClient />
      <Footer />
    </>
  );
}
