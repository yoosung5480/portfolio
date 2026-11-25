import figure00 from './assets/fig-00.webp';
import figure01 from './assets/fig-01.webp';
import figure02 from './assets/fig-02.webp';
import figure03 from './assets/fig-03.webp';
import figure04 from './assets/fig-04.webp';
import figure05 from './assets/fig-05.webp';
import figure06 from './assets/fig-06.webp';
import figure07 from './assets/fig-07.webp';
import figure08 from './assets/fig-08.webp';
import figure09 from './assets/fig-09.webp';
import figure10 from './assets/fig-10.webp';
import figure11 from './assets/fig-11.webp';
import figure12 from './assets/fig-12.webp';
import figure13 from './assets/fig-13.webp';
import figure14 from './assets/fig-14.webp';
import figure15 from './assets/fig-15.webp';
import figure16 from './assets/fig-16.webp';
import figure17 from './assets/fig-17.webp';
import figure18 from './assets/fig-18.webp';
import figure19 from './assets/fig-19.webp';
import figure20 from './assets/fig-20.webp';
import figure21 from './assets/fig-21.webp';
import figure22 from './assets/fig-22.webp';
import s from './Hai.module.css';

const figures = [
  { src: figure00, width: 1370, height: 970, description: "대회 규칙과 평가 절차 안내" },
  { src: figure01, width: 2492, height: 898, description: "합성 방식에 따라 달라지는 딥페이크 문제의 범위" },
  { src: figure02, width: 2564, height: 910, description: "생성 방식과 영상 품질에 따른 탐지 문제 비교" },
  { src: figure03, width: 1752, height: 1116, description: "디퓨전 생성 이미지 탐지 논문 개요" },
  { src: figure04, width: 1010, height: 412, description: "GAN 및 디퓨전 이미지로 학습한 모델의 탐지 성능 비교" },
  { src: figure05, width: 1010, height: 548, description: "디퓨전 데이터 추가 학습 후의 일반화 성능표" },
  { src: figure06, width: 1752, height: 1224, description: "Deepfake Detection that Generalizes Across Benchmarks 논문 개요" },
  { src: figure07, width: 930, height: 1044, description: "파운데이션 모델을 미세 조정한 탐지 모델의 구조와 성능" },
  { src: figure08, width: 2570, height: 988, description: "FaceForensics++, Celeb-DF, DF40과 DiffFace 데이터 샘플" },
  { src: figure09, width: 1276, height: 1048, description: "훈련에 사용한 딥페이크 데이터셋 구성" },
  { src: figure10, width: 1274, height: 1094, description: "초기 검증 데이터셋과 최종 검증 데이터셋 비교" },
  { src: figure11, width: 2296, height: 972, description: "백본 선정 시 비교한 이미지 특징 추출 모델" },
  { src: figure12, width: 2704, height: 1012, description: "모델 크기별 spatial 백본 성능 비교" },
  { src: figure13, width: 2602, height: 1194, description: "대회 베이스라인부터 최종 얼굴 전처리까지의 비교" },
  { src: figure14, width: 2410, height: 1248, description: "영상 프레임 추출부터 제출 파일 생성까지의 추론 파이프라인" },
  { src: figure15, width: 2620, height: 1274, description: "합성형과 디퓨전 데이터를 순서대로 학습하는 훈련 과정" },
  { src: figure16, width: 852, height: 530, description: "학습 에포크별 검증 AUC 곡선" },
  { src: figure17, width: 864, height: 540, description: "학습 손실과 검증 손실이 갈라지는 곡선" },
  { src: figure18, width: 2722, height: 1054, description: "학습 데이터와 테스트 데이터의 특징 분포 시각화" },
  { src: figure19, width: 2682, height: 1198, description: "분류기 구조별 실험과 결과 비교" },
  { src: figure20, width: 2714, height: 1048, description: "디퓨전 학습 데이터 비율별 결과와 최종 모델 선택" },
  { src: figure21, width: 1954, height: 1044, description: "Private 리더보드에서 11위, 점수 0.94073을 기록한 화면" },
  { src: figure22, width: 1954, height: 1044, description: "코드 검증을 거친 오프라인 발표 진출팀 단체사진" },
];

