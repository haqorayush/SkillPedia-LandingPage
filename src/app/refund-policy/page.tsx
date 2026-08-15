import type { Metadata } from 'next';
import RefundClient from './RefundClient';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Refund Policy | SkillPedia',
  description: 'Read the refund and cancellation policy for SkillPedia programs.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <RefundClient />
      <Footer />
    </>
  );
}
