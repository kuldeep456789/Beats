export interface EventItem {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  EVENTS = 'events',
  GALLERY = 'gallery',
  CONTACT = 'contact'
}