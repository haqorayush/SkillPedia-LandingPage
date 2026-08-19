import type { Metadata } from 'next';
import CeoClient from './CeoClient';

export const metadata: Metadata = {
  title: 'Message from the CEO | SkillPedia',
  description: 'A message from our Founder & CEO, Dharmendra Kumar Pandey.',
};

export default function CeoMessagePage() {
  return <CeoClient />;
}

