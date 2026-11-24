import { Link } from 'react-router';
import { brand } from '../brand/brand';
import { Icon } from '../icon/Icon';
import styles from './SiteFrame.module.css';

function Signature() {
  return (
    <Link
      to="/"
      className={styles.signature}
      aria-label={`${brand.name} 포트폴리오 홈`}
    >
      <span className={styles.mark}>
        <Icon name="layers" size={23} />
      </span>
      <strong>{brand.name}</strong>
      <span className={styles.wordmark}>PORTFOLIO</span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <a
        className={styles.skip}
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById('main-content')?.focus();
        }}
      >
        본문으로 건너뛰기
      </a>
      <div className={styles.row}>
        <Signature />
        <nav aria-label="주요 메뉴">
          <Link to="/?section=projects">프로젝트</Link>
          <Link to="/?section=resume">이력</Link>
          <Link to="/?section=skills">기술</Link>
          <a
            className={styles.github}
            href={brand.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub (새 창)"
          >
            <Icon name="github" size={16} />
            <span>GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <Signature />
        <a href={`mailto:${brand.email}`}>{brand.email}</a>
      </div>
    </footer>
  );
}
