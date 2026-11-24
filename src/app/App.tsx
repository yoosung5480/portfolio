import { lazy, Suspense } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router';
import { useDocumentTitle } from '../shared/hooks/useDocumentTitle';
import { usePagePosition } from '../shared/hooks/usePagePosition';
import { SiteFooter, SiteHeader } from '../shared/ui/layout/SiteFrame';

const HomePage = lazy(() =>
  import('../pages/home').then((module) => ({ default: module.HomePage })),
);
const HaiPage = lazy(() =>
  import('../pages/hai').then((module) => ({ default: module.HaiPage })),
);
const SpeakNotePage = lazy(() =>
  import('../pages/speaknote').then((module) => ({
    default: module.SpeakNotePage,
  })),
);
const OpenSourcePage = lazy(() =>
  import('../pages/open-source').then((module) => ({
    default: module.OpenSourcePage,
  })),
);

function PagePosition() {
  usePagePosition();
  return null;
}

function MissingPage() {
  useDocumentTitle('페이지를 찾을 수 없습니다');
  return (
    <section className="route-message">
      <h1>페이지를 찾을 수 없습니다</h1>
      <p>
        입력한 주소를 확인하거나 <Link to="/">포트폴리오 홈</Link>으로 이동해
        주세요.
      </p>
    </section>
  );
}

export function App() {
  return (
    <HashRouter>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Suspense
          fallback={
            <p className="route-message" role="status">
              페이지를 불러오는 중입니다.
            </p>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hai" element={<HaiPage />} />
            <Route path="/speaknote" element={<SpeakNotePage />} />
            <Route path="/open-source" element={<OpenSourcePage />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
          <PagePosition />
        </Suspense>
      </main>
      <SiteFooter />
    </HashRouter>
  );
}
