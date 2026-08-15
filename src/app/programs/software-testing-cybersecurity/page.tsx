import type { Metadata } from 'next';
import SecurityClient from './SecurityClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Software Testing & Cybersecurity | SkillPedia',
  description: 'Master the art of securing applications and ensuring flawless quality. From automated QA frameworks to ethical hacking and vulnerability assessment.',
};

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <SecurityClient />
      <Footer />
    </>
  );
}
