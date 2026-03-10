const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Ensure processed directory exists
const processedDir = path.join(__dirname, 'public/photos/processed');
if (!fs.existsSync(processedDir)) {
  fs.mkdirSync(processedDir, { recursive: true });
}

// Selected photos with new names and categorization
const selectedPhotos = [
  // Hero shot - most impressive
  { 
    src: 'public/photos/review2/pbc-salon.jpg', 
    dest: 'public/photos/processed/work-hero.jpg',
    alt: 'Grand formal dining room with exposed beam ceiling and custom millwork',
    tags: ['lighting', 'automation'],
    aspect: 'landscape'
  },
  
  // Interior spaces
  { 
    src: 'public/photos/theater.jpg', 
    dest: 'public/photos/processed/work-theater-lounge.jpg',
    alt: 'Sophisticated lounge with ambient lighting and entertainment area',
    tags: ['lighting', 'audio', 'automation'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/inwood-01.jpg', 
    dest: 'public/photos/processed/work-home-theater.jpg',
    alt: 'Dedicated home cinema with acoustic treatment and projection system',
    tags: ['home-theater', 'audio', 'automation'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/Ketra Feature.jpg', 
    dest: 'public/photos/processed/work-kitchen-modern.jpg',
    alt: 'Modern kitchen with smart home control panel and integrated audio',
    tags: ['automation', 'lighting', 'audio'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/whistling-20.jpg', 
    dest: 'public/photos/processed/work-kitchen-galley.jpg',
    alt: 'Contemporary galley kitchen with professional appliances and custom cabinetry',
    tags: ['lighting'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/pbc-study.jpg', 
    dest: 'public/photos/processed/work-office.jpg',
    alt: 'Custom home office with RGB LED shelving and exotic wood desk',
    tags: ['lighting', 'automation'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/pbc-family.jpg', 
    dest: 'public/photos/processed/work-family-room.jpg',
    alt: 'Upper-level family room with vaulted ceilings and custom millwork',
    tags: ['lighting', 'audio'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/lutron-4.jpg', 
    dest: 'public/photos/processed/work-great-room.jpg',
    alt: 'Vaulted great room with wet bar and distributed audio system',
    tags: ['audio', 'lighting'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/grand-hall.jpg', 
    dest: 'public/photos/processed/work-historic-hall.jpg',
    alt: 'Historic mansion hallway with modern lighting integration',
    tags: ['lighting'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/review2/stonwood-43.jpg', 
    dest: 'public/photos/processed/work-staircase.jpg',
    alt: 'Monumental staircase with art lighting and natural stone',
    tags: ['lighting'],
    aspect: 'portrait'
  },
  
  // Exteriors
  { 
    src: 'public/photos/Modern Exterior.jpg', 
    dest: 'public/photos/processed/work-exterior.jpg',
    alt: 'Contemporary luxury estate with integrated technology infrastructure',
    tags: ['exteriors', 'automation'],
    aspect: 'landscape'
  },
  { 
    src: 'public/photos/Pool Patio James and Sonance.jpg', 
    dest: 'public/photos/processed/work-outdoor.jpg',
    alt: 'Lakefront pool terrace with outdoor audio and automated shading',
    tags: ['exteriors', 'audio', 'automation'],
    aspect: 'landscape'
  },
  
  // Technology details
  { 
    src: 'public/photos/Palladiom.jpg', 
    dest: 'public/photos/processed/work-lutron.jpg',
    alt: 'Lutron lighting control keypads with custom scene programming',
    tags: ['automation', 'lighting'],
    aspect: 'portrait'
  },
  
  // Studio/showroom
  { 
    src: 'public/photos/studio.jpg', 
    dest: 'public/photos/processed/work-studio.jpg',
    alt: 'NorthStar design studio showcasing lighting scenes and automation',
    tags: ['studio', 'lighting', 'automation'],
    aspect: 'landscape'
  }
];

async function processPhotos() {
  console.log('Processing photos for NorthStar Work gallery...\n');
  
  for (let i = 0; i < selectedPhotos.length; i++) {
    const photo = selectedPhotos[i];
    const inputPath = path.join(__dirname, photo.src);
    const outputPath = path.join(__dirname, photo.dest);
    
    try {
      console.log(`Processing ${i + 1}/${selectedPhotos.length}: ${path.basename(photo.src)}`);
      
      await sharp(inputPath)
        .resize(1600, null, { 
          withoutEnlargement: true,
          fit: 'inside'
        })
        .jpeg({ quality: 82 })
        .toFile(outputPath);
        
      console.log(`✅ Saved: ${path.basename(photo.dest)}`);
      
    } catch (error) {
      console.error(`❌ Error processing ${photo.src}:`, error.message);
    }
  }
  
  console.log('\n🎉 Photo processing complete!');
  console.log('\nGallery data for gallery.ts:');
  console.log(JSON.stringify(selectedPhotos.map(photo => ({
    id: path.basename(photo.dest, '.jpg'),
    src: `/${photo.dest}`,
    alt: photo.alt,
    tags: photo.tags,
    aspect: photo.aspect
  })), null, 2));
}

processPhotos().catch(console.error);