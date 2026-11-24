import { Link } from 'react-router';
import { Icon } from '../../shared/ui/icon/Icon';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import { ProjectLayout } from '../../shared/ui/project-layout/ProjectLayout';
import { OriginalDocument } from './OriginalDocument';
import { ProjectFigure } from './ProjectFigure';
import type { OpenSourceModel } from './types';
import styles from './OpenSource.module.css';

export function OpenSourceView({ model }: { model: OpenSourceModel }) {
  const [scope, architecture, results, review, original] = model.sections;
  return <article>
    <header className={styles.hero}>
      <div className={styles.wrap}>
        <Link className={styles.back} to="/?section=projects"><Icon name="back" size={16} /> 프로젝트 목록</Link>
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.field} lang="en">ML Automation</p>
            <h1>AutoFineTuner</h1>
            <p className={styles.lead}>머신러닝 코드를 여러 조건으로 반복 실행하고, 오류가 생기면 이전 실행 기록을 읽어 코드를 고치는 실험 자동화 도구입니다.</p>
            <a className={styles.demo} href={model.demoUrl} target="_blank" rel="noreferrer">시연 영상 보기 <Icon name="link" size={16} /></a>
          </div>
          <div className={styles.cover}><ProjectCover slug="open-source" /></div>
        </div>
        <dl className={styles.facts}>
          <div><dt>개발 기간</dt><dd>2025.05.20 – 12.05</dd></div>
          <div><dt>담당 역할</dt><dd>1인 개발 · ML 훈련 자동화</dd></div>
          <div><dt>사용 기술</dt><dd>Python · LangChain</dd></div>
          <div><dt>성과</dt><dd>2025 오픈소스 개발자대회 동상</dd></div>
        </dl>
      </div>
    </header>

    <ProjectLayout current="open-source" sections={model.sections}>
      <section className={styles.section}>
        <h2 id={scope.id} tabIndex={-1} className={styles.sectionTitle}>{scope.label}</h2>
        <div className={styles.content}>
          <p>하이퍼파라미터를 바꿀 때마다 연구자가 결과를 확인하고 다음 실험을 시작해야 했습니다. 연구자는 실험 목표와 허용 횟수를 정하고, 코드 재작성부터 결과 기록까지는 도구가 맡도록 설계했습니다.</p>
          <div className={styles.requirements}>
            <div><h3>구현한 기능</h3><ul>{model.requirements.map(item => <li key={item}>{item}</li>)}</ul></div>
            <div><h3>남은 과제</h3><p>실험 결과를 해석해 다음 실험 전략 자체를 개선하는 기능</p></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id={architecture.id} tabIndex={-1} className={styles.sectionTitle}>{architecture.label}</h2>
        <div className={styles.content}>
          <p>초기 MVP를 독립된 모듈로 나눴다가 최종적으로는 단일 워크플로우로 정리했습니다. 각 노드는 같은 <code>Container</code>를 전달받아 소스 코드, 인자, 실행 결과, 수리 이력을 함께 읽습니다.</p>
          <ol className={styles.steps}>
            <li><h3>코드 분석과 재작성</h3><p>소스 코드에서 조정할 인자를 찾고, 반복 실행할 수 있는 코드와 실행 인자를 담은 <code>api.json</code>을 만듭니다.</p></li>
            <li><h3>실행 결과 점검</h3><p>코드가 끝까지 실행됐는지와 출력 디렉터리·결과 파일이 규약을 따르는지 검사합니다. 런타임 오류와 파일 구조 불일치를 별도로 기록합니다.</p></li>
            <li><h3>기록을 이용한 복구</h3><p>재작성 노드는 실패 원인과 이전 수정 코드를 함께 읽습니다. 정해 둔 복구 횟수를 소진하면 실행을 종료합니다.</p></li>
          </ol>
          <ProjectFigure image={model.figures.recovery} caption="코드 실행 후 상태에 따라 재작성 노드로 돌아가는 흐름" />
          <p>개발 당시 GPT-4.1에서는 코드 재작성 시도의 약 절반이 실패했지만, 수리 이력을 이용한 재시도로 복구한 사례가 있었습니다. GPT-5로 변경한 뒤에는 재작성 실패가 드물었다고 기록했습니다.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id={results.id} tabIndex={-1} className={styles.sectionTitle}>{results.label}</h2>
        <div className={styles.content}>
          <p>Kaggle 타이타닉 생존 예측에서 동일한 입력 소스 파일로 실험했습니다. 첫 실행과 자동 튜닝 후 제출한 모델의 리더보드 점수를 비교했습니다.</p>
          <dl className={styles.scores}>
            <div><dt>최초 실행 점수</dt><dd>0.72727</dd></div>
            <div><dt>자동 튜닝 후 점수</dt><dd>0.78947</dd></div>
          </dl>
          <p className={styles.note}>위 수치는 프로젝트 상세 기록의 제출 비교값입니다. 포트폴리오 요약에는 2025년 10월 기준 점수가 0.779, 순위가 상위 8%로 기록돼 있습니다.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 id={review.id} tabIndex={-1} className={styles.sectionTitle}>{review.label}</h2>
        <div className={styles.content}>
          <p>전국 581팀, 1,561명이 참가한 2025 오픈소스 개발자대회에서 AI 부문 동상을 받았습니다. 실험 단계를 나누고 각 단계의 입출력 형식을 먼저 정한 경험은 다른 연구 코드를 읽고 필요한 부분을 조합하는 기반이 됐습니다.</p>
          <p>실험 전체를 터미널에서 조작해야 해 처음 쓰는 사람이 접근하기 어렵다는 피드백도 받았습니다.</p>
          <a className={styles.textLink} href={model.contestUrl} target="_blank" rel="noreferrer">오픈소스 개발자대회 안내 <Icon name="link" size={14} /></a>
        </div>
      </section>
      <section className={styles.section}>
        <h2 id={original.id} tabIndex={-1} className={styles.sectionTitle}>{original.label}</h2>
        <details className={styles.original}>
          <summary>원문 읽기</summary>
          <OriginalDocument model={model} />
        </details>
      </section>
    </ProjectLayout>
  </article>;
}
