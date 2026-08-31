import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function buildGalleryManifest() {
  // Find all raw JPG/PNG files in public/img/photos_page subfolders
  const files = await glob('public/img/photos_page/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}');
  const manifest = {};

  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputPath = file.replace(ext, '.webp');

    try {
      // 1. Process image into memory buffer (no temp files created)
      const buffer = await sharp(file)
        .rotate() // Auto-orient using camera EXIF data
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      // 2. Write buffer directly to final destination
      fs.writeFileSync(outputPath, buffer);

      // 3. Map path to manifest category key
      const relativePath = outputPath.replace(/^public/, '').replace(/\\/g, '/');
      const pathParts = relativePath.split('/').filter(Boolean); // e.g. ["img", "photos_page", "Events", "Concert", "1.webp"]
      
      // Grabs category folder (e.g., "concert", "architecture")
      const categoryFolder = pathParts[3]?.toLowerCase(); 

      if (categoryFolder) {
        if (!manifest[categoryFolder]) {
          manifest[categoryFolder] = [];
        }
        manifest[categoryFolder].push(relativePath);
      }

      console.log(`Processed: ${relativePath}`);
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  // Sort images naturally within each category
  for (const key in manifest) {
    manifest[key].sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
  }

  // 4. Save generated manifest file
  const manifestPath = path.join(process.cwd(), 'public/img/photos_page/manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('\nManifest JSON generated successfully at public/img/photos_page/manifest.json');
}

buildGalleryManifest();