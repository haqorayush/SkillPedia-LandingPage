import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseDetailView from '@/components/programs/CourseDetailView';
import { getAllCourseSlugs, getCourseBySlug } from '@/lib/coursesData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllCourseSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: 'Course Not Found | SkillPedia',
      description: 'The requested course program could not be found.',
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: course.metaTitle || `${course.title} | SkillPedia`,
    description: course.metaDescription || course.tagline || course.overview,
    openGraph: {
      title: course.metaTitle || `${course.title} | SkillPedia`,
      description: course.metaDescription || course.tagline || course.overview,
      type: 'website',
      url: `https://skillpedia.co.in/programs/${course.slug}`,
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return <CourseDetailView course={course} />;
}
