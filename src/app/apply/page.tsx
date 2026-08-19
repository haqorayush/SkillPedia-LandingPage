import type { Metadata } from 'next';
import ApplyClient from './ApplyClient';

export const metadata: Metadata = {
  title: 'Apply Now | SkillPedia',
  description: 'Apply for SkillPedia engineering programs and accelerate your career.',
};

export default function ApplyPage() {
  return <ApplyClient />;
}

