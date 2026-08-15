import type { Metadata } from 'next';
import PrivacyClient from './PrivacyClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | SkillPedia',
  description: 'Learn how SkillPedia collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PrivacyClient />
      <Footer />
    </>
  );
}
