import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images/team');
const outputDir = path.resolve('public/images/team');

async function convertImages() {
  if (!fs.existsSync(inputDir)) {
    console.log(`Directory not found: ${inputDir}`);
    return;
  }

  const files = fs.readdirSync(inputDir);
  let convertedCount = 0;

  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const ext = path.extname(file);
      const baseName = path.basename(file, ext);
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${baseName}.webp`);

      console.log(`Converting ${file} to WebP...`);
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      console.log(`Saved: ${outputPath}`);
      // Remove original uncompressed file after conversion
      fs.unlinkSync(inputPath);
      convertedCount++;
    }
  }

  console.log(`WebP conversion complete. Converted ${convertedCount} images.`);
}

convertImages().catch((err) => {
  console.error('Error during WebP conversion:', err);
  process.exit(1);
});
