import sharp from 'sharp';
import { glob } from 'glob';
import path from 'path';

async function compressImages() {
  const files = await glob('public/img/photos_page/**/*.{jpg,JPG,png,PNG}');

  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputPath = file.replace(ext, '.webp');

    await sharp(file)
      .rotate() // 🚀 CRITICAL: Auto-orients image based on EXIF tag before converting
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath + '.tmp'); // Temporary file to prevent write conflicts

    // Overwrite target file
    await sharp(outputPath + '.tmp').toFile(outputPath);
    
    // Clean up temp file
    import('fs').then((fs) => fs.unlinkSync(outputPath + '.tmp'));

    console.log(`Rotated & Compressed: ${outputPath}`);
  }
}

compressImages();