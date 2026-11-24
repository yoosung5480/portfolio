import type { OpenSourceModel } from './types';
import { ProjectFigure } from './ProjectFigure';
import styles from './OpenSource.module.css';

export function OriginalDocument({ model }: { model: OpenSourceModel }) {
  return <div className={styles.transcript}>
    <h3>2025 오픈소스 개발자대회</h3>
    <p>URL: <a href={model.contestUrl} target="_blank" rel="noreferrer">{model.contestUrl}</a></p>
    <p>기술: LangChain, Python</p>
    <p>날짜: 2025년 5월 20일 → 2025년 12월 5일</p>
    <p>팀구성: 개인 프로젝트</p>
    <p><em>🎨 일은 AI가 한다! 연구자, 엔지니어 분들은 아이디어를 자유롭게 찾고 연구하자!</em></p>
    <p><em>“AI와 사람의 협업 생산 tool”</em></p>
    <p>ML, 딥러닝 개발에서는 하이퍼파라미터 즉, 최적의 설정값들을 찾고, 데이터에 대해서 얼마나 훈련시키냐 이 모든 과정이 보통 Cherry picking 과정으로 이뤄집니다. 검증과정이 있지만, 모든 케이스에 대해서 사람이 직접 관측하면서 코드를 돌리는건 시간적, 자원적으로 아주 어렵습니다.</p>
    <p>하지만 AI가 대신해서 코드 실행결과를 보고, 파라미터 조합을 연구해줘서 정해진 시간-횟수내에 필요한 작업을 다 자동으로 해주면 어떨까요? 많은 엔지니어는 이제 소중한 시간자원을 연구와 아이디어 생산성에 더 몰입할 수 있을것입니다.</p>
    <h4><strong>Infomation</strong></h4>
    <p><strong>개발 기간:</strong> 2025/05/20 ~ 2025/12/05</p>
    <p><strong>팀 구성:  1</strong>인</p>
    <p><strong>담당 업무:</strong> ML훈련 완전 자동화</p>
    <p><strong>성과 : 동상 (전국 581팀, 1561명참여)</strong></p>
    <ProjectFigure image={model.figures.poster} caption="대회 포스터" />
    <h4><strong>Review</strong></h4>
    <p>저가 느꼈던 개발 감각과 아키텍쳐 구현사고를 실제 저가 겪게될 문제에 접목해서 해결해보자 했습니다.</p>
    <p>실제로 저가 스스로 파인튜닝하고 설계한 타이타닉 데이터셋 최대성능 모델보다 높은 성능을 리더보드에서 보였습니다.</p>
    <p>(0.78947)과, 동일 입력 소스파일 최초 실행결과(0.72727) 제출 비교 (전체 제출중 상위 8%의 성적)</p>
    <p>하지만 GUI도 없고 모든 인터페이스가 터미널 구동이라서 불친절한 워크플로우라는 피드백도 잇었습니다.</p>
    <h4>프로젝트 진행 과정</h4>
    <h5>01. 요구사항정의</h5>
    <p>“사람의 요구사항에 맞게 며칠 몇주에 거쳐서라도 성실히 일하는 나만의 연구비서 개발”</p>
    <ul>
      <li>완료 ·  AI가 스스로 목표 코드를 재작성해서 반복실행이 적합하게 변경하기</li>
      <li>완료 ·  AI가 생성한 코드에 대한 점검및 자가 수복 기능</li>
      <li>완료 ·  며칠-몇주동안 지속가능할만큼의 시스템 안정성</li>
      <li>미완료 ·  AI의 실험결과에 대한 자기 개선 능력 설계</li>
    </ul>
    <h5>02. 전체 워크플로우 및 아키텍쳐 구상</h5>
    <ProjectFigure image={model.figures.iterations} caption="아키텍처 설계 버전 비교" />
    <p>왼쪽부터 시기별로 만들어서 최종본은 오른쪽 아키텍쳐입니다.</p>
    <ProjectFigure image={model.figures.workflow} caption="최종 워크플로우" />
    <p>전체 아키텍쳐 및, 메인 시나리오 설명</p>
    <h5>03. AI에게 제약 사항및 내부 형식 정의</h5>
    <ProjectFigure image={model.figures.contract} caption="디렉터리 구조와 JSON 형식" />
    <p>왼쪽부터, 파일 디렉토리구조, 코드실행 결과, 코드 스크립트 빌드를 위한 api.json형식</p>
    <p>저는 llm이 안정성있게 실험을 수행하게 하기 위해서 디렉토리 구조와 실행결과, 실행 스크립트 빌드를 위한 파일에 대한 명시를 했습니다. 내부적으로 점검노드를 따라서 오류가 없더라도, 위 구조를 따르지 않는 failure에도 다시 코드를 짜도록 했습니다.</p>
    <h5>03. 시스템 개발</h5>
    <p>간단히 엑터와 노드간의 시나리오 흐름도 입니다.</p>
    <p>가장 중요한 처리는 코드 재작성 노드입니다. 맡은 역할이 가장 크기때문에 당시 가능한 가장 좋은 모델은 GPT-5에 내부적으로 프롬프트 빌드 과정을 체계화해서 시스템 안정성과 자가 복구 가능성을 높혔습니다.</p>
    <ProjectFigure image={model.figures.actors} caption="시스템 노드 간 실행 흐름" />
    <pre tabIndex={0} aria-label="원문 Python Container 타입"><code>{model.containerCode}</code></pre>
    <p>재작성된 코드 실행 결와에 따라서 rewriteNodeCode가 업데이트 되고, 이를 고려해서 코드 재작성 작업이 이뤄집니다.</p>
    <ProjectFigure image={model.figures.recovery} caption="정상 실행과 오류의 분기" />
    <p>container가 코드 재작성 노드를 거치는 시나리오는 위와 같습니다. repairMaxTries 시도에도 불구하고 작성된 코드가 failure가 이뤄나면 시스템은 종료됩니다. 또한 매번 repairHistroy를 통해서 현재 이전에 리펙토링된 코드 히스토리가 있으면 이를 고려해서 자가수복하게 합니다.</p>
    <ProjectFigure image={model.figures.prompt} caption="코드 재작성 프롬프트의 구성" />
    <p>처음 개발당시, GPT-4.1 기준 코드 재작성 failure은 대략 50%였습니다. GPT-5로 업그레이드후 failure은 거의 없었습니다. 중요한건 GPT-4.1 모델의 사용해도 몇번의 failure후에도 결국 스스로 복구성공을 했다는 것 입니다. 결국 시스템 전체의 failure는 GPT-4.1 모델에서도 방지했었음을 볼 수 있습니다.</p>
    <h5>04. 시연 영상</h5>
    <p><a href={model.demoUrl} target="_blank" rel="noreferrer">{model.demoUrl}</a></p>
    <h5>REVIEW POINT</h5>
    <p><strong>🩹 아키텍쳐 설계 감각</strong></p>
    <p>설계에 있어서는 패키지간의 규약이 얼마나 나중에 크게 도움이 되는지 깨달았습니다.</p>
    <p>시스템이 복잡해지고 커질때 내부적으로 정한 규칙이 (예를들어, 프롬프트 빌더는 str형식만을 주고받는다)등이 크게 도움이 됐습니다.</p>
    <p>또한 상황에 맞는 방식이 있지만, 범용적인 좋은 설계는 없다고 생각하게 됐습니다. 그리고 이런 복잡한 워크플로우에서 모든 노드가 특정 컨테이너 객체만으로 작동하게 하는것이 이번 프로젝트에서 복잡한 동작과정을 적은 에러로 빠르게 개발할수있게한 포인트였다고 생각합니다.</p>
    <p>마지막으로 AI시대에서 설계능력과 본인의 개발방법론이 있으면 생산성이 엄청나게 확대될 수 있음을 깨달았습니다. 본인만의 개발 방법론이 있고 체계화가 돼있을경우 프로젝트 확장과 수정-버전 업데이트가 혼자서 하는 프로젝트이지만 엄청난 가속효과가 있을 수 있다는것을 체감했습니다.</p>
    <p><strong>⏲ ML, 딥러닝 개발 감각 체계화</strong></p>
    <p>이 프로젝트의 컨셉은 “체계화 된 일이면, AI가 대체할 수 있다”라는 가정하에서 시작했습니다.</p>
    <p>그럼으로  이 프로젝트를 성공시키기 위해서는 ML, 딥러닝 개발에 대한 업무를 체계화해서 정리할 필요가 있었습니다. 그러다보니 딥러닝에 개발을 위한 프레임워크 개발 감각을 약간 터득할수 있게 됐습니다. 이전에 연구실 프로젝트 할때는 다른분들의 깃허브 코드를 돌리는데 급급했던 저는 이제 다른분들의 프레임워크를 이해하고, 필요한 부분만 떼오거나 수정해서 나만의 프레임워크를 만들수 있게됐다는 자신감을 얻게됐습니다.</p>
  </div>;
}
