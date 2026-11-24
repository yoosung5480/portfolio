export type HaiSectionId = 'problem' | 'pipeline' | 'validation' | 'review' | 'archive';

export interface HaiModel {
  sections: ReadonlyArray<{ id: HaiSectionId; label: string }>;
  facts: ReadonlyArray<{ label: string; value: string }>;
  competitionUrl: string;
}
