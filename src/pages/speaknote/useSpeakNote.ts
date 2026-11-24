import { useRef } from 'react';
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import type { SpeakNoteModel } from './types';

const sections = [
  { id: 'overview', label: '서비스와 담당 역할' },
  { id: 'retrieval', label: '강의 자료와 CRAG 검색' },
  { id: 'latency', label: '비동기 처리와 응답 지연' },
  { id: 'project-record', label: '프로젝트 원문' },
  { id: 'experiments', label: '실험 부록' },
];

const batches = [
  { batch: 1, count: 3, start: 1.211, end: 11.246 },
  { batch: 2, count: 3, start: 1.212, end: 12.076 },
  { batch: 3, count: 3, start: 2.215, end: 12.456 },
  { batch: 4, count: 1, start: 5.217, end: 13.567 },
];

export function useSpeakNote(): SpeakNoteModel {
  useDocumentTitle('SpeakNote');
  const appendixRef = useRef<HTMLDetailsElement>(null);

  function openAppendix() {
    const details = appendixRef.current;
    if (!details) return;
    details.open = true;
    details.querySelector('summary')?.focus({ preventScroll: true });
    details.scrollIntoView({ block: 'start' });
  }

  return { sections, batches, appendixRef, openAppendix };
}
