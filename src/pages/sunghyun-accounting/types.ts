export interface SectionHeading {
  id: string;
  label: string;
}

export interface SourceFigure {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
}

export interface ReportTable {
  caption: string;
  columns: string[];
  rows: string[][];
}

export interface SunghyunAccountingModel {
  sections: SectionHeading[];
  repository: string;
  tables: Record<'baseline' | 'documents' | 'extraction' | 'criteria', ReportTable>;
  figures: Record<'baseline' | 'pipeline' | 'audit' | 'chat', SourceFigure>;
}
