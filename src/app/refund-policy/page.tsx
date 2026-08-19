import type { Metadata } from 'next';
import RefundClient from './RefundClient';

export const metadata: Metadata = {
  title: 'Refund Policy | SkillPedia',
  description: 'Read the refund and cancellation policy for SkillPedia programs.',
};

export default function RefundPolicyPage() {
  return <RefundClient />;
}

