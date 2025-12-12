const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories to optimize images in
const imageDirs = [
  path.join(__dirname, '../public'),
  path.join(__dirname, '../public/team'),
  path.join(__dirname, '../public/heroslider'),
  path.join(__dirname, '../public/ourstack'),
];

// Image extensions to process
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];

// Quality settings
const quality = {
  jpeg: 85,
  webp: 85,
  png: 90,
};

let optimizedCount = 0;
let skippedCount = 0;
let errorCount = 0;

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const dir = path.dirname(filePath);
    const name = path.basename(filePath, ext);
    
    // Skip if already optimized (has .optimized suffix)
    if (name.includes('.optimized')) {
      return;
    }

    const stats = fs.statSync(filePath);
    const originalSize = stats.size;
    
    let outputPath = filePath;
    let optimized = false;

    // Optimize based on file type
    if (ext === '.jpg' || ext === '.jpeg') {
      // Create optimized JPEG
      const optimizedPath = path.join(dir, `${name}.optimized${ext}`);
      await sharp(filePath)
        .jpeg({ quality: quality.jpeg, mozjpeg: true })
        .toFile(optimizedPath);
      
      const newStats = fs.statSync(optimizedPath);
      if (newStats.size < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(optimizedPath, filePath);
        optimized = true;
      } else {
        fs.unlinkSync(optimizedPath);
      }
    } else if (ext === '.png') {
      // Create optimized PNG
      const optimizedPath = path.join(dir, `${name}.optimized${ext}`);
      await sharp(filePath)
        .png({ quality: quality.png, compressionLevel: 9 })
        .toFile(optimizedPath);
      
      const newStats = fs.statSync(optimizedPath);
      if (newStats.size < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(optimizedPath, filePath);
        optimized = true;
      } else {
        fs.unlinkSync(optimizedPath);
      }
    } else if (ext === '.webp') {
      // Optimize existing WebP
      const optimizedPath = path.join(dir, `${name}.optimized${ext}`);
      await sharp(filePath)
        .webp({ quality: quality.webp })
        .toFile(optimizedPath);
      
      const newStats = fs.statSync(optimizedPath);
      if (newStats.size < originalSize) {
        fs.unlinkSync(filePath);
        fs.renameSync(optimizedPath, filePath);
        optimized = true;
      } else {
        fs.unlinkSync(optimizedPath);
      }
    }

    if (optimized) {
      const newStats = fs.statSync(filePath);
      const saved = ((originalSize - newStats.size) / originalSize * 100).toFixed(2);
      console.log(`✓ Optimized: ${path.basename(filePath)} (${(originalSize / 1024).toFixed(2)}KB → ${(newStats.size / 1024).toFixed(2)}KB, saved ${saved}%)`);
      optimizedCount++;
    } else {
      skippedCount++;
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${filePath}:`, error.message);
    errorCount++;
  }
}

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) {
    return;
  }

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(filePath);
    } else if (stat.isFile()) {
      const ext = path.extname(file).toLowerCase();
      if (imageExtensions.includes(ext)) {
        await optimizeImage(filePath);
      }
    }
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  for (const dir of imageDirs) {
    if (fs.existsSync(dir)) {
      console.log(`Processing: ${dir}`);
      await processDirectory(dir);
    }
  }

  console.log('\n📊 Optimization Summary:');
  console.log(`   Optimized: ${optimizedCount} images`);
  console.log(`   Skipped: ${skippedCount} images`);
  console.log(`   Errors: ${errorCount} images`);
  console.log('\n✨ Done!');
}

main().catch(console.error);