function ArchiveFigure({ index }: { index: number }) {
  const { src, width, height, description } = figures[index];
  return <figure><a href={src} target="_blank" rel="noreferrer" aria-label={`${description} 크게 보기 (새 창)`}><img src={src} width={width} height={height} loading="lazy" alt={description}/></a><figcaption>{description}</figcaption></figure>;
}

export function ArchiveView() {
  return (
    <div className={s.archive}>
      <details>
        <summary>대회 개요와 규칙</summary>
        <div className={s.archiveText}>
          <p>대회 URL: <a target="_blank" rel="noreferrer" href="https://dacon.io/competitions/official/236628/overview/description">https://dacon.io/competitions/official/236628/overview/description</a><br />
          기술: DeepLearning, Python, forgery detction, pytorch<br />
          날짜: 2025년 12월 29일 → 2026년 2월 2일<br />
          팀구성: 개인 프로젝트</p>
          <p><em>🎨 고도화된 AI 모델링과 창의적인 접근을 통해 컨텐츠 내 딥페이크 여부를 판별하는 기술 경쟁에 도전!</em></p>
          <p>데이터 수집부터 모델 선정 및 훈련, 검증, 추론까지 완전 무에서 유를 만드는 프로젝트.</p>
          <p>앞으로 있을 연구와 딥러닝 task에 있어서 기초체력을 탄탄하게 다지게 된 프로젝트 입니다.</p>
          <p>또한 기존의 프로젝트 설계 경력을 토대로 다른 코드 베이스에 얽메이지 않고 나만의 훈련 프레임워크를 개발해서 사용했다는 점이 기억에 남습니다.</p>
          <blockquote>
          <p><strong><em>Infomation</em></strong></p>
          </blockquote>
          <p><strong>개발 기간:</strong> 2025/12/29 ~ 2026/03/11</p>
          <p><strong>팀 구성: 1</strong>인</p>
          <p><strong>담당 업무:</strong> <strong>딥페이크 감지모델 개발</strong></p>
          <p><strong>성과</strong> : <strong>코드검증통과, 최종 458팀중 최종 6등</strong></p>
          <blockquote>
          <p><strong><em>Review</em></strong></p>
          </blockquote>
          <p>데이터 수집 부터 프레임워크 개발 및 추론 파이프라인 까지 정말 End2End로 개발하는 경험이였습니다.</p>
          <p>요구사항이 아주 많고, 엄격한 재현여부와 코드검정이 있어서 더 재미있는 대회였습니다.</p>
          <h4>대회 기본 규칙</h4>
          <p>다양한 이미지(jpg, jpeg, png, jfif) 또는 동영상(mp4, mov) 데이터를 <strong>반드시 이미지 단위로 입력으로 받아</strong>, 해당 콘텐츠가 진짜(Real)인지 딥페이크(Fake)인지 분류하는 AI 모델을 개발해야 합니다.</p>
          <ul>
          <li>본 대회에서는 공식 학습 데이터는 제공되지 않으며 추론을 위한 평가 데이터만 제공됩니다.</li>
          <li>참가자는 추가 모델 학습이 필요하다면 규칙 범위 내에서 학습에 필요한 데이터를 직접 구축해야 합니다.</li>
          <li>반드시 <a target="_blank" rel="noreferrer" href="https://dacon.io/competitions/official/236628/overview/rules">대회 규칙</a>을 사전에 숙지하여 진행해야합니다.</li>
          </ul>
          <h4>대회 특징</h4>
          <p>대회의 요구사항이 까다로웠습니다. 그렇기 때문에 정말 많은 성장을 할 수 있었던 대회였습니다.</p>
          <ol type="1">
          <li>훈련 데이터셋 제공 x</li>
          <li>다양한 이미지(jpg, jpeg, png, jfif) 또는 동영상(mp4, mov)데이터 형식</li>
          <li>데이터 내부 blur, 깜빡임 등의 처리</li>
          <li>엄격한 제출형식 및 재현 여부 확인과 코드검증</li>
          <li>모델 성능으론 1차만 평가하고, 오프라인 평가에선 평가기준 재정립</li>
          </ol>
          <ArchiveFigure index={0}/>
        </div>
      </details>
      <details>
        <summary>문제정의</summary>
        <div className={s.archiveText}>
          <p>“고화질 디퓨전 생성 모델의 출현이후로 그 문제는 더 확대됐다.”</p>
          <p>딥페이크 문제는 이미지의 화질이나, 생성방식에 따라서 real-fake 2개의 클래쓰 구분이라는 포멧이지만 실제론 아주 넓은 분포의 문제를 해결해야한다. 그러다보니 과적합과 short cut 방지가 주된 목표이다.</p>
          <ArchiveFigure index={1}/>
          <ArchiveFigure index={2}/>
          <p>전통의 합성형(synthesis) 딥페이크 챌린지 데이터셋에 더해서, 생성형 딥페이크 문제에 대한 대비가 반드시 필요하다 생각했다.</p>
        </div>
      </details>
      <details>
        <summary>연구 동향</summary>
        <div className={s.archiveText}>
          <ul>
          <li>최신 spatial 파운데이션 대형 모델들이 ImageNet등의 챌린지에서 아주 좋은 성능을 보이고 있다.
          <ul>
          <li>예를들어, CLIP, DINOv3 등의 모델이 해당된다.</li>
          </ul></li>
          <li>디퓨전 기반 고화질 생성형 이미지에 대한 문제와 기존의 합성형 딥페이크에 대한 비교실험도 진행됐다.</li>
          </ul>
          <h4><strong>Towards the Detection of Diffusion Model Deepfakes</strong></h4>
          <ArchiveFigure index={3}/>
          <p>논문의 주요내용은 아래와 같다.</p>
          <ol type="1">
          <li>가설 : 디퓨전 모델로 생성한 이미지 탐색이 더 어려운 문제이다.</li>
          <li>실험 : 합성형 기반 딥페이크 데이터셋으로 훈련한 모델보다, 디퓨전 모델로 훈련한 모델이 일반화 측면에서 더 나은 성능을 보였다.</li>
          <li>기존의 SOTA 모델들에 디퓨전 모델기반 데이터셋을 추가 훈련시켰을때 일반환 성능이 아주좋다.</li>
          </ol>
          <ArchiveFigure index={4}/>
          <p>표를 보면, DM(디퓨전 모델)으로 훈련 한 모델들이 기존 GAN으로 생성한 데이터셋들에도 성능이 더 좋게 나온걸 확인할 수 있다.</p>
          <ArchiveFigure index={5}/>
          <p>이 논문의 결과에 따르면 기존의 딥페이크 모델에 대해서 DM 데이터셋으로 파인튜닝 했을때 아주 좋은 일반화 성능을 보였다고 한다.</p>
          <h4><strong>Deepfake Detection that Generalizes Across Benchmarks</strong></h4>
          <ArchiveFigure index={6}/>
          <ArchiveFigure index={7}/>
          <p>최근 파운데이션 거대 spatial 모델들의 활약에 lightweight Low-Rank Adaptation (LoRA) + LN-tuning튜닝, align loss, uniform loss를 사용해서 전체 파라미터의 아주 일부 (0.03%) 정도만 가중치를 키고 훈련한다.</p>
          <p>이 모델은 FF++데이터셋으로 115k 프레임으로 훈련한 결과 unseen한 다른 딥페이크 데이터셋에 대해서도 놀라운 일반화 성능을 보였음을 보고했다. 또한 real-fake 라벨의 쌍 활용이 중요함을 지적했다.</p>
          <p>→ 다만 실제로 코드를 뜯어보니, real-fake가 같은 배치내에서나 대응되게 보장해놓진 않고 그냥 전체 데이터셋에서 real-fake가 매칭되게 존재하는거 자체로 의의를 둔거같다.</p>
          <h4>그 외 논문들</h4>
          <h4><strong>DIRE for Diffusion-Generated Image Detection</strong></h4>
          <p>가설 : 디퓨전 기반 생성이미지는 완전 노이즈 상태에서 복원시 실제 이미지보다 더 나을것이다.</p>
          <p>→ DIRE라는 디퓨전 감지를 위한 오차 정보를 정의하는 방식은 괄목할만 하다.</p>
          <p>실제로 아주 좋은 성능을 보였지만, <strong>DM 특화 감지방식이라서 지금 대회에 적용 방향이 안맞다본다.</strong></p>
          <h4><strong>Multi-attentional Deepfake Detection</strong></h4>
          <p>멀티 어텐션과 다중 쿼리를 이용해서 내부적으로 모델이 얼굴의 여러 측면 (예를들어, 입, 눈가 등)을 고려해서 보고 딥페이크 모델의 특징을 추출해서 감지하게 설계한다. 어텐션맵이 서로 다른 것을 보게하기 위해서</p>
          <ol type="1">
          <li><strong>Attention Guided Data Augmentations</strong></li>
          <li><strong>Regional Independence Loss</strong></li>
          </ol>
          <p>를 고안해냈는데, 이는 추후 다른 방법에도 응용할만하다. 또한 DM(디퓨전 생성 이미지) 데이터셋을 활용할 경우 기존의 딥페이크와 DM문제에도 더 나은 성능을 보임을 보고햇다.</p>
          <p>다만 본인은 spatial 모델을 활용한 빠른 성능향상이 목적임으로 주어진 시간과 자원한계로 도입하지 않았다.</p>
          <h4><strong>MoE-FFD: Mixture of Experts for Generalized and Parameter-Efficient Face Forgery Detection</strong></h4>
          <p>Parameter Efficient Fine-Tuning (PEFT), lightweight Low-Rank Adaptation (LoRA) + Adapter layer를 이용해서 VIT모델의 파라미터는 동결하고 효율적인 훈련법을 고안했다. 특히, Gate효과를 통해 딥러닝적으로 Expert를 선택한다는 점이 방향이 좋았지만, 이또한 spatial모델이 아니란점과, 짧은 시간내에 캐치업하기 힘들거 같음으로 보류했다.</p>
          <p>이 외에도 많은 논문을 통한 리서치를 했고, 많은 인사이트를 얻을수 있었다.</p>
        </div>
      </details>
      <details>
        <summary>데이터셋 준비</summary>
        <div className={s.archiveText}>
          <p>우리가 커버할 범위로 설정한 부분은 기존의 FF++과 Celeb-v2 데이터셋에 더해서 고화질 디퓨전 기반 딥페이크 real-fake데이터셋을 확보하는것이 목표였다.</p>
          <p>Diff : <a target="_blank" rel="noreferrer" href="https://github.com/Rapisurazurite/DiffFace">https://github.com/Rapisurazurite/DiffFace</a>,</p>
          <p>FaceForensics (FF++) : <a target="_blank" rel="noreferrer" href="https://github.com/ondyari/FaceForensics">https://github.com/ondyari/FaceForensics</a>,</p>
          <p>DF40 : <a target="_blank" rel="noreferrer" href="https://github.com/YZY-stack/DF40/tree/main">https://github.com/YZY-stack/DF40/tree/main</a></p>
          <ArchiveFigure index={8}/>
          <p>각 딥페이크 챌린지 데이터셋의 데이터셋 샘플이미지</p>
          <p>우리는 위 이미지를 토대로 데이터셋을 확보했다.</p>
          <ArchiveFigure index={9}/>
          <p>초기엔 리더보드 성적보단 훈련이 되고있나를 검증하기 위해서 딥페이크 데이터셋중에서 unseen한 데이터를 쓰지 않았다. 하지만 딥페이크 특성상 한 “방식”에 적응하고 나니깐 검증점수는 과도하게 높아졌다.</p>
          <p>결국 이 챌린지의 궁극 해결목표는 unseen한 딥페이크 방식에도 효과있는 generalizable한 모델이 목표라 인식해서 검증데이터셋을 대대적으로 개편했다.</p>
          <ArchiveFigure index={10}/>
        </div>
      </details>
      <details>
        <summary>이미지 특징 추출기 아키텍쳐 선정</summary>
        <div className={s.archiveText}>
          <ol type="1">
          <li>나는 이 딥페이크 감지 task 자체를 이번 대회를 통해서 접하기 때문에 사전 조사 시간이 걸린다.</li>
          <li>공용 GPU를 사용하고, 리더보드 점수가 목표이기 때문에 현존 가장 좋은 이미지 특징 추출기의 도움을 받는것으로 빠르게 성능을 올리고자 한다. (또한 그런 spatial model을 다뤄보는것 자체가 또 공부가 될거같다.)</li>
          <li>모델 개발만큼 영상-이미지 전처리해야할게 많고, 이는 전체 성능에 주는 영향이 크다. 최대한 빨리 제출 파일을 내보고 모델 훈련전에 전처리 파이프라인 부터 고쳐야한다.</li>
          </ol>
          <ArchiveFigure index={11}/>
          <p>그럼으로 <strong>Deepfake Detection that Generalizes Across Benchmarks</strong> 논문의 아키텍쳐와 모델 개발방법론을 기반으로 해서 훈련하고자했다.</p>
          <ArchiveFigure index={12}/>
          <p>같은 크기의 spatial 모델에서 meta의 PE spatial이 성능이 가장 좋게나왔다. 그럼으로 백본은 일단 PE 시리즈로 채택했다.</p>
        </div>
      </details>
      <details>
        <summary>전처리 파이프라인</summary>
        <div className={s.archiveText}>
          <p>대회 리더보드 Test데이터는 영상과 이미지가 혼합돼있고, 내부적으로 blur, jpeg저화질 처리, 영상 흔들기 깜빡임 등등 여러 처리과정이 들어가있다. 그럼으로 우린 사후 통계과정을 통해서 아래와 같은 예외 상황과, 불운 요소를 최대한 제거하기로 했다.</p>
          <ArchiveFigure index={13}/>
          <p>전체 추론과정은 아래와같이 이뤄진다.</p>
          <ArchiveFigure index={14}/>
        </div>
      </details>
      <details>
        <summary>모델 훈련 및 개선</summary>
        <div className={s.archiveText}>
          <h4>모델 훈련 커리큘럼 구상 - Step by step</h4>
          <p>“FF++같은 기본 딥페이크 데이터셋으로 베이스라인을 만들고, 디퓨전 데이터셋으로 파인튜닝하자.”</p>
          <p>“우리는 시간이 많이 없음으로, 파운데이션 모델의 능력을 최대한 끌어쓰고, 데이터셋 커버리지로 승부본다.”</p>
          <ArchiveFigure index={15}/>
          <ol type="1">
          <li><strong>Loss 결정</strong></li>
          </ol>
          <p>내 훈련 방식의 베이스가 된 논문은 1개 데이터셋으로만 훈련한 모델이, 다른 데이터셋과 문제에도 일반화 성능이 뛰어남을 보였다. 하지만 난 데이터셋을 1개만 쓸 이유가없다. 최대한 많은 문제를 포함하는 커버리지로 리더보드 성능 향상을 노릴수 있다. 그렇다면 특수 loss (align loss, uniform loss는 나에게 피해가 되지 않을까?)</p>
          <p>→ 논문 코드 그대로 훈련을 시켜본 결과, submisson 하기도 전에 검증점수가 0.5 대가 나와서 loss는 CrossEntorpy만 적용하고 훈련했다. → 제출결과, 0.8276329471</p>
          <ol type="1">
          <li><strong>STEP1, STEP2의 에포크 및 하이퍼 파라미터 결정</strong></li>
          </ol>
          <p>STEP1 데이터셋은 STEP2에 비해서 저화질이다. 대신 합성 흔적은 더 뚜렷하다.</p>
          <p>그럼으로 STEP1에서는 데이터 증강시 Jpeg, Blur 정도를 약간 더 심하게 하고,</p>
          <p>STEP2에서는 해결할 문제 분포가 넓어짊에 따라서 과적합을 방지하기 위해,</p>
          <p>dropout = 0.05 → 0.1</p>
          <p>label_smoothing = 0.1 → 0.05<br />
          위 처럼 변경해줬다.</p>
          <p><strong>STEP1</strong></p>
          <pre><code>{`def step1_G_linear2() -> ExperimentConfig:
   ...
    # ---- optimization (기존 step1 그대로) ----
    BASE_LR = 1e-4
    MIN_LR = 1e-5
    WEIGHT_DECAY = 0.0
    BETAS = (0.9, 0.999)

    EPOCHS = 30
    EPOCHS_PER_CYCLE = 10
    WARMUP_EPOCHS = 1.0

    # ---- dataset ----
    BATCH_SIZE = 10
    NUM_WORKER = 4
    IMAGE_SIZE = (448, 448)

    TRAIN_FILES = STEP1.train

    AUG_CFG = C.Augmentations(
        random_horizontal_flip=0.5,
        random_affine_degrees=10,
        random_affine_translate=None,
        random_affine_scale=None,
        gaussian_blur_prob=0.1,
        gaussian_blur_kernel_size=7,
        gaussian_blur_sigma=[0.1, 1.0],
        color_jitter_brightness=0.0,
        color_jitter_contrast=0.0,
        jpeg_quality=[60, 100],
        jpeg_prob=0.3,
    )
    ...
    LORA_CFG_STEP = HAILoRAConfig(
        target_modules=["attn.out_proj", "mlp.c_proj"],
        rank=8,
        alpha=16,
        dropout=0.05,
        bias="none",
        use_rslora=False,
        use_dora=False,
    )

    TRAIN_POLICY_STEP = HAITrainPolicy(
        freeze_backbone=True,
        unfreeze_layers=["ln_pre", "ln_post", "ln_1", "ln_2"],
    )

    LOSS_CFG = C.Loss(
        ce_labels=1.0,
        label_smoothing=0.1,
        uniformity=0.0,
        real_alignment_labels=0.0,
        fake_alignment_labels=0.0,
    )`}</code></pre>
          <p><strong>STEP2</strong></p>
          <pre><code>{`def step2_G_linear2() -> ExperimentConfig:
    ...
    # ---- optimization ----
    BASE_LR = 1e-5
    MIN_LR = 1e-5
    WEIGHT_DECAY = 0.0
    BETAS = (0.9, 0.999)

    EPOCHS = 10
    EPOCHS_PER_CYCLE = 10
    WARMUP_EPOCHS = 0.2

    # ---- dataset ----
    BATCH_SIZE = 10
    NUM_WORKER = 4
    IMAGE_SIZE = (448, 448)

    TRAIN_FILES = STEP2_inpaint10k.train

    AUG_CFG = C.Augmentations(
        random_horizontal_flip=0.5,
        random_affine_degrees=10,
        random_affine_translate=None,
        random_affine_scale=None,
        gaussian_blur_prob=0.1,
        gaussian_blur_kernel_size=7,
        gaussian_blur_sigma=[0.1, 1.0],
        color_jitter_brightness=0.0,
        color_jitter_contrast=0.0,
        jpeg_quality=[50,95],
        jpeg_prob=0.3,

       ...
    LORA_CFG_STEP = HAILoRAConfig(
        target_modules=["attn.out_proj", "mlp.c_proj"],
        rank=8,
        alpha=16,
        dropout=0.1,
        bias="none",
        use_rslora=False,
        use_dora=False,
    )

    TRAIN_POLICY_STEP = HAITrainPolicy(
        freeze_backbone=True,
        unfreeze_layers=["ln_pre", "ln_post", "ln_1", "ln_2"],
    )

    LOSS_CFG = C.Loss(
        ce_labels=1.0,
        label_smoothing=0.05,
        uniformity=0.0,
        real_alignment_labels=0.0,
        fake_alignment_labels=0.0,
    )
    ...`}</code></pre>
          <p>모델 훈련 결과 val-train 의 loss와 AUC곡선</p>
          <ArchiveFigure index={16}/>
          <ArchiveFigure index={17}/>
          <p>훈련결과, STEP2 훈련 이후로는 대부분 epochs 3이후에선 과적합의 징후가 보인다.</p>
          <p>실제로 리더보드 사이트 제출결과 epochs3 부근이 가장 성능이 좋았다. 이는현재 모델이 STEP2 훈련 데이터를 학습하며, STEP1 데이터에 대한 성능이 떨어지고 있음을 뜻한다. 즉, 양측에 도움되기보단 trade-off 효과가 보인다.</p>
          <ol type="1">
          <li><strong>모델의 분류기 선정 실험</strong></li>
          </ol>
          <p>문제정의 : STEP1, STEP2 훈련이 끝났을때 데이터 단일 클래쓰지만 문재 분포가 매우 넓다. 이를 단순 선형분류기가 분류할 수 있을까? 비선형성이 필요하지 않을까?</p>
          <ArchiveFigure index={18}/>
          <p>실제 훈련된 모델과, 딥페이크 사전훈련 안된모델로 TEST와 데이터셋 샘플 분포를 뽑아본 결과, 분포차이가 매우크다. 거의 다른 문제나 마찬가지로 돼있다. 심지어 훈련된 subspace에서 조차, STEP1, STEP2는 거의 다른 군집을 이룬다.</p>
          <ArchiveFigure index={19}/>
          <p>결과적으로 여러 아키텍쳐를 훈련해본 결과, 현재 데이터셋간의 trade-off관계가 보임으로, 분류기의 아키텍쳐가 복잡해지면 오히려 성능이 하락함을 알수있다. 파인데이션 모델에서 구조를 거의 바꾸지 않고 아주 얉게 파인튜닝을 한 한계점이라고 생각된다. <strong>결론적으로 2층 MLP 모델의 분류기가 가장 성능이 좋았다.</strong></p>
          <p>그리고 정답이 공개안된 TEST데이터셋과 내 모델의 추론결과를 보았을때, 모델이 과적합될수록 STEP2에서 원래 Real이라고 판별하던 데이터에 대해서 fake판별 비중이 높아짐을 알 수 있었다.</p>
          <p>그럼으로 우린 아키텍쳐보단, step1-step2 데이터셋간의 trade-off 포인트를 더 미세하기 조절하기 위해서 디퓨전 생성이미지 데이터셋 비율을 기존 데이터셋과 비교해서 조절하며 파인튜닝을 이어갔다. 최종적으로 전체 30k개의 이미지에서, 10k개의 이미지로 줄여서 학습하고, real 데이터셋에서는 해당 데이터셋을 축소하지 않았을때 가장 성능이 좋앗다.</p>
          <ArchiveFigure index={20}/>
        </div>
      </details>
      <details>
        <summary>결과</summary>
        <div className={s.archiveText}>
          <p><strong>458팀중 전체 11등의 성능으로 최상위권의 성적으로 마무리했다. (0.94073)</strong></p>
          <ArchiveFigure index={21}/>
          <p><strong>또한 대회 내부에서 엄격한 코드검증과, 재현성 평가 이후엔</strong></p>
          <p><strong>최종 상위 10등에 들어서 최종 오프라인 발표에 진출했다.</strong></p>
          <ArchiveFigure index={22}/>
          <p><em>🎨 End2End 딥러닝 모델 개발 및 Docker배포 경험</em></p>
          <p>처음 해보는 task에서 최신 논문을 읽으며 빠르게 동향을 따라잡고, 처음부터 끝까지 데이터 수집부터 훈련 및 추론 검증을 다해보는 과정이 재미있었습니다. 앞으로 있을 task및 연구에 대한 기초 체력을 다질수 있었습니다.</p>
          <blockquote>
          <p><strong><em>Infomation</em></strong></p>
          </blockquote>
          <p><strong>개발 기간:</strong> 2025/12/29 ~ 2025/02/02</p>
          <p><strong>팀 구성: 1</strong>인</p>
          <p><strong>담당 업무:</strong> <strong>딥페이크 감지 모델 개발</strong></p>
          <blockquote>
          <p><strong><em>Review</em></strong></p>
          </blockquote>
          <p>이번 대회를 통해서 반복 훈련을 하기 위한 외부 config 파일을 통한 실험 통제와, 다른 딥러닝 모델 훈련을 위한 프레임워크에 의존하지 않고 본인이 직접 필요한 프레임워크를 개발할 수 있었습니다.</p>
          <p>또한 LoRA를 직접 적용하고, DDP를 이용해서 복수 GPU를 제대로 활용했던 첫 프로젝트 였습니다.</p>
          <h4>개발 중 이슈</h4>
          <p><strong>🩹 공용 GPU 활용 이슈</strong></p>
          <p>학부연구생이라 중간중간 다른분들과 GPU를 나눠서 돌렸어야했습니다. 그런데 제 훈련 방식은 real-fake라벨 비율을 미니배치마다 어느정도 맞춰야해서 적어도 4개의 GPU가 G사이즈 모델 돌릴땐 필요했습니다. 그래서 사실 더 많은 실험을 할 수 없었다는 아쉬움이 남습니다.</p>
          <p>다만, 덕분에 한번 프레임워크를 제대로 개발하게 됐고, 이를 통해서 매 생각나는 훈련이나 모델 튜닝마다 아주 쉽게 내부 훈련방식을 바꾸어서 비교실험을 진행할수있게 세팅했습니다. 연구실 제약사항이 저를 더 발전시켜준 상황이여서 기억에 남습니다.</p>
        </div>
      </details>
    </div>
  );
}
