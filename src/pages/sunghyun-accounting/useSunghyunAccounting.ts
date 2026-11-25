import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import type { SunghyunAccountingModel } from './types';
import baseline from './assets/baseline-workbooks.webp';
import pipeline from './assets/document-pipeline.webp';
import audit from './assets/audit-trail.webp';
import chat from './assets/chat-retrieval.webp';

const project: SunghyunAccountingModel = {
  sections: [
    { id: 'task', label: '담보물배분표 작성 과제' },
    { id: 'workflow', label: '문서 분리부터 엑셀 작성까지' },
    { id: 'evaluation', label: '골든셋과 오류 추적' },
    { id: 'extraction', label: '문서 추출 비용과 성공률' },
    { id: 'tuning', label: '대조 오류와 평가 결과' },
    { id: 'assistant', label: '회계사용 RAG 챗봇' },
  ],
  repository: 'https://github.com/yoosung5480/collateral-agent.git',
  tables: {
    baseline: {
      caption: '담보물배분표 작성 결과 비교',
      columns: ['작성 방식', '소요 시간', '가중 F1 점수'],
      rows: [
        ['개발한 시스템', '268초', '93.00'],
        ['GPT-5.6-sol (웹)', '55분', '80.16'],
        ['Claude Opus 5 (CLI)', '3시간 40분', '62.49'],
      ],
    },
    documents: {
      caption: '문서별 추출 범위',
      columns: ['입력 문서', '원본 → 선별', '읽어야 하는 내용'],
      rows: [
        ['감정평가서', '104쪽 → 총 4쪽 이내', '기계기구·토지·건축물 감정평가액'],
        ['저당목록', '58쪽 → 9쪽 이내', '저당 번호별 기계기구 목록'],
        ['등기부등본', '32쪽 → 5쪽 이내', '표제부 및 을구의 현재 유효한 권리'],
      ],
    },
    extraction: {
      caption: '문서 내용 추출 단계 실험',
      columns: ['추출 방식', '성공률', '소요 시간', 'API 청구액'],
      rows: [
        ['전체 문서 · 단일 모델', '50%', '691초', '$9'],
        ['페이지 분리 · 문서별 모델', '100%', '122초', '$0.4'],
      ],
    },
    criteria: {
      caption: '평가 항목별 가중치와 결과',
      columns: ['평가 항목', '가중치', '개발 시스템', 'GPT', 'Claude'],
      rows: [
        ['담보 구조', '15%', '100.00', '57.14', '85.71'],
        ['근저당 관계', '20%', '100.00', '80.00', '100.00'],
        ['금액 값', '20%', '92.00', '86.96', '60.00'],
        ['부동산 세부', '15%', '90.00', '75.00', '100.00'],
        ['기계 세부', '15%', '100.00', '100.00', '0.00'],
        ['목록 포함 관계', '15%', '74.0', '79.63', '17.54'],
      ],
    },
  },
  figures: {
    baseline: {
      src: baseline, width: 1702, height: 608,
      alt: 'Claude와 GPT가 작성한 담보물배분표의 병합 셀과 대조표 항목 비교',
      caption: '같은 지시로 만든 두 엑셀 파일. 채권 병합과 금액 기재 결과가 달랐습니다.',
    },
    pipeline: {
      src: pipeline, width: 2716, height: 1240,
      alt: 'PDF 세 종류에서 필요한 페이지를 선별하고 추출·대조한 뒤 엑셀로 작성하는 흐름도',
      caption: '문서와 단계별로 모델을 배치한 담보물배분표 작성 흐름',
    },
    audit: {
      src: audit, width: 2510, height: 1046,
      alt: '문서 인식과 엑셀 작성을 위한 검증 JSON, 단계별 산출물 폴더, 제조사 표기 대조 예시',
      caption: '문서에서 읽은 값, 회계법인의 정답 엑셀, 단계별 실행 기록을 함께 대조했습니다.',
    },
    chat: {
      src: chat, width: 2540, height: 906,
      alt: '회계사 질의 화면과 JSON 처리 기록을 청킹·임베딩·검색해 챗봇에 전달하는 흐름',
      caption: '처리 기록을 검색한 결과와 최종 배분표를 연결해 회계사의 질의에 답하는 구조',
    },
  },
};

export function useSunghyunAccounting(): SunghyunAccountingModel {
  useDocumentTitle('성현회계법인 · 담보물배분표 자동화');
  return project;
}
