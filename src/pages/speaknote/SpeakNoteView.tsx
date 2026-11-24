import { Link } from 'react-router';
import { Icon } from '../../shared/ui/icon/Icon';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import { ProjectLayout } from '../../shared/ui/project-layout/ProjectLayout';
import { ExperimentSource } from './ExperimentSource';
import { ProjectSource } from './ProjectSource';
import chartExample from './assets/bar-chart.webp';
import type { BatchRun, SpeakNoteModel } from './types';
import s from './SpeakNote.module.css';

function BatchTimeline({ batches }: { batches: BatchRun[] }) {
  return <figure className={s.timeline}>
    <figcaption>배치 실행 시간 <span>첫 요청 도착 후 경과 시간</span></figcaption>
    <ul>
      {batches.map(({ batch, count, start, end }) =>
        <li key={batch}>
          <span>배치 {batch} <small>· {count}건</small></span>
          <div className={s.track} aria-hidden="true"><i style={{ left: `${start / 14 * 100}%`, width: `${(end - start) / 14 * 100}%` }} /></div>
          <span className={s.range}>{start.toFixed(3)}–{end.toFixed(3)}초</span>
        </li>
      )}
    </ul>
  </figure>;
}

export function SpeakNoteView({ model }: { model: SpeakNoteModel }) {
  return <article>
    <header className={s.hero}>
      <div className={s.wrap}>
        <Link to="/?section=projects" className={s.back}><Icon name="back" size={16} /> 프로젝트 목록</Link>
        <div className={s.heroGrid}>
          <div>
            <p className={s.field} lang="en">Retrieval Systems</p>
            <h1 lang="en">SpeakNote</h1>
            <p className={s.lead}>강의 음성과 슬라이드 속 그림을 연결해<br className={s.break} /> 출처가 담긴 필기를 만듭니다.</p>
          </div>
          <div className={s.poster}><ProjectCover slug="speaknote" /></div>
        </div>
        <dl className={s.facts}>
          <div><dt>개발 기간</dt><dd>2025.05 – 2025.10</dd></div>
          <div><dt>팀 · 담당 역할</dt><dd>3인 팀 · RAG 시스템 개발</dd></div>
          <div><dt>성과</dt><dd>AI·SW 융합 해커톤 일반부 최우수상</dd></div>
        </dl>
      </div>
    </header>

    <ProjectLayout current="speaknote" sections={model.sections}>
      <section className={s.section}>
        <h2 className={s.sectionHeading} id="overview" tabIndex={-1}>강의를 따라가는 필기</h2>
        <div className={s.content}>
          <p>낯선 용어를 찾아보거나 그래프를 옮겨 적는 동안에도 강의는 계속됩니다. SpeakNote는 음성인식으로 발화를 기록하고, 그 내용을 설명하는 주석을 강의 자료나 웹에서 찾아 제공합니다. 학생은 주석을 슬라이드의 원하는 위치로 끌어 놓고 직접 수정할 수 있습니다.</p>
          <h3>담당한 일</h3>
          <p>3인 팀에서 문서 전처리와 주석 생성을 맡았습니다. 파이썬 서버에서 검색·생성 흐름을 설계하고, 팀과 요청 형식 및 응답을 받을 콜백 인터페이스를 문서화했습니다.</p>
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionHeading} id="retrieval" tabIndex={-1}>강의 자료에서 근거 찾기</h2>
        <div className={s.content}>
          <h3>그림과 표를 검색 가능한 문장으로</h3>
          <p>Upstage Document Parse로 문서의 시각 요소를 분류한 뒤, 유형에 맞는 프롬프트를 Solar Pro 2에 전달했습니다. 그래프의 항목과 값도 설명문으로 바꿔 본문과 함께 벡터 데이터베이스에 저장했습니다.</p>
          <figure className={s.sourceFigure}>
            <a href={chartExample} target="_blank" rel="noreferrer" aria-label="막대그래프 전처리 예시 원본 크기로 보기 (새 창)"><img src={chartExample} width={1448} height={404} alt="막대그래프 원본과 문서 파서가 추출한 한국어 설명문" loading="lazy" /></a>
            <figcaption>강의 자료 속 막대그래프와 검색에 쓰이는 설명문</figcaption>
          </figure>
          <h3>문서에 근거가 부족할 때의 검색 경로</h3>
          <p>교정 검색 증강 생성(CRAG)은 발화를 검색용 질의로 다듬고 유사한 문서 조각을 찾습니다. 검색한 문서가 질문에 적합하면 해당 문맥으로 주석을 생성하고, 적합한 근거가 없으면 웹 검색 경로를 사용합니다. 주석에는 근거의 출처가 표시됩니다.</p>
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionHeading} id="latency" tabIndex={-1}>요청이 이어질 때의 응답 지연</h2>
        <div className={s.content}>
          <p>발화가 들어오는 간격보다 언어 모델의 응답 시간이 길면 뒤에 도착한 요청의 대기가 누적됩니다. 문서 처리와 주석 생성에 각각 큐를 두고, 요청 수가 상한에 도달하거나 대기 시간이 지나면 묶어서 실행했습니다. 한 배치가 외부 API의 응답을 기다리는 동안에도 다음 배치를 시작할 수 있습니다.</p>
          <h3>10개 요청으로 확인한 배치 동작</h3>
          <p>2026년 8월 후속 실험에서 요청 10개를 200ms 간격으로 보냈습니다. 최대 3개씩 묶고 3초까지 기다리는 조건에서, 앞의 세 배치는 각각 3개로 채워졌고 마지막 1개도 제한 시간 경과 후 실행됐습니다. 주석 10개가 모두 반환됐습니다.</p>
          <BatchTimeline batches={model.batches} />
          <h3>1초 간격으로 요청했을 때</h3>
          <p>배치당 1건으로 설정한 별도 실험에서는 첫 응답이 9.379초, 열 번째 요청의 응답이 17.706초에 도착했습니다. 첫 응답 이후 평균 반환 간격은 0.925초였습니다. 요청별 처리 시간이 달라 일부 응답은 도착 순서와 다르게 반환됐습니다.</p>
          <p className={s.note}>순차 처리 시 마지막 응답의 예상 시간 105.710초는 단일 요청 3회의 평균 처리 시간(10.571초)으로 계산한 값입니다. 비동기 결과와의 5.97배 차이는 이 예상치를 기준으로 한 비교입니다.</p>
        </div>
      </section>

      <section className={s.section}>
        <h2 className={s.sectionHeading} id="project-record" tabIndex={-1}>프로젝트 원문</h2>
        <div className={s.sources}>
          <details>
            <summary>프로젝트 개발 기록</summary>
            <div className={s.original}><ProjectSource openAppendix={model.openAppendix} /></div>
          </details>
        </div>
      </section>
      <section className={s.section}>
        <h2 className={s.sectionHeading} id="experiments" tabIndex={-1}>실험 부록</h2>
        <div className={s.sources}>
          <details ref={model.appendixRef}>
            <summary>SpeakNote 실험 결과 상세</summary>
            <div className={s.original}><ExperimentSource /></div>
          </details>
        </div>
      </section>
    </ProjectLayout>
  </article>;
}
