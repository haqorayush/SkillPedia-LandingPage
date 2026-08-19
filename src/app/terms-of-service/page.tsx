import type { Metadata } from 'next';
import TermsClient from './TermsClient';

export const metadata: Metadata = {
  title: 'Terms of Service | SkillPedia',
  description: 'Read the terms of service governing the use of SkillPedia programs and platform.',
};

export default function TermsOfServicePage() {
  return <TermsClient />;
}

