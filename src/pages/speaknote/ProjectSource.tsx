// Transcribed from the portfolio export. Image links point to the local archive.
import poster from './assets/poster.webp';
import crag from './assets/crag.webp';
import documentRoute from './assets/document-route.webp';
import webRoute from './assets/web-route.webp';
import documentParsing from './assets/document-parsing.webp';
import visualProcessing from './assets/visual-processing.webp';
import barChart from './assets/bar-chart.webp';
import domainModel from './assets/domain-model.webp';
import managers from './assets/managers.webp';
import instances from './assets/instances.webp';
import visualBatch from './assets/visual-batch.webp';
import contextTask from './assets/context-task.webp';
import chatTask from './assets/chat-task.webp';
import chatBatch from './assets/chat-batch.webp';
import queue from './assets/queue.webp';
import fullBatch from './assets/full-batch.webp';
import partialBatch from './assets/partial-batch.webp';
import callback from './assets/callback.webp';
import delayExample from './assets/delay-example.webp';
import requestFlow from './assets/request-flow.webp';
import coroutineFlow from './assets/coroutine-flow.webp';
import eventLoop from './assets/event-loop.webp';
import s from './SpeakNote.module.css';

export function ProjectSource({ openAppendix }: { openAppendix: () => void }) {
  return <>
<h3>SpeakNote</h3>
<p>기술: JAVA, MongoDB, Python, React<br />
날짜: 2025년 5월 6일 → 2025년 10월 1일<br />
팀구성: 협업</p>
<p><em>🎨 여러분은  강의에만 집중하세요. SpeakNote가 강의내용 필기를 맡습니다!</em></p>
<p><em>강의 자료를 기반으로, 시각 정보도 고려해서 필기용 주석을 자동으로 생성합니다</em></p>
<p><em>DRAG &amp; DROP으로 필기내용을 강의 필요한곳에 붙이고 수정하세요!</em> </p>
<p><em>Project Appeal Point</em></p>
<p>아키텍쳐 설계능력과, 서비스 차별화를 위한 문제정의능력. 그리고 시스템 안정성 및 유지보수성을 고려한 프로젝트입니다. 또한 개발 방법론을 체계화한 첫 프로젝트로 볼수있습니다.</p>
<blockquote>
<p><strong><em>Infomation</em></strong><br />
</p>
</blockquote>
<p><strong>개발 기간:</strong> 2025/05/01 ~ 2025/10/1</p>
<p><strong>팀 구성:  3</strong>인</p>
<p><strong>담당 업무: RAG시스템</strong></p>
<p><strong>성과 : AI.SW 융합해커톤 일반부 최우수상</strong> </p>
<p><a href={poster} target="_blank" rel="noreferrer" aria-label="제10회 AI·SW 융합 해커톤 포스터 원본 크기로 보기 (새 창)"><img src={poster} alt="제10회 AI·SW 융합 해커톤 포스터" width={1050} height={1486} loading="lazy" /></a></p>
<blockquote>
<p><strong><em>Review</em></strong><br />
</p>
</blockquote>
<p>공동의 목표를 토대로 성장하는 협업의 기틀을 경험할수 있었습니다. </p>
<p>분업과 책임분할, 인터페이스 문서화를 통해서 직접 문서화를 주도하고 전체적인 아키텍쳐 구상을 할 수 있었습니다.</p>
<p>단순히 AI가 주는 코드를 쓰는것이 아닌, 프로젝트를 위한 아키텍쳐를 설계하고, AI를 활용해서 개발하고 검증하는 개발방법론을 체계화했습니다.</p>
<p>또한 단순히 작동하는것이 아니라, 더 빠르고, 더 안정성있게 하기위한 여러 문제를 정의하고 해결하는 과정을 토대로 성장할 수 있었습니다.</p>
<h4>프로젝트 진행 과정</h4>
<p>저는 RAG를 담당하는 파이썬 워크플로우 개발담당으로, 크게 사용자가 업로드한 문서를 전처리, 사용자 요청에 알맞는 RAG 기반 답변생성을 맡았습니다.</p>
<p>저는 단순한 RAG 기반 생성기법 대신, CRAG(Corrective Retrieval Augmented Generation, 교정된 검색 증강 생성) 방식 도입을 통해 강의 문서 외부내용에도 대비하고, 내부적으로 문서의 시각정보 또한 RAG시스템에서 고려해서 대답할수있게 처리했습니다. 그 속에서의 시퀀셜한 작업에 의한 오버헤드를 비동기 작업으로 분리하고, 프로세스큐를 구현해서 대규모 응답처리에도 안정성을 더했습니다. </p>
<p>📃</p>
<p>일반적인 강의 주석생성 시스템과 차별화되는 강점을 갖기위해서 생성되는 텍스트 사용 <strong>인터페이스와, 생성 방식에 대해서 차별점</strong>을 갖게 하도록 합의했습니다.</p>
<h5>01. 서비스 컨셉</h5>
<p><strong>“필기에 정신을 쏟느라 정작 강의내용에 대한 깊은 이해와 되새김을 놓치고 있진 않나요?”</strong></p>
<p>지식의 비대칭이 있을때 강의 발화자의 말이 어떤 내용인지 받아적고 필기하는것이 쉽지 않습니다. 그 단어가 무엇을 뜻하는지 검색도 해야하고, 어떤 문맥에서의 내용인지 파악이 힘듭니다. 그리고 보통 발화자의 발표 속도는 필기나 일반적인 학생의 타자수준보다 빠릅니다.  저희서비스의 강점은 아래와 같습니다.</p>
<ol>
<li>발화 내용을 텍스트로 기록</li>
<li>발화 내용의 부가설명을 함께제공.</li>
<li>“텍스트박스”를 Drag &amp; Drop 으로 배치하고 내부수정이 가능한 편리한 인터페이스</li>
<li>웹처시 기반, 강의자료 기반에 대한 출처표기 부가설명.</li>
</ol>
<hr />
<h5>02. 요구사항 정의</h5>
<ul>
<li>[ ]  음성인식 STT 시스템</li>
<li>[ ]  업로드한 문서기반 주석생성 시스템</li>
<li>[ ]  Drag &amp; Drop 기반 강의 사용자 친화 강의 필기 인터페이스 시스템</li>
<li>[ ]  대시보드 및 로그인등의 기타 기능</li>
</ul>
<p>→ 저는 여기서 <strong>업로드한 문서기반 주석생성</strong> 시스템개발을 담당하게 됐습니다. (python 서버 담당)</p>
<hr />
<h5>02. 워크 플로우 설계</h5>
<p><a href={crag} target="_blank" rel="noreferrer" aria-label="CRAG의 질의 재작성, 문서 평가 및 생성 분기 원본 크기로 보기 (새 창)"><img src={crag} alt="CRAG의 질의 재작성, 문서 평가 및 생성 분기" width={436} height={832} loading="lazy" /></a></p>
<div className={s.tableScroll} role="region" aria-label="원문 데이터 표" tabIndex={0}><table>
<thead>
<tr>
<th scope="col"><strong>query_rewirte :</strong>STT 반환 텍스트를 llm을 통해서 정제된 텍스트로 변환한다.Input : STT 반환 텍스트output : 정제된 텍스트</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>retrieve</strong> :저장된 벡터DB에서 정제된 답변간의 유사도를 계산해서, top_k개의 분할된 높은 유사도 문서를 가져온다.Input : STT 정제된 텍스트output : list[연관성높은문서]</td>
</tr>
<tr>
<td><strong>grade_documents</strong> :top_k개의 문서와 질의내용의 적합성을 “yes” or “no” 로결정한다.Input : 정제된 텍스트, list[연관성높은문서]output : “yes” or “no”</td>
</tr>
<tr>
<td><strong>generate</strong> :적합성 검사결과가 “yes”인 경우, 해당 문맥을 고려한 최종답변이 생성된다.Input : 정제된 텍스트, “yes”output : 최종 출력 텍스트</td>
</tr>
<tr>
<td><strong>web_search_node</strong> :적합성 감사결과가 “No”인 경우, 웹검색 결과를 기반으로한 최종답변이 생성된다.Input : 정제된 텍스트, “no”output : 최종 출력 텍스트</td>
</tr>
<tr>
<td><strong>pass</strong> :단순히 값을 전달한다.Input : 최종 출력 텍스트output : 최종 출력 텍스트</td>
</tr>
</tbody>
</table></div>
<p>실제 상황에서는 반드시 모든 대화가 강의내용 내부내용만으론 충족되지 않을경우가 많습니다. 저희 시스템은 답변 품질의 안정성을 위해서 또한 범용성을 위해서 <strong>CRAG(Corrective Retrieval Augmented Generation, 교정된 검색 증강 생성)</strong>를 도입했습니다.</p>
<p>그리고 STT 발화만으론 아주 정제된 텍스트를 받기 힘듭니다. 이런 불용어나 비의미적인 텍스트가 많은 단어는 VectorStore DB내에 문서 Chunk들간의 코사인유사도 계산에 부정적 영향을 끼칩니다. 그럼으로 중간에 질의 재작성을 해서 자연스러운 발화 텍스트로 고칩니다.</p>
<h4>웹요청 전체 처리 구조도</h4>
<p><a href={requestFlow} target="_blank" rel="noreferrer" aria-label="FastAPI의 채팅·문서 요청 처리 구조 원본 크기로 보기 (새 창)"><img src={requestFlow} alt="FastAPI의 채팅·문서 요청 처리 구조" width={1058} height={1846} loading="lazy" /></a></p>
<p>FastAPI가 웹 요청을 받고, 채팅과 문서 요청을 각각의 Queue에 적재한 뒤 Background Worker가 처리합니다. 요청은 일정 개수 또는 대기시간 기준으로 Batch화되며, 장시간 걸리는 AI 작업을 웹 요청 흐름과 분리해 실시간 상호작용이 지연되지 않도록 설계했습니다.</p>
<p><a href={documentRoute} target="_blank" rel="noreferrer" aria-label="강의 자료에서 근거를 찾은 경우의 주석 생성 흐름 원본 크기로 보기 (새 창)"><img src={documentRoute} alt="강의 자료에서 근거를 찾은 경우의 주석 생성 흐름" width={1948} height={990} loading="lazy" /></a></p>
<p>case1.  강의 자료내에 있는 발화내용 인식후 답변 과정</p>
<p><a href={webRoute} target="_blank" rel="noreferrer" aria-label="강의 자료 밖의 내용에 웹 검색을 활용하는 흐름 원본 크기로 보기 (새 창)"><img src={webRoute} alt="강의 자료 밖의 내용에 웹 검색을 활용하는 흐름" width={2154} height={850} loading="lazy" /></a></p>
<p>case2. 강의 자료 외부내용에 대한 발화내용 인식후 답변과정</p>
<hr />
<h5>03. 문서 업로드</h5>
<p>문서는 단순 텍스트뿐만이 아니라 풍부한 시각적 정보가 함께있습니다. 기존의 RAG 시스템만으론 이 정보를 RAG 시스템 내에 포함하기 어렵습니다. 저는 UpstageDP와 Solar-pro2 llm을 이용해서 시각요소들은 문서검색에 용이한 텍스트로 변환해서 VectorDB에 저장하는 파이프라인을 개발해서 사용했습니다.</p>
<p><a href={documentParsing} target="_blank" rel="noreferrer" aria-label="문서 요소를 유형별로 분류한 Upstage 파싱 결과 원본 크기로 보기 (새 창)"><img src={documentParsing} alt="문서 요소를 유형별로 분류한 Upstage 파싱 결과" width={1474} height={520} loading="lazy" /></a></p>
<p>UpstageDP를 활용한 문서 정보 parsing 결과. 여러 정해진 카테고리로에 맞는 형식으로 시각정보가 저장된다.</p>
<p><a href={visualProcessing} target="_blank" rel="noreferrer" aria-label="그림과 차트를 검색용 텍스트로 바꾸는 과정 원본 크기로 보기 (새 창)"><img src={visualProcessing} alt="그림과 차트를 검색용 텍스트로 바꾸는 과정" width={1480} height={398} loading="lazy" /></a></p>
<p>각 카테고리에 맞는 프롬프트와 전처리 방식을 토대로 llm을 통해서 해당문서 시각정보를 모두다 텍스트 기반으로 변환한다.</p>
<p><a href={barChart} target="_blank" rel="noreferrer" aria-label="막대그래프 원본과 검색 가능한 설명문 원본 크기로 보기 (새 창)"><img src={barChart} alt="막대그래프 원본과 검색 가능한 설명문" width={1448} height={404} loading="lazy" /></a></p>
<p>실제 전처리가 된 bar chart의 결과예시.</p>
<hr />
<h5>04. instance관리 및 정의</h5>
<p>한문서는 아주많은 시각정보가 있을수도 있고, 각 응답은 시간이 길다. llm응답 오버헤드가 길고, 여러 agent를 거치기 때문이다. 그렇기에 적절한 MVP 서비스와 실제 병렬작업을 위한 서비스는 아키텍쳐가 크게 바뀌어야만 했다.</p>
<p><a href={domainModel} target="_blank" rel="noreferrer" aria-label="문서·채팅·사용자 객체의 데이터 모델 원본 크기로 보기 (새 창)"><img src={domainModel} alt="문서·채팅·사용자 객체의 데이터 모델" width={1696} height={344} loading="lazy" /></a></p>
<p><a href={managers} target="_blank" rel="noreferrer" aria-label="객체의 생성·조회·삭제를 맡는 매니저 구성 원본 크기로 보기 (새 창)"><img src={managers} alt="객체의 생성·조회·삭제를 맡는 매니저 구성" width={1406} height={344} loading="lazy" /></a></p>
<p>다중 유저를 대비해야하기 때문에 instance를 나눠서 정의했다. Manager들은 앱에 1개씩만 존재해야하는 원칙으로 생성되고, Manager들이 모든 객체의 생성-삭제-수정-탐색의 책임을 갖는다. </p>
<p>Context : 전처리된 문서의 정보를 담는 객체</p>
<p>Chat : 업로드한 강의 페이지에 대한 세션</p>
<p>User : 로그인한 유저</p>
<p>Msg : 음성인식 내용을 토대로 생길 답변내용</p>
<p><a href={instances} target="_blank" rel="noreferrer" aria-label="채팅 세션과 전처리된 문서 및 응답 객체 간 관계 원본 크기로 보기 (새 창)"><img src={instances} alt="채팅 세션과 전처리된 문서 및 응답 객체 간 관계" width={1836} height={1032} loading="lazy" /></a></p>
<p>실제 instance간의 관계도 예시</p>
<hr />
<h5>05. 시간지연 및 대량요청 대비 병렬화 작업</h5>
<ol>
<li>문서 업로드 및 전처리 병렬화</li>
</ol>
<p><a href={visualBatch} target="_blank" rel="noreferrer" aria-label="문서의 시각 요소를 유형별로 묶어 병렬 처리하는 과정 원본 크기로 보기 (새 창)"><img src={visualBatch} alt="문서의 시각 요소를 유형별로 묶어 병렬 처리하는 과정" width={1730} height={776} loading="lazy" /></a></p>
<p>한 문서에 대해서 여러 시각정보를 카테고리별로 모으고 비동기처리 방식으로 묶어서 한번에 병렬 처리한다.</p>
<p><a href={contextTask} target="_blank" rel="noreferrer" aria-label="문서 업로드 요청을 하나의 Context Task로 묶는 과정 원본 크기로 보기 (새 창)"><img src={contextTask} alt="문서 업로드 요청을 하나의 Context Task로 묶는 과정" width={1806} height={990} loading="lazy" /></a></p>
<p>문서 요청 1개당, 1개의 context_task로 묶는다. 각 context_task에는 여러 시각정보가 있을수 있다.</p>
<ol>
<li>복수 유저의 음성인식 용기반 주석생성 요청</li>
</ol>
<p><a href={chatTask} target="_blank" rel="noreferrer" aria-label="한 음성인식 요청의 주석 생성 작업 원본 크기로 보기 (새 창)"><img src={chatTask} alt="한 음성인식 요청의 주석 생성 작업" width={1392} height={746} loading="lazy" /></a></p>
<p>단일 음성인식 텍스트 요청에 대한 task를 위처럼 정의한다.</p>
<p><a href={chatBatch} target="_blank" rel="noreferrer" aria-label="여러 사용자의 주석 생성 요청을 함께 처리하는 과정 원본 크기로 보기 (새 창)"><img src={chatBatch} alt="여러 사용자의 주석 생성 요청을 함께 처리하는 과정" width={1734} height={872} loading="lazy" /></a></p>
<p>복수의 음성인식 내용에 대한 주석생성 처리를 묶어서 처리하는 방식. 위에서 ainvoke로 묶은 task들이 병렬처리되서 유저에게 돌아가는 과정이다.</p>
<hr />
<h5>05. 아키텍쳐 및 프로세스큐</h5>
<p>그냥 task를 다 묶어서 병렬화를 하기엔 컴퓨터의 처리성능은 무한하지 않습니다. 저는 지정한 task의 개수만큼만 한번에 처리하도록하는 프로세스큐를 구현해서 시스템의 안정성을 더했습니다. </p>
<p><a href={queue} target="_blank" rel="noreferrer" aria-label="문서 큐와 채팅 큐를 분리한 파이썬 서버 구조 원본 크기로 보기 (새 창)"><img src={queue} alt="문서 큐와 채팅 큐를 분리한 파이썬 서버 구조" width={1858} height={968} loading="lazy" /></a></p>
<p>파이썬 서버내에서 다중 유저의 요청을 처리하는 전체 프로세스 과정 및 아키텍쳐. (여기서 PROCESS는 CSE의 프로세스가 아니라, 그냥 영어명 “처리 프로세스” 그 자체를 일컷는 명입니다.) </p>
<ul>
<li>프로세스큐 동작 알고리즘</li>
</ul>
<p>내부 프로세스큐가 빌때까지 계속해서 내부 Task를 pop front합니다. </p>
<p>프로세스큐는 기본적으로 투포인터라고 보시면 됩니다. 프로세스큐가 들고있는 Task객체는 단일 task가 아니라, 사전에 정의된 PATIENT 시간내에 요청된 task 묶음입니다. </p>
<ul>
<li>Task객체란?</li>
</ul>
<p>위에서 각각의 Chat_task, Context_task에 대해서 설명드렸습니다. 최대 병렬작업 처리갯수인 MAX_PROCESS_NUM 만큼의 task가 들어가는 버퍼입니다. Task객체는 매번 Patient 시간동안 대기하다가 그 시간내에 MAX_PROCESS_NUM가 초과하지 않으면 프로세스큐에 들어갑니다. MAX_PROCESS_NUM이 초과하는 프로세스가 동시에 들어오면 슬라이싱해서 MAX_PROCESS_NUM만큼의 task만 들어있는 Task객체를 만들어서 프로세스큐에 넣고 모든 요청에 대해서 백그라운드에서 무한반복합니다.</p>
<p><a href={fullBatch} target="_blank" rel="noreferrer" aria-label="대기 시간 안에 최대 요청 수를 초과한 사례 원본 크기로 보기 (새 창)"><img src={fullBatch} alt="대기 시간 안에 최대 요청 수를 초과한 사례" width={908} height={1020} loading="lazy" /></a></p>
<p><a href={partialBatch} target="_blank" rel="noreferrer" aria-label="대기 시간 안에 최대 요청 수를 채우지 못한 사례 원본 크기로 보기 (새 창)"><img src={partialBatch} alt="대기 시간 안에 최대 요청 수를 채우지 못한 사례" width={908} height={1014} loading="lazy" /></a></p>
<p><strong>성능</strong></p>
<p>→ 테스트 서버에서 MAX_PROCESS_NUM=5, 유저 10명, PATIENT=3초, 5초 동안 20개의 예시 요청에도 주석 생성 테스트를 했습니다. </p>
<p>→ 유저가 직접 채팅으로 요청하는것이 아니라, 일정 시간마다 음성인식이 들어오는 구조이기 때문에,  MAX_PROCESS_NUM 이내의 요청이 지속된다면, 첫 요청 오버헤드이후에는 오버헤드가 일정시간 간격으로 계속 생성됩니다. (PATIENT 시간을 프론트엔드의 음성인식 요청 간격시간 이하로 맞춰야함)</p>
<p>MAX_PROCESS_NUM == 병렬 수행 개수 (batch_size)</p>
<p><a href={callback} target="_blank" rel="noreferrer" aria-label="비동기 요청과 콜백 웹훅의 처리 흐름 원본 크기로 보기 (새 창)"><img src={callback} alt="비동기 요청과 콜백 웹훅의 처리 흐름" width={1872} height={804} loading="lazy" /></a></p>
<p>Async request + callback webhook 방식의 요청-응답처리 프로토콜 및 전체 아키텍쳐 도식도.</p>
<h4>06. 지연최적화</h4>
<h5>문제상황</h5>
<p><a href={delayExample} target="_blank" rel="noreferrer" aria-label="요청 간격보다 처리 시간이 길 때 순차·비동기 응답 차이 원본 크기로 보기 (새 창)"><img src={delayExample} alt="요청 간격보다 처리 시간이 길 때 순차·비동기 응답 차이" width={1672} height={941} loading="lazy" /></a></p>
<p>요청 간격과 처리시간 차이로 인한 주석 반환 지연 누적문제. 예를들어, 요청 간격 5초, 처리시간 8초의 상황에서는 각 요청별로 3초의 누적이 있습니다. 실제 강의 상황에서는 이 누적 지연시간은 치명적이게 됩니다..</p>
<p>제 시스템 특징은 I/O bound 부하가 아니라, 대부분의 오버헤드가 외부 API와의 대기시간에 의한것이란점 입니다. 코루틴을 활용해서 작업 배치간의 병렬처리 및 지연최소화를 할 수 있었습니다. </p>
<p><a href={coroutineFlow} target="_blank" rel="noreferrer" aria-label="배치 단위로 코루틴을 실행하는 과정 원본 크기로 보기 (새 창)"><img src={coroutineFlow} alt="배치 단위로 코루틴을 실행하는 과정" width={2341} height={1846} loading="lazy" /></a></p>
<p>STT 요청은 시간차를 두고 지속적으로 유입되지만, 하나의 LLM 처리에는 수 초가 소요됩니다. 이를 해결하기 위해 요청을 ProcessQueue에 잠시 누적해 Batch 단위로 만들고, 각 Batch를 독립적인 Coroutine으로 실행하여 이전 Batch가 응답을 기다리는 동안에도 다음 Batch가 즉시 처리되도록 구성했다. 이 방식으로 지속적인 요청에서 발생하는 누적 지연을 줄였습니다.</p>
<p><a href={eventLoop} target="_blank" rel="noreferrer" aria-label="이벤트 루프 위에서 두 워커가 동작하는 구조 원본 크기로 보기 (새 창)"><img src={eventLoop} alt="이벤트 루프 위에서 두 워커가 동작하는 구조" width={3173} height={629} loading="lazy" /></a></p>
<p>Chat Worker와 Docs Worker는 하나의 Event Loop 위에서 독립적인 Coroutine으로 동작합니다. 각 Batch는 <code>create_task()</code>로 실행해 이전 Batch의 외부 API 응답을 기다리지 않고 다음 작업을 계속 dispatch하며, Batch 내부 요청은 <code>asyncio.gather()</code>로 동시에 처리했습니다..</p>
<h3>실험 핵심 요약</h3>
<p>실험 정보</p>
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
<p>실험 결과 요약표</p>
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
<p><button type="button" className={s.appendixLink} onClick={openAppendix}>SpeakNote 실험 결과 상세 열기</button></p>
<hr />
<h5>06. AI와 함께 개발하는 개발방법론 및 협업 방법론</h5>
<p><strong>🩹 AI와 함께 개발하는 개발방법론</strong></p>
<p>대형 프로젝트에 있어서는 더이상 예전처럼 많은 개발자가 필요하지 않을수도 있겠다 생각합니다.</p>
<p>전체 아키텍쳐와 시나리오를 구성하고 필요한 컴포넌트와 클래쓰를 구분하고, 그 내부 동작을 정의합니다. </p>
<p>그 내부동작은 이제 코드가 아니라, “한국어”로 코딩합니다. </p>
<p><strong>🛠 개발 방법론 구체화</strong></p>
<p><strong>Before</strong></p>
<pre><code>{"def find_nearest_context_text(datas, current_index, max_search_num=6):\n    \"\"\"\n    ### Input\n    - datas: 순서가 보장된 데이터 리스트\n    - current_index: 기준 인덱스\n    - max_search_num: 탐색 최대 거리 (기본 6)\n\n    ### Output\n    - 가장 가까운 유효 문맥 텍스트 (str)\n    - 없으면 \"\" 반환\n\n    ### Behavior\n    1. current_index 기준으로 좌측부터 거리순 탐색\n    2. text_handler 결과가 공백이 아니면 즉시 반환\n    3. 좌측에서 못 찾으면 우측 동일 방식 탐색\n    4. max_search_num 범위 내 없으면 \"\" 반환\n    \"\"\"\n    return \"\"\n"}</code></pre>
<p><strong>After</strong></p>
<pre><code>{"def find_nearest_context_text(datas, current_index, max_search_num=6):\n    for offset in range(1, max_search_num):\n        idx = current_index - offset\n        if idx >= 0:\n            text = text_handler(datas[idx])\n            if text.strip():\n                return text\n    for offset in range(1, max_search_num):\n        idx = current_index + offset\n        if idx < len(datas):\n            text = text_handler(datas[idx])\n            if text.strip():\n                return text\n    return \"\"\n"}</code></pre>
<p>이제 위 코드에서 미리 준비해둔 시나리오에 대해서 정상적으로 가장 근접한 텍스트를 하나 반환하는지 테스트하기. 정상작동시, 내용 복붙해서 넣기.</p>
<p><strong>개발 방법론</strong></p>
<ol>
<li>
<p>메인 시나리오를 자연어로 정의 </p>
</li>
<li>
<p>시나리오를 큰 객체 단위로 분해 </p>
</li>
<li>
<p>각 단계의 API 인터페이스만 먼저 정의 </p>
</li>
<li>
<p>내부 구현 없이 skeleton 함수 작성 </p>
</li>
<li>
<p>전체 워크플로우가 논리적으로 연결되는지 점검 </p>
</li>
<li>
<p>이후 세부 로직 구현 단계의 API 인터페이스만 먼저 정의 예시. </p>
</li>
</ol>
<p>어떤 공동의 목표로 작업을 할 때는 가장 큰 가치관에 대한 동의가 중요하다는 걸 깨달았습니다.</p>
<p>서로 간에 코딩 시에는 인터페이스 약속과 문서화로 의견을 조율하고, 언제든지 고칠 수 있지만 각각의 서비스 개발 비전과 컨셉이 다를 때가 더 곤란했던 기억이 있습니다. 또한 팀 업무에서는 "우선순위"가 있다는 것을 절실히 깨달았습니다. 전체로 보았을 때 가장 빨리, 가장 정교해야 할 부분이 있고, 시간은 무한대가 아닙니다.</p>
<p>예를 들어, 지금 제 프로세스큐는 단순 FIFO 정책, 객체매니저 객체탐지도 단순 선형탐색입니다.</p>
<p>저희 서비스가 보여주고자 하는 목표에 있어서 위 같은 방법론은 1순위가 아니기에 저런 부분들을 타협하고, 문서화해 나가며 속도감과 정교함 속에서 타협하는 선을 생각하고자 많이 노력했습니다.</p>
<p><em>🎨 팀업에 대한 경험과 코드 설계에 대한 경험을 할 수 있었습니다.</em></p>
<p>공동의 목표로 큰 비전을 위해 작업할때, 사람간의 업무분할과 책임분할 만큼, 코드내에서 객체와 패키지간의 책임분리가 얼마나 중요한지 깨달았습니다. 또한 문서화와 아키텍쳐 선정 및 밑그림 작업에 대한 중요성과 AI를 활용한 개발 방법론을 체득했습니다</p>
<blockquote>
<p><strong><em>Review</em></strong><br />
</p>
</blockquote>
<p>기존에는 AI에 의존하는 프로젝트를 진행했습니다. 하지만 프로젝트가 대형화되고 인스턴스화 됨에 따라서 본인이 설계하지 않으면 유지보수를 할수없다는 결론에 이르었습니다.</p>
<p>이를 통해서 저는 AI는 컴포넌트 단위보다 하위레벨인 클래쓰나 함수단위에서만 주로 쓰고 파이썬 주피터 노트북에서 테스트 케이스를 통과한 코드만 채택함으로써 아래와같은 개발 방법론적 성과를 터득했습니다.</p>
<ol>
<li>전체 아키텍쳐 및 인스텐스간의 관계파악</li>
<li>책임 분할 및 코드검증으로 디버깅시간 획기적인 단축</li>
</ol>
  </>;
}
