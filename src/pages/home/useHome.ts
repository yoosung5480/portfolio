import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import { useEffect, useState } from 'react';
import { projectDirectory, type ProjectSlug } from '../../shared/data/projects';
import type { CarouselControls, HomeModel, ProjectCard } from './types';

const projectDetails: Record<
  ProjectSlug,
  Omit<ProjectCard, 'slug' | 'title'>
> = {
  hai: {
    field: 'COMPUTER VISION',
    summary:
      '데이터 구축부터 모델 학습·추론까지 직접 설계했습니다. 리더보드 weighted AUC 0.94를 기록했습니다.',
    result: 'Hecto AI Challenge 최종 6위',
  },
  speaknote: {
    field: 'RETRIEVAL SYSTEMS',
    summary:
      '강의 음성과 자료를 연결해 필기용 주석을 생성합니다. 팀에서 CRAG와 비동기 요청 처리를 설계했습니다.',
    result: 'AI·SW 융합 해커톤 최우수상',
  },
  'open-source': {
    field: 'ML AUTOMATION',
    summary:
      '실험 코드를 실행하고 오류를 스스로 복구합니다. 2025년 10월 Kaggle 타이타닉 점수 0.779를 기록했습니다.',
    result: '2025 오픈소스 개발자대회 동상',
  },
};

const portfolio: Omit<HomeModel, 'carousel'> = {
  projects: projectDirectory.map((project) => ({
    ...project,
    ...projectDetails[project.slug],
  })),
  education: [
    { date: '2026.06.25 – 2026.07.20', name: 'NVIDIA 딥러닝 PBL', detail: '135시간 과정 수료' },
    { date: '2023.03 – 현재', name: '부산대학교 컴퓨터공학과', detail: '졸업예정' },
    { date: '2016.03 – 2019.02', name: '용인고등학교', detail: '졸업' },
  ],
  awards: [
    {
      date: '2026.07',
      name: '부산대 딥러닝 PBL 팀 프로젝트 우수상',
      detail: '부산대 AI융합교육원·한컴이노스트림 주관',
    },
    {
      date: '2026.02',
      name: 'HAI 딥페이크 감지모델 개발대회, 오프라인 본선 top10 진출',
      detail: 'Hecto , 데이콘 주관 도커이미지 제출 재현성 통과 ',
    },
    {
      date: '2025.12',
      name: '2025 오픈소스 개발자대회 AI 부문 동상',
      detail: '과학기술정보통신부 주관',
    },
    {
      date: '2025.07',
      name: '제10회 AI·SW 융합 해커톤 일반부 최우수상',
      detail: '과학기술정보통신부 · 부산광역시 주관',
    },
    {
      date: '2025.05',
      name: 'Upstage x 부산대 Document Challenge 최우수상',
      detail: '부산대 AI융합교육원 · Upstage 주관',
    },
  ],
  research: [
    {
      date: '2024.07 – 2026.02',
      name: '부산대학교 컴퓨터비전 연구실 VIPLAB',
      detail: '학부연구생',
    },
    {
      date: '2025.12 – 2026.02',
      name: 'HAI · Hecto AI Challenge',
      detail: '딥페이크 감지 모델 개발. Private Score 리더보드 11위 / 468팀.',
    },
    {
      date: '2025.05 – 2025.11',
      name: 'VIPLAB · 독도 수중 어종 객체탐지',
      detail:
        '진행 중인 연구실 팀 프로젝트에 합류해 해양 산호초 세그멘테이션 데이터셋을 활용했습니다. 기존 YOLO 모델의 mAP@0.5를 0.902에서 0.911로 개선했습니다.',
    },
    {
      date: '2025.05 – 2025.12',
      name: 'AutoFineTuner',
      detail:
        '머신러닝 실험 자동화 하네스 개발. 사람 개입없이 타이타닉 리더보드 0.72727 -> 0.78947 자가개선 (GPT-4.1기준)',
    },
    {
      date: '2025.05 – 2025.11',
      name: 'VIPLAB · 독도 수중 어종 객체탐지',
      detail:
        '진행 중인 연구실 팀 프로젝트에 합류해 해양 산호초 세그멘테이션 데이터셋을 활용했습니다. 기존 YOLO 모델의 mAP@0.5를 0.902에서 0.911로 개선했습니다.',
    },
    {
      date: '2025.05 – 2025.11',
      name: 'VIPLAB · 독도 수중 어종 객체탐지',
      detail:
        '진행 중인 연구실 팀 프로젝트에 합류해 해양 산호초 세그멘테이션 데이터셋을 활용했습니다. 기존 YOLO 모델의 mAP@0.5를 0.902에서 0.911로 개선했습니다.',
    },
  ],
  skills: [
    { group: '언어', items: ['Python', 'C++', 'Java', 'JavaScript'] },
    {
      group: '프레임워크 · 환경',
      items: ['PyTorch', 'TensorFlow', 'LangChain', 'Linux'],
    },
    {
      group: '연구 · 개발 분야',
      items: [
        '컴퓨터 비전',
        '자연어 처리(NLP)',
        '데이터 분석',
        '워크플로우 자동화',
      ],
    },
  ],
  activities: [
    {
      title: '교내 SW 스터디 그룹장 · 우수조 선정',
      detail:
        '광진구 키즈카페 입지를 분석하는 데이터 분석 대회에 출전했습니다.',
      link: 'https://github.com/2025-PNU-SW-StudyGroup/PNUSW-14',
    },
    {
      title: '부산대학교 정보의생명공학부 학생회',
      detail: '2024년 기획부원으로 학내 행사 기획과 운영에 참여했습니다.',
    },
    {
      title: '경제·시사 동아리 ERIP',
      detail:
        '조장으로서 경제·정책 이슈에 관한 토론과 분석 활동에 참여했습니다.',
    },
  ],
  language: {
    name: 'OPIc',
    language: '영어',
    grade: 'IH',
    date: '2026.09.10',
  },
};

function useProjectCarousel(count: number): CarouselControls {
  const [active, select] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(() => !document.hidden);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = () => {
      if (preference.matches) setPlaying(false);
    };
    const updateVisibility = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', updateVisibility);
    preference.addEventListener('change', updateMotion);
    return () => {
      document.removeEventListener('visibilitychange', updateVisibility);
      preference.removeEventListener('change', updateMotion);
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || !visible) return;
    const timer = window.setTimeout(() => select((active + 1) % count), 5000);
    return () => window.clearTimeout(timer);
  }, [active, count, hovered, playing, visible]);

  return {
    active,
    playing,
    select,
    toggle: () => setPlaying((value) => !value),
    pause: () => setPlaying(false),
    setHovered,
  };
}

export function useHome(): HomeModel {
  useDocumentTitle();
  const carousel = useProjectCarousel(portfolio.projects.length);
  return { ...portfolio, carousel };
}
