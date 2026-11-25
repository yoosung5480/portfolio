export interface UndertoneFigure {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

interface ValidationCase {
  label: string;
  candidate: string;
  interpretation: string;
  embedding: string;
  support: string;
  coverage: string;
  equivalence: string;
}

export interface UndertoneModel {
  sections: { id: string; label: string }[];
  links: { repository: string; dataset: string; evaluation: string };
  figures: Record<'workflow' | 'verifier' | 'sample' | 'loop', UndertoneFigure>;
  validation: ValidationCase[];
  quality: { model: string; equivalence: string; embedding: string; verifierLatency: string }[];
  latency: { model: string; seconds: string }[];
}
