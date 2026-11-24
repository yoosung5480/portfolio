import type { ProjectSlug } from '../../shared/data/projects';

export interface ProjectCard {
  slug: ProjectSlug;
  field: string;
  title: string;
  summary: string;
  result: string;
}

export interface RecordEntry {
  date: string;
  name: string;
  detail?: string;
}

export interface CarouselControls {
  active: number;
  playing: boolean;
  select: (index: number) => void;
  toggle: () => void;
  pause: () => void;
  setHovered: (hovered: boolean) => void;
}

export interface HomeModel {
  carousel: CarouselControls;
  projects: ProjectCard[];
  education: RecordEntry[];
  awards: RecordEntry[];
  research: RecordEntry[];
  skills: { group: string; items: string[] }[];
  activities: { title: string; detail: string; link?: string }[];
  language: { name: string; language: string; grade: string; date: string };
}
