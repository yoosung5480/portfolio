import type { ProjectSlug } from '../../data/projects';
import hai from './assets/fig-22.webp';
import speaknote from './assets/poster.webp';
import award from './assets/award.webp';

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
};

export function ProjectCover({ slug }: { slug: ProjectSlug }) {
  return <img {...covers[slug]} />;
}
