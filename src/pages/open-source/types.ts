export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface SectionHeading {
  id: string;
  label: string;
}

export interface OpenSourceModel {
  sections: SectionHeading[];
  documentSections: Record<'original' | 'requirements' | 'workflow' | 'contract' | 'system' | 'demo' | 'lessons', SectionHeading>;
  contestUrl: string;
  demoUrl: string;
  demoEmbedUrl: string;
  demoPlaying: boolean;
  playDemo: () => void;
  requirements: readonly string[];
  figures: Record<'poster' | 'iterations' | 'workflow' | 'contract' | 'actors' | 'recovery' | 'prompt', ProjectImage>;
  containerCode: string;
}
