import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function compressImages() {
  const files = await glob('public/img/photos_page/**/*.{jpg,JPG,png,PNG}');

  console.log(`Found ${files.length} images to process...`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputPath = file.replace(ext, '.webp');

    await sharp(file)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`Compressed: ${file} -> ${outputPath}`);
    
    // fs.unlinkSync(file);
  }
}

compressImages();