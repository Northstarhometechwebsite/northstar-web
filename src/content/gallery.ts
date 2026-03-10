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
    id: "placeholder-1",
    src: "",
    alt: "Modern living room with Ketra tunable lighting scenes",
    tags: ["lighting", "automation"],
    aspect: "landscape",
  },
  {
    id: "placeholder-2",
    src: "",
    alt: "Dedicated home theater with acoustic treatment and ambient lighting",
    tags: ["home-theater", "audio", "lighting"],
    aspect: "landscape",
  },
  {
    id: "placeholder-3",
    src: "",
    alt: "Master bedroom with motorized Lutron Palladiom shades",
    tags: ["shades", "lighting"],
    aspect: "landscape",
  },
  {
    id: "placeholder-4",
    src: "",
    alt: "Structured wiring rack installation in equipment room",
    tags: ["networking"],
    aspect: "portrait",
  },
  {
    id: "placeholder-5",
    src: "",
    alt: "Twilight exterior with landscape and architectural lighting",
    tags: ["exteriors", "lighting"],
    aspect: "landscape",
  },
  {
    id: "placeholder-6",
    src: "",
    alt: "Josh AI control panel and automation interface",
    tags: ["automation"],
    aspect: "square",
  },
  {
    id: "placeholder-7",
    src: "",
    alt: "NorthStar Design Studio in Uptown Minneapolis",
    tags: ["studio", "lighting"],
    aspect: "landscape",
  },
  {
    id: "placeholder-8",
    src: "",
    alt: "Outdoor audio speakers integrated into landscape design",
    tags: ["audio", "exteriors"],
    aspect: "landscape",
  },
  {
    id: "placeholder-9",
    src: "",
    alt: "Kitchen with circadian lighting and automated shading",
    tags: ["lighting", "shades", "automation"],
    aspect: "landscape",
  },
];
