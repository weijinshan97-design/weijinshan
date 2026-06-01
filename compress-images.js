const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'public/images';
const outputDir = 'public/images/webp';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));

console.log(`Found ${files.length} images to compress`);

async function compressImages() {
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(png|jpg)$/, '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`${file}: ${(inputSize/1024).toFixed(0)}KB → ${(outputSize/1024).toFixed(0)}KB (-${savings}%)`);
    } catch (err) {
      console.error(`Error: ${file}:`, err.message);
    }
  }
  console.log('\nDone!');
}

compressImages();
