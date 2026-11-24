import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import type { HaiModel } from './types';

const project: HaiModel = {
  sections: [
    { id: 'problem', label: '문제 정의' },
    { id: 'pipeline', label: '데이터와 모델' },
    { id: 'validation', label: '검증 결과' },
    { id: 'review', label: '개발 회고' },
    { id: 'archive', label: '전체 연구 기록' },
  ],
  facts: [
    { label: '개발 기간', value: '2025.12.29 – 2026.03.11' },
    { label: '구성 · 역할', value: '개인 프로젝트 · 데이터 구축부터 추론까지' },
    { label: '기술', value: 'Python · PyTorch · LoRA · DDP' },
    { label: '최종 성과', value: '458팀 중 6위' },
  ],
  competitionUrl: 'https://dacon.io/competitions/official/236628/overview/description',
};

export function useHai(): HaiModel {
  useDocumentTitle('HAI 딥페이크 감지');
  return project;
}
