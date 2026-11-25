import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Icon } from '../../shared/ui/icon/Icon';
import { ProjectCover } from '../../shared/ui/project-cover/ProjectCover';
import { ProjectLayout } from '../../shared/ui/project-layout/ProjectLayout';
import type { ReportTable, SectionHeading, SourceFigure, SunghyunAccountingModel } from './types';
import styles from './SunghyunAccounting.module.css';

function Chapter({ heading, children }: { heading: SectionHeading; children: ReactNode }) {
  return (
    <section className={styles.chapter} aria-labelledby={heading.id}>
      <h2 id={heading.id} tabIndex={-1}>{heading.label}</h2>
      {children}
    </section>
  );
}

function Figure({ figure }: { figure: SourceFigure }) {
  return (
    <figure className={styles.figure}>
      <a href={figure.src} target="_blank" rel="noreferrer" aria-label={`${figure.alt} 크게 보기 (새 창)`}>
        <img src={figure.src} width={figure.width} height={figure.height} alt={figure.alt} loading="lazy" />
      </a>
      <figcaption>{figure.caption}</figcaption>
    </figure>
  );
}

function DataTable({ table }: { table: ReportTable }) {
  return (
    <div className={styles.tableWrap}>
      <table>
        <caption>{table.caption}</caption>
        <thead>
          <tr>{table.columns.map(label => <th scope="col" key={label}>{label}</th>)}</tr>
        </thead>
        <tbody>
          {table.rows.map(([label, ...cells]) => (
            <tr key={label}>
              <th scope="row">{label}</th>
              {cells.map((cell, index) => <td key={table.columns[index + 1]}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SunghyunAccountingView({ model }: { model: SunghyunAccountingModel }) {
  const [task, workflow, evaluation, extraction, tuning, assistant] = model.sections;
  const { figures, tables } = model;
  return (
    <article>
      <header className={styles.hero}>
        <div className={styles.wrap}>
          <Link className={styles.back} to="/?section=projects"><Icon name="back" size={16} /> 프로젝트 목록</Link>
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.field} lang="en">Document Automation</p>
              <h1>성현회계법인</h1>
              <p className={styles.lead}>세 종류의 PDF에 흩어진 담보 정보를 대조해 회계사의 담보물배분표 엑셀을 작성하는 시스템을 개발했습니다. 실험에서 배분표 한 건을 268초에 완성하고 내부 평가 93.00점을 기록했습니다.</p>
              <a className={styles.repo} href={model.repository} target="_blank" rel="noreferrer">
                <Icon name="github" size={16} /> GitHub 저장소
              </a>
            </div>
            <div className={styles.cover}><ProjectCover slug="sunghyun-accounting" /></div>
          </div>
          <dl className={styles.facts}>
            <div><dt>참여 형태</dt><dd>회계법인 협업 · 인턴 2주</dd></div>
            <div><dt>담당 업무</dt><dd>문서 추출·대조, 엑셀 작성 자동화와 평가</dd></div>
            <div><dt>사용 기술</dt><dd>Python · LangChain · Pydantic · Tool Calling</dd></div>
          </dl>
        </div>
      </header>
      <ProjectLayout current="sunghyun-accounting" sections={model.sections}>
        <Chapter heading={task}>
          <p>회계사는 감정평가서, 저당목록, 등기부등본에서 같은 담보물을 찾아 배분표를 작성합니다. 수작업으로 수십 시간에서 며칠이 걸리던 일입니다. 등기부등본의 말소선을 읽어 유효한 권리만 남기고, 문서마다 다르게 적힌 기계 이름도 맞춰야 했습니다.</p>
          <p>기존 문서 파서는 말소선을 구분하지 못해 상용 AI 모델을 시험했습니다. GPT와 Claude에 같은 프롬프트를 주고 최대 추론 설정으로 실행했지만 두 모델 모두 가치평가액을 잘못 계산했습니다. Claude는 테이블 병합 지시를 인식했고 GPT의 결과에서는 병합 성공 사례가 없었습니다.</p>
          <DataTable table={tables.baseline} />
          <p>개발한 시스템의 점수는 GPT 웹보다 12.84점, Claude CLI보다 30.51점 높았습니다. 인턴 기간이 끝난 뒤 회계법인에서 시스템 설치를 문의했습니다.</p>
          <Figure figure={figures.baseline} />
          <p>함안동 자료에서는 요구한 표 형식을 두 번 중 한 번 재현했고, 내부 LLM의 형식 평가는 최고 6/7점이었습니다. 결과 파일만으로는 모델이 원문을 어떻게 읽었는지 알 수 없어 문서 인식과 엑셀 작성 단계를 분리했습니다.</p>
        </Chapter>
        <Chapter heading={workflow}>
          <p>금액 산정, 대조표 누락, 제출 형식 오류를 따로 확인할 수 있도록 작업을 네 단계로 나눴습니다.</p>
          <ol className={styles.steps}>
            <li><strong>페이지 선별</strong><p>GPT-5.6-luna와 pypdf로 문서 구조를 읽고 필요한 페이지만 작은 PDF로 분리했습니다.</p></li>
            <li><strong>내용 추출</strong><p>감정평가서와 저당목록에는 GPT-5.6-terra, 말소선을 판독해야 하는 등기부등본에는 GPT-5.6-sol을 적용했습니다. 추출값은 Pydantic 스키마로 받았습니다.</p></li>
            <li><strong>문서 대조</strong><p>GPT-5.6-luna로 감정평가서와 저당목록을 대조하고 채권·담보 테이블을 병합했습니다.</p></li>
            <li><strong>엑셀 작성</strong><p>회계법인의 양식에 맞춰 셀과 표를 작성하는 도구를 마련했습니다. 도구 호출을 결합해 이 단계의 모델을 GPT-5.6-sol에서 GPT-5.6-terra로 바꿨습니다.</p></li>
          </ol>
          <DataTable table={tables.documents} />
          <Figure figure={figures.pipeline} />
        </Chapter>
        <Chapter heading={evaluation}>
          <p>문서 인식과 최종 엑셀 작성을 따로 평가할 수 있도록 두 종류의 골든셋을 만들었습니다. 문서 인식용 정답은 GPT-5.6-sol의 추출값을 원본 PDF와 직접 대조해 구축했습니다. 배분표 작성용 정답은 회계법인이 제공한 엑셀을 테이블별 JSON으로 변환했습니다.</p>
          <p>각 단계의 결과도 JSON으로 남겼습니다. 예를 들어 서로 다른 문서의 ‘경남 호이스트’와 ‘경남 HC’가 같은 기계를 가리키는지는 제조사 이름만으로 판단하기 어렵습니다. 모델이 규격, 제작연도, 목록번호를 함께 대조하게 하고 그 판단에 쓰인 값을 추적할 수 있게 했습니다.</p>
          <Figure figure={figures.audit} />
        </Chapter>
        <Chapter heading={extraction}>
          <p>문서 전체를 GPT-5.6-sol에 넘겼을 때는 작업 건마다 분량 차이가 컸고 추출 성공률이 50%였습니다. 소형 모델만으로는 담보 설정 현황을 제대로 읽지 못했습니다.</p>
          <p>소형 모델에 페이지 선별을 맡기고, 문서별로 읽기 어려운 부분만 적합한 모델에 전달했습니다. 등기부등본은 표제부와 을구를, 감정평가서는 부동산과 기계기구 감정 내역을, 저당목록은 저당 번호별 기계 목록을 분리했습니다.</p>
          <DataTable table={tables.extraction} />
        </Chapter>
        <Chapter heading={tuning}>
          <h3>단계마다 다른 모델 선택</h3>
          <p>문서 인식 모델을 terra에서 luna로 교체하자 네 번 중 세 번 골든셋과 값이 달라졌습니다. 불일치는 초량동에서 3/3건, 함안동에서 0/1건이었습니다. 이 단계에는 terra를 유지했습니다.</p>
          <p>배분표 작성 단계도 luna로 바꾸자 점수가 91.94에서 88.12로 떨어졌습니다. 단계별 JSON을 살펴보니 테이블 병합 결과는 같았지만 <code>04_machinery_match</code>에서 값이 달라졌습니다. 감정평가서의 값을 우선하도록 프롬프트를 수정한 후 luna로 93.00점을 얻었습니다.</p>
          <h3>회계법인 요구사항에 맞춘 채점</h3>
          <p>수치와 대조표는 규칙으로 비교했습니다. 토지·기계 목록의 설명과 회계사가 요구한 표 형식은 LLM 평가를 적용했습니다. 최종 점수는 다음 여섯 항목의 F1 점수를 가중 합산한 값입니다.</p>
          <DataTable table={tables.criteria} />
        </Chapter>
        <Chapter heading={assistant}>
          <p>회계사가 배분표를 받은 뒤에도 작성 근거를 물어볼 수 있도록 RAG 챗봇을 연결했습니다. 최종 배분표는 시스템 프롬프트로 전달하고, 작성 과정에 대한 질문에는 단계별 처리 기록을 검색해 활용합니다.</p>
          <p>JSON 기록을 청크로 나누고 <code>text-embedding-3-small</code>로 임베딩해 벡터 저장소에 담았습니다. 회계사의 질문에 관련된 기록을 검색한 뒤 GPT-5.6-luna가 답변을 생성합니다.</p>
          <Figure figure={figures.chat} />
        </Chapter>
      </ProjectLayout>
    </article>
  );
}
