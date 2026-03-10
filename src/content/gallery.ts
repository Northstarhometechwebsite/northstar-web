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

// Placeholder gallery data — will be populated with real project photos
// Chris will provide photos to public/images/work/
export const galleryImages: GalleryImage[] = [
  {
    id: "work-hero",
    src: "/photos/processed/work-hero.jpg",
    alt: "Grand formal dining room with exposed beam ceiling and custom millwork",
    tags: ["lighting", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-theater-lounge",
    src: "/photos/processed/work-theater-lounge.jpg",
    alt: "Sophisticated lounge with ambient lighting and entertainment area",
    tags: ["lighting", "audio", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-home-theater",
    src: "/photos/processed/work-home-theater.jpg",
    alt: "Dedicated home cinema with acoustic treatment and projection system",
    tags: ["home-theater", "audio", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-kitchen-modern",
    src: "/photos/processed/work-kitchen-modern.jpg",
    alt: "Modern kitchen with smart home control panel and integrated audio",
    tags: ["automation", "lighting", "audio"],
    aspect: "landscape",
  },
  {
    id: "work-kitchen-galley",
    src: "/photos/processed/work-kitchen-galley.jpg",
    alt: "Contemporary galley kitchen with professional appliances and custom cabinetry",
    tags: ["lighting"],
    aspect: "landscape",
  },
  {
    id: "work-office",
    src: "/photos/processed/work-office.jpg",
    alt: "Custom home office with RGB LED shelving and exotic wood desk",
    tags: ["lighting", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-family-room",
    src: "/photos/processed/work-family-room.jpg",
    alt: "Upper-level family room with vaulted ceilings and custom millwork",
    tags: ["lighting", "audio"],
    aspect: "landscape",
  },
  {
    id: "work-great-room",
    src: "/photos/processed/work-great-room.jpg",
    alt: "Vaulted great room with wet bar and distributed audio system",
    tags: ["audio", "lighting"],
    aspect: "landscape",
  },
  {
    id: "work-historic-hall",
    src: "/photos/processed/work-historic-hall.jpg",
    alt: "Historic mansion hallway with modern lighting integration",
    tags: ["lighting"],
    aspect: "landscape",
  },
  {
    id: "work-staircase",
    src: "/photos/processed/work-staircase.jpg",
    alt: "Monumental staircase with art lighting and natural stone",
    tags: ["lighting"],
    aspect: "portrait",
  },
  {
    id: "work-exterior",
    src: "/photos/processed/work-exterior.jpg",
    alt: "Contemporary luxury estate with integrated technology infrastructure",
    tags: ["exteriors", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-outdoor",
    src: "/photos/processed/work-outdoor.jpg",
    alt: "Lakefront pool terrace with outdoor audio and automated shading",
    tags: ["exteriors", "audio", "automation"],
    aspect: "landscape",
  },
  {
    id: "work-lutron",
    src: "/photos/processed/work-lutron.jpg",
    alt: "Lutron lighting control keypads with custom scene programming",
    tags: ["automation", "lighting"],
    aspect: "portrait",
  },
  {
    id: "work-studio",
    src: "/photos/processed/work-studio.jpg",
    alt: "NorthStar design studio showcasing lighting scenes and automation",
    tags: ["studio", "lighting", "automation"],
    aspect: "landscape",
  },
];
