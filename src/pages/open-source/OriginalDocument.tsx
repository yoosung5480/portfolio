import { DemoVideo } from './DemoVideo';
import { ProjectFigure } from './ProjectFigure';
import type { OpenSourceModel } from './types';
import styles from './OpenSource.module.css';

export function OriginalDocument({ model }: { model: OpenSourceModel }) {
  const { original, requirements, workflow, contract, system, demo, lessons } = model.documentSections;

  return <>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={original.id} tabIndex={-1}>{original.label}</h2>
      <div className={styles.documentBody}>
        <p><em>일은 AI가 한다! 연구자, 엔지니어 분들은 아이디어를 자유롭게 찾고 연구하자!</em></p>
        <p><em>“AI와 사람의 협업 생산 tool”</em></p>
        <p>ML, 딥러닝 개발에서는 하이퍼파라미터, 즉 최적의 설정값들을 찾고 데이터에 대해서 얼마나 훈련시키냐 하는 이 모든 과정이 보통 Cherry picking 과정으로 이뤄집니다. 검증 과정이 있지만, 모든 케이스에 대해서 사람이 직접 관측하면서 코드를 돌리는 건 시간적, 자원적으로 아주 어렵습니다.</p>
        <p>하지만 AI가 대신해서 코드 실행 결과를 보고, 파라미터 조합을 연구해 줘서 정해진 시간과 횟수 내에 필요한 작업을 다 자동으로 해 주면 어떨까요? 많은 엔지니어는 이제 소중한 시간 자원을 연구와 아이디어 생산에 쓰며 더 몰입할 수 있을 것입니다.</p>
        <p>2025년 5월 20일부터 12월 5일까지 Python과 LangChain으로 AutoFineTuner를 혼자 개발했습니다. 머신러닝 훈련을 자동화한 이 프로젝트로 전국 581팀, 1,561명이 참가한 2025 오픈소스 개발자대회에서 동상을 받았습니다.</p>
        <p><a href={model.contestUrl} target="_blank" rel="noreferrer">오픈소스 개발자대회 안내</a></p>
        <ProjectFigure image={model.figures.poster} caption="2025 오픈소스 개발자대회 포스터" />
        <h3>타이타닉 실험과 사용자 피드백</h3>
        <p>제가 느꼈던 개발 감각과 아키텍처 구현 사고를 실제 제가 겪게 될 문제에 접목해서 해결해 보자고 했습니다.</p>
        <p>실제로 제가 스스로 파인튜닝하고 설계한 타이타닉 데이터셋 최대 성능 모델(수동 튜닝 최고점 <strong>0.779</strong>)보다 높은 성능을 리더보드에서 보였습니다. 동일 입력 소스 파일의 최초 실행 결과(<strong>0.72727</strong>)와 자동 튜닝 결과(<strong>0.78947</strong>)를 제출해 비교했고, 전체 제출 중 상위 8%의 성적을 거뒀습니다.</p>
        <p>하지만 GUI도 없고 모든 인터페이스가 터미널 구동이라서 불친절한 워크플로우라는 피드백도 있었습니다.</p>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={requirements.id} tabIndex={-1}>{requirements.label}</h2>
      <div className={styles.documentBody}>
        <p>“사람의 요구사항에 맞게 며칠, 몇 주에 걸쳐서라도 성실히 일하는 나만의 연구비서 개발”</p>
        <h3>구현한 요구사항</h3>
        <ul>
          <li>AI가 스스로 목표 코드를 재작성해서 반복 실행에 적합하게 변경하기</li>
          <li>AI가 생성한 코드에 대한 점검 및 자가 수복 기능</li>
          <li>며칠에서 몇 주 동안 지속할 수 있을 만큼의 시스템 안정성</li>
        </ul>
        <h3>남은 과제</h3>
        <p>AI의 실험 결과에 대한 자기 개선 능력 설계</p>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={workflow.id} tabIndex={-1}>{workflow.label}</h2>
      <div className={styles.documentBody}>
        <p>왼쪽부터 시기별로 만든 설계이고, 최종본은 오른쪽 아키텍처입니다.</p>
        <ProjectFigure image={model.figures.iterations} caption="왼쪽부터 초기 프로토타입, 모듈 분리안, 최종 워크플로우" />
        <p>아래는 전체 아키텍처와 메인 시나리오입니다. 코드를 분석하고 인자를 찾은 뒤 코드를 재작성하고, 실행 결과를 분석하는 흐름입니다.</p>
        <ProjectFigure image={model.figures.workflow} caption="코드 분석부터 실행 결과 분석까지의 최종 워크플로우" />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={contract.id} tabIndex={-1}>{contract.label}</h2>
      <div className={styles.documentBody}>
        <p>저는 LLM이 안정성 있게 실험을 수행하게 하기 위해서 디렉터리 구조와 실행 결과, 실행 스크립트 빌드를 위한 파일 형식을 명시했습니다. 왼쪽부터 파일 디렉터리 구조, 코드 실행 결과, 실행 스크립트 빌드를 위한 <code>api.json</code> 형식입니다.</p>
        <ProjectFigure image={model.figures.contract} caption="왼쪽부터 실험 디렉터리 구조, 실행 결과 파일, 스크립트 실행용 api.json 예시" />
        <p>내부적으로 점검 노드를 거쳐서 실행 오류가 없더라도, 위 구조를 따르지 않는 failure에도 다시 코드를 짜도록 했습니다.</p>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={system.id} tabIndex={-1}>{system.label}</h2>
      <div className={styles.documentBody}>
        <p>간단히 액터와 노드 간의 시나리오 흐름도입니다.</p>
        <p>가장 중요한 처리는 코드 재작성 노드입니다. 맡은 역할이 가장 크기 때문에 당시 가능한 가장 좋은 모델인 GPT-5를 사용하고, 내부적으로 프롬프트 빌드 과정을 체계화해서 시스템 안정성과 자가 복구 가능성을 높였습니다.</p>
        <ProjectFigure image={model.figures.actors} caption="분석·재작성·실행 노드와 파일 시스템 사이의 데이터 흐름" />
        <h3>노드가 공유하는 상태</h3>
        <p><code>Container</code>에는 입력 코드와 재작성된 코드, 실행 환경, 실험 인자, 실행 결과, 수정·튜닝 이력이 들어 있습니다. 다음은 구현에 사용한 타입 정의 전문입니다.</p>
        <pre tabIndex={0} role="region" aria-label="Python Container 타입 정의"><code>{model.containerCode}</code></pre>
        <h3>실패 유형에 따른 재시도</h3>
        <p>재작성된 코드의 실행 결과에 따라서 <code>rewriteNodeCode</code>가 업데이트되고, 이를 고려해서 코드 재작성 작업이 이뤄집니다.</p>
        <ProjectFigure image={model.figures.recovery} caption="정상 실행, 런타임 오류, 파일 시스템 규약 불일치에 따른 처리 경로" />
        <p><code>Container</code>가 코드 재작성 노드를 거치는 시나리오는 위와 같습니다. <code>repairMaxTries</code>만큼 시도했는데도 작성된 코드에서 failure가 일어나면 시스템은 종료됩니다. 또한 매번 <code>repairHistroy</code>를 통해서 이전에 리팩터링된 코드의 히스토리가 있으면 이를 고려해서 자가 수복하게 합니다.</p>
        <ProjectFigure image={model.figures.prompt} caption="실행 결과와 이전 수정 이력으로 코드 재작성 프롬프트를 구성하는 과정" />
        <p>처음 개발 당시 GPT-4.1 기준 코드 재작성 failure는 대략 50%였습니다. GPT-5로 업그레이드한 후 failure는 거의 없었습니다. 중요한 건 GPT-4.1 모델을 사용해도 몇 번의 failure 후에 결국 스스로 복구에 성공했다는 것입니다. 결국 시스템 전체의 failure는 GPT-4.1 모델에서도 방지했음을 볼 수 있습니다.</p>
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={demo.id} tabIndex={-1}>{demo.label}</h2>
      <div className={styles.documentBody}>
        <DemoVideo watchUrl={model.demoUrl} embedUrl={model.demoEmbedUrl} playing={model.demoPlaying} onPlay={model.playDemo} />
      </div>
    </section>

    <section className={styles.section}>
      <h2 className={styles.sectionTitle} id={lessons.id} tabIndex={-1}>{lessons.label}</h2>
      <div className={styles.documentBody}>
        <h3>아키텍처 설계 감각</h3>
        <p>설계에 있어서는 패키지 간의 규약이 나중에 얼마나 크게 도움이 되는지 깨달았습니다. 시스템이 복잡해지고 커질 때 내부적으로 정한 규칙, 예를 들어 “프롬프트 빌더는 <code>str</code> 형식만을 주고받는다”는 규칙이 크게 도움이 됐습니다.</p>
        <p>또한 상황에 맞는 방식이 있지만, 범용적으로 좋은 설계는 없다고 생각하게 됐습니다. 이런 복잡한 워크플로우에서 모든 노드가 특정 컨테이너 객체만으로 작동하게 하는 것이, 이번 프로젝트에서 복잡한 동작 과정을 적은 에러로 빠르게 개발할 수 있게 한 포인트였다고 생각합니다.</p>
        <p>마지막으로 AI 시대에 설계 능력과 본인의 개발 방법론이 있으면 생산성이 엄청나게 확대될 수 있음을 깨달았습니다. 본인만의 개발 방법론이 있고 체계화가 돼 있을 경우, 혼자서 하는 프로젝트이지만 프로젝트 확장과 수정, 버전 업데이트에 엄청난 가속 효과가 있을 수 있다는 것을 체감했습니다.</p>
        <h3>ML, 딥러닝 개발 감각 체계화</h3>
        <p>이 프로젝트의 콘셉트는 “체계화된 일이면, AI가 대체할 수 있다”라는 가정하에서 시작했습니다.</p>
        <p>그러므로 이 프로젝트를 성공시키기 위해서는 ML, 딥러닝 개발에 대한 업무를 체계화해서 정리할 필요가 있었습니다. 그러다 보니 딥러닝 개발을 위한 프레임워크 개발 감각을 약간 터득할 수 있게 됐습니다.</p>
        <p>이전에 연구실 프로젝트를 할 때는 다른 분들의 깃허브 코드를 돌리는 데 급급했던 저는 이제 다른 분들의 프레임워크를 이해하고, 필요한 부분만 떼 오거나 수정해서 나만의 프레임워크를 만들 수 있게 됐다는 자신감을 얻게 됐습니다.</p>
      </div>
    </section>
  </>;
}
