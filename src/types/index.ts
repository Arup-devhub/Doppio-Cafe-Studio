export type DietaryType = 'veg' | 'non-veg' | 'beverage';

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price?: number;
  description: string;
  dietary: DietaryType;
  signature?: boolean;
  bestseller?: boolean;
  image?: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  count?: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  title: string;
  category: 'courtyard' | 'interior' | 'coffee' | 'food' | 'evening';
  description: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

export interface ExperiencePillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}
