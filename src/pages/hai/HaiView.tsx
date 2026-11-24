import { Link } from 'react-router';
import { Icon } from '../../shared/ui/icon/Icon';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import { ProjectLayout } from '../../shared/ui/project-layout/ProjectLayout';
import { ArchiveView } from './ArchiveView';
import pipeline from './assets/fig-14.webp';
import aucCurve from './assets/fig-16.webp';
import lossCurve from './assets/fig-17.webp';
import type { HaiModel } from './types';
import s from './Hai.module.css';

export function HaiView({ model }: { model: HaiModel }) {
  return <article>
    <header className={s.hero}>
      <div className={s.wrap}>
        <Link to="/?section=projects" className={s.back}><Icon name="back" size={16}/>프로젝트 목록</Link>
        <div className={s.heroGrid}>
          <div>
            <p className={s.field} lang="en">Computer vision</p>
            <h1>HAI 딥페이크 감지</h1>
            <p className={s.intro}>처음 보는 합성 방식에서도 얼굴 위조의 흔적을 찾을 수 있을까? Hecto AI Challenge에서 데이터 구축부터 모델 학습과 추론까지 직접 설계했습니다.</p>
            <a className={s.competition} href={model.competitionUrl} target="_blank" rel="noreferrer">대회 페이지 <Icon name="link" size={15}/></a>
          </div>
          <div className={s.cover}><ProjectCover slug="hai" /></div>
        </div>
        <dl className={s.facts}>{model.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
      </div>
    </header>
    <ProjectLayout current="hai" sections={model.sections}>
      <div className={s.story}>
        <section aria-labelledby="problem">
          <h2 id="problem" tabIndex={-1}>문제 정의</h2>
          <p className={s.lead}>라벨은 진짜와 가짜, 두 개뿐이지만 위조 방식은 하나가 아니었습니다.</p>
          <p>대회는 평가용 이미지와 영상만 제공했습니다. 영상도 프레임별로 판정해야 했고, 흐림이나 압축, 깜빡임 때문에 얼굴을 알아보기 어려운 입력도 있었습니다. 익숙한 합성 방식에서만 높은 점수를 내는 모델을 피하려면 데이터와 검증 기준부터 설계해야 했습니다.</p>
        </section>
        <section aria-labelledby="pipeline">
          <h2 id="pipeline" tabIndex={-1}>데이터와 모델</h2>
          <h3>본 적 없는 생성 방식을 검증에 남기기</h3>
          <p>FaceForensics++, Celeb-DF와 디퓨전 기반 데이터를 함께 확보했습니다. 초기에 학습과 비슷한 생성 방식으로 검증하자 점수가 지나치게 높았습니다. 검증셋을 다시 구성해 학습에서 보지 못한 방식에도 탐지 신호가 남는지 확인했습니다.</p>
          <h3>두 단계로 학습하고, 프레임별로 추론하기</h3>
          <p>Meta의 PE spatial 백본은 고정하고 LoRA와 LayerNorm을 조정했습니다. 먼저 기존 합성 데이터로 기준 모델을 학습한 뒤 디퓨전 이미지로 미세 조정했습니다. 여러 분류기를 비교한 결과, 이 실험에서는 2층 MLP가 가장 좋은 성능을 냈습니다.</p>
          <figure className={s.figure}>
            <a href={pipeline} target="_blank" rel="noreferrer" aria-label="추론 파이프라인 도식 크게 보기 (새 창)"><img src={pipeline} width="2410" height="1248" loading="lazy" alt="영상에서 프레임을 추출하고 얼굴을 검출한 다음 모델 예측을 제출 파일로 모으는 과정"/></a>
            <figcaption>얼굴 전처리, 프레임별 예측, 최종 제출 파일 생성을 연결한 추론 파이프라인</figcaption>
          </figure>
        </section>
        <section aria-labelledby="validation">
          <h2 id="validation" tabIndex={-1}>검증 결과</h2>
          <p>두 번째 학습 단계에서 훈련 손실은 계속 줄었지만, 3에포크 부근부터 검증 성능이 떨어졌습니다. 디퓨전 생성 이미지 수를 3만 장에서 1만 장으로 줄이고 실제 이미지는 유지했을 때 가장 좋은 결과를 얻었습니다.</p>
          <div className={s.charts}>
            <figure className={s.figure}><a href={aucCurve} target="_blank" rel="noreferrer" aria-label="검증 AUC 곡선 크게 보기 (새 창)"><img src={aucCurve} width="852" height="530" loading="lazy" alt="검증 AUC가 초반에 상승한 뒤 하락하는 그래프"/></a><figcaption>에포크별 검증 AUC</figcaption></figure>
            <figure className={s.figure}><a href={lossCurve} target="_blank" rel="noreferrer" aria-label="손실 곡선 크게 보기 (새 창)"><img src={lossCurve} width="864" height="540" loading="lazy" alt="학습 손실과 검증 손실이 반대 방향으로 진행되는 그래프"/></a><figcaption>학습 손실과 검증 손실</figcaption></figure>
          </div>
          <dl className={s.scores}><div><dt>Private Score</dt><dd>0.94073</dd></div><div><dt>Private 리더보드</dt><dd>11위</dd></div><div><dt>코드 검증 후 최종 순위</dt><dd>6위 <small>/ 458팀</small></dd></div></dl>
          <p>리더보드 집계 후 코드와 재현성 검증을 통과해 상위 10팀의 오프라인 발표에 진출했습니다.</p>
        </section>
        <section aria-labelledby="review">
          <h2 id="review" tabIndex={-1}>개발 회고</h2>
          <p>공용 GPU를 나눠 쓰면서 큰 백본과 배치 내 Real/Fake 비율을 함께 관리해야 했습니다. 외부 설정 파일로 실험 조건을 분리하고 DDP로 여러 GPU를 활용하는 훈련 프레임워크를 직접 만들었습니다. 덕분에 새로운 가설이 생길 때마다 모델과 데이터 구성을 바꿔 비교했고, 최종 추론 환경도 Docker로 재현할 수 있었습니다.</p>
        </section>
        <section aria-labelledby="archive">
          <h2 id="archive" tabIndex={-1}>전체 연구 기록</h2>
          <p>논문 비교, 데이터 구성표, 두 단계의 학습 설정 코드와 대회 결과 화면을 원문 순서로 읽을 수 있습니다.</p>
          <ArchiveView/>
        </section>
      </div>
    </ProjectLayout>
  </article>;
}
