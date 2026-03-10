const fs = require('fs');
const path = require('path');

// Enhanced TAG MAP with all categories we found
const TAG_MAP = {
  studio: "DESIGN STUDIO",
  theater: "HOME THEATERS", 
  exterior: "EXTERIORS",
  lighting: "SMART LIGHTING",
  living: "LIVING SPACES",
  outdoor: "OUTDOOR SPACES",
  tech: "AV EQUIPMENT",
  commercial: "COMMERCIAL",
  kitchen: "KITCHENS",
  general: "PORTFOLIO"
};

// Category descriptions for alt text generation
const categoryDescriptions = {
  studio: "NorthStar design studio showcasing smart lighting and automation technology",
  theater: "Luxury home theater with projection system, acoustics, and premium seating",
  exterior: "Contemporary residential exterior with integrated smart home technology",
  lighting: "Smart lighting control system demonstrating scene-based automation",
  living: "Interior living space with integrated smart home technology and lighting design",
  outdoor: "Outdoor living area with smart lighting, audio, and automated systems", 
  tech: "Professional AV equipment and smart home technology infrastructure",
  commercial: "Commercial technology installation showcasing NorthStar capabilities",
  kitchen: "Kitchen space with smart lighting and integrated home automation",
  general: "Luxury residential technology integration by NorthStar Home Technologies"
};

// Aspect ratio detection based on filename patterns and typical categories
function determineAspect(filename, category) {
  // Studios are typically landscape (showcasing the space)
  if (category === 'studio') return 'landscape';
  
  // Theaters are typically landscape (wide shots)
  if (category === 'theater') return 'landscape';
  
  // Exteriors are typically landscape
  if (category === 'exterior') return 'landscape';
  
  // Tech detail shots could be portrait (like keypads)
  if (category === 'tech' || category === 'lighting') {
    // Some lighting control shots are portrait
    return Math.random() > 0.7 ? 'portrait' : 'landscape';
  }
  
  // Living spaces vary
  if (category === 'living' || category === 'kitchen') {
    return Math.random() > 0.8 ? 'portrait' : 'landscape';
  }
  
  // Default to landscape for most architectural photography
  return 'landscape';
}

// Generate appropriate alt text
function generateAltText(filename, category, index) {
  const baseDescription = categoryDescriptions[category] || categoryDescriptions.general;
  
  // Make it unique per photo
  if (category === 'studio') {
    const lightingScenes = ['warm ambient lighting', 'cool daylight scene', 'tunable white lighting', 'smart lighting control', 'LED accent lighting'];
    const scene = lightingScenes[index % lightingScenes.length];
    return `NorthStar design studio featuring ${scene} and showroom displays`;
  }
  
  if (category === 'theater') {
    const features = ['premium seating and projection system', 'acoustic treatment and ambient lighting', 'media room with bar area', 'cinema setup with automated controls'];
    const feature = features[index % features.length];
    return `Luxury home theater with ${feature}`;
  }
  
  if (category === 'exterior') {
    const features = ['smart home technology integration', 'landscape lighting systems', 'automated outdoor controls', 'contemporary architectural design'];
    const feature = features[index % features.length];
    return `Residential exterior featuring ${feature}`;
  }
  
  if (category === 'lighting') {
    const systems = ['Lutron keypad control', 'Ketra lighting system', 'smart scene programming', 'automated lighting control', 'tunable white technology'];
    const system = systems[index % systems.length];
    return `Smart lighting installation with ${system}`;
  }
  
  return baseDescription;
}

// Main generation function
function generateGalleryData() {
  const processedDir = './public/photos/processed/';
  const workFiles = fs.readdirSync(processedDir)
    .filter(f => f.startsWith('work-') && /\.(jpg|jpeg|png)$/i.test(f))
    .sort();
  
  console.log(`🖼️  Generating gallery data for ${workFiles.length} photos...`);
  
  const galleryImages = [];
  const categoryCounters = {};
  
  workFiles.forEach(filename => {
    const parts = filename.split('-');
    const category = parts[1]?.toLowerCase() || 'general';
    
    // Skip malformed filenames
    if (parts.length < 3) {
      console.log(`⚠️  Skipping malformed filename: ${filename}`);
      return;
    }
    
    // Only include main categories
    if (!TAG_MAP[category]) {
      console.log(`⚠️  Skipping unknown category: ${category} (${filename})`);
      return;
    }
    
    // Initialize category counter
    if (!categoryCounters[category]) {
      categoryCounters[category] = 0;
    }
    categoryCounters[category]++;
    
    // Generate tags - primary category plus related tags
    const tags = [category];
    
    // Add related tags based on category
    if (category === 'studio') tags.push('lighting');
    if (category === 'theater') tags.push('audio');
    if (category === 'lighting') tags.push('automation');
    if (category === 'living' || category === 'kitchen') tags.push('lighting');
    if (category === 'outdoor') tags.push('lighting', 'audio');
    if (category === 'exterior') tags.push('automation');
    
    const image = {
      id: filename.replace(/\.(jpg|jpeg|png)$/i, ''),
      src: `/photos/processed/${filename}`,
      alt: generateAltText(filename, category, categoryCounters[category]),
      tags: tags,
      aspect: determineAspect(filename, category)
    };
    
    galleryImages.push(image);
  });
  
  // Sort images for optimal gallery display
  // Studios first (hero category), then theaters, then others
  const sortOrder = ['studio', 'theater', 'lighting', 'living', 'exterior', 'outdoor', 'tech', 'commercial', 'kitchen', 'general'];
  galleryImages.sort((a, b) => {
    const aCategory = a.tags[0];
    const bCategory = b.tags[0];
    const aIndex = sortOrder.indexOf(aCategory);
    const bIndex = sortOrder.indexOf(bCategory);
    
    if (aIndex !== bIndex) {
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    }
    
    // Within same category, maintain alphabetical order
    return a.id.localeCompare(b.id);
  });
  
  // Generate the TypeScript content
  const tsContent = `export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
  aspect: "landscape" | "portrait" | "square";
}

export const TAG_MAP: Record<string, string> = ${JSON.stringify(TAG_MAP, null, 2)};

export const ALL_TAGS = Object.keys(TAG_MAP);

// Generated gallery data from ${workFiles.length} processed photos
// Categories: ${Object.entries(categoryCounters).map(([cat, count]) => `${cat}: ${count}`).join(', ')}
export const galleryImages: GalleryImage[] = ${JSON.stringify(galleryImages, null, 2)};
`;
  
  // Write the new gallery file
  const outputPath = './src/content/gallery.ts';
  fs.writeFileSync(outputPath, tsContent);
  
  console.log('\\n✅ Gallery data generated successfully!');
  console.log(`📊 Total images: ${galleryImages.length}`);
  console.log('📋 Category breakdown:');
  Object.entries(categoryCounters).forEach(([cat, count]) => {
    console.log(`   ${TAG_MAP[cat]}: ${count} photos`);
  });
  console.log(`\\n💾 Saved to: ${outputPath}`);
  
  return { galleryImages, categoryCounters };
}

// Run the generator
if (require.main === module) {
  try {
    generateGalleryData();
  } catch (error) {
    console.error('❌ Error generating gallery data:', error.message);
    process.exit(1);
  }
}

module.exports = { generateGalleryData };