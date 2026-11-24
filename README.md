# 프런트엔드

React와 TypeScript로 작성하고 Vite로 빌드하는 정적 웹사이트입니다.

## 1. 실행 방식

검증 환경은 Node.js 22.12.0과 npm 10.9.0입니다. 처음에는 아래 명령으로 저장소를 받습니다. 이미 받은 저장소는 `git pull --ff-only`로 갱신합니다.

```sh
git clone https://github.com/yoosung5480/portfolio.git
cd portfolio
```

**개발 서버 실행**

```sh
npm ci
npm run dev
```

터미널에 표시된 `Local` 주소를 브라우저에서 엽니다. 기본 주소는 `http://localhost:5173`이며, 코드를 수정하면 화면에 반영됩니다. 서버는 `Ctrl+C`로 종료합니다.

**배포용 빌드와 미리보기**

```sh
npm run build
npm run preview
```

`build`는 타입 검사 후 `dist/`를 생성합니다. `preview`의 기본 주소는 `http://localhost:4173`입니다. `main`에 푸시하면 GitHub Actions가 같은 빌드를 실행하고 `dist/`를 [GitHub Pages](https://yoosung5480.github.io/portfolio/)에 배포합니다.

## 2. 디렉토리 구조

```text
portfolio/
├── .github/workflows/  # GitHub Pages 배포
├── public/             # 빌드에 그대로 복사되는 브랜드 설정과 정적 파일
├── src/
│   ├── main.tsx        # React 앱 시작점
│   ├── app/App.tsx     # URL 라우팅과 공통 레이아웃 연결
│   ├── pages/          # home/, hai/, speaknote/, open-source/ 독립 모듈
│   └── shared/
│       ├── hooks/      # 공통 동작
│       └── ui/         # 공통 컴포넌트와 스타일
├── index.html          # HTML 진입점
├── package.json        # 실행 스크립트와 의존성
├── package-lock.json   # npm ci가 사용하는 의존성 버전
├── tsconfig.json       # TypeScript 설정
├── vite.config.ts      # 개발 서버와 빌드 설정
└── dist/               # npm run build로 생성되는 배포 파일
```

한 페이지를 수정할 때는 `src/pages/<페이지>/`에서 시작합니다. 데이터와 동작은 `use*.ts`, 화면은 `*View.tsx`, 스타일은 `*.module.css`가 담당합니다.
