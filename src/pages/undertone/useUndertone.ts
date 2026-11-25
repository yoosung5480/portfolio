import { useDocumentTitle } from '../../shared/hooks/useDocumentTitle';
import workflow from './assets/recommendation-workflow.webp';
import verifier from './assets/candidate-verifier.webp';
import sample from './assets/golden-set-sample.webp';
import loop from './assets/tuning-loop.webp';
import type { UndertoneModel } from './types';

const project: UndertoneModel = {
  sections: [
    { id: 'workflow', label: '대화 맥락 추천 과정' },
    { id: 'golden-set', label: '후보 검증 모듈과 골든셋' },
    { id: 'optimization', label: '프롬프트와 모델 튜닝' },
    { id: 'evaluation', label: '평가 지표 검증' },
    { id: 'results', label: '실험 결과와 모델 선택' },
  ],
  links: {
    repository: 'https://github.com/yoosung5480/undertone',
    dataset: 'https://aihub.or.kr/aihubdata/data/view.do?dataSetSn=71694',
    evaluation: 'https://docs.vectara.com/docs/rest-api/evaluate-factual-consistency',
  },
  figures: {
    workflow: { src: workflow, width: 1944, height: 728, alt: '채팅 화면에서 추천 API, 검색, 생성, 검증을 거쳐 추천 카드가 돌아오는 흐름', caption: '추천 요청과 응답의 흐름. 개발 대시보드에는 지연 시간, 토큰, 비용, 프롬프트와 모델을 기록합니다.' },
    verifier: { src: verifier, width: 684, height: 525, alt: '후보를 사실·인물·상황별로 채점한 뒤 기준 점수를 넘긴 상위 후보를 고르는 검증 모듈', caption: 'answer_verifier.py의 범주별 검증 과정' },
    sample: { src: sample, width: 797, height: 730, alt: '문맥 정답에 원본 발화 인덱스와 근거를 연결한 골든셋 데이터 예시', caption: '대화의 원본 발화와 근거를 함께 저장한 골든셋' },
    loop: { src: loop, width: 1856, height: 777, alt: '테스트 대화에서 후보를 생성하고 골든셋과 비교한 뒤 Codex가 다음 프롬프트와 모델을 선택하는 반복 실험', caption: '실험 결과를 다음 프롬프트와 모델 선택에 사용하는 튜닝 과정' },
  },
  validation: [
    { label: '정답', candidate: '‘그 계기’가 7/13 물가 부담과 라면 가격 인하 논의를 받음', interpretation: '지시어와 맥락을 함께 복원', embedding: '0.827', support: '0.914', coverage: '0.511', equivalence: '0.656' },
    { label: '낮은 우선순위', candidate: '라면 가격 인하 논의가 있었음', interpretation: '날짜와 물가 부담이 누락', embedding: '0.654', support: '0.212', coverage: '0.065', equivalence: '0.100' },
    { label: '오답', candidate: '최근 가격 논쟁 긍정적으로 마무리', interpretation: '말투만 비슷하고 맥락이 부족', embedding: '0.316', support: '0.566', coverage: '0.048', equivalence: '0.089' },
  ],
  quality: [
    { model: 'solar-pro3', equivalence: '0.557', embedding: '0.664', verifierLatency: '0.83초' },
    { model: 'GPT-4.1 mini', equivalence: '0.661', embedding: '0.807', verifierLatency: '1.00초' },
    { model: 'GPT-4o mini', equivalence: '0.662', embedding: '0.795', verifierLatency: '2.01초' },
  ],
  latency: [
    { model: 'gpt-4.1-nano', seconds: '2.162' },
    { model: 'gpt-5.4-nano', seconds: '2.423' },
    { model: '5.4-mini+nano', seconds: '2.481' },
    { model: 'solar-pro3', seconds: '2.854' },
    { model: 'gpt-4.1-mini', seconds: '3.151' },
  ],
};

export function useUndertone(): UndertoneModel {
  useDocumentTitle('UnderTone · 실시간 대화 맥락 추천');
  return project;
}
