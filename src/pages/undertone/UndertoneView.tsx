import { Link } from 'react-router';
import { Icon } from '../../shared/ui/icon/Icon';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import { ProjectLayout } from '../../shared/ui/project-layout/ProjectLayout';
import type { UndertoneFigure, UndertoneModel } from './types';
import s from './Undertone.module.css';

function SourceFigure({ image }: { image: UndertoneFigure }) {
  return (
    <figure className={s.figure}>
      <a href={image.src} target="_blank" rel="noreferrer" aria-label={image.caption + ' 원본 크기로 보기'}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
      </a>
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

export function UndertoneView({ model }: { model: UndertoneModel }) {
  const [workflow, goldenSet, optimization, evaluation, results] = model.sections;
  return (
    <article>
      <header className={s.hero}>
        <div className={s.wrap}>
          <Link className={s.back} to="/?section=projects"><Icon name="back" size={16} /> 프로젝트 목록</Link>
          <div className={s.heroGrid}>
            <div>
              <p className={s.field} lang="en">Conversational AI</p>
              <h1>UnderTone</h1>
              <p className={s.lead}>채팅을 쓰다 잠시 멈추면, 이전 대화에서 지금 답변에 참고할 만한 사실과 관계를 찾아 추천합니다.</p>
              <a className={s.repo} href={model.links.repository} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} /> GitHub 저장소
              </a>
            </div>
            <div className={s.cover}><ProjectCover slug="undertone" /></div>
          </div>
          <dl className={s.facts}>
            <div><dt>기간 · 역할</dt><dd>1주 · 팀 리드</dd></div>
            <div><dt>담당 업무</dt><dd>골든셋 구축 · 평가 설계 · 답변 후보 검증</dd></div>
            <div><dt>사용 기술</dt><dd>Python · LangChain · Structured Output · FastAPI</dd></div>
            <div><dt>성과</dt><dd>부산대 AI융합교육원장 · 한컴이노스트림 대표상 우수상</dd></div>
          </dl>
        </div>
      </header>

      <ProjectLayout current="undertone" sections={model.sections}>
        <section className={s.section}>
          <h2 id={workflow.id} tabIndex={-1}>{workflow.label}</h2>
          <p>메시지를 작성하다 5초 동안 입력을 멈추면 맥락 추천을 시작합니다. 검색 결과를 활용한 후보와 일반 후보를 함께 만든 뒤, 지금 대화에 얼마나 도움이 되는지 평가해 추천 카드로 보여 줍니다.</p>
          <dl className={s.outcomes}>
            <div><dt>전체 추천 지연 시간</dt><dd>55초 → 3.1초</dd><small>GPT-5-nano → GPT-4.1-mini</small></div>
            <div><dt>양방향 동치 점수</dt><dd>0.390 → 0.661</dd><small>GPT-4.1-mini 기준</small></div>
          </dl>
          <ol className={s.steps}>
            <li><strong>검색</strong><span>현재 대화를 바탕으로 과거 대화에서 사실, 인물 관계, 대화 흐름에 해당하는 맥락 K개를 찾습니다.</span></li>
            <li><strong>후보 생성</strong><span>검색한 맥락을 사용한 후보 K개와 일반 후보 1개를 병렬로 생성합니다.</span></li>
            <li><strong>검증과 추천</strong><span>LLM이 현재 대화를 기준으로 모든 후보의 품질을 평가합니다. 기준 점수를 넘은 상위 T개를 채팅 화면에 표시합니다.</span></li>
          </ol>
          <SourceFigure image={model.figures.workflow} />
        </section>

        <section className={s.section}>
          <h2 id={goldenSet.id} tabIndex={-1}>{goldenSet.label}</h2>
          <p>팀 리드로서 답변 후보를 선정하는 <code>answer_verifier.py</code>를 개발하고 평가용 정답 데이터인 골든셋을 구축했습니다. 검증 모듈은 사실, 인물, 상황 세 범주의 후보를 각각 채점합니다.</p>
          <p>AI Hub의 대화 샘플을 바탕으로 대화 카테고리마다 사례 하나를 만들고 증강했습니다. 각 사례에는 사실·인물·상황별로 적합도가 상·중·하인 후보 세 개씩을 넣었습니다. 어떤 발화에서 나온 사실인지 추적할 수 있도록 원본 발화와 인덱스를 함께 기록했습니다.</p>
          <div className={s.figurePair}>
            <SourceFigure image={model.figures.verifier} />
            <SourceFigure image={model.figures.sample} />
          </div>
          <a className={s.textLink} href={model.links.dataset} target="_blank" rel="noreferrer">AI Hub 원본 데이터셋 <Icon name="link" size={14} /></a>
        </section>

        <section className={s.section}>
          <h2 id={optimization.id} tabIndex={-1}>{optimization.label}</h2>
          <p>‘좋은 맥락’을 골든셋의 정답과 의미가 가깝고 핵심 정보가 일치하는 후보로 정의했습니다. 이 기준을 고정하고, 같은 테스트 대화에 프롬프트와 모델 조합을 바꿔 가며 실험했습니다.</p>
          <p><code>UnderTone.py</code>가 후보를 생성하면 <code>validate.py</code>에서 정답과의 유사성·일관성을 평가하고 <code>runtime_results.json</code>에 결과를 기록합니다. Codex가 기록을 읽고 다음 프롬프트와 모델을 선택해 같은 테스트를 다시 실행하도록 설계했습니다.</p>
          <SourceFigure image={model.figures.loop} />
        </section>

        <section className={s.section}>
          <h2 id={evaluation.id} tabIndex={-1}>{evaluation.label}</h2>
          <p>운영 중에는 LLM이 추천 후보를 고릅니다. 오프라인에서는 선택된 후보와 골든셋 정답을 두 지표로 비교했습니다.</p>
          <dl className={s.criteria}>
            <div><dt>임베딩 코사인 유사도</dt><dd>정답과 후보 임베딩의 내적을 두 벡터 길이의 곱으로 나눕니다. 표현이 달라도 의미가 비슷한 후보를 폭넓게 찾기 위한 지표입니다.</dd></div>
            <div><dt>양방향 자연어 추론(NLI)</dt><dd>Vectara HHEM으로 정답이 후보의 내용을 뒷받침하는지, 후보가 정답의 내용을 담고 있는지 두 방향으로 검사합니다. 두 점수의 조화평균을 양방향 동치 점수로 사용했습니다.</dd></div>
          </dl>
          <h3>라면 가격 인하 대화의 세 후보</h3>
          <p>날짜와 물가 부담을 생략한 후보도 임베딩 유사도는 0.654였습니다. 같은 후보의 양방향 점수는 0.100으로 낮아져, 정답의 일부만 담은 경우를 구분할 수 있었습니다.</p>
          <ul className={s.examples}>
            {model.validation.map((row) => (
              <li key={row.label}>
                <h4>{row.label}</h4>
                <p>“{row.candidate}”</p>
                <p className={s.interpretation}>{row.interpretation}</p>
                <dl className={s.exampleScores}>
                  <div><dt>임베딩</dt><dd>{row.embedding}</dd></div>
                  <div><dt>정답 → 후보</dt><dd>{row.support}</dd></div>
                  <div><dt>후보 → 정답</dt><dd>{row.coverage}</dd></div>
                  <div><dt>양방향</dt><dd>{row.equivalence}</dd></div>
                </dl>
              </li>
            ))}
          </ul>
          <a className={s.textLink} href={model.links.evaluation} target="_blank" rel="noreferrer">Vectara 사실 일관성 평가 API <Icon name="link" size={14} /></a>
        </section>

        <section className={s.section}>
          <h2 id={results.id} tabIndex={-1}>{results.label}</h2>
          <p>같은 검증 프롬프트로 모델을 바꿔 비교했습니다. GPT-4.1 mini와 GPT-4o mini의 양방향 동치 점수는 각각 0.661과 0.662였고, 검증 단계의 평균 지연 시간은 1.00초와 2.01초였습니다. 시연용으로는 속도와 비용, 운영 조건을 고려해 평균 0.83초였던 solar-pro3를 택했습니다.</p>
          <table className={s.table}>
            <caption>동일 프롬프트에서의 검증 모델 비교</caption>
            <thead><tr><th scope="col">검증 모델</th><th scope="col">양방향 동치</th><th scope="col">임베딩</th><th scope="col">평균 검증 시간</th></tr></thead>
            <tbody>
              {model.quality.map((row) => (
                <tr key={row.model}><th scope="row">{row.model}</th><td>{row.equivalence}</td><td>{row.embedding}</td><td>{row.verifierLatency}</td></tr>
              ))}
            </tbody>
          </table>
          <table className={s.table}>
            <caption>모델 조합별 전체 시스템 지연 시간</caption>
            <thead><tr><th scope="col">모델 조합</th><th scope="col">전체 소요 시간</th></tr></thead>
            <tbody>
              {model.latency.map((row) => (
                <tr key={row.model}><th scope="row">{row.model}</th><td>{row.seconds}초</td></tr>
              ))}
            </tbody>
          </table>
          <h3>실험에서 배운 점</h3>
          <p>이번 실험에서는 모델 선택보다 프롬프트 변경이 품질 점수에 더 큰 영향을 줬습니다. 개발 기간과 자원을 고려해 상용 LLM API를 사용했고, 후속 과제로 소규모 언어 모델이나 텍스트 인코더를 파인튜닝하는 방법을 남겼습니다.</p>
        </section>
      </ProjectLayout>
    </article>
  );
}
