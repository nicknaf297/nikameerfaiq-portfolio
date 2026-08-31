import sharp from 'sharp';
import { glob } from 'glob';
import fs from 'fs';
import path from 'path';

async function buildGalleryManifest() {
  const files = await glob('public/img/photos_page/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}');
  const manifest = {};

  console.log(`Processing ${files.length} images...`);

  for (const file of files) {
    const ext = path.extname(file);
    const outputPath = file.replace(ext, '.webp');

    try {
      const buffer = await sharp(file)
        .rotate()
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 80 })
        .toBuffer();

      fs.writeFileSync(outputPath, buffer);

      const relativePath = outputPath.replace(/^public/, '').replace(/\\/g, '/');
      const pathParts = relativePath.split('/').filter(Boolean);
      
      // Directly grabs the immediate parent folder (e.g., "Concert" -> "concert")
      const categoryFolder = pathParts[pathParts.length - 2]?.toLowerCase();

      if (categoryFolder) {
        if (!manifest[categoryFolder]) {
          manifest[categoryFolder] = [];
        }
        manifest[categoryFolder].push(relativePath);
      }
    } catch (err) {
      console.error(`Failed to process ${file}:`, err);
    }
  }

  for (const key in manifest) {
    manifest[key].sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    );
  }

  const manifestPath = path.join(process.cwd(), 'public/img/photos_page/manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  
  console.log('\n🎉 Manifest updated successfully!');
}

buildGalleryManifest();