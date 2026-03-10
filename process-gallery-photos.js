const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Photo source directories
const photoDirs = {
  'drive-studio': './public/photos/drive-new/studio/',
  'drive-project': './public/photos/drive-new/project/',
  'studio-raw': './public/photos/studio-raw/',
  'raw-review': './public/photos/raw-review/',
  'review2': './public/photos/review2/',
  'watermark-removed': './public/photos/watermark-removed/'
};

// Output directory
const outputDir = './public/photos/processed/';
const manifestFile = './src/data/gallery-manifest.json';

// Ensure output directory exists
fs.mkdirSync(outputDir, { recursive: true });

// Category mapping based on filename patterns and content analysis
const categoryRules = [
  // Studio photos
  { pattern: /NorthStar Home Technologies_\d+/, category: 'studio', priority: 1 },
  { pattern: /(studio|showroom)/i, category: 'studio', priority: 1 },
  { pattern: /2303 Wycliff St/i, category: 'studio', priority: 1 },
  
  // Theater photos
  { pattern: /(theater|theatre|cinema)/i, category: 'theater', priority: 1 },
  { pattern: /Theater\d+/i, category: 'theater', priority: 1 },
  
  // Exterior photos
  { pattern: /(exterior|Gemini_Generated_Image_vhg0ndvhg0ndvhg0)/i, category: 'exterior', priority: 1 },
  { pattern: /Modern Exterior/i, category: 'exterior', priority: 1 },
  { pattern: /(drone|aerial|outside)/i, category: 'exterior', priority: 2 },
  
  // Lighting/Tech detail
  { pattern: /(lutron|lighting|ketra)/i, category: 'lighting', priority: 1 },
  { pattern: /(keypad|control)/i, category: 'lighting', priority: 2 },
  
  // Living spaces
  { pattern: /(kitchen|living|family|bedroom|closet|bathroom)/i, category: 'living', priority: 1 },
  { pattern: /(pool|patio|outdoor)/i, category: 'outdoor', priority: 1 },
  
  // AV/Tech
  { pattern: /(rack|amplifier|av|equipment)/i, category: 'tech', priority: 1 },
  { pattern: /(soundbar|josh\.ai|speaker)/i, category: 'tech', priority: 1 },
  
  // Commercial/Retail
  { pattern: /(henri|retail|commercial|store)/i, category: 'commercial', priority: 1 },
];

function categorizeFile(filename) {
  const lowerName = filename.toLowerCase();
  
  for (const rule of categoryRules) {
    if (rule.pattern.test(filename) || rule.pattern.test(lowerName)) {
      return rule.category;
    }
  }
  
  return 'general'; // Default category
}

function generateNewFilename(originalFile, category, index) {
  const ext = path.extname(originalFile).toLowerCase();
  const finalExt = ext === '.heic' ? '.jpg' : ext;
  return `work-${category}-${String(index).padStart(2, '0')}${finalExt}`;
}

async function processPhoto(inputPath, outputPath, maxWidth = 1600, quality = 82) {
  try {
    const metadata = await sharp(inputPath).metadata();
    
    let transformer = sharp(inputPath);
    
    // Handle HEIC files by converting to JPEG
    if (metadata.format === 'heic') {
      transformer = transformer.jpeg({ quality });
    } else if (metadata.format === 'png') {
      transformer = transformer.jpeg({ quality });
    }
    
    // Resize if needed
    if (metadata.width > maxWidth) {
      transformer = transformer.resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });
    }
    
    await transformer.toFile(outputPath);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function main() {
  const manifest = {
    categories: {},
    photos: [],
    processedAt: new Date().toISOString(),
    totalPhotos: 0
  };
  
  const categoryCounters = {};
  
  console.log('🏗️  Processing NorthStar gallery photos...\n');
  
  for (const [dirName, dirPath] of Object.entries(photoDirs)) {
    if (!fs.existsSync(dirPath)) {
      console.log(`⚠️  Directory not found: ${dirPath}`);
      continue;
    }
    
    const files = fs.readdirSync(dirPath)
      .filter(f => /\.(jpg|jpeg|png|heic)$/i.test(f))
      .filter(f => !f.startsWith('.'));
    
    console.log(`📂 Processing ${files.length} files from ${dirName}...`);
    
    for (const file of files) {
      const inputPath = path.join(dirPath, file);
      const category = categorizeFile(file);
      
      // Initialize category counter
      if (!categoryCounters[category]) {
        categoryCounters[category] = 0;
      }
      categoryCounters[category]++;
      
      const newFilename = generateNewFilename(file, category, categoryCounters[category]);
      const outputPath = path.join(outputDir, newFilename);
      
      console.log(`   ${file} → ${newFilename} [${category}]`);
      
      const success = await processPhoto(inputPath, outputPath);
      
      if (success) {
        manifest.photos.push({
          filename: newFilename,
          originalName: file,
          category: category,
          source: dirName,
          processedAt: new Date().toISOString()
        });
      }
    }
  }
  
  // Update manifest
  manifest.totalPhotos = manifest.photos.length;
  manifest.categories = Object.keys(categoryCounters).reduce((acc, cat) => {
    acc[cat] = {
      count: categoryCounters[cat],
      description: getCategoryDescription(cat)
    };
    return acc;
  }, {});
  
  // Write manifest
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
  
  console.log('\n✅ Processing complete!');
  console.log(`📊 Total photos processed: ${manifest.totalPhotos}`);
  console.log('📋 Categories:');
  
  for (const [cat, info] of Object.entries(manifest.categories)) {
    console.log(`   ${cat}: ${info.count} photos`);
  }
  
  console.log(`\n💾 Manifest saved to: ${manifestFile}`);
}

function getCategoryDescription(category) {
  const descriptions = {
    studio: 'Design Studio & Showroom',
    theater: 'Home Theaters & Media Rooms',
    exterior: 'Architectural Exteriors',
    lighting: 'Smart Lighting & Controls',
    living: 'Interior Living Spaces',
    outdoor: 'Outdoor & Landscape',
    tech: 'AV Equipment & Technology',
    commercial: 'Commercial Projects',
    general: 'General Portfolio'
  };
  
  return descriptions[category] || 'Miscellaneous';
}

main().catch(console.error);