const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images/works';
const outputDir = 'public/images/works/webp';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f =>
  f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png')
);

console.log(`Found ${files.length} images to compress`);

async function compressImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/, '.webp'));

    try {
      await sharp(inputPath)
        .resize(2000, null, { withoutEnlargement: true }) // Max width 2000px
        .webp({ quality: 80 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`${file}: ${(inputSize/1024/1024).toFixed(1)}MB → ${(outputSize/1024).toFixed(0)}KB (-${savings}%)`);
    } catch (err) {
      console.error(`Error: ${file}:`, err.message);
    }
  }
  console.log('\nDone!');
}

compressImages();
