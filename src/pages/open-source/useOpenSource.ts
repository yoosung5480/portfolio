import { useState } from 'react';
import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import type { OpenSourceModel } from './types';
import poster from './assets/contest-poster.jpg';
import iterations from './assets/architecture-iterations.webp';
import workflow from './assets/workflow.webp';
import contract from './assets/file-contract.webp';
import actors from './assets/actors.webp';
import recovery from './assets/recovery.webp';
import prompt from './assets/prompt-builder.webp';
import containerCode from './assets/container.py.txt?raw';

const documentSections = {
  original: { id: 'original', label: '개발 배경과 목표' },
  requirements: { id: 'requirements', label: '자동화 요구사항' },
  workflow: { id: 'workflow', label: '워크플로우 설계 과정' },
  contract: { id: 'file-contract', label: '파일 구조와 실행 규약' },
  system: { id: 'implementation', label: '코드 재작성과 오류 복구' },
  demo: { id: 'demo', label: '시연 영상' },
  lessons: { id: 'lessons', label: '개발을 통해 배운 점' },
};
const videoId = 'XO9hHy1wwx8';

const project: Omit<OpenSourceModel, 'demoPlaying' | 'playDemo'> = {
  sections: [
    { id: 'automation-scope', label: '실험 자동화의 범위' },
    { id: 'architecture', label: '아키텍처와 자가 복구' },
    { id: 'results', label: '타이타닉 실험 결과' },
    { id: 'review', label: '성과와 회고' },
    ...Object.values(documentSections),
  ],
  documentSections,
  contestUrl: 'https://www.oss.kr/pages/2',
  demoUrl: `https://youtu.be/${videoId}`,
  demoEmbedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`,
  requirements: [
    '입력 코드를 반복 실행할 수 있도록 재작성',
    '생성한 코드 점검 및 실패 시 자가 복구',
    '며칠에서 몇 주 동안 실험을 이어갈 수 있는 구조 설계',
  ],
  figures: {
    poster: { src: poster, width: 2399, height: 3387, alt: '2025 오픈소스 개발자대회 참가 안내 포스터' },
    iterations: { src: iterations, width: 2672, height: 1404, alt: '첫 MVP에서 독립 모듈 구성을 거쳐 단일 워크플로우에 이른 세 가지 설계 버전' },
    workflow: { src: workflow, width: 1394, height: 1168, alt: '코드 분석, 인자 탐색, 재작성, API 작성, 실행 및 결과 분석으로 이어지는 최종 워크플로우' },
    contract: { src: contract, width: 1676, height: 728, alt: '실험 디렉터리의 구조, 코드 실행 결과, 실행 인자를 정의한 API 예시' },
    actors: { src: actors, width: 1464, height: 796, alt: '분석·재작성·실행 노드와 파일 시스템 간의 데이터 흐름' },
    recovery: { src: recovery, width: 1104, height: 394, alt: '코드 실행 결과를 정상, 런타임 오류, 파일 시스템 규약 불일치로 나누는 복구 경로' },
    prompt: { src: prompt, width: 2608, height: 1000, alt: '실행 결과와 오류 기록을 코드 재작성 노드의 프롬프트로 전달하는 과정' },
  },
  containerCode,
};

export function useOpenSource(): OpenSourceModel {
  useDocumentTitle('AutoFineTuner · 2025 오픈소스 개발자대회');
  const [demoPlaying, setDemoPlaying] = useState(false);
  return { ...project, demoPlaying, playDemo: () => setDemoPlaying(true) };
}
