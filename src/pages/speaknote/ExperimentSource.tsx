// Transcribed from the experiment appendix in the portfolio export.
import s from './SpeakNote.module.css';

export function ExperimentSource() {
  return <>
<h3>SpeakNote실험결과상세</h3>
<hr />
<h4>1. 실험 핵심 요약</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">값</th>
</tr>
</thead>
<tbody>
<tr>
<td>실행 시각</td>
<td>2026-08-20 17:40 KST</td>
</tr>
<tr>
<td>총 요청 수</td>
<td>10</td>
</tr>
<tr>
<td>maxProcessNum</td>
<td>3</td>
</tr>
<tr>
<td>요청 간격</td>
<td>200ms</td>
</tr>
<tr>
<td>chatPatientSec</td>
<td>3초</td>
</tr>
<tr>
<td>기대 batch</td>
<td>3 / 3 / 3 / 1</td>
</tr>
<tr>
<td>실제 batch</td>
<td>3 / 3 / 3 / 1</td>
</tr>
<tr>
<td>annotation 완료</td>
<td>10/10</td>
</tr>
<tr>
<td>최종 판정</td>
<td>PASS: 3/3/3은 maxProcessNum 도달 즉시 flush, 마지막 1개는 patient timeout 후 flush됨</td>
</tr>
</tbody>
</table></div>
<p>핵심 결론:</p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">검증</th>
<th scope="col">결과</th>
</tr>
</thead>
<tbody>
<tr>
<td>요청 1~3</td>
<td>3개가 모이자 즉시 flush</td>
</tr>
<tr>
<td>요청 4~6</td>
<td>3개가 모이자 즉시 flush</td>
</tr>
<tr>
<td>요청 7~9</td>
<td>3개가 모이자 즉시 flush</td>
</tr>
<tr>
<td>요청 10</td>
<td>혼자 남아서 patient 3초 대기 후 flush</td>
</tr>
<tr>
<td>비동기 코루틴 효과</td>
<td>batch 1~3이 순차 대기하지 않고 background에서 겹쳐 실행됨</td>
</tr>
</tbody>
</table></div>
<hr />
<h4>2. 요청 전송 순간 queue 변화</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">send offset(s)</th>
<th scope="col">user</th>
<th scope="col">flushedNow</th>
<th scope="col">currentChatInputs</th>
<th scope="col">chatProcessQueue</th>
<th scope="col">runningBatches</th>
<th scope="col">해석</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>0</td>
<td>user1</td>
<td>false</td>
<td>1</td>
<td>0</td>
<td>0</td>
<td>누적 중</td>
</tr>
<tr>
<td>2</td>
<td>0.206</td>
<td>user2</td>
<td>false</td>
<td>2</td>
<td>0</td>
<td>0</td>
<td>누적 중</td>
</tr>
<tr>
<td>3</td>
<td>0.413</td>
<td>user1</td>
<td>true</td>
<td>0</td>
<td>1</td>
<td>0</td>
<td>max 도달 flush</td>
</tr>
<tr>
<td>4</td>
<td>0.62</td>
<td>user2</td>
<td>false</td>
<td>1</td>
<td>1</td>
<td>0</td>
<td>누적 중</td>
</tr>
<tr>
<td>5</td>
<td>0.831</td>
<td>user1</td>
<td>false</td>
<td>2</td>
<td>1</td>
<td>0</td>
<td>누적 중</td>
</tr>
<tr>
<td>6</td>
<td>1.04</td>
<td>user2</td>
<td>true</td>
<td>0</td>
<td>2</td>
<td>0</td>
<td>max 도달 flush</td>
</tr>
<tr>
<td>7</td>
<td>1.245</td>
<td>user1</td>
<td>false</td>
<td>1</td>
<td>0</td>
<td>2</td>
<td>누적 중</td>
</tr>
<tr>
<td>8</td>
<td>1.452</td>
<td>user2</td>
<td>false</td>
<td>2</td>
<td>0</td>
<td>2</td>
<td>누적 중</td>
</tr>
<tr>
<td>9</td>
<td>1.657</td>
<td>user1</td>
<td>true</td>
<td>0</td>
<td>1</td>
<td>2</td>
<td>max 도달 flush</td>
</tr>
<tr>
<td>10</td>
<td>1.865</td>
<td>user2</td>
<td>false</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>마지막 patient 대기</td>
</tr>
</tbody>
</table></div>
<p>해석:</p>
<ul>
<li><code>seq=3</code>, <code>seq=6</code>, <code>seq=9</code>에서 <code>flushedNow=true</code>가 발생했다.</li>
<li>즉, 요청이 3개씩 모일 때마다 process queue로 즉시 flush됐다.</li>
<li><code>seq=10</code>은 <code>currentChatInputs=1</code> 상태로 남았고, 이후 patient timeout에 의해 단독 flush됐다.</li>
</ul>
<hr />
<h4>3. Batch 실행 시작 기준 결과</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">Batch</th>
<th scope="col">size</th>
<th scope="col">요청 seq</th>
<th scope="col">flush 이유</th>
<th scope="col">첫 요청 offset(s)</th>
<th scope="col">실행 시작 offset(s)</th>
<th scope="col">첫 요청→실행 대기(s)</th>
<th scope="col">LLM 처리시간(s)</th>
<th scope="col">완료 offset(s)</th>
<th scope="col">상태</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>3</td>
<td>1, 2, 3</td>
<td>maxProcessNum 도달 즉시 flush</td>
<td>0.002</td>
<td>1.211</td>
<td>1.209</td>
<td>10.035</td>
<td>11.246</td>
<td>completed</td>
</tr>
<tr>
<td>2</td>
<td>3</td>
<td>4, 5, 6</td>
<td>maxProcessNum 도달 즉시 flush</td>
<td>0.626</td>
<td>1.212</td>
<td>0.586</td>
<td>10.864</td>
<td>12.076</td>
<td>completed</td>
</tr>
<tr>
<td>3</td>
<td>3</td>
<td>7, 8, 9</td>
<td>maxProcessNum 도달 즉시 flush</td>
<td>1.248</td>
<td>2.215</td>
<td>0.967</td>
<td>10.242</td>
<td>12.456</td>
<td>completed</td>
</tr>
<tr>
<td>4</td>
<td>1</td>
<td>10</td>
<td>patient timeout flush</td>
<td>1.867</td>
<td>5.217</td>
<td>3.35</td>
<td>8.35</td>
<td>13.567</td>
<td>completed</td>
</tr>
</tbody>
</table></div>
<p>중요 포인트:</p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">포인트</th>
<th scope="col">설명</th>
</tr>
</thead>
<tbody>
<tr>
<td>batch 1~3</td>
<td>모두 size=3, maxProcessNum 도달 즉시 flush</td>
</tr>
<tr>
<td>batch 4</td>
<td>size=1, patient timeout flush</td>
</tr>
<tr>
<td>batch 4 대기</td>
<td>첫 요청 대비 3.35초 대기, chatPatientSec=3초 이상</td>
</tr>
<tr>
<td>batch 1~3 실행</td>
<td>batch 1과 2는 거의 같은 시점(1.211s, 1.212s)에 시작, batch 3도 2.215s에 시작</td>
</tr>
<tr>
<td>코루틴 효과</td>
<td>앞 batch 완료를 기다리지 않고 batch 2/3/4가 background task로 실행됨</td>
</tr>
</tbody>
</table></div>
<hr />
<h4>4. 요청 ↔ 요청결과 대응표</h4>
<p>아래 표가 핵심이다. 각 요청이 어느 batch에 들어갔고, <strong>batch 실행 시작시간 기준으로 언제 시작/완료됐으며</strong>, 어떤 LLM 결과 preview를 반환했는지 대응한다.</p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">batch</th>
<th scope="col">user</th>
<th scope="col">요청 offset(s)</th>
<th scope="col">실행 시작 offset(s)</th>
<th scope="col">완료 offset(s)</th>
<th scope="col">실행대기(s)</th>
<th scope="col">total latency(s)</th>
<th scope="col">요청</th>
<th scope="col">요청결과 preview</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1</td>
<td>user1</td>
<td>0.002</td>
<td>1.211</td>
<td>11.246</td>
<td>1.209</td>
<td>11.244</td>
<td>미국 AI 행정명령의 핵심 골자를 한 문장으로 요약해줘.</td>
<td>기록내용: 미국의 AI 행정명령의 주요 내용을 한 문장으로 요약해 줄 수 있나요? 부가설명: 배경 - AI의 안전성, 신뢰성, 형평성, 개인정보보호 등 사회적 책임 강화 필요성 대두 주요 …</td>
</tr>
<tr>
<td>2</td>
<td>1</td>
<td>user2</td>
<td>0.208</td>
<td>1.211</td>
<td>11.246</td>
<td>1.003</td>
<td>11.038</td>
<td>G7 히로시마 AI 프로세스 행동강령은 무엇을 요구했어?</td>
<td>기록내용: G7 히로시마 AI 프로세스의 행동 강령은 어떤 요구사항을 포함하고 있나요? 부가설명: 배경 - 2023년 5월 G7 정상회의(일본 히로시마)에서 생성 AI 국제규범 마련을 위해…</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>user1</td>
<td>0.415</td>
<td>1.211</td>
<td>11.246</td>
<td>0.796</td>
<td>10.831</td>
<td>블레츨리 선언의 AI 안전 협력 내용은 뭐야?</td>
<td>기록내용: 블레츨리 선언의 AI 안전 협력 내용은 무엇인가요? 부가설명: 배경 - AI 위험 관리와 안전성 확보를 위한 국제적 협력 필요성 대두 주요 조치 - 28개국 대표들이 AI 위험 …</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>user2</td>
<td>0.626</td>
<td>1.212</td>
<td>12.076</td>
<td>0.586</td>
<td>11.451</td>
<td>AI 생성 콘텐츠 표시와 워터마크 관련 조치를 설명해줘.</td>
<td>기록내용: AI 생성 콘텐츠의 표시 및 워터마크 관련 조치에 대해 설명해 주세요. 부가설명: 배경 - AI가 생성한 콘텐츠와 인간이 만든 콘텐츠의 구분 필요성 대두 - 허위정보, 조작 위험…</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>user1</td>
<td>0.834</td>
<td>1.212</td>
<td>12.076</td>
<td>0.378</td>
<td>11.242</td>
<td>첨단 AI 시스템 안전 테스트 계획의 주체와 목적을 알려줘.</td>
<td>기록내용: 첨단 AI 시스템의 안전 테스트 계획을 수립하는 주체와 그 목적은 무엇인가요? 부가설명: 배경 - 첨단 AI 시스템의 잠재적 위험(국가 안보, 사회적 피해 등) 대응 필요성 대두…</td>
</tr>
<tr>
<td>6</td>
<td>2</td>
<td>user2</td>
<td>1.042</td>
<td>1.212</td>
<td>12.076</td>
<td>0.17</td>
<td>11.034</td>
<td>AI 분야 외국인 전문가 유치 지원 내용이 문서에 있어?</td>
<td>기록내용: AI 분야의 외국인 전문가 유치 지원 내용이 문서에 포함되어 있나요? 부가설명: 배경 - 미국 내 AI 연구·산업 경쟁력 강화 목적 주요 조치 - 비자 기준 및 인터뷰 절차 현대…</td>
</tr>
<tr>
<td>7</td>
<td>3</td>
<td>user1</td>
<td>1.248</td>
<td>2.215</td>
<td>12.456</td>
<td>0.967</td>
<td>11.209</td>
<td>AI 위험 평가와 완화에 대한 국제 행동강령 조치를 요약해줘.</td>
<td>기록내용: AI 위험 평가와 완화에 관한 국제 행동 강령의 주요 내용을 요약해 줄 수 있나요? 부가설명: 배경 - G7 등 주요국 중심으로 첨단 AI 시스템의 위험 관리 필요성 대두 - A…</td>
</tr>
<tr>
<td>8</td>
<td>3</td>
<td>user2</td>
<td>1.454</td>
<td>2.215</td>
<td>12.456</td>
<td>0.761</td>
<td>11.003</td>
<td>공공부문 역량 구축과 AI 안전 연구 협력 내용을 알려줘.</td>
<td>기록내용: 공공부문 역량 구축과 AI 안전 연구 협력에 대한 내용을 설명해 주실 수 있나요? 부가설명: 배경 - 첨단 AI의 잠재적 위험(국가 안보, 사회적 피해 등) 대응 필요성 증대 -…</td>
</tr>
<tr>
<td>9</td>
<td>3</td>
<td>user1</td>
<td>1.659</td>
<td>2.215</td>
<td>12.456</td>
<td>0.556</td>
<td>10.798</td>
<td>첨단 AI 개발 기업의 투명성 향상 조치를 설명해줘.</td>
<td>기록내용: 첨단 AI 개발 기업이 투명성을 높이기 위해 어떤 조치를 취하고 있는지 설명해 주세요. 부가설명: 배경 - 첨단 AI 시스템의 빠른 발전에 따른 사회적 위험 최소화 및 책임성 강…</td>
</tr>
<tr>
<td>10</td>
<td>4</td>
<td>user2</td>
<td>1.867</td>
<td>5.217</td>
<td>13.567</td>
<td>3.35</td>
<td>11.701</td>
<td>국제 기술 표준 개발과 개인정보 보호 조치를 요약해줘.</td>
<td>기록내용: 국제 기술 표준 개발과 개인정보 보호 조치에 대해 요약해 주실 수 있나요? 부가설명: 배경 - AI의 안전성, 신뢰성, 투명성 확보 필요성 증대 - 글로벌 협력 및 규제 일관성 …</td>
</tr>
</tbody>
</table></div>
<hr />
<h4>5. Batch별 요청-결과 묶음</h4>
<h5>Batch 1 — maxProcessNum 도달 즉시 flush</h5>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">값</th>
</tr>
</thead>
<tbody>
<tr>
<td>batchId</td>
<td>batch-1-3e54f16d</td>
</tr>
<tr>
<td>실행 시작 offset</td>
<td>1.211s</td>
</tr>
<tr>
<td>완료 offset</td>
<td>11.246s</td>
</tr>
<tr>
<td>batch 처리시간</td>
<td>10.035s</td>
</tr>
<tr>
<td>포함 요청 수</td>
<td>3</td>
</tr>
</tbody>
</table></div>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">user</th>
<th scope="col">요청</th>
<th scope="col">요청결과 preview</th>
<th scope="col">total latency(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>user1</td>
<td>미국 AI 행정명령의 핵심 골자를 한 문장으로 요약해줘.</td>
<td>기록내용: 미국의 AI 행정명령의 주요 내용을 한 문장으로 요약해 줄 수 있나요? 부가설명: 배경 - AI의 안전성, 신뢰성, 형평성, 개인정보보호 등 사회적 책임 강화 필요성 대두 주요 조치 - 안전하고 …</td>
<td>11.244</td>
</tr>
<tr>
<td>2</td>
<td>user2</td>
<td>G7 히로시마 AI 프로세스 행동강령은 무엇을 요구했어?</td>
<td>기록내용: G7 히로시마 AI 프로세스의 행동 강령은 어떤 요구사항을 포함하고 있나요? 부가설명: 배경 - 2023년 5월 G7 정상회의(일본 히로시마)에서 생성 AI 국제규범 마련을 위해 '히로시마 AI …</td>
<td>11.038</td>
</tr>
<tr>
<td>3</td>
<td>user1</td>
<td>블레츨리 선언의 AI 안전 협력 내용은 뭐야?</td>
<td>기록내용: 블레츨리 선언의 AI 안전 협력 내용은 무엇인가요? 부가설명: 배경 - AI 위험 관리와 안전성 확보를 위한 국제적 협력 필요성 대두 주요 조치 - 28개국 대표들이 AI 위험 관리를 위한 '블레…</td>
<td>10.831</td>
</tr>
</tbody>
</table></div>
<h5>Batch 2 — maxProcessNum 도달 즉시 flush</h5>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">값</th>
</tr>
</thead>
<tbody>
<tr>
<td>batchId</td>
<td>batch-2-cc737bc0</td>
</tr>
<tr>
<td>실행 시작 offset</td>
<td>1.212s</td>
</tr>
<tr>
<td>완료 offset</td>
<td>12.076s</td>
</tr>
<tr>
<td>batch 처리시간</td>
<td>10.864s</td>
</tr>
<tr>
<td>포함 요청 수</td>
<td>3</td>
</tr>
</tbody>
</table></div>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">user</th>
<th scope="col">요청</th>
<th scope="col">요청결과 preview</th>
<th scope="col">total latency(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td>4</td>
<td>user2</td>
<td>AI 생성 콘텐츠 표시와 워터마크 관련 조치를 설명해줘.</td>
<td>기록내용: AI 생성 콘텐츠의 표시 및 워터마크 관련 조치에 대해 설명해 주세요. 부가설명: 배경 - AI가 생성한 콘텐츠와 인간이 만든 콘텐츠의 구분 필요성 대두 - 허위정보, 조작 위험 등 사회적 위험 …</td>
<td>11.451</td>
</tr>
<tr>
<td>5</td>
<td>user1</td>
<td>첨단 AI 시스템 안전 테스트 계획의 주체와 목적을 알려줘.</td>
<td>기록내용: 첨단 AI 시스템의 안전 테스트 계획을 수립하는 주체와 그 목적은 무엇인가요? 부가설명: 배경 - 첨단 AI 시스템의 잠재적 위험(국가 안보, 사회적 피해 등) 대응 필요성 대두 주요 조치 - 영…</td>
<td>11.242</td>
</tr>
<tr>
<td>6</td>
<td>user2</td>
<td>AI 분야 외국인 전문가 유치 지원 내용이 문서에 있어?</td>
<td>기록내용: AI 분야의 외국인 전문가 유치 지원 내용이 문서에 포함되어 있나요? 부가설명: 배경 - 미국 내 AI 연구·산업 경쟁력 강화 목적 주요 조치 - 비자 기준 및 인터뷰 절차 현대화·간소화 - AI…</td>
<td>11.034</td>
</tr>
</tbody>
</table></div>
<h5>Batch 3 — maxProcessNum 도달 즉시 flush</h5>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">값</th>
</tr>
</thead>
<tbody>
<tr>
<td>batchId</td>
<td>batch-3-9e6bc6b9</td>
</tr>
<tr>
<td>실행 시작 offset</td>
<td>2.215s</td>
</tr>
<tr>
<td>완료 offset</td>
<td>12.456s</td>
</tr>
<tr>
<td>batch 처리시간</td>
<td>10.242s</td>
</tr>
<tr>
<td>포함 요청 수</td>
<td>3</td>
</tr>
</tbody>
</table></div>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">user</th>
<th scope="col">요청</th>
<th scope="col">요청결과 preview</th>
<th scope="col">total latency(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td>7</td>
<td>user1</td>
<td>AI 위험 평가와 완화에 대한 국제 행동강령 조치를 요약해줘.</td>
<td>기록내용: AI 위험 평가와 완화에 관한 국제 행동 강령의 주요 내용을 요약해 줄 수 있나요? 부가설명: 배경 - G7 등 주요국 중심으로 첨단 AI 시스템의 위험 관리 필요성 대두 - AI 기술 발전에 따…</td>
<td>11.209</td>
</tr>
<tr>
<td>8</td>
<td>user2</td>
<td>공공부문 역량 구축과 AI 안전 연구 협력 내용을 알려줘.</td>
<td>기록내용: 공공부문 역량 구축과 AI 안전 연구 협력에 대한 내용을 설명해 주실 수 있나요? 부가설명: 배경 - 첨단 AI의 잠재적 위험(국가 안보, 사회적 피해 등) 대응 필요성 증대 - AI 안전성 확보…</td>
<td>11.003</td>
</tr>
<tr>
<td>9</td>
<td>user1</td>
<td>첨단 AI 개발 기업의 투명성 향상 조치를 설명해줘.</td>
<td>기록내용: 첨단 AI 개발 기업이 투명성을 높이기 위해 어떤 조치를 취하고 있는지 설명해 주세요. 부가설명: 배경 - 첨단 AI 시스템의 빠른 발전에 따른 사회적 위험 최소화 및 책임성 강화 필요 주요 조치…</td>
<td>10.798</td>
</tr>
</tbody>
</table></div>
<h5>Batch 4 — patient timeout flush</h5>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">값</th>
</tr>
</thead>
<tbody>
<tr>
<td>batchId</td>
<td>batch-4-5a12f455</td>
</tr>
<tr>
<td>실행 시작 offset</td>
<td>5.217s</td>
</tr>
<tr>
<td>완료 offset</td>
<td>13.567s</td>
</tr>
<tr>
<td>batch 처리시간</td>
<td>8.35s</td>
</tr>
<tr>
<td>포함 요청 수</td>
<td>1</td>
</tr>
</tbody>
</table></div>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">seq</th>
<th scope="col">user</th>
<th scope="col">요청</th>
<th scope="col">요청결과 preview</th>
<th scope="col">total latency(s)</th>
</tr>
</thead>
<tbody>
<tr>
<td>10</td>
<td>user2</td>
<td>국제 기술 표준 개발과 개인정보 보호 조치를 요약해줘.</td>
<td>기록내용: 국제 기술 표준 개발과 개인정보 보호 조치에 대해 요약해 주실 수 있나요? 부가설명: 배경 - AI의 안전성, 신뢰성, 투명성 확보 필요성 증대 - 글로벌 협력 및 규제 일관성 확보 목적 주요 조…</td>
<td>11.701</td>
</tr>
</tbody>
</table></div>
<hr />
<h4>6. Polling timeline으로 본 patient flush</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">offset(s)</th>
<th scope="col">completed</th>
<th scope="col">currentChatInputs</th>
<th scope="col">chatProcessQueue</th>
<th scope="col">runningBatches</th>
<th scope="col">batchSizes</th>
<th scope="col">해석</th>
</tr>
</thead>
<tbody>
<tr>
<td>1.872</td>
<td>0/10</td>
<td>1</td>
<td>1</td>
<td>2</td>
<td>3, 3</td>
<td>진행</td>
</tr>
<tr>
<td>2.379</td>
<td>0/10</td>
<td>1</td>
<td>0</td>
<td>3</td>
<td>3, 3, 3</td>
<td>patient flush 전 대기</td>
</tr>
<tr>
<td>5.403</td>
<td>0/10</td>
<td>0</td>
<td>0</td>
<td>4</td>
<td>3, 3, 3, 1</td>
<td>patient flush 확인</td>
</tr>
<tr>
<td>11.465</td>
<td>3/10</td>
<td>0</td>
<td>0</td>
<td>3</td>
<td>3, 3, 3, 1</td>
<td>진행</td>
</tr>
<tr>
<td>12.474</td>
<td>9/10</td>
<td>0</td>
<td>0</td>
<td>1</td>
<td>3, 3, 3, 1</td>
<td>진행</td>
</tr>
<tr>
<td>13.989</td>
<td>10/10</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>3, 3, 3, 1</td>
<td>진행</td>
</tr>
</tbody>
</table></div>
<p>핵심:</p>
<ul>
<li><code>batchSizes=3,3,3</code>인 동안 <code>currentChatInputs=1</code>이 유지됐다. 이것이 마지막 요청 1개가 patient timeout을 기다리는 구간이다.</li>
<li>이후 <code>batchSizes=3,3,3,1</code>로 바뀌며 <code>currentChatInputs=0</code>이 됐다. 즉 마지막 1개가 patient flush됐다.</li>
</ul>
<hr />
<h4>7. Before / After: 즉시 flush + 비동기 코루틴 지연 최소화</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">관점</th>
<th scope="col">순차/비동기 없음</th>
<th scope="col">현재 결과</th>
</tr>
</thead>
<tbody>
<tr>
<td>batch 1 처리 중 batch 2</td>
<td>batch 1 완료까지 대기</td>
<td>batch 1과 거의 동시에 batch 2 실행 시작</td>
</tr>
<tr>
<td>batch 2 처리 중 batch 3</td>
<td>앞 batch 완료까지 대기</td>
<td>batch 3도 2.215s에 background 실행 시작</td>
</tr>
<tr>
<td>max 도달 flush</td>
<td>관측 불가</td>
<td>3, 6, 9번째 요청에서 즉시 flush 확인</td>
</tr>
<tr>
<td>max 미달 1개</td>
<td>계속 방치되거나 별도 규칙 필요</td>
<td>patient 3초 초과 후 size=1 flush</td>
</tr>
<tr>
<td>요청-결과 대응</td>
<td>불명확</td>
<td>모든 요청에 resultPreview 매핑 완료</td>
</tr>
</tbody>
</table></div>
<p>실제 실행 시작 offset 비교:</p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">Batch</th>
<th scope="col">실행 시작 offset(s)</th>
<th scope="col">의미</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>1.211</td>
<td>요청 1~3 batch 실행 시작</td>
</tr>
<tr>
<td>2</td>
<td>1.212</td>
<td>batch 1 완료 전, 거의 동시에 실행 시작</td>
</tr>
<tr>
<td>3</td>
<td>2.215</td>
<td>batch 1/2 완료 전, 추가 background 실행 시작</td>
</tr>
<tr>
<td>4</td>
<td>5.217</td>
<td>마지막 1개 patient 대기 후 실행 시작</td>
</tr>
</tbody>
</table></div>
<p>결론:</p>
<pre><code>{"3개씩 모이는 요청은 즉시 flush되고, flush된 batch들은 앞 batch 완료를 기다리지 않고 background coroutine으로 실행되어 지연을 줄였다. 마지막 1개는 maxProcessNum에 못 미쳤지만 patient 3초 규칙으로 3.35초 후 정상 flush됐다.\n"}</code></pre>
<hr />
<h4>8. 최종 판정</h4>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">판정</th>
</tr>
</thead>
<tbody>
<tr>
<td>3/3/3/1 batch 구성</td>
<td>PASS</td>
</tr>
<tr>
<td>앞 3개 batch 즉시 flush</td>
<td>PASS</td>
</tr>
<tr>
<td>마지막 1개 patient flush</td>
<td>PASS</td>
</tr>
<tr>
<td>요청별 요청-결과 대응</td>
<td>PASS</td>
</tr>
<tr>
<td>실제 LLM 결과 반환</td>
<td>PASS</td>
</tr>
<tr>
<td>비동기 background 실행으로 앞 batch 대기 최소화</td>
<td>PASS</td>
</tr>
</tbody>
</table></div>
<hr />
<h3>단일 요청 기준 코루틴 검증</h3>
<h5>단일 요청 평균 처리시간</h5>
<p>조건:</p>
<ul>
<li><code>maxProcessNum=1</code></li>
<li>단일 요청 제출</li>
<li>즉시 flush</li>
<li>3회 반복</li>
</ul>
<p>결과:</p>
<pre><code>{"{\n  \"processingDurationSec\": {\n    \"values\": [8.404, 10.267, 13.043],\n    \"avg\": 10.571,\n    \"min\": 8.404,\n    \"max\": 13.043,\n    \"p50\": 10.267,\n    \"p90\": 13.043\n  },\n  \"totalLatencySec\": {\n    \"values\": [8.657, 10.378, 13.531],\n    \"avg\": 10.855\n  }\n}\n"}</code></pre>
<p>정리:</p>
<ul>
<li>실제 LLM 단일 처리 평균: <strong>10.571초</strong></li>
<li>request accept부터 완료까지의 평균 total latency: <strong>10.855초</strong></li>
<li>이후 before/after 비교의 기준 처리시간은 <strong>10.571초/request</strong>로 둔다.</li>
</ul>
<h5>1초 간격 10개 요청의 실제 반환 결과</h5>
<p>조건:</p>
<ul>
<li>요청 수: 10개</li>
<li>요청 간격: 1초</li>
<li>단일 평균 처리시간: 10.571초</li>
<li>각 요청은 <code>maxProcessNum=1</code>로 들어오는 즉시 독립 background batch 처리</li>
<li>목적: 처리시간이 요청간격보다 훨씬 길어도, 첫 응답 이후 반환이 10초 단위로 밀리지 않고 요청 흐름에 가깝게 나오는지 확인</li>
</ul>
<p>seq별 완료 offset:</p>
<pre><code>{"[\n  { \"seq\": 1, \"acceptedOffsetSec\": 0.000, \"completedOffsetSec\": 9.379, \"totalLatencySec\": 9.378 },\n  { \"seq\": 2, \"acceptedOffsetSec\": 1.002, \"completedOffsetSec\": 12.227, \"totalLatencySec\": 11.224 },\n  { \"seq\": 3, \"acceptedOffsetSec\": 2.005, \"completedOffsetSec\": 11.385, \"totalLatencySec\": 9.376 },\n  { \"seq\": 4, \"acceptedOffsetSec\": 3.011, \"completedOffsetSec\": 14.315, \"totalLatencySec\": 11.300 },\n  { \"seq\": 5, \"acceptedOffsetSec\": 4.018, \"completedOffsetSec\": 13.364, \"totalLatencySec\": 9.341 },\n  { \"seq\": 6, \"acceptedOffsetSec\": 5.026, \"completedOffsetSec\": 13.633, \"totalLatencySec\": 8.605 },\n  { \"seq\": 7, \"acceptedOffsetSec\": 6.031, \"completedOffsetSec\": 16.701, \"totalLatencySec\": 10.666 },\n  { \"seq\": 8, \"acceptedOffsetSec\": 7.039, \"completedOffsetSec\": 16.650, \"totalLatencySec\": 9.609 },\n  { \"seq\": 9, \"acceptedOffsetSec\": 8.043, \"completedOffsetSec\": 16.793, \"totalLatencySec\": 8.748 },\n  { \"seq\": 10, \"acceptedOffsetSec\": 9.046, \"completedOffsetSec\": 17.706, \"totalLatencySec\": 8.657 }\n]\n"}</code></pre>
<p>실제 completion event 시간순:</p>
<pre><code>{"[\n  { \"seq\": 1, \"completedOffsetSec\": 9.379 },\n  { \"seq\": 3, \"completedOffsetSec\": 11.385 },\n  { \"seq\": 2, \"completedOffsetSec\": 12.227 },\n  { \"seq\": 5, \"completedOffsetSec\": 13.364 },\n  { \"seq\": 6, \"completedOffsetSec\": 13.633 },\n  { \"seq\": 4, \"completedOffsetSec\": 14.315 },\n  { \"seq\": 8, \"completedOffsetSec\": 16.650 },\n  { \"seq\": 7, \"completedOffsetSec\": 16.701 },\n  { \"seq\": 9, \"completedOffsetSec\": 16.793 },\n  { \"seq\": 10, \"completedOffsetSec\": 17.706 }\n]\n"}</code></pre>
<p>완료시간순 gap:</p>
<pre><code>{"[2.006, 0.842, 1.137, 0.269, 0.682, 2.335, 0.051, 0.092, 0.913]\n"}</code></pre>
<p>요약:</p>
<pre><code>{"{\n  \"firstCompletionOffsetSec\": 9.379,\n  \"lastCompletionOffsetSec\": 17.706,\n  \"avgCompletionGapSec\": 0.925,\n  \"maxCompletionGapSec\": 2.335,\n  \"singleAverageProcessingSec\": 10.571,\n  \"improvedVsSequential\": true,\n  \"followsRequestInterval\": true\n}\n"}</code></pre>
<p>판정:</p>
<ul>
<li>첫 응답은 <strong>9.379초</strong> 후 반환됐다.</li>
<li>이후 완료 이벤트 평균 gap은 <strong>0.925초</strong>로, 요청 간격 1초에 근접했다.</li>
<li>완료 순서는 일부 out-of-order였다. 예: <code>seq=3</code>이 <code>seq=2</code>보다 먼저 완료.</li>
<li>하지만 목표는 순서 보장이 아니라 “10초 처리시간 때문에 응답이 10초 단위로 밀리는지 여부”였고, 실제로는 밀리지 않았다.</li>
<li>실시간성 개선: <strong>PASS</strong></li>
</ul>
<hr />
<h4>단일 batch size 기준 Before / After 비교</h4>
<h5>비교 기준</h5>
<p>실제 측정된 단일 평균 처리시간:</p>
<pre><code>{"T = 10.571초/request\n"}</code></pre>
<p>요청 조건:</p>
<pre><code>{"N = 10개 요청\n요청 간격 = 1초\n마지막 요청 도착 시점 ≈ 9초\n"}</code></pre>
<h5>Before: 비동기 코루틴 처리가 없고 순차 처리였다면</h5>
<p>가정:</p>
<ul>
<li>서버가 한 번에 하나의 LLM 요청만 처리한다.</li>
<li>앞 요청이 끝나야 다음 요청 처리를 시작한다.</li>
<li>각 요청 처리시간은 평균 10.571초다.</li>
<li>요청은 1초마다 들어오지만, 처리 큐에서 순차 대기한다.</li>
</ul>
<p>예상 완료 시각:</p>
<pre><code>{"1번째 완료 ≈ 10.571초\n2번째 완료 ≈ 21.142초\n3번째 완료 ≈ 31.713초\n4번째 완료 ≈ 42.284초\n5번째 완료 ≈ 52.855초\n6번째 완료 ≈ 63.426초\n7번째 완료 ≈ 73.997초\n8번째 완료 ≈ 84.568초\n9번째 완료 ≈ 95.139초\n10번째 완료 ≈ 105.710초\n"}</code></pre>
<p>즉 사용자가 말한 나쁜 예시와 같은 형태가 된다.</p>
<pre><code>{"약 10.6초 -> 1번째\n약 21.1초 -> 2번째\n약 31.7초 -> 3번째\n...\n약 105.7초 -> 10번째\n"}</code></pre>
<p>순차 처리 예상치:</p>
<pre><code>{"{\n  \"expectedSequentialLastCompletionSec\": 105.710,\n  \"expectedSequentialAverageCompletionOffsetSec\": 58.141,\n  \"expectedSequentialAverageUserLatencySec\": 53.641\n}\n"}</code></pre>
<p>설명:</p>
<ul>
<li>평균 completion offset = <code>(10.571 * (1+...+10)) / 10 = 58.141초</code></li>
<li>평균 사용자 latency는 요청이 1초마다 들어온 점을 빼서 약 <code>53.641초</code></li>
<li>10번째 요청은 9초에 들어왔지만 105.710초에 끝나므로 10번째 사용자 latency는 약 <code>96.710초</code></li>
</ul>
<h5>After: 현재 비동기 코루틴/background batch 처리 결과</h5>
<p>실제 완료 시각:</p>
<pre><code>{"첫 완료: 9.379초\n마지막 완료: 17.706초\n첫 완료 이후 평균 반환 gap: 0.925초\n"}</code></pre>
<p>실제 평균 completion offset:</p>
<pre><code>{"(9.379 + 12.227 + 11.385 + 14.315 + 13.364 + 13.633 + 16.701 + 16.650 + 16.793 + 17.706) / 10\n= 14.215초\n"}</code></pre>
<p>실제 평균 사용자 latency:</p>
<pre><code>{"(9.378 + 11.224 + 9.376 + 11.300 + 9.341 + 8.605 + 10.666 + 9.609 + 8.748 + 8.657) / 10\n= 9.690초\n"}</code></pre>
<p>실제 결과:</p>
<pre><code>{"{\n  \"actualFirstCompletionSec\": 9.379,\n  \"actualLastCompletionSec\": 17.706,\n  \"actualAverageCompletionOffsetSec\": 14.215,\n  \"actualAverageUserLatencySec\": 9.690,\n  \"actualAverageCompletionGapSec\": 0.925\n}\n"}</code></pre>
<h5>개선 폭</h5>
<pre><code>{"{\n  \"lastCompletionSpeedup\": \"105.710 / 17.706 = 5.97x faster\",\n  \"averageCompletionOffsetSpeedup\": \"58.141 / 14.215 = 4.09x faster\",\n  \"averageUserLatencySpeedup\": \"53.641 / 9.690 = 5.54x faster\"\n}\n"}</code></pre>
<p>표로 정리:</p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col">항목</th>
<th scope="col">Before: 순차 처리 예상</th>
<th scope="col">After: 실제 비동기 처리</th>
<th scope="col">개선</th>
</tr>
</thead>
<tbody>
<tr>
<td>첫 응답</td>
<td>10.571초</td>
<td>9.379초</td>
<td>약 1.13배 빠름</td>
</tr>
<tr>
<td>마지막 응답</td>
<td>105.710초</td>
<td>17.706초</td>
<td>약 5.97배 빠름</td>
</tr>
<tr>
<td>평균 completion offset</td>
<td>58.141초</td>
<td>14.215초</td>
<td>약 4.09배 빠름</td>
</tr>
<tr>
<td>평균 사용자 latency</td>
<td>53.641초</td>
<td>9.690초</td>
<td>약 5.54배 빠름</td>
</tr>
<tr>
<td>첫 응답 이후 반환 간격</td>
<td>약 10.571초</td>
<td>평균 0.925초</td>
<td>요청 간격 1초에 근접</td>
</tr>
</tbody>
</table></div>
  </>;
}
