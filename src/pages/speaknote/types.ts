import type { RefObject } from 'react';

export interface BatchRun {
  batch: number;
  count: number;
  start: number;
  end: number;
}

export interface SpeakNoteModel {
  sections: { id: string; label: string }[];
  batches: BatchRun[];
  appendixRef: RefObject<HTMLDetailsElement | null>;
  openAppendix: () => void;
}
