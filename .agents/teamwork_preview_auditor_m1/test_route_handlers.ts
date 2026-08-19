import { generateStaticParams, generateMetadata } from '../../src/app/programs/[slug]/page';
import { getAllCourseSlugs } from '../../src/lib/coursesData';

async function testRouteHandlers() {
  console.log('Testing generateStaticParams...');
  const paramsList = await generateStaticParams();
  console.log(`generateStaticParams returned ${paramsList.length} items`);
  if (paramsList.length !== 33) {
    throw new Error(`Expected 33 static params, got ${paramsList.length}`);
  }

  const slugs = getAllCourseSlugs();
  for (const slug of slugs) {
    const meta = await generateMetadata({ params: Promise.resolve({ slug }) });
    if (!meta.title || !meta.description) {
      throw new Error(`generateMetadata missing title/desc for slug: ${slug}`);
    }
  }
  console.log('✅ generateMetadata succeeded for all 33 slugs');

  // Test invalid slug for generateMetadata
  const invalidMeta = await generateMetadata({ params: Promise.resolve({ slug: 'non-existent-course-slug-12345' }) });
  if (invalidMeta.title !== 'Course Not Found | SkillPedia') {
    throw new Error(`Invalid slug returned unexpected metadata: ${JSON.stringify(invalidMeta)}`);
  }
  console.log('✅ generateMetadata returned 404 metadata for non-existent slug');

  console.log('All route handler tests passed!');
}

testRouteHandlers().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
