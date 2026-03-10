export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  tags: string[];
  aspect: "landscape" | "portrait" | "square";
}

export const TAG_MAP: Record<string, string> = {
  lighting: "LIGHTING",
  "home-theater": "HOME THEATER",
  shades: "SHADES", 
  automation: "AUTOMATION",
  audio: "AUDIO",
  networking: "NETWORKING",
  exteriors: "EXTERIORS",
  studio: "STUDIO",
};

export const ALL_TAGS = Object.keys(TAG_MAP);

// Curated gallery from 41 carefully selected photos  
// Restored service-focused categories, duplicates removed, polished jobsite photos added
export const galleryImages: GalleryImage[] = [
  // STUDIO (9 photos - unique zones only)
  {
    "id": "work-studio-01",
    "src": "/photos/processed/work-studio-01.jpg",
    "alt": "NorthStar design studio kitchen island and dining area with neutral lighting",
    "tags": ["studio"],
    "aspect": "landscape"
  },

  {
    "id": "work-studio-07",
    "src": "/photos/processed/work-studio-07.jpg", 
    "alt": "NorthStar design studio meeting room with dining table and display wall",
    "tags": ["studio"],
    "aspect": "landscape"
  },
  {
    "id": "work-studio-16",
    "src": "/photos/processed/work-studio-16.jpg",
    "alt": "NorthStar design studio lounge and screening area with bar seating",
    "tags": ["studio"], 
    "aspect": "landscape"
  },
  {
    "id": "work-studio-25",
    "src": "/photos/processed/work-studio-25.jpg",
    "alt": "NorthStar design studio dedicated screening room for client presentations",
    "tags": ["studio"],
    "aspect": "landscape"
  },

  {
    "id": "work-studio-45",
    "src": "/photos/processed/work-studio-45.jpg",
    "alt": "NorthStar design studio material library and sample storage room",
    "tags": ["studio"],
    "aspect": "landscape"
  },


  
  // HOME THEATER (6 photos)
  {
    "id": "work-theater-01",
    "src": "/photos/processed/work-theater-01.jpg",
    "alt": "Luxury home theater lounge with brick walls and velvet seating", 
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  {
    "id": "work-theater-02",
    "src": "/photos/processed/work-theater-02.jpg",
    "alt": "Dedicated home theater with acoustic panels and projection system",
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-56",
    "src": "/photos/processed/work-general-56.jpg",
    "alt": "Multi-screen sports viewing room with three TVs and leather recliners",
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-58",
    "src": "/photos/processed/work-general-58.jpg",
    "alt": "Purple-walled home theater with projection screen and reclining seats",
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-63", 
    "src": "/photos/processed/work-general-63.jpg",
    "alt": "Home theater displaying NorthStar logo with leather seating and surround sound",
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-65",
    "src": "/photos/processed/work-general-65.jpg",
    "alt": "High-end home theater with tiered seating, bar, and popcorn machine",
    "tags": ["home-theater"],
    "aspect": "landscape"
  },
  
  // LIGHTING (5 photos)
  {
    "id": "work-lighting-01",
    "src": "/photos/processed/work-lighting-01.jpg",
    "alt": "Layered kitchen lighting design with pendants, under-cabinet, and recessed lighting",
    "tags": ["lighting"],
    "aspect": "landscape" 
  },
  {
    "id": "work-general-01",
    "src": "/photos/processed/work-general-01.jpg",
    "alt": "Ketra tunable lighting demonstration showing color temperature range from cool to warm",
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-10", 
    "src": "/photos/processed/work-general-10.jpg",
    "alt": "Cascading crystal chandelier in double-height entry with lakefront views", 
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-28",
    "src": "/photos/processed/work-general-28.jpg",
    "alt": "LED strip lighting integrated into custom closet hanging rods",
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-64",
    "src": "/photos/processed/work-general-64.jpg", 
    "alt": "Split-screen kitchen demonstrating tunable lighting from cool daylight to warm amber",
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  
  // EXTERIORS (5 photos) 
  {
    "id": "work-exterior-01",
    "src": "/photos/processed/work-exterior-01.jpg",
    "alt": "Prairie-style modern estate with landscape lighting and architectural uplighting",
    "tags": ["exteriors"],
    "aspect": "landscape"
  },
  {
    "id": "work-exterior-02", 
    "src": "/photos/processed/work-exterior-02.jpg",
    "alt": "Contemporary stone and glass home with outdoor lighting systems",
    "tags": ["exteriors"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-42",
    "src": "/photos/processed/work-general-42.jpg",
    "alt": "European-style home with arched entry and outdoor accent lighting",
    "tags": ["exteriors"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-95",
    "src": "/photos/processed/work-general-95.jpg", 
    "alt": "Shingle-style home at twilight with garage and porch lighting",
    "tags": ["exteriors"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-17",
    "src": "/photos/processed/work-general-17.jpg",
    "alt": "Modern lakefront estate with uplighting on stone walls and fire features",
    "tags": ["exteriors"], 
    "aspect": "landscape"
  },
  
  // SHADES (2 photos)
  {
    "id": "work-general-09",
    "src": "/photos/processed/work-general-09.jpg",
    "alt": "Master bedroom with automated motorized roller shades and lakefront views",
    "tags": ["shades"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-92", 
    "src": "/photos/processed/work-general-92.jpg",
    "alt": "Motorized shade cassette and motor installation detail in custom millwork",
    "tags": ["shades"],
    "aspect": "landscape"
  },
  
  // AUTOMATION (2 photos)
  {
    "id": "work-general-76",
    "src": "/photos/processed/work-general-76.jpg",
    "alt": "Josh.ai smart home remote controlling theater system with voice activation",
    "tags": ["automation"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-77",
    "src": "/photos/processed/work-general-77.jpg",
    "alt": "Professional AV equipment rack with Lutron automation and media servers", 
    "tags": ["automation"],
    "aspect": "landscape"
  },
  
  // AUDIO (2 photos) 
  {
    "id": "work-tech-03",
    "src": "/photos/processed/work-tech-03.jpg",
    "alt": "Living room with integrated in-wall speakers and flush-mounted display",
    "tags": ["audio"],
    "aspect": "portrait"
  },
  {
    "id": "work-tech-01",
    "src": "/photos/processed/work-tech-01.jpg",
    "alt": "Lakefront living room with distributed audio and wall-mounted display",
    "tags": ["audio"],
    "aspect": "landscape"
  },
  
  // NETWORKING (1 photo)
  {
    "id": "work-general-55",
    "src": "/photos/processed/work-general-55.jpg",
    "alt": "Professional networking equipment rack with glass doors and cable management",
    "tags": ["networking"],
    "aspect": "landscape"
  },
  
  // SMART HOME INTEGRATION EXAMPLES (5 photos)
  {
    "id": "work-living-02",
    "src": "/photos/processed/work-living-02.jpg",
    "alt": "Loft living room with integrated smart display and LED lighting systems",
    "tags": ["automation", "lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-general-41",
    "src": "/photos/processed/work-general-41.jpg", 
    "alt": "Contemporary family room with ceiling-mounted smart sensors and linear fireplace",
    "tags": ["automation"],
    "aspect": "landscape"
  },
  {
    "id": "work-kitchen-modern",
    "src": "/photos/processed/work-kitchen-modern.jpg",
    "alt": "Open kitchen with visible smart home control panel and integrated appliances",
    "tags": ["automation", "lighting"],
    "aspect": "portrait"
  },

  {
    "id": "work-general-40",
    "src": "/photos/processed/work-general-40.jpg",
    "alt": "Master bathroom with smart lighting control and floating walnut vanity",
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-outdoor-01",
    "src": "/photos/processed/work-outdoor-01.jpg",
    "alt": "Outdoor living space with automated lighting, audio, and motorized systems",
    "tags": ["automation", "lighting", "audio"],
    "aspect": "landscape"
  },
  {
    "id": "work-inwood-theater-hero",
    "src": "/photos/processed/work-inwood-theater-hero.jpg",
    "alt": "Luxury home theater with Kaleidescape movie server, acoustic panels, and bar seating",
    "tags": ["home-theater", "audio", "automation"],
    "aspect": "landscape"
  },
  {
    "id": "work-inwood-theater-seating",
    "src": "/photos/processed/work-inwood-theater-seating.jpg",
    "alt": "Diamond-quilted leather theater recliners with ceiling-mounted projector and acoustic treatments",
    "tags": ["home-theater", "audio"],
    "aspect": "landscape"
  },
  {
    "id": "work-inwood-josh-control",
    "src": "/photos/processed/work-inwood-josh-control.jpg",
    "alt": "Josh.ai smart home remote controlling theater and Kaleidescape playback",
    "tags": ["automation", "home-theater"],
    "aspect": "portrait"
  },
  {
    "id": "work-inwood-equipment-rack",
    "src": "/photos/processed/work-inwood-equipment-rack.jpg",
    "alt": "Professional AV rack with Kaleidescape server, IC Realtime, Lutron panels, and Revel amplification",
    "tags": ["networking", "automation"],
    "aspect": "portrait"
  },
  {
    "id": "work-kitchen-coastal",
    "src": "/photos/processed/work-kitchen-coastal-traditional.jpg",
    "alt": "Transitional white kitchen with gold pendants, marble island, and arabesque tile backsplash",
    "tags": ["lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-lakefront-media-room",
    "src": "/photos/processed/work-lakefront-media-room.jpg",
    "alt": "Cozy media room with stone fireplace, large display, and integrated audio system",
    "tags": ["audio", "lighting", "automation"],
    "aspect": "landscape"
  },
  {
    "id": "work-lakefront-outdoor",
    "src": "/photos/processed/work-lakefront-outdoor-entertainment.jpg",
    "alt": "Multi-level deck with outdoor TV, distributed audio, and landscape lighting",
    "tags": ["audio", "exteriors", "lighting"],
    "aspect": "landscape"
  },
  {
    "id": "work-lakefront-twilight",
    "src": "/photos/processed/work-lakefront-twilight-exterior.jpg",
    "alt": "Aerial twilight view of lakefront estate with landscape accent lighting",
    "tags": ["exteriors", "lighting"],
    "aspect": "landscape"
  }
];