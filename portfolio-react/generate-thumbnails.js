import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SOURCE_DIR = './public/images/photographie';
const THUMB_DIR = './public/images/photographie/thumbs';

// Create thumbs directory
if (!fs.existsSync(THUMB_DIR)) {
  fs.mkdirSync(THUMB_DIR, { recursive: true });
}

const files = fs.readdirSync(SOURCE_DIR).filter(f => 
  /\.(jpg|jpeg|png|webp)$/i.test(f) && !fs.statSync(path.join(SOURCE_DIR, f)).isDirectory()
);

console.log(`🖼️  Found ${files.length} images to process...`);

for (const file of files) {
  const inputPath = path.join(SOURCE_DIR, file);
  const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(THUMB_DIR, outputName);

  try {
    await sharp(inputPath)
      .resize(400, 400, { fit: 'cover' })
      .webp({ quality: 75 })
      .toFile(outputPath);

    const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(0);
    const thumbSize = (fs.statSync(outputPath).size / 1024).toFixed(0);
    console.log(`  ✅ ${file}: ${originalSize}KB → ${thumbSize}KB (thumb)`);
  } catch (err) {
    console.error(`  ❌ ${file}: ${err.message}`);
  }
}

console.log('\n✨ Thumbnails generated successfully!');
