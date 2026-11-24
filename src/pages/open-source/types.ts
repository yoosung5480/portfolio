export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface OpenSourceModel {
  sections: { id: string; label: string }[];
  contestUrl: string;
  demoUrl: string;
  requirements: readonly string[];
  figures: Record<'poster' | 'iterations' | 'workflow' | 'contract' | 'actors' | 'recovery' | 'prompt', ProjectImage>;
  containerCode: string;
}
