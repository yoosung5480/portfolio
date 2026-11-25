import type { ProjectSlug } from '../../data/projects';
import hai from './assets/fig-22.webp';
import speaknote from './assets/poster.webp';
import award from './assets/award.webp';
import accounting from './assets/sunghyun-accounting.webp';
import undertone from './assets/undertone.webp';

const covers = {
  hai: {
    src: hai,
    width: 1954,
    height: 1044,
    alt: '코드 검증을 통과한 HAI 챌린지 오프라인 발표 진출팀 안내',
  },
  speaknote: {
    src: speaknote,
    width: 1050,
    height: 1486,
    alt: 'SpeakNote가 참가한 제10회 AI·SW 융합 해커톤 포스터',
  },
  'open-source': {
    src: award,
    width: 840,
    height: 561,
    alt: '2025 오픈소스 개발자대회 동상 수상 현장',
  },
  'sunghyun-accounting': {
    src: accounting,
    width: 827,
    height: 724,
    alt: '담보 문서를 업로드하고 엑셀 결과물을 생성하는 성현회계법인 프로젝트 화면',
  },
  undertone: {
    src: undertone,
    width: 1045,
    height: 900,
    alt: '같은 대화에서 UnderTone 적용 전과 추천 카드가 표시된 적용 후 화면 비교',
  },
};

export function ProjectCover({ slug }: { slug: ProjectSlug }) {
  return <img {...covers[slug]} />;
}
